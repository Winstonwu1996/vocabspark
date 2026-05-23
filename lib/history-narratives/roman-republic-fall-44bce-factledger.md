# 罗马共和国与崩溃 c.509-27 BCE · The Roman Republic & Its Fall Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    roman-republic-fall-44bce
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/roman-republic-fall-44bce.js（3 lens：julius-caesar / cicero / landless-plebeian-receiving-end，各 12 节点）
            + lib/history-narratives/roman-republic-fall-44bce.md（narrative kernel）
claim 总数:  28
🚩 红旗数:   5（需创始人审）— 全部为 ⚠️downgrade-wording / 措辞收紧或 Band C 史料分层标注，无 needs-source、无 flagged 事实硬伤
```

**一句话总评**：史实地基**很稳**——所有日期（509 / 133 / 60 / 49 / 44 / 27 BCE）、制度机制（consul/Senate/tribune/dictator 限期半年）、人物结局（凯撒 ~23 刀、Cicero 被砍头割舌钉讲台、Augustus 27 BCE 终结共和）、引语真实性分层均对得上权威来源。本 topic 最大亮点：**对 "Et tu, Brute" 的拒绝引用是完全正确的**——该句不见于任何古代史料，纯属文艺复兴/莎士比亚加工，narrative 的处理（标"史料无法确证、后世剧作家加工、不当真话引"）是模范级 anti-fabrication。红旗集中在 **Band C 古典史料分层**（古典史家 Suetonius/Plutarch/Cassius Dio 写于事件后一两百年，几处戏剧性细节需更明确"后世史家记述 vs 当时记录"）+ Marius 军改"军队私人化"的现代学界争议 + Polybius→Madison 链条略去 Montesquieu 中介 + "die is cast" 引文真实性被学界质疑而文中标"真实流传引文"略偏强。**无演绎角色未标注**（合成平民已三处透明标注，模范处理）。

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`。
> 凡 `dramatization` 等级而文中**未透明标注**为合成 → 自动进红旗。
> **Band C 古代史专项**：古典史料（Plutarch/Suetonius/Appian/Cassius Dio）多写于事件后 100-250 年 → 区分"当时记录"vs"后世史家记述"；年代精度（约数 vs 确切年）。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | "大约公元前 509 年，他们赶走了最后一个国王，发誓再也不要一个人说了算"（`jc-n2`，kernel §2 L4 / Beat 1 / 附录 A）| date | encyclopedia | 维基 Overthrow of the Roman monarchy / Britannica：传统定年 509 BCE 驱逐 Tarquinius Superbus 建共和。文中已用"大约/约"=约数，处理稳妥 | ✅verified（见红旗 #1 史料性质注） |
| 2 | "Tiberius 在公元前 133 年，被一群元老院贵族当街打死，尸体扔进台伯河"（`jc-n3` / `lp-n4`，kernel §2 L4 / Beat 3 / 附录 A）| date+number | encyclopedia | 维基/Britannica Tiberius Gracchus：133 BCE 被 Scipio Nasica 率众用棍棒/木椅打死，尸体连同约 300 支持者扔进台伯河；罗马史上第一次大规模政治谋杀 | ✅verified |
| 3 | "弟弟 Gaius 几年后也死于政治暴力"（`jc-n3` / `lp-n4`，kernel Beat 3）| date | encyclopedia | 维基 Gaius Gracchus：121 BCE 死于政治暴力（"几年后"=12 年，7 年级层面可接受概括）| ✅verified |
| 4 | "大约公元前 60 年，我跟 Crassus、Pompey 三个人私下结成同盟……前三头同盟"（`jc-n5` / `ci-n4`，kernel Beat 5 / 附录 A）| date | encyclopedia | 维基 First Triumvirate：约 60 BCE（late 60）Caesar/Pompey/Crassus 秘密私人同盟，目的绕开元老院。"私下/private agreement"准确 | ✅verified |
| 5 | "公元前 49 年 1 月……带兵跨过这条河，就是叛国"（`jc-n1` / `jc-n6` / `ci-n7` / `lp-n7`，kernel §1 / Beat 7 / 附录 A）| date | encyclopedia | 维基 Crossing the Rubicon：传统定 49 BCE 1 月（10 Jan）；带兵入意大利本土=向共和宣战 | ✅verified |
| 6 | "据说我说了一句话：「骰子已经掷出去了。」"（`jc-n1`，kernel §5.1 标"真实流传引文"）| quote | inference | Alea iacta est：Suetonius/Plutarch 记载，但写于事件后~150 年；Plutarch 称原为希腊语 ἀνερρίφθω κύβος（"让骰子掷下"祈使）非拉丁陈述句；学界认为**真实性不可确证、或为后世加工**。storyboard 用"据说"（hedged）处理好；但 kernel §5.1/§3 标"真实流传引文"偏强 | ⚠️downgrade-wording（见红旗 #2）|
| 7 | "公元前 44 年 3 月 15 日……「3 月的 Ides」"（`jc-n8` / `ci-n8`，kernel Beat 9 / 附录 A）| date | encyclopedia | 维基 Assassination of Julius Caesar：44 BCE 3 月 15 日，Curia of Pompey | ✅verified |
| 8 | "据说我中了二十多刀"（`jc-n8`，kernel Beat 9）| number | encyclopedia | 维基：约 23 刀（"twenty-three times"）；尸检称仅第二刀致命。"二十多刀"准确，"据说"hedge 稳妥 | ✅verified |
| 9 | "其中一个叫 Brutus，他的祖先正是五百年前赶走最后一个国王、缔造共和的那一支"（`jc-n8`，kernel Beat 9 / 附录 C）| causal | encyclopedia | 维基：Marcus Junius Brutus 为主谋之一；其家族传统上溯 Lucius Junius Brutus（509 BCE 驱逐 Tarquin 建共和者）。"传统/声称"的世系（古人自身的政治叙事），措辞"祖先"可接受 | ✅verified |
| 10 | "有一种流传很广的说法是我看着 Brutus 说了一句——但这句话史料并不能确证，后世剧作家加的成分很大，这里不当真话引"（`jc-n8`，kernel §5/§10.5 误区 5）| quote | inference | **核实 = 处理完全正确**：维基 Et tu Brute / Last words of Julius Caesar：该拉丁句**不见于任何古代史料**，纯文艺复兴/莎士比亚产物；Suetonius 仅作"传闻"记 "καὶ σύ τέκνον"，Plutarch 称凯撒未发一言只蒙头。narrative 拒引 = 模范 anti-fab | ✅verified（拒引正确，无需改）|
| 11 | "公元前 27 年，Octavian 做了……把权力一项一项收到自己手里，表面上却说「我把共和还给元老院和人民了」……新头衔：Augustus"（`jc-n9` / `lp-n9`，kernel Beat 11 / 附录 A）| date | encyclopedia | 维基 Augustus / Rise of Augustus：27 BCE 1 月 13 日"归政"表演、16 日元老院授 Augustus 尊号，传统上标志共和终结/帝制开始 | ✅verified |
| 12 | "Augustus（奥古斯都），意思是「revered, the supreme」/「the revered, the supreme」"（`jc-n9` EN，kernel 附录 B）| quote | encyclopedia | 维基/Britannica：augustus = "revered"（宗教/近神意味）。"revered"准确；"the supreme" 是轻度引申/意译扩展，非词典义 | ✅verified（"supreme"为轻度意译，可接受）|
| 13 | "从我前 49 年跨过 Rubicon，到前 27 年 Octavian 称 Augustus，中间只隔 22 年"（`jc-n9`，kernel Beat 11 / 附录 A 数学校验）| number | encyclopedia | 49−27 = 22。算术正确 | ✅verified |
| 14 | "他让元老院封我做「终身独裁官」（dictator for life）……本是个紧急职位……严格限期半年"（`jc-n7`，kernel §2 L3 / Beat 8 / 附录 B）| textbook | encyclopedia | 维基 Roman dictator / Britannica：dictator 为危机紧急职位，常限期半年或危机解除；Caesar 前 44 年初被封 dictator perpetuo（终身）。准确 | ✅verified |
| 15 | "两个执政官（consul），任期只有一年，两个人互相能否决对方"（`jc-n2`，kernel §2 L3 / 附录 B）| textbook | encyclopedia | 维基/lumen Structure of the Republic：consul 两人、任期一年、互相 veto、10 年内不得连任。准确 | ✅verified |
| 16 | "保民官（tribune），专门替平民说话，能一票否决伤害平民的法案"（`jc-n2`，kernel §2 L3 / 附录 B）| textbook | encyclopedia | 维基：tribune 之 intercessio 可否决害民的官方行为；10 名 tribune，任一即可阻断。准确 | ✅verified |
| 17 | "罗马人最怕的一个词，就是 rex（王）"（`jc-n2` / `jc-n7`，kernel §2 L3 / §10.1）| rhetoric | textbook | 主流史学共识：共和意识形态核心反 rex（regnum=暴政）。修辞但有事实底座 | ✅verified |
| 18 | "公元前 63 年……我当上执政官那年，一个落魄贵族 Catiline 密谋武装政变"（`ci-n3`，kernel §5.2 / 附录 A）| date | encyclopedia | 维基 Catilinarian conspiracy / orations：63 BCE Cicero 任执政官，Catiline 阴谋推翻共和。准确 | ✅verified |
| 19 | "第一句话至今有名：「Catiline，你还要滥用我们的耐心到几时？」"（`ci-n3`，kernel §5.2 标"真实引文"，拉丁原文 Quo usque tandem...）| quote | primary | Cicero, In Catilinam I §1（前 63 年 11 月 7/8 日，于 Temple of Jupiter Stator 当众发表）原文 "Quo usque tandem abutere, Catilina, patientia nostra?" 逐字对得上。**真实一手引语** | ✅verified |
| 20 | "我写过一句话，大意是：「法律是无声的执政官，执政官是会说话的法律。」"（`ci-n2`，kernel §5.3 标 paraphrase「大意是」）| quote | inference | 出自 Cicero, De Legibus 3.1.2（"magistratum legem esse loquentem, legem autem mutum magistratum"）。文中明确标"大意是/paraphrase"=正确分层（意译非逐字）| ✅verified |
| 21 | "公元前 58 年，他们借一个政敌的手，把我赶出了罗马，流放到希腊"（`ci-n5`，kernel 附录 A）| date | encyclopedia | 维基 Cicero：58 BCE 被 Clodius（政敌）逼流放希腊。准确 | ✅verified |
| 22 | "公元前 43 年，Antony 跟 Octavian 等人结成新的同盟……开列一张「该死的人」的名单……我的名字在名单上"（`ci-n9`，kernel Beat 10 / 附录 A）| date | encyclopedia | 维基 Cicero / 第二三头同盟 proscriptions：43 BCE Antony+Octavian+Lepidus 列 proscription 名单，Cicero 在列 | ✅verified |
| 23 | "他们砍下了我的头，还有我那双写演说的手……钉在罗马城广场的讲台上……据说 Antony 的妻子，还用发针刺穿了我那条……舌头"（`ci-n9`，kernel Beat 10）| number+rhetoric | encyclopedia | 维基/Plutarch：头+写《反腓力辞》的手被砍、钉于 Rostra（Cicero 是唯一被如此示众的 proscription 受害者）。**发针刺舌细节出自 Cassius Dio（写于事件后~250 年），常被误归 Plutarch**；属后世单一史家戏剧性记述。storyboard 用"据说"hedge 好 | ✅verified（"据说"已 hedge；见红旗 #3 Band C 注）|
| 24 | "将军 Marius 打开军队大门，让无地穷人也能参军……士兵从效忠罗马这个国家，变成效忠那个给他饭吃的将军个人"（`lp-n5`，kernel Beat 4 / 附录 A「约前 107 起」/ 附录 C）| causal | textbook | 维基 Marian reforms / WorldHistory：107 BCE Marius 招募 capite censi（无地穷人）；传统叙事称由此军队效忠转向将军、推动私人化。**但现代学界（acoup 等）对"Marius 军改=军队私人化"这一因果链有显著争议/部分修正** | ⚠️downgrade-wording（见红旗 #4）|
| 25 | "他们里有个叫 Madison 的，读了古希腊人 Polybius 写的罗马政体……照着罗马共和的样子，给美国设计了三权分立、参众两院、任期限制"（`jc-n10`，kernel §0 / §6 / §7 Polybius 锚）| causal | encyclopedia | 史学共识：Polybius《历史》卷6 混合政体论；Madison 在 Federalist 63 引 Polybius，Federalist 47 论分权。链条真实，但**主流强调中介是 Montesquieu**（Madison 自称"the oracle...is Montesquieu"）；"照着罗马设计/读 Polybius"略去 Montesquieu 中介、把影响说得过直接 | ⚠️downgrade-wording（见红旗 #5）|
| 26 | "「法律应该当家，而不是某个人说了算」……从古希腊、罗马一路传到中世纪英国的 Magna Carta"（`jc-n10` / `ci-n2`，kernel §6 / §10）| causal | textbook | 思想谱系共识：rule of law / 法律高于人 经 Aristotle→Cicero→Magna Carta→美宪 due process。措辞为思想传承非直接抄录，可接受 | ✅verified |
| 27 | "这是一个合成人物——把那个年代成千上万失地农民和退伍兵的真实遭遇，凑成一个人讲……我身上发生的每一件事，都真的发生在那几十万人身上"（`lp-n1` 括号，kernel §3 / meta.notes anti-fab）| representativeness | dramatization | composite 平民人物。**文中在 lp-n1 括号 + description + kernel §3 + meta.notes 四处透明标注**为合成、姓名/家庭叙事性、遭遇真实于群体。失地→挤城→卖票循环有 Gracchi 改革背景与 Marius 军改史实支撑 | ✅verified（合成已透明标注，模范处理）|
| 28 | "对很多失地穷人，皇帝来了日子反而稳了点——Augustus 给退伍兵分地、给平民发粮办娱乐"（`lp-n9`，kernel Beat 11）| causal | encyclopedia | 维基 Augustus：以 land settlement 安置退伍兵、维持 grain dole（cura annonae）与公共娱乐稳定平民。反 Whig 苦味判断有史实底座 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 全部为 ⚠️downgrade-wording（措辞收紧 / Band C 史料分层标注），**无事实硬伤、无缺来源、无演绎未标注**。按影响排序。

1. **[#1 / 通用 Band C 注]** `古典史料性质的整体提示`（影响全 topic 的 509/133/凯撒临终/Cicero 死状等"据说"类细节）
   - **问题**：本 topic 的戏剧性细节（凯撒中刀数、临终情形、Cicero 头手钉讲台 + 发针刺舌、509 建共和叙事）大量依赖 **Suetonius / Plutarch / Cassius Dio / Appian**，这些古典史家写于事件后 100-250 年，且常带道德教化/戏剧化色彩。storyboard 已普遍用"据说""有一种说法"hedge，**处理总体合规**。
   - **建议**：**无需改任何句子**。仅作为创始人知情项：本 topic 的"事实"层级，古代史天然弱于近代档案（如费城 1787 有逐日记录）。教学层面已通过"据说"+"史料无法确证"做了正确的不确定性标注。**列此条仅为透明，非必改。**

2. **[#6]** `「骰子已经掷出去了」（kernel §5.1 / §3 标"真实流传引文"/"真实流传引文")`
   - **问题**：storyboard 节点 `jc-n1` 用"据说我说了一句话"——**处理很好**。但 narrative kernel §5.1 与 §3 把它标为**"真实流传引文"**。学界实情：Alea iacta est 由 Suetonius/Plutarch 记于事件后~150 年，Plutarch 称原为希腊语祈使句（"让骰子掷下"），**真实性不可确证、可能为后世加工**。"真实流传引文"暗示比实际更确定。
   - **建议**：kernel 标签由"真实流传引文"改为**"后世史家记载的流传引文（真实性不可确证）"**或"古典史料流传引文"。注意：与同 topic 的 Catiline 引文（#19，Cicero 亲笔一手文本，真·primary）形成对比——两者真实性等级不同，不宜共用"真实引文"标签。storyboard 正文不必改（"据说"已对）。

3. **[#23]** `「据说 Antony 的妻子，还用发针刺穿了我那条……舌头」（ci-n9，kernel Beat 10）`
   - **问题**：**不是事实硬伤**——头+手被砍并钉于 Rostra 是较可靠记载（Cicero 是唯一被如此示众者）。但**发针刺舌**细节出自 **Cassius Dio（写于事件后~250 年），且常被误归 Plutarch**，属后世单一史家的戏剧性记述。storyboard 已用"据说"hedge。
   - **建议**：保持现状即可（"据说"已正确标注不确定性）。若想更严谨，可在 kernel Beat 10 加一句"（割舌细节出自后世史家 Cassius Dio，戏剧性强）"。**低优先级，非必改。**

4. **[#24]** `「Marius 打开军队大门……士兵从效忠罗马这个国家，变成效忠那个给他饭吃的将军个人」（lp-n5，kernel Beat 4）`
   - **问题**：传统教材叙事确实如此（107 BCE Marius 招 capite censi → 军队私人化 → 助推共和崩溃），AP/HSS 层面是标准说法。但**现代学界对"Marius 军改 = 军队私人化的单一转折点"有显著争议/部分修正**（部分研究指出兵源开放是渐进过程、忠诚转移更多源于元老院未解决退伍安置政策）。storyboard 已用"慢慢变成/step by step"软化，措辞不算硬。
   - **建议**：可保留（符合教材锚点 + 已软化）。若想反映 historiography 严谨度，可在 kernel §9 historiography 加半句"（关于 Marius 军改责任，现代学界有争议）"——这与本 topic §9 已有的多派并列风格一致。**中低优先级。**

5. **[#25]** `「Madison 读了 Polybius 写的罗马政体……照着罗马共和的样子，给美国设计了三权分立」（jc-n10，kernel §0/§6/§7）`
   - **问题**：Polybius→Madison 的影响**真实可引**（Madison 在 Federalist 63 引 Polybius；混合政体论 Aristotle→Polybius→近代 checks and balances）。但主流史学强调关键中介是 **Montesquieu**（Madison 自称分权问题"the oracle...is the celebrated Montesquieu"）。"读 Polybius / 照着罗马设计"把影响说得过于直接、单线，略去了 Montesquieu。
   - **建议**：低优先级（7 年级层面"国父借鉴罗马共和"是对的，且与 constitutional-convention topic 跨锚一致）。若想精确，kernel §7 Polybius 锚可补一句"（这条罗马思路主要经启蒙思想家 Montesquieu 传到美国国父）"。storyboard 正文可不动。**最低优先级。**

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| **一个无地的罗马平民**（receiving-end，DEFAULT lens 主角，约前 130-44）| landless-plebeian-receiving-end（全 12 节点）| **完全合成人物**：具体姓名、家庭、个人经历（祖父父亲有地→自己当兵→失地→挤城→卖票→内战炮兵）为叙事性虚构；但每一类遭遇都有 Gracchi 改革背景 + Marius 军改 + 土地兼并史实支撑于"那几十万人" | ✅**已四处透明标注**：① `lp-n1` 括号短句 ② lens `description`（cn/en 均含"这是一个合成人物"）③ kernel §3 黑体"**这是一个合成人物**" ④ meta.notes anti-fab 条目 |
| Julius Caesar | julius-caesar | **真实历史人物**（前 100-44），生卒/高卢战功/三头同盟/跨河/终身独裁官/被刺皆有据 | N/A — 非合成 |
| Cicero | cicero | **真实历史人物**（前 106-43），Arpinum 出身/执政官/Catiline 演说/流放/Philippics/被处死割舌皆有据 | N/A — 非合成 |
| "你就是 TA"第二人称代入（`*-n4` peak）| 全 3 lens | 把读者置入主角内心做选择，属**教学代入手法**，非伪造史实人物 | N/A — 教学手法，非合成角色 |
| 选举日"来买票的人 / 代表 Caesar 的人"（`lp-n6`）| landless-plebeian | 泛指性场景（"a man comes...acts for a great man, perhaps a man like Caesar"），用"可能是 Caesar 这样的人"hedge，无具名虚构人物 | ✅可接受（无具名捏造，已用"可能/perhaps"hedge）|
| Ashley 式具名场景 | — | 本 topic **无**类似 constitutional-convention 的具名次要人物虚构 | N/A |

**结论**：本 topic **无未标注的合成人物**。唯一的完全合成角色（无地平民）已在 storyboard 节点括号 + lens description + narrative kernel + meta.notes **四处**透明标注，超出 `HISTORY_EVIDENCE_LAYER.md` §1.3 / §2.1 composite 透明红线要求，处理为模范级。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— julius-caesar（perpetrator-actor，12 节点）/ cicero（lonely-mediator，12 节点）/ landless-plebeian-receiving-end（receiving-end，DEFAULT，12 节点）。红旗分布：#1（Band C 通用）跨全 topic；#2/#5 在 julius-caesar lens；#3 在 cicero lens；#4 在 landless-plebeian lens。
- **直接引语分层核验**（本 topic 最高风险类）——三层分明，处理优秀：
  - *真·一手史料（primary，逐字对得上）*：Cicero "Quo usque tandem abutere, Catilina, patientia nostra?"（In Catilinam I，Cicero 亲笔，前 63 年当众发表）—— 唯一的硬一手引语。
  - *后世史家流传引文（inference，不可逐字确证）*：Caesar "Alea iacta est / 骰子已掷"（Suetonius/Plutarch 记于事件后~150 年，可能希腊语，可能加工）—— storyboard 用"据说"hedge 好，但 kernel 标"真实流传引文"略强（红旗 #2）。
  - *意译/paraphrase（明确标注）*：Cicero "法律是无声的执政官..."（De Legibus，文中标"大意是/paraphrase"=正确）。
  - *拒绝引用（模范 anti-fab）*：Caesar 临终 "Et tu, Brute"—— **核实确认该句不见于任何古代史料、纯莎士比亚加工**，narrative 明确"史料无法确证、不当真话引"=**完全正确**。这是本 topic 最值得肯定的处理。
- **Band C 古代史专项判断**：本 topic 所有戏剧性细节（中刀数、临终、Cicero 死状、509 建共和）依赖古典史家（Suetonius/Plutarch/Cassius Dio/Appian，事件后 100-250 年），天然不及近代档案确定。storyboard **普遍用"据说/有一种说法"做了不确定性标注**，处理合规；仅 kernel §5.1 一处标签"真实流传引文"偏强（红旗 #2）。年代精度：509 BCE 用"大约/约"=正确（传统定年）；133/60/49/44/27 BCE 为较确切定年，准确。
- **用到的外部核实来源**：Wikipedia（Overthrow of the Roman monarchy / Tiberius Gracchus / Gaius Gracchus / First Triumvirate / Crossing the Rubicon / Alea iacta est / Assassination of Julius Caesar / Et tu Brute / Last words of Julius Caesar / Augustus / Rise of Augustus / Roman dictator / Cicero / Catilinarian orations / Marian reforms）、Britannica（Roman Republic / Tiberius Gracchus / Roman dictator / Augustus）、World History Encyclopedia（Gracchi / Marian reforms）、Lumen Learning（Structure of the Republic）、mlloyd.org + FEE + Coastal Carolina（Polybius→Madison/Federalist 47 & 63）、Penelope/UChicago（Death of Cicero）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2（Fact Ledger）—— 所有高风险 claim 均有来源或可降级为谨慎措辞，**无 needs-source 缺口、无 flagged 事实冲突**。5 条红旗全部为 ⚠️downgrade-wording 且多为"可保留/非必改"级。建议**至少处理 #2（"骰子已掷"标签由"真实引文"→"后世史家流传引文，不可确证"）**后过 Gate 2；#1/#3/#4/#5 为透明/低优先级收紧项，可与 #2 同批改或保留。
