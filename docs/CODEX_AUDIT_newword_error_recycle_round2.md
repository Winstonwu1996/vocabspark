# Codex 复看 Round 2：猜错新词 error 回收修复（落实 No-Go 的 2×P1 + P2）

## 背景
你第一轮 No-Go，三条：
- **P1-1**：分支混入大量无关 history 改动（12 文件 772 行），不能上生产。
- **P1-2**：`startLearning` 在 `unlearned.length===0` 时回退 `rawWords`，又把 error 绕回新词池。
- **P2**：状态机无自动化回归测试。

全部已改。**重做在干净分支 `fix-newword-v2`（基于最新 main，单一 feat commit）**。请确认 + 重新 go/no-go。

## P1-1 修复：干净分支
原分支是误用 `git add -A` 把工作区里**别人未提交的 history WIP** 一起 commit 了。已废弃原分支，新建 `fix-newword-v2` 从 main 起，**只含**：
- `pages/vocab.js`（学习流修复）
- `lib/learnStatus.js`（新增纯函数）
- `scripts/test-learn-status.mjs`（新增测试）
- `docs/CODEX_AUDIT_newword_error_recycle*.md`

`git diff main...HEAD --name-only` 仅这几个文件，**无任何 history 文件**。（那批 history WIP 已原样保留在工作区未提交，没丢。）

## P1-2 修复：无未学新词时不回退全词表
[pages/vocab.js](../pages/vocab.js) `startLearning`：
```js
var unlearned = selectUnlearnedWords(rawWords, wordStatusMap); // 只挑 unlearned/未记录
if (unlearned.length === 0) {
  var _plan = getDailyPlan();
  if (_plan.toReview?.length) { ...确认→ startQuickReview("due"); return; }
  if (_plan.deepToday?.length) { ...确认→ startDeepReview(); return; }
  setError("没有新词要学了 —— 词表里的词都已学过。可以去复习，或更换/添加词表。");
  return;
}
```
**不再 `unlearned = rawWords`**。没有新词时引导去快速复习 / 深度攻克 / 提示，error 词永不回到新词流程。

## P1（核心）修复：猜错新词 → learning，不再 error
[pages/vocab.js](../pages/vocab.js) `goNextWord`：
```js
var nextStatus = decideNewWordStatus(wordStatusMap[currentWord], guessCorrect);
if (nextStatus) updateManualWordStatus(currentWord, nextStatus);
```
逻辑收进纯函数（见下）。复习两处出口（quick 6057 / deep 6531）改用共享常量 `REVIEW_RESULT_STATUS`（`forgot→error`），**error 的唯一合法来源**收敛到此。

## P2 修复：抽纯函数 + 18 用例回归
新增 [lib/learnStatus.js](../lib/learnStatus.js)：
- `decideNewWordStatus(currentStatus, guessCorrect)`：新词猜对→mastered；猜错/跳过→learning；已 mastered/learning/uncertain/error→null（不降级）。
- `selectUnlearnedWords(words, wordStatusMap)`：只留 unlearned/未记录，排除 error/mastered/learning/uncertain/skipped。
- `REVIEW_RESULT_STATUS = { remembered:mastered, fuzzy:uncertain, forgot:error }`。

新增 [scripts/test-learn-status.mjs](../scripts/test-learn-status.mjs)（18/18 通过），覆盖你点名的全部场景：
- 新词猜错/跳过→learning、猜对→mastered
- 复习 forgot→error
- 新词池不接收 error/mastered/skipped/learning/uncertain
- 全学过（含 error）→ 返回空数组（**证明不回退全词表**）

## 请重点复核
1. P1-2 的"无新词"分支：`getDailyPlan()` 在 `startLearning` 内调用是否有时序/副作用问题（都是组件内 var 函数，运行时已就位）。引导到 `startQuickReview("due")`/`startDeepReview()` 的入参是否正确。
2. `decideNewWordStatus` 抽取后行为与原 inline 等价（仅去掉 false→error 那一支）。确认无回归。
3. 两处复习出口换 `REVIEW_RESULT_STATUS` 后行为不变（forgot→error/fuzzy→uncertain/remembered→mastered）。
4. error 仍可恢复：error 词只走 deepPool（5637 不变）+ focus，deep review remembered→mastered 可升回。确认无"error 死角"。

## 测试
- `node scripts/test-learn-status.mjs`：18/18
- `node scripts/test-progress-merge-policy.mjs`：80/80（未受影响，回归确认）
- `npm run build`：通过
- 注：startLearning/goNextWord 是 React 运行时，纯函数已覆盖核心判定；UI 引导分支靠代码审查 + 部署后目测。

## 数据清理（部署后）
chompcloud 5 个 error 词：guessCorrect=true→mastered，其余→learning，`jsonb_set` 改这 5 key + version+1。**先部署代码再清数据**。

## 请给结论
2×P1 + P2 是否落实到位 + 整体 go/no-go。
