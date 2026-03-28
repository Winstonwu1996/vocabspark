export const config = {
  runtime: "edge",
};

const buildProviders = () => {
  const providers = [];
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
      model: "gemini-2.5-flash-lite",
    });
  }
  return providers;
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { system, message, maxTokens, preferredProviders } = await req.json();
  if (!system || !message) {
    return new Response(JSON.stringify({ error: "Missing system or message" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const tokens = maxTokens || 2000;
  const providers = buildProviders();
  if (!providers.length) {
    return new Response(JSON.stringify({ error: "No provider API keys configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Build ordered providers
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

  // Time-based: during DeepSeek peak (China daytime UTC 0-14), prefer Gemini
  if (!Array.isArray(preferredProviders) || preferredProviders.length === 0) {
    const utcHour = new Date().getUTCHours();
    if (utcHour >= 0 && utcHour < 14) {
      const gemini = orderedProviders.filter((p) => p.family === "gemini");
      const rest = orderedProviders.filter((p) => p.family !== "gemini");
      if (gemini.length > 0) orderedProviders = gemini.concat(rest);
    }
  }

  const errors = [];

  for (const provider of orderedProviders) {
    for (let attempt = 0; attempt <= 2; attempt++) {
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
        });

        if (response.status === 429 && attempt < 2) {
          await sleep(1000 * Math.pow(2, attempt));
          continue;
        }

        if (!response.ok) {
          const body = await response.text();
          errors.push(`${provider.name}: ${response.status} ${body}`);
          break; // Try next provider
        }

        // Pipe provider's SSE stream directly to client (Edge Runtime supports this natively)
        return new Response(response.body, {
          headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache, no-transform",
            "X-Provider": provider.name,
            "X-Provider-Family": provider.family || provider.name,
          },
        });
      } catch (err) {
        errors.push(`${provider.name}: ${err.message}`);
        break; // Try next provider
      }
    }
  }

  return new Response(JSON.stringify({ error: "All providers failed", details: errors }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
}
