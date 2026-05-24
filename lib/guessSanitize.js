/* ─── Know U. Learning — 猜词(guess)选项清洗（纯函数，便于回归测试） ───────────
 *
 * LLM 偶尔把"答案泄漏"标记或括号注释写进 guess 选项文本，例如：
 *   "abandon (this is correct)" / "give up（正确）" / "keep (answer)"
 * 两个危害：
 *   1) 泄题：用户一眼看到哪个是正解。
 *   2) 让"选项==目标词"的精确校验失效（带括号后 "abandon (...)" !== "abandon"），
 *      于是"选项就是目标词本身"的送分题也漏过校验直达用户（线上实测）。
 * 这里提供纯函数：检测泄漏标记 + 剥掉括号注释（选项本应是 1-3 个英文词，不含括号）。
 * ──────────────────────────────────────────────────────────────────────── */

// 括号内出现"正解/正确/答案"类字样 = 答案泄漏标记。
export var ANSWER_LEAK_RE = /[(（][^)）]*(correct|正确|right\s*answer|the\s*answer|答案|正解)[^)）]*[)）]/i;

// 选项文本是否含答案泄漏标记。
export var isAnswerLeak = function (text) {
  return ANSWER_LEAK_RE.test(String(text == null ? "" : text));
};

// 剥掉选项里的任何括号注释（中英文括号）+ 压缩空白。
// 选项本应是 1-3 个英文词、≤25 字符、无括号，故剥括号是安全的。
export var stripOptionParens = function (text) {
  return String(text == null ? "" : text)
    .replace(/[(（][^)）]*[)）]/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

// 清洗整组选项 { A,B,C,D }。返回 { options: 清洗后, leaked: 是否检测到答案泄漏 }。
// leaked=true 时调用方应判整题作废 → 触发重试（泄题题无意义）。
export var sanitizeGuessOptions = function (options) {
  if (!options || typeof options !== "object") return { options: options, leaked: false };
  var out = {};
  var leaked = false;
  Object.keys(options).forEach(function (k) {
    var orig = options[k];
    if (isAnswerLeak(orig)) leaked = true;
    var cleaned = stripOptionParens(orig);
    out[k] = cleaned || String(orig == null ? "" : orig).trim();
  });
  return { options: out, leaked: leaked };
};
