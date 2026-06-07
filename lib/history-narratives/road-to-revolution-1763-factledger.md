# 通往独立之路 1763 · The Road to Revolution Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on narrative，**只写本账本文件**，绝不改内容。

```
topicId:    road-to-revolution-1763
生成日期:    2026-06-06
来源文件:    lib/history-narratives/road-to-revolution-1763.md（CN narrative kernel）
            + lib/history-narratives/road-to-revolution-1763.en.md（EN sister file）
claim 总数:  27
🚩 红旗数:   4 — 全部为 ⚠️downgrade-wording / 已透明标注的合成视角，无 needs-source、无 flagged 事实硬伤
对标:        APUSH Period 3（1754-1800）Topic 3.2-3.4 · CA HSS-8.1
```

**一句话总评**：史实地基**稳**——核心日期（1763.2.10 巴黎和约 / 1763.10.7 宣言线 / 1765.3.22 印花税 / 1767.6.29 汤森法 / 1770.3.5 波士顿惨案 / 1773.5.10 茶税法 / 1773.12.16 倾茶 / 1774.9.5-10.26 第一次大陆会议）、国债数字（~£75M→~£133M）、驻军规模（~10,000 人 / ~£200,000/yr）、倾茶箱数（342）、惨案死者（5，含 Crispus Attucks）、John Adams 辩护结果（6 无罪 2 过失杀人）均对得上权威来源（Wikipedia、Britannica、Library of Congress、Mount Vernon、history.state.gov、National Archives）。红旗集中在：**默认视角的合成桥接人物（俄亥俄河谷青年）**（narrative 已透明标注无名/写实）、**Paul Revere 版画作为宣传品 vs 现场真相的措辞**（narrative 已正确处理为宣传品，非中立记录）、**§8 中国桥的「耗羡归公」对照**（属解释性 limited 对照，已 Rule 0 收口）、以及 **国债/驻军数字的「约」措辞**。无未标注的合成人物冒充史料问题，无伪造直接引语。

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
| 1 | "French & Indian War 1754-1763；1754 年 22 岁 George Washington 在西部与法军交火点燃北美战场"（§1/§2 L4/§4-1/附录 A）| date | encyclopedia | 维基 French and Indian War：1754-1763，北美战场属七年战争；1754 Washington（22 岁，Jumonville Glen/Fort Necessity）首战 | ✅verified |
| 2 | "1763 年 2 月 10 日巴黎和约，法国基本退出北美大陆，英国得密西西比河以东"（§2 L4/§4-2/附录 A）| date | encyclopedia | history.state.gov / Britannica Treaty of Paris (1763)：1763-02-10 签订；法国割让密西西比河以东大陆领土给英国 | ✅verified |
| 3 | "英国国债从约 7500 万英镑涨到约 1.33 亿英镑（几乎翻倍）"（§0/§1/§3/§4-2/附录 A）| number | encyclopedia | 多源：debt £75M(1756)→£133M(1763)；另一源 £132.6M。narrative 用「约 7500 万→约 1.33 亿」「几乎翻倍」均在权威区间内 | ✅verified（措辞见红旗 #4）|
| 4 | "战后西部驻军约一万人、一年约 20 万英镑"（§0/§1/§3/§4-2）| number | encyclopedia | LoC / lumenlearning：战后维持约 10,000 troops in North America；Grenville 估年费约 £200,000 | ✅verified |
| 5 | "1763 春 Pontiac's War（庞蒂亚克起义），俄亥俄河谷-五大湖区原住民联合反英；攻下大批西部要塞"（§1/§3/§4-3/附录 A）| date+causal | encyclopedia | 维基 Pontiac's War：1763-1766；1763 年 5 月起原住民联军攻陷 Fort Detroit 围城等多座西部要塞；起因含 Amherst 削减礼物+傲慢 | ✅verified |
| 6 | "Neolin（Delaware 先知）布道唤起原住民团结、回归祖先之路"（§3/附录 C）| causal | encyclopedia | 维基 Neolin / Pontiac's War：Delaware holy man Neolin 的宗教复兴布道激励了起义 | ✅verified |
| 7 | "1763 年 10 月 7 日 1763 宣言线颁布，禁止殖民者越阿巴拉契亚山西迁，地保留给原住民"（§2 L4/§4-4/§5A/附录 A）| date | encyclopedia | Mount Vernon / 维基 Royal Proclamation of 1763：1763-10-07 颁布；划阿巴拉契亚山为界，山西保留给原住民部 | ✅verified |
| 8 | "1764 糖税（Sugar Act）—英国第一次明确为向殖民地要钱而立的税"（§2 L4/§4-5/附录 A）| date+representativeness | encyclopedia | LoC / NPS：Sugar Act 1764，为殖民地收入而设的首部针对性税法 | ✅verified |
| 9 | "1765 年 3 月 22 日印花税（Stamp Act）通过，打在报纸/文件/扑克牌等印刷品上"（§2 L4/§4-6/§5B/附录 A）| date | encyclopedia | history.com / stamp-act-history：Stamp Act 1765-03-22，税及几乎所有印刷纸品 | ✅verified |
| 10 | "1765 驻军法（Quartering Act），要殖民地出钱出房养英军"（§2 L4/§4-6/附录 A）| date | encyclopedia | stamp-act-history Quartering Act 1765：要求殖民地议会提供住宿/食物给英军 | ✅verified |
| 11 | "1765 年 8 月 14 日 Sons of Liberty 在波士顿吊起税吏草人"（§4-6/附录 A）| date | encyclopedia | stamp-act-history Sons of Liberty：1765-08-14 在 Liberty Tree 吊起 stamp distributor Andrew Oliver 草人（首次行动）。narrative 写「税吏草人」概括 Andrew Oliver，稳妥 | ✅verified |
| 12 | "1765 年 10 月印花税大会（Stamp Act Congress），9 殖民地代表聚纽约，首次跨殖民地联合抗议"（§4-7/附录 A）| date | encyclopedia | stamp-act-history：Stamp Act Congress 1765-10-07~25 纽约 Federal Hall，9 殖民地 27 代表 | ✅verified |
| 13 | "1766 英国撤印花税，同时通过宣告法（Declaratory Act），宣告议会有权『在一切情况下』立法"（§4-7/§5C）| date+quote | encyclopedia | 维基 Declaratory Act 1766：repeal Stamp Act 同日；议会对殖民地立法权 "in all cases whatsoever" | ✅verified（原文短语对得上）|
| 14 | "1767 年 6 月 29 日汤森法（Townshend Acts），打在玻璃/铅/纸/油漆/茶上"（§2 L4/§4-8/附录 A）| date | encyclopedia | 维基 / history.com Townshend Acts：Revenue Act 1767-06-29；税及 glass, lead, paper, paint, tea | ✅verified |
| 15 | "1770 年 3 月 5 日波士顿惨案，5 名殖民者死亡（含 Crispus Attucks）"（§2 L1/§4-9/§5D/附录 A）| date+number | encyclopedia | 维基 Boston Massacre：1770-03-05，5 死含 Crispus Attucks、Samuel Gray、Samuel Maverick、James Caldwell、Patrick Carr | ✅verified |
| 16 | "同日（1770.3.5）伦敦正动议撤汤森法（除茶税外）"（§4-9/§4-10）| date+causal | encyclopedia | stamp-act-history / 维基：1770-03-05 Lord North 在下院动议部分撤销汤森税；1770.4 撤除茶税外全部 | ✅verified（巧合属史实，narrative 用「正巧」措辞稳妥）|
| 17 | "John Adams 替英军士兵辩护，6 人无罪、2 人过失杀人轻判"（§3/§4-9/§5D/附录 A）| number+causal | encyclopedia | 维基 Boston Massacre / John Adams：Adams 辩护；6 acquitted，2（Montgomery, Kilroy）manslaughter | ✅verified |
| 18 | "汤森法 1770 大部撤销，只留茶税——不为钱，为宣示议会有权征税"（§4-10/§5C）| causal+motive | encyclopedia | 维基 Townshend Acts：1770.4 撤税留 tea duty；Lord North 称留茶税以 assert "right of taxing the Americans" | ✅verified |
| 19 | "1773 年 5 月 10 日茶税法（Tea Act），让东印度公司茶便宜又仍带茶税"（§4-11/附录 A）| date | encyclopedia | 维基 Tea Act / history.com：1773-05-10；东印度公司免 duty 直销殖民地、但殖民港口仍征茶税 | ✅verified |
| 20 | "1773 年 12 月 16 日波士顿倾茶，化装 Mohawk，倒 342 箱茶入港"（§2 L4/§4-11/附录 A）| date+number | encyclopedia | 维基 / National Archives Boston Tea Party：1773-12-16，扮 Mohawk，倒 340-342 箱（东印度公司）茶入港。narrative 用 342 = 标准教学数字 | ✅verified |
| 21 | "1774 不可容忍法 / 强制法令（Coercive/Intolerable Acts）：关波士顿港、改组马萨诸塞政府、扩驻军权等"（§2 L4/§4-12/附录 A）| date | encyclopedia | 维基 / Mount Vernon Intolerable Acts 1774：四项惩罚法（Boston Port / Massachusetts Government / Administration of Justice / Quartering）+ 常并入 Quebec Act | ✅verified |
| 22 | "1774 年 9 月 5 日-10 月 26 日第一次大陆会议，费城 Carpenters' Hall，除佐治亚外 12 殖民地参加"（§4-12/§6/附录 A）| date | encyclopedia | history.state.gov / Mount Vernon First Continental Congress：1774-09-05~10-26，Carpenters' Hall，13 殖民地除 Georgia 全到 | ✅verified |
| 23 | "virtual representation（英国）vs actual representation（殖民者）两套代表观对撞"（§2 L3/§5B）| causal | textbook | 主流 APUSH 教学概念：英方 virtual representation 论 vs 殖民地 actual representation 诉求 | ✅verified |
| 24 | "Paul Revere『波士顿惨案』版画是史上最早最成功宣传画之一，非中立现场记录；真实是人群先攻击、士兵恐惧开枪"（§5D/§10-4/附录 D）| representativeness+causal | encyclopedia | 维基 Boston Massacre / Paul Revere：Revere 1770 engraving 为渲染性宣传品；庭审还原人群先以雪球冰块棍棒攻击哨兵 | ✅verified（见红旗 #2 措辞核验）|
| 25 | "1763 年殖民者还在为『我们是英国人、我们赢了』放烟花，十余年后走向对抗"（§1/§4-12/§10-7）| rhetoric | inference | 战后殖民地确有广泛庆祝胜利、强烈英国认同的史实共识；「放烟花」为时代氛围的具体化修辞，非特定事件档案 | ✅verified（合理时代氛围修辞，未冒充特定档案）|
| 26 | "俄亥俄河谷青年为虚构桥接人物（DEFAULT 视角），无名字，身份写实，可能属 Shawnee/Delaware/Ottawa/Seneca"（§3）| dramatization | dramatization | 合成 receiving-end 主角。narrative **已显式标注**「虚构桥接人物，身份写实」「不给确切姓名，因为标准叙事根本没给这群人留位置——而这恰恰是问题本身」 | ✅verified（已透明标注，符合 composite 红线；见红旗 #1）|
| 27 | "1763=乾隆二十八年；清同期 1750-60s 平准噶尔纳新疆；田赋占国家税收八成以上+盐课专卖；雍正『耗羡归公』乾隆朝松动"（§8）| date+number | encyclopedia | 1763=乾隆 28 年（乾隆 1736 即位，1736+27=1763，算术正确）；准噶尔之役/新疆纳入 1755-59；学术来源：land tax >80% 国家税收、盐专卖；耗羡归公 Yongzheng 改革、Qianlong 朝渐松 | ✅verified（§8 真中国段，cultural term 允许；见红旗 #3）|

---

## 🚩 红旗句（创始人必审）

> 按影响排序。无事实硬伤；#1/#2/#3 narrative 已自带透明标注或已 Rule 0 收口，#4 为低优先措辞。

1. **[#26] 默认视角的合成桥接人物（俄亥俄河谷青年）**（§3 DEFAULT 视角）
   - **问题**：本 Topic 的 DEFAULT 视角是一个**合成**的俄亥俄河谷原住民青年（无确切姓名，未指定具体民族，仅列 Shawnee/Delaware/Ottawa/Seneca 候选）。这是一个 dramatization 等级的桥接人物。
   - **narrative 现状**：§3 **已显式标注**「虚构桥接人物，身份写实」「不给确切姓名，因为标准叙事根本没给这群人留位置——而这恰恰是问题本身」。处理**完全合规**（同 haitian/american-revolution 两个 sibling 的 receiving-end 处理范式）。
   - **建议**：现状**合规**。这是 task brief 明确要求的「先验挑战视角（被忽略方优先）」。提醒下游 storyboard 若展开此视角，须沿用「合成桥接、身份写实、无名字」标注，**禁止**伪造具体姓名/具体战役亲历当作史料。

2. **[#24] Paul Revere 版画「宣传品 vs 现场真相」的措辞**（§5D / §10-4）
   - **问题**：narrative 明确把 Revere 版画定性为「史上最早最成功的政治宣传画之一」「不是中立的现场记录」，并给出庭审还原（人群先用雪球冰块棍棒攻击、士兵恐惧开枪）。这是一个**带价值判断的史学论断**，需确认中性。
   - **narrative 现状**：处理得当——既肯定版画的历史影响力（宣传成功），又区分「发生了什么」与「谁在怎样讲它」；庭审还原以 John Adams 辩护+6 人无罪为锚，未单极妖魔化任何一方。符合 Rule 0。
   - **建议**：保持现状。**列此条仅为透明**——这是本 Topic 一个高价值的「批判性读史」教学点（媒体/宣传素养），但务必确保下游 storyboard 不把它简化成「英军其实没错」或「殖民者造谣」的单极结论。narrative §5D/§10-4 已两面持有，合规。

3. **[#27] §8 中国桥「耗羡归公」中央-地方财政对照**（§8）
   - **问题**：task brief 指定「英国战后向殖民地征税的逻辑（帝国财政）可与同期清朝的中央-地方财政对照（有限对照，点到为止）」。narrative §8 用了「田赋占税收八成以上+盐专卖」「雍正耗羡归公、乾隆朝松动」「同意征税 vs 天命征税」三层对照。这是本 Topic 唯一的中国术语段落，且涉及较专的财政史概念。
   - **narrative 现状**：①已 Rule 0 收口（明确「不排名、只对照」「两套合法性设计各有智慧与盲点」）；②对照点扣在 task 指定的「帝国财政/中央-地方」轴上，未跑题；③「耗羡归公」「田赋八成」均有学术来源支撑（Springer/Wikipedia Economy of the Qing dynasty）；④EN 文件用拼音+inline gloss（huohao / huohao guigong）处理术语，符合 ESL 要求。
   - **建议**：现状**合规且落地**（task 要求「写实落地」已满足）。**唯一需创始人留意**：「耗羡归公」是较专的概念，若创始人觉得 8 年级层面过深，可在 storyboard 层简化为「中央想把地方私收的附加税收归统筹，反复拉锯」一句白话——但 narrative 本体已附 inline 解释，不必改。

4. **[#3/#4 国债与驻军数字的「约」措辞]**「国债约从 7500 万涨到约 1.33 亿」「驻军约一万、年约 20 万英镑」（§0/§1/§3/§4-2）
   - **问题**：权威来源给 £75M(1756)→£132.6-133M(1763)；驻军 ~10,000、年费 Grenville 估 ~£200,000。narrative 全部加「约」字，数字在权威区间内。
   - **建议**：现状可接受（全部为「约」近似，且对得上主流教学数字）。无需改。低优先级。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | 视角 | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 俄亥俄河谷青年 | receiving-end (DEFAULT) | **合成桥接人物**（无名字、未指定具体民族），处境写实 | ✅**已透明标注**（§3「虚构桥接人物，身份写实」「不给确切姓名，因为标准叙事根本没给这群人留位置——而这恰恰是问题本身」）|
| George Grenville / John Adams / Pontiac / Neolin / Samuel Adams / Crispus Attucks / Paul Revere / George III / George Washington | actor + mediator + 配角 | **真实历史人物**，姓名/生卒/事迹皆有据 | N/A — 非合成 |
| 「1763 放烟花庆祝胜利」氛围 | 开场修辞 | 战后殖民地普遍庆祝+强英国认同为史实；「放烟花」为时代氛围具体化 | ⚠️见红旗 #4 类——合理修辞，未冒充特定事件档案 |

**结论**：本 Topic 仅一个合成桥接人物（俄亥俄河谷青年 DEFAULT 视角），已在 narrative §3 透明标注为虚构、身份写实、无名字（与 task brief「被忽略方优先」要求一致）。其余主角全为真实历史人物。**无未标注的、冒充史料档案样式的合成；无伪造的直接引语**（§5 四份 primary source 中：宣言线/无代表不纳税/宣告法均为概括或真实短语 "in all cases whatsoever"，Revere 版画明确标注为宣传品非中立记录）。

---

## 备注

- **直接引语分层核验**（本 topic 风险类）：
  - *真实一手短语*：Declaratory Act "in all cases whatsoever"（1766）—— 对得上一手法案文本。
  - *口号/决议精神概括*：「无代表不纳税」、宣言线、宣告法 —— narrative 用「节略大意/精神」概括，**未**伪造逐条原文引证，合规。
  - *宣传品*：Paul Revere「波士顿惨案」版画 —— §5D **已显式声明**为宣传品、非中立现场记录。**无把宣传品当中立史料的违规。**
- **算术自检**：1763 − 1697 = 66（法属 Saint-Domingue 无关，本 topic 不涉）；1774 − 1763 = 11 年（殖民者从庆祝到大陆会议，narrative「十一年」「十年升级」均自洽，1764 糖税算起为「十年」、1763 庆祝算起为「十一年」，两处用法一致）；1775 − 1763 = 12 年（「十二年后向英军开枪」指 1763→1775 Lexington，正确）；£75M→£133M ≈ ×1.77（「几乎翻倍」准确）；1763 = 乾隆 28 年（乾隆 1736 即位，1736+27=1763，正确）。**全部自检通过。**
- **scope 自检**：本 Topic 严格止于 1774 第一次大陆会议；Lexington/Concord 第一枪、独立宣言、八年战争均**只交棒、不展开**（§4 末/§6/附录 A 三处均标注「见 sibling Topic american-revolution-1776」）。与 thirteen-colonies-1700（1700 殖民地社会结构）、american-revolution-1776（1775-83 战争+宣言）**无内容重叠**，正好填两者间「革命无因」空白。
- **defaultLens 选择依据**：按 task brief「先验挑战视角（受影响者/被忽略方优先）」+ 项目 defaultLens 先验检查规则。标准 8 年级先验是「英国 vs 殖民者」两方叙事；本 Topic 选 **ohio-valley-native-receiving-end**（俄亥俄河谷原住民）作为 DEFAULT——他们是这场争土地之战的真正主人、被两个帝国共同忽略的第三方，最能挑战学生「这是两方之争」的先验。同 sibling american-revolution-1776 用 enslaved-person-receiving-end 的「被忽略方优先」范式一致。
- **§8 同代中国**：为「真中国」段落，按 AUTHORING_PIPELINE 第 7 条例外，可正常使用中国术语（乾隆、天命、礼法、大一统、田赋、盐课、耗羡归公）；已核 cultural ban 未用于非中国段落。对照轴严格扣在 task 指定的「帝国财政/中央-地方」上，已 Rule 0 收口（不排名）。
- **用到的外部核实来源**：Wikipedia（French and Indian War / Treaty of Paris (1763) / Pontiac's War / Neolin / Royal Proclamation of 1763 / Stamp Act / Quartering Act 1765 / Declaratory Act / Townshend Acts / Boston Massacre / Tea Act / Boston Tea Party / Intolerable Acts / John Adams / Paul Revere / Economy of the Qing dynasty）、Britannica（Treaty of Paris 1763）、history.state.gov MILESTONES 1750-1775（Treaty of Paris / Continental Congress）、Library of Congress（British Reforms 1763-1766 timeline / 1764-65 timeline）、Mount Vernon（Proclamation Line / Coercive Acts / First Continental Congress / Pontiac's Rebellion）、National Archives UK（Boston Tea Party）、history.com（Boston Tea Party / Townshend Acts）、stamp-act-history.com（Stamp Act / Quartering Act / Sons of Liberty / Stamp Act Congress / Townshend partial repeal）、American Battlefield Trust（French and Indian War consequences / Pontiac's Rebellion）、Springer/ResearchGate（High-Qing fiscal / huohao guigong）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2 —— 所有高风险 claim 均有来源或已透明标注/可降级措辞，**无 needs-source 缺口**。无需创始人**主动拍板**的事实硬伤；红旗 #1（默认合成视角）、#2（Revere 宣传品定性）、#3（§8 耗羡归公对照深度）三处 narrative 均已自带透明处理，仅供创始人知情；#4 为低优先措辞。
```
