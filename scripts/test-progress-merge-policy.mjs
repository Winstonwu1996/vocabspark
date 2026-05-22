/* 纯函数单测：lib/progressMergePolicy.js
   运行：node scripts/test-progress-merge-policy.mjs
   覆盖 SYNC_STABILIZATION_v1.md 回归清单的 merge policy 部分。 */

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

console.log("\n── entryRecency fallback 链 ──");
ok("updatedAt 优先", entryRecency({ updatedAt: "2026-05-21T10:00:00Z", nextReviewDate: "2026-05-01" }) === toTime("2026-05-21T10:00:00Z"));
ok("无 updatedAt → max(history.date)", entryRecency({ reviewHistory: [{ date: "2026-05-10T00:00:00Z" }, { date: "2026-05-20T00:00:00Z" }], nextReviewDate: "2026-05-01" }) === toTime("2026-05-20T00:00:00Z"));
ok("无 updatedAt/history → nextReviewDate", entryRecency({ nextReviewDate: "2026-05-15" }) === toTime("2026-05-15"));
ok("全空 → fallbackTime", entryRecency({}, 12345) === 12345);

console.log("\n── mergeReviewEntry recency-wins ──");
// 1. local newer same-level wins nextReviewDate
eq("1 local newer 同级 → nextReviewDate 取 local",
  mergeReviewEntry(
    { reviewLevel: 2, nextReviewDate: "2026-06-01", updatedAt: "2026-05-21T10:00:00Z" },
    { reviewLevel: 2, nextReviewDate: "2026-05-25", updatedAt: "2026-05-20T10:00:00Z" }
  ).nextReviewDate, "2026-06-01");
// 2. cloud newer same-level wins
eq("2 cloud newer 同级 → nextReviewDate 取 server",
  mergeReviewEntry(
    { reviewLevel: 2, nextReviewDate: "2026-06-01", updatedAt: "2026-05-19T10:00:00Z" },
    { reviewLevel: 2, nextReviewDate: "2026-05-25", updatedAt: "2026-05-21T10:00:00Z" }
  ).nextReviewDate, "2026-05-25");
// 3. forgot 降级：更新的低 level 必须赢 (不再 max level)
eq("3 forgot 降级 (local 新, level 0) → level 取 0 不被旧高 level 覆盖",
  mergeReviewEntry(
    { reviewLevel: 0, nextReviewDate: "2026-05-22", updatedAt: "2026-05-21T10:00:00Z" },
    { reviewLevel: 3, nextReviewDate: "2026-06-10", updatedAt: "2026-05-15T10:00:00Z" }
  ).reviewLevel, 0);
// 4. history union dedupe
eq("4 history 并集去重 (相同 date|mode|result 不重复)",
  mergeReviewEntry(
    { reviewLevel: 1, reviewHistory: [{ date: "2026-05-01T00:00:00Z", mode: "quick", result: "good" }] },
    { reviewLevel: 1, reviewHistory: [{ date: "2026-05-01T00:00:00Z", mode: "quick", result: "good" }, { date: "2026-05-10T00:00:00Z", mode: "deep", result: "fuzzy" }] }
  ).reviewHistory.length, 2);
// 5. 旧数据无 updatedAt → fallback 到 history date
eq("5 无 updatedAt → 用 history date 比 recency (local hist 更新 → level 1 赢)",
  mergeReviewEntry(
    { reviewLevel: 1, nextReviewDate: "2026-05-25", reviewHistory: [{ date: "2026-05-20T00:00:00Z", mode: "quick", result: "good" }] },
    { reviewLevel: 3, nextReviewDate: "2026-06-10", reviewHistory: [{ date: "2026-05-10T00:00:00Z", mode: "deep", result: "good" }] }
  ).reviewLevel, 1);
// 6. 混合日期格式参与 recency
eq("6 混合格式 (local 纯日期更晚) → local 赢",
  mergeReviewEntry(
    { reviewLevel: 1, nextReviewDate: "2026-05-25" },
    { reviewLevel: 2, nextReviewDate: "2026-05-20T07:00:00.000Z" }
  ).reviewLevel, 1);
// 7. NaN/缺失日期视为最旧
eq("7 local 日期非法 → server 赢 (NaN 不胜出)",
  mergeReviewEntry(
    { reviewLevel: 2, nextReviewDate: "garbage", reviewHistory: [] },
    { reviewLevel: 3, nextReviewDate: "2026-06-01", updatedAt: "2026-05-20T10:00:00Z" }
  ).reviewLevel, 3);
// 平局保守取高 level
eq("平局 (同 updatedAt) → 取较高 level",
  mergeReviewEntry(
    { reviewLevel: 1, updatedAt: "2026-05-20T10:00:00Z" },
    { reviewLevel: 3, updatedAt: "2026-05-20T10:00:00Z" }
  ).reviewLevel, 3);
// level 规整
eq("level 越界规整到 0..4", mergeReviewEntry({ reviewLevel: 99, updatedAt: "2026-05-21T00:00:00Z" }, { reviewLevel: 1, updatedAt: "2026-05-20T00:00:00Z" }).reviewLevel, 4);
// updatedAt 取 max
eq("updatedAt 合并取较新", mergeReviewEntry({ reviewLevel: 1, updatedAt: "2026-05-21T00:00:00Z" }, { reviewLevel: 1, updatedAt: "2026-05-19T00:00:00Z" }).updatedAt, "2026-05-21T00:00:00Z");
// 单边为空
ok("local 空 → 返回 server", mergeReviewEntry(null, { reviewLevel: 2 }).reviewLevel === 2);
ok("server 空 → 返回 local", mergeReviewEntry({ reviewLevel: 2 }, null).reviewLevel === 2);

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
// reviewWordData 词级合并：forgot 降级跨顶层合并仍生效
var mp2 = mergeProgress(
  { reviewWordData: { run: { reviewLevel: 0, nextReviewDate: "2026-05-22", updatedAt: "2026-05-21T10:00:00Z" } }, updatedAt: "2026-05-21T10:00:00Z" },
  { reviewWordData: { run: { reviewLevel: 3, nextReviewDate: "2026-06-10", updatedAt: "2026-05-15T10:00:00Z" } }, updatedAt: "2026-05-15T10:00:00Z" }
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

console.log("\n── canonicalize / dedupe (约束4: 保留首次原始大小写) ──");
eq("12 stable dedupe 保留首次出现顺序", dedupeWordsStable(["banana", "apple", "banana", "cherry"]), ["banana", "apple", "cherry"]);
eq("12 大小写不敏感去重 + 保留首次原形", dedupeWordsStable(["London", "london", "NASA", "nasa"]), ["London", "NASA"]);
eq("12 canonicalizeProgress dedupeWordInput", canonicalizeProgress({ wordInput: "apple\nApple\nbanana\napple" }, { dedupeWordInput: true }).wordInput, "apple\nbanana");
eq("12 默认不改写 wordInput (零行为变更)", canonicalizeProgress({ wordInput: "a\na\nb" }).wordInput, "a\na\nb");

console.log("\n── 补充边界：mergeReviewEntry 字段保留 ──");
eq("meaning 从有的一方保留 (winner 缺)",
  mergeReviewEntry(
    { reviewLevel: 1, updatedAt: "2026-05-21T00:00:00Z" },
    { reviewLevel: 1, meaning: "跑", updatedAt: "2026-05-19T00:00:00Z" }
  ).meaning, "跑");
eq("phonetic 从有的一方保留",
  mergeReviewEntry(
    { reviewLevel: 1, phonetic: "/rʌn/", updatedAt: "2026-05-19T00:00:00Z" },
    { reviewLevel: 1, updatedAt: "2026-05-21T00:00:00Z" }
  ).phonetic, "/rʌn/");
eq("firstLearnedAt 取较早",
  mergeReviewEntry(
    { reviewLevel: 1, firstLearnedAt: "2026-05-10T00:00:00Z", updatedAt: "2026-05-21T00:00:00Z" },
    { reviewLevel: 1, firstLearnedAt: "2026-05-01T00:00:00Z", updatedAt: "2026-05-19T00:00:00Z" }
  ).firstLearnedAt, "2026-05-01T00:00:00Z");

console.log("\n── 补充边界：mergeProgress 其他字段 ──");
var wsmLocalNewer = mergeProgress(
  { wordStatusMap: { a: "mastered", b: "learning" }, updatedAt: "2026-05-21T00:00:00Z" },
  { wordStatusMap: { a: "learning", c: "skipped" }, updatedAt: "2026-05-20T00:00:00Z" }
);
eq("wordStatusMap localNewer → local 字段赢 (a=mastered)", wsmLocalNewer.wordStatusMap.a, "mastered");
eq("wordStatusMap 并集保留 server 独有 (c)", wsmLocalNewer.wordStatusMap.c, "skipped");
var wsmServerNewer = mergeProgress(
  { wordStatusMap: { a: "learning" }, updatedAt: "2026-05-19T00:00:00Z" },
  { wordStatusMap: { a: "mastered" }, updatedAt: "2026-05-21T00:00:00Z" }
);
eq("wordStatusMap serverNewer → server 字段赢 (a=mastered)", wsmServerNewer.wordStatusMap.a, "mastered");
// wordInput 合并的真实行为 (syncMerge 原逻辑, 第一批原样保留):
//   长度差 < 50 字符 → 用 newer；长度差 ≥ 50 → 取较长 (append-only 假设)。
// 注: "较新的短串覆盖较长串" (差<50时) 是已知争议点, 留给 Codex / 后续批次评估。
eq("wordInput 长度差<50 → 用 newer (即使较短)",
  mergeProgress(
    { wordInput: "a\nb\nc\nd\ne\nf\ng\nh", updatedAt: "2026-05-19T00:00:00Z" },
    { wordInput: "a\nb", updatedAt: "2026-05-21T00:00:00Z" }
  ).wordInput, "a\nb");
eq("wordInput 长度差≥50 → 取较长 (无视 newer)",
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

console.log("\n── 补充边界：applyProgressGuards 异常输入 ──");
ok("incoming 非对象 → 整体取云端", (function () {
  var g = applyProgressGuards("not-an-object", { wordInput: "a" });
  return g.rejected.indexOf("_entire_payload_invalid") >= 0 && g.safe.wordInput === "a";
})());
ok("incoming 字段更多 → 全放行 (只增不减不拦增加)", (function () {
  var g = applyProgressGuards({ reviewWordData: { a: {}, b: {} }, wordStatusMap: { a: 1, b: 1 } }, { reviewWordData: { a: {} }, wordStatusMap: { a: 1 } });
  return g.rejected.length === 0;
})());

console.log("\n── 补充边界：unionReviewHistory 排序 ──");
eq("history 按 date 升序",
  unionReviewHistory(
    [{ date: "2026-05-20T00:00:00Z", mode: "quick", result: "good" }],
    [{ date: "2026-05-10T00:00:00Z", mode: "deep", result: "fuzzy" }]
  ).map(function (h) { return h.date; }),
  ["2026-05-10T00:00:00Z", "2026-05-20T00:00:00Z"]);

console.log("\n──────────────────────────────");
console.log("通过 " + pass + " / " + (pass + fail));
if (fail > 0) { console.log("❌ 有失败用例"); process.exit(1); }
console.log("✅ 全部通过");
