# 南北战争 1861-1865 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    civil-war-1861
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/civil-war-1861.js（3 lens: lincoln / robert-e-lee / usct-soldier-receiving-end）+ lib/history-narratives/civil-war-1861.md
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
| 1 | 「1861 年 3 月我宣誓当总统，还没坐热椅子七个南方州已退出另立国家」（`lin-n1` / `lee-n1` / kernel §2·§4.3·§附A）| date / number | encyclopedia | Lincoln 1861.3.4 就职；就职时已有 7 州脱离（SC/MS/FL/AL/GA/LA/TX，1861.2.8 成立邦联）。确证 | ✅verified |
| 2 | 「他们退出的理由，归根结底是一件事：奴隶制」（`lin-n1` / kernel §0·§4.2·§9·§10.3）| causal | textbook | 当代史学压倒性共识：奴隶制是内战根本原因；脱离各州自己的脱离宣言即以维护奴隶制为核心。narrative 把「州权」明确定位为「蓄奴权利的包装/Lost Cause 叙事」，中立且符合主流 | ✅verified |
| 3 | 「南北吵的核心不是要不要废奴，而是奴隶制能不能往西扩」（`lin-n2` / kernel §4.1·§7）| causal | textbook | APUSH 标准框架：1850s 之争核心是奴隶制西扩（国会票数平衡）。准确 | ✅verified |
| 4 | Lincoln「如果奴隶制不算错，那世上就没有错的事」（`lin-n3` / kernel §3）| quote | encyclopedia | Lincoln 名言「If slavery is not wrong, nothing is wrong」（1864 致 A. Hodges 信）。真实引语，措辞稳 | ✅verified |
| 5 | 「蓄奴边境州（肯塔基、马里兰）没退出，喊废奴会逼它们倒向南方」（`lin-n3` / kernel §0·§L0·§10.2）| causal / motive | textbook | 边境州（KY/MD/MO/DE）蓄奴未脱离，是 Lincoln 战略命门，开战不喊废奴的标准解释。确证 | ✅verified |
| 6 | Lincoln 致 Greeley 信「能保联邦而不解放一个奴隶我也愿意 / 全解放也愿意 / 部分也愿意」（`lin-n4` / kernel §5A·§附A）| quote / date | primary | 1862.8.22 致 Horace Greeley 信，逐字相符（"If I could save the Union without freeing any slave..."）。verified primary。**注**：原信结尾另有「我无意修改我一贯的个人愿望：人人皆可自由」对冲句——storyboard 取「自由是工具」一面有取舍但不失真 | ✅verified |
| 7 | 「解放南方奴隶=抽空敌人劳动力 + 招黑人参军 + 堵欧洲援南，先是军事妙棋后才是道德对的事」（`lin-n5` / kernel §1·§4·§5B）| causal / motive | textbook | Emancipation 战略性是 APUSH 标准解读（军事必要驱动）。属史学诠释，narrative 已多处标「军事工具」中立框定。成立 | ✅verified |
| 8 | 「1863 年 1 月 1 日签解放宣言，只解放仍在反叛的州，蓄奴边境州一个都没解放」（`lin-n6` / `lee-n6` / `usct-n6` / kernel §5B·§10.2·§附A）| date / number | primary | Emancipation Proclamation 1863.1.1；仅适用当日仍反叛的 10 州，KY/MD/MO/DE 及联邦已控区豁免。National Archives / Avalon 原文确证 | ✅verified |
| 9 | 「到战争结束约 18 万黑人在北军（United States Colored Troops）」（`lin-n7` / `usct-n8` / `usct-n9` / kernel §3·§4.4·§10.4·§附A）| number | encyclopedia | USCT 共逾 18.5 万服役（含约 7,000 白人军官），黑人士兵逾 17.8 万；「约 18 万」准确 | ✅verified |
| 10 | 「同工不同酬：白人月 13 美元，黑人 10 美元扣 3 美元衣物费=7 美元；1864 国会才拉平」（`lin-n7` / `usct-n4` / `usct-n5` / kernel §3·§4.4·§5·§附D）| number / date | primary | 黑人兵 $10 减 $3 衣物=$7，白人 $13 且衣物免费；1864.6 国会通过平等军饷并追溯。National Archives 确证 | ✅verified |
| 11 | 「第 54 麻省团整团罢领军饷顶一年多以抗议打折军饷」（`usct-n5` / kernel §3·§附A）| number | encyclopedia | 54th/55th Mass. 拒领军饷直到平等，第 54 团抗议约一年。确证 | ✅verified |
| 12 | 「1863 年 7 月 Gettysburg 三天死伤几万人，是整场战争转折点」（`lin-n8` / `lee-n7` / kernel §1·§4.8·§附A）| date / number | encyclopedia | 1863.7.1-3；联邦伤亡约 23,000、邦联约 28,000（合计逾 5 万死伤），公认转折点。确证 | ✅verified |
| 13 | 「第三天 Pickett's Charge：一万多步兵列队穿开阔地正面冲，半数没回来」（`lee-n7` / kernel §3·§4.8）| number / rhetoric | encyclopedia | 7.3 Lee 派「不到 15,000」（约 12,500）冲 Cemetery Ridge；伤亡逾半数。「一万多」「半数没回来」准确 | ✅verified |
| 14 | Gettysburg Address「孕育于自由 / 人人生而平等 / 民有民治民享的政府不致从地球上消失」（`lin-n8` / kernel §5C·§附A）| quote / date | primary | 1863.11.19 Gettysburg Address，逐字相符。verified primary | ✅verified |
| 15 | 「军队打到哪自由就在哪变真 + 解放宣言首次让黑人正式参北军」（`lin-n6` / `usct-n6` / kernel §5B）| causal | textbook | Emancipation 明文授权被解放者参军（受军事进展约束的可执行性）。标准解读，成立 | ✅verified |
| 16 | 「1864-65 推动第 13 修正案永久废奴；1865 底正式生效；不同于战时命令对所有州永久」（`lin-n9` / `usct-n9` / kernel §5D·§6·§附A）| date | primary | 13th Amendment 国会 1865.1.31 通过，1865.12.6 各州批准生效。确证 | ✅verified |
| 17 | 「打了四年仗，死了六十多万人，美国史上死人最多的一场战争」（`lin` lens description / `lin-n1` / kernel §1·§附A）| number / absolute | encyclopedia | 传统权威数字约 620,000 死亡（近年全普查研究上修至 650,000-850,000 含平民）。「六十多万」为传统下沿口径，仍是美国史死亡最多战争。准确（偏保守）| ✅verified |
| 18 | 「1865 年 4 月 9 日 Lee 在 Appomattox 向 Grant 投降，战争结束」（`lin-n10` / `lee-n9` / `usct-n9` / kernel §4.11·§附A·§附C）| date | encyclopedia | Lee 1865.4.9 在 Appomattox Court House 向 Grant 投降。确证 | ✅verified |
| 19 | 「1865 年 4 月 14 日投降才过五天，Lincoln 在剧院被同情南方者枪杀，次日早上断气」（`lin-n10` / `usct-n9` / kernel §附A）| date / number | encyclopedia | 1865.4.14 Ford's Theatre 遇刺（凶手 John Wilkes Booth 同情南方），4.15 晨身亡；距投降 5 天。确证 | ✅verified |
| 20 | Lincoln 第二任就职「不怀恶意，怀着仁慈」对待南方（`lin-n10` / kernel §附A）| quote | primary | "with malice toward none, with charity for all" 出自 1865.3.4 **第二任就职演说**。引语真实。**但** storyboard 把它系于「投降之后」语境（投降在 1865.4.9），时序上该演说在投降前一个多月——narrative 措辞「我做了一篇就职演说」未给日期，易让读者误以为在投降后所讲。轻度时序模糊 | ⚠️downgrade-wording |
| 21 | Lee「除了为保卫我的故乡，我再也不想拔出这把剑」（`lee-n4` / kernel §附A）| quote | inference | Lee 1861.4.20 辞职信 + 致姊信确表达「除保卫故乡外不愿再拔剑」之意（"save in defense of my native State... I never desire again to draw my sword"）。属真实表述的概括转述，措辞接近原文。成立但非逐字排版引文 | ✅verified |
| 22 | 「Lee 亲口说脱离是错的、奴隶制是道德与政治的祸害；却自家靠被奴役者维生、管岳父种植园上百名被奴役者」（`lee-n1` / `lee-n3` / `lee-n11` / kernel §3·§9·§10.6）| quote / number / motive | encyclopedia | Lee 1856 致妻信称奴隶制为「道德政治之恶（moral & political evil）」；以 Custis 遗嘱执行人身份管理 Arlington/White House/Romancoke 约 189 名被奴役者。「上百名」准确且保守。复杂面还原中立 | ✅verified |
| 23 | 「有记录逃跑的被奴役者被抓回后受过严酷的惩罚」（`lee-n3` / kernel §10.6）| representativeness / motive | encyclopedia | 1859 Wesley Norris 等出逃被抓回，Norris 证词称遭鞭笞+盐水擦背；**鞭打细节有传记学者存疑**（Lee 否认），但「抓回并作为惩罚外租/严惩」广获认可。storyboard 用「有记录」对冲，处理稳妥 | ✅verified |
| 24 | 「1862-63 Lee 屡以少胜多，北方换了一个又一个总司令拿他没办法，林肯急得睡不着」（`lee-n5` / kernel §3·§4.6）| number / rhetoric | encyclopedia | 北弗吉尼亚军团 1862-63 多次以寡敌众（Second Bull Run/Fredericksburg/Chancellorsville）；Lincoln 频繁换帅属史实。「睡不着」为合理修辞，挂在已证事实上 | ✅verified |
| 25 | 「南军对俘虏的黑人士兵不按战俘对待——可能当场处死或卖回为奴；1864 田纳西 Fort Pillow 已投降黑人士兵被成批杀害」（`lee-n8` / `usct-n8` / kernel §4.10·§附A）| number / date | encyclopedia | 邦联政策不视黑人兵为战俘（处死/卖回为奴/转交州法）；Fort Pillow 1864.4.12 Forrest 部屠杀已降黑人兵（黑人兵存活率约 35% vs 白人约 70%）。确证 | ✅verified |
| 26 | 「1863 年 7 月 18 日傍晚第 54 麻省团夜袭 Fort Wagner，白人指挥官 Shaw 上校阵亡墙头，全团死伤过半」（`usct-n7` / kernel §1·§4.8·§附A·§附C）| date / number | encyclopedia | 1863.7.18 第二次 Fort Wagner 之役；Shaw 阵亡于胸墙；54 团约 600 人中约 272 伤亡（≈半数）。「死伤过半」准确 | ✅verified |
| 27 | 「到战争结束约 4 万黑人战死 / 差不多每十个北军一个黑人」（`usct-n8` / kernel §3·§10.4）| number | encyclopedia | USCT 死亡约 40,000（多数死于疾病）；黑人约占北军全部兵员 1/10。两数字均准确。**注**：约 4 万是「总死亡（含病死）」非「战死」，storyboard 用「战死」措辞略窄于来源（4 万里仅约 1/4 为战斗死亡）| ⚠️downgrade-wording |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#27]** `usct-n8`·kernel §3·§10.4：「我们当中，约有 4 万人**死在了这场战争里**」/「约 4 万**战死**」（cheat sheet 措辞）。
   - 问题：**数字归类（重点 A）**。USCT 约 4 万死亡是权威数字，但其中**约四分之三死于疾病/感染**，真正战斗阵亡约 1 万。storyboard `usct-n8` 正文用「死在了这场战争里」其实**没错**（是总死亡）；问题在 narrative cheat sheet（kernel §附C / §10.4 周边）与个别表述用了「**战死**」「约 4 万**战死**」，会让读者误以为 4 万全是战斗死亡。
   - 建议：把出现「战死」的地方改为「死于这场战争（多数死于疾病）」或「约 4 万人没能活着回来」。storyboard `usct-n8` 正文本身可不动（措辞已准）。低-中优先级。

2. **[#20]** `lin-n10`·kernel §附A：「（Appomattox 投降之后）我做了一篇**就职演说**，劝大家『不怀恶意，怀着仁慈』。」
   - 问题：**时序模糊（重点 引语/时间线）**。「with malice toward none」出自 Lincoln **第二任就职演说（1865.3.4）**，而该句在 storyboard `lin-n10` 里被排在「1865.4.9 投降」叙述**之后**，读者易误以为是投降后所讲。引语本身 100% 真实，问题只是放置位置造成的时间错觉。
   - 建议：补一个时间锚，如「投降前一个多月，我在第二任就职演说里就说过……」或「我（在那年三月的）就职演说里劝大家……」。把演说与投降的先后理清。中优先级（引语真，仅时序）。

3. **[#6]** `lin-n4`·kernel §5A：Lincoln 致 Greeley 信「能保联邦而不解放一个奴隶我也愿意……」。
   - 问题：**取舍透明度（重点 引语）**。引语逐字真实（verified primary），但原信**结尾**还有一句对冲：「我无意修改我一贯的个人愿望——人人皆可自由」。storyboard 只取「自由是工具」冷面一侧，未提对冲句。这是合法的教学聚焦，不算硬错，但若被史实党拿原信比对，会被指「截取」。
   - 建议（可选）：在 `lin-n5`（已讲 Lincoln 私下厌恶奴隶制）或括号里轻点一句「这封信他末尾也补了一句：他个人仍希望人人自由」，让取舍更透明。低优先级（已 verified，仅完整性）。

4. **[#17]** lens description·`lin-n1`·kernel §1：「死了**六十多万人**……美国史上死人最多的一场战争。」
   - 问题：**数字口径（重点 A 轻类）**。「六十多万」是传统权威下沿（约 620,000）。近年全普查研究（PNAS 2022 等）将含平民总死亡上修到约 650,000-850,000。当前数字**不算错**（是被广泛沿用的保守口径），且「美国史死亡最多战争」无争议。
   - 建议：可保留「六十多万」（保守诚实），或注一句「（近年研究估计更高，可能逾 75 万）」。极低优先级。

5. **[#23]** `lee-n3`·kernel §10.6：「有记录逃跑的被奴役者被抓回后受过**严酷的惩罚**。」
   - 问题：**史料分歧（重点 引语/事实）轻类**。底层事件真实（1859 Wesley Norris 等出逃被抓回），但**鞭打+盐水**的具体细节出自 Norris 一方证词，部分 Lee 传记学者存疑、Lee 本人否认；「抓回并作为惩罚」本身无争议。storyboard 已用「有记录……」对冲，**处理已正确**——列此条仅作创始人知情，不需改。
   - 建议：维持现状即可。如想更稳，可改「有逃跑者被抓回、受到惩罚（具体细节在史料里有分歧）」。极低优先级。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 一个北军黑人士兵 / USCT（基于第 54 麻省团）| `usct-soldier-receiving-end`（全 12 节，含 `usct-n1`/`usct-n2`/`usct-n4`）| **无真名**；马里兰种植园出身、母亲八岁时被卖走、趁夜北逃等**个体家世/场景为叙事性补充**；**底层集体史（账本记作财产、教奴识字犯法、打折军饷、第 54 团 Fort Wagner 死伤过半、被俘即处死/卖回风险、Fort Pillow、4 万死、参战换公民权又被夺回）全部 documented** | ✅ **已透明标注**：lens description 明示「这一遍的名字和家世是叙事性补充，士兵的经历、军饷、被俘风险都依据真实的黑人部队史」；`usct-n1` anti-fab 括号短句「这一遍给我的名字和家世，是叙事的补充；我经历的事，是 18 万跟我一样的黑人士兵真实经历过的」；storyboard 顶注 + meta.notes anti-fab 条均明示 composite 基底是 documented 第 54 麻省团 + USCT 史实。**符合 §1.3 dark-topic 红线（composite 必须标明）** |

> 其余出场人物（Abraham Lincoln / Robert E. Lee / Ulysses S. Grant / Robert Gould Shaw / Horace Greeley / Frederick Douglass[未具名「黑人领袖」]）均为**真实历史人物**，非合成。Lincoln / Lee 两 lens 为第一人称视角叙事（内心戏属合理 inference，挂在已证事实上），未虚构其生平骨架。`usct-n3` 提到的「一个黑人领袖……到处奔走逼林肯让黑人参军」指向 Frederick Douglass（未点名，跨废奴 Topic 锚），其施压参军史实成立。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `lincoln`（claim #1-2,4-10,12,14-20）/ `robert-e-lee`（#1,18,21-25）/ `usct-soldier-receiving-end`（#8-11,16,25-27；含 gold-standard N1/N4 重点节点）。N6 跨 lens 锚（解放宣言三视角）三 lens 均覆盖（#8·#15）。
- **重点核查结论**：
  - **重点 因果中立性（内战起因 奴隶制 vs 州权 framing）**：✅ **处理优秀，无红旗**。narrative §0·§9·§10.3 + storyboard 多处把「奴隶制是根本原因、州权是其包装/Lost Cause 战后建构」明确化，完全吻合当代史学压倒性共识；Rule 0 中性到位（Lincoln 非纯解放者神话、Lee 非纯恶人、§8 中美内战结构对照不褒贬）。这是本 topic 最大政治雷区，已稳健落地。
  - **重点 伤亡数字精度**：内战总死亡「六十多万」（#17）= 传统保守口径，正确（轻类红旗，可注上修区间）；USCT「约 4 万」（#27）总死亡数准确，唯「战死」措辞略窄（多数实为病死，主红旗）；Gettysburg/Fort Wagner/Fort Pillow/Pickett's Charge 各数字（#12·#13·#25·#26）全部经权威核实通过。
  - **引语分层**：真 primary（Greeley 信 #6、Gettysburg Address #14、第二任就职「malice toward none」#20、Emancipation/13th 原文 #8·#16）与概括转述（Lee「不愿再拔剑」#21、Lincoln「奴隶制不算错则无错」#4）均经核实为真或近原文；唯 #6 取舍未提对冲句、#20 时序需理清（已红旗）。
- **用到的外部核实来源**：National Archives（Emancipation Proclamation / Black Soldiers equal pay）、Avalon Project（Emancipation 原文）、American Battlefield Trust（Fort Sumter / Gettysburg / Fort Wagner / Pickett's Charge / casualties）、Britannica（Gettysburg / Fort Pillow / American Civil War）、NPS（54th Mass / USCT / Arlington House enslaved / Fort Pillow）、Encyclopedia Virginia（Lee and Slavery / Custis Slaves / USCT）、Wikipedia（Emancipation Proclamation / Battle of Fort Sumter / Confederate States / Battle of Gettysburg / Second Battle of Fort Wagner / Battle of Fort Pillow / Robert E. Lee）、AbrahamLincolnOnline + Dickinson House Divided（Greeley 信原文）、PNAS 2022 + American Battlefield Trust（死亡总数 620k 及上修研究）、African American Civil War Memorial Museum / Army Heritage Center（USCT 18.5 万 / 4 万死）、Arlington Historical Society（Wesley Norris）。
- **总评**：本 topic 史实骨架**非常稳健**——全部关键日期（Fort Sumter 1861.4 / Emancipation 1863.1.1 / Gettysburg 1863.7 / Fort Wagner 1863.7.18 / Fort Pillow 1864.4 / Appomattox 1865.4.9 / 遇刺 1865.4.14 / 13th 1865 底）、规模数字（18 万 USCT / 4 万死 / 军饷 13-vs-7 / 60 余万总死亡 / 54 团死伤过半）、引语（Greeley 信、Gettysburg Address、13th 原文）、因果框定（奴隶制根本原因、州权是包装）均经权威核实通过。**无 `needs-source`（无悬空高风险事实），无与权威正面冲突的硬错**。5 条红旗中仅 #27（「战死」措辞）与 #20（就职演说时序）属应处理项，其余 3 条为低/极低优先级完整性或口径微调。composite USCT 士兵透明标注到位（无红旗）。**可进 Gate 2，建议先理一下 #27「战死」与 #20 时序再上线。**
