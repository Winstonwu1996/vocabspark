# 去殖民化与不结盟 1947-1975 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    decolonization-1960
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/decolonization-1960.js（3 lens: winston-churchill / ralph-bunche / partition-refugee-receiving-end）+ lib/history-narratives/decolonization-1960.md
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
| 1 | 「我当首相，不是为了去主持大英帝国的散伙」（`churchill-n1`·`churchill-n5` / kernel §5A·§1）| quote | primary | Churchill 1942.11.10 Mansion House（Lord Mayor's Banquet）原话："I have not become the King's First Minister in order to preside over the liquidation of the British Empire." 逐字确证，且 storyboard 设在 1942 场景一致 | ✅verified |
| 2 | 「二战前全球约四分之一土地和人口在大英帝国旗下 / 太阳永远照在大英帝国上」（`churchill-n3` / kernel §2·L0）| number | encyclopedia | 鼎盛期大英帝国约占全球陆地与人口约 1/4，「the sun never sets」是固定史称，确证 | ✅verified |
| 3 | 「印度是『王冠上的明珠』」（`churchill-n3` / kernel §2）| quote | encyclopedia | "jewel in the crown" 为标准史称，确证 | ✅verified |
| 4 | 「1943 孟加拉饥荒约 300 万人饿死」（`churchill-n4`·`churchill-n9`·`churchill-n10` / kernel §1·§4.1·§10·附A）| number | encyclopedia | 「约 300 万」是常引数；学界估计区间随是否计入间接/长期死亡而从约 50 万到 300 万+ 不等。文中固定取 300 万为单一数字，**未对冲争议区间** | ⚠️downgrade-wording |
| 5 | 「饥荒原因很多：日占缅甸切断大米进口、台风毁庄稼、囤粮抬价、战时混乱管理」（`churchill-n4` / kernel §1·§4.1）| causal | encyclopedia | 多因果呈现**平衡且准确**：日军占缅甸断米、气旋/洪水/稻瘟、囤积抬价、省际贸易壁垒+战时船运短缺均为学界公认诱因（重点核查项）| ✅verified |
| 6 | 「Churchill 一次次压下、推迟、打折救援请求；战时船只优先 + 他私下看不起印度人」（`churchill-n4`·`churchill-n9` / kernel §4.1·§3）| causal / motive | encyclopedia | 主流史学：Churchill 战时内阁限制对孟加拉的粮援（理由为船运短缺），并曾拒绝转运 Australia/Canada 运欧粮食；其对印度人的轻蔑有记录。学界称其为「中心但非唯一」责任人——文中将「多因素 + Churchill 加重」平衡呈现，**未单一归因也未洗白**（重点核查项，处理良好）| ✅verified |
| 7 | 「他私下骂 Gandhi 是『半裸的苦行僧』」（`churchill-n5` / kernel §3）| quote | primary | Churchill 1931 原话："...posing as a fakir...striding half-naked up the steps of the Viceregal palace"。「half-naked fakir」为真史料，但**原话场合是 1931 公开评论第二次圆桌会议**，非严格意义的「私下」；中文「私下骂」措辞略偏 | ✅verified |
| 8 | 「Gandhi 靠绝食、不合作、几亿人抵制英货把帝国逼到墙角」（`churchill-n5` / kernel §4.2）| causal | textbook | 非暴力不合作（satyagraha）、抵制英货是 AP/标准叙事，确证；「把帝国逼到墙角」为合理史学概括 | ✅verified |
| 9 | 「1945 大选 Churchill 被选下台；新政府决定放手让印度独立」（`churchill-n5` / kernel §4.2·附A）| date / causal | encyclopedia | 1945.7 工党 Attlee 胜选，Churchill 下台；Attlee 政府推动 1947 印度独立，确证 | ✅verified |
| 10 | 「几十年前欧洲列强在 Berlin 开会瓜分非洲：拿尺子和笔切非洲」（`churchill-n6`·`bunche-n6`·`refugee-n6` / kernel §2·L3·§5D）| date / causal | encyclopedia | Berlin Conference 1884-85 瓜分非洲、人为划界跨族群，确证；跨 Topic 锚（B3）准确 | ✅verified |
| 11 | 「1947 国境线交给从没来过印度的英国律师 Cyril Radcliffe，给约 5 周画完」（`churchill-n6`·`refugee-n3` / kernel §1·L3·§5D·附C）| number / date | encyclopedia | Radcliffe 1947.7.8 抵印，被给约 5 周（须赶 8.15 撤离）画两条委员会界线；他此前未到过印度，确证 | ✅verified |
| 12 | 「界线走向拖到独立日后才公布，很多人独立后才知家被划另一国」（`churchill-n6`·`refugee-n3` / kernel §4.4·§5D）| date | encyclopedia | Radcliffe Award 8.9/8.12 完成，8.17 公布（独立日 8.15 之后），确证 | ✅verified |
| 13 | 「印度切成印度（印度教为主）+ 巴基斯坦（伊斯兰为主），约 1500 万人逃命」（`churchill-n7`·`refugee-n5` / kernel §1·§4.3·附A）| number | encyclopedia | 「约 1500 万」是被广泛引用的迁徙数；学界总位移估计区间约 12-20 百万。文中取 1500 万为中位常引值，成立 | ✅verified |
| 14 | 「两股人流互相砍杀；死亡人数估计几十万到一百多万之间」（`churchill-n7`·`refugee-n5` / kernel §4.5·§9·附A）| number | encyclopedia | 学界死亡区间约 20 万到 200 万（争议大）。文中「几十万到一百多万」是诚实的 hedge 区间表述，处于主流范围内（重点核查项，处理良好）| ✅verified |
| 15 | 「难民火车到站门一拉开没一个活人（鬼魂列车）」（`churchill-n7`·`refugee-n5` / kernel §1·L1·§5C）| rhetoric / number | encyclopedia | 「ghost trains / trains full of corpses」是分治史料中反复记载的真实场景，确证；作为意象成立 | ✅verified |
| 16 | 「1955 印尼万隆（Bandung）开会 → 1961 不结盟运动（NAM）正式成立」（`churchill-n8`·`refugee-n9` / kernel §1·L4·附A）| date | encyclopedia | Bandung 会议 1955.4.18-24；NAM 1961 在 Belgrade 正式成立，确证 | ✅verified |
| 17 | 「一个人可以同时是英雄和加害者（Churchill）→ 接 Leopold/Wilson 母题」（`churchill-n9` / kernel §7·meta.notes）| representativeness / causal | inference | 反 Whig 史学诠释，合理且与 Leopold/Wilson 跨 Topic 链一致；属诠释非硬事实，不需红旗 | ✅verified |
| 18 | 「Ralph Bunche 1904 生，1971 去世；1949 时 45 岁」（`bunche-n1`·`bunche-n2`·`bunche-n9` / kernel §3·附A·附C）| date | encyclopedia | 生 1904.8.7，卒 1971.12.9；1904+45=1949 ✓，确证 | ✅verified |
| 19 | 「祖母年轻时曾被奴役，把他带大；本可装白人却不肯」（`bunche-n1`·`bunche-n2` / kernel §3）| motive | encyclopedia | 外祖母 Lucy Taylor Johnson（"Nana"）born into slavery，含爱尔兰血统可 pass for white，父母早逝后带大三个孙辈，确证 | ✅verified |
| 20 | 「加州大学第一名毕业 + 哈佛博士」（`bunche-n2` / kernel §3）| absolute | encyclopedia | UCLA 1927 valedictorian + Harvard 政治学博士（首位非裔获此博士），确证 | ✅verified |
| 21 | 「1948 中东战争，前任瑞典外交官 Bernadotte 被刺杀，Bunche 接手」（`bunche-n4` / kernel §3·§4.6·附A）| date | encyclopedia | Folke Bernadotte 1948.9 在耶路撒冷被 Lehi 刺杀，Bunche 接任 UN 调停员，确证 | ✅verified |
| 22 | 「1949 在地中海罗德岛（Rhodes）旅馆谈成停火线」（`bunche-n1`·`bunche-n4`·`bunche-n6` / kernel §1·§4.6·附A）| date | encyclopedia | 1949 罗德岛旅馆为谈判基地，达成阿以停战协定，确证；「打台球缓和气氛」为传记常载轶事 | ✅verified |
| 23 | 「1950 Bunche 获诺贝尔和平奖，是历史上第一个获此奖的非裔人士」（`bunche-n7`·`bunche-n10` / kernel §1·§4.6·附A）| absolute / date | encyclopedia | 1950 诺贝尔和平奖，first person of African descent / first Black Nobel laureate，确证 | ✅verified |
| 24 | 「被拒任华盛顿橄榄球队高管，因球队当时不要黑人球员」（`bunche-n7` / 仅 storyboard，kernel 未载）| causal / motive | inference | **无法证实**。主流传记（Wikipedia/Nobel/King Institute）只载他拒绝 Truman（1949 助理国务卿）与 Kennedy 任命，因不愿在 Jim Crow 的华盛顿生活；华盛顿橄榄球队（Redskins，1962 才整合，确为最后一支不签黑人球员的 NFL 球队）一节**找不到 Bunche 关联出处**。疑为与「拒华盛顿任命」混淆 | ✋flagged |
| 25 | 「回美国仍进不去某些餐馆旅馆 / 某些州不能跟白人同坐一节车厢」（`bunche-n1`·`bunche-n2`·`bunche-n7` / kernel §3）| number / motive | inference | 方向真实（他确遭隔离，如 1959 被 West Side Tennis Club 拒；拒华盛顿任命因 Jim Crow）；但「餐馆/旅馆/车厢」为对当时种族隔离的合理概括渲染，非针对 Bunche 的逐项档案 | ✅verified |
| 26 | 「1947 独立那天领袖升新国旗、激动演讲，全世界报纸庆祝『伟大民族获自由』」（`refugee-n7` / kernel §4.7·§6）| rhetoric | inference | 1947.8.15 印度独立庆典、Nehru「Tryst with Destiny」演说为史实；文中泛化为意象对照（台上 vs 路上），合理 | ✅verified |
| 27 | 「那条 1947 线到今天还在；线两边两国打过好几仗、至今没真正和解」（`refugee-n8`·`refugee-n9` / kernel §6·§10）| causal | encyclopedia | 印巴自 1947 起多次战争（1947-48/1965/1971/1999）、Radcliffe Line/LoC 争议延续至今，确证 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#24]** `bunche-n7`：「后来有人请我去华盛顿的橄榄球队当高管，我拒绝了——因为那支球队当时不要黑人球员。」
   - 问题：**引语/事实存疑（最高优先）**。这是本 topic 唯一一条**找不到权威出处**的具体事实 claim。主流传记记载 Bunche 拒绝的是 **Truman（1949 助理国务卿）与 Kennedy 的政府任命**，理由是不愿在实行 Jim Crow 的华盛顿生活/工作；华盛顿橄榄球队（Redskins）确是直到 1962 才整合的最后一支不签黑人球员的 NFL 球队，但**没有任何主流来源把 Bunche 与该球队的高管邀约联系起来**。高度疑似把「拒华盛顿政府任命」误记/嫁接成「拒华盛顿橄榄球队」。kernel §3/§4.6 本身未提此事，仅 storyboard 出现。
   - 建议：**改用有出处的等价细节**——「我拒绝过华盛顿一个高位（杜鲁门请我当助理国务卿），因为不愿在一个对黑人实行种族隔离的城市生活」。情绪力度等同、且 verified。若坚持保留橄榄球队意象，须先找到一手出处，否则删。

2. **[#4]** `churchill-n4`·`churchill-n9`·`churchill-n10`·kernel §1·附A：「约 300 万人饿死」。
   - 问题：**争议数字未对冲（重点 A）**。「约 300 万」是最常被引用的数，但学界估计随是否计入间接/长期死亡而从约 50 万到 300 万+ 跨度极大。文中四处都固定取 300 万为单一确数，未像分治死亡数那样 hedge。对照本 topic 自己的 #14（分治死亡用「几十万到一百多万」区间），孟加拉饥荒数处理得更绝对。
   - 建议：至少在首次出现处加一句对冲——「约 300 万人饿死（估计从数十万到 300 万不等，取决于是否计入间接死亡）」。后续可沿用「约 300 万」。情绪不减、更稳。

3. **[#7]** `churchill-n5`·kernel §3：「他私下骂 Gandhi 是『半裸的苦行僧』」。
   - 问题：**引语场合措辞（重点 C 轻类）**。「half-naked fakir」是真史料（verified primary），但 Churchill 1931 的原话是**公开评论**（针对第二次圆桌会议的政治演说语境），非「私下」。中文「私下骂」会被史实党挑「场合错置」。
   - 建议：把「私下」改为「公开」或去掉场合限定词——「他骂 Gandhi 是『半裸的苦行僧』」。引语本身可保留。低优先级。

4. **[#13/#14]** `churchill-n7`·`refugee-n5`·kernel §4.3·附A：分治迁徙数与死亡数。
   - 问题：**轻类提示，非硬伤**。「约 1500 万」迁徙数（学界 12-20 百万）与「几十万到一百多万」死亡数（学界 20 万-200 万）都落在主流区间内，且死亡数已用区间 hedge，处理良好。仅提示：迁徙数若想更稳可写「约 1200-1500 万」或保留「约 1500 万」并知其为常引中位值。
   - 建议：可不动。极低优先级（已在合理范围且已 hedge）。

5. **[#25]** `bunche-n1`·`bunche-n2`·`bunche-n7`·kernel §3：「进不去某些餐馆旅馆 / 某些州不能跟白人同坐一节车厢」。
   - 问题：**渲染细节非逐项档案（轻类）**。方向完全真实（Bunche 确遭种族隔离，且拒华盛顿任命正因 Jim Crow），但「餐馆/旅馆/车厢」是对当时美国种族隔离的合理概括渲染，非针对 Bunche 本人的具体档案记录。
   - 建议：可接受（属合理 inference，挂在已证的「他遭隔离」事实上）。无需改动，仅备案。极低优先级。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 一个旁遮普分治难民 | `partition-refugee-receiving-end`（全 11 节，含 `refugee-n1`/`refugee-n4`/`refugee-n5`）| 无真名；约 27 岁（c.1920-1990 生卒）为叙事设定；具体家事（几亩地种小麦、邻居信仰混居、独立后家划另一国、逃亡路上失去家人、伤传三代）为叙事补充；**底层集体史（1947 大迁徙、Radcliffe 划界、教派屠杀、鬼魂列车、难民营、印巴永久冲突）为 documented** | ✅ **已透明标注**：lens description（「合成的、有真实历史依据的人物…由历史学家从无数真实幸存者的口述里拼出来」）、`refugee-n1` anti-fab 括号「我这个人，是历史学家从无数真实幸存者的口述里拼出来的一个代表。我身上每一件事，都真的发生在 1947 年的某个真人身上」、`refugee-n5` 括号「这些事，是真的…我把它们合在了我一个人身上，但它们一件都不是编的」、kernel §3·§5C·meta.notes 均明示 composite。**符合 §1.3 dark-topic 红线（composite 必须标明）** |

> 其余出场人物（Winston Churchill / Ralph Bunche / Mohandas Gandhi / Cyril Radcliffe / Folke Bernadotte）均为**真实历史人物**，非合成。Churchill / Bunche 两 lens 为第一人称视角叙事（内心戏属合理 inference，挂在已证事实上），未虚构其生平骨架。Bunche 的「打台球」轶事为传记常载，非虚构。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `winston-churchill`（claim #1-12,17）/ `ralph-bunche`（#18-25）/ `partition-refugee-receiving-end`（#11-16,26-27；含 N1/N5 gold-standard composite 节点）。
- **重点核查结论**：
  - **重点（Bengal famine 多因果平衡）**：#5·#6 **处理良好**——多诱因（日占缅甸断米/气旋洪水稻瘟/囤积抬价/省际壁垒/战时船运短缺）平衡呈现，Churchill 被定位为「加重而非唯一/未洗白」（限制粮援+有记录的轻蔑+拒转运欧粮），符合学界「中心但非唯一责任人」共识。**唯一缺口**是死亡数（#4）固定取 300 万、未对冲争议区间（→ 红旗 #2）。
  - **重点（分治死亡/难民数 hedge）**：#13·#14 **处理良好**——死亡数用「几十万到一百多万」区间 hedge，迁徙数「约 1500 万」落主流区间内（→ 红旗 #4 轻类，可不动）。
  - **引语分层**：Churchill「liquidation of the Empire」(#1)、「half-naked fakir」(#7) 均为 verified primary；"jewel in the crown"/"sun never sets" 为标准史称。唯一引语瑕疵是 #7「私下」场合错置（→ 红旗 #3 轻类）。
  - **演绎透明度**：分治难民 composite 标注**到位**（N1/N5 anti-fab 括号 + lens desc + kernel + meta 多处明示），无未标注的 dramatization。Bunche「打台球」非虚构。
  - **唯一硬问题**：#24 华盛顿橄榄球队高管 claim **无出处、疑似事实嫁接**（→ 红旗 #1，最高优先，建议改用 verified 的「拒杜鲁门助理国务卿」替代）。
- **用到的外部核实来源**：Wikipedia（Partition of India / Radcliffe Line / Bengal famine of 1943 / Ralph Bunche / Bandung Conference / Non-Aligned Movement / Folke Bernadotte）、Britannica（Radcliffe Line / Partition of India / Boundary Commission）、International Churchill Society + Imperial War Museums（1942 Mansion House 演说原文）、Nobel Prize（Bunche 1950 biographical）、CIA/State Dept/LOC/King Institute（Bunche 生平）、Amartya Sen entitlement 分析（饥荒因果）、Al Jazeera/CNN（饥荒研究与争议）、Calisphere/WikiTree（Bunche 祖母 Nana born into slavery）、mkgandhi.org/Langworth（half-naked fakir 1931 原文）。
- **总评**：本 topic 史实骨架**稳健**——所有日期、人物生卒、Radcliffe 5 周划界、独立日后公布、Bernadotte 刺杀→Bunche 接手、1949 罗德岛停火、1950 首位非裔诺奖、Bandung 1955/NAM 1961、Churchill 两段引语、Berlin 跨 Topic 锚均经权威核实通过；最关键的两个核查点（孟加拉饥荒多因果平衡、分治死亡/难民数 hedge）处理到位。5 条红旗中仅 **#24（橄榄球队 claim 无出处）属应处理硬项**，#2（饥荒死亡数对冲）为应处理软项，其余 3 条为低优先级措辞微调。**建议先处理 #24 与 #2 再上线，即可进 Gate 2。**
