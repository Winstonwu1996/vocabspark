# 阿育王与羯陵伽之战 公元前 261 年 · Ashoka & the Kalinga War Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative/notebook，**只写本账本文件**，绝不改内容。

```
topicId:    mauryan-india-261bce
生成日期:    2026-05-24
来源文件:    lib/history-storyboards/mauryan-india-261bce.js（3 lens：ashoka / dhamma-official / kalinga-survivor-receiving-end，各 11 节点）
            + lib/history-narratives/mauryan-india-261bce.md（narrative kernel）
            + lib/history-storyboards/notebooks/mauryan-india-261bce.js（同伴笔记本：8 考点卡 + 3 DBQ）
claim 总数:  27
🚩 红旗数:   4（需创始人审）— 全部为 ⚠️downgrade-wording / 措辞收紧，无 needs-source、无 flagged 事实硬伤
✋硬伤数:    0
```

**一句话总评**：史实地基**非常稳**——这是本批次里事实最干净的一个 topic。所有日期（前 321 立国 / 前 268 即位 / 前 261 羯陵伽 / 前 232 卒 / 死后约 50 年瓦解 / 1950 国徽）、Rock Edict XIII 的死亡数字、dhamma ≠ 佛教、阿育王未变和平主义者（保军队/保死刑/警告边境/未还 Kalinga）、dhamma-mahamatta 官职、lion capital → 国徽，全部对得上权威一手/学界来源。最关键的一点 anti-fab 处理得**教科书级**：Rock Edict XIII 的死亡数字其实**就是逐字原文里的数字**（"150,000 deported, 100,000 killed"），而内容却**主动**把整段法敕标注为"简化/转述、非逐字原文"——这是宁可低估自己可信度的保守做法，零捏造风险。3 个虚构承载者（达摩官、Kalinga 幸存者）均在 description 字段透明声明为"虚构个体承载真实群体经验"。红旗集中在 4 处可轻度收紧的措辞（"15 万去当奴工/填人口"的去向定性、约数 vs 精确数的口径、"几千份/几千公里"的量级修辞、Sri Lanka 传教归属的简化），**无一处是事实错误**。

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
| 1 | "阿育王约公元前 268 年即位 …… 约在位前 268-232 年"（kernel §3/§4/附录 A/C、`ash-n2`、notebook keyFigures/ashoka-reign）| date | encyclopedia | 维基 Ashoka / Britannica：在位 c.268–232 BCE | ✅verified |
| 2 | "约公元前 261 年 …… 羯陵伽之战 …… 即位约第 8 年"（kernel §1/§4、`ash-n1`/`ash-n5`、notebook kalinga-war）| date | primary+encyclopedia | 维基 Kalinga War + Rock Edict XIII 自述"即位后第 8 年征服 Kalinga" → 约 261 BCE | ✅verified |
| 3 | "公元前数字越大年代越早；前 268 早于前 261"（kernel 附录 A 提醒、notebook ashoka-reign BCE 陷阱卡）| number/逻辑 | inference | BCE 算术正确：268>261，前 268 确在前 261 之前（即位先于战争 7 年）| ✅verified |
| 4 | "Rock Edict XIII：约 10 万人被杀，约 15 万人被掳走流放，数倍于此战后死去"（kernel §1/§5A、`ash-n5`、所有 lens N1、notebook q1/q3）| number+quote | primary | Rock Edict XIII 原文（多译本一致）："One hundred and fifty thousand were deported, one hundred thousand were killed and many more died." 数字**精确对得上** | ✅verified |
| 5 | "法敕内容为简化/转述，非逐字原文；原文用 Prakrit 俗语 + Brahmi 文字，译本有多个"（kernel §5 抬头、`ash-n5` 括号、notebook rock-edict 卡 ⚠️）| representativeness | primary | 维基 Major Rock Edicts：Prakrit / Brahmi（西北用 Kharosthi、坎大哈用希腊/阿拉米文），多译本。**主动声明"非逐字"虽然数字其实就是原文数字——保守且合规** | ✅verified（见备注：超额保守，零捏造风险）|
| 6 | "他心生深深的懊悔（remorse）"（kernel §4/§5A、`ash-n5`、所有 N4/N6）| quote/motive | primary | Rock Edict XIII：征服 Kalinga 后 Ashoka 表达 deep remorse / 痛悔，原文确证 | ✅verified |
| 7 | "同一块石头警告边境部族：王虽愿宽恕、愿讲 dhamma，但王仍有力量，他们最好悔改免遭殃"（kernel §5C、`ash-n6`、`do-n6`、`ks-n6`）| quote/motive | primary | Rock Edict XIII 原文："even the forest people … despite his remorse Beloved-of-the-Gods has the power to punish them … so that they should be ashamed of their wrong and not be killed." 转述**忠实** | ✅verified |
| 8 | "真正的征服是 dhamma 的征服"（kernel §5B、`ash-n6`）| quote | primary | Rock Edict XIII："conquest by morality / Dhamma-vijaya"——口号式转向，原文确证 | ✅verified |
| 9 | "他没有变成和平主义者：没解散军队、没放弃帝国、保留死刑（加缓刑上诉余地）"（kernel §3/§4 故事8/§10.1、`ash-n6`/`ash-n10`、notebook q1）| absolute/causal | primary+textbook | Pillar Edict IV：死刑犯给三天缓期（让亲属求情）→ **未废死刑**；军队/帝国保留为学界共识 | ✅verified |
| 10 | "给死刑犯三天缓期去上诉"（kernel §4 故事8、`ash-n7`、notebook administration 卡）| primary | primary | Pillar Edict IV 原文：判死者三日缓期 | ✅verified |
| 11 | "他没有归还 Kalinga，也没把 15 万流放者送回家"（kernel §4 故事9/§10.4、`ash-n6`/`do-n6`/`ks-n6`、notebook q1 误解陷阱）| absolute/causal | inference | Rock Edict XIII 无归还/释放表述（仅宣布转向 dhamma）；史无 Kalinga 复独立或遣返记录——以"史料未载"为据的合理负面推断 | ✅verified |
| 12 | "dhamma ≠ 佛教；是一套跨教派公共伦理（非暴力/宽容/敬长辈/善待穷病奴仆/克制）"（kernel §3/§5、`do-n2`、`ash-n6`、notebook dhamma-not-buddhism 卡）| causal/representativeness | textbook | 学界共识（Romila Thapar / Nayanjot Lahiri）：dhamma 是 ecumenical、non-sectarian 的 civil ethos，受佛教启发但非等同佛教 | ✅verified |
| 13 | "阿育王个人偏向佛教、扶持佛教、修 stupa（佛塔）≠ 帝国被佛教化"（kernel §5D/§10.3、`ash-n7`、`do-n2`、notebook spread-of-buddhism 卡）| causal | textbook | 学界共识：Ashoka 皈依佛教但不强加，帝国始终多教派并存 | ✅verified |
| 14 | "他设立 dhamma-mahamatta（达摩官）这一新官职推行 dhamma：巡行、调解、护弱、监督官吏、促各教和睦"（kernel §3/§4 故事7、`ash-n8`、`do-*`、notebook administration 卡）| absolute/causal | primary | Rock Edict V 原文："In the past there were no Dhamma Mahamatras but such officers were appointed by me thirteen years after my coronation." 职责（各教/囚犯/弱势福利）原文确证。官职**真实存在** | ✅verified |
| 15 | "开国君主 Chandragupta（旃陀罗笈多）约公元前 321 年立国"（kernel §2/§4 故事1/附录 A/C、`ash-n2`、notebook foundation 卡）| date | encyclopedia | 维基/World History Encyclopedia：约 321 BCE 立国（部分学者作 c.322 BCE，差 1 年同口径区间）| ✅verified |
| 16 | "谋臣 Kautilya / Chanakya（考底利耶）+ 治国权术书 Arthashastra（《政事论》）"（kernel §2/§4、`ash-n2`、notebook keyFigures/foundation）| causal | encyclopedia | 维基/Britannica：Chanakya（= Kautilya）传为 Chandragupta 谋臣，与 Arthashastra 相关。内容已用"传说/相传/据传"留余地，恰当 | ✅verified |
| 17 | "首都 Pataliputra（华氏城，今 Patna 巴特那），坐落恒河边，当时世界最大城市之一"（kernel §2 L0、`do-n1`/`do-n3`、notebook foundation 卡）| absolute | encyclopedia | 维基 Pataliputra：Maurya 首都，恒河（Ganges）边，古代最大城市之一 | ✅verified |
| 18 | "Maurya 是古印度第一个统一次大陆大部分地区的帝国；与汉、罗马并列的古典大帝国之一"（kernel §0/§2、notebook foundation 卡）| absolute | textbook | 标准教材表述（AP World 古典帝国比较：Maurya / Han / Rome）| ✅verified |
| 19 | "阿育王约公元前 232 年去世；死后约 50 年，Maurya 帝国分裂瓦解"（kernel §4 故事10/§6/附录 A、`ash-n9`/`do-n9`/`ks-n9`、notebook administration 卡）| date/number | encyclopedia | 维基 Maurya Empire：末王 Brihadratha 约 185 BCE 被 Pushyamitra Shunga 弑 → 距 232 BCE 约 47 年≈"约 50 年"，量级准确 | ✅verified（见红旗无关；约数合理）|
| 20 | "lion capital（狮子柱头，四头背对背狮子）→ 1950 年成现代印度共和国国徽；法轮 Ashoka Chakra 入国旗中央"（kernel §4 故事10/§6/附录 A/D、`ash-n9`、notebook lion-capital 卡）| date/absolute | encyclopedia | 维基 State Emblem of India：基于 Sarnath 狮子柱头，1950-01-26（共和国成立日）采用；Ashoka Chakra 在国旗中央 | ✅verified |
| 21 | "约 15 万被掳流放者 …… 往帝国腹地押走，去当奴工、去填那个帝国的人口"（`ks-n3`，呼应 `ash-n1`/`ash-n4`/`do-n4`"被绳子串走"）| causal/representativeness | inference | Rock Edict XIII 确证"150,000 deported（被迁离/流放）"，但**未具体说明去向为"奴工/填人口"**。"deport"的现代学界理解多为强制迁徙；"奴工/填人口"是合理但**超出法敕原文**的具体化 | ⚠️downgrade-wording（见红旗 #1）|
| 22 | "约 10 万 / 约 15 万"全文统一用"约"（all lenses N1/N4、kernel §1）| number | primary | 原文给的是整数 100,000 / 150,000（本身已是阿育王给的概数级整数）。内容加"约"字是**正确**的谨慎；但偶有节点（如 notebook 加粗"100,000 dead""150,000"）口径需与"约"一致 | ⚠️downgrade-wording（见红旗 #2，极低优先级）|
| 23 | "国王刻的话刻了几千份，立遍整个帝国"（`ks-n8`）；"法敕刻遍帝国 …… 几千公里"（`ash-n7`/`do-n1`/`do-n3`）| number/rhetoric | inference | 现存阿育王法敕实物为数十处地点（major rock edicts ~大几十处岩石/石柱），非字面"几千份"。"几千公里"指帝国跨度（阿富汗到孟加拉湾）则量级成立 | ⚠️downgrade-wording（见红旗 #3）|
| 24 | "他向南方的 Sri Lanka（斯里兰卡）等地派出传教使团，把佛教带出去"（kernel §6、notebook spread-of-buddhism 卡）| causal | encyclopedia | 维基/Britannica：阿育王派子 Mahinda（摩哂陀）赴 Sri Lanka（Rock Edict XIII 列 Tamraparni 为 dhamma-vijaya 对象）。内容已用"据传"留余地，恰当；可补"由其子 Mahinda 率"更精确 | ✅verified（见红旗 #4 仅可选增强）|
| 25 | "公元前 261 年前后（前 260），中国秦赵长平之战，据《史记》白起坑杀赵降卒数十万"（kernel §8、`ash` cross-topic、notebook q2 提示）| date/number | textbook | 维基 Battle of Changping：262–260 BCE，前 260 决战；《史记》记白起坑杀赵降卒约 40 万（"数十万"准确）。同时代结构巧合成立 | ✅verified |
| 26 | "秦二世而亡（约公元前 221-206 年）"（kernel §8 帝国寿命对照）| date | textbook | 秦统一 221 BCE、亡于 206 BCE（子婴降）——标准年代 | ✅verified |
| 27 | "Kalinga 在今印度东岸 Odisha 一带，独立、富庶、靠海上贸易"（kernel §1/§2/附录 B、`ks-n2`、`ash-n2`）| absolute | encyclopedia | 维基 Kalinga War：Kalinga 位于今 Odisha + 北 Andhra Pradesh 沿东海岸，征服前独立 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 全部为 ⚠️downgrade-wording（措辞收紧），**无事实硬伤、无缺来源、无演绎未标注、无 BCE 算术错误**。按影响排序。

1. **[#21]** `「约 15 万人被绳子串成一长队，往北边那个帝国的腹地押走——去当奴工、去填那个帝国的人口」`（`ks-n3`；呼应 `ash-n1`/`ash-n4`/`do-n4` 的"被绳子串走")
   - **问题**：Rock Edict XIII 原文确证的是 "150,000 deported"（约 15 万被**迁离/流放**），但**没有**说明被掳者的具体去向是"当奴工 / 填人口"。"奴工 / 填人口"是符合古代征服逻辑的**合理推断**，但属**超出法敕原文**的具体化——而本 topic 全程极其严格地把"史料确证的"和"叙事补充的"分层（连数字都主动标"非逐字"）。这一处的去向定性是少数没有同步标注"这是推断"的具体细节。
   - **建议**：①最稳妥——改为中性的"被掳走、强行迁离、再没回来"（与法敕"deported"对齐，不指定去向）；②若想保留画面感，加一句叙事补充提示，如"（他们被带去了哪里、做了什么，法敕没有写下——这是后人据当时的常理推想的）"。属低优先级，但因本 topic 的 anti-fab 标准定得极高，建议与其自身标准对齐。

2. **[#22]** 约数口径一致性（notebook `rock-edict` 卡 / `kalinga-war` 卡里加粗的 `100,000 dead` / `150,000`，vs storyboard 全程用"约 10 万 / 约 15 万 / about a hundred thousand"）
   - **问题**：**不是事实错误**——100,000 / 150,000 本就是阿育王在法敕里给的整数。storyboard 一律加"约 / about"做谨慎处理是**正确**的；notebook 个别加粗数字未带"约"。仅口径统一问题。
   - **建议**：把 notebook 里加粗的数字也统一带"约"（约 100,000 / 约 150,000），与 storyboard 一致即可。最低优先级，可不改。

3. **[#23]** `「他们在帝国各地的石头上，刻了一段话 …… 刻了几千份，立遍整个帝国」`（`ks-n8`）
   - **问题**：现存阿育王法敕实物分布于数十处地点（major rock edicts + pillar edicts 合计大几十处），不是字面意义的"几千份"。这是 `ks-n8`"谁的声音被记下"这一情感高点的修辞夸张。同节点的"几千公里"指帝国跨度（阿富汗山地→孟加拉湾）是成立的，问题只在"几千份"。
   - **建议**：把"刻了几千份"改为"刻在帝国各地几十处的岩壁石柱上 / 刻了一处又一处，立遍整个帝国"——既保留"广播全帝国"的震撼，又不夸大份数。低优先级。

4. **[#24]** `「据传他向帝国之外派出传教使团，把佛教带向南方的 Sri Lanka（斯里兰卡）等地」`（kernel §6、notebook `spread-of-buddhism` 卡 standaloneText）
   - **问题**：**不是错误**——已用"据传"留余地，事实方向正确。唯一可增强：传 Sri Lanka 的核心是阿育王**之子 Mahinda（摩哂陀）**率团（其女 Sanghamitta 携菩提树苗随后建比丘尼僧团）。当前表述笼统说"派出传教使团"，AP/州考有时会具体考"谁"被派去 Sri Lanka。
   - **建议**：可选增强——补一句"（据传由其子 Mahinda 摩哂陀率领）"。**纯增强项，非必改**；列此条仅为透明 + 给一个可选的考点强化。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/家世/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| **Ashoka 阿育王** | ashoka | 真实历史人物，在位/事迹/法敕实物俱在 | N/A — 非合成；第一人称内心独白为合理叙事重构，关键史实句（数字/懊悔/警告边境）均对应 Rock Edict XIII 原文 |
| **dhamma-mahamatta（达摩官）** | dhamma-official | **官职真实**（Rock Edict V 确证）；本 lens 主角的**具体姓名、家世为叙事补充** | ✅**已透明标注**（lens description："这一官职是法敕里真实记载的；具体姓名家世为叙事补充" + kernel §3 + notebook keyFigures roleCn "法敕真实记载" + meta.notes anti-fab 条目）|
| **Kalinga 幸存者** | kalinga-survivor-receiving-end | **虚构的具体个人，承载真实群体经验** | ✅**已透明标注**（lens description："虚构的具体个人，承载真实的群体经验——史料确证的是法敕里约 10 万死、15 万流放的数字，以及 Kalinga 被吞并这件事" + kernel §3 + notebook keyFigures + meta.notes）|
| "你就是 TA"第二人称代入（各 lens `*-n4` peak）| 全 3 lens | 把读者置入主角内心做选择，属**教学代入手法**，非伪造史实人物 | N/A — 教学手法，非合成角色 |
| `do-n5`/`ks-n5` 达摩官"先承认杀你全家是国王、再给实在好处"的对话场景 | dhamma-official / kalinga-survivor | 具体对话为叙事化（无具名第三方虚构人物）；底层 dhamma-mahamatta 职责（护弱/退税/调解）有 Rock Edict V 支撑 | ✅可接受（无具名捏造，职责有据）|

**结论**：本 topic **无未标注的合成人物**。两个虚构/半虚构承载者（达摩官的姓名家世、Kalinga 幸存者整个个体）均在 lens description + kernel §3 + notebook keyFigures + meta.notes **四处**透明标注，且明确区分"史料确证的"（数字 / dhamma-mahamatta 官职存在 / Kalinga 被吞并）与"叙事补充的"。符合 `HISTORY_EVIDENCE_LAYER.md` §1.3 / §2.1 composite 透明红线，处理标准高于本批次平均。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— ashoka（perpetrator-actor + reformer arc，11 节点）/ dhamma-official（lonely-mediator，11 节点）/ kalinga-survivor-receiving-end（receiving-end，DEFAULT，11 节点）+ notebook（8 考点卡 + 3 DBQ）。红旗分布：#21（去向定性）主要在 receiving-end + 跨 lens"被串走"措辞；#22（约数口径）在 notebook；#23（几千份）在 `ks-n8`；#24（Sri Lanka 增强）在 kernel §6 + notebook。
- **直接引语 / 一手史料分层核验**（本 topic 最高风险类，全部 ✅）：
  - *Rock Edict XIII 数字*："约 10 万被杀 / 约 15 万被掳"——与原文 "100,000 killed / 150,000 deported / many more died" **精确对得上**。难得的是：内容**主动**把整段法敕标为"简化/转述、非逐字"（`ash-n5` 括号 + kernel §5 抬头 + notebook ⚠️），即便数字其实就是原文数字——**宁可低估自己可信度的超额保守**，杜绝学生在考试里编"引号原话"。
  - *Rock Edict XIII 边境警告*："王仍有力量，他们最好悔改免遭殃"——转述忠实于原文 "despite his remorse … has the power to punish them … should be ashamed … and not be killed"。
  - *Rock Edict V*：dhamma-mahamatta "即位第十三年首设、以前没有"——官职真实，职责对得上。
  - *Pillar Edict IV*：死刑犯三天缓期 + 未废死刑——对得上。
  - *演绎句*：达摩官 / Kalinga 幸存者的第一人称内心独白、对话场景为合理叙事重构，**无把演绎句排成史料档案样式的违规**；底层职责 / 数字 / 事件均有一手或学界支撑。
- **BCE 算术专项核验**（创始人特别点名）：前 321（立国）> 前 268（即位）> 前 261（羯陵伽）> 前 232（卒）> 约前 185（瓦解）——数字递减、年代递增，全程**无一处时代错置或大小写反**；notebook ashoka-reign 卡专门设了"BCE 数字越大年代越早 / 前 268 早于前 261"的防错提醒，与正文一致。
- **dhamma ≠ Buddhism 专项**（创始人点名）：学界共识（Romila Thapar、Nayanjot Lahiri）确证 dhamma 为 ecumenical / non-sectarian 的 civil ethos，受佛教启发但非等同——内容的"跨教派最大公约数"表述准确，且正确区分"阿育王私人信佛 + 对外传 vs dhamma 对内全帝国公共准则"。
- **"未变和平主义者"四要件专项**（创始人点名）：①保留军队（学界共识）②保留死刑（Pillar Edict IV 三天缓期 = 未废死）③警告边境仍有力量（Rock Edict XIII 原文）④未还 Kalinga / 未遣返（史料未载归还，合理负面推断）——四件**逐一成立**。
- **用到的外部核实来源**：Wikipedia（Ashoka / Kalinga War / Major Rock Edicts / Major Pillar Edicts / Edicts of Ashoka / Ashoka's policy of Dhamma / Mahamatra / Chandragupta Maurya / Maurya Empire / Brihadratha Maurya / State Emblem of India / Lion Capital of Ashoka / Battle of Changping / Mahinda / Buddhism in Sri Lanka / Pataliputra）、Britannica（Ashoka / Chanakya / Sri Lanka—Conversion to Buddhism）、World History Encyclopedia（Ashoka the Great / Edicts of Ashoka / Chandragupta Maurya）、Cambridge Core "Was Aśoka really a secularist avant-la-lettre?"、colostate.edu Ven. S. Dhammika《The Edicts of King Asoka》全译本、access-to-insight Dhammika 译本。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2（Fact Ledger）—— 所有高风险 claim 均有一手 / 学界来源支撑，**无 needs-source 缺口、0 事实硬伤（✋）**。4 条红旗全为 ⚠️ 可选措辞收紧（且 #22/#24 几近无需改）。建议处理 **#21（"奴工/填人口"去向 → 与法敕"deported"对齐或加推断标注）** 与 **#23（"几千份" → "几十处"）** 后即过 Gate 2；#22/#24 可与之同批顺手处理，亦可保留。**本 topic 为本批次事实质量标杆。**
