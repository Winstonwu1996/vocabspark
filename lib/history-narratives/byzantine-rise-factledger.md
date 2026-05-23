# 拜占庭兴起 285-1453 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    byzantine-rise
生成日期:    2026-05-23
来源文件:    lib/history-storyboards/byzantine-rise.js（3 lens: emperor-justinian / theodora / anna-the-iconographer）+ lib/history-narratives/byzantine-rise.md
claim 总数:  30
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
| 1 | 「537 年 12 月 27 日 Hagia Sophia 圆顶完工」（`just-n5` / `theo-n8` / kernel §1·§2）| date | encyclopedia | 1485 周年权威一致：537.12.27 由 Justinian + Patriarch Menas 落成（5 年 10 个月工期），确证 | ✅verified |
| 2 | 「圆顶直径 31 米、离地 56 米」（`just-n5` / `theo-n8` / kernel §1·§0.5）| number | encyclopedia | 直径约 31 m、顶高约 55-56 m（180 ft），权威一致 | ✅verified |
| 3 | 「圆顶 1000 年世界最大，直到 1436 Brunelleschi Florence Duomo 才超」（`just-n1`·`just-n5`·`just-n10`·`just-n12` / `theo-n8`）| absolute / number / date | encyclopedia | **storyboard 版正确**：Florence Duomo 1436 超越 Hagia Sophia overall dome 纪录。**但 kernel §1 narrative 写「直到 1710 St Paul's 才超」与之冲突且为错** → 见红旗 #1 | ✋flagged |
| 4 | 「Justinian 走入说『Solomon, I have surpassed thee.』(Procopius《Buildings》记)」（`just-n5` / `theo-n8` / kernel §1）| quote | dramatization | **这句是后世口传/传说（oral tradition），不见于 Procopius《Buildings》原文**；普遍来源标为「legend / reportedly」。storyboard 直接归 Procopius 是**错误归源** → 见红旗 #2 | ✋flagged |
| 5 | 「Justinian 482 生 Tauresium 农民家庭 / 527.4.1 即位 45 岁 / 565.11.14 死 83 岁」（`just-n1`·`just-n8` / kernel §3）| date | encyclopedia | 482-565 生卒、Tauresium（今北马其顿）出身、527 即位、565 死，权威一致 | ✅verified |
| 6 | 「Corpus Juris Civilis：528-529 Codex / 530-533 Digest / 533 Institutes / Novellae，Tribonian 主持」（`just-n3` / kernel §2·§0.5）| date | encyclopedia | Codex 529 / Digest+Institutes 533.12.30 生效 / Tribonian 主编，确证 | ✅verified |
| 7 | 「11 世纪 Bologna 重发掘《学说汇纂》→ 大陆法系；1804 拿破仑法典 + BGB 1900 + 意 1942 + 日 1898 都溯到它」（`just-n3`·`just-n10`·`just-n12` / kernel §0.5）| causal / date | encyclopedia | Bologna 11c 复兴 Corpus 为中世纪 civil law 基础；现代民法谱系归溯，确证 | ✅verified |
| 8 | 「21 世纪约一半司法体系用大陆法系」（`just-n3`）；kernel §0.5 另说「60% 国家」| number | encyclopedia | storyboard 用「约一半 / roughly half」稳妥。**注意 deliverGoal 与 kernel 处出现「60% 国家」措辞偏高/未对齐** → 低优先级，见红旗 #6 | ⚠️downgrade-wording |
| 9 | 「532.1.13-18 Nika 暴动，蓝绿 2 派（原 4 派）联手」（`just-n4` / `theo-n6` / kernel §2）| date / number | encyclopedia | Nika 1月13日起、皇宫议会18日、蓝绿联合，确证 | ✅verified |
| 10 | 「Nika 屠杀 30,000 人死」（`just-n4`·`just-n10` / `theo-n6` / kernel §0.5·§2）| number | primary | Procopius《Wars》I.24.54 给 30,000；Theophanes + Chronicon Paschale 给 35,000。storyboard 已加 careful framing（封闭场地镇压、平民为主、Cameron 1976 提醒）。**数字本身是 Procopius 一手孤证，措辞「3 万人死」当作硬数字略危** → 见红旗 #3 | ⚠️downgrade-wording |
| 11 | Theodora 名言「紫袍是高贵的寿衣 / purple is a noble shroud」（`just-n4` / `theo-n6` / description）| quote | primary | **见于 Procopius《Wars》（干净史源，非《秘史》）**：「royalty is a good burial-shroud」。但学界（Evans）视其为 Procopius 的修辞 set-piece（套用对 Dionysius 暴君的古训），非逐字实录 → 见红旗 #4 | ⚠️downgrade-wording |
| 12 | 「Procopius《秘史》是死后发表的 partisan polemic，不是中立史料（Cameron 1985/1976 修正）」（`just-n2` / `theo-n3`·`theo-n11`）| causal | encyclopedia | 现代学界共识：《秘史》死后才现、属党派攻击文本、对 Theodora 性生活为「exaggerated diatribe」。storyboard 处理**优秀**（主动史源批判）| ✅verified |
| 13 | 「Theodora 父 Acacius 是 Hippodrome 绿党熊管理员 / 她年轻做哑剧演员（infamis 等级）」（`theo-n1`·`theo-n2` / description / kernel §3）| number / representativeness | encyclopedia | Acacius 绿党熊管理员、Theodora 演员-infamis 身份，确证（部分细节源自《秘史》需 careful，storyboard 已标）| ✅verified |
| 14 | 「523/525 改法律允许悔改演员嫁元老议员，为 Theodora 改；525 结婚」（`just-n2` / `theo-n5` / kernel §3·§0.5）| date / causal | encyclopedia | 婚姻特别立法（解除 actress-senator 禁令）+ 525 结婚，确证 | ✅verified |
| 15 | 「527.4.1 Theodora 与 Justinian 同日加冕 Augusta」（`theo-n5`）| date | inference | 527 共治+皇后加冕确证；「同日 4.1」为合理叙事压缩（Justin I 4.4 死），低风险 | ✅verified |
| 16 | 「535《Novellae》保护妓女 4 部分 + 抹除 infamis 污名」（`theo-n7` / kernel §3）| number / causal | encyclopedia | Justinian 立法禁人贩、允妓女脱身、设 metanoia 院，Theodora 推动，确证 | ✅verified |
| 17 | 「Theodora 庇护 Monophysite 主教 Severus of Antioch + 540s 支持 Nubia 传教」（`theo-n7`）| motive | encyclopedia | Theodora 庇护一性论派、Severus 避难、Nubia missionary 支持，确证 | ✅verified |
| 18 | 「542 Plague of Justinian：Procopius 记每天死 5,000-10,000；Justinian 自己染病活下来」（`just-n7` / `theo-n9` / kernel §2）| number | primary | Procopius《Wars》卷2 记日死数；Justinian 染病幸存，确证（数字为一手描述）| ✅verified |
| 19 | 「鼠疫死亡率：旧说 25-50%（Allen 2007）vs Mordechai et al. 2019 PNAS《Inconsequential Pandemic?》显著低于此」（`just-n7` / `theo-n9` / kernel §2·§3）| number / causal | encyclopedia | Mordechai 2019 PNAS 确为该题目、确以考古/钱币/古DNA 论证旧估夸大。storyboard 处理**优秀**（双说并陈 + AP DBQ source-criticism）| ✅verified |
| 20 | 「533-554 重夺地中海：北非 533-534 + 意大利 535-554（罗马 5 易手，人口 50 万→3 万）+ Spania 552」（`just-n6`·`just-n9` / kernel §2·§3）| number / date | encyclopedia | Belisarius 北非、哥特战争 19-21 年、Narses 552、Spania，主线确证。**罗马城「50万→3万」为常被引但跨度大的估计** → 见红旗 #5 | ⚠️downgrade-wording |
| 21 | 「Lombards 568（死后3年）入意大利；北非 698、西班牙南部 624 7c 内全丢」（`just-n6`·`just-n9` / kernel §2·§3）| date | encyclopedia | 568 Lombard 入侵、698 迦太基失、Visigoth 624 收复 Spania，确证 | ✅verified |
| 22 | 「558.5.7 地震圆顶东半塌，Isidore the Younger 重建升高 6.25 米」（`just-n5` / kernel §1）| date / number | encyclopedia | 558 圆顶塌、Isidore 侄子重建更高更稳，确证（kernel §1 误称其为「孙子 grandson」，storyboard 作「grandnephew 孙侄」更准）| ✅verified |
| 23 | 「Theodora 548.6.28 死，48 岁，癌症（Foss 2002 多推断乳腺癌）」（`theo-n10` / kernel §3）；Justinian lens 另作「子宫癌 uterine cancer」（`just-n8`）| date | inference | 548.6.28 死确证。**但「乳腺癌 vs 子宫癌」两 lens 内部冲突，且原始史料只说『cancer』泛指——两种具体癌型均为后世归因** → 见红旗 #7 | ✋flagged |
| 24 | 「porphyra 紫房间 535 后制度化（Theodora 推动）→ porphyrogenita 紫色出身标记 → 1083 Anna Komnene」（`theo-n10`）| causal / date | dramatization | porphyra 室存在；但「born-in-the-purple 王朝含义到 mid-9c 才发展」，6c Theodora「制度化紫房间」为**叙事拔高/时代错置**，且系第一人称演绎 → 低优先级，见红旗 #7 合并 | ⚠️downgrade-wording |
| 25 | 「717-718 阿拉伯围城 13 个月，80,000 兵 + 1,800 船」（`anna-n1`·`anna-n3` / description）| number | encyclopedia | Theophanes 记 1,800 船；80,000 兵为一来源（另有 al-Mas'udi 12万、Michael 20万）。storyboard 取保守一致版，成立 | ✅verified |
| 26 | 「726 Leo III 拆 Chalke 门基督像 = Iconoclasm 开场」（`anna-n3` / description / kernel §0）| date / causal | encyclopedia | 726 Chalke 拆像为传统开端（Theophanes 记，9c 圣像派写法 storyboard 已 careful 标）| ✅verified |
| 27 | 「Iconoclasm 4 重真因（Brubaker & Haldon 2011）：阿拉伯军事压力 + 鼠疫后人口经济崩溃 + themata 军区制 + Exodus 20:4 神学」（`anna-n3`·`anna-n11` / description）| causal | encyclopedia | Brubaker & Haldon 2011 反 Whig 多因论确为该书核心论点。storyboard 处理**优秀**。注：「themata 兵反圣像」为史学诠释非铁证 | ✅verified |
| 28 | 「754 Hieria Council 338 主教定圣像异端；罗马教皇 + 东方三大牧首区均缺席」（`anna-n5` / description）| number / date | encyclopedia | 754 Hieria、约 338 iconoclast 主教、无五大牧首区代表，确证 | ✅verified |
| 29 | 「787.9.24 Nicaea II（350+ 主教含罗马代表）定 veneration 非 worship，撤 754；视为最后一次正统东西方大公会议」（`anna-n7`·`anna-n8` / description / kernel §2）| date / number | encyclopedia | Nicaea II 787 恢复圣像、第七次大公会议，确证 | ✅verified |
| 30 | 「843.3.11（四旬期首主日）皇后 Theodora（9c，非 6c Lens 2 那个）行 Triumph of Orthodoxy」（`anna-n10` / description / kernel §2）| date / representativeness | encyclopedia | 843.3.11 摄政皇后 Theodora（Michael III 之母）恢复圣像、正教凯旋日，确证。storyboard 主动提示「3 个同名 Theodora 不要混」**优秀** | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#3]** kernel §1 narrative：「31 米圆顶 1000 年世界最大圆顶纪录——直到 **1710 年伦敦圣保罗大教堂（St Paul's）** 超过。」
   - 问题：**两源内部硬冲突 + 事实错误（重点）**。同一 topic 的 **storyboard 三处都写「1436 Florence Duomo」（正确）**，但 **narrative kernel §1（CN+EN 双版）写「1710 St Paul's」**。权威标准答案是 Florence Duomo 1436 超越 overall dome 纪录（pendentive 专项纪录到 16c 末 St Peter's）。St Paul's 1710 既非主流答案、也与本 topic 自己的 storyboard 矛盾——学生在 hook 与 lens 会读到两个不同年份。
   - 建议：把 kernel §1 的「1710 St Paul's」**改为「1436 Florence Duomo」**与 storyboard 对齐（storyboard 不动）。这是本次最该处理的硬伤。

2. **[#4]** `just-n5`·`theo-n8`·kernel §1：「Procopius《建筑史》记载，查士丁尼说『Solomon, I have surpassed thee.』」
   - 问题：**引语错误归源（重点 C）**。这句**不见于 Procopius《Buildings》原文**，是后世口传传说（多被来源标为 legend / oral tradition / reportedly，常归于晚出的 Narratio de S. Sophia / Diegesis）。storyboard 与 kernel 都把它**确指给 Procopius**，等于把传说排成一手引文。
   - 建议：维持这句的情绪与教学价值，但**改为非确指措辞**——如「后世流传查士丁尼走入时说……（口传，非 Procopius 同代记录）」。去掉「Procopius《Buildings》记」的确指。注意：同一节里 Theodora「紫袍寿衣」是真 Procopius《Wars》——两句引语来源等级不同，不要被本条牵连降级。

3. **[#10]** `just-n4`·`just-n10`·`theo-n6`：「3 万人死在赛马场封闭空间内被屠杀。」
   - 问题：**强数字底座为单一来源（重点 A）**。30,000 来自 Procopius《Wars》一家；Theophanes/Chronicon Paschale 作 35,000，且有「部分死于踩踏而非士兵」之说。storyboard 已做了很好的 careful framing（封闭镇压、平民为主、Cameron 1976），但「3 万人死」仍以确定数字出现多次。
   - 建议：可接受（已 careful），更稳的写法是「同代记载约 3 万（一说 3.5 万）」，把孤证数字显式标为估计。中低优先级。

4. **[#11]** `theo-n6`·`just-n4`：Theodora「紫袍是高贵的寿衣 / purple is a noble shroud」整段演讲。
   - 问题：**引语真史料但属修辞 set-piece（重点 C）**。这句**确在 Procopius《Wars》**（干净史源，本身是加分项），但学界（J.A.S. Evans）指出 Procopius 将其改写自给暴君 Dionysius 的古训、是文学加工的演说，非 Theodora 逐字原话。storyboard 把整段当直接引语呈现（`theo-n6` 引号大段）。
   - 建议：引语可保留（它是 verified primary 出处），但可加一句框定「Procopius 记下的这段演说（很可能经他文学加工）」，避免读成录音级原话。低优先级。

5. **[#20]** `just-n6`·kernel §3：「罗马城人口从战前 50 万掉到战后 3 万。」
   - 问题：**数字跨度大的估计当硬数字（重点 A 轻类）**。古代城市人口数本身高度不确定；「50 万→3 万」是常被引用的戏剧性对比，但属粗估，非可精确核实的统计。
   - 建议：可接受，更稳写法「从数十万跌到几万」或「学界估计从约 50 万跌到几万」。低优先级。

6. **[#8]** `just-n3` deliverGoal·kernel §0.5：「21 世纪 60% 国家用大陆法系」（storyboard 正文用「约一半」）。
   - 问题：**措辞不一致 + 偏高**。storyboard 正文「约一半 / roughly half」稳妥；但 deliverGoal 与 narrative 处出现「60%」更高的数字，无统一口径。
   - 建议：统一为「约一半 / roughly half」。极低优先级（正文已稳，仅 deliverGoal/narrative 措辞对齐）。

7. **[#23 + #24]** `theo-n10`「Theodora 死于乳腺癌（Foss 2002）」vs `just-n8`「Theodora 死于子宫癌 uterine cancer」+ porphyra 室 535 制度化。
   - 问题：**(a) 内部冲突 + 过度具体**——两 lens 给出**不同癌型**（乳腺 vs 子宫），而 6c 原始史料只说『cancer』泛指（恶性肿瘤/溃疡），两种具体癌型都是后世/医学回溯归因。**(b) 时代错置**——`theo-n10` 称 Theodora「535 后制度化 porphyra 紫房间」并把 porphyrogenita 紫色出身当 6c 既有标记，但学界指 born-in-the-purple 的王朝含义到 mid-9c 才发展；6c「Theodora 制度化紫房间」属第一人称演绎拔高。
   - 建议：(a) 两 lens 统一为「死于癌症（具体病种史料不详，后世有乳腺癌等推测）」，去掉互相矛盾的具体癌型。(b) 把「我制度化紫房间」软化为「porphyra 紫房间传统在拜占庭后世成为最高血统标记」，不把 6c Theodora 设为制度化者。中优先级（porphyry thread 是跨 600 年叙事钩子，建议保留钩子但去掉年代确指）。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 修女 Anna（圣像画修女）| `anna-the-iconographer`（全 12 节）| 虚构姓名；约 710-820 生卒 + 105/110 岁高龄为**刻意 composite voice**（一肉身做不到，代表 117 年圣像派活记忆）；同辈画师 Theodosia、教师 Maria、8 学生、修院 80 修女、藏画/被搜砸等个体场景为叙事演绎；**底层世界（717-718 围城、726 Chalke 拆像、730 法令、754 Hieria、762 关院+Hippodrome 游街、787 Nicaea II、815 二轮、843 凯旋）全为 documented** | ✅ **已透明标注（多重）**：nameCn 直接写「(虚构合成)」、description CN/EN 双标 composite、**独立 `fictionalDisclaimer` 字段**详列「真历史 vs 虚构」并对齐 AoE Anacaona/Reformation Sister Agnes/Mali Aisha 同 pattern、`anna-n9`·`anna-n10` 节内括号再次申明 105/110 岁为 composite voice、`anna-n12` 显式列「虚构合成」。**符合 dark-topic composite 红线** |
| Theodosia（Anna 的同辈画师修女，762 强制嫁人 4 年后病死）| `anna-the-iconographer`（`anna-n6`·`anna-n12`）| 完全虚构的个体（无史源），代表 762 关院后修女被强制还俗/嫁人的典型结局；`anna-n12` 明示「她只在我这个虚构 voice 里 / Theophanes 没记她」| ✅ 已透明标注（嵌在 Anna composite 框架内，且 `anna-n12` 主动点明她不在任何史料）|

> 其余出场人物（Justinian / Theodora 6c / Justin I / Belisarius / Narses / Tribonian / Anthemius / Isidore / Procopius / Leo III / Constantine V / Leo V / Empress Irene / Empress Theodora 9c / Patriarch Germanus / Severus of Antioch / Anna Komnene / Diocletian / Constantine I / Theodosius I）均为**真实历史人物**，非合成。Justinian / Theodora 两 lens 为第一人称视角叙事（内心戏属合理 inference，挂在已证事实骨架上）。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `emperor-justinian`（claim #1-10,18,20-22；含 N4/N5 ⭐ 重点节点）/ `theodora`（#1-2,9-19,23-24；含 N6/N8 ⭐ Nika+圆顶）/ `anna-the-iconographer`（#1-2,25-30；全节 composite）。narrative kernel 另覆盖 §0-§3 framing。
- **文化对应硬禁自检**：✅ **通过**。全文用拜占庭/罗马自身概念体系——emperor / Augusta / Augustus-Caesar（Tetrarchy）/ Corpus Juris Civilis 法典 / Patriarch / Monophysite-Chalcedonian / themata / porphyra，**未发现用中国概念词（如「丞相」「科举」「年号」「礼部」等）套拜占庭制度**。跨文明对照（Huizong / Mansa Musa / Lorenzo Medici / Li Qingzhao / Tang Taizong）均明确标为「同代对照 / cross-lens」，是平行类比而非概念混用，处理得当。
- **重点核查结论**：
  - **重点 A（数字夸张）**：#10 Nika 3万（Procopius 孤证，已 careful）、#20 罗马 50万→3万（粗估）、#8 大陆法系 60% vs 约一半（措辞不齐）——均轻类降级，无离谱硬错。542 鼠疫死亡率（#19）处理**优秀**（双说 + Mordechai 2019 PNAS 精确引用）。
  - **重点 B（代表性 / composite）**：Anna + Theodosia composite **透明标注到位（fictionalDisclaimer 字段 + 节内多重申明 + n12 主动点明 Theodosia 不在史料）**，无红旗；843 Theodora 主动防混淆「3 个同名皇后」是加分项。
  - **重点 C（引语分层）**：⚠️ 两条引语需分层处理——「Solomon I have surpassed thee」(#4) 是**传说被误归 Procopius（应降级）**；Theodora「紫袍寿衣」(#11) 是**真 Procopius《Wars》但属修辞 set-piece（轻框定）**。Procopius《秘史》partisan polemic 的史源批判（#12）storyboard 处理**优秀**。
  - **重点（内部一致性）**：发现 **2 处两源/两 lens 硬冲突**——(1) 圆顶纪录 1436 Florence（storyboard）vs 1710 St Paul's（kernel，错）#3；(2) Theodora 癌型 乳腺（theo-n10）vs 子宫（just-n8）#23。两者均应统一。
- **用到的外部核实来源**：Wikipedia（Hagia Sophia / Theodora wife of Justinian / Nika riots / Corpus Juris Civilis / Plague of Justinian / Council of Hieria / Siege of Constantinople 717-718 / Feast of Orthodoxy / Born in the purple / Procopius）、Britannica（Theodora）、World History Encyclopedia（Hagia Sophia / Empress Theodora）、List of largest domes (Wikipedia)、PNAS（Mordechai et al. 2019 "The Justinianic Plague: An inconsequential pandemic?"）、McGill Classics（Procopius portrayal of Theodora）、OCA / GOARCH（Triumph of Orthodoxy 843.3.11）、PubMed（Theodora breast cancer 回溯归因 caveat）、Dumbarton Oaks / Porphyra chamber 资料、History Today（Hagia Sophia reconsecration 537.12.27）。
- **总评**：本 topic 史实骨架**总体稳健**——日期链（537 圆顶 / 532 Nika / 528-534 法典 / 542 鼠疫 / 565 死 / 717-718 围城 / 726-843 Iconoclasm 全程 / 754 Hieria / 787 Nicaea II / 843 凯旋）、人物生平、法典谱系、composite 透明标注、史源批判（Procopius 秘史 / Mordechai 鼠疫 / Brubaker-Haldon Iconoclasm 反 Whig）均经权威核实通过，且**史学方法论教学（hold contradiction / source-criticism / anti-binary）是本 topic 的亮点**。7 条红旗中，**#3（圆顶纪录 1710 vs 1436 两源冲突，且 1710 为错）与 #4（Solomon 引语误归 Procopius）是应优先处理的两项**；#23（癌型两 lens 冲突 + 过度具体）为中优先级内部一致性问题；其余 4 条为低优先级措辞/数字微调。无 `needs-source`（无悬空高风险事实）。**建议先处理 #3 / #4 / #23 再正式收尾，可进 Gate 2。**
