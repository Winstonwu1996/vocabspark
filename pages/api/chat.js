import { checkPerIpLimit, checkPerUserLimit } from "../../lib/ratelimit";
import * as Sentry from "@sentry/nextjs";

export const config = {
  maxDuration: 60,
};

// 支持任意数量的 DeepSeek key：DEEPSEEK_API_KEY (= 主), DEEPSEEK_API_KEY_2/3/4/5/...
// 自动扫描 env，可无限扩展提升 RPM 容量。每个 key 独立 60 RPM，N 个 key = 60N RPM。
const collectDeepSeekKeys = () => {
  const keys = [];
  if (process.env.DEEPSEEK_API_KEY) keys.push({ name: "deepseek-a", env: "DEEPSEEK_API_KEY" });
  // 扫描 DEEPSEEK_API_KEY_2 到 _20（足够了）
  for (let i = 2; i <= 20; i++) {
    const envName = `DEEPSEEK_API_KEY_${i}`;
    if (process.env[envName]) {
      // a -> b -> c -> ... -> 命名规律
      const letter = String.fromCharCode(96 + i); // 2 → 'b', 3 → 'c', ...
      keys.push({ name: `deepseek-${letter}`, env: envName });
    }
  }
  return keys;
};

const buildProviders = () => {
  const providers = [];

  for (const k of collectDeepSeekKeys()) {
    providers.push({
      name: k.name,
      family: "deepseek",
      url: "https://api.deepseek.com/v1/chat/completions",
      apiKey: ((envName) => () => process.env[envName])(k.env),
      model: process.env.DEEPSEEK_MODEL || "deepseek-v4-flash",
    });
  }

  // OpenAI 兜底：DeepSeek(跨境)失败时的独立退路。美国节点、OpenAI 原生兼容、中文够用。
  // 排在 Gemini 前(Gemini 免费额度限流严)。key 未配则跳过。
  if (process.env.OPENAI_API_KEY) {
    providers.push({
      name: "openai",
      family: "openai",
      url: "https://api.openai.com/v1/chat/completions",
      apiKey: () => process.env.OPENAI_API_KEY,
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
    });
  }

  if (process.env.GOOGLE_AI_API_KEY) {
    providers.push({
      name: "gemini",
      family: "gemini",
      url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      apiKey: () => process.env.GOOGLE_AI_API_KEY,
      model: process.env.GEMINI_MODEL || "gemini-2.5-flash-lite",
    });
  }

  return providers;
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Soft pacing per provider to reduce burst spikes and smooth tail latency.
// NOTE: per-serverless-instance only. The real rate-limit protection is 429 handling.
const providerPacing = {
  "deepseek-a": { nextAt: 0, gapMs: 180 },
  "deepseek-b": { nextAt: 0, gapMs: 180 },
  gemini: { nextAt: 0, gapMs: 350 },
};

async function applyProviderPacing(providerName) {
  let slot = providerPacing[providerName];
  // 自动为新加的 deepseek-* (deepseek-c/d/e/...) 创建默认 pacing slot
  if (!slot && providerName.startsWith("deepseek-")) {
    slot = providerPacing[providerName] = { nextAt: 0, gapMs: 180 };
  }
  if (!slot) return;
  const now = Date.now();
  if (slot.nextAt > now) {
    await sleep(slot.nextAt - now);
  }
  slot.nextAt = Date.now() + slot.gapMs;
}

// ─── Circuit Breaker：连续失败时跳过 provider 60s ───
// per-instance 内存状态（serverless 重启会重置，OK — 60s 短窗口）
const providerCircuit = {};
const CIRCUIT_THRESHOLD = 5;     // 连续失败 5 次触发熔断
const CIRCUIT_COOLDOWN_MS = 60000; // 跳过 60 秒

function isCircuitOpen(providerName) {
  const c = providerCircuit[providerName];
  return !!(c && c.blockedUntil && Date.now() < c.blockedUntil);
}
function recordCircuitFailure(providerName) {
  const c = providerCircuit[providerName] || { failures: 0, blockedUntil: 0 };
  c.failures += 1;
  if (c.failures >= CIRCUIT_THRESHOLD) {
    c.blockedUntil = Date.now() + CIRCUIT_COOLDOWN_MS;
    c.failures = 0;
    console.warn(`[circuit] ${providerName} OPEN for ${CIRCUIT_COOLDOWN_MS}ms after ${CIRCUIT_THRESHOLD} failures`);
  }
  providerCircuit[providerName] = c;
}
function recordCircuitSuccess(providerName) {
  if (providerCircuit[providerName]) {
    providerCircuit[providerName].failures = 0;
    providerCircuit[providerName].blockedUntil = 0;
  }
}

async function callProvider(provider, system, message, maxTokens, timeoutMs) {
  const reqBody = {
    model: provider.model,
    max_tokens: maxTokens,
    messages: [
      { role: "system", content: system },
      { role: "user", content: message },
    ],
  };
  // V4-flash 默认可能开思考模式，显式关闭以保持旧 deepseek-chat 行为
  // （否则响应被推理串污染 → teach/guess 的 JSON 解析全崩 + output token 暴涨）
  if (provider.family === "deepseek") reqBody.thinking = { type: "disabled" };
  const response = await fetch(provider.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${provider.apiKey()}`,
    },
    body: JSON.stringify(reqBody),
    signal: AbortSignal.timeout(timeoutMs),
  });

  if (response.status === 429) {
    const err = new Error("rate_limited");
    err.status = 429;
    throw err;
  }

  if (!response.ok) {
    const body = await response.text();
    const err = new Error(`${provider.name} error ${response.status}: ${body}`);
    err.status = response.status;
    throw err;
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content || "";
  return text;
}

async function callWithRetry(provider, system, message, maxTokens, timeoutMs) {
  for (let attempt = 0; attempt <= 2; attempt++) {
    try {
      await applyProviderPacing(provider.name);
      const result = await callProvider(provider, system, message, maxTokens, timeoutMs);
      recordCircuitSuccess(provider.name);
      return result;
    } catch (err) {
      // 429 / timeout 计入熔断失败计数
      if (err.status === 429 || err.name === "AbortError" || err.name === "TimeoutError") {
        recordCircuitFailure(provider.name);
      }
      // 不在同一 key 上退避重试：429=该 key 本分钟配额已满(等 1-2s 不会恢复)，超时=这家慢——
      // 两种都立即抛出，由外层 provider 循环换下一个 DeepSeek key / 兜底 Gemini(多 key 轮转本身即冗余)。
      // 这避免了"在限流的 key 上白等 1-2s × 多次"叠加成可观延迟。
      throw err;
    }
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { system, message, maxTokens, preferredProviders, userApiKeys } = req.body;

  if (!system || !message) {
    return res.status(400).json({ error: "Missing system or message" });
  }

  // ─── Rate Limit ───
  // 优先级：BYO 跳过 → 登录用户 user-level（300/分）→ 游客 IP-level（300/小时）
  // admin bypass 已移除（Codex 复审：X-User-Id 软认证下白名单不安全）；高频需求走 BYO key。
  const isBYO = userApiKeys && (userApiKeys.deepseek || userApiKeys.gemini);
  if (!isBYO) {
    const userId = req.headers["x-user-id"];
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.headers["x-real-ip"] ||
      "unknown";
    let rl;
    if (userId && typeof userId === "string" && userId.length > 0) {
      rl = await checkPerUserLimit(userId);
    } else {
      rl = await checkPerIpLimit(ip);
    }
    if (!rl.allowed) {
      // 诊断 + Sentry 告警（P0-2）：429 必须 loud, 不能再静默淹没在 console.warn
      const meta = {
        ip,
        ua: (req.headers["user-agent"] || "").slice(0, 120),
        ref: (req.headers["referer"] || "").slice(0, 80),
        origin: req.headers["origin"] || "",
        hasUid: !!userId,
        ts: new Date().toISOString(),
      };
      console.warn("[chat][429]", JSON.stringify(meta));
      try {
        Sentry.captureMessage("rate_limited:/api/chat", {
          level: "warning",
          tags: {
            route: "/api/chat",
            limitType: userId ? "user" : "ip",
            hasUid: !!userId,
          },
          extra: meta,
        });
      } catch (e) { /* Sentry 挂了不影响响应 */ }
      return res.status(429).json({ error: "请求过于频繁，请稍后再试" });
    }
  }

  // clamp 上限 4000：客户端曾可传任意值（DeepSeek 可到 8192）→ 成本放大攻击。默认仍 2000。
  const tokens = Math.min(Number(maxTokens) || 2000, 4000);
  const errors = [];

  // BYO API Key: 如果用户提供了自己的 key，优先使用
  let providers;
  if (userApiKeys && (userApiKeys.deepseek || userApiKeys.gemini)) {
    providers = [];
    if (userApiKeys.deepseek) {
      providers.push({
        name: "user-deepseek",
        family: "deepseek",
        url: "https://api.deepseek.com/v1/chat/completions",
        apiKey: () => userApiKeys.deepseek,
        model: process.env.DEEPSEEK_MODEL || "deepseek-v4-flash",
      });
    }
    if (userApiKeys.gemini) {
      providers.push({
        name: "user-gemini",
        family: "gemini",
        url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
        apiKey: () => userApiKeys.gemini,
        model: process.env.GEMINI_MODEL || "gemini-2.5-flash-lite",
      });
    }
  } else {
    providers = buildProviders();
  }
  if (!providers.length) {
    return res.status(500).json({ error: "No provider API keys configured" });
  }

  // 每 provider 超时：不再按 provider 数瓜分(旧 min(20s,55s/N) 在 N=3 时每家仅 18s，
  // 跨境高峰一次正常长生成就被自己掐断当失败)。改为固定上限，再用"剩余总预算"夹住，
  // 让首选(健康的 DeepSeek)拿到足额时间，同时整体不超 55s(Vercel maxDuration 60s 留 5s buffer)。
  const totalBudgetMs = 55000;
  const perProviderCap = Number(process.env.CHAT_PROVIDER_TIMEOUT_MS || 24000);
  const loopStartMs = Date.now();

  const deepseekProviders = providers.filter((p) => p.family === "deepseek");
  const fallbackProviders = providers.filter((p) => p.family !== "deepseek");

  let orderedProviders;
  if (deepseekProviders.length > 0) {
    // Use timestamp-based rotation instead of mutable counter to avoid race conditions
    const start = Math.floor(Date.now() / 1000) % deepseekProviders.length;
    orderedProviders = deepseekProviders
      .slice(start)
      .concat(deepseekProviders.slice(0, start))
      .concat(fallbackProviders);
  } else {
    orderedProviders = providers;
  }

  if (Array.isArray(preferredProviders) && preferredProviders.length > 0) {
    const prefSet = new Set(preferredProviders);
    const preferred = orderedProviders.filter((p) => prefSet.has(p.name));
    const rest = orderedProviders.filter((p) => !prefSet.has(p.name));
    orderedProviders = preferred.concat(rest);
  }

  // DeepSeek 全时段优先（2026-04-23 实测：速度持平、中文质量更优、JSON 输出
  // 稳定性显著好于 Gemini 2.5）。Gemini 保留为 fallback，DeepSeek 429 或
  // 超时自动切换。如需恢复"白天 Gemini 优先"的旧行为（应对 DeepSeek 高峰
  // 限流），设 env CHAT_DAYTIME_GEMINI=1。
  if (process.env.CHAT_DAYTIME_GEMINI === "1" &&
      (!Array.isArray(preferredProviders) || preferredProviders.length === 0)) {
    const utcHour = new Date().getUTCHours();
    if (utcHour >= 0 && utcHour < 14) {
      const gemini = orderedProviders.filter((p) => p.family === "gemini");
      const rest = orderedProviders.filter((p) => p.family !== "gemini");
      if (gemini.length > 0) orderedProviders = gemini.concat(rest);
    }
  }

  for (const provider of orderedProviders) {
    // 熔断器：跳过最近频繁失败的 provider
    if (isCircuitOpen(provider.name)) {
      errors.push(`${provider.name}: circuit_open`);
      continue;
    }
    // 用剩余预算夹住每家超时：首家拿满 perProviderCap，后续串行兜底按剩余时间收窄
    const remainingMs = totalBudgetMs - (Date.now() - loopStartMs);
    if (remainingMs < 4000) { errors.push(`${provider.name}: budget_exhausted`); continue; }
    const timeoutMs = Math.max(4000, Math.min(perProviderCap, remainingMs));
    try {
      const t0 = Date.now();
      const text = await callWithRetry(provider, system, message, tokens, timeoutMs);
      res.setHeader("X-Provider", provider.name);
      res.setHeader("X-Provider-Family", provider.family || provider.name);
      res.setHeader("X-Provider-Latency-Ms", String(Date.now() - t0));
      return res.status(200).json({ text });
    } catch (err) {
      console.error(`[${provider.name}] failed:`, err.message);
      errors.push(`${provider.name}: ${err.message}`);
    }
  }

  // Generic error message to client; details logged server-side above
  return res.status(500).json({
    error: "AI 服务暂时不可用，请稍后重试",
  });
}
