/* ═══════════════════════════════════════════════════════
   lib/daily-quota.js — 每日视角 + Sidekick 双配额纯逻辑 (Step 3)

   规划: docs/HISTORY_MEMBERSHIP_PLAN.md v1.2 §2 (配额矩阵) + §6 (机制)

   配额 (v1.2 §2):
     视角 (lens):   游客 1/天 · 注册 3/天 · Basic+ 无限
     Sidekick:      游客 5/天 · 注册 20/天 · Basic+ 无限

   存储形态 (v1.2 §6):
     historyData.dailyLensUsage     = { date: 'YYYY-MM-DD', usedLensIds: [] }
     historyData.dailySidekickUsage = { date: 'YYYY-MM-DD', eventIds: [] }
       ↑ Sidekick 用 eventIds[] 而非 count — sync merge 双端各 +1 时 union 幂等,
         不会丢扣 (借鉴 vocab unionReviewHistory 的 concat+dedup 经验)

   合并 (v1.2 §6 mergeDailyQuota):
     - 跨日 (date 不同): 取较新 date 全量
     - 同日: usedLensIds / eventIds 取 union 去重

   纯逻辑模块, 不依赖 React / localStorage / navigator.locks.
   持久化 + multi-tab lock + sync push 在 UI 层 wiring (Step 4-5) 处理,
   本模块只管「给定 usage 对象 + tier, 判断能不能用 / 剩多少 / 记一次」。

   「第一次有效对话」扣减时机 (v1.2 §6) 是 UI 层决定何时调 recordLensUsage,
   不在本模块 — 本模块只提供 recordLensUsage, caller 在「第一条非 fallback
   AI bubble 写入 conversationLog, 或用户首次有效输入」时调一次。
   ═══════════════════════════════════════════════════════ */

// ─── 配额常量 (v1.2 §2) ───
export var LENS_QUOTA = {
  guest: 1,
  free: 3,
  basic: Infinity,
  pro: Infinity,
};

export var SIDEKICK_QUOTA = {
  guest: 5,
  free: 20,
  basic: Infinity,
  pro: Infinity,
};

// ─── 日期 helper ───

/**
 * 本地时区的 YYYY-MM-DD。用 sv-SE locale 拿到 ISO-like 格式。
 * @param {number|Date} [now] 测试可注入固定时间
 * @returns {string} 'YYYY-MM-DD'
 */
export function todayStr(now) {
  var d = now != null ? new Date(now) : new Date();
  // sv-SE (瑞典) locale 的 date 格式天然是 YYYY-MM-DD
  return d.toLocaleDateString('sv-SE');
}

// ─── usage 规范化 (含跨日 rollover) ───

/**
 * 规范化 lens usage 对象 + 跨日重置。
 * @param {object|null} usage  { date, usedLensIds }
 * @param {string} [today]  默认 todayStr()
 * @returns {{date:string, usedLensIds:string[]}}
 */
export function normalizeLensUsage(usage, today) {
  today = today || todayStr();
  if (!usage || usage.date !== today) {
    return { date: today, usedLensIds: [] };
  }
  return {
    date: usage.date,
    usedLensIds: Array.isArray(usage.usedLensIds) ? usage.usedLensIds.slice() : [],
  };
}

/**
 * 规范化 sidekick usage 对象 + 跨日重置。
 * @param {object|null} usage  { date, eventIds }
 * @param {string} [today]
 * @returns {{date:string, eventIds:string[]}}
 */
export function normalizeSidekickUsage(usage, today) {
  today = today || todayStr();
  if (!usage || usage.date !== today) {
    return { date: today, eventIds: [] };
  }
  return {
    date: usage.date,
    eventIds: Array.isArray(usage.eventIds) ? usage.eventIds.slice() : [],
  };
}

// ─── 配额查询 ───

export function getLensQuota(tier) {
  return LENS_QUOTA[tier] != null ? LENS_QUOTA[tier] : 0;
}

export function getSidekickQuota(tier) {
  return SIDEKICK_QUOTA[tier] != null ? SIDEKICK_QUOTA[tier] : 0;
}

/**
 * lens 唯一 key = topicId:lensId (同一 lens 反复进只算一次)。
 */
export function lensKey(topicId, lensId) {
  return String(topicId) + ':' + String(lensId);
}

/**
 * 剩余可用视角数。无限 tier 返回 Infinity。
 * @param {object|null} usage
 * @param {string} tier
 * @param {string} [today]
 * @returns {number}
 */
export function getRemainingLenses(usage, tier, today) {
  var quota = getLensQuota(tier);
  if (quota === Infinity) return Infinity;
  var u = normalizeLensUsage(usage, today);
  return Math.max(0, quota - u.usedLensIds.length);
}

/**
 * 当前能否进这个 lens (扣减前的预检)。
 * - 已经用过这个 lens 今天 → 一律允许 (幂等, 反复进同一 lens 不重复扣)
 * - 否则 → 还有剩余配额?
 * @returns {boolean}
 */
export function canUseLens(usage, tier, topicId, lensId, today) {
  var quota = getLensQuota(tier);
  if (quota === Infinity) return true;
  var u = normalizeLensUsage(usage, today);
  var key = lensKey(topicId, lensId);
  if (u.usedLensIds.indexOf(key) >= 0) return true; // 已扣过, 重进允许
  return u.usedLensIds.length < quota;
}

/**
 * 记一次 lens 使用 (caller 在「第一次有效对话」时调)。返回新 usage 对象, caller 持久化。
 * 已记过的 lens 不重复加 (幂等)。
 * @returns {{date:string, usedLensIds:string[]}}
 */
export function recordLensUsage(usage, topicId, lensId, today) {
  var u = normalizeLensUsage(usage, today);
  var key = lensKey(topicId, lensId);
  if (u.usedLensIds.indexOf(key) < 0) {
    u.usedLensIds = u.usedLensIds.concat([key]);
  }
  return u;
}

/**
 * 剩余 Sidekick 次数。无限 tier 返回 Infinity。
 */
export function getRemainingSidekick(usage, tier, today) {
  var quota = getSidekickQuota(tier);
  if (quota === Infinity) return Infinity;
  var u = normalizeSidekickUsage(usage, today);
  return Math.max(0, quota - u.eventIds.length);
}

/**
 * 当前能否再用 Sidekick (调用前预检)。
 */
export function canUseSidekick(usage, tier, today) {
  var quota = getSidekickQuota(tier);
  if (quota === Infinity) return true;
  var u = normalizeSidekickUsage(usage, today);
  return u.eventIds.length < quota;
}

/**
 * 记一次 Sidekick 调用。eventId 由 caller 在调用前生成 (uuid), 防 sync merge 丢扣。
 * 已记过的 eventId 不重复加 (幂等)。
 * @returns {{date:string, eventIds:string[]}}
 */
export function recordSidekickEvent(usage, eventId, today) {
  var u = normalizeSidekickUsage(usage, today);
  if (eventId && u.eventIds.indexOf(eventId) < 0) {
    u.eventIds = u.eventIds.concat([eventId]);
  }
  return u;
}

// ─── 合并 (v1.2 §6 · 给 progressMergePolicy.mergeHistoryData 调) ───

/**
 * 合并两份 quota usage (sync 双端 / 多 tab)。借鉴 vocab unionReviewHistory 经验:
 *   - 跨日 (date 不同): 取较新 date 全量 (date 是 YYYY-MM-DD, 字典序即时间序)
 *   - 同日: usedLensIds / eventIds 取 union 去重 (幂等, 不丢任何一端的扣减)
 *
 * 同时支持 lens usage ({date, usedLensIds}) 和 sidekick usage ({date, eventIds})。
 * caller (mergeHistoryData) 对两个字段分别调用。
 *
 * @param {object|null} local
 * @param {object|null} remote
 * @returns {object|null}
 */
export function mergeDailyQuota(local, remote) {
  if (!local) return remote || null;
  if (!remote) return local;
  // 跨日: 较新 date 全量胜出
  if (local.date !== remote.date) {
    return (local.date > remote.date) ? local : remote;
  }
  // 同日: union 两端的 id 数组 (支持 usedLensIds + eventIds 两种字段)
  var out = { date: local.date };
  ['usedLensIds', 'eventIds'].forEach(function (field) {
    if (Array.isArray(local[field]) || Array.isArray(remote[field])) {
      var seen = {};
      var union = [];
      (local[field] || []).concat(remote[field] || []).forEach(function (x) {
        if (!seen[x]) { seen[x] = true; union.push(x); }
      });
      out[field] = union;
    }
  });
  return out;
}
