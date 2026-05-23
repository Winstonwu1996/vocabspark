# 第一次世界大战 1914-1918 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    world-war-one-1914
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/world-war-one-1914.js（3 lens: woodrow-wilson / gavrilo-princip / senegalese-tirailleur-receiving-end）+ lib/history-narratives/world-war-one-1914.md
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
| 1 | 「1914 年 6 月 28 日上午萨拉热窝，Princip 开两枪打死奥匈王储斐迪南大公和妻子 Sophie」（`pri-n1`·`pri-n5`/`wil-n2`/kernel §1·§4.2·附A·附C）| date | encyclopedia | 1914.6.28 Princip 刺杀 Franz Ferdinand 与 Sophie，权威一致（维基/Britannica/History.com）| ✅verified |
| 2 | 「早上有人朝车扔炸弹失败 → Princip 走进小店，**买了个三明治** → 车走错路停在他面前几步」（`pri-n1`；narrative kernel §3「灰心地走进一家小店买三明治」）| causal / **rhetoric** | dramatization | **「三明治」是被史学界普遍否定的传说**：Princip 自己庭审证词及当时记录均无吃东西情节，源头是 1990s 一部巴西小说，经 BBC 纪录片扩散进课堂（Smithsonian Magazine / NPR / History.com 均辟谣）。**「司机走错路 + 早上炸弹失败」属真史实**，准确 | ✋flagged |
| 3 | 「奥匈认定塞尔维亚撑腰 → 发故意苛刻无法全盘接受的最后通牒 → 1914.7.28 奥匈对塞宣战」（`pri-n5`/kernel §4.3·附A）| date / causal | encyclopedia | 七月危机：奥匈 7.23 最后通牒、7.28 对塞宣战，确证 | ✅verified |
| 4 | 「联盟连锁：俄动员 → 德对俄/法宣战 → 德借道比利时 → 英对德宣战 → 8 月初几乎所有大国卷入」（`wil-n2`/`pri-n5`/`pri-n6`/kernel §4.4·附A）| date / causal | textbook | 1914.8 初联盟连锁宣战 + Schlieffen 计划借道比利时，AP World/Euro 标准叙事，确证 | ✅verified |
| 5 | 「整场战死约一千七百万人」（`wil-n9`/`pri-n8`·`pri-n10`/`tir-n9`/kernel §1·§6·附A）| number | encyclopedia | 主流估计约 1700 万死（军民合计，常见区间 1500-2000 万）；CNN/Britannica 取约 17M，确证 | ✅verified |
| 6 | 「1916 年凡尔登与索姆河两大绞肉机战役，各死伤近百万，战线几乎没动」（kernel §2·§4.5·附A；storyboard `tir-n4`「1916 凡尔登」）| number / date | encyclopedia | 凡尔登双方伤亡 70 万+（约 30 万死）；索姆河双方伤亡逾 100 万。「各死伤近百万」对索姆河准确、对凡尔登略高于「近百万」实为 70 万+ | ⚠️downgrade-wording |
| 7 | 「1917.4.2 Wilson 请国会宣战，喊『为民主而安全』(make the world safe for democracy)」（`wil-n1`·`wil-n3`/kernel §3·§4.7·附A）| date / quote | primary | Wilson 1917.4.2 对国会战争咨文，「safe for democracy」原话，确证（国会 4.6 正式宣战）| ✅verified |
| 8 | 「德国无限制潜艇战（击沉一切开往英国的船含中立国）+ Zimmermann 电报（德拉墨西哥结盟许诺帮夺回失地）逼美参战」（`wil-n3`/kernel §3·§4.7·附B）| causal / date | primary | 无限制潜艇战 1917.2.1 复行；Zimmermann 电报许诺墨西哥夺回 Texas/New Mexico/Arizona，英国截获 3 月公开，确证（National Archives）| ✅verified |
| 9 | 「1918 年 1 月（8 日）Wilson 提出『十四点』：公开外交、削减军备、民族自决、国际联盟」（`wil-n5`/kernel §4.8·§5·附A·附B）| date | primary | 1918.1.8 对国会十四点演说；含公开外交/裁军/自决/国联，确证（National Archives 原文）| ✅verified |
| 10 | 「1913 年 Wilson 一上台就允许把联邦机构按种族重新隔离：黑人雇员被分到单独办公室/食堂/厕所」（`wil-n6`/kernel §3·§4.0·附C）| date / causal | encyclopedia | Wilson 政府 1913.4 起重推联邦机构种族隔离（McAdoo 财政部带头隔离厕所），南北战争后倒退，确证（History.com/Time/维基 Wilson and race）| ✅verified |
| 11 | 「1915 年 Wilson 把《一个国家的诞生》请进白宫放映，看完称『像用闪电写历史。我唯一的遗憾是这一切都太真实了』」（`wil-n6`/kernel §5「论 Birth of a Nation」）| quote | dramatization | **白宫 1915 放映此片＝确证（史上首次白宫放映电影）**；但「像用闪电写历史/太真实了」**这句具体评语史学界有争议**，最早出处为 1937 年杂志、当时无同期记录，Cooper 等史家质疑真伪。**narrative kernel §5 已自标此争议并提醒「不可当板上钉钉原话引用」**；但 storyboard `wil-n6` 第一人称直接当 Wilson 原话引用、未带争议提示 | ✋flagged |
| 12 | 「1919 巴黎和会民族自决只给欧洲白人小民族（波兰/捷克建国），亚非殖民地求自决被拒」（`wil-n7`/kernel §4.10·§5·§9）| causal / representativeness | textbook | 巴黎和会自决的选择性（欧洲适用、亚非殖民地不适用）是主流史学共识，确证 | ✅verified |
| 13 | 「德国在非洲的殖民地没还给非洲人，而是分给了英法」（`wil-n7`/`tir-n7`/kernel §4.10·§6）| causal | encyclopedia | 德属非洲殖民地经国联委任统治（mandate）转交英/法/比/南非管辖，确证 | ✅verified |
| 14 | 「胡志明到巴黎想递请愿书，连门都没进去」（`wil-n7`/kernel §4.10）| number / motive | inference | 1919 夏胡志明（阮爱国）确在巴黎、确递交《八点请愿》求殖民地权利、确被忽视。**但「连门都没进去」是文学概括**：史料显示他主要联系/会见的是法国政界，与 Wilson 秘书有书面往来但无证据他「试图进会场被拒」。「Wilsonian moment」叙事近年被史家（Wilson Center）质疑过度浪漫化 | ⚠️downgrade-wording |
| 15 | 「中国代表为山东据理力争，却看着德国在山东权益转交日本 → 点燃 1919 五四运动」（`wil-n7`/kernel §4.10·§8·附A）| causal / date | encyclopedia | 凡尔赛和约第 156 条将德国山东权益转日本；中国学生 1919.5.4 抗议，确证（维基 Shandong Problem）| ✅verified |
| 16 | 「国际联盟成立，但美国国会拒批，美国这个发起国自己没加入；Wilson 全国巡回演讲争取支持时中风半瘫」（`wil-n8`/kernel §4.11·§6·附A）| causal / date | encyclopedia | 参议院拒批凡尔赛和约/国联盟约；Wilson 1919 秋全国巡讲后 10 月中风半瘫；美国未加入国联，确证 | ✅verified |
| 17 | 「苛刻的凡尔赛和约羞辱德国，二十年后一个更可怕的人物利用这份屈辱发动二战」（`wil-n9`/`pri-n8`/kernel §6·§4.12·§10.5）| causal | textbook | 「和约屈辱→希特勒→二战」是 AP/学界标准（但属诠释性因果，非单一决定论）；narrative kernel §9 已自陈 war-guilt 争论复杂，处理稳妥 | ✅verified |
| 18 | 「胡志明后来领着越南赶走了法国」（`wil-n9`/kernel §6）| causal | encyclopedia | 胡志明领导越盟/越南独立，1954 奠边府击败法国，确证 | ✅verified |
| 19 | 「Princip 1894 年（7 月）生波斯尼亚穷山村农家，九个孩子六个没活到成年，体弱患肺结核」（`pri-n2`/kernel §3·附C）| date / number | encyclopedia | Princip 1894.7.25 生；家中多子女夭折、自幼体弱肺结核，确证（维基/Britannica）| ✅verified |
| 20 | 「按奥匈法律判死刑须满 20 岁，Princip 犯案差几周没满 20 → 逃过绞刑改判 20 年监禁」（`pri-n7`/kernel §3·附C）| date / causal | encyclopedia | 犯案时 19 岁（差 20 岁约 27 天），未达死刑年龄，判 20 年最高刑，确证 | ✅verified |
| 21 | 「Princip 1918 年 4 月死于要塞监狱肺结核，一条胳膊因骨结核被截，年仅 23 岁」（`pri-n8`/kernel §3·附A·附C）| date / number | encyclopedia | 1918.4.28 死于 Terezín（Theresienstadt）监狱附近医院；骨结核致截右臂；死时 23 岁，确证 | ✅verified |
| 22 | 「与塞尔维亚秘密团体『黑手会』有联系」（kernel §3）| causal | encyclopedia | Princip 属 Young Bosnia，行动与黑手会（Black Hand）相关人物有联系，确证（学界对黑手会直接指挥程度有争议，「有联系」措辞稳妥）| ✅verified |
| 23 | 「战后南斯拉夫建国，几十年后又因民族矛盾四分五裂」（`pri-n8`）| causal | encyclopedia | 1918 南斯拉夫（塞克斯王国）成立；1990s 因民族冲突解体，确证 | ✅verified |
| 24 | 「塞内加尔狙击兵（tirailleurs sénégalais）名字里有塞内加尔但兵来自整个法属西非；一战约十几万至几十万被征召，几万人死在欧洲」（`tir-n1`·`tir-n3`·`tir-n5`·`tir-n9`/kernel §3·§4.6·附B）| number / representativeness | encyclopedia | 1914-1918-online：一战共约 20 万 tirailleurs，约 13.5 万在欧洲作战，约 3 万阵亡；招募遍及法属西非全境，确证。文中「十几万至几十万」「几万人死」与权威吻合 | ✅verified |
| 25 | 「征兵说『招募』实为强征：每村摊派人头配额，村长须交年轻人；有钱有势者逃脱，承担的是穷人家孩子」（`tir-n3`/kernel §3·§4.6）| causal / motive | encyclopedia | 1914-1918-online：1917-18 招募手段趋强制、欺骗性增强（许诺公民权与待遇未兑现）；配额制与权贵规避属普遍记载，确证 | ✅verified |
| 26 | 「装船过几千公里海，船上闷脏不少人未到欧洲就病死；来自炎热西非的身体不认识欧洲的冷，同乡成批冻病而死」（`tir-n3`·`tir-n4`/kernel §2·§3）| number / causal | encyclopedia | 冬季寒冷致热带殖民地兵大量病亡有记载（法军冬季把 tirailleur 撤往南方「hivernage」过冬即因此）；海运病死亦有载，确证 | ✅verified |
| 27 | 「殖民地兵常被指派打最危险地段；在某些军官种族偏见里，非洲兵的命比欧洲兵『便宜』」（`tir-n4`·`tir-n5`/kernel §3·§4.6·§7）| causal / motive | encyclopedia | 1914-1918-online：tirailleur 常被当「shock troops（突击兵）」用于最危险正面强攻，基于「非洲人天生骁勇/野蛮」的种族成见；某营 1914.11 黑人步兵损失达 67%，确证。「命更便宜」是对此种部署逻辑的合理概括 | ✅verified |
| 28 | 「同时代中国以『以工代兵』派约 14 万华工（Chinese Labour Corps）赴欧西线」（kernel §8）| number | encyclopedia | 约 14 万华工赴欧为英法军服务（挖战壕/运弹药/清战场），确证（维基 Chinese Labour Corps）| ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#2]** `pri-n1`（及 narrative kernel §3）：「我走进一家小店，**买了个三明治**。就在这时，那辆车又开了过来——司机走错了路……」
   - 问题：**已被史学界普遍否定的传说当史实写（重点：引语/细节真伪）**。「三明治」桥段并非来自任何当事人证词、庭审记录或史书，源头是 1990s 一部巴西小说（《Twelve Fingers》），经 BBC 纪录片扩散后才被广泛误传进课堂。Smithsonian / NPR / History.com 均已辟谣。**「司机走错路 + 早上炸弹失败 Princip 灰心散开」是真史实**——问题只在「买三明治」这个具体动作。
   - 建议：**删掉/改写「买三明治」**。可保留「我以为今天完了，正失魂落魄地走在街上」之类的真实情绪与场景，避免把一个著名的都市传说当板上钉钉的史实教给学生（这正是最容易被史实党/AP 老师抓的点）。narrative kernel §3 同句一并处理。

2. **[#11]** `wil-n6`：「（Wilson）我看完说它『**像用闪电写历史**』。」（第一人称直接当 Wilson 原话）
   - 问题：**引语真伪有争议但被当确证原话（重点：引语分层）**。白宫 1915 放映《一个国家的诞生》＝确证；但「像用闪电写历史/我唯一的遗憾是太真实了」这句评语最早见于 1937 年杂志、无同期一手记录，Cooper 等史家明确质疑真伪。**值得表扬的是 narrative kernel §5 已自标此争议并写明「不可当 Wilson 板上钉钉的原话引用」**——但 storyboard `wil-n6` 没跟上 kernel 的谨慎，直接以 Wilson 第一人称口吻把它当原话说出。
   - 建议：在 `wil-n6` 把它**降级为「据说/后人记下我说过」**或改为「我对它赞不绝口」式的概括（确证的是「他热情称赞此片」，措辞存疑）。让 storyboard 与 kernel §5 的谨慎一致。这是引语分层的核心要求。

3. **[#14]** `wil-n7`（及 kernel §4.10）：「一个叫胡志明的越南年轻人，到巴黎想递一份请愿书，**连门都没进去**。」
   - 问题：**文学概括略超史料 + 「Wilsonian moment」叙事被修正（重点：因果/动机）**。胡志明 1919 在巴黎、递《八点请愿》、被忽视＝真。但「连门都没进去」「举着十四点求自决被 Wilson 拒」的画面，近年被史家（Wilson Center「The Myth of the Wilsonian Moment」）指为过度浪漫化：史料显示他主要联系的是法国政界，与 Wilson 阵营仅有书面往来，无「试图进会场被拒」的直接记录。
   - 建议：保留情绪但**软化为「他递上请愿书，却石沉大海/无人理会」**，去掉「连门都没进去」这种可被挑的具体动作画面。低-中优先级（精神方向正确，只是细节戏剧化）。

4. **[#6]** kernel §2·§4.5（storyboard `tir-n4`「1916 凡尔登」为锚）：「1916 年凡尔登与索姆河两大绞肉机战役，**各死伤近百万**。」
   - 问题：**数字对凡尔登偏高（重点：数字夸张轻类）**。索姆河双方伤亡逾 100 万＝准确；凡尔登双方伤亡约 70 万+（约 30 万死），称「近百万」偏高。
   - 建议：可微调为「索姆河双方伤亡逾百万、凡尔登也死伤数十万」，或「两役合计死伤数百万」。低优先级（量级正确，仅凡尔登单役措辞偏满）。

5. **[#11 附带 / 监督项]** storyboard 与 kernel 的**谨慎度落差**（非独立 claim，是一致性提醒）：
   - 问题：narrative kernel 在多处已做了很好的 anti-fab 与争议自标（§5 Birth of a Nation 引语争议、§3 tirailleur composite 透明标注、§9 historiography 自陈 war-guilt 争论），但 storyboard 第一人称叙事在两处（#2 三明治、#11 闪电引语）**没有继承 kernel 的谨慎**。
   - 建议：以 kernel 为准绳回扫 storyboard 第一人称段落，确保 kernel 已标「存疑/传说」的内容不在 storyboard 里被当确证史实直述。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 塞内加尔狙击兵 "Demba" | `senegalese-tirailleur-receiving-end`（全 11 节，default lens；含 N1/N4/N10/N11 gold-standard 节点）| 无真名（取名 Demba 为叙事设定）；约 1895 生、靠海家乡村子为叙事补充；个人化的渡海/凡尔登战壕/同乡冻病/听翻译差点笑哭等场景为个体演绎；**底层集体史实（tirailleurs 部队存在、强征配额、海运病死、被当突击兵打最危险段、战后承诺落空、退伍兵成去殖民化火种）为 documented** | ✅ **已透明标注**：lens description「一个合成的角色，叫他 Demba……史料确证的是这支部队的存在和他们的遭遇」、`tir-n1` anti-fab 括号「我这个具体的人是合成的，名字和村子是叙事补充。但像我这样的人，真有几万个」、kernel §3 用 `> 合成角色（composite）` 块明示、§9 给出用 composite 的史学理由（殖民地兵缺第一人称史料）、meta.notes 亦明示。**符合 §1.3 dark-topic 红线（composite 必须标明）** |

> 其余出场人物（Woodrow Wilson / Gavrilo Princip / Franz Ferdinand / Sophie / 胡志明 / 希特勒[未点名「一个更可怕的人物」]）均为**真实历史人物**，非合成。Wilson / Princip 两 lens 为第一人称视角叙事——内心戏（如 Wilson「我需要大理由说给自己听」、Princip「两种动机分得清吗」）属挂在已证事实上的合理 inference，未虚构其生平骨架；但**第一人称口吻使引语真伪问题更隐蔽**（见红旗 #2/#11），需特别留意。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `woodrow-wilson`（claim #4,7-18,28）/ `gavrilo-princip`（#1-5,19-23）/ `senegalese-tirailleur-receiving-end`（#5-6,13,24-27；含 N1/N4 gold-standard 重点节点）。
- **重点核查结论（殖民地士兵 tirailleur 史实——本批次重点）**：
  - **人数与伤亡**：storyboard「十几万至几十万被征召、几万人死在欧洲」与权威（1914-1918-online：约 20 万总征召 / 约 13.5 万在欧 / 约 3 万阵亡）**完全吻合，无夸张**。这块通常最易浪漫化，但本文处理克制准确。
  - **招募方式**：「说招募实为强征 / 村庄配额 / 权贵规避 / 穷人孩子承担 / 许诺公民权未兑现」全部有据（1914-1918-online 证实 1917-18 招募趋强制+欺骗），无虚构。
  - **待遇/部署**：「被当突击兵派打最危险段 / 非洲兵命更便宜 / 寒冷致大量病亡」均有据（shock-troops 部署 + 67% 损失案例 + 冬季 hivernage 撤防制度）。**未发现夸张或浪漫化**——`tir-n5` 还主动加了「也见过真心好的法国普通人/肤色被忘一会儿是真的」的平衡笔，处理诚实。
  - **唯一需注意**：tirailleur lens 本身**无红旗**——composite 透明标注到位、数字克制、有平衡视角。本 lens 是三个 lens 里史实处理最稳的一个。
- **三个 lens 的红旗分布**：Princip lens 1 条（#2 三明治传说，最硬）、Wilson lens 2 条（#11 闪电引语 / #14 胡志明细节）+ 1 条数字轻类（#6 凡尔登）+ 1 条一致性监督项。**tirailleur lens（本批次重点）0 红旗**。
- **用到的外部核实来源**：1914-1918-online Encyclopedia（Tirailleurs Sénégalais / Labour-China）、Wikipedia（Senegalese Tirailleurs / Gavrilo Princip / Assassination of Franz Ferdinand / Zimmermann telegram / Shandong Problem / Chinese Labour Corps / Woodrow Wilson and race / The Birth of a Nation）、Britannica（WWI / Gavrilo Princip / Fourteen Points）、National Archives（Fourteen Points 原文 / Zimmermann Telegram）、Smithsonian Magazine + NPR + History.com（三明治传说辟谣 / 一战概览 / Wilson 隔离）、Cambridge JGAPE「Birth of a Quotation」（闪电引语真伪）、Wilson Center「The Myth of the Wilsonian Moment」（胡志明/Wilsonian moment 修正）、CNN WWI Fast Facts（死亡数）。
- **总评**：本 topic 史实骨架**总体稳健**——日期（1914.6.28 刺杀 / 1917.4.2 参战 / 1918.1.8 十四点 / 1918.11.11 停战 / Princip 1894 生 1918 死）、数字（约 1700 万死 / tirailleur 约 20 万征 3 万死 / 14 万华工）、法律与连锁（七月危机 / Schlieffen / 山东转日 / 国联美未入）、Wilson 重隔离均经权威核实通过，**重点 tirailleur 块尤其诚实克制（0 红旗）**。无 `needs-source`（无悬空高风险事实）。5 条红旗中真正需处理的是 **#2（三明治传说当史实，最硬，必改）** 与 **#11（闪电引语 storyboard 未继承 kernel 的争议谨慎）**；#14 / #6 为低-中优先级措辞微调；#5 为一致性监督项。**核心问题是 storyboard 第一人称叙事在两处没继承 narrative kernel 已做好的争议自标——建议先处理 #2 与 #11 再上线。**
