# 明治维新 1868 · The Meiji Restoration Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on narrative，**只写本账本文件**，绝不改内容。

```
topicId:    meiji-restoration-1868
生成日期:    2026-06-02
来源文件:    lib/history-narratives/meiji-restoration-1868.md（CN narrative kernel）
            + lib/history-narratives/meiji-restoration-1868.en.md（EN parallel）
claim 总数:  30
🚩 红旗数:   4（需创始人审）— 3 个 ⚠️downgrade-wording / 措辞收紧 + 1 个 composite 透明性确认；无 needs-source、无事实硬伤
```

**一句话总评**：史实地基**稳**——所有 load-bearing 日期、人名、战役、条约、改革年份均对得上权威来源（Wikipedia / Britannica / Columbia AFE / 1854 Charter Oath PDF / Senate-level encyclopedic 来源）。narrative kernel 的 anti-fab 做得到位：两个 composite 角色（下级武士 / 农家女儿）在 §3 显式标注为「叙事性复合角色」，西乡 §5D 用了「让你听见的那部分，不是他写下来的话」框架。红旗集中在：① 西南战争兵力数字史料区间（约 1.2 万-3 万，narrative 用保守口径「约一万两三千」需确认）② 西乡是否「主谋」措辞已留余地但可再收 ③ §9 中日对照虽守 Rule 0 但需创始人确认中立性达标 ④ 两个 composite 角色透明性确认（已合规）。

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
| 1 | "1853 年 7 月 8 日，佩里率四艘军舰进浦贺"（§1 / §2 L4 / §4.1 / 附录 A）| date+number | encyclopedia | Columbia AFE / 维基 Perry Expedition：1853-07-08，4 舰，浦贺（Uraga, Edo Bay 口）| ✅verified |
| 2 | "1854 年 2 月佩里带八艘军舰回来"（§4.1）| date+number | encyclopedia | 维基 Perry Expedition：1854-02 返航，舰队增至 8 艘 | ✅verified |
| 3 | "《神奈川条约》1854 年 3 月 31 日，结束两百多年锁国"（§2 L4 / §4.1 / 附录 A）| date | encyclopedia | 维基 Convention of Kanagawa：1854-03-31 签订；结束 ~220 年 sakoku | ✅verified |
| 4 | "1858 年《美日修好通商条约》（哈里斯条约）…… 领事裁判权 + 协定关税"（§2 L4 / §4.2）| date+causal | encyclopedia | 维基 Harris Treaty / Ansei Treaties：1858 Treaty of Amity and Commerce，含治外法权 + 低协定关税 | ✅verified |
| 5 | "1863-64 萨摩、长州分别挨西方炮轰"（§3 / §4.4）| date | encyclopedia | 萨英战争 1863（Anglo-Satsuma War）/ 下关战争 1863-64（Chōshū vs 列强联合舰队）| ✅verified |
| 6 | "1866 年 1 月，坂本龙马牵线，萨长同盟成立（西乡 + 木户）"（§3 / §4.5 / 附录 A）| date | encyclopedia | 维基 Satchō Alliance：1866-01-21 京都，Sakamoto Ryōma 牵线，Saigō Takamori（萨）+ Kido Takayoshi（长）| ✅verified |
| 7 | "1868 年 1 月 3 日，王政復古，权力收归天皇睦仁（明治天皇）"（§1 / §4.6 / 附录 A）| date | encyclopedia | 维基 Meiji Restoration / Britannica：1868-01-03 ōsei fukko，Emperor Mutsuhito（追谥 Meiji）| ✅verified |
| 8 | "1868 年 4 月 6 日《五条御誓文》（Charter Oath）"（§4.7 / §5A / 附录 A）| date+quote | primary | Columbia AFE 1868 Charter Oath PDF：1868-04-06 颁布；Art.5 "Knowledge shall be sought throughout the world…" 逐字对得上 | ✅verified |
| 9 | "戊辰战争 1868-69；1868 年初夏（阴历五月十五 = 公历 7 月 4 日）上野之战，西乡破幕军"（§3 / §4.6 / 附录 A）| date | encyclopedia | 维基 Boshin War / Battle of Ueno：公历 1868-07-04（阴历五月十五），Saigō 领兵击溃彰义队，基本终结德川残部 | ✅verified |
| 10 | "1871 年废藩置县（haihan chiken），两百多藩改府县"（§4.8 / 附录 A）| date+number | encyclopedia | 维基 Abolition of the han system：1871，271 藩 → 72/3 府县（"两百多藩"= ~271 准确量级）| ✅verified |
| 11 | "1871-73 岩仓使节团出访欧美（岩仓具视 + 大久保利通）"（§4.9 / 附录 A）| date | encyclopedia | 维基 Iwakura Mission：1871 出发，1873 返；Iwakura Tomomi 团长，含 Ōkubo / Kido / Itō | ✅verified |
| 12 | "1873 征兵令——满二十一岁男丁服役"（§3 / §4.10 / §5B / 附录 A）| date+number | encyclopedia | 维基 Conscription Ordinance 1873：满 21 岁男性服役（4 年现役 + 3 年预备）| ✅verified |
| 13 | "1873 地税改革——按地价交固定现金税（废按收成交米年贡）"（§3 / §4.10 / 附录 A）| date+causal | textbook | 维基 Land Tax Reform 1873：从实物（米）年贡改为按地价的固定货币地税 | ✅verified |
| 14 | "1876 年 3 月 28 日废刀令（Haitōrei）——除军警禁公开带刀"（§3 / §4.11 / §5C / 附录 A）| date | encyclopedia | 维基 Haitōrei：1876-03-28 颁布，禁公开佩刀，军警/大礼服例外 | ✅verified |
| 15 | "1876 年 8 月 5 日强制俸禄处分——俸禄折成政府债券"（§4.11 / 附录 A）| date | encyclopedia | 维基 Meiji（stipend commutation）：1876-08-05 强制 commutation，世袭俸禄折 interest-bearing bonds | ✅verified |
| 16 | "西乡隆盛 1828 年 1 月 23 日生于萨摩下级武士家庭"（§3 / 附录 C）| date | encyclopedia | 维基 Saigō Takamori：born 1828-01-23，Satsuma 下级武士 | ✅verified |
| 17 | "1877 西南战争；约一万两三千人北上，熊本城围攻约五十余日"（§1 / §3 / §4.12 / 附录 A）| date+number | encyclopedia | 维基 Satsuma Rebellion：1877-02-15 起，初约 12,000-13,000（部分来源至 ~30,000 含后续）；熊本城围攻 ~54 日（"约五十余日"准确）| ⚠️downgrade-wording（见红旗 #1）|
| 18 | "守城的是农民出身的征兵新军；旧武士的刀输给征兵新军"（§3 / §4.12 / §6）| causal | textbook | 主流史学共识：熊本守军为政府征召兵（含 conscript），西南战争证明征兵制有效性。措辞用"农民出身"= 征兵制核心来源，成立 | ✅verified |
| 19 | "1877 年 9 月 24 日，西乡退守鹿儿岛城山，重伤自尽"（§3 / §5D / 附录 A）| date | encyclopedia | 维基 Saigō / Battle of Shiroyama：1877-09-24 城山最后一战，重伤后 seppuku | ✅verified |
| 20 | "1889 年明治政府追赦西乡，立为悲剧性民族英雄"（§3）| date | encyclopedia | 维基 Saigō：1889 宪法颁布大赦中追赦、恢复名誉 | ✅verified |
| 21 | "西乡可能并非主谋，更像被推上去又下不来的人"（§3 / §4.12）| motive | encyclopedia | 史学界普遍认为西乡对起兵态度复杂（被部下/私学校生推动），narrative 已用"可能 / 更像"留余地 | ✅verified（见红旗 #2）|
| 22 | "明治天皇登基时是少年；真正操盘的是一小群维新元勋"（§3 / §10 / §11.1）| motive | textbook | 主流史学共识：Mutsuhito 1852 生，1868 维新时 15-16 岁；实权在维新元勋（"revolution from above"）| ✅verified |
| 23 | "1889 颁《大日本帝国宪法》、1890 开国会"（§6）| date | encyclopedia | 维基 Meiji Constitution：1889 颁布，1890 帝国议会开 | ✅verified |
| 24 | "1894-95 甲午战争，日本败清；《马关条约》割台湾、巨额赔款、朝鲜脱离清宗藩"（§6 / §9 / 附录 A）| date+causal | encyclopedia | 维基 First Sino-Japanese War / Treaty of Shimonoseki：1894-95，割台湾、2 亿两赔款、承认朝鲜独立 | ✅verified |
| 25 | "1904-05 日俄战争日本胜俄"（§6）| date | encyclopedia | 维基 Russo-Japanese War：1904-05 日本胜 | ✅verified |
| 26 | "洋务运动（自强运动）1861-1895，纲领『中体西用』『富国强兵』"（§9）| date+quote | textbook | 维基 Self-Strengthening Movement：1861-1895，"中學為體，西學為用"，自强/求富 | ✅verified |
| 27 | "鸦片战争 1840-42、1856-60 打开清朝国门"（§9）| date | encyclopedia | 维基 First/Second Opium War：1839/40-42 + 1856-60 | ✅verified |
| 28 | "日本是唯一没被西方殖民、反而挤进工业强国的非西方国家"（§6 / §0）| absolute | textbook | AP World 标准表述；严格说"少数 / 唯一主要的"更稳，narrative §6 用"唯一一个"略绝对 | ⚠️downgrade-wording（见红旗 #3）|
| 29 | "尊王攘夷（尊崇天皇、驱逐蛮夷）是反幕志士旗号；下级武士是主体"（§2 / §3 / §4.3）| causal | textbook | 维基 sonnō jōi：标准定义 + 主力为下级武士（shishi）| ✅verified |
| 30 | "武士约占总人口百分之五到六；可带刀、有姓、领俸禄"（§2 L2）| number | textbook | 标准史学估计：江户末武士约占 5-7%（含家属口径不一），"5-6%"在保守区间 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 4 条。3 条 ⚠️downgrade-wording（措辞收紧）+ 1 条 composite 透明性确认。**无事实硬伤、无缺来源**。按影响排序。

1. **[#17]** `「起义军约一万两三千人」`（§1 / §3 / §4.12 / 附录 A，西南战争兵力）
   - **问题**：西南战争萨军兵力史料区间较宽——起兵初约 12,000-13,000，但战争全程动员的总数有来源记到约 30,000（含中途加入者）。narrative 统一用保守口径「约一万两三千」，对应的是**起兵初**的数字，没错，但若读者把它当"全程总兵力"会偏低。
   - **建议**：保留现状即可（"约一万两三千"对应起兵初 12,000-13,000 是准确的，且 §4.12 上下文是"向北进军"= 出发时点）。若想更稳，可在附录 A 加一句"（起兵初约 1.2 万-1.3 万，全程动员更多）"。**低优先级，非必改。**

2. **[#21]** `「西乡可能并非主谋，更像是被推上去、又下不来的那个人」`（§3 / §4.12）
   - **问题**：这是 motive 类 claim。史学界对西乡是否主动主谋确有争论（私学校学生的推动 vs 西乡本人意志），narrative 已用「可能 / 更像」留足余地，**处理合规**。唯一可议：把它写得略偏"被动"，部分史观认为西乡虽不主谋但接受领导并非全然被动。
   - **建议**：保留现状（已用"可能/更像"对冲）。若想更中立，可改为"西乡是否主谋史家有争论——他至少接受了领导这场起兵"。**低优先级。**

3. **[#28]** `「唯一一个没被西方殖民、反而挤进工业强国行列的非西方国家」`（§6 / §0 EN "the only"）
   - **问题**：AP World 常见表述，但"唯一"偏绝对——严格说日本是"**最突出/少数**几个里最成功的"。
   - **建议**：CN/EN 都可微调为"**少数**没被殖民、反而成为工业强国的非西方国家中**最突出的一个**"。属绝对表述按 SOP 收紧，7 年级层面影响小。**中低优先级。**

4. **[composite 透明性]** 两个 composite 角色（下级武士 / 农家女儿"小花"）
   - **问题**：非事实硬伤——§3 已对**两个角色**显式标注「这是一个叙事性的复合角色（虚构姓名/家庭）……他/她做的事是虚构的具体化，但承受的政策全是确凿史实」，处理**完全合规**（对照 constitutional-convention 的 Mum Bett 烫疤透明标注红线）。
   - **建议**：确认 storyboard 落地时，composite 角色第一人称节点**不得**伪造 documented quote / 具体史料引证（按第 8 条 A）。农家女儿"血税"误解（§5B）已有史实支撑（1873 血税一揆），非伪造。**列此条仅为透明，非必改。**

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 下级武士（actor lens 主角）| actor | 虚构姓名 + 长州穷武士家庭 + 剪发髻场景；**做的事（倒幕→维新官僚→立法废武士）是史实** | ✅**已透明标注**（§3 开头"这是一个叙事性的复合角色……他做的事——下级武士主导维新、又主导废除武士阶级——是确凿的史实"）|
| 农家女儿"小花"（receiving-end default lens 主角）| receiving-end | 虚构姓名 + 虚构家庭 + 本州山村；**承受的政策（地税/征兵/旧序崩塌）是史实** | ✅**已透明标注**（§3"虚构姓名、虚构家庭……她承受的政策——新地税、征兵、旧确定性的崩塌——全是确凿史实"）|
| 西乡隆盛（lonely-mediator lens 主角）| lonely-mediator | **真实历史人物**，姓名/生卒/事迹皆有据；§5D 内心戏剧用"让你听见的那部分不是他写下来的话"框架 | N/A — 非合成；anti-fab 框架已就位 |
| 西乡城山自尽前的"内心"（§5D）| lonely-mediator | 非伪造——史料确证处境/死法/选择，内心独白显式标为叙事贴近 | ✅**已透明标注**（§5D"他没留下当时的内心独白，史料确证的是他的处境……让你听见的那部分，是叙事让你贴近他的两难，不是他写下来的话"）|

**结论**：本 topic **无未标注的合成人物**。两个 composite 主角（下级武士 / 农家女儿）+ 一处内心戏剧（西乡 §5D）均在 narrative 内显式透明标注，符合 `HISTORY_EVIDENCE_LAYER.md` composite 透明红线。

---

## 备注

- **文化对应硬禁（第 7 条）自检**：全文用日本真实术语（天皇/幕府 bakufu/藩 han/大名 daimyō/武士 samurai/将军 shōgun），**未** Sinicize。§2/§11.3 显式声明"天皇 ≠ 中国皇帝"、"藩 ≠ 中国封国那套"、"不能套用改朝换代理解"，主动防 culturalization bug。§9 描述中国时正常用中国术语（中体西用/洋务/科举/士绅）——这是真的中国，合规。14 词 cultural ban（玉玺/龙袍/金銮殿/翰林/朕/卿/江山等）全文 0 命中（除非作中日并列对照，本文未用）。
- **Rule 0 中立性（§9 杀手桥）**：中日对照**明确**写"差别不在日本人聪明/中国人愚蠢"、"不是日本文明先进/中国文明落后"、"两边都在各自结构约束里做选择"、"一场战争的胜负不等于文明优劣判决"。§9 + §11.6 + §11.7 + §12.4 多处加固 Rule 0。**建议创始人重点审 §9 中立性是否达标**（这是 China-Bridging Quality 一票否决维度）。
- **直接引语分层核验**：
  - *真实史料*：Charter Oath Art.5 "Knowledge shall be sought throughout the world…"（1868 Columbia AFE PDF 逐字）/ "中學為體，西學為用"（洋务运动纲领）—— 对得上一手/标准文本。
  - *演绎/概括句*：下级武士 + 农家女儿第一人称为叙事重构（已标 composite）；西乡 §5D 内心为显式标注的叙事贴近。**无把演绎句排成史料档案样式的违规。**
- **least-certain 已解决**：① 西南战争兵力（取保守起兵初口径 12,000-13,000，红旗 #1 留注）② 武士人口占比（取保守 5-6%，#30）③ 西乡主谋性（用"可能/更像"对冲，#21）。
- **用到的外部核实来源**：Wikipedia（Meiji Restoration / Perry Expedition / Convention of Kanagawa / Harris Treaty / Satchō Alliance / Boshin War / Battle of Ueno / Abolition of the han system / Iwakura Mission / Conscription Ordinance 1873 / Land Tax Reform / Haitōrei / Saigō Takamori / Satsuma Rebellion / Battle of Shiroyama / Meiji Constitution / First Sino-Japanese War / Treaty of Shimonoseki / Russo-Japanese War / Self-Strengthening Movement / Kido Takayoshi）、Britannica（Meiji Restoration / Saigō Takamori）、Columbia AFE（Commodore Perry / 1868 Charter Oath PDF）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2（Fact Ledger）—— 所有高风险 claim 均有来源，**无 needs-source 缺口**，无 dramatization 未标注。4 条红旗中 #17/#21/#28 为低-中优先级措辞收紧，composite 条为透明确认。**建议创始人重点确认 §9 Rule 0 中立性后过 Gate 2。**
