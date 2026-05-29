/* ═══════════════════════════════════════════════════════
   lib/membership-logic.js — useUserTier 纯逻辑 helpers

   抽出来让单测不依赖 React + Supabase. lib/membership.js 的 React hook
   import 这里的 helpers, 调用方一般不直接 import 此文件.

   规划: docs/HISTORY_MEMBERSHIP_PLAN.md v1.2 §7
   ═══════════════════════════════════════════════════════ */

export var TIER_STATES = {
  LOADING: 'loading',
  ACTIVE: 'active',
  FREE: 'free',
  GUEST: 'guest',
  ERROR: 'error',
};

export var TIER_CACHE_KEY = 'vocabspark_tier'; // UI cache only, never trusted for paywall
export var POLL_INTERVAL_MS = 30000;
export var MAX_RETRIES = 3;
export var RETRY_BASE_MS = 1500;

/**
 * 根据 /api/stripe/check-subscription 响应决定下一步动作。
 * @param {object} response  { isActive, tier, expiresAt, billingCycle, byoKey }
 * @param {number} falseCount 当前已连续 isActive:false 的次数
 * @param {number} maxRetries 默认 MAX_RETRIES
 * @returns {object} 决策结果, 字段:
 *   - action: 'commit-active' | 'commit-free' | 'retry'
 *   - state: TIER_STATES.ACTIVE | TIER_STATES.FREE (action != 'retry' 时给出)
 *   - tier / expiresAt / billingCycle / byoKey (commit-active 时)
 *   - delayMs (retry 时, 1.5s/3s/6s 指数退避)
 *   - nextFalseCount (retry 后下次的计数)
 */
export function decideOnResponse(response, falseCount, maxRetries) {
  maxRetries = maxRetries != null ? maxRetries : MAX_RETRIES;
  if (response && response.isActive === true && typeof response.tier === 'string') {
    return {
      action: 'commit-active',
      state: TIER_STATES.ACTIVE,
      tier: response.tier,
      expiresAt: response.expiresAt || null,
      billingCycle: response.billingCycle || null,
      byoKey: !!response.byoKey,
      nextFalseCount: 0,
    };
  }
  // isActive:false 路径
  var nextFalse = falseCount + 1;
  if (nextFalse >= maxRetries) {
    return {
      action: 'commit-free',
      state: TIER_STATES.FREE,
      tier: 'free',
      expiresAt: null,
      billingCycle: null,
      byoKey: false,
      nextFalseCount: 0,
    };
  }
  return {
    action: 'retry',
    delayMs: RETRY_BASE_MS * Math.pow(2, nextFalse - 1),
    nextFalseCount: nextFalse,
  };
}

/**
 * 网络 / HTTP 错误决策: 是否 retry, 或 commit ERROR。
 * @param {number} retryCount 当前已连续错误的次数
 * @param {number} maxRetries 默认 MAX_RETRIES
 */
export function decideOnError(retryCount, maxRetries) {
  maxRetries = maxRetries != null ? maxRetries : MAX_RETRIES;
  var nextRetry = retryCount + 1;
  if (nextRetry >= maxRetries) {
    return { action: 'commit-error', nextRetryCount: 0 };
  }
  return {
    action: 'retry',
    delayMs: RETRY_BASE_MS * Math.pow(2, nextRetry - 1),
    nextRetryCount: nextRetry,
  };
}

/**
 * 状态转换是否触发 tierLost (active → 降级)。
 */
export function isDowngrade(prevState, nextState) {
  return prevState === TIER_STATES.ACTIVE &&
    (nextState === TIER_STATES.FREE ||
     nextState === TIER_STATES.GUEST ||
     nextState === TIER_STATES.ERROR);
}

/**
 * 状态转换是否触发 tierRestored (free/guest/error → active)。
 */
export function isUpgrade(prevState, nextState) {
  return (prevState === TIER_STATES.FREE ||
          prevState === TIER_STATES.GUEST ||
          prevState === TIER_STATES.ERROR) &&
    nextState === TIER_STATES.ACTIVE;
}

/**
 * 是否应该写 localStorage cache (LOADING/ERROR 不写, 防误信)。
 * @deprecated 用 getCacheAction (P1-2: guest 不能污染 vocab 共享 key)
 */
export function shouldWriteCache(state) {
  return state === TIER_STATES.ACTIVE ||
    state === TIER_STATES.FREE ||
    state === TIER_STATES.GUEST;
}

/**
 * 决定 localStorage `vocabspark_tier` cache 的写入动作 (P1-2 Codex 实施审计)。
 *
 * 背景: 这个 key 是 vocab 模块的共享缓存, 旧 pages/vocab.js 初始化时原样读它
 * (`localStorage.getItem("vocabspark_tier") || "free"`) 并做 `=== 'basic'||'pro'`
 * 的付费判断。若我们把 'guest' 写进去, 会给 legacy vocab 引入第 4 种它不认识的
 * tier 值。所以:
 *   - ACTIVE → 写真 tier (basic / pro)
 *   - FREE → 写 'free'
 *   - GUEST → 移除 key (guest ≈ 未登录, 不污染共享 key; vocab 读不到会 fallback 'free')
 *   - LOADING / ERROR → skip (不持久化中间态 / 错误态)
 *
 * @param {string} state
 * @param {string|null} tier
 * @returns {{type:'write', value:string} | {type:'remove'} | {type:'skip'}}
 */
export function getCacheAction(state, tier) {
  if (state === TIER_STATES.LOADING || state === TIER_STATES.ERROR) {
    return { type: 'skip' };
  }
  if (state === TIER_STATES.GUEST) {
    return { type: 'remove' };
  }
  if (state === TIER_STATES.ACTIVE) {
    // active 写真实付费 tier (basic / pro), 缺失兜底 free
    return { type: 'write', value: (tier === 'basic' || tier === 'pro') ? tier : 'free' };
  }
  if (state === TIER_STATES.FREE) {
    return { type: 'write', value: 'free' };
  }
  return { type: 'skip' };
}

/**
 * 简单 djb2 hash, 仅用于 trackEvent 关联, 非密码学。
 */
export function hashUserId(uid) {
  if (!uid) return null;
  var h = 5381;
  for (var i = 0; i < uid.length; i++) {
    h = ((h << 5) + h) + uid.charCodeAt(i);
    h = h & 0xffffffff;
  }
  return Math.abs(h).toString(36);
}
