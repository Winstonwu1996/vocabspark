# 妇女选举权 1848-1920 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    womens-suffrage-1920
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/womens-suffrage-1920.js（3 lens: cady-stanton / frances-harper / ida-b-wells-receiving-end）+ lib/history-narratives/womens-suffrage-1920.md
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
| 1 | 「1848 年 7 月 19-20 日，Seneca Falls 大会，《情感宣言》提出妇女投票权」（`ecs-n1`/`ecs-n4` / kernel §1·§4.1·附A）| date | encyclopedia | Seneca Falls 大会 1848.7.19-20 于 Wesleyan Chapel；Britannica/History.com 一致 | ✅verified |
| 2 | 「《情感宣言》仿《独立宣言》写下『所有男人和女人生而平等』」（`ecs-n1` / kernel §5A）| quote | primary | 原文 "We hold these truths to be self-evident; that all men and women are created equal."，Stanton 主笔，确证 | ✅verified |
| 3 | 「Seneca Falls 小教堂约 300 人（含男性）」（`ecs-n4` / kernel §4.1）| number | encyclopedia | 主流记约 300 人到场，多为本地居民，含男性，确证 | ✅verified |
| 4 | 「投票权决议在 Frederick Douglass 公开支持下险险通过」（`ecs-n5` / kernel §4.1·附C）| causal / motive | encyclopedia | 第 9 项（选举权）是唯一遭反对的决议，经辩论后通过；Douglass 公开力挺女性选举权，确证 | ✅verified |
| 5 | 「Stanton 1815 生纽约 Johnstown，父亲是法官」（`ecs-n2` / kernel §3·附C）| date | encyclopedia | 1815.11.12 生于 Johnstown，NY；父 Daniel Cady 为法官，确证 | ✅verified |
| 6 | 「1840 伦敦反奴隶制大会女代表被赶到帘子后面只许听不许说；她在那结识 Lucretia Mott」（`ecs-n3` / kernel §3·附C）| causal / motive | encyclopedia | 1840 World Anti-Slavery Convention 拒女代表入正厅、隔于旁听区；Stanton 与 Mott 在伦敦结识并约定开会，确证 | ✅verified |
| 7 | 「1850 起 Stanton 结识 Susan B. Anthony，合作 50 年」（`ecs-n5` / kernel §3·§4.3·附C）| date / number | encyclopedia | 二人 1851 结识（部分来源记 1850/1851），长期合作约半世纪。「1850」略早一年但属常见区间，「50 年」为约数 | ✅verified |
| 8 | 「内战后 1870 第 15 修正案给黑人男性投票权但不含女性；Stanton/Anthony 反对」（`ecs-n6`/`ecs-n7` / `feh-n6` / kernel §4.5·附C）| date / causal | encyclopedia | 第 15 修正案 1870 批准，禁因 race/color/曾被奴役剥夺投票权，不含性别；Stanton/Anthony 反对，确证 | ✅verified |
| 9 | 「Stanton 1869 说出种族歧视言论：用侮辱性字眼，暗示『无知的』黑人男性、移民男性不该排在『有文化的』白人女性前面」（`ecs-n6`/`ecs-n8` / `feh-n6` / kernel §3·§4.5）| quote / motive | encyclopedia | **史实属实**：Stanton 确以 "Sambo"、"Patrick and Sambo and Hans and Yung Tung"（贬 Irish/Black/German/Chinese）对比 "educated white women"，并主张教育门槛 voter test。文本用**概括描述、不伪造逐字引文** → 处理正确。中立性：narrative 与 storyboard 均诚实呈现污点（Rule 0 / 误解 #3 / N6·N8·N11 多处自陈），**未洗白** | ✅verified |
| 10 | 「运动 1869 分裂为两组织（NWSA Stanton/Anthony vs AWSA Lucy Stone 等温和派），对峙约 20 年」（`ecs-n7` / kernel §4.5·附A）| date / number | encyclopedia | 1869 分裂为 NWSA 与 AWSA；对峙约 20 年至 1890 合并，确证 | ✅verified |
| 11 | 「1890 两派合并为 NAWSA，Stanton 任首任主席（象征性）」（`ecs-n7` / kernel §4.7·附A）| date / motive | encyclopedia | 1890 合并为 NAWSA，Stanton 任首任主席（多被记为象征性，实务由 Anthony 一代主导），确证 | ✅verified |
| 12 | 「合并后为拉拢南方白人妇女，运动默许『给白人女性选票可帮白人稳住南方政治』的论调」（`ecs-n7` / `ibw-n7` / kernel §4.7·§9）| causal / motive | encyclopedia | 史学修正派记载：部分白人选举权派以「白人女性票可抵消/淹没黑人男性票」向南方白人 pander，确证为有据的运动史 | ✅verified |
| 13 | 「Stanton 1902 死（比 1920 早 18 年）；晚年写争议书《妇女圣经》」（`ecs-n8`/`ecs-n9` / kernel 附C / meta.date check）| date | encyclopedia | Stanton 1902.10.26 卒（1920-1902=18 年✓）；《The Woman's Bible》1895/1898 出版，引发运动内部争议，确证 | ✅verified |
| 14 | 「1920 第 19 修正案通过：投票权不得因『性别』被剥夺；文字几乎照搬 1870 第 15 修正案只换『种族』为『性别』」（`ecs-n9` / `feh-n9` / `ibw-n9` / kernel §4.10·§5C·附A）| date / quote | primary | 第 19 修正案 1920.8.18 批准、8.26 认证；文字结构确与第 15 修正案平行（"shall not be denied or abridged ... on account of sex"），确证 | ✅verified |
| 15 | 「1848-1920 整整 72 年；Stanton 开枪时 33 岁」（`ecs-n1`/`ecs-n9` / kernel §1 / meta.date check）| number / date | encyclopedia | 1920-1848=72 年✓；1848 时 Stanton 32-33 岁（生于 1815.11，1848.7 时 32 岁，11 月后满 33）→「33 岁」略早数月，属可接受近似 | ✅verified |
| 16 | 「南方黑人女性（与黑人男性同）被人头税、识字测验、暴力挡在投票站外，再等到 1965 Voting Rights Act 才真正能投」（`ecs-n9` / `feh-n9` / `ibw-n9` / kernel §3·§6·附A）| causal | textbook | poll tax / literacy test / 暴力压制黑人选民 + 1965 VRA 真正落实，APUSH/AP Gov 标准表述；1920+45=1965✓ | ✅verified |
| 17 | 「Harper 1825 生马里兰 Baltimore 自由黑人（非奴隶；马里兰是蓄奴州但家自由），三岁孤儿」（`feh-n2` / kernel §3·附C）| date | encyclopedia | 1825.9.24 生于 Baltimore，自由黑人家庭，幼年丧母成孤儿由姨/叔抚养。「三岁」为常见记述，确证；马里兰系蓄奴州属实 | ✅verified |
| 18 | 「Harper 1854 出诗集卖上万册，成全国最有名黑人作家之一，靠稿费讲费自立」（`feh-n3` / kernel §3）| number | encyclopedia | 《Poems on Miscellaneous Subjects》(1854) 极畅销，多记数年内售逾万册（一说 1 万-5 万），为当时最知名黑人诗人之一，确证。**注**：1854 亦是她首场反奴隶制公开演讲之年（New Bedford） | ✅verified |
| 19 | 「1866 AERA 成立大会上 Harper 发表『我们都被绑在一起』（We Are All Bound Up Together）」（`feh-n1`/`feh-n4`/`feh-n5` / kernel §4.4·§5B·附A）| date / quote | primary | 演讲 1866.5 于第 11 届全国妇女权利大会发表（即 AERA 成立的同场大会）；标题措辞 verified primary。文本「AERA 成立大会上」准确（AERA 在该会成立）| ✅verified |
| 20 | 「Harper 把部分收入秘密送入地下铁路（Underground Railroad）帮逃奴」（`feh-n3` / kernel §3）| motive | encyclopedia | Harper 资助废奴事业、与地下铁路有关联，常见传记记述（部分为概括）。属合理且广传的描述，非高冲突 | ✅verified |
| 21 | 「Harper 1869 选择支持先通过第 15 修正案（让黑人同胞先获保护）」（`feh-n6` / kernel §4.5·附C）| causal / motive | encyclopedia | Harper 在 AERA 分裂中倾向支持第 15 修正案优先（"the question of color ... let the lesser question of sex go"），确证立场 | ✅verified |
| 22 | 「1896 黑人女性自办 NACW，Harper 创始人之一（副主席）；同年 Plessy v. Ferguson 判『隔离但平等』合宪」（`feh-n8` / kernel §4.8·附A）| date | encyclopedia | NACW 1896 成立，Harper 为创始成员/任副主席之一；Plessy v. Ferguson 1896.5.18 判 separate but equal 合宪，确证 | ✅verified |
| 23 | 「Harper 1911 死（比妇女投票修正案早 9 年）」（`feh-n9` / kernel 附C / meta.date check）| date | encyclopedia | Harper 1911.2.22 卒；1920-1911=9 年✓，确证 | ✅verified |
| 24 | 「Ida B. Wells 1862 生密西西比 Holly Springs，出生时仍是奴隶，数月后内战结束/奴隶制废除才获自由」（`ibw-n1`/`ibw-n2` / kernel §3·附C）| date | encyclopedia | 1862.7.16 生于 Holly Springs, MS；生时仍受奴役，1863 解放宣言/1865 废奴方获自由。「数月后内战结束」措辞略快（解放分阶段：1863 宣言→1865 第 13 修正案），但「字面意义自由第一代」成立 | ✅verified |
| 25 | 「1878 黄热病一举夺走 Wells 父母与一个弟弟，她 16 岁谎报年龄考乡村教师独养弟妹」（`ibw-n2` / kernel §3）| date / number | encyclopedia | 1878 Holly Springs 黄热病疫情夺其父母及幼弟，时 Wells 16 岁，谎报年龄任乡村教师抚养弟妹，确证 | ✅verified |
| 26 | 「1884 Wells 持头等票拒移黑人车厢，咬了来拖她的乘务员，三名男子拖下车；起诉铁路一审胜后被高等法院推翻」（`ibw-n3` / `ida` lens desc / kernel §3）| date / motive | encyclopedia | 1884.5.4 Chesapeake & Ohio 铁路事件：买头等(ladies' car)票拒移、咬一名乘务/crew、三人合力拖下；1884.12 circuit court 判胜 $500，**1887 田纳西最高法院推翻**。文本「咬了乘务员」准确（一说咬 crew member）；「高等法院推翻」=1887，文本未写年份，成立 | ✅verified |
| 27 | 「1892 Memphis 三朋友开杂货铺生意太好抢白人对手客，被白人暴民从牢中拖出私刑处死；Wells 由此认清私刑本质（非惩罚罪犯，而用恐怖把往上爬的黑人摁回原位）；她被悬赏追杀、报馆被烧」（`ibw-n3`/`ibw-n8` / `ida` lens desc / kernel §3·§5D）| number / causal / motive | encyclopedia | 1892.3.9 People's Grocery 三股东 Thomas Moss / Calvin McDowell / Henry Stewart 被私刑处死（"Lynching at the Curve"）；Wells 撰文后 Memphis Free Speech 报馆被毁、印刷机被砸、其命遭威胁（被告知返 Memphis 即杀）。「悬赏追杀」措辞略强于「死亡威胁/不得返城」，但实质相符 | ✅verified |
| 28 | 「1913.3.3 华盛顿妇女大游行（约 5000-8000 人，宾州大道，刻意选 Wilson 就职前一天）；组织者要黑人妇女走队尾，Wells 拒绝、退入人群、当伊利诺伊代表团经过时从人群挤进队列与白人妇女并排走前排；她平静走回（非吵闹）；同年创办 Alpha Suffrage Club（美国第一个黑人妇女选举权组织）」（`ibw-n1`/`ibw-n4`/`ibw-n5`/`ibw-n8` / kernel §1·§4.9·附A）| date / number / representativeness / absolute | encyclopedia | 1913.3.3 NAWSA 游行、宾州大道、Wilson 就职前一日，确证。人数：多数来源记 ~5,000（部分估至 8,000-10,000）→ 文本「5000-8000」处于可证区间。Wells 被要求走队尾、NAWSA 因怕白人退出而拒其请求、游行开始后她从人群中现身「calmly」并入伊利诺伊代表团（两白人盟友留位），确证。Alpha Suffrage Club 1913 创办、常被记为首个/最重要黑人妇女选举权组织之一，「美国第一个」措辞主流可接受 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

> **重点核查结论先行（创始人最关心的两条）**：
> - **重点 ① Ida B. Wells 1913 游行（被要求走队尾/拒绝/加入伊利诺伊代表团）**：✅ **全部 verified**，无红旗。文本「退入人群→队伍经过→挤进伊利诺伊队列→与白人并排走前排→两白人盟友留位→平静（非吵闹）」与 NPS/WTTW/Suffrage2020 记述高度吻合。唯一可加固之处见 #5（轻类）。
> - **重点 ② Stanton 在第 15 修正案后的种族主义言论是否被诚实呈现（中立性/不洗白）**：✅ **诚实呈现，未洗白**。史实属实（"Sambo" 等真实存在），文本**用概括描述、不伪造逐字引文**（meta.notes 自陈，kernel §3 明示「有据可查的运动史污点，用概括描述不伪造具体引文」），且 Rule 0 中性、误解 #3、N6/N8/N11 多处第一人称自陈污点。处理符合 dark-topic 红线。**无红旗**。

1. **[#27]** `ibw-n1`·`ibw-n8`·lens desc：「我这辈子调查过几百起白人把黑人吊死、烧死的私刑案，**子弹和悬赏**都没让我闭嘴」「被南方**悬赏追杀**、报馆被烧」。
   - 问题：**措辞略强（rhetoric/number 轻类）**。verified 的史实是：报馆（Memphis Free Speech）被毁、印刷机被砸、收到**死亡威胁**、被告知「返 Memphis 即遭杀害」。「悬赏（bounty/赏金追杀）」「子弹」属戏剧化加色——主流传记记的是「死亡威胁 + 不得返城」，对「明码悬赏」与「中过/躲过子弹」缺逐字一手支撑。
   - 建议：保留情绪力度，**降级为有据措辞**，如「死亡威胁和被烧掉的报馆都没让我闭嘴」/「他们烧了我的报馆、扬言要我的命，也没让我闭嘴」。低优先级（实质危险属实，仅个别名词偏夸）。

2. **[#28]** `ibw-n8`·lens desc·kernel 附A：「Alpha Suffrage Club——**美国第一个**黑人妇女的选举权组织」。
   - 问题：**绝对表述（absolute）**。Alpha Suffrage Club（1913, 芝加哥）常被称为「芝加哥**第一个**黑人妇女选举权俱乐部」或「最重要/最有影响的黑人妇女选举权组织之一」；「**全美第一个**黑人妇女选举权组织」是流行说法，但黑人妇女选举权组织化此前已有零星先例，「全美唯一/第一」严格说存争议。
   - 建议：可接受但更稳的写法加对冲——「芝加哥第一个黑人妇女选举权俱乐部」或「美国最重要的黑人妇女选举权组织之一」。低优先级。

3. **[#7]** `ecs-n5`·kernel §3·附C：「1850 年我遇到了……Susan B. Anthony」「我们俩绑在一起，干了 **50 年**」。
   - 问题：**日期轻微偏差（date）**。二人结识通常记为 **1851**（部分来源 1850/1851 并存）；「50 年」为约数（1851→1902 Stanton 卒约 51 年，亦近似）。
   - 建议：极低优先级。若求精确可改「1851 年」；「50 年」作约数保留即可。不改也不算硬伤。

4. **[#24]** `ibw-n1`·`ibw-n2`：「我出生的时候还是个奴隶——**几个月后内战结束**、奴隶制废除，我才成了自由人。」
   - 问题：**因果/时间压缩（causal 轻类）**。Wells 1862.7 生；内战 1865.4 结束、第 13 修正案 1865.12 批准——距其出生约 **3 年**，非「几个月」。最接近的「数月后」事件是 1863.1 解放宣言（约半年后），但宣言不覆盖全部、亦非「内战结束」。
   - 建议：可改「我出生不久，解放宣言就来了；等内战结束、奴隶制废除，我才真正成了自由人」以区分「宣言」与「废奴」两个时点。低优先级（「字面意义自由第一代」核心论点成立）。

5. **[#28 子项]** `ibw-n1`·kernel §1·§4.9：游行人数「约 **5000-8000**」。
   - 问题：**数字区间（number 轻类）**。多数权威给 **~5,000**；8,000-10,000 为部分上沿估计。文本区间不算错（覆盖主流下沿），但「5000-8000」把上沿估计当常规。
   - 建议：可接受；若求稳可写「约 5000 人（一些估计更高）」。极低优先级。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| （无合成人物）| —— | 本 topic **三位主角全部为真实历史人物**，无虚构姓名/年龄的 composite 角色 | 不适用 |

> **关键判断**：与 chinese-exclusion-1882 不同（后者有「台山籍铁路华工」composite），本 topic **没有合成人物**。三视角全部挂在真名真人身上：
> - **Elizabeth Cady Stanton**（1815-1902，真实）— 第一人称视角，内心戏属合理 inference，挂在已证事实骨架上（Seneca Falls / 1869 反 15th / 《妇女圣经》/ 1902 卒）。
> - **Frances Ellen Watkins Harper**（1825-1911，真实）— 第一人称视角，「我们都被绑在一起」为 verified primary 引语；内心戏 inference。
> - **Ida B. Wells**（1862-1931，真实）— 第一人称视角，1913 游行、火车官司、私刑调查、Alpha Suffrage Club 均 documented；内心戏 inference。
>
> 其余出场人物（Susan B. Anthony / Frederick Douglass / Lucretia Mott / Lucy Stone / Thomas Moss 等三朋友）均为**真实历史人物**，非合成。**符合 §1.3 dark-topic 红线**（无未标注 composite 之虞）。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `cady-stanton`（claim #1-16）/ `frances-harper`（#17-23）/ `ida-b-wells-receiving-end`（#24-28；含 N1/N4/N5 gold-standard 重点节点）。跨 lens 共享 claim（#8 第 15 修正案、#14 第 19 修正案、#16 南方剥夺/1965）三 lens 均触及。
- **两个重点核查结论**：
  - **重点 ①（Wells 1913 游行）**：全 verified。文本对「被要求走队尾→拒绝→退入人群→挤进伊利诺伊代表团→走回前排→两白人盟友留位→平静（非当场吵闹）」的还原与 NPS / WTTW / Suffrage 2020 Illinois 一致。NAWSA 因怕南方白人妇女退出而拒其请求亦属实。
  - **重点 ②（Stanton 种族主义言论的诚实呈现）**：**诚实，未洗白**。"Sambo" / "Patrick and Sambo and Hans and Yung Tung" / 教育门槛主张均为真实史料；文本明智地**只用概括、不伪造逐字引文**，并在 Rule 0、误解 #3、N6/N8/N11 反复正面陈述这是污点。中立性达标——既不写成「无瑕女权英雄」凯歌，也不反向把 Stanton 写成纯反派（N11/N12 双面论保持张力）。
- **引语分层**：verified primary 引语 = 《情感宣言》「all men and women are created equal」(#2)、Harper「We are all bound up together」(#19)、第 15/19 修正案文字 (#14)。**无伪造逐字引文**：Stanton 种族言论 (#9) 全程概括化处理（最高风险类，处理正确）；Frederick Douglass 台上发言、父亲「要改写法律的人」等为 inference/概括，未排成确指逐字引文。
- **数字诚实度**：游行人数 (#28/#5) 用区间、72 年 (#15) 准确、1965 (#16) 准确、49→未见离谱夸张数字。无 chinese-exclusion「每米一死」式强修辞伪精确数字。
- **用到的外部核实来源**：National Archives（19th Amendment 原文/日期）、Library of Congress（1913 游行）、NPS（1913 Woman Suffrage Procession / Ida B. Wells / Alpha Suffrage Club）、Wikipedia（Stanton / Harper / Ida B. Wells / Seneca Falls / Declaration of Sentiments / 19th Amendment / Woman Suffrage Procession）、Britannica（Seneca Falls）、History.com（Seneca Falls / 19th Amendment）、NEH「Winning the Vote: A Divided Movement」（Stanton "Sambo" 言论 / 第 15 修正案分裂）、NY Historical "Women & the American Story"（Harper / 第 15 修正案）、BlackPast / Constitution Center（Harper "We Are All Bound Up Together" 1866）、WTTW Chicago / Suffrage 2020 Illinois（Wells 1913 + Alpha Suffrage Club）、Zinn Education Project / DPLA（Wells 1884 铁路案）、TN Museum（Memphis 1892 私刑）。
- **总评**：本 topic 史实骨架**非常稳健**——所有日期（1848/1866/1869/1870/1890/1896/1913/1920/1965）、修正案文字与平行关系、人物生卒、Seneca Falls 300 人、游行人数区间、Wells 火车官司与私刑调查、Harper 引语与 NACW、Stanton 污点链均经权威核实通过。**两个指定重点（Wells 队尾事件 + Stanton 种族言论诚实呈现）双双达标**。无 `needs-source`（无悬空高风险事实），无 `flagged`（无与权威正面冲突的硬错），无未标注 composite。5 条红旗**全部为低优先级措辞/数字微调**（#27 悬赏/子弹略夸、#28 「全美第一」绝对表述、#7 1850/1851 偏差、#24 「几个月」时间压缩、#5 人数上沿）。**可进 Gate 2**；红旗均属可上线后慢修的轻类，建议优先处理 #27（戏剧化名词「悬赏/子弹」）与 #28（「美国第一个」对冲）。
