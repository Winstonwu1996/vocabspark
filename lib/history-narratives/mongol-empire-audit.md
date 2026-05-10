# Mongol Empire Narrative Kernel — Audit

**Auditor**: Sarah Chen, EdD (Stanford / 12 yr AP World+Euro)
**File audited**: `/Users/williamai/projects/vocabspark/lib/history-narratives/mongol-empire.md` (1737 行 / CN+EN inline)
**Date**: 2026-05-09
**Skim 范围**: §0 / §0.5 / §3 / §4 / §5-§10 spot-check. EN 版主要靠 grep 比对一致性。

---

## 1. 执行总结

**裁决**: **SHIP-WITH-FIXES**

**Headline finding**: 史观、framing、跨 Topic 编织都是这套课程目前最强的一篇——Pax Mongolica 100 年商路 + 4 大汗国本地化 + Karakorum 召回机制三把钢筋同时立住,7 年级第一次"看见网络"的 pedagogical payoff 真正被兑现了。但内部存在 **3 处年代/谱系硬错** 和 **1 处 framing 自相矛盾**,在 ship 前必须打补丁,否则 7 年级老师当场就能用对照查出 bug。

骨架级亮点:
- §0 反 Whig framing 抢在所有 narrative 之前到位(不像 reformation 拖到 §10 才反 Whig)
- §3 9 主角全部带"他面对的题",符合 AUTHORING_PIPELINE.md 第 3 条 character 是 problem-solver 不是 hero
- §10 8 misconception 真的是 8 个,不是 5 个充水到 8 个(对比 islamic-rise 当时的问题)

---

## 2. 8 维度评分

| 维度 | 分 (1-10) | 备注 |
|---|---|---|
| 1. 史实准确度 | **6.5** | 3 处硬错 (Hulagu/Kublai 长幼颠倒、Genghis 死日 18 vs 25、4月12日撤兵)+ 数处部族/拼写不一致 |
| 2. Anti-Whig framing | **9** | §0/§4/§7/§9/§10 五段层层互锁,4 派 historiography 都呈现且自我反思 |
| 3. 7 年级可读性 | **8** | §1 hook (41 岁 Onon 河源头) 立刻抓人;§4.4 Pax Mongolica 三例 (Polo/Ibn Battuta/Black Death) 衔接清晰 |
| 4. 跨 Topic 编织 | **9.5** | 同时勾连 Tang-Song / Islamic Rise / Crusades / Black Death / Mali / AoE 共 6 个 topic, 这是全课程目前最深的网络密度 |
| 5. 一手史料密度 | **8** | §5 三段 (Secret History / Marco Polo / Rashid al-Din) 多语言+多视角,蒙古/波斯/欧洲三方对照,远超 mali-empire 的 2 段 |
| 6. 角色立体度 | **7.5** | Genghis/Sorghaghtani/Yelü 都有 problem-arc;但 Börte 和 Subotai 偏功能化,Marco Polo 章节没处理 Wood 怀疑论 (放在 §10.5/§7.4 但 §3 lens 章节没交代) |
| 7. 数字 / 引用规范 | **6** | 屠城数字给了多版本范围 (好);但 Merv 屠城日期 §1 写 1221 / §4 写 1222,Genghis 死日 §2 写 8.18 / §3 写 8.25,需统一 |
| 8. Lens 适配度 | **8** | 推荐的 3 lens (Genghis/Yelü/Sorghaghtani) 在 §3 都有 25-行级原料;Pax Mongolica micro-detail 跨 lens 角度的素材在 §0 和 §4.4 都铺好 |

**综合**: 8.0 / 10. 跟 islamic-rise (7.5) / mali-empire (7.8) 同档,但比它们 framing 更整,需要的是**精修而非重写**。

---

## 3. P0 必修 (3 处)

### P0-1. Hulagu / Kublai 长幼颠倒 (line 553, 581 EN line 729, 757)

L553 (CN §3 Sorghaghtani 节): "长子 Möngke...**次子 Hulagu...三子 Kublai**...四子 Ariq Böke"
L581 (CN §3 Hulagu 节): "出身 Tolui 跟 Sorghaghtani **第二子**。1218 年生"
L729 / L757 (EN 版): same error

**事实**: Möngke 1209 / Kublai 1215 / Hulagu 1218 / Ariq Böke 1219. 正确顺序是 **Möngke → Kublai → Hulagu → Ariq Böke**. Line 599 Kublai 节自己就写"第三子(按通行排序)"——与 581 直接矛盾.

**修法**: L553 改"长子 Möngke...次子 Kublai...三子 Hulagu...四子 Ariq Böke"; L581 改"第三子"; EN 同步. 这是会被 7 年级老师查 Wikipedia 当场 catch 的硬错.

### P0-2. Genghis 死日 8.18 vs 8.25 (line 174 vs 487)

L174 (§2 timeline): "1227 年 8 月 18 日"
L487 (§3 Genghis 节): "1227 年 8 月 25 日他死...享年 65 岁"

**事实**: 学界共识是 1227 年 8 月 18 日 (《元史·太祖本纪》, 拉施特 *Jami al-Tawarikh*). 8 月 25 日是少数蒙古口传日期.

**修法**: 统一为 8 月 18 日,或在 §3 加一行"日期史料分歧 (8.18 vs 8.25)". 推荐前者——单一作品里日期不能两版本无说明.

### P0-3. §0 line 26 vs §4 line 860 — Mongol 撤兵日期框架自相矛盾

L26 (§0 anchor 2): "4 月 9 日波兰 Legnica + 4 月 11 日匈牙利 Mohi 两场决定性胜利,**4 月 12 日突然全军撤回 Karakorum 选大汗**"
L860 (§4.2 zoom-in): "**1241 年 4 月 12 日,蒙古抵 Vienna 50 公里外**...然后:停。**1241 年 12 月 11 日,大汗 Ögedei...死**...消息...**1242 年春消息到**...**1242 年春,蒙古全军从匈牙利平原撤退**"

**事实**: §4.2 是对的——Mohi 之后蒙古在匈牙利驻扎近一年,直到 1242 春才因 Ögedei 死讯撤退. §0 写"4 月 12 日撤回"等于把整个事件压扁成 3 天,把 anti-Whig 钢筋彻底打散——读完 §0 学生会以为 Ögedei 1241.4 月就死了.

**修法**: §0 L26 改"1241 年 4 月 9 日...4 月 11 日 Mohi 大胜后驻扎匈牙利,12 月 Ögedei 死讯传出,**1242 年春**全军撤回 Karakorum 选大汗". EN L249 同步修.

---

## 4. P1 应修 (6 处)

### P1-1. Sorghaghtani 部族拼写 (L34: "Khereid" vs L114/116/126/545: "Kereit")
全文 25 处用 "Kereit", L34 单点用 "Khereid". 学术界 Kereit (或 Keraite) 是主流,Khereid 是蒙古文转写. 统一为 Kereit.

### P1-2. 1206 6 大部族列表不一致 (L25 vs L838)
L25: Naiman/Tatar/Kereit/Merkit/**Mongol/Khamag**
L838: 克烈/乃蛮/塔塔尔/蔑儿乞/**斡亦剌 Oirat/蒙古本部**

**问题**: Khamag Mongol = "全蒙古" 是 Mongol heartland 的另一个名字,不是单独部族. Oirat 是西部森林部族. 学界常列的 5 大草原部族是 Mongol/Tatar/Kereit/Merkit/Naiman. 修法: 统一为 5 大部族 (Mongol/Tatar/Kereit/Merkit/Naiman) + 备注"另含 Oirat 等森林部和 Khamag 联盟",不要写"6 大".

### P1-3. Merv 屠城年份 (L171: "1221 屠 Merv" vs L846: "1222 年屠 Merv")
史学共识 Merv 1221 年 2 月. L846 改 1221.

### P1-4. Hulagu 1258 年龄 (L870: "这一年 41 岁")
若 1218 生,1258 应 40 岁 (Feb 围城时尚未过生日). 改 40 岁,或注"1217 一说则 41".

### P1-5. Marco Polo 怀疑论在 §3 lens 章未交代 (L621-639)
§5.2 / §7.4 / §10.5 都有 Wood 1995 怀疑论,但 §3 Marco Polo lens 节 (L621) 把"在元朝当差 17 年"作为定论叙述,只在 L633 一行带过"史学界至今争论". 如果 lens 节作为 7 年级 read-aloud 的核心素材,怀疑论钩子要前置 1-2 行 (放在 L626 之后),否则 lens content 跟 §10.5 钢筋脱节.

### P1-6. Sorghaghtani 4 子"都成大汗"的过度简化 (L34, L553)
L34: "4 个儿子 (Möngke / Hulagu / Kublai / Ariq Böke) 都成大汗"
L553: 重复同样描述

**问题**: Ariq Böke 1260 自立但 1264 战败投降,1266 死,Ulaanbaatar 学界正史不把他当作 legitimate Khagan. 这种 framing 让 §3 题眼"4 大汗的母亲" 滑向浪漫化. 修法: 改"4 个儿子全部进入帝国最高权力核心,3 人 (Möngke / Hulagu / Kublai) 称汗一方,Ariq Böke 1260-1264 内战失败——但 Sorghaghtani 在世时 (死于 1252) 已经把 4 子安到 4 个权力轴上".

---

## 5. 3 Lens 推荐 — 确认或调整

### Genghis Khan ✅ 强力支持
**理由**: §3 L473-491 + §1 hook 已经 ready 35+ 行 lens 原料. perpetrator-actor + steppe-system-builder 双标签精确——既不浪漫化也不妖魔化. 9 岁孤儿 → 41 岁 Kurultai 的 problem arc 是全 narrative 最强的角色弧.

**lens 节奏建议**: Hook 用 L475-477 (9 岁父死、母带 5 子挖野菜) → develop 用 L481 (千户制打散部族忠诚) → climax 用 §1 1206 Onon → reflection 用 L491 (1600 万男性后代的统计 anchor + careful framing).

### Yelü Chucai ✅ 支持但建议 reframe
**当前定位**: lonely-mediator / Han-Sino-Confucian advisor (L33, L256)

**调整建议**: 改 **bilingual-broker / 文明翻译者** 更精确——他不是"汉人帮蒙古",他是契丹族 (辽朝皇族),自己的祖国先被女真灭,所以站在蒙古帐内说"农民活着比死了交税多"时,他的视角是"看过两次文明灭绝的中介者"而不是"汉文化代言人". 这个 reframe 也跟 §10.3 的 anti-anachronism 钢筋呼应——13 世纪没有"中国人/蒙古人"框架,只有部族网络.

**lens 钩子**: §3 L569"华北每年可收税银 50 万两、绢 8 万匹、粮 40 万石;改牧场每年收入是 0"——这是 lens 节奏里最强的一句,可以做整章 expectsRealAnswer 题的 anchor (问 7 年级:如果你站在 Ögedei 帐里,你会怎么算这笔账?).

### Sorghaghtani Beki ✅ 强力支持,但要承担 P1-6 修正
**理由**: receiving-end + 21st-cent reframe 双标签精准,与 Weatherford 2010 / Broadbridge 2018 学术 backing 实在. §3 L543-557 + §0 L34 lens 原料够用.

**注意**: P1-6 改完之后 lens 内部 framing 才一致,否则 lens 节会反复 self-contradict.

---

## 6. 跨 Lens Micro-Detail — Pax Mongolica 商路 1240-1340

### 完全同意主推

**理由**:
1. 1240-1340 这 100 年同时勾连 4 个已 ship topic (AoE Marco Polo / Mali Ibn Battuta / Black Death Caffa vector / Crusades 1260 Ain Jalut),这是单一 micro-detail 能做到的最大 topic-bridge 密度.
2. §0.5 + §4.4 + §6.2 三段重复但角度不同 (intro / zoom / legacy),lens 节奏能用三层递进结构.
3. Marco Polo + Rabban Bar Sauma 配对是 anti-Whig 的钢筋——Eurasian 网络可逆走双向,不是"欧洲发现东方"单向.

### 加强建议

加一个**第 4 个 vector**: 中国火药 + 回回炮 (counterweight trebuchet) **西传**.
- §4.2 L858 已经写"匈牙利军第一次见火药"
- §4.3 L870 已经写"含中国回回炮工兵 1,000 人围 Baghdad"
- 但 §0/§3 都没把这个串起来. 完整链是: 中国宋朝火药 (Tang-Song topic) → 蒙古带过去攻 Baghdad 1258 → 14 世纪欧洲学到 → 1453 君士坦丁堡奥斯曼大炮攻陷拜占庭 (Byzantine Rise topic).

这个 4-topic 火药链跟 Black Death 4-topic 病菌链是对称的——双刃 Pax Mongolica 主题更立体.

### 不建议替代
Rabban Bar Sauma 不要换成其他人. 他是 anti-Eurocentrism 钢筋的核心——景教徒蒙古族出身,从大都到巴黎觐见菲利浦四世,这条路 7 年级很多老师自己都没听过,正是 narrative 应该撑起来的. 已 ship 的 Crusades / Black Death / AoE 都没出场过他.

---

## 7. 跨 Topic 衔接审计

| Topic | Mongol 方衔接点 | 当前状态 | 评估 |
|---|---|---|---|
| **Tang-Song China** | 1279 崖山 (Lu Xiufu 背帝昺跳海) | §0 L49 / §4.4 L898 / §10.8 L1450 三处铺 | **完美**: §4.4 L898 直接 reference Topic li-qingzhao N12,这是跨 topic 时间线对话的标准做法 |
| **Islamic Rise** | 1258 Baghdad + 1260 Ain Jalut | §0 L50 / §4.3 全节 / §6 L1172 | **完美**: §4.3 L876 明确说"Islamic Rise lens 写到 1099 / 1187...1258 是 brutal 转折",衔接钩子双向 |
| **Crusades 1099** | 1260 Ain Jalut Mamluk 用 Salah ad-Din 体系挡 Mongol | §0 L53 / §6 L1173 | **足够**: 但建议 §3 Hulagu 节加一行——"1260 Ain Jalut Mamluk Baybars 用的是萨拉丁 1187 哈丁战役的 institutional infrastructure",让 7 年级看见两 topic 之间隔 73 年的因果 |
| **Black Death 1347** | 1346-1347 Caffa 投尸 + 商船到 Messina | §0 L51 / §4.4 L908 / §6.2 L1112 | **完美**: 三处递进,L908 还把"Pax Mongolica 双刃"主题钉死 |
| **Mali Empire 1235** | Ibn Battuta 1325-1354 跨 12 万公里 | §0 L42 / §4.4 L906 / §6 L1175 | **足够**: 但 Mansa Musa 1324 朝觐开罗也是 Pax Mongolica 商路相邻事件,§0.5 L77 已经触及"开罗交汇",可在 §4.4 加 1 行 reinforcement |
| **AoE 1492** | Marco Polo 书 → Columbus 1485 印本 366 处批注 | §0 L52 / §4.4 L998 / §6.7 L1176 / §10.5 | **完美**: 366 处批注 + Sevilla 大教堂 anchor 是 lens 级具象细节 |
| **Byzantine Rise** (待加) | 火药/回回炮东西传 → 1453 奥斯曼大炮 | **目前缺** | **建议加**: 见 §6 上面的 4-topic 火药链 |
| **Magna Carta 1215** | 1206 Kurultai 9 年后 John 王签 Magna Carta | §0.5 L73 一行带过 | **够了**: 这是平行时间线对照,不需要因果链 |
| **Reformation / Renaissance** | §4.2 L862 "Vienna 陷之后...文艺复兴的起点、宗教改革的地理基础都会被改写" | counter-factual 桥 | **够好**: 这是 anti-Whig 桥,不是因果链,framing 正确 |

**结论**: 跨 topic 衔接是**全课程目前最强的一篇**——9 个 topic 里 7 个有实质 bridge,密度超过 mali-empire (5 个) 和 islamic-rise (4 个).

---

## 8. 推荐下一步

按时间紧迫顺序:

### Step 1 (ship 前必做, ~30 min)
执行 P0-1 / P0-2 / P0-3. 这 3 处是 7 年级老师 + AP 学生用 Wikipedia 立刻能查出 bug 的级别. EN 版同步.

### Step 2 (lens 编排前必做, ~45 min)
执行 P1-1 / P1-2 / P1-3 / P1-4 (拼写 + 部族 + 数字一致性). P1-5 / P1-6 留到 lens authoring 时再 patch (因为 lens 内容会重新组织 §3 原料,不必先在 master file 改).

### Step 3 (lens authoring, ~6-8 hr/lens × 3)
按推荐顺序编 3 lens:
1. **Genghis Khan** 先——最 self-contained,不依赖其他 lens 已建立的语境
2. **Yelü Chucai** 次——需要先有 Genghis lens 建立的"国家工程"框架做对照
3. **Sorghaghtani Beki** 最后——需要前两个 lens 建立的"蒙古帝国第一代"语境做反衬

### Step 4 (跨 lens micro-detail, ~4-6 hr)
Pax Mongolica 100 年作为 cross-lens detail,放在 3 lens ship 之后. 建议结构:
- N1-N3: Marco Polo / Rabban Bar Sauma 双向 (anti-Eurocentrism)
- N4-N6: Ibn Battuta / Black Death (Pax 双刃)
- N7-N8: 火药/回回炮东西传 (建议加,见 §6)

### Step 5 (待考虑)
是否补充第 4 个 lens? **Yelü Chucai vs Marco Polo 配对**很诱人——两个文明中介者,一个站在征服者帐内,一个站在被征服文明里. 但 4 lens 会让 topic 太重,7 年级 attention budget 撑不住. 建议保持 3 lens + 1 cross-lens micro 结构.

---

## 关键 quote 和 line ref 索引 (供 lens authoring 用)

- §1 hook 41 岁 Onon (L102-156)
- §3 Genghis 9 岁孤儿 (L475-477) + 千户制 (L481) + 1600 万后代 (L491)
- §3 Yelü Chucai "50 万两/8 万匹/40 万石 vs 牧场 0" (L569)
- §3 Sorghaghtani 三层政治智慧 (L549) + 4 子专业化分工 (L549 末)
- §4.2 What if Ögedei 没死 (L862) — anti-Whig 钢筋最锋利一句
- §4.4 Pax Mongolica 三 Pax 红利 (L902-908)
- §10.3 anachronism 警示 (L1385-1393)
- §10.7 Pax Mongolica 反虚化 (L1432-1442) — 反向钢筋,不要让 lens 跑偏到浪漫化

---

**Audit 时间**: ~22 min skim + grep + cross-ref
**审计员**: Sarah Chen, EdD
**版本**: v0 (2026-05-09)
