// guess 选项清洗回归测试（线上 bug：选项含 "(this is correct)" 泄题 + 选项==目标词漏校验）
// 运行：node scripts/test-guess-sanitize.mjs
import { isAnswerLeak, stripOptionParens, sanitizeGuessOptions } from '../lib/guessSanitize.js';

var pass = 0, fail = 0;
var eq = function (name, got, want) {
  var ok = JSON.stringify(got) === JSON.stringify(want);
  if (ok) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name + " — got " + JSON.stringify(got) + " want " + JSON.stringify(want)); }
};

console.log("\n── isAnswerLeak：检测答案泄漏标记 ──");
eq("(this is correct) → 泄漏", isAnswerLeak("abandon (this is correct)"), true);
eq("(correct) → 泄漏", isAnswerLeak("give up (correct)"), true);
eq("中文（正确）→ 泄漏", isAnswerLeak("放弃（正确）"), true);
eq("(answer) → 泄漏", isAnswerLeak("keep (the answer)"), true);
eq("（正解）→ 泄漏", isAnswerLeak("give up（正解）"), true);
eq("正常选项 → 不泄漏", isAnswerLeak("give up"), false);
eq("带普通括号但非答案标记 → 不泄漏", isAnswerLeak("run (verb)"), false);
eq("空/null 安全", isAnswerLeak(null), false);

console.log("\n── stripOptionParens：剥掉括号注释 ──");
eq("剥掉 (this is correct)", stripOptionParens("abandon (this is correct)"), "abandon");
eq("剥掉中文括号", stripOptionParens("放弃（正确）"), "放弃");
eq("剥掉 (verb) 注释", stripOptionParens("run (verb)"), "run");
eq("无括号原样", stripOptionParens("give up"), "give up");
eq("压缩多余空白", stripOptionParens("give   up  (correct) "), "give up");
eq("空安全", stripOptionParens(null), "");

console.log("\n── sanitizeGuessOptions：整组清洗 + 泄漏标记 ──");
// ★ 线上 bug 复现：选项 A 是目标词本身 + "(this is correct)"
var r1 = sanitizeGuessOptions({ A: "abandon (this is correct)", B: "dislike", C: "absorb", D: "keep" });
eq("复现: A 清洗成 'abandon'（去掉泄题尾巴）", r1.options.A, "abandon");
eq("复现: 标记 leaked=true（整题作废重试）", r1.leaked, true);
eq("复现: 其它选项不动", [r1.options.B, r1.options.C, r1.options.D], ["dislike", "absorb", "keep"]);
// 清洗后 A==目标词 → 交给下游"选项==目标词"校验会再判作废（双重覆盖）
eq("清洗后 A 暴露为目标词本身（下游精确校验可捕获）", r1.options.A === "abandon", true);

var r2 = sanitizeGuessOptions({ A: "give up", B: "dislike", C: "absorb", D: "keep" });
eq("正常题: leaked=false", r2.leaked, false);
eq("正常题: 选项不变", r2.options, { A: "give up", B: "dislike", C: "absorb", D: "keep" });

eq("非对象输入安全", sanitizeGuessOptions(null), { options: null, leaked: false });

console.log("\n──────────────────────────────");
console.log("通过 " + pass + " / " + (pass + fail));
if (fail > 0) { console.log("❌ 有用例失败"); process.exit(1); }
console.log("✅ 全部通过");
