// 学习状态判定回归测试（Codex 第三批审计 P2 要求）
// 覆盖：新词猜错/跳过→learning；新词猜对→mastered；复习 forgot→error；
//       新词池排除 error/mastered/skipped/learning/uncertain；全学过时返回空（不回退全词表）。
import { decideNewWordStatus, selectUnlearnedWords, REVIEW_RESULT_STATUS } from '../lib/learnStatus.js';

var pass = 0, fail = 0;
var eq = function (name, got, want) {
  var ok = JSON.stringify(got) === JSON.stringify(want);
  if (ok) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name + " — got " + JSON.stringify(got) + " want " + JSON.stringify(want)); }
};

console.log("\n── decideNewWordStatus：新词完成学习的状态 ──");
eq("新词猜对 → mastered", decideNewWordStatus(undefined, true), "mastered");
eq("新词猜错 → learning（不再 error）", decideNewWordStatus(undefined, false), "learning");
eq("新词跳过猜词 → learning", decideNewWordStatus(undefined, null), "learning");
eq("unlearned 猜错 → learning", decideNewWordStatus("unlearned", false), "learning");
eq("skipped 猜对 → mastered（快筛跳过后深学）", decideNewWordStatus("skipped", true), "mastered");
eq("skipped 猜错 → learning", decideNewWordStatus("skipped", false), "learning");

console.log("\n── decideNewWordStatus：保护已有状态不被降级（返回 null）──");
eq("mastered 不被新词流程降级", decideNewWordStatus("mastered", false), null);
eq("learning 不变", decideNewWordStatus("learning", false), null);
eq("uncertain 不变", decideNewWordStatus("uncertain", true), null);
eq("error 不被新词流程改动（也根本不该进新词流程）", decideNewWordStatus("error", true), null);

console.log("\n── REVIEW_RESULT_STATUS：复习结果映射 ──");
eq("复习 remembered → mastered", REVIEW_RESULT_STATUS["remembered"], "mastered");
eq("复习 fuzzy → uncertain", REVIEW_RESULT_STATUS["fuzzy"], "uncertain");
eq("复习 forgot → error（error 的唯一合法来源）", REVIEW_RESULT_STATUS["forgot"], "error");

console.log("\n── selectUnlearnedWords：新词池只挑没学过的 ──");
eq("只留 unlearned + 未记录，排除 error/mastered/skipped/learning/uncertain",
  selectUnlearnedWords(
    ["a", "b", "c", "d", "e", "f", "g"],
    { a: "error", b: "mastered", c: "skipped", d: "unlearned", e: "learning", f: "uncertain" }
  ),
  ["d", "g"]); // d=unlearned, g=未记录
eq("全部学过（含 error）→ 返回空数组（不回退全词表）",
  selectUnlearnedWords(["a", "b"], { a: "mastered", b: "error" }),
  []);
eq("只有 error 词 → 仍返回空（error 不进新词池，归深度复习）",
  selectUnlearnedWords(["x", "y"], { x: "error", y: "error" }),
  []);
eq("空输入安全", selectUnlearnedWords(null, null), []);
eq("wordStatusMap 缺失时全算未学", selectUnlearnedWords(["a", "b"], null), ["a", "b"]);

console.log("\n──────────────────────────────");
console.log("通过 " + pass + " / " + (pass + fail));
if (fail > 0) { console.log("❌ 有用例失败"); process.exit(1); }
console.log("✅ 全部通过");
