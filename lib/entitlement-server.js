// 服务端权限解析 —— Edge + Node 通用（纯 fetch，不 import supabase-js）
//
// 为什么存在：history 的付费闸此前**只在客户端**，而真正吐内容的两个端点
// (/api/narrative、/api/chat-stream) 完全不看 tier ⇒ 免费用户深链进付费课就能
// 从 network tab 拿到整篇授权课文，或直接驱动完整付费课堂。客户端 gate 保不住收入。
//
// 设计铁律（创始人 2026-08-04 拍板 + 线上事故 2fdfdc0 教训）：
//   **验证服务抽风 ≠ 用户没付钱。** 凭证错(401/403) 才降级；5xx/超时/网络错一律
//   返回 transient=true，调用方据此 **fail-open 放行**（模型降 flash），
//   绝不把「查不了」当「没订阅」—— 付费孩子的课不能被 Supabase 抖动打断。
//
// 用法：
//   var ent = await resolveEntitlement(getBearerToken(req));
//   if (ent.transient) → 放行 + 降级 + 告警（别拦）
//   else if (!canAccessTopic(topicId, ent.tier)) → 403

import { canAccessTopic } from './history-tiers.js';

var SUPA_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
var ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
// ⚠️ 绝不 fallback 到 ANON_KEY（Codex 复审 P2）：user_subscriptions 有 RLS，
// 用 anon 角色查会「成功返回空数组」而不是报错 → 付费用户被判成 free 并写进 60s 缓存
// → 被锁在自己买的课外。缺 service key = 服务不可用（transient），不是「没订阅」。
var SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

var UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
var UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
var CACHE_PREFIX = 'ent:';          // 与 rl: / tc: 同实例不同前缀
var CACHE_TTL_SEC = 60;             // 短缓存：省掉每轮两次往返；升级后最多 60s 生效延迟
var FETCH_TIMEOUT_MS = 3000;        // verify 卡住不能拖垮课堂 → 超时即 transient → 放行

// ─── Authorization: Bearer <token> 提取（Edge 的 Headers 与 Node 的对象都支持）──
export function getBearerToken(req) {
  var raw = '';
  try {
    if (req && req.headers && typeof req.headers.get === 'function') {
      raw = req.headers.get('authorization') || '';      // Edge
    } else if (req && req.headers) {
      raw = req.headers.authorization || req.headers.Authorization || ''; // Node
    }
  } catch (e) { return ''; }
  return raw.indexOf('Bearer ') === 0 ? raw.slice(7).trim() : '';
}

// ─── Upstash 短缓存（纯 REST，失败静默：缓存永远只是加速，不是正确性依赖）──
async function cacheGet(userId) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) return null;
  try {
    var r = await fetch(UPSTASH_URL + '/get/' + encodeURIComponent(CACHE_PREFIX + userId), {
      headers: { Authorization: 'Bearer ' + UPSTASH_TOKEN },
      signal: AbortSignal.timeout(1200),
    });
    if (!r.ok) return null;
    var j = await r.json();
    return j && typeof j.result === 'string' ? j.result : null;
  } catch (e) { return null; }
}

async function cacheSet(userId, tier) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) return;
  try {
    await fetch(
      UPSTASH_URL + '/setex/' + encodeURIComponent(CACHE_PREFIX + userId) + '/' + CACHE_TTL_SEC + '/' + encodeURIComponent(tier),
      { headers: { Authorization: 'Bearer ' + UPSTASH_TOKEN }, signal: AbortSignal.timeout(1200) }
    );
  } catch (e) { /* 缓存写失败无所谓 */ }
}

// ─── 「近期验证过」宽限 ─────────────────────────────────────────────
// 认证服务(GoTrue)整个挂掉时的两难：一律放行 → 挂机期间谁都能拿付费课文；
// 一律拦 → 正在上课的付费孩子被打断（正是我们要避免的）。
// 解法：token 每次验证成功就记 10 分钟。挂机期间只认「刚刚还验过的 token」——
// 上课中的孩子几分钟前必然验过 → 无感通过；没见过的 token → 拦。
// 存 SHA-256 而不是原文：Redis 里绝不留可直接用的凭证。
var SEEN_PREFIX = 'entseen:';
var SEEN_TTL_SEC = 600;

async function hashToken(token) {
  try {
    var data = new TextEncoder().encode(token);
    var buf = await crypto.subtle.digest('SHA-256', data);
    var arr = Array.from(new Uint8Array(buf));
    return arr.map(function(b) { return b.toString(16).padStart(2, '0'); }).join('').slice(0, 32);
  } catch (e) { return null; }
}

async function rememberVerified(token, userId) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) return;
  var h = await hashToken(token);
  if (!h) return;
  try {
    await fetch(
      UPSTASH_URL + '/setex/' + encodeURIComponent(SEEN_PREFIX + h) + '/' + SEEN_TTL_SEC + '/' + encodeURIComponent(userId),
      { headers: { Authorization: 'Bearer ' + UPSTASH_TOKEN }, signal: AbortSignal.timeout(1200) }
    );
  } catch (e) { /* 记不上就退化成「没见过」，只会更严格，不会更松 */ }
}

async function recallVerified(token) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) return null;
  var h = await hashToken(token);
  if (!h) return null;
  try {
    var r = await fetch(UPSTASH_URL + '/get/' + encodeURIComponent(SEEN_PREFIX + h), {
      headers: { Authorization: 'Bearer ' + UPSTASH_TOKEN },
      signal: AbortSignal.timeout(1200),
    });
    if (!r.ok) return null;
    var j = await r.json();
    return j && typeof j.result === 'string' ? j.result : null;
  } catch (e) { return null; }
}

// ─── 解析身份 + 会员档位 ────────────────────────────────────────────
// 返回 { userId, tier, transient, verified }
//   verified=true  → token 验过，userId 可信（可用于限流桶等安全用途）
//   transient=true → 验证/查询服务不可达，调用方必须 fail-open
export async function resolveEntitlement(token) {
  if (!SUPA_URL || !ANON_KEY) {
    // 环境没配全（本地/预览）→ 当作查不了，fail-open，绝不误伤
    return { userId: null, tier: 'guest', transient: true, verified: false };
  }
  if (!token) {
    // 没带 token = 游客。这不是"抽风"，是明确的无身份状态。
    return { userId: null, tier: 'guest', transient: false, verified: false };
  }

  // ① 验 token → userId
  //   认证服务不可达时走「近期验证过」宽限：几分钟内验过的 token 仍认，没见过的不认。
  var userId = null;
  var authDown = async function() {
    var seen = await recallVerified(token);
    if (seen) {
      // 上课中的孩子：刚才还验过 → 当作已验证，课不中断
      return { userId: seen, tier: 'free', transient: true, verified: true, graced: true };
    }
    // 没见过的 token + 认证服务挂了 → 不放行付费内容
    return { userId: null, tier: 'guest', transient: true, verified: false };
  };
  try {
    var ures = await fetch(SUPA_URL + '/auth/v1/user', {
      headers: { Authorization: 'Bearer ' + token, apikey: ANON_KEY },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (ures.status === 401 || ures.status === 403) {
      return { userId: null, tier: 'guest', transient: false, verified: false }; // 凭证真的不对
    }
    if (!ures.ok) return await authDown();                                       // 5xx/429 → 服务问题
    var ujson = await ures.json();
    userId = ujson && ujson.id ? String(ujson.id) : null;
    if (!userId) return await authDown();
    rememberVerified(token, userId);  // 不 await：记档失败只会让下次更严格，不该拖慢课堂
  } catch (e) {
    return await authDown();                                                     // 超时/网络 → transient
  }

  // ② tier：先查短缓存
  var cached = await cacheGet(userId);
  if (cached) return { userId: userId, tier: cached, transient: false, verified: true };

  // ③ 查订阅（与 /api/stripe/check-subscription 同口径：active + 未过期，取最晚到期那条）
  if (!SERVICE_KEY) {
    // 配置缺失 → 查不了，绝不当作「无订阅」（见 SERVICE_KEY 处说明）
    return { userId: userId, tier: 'free', transient: true, verified: true };
  }
  try {
    var q = SUPA_URL + '/rest/v1/user_subscriptions'
      + '?select=tier,expires_at'
      + '&user_id=eq.' + encodeURIComponent(userId)
      + '&status=eq.active'
      + '&expires_at=gte.' + encodeURIComponent(new Date().toISOString())
      + '&order=expires_at.desc&limit=1';
    var sres = await fetch(q, {
      headers: { apikey: SERVICE_KEY, Authorization: 'Bearer ' + SERVICE_KEY },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!sres.ok) {
      // DB 查不了 —— 绝不当作 free（这正是 chompcloud Pro 被误锁的根因）
      return { userId: userId, tier: 'free', transient: true, verified: true };
    }
    var rows = await sres.json();
    var tier = (Array.isArray(rows) && rows.length && rows[0].tier) ? String(rows[0].tier) : 'free';
    cacheSet(userId, tier);
    return { userId: userId, tier: tier, transient: false, verified: true };
  } catch (e) {
    return { userId: userId, tier: 'free', transient: true, verified: true };
  }
}

// ─── 纯决策函数（无网络，供 scripts/test-entitlement.mjs 直接 import）────
// 抽风(transient)时的放行规则 —— 创始人 2026-08-04 拍板「课优先」+ Codex 复审收紧：
//   · 身份验过了、只是查不到档位  → **放行**（正在上课的付费孩子，绝不打断）
//   · 身份根本验不出来            → **按游客判**（挂机期间不把付费课文发给陌生人）
// 免费/试用课不受影响：它们对 guest 本来就开放，走正常判定即可。
//
// ⚠️ 这个函数是付费闸的唯一判定口径。改它 = 改收入边界，必须同步跑
//    node scripts/test-entitlement.mjs（测试直接 import 本函数，不是抄一份）。
export function decideTopicAccess(ent, topicId) {
  ent = ent || {};
  if (!topicId) {
    return Object.assign({}, ent, { allow: true, reason: 'no-topic' });
  }
  if (ent.transient && ent.verified) {
    return Object.assign({}, ent, { allow: true, reason: 'transient-verified-fail-open' });
  }
  // 未验明身份（含抽风时没见过的 token）→ 一律按 guest 判：免费课照进，付费课拦。
  var effectiveTier = ent.verified ? ent.tier : 'guest';
  var ok = canAccessTopic(topicId, effectiveTier);
  return Object.assign({}, ent, {
    allow: ok,
    reason: ok ? 'entitled' : (ent.transient ? 'transient-unverified-deny' : 'tier-insufficient'),
  });
}

// ─── 一站式课程访问闸 ───────────────────────────────────────────────
// 返回 { allow, tier, transient, verified, userId, reason }
export async function checkTopicAccess(token, topicId) {
  return decideTopicAccess(await resolveEntitlement(token), topicId);
}
