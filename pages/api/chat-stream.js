// Edge Runtime SSE 流式端点 — 只用于 teach 等纯文本任务
// 与 /api/chat 并存：/api/chat 走 Node Runtime（非流式），本端点走 Edge Runtime（流式透传）。
// 客户端任何失败都会 fallback 到 /api/chat，不会影响生产稳定性。
import { checkPerIpLimit, checkPerUserLimit, checkGlobalIpCeiling } from "../../lib/ratelimit";
import { getCached, setCached, cachedTextToSSEStream } from "../../lib/teachCache";
import { isCompleteTeachJSON } from "../../lib/teachValidate";
import { getBearerToken, checkTopicAccess } from "../../lib/entitlement-server";
import * as Sentry from "@sentry/nextjs";

export const config = {
  runtime: "edge",
  // JSON teach 需要 2500 tokens，实测生成 60-80s 不罕见。Pro 计划允许最多 300s。
  // 设 180s 覆盖完整生成，留 buffer 给边缘情况。
  maxDuration: 180,
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// FNV-1a 32-bit 字符串指纹（同步、Edge 可用）— 把 prompt 绑进缓存 key，防跨用户投毒。
function fnv1a(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return h.toString(36);
}

// 有效缓存 key = 客户端 cacheKey + prompt 指纹。
// 客户端 cacheKey 完全可控，若直接用作 key，攻击者可对 'dr-v1:abandon' 写任意内容投毒所有孩子。
// 绑上 hash(system+message)：合法用户同词同 prompt → 同 key → 缓存照命中；
// 攻击者换 prompt → 不同 key → 投毒写到无人读的 key，命中链断开。
function deriveCacheKey(cacheKey, system, message) {
  if (!cacheKey) return cacheKey;
  return cacheKey + ":p" + fnv1a((system || "") + " " + (message || ""));
}

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

// history 的问答/课堂对话走 Pro（教学对话质量优先）；vocab 的内容生成继续用 Flash
// （实测 Pro 首字仅 +0.1s，但 token 价 +211% —— 只给真正需要的那条路，别全局涨价）。
// 两者都可用 env 覆盖，回滚不必改代码。
const DS_FLASH = () => process.env.DEEPSEEK_MODEL || "deepseek-v4-flash";
const DS_PRO = () => process.env.DEEPSEEK_MODEL_PRO || "deepseek-v4-pro";

const buildProviders = (userApiKeys, useProModel) => {
  const dsModel = useProModel ? DS_PRO() : DS_FLASH();
  const providers = [];

  // BYO key 优先
  if (userApiKeys && (userApiKeys.deepseek || userApiKeys.gemini)) {
    if (userApiKeys.deepseek) {
      providers.push({
        name: "user-deepseek",
        family: "deepseek",
        url: "https://api.deepseek.com/v1/chat/completions",
        apiKey: userApiKeys.deepseek,
        model: dsModel,
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
      model: dsModel,
    });
  }

  // OpenAI 兜底：DeepSeek(跨境)失败时的独立退路。美国节点、OpenAI 原生兼容、中文够用。
  // 排在 Gemini 前(Gemini 免费额度限流严)。key 未配则跳过。
  if (process.env.OPENAI_API_KEY) {
    providers.push({
      name: "openai",
      family: "openai",
      url: "https://api.openai.com/v1/chat/completions",
      apiKey: process.env.OPENAI_API_KEY,
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
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
  const { system, message, maxTokens, preferredProviders, userApiKeys, jsonMode, cacheKey, topicId } = body || {};
  if (!system || !message) {
    return new Response(JSON.stringify({ error: "Missing system or message" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // BYO 检测（用户用自带 key 时跳过缓存 + 跳过 rate limit）
  const isBYO = userApiKeys && (userApiKeys.deepseek || userApiKeys.gemini);

  // ─── history 请求：服务端付费闸 + Pro 模型 ───
  // 带 topicId ⇒ 这是 history 课堂对话/追问。此前服务端完全不看 tier，
  // 客户端 gate 一改就能白嫖整门付费课。
  // transient（Supabase 抽风）→ 放行但降级 Flash：付费孩子的课绝不被验证服务打断。
  let useProModel = false;
  let entUserId = null;
  if (topicId && !isBYO) {
    const gate = await checkTopicAccess(getBearerToken(req), String(topicId));
    entUserId = gate.verified ? gate.userId : null;
    if (!gate.allow) {
      return new Response(
        JSON.stringify({ error: "upgrade required", topicId, tier: gate.tier }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }
    // 只有验明正身且确实有资格才给 Pro —— transient 时降级 Flash，避免
    // 「验不了」被当成免费拿贵模型的口子。
    useProModel = !gate.transient && gate.verified;
    if (gate.transient) console.warn("[chat-stream] entitlement transient → fail-open + flash", topicId);
  }

  // prompt 指纹绑进缓存 key（防跨用户投毒，见 deriveCacheKey）
  const effectiveCacheKey = deriveCacheKey(cacheKey, system, message);

  // ─── Teach Cache Hit ───
  // 客户端可传 cacheKey（如 "teach-core-v1:abandon:L2"）请求服务端缓存命中。
  // 命中则秒回（封装为 SSE 流，客户端无感知）。
  if (cacheKey && !isBYO) {
    const cached = await getCached(effectiveCacheKey);
    // 命中也要校验：jsonMode 下，旧 bundle 仍可能带 v2 cacheKey 命中历史污染条目
    // （可解析但缺字段）。不完整则当未命中，落到下方 LLM 重新生成，绝不回污染内容 (Codex P2)。
    let cachedOk = !!cached;
    if (cached && jsonMode) {
      try { cachedOk = isCompleteTeachJSON(JSON.parse(cached)); } catch (e) { cachedOk = false; }
    }
    if (cached && cachedOk) {
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

  // ─── Rate Limit ───
  // BYO → 登录用户 user-level → 游客 IP-level
  // admin bypass 已移除（Codex 复审：X-User-Id 软认证下白名单不安全）
  if (!isBYO) {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    // 身份优先级：token 验过的 userId > 未验证的 X-User-Id 头。
    // 头是可伪造的，只能当"配额分组提示"，不能当安全边界 —— 真正的安全边界是
    // 下面那道恒定生效的 IP 天花板（堵轮换 UID 拿无限桶）。
    const headerUid = req.headers.get("x-user-id");
    const bucketUid = entUserId || headerUid;

    const ceiling = await checkGlobalIpCeiling(ip);
    if (!ceiling.allowed) {
      console.warn("[chat-stream][429-ipmax]", JSON.stringify({ ip, ts: new Date().toISOString() }));
      try {
        Sentry.captureMessage("rate_limited:ip_ceiling:/api/chat-stream", {
          level: "warning", tags: { route: "/api/chat-stream" }, extra: { ip },
        });
      } catch (e) {}
      return new Response(JSON.stringify({ error: "Too many requests" }), {
        status: 429,
        headers: { "Content-Type": "application/json", "Retry-After": "600" },
      });
    }

    let rl;
    if (bucketUid && bucketUid.length > 0) {
      rl = await checkPerUserLimit(bucketUid);
    } else {
      rl = await checkPerIpLimit(ip);
    }
    const userId = bucketUid;
    if (!rl.allowed) {
      // 诊断 + Sentry 告警（P0-2）
      const meta = {
        ip,
        ua: (req.headers.get("user-agent") || "").slice(0, 120),
        ref: (req.headers.get("referer") || "").slice(0, 80),
        origin: req.headers.get("origin") || "",
        hasUid: !!userId,
        ts: new Date().toISOString(),
      };
      console.warn("[chat-stream][429]", JSON.stringify(meta));
      try {
        Sentry.captureMessage("rate_limited:/api/chat-stream", {
          level: "warning",
          tags: {
            route: "/api/chat-stream",
            limitType: userId ? "user" : "ip",
            hasUid: !!userId,
          },
          extra: meta,
        });
      } catch (e) { /* Sentry 挂了不影响响应 */ }
      return new Response(JSON.stringify({ error: "请求过于频繁，请稍后再试" }), {
        status: 429,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  // clamp 上限 4000：客户端曾可传任意值（DeepSeek 可到 8192）→ 成本放大。默认仍 900。
  const tokens = Math.min(Number(maxTokens) || 900, 4000);
  const providers = buildProviders(userApiKeys, useProModel);
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
          },
          // V4-flash 默认可能开思考模式，显式关闭：否则 stream 会先吐推理串，污染 teach 内容 + token 暴涨
          provider.family === "deepseek" ? { thinking: { type: "disabled" } } : {},
          jsonMode ? { response_format: { type: "json_object" } } : {})),
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
          // 实际用了哪个模型 —— 线上排查「这条到底走没走 Pro」用，无需翻日志
          "X-Model": provider.model || "",
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
                // 关键：写缓存前验证内容完整性，避免不完整 JSON 污染所有后续用户
                let valid = false;
                if (fullText && fullText.length > 50) {
                  if (jsonMode) {
                    // teach 是 JSON 模式：不仅要能解析，还必须含必备结构字段（opening + teach）才缓存。
                    // 仅 JSON.parse 通过不够——模型偶尔漏字段会产出"可解析但不完整"的 JSON，
                    // 一旦缓存就对所有命中该 key 的用户串原始 JSON（economical teach 页根因）。
                    try {
                      if (isCompleteTeachJSON(JSON.parse(fullText))) valid = true;
                      else console.warn(`[chat-stream] cache skip - incomplete teach JSON for ${cacheKey}`);
                    } catch (e) {
                      console.warn(`[chat-stream] cache skip - invalid JSON for ${cacheKey}: ${e.message}`);
                    }
                  } else {
                    // 非 JSON（如重点攻克讲解纯文本）：完整讲解 ~800-1500 字，截断/坏内容多 <300。
                    // 提高门槛到 300，避免把半截/坏的内容缓存 30 天后跨用户复用 (Codex P2)。
                    if (fullText.length > 300) valid = true;
                    else console.warn(`[chat-stream] cache skip - non-JSON too short (${fullText.length}) for ${cacheKey}`);
                  }
                }
                if (valid) {
                  setCached(effectiveCacheKey, fullText).catch(() => {});
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
