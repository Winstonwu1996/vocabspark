// ─────────────────────────────────────────────────────────────────────────────
// Teach 内容服务端缓存（Upstash Redis）
// ─────────────────────────────────────────────────────────────────────────────
//
// 目的：高频词的通用 teach 内容跨用户复用，省 60-80% LLM 调用 + 等比降 RPM 占用。
//
// 用法（chat-stream.js 路径）：
//   1. 请求带 cacheKey（如 "teach-core-v1:abandon:L2"）
//   2. getCached(cacheKey) 命中 → 立即返流式响应（封装为 SSE）
//   3. 未命中 → 走 LLM，stream 透传同时累积全文 → 完成后 setCached(...)
//
// 缓存策略：
// - TTL 30 天（模型迭代/词表更新时自然过期）
// - key 命名带版本号（v1）便于将来全局失效（升 v2 即可）
// - graceful degrade：env (UPSTASH_REDIS_REST_URL/TOKEN) 未设时 get/set 全 no-op
//
// 与 lib/ratelimit.js 共用同一 Upstash 实例（不同 prefix：rl: vs tc:）。
// ─────────────────────────────────────────────────────────────────────────────

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

const isConfigured = () => !!(UPSTASH_URL && UPSTASH_TOKEN);

const PREFIX = "tc:";       // teach-cache 前缀
const DEFAULT_TTL_SEC = 30 * 24 * 60 * 60; // 30 天

/**
 * 读缓存。命中返字符串，未命中或失败返 null。
 * 失败不抛错（fail-open，不阻塞 LLM 路径）。
 */
export async function getCached(key) {
  if (!isConfigured() || !key) return null;
  const fullKey = encodeURIComponent(PREFIX + key);
  try {
    const res = await fetch(`${UPSTASH_URL}/get/${fullKey}`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
      signal: AbortSignal.timeout(500),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.result || null;
  } catch (err) {
    console.warn(`[teachCache] get failed for ${key}:`, err.message);
    return null;
  }
}

/**
 * 写缓存。失败不抛错。
 * @param {string} key
 * @param {string} value — 完整 teach 文本
 * @param {number} ttlSec — 过期秒数，默认 30 天
 */
export async function setCached(key, value, ttlSec) {
  if (!isConfigured() || !key || !value) return;
  const ttl = ttlSec || DEFAULT_TTL_SEC;
  // Upstash REST: SET <key> <value> EX <seconds>
  // value 可能含特殊字符，用 body-style POST 更安全
  try {
    const res = await fetch(`${UPSTASH_URL}/set/${encodeURIComponent(PREFIX + key)}?EX=${ttl}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
        "Content-Type": "text/plain",
      },
      body: value,
      signal: AbortSignal.timeout(2000), // 写允许稍慢
    });
    if (!res.ok) {
      const txt = await res.text();
      console.warn(`[teachCache] set ${key} ${res.status}: ${txt.slice(0, 100)}`);
    }
  } catch (err) {
    console.warn(`[teachCache] set failed for ${key}:`, err.message);
  }
}

/**
 * 删除缓存（升级 prompt 模板时手动清单个 key 用，平时不用）。
 */
export async function deleteCached(key) {
  if (!isConfigured() || !key) return;
  try {
    await fetch(`${UPSTASH_URL}/del/${encodeURIComponent(PREFIX + key)}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
      signal: AbortSignal.timeout(500),
    });
  } catch (err) {
    console.warn(`[teachCache] del failed for ${key}:`, err.message);
  }
}

/**
 * 把缓存的完整文本封装成 OpenAI-style SSE 流，让客户端无感知（同 streaming 路径）。
 * 用于命中缓存时的"瞬时 streaming"效果。
 */
export function cachedTextToSSEStream(text) {
  const encoder = new TextEncoder();
  return new ReadableStream({
    start(controller) {
      // 一个 chunk 包含全部内容
      const payload = JSON.stringify({
        choices: [{ delta: { content: text }, index: 0, finish_reason: "stop" }],
      });
      controller.enqueue(encoder.encode(`data: ${payload}\n\n`));
      controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
      controller.close();
    },
  });
}
