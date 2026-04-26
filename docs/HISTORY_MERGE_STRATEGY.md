# History 模块整合方案 — Atlas Lab × 苏格拉底对话器

> **背景**：现在系统里有两个并行的"history 产品"：
> - **原 `/history`**（2026-04-25 凌晨 MVP 完工）：Magna Carta 单 Topic 苏格拉底深度对话 + Geography Section + Mastery Gate，~2040 LOC，已端到端跑通。**深度有了，广度只有 1 个**。
> - **新 `/atlas-lab/[viewId]`**（这周完工）：40 Topic 因果地图浏览 + 5 层 Annales + examPoints + 双语，**广度有了，深度不在**。
>
> **整合目的**：合并为一个正式的 history 产品 v1.0，预留 Vocab/Writing 接口。
>
> **作者**：综合 4 视角（PM / 教育 / 儿童心理 / 工程师）

---

## 0. Executive Summary

> **它们不是两个产品的择一，是同一个产品的两个面**。

原 `/history` 解决了"如何让一个 Topic 学得深"。新 `/atlas-lab` 解决了"40 个 Topic 怎么有秩序地呈现"。

**正确的整合不是合并代码，是合并产品逻辑**：

```
Atlas Lab     = 40 Topic 入口 + 横向因果浏览（"今天看哪个？"）
↓ 点 Topic
Topic Page    = Atlas 因果坐标 + 5 perspective 选项（"我已经看到这个 Topic 的轮廓"）
↓ 点"开始深度学"
Socratic Mode = 14-轮对话 + Geography Section + Mastery Gate（"我现在要真懂这个"）
↓ 通过 Mastery Gate
Atlas 已学    = ★ 已点亮 + XP 入账 + worldview 增量更新 + 桥词推到 Vocab
```

每个 Topic 都跑这条路径。1 个 Topic 30-45 分钟。一年下来 = **40 个 Magna Carta 级别的深度学习 + 一张完整的因果地图**。

这是中国 ESL 7 年级世界史竞品里**没有任何一家在做的产品形态**。

接下来 5 节：现状 / 整合洞察 / 4 视角分析 / 整合规格 / 第一周冲刺。

---

## 1. 现状盘点

### 1.1 原 `/history` — 苏格拉底深度对话产品（已上线）

**核心机制**：
- **14 轮苏格拉底对话**（不是 12-20，是 14 — 数据驱动 + 12-14 次 AI 调用）
- 4 阶段状态机：Intro → Conversation → Mastery → Complete
- AI 在 Turn 3、8 是 `ai-eval` 分支节点：读用户回答 → 路由到 2-3 条不同后续路径
- 自动推进 Turn（3 / 6 / 8 / 12 / 13）和需用户输入 Turn（1 / 2 / 4 / 5 / 7 / 9 / 10 / 11）

**已编码的 9 种 conversation moves（6/9）**：
| Move | 状态 | 落地 |
|---|---|---|
| `hook` | ✅ Turn 1 | Runnymede 校规类比 |
| `bridge-legal` | ✅ Turn 2 | 唐律疏议对比 |
| `bridge-religion` | ✅ Turn 4 | 教皇 vs 国王结构 |
| `bridge-property` | ✅ Turn 5 | 私产 vs 家国天下 |
| `geo` | ✅ Turn 6 | europe-1200 ↔ europe-modern map flip |
| `source` | ✅ Turn 7 | Clause 39 原文 + key terms 高亮 |
| `connect` | ✅ Turn 12 | Aristotle → 1215 → 1776 → 1948 历史接力 |
| `seal` | ✅ Turn 13 | "晚饭跟爸妈聊..." 家庭话题 |
| `provoke` / `roleplay` / `multiperspective` | ❌ 数据有，UI 未连 | 5 个 perspective 数据已写但不在 turn flow |

**Geography Section 5 子模块全部上线**：
- worldOrient（"在欧洲西北角的英格兰"）
- primaryMap（europe-1200 SVG 含 Runnymede pin）
- scaleAnchors（"整个英国 ≈ 中国湖南省" / "伦敦→Runnymede ≈ 北京→通州" / "英国 < 四川盆地"）
- whyMatters（200+ 字 English Channel 政治含义）
- chinaCompare（文字版，map 待 β）

**Mastery Gate 严格制（核心差异化）**：
- **拼写**：9 词随机抽 6，6/6 必须全过
- **定义**：4 概念抽 3，AI lenient eval（核心意思过 = 给过）
- **应用**：3 场景题抽 1（"校长不经听证开除学生 — 违反 Magna Carta 哪条原则？"），AI eval
- **不允许跳过 / 即时重试 / 不通过不算 Topic 完成**

**Untranslatable Terms 5 个（已实现）**：
- `sovereignty` / `liberty` / `republic` / `feudal` / `secular`
- 在 `lib/history-prompts.js` line 53 注入每轮 system prompt："**绝不**给中文翻译"
- ⚠️ 软约束（依赖 AI 听话），无 lexical filter 硬阻断

**4 层中英策略（部分实现）**：
- 教学层 / 对话层 / 史料层 / 输出层 4 档语言比例
- 通过 system prompt 控制（low/balanced/high 三个 EN level）
- ⚠️ 没有 token 级语言比例硬检测

**XP 经济（简化版已上线，完整版未做）**：
- 基础 100 + 必过 gate 75 = 175 XP（Topic 完成）
- ✅ XP 累积入 `vocabspark_v1.stats.xp` 全局池
- ❌ Multipliers（×1.5 noChineseHelp / ×1.3 onePass / ×1.1 voice）数据存在 UI 未连
- ❌ 中文助词消费（数据已有，UI 未做）— 文档明确 β 阶段做

**localStorage（共享 key）**：
- `vocabspark_v1.historyData = { completedTopics, userWorldview, stats }`
- 跟 vocab 共享 stats.xp 池

**桥词跨模块（半路通）**：
- Mastery 失败的词 → `bridgeReviewToVocab(reviewWords)` → 写到 `vocabspark_v1.wordInput`
- ⚠️ 单向推，无 acknowledge UI，Vocab 端可能没有专门 ingest 逻辑

**未连接 / 未实现**：
- ❌ Pet integration（数据有，没调 `triggerPetCelebrate`）
- ❌ Optional deep checks（teach-back / counterfactual / geo-inference）数据完整无 UI
- ❌ 通史脉络图（α 阶段做）
- ❌ Seminar 预演器（α 阶段做）
- ❌ 语音输入（α 阶段做）
- ❌ 其他 39 个 Topic（β 阶段做）
- ❌ Supabase 持久化（α 阶段做）

**关键资产**：
- `lib/history-topics.js` — 461 LOC, 完整 Magna Carta schema（含 9 词 + 4 概念 + 14 turn ai_seed + 5 perspective + 6 mastery checks）
- `lib/history-prompts.js` — 223 LOC, system + turn + 评估 + worldview seed
- `lib/history-storage.js` — 168 LOC, profile + worldview + topic 完成 + XP
- `pages/history.js` — 1186 LOC, 4 阶段 SPA + 内联组件
- `public/maps/world-base.svg` (164 KB) / `europe-1200.svg` (42 KB) / `europe-modern.svg` (37 KB)

### 1.2 新 `/atlas-lab/[viewId]` — 40 Topic 因果地图浏览器（已上线）

**核心**：
- 40 Topic（G5: 5 / G6: 7 / G7: 17 / G8: 11）覆盖 CA HSS-5/6/7/8 + AP-WHAP/USH/EUR
- 每 Topic 5 层 Annales 因果（L0 地理 / L1 气候 / L2 民生 / L3 制度 / L4 事件 + summary + antecedents/consequences）
- examPoints 7-11 项 / Topic（~350 个 bilingual 应试要点）
- 个人代入（家乡/现在客户端投影）
- 动态路由 SSG ~1.2 MB/页（之前 23 MB 单页）
- 双语全覆盖
- 162 自动化测试 + GitHub CI
- @vercel/analytics `atlas_view` + `atlas_star_pin_click`
- Onboarding tour + Map Legend + 三类 chip badge（core / AP 进阶 / 进阶）

**已存在的资产**：
- `lib/atlas-views.js` — 40 view 单一来源
- `lib/atlas-renderer.js` — 服务端 SVG 渲染
- `lib/atlas-projection.js` — 客户端坐标投影
- `data/atlas/views/*.js` — 40 view recipe
- `data/atlas/polities.js` (878 LOC) / `events.js` (~3000 LOC) / `features.js` / `civilizations.js`
- `data/atlas/historical-basemaps/world_*.geojson` (32 MB / 23 文件)
- `components/AtlasLabPage.js` (~456 LOC) / `HistoricalAtlas.js` / `CausalSummary.js` / `CausalityPanel.js` / `WorldLocator.js` / `MapLegend.js` / `AtlasOnboarding.js`
- `scripts/validate-atlas.mjs` (19 项检查) / `scripts/test-atlas-renderer.mjs` (162 tests)
- `.github/workflows/atlas-ci.yml`

**没有的**：
- ❌ Socratic 对话器
- ❌ Mastery Gate
- ❌ XP 经济（无写入）
- ❌ 持久化（关掉就重置）
- ❌ 桥词推 Vocab
- ❌ 用户身份接入

### 1.3 关键发现：两个不是替代，是互补

把两个产品按"产品逻辑"维度对照：

| 维度 | /history 原版 | /atlas-lab 新版 |
|---|---|---|
| 形态 | 时序对话 | 空间地图 |
| 范围 | 1 Topic 深度 | 40 Topic 广度 |
| 体验 | 30-45 分钟（一坐一个） | 5 分钟可看一眼 |
| 学习模式 | Active Recall + Mastery | Browse + Pattern Recognition |
| 数据驱动 | conversationTurns + masteryChecks | 5 layer causal + examPoints |
| 持久化 | localStorage 完成档案 | 无 |
| Bloom 层 | Apply / Analyze / Evaluate | Understand / Analyze |
| 跨模块 | 桥词 → Vocab（单向） | 无 |

**它们解的是不同的产品问题**：
- Atlas Lab 解 "**这一年学下来要走完这 40 个，怎么不迷路？**"（map / overview / 因果脉络）
- /history 解 "**今天选定的这一个，怎么学进去？**"（dialogue / depth / mastery）

**任何一个单独都不是完整产品**。Atlas 没深度（学生看完就忘 / 无 retention 机制），/history 没广度（只有 Magna Carta，第二个 Topic 学什么？）。

合并后才是完整 history 产品。

---

## 2. 核心洞察：历史产品的双层结构

最简单的整合表达：

```
        ┌─────────────────────────────────────┐
        │       Atlas Lab（横向层）            │
        │   40 Topic 时间序 + 因果坐标         │
        │   5 分钟逛 / 看脉络 / 选下一个学      │
        └──────────────┬──────────────────────┘
                       │ 点"深度学这个 Topic"
                       ▼
        ┌─────────────────────────────────────┐
        │     苏格拉底对话器（纵向层）          │
        │   14-轮对话 + Geography + Mastery    │
        │   30-45 分钟一坐一个 / 真懂          │
        └──────────────┬──────────────────────┘
                       │ Mastery 通过
                       ▼
        ┌─────────────────────────────────────┐
        │        回到 Atlas，★ 点亮            │
        │   XP 入账 + worldview 增量            │
        │   下一个 Topic 推荐                  │
        └─────────────────────────────────────┘
```

**这个结构的天然优势**：

1. **数据复用**：Atlas 的 5 层 Annales 因果 ≈ /history 的 Geography Section + bridgeAnchor。换句话说 — Atlas 已经把 39 个新 Topic 的"地理因果"内容预先备好了，只缺"对话脚本 + mustMemorize 词单"。

2. **examPoints ≈ mustMemorize**：Atlas 每个 Topic 的 7-11 examPoints 已经 bilingual 标注了应试要点。把它们标记下哪些是 mustMemorize gate 必背，剩下的当作 review pool。**几乎不需要新内容工作**。

3. **★ pin 因果链 ≈ conversation 时间线**：Atlas pin 的 antecedents/consequences 时间链已经给出了"connect"move 需要的历史接力（Atlas 已经在做"1066 → 1100 → 1204 → 1213 → 1215 → 1225 → 1265 → 1628 → 1689 → 1787"这种 trace），cross-Topic 跳转也已经做了。

4. **5 perspectives 在 Atlas 是 polity**：Magna Carta 的 5 角色（King John / 反叛男爵 / 农民 / 教皇 / Joan）↔ Atlas `europe-1215` 的 5 个 polity（England / France / HRE / Papal States / Iberia）。**视觉上同一张地图，对话时角色代入**。

5. **Geography Section 5 子模块 ≈ Atlas 5 层因果**：
   - worldOrient ≈ Atlas WorldLocator（家乡/现在/Topic）
   - primaryMap ≈ Atlas 主图（已是更精细的 polity 渲染）
   - scaleAnchors ≈ 新增（Atlas 没做"中国地理对比尺度锚定"，**这是要补的**）
   - whyMatters ≈ Atlas L0+L1 因果
   - chinaCompare ≈ Atlas L0+L3+L4 跨文明对比（部分有，bridgeAnchor 字段需新增）

**6 处共振 = 这两个产品几乎是为彼此设计的**。

---

## 3. 四视角综合分析

### 3.1 产品经理视角

#### 3.1.1 重新定位

**当下定位（含混）**：
- /history 在 nav 显示 "History Beta"，对外是"Magna Carta 试用版"
- /atlas-lab 在 nav 也是 History tab，对外是"40 Topic 地图"
- 用户会困惑："History 到底是哪个？"

**整合后定位**：

> **Know U. History = 一个产品的两层视图**
> - **Atlas 视图**（横向 / map）：看见 40 个文明转折点的因果脉络
> - **深度视图**（纵向 / dialogue）：用 30-45 分钟真懂其中一个

**对外文案统一**：
- Slogan: "AI 用你的世界讲历史"（继承）
- 一句话：「**走过 40 个文明转折点，每一个都用你熟悉的世界讲清楚**」
- 不再区分 atlas-lab vs history — 统一是 "Know U. History"，URL 是 `/history` 或 `/history/<topicId>`

#### 3.1.2 用户旅程设计

**Day 1 — 第一次进入**：
1. 着陆 `/history` → 看 Atlas Lab（40 Topic 全展开）
2. Onboarding tour 4 卡说明（"先看世界 / 40 个 Topic / 红星 = 因果焦点 / 中英切换"）
3. WorldLocator 显示家乡 + 现在
4. 默认聚焦 G7 拜占庭兴起 500 AD
5. 看一会儿，**底部浮起一张提示卡**："想真正懂这一个？开始 30 分钟深度学 →"
6. 点 → 进入 Socratic 14 轮对话流（即原 /history 的体验）
7. Mastery Gate 通过 → +175 XP + 桥词入 Vocab + ★ 在 Atlas 上点亮

**Day 2-30 — 持续使用**：
- 着陆 `/history`，看到 G7 已点亮 ★ 1 个（Byzantine），其他 16 个未亮
- 系统推荐："今天接着学 'Islamic Rise 750'？"
- 点 → 进对话流
- Mastery 通过 → 第 2 个 ★ 点亮
- 一年下来 = **40 个 ★ 全部点亮**（也可以自由乱序）

**这给到的产品张力**：
- "40 个 ★" 是终生收藏品（清晰、可见、可分享）
- 每个 ★ 背后是 30-45 分钟真坐下来想清楚过的内容
- 不是"看完就忘"的 60 节短视频，是"40 张深度通关卡"
- **跟同伴讲：「我把 7 年级世界史的 40 个 Topic 都通关了」** — 这是中学社交资本

#### 3.1.3 货币化设计

**当前货币化错配**：
- /history 完全免费（亲爹做给亲女儿）
- /atlas-lab 完全免费（公益定位）
- Vocab 是收钱的（Free 10 / Pro unlimited）
- Writing 完全免费但应该收钱

**整合后建议**：

| Tier | 内容 | 价 | 理由 |
|---|---|---|---|
| **Free** | Atlas 浏览全开（40 Topic 都能看 5 层因果 + examPoints） + 1 个免费深度学 Topic | $0 | 公益定位 + 试用钩子 |
| **History Pro** | 所有 40 Topic 深度学 + Mastery Gate + XP + worldview + 跨设备同步 + 老师作业 | $15/月 | 单 Topic 深度学是真值，付费有理 |
| **Bundle**（History + Vocab + Writing）| 以上全开 | $25/月 | 跨模块整合的家庭包 |

**核心定价心理**：
- **免费层不缩水**：Atlas 浏览 + examPoints 全开。家长看到的是"这个产品免费内容已经超过 IXL 同价位"
- **付费层卖深度**：14 轮对话 + Mastery Gate + worldview 增长 — 这是任何竞品都不做的内容
- **公益叙事 + 商业模式不冲突**：免费层是真免费（不是阉割版），付费层是真值（不是把免费拆掉的勒索）

#### 3.1.4 北极星指标

**旧（错的）**：
- /atlas-lab DAU
- /history Magna Carta 完成数

**新（对的）**：
- **Weekly Topic Mastery Rate** = "本周通过 Mastery Gate 的 Topic 数 / 用户"
- 目标：M1 = 1.5（每周通 1.5 个 Topic）→ 26 周 = 40 Topic 通关
- 这个指标既测留存（每周回来）+ 深度（要通过 Gate）+ 持续性（不是冲一周就停）

#### 3.1.5 营销叙事

**给家长的故事**：
> 「孩子回家说今天学了 Magna Carta，但说不清楚。家长追问也追不深。
> Know U. History 改变这个 — 孩子要么没学过，学过的话能讲清楚。
> 因为通关每个 Topic 都要通过：能拼写 9 个核心词 / 能定义 4 个核心概念 / 能用一个新场景应用这些概念。**做不到这些，Topic 就不算完成**。」

**给孩子的故事**：
> "40 个 ★，你拿哪些？"
> （游戏化叙事 / 收藏感 / 同伴可比性）

**双轨叙事的好处**：家长买的是"严格的学习"，孩子买的是"可以炫的成就"。两个用户、一个产品、不冲突。

#### 3.1.6 6 个月路线图

**M1（接下来 4 周）— 整合骨架**：
- W1: 数据 schema 合并（atlas view + history topic 字段对齐）
- W2: 把 14 轮对话引擎接到 Atlas Topic（先让 Magna Carta 跑通新流程）
- W3: 第 2 个 Topic 深度学跑通（建议 Tang/Song — Willow 的 home advantage）
- W4: Supabase 持久化（atlas_progress + history_completions）

**M2-M3（5-12 周）— 内容铺开 + 货币化**：
- 12 个 Topic 深度学跑通（覆盖 7 年级一学期）
- History Pro $15/月 上线
- 老师作业 deep-link

**M4-M6（13-26 周）— 全 grade 覆盖**：
- 40 Topic 全部深度学完成
- 跨 Topic 比较 / 时间滑块地图 / Seminar 预演器 / 语音输入

#### 3.1.7 风险

1. **风险**："双层视图"对小屏体验复杂 → **缓解**：移动端默认进入 Atlas 卡片视图（不渲染地图，只显 Topic chip + 因果摘要），桌面端默认地图视图
2. **风险**：14 轮对话写完 40 个 Topic 工作量爆炸 → **缓解**：Topic 数据 schema 模板化，AI 辅助生成 ai_seed，人审核，单 Topic 内容工作量 ~4-6 小时
3. **风险**：货币化时机过早，免费用户回流困难 → **缓解**：M1-M3 全开免费，M4 开始付费，给已有用户 grandfather rate
4. **风险**：原 /history Magna Carta 体验被改坏 → **缓解**：用 feature flag，旧路径保留半个月，对比数据再切

---

### 3.2 教育专家视角

#### 3.2.1 双层结构对应教育学

历史教育的两个根本任务：

| 任务 | 对应模式 | 心智活动 |
|---|---|---|
| **建立全局认知地图**（"这个时代和那个时代啥关系？"）| 横向浏览 / 时间序 / 因果脉络 | Pattern recognition / mental model building |
| **深度理解单一事件**（"为什么 1215 年发生了 Magna Carta？"）| 纵向对话 / Mastery / Active Recall | Deep processing / Schema construction |

学校历史课教学法早就在走这两层（教科书章节 = 纵向 + 单元导入 + 复习地图 = 横向），但**学校没有时间在每个 Topic 上花 30 分钟做苏格拉底对话**，老师只能用 PPT 讲。

**Know U. History 的产品级机会**：把学校做不到的"每 Topic 深度对话"系统化。

#### 3.2.2 Bloom 分类对照

| Bloom 层 | 学校教学（典型） | Know U. History 整合后 |
|---|---|---|
| Remember | 教材划重点 → 抽考 | examPoints + Mastery Gate 拼写测试 |
| Understand | 老师讲解 + ppt | Atlas 5 层因果摘要 + Geography Section |
| Apply | 课堂练习 | Mastery Gate 应用题（"校长不经听证开除..."）|
| Analyze | 单元测试 5 段论 | 14 轮对话中的 bridge / source / provoke move |
| Evaluate | 期末考论文（少数）| Mastery Gate 定义题 + α 阶段的 teach-back |
| Create | 几乎不做 | β 阶段的角色代入 + Counterfactual |

**整合后 6 层全开，且每层都有可量化反馈**。这个完整度在 K12 历史教育产品里**没人做到**。

#### 3.2.3 学习闭环（Dale's Cone of Experience）

主动学习留存率：Doing > Discussing > Watching > Reading > Hearing

**整合前**：
- /atlas-lab：Reading + Watching（30% 留存）
- /history：Doing + Discussing（80% 留存，但只 1 Topic）

**整合后**：
- Atlas 当 onboarding（30% 留存够用，反正后面会深度学）
- Conversation Mode 当深度（80% 留存，且 40 Topic 都走）

**关键设计原则**：Atlas 浏览的内容必须是**一个会被深度学覆盖的"剧透"**。学生在 Atlas 看 5 层因果 1 分钟，然后用 30 分钟在对话流里"重新构建"这个理解。**重复 + 主动 = 深度记忆**。

#### 3.2.4 三大教育学原则的对接

**Spaced Practice（间隔重复）**：
- 当前 /history 没接 SRS（事件层不做 SRS 是文档明确的）
- 但 mustMemorize 的词汇/概念 → 桥到 Vocab 模块的 SRS（已部分实现，需完善）
- **整合后机会**：用户多 Topic 学下来，过往学过 Topic 的核心概念 30 天后会在新 Topic 的 bridge move 里被自然 invoke（"还记得 1215 年的 due process 吗？现在 1689 年的 Bill of Rights 把它扩展成了..."），这是结构性的 spaced retrieval

**Retrieval Practice（主动检索）**：
- Mastery Gate 已是真主动检索（不是看一遍就过）
- α 阶段的 teach-back 是更高强度检索
- **整合后**：Atlas 上"已学 Topic"的 ★ 不只是奖牌，每个 ★ 点击 → 弹出 5 题 quick recall（"这个 Topic 的 5 词是哪 5 个？"），retention 验证

**Interleaving（穿插不同主题）**：
- 当前 Atlas Topic chips 按 grade + 时间排序（线性）
- **整合后机会**：Mastery Gate 通过后的"下一个推荐"算法可以**主动 interleave**：刚学完 Magna Carta 1215 → 推荐 Tang/Song 1000（前置时代 + 完全不同地理）而不是 Mongol 1241（顺序紧邻）。这种"远距离迁移"是 interleaving 的精髓

#### 3.2.5 AP DBQ 训练对接

40 Topic × 5 层因果 + Mastery Gate 应用题 = **天然 DBQ 训练量**。

具体落地：
- 应用题（mastery gate 第三关）= 简化版 DBQ：给 1 段史料 + 1 个新场景，让学生用刚学的概念分析
- 14 轮对话中的 source move（Turn 7-8）= 真原始史料分析训练
- 14 轮中的 provoke move（待加） = 反方观点对练，正是 DBQ 的"counterargument"训练

**目标**：一个用户走完 40 Topic = 写过 40 次简化 DBQ + 看过 40 段原始史料 + 做过 40 次 5 perspective 角色代入。**这就是 9 年级正式 DBQ 训练前最好的 grounding**。

#### 3.2.6 Vocab/Writing 接口（要预留的）

**Vocab 接口**：
- 当前：mustMemorize 失败词 → `vocabspark_v1.wordInput`（单向，无 ack）
- 整合后建议：
  - 通过的 mustMemorize 词也推（不只失败的）
  - 加 source 标签 `{ word, source: "history:magna-carta", contextSentence }`
  - Vocab 端识别 source 后，生成的 cloze passage 优先用历史 context（"After King John signed the document, the barons ___ his decision"）— 实现"vocab 学的句子是历史事件" 的反向闭环
- 数据契约（schema）：

```js
// vocab.bridgeQueue (NEW)
{
  word: "tyranny",
  source: { module: "history", topicId: "magna-carta-1215", sourceSentence: "..." },
  priority: "must-memorize" | "review-error" | "context",
  pushedAt: "..."
}
```

**Writing 接口**：
- 整合后建议：每个 Topic 完成后**触发** Writing prompt 推荐
- prompt 内容直接用 Atlas 的 5 perspective + L4 events
- 例：「你刚学完 Magna Carta。现在用 200 字写：『如果你是反叛男爵，你会签 New Echota 吗？』」
- 数据契约：

```js
// writing.promptSuggestions (NEW)
{
  topicId: "magna-carta-1215",
  promptText: { cn: "...", en: "..." },
  perspectiveOptions: ["king-john", "rebel-baron", ...],
  rubricFocus: ["evidence", "counterargument"],
  triggeredAt: "after-topic-complete"
}
```

**Reading 接口**（暂不实施但留 schema）：
- Atlas Topic 的 primarySources（Clause 39 / Galileo letter / 95 Theses 等）→ Reading 模块的内容源
- α 阶段不做，γ 阶段激活

#### 3.2.7 教育学风险

1. **风险**：14 轮对话对发散性孩子可能"过深"（Willow 文档说她"怕高压"）
   - **缓解**：每轮 ≤ 80 字 / 前 3 轮必须有 wow / Mastery Gate 即时重试不允许跳过但可中断后回来
   
2. **风险**："深度优先" vs "覆盖优先"两难（学 1 个 Topic 30 分钟太多，但只学浅又没意义）
   - **缓解**：双层视图明确分工 — 不学的 Topic 也通过 Atlas "看到"了（5 分钟看 5 层因果，比啥都不知道好），学的 Topic 是真懂

3. **风险**：mustMemorize 词单可能跟学校教材脱节（Willow 老师讲的不一定是这 9 个）
   - **缓解**：每 Topic 的 mustMemorize 跟 IMPACT California Grade 7 教材标准对照（HISTORY_RESEARCH_REPORT 已确认教材是 McGraw-Hill IMPACT 2019）

---

### 3.3 儿童心理学视角

#### 3.3.1 Erikson 阶段：Identity vs. Role Confusion（12-13 岁）

这个年龄的孩子正在构建"我是谁"。具体表现：
- 强烈同伴敏感（同学怎么看 > 家长怎么看）
- 试探不同身份（cosplay / fanart / 偶像迭代）
- 拒绝"被定义"
- 自主感超敏感

**整合后产品对这个阶段的支持**：

1. **40 ★ 收藏感** = 身份建立的具体物（"我是把 7 年级世界史 40 个都通关的人"）
2. **5 perspective 角色代入** = 试探不同身份的安全空间（你是反叛男爵 / 教皇 / 农民 / Joan / King John — 这是身份探索的健康投射）
3. **家乡 + 现在的个人代入** = 不偏中国不偏美国，**双 anchor**身份
4. **Atlas 浏览 vs 深度对话的选择权** = 自主感（"今天我决定逛 5 分钟 vs 坐下深学 30 分钟"）
5. **Mastery 不允许跳过但可重试** = "严格但温柔"（既给框架感安全，又给"失败不是终点"安全）

**关键设计原则**：**任何看起来像"被强制"的环节都会触发 7 年级孩子的自我保护**。"必过制" 的产品语言要小心：
- ✅ "通过这一关就到下一个 Topic" — 给路径感
- ❌ "你必须通过" — 触发对抗
- ✅ "这个 Topic 还差 1 个概念你就通关了" — gamification framing
- ❌ "你失败了，重做" — 羞辱感

#### 3.3.2 发散型孩子（Willow 性格画像）的产品适配

Willow 描述："发散开朗、怕高压、不爱枯燥记录"。这是典型的 **ADHD-leaning** trait 的礼貌描述。

这类孩子的产品痛点：
- **执行功能弱**：想做但开始不了
- **time blindness**：30 分钟感受不到
- **dopamine 寻求**：看起来好玩才会 onload
- **羞耻敏感**：失败 / 落后反应远比平均强
- **过专注 vs 走神切换**：要么 3 小时入迷，要么 5 秒走神

**整合后产品针对这个画像的设计**：

1. **Atlas 当 onload 钩子**：第一秒看到的是地图 + 颜色 + 红星 + 个人代入，不是"今日学习任务"。这是 dopamine pleasing。
2. **Topic 进入有"3 分钟版" + "30 分钟版"切换**：
   - 3 分钟版：5 层因果摘要 + 关键 1 张地图 + 1 个 ★ pin = 快速吃下
   - 30 分钟版：完整 14 轮对话 + Mastery Gate
   - 同一个 Topic，两个深度，孩子根据当下精力选
3. **Mastery Gate 三关分开**：拼写 / 定义 / 应用 各自能"今天先做拼写，明天接着做定义"
4. **每轮 ≤ 80 字**：避免发散孩子的 wall of text 阻塞
5. **Streaming character-by-character 显示** AI 回复（已实现）：让等待变成视觉反馈
6. **失败后 5 秒自动给下一题**（已实现）：阻止孩子在错误上反刍

#### 3.3.3 Self-Determination Theory 三要素

**Autonomy（自主感）** — 整合后强：
- 40 Topic 自由选 ✓
- 中文桥可用 ✓
- Atlas 浏览 vs 深学切换 ✓
- 5 perspective 选择 ✓
- 移动端 / 桌面端默认视图自适应 ✓

**Competence（胜任感）** — 整合后中等：
- Mastery Gate 通关感 ✓
- ★ 收集感 ✓
- XP 累积 ✓
- 雷达图（来自 Writing 模块）—— 整合后可显示在 history 完成屏 ⚠️
- **缺**：跨 Topic 的"成长曲线" — 第 5 个 Topic 通关比第 1 个快 / 第 10 个错误率比第 1 个低 — 这种对比反馈孩子需要看到（建议加"我的成长" tab）

**Relatedness（关联感）** — 整合后弱：
- Topic 完成后家庭话题 cards（"晚饭跟爸妈聊..."）✓
- **缺**：同伴可见 — 没有"分享 ★ 进度"的方式
- **缺**：老师可见 — 没有 assignment 系统
- **建议**：分享卡片（Topic 通关后生成 1 张图："Willow 通关了 Magna Carta · 9 词 + 4 概念 + 1 个反事实场景 · 2026-04-25"），可分享到微信 / iMessage / Snapchat

#### 3.3.4 Co-creator 身份（Willow 元层）

她不是 user，是 co-creator。整合后的产品故事必须包含这个事实。

**具体表达**：
- About 页 / Onboarding tour 第 0 卡：「这个产品是 Winston 跟他 12 岁女儿 Willow 一起做的」
- 每次重大更新："Willow 怎么说"小卡片
- 每个 Topic 的 ai_seed 调试是父女一起做（让 Willow 自己写 hook 文案）
- 让 Willow 自己出 30 秒视频："我对这个 Topic 的真实感受"（每 5-10 个 Topic 出 1 个）

**心理资本回报**：
- Agency 拉满：她不是用户，是作者之一
- 简历资本：未来申请大学的 origin story
- Resilience：产品不好用她会主动反馈而不是放弃
- 同伴嫉妒（健康）："我朋友 Willow 跟她爸做了一个 app"

#### 3.3.5 Failure-Safe 设计（整合层面）

| 触发 | 当前反应 | 整合后建议 |
|---|---|---|
| Mastery 拼写错 | 5 秒后自动下一题 | ✓ 保持 |
| Mastery 定义不过 | AI 给 hint 重试 | ✓ 保持 |
| Mastery 应用题不会 | ⚠️ 不清楚（需测） | 加"看提示卡"按钮 |
| 14 轮对话中走神跑 | 当前是断点续传 ✓ | 保持 + 显示"上次到第 X 轮" |
| 一周不开 | 无 | **不要 push notification**！等她自己回来 |
| 7 天不开 | 无 | 家长后台 alert（但 Willow 看不到） |
| 多设备 → 数据不同步 | localStorage 单设备 | 整合后 Supabase 解决 |

**核心原则**：**任何"你落后了 / 你做错了 / 你忘了"的信号都不要发给孩子**。失败感是发散型孩子最大的回头杀手。

---

### 3.4 全栈工程师视角

#### 3.4.1 整合策略：合并代码 vs 双轨保留

**两个选项**：

**Option A（推荐）：Atlas 是默认入口，深学是 mode**
- `/history` redirect 到 `/atlas-lab` （或合一为 `/history`）
- `/history/[topicId]` 进 Atlas Topic 详情页
- 该页底部"开始深度学" 按钮 → enter Conversation Mode（在同一页 swap UI）
- Mastery Gate 通过 → swap 回 Atlas + ★ 标记

**Option B：双 URL 共存**
- `/atlas-lab/[viewId]` 是横向浏览
- `/history/[topicId]` 是纵向深学
- 互相 link

**为什么选 A**：
- 用户不该感受到"两个产品"
- URL 整合后 SEO 单一（History 是一个产品，不是两个）
- BrandNavBar 只 1 个 History tab，不分 Atlas/History
- 数据流单一（user 在 1 个 page 内的跳转，不需 cross-page state）

#### 3.4.2 数据 schema 合并

**当前两个 schema 的对应关系**：

```
                                Atlas view              /history Topic
                                ─────────────          ───────────────
id                              ✓ id                   ✓ id
title                           ✓ title.cn/.en         ✓ title.en/.cn
year                            ✓ year                 ✓ year
grade                           ✓ grade                — (推断 from curriculumUnit)
camera                          ✓ camera               — (Geography 子模块隐含)
layers                          ✓ layers (L0-L4)       — (history 是对话不是图层)

5 层因果                         ✓ causalSummary +     bridgeAnchor + Geography.whyMatters
                                  pin causality
examPoints                      ✓ examPoints (~8/Topic) ↔ mustMemorize.vocab + concepts
standardsAlignment              ✓ AP-WHAP/USH/EUR        ↔ curriculumUnit (CA HSS-7.6.5)

— (atlas 没有)                                          ✓ conversationTurns (14 turn)
— (atlas 没有)                                          ✓ masteryChecks (3 必 + 3 可)
— (atlas 没有)                                          ✓ perspectives (5 角色)
— (atlas 没有)                                          ✓ primarySources (Clause 39/40)
— (atlas 没有)                                          ✓ writingPrompts (DBQ-mini)

地图 SVG 资产                    ✓ topojson + geojson    ✓ public/maps/*.svg (3 张)
```

**合并方向**：

```js
// 新统一 schema (lib/atlas-views.js 升级)
export const VIEW = {
  // ── 来自 atlas（已有）──
  id, grade, topicTier, tierType, standardsAlignment,
  title, subtitle, year,
  camera, layers,
  causalSummary, examPoints,

  // ── 来自 /history（要补的）──
  curriculumUnit,        // "7th-grade/medieval-europe"
  bridgeAnchor: {        // 中国史锚点 + divergence
    cn: "唐律疏议",
    bridgeType: "weak",
    divergenceNote: "..."
  },
  geographyExtension: {  // Atlas 没有的 scaleAnchors + chinaCompare
    scaleAnchors: [...],
    chinaCompare: { otherMap, readNote }
  },
  mustMemorize: {        // examPoints 的子集 + 概念
    vocab: [{ word, definitionEn, definitionCn, untranslatable }],
    concepts: [{ id, defEn, defCn }]
  },
  primarySources: [...],
  conversationTurns: [...],   // 14 个
  perspectives: [...],
  masteryChecks: [...],
  writingPromptSuggestions: [...]  // 整合 hook
};
```

**实施策略**：
- 数据填充工作分级：
  - 已 Magna Carta 完整填好（lib/history-topics.js → 迁到 lib/atlas-views.js 或 data/atlas/views/magna-carta.js）
  - 其他 39 Topic 的 conversationTurns + mustMemorize + primarySources 是新内容工作
  - 单 Topic 新增 4-6 小时（AI 辅助 ai_seed 生成，人审核）
  - 40 Topic 全部填完 = 200-240 小时（约 2-3 个月 1 人 part-time，或 1 个月全力）

#### 3.4.3 代码合并方案

**Step 1：把 /history 的核心抽出来**
```
lib/history-prompts.js → 不动（继续被 Conversation 用）
lib/history-storage.js → 重命名 lib/history-progress.js（更清楚），扩展支持 Atlas progress
lib/history-topics.js → 部分内容 merge 到 data/atlas/views/magna-carta.js，部分作 lib/topic-extensions.js
pages/history.js (1186 LOC) → 拆三块：
  - components/HistoryConversation.js（14 轮对话引擎）
  - components/HistoryMasteryGate.js（3 关 mastery）
  - components/HistoryCompletion.js（完成屏）
```

**Step 2：把 Atlas 升级到 host history**
```
components/AtlasLabPage.js 加新 prop `mode`：
  - "browse"（默认）：当前的 Atlas Lab UI
  - "conversation"：渲染 HistoryConversation 接管
  - "mastery"：渲染 HistoryMasteryGate
  - "complete"：渲染 HistoryCompletion

pages/atlas-lab/[viewId].js 加 query param `?deep=1`
  → 自动进入 conversation mode
  → URL 变 /atlas-lab/magna-carta?deep=1
```

**Step 3：路由整合**
```
pages/history.js (旧) → 删除 / redirect to /atlas-lab
pages/atlas-lab/[viewId].js → 改为 pages/history/[topicId].js
pages/atlas-lab.js → redirect to /history (默认 G7 第一 Topic)
next.config.js redirects() 加 /atlas-lab → /history
BrandNavBar history tab 指 /history
```

**Step 4：删旧 SVG 资产**
```
public/maps/world-base.svg / europe-1200.svg / europe-modern.svg
→ 检查是否还被 Geography Section 引用
→ 如果可被 Atlas 的 SSR SVG 替代，删除
→ 如果是 chinaCompare 的对比图，保留
```

#### 3.4.4 数据迁移策略

**localStorage 兼容**：
```js
// 读时兼容旧 key
const old = localStorage.getItem('vocabspark_v1');
const oldHistoryData = JSON.parse(old).historyData;
const oldCompletedTopics = oldHistoryData?.completedTopics || {};

// 新 schema 写入
const newHistoryData = {
  ...oldHistoryData,
  completedTopics: oldCompletedTopics,  // 保留
  atlasProgress: {},                     // 新加
  schemaVersion: 2,
};
```

**Supabase（α 阶段加）**：
```sql
-- 跟之前 PRODUCT_SYNTHESIS_2026Q2.md 设计的一致
atlas_progress (user_id, topic_id, last_viewed_at, view_count, star_pin_clicks JSONB)
history_completions (user_id, topic_id, completed_at, mastery_results JSONB, transcript JSONB, xp_earned)
atlas_bookmarks (user_id, topic_id, pin_id NULL)
atlas_assignments (id, teacher_id, student_id, topic_id, due_at)
learning_events (id, user_id, module, event_type, ref_id, payload JSONB)
```

#### 3.4.5 测试合并

**当前**：
- Atlas: 162 自动化测试（renderView smoke, view contract, JSON serializable）
- /history: 0 测试

**整合后必须加**：
1. **Conversation engine smoke**：14 轮 turn 的 ai_seed 都能正常发送 + 收响应
2. **Mastery Gate flow**：3 关 spelling/definition/application 的 happy path + failure path
3. **Cross-mode transition**：browse → conversation → mastery → complete → browse 完整路径
4. **Supabase write**：模拟 user 通过 mastery，触发 atlas_progress + history_completions 写入
5. **桥词 push**：mustMemorize 完成后 vocab.bridgeQueue 有正确 entry

跑 `npm run test:atlas` 前置 `npm run test:history`。

#### 3.4.6 性能 & SEO

**SEO 整合后**：
- 单一 root URL `/history`
- Per-Topic URL `/history/magna-carta`（之前是 `/atlas-lab/magna-carta`）
- Per-Topic OG 图（之前 PRODUCT_SYNTHESIS 提过的 @vercel/og 方案）
- 单个 Topic 完整 metadata：title / description / og:image / structured data

**性能**：
- Atlas SSG 已优化（1.2 MB / page）
- Conversation Mode 首次进入需加载 ai_seed + perspective + masteryChecks，约 +50KB / page
- Total: ~1.3 MB / page，仍可控
- AI 调用：14 轮 × $0.05/调用 = $0.7 / Topic 完整深学，单用户 40 Topic = $28 LLM cost
- Pro $15/月 × 12 月 = $180 收入 — LLM cost ratio 15.6%，健康

#### 3.4.7 Vocab/Writing 接口（预留）

**Vocab 接口（W3 实现）**：
```js
// 在 mastery gate 通过后调用
import { pushBridgeWords } from '../lib/vocab-bridge';

await pushBridgeWords({
  userId,
  source: { module: 'history', topicId: 'magna-carta' },
  words: mustMemorize.vocab.map(v => ({
    word: v.word,
    contextSentence: getRandomTurnContext(transcript, v.word),
    priority: 'must-memorize',
  })),
});
```

**Writing 接口（W4 实现）**：
```js
// Topic 完成后浮起卡片
import { suggestWritingPrompt } from '../lib/writing-bridge';

const prompt = await suggestWritingPrompt({
  userId,
  topicId,
  perspective: chosenRoleplay,  // user 选的代入角色
  level: userWritingLevel,
});
// 显示卡片："想写一篇 200 字关于这个 Topic 的反思吗？"
```

#### 3.4.8 风险（工程师视角）

1. **风险**：14 轮对话引擎接到 Atlas 上后，原 /history 的 4 阶段状态机不适配 Atlas 的 React 组件树
   - **缓解**：Conversation 不入侵 Atlas 主结构，作为 modal-like overlay；保留 phase enum 但管理在 hook 里

2. **风险**：lib/history-topics.js 的 Magna Carta 数据迁到 atlas-view 后，原 /history 跑不通
   - **缓解**：双写过渡 — 两边 schema 都填值，等所有引用都迁移再删

3. **风险**：Supabase schema 一上线，老 localStorage 用户登陆后数据迁移需小心
   - **缓解**：登录时 server-pull → localStorage merge with server authority（vocab v5 已有这个 pattern，复用）

4. **风险**：40 Topic conversationTurns 内容工作量爆炸
   - **缓解**：Topic schema 模板化 + AI 生成 ai_seed first draft + 人审核 + 用过的 turns 模板可被新 Topic 复用（hook / bridge / source / connect / seal 是结构性的，replay 模板 OK）

5. **风险**：移动端双层视图在 320px 屏挤
   - **缓解**：mobile 默认进 chip + 因果摘要的 list view（不渲染 SVG），桌面默认地图

---

## 4. 整合产品规格

### 4.1 用户旅程（详细 spec）

**进入 `/history`（默认 G7 第一个 Topic）**：

```
┌─────────────────────────────────────────────────┐
│  [BrandNavBar: Vocab Writing History Beta]      │
├─────────────────────────────────────────────────┤
│  Atlas Lab 标题 [G5][G6][G7][G8]                │
│  Topic chips（按时间 + tier badge）              │
│  Layer toggles（中/EN · 历史/现代 · 5 layer）    │
├─────────────────────────────────────────────────┤
│  [WorldLocator 家乡/现在/Topic]                 │
├─────────────────────────────────────────────────┤
│  Topic 标题 + 副标题                              │
│  ⛰️ 地理 / 🌡️ 气候 / 🌾 民生 / ⚖️ 制度 / ⚡ 事件 │
│  对应课标 chips                                   │
├─────────────────────────────────────────────────┤
│  Map Legend                                      │
├─────────────────────────────────────────────────┤
│  SVG 大地图 (1000×600)                           │
│  ★ pin / 普通 pin / 个人代入 marker             │
├─────────────────────────────────────────────────┤
│  💡 想真正懂这个 Topic？                          │
│  [开始 30 分钟深度学 →]                          │
├─────────────────────────────────────────────────┤
│  🎯 考试要点 (8) [展开]                          │
├─────────────────────────────────────────────────┤
│  CausalityPanel（点 ★ pin 后浮起）              │
└─────────────────────────────────────────────────┘
```

**点 "开始 30 分钟深度学 →"**：
- 浮起 modal-overlay：「这个 Topic 30-45 分钟，过程中会问你 14 个问题，最后要通过 3 关。准备好吗？」
- 选 "现在开始" → 进入 Conversation Mode（同 URL，加 ?deep=1 query param）
- 选 "稍后再说" → 关 modal

**Conversation Mode（在同一页面 swap UI）**：

```
┌─────────────────────────────────────────────────┐
│  [BrandNavBar 不变]                             │
├─────────────────────────────────────────────────┤
│  小化的 Topic 标题 + 进度条 (Turn X / 14)        │
├─────────────────────────────────────────────────┤
│  [Geography Section 5 子模块（可折叠/展开）]     │
├─────────────────────────────────────────────────┤
│  Conversation 流（Turn 1 → Turn 14）             │
│  AI 气泡（左，🦉 暖羊皮纸）                      │
│  用户气泡（右，宠物头像 + accent 橙）            │
│  Source Card（Turn 7 时插入）                   │
│  Map Flip（Turn 6 时显示 1200 ↔ 现代）           │
├─────────────────────────────────────────────────┤
│  输入框（Cmd+Enter 提交） / [开始记忆考核 →]    │
└─────────────────────────────────────────────────┘
```

**Mastery Gate（Turn 14 后）**：
- 拼写测试（6/9 词随机）→ 6/6 必过
- 定义复述（3/4 概念随机）→ AI lenient eval
- 应用题（1/3 场景随机）→ AI eval

**Completion**：
- 🏆 金奖杯印章 + +175 XP（多+加成）
- "800 年传承"文案
- 📨 家庭话题卡："晚饭跟爸妈聊..."
- ★ 在 Atlas 上点亮（路由回 `/history/<topicId>` 看到点亮）
- 桥词推送提示："4 个核心词已加入 Vocab 学习队列"
- Writing 推荐卡："想写一篇 200 字关于这个 Topic 的反思吗？"
- 下一个 Topic 推荐卡：「明天接着学 Tang/Song 1000？」

### 4.2 数据模型合并（具体 schema）

见 §3.4.2。核心：现有 atlas-view schema + history-topic 字段合并为一个完整 view recipe。

### 4.3 UI 整合优先级

**Must（M1）**：
- BrandNavBar 单一 History tab
- Atlas 当默认 / Conversation 当 mode
- Magna Carta 跑通新流程（最小验证）

**Should（M2）**：
- 第 2-3 个 Topic 跑通（验证可复制性）
- 桥词推 Vocab 完整流（含 ack + context sentence）
- Mobile 视图分支

**Could（M3）**：
- 跨 Topic "下一个推荐"算法
- Writing prompt 推荐
- 老师 assignment

**Won't（M3 之外）**：
- 通史脉络图（β）
- Seminar 预演器（β）
- 语音输入（α 末）
- Reading 模块独立（γ）

---

## 5. 迁移路线图（4 周）

### W1 — 数据层合并 + Magna Carta 跑通新流程

| Day | Task | 验收 |
|---|---|---|
| Mon | data/atlas/views/magna-carta.js 加全套 history 字段（conversationTurns / mustMemorize / perspectives / primarySources / masteryChecks）| `npm run validate:atlas` 通过 |
| Tue | components/HistoryConversation.js 抽出（从 pages/history.js 1186 LOC 中拆 14 轮对话引擎 + Geography Section）| Magna Carta 在新组件里跑通对话 |
| Wed | components/HistoryMasteryGate.js 抽出 + components/HistoryCompletion.js 抽出 | 单 Topic 端到端：Atlas → Conversation → Mastery → Complete |
| Thu | AtlasLabPage 加 mode prop ("browse" | "conversation" | "mastery" | "complete")| /history/magna-carta 默认 browse；?deep=1 进 conversation |
| Fri | localStorage 兼容层：旧 historyData 自动迁移 + dual-write | 已有 Magna Carta 完成记录的用户登录后看到 ★ 点亮 |

### W2 — 第 2 个 Topic 验证可复制性

| Day | Task |
|---|---|
| Mon | 选 Tang/Song 1000 Topic（home advantage）— 写 14 轮 conversationTurns（AI 辅助 + 人审核）|
| Tue-Wed | 写 mustMemorize（9 词 + 4 概念）+ primarySources + masteryChecks + bridgeAnchor + scaleAnchors + chinaCompare |
| Thu | 在 dev 跑通 Tang/Song 完整流程；调 ai_seed |
| Fri | Willow 试用 Tang/Song（home advantage 第一次实战）→ 收集反馈 |

### W3 — 桥词跨模块完整流 + Mobile 视图

| Day | Task |
|---|---|
| Mon | lib/vocab-bridge.js 实现 pushBridgeWords + Vocab 端 ingest |
| Tue | Mastery 通过后浮 toast："4 个核心词加入 Vocab 学习队列"+ 链接跳 Vocab |
| Wed | Mobile 视图分支：&lt;640px 默认 chip + summary list view |
| Thu | OG 图自动生成（@vercel/og）— 每 Topic 1200×630，含地图 + 标题 |
| Fri | 第 3 个 Topic（Black Death）数据填充 |

### W4 — Supabase 持久化 + 老师作业 + 整合发布

| Day | Task |
|---|---|
| Mon | Supabase schema 上线（atlas_progress + history_completions + atlas_bookmarks + atlas_assignments + learning_events）|
| Tue | localStorage → Supabase 同步层（vocab v5 pattern 复用）|
| Wed | URL pin state（教师 deep-link）+ atlas_assignments 简版 UI |
| Thu | History Pro $15/月 订阅页（plan.js 加 tier）|
| Fri | 整合后版本上线 + 公告 + Willow + 朋友试用收集反馈 |

---

## 6. 第一周冲刺（Monday morning 开干）

### Monday 上午

```bash
# 1. 创建分支
git checkout -b feat/history-merge-v1

# 2. 把 Magna Carta 的 history 字段补到 atlas view
# 编辑 data/atlas/views/magna-carta.js
# 加：bridgeAnchor + scaleAnchors + chinaCompare + mustMemorize + 
#     primarySources + conversationTurns + perspectives + masteryChecks

# 3. 验证
npm run validate:atlas
npm run test:atlas

# 4. 浏览器看
open http://localhost:3000/atlas-lab/magna-carta
```

### Monday 下午

```bash
# 1. 拆 conversation engine 出来
mkdir -p components/history-engine
# 把 pages/history.js 的 conversation 部分抽到
# components/history-engine/HistoryConversation.js

# 2. 在 AtlasLabPage 中加 mode 状态
# components/AtlasLabPage.js 加：
# const [mode, setMode] = useState('browse')
# 根据 query.deep=1 自动切换到 'conversation'

# 3. 在 Atlas Topic 页底部加按钮
# "开始 30 分钟深度学 →"
# 点击 → router.push('/atlas-lab/[topicId]?deep=1')
# 或同页 setMode('conversation')

# 4. 验证 Magna Carta 在新流程能跑通
```

### Monday 晚上 — 给 Willow 试用

- 让 Willow 走一遍：Atlas → 点深学 → 14 轮 → Mastery → Complete → 看 ★ 点亮
- 观察她的反应：这个流程感是不是符合"先看 5 层因果，再深度学一个" 的产品逻辑？
- 收集 1-3 条反馈调 Tuesday 再改

---

## 7. 一句话结论

**Atlas Lab + 原 /history 不是两个产品的择一，是同一产品的两层视图**。

- **Atlas 是 width**（40 Topic 因果坐标）
- **Conversation 是 depth**（单 Topic 14 轮 + Mastery）
- **桥词 / 雷达 / XP / Pet** 是它们和 Vocab/Writing 模块的预留接口

整合后产品的对外故事 — 不是"Magna Carta 试用版"，不是"40 Topic 看一眼"，而是：

> **"40 个文明转折点，每一个都用你熟悉的世界讲清楚。一年下来 = 40 张深度通关 ★。"**

接下来 4 周不是写更多功能，是**把已有的两层焊成一个产品**。

W1 Magna Carta 跑通新流程 → W2 Tang/Song 验证可复制性 → W3 桥词 + Mobile + OG → W4 Supabase + 订阅 + 公告。

Willow 是这个产品最重要的人。从 Magna Carta 1 个 Topic，到一年后 40 个 ★ 全亮 — 这是一段值得放进她大学 essay 的旅程。

睡个好觉。Monday morning 从 magna-carta.js 加字段开始。
