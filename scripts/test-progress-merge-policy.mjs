/* 纯函数单测：lib/progressMergePolicy.js
   运行：node scripts/test-progress-merge-policy.mjs
   覆盖 SYNC_STABILIZATION_v1.md 回归清单 + Codex 第一批审计 P1 修复。

   注意 (Codex P1)：SRS recency 依据是 srsUpdatedAt（真实复习事件时间），
   不是通用 updatedAt（meaning/phonetic 懒加载也会刷它）。测试用 srsUpdatedAt 设置复习新旧。 */

import {
  toTime,
  entryRecency,
  mergeReviewEntry,
  mergeProgress,
  validateProgressMerge,
  applyProgressGuards,
  canonicalizeProgress,
  dedupeWordsStable,
  unionReviewHistory,
  detectSyncGate,
} from "../lib/progressMergePolicy.js";

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

console.log("\n── toTime / 日期规范化 (约束6) ──");
ok("toTime(undefined)=0", toTime(undefined) === 0);
ok("toTime('garbage')=0", toTime("garbage") === 0);
ok("纯日期可解析", toTime("2026-05-21") > 0);
ok("完整 ISO 可解析", toTime("2026-05-21T07:00:00.000Z") > 0);
ok("混合格式同向可比 (纯5-25 > ISO5-20)", toTime("2026-05-25") > toTime("2026-05-20T07:00:00.000Z"));
ok("跨日比较正确 (ISO5-22 > 纯5-21)", toTime("2026-05-22T07:00:00.000Z") > toTime("2026-05-21"));

console.log("\n── entryRecency fallback 链 (srsUpdatedAt 优先, 不看 updatedAt) ──");
ok("srsUpdatedAt 优先", entryRecency({ srsUpdatedAt: "2026-05-21T10:00:00Z", nextReviewDate: "2026-05-01" }) === toTime("2026-05-21T10:00:00Z"));
ok("无 srsUpdatedAt → max(history.date)", entryRecency({ reviewHistory: [{ date: "2026-05-10T00:00:00Z" }, { date: "2026-05-20T00:00:00Z" }], nextReviewDate: "2026-05-01" }) === toTime("2026-05-20T00:00:00Z"));
ok("无 srs/history → fallbackTime (不用 nextReviewDate, 它是未来计划非活动时间)", entryRecency({ nextReviewDate: "2026-05-15" }, 999) === 999);
ok("nextReviewDate 完全不参与 recency (未来日期不胜出)", entryRecency({ nextReviewDate: "2099-01-01" }, 5) === 5);
ok("全空 → fallbackTime", entryRecency({}, 12345) === 12345);
// Codex P1 核心：通用 updatedAt 不参与 SRS recency
ok("通用 updatedAt 被忽略 (只补 meaning 刷的 updatedAt 不抢 recency)",
  entryRecency({ updatedAt: "2026-12-31T00:00:00Z", reviewHistory: [{ date: "2026-05-10T00:00:00Z" }] }) === toTime("2026-05-10T00:00:00Z"));
// Codex P2: max(srsUpdatedAt, history) — 旧 srs + 更新 history → 用 history
ok("P2 旧 srs 5-10 + 新 history 5-20 → 取 5-20",
  entryRecency({ srsUpdatedAt: "2026-05-10T00:00:00Z", reviewHistory: [{ date: "2026-05-20T00:00:00Z" }] }) === toTime("2026-05-20T00:00:00Z"));
ok("P2 新 srs 5-25 + 旧 history 5-20 → 取 5-25",
  entryRecency({ srsUpdatedAt: "2026-05-25T00:00:00Z", reviewHistory: [{ date: "2026-05-20T00:00:00Z" }] }) === toTime("2026-05-25T00:00:00Z"));

console.log("\n── mergeReviewEntry recency-wins (用 srsUpdatedAt) ──");
eq("1 local newer 同级 → nextReviewDate 取 local",
  mergeReviewEntry(
    { reviewLevel: 2, nextReviewDate: "2026-06-01", srsUpdatedAt: "2026-05-21T10:00:00Z" },
    { reviewLevel: 2, nextReviewDate: "2026-05-25", srsUpdatedAt: "2026-05-20T10:00:00Z" }
  ).nextReviewDate, "2026-06-01");
eq("2 cloud newer 同级 → nextReviewDate 取 server",
  mergeReviewEntry(
    { reviewLevel: 2, nextReviewDate: "2026-06-01", srsUpdatedAt: "2026-05-19T10:00:00Z" },
    { reviewLevel: 2, nextReviewDate: "2026-05-25", srsUpdatedAt: "2026-05-21T10:00:00Z" }
  ).nextReviewDate, "2026-05-25");
eq("3 forgot 降级 (local 新, level 0) → level 取 0",
  mergeReviewEntry(
    { reviewLevel: 0, nextReviewDate: "2026-05-22", srsUpdatedAt: "2026-05-21T10:00:00Z" },
    { reviewLevel: 3, nextReviewDate: "2026-06-10", srsUpdatedAt: "2026-05-15T10:00:00Z" }
  ).reviewLevel, 0);
eq("4 history 并集去重",
  mergeReviewEntry(
    { reviewLevel: 1, reviewHistory: [{ date: "2026-05-01T00:00:00Z", mode: "quick", result: "good" }] },
    { reviewLevel: 1, reviewHistory: [{ date: "2026-05-01T00:00:00Z", mode: "quick", result: "good" }, { date: "2026-05-10T00:00:00Z", mode: "deep", result: "fuzzy" }] }
  ).reviewHistory.length, 2);
eq("5 无 srsUpdatedAt → 用 history date 比 recency (local hist 更新 → level 1 赢)",
  mergeReviewEntry(
    { reviewLevel: 1, nextReviewDate: "2026-05-25", reviewHistory: [{ date: "2026-05-20T00:00:00Z", mode: "quick", result: "good" }] },
    { reviewLevel: 3, nextReviewDate: "2026-06-10", reviewHistory: [{ date: "2026-05-10T00:00:00Z", mode: "deep", result: "good" }] }
  ).reviewLevel, 1);
eq("6 混合格式 srsUpdatedAt (local 纯日期更晚) → local 赢",
  mergeReviewEntry(
    { reviewLevel: 1, srsUpdatedAt: "2026-05-25" },
    { reviewLevel: 2, srsUpdatedAt: "2026-05-20T07:00:00.000Z" }
  ).reviewLevel, 1);
eq("7 local 日期非法 → server 赢",
  mergeReviewEntry(
    { reviewLevel: 2, nextReviewDate: "garbage", reviewHistory: [] },
    { reviewLevel: 3, nextReviewDate: "2026-06-01", srsUpdatedAt: "2026-05-20T10:00:00Z" }
  ).reviewLevel, 3);
eq("平局 (同 srsUpdatedAt) → 取较高 level",
  mergeReviewEntry(
    { reviewLevel: 1, srsUpdatedAt: "2026-05-20T10:00:00Z" },
    { reviewLevel: 3, srsUpdatedAt: "2026-05-20T10:00:00Z" }
  ).reviewLevel, 3);
eq("level 越界规整到 0..4", mergeReviewEntry({ reviewLevel: 99, srsUpdatedAt: "2026-05-21T00:00:00Z" }, { reviewLevel: 1, srsUpdatedAt: "2026-05-20T00:00:00Z" }).reviewLevel, 4);
ok("local 空 → 返回 server", mergeReviewEntry(null, { reviewLevel: 2 }).reviewLevel === 2);
ok("server 空 → 返回 local", mergeReviewEntry({ reviewLevel: 2 }, null).reviewLevel === 2);

console.log("\n── Codex P1: meaning-only 不得覆盖真实复习 ──");
var p1 = mergeReviewEntry(
  { reviewLevel: 0, nextReviewDate: "2026-05-23", srsUpdatedAt: "2026-05-15T10:00:00Z", updatedAt: "2026-05-22T10:00:00Z", meaning: "新补的释义" },
  { reviewLevel: 3, nextReviewDate: "2026-06-10", srsUpdatedAt: "2026-05-20T10:00:00Z", reviewHistory: [{ date: "2026-05-20T10:00:00Z", mode: "deep", result: "good" }] }
);
eq("P1 meaning-only 旧 SRS 不覆盖真实复习 → level 3", p1.reviewLevel, 3);
eq("P1 nextReviewDate 取 server (真实复习)", p1.nextReviewDate, "2026-06-10");

console.log("\n── Codex P1: srsUpdatedAt 只取 winner, 不被 loser 掩盖 ──");
var p3 = mergeReviewEntry(
  { reviewLevel: 1, reviewHistory: [{ date: "2026-05-20T00:00:00Z", mode: "quick", result: "good" }] },
  { reviewLevel: 3, srsUpdatedAt: "2026-05-10T00:00:00Z" }
);
ok("P1 winner(local) 赢 → level 1", p3.reviewLevel === 1);
ok("P1 merged.srsUpdatedAt 不是 loser 的 5-10", toTime(p3.srsUpdatedAt) !== toTime("2026-05-10T00:00:00Z"));
ok("P1 merged 重算 recency = winner history 5-20 (未被旧 srs 掩盖)",
  entryRecency(p3) === toTime("2026-05-20T00:00:00Z"));
eq("P1 winner 有 srsUpdatedAt → merged 取 winner",
  mergeReviewEntry(
    { reviewLevel: 2, srsUpdatedAt: "2026-05-21T00:00:00Z" },
    { reviewLevel: 1, srsUpdatedAt: "2026-05-10T00:00:00Z" }
  ).srsUpdatedAt, "2026-05-21T00:00:00Z");

console.log("\n── mergeProgress 顶层 ──");
var mp = mergeProgress(
  { stats: { xp: 100, total: 50, correct: 40, bestStreak: 5 }, pet: { totalFed: 5, unlocked: ["a"] }, updatedAt: "2026-05-21T10:00:00Z" },
  { stats: { xp: 150, total: 40, correct: 45, bestStreak: 3 }, pet: { totalFed: 3, unlocked: ["b"] }, updatedAt: "2026-05-20T10:00:00Z" }
);
eq("8 pet.totalFed 取 max", mp.pet.totalFed, 5);
eq("8 pet.unlocked 并集", mp.pet.unlocked.sort(), ["a", "b"]);
eq("9 stats.xp 取 max", mp.stats.xp, 150);
eq("9 stats.total 取 max", mp.stats.total, 50);
eq("9 stats.correct 取 max", mp.stats.correct, 45);
var mp2 = mergeProgress(
  { reviewWordData: { run: { reviewLevel: 0, nextReviewDate: "2026-05-22", srsUpdatedAt: "2026-05-21T10:00:00Z" } }, updatedAt: "2026-05-21T10:00:00Z" },
  { reviewWordData: { run: { reviewLevel: 3, nextReviewDate: "2026-06-10", srsUpdatedAt: "2026-05-15T10:00:00Z" } }, updatedAt: "2026-05-15T10:00:00Z" }
);
eq("reviewWordData 词级 forgot 降级生效", mp2.reviewWordData.run.reviewLevel, 0);
ok("local/server 单边空", mergeProgress(null, { stats: { xp: 1 } }).stats.xp === 1);

console.log("\n── validateProgressMerge ──");
ok("11 wsm 变少 → false", validateProgressMerge({ wordStatusMap: { a: 1 } }, { wordStatusMap: { a: 1, b: 1 } }) === false);
ok("11 rwd 变少 → false", validateProgressMerge({ reviewWordData: {} }, { reviewWordData: { a: {} } }) === false);
ok("11 xp 回退 → false", validateProgressMerge({ stats: { xp: 10 }, wordStatusMap: {}, reviewWordData: {} }, { stats: { xp: 20 } }) === false);
ok("11 健康 merged → true", validateProgressMerge({ wordStatusMap: { a: 1, b: 1 }, reviewWordData: { a: {} }, stats: { xp: 20 } }, { wordStatusMap: { a: 1 }, reviewWordData: {}, stats: { xp: 10 } }) === true);

console.log("\n── applyProgressGuards (服务端守卫) ──");
var g1 = applyProgressGuards({ reviewWordData: { a: {} }, wordStatusMap: { a: 1 } }, { reviewWordData: { a: {}, b: {} }, wordStatusMap: { a: 1, b: 1 } });
ok("10 rwd 变少被拒 + 保留云端", g1.rejected.indexOf("reviewWordData") >= 0 && Object.keys(g1.safe.reviewWordData).length === 2);
ok("10 wsm 变少被拒", g1.rejected.indexOf("wordStatusMap") >= 0);
var g2 = applyProgressGuards({ wordInput: "a\nb" }, { wordInput: "a\nb\nc\nd" });
ok("10 wordInput 变小 + 无 intent → 被拒", g2.rejected.indexOf("wordInput") >= 0 && g2.safe.wordInput === "a\nb\nc\nd");
var g3 = applyProgressGuards({ wordInput: "a\nb" }, { wordInput: "a\nb\nc\nd" }, "user_edit_wordInput");
ok("10 wordInput 变小 + 合法 intent → 放行", g3.rejected.indexOf("wordInput") < 0 && g3.safe.wordInput === "a\nb");
var g4 = applyProgressGuards({ pet: { totalFed: 1, unlocked: [] }, stats: { xp: 5 } }, { pet: { totalFed: 9, unlocked: ["x"] }, stats: { xp: 99 } });
ok("10 pet 回退被拒", g4.rejected.indexOf("pet") >= 0 && g4.safe.pet.totalFed === 9);
ok("10 stats 回退被调整", g4.rejected.indexOf("stats(adjusted)") >= 0 && g4.safe.stats.xp === 99);
ok("10 无云端 → 全放行", applyProgressGuards({ wordInput: "a" }, null).rejected.length === 0);
ok("incoming 非对象 → 整体取云端", (function () {
  var g = applyProgressGuards("not-an-object", { wordInput: "a" });
  return g.rejected.indexOf("_entire_payload_invalid") >= 0 && g.safe.wordInput === "a";
})());
ok("incoming 字段更多 → 全放行", (function () {
  var g = applyProgressGuards({ reviewWordData: { a: {}, b: {} }, wordStatusMap: { a: 1, b: 1 } }, { reviewWordData: { a: {} }, wordStatusMap: { a: 1 } });
  return g.rejected.length === 0;
})());
// wordInput 守卫按 distinct 词数 (自动去重)：纯去重放行, 真删词拦
ok("wordInput 纯去重 (distinct 不变, length 短) → 放行 + 取去重版", (function () {
  var g = applyProgressGuards({ wordInput: "a\nb" }, { wordInput: "a\na\nb\nb" });
  return g.rejected.indexOf("wordInput") < 0 && g.safe.wordInput === "a\nb";
})());
ok("wordInput 真删词 (distinct 减少) + 无 intent → 被拒", (function () {
  var g = applyProgressGuards({ wordInput: "a" }, { wordInput: "a\nb\nc" });
  return g.rejected.indexOf("wordInput") >= 0 && g.safe.wordInput === "a\nb\nc";
})());
ok("wordInput 真删词 + 合法 intent → 放行", (function () {
  var g = applyProgressGuards({ wordInput: "a" }, { wordInput: "a\nb\nc" }, "user_edit_wordInput");
  return g.rejected.indexOf("wordInput") < 0 && g.safe.wordInput === "a";
})());

console.log("\n── canonicalize / dedupe (约束4) ──");
eq("12 stable dedupe 保留首次出现顺序", dedupeWordsStable(["banana", "apple", "banana", "cherry"]), ["banana", "apple", "cherry"]);
eq("12 大小写不敏感去重 + 保留首次原形", dedupeWordsStable(["London", "london", "NASA", "nasa"]), ["London", "NASA"]);
eq("12 canonicalizeProgress dedupeWordInput", canonicalizeProgress({ wordInput: "apple\nApple\nbanana\napple" }, { dedupeWordInput: true }).wordInput, "apple\nbanana");
eq("12 默认不改写 wordInput", canonicalizeProgress({ wordInput: "a\na\nb" }).wordInput, "a\na\nb");

console.log("\n── 补充边界：mergeReviewEntry 字段保留 ──");
eq("meaning 从有的一方保留 (winner 缺)",
  mergeReviewEntry(
    { reviewLevel: 1, srsUpdatedAt: "2026-05-21T00:00:00Z" },
    { reviewLevel: 1, meaning: "跑", srsUpdatedAt: "2026-05-19T00:00:00Z" }
  ).meaning, "跑");
eq("phonetic 从有的一方保留",
  mergeReviewEntry(
    { reviewLevel: 1, phonetic: "/rʌn/", srsUpdatedAt: "2026-05-19T00:00:00Z" },
    { reviewLevel: 1, srsUpdatedAt: "2026-05-21T00:00:00Z" }
  ).phonetic, "/rʌn/");
eq("firstLearnedAt 取较早",
  mergeReviewEntry(
    { reviewLevel: 1, firstLearnedAt: "2026-05-10T00:00:00Z", srsUpdatedAt: "2026-05-21T00:00:00Z" },
    { reviewLevel: 1, firstLearnedAt: "2026-05-01T00:00:00Z", srsUpdatedAt: "2026-05-19T00:00:00Z" }
  ).firstLearnedAt, "2026-05-01T00:00:00Z");

console.log("\n── 补充边界：mergeProgress 其他字段 ──");
var wsmLocalNewer = mergeProgress(
  { wordStatusMap: { a: "mastered", b: "learning" }, updatedAt: "2026-05-21T00:00:00Z" },
  { wordStatusMap: { a: "learning", c: "skipped" }, updatedAt: "2026-05-20T00:00:00Z" }
);
eq("wordStatusMap localNewer → local 字段赢", wsmLocalNewer.wordStatusMap.a, "mastered");
eq("wordStatusMap 并集保留 server 独有", wsmLocalNewer.wordStatusMap.c, "skipped");
var wsmServerNewer = mergeProgress(
  { wordStatusMap: { a: "learning" }, updatedAt: "2026-05-19T00:00:00Z" },
  { wordStatusMap: { a: "mastered" }, updatedAt: "2026-05-21T00:00:00Z" }
);
eq("wordStatusMap serverNewer → server 字段赢", wsmServerNewer.wordStatusMap.a, "mastered");
eq("wordInput 长度差<50 → 用 newer (即使较短)",
  mergeProgress(
    { wordInput: "a\nb\nc\nd\ne\nf\ng\nh", updatedAt: "2026-05-19T00:00:00Z" },
    { wordInput: "a\nb", updatedAt: "2026-05-21T00:00:00Z" }
  ).wordInput, "a\nb");
eq("wordInput 长度差≥50 → 取较长",
  mergeProgress(
    { wordInput: Array.from({ length: 30 }, function (_, i) { return "word" + i; }).join("\n"), updatedAt: "2026-05-19T00:00:00Z" },
    { wordInput: "a\nb", updatedAt: "2026-05-21T00:00:00Z" }
  ).wordInput.split("\n").length, 30);
eq("session 同清单取 idx 较大",
  mergeProgress(
    { session: { wordList: ["a", "b", "c"], idx: 2 }, updatedAt: "2026-05-19T00:00:00Z" },
    { session: { wordList: ["a", "b", "c"], idx: 1 }, updatedAt: "2026-05-21T00:00:00Z" }
  ).session.idx, 2);
eq("session 不同清单取 newer",
  mergeProgress(
    { session: { wordList: ["x"], idx: 0 }, updatedAt: "2026-05-21T00:00:00Z" },
    { session: { wordList: ["y", "z"], idx: 1 }, updatedAt: "2026-05-20T00:00:00Z" }
  ).session.wordList, ["x"]);
eq("targetDate 取较新",
  mergeProgress(
    { targetDate: "2026-07-01", updatedAt: "2026-05-19T00:00:00Z" },
    { targetDate: "2026-06-01", updatedAt: "2026-05-21T00:00:00Z" }
  ).targetDate, "2026-07-01");
eq("completedWords 并集去重",
  mergeProgress(
    { completedWords: ["a", "b"], updatedAt: "2026-05-21T00:00:00Z" },
    { completedWords: ["b", "c"], updatedAt: "2026-05-20T00:00:00Z" }
  ).completedWords.sort(), ["a", "b", "c"]);

console.log("\n── unionReviewHistory 排序 ──");
eq("history 按 date 升序",
  unionReviewHistory(
    [{ date: "2026-05-20T00:00:00Z", mode: "quick", result: "good" }],
    [{ date: "2026-05-10T00:00:00Z", mode: "deep", result: "fuzzy" }]
  ).map(function (h) { return h.date; }),
  ["2026-05-10T00:00:00Z", "2026-05-20T00:00:00Z"]);

console.log("\n── detectSyncGate 闸门判定 (第二批) ──");
ok("正常数据 → 不拦", !detectSyncGate({ wordStatusMap: { a: 1, b: 1 }, reviewWordData: { a: {}, b: {} }, pet: { totalFed: 5 }, stats: { total: 10 } }).blocked);
ok("rwd << wsm (wsm>20) → 拦 reviewWordData_too_small", (function () {
  var wsm = {}; for (var i = 0; i < 30; i++) wsm["w" + i] = 1;
  var g = detectSyncGate({ wordStatusMap: wsm, reviewWordData: { a: {} }, pet: { totalFed: 5 } });
  return g.blocked && g.reason === "reviewWordData_too_small";
})());
ok("wsm<=20 → 不拦 (新用户不误伤)", !detectSyncGate({ wordStatusMap: { a: 1 }, reviewWordData: {} }).blocked);
ok("pet default + stats.total>50 → 拦 pet_looks_default", (function () {
  var g = detectSyncGate({ pet: { totalFed: 0, unlocked: [] }, stats: { total: 100 } });
  return g.blocked && g.reason === "pet_looks_default";
})());
ok("pet default + stats.total<=50 → 不拦", !detectSyncGate({ pet: { totalFed: 0, unlocked: [] }, stats: { total: 10 } }).blocked);
ok("pet 正常 → 不拦", !detectSyncGate({ pet: { totalFed: 9, unlocked: ["x"] }, stats: { total: 100 } }).blocked);
ok("null → 不拦", !detectSyncGate(null).blocked);

console.log("\n──────────────────────────────");
console.log("通过 " + pass + " / " + (pass + fail));
if (fail > 0) { console.log("❌ 有失败用例"); process.exit(1); }
console.log("✅ 全部通过");
