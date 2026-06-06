// ─── 同伴笔记本架构 v1 · Ancient Israel & Origins of Monotheism (约前 1000) ───
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），与 storyboard reader 同龄。
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语 + 关键人物，不剧透
//   2. mainConcepts（出口复习笔记）— 12 张核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + 顶层 xiaoweiNote（只回忆+提炼）
//        · 故事没覆盖的：storyAnchor.covered = false + 顶层 standaloneText (mini-lesson) + xiaoweiNote
//        （standaloneText / xiaoweiNote 一律放卡顶层，绝不嵌进 storyAnchor）
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 三 lens：巴比伦胜利者 (conqueror) / 废墟上的先知 (prophet) /
//     巴比伦河边的被掳者 (exile, default)；考点卡回扣这些情感锚
//   - notebook 补完 AP/州考课纲考点（monotheism↔monolatry、covenant、diaspora、
//     先知传统、Josiah 改革、Cyrus 放归、三块碑铭证据、United Monarchy 争论、中国桥）
//
// 课纲对齐：CA HSS Grade 6.3（古希伯来人与一神教）+ AP World（古近东帝国与宗教）
//
// 事实地基：对账 ancient-israel-1000bce-factledger.md + 附录 B/C/D
//   - Tel Dan 石碑佐证「大卫之家」真实存在，争的是王国规模（账本 United Monarchy debate）
//   - Cyrus Cylinder 是面向所有被征服民族的普遍政策，未单点犹大（账本 #5 清坑）
//   - monolatry（单拜一神，承认别神存在）↔ monotheism（唯一一神）区别是本课核心
//
// schemaVersion: 1 · notebookVersion: ancient-israel-1000bce-v1

export var notebook = {
  topicId: 'ancient-israel-1000bce',
  topicNameCn: '古以色列与一神教的起源',
  topicNameEn: 'Ancient Israel & the Origins of Monotheism',
  schemaVersion: 1,
  companion: {
    nameCn: '小 U',
    nameEn: 'Xiao U',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning companion, same age as reader',
  },

  // ─── 入口：小 U 的预习笔记（学习 schema 脚手架，不剧透）───────
  preview: {
    cn: `今天老师说我们要学一件听上去很大的事——一神教（monotheism）是怎么来的。
她说重点不是"哪个宗教是真的"（那不是历史课的问题），而是一个观念怎么在历史里被锻造出来。

她给了一张纸，上面写着这些名字：

Jeremiah（耶利米）、Ezekiel（以西结）、Josiah（约西亚）、
Nebuchadnezzar（尼布甲尼撒）、Cyrus（居鲁士）

还有一串词：YHWH（雅威）、covenant / brit（圣约）、Torah（妥拉/律法）、
monolatry（单拜一神）vs monotheism（唯一一神）、prophet / navi（先知）、
Babylonian Exile（巴比伦之囚）、diaspora（流散）、Second Temple（第二圣殿）。

我先记下来。等下读三遍故事——巴比伦的胜利者（烧城的人）、废墟上的先知（替神说话的人）、
巴比伦河边的被掳者（失去一切的人）——读完再回来对照这张单子。

老师抄给我一句话："一神教不是天上掉下来的现成礼物。它是在历史上最惨的一次失败里，
被一群失去一切的人，一锤一锤打出来的。"`,
    en: `Today my teacher said we're learning something that sounds huge — how monotheism began.
She said the point is NOT "which religion is true" (that's not a history-class question),
but how an idea got hammered out inside history.

She gave us a sheet with these names:

Jeremiah, Ezekiel, Josiah, Nebuchadnezzar, Cyrus

Plus a string of terms: YHWH (say it YAH-weh), covenant / brit, Torah,
monolatry vs monotheism, prophet / navi, Babylonian Exile, diaspora, Second Temple.

Let me write these down. After I read the three passes — the Babylonian Victor (who burned
the city), the Prophet on the ruins (who spoke for the god), and the Exile by the river
(who lost everything) — I'll come back and check this list.

Teacher copied one line for me: "Monotheism was no ready-made gift fallen from the sky.
It was hammered out, blow by blow, in history's most crushing defeat, by people who had
lost everything."`,
    keyTerms: [
      { cn: 'YHWH（雅威）', en: 'YHWH (YAH-weh)' },
      { cn: '单拜一神 vs 唯一一神', en: 'monolatry vs monotheism' },
      { cn: '圣约（brit）', en: 'covenant (brit)' },
      { cn: '妥拉 / 律法', en: 'Torah' },
      { cn: '先知（navi）', en: 'prophet (navi)' },
      { cn: '第一 / 第二圣殿', en: 'First / Second Temple' },
      { cn: '巴比伦之囚', en: 'Babylonian Exile' },
      { cn: '流散', en: 'diaspora' },
      { cn: '迦南 / 黎凡特', en: 'Canaan / Levant' },
      { cn: '天命（天）', en: 'Mandate of Heaven (Tian)' },
      { cn: '希伯来圣经', en: 'Hebrew Bible' },
      { cn: '亚伯拉罕诸教', en: 'Abrahamic faiths' },
    ],
    // mustKnow: true = AP/州考必考；mustKnow: false = 背景人物
    keyFigures: [
      {
        nameCn: '耶利米',
        nameEn: 'Jeremiah',
        ipa: '/ˌdʒɛrɪˈmaɪə/',
        roleCn: '亲历耶路撒冷陷落的先知，把灾难解释成"神的管教"而非"神的失败"',
        roleEn: 'Prophet who lived through the fall of Jerusalem and read the disaster as "the god disciplining us," not "the god defeated"',
        mustKnow: true,
        audioKey: 'jeremiah',
      },
      {
        nameCn: '以西结',
        nameEn: 'Ezekiel',
        ipa: '/ɪˈziːkiəl/',
        roleCn: '被掳到巴比伦的先知，宣告神不被圣殿和国土困住——流散信仰的关键一步',
        roleEn: 'Prophet carried to Babylon who proclaimed the god is not trapped by temple or land — a key step toward a portable faith',
        mustKnow: true,
        audioKey: 'ezekiel',
      },
      {
        nameCn: '约西亚',
        nameEn: 'Josiah',
        ipa: '/dʒoʊˈsaɪə/',
        roleCn: '南国国王，约前 622 年推动集中崇拜改革——从单拜一神走向一神教的关键推手',
        roleEn: 'King of Judah who around 622 BCE pushed the reform concentrating worship — a key driver from monolatry toward monotheism',
        mustKnow: true,
        audioKey: 'josiah',
      },
      {
        nameCn: '尼布甲尼撒二世',
        nameEn: 'Nebuchadnezzar II',
        ipa: '/ˌnɛbjʊkədˈnɛzər/',
        roleCn: '新巴比伦王，前 586 年攻破耶路撒冷、烧第一圣殿、掳走犹大精英',
        roleEn: 'Neo-Babylonian king who in 586 BCE broke Jerusalem, burned the First Temple, and carried off the elite of Judah',
        mustKnow: true,
        audioKey: 'nebuchadnezzar',
      },
      {
        nameCn: '居鲁士大帝',
        nameEn: 'Cyrus the Great',
        ipa: '/ˈsaɪrəs/',
        roleCn: '波斯王，前 539 年灭巴比伦、前 538 年下令放归被掳者，犹大人据此重建第二圣殿',
        roleEn: 'Persian king who destroyed Babylon in 539 BCE and in 538 BCE ordered the exiles released; the Judahites rebuilt the Second Temple',
        mustKnow: true,
        audioKey: 'cyrus-the-great',
      },
      {
        nameCn: '大卫',
        nameEn: 'David',
        ipa: '/ˈdeɪvɪd/',
        roleCn: '传统中约前 1000 年统一王国、定都耶路撒冷者；其王朝由 Tel Dan 石碑佐证真实存在，王国规模存争议',
        roleEn: 'Traditionally united the kingdom and made Jerusalem the capital around 1000 BCE; his dynasty is attested by the Tel Dan Stele, though the kingdom\'s size is debated',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '所罗门',
        nameEn: 'Solomon',
        ipa: '/ˈsɒləmən/',
        roleCn: '传统中约前 957 年建第一圣殿者；其王国的盛大与否是考古争论焦点',
        roleEn: 'Traditionally built the First Temple around 957 BCE; how grand his kingdom was is a focus of archaeological debate',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'monolatry-to-monotheism',
      termCn: '从单拜一神到唯一一神',
      termEn: 'From Monolatry to Monotheism',
      standardRef: ['CA HSS 6.3', 'AP World — religions of the ancient world'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'exile-generation-receiving-end',
        nodeIds: ['ancient-israel-exile-n8', 'ancient-israel-prophet-n5'],
      },
      xiaoweiNote: {
        cn: `这是全课最核心的一对词，我一定要分清：
**monolatry（单拜一神）= 只拜自己这族的神，但承认别族也有真神。**
**monotheism（唯一一神）= 天下根本只有一个神，别的全不算。**

故事里说得很清楚：早些年很多普通犹大人，是一边敬 YHWH、一边也拜迦南本地神
（Baal、Asherah）的。从"只拜我们的神"推到"天下只有一个神"，走了几百年——
先有约前 622 年约西亚改革，再到巴比伦流亡里被逼到底。

考点关键句：一神教是**被锻造出来的**，不是一开始就有、也不是某天一次性降下的。
AP/州考爱考"change over time（随时间演变）"，这条演变链就是标准答案。`,
        en: `This is the most central word pair in the whole topic; I must keep them apart:
**monolatry = worship only your own people's god, but still grant other peoples have real gods.**
**monotheism = there is only one god in all the world; the rest don't count.**

The story is clear: in earlier years many ordinary Judahites worshipped YHWH while also
worshipping local Canaanite gods (Baal, Asherah). Pushing from "worship only our god" to
"only one god in all the world" took centuries — first Josiah's reform around 622 BCE,
then being forced all the way during the Babylonian exile.

Key exam sentence: monotheism was **forged**, not there from the start nor handed down
all at once. AP / state exams love "change over time," and this chain is the model answer.`,
      },
    },

    {
      id: 'covenant-brit',
      termCn: '圣约（brit）',
      termEn: 'Covenant (brit)',
      standardRef: ['CA HSS 6.3', 'AP World — belief systems'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'exile-generation-receiving-end',
        nodeIds: ['ancient-israel-exile-n2', 'ancient-israel-exile-n5'],
      },
      xiaoweiNote: {
        cn: `被掳者那一遍第 2 节讲透了：covenant（圣约，希伯来语 brit）不是主子对奴才，
是一份**双向、彼此都有责任的契约**——神说"你们专一敬我、守我的律法，我就作你们的神、护佑你们"。

为什么这个词这么关键？因为后来先知正是靠它翻盘的：灾难不是"神输了"，
而是"我们先违了约，神才用巴比伦来管教我们"。约还在，神就还在。
一个法律概念（契约），撑住了一整个民族的信仰。

考点关键句：covenant = 神与子民之间双向有责任的盟约，是古以色列宗教最独特的发明，
也是把"惨败"解释成"神还在乎"的逻辑支点。`,
        en: `Node 2 of the Exile pass nails it: covenant (brit in Hebrew) is not master over servant
but a **two-way agreement with duties on both sides** — the god says "worship me alone and
keep my law, and I will be your god and guard you."

Why does this word matter so much? Because the prophets later flipped the whole story with it:
the disaster was not "the god lost" but "we broke the covenant first, so the god used Babylon
to discipline us." If the covenant still stands, the god still stands. A legal idea (a contract)
held up an entire people's faith.

Key exam sentence: covenant = a two-way, mutually binding pact between god and people, the
most distinctive invention of ancient Israelite religion, and the logical pivot that turned
"crushing defeat" into "the god still cares."`,
      },
    },

    {
      id: 'babylonian-exile-586',
      termCn: '巴比伦之囚（前 586）',
      termEn: 'The Babylonian Exile (586 BCE)',
      standardRef: ['CA HSS 6.3', 'AP World — Mesopotamian empires'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'babylon-conqueror-actor',
        nodeIds: ['ancient-israel-conq-n1', 'ancient-israel-conq-n5', 'ancient-israel-exile-n1'],
      },
      xiaoweiNote: {
        cn: `三个视角都从这件事出发：前 586 年，新巴比伦王尼布甲尼撒攻破耶路撒冷、
烧毁第一圣殿（First Temple）、把犹大的祭司贵族工匠成批掳往巴比伦——史称巴比伦之囚。

我要记住那个反讽：按古近东所有人的常识，这一刻意味着"这个民族的神输了、该消失了"
（一百多年前北国以色列被亚述灭掉，被掳的人真就消失成了"失踪的十支派"）。
可犹大人偏偏没散——这场最彻底的失败，反而锻造出最坚固的信仰。

考点关键句：586 BCE = 第一圣殿被毁 + 巴比伦之囚开始 = 一神教被逼出来的起点。`,
        en: `All three passes start here: in 586 BCE the Neo-Babylonian king Nebuchadnezzar broke
Jerusalem, burned the First Temple, and carried off Judah's priests, nobles, and craftsmen
to Babylon in batches — known as the Babylonian Exile.

I must remember the irony: by everyone's common sense in the ancient Near East, this moment
meant "this people's god has lost and ought to vanish" (a century earlier the northern kingdom
of Israel was destroyed by Assyria, and its captives really did vanish into the "lost ten tribes").
Yet the Judahites did not scatter — the most utter defeat forged the most solid faith instead.

Key exam sentence: 586 BCE = First Temple destroyed + Babylonian Exile begins = the starting
point where monotheism was forced into being.`,
      },
    },

    {
      id: 'prophet-navi',
      termCn: '先知（navi）',
      termEn: 'Prophet (navi)',
      standardRef: ['CA HSS 6.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'prophet-mediator',
        nodeIds: ['ancient-israel-prophet-n1', 'ancient-israel-prophet-n4', 'ancient-israel-exile-n5'],
      },
      xiaoweiNote: {
        cn: `先知那一遍开头就纠正了我一个误会：先知（prophet，希伯来语 navi）**不是算命的**，
不是预测明天天气或谁会赢的人。先知是**危机时刻替神说话、替整个民族解释"这一切意味着什么"**的人。

像耶利米、以西结，站在一个超级孤独的位置：一边是巴比伦的刀，一边是绝望到想改拜 Marduk 的同胞。
他们说出最不讨好却可能救人的话——"错的不是神，是我们"。当先知从来不是安全体面的差事，
之前有先知因为话太刺耳被关押、追打、扔进枯井。

考点关键句：先知 = 危机时刻替神说话、解释历史意义的人，是把灾难翻译成意义的关键角色。`,
        en: `The Prophet pass opens by fixing a misunderstanding: a prophet (navi in Hebrew) is **not a
fortune teller**, not someone predicting tomorrow's weather or who will win. A prophet is one who
**speaks for the god in a crisis and explains for a whole people "what all of this means."**

Figures like Jeremiah and Ezekiel stood in an intensely lonely place: Babylon's blade on one side,
countrymen so desperate they wanted to turn to Marduk on the other. They spoke the least pleasing
but possibly life-saving line — "it is not the god who is wrong, it is us." Being a prophet was
never safe or respectable; earlier ones were imprisoned, beaten, and thrown into a dry well for
words too harsh.

Key exam sentence: prophet = one who speaks for the god in crisis and explains the meaning of
history — the key role that translates disaster into meaning.`,
      },
    },

    {
      id: 'diaspora-portable-religion',
      termCn: '流散与"随身的信仰"',
      termEn: 'Diaspora & Portable Religion',
      standardRef: ['CA HSS 6.3', 'AP World — belief systems'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'exile-generation-receiving-end',
        nodeIds: ['ancient-israel-exile-n7', 'ancient-israel-prophet-n7'],
      },
      xiaoweiNote: {
        cn: `这是我觉得最妙的一步。过去信仰中心是耶路撒冷那一座圣殿——献祭、节庆、与神相会都在那。
庙一烧、人一掳，按老办法信仰就该断了。

可先知（尤其被掳的以西结一脉）宣告：**神不被任何一座庙、任何一块国土困住**——
他在耶路撒冷在，在巴比伦河边一样在。于是信仰重心从"在庙里献祭"转向"随时随地诵读、
记诵、抄写神的话和律法（Torah）"。一群没庙、没国、没权力的人，把一卷一卷经文当成
**随身能带走的圣殿**。这就是 diaspora（流散）能存活的秘密。

考点关键句：圣殿被毁 → 信仰从"地点"转到"经卷+共同体" → 这是后世"书的宗教"（犹太教/
基督教/伊斯兰教都极重经典）的雏形。`,
        en: `This is the move I find cleverest. The old center of faith was that one Temple in Jerusalem —
offerings, festivals, meeting the god were all there. Burn the temple, carry off the people, and by
the old way the faith should break.

But the prophets (especially the line of Ezekiel in exile) proclaimed: **the god is not trapped by
any temple or any land** — present in Jerusalem, just as present by the rivers of Babylon. So the
center of faith shifted from "making offerings in the temple" to "reciting, memorizing, and copying
the god's words and law (Torah) anytime, anywhere." A people with no temple, no nation, no power
treated scrolls as a **Temple they could carry with them**. That is the secret of how the diaspora survived.

Key exam sentence: Temple destroyed → faith moved from "a place" to "scroll + community" → the seed
of the later "religion of the book" (Judaism, Christianity, Islam all prize their scriptures).`,
      },
    },

    {
      id: 'josiah-reform-622',
      termCn: '约西亚改革（约前 622）',
      termEn: 'Josiah\'s Reform (c. 622 BCE)',
      standardRef: ['CA HSS 6.3'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'prophet-mediator',
        nodeIds: ['ancient-israel-prophet-n8', 'ancient-israel-exile-n8'],
      },
      xiaoweiNote: {
        cn: `演变链里关键的一环。约前 622 年，南国国王约西亚（Josiah）在修缮圣殿时"发现"了
一卷律法书（多数学者认为就是《申命记》核心），据此大力推行：只拜 YHWH 一个神、
只在耶路撒冷一处献祭，拆掉地方上拜别神（Baal、Asherah）的祭坛。

我要记住时间次序：**约前 622 约西亚改革（被掳前）→ 前 586 流亡 → 流亡里推向彻底一神论。**
这说明一神教的种子，在被掳之前就已经在政治+宗教改革里被种下了，不是流亡里凭空冒出来的。

考点关键句：约西亚改革 = 从 monolatry 走向 monotheism 的关键转折点（被掳前的伏笔）。`,
        en: `A key link in the evolution chain. Around 622 BCE, King Josiah of Judah "found" a scroll of
law while repairing the Temple (most scholars think it was the core of Deuteronomy), and on that basis
pushed hard: worship YHWH alone, make offerings only at the one place in Jerusalem, and tear down local
altars to other gods (Baal, Asherah).

I must remember the order: **c. 622 Josiah's reform (before the exile) → 586 exile → exile pushes
toward thorough monotheism.** This shows the seed of monotheism was already planted in political and
religious reform before the exile, not conjured out of nothing during it.

Key exam sentence: Josiah's reform = the key turning point from monolatry toward monotheism (the
set-up before the exile).`,
      },
    },

    {
      id: 'cyrus-return-second-temple',
      termCn: '居鲁士放归与第二圣殿',
      termEn: 'Cyrus, the Return & the Second Temple',
      standardRef: ['CA HSS 6.3', 'AP World — Persian Empire'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'babylon-conqueror-actor',
        nodeIds: ['ancient-israel-conq-n9'],
      },
      xiaoweiNote: {
        cn: `胜利者那一遍第 9 节给了结局：前 539 年波斯王居鲁士（Cyrus）灭巴比伦，前 538 年
下令允许被掳各族返乡、重建神庙。犹大人在放归之列，回耶路撒冷重建了第二圣殿（Second Temple）。

这里有个超棒的史料教学点（我差点踩坑）：居鲁士那道命令是**面向所有被征服民族**的普遍政策，
他的圆柱铭文（Cyrus Cylinder）**并没有单独点名犹大**。可犹大人从自己的信仰框架里，
把这桩事读成"我们的神在掌权、连波斯王都听他调遣"。同一件事，帝国看是统治术，他们看是神的手——
两个框架都真实，不矛盾。

考点关键句：读史料要问"它是谁写的、为谁、为什么写"。Cyrus Cylinder = 普遍宽容政策 ≠ 专为犹大。`,
        en: `Node 9 of the Victor pass gives the ending: in 539 BCE the Persian king Cyrus destroyed
Babylon, and in 538 BCE ordered the carried-off peoples to return home and rebuild their temples.
The Judahites were among them; they returned to Jerusalem and rebuilt the Second Temple.

Here is a great sourcing lesson (I almost fell in the pit): Cyrus's order was a **general policy
toward all conquered peoples**, and his inscription, the Cyrus Cylinder, **did not single out Judah**.
Yet the Judahites read it through their own framework as "our god is in command, and even the Persian
king moves at his bidding." The same event: the empire sees statecraft, they see the hand of their
god — both frameworks are true, not in conflict.

Key exam sentence: when reading a source, ask "who wrote it, for whom, and why." Cyrus Cylinder =
a general tolerance policy ≠ written specially for Judah.`,
      },
    },

    {
      id: 'china-bridge-mandate-vs-covenant',
      termCn: '中外对照：天命 vs 立约',
      termEn: 'China Bridge: Mandate of Heaven vs Covenant',
      standardRef: ['CA HSS 6.3', 'AP World — comparison of belief systems'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'exile-generation-receiving-end',
        nodeIds: ['ancient-israel-exile-n9'],
      },
      xiaoweiNote: {
        cn: `这一节对我（华裔）最有感觉。同一个时代，地球另一端的中国正是周代，
也在回答"人在宇宙里怎么安身"，但走的是完全不同的一条路：

**以色列**：站在世界之外、唯一、不可造像的神 + covenant（立约，违约受罚）。
**中国**：「天命」（Mandate of Heaven）+ 德行 + 祖先血脉——天把统治权授予有德者、失德就收回，
个人靠祭祖连接超越者；「天」更像一张连续的大网，不是网外唯一的点。

一个超容易踩的雷：故事里商人的至高神叫 Shangdi（上帝/帝）——这个"上帝"是中文古词，
和后来翻译犹太教/基督教那位神时**借用的同一个词**"上帝"**根本不是一回事**。别读成"古代中国早就拜上帝了"。

Rule 0 提醒：这不分谁高级谁原始，是两种各有智慧、各有盲点的深刻答案。如果你家过年还祭祖、
长辈说"积德""缺德""举头三尺有神明"——那就是这套天命宇宙观活到今天的影子。`,
        en: `This node hits hardest for me (as a Chinese American). In the very same era, China on the
other side of the earth was in its Zhou dynasty, also answering "how does a person find a place in the
cosmos," but on a completely different road:

**Israel**: a single, image-less god standing outside the world + covenant (break it, be punished).
**China**: the Mandate of Heaven + virtue + ancestral bloodline — Heaven grants rule to the virtuous
and withdraws it from the unworthy, and a person links to the transcendent through honoring ancestors;
"Heaven" is more like a continuous web than a single point outside it.

A very easy trap: in the story the Shang high god is called Shangdi (上帝). This 上帝 is an ancient
Chinese word, and it is **not the same being** as the modern Chinese 上帝 later **borrowed** to
translate the Jewish/Christian God. Don't read it as "ancient China already worshipped that God."

Rule 0 reminder: this is not about advanced vs primitive — they are two profound answers, each with
its wisdom and blind spots. If your family still honors ancestors at New Year, or elders say "build
virtue," "lose your virtue," "the gods watch three feet above your head" — that is the living shadow
of this Mandate-of-Heaven cosmology today.`,
      },
    },

    {
      id: 'three-inscriptions-evidence',
      termCn: '三块碑铭（史料证据）',
      termEn: 'The Three Inscriptions (Hard Evidence)',
      standardRef: ['AP World — sourcing / use of evidence', 'CA HSS 6.3'],
      examFrequency: 'mid',
      storyAnchor: { covered: false },
      standaloneText: {
        cn: `故事里点到了 Tel Dan 和 Merneptah，但没展开。考试爱考"文本声称 vs 实物证据"，
这三块碑铭就是标准训练材料，每张只问一句：它能证明什么、不能证明什么。

1) **Merneptah Stele（麦伦普塔石碑，约前 1208，埃及）**：文献里**最早出现"Israel"**这个名字。
   能证明：约前 13 世纪末已有一个叫 Israel 的群体存在。不能证明：它有多大、信什么。
2) **Tel Dan Stele（特勒丹石碑，约前 9 世纪）**：圣经外**最早提到"House of David（大卫之家）"**。
   能证明：大卫王朝真实存在。不能证明：那个"统一王国"到底多大多强（那是另一场争论）。
3) **Cyrus Cylinder（居鲁士圆柱，约前 539）**：波斯的宽容政策声明。
   能证明：居鲁士对被征服民族有普遍宽容政策。不能证明：它专为犹大人而写（它没单点犹大）。`,
        en: `The story names Tel Dan and Merneptah but doesn't unpack them. Exams love "what a text claims
vs physical evidence," and these three inscriptions are the model material — for each, ask just one
question: what can it prove, and what can it not?

1) **Merneptah Stele (c. 1208 BCE, Egypt)**: the **earliest written appearance of the name "Israel."**
   Proves: a group called Israel existed by the late 13th century BCE. Doesn't prove: its size or beliefs.
2) **Tel Dan Stele (c. 9th century BCE)**: the **earliest mention outside the Bible of the "House of David."**
   Proves: the dynasty of David really existed. Doesn't prove: how large or strong that "united kingdom"
   was (a separate debate).
3) **Cyrus Cylinder (c. 539 BCE)**: a Persian declaration of tolerance.
   Proves: Cyrus had a general tolerance policy toward conquered peoples. Doesn't prove: it was written
   specially for the Judahites (it never singles them out).`,
      },
      xiaoweiNote: {
        cn: `背的时候我用一句口诀串起来："Israel 看 Merneptah，大卫看 Tel Dan，放归看 Cyrus。"
关键不是记住碑名，是会区分"文本说了什么"和"实物证明了什么"——这是 AP 的招牌技能。`,
        en: `To memorize, I chain them: "Israel — Merneptah; David — Tel Dan; the return — Cyrus."
The point isn't the stele names but telling apart "what a text says" from "what an object proves" —
that's a signature AP skill.`,
      },
    },

    {
      id: 'united-monarchy-debate',
      termCn: '统一王国之争（大卫/所罗门）',
      termEn: 'The United Monarchy Debate',
      standardRef: ['AP World — sourcing', 'CA HSS 6.3'],
      examFrequency: 'low',
      storyAnchor: { covered: false },
      standaloneText: {
        cn: `先知那一遍提到过"大卫、所罗门的王国到底多大多强是著名争论"，这里把它讲清楚。

传统叙事：大卫约前 1000 年统一以色列、定都耶路撒冷，所罗门约前 957 年建第一圣殿，王国辉煌强盛。
**学术争论的焦点不是"大卫存不存在"**（Tel Dan 石碑已让多数学者接受大卫王朝真实存在），
**而是这个王国当时到底多大多强**：
- "极简派"（如 Israel Finkelstein）：前 10 世纪耶路撒冷只是个小山村，"统一王国"是后世文本放大的。
- "修正传统派"（如 Amihai Mazar）：用碳测年主张前 10 世纪确有一个相当规模的早期国家。
多数学者今天接受一个介于两者之间、略偏修正传统的折中。`,
        en: `The Prophet pass mentions "how large and strong David's and Solomon's kingdom was is a famous
debate." Here it is spelled out.

Traditional narrative: David united Israel around 1000 BCE and made Jerusalem the capital; Solomon built
the First Temple around 957 BCE; the kingdom was grand and powerful. **The scholarly debate is not "did
David exist"** (the Tel Dan Stele has led most scholars to accept the dynasty as real) **but how large and
strong the kingdom actually was**:
- "Minimalists" (e.g., Israel Finkelstein): tenth-century Jerusalem was just a small hill village, and the
  "united monarchy" was enlarged by later texts.
- "Revised-traditional" scholars (e.g., Amihai Mazar): use carbon dating to argue a sizable early state did
  exist in the tenth century.
Most scholars today accept a middle position, leaning slightly toward the revised-traditional view.`,
      },
      xiaoweiNote: {
        cn: `中立点要记牢：争的是**规模与强弱**，不是"大卫是否存在"。这正好练 Rule 0 的双层读法——
信仰传统读"辉煌王国"，考古读"证据到底支持多大"，两层并排，不互相否定。`,
        en: `Hold the neutral point: the argument is about **size and strength**, not "whether David existed."
This is great practice for Rule 0's two-layer reading — the faith tradition reads a "glorious kingdom,"
archaeology reads "how much the evidence actually supports," side by side without denying each other.`,
      },
    },

    {
      id: 'abrahamic-through-line',
      termCn: '亚伯拉罕诸教的源头',
      termEn: 'Roots of the Abrahamic Faiths',
      standardRef: ['CA HSS 6.3', 'AP World — world religions'],
      examFrequency: 'mid',
      storyAnchor: { covered: false },
      standaloneText: {
        cn: `被掳者那一遍结尾点了一句"今天全球约一半人口的犹太教/基督教/伊斯兰教都追到这一支"，
这里把这条 through-line 理清楚。

古以色列那个"唯一、超验、无所不在"的一神信仰，是后世三大宗教的共同源头：
- **犹太教（Judaism）**：直接继承这条古以色列一神传统。
- **基督教（Christianity，公元 1 世纪）**：从犹太教中生长出来。
- **伊斯兰教（Islam，公元 7 世纪）**：同样尊亚伯拉罕为信仰先祖。
三教都共尊**亚伯拉罕（Abraham）**为信仰先祖，所以合称"亚伯拉罕诸教（Abrahamic faiths）"。
关键限定词：**同源、各自独立、差异巨大**——别把"同源"误读成"一样"。`,
        en: `The Exile pass ends by noting that "the Judaism, Christianity, and Islam that about half the
world believes in trace back to this one line." Here is that through-line laid out.

Ancient Israel's "one, transcendent, everywhere" monotheism is the shared root of three later world religions:
- **Judaism**: directly inherits this ancient Israelite monotheist tradition.
- **Christianity (1st century CE)**: grew out of Judaism.
- **Islam (7th century CE)**: likewise honors Abraham as a forefather of the faith.
All three honor **Abraham** as a forefather, hence they are jointly called the **Abrahamic faiths**.
Key qualifier: **one source, each independent, greatly different** — don't misread "shared source" as "the same."`,
      },
      xiaoweiNote: {
        cn: `考点关键句：古以色列一神传统 = 亚伯拉罕诸教的根；"同源 ≠ 相同"。
这条 through-line 解释了为什么一个古近东小民族的故事，会影响后世两千年的世界史。`,
        en: `Key exam sentence: ancient Israelite monotheism = the root of the Abrahamic faiths; "shared
source ≠ the same." This through-line explains why one small ancient-Near-Eastern people's story shaped
two thousand years of later world history.`,
      },
    },

    {
      id: 'corridor-geography',
      termCn: '走廊地理（迦南/黎凡特）',
      termEn: 'Corridor Geography (Canaan / Levant)',
      standardRef: ['CA HSS 6.3', 'AP World — geography and empire'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'babylon-conqueror-actor',
        nodeIds: ['ancient-israel-conq-n3', 'ancient-israel-prophet-n2'],
      },
      xiaoweiNote: {
        cn: `这是理解整段历史的"地理底色"。古以色列在地中海东岸一条窄长走廊上——史称
迦南（Canaan）/ 黎凡特（Levant），卡在两大文明之间：南边埃及，东北边美索不达米亚（亚述、巴比伦）。

它是连接非洲与亚洲的唯一陆桥，所有想从一头打到另一头的大军都得踩过去。结果就是：
**它太重要所以总被争夺，又太小所以总被碾压。**"小国夹在大帝国中间"就是它的宿命。

考点关键句：走廊地理 = 古以色列反复被征服、最终被巴比伦掳走的根本地理原因。
（连"靠天吃饭"的干旱农业，也让"神是否赐雨、是否守约"成了日常生死攸关的问题，深印进宗教里。）`,
        en: `This is the "geographic backdrop" for the whole story. Ancient Israel sat on a long, narrow
corridor on the eastern Mediterranean coast — called Canaan / the Levant — wedged between two great
civilizations: Egypt to the south, Mesopotamia (Assyria, Babylon) to the northeast.

It was the only land bridge linking Africa and Asia, so every army marching from one end to the other had
to cross it. The result: **too important, so always fought over; too small, so always crushed.** "A small
state wedged among great empires" was its fate.

Key exam sentence: corridor geography = the root geographic reason ancient Israel was repeatedly conquered
and finally carried off by Babylon. (Even its rain-dependent, arid farming made "does the god send rain,
does the god keep the covenant" a daily life-or-death question, pressed deep into the religion.)`,
      },
    },
  ],

  // ─── 出口：批判性思考（小 U 的 3 道 DBQ 入门题）─────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `一场最彻底的失败（圣殿被烧、举族被掳），反而锻造出历史上最坚固的信仰之一。
这到底说明了什么？

A. 信念能超越处境——再大的帝国能烧庙夺国，却夺不走人心里抓住的意义。
B. 是残酷的处境，筛选并塑造了这种极端坚固的信仰——是苦难造就了它，未必它多超自然。

到底是信念塑造了处境，还是处境塑造了信念？选一边，用故事里至少两个具体细节支持你。`,
      en: `The most utter defeat (the Temple burned, a whole people carried off) forged one of the most
solid faiths in history instead. What does this really show?

A. Conviction can rise above circumstance — however great the empire, it could burn the temple and seize
   the land, but not the meaning held in people's hearts.
B. The cruel circumstance selected and shaped this extremely solid faith — suffering made it; it was not
   necessarily supernatural.

Did conviction shape the circumstance, or did circumstance shape conviction? Pick a side and support it
with at least two specific details from the story.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- A 这边的证据：被掳者一遍遍抄经、"随身带走的圣殿"、先知"神不困在庙里"。
- B 这边的证据：北国以色列同样被掳却散成"失踪的十支派"（同样处境、不同结果，说明信仰内容也起作用）；
  monotheism 是被流亡"逼"出来的（处境在塑造观念）。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not which side
you take.
- Evidence for A: the exiles copying scripture over and over, the "Temple you can carry," the prophet's
  "the god is not trapped in a temple."
- Evidence for B: the northern kingdom of Israel was also exiled yet scattered into the "lost ten tribes"
  (same circumstance, different outcome — so the content of the faith mattered too); monotheism was "forced"
  out by exile (circumstance shaping the idea).
High-scoring move: grant that both sides stand, then explain why you lean one way — that is complexity.`,
    },
    {
      id: 'q2',
      cn: `先知把惨败解释成"神在管教我们——是我们先违了约"。这个解释救了一整个民族，
让它在没有国土的情况下活了千百年。

可这话也等于对一群刚被屠城、被掳走、本就是受害者的人说："错在你们自己。"
它把巴比伦的暴行，悄悄从加害者头上挪了一部分到受害者身上。

一个能救人的解释，会不会同时是一副新的枷锁？说清楚你的判断，并给出理由。`,
      en: `The prophets explained the crushing defeat as "the god is disciplining us — we broke the covenant
first." This explanation saved a whole people and let it live for ages without a land.

But it also amounts to telling a crowd that had just been massacred, carried off, and were victims to begin
with: "the fault is your own." It quietly shifts part of Babylon's atrocity off the perpetrator and onto the
victims.

Can an explanation that saves people also be a new kind of chain? State your judgment clearly and give reasons.`,
      hintCn: `提示：这是 Rule 0 的双层练习，没有"正确"答案，看你能不能两面都讲到。
- "救赎"一面：解释让民族抓得更紧、没散掉；"神还在乎"比"神不要我们了"更能让人活下去。
- "枷锁"一面：把灾难责任挪到受害者身上；一套"任何苦难都是你活该、为你好"的逻辑很危险。
高分写法：不要只骂一边，先承认它确实救了人，再指出它的代价——这才是 AP 要的复杂判断。`,
      hintEn: `Hint: this is a Rule 0 two-layer exercise with no "correct" answer; the point is whether you can
voice both sides.
- The "salvation" side: the explanation made the people hold on tighter and not scatter; "the god still cares"
  lets people live better than "the god no longer wants us."
- The "chain" side: it shifts blame onto victims; a logic that frames "any suffering as you deserved it, for
  your own good" is dangerous.
High-scoring move: don't just attack one side — grant that it truly saved people, then name its cost. That's
the complex judgment AP wants.`,
    },
    {
      id: 'q3',
      cn: `同一个时代，古以色列靠"唯一神 + 立约"，中国靠"天命 + 德行 + 祖先血脉"，
回答同一个终极问题：人在宇宙里如何安身、统治者凭什么有资格统治。

请用至少两个具体点，比较这两套答案的**异**与**同**。
（提示：可比"超越者长什么样""人怎么和它连接""统治者失格了会怎样"。）
注意：Rule 0——不要写"哪个更高级/更原始"，写它们各自的智慧与盲点。`,
      en: `In the same era, ancient Israel rested on "one god + covenant," while China rested on "the Mandate of
Heaven + virtue + ancestral bloodline," both answering the same ultimate question: how does a person find a
place in the cosmos, and what gives a ruler the right to rule?

Using at least two specific points, compare the **differences** and **similarities** of these two answers.
(Hint: you could compare "what the transcendent looks like," "how a person connects to it," "what happens
when a ruler is unfit.")
Note: Rule 0 — do not write "which is more advanced/primitive"; write each one's wisdom and blind spots.`,
      hintCn: `提示：
- 异：以色列的神在世界之外、唯一、不可造像；中国的"天"更像一张连续的大网，和祖先百神并存。
  以色列靠双向的"约"，中国靠"天命+祭祖血脉"。
- 同：两套都把"统治正当性"和"德行/守约"绑在一起——以色列违约受罚，中国失德失天命、王朝可被推翻。
高分写法：异同都要有，且每点都举一个具体例子；结尾用一句 Rule 0 的中立话收口。
（小心别踩雷：商代 Shangdi 的"上帝"≠ 后来翻译基督教那位神的"上帝"。）`,
      hintEn: `Hint:
- Differences: Israel's god is outside the world, singular, image-less; China's "Heaven" is more a continuous
  web coexisting with ancestors and many gods. Israel rests on a two-way "covenant"; China on "Mandate +
  ancestral bloodline."
- Similarities: both tie "legitimacy of rule" to "virtue / keeping faith" — Israel: break the covenant, be
  punished; China: lose virtue, lose the Mandate, and a dynasty can be overthrown.
High-scoring move: cover both differences and similarities, each with a concrete example; close with one
neutral Rule 0 sentence. (Watch the trap: the Shang Shangdi 上帝 ≠ the modern 上帝 later used to translate
the Christian God.)`,
    },
  ],
};

export default notebook;
