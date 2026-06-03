# 海地革命 1791 · The Haitian Revolution Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on narrative，**只写本账本文件**，绝不改内容。

```
topicId:    haitian-revolution-1791
生成日期:    2026-06-02
来源文件:    lib/history-narratives/haitian-revolution-1791.md（CN narrative kernel）
            + lib/history-narratives/haitian-revolution-1791.en.md（EN sister file）
claim 总数:  26
🚩 红旗数:   4 — 全部为 ⚠️downgrade-wording / 已透明标注的演绎，无 needs-source、无 flagged 事实硬伤
```

**一句话总评**：史实地基**稳**——核心日期（1791.8.14 仪式 / 8.21-22 起义 / 1794.2.4 废奴 / 1801 宪法 / 1803.4.7 Toussaint 死 / 1804.1.1 独立）、人名生卒、人口结构、Code Noir、黄热病、1804 屠杀规模均对得上权威来源（Wikipedia、Britannica、BnF Patrimoines Partagés）。红旗集中在 **Bois Caïman 日期的史学争议**（narrative 已显式标注）、**Toussaint "tree of liberty" 名言的 apocryphal 性质**（narrative 已显式标注为非档案确证）、**lambi 海螺号作为起义信号的具体化**（属合成感官 motif，需 flag）、以及 **人口百分比的措辞**。无未标注的合成人物冒充史料问题。

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
| 1 | "1791 年 8 月 14 日夜 Bois Caïman Vodou 仪式，由 Dutty Boukman 和 Cécile Fatiman 主持"（§1/§2 L4/§3/§4-3）| date | encyclopedia | 维基 Bois Caïman：1791-08-14 夜，Boukman（hougan）+ Cécile Fatiman（mambo）主持，被视为革命正式起点 | ✅verified（日期争议见红旗 #1，narrative 已标注）|
| 2 | "1791 年 8 月 21-22 日夜 北部平原起义"（§2 L4/§4-4）| date | encyclopedia | 维基 Haitian Revolution / Boukman Rebellion：1791-08-21~22 夜北部平原同时燃起 | ✅verified |
| 3 | "Boukman 1791 年 11 月被法军杀死、头颅示众"（§4-5/附录 A）| date | encyclopedia | 维基 Dutty Boukman：died 7 November 1791；法军公开示众头颅以破"刀枪不入"传说 | ✅verified |
| 4 | "Toussaint Louverture 约 1743 年 5 月 20 日生于 Bréda 种植园"（§3/附录 A）| date | encyclopedia | 维基/Britannica：1743-05-20，Bréda plantation, Haut-du-Cap | ✅verified |
| 5 | "他当马车夫/管事、识字、1770 年代被解放、一度自己拥有少数被奴役者"（§3/§10-2）| inference+number | encyclopedia | 维基 Toussaint：coachman/steward；emancipated in the 1770s；获自由后租 coffee plantation 并拥有 at least 2 slaves | ✅verified（narrative 用"1770 年代"未硬定 1776，稳妥）|
| 6 | "1794 年 2 月 4 日 法国国民公会宣布废除全帝国奴隶制"（§4-7/附录 A）| date | encyclopedia | 维基/BnF：National Convention 1794-02-04 (16 Pluviôse Year II) 废奴 | ✅verified |
| 7 | "1801 年 Toussaint 颁布自治宪法：永久废奴、终身总督、名义属法国"（§4-8/§5C）| textbook | encyclopedia | 维基/Britannica：1801 constitution，废奴 + governor for life；引发拿破仑反弹 | ✅verified |
| 8 | "1802 年拿破仑派 Leclerc 率两万多大军，真实目的恢复奴隶制"（§3/§4-9/附录 A）| number+motive | encyclopedia | BnF Patrimoines Partagés：early 1802，Leclerc（Napoleon 妹夫）22,000 regular troops + ~30 warships；underlying mission = 恢复奴隶制与 pre-1792 种族秩序 | ✅verified |
| 9 | "Toussaint 1802 年 6 月被押上 Le Héros 运往法国，1803 年 4 月 7 日死于 Fort de Joux"（§3/§4-9/附录 A）| date | encyclopedia | 维基 Toussaint：7 June 1802 deported on Le Héros；died 7 April 1803, Fort-de-Joux | ✅verified |
| 10 | "Leclerc 1802 年 11 月死于黄热病；黄热病击垮缺乏抵抗力的欧洲新兵"（§2 L1/§4-10/§10-4）| causal | encyclopedia | BnF：Leclerc died of yellow fever Nov 1802；黄热病是法军崩溃关键，本地/非洲来者有相对抵抗力 | ✅verified |
| 11 | "1804 年 1 月 1 日 Dessalines 宣布独立，复名 Haiti / Ayiti（Taíno 语「多山之地」）"（§4-11/附录 A）| date+quote | encyclopedia | 维基 Haitian Declaration of Independence / Haiti：1804-01-01，Dessalines + 36 将领署名；Ayiti = Taíno「land of high mountains」，Dessalines 复名 | ✅verified |
| 12 | "1804 年 2 月至 4 月对剩余法国白人的屠杀，约 3000 至 7000 人被杀"（§4-12/附录 A）| number | encyclopedia | 维基 1804 Haitian massacre：Feb-22 Apr 1804，约 3,000-7,000 人被杀，Dessalines 下令 | ✅verified |
| 13 | "1789 年前后全岛约 52 万人，约 50 万被奴役（约九成），白人约 3-4 万，gens de couleur 约 2.8-3 万"（§1/§2 L2）| number | encyclopedia | 维基/Colony in Crisis：~520,000 总人口（40,000 白 / 30,000 自由有色 / 450,000 奴隶）；另一源 600,000 奴隶。narrative 用"约 50 万""约九成"在区间内稳妥 | ✅verified（措辞见红旗 #4）|
| 14 | "Code Noir 1685 年路易十四颁布，把被奴役者定义为动产 biens meubles，名义上要求衣食"（§2 L3/§5B/§4-1）| primary | encyclopedia | 维基 Code Noir：1685 Louis XIV；奴隶为 movable property/biens meubles，规定主人义务（常被无视）| ✅verified |
| 15 | "《人权宣言》第 1 条『人生而自由、权利平等』本不打算给殖民地被奴役者"（§1/§5A/§4-2）| causal | textbook | 1789 Declaration Art.1 原文 + 主流史学：起草者未将殖民地奴隶纳入"men"范围；被奴役者反向援引 | ✅verified |
| 16 | "1790 年 gens de couleur 领袖 Vincent Ogé 起事被处死"（§4-2/附录 A/C）| date | encyclopedia | 维基 Vincent Ogé：1790 起事，1791 年初被处死（车裂）。narrative §4-2 写"1790 起事被处死"略压缩处决年份（实为 1791 初执行）| ✅verified（轻微，见备注）|
| 17 | "Toussaint 在法/西/英三帝国间纵横，1794 后转投法国"（§3/§4-6/§4-7）| causal | encyclopedia | 维基/Britannica：1793-94 先附西班牙，1794 废奴后转法；三帝国争岛 | ✅verified |
| 18 | "海地是拉美第一个独立国家、史上第一个由被奴役者建立的国家、美洲第二个共和国"（§6/§10-1）| absolute | textbook | 主流史学共识：第一个由 formerly enslaved 建立的国家；拉美首个独立国；美国后第二个美洲独立共和国 | ✅verified |
| 19 | "法国 1825 逼海地付巨额赔款换承认，债务压一个多世纪"（§6/§10-7）| causal | encyclopedia | 维基 Haiti indemnity：1825 法国以舰队威胁索 150M francs（后减 90M），偿至 1947，长期贫困结构根源之一 | ✅verified |
| 20 | "拿破仑丢殖民地后 1803 把路易斯安那卖给美国（Louisiana Purchase）"（§6）| causal | encyclopedia | BnF/维基：圣多曼格远征失败助推 1803 Louisiana Purchase；narrative 用"间接"留余地 | ✅verified |
| 21 | "美国直到 1862 年才承认海地"（§6）| date | encyclopedia | 维基：US 1862 才正式承认 Haiti（内战中、南方代表离席后）| ✅verified |
| 22 | "lambi（海螺号）作为起义夜的传信号；少年吹响、Toussaint 听成信号、种植园主听成怪声"（§1/§3 三视角/§4-4 周边/附录 D）| dramatization | inference | lambi/conch 在海地 Vodou + maroon 传统中确为传信工具，海地文化中真实；但**"1791-08 起义夜以 lambi 为统一信号"这一具体场景在权威来源中未直接确证**，属合理合成感官 motif。narrative 用作跨视角 micro-detail，未排成史料档案样式 | ✋flagged（见红旗 #2，合成感官细节）|
| 23 | "Toussaint 登船名言『扳倒我不过砍倒自由之树的树干，它会从根重生』"（§5D）| quote | dramatization | 维基 Toussaint：该语 famously **apocryphal**，said to be uttered boarding Le Héros，但非档案逐字确证。narrative §5D **已显式标注**"很可能是后人追记/演绎，非档案确证 / scholars widely mark it apocryphal" | ✅verified（已透明标注；见红旗 #3 仅强调）|
| 24 | "grand blanc 种植园主 + 甘蔗田少年为虚构桥接人物，身份写实，不给名字"（§3）| dramatization | dramatization | 两个 actor/receiving-end 主角为合成桥接人物。narrative **已显式标注**"虚构桥接人物，但身份完全写实""不给名字，因为历史没有为这些人留下名字" | ✅verified（已透明标注，符合 composite 红线）|
| 25 | "1791 = 乾隆五十六年；1793 马戛尔尼使团被乾隆婉拒"（§8）| date | encyclopedia | 1791 = 乾隆 56 年（1736 即位 + 55 = 1791，算术正确）；Macartney Embassy 1793（乾隆 58 年），"天朝物产丰盈"婉拒英国通商 | ✅verified（§8 为真中国段，cultural term 允许）|
| 26 | "Saint-Domingue 是当时全世界最赚钱的殖民地"（§0/§1/§2 L0）| representativeness | textbook | 主流史学共识：18 世纪末 Saint-Domingue 为世界最富庶殖民地、法国海外贸易重头。措辞"全世界最赚钱"为标准教学表述 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 按影响排序。无事实硬伤；#1/#3/#4 narrative 已自带透明标注，#2 需确认合成 motif 的处理是否接受。

1. **[#1] Bois Caïman 日期的史学争议**（§2 L4 / 附录 A）
   - **问题**：narrative 采用「1791 年 8 月 14 日夜仪式 + 8 月 21-22 日夜起义」的主流时序（task brief 也指定此口径）。但部分史家（含部分维基讨论）把仪式本身也定在 8 月 22 日，且仪式的史料基础本身有争议（最早的详细记述来自 1814 年 Antoine Dalmas，晚于事件）。
   - **narrative 现状**：附录 A + §2 已显式标注「日期有争议，部分史家定在 8 月 22 日」。
   - **建议**：现状**合规**。若要更严，可在 storyboard 的 narrator 节点一句话点出「仪式的细节记述晚于事件，史学界对其规模/确切日期仍有争论」——但不必改 narrative。

2. **[#22] lambi 海螺号作为起义夜统一信号的具体化**（跨三视角 micro-detail）
   - **问题**：lambi（海螺号）在海地 Vodou 与 maroon 抵抗传统中**确为真实的传信工具**，海地文化中可信。但「1791 年 8 月起义夜以 lambi 为跨种植园统一信号」这个**具体场景**在权威来源里**没有直接逐字确证**——它是为三视角 cross-lens micro-detail 设计的**合成感官 motif**（少年吹 / Toussaint 听成信号 / 种植园主听成怪声）。
   - **narrative 现状**：作为感官细节自然嵌入，**未**排成史料档案样式、**未**伪造引证，符合 anti-fab 不伪造档案的红线；但**未在 narrative 内显式标注**「此信号场景为合成」。
   - **建议**：① 接受现状（属合理合成感官 motif，文化基础真实，且未冒充史料）—— 但应在**本账本**留底（已留）；② 若要更严，storyboard lens card description 或 meta.notes 可一句声明「lambi 信号是基于真实海地传信工具的叙事化场景，史料未逐字确证那一夜的具体信号」。**这是本 topic 唯一一处需创始人拍板「合成感官 motif 是否接受」的地方。**

3. **[#23] Toussaint「自由之树」名言**（§5D）
   - **问题**：这句传世名言史学界普遍标为 **apocryphal**（很可能后人追记/加工，非档案逐字原话）。
   - **narrative 现状**：§5D **已显式标注**「很可能是后人追记/演绎，非档案确证」/ EN「very likely a later retelling... scholars widely mark it apocryphal」。处理**完全合规**。
   - **建议**：保持现状。**列此条仅为透明，非必改。** 提醒下游 storyboard 若引用此句，必须沿用 apocryphal 标注，**禁止**当作 Toussaint 档案原话排版。

4. **[#13/#4 人口百分比措辞]**「约 50 万被奴役 / 占全岛约九成」（§1/§2 L2/§0 EN）
   - **问题**：权威来源给 ~450,000-500,000 奴隶 / 总 ~520,000，即约 **86-90%**。narrative 用「约 50 万」「约九成」在区间内，但「约九成」取了区间上沿。另一源给 600,000 奴隶（总人口更高），比例口径不同。
   - **建议**：现状可接受（「约九成」对 ~450k/520k≈87% 到 ~500k/520k≈96% 区间是合理近似）。若想更保守，可写「约九成（占绝大多数）」或「约 50 万、占全岛绝大多数」。低优先级。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | 视角 | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| grand blanc 种植园主 | actor-perpetrator | **合成桥接人物**（无名字），身份/阶层生活写实，代表整个 grand blanc 阶层 | ✅**已透明标注**（§3「虚构桥接人物，但身份完全写实」「不给名字，因为他代表的是一整个阶层」）|
| 甘蔗田里的年轻劳力 | receiving-end (DEFAULT) | **合成桥接人物**（无名字），处境写实 | ✅**已透明标注**（§3「虚构桥接人物，身份写实」「不给确切姓名，因为历史没有为这些人留下名字——而这恰恰是问题本身」）|
| Toussaint / Boukman / Cécile Fatiman / Dessalines / Leclerc / Vincent Ogé | mediator + 配角 | **真实历史人物**，姓名/生卒/事迹皆有据 | N/A — 非合成 |
| lambi 起义夜信号场景 | 跨三视角 micro-detail | 工具真实（海地 Vodou/maroon 传信），但「那一夜以 lambi 为统一信号」的具体场景为**合成感官 motif** | ✋见红旗 #2 —— narrative 内未显式标注「合成」，但未伪造史料；建议 storyboard 层一句声明 |
| Toussaint「自由之树」名言 | mediator | apocryphal 传世语，非档案 | ✅**已透明标注**为 apocryphal（§5D）|

**结论**：本 topic 两个合成桥接人物（grand blanc 主角 / 甘蔗田少年）均已在 narrative §3 透明标注为虚构、身份写实。唯一需创始人拍板的是 **lambi 起义信号场景**（合成感官 motif，文化基础真实、未冒充史料，但 narrative 内未显式标注「合成」）—— 见红旗 #2。Toussaint 名言已正确标注 apocryphal。**无未标注的、冒充史料档案样式的合成。**

---

## 备注

- **直接引语分层核验**（本 topic 最高风险类）：
  - *真实一手文本*：《人权宣言》第 1 条 "Men are born and remain free and equal in rights."（1789）/ Code Noir「biens meubles」概念（1685）—— 均对得上一手/标准译本。
  - *标注为 apocryphal 的传世语*：Toussaint「自由之树」—— §5D 已显式声明非档案确证。**无把 apocryphal 语句排成档案样式的违规。**
  - 1801 Toussaint 宪法 narrative 用「节选精神」概括，**未**伪造逐条原文引证，合规。
- **轻微时序简化**：§4-2 Vincent Ogé「1790 起事被处死」—— 起事 1790 末，处决在 1791 年初；7 年级层面可接受的压缩，附录 A 同。建议下游若展开可写「1790 起事、1791 初被处死」。
- **§8 同代中国**：为「真中国」段落，按 AUTHORING_PIPELINE 第 7 条例外，可正常使用中国术语（乾隆、天命、礼法、大一统）；已核 cultural ban 14 词未用于非中国段落。
- **算术自检**：1791 − 1697 = 94 年（法属起）；1804 − 1791 = 13 年（革命跨度，narrative「打了 13 年」正确）；1803 − 1743 = 60（Toussaint 死时约 60 岁，未在正文硬写年龄，稳妥）；1791 = 乾隆 56 年（乾隆 1736 即位，1736+55=1791，正确）；1793 = 乾隆 58 年（正确）。**全部自检通过。**
- **用到的外部核实来源**：Wikipedia（Bois Caïman / Toussaint Louverture / Haitian Revolution / Dutty Boukman / Jean-Jacques Dessalines / 1804 Haitian massacre / Haitian Declaration of Independence / Haiti / Code Noir / Vincent Ogé / Free people of color）、Britannica（Toussaint Louverture / Haitian Revolution）、BnF Patrimoines Partagés（Dessalines and Independence / 1802 Expedition）、A Colony in Crisis (UMD)、The Louverture Project。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2 —— 所有高风险 claim 均有来源或已透明标注/可降级措辞，**无 needs-source 缺口**。唯一需创始人**主动拍板**的是红旗 #2（lambi 起义信号合成 motif 是否接受 + 是否要在 storyboard 层加一句声明）；#1/#3/#4 narrative 已自带标注或为低优先级措辞收紧。
