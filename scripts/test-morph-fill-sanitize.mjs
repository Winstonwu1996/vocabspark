// morph_fill 题校验回归测试 — 线上 bug：scenario 含目标词 verbatim 导致闭眼选
// 运行：node scripts/test-morph-fill-sanitize.mjs
import { sceneContainsWord, checkMorphFill, checkDuplicateOptions } from '../lib/morphFillSanitize.js';

var pass = 0, fail = 0;
var eq = function (name, got, want) {
  var ok = JSON.stringify(got) === JSON.stringify(want);
  if (ok) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name + " — got " + JSON.stringify(got) + " want " + JSON.stringify(want)); }
};

console.log("\n── sceneContainsWord: 检测 scenario 是否含目标词 verbatim ──");
// ★ 线上 case 复现
eq("线上 case: scenario 含 'antitoxin' verbatim → true",
  sceneContainsWord("Willow 昨天和薛薛视频时，薛薛说她吃了过期寿司，Willow 说幸好你没遇到需要打 antitoxin 的情况。", "antitoxin"),
  true);
eq("大小写不敏感",
  sceneContainsWord("She needed Antitoxin urgently.", "antitoxin"),
  true);
eq("复数形式 antitoxins → 也命中",
  sceneContainsWord("Hospitals stock multiple antitoxins for emergencies.", "antitoxin"),
  true);
// 注：sanitizer 不处理"辅音 doubling"规则（run→running 的双 n）；这是有意保留的保守边界，
// 因为 LLM 泄题主要泄的是【目标词原形】，复杂屈折形式漏判可接受、误报反而更糟。
eq("辅音 doubling 形式 (run→running) 不命中是预期行为（保守）",
  sceneContainsWord("Willow was running late for class.", "run"),
  false);
eq("简单 +ing 形式 (debug→debuging 的字面，无 doubling) 命中",
  sceneContainsWord("She kept debuging the code", "debug"),
  true);

// 词边界：同根但不同词不该误判
eq("antitoxinate 不让 antitoxin 命中 (词边界)",
  sceneContainsWord("The lab tested antitoxinate compounds.", "antitoxin"),
  false);
eq("comprehensive 不让 comprehend 命中",
  sceneContainsWord("Her notes were comprehensive but unclear.", "comprehend"),
  false);

// 短词跳过
eq("目标词 < 3 char 跳过 (避免误伤)",
  sceneContainsWord("ok ok ok", "ok"),
  false);

// 不含
eq("scenario 不含目标词 → false",
  sceneContainsWord("She stayed up debugging her React project.", "comprehend"),
  false);

// 边界 / 容错
eq("空 scenario", sceneContainsWord("", "antitoxin"), false);
eq("空 word", sceneContainsWord("She needed it.", ""), false);
eq("null 安全", sceneContainsWord(null, "antitoxin"), false);

console.log("\n── checkMorphFill: 整 data 校验 ──");
// ★ 线上 case 复现 (antitoxin)
var leakedData = {
  type: "morph_fill",
  morph: "anti- (对抗) + -tox- (毒) + -in (名词后缀) → 抗毒素",
  scenario: "Willow 昨天和薛薛视频，薛薛说她吃了过期寿司肚子疼，Willow 说幸好没遇到需要打 antitoxin 的情况。",
  sentence: "To neutralize the snake venom, the scientist urgently needed an ___ that could bind to the poison molecules.",
  options: { A: "antitoxin", B: "antitoxic", C: "antitoxically", D: "antitoxinate" },
  answer: "A",
  explanation: "空前 an 提示需名词，A 是 noun 正解。"
};
eq("线上 case: scenario 含 antitoxin → leaked + 原因",
  checkMorphFill(leakedData, "antitoxin"),
  { leaked: true, reason: "scenario_contains_target_word" });

// 合规数据 (参考 prompt 里的 comprehend 示例)
var cleanData = {
  type: "morph_fill",
  morph: "com- (一起) + -prehend (抓住) → 全部抓住 = 理解",
  scenario: "Willow stayed up debugging her React project, but the bug kept reappearing.",
  sentence: "She just couldn't ___ why the same error popped up after every fix.",
  options: { A: "comprehend", B: "comprehensive", C: "comprehension", D: "comprehensible" },
  answer: "A",
  explanation: "couldn't 后接动词原形，A 是 verb。"
};
eq("合规题: scenario 不含 comprehend → 不 leaked",
  checkMorphFill(cleanData, "comprehend"),
  { leaked: false, reason: null });

// options 结构残缺
eq("options 缺 D → leaked",
  checkMorphFill({ type: "morph_fill", scenario: "She debugged.", options: { A: "x", B: "y", C: "z" }, answer: "A" }, "comprehend"),
  { leaked: true, reason: "options_missing_D" });
eq("options B 是空串 → leaked",
  checkMorphFill({ type: "morph_fill", scenario: "She debugged.", options: { A: "x", B: "  ", C: "z", D: "w" }, answer: "A" }, "comprehend"),
  { leaked: true, reason: "options_missing_B" });

// 不同 type 不动
eq("type != morph_fill → 不 leaked (这套校验只管 morph)",
  checkMorphFill({ type: "gradient_choice", scenario: "anything", options: {} }, "comprehend"),
  { leaked: false, reason: null });

// 边界
eq("null data 安全", checkMorphFill(null, "comprehend"), { leaked: false, reason: null });
eq("非对象 data 安全", checkMorphFill("string", "comprehend"), { leaked: false, reason: null });

// ── 选项重复检查（2026-08-02 hummock 实测回归）──
// 线上 bug：A/C/D 三个选项都是 "hummock"，学生选 C 与正解 A 同词却被判错。
console.log("\n── checkDuplicateOptions（选项重复 = 选对也判错）──");
eq("hummock 真实案例 A/C/D 同词 → 拦下", checkDuplicateOptions({A:"hummock",B:"hammock",C:"hummock",D:"hummock"}).bad, true);
eq("正常 4 选项 → 放行", checkDuplicateOptions({A:"hummock",B:"hammock",C:"hemlock",D:"haddock"}).bad, false);
eq("大小写不同视为重复", checkDuplicateOptions({A:"Hummock",B:"b",C:"hummock",D:"d"}).bad, true);
eq("首尾空格视为重复", checkDuplicateOptions({A:"hummock ",B:"b",C:" hummock",D:"d"}).bad, true);
eq("有效选项不足 2 个 → 拦下", checkDuplicateOptions({A:"hummock",B:"",C:null,D:"  "}).bad, true);
eq("options 缺失 → 拦下", checkDuplicateOptions(null).bad, true);
eq("3 个不重复选项 → 放行", checkDuplicateOptions({A:"a",B:"b",C:"c"}).bad, false);

console.log("\n──────────────────────────────");
console.log("通过 " + pass + " / " + (pass + fail));
if (fail > 0) { console.log("❌ 有用例失败"); process.exit(1); }
console.log("✅ 全部通过");
