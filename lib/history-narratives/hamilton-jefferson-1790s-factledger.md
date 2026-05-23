# 建国财政与第一次党争 1790s · Hamilton vs Jefferson Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    hamilton-jefferson-1790s
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/hamilton-jefferson-1790s.js（3 lens：hamilton / banneker / whiskey-farmer，各 9 节点 = 27 节点）
            + lib/history-narratives/hamilton-jefferson-1790s.md（narrative kernel）
claim 总数:  28
🚩 红旗数:   4（需创始人审）— 1 处数字硬伤（仅 narrative .md，storyboard 不受影响）+ 2 处 ⚠️downgrade-wording + 1 处 composite 透明性确认
```

**一句话总评**：史实地基**很稳**——全部日期（1791-08-19 / 1791-08-30 / 1794 / 1804）、人名、数字（~7,000 集结 / ~13,000 民兵 / ~20 受审 / 2 判叛国后赦 / Jefferson ~600 奴隶 / ~70 万全国奴隶）、引语（Banneker 信、"national blessing" 实为 1781 致 Robert Morris 真句）均对得上权威来源；whiskey-farmer 的 composite 透明标注做得**非常到位**（lens card + N1 括号双重声明）。**唯一事实硬伤**在 narrative kernel §L2 一句"600 多万人口里约 70 万是奴隶"——1790 年首次普查全国总人口是 **393 万**不是 600 多万（此句只在 .md，storyboard 没出现，影响面小）。其余红旗为 Hamilton 死亡年龄"49 岁"与文中并存的 1757 生年读法不自洽（按 1755 算才是 49），以及 Banneker DC 测绘"参与"措辞可轻度收紧。无演绎角色未标注问题。

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
| 1 | "1791 年 8 月 19 日——我的信寄出去了"（`ban-n5`，kernel §5.1 / 附录A）| date | primary | Founders Online (Jefferson Papers Vol.22)：Banneker→Jefferson 1791-08-19 | ✅verified |
| 2 | "1791 年 8 月 30 日，他回了一封短信 …… 转寄给巴黎的 Condorcet"（`ban-n6`，kernel §5.1 / 附录A）| date+quote | primary | LOC / Founders Online：Jefferson 回信 1791-08-30，明文称将年历转寄 "Monsieur de Condorcet … at Paris" | ✅verified |
| 3 | Banneker 信原文"...you should at the same time be found guilty of that most criminal act, which you professedly detested in others"（kernel §5.1 引）| quote | primary | Founders Online Banneker 1791-08-19 原文逐字对得上 | ✅verified |
| 4 | Jefferson 回信"比谁都更希望"看到黑人才智不输白人 + 当"标本"绕开真问题（`ban-n6`，kernel §5.1）| quote+motive | primary | 回信原文 "no body wishes more than I do to see such proofs … talents equal to those of the other colours of men"；史学界普遍指其回避奴隶制实质问题 | ✅verified |
| 5 | "Jefferson 在私人信件里 …… 怀疑我的年历是白人邻居帮我算的"（`ban-n6`，kernel §5.1）| motive | encyclopedia | Monticello / 维基：Jefferson 1809 致 Joel Barlow 私信表达对 Banneker 能力的怀疑（疑代算）| ✅verified |
| 6 | "1794 年 …… 约 7,000 人在 Braddock's Field 集结"（`ham-n6` / `whf-n4`，kernel 故事4 / 附录A）| number | encyclopedia | 维基 / Mount Vernon / History.com：1794-07 约 7,000 人聚 Braddock's Field | ✅verified |
| 7 | "征召约 13,000 民兵 …… Washington 亲自骑马领队（唯一一次在任总统亲自带兵）"（`ham-n6` / `whf-n5`，kernel 故事4 / 配角）| number+absolute | encyclopedia | 维基 / Mount Vernon：~12,950–13,000 民兵；Washington 亲赴前线检阅、为美国史上唯一在任总统在战场领军 | ✅verified（见红旗注：Washington 实际未全程随军入宾州西部，Hamilton+Henry Lee 领军进，措辞 OK 但严格说"亲自带兵"指其亲赴并统帅出征阶段）|
| 8 | "押约 20 人去费城受审，2 人判叛国罪，后被 Washington 赦免"（`ham-n6 deliverGoal` / `whf-n5`，kernel 故事4）| number | encyclopedia | 维基 / Battlefield Trust：约 150 人被捕含 20 名首领，仅 2 人定叛国罪，1795-07 Washington 全部赦免 | ✅verified |
| 9 | "1804 年死在一场决斗里——对手是当时的副总统 Aaron Burr——49 岁，在新泽西河边中枪，第二天死"（`ham-n8`，kernel §3 / 附录A/C）| date+number | encyclopedia | 维基 / Britannica：1804-07-11 Weehawken NJ 决斗，对手时任副总统 Burr，次日死。**年龄**：1755 生 = 49；1757 生 = 47（Britannica 用 47）| ⚠️downgrade-wording（见红旗 #2）|
| 10 | "1755 年（也有人说 1757）…… 生在 …… Nevis …… 私生子"（`ham-n1`，kernel §3 / 附录C）| date | encyclopedia | 维基 / Britannica：生于 Nevis，年份 1755 vs 1757 史家两说并存；母离婚未获法律承认致其"私生" | ✅verified（文中显式标注生年争议，处理规范）|
| 11 | "13 岁母亲发高烧死在我旁边的床上，我自己也烧得快死"（`ham-n1`，kernel §3）| date | encyclopedia | 维基：母 Rachel 1768 病死，Hamilton 同病几死；按 1755 生即约 13 岁（按 1757 即约 11）。kernel §3 写"13 岁母亲死"与 1755 读法一致 | ✅verified |
| 12 | "14 岁 …… St. Croix 一家货栈做账房学徒 …… 糖、朗姆酒、奴隶"（`ham-n1`，kernel §3）| inference | encyclopedia | 维基：少年在 St. Croix 任 Beekman & Cruger 货栈职员，业务含奴隶贸易记账 | ✅verified |
| 13 | "1772 年 …… 飓风信 …… 商人凑钱送他去北美 …… 1773 进 King's College"（`ham-n2`，kernel §3 / 附录A）| date | encyclopedia | 维基：1772-08 飓风信刊报，资助赴北美；1773 入 King's College（今哥大）| ✅verified |
| 14 | "1789 年 …… 第一任财政部长 …… 我 32 岁"（`ham-n3`，kernel §3 / 附录A）| date+number | encyclopedia | 维基：1789-09 任首任财长。**32 岁**仅在 1757 生年读法成立（1755 生则约 34）| ✅verified（与生年争议同源，可接受）|
| 15 | "1790 …… 《公共信用报告》…… 承债案（assumption）…… 一顿晚饭上做了交易 …… 首都迁波托马克"（`ham-n4`，kernel 故事1）| causal+date | encyclopedia | PBS / 维基 Compromise of 1790：1790-06-20 "dinner table bargain"，承债换首都；史家对晚餐"决定性"有争议但事件本身成立 | ✅verified（晚餐影响史家有保留，narrative 未夸大为唯一因，OK）|
| 16 | "1791 …… 国家银行（First Bank of the United States）…… Washington 让两人写意见书最后签 Hamilton"（`ham-n5`，kernel 故事2）| date+causal | encyclopedia | 维基：1791 First Bank 特许成立；Washington 征 Jefferson/Hamilton 书面意见后签署 | ✅verified |
| 17 | strict vs loose construction / necessary and proper clause / implied powers（`ham-n5`，kernel 故事2 / 附录B）| textbook | textbook | AP US Gov 标准考点；宪法 Art.I §8 cl.18 弹性条款 | ✅verified |
| 18 | "McCulloch v. Maryland（1819）判例 …… 确立 implied powers"（kernel §6 中期）| date+causal | encyclopedia | 维基 / 国家档案馆：McCulloch v. Maryland 17 U.S. 316 (1819) 确立 implied powers + 弹性条款，承 Hamilton 路线 | ✅verified |
| 19 | "1791 年 …… 消费税（excise tax）…… 国内蒸馏威士忌 …… 新政府第一个对自己国内产品征的税"（`ham-n6` / `whf-n3`，kernel 故事3 / 附录B）| absolute+date | textbook | 维基：1791 Whiskey Act，首个联邦对国产商品的消费税 | ✅verified |
| 20 | "他公开反对奴隶制（曾是纽约 Manumission Society 成员），却替蓄奴的妻家（Schuyler）管过涉及奴隶买卖的账目"（`ham-n8`，kernel §3 / lens card）| motive | encyclopedia | Smithsonian / History.com：Hamilton 任 NY Manumission Society 秘书/法律顾问，同时为 Schuyler 岳家经手奴隶买卖账目；史家对其本人是否蓄奴有分歧，"管账 + 受益"有据 | ✅verified（narrative 已并陈"才华理想伪善同体"，处理到位）|
| 21 | "1731 年 …… 马里兰自由黑人家庭 …… 外婆白人契约女佣→买地买奴放自由嫁他"（`ban-n1`，kernel §3）| inference | encyclopedia | 维基：祖母 Molly Welsh 白人契约女佣，购非洲奴 Banneka 后放自由成婚（家史有口述成分，但为标准记述）| ✅verified（注：Banneker 本人手稿未提白人祖先，此为后世传记定说，属可接受 inference）|
| 22 | "1753 年 22 岁 …… 借看怀表 …… 用木头刻出整套齿轮造钟 …… 走了几十年"（`ban-n2`，kernel §3 / 附录A）| date+number | encyclopedia | 维基 / BlackPast：约 1753（约 21–22 岁）仿借来的怀表雕全木齿轮钟，运行数十年 | ✅verified |
| 23 | "1788 年 57 岁 …… George Ellicott 借望远镜星表书 …… 自学算 ephemeris"（`ban-n3`，kernel §3）| date | encyclopedia | 维基：约 1788 George Ellicott 借天文仪器与书，Banneker 自学天文 | ✅verified |
| 24 | "1791 …… 参与新首都（华盛顿特区）边界测绘（在 Andrew Ellicott 的测绘队）"（`ban-n4`，kernel §3 / lens card）| representativeness | encyclopedia | NPS / 维基：1791-02 Andrew Ellicott 雇 Banneker（George Ellicott 推荐）任助理测绘/天文观测，4 月因年历与农务离队。注：其具体贡献文献有限、神话化成分史界有辨析 | ⚠️downgrade-wording（见红旗 #3）|
| 25 | "把整本年历手抄一份寄给 …… Jefferson …… Jefferson 是《独立宣言》执笔人 …… 又在书里写黑人天生低劣"（`ban-n4`，kernel §3）| quote+motive | primary | 维基 / Notes on the State of Virginia Query 14：Jefferson 确在书中表述黑人天生低劣之疑；《独立宣言》主笔 | ✅verified |
| 26 | "Jefferson …… 蓄奴约 600 人"（`ham` 配角 / kernel §3 / 附录C）| number | encyclopedia | Monticello：一生蓄奴逾 600 人（任一时点约 200）| ✅verified |
| 27 | "无论东西 …… 600 多万人口里约 70 万是奴隶"（kernel §2 L2）| number | textbook | 1790 census：奴隶 ~697,681（≈70 万 ✅）；**但总人口 = 3,929,214 ≈ 393 万，非"600 多万"**| ✋flagged（见红旗 #1）|
| 28 | "一个被妥善管理的国债 …… 是一种祝福"（`ham-n7`/`ham-n8` 思想 + kernel §5.2 引）| quote | primary | Founders Online：Hamilton 1781-04-30 致 Robert Morris "A national debt if it is not excessive will be to us a national blessing"。kernel §5.2 已标"转述/确切措辞史家有讨论" | ✅verified（实为真句；narrative 谨慎标转述，反而比需要的更保守，OK）|

---

## 🚩 红旗句（创始人必审）

> 按影响排序。1 处事实硬伤（✋）+ 2 处措辞收紧（⚠️）+ 1 处 composite 透明性确认。

1. **[#27] ✋ `「600 多万人口里约 70 万是奴隶」`（narrative kernel §2 L2「L2 社会」段）**
   - **问题**：**唯一一处事实数字错误**。1790 年首次全国普查总人口是 **3,929,214（约 393 万）**，不是"600 多万"。奴隶 ~70 万这个分子是对的，但分母错了——70 万 / 393 万 = **约 18%（约六分之一）**；若按 600 万算只有约 11.7%，反而**低估**了奴隶占比、削弱了这条线的冲击力。
   - **影响面**：此句**只出现在 narrative .md**，3 个 lens 的 storyboard 节点里都没有引用这个总人口数（storyboard 谈占比时用的是"人人之外"的定性表述，未给具体分母），所以**不影响学生直接看到的内容**，但 narrative 是 quiz/reading/对话引擎的取材源，应改。
   - **建议**：把"600 多万人口"改为"约 400 万人口"（或"近 400 万"），保留"约 70 万是奴隶"。改后比例自然落到"约六分之一 / 约 18%"，与史实和冲击力都更吻合。**优先级最高（唯一硬伤）。**

2. **[#9 / #14] ⚠️ `「我 …… 49 岁 …… 死」`（`ham-n8`）vs `「我 32 岁」出任财长（`ham-n3`）vs 文中并存的 1757 生年读法**
   - **问题**：**不是事实错误，是内部不自洽**。文中（`ham-n1` + kernel 自检 + 附录C）显式承认生年"1755/57"两说并存——这处理是规范的。但具体年龄数字（死时 49 岁、任财长 32 岁）只在**1755 生年读法下都成立**（Britannica 用 1757 生年时给的死亡年龄是 47）。同一篇里既说"也有人说 1757"，又给死定"49 岁"、任职"32 岁"，细读会发现这两个年龄默认采了 1755，与 1757 那一说对不齐。
   - **建议**：低优先级、可不改。若要更严谨，二选一：① 在年龄处加"（按 1755 生年算）"小注；② 把"49 岁"软化为"快 50 岁"、"32 岁"软化为"三十出头"，让年龄不与未定的生年硬绑。**8 年级层面影响极小。**

3. **[#24] ⚠️ `「我被请去帮忙测绘新首都的边界 …… 靠星星定方位、记角度」`（`ban-n4`，kernel §3 / lens card）**
   - **问题**：**史实成立但有神话化辨析**。Banneker 确于 1791-02 受 Andrew Ellicott 雇为助理（George Ellicott 推荐）做天文观测、定基准点，但 4 月即离队（去算 1792 年历 + 农务）。学界（含维基"Mythology of Benjamin Banneker"专条）指出后世对其在 DC 规划中的具体贡献存在夸大，当时报道把定首线之功归 Andrew Ellicott、未提 Banneker。storyboard 措辞"参与边界测绘""靠星星定方位"本身没错，但"每天天不亮我就守着仪器"的具体度略高于文献能直接确证的。
   - **建议**：低优先级。可保留（"参与/协助测绘"是准确的）；若要更稳，把第一人称的高细节场景轻微泛化（如"我在测绘队里做天文观测、帮着定基准点"），避免暗示其主导或全程。**不属硬伤。**

4. **[whiskey-farmer composite] ✅→透明性确认（非红旗，仅记录）**
   - **问题**：whiskey-farmer 是**显式合成角色**（虚构姓名"Tom" + 家庭场景）。这是本 topic 唯一的合成人物，必须确认透明标注。
   - **核查结果**：透明标注做得**优于 SOP 要求**——① lens card `name` 字段直接写"（合成角色）/（composite）"；② lens card `description` 明文"这是一个合成角色 …… 具体的名字和家是叙事性补充，但他经历的每一件事都来自真实的历史记录"；③ `whf-n1` 正文**开头第一句括号**再次声明"（我是一个合成角色——名字和家是叙事性补充，但我经历的每一件事都来自真实历史记录。）"；④ kernel §3 + meta.notes anti-fab 条目均标注。**完全合规，无需处理**，列此条仅为透明。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 威士忌酒农 "Tom" | whiskey-farmer | **虚构姓名 + 家庭/门槛/具体农场场景**；代表 1794 宾州西部数千卷入暴动的边疆酒农，经历（威士忌=货币 / 三年请愿无效 / 7,000 集结 / 13,000 大军 / 搜村押费城）均有史料底座 | ✅**已透明标注（四重）**：lens card name "（合成角色）" + description 明文 + `whf-n1` 正文首句括号 + meta.notes anti-fab |
| Alexander Hamilton | hamilton | **真实历史人物**，生卒/事迹/财政三步/决斗皆有据 | N/A — 非合成 |
| Benjamin Banneker | banneker | **真实历史人物**，生卒/造钟/年历/致 Jefferson 信皆有据 | N/A — 非合成 |
| "你就是 TA"第二人称代入（各 lens N4 peak）| 全 3 lens | 把读者置入主角内心做选择，属**教学代入手法**，非伪造史实人物 | N/A — 教学手法，非合成角色 |
| Banneker 第一人称内心独白（"我坐在油灯下抄完最后一页""我心里那把刀很硬"）| banneker | 真实人物的**叙事化内心重构**，核心事实（手抄年历、信的论点、寄信意图）有信件原文支撑 | ✅可接受（无伪造档案样式；信内容对得上 Founders Online 原文）|

**结论**：本 topic 唯一的合成人物（威士忌酒农 Tom）以**四重冗余**透明标注，远超 `HISTORY_EVIDENCE_LAYER.md` §1.3 / §2.1 composite 透明红线。**无未标注的合成人物。**

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— hamilton（perpetrator-actor，9 节点）/ banneker（lonely-mediator，9 节点）/ whiskey-farmer（receiving-end，DEFAULT，composite，9 节点）。红旗分布：唯一事实硬伤 #27 在 **narrative kernel**（不在任何 storyboard 节点）；#9 跨 hamilton lens 年龄；#24 在 banneker lens。
- **直接引语分层核验**（本 topic 最高风险类，全部 ✅）：
  - *真实史料（逐字/近逐字对得上一手文本）*：Banneker 致 Jefferson 1791-08-19 信"...most criminal act, which you professedly detested in others"（Founders Online）；Jefferson 回信 1791-08-30"no body wishes more than I do to see such proofs … talents equal to those of the other colours of men"（LOC）；Hamilton"A national debt if it is not excessive will be to us a national blessing"（1781-04-30 致 Robert Morris，Founders Online）。
  - *转述/概括句（已标注）*：kernel §5.2"national blessing"已标"转述 / 确切措辞史家有讨论"——实际上原句是真的且更具体（"if it is not excessive"），narrative 反而比需要的更谨慎，无违规。kernel §5.3 Jefferson strict construction 为"转述"明标，OK。
  - *第一人称叙事重构*：三 lens 主角内心独白（Hamilton"我靠利益重新排线"、Banneker 油灯下抄信、Tom 门槛上火起）均为叙事化重构，核心事实有据，**无把演绎句排成史料档案样式的违规**。
- **用到的外部核实来源**：Founders Online（Jefferson Papers Vol.22 / Hamilton-Morris 1781）、Library of Congress（Jefferson→Banneker 1791-08-30）、Wikipedia（Whiskey Rebellion / Alexander Hamilton / Benjamin Banneker / Mythology of Benjamin Banneker / Compromise of 1790 / McCulloch v. Maryland / 1790 United States census / Thomas Jefferson and slavery）、Britannica（Hamilton）、PBS American Experience（dinner table bargain）、Mount Vernon、American Battlefield Trust、History.com、Smithsonian Magazine（Hamilton & slavery）、Monticello（Jefferson 蓄奴数 / Banneker 私信怀疑）、NPS（Banneker DC boundary survey）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2（Fact Ledger）—— 27/28 条 verified 或可降级；**1 处 needs-fix 硬伤（#27 总人口 600 万→约 400 万，仅 narrative .md）**。建议处理 **#27（必改，唯一事实错误）** 后过 Gate 2；#9 / #24 为低优先级收紧项，可与 #27 同批改或留作可接受简化。composite 透明性 100% 合规。
