# 大宪章 · Magna Carta 1215 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    magna-carta-1215
生成日期:    2026-05-23
来源文件:    lib/history-storyboards/magna-carta-1215.js（3 lens: king-john / stephen-langton / tom-villein）+ lib/history-narratives/magna-carta-1215.md
claim 总数:  28
🚩 红旗数:   5（需创始人审）
背景:        本 topic 已上线、过 4-agent review，但从未做 Fact Ledger；此为上线后补做，按统一标准再核一遍。
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
| 1 | 「1215 年 6 月 15 日，Runnymede 草地，King John 盖王室蜡封印 / Great Seal」（kernel §1·§4；`king-john-n1`/`n7`；`stephen-langton-n1`；`tom-villein-n1`）| date | encyclopedia | 1215.6.15 Runnymede（Thames 边、Windsor 与 Staines 之间）盖 great seal，权威一致。**国王是「盖印 sealed」非「签字 signed」——storyboard/kernel 已正确强调（kernel §4.6/536-545，hook 节点反复写「盖印」非「签字」）** | ✅verified |
| 2 | 「文件 63 条，约 3500 拉丁文字，拉丁全名 Magna Carta Libertatum」（kernel §1·§4.6/545；`stephen-langton-n1`/`n4`）| number | encyclopedia | 1215 原版确为 63 clause；全名 Magna Carta Libertatum，确证。「3500 字」为常见概数，可接受 | ✅verified |
| 3 | 「Clause 39 拉丁原文 Nullus liber homo capiatur... per legale judicium parium suorum vel per legem terrae」（kernel §5/747-751；`king-john-n6`；`stephen-langton-n5`）| quote | primary | 对 Magna Carta Project / National Archives 原文逐句核对，拉丁文与中译均准确。**这是真一手史料原文，分层正确** | ✅verified |
| 4 | 「Clause 39 原本不在贵族 49 条原案，最后 5 天加入；Stephen Langton 的作用学界有争议」（kernel §3 Langton 段·§9；`stephen-langton-n5`/536-537）| causal / motive | inference | Holt 1992 等指出 Clause 39 加入方式可见 Langton 影响但**无一手孤证**断言其为唯一作者。**kernel 与 storyboard 均已显式标注「学界仍有争议」「我不会说这一条只属于我」——透明处理到位** | ✅verified |
| 5 | 「King John 生于 1166.12.24（圣诞前夜，牛津），Henry II 第 5 子，绰号 John Lackland」（kernel §3/108；`king-john-n2`）| date | encyclopedia | 1166.12.24 生、Henry II 第五子、Lackland 绰号，确证。kernel/storyboard 已把「Lackland 是父亲自嘲玩笑」标为「学界仍有争议」——稳妥 | ✅verified |
| 6 | 「King John 1216.10.18 夜死于 Newark Castle，痢疾 dysentery，活 49 岁」（kernel §3/204·§4/633；`king-john-n8`）| date / number | encyclopedia | 死因痢疾、Newark Castle、King's Lynn 染病，确证。**日期：主流权威（Wikipedia/Britannica）多记 1216.10.19；narrative 记「10月18日夜里」。差 1 天，属「18 日夜入 19 日凌晨」可调和范围，但与主流通用日期不完全一致** | ⚠️downgrade-wording |
| 7 | 「1204 丢 Normandy + Anjou/Maine/Touraine；起于抢 Hugh of Lusignan 未婚妻 Isabella；法王 Philip 借口没收」（kernel §3/130-136；`king-john-n3`）| causal / date | encyclopedia | Isabella of Angoulême 婚姻触发、Philip II 宣布领地 forfeit、1204 Rouen 6/24 投降，确证。连带丢 Anjou/Maine/Touraine 准确 | ✅verified |
| 8 | 「侄子 Arthur of Brittany（16 岁）1203 从 Rouen 失踪，3 种编年史死法（Coggeshall 醉杀 / Margam 抛尸塞纳河 / 饿死），无人能证」（`king-john-n3`/93-99）| number / motive | encyclopedia | Arthur 1203 失踪、John 广受怀疑、当代编年史确有多种说法（含 drunken rage 亲手杀+抛尸 Seine）。**storyboard 用「3 种说法 / 没人能证实」分层——处理诚实** | ✅verified |
| 9 | 「1208 教皇 interdict 全英国（婚葬洗礼停）6 年 + 1209 excommunicate John 个人；1213.5.15 John 在 Dover 献国成 papal fief + 年贡 1000 银马克」（kernel §3/143-158·§4；`king-john-n4`；`stephen-langton-n3`）| date / number | encyclopedia | interdict 1208.3 起、excommunication 1209.11、1213 献国为 papal vassal、年贡 1000 marks，确证 | ✅verified |
| 10 | 「1214.7.27 Bouvines 战役，反法联盟（神圣罗马皇帝 Otto IV + Flanders + Longespée）被 Philip II 一下午打散；John 自己在南线 Poitou 没去前线」（kernel §3/160-166；`king-john-n5`；`stephen-langton-n4`）| date / causal | encyclopedia | 1214.7.27 Bouvines、Philip II 决定性胜、Otto IV 溃逃、Longespée 被俘、John 在南线（La Roche-aux-Moines），确证。**kernel §3/166「同盟国损失 9000 人」storyboard 已不再复述具体数字（storyboard 只说「彻底崩溃」）——好** | ✅verified |
| 11 | 「scutage 盾牌税：Richard 10 年收 3 次 → John 17 年收 11 次，频率翻 3 倍」（kernel §3/174）| number | encyclopedia | scutage 频率激增是 John 苛税标志，11 次/17 年广见于学界。**此具体数字仅出现在 narrative kernel，3 个 lens storyboard 均未复述**——降低了对学生的暴露风险 | ✅verified |
| 12 | 「Stephen Langton 约 1150 生 Lincolnshire；巴黎大学约 30 年；定《圣经》章 chapter 划分；1207 任 Canterbury 大主教，被 John 拒入境，流亡至 1213」（kernel §3/220-263；`stephen-langton-n1`/`n2`）| date / motive | encyclopedia | 巴黎学者、1207.6.17 受任、流亡至 1213、圣经「章」划分归 Langton，确证。**章划分时间：storyboard 记「1190 年代前后」，主流学界多系于 1200-1205（约 1204-5）。略偏早，但部分来源亦称 1190s，处可证范围** | ✅verified |
| 13 | 「《圣经》『节 verses』划分由巴黎印刷商 Robert Estienne 1551 完成」（`stephen-langton-n2`/444）| date / quote | encyclopedia | Estienne 1551 在 Langton 章框架内加节号（NT），确证。**storyboard 把『章=Langton / 节=Estienne 1551』分层标注——精确，避免常见混淆** | ✅verified |
| 14 | 「Stephen Langton 1228.7.9 死于 Slindon 庄园，78 岁」（kernel §3/306·§6；`stephen-langton-n7`/592）| date / number | encyclopedia | 1228.7.9 卒于 Slindon，确证。「78 岁」依约 1150 生推算，合理 | ✅verified |
| 15 | 「Stephen Langton 与 Innocent III 在巴黎是否真『同窗』，史家仍争（一手证据不足）」（`stephen-langton-n2`/446）| causal | inference | storyboard 已主动对冲为「我们是否真『同窗』，今天的史家仍在争」。**自带 caveat，处理诚实**——传统说法称同窗/同代，但缺硬证 | ✅verified |
| 16 | 「教皇 Innocent III 1215.8.24 签 papal bull 宣布 Magna Carta『无效永远无效』+ 暂停 Langton 大主教职」（kernel §4/573-590；`king-john-n8`/229；`stephen-langton-n6`/563）| date / quote | primary | bull 1215.8.24 签发（大英图书馆存原件）、措辞「null and void... for ever」、理由「extorted by violence and fear」、Langton 同时被停职，确证。**6/15 盖印→9 月底到英国失效＝活约 10 周，kernel §4/587 算法准确** | ✅verified |
| 17 | 「Innocent III 1216.7.16 病逝，比 John（10 月）早约 3 个月死」（kernel §4/661）| date | encyclopedia | Innocent III 1216.7.16 卒于 Perugia，早 John 约 3 个月，确证。**此精确日期仅在 narrative kernel；storyboard 未复述**（king-john-n8 只说「教皇 8 月废了」）。新教皇 Honorius III 态度温和，确证 | ✅verified |
| 18 | 「First Barons' War：教皇废宪后贵族请法国王子 Louis 来当英王；1216.5 Louis 在 Kent 登陆，约半数英格兰贵族倒戈」（kernel §4/592-605；`king-john-n8`；`stephen-langton-n6`）| causal / number | encyclopedia | First Barons' War、邀 Louis、1216.5 登陆、约半贵族倒戈，确证 | ✅verified |
| 19 | 「William Marshal 1216.11 在 Gloucester 以 9 岁 Henry III 名义重发 Magna Carta，删 Clause 61；1217+1225 续重发」（kernel §3 Marshal 段·§4/653-657；`king-john-n8`/237；`stephen-langton-n6`/565）| date / causal | encyclopedia | 1216.11.12 重发、删 security clause（61）、1217 再发、1225 Henry III 亲政版（约 37 条），确证。**注意名字陷阱见备注：列入 1215 之 25 baron 的是「William Marshal junior（子）」，摄政重发的是其父老 Marshal；narrative 正确把摄政 Marshal 排除在 25 之外（kernel §3/334）** | ✅verified |
| 20 | 「William Marshal 童年（约 5-6 岁）被 King Stephen 押作人质、扬言投石机（trebuchet）抛进城；父答『我还有铁锤和铁砧可以再打几个儿子』；一生服 4-5 王；锦标赛赢 500 对手」（kernel §3/318-349）| quote / number | encyclopedia | trebuchet/pierrière 人质事件、「hammer and anvil」父答、服 5 王、赢约 500 骑士，均见权威（含 Histoire de Guillaume le Maréchal 传统）。**这些细节仅在 narrative kernel，3 个 lens storyboard 均未用**——对学生零暴露 | ✅verified |
| 21 | 「Marshal 临终遗言 I have lived 70 years. I served four kings. I leave you nothing but my honor」（kernel §3/349）| quote | dramatization | 措辞为**英译/概括式遗言**，非逐字一手拉丁/法文档案。kernel 直接当引文排版。**但此句仅在 narrative kernel，未进任何 lens storyboard**——学生不会读到 → 暴露面为零，风险极低（仅记录在案） | ⚠️downgrade-wording |
| 22 | 「Clause 61 = 25 baron 监督委员会：4 人警告→40 天不改→全体可扣国王城堡土地，是封建欧洲第一次写下对国王的合法武装反抗权」（kernel §3/408-420·§5/862-879；`king-john`/`stephen-langton` 多节）| absolute | encyclopedia | security clause 内容（25 baron、4 人、扣 castles/lands）确证；「1215 最激进一条」「合法反抗权雏形」为学界常见表述，「第一次写在纸上」语气强但属可辩护的史学概括 | ✅verified |
| 23 | 「领头 Robert FitzWalter 自封『上帝和神圣教会军队的指挥官』；起源是私仇（1212 刺 John 阴谋 / 1213 城堡被拆 / 1214 回国记仇），非为公共利益」（kernel §3/368-386）| quote / motive | encyclopedia | FitzWalter 自称「Marshal of the Army of God」、5/5 Brackley 被选为首领、与 John 私怨深，确证。「贵族为自己请命非为人民」是修正派标准教学点。**此段仅在 narrative kernel，未进 lens storyboard** | ✅verified |
| 24 | 「1215 年英格兰约 90% 是 serf/villein 农奴，只 10% free man；Clause 39『liber homo』只覆盖约 10%」（kernel §2/83·§3/437·§5/788·§10/1069；`tom-villein-n2`/760-768 反复说「九成是农奴，一成 free man」；`king-john`/`stephen-langton` synthesis 用「10-20%」）| number / representativeness | encyclopedia | **核心高风险数字**。13 世纪学界数据更复杂：1300-49 约 50-52% 田由 serf 持、48-50% 由 freemen 持；乡村农民总占人口约 75-90%，但其中相当比例是**自由农 freeholder**，非全为「bonded serf」。**「90% 农奴 / free man 只 10%」属上限偏强表述**。kernel/Clause 39 段已用「约 10%」「10-20%」对冲，synthesis 节点也用「10-20%」——但 Tom lens 多个故事节点（n2）**直白说「九成是农奴」**，措辞过强 | ⚠️downgrade-wording |
| 25 | 「The Wash 沼泽 1216.10 沉王室宝藏（加冕器物/银箱），至今未找到；附 caveat：传说源自 13 世纪修士 Roger of Wendover（写于事件 30+ 年后），现代学界倾向有夸大」（kernel §3/183-200·§4/609-625；`king-john-n8`/229）| number / rhetoric | inference | **教学处理范本**：Wikipedia/History Today/Historical Ragbag 均证此故事主要源自 Roger of Wendover（St Albans 修士，以夸张著称），且 Henry III 10 天后加冕仍有 regalia → 可能没丢多少。**kernel 与 storyboard 均显式标注「⚠️学界对这一传说仍在争论 / 可能夸大」——分层透明，处理优秀** | ✅verified |
| 26 | 「『Crown Jewels』是 1660 Charles II 复辟后才铸；1216 这套正式名称是 regalia」（kernel §3/191）| absolute / date | encyclopedia | 现存英国 Crown Jewels 多为 1660 复辟后重制（旧 regalia 1649 内战后被毁/熔），1216 用 regalia 一词更准。**kernel 主动加此 caveat 防止时代错置**——精确。仅在 narrative，未进 storyboard | ✅verified |
| 27 | 「唐《永徽律》651 颁、653 长孙无忌加注疏成《唐律疏议》；12 卷 502 条，管皇族也管平民，朝鲜/日本/越南法律皆派生，当时亚洲最系统法典；比 Magna Carta 早 564 年」（kernel §8；`king-john-n11`/338；`tom-villein-n7`）| date / number / absolute | encyclopedia | 651 Yonghui 律（500 条/12 章）→ 653 Yonghui 律疏（502 条）、长孙无忌主修、为东亚最重要法典且日韩越派生，确证。1215−651=564 年准确。**文化对应处理：用「唐律/永徽律/律疏/长孙无忌」中国本词，未误用任何错位概念，对照框架（成文法不同命运）是软判断非道德裁判——合规** | ✅verified |
| 28 | 「1297 Edward I 把 Magna Carta 写入英格兰法典；今仍有效的是 1297 版 Clause 1/9/29（即原 1215 Clause 39），2024 英国法庭仍可引 Clause 29」（kernel §4/695-704·§10/1072；`king-john-n9`；`stephen-langton-n7`）| date / absolute | encyclopedia | 1297「Confirmation of the Charters」入法典、现行英国法仍保留 1297 版第 1/9/29 三条，确证。**kernel §10/1072 误解表已自纠「1215 版从来没完整生效过；现行是 1297 版 1/9/29」——准确** | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#24]** Tom lens `tom-villein-n2`：「1215 年，英格兰大概九成人是农奴（villein），只有一成是 free man（自由人）。」（n2 反复，n7 也说「约 90% 的人是农奴或乡村劳动者」）
   - 问题：**核心高风险数字（重点 A）**。13 世纪学界数据是：乡村人口确占总人口约 75-90%，但其中**相当比例是自由农 freeholder 而非 bonded serf**；按田产，1300-49 约 serf 50-52% / freemen 48-50%。「九成是农奴、一成 free man」把「乡村人口」与「不自由农奴」混为一谈，是**上限偏强**。
   - 缓解：narrative 本身在 Clause 39 段（§5/788）已用「约 10%」、误解表与 3 个 synthesis 节点（king-john-n10/stephen-langton-n8/tom-villein-n6）均用更稳的「10-20%」。问题集中在 **Tom story 节点（n2/n7）的直白「九成农奴」**。
   - 建议：把 Tom n2/n7 的「九成是农奴、一成 free man」软化为「**英格兰大多数人是不自由的农民或乡村劳动者，真正的『自由人』只是少数（约一两成）**」，与同 topic synthesis 已用的「10-20%」口径统一。情绪与画面感不受影响，只去掉「90%=农奴」的伪精确。**中优先级**（Tom 整条 lens 的立论基点就是「被排除的 90%」，所以这个数字承重，值得校准）。

2. **[#6]** narrative §3/204 + §4/633；`king-john-n8`：「10 月 18 日夜里他死。」「1216 年 10 月 18 日，Newark 一个城堡。」
   - 问题：**日期与主流通用值差 1 天**。Wikipedia/Britannica 等主流权威多记 John 卒于 **1216.10.19**。narrative 记「10 月 18 日夜里」。「18 日夜入 19 日凌晨」是常见调和，但学生若与教材/维基对题会看到 19 日。
   - 建议：可改为「**10 月 18 日深夜至 19 日凌晨**」或直接采用主流的「**10 月 19 日**」，避免与 AP/教材常用日期对不上。**低优先级**（差 1 天、且属可调和，但既是 date 类、又面向应试，建议对齐主流）。

3. **[#21]** narrative kernel §3/349：William Marshal 遗言「I have lived 70 years. I served four kings. I leave you nothing but my honor.」
   - 问题：**引语分层（重点 C）**。此句作为**英译/概括式遗言**直接当引文排版，非逐字一手史料原文（一手是古法文 Histoire de Guillaume le Maréchal，措辞经转译概括）。
   - 缓解：**仅出现在 narrative kernel，未进任何 lens storyboard**——学生在产品里读不到，暴露面为零。
   - 建议：若日后把此句搬进 storyboard/quiz，需标为「大意 / 后世传述」而非确证逐字引文。**低优先级（仅记录在案，当前不暴露给用户）**。

4. **[#12]** `stephen-langton-n2`/444：「今天你打开任何版本的《圣经》……那套**章**（chapter divisions）的划分，就是我在 **1190 年代前后**定的。」
   - 问题：**时间略偏早（重点 A 轻类）**。主流学界多把 Langton 的章划分系于 **1200-1205（约 1204-5）**，在他巴黎教学晚期。部分来源称 1190s，但通用值是 1200s 初。
   - 建议：可微调为「**约 1200 年前后 / 13 世纪初**」更贴主流。**极低优先级**（在可证范围内，非硬错）。

5. **[#28 / #22 / #25 系绝对表述群——非红旗，仅提醒]**
   - 「封建欧洲第一次写在纸上的对国王的合法武装反抗权」(#22)、「没有任何文件像 Magna Carta 一样……保留 700 年前原文不变，世界法律史的奇观」(kernel §4/704)、「没有任何文件在生日还能被全国元首站在原地纪念」(kernel §4/735) —— 这些是**强 absolute / rhetoric**。
   - 评估：均为**可辩护的史学常见表述**，且 narrative 整体基调是「思考不下结论 + 多视角」，强修辞嵌在叙事高潮处而非当考点。**不进红旗**，仅提醒：若未来想更保守，可在最强的几句前加「可以说是 / 几乎」之类软化词。**不需处理**。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| **Tom（13 岁农奴男孩）** | `tom-villein`（全 8 节）+ narrative §3/439-456 | **完全虚构人物**：姓名 Tom、年龄 13、Mowbray 庄园、河边放羊、躲树后看签约、15 岁逃镇、35 岁开磨坊、律师来访听到 Article 39——**全部为叙事桥接虚构**；底层农奴制度（labor service、不能离庄、不能告状、不识字、年贡）与「Clause 39 当时不覆盖农奴 / 200 年后子孙才慢慢被覆盖」为 documented | ✅ **已透明标注（多处冗余）**：lens description 直写「13 岁农奴男孩」；`tom-villein-n1` 结尾「这是我的故事，也是 1215 年英格兰九成人的故事」；narrative §3/439 标题直接写「**一个无名的农奴男孩 Tom（虚构桥接，13 岁）**」+ §3/453 caveat「**Tom 的故事你在任何史书里都找不到——他不识字，没有人给他写传记**」；附录 C 人物表标「**Tom（虚构农奴男孩）**」。**符合 dark-topic/composite 红线（合成必须标明）** |

> 其余出场人物——**King John / Stephen Langton / William Marshal / Robert FitzWalter / Pope Innocent III / Henry III / Edward I / Edward Coke / Thomas Jefferson / Philip II / Otto IV / William Longespée / Hugh of Lusignan / Isabella of Angoulême / Arthur of Brittany / Wat Tyler / John Ball / Eleanor of Aquitaine——均为真实历史人物**，非合成。King John 与 Stephen Langton 两 lens 为第一人称视角叙事（内心戏/独白属合理 inference，挂在已证事实骨架上，未虚构其生平主线）。
> **文化对应自检（非中国史）**：Magna Carta 主线是英国史，全程使用 King/baron/charter/seal/regalia 等英国本词，**未误用任何中国概念词（玉玺/丞相/圣旨/科举等）**。唯一中国元素是 §8「同时代南宋对照」，该处正确使用唐律/永徽律/律疏/长孙无忌/科举/乡约/义庄等中国本词，且作为**软判断对照框架**（两种约束权力路径各有代价，明示「没有哪条更先进」），非道德裁判——合规。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 ——
  - `king-john`（claim #1,3,5,6,7,8,9,10,11,16,17,18,19,20,21,26）含 perpetrator-loser 第一人称重点节点；
  - `stephen-langton`（#1,2,3,4,9,10,12,13,14,15,16,17,19）含起草人/Clause 39 重点节点；
  - `tom-villein`（#1,24,27,28）含 invisible-commoner composite 重点节点（N2 = 90% 数字承重点）。
- **8 类优先级覆盖**：date(#1,5,6,7,9,10,12,13,14,16,17,19,27,28) / number(#2,8,11,14,20,24,27) / quote(#3,16,20,21,23) / causal(#4,7,10,18,19,22) / motive(#4,8,12,23) / representativeness(#24) / absolute(#22,26,27,28) / rhetoric(#25)。
- **重点核查结论**：
  - **重点 A（数字）**：主红旗 #24「90% 农奴」⚠️降级（Tom story 节点用上限值，synthesis 已用 10-20% 更稳）；#6 死亡日期差 1 天、#12 章划分偏早为轻类。
  - **重点 B（代表性/composite）**：Tom 透明标注**冗余到位**（lens desc + narrative 标题 + 节点 caveat + 附录 C 四重标注），无红旗；唯一承重数字 #24 已单列。
  - **重点 C（引语）**：真一手史料（Clause 39 拉丁原文 #3、papal bull「null and void」#16）与演绎/概括（Marshal 遗言 #21、FitzWalter 自称 #23）需分层；#3/#16 是 verified primary，#21 仅在 kernel 未暴露给用户、已记录。**Clause 39 的引语处理是全 topic 最规范的一处**（拉丁+中译+「free man 只覆盖约 10%」caveat 同框）。
  - **学界争议自带 caveat（加分项）**：Langton 起草角色 #4、Langton/Innocent 同窗 #15、Lackland 绰号由来 #5、The Wash 丢宝传说 #25、Crown Jewels vs regalia 时代错置 #26、1215 版从未完整生效 #28——narrative/storyboard 均**主动加 ⚠️ 标注**，这是本 topic 史实成熟度高的标志。
- **用到的外部核实来源**：National Archives（Magna Carta 1215 原件/sealed-not-signed）、Magna Carta Project (UEA) / magnacartaresearch.org（Clause 39 拉丁原文）、British Library blog（papal bull 1215.8.24 annulment + The Wash regalia 存疑）、Wikipedia（John, King of England / Stephen Langton / Battle of Bouvines / First Barons' War / Tang Code / Robert Estienne / Lost jewels of John / William Marshal）、Britannica（Magna Carta / Battle of Bouvines）、magnacarta800th.com（25 barons / FitzWalter / Langton 传记 / 1215 sealing timeline）、Tyndale House（章节 vs 节号 Langton/Estienne）、chinaknowledge.de（Tanglü Shuyi 651/653 + 502 条）、History Today / Historical Ragbag（The Wash 学界质疑）。
- **总评**：本 topic 史实骨架**非常稳健**——全部关键日期（1215.6.15 / 1204 / 1208 / 1213 / 1214.7.27 / 1215.8.24 / 1216.11 / 1297）、法律条款（Clause 39 拉丁原文、Clause 61 security clause、1297 版 1/9/29 现行有效）、人物时间线（John 生卒、Langton 流亡 6/7 年、Marshal 摄政重发）、跨文化对照（唐律 651/653/502 条）均经权威核实通过，且**多处主动自带学界争议 caveat**（远超一般 topic）。无 `needs-source`（无悬空高风险事实），无与权威**正面冲突**的硬错。5 条红旗中仅 **#24「90% 农奴」**（Tom lens 立论承重数字、值得对齐 synthesis 已用的 10-20% 口径）属应处理项；#6（死亡差 1 天，建议对齐主流 10/19）次之；#21/#12 为低/极低优先级且 #21 当前不暴露给用户。**可保持上线状态；建议在下一次内容迭代时校准 #24 与 #6 即可。**
