// Edge Runtime SSE 流式端点 — 只用于 teach 等纯文本任务
// 与 /api/chat 并存：/api/chat 走 Node Runtime（非流式），本端点走 Edge Runtime（流式透传）。
// 客户端任何失败都会 fallback 到 /api/chat，不会影响生产稳定性。
import { checkPerIpLimit } from "../../lib/ratelimit";
import { getCached, setCached, cachedTextToSSEStream } from "../../lib/teachCache";

export const config = {
  runtime: "edge",
  // JSON teach 需要 2500 tokens，实测生成 60-80s 不罕见。Pro 计划允许最多 300s。
  // 设 180s 覆盖完整生成，留 buffer 给边缘情况。
  maxDuration: 180,
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ─── Circuit Breaker（per-instance，Edge Runtime instance 共享内存）───
const providerCircuit = {};
const CIRCUIT_THRESHOLD = 5;
const CIRCUIT_COOLDOWN_MS = 60000;
function isCircuitOpen(name) {
  const c = providerCircuit[name];
  return !!(c && c.blockedUntil && Date.now() < c.blockedUntil);
}
function recordCircuitFailure(name) {
  const c = providerCircuit[name] || { failures: 0, blockedUntil: 0 };
  c.failures += 1;
  if (c.failures >= CIRCUIT_THRESHOLD) {
    c.blockedUntil = Date.now() + CIRCUIT_COOLDOWN_MS;
    c.failures = 0;
    console.warn(`[circuit] ${name} OPEN`);
  }
  providerCircuit[name] = c;
}
function recordCircuitSuccess(name) {
  if (providerCircuit[name]) {
    providerCircuit[name].failures = 0;
    providerCircuit[name].blockedUntil = 0;
  }
}

// 与 chat.js 一致：扫描任意数量 DeepSeek key (DEEPSEEK_API_KEY, _2, _3, ...)
const collectDeepSeekKeys = () => {
  const keys = [];
  if (process.env.DEEPSEEK_API_KEY) keys.push({ name: "deepseek-a", env: "DEEPSEEK_API_KEY" });
  for (let i = 2; i <= 20; i++) {
    const envName = `DEEPSEEK_API_KEY_${i}`;
    if (process.env[envName]) {
      const letter = String.fromCharCode(96 + i);
      keys.push({ name: `deepseek-${letter}`, env: envName });
    }
  }
  return keys;
};

const buildProviders = (userApiKeys) => {
  const providers = [];

  // BYO key 优先
  if (userApiKeys && (userApiKeys.deepseek || userApiKeys.gemini)) {
    if (userApiKeys.deepseek) {
      providers.push({
        name: "user-deepseek",
        family: "deepseek",
        url: "https://api.deepseek.com/v1/chat/completions",
        apiKey: userApiKeys.deepseek,
        model: "deepseek-chat",
      });
    }
    if (userApiKeys.gemini) {
      providers.push({
        name: "user-gemini",
        family: "gemini",
        url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
        apiKey: userApiKeys.gemini,
        model: "gemini-2.5-flash-lite",
      });
    }
    return providers;
  }

  for (const k of collectDeepSeekKeys()) {
    providers.push({
      name: k.name,
      family: "deepseek",
      url: "https://api.deepseek.com/v1/chat/completions",
      apiKey: process.env[k.env],
      model: "deepseek-chat",
    });
  }

  if (process.env.GOOGLE_AI_API_KEY) {
    providers.push({
      name: "gemini",
      family: "gemini",
      url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      apiKey: process.env.GOOGLE_AI_API_KEY,
      model: process.env.GEMINI_MODEL || "gemini-2.5-flash-lite",
    });
  }
  return providers;
};

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body;
  try { body = await req.json(); } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  const { system, message, maxTokens, preferredProviders, userApiKeys, jsonMode, cacheKey } = body || {};
  if (!system || !message) {
    return new Response(JSON.stringify({ error: "Missing system or message" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // BYO 检测（用户用自带 key 时跳过缓存 + 跳过 rate limit）
  const isBYO = userApiKeys && (userApiKeys.deepseek || userApiKeys.gemini);

  // ─── Teach Cache Hit ───
  // 客户端可传 cacheKey（如 "teach-core-v1:abandon:L2"）请求服务端缓存命中。
  // 命中则秒回（封装为 SSE 流，客户端无感知）。
  if (cacheKey && !isBYO) {
    const cached = await getCached(cacheKey);
    if (cached) {
      return new Response(cachedTextToSSEStream(cached), {
        status: 200,
        headers: {
          "Content-Type": "text/event-stream; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
          "Connection": "keep-alive",
          "X-Provider": "cache",
          "X-Cache": "HIT",
        },
      });
    }
  }

  // ─── Rate Limit (per IP, 50/day) ───
  if (!isBYO) {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const rl = await checkPerIpLimit(ip);
    if (!rl.allowed) {
      return new Response(JSON.stringify({ error: "请求过于频繁，请稍后再试" }), {
        status: 429,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  const tokens = maxTokens || 900;
  const providers = buildProviders(userApiKeys);
  if (!providers.length) {
    return new Response(JSON.stringify({ error: "No provider API keys configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Provider 排序：DeepSeek 优先，Gemini 兜底（与 /api/chat 保持一致）
  const deepseekProviders = providers.filter((p) => p.family === "deepseek");
  const fallbackProviders = providers.filter((p) => p.family !== "deepseek");
  let orderedProviders =
    deepseekProviders.length > 0
      ? [...deepseekProviders, ...fallbackProviders]
      : [...providers];

  if (Array.isArray(preferredProviders) && preferredProviders.length > 0) {
    const prefSet = new Set(preferredProviders);
    const preferred = orderedProviders.filter((p) => prefSet.has(p.name));
    const rest = orderedProviders.filter((p) => !prefSet.has(p.name));
    orderedProviders = preferred.concat(rest);
  }

  // DeepSeek 全时段优先（2026-04-23 实测：TTFT 1.1s、总时长 27s、中文质量
  // 明显优于 Gemini）。Gemini 保留为兜底，DeepSeek 失败/限流时自动切换。
  // 如需恢复"白天 Gemini 优先"的旧行为（应对 DeepSeek 高峰期），
  // 设 env CHAT_STREAM_DAYTIME_GEMINI=1。
  if (process.env.CHAT_STREAM_DAYTIME_GEMINI === "1" &&
      (!Array.isArray(preferredProviders) || preferredProviders.length === 0)) {
    const utcHour = new Date().getUTCHours();
    if (utcHour >= 0 && utcHour < 14) {
      const gemini = orderedProviders.filter((p) => p.family === "gemini");
      const rest = orderedProviders.filter((p) => p.family !== "gemini");
      if (gemini.length > 0) orderedProviders = gemini.concat(rest);
    }
  }

  const errors = [];
  // 120s per provider：JSON teach 需要 2500 tokens，实测生成 60-80s 不罕见。
  // 配合 maxDuration: 180 整体预算，留 60s buffer 给 fallback。
  const perProviderTimeoutMs = 120000;

  for (const provider of orderedProviders) {
    // 熔断：跳过最近频繁失败的 provider
    if (isCircuitOpen(provider.name)) {
      errors.push(`${provider.name}: circuit_open`);
      continue;
    }
    for (let attempt = 0; attempt <= 1; attempt++) {
      try {
        const response = await fetch(provider.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${provider.apiKey}`,
          },
          body: JSON.stringify(Object.assign({
            model: provider.model,
            max_tokens: tokens,
            stream: true,
            messages: [
              { role: "system", content: system },
              { role: "user", content: message },
            ],
          }, jsonMode ? { response_format: { type: "json_object" } } : {})),
          signal: AbortSignal.timeout(perProviderTimeoutMs),
        });

        if (response.status === 429) {
          recordCircuitFailure(provider.name);
          if (attempt < 1) {
            await sleep(800 * Math.pow(2, attempt));
            continue;
          }
        }

        if (!response.ok) {
          let text = "";
          try { text = await response.text(); } catch {}
          errors.push(`${provider.name}: ${response.status}`);
          console.error(`[chat-stream] ${provider.name} ${response.status}: ${text.slice(0, 200)}`);
          break; // 换下一个 provider
        }

        // 成功开始流式响应：清零 circuit 失败计数
        recordCircuitSuccess(provider.name);

        // 如果带 cacheKey 且未命中（已走到 LLM）→ 边透传边累积，完成后写缓存
        // 否则直接透传（最小开销）
        const cacheHeaders = {
          "Content-Type": "text/event-stream; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
          "Connection": "keep-alive",
          "X-Provider": provider.name,
          "X-Provider-Family": provider.family || provider.name,
          "X-Cache": cacheKey ? "MISS" : "BYPASS",
        };

        if (!cacheKey || isBYO) {
          // 不缓存：原生透传，零额外开销
          return new Response(response.body, { status: 200, headers: cacheHeaders });
        }

        // 累积模式：解析 SSE delta、累加 fullText、流出原始 chunk、结束时写缓存
        const upstreamReader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullText = "";
        let lineBuffer = "";
        const teeStream = new ReadableStream({
          async pull(controller) {
            try {
              const { done, value } = await upstreamReader.read();
              if (done) {
                if (fullText && fullText.length > 50) {
                  // 后台写缓存（不 await，不阻塞响应关闭）
                  setCached(cacheKey, fullText).catch(() => {});
                }
                controller.close();
                return;
              }
              // 透传原始 bytes
              controller.enqueue(value);
              // 同时解析累积内容
              lineBuffer += decoder.decode(value, { stream: true });
              const lines = lineBuffer.split("\n");
              lineBuffer = lines.pop() || "";
              for (const line of lines) {
                const t = line.trim();
                if (!t || t[0] === ":" || !t.startsWith("data: ")) continue;
                const payload = t.slice(6).trim();
                if (payload === "[DONE]") continue;
                try {
                  const j = JSON.parse(payload);
                  const delta = j?.choices?.[0]?.delta?.content;
                  if (delta) fullText += delta;
                } catch (e) {}
              }
            } catch (err) {
              controller.error(err);
            }
          },
          cancel() {
            try { upstreamReader.cancel(); } catch (e) {}
          },
        });
        return new Response(teeStream, { status: 200, headers: cacheHeaders });
      } catch (err) {
        // timeout / network error 计入熔断
        if (err.name === "TimeoutError" || err.name === "AbortError") {
          recordCircuitFailure(provider.name);
        }
        errors.push(`${provider.name}: ${err.message || err.name}`);
        console.error(`[chat-stream] ${provider.name} threw:`, err.message);
        break;
      }
    }
  }

  // 通用错误，详情只在服务端日志
  return new Response(JSON.stringify({ error: "Stream providers unavailable" }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
}
