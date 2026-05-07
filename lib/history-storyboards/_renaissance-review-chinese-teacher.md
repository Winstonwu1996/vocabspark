# Renaissance lens 草稿 — 中文 voice + 文化术语 audit

> By 赵老师 (北师大中文 + 北大近代史 / 北京 4 中 12 年)

读完三份 staging 草稿(Lorenzo 591 行 / Savonarola 487 行 / Lucia 507 行),整体感受先说前面 — 比我之前看 Black Death 那 4 个 lens 平均水平高出半档。Cultural ban 14 词 + 中国官职 / 家庭称谓 0 命中(我专门 grep 了一遍,干净);voice 标杆 N10/N11 基本对齐;没看到「我作为美第奇家族的实际控制者」这种典型译文体大长定语。Opus 是用心写过的。

但是 — 漏了 4 处该抓的硬伤。逐项说。

## 1. Executive Summary

**SHIP-WITH-FIXES** — 主体 voice 立得住,P0 级问题集中在 3 处,半天能 fix 完;P1/P2 是 polish。

## 2. P0 (翻译腔 / voice 标杆 / cultural ban / 文化术语错位)

### P0-1 Lucia lens 「想 30 秒」漏句号 — 2 处违规(第 8 条 C 硬规则)

`_renaissance-lucia-draft.js`:
- 第 375 行 `engagementHook: '...想 30 秒'`
- 第 415 行 `engagementHook: '...想 30 秒'`

两处都是 N10 + N11 的 engagementHook 字段,直接以「想 30 秒」结尾,**没有句号**。第 8 条 C 写得清清楚楚:「想 30 秒。」(句号收尾)是硬规则。

对照 Lorenzo lens 第 446 行 `engagementHook: '...想 30 秒。'` 是对的,Savonarola lens 第 368 / 413 行 `engagementHook: '...想 30 秒。'` 也是对的 — 唯独 Lucia 这个 lens 两处掉句号。是 Opus 写到 Lucia 时手滑了,不是设计差异。

**Fix**: 第 375 / 415 行末尾各补一个「。」。

### P0-2 Savonarola N11 「想 30 秒——你愿意要哪种代价?」破折号变体(第 8 条 C 边界)

第 391 行:
```
'两边都站得住。想 30 秒——你愿意要哪种代价?'
```

第 8 条 C 写的是 `「想 30 秒。」(句号收尾)`,这里把「。」换成「——」继续接问题。**严格说违规**。

但我看了 Lorenzo N10 第 446 行 `engagementHook: '想 30 秒。'` + Savonarola N10 第 368 行 `'...想 30 秒。'` 都是分两句的(陈述「想 30 秒。」+ 单独问句),只有 N11 这一处用了破折号桥接。这是 Opus 在 Savonarola N11 想加一个 reframe(「你愿意要哪种代价」),但破坏了 voice 标杆。

**Fix**: 拆成 `'两边都站得住。想 30 秒。你愿意要哪种代价?'`(三句话,句号收尾)。

### P0-3 「我心里清楚」滥用 — Lorenzo N1 + Savonarola N4 重复(节奏 tic)

Lorenzo N1 第 60 行:`可这一刻,我心里清楚——这座城市从今天起,听我的。`
Savonarola N4 第 133 行:`我心里清楚他叫我来做什么——临终忏悔。`

两个 lens 都用「我心里清楚——X」做内心戏开场。第一次新鲜,第二次成 voice tic。13 岁中国娃读两遍同样 cadence 会感觉「这老师讲两个不同人物像在背模板」。

更深的问题:Lorenzo 那句**翻译腔嫌疑** — 「我心里清楚——这座城市从今天起,听我的」这里「我心里清楚」对应英文 `I know`,中文人物在那个戏剧瞬间(20 岁刚接班)更自然的表达是「这一刻我知道」/「这一刻我明白」/「我心里有数」 — **没有「清楚」这个译词痕迹**。

**Fix**: Lorenzo N1 改成 `可这一刻我知道——这座城市从今天起,听我的。`;Savonarola N4 改成 `我清楚他叫我来做什么——临终忏悔。`(不留「心里」)。两处 cadence 立刻不同。

### P0-4 Savonarola N4 三段「问题罗列」式翻译腔(P0 节奏)

第 137 行:
```
我在心里问他三个问题。我看着他眼睛,没说出来,但我用沉默问。
一、把你 23 年的银行钱全数退给被你榨过的羊毛工人,你愿不愿意?
二、放掉你对 Florence 共和的实际控制、让 Florence 真选举市长,你愿不愿意?
三、承认你赞助的那些异教神话画...你愿不愿意?
```

「一、X 你愿不愿意?二、X 你愿不愿意?三、X 你愿不愿意?」这种 numbered + 句末重复同一短语的结构是**英文 listicle 翻译腔**。中文修士在病床边问三个问题,语气不该是公文体。13 岁中国娃读会觉得「这是 Savonarola 还是法庭判词」。

英文 source 用 `One. Will you... Two. Will you... Three. Will you...` 作为 anaphora 排比是对的(英文喜欢 parallel),中文应该转成更自然的递进 — 不重复「你愿不愿意」三次:

**建议改写**:
```
我在心里问他三个问题。我看着他眼睛,没说出来,但我用沉默问。
第一,你 23 年的银行钱,愿意全数退给被你榨过的羊毛工人吗?
第二,Florence 共和,你肯放手让它真选举市长吗?
第三,你赞助的那些异教神话画 — Birth of Venus、Pallas — 你承认它们是用穷人的泪堆起来的吗?
```

每句问法略变,中文听起来像一个修士的 internal voice,不像 templating。

## 3. P1 (节奏 / 称谓 / cross-lens drift)

### P1-1 Lucia 用「我妈」+ Lorenzo / Savonarola 用「我父亲」— cross-lens 称谓体不一致

3 lens 横向比一下:
- Lorenzo N1 第 95 行:`我父亲 Piero 接班只活了 5 年`(formal)
- Savonarola N1 第 45 行:`我父亲 Niccolò 是 Ferrara 公爵的私人医生`(formal)
- Lucia N1 第 44 行:`我妈缝了 12 年衣服`(informal)
- Lucia N2 第 76 行:`我妈 Maria 1495 年也死了`
- Lucia N7 第 246 行:`我妈那时还活着`

这不一定是 bug。Lucia 是 Oltrarno 区 28 岁文盲家庭主妇,用「我妈」反而**符合阶层**。Lorenzo 是文人主义教育出来的银行家,用「我父亲」对。Savonarola 是公爵御医之子 + 多明我会修士,用「我父亲」也对。

**所以这不是 drift,是有意区分阶层口吻 — 我 approve。**

但需要注意:Lucia N3 第 102 行 `她把镜子塞我手里说...`,Lucia N5 第 172 行 `我抱我女儿 Caterina 看最后一眼`,这些「我妈」「我女儿」连用,让 Lucia 的口吻**贴近 13 岁女孩的家长**而不是「14-15 世纪 Florence 寡妇」。这反而**对中国 13 岁读者代入是好事** — 中国娃读到「我女儿 5 岁拉我裙子问妈妈奶奶给的东西去哪了」会立刻把自己代进去,因为这是她妈妈对她的语气。

**Verdict**: 称谓系统**故意分层** — 保留。但赵老师我推荐:Lucia N3 第 102 行 `我妈说...` 改成 `她把镜子塞到我手里,说`(把「我妈」名词去掉,用「她」)。第二次提到妈不需要再点出「妈」字,中文连用同一主语可省略;英文必须每句加 `she`,中文不需要。这是教科书级翻译腔。

### P1-2 Lorenzo lens 「已经」滥用 6 处

grep `已经` 在 Lorenzo lens 命中:第 129 / 174 / 210 / 248 / 327 / 375 行,6 处。
- 第 174 行:`我转头时,已经晚了` — 这个「已经」对,中文戏剧时刻确实需要这个时间副词。
- 第 327 行:`这两年我膝盖已经走不了路了` — 也对。
- 第 129 行:`1470 年代他们已经把分行开到了 Rome、Naples` — **冗余**。中文「1470 年代他们把分行开到 Rome、Naples」更短更自然。「已经」是英文 `had already opened` 的痕迹。
- 第 210 行:`Florence 民众已经在街上自发动手了` — 同样冗余,改成「Florence 民众在街上自发动手了」就够。
- 第 248 行:`教皇 + Naples 联军已经把 Florence 周边几座小城拿下` — 冗余。
- 第 375 行:`Giovanni,老二,16 岁,已经被我送进教廷` — 冗余。「16 岁,被我送进教廷」就够。

**Fix**: 删除 4 处冗余「已经」(第 129 / 210 / 248 / 375 行),保留 2 处真有时间对比意义的(第 174 / 327 行)。

### P1-3 Lorenzo N6 Ferrante 木乃伊段落「这一段是这个视角让你听见我心里在算计的事」破入第一人称(第 8 条 J 违规边界)

第 252 行:
```
我跟他谈了 3 个月。具体怎么谈下来的——账本上的来往、密室里的承诺——大部分没有留下记录。
这一段是这个视角让你听见我心里在算计的事:他是讲利益的人...
```

第 8 条 J 写得清楚:「角色第一人称叙述里禁止出现『lens 让你...』/『lens 给了...』等 meta 标注」。这里 Opus 自己注释里也标了「已加 framing」 — 但 framing **就是**第 8 条 J 反对的那种破入。

虽然用的是「这个视角让你听见」(已经替换了「lens」工程词,符合第 8 条 K),但**句子位置错了** — 嵌在 Lorenzo 第一人称叙述中间,撞断了 character voice。

类似问题在 Savonarola N3 第 105 行 / N4 第 135 行 / N6 第 244 行 / N8 第 282 行 / N9 第 318 行 — 都是第一人称叙述中间冒出「这一遍让你听见我心里...」。

**对照 Lucia N6 第 204 行**:`(这一遍让你听见 Lucia 心里转的:她不知道镜子去哪...)` — Lucia 这里**用了括号**括起来,从 Lucia 第一人称切到 narrator 第三人称(`Lucia` 而不是「我」),这是符合第 8 条 J 第 3 条「内嵌 1 个**括号短句**化解」的正确做法。

**Verdict**: Lucia 处理对,**Lorenzo + Savonarola 这种 5 处** 都需要改成括号短句体。

**Fix 示例 (Lorenzo N6)**:
```
我跟他谈了 3 个月。具体怎么谈下来的——账本上的来往、密室里的承诺——大部分没有留下记录。
(下面这一段是这个视角让你听见 Lorenzo 心里在算计的事——史料没记。)
他是讲利益的人,不是讲面子的人...
```

或更彻底 — 干脆删掉 framing,直接说「我心里在算计:他是讲利益的人」 — 因为读者已经从 lens card description 知道这是合成内心戏。

### P1-4 「绞死」/「处决」/「处死」三种说法,Savonarola 1498/5/23 历史精度

Savonarola 1498/5/23 实际过程:**先绞死 + 再焚尸 + 骨灰扔 Arno**(historical record 一致)。

3 lens 表述:
- Savonarola N9 第 316 行:`先绞死:绳子套脖子,脚下踏板抽走。然后尸体被点火,烧了 6 小时` — **正确,精确**。
- Savonarola N10 第 346 行:`46 岁在 Florence 广场被绞死烧尸骨灰扔河` — 简写,可。
- Lucia N8 第 282 行:`Savonarola 自己在 Piazza della Signoria 被绞死。然后尸体被烧。骨灰扔进 Arno 河` — **正确**。
- Lorenzo lens 没提及(Lorenzo 死在 Savonarola 之前,合理)。

**精度过关**。但 Lorenzo lens 复仇章节用的是「处死 90 个」(N5 第 213 行)/「处决」(N5 第 213 行)/「处死」(description 第 36 行,N5 第 227 行) — 一会儿处死一会儿处决。中文「处死」侧重结果,「处决」侧重程序。Lorenzo 这场是 80 天**经过审判**的,「处决」更准。

**Fix**: Lorenzo lens description 第 36 行 + N5 deliverGoal 第 227 行 改「处死」为「处决」。一致性。

### P1-5 Savonarola N1 hook「修士袍」语义疑问

第 47 行:`我背着一个布袋,里面有我抄的圣经、那首诗的手稿、一件换洗修士袍。`

Savonarola 1475 年 4 月 23 岁出走时,**还没入会**,他是去 Bologna 的多明我会修道院**报到**。也就是说他**还不是修士**,袋子里不应该有「换洗修士袍」 — 多明我会的黑白袍是入会后由修道院发的,不是世俗青年自己带去。

这是史实小 bug。中文「修士袍」也容易误导(让 13 岁娃以为他出家前已经有袍子了)。

**Fix**: 改成「一件换洗的衣服」或「一身换洗的粗布衣」。让史实精确。

## 4. P2 polish

### P2-1 Lorenzo N9 标点对话不够中文化

第 378 行:`"我有三个儿子——一个是傻子,一个是聪明人,一个是好人。"`

中文引号内 em-dash 在「一个是傻子」前面用 — 节奏 OK。但**三个并列**用三次「一个是」是英文 `one is X, one is Y, one is Z` 的节拍。中文更自然的是「一个傻子,一个聪明人,一个好人」(去掉「是」字 6 个,只留 3 个名词)。

但这是引文 — Lorenzo 1492 年原文意大利语 (un savio / un buono / un matto),传统中译就有「我有三个儿子,一个聪明,一个好,一个傻」的版本。**两种译都立得住**。

**Verdict**: 不动也 OK。

### P2-2 Lucia N1 description 描述句过长

第 499 行(luciaWidowLens.description.cn):
```
虚构合成人物,代表 Florence 几万个被路过 Renaissance 的普通家庭主妇。28 岁,单亲妈妈,
1496 丈夫死小型 plague,5 岁女儿 Caterina + 3 岁儿子 Pietro + 镶金小镜子嫁妆是她的全部。
1497 年 2 月 7 日 Bonfire of the Vanities 那天,她抱着这面镜子去 Piazza della Signoria 火堆边。
这个视角让你从底层家庭内部经历那一天和它 13 年后的代价。
```

「5 岁女儿 Caterina + 3 岁儿子 Pietro + 镶金小镜子嫁妆是她的全部」这个 `+` 加号串联 3 件事 — 是英文 plus sign 拼接,中文 schema 里第 8 条 H 写明 description 字段「不用 em-dash」,**「+」也是同样的视觉噪音**。中文应该用顿号:「5 岁女儿 Caterina、3 岁儿子 Pietro、加上一面镶金小镜子嫁妆,这就是她的全部。」

**Fix**: 把 `+` 换成顿号,把 `是她的全部` 换成 `这就是她的全部`。

### P2-3 Lorenzo N1 「20 岁的银行家」+ N1 hook description 用「Renaissance」未释义

description 第 36 行 + N1 第 75 行 都直接用 `Renaissance` 没给中文释义。但中文读者(7 年级)对「Renaissance = 文艺复兴」的对应**不一定**自动建立。第一次出现应该 inline gloss 一次:`Renaissance(文艺复兴)`,后续可以省。

**Fix**: Lorenzo N1 hook 第 61 行第一次出现 Renaissance 改成 `Renaissance(文艺复兴)`,后续保持 `Renaissance`。Savonarola 跟 Lucia 也照办 — Savonarola N1 第 46 行第一次提及。

## 5. 跨 lens cn voice drift 检查

整体 voice **3 lens 高度一致**,值得表扬:
- 「这一遍让你听见 X」/「这个视角让你听见 X」 — 3 lens 都用对,虽然位置上 Lorenzo / Savonarola 有 P1-3 的「破入」问题,但词汇本身一致。
- 「我 X 岁」开场 — 3 lens 都用第一人称 + 具体岁数,节拍一致。
- 「想 30 秒。」收尾 — 3 lens 大部分对,只 Lucia 漏 2 处句号(P0-1)。
- 「**一种说法**」/「**另一种说法**」/「两边都站得住」 — 3 lens 全部对(我 grep 验证过)。

**有一点轻微 drift**:
- Lorenzo / Savonarola 是 12 节,Lucia 是 12 节 — 节数一致。
- Lorenzo lens 第一人称偏「叙事的政治家口吻」(简洁、果断、有判断);Savonarola 第一人称偏「自省的修士口吻」(纠结、引用圣经);Lucia 第一人称偏「持家的母亲口吻」(具体到孩子动作 + 房租)。**这种 drift 是有意识的人物分化,赞**。

3 个 lens 不是「都是 Opus 写的所以听起来一样」 — 反而是「Opus 用心区分了 3 个声音」。

## 6. 推荐 fix priority

按 fix 难度 + 严重性排:

**今天必 fix(15 分钟)**:
1. P0-1: Lucia 第 375 / 415 行补 2 个句号(2 处)
2. P0-2: Savonarola 第 391 行拆三句话(1 处)
3. P0-3: Lorenzo N1 + Savonarola N4 改「我心里清楚」(2 处)
4. P0-4: Savonarola N4 三个问题改写(1 段)
5. P1-5: Savonarola N1 「修士袍」改「粗布衣」(1 处史实)

**今天该 fix(30-60 分钟)**:
6. P1-2: Lorenzo lens 删 4 处冗余「已经」
7. P1-3: Lorenzo N6 + Savonarola N3/N4/N6/N8/N9 改括号短句体(5 处)
8. P1-4: Lorenzo description + N5 「处死」改「处决」(2 处)
9. P2-2: Lucia description 「+」改顿号(1 处)
10. P2-3: Lorenzo / Savonarola N1 第一次 Renaissance 加「(文艺复兴)」(2 处)

**可保留 / 不动**:
- 称谓分层(Lucia「我妈」/ Lorenzo「我父亲」)— 故意,正确
- 「教皇」全文一致(没用「教宗」)— 一致,正确
- 「绞死」+「焚尸」+「骨灰扔 Arno」史实精度 — 正确
- 城邦 / 共和国 / Repubblica Fiorentina — 表述一致,正确
- 嫁妆(Lucia 用对,女方陪嫁)— 正确,跟「聘礼」(男方下聘)分得清
- 三子评价 `un savio / un buono / un matto` 中译 — 立得住

---

**总评**:这 3 个 lens 比 Black Death 那一轮明显进步。Cultural ban 0 命中(grep 干净),voice 标杆 80% 对齐,em-dash 链 0 处(只 Savonarola 1 处 4-em-dash 检测命中,实测是段落分隔不是连续链)。P0 那 4 处真的就是手滑 — 改完今天就 ship-ready。Lucia lens 那个「我女儿 5 岁拉我裙子问『妈妈,奶奶给的东西去哪了?』」是这 3 个 lens 里我最被打动的一笔 — 一个北京 4 中 13 岁女生读到这一句,她不会想 Renaissance 是文艺复兴,她会想她奶奶上次给她的那个玉镯。这就是 voice 立住了。
