// 手填中文回忆测试纯逻辑回归 — 运行：node scripts/test-typed-recall.mjs
import { hasUsableMeaning, shouldRequireTypedRecall, normalizeTypedAnswer, hasTypedAnswer } from '../lib/typedRecall.js';

var pass = 0, fail = 0;
var eq = function (name, got, want) {
  var ok = JSON.stringify(got) === JSON.stringify(want);
  if (ok) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name + " — got " + JSON.stringify(got) + " want " + JSON.stringify(want)); }
};

console.log("\n── hasUsableMeaning ──");
eq("真释义（含中文）→ true", hasUsableMeaning("抗毒素"), true);
eq("含词性的真释义 → true", hasUsableMeaning("n. 抗毒素，解毒剂"), true);
eq("占位'将随学习自动补全' → false", hasUsableMeaning("（释义将随学习自动补全）"), false);
eq("占位'加载失败' → false", hasUsableMeaning("释义加载失败，请凭印象判断"), false);
eq("占位'加载中' → false", hasUsableMeaning("释义加载中…"), false);
eq("纯英文（无中文）→ false", hasUsableMeaning("antitoxin"), false);
eq("空串 → false", hasUsableMeaning(""), false);
eq("纯空白 → false", hasUsableMeaning("   "), false);
eq("null → false", hasUsableMeaning(null), false);
eq("首尾空白的真释义 → true", hasUsableMeaning("  抗毒素  "), true);

console.log("\n── shouldRequireTypedRecall ──");
eq("有可用释义 → 要手填", shouldRequireTypedRecall({ word: "antitoxin", meaning: "抗毒素" }), true);
eq("无释义（占位）→ 回退闪卡", shouldRequireTypedRecall({ word: "antitoxin", meaning: "（释义将随学习自动补全）" }), false);
eq("纯英文释义 → 回退闪卡", shouldRequireTypedRecall({ word: "x", meaning: "some english" }), false);
eq("缺 meaning 字段 → 回退闪卡", shouldRequireTypedRecall({ word: "x" }), false);
eq("null item → false", shouldRequireTypedRecall(null), false);
eq("非对象 → false", shouldRequireTypedRecall("x"), false);

console.log("\n── normalizeTypedAnswer / hasTypedAnswer ──");
eq("去首尾空白", normalizeTypedAnswer("  抗毒素  "), "抗毒素");
eq("null → 空串", normalizeTypedAnswer(null), "");
eq("数字也转字符串", normalizeTypedAnswer(123), "123");
eq("有作答 → true", hasTypedAnswer("抗毒素"), true);
eq("纯空白 → 无作答", hasTypedAnswer("   "), false);
eq("空 → 无作答", hasTypedAnswer(""), false);
eq("null → 无作答", hasTypedAnswer(null), false);

console.log("\n──────────────────────────────");
console.log("通过 " + pass + " / " + (pass + fail));
if (fail > 0) { console.log("❌ 有用例失败"); process.exit(1); }
console.log("✅ 全部通过");
