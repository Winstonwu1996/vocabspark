/* ─── 阅读理解(cloze)选项顺序 ──────────────────────────────────────────────
 *
 * Willow 实测反馈：「阅读理解答案几乎每次都是第一题(第一个选项)」。
 *
 * 根因：LLM 生成 questions[].options 时天然把正确答案写在下标 0
 * （prompt 的 JSON 范例也写成 ["选项1","选项2",...] + answer:"正确词"，
 *   等于默认示范了「答案在前」）。而 cloze 全链路没有任何打乱：
 *   猜词游戏有 shuffle(Object.keys(guess.options))，cloze 漏了；
 *   渲染处 q.options.map 又直接按原序显示。
 * 后果：学生不用读短文，每题闭眼选第一个就能过关 —— 阅读理解形同虚设，
 *       还会把「必对门」变成送分。
 *
 * 修法两层：
 *   ① prompt 要求答案位置分散（治本，但 LLM 不保证遵守）
 *   ② 这里在数据入口强制打乱（治标，100% 可靠的兜底）
 *
 * 单独成模块的原因：pages/vocab.js 只有 default export，内联函数测不到。
 * 上一轮审查用变异测试证明过「手抄副本的测试是假保护」，所以这里让
 * 生产代码与测试共用同一份实现。
 */

/**
 * 原地打乱每题的 options 顺序（Fisher-Yates）。
 *
 * ⚠️ 必须在 validateCloze 之后调用：validateCloze 会把 q.answer 回写成
 * 选项原文（大小写/空格容错），保证打乱后 answer 仍严格等于某个选项。
 * 本函数只调整顺序、不改动任何选项内容，因此 answer 的相等判定不受影响。
 *
 * @param {{questions?: Array<{options?: string[]}>}} parsed
 * @returns {*} 同一个对象（原地修改，方便链式调用）
 */
export function shuffleClozeOptions(parsed) {
  if (!parsed || !Array.isArray(parsed.questions)) return parsed;
  parsed.questions.forEach(function (q) {
    if (!q || !Array.isArray(q.options) || q.options.length < 2) return;
    var opts = q.options.slice();
    for (var i = opts.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = opts[i];
      opts[i] = opts[j];
      opts[j] = t;
    }
    q.options = opts;
  });
  return parsed;
}

/**
 * 统计一组题目里「正确答案落在各下标」的分布，用于诊断/测试。
 * @returns {number[]} 下标 → 出现次数
 */
export function answerIndexDistribution(questions) {
  var dist = [];
  (questions || []).forEach(function (q) {
    if (!q || !Array.isArray(q.options)) return;
    var ans = String(q.answer == null ? "" : q.answer).trim().toLowerCase();
    var idx = q.options.findIndex(function (o) {
      return String(o == null ? "" : o).trim().toLowerCase() === ans;
    });
    if (idx < 0) return;
    while (dist.length <= idx) dist.push(0);
    dist[idx] += 1;
  });
  return dist;
}

export default shuffleClozeOptions;
