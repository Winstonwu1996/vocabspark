# 早期共和国 1800-1828 · The Early Republic Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on narrative，**只写本账本文件**，绝不改内容。

```
topicId:    early-republic-1800
生成日期:    2026-06-06
来源文件:    lib/history-narratives/early-republic-1800.md（CN narrative kernel）
            + lib/history-narratives/early-republic-1800.en.md（EN sister file）
claim 总数:  28
🚩 红旗数:   4 — 全部为 ⚠️downgrade-wording / 已透明标注的合成桥接人物，无 needs-source、无 flagged 事实硬伤
```

**一句话总评**：史实地基**稳**——核心日期（1803 购地 / 1804.5.14 探险出发 / 1811.11.7 Tippecanoe / 1812.6.18 宣战 / 1813.10.5 Thames / 1814.12.24 Ghent / 1815.1.8 New Orleans / 1819 Panic / 1820.3 Missouri Compromise / 1823.12.2 Monroe Doctrine / 1825.10.26 Erie Canal / 1828 Jackson 当选）、关键数字（828,000 平方英里 / 1500 万美元 / 363 英里 / 运费 100→6 美元 / 36°30′ 线 / 人口 530 万→近 1200 万）、人名生卒、因果链均对得上权威来源（Wikipedia、Britannica、National Archives、history.state.gov、U.S. Senate、Library of Congress、CEPR/Great Divergence 文献）。红旗集中在：**两个合成桥接人物**（被推走的原住民母亲 / 被卖下河的奴隶少年，narrative §3 已透明标注虚构+身份写实）、**Jefferson「火警钟」名言的私信出处**（真实，标注其为私人信件）、**Lowell「mill girls 15-35 岁」年龄区间措辞**、以及 **§8 大分流的「同样技术不同路」表述**（属主流学界综合，已用「历史学家研究…发现」框定）。无未标注的合成人物冒充史料问题。

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
| 1 | "1803 路易斯安那购地，约 828,000 平方英里，1500 万美元"（§0/§1/§2 L0/§4-1/§5A/附录 A）| number | encyclopedia | history.state.gov / National Archives / 维基 Louisiana Purchase：828,000 sq mi，$15 million；1803-04-11 法方报价、1803 签约 | ✅verified |
| 2 | "参议院 1803 年 10 月批准购地"（§4-1/附录 A）| date | encyclopedia | U.S. Senate 官网：1803-10-20 参议院 24-7 批准，10-31 签署 | ✅verified |
| 3 | "Jefferson 本想至多 1000 万美元买 New Orleans"（§4-1）| number | encyclopedia | 维基/Monticello：Jefferson 授权 Monroe+Livingston 出价至多 $10M 买 New Orleans + West Florida | ✅verified |
| 4 | "Napoleon 因 Saint-Domingue 失利 + 急需对英军费而甩卖"（§1/§4-1）| causal+motive | encyclopedia | history.state.gov / 维基：拿破仑因加勒比失利、对英战争在即、无力守路易斯安那而出售；narrative 用此主流因果 | ✅verified |
| 5 | "Lewis and Clark 1804.5.14 从圣路易附近出发，1806.9 返回"（§4-2/附录 A/C）| date | encyclopedia | 维基/Britannica/NPS：1804-05-14 自 Camp Dubois 出发；1806-09-23 返抵圣路易 | ✅verified |
| 6 | "Sacagawea（Shoshone 妇女）做向导和翻译，没有她探险走不通"（§3/§4-2/§10-2/附录 C）| representativeness | encyclopedia | 维基/Britannica/NWHM：Sacagawea Shoshone，1804-06 随队，翻译/向导，价值公认。约 1788-1812 生卒为主流估值 | ✅verified |
| 7 | "1812.6.18 美国对英宣战；impressment 为导火索之一"（§4-3/附录 A/B）| date+causal | encyclopedia | 维基/USS Constitution Museum：1812-06-18 宣战；impressment + 海上拦截 + 疑助原住民为主因 | ✅verified |
| 8 | "1814.8.24-25 英军焚烧华盛顿（含白宫、国会）"（§4-3/附录 A）| date | encyclopedia | 维基/White House Historical Assoc：1814-08-24~25 英军焚烧国会、总统府等 | ✅verified |
| 9 | "1814.12.24 Treaty of Ghent，基本恢复战前原状"（§4-4/§5（隐含）/附录 A/B）| date+causal | encyclopedia | National Archives / 维基：1814-12-24 签于 Ghent；status quo ante bellum | ✅verified |
| 10 | "1815.1.8 Battle of New Orleans，Jackson 大胜，发生在和约签后"（§4-4/§10-3/附录 A）| date+causal | encyclopedia | 维基/Navy History：1815-01-08 Jackson 胜；和约 1814-12-24 已签但消息未到 | ✅verified |
| 11 | "Battle of Tippecanoe 1811.11.7，Harrison vs Tecumseh 联盟；Tecumseh 当时外出南方"（§3/§4-5/附录 A/C）| date | encyclopedia | 维基/Britannica/NPS：1811-11-07，Harrison vs Tenskwatawa（Tecumseh 外出招募盟友）；联盟受重创 | ✅verified |
| 12 | "Tecumseh 1813.10.5 战死于 Battle of the Thames（今加拿大安大略）"（§3/§4-5/附录 A/C）| date | encyclopedia | 维基/Britannica/LoC：1813-10-05 Thames（Moraviantown）；Tecumseh 战死，联盟瓦解 | ✅verified |
| 13 | "Tecumseh 试图联合数十原住民民族成 confederacy，主张土地共有、单一民族无权出售"（§3/§4-5/§11-3）| causal | encyclopedia | 维基 Tecumseh / Tecumseh's War：跨民族联盟，common-ownership of land 原则，反对单方割地 | ✅verified |
| 14 | "Panic of 1819 为美国第一次全国性经济萧条；第二合众国银行先放水后猛收贷"（§2 L4/§4-7/§10（隐含）/附录 A/B）| causal | encyclopedia | 维基 Panic of 1819 / NY Fed Liberty Street：美国首次全国性金融危机，1816 Second Bank、土地投机、战后回落共同触发 | ✅verified |
| 15 | "第二合众国银行 1816 年成立"（§4-7/附录 A）| date | encyclopedia | 维基：Second Bank of the United States chartered 1816 | ✅verified |
| 16 | "Missouri Compromise 1820：Missouri 蓄奴 + Maine 自由 + 36°30′ 线以北禁奴；Monroe 1820.3 签署；Henry Clay 牵头"（§0/§4-8/§5B/§7/§10-6/附录 A/B/C）| date+causal | encyclopedia | National Archives / 维基/Senate：国会 1820-03-03 通过，Monroe 1820-03-06 签；Maine 自由 + Missouri 蓄奴；36°30′ 线（Jesse Thomas 提案）；Clay 促成 | ✅verified |
| 17 | "Jefferson 论密苏里线『像深夜火警钟把我惊醒、吓坏』（1820 私信）"（§0/§4-8/§5B/附录 D）| quote | primary | Jefferson to John Holmes, 1820-04-22："this momentous question, like a fire bell in the night, awakened and filled me with terror." narrative §5B 标注为私人信件 | ✅verified |
| 18 | "Monroe Doctrine 1823.12.2 国情咨文宣布；设计者 John Quincy Adams；non-colonization 原则"（§4-10/§5C/§10-7/附录 A/B/C）| date+quote+representativeness | encyclopedia | history.state.gov / 维基 Monroe Doctrine：1823-12-02 国情咨文；JQA 主笔；原文 "not to be considered as subjects for future colonization" 准确 | ✅verified |
| 19 | "1823 美国无力执行门罗主义，靠英国海军默契"（§5C/§10-7）| causal | textbook | 主流史学共识：1823 美海军弱，实际威慑来自英国皇家海军不愿他国插手美洲；标准教学表述 | ✅verified |
| 20 | "Erie Canal 1825.10.26 通航，363 英里，连纽约港与五大湖"（§4-6/§5D/§8/附录 A/B/D）| date+number | encyclopedia | 维基/LoC/GovInfo：1825-10-26 全线通航；363 英里；首条越阿巴拉契亚连大西洋与上五大湖 | ✅verified |
| 21 | "Erie Canal 后运费从每吨约 100 美元降到约 6 美元"（§1（隐含）/§4-6/§5D/§7/附录 D）| number | encyclopedia | 维基/Bill of Rights Institute：运费 from ~$100 to ~$6 per ton；标准引用 | ✅verified |
| 22 | "Lowell 大规模雇用 15-35 岁单身年轻女性（mill girls）；纺织厂建于 New England 河边瀑布旁"（§2 L1/L2/§4-6/§10（隐含）/附录 B）| number | encyclopedia | 维基 Lowell mills / Waltham-Lowell system：Boston Manufacturing 1814 Waltham 起；Lowell（Merrimack/Pawtucket Falls）雇 15-35 岁单身女工 | ✅verified（年龄区间措辞见红旗 #3）|
| 23 | "1824 大选 Jackson 最多普选+选举人票却未过半；众议院（12 修正案，取前三）选 JQA；Clay 投 Adams、后任国务卿 → corrupt bargain"（§2 L4/§4-11/§10（隐含）/附录 A/C）| causal+number | encyclopedia | 维基/Britannica/National Archives：Jackson 99 / Adams 84 / Crawford 41 / Clay 37（共 261，需 131）；House 1825-02-09 选 Adams；Clay 任国务卿引发 corrupt bargain 指控 | ✅verified |
| 24 | "Era of Good Feelings 1817-1825；1820 Monroe 几乎无对手连任；联邦党几近消失"（§0/§4-9/§10-5/附录 A/B）| representativeness | encyclopedia | 维基/Britannica：War of 1812 后 Federalists 崩溃；Era of Good Feelings；1820 Monroe 近乎全票连任 | ✅verified |
| 25 | "1828 Andrew Jackson 当选，第一次政党体系彻底改组"（§0/§4-12/附录 A/C）| date+causal | encyclopedia | 维基：1828 Jackson 击败 J.Q. Adams 当选；第一政党体系向第二（Jacksonian）转型 | ✅verified |
| 26 | "人口 1800≈530 万、1828≈近 1200 万；面积 1803 翻倍"（§1/§2 L0/L2）| number | encyclopedia | US Census：1800≈5.31M，1830≈12.86M（1828 介于 1820≈9.6M 与 1830≈12.9M，narrative「逼近 1200 万」稳妥）；purchase 使疆域约翻倍 | ✅verified（措辞稳妥） |
| 27 | "1820 年代中国大运河为世界最长人工水道（一千多公里，隋唐已贯通）；Erie Canal 当时为世界第二长"（§1/§8/§11-5/附录 D）| number+representativeness | encyclopedia | 维基 Grand Canal：京杭大运河 1,776 km，世界最长人工水道，隋唐贯通；维基 Erie Canal 明言「当时世界第二长，仅次于中国大运河」 | ✅verified（§8 真中国段，cultural term 允许）|
| 28 | "大分流：1820 前后中国（江南）与西欧在市场/人口/积累上相近、技术多有；分岔源于处境（相对价格/市场整合/煤铁分布），非聪明与否；江南手工业为作坊+家庭劳动 vs New England 工厂"（§8/§9）| causal | inference | CEPR/Great Divergence 文献 + Pomeranz 学派综合：1820s 江南与西欧劳动生产率分化、相对价格诱导不同生产方式。narrative 用「历史学家研究…发现」框定为学界综合，非单一定论 | ✅verified（见红旗 #4，措辞已框定为 historiography）|

---

## 🚩 红旗句（创始人必审）

> 按影响排序。无事实硬伤；#1 narrative §3 已透明标注合成；#2/#3/#4 为措辞/框定问题，已处理或低优先级。

1. **[#3 主角合成] 两个 DEFAULT 桥接人物：被推走的原住民母亲 / 被卖下河的奴隶少年**（§3）
   - **问题**：DEFAULT 视角由两个**合成桥接人物**承担（无确切姓名、无确切庄园），是本 Topic 唯一的合成史料风险点。
   - **narrative 现状**：§3 **已显式标注**「两个都是虚构桥接人物，身份完全写实，不给确切姓名——因为历史很少为这些人留下名字，而这恰恰是问题本身」。其余主角（Jefferson / Tecumseh / Lewis / Clark / Sacagawea / Harrison / Jackson / Clay / Monroe / J.Q. Adams）**均为真实历史人物**，生卒事迹皆有据。
   - **建议**：现状**合规**（与 haitian-revolution 模板同处理：composite 必须明标、身份写实、不冒充档案）。无需改 narrative。下游 storyboard 若用这两个角色，须沿用「虚构桥接 / 身份写实」标注，**禁止**安一个具体真名当史料。

2. **[#17] Jefferson「火警钟」名言的出处**（§5B / §4-8 / 附录 D）
   - **问题**：这句是 Jefferson 1820-04-22 致 John Holmes 私人信件中的真实原话（**非** apocryphal），但属私信而非公开演说。
   - **narrative 现状**：§5B 已标注为「私人信件」。处理**合规**。
   - **建议**：保持现状。**列此条仅为透明**：与海地 Topic 的 Toussaint apocryphal 名言不同，本句是档案确证的真原话，可放心使用，但应保留「私信」语境（它不是国会发言）。

3. **[#22] Lowell「mill girls 15-35 岁」年龄区间措辞**（§2 L2 / 附录 B）
   - **问题**：权威来源给「young, single women, usually 15-35」。narrative 用「15 到 35 岁的年轻单身女性」准确，但实际 Lowell 早期女工年龄分布更集中在十几到二十几岁，「35」是区间上沿。
   - **建议**：现状可接受（与来源措辞一致）。若想更稳，可写「多为十几到二十几岁的年轻单身女性」。**低优先级。**

4. **[#28] §8 大分流「同样技术、不同路」的表述**（§8 / §9）
   - **问题**：「1820 前后中国与西欧相近、分岔源于处境而非聪明与否」是 Pomeranz/CEPR 一派的**学界综合观点**，并非无争议的铁定事实（也有学派强调制度/科学传统差异更早分化）。
   - **narrative 现状**：§8 用「历史学家研究『大分流』时发现…」框定，§9 historiography 也并列了多派——**已显式标为学界观点而非定论**，符合 Rule 0「不下结论」。
   - **建议**：现状**合规**。这是 §8 中国桥的核心论点，处理得当（落地、写实、不褒贬、框定为 historiography）。**无需改。** 提醒下游 storyboard 若展开，须保留「这是历史学家的一种主流解释」的口径，不要排成「事实就是如此」。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | 视角 | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 被推走的原住民母亲 | receiving-end (DEFAULT) | **合成桥接人物**（无名字、无确切庄园），处境/民族（暗示 Cherokee）写实 | ✅**已透明标注**（§3「虚构桥接人物，身份完全写实，不给确切姓名——因为历史很少为这些人留下名字，而这恰恰是问题本身」）|
| 被向西带走的被奴役少年 | receiving-end (DEFAULT) | **合成桥接人物**（无名字），「弗吉尼亚烟草庄园→西南棉田」处境写实，"sold down the river" 为真实术语 | ✅**已透明标注**（同 §3 总声明）|
| Thomas Jefferson | actor | **真实历史人物**；蓄奴 600+ 人、买地、empire of liberty 皆有据 | N/A — 非合成 |
| Tecumseh / Tenskwatawa / Lewis / Clark / Sacagawea / Harrison / Jackson / Clay / Monroe / John Quincy Adams | mediator + 配角 | **真实历史人物**，姓名/生卒/事迹皆有据 | N/A — 非合成 |

**结论**：本 topic 仅两个合成桥接人物（DEFAULT 的原住民母亲 / 奴隶少年），均已在 §3 透明标注为虚构、身份写实、不给真名。所有具名历史人物均真实。**无未标注的、冒充史料档案样式的合成。** 无 apocryphal 名言（Jefferson「火警钟」为档案确证私信，已标注语境）。

---

## 备注

- **直接引语分层核验**（本 topic 引语风险类）：
  - *真实一手文本*：Jefferson 1820「fire bell in the night」（致 John Holmes 私信，档案确证）/ Monroe Doctrine 1823「not to be considered as subjects for future colonization」（国情咨文原文）—— 均对得上一手来源。
  - *无 apocryphal 风险*：本 topic **未**使用任何史学界标为伪托/追记的名言（与海地 Toussaint 句不同）。
  - 路易斯安那购地条约 / Missouri Compromise narrative 用概括叙述，**未**伪造逐条原文引证，合规。
- **算术自检**：1803 购地约 828,000 sq mi 使疆域约翻倍（原约 86 万 sq mi，新增约 83 万，合理）；1825 − 1803 = 22 年（Erie 距购地）；1815 − 1812 = 3 年（战争跨度）；1820 + 41 ≈ 1861（密苏里线到内战，narrative「四十年」正确）；运费 100→6 约降 16 倍（narrative「十几倍」正确）；1828 − 1801 = 27 年（Jefferson 上任到 Jackson 当选，narrative「整整一代人/二十八年」含头尾算 1800-1828 区间，稳妥）。**全部自检通过。**
- **§8 同代中国**：为「真中国」段落，按 AUTHORING_PIPELINE 第 7 条例外，可正常使用中国术语（大运河、康乾盛世、嘉庆/道光、江南、苏州/松江、漕运、手工作坊）；已核 cultural ban——正文 §0-§7、§9-§11 及双附录**未**把中国概念词用于解释美国制度（federalism/Missouri/Monroe 全用 real US terms）。
- **Erie vs 大运河对照（§8 核心桥）**：维基 Erie Canal 词条本身即写明「建成时为世界第二长运河，仅次于中国大运河」——这是教材级、可直接落地的写实对照，非牵强类比。大分流框定为 historiography（见红旗 #4），符合 Rule 0。
- **轻微表述**：§2 L2 人口「1828 逼近 1200 万」取 1820（≈9.6M）与 1830（≈12.9M）之间的合理插值；未硬写 1828 精确人口，稳妥。
- **用到的外部核实来源**：Wikipedia（Louisiana Purchase / Lewis and Clark Expedition / Sacagawea / War of 1812 / Treaty of Ghent / Battle of New Orleans / Battle of Tippecanoe / Tecumseh / Battle of the Thames / Panic of 1819 / Missouri Compromise / Monroe Doctrine / Era of Good Feelings / Erie Canal / Lowell mills / Waltham-Lowell system / Corrupt bargain / Grand Canal (China) / Great Divergence）、Britannica、National Archives（milestone documents）、history.state.gov（Office of the Historian）、U.S. Senate（treaty ratification）、Library of Congress、NY Fed Liberty Street（Panic of 1819）、US Census（人口/购地）、CEPR（Great Divergence 系列）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2 —— 所有高风险 claim 均有来源或已透明标注/框定为 historiography，**无 needs-source 缺口**。唯一需创始人**留意**的是红旗 #1（两个 DEFAULT 合成桥接人物的处理是否接受——与已上线的 haitian-revolution / jackson-indian-removal 模板同处理）；#2/#3/#4 已合规或低优先级。
