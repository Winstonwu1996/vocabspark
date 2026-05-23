# Codex 审核：History Learning Receipt（学习证据）MVP

## 背景 + 请求

落地 `docs/HISTORY_LEARNING_RECEIPT_DESIGN.md`（你此前可能没审过这个 design，可一并看）的硬机制 2。
lens 走完最后一节、进 mastery gate 之前，弹一张轻量收据卡收 4 件证据
（事实锚点 / 因果 / 视角限制 / 一句英文）。请审 + go/no-go。

**分支** `feat/history-learning-receipt`（off `main`，已含 sync historyData P0 修复），commit `5ef7a09`。
**依赖**：sync `mergeProgress` 丢 historyData 的 P0 已先合 main（`4be026f`），Receipt 数据才不会在 409/登录合并被吞。

---

## 一、改动（3 文件）

### 1. `lib/history-storage.js` — 两个纯函数
```
saveLearningReceipt(topicId, lensId, payload)  // 存 historyData.learningReceipts[topicId][lensId]
loadLearningReceipt(topicId, lensId)           // 读，缺失 → null
```
- 镜像现有 `saveReviewPool`/`loadReviewPool` 写法（read-merge-write via `saveAll`，纯附加）。
- `lensId` 缺失 → `"__default__"` 兜底。自动注入 schemaVersion=1 / submittedAt / source。

### 2. `components/history-engine/ConversationStream.js` — 卡 + gate
- 新 `LearningReceiptCard`（4 textarea + 双语引导问句 + Submit/Skip）。
- `allDone` 块改为 gate：`props.onSubmitReceipt && !props.existingReceipt && !receiptSubmitted`
  → 显示卡；否则原「开始记忆考核」按钮。
- **向后兼容**：host 不传 `onSubmitReceipt`（如 AtlasLabPage embed）→ 跳过 gate 直接进 mastery。

### 3. `pages/history.js` — handler + 接线
- `submitLearningReceipt(payload)` → 算 lensTitle（兼容 nameCn 字符串 / name:{cn,en}）→ `saveLearningReceipt`。
- `existingReceipt = useMemo(loadLearningReceipt, [topicId, effectiveLensId])`（避免每渲染 parse 整 blob）。
- 传 `onSubmitReceipt` / `existingReceipt` 给 ConversationStream。`startMasteryGate`/`completeTopic` **未动**。

---

## 二、不影响现有用户进度（硬门槛）

| 风险面 | 为什么安全 |
|---|---|
| `turnIndex` 语义 | 不读不写；gate 用派生量 `turnIndex >= turns.length` |
| `completedTopics` / `inProgress` | 不同 key、不同函数；completeTopic 流程一字未改 |
| `saveAll` read-merge-write | 新增 `historyData.learningReceipts` 是 Object.assign 纯附加 key |
| 老用户无字段 | 读路径 `|| null` 兜底，零迁移 |
| 同步 | 寄生 vocabspark_v1 blob；正常 push passthrough 保留；409/登录合并已由 main 的 P0 修复用 union 保住 historyData |

---

## 三、验证（dev preview 真跑 magna-carta Tom lens 端到端）

- 卡片在 allDone 正确渲染：4 字段 + 双语引导问句 + 占位例 + Submit（0 填禁用）+「先跳过」+ 软门提示。
- 软门：填 ≥1 项 → Submit 启用；提交后卡消失、出现「开始记忆考核」。
- 提交写入 `historyData.learningReceipts['magna-carta-1215']['tom-villein']`，字段正确
  （factAnchor/perspectiveLimit 文本、englishExpr{en,pushedToVocab:false}、schemaVersion=1、source、submittedAt）。
- 读 localStorage 确认现有字段（wordInput/reviewWordData/completedTopics/inProgress/userWorldview）零改动。
- 3 文件 babel parse 通过；页面编译 + 渲染 0 console error。
- 修了一个自查出的 bug：lensTitle 被 card 占位 null 覆盖（Object.assign 顺序 + nameCn 形状），已改。

> 未跑 full `npm run build`（避免与并发 dev/worktree 抢 .next）；build gate 走 Vercel preview。

---

## 四、MVP 决策（design 的 open questions，已拍板，列出供你判断是否合理）

- **Q1 gate 位置**：mastery **之前**（趁记忆新）。
- **Q2 松紧**：软门——填 ≥1 项可提交 + 「先跳过」逃生口（点了写 skipped:true 收据，不挡 mastery）。
- **Q3 英文表达**：MVP **只存进 receipt 不自动推桥词**（pushedToVocab:false），二期再开「加入复习」。
- **Q4/Q6**：跨 lens③联动、无 lens 老 topic 走 __default__（已兜底，未特别 UI）——二期。
- 文案：不鸡汤 + P8.1 大白话（「考核前，留下你的收获」「四句话就好…写错也没关系」）。

---

## 五、请确认
1. storage 纯附加 + gate 派生判定，是否确实零触碰 turnIndex/completedTopics/inProgress 语义？
2. `allDone` gate 的三条件（onSubmitReceipt 存在 / 无 existingReceipt / 本会话未交）有无漏判，
   会不会出现「重复弹卡」或「该弹不弹」？（注：同会话重访同 lens、useMemo 不刷新 → 极端情况下可能再弹一次，会覆盖同一张收据，无数据损失——可接受？）
3. tiredMode auto-advance 与 receipt gate 有无交互问题？（gate 是 allDone 后独立 UI，auto-advance 只作用于阅读节点）
4. englishExpr MVP 只存不推桥词，是否同意（vs 现在就接 bridgeReviewToVocab）？
5. 是否需要把 receipt 纳入 `saveTopicCompletion` 一并归档（design Q5，现独立存）？

## 六、回归 / 部署
- 仅 3 个 history 模块文件；不碰 sync handler / progressMergePolicy / vocab.js / backups。
- 22 个 dark 内容草稿在另一分支，与本功能无关。
