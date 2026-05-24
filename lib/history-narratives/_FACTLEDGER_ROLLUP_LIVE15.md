# Fact Ledger 红旗汇总 — 15 个已上线老 topic（2026-05-23 补做）

> 这 15 个是 VocabSpark 早期已上线 topic，之前只过 4-agent review，**从未做 Fact Ledger**。
> 本次按 22 个新 topic 的统一标准补做。**每个 topic 都查出 prose-read 漏掉的真史实错误**——
> 证明结构化 + web 核实远比整体通读有效。详账本在 `<topicId>-factledger.md`。
>
> ⚠️ 这些是**生产上线内容**（用户现在就看得到），修复=改 live 内容。

---

## 🅰 必修硬错（✋）— ✅ 已全部修复（2026-05-23，commit 9a0d81d / 6555b51 / 7d8249d / cc8bb71）

> 14 处硬错已定点修复（CN+EN+deliverGoal+narrative 一致，node --check 全过，37 storyboard 加载正常）。
> 下表保留为审计记录。magna-carta 无 ✋ 硬错（骨架稳健，仅低优先级 #24/#6 未改）。

### 必修硬错（✋，原始记录）

| topic | 位置 | 错 → 对 | 触达 |
|---|---|---|---|
| **islamic-rise** | narrative §1 | 蜘蛛/鸽子传说标成「《古兰经》9:40 记载」→ 古兰经无此内容（后世 Sirah 传说，且被权威判不实）。**宗教硬错，对穆斯林读者冒犯** | narrative |
| **age-of-exploration** | `ana-n10/n12` + 学生可见 fictionalDisclaimer | Anacaona 王后「被烧死」→ 实为被俘押往 Santo Domingo **绞死**；屠杀「1503/11/9」→ 主流 **1503/7** | **student-facing** |
| **medieval-japan** | `tokimune-n4` + §7 | 斩使「1271→1274 因果」→ 著名斩使实为 **1275（一战 1274 之后）**，年代+因果双倒置 | storyboard |
| **medieval-japan** | `masako-n9` | 政子 1221「我站起来发言」→ 据《吾妻鏡》是**安达景盛代读** | storyboard |
| **black-death** | `agnolo-n7` | 屠杀地写「最大犹太会堂」→ 实为 **Werd 岛木堆**（另两 lens 都对，本 lens 自相矛盾）| storyboard |
| **renaissance** | savonarola-n6/7/9, lucia-n6, lorenzo-n12 | 火堆「约 60 米」→ 实约 **60 英尺≈18 米**（3.3×，5 处重复）| storyboard |
| **renaissance** | `lorenzo-n6` | Pater Patriae 头衔挂 Lorenzo → 实仅身后授**祖父 Cosimo** | storyboard |
| **mali** | `mm-n6` + §0/§1/§3 | 开罗金价跌「约 25%」→ 实约 **12%**，且误挂为 al-Umari 一手数据（4 处）| storyboard+narr |
| **reformation** | luther-n9, agnes-n10 | 「新教烧女巫比天主教多，史学反复确认」→ **与学界相反**（迫害最烈是天主教西南德） | storyboard |
| **pre-columbian** | `pc-n4` | Cusco：Coricancha=豹头 / Saqsaywaman=豹背 → **对调了**（Saqsaywaman 才是豹头）| storyboard |
| **tang-song** | narrative §3.8 | 赵明诚临终「分香卖履」温情告别 → 原文是「**殊无**分香卖履之意」=语义反转 | narrative |
| **byzantine** | narrative §1 | 圆顶纪录「直到 1710 St Paul's 才超」→ 应 **1436 Florence**（storyboard 已对，kernel 矛盾）| narrative |
| **crusades** | §5 + alexios-n1 | 伪造《Alexiad》引文（Bohemond「最帅/眼冷如狼」非原文）+ 伪造私人信场景 | narrative |
| **enlightenment** | narrative §6 | 《百科全书》「28 卷正文+11 图版」→ 实 **28 卷=17 正文+11 图版** | narrative |

## 🅱 建议修（引语诚信 / 内部矛盾 / 降级，各 topic 详账本）
- **引语层累当确证**：reformation「Here I stand」、byzantine「Solomon I surpassed thee」(误归 Procopius)、crusades「血及马腹」、tang-song 欧阳修「三百年第一」(应百年第一)/章惇句、mongol Kalka「12 王公木箱」、scientific-rev 1711 德文 Council 引语 → 标「传说/大意」或降级。
- **内部数字/日期跨 lens 或跨文件矛盾**：mali 人口(4-5千万 vs 5-15M)、enlightenment 英军死亡(25k vs 40k)、black-death 日期(1.24 vs 2.14)、islamic-rise Mu'tazila(839 vs 847)、byzantine 癌型、renaissance 处决数(80 vs 90)/Charles VIII 年龄、scientific-rev 声速(448 vs 316)。
- **绝对/夸张表述降级**：mongol 西征屠城数字(storyboard 未对齐 narrative「人口学不可能」)、age-of-exploration「天花」时代错置(1518 前泛称疫病)、mali UNESCO 年份(1998→2009)、pre-columbian Landa 焚书数(几千→27 codices)、medieval-japan 雪舟宁波(1467→1468)。

## ✅ 复核确认的强项
- 合成角色透明标注：全 15 个 topic 的 composite 全部到位（Tom/Devorah/Lucia/Aisha/Ix Mutal/Anna 等）。
- 文化对应硬禁：15 个全部通过（无中国概念词误植非中国史；tang-song 是中国史，用中文词正确）。
- careful framing / 反 Whig / 史料分层：多处达 gold-standard（scientific-rev 苹果三红旗、mongol 屠城自警、age-of-exploration Taíno 人口区间脚注、islamic-rise anti-Orientalist）。

## 判定
- 15 个老 topic 史实**骨架普遍稳健**，但**每个都有 1-3 处必修/建议修**。
- 严重度排序（建议先修）：islamic-rise 宗教错 + age-of-exploration Anacaona（student-facing）> medieval-japan 因果倒置 + black-death 自相矛盾 + renaissance 单位错 > 其余。
- 修法：与 22 个新 topic 的 9 硬错一样，定点 Edit，不动 voice/结构。
