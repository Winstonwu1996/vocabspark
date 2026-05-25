# 北美十三殖民地 约 1700 · The Thirteen Colonies c.1700 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative/notebook，**只写本账本文件**，绝不改内容。

```
topicId:    thirteen-colonies-1700
生成日期:    2026-05-25
来源文件:    lib/history-storyboards/thirteen-colonies-1700.js（3 lens：colonial-elite / indentured-servant / enslaved-african-receiving-end，各 11 节点）
            + lib/history-narratives/thirteen-colonies-1700.md（narrative kernel）
            + lib/history-storyboards/notebooks/thirteen-colonies-1700.js（同伴笔记本 v1）
claim 总数:  29
🚩 红旗数:   3（需创始人审）— 全部为 ⚠️downgrade-wording / 措辞收紧，无 needs-source、无 flagged 事实硬伤、无演绎角色未标注
```

**一句话总评**：史实地基**很稳**——三大区经济、契约奴→chattel slavery 转向、Bacon's Rebellion 1676、King Philip's War 1675-76、cash crop、Middle Passage、奴隶人口 1700→1750、重商主义/Navigation Acts、宗教各群体、康熙同代对照，全部对得上权威来源；三主角的合成人物身份在 lens description + N3 括号 + meta.notes 三处透明标注，**无未标注演绎**。最值得肯定的是 **Bacon's Rebellion 的因果措辞处理得当**：storyboard/kernel/notebook 都用「催化剂 / catalyst」「关键转折」而非「唯一原因」，与史学共识（Morgan 的种族建构论 vs. 劳动力供给论之争）一致——任务点名要防的「过度归因」**没有发生**。Olaudah Equiano 的处理也**合规**：narrative §5C 明确标注其自传 1789 出版、追述更早经历，**未把他锚定到 1700**，且不逐字塞进 storyboard。红旗集中在 **3 处数字/措辞略需收紧**（Middle Passage「每六个里一个以上」偏高一档；「约 24 万 / 约 2.7 万」属可接受的整数化；rice 黑稻论可加一句「史学界有争论」）。

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
| 1 | "约 1700 年被奴役者约 2.7 万，到 1750 年涨到约 24 万"（kernel L2 / 附录 A；storyboard `ce-n9` / `is-n9` / `ea-n8`；notebook `indenture-to-slavery-shift`）| number | textbook | 维基 Slavery in colonial history：1700 ≈ 27,817 → 1750 ≈ 246,648（British North America）。"2.7 万 / 24 万" 是合理整数化 | ✅verified（见红旗 #2 仅口径说明）|
| 2 | "约 1700 殖民地总人口约 25 万，到 1750 约 100 万多"（kernel L2；notebook `three-colonial-regions` 暗含）| number | textbook | 美国人口史：1700 ≈ 250,888；1750 ≈ 1.17M（部分史家给 1.5M）。"约 25 万 / 约 100 万多" 准确 | ✅verified |
| 3 | "Bacon's Rebellion 1676 是『契约奴→种族奴隶制』转向的**催化剂**"（kernel §4/§7 plot 4、L4；notebook `indenture-to-slavery-shift` "催化剂/catalyst"）| causal | textbook | Edmund Morgan《American Slavery, American Freedom》1975：1676 后精英刻意用种族劈开底层；但另有学者（劳动力供给论）指出英国契约奴供给 1680 后萎缩才是主因。文中用"催化剂/关键转折"**未做单因归结** | ✅verified（措辞稳健，正是任务要防的过度归因——**没发生**）|
| 4 | "1676 年穷白人（很多是前契约奴）和被奴役黑人联手造反，烧了首府詹姆斯敦"（`ce-n4`/`ce-n5`、`is-n5`、`ea-n7`，kernel plot 3）| date+event | encyclopedia | Encyclopedia Virginia / BlackPast：1676 Bacon's Rebellion，跨种族底层联盟烧 Jamestown，事后法律系统性区分白契约奴与黑奴 | ✅verified |
| 5 | "King Philip's War / Metacom's War 1675-76（新英格兰），原住民惨败后被大批杀戮、卖为奴、驱离土地"（`ce-n7`，kernel plot 6 / L4 / 附录 A；notebook `native-displacement`）| date+event | encyclopedia | 维基/Britannica：1675-76，Metacom（King Philip）领导；人均死亡率为殖民/美国史最高（约 9,000 死）；至少 1,000 原住民被卖为奴（含 Metacom 妻儿）；幸存者被卖奴/驱离 | ✅verified |
| 6 | "Metacom 1676 年 8 月被杀，英国人叫他 King Philip"（`ce-n7`，notebook keyFigures）| date+name | encyclopedia | 维基：1676-08-12 Metacom 于 Mount Hope 被 John Alderman 射杀、斩首示众；King Philip 为英国人称呼 | ✅verified |
| 7 | "Middle Passage 死亡率：约六分之一到更多 / 每六个里就有一个以上没活着到岸"（kernel §3 主角3；`ea-n2`，notebook `middle-passage` "每六个里就有一个以上"）| number | textbook | 全程平均约 14.5%（约七分之一）；16C ≈30%、17C 晚期降至 <20%、18C 晚期 <15%。约 1700 处于 <20% 区间。"每六个一个以上"(≈16.7%+) 略偏高一档 | ⚠️downgrade-wording（见红旗 #1）|
| 8 | "跨大西洋三角贸易：欧洲船装布/枪/酒→西非换人→Middle Passage→加勒比/北美种植园产糖烟草稻米→运回欧洲"（`ea-n5`，kernel plot 5；notebook `middle-passage`）| textbook | textbook | 维基 Atlantic slave trade：三角贸易标准结构，与文中一致 | ✅verified |
| 9 | "弗吉尼亚 1705 年奴隶法典原文：'…who were not Christians in their native country… shall be accounted and be slaves… notwithstanding a conversion to Christianity afterwards'"（kernel §5A 引语）| quote | primary | Encyclopedia Virginia 一手文本：原句完整为 "…who were not christians in their native country,（except Turks and Moors…）shall be accounted and be slaves, and as such be here bought and sold notwithstanding a conversion to christianity afterwards"。文中节录**逐字对得上**（省略号处略去 Turks/Moors 例外条款，标注得当）| ✅verified |
| 10 | "1705 弗吉尼亚奴隶法典（An act concerning Servants and Slaves）"（kernel §5A / 附录 A）| date | encyclopedia | 维基 Virginia Slave Codes of 1705：标题与年份准确 | ✅verified |
| 11 | "Olaudah Equiano 自传出版于 1789 年（追述更早经历），是少数留下第一手 Middle Passage 记述的被奴役者之一"（kernel §5C；notebook keyFigures）| date+representativeness | primary | 维基：《The Interesting Narrative…》1789 London 出版；Equiano 自述 1745 生于今尼日利亚 Igbo 区。**文中明确标 1789、不锚到 1700、不逐字塞进 storyboard** → 无时序错置 | ✅verified（任务点名的 Equiano anachronism——**没发生**；见备注关于 Carretta 出生地之争）|
| 12 | "Equiano 引语：'The closeness of the place, and the heat of the climate… almost suffocated us… The shrieks of the women, and the groans of the dying…'"（kernel §5C）| quote | primary | 与 1789《Interesting Narrative》第 2 章 Middle Passage 段落一致（American Yawp / Smithsonian 转录）| ✅verified |
| 13 | "南卡稻米财富很大程度靠被奴役非洲人从西非带来的种稻/治水知识"（`ce-n6`/`ea-n3`/`ea-n6`，kernel plot 反讽 / §10.6；notebook `cash-crops`）| causal | encyclopedia | Judith Carney《Black Rice》2001 主张西非种稻知识转移；Eltis/Morgan/Richardson 2007 质疑其因果强度，但**承认**来自稻作区的被奴役者确带来关键技能（fanner basket / toe-heel）。文中说"很大程度/很大一部分"略强于审慎派 | ✅verified（见红旗 #3 建议加"史学界有争论"）|
| 14 | "南部 cash crop：弗吉尼亚和马里兰种烟草，南卡种稻米"（`ce-n2`，kernel L1/L2；notebook `cash-crops`）| textbook | textbook | 标准教材共识：VA/MD tobacco、SC rice（lowcountry）| ✅verified |
| 15 | "三大区：新英格兰（土薄冬长/小农渔业造船海运/Puritan）、中部（面包篮/小麦玉米/Quaker荷兰后裔最多元）、南部（湿热广阔/cash crop/最吃廉价劳力）"（`is-n8`，kernel L1；notebook `three-colonial-regions`）| textbook | textbook | CA HSS 5.3/5.4 + APUSH 标准三区划分，全部准确 | ✅verified |
| 16 | "契约奴：签 5-7 年白干换船票，到期发衣服/工具/有时一小块地（freedom dues），法律上仍是『人』有年限到期能翻身"（`ce-n3`/`is-n2`/`is-n3`，kernel 主角2/plot 2；notebook `indenture-to-slavery-shift`）| textbook | textbook | APUSH 标准 indentured servitude 描述：5-7 年、freedom dues、与 chattel slavery 的关键区别（年限/可否继承）准确 | ✅verified |
| 17 | "chattel slavery = 终身、可继承、按种族划定；孩子生下来也是奴隶"（多节点；kernel L3/词汇表；notebook 多卡）| textbook | textbook | chattel slavery 标准定义，准确 | ✅verified |
| 18 | "mercantilism + Navigation Acts（1651 年起）：殖民地货只能用英国船、主要卖英国"（`ce-n8`，kernel L3/plot 7；notebook `mercantilism-navigation-acts`）| date+textbook | textbook | 第一部 Navigation Act 1651（Commonwealth 时期）；mercantilism 标准描述。"1651 年起"准确 | ✅verified |
| 19 | "这股重商主义憋屈几十年后才发酵成大事（通向 1775 独立战争），约 1700 远没到跟母国翻脸"（`ce-n8`，kernel plot 7；notebook `mercantilism-navigation-acts` AVOID 标注）| causal | textbook | 正确的时序自我约束——明确切割独立战争，符合 AVOID overlap 要求 | ✅verified（无 1775/1787 越界）|
| 20 | "1620 年 Pilgrim（清教分离派）乘五月花号到普利茅斯；1630s Puritan 大批迁入马萨诸塞"（kernel plot 8 / 附录 A；notebook `religious-diversity`）| date | encyclopedia | 维基：Mayflower 1620 抵 Plymouth；Puritan 1630s 大迁徙（Great Migration）。准确 | ✅verified |
| 21 | "马里兰（1634 建）成为天主教徒避难地"（kernel plot 8 / 附录 A；notebook `religious-diversity`）| date | encyclopedia | ushistory.org / Bill of Rights Institute：Maryland 1634 settled，为英国天主教徒 refuge（实际新教徒更多）| ✅verified |
| 22 | "William Penn 1682 年前后把宾夕法尼亚办成『神圣实验』（holy experiment）"（kernel §5D / plot 8 / 附录 A；notebook keyFigures / `religious-diversity`）| date | encyclopedia | 维基/EBSCO：charter 1681，Penn 1682-08-30 启航、定居者 1682 夏抵达。"1682 前后"准确 | ✅verified |
| 23 | "1607 詹姆斯敦建立（第一个永久英国殖民地）；1619 第一批被掳非洲人运到弗吉尼亚（早期身份介于契约奴与奴隶之间）"（kernel 附录 A）| date | encyclopedia | Historic Jamestowne：1607 Jamestown；1619-08 约 20 名来自 Angola 的非洲人经 White Lion 抵 Point Comfort。"早期身份介于"措辞与史学审慎派一致 | ✅verified |
| 24 | "精英用一连串法律给穷白人特权（能有枪/能作证/将来或有地），把终身可继承奴役压给黑人（分而治之）"（`ce-n5`/`is-n5`/`is-n7`/`ea-n7`，kernel plot 4）| causal | encyclopedia | Facing History / Morgan：1660s-1705 弗吉尼亚法律系统性区分白契约奴与黑奴，给穷白人法律特权。"分而治之"为史学常见框架 | ✅verified |
| 25 | "约 1700 = 清康熙三十九年；康熙平三藩、收台湾、定边疆"（kernel §8；notebook `qing-kangxi-parallel`）| date+fact | encyclopedia | 维基：康熙 1661-1722 在位，1700 为康熙三十九年；三藩之乱 1673-81 平定、1683 收台湾。准确（康熙朝 = 盛世起点说法成立）| ✅verified |
| 26 | "『湖广填四川』这类大规模移民垦荒发生在这前后"（kernel §8；notebook `qing-kangxi-parallel`）| inference | encyclopedia | 史料：湖广填四川主体在清初康熙—乾隆朝（17C 末—18C），与"约 1700 前后"时序成立 | ✅verified |
| 27 | "清朝底层有法律上的『贱籍』（如乐户、惰民），但不是按肤色/不横跨大洋掳来/原则上不世代锁死为可买卖财产——两种不自由性质不同"（kernel §8；notebook `qing-kangxi-parallel`）| causal | textbook | 史学共识：贱籍（乐户/惰民/疍民等）确为低贱身份，但与 chattel slavery 的种族/跨洋/可继承财产属性不同。Rule 0 对照处理审慎 | ✅verified |
| 28 | "约 1700 / 1750 被奴役者『几乎全在南部、几乎全是黑人』"（`ce-n9`/`ea-n8`，kernel L2/§6）| representativeness | textbook | 史学共识：18C 殖民地奴隶绝大多数集中南部、为非洲裔。准确 | ✅verified |
| 29 | "三主角（种植园主/契约奴/被奴役西非人）为叙事性合成人物，史料确证的是这三类群体的真实处境"（lens description + `ce-n3`/`is-n2` 括号 + kernel §3 + meta.notes anti-fab）| dramatization | dramatization | **文中三处透明标注**为合成（William Carter / Mary / Kofi 为示例名）；无具体真实个体被冒充 | ✅verified（已透明标注，合规）|

---

## 🚩 红旗句（创始人必审）

> 全部为 ⚠️downgrade-wording（措辞收紧），**无事实硬伤、无缺来源、无演绎未标注**。按影响排序。

1. **[#7]** `「Middle Passage…大概每六个里，就有一个以上没活着到岸」`（kernel §3 主角3 "约六分之一到更多"；`ea-n2`；notebook `middle-passage` "每六个里就有一个以上"）
   - **问题**：跨大西洋奴隶贸易**全程平均**死亡率约 **14.5%（约七分之一）**；分期看 16 世纪约 30%、17 世纪晚期降至 20% 以下、18 世纪晚期 15% 以下。本 topic 时点约 1700 处于"20% 以下"区间。"每六个里就有一个以上"(≈16.7% 及更高) 落在历史区间内，但作为**点估计偏高一档**，"以上"二字会让读者上探到接近 20%。
   - **建议**：改为"大概每六到七个里就有一个没活着到岸"或"约 15% 上下"。**这是全 topic 唯一一处数字偏高**，且 narrative kernel 的"约六分之一到更多"与 notebook 的"一个以上"互相印证，属同一处反复。低-中优先级（7 年级层面，量级感正确）。

2. **[#1 口径说明]** `「约 1700 年被奴役者约 2.7 万，到 1750 年涨到约 24 万」`（kernel L2、`ce-n9`/`is-n9`/`ea-n8`、notebook）
   - **问题**：**不是错**——2.7 万对应权威来源的 ~27,817（1700, British North America），24 万对应 ~246,648（1750）。但 1700 年的"被奴役者"数字在不同口径下有 ~16,729（某些 census 系列，仅算 13 殖民地核心、且"Negroes"含自由黑人差异）vs ~27,817（更广 British North America）两套，差异约 1 万。本 topic 采用较高的一套（~2.7 万），与近年主流（维基 Slavery in colonial history）一致。
   - **建议**：**保持现状**。仅在此透明记录口径来源，无需改。若想绝对严谨可加脚注"约 1700 数字史家有 1.7 万—2.8 万不同估算，本文取较常引的约 2.7 万"。最低优先级，**列此条仅为透明**。

3. **[#13]** `「南卡的稻米财富，靠的正是他这种从西非带来的种稻和治水手艺」/「很大程度靠…种稻知识」`（`ce-n6`/`ea-n3`，kernel plot 反讽 / §10.6；notebook `cash-crops`）
   - **问题**：**不是事实硬伤**——"黑稻论"（Judith Carney《Black Rice》2001）是主流且被广泛教学的解释。但 2007 年 Eltis/Morgan/Richardson 对其**因果强度**提出质疑（认为大西洋市场的贸易准入变化也是来源选择的重要因素），只是**承认**稻作区被奴役者确带来关键技能。文中"靠的正是 / 很大程度靠"略偏向 Carney 一方，未提争论。
   - **建议**：可保持现状（黑稻论是站得住的主流叙事，且本 topic 用它服务"被奴役者的知识让别人致富"的核心张力，教学价值高）；若要更严，在 notebook `cash-crops` 卡或 kernel §9 historiography 加一句"（史学界对这份功劳有多大仍有争论，但来自稻作区的被奴役者确带来了关键的治水/育苗技能）"。低优先级，**强化而非削弱叙事**。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 弗吉尼亚烟草种植园主（示例名 William Carter）| colonial-elite | **完全合成人物**：姓名/具体生平为叙事性合成；史料确证的是"南部种植园主精英"这一类的处境与立法决策 | ✅**已透明标注**（lens description + kernel §3 括号"人物名是叙事性合成…不是某个具体人" + notebook keyFigures "(composite)" + meta.notes anti-fab）|
| 从英国来的契约奴（示例名 Mary）| indentured-servant | **完全合成人物**：姓名/性别/具体经历为合成；史料确证的是"契约奴群体"的真实处境 | ✅**已透明标注**（lens description + kernel §3 括号"史料确证的是契约奴这一群体的真实处境" + notebook keyFigures "(composite)" + meta.notes）|
| 被奴役的西非人（示例名 Kofi）| enslaved-african-receiving-end | **完全合成人物**：姓名/具体经历为合成；确证的是 Middle Passage 与种植园奴役的真实经历、以及西非种稻知识的传入 | ✅**已透明标注**（lens description + kernel §3 括号"确证的是 Middle Passage 与种植园奴役的真实经历" + notebook keyFigures "(composite)" + meta.notes）|
| "你就是 TA"第二人称代入（`*-n4` peak）| 全 3 lens | 把读者置入主角内心做选择，属**教学代入手法**，非伪造史实人物 | N/A — 教学手法，非合成角色 |
| Ashley 饭桌式"岸上谈自由的体面客人"（`ea-n4`）/ Bacon's Rebellion 群像 | enslaved / 全 lens | 泛指性场景（"种植园主、商人、来做客的体面人"），无具名虚构个体 | ✅可接受（无具名捏造）|
| Metacom / King Philip、William Penn、Olaudah Equiano、Nathaniel Bacon | 背景/史料 | **真实历史人物**，作背景或史料引用，非合成 | N/A — 非合成（生卒/事迹皆有据）|

**结论**：本 topic **无未标注的合成人物**。三个 lens 主角均为**完全合成人物**，但全部在 lens description + N3 括号短句 + narrative kernel §3 + notebook keyFigures "(composite)" + storyboard meta.notes **五处**透明标注，且使用示例名（William Carter / Mary / Kofi）而非冒充任何真实个体，符合 `HISTORY_EVIDENCE_LAYER.md` §1.3 / §2.1 composite 透明红线。背景真实人物（Metacom / Penn / Equiano / Bacon）处理得当。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— colonial-elite（perpetrator-power，11 节点）/ indentured-servant（lonely-mediator，11 节点）/ enslaved-african-receiving-end（receiving-end，DEFAULT，11 节点）+ narrative kernel + 同伴笔记本（8 考点卡 + 3 DBQ）。红旗分布：#7（Middle Passage 死亡率）跨 kernel/`ea-n2`/notebook 三处；#1（奴隶人口口径）跨三 lens 收尾；#13（黑稻论）在 elite/enslaved lens + notebook。
- **任务点名的两个高风险点——均已查实为合规**：
  1. **Bacon's Rebellion 因果**：storyboard/kernel/notebook 全程用"催化剂 / catalyst / 关键转折"，**未做"唯一原因"的单因归结**。这正与史学争论一致——Edmund Morgan《American Slavery, American Freedom》(1975) 的种族建构论是主流，但另有"英国契约奴供给 1680 后萎缩"的劳动力供给论。文中措辞稳健，**任务要防的过度归因没有发生**。kernel §9 historiography 还专门列了 Morgan 的"自由与奴役孪生"论，处理到位。
  2. **Olaudah Equiano anachronism**：narrative §5C **明确标注**其《Interesting Narrative》1789 年出版、"追述更早经历"、"本 Topic 用作 Middle Passage 经历的史料，不涉及独立战争后的事"；notebook 把他列为"史料"而非 1700 在场人物，且**不逐字把引文塞进 storyboard**。Equiano 自述 1745 年生（晚于本 topic 时点 1700），文中用作**后世/一般性史料**而非锚定到 1700——**无时序错置**。（附带发现：Vincent Carretta 据档案提出 Equiano 可能生于南卡而非西非、自传 Middle Passage 段或为综合他人证词——属史学争议，不影响本 topic 把它当"少数第一手/经典记述"使用；如需极致严谨，可在 notebook keyFigures 加半句"（有学者对其出生地与亲历性提出争议）"。低优先级。）
- **直接引语分层核验**（本 topic 最高风险类，全部 ✅）：
  - *真实史料*：1705 弗吉尼亚奴隶法典 "…shall be accounted and be slaves… notwithstanding a conversion to Christianity afterwards"（Encyclopedia Virginia 一手文本，逐字对得上）/ Equiano "The closeness of the place, and the heat of the climate…"（1789 Interesting Narrative，逐字对得上）。两条均在 kernel §5 文件深读区，**未排成 storyboard 角色第一人称档案样式**。
  - *演绎/概括句*：三主角第一人称内心独白（"我有过一个名字""现在你就是我"）—— 属第一人称叙事重构，无伪造档案样式，**无把演绎句冒充史料的违规**。
  - **无任何捏造引语**（任务点名要查的"fabricated quote"——**没发现**）。
- **AVOID overlap 核验**：明确不碰独立战争（1775）/制宪（1787）。`ce-n8` 重商主义处明确切割"这是后话，约 1700 远没到跟母国翻脸"；跨 Topic 锚（civil-war / slavery-abolition / age-of-exploration）只做指针，不展开内容。**无越界**。
- **用到的外部核实来源**：Wikipedia（Slavery in the colonial history of the United States / Thirteen Colonies / List of colonial pre-Federal U.S. historical population / King Philip's War / Atlantic slave trade / Middle Passage / Virginia Slave Codes of 1705 / The Interesting Narrative of Olaudah Equiano / Kangxi Emperor / Revolt of the Three Feudatories）、Encyclopedia Virginia（An act concerning Servants and Slaves 1705 一手文本 / Bacon's Rebellion）、Britannica（King Philip's War）、Facing History（Bacon's Rebellion: Inventing Black and White）、BlackPast、Historic Jamestowne（1619 first Africans）、ushistory.org + Bill of Rights Institute（Maryland 1634）、EBSCO / AHEF（Penn holy experiment 1682）、Judith Carney《Black Rice》+ Eltis/Morgan/Richardson 2007（rice 黑稻论之争）、American Yawp / Smithsonian（Equiano 引文转录）、U.S. Census historical population series。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2（Fact Ledger）—— 所有高风险 claim 均有来源或可降级为谨慎措辞，**无 needs-source 缺口、无 ✋flagged 硬伤、无未标注演绎**。建议处理 **#7（Middle Passage "每六个里一个以上"→"六到七个里一个 / 约 15%"）** 后过 Gate 2；#1 为口径透明（保持现状即可）、#13 为可选的史学加注（强化叙事），均非必改。
