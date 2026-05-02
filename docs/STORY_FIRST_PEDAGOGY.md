# Story-First Pedagogy — 历史模块对话引擎重构 Design Doc

**Status**: Draft v0 — pending Winston sign-off
**Date**: 2026-05-02
**Replaces**: 13-turn forced Socratic 模型（lib/history-prompts.js `buildNarrativeTurnPrompt`）
**Validation**: Winston 跟 Willow 用纯 narrative + 任意 chat 工具手动跑过——效果好

---

## 0. TL;DR

**核心改变**：把"每轮 Deliver-Provoke 4 slot 必须以问题结尾"换成**4-phase 沉浸式叙述 + 用户问题 branch + 末尾思辨**。

**关键洞察**（Winston 提出 + 教育学验证）：
1. 用户**第一次**接触历史时**没有 schema**——做不了 analysis 类 Socratic 问题
2. **多视角 Cosplay 切换本身**就是隐式思辨训练（Bruner narrative-as-thinking）
3. **明朝那些事儿密度** + **Cosplay 沉浸** = 大段输出**不会让用户辛苦**
4. 用户的好奇点**不可预测**——脚本化的思辨问题反而**割裂**自然学习
5. **Synthesis Socratic 应该在末尾**——用户已建 schema 才适合做高层思辨

**新模型**：
```
HOOK (10%) → STORY (70%, N 轮) → SYNTHESIS (15%) → META (5%)
+ 用户问题随时 branch + return
+ 轮数不再固定 13
```

---

## 1. 问题陈述

### 1.1 用户报告的症状

Willow + 妻子测试现行 13 轮对话引擎反馈：
- 问的不知道怎么答
- 答完 AI 不顺着用户输入
- 整体割裂感

### 1.2 根因分析

**不是 prompt 调一调能修的**——是**架构性 mismatch**：

| 设计假设 | 实际情况 | 后果 |
|---|---|---|
| 用户已有 schema 可思辨 | 用户第一次见这段历史 | 答不上问题 → 困惑 |
| 13 轮 hardcoded objectives | 用户实际好奇点不可预测 | AI 强行 push 回 script → 不顺着 |
| 每轮强制 provoke + 切主题 | 故事节奏被打断 | 割裂感 |

### 1.3 Winston 手动 C 方案验证

Winston 用纯 narrative + 任意 chat 工具跟 Willow 跑过——
**做法**：
- Cosplay 沉浸讲故事
- 用户冒出好奇点 → 跳出来回答（甚至超出教材但**不矛盾**教材）
- 夸用户爱思考
- 拉回主线

**结果**：自然 + 用户专注 + 学到东西。

---

## 2. 教育学/认知科学基础

支持新模型的研究（不是迎合 Winston）：

| 研究 | 关键发现 |
|---|---|
| **Sweller Cognitive Load Theory** (1988-2019) | 工作记忆有限——novice 学新内容时 schema 没建好——加 Socratic = 认知超载 |
| **Hattie Meta-Analysis** (2009/2017) | Direct Instruction for novices: effect size 0.59 / Problem-Based Learning: 0.15——novice 阶段直讲明显更好 |
| **Willingham 《Why Don't Students Like School?》** | "Critical thinking is not a skill you can apply in a vacuum"——必须先有 background knowledge |
| **Cognitive Apprenticeship** (Collins, Brown, Newman) | "I do" → "We do" → "You do"——modeling 先于 coaching 先于独立思辨 |
| **Bruner Narrative Construction of Reality** | 人脑是模式补全机器——故事格式让内容自动 stick |

最佳实践参考（专业内容创作者都用 schema-first）：
- **Dan Carlin Hardcore History** — 4-6 hr 单人独白——0 mid-story 提问——叙述完毕后反思
- **Doris Kearns Goodwin** / **Ken Burns** / **明朝那些事儿** — 全程叙述，结尾留白
- **Khan Academy** — 直接讲 + 课后练，**完全不是 Socratic**——8 亿用户验证
- **Master Class** — 讲解为主，Q&A 在末尾单独 module

**核心结论**：novice 阶段——**story-first** 是教育学共识——目前 Socratic-every-turn 是**反共识**的设计错误。

---

## 3. 新模型：4-Phase Story-First Architecture

### 3.1 四个阶段

```
┌─────────────────────────────────────────────────────────┐
│ Phase 1: HOOK（1-2 轮，~10% 时长）                      │
│ - 强烈感官钩子（"1099 年 7 月 14 日下午 Tenochtitlán"...）│
│ - 引出 1 个**悬念问题**——不要求用户立即答              │
│ - "等故事讲完你会知道答案"                              │
│ - 用户可以打断问问题（branch）                          │
├─────────────────────────────────────────────────────────┤
│ Phase 2: STORY（主体，~70% 时长，N 轮 unconstrained）   │
│ - 多视角 Cosplay 沉浸叙述                               │
│ - 每轮 = 一段生动场景（200-400 字 OK）                   │
│ - 结尾用 **engagement hook**（不是真问题）：             │
│   ✅ "接下来 Saladin 听到这个消息，你猜他怎么反应？"     │
│   ✅ "现在我们换到拜占庭那边——Anna 公主在城里看到什么..." │
│   ❌ "你怎么看 Urban II 的动机？"（真 Socratic 不在这里）│
│ - **不强制等用户答** — engagement hook 是修辞性问题     │
│ - **用户随时可以打断问问题** — 触发 branch              │
├─────────────────────────────────────────────────────────┤
│ Phase 3: SYNTHESIS（2-3 轮，~15%）                      │
│ - 现在用户有 schema 了——开始**真 Socratic**            │
│ - "回头看——为什么 Urban II 那一嗓子能让 10 万人走？"     │
│ - "Saladin 1187 不屠耶路撒冷——是政治算计还是骑士风度？" │
│ - 多视角对比 / 现代化对照 / 反讽思辨                    │
│ - **应该让用户思考 30 秒以上**才能答                     │
│ - 用户答得好 → 深化 / 答得平 → 提示具体场景             │
├─────────────────────────────────────────────────────────┤
│ Phase 4: META（1 轮，~5%）                              │
│ - "今天最让你 surprise 的是什么？"                       │
│ - "如果可以选——你会做哪个角色？为什么？"                │
│ - 桥到 Mastery 通关                                     │
└─────────────────────────────────────────────────────────┘
```

### 3.2 数据结构：Storyboard（取代 conversationTurns）

每个 Topic 配一个 **storyboard**——按场景顺序排列的"剧本"：

```js
storyboard: [
  // ─── Phase 1: HOOK ───
  {
    id: 1,
    phase: 'hook',
    cosplay: 'narrator',
    narrativeRef: '§1 一句话锚点',
    deliverGoal: '强烈感官钩子+提出悬念问题',
    engagementHook: '为什么 10 万人走 4000 公里？等会儿你会知道',
    expectedLength: '120-180 字',
  },

  // ─── Phase 2: STORY ───
  {
    id: 2,
    phase: 'story',
    cosplay: 'Urban II',
    narrativeRef: '§3 Urban II 出身',
    deliverGoal: '把 Urban II 立体化为可共情的人',
    engagementHook: '接下来他要做一件改变历史的事',
    expectedLength: '200-300 字',
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'Urban II',
    narrativeRef: '§3 Urban II Clermont 演说 + §4 1095 4 把武器',
    deliverGoal: '演说现场感官细节',
    engagementHook: '人群会怎么反应？',
    expectedLength: '250-350 字',
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Anna Komnene',
    narrativeRef: '§3 Anna Komnene 出身',
    deliverGoal: '换拜占庭视角——意外承接 10 万武装难民',
    engagementHook: '现在我们换到东边看',
    expectedLength: '200-300 字',
  },
  // ... 多个 story 节点切换 cosplay 视角 ...

  // ─── Phase 3: SYNTHESIS ───
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§5 三方对照 + §7 AP DBQ',
    deliverGoal: '回顾 + 提出真 Socratic 问题',
    engagementHook: '回头看——你怎么看 Urban II "罪全免"这个发明？',  // 真问题
    expectsRealAnswer: true,  // ⭐ 真问题——等用户答
    expectedLength: '150-200 字 + 真问题',
  },
  {
    id: 12,
    phase: 'synthesis',
    narrativeRef: '§5 Saladin 1187 vs 1099 对照',
    deliverGoal: '多视角思辨',
    engagementHook: 'Saladin 不屠耶路撒冷——你觉得是政治还是品德？',
    expectsRealAnswer: true,
    expectedLength: '150-200 字 + 真问题',
  },

  // ─── Phase 4: META ───
  {
    id: 13,
    phase: 'meta',
    deliverGoal: '反思 + 桥',
    engagementHook: '今天最让你 surprise 的是什么？',
    expectsRealAnswer: true,
    expectedLength: '80-120 字',
  },
]
```

**关键字段**：
- `phase` — 决定 prompt 模板
- `cosplay` — 当前角色视角（narrator / Urban II / Saladin / Anna 等）
- `narrativeRef` — 取材定位（不是字面 quote——AI 用密度 paraphrase）
- `expectsRealAnswer` — 是否等用户答
  - `false` (story phase 默认): engagement hook 后**直接**进下一节点
  - `true` (synthesis/meta): 必须等用户答 → AI 反应 → 才进下一节点

**轮数不再固定 13**——typical 14-18 轮（hook 1-2 + story 8-12 + synthesis 2-3 + meta 1）。

### 3.3 用户问题 Branch 机制（核心创新）

**触发**：用户输入**不是**对 engagement hook 的合理回应——而是**新问题**。

**检测逻辑**（DeepSeek 一次性判断）：
```
分类输入:
- A. 答 engagement hook（"我猜会 X"）
- B. 简短承接（"哦"/"好"/"继续"）
- C. **新问题**（"等等——X 是怎么 Y 的？"）← 触发 branch
- D. Escape signal（累/没懂/跳过）← 已有处理
```

**Branch prompt 结构**：
```
[1] 表态接住问题:
   "好问题——这个我跳出主线给你讲一下"

[2] 回答 (100-200 字):
   - 如果 narrative 里有→直接讲
   - 如果不在 narrative 但**不矛盾**→可以延伸
     （Winston 已验证：超教材但不冲突反而自然）

[3] 夸一下用户:
   "你这个角度想得很好——历史学家也争论这个"

[4] 拉回主线（明确出入提示）:
   "现在我们回到刚才——记得 Urban II 在 Clermont 喊..."
   [继续当前 storyboard 节点未讲完的部分 OR 进下一节点]
```

**State 维护**：
- 系统维护 `currentNodeId`
- Branch 不消耗 storyboard 节点——branch 完回到原节点继续
- 多次 branch 也 OK——每次都"先答 → 拉回"

---

## 4. 跟现有代码的 mapping

### 4.1 改动文件

| 文件 | 改动 | 工作量 |
|---|---|---|
| `lib/history-storyboards/` | **新建目录**——每 Topic 一个 storyboard JS（取代 conversationTurns）| 7 Topic × 200 行 = 1400 行（agent 可生成）|
| `lib/history-prompts.js` `buildNarrativeTurnPrompt` | 重构——按 phase 分支不同 prompt 模板 | ~400 行 |
| `lib/history-prompts.js` 新加 `detectUserIntent()` | A/B/C/D 分类（DeepSeek call）| ~100 行 |
| `lib/history-prompts.js` 新加 `buildBranchPrompt()` | Branch 4 步结构 | ~150 行 |
| `pages/api/narrative.js` | 加 storyboard state machine（currentNodeId） | ~80 行 |
| `components/history-engine/ConversationStream.js` | 可能加 branch 视觉提示（"跳出回答中..."icon）| ~30 行 |
| `lib/history-topics.js` `conversationTurns` | **保留兼容**——加 fallback "新模型用 storyboard，老 Topic 用旧 turns"——逐步迁移 | 0（保留）|

### 4.2 不需要改

- ✅ Narrative 双语 kernel（已完成）
- ✅ Mastery checks 数据结构（不变）
- ✅ Atlas / Map / Source Card 渲染（不变）
- ✅ Privacy 4 处提示（不变）
- ✅ Parent email aggregator（不变——但可能改 stuckPoint 检测：从"用户答短"变成"用户在 synthesis phase 答得弱"）
- ✅ 3 个 escape buttons（累/没懂/跳过）—— 还需要——但**频率会下降**（因为不再每轮强迫）

### 4.3 渐进迁移策略

不一次性切换——按 Topic 灰度：

1. **Magna Carta 先迁** —— 已 ship 最久，是基线，迁完跟旧模型对比效果
2. 如果效果好 → **Crusades 迁**（结构最复杂——是真考验）
3. 如果还好 → **批量迁** Black Death + Renaissance + Reformation + Age of Exploration + Mali（这 5 个本来 Topic 数据结构都没写——直接出 storyboard 就 ship）

**好处**：旧 Topic 出问题不影响新 Topic ship。

---

## 5. 关键设计决策（需要 Winston sign-off）

### Decision 1：storyboard 是手写还是生成？

**A. 手写**：每 Topic 我或 agent 写 storyboard JS——15-20 节点
**B. 自动生成**：从 narrative §3 + §4 自动结构化抽取节点

我推荐 **A**——节奏 + cosplay 切换需要**编剧的判断**——自动生成会单调。
但 7 Topic × 200 行 = 1400 行——agent 并行可 1-2 hr 完成。

### Decision 2：用户问题检测放在哪？

**A. Server-side 一次 DeepSeek call 分类**：用户输入 → 分类 → 走对应 prompt
**B. 整合到主 prompt**：让主 prompt 自己判断"如果用户是问问题就 branch"

我推荐 **A**——分类是简单决策——单独一次 call 更可靠 + 便宜（200 token）。
B 容易让 DeepSeek 在主 prompt 里失控。

### Decision 3：synthesis phase 几个真问题？

**A. 2 个**：1 个对比类（多视角）+ 1 个反讽思辨
**B. 3 个**：加 1 个现代化对照
**C. 1 个**：精简——少而精

推荐 **A** = 2 个——平衡深度和长度。如果用户答得好可以延伸；答得平就保持 2 个不强加。

### Decision 4：是否保留 13 轮 mastery gate?

**保留**——mastery 通关是已经成熟的设计——继续用。
storyboard 走完 → meta phase → 自动进 mastery gate。

---

## 6. 风险 + Mitigations

| 风险 | Mitigation |
|---|---|
| **注意力衰减**——12 岁单段听 10+ 分钟会走神 | engagement hooks 每 2-3 节点一个 + cosplay 视角切换让感官刷新 |
| **Active recall 损失** | Mastery 通关 + synthesis Socratic + cosplay 切换隐式 recall——分散到 3 处 |
| **AP transfer 风险** | Phase 3 Synthesis + Mastery 应用题—保留 active analysis 训练——只是位置移到末尾 |
| **DeepSeek 自由度过大失控** | storyboard 严格 cosplay + narrativeRef 锁定——AI 写作有边界 |
| **Branch 失控**（用户连续问 5 个问题不让讲故事）| 第 3 次 branch 后 prompt 加："温和提示——'你的好奇心很好——但故事还没讲完——我们先继续看 X 怎么发生再继续问'" |
| **engagement hook 写得像真问题让用户卡住** | prompt 模板硬约束："**修辞性**问题——不要等用户答"——明示是修辞 |

---

## 7. 验证 + Rollout 计划

```
Stage 1: Magna Carta storyboard 写出 (~1-2 hr)
  ↓
Stage 2: prompt + state machine 改 (~3-4 hr)
  ↓
Stage 3: Winston + Willow 真跑 Magna Carta 一轮 (30-45 min)
  ↓ (如果效果好)
Stage 4: Crusades storyboard + 跑 (验证复杂 Topic)
  ↓ (如果还好)
Stage 5: 批量出 5 个剩下 Topic 的 storyboard（agent 并行）
  ↓
Stage 6: 跟旧 13 轮模型 A/B 对比（如果想要数据）
  ↓
Stage 7: Ship 全部
```

总计：**约 1-2 周 wall clock**——但**Stage 1-3 是 critical path**（一天内完成）——其他可以 parallel。

---

## 8. 开放问题（待讨论）

1. **手机 vs 桌面 UX**：手机上 storyboard 节点的视觉表现？长 story 段在小屏幕怎么排版？
2. **进度展示**：Phase 1 → Phase 4 用户能看到吗？还是隐藏？（建议**轻度可见**——比如顶部进度条 4 段——但不显示具体节点数量）
3. **音频化路径**：未来想做 Audio 版本——storyboard 跟 audio 对应天然——这个架构有利
4. **多语言切换**：用户 in-flight 切换中/英？storyboard 节点 narrativeRef 跨语言通用——好做
5. **Storyboard 版本化**：Topic narrative 改了 → storyboard 要不要跟着改？建议**自动 lint** 检查 narrativeRef 还指向有效段落

---

## 9. 跟之前文档的关系

- **替代**：`docs/HISTORY_PRODUCT_ANALYSIS.md` §5.2 关于 13-turn conversationTurns
- **不替代**：`lib/history-narratives/AUTHORING_PIPELINE.md`——narrative kernel 设计原则不变
- **延伸**：`docs/MVP_DECISIONS_LOG.md` 加新条目"2026-05-02 Story-First Pedagogy 立项"

---

## 10. Sign-off 决策点

请 Winston 决定：

1. **整体方向**：✅ go / ❌ no-go / ⚠️ revise
2. **Decision 1** (storyboard 手写 vs 生成)：A 手写 / B 自动 / 其他
3. **Decision 2** (问题检测位置)：A server / B 整合
4. **Decision 3** (synthesis 真问题数量)：A 2 个 / B 3 个 / C 1 个
5. **从哪个 Topic 先开始**：Magna Carta / Crusades / 其他
6. **谁写 Magna Carta storyboard**：我（前台 1-2 hr）/ agent / Winston 自己（最准但慢）

如果方向 ✅，我下一步就：
1. 写 Magna Carta storyboard（手写 + cosplay 节奏 + 真问题选择）
2. 改 prompt + state machine
3. 你 + Willow 跟它跑一遍验证
