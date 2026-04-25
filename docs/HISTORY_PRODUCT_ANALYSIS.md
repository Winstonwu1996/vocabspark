# Know U. Learning — History 模块产品分析与设计方案

_Created: 2026-04-24 by Winston + Claude_
_状态: 战略已锁 (Plan B)，待拍板 MVP 范围与首单元_
_前置: `docs/HANDOFF.md`（基础架构）+ `docs/HANDOFF_HISTORY_MODULE.md`（首版交接）_

---

## 0. 决策概览（一页纸）

| 维度 | 决策 |
|---|---|
| **首位用户** | Willow，13 岁，Irvine 公立初中 7 年级，China→US 一年内 |
| **目标用户群** | 类似画像 — 7-9 年级、近期赴美、华人家庭、备考意识强 |
| **核心痛点** | 世界史是 ESL 中国孩子的重灾区（语言+文化+思维三层缺失叠加） |
| **战略定位** | "以历史为脊柱，整合阅读/词汇/写作的备考体系"（不是单纯的历史课） |
| **架构决策（Plan B）** | Topic 数据中枢按完整脊柱化设计；首版 History 单独跑通；Reading/Vocab/Writing 联动留接口、暂不实施 |
| **首版课程范围** | 7 年级 California 课纲 "Medieval and Early Modern Times"（500-1789） |
| **首版形态** | 苏格拉底对话器（非状态机）+ 固定地理模块 + 通史脉络图 |
| **首版语言策略** | 4 层中英分层（教学层中文为主 / 输出层强制英文）+ 时间轴上的英文比例迁移 |

---

## 1. 诊断 — 为什么世界史是中国孩子的重灾区

### 1.1 不是"学得不够多"，是**三层缺失同时叠加**

| 层 | 缺什么 | 数学/科学有这个问题吗？ |
|---|---|---|
| **语言负载层** | 历史教材的 Lexile 比同年级科学高 100-200 点；抽象名词密度爆表（sovereignty, mercantilism, doctrine, hegemony）；复合从句套从句、模态对冲 | 数学不缺；科学有但术语闭合可查 |
| **文化锚点层** | 缺地理直觉、宗教典故（David vs. Goliath / Exodus / render unto Caesar）、公民神话（founding fathers / Constitution as living debate） | 数学不缺；科学也几乎不缺 |
| **思维方法层** | 中国训练"证据→正确答案"；美国课堂训练"证据→自造能站住的论点"。DBQ / Socratic seminar 是反向训练 | 数学也有差，但远小于历史 |

数学只缺第三层（考试技巧），所以补 3-6 个月可拉回；**历史三层都缺，且互为前提**，按常规节奏会越拉越远。

### 1.2 雪上加霜 — 历史是少数会"复利衰减"的学科

数学单元相对独立，落后了集中补能拉回；历史**每个新单元都假设你掌握了前一个**：Reformation → 必须先懂 Renaissance → 必须先懂中世纪和罗马遗产 → 美国独立 → 必须先懂 Locke 的启蒙思想 → ……

这就是为什么很多 Irvine 家长发现：**孩子刚来时数学很快追上、ESL 一年内出班，但历史成绩 4 年下来在 B-/C+ 浮动**。每年差距不是学习时间问题，是基础没补就被推进下一层的结构性后果。

### 1.3 隐性的第四层 — 身份认同摩擦

美国历史叙事自带 "**our** founding fathers / **we** won the Revolution / **our** Constitution" 的情感色彩。中国移民孩子坐教室里没人不友好，但叙事框架本身把她排在外圈，导致历史课在情感层面变成"不属于我的科目"。数学没这个问题。

---

## 2. 教育学方法论 — 5 个根本方法

每个方法解的是上面四层缺失里的一层。

### 2.1 双历史桥接（解锚点缺失）

**思路：** 利用 Willow 已有的中国史密集网格（朝代/人物/典故），作为西方史的脚手架。

**关键技术细节：分歧点比相似点更重要。** 简单类比是教学拐杖，但走太久会拄成思维障碍。AI 必须能严格区分"映射"与"误导"。

例：
| 西方主题 | 中国史锚点 | 必须诚实标注的分歧 |
|---|---|---|
| Charlemagne 法兰克帝国 | 唐太宗 | 唐有制度化官僚体系，法兰克身后即散 — 这就是为什么欧洲走分权而中国走集权 |
| Magna Carta 1215 | （**没有**直接对应） | 这个"没有"本身就是一节课 — 为什么中国走中央集权、欧洲走法律限君 |
| Black Death 1347 | 元末瘟疫与红巾军 | 同样人口锐减，导致的社会重组方向相反 |
| 文艺复兴 | 宋代文人画 / 苏东坡 | 都是世俗化与个人主义抬头，但宋代没催生出实验科学 — 为什么 |
| 宗教改革 | （没有对应） | 追问"为什么中国没有"作为对照 |

### 2.2 冲突即叙事（解情感入口）

不要按"事件—年代—影响"教。每个单元重写成一场**两方的架**：

- 中世纪欧洲 = 教皇 vs 国王（谁能管谁、开除谁的教籍）
- 文艺复兴 = 人文主义 vs 神权
- 科学革命 = Galileo vs 教廷
- 启蒙运动 = Locke vs 君权神授

13 岁女孩对"两方撕"的故事会本能投入 — 这就是她每天在班级、姐妹团、社交媒体上消费的剧情结构。

### 2.3 原始史料而非课本（解 DBQ 思维）

学校老师不可能给每个学生准备简化原始史料，**AI 可以**：

- 把《大宪章》第 39 条用 7 年级英语重写
- 把伽利略 1615 年给 Christina 大公爵夫人的信节选成 80 词
- 把 Luther 95 条论纲挑 3 条最有争议的
- 把美洲印第安人对 Columbus 的口述史变成可读的对话

然后**永远问她**：「这段话能看出说话人站在谁那边吗？」「他想让读者觉得什么？」「如果你是另一边，怎么反驳？」

**杠杆**：DBQ 思维不是高中才学，可以从 7 年级开始驯化。等她 9 年级正式遇到 DBQ 时，已经默认"史料是有立场的、立场是要分析的"。

### 2.4 Seminar 预演（解口辩缺失）

Irvine 公立有大量 Socratic seminar 和小组讨论 — 这是中国孩子最容易栽的环节。不是不会，是没在这个语言+文化模式下排练过。

产品功能：**"明天课怎么办"模式**
- 她贴老师发的 discussion question
- AI 扮演 devil's advocate 跟她对练 6-10 轮
- 输出：明天可以说的 3 个观点 + 1 个最可能被反驳的应对

家长可见效果最快的功能 — 孩子第二天回家说"今天我在班上讲了，老师让我多说"。**续费的钩子**。

### 2.5 地理双轴（解因果直觉缺失） — 必须固定模块

详见 §4。地理不是配角，是**所有方法的因果基底**。

### 2.6 强制记忆 — 不能因为有 AI 辅助就懒得背（**Mom is right**）

这一条是 Winston 家庭的清醒判断 — 也是产品必须坚持的红线。

**论断：** AI 辅助 + 中文 gloss + 桥接 + 地理因果，这些都是**理解的脚手架**。但理解不等于记住。**有些核心词汇和概念，即使是美国本土孩子也必须背诵下来 — 不背就永远在欠债**。

**家长直觉为什么对：**
- 历史课每一年新单元都假设你掌握了核心术语（feudal / sovereignty / republic / democracy / imperialism…）— 一旦欠下，下一年课文直接读不懂
- Seminar 发言、DBQ 写作要求**精准用词**，临场查 gloss 是来不及的
- 把 AI 当"知识外挂"养成习惯，会培养出**永远依赖辅助、独立时崩溃**的学习模式 — 这是 ChatGPT 时代真实的教育灾难
- 美国本土孩子也在背 vocabulary list（每个学校都有 weekly vocab quiz） — 中国孩子用 AI 不能成为"我比同学少背"的理由

**产品设计原则：每个 Topic 都要标记一组"必须背"的核心词汇 + 概念 — 这一组通过 mastery check 之前 Topic 不算完成。**

**两类必须背的内容（Topic 数据里强制字段）：**

| 类别 | 例（Magna Carta） | 数量建议 |
|---|---|---|
| **Must-memorize Vocab**（核心英文词汇） | sovereignty / tyranny / charter / feudal / barons | 5-10 个 / Topic |
| **Must-memorize Concepts**（核心概念定义） | "rule of law"（即使国王也要受法律约束）/ "due process"（不经审判不得监禁） | 2-3 个 / Topic |

**考核形式（mastery check 必含）：**
1. **拼写测试**：英文词听写或填空（不是认得，要写得出来）
2. **定义复述**：用英文（如能）或中英混合，把概念说明白 — AI 评分核心是"她能不能独立把概念阐述出来"
3. **应用题**：给一个新场景，让她用刚学的概念分析（"如果学校规定不经听证就可以开除学生 — 这违反了哪条 Magna Carta 原则？"）

**完成 Topic 的 gate（重要）：**
- 看完对话 ≠ Topic 完成
- 必须通过 memorization check 才能拿 XP / 喂宠物 / 解锁通史脉络图节点
- 失败可以重试，但要**当场重新测**（间隔 5-15 min），不能"我下次再说" — 防止滑坡

**SRS 在哪里发挥作用（与 §10 差异表的精修）：**
- 之前文档说"history 不做 SRS" — 那是指**事件层面**不做（事件靠通史图谱回扣，不靠 SRS）
- 但**核心词汇/概念层面要做 SRS** — 这部分应该走已有 vocab 模块的 SRS 引擎（自动加入她的 vocab review pool，下次 vocab quick review 时复现）
- 这正是 §5 提到的"keyVocab 推到 vocab 模块"的真正落地位置 — Plan B 里这条接口要在 α 阶段就**部分激活**：keyVocab 里的 must-memorize 子集自动同步到 vocab review，不要等 γ

**给家长的话术（onboarding / parent dashboard）：**
> "AI 帮你的孩子理解，但不替她记忆。每章核心词汇和概念她都得自己背 — 通过测试才算完成。这不是产品做不到自动化，而是我们坚持：欠债的代价比磕一下大得多。"

**这一条对产品定位的影响：** 我们不是"轻松学历史"产品，我们是"科学学历史"产品。家长会**因为这一条买单**，而不是因为 AI 辅助有多炫。

---

## 3. 中英分层语言策略

### 3.1 4 层语言策略（不是 2 层）

| 层 | 触发场景 | 语言策略 | 为什么 |
|---|---|---|---|
| **教学叙述** | AI 讲事件、解释概念 | 中文为主，英文嵌入核心术语 | 此刻是"理解"任务，不是"练英语"。强行全英文 = 把她拉回教材痛苦 |
| **对话探索** | AI 提问、她答、自由 brainstorm | 中英自由混合，鼓励 code-switching | 思维密度优先。13 岁孩子真实脑内状态本来就是双语切换 |
| **史料阅读** | 原始文献节选 | 英文原文 + 中文气泡注（hover/tap 出现） | 必须接触真实历史英文（DBQ 上的真东西），但不能被语言挡住理解 |
| **核心输出** | thesis 陈述、关键论点、teach-back | **强制英文**，可申请中文助词 | 这是要内化的能力。Seminar/DBQ/作文是英文战场 |

### 3.2 时间轴上的英文比例必须主动迁移 — 但要分层差异化

不同层的迁移节奏**不一样**。这是 Winston review 后的修订 — 之前的曲线把 4 层一刀切，太激进，会把"理解任务"和"输出任务"混着推 — **理解被推急了，孩子直接放弃**。

**新的曲线（按层差异化）：**

| 层 | 7 年级开学 | 学期末 | 8 年级开学 | 8 年级末 |
|---|---|---|---|---|
| 教学叙述层（讲解） | 中文 70 / 英文 30 | 中文 60 / 英文 40 | 中文 50 / 英文 50 | 中文 40 / 英文 60 |
| 对话探索层 | 中英自由混合（不卡） | 中英自由混合 | 中英自由混合 | 略偏英文 |
| 史料阅读层 | 英文原文 + 中文 gloss 多 | 英文原文 + 中文 gloss 中 | 英文原文 + 中文 gloss 少 | 英文原文 + 按需 gloss |
| 核心输出层 | **强制英文**，可买中文助词 | **强制英文**，中文助词单价更高 | **强制英文**，中文助词稀缺 | **强制英文**，几乎不需要中文 |

**两个关键差异化原则：**

1. **教学叙述层是"理解任务"，不催英文** — 整个 7 年级中文都是主语。让她**先吃下知识**，英语是顺带练。**强行全英文等于把她拉回教材痛苦中** — 这正是 ESL 产品最常见的失败模式。
2. **核心输出层从一开始就强制英文** — 因为 seminar/DBQ/作文是英文战场，这一层不能让步。但**允许她"卡住时买中文助词"** — 用 XP 兑换。

### 3.2.5 XP 经济：把"中文助词"做成消费品（Winston 的设计巧思）

把"中文助词"做成 XP 兑换的**有限资源**，是这个产品最巧妙的激励循环之一。

**机制：**
- 每次完成 Topic / Mastery Check / 通过记忆考核 → 获得 XP
- XP 可以花在三个地方：
  1. **宠物喂养 / 配饰商店**（已有的 vocab/writing 经济）
  2. **中文助词** — 输出层卡住时点 "中文帮我一下" — 1 次 = N XP
  3. **中文 gloss 数量** — 史料阅读时希望多一些气泡注 — 1 次解锁 = N XP

**单价随时间提升**（这就是 Winston 说的"替换节奏"通过价格曲线实现）：

| 时间窗口 | 输出层中文助词单价 |
|---|---|
| 7 年级开学第一个月 | 2 XP / 次（基本免费，鼓励她用，不要一开始就吓退） |
| 7 年级第二个月起 | 5 XP / 次 |
| 7 年级期中起 | 10 XP / 次 |
| 7 年级期末起 | 20 XP / 次（开始要"攒"才能用） |
| 8 年级 | 40 XP / 次（接近原生模式，中文助词成奢侈品） |

**为什么这个机制好（Winston 的洞察）：**
- 不是粗暴禁止中文 → 引发对抗
- 也不是无限免费 → 永远停在舒服区
- 而是**把中文做成"她做更多任务才能买的东西"** → 自然激励她做更多 task 来攒 XP
- **把 ESL 学习的副产品（XP）变成了她想要的东西** — 这是把痛苦目标变成游戏目标的经典激励翻转

**实现要件：**
1. 可视化 XP 余额（顶栏一直显示） + 可视化中文助词当前单价
2. 中文助词使用前**显式确认价格**（"用 1 次中文助词需要 10 XP — 确认？"），让她有"消费决定"的感受
3. 跟宠物经济共享 XP 池（之前 vocab/writing 已有，无需新建）
4. 中文助词不能"借" — 没 XP 就只能咬牙磕英文

**失败模式警告**：如果不做主动管理，孩子会**永久停留在中文舒服区**，学完一年还是不敢 seminar 发言。我见过太多 ESL 产品死在这一步。但反过来，**强行剥夺中文也会让她直接放弃产品**。XP 经济这个中间路径是关键。

> **配套：XP 赚取侧（"更难任务回报更高"原则）见 §9.3** — 那里定义了基础 XP × 难度 + 必背 gate XP + 模式加成的完整公式。消费侧（本节）跟赚取侧（§9.3）共同构成了完整的 XP 经济闭环。

### 3.3 有些核心概念词必须**永远不翻译**

不只是"重要词用英文"。更精准的原则 — 有些词的中文翻译反而会扭曲理解：

| 英文词 | 中文翻译陷阱 |
|---|---|
| `sovereignty` | 翻"主权"会缩成"国家主权"，但中世纪 sovereignty 包括国王对附庸、教皇对国王，中文承载不了 |
| `liberty` | 翻"自由"跟 freedom 混；但 liberty 在政治哲学有专门语义（消极自由、被法律保护的自由） |
| `republic` | 翻"共和国"激活"中华人民共和国"误联想；古罗马 republic 核心是反君主+贵族议政 |
| `feudal` | 翻"封建"携带中国近代史"封建社会"贬义包袱；欧洲 feudal 是契约性领主-附庸关系，不同 |
| `secular` | 翻"世俗"携带"庸俗"色彩；西方 secular 是政教分离的中性技术词 |

**对这类词，产品坚持只用英文 + 用情境/类比解释，从不给中文翻译**。一旦给了，会**永久性扭曲她的概念地图**，跟没学一样。这件事一旦做对，是真正的教育学价值。

需要单独维护 `UNTRANSLATABLE_TERMS` 列表，AI prompt 强制约束。

---

## 4. 地理 — 所有 Topic 的固定基底（**强调专章**）

### 4.1 论断 — 中国孩子的地理缺失是**双层**的，必须两层都解

很多 ESL 产品把地理简化成"地图标注"，把这件事做扁了。中国孩子的地理缺失实际是两个**互为前提**的层 ——

**层 1（基础）：世界地图本身陌生**

中国地理教育是高度中国中心的：省份/省会/长江黄河/秦岭淮河 — 这些都熟。但出了中国 ——
- "伊比利亚半岛在哪、多大？"
- "君士坦丁堡和罗马哪个更靠东？"
- "Mesopotamia 是个什么形状的地方？"
- "黑死病从克里米亚传到伦敦走了多远？相当于中国哪到哪？"

这些她**没有视觉地图**支撑。脑子里"欧洲"是一团模糊形状，"中东"和"非洲"边界混在一起，"地中海"知道是个海但不知道四面被什么围着。

**层 2（深层）：地理→历史的因果直觉缺失**

即使把地图记住了，她也不会自动产生"地理决定文明形状"的直觉。中国是大陆农业文明、自给自足、平原利于统一；欧洲是破碎的半岛+山脉+内海、靠贸易补给、永远统一不起来 — 这两个起点决定了几乎所有后续故事。**这一层连很多美国本土孩子都没建立**，但中国孩子因为缺第一层基础，差距更大。

**产品必须双层都解**。如果只做层 2（因果），她连"这件事发生在哪里"都没空间感，因果论述就是空中楼阁；如果只做层 1（位置标注），她记住一堆名字但不理解"为什么这里发生这件事"，跟学校教科书没差别。

### 4.2 解层 1：空间锚定（基础地图熟悉化）

三个具体技法 ——

**(a) World Orient 迷你框**
每张 Topic 主图旁边/上方放一个**全球迷你地图**（约 80×60 px），高亮当前区域所在位置。她每看一个 Topic，先看一眼"这块在地球上哪儿" — 几个月下来，世界地图自然在她脑子里建出来。这是**被动建立**全球空间感的最低成本方式。

**(b) 尺度锚定（用她熟悉的中国地理当尺）**
不是抽象告诉她"伊比利亚半岛 60 万平方公里"，而是 ——
- "这块半岛 ≈ 中国的两广（广东+广西）面积"
- "从罗马到君士坦丁堡 ≈ 北京到广州的距离"
- "意大利长得像一只靴子，长度 ≈ 北京到香港"
- "整个英国 ≈ 中国的湖南省大小"

**用她已有的中国空间感作为度量衡**，她对外部世界的尺度直觉立刻就有了。这一招简单、低成本、效果惊人。

**(c) 一次性"环球速览"引导（onboarding）**
进入产品后第一次的 5 分钟引导 — 不是直接进 Topic，是带她**飞一遍世界**：
- 7 大洲的形状和相对位置
- 5 大文明发源地（两河、尼罗、印度河、黄河、地中海）
- 几条核心地理线（赤道、北回归线、季风带）
- 用她中国基础对照（"这跟你熟的中国比，是这样的关系"）

一次性投入，但**之后所有 Topic 都站在这个基础上**。这就像编程教程会先讲"什么是变量"再讲算法 — 你不能跳过基础就讲应用。

### 4.3 解层 2：地理→历史因果案例（必须传递的直觉）

1. **地中海全是海岸 vs 华北全是平原** → 希腊 1000 个城邦 vs 秦汉一个帝国
2. **欧洲多河流多山脉无中央平原** → 罗马以后再也没有统一过 vs 中国常态是统一
3. **英吉利海峡** → 英国不卷入欧陆宗教战争，独立发展议会传统 vs 法德的命运
4. **撒哈拉作为屏障+高速路** → 跨撒哈拉贸易催生 Mali / Songhai 帝国（金子跟盐换）
5. **印度洋季风** → 东非沿岸跟印度做生意比跟欧洲早几百年
6. **中国"我们什么都有" vs 欧洲"要香料只能出海找"** → 大航海时代为什么是欧洲发起，不是郑和后续
7. **Tigris-Euphrates 洪水不可预测 vs 尼罗河洪水周期性** → 巴比伦 vs 埃及不同的政治神话和治理模式

每条都是"地理决定文明性格"的活案例。**没有任何一条可以不经历地图就讲清楚**。

### 4.4 产品形态 — Geography 是每个 Topic 的固定 Section #1

每个 Topic 页面**强制**包含一个 Geography 模块，位置在最上方（"Where → When → Who/What → Why → So what" 的第一站）。

**Geography Section 的标准结构（5 个固定子模块，对应两层缺失）：**

```
┌──────────────────────────────────────┐
│ 📍 Where this happened              │
├──────────────────────────────────────┤
│ [① World Orient 全球迷你框 80×60]    │
│   高亮当前区域在地球上的位置          │
│   "在欧洲西北角"                      │
│                                      │
│ [② Topic 主图]                       │
│   SVG 详细图，含 ① ② ③ 标注          │
│                                      │
│ ▸ ③ 跟你熟悉的地方比 (尺度锚定)       │
│   • 整个英国 ≈ 中国湖南省大小          │
│   • 伦敦到 Runnymede ≈ 北京到天津     │
│                                      │
│ ▸ ④ 为什么这个地理重要？               │
│   1-2 句因果直觉解释                  │
│                                      │
│ ▸ ⑤ 跟中国对比（comparison 双图）     │
│   并排对照 + 1 段对比解读             │
└──────────────────────────────────────┘
```

子模块 ① 解层 1 第 (a) 项（空间位置感），子模块 ③ 解层 1 第 (b) 项（尺度感），子模块 ④ 解层 2（因果），子模块 ⑤ 同时服务两层。**这五个子模块每个 Topic 都强制存在**，不允许跳过 — 不然就会回到"地理只是装饰"的失败模式。

**5 类标准地图：**

| 类别 | 用途 | 例 |
|---|---|---|
| `world-orient` | 全球迷你框（**新增**） | 高亮欧洲西北角 / 东非沿岸 / 中亚草原带 |
| `geo-baseline` | 静态地理基底 | 1215 年欧洲大致疆域 |
| `trade-route` | 商品/思想/疾病的流动 | 丝绸之路、跨撒哈拉、Black Death 传播路径 |
| `conflict` | 战役、扩张、疆界变迁 | 罗马帝国扩张箭头、十字军东征路线 |
| `comparison` | **跟中国对比**（最关键，最被低估） | Mediterranean 与华北平原并排 |

**comparison 类是最关键的 — 因为它是双历史桥接 + 地理因果两个方法的交汇点。** 中国孩子第一次"看见"地理形状的差异如何决定了文明形状的差异，这个 aha moment 是产品的核心情感支点。

### 4.5 时间×地理双轴 — 同一地图，不同时刻

Winston 提到的"双维度交织"在产品里这样落地：

**地理是 X 轴（空间），时间是 Y 轴（年代）。** 同一片地理在不同时刻演不同故事：

例：地中海这块地图
- 800 BC：希腊城邦
- 200 BC：罗马共和国扩张
- 0 AD：罗马帝国
- 600 AD：拜占庭+阿拉伯崛起
- 1300 AD：威尼斯/热那亚商业帝国
- 1500 AD：奥斯曼地中海

**首版 (MVP/α)**：每个 Topic 显示**该时刻的静态快照**地图。简单可控。
**β 版**：核心地图加**时间滑块**（拖动看疆域/贸易路线变化）。
**γ 版**：跨 Topic 自动联结同地理 — 她学完拜占庭后，下次学奥斯曼时同一地图自动叠加新的时代层，让她"看见时间"。

### 4.6 地图的工程实现策略

**核心决策：手绘风格 SVG 模板库 + AI 生成动态标注**

不用 Google Maps 风格（精确但无叙事性），不用 AI 实时生图（不可控、风格漂移）。

**SVG 资产分三类（一次性投入）：**

| 资产 | 数量 | 用途 |
|---|---|---|
| **World Base 全球底图** | 1 张主图 + 7 张高亮变体（每洲一张） | 给所有 Topic 当 World Orient 迷你框 |
| **Region 区域图** | 12-15 张可复用基底（地中海/欧洲/亚洲/北美/非洲/丝路/印度洋圈等） | 给 Topic 当主图 |
| **China Outline 中国轮廓** | 1 张精简轮廓（含主要省界） | 给 comparison 类做并排对照 + 给尺度锚定做尺寸参考 |

具体做法：
1. **手绘风格基底**：参考 *DK 出版社* / *Horrible Histories* 教材插图风，存 `public/maps/*.svg`
2. **图层覆盖**：每张基底图上可叠加 colored regions / arrows / dotted routes / pin markers，全部用 SVG `<g>` 分层
3. **每个 Topic 配置**：哪张基底 + 哪些 overlays + 哪些标注 + 标注的中英文文本
4. **AI 生成**的部分：标注文本（"为什么这里重要？"那 1-2 句）+ 尺度锚定句（"≈ 中国哪个省"）+ 对比解读，**不生成图本身**
5. **移动端友好**：地图竖向 4:5 或 3:4 比例，标注用编号 callout 在图下方列表展开

**为什么不让 AI 生图：**
- DALL-E/Stable Diffusion 出的地图地理位置不可信（伦敦在英格兰中部、地中海方向反了）
- 教学场景对地理精度有强要求
- 风格漂移破坏视觉统一

**手绘库 cost：** 一次性投入（Figma + AI 辅助初稿 + 人工校准，1-2 周做出 20 张基底 + 1 张 World Base + 1 张 China Outline）。后续无边际成本，可一直复用。

### 4.7 一次性"环球速览"引导（onboarding）— 详细设计

进入产品后第一次的 5 分钟引导，独立于 Topic 学习路径。建议结构 ——

| Step | 内容 | 时长 |
|---|---|---|
| 1 | 7 大洲快速点亮（动画依次高亮）+ 一句话特征 | 60s |
| 2 | 5 大文明发源地标记（两河/尼罗/印度河/黄河/地中海）+ 突出"你已熟的黄河文明在这里" | 60s |
| 3 | 用中国当尺度参考的 4-5 个对照（"整个欧洲 ≈ 半个中国" / "美国 ≈ 中国大小"） | 60s |
| 4 | 几条核心地理线（赤道、北回归线、季风带）+ 解释它们如何决定文明能不能种地 | 90s |
| 5 | 一句话过渡："好，你现在大概知道了世界长什么样。我们这学期会一块块走过去。准备好开始 7 年级的第一站了吗？" | 30s |

**这个引导是产品的"第一印象"** — 不能让她进来就懵在 Magna Carta 这种生僻名字上。先把世界给她铺平了。

### 4.8 地理认知评估

不要做"罗马在哪？"这种位置题。要做：
- **空间感题（解层 1）**：「英吉利海峡有多宽？提示：拿你坐过的渡轮当参考。」
- **尺度题（解层 1）**：「如果罗马帝国版图叠到中国地图上，大致覆盖到哪几个现代省份？」
- **因果推断题（解层 2）**：「给定这个地理（多山半岛+中央内海），你预测会出现什么样的政治结构？」
- **对比题（双层）**：「为什么同样是大瘟疫（Black Death vs 元末瘟疫），后续社会重组方向相反？提示：看地图上的人口流动方向。」
- **逆向题（解层 2）**：「如果意大利没有阿尔卑斯山屏障，文艺复兴还会发生在那里吗？为什么？」

地理评估 = 地理作为**推理工具**的能力，不是地图记忆。

---

## 5. Topic 数据中枢 — 跨模块脊柱（架构核心）

### 5.1 设计原则

**这是整个产品架构上最关键的一个抽象。**

Plan B 决策：Topic schema 现在按完整脊柱化设计，但：
- 首版只 History 模块用
- Reading/Vocab/Writing 联动字段保留但暂不实施
- 未来扩展时不需要改 schema，只需要给字段填值

### 5.2 完整 Schema（建议存于 `lib/history-topics.js`）

```js
const HistoryTopic = {
  id: "magna-carta-1215",                  // 唯一稳定 ID
  title: { en: "Magna Carta", cn: "大宪章" },
  curriculumUnit: "7th-grade/medieval-europe", // 课纲挂钩
  year: 1215,
  yearRange: [1215, 1215],                  // 跨年事件用区间
  region: "england",
  
  // ── 教育学元数据 ──
  difficulty: 3,                             // 1-5
  throughLine: "power-vs-liberty",           // 4-5 条主线之一
  bridgeAnchor: {
    cn: "唐律疏议",                            // 中国史锚点
    bridgeType: "weak",                        // strong/weak/none
    divergenceNote: "中国成文法限制官吏，但没限制君主本人 ..."
  },
  
  // ── Geography Section（5 个固定子模块，必有）──
  geography: {
    // ① World Orient — 全球迷你框
    worldOrient: {
      highlightRegion: "western-europe",        // 高亮哪块
      orientNote: { cn: "在欧洲西北角的英格兰", en: "..." }
    },
    // ② Topic 主图
    primaryMap: "europe-1200",                  // SVG 基底 ID
    overlays: [
      { type: "pin",    at: [x,y], label: "Runnymede" },
      { type: "region", coords: [...], color: "#f0c", label: "John's lands" }
    ],
    annotations: [
      { id: 1, text: { cn:"...", en:"..." }, calloutXY: [x,y] }
    ],
    // ③ Scale Anchors — 用中国地理当尺
    scaleAnchors: [
      { compare: "整个英国 ≈ 中国湖南省大小" },
      { compare: "伦敦到 Runnymede ≈ 北京到天津的距离" }
    ],
    // ④ Why Matters — 因果直觉
    whyMatters: { cn: "...", en: "..." },        // 1-2 句
    // ⑤ China Compare — 跟中国并排对照
    chinaCompare: {                              // 可选但强烈鼓励
      otherMap: "north-china-plain",
      readNote: { cn: "...", en: "..." }
    }
  },
  
  // ── 关键词汇（推到 Vocab 模块的种子）──
  keyVocab: [
    { word: "sovereignty", level: 5, untranslatable: true, gloss: "..." },
    { word: "tyranny", level: 4 },
    { word: "charter", level: 3 },
    { word: "barons", level: 3 },
    { word: "feudal", level: 4, untranslatable: true }
  ],
  
  // ── 原始史料（推到 Reading 模块的种子）──
  primarySources: [
    {
      id: "magna-carta-clause-39",
      title: { en: "Magna Carta, Clause 39", cn: "大宪章第 39 条" },
      en: "No free man shall be seized or imprisoned ... except by the lawful judgment of his peers ...",
      cnGloss: "...",
      lexile: 950,
      year: 1215
    }
  ],
  
  // ── 写作 prompt（推到 Writing 模块的种子）──
  writingPrompts: [
    {
      genre: "DBQ-mini",
      prompt: { en: "...", cn: "..." },
      rubric: ["thesis", "evidence-use", "counterargument"],
      sourceIds: ["magna-carta-clause-39"]
    }
  ],
  
  // ── 苏格拉底对话脚本（首版主交互）──
  conversationMoves: [
    { type: "hook",    spec: "校长任意关禁闭无上诉的类比" },
    { type: "bridge",  spec: "唐朝法律 vs 大宪章对比" },
    { type: "source",  spec: "Clause 39 原文 + 解读问题" },
    { type: "provoke", spec: "'你觉得贵族是为穷人争利吗？'" },
    { type: "roleplay",spec: "你是 John 的女儿，你劝爸爸签吗？" },
    { type: "connect", spec: "挂回 power-vs-liberty 主线" },
    { type: "seal",    spec: "晚饭跟爸妈聊：…" }
  ],
  
  // ── 角色代入选项 ──
  perspectives: [
    { id: "king-john",      label: { en: "King John",  cn: "约翰国王" } },
    { id: "rebel-baron",    label: { en: "Rebel Baron", cn: "反叛贵族" } },
    { id: "english-peasant",label: { en: "Peasant",    cn: "农民" } },
    { id: "pope-innocent",  label: { en: "Pope",       cn: "教皇" } }
  ],
  
  // ── 必须背诵 (Topic 完成的 gate) ──
  mustMemorize: {
    vocab: [
      { word: "sovereignty", definitionEn: "...", definitionCn: "...", untranslatable: true },
      { word: "tyranny",     definitionEn: "...", definitionCn: "..." },
      { word: "charter",     definitionEn: "...", definitionCn: "..." },
      { word: "feudal",      definitionEn: "...", definitionCn: "...", untranslatable: true },
      { word: "barons",      definitionEn: "...", definitionCn: "..." }
    ],
    concepts: [
      { id: "rule-of-law",  defEn: "Even the king is under the law", defCn: "..." },
      { id: "due-process",  defEn: "...",                              defCn: "..." }
    ]
  },
  
  // ── 评估 (Topic 完成 gate) ──
  masteryChecks: [
    { type: "spelling",       prompt: "..." },        // must-memorize 词汇拼写
    { type: "definition",     prompt: "..." },        // 概念定义复述
    { type: "application",    prompt: "..." },        // 新场景应用
    { type: "teach-back",     prompt: "..." },        // 给中国朋友讲清楚
    { type: "counterfactual", prompt: "..." },        // 反事实
    { type: "geo-inference",  prompt: "..." }         // 地理推断
  ]
};
```

**Topic 完成 gate 规则：** 必须通过前 3 项（spelling + definition + application）才能拿 XP / 喂宠物 / 解锁通史脉络图节点。后 3 项（teach-back / counterfactual / geo-inference）是深度评估，可选但 XP 加成更多。

### 5.3 字段所有权（哪些是首版必填，哪些后扩）

| 字段 | 首版（History MVP） | β（History 完整版） | γ（脊柱化扩展） |
|---|---|---|---|
| `id, title, year, region, difficulty` | ✅ | ✅ | ✅ |
| `throughLine, bridgeAnchor` | ✅ | ✅ | ✅ |
| `geography` 完整结构 | ✅ | ✅ | ✅ |
| `conversationMoves` | ✅ | ✅ | ✅ |
| `perspectives` | ✅ | ✅ | ✅ |
| `masteryChecks` | ✅（基础 1-2 个） | ✅（全 3 个） | ✅ |
| `keyVocab` | ⚠️（数据填，UI 不显示） | ✅（提示加词） | ✅（自动同步 Vocab） |
| `mustMemorize` | ✅（vocab + concepts，作为 gate 必须做） | ✅ | ✅（vocab 部分自动接入 vocab SRS） |
| `primarySources` | ⚠️（首版只在对话里用） | ✅（独立 reading 入口） | ✅（推 Reading 模块） |
| `writingPrompts` | ❌（暂不实施） | ⚠️（独立显示） | ✅（推 Writing 模块） |

**首版策略**：**数据结构按完整版填，UI 只暴露 History 自己用得上的部分**。这就是 Plan B — 现在就把脊柱长好，后面长肌肉零成本。

---

## 6. 主交互形态 — 苏格拉底对话器（不是 vocab 那种状态机）

### 6.1 为什么不是 vocab 那种 phase 状态机

vocab 的对象是原子（一个词），适合"猜→讲→排→复习"的固定流水线。**历史的对象是网络**（事件—人物—因果—观念），用固定流水线会把它压成一维。

历史的真实学习过程是**对话+回环+穿插**：讲到一半跳出去看地图、看到地图想到中国、想到中国回头质疑事件解读、解读完跳到"如果你是…"角色代入、代入完回到主线… 这是树状/图状的，不是流水线。

### 6.2 形态：12-20 轮苏格拉底对话 + Move 调度

每个 Topic 一次会话，AI 用一组 **moves** 编排对话。每一轮是一个 move，AI 自己根据上下文决定下一个 move（不是固定顺序）。

| Move | 触发场景 | AI 行为 |
|---|---|---|
| `hook` | 开场 | 用她的世界抛冲突点（"想象校长可以…"） |
| `bridge` | 引入新概念前 | 桥接到中国史锚点，让她答，AI 评估 |
| `geo` | 任何因果讨论时 | 拉出地图+标注，"你看这块地方为什么…" |
| `source` | 需要证据时 | 给一段简化原始史料，让她先观察再判断 |
| `provoke` | 她答得太顺时 | 抛反方观点让她反驳（激活"不服"本能） |
| `roleplay` | 关键决策点 | 让她代入具体历史人物做决策 |
| `multiperspective` | 复盘时 | 同一事件换 3 个视角看 |
| `connect` | 收尾前 | 挂回 4-5 条 through-line 主线 |
| `seal` | 结尾 | 家庭话题（"晚饭跟爸妈聊：…"） |

### 6.3 技术实现

- 后端：复用 `pages/api/chat.js`（不需要改）
- AI 调用：`callAPIStream` 流式输出，前端边到边渲染（参考 vocab.js 的 streaming JSON 模式）
- Prompt 工程：每个 Topic 的 `conversationMoves` 定义骨架，AI 在每轮决定下一个 move 时基于：(a) 上一轮她的回答 (b) 已用过的 move (c) 还没用的 move
- 状态：单次会话 in-memory，跟 vocab/writing 的 `dataCache.current` 模式一致
- 持久化：会话结束写入 `localStorage.vocabspark_history_v1.completedTopics[topicId]`

### 6.4 副交互 — 通史脉络图

每完成一个 Topic，"通史脉络图"上多一个节点。节点之间显示连线（"这件事影响了那件事"）。

第一版**简化为颜色编码的卡片瀑布流** + 每张卡片右上角的颜色标签代表 through-line（power-vs-liberty / religion-vs-state / tech-disruption / who-rules-whom）。

不需要复杂 SVG。重要的是有**可见的积累感**，破解"事实漂浮"的根因。

### 6.5 副交互 — Seminar 预演器

独立模式。她贴老师的 discussion question，AI 跟她对练。详见 §2.4。

**首版可以是同一个对话器走不同 prompt 模板，不是独立模块。** 只需要在入口让她选"我要学新东西" vs "我明天有 seminar"。

### 6.6 语音输入 — 讨论环节降负载（Winston review 后新增）

**论断：** 13 岁孩子在对话器里被要求来回打几十轮字，是产品的隐形劝退点。Willow 这个年龄段在 TikTok / 同学聊天里语音输入早就是默认行为，让她在历史学习里反而退回打字，是反人体工学的。

**设计：**

| 层 | 输入方式 | 备注 |
|---|---|---|
| **教学叙述层**（AI 主讲） | 不需要她输入 | — |
| **对话探索层**（自由 brainstorm） | **语音输入为主**，文字为辅 | Winston 强调点 |
| **史料阅读层**（hover/tap gloss） | 不输入 | — |
| **核心输出层**（thesis / teach-back / 拼写测试） | **拼写测试只能打字**（要训练书写）；teach-back 可语音可打字 | 输入习惯随场景切换 |

**实现方案（Web Speech API 优先 + Cloud STT 兜底）：**

1. **优先：浏览器原生 Web Speech API**
   - 免费、低延迟、零后端成本
   - Chrome/Safari 都支持，iPad/iPhone Safari 也行（13 岁孩子的设备覆盖）
   - 支持英文 + 中文双语识别（语种自动切换或手动选）
   - 缺点：质量不如云端、混合 code-switching 识别一般
   
2. **兜底：云端 STT**（Google Cloud Speech / Whisper API）
   - 当浏览器不支持或识别质量低时切换
   - 后端走 `pages/api/stt.js`（新增）
   - 增加成本但提升准确率

**附加价值：发音和语法纠错**

Winston 的"顺便还可以纠正一些明显的错误"是这个功能的隐藏 ROI。具体做法：

- 语音转文本后，**先在 UI 显示识别结果让她确认/修改**（避免识别错乱进对话流）
- 文字版交给 AI 之前，加一道"轻量纠错 pass"：AI 标注**1-2 个最明显的语法/词法错误**（不是 grammar Nazi 全标），返回 `{ original, corrected, note: "你说 'I goed' 是 'went' 的错时态" }`
- 在对话气泡下方用浅色小字显示 `corrected` 版本（不打断主对话流）
- 不强迫她改，但**提供见到正确版本的机会** — 反复曝光后她自然内化

这个加分项**对家长是巨大卖点**：「她每说一句话都顺便练了发音和语法」。但要克制，不能变成查作业。

**UI 形态：**
- 对话器输入框右侧加一个麦克风按钮（vocab 已有 TTS 朗读，复用同样的视觉语言）
- 按住说话 / 点击切换持续录 — 移动端用按住，桌面用点击切换
- 录制时显示音浪动画（`@vercel/analytics` 风格的极简波形）
- 识别完成后**先显示文字结果 + 编辑机会**，再点"发送"才入对话

**实施阶段：**
- MVP：**不做**（保持范围聚焦，先验证对话内容质感）
- α：**做**对话探索层的语音输入（Web Speech API only）
- β：加云端 STT 兜底 + 发音/语法纠错小气泡
- γ：扩展到 Seminar 预演（口辩练习时全程语音）

**风险与缓释：**
- iOS Safari Web Speech API 有时拒绝长按 → 备用云端 STT
- 中英 code-switching 识别差 → 默认英文模式 + 手动切中文按钮
- 识别错误进对话流 → 必须有"确认/编辑"中间步骤

---

## 7. 课程范围 — 首版 3 个示范 Topic

按 Willow 的 Irvine 7 年级课纲（California "Medieval and Early Modern Times"），首版做 **3 个对照鲜明的示范单元**：

| Topic | 选它的理由 | 展示的方法 |
|---|---|---|
| **唐宋盛世（Medieval China）** | 她的 home advantage — 用她已熟的内容验证产品质感，建立信心 | 双历史桥接的"反向"用法 — 用她已知的中国看欧洲同时代怎么活；地理对比铺垫 |
| **大宪章 1215 (Magna Carta)** | 西方政治传统的源头 + 中国史"没有对应" 是一节课的好素材 | bridge 的"分歧点"教学；DBQ 训练（Clause 39 原文）；地理（英吉利海峡为什么让英国走不一样的路） |
| **黑死病 1347 (Black Death)** | 跟元末同期；地理因果非常直接（贸易路线决定传播） | 地理双轴（贸易路线地图）；社会重组的对比（欧洲走向货币经济 vs 元末走向起义） |

这 3 个一起做，能把所有方法论的卖点打全：
- 中国 home advantage（建立信心）
- 桥接 + 分歧点（核心教学法）
- 地理因果（基底）
- 原始史料（DBQ 雏形）
- 跨时代对比（through-line 思维）

如果这 3 个 Topic Willow 试用反馈是"哇，比课本有意思"，整个产品方向就立住了。

---

## 8. 实现性分析与路线图

### 8.1 工程基础（已有，零改造）

| 资产 | 复用方式 |
|---|---|
| Next.js 14 + Pages Router | 直接复用 |
| `pages/api/chat.js` | DeepSeek + Gemini 兜底，零改 |
| `lib/api.js` (callAPIStream/callAPIFast/tryJSON) | 全部直接用 |
| `components/BrandNavBar` | 新增 history tab，5 行改动 |
| `lib/theme.js` | 颜色/字体/样式全部复用 |
| `lib/auth-server.js` (requireUser) | 直接用于保护历史 API（如有） |
| `lib/supabase.js` + `user_progress` 表 | `progress_data.historyData` 字段存历史数据 |
| `localStorage.vocabspark_history_v1` | 客户端持久化，跟 vocab 同前缀 |

### 8.2 阶段拆分（基于可实现性）

#### **MVP — 单 Topic 跑通端到端（建议 1 个工作日）**

**范围：** 1 个硬编码 Topic（建议 Magna Carta），验证形态质感

**做什么：**
- `pages/history.js` 单页面（参考 vocab.js 但简化得多）
- BrandNavBar 加 history tab（带 Beta sup）
- **手画 SVG 资产 ×2**：(a) World Base 全球底图 1 张 — 用作 World Orient 迷你框 (b) Europe 1200 Topic 主图（含 Runnymede pin）
- Geography Section 5 子模块全部跑通（worldOrient + primaryMap + scaleAnchors + whyMatters + chinaCompare）—— **这是 MVP 必验证项**，因为整个产品的地理基底论断 stand-or-fall 全靠这个 section 的实际效果
- 苏格拉底对话器：12 轮，使用 callAPIStream
- 中英分层渲染（教学层中文为主）
- 1 个原始史料展示（Clause 39 原文 + 中文 hover gloss）
- **mustMemorize gate**：5 个核心词汇 + 2 个核心概念 — 拼写测试 + 定义复述 + 应用题 — Topic 完成必须通过
- 答完触发 `triggerPetCelebrate`
- 结尾 "晚饭跟爸妈聊" 卡片

**不做：**
- 不做数据持久化（in-memory only）
- 不做 SRS
- 不做 vocab/writing 联动
- 不做通史脉络图
- 不做 Seminar 预演

**验证目标：** AI 用画像讲历史的质感能不能让 Willow 产生"WOW 感"。**这是产品最大风险点，先验证再投资全套。**

**工程量估算：** 6-8 小时

---

#### **α 版 — 3 Topic + 完整框架（建议 5-7 个工作日）**

**新增范围：**
- 3 个 Topic 完整数据（Magna Carta + 唐宋 + Black Death）
- `lib/history-topics.js` 数据文件（Topic 数据驱动的渲染）
- **SVG 资产扩充**：1 张 World Base（含 7 大洲高亮状态）+ 4-5 张 Topic 基底 + 1 张 China Outline（用于 comparison + 尺度锚定）
- **"环球速览" onboarding**（5 min 一次性引导）— 见 §4.7 详细设计
- 通史脉络图（简化版 — 卡片瀑布流 + 颜色标签）
- localStorage 持久化（completedTopics + onboardingCompleted）
- Topic 选择页（按课纲单元分组）
- **语音输入（对话探索层）** — Web Speech API only，Cloud STT 留 β
- **XP 经济跑通** — 中文助词单价机制 + 跟宠物经济共享同一 XP 池
- **mustMemorize → vocab SRS 同步**：Topic 通过的核心词汇自动加入 vocab 模块 review pool（这是 §5.3 字段所有权表里 Plan B "α 阶段就部分激活"的对应实现）
- 中英比例显示（按 §3.2 新表分层显示）
- "切换中文"按钮（核心输出层卡住时点 — 走 XP 兑换流程）

**仍不做：**
- vocab/writing/reading 联动（schema 字段已填，UI 不连）
- 时间滑块地图（β）
- Seminar 预演独立入口（可以用同一对话器的 prompt 变体，作为隐藏模式）

**工程量估算：** 30-40 小时

**验证目标：** 完整学习旅程能否 hold 住一个 7 年级孩子持续 2-3 周。

---

#### **β 版 — 半个学期范围 (建议 2-3 周)**

**新增范围：**
- 8-12 个 Topic（覆盖 7 年级前半学期：罗马灭亡 → 拜占庭 → 伊斯兰 → 非洲帝国 → 中世纪日本 → 中世纪欧洲 → 大宪章 → Black Death）
- 12-15 张地图基底
- 时间滑块（核心地图加可拖动时间轴）
- Seminar 预演独立入口
- 同步到 Supabase（参考 vocab 的 user_progress.progress_data 模式，加 historyData 字段）
- 跨设备恢复
- 视频/音频朗读支持（复用 `pages/api/tts.js`）
- 角色代入 multiperspective（一个事件 3 视角）
- 评估深度 mastery checks（teach-back / counterfactual / geo-inference 全开）
- 中英比例**主动管理**（XP 单价跟随时间窗口提升，详见 §3.2.5）
- **语音输入升级**：Cloud STT 兜底（`pages/api/stt.js`）+ 发音/语法纠错小气泡（不打断对话流）

**工程量估算：** 80-120 小时

---

#### **γ 版 — 脊柱化整合 (建议 4-6 周)**

**新增范围：**
- Vocab 模块加 multi-wordlist 结构（"7 年级历史词单"）+ Topic 完成时提示加词 toast
- Reading 模块从 Soon 真正上线 — 直接以 Topic primarySources 作为内容源
- Writing 模块加 DBQ-mini 模式 — 以 Topic writingPrompts 作为内容源
- "我现在在学 7 年级历史"画像勾选 → 三模块自动注入历史维度
- 跨 Topic 时间-地理图谱（同一地理跨时代叠加）
- Topic 推荐引擎（按她课程进度/作业截止日）
- 家长 dashboard（简版，可选）

**工程量估算：** 200+ 小时

---

### 8.3 资源依赖

| 资源 | 来源 | 时间窗口 |
|---|---|---|
| **手画 SVG 地图库** | Figma + AI 辅助生成 + 人工修订 | 一次性 1-2 周（α 前完成） |
| **Topic 数据填充** | Winston + AI 一起编课件 | 持续，按 topic 一个个填 |
| **原始史料英文版** | 公共领域文本（Project Gutenberg / Wikisource） | 公开免费 |
| **AI prompt 调优** | 跟 vocab 类似，迭代调 | α 期间集中调 |

### 8.4 风险与缓释

| 风险 | 缓释 |
|---|---|
| AI 生成的桥接对比不严谨（误导）| 在 prompt 里强制 AI 必须输出"分歧点"字段；人工审核首版 3 个 Topic |
| 地图风格漂移 / 地理不准 | 不让 AI 生图，只用人工 SVG 库 + AI 生成标注文字 |
| 13 岁孩子对长对话耐心不够 | 每轮 ≤ 80 字；用 emoji/视觉锚点；前 3 轮必须有 wow moment 钩住 |
| 中文舒服区粘滞（永不切英文）| 中英比例可视化 + 核心输出层强制英文 + XP 换中文求助 |
| 课纲覆盖工作量爆炸 | 不追求 100% 覆盖；首学期重点 8-12 个高频 Topic 即可 |
| 跟学校教学冲突（讲法不一） | 标注 "How your teacher might say it differently"；不否定老师的版本 |

---

## 9. Winston 拍板结果（2026-04-24 锁定）

| # | 决策项 | Winston 拍板 | 状态 |
|---|---|---|---|
| 1 | 首版 Topic | **Magna Carta** | ✅ 锁定 |
| 2 | 手画地图 | **同期启动，全权调用所需工具做到最好效果** | ✅ 锁定 — 见 §9.1 |
| 3 | β 家长 dashboard | **不做**，γ 再说 | ✅ 锁定 |
| 4 | MVP 接 Supabase | **不接**，α 再加 | ✅ 锁定 |
| 5 | 史料/课件来源 | **参考 Irvine USD 实际课程 + Claude 研究的数据源 + Winston 共编** | ✅ 锁定 — 见 §9.2 |
| 6 | 首版上线渠道 | `/history` 路由先开放，不动 home/plan/nav | ✅ 锁定 |
| 7 | mustMemorize gate 严格度 | **严格** — gate 必过制，即时重试，不允许跳过 | ✅ 锁定 |
| 8 | 语音输入 | **MVP 不做，α 加 Web Speech API** | ✅ 锁定 |
| 9 | XP 经济 | **更难的任务回报更高** — 见 §9.3 修订后的 XP earning 曲线 | ✅ 锁定 |

### 9.1 地图制作 — 全权调用工具的执行计划

Winston 授权"调用任何需要的工具做到最好效果"。执行计划：
1. **研究阶段**（先于绘制）：调研 3-5 个教育类历史地图的优秀风格参考（DK 出版社系列 / Horrible Histories / Atlas of World History / 手绘历史地图集）— 由 Claude 研究 agent 平行进行
2. **风格定型**：选定一个统一风格（颜色 / 线条粗细 / 标注字体 / 装饰元素），形成 design system
3. **MVP 资产产出**：Claude 手写 SVG（用真实地理参考但简化为风格化插画），交付：
   - `public/maps/world-base.svg`（全球底图，7 大洲可高亮变体）
   - `public/maps/europe-1200.svg`（Topic 主图，含 Runnymede pin）
4. **如效果不达预期**：升级到外部专业工具（如 Figma + 设计师外包，或 Procreate 手绘后导出 SVG）— Winston 决定

### 9.2 数据源与课件来源（已启动研究）

Claude 研究 agent 正在调研以下内容（结果见 `docs/HISTORY_RESEARCH_REPORT.md`）：
- IUSD 7 年级 Social Studies 实际使用教材（出版社/版本/章节进度）
- California HSS-7 课纲对 Magna Carta 等核心 Topic 的具体要求
- K-12 适用的 Western Civ 原始史料免费数据库（Avalon Project / Fordham Internet Medieval Sourcebook / British Library / DocsTeach 等）
- Magna Carta 在 7 年级 Lexile 水平的简化版本来源
- 是否有同领域竞品 / 已有 ESL 中国学生学西方史的产品空白

研究完成后 Winston 审阅，确定**最终数据源 bundle**，再开始 Magna Carta Topic 数据共编。

### 9.3 XP 经济修订（Winston "更难回报更高"原则）

之前的 §3.2.5 只定义了 XP **消费**单价（中文助词成本随时间提升）。这一版补全 XP **赚取**侧 — 让任务难度直接决定回报。

**XP 赚取公式（每个 Topic）：**

```
Topic XP 总和 = 基础 XP + 必背 gate XP + 深度 check XP + 模式加成
```

**(a) 基础 XP — 按 Topic 难度（schema 字段 `difficulty: 1-5`）**

| 难度 | 基础 XP | 例 |
|---|---|---|
| 1（入门） | 30 XP | 课纲第一周热身 Topic |
| 2 | 60 XP | 唐宋盛世（home advantage） |
| 3 | 100 XP | Magna Carta（核心难度） |
| 4 | 150 XP | 宗教改革 / 启蒙运动（多线交织） |
| 5（最难） | 220 XP | DBQ 训练 / 跨主题综合 |

**(b) 必背 gate XP — 每过一项给 XP（鼓励她真背诵）**

| 项目 | XP / 项 |
|---|---|
| 词汇拼写 1 个 | +5 |
| 概念定义复述 1 个 | +10 |
| 应用题答对 1 个 | +15 |

例 Magna Carta 5 词 + 2 概念 + 2 应用题 = 5×5 + 2×10 + 2×15 = **75 XP**

**(c) 深度 check XP — 可选但加成显著**

| Check 类型 | XP |
|---|---|
| Teach-back（给中国朋友讲清楚） | +30 |
| Counterfactual（反事实推理） | +40 |
| Geo-inference（地理推断） | +30 |

**(d) 模式加成（×倍率）**

| 条件 | 加成 |
|---|---|
| 整个 Topic 不点中文助词完成 | × 1.5 |
| 不重做 mastery check 一次过 | × 1.3 |
| 用语音输入完成对话探索（α 后） | × 1.1 |

**举例：Magna Carta 难度 3 满分通关**
- 基础：100
- 必背 gate：75
- 全部深度 check：100
- 不用中文助词：×1.5
- 一次过：×1.3
- 总计：**(100 + 75 + 100) × 1.5 × 1.3 = 536 XP**

**Magna Carta 难度 3 跌跌撞撞通关（用了中文助词、重做了一次）**
- 基础：100
- 必背 gate：75（最终都过了）
- 跳过深度 check：0
- 无加成：×1.0
- 总计：**175 XP**

**3× 的差距** — 这就是"更难回报高 + 用心回报高"的具体落地。Willow 自己会**主动选择不用中文助词、一次通过、做完深度题**，因为差距太大不可忽视。

**配合消费侧（§3.2.5）：**
- 中文助词单价 7 年级期中 = 10 XP/次 → 用一次 = 损失约半个深度 check
- 8 年级 40 XP/次 → 用一次 ≈ 损失一半深度 check 的努力
- 形成清晰的"不到万不得已不用"心理预算

**这套经济需要 Winston 在跑通 vocab/writing 模块的现状上校准** — 我没有 Willow 当前每天赚多少 XP 的数据。建议 α 阶段第一周用 Winston 给的初始系数跑，然后看 Willow 实际节奏调整。

---

## 10. 跟 Vocab 的核心差异（避免误用 vocab 模式）

为了避免新对话的 Claude 误把 history 套成 vocab 模式，列差异：

| 维度 | Vocab | History |
|---|---|---|
| 学习对象 | 原子（一个词） | 网络（事件—人物—因果） |
| 主交互 | 4 阶段固定状态机 | 12-20 轮苏格拉底对话 + move 调度 |
| 记忆方法 | SRS 间隔重复 | **事件层**：通过新单元回扣旧单元 + 通史图谱（不做 SRS） / **核心词汇层**：自动接入 vocab 模块 SRS（mustMemorize 子集） |
| 评估 | 4 选 1 / 填空 | spelling + definition + application（gate 必过）+ teach-back / counterfactual / geo-inference（深度，可选） |
| 数据结构 | 词表 + reviewWordData | Topic 中枢（地理/史料/人物/对话脚本/必背词汇与概念） |
| 语言 | 英文为目标 | 中英分层（教学中 / 输出英）+ XP 经济驱动迁移 |
| 输入方式 | 打字 / 选择题 | 打字 + **语音输入**（对话探索层为主） |
| 地理位置 | 无 | **每个 Topic 强制 Geography Section（5 子模块）** |
| 视觉 | 无图（visualAnchor emoji） | 手画 SVG 地图 + 时间×地理双轴 |
| 跨模块 | 独立 | Topic 中枢辐射 vocab/reading/writing |

**这不是"在 history 模块复用 vocab 的代码"，是"在同一基础设施上跑两套不同的产品逻辑"。** 复用的是技术栈、UI 组件、AI 调用、auth、宠物激励 — 不是学习方法论。

---

## 11. 文档关系

| 文档 | 角色 |
|---|---|
| `docs/HANDOFF.md` | 项目基础架构（不变，全模块共用） |
| `docs/HANDOFF_HISTORY_MODULE.md` | History 模块的开发交接（首版交接前的初步设想，部分内容已被本文档迭代覆盖） |
| **`docs/HISTORY_PRODUCT_ANALYSIS.md`（本文）** | History 模块的**最新产品分析与设计方案** — 战略/方法/Schema/路线图 |

新对话 Claude 读取顺序：HANDOFF.md → 本文档 → HANDOFF_HISTORY_MODULE.md（仅作参考，本文档为准）。

---

_END OF DOCUMENT — Awaiting Winston 拍板，进入 MVP 开发_
