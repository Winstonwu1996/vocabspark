/* ═══════════════════════════════════════════════════════
   lib/membership.js — useUserTier hook (Step 1)

   规划 doc: docs/HISTORY_MEMBERSHIP_PLAN.md v1.2 §7 + §9 Step 1
   含 5 状态生命周期 (loading/active/free/guest/error)
   + Supabase user_subscriptions 查询 (通过 /api/stripe/check-subscription)
   + 30s 轮询监听 active → 降级 (Supabase realtime 留 P2)
   + 错误自动重试 3 次 (1.5s/3s/6s 指数退避)
   + localStorage.vocabspark_tier 仅 UI cache (绝不当付费判定依据)
   + tierLost 信号 (active → free/guest/error 时触发)

   注意: Step 1 不动 pages/vocab.js 的现有 _loadTier (本 hook 是给 history
   模块 + 未来 paywall UI 用的, vocab 暂时保持原有 inline 实现)。两边共用
   同一个 /api/stripe/check-subscription endpoint 不冲突。
   ═══════════════════════════════════════════════════════ */

import { useEffect, useRef, useState } from 'react';
import { supabase } from './supabase';

export var TIER_STATES = {
  LOADING: 'loading',
  ACTIVE: 'active',
  FREE: 'free',
  GUEST: 'guest',
  ERROR: 'error',
};

var TIER_CACHE_KEY = 'vocabspark_tier'; // UI cache only, never trusted for paywall
var POLL_INTERVAL_MS = 30000;
var MAX_RETRIES = 3;
var RETRY_BASE_MS = 1500;
var CHECK_API_PATH = '/api/stripe/check-subscription';

/**
 * 读 localStorage tier cache (仅供首屏 skeleton 减闪烁; 绝不可当付费判定依据)。
 * @returns {string|null} 缓存的 tier 或 null
 */
export function getCachedTier() {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(TIER_CACHE_KEY) || null;
  } catch (e) {
    return null;
  }
}

/**
 * useUserTier — 5 状态 tier 生命周期 hook
 *
 * @param {object} [opts]
 * @param {function} [opts.trackEvent] (event, props) => void, 默认 noop
 * @param {boolean} [opts.skipPolling=false] 关掉 30s 轮询 (单测 / SSR 用)
 * @param {number} [opts.pollIntervalMs] 覆盖默认 30000ms (单测用)
 *
 * @returns {object}
 *   state: 'loading' | 'active' | 'free' | 'guest' | 'error'
 *   tier: 'guest' | 'free' | 'basic' | 'pro' | null
 *   expiresAt: ISO string | null
 *   billingCycle: 'monthly' | 'yearly' | null
 *   byoKey: boolean
 *   error: string | null  (state === 'error' 时给出原因)
 *   tierLost: boolean  (active → 降级 时触发,caller 用来弹 modal)
 *   refresh: () => void  手动刷新 tier
 *   dismissTierLost: () => void  caller 处理完降级后清信号
 *   isActive: boolean (state === 'active')
 *   isPro: boolean (active + tier='pro')
 *   isBasic: boolean (active + tier='basic')
 *
 * 关键不变量 (creator §7 + Codex):
 * - tier `loading` 期: 付费 gate 必须显示 skeleton, 绝不放行 (caller 责任)
 * - `error` fail-closed: Pro 内容不放行, Free 内容正常 (caller 据 isActive 判断)
 * - localStorage cache 永远不当付费判定依据 (只供首屏减闪烁, mount 后须以 hook state 为准)
 * - active → free/guest/error 转换: tierLost 翻 true,
 *   caller 据此暂停推进 + 弹 non-dismissable upgrade modal
 */
export function useUserTier(opts) {
  opts = opts || {};
  var trackEvent = opts.trackEvent || function () {};
  var skipPolling = !!opts.skipPolling;
  var pollIntervalMs = opts.pollIntervalMs != null ? opts.pollIntervalMs : POLL_INTERVAL_MS;

  var [state, setState] = useState(TIER_STATES.LOADING);
  var [tier, setTier] = useState(null);
  var [expiresAt, setExpiresAt] = useState(null);
  var [billingCycle, setBillingCycle] = useState(null);
  var [byoKey, setByoKey] = useState(false);
  var [error, setError] = useState(null);
  var [tierLost, setTierLost] = useState(false);

  var prevStateRef = useRef(null);
  var userIdRef = useRef(null);
  var retryCountRef = useRef(0);
  var falseCountRef = useRef(0); // 连续 isActive:false 计数 (区分真 free vs 瞬态)
  var pollTimerRef = useRef(null);
  var retryTimerRef = useRef(null);
  var mountedRef = useRef(true);
  var trackEventRef = useRef(trackEvent);

  // 让 callback 闭包始终拿到最新引用 (caller 改 trackEvent 时不重建 effect)
  useEffect(function () {
    trackEventRef.current = trackEvent;
  }, [trackEvent]);

  // ─── 核心: 拉 tier (含 retry 逻辑) ───
  function loadTier(userId) {
    if (!mountedRef.current || !userId) return;

    fetch(CHECK_API_PATH + '?userId=' + encodeURIComponent(userId))
      .then(function (r) {
        if (!r.ok) throw new Error('http_' + r.status);
        return r.json();
      })
      .then(function (j) {
        if (!mountedRef.current) return;
        if (userIdRef.current !== userId) return; // 已切用户, 丢弃旧响应

        // 任何成功响应都清 retry 计数 (HTTP 层 OK)
        retryCountRef.current = 0;
        setError(null);

        if (j && j.isActive === true && typeof j.tier === 'string') {
          // ✅ 确认 active
          falseCountRef.current = 0;
          setTier(j.tier);
          setExpiresAt(j.expiresAt || null);
          setBillingCycle(j.billingCycle || null);
          setByoKey(!!j.byoKey);
          setState(TIER_STATES.ACTIVE);
        } else {
          // isActive:false — 可能真 free, 也可能服务端短暂异常 (endpoint catch 兜底 200+false)
          // 用最多 3 次区分: 连续 3 次 false 才信
          falseCountRef.current += 1;
          if (falseCountRef.current >= MAX_RETRIES) {
            // 3 次全 false → 确认 free
            falseCountRef.current = 0;
            setTier('free');
            setExpiresAt(null);
            setBillingCycle(null);
            setByoKey(false);
            setState(TIER_STATES.FREE);
          } else {
            // 还没到 3 次, 1.5s 后重试 (1.5s/3s/6s 指数退避)
            scheduleRetry(userId, RETRY_BASE_MS * Math.pow(2, falseCountRef.current - 1));
          }
        }
      })
      .catch(function (err) {
        if (!mountedRef.current) return;
        if (userIdRef.current !== userId) return;
        // 网络 / HTTP 错误 — 累加 retry, 3 次都失败才进 ERROR
        retryCountRef.current += 1;
        if (retryCountRef.current >= MAX_RETRIES) {
          retryCountRef.current = 0;
          setState(TIER_STATES.ERROR);
          setError(err && err.message ? err.message : 'tier_load_failed');
          trackEventRef.current('tier_load_error', {
            error: err && err.message,
            user_id_hash: hashUserId(userId),
          });
        } else {
          scheduleRetry(userId, RETRY_BASE_MS * Math.pow(2, retryCountRef.current - 1));
        }
      });
  }

  function scheduleRetry(userId, delayMs) {
    if (retryTimerRef.current) clearTimeout(retryTimerRef.current);
    retryTimerRef.current = setTimeout(function () {
      retryTimerRef.current = null;
      loadTier(userId);
    }, delayMs);
  }

  // ─── Mount: 检查 auth + 初次 tier load + 监听 auth change ───
  useEffect(function () {
    mountedRef.current = true;

    var authSub = null;

    function setGuest() {
      userIdRef.current = null;
      setTier('guest');
      setExpiresAt(null);
      setBillingCycle(null);
      setByoKey(false);
      setState(TIER_STATES.GUEST);
    }

    // 初次 check session
    supabase.auth.getSession().then(function (res) {
      if (!mountedRef.current) return;
      var user = res && res.data && res.data.session && res.data.session.user;
      if (user && user.id) {
        userIdRef.current = user.id;
        setState(TIER_STATES.LOADING);
        loadTier(user.id);
      } else {
        setGuest();
      }
    }).catch(function (e) {
      if (!mountedRef.current) return;
      // auth 失败也降级到 guest (而不是 error — auth 失败 = 没登录)
      setGuest();
    });

    // 监听 auth state change (SIGNED_IN / SIGNED_OUT / TOKEN_REFRESHED)
    try {
      var sub = supabase.auth.onAuthStateChange(function (event, session) {
        if (!mountedRef.current) return;
        var user = session && session.user;
        if (event === 'TOKEN_REFRESHED') {
          // token 刷新不动 tier 状态, 仅 noop (vocab.js 同策略, 防 multi-tab/focus 反复拉)
          return;
        }
        if (user && user.id) {
          if (userIdRef.current !== user.id) {
            // 切换了 user
            userIdRef.current = user.id;
            falseCountRef.current = 0;
            retryCountRef.current = 0;
            setState(TIER_STATES.LOADING);
            loadTier(user.id);
          }
        } else {
          // SIGNED_OUT
          setGuest();
        }
      });
      authSub = sub && sub.data && sub.data.subscription;
    } catch (e) {
      // supabase 没 ready, 跳过 (单测环境可能没真 supabase)
    }

    return function () {
      mountedRef.current = false;
      if (authSub && typeof authSub.unsubscribe === 'function') {
        try { authSub.unsubscribe(); } catch (e) {}
      }
      if (retryTimerRef.current) {
        clearTimeout(retryTimerRef.current);
        retryTimerRef.current = null;
      }
      if (pollTimerRef.current) {
        clearInterval(pollTimerRef.current);
        pollTimerRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ─── 30s 轮询: 检测 active → 降级 (退费 / 过期) ───
  useEffect(function () {
    if (skipPolling) return;
    if (pollTimerRef.current) clearInterval(pollTimerRef.current);
    pollTimerRef.current = setInterval(function () {
      var uid = userIdRef.current;
      if (uid) loadTier(uid);
    }, pollIntervalMs);
    return function () {
      if (pollTimerRef.current) {
        clearInterval(pollTimerRef.current);
        pollTimerRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skipPolling, pollIntervalMs]);

  // ─── State transition: active → 降级 触发 tierLost ───
  useEffect(function () {
    var prev = prevStateRef.current;
    prevStateRef.current = state;
    if (prev === null) return; // 首次 mount 不算转换

    if (prev === TIER_STATES.ACTIVE &&
        (state === TIER_STATES.FREE || state === TIER_STATES.GUEST || state === TIER_STATES.ERROR)) {
      setTierLost(true);
      trackEventRef.current('tier_lost', { from: prev, to: state });
    }
    if ((prev === TIER_STATES.FREE || prev === TIER_STATES.GUEST || prev === TIER_STATES.ERROR) &&
        state === TIER_STATES.ACTIVE) {
      // 升级成功 / 重新订阅 → 清 tierLost
      setTierLost(false);
      trackEventRef.current('tier_restored', { from: prev, to: state });
    }
  }, [state]);

  // ─── UI cache 写入 (绝不当付费判定依据, 仅供首屏 skeleton 减闪烁) ───
  useEffect(function () {
    if (typeof window === 'undefined') return;
    if (state === TIER_STATES.LOADING || state === TIER_STATES.ERROR) return;
    try {
      if (tier) localStorage.setItem(TIER_CACHE_KEY, tier);
      else localStorage.removeItem(TIER_CACHE_KEY);
    } catch (e) {}
  }, [state, tier]);

  // ─── 公共 API ───
  function refresh() {
    if (!userIdRef.current) return;
    falseCountRef.current = 0;
    retryCountRef.current = 0;
    setState(TIER_STATES.LOADING);
    loadTier(userIdRef.current);
  }

  function dismissTierLost() {
    setTierLost(false);
  }

  return {
    state: state,
    tier: tier,
    expiresAt: expiresAt,
    billingCycle: billingCycle,
    byoKey: byoKey,
    error: error,
    tierLost: tierLost,
    refresh: refresh,
    dismissTierLost: dismissTierLost,
    isActive: state === TIER_STATES.ACTIVE,
    isPro: state === TIER_STATES.ACTIVE && tier === 'pro',
    isBasic: state === TIER_STATES.ACTIVE && tier === 'basic',
  };
}

// ─── 工具: hash user id 用于 trackEvent (不泄露 PII) ───
function hashUserId(uid) {
  if (!uid) return null;
  // 简单 djb2 hash, 仅用于 funnel 关联, 非密码学
  var h = 5381;
  for (var i = 0; i < uid.length; i++) {
    h = ((h << 5) + h) + uid.charCodeAt(i);
    h = h & 0xffffffff;
  }
  return Math.abs(h).toString(36);
}
