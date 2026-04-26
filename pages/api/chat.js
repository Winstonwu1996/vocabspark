import { checkPerIpLimit } from "../../lib/ratelimit";

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
      model: "deepseek-chat",
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
  const response = await fetch(provider.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${provider.apiKey()}`,
    },
    body: JSON.stringify({
      model: provider.model,
      max_tokens: maxTokens,
      messages: [
        { role: "system", content: system },
        { role: "user", content: message },
      ],
    }),
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
      const isRetryable = err.status === 429 || err.name === "AbortError";
      // 429 / timeout 计入熔断失败计数
      if (err.status === 429 || err.name === "AbortError" || err.name === "TimeoutError") {
        recordCircuitFailure(provider.name);
      }
      if (isRetryable && attempt < 2) {
        await sleep(1000 * Math.pow(2, attempt));
        continue;
      }
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

  // ─── Rate Limit (per IP, 50/day) ───
  // BYO key 用户用自己的 quota，跳过限流
  const isBYO = userApiKeys && (userApiKeys.deepseek || userApiKeys.gemini);
  if (!isBYO) {
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.headers["x-real-ip"] ||
      "unknown";
    const rl = await checkPerIpLimit(ip);
    if (!rl.allowed) {
      return res.status(429).json({ error: "请求过于频繁，请稍后再试" });
    }
  }

  const tokens = maxTokens || 2000;
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
        model: "deepseek-chat",
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

  // Calculate per-provider timeout: leave 5s buffer for Vercel, divide remaining among providers
  const totalBudgetMs = 55000;
  const timeoutMs = Math.min(
    Number(process.env.CHAT_PROVIDER_TIMEOUT_MS || 20000),
    Math.floor(totalBudgetMs / providers.length)
  );

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
