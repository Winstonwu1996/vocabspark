# 美索不达米亚与汉谟拉比法典 c.1754 BCE · Hammurabi's Code Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    hammurabi-code-1754bce
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/hammurabi-code-1754bce.js（3 lens：hammurabi / babylonian-scribe / babylonian-commoner-woman-receiving-end，各 9 节点）
            + lib/history-narratives/hammurabi-code-1754bce.md（narrative kernel）
claim 总数:  27
🚩 红旗数:   4（需创始人审）— 1 处 ✋flagged（牙赔偿对位数字张冠李戴，影响全部 3 lens 的 N4/N6 锚），3 处 ⚠️downgrade-wording
```

**一句话总评**：史实地基**总体稳，但有一处需注意的硬伤**——大框架（在位 1792-1750 BCE、c.1754 刻法典、282 条、玄武岩黑石柱、1901 Susa 出土现藏卢浮宫、Shamash 授权杖浮雕、三等差等正义、lex talionis 只在同等人间成立）全部对得上权威来源。古代史 Band C 特征明显：年代为约数（标"约/c."完全正确）、两位 composite 角色（书吏 + 平民女性）依法 inference/dramatization 且**已三处透明标注**、引语分层（法典条款 paraphrase/simplified 已声明，平民日常生活场景为合理 inference）处理合规。**唯一红旗 #1 是事实硬伤**：贯穿全 topic 的核心 micro-detail「打掉一个 awilum 的牙赔一 mina」与法典实际不符——法典对**贵族打贵族的牙是"以牙还牙"（敲掉对方的牙），不是赔 1 mina**；"1 mina" 实为**贵族伤平民(mushkenum)的眼/骨**（法 198）的赔偿。叙事想表达的"同伤不同价"是真的，但它把**两条不同的法**的数字拼成了一对"牙赔偿对照"，张冠李戴。其余 3 条为低优先级措辞收紧（"最早成文法之一"、mushkenum=纯平民略简化、stele 材质）。

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`。
> 凡 `dramatization` 等级而文中**未透明标注**为合成 → 自动进红旗。
> **Band C 古代史特别提示**：一手史料稀少，很多 claim 合法地是 `inference`（学术重建）。区分「法典明文记载的」(primary/textbook) vs「学者推断的社会生活」(inference)。古代年代多为约数，标注"约/c."是**对的**，不是错误。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | "打掉一个 awilum（贵族）的牙，赔一 mina 银子；打掉一个 mushkenum（平民）的牙，只赔三分之一 mina"（**全 3 lens 反复**：`ham-n4`/`ham-n5`/`ham-n6`、`sc-n3`/`sc-n6`、`cw-n4`/`cw-n6`，kernel §3/§4 故事 7 + §5B）| number | primary | 法典实际：法 200 贵族打**同等贵族**的牙=**以牙还牙(敲掉其牙)**，非赔 1 mina；法 201 贵族打 mushkenum 牙=**1/3 mina**(=20 shekels)✓；"1 mina" 实为法 198 贵族伤 mushkenum **眼/骨** 的赔偿。叙事把"贵族牙=1 mina"凭空安在了法典上 | ✋flagged（见红旗 #1）|
| 2 | "公元前 1792 年到前 1750 年在位"（`hammurabi` desc、`ham-n1`，kernel §2 L4/§4/附录 A）| date | encyclopedia | 维基/Britannica：r. c.1792-1750 BCE（中年代学 middle chronology）。标"约"更稳，正文部分已含语境 | ✅verified |
| 3 | "公元前 1754 年前后……下令把 282 条法律刻在……石柱上"（`ham-n1`，kernel §1/§4 故事 3/附录 A）| date | encyclopedia | 维基："composed c. 1753/1754 BC"，在位晚期。c.1754 为常见标注，已用"前后/约" | ✅verified |
| 4 | "一共 282 条法律"（`ham-n1`/`ham-n3`/`sc-n1`/`sc-n3`，kernel 多处）| number | encyclopedia | 维基/Britannica/World History Encyclopedia：282 laws（含序言+结语+正文） | ✅verified |
| 5 | "一根两米多高的黑石柱"（`ham-n1`，kernel §1/§4 故事 3）| number | encyclopedia | 维基：basalt stele 2.25 m 高。"两米多/黑石柱"准确且稳妥 | ✅verified |
| 6 | "材质为玄武岩/闪长岩一类深色硬石"（kernel §4 故事 3）| inference | encyclopedia | npj Heritage Science 2026：basalt vs diorite 学界**仍有争议**，多数倾向 basalt。kernel 用"玄武岩/闪长岩一类"hedge **正确**；storyboard 只说"黑石柱"更安全 | ✅verified（hedge 得当；见备注）|
| 7 | "石柱顶上，刻着我站在太阳神 Shamash 面前，从他手里接过一根权杖"（`ham-n1`/`ham-n3`，kernel §3/§5D）| primary | encyclopedia | 维基/Smarthistory/Louvre：浮雕确为 Hammurabi 立于 Shamash（太阳神/公正之神）前接 rod-and-ring 权标。视觉一手史料 | ✅verified |
| 8 | "（神是不是真把权杖交给他，没人能证；能确证的是这幅浮雕真刻在石柱顶上，今天还能在博物馆看到。）"（`ham-n3` anti-fab 括号）| inference | encyclopedia | anti-fab 标注**典范**：明确区分"神授无法证"(信仰宣称) vs"浮雕确证"(实物)。完全合规 | ✅verified |
| 9 | "Shamash 是两河人心里管『公正』的神"（`ham-n3`，kernel §3）| textbook | encyclopedia | 维基：Shamash = Babylonian sun god **and god of justice**。准确 | ✅verified |
| 10 | "（石柱）公元 1901 年在 Susa（苏萨，今伊朗）被法国考古队发掘出来，现藏巴黎卢浮宫"（kernel §2 L4/§4 故事 10/附录 A）| date | encyclopedia | 维基：1901(-1902) 在 Susa（今伊朗）由法国队发掘，作为战利品 ~600 年后被掳至此；现藏 Louvre。准确 | ✅verified |
| 11 | "最出名的一句……『以眼还眼，以牙还牙』"（`ham-n5`，kernel §4 故事 5/6/§5C）| quote | textbook | 法 196/200 lex talionis。属概括而非逐字引；kernel §5 已声明引文为 paraphrase/simplified | ✅verified |
| 12 | "『以眼还眼』这条，只在同一等人之间成立"（`ham-n5`/`ham-n6`，kernel 故事 6/§5C/§10 误解 2）| causal | primary | 法 196/200（同等人=报复）vs 法 198/201（伤下等人=赔钱）。**法典明文核心结构，无争议**——本 topic 最重要的反 Whig 命题 | ✅verified |
| 13 | "一个 awilum 弄瞎一个 mushkenum（平民）的眼……赔一 mina 银子"（`ham-n5`，kernel 故事 6/§5C）| number | primary | 法 198："destroy the eye…of a freeman(=mushkenum)…pay one mana of silver"。**准确**（这正是"1 mina"的真正出处）| ✅verified |
| 14 | "一个主人弄瞎自己 wardum（奴隶）的眼……连赔都不用，因为奴隶是他的财产"（`ham-n5`，kernel 故事 6）| inference | encyclopedia | 法 199：伤他人奴隶=赔奴隶**半价**给奴隶主。"主人伤自己奴隶几乎无须赔/奴隶=财产"是合理 inference（财产权逻辑），措辞"连赔都不用"略绝对但方向正确 | ✅verified（措辞可再软，低优先）|
| 15 | "三等人：awilum（贵族）/ mushkenum（平民）/ wardum（奴隶，近财产）"（`ham-n4`，kernel §2 L2/附录 B/C）| representativeness | textbook | 维基/Britannica：三等 awīlum / muškēnum / wardum 文本明载。"mushkenum=平民"是通行简化，但学界对其确切含义（依附王室/半自由 serf）有争议 | ✅verified（见红旗 #3 简化）|
| 16 | "（lex talionis）比起『弄瞎眼就处死』，这反而是一种节制：报复不能超过伤害本身"（`ham-n5`，kernel §5C 解读）| causal | textbook | 主流史学共识：talion 设报复上限。准确 | ✅verified |
| 17 | "我在位三十多年，大半时间在打仗……第一次让整个两河中下游归一个王管"（`ham-n2`，kernel §3/§4 故事 1）| causal | encyclopedia | 维基/Britannica：Hammurabi 在位约 42 年，晚年（约前 1760s）军事统一南美索不达米亚。"三十多年/第一次统一中下游"成立 | ✅verified |
| 18 | "我刻法典，是人类最早把『法律写下来』的大事之一"（`ham-n7`，kernel §10 误解 3/§9）| absolute | encyclopedia | 维基：更早有 Ur-Nammu(c.2100 BCE，早约 3 世纪)、Lipit-Ishtar、Eshnunna。storyboard 用"**之一**"已正确避坑；kernel §10 明确纠正"第一" | ✅verified（"之一"措辞得当）|
| 19 | "2000 多年后，1215 年的英格兰……Magna Carta……『依国法』"（`ham-n7`，kernel §6/§7）| date | encyclopedia | Magna Carta 1215，cl.39 "law of the land"。跨 Topic 锚，时序与内容准确 | ✅verified |
| 20 | "我的法典，是王立给百姓守的，管子民不太管王；Magna Carta……反过来用写下来的法约束国王本人"（`ham-n7`，kernel §6/§7 对位）| causal | textbook | 主流对照共识，措辞有"不太/想做的是"留余地，未做单线进步归结。符合反 Whig | ✅verified |
| 21 | "一万个人里，能读会写的，可能就那么几个"（`sc-n1`/`sc-n2`，kernel §2 L3/§3）| number | inference | World History Encyclopedia/Encyclopedia.com：古代两河识字者比例极低（精确数字无统计）。"万人里几个"是**修辞性 inference**，方向正确，非精确普查 | ✅verified（修辞数字，方向无误）|
| 22 | "楔形文字不是几十个字母，是几百个符号……抄错了，老师拿棍子打手"（`sc-n2`，kernel §3）| inference | encyclopedia | World History Encyclopedia：edubba 书吏学校需记**数百符号**、体罚（打）属史载。准确的学术重建 | ✅verified |
| 23 | "国王那 282 条法律……不是国王亲手刻的……要经书吏拟稿、工匠凿石"（`sc-n1`/`sc-n3`，kernel §4 故事 8/§10 误解 4）| inference | textbook | 书吏/工匠分工是学界共识的合理重建（非具体史载某次刻制流程）。属合法 inference | ✅verified |
| 24 | 整个"巴比伦书吏"角色（c.1770 BCE 的识字中介，第一人称内心戏）| dramatization | dramatization | **composite 虚构典型人物**，基于楔形文字职业史。`sc-n1` 括号 + lens desc + kernel §3 + 附录 C + meta.notes **四处透明标注**为非史载个人 | ✅verified（已透明标注）|
| 25 | 整个"巴比伦平民女性"角色（c.1750 BCE mushkenum 女性，被打掉牙讨说法的场景）| dramatization | dramatization | **composite 虚构典型人物**，基于法典平民/女性条款。`cw-n1` 括号 + lens desc + kernel §3 + 附录 C + meta.notes **四处透明标注**。被打牙的具体场景为 dramatization（法典写"如果…就…"，未记某个真人案例）| ✅verified（已透明标注）|
| 26 | "丈夫休妻得退还嫁妆……丈夫长期抛弃她可另嫁……寡妇对亡夫财产有受保护的份额"（`cw-n3`，kernel §3/§10 误解 7）| textbook | encyclopedia | 法典确含嫁妆返还(法 138 一类)、遗弃可改嫁(法 134-136 一类)、寡妇份额(法 171-172 一类)等女性保护条款。准确（条号为类指，已属 simplified）| ✅verified |
| 27 | "三千多年后……美国一部新写的宪法把被奴役的人算成『五分之三个人』……写进根本大法"（`cw-n7`，kernel §6 长期/可视化 D）| number | textbook | 美宪 Art. I §2 三五条款（1787）。跨 Topic 古今对照，时序("三千多年后"，c.1754 BCE→1787 CE≈3540 年)与内容准确 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 按影响排序。#1 为唯一事实硬伤（✋flagged），#2-#4 为措辞收紧（⚠️downgrade-wording）。

1. **[#1] ✋flagged（最高优先，影响全部 3 lens 的 N4 personal peak + N6 cross-lens anchor）**
   `「打掉一个 awilum（贵族）的牙，赔一 mina 银子；打掉一个 mushkenum（平民）的牙，只赔三分之一 mina。同一颗牙……差三倍的价」`（`ham-n4`/`ham-n5`/`ham-n6`、`sc-n3`/`sc-n6`、`cw-n4`/`cw-n6`，kernel §3/§4 故事 7/§5B）
   - **问题**：这是全 topic 出现频率最高、且是三个 lens N4(你就是 TA)+N6(掰到最清楚一刻)双锚点的情感支点——但**与法典实际条款不符**。法典的牙条款是：法 200「贵族打**同等贵族**的牙 → **以牙还牙(敲掉对方的牙)**」（不是赔 1 mina）；法 201「贵族打 mushkenum 的牙 → **1/3 mina**」✓。"1 mina"这个数字在法典里是**法 198：贵族伤 mushkenum 的眼或骨**的赔偿，与"牙"无关。叙事把"贵族牙=1 mina"凭空造了出来，实际是把两条不同的法（眼/骨 198 + 牙 201）的数字拼成了一对假的"牙对牙价格表"。
   - **影响**：叙事想传达的核心命题——"同样的伤害因身份不同而值不同的价"——**是真实的、有法典明文支撑的**（法 198 vs 199：伤平民眼赔 1 mina、伤奴隶眼赔半价；法 200 vs 201：同等人以牙还牙 vs 伤平民牙赔 1/3 mina）。**坏的不是命题，是举的那对数字。**
   - **建议（二选一，均不削弱叙事张力）**：
     (a) **改成"贵族打贵族的牙，是以牙还牙——敲掉你的牙；贵族打平民的牙，赔 1/3 mina 了事"**。这反而**更锋利**：上等人之间用肉体报复(对等)，对下等人只需花 1/3 mina 买单——"以牙还牙根本不适用于平民"的反差比"3 倍价差"更刺。但要放弃"同一颗牙差三倍价"这句很顺口的话。
     (b) **保留"同伤不同价 + 三倍"框架，但把例子从"牙"换成"眼/骨"**：法 198 贵族伤平民眼/骨赔 1 mina vs 法 199 伤奴隶眼/骨赔奴隶半价——或贵族伤贵族眼=以眼还眼 vs 伤平民眼=赔 1 mina。注意"三倍"这个具体倍数需重新核：1 mina(平民牙是 1/3) 的对照对象若改对，倍数关系要随之改写。
     - **最稳做法**：用 (a)，因为它 100% 贴法典原文且张力更强。无论选哪个，**"贵族牙赔 1 mina"这个不存在的条款必须撤掉**。

2. **[#3 中 mushkenum 简化] ⚠️downgrade-wording（低优先）**
   `「mushkenum（穆什凯努），是地位低一截的平民」/「平民」`（`ham-n4`、全 topic 反复，kernel §2 L2/附录 B）
   - **问题**：学界对 mushkenum 确切含义**长期有争议**——可能是"依附王室/神庙的半自由人(serf-like)"而非现代意义的"自由平民"。storyboard 简化为"平民"是 6 年级通行做法，但略去了"依附性"。kernel §9 historiography 已诚实标注此争议，§2 L2 也写了"依附王室或神庙的平民"——所以**kernel 处理已合规，只是 storyboard 口语层丢了"依附"二字**。
   - **建议**：可保留"平民"（6 年级层面影响小，且 kernel 已存争议标注）；若要更准，在 `ham-n4` 首次出现处加半句"依附王室或神庙的"。**非必改**，列此仅为透明。

3. **[#14 措辞] ⚠️downgrade-wording（低优先）**
   `「一个主人弄瞎自己 wardum（奴隶）的眼呢？连赔都不用」`（`ham-n5`）
   - **问题**：法典明文(法 199)规定的是**伤他人奴隶赔奴隶半价**给奴隶主；"主人伤自己奴隶不用赔"是合理 inference(自己的财产)，但"连赔都不用"是绝对表述，且法典并无一条明写"主人可随意伤自己奴隶"。
   - **建议**：软化为"主人伤自己的奴隶，几乎不用付出代价（奴隶在法律眼里是他的财产）"，或"伤别人的奴隶，也只赔奴隶身价的一半"。低优先。

4. **[#6 / stele 材质] ⚠️downgrade-wording（最低优先，仅 kernel）**
   `「材质为玄武岩/闪长岩一类深色硬石」`（kernel §4 故事 3）
   - **问题**：**不是错**——这恰恰是正确的 hedge。2026 npj Heritage Science 指出 basalt vs diorite **至今学界仍有争议**。kernel 用"玄武岩/闪长岩一类"已规避；storyboard 只说"黑石柱"更安全。
   - **建议**：**无需改**，列此仅提示创始人：若未来有人问"到底是不是玄武岩"，标准答案是"主流倾向玄武岩，但 basalt/diorite 仍有争议"，现有 hedge 完全站得住。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| **Hammurabi（汉谟拉比）** | hammurabi | **真实历史人物**，生卒/在位/统一/刻法典皆有据 | N/A — 非合成 |
| **一个巴比伦书吏** | babylonian-scribe | **composite 虚构典型人物**：无具名，基于楔形文字职业史构建；第一人称内心戏(刻字时的犹豫)为 dramatization | ✅**四处透明标注**：`sc-n1` 括号("我不是史书上某个有名有姓的人……这一遍你跟着这样一个典型的书吏走") + lens desc("这是一个虚构的典型人物") + kernel §3(⚠️ composite) + 附录 C + meta.notes |
| **一个巴比伦平民女性** | commoner-woman (DEFAULT) | **composite 虚构典型人物**：mushkenum 女性，基于法典平民/女性条款；"被打掉一颗牙去讨说法"的具体场景为 dramatization(法典是"如果…就…"案例式，非某真人案件) | ✅**四处透明标注**：`cw-n1` 括号("我不是史书上某个具体的人……") + lens desc + kernel §3 + 附录 C + meta.notes |
| "你就是 TA"第二人称代入（各 lens `*-n4` peak）| 全 3 lens | 把读者置入主角内心做选择——**教学代入手法**，非伪造史实人物 | N/A — 教学手法 |
| 断案人/旁人小声告知（`cw-n4`/`cw-n5`）| commoner-woman | 泛指性场景人物（"断案的人""旁边有人"），无具名虚构，属合理 inference 的场景填充 | ✅可接受（无具名捏造；附着于已标注的 composite 场景内）|

**结论**：本 topic **两位 composite（书吏 + 平民女性）均已透明标注**，且标注密度高（每位四处：节点括号 + lens desc + kernel + 附录/meta），符合 `HISTORY_EVIDENCE_LAYER.md` composite 透明红线。**无未标注的合成人物。** 唯一红旗(#1)是数字硬伤，与角色透明性无关。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— hammurabi（perpetrator-actor，9 节点）/ babylonian-scribe（lonely-mediator，composite，9 节点）/ babylonian-commoner-woman-receiving-end（receiving-end，composite，DEFAULT，9 节点）。红旗分布：#1(牙赔偿数字) 贯穿**全部 3 lens**的 N4+N6 双锚；#2(mushkenum 简化)/#3(奴隶措辞) 在 hammurabi lens；#4(材质) 仅 kernel。

- **直接引语分层核验**（古代史 Band C 重点）：
  - *法典条款（primary，但已声明为 paraphrase/simplified）*：序言"让强者不得欺压弱者"(法典 prologue "that the strong might not oppress the weak" ✓对得上)、打牙/以眼还眼条款——kernel §5 开头已明确"引文为常见英译的转写与 6 年级简化，标注为 paraphrase/simplified（非逐字原文）"，**处理合规**。
  - *平民/书吏第一人称内心独白（dramatization）*：均附着于已标注的 composite 角色，无把演绎句排成"法典档案样式"的违规。
  - **唯一问题不在引语层，而在数字层**（红旗 #1：牙赔偿对照数字张冠李戴）。

- **古代年代约数处理**：在位"约 1792-1750"、法典"约/前后 1754"、书吏"c.1770"、女性"c.1750"——全部标"约/前后/c."，**符合 Band C 古代史年代多为约数的规范，是对的，不是错误**。

- **反 Whig / Rule 0 核验**：storyboard 与 kernel 均明确拒绝"人类法治第一步/平等起点"叙事（meta.notes + kernel §10 误解 1/§9 反 Whig），核心命题"成文 ≠ 平等"有法典明文(三等差等)支撑，**立场合规**。

- **用到的外部核实来源**：Wikipedia（Code of Hammurabi / Code of Ur-Nammu）、Britannica（Code of Hammurabi）、Louvre 官网、Smarthistory、World History Encyclopedia（Code of Hammurabi / Mesopotamian Education）、eHammurabi.org（法 196-201 逐条 + muškēnum 词条）、Yale Avalon Project（Harper 译本法 196-205）、Wikisource（Harper translation）、npj Heritage Science 2026（basalt/diorite 争议）、Encyclopedia.com（Class and Society in Ancient Near Eastern Law）。

- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2（Fact Ledger）—— **存在 1 处 ✋flagged 事实硬伤（红旗 #1）需先修**：法典并无"贵族牙赔 1 mina"一条，该数字对照必须按建议 (a) 改为"贵族牙=以牙还牙 / 平民牙=1/3 mina"（或换成眼/骨例）。这是过 Gate 2 的**前置必改项**（因其贯穿全 3 lens 的情感锚点）。其余 3 条(#2/#3/#4)为低优先级收紧/无需改，可与 #1 同批处理。修掉 #1 后本 topic 史实地基即稳。
