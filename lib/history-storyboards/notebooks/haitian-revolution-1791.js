// ─── 同伴笔记本架构 v1 · The Haitian Revolution 1791 ─────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 核心考点卡（喂 mustMemorize + 金筹码考点高亮）
//   3. thinkingQuestions（出口批判性思考）— 开放式 DBQ 入门题，Rule 0 中性
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（grand blanc 种植园主 / Toussaint 孤独调停者 /
//     甘蔗田少年 receiving-end 三条线）
//   - notebook 提供考点闭环（black agency、Saint-Domingue、Code Noir、
//     gens de couleur libres、Bois Caïman、Atlantic Revolutions、Toussaint、
//     黄热病、1804 建国 — 补完 AP World Unit 5 课纲）
//
// 课纲对齐：
//   - AP World History Modern — Unit 5 (1750-1900)：Topic 5.2-5.3 Nationalism and Revolutions
//   - CA / 各州 HS World History — 大西洋革命单元
//
// 事实地基：对账 haitian-revolution-1791.md（Appendix B 词汇 / C 人物 / §7 DBQ / §10 误解 / §11 思考）
//
// schemaVersion: 1 · notebookVersion: haitian-revolution-1791-v1

export var notebook = {
  topicId: 'haitian-revolution-1791',
  topicNameCn: '海地革命 1791',
  topicNameEn: 'The Haitian Revolution 1791',
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
    cn: `今天老师说我们要学 1791 年的海地革命（the Haitian Revolution）。
她说这是 AP World 第五单元「大西洋革命」里必考的一环——
美国 1776 → 法国 1789 → 海地 1791 → 拉美 1810s，一条链子。
但海地这一格特别：它是历史上唯一一场被奴役者自己打赢、并自己建国的革命。

我回家先问我妈，她居然没听说过 Saint-Domingue 这个地方。
老师说这很正常——中国课纲几乎不讲海地，所以这一题家长大多帮不上忙，得靠我们自己。

她给了一张纸，上面写着这些名字：

Toussaint Louverture（卢维杜尔）、Dessalines（德萨林）、
Boukman（布克曼）、Leclerc（勒克莱尔）

还有一串词：Saint-Domingue（圣多曼格）、Code Noir（黑法典）、
gens de couleur libres（自由有色人）、grand blanc（大白人）、
Bois Caïman（凯门森林）、Atlantic Revolutions（大西洋革命）、
black agency（黑人能动性）、yellow fever（黄热病）。

我先记下来，等下读三个故事——一个法国种植园主（perpetrator）、
Toussaint（夹在所有人中间的调停者）、还有甘蔗田里一个点火的少年（receiving-end）——
读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页：「写下『人生而自由平等』的法国人，
本来没打算把这句话给殖民地的被奴役者。是被奴役者自己把它捡起来，逼它兑现。」`,
    en: `Today my teacher said we're learning the 1791 Haitian Revolution.
She said it's a required link in AP World's Unit 5 "Atlantic Revolutions" —
America 1776 → France 1789 → Haiti 1791 → Latin America 1810s, all one chain.
But the Haiti box is special: it's the only revolution in history that the
enslaved won themselves, and then founded their own nation.

When I got home I asked my mom, and she'd never even heard of a place called
Saint-Domingue. Teacher said that's normal — Chinese curricula barely cover Haiti,
so on this topic most parents can't help, and we're on our own.

She gave us a sheet with these names:

Toussaint Louverture, Dessalines,
Boukman, Leclerc

Plus a string of terms: Saint-Domingue, Code Noir,
gens de couleur libres, grand blanc, Bois Caïman,
Atlantic Revolutions, black agency, yellow fever.

Let me write these down. After I read the three stories — a French planter
(the perpetrator), Toussaint (the mediator caught between everyone), and a boy in
the cane fields who lights the first torch (the receiving end) — I'll come back and
check whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "The French who
wrote 'all men are born free and equal' never meant that line for the enslaved in
the colonies. It was the enslaved who picked it up and forced it to come true."`,
    keyTerms: [
      { cn: '圣多曼格（殖民地名，今海地）', en: 'Saint-Domingue' },
      { cn: '黑法典（1685，奴役制度法律框架）', en: 'Code Noir' },
      { cn: '自由有色人（混血、法律上自由的第三方）', en: 'gens de couleur libres' },
      { cn: '大白人（大种植园主）', en: 'grand blanc' },
      { cn: '小白人（白人下层）', en: 'petit blanc' },
      { cn: '凯门森林（1791 起义仪式地点）', en: 'Bois Caïman' },
      { cn: '大西洋革命', en: 'Atlantic Revolutions' },
      { cn: '黑人能动性（DBQ 核心论点）', en: 'black agency' },
      { cn: '黄热病（击垮法军的生物因素）', en: 'yellow fever' },
      { cn: '伏都（融合非洲信仰的本地宗教）', en: 'Vodou' },
      { cn: '海螺号（传信号的海螺）', en: 'lambi' },
      { cn: '海地（独立后复名）', en: 'Haiti / Ayiti' },
    ],
    // mustKnow: true = 必考必拼，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点拼写，不加音频
    keyFigures: [
      {
        nameCn: '杜桑·卢维杜尔',
        nameEn: 'Toussaint Louverture',
        ipa: '/tuˈsæn ˌluːvɛrˈtjʊr/',
        roleCn: '被奴役者出身的自由人，识字会驯马，1770 年代已获自由；十几年里在法、西、英三个帝国间纵横，1801 年颁布废奴自治宪法，最后被拿破仑诱捕、死在法国阿尔卑斯山牢中的孤独调停者',
        roleEn: 'Born enslaved, literate and a horseman, freed in the 1770s; for over a decade he maneuvered among the French, Spanish, and British empires, issued an abolitionist self-rule constitution in 1801, and died in a French Alpine prison after Napoleon lured and seized him — the lonely mediator',
        mustKnow: true,
        audioKey: 'toussaint-louverture',
      },
      {
        nameCn: '让-雅克·德萨林',
        nameEn: 'Jean-Jacques Dessalines',
        ipa: '/ʒɑ̃ ʒɑːk ˌdɛsəˈliːn/',
        roleCn: 'Toussaint 的副手，1804 年 1 月 1 日宣布独立、把殖民地名改回 Haiti / Ayiti 的人，也是 1804 年屠杀剩余法国人的下令者',
        roleEn: "Toussaint's deputy who declared independence on January 1, 1804 and renamed the colony Haiti / Ayiti; also the one who ordered the 1804 massacre of the remaining French",
        mustKnow: true,
        audioKey: 'jean-jacques-dessalines',
      },
      {
        nameCn: '杜蒂·布克曼',
        nameEn: 'Dutty Boukman',
        ipa: '/ˈdʌti ˈbuːkmən/',
        roleCn: 'Vodou 祭司、起义早期领袖，主持 1791 年 8 月 Bois Caïman 仪式立下起义之盟，1791 年 11 月被法军杀死、头颅示众',
        roleEn: 'A Vodou priest and early leader of the uprising who led the August 1791 Bois Caïman ceremony that sealed the oath to revolt; killed by French forces in November 1791, his head displayed in public',
        mustKnow: true,
        audioKey: 'dutty-boukman',
      },
      {
        nameCn: '夏尔·勒克莱尔',
        nameEn: 'Charles Leclerc',
        ipa: '/ʃɑrl ləˈklɛr/',
        roleCn: '拿破仑的妹夫，1802 年率两万多大军远征、暗藏恢复奴隶制的目的，同年 11 月死于黄热病',
        roleEn: "Napoleon's brother-in-law who led the 1802 expedition of over twenty thousand troops with the hidden aim of restoring slavery, and died of yellow fever that November",
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '塞西尔·法蒂曼',
        nameEn: 'Cécile Fatiman',
        ipa: '/seˈsiːl ˈfatɪmɑːn/',
        roleCn: 'Bois Caïman 仪式的女祭司（mambo），与 Boukman 一同主持起义之盟',
        roleEn: 'The priestess (mambo) of the Bois Caïman ceremony who co-led the oath to revolt alongside Boukman',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '文森特·奥热',
        nameEn: 'Vincent Ogé',
        ipa: '/vɛ̃ˈsɑ̃ oˈʒeɪ/',
        roleCn: 'gens de couleur 领袖，1790 年为争平等公民权起事，被处死，矛盾全面激化',
        roleEn: 'A gens de couleur leader who rose up for equal citizenship in 1790 and was executed, sharpening the conflict across the colony',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'black-agency',
      termCn: '黑人能动性',
      termEn: 'Black Agency',
      standardRef: ['AP World — Unit 5 (Revolutions)', 'AP World DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        standaloneText: {
          cn: `这是整道题最高频的 DBQ 角度，老师说阅卷反复奖励这个论点，必须背死。

「黑人能动性（black agency）」= 被奴役者**不是**被动等别人来解放的对象，
而是亲手点火、亲手打、亲手建国的历史**主动推动者**。

我把支撑这个论点的四块证据攒成一串（DBQ 直接能用）：
1. Bois Caïman 仪式——是被奴役者自己立的起义之盟，不是外人安排的。
2. 北部平原起义——几万人自己拿起 machete 和火把烧种植园。
3. Toussaint 1801 年自己写了一部废奴宪法——「曾经的财产」亲手写根本大法。
4. 黄热病战中，原本投法的黑人和有色人军官识破恢复奴役的真相后倒戈。

误解陷阱（§10 第 1 条）：❌「海地是被法国/外人解放的」→
✅ 它是被奴役者**自己**点火、自己打、自己建国的——这正是它在世界史里独一无二的地方。`,
          en: `This is the single highest-frequency DBQ angle. Teacher said graders keep
rewarding this argument, so memorize it cold.

"Black agency" = the enslaved were **not** passive objects waiting to be freed by
others; they were the **active drivers** of history who lit the fire, fought, and
founded the nation themselves.

I stack four pieces of evidence behind this claim (use them straight in a DBQ):
1. The Bois Caïman ceremony — the enslaved swore their own oath to revolt; no outsider arranged it.
2. The northern-plain uprising — tens of thousands took up machetes and torches to burn the plantations.
3. Toussaint's own 1801 abolitionist constitution — the "former property" wrote the fundamental law.
4. In the yellow-fever war, Black and mixed-race officers who had sided with France defected once they saw slavery was being restored.

Misconception trap (§10 #1): ❌ "Haiti was freed by France / outsiders" →
✅ the enslaved lit it, fought it, and founded it **themselves** — exactly what makes
it unique in world history.`,
        },
        xiaoweiNote: {
          cn: `三条线我都读了，但甘蔗田少年那一遍最戳——他拿起火把那一刻，
账本上的「财产」做了一件财产不该做的事：他做了一个**选择**。
那就是 black agency 最具体的样子。
我的口诀：agency = 主语，不是宾语。被奴役者是这句历史的「主语」。`,
          en: `I read all three lenses, but the cane-field boy's hit hardest — the moment
he picks up the torch, the "property" on the ledger does the one thing property isn't
supposed to do: he makes a **choice**. That's the most concrete face of black agency.
My mnemonic: agency = the subject, not the object. The enslaved are the "subject" of
this sentence of history.`,
        },
      },
    },

    {
      id: 'saint-domingue',
      termCn: '圣多曼格（殖民地）',
      termEn: 'Saint-Domingue',
      standardRef: ['AP World — Unit 5', 'CA HSS World History'],
      examFrequency: 'high',
      storyAnchor: {
        standaloneText: {
          cn: `先把舞台名字搞清楚，不然全篇会糊。

**Saint-Domingue（圣多曼格）** = 加勒比海 Hispaniola（伊斯帕尼奥拉岛）西部三分之一，
1697 年起归法国——就是今天的海地。独立后（1804）才被改回原住民 Taíno 语的旧名
**Haiti / Ayiti**（意为「多山之地」），纪念哥伦布之前的原住民。

为什么必背它：它当时是**全世界最赚钱的殖民地**，一个岛贡献了法国对外贸易的一大块——
靠的是北部平原（Plaine du Nord）的糖和咖啡，港口城市叫 Le Cap-Français（简称 Le Cap）。

考点关键句：Saint-Domingue = 殖民地名（奴役+财富）；Haiti = 独立后的名字（自由+建国）。
改名这件事本身就是一个宣言——把欧洲殖民者起的名字扔掉，捡回原住民的名字。`,
          en: `Get the stage's name straight first, or the whole topic blurs.

**Saint-Domingue** = the western third of Hispaniola in the Caribbean, French since
1697 — today's Haiti. Only after independence (1804) was it renamed **Haiti / Ayiti**,
the old name in the Indigenous Taíno language (meaning "land of mountains"), honoring
the people who lived there before Columbus.

Why memorize it: at the time it was the **most profitable colony in the world** — one
island made up a huge slice of France's foreign trade, built on the sugar and coffee
of the northern plain (Plaine du Nord), with its port city Le Cap-Français (Le Cap).

Key exam sentence: Saint-Domingue = the colonial name (slavery + wealth); Haiti = the
name after independence (freedom + nationhood). The renaming is itself a declaration —
throwing out the European colonizers' name and reclaiming the Indigenous one.`,
        },
        xiaoweiNote: {
          cn: `我妈没听过这个名字，就是因为它「Saint-Domingue → Haiti」改过名。
我的记忆锚：同一片土地，两个名字，两种命运——殖民地 vs 自由国家。`,
          en: `My mom hadn't heard the name precisely because it changed from
"Saint-Domingue" to "Haiti." My memory anchor: one piece of land, two names, two
destinies — colony vs. free nation.`,
        },
      },
    },

    {
      id: 'code-noir',
      termCn: '黑法典',
      termEn: 'Code Noir',
      standardRef: ['AP World — Unit 5', 'AP World DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        standaloneText: {
          cn: `**Code Noir（黑法典）** 是 1685 年路易十四颁布的法律，是整套奴役制度的**法律框架**。

它的逻辑（DBQ 爱用）：一边把被奴役者定义为主人的「动产」（biens meubles，
就是可以买卖的财产），一边名义上要求主人提供衣食、不许随意杀害（现实中常被无视）。

我自己读懂的关键——它最阴的地方不是赤裸的残忍，而是用「法律」「秩序」
「甚至一点点保护」，把「把人当消耗品」包装成**正常生意**。
理解了 Code Noir，才理解被奴役者反抗的到底是什么：不只是某个坏主人，
是一整套把人变成账本数字的制度。

考点关键句：Code Noir = 奴役制度的法律外壳（1685），把人变成账本上的财产。
对照后面：1801 Toussaint 宪法和 1804 建国，正是从根上掀翻 Code Noir 这套逻辑。`,
          en: `**Code Noir** is the law issued by Louis XIV in 1685 — the **legal framework**
of the whole system of slavery.

Its logic (DBQs love this): on one hand it defines enslaved people as the owner's
"movable goods" (biens meubles — property that can be bought and sold); on the other it
nominally requires owners to provide food and clothing and not to kill at will (often
ignored in reality).

What I figured out reading it — the most sinister part isn't bare cruelty, it's that
"law," "order," and "even a little protection" were used to package "using humans as
consumables" as **normal business**. Once you understand Code Noir, you understand what
the enslaved were actually rebelling against: not just one bad owner, but a whole system
that turned people into numbers on a ledger.

Key exam sentence: Code Noir = the legal shell of slavery (1685), turning people into
property on a ledger. Contrast with what comes later: Toussaint's 1801 constitution and
the 1804 founding overturn Code Noir's logic at the root.`,
        },
        xiaoweiNote: {
          cn: `种植园主那一遍让我懂了 Code Noir 怎么运作：他「不是个人特别坏」，
是制度让「把人当财产消耗」成了正常生意。这比单纯一个恶人可怕多了。`,
          en: `The planter's lens taught me how Code Noir worked: he "wasn't an unusually
evil man" — the system made "consuming people as property" into normal business. That's
far scarier than just one villain.`,
        },
      },
    },

    {
      id: 'gens-de-couleur-libres',
      termCn: '自由有色人',
      termEn: 'gens de couleur libres',
      standardRef: ['AP World — Unit 5', 'AP World DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        standaloneText: {
          cn: `这是这场革命里最容易被搞错的一群人，必须单列。

**gens de couleur libres（自由有色人）** = 有非洲和欧洲混合血统、**法律上自由**的
第三方阶层。1789 年前后约 2.8-3 万人。关键复杂点：他们有的自己也拥有种植园和奴隶，
卡在白人和被奴役者中间，两边都不把他们当自己人。

误解陷阱（§10 第 5 条）：
❌「自由有色人天然站在被奴役者一边」→
✅ 他们是独立的**第三方**，诉求是「平等公民权」而**不是**「废奴」，
立场随局势反复变化，有人自己也蓄奴。

记住他们的代表：Vincent Ogé（奥热）——1790 年为争平等公民权起事，被处死，
这件事把全岛矛盾全面激化，是 1791 起义的前奏之一。

考点关键句：这场革命有**四个**互相敌对的人群（不是黑白两方）：
grand blanc / petit blanc / gens de couleur libres / 被奴役的大多数。
DBQ 的 stakeholder grid 一定要把这四方都摆出来。`,
          en: `This is the group people most often get wrong in this revolution, so it gets
its own card.

**gens de couleur libres** = a third-party class of mixed African and European
ancestry who were **legally free** — about 28,000-30,000 around 1789. The key complexity:
some owned plantations and enslaved people themselves, stuck between the whites and the
enslaved, claimed by neither side.

Misconception trap (§10 #5):
❌ "the gens de couleur naturally sided with the enslaved" →
✅ they were an independent **third party** whose demand was "equal citizenship," **not**
"abolition"; their stance shifted with events, and some were enslavers themselves.

Remember their representative: Vincent Ogé — rose up for equal citizenship in 1790 and
was executed, which sharpened the conflict across the whole island and was one prelude to
the 1791 uprising.

Key exam sentence: this revolution had **four** mutually hostile groups (not just Black
vs. white): grand blanc / petit blanc / gens de couleur libres / the enslaved majority.
A DBQ stakeholder grid must lay out all four.`,
        },
        xiaoweiNote: {
          cn: `我一开始也以为「不是白人就站被奴役者一边」，错了。
口诀：gens de couleur 要的是「平等公民权」，不是「废奴」——这两个诉求差很远。`,
          en: `At first I also assumed "if they're not white, they side with the enslaved."
Wrong. Mnemonic: the gens de couleur wanted "equal citizenship," not "abolition" — those
two demands are very different.`,
        },
      },
    },

    {
      id: 'grand-blanc',
      termCn: '大白人 / 小白人',
      termEn: 'grand blanc / petit blanc',
      standardRef: ['AP World — Unit 5'],
      examFrequency: 'mid',
      storyAnchor: {
        standaloneText: {
          cn: `白人内部也不是铁板一块，AP 喜欢考你能不能区分这两层。

**grand blanc（大白人）** = 法国大种植园主，靠北部平原全世界最赚钱的糖和咖啡发财，
也靠最残酷的奴役制度维持它。1789 年他们想要的是**自治**（少受巴黎管），
但绝不包括解放奴隶——那等于烧掉自己的财产。

**petit blanc（小白人）** = 白人监工、小店主、水手——比种植园主穷，
却死死攥着「我是白人」这一条优越感。

考点关键句：「人生而自由平等」这句话一传到岛上，**每一群人**都用它要不同的东西——
grand blanc 要自治、gens de couleur 要平等公民权、被奴役者要自由本身。
同一句话，四个方向。这正是 DBQ 要你拆的「同一文本，不同解读」。`,
          en: `The whites were not one solid bloc either, and AP likes testing whether you
can tell these two layers apart.

**grand blanc** = the big French planters who got rich off the most profitable sugar and
coffee in the world on the northern plain, and kept it going with the most brutal system
of slavery. In 1789 what they wanted was **self-rule** (less control from Paris) — but
never freeing the enslaved, which would mean burning their own property.

**petit blanc** = white overseers, small shopkeepers, sailors — poorer than the planters,
yet clinging fiercely to the one privilege of "I am white."

Key exam sentence: the moment "all men are born free and equal" reached the island,
**every group** used it to demand something different — grand blanc wanted self-rule,
gens de couleur wanted equal citizenship, the enslaved wanted freedom itself. One
sentence, four directions. That's exactly the "same text, different readings" a DBQ
asks you to unpack.`,
        },
        xiaoweiNote: {
          cn: `种植园主那一遍就是一个 grand blanc。他到死可能都不理解，
为什么「财产」会站起来——因为在他的世界里，被奴役者从来不算「人」。`,
          en: `The planter's lens is a grand blanc. To his death he probably never understood
why "property" stood up — because in his world, the enslaved were never counted as "people."`,
        },
      },
    },

    {
      id: 'bois-caiman',
      termCn: '凯门森林仪式',
      termEn: 'Bois Caïman Ceremony',
      standardRef: ['AP World — Unit 5'],
      examFrequency: 'mid',
      storyAnchor: {
        standaloneText: {
          cn: `**Bois Caïman（凯门森林）** 是 1791 年 8 月北部一片森林的名字，
革命的**精神起点**就在这里。

1791 年 8 月 14 日夜，祭司 **Dutty Boukman** 和女祭司 **Cécile Fatiman**
在这里主持了一场 **Vodou（伏都）** 仪式——有鼓声、有血、有誓言，立下起义之盟。
几天后（8 月 21-22 日夜），约定的信号来了：有人吹响 **lambi（海螺号）**，
号声一座种植园接一座种植园传过黑夜的北部平原，几万人拿起 machete 和火把。

为什么它重要（接回 black agency）：起义之盟是被奴役者**自己**立的，
用的是他们从非洲带来、在岛上融合成 Vodou 的信仰——这是 black agency 最有力的证据之一。
（注意：仪式确切日期有争议，部分史家定在 8 月 22 日，写答案时可以说「1791 年 8 月」。）

考点关键句：Bois Caïman = 革命的精神起点；lambi 号声 = 起义的信号。`,
          en: `**Bois Caïman** is the name of a forest in the north in August 1791 — the
**spiritual starting point** of the revolution.

On the night of August 14, 1791, the priest **Dutty Boukman** and the priestess **Cécile
Fatiman** led a **Vodou** ceremony there — drums, blood, an oath — sealing the pact to
revolt. A few days later (the night of August 21-22) the agreed signal came: someone
sounded the **lambi** (conch horn), and the call passed plantation by plantation across
the dark northern plain as tens of thousands took up machetes and torches.

Why it matters (ties back to black agency): the oath to revolt was sworn by the enslaved
**themselves**, drawing on the faith they brought from Africa and blended into Vodou on
the island — one of the strongest pieces of evidence for black agency. (Note: the exact
date is disputed; some historians place it on August 22, so in an answer you can write
"August 1791.")

Key exam sentence: Bois Caïman = the spiritual start of the revolution; the lambi call =
the signal for the uprising.`,
        },
        xiaoweiNote: {
          cn: `三个视角都听见了同一声 lambi：少年是吹响它的人，
Toussaint 听成「信号」，种植园主听成黑暗里说不清来源的怪声。同一声号，三种意思。`,
          en: `All three lenses hear the same lambi: the boy is the one who sounds it,
Toussaint hears it as a "signal," and the planter hears it as an eerie sound from the dark
he can't place. One call, three meanings.`,
        },
      },
    },

    {
      id: 'atlantic-revolutions',
      termCn: '大西洋革命',
      termEn: 'Atlantic Revolutions',
      standardRef: ['AP World — Unit 5 (Topic 5.2-5.3)', 'CA HSS World History'],
      examFrequency: 'highest',
      storyAnchor: {
        standaloneText: {
          cn: `这是把海地放进「大局」的框架考点，AP World 几乎一定会考连续体。

**Atlantic Revolutions（大西洋革命）** = 1750-1900 年间，「人权」话语一个接一个
掀翻大西洋世界的一串革命：
**美国 1776 → 法国 1789 → 海地 1791 → 拉美 1810s。**

海地在这条链子里的独特位置（必背）：它是**唯一一场由被奴役者自己发动、并最终建国**的革命。
美国和法国革命的「自由」主要是有产白人男性的自由；海地革命把这句「自由」
从「有产白人男性的自由」撑成了「**所有人**的自由」——它把人权话语逼到了底。

跨 topic 比较钩子（§7）：同一句「人生而自由平等」，
法国本土说出来时根本没打算给殖民地的被奴役者，是被奴役者自己捡起来逼它兑现。
这就是「思想跨大西洋传播」+「被原作者排除的人逼它兑现」的双重故事。

考点关键句：海地革命 = 大西洋革命链条里把「自由」兑现得最彻底的一环。`,
          en: `This is the "big picture" framing card, and AP World almost always tests the
continuum.

**Atlantic Revolutions** = a chain of revolutions between 1750 and 1900 in which the
language of "human rights" toppled the Atlantic world one after another:
**America 1776 → France 1789 → Haiti 1791 → Latin America 1810s.**

Haiti's unique spot in that chain (memorize): it's the **only revolution launched by the
enslaved themselves that ended in founding a nation**. The "liberty" of the American and
French revolutions was mainly the liberty of propertied white men; the Haitian Revolution
stretched that "liberty" from "the liberty of propertied white men" to the liberty of
**everyone** — it pushed the human-rights language all the way to the bottom.

Cross-topic comparison hook (§7): the same line, "all men are born free and equal," was
never meant for the colonies' enslaved when France first spoke it — the enslaved picked it
up and forced it to come true. That's the double story of "ideas spreading across the
Atlantic" + "the people it excluded forcing it to deliver."

Key exam sentence: the Haitian Revolution = the link in the Atlantic-revolutions chain
that cashed out "liberty" most completely.`,
        },
        xiaoweiNote: {
          cn: `老师说一定要会背这条链：1776 → 1789 → 1791 → 1810s。
口诀：美→法→海→拉。海地是中间那一格，却是唯一「从最底层往上打」的。`,
          en: `Teacher said you must memorize the chain: 1776 → 1789 → 1791 → 1810s.
Mnemonic: America → France → Haiti → Latin America. Haiti is the middle box, yet the only
one fought "from the very bottom up."`,
        },
      },
    },

    {
      id: 'yellow-fever-role',
      termCn: '黄热病的作用',
      termEn: "Yellow Fever's Role",
      standardRef: ['AP World — Unit 5', 'AP World DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        standaloneText: {
          cn: `这是 AP 最爱用来考「结构/物质因素」的一条——别只写英雄叙事。

**yellow fever（黄热病）** 是一个生物学事实：本地人和非洲来的人有一定抵抗力，
**新来的欧洲军队没有**。1802 年拿破仑派 Leclerc 率两万多大军来恢复奴隶制，
黄热病成片击倒缺乏抵抗力的法军——连主帅 Leclerc 自己也在 1802 年 11 月病死。

误解陷阱（§10 第 4 条）：
❌「法军是被海地军队正面打垮的」→
✅ 军事抵抗是真的，但**黄热病**击倒欧洲新兵，是法军崩溃的**关键生物学因素之一**
（注意「之一」，别写成唯一原因）。

怎么和 black agency 配合写（高分）：黄热病削弱了法军，**同时**黑人和有色人军官
识破恢复奴役的真相后倒戈、由 Dessalines 统一指挥——是「疾病 + 人的选择」一起赢的，
两者都要写，不能用疾病抹掉被奴役者的能动性。`,
          en: `This is AP's favorite way to test "structural / material factors" — don't write
only the hero narrative.

**Yellow fever** is a biological fact: locals and people from Africa had some resistance;
**newly arrived European armies did not**. In 1802 Napoleon sent Leclerc with over twenty
thousand troops to restore slavery, and yellow fever cut down the unresisting French in
waves — even the commander Leclerc died of it in November 1802.

Misconception trap (§10 #4):
❌ "the French army was beaten head-on by the Haitian army" →
✅ the military resistance was real, but **yellow fever** felling European recruits was
**one of the key biological factors** in the French collapse (note "one of" — don't write
it as the only cause).

How to pair it with black agency (for a high score): yellow fever weakened the French
**and** Black and mixed-race officers defected once they saw slavery was being restored,
united under Dessalines — it was won by "disease + human choice" together; write both, and
don't let disease erase the agency of the enslaved.`,
        },
        xiaoweiNote: {
          cn: `舞台那一节就埋了这个伏笔：这片土地对欧洲人有个「隐形杀手」。
口诀：黄热病是「之一」，不是「唯一」——疾病帮忙，但人才是打赢的主语。`,
          en: `The "stage" section planted this clue: the land had an "invisible killer" for
Europeans. Mnemonic: yellow fever is "one of," not "the only" — disease helped, but people
were the subject who won.`,
        },
      },
    },

    {
      id: 'independence-1804',
      termCn: '1804 独立建国',
      termEn: 'The 1804 Independence',
      standardRef: ['AP World — Unit 5', 'CA HSS World History', 'AP World DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        standaloneText: {
          cn: `这是全篇的落点，也是世界史里的一个「第一」，必背年份和意义。

**1804 年 1 月 1 日**，**Dessalines（德萨林）** 宣布独立，把殖民地名 Saint-Domingue
改回原住民 Taíno 语的旧名 **Haiti / Ayiti**。这是：
- 拉美**第一个**独立国家；
- 美洲**第二个**独立共和国（美国之后）；
- 历史上**第一个由被奴役者建立的国家**——从立国第一天起就彻底废奴。

但 Rule 0 要求两面同体——必须直面血腥的一面（§10 第 6 条）：
独立后 1804 年 2-4 月，Dessalines 下令屠杀岛上剩余的法国白人，约 3000 至 7000 人被杀。
自由的伟大与过程的暴力，**同体**，不美化也不单极否定。

长期代价（§6，别漏）：法国 1825 年逼海地用巨额「赔款」债务换承认，
这笔债压了海地一个多世纪，是它长期贫困的**结构性根源之一**。
误解陷阱（§10 第 7 条）：❌「海地独立后就好了」→ ✅ 独立只是开始，外债与动荡随之而来。

考点关键句：1804 = 第一个由被奴役者建立、从第一天彻底废奴的国家；
代价是 1804 屠杀 + 1825 外债 —— 光明与代价同体。`,
          en: `This is where the whole topic lands, and a world-history "first," so memorize
the year and its meaning.

On **January 1, 1804**, **Dessalines** declared independence and renamed the colony from
Saint-Domingue to the old Indigenous Taíno name **Haiti / Ayiti**. This was:
- the **first** independent nation in Latin America;
- the **second** independent republic in the Americas (after the United States);
- the **first nation in history founded by the enslaved** — abolishing slavery completely
  from its very first day.

But Rule 0 means holding both faces — you must face the bloody side (§10 #6):
between February and April 1804, Dessalines ordered the massacre of the remaining French
whites on the island, with roughly 3,000 to 7,000 killed. The greatness of the freedom and
the violence of the process are **one and the same** — neither whitewashed nor flatly
condemned.

Long-term cost (§6, don't skip): in 1825 France forced Haiti to buy recognition with a huge
"indemnity" debt, which weighed on Haiti for more than a century and is **one of the
structural roots** of its long poverty.
Misconception trap (§10 #7): ❌ "things were fine for Haiti after independence" →
✅ independence was only the beginning; foreign debt and instability followed.

Key exam sentence: 1804 = the first nation founded by the enslaved, fully abolishing
slavery from day one; the cost was the 1804 massacre + the 1825 debt — light and cost,
one and the same.`,
        },
        xiaoweiNote: {
          cn: `改名 Saint-Domingue → Haiti 那一刻我起了鸡皮疙瘩：
被奴役者建国的第一件事，是把殖民者起的名字扔掉，捡回原住民的名字。
但我也提醒自己——同一年还有 1804 的屠杀，这一面也得写，不能只挑亮的讲。`,
          en: `The moment of renaming Saint-Domingue → Haiti gave me chills: the first thing
the enslaved did on founding their nation was throw out the colonizer's name and reclaim the
Indigenous one. But I also remind myself — the same year held the 1804 massacre, and that
side has to be written too; you can't only pick the bright part.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `法国人写下「人生而自由平等」时，并不打算把它给殖民地里的被奴役者。
被奴役者自己把这句话捡起来、逼它兑现——同一句话，被原作者和被压迫者用在了相反的方向。

这说明文字（或一个观念）的力量到底在哪里？是在写它的人手里，还是在读它、用它的人手里？
用海地革命里的具体证据支持你的看法。`,
      en: `When the French wrote "all men are born free and equal," they did not mean it for
the enslaved in the colonies. The enslaved picked the line up and forced it to come true —
the same words, used by their original author and by the oppressed in opposite directions.

Where does the power of words (or of an idea) really lie? In the hands of whoever writes it,
or in the hands of whoever reads and uses it? Support your view with specific evidence from
the Haitian Revolution.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- 「在使用者手里」的证据：被奴役者用《人权宣言》第 1 条起义、Toussaint 1801 年自己写废奴宪法。
- 「在书写者手里」的证据：法国本土的人写它时心里的「人」不包括加勒比的被奴役者。
高分写法：承认两边都有道理，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**,
not which side you pick.
- Evidence for "in the user's hands": the enslaved revolted using Article 1 of the
  Declaration of the Rights of Man; Toussaint wrote his own abolitionist constitution in 1801.
- Evidence for "in the writer's hands": the French who wrote it never counted the Caribbean
  enslaved among "men."
High-scoring move: acknowledge both have a point, then explain why you lean one way — that's
complexity.`,
      conceptsActivated: ['black-agency', 'atlantic-revolutions'],
    },
    {
      id: 'q2',
      cn: `自由是用真实的暴力换来的，而 1804 年的暴力不只落在压迫者身上——
独立后还发生了对剩余法国人的屠杀。

如果通向自由必须付出这样的代价，这个代价是否改变了你看待这场革命的方式？
请用证据说明你的判断，并避免把这场革命说成「纯粹光明」或「纯粹血腥」中的任何一种。`,
      en: `Freedom was bought with real violence, and the violence of 1804 did not fall only on
the oppressors — after independence came a massacre of the remaining French.

If the road to freedom required a cost like this, does that cost change how you see this
revolution? Support your judgment with evidence, and avoid casting the revolution as either
"purely bright" or "purely bloody."`,
      hintCn: `提示：好的 DBQ 答案会**同时持有两件事**，而不是二选一（这正是 §9 史学界争的）。
- 「解放的伟大」一边：第一个由被奴役者建立、从第一天彻底废奴的国家。
- 「过程的暴力」一边：1804 年 2-4 月对剩余法国人的屠杀（约 3000-7000 人）。
不要替历史下最终道德结论（Rule 0）；AP 要的是你能不能把两面都摆在桌上，再谈你的权衡。`,
      hintEn: `Hint: a strong DBQ answer **holds two things at once** rather than choosing one
(this is exactly what historians argue over in §9).
- The "greatness of liberation" side: the first nation founded by the enslaved, fully
  abolishing slavery from day one.
- The "violence of the process" side: the February-April 1804 massacre of the remaining
  French (roughly 3,000-7,000).
Don't hand history a final moral verdict (Rule 0); AP wants you to put both faces on the
table and then discuss your weighing of them.`,
      conceptsActivated: ['independence-1804', 'black-agency'],
    },
    {
      id: 'q3',
      cn: `Toussaint 一生最信法国，想用谈判和一部宪法抓住一个所有人都能活的未来——
跨种族共存、废奴、以劳动重建经济。最后他被法国背叛、死在阿尔卑斯山的牢里。

在一个所有人都在拼命厮杀的时代，做一个「调停者」，是注定的悲剧，还是另一种勇气？
用 Toussaint 的具体选择（1801 宪法、在三个帝国间纵横）支持你的看法。`,
      en: `Toussaint trusted France most of all, and tried to seize a future where everyone
could live — cross-racial coexistence, abolition, an economy rebuilt through labor — through
negotiation and a constitution. In the end France betrayed him and he died in an Alpine
prison.

In an age when everyone was fighting for their lives, was being a "mediator" a doomed
tragedy, or another kind of courage? Support your view with Toussaint's specific choices
(the 1801 constitution, maneuvering among three empires).`,
      hintCn: `提示：先把 Toussaint 的复杂性摆全（§10 第 2 条）——
他不是「一直在田里的奴隶英雄」，他 1770 年代就被解放、识字、甚至一度自己拥有过少数被奴役者。
「调停者」一边：他在法、西、英三方间纵横，想用制度（1801 宪法）锁住所有人都能活的未来。
「悲剧」一边：他对谁都不完全是自己人，最信的帝国背叛了他。
进阶：你身边有没有「想让所有人都满意」反而两头不讨好的处境？那是软弱还是勇气？`,
      hintEn: `Hint: first lay out Toussaint's full complexity (§10 #2) — he was not a "lifelong
field-slave hero"; he was freed in the 1770s, was literate, and even briefly owned a few
enslaved people himself.
The "mediator" side: he maneuvered among the French, Spanish, and British, trying to lock in
a future where everyone could live through institutions (the 1801 constitution).
The "tragedy" side: he was never fully anyone's own, and the empire he trusted most betrayed
him.
Going deeper: have you ever been in a spot where "trying to please everyone" left you
disliked by both sides? Is that weakness or courage?`,
      conceptsActivated: ['independence-1804', 'atlantic-revolutions'],
    },
    {
      id: 'q4',
      cn: `1787 年，费城制宪把被奴役者算成 3/5 写进宪法，以保住蓄奴州；
1804 年，海地由被奴役者自己建国、从第一天彻底废奴。
同一套「自由」话语，在大西洋两岸走向了相反的结局。

为什么同一个观念，在一个地方被用来**保护**奴隶制，在另一个地方被用来**终结**奴隶制？
差别到底在哪里——是话语本身，还是「谁握着笔、谁在谈判桌上」？用两地的具体证据论证。`,
      en: `In 1787, the Philadelphia convention wrote the enslaved into the Constitution as
three-fifths to keep the slave states in; in 1804, the enslaved in Haiti founded their own
nation and abolished slavery completely from day one. The same language of "liberty" reached
opposite outcomes on the two sides of the Atlantic.

Why was the same idea used in one place to **protect** slavery and in another to **end** it?
Where does the difference really lie — in the language itself, or in "who holds the pen and
who sits at the table"? Argue with specific evidence from both places.`,
      hintCn: `提示：这是绝佳的跨 topic 比较（§7 最后一条）。
- 费城 1787：写宪法的是蓄奴的有产白人男性，被奴役者**不在**谈判桌上，结果是 3/5 妥协（保护奴隶制）。
- 海地 1804：建国的是被奴役者**自己**，他们既握笔又在场，结果是彻底废奴。
关键对照：差别也许不在「自由」这个词，而在**谁有资格被算作完整的人、谁握着笔**。
这正好呼应 black agency——能动性决定了同一句话往哪个方向兑现。别下最终道德排名（Rule 0）。`,
      hintEn: `Hint: this is a great cross-topic comparison (§7's last point).
- Philadelphia 1787: the Constitution was written by enslaving, propertied white men; the
  enslaved were **not** at the table, and the result was the Three-Fifths Compromise
  (protecting slavery).
- Haiti 1804: the nation was founded by the enslaved **themselves**, who both held the pen and
  were present, and the result was full abolition.
Key contrast: the difference may lie not in the word "liberty" but in **who counts as a full
person and who holds the pen**. This echoes black agency — agency decides which direction the
same line gets cashed out. Don't issue a final moral ranking (Rule 0).`,
      conceptsActivated: ['black-agency', 'atlantic-revolutions', 'independence-1804'],
    },
  ],
};

export default notebook;
