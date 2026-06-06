# 拉丁美洲独立 1810-1826 · Latin American Independence Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on narrative，**只写本账本文件**，绝不改内容。

```
topicId:    latin-american-independence-1810
生成日期:    2026-06-06
来源文件:    lib/history-narratives/latin-american-independence-1810.md（CN narrative kernel）
            + lib/history-narratives/latin-american-independence-1810.en.md（EN sister file）
claim 总数:  27
🚩 红旗数:   4 — 全部为 ⚠️downgrade-wording / 已透明标注的演绎 / 史学解读口径，无 needs-source、无 flagged 事实硬伤
```

**一句话总评**：史实地基**稳**——核心日期（1808 拿破仑入侵 / 1810.9.16 Grito de Dolores / 1817 翻越安第斯 / 1819.8.7 Boyacá / 1821.6.24 Carabobo / 1822 Guayaquil / 1824.12.9 Ayacucho / 1830 Gran Colombia 解体）、人名生卒（Bolívar 1783-1830、San Martín 1778-1850、Hidalgo 1753-1811、Sucre 1795-1830）、casta/criollo/peninsular 社会结构、白银经济、catalyst=拿破仑入侵均对得上权威来源（Wikipedia、Britannica、Encyclopedia.com、Cádiz/LoC、HistoryNet）。红旗集中在 **Rule 0 高敏感解读**（criollo 主导 + 底层秩序延续——属本课最核心、最需中性的史学判断，narrative 已双面同体处理）、**Bolívar「plowed the sea」名言的措辞/出处**（流传版本、narrative 已用「流传的说法」留余地）、**Guayaquil 会面内容的史学不确定性**（narrative 已显式标注「至今无完整档案、众说纷纭」）、以及 **两个 receiving-end 桥接人物的合成性**（narrative §3 已透明标注虚构、身份写实）。无未标注的合成人物冒充史料问题。

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
| 1 | "1808 年拿破仑入侵西班牙、逼国王退位、扶兄 Joseph Bonaparte 上位，制造合法性真空（catalyst）"（§0/§1/§2 L4/§4-2/附录 A）| causal+date | encyclopedia | 维基 Spain under Joseph Bonaparte / Bayonne Abdications：1808 Bayonne 逼 Charles IV + Fernando VII 退位；6.15 Joseph Bonaparte 为西班牙王。主流史学共识其为拉美独立直接催化剂 | ✅verified |
| 2 | "Simón Bolívar 1783 年 7 月 24 日生于 Caracas，1830 年 12 月 17 日死于 Santa Marta 附近，47 岁"（§3/§4-12/附录 A/C）| date | encyclopedia | 维基/Britannica Simón Bolívar：born 24 July 1783 Caracas；died 17 December 1830 near Santa Marta（结核），享 47 岁 | ✅verified |
| 3 | "Bolívar 生于极富 criollo 大家族、欧洲游学、读伏尔泰卢梭、见过拿破仑加冕，尊称 El Libertador"（§3）| inference | encyclopedia | 维基/Britannica：富有 criollo 家庭；少年赴欧、受启蒙思想影响；称 El Libertador。"见拿破仑加冕"为常见传记表述 | ✅verified |
| 4 | "José de San Martín 1778 年生于 Yapeyú（今阿根廷东北），1850 年死于法国 Boulogne-sur-Mer，未回故土"（§3/附录 A/C）| date | encyclopedia | 维基/Encyclopedia.com San Martín：1778 Yapeyú；曾在西班牙军服役；died 1850 Boulogne-sur-Mer，流亡未归 | ✅verified |
| 5 | "1817 年 1 月 San Martín 率约四千人从 Mendoza 出发翻越安第斯、不到三周突袭智利成功"（§2 L4/§3/§4-6/附录 A）| number+date | textbook | HistoryNet "Crossing the Andes"：1817-01-19 从 Mendoza 出发约 4,000 人；三列约 3,550 兵；2 月初完成跨越，三周内 | ✅verified（"约四千"在 3,550-4,000 区间内稳妥）|
| 6 | "1819 年 8 月 7 日 Boyacá 战役，Bolívar 率委内瑞拉+新格拉纳达联军（含英国军团）大胜，南美北部独立转折点"（§2 L4/§4-7/附录 A）| date | encyclopedia | 维基/Britannica Battle of Boyacá：1819-08-07；Bolívar 联军含 British Legion 击败 José Barreiro；被视为南美北部独立开端 | ✅verified |
| 7 | "1819 年底 Bolívar 着手建立 Gran Colombia（含今哥伦比亚、委内瑞拉、厄瓜多尔、巴拿马）"（§3/§4-7/附录 A/B）| representativeness | encyclopedia | 维基 Gran Colombia：1819 年底成立；含今哥伦比亚、委内瑞拉、厄瓜多尔、巴拿马（另含部分秘鲁/巴西边地） | ✅verified |
| 8 | "1821 年 6 月 24 日 Carabobo 战役，基本锁定委内瑞拉独立"（§4-8/附录 A）| date | encyclopedia | 维基 Battle of Carabobo：1821-06-24；Bolívar 击败 Miguel de la Torre 王军，奠定委内瑞拉独立 | ✅verified |
| 9 | "1822 年 Bolívar 与 San Martín 在 Guayaquil 秘密会面；会后 San Martín 退出、交出南方战场、远走欧洲"（§3/§4-9/附录 A）| causal | encyclopedia | 维基/Encyclopedia.com：1822 Guayaquil Conference；会后 San Martín 让出指挥、退隐赴欧。会谈具体内容无完整档案（见红旗 #3）| ✅verified（内容不确定性已在 narrative 标注）|
| 10 | "1824 年 12 月 9 日 Ayacucho 战役，Bolívar 部将 Sucre 指挥联军击垮西班牙主力，南美大陆解放终点"（§2 L4/§4-10/附录 A）| date | encyclopedia | 维基 Battle of Ayacucho：1824-12-09；Antonio José de Sucre 指挥；终结西班牙在南美大陆统治 | ✅verified |
| 11 | "Antonio José de Sucre 1795-1830，Bolívar 最信任部将，指挥 Ayacucho 决战"（附录 C）| date | encyclopedia | 维基 Sucre：1795-1830；Bolívar 副手；Ayacucho 指挥官、后任玻利维亚总统 | ✅verified |
| 12 | "1810.9.16 墨西哥神父 Miguel Hidalgo 喊出 Grito de Dolores，发动底层（印第安+混血农民）起义；1811 被处死"（§2 L4/§4-4/附录 A/C）| date | encyclopedia | 维基 Miguel Hidalgo / Grito de Dolores：1810-09-16；底层为主起义；Hidalgo 1811-07-30 被处决 | ✅verified |
| 13 | "1815 Bolívar 流亡牙买加写《牙买加来信》，分析美洲必独立但难团结"（§3/§4-5/§5A/附录 A）| causal | encyclopedia | 维基 Letter from Jamaica：1815-09-06 Kingston 写就；论美洲独立必然性 + 难以统一为单一共和国 | ✅verified |
| 14 | "1812 西班牙 Cortes of Cádiz 颁布 1812 年宪法（自由派），1814 被复位国王废除"（§4 注/附录 A/B）| date | encyclopedia | 维基/LoC Spanish Constitution of 1812：1812-03-19 Cádiz 颁布；Fernando VII 1814-05-04 复位后废除 | ✅verified |
| 15 | "Fernando VII 1784-1833，被拿破仑废黜、1814 复位、复位后废 1812 宪法"（§4-3/§5D/附录 C）| date | encyclopedia | 维基 Ferdinand VII：1784-1833；1808 Bayonne 退位；1814 复位即废宪、行专制 | ✅verified |
| 16 | "Joseph Bonaparte 1768-1844，拿破仑之兄，1808 被扶为西班牙王，引爆合法性真空"（§4-2/附录 C）| date | encyclopedia | 维基 Joseph Bonaparte：1768-1844；1808 西班牙王（José I）| ✅verified |
| 17 | "casta 种族等级：顶 peninsular → criollo → mestizo/mulato → 印第安/被奴役者底；按血统肤色定税/官位/法律地位"（§1/§2 L2/§5B/附录 B/D）| representativeness | textbook | 主流史学共识（维基 Casta / Society of Spanish America）：殖民地按血统排序的种族等级；narrative 用作教学性框架，承认其为简化分类系统 | ✅verified |
| 18 | "关键紧张点在 peninsular（西班牙生）压 criollo（美洲生白人）；criollo 有钱有文化却被挡在权力门外——独立运动核心引擎"（§1/§2 L2/§2 L3）| causal | textbook | 主流史学共识：peninsular-criollo 权力裂隙为拉美独立核心动因之一 | ✅verified |
| 19 | "三百年殖民经济建立在白银（波托西/墨西哥银矿）+ 印第安贡赋劳役 + 非洲奴役 + 贸易管制上"（§2 L1）| representativeness | textbook | 主流史学共识：silver（Potosí/墨西哥）+ 强制劳动（mita/encomienda 遗绪/奴役）+ 重商主义贸易垄断 | ✅verified |
| 20 | "独立由 criollo 精英领导与受益；底层（印第安/被奴役/混血）付出最多、社会处境大体没变；部分地区奴役制延续数十年"（§0/§3 DEFAULT/§6/§7/§10-1）| causal+representativeness | textbook | 修正派史学主流判断（revisionist reading）：criollo-led；社会底层秩序大体延续；多国废奴迟至 1850s（如委内瑞拉 1854、秘鲁 1854）。本课最核心 Rule 0 解读，narrative 双面同体 | ⚠️downgrade-wording（见红旗 #1，属高敏感史学判断、非硬事实，已中性处理）|
| 21 | "独立后碎裂 + caudillo（考迪罗强人）政治；Gran Colombia 1830 解体为委内瑞拉/厄瓜多尔/新格拉纳达"（§1/§4-11/§6/§10-5/§10-7/附录 A）| causal+date | encyclopedia | 维基 Dissolution of Gran Colombia：1830 解体（委内瑞拉、厄瓜多尔脱离）；caudillo 政治为 19C 拉美常态 | ✅verified |
| 22 | "Bolívar 1828 自任独裁者、当年遭刺杀未遂"（§3）| date | encyclopedia | 维基/History.com：1828 Bolívar 宣布独裁；1828-09 遭刺杀未遂（La Conspiración Septembrina）| ✅verified |
| 23 | "Bolívar 临终『美洲无法被治理……为革命献身的人等于在大海里耕田（plowed the sea）』"（§3/§4-12/§5C/§11）| quote | encyclopedia | 维基/History.com/多源：1830 临终前后流传名言 "America is ungovernable... he who serves a revolution plows the sea"。属广为引用但版本/确切出处有差异 | ✅verified（narrative 用「流传的说法」「传世的话」留余地；见红旗 #2）|
| 24 | "海地（1804）由被奴役者建国彻底废奴 vs 拉美由 criollo 精英主导底层延续——解放深度天差地别"（§7/§10-6）| representativeness | textbook | 主流史学共识 + 接已上线 haitian-revolution-1791 narrative；两革命领导主体与社会深度对照成立 | ✅verified |
| 25 | "1808 = 清嘉庆朝；乾隆 1799 死；白莲教起义 1796-1804；鸦片战争 1840"（§8）| date | encyclopedia | 乾隆死于 1799（嘉庆四年）；白莲教 1796-1804；第一次鸦片战争 1840。§8 为真中国段，cultural term 允许。算术：1808 在嘉庆（1796-1820）区间内，正确 | ✅verified |
| 26 | "Andes 山脉等地理隔绝是独立后碎裂的物理根源之一"（§2 L0/§6/§9 结构派/附录 B/D）| causal | textbook | 结构/地理派史学（structural reading）：安第斯阻隔 + 殖民行政分割 + 区域经济离心为碎裂结构因素之一。narrative 用「之一」留余地 | ✅verified |
| 27 | "西属美洲独立终结统治三百年、横跨半个地球的西班牙美洲大陆帝国（古巴/波多黎各等岛屿留西更久）"（§0/§6/§4-10）| absolute | textbook | 主流史学共识：约 1826 大陆独立基本完成；Cuba/Puerto Rico 留西至 1898。narrative 显式区分「大陆」vs 岛屿，措辞稳妥 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 按影响排序。无事实硬伤；本课最高敏感处是 #1（Rule 0 核心解读），narrative 已双面同体。#2/#3 narrative 已留余地/已标注，#4 为合成桥接人物（已透明标注）。

1. **[#20] 「criollo 精英主导 + 底层社会秩序大体延续」这一核心解读**（§0/§3 DEFAULT/§6/§7/§10-1，全文贯穿）
   - **问题**：这是本课**最核心、也最高敏感**的判断——把拉美独立同时呈现为「真实的反殖民解放」与「克里奥尔精英主导、底层种族/劳动秩序大体延续的复杂转变」。它属**史学解读**（修正派 revisionist reading），不是单一硬事实；不同史学流派（民族解放史观 vs 修正派）权重不同。
   - **narrative 现状**：完全符合 task brief 的 Rule 0 要求，narrative **双面同体处理**——§6/§7/§9/§10 反复并列「政治独立是真的」+「社会解放大打折扣」，§9 historiography 显式列出民族解放史观与修正派两派对立，未单极化。defaultLens 选 casta 底层（受影响者优先）符合 brief。
   - **建议**：现状**合规且正是 brief 要的中性**。提醒下游 storyboard：此判断必须始终双面并列呈现，**禁止**让 AI 老师把它讲成「所以这场革命是假的/是骗局」（单极化贬低）或「伟大全民解放」（单极化美化）。这是本 topic Rule 0 的命门。

2. **[#23] Bolívar「在大海里耕田 / plowed the sea」名言**（§3/§5C/§11）
   - **问题**：这句广为引用的临终名言，确切措辞与出处在不同来源间有差异（常见英译版本 "America is ungovernable for us; he who serves a revolution plows the sea"），并非逐字档案确证的统一原文。
   - **narrative 现状**：§5C 用「流传的说法」、§3/§4-12 用「传世的话」「写下那句」，已对措辞留余地，**未**排成档案逐字原文样式。
   - **建议**：保持现状。提醒下游若引用，沿用「流传的话/传世名言」措辞，**禁止**当作 Bolívar 档案逐字原话排版。低优先级。

3. **[#9] Guayaquil 会面内容的史学不确定性**（§3/§4-9）
   - **问题**：1822 年 Bolívar 与 San Martín 的 Guayaquil 会谈是闭门密谈，**具体谈了什么、为何 San Martín 退让，至今无完整档案、史学界众说纷纭**。能确证的只是「会面发生 + 会后 San Martín 退出交权赴欧」这个结果。
   - **narrative 现状**：§3 **已显式标注**「会谈内容至今无完整档案、众说纷纭——但结果是清楚的」，EN 同（"has no complete record and is debated to this day — but the result is clear"）。处理**完全合规**。
   - **建议**：保持现状。提醒下游 storyboard 若展开 San Martín 退让的动机，必须保留「史料不确定、动机众说纷纭」的标注，**禁止**把某一种动机解读当作确证事实。

4. **[#3 桥接人物] 两个 receiving-end / actor 合成人物**（§3）
   - **问题**：DEFAULT 视角「casta 底层混血士兵 / 印第安庄园劳力」为合成桥接人物（无姓名、复合身份）。
   - **narrative 现状**：§3 **已透明标注**「虚构桥接人物，但身份完全写实」「不给确切姓名，因为历史很少为这些人留下名字——而这恰恰是问题本身」。Bolívar / San Martín / Hidalgo / Sucre 等为真实历史人物，非合成。
   - **建议**：现状**合规**（符合 composite 红线——透明标注 + 身份写实 + 未冒充史料）。无需改。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | 视角 | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| casta 底层混血士兵 / 印第安庄园劳力 | receiving-end (DEFAULT) | **合成桥接人物**（无名字、复合身份），处境写实 | ✅**已透明标注**（§3「虚构桥接人物，但身份完全写实」「不给确切姓名，因为历史很少为这些人留下名字」）|
| Simón Bolívar / José de San Martín / Miguel Hidalgo / Antonio José de Sucre / Joseph Bonaparte / Fernando VII | actor-driver + mediator + 配角 | **真实历史人物**，姓名/生卒/事迹皆有据 | N/A — 非合成 |

**结论**：本 topic 唯一合成桥接人物（casta 底层士兵/劳力，DEFAULT 视角）已在 narrative §3 透明标注为虚构、身份写实，符合 composite 红线。两位解放者及所有配角均为真实历史人物。**无未标注的、冒充史料档案样式的合成。** Bolívar 名言已用「流传的话」留余地，Guayaquil 会面内容不确定性已显式标注。

---

## 备注

- **直接引语分层核验**（本 topic 最高风险类）：
  - *广为引用的传世名言*：Bolívar「plowed the sea」—— §5C 用「流传的说法」留余地，**未**排成逐字档案样式，合规。
  - *史学解读概括*：Bolívar《牙买加来信》—— §5A 用「概括精神」呈现，**未**伪造逐条原文引证，合规。
  - *会谈密谈*：Guayaquil 1822 —— §3 显式标注无完整档案、众说纷纭。**无把不确定内容当确证事实排版的违规。**
- **本课最高敏感 = Rule 0 而非日期**：与多数 topic 不同，本课风险不在事实硬伤（日期人名全部 verified），而在 **criollo 主导 vs 全民解放** 这一史学判断的中性把握。narrative 已按 brief 双面同体处理，§9 双派并列，defaultLens 选底层受影响者。见红旗 #1。
- **§8 同代中国**：为「真中国」段落，按规范例外，可正常使用中国术语（嘉庆、乾隆、天命、礼法、大一统、白莲教、鸦片战争）；已核 cultural ban 西语术语（criollo/peninsular/casta/caudillo/junta/Gran Colombia/Cortes 等）未用于非拉美段落。§8 紧扣 brief 指定的「两种旧秩序崩解后如何重建」对照（拉美外力崩塌→碎裂 vs 中国内外夹击→死守整合救亡）。
- **算术自检**：1826 − 1500 ≈ 三百余年（西属美洲殖民跨度，narrative「三百年」为标准近似，正确）；1830 − 1783 = 47（Bolívar 死时 47 岁，正确）；1850 − 1778 = 72（San Martín 享年，未在正文硬写）；1808 在嘉庆（1796-1820）区间内（§8 正确）；1824 − 1810 = 14 年（独立战争主跨度，narrative 用「约 1810-1826 十几年」正确）。**全部自检通过。**
- **接革命链**：本课 §0/§7/§10-6 显式接已上线 haitian-revolution-1791 + french-revolution，构成 brief 要求的大西洋革命链补角（美 1776→法 1789→海地 1791→拉美 1810-1826）。海地/拉美「解放深度对照」与已上线 haitian narrative 口径一致。
- **用到的外部核实来源**：Wikipedia（Simón Bolívar / José de San Martín / Battle of Boyacá / Battle of Carabobo / Battle of Ayacucho / Gran Colombia / Dissolution of Gran Colombia / Spain under Joseph Bonaparte / Bayonne Abdications / Spanish Constitution of 1812 / Cortes of Cádiz / Miguel Hidalgo / Letter from Jamaica / Antonio José de Sucre / Ferdinand VII）、Britannica（Simón Bolívar / Battle of Boyacá / Constitution of Cádiz）、Encyclopedia.com（Bolívar / San Martín / Boyacá）、HistoryNet（Crossing the Andes）、History.com（Rise and Fall of Simón Bolívar）、Library of Congress（1812 Constitution of Cádiz）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2 —— 所有高风险 claim 均有来源或已透明标注/可降级措辞，**无 needs-source 缺口**。唯一需创始人**主动留意**的是红旗 #1（criollo 主导这一核心解读的中性必须始终双面并列，禁止下游 storyboard 单极化）；#2/#3/#4 narrative 已自带留余地/标注。
```
