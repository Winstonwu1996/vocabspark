# 美西战争与美国海外帝国 1898 · The Spanish-American War & American Empire Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on narrative，**只写本账本文件**，绝不改内容。

```
topicId:    spanish-american-war-1898
生成日期:    2026-06-06
来源文件:    lib/history-narratives/spanish-american-war-1898.md（CN narrative kernel）
            + lib/history-narratives/spanish-american-war-1898.en.md（EN sister file）
claim 总数:  28
🚩 红旗数:   4 — 1 个 ⚠️downgrade-wording（Maine 死亡数/原因措辞）、1 个 ✋flagged（菲律宾平民死亡数下限引用，主流可接受但应透明）、2 个已透明标注的合成/争议（菲律宾少年合成桥接人物 + water cure 措辞）；无 needs-source、无 flagged 事实硬伤
```

**一句话总评**：史实地基**稳**——核心日期（1898.2.15 Maine / 5.1 马尼拉湾 / 7.7 夏威夷吞并 / 12.10 巴黎条约 / 1899.2.4 菲美战争 / 1899-1900 门户开放 / 1900 义和团八国联军 / 1901 Boxer Protocol）、人名生卒、territorial cessions（古巴/波多黎各/关岛/菲律宾 $20M）、Teller vs Platt、夏威夷推翻 1893、瓜分中国的具体租借地均对得上权威来源（Wikipedia、State Dept Office of the Historian、National Archives、Britannica、Library of Congress World of 1898）。红旗集中在 **Maine 死亡人数的区间措辞 + 原因（1976 Rickover 调查）的表述**（narrative 已显式标注「无法查清 / 倾向煤舱自燃」）、**菲律宾平民「至少 20 万」死亡数**（主流引用区间下限，narrative 用「至少」稳妥但应留底）、以及 **两个合成桥接人物 + water cure 的处理**（narrative 已透明标注合成、未伪造档案）。无未标注的合成人物冒充史料问题。§8 中国桥的瓜分租借地、义和团、八国联军、辛丑赔款 4.5 亿两均核实通过。

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
| 1 | "1898 年 2 月 15 日晚 9:40 USS Maine 在哈瓦那港爆炸沉没，260 多名水兵死亡"（§1/§2 L4/§4-3/附录 A）| date+number | encyclopedia | History.com / Britannica / US Naval History：1898-02-15 21:40 哈瓦那港爆炸；死亡数主流为 **266**（另有 260/268 说）。narrative 用「260 多名」在区间内 | ✅verified（数字措辞见红旗 #1）|
| 2 | "Maine 爆炸原因当时无法查清；1976 美国海军调查倾向认为船内煤舱自燃引爆弹药、非西班牙所为"（§4-3/§10-1/附录 A）| causal | encyclopedia | 1976 Rickover/海军调查：most likely cause = 煤舱起火点燃弹药库，非外部水雷/破坏。原因至今学界无定论 | ✅verified（措辞已用「倾向 / 非已证实」，稳妥；见红旗 #1）|
| 3 | "de Lôme 信 1898.2.9 被偷登报，嘲笑 McKinley 软弱"（§4-3/附录 A/B）| date | encyclopedia | State Dept Office of the Historian / Hearst NY Journal 1898-02-09 头版「Worst Insult...」；de Lôme 私信批 McKinley weak | ✅verified |
| 4 | "1898.5.1 Dewey 在马尼拉湾全歼西班牙太平洋舰队，美方无一人战死"（§2 L4/§3/§4-5/附录 A）| date+number | encyclopedia | 维基/LoC World of 1898：Battle of Manila Bay 1898-05-01；西班牙舰队被毁，美方无战斗死亡（实有 1 人因病/心脏死，narrative 用「无一人战死」指战斗死亡，标准教学表述）| ✅verified |
| 5 | "Roosevelt 任海军部副部长，趁上司 John Long 外出发电报令 Dewey 备战"（§3/§4 背景）| motive+inference | encyclopedia | Bill of Rights Institute / 标准叙事：TR 为 Asst. Sec. of Navy；1898-02 趁 Long 离开发电报令 Dewey squadron 备战盯马尼拉。广传且有据 | ✅verified |
| 6 | "圣胡安岭陆战 1898.7，Rough Riders + 黑人第 9/10 骑兵团取胜；TR『一生中最伟大的一天』"（§2 L4/§3/§4-6/§10-5）| date+quote | encyclopedia | 维基 Battle of San Juan Hill：1898-07-01；Rough Riders 攻 Kettle Hill，9th/10th Cavalry（Buffalo Soldiers）同战；TR "San Juan was the great day of my life" | ✅verified |
| 7 | "国会通过 Teller 修正案（1898）声明美国无意吞并古巴"（§2 L3/§4-4/§5B/附录 A/B）| primary | encyclopedia | 维基 Teller Amendment：1898-04，声明 no disposition/intention to exercise sovereignty over Cuba | ✅verified |
| 8 | "Platt 修正案（1901）给美国干涉古巴、设基地（关塔那摩）的权力"（§2 L3/§4-12/§5B/§6/附录 A/B）| primary | encyclopedia | 维基 Platt Amendment：1901；US 保留干涉权 + 限制古巴外交借债 + naval base（Guantánamo）| ✅verified |
| 9 | "夏威夷女王 Liliʻuokalani 1893.1.17 在美裔商人+美军陆战队撑腰下被推翻"（§4-7/§10-7/附录 A/C）| date+causal | encyclopedia | 维基 Overthrow of the Hawaiian Kingdom：1893-01-17；Committee of Safety + 美 minister Stevens 调 USMC 陆战队；Dole 任临时政府总统 | ✅verified |
| 10 | "1898.7.7 McKinley 签 Newlands 联合决议吞并夏威夷（绕过条约 2/3 门槛，只需简单多数）"（§4-7/附录 A）| date | encyclopedia | National Archives / 维基 Newlands Resolution：House Joint Res. 259，1898-07-07 McKinley 签署；joint resolution 只需简单多数 | ✅verified |
| 11 | "过半数夏威夷原住民曾联名请愿反对吞并"（§4-7/§10-7）| number | primary | National Archives「1897 Petition Against Annexation」：Kūʻē Petitions 签名约 21,000+，占当时原住民过半 | ✅verified |
| 12 | "1898.12.10 巴黎条约：西班牙放弃古巴，割波多黎各/关岛，以 2000 万美元卖菲律宾"（§2 L4/§4-8/§5/附录 A/B）| date+number | encyclopedia | State Dept / 维基 Treaty of Paris (1898)：1898-12-10 签；Cuba 独立、Puerto Rico+Guam 割让、Philippines 售 $20M | ✅verified |
| 13 | "整场对西班牙战争约十周；John Hay 称『a splendid little war』"（§2 L4/§4-8/附录 A）| quote | encyclopedia | 维基/LoC：April-Aug 1898 约 10 周；John Hay 1898-07 致 TR 信 "a splendid little war"（Hay 原话有据，常被引为对整场战争的概括）| ✅verified |
| 14 | "美参议院 1899.2.6 仅以一票之差批准巴黎条约（留下菲律宾）"（§4-9/附录 A）| date+number | encyclopedia | State Dept / 维基：Senate 1899-02-06 ratify Treaty of Paris 57-27，超 2/3 仅一票余量（常表述为「by one vote」）。narrative「一票之差」为标准教学表述 | ✅verified（措辞见备注）|
| 15 | "菲美战争 1899.2.4 爆发，1902.7.4 美宣布结束；Aguinaldo 1901.3.23 被俘"（§2 L4/§3/§4-10/附录 A/C）| date | encyclopedia | State Dept milestones / 维基 Philippine-American War：开火 1899-02-04；Aguinaldo 1901-03-23 被俘；US 宣布结束 1902-07-04 | ✅verified |
| 16 | "菲美战争：4200+ 美军、约 2 万菲律宾战士战死，至少 20 万菲律宾平民死亡（末期含霍乱）"（§3/§4-10/§6/§9/§10-3/§10-4/附录 A）| number | encyclopedia | 维基 Philippine-American War：US 战死 >4,200；菲战士 ~16,000-20,000；平民死亡估计 **at least 200,000**（部分估计更高 250k-1M+）。narrative 用「至少 20 万」取主流下限 | ✅verified（见红旗 #2，引用下限须透明）|
| 17 | "McKinley 1898.12.21 发 Benevolent Assimilation 公告；核心句『benevolent assimilation, substituting the mild sway of justice and right for arbitrary rule』"（§4-10/§5C/附录 A）| date+quote | primary | 维基 Benevolent assimilation：1898-12-21 memorandum to Sec. of War；引文为公认原文逐字 | ✅verified |
| 18 | "John Hay 门户开放照会：第一份 1899.9.6，第二份 1900（加『中国领土与行政完整』）"（§4-11/§5D/§8/附录 A/B）| date | encyclopedia | State Dept「Hay and China」/ 维基 Open Door Policy：First Note 1899-09-06；Second Note 1900-07 加 territorial & administrative integrity | ✅verified |
| 19 | "扩张派理由（命运/海军安全/中国市场/传教）vs 反帝派理由（被治者同意/背叛 1776/种族主义）"（§1/§7/§9/附录 D）| causal+motive | textbook | APUSH CED Topic 7.2-7.3 标准「debate over empire」框架；扩张/反帝两阵营动机为主流史学共识 | ✅verified |
| 20 | "反帝同盟 1898 成立，含 Mark Twain / Andrew Carnegie / William Jennings Bryan；反帝派内部动机不一（原则 vs 种族偏见）"（§1/§3/§7/§10-8/附录 C）| motive | encyclopedia | 维基 American Anti-Imperialist League：founded 1898-06-15；Twain/Carnegie/Bryan 为成员；史学界公认 League 内部含原则派与种族派两种动机 | ✅verified |
| 21 | "《独立宣言》『…deriving their just powers from the consent of the governed』为反帝派核心武器"（§1/§5A/§7/附录 B）| primary+quote | primary | 1776 Declaration of Independence 原文逐字；反帝派援引「consent of the governed」反对吞并为主流史学 | ✅verified |
| 22 | "1890 人口普查宣布西部边疆关闭；Mahan《海权对历史的影响》1890 出版鼓吹强海军+海外基地"（§2 L2/§4-1/§7/附录 A）| date | encyclopedia | 维基 Frontier Thesis / 1890 Census：frontier「closed」；Alfred T. Mahan *The Influence of Sea Power upon History* 1890 | ✅verified |
| 23 | "1897-1898 列强瓜分中国：德占胶州湾、俄租旅顺大连、英租威海卫+长江、法租广州湾、日盯福建"（§1/§8/§10-6/附录 B/D）| date+representativeness | encyclopedia | 维基 Scramble for China / Spheres of influence：1898 德 Jiaozhou 99-yr lease（借两传教士被杀）、俄 Port Arthur/Dalian、英 Weihaiwei+Yangtze、法 Guangzhouwan、日 Fujian | ✅verified |
| 24 | "1900 义和团事件；八国联军（英法德俄美日意奥）约 4.5 万兵 1900.8 攻入北京；美也派兵"（§1/§8/附录 A/B）| number+date | encyclopedia | 维基 Eight-Nation Alliance / Boxer Rebellion：8 国 ~45,000 兵；1900-08-14 occupied Beijing；US 参与（含美军第一次为护侨利益踏华土）| ✅verified |
| 25 | "1901《辛丑条约》(Boxer Protocol) 清赔款白银 4.5 亿两、分 39 年偿付、超清政府年财政收入"（§8/附录 A）| number | encyclopedia | 维基 Boxer Protocol：1901-09-07；450 million taels of silver，39 年偿付，超 annual tax revenue | ✅verified |
| 26 | "1898 = 清光绪二十四年；瓜分前 1894-1895 甲午战败于日本致清廷力衰"（§8）| date+causal | encyclopedia | 光绪 1875 即位，1875+23=1898（光绪 24 年，算术正确）；1894-95 First Sino-Japanese War 清败致列强 scramble。§8 为真中国段，cultural term 允许 | ✅verified |
| 27 | "波多黎各至今是美国『未合并领土』，居民是美国公民却不能在总统大选中投票；菲律宾 1946 独立；关塔那摩基地用到今天"（§6）| representativeness | encyclopedia | 维基 Puerto Rico（unincorporated territory，居民 US citizens 1917 起，无总统大选选举人票）；Philippines 1946 独立；Guantánamo 现役。属当代延续事实 | ✅verified |
| 28 | "美军在菲律宾用焚村、平民集中（concentration）、water cure（灌水刑）逼供等手段镇压"（§3/EN §3）| representativeness | encyclopedia | 维基 Philippine-American War / water cure (torture)：美军使用 reconcentration camps、village burning、water cure 有据，War Dept 曾调查。属有据但敏感措辞 | ✅verified（见红旗 #4，敏感措辞已中性化）|

---

## 🚩 红旗句（创始人必审）

> 按影响排序。无事实硬伤；#1/#2 为数字区间/引用下限的透明性，#3/#4 narrative 已自带透明标注或已中性化。

1. **[#1] Maine 死亡人数区间 + 爆炸原因的措辞**（§1/§2 L4/§4-3/§10-1/附录 A）
   - **问题**：死亡数主流为 **266**，另有 260/268 说；narrative 用「260 多名」是稳妥的区间表述。原因方面，1976 Rickover/海军调查倾向「煤舱自燃引爆弹药」，但学界**至今无定论**（也有学者仍持外部爆炸说）。
   - **narrative 现状**：§4-3/§10-1/附录 A **已显式标注**「当时无法查清」「1976 调查**倾向**认为是煤舱自燃，**非**已证实的西班牙袭击」——措辞已用「倾向」而非「确定」，处理合规。
   - **建议**：保持现状。**列此条仅为透明。** 提醒下游 storyboard 若引用 Maine 原因，必须沿用「原因至今无定论 / 1976 调查倾向内因」的措辞，**禁止**写成「西班牙炸了 Maine」或「已证实是煤舱自燃」。

2. **[#16] 菲律宾平民「至少 20 万」死亡数**（§3/§4-10/§6/§9/§10-3/附录 A）
   - **问题**：菲美战争平民死亡的学界估计**区间很宽**——主流下限约 **200,000**，但部分估计高达 250,000-1,000,000+（不同口径：直接战死 vs 含饥荒/疫病/霍乱）。narrative 统一用「**至少** 20 万」取主流下限并加「至少」，是最保守稳妥的口径。
   - **narrative 现状**：全篇一致用「至少 20 万」，并说明「大多死于战乱带来的饥荒和疫病（含末期霍乱）」——口径透明、保守。
   - **建议**：现状**合规且稳妥**。若想更完整，可在 storyboard historiography 节点一句话点出「估计区间从 20 万到上百万不等，取决于是否计入饥荒疫病」——但不必改 narrative。这是本 topic 数字类最高风险项，**保留「至少」二字是关键**，禁止下游改写成确定数。

3. **[#28 + 合成桥接人物] water cure 措辞 + 菲律宾少年/Roosevelt/Twain 视角的合成成分**（§3）
   - **问题**：① water cure（灌水刑）、焚村、平民集中是有据的美军镇压手段，但属高敏感内容；② DEFAULT 视角「吕宋岛村庄年轻人」是**合成桥接人物**（无名字、合成场景）。
   - **narrative 现状**：① water cure 已用中性、克制措辞（「甚至 water cure 逼供」），未渲染细节、未伪造个案档案，符合 anti-fab 红线；② §3 **已显式标注**「虚构桥接人物，身份完全写实」「不给确切姓名，因为这场战争里几十万菲律宾平民的死，历史大多没留下名字——而这恰恰是问题的一部分」。Roosevelt / Twain / McKinley / Dewey / Aguinaldo / Hay / Liliʻuokalani 均为**真实历史人物**，非合成。
   - **建议**：现状**合规**。合成桥接人物处理与样板 haitian-revolution 一致（透明标注「虚构桥接、身份写实、无名字」）。water cure 措辞已中性化。**无需改 narrative。**

4. **[#14 措辞] 巴黎条约「一票之差」批准**（§4-9/附录 A）
   - **问题**：参议院 1899-02-06 以 **57-27** 批准，超 2/3 门槛仅余一票（57 票 vs 需 56 票）。narrative 用「仅以一票之差」是标准教学表述，但严格说是「超门槛仅一票余量」而非「57 对 56」。
   - **建议**：现状可接受（「by one vote」是教科书通行表述）。若想更精确，可写「仅以超出三分之二门槛一票的微弱优势批准」。**低优先级。**

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | 视角 | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 吕宋岛村庄里的年轻人 | receiving-end (DEFAULT) | **合成桥接人物**（无名字），处境/史实背景写实 | ✅**已透明标注**（§3「虚构桥接人物，身份完全写实」「不给确切姓名，因为这场战争里几十万菲律宾平民的死，历史大多没留下名字——而这恰恰是问题的一部分」）|
| Theodore Roosevelt | actor / 扩张推手 | **真实历史人物**，生卒/职务/事迹皆有据 | N/A — 非合成 |
| Mark Twain（Samuel Clemens） | lonely-mediator | **真实历史人物**，反帝同盟立场有据；「连他一度支持」「黑条骷髅旗建议」均有据 | N/A — 非合成 |
| McKinley / Dewey / Aguinaldo / John Hay / Liliʻuokalani / Carnegie / Bryan | 配角 | **真实历史人物**，皆有据 | N/A — 非合成 |
| water cure / 焚村 / 平民集中（菲美战争镇压手段） | receiving-end 场景 | 手段**有据**（War Dept 调查、维基），narrative 用作概括性背景、未伪造具体个案档案 | ✅中性概括，未排成史料档案样式 |

**结论**：本 topic 唯一的合成桥接人物是 DEFAULT「吕宋岛村庄年轻人」，已在 §3 透明标注为虚构、身份写实、无名字（与样板 haitian-revolution 的「甘蔗田少年」处理一致）。其余主角（Roosevelt / Twain）及全部配角均为真实历史人物。镇压手段（water cure 等）为有据概括、未伪造档案。**无未标注的、冒充史料档案样式的合成。**

---

## 备注

- **直接引语分层核验**（本 topic 较高风险类）：
  - *真实一手文本*：《独立宣言》"...consent of the governed"（1776）/ McKinley「Benevolent Assimilation」公认逐字引文（1898.12.21）/ Teller & Platt 修正案条文 —— 均对得上一手/标准文本。
  - *有据的人物原话*：TR "San Juan was the great day of my life" / John Hay "a splendid little war"（致 TR 私信）—— 均有据。Mark Twain「黑条骷髅旗」建议有据。
  - **无把演绎/传闻排成档案原话的违规。** 门户开放照会 narrative 用「逻辑/要求」概括，**未**伪造逐条原文引证，合规。
- **轻微措辞**：①「一票之差」批准巴黎条约（实为超 2/3 门槛仅一票余量，57-27）—— 教科书通行表述，见红旗 #4；② 马尼拉湾「无一人战死」指**战斗**死亡（实有 1 人因病/心脏死），标准教学表述。
- **§8 同代中国**：为「真中国」段落，按 README 写作约束第 8 节例外，可正常使用中国术语（光绪、慈禧未在正文硬写、义和团、瓜分、租借地、辛丑条约）；已核 cultural ban——讲美/西/古/菲段落全程用真实术语（Maine、yellow journalism、Rough Riders、Aguinaldo、Open Door），**无**中国特定词误用于非中国段落。
- **Rule 0 高敏感自检**：① 帝国扩张的**支持**（命运/海军/市场/传教）与**批评**（被治者同意/背叛 1776/种族）两面并陈（§1/§7/§9/附录 D）✅；② 反帝派内部「原则 vs 种族」分裂并陈（§3/§7/§10-8）✅；③ 义和团两面（真实反抗 + 对外国人/中国基督徒暴力）并陈（§8 Rule 0 段）✅；④ 门户开放两面（限制赤裸瓜分 + 从未问过中国）并陈（§5D/§8）✅；⑤ Roosevelt 不漫画化（理想/勇气/偏见混合）✅。**无单极化。**
- **算术自检**：1898 − 1776 = 122 年（立国到成帝国）；菲美战争 1899-1902 = 3 年（narrative「打了三年」正确）；对西班牙战 April-Aug 1898 ≈ 10 周（正确）；1898 = 光绪 24 年（光绪 1875 即位，1875+23=1898，正确）；八国联军 8 国 ×（narrative 列全：英法德俄美日意奥 = 8，正确）；辛丑赔款 4.5 亿两分 39 年（1901+39=1940，史载偿付计划至 1940 年，正确）。**全部自检通过。**
- **用到的外部核实来源**：Wikipedia（Spanish-American War / USS Maine (1890) / Treaty of Paris (1898) / Philippine-American War / Emilio Aguinaldo / American Anti-Imperialist League / Benevolent assimilation / Open Door Policy / Boxer Rebellion / Eight-Nation Alliance / Boxer Protocol / Scramble for China / Overthrow of the Hawaiian Kingdom / Newlands Resolution / Battle of San Juan Hill / Teller Amendment / Platt Amendment）、U.S. State Dept Office of the Historian（spanish-american-war / hay-and-china / philippine-american-war / yellow-journalism）、National Archives（Newlands Resolution / 1897 Petition Against Annexation of Hawaii）、Britannica（destruction of the Maine / Treaty of Paris 1898 / Philippine-American War）、Library of Congress（World of 1898 / Anti-Imperialist League / Theodore Roosevelt）、Bill of Rights Institute（Roosevelt and the Rough Riders）、History.com（Feb 15 1898 the Maine explodes / Spanish-American War）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2 —— 所有高风险 claim 均有来源或已透明标注/可降级措辞，**无 needs-source 缺口**。需创始人**留意**的是红旗 #1（Maine 原因/死亡数措辞——下游禁止改写成确定式）与红旗 #2（菲律宾平民「至少 20 万」——下游须保留「至少」、禁止改成确定数）；#3（合成桥接人物 + water cure）narrative 已透明处理；#4 为低优先级措辞精确化。本课为**高敏感 topic**，Rule 0 五项自检均通过、无单极化。
