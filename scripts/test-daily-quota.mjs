/* 纯逻辑单测: lib/daily-quota.js
   运行: node scripts/test-daily-quota.mjs

   覆盖 Step 3 (会员体系 v1.2 §2 配额矩阵 + §6 机制):
   - 视角 1/3/无限 + Sidekick 5/20/无限 配额
   - 跨日 rollover
   - 幂等扣减 (同 lens 反复进只算一次)
   - mergeDailyQuota union (同日) / 取新 (跨日) — 借鉴 vocab unionReviewHistory
   - eventIds 防 sync 双 +1 丢扣
*/

import {
  LENS_QUOTA,
  SIDEKICK_QUOTA,
  todayStr,
  normalizeLensUsage,
  normalizeSidekickUsage,
  getLensQuota,
  getSidekickQuota,
  lensKey,
  getRemainingLenses,
  canUseLens,
  recordLensUsage,
  getRemainingSidekick,
  canUseSidekick,
  recordSidekickEvent,
  isValidQuotaDate,
  mergeLensUsage,
  mergeSidekickUsage,
} from "../lib/daily-quota.js";

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

var T = "2026-05-27";       // 固定"今天"
var YESTERDAY = "2026-05-26";

// ════════════════════════════════════════════════════════════
console.log("\n── 配额常量 (v1.2 §2) ──");
// ════════════════════════════════════════════════════════════
eq("LENS_QUOTA.guest = 1", LENS_QUOTA.guest, 1);
eq("LENS_QUOTA.free = 3", LENS_QUOTA.free, 3);
ok("LENS_QUOTA.basic = Infinity", LENS_QUOTA.basic === Infinity);
ok("LENS_QUOTA.pro = Infinity", LENS_QUOTA.pro === Infinity);
eq("SIDEKICK_QUOTA.guest = 5", SIDEKICK_QUOTA.guest, 5);
eq("SIDEKICK_QUOTA.free = 20", SIDEKICK_QUOTA.free, 20);
ok("SIDEKICK_QUOTA.basic = Infinity", SIDEKICK_QUOTA.basic === Infinity);
eq("getLensQuota('free') = 3", getLensQuota('free'), 3);
eq("getLensQuota(未知 tier) = 0 (fail-closed)", getLensQuota('xyz'), 0);
eq("getSidekickQuota('guest') = 5", getSidekickQuota('guest'), 5);

// ════════════════════════════════════════════════════════════
console.log("\n── todayStr (本地时区 YYYY-MM-DD) ──");
// ════════════════════════════════════════════════════════════
ok("todayStr() 形如 YYYY-MM-DD", /^\d{4}-\d{2}-\d{2}$/.test(todayStr()));
eq("todayStr(注入时间) 可控", /^\d{4}-\d{2}-\d{2}$/.test(todayStr(Date.parse("2026-05-27T12:00:00"))), true);

// ════════════════════════════════════════════════════════════
console.log("\n── normalizeLensUsage (跨日 rollover) ──");
// ════════════════════════════════════════════════════════════
eq("null → 空当天", normalizeLensUsage(null, T), { date: T, usedLensIds: [] });
eq("昨天的 usage → 重置今天", normalizeLensUsage({ date: YESTERDAY, usedLensIds: ["a:b","c:d"] }, T), { date: T, usedLensIds: [] });
eq("今天的 usage → 保留", normalizeLensUsage({ date: T, usedLensIds: ["a:b"] }, T), { date: T, usedLensIds: ["a:b"] });
eq("usedLensIds 非数组 → 兜底 []", normalizeLensUsage({ date: T, usedLensIds: "bad" }, T), { date: T, usedLensIds: [] });
// 返回副本, 改 result 不影响入参
var orig = { date: T, usedLensIds: ["a:b"] };
var norm = normalizeLensUsage(orig, T);
norm.usedLensIds.push("hacked");
ok("normalizeLensUsage 返回副本 (caller 改不影响原)", orig.usedLensIds.length === 1);

// ════════════════════════════════════════════════════════════
console.log("\n── lensKey ──");
// ════════════════════════════════════════════════════════════
eq("lensKey 拼接", lensKey("magna-carta-1215", "king-john"), "magna-carta-1215:king-john");

// ════════════════════════════════════════════════════════════
console.log("\n── getRemainingLenses + canUseLens (视角配额) ──");
// ════════════════════════════════════════════════════════════
eq("guest 初始剩余 1", getRemainingLenses(null, "guest", T), 1);
eq("free 初始剩余 3", getRemainingLenses(null, "free", T), 3);
ok("basic 无限", getRemainingLenses(null, "basic", T) === Infinity);
ok("pro 无限", getRemainingLenses(null, "pro", T) === Infinity);
eq("未知 tier 剩余 0 (fail-closed)", getRemainingLenses(null, "xyz", T), 0);

// guest 用 1 个
var gu = recordLensUsage(null, "magna-carta-1215", "king-john", T);
eq("guest 用 1 后剩余 0", getRemainingLenses(gu, "guest", T), 0);
ok("重进同 lens 仍 canUse (幂等)", canUseLens(gu, "guest", "magna-carta-1215", "king-john", T) === true);
ok("进新 lens canUse=false (超配额)", canUseLens(gu, "guest", "magna-carta-1215", "stephen-langton", T) === false);
ok("同一 usage 对 free 仍剩 2", getRemainingLenses(gu, "free", T) === 2);
ok("basic 永远 canUse (无限)", canUseLens(gu, "basic", "any", "lens", T) === true);

// ════════════════════════════════════════════════════════════
console.log("\n── recordLensUsage (幂等 + rollover) ──");
// ════════════════════════════════════════════════════════════
var r1 = recordLensUsage(null, "t1", "lensA", T);
eq("记 1 个", r1.usedLensIds, ["t1:lensA"]);
var r2 = recordLensUsage(r1, "t1", "lensA", T);
eq("重复记同 lens 不增 (幂等)", r2.usedLensIds, ["t1:lensA"]);
var r3 = recordLensUsage(r2, "t2", "lensB", T);
eq("记不同 lens 追加", r3.usedLensIds, ["t1:lensA", "t2:lensB"]);
// 跨日记录 → 自动 rollover
var rOld = { date: YESTERDAY, usedLensIds: ["old:lens"] };
var rNew = recordLensUsage(rOld, "t3", "lensC", T);
eq("跨日记录自动 rollover (旧的清掉)", rNew, { date: T, usedLensIds: ["t3:lensC"] });

// ════════════════════════════════════════════════════════════
console.log("\n── Sidekick 配额 (eventIds, 防 sync 双 +1 丢扣) ──");
// ════════════════════════════════════════════════════════════
eq("guest sidekick 剩余 5", getRemainingSidekick(null, "guest", T), 5);
eq("free sidekick 剩余 20", getRemainingSidekick(null, "free", T), 20);
ok("basic sidekick 无限", getRemainingSidekick(null, "basic", T) === Infinity);
var sk1 = recordSidekickEvent(null, "evt-uuid-1", T);
eq("记 1 个 event", sk1.eventIds, ["evt-uuid-1"]);
eq("记后 guest 剩余 4", getRemainingSidekick(sk1, "guest", T), 4);
var sk2 = recordSidekickEvent(sk1, "evt-uuid-1", T);
eq("重复 eventId 不增 (幂等)", sk2.eventIds, ["evt-uuid-1"]);
var sk3 = recordSidekickEvent(sk2, "evt-uuid-2", T);
eq("不同 eventId 追加", sk3.eventIds, ["evt-uuid-1", "evt-uuid-2"]);
ok("recordSidekickEvent 无 eventId 不动", recordSidekickEvent(sk3, null, T).eventIds.length === 2);
// canUseSidekick 边界
var skFull = { date: T, eventIds: ["1","2","3","4","5"] };
ok("guest 用满 5 → canUse false", canUseSidekick(skFull, "guest", T) === false);
ok("同样 5 个对 free 仍 canUse (剩 15)", canUseSidekick(skFull, "free", T) === true);
ok("basic 永远 canUseSidekick", canUseSidekick(skFull, "basic", T) === true);

// ════════════════════════════════════════════════════════════
console.log("\n── isValidQuotaDate (P1-1 Codex 实施审计) ──");
// ════════════════════════════════════════════════════════════
ok("合法 YYYY-MM-DD → true", isValidQuotaDate("2026-05-27") === true);
ok("undefined → false", isValidQuotaDate(undefined) === false);
ok("null → false", isValidQuotaDate(null) === false);
ok("空串 → false", isValidQuotaDate("") === false);
ok("非日期串 → false", isValidQuotaDate("bad") === false);
ok("数字 → false", isValidQuotaDate(20260527) === false);
ok("格式不符 (2026/05/27) → false", isValidQuotaDate("2026/05/27") === false);

// ════════════════════════════════════════════════════════════
console.log("\n── mergeLensUsage · 同日 union (借鉴 vocab unionReviewHistory) ──");
// ════════════════════════════════════════════════════════════
// 两设备同日各学不同 lens → union 不丢
var devA = { date: T, usedLensIds: ["t1:lensA", "t2:lensB"] };
var devB = { date: T, usedLensIds: ["t2:lensB", "t3:lensC"] };
eq("同日 union 去重",
   mergeLensUsage(devA, devB),
   { date: T, usedLensIds: ["t1:lensA", "t2:lensB", "t3:lensC"] });

// Sidekick eventIds 同日 union — 这是防 sync 双 +1 丢扣的核心
var skA = { date: T, eventIds: ["e1", "e2"] };
var skB = { date: T, eventIds: ["e2", "e3"] };
eq("Sidekick eventIds 同日 union (防丢扣)",
   mergeSidekickUsage(skA, skB),
   { date: T, eventIds: ["e1", "e2", "e3"] });

// P1-2: mergeLensUsage 只动 usedLensIds, 不会把 eventIds 混进来 (脏数据防御)
eq("mergeLensUsage 不混入 eventIds (P1-2 字段隔离)",
   mergeLensUsage({ date: T, usedLensIds: ["a:b"], eventIds: ["dirty"] }, { date: T, usedLensIds: ["c:d"] }),
   { date: T, usedLensIds: ["a:b", "c:d"] });

// ════════════════════════════════════════════════════════════
console.log("\n── merge · 跨日取新 ──");
// ════════════════════════════════════════════════════════════
var older = { date: YESTERDAY, usedLensIds: ["x:y", "z:w"] };
var newer = { date: T, usedLensIds: ["a:b"] };
eq("跨日: 取较新 date 全量 (local 旧)", mergeLensUsage(older, newer), newer);
eq("跨日: 取较新 date 全量 (local 新)", mergeLensUsage(newer, older), newer);

// ════════════════════════════════════════════════════════════
console.log("\n── merge · P1-1 非法/缺失 date 防御 (核心修复) ──");
// ════════════════════════════════════════════════════════════
var validUsage = { date: T, usedLensIds: ["valid:lens"] };
// local 合法, remote 缺 date → 必须取 local (不能因对端坏 date 丢自己的扣减)
eq("local 合法 + remote 缺 date → 取 local (不丢扣减)",
   mergeLensUsage(validUsage, { usedLensIds: ["ghost:lens"] }),
   validUsage);
// remote 合法, local 缺 date → 取 remote
eq("remote 合法 + local 缺 date → 取 remote",
   mergeLensUsage({ usedLensIds: ["ghost:lens"] }, validUsage),
   validUsage);
// 两端都非法 → 保守 union 不丢 (date 取 local 的, 即便它非法)
var bothBad = mergeLensUsage({ date: "bad", usedLensIds: ["a:b"] }, { date: undefined, usedLensIds: ["c:d"] });
ok("两端 date 非法 → union 不丢 (保守)",
   bothBad.usedLensIds.indexOf("a:b") >= 0 && bothBad.usedLensIds.indexOf("c:d") >= 0);
// local 合法 date + remote date 是较新但非法格式 → 取 local 合法端
eq("remote date 非法格式 (2026/05/28) → 不让它赢, 取 local 合法",
   mergeLensUsage({ date: T, usedLensIds: ["keep:me"] }, { date: "2026/05/28", usedLensIds: ["drop:me"] }),
   { date: T, usedLensIds: ["keep:me"] });

// ════════════════════════════════════════════════════════════
console.log("\n── merge · 边界 (null / 一端空) ──");
// ════════════════════════════════════════════════════════════
eq("local null → remote", mergeLensUsage(null, devA), devA);
eq("remote null → local", mergeLensUsage(devA, null), devA);
eq("两端 null → null", mergeLensUsage(null, null), null);
// 同日但一端无该字段数组
eq("同日一端无 usedLensIds → union 仍正确",
   mergeLensUsage({ date: T, usedLensIds: ["a:b"] }, { date: T }),
   { date: T, usedLensIds: ["a:b"] });

// ════════════════════════════════════════════════════════════
console.log("\n── 端到端: 多 tab 同日并发扣减后 merge 不丢 (P0-3 multi-tab) ──");
// ════════════════════════════════════════════════════════════
// tab A 和 tab B 同一秒各进一个 lens, 各自 record, 然后 sync merge
var base = { date: T, usedLensIds: ["shared:lens0"] };
var tabA = recordLensUsage(base, "topicA", "lensA", T);
var tabB = recordLensUsage(base, "topicB", "lensB", T);
var mergedTabs = mergeLensUsage(tabA, tabB);
eq("多 tab 同日并发 merge: 3 个 lens 全保留 (base + A + B)",
   mergedTabs.usedLensIds.sort(),
   ["shared:lens0", "topicA:lensA", "topicB:lensB"]);
ok("merge 后 free 用户剩余 = 3 - 3 = 0", getRemainingLenses(mergedTabs, "free", T) === 0);

// ════════════════════════════════════════════════════════════
console.log("\n── 端到端: 游客→注册当天 quota union 继承 (v1.2 §6) ──");
// ════════════════════════════════════════════════════════════
// 游客今天用了 1 视角 → 注册后 merge 云端(空)→ 已用的 1 个保留, free 剩 2
var guestUsage = recordLensUsage(null, "magna-carta-1215", "king-john", T);
var cloudEmpty = null; // 新注册云端无 history quota
var afterRegister = mergeLensUsage(guestUsage, cloudEmpty);
eq("游客已用的 1 视角注册后保留", afterRegister.usedLensIds, ["magna-carta-1215:king-john"]);
ok("注册后 free 剩余 2 (3 - 已用 1)", getRemainingLenses(afterRegister, "free", T) === 2);

// ════════════════════════════════════════════════════════════
console.log("\n══════════════════════════════════════════════════");
console.log("结果: " + pass + " 通过, " + fail + " 失败");
if (fail > 0) {
  console.log("❌ 单测有失败");
  process.exit(1);
} else {
  console.log("✅ 全部通过, daily-quota 决策核心已锁定");
  process.exit(0);
}
