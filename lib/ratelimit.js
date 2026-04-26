// ─────────────────────────────────────────────────────────────────────────────
// Rate Limiting via Upstash Redis REST API
// ─────────────────────────────────────────────────────────────────────────────
//
// SETUP (生产环境部署前):
//
// 1. 创建 Upstash Redis 实例
//    - 访问 https://console.upstash.com/redis
//    - 点击 "Create Database"，选 Regional（最便宜的免费档够 500 用户用）
//    - Region 选离 Vercel 部署 region 最近的（一般 us-east-1）
//    - 创建后在数据库 Details 页找 "REST API" tab
//
// 2. 在 Vercel 设环境变量
//    - Settings → Environment Variables
//    - 加 UPSTASH_REDIS_REST_URL（形如 https://xxx.upstash.io）
//    - 加 UPSTASH_REDIS_REST_TOKEN（数据库的 REST Token）
//    - 三个环境（Production / Preview / Development）都勾上
//
// 3. 本地开发可选：在 .env.local 里加同样两个变量；不加也能跑（见下方 graceful）
//
// GRACEFUL DEGRADE:
// 如果 env 没设，checkRateLimit 直接返回 { allowed: true, remaining: -1 }，
// 不阻塞请求。这样 deploy 后即便 env 还没配，用户不会全员 429。
//
// 算法：滑动窗口（基于 Redis SORTED SET）
// - ZADD 当前时间戳 → 计入窗口
// - ZREMRANGEBYSCORE 清掉窗口外的旧条目
// - ZCARD 数当前窗口内的请求数
// - 全部用 pipeline 一次 round-trip 完成
//
// 不依赖 @upstash/ratelimit / @upstash/redis SDK，纯 fetch + REST，
// 兼容 Edge Runtime 和 Node Runtime。
// ─────────────────────────────────────────────────────────────────────────────

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

const isConfigured = () => !!(UPSTASH_URL && UPSTASH_TOKEN);

// 单次 fetch 调 Upstash pipeline endpoint，一次性发多条命令、拿一组结果。
// 文档：https://upstash.com/docs/redis/features/restapi#pipelining
async function pipeline(commands) {
  const res = await fetch(`${UPSTASH_URL}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
    // rate limit 检查必须快：500ms 拿不到结果就放行，避免拖慢主请求
    signal: AbortSignal.timeout(500),
  });
  if (!res.ok) {
    throw new Error(`upstash ${res.status}`);
  }
  return res.json();
}

/**
 * 检查 key 在 windowMs 滑动窗口内的请求数是否超过 limit。
 *
 * @param {string} key — 限流维度的唯一标识（如 ip:1.2.3.4 或 user:abc）
 * @param {number} limit — 窗口内允许的最大请求数
 * @param {number} windowMs — 窗口大小（毫秒）
 * @returns {Promise<{allowed: boolean, remaining: number, resetAt: number}>}
 *   - allowed: 是否放行
 *   - remaining: 剩余配额（-1 表示未配置 Upstash）
 *   - resetAt: 窗口下次清空的 ms 时间戳
 */
export async function checkRateLimit(key, limit, windowMs) {
  // graceful degrade：env 没配 → 全部放行
  if (!isConfigured()) {
    return { allowed: true, remaining: -1, resetAt: 0 };
  }

  const now = Date.now();
  const windowStart = now - windowMs;
  // 唯一 member：时间戳 + 随机后缀，避免同一毫秒多请求被 ZADD 去重
  const member = `${now}-${Math.random().toString(36).slice(2, 8)}`;
  const redisKey = `rl:${key}`;

  try {
    // pipeline: 清掉过期 → 加新条目 → 数当前窗口 → 续 TTL
    const results = await pipeline([
      ["ZREMRANGEBYSCORE", redisKey, "0", String(windowStart)],
      ["ZADD", redisKey, String(now), member],
      ["ZCARD", redisKey],
      ["PEXPIRE", redisKey, String(windowMs + 1000)],
    ]);

    // results[2] = ZCARD 结果（当前窗口内的请求数，含本次）
    const count = Number(results?.[2]?.result ?? 0);
    const allowed = count <= limit;
    const remaining = Math.max(0, limit - count);

    return {
      allowed,
      remaining,
      resetAt: now + windowMs,
    };
  } catch (err) {
    // 网络错误 / Upstash 挂了 → fail open，不阻塞用户
    console.warn(`[ratelimit] check failed for ${key}:`, err.message);
    return { allowed: true, remaining: -1, resetAt: 0 };
  }
}

/**
 * 每 user 每分钟 30 次（预留接口，目前 chat.js 还没读 user 信息）。
 */
export async function checkPerUserLimit(userId) {
  return checkRateLimit(`user:${userId}`, 30, 60 * 1000);
}

/**
 * 每 IP 每天 50 次。提高一点防止学校/公司 NAT 共享 IP 误伤。
 */
export async function checkPerIpLimit(ip) {
  return checkRateLimit(`ip:${ip}`, 50, 24 * 60 * 60 * 1000);
}
