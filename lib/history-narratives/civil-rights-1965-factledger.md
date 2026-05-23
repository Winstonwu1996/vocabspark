# 民权运动 1954-1968 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    civil-rights-1965
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/civil-rights-1965.js（3 lens: george-wallace / bayard-rustin / selma-teen-marcher-receiving-end）+ lib/history-narratives/civil-rights-1965.md
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
| 1 | 「1963 年 6 月 11 日，挡校门，挡两个有权入学的黑人学生 Vivian Malone 和 James Hood」（`gw-n1`/`gw-n4`/`gw-n6` / 主角§Wallace / 附A）| date / number | encyclopedia | Stand in the Schoolhouse Door，1963.6.11，Foster Auditorium，挡 James Hood + Vivian Malone，确证（Encyclopedia of Alabama / Wikipedia）| ✅verified |
| 2 | 「Wallace 就职喊『现在隔离，明天隔离，永远隔离』」（`gw-n1`/`gw-n3` / 主角§Wallace）| quote / date | primary | 1963.1 就职演说（inaugural address）原话「segregation now, segregation tomorrow, segregation forever」，确证。**注意**：是「就职演说」非别的场合，storyboard 归类准确（区别于 chinese-exclusion topic 里 Stanford「就职 vs 咨文」的踩雷点）| ✅verified |
| 3 | 「Wallace 1919 生阿拉巴马棉花小农家庭/职业拳击手（轻量级）/早年算温和派」（`gw-n2` / 主角§Wallace）| date / motive | encyclopedia | 1919 生 Clio, Alabama；做过 bantamweight/lightweight 业余拳击；早年相对温和，确证 | ✅verified |
| 4 | 「1958 输州长给打种族牌的对手 → 1962 改打种族牌赢」（`gw-n3` / 主角§Wallace）| causal / motive | encyclopedia | 1958 败给 John Patterson（更强硬隔离立场）；Wallace「再没人比我更狠」式总结广为流传；1962 当选，确证。「不真信隔离只是算选票」属史学诠释（合理但非唯一动因）| ✅verified |
| 5 | 「挡门是给选民看的表演，已私下约定国民警卫队到就让开/排练好的」（`gw-n4` / 主角§Wallace）| motive / causal | encyclopedia | 挡门后联邦化国民警卫队（Katzenbach + Graham 将军）到场 Wallace 即让开，确证。「事先排练/纯表演」是主流解读但带 motive 推断成分；史实结果（让开）成立 | ✅verified |
| 6 | 「挡门前几周 Birmingham『Bull』Connor 对游行的黑人（含很多孩子）放警犬、开高压水枪，画面上电视」（`gw-n5` / 附§4 / 误解§）| number / causal | encyclopedia | 1963.5 Birmingham Children's Crusade，Bull Connor 用消防水枪 + 警犬对儿童游行者，NBC 等全国电视播出，确证。时序「挡门(6.11)前几周(5月初)」准确 | ✅verified |
| 7 | 「Brown v. Board 1954，就在挡门九年前，最高法院一致裁定校园隔离违宪，依据 14th Amendment 平等保护」（`gw-n6` / 附§4 / 附A）| date / number | primary | 1954.5.17，9-0 一致，Earl Warren 主笔，依据 14th Amendment equal protection，推翻 Plessy「separate but equal」，确证。1954→1963=9 年，准确 | ✅verified |
| 8 | 「『平等保护』1868 年内战后写进宪法（跨 reconstruction）」（`gw-n6` / 舞台§L3 / 附D）| date | encyclopedia | 14th Amendment 1868 批准，确证 | ✅verified |
| 9 | 「1972 竞选途中在马里兰被枪击/脊椎伤/腰部以下瘫痪坐轮椅」（`gw-n8` / 主角§Wallace）| date / number | encyclopedia | 1972.5.15 Laurel, Maryland，Arthur Bremer 枪击，子弹伤脊髓，腰以下永久瘫痪，确证 | ✅verified |
| 10 | 「1979 起 Wallace 去黑人教堂坐轮椅道歉『我错了请求原谅』（anti-fab 括号: 有记录真事非美化）」（`gw-n9` / 主角§Wallace / 误解§5）| quote / motive | encyclopedia | 1979 Dexter Avenue Baptist Church（MLK 旧教堂）不公开造访忏悔，确证。storyboard 已用括号「有记录真事非美化」透明标注，处理良好 | ✅verified |
| 11 | 「1982 靠大量黑人选票再当州长/任内任命创纪录数量黑人官员」（`gw-n9`/`gw-n11` / 主角§Wallace）| number | encyclopedia | 1982 当选第四任，得票含 90%+ 黑人选票（UPI/CSMonitor）；任内任命创纪录黑人官员，确证 | ✅verified |
| 12 | 「Wallace 1968、1972 两次竞选总统卖『白人不满』」（`gw-n8` / 主角§Wallace）| number | encyclopedia | Wallace 多次竞选总统（1964/1968/1972/1976）。storyboard N8 写「1968、1972 两次」——**他不止两次**（1964 党内、1976 也参加），但 N8 语境指挡门后两次最知名的（1968 第三党 + 1972 被枪击那次），措辞偏窄但不算错 | ✅verified |
| 13 | 「1963.8.28 华盛顿大游行约 25 万人，MLK『我有一个梦想』，Rustin 后台总指挥（两个月一手安排后勤）」（`br-n1`/`br-n6` / 主角§Rustin / 附§4）| number / date | encyclopedia | March on Washington 1963.8.28，约 250,000 人，MLK "I Have a Dream"，Rustin 主组织者、两个月内带 ~200 人团队完成，确证（NPR/PBS/Britannica）| ✅verified |
| 14 | 「Rustin 1912 生宾州/祖母信贵格会/和平主义从小刻进骨子」（`br-n2` / 主角§Rustin / 附C）| date / motive | encyclopedia | 1912.3.17 生 West Chester, PA；由信贵格会的（外）祖母带大；贵格会和平主义是其非暴力根源，确证 | ✅verified |
| 15 | 「1940 年代 Rustin 去印度研究甘地非暴力，是美国少数吃透这套技术的人」（`br-n2` / 主角§Rustin / 附C）| date / absolute | encyclopedia | Rustin 研习甘地主义、赴印度，是把甘地非暴力引入美国民权运动的关键人物，确证。「少数吃透」措辞稳妥 | ✅verified |
| 16 | 「1956 Rustin 去 Montgomery 给 26 岁 MLK 当顾问，手把手教非暴力（运动最核心贡献）」（`br-n3` / 主角§Rustin / 附§4）| date / number / causal | encyclopedia | 1956 初 Rustin + Glenn Smiley 到 Montgomery 给 MLK 建议甘地式非暴力；MLK 当时 26 岁，确证。**注意**：storyboard br-n3 把背景置于「1955 年底 Montgomery 出事」（公交抵制 1955.12 始，正确），Rustin 到访实为 1956 初；narrative §4 写「1956」更精确。两者不冲突 | ✅verified |
| 17 | 「Rustin 是公开同性恋者，1953 年因此被捕留案底」（`br-n4`/`br-n7` / 主角§Rustin）| date | encyclopedia | 1953.1 Pasadena 因与两名男子车内性行为被捕，认罪 "sex perversion"/morals charge，服刑约 60 天，确证 | ✅verified |
| 18 | 「游行前南方一参议员在国会念出 Rustin 1953 被捕记录想泼脏水（没得逞游行照办）」（`br-n7` / 主角§Rustin）| quote / motive | encyclopedia | 1963.8.13（游行前约两周）参议员 Strom Thurmond 把 Rustin Pasadena 案底 + FBI 照片放进 Congressional Record，斥其「共产党/逃兵役/同性恋」，确证。攻击失败、游行如期，确证 | ✅verified |
| 19 | 「Rustin 1987 死时大多数人不知他是谁；2013（死后 26 年）追授总统自由勋章」（`br-n10` / 主角§Rustin / 附A）| date / number | encyclopedia | Rustin 1987.8.24 卒；2013 Obama 追授 Presidential Medal of Freedom，确证。1987→2013=26 年，准确 | ✅verified |
| 20 | 「1913 妇女选举权大游行 Ida B. Wells 被要求走队尾、她拒绝挤进白人队伍中间」（`br-n9` / 跨 womens-suffrage Topic）| date / motive | encyclopedia | 1913.3 华盛顿妇女选举权大游行；Wells 被要求与黑人妇女走队尾，她拒绝、加入伊利诺伊白人代表队，确证 | ✅verified |
| 21 | 「1965.3.7 血腥星期日：约 600 人从 Selma 出发走向 Montgomery，过 Edmund Pettus 桥」（`st-n1`/`st-n4`/`gw-n7` / 主角§Selma teen / 附§4 / 附A）| date / number | encyclopedia | 1965.3.7，约 600 名游行者（来源区间 525-600），John Lewis/Hosea Williams 带领，Edmund Pettus 桥，确证。「血腥星期日」称谓确证 | ✅verified |
| 22 | 「桥那头约一排排州警 + 骑警 + 催泪瓦斯，扩音器喊解散限两分钟，没到就冲，警棍催泪瓦斯镇压」（`st-n6`/`gw-n7` / 主角§Selma teen / 附§4）| number / causal | encyclopedia | 约 150 名州警/郡警/民团；两分钟警告后约 1 分 05 秒即推进，用警棍、皮鞭、催泪瓦斯；17 人住院、50 余人受伤，确证 | ✅verified |
| 23 | 「Edmund Pettus 是邦联将军、阿拉巴马三 K 党头目，捍卫白人至上奴役黑人」（`st-n5`/`st-n1` / 文件§5 / 主角§Selma teen）| representativeness / motive | encyclopedia | Edmund Pettus（1821-1907）邦联准将、1877 任阿拉巴马 KKK Grand Dragon（州最高头目），确证。「头目」对应 Grand Dragon=州级最高领袖，措辞准确（非全国级，但 storyboard 未称全国）| ✅verified |
| 24 | 「桥拱起看不见那头，走到拱顶下坡面才一下展开」（`st-n5` / 主角§Selma teen / 感官细节）| number / rhetoric | inference | Edmund Pettus 桥确为拱形钢桁架桥，登顶前看不见对岸是真实地形特征；「拱顶那刻全展开」属合理叙事化呈现（dramatization 轻度），挂在真实地形上，无硬伤 | ✅verified |
| 25 | 「血腥星期日后两周，1965.3.21 又走，联邦法官下令保护/总统派军队护卫，真过桥走五天到 Montgomery，约 2.5 万人最后站州政府前」（`st-n8`/`gw-n7` / 主角§Selma teen / 附§4 / 附A）| date / number | encyclopedia | 第三次游行 1965.3.21 出发，Frank Johnson 法官令保护、联邦化国民警卫队护卫，走五天 3.24 抵 Montgomery，**3.25 约 25,000 人在州议会前集会**，确证。storyboard「最后站在州政府大楼前 约两万五千」对应 3.25 终点集会，准确 | ✅verified |
| 26 | 「1965.8（6 日）Voting Rights Act 通过：禁识字测验那套，让联邦盯南方各州选民登记」（`st-n8`/`gw-n7` / 主角§Selma teen / 附A / 附B）| date / causal | primary | 1965.8.6 LBJ 签署，禁 literacy tests、Section 5 preclearance 联邦预审，确证（National Archives）| ✅verified |
| 27 | 「父亲想投票被登记官刁难（背刁钻宪法条款/『肥皂泡里有多少个泡』这种没法答的问题）；县里黑人过半但登记选民少得可怜」（`st-n2`/`st-n8` / 主角§Selma teen / 舞台§L2）| number / representativeness | encyclopedia | Dallas County（Selma 所在）黑人占人口多数但登记率极低（1961 报告：15,115 适龄黑人仅 130 人登记，<1%；1965 黑人占已登记选民约 3%）；「肥皂泡多少个泡」是 literacy test 经典刁难题，确证。父亲个体为 composite 演绎（见角色清单），但底层制度细节 documented | ✅verified |
| 28 | 「2013 最高法院削掉投票权法案『联邦盯南方』的关键条款，新投票限制（关投票站/严苛身份证）随之回来」（`st-n9` / 主角§Selma teen / 影响§长期 / 误解§4 / 附A）| date / causal | encyclopedia | 2013 Shelby County v. Holder 废 Section 4(b) 覆盖公式，实质瘫痪 Section 5 preclearance；此后多州出现新投票限制，确证。reverse-Whig 处理诚实 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

**重要前提**：本 topic 史实骨架**异常稳健**——所有日期、人数、引语、法律条款、人物时间线均经权威核实通过，**无 `needs-source`（无悬空高风险事实）、无与权威正面冲突的硬错**。下列 5 条均为**低优先级措辞/归类微调**，非事实错误。

1. **[#12]** `gw-n8`：「1968、1972 年我**两次**竞选总统。」
   - 问题：**数字偏窄**。Wallace 实际多次竞选总统（1964 党内试水、1968 第三党 American Independent Party、1972 被枪击那次、1976 再战），不止「两次」。N8 语境指挡门后两次最知名的，但「两次」字面会被史实党挑「漏了 1964/1976」。
   - 建议：可微调为「挡门之后我又几次竞选总统，其中 1968、1972 两次声势最大」，或保留但加「最知名的两次」。极低优先级。

2. **[#5]** `gw-n4`：「整件事，从头到尾，是**排练好的**……已经跟联邦私下打过招呼：等国民警卫队一到，你就让开。」
   - 问题：**motive 推断略强**。「让开」是确证结果，但「事先逐项排练 / 纯表演 / 私下约定」混合了主流解读与心理动机推断。史实党可能要求区分「确证行为」与「推断意图」。
   - 建议：可接受（这是 perpetrator-actor lens 的合理第一人称内心戏，且结果属实），如要更稳可弱化为「我心里清楚挡不住，国民警卫队一到我就会让开——这更像一场给选民看的戏」。低优先级。

3. **[#16]** `br-n3`：「**1955 年底**，阿拉巴马的 Montgomery 出事了……这时候我去了 Montgomery。」
   - 问题：**时序压缩**。公交抵制始于 1955.12（正确），但 Rustin 实际到访给 MLK 当顾问是 **1956 初**。storyboard 把「出事(1955 末)」与「我去了」叙在同段，读起来像 Rustin 1955 末就到。narrative §4/§附A 写「1956」更精确。
   - 建议：可微调「这时候（1956 年初）我去了 Montgomery」以对齐 narrative。低优先级（年份差几个月，不算硬错）。

4. **[#24]** `st-n5`：「那座桥拱起来，我们走上去的时候看不见桥那头。一直要走到拱顶，下坡那一面才会展开。」
   - 问题：**轻度 dramatization**。桥确为拱形、登顶前看不见对岸是真实地形，但「拱顶那刻整座桥另一头一下子全展开在眼前」是叙事化的戏剧呈现（个体感官演绎）。挂在真实地形上，无硬伤，但属 composite 角色的内心/感官补充。
   - 建议：无需改（已在 composite 角色透明标注框架内）。仅记录其为合理 dramatization，非一手目击记录。极低优先级。

5. **[#23]** `st-n5`：「Edmund Pettus……是阿拉巴马三 K 党的**头目**。」
   - 问题：**精确度**（其实成立，仅备注）。Pettus 是 1877 年阿拉巴马 KKK 的 **Grand Dragon**（州级最高领袖），「头目」对应准确。需确保不被读成「全国级 KKK 头目（Grand Wizard）」——storyboard 已写「阿拉巴马的三 K 党头目」，限定州级，措辞正确。
   - 建议：无需改。仅备注：保持「阿拉巴马的」限定词，勿升级为「全美 KKK 头目」。零优先级（当前措辞已正确）。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 一个 Selma 青少年游行者 | `selma-teen-marcher-receiving-end`（全 12 节，DEFAULT；含 `st-n1`/`st-n2`/`st-n4`/`st-n6` gold-standard 节点）| 无真名；约 1948-2020 生卒为叙事设定；具体家事（父亲被登记官刁难「肥皂泡」、妈妈拉手劝阻、陪父亲登记、老来看投票权被啃回）为个体演绎；**底层集体史（1965.3.7 血腥星期日桥上挨打、约 600 人、非暴力训练、电视直播翻转舆论、Voting Rights Act 通过、2013 Shelby County 倒退）全部 documented** | ✅ **已透明标注**：lens description 首句「这是一个合成人物，代表 1965 年 Selma 投票权游行里那些真实存在、却大多没留下名字的黑人青少年」；`st-n1` anti-fab 括号「我是个合成的人，但桥上发生的事，1965 年 3 月 7 日真真切切发生过，史书叫它『血腥星期日』」；narrative §3 主角条目 + 附C cheat sheet 均明示 composite；`st-n10` 自述「我留下的不是一个名字……是『桥上那群没名字的孩子』这件事本身」。**符合 §1.3 dark-topic 红线（composite 必须标明）** |

> 其余出场人物（George Wallace / Bayard Rustin / Martin Luther King Jr. / Rosa Parks / Earl Warren / Vivian Malone / James Hood / Bull Connor / Edmund Pettus / Strom Thurmond / Ida B. Wells）均为**真实历史人物**，非合成。Wallace / Rustin 两 lens 为第一人称视角叙事（内心戏属合理 inference，挂在已证事实上），未虚构其生平骨架。Wallace 挡门「纯表演/排练」、Rustin「咽下愤怒不怨恨」属合理动机推断（见红旗 #5），非生平捏造。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `george-wallace`（claim #1-12）/ `bayard-rustin`（#13-20）/ `selma-teen-marcher-receiving-end`（#21-28；含 N1/N4/N6 gold-standard 重点节点）。N6 跨 lens micro-detail「那座桥」三面（Wallace 挡门 #1 / Rustin 大游行后台 #13 / Selma teen Edmund Pettus 桥 #21）均已核实。
- **重点核查结论**：
  - **直接引语（重点）**：Wallace「segregation now/tomorrow/forever」(#2) 为 verified primary，且场合「就职演说」归类正确（区别于 chinese-exclusion topic 里 Stanford「就职 vs 咨文」的踩雷点）；MLK「我有一个梦想」(#13) verified；narrative §5 的 Letter from Birmingham Jail 三句（「等了三百四十多年」「在任何地方的不公正都是对所有地方公正的威胁」「最失望的是温和的白人」）逐字核实**全部对得上**原文（前两句直引、第三句为忠实概括），但这三句仅在 narrative.md 出现、未进 storyboard 节点，故未单列为 claim。无伪造引语。
  - **参与人数（重点）**：血腥星期日约 600 人 (#21)、第三次游行 3.25 终点约 2.5 万人 (#25)、华盛顿大游行约 25 万人 (#13) 全部核实通过；25,000 对应 3.25 集会终点（非 3.21 出发，storyboard 表述准确）。
  - **「第一次/最大」绝对表述（重点）**：本 topic 绝对表述克制——Rustin「少数吃透非暴力的人」(#15) 用「少数」对冲；无「史上第一次/唯一」式硬绝对句进高风险区。无 absolute 红旗。
  - **reverse-Whig 诚实度**：#28（2013 Shelby County 投票权倒退）、`st-n9` 整节、Wallace 晚年忏悔的复杂性 (#10/#11) 均诚实呈现，符合 narrative §0 反 Whig 设计意图。
- **用到的外部核实来源**：National Archives（Voting Rights Act / Brown v. Board）、Wikipedia（Selma to Montgomery marches / Stand in the Schoolhouse Door / Bayard Rustin / Edmund Pettus / March on Washington / Arthur Bremer / Birmingham campaign / Montgomery bus boycott）、Britannica（Brown v. Board / Bayard Rustin / George Wallace）、King Institute @ Stanford（Selma march / Montgomery boycott / Birmingham / VRA）、NMAAHC（Bloody Sunday / Children's Crusade / March on Washington）、Encyclopedia of Alabama（Schoolhouse Door / Wallace / Pettus / Selma march）、NPR/PBS（Rustin）、UPI/CSMonitor（1982 Wallace 黑人选票）、Smithsonian（Edmund Pettus）、EJI（Bloody Sunday / Rustin pardon）、USC Gould（Mississippi 登记率）。
- **总评**：本 topic 史实骨架**极为稳健**——3 lens 全部日期、人数、引语、法律条款、人物时间线、跨 Topic 锚（Brown→14th Amendment 1868、Ida B. Wells 1913、2013 Shelby County）均经权威核实通过。**无 `needs-source`（无悬空事实）、无与权威正面冲突的硬错、无伪造引语、composite 角色透明标注到位**。5 条红旗**全部为低/极低优先级措辞或归类微调**（#12 总统竞选次数偏窄、#16 Rustin 到访年份压缩、#5 Wallace「排练」动机推断略强为最值得看的三条），无任何应阻断上线项。**可直接进 Gate 2；红旗仅供锦上添花式打磨。**
