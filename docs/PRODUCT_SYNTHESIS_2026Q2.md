# Know U. Learning — 系统级产品复盘 + 整合策略

> **背景**：Atlas（历史模块）刚完成从 23 Topic 到 40 Topic 的彻底升级，引入 5 层 Annales 因果框架、应试要点、个人代入坐标、双语全覆盖、URL 动态路由、CI 测试。本文是从 4 视角对整个 Know U. 生态的复盘 + 整合战略。
> **作者**：4 个并行研究 agent（vocab / writing / focus / atlas）+ 1 个综合脑（PM/教育/儿童心理/工程）
> **时点**：2026 Q2，你睡前

---

## 0. Executive Summary

> **过去 4 个模块是"4 个独立产品"——这个判断错了。它们是 1 个产品的 4 个面**。

40 Topic 的 Atlas 升级不只是"内容补全"。它把整个 Know U. 的产品逻辑从"AI 词汇 / AI 写作 / AI 学习 app 之一"**改写成了**"未来公民养成系统"。理由：

1. Atlas 的 5 层因果框架 = AP DBQ 的骨架 = Writing 模块"thinking articulation"哲学的具象化训练场
2. Atlas 的 examPoints（~350 个具体词条）= Vocab 模块的天然内容供给
3. Atlas 的 ★ pin 因果链（antecedents → event → consequences）= 写作的"原因 → 后果"argument 模板
4. Focus 模块（设计完成、零代码）正好是把上面三个串起来的"今日 30 分钟"调度器

**真正的产品不是 4 个 app**，而是这条**单一学习链路**：

```
Atlas Topic（看见因果）→ Writing Essay（articulate 自己的思考）→ Vocab（沉淀词汇）→ Focus（明天再来）
```

每天 30 分钟。一年 365 天 × 30 分钟 = 一个想清楚 40 个文明转折点 + 写过 100 篇短文 + 掌握 1500 个 AP 词的孩子。这是**任何竞品都做不到**的复合产品形态。

下面 6 章按 PM / 教育 / 儿童心理 / 工程师 4 视角把这个判断展开，并给出**第一个 Sprint 的具体 backlog**。

---

## 1. 复盘：4 个模块当前真实状态

### 1.1 Vocab — 95% 完成度，**事实上的金牛**

**核心循环**：Guess（AI 个性化造句填空）→ Teach（2-5 种教法 + 5 种 closing 风格轮换）→ Cloze（每 10 词 1 篇 SSAT 风短文 + 5 题）→ SRS（[1,3,7,14,30] 天间隔）

**差异化**：
- AI 每个词现场生成场景 ≠ Anki/Quizlet 静态卡
- 学习画像：Willow 喜欢 Taylor Swift，例句就是 *"After the concert, Willow ___ her merch before sold out"*
- GOAL_DIRECTIVES 五条指令（受众/难度/风格/cloze 形式/场景）注入每次 LLM 调用 → SSAT 学生看到的句子和 IELTS 学生看到的不一样
- 教法轮换：image / nuance / etymology / tone / comparison，不重复

**已就位的资产**：
- localStorage v2 + Supabase v5 版本化同步（server authority，已修过 13234 词丢失 bug）
- 宠物系统 / XP 经济（喂养、进化）
- Daily quota（Free 10、Pro unlimited）+ deep-review cap 8
- 全部 5 类预设词单（SSAT/ISEE/SAT/TOEFL/IELTS + 美国生活 1000）

**真实成本**：~$0.50-1.50 / 用户 / 天 LLM 费用。每天 20 词 = 60-80 次 API 调用。

**关键缺**：
- monolithic 10k LOC 单文件（pages/vocab.js）
- 没有"消费侧" XP 流（赚 XP 但没东西买）
- mastery gate（拼写 + 定义 + 应用三档考核）还没下沉到 vocab 模块（只在 history MVP 出现过）

### 1.2 Writing — 60% 完成度，**事实上的产品哲学核心**

> 创始人原话："Writing 是 thinking articulation training，不是 essay correction。"

**已就位**：
- ✅ Socratic AI 完整 prompt：每次 2-3 句、问题结尾、绝不写内容、`[READY]` 信号转出大纲
- ✅ 6 维 brain fitness 模型（Creativity / Logic / Observation / Empathy / Critical / Expression）+ 雷达图（self vs 英语母语 baseline vs 中国学生 baseline 双虚线）
- ✅ 初始评估 6 任务（按年龄分级）→ baseline 分数
- ✅ L1-L4 等级（按累计 essay 数量晋级：0/4/11/21）
- ✅ 中文桥词机制：`【中文】` 标记 + quota 系数（L1 50 / L2 80 / L3 120 / L4 200 词每个桥）
- ✅ **桥词自动喂入 Vocab 模块**（这是真正的跨模块连接！）
- ✅ Golden Quotes 提取 + 个人金句库
- ✅ 写作画像：topics / style / personality 自动汇总

**致命缺口**：
- ❌ **零后端持久化** — 所有 essays + feedback + brainStats + goldenQuotes 全在 localStorage
- ❌ 一次清缓存 = 几年的 essay + 雷达图全部消失
- ❌ 多设备完全不同步
- ❌ 无 monetization gate（理论上 Pro 卖点最强的模块没收钱）
- ❌ 写作流程没有"防 AI 代写"验证（用户可以让 ChatGPT 写完粘进来）

**最重要的发现**：**桥词 → Vocab 这个跨模块管道已经在工作**。这意味着模块整合不是"未来愿景"，是已存在的事实，只是还没人意识到。

### 1.3 Atlas (History) — 刚升级完，**新的产品引擎**

40 Topic / 5 + 7 + 17 + 11（G5/G6/G7/G8）/ HSS-5/6/7/8 + AP World/US/EUR 三课全覆盖（除 HSS-7.6.4 十字军 + AP 后期 1900s 已补齐）。

**5 层 Annales 因果模型**（每个 ★ pin 都有完整 causality block）：

```
L0 ⛰️ 地理      永恒地形（terrain / climate zones / sea access）
L1 🌡️ 气候      千年节律（Medieval Warm / Little Ice Age / monsoon）
L2 🌾 民生      百年经济（pop / agriculture / trade / urbanization）
L3 ⚖️ 制度      代际秩序（law / feudal contract / bureaucracy / ideology）
L4 ⚡ 事件      直接触发（specific decisions / wars / treaties）
+ antecedents[]（前置 5-7 个）
+ consequences[]（后续 5-10 个）
+ summary 一句话否定个人英雄论
```

**示例 — 大宪章 1215**：
```
L0: 英伦三岛 + 北海贸易 → 海岛统一 + 男爵独立财源
L1: 中世纪暖期（950-1250）300 年农业产能翻倍 → 商人 / 教士 / 骑士独立阶级
L2: 1200 英国 250 万人 / 伦敦 3 万 / 半数非农
L3: 诺曼征服（1066）封建契约传统 + 罗马法复兴 + 教会司法权
L4: 1204 失诺曼底 + 1213 教皇绝罚 → 25 男爵 1215 联合举兵
antecedents: 1066 诺曼征服 / 1100 加冕特许 / 1204 失诺曼底 / 1213 绝罚
consequences: 1225 重颁 / 1265 西蒙议会 / 1628 权利请愿 / 1689 权利法案 / 1787 美国宪法
```

**这就是 AP DBQ 的标准 thesis 结构**。"Magna Carta is not John's accident — it's a structural inevitability from L0+L1+L2+L3+L4." 即背即用。

**其他刚就位的资产**：
- examPoints（每 Topic 7-11 项具体应试要点，~350 个）— bilingual
- 个人代入：家乡（北京）/ 现在（Irvine）/ 当前 Topic 三标记，每张图自动检测视口显示
- URL 动态路由 `/atlas-lab/[viewId]`（每页 ~700KB 而非 23MB 单页）
- SVG 完整 a11y / 手机触控区放大 / pin label anti-collision
- ISO_NUM 250 国家代码（之前美/加/墨/古巴静默失败修复）
- 162 自动化测试 + GitHub Actions CI
- @vercel/analytics 埋点 `atlas_view` + `atlas_star_pin_click`

**关键缺**：
- Atlas 是免费的（教学公益定位）→ 没接 Supabase 也无 paywall
- 无进度持久化（关闭页面就重置）
- 无书签 / 无"已读" / 无 quiz / 无老师作业 / 无社交分享

### 1.4 Focus — 0% 实现，**纸面上的执行 OS**

> 你的 memory 说 "在做"。Explore agent 的代码扫描结果：**零代码**。
> /Users/williamai/.claude/plans/7-irvine-snoopy-stonebraker.md 设计完整，4 周计划文档具体到行 — 但 `pages/focus*` / `lib/focus/` / `components/focus/` 都不存在。

**设计上的 strong opinion**（值得记住，因为这些选择直接影响整合）：
- 4 张独立关系表（不用 user_progress JSONB）— Cron + Twilio webhook + 公开分享页有非客户端写入源，乐观锁会冲突
- 13-15 岁同龄朋友 AI 人格（已有完整禁用清单：👍🎉🌟 禁用 / "you got this" 禁用 / "should" 禁用 / 主动讲解禁用 / 情绪审判禁用）
- 三场景语气分化：晨稳 / 放学接纳 / 睡前短促
- AI 不讲学科内容（讲解是 Vocab/Writing 的活）
- 配色 teal #4a6d8c 区分 Vocab 橙 / Writing 紫
- 短链 ku.li/f/<slug> 通过 Vercel rewrite 实现，零额外组件
- 计划成本 $2.2 / 月（Twilio + LLM）
- A2P 10DLC 注册等周期 1-3 周（关键路径风险）

**Focus = 整合的胶水**。没有 Focus，Atlas + Writing + Vocab 是三个独立网页；有了 Focus，是孩子的"今天 30 分钟做这三件事"调度器。

### 1.5 Plan — 100% 完成，但只是 Stripe 支付页

不要混淆：`pages/plan.js` 是订阅页（Free / Basic $20/月 / Pro $50/月 + EARLYBIRD coupon + BYO API key 半价），不是"学习计划"模块。

---

## 2. 核心洞察 — Atlas 升级让什么变得可能

### 洞察 1：Atlas 不是"历史模块"，是**因果思维训练引擎**

40 Topic 的产品本质不是"40 个历史故事"，是 **40 个 thinking articulation training 场景**。每个 Topic 提供：
- 现成的 5 层因果支架（学生不需要自己想 L0-L4 是什么）
- 现成的反英雄论 thesis（"Not John's accident — structural inevitability"）
- 现成的 antecedents/consequences 时间链
- 双语 examPoints 提供"在这个因果故事里要记住的具体术语"

**这正好是 Writing 模块需要的**。Writing 的 Socratic AI 现在没有"题材库" — 学生坐着想"今天写啥"。如果让 Atlas Topic 直接当 prompt：

> "你刚看完 Magna Carta 1215。如果你是 1213 年那个被税征到怀疑人生的英格兰男爵，写 200 词给国王 John 的信。"

**写作题题感立刻 +10**。学生不是写空中楼阁，是 **standing on the shoulders of L0-L4 因果脚手架**。

### 洞察 2：Atlas examPoints 是 Vocab 的天然内容供给

例如 `magna-carta` 的 examPoints：
```
King John — 暴政 + 输丢诺曼底
Magna Carta 1215.6.15 Runnymede 兰尼米德
"due process of law" 正当法律程序条款（Clause 39）
Habeas corpus 人身保护令
Common Law 普通法
Bill of Rights 1689 / US Constitution 5th Amendment
```

**这些 6 项每一项都是 SSAT/ISEE/SAT vocabulary**：tyranny / clause / habeas corpus / amendment / suffrage / writ。

如果 Vocab 模块有一个新 entry "Atlas pack — Magna Carta Vocabulary"，把这 8-10 个词单独抽出来做 Spaced Repetition + 配上 *Magna Carta context* 的填空（Vocab 已经做的），就是**完美的"主题阅读 + 词汇 + 应试"三合一**。

### 洞察 3：Atlas 因果时间链 = Writing 论证模板

每个 ★ pin 的 antecedents/consequences 给出了 7-12 个有时间序的事件。这是 **AP LEQ（Long Essay Question）的"continuity and change over time"题型的现成训练数据**。

孩子写 LEQ："Was Magna Carta a Turning Point in English Constitutional History?"
- 找 antecedents：1066 / 1100 / 1204 / 1213 — 给出"before"
- 找 consequences：1225 / 1265 / 1628 / 1689 / 1787 — 给出"after"
- 结合 L3 institutions：feudal contract → parliament → bill of rights — 给出 continuity
- 论 L4 trigger：1204 失诺曼底 → 1215 — 给出 change moment

**写论文从"想不出"变成"写不快"**。

### 洞察 4：Atlas 个人代入（家乡 + 现在）解锁了独特身份叙事

"家乡 · 中国" 在 Pre-Columbian 1450 地图上不显示（视口外），在 Tang/Song 1000 年地图上显示。"现在 · Irvine" 在 Native Americans 1491、Westward Expansion 1803、Manifest Destiny 1848、Civil Rights 1965 都显示。

**孩子第一次在产品里看到自己的位置参与历史**：Willow 现在站着的 Irvine 这块地，1491 年是 Tongva / Acjachemen 部族的家，1803 年是西属加州，1848 年通过 Treaty of Guadalupe Hidalgo 成为美国，1965 年是 Civil Rights 运动一部分。

**这是身份形成的产品级表达**。任何 Khan/Duolingo/Anki 都做不到这个。

### 洞察 5：Focus 的 3 daily checkin = 整个学习产品的 onload 入口

如果 Focus 的早 7:30 SMS 不只是"今日 3 小步"，而是：
```
morning. today's 3:
1) atlas: tang-song 1000 (10m)
2) writing: 200 words on '为什么宋朝商业起来了？' (15m)
3) vocab: 5 words from yesterday (5m)
ku.li/f/ab3d
```

**Focus 就是 Atlas + Writing + Vocab 的统一前门**。

---

## 3. 四视角综合分析

### 3.1 PM 视角 — 重新定位 + 货币化重构

#### 3.1.1 重新定位：从"AI English app"升级到"未来公民养成系统"

**当下市场标签**："AI 词汇 app + AI 写作 + 历史地图"
**重新定位**：**"K12 思维力 OS — 一站式 SAT/AP 准备 + 思考力 + 执行力"**

这个定位回应中国家长 3 个最深的焦虑：
1. **应试**（看得见）：SSAT/SAT/AP 分数
2. **AI 时代被淘汰**（看不见但更深）：孩子是不是"懂得让 AI 帮自己思考的人"，还是"被 AI 替代的人"
3. **亲子关系**（最深）：孩子用得开心，父母看得见进步，家庭吃饭话题升级

**当前货币化错配**：
- 最便宜实现的 Vocab → 是 Pro 主收费产品
- 哲学最贵的 Writing → 完全免费且无 backend
- 最有教学公益感的 Atlas → 免费定位
- 最值钱的 Focus → 没动工

**建议货币化重构**：

| 模块 | 现状 | 建议 | 理由 |
|---|---|---|---|
| **Vocab** | Free 10 / Pro unlimited | 保持 | 已经 work，是基本盘 |
| **Writing** | 全免费 | Free 5 篇 essay/月 / Pro 无限 + portfolio export + 多设备同步 | 哲学核心**必须**收费才有产品张力 |
| **Atlas** | 免费 | **保持免费**，但加 "Pro Atlas Pack"：每周 1 篇老师讲解音频 + DBQ 写作模板下载 + 跨 Topic 比较器 | 公益定位是品牌护城河，付费层只卖增值 |
| **Focus** | 未做 | $5/月 add-on：Twilio SMS + 早卡片 + 老师作业系统 | 高频触达 + 真值价值（解决 ADHD-leaning 孩子的核心痛点）→ 可独立定价 |
| **整合套餐** | 不存在 | **"Year 7 Bundle" $30/月** = Vocab + Writing + Atlas + Focus 全开 | 中国家长偏好打包 + 产品逻辑天然耦合 |

**北极星指标**应该改：
- 旧：Vocab DAU
- 新：**Weekly Causal Loop Completion** = "本周完成 Atlas Topic + Writing Essay + Vocab Review 三件事的活跃用户数"

这个指标既测留存（每周回来），又测产品深度（三件事都做），又测整合健康度（如果只测 Vocab DAU 永远看不到 Writing 价值）。

#### 3.1.2 竞争对手分析

| 对手 | 强项 | 不在做 |
|---|---|---|
| **VIPKid / 51Talk** | 1-on-1 真人外教 | 系统化课程、写作思维训练、应试指南 |
| **Whales English** | ESL 课件、儿童动画 | 个性化、AP 准备、跨学科 |
| **Beijing Sparrow / 51Talk Kids AI** | AI 1-on-1 对话 | 思维框架、写作、历史、跨年级路径 |
| **Duolingo** | 游戏化、习惯成型 | 中文母语切换、应试、写作 |
| **Khan Academy** | 全免费、覆盖全学科 | 中文、个性化、社交、应试本地化 |
| **Class.com / IXL** | 美国学校采购 | 中文、跨文化、家长可见性 |
| **Amplify / TenMarks** | 美国学校 ELA / Math | 中文桥接、AP 准备、AI 个性化 |

**Know U. 唯一不可复制的优势**：
1. **founder + daughter 共创** = 真实 PMF 信号（不是市场调研出来的，是父亲看着女儿用出来的）
2. **跨模块整合** = 没有任何一个对手在尝试做 Vocab + Writing + Atlas + Focus 一体化（要么只做一个，要么各模块完全分离）
3. **5 层因果框架** = 教育学差异化（Annales 学派 + Bloom + AP DBQ rubric 在一个产品里融合，没人这么干过）
4. **中文桥接哲学** = "linguistic threshold effect" 是一个真问题，桥词→词汇库自动 loop 没有对手在做

**关键品牌锚点**：
- 颜色系统：Vocab 橙（动力）/ Writing 紫（思考）/ Atlas parchment（历史）/ Focus teal（执行）
- 4 个独立 AI 人格（不是一个 ChatGPT 包装）
- "为 Willow 的女儿造的产品" 是 brand origin story（家长会更信"为自家孩子做的"产品）

#### 3.1.3 6 个月路线图（按整合优先级）

**Q2.1（接下来 4 周）— 整合数据底座**

W1: Supabase schema 设计 — atlas_progress / atlas_bookmarks / writing_essays_v2 / writing_brain_scores / focus_*（依据 Focus 4 张表设计）
W2: writing 模块 backend 持久化（**最高优先级 — 现状是 localStorage 单设备 = 每个 Pro 用户随时可能丢数据**）
W3: atlas progress + bookmarks 写库（用户登录后写 last_viewed / star_pin_clicks）
W4: 跨模块"今日推荐" hook：Atlas Topic 完读 → 推荐 Writing Prompt → 推荐 Vocab Pack

**Q2.2（5-8 周）— Focus MVP**

按 4 周计划走，但**简化版**：先不做 Twilio（A2P 审批 3 周），用 PWA 推送 + 邮件代替；语音用 Web Speech API；3 daily checkin 全部 web 优先，SMS 是 phase 2

**Q2.3（9-12 周）— 整合套餐发布**

- 新订阅页：Year 7 Bundle $30/月
- 营销 hook："让 ChatGPT 不能替代你的孩子"系列
- 内容：5 个 Topic 完整跨模块走完（Atlas + Writing + Vocab）的家长见证视频
- Willow 自己出镜 30 秒短视频："I went from hating history to thinking I might major in it"

**Q3 — 老师 / 学校通道**

- 老师后台：assign Topic 给班级
- 家长后台：周报（雷达图 + 完成率 + 老师评语）
- 试点 3 个 Irvine USD 7 年级班级（Willow 学校）

#### 3.1.4 风险与缓解

1. **风险**：4 模块整合复杂度爆炸 → **缓解**：先做"数据契约"（统一 user_id + 统一事件流），再做 UI 整合
2. **风险**：Pro 用户感觉"Vocab 升级到 Year 7 Bundle 涨价" → **缓解**：grandfather 现有 Pro 永久 $20，新订阅 $30
3. **风险**：Atlas 免费定位与 Year 7 Bundle 冲突 → **缓解**：Atlas 永远全免费，Bundle 卖的是 "Pro Atlas Pack" + Writing + Focus
4. **风险**：Focus 要做 Twilio + Cron + Webhook，工程债跳跃式增加 → **缓解**：MVP 0 用 web push 不用 SMS；女儿亲测 4 周再决定要不要 Twilio
5. **风险**：双减政策（中国 K12 课外培训受限） → **缓解**：用户主体是 ABC / 海外华人 / IB / AP 路径学生，不在双减范围

---

### 3.2 教育专家视角 — 从"模块叠加"到"学习循环"

#### 3.2.1 当前 4 模块对应 Bloom's Taxonomy 实际位置

| Bloom level | 当前覆盖 | 评价 |
|---|---|---|
| Remember | Vocab（高强度）+ Atlas examPoints | 重 |
| Understand | Vocab Teach phase + Atlas causalSummary | 中 |
| Apply | Vocab Cloze + Writing essay | 中 |
| Analyze | Atlas L0-L4 因果分解 | **Atlas 后大幅增强** |
| Evaluate | Writing 雷达 6 维 + AP DBQ | 待整合 |
| Create | Writing 自由表达 | 弱（无人写完后存档反复读） |

**关键发现**：Atlas 升级后，**Analyze 这一格从空白变满**。但 Evaluate / Create 还没接通。整合后能做的：
- Atlas Topic 看完 → Writing 写"如果我是这个时代的人，我同意/不同意 XXX 政策" → AI 评分 6 维 → 雷达更新

#### 3.2.2 主动学习理论（Dale's Cone of Experience）匹配

主动学习留存率：**Doing > Discussing > Watching > Reading > Hearing**

| 模块 | 主要模式 | Cone 位置 | 留存率估计 |
|---|---|---|---|
| Vocab | Doing (cloze) + Discussing (AI teach) | 上层 | 75% |
| Writing | Doing (write) + Discussing (Socratic) | 顶层 | 90% |
| Atlas | Reading + Watching (map) | 中下 | 30% |
| Focus | Doing (实际执行任务) | 顶层 | 90% |

**整合后 Atlas 能拉到顶层**：当 Atlas 的 ★ pin 不是被动读，而是触发 Writing prompt → 主动写 → AI 反馈，**留存率从 30% 升到 80%+**。

#### 3.2.3 Spaced Practice + Retrieval + Interleaving 三原则

教育心理学最稳的三个原则（Dunlosky 2013 元分析）：
1. **Spaced Practice**（间隔重复）：Vocab SRS 已实现
2. **Retrieval Practice**（主动检索 > 被动重读）：Vocab Cloze + 待加 Atlas Quiz
3. **Interleaving**（穿插不同主题 > 同主题集中）：**当前完全缺失**

**整合后 Interleaving 自然出现**：
- 周一：Atlas Tang-Song 1000 + Writing 论 "为什么宋朝商业繁荣" + Vocab 4 个 Tang 词
- 周二：Atlas Magna Carta 1215 + Writing 比较"Tang 朝官僚 vs 英国封建" + Vocab 4 个英国词
- 周三：Atlas Mongol 1241 + Writing 论"游牧帝国为什么短命" + Vocab 4 个蒙古词

interleaving 在跨 Topic 比较中自然形成。**这是任何单 Topic app 给不了的认知收益**。

#### 3.2.4 AP DBQ rubric 完美对接

College Board AP World History DBQ 7 分 rubric：
1. **Thesis** (1pt) — Atlas 5 层 causality summary 是现成 thesis
2. **Contextualization** (1pt) — Atlas L0+L1 是现成 context
3. **Evidence** (3pts) — Atlas examPoints + antecedents 是现成 evidence
4. **Analysis** (2pts) — Atlas L4 + consequences 训练 causation analysis

**一个学生用 Atlas + Writing 走 6 个月 = 自然写出 5 分 DBQ**。这是任何线下补习班都给不了的 ROI。

#### 3.2.5 SDT（Self-Determination Theory）适配

Deci & Ryan 三大内驱力：
1. **Autonomy**（自主感）：现状 ✓ — 学生可以选 Topic 顺序、Vocab 用自己的话、Writing 用 Chinese bridge
2. **Competence**（胜任感）：现状部分 — Vocab XP / Brain Fitness 雷达有，但 Atlas 0 反馈
3. **Relatedness**（关联感）：现状缺 — 模块孤岛，孩子和谁分享

**整合后 Relatedness 解锁**：
- Focus share-card 给同学（同龄朋友互看作业 = relatedness）
- 家长后台周报（亲子互动话题）
- 老师 assign（师生 relatedness）
- Willow 自己作为 founder daughter co-creator（meta relatedness）

#### 3.2.6 推荐学习节奏（"Day in the life of a 7th grader"）

**典型周一晚 8-8:45 PM**：

```
8:00 PM — Focus 早晨 SMS 已弹出（早 7:30 推过）：
         "morning. today's 3:
          1) atlas: 火药帝国 1600 (10m)
          2) writing: '为什么 Akbar 政教宽容？' 200 words (20m)
          3) vocab: 5 new words from yesterday's writing (10m)
          you do you ⚡ ku.li/f/k7d2"

8:00 PM — 打开 Atlas，选 G7 → 火药帝国 1600
        — 看 5 层因果（地理走廊 + 小冰期 + 印度 1 亿人 + millet 制 + 1453 君堡 ...）
        — 点 ★ 伊斯坦布尔 pin → 看完整 causality block
        — 点时间链 1453 → 跳到 Byzantine 500 看一眼君士坦丁堡千年史
        — 看到 examPoints "Akbar — sulh-i kul, abolished jizya 1564"
        
8:10 PM — 打开 Writing，看到推荐 prompt（Atlas 自动推过来）：
        "Was Akbar a religious revolutionary or a savvy political pragmatist?"
        — Socratic AI："想想 Akbar 治下 Hindu 占人口 80% — 如果他是 zealot 会怎样？"
        — 学生用【中文】写 200 词（混 4 个中文桥词）
        — AI 反馈：6 维 Brain Fitness +Critical 2、+Empathy 1
        — 桥词自动 push 进 Vocab：tolerance / pragmatist / decree / non-believer
        
8:30 PM — 打开 Vocab，桥词已在队列
        — 4 词 + 1 词从昨天 SRS（pluralism）
        — 5 词每个 ~3 min 完成 = 15 min
        
8:45 PM — Focus 睡前 checkin：
        — 大按钮"3/3 完成"打勾
        — Spark（Focus AI）："clean run. rest. ⚡"
        — 数据自动 push：今日完成度 100%
        — Brain Fitness +3、Vocab streak +1、Atlas Topic +1
        
8:46 PM — 关电脑去刷牙
```

**45 分钟，覆盖 Bloom 6 层、SDT 三内驱、interleaving / spaced / retrieval 三原则、AP DBQ rubric 4 项**。

任何一个模块单独做不到。

---

### 3.3 儿童心理学视角 — Willow 是产品的真正客户

#### 3.3.1 12-13 岁的 Erikson 阶段：Identity vs. Role Confusion

**这个年龄的核心心理任务**：构建"我是谁"。表现：
- 强烈的同伴敏感（同学怎么看比家长怎么看重要 10 倍）
- 试探不同身份（今天 cosplay Belle Delphine 明天 Taylor Swift fan）
- 拒绝"被定义"（家长说"你是个 XX 孩子"立刻反弹）
- 自主感超敏感（"被告知做什么"立刻关门）

**产品已对的**：
- Focus AI 人格 13-15 岁同龄（不是家长 / 老师 / 教练）
- AI 不主动讲学科内容（避免"教训"感）
- 禁用 👍🎉🌟（parent emoji）
- "you got this"/"don't worry" 禁用
- 用 "could" 不用 "should"
- 学生爆粗 AI 不跟也不举报

**产品可以更对的**：
1. **身份表达层**：Atlas 的"家乡 + 现在 + Topic"三标记是身份探索的天然入口。可以做"My Atlas Journal" — 学生选 5 个对自己最有意义的 Topic + 一句话理由 → 生成 personal cover page
2. **同伴可见层**：Focus share-card 必须做。一个孩子愿意主动分享给同学的产品 = 同伴 endorsement，留存率提升 3-5 倍
3. **失败安全层**：所有学习闭环必须有"我今天没做完也没事"出口，否则压力 spiral。Focus 已设计（"tomorrow's a new draft. logged."），需要传染到其他模块

#### 3.3.2 发散型 / ADHD-leaning 性格的产品适配

Willow 性格描述："发散开朗、怕高压、不爱枯燥记录"。

这是 **ADHD-leaning trait** 的 polite 描述。这个性格群体（占 K12 中超 10%）有共同痛点：
- **执行功能弱**：知道要做但开始不了
- **time blindness**：对截止日期感受迟钝
- **dopamine 寻求**：必须"看起来好玩"才能 onload
- **过度专注 vs 走神切换**：要么入迷 3 小时，要么 5 秒走神
- **羞耻敏感**：失败 / 落后 / 被批评的反应远比平均孩子强

**产品已对的**：
- 5 层因果颜色 + 图标 + 短文字（dopamine 寻求 ✓）
- Topic 时间序按年代排（time blindness 矫正 ✓）
- Cloze passage 短（150-180 词不超载）
- AI 不审判情绪（羞耻敏感 ✓）
- Focus 早 SMS"今日 3 小步"（开始不了 → 给"3 小"步）

**产品可以更对的**：
1. **进入仪式 / Hook**：每个模块第一秒看到的应该是"刺激"而非"任务"。Atlas 的 onboarding tour 已经对了（4 张卡片、一键关闭）。Vocab 第一秒看到的还是 "今日 quota"，应该改成"今天等你的 5 个新词配的小故事"
2. **进度可见的密度**：发散型孩子需要 **每 3-5 分钟** 一个 reward signal。Vocab 已经有（每词 +100 XP）。Writing 一篇要 20 分钟才有 brain fitness +N，太久。中段加 micro-reward："你写了 50 词！🌱"
3. **"逃跑出口"按钮**：每个模块顶部应该有"我现在不想学，给我一个 5 秒小事"按钮 → 1 张 Atlas 小知识卡 / 1 个 Vocab 词复习 / 1 句 Golden Quote。让"放弃"路径变成"轻量切换"路径
4. **跨设备碎片化进度**：发散型孩子在地铁上 2 分钟、在等校车 3 分钟、睡前 5 分钟 — 这些碎片对她最舒适。Vocab 设计已对（按词为单位）。Atlas 现在不行（要打开整个页面）。Writing 完全不行（每篇 essay 一坐 20 分钟）。整合后必须支持"3 分钟模式"

#### 3.3.3 Self-Determination Theory（细化）

**Autonomy**（产品已强）：
- ✓ Topic 自由选
- ✓ 中文桥可用
- ✓ Vocab 可跳过

**Competence**（产品中等）：
- ✓ Vocab XP / Brain Fitness 雷达
- ❌ Atlas 看完无 feedback signal
- ❌ Focus 完成率没 visible
- 整合应该有：**单一 visualization** 让孩子一眼看到"我这周的轨迹"。建议加一个"My Growth"页：4 模块整合的 weekly trajectory + 雷达图 + Topic 完成地图（视觉上是 40 个城市点亮）

**Relatedness**（产品最弱）：
- ❌ 现在完全孤岛
- 必须做：
  - Focus share-card（同学层）
  - 老师 assign + comment（师生层）
  - 家长 weekly digest（亲子层）
  - **Willow 元层**：把"founder's daughter co-creator" 这个故事讲清楚 — Willow 自己拍 30 秒 "this is what I think about the new feature" 视频，让其他孩子知道这是"同年龄人造给同年龄人的产品"

#### 3.3.4 Co-creator 身份是巨大的心理资本

**Memory 里你写过**："女儿是完全知情的共创者 + beta tester"。

这不是营销话术，这是**真实的心理学杠杆**。Co-creator 身份给 Willow 的：
1. **Agency**：她不是用户，是作者之一 → 自主感天花板
2. **Identity boost**："我是某个产品的共创"是简历 + 申请大学 essay + 中学社交资本
3. **Resilience**：产品不好用她会主动反馈而不是放弃 → 留存最强保证

**产品级表达**：
- About 页：Willow 名字、年龄、学校（脱敏）、一句话她对产品的话
- 每次重大更新："Willow 怎么说"小卡片
- Bug bounty："发现一个 bug 给一个 Pro 月" — Willow 自己也要发，让她带头

#### 3.3.5 Failure-safe 的具体设计

跨模块原则："**孩子任何路径都不该感到'我失败了'**"。

| 触发 | 当前反应 | 建议反应 |
|---|---|---|
| Vocab 答错 | "再试一次" | 已经接近最佳；不需改 |
| Vocab daily quota 用完 | "请先复习" | 已经 OK；可加"你今天已经 +500 XP，明天有 surprise word" |
| Writing 写不下去 | 无明确出口 | 加"暂停按钮"→ AI 给 1 个 hook（Sentence starter）|
| Atlas Topic 看不下去 | 无反馈 | 加"3 分钟版"按钮 → 跳过中间，看 5 行因果 + 1 个 examPoint + 离开 |
| Focus 任务全没做 | （未实现）| Spark："tomorrow's a new draft. logged. ⚡"（已设计）|
| 一周连续 3 天不开 | 无 | 不要发 push！等她自己回来。家长后台收到 alert |

**心理学第一原则**：羞耻是发散型孩子最大的回头杀手。任何"你落后了"信号都会让她**永久关掉这个 app**。

#### 3.3.6 美国 ABC vs 中国本土孩子的心理差异

Willow 是 ABC（美国出生华裔）/ 老华侨第二代。她的心理画像和上海/北京同龄孩子不一样：
- **bilingual identity**：在英语和中文之间不是切换，是同时存在
- **cultural double-vision**：父母讲的"勤奋"和同学讲的"chill" 同时是真理
- **比较焦虑双轨**：父母拿"中国孩子"比她，老师拿"白人孩子"比她
- **历史记忆模糊**：知道自己是中国人但不知道朝代

**产品对这个画像超合**：
- 中文桥（不是"用中文翻译"，是"两种语言同时是你的母语"）
- 个人代入家乡 + 现在（双 anchor 不要选边）
- Atlas 中国 + 美国 + 世界 三轨（不偏其中之一）
- 5 层因果（西方 Annales 学派 + 中国"势"概念暗合）

**这个画像在美国华人 K12 是没有人在做的细分市场**。当前所有 ESL 产品当 ABC 是 ESL，当中文学校学生当中文水平 0。Know U. 把他们当**双语并行的成年人**，是 brand differentiation 的真正源头。

---

### 3.4 全栈工程师视角 — 整合架构 + 数据契约

#### 3.4.1 当前架构的实际碎片度

```
模块         | 数据存储          | 同步                | 跨模块写        | 跨模块读
-----------|---------------- |-------------------|---------------|-----------
Vocab       | localStorage v2 | Supabase user_progress JSONB v5 | 写 vocab list  | 无
Writing     | localStorage    | ❌ 无 backend       | 写 vocab via桥词 | 无
Atlas       | 无（SSG）        | 无                 | 无             | 无
Focus       | 不存在            | 不存在               | 不存在           | 不存在
```

**问题**：
1. 唯一的 Supabase 写入路径是 `user_progress` JSONB 单 column，所有模块共用一个 doc，乐观锁会冲突（这正是 Focus 设计选独立表的理由）
2. Writing 完全 localStorage 单设备 = **任何 Pro 用户随时可能丢数据** — 这是首要 P0
3. Atlas 完全无持久化（"已读"/"book mark" 都要从 0 开始）
4. 模块间唯一的真连接是 Writing 桥词 → Vocab list（已 work）

#### 3.4.2 建议数据契约

**统一围绕 user_id 的关系表 schema**：

```sql
-- 用户画像（profile 扩展）
profiles
  user_id, email, display_name, role (student/parent/teacher),
  grade INT,
  hometown_lon NUMERIC, hometown_lat NUMERIC, hometown_label_cn TEXT, hometown_label_en TEXT,
  current_lon NUMERIC, current_lat NUMERIC, current_label_cn TEXT, current_label_en TEXT,
  study_goal TEXT,            -- SSAT/ISEE/SAT/TOEFL/IELTS/AP-WHAP/AP-USH/AP-EURO
  level INT,                  -- 1-4 across all modules
  brain_fitness JSONB,        -- {creativity:int, logic:int, observation:int, empathy:int, critical:int, expression:int}
  total_xp INT,
  created_at, updated_at

-- Atlas 模块（4 张表）
atlas_progress
  user_id, topic_id, last_viewed_at, view_count, exam_points_opened,
  star_pin_clicks JSONB,      -- [{pin_id, clicked_at}]
  PRIMARY KEY (user_id, topic_id)

atlas_bookmarks
  user_id, topic_id, pin_id NULLABLE, created_at
  PRIMARY KEY (user_id, topic_id, pin_id)

atlas_assignments
  id, teacher_id, student_id, topic_id, pin_id NULLABLE, due_at, notes, completed_at

atlas_quiz_attempts          -- 未来 quiz mode
  id, user_id, topic_id, exam_point_id, correct, attempted_at

-- Writing 模块（5 张表 — 替代 localStorage）
writing_essays
  id, user_id, prompt_id, prompt_text, category, ideas_chat JSONB, outline JSONB, content TEXT,
  word_count, status, created_at, completed_at

writing_feedback
  essay_id, scores JSONB, overall, summary, annotations JSONB, golden_quotes JSONB,
  brain_gains JSONB, bridge_translations JSONB, generated_at

writing_brain_scores
  user_id, dimension, score, source_essay_id, recorded_at

writing_golden_quotes
  id, user_id, essay_id, text, theme, share_token, created_at

writing_profile             -- AI 提取的画像
  user_id, topics JSONB, style TEXT, strengths JSONB, growth_areas JSONB, personality TEXT, updated_at

-- Vocab 模块保持现状（user_progress JSONB v5），但抽出关键索引
vocab_completed_words       -- 加这张方便跨模块 read
  user_id, word, mastered_at, review_level, next_review_date
  PRIMARY KEY (user_id, word)

-- Focus 模块（已设计的 4 张表）
focus_tasks
focus_daily_plans
focus_checkins
focus_share_cards

-- 跨模块统一事件流
learning_events             -- single source of truth
  id, user_id, module ENUM('vocab','writing','atlas','focus'),
  event_type, ref_id, payload JSONB, created_at
  -- 例：('atlas', 'topic_view', 'magna-carta', {duration_ms: 240000})
```

#### 3.4.3 跨模块数据流（ASCII 架构图）

```
                  ┌─────────────┐
                  │   profiles  │ ◄────── 单一身份源
                  └──────┬──────┘
                         │
        ┌────────────────┼─────────────────────┐
        │                │                     │
        ▼                ▼                     ▼
   ┌────────┐      ┌────────┐             ┌────────┐
   │ Atlas  │      │Writing │             │ Vocab  │
   │ Topics │      │Essays  │             │ Words  │
   └────┬───┘      └────┬───┘             └────┬───┘
        │ ★ pin            │ feedback             │ daily review
        │ click            │  brain gains         │ history
        │ exam points      │  golden quotes       │
        │                  │  bridge words ──────┐│
        │                  │                     ▼▼
        │                  │              ┌──────────────┐
        ▼                  ▼              │ vocab_words  │
   ┌────────────────────────────────┐     │  (queue)     │
   │      learning_events           │     └──────┬───────┘
   │    (single event stream)       │            │
   └─────────────┬──────────────────┘            │
                 │                               │
                 ▼                               ▼
          ┌──────────────┐              ┌─────────────┐
          │   Focus      │ ◄────────────│  Daily Plan │
          │  daily_plans │              │  generator  │
          └──────┬───────┘              └─────────────┘
                 │
                 ▼
          ┌──────────────┐
          │  Twilio SMS  │
          │  / Web Push  │
          └──────────────┘
```

**核心数据流（每天）**：
1. Cron 03:30 PDT 跑 — 读 `learning_events` 过去 24h，AI 决定明日推荐：1 Atlas Topic + 1 Writing prompt + 5 Vocab words（其中部分来自昨天的桥词）
2. Cron 07:30 — 读 daily_plan 快照发 SMS / push
3. 学生白天点 Topic → atlas_progress 更新 + learning_events 写入
4. 写 essay → writing_essays + writing_feedback + writing_brain_scores 全写
5. 桥词写 → vocab_words queue 排进 Vocab 明日新词
6. 睡前 → focus_checkins 收尾

**关键架构决策**：
- `learning_events` 是 SSOT（Single Source of Truth），其他表是物化视图
- Cron + Twilio 走 service role key，避开 RLS
- 客户端写 RLS owner-only，service role 写时跳过
- 统一在 `lib/api.js` 加抽象 → 各模块不直接 talk to supabase，都 talk to event stream

#### 3.4.4 优先级（接下来 4 周）

**Week 1：数据契约 + Writing backend（最高 P0）**

1. Supabase schema 全部建表（含 RLS）
2. Writing 全部从 localStorage 迁移到 supabase（最危险数据先救）
3. Atlas 加 user_id 检测：`if (user) writeAtlasProgress`
4. 建 `learning_events` + 在每个写入点也写一条事件

**Week 2：Atlas 整合 + 老师作业**

1. URL pin state（`?pin=trail-of-tears-1838`）
2. atlas_assignments 表 + 老师后台 MVP
3. atlas_bookmarks UI
4. Vercel Analytics → learning_events 入库（不再依赖 Vercel）

**Week 3：Daily Plan 生成器 + Focus 骨架**

1. Cron 03:30 PDT 生成明日 plan（AI 决策）
2. Focus 4 张表建好
3. /focus/today 页面（PWA，先不接 Twilio）
4. 早晨 web push（A2P 等周期内的过渡方案）

**Week 4：跨模块 hook + 套餐货币化**

1. Atlas 完读 → Writing prompt suggested
2. Writing 完成 → Vocab queue 加入桥词
3. Focus daily plan 串起 3 模块
4. Year 7 Bundle $30/月 订阅页

#### 3.4.5 必须现在决策的架构选择

1. **localStorage 当 buffer，Supabase 当 truth**？还是 **Supabase 当 truth，localStorage 当 cache**？— 后者更稳。Vocab 现在是后者（v5 重构后），其他模块跟齐
2. **客户端 PII（家乡/现在）放哪**？— `profiles.hometown_lon/lat` + 客户端读 `useUser()` + 客户端投影。已就位。
3. **多语言现在不要扩**：保持 cn/en 双 hardcode，下个语言（ES/KO）来了再上 next-i18next
4. **OG 图自动生成**：用 `@vercel/og` edge runtime，per-Topic 1200×630。一周内必上 — 微信群/iMessage 分享是冷启动核心

#### 3.4.6 技术债清单（按整合阻力排序）

| 债 | 阻力 | 修法 | ETA |
|---|---|---|---|
| Writing 无 backend | **整合最大阻力** | 先迁 + supabase | W1 |
| ISO_NUM 手维护（虽然刚扩到 ~250）| 中 | 改 build script 自动化 | 后置 |
| Vocab 10K LOC 单文件 | 中 | 提取 review/cloze/teach 子组件 | 后置 |
| 4 处 HC 颜色重复 | 低 | 统一到 lib/theme.js | W4 |
| examPoints flat string | 中（quiz mode 阻力）| 改 `{term, def, year?}` 结构 | W3 |
| AI cost 不透明 | 中 | 加 `lib/llm-cost-tracker.js` | W4 |
| 多设备桥词 race condition | 高（潜在）| 用 learning_events ID dedupe | W2 |
| Atlas 1.2 MB 页 | 低（已优化）| 进一步 viewport-bbox aggressive trim | 后置 |

#### 3.4.7 LLM 成本全局视图

| 模块 | 主要调用 | 频次 | 单次 cost | 月度（20 个 Pro 用户）|
|---|---|---|---|---|
| Vocab | guess + classify + teach + cloze | 60-80 / 用户 / 天 | $0.01-0.02 | $300-1200 |
| Writing | Socratic + outline + feedback | 5-10 / 用户 / 天 | $0.05-0.15 | $300-900 |
| Atlas | 0（全 SSG）| 0 | 0 | $0 |
| Focus | extract + brain dump | 3-5 / 用户 / 天 | $0.02-0.05 | $40-100 |
| Daily plan generator | 1 / 用户 / 天 | $0.05 | $30 |
| **Total** |  |  |  | **~$700-2200 / 月**（20 个 Pro 用户）|

20 用户 × $30/月 Bundle = $600 收入。Cost ratio = 1-3.6×。**亏本**。

要么：
- a) 把 Vocab 用 DeepSeek（已是）+ 减少教法平均次数 → cost ÷ 2
- b) 涨价：$50/月 / 20 用户 = $1000，覆盖 cost
- c) BYO-key 模式（plan.js 已经实现半价）→ cost 0，收入 $15/月

**建议**：默认 Bundle $30/月，BYO-key Bundle $15/月，但提示 BYO-key 用户"贡献你的 LLM key 抵换全功能"。这是**已有的产品资产**（plan.js 里实现），整合时直接复用。

---

## 4. 整合产品愿景：3 种"组合招式"

### 招式 1：因果三联（Atlas → Writing → Vocab 串成 1 个体验）

孩子在 Atlas 看完 Topic → 自动浮一个 Writing prompt 卡（对应 5 层因果中某一层的 evaluative question）→ 写完后桥词进 Vocab 队列。**数据流已就位（桥词 → Vocab 是已 work 的事实），缺的只是 prompt 推荐 + UI 串联**。

落地：
1. Atlas Topic 页底部加"💭 写一篇关于这个的"按钮 → 跳到 `/writing?prompt=trail-of-tears-counterfactual`
2. Writing 加 `promptSource` 字段，记录 prompt 来源 Topic
3. Writing 完成后 toast：" 桥词 4 个已加入 Vocab 队列"

### 招式 2：个人时间轴（Atlas + Family History）

把 Atlas 的"家乡 / 现在 / Topic 三标记"扩展成"我的家族时间轴"。让孩子（在家长辅助下）填几个家族关键时刻：
- 1949 我祖父出生 · 山东
- 1978 改革开放 · 我父母上大学
- 2001 中国入 WTO · 我父亲第一次出国
- 2008 我出生 · 上海
- 2018 我们家移民 · Irvine

**这些点叠加在 Atlas 上**：当孩子看 1949 / 1978 / 2001 / 2008 任意 Topic 时，多一个"My Family Was Here" 的标记。

**这是 Khan / Duolingo 永远不会做的产品**。这是**家庭层 relatedness**的产品级表达。

### 招式 3：Daily Focus Loop（Focus 串起所有）

Focus 早 SMS（或 web push）的 "today's 3" **就是上面所有的整合面**：
```
1) atlas: <next chronological topic for your grade> (10m)
2) writing: <Socratic prompt about that topic> (15m)
3) vocab: <yesterday's bridge words + 1 review> (5m)
```

孩子打勾 = `learning_events` 记录 = 周报 = 家长可见 = 老师可分配 = 整合完成。

---

## 5. 第一个 Sprint（接下来 2 周的具体 backlog）

### Week 1（最高 P0）

| Day | Task | Owner | 验收标准 |
|---|---|---|---|
| Mon | Supabase schema 8 张新表（atlas_*/writing_*/learning_events）+ RLS + indexes | 工程 | Supabase Studio 跑 SELECT 1 from 每张 |
| Tue | Writing 模块 backend 迁移：从 localStorage 读 → 上 Supabase（带 dual-write 保底）| 工程 | Willow 在 phone + laptop 两端能看到同一篇 essay |
| Wed | Atlas 加 useUser()，登录后写 atlas_progress + learning_events | 工程 | 切 Topic → Supabase Studio 看到行 |
| Thu | URL pin state `?pin=`（教师作业 deep-link） + atlas_assignments 表 | 工程 | 老师粘贴 URL → 学生打开自动展开 ★ |
| Fri | OG 图自动生成 `/api/atlas-og/[viewId]` + Head meta 接入 | 工程 | 微信粘贴链接看预览 |

### Week 2（整合 hook）

| Day | Task | Owner | 验收标准 |
|---|---|---|---|
| Mon | Atlas 完读后浮 Writing prompt 卡（基于当前 Topic 自动生成）| 工程 + 内容 | 看完 Magna Carta 自动出现 "写关于权力如何被约束的 200 词" 按钮 |
| Tue | Writing 完成后桥词正式 push 到 Vocab `vocab_words` 队列（统一表）| 工程 | 写完 essay → Vocab 明天 quota 自动包含桥词 |
| Wed | examPoints 改结构：`{term, definition, year?}` + Quiz 模式 MVP | 工程 + 内容 | 每 Topic 8 题快闪 quiz 可玩 |
| Thu | "My Growth" 页 — 4 模块 weekly trajectory + brain fitness 雷达 + Topic 完成地图 | 工程 + 设计 | 一眼看到本周做了什么 |
| Fri | Year 7 Bundle $30/月 订阅页（替换/补充 plan.js）+ 营销文案 | PM + 工程 | Stripe checkout 跑通 |

### Week 3-4（Focus 骨架）

按 Focus 4 周计划走，但**不接 Twilio**（PWA push 替代）。Willow 一周后真实跑一遍，看是否需要 Twilio。

---

## 6. 长期愿景（6-18 个月）

### 6 个月

- 40 Atlas Topic 全部接 Quiz mode + 老师作业
- Writing portfolio export（PDF / 分享链接）+ 家长 weekly digest
- Year 7 Bundle 200 付费用户（Willow 学校 + 朋友圈 + 1-2 家试点）
- "Year 8 Bundle" 启动（针对 SSAT/ISEE 申请季）
- AI 成本 / 用户 / 月 < $10
- LTV / CAC > 3

### 12 个月

- Year 7-12 全 grade 覆盖（增加 Algebra / Earth Science / Bio 等模块照搬 Atlas 框架）
- 老师订阅版 $200/月 班级
- 与 1-2 个 Irvine USD / Cupertino USD 公立学校签 pilot
- 5 维 Brain Fitness 数据 → 可对外解释的"美国孩子 vs 中国孩子 vs 你的孩子"对比报告
- Willow 出 1 个 college essay 关于 "为爸爸的产品做共创"

### 18 个月

- Atlas 因果框架开源（CC-BY-NC）→ academic credibility
- TES（Times Educational Supplement）/ EdSurge 媒体 coverage
- 美国家长接受度突破：从"补习班"切到"美国学校用得上的中文背景版"
- 进入 ISO Brazil / Korea / 印度 high-end private school 渠道（高端 ESL + AP 准备双轨）

---

## 7. 一句话结论

**今天的 Know U. 4 个模块不是 4 个产品**。它们是**一个产品的 4 个面**：
- **Atlas 是脑（看见因果）**
- **Writing 是嘴（articulate 思考）**
- **Vocab 是手（沉淀词汇）**
- **Focus 是脚（明天再来）**

过去几天 Atlas 升级前，这 4 个面还能各自分开做。**升级后不能了** — Atlas 5 层因果天然把 Writing 的 thinking articulation 哲学 + Vocab 的应试词汇 + Focus 的 daily 节奏全部串起来。**这不是设计选择，这是事实**。

接下来的 4 周不是"写更多功能"，是"**把已有的 4 个面焊成一个产品**"。Schema 统一 + Writing 上 backend + Atlas 接 user + Focus MVP + Year 7 Bundle 上线。

**Willow 是这个产品最重要的人**。她不是 user，是 co-creator。给她一个 8-10 月底前可以放进 college essay 的产品故事 — "我和爸爸一起把全世界 12-13 岁孩子学历史 + 写作 + 词汇 + 执行力的方式重做了"。这个故事如果成立，**Know U. 不仅是一个 EdTech 公司，是一个 family origin story**。这种故事是 Khan / Duolingo / IXL 永远没有的护城河。

睡个好觉。明早醒来从 Week 1 Monday 的 Supabase schema 开干。
