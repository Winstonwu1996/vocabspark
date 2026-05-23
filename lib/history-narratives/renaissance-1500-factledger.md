# 文艺复兴 1400-1600 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    renaissance-1500
生成日期:    2026-05-23
来源文件:    lib/history-storyboards/renaissance-1500.js（3 lens: lorenzo-medici / savonarola / lucia-widow）+ lib/history-narratives/renaissance-1500.md
claim 总数:  28
🚩 红旗数:   8（需创始人审）
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
| 1 | 「1478 年 4 月 26 日复活节大教堂弥撒，Pazzi 阴谋刺杀，弟弟 Giuliano 当场被刺 19 刀死，Lorenzo 脖子受伤逃圣器室」（`lorenzo-n3`/`n4` / narrative §3）| date / number | encyclopedia | 维基/Britannica：1478.4.26 Easter，Giuliano 中 19 刀死，Lorenzo 仅颈伤逃脱，确证 | ✅verified |
| 2 | 「Pazzi 阴谋后 80 天处决约 80 个人」（`lorenzo-n1`：约 80 / EN "roughly eighty"）| number | encyclopedia | 维基：1478.4.26–10.20 共处决 80 人，确证。**N1 的"约 80"是对的** | ✅verified |
| 3 | 「接下来 80 天 Florence 直接处决了 **90** 个人 / ninety people」（`lorenzo-n4` engagementHook + `lorenzo-n5` 正文）| number | encyclopedia | 权威数字为 **80**，非 90。**同一 lens 内 N1(80) 与 N4/N5(90) 自相矛盾** | ✋flagged |
| 4 | 「Salviati 大主教穿主教祭服被吊死在 Palazzo della Signoria 二楼窗外，与一具 Pazzi 主谋尸体绑在一起」（`lorenzo-n5` / narrative §3）| number / causal | encyclopedia | 维基：Salviati 与 Francesco/Jacopo de' Pazzi 同从 Palazzo（Vecchio = della Signoria 同一栋）窗外吊死，确证 | ✅verified |
| 5 | 「Botticelli 受 Lorenzo 雇画市政厅外墙 pittura infamante（耻辱画），8 个阴谋者吊像，1494 被铲」（`lorenzo-n5` / narrative §3）| causal / date | encyclopedia | Botticelli 1478 受 Signoria 委托画 Pazzi 阴谋者耻辱壁画（含 8 人），1494 Medici 倒台后移除，确证 | ✅verified |
| 6 | 「教皇 Sixtus IV 把 Lorenzo 个人 excommunicate + 联合 Naples 王 Ferrante 攻 Florence」（`lorenzo-n5` / narrative §3）| causal | encyclopedia | 1478 Sixtus IV 绝罚 Lorenzo，联 Ferrante 对 Florence 开战，确证 | ✅verified |
| 7 | 「1479.12 Lorenzo 单骑去 Naples 跟 Ferrante 谈 3 个月，1480.3 带回和平条约」（`lorenzo-n6`）| date / number | encyclopedia | Lorenzo 1479.12.18 抵 Naples，留至 1480.2.27，1480.3.17 缔约。「谈 3 个月」「1480.3 回」准确。**N6 称 12/6 出发**比抵达早 12 天，骑/航行合理 | ✅verified |
| 8 | 「回 Florence 后被授予跟祖父 Cosimo 同样的头衔 **Pater Patriae**，史上第二个非帝王获此头衔」（`lorenzo-n6`）| absolute / motive | encyclopedia | **史实错误**：Pater Patriae 仅授予 **Cosimo（1464 身后）**，Lorenzo **从未获此头衔**。Signoria 1480 给 Lorenzo 加强了权力但无此封号 | ✋flagged |
| 9 | 「Cosimo 1464 获 Pater Patriae，是奥古斯都之后 1500 年第一个非帝王获此头衔」（narrative §3 / `lorenzo-n2`）| absolute | encyclopedia | Cosimo 1464 身后获 Pater Patriae 确证；**但**该头衔历史上**曾授予 Cicero**（非帝王），故「奥古斯都后第一个非帝王」措辞站不住 | ⚠️downgrade-wording |
| 10 | 「Lorenzo 1485 让 Botticelli 画《Birth of Venus》」（`lorenzo-n7` / narrative §3·§4）| date / causal | encyclopedia | 画作约 1484–86，date 范围内成立。**但**学界主流委托人是堂亲 **Lorenzo di Pierfrancesco de' Medici**，非 il Magnifico 本人。「我让他画」属过度归因 | ⚠️downgrade-wording |
| 11 | 「1489 年 14 岁 Michelangelo 被 Lorenzo 接进 Medici 宫，跟儿子同桌吃饭读 Plato」（`lorenzo-n7` / narrative §3）| date / number | encyclopedia | Michelangelo 1475.3 生，1489 确为 14 岁；约 1490–92 在 Medici San Marco 花园/学院、属 Lorenzo household，确证（精确入宫年份学界系 1490 起，N7 用 1489「他 14 岁」可接受）| ✅verified |
| 12 | 「次子 Giovanni 13 岁戴枢机帽，史上最年轻，21 年后成教皇 Leo X」（`lorenzo-n9` / narrative §3）| number / absolute | encyclopedia | 1489 Lorenzo 为 13 岁 Giovanni 争得枢机位（1492 正式就任），常被称史上最年轻枢机之一；1513 成 Leo X（距 1492 父死 21 年），确证 | ✅verified |
| 13 | 「Lorenzo 临终评 3 子：一个傻子、一个聪明人、一个好人」（`lorenzo-n9` / narrative §3）| quote | encyclopedia | Florence 编年史广传 Lorenzo 此语（foolish / wise / good 三子），属传世名言/概括，narrative §3 已写「后来记下」。措辞可保留 | ✅verified |
| 14 | 「Lorenzo 1449 生，1492.4.8 死于 Careggi 别墅，43 岁，痛风+关节炎家族遗传，珍珠粉混金粉做药」（`lorenzo-n7`/`n8` / narrative §3）| date / number | encyclopedia | 1449.1.1 生–1492.4.8 死 Careggi，43 岁，确证。痛风家族病 documented；金/珍珠粉为当时贵族药俗，合理 inference | ✅verified |
| 15 | 「1490 年 8 月 Savonarola 38 岁第二次回 Florence San Marco；第一次 1482 讲 3 年失败 1487 调走」（`savonarola-n3` / narrative §3）| date | encyclopedia | Savonarola 1452 生 Ferrara；1482 首到 Florence，1490 复返 San Marco（次年任院长），确证 | ✅verified |
| 16 | 「1492.4.8 Savonarola 拒绝给临终 Lorenzo 赦免、转身离开」（`savonarola-n4` / `lorenzo-n8` / narrative §3）| motive / causal | inference | 二人临终会面有史料记载，但「是否拒赦免/Lorenzo 是否拒三条件」是**后世争议演绎**（多版本，含 Savonarola 实给祝福之说）。两 lens 均明示「这一遍让你听见心里话」属内心戏 | ⚠️downgrade-wording |
| 17 | 「Savonarola 在心里问 Lorenzo 三件事：退银行钱给羊毛工、放掉对共和的控制、承认异教画建在穷人泪上」（`lorenzo-n8` / `savonarola-n4`）| quote / motive | dramatization | 明确为内心戏（lens 已标「我没写下来也没说出口」「让你听见心里的话」）。透明标注到位，但是纯演绎对话 | ✅verified |
| 18 | 「1494.11.17 Charles VIII 带 25,000 大军入 Florence，Savonarola 接见，Charles 拿赎金离开」（`savonarola-n5` / narrative §3·§4）| date / number | encyclopedia | Charles VIII 1494.9 入意，11.17 入 Florence，约 25,000 兵；Savonarola 居间斡旋使其受赎金离去，确证 | ✅verified |
| 19 | 「Charles VIII 24 岁（CN）／ **eighteen 18 岁（EN）**」（`savonarola-n5`）| number | encyclopedia | Charles 生 1470.6.30 → 1494.11 时 **24 岁**（CN 正确）。**EN 写 "Charles was eighteen" 是错的，且与同节 CN 自相矛盾** | ✋flagged |
| 20 | 「Vanity Boys：6,000 个 9–16 岁男孩（`savonarola-n6`）／ 6–12 岁、几百个（`lucia-n4`）」| number | encyclopedia | Savonarola 组织少年团收 vanities 确证；**具体人数史料无定论，且两 lens 自相矛盾（6000 vs 几百 / 9–16 vs 6–12）**。属未带量化底座的强数字 | ⚠️downgrade-wording |
| 21 | 「1497.2.7 Bonfire of the Vanities，约 60 米高木堆 / sixty meters high」（`savonarola-n6`/`n7`/`n9` / `lucia-n6`）| number | encyclopedia | **数字错误**：权威记木堆约 **sixty feet（≈18 米）**，非 60 米。CN/EN 均误把"英尺"当"米"，高估约 3.3 倍 | ✋flagged |
| 22 | 「Bonfire 几百米高木堆 / a bonfire several hundred feet high」（`lorenzo-n12`）| number | encyclopedia | 同上：实际约 60 feet（18 m）。「几百米/several hundred feet」严重高估 | ✋flagged |
| 23 | 「1497.2.7 Bonfire；Botticelli 据 Vasari 亲手交画」（`savonarola-n7` / `lucia-n6` / narrative §3）| date / quote | encyclopedia | 1497.2.7（Shrove Tuesday）Bonfire 确证；Botticelli 自烧画为 **Vasari 记载（二手/有争议）**，narrative §3 已写「据说」、`lucia-n6` 已标「据 Vasari」。处理良好 | ✅verified |
| 24 | 「1497.6 教皇 Alexander VI 把 Savonarola excommunicate；本名 Rodrigo Borgia，1492.8 用现金贿赂 34 枢机中的 24 个买教皇位，公开承认私生子」（`savonarola-n8`）| date / number | encyclopedia | Alexander VI 1492 当选有买票指控（数字常引）；1497 绝罚 Savonarola（部分来源系 5.13）。贿赂"24/34"为流行叙述非铁证，但属常见表述。绝罚月份 1497.6 与部分来源 5 月有出入，小幅 | ⚠️downgrade-wording |
| 25 | 「1498.4.7 火试罪因雨取消 → 4.8 暴动被捕 → 5.23 在 Piazza della Signoria 绞死后焚尸，骨灰扔 Arno」（`savonarola-n9` / narrative §3）| date | encyclopedia | 1498.4.7 ordeal 取消、4.8 被捕、5.23 绞死焚尸骨灰入 Arno，确证 | ✅verified |
| 26 | 「humanism 人文主义 = 古典回归 + 强调人的潜能/理性，studia humanitatis（语法/修辞/诗/史/道德哲学）」（narrative §0·§1·§3 北方人文主义表）| 定义 | textbook | AP Euro / 学界标准定义吻合（studia humanitatis、人的潜能、古典复兴）。narrative 表对意大利 vs 北方人文主义区分准确 | ✅verified |
| 27 | 「Gutenberg 1440s/1450s 发明活字印刷，美因茨，1455 Gutenberg Bible，1500 年欧洲 1000+ 印刷店」（narrative §2·§4）| date / number | encyclopedia | Gutenberg ~1440 发明、~1455 Bible、1500 前印刷术遍欧（incunabula 数千版），确证 | ✅verified |
| 28 | 「Lorenzo 1469-1492 与明朝成化/弘治两帝同代；1492 弘治 5 年；王阳明 1472 生；同时代中国是明朝鼎盛」（`lorenzo-n11` / `savonarola-n11` / `lucia-n11` / narrative §8）| date / causal | textbook | 成化 1465-1487、弘治 1488-1505，与 Lorenzo 1469-1492 重叠，确证；1492 = 弘治 5 年正确；王阳明 1472-1529 正确。Needham 问题作"开放问题"处理（narrative §8 + savonarola-n11 已声明非简单答案），符合反 Whig 要求 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#21 / #22]** `savonarola-n6/n7/n9` + `lucia-n6` + `lorenzo-n12`：「约 **60 米**高的木堆」/「**几百米高**的木头堆 / several hundred feet high」
   - 问题：**硬数字错误（最高优先级）**。权威记 Bonfire 木堆约 **60 英尺 ≈ 18 米**。CN/EN 都把"英尺"读成"米"，高估约 3.3 倍；`lorenzo-n12` 的"几百米/several hundred feet"更离谱。这是会被学生当事实记住的物理量，且跨 4 个节点重复同一错误。
   - 建议：全部改为「约 18 米高（六十英尺）/ about sixty feet (≈18 m) high」或「几层楼高」。`lorenzo-n12` 删掉"几百米/several hundred feet"。

2. **[#8]** `lorenzo-n6`：「（回 Florence 后）市政厅授予我跟祖父 Cosimo 同样的头衔，**Pater Patriae**，我是历史上第二个非帝王获此头衔的人。」
   - 问题：**史实错误（高优先级）**。Pater Patriae 仅 1464 身后授予 **Cosimo**，**Lorenzo 从未获得这个头衔**。1480 Naples 归来后 Signoria 的确扩大了他的实权（设新议会等），但没有这个封号。这是会被史实党直接挑出的硬错。
   - 建议：改为「市政厅扩大了我的实权（设新的核心议会），我对 Florence 的控制从此再无人能撼动」——去掉"Pater Patriae"和"第二个非帝王"。Pater Patriae 留在 Cosimo 名下即可（见 #9）。

3. **[#3]** `lorenzo-n4` engagementHook + `lorenzo-n5` 正文：「接下来 80 天……处决了 **90** 个人 / ninety people」
   - 问题：**数字错误 + 内部矛盾（高优先级）**。权威数字为 **80**。同一 lens 的 N1 已正确写"约 80 个人/roughly eighty"，N4/N5 却写 90，自相矛盾。
   - 建议：N4/N5 的"90/ninety"统一改回"约 80/roughly eighty"，与 N1 + lens description 一致。

4. **[#19]** `savonarola-n5`：CN「Charles 24 岁」vs EN「Charles was **eighteen**」
   - 问题：**CN/EN 数字矛盾 + EN 错（高优先级）**。Charles VIII 生 1470.6.30，1494.11 时是 **24 岁**。CN 对，EN 的 "eighteen" 既错又跟本节 CN 冲突（同 lens N5 后文 EN 又写 "twenty-four-year-old Charles VIII"，更显矛盾）。
   - 建议：EN "Charles was eighteen" 改为 "Charles was twenty-four"。

5. **[#9]** narrative §3 + `lorenzo-n2`：「Pater Patriae 是奥古斯都之后 1500 年第一个非帝王获此头衔」
   - 问题：**绝对表述存疑（中优先级）**。Cosimo 1464 获 Pater Patriae 是对的，但该头衔历史上曾授予 **Cicero**（共和时期、非帝王），所以"奥古斯都后第一个非帝王"站不住（维基明确指出此头衔"once awarded to Cicero"）。
   - 建议：降级为「Florence 把曾授予 Cicero 的古罗马荣衔 Pater Patriae 给了 Cosimo」或直接去掉"第一个非帝王"的绝对话术。

6. **[#20]** `savonarola-n6`（6,000 个 9–16 岁）vs `lucia-n4`（6–12 岁、几百个）
   - 问题：**强数字无定论 + 跨 lens 矛盾（中优先级）**。Vanity Boys 人数史料无确数，两 lens 给出 6000 vs 几百、年龄 9–16 vs 6–12，互相打架。
   - 建议：统一为对冲措辞，如「数百到数千名穿白袍的男孩」，两 lens 年龄/人数口径对齐。

7. **[#16]** `savonarola-n4` / `lorenzo-n8`：「Savonarola 拒绝给临终 Lorenzo 赦免」+ Lorenzo「拒绝三条件」
   - 问题：**因果/动机演绎（中优先级）**。二人临终会面有记载，但"拒赦免 / 拒三条件"是**后世多版本争议叙述**（亦有 Savonarola 实给祝福之说）。两 lens 都用"这一遍让你听见心里话"框住，标注到位，但仍把一个争议情节当主线史实推。
   - 建议：可保留（已透明标为内心戏），但建议在 narrative §3 一句话注明"此情节史料有多个版本"，避免学生当定论。低-中优先级。

8. **[#10]** `lorenzo-n7`：「1485 我让 Botticelli 画《Birth of Venus》」
   - 问题：**归因过度（低优先级）**。日期（约 1485）成立，但学界主流委托人是堂亲 **Lorenzo di Pierfrancesco de' Medici**，非 il Magnifico。第一人称"我让他画"把委托归到了主角头上。
   - 建议：软化为「我们 Medici 圈子那几年催生了《Birth of Venus》」，或不点"我委托"。低优先级（常见简化）。

> 另注 **[#24]** Alexander VI 绝罚 Savonarola 月份：storyboard 写 1497.6，部分权威系 1497.5.13。差一个月，极低优先级，可不动。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| **Lucia**（28 岁寡妇）+ 女儿 Caterina / 儿子 Pietro / 亡夫 Marco / 母 Maria / 邻居 Maria / 二婚鞋匠 Tommaso | `lucia-widow`（全 12 节）| **全部虚构**：姓名、年龄、家事（亡夫死小型 plague、嫁妆镶金小镜子、1497 被迫交镜、1510 女儿嫁农民向下流动、5 岁女儿问"奶奶给的东西去哪了"）皆为叙事合成。底层史实（1496 plague 复发、Oltrarno ciompi 阶层、Vanity Boys 上门收 vanities、镶金小镜子作为进口奢侈品确存在）为 documented | ✅ **已透明标注**：lens name 直接写「Lucia (虚构合成 28 岁寡妇)」、description 写「虚构合成人物，代表 Florence 几万个被路过的普通家庭主妇」、`lucia-n1` 正文括号「这一遍把这个虚构合成人物给你听见……史书不写 Lucia 这种家庭主妇——但她们这种家庭存在，是 1497 文献证实的」、`lucia-n6` 多处括号区分"史料没人记 vs Lucia 内心戏"、`lucia-n12` 再次明示「一个虚构合成的 28 岁家庭主妇」。**符合 §1.3 dark-topic 红线（composite 必须标明）** |
| **邻居 Maria 示警那一晚**（1497.2.7 凌晨 6 点上名单/破门搜异端的具体场景）| `lucia-n5` | 虚构场景（narrative 无此 documented 名单/破门细节）| ✅ narrativeRef 自标「虚构邻居示警场景，narrative 没有具体 documented 名字这一晚」 |

> 其余出场人物（Lorenzo / Cosimo / Piero / Giuliano / Savonarola / Botticelli / Michelangelo / Leonardo / Charles VIII / Ferrante / Sixtus IV / Alexander VI / Salviati / Jacopo & Francesco de' Pazzi / Poliziano / Francesco Nori / Giovanni→Leo X / Piero II）均为**真实历史人物**，非合成。Lorenzo / Savonarola 两 lens 为第一人称内心戏，内心独白属合理 inference / 显式标注的 dramatization，未虚构其生平骨架（除 #16 拒赦免争议情节）。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `lorenzo-medici`（claim #1-14, 22）/ `savonarola`（#15-21, 23-25, 28）/ `lucia-widow`（#20-21, 23, 28；含 composite 透明标注重点）。
- **重点核查结论**：
  - **数字（重点 A）**：3 条硬数字错 / 矛盾全部红旗 —— #21/#22 木堆"60 米/几百米"（实为 ~18 m/60 ft，跨 5 节点）、#3 处决"90"（实 80，且与 N1 自相矛盾）、#19 Charles VIII "EN 18 岁"（实 24，CN/EN 矛盾）。另 #20 Vanity Boys 人数跨 lens 矛盾、#24 绝罚月份小差。
  - **引语/史实归属（重点 C）**：#8 Pater Patriae 错挂 Lorenzo（硬错）、#9"奥古斯都后第一个非帝王"绝对话术存疑（Cicero 反例）、#10 Birth of Venus 委托人过度归因、#13 Lorenzo 三子名言属传世概括（narrative 已标"后来记下"，OK）、#23 Botticelli 自烧画已标"据 Vasari"。
  - **演绎/动机（重点 B）**：#16 Savonarola 拒赦免 / Lorenzo 拒三条件是争议情节，已用内心戏框住但建议加注；#17 三个内心问题为纯 dramatization，透明标注到位。
  - **composite 透明度**：Lucia lens 标注**极其到位**（name/description/正文括号四重声明），是本 topic 处理最好的部分，无红旗。
  - **文化对应硬禁自检**：✅ **通过**。意大利文艺复兴叙事**未**用中国概念词套意大利事件；中国对照（明朝弘治/成化、王阳明、郑和、Needham 问题）均在显式"跨文化锚"synthesis 节点里平行陈列，且明确反 Whig（narrative authorNotes ③ + §8 §9 多处声明"不是落后版的西方""Needham 问题是开放问题""两条文化路径都有智慧"）。无文化错配。
- **用到的外部核实来源**：Wikipedia（Pazzi conspiracy / Bonfire of the vanities / Charles VIII of France / Italian War 1494–95 / Cosimo de' Medici / Birth of Venus / Ferdinand I of Naples）、Britannica（Pazzi conspiracy / Birth of Venus / Lorenzo de' Medici）、History Today / History Hit / Smithsonian（Bonfire 60-foot pyre 高度）、Encyclopedia.com（Lorenzo Naples 1479-80 行程）、Michelangelo and the Medici（维基）、Fiveable / Albert.io（humanism / studia humanitatis 定义）。
- **总评**：本 topic 史实骨架**总体扎实**——日期链（1478 Pazzi、1492 Lorenzo 死、1494 Charles 入侵、1497 Bonfire、1498 Savonarola 死）、humanism/印刷术定义、明朝同代对照、反 Whig 立场、Lucia composite 透明度均经核实通过。但有 **3 条须修硬数字/史实错（#21/#22 木堆高度、#8 Pater Patriae 错挂 Lorenzo、#19 Charles VIII EN 年龄）**，外加 2 条 lens 间数字矛盾（#3、#20）。**这 5 条建议上线前修掉**（多为单位/复制错误，改动小但被史实党挑中概率高）。其余 3 条（#9/#10/#16）为措辞降级/加注的低-中优先级项。**修完 #21/#22/#8/#19/#3 五条后可进 Gate 2。**
