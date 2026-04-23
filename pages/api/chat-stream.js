// Edge Runtime SSE 流式端点 — 只用于 teach 等纯文本任务
// 与 /api/chat 并存：/api/chat 走 Node Runtime（非流式），本端点走 Edge Runtime（流式透传）。
// 客户端任何失败都会 fallback 到 /api/chat，不会影响生产稳定性。
export const config = {
  runtime: "edge",
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

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

  if (process.env.DEEPSEEK_API_KEY) {
    providers.push({
      name: "deepseek-a",
      family: "deepseek",
      url: "https://api.deepseek.com/v1/chat/completions",
      apiKey: process.env.DEEPSEEK_API_KEY,
      model: "deepseek-chat",
    });
  }
  if (process.env.DEEPSEEK_API_KEY_2) {
    providers.push({
      name: "deepseek-b",
      family: "deepseek",
      url: "https://api.deepseek.com/v1/chat/completions",
      apiKey: process.env.DEEPSEEK_API_KEY_2,
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
  const { system, message, maxTokens, preferredProviders, userApiKeys } = body || {};
  if (!system || !message) {
    return new Response(JSON.stringify({ error: "Missing system or message" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
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

  // 时段切换：UTC 0-14（国内白天）DeepSeek 高峰，优先 Gemini
  if (!Array.isArray(preferredProviders) || preferredProviders.length === 0) {
    const utcHour = new Date().getUTCHours();
    if (utcHour >= 0 && utcHour < 14) {
      const gemini = orderedProviders.filter((p) => p.family === "gemini");
      const rest = orderedProviders.filter((p) => p.family !== "gemini");
      if (gemini.length > 0) orderedProviders = gemini.concat(rest);
    }
  }

  const errors = [];
  const perProviderTimeoutMs = 25000;

  for (const provider of orderedProviders) {
    for (let attempt = 0; attempt <= 1; attempt++) {
      try {
        const response = await fetch(provider.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${provider.apiKey}`,
          },
          body: JSON.stringify({
            model: provider.model,
            max_tokens: tokens,
            stream: true,
            messages: [
              { role: "system", content: system },
              { role: "user", content: message },
            ],
          }),
          signal: AbortSignal.timeout(perProviderTimeoutMs),
        });

        if (response.status === 429 && attempt < 1) {
          await sleep(800 * Math.pow(2, attempt));
          continue;
        }

        if (!response.ok) {
          let text = "";
          try { text = await response.text(); } catch {}
          errors.push(`${provider.name}: ${response.status}`);
          console.error(`[chat-stream] ${provider.name} ${response.status}: ${text.slice(0, 200)}`);
          break; // 换下一个 provider
        }

        // 原生透传 provider 的 SSE body，客户端自行解析
        // Edge Runtime 原生支持 ReadableStream 透传，不会缓冲
        return new Response(response.body, {
          status: 200,
          headers: {
            "Content-Type": "text/event-stream; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
            "Connection": "keep-alive",
            "X-Provider": provider.name,
            "X-Provider-Family": provider.family || provider.name,
          },
        });
      } catch (err) {
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
