// ─── 共享 LLM Provider 调用层 ─────────────────────────────────────
// 抽离自 pages/api/chat.js，让 chat.js 和 causal-explain.js 共用同一套
// multi-key DeepSeek + Gemini fallback + circuit breaker + pacing 逻辑。
//
// 设计原则：production-grade reliability — 一个 endpoint 可靠的所有特性
// 都自动惠及其他 endpoint。
//
// 使用：
//   import { callLLM } from '../lib/llm-providers';
//   const text = await callLLM({ system, message, maxTokens });

// ── 多 key 扫描：DEEPSEEK_API_KEY (= 主), DEEPSEEK_API_KEY_2/3/4/...
const collectDeepSeekKeys = () => {
  const keys = [];
  if (process.env.DEEPSEEK_API_KEY) keys.push({ name: "deepseek-a", env: "DEEPSEEK_API_KEY" });
  for (let i = 2; i <= 20; i++) {
    const envName = `DEEPSEEK_API_KEY_${i}`;
    if (process.env[envName]) {
      const letter = String.fromCharCode(96 + i); // 2 → 'b', 3 → 'c'
      keys.push({ name: `deepseek-${letter}`, env: envName });
    }
  }
  return keys;
};

export const buildProviders = () => {
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

// ── Soft pacing per provider — 平滑突发，降低 tail latency ──
// per-serverless-instance only。真正的 rate-limit 保护靠 429 handling。
const providerPacing = {
  "deepseek-a": { nextAt: 0, gapMs: 180 },
  "deepseek-b": { nextAt: 0, gapMs: 180 },
  gemini: { nextAt: 0, gapMs: 350 },
};

async function applyProviderPacing(providerName) {
  let slot = providerPacing[providerName];
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

// ── Circuit Breaker：连续失败 5 次跳过 provider 60s ──
const providerCircuit = {};
const CIRCUIT_THRESHOLD = 5;
const CIRCUIT_COOLDOWN_MS = 60000;

export function isCircuitOpen(providerName) {
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

async function callProvider(provider, system, message, maxTokens, timeoutMs, opts = {}) {
  const body = {
    model: provider.model,
    max_tokens: maxTokens,
    messages: [
      { role: "system", content: system },
      { role: "user", content: message },
    ],
  };
  if (opts.temperature != null) body.temperature = opts.temperature;

  const response = await fetch(provider.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${provider.apiKey()}`,
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(timeoutMs),
  });

  if (response.status === 429) {
    const err = new Error("rate_limited");
    err.status = 429;
    throw err;
  }

  if (!response.ok) {
    const txt = await response.text();
    const err = new Error(`${provider.name} error ${response.status}: ${txt.slice(0, 200)}`);
    err.status = response.status;
    throw err;
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content || "";
  return text;
}

async function callWithRetry(provider, system, message, maxTokens, timeoutMs, opts = {}) {
  for (let attempt = 0; attempt <= 2; attempt++) {
    try {
      await applyProviderPacing(provider.name);
      const result = await callProvider(provider, system, message, maxTokens, timeoutMs, opts);
      recordCircuitSuccess(provider.name);
      return result;
    } catch (err) {
      const isRetryable = err.status === 429 || err.name === "AbortError";
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

// ─── 主入口：跟 chat.js 同一套 multi-key + Gemini fallback 调用 ────
// opts:
//   - maxTokens: number (default 1500)
//   - timeoutMs: number (default 20000)
//   - temperature: number (forwarded if provided)
//
// 自动 DeepSeek 多 key 轮转 + 失败 → 下一个 key + 全部 DeepSeek 失败 → Gemini fallback
export async function callLLM({ system, message, maxTokens = 1500, timeoutMs = 20000, temperature }) {
  if (!system || !message) {
    throw new Error("system and message required");
  }

  const providers = buildProviders();
  if (!providers.length) {
    throw new Error("No LLM provider API keys configured");
  }

  const deepseekProviders = providers.filter((p) => p.family === "deepseek");
  const fallbackProviders = providers.filter((p) => p.family !== "deepseek");

  // Timestamp-based rotation across DeepSeek keys (avoid race conditions on counter)
  const start = deepseekProviders.length > 0
    ? Math.floor(Date.now() / 1000) % deepseekProviders.length
    : 0;
  const orderedProviders = deepseekProviders.length > 0
    ? deepseekProviders.slice(start).concat(deepseekProviders.slice(0, start)).concat(fallbackProviders)
    : providers;

  const errors = [];
  for (const provider of orderedProviders) {
    if (isCircuitOpen(provider.name)) {
      errors.push(`${provider.name}: circuit-open`);
      continue;
    }
    try {
      const text = await callWithRetry(provider, system, message, maxTokens, timeoutMs, { temperature });
      return { text, provider: provider.name };
    } catch (err) {
      errors.push(`${provider.name}: ${err.message}`);
      // 继续 fallback 到下一个 provider
    }
  }

  const e = new Error(`All providers failed: ${errors.join(" | ")}`);
  e.providersFailed = errors;
  throw e;
}
