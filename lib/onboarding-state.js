// lib/onboarding-state.js
//
// Cross-module onboarding state — single source of truth for "has user seen
// onboarding X?" queries. Replaces scattered localStorage keys with unified API.
//
// 5-5 founder rule (R4 systemic): atlas-lab AtlasOnboarding + history Walkthrough +
// 未来 vocab/focus 模块的 onboarding 互不感知, 重叠率 80%.每模块独自决定弹不弹,
// 用户被多重 onboarding 轰炸. 这里建 unified store 让 modules 协调降级.
//
// ─── 兼容性 ─────────────────────────────────────────────
// 现有 storage keys 保持兼容:
//   - 'atlas-tour-done'             → key='atlas-tour' (AtlasOnboarding)
//   - vocabspark_v1.walkthroughSeen → key='history-walkthrough' (Walkthrough)
// 新写代码用统一 API: hasSeenOnboarding(key) / markOnboardingSeen(key)
//
// ─── 标准 keys ──────────────────────────────────────────
//   'atlas-tour'           — atlas-lab 4 步引导
//   'history-walkthrough'  — history 4 步教学(色彩/地图/追问)
//   'first-history-entry'  — 用户第一次进过 history page
//   'first-atlas-entry'    — 用户第一次进过 atlas-lab
//
// ─── 协调规则 (R4 logic) ─────────────────────────────────
// shouldShowHistoryWalkthrough() 综合判断:
//   - 已看过 history walkthrough → false
//   - URL 是 atlas/embedded/role 流程 → false (R1 守卫)
//   - 已看过 atlas-tour → false (信息重叠 80%, atlas onboarding 已涵盖)
//   - 否则 → true (直接 URL 用户首次进, 唯一引导)

import { hasSeenWalkthrough as legacyHasSeenWalkthrough,
         markWalkthroughSeen as legacyMarkWalkthroughSeen } from './history-storage';

var ATLAS_TOUR_KEY = 'atlas-tour-done';

export function hasSeenOnboarding(key) {
  if (typeof window === 'undefined') return false;
  try {
    if (key === 'atlas-tour') {
      return !!window.localStorage.getItem(ATLAS_TOUR_KEY);
    }
    if (key === 'history-walkthrough') {
      return !!legacyHasSeenWalkthrough();
    }
    // 通用 fallback: vocabspark_onboarding_v1.<key>
    var raw = window.localStorage.getItem('vocabspark_onboarding_v1');
    if (!raw) return false;
    var data = JSON.parse(raw);
    return !!(data && data[key] && data[key].seen);
  } catch (e) {
    return false;
  }
}

export function markOnboardingSeen(key) {
  if (typeof window === 'undefined') return;
  try {
    if (key === 'atlas-tour') {
      window.localStorage.setItem(ATLAS_TOUR_KEY, '1');
      return;
    }
    if (key === 'history-walkthrough') {
      legacyMarkWalkthroughSeen();
      return;
    }
    var raw = window.localStorage.getItem('vocabspark_onboarding_v1');
    var data = raw ? JSON.parse(raw) : {};
    data[key] = { seen: true, seenAt: new Date().toISOString() };
    window.localStorage.setItem('vocabspark_onboarding_v1', JSON.stringify(data));
  } catch (e) { /* noop */ }
}

// ─── R4 协调判断 ─────────────────────────────────────────
// history Walkthrough 在 atlas-tour 已看过时降级 — 信息重叠 80% (色彩 / 地图 / 追问)
// 调用方:pages/history.js mount-time + 用 useSimplifiedMode skipWalkthrough 一起决策
export function shouldShowHistoryWalkthrough(opts) {
  opts = opts || {};
  // R1 守卫: URL 流程下绝不弹
  if (opts.skipFromUrlFlags) return false;
  // 已看过 history walkthrough → 不重弹
  if (hasSeenOnboarding('history-walkthrough')) return false;
  // R4 systemic: 已看过 atlas-tour → history walkthrough 降级
  if (hasSeenOnboarding('atlas-tour')) return false;
  // 直接 URL 首次访问 — 唯一弹的场景
  return true;
}
