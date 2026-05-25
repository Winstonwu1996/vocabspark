# 美国独立革命 1776 · The American Revolution Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    american-revolution-1776
生成日期:    2026-05-25
来源文件:    lib/history-storyboards/american-revolution-1776.js（3 lens：jefferson / loyalist / enslaved-person-receiving-end，各 11 节点）
            + lib/history-narratives/american-revolution-1776.md（narrative kernel）
            + lib/history-storyboards/notebooks/american-revolution-1776.js（同伴笔记本 v1）
claim 总数:  27
🚩 红旗数:   4（需创始人审）— 全部为 ⚠️downgrade-wording / 措辞与内部一致性收紧，无 needs-source、无 ✋flagged 事实硬伤
```

**一句话总评**：史实地基**非常稳**——所有日期（1765 Stamp Act / 1773 Tea Party / 1774 Intolerable Acts / 1775.4 Lexington-Concord / 1775.11 Dunmore / 1776.7.4 独立宣言 / 1777 Saratoga / 1778 法国结盟 / 1781 Yorktown / 1783 Treaty of Paris / 1863 Gettysburg）、人名、机构（五人起草委员会）、引语（「人人生而平等」「Liberty to Slaves」「响彻世界的一枪」「Four score and seven years」）均对得上权威一手/教科书来源；**本 Topic 最高风险点「1/3 each」Adams 归属处理得极其到位**——storyboard `loy-n2` 用 anti-fab 括号短句明确写「这是 Adams 粗估、非精确统计、历史学家争论真实比例」，kernel §3/§9/§10 与 notebook 三处呼应，**完全符合任务 brief 要求**（见下"Adams 归属专项核验"）。红旗集中在**narrative kernel 内部一处数字自相矛盾**（同一份 kernel 既写「约五分之一」又写「约六分之一」被奴役人口，而 1776 年的正确值是**约五分之一**，storyboard 已统一为五分之一，需把 kernel 两处「六分之一」拉齐）+ 3 处低优先级措辞收紧。无演绎角色未标注问题，无伪造引文。

> **与 sibling Topic 的关键差异（reviewer 必读）**：constitutional-convention-1787 账本因用 **1790 census**（70 万 / 393 万 = 17.8% ≈ 六分之一）把"五分之一"判为红旗；本 Topic 用 **1776 年口径**（约 50 万 / 约 250 万 = 约 20% = 五分之一），**结论相反**——本 Topic 写"五分之一"是**对的**，写"六分之一"才是错的。两个 Topic 不可互相套用同一个数字判决。

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
| 1 | 「1/3 支持独立 / 1/3 效忠英国 / 1/3 中立 …… 是 John Adams 的粗估，不是精确统计」（`loy-n2`，kernel §3/§9/§10，notebook `patriot-loyalist-neutral-split`）| representativeness+number | textbook | **本 Topic 最高风险点，处理正确**：Journal of the American Revolution / HNN / breedshill.org —— Adams "三分法"实出自 1815 致 James Lloyd 信，且**原话是说美国人对法国大革命的舆论分裂，并非美国独立战争的派别构成**；后世（Sydney Fisher 1902 起）误植到独立战争上。现代史学：保皇派约 20%、爱国派 40%+。**文中已用括号短句明确标注"粗估/非精确统计/历史学家争论真实比例"** | ✅verified（标注合规；见"Adams 归属专项核验" + 红旗 #4 可选增强）|
| 2 | 「1776 年 7 月 4 日，大陆会议正式通过独立宣言」（`jef-n5`，kernel §1/§4，notebook `declaration-of-independence`）| date | primary | National Archives：1776-07-04 Continental Congress adopted the Declaration | ✅verified |
| 3 | 「1776 年 6 月 …… 五人起草委员会 …… 把笔交给 Jefferson」（`jef-n3`，kernel §3，notebook）| date+fact | encyclopedia | 维基 Committee of Five：1776-06-11 任命，含 Jefferson/Adams/Franklin/Sherman/Livingston；6/11-6/28 起草。文中"含 Franklin 和 Adams"用"其中有"=among them，未声称只此二人，准确 | ✅verified |
| 4 | 「在费城一间租来的二楼房间 …… 连写了大概十七天」（`jef-n1`，kernel §1，notebook）| number | encyclopedia | 6/11–6/28 起草期 = 17 天；Jefferson 在 Market St. 租屋二楼起草，主流叙述一致 | ✅verified |
| 5 | 「Adams 后来说：你写得比我们都好，而且我招人恨，你不招人恨」（`jef-n3`，kernel §3，notebook）| quote | encyclopedia | Adams 1822 回忆录追述其向 Jefferson 让笔的三/五条理由含"You can write ten times better than I can""I am obnoxious, suspected, and unpopular"——文中为概括转述非排成档案逐字引，处理得当 | ✅verified |
| 6 | 「『人人生而平等，造物主赋予他们 …… 生命、自由和追求幸福』」（`jef-n1`，kernel §5A，notebook）| quote | primary | 独立宣言原文 "all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness" 逐字对上 | ✅verified |
| 7 | 「Monticello 庄园 …… 名下有约 200 个被奴役者 …… 写『人人平等』那几天伺候他的没一个自由」（`jef-n1`/`jef-n4`/`jef-n6`，kernel §3，notebook）| number | encyclopedia | Monticello.org：Jefferson 一生役使逾 610 人；同一时刻 Monticello 约 130 人、连同其他庄园**约 200 人**——"约 200"作为 1776 当时的同时役使量级**准确** | ✅verified |
| 8 | 「草稿里骂英王奴隶贸易那段 …… 南卡和佐治亚说删掉不然不签 …… 他删了」（`jef-n4`/`jef-n5`，kernel §5B/§4，notebook q1）| causal | textbook | 主流史学：Jefferson 草稿谴责奴隶贸易段（"violated … sacred rights of life & liberty"）经 Congress 删去，南方蓄奴州（南卡、佐治亚）反对是主因之一 | ✅verified |
| 9 | 「1775 年 11 月 …… 总督 Dunmore 发宣言：反叛者名下被奴役者逃出加入英军即获自由」（`jef-n6`/`loy-n6`/`ens-n4`，kernel §3/§4/§5C，notebook `dunmore-proclamation`）| date+primary | primary | 维基/Encyclopedia Virginia/Gilder Lehrman：Dunmore's Proclamation 1775-11（公布 11/15），许诺投英军的反叛者奴隶获自由 | ✅verified |
| 10 | 「这不是英国的善心，是一步削弱反叛殖民者的军事棋」（`ens-n7`，kernel §3/§5C，notebook）| motive | textbook | 主流史学共识：Dunmore 出于军事而非废奴动机（仅限反叛者所有、且须 able and willing to bear arms）——正确纠正常见误解 | ✅verified |
| 11 | 「数以万计的被奴役者冒死逃向英军 …… 具体数字今天说不准，规模大到影响战局」（`jef-n6`/`ens-n5`，kernel §3/§4，notebook）| number | textbook | History.com/Mount Vernon：整场战争约 2 万（部分估计达 8 万–10 万）逃向英军；即时投 Dunmore 者约 800–2000。**文中已标注为历史学家估计、具体数字说不准**——处理得当 | ✅verified |
| 12 | 「组成『埃塞俄比亚军团』，军服上绣『Liberty to Slaves（奴隶得自由）』」（`ens-n5`，kernel §3/附录 B，notebook）| quote | encyclopedia | 维基 Dunmore's Ethiopian Regiment：制服缀 "Liberty to Slaves" | ✅verified |
| 13 | 「全美约五分之一的人口当时是被奴役的」（`jef-n7`，kernel §2 L2「约占总人口五分之一」/§4 反讽，notebook `who-was-excluded`「约五分之一」）| number | textbook | 1776 口径：约 50 万被奴役者 / 约 250 万总人口 = **约 20% = 五分之一**——storyboard + notebook 写"五分之一"**正确**（注意：与 1787 账本的"六分之一"判决不可混用，见 #14 / 红旗 #1）| ✅verified |
| 14 | kernel **内部**「约六分之一的人排除在『人人』之外」（§0 Rule 0）/「约六分之一人口的排除」（§9 中立综合）| number（内部一致性）| textbook | 同一份 kernel 另两处（§2 L2 / §4）写"五分之一"，storyboard + notebook 全写"五分之一"。1776 正确值为五分之一；§0/§9 的"六分之一"疑似从 1787 账本（1790 census 口径）误植 | ⚠️downgrade-wording（见红旗 #1：拉齐为五分之一）|
| 15 | 「1775 年 4 月 Lexington 和 Concord …… 第一枪 …… 『响彻世界的一枪』」（`jef-n5`，kernel §4，notebook `course-of-the-war`）| date+quote | primary | 1775-04-19 Lexington & Concord 开战；"shot heard round the world" 出自 Emerson 1837《Concord Hymn》——文中作"后来有人把那一枪叫"，未误指当时口号，准确 | ✅verified |
| 16 | 「1777 年 Saratoga 大捷 …… 1778 年法国正式结盟（出钱出兵出舰队）」（`jef-n8`，kernel §4，notebook）| date | textbook | Saratoga 1777-10-17 Burgoyne 投降；Franco-American Treaty of Alliance 1778-02-06——文中"1778 结盟"准确 | ✅verified |
| 17 | 「1777-78 年冬 …… Valley Forge …… 冻死饿死了几千人」（`jef-n8`，kernel §4，notebook）| number | textbook | Valley Forge 1777-78 冬营，约 1700–2500 死于疾病/严寒（"几千人"量级相符）| ✅verified |
| 18 | 「1781 年 …… Yorktown …… 华盛顿大陆军加法国陆军和舰队 …… 英军投降」（`jef-n8`/`loy-n7`，kernel §4，notebook）| date+causal | textbook | Yorktown 1781-10-19 Cornwallis 投降；法国陆海军（尤其 de Grasse 舰队）决定性——主流共识 | ✅verified |
| 19 | 「1783 年签《巴黎和约》，英国正式承认美国独立」（`jef-n8`/`loy-n7`，kernel §4，notebook）| date | primary | Treaty of Paris 1783-09-03，英承认美国独立 | ✅verified |
| 20 | 「『人人』实际只指有产白人男性 …… 被奴役者/女性/原住民/无产白人男性 都被排除」（`jef-n7`，kernel §5A/§10，notebook `who-was-excluded`）| representativeness | textbook | 主流史学共识：1776 政治权利实际限于有产白人男性 | ✅verified |
| 21 | 「Abigail Adams 写信叫丈夫『别忘了女士们』（remember the ladies）」（`jef-n7`，notebook keyFigures/`who-was-excluded`）| quote | primary | Abigail Adams 1776-03-31 致 John Adams 信 "Remember the Ladies" 原文 | ✅verified |
| 22 | 「大多数原住民部族选择站在英国一边 …… 因为抢地威胁是殖民者不是远在伦敦的国王」（`jef-n7`，kernel §1脚注/§7，notebook `native-nations-sided-with-britain`）| causal | textbook | 主流史学共识：多数原住民部族倾向英国（英 1763 Proclamation Line 限制西扩，殖民者才是直接抢地威胁）| ✅verified |
| 23 | 「约六万到十万保皇派（估计数）离开 …… 去加拿大/英国/加勒比」（`loy-n7`/`loy-n8`，kernel §3/§6，notebook）| number | textbook | 维基 Expulsion of the Loyalists：约 6 万（Jasanoff）至 8 万–10 万外迁，约半数去加拿大。**文中已标注"估计数"**——处理得当 | ✅verified |
| 24 | 「1783 年英国把一批获自由黑人撤到 Nova Scotia …… 部分后去 Sierra Leone」（`loy-n7`/`ens-n7`，kernel §3/§6，notebook）| date+fact | encyclopedia | BlackPast/维基 Black Loyalist：1783 逾 3000 Black Loyalists 撤往 Nova Scotia；1792 约 1200 人迁 Sierra Leone | ✅verified |
| 25 | 「1863 年 Lincoln 葛底斯堡演说开篇引宣言：『八十七年前 …… 人人生而平等』」（`jef-n9`/`ens-n9`，kernel §5D，notebook keyFigures）| date+quote | primary | Gettysburg Address 1863-11-19 "Four score and seven years ago … all men are created equal" 原文逐字对上 | ✅verified |
| 26 | 「1787 年把被奴役者算成 3/5 个人」（`ens-n8`，kernel §4故事 9/§6，notebook q1）| number | textbook | 宪法 Art. I §2 三五条款——**本 Topic 仅作"革命之后的背叛"一笔带过 + 跨 Topic 指针，不展开制宪博弈，符合与 constitutional-convention-1787 的去重约定** | ✅verified（无 1787 Topic 重叠违规）|
| 27 | 「1776 年是清乾隆四十一年 …… 康乾盛世高峰 …… 当时世界最庞大最富庶的中央集权帝国之一」（kernel §8，notebook `same-era-qing-qianlong`）| date+absolute | encyclopedia | Britannica/维基 Qianlong：1776 = 乾隆四十一年（乾隆 1735/36-1796 在位）；High Qing 鼎盛、人口与经济世界最大之一——准确；Rule 0 中立对照处理合规 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 全部为 ⚠️downgrade-wording（措辞 / 内部一致性收紧），**无事实硬伤、无缺来源、无演绎未标注、无伪造引文**。按影响排序。

1. **[#14/#13]** kernel **内部数字自相矛盾**：「约六分之一」 vs 「约五分之一」被奴役人口
   - **位置**：`american-revolution-1776.md` §0 Rule 0「也把**约六分之一**的人排除在『人人』之外」+ §9 中立综合「也建立在对**约六分之一**人口的排除之上」**两处**写"六分之一"；而同一份 kernel §2 L2「约占总人口**五分之一**」、§4 反讽「**约五分之一**被奴役的人」，以及 storyboard 全部（`jef-n7`「约五分之一」`jef-n10`「五分之一」）+ notebook（`who-was-excluded`「约五分之一」）**统一写"五分之一"**。
   - **问题**：1776 年口径正确值是**约五分之一**（约 50 万 / 约 250 万 = 约 20%），storyboard/notebook/kernel 多数处的"五分之一"是**对的**；kernel §0/§9 的两处"六分之一"是**孤立的内部矛盾**，疑似从 sibling Topic constitutional-convention-1787 账本（用 1790 census：70 万/393 万=17.8%≈六分之一）误植过来。
   - **建议**：把 kernel §0、§9 这**两处"约六分之一"统一改回"约五分之一"**，与全 Topic 其余口径拉齐。**注意：不要反向把"五分之一"改成"六分之一"**——那会引入 1787 口径的错误。这是全 Topic 唯一的数字一致性问题，优先级最高（虽不影响 storyboard 学生侧，但 kernel 是事实地基，自相矛盾应消除）。

2. **[#1]** 「Adams 三分法」归属——**已合规，列此条仅为可选增强**（非必改）
   - **位置**：`loy-n2` 括号短句 +  kernel §3/§9/§10 + notebook `patriot-loyalist-neutral-split`。
   - **现状（正确）**：文中已明确写"这个『三三三』只是 Adams 的一个粗估，不是精确统计；后来的历史学家争论过真实比例，有人说保皇派没那么多"。**完全满足任务 brief 的核心要求**（标注为有争议的估计、非精确数字）。
   - **可选增强**：任务 brief 还提到一个更深的史实——Adams 那句"三分法"的**原始语境其实是说美国人对『法国大革命』的舆论分裂（1815 年致 James Lloyd 信），后世才被误植到独立战争的派别构成上**。当前文本未点出这层"连语境都被搬错了"。若想做到 AP teacher 级别的严谨，可在 kernel §9 historiography 的"Adams 三分法是估计而非统计"条**加一句**："且 Adams 原话语境是评论美国人对法国大革命的态度，被后世（约 1900 年起）误植到独立战争派别上"。**但这是锦上添花，7 年级层面当前标注已足够安全**，列为低优先。

3. **[#13 表述]** 「全美约五分之一的人口当时是被奴役的」——可选精度收紧（低优先）
   - **位置**：`jef-n7` / kernel §2 L2 / notebook `who-was-excluded`。
   - **问题**：数字本身正确（1776 约 20%）。唯一小瑕疵：约 50 万"非裔"中绝大多数被奴役但有极少数自由黑人，"五分之一被奴役"略微四舍五入了"自由黑人"那一小部分。量级与教学结论（人人平等把约五分之一人关门外）完全成立。
   - **建议**：可保留（7 年级层面"约五分之一被奴役"是教科书通用表述）；若要更严可写"约五分之一是非裔、其中绝大多数被奴役"。**最低优先级，非必改。**

4. **[#27 术语]** 「康乾盛世」措辞——Rule 0 合规，仅提示
   - **位置**：kernel §8 / notebook `same-era-qing-qianlong`。
   - **问题**：**非事实硬伤**。"康乾盛世/High Qing"是标准史学term，1776=乾隆四十一年准确，Rule 0 中立对照（不褒贬美/清）处理到位。唯一提示：英文学界多用"High Qing era"，中文"盛世"一词自带价值色彩，但文中已用 Rule 0 显式声明"不能说美国先进自由、清代落后专制"对冲，**无需改**。列此条仅为透明。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| Thomas Jefferson | jefferson | **真实历史人物**（1743-1826），姓名/生卒/事迹/Monticello/约 200 被奴役者皆有据 | N/A — 非合成 |
| 「一个保皇派殖民者」| loyalist | **类型化代表角色**（无具名/无虚构生卒），代表真实存在的约 6-10 万保皇派群体；第一人称为**叙事代入手法**，非伪造具名档案人物 | ✅可接受（`loy-n1` 自陈"一个殖民地的普通人"，meta/kernel §3 标为"被遗忘的约三分之一"类型角色；无具名捏造）|
| 「一个被奴役的人」| enslaved-person | **类型化代表角色**（无具名/无虚构生卒），kernel §3 明确"代表数十万真实存在却大多没留下名字的被奴役者"；第一人称内心独白为叙事重构 | ✅**已透明标注**（kernel §3 括号声明代表性；无伪造具名档案）|
| 「你就是 TA」第二人称代入（`*-n4` peak）| 全 3 lens | 把读者置入主角做选择，属**教学代入手法**，非伪造史实人物 | N/A — 教学手法，非合成角色 |
| Dunmore 宣言「投英军即自由」场景 / Ethiopian Regiment 军服绣字 | enslaved-person `ens-n4`/`ens-n5` | 非虚构——Dunmore 宣言、Ethiopian Regiment、"Liberty to Slaves" 均史实 | ✅史实，非演绎 |

**结论**：本 topic **无未标注的合成人物**。两个类型化代表角色（Loyalist / 被奴役者）均无具名/无虚构生卒，且 kernel §3 已声明其"代表真实群体"的性质，符合 `HISTORY_EVIDENCE_LAYER.md` §1.3 / §2.1 composite 透明红线。第一人称叙事重构未排成史料档案样式，无伪造引文。

---

## Adams「1/3 each」归属专项核验（任务 brief 重点）

> 任务 brief 特别要求：核验"1/3-each = John Adams ESTIMATE 是否被准确处理为有争议的估计、而非精确数字；并注意 Adams 原话其实是关于法国大革命舆论、史学界对套用到独立战争有争议"。

**核验结论：处理准确，合规。** 逐条对照：

1. **标注为 Adams 的估计、非精确统计** ✅ —— `loy-n2` 正文先给"三三三"，**紧接括号短句**："你得知道，这个『三三三』只是 Adams 的一个粗估，不是精确统计。后来的历史学家争论过真实比例，有人说保皇派没那么多。" kernel §3、§9（专列"Adams 三分法是估计而非统计的方法论提醒"条）、§10 误解#1、notebook `patriot-loyalist-neutral-split`（"⚠️ 事实纪律 …… 考试写的时候要标明这是估计"）四处呼应。
2. **未当成精确数字使用** ✅ —— 全 Topic 凡用到"约三分之一"均配"约/粗估/估计"限定词，synthesis（`loy-n10`/`loy-n11`）情感支点用的是"被胜利者抹掉的约三分之一"而非把它当硬数据。
3. **Web 核实**（Journal of the American Revolution / HNN / breedshill.org）——确认 Adams 三分法出自 **1815 致 James Lloyd 信**，**原话语境是美国人对『法国大革命』的舆论分裂**，约 1900 年（Sydney Fisher 1902）起被误植到独立战争派别构成；现代史学：保皇派约 20%、爱国派 40%+。
4. **唯一可选增强**（红旗 #2，非必改）：文中标注了"是估计/有争议"，但**未点出"连原始语境都被搬错（本是评法国大革命舆论）"**这层更深的事实。7 年级层面当前标注已足够安全；若追求 AP teacher 级严谨，可在 kernel §9 加一句点明原始语境。

**判定**：本 Topic 对 Adams 归属的处理是**正面范例**——既保留了"约三分之一保皇/革命非全民一心"这一关键反直觉教学点，又用 anti-fab 括号把它诚实降级为"有争议的粗估"，**未犯把它当精确数据的常见错误**。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— jefferson（perpetrator-actor，11 节点）/ loyalist（lonely-mediator，11 节点）/ enslaved-person-receiving-end（receiving-end，DEFAULT，11 节点）+ notebook（8 考点卡 + 3 DBQ 题）。红旗分布：#1 在 kernel（§0/§9 内部矛盾，不在 storyboard 学生侧）；#2/#3 跨 lens 共享；#4 在 kernel §8/notebook。
- **直接引语分层核验**（本 Topic 最高风险类，全部 ✅）：
  - *真实史料*："all men are created equal …"（独立宣言）/"Liberty to Slaves"（Ethiopian Regiment 制服）/"Four score and seven years ago …"（Gettysburg）/"Remember the Ladies"（Abigail Adams 1776 信）—— 均逐字对得上一手文本。
  - *概括转述句*：Adams 让笔之言（"你写得比我们都好 …… 我招人恨你不招人恨"）—— 文中作概括转述，未排成档案逐字引，且与 Adams 1822 回忆录意思相符。Dunmore 宣言 kernel §5C 用"原文大意"标注后再给 7 年级读法，未伪造逐字。**无把演绎句排成史料档案样式的违规，无伪造引文。**
  - *第一人称内心独白*（Loyalist / 被奴役者）：属类型化代表角色的叙事重构，kernel §3 已声明代表性，未冒充具名一手档案。
- **去重核验（与 constitutional-convention-1787 不重叠）** ✅ —— 本 Topic 的 3/5 条款（`ens-n8`/#26）仅作"革命之后的背叛"一笔带过 + 跨 Topic 指针，**不展开** Great Compromise / Madison / Sherman / Mum Bett 等 1787 制宪博弈，符合 meta.notes 与 kernel §0 的去重约定。
- **用到的外部核实来源**：Journal of the American Revolution（Adams Rule of Thirds）、History News Network、breedshill.org（One Third Myth）、National Archives（Declaration / Treaty）、Wikipedia（Committee of Five / Dunmore's Proclamation / Black Loyalist / Expulsion of the Loyalists / Ethiopian Regiment / American Revolutionary War / Franco-American alliance）、Monticello.org（Jefferson slavery FAQ）、Encyclopedia Virginia + Gilder Lehrman（Dunmore）、American Battlefield Trust（Saratoga / Intolerable Acts）、history.state.gov（French Alliance / parliamentary taxation）、Mount Vernon（Coercive Acts / Dunmore），BlackPast（Black Loyalists Nova Scotia/Sierra Leone）、Britannica + Wikipedia（Qianlong）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2（Fact Ledger）—— 所有高风险 claim 均有来源或可降级为谨慎措辞，**无 needs-source 缺口、无 ✋ 硬伤、无伪造引文**。建议处理 **红旗 #1（kernel §0/§9 六分之一→五分之一，唯一必改项）** 后过 Gate 2；#2/#3/#4 为低优先级可选项，可与 #1 同批改或暂留。
