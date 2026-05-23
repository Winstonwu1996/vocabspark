# 铁路华工与排华法案 1869-1882 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    chinese-exclusion-1882
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/chinese-exclusion-1882.js（3 lens: leland-stanford / wong-chin-foo / taishan-railroad-worker-receiving-end）+ lib/history-narratives/chinese-exclusion-1882.md
claim 总数:  28
🚩 红旗数:   6（需创始人审）
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
| 1 | 「1869 年 5 月 10 日，犹他州 Promontory Summit……金道钉」（`ls-n1` / `tw-n1` / `ls-n6` / kernel §1）| date | encyclopedia | 金钉仪式 1869.5.10 Promontory Summit，权威一致 | ✅verified |
| 2 | 「修最险一段的上万华工，一个都没进那张著名合影」（`ls-n1` / `ls-n6` / `tw-n1` / `tw-n6` / kernel §1·§4.5）| representativeness / absolute | encyclopedia | 著名 Russell「Champagne Photo」确无华工；**但** Russell 另一张「Chinese laying the last rail」含 8 名华工，华工当天在场。文中专指那张著名合影，措辞成立 | ✅verified |
| 3 | 「1862 林肯政府《太平洋铁路法案》授权修横贯大陆铁路，按里程给土地补贴」（`ls-n2` / kernel §2·§附A）| date / causal | encyclopedia | Pacific Railway Act 1862，按里程给地+债券，确证 | ✅verified |
| 4 | 「1865 先试 50 个华工 → 大量招」（`ls-n3` / kernel §4.2·§附A）| number / date | encyclopedia | 1865 试用 50 人后成功扩招，确证 | ✅verified |
| 5 | Crocker 名言「能修长城的民族还修不了铁路？」（`ls-n3` / kernel §4.2·§附C）| quote | inference | 论点真实（Crocker 以长城/火药驳 Strobridge），但**确切措辞为后世概括/传说**，无逐字一手出处 | ⚠️downgrade-wording |
| 6 | 「工程最忙时十个有九个华工 / 约 90% / 上万人」（`ls-n3` / `tw-n7` / kernel §10.6·§3）| number | encyclopedia | CP 劳力近 90% 华工（约 12,000/13,500）；总数累计逾 12,000，确证 | ✅verified |
| 7 | 「Summit Tunnel 500 多米花岗岩」（`ls-n4` / kernel §2·§附B）| number | encyclopedia | 1,659 ft ≈ 506 m，准确 | ✅verified |
| 8 | 「nitroglycerin 硝化甘油极不稳定常提前爆炸」（`ls-n4` / `tw-n4` / kernel §1.L1）| number / causal | encyclopedia | CP 在 Summit 用硝化甘油，极不稳定致死，确证 | ✅verified |
| 9 | 「每往前凿一米，山上就有华工死掉」（`ls-n4`）| **rhetoric / number** | dramatization | 强修辞数字。隧道总长约 1.9 km、Summit 约 506 m；全程死亡高估约 1,000-1,200。「每米一死」若按里程会远超任何估计；此处为 Stanford 内心合理化语气，但仍是夸张数字 | ⚠️downgrade-wording |
| 10 | 「内华达山冬天雪能堆到 10-12 米 / 十几米」（`ls-n5` / `tw-n5` / kernel §1.L1·§附D）| number | encyclopedia | 1866-67 冬峰顶平均雪深约 18 ft（5.5 m），季节总降雪约 44 ft（13.6 m），局部堆积/雪堆可达更高。「10-12 米」处于可证范围上沿，偏高但不离谱 | ⚠️downgrade-wording |
| 11 | 「华工在雪下挖通道、住雪洞、靠透气孔呼吸」（`ls-n5` / `tw-n5` / kernel §1.L1）| number / motive | primary | 当时《Sacramento Union》记者记华工「literally worked and lived under snow」，雪下隧道连营地，确证 | ✅verified |
| 12 | 「雪崩把整营华工连人带工棚卷走 / 开春雪化才在山脚找到尸体」（`ls-n5` / `tw-n5` / kernel §1.L1）| number | encyclopedia | 雪崩埋营、「一次雪崩死 20 人」「dozens at a time」有记载，确证 | ✅verified |
| 13 | 「死多少华工没人认真数过，几百到上千；公司账本没单独列栏」（`ls-n5` / `tw-n5` / kernel §5C·§9）| number | encyclopedia | 高估约 1,000-1,200；CP 无官方死亡统计。「几百到上千」是保守且诚实的区间表述 | ✅verified |
| 14 | 「1869 年 4 月华工一天铺 10 英里，纪录至今未破」（`ls-n5` / kernel §4.4·§附A）| number / absolute | encyclopedia | 1869.4.28 CP 一天铺 10 mi 56 ft，手工铺轨纪录至今未破，确证。**但**实际铺轨的 8 人是爱尔兰人，华工为更大基数辅助力 → 文中「华工创下纪录」略过度归因 | ⚠️downgrade-wording |
| 15 | 「Stanford 1862 就职演说称华人『劣等种族』、要保护加州不被『玷污』」（`ls-n7` / `ls-n9` / kernel §3·§附A）| quote / date | primary | 1862 年 Stanford 致立法机关咨文确有「inferior race」「dregs of...Asia」「玷污 superior race」措辞。**但**确切场合多被记为「致立法机关咨文/年度咨文」，非严格意义的「就职演说」；日期 1862 正确 | ✋flagged |
| 16 | 「政客算账：华人不能投票，白人能 → 站排华边」（`ls-n7` / `ls-n8` / kernel §1·§4.8）| causal / motive | textbook | 选票算计是 APUSH 标准解释之一（归化法挡华人于公民权外=无票），合理但属史学诠释，非唯一动因 | ✅verified |
| 17 | 「1882 Chinese Exclusion Act：禁华工入境（初定 10 年后延长）+ 已在美华人永不能归化公民」（`ls-n8` / `wcf-n8` / `tw-n8` / kernel §5A·§附A）| date / number | primary | 法案原文：暂停华工入境 10 年；任何法院不得让华人入籍。确证（1882.5.6 签署）| ✅verified |
| 18 | 「美国史上第一次按种族禁一整个民族移民 / 首部针对特定族裔的移民禁令」（`ls-n8` / `tw-n8` / kernel §0·§10.2）| absolute | textbook | APUSH/学界标准表述：CEA 是首部按族裔/国籍的联邦移民禁令，确证 | ✅verified |
| 19 | 「1888 Scott Act：约两万持合法返美证件的在外华工被禁返」（`wcf-n8` / kernel §4.9·§附A）| date / number | encyclopedia | Scott Act 1888.10.1，作废返美证件，约 20,000 在外华工被困，确证 | ✅verified |
| 20 | 「1892 Geary Act 延长排华 + 强制随身证件」（kernel §4.9·§附A）| date | encyclopedia | Geary Act 1892.5.5 延期十年 + 居留证件制度，确证 | ✅verified |
| 21 | 「1943 Magnuson Act 废除排华法案，共 61 年」（`ls-n9` / `wcf-n9` / `tw-n9` / kernel §0·§附A）| date / number | encyclopedia | 1943.12.17 Magnuson Act 废除；1882→1943=61 年，确证 | ✅verified |
| 22 | 「1871 洛杉矶华人种族屠杀，暴民一夜打死、吊死至少 17 人」（kernel §1.L2·`wcf-n3`）| number | encyclopedia | 权威多记 18-19 人遇害（其中约 15 人被吊死）。「至少 17」是保守表述，成立；但主流数字为 18-19，可上修 | ✅verified |
| 23 | 「1871 屠杀是美国史上最大私刑屠杀之一」（`wcf-n3` / kernel §1.L2）| absolute | encyclopedia | 常被称为美国史最大规模私刑/大规模杀戮之一，「之一」措辞稳妥，成立 | ✅verified |
| 24 | 「Wong Chin Foo 1847 生山东，1883 纽约创《华洋新报》(The Chinese American)，造『Chinese American』一词」（`wcf-n1`·`wcf-n5`·`wcf-n9` / kernel §3·§附A）| date / quote | encyclopedia | 生于山东即墨 1847；1883 创 The Chinese American；普遍被记为「Chinese American」造词人，确证 | ✅verified |
| 25 | 「《华洋新报》可能是美国史上第一份华人办的英文报纸」（`wcf-n5` / kernel §3）| absolute | inference | 文中已用「可能 / possibly」对冲。另有来源称其为「落基山以东第一份华人报」。保留对冲措辞即稳妥 | ✅verified |
| 26 | 「1887 Wong 公开向 Denis Kearney 下战书辩论」（`wcf-n7` / kernel §4.7·§附A）| date / quote | encyclopedia | 1887.10.18 Wong-Kearney 公开辩论（Cooper Union），并曾以「筷子/爱尔兰土豆/克虏伯炮」挑战，确证 | ✅verified |
| 27 | 「Denis Kearney 口号『The Chinese must go!』」（`ls-n6` / `wcf-n7` / `tw-n7` / kernel §1·§附C）| quote | primary | Kearney 演讲固定结尾「the Chinese must go」，确证 | ✅verified |
| 28 | 「Stanford 用铁路财富办斯坦福大学纪念早逝的儿子」（`ls-n9` / kernel §3·§附C）| date / motive | encyclopedia | 1885 立校纪念 1884 病逝（伤寒，15 岁）之子 Leland Jr.，财富主要来自铁路，确证 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#9]** `ls-n4`：「每往前凿一米，山上就有华工死掉——炸药炸飞、巨石砸下、从悬崖坠落。」
   - 问题：**强修辞数字（重点 A）**。这正是 SOP 失败 taxonomy「数字夸张」原型例。实际死亡高估约 1,000-1,200，覆盖全程（不止隧道）；隧道段约 1.9 km。「每米一死」若被读成铺路里程的字面伤亡率，会远超任何史料估计。当前它嵌在 Stanford 第一人称合理化语气里（「你知道一件事，但你选择不去细想」），文学合理，但仍是未带量化底座的强数字。
   - 建议：保留情绪力度，**降级为非字面措辞**，如「每往前凿一段，山上就有华工付出生命」/「赶进度的每一步，背后都压着华工的命」——去掉「一米=一死」的伪精确比率，避免学生当作统计事实记住。

2. **[#15]** `ls-n7`·`ls-n9`·kernel §附A：「（Stanford）1862 当加州州长的**就职演说**里，公开说华人是『劣等种族』。」
   - 问题：**引语场合存疑（重点 C）**。「劣等种族/亚洲糟粕/玷污 superior race」措辞是真史料、年份 1862 也对，但权威多将其系于 Stanford **致立法机关的咨文（annual/legislative message）**，而非严格意义的「inaugural address / 就职演说」。把演绎/二手归类的「场合」排成确指会被史实党挑刺。
   - 建议：把「就职演说」改为更稳的「1862 年任加州州长时（在致立法机关的咨文里）」或「当州长时公开表示」。引语本身可保留（它是 verified primary）。

3. **[#14]** `ls-n5`·kernel §4.4：「（1869.4）我们的**华工创下**一天铺 10 英里的纪录。」
   - 问题：**代表性/归因（重点 B 邻类）**。纪录是 CP 整支队伍（约 90% 华工 + 少数白人）所创，但当天**实际抬轨上道的 8 人是爱尔兰人**，华工是更大基数的供料/铺设支援力。说「华工创下纪录」略把全功归一群，史实党可挑「抹掉爱尔兰铺轨工」。
   - 建议：微调为「我们的华工（与爱尔兰铺轨工一起）创下…」或「以华工为主力的中央太平洋队伍创下…」，既不抢功也不抹去华工主力地位。

4. **[#5]** `ls-n3`·kernel §附C：Crocker「能修长城的民族还修不了铁路？」
   - 问题：**引语风险（重点 C）**。论点真实（Crocker 确以长城/火药反驳反对雇华人者），但**确切措辞是后世广为流传的概括/传说**，无逐字一手档案。kernel 已称其「名言」，storyboard 直接当引文用。
   - 建议：维持但**显式标为概括**——如「Crocker 说过一句后来流传很广的话（大意是）：能修长城的民族…」。避免把传说句排成确证引文。

5. **[#10]** `ls-n5`·`tw-n5`：「内华达山冬天雪能堆到 10-12 米 / 十几米。」
   - 问题：**数字偏高（重点 A 轻类）**。1866-67 峰顶平均雪深约 18 ft（5.5 m），整季总降雪约 44 ft（13.6 m）。「10-12 米」处于「季节累积/局部雪堆」可证范围上沿，作为单点雪深偏高。
   - 建议：可接受但更稳的写法是「一冬累计能下十几米雪 / 雪能堆得几层楼高」，把「累积总量」与「单点雪深」区分开。低优先级。

6. **[#22]** `wcf-n3`·kernel §1.L2：「1871 洛杉矶……一夜打死、吊死**至少 17** 名华人。」
   - 问题：**数字保守可上修**。权威主流为 18-19 人遇害（约 15 人被吊死）。「至少 17」不算错（确实≥17），但比通用数字低。
   - 建议：可上修为「至少 18 人 / 18-19 人」以贴主流，并仍保「美国史最大私刑屠杀之一」。极低优先级（保守不算硬伤）。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 一个台山籍铁路华工 | `taishan-railroad-worker-receiving-end`（全 11 节，含 `tw-n1`/`tw-n2`/`tw-n4`/`tw-n5`）| 无真名；约 1845-1900 生卒为叙事设定；具体家事（契约、寄家书、收拾工友遗物、攒钱寄台山）为叙事补充；**底层集体劳工史（吊篮凿崖、雪崩丧生、完工后被排华挡在公民权外）为 documented** | ✅ **已透明标注**：lens description、`tw-n1` anti-fab 括号「我没有留下真名……这一遍里的我，是把许许多多真实台山华工的经历，合成进一个人——但我经历的每一件事，都是真的发生过的」、`tw-n4`/`tw-n5` 括号区分真事 vs 个体演绎、kernel §3·§5C·§9·meta.notes 均明示 composite。**符合 §1.3 dark-topic 红线（composite 必须标明）** |

> 其余出场人物（Stanford / Wong Chin Foo / Charles Crocker / Denis Kearney / Frederick Douglass）均为**真实历史人物**，非合成。Stanford / Wong 两 lens 为第一人称视角叙事（内心戏属合理 inference，挂在已证事实上），未虚构其生平骨架。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `leland-stanford`（claim #1-9,14-18,28）/ `wong-chin-foo`（#19,22-27）/ `taishan-railroad-worker-receiving-end`（#1-2,5,8-13,17-18,21；含 N1/N4/N5 gold-standard 重点节点）。
- **重点核查结论**：
  - **重点 A（数字夸张）**：主红旗 #9「每米一死」⚠️降级；#10 雪深偏高、#22 死亡数偏保守为轻类。
  - **重点 B（代表性）**：台山华工 composite 透明标注到位（无红旗）；唯一归因风险是 #14「华工创纪录」略过度（已红旗轻类）。
  - **重点 C（引语）**：真史料（CEA 原文 #17、Stanford「劣等种族」措辞 #15、Kearney「Chinese must go」#27、Wong 把独立宣言印报上 kernel §5B 已明标「非逐字引文/概括」）与演绎/传说（Crocker 长城句 #5、Stanford 演讲场合 #15）需分层；kernel §5B 已自标 Wong 反问为「概括非逐字」，处理良好。
- **用到的外部核实来源**：National Archives / Avalon Project（CEA 原文）、Wikipedia（CEA / LA 1871 massacre / Scott Act / Golden spike / Tracklaying race 1869 / Wong Chin Foo / Magnuson Act / Stanford）、Britannica（CEA / LA massacre）、Stanford「Chinese Railroad Workers in North America Project」、PBS American Experience（Sierra 隧道）、governors.library.ca.gov（Stanford 1862 咨文原文）、Museum of Chinese in America / NY Historical（Wong Chin Foo）、cprr.org（10-mile day）、1882 Foundation（Summit Tunnel）。
- **总评**：本 topic 史实骨架**稳健**——所有日期、法律条款时长、Scott/Geary/Magnuson 链、华工占比、隧道长度、死亡区间、金钉照片排除、Wong 1883/1887 时间线、Stanford 大学由来均经权威核实通过。无 `needs-source`（无悬空高风险事实），亦无与权威**正面冲突**的硬错。6 条红旗中仅 #9 / #15 属应处理项（一为强修辞数字、一为引语场合归类），其余 4 条为低优先级措辞/数字微调。**可进 Gate 2，但建议先处理 #9 与 #15 再上线。**
