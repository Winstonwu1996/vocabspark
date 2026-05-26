# Codex 复核 prompt — Mastery Gate + Learning Receipt 流程重设(动手前)

你是独立代码审核员。本轮**还没开始改代码**,请在动手前对「问题诊断 + 修改范围」做一次只读复核,给出 **Go / No-Go**:有没有漏掉的 P0、有没有把 P1 误升 P0、有没有顺序错配,以及任何会破坏现有流程的隐藏依赖。

## 一、用户原始反馈(创始人 2026-05-25 线上实测,带截图)

发现于 **tang-song-china**(lens-based 简化版课,不是老 conversationTurns 格式),但创始人怀疑是普适问题。4 条原话:

1. **「快速回想」互动出现太多** — 一个 lens 出现 3 次,应该 ≤ 2 次。
2. **「累了听就好 / 我没懂 / 跳过」三个按钮没意义,可以去掉。**
3. **「考核前,留下你的收获」4 道反思题信息密度过大,语言太精炼,大人都看不懂** —— 是不是因为不是简化版?
4. **Mastery Gate 概念定义题感觉乱看不懂**,而且「考点不是应该学完后有复习笔记然后再考吗?」「考试应该每个 lens 结束就考,还是所有 lens 结束后考?」

## 二、Agent 审核已给的诊断(读过代码 + 数据)

**核心结论**:
- `tang-song-china` 已是 lens-based 简化版,密度问题是**普适**,不是格式问题。
- **「累了/没懂」按钮在代码注释里已标 dead code**(`ConversationStream.js:791-794`:"prewritten 短路 AI → 旧'累了/没懂'是 dead code"),但 UI 仍在渲染。
- **复习笔记数据齐全**(`notebooks/<id>.js` 的 `mainConcepts × 8` + `examFrequency` + `thinkingQuestions × 3`),但**只在 CompletionScreen 通关之后**才显示,**不在 Mastery Gate 之前**。摆错位置,这是创始人 #4 的精确根因。
- **当前流程是「1 个 lens 完了就当整门课完了」**:用户实际只学 1/3 内容(3 lens 中的 1 个),就拿了「完成」印章 + 100 XP。同 topic 另外 2 个 lens 不在流程里,要回 intro 重选。这比创始人「每 lens 考 vs 全 lens 后考」两个选项都糟。
- **Joseph Needham 那道概念定义题是研究生级 essay 题**(一题三问:定义 + 2 个正向例 + 1 个反向因),顶部「概念」标签只英文术语无 hint。
- **流程中至少 4 处突兀切换**:对话末节 → 收据卡无过场;收据提交 → 考核需要二次点击(中间无反馈);「开始记忆考核」 → 全屏 overlay 跳级;「跳过 (-10 XP / 进复习)」机制化文案。
- **XP 扣减体系对用户从未解释过**(拼写 +5 / 概念 +10 / 应用 +25;跳过扣半;全跳过仍能 onPass)。

## 三、我提议的本轮 P0 范围(7 项)

| # | 改动 | 难度 | 对应用户原话 / Agent 发现 |
|---|---|---|---|
| 1 | 「快速回想」频次 3 次 → 2 次 | 小 | 用户 #1 |
| 2 | 删除「累了听就好」+「我没懂」按钮(已是 dead code) | 小 | 用户 #2 |
| 3 | 学习收据 4 道 → 2 道,口语化(只保留 `fact` 一句话 + `eng` 一句英文) | 小 | 用户 #3 + Agent P0-1 |
| 4 | **复习笔记屏插入 Mastery Gate 之前**:新 phase `notebook`,复用 CompletionScreen 里 `nbSection==='concepts'` 渲染段 | **中** | 用户 #4 + Agent P0-2(核心改动) |
| 5 | Joseph Needham 题拆分 + 加 hint(顶部加「💡 想想刚才 Huizong 末尾那段」+ definition cn hint) | 小 | 用户 #4 + Agent P0-3 |
| 6 | 收据 → 考核 合并按钮去二次点击(`收据.提交` 直接进 P0-4 的笔记屏) | 小 | Agent P0-4 |
| 7 | 「跳过 (-10 XP / 进复习)」文案 → 「我现在答不上来 → 下次复习」(去机制化措辞) | 小 | Agent P0-5 |

**留作 P1**(下一轮,**不在本轮 scope**):
- 改成「每 lens 末尾 1 题轻 receipt + 3 lens 全过完才进正式 Mastery」(重构 phase 状态机)
- Application Test 长 prompt 拆步骤
- XP 体系可见化 / 视觉过场动画 / Mastery overlay 加「回笔记」入口
- 概念定义 GPT 评估失败兜底改严

## 四、要审核的关键文件

绝对路径,Codex 自行读源码核对:

- `/Users/williamai/projects/vocabspark/components/history-engine/ConversationStream.js`
  - L467-560:`LearningReceiptCard` 整段(收据组件 — P0-3 改 fields 数组 + 标题)
  - L605-825:对话区域含「累了」banner + 「我没懂」 hint + 旧按钮(P0-2 删按钮)
  - L760-790:快速回想(Active Recall)触发逻辑 + 文案(P0-1 频次改)
  - L882-919:`allDone` 后的收据/Mastery 切换 gate(P0-6 合并二次点击)
- `/Users/williamai/projects/vocabspark/components/history-engine/MasteryGate.js`
  - 整个 326 行,3 个 stage(SpellingTest / DefinitionTest / ApplicationTest)
  - L97 / L203 / L268:三处跳过按钮文案(P0-7)
  - L181-187:DefinitionTest 顶部 concept 色块(P0-5 加 hint)
- `/Users/williamai/projects/vocabspark/components/history-engine/CompletionScreen.js`
  - L239-412:复习笔记渲染(`nbSection==='concepts'` / `'questions'` / `'figures'` 等)— P0-4 复用源
- `/Users/williamai/projects/vocabspark/pages/history/[topicId].js`
  - L108 附近:phase 定义(需新增 `'notebook'` phase)
  - L902-928:`startMasteryGate` + `submitLearningReceipt`(P0-6 改流转)
  - L1708-1719:`MasteryGateOverlay` 调用点
- `/Users/williamai/projects/vocabspark/lib/history-topics.js`
  - L2177-2203:tang-song 的 bespoke `masteryChecks`(Joseph Needham 题在 L2191,P0-5)
- `/Users/williamai/projects/vocabspark/lib/history-storyboards/notebooks/index.js`
  - L161-221:`buildMasteryFromNotebook` 自动派生题库逻辑(对照看 bespoke 题面是否需统一)
- `/Users/williamai/projects/vocabspark/lib/history-storyboards/notebooks/tang-song-china.js`
  - mainConcepts × 8 数据(P0-4 笔记屏数据源)

## 五、Codex 必答的复核问题

1. **「快速回想」频次诊断**:用户报「一个 lens 出现 3 次」,代码里实际触发逻辑是什么(每 N 节出现一次? 还是基于 expectsRealAnswer 节点?)? 改成 2 次的具体做法是什么(条件改 `i % 5 === 0` → `i % 7 === 0`? 还是限制只在 N6 + N10 出现?)?
2. **「累了/没懂」按钮删除的依赖范围**:dead code 标注从哪个 commit 开始? 删按钮的同时,`tiredMode` state 和 `notUnderstoodAt` state 也要清理吗? 有没有别处仍引用?
3. **收据 4→2 题的数据兼容**:用户已经填过 4 道题的 receipt(存了 localStorage),改成 2 道后,旧 receipt 的 `cause / persp` 字段会不会被脏数据读到然后报错? 是否需要写迁移?
4. **P0-4 笔记屏插入的最低代价路径**:把 `CompletionScreen` 的 `nbSection==='concepts'` 渲染段抽成独立组件 `<ConceptReview>` 是最干净的,还是 inline 在 [topicId].js 新 phase 里更稳? 抽组件需要解开哪些 props 依赖?
5. **P0-6 合并二次点击**:`submitLearningReceipt` 当前 callback 是设 `receiptSubmitted=true` → 用户再点「开始考核」 → `startMasteryGate()`。 合并后流程应该是:`submitLearningReceipt → setPhase('notebook') → 笔记屏看完点按钮 → setPhase('mastery')`。 这条链里有没有现有 state 会被破坏(`gateStep` 初始化、`autoBackTimer` 等)?
6. **「快速回想」/ 「累了」/「我没懂」 这三个改动,对 atlas embedded 模式(simplifiedMode)的影响**:embedded 用户走的是同一条 ConversationStream 还是另一条? 删按钮会不会让 embedded 流程坏?
7. **本轮 P0 范围有没有漏掉的真 P0**? Agent 的 P0-2 / P0-4 我已经合并到我列的 4 + 6,但 P0 还有其他 Agent 没列出的吗(比如:50 门课的 bespoke masteryChecks 题面统一,是否真的能留到 P2)?
8. **本轮 P0 有没有应该降到 P1 的**? 比如 P0-7「跳过文案去机制化」其实只是文案润色,是否真要这轮做,还是和 P1 的「XP 体系可见化」一起做更连贯?

## 六、输出格式

中文,具体到 `文件:行号` + 最小 diff:

1. 先一句 **Go / No-Go**(本轮 P0 范围 + 优先级是否合理)
2. 必答的 8 个问题逐条回答
3. 如有 **隐藏依赖 / 顺序陷阱 / 兼容风险**,列出来 + 建议处理
4. 如建议 **改 P0 范围**(加/减/降级),给出理由

不要改文件,只审核 + 报告。本轮我**还没动代码**,代码状态 = `git rev-parse HEAD` 即 `f8ca30a`(上一次 push 后无新增改动)。
