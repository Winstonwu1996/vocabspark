/* 纯逻辑单测: lib/history-tiers.js
   运行: node scripts/test-history-tiers.mjs

   覆盖 Step 2 (会员体系 v1.2 §2-§4 + §10 G):
   - 8 门免费白名单完整性
   - 14 门 HS Pro-only 动态判定 (含 v1.2 后新增的 4 门 haitian/meiji/russian/contemporary-us)
   - HS_OVERRIDE_LIST 扩展机制 (虽然当前空, 测一下 override 生效)
   - tier 层级排序 + meets-requirement
   - lens-level grandfather (v1.2 §10 G)
   - 默认 basic 兜底 (未知 topic)
*/

import {
  FREE_TOPIC_WHITELIST,
  GUEST_TRIAL_TOPIC,
  HS_OVERRIDE_LIST,
  TIER_ORDER,
  isHSTopic,
  isProOnly,
  getTopicAccessTier,
  tierMeetsRequirement,
  canAccessTopic,
  canAccessLens,
  canAccessLensWithReceipts,
  computeGateAccess,
  lensCompletedFrom,
  getProOnlyTopics,
  getFreeTopics,
  getBasicTopics,
  getTopicCountsByTier,
  getAccessibleTopicCounts,
} from "../lib/history-tiers.js";

var pass = 0, fail = 0;
function ok(name, cond) {
  if (cond) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name); }
}
function eq(name, a, b) {
  var same = JSON.stringify(a) === JSON.stringify(b);
  if (!same) console.log("     got=" + JSON.stringify(a) + " want=" + JSON.stringify(b));
  ok(name, same);
}

// ════════════════════════════════════════════════════════════
console.log("\n── 常量完整性 ──");
// ════════════════════════════════════════════════════════════
eq("FREE_TOPIC_WHITELIST 长度 = 8", FREE_TOPIC_WHITELIST.length, 8);
ok("magna-carta-1215 在 free 白名单", FREE_TOPIC_WHITELIST.indexOf('magna-carta-1215') >= 0);
ok("tang-song-china 在 free 白名单", FREE_TOPIC_WHITELIST.indexOf('tang-song-china') >= 0);
ok("ancient-greece-480bce 在 free 白名单", FREE_TOPIC_WHITELIST.indexOf('ancient-greece-480bce') >= 0);
ok("qin-china-221bce 在 free 白名单", FREE_TOPIC_WHITELIST.indexOf('qin-china-221bce') >= 0);
ok("mali-empire-1235 在 free 白名单", FREE_TOPIC_WHITELIST.indexOf('mali-empire-1235') >= 0);
ok("constitutional-convention-1787 在 free 白名单", FREE_TOPIC_WHITELIST.indexOf('constitutional-convention-1787') >= 0);
ok("american-revolution-1776 在 free 白名单", FREE_TOPIC_WHITELIST.indexOf('american-revolution-1776') >= 0);
ok("civil-war-1861 在 free 白名单", FREE_TOPIC_WHITELIST.indexOf('civil-war-1861') >= 0);
ok("GUEST_TRIAL_TOPIC == 'magna-carta-1215' (v1.2 §3 锁定)", GUEST_TRIAL_TOPIC === 'magna-carta-1215');
ok("GUEST_TRIAL_TOPIC 也在 FREE 白名单 (注册后继续解锁)", FREE_TOPIC_WHITELIST.indexOf(GUEST_TRIAL_TOPIC) >= 0);
eq("HS_OVERRIDE_LIST 默认 = []", HS_OVERRIDE_LIST, []);

// ════════════════════════════════════════════════════════════
console.log("\n── TIER_ORDER 排序 ──");
// ════════════════════════════════════════════════════════════
ok("guest < free", TIER_ORDER.guest < TIER_ORDER.free);
ok("free < basic", TIER_ORDER.free < TIER_ORDER.basic);
ok("basic < pro", TIER_ORDER.basic < TIER_ORDER.pro);
eq("TIER_ORDER.guest = 0", TIER_ORDER.guest, 0);
eq("TIER_ORDER.pro = 3", TIER_ORDER.pro, 3);

// ════════════════════════════════════════════════════════════
console.log("\n── isHSTopic / isProOnly (v1.2 §4) ──");
// ════════════════════════════════════════════════════════════
// 10 个 v1.2 明列的 HS 课
var v12LockedHS = [
  'scientific-revolution', 'enlightenment', 'french-revolution-1789',
  'industrial-revolution-1800', 'scramble-for-africa-1884',
  'world-war-one-1914', 'world-war-two-1942', 'cold-war-1962',
  'decolonization-1960', 'globalization-1995',
];
v12LockedHS.forEach(function (t) {
  ok("isHSTopic('" + t + "') == true", isHSTopic(t) === true);
  ok("isProOnly('" + t + "') == true", isProOnly(t) === true);
});

// v1.2 后新增的 4 门 HS 课 — 应自动归 Pro (动态判定)
var v12PostAddedHS = [
  'haitian-revolution-1791',
  'meiji-restoration-1868',
  'russian-revolution-1917',
  'contemporary-us-1980',
];
v12PostAddedHS.forEach(function (t) {
  ok("v1.2 后加的 HS 课自动 Pro: " + t, isProOnly(t) === true);
});

// G6-G8 课不是 HS
ok("magna-carta-1215 不是 HS (G7)", isHSTopic('magna-carta-1215') === false);
ok("tang-song-china 不是 HS (G7)", isHSTopic('tang-song-china') === false);
ok("magna-carta-1215 不是 Pro-only", isProOnly('magna-carta-1215') === false);

// 未知 topic
ok("isHSTopic 未知 topic 返回 false", isHSTopic('totally-fake-topic-xyz') === false);
ok("isProOnly 未知 topic 返回 false", isProOnly('totally-fake-topic-xyz') === false);

// ════════════════════════════════════════════════════════════
console.log("\n── getTopicAccessTier (4 路径) ──");
// ════════════════════════════════════════════════════════════
eq("magna-carta-1215 (guest 试用课) → 'guest'", getTopicAccessTier('magna-carta-1215'), 'guest');
eq("tang-song-china (free 白名单) → 'free'", getTopicAccessTier('tang-song-china'), 'free');
eq("ancient-greece-480bce (free) → 'free'", getTopicAccessTier('ancient-greece-480bce'), 'free');
eq("civil-war-1861 (free) → 'free'", getTopicAccessTier('civil-war-1861'), 'free');
eq("cold-war-1962 (HS) → 'pro'", getTopicAccessTier('cold-war-1962'), 'pro');
eq("french-revolution-1789 (HS) → 'pro'", getTopicAccessTier('french-revolution-1789'), 'pro');
eq("haitian-revolution-1791 (v1.2 后加的 HS) → 'pro'", getTopicAccessTier('haitian-revolution-1791'), 'pro');
eq("crusades-1099 (G7, 不在 free) → 'basic'", getTopicAccessTier('crusades-1099'), 'basic');
eq("byzantine-rise (G7) → 'basic'", getTopicAccessTier('byzantine-rise'), 'basic');
eq("未知 topic 默认 'basic' 兜底", getTopicAccessTier('xyz-fake-topic'), 'basic');

// ════════════════════════════════════════════════════════════
console.log("\n── tierMeetsRequirement ──");
// ════════════════════════════════════════════════════════════
ok("guest 不满足 free", tierMeetsRequirement('guest', 'free') === false);
ok("free 满足 guest", tierMeetsRequirement('free', 'guest') === true);
ok("free 满足 free", tierMeetsRequirement('free', 'free') === true);
ok("free 不满足 basic", tierMeetsRequirement('free', 'basic') === false);
ok("basic 满足 free", tierMeetsRequirement('basic', 'free') === true);
ok("basic 不满足 pro", tierMeetsRequirement('basic', 'pro') === false);
ok("pro 满足 pro", tierMeetsRequirement('pro', 'pro') === true);
ok("pro 满足 basic", tierMeetsRequirement('pro', 'basic') === true);
ok("pro 满足 free", tierMeetsRequirement('pro', 'free') === true);
ok("pro 满足 guest", tierMeetsRequirement('pro', 'guest') === true);

// 边界: 未知 tier
ok("未知 userTier 不满足任何 (fail-closed)", tierMeetsRequirement('xyz', 'free') === false);
ok("未知 requiredTier 没人满足 (fail-closed)", tierMeetsRequirement('pro', 'xyz') === false);

// ════════════════════════════════════════════════════════════
console.log("\n── canAccessTopic (跨 tier × topic 矩阵) ──");
// ════════════════════════════════════════════════════════════
// 游客 (guest):
ok("guest 能进 magna-carta-1215 (试用)", canAccessTopic('magna-carta-1215', 'guest') === true);
ok("guest 不能进 tang-song-china (free 白名单需注册)", canAccessTopic('tang-song-china', 'guest') === false);
ok("guest 不能进 crusades-1099 (basic)", canAccessTopic('crusades-1099', 'guest') === false);
ok("guest 不能进 cold-war-1962 (pro)", canAccessTopic('cold-war-1962', 'guest') === false);

// 注册免费 (free):
ok("free 能进 magna-carta-1215 (含 guest 试用)", canAccessTopic('magna-carta-1215', 'free') === true);
ok("free 能进 tang-song-china (white-listed)", canAccessTopic('tang-song-china', 'free') === true);
ok("free 能进 civil-war-1861 (white-listed)", canAccessTopic('civil-war-1861', 'free') === true);
ok("free 不能进 crusades-1099 (需 basic)", canAccessTopic('crusades-1099', 'free') === false);
ok("free 不能进 cold-war-1962 (需 pro)", canAccessTopic('cold-war-1962', 'free') === false);

// Basic:
ok("basic 能进 tang-song-china (含 free)", canAccessTopic('tang-song-china', 'basic') === true);
ok("basic 能进 crusades-1099 (basic 课)", canAccessTopic('crusades-1099', 'basic') === true);
ok("basic 能进 byzantine-rise (basic)", canAccessTopic('byzantine-rise', 'basic') === true);
ok("basic 不能进 cold-war-1962 (Pro-only)", canAccessTopic('cold-war-1962', 'basic') === false);
ok("basic 不能进 french-revolution-1789 (Pro-only)", canAccessTopic('french-revolution-1789', 'basic') === false);

// Pro:
ok("pro 能进所有 free", canAccessTopic('tang-song-china', 'pro') === true);
ok("pro 能进所有 basic", canAccessTopic('crusades-1099', 'pro') === true);
ok("pro 能进所有 HS Pro-only", canAccessTopic('cold-war-1962', 'pro') === true);
ok("pro 能进 v1.2 后加的 HS", canAccessTopic('haitian-revolution-1791', 'pro') === true);

// ════════════════════════════════════════════════════════════
console.log("\n── canAccessLens · lens-level grandfather (v1.2 §10 G) ──");
// ════════════════════════════════════════════════════════════
// Free 用户已学过的 Pro lens → grandfathered
eq("Free 用户学过的 Pro lens 永久 view-only",
   canAccessLens('cold-war-1962', 'jfk', 'free', true),
   'view-only-grandfathered');

// Free 用户没学过的 Pro lens → deny
eq("Free 用户没学过的 Pro lens 拦截",
   canAccessLens('cold-war-1962', 'jfk', 'free', false),
   'deny');

// Pro 用户能学新 lens → allow
eq("Pro 用户能学 HS lens",
   canAccessLens('cold-war-1962', 'jfk', 'pro', false),
   'allow');

// Step 4b-3: grandfather 改为「缺 tier 时的回退」。tier 够的用户 (即便已学过) → 直接 allow,
// 可正常重学, 不被劝升级。view-only-grandfathered 只留给「缺 tier 但已学过」者。
eq("Pro 用户已学过的 Pro lens → allow (持有 tier, 可重学, 不走 view-only)",
   canAccessLens('cold-war-1962', 'jfk', 'pro', true),
   'allow');

// Free 课用户访问 free 课 lens → allow (已通过 topic gate)
eq("Free 用户进 free 课 lens", canAccessLens('tang-song-china', 'huizong', 'free', false), 'allow');

// guest 用户进 guest 试用课 lens → allow
eq("guest 进 magna-carta lens", canAccessLens('magna-carta-1215', 'king-john', 'guest', false), 'allow');

// guest 用户进 free 课 lens → deny
eq("guest 进 free-only 课 deny", canAccessLens('tang-song-china', 'huizong', 'guest', false), 'deny');

// hasCompletedLens 既不是 true 也不是 false (如 null/undefined) → 走 tier gate (按未完成处理)
eq("hasCompletedLens=null 按未完成", canAccessLens('cold-war-1962', 'jfk', 'free', null), 'deny');
eq("hasCompletedLens=undefined 按未完成", canAccessLens('cold-war-1962', 'jfk', 'free', undefined), 'deny');

// ════════════════════════════════════════════════════════════
console.log("\n── getProOnlyTopics (动态 HS 列表) ──");
// ════════════════════════════════════════════════════════════
var proOnly = getProOnlyTopics();
ok("Pro-only 列表非空", proOnly.length > 0);
ok("Pro-only ≥ 14 门 (v1.2 + 后加)", proOnly.length >= 14);
ok("Pro-only 包含 cold-war-1962", proOnly.indexOf('cold-war-1962') >= 0);
ok("Pro-only 包含 haitian-revolution-1791 (后加)", proOnly.indexOf('haitian-revolution-1791') >= 0);
ok("Pro-only 不包含 magna-carta-1215 (G7)", proOnly.indexOf('magna-carta-1215') < 0);
ok("Pro-only 不包含 tang-song-china (G7)", proOnly.indexOf('tang-song-china') < 0);

// ════════════════════════════════════════════════════════════
console.log("\n── getFreeTopics (返回副本) ──");
// ════════════════════════════════════════════════════════════
var freeList = getFreeTopics();
eq("getFreeTopics 返回 8 项", freeList.length, 8);
var freeListCopy = getFreeTopics();
freeListCopy.push('hacked-injection');
ok("getFreeTopics 返回副本 (caller 改不影响原数组)", FREE_TOPIC_WHITELIST.length === 8);

// ════════════════════════════════════════════════════════════
console.log("\n── getBasicTopics (caller 注入 allAvailableTopicIds) ──");
// ════════════════════════════════════════════════════════════
var sampleAll = [
  'magna-carta-1215',    // guest
  'tang-song-china',     // free
  'civil-war-1861',      // free
  'crusades-1099',       // basic
  'byzantine-rise',      // basic
  'cold-war-1962',       // pro
  'french-revolution-1789', // pro
];
var basicOnly = getBasicTopics(sampleAll);
eq("getBasicTopics 过滤出 'basic' 那 2 门", basicOnly.sort(), ['byzantine-rise', 'crusades-1099']);
ok("getBasicTopics(null) 返回 []", JSON.stringify(getBasicTopics(null)) === '[]');
ok("getBasicTopics(undefined) 返回 []", JSON.stringify(getBasicTopics(undefined)) === '[]');

// ════════════════════════════════════════════════════════════
console.log("\n── getTopicCountsByTier (Upgrade modal 三维对照表用) ──");
// ════════════════════════════════════════════════════════════
var counts = getTopicCountsByTier(sampleAll);
eq("guest 数 = 1 (magna-carta)", counts.guest, 1);
eq("free 数 = 2 (tang-song + civil-war)", counts.free, 2);
eq("basic 数 = 2 (crusades + byzantine)", counts.basic, 2);
eq("pro 数 = 2 (cold-war + french-rev)", counts.pro, 2);
eq("total = 7", counts.total, 7);
ok("getTopicCountsByTier(null) 兜底", getTopicCountsByTier(null).total === 0);

// ════════════════════════════════════════════════════════════
console.log("\n── getAccessibleTopicCounts · 累计可学数 (P1-1 Codex 实施审计) ──");
// ════════════════════════════════════════════════════════════
// 7 门样本: guest=1, free=2, basic=2, pro=2 (互斥)
// 累计: guest 能学 1; free 能学 1+2=3; basic 能学 1+2+2=5; pro 能学全 7
var acc = getAccessibleTopicCounts(sampleAll);
eq("累计 guest = 1 (只游客试用课)", acc.guest, 1);
eq("累计 free = 3 (guest 1 + free 2)", acc.free, 3);
eq("累计 basic = 5 (含 free 全部 + basic 2)", acc.basic, 5);
eq("累计 pro = 7 (全部可学)", acc.pro, 7);
ok("累计 pro >= 累计 basic >= 累计 free >= 累计 guest (单调)",
   acc.pro >= acc.basic && acc.basic >= acc.free && acc.free >= acc.guest);
ok("getAccessibleTopicCounts(null) 兜底 {0,0,0,0}",
   JSON.stringify(getAccessibleTopicCounts(null)) === JSON.stringify({guest:0,free:0,basic:0,pro:0}));
// v1.2 §7 文案锁定: 51 门 available (10 HS) → 1/8/41/51
// (用代表性子集验证累计语义; 真 51 门数字在 cumulative smoke 验证过)

// ════════════════════════════════════════════════════════════
console.log("\n── lensCompletedFrom · grandfather caller-facing (P1-4) ──");
// ════════════════════════════════════════════════════════════
var receipts = {
  'cold-war-1962': { 'jfk': { ts: 123, fact: 'x' }, 'arkhipov': { ts: 456 } },
  'tang-song-china': { 'huizong': { ts: 789 } },
};
ok("学过的 lens → true", lensCompletedFrom(receipts, 'cold-war-1962', 'jfk') === true);
ok("学过的另一 lens → true", lensCompletedFrom(receipts, 'cold-war-1962', 'arkhipov') === true);
ok("同 topic 没学的 lens → false", lensCompletedFrom(receipts, 'cold-war-1962', 'proxy-war-peasant') === false);
ok("没学过的 topic → false", lensCompletedFrom(receipts, 'french-revolution-1789', 'robespierre') === false);
ok("learningReceipts=null → false", lensCompletedFrom(null, 'cold-war-1962', 'jfk') === false);
ok("learningReceipts=undefined → false", lensCompletedFrom(undefined, 'cold-war-1962', 'jfk') === false);
ok("learningReceipts={} → false", lensCompletedFrom({}, 'cold-war-1962', 'jfk') === false);

// ════════════════════════════════════════════════════════════
console.log("\n── canAccessLensWithReceipts · 便捷版 (P1-4 难误用) ──");
// ════════════════════════════════════════════════════════════
eq("Free 用户 + 学过的 Pro lens → grandfathered (从 receipts 自动查)",
   canAccessLensWithReceipts('cold-war-1962', 'jfk', 'free', receipts),
   'view-only-grandfathered');
eq("Free 用户 + 没学过的 Pro lens → deny",
   canAccessLensWithReceipts('cold-war-1962', 'proxy-war-peasant', 'free', receipts),
   'deny');
eq("Pro 用户 + 没学过的 Pro lens → allow",
   canAccessLensWithReceipts('cold-war-1962', 'proxy-war-peasant', 'pro', receipts),
   'allow');
eq("learningReceipts=null 不崩 → 按未完成走 tier gate",
   canAccessLensWithReceipts('cold-war-1962', 'jfk', 'free', null),
   'deny');
eq("Free 用户进 free 课 lens (没学过) → allow",
   canAccessLensWithReceipts('tang-song-china', 'su-shi', 'free', receipts),
   'allow');
// Step 4b-3: tier 优先 — 持 tier 者重访已学 lens → allow (非 view-only), grandfather 只回退给缺 tier
eq("Pro 用户 + 学过的 Pro lens → allow (grandfather 回退不触发)",
   canAccessLensWithReceipts('cold-war-1962', 'jfk', 'pro', receipts),
   'allow');

// ════════════════════════════════════════════════════════════
console.log("\n── computeGateAccess · Step 4b 进课 gate 决策 ──");
// ════════════════════════════════════════════════════════════
// loading → 'loading' (不据此放 deny)
eq("loading → 'loading'", computeGateAccess({ state: 'loading' }, 'cold-war-1962', 'jfk', null), 'loading');

// error → fail-closed: 付费课 deny, 免费课 allow
eq("error + Pro 课 → error-blocked (fail-closed)", computeGateAccess({ state: 'error' }, 'cold-war-1962', 'jfk', null), 'error-blocked');
eq("error + Basic 课 → error-blocked", computeGateAccess({ state: 'error' }, 'crusades-1099', 'x', null), 'error-blocked');
eq("error + free 白名单课 → allow (免费内容放行)", computeGateAccess({ state: 'error' }, 'tang-song-china', 'huizong', null), 'allow');
eq("error + guest 试用课 → allow", computeGateAccess({ state: 'error' }, 'magna-carta-1215', 'king-john', null), 'allow');
// Codex P2-c (round4): grandfather 永久优先, tier 查询失败不该锁出已学完的付费 lens
var errGfReceipts = { 'cold-war-1962': { 'jfk': { ts: 1 } } };
eq("error + 学过的 Pro lens → view-only-grandfathered (grandfather 先于 fail-closed)",
   computeGateAccess({ state: 'error' }, 'cold-war-1962', 'jfk', errGfReceipts), 'view-only-grandfathered');
eq("error + 没学的 Pro lens → error-blocked (仍 fail-closed)",
   computeGateAccess({ state: 'error' }, 'cold-war-1962', 'khrushchev', errGfReceipts), 'error-blocked');

// active pro → 全 allow
eq("active pro + HS 课 → allow", computeGateAccess({ state: 'active', tier: 'pro' }, 'cold-war-1962', 'jfk', null), 'allow');
eq("active basic + basic 课 → allow", computeGateAccess({ state: 'active', tier: 'basic' }, 'crusades-1099', 'x', null), 'allow');
eq("active basic + HS 课 → deny", computeGateAccess({ state: 'active', tier: 'basic' }, 'cold-war-1962', 'jfk', null), 'deny');

// free → 白名单 allow, basic/pro 课 deny
eq("free + 白名单课 → allow", computeGateAccess({ state: 'free' }, 'tang-song-china', 'huizong', null), 'allow');
eq("free + basic 课 → deny", computeGateAccess({ state: 'free' }, 'crusades-1099', 'x', null), 'deny');
eq("free + HS 课 → deny", computeGateAccess({ state: 'free' }, 'cold-war-1962', 'jfk', null), 'deny');

// guest → 仅试用课 allow
eq("guest + 试用课 → allow", computeGateAccess({ state: 'guest' }, 'magna-carta-1215', 'king-john', null), 'allow');
eq("guest + free 白名单课 → deny (需注册)", computeGateAccess({ state: 'guest' }, 'tang-song-china', 'huizong', null), 'deny');

// grandfather: free 用户已学过的 Pro lens → view-only-grandfathered
var gfReceipts = { 'cold-war-1962': { 'jfk': { ts: 1 } } };
eq("free + 学过的 Pro lens → view-only-grandfathered",
   computeGateAccess({ state: 'free' }, 'cold-war-1962', 'jfk', gfReceipts), 'view-only-grandfathered');
eq("free + 没学的 Pro lens → deny (同课不同 lens)",
   computeGateAccess({ state: 'free' }, 'cold-war-1962', 'khrushchev', gfReceipts), 'deny');

// active 无 tier 字段 → 兜底 free
eq("active 无 tier → 兜底 free (basic 课 deny)", computeGateAccess({ state: 'active' }, 'crusades-1099', 'x', null), 'deny');

// ════════════════════════════════════════════════════════════
console.log("\n══════════════════════════════════════════════════");
console.log("结果: " + pass + " 通过, " + fail + " 失败");
if (fail > 0) {
  console.log("❌ 单测有失败, Step 3 之前必须修");
  process.exit(1);
} else {
  console.log("✅ 全部通过, history-tiers 决策核心已锁定");
  process.exit(0);
}
