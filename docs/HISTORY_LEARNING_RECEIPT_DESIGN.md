# History · Learning Receipt（学习证据）— 实现方案 doc

**Status**: 设计草案 v1 — 待 Codex 审 + founder 拍板（**未动任何 runtime 代码**）
**关系**: 落地 `docs/HISTORY_EVIDENCE_LAYER.md` §4 的硬机制 2（Learning Receipt）。
**铁律前提**: 任何方案**不影响现有用户进度** —— 新增字段纯附加，不改 `turnIndex` 语义，老用户零风险。本 doc 第 1 节 + 第 5 节专门证明这一点。

> ⚠️ 本 doc 只描述方案 + 给 schema / 伪代码片段。**不含可直接落地的 runtime 改动**。
> 实施前需：Codex 审本 doc → founder 拍板 → 单独备份分支 → 分步实现 + 单测。

---

## 0. TL;DR

每个 lens（一遍故事）走完最后一个节点、进 mastery gate **之前**，弹一张轻量「学习收据」卡，收集 4 件证据：①事实锚点 ②因果解释 ③视角限制 ④一个英文表达。

- **存哪**：`vocabspark_v1.historyData.learningReceipts[topicId][lensId]`（纯附加，与现有 `completedTopics` / `inProgress` 同级，互不干涉）。
- **触发点**：`ConversationStream` 的 `allDone === true` 分支（现在直接显示「开始记忆考核」按钮处）插一层 receipt gate；提交后再走原 `onStartMastery`。
- **英文表达项**：复用现有 `bridgeReviewToVocab()` 独立队列，**绝不直接污染 vocab 主词单**。
- **back-compat**：老用户没有 `learningReceipts` 字段 → 读时一律 `|| {}` 兜底，零迁移、零风险。
- **sync 安全（最大坑）**：history 进度本身**目前不走云同步**，但它寄生在 vocab.js 同步的 `vocabspark_v1` blob 里，而 `mergeProgress`（409 冲突 / 登录合并）会**整体丢弃 `historyData`**。这是**已存在**的 latent bug，Receipt 不引入新风险，但本 doc 把它作为 P0 风险列出（第 6 节）。

工作量级：**M**（详见末尾）。

---

## 1. 现状引擎核对（read-only 已读懂）

落地前先把"现有进度怎么存 / lens 怎么算完成"钉死，证明方案不踩它们。

### 1.1 用户进度存储现状（全部 localStorage，key = `vocabspark_v1`）

`lib/history-storage.js` 是唯一进度读写层。所有 history 数据挂在 `vocabspark_v1.historyData` 下：

```
localStorage.vocabspark_v1 = {
  // —— vocab/writing 共享字段（同步层认识）——
  wordInput, wordStatusMap, reviewWordData, pet, stats, profile, session, ...
  bridgeQueue: { history: { [topicId]: { pushedAt, words:[...] } } },  // 桥词独立队列

  // —— history 专属（同步层「不认识」，靠 passthrough 存活）——
  historyData: {
    completedTopics: { [topicId]: { completedAt, transcript, xpEarned, masteryResults, reviewPool } },
    inProgress:      { [topicId]: { turnIndex, conversationLog, savedAt } },   // O6 断点续传
    transcripts:     { [topicId]: [...] },
    reviewPool:      { words:[], concepts:[] },
    userWorldview:   { ... },
    profile, curriculum, englishLevel, sidekickLogs, walkthroughSeen,
  }
}
```

关键事实：
- **`turnIndex` 不持久化为独立字段**。它是 React state（`pages/history.js:102`）。断点续传存的是 `historyData.inProgress[topicId].turnIndex`（`saveInProgress` / `loadInProgress`，7 天过期）。
- `saveAll()`（storage.js:35）是 **read-merge-write**：先读现有 blob，`Object.assign` 覆盖传入字段，写回。所以新增一个 `historyData.learningReceipts` key 不会动任何其它字段。
- history 模块**没有自己的 Supabase 读写**。`pages/history.js` 只 `supabase.auth.getUser()` 拿身份，不 sync 进度。云同步逻辑全在 `pages/vocab.js`（`syncToCloud` / `loadFromCloud`），它推/拉的是**整个 `vocabspark_v1` blob**。

### 1.2 一个 lens「完成」怎么判定

没有显式 `lensCompleted` 字段。判定链路：

1. `getEffectiveTurns(topicId, topic, effectiveLensId)`（`lib/history-runtime.js:96`）按当前 lens 返回 `effectiveTurns` 数组（storyboard 节点 → turn-like）。
2. `advanceTurn()`（`pages/history.js:696`）推 `turnIndex++`；到 `>= effectiveTurns.length` 时 `clearInProgress(topicId)`。
3. UI 侧：`ConversationStream` 算 `allDone = turnIndex >= turns.length`（`ConversationStream.js:497`）。`allDone` 时渲染「全部对话完成 → 开始记忆考核」块（`ConversationStream.js:793-803`），点按钮触发 `props.onStartMastery` → `startMasteryGate()`（`pages/history.js:853`）→ `phase="mastery"`。
4. Topic 完成是 mastery gate 通过后 `completeTopic()`（`pages/history.js:859`）写 `saveTopicCompletion`。

**结论**：`allDone === true`（走完当前 lens 全部节点、mastery gate 之前）就是 lens「完成」的天然 hook 点。它纯派生自 `turnIndex` 和 `effectiveTurns.length`，**不需要新状态、不改 turnIndex 语义**。

> 注意 lens 切换会 `setTurnIndex(0)` + `setConversationLog([])`（`pages/history.js:1468-1474`），所以 receipt 必须按 `(topicId, lensId)` 双键存，避免不同 lens 互相覆盖。

---

## 2. 数据 schema（纯附加，证明不动现有进度）

### 2.1 新字段：`historyData.learningReceipts`

```js
// localStorage.vocabspark_v1.historyData.learningReceipts
{
  "[topicId]": {
    "[lensId]": {
      schemaVersion: 1,
      topicId, lensId,
      lensTitle,                 // 冗余存一份，UI 回看用，避免再查 storyboard
      completedTurnCount,        // = effectiveTurns.length（当时的 lens 节点数，审计用）
      submittedAt,               // ISO 时间戳
      // —— 4 件证据 ——
      factAnchor:   { text },                       // ① 一个事实
      causalClaim:  { text },                        // ② 为什么会这样
      perspectiveLimit: { text },                    // ③ 我刚才只听了谁的一边
      englishExpr:  { en, cn?, pushedToVocab: bool },// ④ 一个英文表达
      // —— 元信息（非证据，不进任何 gate 判定）——
      skipped: false,            // 用户点「先跳过」时为 true（仍记录，但 4 件可空）
      source: "lens-complete",   // 触发来源（未来可能有别的入口）
    }
  }
}
```

设计原则：
- **跟 `completedTopics` / `inProgress` 同级、互不嵌套**。读写 receipts 完全不碰它们。
- **`lensId` 维度**：一个 topic 多 lens，每 lens 一张收据。老 topic 无 lens（`effectiveLensId === null`）时用 `"__default__"` 作 key 兜底（极少数旧 topic）。
- **`englishExpr.pushedToVocab`** 记录「这条英文有没有进过桥词队列」，防重复推。

### 2.2 为什么它绝对不影响现有进度（硬门槛证明）

| 风险面 | 为什么不受影响 |
|---|---|
| `turnIndex` 语义 | receipts 不读不写 turnIndex；触发判定用派生量 `turnIndex >= turns.length`，不改其值 |
| `completedTopics` | 不同 key、不同函数；`completeTopic()` 流程一字不改 |
| `inProgress` 断点续传 | receipt 在 `allDone` 时收集，此时 `clearInProgress` 已跑（advanceTurn 走到末尾），互不重叠 |
| `saveAll` read-merge-write | 新增 `historyData.learningReceipts` 是 `Object.assign` 的纯附加 key，其它字段原样保留 |
| 老用户无此字段 | 读路径一律 `(historyData.learningReceipts || {})[topicId]?.[lensId] || null`，缺失 = null，正常走 |
| 数据体积 | 每张收据 ~4 个短文本，单 topic × 多 lens 量级 KB，远低于现有 transcripts/conversationLog |

---

## 3. Hook 点（生命周期 + 改动描述，不写实现代码）

### 3.1 触发：lens 完成、mastery gate 之前

最小侵入点：`components/history-engine/ConversationStream.js` 现有 `allDone` 块（793-803 行）。现状是直接显示「开始记忆考核」按钮。改为先过 receipt gate：

```
allDone === true
  └─ 该 (topicId, lensId) 已有 receipt？
       ├─ 有  → 直接显示原「开始记忆考核」按钮（onStartMastery）—— 不重复要求
       └─ 没有 → 显示 <LearningReceiptCard>（新组件）
                  ├─ 用户填完 4 件 → onSubmitReceipt(payload) → 存 → 显示「开始记忆考核」
                  └─ 用户点「先跳过」→ onSubmitReceipt({skipped:true}) → 显示「开始记忆考核」
```

为什么放 `ConversationStream` 而不是 `pages/history.js` 顶层：`allDone` 已在此组件算好；新增一个 `<LearningReceiptCard>` 子组件 + 两个 props（`onSubmitReceipt`、`existingReceipt`）即可，主页面只加一个 handler。

### 3.2 `pages/history.js` 侧改动（描述）

- 新 handler `submitLearningReceipt(payload)`：调 `saveLearningReceipt(topicId, effectiveLensId, payload)`（storage.js 新增函数），英文表达项额外调 `bridgeReviewToVocab`（见第 4 节）。
- 把 `existingReceipt = loadLearningReceipt(topicId, effectiveLensId)` 传进 `ConversationStream`（让它判断是否已交过）。
- **`startMasteryGate` / `completeTopic` 不动**。receipt 是 mastery 的前置闸，不是替代。

### 3.3 storage.js 新增（纯函数，伪代码）

```js
// lib/history-storage.js（新增，不改任何现有 export）
export var saveLearningReceipt = function(topicId, lensId, payload) {
  var all = loadAll() || {};
  var hd = all.historyData || {};
  hd.learningReceipts = hd.learningReceipts || {};
  hd.learningReceipts[topicId] = hd.learningReceipts[topicId] || {};
  var key = lensId || "__default__";
  hd.learningReceipts[topicId][key] = Object.assign(
    { schemaVersion: 1, topicId: topicId, lensId: key, submittedAt: new Date().toISOString() },
    payload
  );
  saveAll({ historyData: hd });   // read-merge-write，纯附加
};

export var loadLearningReceipt = function(topicId, lensId) {
  var all = loadAll();
  var key = lensId || "__default__";
  return (all && all.historyData && all.historyData.learningReceipts
    && all.historyData.learningReceipts[topicId]
    && all.historyData.learningReceipts[topicId][key]) || null;
};
```

---

## 4. 英文表达项 ↔ VocabSpark 单词主业接口

证据④是「接英文学习闭环」的关键。复用**已存在**的 history→vocab 桥接（`bridgeReviewToVocab` / `resolveHistoryBridge`，storage.js:391+），它本身就是为「不污染主词单」设计的：

- 用户填的英文表达 → 抽取其中 1 个核心词（或整句作 `contextSentence`）→ `bridgeReviewToVocab([{ word, sentence }], { topicId, priority: "context" })`。
- 落进 `vocabspark_v1.bridgeQueue.history[topicId]`（独立队列，**不是 `wordInput`**）。
- 用户在 vocab 模块看到「📚 来自 history 的词」提示卡，**主动**点「加入主词单 / 跳过」（`resolveHistoryBridge`）。只有点「加入」才进 `wordInput` + SRS。

接口设计要点：
- **priority 用新值 `"context"`**（区别于现有 `must-memorize` / `review-error`），表示「学生自己造的句子里的词」，vocab 端可给不同 UI 文案。`bridgeReviewToVocab` 已接受任意 priority 字符串，无需改它。
- 英文表达若是整句而非单词：存 `englishExpr.en` 全句进 receipt，桥词只取 1 个低频词（可选，避免推太多）。MVP 可先**只存进 receipt 不强制推词**，`pushedToVocab` 默认 false，二期再开「一键加入复习」。
- **不碰 `reviewWordData` / `wordStatusMap`**（SRS 主数据）——这两个是同步守卫盯得最紧的字段，绝不在 receipt 流程里写。

---

## 5. UI/UX（轻量 vs 摩擦权衡 + 既有文案规则）

### 5.1 形态：一张收据卡，4 项逐行轻填

遵守既有规则：
- **P8.1「使用者永远不是程序员」**：4 项各配一句大白话引导问句 + 占位例句，不出现 "fact anchor / causal" 等术语。
- **历史/Focus 文案不鸡汤**：不写「你真棒！」「了不起的思考」。中性、具体、像同龄人。沿用 `ConversationStream` 现有的 teal/橙配色 + 羊皮纸卡风格。
- **低摩擦**：4 项**都允许短答 / 中英混写**（跟 N6 检索门一致的宽松度，`history-runtime.js:45` 的 RETRIEVAL_PROMPT 已是这风格）。提供「先跳过」逃生口（点了仍写一条 `skipped:true` 收据，不挡 mastery）。

引导问句（草案，CN 主、可双语）：

| 证据 | 引导问句（不鸡汤、人话） | 占位例 |
|---|---|---|
| ①事实锚点 | 「这一遍里，哪个具体的事实你记住了？一句话。」 | 例：1215 年贵族逼 King John 在 Runnymede 签了字 |
| ②因果解释 | 「为什么会变成这样？用『因为…所以…』说一句。」 | 例：因为国王乱收税，所以贵族联合起来反抗 |
| ③视角限制 | 「你刚才主要听的是谁的一边？还有谁的声音你没听到？」 | 例：我听的是贵族的角度，没听到农民怎么想 |
| ④英文表达 | 「用一句英文说出你的想法 —— 短句也行，写错没关系。」 | 例：The barons forced the king to follow the law. |

③直接呼应 `HISTORY_EVIDENCE_LAYER.md` §1.2「明确你只听了一边」+ `SourceBridgeCard` 的 sourcing 训练，是 receipt 的差异化价值点。

### 5.2 交互细节

- 4 项**不强制全填才能过**（硬门会赶走发散型孩子，违背 §1.2 / 儿童心理）。建议：填了 ≥2 项才高亮「提交」，否则也能走但提示「至少留 1 条」。最终松紧度 founder 定（见 open question Q2）。
- 复用 `VoiceInputButton`（语音填 ④ 英文项，降低打字摩擦）。
- 已交过的 lens 回看不再弹卡（`existingReceipt` 判定）。
- 移动端：卡片走现有 `.input-bar` 的 visualViewport 键盘避让逻辑（`pages/history.js:396`），无需新写。

---

## 6. Back-compat / 迁移 + Sync 安全

### 6.1 老用户迁移

**零迁移**。`learningReceipts` 是新 key，老 blob 没有 → 所有读路径 `|| {}` / `|| null` 兜底。已完成 topic 的老用户不会被回灌要求填收据（receipt gate 只在 `allDone` 当场触发，不回溯历史 `completedTopics`）。

### 6.2 Sync 安全（**本方案最敏感的部分 —— 必读**）

**核心事实链**（已逐文件核对）：

1. history 进度（含未来的 receipts）**不单独同步**，它寄生在 vocab.js 同步的 `vocabspark_v1` blob 里。
2. 正常推送路径（`pages/vocab.js` flushSync / `_pushSnapshot`）发的是 `localStorage.getItem('vocabspark_v1')` 的**完整 blob** → 服务端 `applyProgressGuards`（`lib/progressMergePolicy.js:274`）以 `safe = Object.assign({}, incoming)` **passthrough** 起步，只对 `wordStatusMap/reviewWordData/pet/stats/wordInput` 做缩水守卫。**`historyData` 是未知字段 → 原样写入云端**。✅ 正常路径安全。
3. **但** 409 冲突合并 / 登录合并走 `mergeStates`（= `mergeProgress`，`progressMergePolicy.js:131`）。它 `var merged = {}` 起步，**逐字段白名单重建**（stats / pet / wordStatusMap / reviewWordData / session / profile / wordInput / settings / completedWords / ...），**完全不拷贝 `historyData`，也不拷贝 `bridgeQueue`**。

⇒ **结论（P0 风险，已存在，非 Receipt 引入）**：只要 vocab.js 触发一次 `mergeStates`（多设备 409、或登录时本地+云合并），合并结果会**丢掉整个 `historyData`**（含所有 `completedTopics`、`inProgress`，以及未来的 `learningReceipts`）和 `bridgeQueue`，然后这个「瘦身版」被写回 localStorage + 推上云。

对 Receipt 的影响：receipt 不会比现有 history 进度更脆，但它把这个潜在 bug 的暴露面变大（多一类用户在意的数据会被吞）。

**修复建议（必须在 Receipt 上线前一并处理，或至少 Codex 评估）**：
- 在 `mergeProgress` 末尾补两行 passthrough：
  ```js
  // 纯附加：merge 不认识但不能丢的子树，按 updatedAt newer 整树取（深合并风险高，先整树择新）
  merged.historyData = localNewer ? (local.historyData || server.historyData)
                                  : (server.historyData || local.historyData);
  merged.bridgeQueue = localNewer ? (local.bridgeQueue || server.bridgeQueue)
                                  : (server.bridgeQueue || local.bridgeQueue);
  ```
  ⚠️ 这是「整树择新」最简修法，**会牺牲跨设备 history 双向合并**（择新的一边赢，另一边的 receipts 可能被覆盖）。要双向合并需写 `historyData` 专用 merge（按 topicId/lensId 取并集 + receipt submittedAt newer wins），属二期。
- 同步把 `validateProgressMerge`（progressMergePolicy.js:248）加一条「merged 不该比 server 少 `historyData` 的 topic 数」防回归。
- 该修改**触碰 sync 核心**，必须独立 Codex 审 + 用 `lib/progressMergePolicy` 的现有单测框架补 case（这套有完整测试历史，见 `docs/CODEX_AUDIT_sync_*`）。

> 落地顺序建议：**先单独提一个「mergeProgress passthrough historyData/bridgeQueue」修复 PR + 测试**（这是修既有 bug，独立价值），跑稳后再上 Receipt 功能 PR。两者解耦，降低风险。

---

## 7. Open questions + 风险清单（给 Codex 下一轮审）

### Open questions
- **Q1**: receipt gate 放在 mastery **之前**（本 doc 方案）还是 **之后**（完成屏 CompletionScreen）？之前=趁记忆新；之后=不挡 mastery 节奏。倾向之前。
- **Q2**: 4 项硬门松紧 —— 全填才能过 / ≥2 项 / 全可跳？（儿童心理倾向松，但松了证据回路就弱）。需 founder 拍板。
- **Q3**: 英文表达项 MVP 是否真推桥词队列，还是先只存 receipt（`pushedToVocab:false`）、二期再开「加入复习」？倾向二期开，先验证填写率。
- **Q4**: 多 lens 的 receipt 是否在第 2/3 lens 收尾时**展示前一 lens 的③视角限制**，强化「现在你听到了另一边」？（呼应 `crossLensHook` / `SourceBridgeCard`，高价值但加复杂度）。
- **Q5**: receipt 数据要不要进 `saveTopicCompletion` 的 payload 一并归档（冗余但方便后续家长报告 / pedagogy smoke gate 分析）？倾向 receipt 独立存，completion 里只放一个 `hasReceipt:true` 标记。
- **Q6**: 老 topic（无 lens，`__default__`）要不要也上 receipt，还是只在 storyboard/lens topic 上线？倾向只在有 lens 的 topic 先上（量大、是主力）。

### 风险清单
| 级别 | 风险 | 缓解 |
|---|---|---|
| **P0** | `mergeProgress` 丢 `historyData`/`bridgeQueue`（既有 bug，receipt 放大暴露面）| 第 6.2 节修复 PR + 单测，先于 receipt 上线 |
| **P1** | lens 切换 `setTurnIndex(0)`，receipt 必须按 `(topicId,lensId)` 双键，否则 lens A 收据被 lens B 覆盖 | schema 已用双键；`__default__` 兜底无 lens topic |
| **P1** | 强制 4 项 → 摩擦赶走发散型孩子，跳出率↑ | 默认松门 + 「先跳过」逃生口 + 短答/混写允许 |
| **P2** | 英文表达推桥词推太多 → vocab 端噪声 | priority `"context"` 分流 + MVP 先不强推（Q3）|
| **P2** | receipt 卡与现有 `allDone` 块、`tiredMode` auto-advance 交互 | tiredMode 不 auto-advance `expectsInput` 节点（已验证 `pages/history.js:791`）；末节非 input 节点，但 receipt gate 是 `allDone` 后的独立 UI，不受 auto-advance 影响（需测）|
| **P2** | 文案违反不鸡汤 / P8.1 术语规则 | 第 5.1 引导问句已按规则起草，过 Focus AI persona 红线复查 |
| **P3** | 收据数据增长（多 topic × 多 lens）| 单条 ~4 短文本，量级 KB；如需可加「只留最近 N」上限（仿 sidekickLogs slice -30）|

---

## 8. 实现工作量级

**M（中等）**。拆解：
- storage.js 新增 2 个纯函数（save/load receipt）+ 桥词复用：**S**。
- `<LearningReceiptCard>` 新组件 + `ConversationStream` allDone 分支接入 + 主页面 handler：**S–M**。
- 文案 4 项双语 + Focus persona 复查：**S**。
- **sync 修复（mergeProgress passthrough + 单测 + Codex 审）：M**，是工作量与风险的大头，建议独立 PR。
- 不含二期：跨 lens③联动（Q4）、英文表达一键加复习（Q3）、家长报告聚合。

净结论：**功能本体 S–M，连同必须的 sync 修复整体 M。** 强烈建议 sync 修复先行、解耦上线。
