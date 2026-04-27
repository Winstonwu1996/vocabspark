// ─── 因果链解读缓存（Upstash Redis） ──────────────────────────────────
// 共用 ratelimit.js 已配置的 Upstash 实例，零额外配置成本
// Key 格式：causal:v1:{topicId}:{layer}:{grade}:{entry-hash}
// TTL：90 天（教学内容不易过时）
//
// graceful degrade：Upstash 未配置时直接 return null，让上层走 API + 不缓存

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const isConfigured = () => !!(UPSTASH_URL && UPSTASH_TOKEN);

const TTL_SECONDS = 90 * 24 * 60 * 60;

// 简单的字符串 → 短 hash（DJB2 算法，足够避免碰撞）
function hashStr(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) + h) + s.charCodeAt(i);
    h = h & 0xFFFFFFFF;  // 32-bit
  }
  return Math.abs(h).toString(36);
}

export function buildCacheKey({ topicId, layer, grade, entry }) {
  const eHash = hashStr(entry || "");
  return `causal:v1:${topicId}:${layer}:${grade}:${eHash}`;
}

export async function cacheGet(key) {
  if (!isConfigured()) return null;
  try {
    const res = await fetch(`${UPSTASH_URL}/get/${encodeURIComponent(key)}`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
      signal: AbortSignal.timeout(800),
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.result || null;
  } catch (_) {
    return null;
  }
}

export async function cacheSet(key, value) {
  if (!isConfigured()) return false;
  if (typeof value !== "string") value = String(value);
  try {
    const res = await fetch(`${UPSTASH_URL}/set/${encodeURIComponent(key)}/${encodeURIComponent(value)}?EX=${TTL_SECONDS}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
      signal: AbortSignal.timeout(800),
    });
    return res.ok;
  } catch (_) {
    return false;
  }
}
