# 第一次十字军东征 1095-1099 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    crusades-1099
生成日期:    2026-05-23
来源文件:    lib/history-storyboards/crusades-1099.js（3 lens: roger-toulouse / aisha-jerusalem / alexios）+ lib/history-narratives/crusades-1099.md
claim 总数:  28
🚩 红旗数:   7（需创始人审）
```

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`（后三类进红旗）。

> 本 topic 特别风险点（任务指定）：① Alexios lens 的引证（同类 topic 出过"伪造私人日记 / 假卷数引证"事故）；② 引语分层（真史料 vs 演绎）；③ 文化对应硬禁（中世纪欧洲/中东不可用中国概念词）；④ 合成角色透明标注。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | 「1095/11/27 Urban II 在 Clermont 演说号召东征」（`roger-n1` / kernel §0·§3·§4 / 时间线）| date | encyclopedia | 教务会议 1095/11/18 召开，向大众的露天演说在 **11/27**。权威一致（Wikipedia / Britannica）| ✅verified |
| 2 | 「Urban II 那天发明 *plenary indulgence*（全大赦）= 出征 = 所有罪一次性赦免」（`roger-n1` / kernel §3·文献1）| quote / causal | encyclopedia | "earliest record of a plenary indulgence"——把参加东征等同于全部苦修，确证是该次创新 | ✅verified |
| 3 | 「人群高呼 *Deus vult*（上帝意旨）成为口号」（`roger-n1` / kernel §4·文献1）| quote | inference | 4 个二手版本均载，但**是否真在会上喊出有争议**（Robert the Monk 一支记载；可能是事后宣传口号）。kernel §5 已自标「很可能真发生 / 多源比对」，处理良好 | ✅verified |
| 4 | 「Urban II 1099/07/29 死，时耶路撒冷已陷 14 天但消息未到」（kernel §3）| date | encyclopedia | Urban II 卒 1099/07/29；耶城陷 07/15；消息 6-8 周才到罗马，确证 | ✅verified |
| 5 | 「1099/07/15 攻陷耶路撒冷，后 3 天屠城」（`roger-n7` / `aisha-n6` / `alexios-n8` / kernel §4）| date / number | encyclopedia | 07/15 破城 + 随后屠杀，权威一致 | ✅verified |
| 6 | 「3 天死 3000-10000 人；Ibn al-Athir 记 7 万，现代认为偏高」（`roger-n7` / kernel §4·§10·文献2）| number | encyclopedia | 现代估区间 3000-40000，主流偏低端（约 1 万）；7 万被 Conor Kostick 等明确称重大夸大。文中区间表述 + 自标 7 万偏高，处理稳健 | ✅verified |
| 7 | 「Ibn al-Athir 引语：杀超 7 万、imam 死在 mihrab、银灯账目」（文献2 完整段落）| quote / number | primary | Ibn al-Athir《al-Kamil》约 1230 写（距事 130 年）。kernel 明标「写于约1230 距事130年 / 数字几乎肯定夸大 / 物质细节可信」——**分层到位** | ✅verified |
| 8 | 「血及马腹——Raymond of Aguilers 这 5 个字描述，这不是夸张」（`roger-n7` cn「血及马腹」/ en「blood up to a horse's belly... not just a phrase」）| **quote / rhetoric** | primary | Raymond 原文是 *usque ad frenos equorum*=「至马**勒/膝**」，**非「马腹」**；且**直接借自《启示录》**的末世意象，学界视为**修辞性宗教净化语言，非字面目击测量**。文中①译成「马腹」误差②断言「不是夸张/not just a phrase」与「这是 Revelation 借喻」相左 | ⚠️downgrade-wording |
| 9 | 「Saladin 1187/10/02 重夺耶路撒冷，没屠城（赎金 + 部分变奴）」（`roger-n9` / `aisha-n11` / kernel §4）| date / causal | encyclopedia | 1187/10/02 投降；男 10 / 女 5 / 童 1 dinar 赎金（kernel 童写 1，主流亦记 2，差异小）；Saladin 自捐放老弱；与 1099 对比成立，确证 | ✅verified |
| 10 | 「Alexios 1071 Manzikert 时 14 岁 / 1081 政变上位 24 岁」（`alexios-n2` / kernel §3）| date / number | encyclopedia | 生约 1056：1071=约 15 岁（文写 14，临界偏低 1）；1081=约 25 岁（文写 24，偏低 1）。轻微 off-by-one，非硬错 | ⚠️downgrade-wording |
| 11 | 「Alexios 1081/04/04 在 Hagia Sophia 加冕」（`alexios-n2` / kernel §3）| date | encyclopedia | 1081/04/04 加冕，确证 | ✅verified |
| 12 | 「Alexios 1094/12 一个夜里在 Blachernae 书房**亲笔写信**给 Urban II 求 3000 专业兵」（`alexios-n1`）| **date / quote** | **dramatization** | 史实是 **1095/03 Piacenza 教廷会议派使团口头求援**（kernel §3 正确如此写）。学界明确：所谓 Alexios **私人书信**（致 Flanders 伯爵 / Montecassino）**真伪根基薄弱**。storyboard 把它演成「1094 年 12 月烛下亲笔信 + 逐句内容」，**未标注为演绎** → 命中任务点名的「伪造私人日记/书信」风险类型 | ✋flagged |
| 13 | 「Alexios 那封信要 **3000** 专业兵 / 不要平民修士」（`alexios-n1` / kernel §3 作「几千」）| number | inference | 主流：求「some mercenary forces / 几千专业兵」。kernel 用「几千」稳妥；storyboard 钉死「3000」是合理但非史载精确数 → 与 #12 同源，措辞精确度偏高 | ⚠️downgrade-wording |
| 14 | 「Anna 在《Alexiad》写 Bohemond：『我这辈子见过最帅的男人，6 英尺多高，金发碧眼，笑时眼睛冷得像狼』」（文献3 第3价值，**作直接引文**）| **quote** | **dramatization** | Anna 真实描写：高出最高者近一肘、浅色短发、**蓝眼「透出此人的精神与威严」**、「见之令人钦佩，闻名令人生畏」。**原文无「最帅」「眼冷如狼」**。文中以引号呈现的版本是**演绎措辞冒充《Alexiad》原引** → 命中「假引证」事故类型 | ✋flagged |
| 15 | 「《Alexiad》15 卷 / 约 400,000 字 / 希腊文 / 软禁中完成」（kernel §3·文献3 / `alexios-n8`·`n9`）| number | encyclopedia | 《Alexiad》确为 **15 卷**希腊文，写于软禁期，是十字军/拜占庭第一手核心史料。卷数核实正确（区别于同类事故的「假卷数」）| ✅verified |
| 16 | 「Anna 临终前父亲对她说的话 + 1118 临终独白」（`alexios-n8` 末·`alexios-n9`）| quote | dramatization | storyboard **已自标透明**：「《Alexiad》没有完整记下来…这一段是这一遍让你听见」「我不知道她那天有没有真的记下来」。演绎但**已显式降级**，不进红旗 | ✅verified |
| 17 | 「1098/06/03 夜 Bohemond 收买亚美尼亚守卫 Firouz 翻墙破 Antioch」（`roger-n4` / `alexios-n6` / kernel §3）| date / causal | encyclopedia | Firouz 内应 + 绳梯 + 06/03 夜破城，确证 | ✅verified |
| 18 | 「Maarat 1098/12 围城后十字军食人尸；Raymond of Aguilers / Fulcher 记载」（`roger-n5` / kernel §4）| number / quote | primary | 食人事件由近十部基督教编年史佐证；Raymond of Aguilers（在场）+ Fulcher（参与但未亲在 Maarat）均记。文中归因准确（Fulcher「在他书里写」属实）| ✅verified |
| 19 | 「1099/06/07 抵耶城；07/08 全军赤脚绕城 7 圈（仿 Joshua/Jericho）」（`roger-n6` / `aisha-n3`·`n4`）| date / causal | encyclopedia | 06/07 抵城、07/08 赤足游行确证；Jericho 七绕的宗教类比为编年史载动机 | ✅verified |
| 20 | 「耶城约 4 万居民：多数穆斯林 + 几千犹太人 + 几千东方基督徒；Fatimid 1098 刚夺城、约 1000 守军」（`roger-n6` / `aisha-n3` / kernel §2·§4）| number | encyclopedia | 人口因难民膨胀至约 4 万；Fatimid 1098 自塞尔柱夺城，守军规模量级合理，确证 | ✅verified |
| 21 | 「拉丁兵分不清亚美尼亚正教/叙利亚基督徒与穆斯林，错杀东方基督徒」（`aisha-n8` / `alexios-n8` / kernel §6）| causal / representativeness | inference | 东方基督徒在 1099 屠城中亦遇害有记载；「凭衣着无法分辨」是合理 inference（非精确量化），文中作叙事处理得当 | ✅verified |
| 22 | 「1096 People's Crusade 3 万人，Civetot 10/21 被 Kilij Arslan 伏击，27000 死」（`alexios-n3` / kernel §4）| number / date | encyclopedia | 平民十字军主体在 Civetot（1096/10）覆灭，确证；3 万/27000 具体数为编年史量级估计，文中作叙事可接受 | ✅verified |
| 23 | 「Bohemond 违誓自封 Antioch 大公；1108 Treaty of Devol 向 Alexios 称臣」（`alexios-n7` / kernel §3）| date / causal | encyclopedia | Bohemond 占 Antioch + 1108 迭沃尔条约称封臣，确证；Antioch 公国实际仍由 Tancred 续掌，文中已点明 | ✅verified |
| 24 | 「1204 第四次十字军洗劫君士坦丁堡（基督徒打基督徒）；青铜马运往威尼斯」（`alexios-n9` / kernel §4·§10）| date / causal | encyclopedia | 1204/04 拉丁人破城劫掠；圣马可青铜驷马确系君堡掠回，确证 | ✅verified |
| 25 | 「plenary indulgence → 滥卖赎罪券 → 1517 Luther 95 条 → 宗教改革」（`roger-n9` / kernel §3·文献1）| causal | textbook | 概念延伸链是标准教科书叙述（AP）。「422 年」「Luther 反对赎罪券滥用」属实。属史学诠释性长链，合理 | ✅verified |
| 26 | 「同年 1099 北宋哲宗末年，新党 vs 旧党党争；中国无独立宗教权威故无宗教战争」（`roger-n11` / kernel §8）| causal / representativeness | textbook | 1099=哲宗元符二年，新旧党争属实；「皇权统摄宗教 vs 教俗分立」是合理制度对照（诠释性，非唯一解）。**未用中国概念词套中世纪欧洲**（方向相反，安全）| ✅verified |
| 27 | 「唐武宗 845 灭佛：毁寺约 4600 + 强迫还俗 26 万僧」（`roger-n11` / kernel §8）| number / date | encyclopedia | 会昌灭佛 845；毁寺约 4600、还俗约 26 万为传统史载数，确证 | ✅verified |
| 28 | 「第一次十字军约 5-7 万出发，约 60% 死在路上 / 70% 死」（kernel §1·§4·§7 / `roger-n10` 文「70%」）| number | inference | 高死亡率有共识，但**精确百分比因基数/口径不同而异**（kernel 自身 5-7 万、60% 与 storyboard「70%」并存）。量级成立，精确比率为估计，建议口径统一 | ⚠️downgrade-wording |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#14]** 文献3：「Anna 在《Alexiad》里写：『Bohemond 是我**这一辈子见过最帅的男人**——6 英尺多高，金发碧眼——但他笑的时候**眼睛冷得像狼**——我父亲一看到他就警觉。』」
   - 问题：**假引证（最高优先 — 命中任务点名的事故类型）**。这段以**引号 + "她在《Alexiad》里写"**呈现，读者会当成 Anna 原话。但《Alexiad》真实描写是：身高高出最高者近一肘、浅色短发剃须、**蓝眼「透出其精神与威严」**、「见之令人钦佩，闻名令人生畏」。**原文从无「最帅」「眼冷如狼」**——「冷如狼」是 storyboard 把 Bohemond 塑成「狼」的母题（`alexios-n4`「我把这只狼送过海」）回灌进 Anna 之口。
   - 建议：**要么**去掉引号、改为概括（「Anna 笔下的 Bohemond 身材高大、浅发蓝眼，令她父亲一见就警觉」）；**要么**换用 Anna 真实可引的措辞（蓝眼透出精神威严 / 见之钦佩闻名生畏）。绝不可让演绎句冒充《Alexiad》原引。

2. **[#12]** `alexios-n1`：「1094 年 12 月一个夜里…我手里那支羽毛笔…一笔下去，要写给…Urban II…我写了我真正想要的：**3 千个专业兵**…」
   - 问题：**伪造私人书信场景（命中任务点名的事故类型）**。史实是 **1095 年 3 月 Piacenza 教廷会议派使团口头求援**（kernel §3 本身写对了）。学界明确指出归到 Alexios 名下的**私人书信**真伪根基薄弱。storyboard 把它戏剧化成「烛下亲笔信 + 紫墨天鹅羽 + 逐段内容」，且**全节无任何「这是演绎」标注**——与同 lens 后面 `alexios-n8`/`n9` 临终独白的优秀自标（「《Alexiad》没有完整记下来…这一段是这一遍让你听见」）形成反差。
   - 建议：①最稳：在 `alexios-n1` 加一句 anti-fab 括号，明示「求援的史实形式是 1095 年 Piacenza 使团；这封『信』是把那次求援演成第一人称场景」。②或把「写信」改为内心独白/筹划口吻，淡化「亲笔信物证」感。引语化的「3000」专业兵随之软化为「几千」（见 #13）。

3. **[#8]** `roger-n7`：cn「血及马腹（…我们的修士 Raymond of Aguilers 后来用这 5 个字描述）」/ en「blood up to a horse's belly… and it was not just a phrase」
   - 问题：**引语误译 + 字面化（重点 C 引语风险）**。Raymond of Aguilers 原文 *usque ad frenos equorum* = 「至马**勒/膝**」，**不是「马腹」**；更关键，这句**直接借自《启示录》**，学界视为**末世/宗教净化的修辞意象，而非字面目击的血深测量**。文中既译走样（腹 vs 勒/膝），又用「这不是夸张 / not just a phrase」**反向断言其字面为真**，恰好抹掉了它是 Revelation 借喻这一要点。
   - 建议：①把「马腹」校回「马勒/马膝」；②删掉「这不是夸张」式的字面背书，可改为「我们的修士 Raymond of Aguilers 借《启示录》的话形容那天的血——这句话后来被反复引用」。保留情绪力度，去掉「字面统计」暗示。

4. **[#13]** `alexios-n1`：「**3 千个专业兵**」（钉死精确数）
   - 问题：**数字精确度偏高**。主流史料只说「some mercenary forces / 几千专业兵」，kernel §3 用「几千」是稳的；storyboard 钉到「3000」是合理推断但非史载确数，且与 #12 的伪信场景叠加放大「精确史实感」。
   - 建议：与 #12 一并处理——改「几千专业兵」即可。低-中优先级。

5. **[#28]** 死亡率口径不一：kernel「约 5-7 万出发 / 约 60% 死」 vs `roger-n10`「70% 死在路上」。
   - 问题：**同 topic 内数字口径不统一**。高死亡率有共识，但 60% / 70% 并存，且基数（出发总数 vs 战斗人员）随处不同。
   - 建议：统一为一个口径（如「约 5-7 万出发、过半数死在路上」），避免学生记到互相打架的精确比率。低优先级。

6. **[#10]** `alexios-n2`：「我 14 岁那年——1071」「24 岁政变上位」。
   - 问题：**年龄 off-by-one**。生约 1056：1071 应为约 15 岁、1081 加冕约 25 岁。
   - 建议：可改「约 15 岁」「25 岁」，或保留但接受±1 容差。极低优先级（生年本身约值）。

7. **[#9 内细节]** `roger-n9`/kernel §4：Saladin 1187 赎金「儿童 1 dinar」。
   - 问题：**轻微数字差**。主流多记男 10 / 女 5 / **童 2** dinar；文中作「童 1」。
   - 建议：可上修为「童 2」贴主流。极低优先级（不影响「未屠城」主结论）。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| **Roger de Toulouse** | `roger-toulouse`（全 12 节）| 虚构南法二线骑士；姓名/年龄(21→25)/家事(射死农户子、当短刀、堂兄 Bertrand、St Saturnin 指骨)/屠城三杀(老人/红头巾妇女/8 岁男孩)/余生梦境均为叙事合成。底层事件(Clermont→Antioch 吃鼠→Maarat 食人→赤足绕城→屠城→分赃)为 documented | ✅ **已透明标注**：代码注释「composite character——所有事都来自 narrative kernel + 一手 chronicle」；lens description 明写「虚构的南法 21 岁二儿子骑士」 |
| **Aisha bint Yusuf** | `aisha-jerusalem`（全 12 节）| 虚构 12 岁穆斯林女孩；姓名/家人(父 Yusuf、母 Layla、弟 Hasan、姨 Khadija、表妹 Fatima)/邻居(亚美尼亚 Sarkis-Hovsep、犹太 Yakov-Esther)/红头巾/无花果树/地窖 3 天/逃 Ascalon/孙女 Yasmin 均为叙事合成。底层(围城断水、Greek fire 烧塔、屠城 3 天、东方基督徒被错杀、Saladin 1187 重夺)为 documented | ✅ **已透明标注**：lens description 明写「虚构的 12 岁穆斯林女孩」；与 Roger lens 的「红头巾」对位为有意设计 |
| **Guillaume de Caen（诺曼底次子）** | narrative §3 普通人视角（cosplay 用，非 storyboard lens）| 虚构诺曼底二儿子；姓名/堂兄 Roland/具体杀戮/晚年神父对话均合成。底层(次子无地、卖田出征、Antioch 食人、屠城、约 60% 死亡)为 documented | ✅ **已透明标注**：narrative 标题及行内标「composite」 |
| **Roger 临终对孙子的话 / Alexios 临终独白 / Alexios 致 Anna 的话** | `roger-n8` / `alexios-n8`·`n9` | 第一人称内心戏/临终语 | ✅ Alexios 段**已显式自标**「《Alexiad》没有完整记下来…这一段是这一遍让你听见」；Roger 段为公开虚构角色，框架内合理 inference |

> **真实历史人物**（非合成，生平骨架未虚构）：Urban II / Bohemond / Godfrey / Alexios I / Anna Komnene / Saladin / Ibn al-Athir / Raymond IV / Stephen of Blois / Peter the Hermit / Firouz / Kilij Arslan。其中 Alexios lens 为第一人称视角，内心戏属 inference 挂在已证事实上——**例外是 `alexios-n1` 的「亲笔信」场景与文献3 的 Bohemond「假引文」**（见 #12 / #14）。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `roger-toulouse`（#1-2,5,8,17-19,25,28）/ `aisha-jerusalem`（#5,9,19-21）/ `alexios`（#10-16,22-24）+ narrative §3 普通人视角 + §5 三文献 deep read（Fulcher / Ibn al-Athir / Anna Komnene）。
- **重点核查结论**：
  - **Alexios lens 引证（任务首要关切）**：发现 **2 条真问题** —— #12「1094 烛下亲笔信」(伪信场景，未标注) + #14 Bohemond「最帅/眼冷如狼」(假引文冒充《Alexiad》原引)。这正是任务点名的「伪造私人日记/书信 + 假引证」事故类型在本 topic 的再现。**卷数核实通过**（《Alexiad》确为 15 卷，无「假卷数」问题）。lens 的临终独白段反而自标极佳，说明作者会标——只是 n1 与文献3 漏标。
  - **引语分层（重点 C）**：真史料(plenary indulgence #2、CEA 式法律链、Ibn al-Athir 段 #7 已自标距事 130 年/数字夸大、Maarat 食人 #18)处理稳健；**待修**为 #8「血及马腹」误译+字面化（Revelation 借喻被当字面）、#14 假引文、#12 伪信。
  - **数字（重点 A）**：屠杀区间 #6、7 万自标偏高 #6、Saladin 赎金 #9、灭佛数 #27 均 verified；轻类为 #10 年龄±1、#13/#28 精确度/口径、#9 童赎金 1 vs 2。
  - **文化对应硬禁**：**全文 0 违规**。grep 14 词禁用表(玉玺/丞相/翰林/朕/卿/江山/凤冠/霞帔/一炷香/科甲/状元/榜眼/探花/金銮殿)+扩展词(龙袍/尚书/太监/衙门/圣旨/奏折)均无命中（唯一匹配是代码注释里的禁用表定义本身）。北宋对照(#26)方向是「中国制度」对照欧洲，未把中国词套到中东/欧洲，安全。
  - **合成角色**：Roger / Aisha / Guillaume 三个 composite **全部透明标注到位**（代码注释 + lens description + 红头巾对位设计），符合 §1.3 dark-topic 红线。
- **用到的外部核实来源**：Wikipedia（Council of Clermont / Siege of Jerusalem 1099 / Massacre of Jerusalem 1099 / Siege of Jerusalem 1187 / Alexiad / Anna Komnene / Bohemond I / Alexios I Komnenos / Siege of Ma'arra / Raymond of Aguilers）、Britannica（Council of Clermont / Alexius I / Crusades-siege of Jerusalem）、Cambridge《Rewriting the First Crusade》(Frankopan，Alexios 书信真伪)、Conor Kostick（伤亡数）、History.org.uk / Simon John（1099 capture）、Medievalists.net（cannibalism / Anna Komnene）。
- **总评**：史实**骨架稳健**——所有日期(1095/11/27、1099/07/15、1099/07/29、1187/10/02、1204)、法律/神学创新链(plenary indulgence→Luther)、Saladin 未屠城对照、三方一手史料(Fulcher/Ibn al-Athir/Anna)分层、屠杀区间(3000-10000 + 7 万自标偏高)、Maarat 食人、《Alexiad》15 卷、灭佛数均经权威核实通过；**0 文化禁用违规**；3 个 composite 全透明。**核心待修是 lens 引证层的 3 条**：#14（假引文冒充《Alexiad》原引，最高优先）、#12（伪信场景未标注）、#8（「血及马腹」误译 + 字面化）。**建议先处理 #14 / #12 / #8 再正式上线**（其余 4 条为低优先级数字/口径微调）。无 `needs-source`（无悬空高风险事实）。
