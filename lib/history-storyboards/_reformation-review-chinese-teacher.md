# Reformation lens 草稿 — 中文 voice + 文化术语 audit
> By 赵老师(北师大中文 + 北大近代史 / 北京 4 中 12 yr)

## 1. Executive Summary

3 lens 整体水准比 Black Death 那一轮明显进步:**Cultural ban 14 词全部为空**,**em-dash 链 4 段以上为零**,**「一种说法 / 另一种说法 / 想 30 秒。」标杆 voice 全部 N10+N11 复用到位**,「翻译腔」是字句、长定语前置不严重——这一轮 lens 写作纪律明显回归。voice 区分上,Luther 像政治家在交代 contradiction(口吻有重量),Erasmus 像老学者在解释为什么没站队(节奏克制),Sister Agnes 像受难者在低声报账(短句),3 个声音区分得开。

**但有一处 P0 直接违反第 11 条**:Erasmus 草稿有 11 处、Sister Agnes 草稿有 6 处 **ASCII `"..."` 直接嵌套**——Renaissance ship 时刚被抓的 webpack/SWC parser 事故,这一轮 reformation 草稿没回流上去。Luther 草稿用「」中文方头括号干净,3 个 agent 没用同一个 voice template。这是必修 P0,不修不能 ship。

整体 verdict: **SHIP-WITH-FIXES** — 必修 P0 引号 + 一些翻译腔残留;P1 是 cn voice drift 微调 + Sister Agnes 中英 code-mix。

---

## 2. P0 (翻译腔 / voice 标杆 / cultural ban / 文化术语错位 / quote nesting)

### P0-1 第 11 条 quote nesting 违规(必修,不修阻 ship)

**Erasmus 草稿 11 处** ASCII `"..."` 直接嵌入 outer `"..."`:line 82(私生子 / "神父加寡妇")、86("骄傲" / "不务正业")、122("愚蠢" / "More")、176(`paenitentiam agite` "做忏悔")、202(锤子 / 木刻画)、241("为什么不公开站 Luther" / "你给 Luther 下了蛋")、242("你必须公开反 Luther")、284("懦夫" / "蛇" / "两面人")、285("Erasmus laid the egg")、299("懦夫蛇两面人")、490("现代理性的祖先")。

**Sister Agnes 草稿 6 处**:line 41 / 111(解散金) / 235("前修女" / 不洁) / 236("Let women be silent") / 271("Agnes,你别想..." Sister Beatrice 直引) / 429("institutional space")。

修法 per 第 11 条:**改成「」中文方头括号**(优先)或 escape `\"`(次选)。Luther 草稿全用「」做对了,直接照 Luther 的 pattern 改。

### P0-2 翻译腔"已经"过度(尤其 Erasmus + Agnes)

中文里"已经"是时态副词,**英文 perfect tense 的直译产物**,中文母语者节制使用。3 lens 共 38 处:

- Erasmus line 206:「我相信:改良是对的,分裂是错的。慢慢来比一刀切对。但 Luther **已经**走上一刀切的路。」 — 此处"已经"是必要的,留。
- Erasmus line 286:「1559 年(我**已经**死 23 年)」 — "我死 23 年" 中文更自然("我死的时候 23 年前的事")。
- Erasmus line 489:「他活着时**已经**被两边骂,死后还被烧了一遍」 — "活着时被两边骂"中文更紧。
- Agnes line 236:「Calvin 在 Geneva **已经**写信反对女人讲道」 — 这个"已经"是英文 had already 的直译,中文可以删,Calvin 1539 年的事是史实陈述,不需要时态副词。
- Agnes line 271:「她**已经**离开 3 年了」 — "她离开 3 年了"中文母语自然表达。
- Agnes line 344:「Calvin **已经**禁了 Marie Dentière」 — 同样,"Calvin 禁了 Marie Dentière 1539 在 Geneva 写的女人神学"中文里"了"已经表达完成时,"已经"冗余。

这种"已经"+"了"双时态标记是 LLM 中译典型 tic,7 年级娃读起来不累但不像中国人写。**建议:全 sweep 一遍删 1/3**。

### P0-3 中英 code-mix 角色对白(per 第 8 条 E)

第 8 条 E 明确禁止"角色对白中英 code-mix",narrator 可以用,**角色不能**。Sister Agnes 是 14 岁进修女院的英格兰修女(虽 32 岁开口,但她 1539 不会有现代英文术语):

- line 197:「我 32 岁。从 14 岁起的全部生活,**22 年的 daily routine**——在 6 小时内被抹除。」
- line 235:「**daily routine**。22 年的 Lauds-Matins-Vespers——没了。」
- line 311:「我每天天没亮起来(18 年的 Lauds 习惯改不掉)」 — "Lauds" OK 是仪式专名
- line 247:「**Could I teach? The new Protestant schools hired only male teachers.**」 — EN OK
- line 235:「我能教书吗?新教学校只雇男老师。Calvin 在 Geneva **已经**写信反对女人讲道」 — "新教学校只雇男老师"中文化好

**"daily routine"**是必删的,改成"日子的节奏"或"每天的规矩"。"daily journal"也是同样问题(line 344, 366),改"日记"就行。

Erasmus lens 也有少量:line 86 "**disinterested**"(line 88 EN 同字)、line 411 "**enable** 腐败" — 这些也建议中文化。

### P0-4 文化术语精确性(无 P0 错位,但有一处 P1 待统一)

- **教皇 vs 教宗**:3 lens 共 27 处全部用"教皇",**统一**到位 ✓(narrative 也是"教皇")
- **新教 vs 基督新教**:全用"新教" ✓
- **绝罚 vs 开除教籍 vs 出教**:Luther line 488"被绝罚"——这个学术准确,P0 通过
- **修女院 / 修道院 / 尼姑庵**:Agnes lens 全部"修女院"(指 nuns 的)或"修道院"(通用 monastery 含 monks),**没有出现"庵"或"小尼姑"** ✓ — 重大,北京 4 中老师不会皱眉
- **Cistercian 修女院**:Agnes 全文"Cistercian 修女院"保留,这是 proper noun 制度名,不需中译,处理对
- **Act of Suppression 1539 中译**:Agnes 用"解散修道院"作正式术语 ✓ "解散金"作 pension 译名 ✓ 没用"取消" / "关闭",处理对

### P0-5 voice 标杆完全合规 ✓

3 lens 全部 N10+N11 用「一种说法 / 另一种说法 / 两边都站得住。想 30 秒。」(EN 同 One view / The other view / Both sides stand / Take thirty seconds)——0 处"读法 A/B"、"想 30 秒答"、"View 1/2"残留。这一轮纪律比 Black Death + Crusades 时强多了。

### P0-6 Cultural ban 14 词 + 中国家庭/官职 全部为空 ✓

grep 全部 14 词(玉玺/龙袍/金銮殿/翰林/朕/卿/江山/凤冠/霞帔/一炷香/科甲/状元/榜眼/探花)+ 家庭称谓(娘亲/父亲大人/相公/相国/舅舅/姨夫/姨娘/嫂嫂)+ 官职(宰相/丞相/尚书/将军/侍郎/巡抚)— 命中 0(唯一一处是 Luther 文件 line 19 注释里的自检 checklist 引用,user-facing 0)。

---

## 3. P1 (节奏 / 称谓 / cross-lens drift)

### P1-1 跨 lens 中文 voice drift

3 lens 写者 voice 区分得到位:

- **Luther lens**: 政治家 + 痛苦先知口吻。短句 + 转折 + contradiction 自承("同一双手")。中文流畅度 8/10。
- **Erasmus lens**: 老学者克制口吻。长句 + 学术分辨 + 引语典出处("Luther laid the egg")。中文流畅度 7/10(长句多,有翻译感)。
- **Sister Agnes lens**: 受难者低声报账口吻。短句 + 时间锚点 + 物的细节("我把修女袍叠起来放在床尾")。中文流畅度 9/10(短句节奏好,7 年级最易读)。

**drift 警示**:Erasmus lens 长句过密,line 411(N10 一种说法那段)一段 280 字几乎没断句,中文 7 年级娃需要喘气。建议拆 2-3 句。Sister Agnes lens 反例,短句节奏 native。

### P1-2 第二人称代入文化兼容性

3 lens 都用"你是 X"开场,中国娃语境**完全合适**——这是 cosplay framing,非"你"在英文里 generic-you 那种翻译腔。Erasmus N1 line 50"你跟我走 70 年"+ Agnes N1 line 45"这一遍带你走 1539/5/12 这一天"——这种"带你走"句式 native 自然。

但 **P1 警示**:Luther N12 line 540"是 1505 年闪电下我跪泥地里大喊'圣 Anna 救我'?是 1521 年..." 一段 5 个连珠"是...?",节奏堆叠过急。建议用句号断 2-3 段。

### P1-3 长定语前置(轻微)

中文偏好"先动词后修饰",英文反向。3 lens 大部分处理对,但有几处:

- Luther line 41:「Wittenberg,Saxony 一个偏僻小城——人口不到 2000,**大学只开了 15 年**」 — "大学才开了 15 年" 更中文,"只"在这里是 LLM 偏好的"only"直译。
- Erasmus line 50:「**手里捧着一本刚装订好的厚书**」 — "刚装订好的厚书" 是英文 "a thick book just bound" 的直译,中文母语会写"我手里捧着一本厚书,刚装订好"或"刚装订好,封面..."。

### P1-4 Erasmus N6 + N9 单星号 markdown 风险

Erasmus 自检注释 line 28:「*italic* markdown 单星号 = 0(只有 **bold**)」—— grep `\*[^*]` 检查通过,markdown markup 0 违规 ✓。但 Sister Agnes line 384/385/386 + Erasmus line 408/410/451/452 都用 `**一种说法**` 双星号 bold,这是合规的。

---

## 4. P2 polish

### P2-1 Erasmus N3 line 122 双关解释过度

「书名是双关:Moriae 是"愚蠢"的拉丁文,也是"More"(我朋友 Thomas More 的名字)。」— 这处的双引号嵌套是 P0(已上),但解释本身有点啰嗦,中文 7 年级 Latin 双关解释一次够。

### P2-2 Sister Agnes N5 line 215 engagementHook 长

「解散金 5 镑年金,跟一个农工一年的收入一样。我去地下室,铁盒里藏着 1525 年传教士偷偷带进来的 Luther 95 条 1521 印刷的德文译本——14 年来院长保护它。我看最后一眼。它改变了世界,但我的世界正在为它付代价」— engagementHook 应是 1-2 句钩子,这里 4 句已经把内容剧透,违反 hook 设计。

### P2-3 Luther N5 line 213 内嵌引号已用「」 ✓ 优秀范例

「我知道第二天回大厅说**「不撤」** = 死刑判决书已经写好了。我也知道说**「撤」** = 神学上自我否认」— Luther 全文用「」中文方头括号,3 lens 里 voice 最好的一段。Erasmus + Agnes 应照此修。

---

## 5. 跨 lens cn voice drift 检查

| 维度 | Luther | Erasmus | Sister Agnes |
|---|---|---|---|
| 内嵌引号 | 「」全用 ✓ | ASCII `"` 11 处 ✗ | ASCII `"` 6 处 ✗ |
| voice 标杆 | 一种/另一种/30 秒。✓ | ✓ | ✓ |
| 翻译腔"已经" | 4 处 | 14 处 | 12 处 |
| 中英 code-mix | 0 | 2 处轻微 | 3 处 daily routine/journal |
| 句长节奏 | 8/10 | 7/10 | 9/10 |
| 第二人称代入 | native | native | native |
| em-dash 4+链 | 0 ✓ | 0 ✓ | 0 ✓ |

**结论**:3 个 agent 写者中文 voice 是 drift 的——Erasmus + Agnes 各自有翻译腔印记(尤其"已经"+ ASCII 引号),Luther 写者最 native。**建议:Erasmus + Agnes 用 Luther voice template 做一轮 polish**,统一中文母语流畅度。

---

## 6. 推荐 fix priority

**必修(阻 ship)**:
1. Erasmus 11 处 + Agnes 6 处 ASCII `"..."` → 「」中文方头括号(参第 11 条 + Luther pattern)
2. Sister Agnes 3 处 daily routine / daily journal → 中文化
3. Erasmus + Agnes "已经"sweep 删 1/3(优先 perfect tense 直译位置)

**建议修(P1)**:
4. Erasmus N10 line 411 长句拆 2-3 段
5. Luther N12 line 540 "是...?" 5-连珠拆成 2-3 段
6. Sister Agnes N5 engagementHook 缩到 1-2 句

**可选(P2)**:
7. Erasmus N3 line 122 Latin 双关解释精简
8. 全 lens 一轮"已经"+ "了" 双时态 sweep

修完后跑 `node --check` 三个 lens 文件,确认 webpack/SWC parser 不会因 quote nesting 炸。

---

**文化术语精确性 + cultural ban + voice 标杆**这三个 P0 项 Reformation 这一轮纪律明显回归——只剩第 11 条 quote nesting 这一条没 ship 到位。修完即 ship。
