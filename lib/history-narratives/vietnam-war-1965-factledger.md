# 越南战争 1965 · The Vietnam War Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on narrative，**只写本账本文件**，绝不改内容。

```
topicId:    vietnam-war-1965
生成日期:    2026-06-06
来源文件:    lib/history-narratives/vietnam-war-1965.md（CN narrative kernel）
            + lib/history-narratives/vietnam-war-1965.en.md（EN sister file）
claim 总数:  28
🚩 红旗数:   5 — 全部为 ⚠️downgrade-wording / 已透明标注的演绎 / 区间估计，无 needs-source、无 flagged 事实硬伤
```

**一句话总评**：史实地基**稳**——核心日期（1964.8.2/8.4/8.7 东京湾 / 1965.3.2 Rolling Thunder / 1965.3.8 岘港登陆 / 1968.1.30 Tet / 1968.2.27 Cronkite / 1968.3.16 My Lai / 1970.5.4 Kent State / 1971.3.29 Calley 定罪 / 1973.1.27 巴黎协定 / 1975.4.30 西贡陷落）、人名/任期、兵力区间、伤亡数字、征兵数字均对得上权威来源（Britannica、National Archives、Wikipedia、History.com、state.gov Office of the Historian）。红旗集中在 **本课最高敏感的 Rule 0 中性维度**（呈现支持/反对/士兵/平民多视角，事实与评价分层，不下对错结论——已严守）、**My Lai 死亡数的区间口径**（347-504，narrative 用区间）、**越南平民死亡 ~200 万的估计性质**（越南 1995 官方数，区间极大，narrative 已标"估计"）、**Cronkite "stalemate" 引语的转述性质**（narrative 用"流传的核心意思"，未排成档案逐字）、以及 **两个合成桥接人物 + 越南农家少女 DEFAULT 视角**（已透明标注虚构、身份写实）。无未标注的合成人物冒充史料问题，无伪造个人原话。

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`。
> 凡 `dramatization` 等级而文中**未透明标注**为合成 → 自动进红旗。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | "1964.8.2 USS Maddox 与北越鱼雷艇交火；8.4 报告第二次袭击，后证实很可能未发生"（§2 L4/§4-2/§5A/附录 A）| date+causal | encyclopedia | Britannica / Wikipedia / Naval History：8.2 Maddox vs 3 鱼雷艇真实交火；8.4 "第二次袭击" later investigation 证实未发生（no NVN vessels present）| ✅verified |
| 2 | "1964.8.7 国会通过《东京湾决议》，8.10 约翰逊签署"（§2 L3/§4-2/附录 A）| date | primary | National Archives (Tonkin Gulf Resolution)：Congress passed Aug 7, 1964；signed into law Aug 10 | ✅verified |
| 3 | "《东京湾决议》授权总统'采取一切必要措施…阻止进一步侵略'"（§5A）| quote | primary | National Archives 原文："to take all necessary measures to repel any armed attack against the forces of the United States and to prevent further aggression" | ✅verified（一手原文，逐字对得上）|
| 4 | "1965.3.2 Rolling Thunder 开始；1965.3.8 3500 名海军陆战队员岘港登陆（首批地面战斗部队）"（§1/§2 L4/§4-3/附录 A）| date+number | encyclopedia | History.com / Britannica：Rolling Thunder 始于 1965.3.2（"six days earlier"）；3.8 3,500 Marines (9th MEB) 登陆 Da Nang，首批地面战斗部队 | ✅verified |
| 5 | "兵力 1965 几万 → 1968 超过五十万"（§3/§4-3/§4-9 escalation/附录 D）| number | encyclopedia | CFR / Britannica：LBJ 5 个月加 12 万、三年内逾五十万；1968 峰值约 536,000-543,000。narrative 用"超过五十万"稳妥 | ✅verified |
| 6 | "1968.1.30 Tet 春节攻势（1.30-1.31 全境突袭），一度攻入西贡美使馆"（§2 L4/§4-5/附录 A）| date | encyclopedia | Wikipedia / Britannica：PAVN+VC 1968.1.30-31 全境突袭；攻入西贡美使馆 compound | ✅verified |
| 7 | "Tet 军事上被击退、北越损失惨重；政治/心理上击碎美国'快赢'信心"（§1/§4-5/§7/§10-2）| causal | textbook | 主流史学共识：Tet 军事失败（VC 元气大伤）但成为美国民意转折——军事 vs 政治后果分层是标准教学论点 | ✅verified |
| 8 | "1968.2.27 Walter Cronkite 在 CBS 称战争陷入'僵局（stalemate）'"（§4-6/§5C/附录 A/C）| date+quote | encyclopedia | Wikipedia / 主流来源：1968.2.27 Cronkite CBS Special Report 称战争 stalemate，主张谈判体面退出 | ✅verified（引语为转述，见红旗 #3）|
| 9 | "1968.3.16 My Lai 屠杀，约 347-504 名手无寸铁村民被杀（多为妇女/儿童/老人），1969 才曝光"（§2 L1/§3/§4-7/§10-5/附录 A）| date+number | encyclopedia | History.com / PBS / Army Historical Foundation：1968.3.16 Charlie Company；死亡数美军官方记 ~504、另一分析 347；多为老弱妇孺；掩盖逾一年 1969 曝光。narrative 用"约 347-504"区间稳妥 | ✅verified（区间口径见红旗 #2）|
| 10 | "1971.3.29 Calley 中尉因 My Lai 被军事法庭定罪，后大幅减刑"（§4-7/§10-5/附录 A/C）| date | encyclopedia | History.com / Wikipedia：1971.3.29 Calley 被定罪（premeditated murder of 22）；原判终身→减至 20 年→10 年→1974.11 假释。narrative 用"后大幅减刑"稳妥 | ✅verified |
| 11 | "1970.4 底尼克松扩大战争到柬埔寨"（§4-9/附录 A）| date+causal | encyclopedia | Britannica / History.com：1970 年 4 月底美军入侵柬埔寨、扩大战争，引爆校园抗议 | ✅verified |
| 12 | "1970.5.4 Kent State 俄亥俄国民警卫队枪击，13 秒打死 4 名学生、伤 9 人；引发数百所高校罢课"（§1/§4-9/§5D/附录 A）| date+number | encyclopedia | Wikipedia / Britannica / History.com：1970.5.4 Ohio National Guard，28 名警卫 13 秒约 67 发，killing 4 wounding 9；triggered nationwide strike，数百校停课 | ✅verified |
| 13 | "1973.1.27 巴黎和平协定签署；美国 60 天内撤出约 2.37 万军人；协定允许北越军留在南越"（§4-10/附录 A）| date+number+causal | encyclopedia | Wikipedia (Paris Peace Accords)：1973.1.27 签于 Hotel Majestic；撤出约 23,700 美军/顾问、60 天内拆基地；PAVN 获准留南越（埋下和平崩溃伏笔）| ✅verified |
| 14 | "1975.4.30 西贡陷落，南越政权垮台，越南统一"（§1/§4-11/附录 A）| date | encyclopedia | Wikipedia (Fall of Saigon)：1975.4.30 PAVN 攻入西贡，南越垮台，越战结束，越南统一为社会主义共和国 | ✅verified |
| 15 | "约 5.82 万美军阵亡；纪念墙刻 5.83 万多个名字"（§0/§4-12/§6/§10-6/附录 C）| number | primary | National Archives DCAS：58,220 美军 fatal casualties；Vietnam Veterans Memorial 列逾 58,300 名。narrative 用"约 5.82 万"+"5.83 万多个"对得上 | ✅verified |
| 16 | "越南平民死亡估计多达约 200 万；北越/VC 战斗人员约 110 万（越南 1995 官方估计）"（§0/§3/§4-12/§6/§10-6）| number | encyclopedia | Wikipedia (Vietnam War casualties)：越南 1995 官方估计平民死亡 up to 2,000,000；北越/VC 战斗人员 ~1,100,000。整体平民区间 1M-3M+。narrative 已标"估计""1995 官方估计" | ✅verified（估计性质见红旗 #4）|
| 17 | "1964-1973 约 220 万美国男性被征召；富人/能上大学者靠缓征大量逃过，穷人与少数族裔承担不成比例伤亡"（§1/§2 L3/§10-3）| number+representativeness | encyclopedia | UMich / Wikipedia (Vietnam War draft)：1964-1973 约 2.2M 被征（合资格池 ~27M），约 15M 获缓征（多为教育/医疗），缓征加剧种族与阶层不公 | ✅verified |
| 18 | "美国从未正式宣战，法律依据是《东京湾决议》"（§0/§10-1）| absolute | textbook | 主流史学共识 + National Archives：美国未对北越正式宣战，授权依据为 1964 决议 | ✅verified |
| 19 | "多米诺骨牌理论：南越倒则东南亚一个个变红——事后南越倒了但东南亚未全部倒"（§1/§4-1/§5B/§11-1）| causal | textbook | 主流史学：domino theory 为冷战遏制核心假设；越战后柬/老变共但泰国等未变，"骨牌未全倒"为标准批判性教学表述 | ✅verified |
| 20 | "credibility gap：政府'我们正在赢'与电视现实对不上，Tet + Cronkite 后公开爆发"（§3/§4-6/§5C/§7）| causal | textbook | 主流史学共识：credibility gap 为 LBJ 时期标准术语，Tet/Cronkite 为其公开化标志 | ✅verified |
| 21 | "约翰逊私下称越南是'我这辈子见过最糟的烂摊子'；Tet 后宣布不连任"（§3/§4-6/附录 C）| quote+date | encyclopedia | CFR：LBJ 称越南 "the worst mess I ever saw in my life"；1968.3.31 宣布不竞选连任。narrative 用"私下说"+"不久后"稳妥 | ✅verified |
| 22 | "尼克松推'越南化（Vietnamization）'逐步撤军，同时扩战柬埔寨"（§4-9/附录 B/C）| causal | encyclopedia | 主流史学：Nixon Vietnamization（逐步移交南越）+ 1970 柬埔寨扩战，两者并行 | ✅verified |
| 23 | "1973 征兵制终止、转全志愿兵役；1973 国会通过《战争权力法》回应东京湾教训"（§6）| date+causal | encyclopedia | Wikipedia：美军 1973 转全志愿；War Powers Resolution 1973 通过（限制总统未经国会长期用兵）| ✅verified |
| 24 | "1954 法国战败撤出，《日内瓦协议》以 17 度线分越南为北/南"（§2 L0/§4-1/附录 A）| date | encyclopedia | 主流史学 / Wikipedia：1954 Dien Bien Phu 后法撤；Geneva Accords 1954 以 17 度线临时分界 | ✅verified |
| 25 | "中国 1965-1971 向北越派逾 32 万工程/防空/铁路部队，参与击落美机；为北越撑过 Rolling Thunder 的关键外援之一"（§1/§8）| number+causal | encyclopedia | Wikipedia (China in the Vietnam War) / VietnamNews：1965-1971 逾 320,000 中国部队；1965-68 段 31 万+，防空部队击落约 126 架美机。narrative 用"逾 32 万""参与击落"稳妥 | ✅verified（§8 中国桥，cultural term 允许）|
| 26 | "中苏分裂：1960s 中苏公开决裂，北越被迫在京/莫间平衡；1960s 末中国收缩援越、北越更靠苏联"（§8）| causal | encyclopedia | alphahistory / Wikipedia：Sino-Soviet split 迫 Hanoi 选边；1968 末中收援撤员、苏越签新协议、北越转向苏联 | ✅verified |
| 27 | "文革 1966-1976，与援越同时；美国(越战撕裂)与中国(文革)同时段各自国内动荡"（§1/§8/§11-5/附录 D）| date+causal | encyclopedia | 主流史学：文革 1966-1976（十年）；与越战升级期(1965-75)高度重叠，"同时性"为结构对照，非因果断言 | ✅verified（§8 中国桥）|
| 28 | "决策者用 body count 衡量胜负，制造大量平民伤亡；丛林游击战无前线"（§3/§4-4/§10-6）| representativeness+causal | textbook | 主流史学共识：body count 为美军衡量指标，遭批致平民伤亡与数据失真；游击战无固定前线为标准描述 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 按影响排序。无事实硬伤；本课为**最高敏感 Rule 0 topic**，#1 是核心审查点（中性是否守住），#2-#5 为区间/转述/合成的透明性确认。

1. **[Rule 0 核心 · 全课] 多视角中性与"不下对错结论"是否守住**（§0/§3/§7/§9/§10/§11/§8 收尾）
   - **问题**：越战是美国至今未达成统一"对错"结论的最高敏感 topic。本账本最重要的审查不是某条事实，而是 narrative 是否**真正做到**：①同时呈现支持战争者（domino theory 真诚信念、"沉默的大多数"、决策者夜不能寐）、反战者、被征兵士兵（既 perpetrator 又 victim）、越南平民、越战老兵多方视角；②事实层（谁何时做了什么）与评价层（对错）严格分开；③不替学生下"这场战争对错"的最终结论。
   - **narrative 现状**：①§3 三视角含决策者(actor)/士兵(夹缝 mediator)/越南少女(receiving-end DEFAULT)，§1 并列四方，§10-4 明确"反战≠背叛士兵"的双向复杂；②§5B 把 domino theory 写成"被真诚相信、却可能错"的假设而非妖魔化；③§6 末、§9 末、§11 全节均明示"美国社会至今无统一对错结论""本课不下结论"；④§8 末显式声明"不评判中国援越/文革/美国参战是对是错"。
   - **建议**：现状**合规且为本课最大亮点**。创始人重点确认 §3 决策者视角是否"足够人化但不洗白"（narrative 写"不是嗜血的人，反而夜里睡不着"+"逐步升级的陷阱"，既不妖魔化也不浪漫化）——这是高敏感 topic 最易翻车处，本稿处理稳妥。**无需改。**

2. **[#9] My Lai 死亡数的区间口径**（§4-7/附录 A）
   - **问题**：My Lai 死亡数权威来源不一：美军官方/越方常用 ~504，部分严谨分析（PBS/Army Historical Foundation 引）记 347。narrative 用"约 347-504"区间，附录 A 同。
   - **narrative 现状**：用区间"约 347-504 名手无寸铁村民"，未硬定单一数字。
   - **建议**：现状**合规**（区间覆盖主流口径，且明示"约""估计")。无需改。提醒下游 storyboard 若展开，沿用区间、勿硬定 504。

3. **[#8] Cronkite "stalemate" 引语的转述性质**（§5C）
   - **问题**：§5C 引用 Cronkite "唯一理性的出路是谈判…我们陷入了僵局"。这是其 1968.2.27 评论的**核心意思转述**，措辞经常被不同来源略有出入地引用，并非档案逐字定本。
   - **narrative 现状**：CN 用"流传的核心意思"，EN 用"the core meaning as remembered"，**未**排成档案逐字引证样式，已留转述余地。
   - **建议**：现状**合规**（已标转述性质，未冒充逐字档案）。提醒下游若引用此句须沿用"核心意思/as remembered"的转述框，勿当 Cronkite 档案原话排版。

4. **[#16] 越南平民死亡 ~200 万的估计性质**（§0/§4-12/§6/§10-6）
   - **问题**：越南平民死亡数区间极大（1M 到 3M+），narrative 采用越南 1995 官方估计"多达约 200 万"。这是一个**有争议、来源依赖**的数字，不同口径差异巨大。
   - **narrative 现状**：CN/EN 均明示"估计""越南 1995 官方估计""多达约 200 万"，未当确数硬写。
   - **建议**：现状**合规**（已标估计 + 注明来源年份）。这是本课唯一一个"区间巨大但必须给量级"的数字——给量级是为了让学生看到"战火真正落在越南"（DEFAULT 视角的良心），保留"估计"措辞即可。无需改。

5. **[#3 合成人物] 三个桥接视角的合成性与透明标注**（§3）
   - **问题**：§3 三主角中，**华盛顿决策者**(actor)、**被征兵士兵**(mediator)、**越南农家少女**(receiving-end DEFAULT) 均为合成桥接人物（无姓名、合成场景），需确认是否已透明标注、是否冒充史料。
   - **narrative 现状**：三者**均已显式标注**为"虚构桥接人物，身份写实"；越南少女更明示"不给确切姓名，因为对绝大多数越南村民来说，历史没有为他们留下名字——而这恰恰是问题本身"。三者均未排成史料档案样式、未伪造任何个人逐字原话。§5D Kent State 照片明示"不伪造任何当事人原话，只描述照片的存在与冲击"。
   - **建议**：现状**合规**（符合 composite 红线：透明标注 + 不冒充史料）。真实历史人物（LBJ/Nixon/Ho Chi Minh/Cronkite/Calley）姓名/任期/事迹皆有据，非合成。无需改。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | 视角 | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 华盛顿决策者 | actor-perpetrator | **合成桥接人物**（无名字），身份/逻辑写实，代表"决策机器" | ✅**已透明标注**（§3「虚构桥接人物，但身份完全写实」「不给名字，因为他代表的是一整套'决策机器'的逻辑」）|
| 被征兵的美国士兵 | lonely-mediator | **合成桥接人物**（无名字），处境写实 | ✅**已透明标注**（§3「虚构桥接人物，身份写实」）|
| 越南农家少女 | receiving-end (DEFAULT) | **合成桥接人物**（无名字），处境写实 | ✅**已透明标注**（§3「虚构桥接人物，身份写实」「不给确切姓名，因为…历史没有为他们留下名字——而这恰恰是问题本身」）|
| LBJ / Nixon / Ho Chi Minh / Cronkite / Calley | 决策者+配角 | **真实历史人物**，姓名/任期/事迹皆有据 | N/A — 非合成 |
| Kent State 照片场景 | §5D primary source | 照片真实存在且有据（普利策奖），但 narrative 仅描述其存在与冲击，未伪造当事人原话 | ✅**已透明标注**（§5D「照片真实存在且有据可查，但本课不逐字伪造任何当事人原话」）|

**结论**：本 topic 三个合成桥接人物（决策者 / 士兵 / 越南少女）均已在 narrative §3 透明标注为虚构、身份写实，且越南少女的"无名"被直接点为"问题本身"，符合 DEFAULT 受影响者视角的良心设计。Kent State 照片已声明不伪造原话。真实人物皆有据。**无未标注的、冒充史料档案样式的合成；无伪造个人逐字原话。** 本课最高敏感的 Rule 0 中性（多视角并列 + 事实/评价分层 + 不下对错结论）已严守——见红旗 #1。

---

## 备注

- **直接引语分层核验**（本 topic 高风险类）：
  - *真实一手文本*：《东京湾决议》"to take all necessary measures…to prevent further aggression"（1964, National Archives）—— 逐字对得上一手。
  - *转述的核心意思*：Cronkite "stalemate" 评论 —— §5C 已标"流传的核心意思 / as remembered"，未排成逐字档案。**无把转述排成档案样式的违规。**
  - *LBJ "worst mess" 私语*：§3/§4-6 用"私下说"，CFR 等多源引用，作为广传私语稳妥。
  - Kent State 照片：§5D 仅描述存在与冲击，**未**伪造任何当事人原话，合规。
- **§8 同代中国**：为"真中国"段落，按 AUTHORING_PIPELINE 第 7 条例外，可正常使用中国术语（毛泽东、抗美援越、中苏分裂、文革）；已核 cultural ban 越南/美国术语未误用于非美越段落。§8 三块（援越/中苏分裂/文革）均为结构对照，明示"同时性"为并置非因果，且 §8 末显式声明不评判任何一方对错——符合 Rule 0 veto 维度。
- **轻微措辞收紧建议（低优先级）**：①§4-5/§10-2 "Tet 军事失败 vs 政治转折" 的分层是标准教学论点，可接受；②兵力"超过五十万"未硬定 536k/543k 单一峰值，稳妥；③My Lai "约 347-504"、越南平民"约 200 万"均保留区间/估计措辞，勿在下游 storyboard 硬定单值。
- **算术自检**：1975 − 1965 = 10 年（登陆到西贡陷落，narrative"整整十年"正确）；1973 − 1975 = 西贡陷落在撤军后 2 年（narrative"两年后"正确）；1964 − 1973 征兵期 = 约 220 万被征（对得上）；文革 1966-1976 = 10 年（正确）；§8 中国援越 1965-1971 段（与 narrative 一致）。**全部自检通过。**
- **用到的外部核实来源**：Britannica（Gulf of Tonkin incident / Tet Offensive / Vietnam War / Kent State shootings）、National Archives（Tonkin Gulf Resolution 原文 / Vietnam War U.S. Military Fatal Casualty Statistics / DCAS）、Wikipedia（Gulf of Tonkin incident / Tet Offensive / Paris Peace Accords / Fall of Saigon / Vietnam War casualties / Vietnam War draft / William Calley / China in the Vietnam War / Kent State shootings）、History.com（U.S. Marines land at Da Nang / Tet Offensive / Paris Peace Accords / Kent State / Calley found guilty）、CFR（Gulf of Tonkin Resolution / Deployment of Combat Forces）、State Dept Office of the Historian（Gulf of Tonkin）、PBS American Experience（My Lai）、Army Historical Foundation（My Lai）、UMich（Vietnam War draft）、VietnamNews（China support）、alphahistory（Chinese/Soviet involvement）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2 —— 所有高风险 claim 均有来源或已透明标注/可降级措辞/区间估计，**无 needs-source 缺口**。本课为最高敏感 topic，创始人**主动审查重点**为红旗 #1（Rule 0 多视角中性 + 不下对错结论是否守住，尤其 §3 决策者视角"人化但不洗白"）；#2-#5 均已自带区间/转述/合成的透明标注，为低优先级确认项。
