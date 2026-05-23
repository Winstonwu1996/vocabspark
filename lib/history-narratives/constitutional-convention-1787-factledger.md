# 费城制宪 1787 · The Constitutional Convention Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    constitutional-convention-1787
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/constitutional-convention-1787.js（3 lens：madison / roger-sherman / mum-bett-receiving-end，各 11 节点）
            + lib/history-narratives/constitutional-convention-1787.md（narrative kernel）
claim 总数:  28
🚩 红旗数:   5（需创始人审）— 全部为 ⚠️downgrade-wording / 措辞收紧，无 needs-source、无 flagged 事实硬伤
```

**一句话总评**：史实地基**非常稳**——所有日期、票数、人名、案件、引语均对得上权威来源；narrative kernel 的 anti-fab 括号标注做得到位（疤的动机已透明标注为 Sedgwick 1853 演绎）。红旗集中在**两处反复出现的措辞过强**（"五分之一人口" 实为 ~18%/约六分之一；Federalist 54 "公开辩护" 略简化了 Madison 借"南方代言人"之口的史实），以及 3 处绝对/概括表述需轻度收紧。无演绎角色未标注问题。

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
| 1 | "1787 年 7 月 16 日 …… 5 比 4 …… 只差一票"（`mad-n5` / `rs-n6`）| date+number | encyclopedia | 维基 Connecticut Compromise + Britannica + Senate.gov：1787-07-16 以 5:4 通过（NC 倒戈、MA 代表团分裂），"one-vote margin" | ✅verified |
| 2 | "1787 年 5 月 29 日 …… Virginia Plan 由 Randolph 念出"（`mad-n3`，kernel §3）| date | encyclopedia | 维基 Virginia Plan：1787-05-29 Edmund Randolph 代 Madison 提出 | ✅verified |
| 3 | "1787 年 6 月 15 日 …… New Jersey Plan 反击"（`mad-n4`）| date | encyclopedia | 维基 New Jersey Plan：1787-06-15 William Paterson 提出 | ✅verified |
| 4 | "1787 年 9 月 17 日 …… 55 个代表，最后只有 39 个签字"（`mad-n8` / `rs-n8` / kernel 故事 9）| date+number | encyclopedia | 维基/Constitution Center：1787-09-17，39 人（来自 12 州）签字；约 55 名代表与会 | ✅verified（见红旗 #1 措辞） |
| 5 | "弗吉尼亚的 Mason …… 拒签 …… 没有保护个人权利的清单"（`mad-n8`）| motive | encyclopedia | 维基 George Mason：3 名拒签者之一，主因缺 Bill of Rights；9-12 提议加权利清单被全票否决 | ✅verified |
| 6 | "1781 年 …… Brom and Bett v. Ashley …… Brom 是同案被奴役男性"（`mb-n5`，kernel §3）| date | encyclopedia | 维基 Elizabeth Freeman / Mass.gov：1781 Berkshire County，Brom 同案 | ✅verified |
| 7 | "1781 年 8 月 22 日 …… 30 先令赔偿 …… 加诉讼费"（`mb-n6`，kernel §3）| date+number | encyclopedia | MassMoments / Constitution Center：1781-08-22 陪审团判自由 + 30 shillings damages + costs | ✅verified |
| 8 | "她给自己取名 Elizabeth Freeman …… 第一次有了姓"（`mb-n6`）| inference | encyclopedia | 维基：获自由后取名 Elizabeth Freeman | ✅verified |
| 9 | "1780 年 …… 第一条 …… 所有人生而自由平等"（`mad-n6` / `mb-n4`，kernel §5C）| quote | primary | 1780 MA 宪法 Art. I 原文 "All men are born free and equal …"（Adams 草稿 "born equally free and independent" 经会议改定）| ✅verified |
| 10 | "Federalist 第 51 篇 …… 必须让野心去对抗野心"（`mad-n8`，kernel §5D）| quote | primary | Federalist No. 51（Madison）原文 "Ambition must be made to counteract ambition." | ✅verified |
| 11 | "每个被奴役者，算 3/5 个人 …… Three-Fifths Compromise"（`mad-n6` / `rs-n7` / `mb-n7`）| number | textbook | 维基/Britannica 三五条款：Art. I §2 "three fifths of all other Persons" | ✅verified |
| 12 | "它不是『把奴隶当 3/5 个人对待』，是一笔席位与税收的算术交易"（`mad-n6`，kernel §10）| causal | textbook | 与现代史学/Commonplace "Not Three-Fifths of a Person" 一致——正确纠正常见误解 | ✅verified |
| 13 | "宪法规定 1808 年之前 …… 不准禁止跨大西洋奴隶贸易"（`mad-n7`，kernel 故事 8）| date | textbook | 维基/Constitution Center：Art. I §9 cl.1，1808 年前禁止国会废止奴隶进口 | ✅verified |
| 14 | "整部宪法正文 …… slave/slavery 一次都没出现 …… 用 other persons / such persons"（`mad-n7`，kernel §10）| absolute | textbook | 维基/AEI/Gilder Lehrman：原始宪法正文确无 "slave/slavery"，用 "other persons" "such persons" "person held to service" | ✅verified |
| 15 | "逃奴条款——逃到自由州的被奴役者必须送回原主"（`mad-n7`）| textbook | encyclopedia | Fugitive Slave Clause, Art. IV §2 cl.3 | ✅verified |
| 16 | "1791 年 …… 前 10 条修正案 …… Bill of Rights …… due process"（`mad-n9`，kernel 故事 10）| date | textbook | 维基：Bill of Rights 1791-12-15 批准生效；due process 在第 5 修正案 | ✅verified |
| 17 | "due process …… 祖宗是 1215 年 Magna Carta 第 39 条"（`mad-n9`，kernel §7）| causal | textbook | 主流法史共识：Magna Carta cl.39 "law of the land" → 5th Amendment due process（思想谱系，非直接抄录）| ✅verified |
| 18 | "Roger Sherman …… 美国史上唯一一个在四份建国文件上都签了名"（`rs` description / `rs-n2`，kernel §3）| absolute | encyclopedia | 维基 Roger Sherman：唯一签署 Continental Association (1774) / Declaration (1776) / Articles of Confederation (1781) / Constitution (1787) 四份的人 | ✅verified（kernel 列名准确；storyboard 口语化为"早期联合协议"= Articles of Association）|
| 19 | "1786 到 1787 年 …… Shays' Rebellion …… 中央政府连镇压都做不到"（`mad-n2`，kernel 故事 1）| causal | textbook | 维基/Britannica：Shays' Rebellion 1786-87，邦联政府无力应对，成为制宪推力 | ✅verified |
| 20 | "邦联条例 …… 不能征税、不能管贸易、没有军队 …… 改规矩要 13 州全票"（`mad-n2` / `rs`，kernel §2 L3）| textbook | encyclopedia | 维基 Articles of Confederation：无征税权/无商业管理权/修订需 13 州一致 | ✅verified |
| 21 | "1787 年全美约 70 万被奴役者，约占总人口五分之一"（kernel §2 L2；storyboard 多处"五分之一人口" `mad-n10`/`mad-n11`/`mb-n10`）| number | textbook | 1790 census：~694,280 奴隶 / 总 3,929,214 = **17.8%**（≈六分之一），非五分之一 | ⚠️downgrade-wording（见红旗 #1）|
| 22 | "Federalist 54 里，他公开为 3/5 妥协辩护"（`mad-n10`，kernel §3）| motive | primary | 维基 Federalist 54：Madison（统计归属）作者，但**以虚拟"南方同胞"代言人之口**论证"奴隶兼具财产与人身"，非完全以己声"公开辩护" | ⚠️downgrade-wording（见红旗 #2）|
| 23 | "这部宪法到今天还在用 …… 世界上仍在施行的最古老的成文宪法"（`mad-n9`）| absolute | encyclopedia | 维基/PolitiFact：准确说法是"最古老的**成文国家**宪法（in force）"；1780 MA 宪法（次国家级）更早。建议保留"国家"限定 | ⚠️downgrade-wording（见红旗 #3）|
| 24 | "Mum Bett …… 替妹妹挡了女主人挥过来的烧热厨具 …… 疤"（`mb-n3`，kernel §3）| dramatization | dramatization | 动机/亲属关系细节源自 Catharine Sedgwick 1853《Slavery in New England》；权威来源对被挡者表述不一（"a servant girl" / 妹妹）。**文中已用括号透明标注**为 Sedgwick 演绎、确证的仅是疤+不遮 | ✅verified（已透明标注；见红旗 #4 仅措辞建议）|
| 25 | "她 1781 年的诉讼连同同年 Quock Walker 案 …… 终结马萨诸塞奴隶制的判例"（`mb-n9`，kernel §3）| causal | encyclopedia | 维基/Mass.gov：Brom and Bett + Quock Walker 系列案确立终结 MA 奴隶制判例。注：Quock Walker 系列含 1781 与 1783 多案，"同年"略简 | ✅verified（见红旗 #5）|
| 26 | "Toussaint …… 同代读启蒙文本 …… 领导甘蔗田起义建起一个国家"（`mb-n6`）| causal | encyclopedia | Toussaint Louverture / 海地革命（1791 起）：与 Mum Bett(1781) 大致同代，时序成立；跨 Topic 锚 | ✅verified |
| 27 | "3/5 交易给南方超额政治权重 …… 通向内战的结构性导火索之一"（`rs-n9` / `mb-n9`，kernel §6）| causal | textbook | 主流史学共识，措辞已用"之一/结构性"留有余地，未做单因归结 | ✅verified |
| 28 | "Madison 一辈子住 Montpelier …… 靠 100 多个被奴役者维生"（`madison` description，kernel §3）| number | encyclopedia | 维基 Montpelier：Madison 终身奴隶主，庄园被奴役者逾百，量级相符 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 全部为 ⚠️downgrade-wording（措辞收紧），**无事实硬伤、无缺来源、无演绎未标注**。按影响排序。

1. **[#21]** `「约占总人口五分之一」`（kernel §2 L2，且 storyboard `mad-n10`/`mad-n11`/`mb-n10`/`mb-n11`/`rs-n10` 反复出现"五分之一人口 / one-fifth / 把人算 3/5 去分席位的五分之一"）
   - **问题**：1790 年首次普查 ~70 万被奴役者 / 总人口 393 万 = **17.8%**，约为**六分之一**，不到五分之一（20%）。这是全 topic 出现频率最高的数字，且是三个 lens 收尾 synthesis 的情感支点（"把五分之一的人算成 3/5"）。
   - **建议**：改为"约六分之一 / 接近五分之一 / 约 18%"。若想保留冲击力可写"全美近五分之一人口被奴役"——但严格说 17.8% 更接近六分之一，保守起见建议"约六分之一"或直接给"约 18%（每六个人里就有一个）"。这是**唯一一处数字偏差**，但因反复出现且在 synthesis 高情感节点，优先级最高。

2. **[#22]** `「Federalist 54 里，他公开为 3/5 妥协辩护」`（`mad-n10`，kernel §3）
   - **问题**：Federalist 54 中 Madison 是借**一位虚拟"南方同胞"代言人**之口论证奴隶"兼具财产与人身"，史学界普遍指出他**刻意拉开距离**、未完全以己声背书（"assumes the voice of his Southern Brethren"）。"公开辩护"略去了这层修辞距离，可能让学生以为 Madison 毫无保留地拥护 3/5。
   - **建议**：改为"在 Federalist 54 里**为 3/5 妥协作了辩护**（他借一位假想的南方代言人之口论证，史学界对他是否真心仍有争论）"。注意：这反而**强化**了本 topic"天才与污点同体"的核心张力，不削弱叙事。

3. **[#23]** `「它是世界上仍在施行的最古老的成文宪法」`（`mad-n9`）
   - **问题**：精确说法是"最古老的**成文国家（national）**宪法（仍在施行）"。1780 年马萨诸塞州宪法（次国家级）更早且仍在施行，常被并称"世界最古老的成文宪法"。去掉"国家"限定后表述偏绝对。
   - **建议**：加"国家"二字——"世界上仍在施行的最古老的成文**国家**宪法"。低优先级（7 年级层面影响小），但属绝对表述，按 SOP 应收紧。

4. **[#24]** `「我伸手挡。烫铁落在我手臂上」/「替妹妹挡」`（`mb-n3`）
   - **问题**：**不是事实硬伤**——文中已用括号"（……这些细节，是后来 Sedgwick 家的女儿写下来的，算是叙事的补充。能确证的，是这道疤，和我从此不遮它。）"透明标注为演绎，处理**完全合规**。唯一小瑕疵：被挡者权威来源表述不一（Sedgwick 转述/部分二手作"a servant girl"，部分作"姐妹/her sister"），storyboard 固定为"妹妹"。
   - **建议**：可保持现状（已标注为 Sedgwick 演绎，且括号已声明"确证的只是疤"）；若要更严，把"妹妹"改为"另一个被奴役的女孩"以避免亲属关系的过度具体化。**列此条仅为透明，非必改**。

5. **[#25]** `「我和同年的 Quock Walker 案」`（`mb-n9`，kernel §3 / 附录 A）
   - **问题**：Quock Walker 是一组案件（1781 民事 + 1783 刑事 Commonwealth v. Jennison），"同年"把跨 1781-83 的系列压成一年，轻微时序简化。不影响"两案共同终结 MA 奴隶制"的结论。
   - **建议**：改"同年"为"同期/前后那几年"，或保留——属可接受的 7 年级简化。最低优先级。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| （无完全虚构的合成人物）| — | 三个 lens 主角 **Madison / Roger Sherman / Mum Bett(Elizabeth Freeman)** 均为**真实历史人物**，姓名/生卒/事迹皆有据 | N/A — 非合成 |
| Mum Bett 烫疤的**动机细节**（替妹妹挡 / Ashley 太太挥烫厨具）| mum-bett `mb-n3` | 非虚构人物，但**动机与亲属关系**为 Catharine Sedgwick 1853 回忆性记述（演绎补充），史料确证的仅"疤 + 不遮" | ✅**已透明标注**（`mb-n3` 括号 + kernel §3 + meta.notes anti-fab 条目）|
| "你就是 TA"第二人称代入（`*-n4` peak）| 全 3 lens | 把读者置入主角内心做选择，属**教学代入手法**，非伪造史实人物 | N/A — 教学手法，非合成角色 |
| Ashley 饭桌"高谈自由的客人"（`mb-n2`）| mum-bett | 泛指性场景（"learned men talked of freedom"），无具名虚构人物，属合理 inference（独立战争年代+Ashley 是法官/有学识访客）| ✅可接受（无具名捏造）|

**结论**：本 topic **无未标注的合成人物**。唯一的演绎成分（Mum Bett 烫疤动机）已在 storyboard 节点内 + narrative kernel + meta.notes 三处透明标注，符合 `HISTORY_EVIDENCE_LAYER.md` §1.3 / §2.1 composite 透明红线。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— madison（perpetrator-actor，11 节点）/ roger-sherman（lonely-mediator，11 节点）/ mum-bett-receiving-end（receiving-end，DEFAULT，11 节点）。红旗分布：跨 lens 共享数字 #21 影响全部 3 lens 的 synthesis；#22/#23 在 madison lens；#24/#25 在 mum-bett lens。
- **直接引语分层核验**（本 topic 最高风险类，全部 ✅）：
  - *真实史料*："All men are born free and equal"（1780 MA 宪法 Art. I）/"Ambition must be made to counteract ambition"（Federalist 51）/"three fifths of all other Persons"（宪法 Art. I §2）/"We the People"（序言）—— 均逐字对得上一手文本。
  - *演绎/概括句*：Mum Bett 第一人称内心独白（"我让镇上每个人都看见它""你去问 Ashley 太太"）—— 属第一人称叙事重构，其中"ask missis / 你去问 Ashley 太太"实有 Sedgwick 1853 转述支撑（"ask missis!"），其余为合理叙事化，无伪造档案样式。Madison/Sherman 第一人称同理。**无把演绎句排成史料档案样式的违规。**
- **用到的外部核实来源**：Wikipedia（Connecticut Compromise / Virginia Plan / New Jersey Plan / Elizabeth Freeman / George Mason / Federalist No. 54 / Three-fifths Compromise / Articles of Confederation / Constitution of the United States / 1790 United States census / Roger Sherman）、Britannica（Connecticut Compromise / Three-fifths）、U.S. Senate (senate.gov)、Constitution Center、Mass.gov、MassMoments、Commonplace "Not Three-Fifths of a Person"、PolitiFact（oldest national constitution）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2（Fact Ledger）—— 所有高风险 claim 均有来源或可降级为谨慎措辞，**无 needs-source 缺口**。建议处理 5 条红旗中至少 **#21（五分之一→约六分之一/18%）** 与 **#22（Federalist 54 措辞）** 后过 Gate 2；#23/#24/#25 为低优先级收紧项，可与 #21/#22 同批改。
