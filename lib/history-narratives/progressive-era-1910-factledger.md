# 进步时代 1890-1920 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    progressive-era-1910
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/progressive-era-1910.js（3 lens: theodore-roosevelt / jane-addams / triangle-fire-worker-receiving-end）+ lib/history-narratives/progressive-era-1910.md
claim 总数:  27
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
| 1 | 「1911 年 3 月 25 日，Triangle 制衣厂起火，**146 人**死」（`tr-n6` / `ja-n6` / `tw-n1` / `tw-n6` / lens card / kernel §1·§4 Beat7·§附A）| date / number | encyclopedia | 1911.3.25（周六）Triangle Shirtwaist fire，146 死（123 女 + 23 男），权威完全一致（Wikipedia / Britannica / History / AFL-CIO / Cornell ILR / LOC）。**确认 146 正确，非 145** | ✅verified |
| 2 | 「死者大多是 14-23 岁的意大利与犹太移民女工」（`tw-n1` / lens card / kernel §3）| number / representativeness | encyclopedia | 多为近期意大利/犹太移民，年龄约 14-23，确证 | ✅verified |
| 3 | 「老板把通往楼梯的门**从外面锁死**，为防工人偷布料/防溜出去」（`tr-n6` / `ja-n6` / `tw-n1` / `tw-n3` / `tw-n5` / kernel §3·§4 Beat7）| causal / motive | encyclopedia | 出口门为防「偷窃/工作中断」上锁，仅工头有钥匙；一道楼梯从外锁、另一道只向内开，确证 | ✅verified |
| 4 | 「逃生铁梯太旧太窄、爬的人太多，当场塌掉；电梯工冒死开了几趟；云梯够不到那么高」（`tw-n5` / kernel §4 Beat7）| number / causal | encyclopedia | 外置铁梯过载坍塌坠落约 20 人；电梯工 Zito/Mortillaro 多次上 9 楼救人直到导轨变形；消防云梯只到 6 楼（差 3 层），确证 | ✅verified |
| 5 | 「146 人：烧死、窒息，以及从八、九、十楼窗口跳下摔死」（`tr-n6` / `tw-n6` / kernel §3·§4 Beat7）| number | encyclopedia | 工厂占 8/9/10 楼；死因含火/窒息/跳楼；跳楼者**主要来自 8、9 楼**（10 楼多人逃上屋顶幸存）。文中并列「八九十楼」窗口跳下略宽，但工厂确在此三层、死亡分布此三层，措辞不算错 | ✅verified |
| 6 | 「两名老板被告上法庭却被判无罪（manslaughter）」（`tw-n7` / `tw-n10` / kernel §4 Beat8）| date / causal | encyclopedia | Isaac Harris & Max Blanck 1911.4 被控过失杀人，1911.12 庭审被判无罪，确证 | ✅verified |
| 7 | 「火后纽约州成立 Factory Investigating Commission，记几千页，纽约随后通过 30 多条新法律（门从里开/逃生通道/灭火设备/限女工童工工时）」（`tr-n9` / `tw-n7` / `tw-n9` / kernel §4 Beat8·§6）| number / causal | encyclopedia | 1911.6 州立 FIC；其调查促成 30+ 项健康安全法（含工厂火灾规范、童工限制），确证 | ✅verified |
| 8 | 「1909 年冬纽约上万制衣女工大罢工『两万人起义』（Uprising of the 20,000），Triangle 老板最硬、拒不改、雇人对付罢工」（`tw-n4` / kernel §4 Beat6）| date / number / motive | encyclopedia | 1909 NY shirtwaist strike，约两万女工（以犹太女工为主）；Triangle（约 500 人）为强硬拒让的大厂之一，老板 Blanck/Harris 雇打手/妓女滋扰纠察线，确证。**注**：「别再锁门」作为罢工诉求之一是合理概括（核心诉求为工时/工资/工会承认/安全），措辞成立 | ✅verified |
| 9 | 「1901 年 9 月 McKinley 被无政府主义者开两枪遇刺身亡，TR 42 岁接任，是美国到那时最年轻的总统（接班非民选）」（`tr-n1` / kernel §3·§4 Beat1·§附A）| date / number / absolute | encyclopedia | 1901.9.6 Leon Czolgosz（无政府主义者）枪击 McKinley，9.14 死；TR 42 岁继任，为美国最年轻总统，确证 | ✅verified |
| 10 | 「TR 用《Sherman 反托拉斯法》起诉巨型铁路联合体 Northern Securities；1904 最高法院判政府胜诉拆散；获 trust-buster 之名」（`tr-n4` / kernel §3·§4 Beat3·§附A）| date / causal | encyclopedia | Northern Securities Co. v. US，1904.3.14 最高法院 5-4 判违反 Sherman Act，公司拆散；TR「打托拉斯」声誉由此立，确证 | ✅verified |
| 11 | 「最有钱的金融大王亲自来找 TR 想『私下谈个解决办法』，被 TR 拒绝」（`tr-n4` / kernel §4 Beat3）| quote / motive | encyclopedia | J.P. Morgan 曾向 TR 提议私下解决（「send your man to my man」式），TR 拒绝。文中未点名 Morgan、用「金融大王」概括，准确且稳妥 | ✅verified |
| 12 | 「TR 把约 1.5 亿英亩林地划成**国家森林**，建 5 国家公园、150 多片国家森林、18 处国家纪念地」（`tr-n5` / kernel §3·§4 Beat4）| number | encyclopedia | **数字混淆**：权威总计为 TR 任内保护**约 2.3 亿英亩公共土地**，其中**150 片国家森林（是『片数』不是英亩）**、5 国家公园、18 国家纪念地、55 鸟类保护区。文中把「150 片国家森林」与「1.5 亿英亩」绑成「1.5 亿英亩国家森林」属**单位/数字错配** | ✋flagged |
| 13 | 「TR 留下『一亿英亩荒野』/『一亿多英亩荒野』」（`tr-n1` 视角描述 / `tr-n10` synthesis / lens card）| number | encyclopedia | 与 #12 同源但写法不同：lens card / N10 用「一亿英亩」，N5 用「一亿五千万英亩」，narrative §3 用「约 1.5 亿英亩」。三处**自相不一致**，且都低于权威总计 2.3 亿英亩（若指总保护地）。需统一口径 | ⚠️downgrade-wording |
| 14 | 「1903 年 TR 与自然主义者 John Muir 在 Yosemite 露营三天」（`tr-n5` / kernel §3·§4 Beat4·§附A）| date | encyclopedia | 1903.5 TR-Muir Yosemite 三天露营（Mariposa Grove / Glacier Point / Bridalveil），确证 | ✅verified |
| 15 | 「muckraker（扒粪者）一词是 TR 起的外号」（`tr-n3` / kernel §3·§4 Beat2·§附B）| quote / motive | encyclopedia | TR 1906.4.14「The Man With the Muck-Rake」演讲借 Bunyan《天路历程》典故，使该词流行（起初贬义后转褒义），确证 | ✅verified |
| 16 | 「记者钻进肉联厂写黑幕的书（《The Jungle》Upton Sinclair, 1906）掀全国民愤，催生 1906《纯净食品和药品法》——美国第一部食品安全联邦法」（`tr-n3` / kernel §4 Beat2·§3）| date / causal / absolute | encyclopedia | Sinclair《The Jungle》1906；直接推动 1906.6.30 签署的 Pure Food and Drug Act + Meat Inspection Act，被记为美国首部综合性联邦食品安全法，确证。**注** storyboard 未点 Sinclair/书名（narrative §4 Beat2 已点），属可接受简化 | ✅verified |
| 17 | 「TR 公开相信白人（尤其英语国家）种族优越、支持优生学、担心白人新教家庭生太少被移民『比下去』」（`tr-n7` / `tr-n10` / kernel §3·§9 Beat9·§附C）| motive / causal | encyclopedia | TR 持种族等级观、支持优生学逻辑、长期鼓吹「race suicide」（1902 称其「比任何问题都重要」/1903 警告盎格鲁-撒克逊人节育致『种族自杀』），确证 | ✅verified |
| 18 | 「1898 美西战争，TR 辞海军部官职自组『莽骑兵』(Rough Riders) 义勇骑兵团赴古巴；战后美国从西班牙拿走菲律宾、波多黎各、关岛」（`tr-n8` / kernel §3·§4 Beat9·§附A）| date / causal | encyclopedia | 1898.5.6 TR 辞助理海军部长，组 1st US Volunteer Cavalry（Rough Riders）赴古巴（San Juan Hill）；战后美得菲/波/关，确证。**注** storyboard 称「海军部副部长」、narrative §3 称「副部长」，准确职衔为 Assistant Secretary of the Navy（助理部长），译名偏差小 | ✅verified |
| 19 | 「1903 TR 支持巴拿马脱离哥伦比亚独立以拿下运河区；后得意地说『我拿下了运河区』(I took the Canal Zone)」（`tr-n8` / kernel §3·§4 Beat9·§附A）| quote / date | encyclopedia | 1903.11.3 巴拿马在美支持下独立，旋即把运河区交美；TR 后来确说「I took the Canal Zone（and let Congress debate）」，确证 | ✅verified |
| 20 | 「TR 名言『说话客气，手里拿根大棒』(Speak softly and carry a big stick)」（`tr-n8` / kernel §5A）| quote | inference | TR 反复引用此语（自称源自西非谚语），与其外交挂钩，广为确证。kernel §5A 已自标 **「paraphrase / 演讲常见引用，非逐字档案」**——分层处理到位 | ✅verified |
| 21 | 「进步时代修正案：第 16（所得税,1913）/ 17（直选参议员,1913）/ 18（禁酒）/ 19（女性投票权,1920）」（`tr-n9` / kernel §2 L3·§5C·§附A）| date | encyclopedia | 16/17 修正案 1913 批准；18 修正案 1919 批准（kernel 未列其 1919，storyboard 未标日期）；19 修正案 1920.8.18 批准。storyboard 内列举无错；narrative §附A 只缺 18 的年份，非硬错 | ✅verified |
| 22 | 「直接民主工具 initiative / referendum / recall 在进步时代州一级出现」（`tr-n9` / kernel §2 L3·§附B）| causal | textbook | APUSH/AP Gov 标准内容：进步时代州级推 initiative/referendum/recall，确证 | ✅verified |
| 23 | 「1889 年 Jane Addams（29 岁）和 Ellen Gates Starr 在芝加哥最穷移民区租旧楼办 Hull House」（`ja-n1` / `ja-n2` / kernel §3·§4 Beat5·§附A）| date / number | encyclopedia | 1889 Addams（生 1860，时 29 岁）与 Ellen Gates Starr 创办 Hull House（芝加哥西区），美国首批 settlement house，确证 | ✅verified |
| 24 | 「Hull House 推动 1893 年伊利诺伊限制童工与女工工时的法律」（`ja-n5` / kernel §3·§4 Beat5·§附A）| date / causal | encyclopedia | 1893 伊利诺伊通过保护妇女儿童的工厂法（Factory Act / 限童工工时），Hull House 调查推动，确证 | ✅verified |
| 25 | 「Jane Addams 一战反战遭围攻，1931 年获诺贝尔和平奖（美国首位获奖女性）；1860 生 1935 卒」（`ja-n8` / `ja-n9` / kernel §3·§附A）| date | encyclopedia | Addams 1860-1935；一战公开反战声誉受损；1931 获诺贝尔和平奖（与 N.M. Butler 共享），美国首位女性得主，确证 | ✅verified |
| 26 | 「Hull House 这种工作后来长成『社会工作』(social work) 这门职业；逐户贫民区调查→用数据推立法的方法」（`ja-n5` / `ja-n9` / kernel §3·§6）| causal | inference | settlement house 运动是社会工作专业的公认源头之一；Hull House 系统社会调查（如《Hull-House Maps and Papers》）开数据驱动改革先河。属合理史学诠释，措辞稳 | ✅verified |
| 27 | 「优生学是当时主流『科学』，被总统/大学/立法机关广泛接受，多州立强制绝育法」（`tr-n7` / `ja-n7` / `tw-n6` / kernel §2 L2·§6 中期·§10）| causal / absolute | encyclopedia | 20 世纪初优生学确为主流学界/政界接受，多州（自 1907 印第安纳起）立强制绝育法，确证 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#12]** `tr-n5`·kernel §3·§4 Beat4：「我用总统权力，把**一亿五千万英亩林地划成国家森林**，建了 5 个国家公园、150 多片国家森林、18 处国家纪念地。」
   - 问题：**数字/单位错配（重点 A）**。权威口径是：TR 任内保护**约 2.3 亿英亩公共土地（总计）**，其中**150 片国家森林（是『片数』count，不是英亩 acres）**、5 国家公园、18 国家纪念地、55 鸟类/猎物保护区。storyboard 把「150 片国家森林」与「1.5 亿英亩」**叠成同一件事**——「1.5 亿英亩国家森林」既混淆了单位（片 vs 英亩），又低估了总量（2.3 亿）。学生会把一个错配数字当事实记住。
   - 建议：拆开两个量。如「我把**约 2.3 亿英亩**公共土地保护起来——其中划出 **150 多片国家森林**、5 个国家公园、18 处国家纪念地」。或保守写「划出 150 多片国家森林、5 个国家公园……总共保护了上亿英亩荒野」。务必让「片数」与「英亩数」不再黏在一起。

2. **[#13]** `tr-n1`(视角描述)·`tr-n10`·lens card：「我留下『**一亿**英亩荒野』/『一亿多英亩荒野』」 vs `tr-n5`「**一亿五千万**英亩」 vs narrative §3「约 **1.5 亿**英亩」。
   - 问题：**文内自相不一致 + 偏低**。同一 topic 三处给了「1 亿 / 1.5 亿 / 1.5 亿」三种英亩数；且若指 TR 任内总保护地，权威是约 **2.3 亿**英亩，三处都偏低。
   - 建议：与 #12 一起统一到一个口径。若想用整数好记，用「**保护了两亿多英亩荒野**」（贴权威总计），并在所有节点（N1 描述 / N5 / N10 / lens card / narrative §3）统一同一个数。低-中优先级（先把 #12 的单位错配解决，#13 顺带统一）。

3. **[#5]** `tr-n6`·`tw-n6`·kernel §4 Beat7：「从**八楼、九楼、十楼**的窗口跳下去摔死。」
   - 问题：**轻度精确度（重点 A 轻类）**。工厂确占 8/9/10 三层，但跳楼/坠亡**主要集中在 8、9 楼**；10 楼工人多数及时逃上屋顶并获救（10 楼存活率最高）。把「十楼」并列进「跳楼摔死」略放大了 10 楼的伤亡。
   - 建议：可接受（三层都属工厂、三层都有死亡）；若想更准，写「从八楼、九楼的窗口跳下」或「从高层窗口跳下」。极低优先级。

4. **[#18]** `tr-n8`·narrative §3：「我辞了**海军部的官 / 海军部副部长**……」
   - 问题：**职衔译名（轻类）**。TR 实际职衔是 **Assistant Secretary of the Navy（助理海军部长）**，中文「副部长」是常见但略偏的译法。
   - 建议：可保留（中文语境「副部长」可理解），若求严谨改「助理海军部长」。极低优先级，不影响史实骨架。

5. **[#8]** `tw-n4`·kernel §4 Beat6：「你们的要求很朴素：少一点工时、安全一点的车间、**别再把门锁上**。」
   - 问题：**诉求归纳轻度外推（重点 C 邻类）**。1909「两万人起义」的核心诉求是更短工时、更高工资、工会承认、改善安全条件；「别再锁门」是把 Triangle 后来致命的具体问题前置进了罢工诉求清单，属**叙事性聚焦**（让罢工与火灾因果更连贯）。史实上「锁门」是工厂普遍弊病、也在工人不满之列，但它不是 1909 罢工挂在嘴上的招牌诉求。
   - 建议：可接受（服务叙事且不违背史实方向）；若想更稳，写「更短工时、更高工资、更安全的车间」，把「别锁门」留给火灾段落点明。低优先级。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 一个 Triangle 工厂女工 | `triangle-fire-worker-receiving-end`（全 11 节，含 gold-standard `tw-n1`/`tw-n5`/`tw-n10`/`tw-n11`）| 无真名；约 c.1895-1911 生卒、十几岁、犹太/欧洲移民身份、家庭细节（坐船来、下东区拥挤出租屋、父母老不会英语、踩缝纫机养家、参加 1909 罢工）均为**叙事性补充**；**史料确证的是 1911.3.25 Triangle fire 及其 146 死、门从外锁、工厂可燃车间、1909 两万人起义、火后立法**等集体事实 | ✅ **已透明标注**：lens description 括号「姓名/年龄是叙事性补充，确证的是这场火和 146 个死者」、`tw-n1` 开篇 anti-fab 句「我是一个合成出来的人——一个名字、一个年龄，是讲故事补上的。但我死的那场火，和跟我一起死的 146 个人，是真的」、`meta.notes` 第 4 条、narrative §3 标题「**这是一个合成（composite）角色**」+ §附C cheat sheet 标 composite。**符合 §1.3 dark-topic 红线（composite 必须标明）** |

> 其余出场人物（Theodore Roosevelt / Jane Addams / Ellen Gates Starr / John Muir / Upton Sinclair / J.P. Morgan「金融大王」/ McKinley / Leon Czolgosz「无政府主义者」/ Max Blanck & Isaac Harris「两个老板」）均为**真实历史人物**，非合成。TR / Jane Addams 两 lens 为第一人称视角叙事（内心戏属合理 inference，挂在已证事实上），未虚构其生平骨架。Triangle 两老板、金融大王、无政府主义者在 storyboard 中用**角色化指代**（不点名）而非虚构，narrative §4 已点真名，处理一致。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `theodore-roosevelt`（claim #9-22）/ `jane-addams`（#23-26；并与 #1·#3·#27 共享 Triangle/优生学锚）/ `triangle-fire-worker-receiving-end`（#1-8·#27；含 N1/N5/N10/N11 gold-standard 重点节点）。8 类优先级均有覆盖：date（#1,6,9,10,14,19,21,23,24,25）/ number（#1,2,4,5,9,12,13）/ quote（#11,15,19,20）/ causal（#3,4,7,10,16,22,24,26,27）/ motive（#3,8,11,17）/ representativeness（#2）/ absolute（#9,16,27）/ rhetoric（嵌于 #5「跳楼摔死」、#12 强数字）。
- **重点核查结论**：
  - **重点 A（数字夸张/错配）**：主红旗 #12「1.5 亿英亩国家森林」属**单位错配**（片数 vs 英亩 + 低估总量），是本 topic 最该处理的硬项；#13 三处英亩数自相不一致为同源轻-中类；#5 跳楼楼层、Triangle 死亡数（146 经反复核对**确为 146，非 145**）均稳。
  - **重点 A·Triangle 死亡数 + 工时工资强修辞**：**146 死**完全核实（123 女+23 男，权威无分歧）；工时「一天 12 小时」、工资「压到最低」属时代通用描述（kernel §2 L2 / `tr-n2` / `ja-n3`），无单一伪精确数字，不构成强修辞数字红旗。
  - **重点 B（代表性）**：Triangle 女工 composite 透明标注到位（无红旗）；用「146 之一」「代表 146 个人」处理群体—个体关系得当。
  - **重点 C（引语）**：真史料/可证引语（TR「I took the Canal Zone」#19、race suicide 立场 #17、Northern Securities 5-4 判决 #10、Morgan 私下谈 #11）与 paraphrase（「Speak softly and carry a big stick」#20 已自标 paraphrase、muckraker 典出 Bunyan #15）分层清楚；kernel §5A/§5B 已主动标注 attribution（paraphrase / simplified），处理良好。唯 #8「别锁门」诉求为轻度叙事外推（已红旗轻类）。
- **用到的外部核实来源**：Wikipedia（Triangle Shirtwaist Factory fire / Northern Securities Co. v. US / New York shirtwaist strike of 1909 / Theodore Roosevelt / Rough Riders / Jane Addams / 19th Amendment / Muckraker）、Britannica（Triangle fire / Pure Food and Drug Act / Muckraker）、History.com（Triangle fire / TR conservation & race / The Jungle）、Cornell ILR Triangle Fire site、Library of Congress（Triangle / Rough Riders / muck-rake 演讲 / Roosevelt-Muir camping trip）、OSHA（Triangle / 锁门）、AFL-CIO（Triangle）、U.S. Fish & Wildlife Service + NPS + Theodore Roosevelt Center（230M acres / 150 national forests / Muir / Northern Securities / eugenics）、National Women's History Museum + Hull-House Museum（Addams / 1889 / 1893 / 1931）、Jewish Women's Archive + PBS（Uprising of 20,000）、FDA + visitthecapitol.gov（1906 Pure Food and Drug Act）。
- **总评**：本 topic 史实骨架**稳健**——Triangle 火灾全套（**146 死**、1911.3.25、门从外锁、铁梯坍塌/电梯/云梯只到 6 楼、老板 1911.12 判无罪、火后 FIC + 30+ 法）、1909 两万人起义、Northern Securities 1904 5-4 判决、Sherman Act、muckraker/The Jungle/1906 食药法链、TR 接任时间线/Rough Riders/巴拿马运河/race suicide 立场、Jane Addams 1889/1893/1931 时间线、四条修正案、优生学多州绝育法均经权威核实通过。**无 `needs-source`**（无悬空高风险事实），与权威**正面冲突**的硬错只有 1 条 = #12 的「英亩/片数」单位错配（连带 #13 文内不一致）。5 条红旗中仅 **#12 属必处理硬项**（数字错配 + 低估），#13 顺带统一，其余 #5/#18/#8 为低/极低优先级措辞微调。**可进 Gate 2，但建议先修 #12（并顺手统一 #13 的英亩口径）再上线。**
