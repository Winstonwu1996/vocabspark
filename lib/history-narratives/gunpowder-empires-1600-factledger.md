# 火药帝国 1600 · The Gunpowder Empires Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    gunpowder-empires-1600
生成日期:    2026-05-25
来源文件:    lib/history-storyboards/gunpowder-empires-1600.js（3 lens：akbar / janissary / non-muslim-subject-receiving-end，各 11 节点）
            + lib/history-narratives/gunpowder-empires-1600.md（narrative kernel）
            + lib/history-storyboards/notebooks/gunpowder-empires-1600.js（同伴笔记本 v1）
claim 总数:  28
🚩 红旗数:   4（需创始人审）— 全部为 ⚠️downgrade-wording / 措辞收紧，无 needs-source、无演绎未标注、无 ✋ 事实硬伤
✋ 硬错数:   0
```

**一句话总评**：史实地基**非常稳**——三大火药帝国的核心日期/人名/制度/反转弧线全部对得上权威来源（Akbar r.1556-1605、1564 废 jizya、sulh-i-kul、Aurangzeb 1679 复 jizya、Babur 1526 Panipat、Shah Ismail 1501 什叶国教、Chaldiran 1514、Constantinople 1453、Suleiman r.1520-66、devshirme/Janissary 双面、1826 Auspicious Incident）。**最关键的清坑点 Din-i Ilahi 处理完全正确**——storyboard/kernel/notebook 三处都显式标「极小/核心信徒不过十几人/死后即散/不是国教」，权威来源核实为「never more than 19 adherents」，「十几人」准确且 anti-fab 已透明标注。Janissary 个人姓名/年龄/童年为合成补充，已用括号短句透明标注。红旗集中在**两个反复出现的数量级近似**（莫卧儿「一亿人」属高位估计；「八成印度教徒」严格说约 85%）和 2 处可轻度收紧的概括表述。**无 ✋ 硬错，无未标注演绎角色，Gate 2 可过。**

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
| 1 | "1564 年 …… 废掉 jizya"（`akb-n4` / `akb-n6` / `nms-n4`，kernel §3/§4/附录A，notebook akbar-tolerance）| date | encyclopedia | 维基 Jizya / GKToday / Britannica Akbar：1564 Akbar 颁 farmān 废 jizya | ✅verified |
| 2 | "1679 年 …… Aurangzeb 把 jizya 又加了回来"（`akb-n8` / `nms-n6`，kernel §3/故事11/附录A，notebook reversal）| date | encyclopedia | 维基 Aurangzeb / GKToday：1679 重征 jizya，距 Akbar 废后约一世纪 | ✅verified |
| 3 | "我 1542 年生 …… 13 岁 …… 接了一个还没焐热的帝国"（`akb-n1`/`akb-n2`，kernel §3/附录C，notebook keyFigures）| date+number | encyclopedia | 维基 Akbar：生 1542-10-15，1556-02-14 继位（13 周岁满 / 第 14 年）。"13 岁" 在容许范围（见备注）| ✅verified |
| 4 | "Akbar …… 1556-1605 在位 …… 统治印度约一亿人"（kernel §3/附录C，notebook roleCn，`akbar` description）| number | textbook | 维基 Akbar r.1556-1605 ✅；人口「一亿」= 标准教材数 (莫卧儿领土 ~60-100M / 全印度 ~100-150M)，属高位估计 | ⚠️downgrade-wording（见红旗 #1）|
| 5 | "每十个里，有八个不信我的教 …… 八成是印度教徒"（`akb-n1` 等多处，kernel §1/§3）| number | textbook | 主流教材常用「约八成印度教徒」；现代估计穆斯林 ~15% → 印度教 ~85%，"八成" 略低 | ⚠️downgrade-wording（见红旗 #2）|
| 6 | "sulh-i-kul …… 意思是『与所有人和平』『普遍的宽容』"（`akb-n5`，kernel §3/附录B，notebook）| quote | encyclopedia | 维基/Britannica：sulh-i-kul = "universal peace / peace with all"，Abu'l-Fazl 表述的治理原则 | ✅verified |
| 7 | "我娶印度教 Rajput 公主 …… 用印度教徒当我的高官、财政大臣、甚至带兵的将领"（`akb-n5`，kernel §3）| textbook | encyclopedia | 维基 Akbar：联姻 Rajput、用 Hindu/Rajput 高官（如 Man Singh 入 Navratnas、Todar Mal 掌财政）| ✅verified |
| 8 | "Ibadat Khana（信仰之厅）…… 各教学者夜辩 …… 婆罗门/耆那/琐罗亚斯德/耶稣会"（`akb-n3`，kernel §3）| textbook | encyclopedia | 维基/WorldHistory：Akbar 1575 建 Ibadat Khana，1578 起请 Hindu/Jain/Zoroastrian/Jesuit 等同辩 | ✅verified |
| 9 | "Din-i Ilahi …… 极小、几乎没人信，核心信徒据记载不过十几个人，我一死它就散了 …… 不是国教"（`akb-n7`，kernel §3/§10，notebook din-i-ilahi）| number | encyclopedia | 维基 Din-i Ilahi："never more than 19 adherents"，1605 Akbar 死后消散。"十几人" 准确；**显式不夸大处理正确** | ✅verified |
| 10 | "Abu'l-Fazl …… Akbarnama …… 官方颂扬性史料 …… 这里是意译，不是逐字引文"（kernel §5A）| quote | primary | 维基 Akbarnama：Abu'l-Fazl（1551-1602）受命所撰官方编年；kernel **已透明标注意译+带立场** | ✅verified |
| 11 | "我祖父是 Babur …… 1526 年立了莫卧儿 …… 用火炮以少打多"（`akb-n2`，kernel §1/故事5/附录C，notebook gunpowder）| date+causal | encyclopedia | 维基 First Battle of Panipat：1526-04-21 Babur ~12,000 兵 + 15-20 炮胜 Lodi（5-7 万）→ 立莫卧儿 | ✅verified |
| 12 | "父亲 Humayun …… 在书房石阶上一脚踏空摔死了"（`akb-n2`，kernel §3）| causal | encyclopedia | 维基 Humayun：1556 于 Sher Mandal 图书馆台阶跌落致死 | ✅verified |
| 13 | "1453 年 …… 用火炮和血肉，轰开了君士坦丁堡一千年没破的城墙"（`jan-n4`，kernel §1/故事1，notebook three-empires）| date+causal | encyclopedia | 维基/Britannica：1453-05-29 Mehmed II 用 Urban 巨炮破君堡城墙 | ✅verified |
| 14 | "devshirme …… 从巴尔干（有时安纳托利亚）基督徒家庭挑走男孩 …… 皈依伊斯兰 …… 苏丹的奴隶"（`jan-n1`/`jan-n2`/`jan-n3`，kernel §3/§5C，notebook devshirme）| textbook | encyclopedia | 维基/Britannica devshirme：巴尔干（含安纳托利亚）基督徒男孩 8-18 岁、强制皈依、法律为苏丹奴隶 | ✅verified |
| 15 | "首席行政官 …… 帝国的二把手 …… 好几个就是我们 devshirme 出身的人"（`jan-n5`/`jan-n9`，kernel §3，notebook devshirme）| textbook | encyclopedia | 维基 Grand vizier：职权仅次于苏丹；devshirme 出身大维齐尔多见（如 Ibrahim Pasha 1523-36）| ✅verified |
| 16 | "不许结婚、没有家庭、法律上是苏丹的财产/奴隶"（`jan-n1`/`jan-n3`，kernel §3）| textbook | encyclopedia | 维基 Janissary：古典期禁婚、无家室、为苏丹 kapıkulu（奴隶兵）| ✅verified |
| 17 | "到了 17 世纪 …… 能废黜苏丹、扶植我们想要的人上台"（`jan-n7`）| causal | encyclopedia | 维基/学界：17 世纪 Janissary 多次干政，1622 弑 Osman II，世纪内约 12 位苏丹被废/弑 | ✅verified |
| 18 | "1826 年 …… 调来 …… 新军和火炮，把我们 …… 成建制剿灭 …… 『吉祥事件』"（`jan-n8`）| date | encyclopedia | 维基/Britannica Auspicious Incident：1826-06-15 Mahmud II 用火炮剿灭 Janissary 军团 | ✅verified |
| 19 | "萨非 …… 1501 年起，把整个波斯从逊尼派强制改成什叶派"（`akb-n9`/`nms-n9`，kernel §1/故事2，notebook safavid）| date+causal | encyclopedia | 维基 Safavid conversion / Britannica Ismail I：1501 Ismail 定十二伊玛目什叶为国教、武力强制改宗 | ✅verified |
| 20 | "一个用强制造出来的宗教身份，五百年后，成了今天伊朗最真实的认同"（`akb-n9`/`nms-n9`，kernel §6/§10，notebook safavid）| causal | textbook | 维基/学界共识：萨非强制改宗造就今伊朗什叶核心身份。措辞已留余地 | ✅verified |
| 21 | "1514 Chaldiran …… 奥斯曼火炮击败萨非（逊尼-什叶分界线就此画下）"（kernel §2 L4/故事3/附录A，notebook safavid）| date+causal | encyclopedia | 维基/Britannica Chaldiran：1514-08-23，奥斯曼火炮 + Janissary 火枪胜无炮的萨非骑兵 | ✅verified |
| 22 | "1520-1566 苏莱曼大帝 …… 立法者 Kanuni …… 黄金期"（kernel §2 L4/故事4/附录C，notebook keyFigures）| date | encyclopedia | 维基/Britannica Suleiman：r.1520-1566，"Kanuni/the Lawgiver"，奥斯曼鼎盛 | ✅verified |
| 23 | "millet（米利特）制 …… 把非穆斯林按宗教社群分开管（东正教/亚美尼亚/犹太）…… 交 jizya"（`akb-n9`/`nms-n7`，kernel §2 L3/§3，notebook three-empires）| textbook | encyclopedia | 维基 Millet：三大 millet（Rum/Armenian/Jewish）半自治、自收税、交 jizya | ✅verified |
| 24 | "jizya 是 …… 向有经的人（dhimmi，含基督徒/犹太/莫卧儿语境下印度教徒）征的人头税，换受保护、可保留信仰"（kernel §5B，`nms-n2`，notebook jizya）| textbook | encyclopedia | 维基 Jizya / dhimmi：非穆斯林人头税换受保护地位，非强制改宗。"温度计不是火刑架" 比喻正确纠误 | ✅verified |
| 25 | "我孙子 Shah Jahan …… 给亡妻盖了 …… 泰姬陵（Taj Mahal）"（`akb-n8`，kernel §2 L4/故事10，notebook keyFigures 间接）| causal | encyclopedia | 维基 Shah Jahan：为 Mumtaz Mahal（亡 1631）建泰姬陵（1630/1632-1653）。注：Shah Jahan 是 Akbar 之孙，世系正确 | ✅verified |
| 26 | "我的曾孙 Aurangzeb …… Akbar 曾孙 …… 1707 死后帝国迅速碎裂"（`akb-n8`，kernel §3/故事11/附录C，notebook reversal）| causal | encyclopedia | 维基 Aurangzeb：Akbar 曾孙（Akbar→Jahangir→Shah Jahan→Aurangzeb），r.1658-1707，死后莫卧儿速衰 | ✅verified |
| 27 | "mansabdari（官阶军功制）+ zabt（土地丈量定税制）…… 用数字管帝国"（kernel §2 L3/§0，notebook gunpowder）| textbook | encyclopedia | 维基 Mansabdari / zabt：Akbar 行政税收体系。注：mansabdari 由 Akbar 制度化（非 Shah Jahan）| ✅verified |
| 28 | "1600 年的中国是明朝万历年间 …… 火药本就是中国发明 …… 明朝有自己的火器部队（神机营）"（kernel §8，notebook q3）| textbook | encyclopedia | 维基 Shenjiying：明永乐建神机营（世界最早常备火器部队），万历朝（1573-1620）仍用火器 ✅。"火药中国发明" 史实 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 全部为 ⚠️downgrade-wording（措辞收紧），**无事实硬伤（✋=0）、无缺来源、无演绎未标注**。按影响排序。

1. **[#4]** `「统治印度约一亿人」/「我治下有一亿人」`（kernel §3、`akb-n1`/`akb-n2`/`akb-n5`/`akb-n10` 反复出现「一亿人」「八千万非穆斯林」）
   - **问题**：「一亿」是教材广为采用的传统数字，但现代人口史更细：Akbar 1600 年的**莫卧儿领土**约 60-100 百万（上修后可达 ~100M），而 ~100-150M 是**全印度**或**晚 17 世纪**的数。把「一亿」直接等同于 Akbar 一朝直辖人口属高位取整，且 storyboard 把「八千万」非穆斯林当精确支点反复用。
   - **建议**：可保留「约一亿」（教材通用、冲击力强），但若想更稳妥，akbar lens 可改为「治下数千万到约一亿人」或在 kernel §2 L2 注明「一亿为含全印度的高位估计」。这是出现频率最高的数字，但属**量级合理的教材近似**，非硬伤，列为最高优先仅因复现频次。

2. **[#5]** `「每十个里，有八个不信我的教」/「八成是印度教徒」`（`akb-n1`/`akb-n5`/`akb-n6`/`akb-n10`，kernel §1/§3，notebook roleCn「八成是印度教徒」）
   - **问题**：现代估计莫卧儿治下穆斯林约 15%，则非穆斯林约 85%、印度教徒接近 85%（其余含耆那/锡克/基督等）。「八成（80%）印度教徒」略低于实际，且严格说「八成不信我的教」（非穆斯林）更接近 85%。
   - **建议**：「八成」是 AP 教材常见近似，可接受；若要更准可写「八九成不是穆斯林」或「绝大多数（约八成半）是印度教徒」。低优先，影响小，与 #1 同批微调即可。

3. **[#27 关联]** `「mansabdari（官阶军功制）」归属`（kernel §2 L3 / notebook gunpowder「莫卧儿：mansabdari + zabt」）
   - **问题**：**非事实硬伤**——kernel/notebook 把 mansabdari 正确归在 Akbar 名下（Akbar 制度化）。唯一可加固点：通俗印度史考题里偶有「mansabdari 由 Shah Jahan 引入」的错误说法（见 testbook 题），本 topic **没有犯这个错**，反而对得很准。
   - **建议**：无需改。**列此条仅为透明**，确认本 topic 在这个常见陷阱上是对的。

4. **[#3]** `「13 岁继位」`（`akb-n1`/`akb-n2`，kernel §3「1556 年 13 岁继位」，notebook 间接）
   - **问题**：Akbar 生 1542-10-15，1556-02-14 继位 → 此时**满 13 周岁、处第 14 年**。部分权威来源写「14 岁」（按虚岁/进位）。「13 岁」按周岁正确，但存在 13/14 两说。
   - **建议**：保留「13 岁」（按周岁严格成立，且与 storyboard 情感叙事「猝然接位的少年」一致）；若想规避两说之争可写「十三四岁」。最低优先，属可接受表述。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 一个 Janissary（个人姓名/年龄/童年片段/母亲在门口看他被带走）| janissary（全 11 节点）| Janissary 是**真实必考群体**；个人具体姓名、被带走年龄、村庄位置、母亲细节为**叙事性补充**，制度本身（devshirme→皈依→精锐奴隶兵）是史实 | ✅**已透明标注**（`jan-n1` 括号短句「我叫什么、几岁被带走的、村子在哪 …… 是这一遍替你补的 …… 制度本身 …… 是实打实的历史」+ kernel §3 第二段 + meta.notes anti-fab 条）|
| 一个莫卧儿印度教农民（receiving-end, DEFAULT）| non-muslim-subject（全 11 节点）| 泛指性代表人物（无具名捏造档案）；代表「人数最多却最没声音」的非穆斯林多数，属合理 representativeness | ✅可接受（无具名虚构史料；属教学代表人物，制度/政策/年份全有据）|
| Din-i Ilahi「核心信徒不过十几人」| akbar `akb-n7` | 非合成人物，而是**主动清坑**：显式否定「Akbar 创新宗教席卷帝国」的夸大 | ✅**已透明标注且方向正确**（权威「never more than 19 adherents」支持「十几人」；死后即散）|
| "你就是 TA" 第二人称代入（`*-n4` peak）| 全 3 lens | 把读者置入主角内心做选择，属**教学代入手法**，非伪造史实人物 | N/A — 教学手法，非合成角色 |
| Akbarnama「意译」段（明君当以理性对待各家信仰…）| kernel §5A | 非逐字引文，是对 Abu'l-Fazl sulh-i-kul 思想的**意译/概括** | ✅**已透明标注**（「大意（意译，非逐字）」+「这里是意译，不是逐字引文」）|

**结论**：本 topic **无未标注的合成人物、无伪造引语**。Janissary 个人细节、Akbarnama 意译、Din-i Ilahi 清坑三处演绎/概括成分均在 storyboard 节点 + narrative kernel + meta.notes 透明标注，符合 `HISTORY_EVIDENCE_LAYER.md` §1.3 / §2.1 composite 透明红线。

---

## 备注

- **抽取覆盖**：3 lens 全覆盖 —— akbar（perpetrator-actor，11 节点）/ janissary（lonely-mediator，11 节点）/ non-muslim-subject-receiving-end（receiving-end，DEFAULT，11 节点）+ narrative kernel + notebook（8 考点卡 + 3 DBQ 题）。红旗分布：跨 lens 共享数字 #1/#2（人口/百分比）影响 akbar lens 多节点与 kernel；#3/#27 为低优先确认项。
- **核心清坑点核验（本 topic 最高风险，全部 ✅）**：
  - *Din-i Ilahi*：权威「never more than 19 adherents」「dissolved after Akbar's death」→ storyboard「极小/核心信徒不过十几人/死后即散/不是国教」**完全准确**，且三处（akb-n7 / kernel §3·§10 / notebook din-i-ilahi）一致显式不夸大。这是 AP 最爱埋的事实陷阱，本 topic 处理是**模范级**。
  - *devshirme 双面*：「既是强夺也是上升阶梯」与维基/Britannica「forced levy + rose to grand vizier」一致，未砍掉任一半史实。
  - *jizya 不是强制改宗*：「人头税换受保护地位/温度计不是火刑架」与 dhimmi 制度事实一致，正确纠正常见误解。
  - *萨非什叶非自古有*：「1501 起强制造出/五百年后成真认同」与 Safavid conversion 史实一致。
- **Akbar→Aurangzeb 反转弧线（topic 主张力）核验**：1564 废 jizya（Akbar）↔ 1679 复 jizya（Aurangzeb，Akbar 曾孙，1707 死后帝国碎裂）—— 日期、世系、因果全部 ✅；两路都给逻辑（Aurangzeb 缺钱/正统/边疆）不下结论，符合 Rule 0。
- **3-empire coverage 核验**：Ottoman（1453 君堡 / devshirme / millet / 1826 Auspicious Incident）✅ · Safavid（1501 什叶国教 / 1514 Chaldiran / Shah Abbas 伊斯法罕）✅ · Mughal（1526 Panipat / Akbar / Aurangzeb 主线）✅。
- **§8 明朝结构对照（Rule 0 一票否决维度）核验**：万历朝 ✅ · 火药中国发明 ✅ · 神机营（世界最早常备火器部队，永乐建）✅ · 用真正中国词（神机营/科举/内阁/六部/土司）符合 cultural-ban 第7。无「伊斯兰先进/明朝落后」式褒贬。
- **cultural-ban 第7 核验**：全程 Sultan/Shah/Padishah/Janissary/devshirme/jizya/sulh-i-kul/millet/mansabdari/zabt，**未发现**用「皇帝/丞相/太子」类中国词译伊斯兰帝国官职。✅
- **用到的外部核实来源**：Wikipedia（Jizya / Akbar / Aurangzeb / Din-i Ilahi / Devshirme / Janissary / Grand vizier / Auspicious Incident / Safavid conversion of Iran to Shia Islam / Ismail I / Battle of Chaldiran / First Battle of Panipat / Babur / Humayun / Fall of Constantinople / Mehmed II / Suleiman / Millet (Ottoman Empire) / Mughal Empire / Shah Jahan / Akbarnama / Abul Fazl / Ibadat Khana / Mansabdari / Shenjiying）、Britannica（Akbar / Chaldiran / Ismail I / Devsirme / Grand vizier / Auspicious Incident / First Battle of Panipat / Fall of Constantinople / Mughal dynasty）、GKToday（jizya abolition / reimposition）、OpenStax World History、World History Encyclopedia（Ibadat Khana）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2（Fact Ledger）—— 所有高风险 claim 均有权威来源或可降级为谨慎措辞，**0 个 ✋ 硬错、0 个 needs-source 缺口、0 个未标注演绎**。4 条红旗全为 ⚠️downgrade-wording（人口「一亿」/「八成印度教徒」量级近似为主），**建议微调 #1/#2 后即可过 Gate 2**；#3/#27 为透明性确认项，无需改动。
