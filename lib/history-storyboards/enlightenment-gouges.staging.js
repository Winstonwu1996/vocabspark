// Enlightenment T7 — Lens 2: Olympe de Gouges
// lonely-mediator | French playwright + political writer | 1748-1793
//
// Topic: T7 Enlightenment 1689-1789
// Grade 7 Story-First Pedagogy v2
//
// 来源:
//   - Olivier Blanc, Olympe de Gouges (Syros, 2003)
//   - Joan Scott, Only Paradoxes to Offer: French Feminists and the Rights of Man (Harvard, 1996)
//
// 反 Whig: Gouges 不是「超前于她时代的天才」——她是在结构性排斥里找到缝隙的人，缝隙最终关上了
// 12 条铁律 + expectsRealAnswer 默认 false / N11+N12 设为 true
// em-dash 规范: 单段内——最多 3 个

export var meta = {
  lensId: 'gouges-mediator',
  name: 'Olympe de Gouges',
  nameCn: '奥兰普·德·古热',
  role: 'lonely-mediator',
  roleDescription: 'writer caught between gender exclusion and racial exclusion, two fronts simultaneously',
  description: 'French playwright and political writer who declared women\'s rights and died for it, 1748-1793',
  descriptionCn: '法国剧作家和政治写手，为女性权利而声，为此而死，1748-1793',
  topicId: 'enlightenment',
  nodeCount: 12,
};

export var storyboard = [
  {
    id: 'N1',
    nodeId: 'gouges-N1',
    year: 1748,
    location: 'Montauban, southern France',
    title: {
      cn: '屠夫女儿与一个未经证实的传说',
      en: 'A butcher\'s daughter and an unverified legend',
    },
    setting: {
      time: '1748 年 5 月 7 日',
      place: 'Montauban，法国南部',
      cn: '公元 1748 年 5 月 7 日，Montauban，法国南部',
      en: 'May 7, 1748, Montauban, southern France',
    },
    content: {
      cn: `我出生的那天，没有人在意。

父亲 Pierre Gouze 是个屠夫，母亲叫 Anne Olympe Mouisset。我是他们的女儿，名字叫 Marie Gouze。一个南方小城，一个手工业家庭，一个完全没有什么特别之处的出生。

但是，我母亲似乎给我讲过一个故事——或者我自己后来需要相信这个故事。这个故事说：我真正的父亲不是屠夫，而是当地贵族 Marquis Lefranc de Pompignan，一个写诗的人。

这个说法没有任何文件证据。Olivier Blanc 在 2003 年做了详细考证，他的结论是：这个传说无法证实。可能是我母亲曾经告诉过我，可能是我后来自己需要这个贵族血统来支撑我进入那些本来不属于我的房间。

历史无法判断。

但我想你注意一件事：我一出生就活在一个关于自己来历的不确定性里。那个「真正父亲」的故事，是别人关于我的故事，也可能是我关于自己的故事。我不知道边界在哪里。

1748 年的法国，一个南方小城，一个屠夫的女儿。这是能证实的全部。

Blanc（2003）记录了出生日期：1748 年 5 月 7 日，Montauban 教区记录在案的是 Marie Gouze，父亲 Pierre Gouze，屠夫。贵族父亲这个说法，没有进入任何教区记录。

关于你自己的故事，和别人关于你的故事，从来不是同一个。我是在这个问题里出生的。`,
      en: `The day I was born, no one paid particular attention.

My father, Pierre Gouze, was a butcher. My mother was Anne Olympe Mouisset. I was their daughter, given the name Marie Gouze. A small southern city, a working family, a birth that stood out in no way at all.

But my mother seems to have told me a story — or perhaps I later needed to believe it myself. The story said that my real father was not a butcher. He was a local nobleman, the Marquis Lefranc de Pompignan, a man who wrote poetry.

There is no documentary evidence for this claim. Olivier Blanc examined the records carefully in 2003 and found no confirmation. The legend may have come from my mother. Or I may have needed it later — needed that imagined aristocratic lineage as a kind of credential, something to hold in front of the rooms I was trying to enter.

History cannot decide which.

But I want you to notice something: from the moment I was born, I lived inside an uncertainty about my own origins. That story of a "real father" — it was someone else's story about me, and possibly my own story about myself. I cannot locate the boundary between the two.

France in 1748, a small southern city, a butcher's daughter. That is everything the records can confirm.

Blanc (2003) documented the birth date: May 7, 1748, in the Montauban parish register — Marie Gouze, father Pierre Gouze, butcher. The nobleman father appears in no parish document.

The story you tell about yourself, and the story others tell about you, are never the same story. I was born inside that problem.`,
    },
    themeCn: '你关于自己的故事，和别人关于你的故事，从来不是同一个',
    themeEn: 'The story you tell about yourself and the story others tell about you are never the same',
    expectsRealAnswer: false,
    sourcingNote: 'Blanc 2003：出生日期确证，贵族父亲传说考证后 hedge，无文件基础',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N2',
    nodeId: 'gouges-N2',
    year: 1765,
    location: 'Montauban',
    title: {
      cn: '十七岁，坟墓，一种奇怪的自由',
      en: 'Seventeen, a tomb, a strange kind of freedom',
    },
    setting: {
      time: '约 1765 年，17 岁',
      place: 'Montauban',
      cn: '约公元 1765 年，Montauban',
      en: 'c. 1765, Montauban',
    },
    content: {
      cn: `约 1765 年，我 17 岁，嫁给了一个叫 Louis Aubry 的男人。他是帽商。

我生了一个儿子。

Aubry 死了——具体是 1766 年还是 1767 年，Blanc 2003 考证教区记录时发现有空缺，精确年份无法确认。他去世了，这是确认的事。

然后我拒绝再嫁。

三十年后，我写下了这句话：「婚姻是信任和爱的坟墓（le mariage est le tombeau de la confiance et de l'amour）。」这句话是 30 年后写下的，回望的是我 17 岁时的经历。

但我 17 岁那年想了什么？历史没有记录。没有人问我，我也没有地方可以写下来——那时候我识字很少，或者基本不识字，我的内心没有文字留下来。这是 lonely mediator 的第一个孤独：当事情发生的时候，她没有语言来写它；等她有了语言，事情已经是很久以前的事了。

18 世纪的法国，寡妇的法律地位比妻子高得多。我可以签合同，可以独立持有财产，可以在某些场合代表自己。我一成为寡妇，法律意义上就比任何已婚女性更自由。

这是什么样的自由？一个你要先嫁人、先失去丈夫，才能拥有的自由。

我不知道 17 岁的 Marie Gouze 是什么感受。我只知道她拒绝了再婚，然后开始想去 Paris。`,
      en: `Around 1765, when I was seventeen, I married a man named Louis Aubry. He was a hat merchant.

I bore a son.

Aubry died — whether in 1766 or 1767, Blanc's 2003 examination of parish records found a gap, and the exact year cannot be confirmed. He died; that much is certain.

Then I refused to remarry.

Thirty years later, I wrote this: "Marriage is the tomb of trust and love (*le mariage est le tombeau de la confiance et de l'amour*)." That sentence came out of the pen thirty years after the fact, looking back at being seventeen.

But what did seventeen-year-old Marie Gouze think in that actual year? The record holds nothing. No one asked, and I had nowhere to write it down — I could barely read or write at that time, and my inner life left no trace in language. This is the first loneliness of the lonely mediator: when the event happens, she has no words to record it; by the time she has words, the event is long past.

In 18th-century France, a widow's legal standing was considerably higher than a married woman's. She could sign contracts, hold property independently, represent herself in certain legal contexts. The moment I became a widow, I was legally more free than almost any married woman.

What kind of freedom was that? The kind you can only have if you first married, and then lost your husband.

I do not know what seventeen-year-old Marie Gouze felt. I only know she refused to remarry, and began thinking about Paris.`,
    },
    themeCn: '18 世纪，寡妇比妻子自由——这是什么样的自由？',
    themeEn: 'In the 18th century, a widow had more freedom than a wife — what kind of freedom is that?',
    expectsRealAnswer: false,
    sourcingNote: 'Blanc 2003：婚嫁约 1765 年，Aubry 死亡年份不确定（1766 或 1767，教区记录有空缺）；「婚姻是坟墓」引自 Gouges 本人文本，30 年后写就',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N3',
    nodeId: 'gouges-N3',
    year: 1768,
    location: 'Paris',
    title: {
      cn: '她带着一个改过的名字进了这座城市',
      en: 'She entered the city under a different name',
    },
    setting: {
      time: '约 1768 年',
      place: 'Paris',
      cn: '约公元 1768 年，Paris',
      en: 'c. 1768, Paris',
    },
    content: {
      cn: `约 1768 年，我带着儿子到了 Paris。

到了 Paris，我先改了名字。把 Gouze 改成 Gouges——读起来更贵族化。把 Marie 换成 Olympe——来自我母亲的名字 Anne Olympe。我以「寡妇 Aubry」的身份进入社交圈。

寡妇身份让我可以独立签合同，独立出版，独立出现在某些场合而不需要一个男性监护人站在我身边。这是我能利用的缝隙，我用了。

一个新名字，一个借用的来历，一个合法的寡妇身份——这是我进城的通行证。

但语言才是更重要的通行证。

我没有受过正式教育。我的早期手稿语法错误很多，句子有时散漫——不是受过古典训练的作家写的那种法语，是我从口语直接转写的节奏。我有合作者帮我修改语言，但主意和框架是我的。我有剧场感，我会讲故事，我知道一个场景应该怎么走。

这些不需要出身证明。你不能用出生证明来证明你懂得怎么让观众屏住呼吸。

Paris 的戏剧圈不问你父亲是谁——它问你有没有东西可以说，你敢不敢说。

我有。我敢。

这就是我进城的方式：一个改过的名字，一个借用的身份，和一种不需要任何证明的能力。`,
      en: `Around 1768, I arrived in Paris with my son.

The first thing I did in Paris was change my name. I turned Gouze into Gouges — it sounded more aristocratic. I replaced Marie with Olympe — borrowed from my mother's name, Anne Olympe. I entered social circles as "the widow Aubry."

The widow's status was something I could use: I could sign contracts independently, publish independently, appear in certain settings without a male guardian required beside me. That was a crack in the system, and I used it.

A new name, a borrowed origin, a legal widow status — these were my credentials for entering the city.

But language was a more important credential than any of them.

I had no formal education. My early manuscripts were grammatically rough — sentences built from spoken rhythms rather than the trained register of classically educated writers. I had collaborators who smoothed the language, but the ideas and the structure were mine. I had a sense for theater, a sense for story, an instinct for how a scene should move.

None of that required proof of parentage. You cannot demonstrate with a birth certificate that you know how to make an audience hold its breath.

The Paris theater world did not ask who your father was. It asked whether you had something to say and whether you would say it.

I did. I would.

That was how I entered the city: a changed name, a borrowed identity, and a capacity that required no proof at all.`,
    },
    themeCn: '语言能力是唯一不需要出身证明的通行证',
    themeEn: 'The ability to speak is the only credential that requires no proof of birth',
    expectsRealAnswer: false,
    sourcingNote: 'Blanc 2003：Paris 抵达约 1768 年，改名记录，寡妇法律地位；识字情况来自手稿语法不规范的记录',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N4',
    nodeId: 'gouges-N4',
    year: 1780,
    location: 'Paris, Palais-Royal district',
    title: {
      cn: '门口，永远的门口',
      en: 'The doorway, always the doorway',
    },
    setting: {
      time: '1780 年代，约九年',
      place: 'Paris，Palais-Royal 一带',
      cn: '公元 1780 年代，Paris Palais-Royal 周边',
      en: '1780s, Paris, Palais-Royal district',
    },
    content: {
      cn: `我在 Paris 的戏剧圈站稳脚跟用了将近十年。

九年。Palais-Royal 的咖啡馆、书摊、剧院、沙龙——那是那个时代 Paris 最密集的文化地带，也是唯一一个不受警察日常管控的公共广场（Orleans 公爵把这片产业租出去，警察管不着这里）。思想聚集的地方，也是权力的边缘地。

我在那里出没。我认识了记者、剧作家、废奴派人士、将来的革命者。我没有固定的赞助人——这跟同时代大多数作家不同，他们靠贵族资助活着。我靠写作、出版，以及某个时期与富商 Jacques Biétrix de Rozières 保持了一段稳定的同居关系。我拒绝正式再婚，保留了「独立寡妇」的法律身份，因为这让我能够签合同、出版文件。我选择了这段关系，不是被迫的。

我的手稿从这里传出去。它们语法不规范，有人帮我修改，但主意是我的。

Blanc（2003）把这九年描述为「在 Paris 边缘知识圈缓慢积累声誉」。不是在中心，是在中心旁边。够近，近到看清楚里面的人在做什么、说什么。够边缘，边缘到看见那些「在中心」的人把哪些人排除在外。

这就是门口的位置：不是被关在外面，是被放在门口，永远进不了正中间。

在男性主导的艺术圈里，女性边缘化的具体形式是这样的。不是一道明显的锁，是一个持续的重力——把你拉向边缘，让你待在门口，让你刚好够近到看见里面，但没有那把椅子是给你的。`,
      en: `It took me nearly a decade to establish myself in the Paris theater world.

Nine years. The cafés, booksellers, theaters, and salons of the Palais-Royal district — that was the densest cultural zone in Paris at the time, and the only major public space that operated outside normal police jurisdiction. The Duc d'Orléans had rented out the properties, which meant the censorship mechanisms that applied everywhere else didn't reach here. A place where thought gathered. Also a place at the edges of power.

I moved through that space. I met journalists, playwrights, abolitionists, future revolutionaries. I had no fixed patron — unlike most writers of my era, who lived on aristocratic support. I supported myself through writing, publishing, and during one period, a domestic partnership with a wealthy merchant, Jacques Biétrix de Rozières. I refused to formally remarry, keeping my legal identity as an independent widow, because that status was what let me sign contracts and publish in my own name. I chose that arrangement. I wasn't forced into it.

My manuscripts circulated from here. Grammatically rough, polished by collaborators, but the ideas were mine.

Blanc (2003) characterizes those nine years as "a slow accumulation of reputation in Paris's peripheral intellectual circles." Not at the center — beside it. Close enough to observe what the people inside said and did. Marginal enough to see exactly which voices the center had excluded.

That was the position of the doorway: not shut outside, but placed at the threshold, never quite entering the center.

In a male-dominated artistic world, the specific form of women's marginalization looked like this. Not a visible lock — a constant gravitational pull toward the edge, keeping you at the doorway, letting you see just inside, but ensuring that none of the chairs were ever meant for you.`,
    },
    themeCn: '在男性主导的艺术圈里，女性边缘化不是被关在外面，是被放在门口，永远进不了正中间',
    themeEn: 'In a male-dominated artistic world, women were not shut out — they were placed at the threshold, never quite reaching the center',
    expectsRealAnswer: false,
    sourcingNote: 'Blanc 2003：Palais-Royal 活动记录、Biétrix de Rozières 同居关系、寡妇法律身份选择、「边缘知识圈」描述',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N5',
    nodeId: 'gouges-N5',
    year: 1784,
    location: 'Paris, Comédie-Française',
    title: {
      cn: '她为别人写了台词，自己的声音没有人听',
      en: 'She wrote lines for others; her own voice went unheard',
    },
    setting: {
      time: '1784 年，第一次向 Comédie-Française 提交',
      place: 'Paris，法兰西喜剧院',
      cn: '公元 1784 年，Paris，Comédie-Française',
      en: '1784, Paris, the Comédie-Française',
    },
    content: {
      cn: `1784 年，我完成了一部剧本：《奴隶制》（L'Esclavage des Nègres, ou l'Heureux Naufrage，黑人的奴役，或幸运的海难）。

法语戏剧史上，黑人角色通常是什么？是背景色，是异域风情，是用来衬托白人道德的镜子。他们没有自己的情感逻辑，没有属于自己的内心。

我给我剧本里的主要黑人角色写了台词——他们对自由的渴望，他们在奴役中的尊严，他们的情感和推理。不是作为讽喻，而是作为人物。这在 1784 年的法语舞台上是不寻常的。

Joan Scott（1996）分析我的文本时说：我作为一个被性别排斥在 Paris 正式体制之外的女性，对「被系统性排斥」有一种来自切身经验的理解。这种理解让我能够看见远在 Saint-Domingue 的黑奴的处境——不是作为抽象的道德课题，而是作为我熟悉的那种结构。

我把剧本交给了 Comédie-Française。

1784 年，第一次拒绝。书面拒绝理由，Blanc（2003）记录了原始法语：「题材有损观众体验（le sujet nuit à l'agrément du spectateur）。」

不是说剧本写得不好。不是说它有法律问题。是说：奴隶制这个题材会让观众不舒服。

我再提交。1785 年，再拒绝。1787 年，再拒绝。

1789 年大革命改变了政治气候，国民议会开始辩论殖民地与自由的问题，废奴组织 Société des amis des Noirs（黑人之友协会）已经公开活动。这时候 Comédie-Française 才在压力下同意上演。1789 年 12 月，上演了几场，然后撤了。台下有人鼓掌，有人离场，有人抗议。

我为那些角色写的台词，比我自己的声音更早进入了那个剧院。但这件事本身告诉你，结构是怎么工作的。`,
      en: `In 1784, I finished a play: *L'Esclavage des Nègres, ou l'Heureux Naufrage* — "The Slavery of the Blacks, or the Lucky Shipwreck."

In French theatrical history, what were Black characters? Background color, exotic scenery, mirrors held up to reflect white protagonists' moral choices. They had no interior logic of their own, no inner lives.

I gave the main Black characters in my play their own lines — their desire for freedom, their dignity under bondage, their emotional reasoning. Not as allegory. As characters. This was genuinely anomalous in the French-language theater of 1784.

Joan Scott (1996), analyzing my texts, made this observation: as a woman who had been systematically excluded from Paris's formal institutions by virtue of sex, I had a lived understanding of what it meant to be constitutively placed outside the definition of "the human." That understanding gave me access to the situation of enslaved people in Saint-Domingue — not as an abstract moral problem, but as a structure I already knew.

I submitted the play to the Comédie-Française.

1784: first rejection. The written refusal language survives; Blanc (2003) records it: *le sujet nuit à l'agrément du spectateur* — "the subject matter damages the audience's enjoyment."

Not: the play is badly written. Not: there is a legal problem. Only: slavery as a subject makes audiences uncomfortable.

I submitted again. Rejected again in 1785. Again in 1787.

The Revolution changed the political atmosphere. By late 1789, the National Assembly was debating the colonies and liberty; the Société des amis des Noirs (Society of the Friends of the Blacks, founded 1788) was operating openly. Under this pressure, the Comédie-Française finally agreed to stage the play — in December 1789. It ran for a few performances, then was withdrawn. Some people applauded. Some walked out. Some protested.

The lines I wrote for those characters reached that theater before my own voice did. That fact tells you something about how structure works.`,
    },
    themeCn: '她为别人写的台词，比她自己的声音更早进了文学史',
    themeEn: 'The lines she wrote for others reached the stage before her own voice did',
    crossLensHook: 'Toussaint Louverture 在 Saint-Domingue 的种植园里——他有没有听说过这部剧？几乎不可能直接听说。但废奴思想的网络在同时变厚，从多个方向同时供给。',
    expectsRealAnswer: false,
    sourcingNote: 'Blanc 2003：三次书面拒绝记录，1784 年第一次拒绝理由原始法语；Scott 1996：性别排斥与种族排斥的结构联结分析；1789 年 12 月首演记录',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N6',
    nodeId: 'gouges-N6',
    year: 1789,
    location: 'Paris, Palais-Royal café',
    title: {
      cn: '她数了数「homme」出现了多少次',
      en: 'She counted how many times the word "homme" appeared',
    },
    setting: {
      time: '1789 年 8 月 26 日',
      place: 'Paris，Palais-Royal 一带的咖啡馆',
      cn: '公元 1789 年 8 月 26 日，Paris',
      en: 'August 26, 1789, Paris',
    },
    content: {
      cn: `1789 年 8 月 26 日，国民议会通过了《人和公民权利宣言》（Déclaration des droits de l'homme et du citoyen），17 条，开篇：「人生而自由，且在权利上平等（Les hommes naissent et demeurent libres et égaux en droits）。」

我读了这份文件。

我是在哪里读到的？很可能是 Palais-Royal 一带的咖啡馆——一个我可以进去，但在那个年代没有投票权的空间。Palais-Royal 当时已经成为 Paris 政治思想最密集的地方，书摊上贴满了当天的新闻，每个人都在谈论那份文件。

法语里，「homme」这个词有两种意思：「人」（generic human being）和「男人」（male person）。起草这份文件的人——Sieyès、Lafayette、Mirabeau——心里想的「享有这些权利的人」是：有财产的法国男性公民。女性不在这个圈子里。殖民地的奴隶不在这个圈子里。

我读这份文件，我数了「homme」出现的次数。

然后我开始想一件事：如果你用来建立新世界的语言，本身就是把某些人排除在外的工具，那这个新世界从一开始的设计里就有一道墙。这道墙不是用石头建的，是用词语建的。

词语建的墙，要用词语来拆。

Blanc（2003）记录了这个时期她开始起草镜像版本的文件——她把 1789 年的文件拿来，开始在每一条里加入「女性」。这个工作会持续两年，到 1791 年成为《女性和女公民权利宣言》。

那天在咖啡馆里读完文件，我知道我接下来要做什么了。`,
      en: `On August 26, 1789, the National Assembly passed the *Déclaration des droits de l'homme et du citoyen* — the Declaration of the Rights of Man and of the Citizen — seventeen articles, opening: "Men are born and remain free and equal in rights."

I read the document.

Where did I read it? Most likely in one of the cafés around the Palais-Royal — a space I could enter, but where I held no right to vote. The Palais-Royal by then had become the most politically charged district in Paris, booksellers' stalls plastered with the day's news, everyone discussing the document.

In French, the word *homme* carries two meanings: "human being" (generic) and "man" (male). The people who drafted this document — Sieyès, Lafayette, Mirabeau — had a specific rights-holder in mind: propertied French males. Women were outside that circle. Enslaved people in the colonies were outside that circle.

I read the document. I counted how many times *homme* appeared.

Then I started thinking about something: if the language you use to build a new world is itself the tool that excludes certain people, then the new world has a wall built into its design from the beginning. Not a wall made of stone — a wall made of words.

A wall made of words has to be taken apart with words.

Blanc (2003) records that during this period she began drafting a mirror-image document — taking the 1789 text article by article, inserting "woman" throughout. That work would continue for two years, becoming the *Déclaration des droits de la femme et de la citoyenne* in 1791.

That day in the café, after reading to the end, I knew what I was going to do next.`,
    },
    themeCn: '你用来建立新世界的语言，可以同时是把你排在外面的工具',
    themeEn: 'The language used to build a new world can simultaneously be the tool that excludes you from it',
    expectsRealAnswer: false,
    sourcingNote: '1789.8.26《人和公民权利宣言》通过为历史事实；法语「homme」双重含义分析来自 Scott 1996；Palais-Royal 作为阅读地点系合理推断（Blanc 2003 记录她主要活动于此）',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N7',
    nodeId: 'gouges-N7',
    year: 1791,
    location: 'Paris',
    title: {
      cn: '她把文件递给另一个也被排除在外的女人',
      en: 'She handed the document to another woman who was also excluded',
    },
    setting: {
      time: '1791 年秋',
      place: 'Paris',
      cn: '公元 1791 年秋，Paris',
      en: 'Autumn 1791, Paris',
    },
    content: {
      cn: `1791 年，我出版了《女性和女公民权利宣言》（Déclaration des droits de la femme et de la citoyenne）。

我的方法是字对字的镜像模仿：把 1789 年的 17 条逐条拿来，在每一条里加入「女性」。第 1 条原文：「男人生而自由，且在权利上平等」；我的版本：「女人生而自由，且在权利上与男人平等」。

然后是第 10 条——我最清楚自己在写什么的那一条：

「如果女性有权被送上断头台，她就应该同样有权站上讲台。（Si la femme a le droit de monter sur l'échafaud, elle doit avoir également celui de monter à la tribune.）」

大革命的断头台不分性别。如果你承认女人有资格死，你凭什么说她没有资格说话？

我把这份文件献给 Marie-Antoinette——此时软禁中的王后。

很多革命者因此认为我是保皇党。Joan Scott（1996）给出了另一种分析：这个献词是孤立无援者对另一个孤立无援者的符号性联结。Marie-Antoinette 在 1791 年被革命剥夺了政治权力，被公众舆论妖魔化，是一个被「所有人」排除在外的女人。我的《女性宣言》——同样是一份被「所有人」排除在外的文件——把自己递给另一个被同样的「所有人」排除在外的女人。

Scott 说得很清楚：这不是保皇主义。我在别处批评过王室体制。这个献词的逻辑是：我们都被排除了，而这本身就是我要说的问题。

我通过宫廷信件渠道送出文件（Blanc 2003 记录了这条路径）。我知道王后不太可能有力量回应。但我还是写了，还是送了。

lonely mediator 知道自己的声音会消失在空气里，但还是要说。`,
      en: `In 1791, I published the *Déclaration des droits de la femme et de la citoyenne* — the Declaration of the Rights of Woman and of the Female Citizen.

My method was exact mirror-image imitation: I took the seventeen articles of the 1789 document one by one, inserting "woman" throughout. Article 1 in the original: "Men are born free and equal in rights." My version: "Woman is born free and remains equal to man in rights."

Then Article 10 — the one I knew most clearly what I was writing:

"If a woman has the right to mount the scaffold, she must equally have the right to mount the podium. (*Si la femme a le droit de monter sur l'échafaud, elle doit avoir également celui de monter à la tribune.*)"

The Revolution's guillotine did not discriminate by sex. If you already acknowledge that a woman can be eligible for death, on what grounds do you say she is not eligible to speak?

I dedicated the document to Marie-Antoinette — the Queen, then under house arrest.

Many revolutionaries concluded from this that I was a royalist. Joan Scott (1996) offered a different analysis: the dedication was a symbolic gesture from one isolated person to another. In 1791, Marie-Antoinette had been stripped of political power by the Revolution, demonized by public opinion — a woman excluded from "everyone's" rights just as surely as any woman in France. My *Declaration* — itself a document excluded by "everyone" — was being handed to a woman excluded by the same "everyone."

Scott is explicit: this was not royalism. I criticized the royal system elsewhere in my writing. The dedication's logic was: we are both excluded, and that exclusion is precisely what I am writing about.

I sent the document through the court's postal channels (Blanc 2003 documents this). I knew the Queen was unlikely to have the power to respond. But I wrote it. I sent it anyway.

The lonely mediator knows her voice will dissolve in the air — and speaks anyway.`,
    },
    themeCn: 'lonely mediator 知道自己的声音会消失在空气里，但还是要说',
    themeEn: 'The lonely mediator knows her voice will dissolve in the air — and speaks anyway',
    expectsRealAnswer: false,
    sourcingNote: 'Scott 1996：献词政治逻辑分析，p. 30-35；Blanc 2003：宫廷信件渠道记录；第 10 条原文引自 Gouges 1791 年原文',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N8',
    nodeId: 'gouges-N8',
    year: 1792,
    location: 'Paris',
    title: {
      cn: '她批判所有人，所以所有人都觉得她是敌人',
      en: 'She criticized everyone, so everyone considered her an enemy',
    },
    setting: {
      time: '1792-1793 年',
      place: 'Paris',
      cn: '公元 1792-1793 年，Paris',
      en: '1792-1793, Paris',
    },
    content: {
      cn: `1792 年，大革命从「改革君主制」走向「共和」。1793 年 1 月，路易十六即将被处死。

我发表了文章，提出一个主张：法国人民应该通过全民公投来决定国王的命运，而不是由国民公会直接判决。

我不是保皇党。我是共和主义者，是废奴主义者，是女性权利倡导者。我反对的不是共和国，而是没有经过人民授权的审判程序。Joan Scott（1996）在分析这一时期时说：「Gouges 被处死，根本原因是她拒绝接受 Jacobin 的政治权威——她用启蒙的普世理性挑战山岳派，而山岳派把自己的权力建立在同样一套普世理性的名义下。」

那篇文章我知道会带来危险。我还是发表了。

我攻击 Marat——他在煽动对无辜者的仇恨。我攻击 Robespierre——他在把大革命变成新的专制。我同情 Girondins（吉伦特派），那些主张宪法约束权力、反对激进暴力路线的温和共和派。

结果是：激进派觉得我是反动者，因为我为国王辩护程序问题；保皇派觉得我是革命者，因为我支持共和；女性权利支持者觉得我太保守，因为我同情王后；激进革命者觉得我太软弱，因为我反对暴力。

我批判所有人，所以所有人都觉得我是敌人。

这就是 lonely mediator 的孤独：你站在中间，分析所有人，所有人都认为你站在另一边。没有哪个阵营把你当自己人。你发表的文字，没有一段能被任何一方完整接受。`,
      en: `In 1792, the Revolution moved from "reforming the monarchy" toward "republic." In January 1793, Louis XVI was about to be executed.

I published an article arguing that the French people should decide the king's fate through a popular referendum, not by direct vote of the National Convention.

I was not a royalist. I was a republican, an abolitionist, an advocate of women's rights. What I opposed was not the republic — it was a trial process lacking authorization from the people. Joan Scott (1996), analyzing this period, wrote: "Gouges was executed because she refused to accept Jacobin political authority — she used Enlightenment universal reason to challenge the Mountain, while the Mountain built its own power on the same invocation of universal reason."

I knew that article would bring danger. I published it anyway.

I attacked Marat — for inciting hatred against the innocent. I attacked Robespierre — for converting the Revolution into a new despotism. I sympathized with the Girondins, the moderate republicans who favored constitutional constraint on power and opposed the path of violent radicalism.

The result: radical Jacobins considered me a reactionary, because I defended procedural fairness for the king. Royalists considered me a revolutionary, because I supported the republic. Women's rights supporters found me too conservative, because I showed sympathy for the Queen. Violent revolutionaries found me too weak, because I opposed bloodshed.

I criticized everyone, so everyone considered me an enemy.

That is the loneliness of the lonely mediator: you stand in the middle, analyze everyone, and everyone concludes you are standing on the opposite side. No faction claims you as one of their own. Nothing you publish can be fully accepted by any of them.`,
    },
    themeCn: 'lonely mediator 的孤独在于：她批判所有人，所以所有人都觉得她是敌人',
    themeEn: 'The lonely mediator\'s loneliness: she criticized everyone, so everyone considered her an enemy',
    expectsRealAnswer: false,
    sourcingNote: 'Scott 1996：pp. 30-35，Gouges 政治立场分析；Blanc 2003：1789-1793 年 pamphlet 写作记录；Girondin 人脉接触记录',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N9',
    nodeId: 'gouges-N9',
    year: 1793,
    location: 'Paris',
    title: {
      cn: '最后那个下午，还是同样的语气',
      en: 'That last afternoon, still the same tone',
    },
    setting: {
      time: '1793 年 7 月，被捕前夕',
      place: 'Paris',
      cn: '公元 1793 年 7 月，Paris',
      en: 'July 1793, Paris',
    },
    content: {
      cn: `1793 年 7 月，Robespierre 领导的 Jacobin 山岳派彻底清洗吉伦特派。我的政治网络开始瓦解。我认识的 Girondin 人脉——那些主张宪政、反对暴力的人——一个接一个消失。

Blanc（2003）在 p. 180 记录了这一时期：她被捕前的几天里，她还在继续写政治 pamphlet 批评 Jacobin 政府，还在用同样的语气，同样的逻辑。

我知道危险在哪里。我不是不知道。

但我没有别的工具。我只有语言，只有那支笔，只有那种把道理说清楚的能力。那是我从 Montauban 的屠夫家里带出来的唯一东西，那是我在 Paris 九年积累起来的唯一资本。

你在只有一把锤子的时候，不管面对什么，你都只能用锤子。

最后那个下午，还是同样的语气。我写完一篇 pamphlet，批评 Jacobin 政府的审判程序，批评他们打着「人民意志」的名义做的事——这套批评我已经说了很多年，我还是要说。

然后我被捕了。罪名是「保皇党」和「联邦主义者」——在 1793 年的 Jacobin 恐怖统治下，这些指控足以致命。

她到死都在用那把武器——不是因为她不知道它无效，而是因为她没有别的武器。`,
      en: `In July 1793, the Jacobin Mountain led by Robespierre completed its purge of the Girondins. My political network began to collapse. The Girondin figures I knew — those who had argued for constitutionalism, who had opposed revolutionary violence — were disappearing one by one.

Blanc (2003), on page 180, records this period: in the days before her arrest, she was still writing political pamphlets criticizing the Jacobin government, still using the same tone, the same logic.

I knew where the danger was. I was not unaware.

But I had no other tool. Only language, only that pen, only the ability to make an argument clearly. That was the one thing I had carried out of the butcher's house in Montauban. That was the only capital I had accumulated in nine years in Paris.

When you have only a hammer, no matter what you face, the hammer is what you use.

That last afternoon, still the same tone. I finished a pamphlet criticizing the Jacobin government's trial procedures, criticizing what they were doing in the name of "the will of the people" — a critique I had been making for years. I made it again.

Then I was arrested. The charge: "royalist" and "federalist" — under the Jacobin Terror of 1793, these accusations were enough to kill.

She went on using the only weapon she had until the end — not because she didn't know it might not save her, but because she had no other weapon to use.`,
    },
    themeCn: '她到死都在用那把武器——不是因为她不知道它无效，而是因为她没有别的武器',
    themeEn: 'She used the only weapon she had until the end — not because she thought it would save her, but because she had no other',
    expectsRealAnswer: false,
    sourcingNote: 'Blanc 2003：p. 180，被捕前仍在写 pamphlet 批评 Jacobin；Scott 1996：pp. 30-35，政治被杀真实原因分析',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N10',
    nodeId: 'gouges-N10',
    year: 1793,
    location: 'Paris, Place de la Révolution',
    title: {
      cn: '第十条在这里变成了现实',
      en: 'Article Ten became reality here',
    },
    setting: {
      time: '1793 年 11 月 3 日',
      place: 'Paris，革命广场（今 Place de la Concorde）',
      cn: '公元 1793 年 11 月 3 日，Paris，Place de la Révolution',
      en: 'November 3, 1793, Paris, Place de la Révolution (today\'s Place de la Concorde)',
    },
    content: {
      cn: `1793 年 11 月 3 日，我走上断头台。45 岁。

第 10 条：「如果女性有权被送上断头台，她就应该同样有权站上讲台。」

这句话我在 1791 年写下的时候，我知道它的逻辑是完整的。我不知道它会以这种方式完成。

有一个关于「最后遗言」的说法流传很广，据说我在断头台前说了一句话，就是第 10 条的那句话。关于这个，必须做 careful framing：Blanc（2003）在 p. 198 明确 hedge：这个「最后遗言」的来源是当时的 pamphlet 文学和共和派报纸的报道，这类文献有后世建构的可能性。她是否在死前真的说了这句话，还是这句话是事后把她的文字作品归纳在她的死亡时刻，无法从原始档案确证。

但第 10 条的文字逻辑来自她本人是铁证——那是她 1791 年出版的文件，文字在案。

Joan Scott（1996）p. 33 说：「Gouges 的死变成了她预言的实现——不是因为革命者设计了这种讽刺，而是因为她的文字结构本身已经包含了这种可能性。」

还有一件事需要说清楚：她不是「因为要求女性权利被杀」。她是因为政治立场被杀——反 Jacobin，支持吉伦特派，为国王辩护全民公投程序。但她死的方式（断头台），与她自己写下的第 10 条对应，创造了历史上最具讽刺意味的自我证明。

这不是她选择的结局。这是她的逻辑从一开始就包含的一种可能性，被历史以这种方式完成了。`,
      en: `On November 3, 1793, I walked to the guillotine. I was 45.

Article 10: "If a woman has the right to mount the scaffold, she must equally have the right to mount the podium."

I wrote that sentence in 1791 knowing its logic was complete. I did not know it would be completed this way.

There is a widely circulated account of a "last statement" — that at the guillotine I spoke the exact words of Article 10. About this, careful framing is required: Blanc (2003), on page 198, explicitly hedges: the supposed last words come from contemporary pamphlet literature and republican newspaper reports — sources that carry the possibility of later construction. Whether she actually spoke that sentence at the moment of her death, or whether the sentence was retrospectively attached to that moment from her published writing, cannot be confirmed from original archives.

But that Article 10 language came from her own pen is established fact — she published it in the 1791 document; the text is on the record.

Joan Scott (1996), page 33: "Gouges's death became the fulfillment of her own prophecy — not because the revolutionaries designed that irony, but because the structure of her writing had already contained that possibility."

One more thing needs to be said clearly: she was not killed for demanding women's rights. She was killed for her political positions — anti-Jacobin, pro-Girondin, advocacy for a popular referendum on the king's fate. But the manner of her death (guillotine), mapped against the text of her own Article 10, created the most ironically self-confirming moment in Enlightenment history.

This was not the ending she chose. It was a possibility her own logic had contained from the beginning — and history completed it this way.`,
    },
    themeCn: '她完成了她自己的逻辑——不是因为她选择了这个结局，而是因为她的逻辑从一开始就包含了这种可能性',
    themeEn: 'She completed her own logic — not because she chose this ending, but because the logic had always contained this possibility',
    expectsRealAnswer: false,
    sourcingNote: 'Scott 1996：p. 33，死亡与预言结构分析；Blanc 2003：p. 198，「最后遗言」来源 hedge；第 10 条引自 Gouges 1791 年原文，为铁证',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N11',
    nodeId: 'gouges-N11',
    year: 1793,
    location: 'Paris & Saint-Domingue',
    title: {
      cn: '同一种语言，两种结果，两个互不相识的人',
      en: 'The same language, two outcomes, two people who never knew each other',
    },
    setting: {
      time: '1793 年 11 月 3 日 vs 1793 年 8 月',
      place: 'Paris / Saint-Domingue',
      cn: '公元 1793 年，Paris 断头台 vs Saint-Domingue',
      en: '1793, Paris guillotine vs. Saint-Domingue',
    },
    content: {
      cn: `她死的那天是 1793 年 11 月 3 日，Paris。

大西洋另一边，1793 年 8 月，Toussaint Louverture 宣布带着他的军队离开西班牙阵营，投向法国革命政府——因为法国在 1793 年 8 月签发了废奴令，Toussaint 相信这是真实的政策，不是虚词。

两个人，同一年，同一套启蒙语言，完全不同的结果。

她用启蒙语言的逻辑——普世理性，人人平等——写了一份宣言，要求这套逻辑也适用于女性。她死于那套逻辑的执行者手里。

他用同一套启蒙语言——自由，人的权利——来给他在 Saint-Domingue 的军事行动建立框架，来对抗那些说「自由」的人里不打算让他自由的人。他在那一年活了下来。

她没有听说过他。他也没有听说过她——或者几乎不可能直接听说。他们用的是同样的词汇库，但他们在不同的地方，用不同的方式，面对不同的结构性排斥。

启蒙语言是工具。这一点他们共同证明了。

但谁用它，对谁用，在什么处境下用，结果可以是完全不同的两件事。她的工具在 Paris 被转向了她自己。他的工具在 Saint-Domingue 打开了一个缺口。

同一把工具，两种命运。

你怎么看这件事？启蒙的「普世理性」——当它碰到真实的结构性权力时，谁能用它，谁不能？`,
      en: `She died on November 3, 1793, in Paris.

On the other side of the Atlantic, in August 1793, Toussaint Louverture declared that he was leading his army out of the Spanish camp to join the French revolutionary government — because France had issued an abolition decree in August 1793, and Toussaint judged it to be real policy, not empty words.

Two people, the same year, the same Enlightenment language, completely different outcomes.

She used Enlightenment logic — universal reason, equality for all — to write a declaration demanding that this logic apply to women as well. She was killed by the hands of the very people who claimed to be executing that logic.

He used the same Enlightenment language — liberty, the rights of man — to frame his military campaign in Saint-Domingue, to confront the people who said "freedom" while not intending to extend it to him. He survived that year.

She had not heard of him. He had not heard of her — or almost certainly not directly. They drew from the same vocabulary, but they were in different places, using language in different ways, facing different forms of structural exclusion.

Enlightenment language is a tool. Both of them demonstrated that.

But who uses it, against whom, and under what circumstances — the outcomes can be completely different things. Her tool was turned against her in Paris. His tool forced open a crack in Saint-Domingue.

Same tool, two fates.

What do you make of this? When Enlightenment "universal reason" encounters real structural power — who can use it, and who cannot?`,
    },
    themeCn: '启蒙语言是工具，但谁用它，对谁用，结果完全不同',
    themeEn: 'Enlightenment language is a tool, but who uses it, against whom, produces completely different results',
    crossLensHook: 'Toussaint Louverture lens：1793 年 8 月 Toussaint 投向法国废奴令；同年 11 月 Gouges 死于 Paris。他们从未相识，但他们的生命弧线在 1793 年的启蒙矛盾里同时发生。',
    expectsRealAnswer: true,
    sourcingNote: 'Scott 1996：跨 lens 分析框架；Blanc 2003：Gouges 死亡日期；Dubois 2004：Toussaint 1793 年 8 月转投法国废奴令',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N12',
    nodeId: 'gouges-N12',
    year: 1793,
    location: 'Paris → 20th century rediscovery',
    title: {
      cn: '活着时不属于任何一边，死后被所有人认领',
      en: 'No one claimed her while she lived; everyone claimed her after she died',
    },
    setting: {
      time: '1793 → 20 世纪',
      place: 'Paris / 历史',
      cn: '公元 1793 年 → 20 世纪，历史的漫长时间',
      en: '1793 to the 20th century',
    },
    content: {
      cn: `她死后，《女性和女公民权利宣言》消失了将近 200 年。

没有进入任何政治议程。没有引发任何议会辩论。大革命继续，Napoleon 来了，王政复辟来了，第二帝国来了，第三共和国来了——这份文件在这一切里面都是沉默的。

Joan Scott（1996）追踪了这份文件的命运：「《女性宣言》在 1791 年几乎完全被忽略——被大革命主流男性政治圈忽略，没有引发辩论，没有进入国民议会的任何议程。这份文件直到 20 世纪才被重发现，成为 feminist 运动的历史经典。」

20 世纪的 feminist 运动重新发现了她。

她被「重新发现」这件事本身，Scott 的分析说，就是对 18 世纪制度排斥的证明。一个文件被忽略了 200 年，不是因为它写得不好，而是因为制度从一开始就没有设计一个接收这种声音的入口。

现在她被认领了。各种方向的认领。feminist 历史学家认领她是先驱。法国政府把她的名字放进了教科书。有人把她的画像做成海报。有人引用她的第 10 条来讨论今天的问题。

但有一种读法我想在这里说出来——反 Whig 的读法：

她不是「超前于她时代的天才」。这个说法让我们觉得时代进步了，问题解决了，她只是生早了。更准确的说法是：同样的结构性排斥在今天有不同的形式。她的第 10 条还没有过期。

还有一个跨 Topic 的对比值得想一想：拜占庭 Topic 的 Theodora，她用她的声音保住了现存秩序，让 Justinian 没有逃跑，让帝国的权力得以延续。Gouges 用她的声音挑战新建立的秩序，挑战了声称自己代表「人民和理性」的权力。同一种工具——公开的语言——两种方向，两种命运。

她死了两百多年，第 10 条还在被引用。

你觉得，她赢了还是输了？`,
      en: `After her death, the *Déclaration des droits de la femme et de la citoyenne* disappeared for nearly 200 years.

It entered no political agenda. It triggered no parliamentary debate. The Revolution continued, Napoleon came, the Restoration came, the Second Empire came, the Third Republic came — through all of it, the document was silent.

Joan Scott (1996) traces the document's fate: "The *Declaration of the Rights of Woman* was almost entirely ignored in 1791 — overlooked by the Revolution's male political mainstream, generating no parliamentary debate, entering no National Assembly agenda. The document was only 'rediscovered' in the 20th century, when it became a canonical text of feminist history."

The 20th-century feminist movement found her again.

That act of "rediscovery" itself, Scott's analysis argues, is proof of the 18th-century institutional exclusion. A document ignored for 200 years — not because it was badly written, but because the institution had never built a mechanism to receive that kind of voice.

Now she is claimed. Claimed from multiple directions. Feminist historians claim her as a pioneer. The French government put her name in textbooks. Her portrait became a poster. People cite her Article 10 to discuss questions that are still open today.

But there is one way of reading this that I want to name here — the anti-Whig reading:

She was not "a genius ahead of her time." That framing makes us feel that time has progressed, the problem has been solved, and she simply arrived too early. A more accurate framing: the same structural exclusions exist today in different forms. Her Article 10 has not expired.

One more cross-topic comparison is worth sitting with: Theodora, from the Byzantine Topic — she used her voice to preserve the existing order, to keep Justinian from fleeing, to sustain imperial power. Gouges used her voice to challenge a newly built order, to confront the power that claimed to represent "the people and reason." Same tool — public language — two directions, two fates.

She has been dead for more than two hundred years. Article 10 is still being cited.

Do you think she won, or lost?`,
    },
    themeCn: 'lonely mediator 的命运：活着时不属于任何一边，死后被所有人认领',
    themeEn: 'The lonely mediator\'s fate: no one claimed her while she lived; everyone claimed her after she died',
    crossTopicHook: 'Byzantine Topic: Theodora 用声音保住了现存秩序；Gouges 用声音挑战新建立的秩序——同一工具，两种方向，两种命运。',
    expectsRealAnswer: true,
    sourcingNote: 'Scott 1996：文件消失与 20 世纪重发现分析，反 Whig 框架；Blanc 2003：生平总结',
    nodeType: 'lonely-mediator',
  },
];
