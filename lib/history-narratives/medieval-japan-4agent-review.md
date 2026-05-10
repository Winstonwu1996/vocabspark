# Medieval Japan 4-Agent Review (Aggregated)

**Date**: 2026-05-09
**File**: `lib/history-storyboards/medieval-japan.js` (2264 行 / 3 lens × 12 nodes = 36 nodes)
**Reviewers**:
- 小薇 (12 岁 7 年级 ABC) — **8.2/10**
- Dr. Park (AP World History teacher) — **8.5/10**
- Maria (ESL specialist) — **8.0/10**
- 赵老师 (中国初中历史 18 年) — **7.5/10**

---

## 综合强项（4 reviewer 共识）

1. **kamikaze 叙事批判业界级** — tokimune N6 + N9 双节点，Conlan 2001 竹崎季长战功书论证，Grade 7 「第一代→第三代→第五代」等级类比，是全套最清晰的意识形态建构教学
2. **careful framing 密度优秀** — 兵力数字（Turnbull 2008）、雪舟北京行程（Rice 2010）、政子演讲写定化（Bialock 2007 + McCullough 1985 + Varley 1994）、禅对话后世增饰（tokimune N11）全部到位
3. **跨 lens 锁定机制执行良好** — 三个 crossLensHook （圆觉寺地基 / 御家人忠诚契约 / 政子遗产）在 tokimune 和 masako 之间实际生效；雪舟 N8 的圆觉寺 187 年 hook 精准
4. **receiving-end 悖论执行最强** — masako N8「体制活了，孩子全死了」+ N12「孤例不是先例」是 36 节点中 receiving-end 非英雄化处理的最高水位
5. **anti-fab sourcing 基础扎实** — Mass 1989 / Conlan 2001 / McCullough 1985 / Varley 2000 / Rice 2010 / Watanabe 1975 / Turnbull 2008 / Farris 1996 全部功能正确

---

## P0 — 史实 / 表述 ship-blocker（Dr. Park + 赵老师）

### P0-1 · tokimune-N3 时宗年龄：「十七岁」与全文「17 岁到 33 岁」一致，但需加周岁/虚岁标注
**lens**: tokimune-defender · **node**: N3

tokimune-N3 正文 CN：「太宰府转报镰仓，我十七岁，刚接任第八代执权。」
tokimune-N3 titleCn：「十七岁，一封信，两个方向的权力宣告」
tokimune-N11 CN：「时宗在 1268-1284 年间……从 17 岁到 33 岁」
tokimune-N12 CN + EN：「from age seventeen to thirty-three」

**问题**：1251 年生，1268 年 = 17 周岁（虚岁 18）。全文用「17 岁」是周岁口径，内部一致。但 Sarah Chen 早期 narrative audit（medieval-japan-audit.md § P0-3）记录 narrative 正文有一处写「18 岁」。storyboard .js 全文统一用「17」，口径一致——但没有任何一处注明「17 周岁 / 虚岁 18」，AP World 学生和 Dr. Park 课堂会被学生追问。

**fix**: tokimune-N3 sourcingNote 加一行：「时宗 1251 年生，1268 年 = 17 周岁（虚岁 18）。全文采用周岁 17 岁表述。」

> **严重度**: P0（单处说明缺失；AP World 课堂必追问；不是内部矛盾，是缺乏说明）

---

### P0-2 · tokimune-N9 弘安台风死亡数字：Farris 1996 溺亡估计与《元史》岸上数字未区分
**lens**: tokimune-defender · **node**: N9

当前正文：
> 「Farris (1996, *Heavenly Warriors*) estimates typhoon drownings at roughly 60,000 to 100,000. The Yuan Shi and other sources record that some survivors who reached shore were killed by Japanese defenders, but the specific numbers vary across sources. There is arithmetical tension between total loss estimates and the upper and lower bounds of the invasion force's scale — scholars have no consensus on the individual figures (Turnbull 2008; Farris 1996). The expeditionary force was nearly annihilated.」

**问题**: Farris 1996 的 60,000–100,000 是**台风溺亡估计**；《元史》的岸上斩杀数字是另一组数字；两组数字的性质不同（溺亡 vs 战斗歼灭）。当前正文把两者放在同一段落，中间只有「and other sources record」相隔，Grade 7 + AP World 学生极易读成「总死亡 60,000-100,000 + 更多岸上死亡」而误解总体数字。Dr. Park 课堂将被迫逐句澄清。

**fix**: 分两句明确来源：
- 「台风溺亡：Farris (1996) 估计约 60,000–100,000（*Heavenly Warriors*，drowning estimate）」
- 「《元史》及日本史料记载另有部分幸存者在岸上被歼灭，具体数字各源分歧，学界无共识（Turnbull 2008）」

> **严重度**: P0（史实来源混用；AP World framing 必须区分；Turnbull 2008 已正确引用，仅需结构分开）

---

### P0-3 · tokimune-N11 圆觉寺禅对话「洞然无依」：careful framing 到位，但未标注「后世增饰」的时间范围
**lens**: tokimune-defender · **node**: N11

当前正文：
> 「Later embellishment is evident; it cannot be cited as a confirmed historical fact exactly as told.」

**问题**: 这句话是正确的 careful framing，但没有说明「后世」是多久后——这段对话最早出现在何世纪的哪类文献，决定了其史料可信度评级。Dr. Park 要求每个 careful framing 都有时间锚定。目前 sourcingNote 只写「Narrative §10 圆觉寺建立背景；无学祖元禅对话 careful framing 已在 §10 注」，但 §10 在 narrative .md 里，不在 storyboard .js 里——storyboard 是独立发布的，不能依赖 narrative .md 的注。

**fix**: tokimune-N11 的 careful framing 句改为：
「Later embellishment is evident — the dialogue as a polished exchange appears in sources compiled well after Tokimune's death (13th–14th century hagiographic and temple records); it cannot be cited as a confirmed historical fact in the form transmitted.」

> **严重度**: P0（storyboard 独立发布需自给自足；AP World framing 标准）

---

### P0-4 · tokimune-N9 「神风」叙事建构：正文已有 Conlan 2001 框架，但「当时的日本文献里没有普遍叫做神风」这句话在 N9 和 N6 之间重复，且 N6 的叙述比 N9 更完整，顺序有认知混乱风险
**lens**: tokimune-defender · **nodes**: N6, N9

N6 bodyCn 已经完整解释了神风叙事建构（Conlan 2001 + 竹崎季长论证），N9 再次解释一遍。两节都是完整论证，但读者在 N6 已经理解了，N9 重复时会以为「又一个新事实」。N9 可以简化为 callback（「正如我们在 N6 谈到的……」），节省认知资源给台风本身的气象和伤亡数字叙事。

**fix**: N9「How was the kamikaze narrative constructed?」段落简化为 2-3 句 callback，把主力放在台风气象、Farris 1996 溺亡 careful framing、船只质量（Delgado 2001）上。当前 N9 在 N6 之后显得冗余，失去 Grade 7 注意力。

> **严重度**: P0（reader experience；两节冗余削弱 N9 的情感冲击；台风本身的科学描写被压缩）

---

### P0-5 · masako-N9 政子演讲：McCullough 1985 + Bialock 2007 + Varley 1994 三来源在单节点内全部到位，但英文段缺少对「演讲内容」的 hedge — EN 正文直接写出演讲全文，没有说「以下是《吾妻鏡》所载大意」
**lens**: masako-widow-nun · **node**: N9

CN 正文写：「《吾妻鏡》所载我的演讲大意是……」明确了来源。
EN 正文写：「The Azuma Kagami records the substance of my speech: …」也明确了来源。

**这实际上是正确的**——两个版本都有来源归属。

**但是**: EN 正文在演讲内容之后立刻进入 careful framing，中间没有换行/视觉分隔，导致演讲引文和 careful framing 黏在一起，读者不清楚哪里是「引文」哪里是「分析」。

**fix**: 演讲引文后加 `---` 或段落分隔，然后「Something must be said honestly here:」开新段。这是格式问题，不是史实问题，但 AP World 学生做 DBQ 引用时需要区分 primary source 呈现和 historiographic framing。

> **严重度**: P0（AP World DBQ 格式规范；可能导致学生错误引用）

---

### P0-6 · sesshu-N6 北京行程：Rice 2010 「文献不足」hedge 到位，但 EN 版 careful framing 出现在正文中段，而 CN 版把 careful framing 放在第一段。两版 framing 位置不一致，Maria 发现中英双语质量问题
**lens**: sesshu-mediator · **node**: N6

CN 版：第一段即「careful framing：我在北京的行程，史料所存极为有限（Rice 2010 明确指出文献不足）」——framing 前置，读者先知道「存疑」再接受内容。

EN 版：先叙述「After Ningbo, our vessels moved north. I entered Beijing」，然后第二段才「Here careful framing is necessary: the historical record of my time in Beijing is extremely thin.」——framing 后置，读者先接受「进入北京」作为事实，再被提醒存疑。

**问题**: CN 和 EN 的认识论顺序相反。Rice 2010 的 hedge 是「进入北京可以确认，但在北京的活动史料不足」——这个分层 hedge 在 EN 版第二段做到了，CN 版第一段的大标「史料极为有限」反而过强，可能让学生认为「进入北京」本身也存疑。

**fix**: 两版统一结构：先确认「进入北京可以确认（Rice 2010）」，再说「在北京的具体活动、时长、接触何人，史料不足」。CN 版略过激，EN 版顺序稍好但需在第一段就给出「入京可确认」。

> **严重度**: P0（CN/EN 双语质量；Rice 2010 hedge 分层在两版中不对称）

---

### P0-7 · 「东胜寺 870 人」——storyboard 完全不含此内容，审核项目确认为「narrative.md 而非 storyboard.js 范围」
**lens**: N/A（storyboard 层无此内容）

Prompt 要求核查「东胜寺（Tōshōji）870 人（《太平记》文学叙事）是否有 Varley 2000 careful framing」。经检查：

- `medieval-japan.js`（storyboard）全文无「Tōshōji」「東勝寺」「870」任何引用
- `medieval-japan.md`（narrative）Line 634 确实有：「约 870 人（《太平记》Taiheiki 所载数字，该史书为文学叙事，学者对死亡精确数字持保留态度——Varley 2000）」

**判断**: narrative.md 的处理达标（Varley 2000 到位，文学叙事性质标注到位）。storyboard.js 不含 1333 年镰仓灭亡场景，这是设计决定，因为 masako-lens 止于 1225 年，tokimune-lens 止于 1284 年，均早于 1333 年。无需 patch。

> **严重度**: 确认为 N/A（narrative 层已处理；storyboard 层设计不含此节点）

---

## P0 — 译名规范（赵老师）

### P0-8 · 「神风」kamikaze：storyboard 已多次标注「后来的叙事建构」，但未使用「神风」一词的中国教科书规范写法——中国初中历史课本不使用「神风」，用「台风」
**lens**: tokimune-defender · **nodes**: N6, N9, N12

中国历史教科书（人教版七年级下册 / 北师大版）在讲述蒙古入侵日本时，统一描述为「台风」，不采用「神风」这个带意识形态色彩的日本本位叙事词汇。课本表述为「两次渡海时均遭台风，损失惨重而退」。

**当前 storyboard 处理**: tokimune-N6 已经明确写「神风（kamikaze）字面意思是『神的风』……是事后意识形态建构」，本质上已经批判了这个词。这是正确的 careful framing。

**赵老师 fix 建议**: 每次出现「kamikaze」时，在 CN 正文加括注：「（中国教材称为『台风』；日本叙事后来称为『神风』，属于意识形态建构）」。这样中国学生对接课本时有明确的「我的课本用的是台风」认知，不会产生「课本错了」的疑惑。

> **严重度**: P0（课本对接；中国 7 年级学生考试写「神风」会扣分）

---

### P0-9 · 「文永之役 / 弘安之役」译名：storyboard 用「Bun'ei campaign」「Kōan campaign」，CN 用「文永之役」「弘安之役」，但课本对接标注缺失
**lens**: tokimune-defender · **nodes**: N5, N8

CN 正文用「1274 年文永之役」（N5 sourcingNote 提到但正文没有使用这个词）和「弘安之役」（N8 bodyCn 有，N11 bodyCn 有「1281 年弘安之役战死者」）。

**检查结果**:
- tokimune-N5 bodyCn：写「1274 年 10 月，蒙古-高丽联军……在博多湾登陆」——没有使用「文永之役」四个字
- tokimune-N8 bodyCn：写「为弘安之役的战死者而建」——使用了「弘安之役」
- tokimune-N7 bodyCn：写「1274 文永之役」（sourcingNote 提 narrative §8）——正文没有
- tokimune-N11：「1281 年弘安之役」出现

**不一致**: N5 是文永之役主场节点，但 bodyCn 没有使用「文永之役」这个词，只叙述事件。中国教材用「忽必烈两次进攻日本（1274 年、1281 年）」，不总是标注汉字名，但日本史专业词汇「文永之役 / 弘安之役」在课本对应内容中出现，初中阅读遇到需要能认出来。

**fix**: tokimune-N5 bodyCn 开头加「1274 年，文永之役（Bun'ei no Eki）」首次出现时标注；tokimune-N8 在「弘安之役」首次出现时加「（1281 年，弘安之役 / Kōan no Eki）」。

> **严重度**: P0（课本对接词汇；考试出题常用）

---

### P0-10 · 「执权」译名规范：全文用「执权」，中文课本通常不单独讲执权制度，需要对接说明
**lens**: tokimune-defender · **node**: N1

tokimune-N1 bodyCn 对「执权」有详细解释：「执权这个头衔要解释清楚：它不是将军，将军是名义上最高的军事领袖；执权是将军的行政长官，是真正做决定的人。」这个解释是充分的。

**检查**: 赵老师确认「执权」是中国学术界和教材对应的标准译法，不需要更改。「执权」在全文内部一致。

**结论**: 合格，无需 patch。这是 P1 确认项，不是 P0。

---

## P0 — Reader Experience（小薇）

### P0-11 · masako-N1 开篇：12 岁读者能立刻被抓住，但「保元之乱」在第一段出现，没有给小薇任何解释
**lens**: masako-widow-nun · **node**: N1

masako-N1 bodyCn 第一行：「1156 年，我出生在伊豆国（Izu Province）。那一年，京都正在发生保元之乱（Hōgen no Ran）」

**小薇 assessment**: 「保元之乱」是一个专有名词，第一段就出现，前面没有任何提示。「Hōgen no Ran」的括注是给英文读者的，不是给小薇的中文说明。对 12 岁 ABC 来说，「保元」两个字没有意义，「之乱」是唯一的语义锚点。

**但**: 下一句「我不知道这件事」立刻化解了这个复杂性——读者被告知「伊豆那边不知道京都发生的事」，这个转折是小薇友好的。

**小薇实际体验**: 第一句有点硬（新词），但「我不知道这件事」+ 「隔着山，隔着海，隔着那种『远到发生了大事也很久才能听说』的距离」这两句非常好——地理感强，情绪建立快。**整体 N1 entry 合格。**

**fix（最小改动）**: 「保元之乱（Hōgen no Ran）」加一个 inline gloss：「保元之乱（1156 年，京都皇室和贵族的内战）」，让 12 岁读者在 0.5 秒内掌握足够信息，不打断节奏。

> **严重度**: P0（12 岁 first-line comprehension；inline gloss 1 秒修复）

---

### P0-12 · tokimune lens 蒙古入侵段（N5）：人名密度可接受，但「铁炮（tetsuhau）」术语切换让小薇暂时失去主线
**lens**: tokimune-defender · **node**: N5

tokimune-N5 bodyCn 出现：蒙古-高丽联军 / 合浦 / 对马岛 / 壹岐岛 / 博多湾 / 铁炮（tetsuhau）/ 《蒙古袭来绘词》/ 竹崎季长。

**小薇 assessment**:
- 地名连续出现 5 个（合浦→对马岛→壹岐岛→博多湾→大宰府），但这是行军路线，有方向感，可以跟随。
- 「铁炮（tetsuhau）」出现时正文立刻给了一句解释「铁炮不是后来明朝的火绳枪，而是一种铁壳炸弹」——这个解释很好，小薇友好。
- 《蒙古袭来绘词》+ 竹崎季长在同一段出现，后面有 careful framing 说明，但「竹崎季长是为了向幕府证明自己的战功以获封赏」这句话，小薇需要读两遍才能理解逻辑。

**fix**: 竹崎季长的句子改得更简单：「这幅绘卷的主人竹崎季长，是一个武士——他画这幅画，是为了告诉幕府『我打了仗，请赏赐我土地』。所以这幅画首先是一份证明功劳的申请书，不是客观历史记录。」

> **严重度**: P0（Grade 7 comprehension；careful framing 逻辑需要简化为 2 句因果）

---

### P0-13 · sesshu lens 水墨术语「斧劈皴 / 真景山水」：sesshu-N3 + N8 有解释，但 N3 的英文解释比中文解释更清晰，中英解释质量不对称
**lens**: sesshu-mediator · **nodes**: N3, N8, N9

sesshu-N3 bodyCn：「山是用斧劈皴（axe-cut brushstroke）画的——那种干笔侧锋、把岩石切割成块面的笔法，是北宋郭熙（Guo Xi）系统里的技法」

sesshu-N3 bodyEn：「The mountains were painted with what we call fupeki-shun — the axe-cut brushstroke, where the dry brush hits the side and cuts the rock face into planes. That technique comes from the Guo Xi school of Northern Song painting.」

**Maria + 小薇联合 assessment**:
- 「斧劈皴」的中文解释是「干笔侧锋、把岩石切割成块面」——这个解释对不知道「皴法」体系的 12 岁 ABC 来说不够直觉。
- EN 版本的解释「dry brush hits the side and cuts the rock face into planes」更直觉（动词驱动），但中文版只说「干笔侧锋、把岩石切割成块面」，中文母语 7 年级学生也可能不理解「侧锋」。
- sesshu-N8 bodyEn 重复引用时写「the side-stroke of the Ming axe-cut brushstroke」，继续用动词；N8 bodyCn 写「明朝「斧劈皴」（axe-cut brushstroke）的侧锋」——已经用括号给了英文，这是正确做法。
- sesshu-N11 bodyCn「真景山水」只给了括号 (portrait of real landscape)，没有给中文解释。

**fix**:
1. sesshu-N3 bodyCn「斧劈皴」改为：「斧劈皴（axe-cut stroke）——用笔侧倒、笔毛张开，像斧头切开岩石一样，把山石画出块状的切面感」（更感官化，12 岁可理解）
2. sesshu-N11 bodyCn「真景山水」改为：「真景山水（写生实地的山水画，对比想象或临摹而来的符号化山水）」

> **严重度**: P0（小薇 + Maria 联合；核心艺术术语是 sesshu lens 的教学重点，CN 解释质量低于 EN 版）

---

## P1 — 建议修（不阻 ship）

### P1-1 · sesshu-N6 Lorenzo de' Medici 年龄：「1449-1492」括注在 CN 和 EN 正文出现，算 1467 年应为 18 岁
**核查**: 1467 - 1449 = 18。正文写「18 岁」，括注给「1449-1492」，计算正确。**合格，无需 patch。**（赵老师提问，审核确认无误）

### P1-2 · tokimune-N4 斩使 1271 年：正文说「第三批使者」但前文只交代「1268 第一封信」「1269 第二批」，「第三批」是否有史料依据？
Conlan 2001 和 Sansom 1931 均确认 1271 年第三批使者被杀，事件有史料支撑。sourcingNote 有 Conlan 2001。**合格。**

### P1-3 · masako-N3《吾妻鏡》「私奔」叙事：CN 版 careful framing 比 EN 版简洁，但 EN 版「This account requires careful handling」的 signal 更早出现
建议 CN 版也在「《吾妻鏡》所载……」之后立刻加一句「这段记载需要谨慎处理」，而不是等到下一段才给 careful framing。读者在接受戏剧性内容（私奔）时，应该先知道这是「史书版本」。当前 CN 顺序是「先叙事，再提醒」，小幅调整段落顺序更好。

### P1-4 · sesshu-N1 ~ N12 CN/EN bodyCn/bodyEn 双写：本 lens 有 content.cn / content.en + bodyCn / bodyEn 四个字段，CN/EN 内容重复存储
这是 schema 冗余问题（schemaVersion 2 遗留的 content 字段），不影响读者体验，是技术 debt。交 loader.js 维护者处理。

### P1-5 · tokimune-N8 两支舰队数字注释细化：当前合并了东路军和江南军数字，但「100,000 人」的江南军主要是南宋旧兵，这个背景在 bodyCn 里提到了，EN 里也提到了「drawn largely from recently conquered Southern Song soldiers」——对称良好。**合格。**

### P1-6 · masako-N9 「Varley 1994」而非「Varley 2000」：sourcingNote 写「Varley 1994《Japanese Culture》」，正文引用「Varley (1994)」。检查：N4 sourcingNote 写「Varley 2000」，N9 写「Varley 1994」。
两个 Varley 引用是**不同书**：
- Varley 2000 = *Japanese Culture*, 4th ed.
- Varley 1994 = *Warriors of Japan as Portrayed in the War Tales*

这不是错误，是不同著作。sourcingNote 需要把书名写全，避免后续维护混淆。
**fix (P1)**: N9 sourcingNote 改成「Varley 1994 *Warriors of Japan as Portrayed in the War Tales*」，和 N4 的「Varley 2000 *Japanese Culture*」区分。

### P1-7 · 赵老师：「守护大名」在 sesshu-N7 出现「shugo daimyō」但 CN 版只有「守护大名」没有对大内氏是「守护」的地位做说明
sesshu-N7 bodyCn：「山口是大内氏（Ōuchi clan）的根据地——西日本最强的守护大名之一」。
中国 7 年级课本不详细讲日本「守护」制度，「守护大名」对学生而言是生词。建议加一句：「守护大名，是在某地区代幕府管理武士、征税的地方强藩领主。」（一句即可，不需要展开）

### P1-8 · 小薇：sesshu lens 整体有「孤独感」，但 N4 节点（出发前）的「不是逃跑」辩护段（CN 200 字）对 12 岁来说太哲学化，入戏较慢
N4 是「去看原本」这条情感主线的转折点，应该是高度有张力的时刻，但 CN 版 200 字的「逃跑 vs 不逃跑」辩护打断了情感节奏。建议把这个辩护缩短为 50 字（一个段落），把叙事重量还给「博多港口，博多港慢慢消失在水平线后面」这个画面。

### P1-9 · Dr. Park：masako-N6 McCullough 1985 引用格式：sourcingNote 写「McCullough 1985《The Tale of the Heike》Stanford UP」
查核：McCullough 1985 的完整书名是 *The Tale of the Heike* (Stanford University Press, 1988)。如果用于 AP World 引用规范，1985 年版本是否存在需要核实。
- McCullough 的 *The Tale of the Heike* 是 1988 Stanford UP 版（常见引用）
- 1985 年 McCullough 的另一著作是 *Genji and Heike: Selections from The Tale of Genji and The Tale of the Heike*（Stanford, 1994）

**可能的问题**: sourcingNote 写「1985」，但此书的 Stanford UP 版是 1988。这需要版本核实。如果 McCullough 1985 指不同版本（论文 / 早期 Stanford 版），请维护者确认。**P1 确认项，不 block ship。**

---

## P0 计数确认

| # | Lens | Node | 类型 | 状态 |
|---|------|------|------|------|
| P0-1 | tokimune-defender | N3 | 年龄算法说明缺失 | 需 patch |
| P0-2 | tokimune-defender | N9 | Farris 1996 溺亡 vs 岸上斩杀数字混用 | 需 patch |
| P0-3 | tokimune-defender | N11 | 禅对话 careful framing 时间锚缺失 | 需 patch |
| P0-4 | tokimune-defender | N6+N9 | 神风叙事在两节重复，N9 冗余削弱情感 | 需 patch |
| P0-5 | masako-widow-nun | N9 | EN 版演讲引文与 careful framing 缺视觉分隔 | 需 patch |
| P0-6 | sesshu-mediator | N6 | CN/EN 北京行程 hedge 分层顺序不对称 | 需 patch |
| P0-7 | N/A | N/A | 东胜寺 870 人在 narrative.md 已处理；storyboard 层确认不含 | 无需 patch |
| P0-8 | tokimune-defender | N6+N9+N12 | 神风 vs 台风课本对接括注缺失 | 需 patch |
| P0-9 | tokimune-defender | N5+N8 | 文永之役/弘安之役课本词汇首次出现未标注 | 需 patch |
| P0-10 | tokimune-defender | N1 | 「执权」译名：已有详细解释，合格 | N/A（已合格）|
| P0-11 | masako-widow-nun | N1 | 「保元之乱」首段出现无 inline gloss | 需 patch |
| P0-12 | tokimune-defender | N5 | 竹崎季长 careful framing 逻辑链对 12 岁过硬 | 需 patch |
| P0-13 | sesshu-mediator | N3+N8+N11 | CN 版斧劈皴/真景山水术语解释弱于 EN 版 | 需 patch |

**需 patch 的 P0 数量：11 个**（P0-7 和 P0-10 为确认 N/A）

---

## ship readiness

**当前状态**: Conditional — P0-11 个 patch 完成后 ship-ready。

**patch 工作量估计**:
- P0-1, P0-3, P0-5, P0-9, P0-11: 每条 1-2 行 sourcingNote 或 inline gloss，共约 20 分钟
- P0-2: 重构 N9 台风伤亡段落，2 句拆分，约 10 分钟
- P0-4: N9 神风叙事建构段简化为 callback，约 15 分钟
- P0-6: CN/EN N6 第一段顺序调整，约 10 分钟
- P0-8: N6 + N9 + N12 三处加「神风 vs 台风」课本对接括注，约 15 分钟
- P0-12: N5 竹崎季长段改写 2 句，约 10 分钟
- P0-13: N3 斧劈皴 CN 改写 + N11 真景山水 CN 加注，约 10 分钟

**总 patch 时间估计**: 约 90 分钟

**P1 全部 defer to post-ship hotfix**（P1-9 版本核实需离线查图书馆）

---

## 4 reviewer 各自备注

### 小薇备注
整体比我想象的好读，tokimune 的「不是没有恐惧，而是恐惧来了你继续坐着」（N2）是我最喜欢的句子，12 岁能懂。masako 的「剃了头不是为了出家，是为了自由」（N5）一秒抓住我。雪舟 lens 最难，但 N3 的「三幅画，三种山，哪一幅更接近真实的中国山，我不知道」这种设问让我想继续看。唯一真的很晕的是 N5（tokimune）的 careful framing 段——竹崎季长那个逻辑我需要读两遍。

### Dr. Park 备注
Conlan 2001 的运用是这套 storyboard 系列里最精准的单来源深度引用。Farris 1996 溺亡 vs 总损失的区分是 P0 核心——AP World 学生做 essay 时一定会用 Farris 1996 那个数字，必须让他们知道是溺亡估计，不是总死亡数。政子演讲的三来源交叉（McCullough + Bialock + Varley）是范例级的一手/二手来源区分教学。雪舟北京行程的 Rice 2010 hedge 精准。

### Maria 备注
CN/EN 双语整体 alignment 良好，双写 body 字段的 schema 冗余（sesshu lens 有 content.cn + bodyCn 两个存储）是唯一系统性问题，不影响读者体验。术语解释 CN 版整体弱于 EN 版（斧劈皴、真景山水是主要例子）。政子演讲 CN/EN 来源归属对称，是双语 DBQ 写作的良好示范。masako-N1 到 N12 的「接收端」叙事 CN 版情绪密度高于 EN 版，属于有意的 voice 差异，可以保留。

### 赵老师备注
「神风」vs「台风」课本对接是唯一真正影响中国初中考试成绩的 P0。文永之役/弘安之役词汇在首次出现时需要标注，中考日本史题目会直接用这两个词。「执权」和「御家人」的中文解释已经到位，超出我对这套材料的预期。雪舟等杨的名字在中国历史课本中不出现，sesshu lens 对中国课本来说是课外拓展，不是对接项——这是 lens 设计的 trade-off，不是内容错误。北条政子在中国课本里同样几乎不出现，masako lens 也是拓展内容。这两 lens 的价值在 AP World 和美国 7 年级课纲，不在中国初中会考范围——这没问题，只是赵老师的审核权重相应调低。
