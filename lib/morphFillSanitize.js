/* ─── Know U. Learning — 词根填空（morph_fill）题校验（纯函数，便于回归测试） ───
 *
 * 线上实测 bug：buildMorphFillPrompt 生成的题，scenario 把目标词的英文 verbatim
 * 或中文翻译写进去（如 antitoxin → scenario "Willow ... 打 antitoxin"），加上
 * morph 卡片在题前剧透"-in 是名词后缀"，学生看到选项 A=antitoxin 闭眼选。
 *
 * 客户端兜底：在 LLM 返回的 morph_fill data 上跑一遍校验，命中泄题就标 _invalidOptions
 * → 触发上层重试（与 guess_sanitize 同一套退路）。Prompt + 渲染顺序也已修，本校验
 * 是第三道防线。
 *
 * ──────────────────────────────────────────────────────────────────────── */

/* 简易 word-boundary 检查：在文本中找目标词 verbatim（大小写不敏感），
 * 但前后必须不是字母（避免 "antitoxinate" 命中 "antitoxin"）。
 * 同时检测 1-2 个变形：复数 s / -es / -ing / -ed。
 */
export var sceneContainsWord = function (scenario, word) {
  if (!scenario || !word || typeof scenario !== "string" || typeof word !== "string") return false;
  var w = word.trim().toLowerCase();
  if (w.length < 3) return false; // 太短的"词"不查（误伤率高）
  var hay = scenario.toLowerCase();
  // 构造一组候选 verbatim 形式
  var stems = [w];
  if (!w.endsWith("s")) stems.push(w + "s");
  if (w.endsWith("e")) stems.push(w + "d", w.slice(0, -1) + "ing");
  else stems.push(w + "ed", w + "ing");
  for (var i = 0; i < stems.length; i++) {
    var s = stems[i];
    var idx = hay.indexOf(s);
    while (idx >= 0) {
      var before = idx === 0 ? "" : hay.charAt(idx - 1);
      var after = idx + s.length >= hay.length ? "" : hay.charAt(idx + s.length);
      var beforeOk = !/[a-z]/.test(before);
      var afterOk = !/[a-z]/.test(after);
      if (beforeOk && afterOk) return true;
      idx = hay.indexOf(s, idx + 1);
    }
  }
  return false;
};

/* morph_fill 数据合法性校验：
 * 命中"泄题"的两种已知形态 → leaked=true（调用方应据此重试题目）。
 *   1. scenario 含目标词 verbatim（如 antitoxin / antitoxins）
 *   2. options 结构残缺或非 {A,B,C,D} 4 个键
 * 返回 { leaked, reason }。
 */
export var checkMorphFill = function (data, targetWord) {
  if (!data || typeof data !== "object") return { leaked: false, reason: null };
  if (data.type !== "morph_fill") return { leaked: false, reason: null };
  // (1) scenario 含目标词
  if (sceneContainsWord(data.scenario, targetWord)) {
    return { leaked: true, reason: "scenario_contains_target_word" };
  }
  // (2) options 结构残缺
  var opts = data.options || {};
  var keys = ["A", "B", "C", "D"];
  for (var i = 0; i < keys.length; i++) {
    var v = opts[keys[i]];
    if (typeof v !== "string" || !v.trim()) {
      return { leaked: true, reason: "options_missing_" + keys[i] };
    }
  }
  return { leaked: false, reason: null };
};
