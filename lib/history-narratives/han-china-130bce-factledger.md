# 汉武盛世 c.130 BCE · Han China under Emperor Wu Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。
> **第 7 条文化禁用例外**：本 Topic 是中国史描述中国，皇帝 / 丞相 / 匈奴 / 儒术 / 盐铁 / 戍卒 / 西域 / 节杖 等是史实正确术语，**不计入** cultural-ban 违规。§8 同时代世界（罗马）一侧仍按罗马 / 拉丁真实术语核验。

```
topicId:    han-china-130bce
生成日期:    2026-05-25
来源文件:    lib/history-storyboards/han-china-130bce.js（3 lens：han-wudi / zhang-qian / conscript-peasant-receiving-end，各 11 节点）
            + lib/history-narratives/han-china-130bce.md（narrative kernel，12 节 + 4 附录）
            + lib/history-storyboards/notebooks/han-china-130bce.js（同伴笔记本，8 考点卡 + 3 DBQ）
claim 总数:  27
🚩 红旗数:   5（需创始人审）— 全部为 ⚠️downgrade-wording / 措辞收紧，无 needs-source、无 flagged 事实硬伤
HARD ERRORS（✋）: 0
```

**一句话总评**：史实地基**非常稳**——所有核心日期、人名、战役、政策时序均对得上权威来源（汉 206 BCE-220 CE；武帝 r.141-87 BCE；张骞首使 138 BCE 出发、约 125 BCE 返、二使 119 BCE；卫青霍去病漠北之战 / 封狼居胥 119 BCE；盐铁专卖 119 BCE；巫蛊之祸 91 BCE；轮台诏 89 BCE；罗马布匿战争终 146 BCE / Gracchi 133-121 BCE 全对）。戍卒 lens 是**虚构桥接人物**，已在 `cp-n8` 显式 anti-fab 透明化（「我是后人替千万真实存在却一字没留的人拼出的一个声音」），处理**完全合规**。**无 HARD ERROR**。红旗集中在三类措辞收紧：(1)「罢黜百家，独尊儒术」这一八字口号是**近代（蔡元培 1910 / 易白沙 1916）凝练**，非董仲舒原话也非《汉书》原文（《汉书》作「罢黜百家，表章六经」）——文中作为董仲舒的「主张」转述、并已加「慢慢落地非一日」括号，属可接受的教材级简化，但属最高风险项；(2)「户口减半」引文出处应作《汉书·昭帝纪》赞语「**海内**虚耗，户口减半」（文中作「**天下**虚耗」），且学界对是否真减半有争论；(3) 数处「凿空」「丝绸最远到罗马」等表述可轻度收紧。

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
| 1 | 「汉朝 = 公元前 206 年 - 公元 220 年」（kernel §2 L0 / 附录 A / notebook `han-dynasty-emperor-wu`）| date | encyclopedia | Britannica / 维基 Han dynasty：206 BCE 刘邦（高祖）建，220 CE 汉献帝禅位曹丕终（西汉 206 BCE-25 CE / 东汉 25-220 CE）| ✅verified |
| 2 | 「汉武帝刘彻，前 156 年生，16 岁登基，在位 54 年，前 141-前 87」（`hw` description / kernel §3 / 附录 C）| date+number | encyclopedia | 维基 Emperor Wu of Han：生 156 BCE、卒 87 BCE、r.141-87 BCE、在位 54 年（破纪录至康熙）。登基年龄：实岁 15 / 虚岁 16——文中「16 岁」用虚岁，史料通用 | ✅verified |
| 3 | 「『汉』成了一个民族的名字（汉人、汉语、汉字）」（`hw-n10` / kernel §6 长期）| causal | encyclopedia | Britannica：「Han」因这一朝成为「ethnically Chinese」之称——主流共识 | ✅verified |
| 4 | 「文景之治：国库的钱多到串钱的绳子都烂了，粮仓陈粮多到吃不完烂掉」（`hw-n1`/`hw-n2`，kernel §5A《史记·平准书》大意）| quote | primary | 《史记·平准书》：太仓之粟陈陈相因充溢露积于外腐败不可食 / 京师之钱累巨万贯朽而不可校——文中作 paraphrase（「大意」），未伪造逐字原文 | ✅verified |
| 5 | 「秦修长城、严刑峻法，二世而亡，汉刻骨取教训走与民休息」（`hw-n2`/`cp-n2`，kernel §3 L3）| causal | textbook | 主流史学共识：汉初承秦制但吸取秦速亡教训行黄老与民休息 | ✅verified |
| 6 | 「董仲舒上『罢黜百家，独尊儒术』；立太学、以儒经选官；影响中国两千年」（`hw-n3`/`hw-n6`，kernel §4/§5B，notebook `confucianism-state-ideology`）| quote+causal | textbook | 维基/Britannica Dong Zhongshu：约 136 BCE 儒学立为官学、五经为教育核心，124 BCE 立太学/察举。**但八字口号系近代凝练**（见红旗 #1），《汉书》原文作「罢黜百家，表章六经」 | ⚠️downgrade-wording（见红旗 #1）|
| 7 | 「天子受命于天 / 君臣父子各有本分（三纲）」（`hw-n3`/`hw-n6`，kernel §5C）| quote | primary | 董仲舒天人感应/君权天授学说大意；文中作「大意」paraphrase，未伪造原话 | ✅verified |
| 8 | 「（独尊儒术）是慢慢落地的，不是一道圣旨当天就换了天」（`hw-n3` anti-fab 括号，kernel §4 注/§10 误区 2）| inference | textbook | 学界共识：儒术国教化是数十年渐进过程——anti-fab 括号到位，避免时代错置 | ✅verified |
| 9 | 「匈奴年年南下，汉只能和亲（嫁公主、送丝绸粮食换暂安）」（`hw-n1`/`hw-n2`/`cp-n2`，kernel §2 L4）| textbook | encyclopedia | 维基 Heqin：汉初对匈奴行和亲（公主 + 岁奉缯絮食物）——主流史实 | ✅verified |
| 10 | 「提拔卫青、霍去病深入大漠；霍去病封狼居胥」（`hw-n4`，kernel §3/故事 4/附录 C，notebook `xiongnu-wars`）| date+number | encyclopedia | 维基 Battle of Mobei / Huo Qubing：119 BCE 漠北之战，卫青霍去病为两路统帅，霍去病登狼居胥山（今肯特山）祭天——封狼居胥确证 | ✅verified |
| 11 | 「公元前 138 年，张骞持节带一百多人出使，找大月氏夹击匈奴」（`hw-n5`/`zq-n1`/`zq-n2`/`zq-n3`，kernel §3/故事 5/附录 A，notebook `silk-road-zhang-qian`）| date+number | encyclopedia | 维基/Britannica Zhang Qian：138 BCE 出发，约 99-100 人，使大月氏求夹击匈奴 | ✅verified |
| 12 | 「张骞一出河西走廊被匈奴扣十余年，娶妻生子未弃节，活着回来百余人剩两个」（`hw-n5`/`zq-n3`/`zq-n4`/`zq-n5`/`zq-n8`，kernel §3，notebook `silk-road-zhang-qian`）| number | encyclopedia | 维基 Zhang Qian：被扣十余年（部分作 13 年）、匈奴妻与子、约 125 BCE 返、出使者中仅张骞与向导甘父二人生还 | ✅verified |
| 13 | 「大月氏曾被匈奴打败，国王头盖骨被做成酒器」（`hw-n5`/`zq-n2`，kernel §3）| number | primary | 《史记》卷 123：老上单于杀月氏王「以其头为饮器」（约 177-176 BCE）；《汉书》94B 载元帝时汉使曾以此器歃血。史实确证 | ✅verified |
| 14 | 「张骞『凿空』西域，第一次为汉看清西边世界」（`zq-n6`/`zq-n8`/`zq-n10`，kernel §3/故事 5，notebook `silk-road-zhang-qian`）| causal | textbook | 「凿空」语本《史记·大宛列传》「然张骞凿空」；学界主流评价。措辞偏定论但属传统史学定评 | ✅verified（见红旗 #4 仅措辞建议）|
| 15 | 「约前 119 年张骞二次出使乌孙，带三百余人、上万牛羊、大批金帛，派副使分赴诸国」（`zq-n7`，kernel §3/故事 7/附录 A）| date+number | encyclopedia | 维基 Zhang Qian：119 BCE 二使乌孙，约 300 人、每人二马、牛羊以万数、金帛巨万、遣副使分使诸国——量级与年份吻合 | ✅verified |
| 16 | 「前 114 年张骞病逝」（`zq-n8`/`zq-n9`，kernel §3/附录 A/C）| date | encyclopedia | 维基 Zhang Qian：卒约 114 BCE | ✅verified |
| 17 | 「盐铁收归国家专卖（盐人人吃、铁种田打仗离不开），禁私煮私铸，巨利入库」（`hw-n7`，kernel §4 故事 6/§5/§10 误区 7，notebook `salt-iron-monopoly`）| date+causal | textbook | 维基 Emperor Wu / Salt in Chinese history：119 BCE 盐、117 BCE 铁收归国营（桑弘羊主理），筹军费——政策、时序、机理皆确证 | ✅verified |
| 18 | 「卖官鬻爵、币制改革，把天下之财聚向军费」（`hw-n7`，kernel §4 故事 6，notebook `salt-iron-monopoly`）| textbook | encyclopedia | 维基 Emperor Wu：武帝行卖爵卖官、币制改革（如白金/皮币/五铢）筹财——主流史实 | ✅verified |
| 19 | 「巫蛊之祸：诬告巫术诅咒皇帝，株连日广，太子刘据起兵败死，数万人死，后查明太子冤」（`hw-n8`，kernel §3/故事 9/附录 C，前 91-前 90）| date+number | encyclopedia | 维基 Liu Ju：巫蛊之祸 91 BCE，江充构陷，太子刘据（128-91 BCE）起兵败、自缢；牵连死者「数万」至「逾十万」（不同记载）。文中「几万人」取保守下限 | ✅verified |
| 20 | 「前 89 年轮台诏：拒绝轮台屯田扩张奏议，罕见自省穷兵黩武横征暴敛之过，转向与民休息重农」（`hw-n9`，kernel §3/故事 10/§5D/附录 A，notebook `luntai-edict`）| date+quote | primary | 维基/Project MUSE/UW：89 BCE 轮台诏，桑弘羊等奏轮台屯田被拒，「中国史上第一份罪己诏（Rescript for Accepting Blame）」。文中作 paraphrase（「大意」），未伪造逐字原文 | ✅verified |
| 21 | 「轮台诏几乎是认罪书 / 对受命于天的天子等于当众否定大半生 / 但来得太晚代价已由百姓付掉」（`hw-n9`/`cp-n9`，kernel §9/§10 误区 6）| motive+causal | inference | 轮台诏作「罪己诏」是主流定评；唯学界对其性质有争论（真诚转向 vs 后世放大），kernel §9 已显式标注此争议——立场审慎 | ✅verified（见红旗 #5 仅措辞建议）|
| 22 | 「史书一句『天下虚耗，户口减半』；少的那一半是被征死塞外、一字未留的人」（`cp-n5`/`cp-n8`/`cp-n10`，kernel §2 L4/§6/§10 误区 1，notebook `cost-of-expansion` / `q1`）| quote+number | primary | 《汉书·昭帝纪》赞：「承孝武奢侈余敝，师旅之后，**海内**虚耗，**户口减半**……」（班固）。文中作「**天下**虚耗」（应为「海内」）；且学界对是否真减半有争论（含赋役逃户/天灾因素）| ⚠️downgrade-wording（见红旗 #2）|
| 23 | 「丝绸顺这条路最远运到罗马，贵族一掷千金；西方良马葡萄苜蓿乐器东传；佛教顺商路传入中国」（`zq-n9`，kernel §6 中长期/§7，notebook `silk-road-zhang-qian` / `han-rome-parallel`）| causal | textbook | 主流史学共识：丝路东西物种/技术/宗教交流，丝绸西达罗马，佛教沿商路东传。「最远到罗马」「贵族一掷千金」属概括化表述，方向正确 | ✅verified（见红旗 #4 仅措辞建议）|
| 24 | 「§8 罗马共和国：三次布匿战争（至前 146 年）败迦太基、灭科林斯，征服地变行省」（kernel §8，notebook `han-rome-parallel`）| date | encyclopedia | 维基/Britannica：第三次布匿战争 146 BCE 灭迦太基，同年罗马毁科林斯，行省化推进——全对 | ✅verified |
| 25 | 「§8 格拉古兄弟（提比略与盖约，约前 133-前 121 年）推土地改革回应自耕农失地，改革在暴力中失败」（kernel §8/§7，notebook `han-rome-parallel`）| date+causal | encyclopedia | 维基/Britannica Gracchi：提比略 133 BCE 任保民官推土改后被杀，盖约 122-121 BCE 续推后亡；改革死于暴力——年份与因果全对 | ✅verified |
| 26 | 「§8 汉=中央集权君主帝国（权归一帝）vs 罗马此时=共和国（元老院 Senate + 执政官 consuls 共治，权散于贵族）」（kernel §8，notebook `han-rome-parallel`）| textbook | encyclopedia | 主流共识；罗马一侧用 Senate/consuls/Republic/provinces 真实术语，未以中国概念词类比翻译——合规 | ✅verified |
| 27 | 「戍卒：虚构桥接人物，代表无名苍生；『我』是后人替千万真实存在却一字没留的人拼出的声音」（`cp` description / `cp-n1` / `cp-n8`，kernel §3 戍卒条/§3 主角说明）| dramatization | dramatization | **虚构人物**，但 `cp-n8` 显式 anti-fab 透明化为「拼出来的一个声音」，meta.notes 亦标注「虚构桥接人物」+「史书四字『户口减半』对位」。**透明标注完全到位** | ✅verified（已透明标注；非红旗）|

---

## 🚩 红旗句（创始人必审）

> 全部为 ⚠️downgrade-wording（措辞收紧），**无事实硬伤、无缺来源、无演绎未标注、无 HARD ERROR**。按影响排序。

1. **[#6]** `「董仲舒……『罢黜百家，独尊儒术』」`（`hw-n3`/`hw-n6`，kernel §4/§5B/附录 B/D，notebook `confucianism-state-ideology` 反复出现）
   - **问题**：这八字口号是**近代凝练**——蔡元培《中国伦理学史》(1910) 首倡、易白沙〈孔子平议〉(1916) 定型；董仲舒本人著述与《汉书》原文**均无此八字**，《汉书》载班固语作「**罢黜百家，表章六经**」。文中把这八字作为董仲舒当面「上的一套主张」转述，严格说是把后世口号回置到当事人口中。
   - **缓解**：文中**未把它排成史料档案/逐字引文样式**（用的是「他说……」转述 + `hw-n3` 已加 anti-fab 括号「慢慢落地非一日」），且这是中国七年级教材（七上秦汉单元）的**标准表述**，6-8 年级层面属可接受简化。这是本 topic 频率最高、跨三处文件复用的概念句，故列为最高优先级红旗，但**不是硬伤**。
   - **建议**（任一即可）：(a) 保留现状（教材级既成表述，已有 anti-fab 括号兜底）；(b) 若想更严，可在 kernel 附录 B 加一句「（『独尊儒术』这一概括语为后世所提；《汉书》原文作『罢黜百家，表章六经』）」，与 `hw-n3` 现有括号风格一致；storyboard 正文可不动以保口语流畅。注意：收紧此条**不削弱**「一道命令两张脸」的核心张力。

2. **[#22]** `「天下虚耗，户口减半」`（`cp-n5`/`cp-n8`/`cp-n10`，kernel §2 L4/§6/附录 B/D，notebook `cost-of-expansion` 与 DBQ `q1` 反复出现）
   - **问题**：两处。(a) **引文出处用字**：原文系《汉书·昭帝纪》赞语「承孝武奢侈余敝，师旅之后，**海内**虚耗，户口减半」，文中作「**天下**虚耗」（义近而非原字）。(b) **代表性**：现代学界对「户口减半」是否真为人口减半有争论——可能掺杂赋役逃户、天灾（武帝朝多次大旱蝗灾）、户籍瞒报等因素，未必是纯战争致死的 50% 人口损失。
   - **缓解**：这是 receiving-end DEFAULT lens 的情感支点，文中已用「史书最多给几个字」「少的那一半是谁？没有名」的口吻**把它当『史书概括语』而非硬人口数据**处理；kernel §9 historiography 已显式写明「谁在写、为什么写」的方法论自觉。处理基本审慎。
   - **建议**：(a) 把「天下虚耗」改为「海内虚耗」以对齐《汉书》原字（最小改动，建议采纳——这是唯一一处引文用字偏差）；(b) 代表性一面可保留现状，或在 kernel §10 误区 1 末补半句「（『户口减半』是史书概括，学界对其确切幅度仍有争论）」。低-中优先级。

3. **[#19]** `「数万人因这桩案子死掉」/「太子起兵、兵败、自杀」`（`hw-n8`，kernel 故事 9）
   - **问题**：**非事实硬伤**——巫蛊之祸死者「数万」是保守取值（不同记载有「数万」至「逾十万」），太子刘据确于 91 BCE 起兵败、自缢，皆与史料相符。唯一可议处：巫蛊之祸是一系列株连（前 91 主案 + 余波至前 90），文中 `hw-n8` 口语化叙述未点年份（kernel 附录 A 已标「前 91-前 90」），且把太子之死与全案「数万死」并叙，时序略压缩。
   - **建议**：可保持现状（史实正确、数字保守）；若要更严，storyboard 可不动，仅确保 kernel 附录 A「前 91-前 90」年份不被下游误读为单年。**列此条仅为透明，非必改**。

4. **[#14/#23]** `「凿空」`定论措辞 + `「丝绸最远运到罗马，贵族一掷千金」`（`zq-n6`/`zq-n8`/`zq-n9`，kernel §3/§6）
   - **问题**：**非事实硬伤**。「凿空」语本《史记·大宛列传》，是传统史学定评，用之无误；「丝绸西达罗马 + 佛教东传」方向正确，但「最远到**罗马**」「贵族**一掷千金**」是概括/文学化表述——丝路贸易多经中间商转手，丝绸到罗马（赛里斯丝）属实但「张骞这条路直达罗马」易被读成一线贯通的过度因果。
   - **建议**：可保留（7 年级层面影响小，且 `zq-n9` 已用「一站一站」「往后的几百年」做了时间与中转的缓冲）；若要更严，把「最远到了罗马那样遥远的帝国」轻改为「一路向西，最终远及罗马那样的帝国」。最低优先级。

5. **[#21]** `「轮台诏……几乎是一份皇帝的认罪书」`（`hw-n9`/`cp-n9`，kernel §9）
   - **问题**：**非事实硬伤**——「中国史上第一份罪己诏」是权威定评（Project MUSE / UW 教材均如此称）。唯学界对轮台诏「是否真诚政策转向 vs 后世放大其意义」有争论（如田余庆 vs 辛德勇之辨）。
   - **缓解**：kernel §9 已**显式写明**这一争议（「有学者视……为真诚转向；也有研究讨论其文本性质与影响被后世放大的可能」），storyboard `hw-n9`/`cp-n9` 也用「几乎是」「别把这道诏书想得太纯」做了措辞缓冲。处理**已经审慎**。
   - **建议**：保持现状。**列此条仅为透明，非必改**。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| **一个戍卒**（无名农民）| conscript-peasant-receiving-end（DEFAULT）| **完全虚构的桥接人物**：无姓名、无具体生卒，代表汉武盛世底下无名苍生（妻、子、一块地等场景为合成）| ✅**已透明标注**（`cp` description「一个虚构的普通农民」+ `cp-n1`「我没有名字留下来……官府账册上的一个数字」+ `cp-n8` 显式 anti-fab「这个『我』是后人替千千万万真实存在过、却一字未留的人，拼出来的一个声音」+ meta.notes「虚构桥接人物代表无名苍生」三-四处标注）|
| 戍卒的妻、子、同村被征者、刑徒/移民/破产户（`cp-n2`~`cp-n7`）| conscript-peasant | 泛指性合成场景（缝鞋烙粮、儿子趴门槛、边塞冻死病死、刑徒剃头戴刑具等），无具名虚构历史人物 | ✅可接受（无具名捏造；属代表性叙事，且 `cp-n8` 总括透明化已覆盖）|
| 匈奴单于「扎心的反问」（`zq-n3`：大月氏在我北边你们凭什么越我地盘）| zhang-qian | 单于反问为**史料大意的对话重构**（《史记》载月氏在匈奴北、汉使须经匈奴境的史实背景）| ✅已标注（`zq-n3` deliverGoal 标「paraphrase 非伪造引文」；正文用「大意是」引出，未排成逐字引文）|
| 「你就是 TA」第二人称代入（`*-n4` peak）| 全 3 lens | 把读者置入主角内心做选择，属**教学代入手法**，非伪造史实人物 | N/A — 教学手法，非合成角色 |
| 汉武帝 / 张骞 / 董仲舒 / 卫青 / 霍去病 / 刘据 / 司马迁 | han-wudi / zhang-qian | **均为真实历史人物**，姓名、生卒、事迹皆有据（见 claim 表 #2/#10/#11/#16/#19）| N/A — 非合成 |

**结论**：本 topic 唯一的完全虚构角色（戍卒）**已在 storyboard 节点（`cp-n1`/`cp-n8`）+ narrative kernel §3 + meta.notes 多处透明标注**为合成桥接、代表无名苍生，符合 `HISTORY_EVIDENCE_LAYER.md` §1.3 / §2.1 composite 透明红线。第一人称内心独白（汉武帝/张骞/戍卒）属叙事重构，**无把演绎句排成史料档案样式的违规**。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— han-wudi（perpetrator-power，11 节点）/ zhang-qian（lonely-mediator，11 节点）/ conscript-peasant-receiving-end（receiving-end，**DEFAULT**，11 节点）。红旗分布：#6（独尊儒术口号）跨 han-wudi + kernel + notebook 三文件；#22（户口减半）跨 conscript lens + kernel + notebook DBQ；#19 在 han-wudi lens；#14/#23 在 zhang-qian lens；#21 跨 han-wudi + conscript。
- **直接引语分层核验**（本 topic 最高风险类）：
  - *真实史料（已 paraphrase，未伪造逐字）*：《史记·平准书》文景家底（钱串绳朽 / 陈粮腐积，#4）/ 董仲舒天人感应「天子受命于天」（#7）/ 轮台诏自省（#20）/《汉书·昭帝纪》「海内虚耗，户口减半」（#22）—— 文中**全部用「大意」「史书最多给几个字」引出**，无逐字档案样式伪造，符合 §5 / meta.notes「不伪造引文」铁律。
  - *后世口号回置*：「罢黜百家，独尊儒术」（#6）—— 严格说是近代凝练语回置到董仲舒口中，但未排成档案引文、且为教材标准表述，列⚠️不列✋。
  - *对话重构*：匈奴单于反问（`zq-n3`）—— 用「大意是」引出，合规。
- **BCE 算术抽查**（全部通过）：武帝在位 141-87 BCE = 54 年 ✓；张骞 138 BCE 出发、扣十余年、约 125 BCE 返 ✓（138-125 ≈ 13 年，与「十三年」「十余年」一致）；轮台诏 89 BCE / 武帝卒 87 BCE（认错距离去世 2 年，与「临终」「晚年」表述一致）✓；汉 206 BCE-220 CE = 跨 426 年，与「四百多年」一致 ✓；布匿战争终 146 BCE、Gracchi 133-121 BCE 与汉武盛世（c.130 BCE）「同代」成立 ✓。
- **§8 罗马一侧 Rule 0 / cultural-ban 核验**：罗马用 Roman Republic / Senate / consuls / provinces / Punic Wars / Carthage / Gracchi 等**罗马-拉丁真实术语**，未以「皇帝/丞相/郡县」等中国概念词类比翻译罗马制度（kernel §8 开篇已自我设限），合规。布匿战争(146)/迦太基/科林斯/Gracchi(133-121) 史实全对（#24/#25/#26）。
- **与 qin Topic 不重叠核验**：本 topic = 巩固 / 儒术 / 丝绸之路 / 穷兵黩武；qin = 统一 / 法家 / 焚书 / 长城。戍卒 N9 反讽（轮台诏迟来悔过）与 qin（严法逼反）不同。承接不重复，符合 kernel §0 分工。
- **用到的外部核实来源**：Wikipedia（Han dynasty / Emperor Wu of Han / Zhang Qian / Battle of Mobei / Huo Qubing / Liu Ju / Dong Zhongshu / Yuezhi / Laoshang / Salt in Chinese history / Gracchi brothers）、Britannica（Han dynasty / Zhang Qian / Dong Zhongshu / ancient Rome–Gracchi）、Project MUSE & University of Washington Press（*Chinese Autobiographical Writing*：轮台诏「first Rescript for Accepting Blame」）、《史记》（平准书 / 大宛列传 / 卷 123 匈奴）、《汉书》（昭帝纪赞「海内虚耗，户口减半」/ 董仲舒传「罢黜百家，表章六经」/ 94B 月氏王头器）、葛剑雄〈汉武帝时「户口减半」考实〉、蔡元培 1910 / 易白沙 1916（「独尊儒术」口号源流）、World History Encyclopedia（Gracchi）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2（Fact Ledger）—— 所有高风险 claim 均有来源或可降级为谨慎措辞，**无 needs-source 缺口，无 HARD ERROR（✋=0）**。5 条红旗全为 ⚠️downgrade-wording；建议至少处理 **#22 的「天下虚耗」→「海内虚耗」**（唯一引文用字偏差，最小改动）后过 Gate 2；#6（独尊儒术口号源流）建议在 kernel 附录加一句注脚即可，storyboard 正文可不动；#19/#14/#23/#21 为低优先级或仅透明记录，可与上批同改或保留。
