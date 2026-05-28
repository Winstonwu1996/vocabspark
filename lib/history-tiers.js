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
  var u = TIER_ORDER[userTier] != null ? TIER_ORDER[userTier] : -1;
  var r = TIER_ORDER[requiredTier] != null ? TIER_ORDER[requiredTier] : 99;
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
