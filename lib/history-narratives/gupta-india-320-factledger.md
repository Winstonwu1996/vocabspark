# 笈多王朝 · 印度黄金时代 · Gupta India Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on narrative，**只写本账本文件**，绝不改内容。

```
topicId:    gupta-india-320
生成日期:    2026-06-06
来源文件:    lib/history-narratives/gupta-india-320.md（CN narrative kernel）
            + lib/history-narratives/gupta-india-320.en.md（EN sister file）
claim 总数:  26
🚩 红旗数:   4 — 全部为 ⚠️downgrade-wording / 已透明标注的演绎/约数措辞，无 needs-source、无 flagged 事实硬伤
```

**一句话总评**：史实地基**稳**——核心日期与人物（笈多约 320-550 / Chandragupta I 约 320 加冕 / Samudragupta「印度的拿破仑」/ Chandragupta II 鼎盛 / Aryabhata 476 生、499 写 Aryabhatiya / Kumaragupta 下 Nalanda 约 427 / Skandagupta 战 Huna / 约 550 瓦解 / Brahmagupta 628 / Al-Khwarizmi 约 825 / Fibonacci 1202）均对得上权威来源（Britannica、World History Encyclopedia、Wikipedia、MAA）。数字传播链与「阿拉伯数字其实是印度数字」属主流教学共识。§8 中国桥（魏晋南北朝 220-589 + 祖冲之 429-500 圆周率 7 位 + 算筹位值制 vs 印度书写符号）经核实，对照写实落地、Rule 0 中性。红旗集中在：**笈多多数年代是约数/史学区间**（narrative 已普遍用「约」字标注）、**两个合成桥接人物**（抄经少年 / 村庄农人，narrative 已显式标注虚构、身份写实）、**Aryabhatiya 著名比喻为标准转述而非档案逐字**、以及 **Sushruta 外科在 task 范围里但 narrative 未深写**（见备注）。无未标注的合成人物冒充史料问题。

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
| 1 | "笈多王朝约 320-550 CE"（frontmatter/§0/§1/§2 L4）| date | encyclopedia | World History Encyclopedia / Britannica：Gupta Empire c. 320-550 CE | ✅verified |
| 2 | "Chandragupta I 约 320 在 Pataliputra 加冕、奠基王朝"（§1/§2 L4/§4-1/附录 A/C）| date | encyclopedia | Britannica/WHE：Chandragupta I r. c. 319/320-335，首位主权君主，扩张始 | ✅verified（约数，见红旗 #1）|
| 3 | "Chandragupta I（笈多）≠ Chandragupta Maurya（孔雀），相隔约六百年、两个不同人/王朝"（§4-1/§10-1/附录 B/C）| representativeness | textbook | 主流史学共识：Maurya 约前 4 世纪，Gupta 约 320 CE，约 600 年差，仅名相近 | ✅verified（头号易混点，narrative 已清坑）|
| 4 | "Samudragupta 约 335-380 大扩张、号『印度的拿破仑』、Allahabad 石柱记功"（§1/§4-2/附录 A/C）| date | encyclopedia | WHE/Britannica：Samudragupta r. c. 335-380；"Indian Napoleon"；Allahabad Prashasti 列被征服王 | ✅verified |
| 5 | "Chandragupta II（Vikramaditya）约 380-415 鼎盛、供养 Kalidasa、立德里铁柱"（§1/§4-3/附录 A/C）| date | encyclopedia | WHE/Britannica：Chandragupta II r. c. 375/380-415；high watermark；铁柱铭文 King Chandra 一般定为他 | ✅verified |
| 6 | "Aryabhata 476 年生，499 年（23 岁）写成 Aryabhatiya"（§3/§4-5/§5/附录 A/C）| date | encyclopedia | 维基/Britannica：Aryabhata b. 476 CE，Aryabhatiya 完成于 499 CE（23 岁），活跃于 Kusumapura 近 Pataliputra | ✅verified |
| 7 | "Aryabhata 把圆周率算到约 3.1416，用 āsanna 暗示不可公度（算不尽）"（§3/§5A 周边）| number | encyclopedia | 维基 Aryabhata：π ≈ 3.1416；āsanna（approaching）暗示 incommensurable/irrational | ✅verified |
| 8 | "Aryabhata 主张地球每天绕轴自转，用坐船看岸退的比喻"（§3/§4-5/§5A）| quote+causal | encyclopedia | 维基 Aryabhata：主张地球自转（diurnal rotation）；boat-and-bank 比喻为 Gola 篇标准转述 | ✅verified（比喻为标准转述非档案逐字，见红旗 #3）|
| 9 | "十进制位值制在笈多前后成熟；零（śūnya）从占位推进到一个数"（§0/§2/§4-5/§5B/§10-3）| causal | encyclopedia | History of Hindu-Arabic numeral system（维基）：十进制位值约 AD 500 在印度成型；零经历占位→数的演化 | ✅verified |
| 10 | "Brahmagupta 628 年在 Brahmasphutasiddhanta 中明确把零当数运算"（§5B/§4-5/§10-3/附录 A）| date | encyclopedia | 维基 Brahmagupta：Brahmasphutasiddhanta（628）首次明确定义零的算术 | ✅verified（Brahmagupta 在笈多之后，narrative 已标注「7 世纪/笈多之后」）|
| 11 | "印度数字约 9 世纪传阿拉伯（Al-Khwarizmi 约 825 写《印度数字算术》）"（§0/§4-7/§6/§7/附录 A）| date | encyclopedia | 维基：Al-Khwarizmi 约 825《On the Calculation with Hindu Numerals》；algorist 源自其名 | ✅verified |
| 12 | "1202 年 Fibonacci《Liber Abaci》把印度-阿拉伯数字带入欧洲"（§0/§4-7/§6/附录 A）| date | encyclopedia | 维基/Encyclopedia.com：Fibonacci Liber Abaci 1202 推广 Hindu-Arabic numerals | ✅verified |
| 13 | "欧洲人误叫『阿拉伯数字』，老家其实是印度"（§0/§6/§7/§10-2）| representativeness | textbook | 主流共识：numerals 起源印度，经阿拉伯中转传欧，故得名 Arabic；更准确为 Hindu-Arabic | ✅verified |
| 14 | "德里铁柱（Mehrauli）高约 7.2 米、约 1600 年几乎不锈、铭文记 King Chandra（定为 Chandragupta II）"（§4-3/§5C/附录 D）| number | encyclopedia | 维基 Iron pillar of Delhi：7.21 m，Chandragupta II 所造；oldest inscription = King Chandra；抗腐蚀 | ✅verified |
| 15 | "Kalidasa 是笈多宫廷供养的梵语第一大诗人，《沙恭达罗》是其名作"（§3/§4-3/§5D/附录 C）| representativeness | encyclopedia | 维基/Britannica：Kalidasa，Gupta 宫廷，Abhijnanashakuntalam 代表作；确切生卒不详 | ✅verified（narrative 已注「确切生卒不详」）|
| 16 | "Nalanda 大学约 427 年 Kumaragupta 治下奠基，世界最早住宿制大学之一，吸引中/朝/藏学者"（§2 L4/§4-6/附录 A/C）| date | encyclopedia | Nalanda Univ 官方/维基：founded by Kumaragupta c. 427 CE；residential，~10,000 学生/~2,000 师；远方学者来学 | ✅verified |
| 17 | "玄奘曾在 Nalanda 求学，但那是笈多之后"（§4-6）| causal | encyclopedia | 维基 Nalanda/Xuanzang：玄奘 7 世纪在 Nalanda 学，确在笈多瓦解（约 550）之后。narrative 已显式标注「那已是笈多之后了」 | ✅verified |
| 18 | "Skandagupta 约 455 起苦战 Huna（嚈哒/白匈奴），战争掏空国库"（§2 L4/§4-8/附录 A/C）| date+causal | encyclopedia | Lumen/维基：Skandagupta 击退 Huna（约 455 入侵），但战费耗尽帝国资源 | ✅verified |
| 19 | "约 480 年代 Huna 突破西北防线深入北印度"（§2 L4/§4-9/附录 A）| date | encyclopedia | 维基 Gupta Empire：Hephthalites 480s 突破西北，500 CE 前后西北大片被 Huna 占 | ✅verified |
| 20 | "约 550 笈多帝国瓦解（外患 Huna + 内部 samanta 离心双因）"（§4-10/§9/附录 A）| causal | encyclopedia | 维基/Lumen：Gupta 约 550 fell；史学综合外患+内部封建离心+经济压力 | ✅verified（衰因之争见 §9，narrative 已并列）|
| 21 | "笈多是相对去中心的封建式行政（samanta 藩属自治），对比孔雀王朝高度中央集权"（§2 L3/§4-9/§7/§10-6/§9）| causal | encyclopedia | Infinity Learn / Chronicle / NextIAS：Mauryan 中央集权 vs Gupta 去中心封建、samanta 制 | ✅verified |
| 22 | "笈多是印度教复兴时代，皇帝多尊毗湿奴，Puranas/神庙艺术兴，佛教在本土渐退（但 Nalanda 等佛教大学仍盛）"（§2 L2/§4-4）| representativeness | textbook | 主流史学：Gupta = Hindu revival，Vaishnava 倾向，Puranas 成形；佛教渐弱但未绝 | ✅verified |
| 23 | "魏晋南北朝约 220-589 大分裂；西晋短暂统一 280-316；589 隋统一"（§8）| date | encyclopedia | Springer/Smarthistory：Wei-Jin-N&S 220-589；Western Jin 短统一 280-316；Sui 589 统一陈 | ✅verified（§8 真中国段，中国术语允许）|
| 24 | "祖冲之（Zu Chongzhi）429-500，圆周率算到 3.1415926~3.1415927（7 位，领先约 800 年），用算筹"（§8/§11/附录 C/D）| number | encyclopedia | 维基 Zu Chongzhi：429-500；π∈(3.1415926, 3.1415927)，记录保持约 800 年；用 counting rods | ✅verified |
| 25 | "中国算筹（counting rods）是十进制位值制的操作工具；印度数字是可书写传播的符号系统——形式差异决定传播命运"（§8）| causal | encyclopedia | 维基 Counting rods（rod numerals = decimal place-value system）+ 数字西传史。narrative 的「形式适不适合传播」为合理史学解释、非绝对断言 | ✅verified（解释性，措辞中性，见红旗 #4）|
| 26 | "varna（四大种姓）+ jati（世袭职业群体）+ 种姓外被排斥者；笈多时代等级秩序进一步固化"（§1/§2 L2/§3 DEFAULT/§7）| representativeness | textbook | 主流史学：varna/jati 等级；Gupta 时代社会分层固化、低种姓与女性处境受限 | ✅verified（「黄金落在谁手里」批判视角为 §9 historiography 承认的主流批判） |

---

## 🚩 红旗句（创始人必审）

> 按影响排序。无事实硬伤；红旗均为约数措辞 / 已透明标注的合成或转述。

1. **[#1/#2/#4/#5/#16/#18/#19/#20] 笈多多数年代为「约数 / 史学区间」**（贯穿 §2 L4 / §4 / 附录 A）
   - **问题**：笈多年代多无精确档案，各权威源给的在位年常差 1-5 年（如 Chandragupta I 加冕 319 vs 320；Chandragupta II 375 vs 380；Nalanda 奠基「约 427」）。task brief 指定 320 口径。
   - **narrative 现状**：已**普遍用「约」字 / "c."** 标注（约 320、约 335-380、约 380-415、约 427、约 455、约 480 年代、约 550），未把任何约数写成铁定档案日期。
   - **建议**：现状**合规**。499（Aryabhatiya）、476（Aryabhata 生）、628（Brahmagupta）、1202（Fibonacci）等是较确证的硬年份，未加「约」，正确。无需改。

2. **[#3 §3 两个合成桥接人物]** 「Pataliputra 抄经少年」「恒河平原村庄农人」（§3 lonely-bridge + receiving-end/DEFAULT）
   - **问题**：两个非 Aryabhata 主角（抄经少年 / 村庄农人）为合成桥接人物（无姓名、无确切个人事迹）。
   - **narrative 现状**：§3 **已显式标注**「虚构桥接人物，但身份与处境完全写实」「不给确切姓名，因为历史几乎没有为他们留名 / 没有为这绝大多数人留下名字——而这恰恰是问题本身」。符合 composite 红线（透明标注 + 身份写实 + 不冒充史料）。
   - **建议**：现状**合规**。这两个视角正是本 topic 的 defaultLens 良心所在（「黄金落在谁手里」），处理得当。无需改。

3. **[#8 Aryabhata 地球自转「坐船」比喻]**（§5A）
   - **问题**：narrative §5A 给的 boat-and-bank 引文是 Aryabhatiya「Gola」篇的**标准学术转述/通行英译**，不是逐字档案原文（梵语原文为诗体，英译有多个版本）。
   - **narrative 现状**：§5A 用「大意（梵→英常见转述）」/ EN "common Sanskrit-to-English rendering" 标注，**未**伪装成逐字档案原文。
   - **建议**：现状**合规**（已声明为转述）。提醒下游 storyboard 若引用，沿用「转述/rendering」措辞，勿排成 Aryabhata 档案逐字原话。

4. **[#25 「形式适不适合传播」的解释]**（§8 中国桥）
   - **问题**：narrative §8 用「印度数字是可书写传播的符号系统、中国算筹是操作工具，故印度数字传遍世界、算筹没有」来解释为何今天用印度数字。这是一个**史学解释（interpretation）**，不是铁定事实——也有学者强调政治/贸易/翻译运动等因素。
   - **narrative 现状**：明确声明「这不是说哪个更聪明——祖冲之精度甚至更高」「靠的是形式适不适合传播」，且 §9 historiography 把数字起源/传播列为仍有细节争论。Rule 0 段强调两边各有高峰、不褒贬。措辞中性、不绝对。
   - **建议**：现状**合规**（已框为解释而非定论，且 Rule 0 平衡）。**这是 §8 中国桥的核心论点，建议创始人确认这个「形式决定传播」的解释口径是否接受**——它是本 topic 最有教学张力、也最需拍板的一句。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | 视角 | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| Pataliputra 抄经少年 | lonely-bridge | **合成桥接人物**（无名字），婆罗门/书吏家庭少年、抄棕榈叶手稿的处境写实 | ✅**已透明标注**（§3「虚构桥接人物，但身份与处境完全写实」「历史几乎没有为他们留名」）|
| 恒河平原村庄农人 | receiving-end (DEFAULT) | **合成桥接人物**（无名字），向 samanta 交租、不识字、受季风支配的处境写实 | ✅**已透明标注**（§3「虚构桥接人物，身份写实」「没有为这绝大多数人留下名字——而这恰恰是问题本身」）|
| Aryabhata | actor-protagonist | **真实历史人物**，生卒/Aryabhatiya/位值/π/地球自转皆有据 | N/A — 非合成 |
| Chandragupta I/II / Samudragupta / Kumaragupta / Skandagupta / Kalidasa / Brahmagupta / 祖冲之 | 配角/对照 | **真实历史人物**，年代/事迹有据（年代多为史学约数，见红旗 #1）| N/A — 非合成 |
| Aryabhata「坐船」比喻引文 | §5A primary source | 标准学术转述/通行英译，非逐字档案原文 | ✅**已标注**为「转述 / rendering」（§5A），未冒充逐字原话 |

**结论**：本 topic 两个合成桥接人物（抄经少年 / 村庄农人）均已在 §3 透明标注为虚构、身份写实，且服务于 defaultLens（「黄金落在谁手里」的受影响者视角）。Aryabhata 比喻已标注为转述。**无未标注的、冒充史料档案样式的合成。** 唯一建议创始人主动拍板的是红旗 #4（§8「形式决定传播」的解释口径是否接受）。

---

## 备注

- **直接引语分层核验**（本 topic 最高风险类）：
  - *标准学术转述（非逐字档案）*：Aryabhata 地球自转「坐船看岸退」比喻（§5A）—— 已声明「大意/转述」，合规。
  - *概念性引述*：「零（śūnya 意为空）」「位值制」「āsanna 意为逼近」—— 均为梵语词义/数学概念的标准说明，未伪造逐条原文，合规。
  - 德里铁柱铭文（§5C）用「记一位名叫 Chandra 的国王」概括，**未**伪造铭文逐字原文，合规。
- **Sushruta 外科（task §范围内但 narrative 未深写）**：task brief 列「医学 (Sushruta 外科)」为范围之一。Sushruta Samhita 的核心成书一般定在公元前（古典传统），保存文本经笈多前后（约 3-4 世纪 AD）增订定型——**它不是笈多『新发明』，把它当笈多原创会失真**。narrative 在 §2 L2 概括了医学/科学全面开花但**未把 Sushruta 单独立为笈多成就**，是**有意的稳妥处理**（避免年代失真）。若创始人希望 storyboard 显式提 Sushruta，建议措辞为「成书更早、在笈多前后整理定型的外科传统」，**勿**写成「笈多发明了外科」。低优先级、可选。
- **§8 同代中国**：为「真中国」段落，按 README cultural ban 第 7 条例外，可正常使用中国术语（魏晋南北朝、祖冲之、算筹、王羲之、云冈/龙门石窟、隋）；已核 cultural ban 词未用于印度段落。中国桥经核实**写实落地**：220-589 分裂期✅、祖冲之 429-500 圆周率 7 位✅、算筹为十进制位值制✅、印度数字 vs 中国算筹的「书写符号 vs 操作工具」对照为合理史学解释（红旗 #4）。
- **算术自检**：
  - 笈多跨度 550 − 320 = 230 年（narrative「约两百三十年」✅）。
  - Aryabhatiya 499 − Aryabhata 生 476 = 23 岁（narrative「二十三岁」✅）。
  - Mauryan（约前 261 Ashoka）→ Gupta（约 320 CE）：约 261 + 320 ≈ 581 年，narrative「约六百年」为合理近似✅（若以 Maurya 立国约前 322 起算则 322+320≈642，narrative 用「约六百年」对两端皆稳妥）。
  - 笈多约 320-550 vs 魏晋南北朝约 220-589：完整重叠✅。
  - 祖冲之 429-500 与 Aryabhata（476-约550）/Aryabhatiya 499 同世纪✅；「几乎完全同代人」措辞稳妥。
  - 数字西传链 印度约500 → Al-Khwarizmi 约825 → Fibonacci 1202，时序单调递增✅。
- **用到的外部核实来源**：Wikipedia（Gupta Empire / Aryabhata / Aryabhatiya / Brahmagupta / Iron pillar of Delhi / Nalanda mahavihara / Zu Chongzhi / Counting rods / History of the Hindu-Arabic numeral system / Northern and Southern dynasties / Sushruta Samhita）、Britannica（Gupta dynasty / Chandra Gupta I / Aryabhata I / Zu Chongzhi）、World History Encyclopedia（Gupta Empire）、Nalanda University 官方、MAA（Chinese rod numerals）、Springer / Smarthistory（Wei-Jin-N&S 220-589）、Encyclopedia.com（Hindu-Arabic numerals）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2 —— 所有高风险 claim 均有来源或已透明标注/可降级措辞，**无 needs-source 缺口**。需创始人**主动拍板**的仅红旗 #4（§8「形式决定传播」解释口径）；#1（年代约数）/#2（两合成桥接人物）/#3（比喻转述）narrative 已自带透明标注，合规。Sushruta 处理为有意稳妥（见备注），可选增补。
