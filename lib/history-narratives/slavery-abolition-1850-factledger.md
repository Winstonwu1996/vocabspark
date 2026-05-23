# 奴隶制与废奴 1830-1860 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    slavery-abolition-1850
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/slavery-abolition-1850.js（3 lens: calhoun / douglass / tubman-receiving-end）+ lib/history-narratives/slavery-abolition-1850.md
claim 总数:  28
🚩 红旗数:   7（需创始人审）
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
| 1 | 「1837 年 2 月 6 日，参议院，Calhoun『positive good』演讲」（`cal-n1` / `cal-n6` / kernel §4.3·§5A·附A）| date / quote | primary | Calhoun「Slavery a Positive Good」确为 1837.2.6 参议院演讲；「positive good」「not...evil...but a positive good」为原文措辞。Teaching American History / SPLC 原文确证 | ✅verified |
| 2 | 「Calhoun 南卡人 1782 生，耶鲁毕业，做过副总统、国务卿、参议员」（`cal-n1` / kernel §3·附C）| date | encyclopedia | 1782 生于南卡 Abbeville；耶鲁 1804 毕业；副总统（1825-32）、国务卿（1844-45）、参议员，确证 | ✅verified |
| 3 | 「1793 年发明轧棉机（cotton gin），剥棉籽快几十倍→棉花成最大出口」（`cal-n2` / kernel §2·§4.1·附A）| date / causal | encyclopedia | Whitney cotton gin 1793 专利；棉花经济爆发、antebellum 最大出口货，APUSH 标准表述，确证 | ✅verified |
| 4 | 「Calhoun positive good 三步辩护：攻击北方『工资奴隶制』/ 援引古希腊罗马 / 黑人种族『天生』适合被统治」（`cal-n3` / kernel §3·§5A）| quote / motive | primary | 演讲原文确有 labor-capital 冲突论（南方免于此乱）、被奴役者「physically, morally, intellectually」受益论。「古希腊罗马文明建在奴隶制」是 Calhoun 论证脉络的合理概括（非逐字一句）；种族「天生劣等」论是其立场。措辞作概括成立 | ✅verified |
| 5 | 「Calhoun 州权 + 少数派否决（minority veto）理论：州主权、联邦是代理、可拒执行甚至退出联邦」（`cal-n4` / `cal-n5` / kernel §3·附B）| causal | encyclopedia | states' rights / nullification / concurrent majority 是 Calhoun 政治思想核心，确证。文中「少数派否决」是 concurrent majority 的通俗译法，准确 | ✅verified |
| 6 | 「1820 Missouri Compromise 画地理线维持南北平衡（线北无奴隶制/线南可以）」（`cal-n5` / kernel §2·§4.2·附A）| date | textbook | Missouri Compromise 1820，36°30′线，APUSH 标准，确证 | ✅verified |
| 7 | 「Calhoun 1850 病重写演讲让人代念警告南方可退出；1850.3.31 去世」（`cal-n5` / kernel §3·§4·附A）| date | encyclopedia | 1850.3.4 Calhoun 最后演讲由 James Mason 代念（Calhoun 在场但太弱）；1850.3.31 去世，确证 | ✅verified |
| 8 | 「Fugitive Slave Act 1850：逃奴必抓回送还原主；帮逃奴的北方人（哪怕一口饭一张床）犯法」（`cal-n7` / `tub-n8` / kernel §4.6·§5C·附A）| date / causal | primary | 1850 法案：要求全国官民协助、援助/藏匿罚 $1,000+6 月监禁、无陪审团、被告不得作证。「一口饭一张床」是对「援助逃奴罪」的具象化，方向准确（实际门槛是「妨碍/援助 rendition」）| ✅verified |
| 9 | 「Kansas-Nebraska Act 1854 推翻 1820 老线→popular sovereignty→Bleeding Kansas 开枪互杀」（`cal-n8` / kernel §4.8·附A）| date / causal | textbook | KS-NE Act 1854，废 Missouri 线、territorial 自决；Bleeding Kansas 流血冲突，APUSH 标准，确证 | ✅verified |
| 10 | 「Dred Scott 1857：黑人非且永不能是美国公民 + 国会无权在任何地方禁奴隶制」（`cal-n8` / kernel §4.9·附A）| date / quote | primary | Dred Scott v. Sandford 1857 判决两点确证（Taney 法院）。Dred Scott 败诉，确证 | ✅verified |
| 11 | 「战后宪法加修正案废奴 / 给黑人公民权 / 投票权」（`cal-n9` / `doug-n9` / `tub-n9` / kernel §6）| date | textbook | 第十三（1865 废奴）/十四（1868 公民权·平等保护）/十五（1870 投票权）修正案，确证 | ✅verified |
| 12 | 「同一套『自由』话术来自启蒙；同被加勒比奴隶用来推翻主人、又被 Calhoun 用来辩护奴隶制」（`cal-n9` / kernel §1·§8）| causal | inference | 启蒙自由话语 + 海地革命（加勒比奴隶用自由话语起义）是史学共识；「话中性、关键谁用」是诠释性论点，合理 inference，文中作思辨呈现而非断言，稳妥 | ✅verified |
| 13 | 「Douglass 约 1818 生马里兰，生来被奴役，连生日都不知道」（`doug-n1` / kernel §3·附A·附C）| date | encyclopedia | 约 1818.2 生于 Talbot County, MD；被奴役者不被记录生日，确证 | ✅verified |
| 14 | 「巴尔的摩女主人教认字、男主人喝止『教奴隶认字他就不肯当奴隶』」（`doug-n2` / kernel §3·§4.4）| quote / motive | primary | Douglass 自传《Narrative》自述 Hugh Auld 此语（大意「learning would spoil the best slave」）。属 Douglass 第一人称回忆引语，作概括引成立 | ✅verified |
| 15 | 「1838 年 20 岁借自由黑人水手证件、穿水手衣逃北」（`doug-n3` / kernel §3·§4.4·附A）| date | encyclopedia | 1838.9.3 Douglass 持自由黑人海员证件、着水手装逃离巴尔的摩，确证（时年约 20）| ✅verified |
| 16 | 「1841 废奴集会临时上台讲奴隶经历，被 Garrison 发现成明星演说家」（`doug-n3` / kernel §3·§4.4·附A）| date | encyclopedia | 1841 Nantucket 反奴隶制集会上 Douglass 即兴发言、被 Garrison 圈子吸纳，确证 | ✅verified |
| 17 | 「1845 出版自传《一个美国奴隶的生平自述》写真名真地名真主人（时仍法律逃奴）→逃英国躲两年→英国朋友凑钱赎身」（`doug-n5` / kernel §3·§4.4·附A）| date | encyclopedia | 1845《Narrative》出版（4 月）、含真实姓名地名；1845-47 赴英爱苏巡讲、英国友人募款于 1846 赎其自由，确证。「躲两年」≈1845.8-1847.4，准确 | ✅verified |
| 18 | 「1847 办《北极星报》、与 Garrison **公开决裂**（路线之争：宪法是『跟魔鬼签的契约』vs『自由正义』可反奴）」（`doug-n6` / `doug-n7` / kernel §3·§4.4·附A·附C）| date / causal | encyclopedia | 1847 创《North Star》（Garrison 反对此举=摩擦起点）属实。**但**宪法解读的**正式公开决裂在 1851**（North Star 1851.5.15「Change of Opinion Announced」社论，Douglass 公开宣布宪法为反奴文件、不再是 Garrisonian）。文中把 1847 办报与「公开决裂/宪法路线翻转」并为一年=**时间压缩** | ✋flagged |
| 19 | 「Garrison 视宪法为『跟魔鬼签的契约』（covenant with death / agreement with hell）主张退出政治甚至北方分家」（`doug-n6` / `doug-n7` / kernel §5B·附C）| quote | primary | Garrisonian 口号「a covenant with death and an agreement with hell」（典出 Isaiah），disunionism（北方脱离）确证。文中译「跟魔鬼签的契约」为意译概括，方向准确 | ✅verified |
| 20 | 「宪法正文从未出现 slave/slavery，用 other persons / such persons 绕开」（`doug-n7` / kernel §5B·§10）| absolute | primary | 宪法 1787 原文（3/5 条款、逃奴条款、奴隶贸易条款）均用 "other Persons" / "Person held to Service" 等回避词，正文确无 slave/slavery 字样，确证 | ✅verified |
| 21 | 「1852 年 7 月 5 日罗切斯特独立日演讲，名句『七月四号对你们的奴隶算什么』（故意选 7.5 不 7.4）」（`doug-n8` / kernel §4.7·§5D·附A）| date / quote | primary | "What to the Slave Is the Fourth of July?" 1852.7.5 Rochester，原句确证；故意选 5 日，确证 | ✅verified |
| 22 | 「内战中 Douglass 当面逼 Lincoln 把废奴定为战争目标 + 让黑人当兵；两个儿子参军」（`doug-n9` / kernel §3·§6·附A）| causal / motive | encyclopedia | Douglass 多次会见 Lincoln、力主 emancipation 为战争目标与黑人入伍；其子 Lewis、Charles 入 54th Massachusetts，确证。「当面逼」是对其施压角色的强措辞，方向准确（Lincoln 决策另有多因）| ✅verified |
| 23 | 「Tubman 约 1822 生马里兰被奴役家庭，原名 Araminta（叫 Minty），不识字一天书没念过」（`tub-n1` / kernel §3·附A·附C）| date | encyclopedia | 约 1822 生于 Dorchester County, MD；本名 Araminta Ross（小名 Minty），文盲，确证。注：来源对生年区间为 c.1820-1822 | ✅verified |
| 24 | 「十几岁监工朝另一奴隶扔两磅重铁器没中、砸到她头上→一辈子头痛 + 突然昏睡（narcolepsy 样发作）」（`tub-n1` / `tub-n4` / kernel §3·附A）| number / causal | encyclopedia | 约 12-13 岁被监工误掷的两磅秤砣击中头部，致终身头痛、癫痫样发作 + 嗜睡。**注**：现代医界对具体诊断有分歧（narcolepsy / 颞叶癫痫 / 嗜睡症 / cataplexy 均被提出），非定论。文中已用「narcolepsy 样发作」对冲措辞，稳妥 | ✅verified |
| 25 | 「Underground Railroad 不是真铁路是人际暗线网（车站/列车长/乘客暗语）+ 靠北极星 + 圣歌暗号」（`tub-n3` / kernel §5A·§10）| absolute | encyclopedia | UGRR 为暗线网络非实体轨道；station/conductor/passenger 暗语；北极星导航；spirituals 含暗号——前三者确证。圣歌「藏出发/路线信号」部分属流行叙事，史学界对具体编码有争议，但作为「暗号文化」表述成立 | ✅verified |
| 26 | 「Tubman 1849 逃宾州；1850 起一次次回去**约十几趟**亲手带出**约 70 人**，一个未失」（`tub-n5` / `tub-n6` / lens desc / kernel §3·§4.5·附A）| number | encyclopedia | **核查重点 ✅**：约 13 趟、约 70 人为 Kate Clifford Larson（2003《Bound for the Promised Land》）修正后学术数字；另指引约 50-60 人自行逃出。**文中正确采用修正数字，未用注水的「300 人/19 趟」神话**（该神话源自 Bradford 1869）。处理优秀 | ✅verified |
| 27 | 「Tubman 带枪一半防追捕一半对着想回头的人，说『活着往前，或死在这儿』，从没真打但人人到北方」（`tub-n7` / kernel §3·附A）| quote / rhetoric | inference | 带枪、对动摇者下最后通牒的记载源自 Sarah Bradford「as-told-to」传记（1869/1886），非 Tubman 一手记录；流传版本多样（"go on or die" / "you'll be free or die"）。**核心行为有传记支撑但确切引语属二手转述/概括**，且 Bradford 文本可信度学界有保留 | ⚠️downgrade-wording |
| 28 | 「1863 Tubman 领 Combahee 河突袭一夜解放七百多人，成美国史上**第一个领兵打仗的女人**」（`tub-n9` / lens desc / kernel §3·§4.10·附A）| number / absolute | encyclopedia | **核查重点 ✅**：1863.6.2 Combahee Ferry Raid，解放约 700+（部分来源近 800）人，确证。「第一个领兵打仗的女人」：权威表述为「Civil War 中第一个**策划/向导**武装突袭的女人」「在 Montgomery 上校**指挥下**」。中文「领兵打仗」略含「独立统兵」意，**应加 Civil War 范围或『规划/向导（在 Montgomery 指挥下）』限定** | ⚠️downgrade-wording |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#18]** `doug-n6`·`doug-n7`·kernel §3·附A：「**1847** 年我办报《北极星报》，**与 Garrison 公开决裂**……宪法的『自由正义』可反对奴隶制。」
   - 问题：**日期压缩（最高优先）**。1847 是创《North Star》之年（Garrison 反对办报=摩擦起点）；但围绕**宪法解读**的正式公开翻转与「不再是 Garrisonian」的宣布发生在 **1851**（North Star 1851.5.15「Change of Opinion Announced」社论）。storyboard 把「1847 办报」与「宪法路线决裂」绑为同一年同一事，会让学生把决裂时间记早 4 年。这是 antebellum 时间线上 AP 老师会挑的点。
   - 建议：拆成两步——「1847 办报（已有摩擦）」+「到 1851 我公开宣布宪法是反奴文件，与 Garrison 正式决裂」。或在决裂句加「几年后」缓冲。引语/路线内容本身 verified，只需修日期归并。

2. **[#28]** `tub-n9`·lens desc·kernel §4.10：「（1863 Combahee）我成了美国历史上**第一个领兵打仗的女人**。」
   - 问题：**绝对表述 + 归因略强（重点核查项）**。事实底座成立（1863.6.2、解放约 700+），但权威一致地**加限定**：「**南北战争中**第一个**策划并向导**武装突袭的女人」「在 **Montgomery 上校指挥下**」。无限定的「美国历史上第一个领兵打仗的女人」会被读成「独立统帅」，史实党可挑（她是 planner/guide/scout，统兵权在 Montgomery）。
   - 建议：改为「南北战争中第一个规划并带领武装突袭的女人」或保留气势但补一句「在 Montgomery 上校指挥下，我规划并向导了这场突袭」。lens description 同步。

3. **[#27]** `tub-n7`·kernel §3·附A：「我带枪……谁要往回走，我把枪顶上去，说一句：要么活着往前走，要么死在这儿。」
   - 问题：**引语分层（重点 C）**。「带枪 + 对动摇者下最后通牒」的核心情节有传记支撑，但**确切引语源自 Sarah Bradford 的『as-told-to』传记（1869/1886）**，非 Tubman 一手记录，且流传版本不一（"go on or die"/"you'll be free or die"），Bradford 文本可信度学界有保留。当前 storyboard 把它当 Tubman 直接引语用。
   - 建议：保留情节（它有据），但**显式标为转述**——如「据为她立传的人记下，她对动摇的人说过一句狠话（大意是）：活着往前，或死在这儿」。避免把二手转述句排成 Tubman 逐字原话。低-中优先级。

4. **[#22]** `doug-n9`·kernel §3·§6：「内战中我**当面逼** Lincoln 把废奴定为战争目标 + 让黑人当兵。」
   - 问题：**因果/归因略强（轻类）**。Douglass 确曾会见 Lincoln 并力主此二事，其子也入 54th Mass.，方向无误；但「逼……都成了」易读成 Douglass 单方促成 Emancipation Proclamation / 黑人入伍（实为多重压力 + Lincoln 战略权衡）。
   - 建议：可接受（第一人称叙事语气合理），若要更稳改「我去见 Lincoln，力主……，后来这两件都成了」，弱化「逼……都成了」的单因暗示。低优先级。

5. **[#8]** `cal-n7`·`tub-n8`·kernel §5C：「（Fugitive Slave Act）任何北方人，哪怕只是给逃奴**一口饭、一张床**，都犯法。」
   - 问题：**具象化轻微外扩（轻类）**。法案罚的是「妨碍执法/营救/藏匿（harboring/concealing/rescuing）逃奴」，门槛是「明知而援助逃避捕获」。「一口饭一张床」是有力的教学具象，方向对，但严格说一次给食未必都触法定要件。
   - 建议：可保留（教学张力大且大体准确）。若要精确可微调「藏匿、帮逃奴躲藏」。极低优先级。

6. **[#23]** `tub-n1`·kernel §3：「我**大概 1822 年**生在马里兰。」
   - 问题：**数字区间提示（极轻）**。Tubman 生年史料无定论，主流给 c.1820-1822。文中已用「大概/约」对冲，无硬伤。
   - 建议：无需改（已对冲）。仅记录以备审。

7. **[#26 关联]** lens desc·kernel：composite/演绎透明度——**Tubman 三人全为真实人物，无合成角色**，但 Tubman lens 的第一人称内心戏（如「看自己的手/像进天堂」N5、夜逃细节 N4）需确认挂在已证事实上。
   - 问题：**dramatization 透明度（低）**。N5「逃到宾州看自己的手、太阳金灿灿像进天堂」meta.notes 已标为「documented paraphrase」（确出自 Bradford 转述 Tubman 自述）；N4「你就是我」夜逃为合理 inference 挂在已证逃亡事实上。无虚构姓名/年龄，无 dark-topic 红线问题。
   - 建议：无需改。仅确认 meta.notes 已自标 paraphrase（已做到）。备查。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| （无合成人物）| — | 本 topic **三个主角全部为真实历史人物**：John C. Calhoun / Frederick Douglass / Harriet Tubman。**无虚构姓名/年龄/合成代言人** | ✅ N/A —— 不存在 composite 角色 |

> **关键观察（任务重点「代表性风险」）**：本 topic **无单一角色被当成整个群体代言**的硬伤。
> - **Tubman**（receiving-end）：以真人身份出场，明确呈现为「约 70 人」的具体个体救援者，**未被夸大为全体被奴役者/全体逃奴的代言**；narrative §3·§10.7 主动澄清「Tubman 单枪匹马救人」是误解、强调她依赖集体网络。**代表性处理到位**。
> - **Calhoun**（perpetrator-actor）：narrative Rule 0 + §10.4 主动反 Whig——「Calhoun 是耶鲁一流理论家，不是无知恶棍」，且 §3·§8 明示「北方多数对奴隶制冷漠或获益」，**未把 Calhoun 简化为全体南方人/全体白人的代言**；synthesis（cal-n10/n11）给出「悲剧 vs 加重情节」双解，不下单一结论。
> - **Douglass**（lonely-mediator）：明确呈现黑人废奴者**内部**与白人盟友（Garrison）的种族张力，**主动打破「废奴=善良白人解放被动黑人」的单一代言叙事**（self-emancipation 视角，§9·§10.3）。
> - 配角 William Lloyd Garrison 为真实人物，全名仅出现于 cheat sheet，作配角处理，未虚构。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `calhoun`（claim #1-12）/ `douglass`（#13-22）/ `tubman-receiving-end`（#23-28，含 N1/N4/N5/N6 gold-standard 重点节点）。跨 lens N6「自由一套话三个用法」对位三 lens 均已抽样。
- **任务指定的重点核查结论**：
  - **Tubman 救人数字 ✅**：文中**正确采用修正后学术数字「约 70 人 / 约十几趟（≈13）」**，**未使用注水的「300+ 人 / 19 趟」神话**（该神话源自 Bradford 1869、由 Larson 2003 修正）。这是本 topic 处理最干净的一项。
  - **Combahee River Raid 1863 ✅**：约 700+ 人、1863.6.2 确证；唯「第一个领兵打仗的女人」绝对句需加 Civil War / 「Montgomery 指挥下规划向导」限定（红旗 #2）。
  - **头部受伤致嗜睡 ✅**：两磅铁器击头、终身头痛 + 嗜睡确证；现代诊断（narcolepsy/癫痫/嗜睡症）有分歧，文中已用「narcolepsy 样发作」对冲。
  - **本名 Araminta ✅**：本名 Araminta Ross（小名 Minty），确证。
  - **Fugitive Slave Act 1850 ✅**：核心条款（抓回送还原主、援助逃奴犯法、$1,000 罚款、无陪审团）确证。
  - **Douglass / Calhoun ✅**：Calhoun 1837.2.6 positive good 演讲、1850.3.31 卒；Douglass 1838 逃 / 1845 自传 / 1852.7.5 演讲均确证。**唯一日期硬伤**：Douglass 与 Garrison 的**宪法路线公开决裂实为 1851**（非 storyboard 并入的 1847）——红旗 #1。
  - **代表性风险（任务特别叮嘱）✅ 无硬伤**：见上「composite 清单」观察——三主角无一被当成整个群体的单一代言，narrative 主动在 §10.3/§10.4/§10.7 拆解三个相关误解。**这是本 topic 的强项。**
  - **引语分层**：真史料（Calhoun positive good #1·#4、Dred Scott #10、Douglass「教奴隶认字」#14、「七月四号」#21、宪法回避 slave 字 #20、Garrison covenant-with-hell #19）与二手/转述（Tubman「死在这儿」#27=Bradford as-told-to；Combahee「第一个领兵女人」#28=需限定）已分清。
- **用到的外部核实来源**：Teaching American History / SPLC（Calhoun positive good 原文）、Avalon Project + Constitution Center + Wikipedia（Fugitive Slave Act 1850）、Wikipedia + NPS + Maxwell School Syracuse + NPR（Tubman 70 人/13 趟修正数字 + 300 神话来源）、NMAAHC + Zinn Education + Wikipedia「Raid on Combahee Ferry」+ Smithsonian（Combahee 1863）、Epsy Health + Psychology Today + NCBI PMC + Project Sleep（Tubman 头伤/嗜睡诊断分歧）、Britannica + Library of Congress + Bill of Rights Institute + Frederick Douglass Papers Project（Douglass 逃亡/自传/1851 宪法决裂/Fourth of July）、Sarah Bradford《Scenes in the Life》(1869)/《Harriet, the Moses of Her People》(1886) via DocSouth + Snopes（Tubman 带枪引语来源与可信度）。
- **总评**：本 topic 史实骨架**稳健**，且在两个最易翻车处（Tubman 救人数字、群体代表性）**处理得格外干净**——主动采用 70 人修正数字、主动拆解三个 Whig/代言误解。无 `needs-source`（无悬空高风险事实）。7 条红旗中**仅 #1（Douglass-Garrison 决裂日期 1847→1851）与 #2（Combahee「第一个领兵女人」需加限定）属应处理的硬/半硬项**，#3（Tubman 枪下引语需标转述）为引语分层中优先级，其余 4 条为低优先级措辞微调。**可进 Gate 2，但建议先处理 #1 与 #2 再上线。**
