# 工业革命 1760-1840 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    industrial-revolution-1800
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/industrial-revolution-1800.js（3 lens: arkwright / robert-owen / manchester-child-worker-receiving-end）+ lib/history-narratives/industrial-revolution-1800.md
claim 总数:  27
🚩 红旗数:   5（需创始人审）
```

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`（后三类进红旗）。

> 凡 `dramatization` 等级而文中**未透明标注**为合成 → 自动进红旗。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | 「1771 年 Arkwright 在 Cromford 建起世界上第一批靠水力运转的（大型）纺纱厂 / 五层石楼 / 水车带几百纱锭日夜不停」（`ark-n1`·`ark-n6`·kernel §3·§附A）| date / absolute | encyclopedia | Cromford Mill 1771，世界第一座水力棉纺厂，权威一致（Wikipedia / Cromford Mills 官网 / Britannica）| ✅verified |
| 2 | 「『工厂』这个词与这种生活方式由此而来 / 世界上以前没有这种楼」（`ark-n1`·kernel §4.3）| absolute | encyclopedia | Cromford 被广泛称为「世界第一座现代工厂」「father of the factory system」；措辞用「第一批/some of the first」对冲，稳妥 | ✅verified |
| 3 | 「Arkwright 1732 生，家里十三个孩子排最小，穷得没钱上学，年轻时走街串巷理发兼做假发」（lens desc·`ark-n1`·kernel §3·§附C）| date / number | encyclopedia | 1732.12.23 生于 Preston，13 个孩子中最小；当过理发学徒、1762 起做假发生意走乡收头发，确证（Sky History / Historic UK / Belper Research）| ✅verified |
| 4 | 「Arkwright 真正发明的不是某台机器（water frame 专利后被法院判无效），是工厂制度整套系统」（kernel §3·§10.4）| causal / absolute | encyclopedia | water frame 1769 专利，1785 被判无效；学界共识其核心贡献是 factory system 而非机器本身，确证 | ✅verified |
| 5 | 「1764 前后多锭纺纱机（spinning jenny）让一人纺多根线 + 水力（water frame）让机器自己转」（`ark-n2`·kernel §4.2·§附B）| date / number | encyclopedia | spinning jenny 由 Hargreaves 1764-65 发明；water frame 1769 Arkwright 专利。措辞「1764 前后…先后出来」涵盖两者，准确 | ✅verified |
| 6 | 「他大量招七八九岁童工，含从济贫院（workhouse）整批领来的孤儿，工钱只成年人几分之一」（`ark-n4`·kernel §3·§4.5）| number / motive | encyclopedia | Cromford 雇佣大量童工（最低 6-7 岁，后提到 10 岁），晚期约 2/3 员工是童工；apprentice/孤儿来自 workhouse，童工工资远低于成人，确证 | ✅verified |
| 7 | 「童工每天在机器边十二个小时（and more）」（`ark-n1`·`ark-n4`·`ark-n6`·lens desc）| number / rhetoric | encyclopedia | Cromford 童工 13 小时/天、6 天/周（6am-7pm）；行业 12-16 小时常见。「十二小时及以上」处于可证范围内，准确 | ✅verified |
| 8 | 「Arkwright 死时受封爵士（Sir Richard Arkwright），是英国最有钱的平民之一」（`ark-n7`·kernel §3·§附A）| absolute / motive | encyclopedia | 1786 受封 knight；1792 卒，遗产约 50 万英镑（今约 2 亿+），公认当时最富平民之一，确证 | ✅verified |
| 9 | 「**每往前凿一米/每赶一步进度，就有华工…**」——本 topic **无此对位**；对应强修辞句见 #10 | — | — | （占位说明：本 topic 无「每米一死」式比率句，详见 #10）| — |
| 10 | 「童工跟机器比是更不值钱的那一个——机器坏了花钱修，孩子伤了再招一个」（`mc-n5`·kernel §3·§5）| **rhetoric / motive** | inference | 强修辞句。反映「laissez-faire 下工伤不赔、劳力可替换」的真实账本逻辑（工伤无赔偿、工厂主视童工为可替换劳力，史料支持）；属合理 inference 的修辞表达，非可量化统计。措辞戏剧但有事实底座，不夸张到失真 | ✅verified |
| 11 | 「童工工作日清晨五点半到晚八点，中间约四十分钟吃饭，每天机器边十三小时以上」（`mc-n3`·kernel §3·§5）| number | primary | Sadler 报告证词典型：5am-9pm（旺季）、40 分钟午饭。文中取 5:30am-8pm/40 分钟午饭=13+ 小时，**比报告极端值（到 9pm）保守**，落在一手证词范围内，准确 | ✅verified |
| 12 | 「机器伤残常见：手指被轧断、整手卷入、头发连头皮被拖进机器；脊柱因常年弯腰变形」（`mc-n5`·`ark-n8`·kernel §3）| number / rhetoric | primary | Sadler 报告 + 工厂事故记录：手臂卷入机器、肌肉皮肤剥到见骨、断指、长期弯腰致脊柱畸形，均有一手证词，确证（Spartacus / Sadler report wiki）| ✅verified |
| 13 | 「Ellen 自己左手少一根手指（太困手伸慢被机器咬）」（`mc-n5`·lens desc）| number / motive | dramatization | **演绎**：具体「Ellen 左手缺一指」是合成个体的叙事补充；但「童工被机器轧断手指」是 documented 类型事实。文中已透明标注 Ellen 为 composite（见角色清单），符合红线 | ✅verified |
| 14 | 「机器伤了厂里不赔，机器照转工照上」（`mc-n5`·kernel §5）| causal | encyclopedia | laissez-faire 时期工伤无强制赔偿、法律不进厂门，确证（与 #10 同源）| ✅verified |
| 15 | 「1832 年英国议会派 Sadler 委员会调查工厂童工，传唤工人/医生/童工逐一作证、一字不漏记录，出 Sadler 报告」（`ark-n8`·`mc-n8`·kernel §5·§附A）| date / quote | primary | 1832 House of Commons Committee（Michael Sadler 牵头）调查 mills/factories 童工，留下大量宣誓证词＝Sadler Report，确证 | ✅verified |
| 16 | 「Sadler 报告里的问答证词（八岁进厂 / 旺季 5am-9pm / 40 分钟午饭 / 困了用皮带 strap 打）」（kernel §5 原文节选）| quote | primary | kernel 已自标「paraphrase/simplified for clarity」；Matthew Crabtree / Elizabeth Bentley 等典型证词内容（进厂年龄、5-9 点、皮带打醒）属真史料，**但 storyboard 内未逐字引用，仅转述类型证词**，处理稳妥。注：原文证人为 paraphrase 而非逐字 | ✅verified |
| 17 | 「监工（overlooker）用皮带（strap）抽打困到睡着的童工『叫醒』让跟上机器」（`ark-n6`·`mc-n4`·`mc-n6`·kernel §3·§5）| rhetoric / motive | primary | Sadler 证词明载「困了打、用 strap」；overlooker/piecer/strap 均为真实工厂术语，确证 | ✅verified |
| 18 | 「童工工种 piecer（接线工）：纺纱机数百线同转，断线频繁，须弯腰/钻机器底下接线」（`mc-n3`·kernel §3·§附B）| number | encyclopedia | piecer 是真实工种，负责接断线（piecing），须俯身钻入机器，确证 | ✅verified |
| 19 | 「Owen 1771 生威尔士（Newtown），十岁离家当学徒，二十出头管曼彻斯特上千人棉纺厂」（lens desc·`ro-n2`·kernel §3·§附A·§附C）| date / number | encyclopedia | 1771.5.14 生于 Newtown；约 10 岁当学徒；20 岁前后管理 Drinkwater 在曼彻斯特的大棉纺厂（约 500 工人，文中「上千人」略偏高，详见红旗 #B）| ⚠️downgrade-wording |
| 20 | 「1800 年 Owen 接手 New Lanark，厂里两千多工人、五百多孩子（含 workhouse 孤儿，七八岁干十三小时）」（`ro-n1`·`ro-n4`·kernel §3·§4.7）| date / number | encyclopedia | Owen 1800.1.1 入主 New Lanark；约 2,000 工人、约 500 童工（多为 Glasgow/Edinburgh 济贫院 pauper 学徒），接手前童工 13 小时，确证 | ✅verified |
| 21 | 「Owen 把工时从十三、十四小时砍到十小时半；规定十岁以下不进车间；办世界最早工厂子弟学校之一 + 幼儿托管」（`ro-n5`·`ro-n6`·kernel §3·§附A）| number / date | encyclopedia | Owen 把工时降到 10.5 小时；约 1800-1802 起禁 10 岁以下入厂送学校；建世界最早 infant school/nursery 之一，确证（New Lanark 官网 / Owen wiki）| ✅verified |
| 22 | 「Owen 禁皮带，发明 silent monitor（四面不同色小木块按前一天表现翻面）代替体罚」（`ro-n6`·kernel §3·§附B）| quote / motive | encyclopedia | silent monitor 确为 Owen 发明的四面彩色木块每日评级制度，用于替代体罚，确证 | ✅verified |
| 23 | 「New Lanark 照样赚大钱，成全欧洲争相参观模范；贵族/政客/连俄国沙皇派的人都来」（`ro-n7`·kernel §3·§7）| number / absolute | encyclopedia | New Lanark 在 Owen 治下盈利且声名远播，欧洲各国（含俄国大公 Nicholas，后为沙皇）来访，确证。「连俄国沙皇派的人」措辞稳（来访的是后来成沙皇的尼古拉本人/随员）| ✅verified |
| 24 | 「1819 Factory Act：禁九岁以下进棉纺厂、十六岁以下日工时不超十二小时；但违法线低、几乎无人执法」（`ark-n8`·`ro-n9`·kernel §4.9·§附A）| date / number / causal | encyclopedia | Cotton Mills and Factories Act 1819：禁 9 岁以下进**棉纺厂**、16 岁以下不超 12 小时；无专职 inspector、靠地方治安官+两名宣誓证人才能查，几乎无执行，确证 | ✅verified |
| 25 | 「1833 Factory Act：禁九岁以下进纺织厂、九至十三岁限工时，**首次派 inspector 视察员进厂执法**」（`ark-n8`·`mc-n9`·kernel §4.11·§附A）| date / number / absolute | encyclopedia | Factory Act 1833：禁 9 岁以下进纺织厂；9-13 岁限 8 小时（13-18 岁限 12 小时）+ 每日 2 小时上学；**首设 4 名国家工厂视察员**，确证。文中「九至十三岁限工时」准确（未给具体小时数，无误）| ✅verified |
| 26 | 「Owen 推动立法、转而要求改规则，晚年赴美建 New Harmony 社区失败散伙，被视为社会主义思想源头之一」（`ro-n8`·`ro-n9`·`ro-n10`·kernel §3·§附A）| date / causal / motive | encyclopedia | Owen 游说促成 1819 法；1825 建 New Harmony（印第安纳），数年后失败；被广泛视为乌托邦社会主义/合作运动先驱，确证 | ✅verified |
| 27 | 「enclosure 圈地把失地农民赶进城 + 工业城市（曼彻斯特/利兹）人口翻几倍、贫民窟/污水/霍乱/煤烟、寿命比乡下短」（`ark-n9`·`mc-n2`·kernel §2·§6）| number / causal | encyclopedia | enclosure 驱农进城＝标准史学解释；曼彻斯特 1771-1831 人口暴增数倍；1840 曼彻斯特工人阶级儿童 5 岁前死亡率约 57% vs 乡下约 32%，大城市人均寿命 29-30 岁、远低于乡下，确证。城市寿命更短**确有强证据**（Davenport 2020 / Cambridge mortality project）| ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#19 / 红旗 A]** `ro-n2`·lens desc·kernel §3·§附C：「（Owen）二十出头已在曼彻斯特管着一家**上千人**的大棉纺厂。」
   - 问题：**数字偏高（重点 A 轻类）**。Owen 早年（约 1792-1799）管理的是 Peter Drinkwater 在曼彻斯特的 Bank Top 棉纺厂，通行记载约 **500 名工人**（部分来源更高，但「上千人」是 New Lanark（约 2,000）那家的规模，易与早年厂混淆）。把早年厂说成「上千人」略放大。
   - 建议：改为「管着一家**几百人**的大棉纺厂」或「管着曼彻斯特一家大棉纺厂」（去掉具体数字），把「两千多人」留给 New Lanark（那个数字 verified）。低优先级。

2. **[#16]** kernel §5 原文节选：Sadler 报告问答证词（八岁进厂 / 旺季 5am-9pm / 40 分钟午饭 / 用皮带打）。
   - 问题：**引语分层（重点 C）**。kernel 已诚实自标「paraphrase/simplified for clarity」，但 storyboard `mc-n8` 写「他们把每一句回答，一字不漏地记下来 / 你听见我每句来自上百真孩子证词」——这句**强调逐字真实**，而本产品给学生看的实际是 paraphrase（且 Ellen 是 composite）。两处口径需对齐：报告本身是逐字宣誓证词（真），但 storyboard 转述的是「类型化转写 + 合成人物口吻」。
   - 建议：保留（已在 `mc-n1`/`mc-n8` 透明标注 composite + 基于真证词）。但建议在 reviewer 心里记一条：「一字不漏」指 Sadler 报告**原档**的性质，不指 Ellen 这段台词是某条逐字引文。若要更严谨，可在内部 note 标明「Ellen 的话是基于上百证词的合成转述，非单一逐字引语」。**Sadler 一手证词本身可信，无硬伤**。低优先级（已基本对冲）。

3. **[#27 关联 / 红旗 C]** kernel §9·§5·§10：**Sadler 报告的立场与采集动机**。
   - 问题：**一手史料偏向（重点 C 方法论）**。Sadler 本人是改革派议员，证词征集有推动立法的政治目的；1833 Factory Commission 后续调查曾**质疑 Sadler 报告部分最极端的描述**。本 topic 把 Sadler 报告作为童工苦难的核心证据反复引用（3 lens 都用），若不带这层 caveat，史实党可挑「单一来源 + 有政治动机的证词被当成中立事实」。
   - 现状：**narrative kernel §9 已明确写出这一 caveat**（"Sadler 本人是改革派议员，证词的征集有其政治目的…后来的 Factory Commission 补充了更系统的调查…一手史料的立场与采集动机须纳入解读"）——处理到位。
   - 建议：**无需改**，但提醒创始人：此 caveat 只在 narrative §9，**未进任何 storyboard 节点**。storyboard 里 Ellen/Arkwright 都把 Sadler 报告当作纯粹的「真相记录」呈现。若希望学生也接触「史料有立场」这层，可考虑在某节点轻点一句；不点也不算硬错（属深化而非纠错）。中优先级。

4. **[#7 / #10 / #12 关联 — 强修辞数字总检（重点 A）]**
   - 结论：本 topic **没有**「每米一死」式的伪精确比率句（对比 chinese-exclusion #9）。最强的修辞是 #10「孩子比机器更不值钱，伤了再招一个」与 #12「头发连头皮被拖进机器」——两者**都有一手/权威事实底座**（工伤无赔偿的账本逻辑 + Sadler 工厂事故记录），属「有底座的强修辞」，**不构成数字夸张红旗**。工时（13 小时）、年龄（7-9 岁）、伤残类型均经核实落在史料范围内，且文中多取保守端（如 5:30am-8pm 而非报告极端的 9pm）。
   - 建议：**无需降级**。记录在此供创始人确认「强修辞已查实底座」。

5. **[复合人物 Ellen 总检 / 红旗 D]** `manchester-child-worker-receiving-end`（全 12 节）。
   - 问题：**合成人物 + 虚构姓名/年龄/内心戏**（重点 representativeness + dramatization）。Ellen 是虚构姓名、设定 9 岁、左手缺指、被圈地挤进厂等具体个体细节均为叙事合成。
   - 现状：**透明标注到位**——lens desc 明写「她不是一个真实存在过的具体某人，而是用很多真实证词拼出来的一个孩子（基于 1832 Sadler 报告里上百名工厂童工的真实证言）」；`mc-n1` 第一人称再次显式声明「我不是历史上某一个真名实姓的女孩…我是用很多很多孩子的真话拼起来的…Sadler 报告，里面是真证词」；meta.notes 也标注 composite。**完全符合 §1.3 dark-topic 红线**。
   - 建议：**无需改**。仅登记确认。**不进红旗硬清单**（标注完整），列此供创始人知悉合成边界。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| Ellen，曼彻斯特棉纺厂 9 岁童工 | `manchester-child-worker-receiving-end`（全 12 节）| 虚构姓名「Ellen」、设定 9 岁、左手缺一指、家庭被圈地+机器+低工钱挤进厂的具体身世、第一人称内心戏（恨谁想不清、想哭不敢哭）均为**叙事合成**；底层集体事实（piecer 接线工种、5:30am-8pm/40 分钟午饭/13+ 小时、皮带 strap、机器轧断手指/卷入/脊柱变形、Sadler 报告记录证词、1819→1833 法律链）为 **documented** | ✅ **已透明标注**：lens description 明示「不是真实存在过的具体某人，而是用很多真实证词拼出来的一个孩子（基于 1832 Sadler 报告上百名童工真证言）」；`mc-n1` 第一人称显式 anti-fab「我不是历史上某一个真名实姓的女孩…用很多很多孩子的真话拼起来的…Sadler 报告里面是真证词」；`mc-n6`/`mc-n8` 反复点明证词来源；meta.notes 标 composite。**符合 §1.3 dark-topic 红线** |

> 其余出场人物 **Richard Arkwright（1732-1792）/ Robert Owen（1771-1858）/ Michael Sadler（1780-1835）** 均为**真实历史人物**，非合成。Arkwright / Owen 两 lens 为第一人称视角叙事（内心戏属合理 inference，挂在已证生平骨架上），未虚构其生平主线（出身、Cromford/New Lanark、爵位、New Harmony 等均 verified）。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 ——
  - `arkwright`（claim #1-8,12,15,17,24-25；含 N1 hook / N6 cross-lens 钟+皮带 / N8 桥到 Sadler）
  - `robert-owen`（#19-26；含 N6 silent monitor 反面对位 / N9 1819 法）
  - `manchester-child-worker-receiving-end`（#10-18,27；default lens，含 N1 gold-standard anti-fab hook / N3 piecer 日常 / N4 皮带 peak / N5 机器伤残 / N6 钟皮带两端 / N8 Sadler / N9 1833 法）
- **重点核查结论**：
  - **重点 A（数字夸张）**：**无「每米一死」式硬红旗**。工时（13 小时/12-16 范围）、童工年龄（7-9 岁）、伤残类型、工资比例、寿命差（城市儿童 5 岁前死亡率 57% vs 乡下 32%）均经核实，文中多取保守端。唯一轻类是 #19 Owen 早年厂「上千人」偏高（应为约 500，红旗 A）。
  - **重点 B（代表性）**：Ellen composite 透明标注**完整到位**（lens desc + N1 + N6 + N8 + meta 多处），无红旗。
  - **重点 C（引语）**：Sadler 报告问答 kernel 已自标 paraphrase（#16）；史料立场/政治动机 caveat 已在 narrative §9 写明（红旗 C，但仅在 narrative 未进 storyboard，属深化项非纠错）。Owen「silent monitor」、Crocker 式传说句**本 topic 无**（无后世传说被当确证引文的问题）。
  - **法律链全准**：1819（棉纺厂/9 岁线/12 小时/无执法）→ 1832 Sadler → 1833（纺织厂/9-13 岁/首派 inspector）逐条对权威核实通过。
- **用到的外部核实来源**：Wikipedia（Sadler report / Richard Arkwright / Cromford Mill / Cotton Mills and Factories Act 1819 / Factory Acts / Robert Owen / Spinning jenny / Child labour in the British Industrial Revolution）、Britannica（Factory Act 1833）、UK Parliament living-heritage（1819/1833 早期工厂立法）、The National Archives（1833 Factory Act）、New Lanark Visitor Centre 官网、Cromford Mills 官网、Sky History / Historic UK / Belper Research（Arkwright 生平）、Spartacus Educational（工厂事故 / Owen / inspectors）、Davenport 2020 *Economic History Review* + Cambridge "Mortality in Manchester 1750-1850" project（城乡死亡率）、World History Encyclopedia（child labour hours）。
- **总评**：本 topic 史实骨架**非常稳健**——所有日期（1771/1800/1819/1832/1833）、机器归属（jenny/water frame/factory system）、Arkwright 与 Owen 生平主线、Factory Act 三段条款、Sadler 报告性质、童工工时/年龄/伤残、城乡寿命差均经权威核实通过。**无 `needs-source`（无悬空高风险事实），无与权威正面冲突的硬错**。最大亮点是 receiving-end 合成人物 Ellen 的 anti-fab 标注**做到了 dark-topic 范本级别**，且无「每米一死」式强修辞数字陷阱。5 条红旗中**仅 #19（Owen 早年厂人数）是应处理的措辞项**（轻类）；#16/#27/#7-12/Ellen 四条均为「已对冲/已标注/属深化」的登记确认项，非纠错。**可进 Gate 2；建议顺手把 #19 的「上千人」改为「几百人」即可上线。**
