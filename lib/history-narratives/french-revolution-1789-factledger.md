# 法国大革命与拿破仑 1789-1815 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    french-revolution-1789
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/french-revolution-1789.js（3 lens: robespierre / lafayette / paris-washerwoman-receiving-end）+ lib/history-narratives/french-revolution-1789.md
claim 总数:  28
🚩 红旗数:   5（需创始人审）
```

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`（后三类进红旗）。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | 「1789.7.14 巴黎人攻占巴士底狱（王权象征，后成法国国庆日）」（`rob-n3`/`pw-n3`/`laf-n3` / kernel §2·§4.2·附A）| date | encyclopedia | 攻巴士底 1789.7.14，权威一致；7.14 为法国国庆日，确证 | ✅verified |
| 2 | 「攻陷时巴士底只关了 7 名囚犯；人群主要为夺火药、出于恐惧与饥饿，不是为抽象『自由』」（kernel §10.1·§4.2 / `pw-n3` 暗含）| number / causal | encyclopedia | 维基/Britannica：当日仅 7 名囚犯（4 伪造犯 + 2 精神病人 + 1 贵族）；人群目标为火药/武器。确证，且文中主动清此坑（误解 #1）| ✅verified |
| 3 | 「1789.8《人权宣言》『人人生而自由，权利平等』，Lafayette 参与起草」（`rob-n3`/`laf-n3`/`pw-n6` / kernel §3·§5·附A）| date / quote | primary | Avalon/维基：1789.8.26 通过；Art.1「Men are born and remain free and equal in rights」逐字对得上；Lafayette 参与起草确证 | ✅verified |
| 4 | 「三个等级：教士/贵族/第三等级，第三等级占全国约九成八（98%）」（`rob-n2` / kernel §2·附B）| number | encyclopedia | 第三等级约占 97-98%（约 2700 万中第一等级约 10 万 + 第二等级约 40 万）。98% 处于通用区间上沿，成立 | ✅verified |
| 5 | 「Louis XVI 因财政破产召开停了约 175 年（『快两百年』）的三级会议」（`rob-n2`/kernel §2·§4.1·附A）| date / causal | encyclopedia | 三级会议 1614 后停，1789.5.5 重开 = 175 年；财政危机（部分因援美独立战争开销）确证 | ✅verified |
| 6 | 「1789.6 第三等级自立国民议会，宣誓写宪法（网球场宣誓）」（`rob-n2`/kernel §4.1·附A）| date | encyclopedia | 1789.6 国民议会成立 + Tennis Court Oath 1789.6.20，确证 | ✅verified |
| 7 | 「1789 年春一个工人一天工钱几乎全用于买一家一天的面包 / 面包价翻倍」（`rob-n2`/`pw-n2` / kernel §2·L1）| number | encyclopedia | 1788 歉收致 1789 春面包价飙升，巴黎工人约一半甚至更多日薪用于面包；峰值期接近全部日薪。处于可证上沿，成立 | ✅verified |
| 8 | 「Robespierre 是『不可腐蚀者』，1789 年革命刚起时主张废除死刑」（`rob-n1`/`rob-n8` / kernel §3·附C）| date / quote | encyclopedia | 「不可腐蚀者」确证；废死刑主张确有，**但著名演说为 1791.6.22（制宪议会），非『1789 年革命刚起时』** → 时间略前移 | ⚠️downgrade-wording |
| 9 | 「1791.7.17 Champ de Mars，Lafayette 任总司令的国民自卫军向人群开枪，数十平民倒下」（`laf-n5` / kernel §4.5·附A）| date / number | encyclopedia | Champ de Mars 屠杀 1791.7.17，自卫军开枪致约 30-50 人死，确证。「几十个」准确 | ✅verified |
| 10 | 「1791 Gouges《女权宣言》第 10 条『女人有权走上断头台，就该同样有权走上讲台』」（`rob-n6`/`laf-n6`/`pw-n6` / kernel §5·附A）| quote | primary | Gouges 1791 原文 Art.10 逐字对得上（"woman has the right to mount the scaffold...rostrum"）。确证为真史料引文 | ✅verified |
| 11 | 「Gouges 1793.11.3 死于断头台，罪名是政治立场（反雅各宾/同情吉伦特/主张处死国王须经公投），不是『因要求女权』」（`rob-n6`/`laf-n6`/`pw-n6` / kernel §3·§10.4）| date / causal | encyclopedia | 1793.11.3 处决确证；罪名为煽动/联邦主义/反革命（与吉伦特派关联），非女权。文中主动清此坑（误解 #4），精度高 | ✅verified |
| 12 | 「Gouges 与 Robespierre 一样是革命支持者/共和主义者/反对奴隶制」（`rob-n6` / kernel §3）| representativeness / motive | encyclopedia | Gouges 共和派、废奴主义者、革命支持者，确证 | ✅verified |
| 13 | 「1793 公安委员会掌权 + 《嫌疑犯法令》允许凭怀疑即抓审处决（不需证据）」（`rob-n5` / kernel §4.9·附B）| date / causal | encyclopedia | Committee of Public Safety 1793 + Law of Suspects（1793.9.17）凭怀疑逮捕，确证 | ✅verified |
| 14 | 「断头台先杀 Louis XVI（1793.1）→王后→政敌贵族神父→革命同志」（`rob-n5` / kernel §4.8）| date | encyclopedia | Louis XVI 处决 1793.1.21；Marie Antoinette 1793.10.16；雅各宾内部清洗（吉伦特/埃贝尔派/丹东派）顺序确证 | ✅verified |
| 15 | 「恐怖统治一年多里全法国约『几万人 / 数万人』被处死」（`rob-n5`/`rob-n10` / kernel §1·§6）| number | encyclopedia | 官方死刑约 16,594（巴黎约 2,639）+ 未审/狱中死约 1-2 万；总区间约 1.8 万-4 万（含旺代等省外延可达更高）。「几万人」保守稳妥 | ✅verified |
| 16 | 「Robespierre 自辩『对敌人仁慈，就是对人民残忍』/『恐怖是美德的一部分』」（`rob-n5`/`rob-n10` / kernel §5）| quote | inference | 系对 Robespierre 1794.2.5 国民公会演说核心论点的**释义**（virtue/terror）。kernel §5 已明标「非逐字引文」；storyboard 以第一人称内心语呈现，非排成史料引文 | ✅verified |
| 17 | 「1794 春恐怖失控，巴黎一个月处死『上千人』」（`rob-n7` / kernel §4.9）| number | encyclopedia | 1794.6-7「大恐怖」（Law of 22 Prairial 后）巴黎处决急升，6 周内约 1,300-1,400 人 → 月处死上千确证 | ✅verified |
| 18 | 「Robespierre 推『最高主宰崇拜』想立理性信仰」（`rob-n7` / kernel §4.9）| motive | encyclopedia | Cult of the Supreme Being 1794.5 设立，确证 | ✅verified |
| 19 | 「1794.7.27 反扑 → 议会逮捕 → 下巴中枪（自杀或他人未定论）→ 7.28 上自己的断头台，36 岁」（`rob-n8` / kernel §4.11·附A）| date / number | encyclopedia | 热月 9 日（7.27）政变 → 7.28 处决；下巴中枪成因至今未定；扯绷带致惨叫有记载；36 岁确证 | ✅verified |
| 20 | 「Lafayette『两个世界的英雄』，1757 生贵族，19 岁自费赴美当华盛顿副手，Brandywine 腿中枪不退」（`laf-n1`/`laf-n2` / kernel §3·附C）| date / motive | encyclopedia | Hero of Two Worlds、1757 生、1777 赴美、Brandywine（1777.9.11）腿伤、华盛顿亲信，确证 | ✅verified |
| 21 | 「1792 Lafayette 被宣布叛国 → 逃出国境被奥/普关押五年」（`laf-n7`/`laf-n8` / kernel §3）| date / number | encyclopedia | 1792.8 被宣为叛国出逃 → 1792-1797.9.19 被联军关押（Wesel/Magdeburg/Neisse/Olmütz），约 5 年，确证 | ✅verified |
| 22 | 「Lafayette 活到 1834 年（76 岁），拒绝向拿破仑皇冠低头」（`laf-n9` / kernel §3·附C）| date / motive | encyclopedia | 卒 1834（76 岁）确证；拒拿破仑职位/反对帝制有据 | ✅verified |
| 23 | 「1789.10.5-6 凡尔赛妇女大游行：几千女工/市场妇女带菜刀棍棒拖大炮冒雨步行二十多公里逼国王回巴黎」（`pw-n4`/`pw-n5` / kernel §4.4·附A）| date / number | encyclopedia | Women's March 1789.10.5；约 7,000 妇女、12 英里（≈20 km）、雨中、携武器/大炮，确证。「二十多公里」准确 | ✅verified |
| 24 | 「外号『面包师、面包师太太和小面包师』（国王/王后/王储）」（`pw-n5` / kernel §4.4）| quote | encyclopedia | "the baker, the baker's wife, and the baker's boy/little baker" 为当时流传外号，确证 | ✅verified |
| 25 | 「玛丽王后说过『没面包就吃蛋糕』是后世附会，无可靠史料」（kernel §10.2，**误解清坑专区**）| quote | encyclopedia | **重点核实**：维基/Britannica/Live Science 一致——无证据出自 Marie Antoinette；源出 Rousseau《忏悔录》（约 1765）「吃 brioche」，1843/1870s 后被附会到她身上。文中主动标为伪传，处理**正确** | ✅verified |
| 26 | 「1793.1 国王被处死，革命从『改革君主制』走到『弑君共和』」（`pw-n7`/`rob-n5` / kernel §4.8·附A）| date / causal | encyclopedia | Louis XVI 1793.1.21 处决；首次法国王被臣民处决，确证 | ✅verified |
| 27 | 「恐怖时期天不亮排长队抢劣质面包 + 邻里互相告发的恐惧笼罩全城」（`pw-n7`/`pw-n8` / kernel §1·L1）| number / rhetoric | inference | 面包短缺/限价（Maximum）/排队、告发气氛有广泛史料支撑；具体「天不亮黑面包」为合成人物的合理感官细节，挂在已证集体经验上 | ✅verified |
| 28 | 「1799 拿破仑政变掌权，1804 自我加冕称帝；《拿破仑法典》把『法律面前人人平等』『废贵族特权』写成成文法传遍欧洲；1815 滑铁卢垮台」（`rob-n9`/`laf-n8`/`pw-n9` / kernel §4.12·§6·附A）| date | encyclopedia | 雾月政变 1799.11；称帝 1804.12.2；Code civil 1804；滑铁卢 1815.6，确证 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#8]** `rob-n1`：「1789 年革命刚起来时，我站在议会里，主张废除死刑」/ `rob-n8` kernel §3「革命初期他在议会主张废除死刑」。
   - 问题：**日期略前移（重点 C 邻类）**。Robespierre 反对死刑的著名演说是 **1791.6.22 在制宪议会**，不是「1789 年革命刚起来时」。1789 年他确已是议会激进派、整体倾向也反死刑，但作为「废死刑主张」的标志性时点应是 1791。把它系在「1789 革命刚起」会被史实党挑「时点不准」。
   - 建议：低优先级。可微调为「革命初期（1791 年）我在议会主张废除死刑」，或保留「革命初期」这个软措辞（确实属革命头两年、立场真实），但**不要写成「1789 年那一刻」的确指**。引语「国家用杀人证明杀人有罪是矛盾的」是其演说真实论点，可保留。

2. **[#8 副]** `rob-n1` engagementHook / N1：「一个 1789 年主张废除死刑的人，四年后把成千上万人送上断头台」。
   - 问题：同上时点。「1789→1793」的四年反差叙事很有力，但「1789 主张废死刑」严格说是 1791。**另需注意**：1792 年底 Robespierre 反过来**坚决主张处死 Louis XVI**——即「废死刑→要国王的命」的转折早在 1792 就已发生，不止「四年后」。这不是硬错（反差成立），但若被深究，「他一直反死刑直到 1793 才变」的隐含读法不准确。
   - 建议：低优先级。反差框架可保留（教学张力正当）；若想更稳，可让叙事在 N5 附近承认「1792 年我已开始主张处死国王」（kernel §5 历史上确有 Robespierre"Asking the Death Penalty for Louis XVI"1792 文本支撑），避免「纯洁废死者→突然变恐怖」的过度戏剧化弧线。

3. **[#15]** `rob-n5`/`rob-n10` kernel §1·§6：「恐怖统治约『几万人/数万人』被处死」。
   - 问题：**数字范围解释（重点 A 轻类，非硬伤）**。学界口径分歧大：仅官方死刑约 16,594；含未审/狱中死约 1.8 万-4 万；若并入旺代等省的镇压可达约 25 万。「几万人」是**保守且诚实**的中性表述，落在主流区间，**不夸大**。
   - 建议：可保留。若要更精确可注「官方判死约 1.6 万-1.7 万，含未经审判及外省镇压估计更高」，但当前措辞已稳妥，**极低优先级**。

4. **[#16]** `rob-n5`/`rob-n10` kernel §5：Robespierre「对敌人仁慈就是对人民残忍」「恐怖是美德一部分」。
   - 问题：**引语分层（重点 C）**。这是对 Robespierre 1794.2.5「论政治道德原则」演说核心论点的**释义/合成**，非逐字一手引文。kernel §5 已自标「释义，非逐字引文」，处理良好；storyboard 以第一人称内心独白呈现（"我对自己说的话是…"），属角色语气而非排成史料引号引文，风险已被措辞吸收。
   - 建议：**无需改动**，仅记录在案确认透明度到位。属「已透明降级」类，列此供创始人知悉引语来源层级。

5. **[#7/#27]** `pw-n2`/`pw-n7`：「1789 春一天工钱几乎全买一家一天面包」+「天不亮排队常只剩黑乎乎掺东西的劣质面包」。
   - 问题：**强修辞数字 + 合成感官细节（重点 A 轻类）**。面包占日薪比例峰值确可逼近全部（史料支持「约一半甚至更高，危机峰值近全部」），「几乎全部」处于上沿；恐怖期劣质/掺杂面包、排队、告发为真实集体经验，但「天不亮黑面包」是合成女工的个体感官补充。
   - 建议：可保留（落在可证上沿 + 合成人物已透明标注）。若想更稳，「几乎全部」可软化为「大半甚至几乎全部」。**极低优先级**。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 巴黎洗衣女工 | `paris-washerwoman-receiving-end`（全 11 节，default lens；含 `pw-n1` gold-standard hook）| **无真名**；约 1760 年生为叙事设定；具体家事（潮湿小屋、洗衣换铜板、孩子挨饿、个体内心独白、「天不亮黑面包」）为叙事补充；**底层集体史（攻巴士底在场、凡尔赛妇女大游行、面包危机、恐怖期排队与告发恐惧、被《人权宣言》「人」排除在投票权外）为 documented** | ✅ **已透明标注**：lens description 明示「一个虚构但贴着真实史料的…合成的…代表当时千千万万没留下名字的巴黎女工」；`pw-n1` 正文「我没有名字留给你…这一遍里的『我』，是把那些没名字的巴黎女工，合成成一个人」；kernel §3「**这是一个虚构但贴着真实史料的合成人物**」+「史料说明」段落显式区分真事 vs 个体演绎；meta.notes 标 composite。**符合 §1.3 dark-topic 红线（composite 必须标明）** |

> 其余出场人物（Robespierre / Lafayette / Olympe de Gouges / Louis XVI / Marie Antoinette / Napoleon）均为**真实历史人物**，非合成。Robespierre / Lafayette 两 lens 为第一人称视角叙事（内心戏属合理 inference，挂在已证事实骨架上），未虚构其生平骨架。Gouges 为跨 lens / 跨 Topic 锚（enlightenment gouges-mediator），生平与引语均经核实。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `robespierre`（claim #1,3,4,5,6,7,8,13,14,15,16,17,18,19,26,28）/ `lafayette`（#3,9,20,21,22,28）/ `paris-washerwoman-receiving-end`（#1,2,3,7,10,11,23,24,25,26,27,28；含 N1 gold-standard hook + N4/N5 凡尔赛游行重点节点）。
- **重点核查结论**：
  - **重点：因果/framing 中立性** —— Rule 0 中性框架**到位**。革命起因（财政危机 + 等级不公 + 面包饥荒，三层并列，未简化为单因）、恐怖统治 framing（既给 Robespierre 的内在逻辑「为最纯洁理想杀人」，又通过 Gouges/巴黎女工呈现代价；synthesis 节点两种说法并立、不下结论）均符合反 Whig 要求。kernel §8 中国结构对照明确「不类比、不下高低结论」。**无 framing 红旗**。
  - **重点：「面包/Let them eat cake」伪引语** —— `[#25]` **核实通过且处理正确**：文中（kernel §10.2 误解清坑）主动标注「没有可靠史料证明这句话出自玛丽王后，是后世附会」，与维基/Britannica/Live Science 一致（源出 Rousseau，1843/1870s 后被附会）。storyboard 正文**未**使用此伪引语，仅用真实的「面包师」外号 `[#24]`，分层清晰。**这是本 topic 引语处理的亮点**。
  - **重点 A（数字夸张）**：恐怖死亡数 `[#15]` 保守稳妥；面包占日薪比例 `[#7/#27]` 上沿但合理 → 仅轻类红旗。无「每米一死」式伪精确比率类硬伤。
  - **重点 C（引语分层）**：真史料引文（《人权宣言》Art.1 `[#3]`、Gouges Art.10 `[#10]`、「面包师」外号 `[#24]`）与释义/合成（Robespierre 论恐怖与美德 `[#16]`，kernel §5 已自标「非逐字引文」）分层清晰；伪传引语 `[#25]` 被主动标注辟谣。
  - **唯一应处理项**：`[#8]` Robespierre 废死刑主张的**时点**（实为 1791.6 而非「1789 革命刚起」）+ 1792 已转向主张处死国王 → 影响「1789→1793 四年反差」叙事的严格准确性。属低优先级措辞微调，非硬错。
- **用到的外部核实来源**：Wikipedia（Storming of the Bastille / Declaration of the Rights of Man and of the Citizen / Olympe de Gouges / Fall of Maximilien Robespierre / Reign of Terror / Women's March on Versailles / Execution of Louis XVI / Champ de Mars massacre / Estates General of 1789 / Let them eat cake）、Britannica（Bastille / Reign of Terror / Robespierre / Declaration / Marie Antoinette cake）、Avalon Project（《人权宣言》原文）、revolution.chnm.org（Gouges《女权宣言》Art.10 原文 + Declaration 26 Aug 1789）、World History Encyclopedia（Fall of Robespierre / Estates-General / Women's March / Champ de Mars / Prisoner of Olmütz）、Live Science（"Let them eat cake" 辟谣）、Lafayette College / Cornell（Olmütz 关押 1792-97）、marxists.org（Robespierre 1791.6 论死刑演说）。
- **总评**：本 topic 史实骨架**非常稳健**——所有日期（巴士底 7.14、《人权宣言》8.26、Louis XVI 1793.1.21、Gouges 1793.11.3、Robespierre 1794.7.28、Champ de Mars 1791.7.17、凡尔赛游行 10.5-6、拿破仑 1799/1804/1815）、关键数字（7 名囚犯、第三等级 98%、175 年三级会议间隔、20km 游行、恐怖死亡区间、月处死上千、Lafayette 关押 5 年）、引语（《人权宣言》Art.1、Gouges Art.10、「面包师」外号）均经权威核实通过。**因果 framing 中性、反 Whig 到位；伪引语「让他们吃蛋糕」被主动辟谣（最大风险点处理正确）；composite 巴黎女工透明标注完整。** 无 `needs-source`（无悬空高风险事实），无与权威正面冲突的硬错。5 条红旗中仅 `[#8]` Robespierre 废死刑时点为应处理项（低优先级措辞），其余 4 条为可保留的轻类微调或已透明降级项。**可进 Gate 2；建议顺手处理 #8 时点后上线。**
