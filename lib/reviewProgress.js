/* ─── 复习进度口径 ──────────────────────────────────────────────────────────
 *
 * 梧桐(Willow 的同学/家人)实测反馈：
 *   「只要给某个复习中的单词标记了不熟，总共要复习的单词数就会变多，
 *     按这个逻辑似乎永远都做不完。」
 *
 * 根因：不是 SRS 算法坏了，是**进度显示口径错了**。
 *   maybeRelearnSameSession 会把「不熟/忘了」的词当场重排到队尾再练一遍
 *   （forgot 最多 2 次、fuzzy 1 次 —— 有上限，实际会收敛，不是无限循环）。
 *   但进度条写的是 `quickReviewIdx+1 / quickReviewQueue.length`，
 *   分母是「还要答多少题」，每重排一次就 +1。
 *   学生读到的却是「还剩多少个单词」→ 每标一次不熟分母就涨 → 感觉永远做不完。
 *
 * 修法：分母锁成「本轮去重后的单词数」，重练不计入分母；
 *       重练单独显示为「加练」，诚实告诉学生这是同一个词再练一遍，不是新任务。
 *
 * 单独成模块：pages/vocab.js 只有 default export，内联函数测不到。
 * （此前审查用变异测试证明过「手抄副本的测试是假保护」，故让生产与测试共用实现。）
 */

/**
 * 计算复习进度的展示口径。
 *
 * @param {Array<{word?: string}>} queue 当前队列（含被重排追加的重复项）
 * @param {number} idx 当前下标
 * @returns {{
 *   totalWords: number,   // 分母：去重后的单词数（不随重练增长）
 *   doneWords: number,    // 已经历过的去重单词数（含当前这个）
 *   isRelearn: boolean,   // 当前这题是不是「同一个词的加练」
 *   relearnRound: number  // 当前词是第几次出现（1 = 首次，2+ = 加练轮次）
 * }}
 */
export function computeReviewProgress(queue, idx) {
  var list = Array.isArray(queue) ? queue : [];
  var i = Number(idx);
  if (!Number.isFinite(i) || i < 0) i = 0;

  var keyOf = function (it) {
    if (!it) return "";
    return String(it.word == null ? "" : it.word).trim().toLowerCase();
  };

  // 分母：整个队列里出现过的不同单词数（重排追加的是同一个词，不该让分母变大）
  var allSeen = Object.create(null);
  var totalWords = 0;
  list.forEach(function (it) {
    var k = keyOf(it);
    if (!k || allSeen[k]) return;
    allSeen[k] = true;
    totalWords += 1;
  });

  // 分子：截至当前（含当前）已出现过的不同单词数
  var doneSeen = Object.create(null);
  var doneWords = 0;
  var relearnRound = 0;
  var upTo = Math.min(i, list.length - 1);
  for (var n = 0; n <= upTo; n++) {
    var k2 = keyOf(list[n]);
    if (!k2) continue;
    if (!doneSeen[k2]) {
      doneSeen[k2] = true;
      doneWords += 1;
    }
  }
  // 当前词是第几次出现
  var curKey = keyOf(list[i]);
  if (curKey) {
    for (var m = 0; m <= upTo; m++) {
      if (keyOf(list[m]) === curKey) relearnRound += 1;
    }
  }

  return {
    totalWords: totalWords,
    doneWords: doneWords,
    isRelearn: relearnRound > 1,
    relearnRound: relearnRound,
  };
}

export default computeReviewProgress;
