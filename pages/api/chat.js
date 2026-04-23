export const config = {
  maxDuration: 60,
};

const buildProviders = () => {
  const providers = [];

  if (process.env.DEEPSEEK_API_KEY) {
    providers.push({
      name: "deepseek-a",
      family: "deepseek",
      url: "https://api.deepseek.com/v1/chat/completions",
      apiKey: () => process.env.DEEPSEEK_API_KEY,
      model: "deepseek-chat",
    });
  }

  if (process.env.DEEPSEEK_API_KEY_2) {
    providers.push({
      name: "deepseek-b",
      family: "deepseek",
      url: "https://api.deepseek.com/v1/chat/completions",
      apiKey: () => process.env.DEEPSEEK_API_KEY_2,
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
  const slot = providerPacing[providerName];
  if (!slot) return;
  const now = Date.now();
  if (slot.nextAt > now) {
    await sleep(slot.nextAt - now);
  }
  slot.nextAt = Date.now() + slot.gapMs;
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
      return await callProvider(provider, system, message, maxTokens, timeoutMs);
    } catch (err) {
      const isRetryable = err.status === 429 || err.name === "AbortError";
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
