# 二战与大屠杀 1939-1945 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。
> **⚠️ 高风险 topic**：含 Holocaust（系统性种族灭绝）+ Speer（纳粹高官）+ Manzanar（美国本土种族拘留）。核查从严。

```
topicId:    world-war-two-1942
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/world-war-two-1942.js（3 lens: albert-speer / chiune-sugihara / manzanar-nisei-girl-receiving-end）+ lib/history-narratives/world-war-two-1942.md
claim 总数:  29
🚩 红旗数:   4（需创始人审；其中 0 条硬错 / 0 条 needs-source，4 条均为低-中优先级措辞或归类微调）
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
| 1 | 「Albert Speer 1905 年生德国曼海姆中产家庭/父亲建筑师/1931 入纳粹党/1933 纳粹掌权成御用建筑师」（`speer-n1`·`speer-n2` / kernel §3）| date | encyclopedia | Wikipedia/Britannica：生 1905.3.19 Mannheim 上中产；1931.1 申请入党（党员号 474481）；1933 纳粹掌权后成 Hitler 御用建筑师。全证 | ✅verified |
| 2 | 「1942 年 Speer 升任军备部长，掌管整个德国战争生产」（`speer-n4` / kernel §3·§4.1·附A）| date | encyclopedia | 1942.2 任军备与弹药部长，1943 扩为军备与战争生产部长。确证 | ✅verified |
| 3 | 「他管的工厂越来越多用强迫劳工（被占领国抓来的人+集中营囚犯/累死病死）」（`speer-n4`·`speer-n8` / kernel §3）| number / causal | encyclopedia | Speer 军备生产大量依赖强迫劳工与集中营囚犯，工亡率高，确证（纽伦堡定罪依据之一）| ✅verified |
| 4 | 「Speer 在纽伦堡站起来说『作为这个政府的领导人之一，我承担共同责任』，别人绞死他判 20 年」（`speer-n1`·`speer-n5` / kernel §3·§5）| quote / number | primary | 纽伦堡他认「共同责任」（collective/common responsibility）；判 20 年监禁（不同于多名被判绞刑的高官）。引文是真史料的 paraphrase（kernel §5 已标 paraphrase），措辞准确 | ✅verified |
| 5 | 「Speer 被叫『好纳粹』，但这是他战后精心制造的神话，史料证明他知情远超承认」（`speer-n1`·`speer-n9` / kernel §3·§9·§10.2）| causal / representativeness | encyclopedia | Gitta Sereny《Albert Speer: His Battle with Truth》等结论：Speer 知情程度远超承认，「好纳粹」是被维护的神话。**lens 明确在批判/戳破神话而非洗白**（speer-n5「不是更善良是更会说话」/speer-n9「历史学家戳破」）。处理方向正确 | ✅verified |
| 6 | 「1943.10 Himmler 在 Posen 演讲公开讲『灭绝』犹太人，证据显示 Speer 很可能在场」（`speer-n8` / kernel §4.8·附A）| date / quote | encyclopedia | Posen 第二场演讲 1943.10.6（对 Reichsleiter/Gauleiter，Speer 受邀出席）；Himmler 演讲文本直接以第二人称点名 Speer；Speer 1971 私信亲口承认「毫无疑问——我在场」。**文中『很可能在场』的 hedge 实为保守**（学界证据其实更强：他本人承认在场）。措辞稳妥偏保守 | ✅verified |
| 7 | 「Speer 参与驱逐柏林犹太人、腾出他们的房子」（`speer-n9` / kernel §3）| causal | encyclopedia | Sereny 等证实 Speer 涉柏林约 7.5 万犹太人住房的腾退并从中牟利、战后篡改记录。确证 | ✅verified |
| 8 | 「Speer 1966 出狱，出回忆录上电视造『好纳粹』神话，1981 去世」（`speer-n9`·`speer-n10` / kernel §3·附A）| date | encyclopedia | 1966.10 服满 20 年出狱；《Inside the Third Reich》等回忆录畅销；1981.9.1 去世。确证 | ✅verified |
| 9 | 「Stanley Milgram 1960 年代做服从实验，证明普通人在权威指令下会做出极坏的选择」（`speer-n11` / kernel §9·附）| date / causal | encyclopedia | Milgram 1961-62 在 Yale 做服从实验（电击范式），核心结论即此。确证。学派归属（Milgram 实验佐证结构受害者读法）精确 | ✅verified |
| 10 | 「banality of evil 平庸之恶：最大的恶常由按章办事、相信自己只是尽职的体面人共同做成」（`speer-n10`·`speer-n11` / kernel §6·§9·附B）| causal | encyclopedia | Arendt 命名的框架；kernel §9 学派标注精确（Arendt 命名/Williams 道德主体派对立）。中性标签到位 | ✅verified |
| 11 | 「1939.9 德国入侵波兰，二战在欧洲爆发/轴心国(德意日) vs 同盟国(英苏后加美)」（`speer-n3` / kernel §2·附A）| date | textbook | 1939.9.1 入侵波兰；轴心 vs 同盟阵营分法标准。确证 | ✅verified |
| 12 | 「二战打 6 年(1939-45)，人类史上死人最多的战争，约六七千万人死」（`speer-n3` / kernel §6·附A）| number / absolute | encyclopedia | 主流估计总死亡约 60-70M（军 ~25M + 民 ~38-55M）；最致命战争表述标准。区间措辞稳妥 | ✅verified |
| 13 | 「Holocaust 大屠杀系统性杀犹太人，到 1945 约六百万犹太人被杀害」（`speer-n3`·`speer-n7` / kernel §6·附B）| number | encyclopedia | USHMM 等：约 6M 犹太人遇害，学界共识。确证 | ✅verified |
| 14 | 「1942.1 Wannsee Conference 万湖会议：纳粹官员(含博士律师)在湖边别墅把杀戮系统化为工业流程」（`speer-n7` / kernel §3·§4.5·附A）| date / representativeness | encyclopedia | 1942.1.20，15 名高官在 Wannsee 别墅协调「最终解决」；与会者多为受高等教育官僚（含数名博士）。确证 | ✅verified |
| 15 | 「Chiune Sugihara 1900 生日本/学俄语被派满洲苏联边境/1939 派立陶宛考纳斯开领事馆」（`sugihara-n1`·`sugihara-n2` / kernel §3·附C）| date | encyclopedia | 生 1900.1.1；俄语外交官，曾驻满洲；1939.11 派 Kaunas。**唯一细节差**：官方职衔为 vice-consul（副领事），他是该新馆负责人故俗称「领事」。见红旗 #1 | ⚠️downgrade-wording |
| 16 | 「1940 夏成千上万从波兰逃来的犹太难民挤在领事馆门外求过境日本签证」（`sugihara-n1`·`sugihara-n3` / kernel §3·附A）| number / causal | encyclopedia | 1940 夏苏占立陶宛，波兰/立陶宛犹太难民求过境签证（经日本去远东，如 Curaçao 路线）。确证 | ✅verified |
| 17 | 「Sugihara 三次发电报东京请示，三次被明确拒绝『不准发』」（`sugihara-n4`·`sugihara-n6` / kernel §3·§4.4）| number / motive | encyclopedia | 多次电报请示均被外务省拒绝（因日德同盟），令他「不要再提此事」。「三次」为通行叙述。确证 | ✅verified |
| 18 | 「Sugihara 与妻 Yukiko 商量后违命，1940.7 末起几乎不睡手写签证到手抽筋」（`sugihara-n4`·`sugihara-n5` / kernel §3）| motive / dramatization | encyclopedia | 违命手写签证、Yukiko 协助、写到手痛为标准传记叙述；具体内心戏（「过不去一道坎」）是合理 inference 挂在已证事实上。可接受 | ✅verified |
| 19 | 「9 月初领事馆关闭，火车启动他还从车窗递签证、塞盖章空白信纸」（`sugihara-n7` / kernel §3·附A）| date | encyclopedia | 1940.9 初离 Kaunas，至火车开动仍发签证、留盖章空白纸。确证（多源含 Yad Vashem/USHMM）| ✅verified |
| 20 | 「约签出两千多份签证，一份常救一家人，估计约六千人活下来；后人称 Sugihara survivors」（`sugihara-n7`·`sugihara-n9` / kernel §3·§10.6·附C）| number | encyclopedia | 5 February 1941 外交记录载 2,139 份过境签证（另文件指总数或达 ~5,580）；流行估计「约 2000 份/约 6000 人/后代数万」。文中「一般认为/估计」对冲到位 | ✅verified |
| 21 | 「1947 回日本后被外务省解职(官方说裁撤,实则与违命有关)」（`sugihara-n8` / kernel §3·附A）| date / causal | encyclopedia | 1946 获释回日、1947 被要求辞职；解职原因学界有争（裁撤说 vs「那件事」说）。**文中 hedge 精准**（「官方说裁撤，我和很多人明白脱不了干系」）。唯「回日本」年份宜记 1946 返/1947 解职。见红旗 #2 | ⚠️downgrade-wording |
| 22 | 「1985 以色列授 Sugihara『国际义人』(Righteous Among the Nations)，病重儿子代领，1986 去世 86 岁」（`sugihara-n9` / kernel §3·附A）| date | encyclopedia | Yad Vashem 表彰（多记 1984.10.4 决定/1985 正式授予）；病重由子代领；1986.7.31 去世，享 86。文中 1985 在可证范围。确证 | ✅verified |
| 23 | 「1941.12.7 珍珠港，美国参战；西海岸排亚情绪被点燃成大规模恐慌」（`mn-n1`·`mn-n2` / kernel §2·§4·附A）| date / causal | textbook | 1941.12.7 珍珠港；美参战；西海岸长期排亚（加州排亚土地法）被恐慌放大。确证 | ✅verified |
| 24 | 「1942.2.19 罗斯福签 Executive Order 9066；命令本身不点名日本人(说『任何人』)」（`mn-n3`·`mn-n6` / kernel §3·§5A·附A）| date / quote | primary | EO 9066 签于 1942.2.19；原文授权军方排除「any or all persons」，不点名族裔。确证（National Archives）| ✅verified |
| 25 | 「约 12 万人被强制迁离关进拘留营，约三分之二是美国出生的美国公民」（`mn-n3`·`mn-n6`·`mn-n10` / kernel §6·§10.4·附A）| number | encyclopedia | 约 120,000 被拘，约 2/3 为美国公民。确证（多源一致）| ✅verified |
| 26 | 「Manzanar：铁丝网/岗楼/枪口朝里的哨兵；柏油纸棚屋；公共无隔板厕所」（`mn-n5` / kernel §2·附）| number / motive | encyclopedia | Manzanar War Relocation Center 物质条件（tar-paper barracks、铁丝网、岗楼、共用厕所）有大量一手记录/照片佐证。确证 | ✅verified |
| 27 | 「营里全日裔部队在欧洲拼死成为美军得勋章最多的部队之一」（`mn-n7` / kernel §3）| absolute | encyclopedia | 442nd Regimental Combat Team 公认「**the most decorated unit in U.S. military history（for its size）**」。文中「之一」实为**保守**（它就是最受勋的），措辞安全 | ✅verified |
| 28 | 「1944.12 Korematsu v. United States：最高法院判拘留合宪(多数 Black/异议 Murphy『合法化种族主义』Jackson『上膛的武器』)」（`mn-n8` / kernel §3·§5B·附A）| date / quote | primary | 1944.12.18 判决 6-3 维持定罪；Black 写多数；Murphy「legalization of racism」、Jackson「loaded weapon」异议。确证（kernel §5B 标 paraphrase）| ✅verified |
| 29 | 「1988 国会道歉法案(『种族偏见、战时歇斯底里、政治领导失败』+赔偿)；2018 最高法院公开声明 Korematsu 判错」（`mn-n9`·`speer/sugihara` 收束·kernel §6·§9·§12·附A）| date / quote | primary | Civil Liberties Act 1988（签 1988.8.10，每幸存者 $20,000，引「race prejudice, war hysteria, and a failure of political leadership」逐字）；2018 Trump v. Hawaii 中 Roberts 宣告 Korematsu「gravely wrong... overruled in the court of history」。确证 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。
> **本 topic 无 needs-source（无悬空高风险事实）、无与权威正面冲突的硬错。** 4 条均为低-中优先级措辞/归类微调。

1. **[#15]** `sugihara-n1`·`sugihara-n2`·kernel §3：「我是 Chiune Sugihara，日本派驻这里的**领事**。」
   - 问题：**职衔归类轻微不精确（low-mid）**。Sugihara 在 Kaunas 的官方职衔是 **vice-consul（副领事）**，不是 consul。他是这个新开领事馆的唯一负责人，所以通俗叙述（含中文圈）几乎都叫他「领事」，并非硬错，但严格史实党会挑「副领事 vs 领事」。
   - 建议：可保留「领事」（通行用法、读者门槛友好），或在 kernel/lens description 加一句对冲「官方职衔为副领事，但他是该馆唯一负责人」。低优先级。

2. **[#21]** `sugihara-n8`·kernel §3·附A：「二战结束后，**1947 年，我回到日本**。外务省让我离职……」
   - 问题：**年份/顺序轻微错位（low）**。Sugihara 实为 **1946 年**（经苏联战俘营释放后）返日，**1947 年**被要求辞职。文中把「回日本」系于 1947，与「返日 1946 / 解职 1947」的史实有一年错位。解职**原因**的 hedge（「官方说裁撤，实则与违命脱不了干系」）反而处理得**很好**——精确对应学界争议，无需改。
   - 建议：把「1947 年我回到日本」微调为「战后回到日本，1947 年外务省让我离职」，避开把返日固定到 1947。低优先级。

3. **[#6]** `speer-n8`·kernel §4.8·附A：「证据显示，那天我**很可能就在场**，或者至少在那栋楼里。」
   - 问题：**hedge 偏弱于学界证据（提示项，非缺陷）**。这是「Speer 是否在场听 Posen 演讲」的核心引语风险点。文中用「很可能在场」对冲——但实际上证据**更强**：Himmler 演讲文本直接第二人称点名 Speer，且 Speer 本人 1971 私信亲口承认「毫无疑问，我在场」。文中的保守 hedge 不会误导（方向正确、宁可偏保守），符合 dark-topic 克制原则。
   - 建议：**无需改**。当前措辞安全。若想更贴史实可升级为「证据强烈显示我在场——我本人后来在私信里也承认了」，但保守版完全可上线。仅作记录。

4. **[#5 / 整体 Speer lens]** 全 lens：「好纳粹」叙事是否在洗白？
   - 问题：**任务重点核查项——结论：lens 在批判/戳破神话，不是洗白。** speer-n5「好纳粹的秘密不是更善良是更会说话」、speer-n8「不知道和选择不去看是两件不一样的事」、speer-n9「历史学家戳破/认抽象责任为不认具体罪/用漂亮认罪买体面」、speer-n11 道德主体读法（理由洗不白选择/25 年安稳是证据）均明确指向**祛魅**。N11 双视角（平庸之恶 vs 道德主体）两边都站得住，符合 Rule 0 中性 + kernel §9 historiography。**无洗白风险。**
   - 建议：**无需改**。仅记录核查已通过。**唯一可留意**：speer-n11「在那个位置上，几乎所有人都会跟我做一样的事」是 Speer 第一人称的**自辩话术**（属「一种说法」内部），紧接「另一种说法」即反驳之——结构上已自我平衡，不构成作者背书。保留即可。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| Manzanar 拘留营里的日裔少女 | `manzanar-nisei-girl-receiving-end`（全 12 节）| 无真名；约 1928-2010 生卒为叙事设定；具体家事（柠檬农场、母亲烧照片、脖挂编号牌、十三四岁收拾家当、营里上学背誓词）为个体演绎补充；**底层集体史（EO 9066、~12 万被拘、~2/3 公民、Manzanar 物质条件、442nd 参战、Korematsu 1944、1988 道歉）全部 documented** | ✅ **已透明标注**：lens name/nameCn 含「composite」语义；description「一个**虚构但贴着真实拘留营记录写成**的人物」；`mn-n1` anti-fab 括号「（我是一个虚构的女孩，但我经历的每一件事，都贴着真实的拘留营记录写成的。我代表的，是一万多个真实存在过的日裔美国孩子。）」；kernel §3 标题直书「composite（合成人物）」+ §0 + meta.notes 多处明示。**符合 dark-topic 红线（composite 必须标明）** |

> 其余出场人物（Albert Speer / Chiune Sugihara / Yukiko Sugihara / Hitler / Himmler / Roosevelt / Fred Korematsu / Hannah Arendt / Stanley Milgram / Gitta Sereny / Harriet Tubman / George Washington Williams）均为**真实历史人物**，非合成。Speer / Sugihara 两 lens 为第一人称视角叙事（内心戏属合理 inference，挂在已证事实上），未虚构其生平骨架。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `albert-speer`（claim #1-14；含 N4 peak / N6 anchor / N8 Posen / N11 synthesis 重点节点）/ `chiune-sugihara`（#15-22；含 N4 抉择 / N6 anchor / N7 救人 / N11 synthesis）/ `manzanar-nisei-girl-receiving-end`（#23-29；含 N3 法律 / N4 peak / N6 anchor / N8 Korematsu / N11 synthesis；含 composite gold-standard 节点）。
- **任务重点核查结论（高风险 topic 三大问）**：
  - **重点 1（Speer lens 是否洗白「好纳粹」）→ 通过。** lens 全程在**批判/戳破**神话（speer-n5/n8/n9/n11），与 Sereny 等学界共识一致；N11 双视角中「道德主体读法」明确否定脱身术。无洗白。见红旗 #5（仅记录，无需改）。
  - **重点 2（Holocaust 是否被 Manzanar 不当并置/相对化）→ 通过。** 全文严格区分两者**性质与规模**：Holocaust = 系统性大规模屠杀（~6M 死，speer-n3/n7、mn-n6 明示「Speer 命令砸中的是欧洲犹太人」）；Manzanar = 不公的拘留（非屠杀，~12 万被关）。两者**从未在量级上等同**；kernel §10.6 misconception #6 主动警告「别把 Sugihara 神化/Holocaust 仍吞噬六百万」。N6 anchor 用「命令」做连接是**机制对照**（发令端 vs 被砸端），非苦难比较。处理负责。
  - **重点 3（Speer Posen 在场 hedge）→ 通过且偏保守。** 见红旗 #3：文中「很可能在场」弱于实际证据（Himmler 点名 + Speer 1971 私信自认），方向正确、宁可保守，符合克制原则。
- **引语分层结论**：全部直接引语均为真史料的 paraphrase 且已标注 —— Speer「共同责任」(#4, kernel §5 标 paraphrase)、EO 9066「any or all persons」(#24, 原文)、Korematsu 多数/异议「legalization of racism」「loaded weapon」(#28, kernel §5B 标 paraphrase)、效忠誓词「liberty and justice for all」(原文)、1988 法案「race prejudice, war hysteria, and a failure of political leadership」(#29, 逐字)、Speer 1971 私信(隐含于 #6)。**无传说/伪引语当确证使用**（对比 chinese-exclusion 的 Crocker 长城句风险，本 topic 无同类）。
- **用到的外部核实来源**：USHMM Holocaust Encyclopedia（Wannsee / Holocaust 死亡数 / Sugihara）、Yad Vashem（Sugihara / Righteous Among the Nations）、National Archives（EO 9066 原文 / Korematsu 案）、Wikipedia（Albert Speer / Posen speeches / Chiune Sugihara / Wannsee Conference / Internment of Japanese Americans / Korematsu v. US / Trump v. Hawaii / Civil Liberties Act 1988 / 442nd Infantry Regiment / Stanley Milgram）、Britannica（Speer / EO 9066 / Korematsu / Milgram）、National WWII Museum（Wannsee / 442nd / redress）、Smithsonian（Speer / Sugihara）、Gitta Sereny《Albert Speer: His Battle with Truth》(via 二手书评)、Densho Encyclopedia（EO 9066 / 442nd / Civil Liberties Act）、Constitution Center / Yale Law Journal（Korematsu 与 Trump v. Hawaii）。
- **总评**：本高风险 topic 史实骨架**非常稳健**——所有日期（1939.9 / 1941.12.7 / 1942.1 Wannsee / 1942.2.19 EO 9066 / 1943.10.6 Posen / 1944.12 Korematsu / 1988 / 2018）、数字（~6-7 千万战争死 / ~6M Holocaust / ~12 万被拘 / ~2/3 公民 / ~2000 签证~6000 救 / Speer 20 年 / 442nd 最受勋）、人物生平骨架、法律条款与引文均经权威核实通过。**最敏感的三个雷区（Speer 洗白嫌疑 / Holocaust 被相对化 / Posen 在场断言）全部安全**：Speer lens 在祛魅而非美化；Holocaust 与 Manzanar 性质规模分明、无不当并置；Posen hedge 偏保守。**无 needs-source、无硬错。** 4 条红旗中仅 #15（Sugihara 副领事 vs 领事）、#21（返日年份 1946 vs 1947）属可选措辞微调，#3、#5 为仅记录项。**可进 Gate 2；#15/#21 两处低优先级微调可上线前顺手处理，亦可不处理。**
