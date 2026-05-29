/* ═══════════════════════════════════════════════════════
   lib/history-tiers.js — history 模块 tier-gating 纯逻辑

   规划: docs/HISTORY_MEMBERSHIP_PLAN.md v1.2 §2 (3 tier 矩阵)
                                          §3 (8 门免费白名单)
                                          §4 (10+ 门 HS Pro-only 动态判定)
                                          §10 G (lens-level grandfather)

   纯逻辑模块, 不依赖 React / Supabase / localStorage. caller (lib/membership +
   UI 组件) 拿到 userTier 后调本模块判 access. lens-level grandfather 需要
   caller 注入 hasCompletedLens (从 historyData.learningReceipts 读).

   设计原则:
   - 「未来新增 grade='HS' 课自动 Pro-only」-> 动态读 COURSE_GRADE_MAP,
     不维护静态列表 (避免遗漏)。如要 override 个别 HS 课为非 Pro,
     在 HS_OVERRIDE_LIST 显式加 topicId.
   - lens-level grandfather (v1.2 §10 G 修正): 已学过的 lens 永久 view-only
     可见, 不能用 completedTopics 整门 grandfather (用户可能只学了 3 lens 中 1 个)。
   - 不知道的 topicId 默认 'basic' (登录可见, 不打扰付费用户)。
   ═══════════════════════════════════════════════════════ */

import { COURSE_GRADE_MAP } from './history-grade-map.js';

/**
 * 8 门免费课白名单 (v1.2 §3 锁定)。
 * 分布: 2 G6 + 3 G7 + 3 G8 = 中国主场 2 + 西方古代 1 + 中世纪 2 + 美国史 3.
 */
export var FREE_TOPIC_WHITELIST = [
  'magna-carta-1215',                  // G7 旗舰
  'tang-song-china',                   // G7 中国主场
  'ancient-greece-480bce',             // G6 民主入门
  'qin-china-221bce',                  // G6 中国主场
  'mali-empire-1235',                  // G7 非洲补全
  'constitutional-convention-1787',    // G8 US 核心
  'american-revolution-1776',          // G8 US 核心
  'civil-war-1861',                    // G8 US 核心
];

/**
 * 游客唯一试用课. 没注册的用户能学这 1 门, 通关弹注册.
 */
export var GUEST_TRIAL_TOPIC = 'magna-carta-1215';

/**
 * HS 课 override 列表 — 若某门 HS 课内容偏入门, 不想锁到 Pro, 加进来。
 * 当前 []. 留扩展, 不强制立刻填。
 */
export var HS_OVERRIDE_LIST = [];

/**
 * tier 等级排序: guest < free < basic < pro.
 * 用于 tierMeetsRequirement 计算 caller 的 tier 是否够 required.
 */
export var TIER_ORDER = {
  guest: 0,
  free: 1,
  basic: 2,
  pro: 3,
};

// ─── 单 topic 判定 ───

/**
 * 是不是 HS 课 (动态查 grade-map).
 * @param {string} topicId
 * @returns {boolean}
 */
export function isHSTopic(topicId) {
  var entry = COURSE_GRADE_MAP[topicId];
  return !!(entry && entry.grade === 'HS');
}

/**
 * 是不是 Pro-only (HS + 不在 override 里).
 * @param {string} topicId
 * @returns {boolean}
 */
export function isProOnly(topicId) {
  if (HS_OVERRIDE_LIST.indexOf(topicId) >= 0) return false;
  return isHSTopic(topicId);
}

/**
 * 返回 topic 所需的最低 tier ('guest' | 'free' | 'basic' | 'pro').
 *
 * 优先级 (高 → 低):
 *   1. 游客唯一试用课 → 'guest' (人人可学)
 *   2. 8 门免费白名单 → 'free' (注册即可)
 *   3. HS / AP 高阶课 → 'pro' (Pro-only)
 *   4. 其它 (~33 门 G5-G8) → 'basic' 默认
 *
 * @param {string} topicId
 * @returns {string} 'guest' | 'free' | 'basic' | 'pro'
 */
export function getTopicAccessTier(topicId) {
  if (topicId === GUEST_TRIAL_TOPIC) return 'guest';
  if (FREE_TOPIC_WHITELIST.indexOf(topicId) >= 0) return 'free';
  if (isProOnly(topicId)) return 'pro';
  return 'basic';
}

// ─── tier 关系判定 ───

/**
 * userTier 是否达到 requiredTier 门槛.
 * @param {string} userTier  当前用户 tier
 * @param {string} requiredTier  topic 所需 tier
 * @returns {boolean}
 */
export function tierMeetsRequirement(userTier, requiredTier) {
  var u = TIER_ORDER[userTier];
  var r = TIER_ORDER[requiredTier];
  // P0-3 (Codex 实施审计): unknown tier 是 fail-closed (返回 false), 但加 dev warning
  // 避免 silent degradation — 上游 caller 传错字段 (typo) 时能在控制台看到, 不会
  // 静默把所有用户锁出 (Step 0A 踩过 silent degradation 的教训)。
  if (u == null) {
    if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production') {
      console.warn('[history-tiers] unknown userTier:', userTier, '— treated as below all (fail-closed)');
    }
    u = -1;
  }
  if (r == null) {
    if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production') {
      console.warn('[history-tiers] unknown requiredTier:', requiredTier, '— treated as above all (fail-closed)');
    }
    r = 99;
  }
  return u >= r;
}

// ─── topic 级 access ───

/**
 * 当前用户能否进 topic.
 *
 * @param {string} topicId
 * @param {string} userTier 'guest' | 'free' | 'basic' | 'pro'
 * @returns {boolean}
 */
export function canAccessTopic(topicId, userTier) {
  var required = getTopicAccessTier(topicId);
  return tierMeetsRequirement(userTier, required);
}

// ─── lens 级 access (含 grandfather) ───

/**
 * lens 级 access 决策. v1.2 §10 G 修正: 已学过的 lens 永久 view-only 可见,
 * 同 topic 内未学的 lens 按当前 tier gate。
 *
 * @param {string} topicId
 * @param {string} lensId
 * @param {string} userTier
 * @param {boolean} hasCompletedLens caller 注入: learningReceipts[topicId][lensId] 存在?
 * @returns {string} 'view-only-grandfathered' | 'allow' | 'deny'
 *
 * 用法:
 *   - 'view-only-grandfathered': 渲染 transcript + 「重新学需要 Basic/Pro」按钮
 *   - 'allow': 正常进入对话
 *   - 'deny': 弹 Upgrade modal (用 getTopicAccessTier 拿 required 显示)
 */
export function canAccessLens(topicId, lensId, userTier, hasCompletedLens) {
  if (hasCompletedLens === true) return 'view-only-grandfathered';
  return canAccessTopic(topicId, userTier) ? 'allow' : 'deny';
}

/**
 * P1-4 (Codex 实施审计) caller-facing helper: 从 learningReceipts 对象判断
 * 某 lens 是否学过. 避免 caller 自己写 `!!(receipts[topicId] && receipts[topicId][lensId])`
 * 写错 / 忘传导致 grandfather 失效.
 *
 * learningReceipts 形态来自 historyData.learningReceipts[topicId][lensId]
 * (见 lib/history-storage.js:394 loadLearningReceipt — key 是 lensId 或 '__default__')。
 *
 * @param {object|null} learningReceipts  historyData.learningReceipts 整个对象
 * @param {string} topicId
 * @param {string} lensId
 * @returns {boolean}
 */
export function lensCompletedFrom(learningReceipts, topicId, lensId) {
  if (!learningReceipts || typeof learningReceipts !== 'object') return false;
  var topicReceipts = learningReceipts[topicId];
  if (!topicReceipts || typeof topicReceipts !== 'object') return false;
  return !!topicReceipts[lensId];
}

/**
 * P1-4 便捷版 canAccessLens: caller 直接传 learningReceipts 对象, 内部查 lens 完成态。
 * 比 canAccessLens 更难误用 (不需要 caller 自己算 hasCompletedLens boolean)。
 *
 * @param {string} topicId
 * @param {string} lensId
 * @param {string} userTier
 * @param {object|null} learningReceipts  historyData.learningReceipts
 * @returns {string} 'view-only-grandfathered' | 'allow' | 'deny'
 */
export function canAccessLensWithReceipts(topicId, lensId, userTier, learningReceipts) {
  var done = lensCompletedFrom(learningReceipts, topicId, lensId);
  return canAccessLens(topicId, lensId, userTier, done);
}

/**
 * Step 4b 进课 gate 决策 (纯逻辑, 给 CourseGate 组件用)。
 * 把 useUserTier 的 5 状态 + lens grandfather 合成单一 gate 结论。
 *
 * @param {object} tierInfo  { state, tier } 来自 useUserTier
 *   state: 'loading' | 'active' | 'free' | 'guest' | 'error'
 *   tier:  active 时的 'basic'/'pro'; 其余忽略
 * @param {string} topicId
 * @param {string} lensId
 * @param {object|null} learningReceipts  historyData.learningReceipts
 * @returns {string} gate 结论:
 *   'loading'                 — tier 未定, caller 显示 skeleton / 乐观, 绝不据此放 deny
 *   'allow'                   — 可进
 *   'view-only-grandfathered' — 已学过的 lens (4b-1 简单放行, view-only 渲染留 4b-3)
 *   'deny'                    — 超 tier, 弹升级
 *   'error-blocked'           — tier 查询失败且该课需付费 (fail-closed); 免费课仍 allow
 */
export function computeGateAccess(tierInfo, topicId, lensId, learningReceipts) {
  var state = tierInfo && tierInfo.state;
  if (state === 'loading') return 'loading';

  if (state === 'error') {
    // fail-closed: 付费课 (basic/pro) 不放行; 免费课 (guest/free 白名单) 仍放行
    var req = getTopicAccessTier(topicId);
    if (req === 'guest' || req === 'free') return 'allow';
    return 'error-blocked';
  }

  // active / free / guest → 映射成 userTier 后走 lens-level 判定 (含 grandfather)
  var userTier = state === 'active' ? (tierInfo.tier || 'free')
    : (state === 'free' ? 'free'
    : (state === 'guest' ? 'guest' : 'free'));
  return canAccessLensWithReceipts(topicId, lensId, userTier, learningReceipts);
}

// ─── 批量查询 ───

/**
 * 返回所有 Pro-only topicId 列表 (动态读 COURSE_GRADE_MAP).
 * 用于 admin / debug / 文档生成.
 */
export function getProOnlyTopics() {
  var result = [];
  for (var id in COURSE_GRADE_MAP) {
    if (Object.prototype.hasOwnProperty.call(COURSE_GRADE_MAP, id) && isProOnly(id)) {
      result.push(id);
    }
  }
  return result;
}

/**
 * 返回 8 门免费课白名单的副本 (caller 不能改原数组).
 */
export function getFreeTopics() {
  return FREE_TOPIC_WHITELIST.slice();
}

/**
 * 返回所有 Basic-tier topic (= 注册表里既不在 free, 也不是 Pro-only 的 topic).
 * 注: 调用方需要传入 allTopicIds 列表 (从 history-topics.js 拿).
 * 设计成 caller 注入, 避免 history-tiers 反向依赖 history-topics 造成循环.
 *
 * @param {string[]} allAvailableTopicIds
 * @returns {string[]}
 */
export function getBasicTopics(allAvailableTopicIds) {
  if (!Array.isArray(allAvailableTopicIds)) return [];
  return allAvailableTopicIds.filter(function (id) {
    return getTopicAccessTier(id) === 'basic';
  });
}

// ─── caller-facing 元信息 (供 Upgrade modal 三维对照表) ───

/**
 * 返回各 tier 的 topic 数量统计 (动态算).
 * @param {string[]} allAvailableTopicIds
 * @returns {{guest:number, free:number, basic:number, pro:number, total:number}}
 */
export function getTopicCountsByTier(allAvailableTopicIds) {
  var counts = { guest: 0, free: 0, basic: 0, pro: 0, total: 0 };
  if (!Array.isArray(allAvailableTopicIds)) return counts;
  for (var i = 0; i < allAvailableTopicIds.length; i++) {
    var t = getTopicAccessTier(allAvailableTopicIds[i]);
    if (counts[t] != null) counts[t] += 1;
    counts.total += 1;
  }
  return counts;
}

/**
 * P1-1 (Codex 实施审计): 返回**每个 tier 能学的累计课程数** (不是互斥分桶)。
 *
 * getTopicCountsByTier 是互斥分桶 (每门课只算它自己的 tier),
 * 但 Upgrade modal 文案 (v1.2 §7) 要的是「这个 tier 总共能学几门」=累计:
 * 高 tier 包含所有低 tier 的课。
 *
 * 例 (51 门 available, 10 门 HS Pro-only):
 *   互斥分桶 getTopicCountsByTier: { guest:1, free:7, basic:33, pro:10 }
 *   累计 getAccessibleTopicCounts:  { guest:1, free:8, basic:41, pro:51 }
 *                                     ↑ 对应 v1.2 §7 文案 "1 / 8 / 41 / 51"
 *
 * @param {string[]} allAvailableTopicIds
 * @returns {{guest:number, free:number, basic:number, pro:number}}
 */
export function getAccessibleTopicCounts(allAvailableTopicIds) {
  var result = { guest: 0, free: 0, basic: 0, pro: 0 };
  if (!Array.isArray(allAvailableTopicIds)) return result;
  for (var i = 0; i < allAvailableTopicIds.length; i++) {
    var id = allAvailableTopicIds[i];
    // 每个 tier 能学 = canAccessTopic 为真的 topic 数
    if (canAccessTopic(id, 'guest')) result.guest += 1;
    if (canAccessTopic(id, 'free')) result.free += 1;
    if (canAccessTopic(id, 'basic')) result.basic += 1;
    if (canAccessTopic(id, 'pro')) result.pro += 1;
  }
  return result;
}
