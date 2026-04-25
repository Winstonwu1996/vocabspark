# Topic: Magna Carta (1215) — 内容共编草稿

_Status: 待 Winston 审阅 + 共同迭代_
_对齐: California HSS-7.6.5 / IUSD 7 年级 IMPACT 教材 7.6 单元_
_前置阅读: `docs/HISTORY_PRODUCT_ANALYSIS.md` §5.2（Topic schema） + `docs/HISTORY_RESEARCH_REPORT.md`_

---

## 0. 这个文档的用法

每个 section 都是 Topic 的一个字段，Winston 看完后我们逐节确认：
- ✅ 通过 → 进 JS data file
- ⚠️ 需调整 → 在该节写注释
- ❌ 整体重做 → 推翻重来

文末有「待 Winston 决定的 X 个开放问题」列表。

---

## 1. Identity（身份元数据）

```
id:             "magna-carta-1215"
title:          { en: "Magna Carta", cn: "大宪章" }
curriculumUnit: "7th-grade/medieval-europe"
hssStandard:    "HSS-7.6.5"  ← CA State Standard 直接对应
year:           1215
yearRange:      [1215, 1215]
region:         "england"
difficulty:     3   (1-5 中等偏上 — 跨思维 + 中英对照 + 概念抽象)
throughLine:    "power-vs-liberty"
```

**为什么 difficulty=3 而不是 4**：表面是一个事件、一份文件，但需要建立 4 个抽象（rule of law / due process / charter as contract / 限君思想的种子）。比"Black Death"（事实层面）难，比"Renaissance"（多线交织）容易。

**为什么 throughLine = power-vs-liberty**：
- 1215 国王让步给贵族
- 1689 英国权利法案
- 1776 美国独立
- 1791 美国权利法案
- 这条线 Willow 之后会反复回扣，是西方政治史最长那条线

---

## 2. Bridge Anchor（中国史桥接 — 三维对照，教学法核心）

> **2026-04-25 Winston review 后扩展**：原版只对照"法律体系"一维，但只看法律解释不了 Magna Carta 为什么发生。真正的 divergence 是 3 个底座层同时不同：法律 + 政教 + 社会单元。这三层凑齐才能解释"1215 贵族为什么敢"。

```
bridgeAnchor: {
  type: "multi-dimensional",
  dimensions: [
    { id: "legal-system",     name: "法律体系",   strength: "weak" },
    { id: "church-state",     name: "政教关系",   strength: "strong" },
    { id: "social-unit",      name: "社会基本单元", strength: "strong" }
  ],
  cnAnchors: ["唐律疏议 651 AD", "天子 + 天命", "家国天下 + 集体私产"],
  divergenceNote: "..."  // 见 §2.4
}
```

### 2.1 维度 A — 法律体系（唐律疏议 vs Magna Carta）

**唐律疏议比 Magna Carta 早 564 年**（Tang 高宗 651 颁布，比 1215 早差不多一个清朝到现在的距离）。规模也远超 Magna Carta（30 卷 vs 4000 词）。给 Willow 的第一感觉先是自豪："我们更早！"

但深一层看，根本路径不同：

| | 唐律疏议 (651) | Magna Carta (1215) |
|---|---|---|
| 谁立的 | 皇帝（Tang 高宗）颁布 | 贵族**逼**国王签 |
| 约束谁 | 官员、官吏、平民 | **国王本人** |
| 法的来源 | 皇帝的意志（"我立法"） | "土地的法律"（**lex terrae**，传统 + 协议） |
| 几百年后的影响 | 中央集权官僚体系 → 2000 年连续王朝 | 议会制 → 美国革命 → 现代法治 |

### 2.2 维度 B — 政教关系（天子 vs 国王 + 教皇）

**这是 Magna Carta 能发生的隐性结构条件 — 没有这一层，贵族不敢逼国王。**

| | 中国 | 西方（中世纪） |
|---|---|---|
| 皇帝/国王的宗教身份 | **天子** — 自己就是天的代表，宇宙秩序的人间锚 | "By the Grace of God" — 上帝的世俗代理人，但**不**是上帝的儿子 |
| 是否有独立宗教权威 | **没有** — 没有 Pope-equivalent | **有** — 教皇是另一条独立权威线 |
| 当君主不守法时 | 没有第二个权威可诉 → 改朝换代（武力） | 教皇可以**逐出教会**（excommunicate）— 1077 年神圣罗马帝国皇帝 Henry IV 跪在 Canossa 雪地里求教皇原谅 3 天 |
| 信仰的分布 | 一个轴：天 → 皇帝 → 万民 | 两个轴：上帝 → 教皇（精神）+ 上帝 → 国王（世俗）|
| 对历史走向的后果 | 集权传统、不容置疑权威 | **永久的二元张力 → 制衡传统 → 法治萌芽** |

**关键洞察 — 两个尺度要分开看，不要混淆**：

**长期尺度（几百年的结构条件）**：欧洲有"教皇 + 国王"两个独立权威 → 政治权力天然是可分割的、是有竞争对手的 → 国王从来不能像中国皇帝那样独占一切。**这种结构本身就是**贵族敢挑战国王的隐性土壤 — 不是因为这次教皇站他们那边，而是因为"国王不是唯一权威"这个观念已经在每个欧洲人脑子里 1000 年了。

**1215 年这个具体时刻**：教皇 Innocent III 其实**站在 King John 这边**（1213 年 King John 把英国献给教皇当封地，1215 年 8 月教皇写信宣布宪章无效）。但贵族**仍然干了**。

这两件事合起来才是**真正的转折**：贵族这次不是借教皇的势打国王，而是**第一次把"土地的法律"(lex terrae) 抬高到教皇和国王之上**。从 1215 起，世俗法律开始独立于宗教权威站起来 — 这是西方法治真正诞生的瞬间。

中国不是没有这种张力 — 但中国的张力是"皇帝 vs 大臣"的内部张力，不是两个独立权威的张力。中国大臣再硬，也是在皇帝认可的体制内说话；而 1215 的英国贵族是在体制之外、教皇之上、国王对面，凭一份契约把权力关进了笼子。

### 2.3 维度 C — 社会基本单元（家国天下 vs 个人私有）

**这是 Magna Carta 内容的根 — 整份宪章一半在保护私产。**

| | 中国 | 西方 |
|---|---|---|
| 基本单元 | **家** — 家国一体，个人 → 家族 → 国家逐级嵌套 | **个人** — 个人是基本权利单元，再形成家庭 |
| 私产观念 | 个人私产服务于家族/集体很自然，国家可"借用" | 私产神圣，国家征用必须有正当理由（due process）|
| 征税逻辑 | 皇帝有权征 — 不交是不孝/不忠 | 国王征税**必须经过同意**（→ Magna Carta Clause 12 → 议会制）|
| "我"和"我们"的边界 | 模糊（孝悌伦理把个人嵌进集体）| 清晰（个人 vs 集体的契约关系）|

**关键洞察**：Magna Carta 大约一半的条款在管"国王不能随便没收谁的财产"、"不能随便加税"。这些条款只有在"个人私产神圣"的文化里才有意义。中国不是没有保护私产的传统，但私产从来不是抗衡国家的核心 — 集体责任先于个人权利。

这一维度对 Willow 是**最反直觉的** — 因为她浸泡在中国的家国伦理里，"为集体牺牲个人"是天然觉得正确的事。Magna Carta 的逻辑反过来：**先保护个人，再形成集体**。这种次序差异是中西方政治思想最深的分野。

### 2.4 三维度合在一起 — 为什么 1215 这件事必然发生在欧洲

```
法律传统（lex terrae 已存在）
        +
政教二元（教皇背书贵族的道德正当性）
        +
私有制根基（贵族的财产被国王侵犯，他们有"我的"这个概念可以喊）
        =
1215 Runnymede
```

这 3 个条件中国都不具备 — 不是因为中国"落后"，是因为中国走了另一条同样自洽的路（皇帝-天命-家国）。两条路在那个时代分岔，长出了截然不同的现代世界。

### 2.5 divergenceNote（讲给她的总结话术）

> "今天讲的不是『英国比中国先进』 — 中国的法典更早、更系统。今天讲的是**两个完全不同的世界**：
>
> - 中国的世界里：皇帝是天的儿子，他自己就是宗教，他下面是万民，万民下面是家族，家族下面是个人。**从天到家是一条线**。
> - 欧洲的世界里：上帝在最高处，教皇和国王是上帝的两个独立代理人，他们俩经常吵；下面是贵族，再下面是个人，**每个个人都有自己的私产**。**两个权威 + 个人单元**。
>
> 这两个世界都自洽。但 1215 那天，欧洲这个世界里的贵族 — 因为有教皇可以背书、因为有自己的私产被侵犯、因为已经有 lex terrae 这个传统语言 — 才**敢**逼国王签字。
> 中国不是没有勇敢的人。中国有更多直谏的大臣、为民请命的官员。但中国的世界结构里，没有 *逼* 这个动作的合法位置 — 你只能 *劝*，劝失败就死。"

⚠️ **需要 Winston 决定**：这个三维度对照展开后内容很厚。要不要拆成 2 个 Topic（Magna Carta + Magna Carta 续：政教与私有）？我倾向**不拆** — 在 conversation 里 3 维度依次抛出（Turn 3 法律 / Turn 4 宗教 / Turn 5 私有），每维度 1-2 轮，深度合适。

---

## 3. Geography Section（5 子模块完整字段）

我们已经有了 [public/maps/europe-1200.svg](../public/maps/europe-1200.svg) 和 [public/maps/europe-modern.svg](../public/maps/europe-modern.svg)。这一节定义产品里要展示的文字标注。

### 3.1 worldOrient — 全球迷你框

```
worldOrient: {
  highlightRegion: "western-europe",
  orientNote: {
    cn: "在欧洲西北角的小岛 — 英国",
    en: "On a small island in northwestern Europe — England"
  }
}
```

### 3.2 primaryMap

```
primaryMap: "europe-1200"
flipMap:    "europe-modern"   // 启用 flip 交互
```

### 3.3 scaleAnchors — 用中国地理当尺

```
scaleAnchors: [
  "整个英国 ≈ 中国湖南省的大小",
  "伦敦到 Runnymede 约 30 km，相当于北京到通州的距离",
  "整个英格兰王国比四川盆地还小"
]
```

### 3.4 whyMatters — 因果直觉（一段话）

```
whyMatters: {
  cn: "你看英吉利海峡 — 这条窄窄的水把英国跟欧陆隔开。这意味着什么？\n
       1) 英国不容易被欧陆强国全面入侵\n
       2) 教皇的影响力到这里减弱了一截\n
       3) 国王没有大陆军队可以靠 — 必须跟贵族合作\n
       这种'没法独裁'的地理处境，正是 1215 那批贵族敢逼国王签字的物理基础。\n
       同时代的法国国王 Philip II 就强势多了 — 因为法国是连陆大国，权力集中得多。",
  en: "..."
}
```

### 3.5 chinaCompare — 跟中国并排对照

```
chinaCompare: {
  otherMap: "tang-china-650",   // (这张图 α 阶段做)
  readNote: {
    cn: "看比例 — 中国一个朝代的疆域，能装下整个欧洲的所有王国。\n
         地理决定了：中国的政治问题是'怎么治理这么大'，欧洲的政治问题是'怎么不被邻居灭掉'。\n
         前者倾向集权（统一好治理），后者倾向分权（小国互相制衡）。\n
         Magna Carta 正是分权传统的早期产物。",
    en: "..."
  }
}
```

⚠️ **需要 Winston 决定**：tang-china-650 这张图是不是要 MVP 阶段就做？我倾向 **MVP 简化为只显示文字**（"中国一个朝代 ≈ 整个欧洲"），地图实际产出留 α。

---

## 4. Must-Memorize（Topic 完成 gate — 严格制）

按 §2.6 决议：必过制 + 即时重试，不允许跳过。

### 4.1 mustMemorize.vocab（**9 个英文词** — Winston review 后从 6 扩到 9，要求**拼写 + 定义**两关都过）

| # | 词 | 词性 | 中文 | 难度 | 不可翻译? | 加入理由 |
|---|---|---|---|---|---|---|
| 1 | **charter** | n. | 特许状 / 宪章 | 中 | ⚠️ 部分 | Topic 名称本身 |
| 2 | **clause** | n. | 条款 | 中 | ❌ | 引 Clause 39/40 必用 |
| 3 | **baron** | n. | 男爵 / 大贵族 | 易 | ❌ | 故事主角 |
| 4 | **monarchy** | n. | 君主制 | 中 | ❌ | 制度名 |
| 5 | **tyranny** | n. | 暴政 | 中 | ❌ | 贵族对 King John 的指控 |
| 6 | **parliament** | n. | 议会 | 中 | ⚠️ 部分 | 直接连 HSS-7.6.5 课标 |
| 7 | **feudal** | adj. | 封建（契约性领主-附庸关系） | 中 | ✅ 不可翻译 — 中文"封建"贬义包袱大 | 中世纪欧洲的核心制度词 |
| 8 | **rebel** | n./v. | 反叛 / 反叛者 | 易 | ❌ | 贵族干的事 |
| 9 | **consent** | n./v. | 同意 / 经过同意 | 中 | ⚠️ 部分 | 私有制 + 议会同意征税的核心词 |

**为什么不放 sovereignty 进 vocab**：放在 §4.2 concepts 里 — 它是个概念词，不是单词。

### 4.2 mustMemorize.concepts（**4 个核心概念** — Winston review 后从 3 扩到 4，要求**定义复述 + 应用题**）

| # | 概念 | 英文释义 | 中文释义 |
|---|---|---|---|
| 1 | **rule of law** | Even the king must follow the law. No one is above it. | 法治 — 即使是国王也必须遵守法律。没有人在法律之上。 |
| 2 | **due process** | Before someone is punished, the proper legal steps must be followed. | 正当程序 — 在惩罚一个人之前，必须经过合法的步骤（如审判、举证）。 |
| 3 | **law of the land** *(lex terrae)* | The traditional laws of a country, which apply to everyone — including the king. | 这片土地的法律 — 一个国家世代沿用的法律，所有人（包括国王）都受它约束。不是哪个人临时定的。 |
| 4 | **government by consent** | Power belongs to the people; rulers govern only with their permission. | 同意而治 — 权力属于人民；统治者只能在人民同意的前提下治理。Magna Carta Clause 12（征税须经议会同意）就是这个原则的种子。 |

合计 **9 vocab + 4 concepts = 13 项必背**。这是 7 年级 + ESL 的合理量级 — 跟美国本土孩子的 vocabulary list 持平（不再因 ESL 减项）。妈妈说得对：欠债的代价比磕一下大得多。

### 4.3 拼写测试样题（每次随机抽 6 题 / 9 个词，6/6 过为合格）

```
1. The 1215 document signed by King John was called the M____a C___a.            (charter)
2. Government by a single ruler (king or queen) is called a m_______y.           (monarchy)
3. King John's cruel and unfair rule was called t______y by the barons.          (tyranny)
4. A noble lord powerful enough to challenge the king is called a b____n.        (baron)
5. The English law-making body that grew from these meetings is called p________t. (parliament)
6. Each rule in the Magna Carta is called a c_____e.                              (clause)
7. The medieval European system of land-for-loyalty was the f_____l system.      (feudal)
8. The barons who refused to obey King John were called r_____s.                  (rebels)
9. Magna Carta Clause 12 says the king cannot tax without the c______t of the kingdom. (consent)
```

### 4.4 定义复述样题（3 题，从 concepts 里随机抽 1）

```
"用你自己的话告诉我什么是 rule of law。可以中英混着说。一句话就够。"
"Give an example of due process from your school life."
"Why is 'law of the land' different from 'the king's command'?"
```

AI 用宽松评分 — 抓住核心意思就过，不要求完美英文。

### 4.5 应用题样题（1 道随机）

```
A. Your principal expels you for a week because she heard a rumor that you cheated. 
   No hearing, no chance to explain. Which Magna Carta principle does this break?
   (期待答案：due process / Clause 39 / lawful judgment 任一)

B. The US Constitution's 5th Amendment says: "No person shall be deprived of 
   life, liberty, or property, without due process of law." Which Magna Carta 
   clause does this directly trace back to?
   (期待答案：Clause 39)

C. The Pope wrote to King John in late 1215 saying: "I, the Pope, declare this 
   charter invalid because I did not approve it." Why did the barons NOT care 
   about the Pope's opinion?
   (期待答案：触及 lex terrae — 国家的法律高于教皇的意见 / 贵族认为这是英国内部的事)
```

---

## 5. Primary Sources（原始史料 — 三层架）

按 §3.1 「史料阅读层」语言策略：英文原文 + 中文气泡注。

### 5.1 Source 1: Clause 39

**Layer 1 — Latin original**（不是必读，但放出来给"哇这就是真原文"的仪式感）：
> Nullus liber homo capiatur, vel imprisonetur... nisi per legale judicium parium suorum vel per legem terrae.

**Layer 2 — British Library modern English translation**（学界标准引用）：
> No free man shall be seized or imprisoned, or stripped of his rights or possessions, or outlawed or exiled, or deprived of his standing in any other way, nor will we proceed with force against him, or send others to do so, except by the lawful judgment of his equals or by the law of the land.

**Layer 3 — Lexile-900 simplified bilingual**（我们改写，给 Willow 用）：

中英对照（hover 显示中文）：
> No free man shall be **arrested** [被逮捕] or **imprisoned** [被关进监狱], or have his rights or things taken away, or be **outlawed** [被驱逐] or **exiled** [被流放]. The king shall not act against him with force, **except** [除非] by the **lawful judgment** [合法审判] of his equals, or by the **law of the land** [这片土地的法律].

**核心词标蓝（hover 出 etymology + 中文）**:
- *seized* → 被抓走（动词 seize 的过去分词）
- *imprisoned* → 被关进监狱（im- 进 + prison 监狱）
- *outlawed* → 被驱逐到法外（out 之外 + law 法 → 法外之徒，词根可追到 1215 这一年）
- *exiled* → 被流放（ex- 出 + ile 在哪 → 离开本土）
- *lawful judgment* → 合法审判（lawful 合法的 + judgment 判决）
- *law of the land* → "lex terrae"，**这是不可翻译概念之一**，详见 mustMemorize.concepts

### 5.2 Source 2: Clause 40

**BL English**:
> To no one will we sell, to no one deny or delay right or justice.

**Lexile-900 simplified**:
> The king shall not **sell** justice. The king shall not **refuse** justice to anyone. The king shall not **delay** justice.

**中文释义**:
> 国王不能把"公道"卖钱（不能受贿）。
> 国王不能拒绝任何人得到公道。
> 国王不能拖着不给公道。
> 简单说：**司法不能被国王买卖、拒绝、或拖延。**

### 5.3 Source 3 (可选): The Pope's response

**BL English**（教皇 Innocent III 1215 年 8 月给 King John 的信节选）:
> By the authority of God almighty... we declare the said charter to be null and of no validity for ever.

**中文**:
> "凭借全能上帝的权威... 我们宣布该宪章永久无效。"

**为什么放这条**：让 Willow 看到一个**反方观点**。教皇说 invalid，贵族不在意。引出 conversation 里的关键问题"贵族为什么不在意教皇？" → 答案是 lex terrae 已经胜过教皇权威。

⚠️ **需要 Winston 决定**：MVP 阶段是只用 Source 1 + 2 还是 1 + 2 + 3 全用？我倾向 **MVP 用 1 + 2，Source 3 留给 conversation 的 provoke move**（不在 source 阅读层，而是在对话里抛出）。

---

## 6. Conversation Moves Script（14 轮苏格拉底对话）

这是 Topic 的灵魂。我把每一轮的 AI 文案写出来，让你判断口吻和深度。

> **注意 — Profile 占位符**：以下文案里 `{{userName}}` `{{userSchool}}` `{{userAge}}` `{{userPriorCity}}` `{{userInterest}}` `{{userParentWord}}` 等都是变量。产品运行时**从用户 profile 自动注入**，下面写的"Willow / Irvine 公立 / 13 岁"只是范例 fallback。详见 §11。

### Turn 1 — `hook`：用 {{userName}} 的世界抛冲突

**AI 说：**
> "想象一下：你今天放学，{{userSchool|"你的学校"}} 校长突然叫你去办公室，说『你违反校规，禁闭一周不能上课，不能见同学』。你说『我没做啥啊』，校长说『我不需要解释，我就是这么决定的』。妈妈打电话也接不通，办公室门关上了。
> 公平吗？
>
> 如果你心里冒出来『当然不公平 — 怎么没审一审就这样定了？』 —— 恭喜，你刚刚说出了 1215 年那群英国贵族跟国王 King John 撕破脸的核心原因。
>
> 今天我们去英国一个叫 Runnymede 的小村庄，看一件改变了整个西方历史的事。"

[等她回应]

### Turn 2 — 她的回应

她大概率说"不公平 / 那要找老师投诉 / 我会告校长 / 校长不能这样吧"等。

AI 抓住她的回应自然衔接：
> "对 — 你的本能反应就是『必须先有审判、先有理由，才能定罪』。这个想法在 1215 年才被第一次写到纸上。但有意思的是 — 中国其实更早就有类似的东西。"

### Turn 3 — `bridge` 维度 A：法律体系（唐律疏议对照）

**AI 说：**
> "中国唐高宗 651 年颁布过《唐律疏议》—— 一部完整的成文法，比英国人的大宪章早了 **564 年**。那大概是清末到现在的距离。
> 它管什么？管全国所有官员、官吏、平民 — 怎么审案子、怎么定罪、怎么用刑都写得清清楚楚。规模比 Magna Carta 大 30 倍以上。
>
> 但有一件你可能没想过的事：唐律管官员、管平民、管下级的所有人 —— **但不管皇帝**。皇帝犯法怎么办？皇帝不犯法，因为『皇帝就是法』。
>
> 看出问题了吗？"

[等她思考]

### Turn 4 — 她的思考 / AI 引导

可能的反应路径：
- **她说"那如果皇帝就要乱来怎么办"** → AI："你抓到关键了。"
- **她说"皇帝怎么会乱来 / 皇帝就是法律不是挺好"** → AI："正常皇帝当然不乱来。但你想想这种历史上的皇帝有几个 — 有时候皇帝就是个 11 岁的孩子，有时候是疯子，有时候被太监架空。这种时候法律怎么办？"
- **她说不出来 / 不知道** → AI 引导："就是这样：如果皇帝是好人，没问题；如果皇帝是 King John 这种贪婪、残忍、随便杀人的人 —— 就出大问题了。"

### Turn 5 — `bridge` 维度 B：政教关系（**新增 — 宗教是底座之一**）

**AI 说：**
> "其实还有更深一层的差异 — 跟宗教有关。
>
> 中国的皇帝叫什么？**天子** — 天的儿子，自己就是天的代表。所以中国的世界里只有一条线：
>
> ```
> 天 → 皇帝 → 万民
> ```
>
> 没有第二个独立的宗教权威能挑战皇帝。
>
> 欧洲不一样。欧洲的世界里有**两条线**：
>
> ```
> 上帝 → 教皇（精神事务）
> 上帝 → 国王（世俗事务）
> ```
>
> 这两条线的代理人 —— 教皇和国王 —— 经常吵。1077 年，神圣罗马帝国皇帝 Henry IV 跟教皇吵翻，被教皇『**逐出教会**』。皇帝怕到什么程度？亲自跑到意大利北部 Canossa 城堡外面，**跪在雪地里 3 天**求教皇原谅。
>
> 这种事在中国不可能发生 —— 中国没有第二个权威能让皇帝跪。
>
> 注意：这**不是说**教皇和贵族就是一伙的（事实上 1215 年教皇站在 King John 那边，几个月后还写信宣布宪章无效）。是说欧洲这种『**永远有两个权威互相牵制**』的结构，让贵族**习惯了**『国王不是唯一』这个观念 —— 这种观念在每个欧洲人脑子里已经存在 1000 年了。
>
> 想想看：如果你从小就生活在『头上不只一个老板，老板们经常吵架』的世界里，你跟老板讲条件的胆子，是不是比『头上只有一个老板，他说了算』的世界里更大？"

[期待她答出"对" — AI 评价]

### Turn 6 — `bridge` 维度 C：私有制 vs 家国天下（**新增 — 这是 Magna Carta 内容的根**）

**AI 说：**
> "再一层。
>
> 中国说『**家国天下**』 —— 个人在家里、家在国里、国在天下里，**一层套一层**。你的财产是『我们家』的，家的财产是『大家族』的，皇帝要征税、要征兵，是为了天下，理所当然你得给。
>
> 欧洲不一样 —— 欧洲社会的基本单元是**个人**。我的地是我的，国王要征税，**必须问我同不同意**。
>
> 你看 Magna Carta 一半的条款都在说什么？— 国王不能随便没收谁的房子、不能随便加税、要征兵也得讲规矩。
>
> 所以 1215 这件事的真正动力是 — 国王 John 老找贵族要钱打仗（仗打输了），贵族烦透了。**他们的『我的』被侵犯了 — 这是个在中国语境里几乎没有的概念**。
>
> 你想想 — 如果你是中国某朝代的大臣，皇帝要征你三成田，你的本能反应是什么？
> 如果你是英国 1215 的贵族，国王要征你三成田，你的本能反应是什么？
>
> 这两个本能反应不一样 — 这就是中西方政治思想最深的分野。"

[等她对比 — 这个差异是反直觉的，预期她需要时间消化]

### Turn 7 — `geo`：拉地图，建立空间感

**AI 说：**
> "好，三层差异讲清楚了。现在看看 1215 年的欧洲是什么样。"
>
> [展示 europe-1200.svg，**焦点 spotlight 在英格兰**]
>
> "看这个橙色的小岛 — 这就是 King John 的英格兰。比你想象的小很多 —— **整个英格兰跟中国湖南省差不多大**。整个欧洲所有这些王国加起来，能装进中国一个唐朝。
>
> 但就是在这小岛上，那个红色 pin 标的草地（Runnymede），1215 年 6 月 15 日 —— 一群贵族强迫他们的国王签了一张纸。
>
> 现在试试点击翻转，看这片地方今天是什么样。"
>
> [她点翻转 → europe-modern.svg]
>
> "看到了吗？**君士坦丁堡现在叫伊斯坦布尔，是土耳其的首都**。当年的拜占庭帝国就在土耳其这片。神圣罗马帝国变成了德国和奥地利。**唯一没变的是 — 英国还叫英国，匈牙利还叫匈牙利**。
> 翻回 1200 年。"

### Turn 8 — `source`：Clause 39 第一次曝光

**AI 说：**
> "好，准备好，要看真东西了。
>
> 这是 Magna Carta 第 39 条。一句话改变了 800 年的历史。我先给你英文，再给你中文：
>
> **EN**: 「No free man shall be seized or imprisoned... except by the lawful judgment of his equals, or by the law of the land.」
>
> **中文**: 「任何自由人不得被逮捕、监禁... 除非经过同等地位人的合法审判，或经过这片土地的法律。」
>
> 注意 5 个词：
> - **shall**（必须，不是『可以』 —— 这是命令）
> - **seized**（被抓走 —— 动词 seize 的过去分词）
> - **imprisoned**（被关进监狱 —— im 进 + prison 监狱）
> - **lawful judgment**（合法审判 —— lawful 合法的 + judgment 判决）
> - **law of the land**（这片土地的法律 —— **lex terrae**，这是个 800 年都没变的固定法律词）
>
> 读两遍。然后告诉我：你觉得这一句话**最关键**的是哪个词？为什么？"

### Turn 9 — `source 深读`：让她说，AI 评价

她说出某个词，AI 根据她的答案分支：

- **她说 "shall"** → "你抓到了形式上的关键 — shall 不是『可以』，是『必须』。这条规定写出来就是铁律，不是建议。"
- **她说 "law of the land"** → "你抓到了核心 — '土地的法律'是把权力从一个人手里转到一套规则里。**这就是 rule of law 的种子。**"
- **她说 "lawful judgment"** → "你抓到了程序的关键 — 不能上来就抓人，必须先审判。**这就是 due process 的种子。**"
- **她说不上来** → "OK 我帮你拆。这句话最毒的两个字其实是 'shall' —— 它说的不是『国王最好别这么做』，是『国王不能这么做』。这一字之差，定了 800 年。"

### Turn 10 — `provoke`：贵族不是英雄

**AI 说：**
> "现在告诉你一个可能让你不舒服的真相。
>
> 这群逼国王签字的贵族 —— 他们**不是为穷人**。他们是国王的债主、是大地主、是被国王不停加税烦透了的人。他们逼国王签这字，**一开始是为了自己不被任意征税**。
>
> 但你看 Clause 39 的措辞 — 他们没说『任何贵族』，写的是『**任何自由人**』（any free man）。
>
> 这一句话过了 800 年，慢慢从『贵族不被欺负』扩到『所有人不被欺负』。
> 1791 美国宪法第 5 修正案、今天加州 Irvine 法庭判 case，都是从这一句话长出来的。
>
> **自私的开头，结出了普世的果子。** 这是西方政治史一个经常出现的特点 — 一群人为自己争利，结果意外地解放了所有人。
>
> 你觉得这是好事还是坏事？"

[等她思考 — 没标准答案]

### Turn 11 — `roleplay`：代入一个想象出来的女儿（**Winston review 后改为透明虚构**）

**AI 说：**
> "现在我想让你代入一个角色。
>
> **先说清楚 — 这是我故意虚构的，不是真历史。** 真实历史里 King John 的女儿 Joan of England 1215 年只有 5 岁，没法跟爸爸辩论。我让她跟你同龄（{{userAge|"13"}} 岁），是为了让你真的代入『**爸爸要做难做的决定时，{{userAge|"13"}} 岁的我会怎么办**』这个感受。
>
> **以后我们做这种『假装一下』的练习，我都会先告诉你这是虚构 — 不会让你以为是真历史。**
>
> 好，假装开始 ——
>
> 你是 King John 一个 {{userAge|"13"}} 岁的女儿（想象出来的）。这天 6 月 15 日早上，你爸爸（国王）必须去 Runnymede，那群贵族要他签那张纸。爸爸早饭都没吃，气得在房间里来回走。
>
> 他突然把你叫过来，说：
> 『女儿你听爸爸说。这群贵族是要造反，逼我签字。我签了这张字，我就不再是国王了 —— 我会被全英国看不起，我的儿子继位时也得跟着这张字过日子。』
>
> 你看着爸爸 —— 你 {{userAge|"13"}} 岁。
> 你会跟他说什么？
>
> （**没有标准答案**。说你心里真实想说的话。）"

### Turn 12 — 她的代入回应 / AI 共情

无论她说什么，AI 共情然后给历史对照：

- **她说"爸爸你应该签 / 不签会更糟"**
  > "你跟历史上的 King John 王后 Isabella of Angoulême 想得差不多 — 据说她当时也劝国王让步。这就是为什么我们今天有这件事可讲。"

- **她说"不能签 / 这会让爸爸丢脸"**
  > "你跟教皇 Innocent III 想的一样 — 几个月后他给 King John 写信说 *『我宣布该宪章永久无效』*。但贵族不在意教皇怎么想 —— 他们已经把权力从一个人手里拿到一群人手里了。"

- **她说"我才 {{userAge}} 岁我不知道 / 这种事我想不通"**
  > "{{userAge}} 岁知道这种事真的很难。但这正是我想让你想的 — 800 年后我们重新看这天，会发现这就是个『把不公道的人逼住』的故事，跟你跟同学吵架时的本能差不多。"

- **她说别的什么** → AI 顺着她的角度延展

### Turn 13 — `connect`：挂回 power-vs-liberty 主线 + 古希腊根 + 三维度回收

**AI 说：**
> "今天讲到这，我想把这件事挂到一条主线上。我们叫它 **Power vs Liberty（权力 vs 自由）** —— 西方政治史最长那条线。
>
> 但**这条线的根比 1215 还要早 1500 年**。
>
> 公元前 4 世纪，希腊有个叫 **Aristotle** 的哲学家在《政治学》里写过一句话：
>
> > *『It is more proper that law should govern than any one of the citizens.』*
> > 「让法律统治，比让某一个人统治更恰当。」
>
> 这就是 *rule of law* 的最早表述。书里写完，躺了 1500 年没人理。
> 1215 这群英国贵族不一定读过他 —— 但他们用 Runnymede 那块草地，**把这句话从书页搬到了现实**。
>
> 这是西方思想很特别的一件事：希腊人写下了想法，罗马人传下了语言，中世纪欧洲把它写进了法律，美国人把它写进了国家。**一条 2400 年的接力**。
>
> 然后这条接力的每一站都对应今天讲的三个底座 ——
>
> ```
> 古希腊（Aristotle 哲学）— 法治概念诞生
> ↓
> 1215 Magna Carta       — 法治写进契约（你今天学的）
> ↓
> 1689 English Bill of Rights — 国王让步给议会
> ↓
> 1776 美国独立宣言       — 个人权利写进国家
> ↓
> 1791 美国权利法案       — 写明『政府不能从个人手里随便拿走的东西』
> ↓
> 1948 联合国人权宣言     — 写明『国家也不能侵犯的基本人权』
> ```
>
> 你今天读到那一句『**no free man shall be seized... except by lawful judgment**』 — 就是这条 2400 年接力的中间一棒。
>
> 等你 8 年级开始学美国历史，9 年级看 *American Revolution*，你会回头看这天 — 然后感激今天我们画了这条线。不然到那时候 Jefferson 写『unalienable rights』，你会以为这只是漂亮话。"

### Turn 14 — `seal`：晚饭话题（家庭触点）

**AI 说：**
> "今天就到这。最后一个礼物给你 —
>
> 晚饭时候，挑一个问 {{userParentWord|"爸爸或妈妈"}}：
>
> > **「如果当年中国也有人能逼皇帝签 Magna Carta 这种字，你觉得最适合做这个人的是谁？」**
>
> > 或者：**「中国皇帝是天子，欧洲国王上面还有教皇 — 你觉得这两种结构哪个更稳？」**
>
> > 或者：**「中国说『家国天下』，欧洲讲『私人财产神圣』 — 你更认同哪个？为什么？」**
>
> （三个题选一个就行，挑你最想跟家里讨论的。）
>
> 明天告诉我你们家的答案 — 我想听听 {{userParentWord|"你家长"}} 是怎么想的。"

✅ **2026-04-25 修订**：14 轮（含 3 维度 bridge + Aristotle 引子 + 私有制对照）。比原 12 轮多 2 轮但深度跟得上 Winston 的 4 点补充。30-45 分钟一次会话仍在 13 岁耐心上限内。

---

## 7. Perspectives（角色代入选项）

```
perspectives: [
  { id: "king-john",       label: { en: "King John", cn: "约翰国王" }, 
    description: "1215 那天的国王本人 — 害怕、愤怒、被逼。" },
  { id: "rebel-baron",     label: { en: "Rebel Baron", cn: "反叛贵族" }, 
    description: "Robert Fitzwalter — 反叛贵族领袖，要逼国王让步。" },
  { id: "english-peasant", label: { en: "Peasant", cn: "英国农民" }, 
    description: "她对这事一无所知 — 但 800 年后她的后代成了受益者。" },
  { id: "pope-innocent",   label: { en: "Pope Innocent III", cn: "教皇英诺森三世" }, 
    description: "宣布宪章无效 — 站在国王一边，但贵族不在意。" },
  { id: "joan",            label: { en: "Joan, age 11", cn: "约翰国王的女儿" }, 
    description: "11 岁的女儿 — 跟 Willow 同岁，看着爸爸去签字。" }
]
```

Joan 这个角色是 hero perspective —— 跟 Willow 同龄。她是第一次代入历史人物的最佳入口。

---

## 8. Mastery Checks（Topic 完成 gate — 严格制 6 项）

按 §2.6：spelling + definition + application 必过；teach-back / counterfactual / geo-inference 可选但 XP 加成显著。

### 必过 3 项：

```
1. spelling      — 5 题随机抽，4/5 过（见 §4.3 题库）
2. definition    — 3 个 concepts，AI 评估抓核心意思即过（见 §4.4）
3. application   — 1 题随机（见 §4.5）
```

### 深度可选 3 项（XP 加成 +30/+40/+30）：

#### 8.1 Teach-back（最贵，+30 XP）

> "你最好的朋友（中国的同学，没去过美国）今天问你：『什么是 Magna Carta？为什么美国人这么看重？』
>
> 用 200 字告诉她。中英混合可以，但**关键英文词必须用英文**（charter / clause / due process / rule of law）—— 不要给她翻译，让她也学到。"

AI 评估标准：
- 提到 1215 年、英国、King John ✓
- 用了至少 2 个核心英文词 ✓
- 解释了"为什么重要"而不只是"是什么" ✓
- 桥接到美国（HSS-7.11.6 要求）✓

#### 8.2 Counterfactual（+40 XP，最难）

> "如果 King John 那天拒绝签字会怎么样？预测 3 件可能不一样的事。可以猜，但要有理由。"

AI 评估：
- 给出 3 个具体推测 ✓
- 至少 1 个推测有合理因果链 ✓
- 不要求"对" — 要求"敢推、合理"

#### 8.3 Geo-inference（+30 XP）

> "为什么这件事发生在英国，不是法国，不是神圣罗马帝国？用地图想 —— 英国跟欧陆的地理差异是什么？这种差异如何影响了 1215 那天能不能成功？"

AI 评估：
- 提到英吉利海峡 / 岛国 ✓
- 解释这个地理→政治的因果（"国王没有大陆军队靠"或类似）✓

---

## 9. Writing Prompts（DBQ-mini，可选 — 推到 Writing 模块种子）

```
writingPrompts: [
  {
    genre: "DBQ-mini",
    prompt: {
      en: "Some historians say Magna Carta was a 'win for democracy.' Others say it was just a 'win for rich barons who hated paying taxes.' Use Clause 39 and what you know about the barons to argue which view is closer to the truth. Write 200-300 words.",
      cn: "（对应中文版本）"
    },
    rubric: ["thesis", "use-of-clause-39", "consider-counterargument"],
    sourceIds: ["magna-carta-clause-39", "magna-carta-clause-40"]
  }
]
```

**首版 MVP 不用** — 这个 prompt 留给 Writing 模块整合阶段（Plan B 的 γ 阶段激活）。

---

## 10. Profile 占位符（个性化变量清单 — Winston 第 4 点要求落地）

> **设计原则**：所有"用户世界相关"的内容都用占位符 `{{xxx}}`，运行时从用户 profile 注入。Willow 是默认 fallback；其他用户进来内容自动适配。

### 10.1 当前使用的占位符

| 占位符 | 默认 fallback | 来源 | 用在哪里 |
|---|---|---|---|
| `{{userName}}` | "你" | profile 第一行 | conversation 直呼 |
| `{{userSchool}}` | "你的学校" | profile.school | Turn 1 hook（校长禁闭类比） |
| `{{userAge}}` | "13" | profile.age | Turn 11 Joan roleplay |
| `{{userPriorCity}}` | "中国" | profile.fromCity | Turn 3 唐律疏议引入（"你之前在 X 时听说过…？"） |
| `{{userInterest}}` | (无) | profile.interest | 选用 — 跟历史相关时（如 King John 打仗 → 王者荣耀团战类比） |
| `{{userParentWord}}` | "爸妈" | profile.parentLabel | Turn 14 seal 家庭话题 |
| `{{userPriorAnswers.X}}` | (无) | userWorldview snapshot | 跨 Topic callback — 见 §11 |

### 10.2 Fallback 注入规则

1. profile 字段缺失 → 用文档里 `|"..."` 后的默认值
2. `userInterest` 缺失 → 整段 interest-based 类比**直接跳过**（不要硬塞）
3. `userPriorAnswers` 缺失（首个 Topic）→ AI 不做 callback，正常进流程

### 10.3 个性化的边界 — **不要太牵强**（Winston 警告）

不能因为 profile 里有 "K-pop" 就强行把 Magna Carta 类比成 Blackpink 解约 —— 那是搞笑不是教学。**只有当画像元素跟历史核心机制有真实结构对应时才用**：

✅ 好类比：
- 校规 + 校长禁闭 → King John 任意囚禁（结构对应：权威滥用 + 受害者无申诉权）
- 班里小组要从大年级分出来 → 殖民地独立（结构对应：被统治者觉得不公）
- 王者荣耀团队不公平分金 → 贵族不公平征税（结构对应：贡献 vs 收益错配）

❌ 不该硬塞：
- "Blackpink 解约 = Magna Carta"（结构不对应，纯关键词触发）
- "你最爱的零食 = 国王的金库"（无意义）
- "你妹妹哭 = 教皇被逐出教会"（错位类比）

AI prompt 要带 **"如果找不到合适的画像类比，就用通用故事"** 的兜底指令。

---

## 11. 跨 Topic 用户世界观快照（**系统级新机制 — Winston 第 4 点深层要求**）

> 这一节**严格说不属于 Magna Carta Topic**，但因 Winston 提了，先在这里草拟，确认后会迁移到 `docs/HISTORY_PRODUCT_ANALYSIS.md` 作为产品级架构。

### 11.1 论断

每个 Topic 不应该是孤岛。AI 应该**像一个真实的老师**，记得她上次说了什么，下次自然 callback。这种"我记得你"是关系感的核心。

### 11.2 数据结构 — `userWorldview`

每完成一个 Topic，AI 自动产出一份"对她的观察"，写入持久化字段：

```js
userWorldview: {
  lastUpdated: "2026-05-01T...",
  topicsCompleted: ["magna-carta-1215"],

  // (a) 思维方式 — AI 从她的回答中观察到的
  reasoningStyle: {
    pattern: "cautious + analogy-heavy",  // 谨慎、爱用类比
    confidence: "medium",                   // 表态时偏委婉
    abstractionTolerance: "low → medium",   // 从具体跳抽象需要支架
    notes: "她经常说『我觉得可能...』而不是『我认为...』"
  },

  // (b) 价值取向 — 她重视什么
  valueEmphasis: [
    { value: "fairness",      strength: "strong", evidence: "Magna Carta T2 立刻说『不公平』" },
    { value: "family-loyalty", strength: "strong", evidence: "T12 说『不能让爸爸丢脸』" },
    { value: "individual-rights", strength: "weak", evidence: "她还没明确表态过私权 vs 集体" }
  ],

  // (c) 中国史锚点哪些她接得住
  knowledgeAnchors: {
    "tang-dynasty":     { strength: "strong",   note: "她对唐朝法律有家庭背景" },
    "imperial-tianzi":  { strength: "weak",     note: "她从没听过『天命』这个词，需要更多铺垫" },
    "jia-guo-tianxia":  { strength: "untested", note: "下个 Topic 试一下" }
  },

  // (d) 她自己说的话（她生活的真实片段）
  selfDisclosure: [
    { topic: "magna-carta-1215", turn: 2,  content: "她说她在班里跟同学吵架时也是『先要听我说』" },
    { topic: "magna-carta-1215", turn: 12, content: "她说她爸有时候也很倔，但她妈一发狠他就让步" }
  ],

  // (e) 留给下个 Topic 的钩子
  unansweredHooks: [
    "她对'集体 vs 个人'还没明确表态 — 黑死病 Topic 可以借社会重组拷打这个",
    "她对宗教权威半信半疑 — 宗教改革 Topic 接得住"
  ],

  // (f) 关系建立的具体细节
  relationshipMarkers: {
    aiCalledHerBy: "Willow",  // 用了名字几次
    sharedJokes: [],          // 双方有没有约定的梗
    runningQuestions: ["晚饭妈妈说了什么"],  // 跨 Topic 的悬念
  }
}
```

### 11.3 触发时机

每个 Topic 完成后：
1. AI 用专门 prompt 读完整次会话记录
2. 输出一个 JSON 增量更新（merge 进 userWorldview）
3. 持久化（α 阶段：localStorage / β 阶段：Supabase）

### 11.4 下个 Topic 怎么用

下个 Topic 启动时，AI 拿到 userWorldview 后：

**Turn 1 hook 之前的 0.5 turn — "我记得你"**：
> "上次 Magna Carta 我们聊到一半，你说你跟同学吵架时也是『先要听我说』 — 我一直记得这句话。
> 今天讲一件让全欧洲一半人没机会『先说话』的事 —— 黑死病。"

**Turn 3 bridge — 复用她已经会的锚**：
> （读 userWorldview 知道她"对唐朝法律有家庭背景"）
> "你之前对唐律熟，那今天就用 *元末瘟疫* 跟黑死病对比 — 同样的人口锐减，社会反应却完全不一样。"

**Turn 6 provoke — 戳她未表态的钩子**：
> （读 userWorldview 知道她"还没明确表态集体 vs 个人"）
> "黑死病死了一半人，欧洲人的反应是开始挣钱、买地、雇人 —— *个人主义* 兴起。元末死那么多，中国人的反应是更紧密抱团、修家谱 —— *家族主义* 加固。
> 同一个事，两个相反的反应。你直觉觉得哪种更合理？"

### 11.5 风险 — 不要做成"监视感"

**关键设计原则**：userWorldview 是 AI 内部的"记笔记"，**不直接展示给用户**。她不会看到一个写着"她对个人主义还没表态"的页面。

但 AI **言行举止**会让她感觉"咦这个 AI 居然记得我说过的"——这是温暖的。如果反过来 AI 直接说"我注意到你在 7.6 单元表现出对集体主义的偏好"，那就毛骨悚然了。

实现层面：
- `userWorldview` 只进 system prompt（永远不暴露）
- AI 引用她过去的话时**完整复述她原话**，让她能记得这是她说过的
- 不出现"我观察到你..."这种第三人称式描述
- 隐性的，不是显性的

### 11.6 Winston 已决策（2026-04-25）

✅ **从 MVP 直接启用** — 即使第一个 Topic 还没什么"过去的对话"可 callback，也立刻启用这个机制，原因：
- 用户进来就有 profile（年龄、之前城市、兴趣、上学情况）→ AI 直接从 profile **模拟一个初始 worldview seed**
- 第一个 Topic 的对话已经在写入 worldview，第二个 Topic 一来 AI 就有真实数据可用
- 这避免了"前面几个 Topic 的对话被丢掉"的浪费

✅ **永远不给家长看 selfDisclosure** — 孩子说的真实生活片段是关系的私领域，给家长看 = 信任崩塌。家长 dashboard（γ 阶段计划）只显示**结构性观察**（她的 reasoningStyle / valueEmphasis 这种类别），永不显示具体她说了什么。

✅ **定期 review 机制（解 worldview 误判）** — 不让她自己看 worldview（破坏隐性原则），而是 AI **每 5 个 Topic 自动重审一次**：重读所有会话原文，重新生成 worldview，跟旧的对比，如果差异大就标记并自我修正。这个机制让早期可能的误判随时间被纠正，不需要人工介入。

✅ **观点平衡原则 — 不能偏中或偏美** — userWorldview 里的 `valueEmphasis` 字段记录"她重视什么"时，AI 必须用**中性、双向**的词汇（如"fairness"、"family-loyalty"），**不能**用"偏中国传统主义" / "倾向西方个人主义"这种带预设倾向的标签。AI 在做评估时也不能 assume 哪个文化更"正确"。

### 11.7 Profile-derived 初始 seed（MVP 第一次启动）

第一次进产品，Willow 还没完成任何 Topic 时，AI 用 profile 里已有的信息**模拟一份初始 worldview**：

```js
userWorldview (initialSeed: true): {
  reasoningStyle: {
    pattern: "unknown — typical 7th grader transitioning from Chinese pedagogy",
    confidence: "TBD",
    abstractionTolerance: "medium (assumed based on grade)",
    notes: "首次见，先按 profile 默认值假设"
  },
  knowledgeAnchors: {
    "tang-song-china":     { strength: "likely-strong",  source: "Chinese 6 年级历史课纲必教" },
    "imperial-tianzi":     { strength: "likely-medium",  source: "中国文化常识，但学术细节可能不熟" },
    "western-medieval":    { strength: "weak",           source: "中国课纲不教，将首次接触" },
    "us-civics":           { strength: "weak",           source: "刚到美国 1 年内，公民课还没深入" }
  },
  valueEmphasis: [],   // 空 — 等真实对话填
  selfDisclosure: [],  // 空
  unansweredHooks: [
    "她的中国 vs 美国身份认同还没探测过 — Magna Carta 第一个 Topic 自然会碰到",
    "她对集体 vs 个人的直觉是什么 — 待发掘"
  ],
  initialSeed: true,
  seedDerivedAt: "2026-XX-XX",
  evolveAfterTopics: 0
}
```

第一个 Topic 完成后 → `initialSeed` 标志移除，正常增量更新。
第 5 个 Topic 完成后 → 触发 §11.6 的"定期 review"。

---

## 12. Winston 拍板结果（2026-04-25 锁定）

### Topic 内容层

| # | 议题 | Winston 拍板 | 备注 |
|---|---|---|---|
| 1 | 三维度 bridge 拆几个 Topic | ✅ **不拆**，1 个 Topic 内 14 轮搞定 | §6 已落实 |
| 2 | mustMemorize 数量 | ✅ **加** — 6→9 vocab, 3→4 concepts，共 13 项 | §4 已扩，对齐美国本土量级 |
| 3 | Source 3 (Pope's letter) 放哪 | ✅ **不放阅读层，留对话 Turn 5 抛** | §5.3 调整 / §6 Turn 5 已包含 |
| 4 | chinaCompare 唐代地图 MVP 做不做 | ✅ **不做** — MVP 用文字 + 现有 europe 图 | §3.5 已注 |
| 5 | conversation 14 轮 | ✅ **OK** | 30-45 分钟一次仍在 13 岁耐心上限 |
| 6 | Joan 角色处理 | ✅ **透明虚构** — 明确告诉她"这是我虚构的"，并约定"以后假装的练习我都先告诉你" | §6 Turn 11 已重写 |

### Profile + 个性化层（Winston 第 4 点）

| # | 议题 | Winston 拍板 |
|---|---|---|
| 7 | 画像类比"牵强阈值"判断 | ✅ AI 输出前自检"结构对应吗"，找不到对应就用通用故事 — §10.3 已含规则 |
| 8 | userWorldview 启用阶段 | ✅ **MVP 直接启用** — 从用户 profile 模拟初始 seed，§11.7 已加 |
| 9 | 家长可见性 | ✅ **永远不给家长看 selfDisclosure**，仅显示结构性观察（§11.6 锁定） |
| 10 | AI 误判世界观时 | ✅ **每 5 个 Topic 自动 review**（AI 重读会话原文，对比修正）— §11.6 锁定 |

### 哲学/宗教深度

| # | 议题 | Winston 拍板 |
|---|---|---|
| 11 | Aristotle 13 岁引用是否合适 | ✅ **OK**，Turn 13 保留 |

### 措辞修订（review 中发现的具体问题）

- ✅ §2.2 教皇站位的矛盾 — 重写区分两个尺度（**长期结构** vs **1215 具体时刻**）
- ✅ §6 Turn 5 配套设问 — 改为问"两个权威互相牵制"的结构性土壤，不再误指教皇本人
- ✅ §6 Turn 13 接力链「政府不能让步太多给政府」措辞错误 — 改为「政府不能从个人手里随便拿走的东西」

---

## 13. 通过 review 后的下一步

如果你认这版内容：
1. 我把这份 Markdown 转成 `lib/history-topics.js` 的 JS data file（带 `{{...}}` 占位符 + `userWorldview` 接口）
2. 启动 `pages/history.js` 的实际页面 skeleton — 地图 + 对话器 + mastery gate 串起来
3. 跑通端到端单 Topic 流程（这就是 MVP）
4. **平行任务**：在 `docs/HISTORY_PRODUCT_ANALYSIS.md` 加一个新章节描述 userWorldview 系统级机制（§11 的内容迁移过去，作为产品架构正式条款）

如果有需要重写的部分，标出来我们一段段重做。

_END OF DRAFT — Awaiting Winston review_
