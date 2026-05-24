# 希波战争 480 BCE · The Persian Wars Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    ancient-greece-480bce
生成日期:    2026-05-24
来源文件:    lib/history-storyboards/ancient-greece-480bce.js（3 lens：themistocles / metic-resident / laurion-slave-receiving-end，各 11 节点）
            + lib/history-narratives/ancient-greece-480bce.md（narrative kernel）
            + lib/history-storyboards/notebooks/ancient-greece-480bce.js（小薇同伴笔记本）
claim 总数:  28
🚩 红旗数:   3（需创始人审）— 全部为 ⚠️downgrade-wording / 措辞收紧，无 needs-source、无 ✋flagged 事实硬伤
```

**一句话总评**：史实地基**非常稳**——本 topic 最高风险的两组易混点（① Thermopylae 陆/斯巴达/8月/输 vs Salamis 海/雅典/9月/胜；② 508 BCE Cleisthenes 早于 480 一代人，BCE 越大越早）**全部正确，无任何混淆或时代错置**。所有人名、生卒、战役、日期、数字（200 trireme / 公民占 1/10–1/5 / Laurion 深约 100m / Xerxes 约前 518–465 / Themistocles 约前 471 放逐、约前 459 死于波斯）均对得上权威来源。两处一手引文（Herodotus 论自由 / Aeschylus《波斯人》战吼）均为**真实存在的段落、且文中已明确标注"转述简化"**，无伪造逐字引文。三个红旗全部是低优先级的措辞收紧：① 奴隶占比"约三分之一甚至更高"略偏高（学界 15–35%，常引"约四分之一"）；② Herodotus 那句的归属（实为流亡斯巴达王 Demaratus 之口，非泛泛"希腊人说"）；③ 斯巴达"每年合法杀 helot"与 krypteia 的时序细节可加一句限定。**无事实硬伤、无缺来源、无未标注的演绎角色**（两个虚构 representative —— metic + Laurion 矿奴 —— 在 lens description / kernel §3 / meta.notes 三处均已透明声明虚构）。

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`。
> 凡 `dramatization` 等级而文中**未透明标注**为合成 → 自动进红旗。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | "公元前 480 年 8 月 Thermopylae（温泉关）…… 斯巴达 Leonidas 带约 300 …… 全部战死，路也没守住"（`them-n4` / `them-n7` / kernel §2 L4 / 附录 A / 笔记本三大战表）| date+number+causal | encyclopedia | 维基/Britannica/historyofwar：Thermopylae 480 BCE，约 8 月（约 8/7 或 9 月初），Leonidas 率约 300 斯巴达 + 盟友，被绕后全军覆没，**是一场失败**的阻击 | ✅verified |
| 2 | "公元前 480 年 9 月 Salamis（萨拉米斯）…… 雅典带头 …… 全歼波斯舰队"（`them-n1`/`them-n6`/`them-n7`/kernel §2 L1+L4/附录 A/笔记本三大战表）| date+causal | encyclopedia | 维基 Battle of Salamis：波斯于 480-09-29 入海峡，雅典/Themistocles 主导的希腊海军大胜 —— 海/雅典/胜，与 Thermopylae 严格区分 | ✅verified |
| 3 | "公元前 479 年 Plataea（普拉提亚）…… 斯巴达带头 …… 结束整场战争"（`them-n7` / kernel §2 L4 / 附录 A / 笔记本三大战表）| date+causal | encyclopedia | 维基 Second Persian invasion / Plataea：479 BCE 陆战，斯巴达带头的希腊联军击溃波斯陆军，终结第二次入侵 | ✅verified |
| 4 | "约公元前 508 年 Cleisthenes（克利斯提尼）改革 …… 把权力从少数贵族交给全体公民 …… 比 Salamis 早一代人"（`them-n8` / `mt-n3` / kernel §2 L3+§7 / 笔记本"时间陷阱"卡）| date+causal | encyclopedia | 维基/Britannica Cleisthenes：约 508 BCE 改革，"father of Athenian democracy"，把权力从贵族转向 demos。508>480 即更早，"早一代人"成立 | ✅verified（BCE 算术正确，无时代错置）|
| 5 | "公元前 490 年 Marathon …… Xerxes 的父亲 Darius 派兵打雅典败北"（`them-n2` / kernel §2 L4+故事 1 / 附录 A）| date+causal | encyclopedia | 维基 Battle of Marathon：490 BCE，Darius I（Xerxes 之父）的波斯军败于雅典；Darius 死后子 Xerxes 继位再征 | ✅verified |
| 6 | "公元前 483 年 Laurion 银矿挖到富脉 …… 多数公民想分钱 …… Themistocles 说服公民大会造约 200 条三列桨战船"（`them-n3`/`ls-n3`/kernel §2 L4+§5C/附录 A/笔记本 trireme 卡）| date+number+causal | textbook | 维基 Mines of Laurion / Themistocles / HistorySkills：约 483 BCE 富脉，Themistocles 说服公民大会不分银、造 200 trireme | ✅verified |
| 7 | "他没敢说防波斯 …… 拿邻邦 Aegina（埃伊纳）当借口"（`them-n3` / kernel §3）| motive | encyclopedia | 维基 Themistocles：他避谈波斯（太远），以雅典与 Aegina 的长期海战为由说服造船 | ✅verified |
| 8 | "Themistocles 派一个信得过的仆人（Herodotus 记名 Sicinnus）给 Xerxes 送假情报 …… 诱波斯封锁海峡"（`them-n6` / kernel §3+故事 6）| quote+causal | primary | 维基 Battle of Salamis + Herodotus 8.75：Themistocles 遣仆人 Sicinnus 报假信"希腊人要夜逃"，诱波斯封堵海峡 | ✅verified |
| 9 | "约公元前 471 年 Themistocles 被陶片放逐 …… 最终逃到波斯，新王给封地，死在波斯"（`them-n9` / kernel §3+故事 9 / 附录 A+C / 笔记本 ostracism 卡）| date+causal | encyclopedia | 维基 Themistocles：约 472/471 BCE 被放逐（先逃 Argos），后投波斯，Artaxerxes I 封 Magnesia 总督，约 459/458 BCE 死于该地 | ✅verified（见红旗外备注：文中"波斯新王"未具名，主流为 Artaxerxes I）|
| 10 | "约公元前 459 年 Themistocles 死于波斯"（附录 A+C）| date | encyclopedia | 维基：约 459/458 BCE 死于 Magnesia（病死/传说服毒）| ✅verified |
| 11 | "Xerxes（薛西斯）约前 518–465 …… 波斯大王 …… 480 BCE 亲征希腊"（`them-n1`/`them-n2`/附录 C/笔记本 keyFigures）| date | encyclopedia | 维基 Xerxes I：约 518 BCE 生，486 即位，465 BCE 遇刺；480 BCE 亲率第二次入侵 | ✅verified |
| 12 | "Themistocles 约前 524–459 …… 出身不算最显赫"（`themistocles` description / kernel §3 / 附录 C）| date | encyclopedia | 维基 Themistocles：约 524 BCE 生，约 459 死；出身相对寒微（母非雅典贵族）| ✅verified |
| 13 | "波斯是当时世界最大帝国，从今土耳其管到印度边上"（`them-n2` / kernel §2 L3 / 故事 3）| absolute | textbook | 维基 Achaemenid Empire：希波战争时波斯为当时最大帝国，疆域自小亚细亚（今土耳其）至印度河流域 | ✅verified |
| 14 | "Herodotus 写波斯军『几百万』是夸张 …… 但军队过河把河喝干式的庞大是真"（`them-n2` / kernel 故事 3）| number | primary | 维基 Histories / 学界共识：Herodotus 的百万级数字被现代史家视为夸张；"河被喝干"为 Herodotus 式修辞，文中已标"夸张/后人不信" | ✅verified（已自我标注为夸张）|
| 15 | "能投票的成年男性公民只占约全城人口的十分之一到五分之一"（`mt-n3`/kernel §2 L2+§10 清坑 1 / 笔记本 citizenship 卡+附录 D）| number | textbook | 维基 Athenian democracy：实际参与治理者约占总居民 **10%–20%**；成年男性公民约占成年人口 ≤30% —— 文中"1/10–1/5"落在权威区间内 | ✅verified（本 topic 最高频数字，区间正确）|
| 16 | "被奴役者约占总人口的三分之一甚至更高"（kernel §2 L2 / 笔记本 citizenship 卡）| number | textbook | 学界估计奴隶占比 **15%–35%**（常引"约四分之一/one in four"，上限约 1/3）。"约三分之一"在区间上沿，"甚至更高"略越出 | ⚠️downgrade-wording（见红旗 #1）|
| 17 | "metic 每月交专门的居留税（metoikion）…… 富 metic 战时出资赞助城邦（如装备战船）"（`mt-n2` / kernel §3 / 笔记本 keyTerms）| textbook | encyclopedia | 维基 Metic：metoikion 为按月/按年征于外邦人的居留税；富裕 metic 承担 liturgy（含 trierarchy 装备战船）| ✅verified |
| 18 | "metic 永远不能在公民大会投票、不能拥有土地 …… 公民需父母都是雅典人"（`mt-n3`/`mt-n5`/`mt-n8` / kernel §3）| textbook | encyclopedia | 维基 Metic / Athenian democracy：metic 无投票权、原则上无土地所有权；伯里克利公民法（前 451）后公民需父母双方皆雅典人 | ✅verified（文中未具名 451 法，仅述"血统决定"，准确）|
| 19 | "波斯战争中 metic 也被征上三列桨战船划桨"（`mt-n4`/`mt-n6` / kernel §3）| inference | encyclopedia | 维基 Trireme / Salamis：trireme 桨手主体为低阶公民（thetes），战时亦征 metic 及（极端时）解放的奴隶。文中"临时放出来的被奴役者"亦为史载（Salamis 前曾解放部分奴隶充桨手）| ✅verified |
| 20 | "ostracism（陶片放逐）…… 每年公民大会投一次 …… 名字刻陶片，最多者放逐十年，不审判不定罪"（`them-n9` / kernel §5D / 笔记本 ostracism 卡）| textbook | encyclopedia | 维基 Ostracism：每年公民大会先表决是否举行，举行则刻名 ostraka，得票最多者流放十年，非刑事审判 | ✅verified |
| 21 | "考古出土大量 ostraka，含刻 Themistocles 名字的"（kernel §5D / 笔记本 ostracism 卡）| textbook | encyclopedia | 维基 Ostracism / Agora 发掘：雅典出土数千枚 ostraka，含大量刻 Themistocles 名者 | ✅verified |
| 22 | "Laurion 矿道最窄一两尺高 …… 深坑可达地下一百多米 …… 无风无光闷热缺氧"（`ls-n2`/`ls-n6` / kernel §3）| number | textbook | ResearchGate/维基 Mines of Laurion：主竖井均深约 65.6m，**最深约 101.5m**（古代世界唯一达 100m 者）；通风/缺氧为已知问题。文中"地下一百米/一百多米"准确 | ✅verified |
| 23 | "Laurion 银矿里上万真实存在过的被奴役矿工"（`laurion-slave` description / kernel §3）| number | textbook | 维基/Lavrion 考古：估计近 **20,000** 名奴隶在 Laurion 劳作。"上万"量级相符 | ✅verified |
| 24 | "Herodotus：希腊人不是任何一个人的奴隶，他们听从的是法律而不是主人"（kernel §5A，转述简化）| quote | primary | Herodotus《历史》7.104 Demaratus 对 Xerxes 语："虽自由，仍有一主——法律（nomos），他们畏之甚于波斯人畏王。"文中已标"转述简化" | ✅verified（见红旗 #2：归属为 Demaratus 之口，非泛"希腊人说"）|
| 25 | "Aeschylus《波斯人》借波斯之口写希腊战吼：解放祖国、妻儿、神庙与祖先的坟墓"（kernel §5B / 笔记本，转述简化）| quote | primary | Aeschylus《波斯人》v.402–405 原文："Ὦ παῖδες Ἑλλήνων …… 解放祖国、子女、妻、祖神之庙、先人之墓"。文中已标"转述简化"，逐字未伪造 | ✅verified |
| 26 | "Aeschylus 本人在 Salamis 参战 …… 是史上最早从敌人视角写大战的作品之一"（kernel §5B / 故事 6）| causal | encyclopedia | 维基 Aeschylus / The Persians：Aeschylus 曾参 Marathon 与 Salamis；《波斯人》(472 BCE) 是现存最早完整悲剧、且罕见地从败方视角叙事 | ✅verified |
| 27 | "斯巴达靠数倍于己的 helot 国家奴隶养全职战士 …… 甚至每年『合法』杀一些 helot 防造反"（`ls-n8` / kernel 故事 10 / 笔记本 sparta-vs-athens 卡）| causal+number | textbook | 维基 Sparta / Krypteia：helot 数倍于斯巴达人（高至约 7:1）；ephor 每年就任时**仪式性对 helot 宣战**，使杀戮"合法"无污染（krypteia）| ✅verified（见红旗 #3：krypteia 时序可加限定）|
| 28 | "雅典『公民=成年男性』 ↔ 1787 费城『We the People=有产白人男性』；Laurion 矿奴付账被排除 ↔ 3/5 妥协"（`mt-n9`/`ls-n9` / kernel §7 / 笔记本 legacy 卡）| causal | textbook | 跨 topic 对位，措辞均用"同一道题/重画的线"留余地，未做单因或时代错置归结；与 constitutional-convention-1787 账本一致 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 全部为 ⚠️downgrade-wording（措辞收紧），**无事实硬伤、无缺来源、无演绎未标注**。按影响排序。

1. **[#16]** `「被奴役者约占总人口的三分之一甚至更高」`（kernel §2 L2，且笔记本 citizenship 卡作"约占总人口三分之一甚至更高 / about a third of the total population, perhaps more"）
   - **问题**：古典雅典奴隶占比是出名的争议数字，权威区间约 **15%–35%**，最常被引用的中位估计是"约四分之一（one in four）"。文中"约三分之一"已在区间上沿，再加"甚至更高"会把读者推向 ≥1/3 的高端，略偏激进。
   - **建议**：改为"约四分之一到三分之一"或"约占总人口的三分之一左右（学界估计差异大，约四分之一到三分之一）"。注意：这是**唯一一处可能偏高的数字**；最高频、最吃重的那个数字（公民占 1/10–1/5）反而**完全正确**，无需动。低优先级，可保留亦可轻收。

2. **[#24]** `「Herodotus 论希腊的『自由』…… 希腊人之所以能挡住波斯，是因为他们『不是任何一个人的奴隶』，他们听从的是『法律』而不是『主人』」`（kernel §5A，转述简化）
   - **问题**：**不是事实硬伤**——这段思想确实出自 Herodotus《历史》7.104，且文中已透明标注"转述简化、不伪造逐字引文"，处理合规。唯一可收紧处：原文是流亡的**斯巴达废王 Demaratus 对 Xerxes** 说的（"希腊人虽自由，仍有一主：法律"），并非 Herodotus 以叙述者身份、或泛泛"希腊人说"的总结。文中"希腊人说"的拟人化略去了这层"敌营里的斯巴达人现身说法"的戏剧来源。
   - **建议**：可保持现状（已标"转述简化"，且 §5A 已用"多视角并读"点出这是"雅典民主的自我形象"，立场处理到位）；若要更严，加半句"（这话在 Herodotus 笔下，是一位流亡波斯的斯巴达人对 Xerxes 说的）"。**列此条仅为透明，非必改。**

3. **[#27]** `「斯巴达人甚至每年『合法』杀一些 helot 防造反」`（`ls-n8` / kernel 故事 10 / 笔记本 sparta-vs-athens 卡）
   - **问题**：**史实方向正确**——斯巴达 ephor 每年就任时确实仪式性地对 helot"宣战"，使杀戮无宗教污染（即 krypteia 制度的背景）。轻微学术争议：部分学者认为 krypteia 的大规模杀戮是在公元前 465 年 helot 大起义**之后**才强化的，且其究竟是"成年礼"还是"国家镇压"史界仍有争论。"每年合法杀一些"是对"每年宣战 + krypteia"的合理压缩，但把它当成稳定的年度制度略简化。
   - **建议**：可保留（7 年级层面，"每年合法宣战、可杀 helot"是教学上准确且有力的概括）；若要更严，把"每年合法杀一些 helot"改为"每年都对 helot 宣战，让杀 helot 变成合法的事"——更贴近 ephor 宣战机制、且不绑定具体杀戮频率。最低优先级。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| **一个雅典 metic 居留外邦人** | metic-resident | **完全虚构的 representative**，代表真实存在的成千上万 metic 群体；无具名、无伪造个人档案 | ✅**已透明标注**（lens description cn/en 明写"一个虚构的 metic"；kernel §3 加粗"**这是一个虚构人物，但他代表的是……真实的 metic**"；meta.notes 列 representative composite）|
| **一个 Laurion 银矿被奴役矿工** | laurion-slave-receiving-end（DEFAULT）| **完全虚构的 representative**，代表上万真实存在却几乎全部无名的矿奴；第一人称内心独白为叙事重构 | ✅**已透明标注**（lens description 明写"一个虚构的人物，但他代表的是上万真实存在过的人"；kernel §3 加粗声明；ls-n3/ls-n6 用括号短句区分"确证 vs 叙事补充"）|
| 银→海军→Salamis **因果链** | 全 3 lens（尤 `ls-n3`/`them-n6`）| 非人物，但属因果推断：把"Laurion 银 = 造海军的钱"摊开 | ✅**已透明标注**（`ls-n3` 括号"两件事怎么连后来才有人讲清……能确证的是：那几年 Laurion 出的银正是造海军的钱"；kernel §5C 标"史实链，非引文"）|
| "你就是 TA"第二人称代入（`*-n4` peak）| 全 3 lens | 把读者置入主角内心做选择，属**教学代入手法**，非伪造史实人物 | N/A — 教学手法，非合成角色 |
| Herodotus / Aeschylus 引文 | kernel §5A/§5B | 非合成人物；两段"原文"为真实段落的**简化转述** | ✅**已透明标注**（§5 抬头 + 每条均标"转述简化"，明示"不伪造逐字引文"）|

**结论**：本 topic **无未标注的合成人物**。两个核心虚构 representative（metic + Laurion 矿奴）在 lens description + narrative kernel §3 + meta.notes 三处透明声明虚构身份并说明其"代表真实群体"，符合 `HISTORY_EVIDENCE_LAYER.md` §1.3 / §2.1 composite 透明红线。两段一手引文均标"转述简化"，无把演绎句排成史料档案样式的违规。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— themistocles（perpetrator-actor，11 节点）/ metic-resident（lonely-mediator，11 节点）/ laurion-slave-receiving-end（receiving-end，DEFAULT，11 节点）+ 同伴笔记本（8 考点卡 + 3 DBQ 题）。红旗分布：#16 在 kernel/笔记本（跨用）；#24 在 kernel §5A；#27 在 laurion lens + 笔记本。
- **本 topic 最高风险类（陆海两线易混 + BCE 算术）全部 ✅**：
  - **Thermopylae vs Salamis 无混淆**：Thermopylae（**陆 / 斯巴达 Leonidas+约300 / 8月 / 输**）与 Salamis（**海 / 雅典 Themistocles / 9月 / 决胜**）在 storyboard、kernel、笔记本三处反复且一致地分清，并主动清坑"300 勇士其实是输的"。Plataea（479 / 陆 / 斯巴达带头 / 结束战争）亦正确。
  - **BCE 算术无时代错置**：508（Cleisthenes）> 490（Marathon）> 483（Laurion）> 480（Thermopylae/Salamis）> 479（Plataea）> 471（放逐）> 459（死）—— 全序列正确；笔记本专设"时间陷阱：508 比 480 更早，公元前数字越大越早"卡，主动防错。Pericles（450s–430s）"晚一代多"亦正确标注。
- **直接引语分层核验**（本 topic 最高风险类，全部 ✅，无伪造逐字引文）：
  - *真实史料（转述简化，已标注）*：Herodotus 7.104 论自由/法律为主（Demaratus 语）；Aeschylus《波斯人》v.402+ Salamis 战吼（"解放祖国、妻儿、神庙、先人之墓"）—— 均对得上一手文本，且文中明示"转述简化、不伪造逐字"。
  - *演绎/概括句*：三个主角第一人称内心独白（Themistocles"我赌窄海峡"、metic"我流的血算数我这个人不算数"、矿奴"这点银是我们的坟"）—— 属第一人称叙事重构，**无把演绎句排成史料档案样式的违规**；矿奴 lens 更用括号短句反复声明"能确证的 vs 叙事补充"。
- **用到的外部核实来源**：Wikipedia（Battle of Thermopylae / Battle of Salamis / Second Persian invasion of Greece / Battle of Marathon / Cleisthenes / Athenian democracy / Themistocles / Mines of Laurion / Trireme / Metic / Ostracism / Xerxes I / Achaemenid Empire / Sparta / Demaratus / The Persians / Aeschylus）、Britannica（Thermopylae / Cleisthenes / Battle of Salamis）、World History Encyclopedia（Cleisthenes / Themistocles / Trireme）、HistorySkills（Laurion）、ResearchGate（Laurion 竖井几何，最深约 101.5m）、ordinaryphilosophy（Herodotus 7.104 Demaratus）、classics.mit.edu / Sabidius（Aeschylus 波斯人战吼）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2（Fact Ledger）—— 所有高风险 claim 均有来源或可降级为谨慎措辞，**无 needs-source 缺口、无 ✋flagged 硬伤**。三条红旗全为低优先级 ⚠️downgrade-wording，建议处理 **#16（奴隶占比"三分之一甚至更高"→"约四分之一到三分之一"）** 后即可过 Gate 2；#24/#27 为透明性/学术严谨补充，可与 #16 同批轻收，亦可保留。
