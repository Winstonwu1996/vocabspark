# Codex 审核：History teach 重设计 — Phase P0（rebase + 前台审核必修）

## 背景

History teach 阶段做了一轮重设计（3 个 Package，分支 `feat/history-teach-redesign`），
然后派 4 个 persona agent 做"前台模拟审核"（目标学生 / 低参与度学渣 / AP 学生+家长 /
资深教师）。审核抓出 2 个必修项（1 个真 bug + 1 个史料诚信硬伤），本 phase 已修。

请审核：(A) rebase 是否干净无副作用；(B) 两个修复是否正确、有无回归。

**分支**：`feat/history-teach-redesign`（已 rebase 到当前 main `adf03a6`，领先 main 5 个 commit）
**本 phase 关键 commit**：`c5f22fe`（两个修复）
**安全备份**：`backup/history-teach-prerebase`（rebase 前的旧基线）

---

## 先验上下文：3 个 Package 在改什么（供审核参照，本 phase 未动其逻辑）

全部改动是 render-time / 配置层，**不插 storyboard 节点、不改存储 schema、不动 turnIndex 语义**——
老用户进度零风险（已实测 savedTurnIndex 整数正常）。

- **P1**（commit `b9bfb12`）：`nodeToTurn` 加归一化字段（`_themeCn/_themeEn/_hook/_crossLensHook/_idx`，纯附加）；`ConversationStream` 加 `ProgressRail`（每 lens 独立"第 X/N 节"+ 分段条）+ `TakeawayCard`（节点末尾"带走一句"，`_theme ?? _hook` 兜底）。
- **P2**（commit `e3e0b16`）：N6（idx 5、lens ≥9 节、非 expectsRealAnswer）翻 `expectsInput` 做"检索门"——复用现有 input bar + `submitUserResponse`→`advanceTurn` 路径，**不插节点**。turn 加 `_retrievalGate`。
- **P3**（commit `a790181`）：新增 `lib/history-storyboards/sourcing-bridges.js`（按 topic 注册的双-lens 史料对读表）；`nodeToTurn` 在 N10（idx 9）查桥接命中则翻 `expectsInput` + 挂 `_sourcingBridge`；`ConversationStream` 渲染 `SourceBridgeCard`。参考实现 tang-song（emperor-huizong lens）。

---

## 修复 1：tiredMode 静默跳过全部输入门（真 bug）

**症状**（学渣 + 教师 persona 发现，已验证代码）：[pages/history.js](../pages/history.js) 听模式（"😴 累了听就好"）
的 auto-advance `useEffect` 守卫查 `turn.expectsRealAnswer`。但 storyboard turn 由 `nodeToTurn` 生成，
只有 `expectsInput`（`expectsInput: !!node.expectsRealAnswer`），**没有 `expectsRealAnswer` 字段**
→ `turn.expectsRealAnswer` 恒 `undefined` → 守卫从不触发 → 听模式自动跳过**全部**输入节点：
新增的 N6 检索门、N10 史料桥，以及原有的 N11/N12 真问题。低参与度学生（正是检索设计要服务的人）
一键"累了"就绕过了整套检索/sourcing 核心。

**修复**（[pages/history.js](../pages/history.js) 约 line 781）：

```js
// 不自动跳过任何需要用户输入的节点 — synthesis/meta 真问题 + N6 检索门 + N10 史料桥
if (turn.expectsInput) return;   // 旧: if (turn.expectsRealAnswer) return;
```

`expectsInput` 对 N6/N10/N11/N12 全部为 true → 听模式现在在每个写作门前停下（用户仍可手动点
"⏭️ 跳过"），自动推进只作用于阅读节点。**这同时修了一个先于本次重设计就存在的潜在 bug**
（原作者注释意图"不自动跳过真问题节点"，但因查错字段从未实现，听模式连 N11/N12 都会自动跳过）。

### 请确认 1
1. `expectsInput` 是 `nodeToTurn` 唯一表达"该节点要用户输入"的字段，N6/N10/N11/N12 均为 true、
   纯阅读节点为 false——改 `expectsInput` 是否精确覆盖且无误伤？
2. 听模式停在输入门后，用户路径是否完整：可手动答（`submitUserResponse`）/ 可"⏭️ 跳过"
   （`advanceTurn`）/ 可关"累了"模式？有无"停下后卡死"风险？
3. `useEffect` 依赖 `[tiredMode, turnIndex, phase, conversationLog]` 未改——改守卫字段不影响
   依赖正确性？

---

## 修复 2：N10 史料诚信 — 伪一手史料冒充档案（AP 审核硬伤）

**症状**（AP 学生 + 家长 persona 发现）：N10 sourcing bridge 旧 Source A 是 app 自己演绎的句子
（"把所有东西放在一个篮子里，不是保护，是风险。我跟亚历山大图书馆走的是同一条路"——徽宗
12 世纪不可能有亚历山大图书馆的框架），却和真实的李清照《金石录后序》用**完全相同的"史料"
卡样式**并排。让学生对一段虚构文字做 HIPP（who/purpose/POV/limitation）= 训练"不查 provenance"
的反技能，正是 AP DBQ/SAQ/MCQ（每道 stimulus 都是真实带署名）专门惩罚的。

**修复**：

(a) [lib/history-storyboards/sourcing-bridges.js](../lib/history-storyboards/sourcing-bridges.js) —
Source A 换成徽宗**真实囚禁诗**《在北题壁》（五国城囚禁期 c.1130-1135，本就在 tang-song
storyboard hz-n11 里逐字引用）："家山回首三千里，目断山南无雁飞。" 两侧现在都是可考一手史料
（`kind: 'primary'`）。事件框架从"文物浩劫/集中 vs 聚散"改为"两人都失去一生所珍视的，如何面对失去"——
对比更直接服务 HIPP"身份如何决定 framing"（被掳皇帝的执念盼信 vs 逃难寡妇的释然"聚散有常"）。

(b) excerpt 加 `kind` 字段（`'primary'` / `'dramatization'`）；
[components/history-engine/ConversationStream.js](../components/history-engine/ConversationStream.js)
`ExcerptCol` 渲染徽章："📜 一手史料"（teal）/ "✎ 演绎"（紫）——**区分史料类型本身就是 sourcing 技能**，
未来若某 topic 确需用演绎片段，至少诚实标注。

### 请确认 2
1. 《在北题壁》"家山回首三千里，目断山南无雁飞" 是否徽宗可考真作、归属/年代标注无误？
   （我从本仓库 tang-song hz-n11 既有引用取的，未外部核查原始文献。）
2. 两侧 `kind: 'primary'` + 徽章渲染逻辑（`ExcerptCol`）是否正确；CN/EN 双语徽章文案对应正确？
3. 旧伪造句"一个篮子/亚历山大图书馆"是否只从**桥接卡**移除，而 hz-n10 **叙述正文**里它作为
   徽宗第一人称内心独白保留（非"史料"标签）——这是预期行为，请确认没有别处仍把它当史料引用。

---

## 回归确认（本 phase 未动，供你回归参照）
- P1/P2/P3 的渲染与门控逻辑未改（除修复 1 的守卫字段）。
- 存储层（`saveInProgress`/`turnIndex`）未动；本 phase 不碰 sync 相关任何文件。
- rebase 后已实测：tang-song Huizong lens 走到 N10，桥接显示两段真实一手史料 + 双徽章，
  N6 门正常，完整通关到 mastery gate 无回归；build 无 error。

## 已知待办（不在本 phase，列出供你判断优先级）
- 🟡 尾部疲劳悬崖：N10→N11→N12 三个递增重写作背靠背（前台共识最大设计问题）——下一 phase。
- 🟡 N6 检索 prompt 过抽象（"核心矛盾"）；N10 缺 cosplay→分析的 PhaseDivider 提示。
- 🟢 N6/N10 答案目前写完即推进、无反馈闭环（AP persona 指出）——需接 `callAPIStream` 给 rubric 反馈。
- 🟢 hook 去重 / 进度条 ETA / 散文分段 / bridge 铺到其余 7 个 live topic。
