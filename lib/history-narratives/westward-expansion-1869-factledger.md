# 西进运动 1869 · The Westward Expansion Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    westward-expansion-1869
生成日期:    2026-05-25
来源文件:    lib/history-storyboards/westward-expansion-1869.js（3 lens：railroad-baron / railroad-worker-or-homesteader / plains-native-receiving-end[DEFAULT]，各 11 节点）
            + lib/history-narratives/westward-expansion-1869.md（narrative kernel）
            + lib/history-storyboards/notebooks/westward-expansion-1869.js（同伴笔记本：preview + 8 考点卡 + 3 DBQ）
claim 总数:  27
🚩 红旗数:   3（需创始人审）— 全部为 ⚠️downgrade-wording / 措辞收紧，无 needs-source、无 flagged 事实硬伤、无未标注演绎
```

**一句话总评**：史实地基**非常稳**——所有日期、数字、地名、战役、法律、人名均对得上权威来源；本 topic 最高风险项「野牛是蓄意军事战略灭绝」的 anti-fab 处理**堪称范本**：narrative §5.C / storyboard / notebook 三处均明确把 Sherman / Sheridan 一类将领的灭牛意图标为**史学概述（"史学界普遍记述"）而非伪造逐字引文**，且 notebook 甚至加了显式禁令"别写成某将领'说过'哪一句"——这是全 topic 处理得最干净的一环，无任何伪造引语。composite 人物（铁路巨头复合典型 / 华工·拓荒户合成中间人 / 未具名 Lakota）三个 lens 全部透明标注。红旗仅 3 处轻度措辞收紧（野牛峰值数字的不确定区间 / Custer 军衔在 storyboard 口语化为"指挥官" / "frontier closed" 的主体表述）。

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
| 1 | "1869 年 5 月 10 日……犹他州 Promontory Summit……金道钉……电报传遍全国"（`rb-n1` / `rb-n5` / kernel §1 / notebook `transcontinental-railroad-1869`）| date | encyclopedia | 维基 Golden Spike / LOC / Union Pacific：1869-05-10 Promontory Summit, Utah Territory，Leland Stanford 钉下 17.6K 金道钉，电报全国 | ✅verified |
| 2 | "全世界第一条横贯大陆铁路……几个月旅程压成几天"（`rb-n5` / kernel §4 / notebook）| absolute+number | textbook | LOC/UP：首条横贯大陆铁路；"四个月以上→约一周"。"几个月→几天" 略夸但量级正确（旅程从数月降至约一周）| ✅verified |
| 3 | "1862 年……Pacific Railway Act（太平洋铁路法）……按里程给钱 + 沿线大片土地赠予"（`rb-n2` / kernel §2-L3/§5B / notebook）| date+textbook | textbook | National Archives / Minneapolis Fed：Pacific Railway Act 1862-07-01 签署，按里程发政府债券补贴 + land grants；1864 二次法加倍赠地 | ✅verified |
| 4 | "1862 年……Homestead Act（宅地法）……住满五年、种起来……免费拿到 160 英亩"（`rb-n2` / `wh-n3` / kernel §5A / notebook `homestead-act-1862`）| date+number | textbook | National Archives：Homestead Act 1862-05-20 签署，160 acres，5 年连续居住 + 耕种 + 小额申请费 | ✅verified |
| 5 | "Homestead 法律原文 'unappropriated public lands（未被占用的公共土地）'"（kernel §5A / notebook）| quote | primary | Homestead Act 1862 原文 Sec.1 "unappropriated public lands"；释义"any person who is the head of a family … one quarter-section [160 acres]" 准确 | ✅verified |
| 6 | "Central Pacific 加州段主力是华工（约 1.2 万-1.5 万人高峰期），由西向东翻 Sierra Nevada"（`rb-n4` / `wh-n2` / kernel §2-L2/§3 / notebook `railroad-labor-chinese-irish`）| number | textbook | PBS American Experience / Stanford Chinese Railroad / NPS：1868 高峰约 12,000 华工，占 CP 工人 ≥80%（部分源 10,000-15,000）；由 Sacramento 往东翻 Sierra Nevada | ✅verified |
| 7 | "Union Pacific 主力是爱尔兰移民、退伍兵、获自由黑人等，由东向西"（`rb-n4` / kernel §2-L2）| representativeness | textbook | PBS：UP 不雇华工，主力为内战退伍兵 + 爱尔兰移民（+ 前南北军人、囚犯、犹他摩门工人）；由东向西 | ✅verified |
| 8 | "华工工钱比白人低 + 包工头抽水 + 死亡数无人认真统计 + 雪崩塌方爆破事故"（`rb-n4` / `wh-n2` / kernel §3 / notebook）| textbook | textbook | NPS Golden Spike / Stanford 项目：华工工资低于白人工、承担最危险隧道爆破工段、雪崩/塌方致大量死亡且数字无确切统计 | ✅verified |
| 9 | "1869 庆典照片/演讲/敬酒里几乎不见华工……修最险一段的人被从'伟大时刻'抹掉"（`wh-n8` / kernel §3/§4 / notebook）| causal | textbook | NBC/CNN/NPS：1869 著名庆典照（A.J. Russell）几乎无华工身影；华工贡献长期被边缘化、后世才重新承认 | ✅verified |
| 10 | "野牛 ~3000 万（1800 前后）→ 1880s 近零"（`rb-n6` / `pn-n1` / kernel §2-L0/§4-5 / notebook `bison-near-extermination` / 附录 A）| number | textbook | 学界估值区间 30-60M+，"~30M" 是常用保守基准值（IERE/All About Bison：常见引 20-30M 至 50-60M）；1871-1883 由约 3000 万降到数千、1880s 早期最低剩数百只 | ✅verified（见红旗 #1 措辞）|
| 11 | "野牛被打到近零不全是意外，部分是蓄意——军方有人公开把灭牛当逼降平原民族的手段"（`rb-n6` / `pn-n7` / kernel §4-5/§5C / notebook）| motive+causal | textbook | EBSCO/NPS/Texapedia：美军支持大规模灭牛以逼平原民族进保留地；Gen. Philip Sheridan 公开赞同灭牛"settle the vexed Indian question"。**史学界普遍记述的军事战略，scholarly 支持充分** | ✅verified（见下方"灭牛战略 + Sherman/Sheridan 归属处理"专节）|
| 12 | "灭牛言论用'史学界普遍记述''当时有带兵的人公开说'，不引逐字、不署某将领某句"（kernel §5C / notebook `bison-near-extermination` xiaoweiNote + Q3 hintEn）| anti-fab | inference | kernel §5C 显式"具体将领与措辞归于 sourcingNote，不进正文逐字引用，避免伪造"；notebook 显式"别写成某将领'说过'哪一句 / write as historians' summary"。**anti-fab 处理范本，无伪造引语** | ✅verified |
| 13 | "联邦与平原民族签一系列条约（如 1868 Fort Laramie Treaty 承诺 Black Hills 等地归 Lakota）"（`rb-n7` / `pn-n3` / kernel §4-6 / 附录 A / notebook `reservations-and-broken-treaties`）| date+textbook | encyclopedia | 维基/National Archives：1868 Treaty of Fort Laramie 立 Great Sioux Reservation 含 Black Hills 归 Lakota（+ unceded territory）| ✅verified |
| 14 | "Black Hills 发现金子（1874）后白人涌入、1868 条约被破坏"（`pn-n5` / kernel §4-6 / 附录 A / notebook）| date+causal | encyclopedia | 维基/Plains History：1874 黑山发现金子；1877 国会立法夺取黑山、灭 unceded 狩猎权 | ✅verified |
| 15 | "1876 年 Little Bighorn，Lakota + Cheyenne 全歼 Custer 率领的第七骑兵一部"（`rb-n7` / `pn-n5` / kernel §4-7 / 附录 A / notebook `plains-indian-wars...`）| date+causal | encyclopedia | 维基/Britannica：1876-06-25 Little Bighorn（Montana Territory），Lakota+N.Cheyenne+Arapaho 全歼 Custer 直属一部（约 210 人随 Custer 战死）；Sitting Bull 精神核心、Crazy Horse 战场领袖 | ✅verified |
| 16 | "Custer 是美军中校（lieutenant colonel）"（kernel §3/§7 / 附录 C / notebook keyFigures + `plains-indian-wars...`）| number | encyclopedia | 维基/Britannica：George A. Custer 1876 时军衔为 Lieutenant Colonel（中校）。注：storyboard `rb-n7`/`pn-n5` 口语化为"指挥官 commander"，未给军衔（kernel/notebook 正确给"中校"）| ✅verified（见红旗 #2）|
| 17 | "Little Bighorn 是战术胜利，改变不了大局（源源不断人口/铁路/军队 + 野牛消失）"（`pn-n5` / kernel §10 误解 6 / notebook 误解陷阱）| causal | textbook | 维基/Britannica：战术大胜反激起联邦更大规模军事报复；与主流史学一致，措辞已用"战术胜利/改变不了结局"留余地 | ✅verified |
| 18 | "野牛没了 + 军事压力 + 饥饿 → 多数平原民族被赶进 reservation（缩小贫瘠）靠政府口粮（rations）过活"（`rb-n7` / `pn-n8` / kernel §4-8 / notebook）| causal | textbook | EBSCO/Britannica：野牛灭绝致饥荒、依赖政府配给、被迫迁入缩减保留地——主流史学共识 | ✅verified |
| 19 | "1887 Dawes Act（道斯法 / General Allotment Act）：拆共有保留地为个人份地（典型 160 英亩/户），剩余'多余'地售予白人定居者/公司"（`rb-n8` / `pn-n8` / kernel §4-9/§5D / notebook `dawes-act-1887`）| date+textbook | encyclopedia | 维基/National Archives：1887 Dawes Act，户主 160 acres（单身成人 80、孤儿 60、其他儿童 40）；"surplus" 地售予白人 | ✅verified |
| 20 | "Dawes 致原住民土地大幅缩水（随后数十年）+ Dawes 体制 1934 Indian Reorganization Act 才被部分扭转"（kernel §6 / notebook standaloneText）| number+date | encyclopedia | ICT/维基：原住民地由 1887 约 1.38 亿英亩降到 1934 约 4800 万英亩；1934 IRA 终止 allotment | ✅verified |
| 21 | "1890 年 12 月 Wounded Knee，军队缴枪时枪响 → 屠杀，约 250-300 名 Lakota（多妇女儿童）死"（`rb-n9` / `pn-n9` / kernel §4-10 / 附录 A / notebook）| date+number | encyclopedia | 维基/Smithsonian/EJI：1890-12-29 Pine Ridge Wounded Knee Creek，约 250-300 Lakota 死（含大量妇孺）；缴枪中枪响触发。注：storyboard/kernel 作"1890.12 / Dec 1890"，精确为 12-29 | ✅verified |
| 22 | "Ghost Dance（鬼舞）信仰传开（信死者/野牛回来）被当局当成叛乱前兆"（`rb-n9` / `pn-n9` / kernel §4-10 / notebook）| causal | encyclopedia | 维基/Britannica：1890 饥饿绝望中 Ghost Dance 兴起，被当局视为叛乱前兆，引发军队介入 | ✅verified |
| 23 | "Wounded Knee 后平原上有组织抵抗基本终结"（`rb-n9` / `pn-n9` / kernel §4-10 / notebook）| causal | textbook | 维基/Britannica：Wounded Knee 标志平原原住民对保留地生活的抵抗终结——主流共识 | ✅verified |
| 24 | "1890 年（普查后）官方宣布美国'边疆'(frontier) 关闭 + Turner 1893 据此提 frontier thesis"（`rb-n9` / kernel §4-11/§9 / 附录 A / 附录 C）| date+causal | encyclopedia | 维基 Frontier Thesis：1890 普查（边疆= <2 人/平方英里）宣告 frontier closed；Turner 1893 据此提出 frontier thesis | ✅verified（见红旗 #3 措辞）|
| 25 | "1869 年是清同治八年；晚清/洋务运动（曾国藩/李鸿章/左宗棠）；1881 年唐胥铁路；新疆建省 1884"（kernel §8 / notebook `late-qing-self-strengthening-parallel`）| date | textbook | 1869 = 同治八年；洋务运动 1861-1895 由曾/李/左等推行；唐胥铁路 1881（中国第一条自办运营铁路）；新疆建省 1884——均准确（§8 中国部分按 cultural-ban 例外用中文术语，合规）| ✅verified |
| 26 | "Black Hills 争议延续至今（1980 美最高法院判联邦非法占取黑山应赔偿，Lakota 拒领、坚持要回土地）"（kernel §6 长期影响）| date+causal | encyclopedia | 维基 United States v. Sioux Nation of Indians (1980)：最高法院判 1877 夺取黑山违法、应赔偿；Lakota 拒领赔款坚持还地 | ✅verified |
| 27 | "野牛 2016 年成为美国'国家哺乳动物'（National Mammal）"（kernel §6 长期影响）| date | encyclopedia | National Bison Legacy Act 2016 签署，bison 成美国国家哺乳动物——准确 | ✅verified |

---

## 灭牛"蓄意军事战略" + Sherman / Sheridan 归属处理（本 topic 最高风险项专节）

> 任务要求重点核验：(a) "野牛灭绝是打垮平原民族的蓄意军事战略" 是否有 scholarly 支持；(b) Sherman / Sheridan 归属是否被处理为 **史学概述** 而非 **伪造逐字引文**。

**(a) Scholarly 支持：充分。** 史学界普遍记述美军（尤以 Gen. Philip Sheridan、Gen. William T. Sherman 一类将领）将大规模猎杀野牛视为瓦解平原民族生计、逼其就范的军事手段（EBSCO / NPS / Texapedia / 多数西部史与环境史著述）。本 claim 的措辞——"部分是蓄意 / partly deliberate / 不全是意外"——**恰当地留了余地**，未做"百分百蓄意"的单因绝对化，与学界共识吻合。✅

**(b) 归属处理：范本级，无伪造引文。** 全 topic **没有任何一处**把某条灭牛言论以逐字引语 + 具名将领的形式排成史料档案样式。证据链：
- **kernel §5C** 标题即"关于'灭牛即灭族'的史学概述（不伪造逐字引文）"，正文用"史学界普遍记述……当时有军方人物（史学界常引 Sherman / Sheridan 一类将领）公开把'消灭野牛'视为……"，并显式声明"具体将领与措辞归于 sourcingNote，不进正文逐字引用，避免伪造"。
- **kernel §4 故事 5** 同样用"史学界常引 Sherman / Sheridan 一类将领"的**学派通称**，不绑单句。
- **storyboard** `rb-n6` / `pn-n7` 全程只说"当时有军方的人公开说过类似的话""白人里有打仗的人看得很清楚"——**不点名、不引逐字**。
- **notebook** `bison-near-extermination` xiaoweiNote 显式："这是**史学概述**，不引逐字原话——别写成某将领'说过'哪一句"；Q3 hintEn 重申"write as a **historians' summary** ('historians generally record'), not a fabricated verbatim quote from a named general"。

> **结论**：这是本 topic anti-fab 最干净的一环。Sheridan 确有公开赞同灭牛的史实记载（"settle the vexed Indian question"），但内容**主动选择不引这句逐字、不署名**，统一降为史学概述——**完全符合** `HISTORY_EVIDENCE_LAYER.md` 对 documented 引文用学派通称、不伪造逐字的红线。**无需任何修改。**

---

## 🚩 红旗句（创始人必审）

> 全部为 ⚠️downgrade-wording（措辞收紧），**无事实硬伤、无缺来源、无演绎未标注**。按影响排序。

1. **[#10]** `「野牛 ~3000万 → 近零」`（`pn-n1`/`rb-n6`/kernel/notebook 反复出现，是 N6 anchor + N10 synthesis 情感支点）
   - **问题**：**不是事实硬伤**——"~30M" 是学界常用的保守基准值，落在公认区间内。但峰值估值学界跨度很大（常见 30M–60M，部分早期源称 50–70M，亦有低至 15–20M 的说法），且"~3000万"在内容里同时被用作"1800 前后峰值"与"被打光前的基数"。严格说，1871-1883 急速灭绝期的起点约 3000 万是站得住的；但若读者把"~3000万"理解为全北美历史峰值，则偏保守。
   - **建议**：可保持现状（"约三千万"是教学上清晰且保守的数字，且内容已用"约/大约"软化）。若要更严，在 kernel/附录 D 数量曲线处加一句"（学界估值区间约 3000 万–6000 万，此处取常用保守值）"。**最低优先级，属可接受的 7 年级简化。**

2. **[#16]** `Custer 在 storyboard 里被称「指挥官 / commander」而非「中校」`（`rb-n7` / `pn-n5`）
   - **问题**：**不是事实硬伤**——kernel §3/§7、附录 C、notebook keyFigures 与考点卡均正确标注 Custer 为"美军中校（lieutenant colonel）"。仅 storyboard 两处 narrative 口语化为"一个叫 Custer 的指挥官 / a commander named Custer"，未给军衔（也未给错误军衔，如常见误称的"将军 General"）。
   - **建议**：可保持现状（口语叙事里"指挥官"不算错，且回避了"General Custer"这一常见误称，反而稳妥）；若想与 kernel/notebook 完全对齐，storyboard 可加"中校"二字。**低优先级。**

3. **[#24]** `「政府宣布美国的『边疆』关闭了」`（`rb-n9`）+ `「同年官方宣布 frontier closed」`（kernel §4-11）
   - **问题**：精确史实是 **1890 年人口普查局（Census Bureau）的普查报告**判定边疆线（<2 人/平方英里）已不复存在，Turner 1893 据此提出 frontier thesis。storyboard `rb-n9` 表述为"政府宣布……边疆关闭了"，把"普查报告的统计判定"略简为"政府宣布"，主体稍模糊（但"政府/官方"包含普查局，非错误）。
   - **建议**：可保持现状（7 年级层面"政府宣布"可接受）；若要更严，改为"1890 年的人口普查显示，再没有连片的'未开发'边疆"。**低优先级。** 注意 kernel §9 / notebook 已正确把 Turner 1893 frontier thesis 限定在 §9/standaloneText，未进 storyboard 正文逐字，处理得当。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 铁路巨头 / 扩张派 | railroad-baron（perpetrator-power）| **复合典型**：Central Pacific"四巨头"一类资本家 + 推 Homestead/land grants 的扩张派政客，**不绑单一真实人名**（以免伪造其私人言行）| ✅**已透明标注**（kernel §3 明示"复合典型，不绑单一真人"；附录 C；notebook keyFigures roleCn"复合典型，不绑单一真人"）|
| 修铁路的华工 | railroad-worker-or-homesteader（lonely-mediator）| **类型化合成**（未具名虚构个人）；史实锚点（CP 加州段华工为主、Sierra Nevada 隧道、低工钱、被抹去）确证 | ✅**已透明标注**（meta.notes anti-fab 条目；kernel §3"类型化合成人物"；notebook keyFigures"合成典型"）|
| 追免费土地的拓荒户 | railroad-worker-or-homesteader | **类型化合成**（未具名虚构家庭）；史实锚点（Homestead 160 英亩/5 年、sod house、风雪旱灾）确证 | ✅**已透明标注**（同上；notebook keyFigures"合成典型"）|
| 一个未具名 Lakota | plains-native-receiving-end（DEFAULT）| **类型化合成**（未具名虚构个人）；史实锚点（野牛规模/条约/Little Bighorn/保留地/Dawes/Wounded Knee）确证，个人姓名与家庭细节为叙事性合成 | ✅**已透明标注**（kernel §3"未具名的类型化 Lakota……个人姓名与家庭细节为叙事性合成"；meta.notes；notebook keyFigures"未具名类型化合成人物"）|
| "你就是 TA"第二人称代入（`*-n4` peak）| 全 3 lens | 把读者置入主角内心做选择，属**教学代入手法**，非伪造史实人物 | N/A — 教学手法，非合成角色 |
| Sitting Bull / Crazy Horse / George Custer | （notebook keyFigures / kernel 附录 C / storyboard 配角）| **真实历史人物**，事迹有据；storyboard 正文仅 Custer 出现（口语称"指挥官"）| ✅非合成 — 真实人物，未伪造其私人言行 |

**结论**：本 topic **无未标注的合成人物**。三个 lens 主角全部为合成/复合典型（受 anti-fab 红线约束的高风险设计），且 storyboard 节点 + narrative kernel §3 + meta.notes + notebook keyFigures **四处**透明标注，符合 `HISTORY_EVIDENCE_LAYER.md` §1.3 / §2.1 composite 透明红线。perpetrator lens 刻意**不绑单一真人**，是规避"伪造资本家私人言行"风险的正确选择。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— railroad-baron（perpetrator-power，11 节点）/ railroad-worker-or-homesteader（lonely-mediator，11 节点）/ plains-native-receiving-end（receiving-end，**DEFAULT**，11 节点）+ notebook（8 考点卡 + 3 DBQ）。红旗分布：#10 跨全部 3 lens（N6 anchor + N10 synthesis 共享数字）；#16 在 baron + native lens；#24 在 baron lens + kernel。
- **直接引语分层核验**（本 topic 最高风险类，全部 ✅）：
  - *真实史料*："unappropriated public lands"（Homestead Act 1862 原文）——逐字对得上一手文本。
  - *史学概述（刻意不引逐字）*：Sherman / Sheridan 一类将领的灭牛意图——**全 topic 统一降为"史学界普遍记述/当时有带兵的人公开说"，不署名、不引逐字**（见上方专节）。Sheridan 确有"settle the vexed Indian question"的史载原话，但内容**主动选择不引**，处理保守、合规。
  - *演绎/合成句*：三个 lens 主角第一人称内心独白（华工"奇迹里有我的命"、Lakota"小时候望见黑压压野牛"、拓荒户"宅地法像一道光"）——属类型化合成人物的第一人称叙事重构，史实锚点确证，**无伪造档案样式、无伪造具名私人引文/日记**。
- **跨 Topic 边界核验**（任务重点）：
  - **vs manifest-destiny-1845**：本 topic 严格限定 **post-1865**（1862 两法起 / 1869 接轨 / 1870s-1890s 平原民族）；kernel §0/§1/meta.notes 多处显式声明"与 manifest-destiny-1845（1840s 墨西哥割让/Texas/Oregon）区分"，仅作跨 Topic 锚（条约≠真保护）不重叠 1840s 内容。✅**无 overlap**。
  - **vs chinese-exclusion-1882**：华工严格作为**铁路语境背景**，1882 排华法仅在 `wh-n7` + notebook 作"种子 + 跨 Topic 锚"，显式声明"是另一个 Topic / 本 Topic 只埋种子不展开"。✅**无 duplication**。
- **§8 同时代中国（Rule 0）**：晚清/洋务运动/唐胥铁路 1881/新疆建省 1884 史实准确；按 cultural-ban 例外，中国部分（narrative §8 + notebook 对照卡）使用中文术语合规；Rule 0 中性（不褒贬、不下高低判断）执行到位。
- **用到的外部核实来源**：Wikipedia（Golden Spike / Battle of the Little Bighorn / Wounded Knee Massacre / Treaty of Fort Laramie (1868) / Dawes Act / Frontier Thesis / American bison / United States v. Sioux Nation）、National Archives（Homestead Act / Pacific Railway Act / Dawes Act / Fort Laramie Treaty）、Library of Congress、Union Pacific、PBS American Experience（CP/UP workers）、Stanford Chinese Railroad Workers Project、NPS（Golden Spike / Bison）、Britannica（Little Bighorn / Wounded Knee）、Smithsonian、EJI、EBSCO/Texapedia（bison slaughter）、Minneapolis Fed（1862 legislation）、ICT（Dawes land loss）、IERE/All About Bison（bison peak estimates）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2（Fact Ledger）—— 所有高风险 claim 均 ✅verified，**无 needs-source 缺口、无事实硬伤、无未标注演绎**。3 条红旗全为低优先级 ⚠️downgrade-wording（野牛峰值区间 / Custer 军衔口语化 / frontier closed 主体表述），**均属可接受的 7 年级简化，不阻塞 Gate 2**。本 topic 的最高风险项（灭牛蓄意战略 + Sherman/Sheridan 归属）处理为范本级，建议**直接过 Gate 2**；3 条红旗可作为下一轮可选润色，非必改。
