/* ═══════════════════════════════════════════════════════
   lib/quota-store.js — 每日配额「持久化 + 多 tab 锁」层 (Step 3 wiring)

   规划: docs/HISTORY_MEMBERSHIP_PLAN.md v1.2 §6 + STEP_3_5_QUOTA_DESIGN.md

   职责: 把 lib/daily-quota.js 的纯判定包成「带持久化 + 跨 tab 串行化」的扣减原语。
   - 读: readLensUsage / readSidekickUsage (同步, 供 UI chip 显示, 不加锁)
   - 扣: tryUseLens / tryUseSidekick (异步, navigator.locks 串行「读-检-记-存」防多 tab 超扣)

   ⚠️ 无 membership / useUserTier 依赖 (tier 由 caller 从隔离的 CourseGate 传入) —— 静态 import
   进播放器不破坏 flag-off 隔离 (同 history-tiers / daily-quota, 纯逻辑无 check-subscription)。

   持久化注意 (saveAll 是 top-level 浅合并 → 会整体替换 historyData):
   必须 read-merge-write 完整 historyData, 只改 dailyLensUsage / dailySidekickUsage 一个字段,
   绝不 clobber completedTopics / learningReceipts / inProgress 等。扣减在锁内读最新 localStorage,
   多 tab 各自锁内读到对方刚写的值 → 不超扣。saveAll 后 sync-client 自动 push + 广播。

   多 tab 锁: navigator.locks (现代浏览器全支持) 真串行化。无 Web Locks API 的老浏览器降级为
   「直接执行」—— 退回 daily-quota 的 union 幂等 (防丢扣/重复计, 容忍极小超扣窗口); 不写自造
   busy-wait CAS (同步自旋会卡主线程且 localStorage 非原子, 弊大于利)。
   ═══════════════════════════════════════════════════════ */

import { loadAll, saveAll } from './history-storage';
import {
  canUseLens, recordLensUsage,
  canUseSidekick, recordSidekickEvent,
  normalizeSidekickUsage,
  getLensQuota, getSidekickQuota,
} from './daily-quota';

var LOCK_NAME = 'knowu-history-quota';

// ─── 锁: navigator.locks 优先, 不支持则直接执行 (降级 union 幂等) ───
function withQuotaLock(fn) {
  if (typeof navigator !== 'undefined' && navigator.locks && navigator.locks.request) {
    // request 返回 callback 的结果 promise
    return navigator.locks.request(LOCK_NAME, function () { return fn(); });
  }
  // 降级: 无 Web Locks API → 直接执行 (daily-quota union 幂等兜底)
  return Promise.resolve().then(fn);
}

// ─── 同步读 (供 UI; 不加锁, 显示用) ───
export function readLensUsage() {
  var all = loadAll();
  return (all && all.historyData && all.historyData.dailyLensUsage) || null;
}

export function readSidekickUsage() {
  var all = loadAll();
  return (all && all.historyData && all.historyData.dailySidekickUsage) || null;
}

// ─── 扣减原语 (锁内: 读最新 → 检 → 记 → 存完整 historyData) ───

/**
 * 尝试占用一个 lens 配额 (锁保护)。
 * 已用过的 lens (lensKey 幂等) 或无限 tier → 直接 true 不重扣。
 * @returns {Promise<boolean>} true=可进(已记或无需记); false=配额用尽
 */
export function tryUseLens(tier, topicId, lensId) {
  // Codex round2 P2-f: 无限档 (basic/pro) 不记账 —— 防止 usedLensIds 无界增长 + 降级当天串用付费期记录。
  if (getLensQuota(tier) === Infinity) return Promise.resolve(true);
  return withQuotaLock(function () {
    var all = loadAll() || {};
    var hd = all.historyData || {};
    var usage = hd.dailyLensUsage || null;
    if (!canUseLens(usage, tier, topicId, lensId)) return false;
    var next = recordLensUsage(usage, topicId, lensId); // 幂等: 已记不重加
    // read-merge-write: 只改 dailyLensUsage, 不动 historyData 其它字段
    saveAll({ historyData: Object.assign({}, hd, { dailyLensUsage: next }) });
    return true;
  });
}

/**
 * 尝试占用一次 Sidekick 配额 (锁保护)。eventId 在锁内生成并记 → union 防 sync 丢扣。
 * @returns {Promise<{ok:boolean, eventId:string|null}>}
 */
export function tryUseSidekick(tier) {
  // Codex round2 P2-f: 无限档不记账 —— 防 eventIds UUID 数组每次 +1 无界增长 (重灾区) + 降级串用。
  if (getSidekickQuota(tier) === Infinity) return Promise.resolve({ ok: true, eventId: null });
  return withQuotaLock(function () {
    var all = loadAll() || {};
    var hd = all.historyData || {};
    var usage = hd.dailySidekickUsage || null;
    if (!canUseSidekick(usage, tier)) return { ok: false, eventId: null };
    var eventId = genEventId();
    var next = recordSidekickEvent(usage, eventId);
    saveAll({ historyData: Object.assign({}, hd, { dailySidekickUsage: next }) });
    return { ok: true, eventId: eventId };
  });
}

/**
 * 退还一次 Sidekick 配额 (锁保护) —— tryUseSidekick 已 reserve 但后续 API 失败时调, 把刚占的
 * eventId 移除, 不让网络失败白扣一次。仅移除当天 usage 里的该 eventId (跨日已 rollover, 不动)。
 * @param {string} eventId
 * @returns {Promise<void>}
 */
export function refundSidekick(eventId) {
  if (!eventId) return Promise.resolve();
  return withQuotaLock(function () {
    var all = loadAll() || {};
    var hd = all.historyData || {};
    var u = normalizeSidekickUsage(hd.dailySidekickUsage || null);
    var idx = u.eventIds.indexOf(eventId);
    if (idx < 0) return; // 不在当天 usage (已跨日/已被合并掉) → 无需退
    u.eventIds = u.eventIds.slice(0, idx).concat(u.eventIds.slice(idx + 1));
    saveAll({ historyData: Object.assign({}, hd, { dailySidekickUsage: u }) });
  });
}

// eventId: crypto.randomUUID 优先, 降级时间戳+随机 (仅用于本地 union 去重, 不要求密码学强度)
function genEventId() {
  try {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  } catch (e) {}
  return 'sk-' + Date.now() + '-' + Math.floor(Math.random() * 1e9).toString(36);
}
