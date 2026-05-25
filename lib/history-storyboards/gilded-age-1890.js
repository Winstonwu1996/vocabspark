// ─── Gilded Age 1870-1900 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 镀金时代与劳工 · The Gilded Age — Robber Barons & Labor 1870-1900
// HSS-8.12 · APUSH Period 6 (工业巨头 + 劳工运动 + Social Darwinism)
//
// 3 lens 设计 (per TOPIC_ROADMAP_G6_G12.md A8 + AUTHORING_PIPELINE 第 8/12 条):
//   - andrew-carnegie               (perpetrator-actor) — Andrew Carnegie 1835-1919 钢铁大王 + 慈善家 / 写《财富的福音》(1889) 同时 1892 Homestead 镇压罢工
//   - samuel-gompers                (lonely-mediator)   — Samuel Gompers 1850-1924 犹太移民雪茄工 / AFL 创始人 (1886) / 「务实工会」排斥激进派
//   - homestead-striker-receiving-end (receiving-end)   — Homestead 罢工被 Pinkerton 私兵射杀的钢厂工人 (composite, 基于 1892.7.6 Homestead 流血冲突)
//
// 跨 lens micro-detail (N6 anchor):
//   「适者生存 / survival of the fittest」一句话两个方向 —
//   - Carnegie lens N6: 用 Social Darwinism (Spencer/Sumner 一派术语) 把财富集中说成自然法则 → 慈善是强者的责任
//   - Gompers lens N6: 同一套「适者生存」逻辑被工厂主用来拒绝工会 → 工人凭组织起来对抗「自然」
//   - Homestead striker lens N6: 工人在子弹底下，「适者」是握枪的那一方 — 同一句话在他这里就是私兵的步枪
//
// 跨 Topic 锚:
//   - Carnegie Social Darwinism (Spencer/Sumner) → scientific-revolution (科学被权力挪用，Newton→Spencer 适者生存误用)
//   - Gompers 犹太移民工人 → black-death-1347 (Devorah 犹太离散史) + 移民工人内部种族分层
//   - Homestead Pinkerton 私兵镇压 → 资本/国家对工人的暴力 (Whiskey Rebellion 母题)
//
// defaultLens = 'homestead-striker-receiving-end' (受影响者优先 pattern: 无名工人 composite + 被进步凯歌排除的一方 + 跨 lens「适者生存」对位)
//
// STRUCTURE SPEC:
//   - 11 nodes per lens (multi-faction)
//   - 220-380 CN chars per node; ≤2 anchor nodes per lens may reach 550 (N6 cross-lens + N10/N11 synthesis)
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true; all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// HARD: US American terms only (镀金时代/托拉斯/trust/工会/Social Darwinism/Homestead/Pinkerton); NEVER 玉玺/翰林/宰相/朕…
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Andrew Carnegie (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var carnegieLens = {
  id: 'andrew-carnegie',
  name: 'Andrew Carnegie',
  nameCn: '安德鲁·卡内基',
  role: 'perpetrator-actor',
  perspectiveTag: 'steel-king-philanthropist',
  icon: '🏭',
  description: {
    cn: '苏格兰穷人家的孩子，1835 年生，13 岁随家人坐船到美国，第一份活是在棉纺厂当童工，每周挣 1 美元 2 角。后来他造起全美国最大的钢铁帝国，成了世上数一数二的富人。他相信一句话：会赚钱的人有责任把钱花在公众身上。他一辈子捐建了 2500 多座图书馆。同一个他，1892 年为了打垮自己工厂的罢工，请来一支私人武装，结果工人倒在血泊里。这一遍让你从一个慈善家兼镇压者的内部，看财富与苦难怎么从同一双手里长出来。',
    en: 'A poor Scottish boy, born 1835, who came to America by ship at age thirteen. His first job was as a child worker in a cotton mill, earning a dollar and twenty cents a week. Later he built the largest steel empire in America and became one of the richest men alive. He believed one thing: a man who knows how to make money has a duty to spend it on the public. In his lifetime he funded more than 2,500 libraries. The same man, in 1892, to crush a strike at his own works, hired a private armed force, and workers fell in their own blood. This pass lets you watch, from inside a philanthropist who was also an enforcer, how wealth and suffering grow out of the same pair of hands.',
  },
  storyboard: [
    {
      id: 'carn-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我这辈子捐建了 2500 多座图书馆。从美国的小镇，到我出生的苏格兰，再到世界各地——只要你认字，你就能免费走进去，借走任何一本书。\n\n我相信这是我能给穷人最好的东西。我自己就是穷孩子出身，是书把我从棉纺厂的童工，变成了今天的钢铁大王。\n\n可就在 1892 年那个夏天，我自己钢厂的工人罢工。为了打垮他们，我这边请来一支私人武装。冲突里，工人倒在了血泊里。\n\n我是 Andrew Carnegie（安德鲁·卡内基）。同一个我，一只手在给穷人造图书馆，另一只手在镇压自己工厂里的穷人。\n\n这一遍，你坐进我这个位置。你要看的不是一个好人，也不是一个坏人——是一个慈善与剥削同时从他身上长出来的人。',
        en: 'In my life I funded more than 2,500 libraries. From small towns in America, to the Scotland where I was born, to places all over the world. As long as you can read, you may walk in for free and borrow any book.\n\nI believed this was the best thing I could give the poor. I was a poor boy myself, and it was books that turned me from a child worker in a cotton mill into the steel king I am today.\n\nYet in the summer of 1892, the workers at my own steel mill went on strike. To crush them, my side brought in a private armed force. In the clash, workers fell in their own blood.\n\nI am Andrew Carnegie. The same man: one hand building libraries for the poor, the other hand crushing the poor inside his own factory.\n\nThis pass puts you in my seat. What you watch is not a good man, nor a bad man, but a man from whom charity and exploitation grow at the same time.',
      },
      deliverGoal: 'N1 hook — 2500 座图书馆 (穷孩子靠书翻身) + 1892 夏自己钢厂罢工请私人武装镇压工人倒血泊 + Carnegie 自我介绍 (一手造图书馆一手镇压穷人) + 这一遍视角设定 (慈善与剥削同体)',
      engagementHook: '同一双手，一只在给穷人造图书馆，另一只在镇压自己工厂里的穷人。你信「一个人可以同时是大善人和大恶人」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'carn-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是怎么从穷孩子爬上来的，你才懂我后来为什么那样想。\n\n1835 年我生在苏格兰一个叫 Dunfermline 的纺织小镇，父亲是手工织布的。机器织布机一来，我父亲的活就没了。我们家穷到揭不开锅。1848 年，我 13 岁，全家坐船去美国碰运气，落脚在 Pittsburgh（匹兹堡）附近。\n\n我的第一份活，是在棉纺厂当童工，每周挣 1 美元 2 角。后来我当电报员、铁路职员，一步一步往上。\n\n我看准了一样东西：钢。这个国家要修铁路、架桥、盖高楼，都得用钢。1870 年代我建起钢厂，用最新的炼钢法，把成本压到最低，把对手一个个挤垮。\n\n到 1890 年代，我的钢铁帝国是全美国最大的。一个 13 岁来美国的穷童工，成了世上最有钱的人之一。\n\n这条路给了我一个信念：在美国，只要够拼、够聪明，谁都能从底层爬到顶。',
        en: 'First let me tell you how I climbed up from a poor boy, so you understand how I later came to think the way I did.\n\nIn 1835 I was born in a weaving town in Scotland called Dunfermline; my father was a hand-loom weaver. When the power looms arrived, my father\'s work vanished. We were poor to the point of going hungry. In 1848, when I was thirteen, the whole family sailed to America to try our luck and settled near Pittsburgh.\n\nMy first job was as a child worker in a cotton mill, earning a dollar and twenty cents a week. Then I became a telegraph operator, a railroad clerk, climbing one step at a time.\n\nI saw one thing clearly: steel. This country needed steel to build railroads, bridges, and tall buildings. In the 1870s I built steel mills, used the newest method of making steel, drove costs to the lowest, and crushed my rivals one by one.\n\nBy the 1890s my steel empire was the largest in America. A poor child worker who came to America at thirteen had become one of the richest men alive.\n\nThat road gave me a belief: in America, anyone with enough drive and brains can climb from the bottom to the top.',
      },
      deliverGoal: 'N2 setup — Carnegie 出身 (1835 Dunfermline 织工家/机器织布机抢父亲活/1848 13 岁全家坐船去美国匹兹堡) + 第一份活棉纺厂童工每周 1.2 美元 + 电报员铁路工往上 + 1870s 建钢厂压成本挤垮对手 + 1890s 全美最大钢铁帝国 + 信念「在美国够拼够聪明谁都能从底层爬到顶」',
      engagementHook: '一个 13 岁来美国的穷童工，爬成了世上最有钱的人之一。这让我相信「谁都能从底层爬到顶」——你觉得这话，对每个穷孩子都成立吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'carn-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '钱多到一定程度，人会开始想一个问题：这么多钱，到底该怎么花？\n\n1889 年，我写了一篇文章，后来很有名，叫《财富的福音》（The Gospel of Wealth）。我在里面说了我一辈子的信条：\n\n富人不该把钱传给子孙挥霍，也不该死后捐出去拉倒。富人有责任，在活着的时候，亲手把多余的财富，用回到公众身上——办图书馆、办大学、办免费的公共设施，帮那些「肯自助的人」自助。\n\n但请你听清楚我话里的一个前提：我帮的是「肯自助的人」。我不主张直接发钱给穷人——我认为那只会养懒汉。我要做的是「造梯子」，让有本事的穷人自己爬上来，就像我当年那样。\n\n这套想法听起来很美：富人当好心的管家，替社会保管财富，再明智地花出去。\n\n可你先记住一个问题，我们一会儿要回来算这笔账：这些用来造图书馆的钱，最初是从哪里来的？',
        en: 'When a man has money enough, he begins to ask a question: how, exactly, should all this money be spent?\n\nIn 1889 I wrote an essay that later became famous, called The Gospel of Wealth. In it I set down the creed of my life:\n\nThe rich should not leave their money for their children to squander, nor merely give it away after death. The rich have a duty, while still alive, to return their surplus wealth to the public with their own hands: libraries, universities, free public works, helping those "who are willing to help themselves."\n\nBut hear clearly one condition in my words: I help those willing to help themselves. I did not believe in handing money straight to the poor. I thought that would only breed idlers. What I meant to do was build ladders, so that the able poor could climb up on their own, as I once did.\n\nThis idea sounds beautiful: the rich man as a kindly steward, holding wealth for society and spending it wisely.\n\nBut hold one question in mind, for we will come back to settle this account: the money used to build those libraries, where did it first come from?',
      },
      deliverGoal: 'N3 setup — 1889《The Gospel of Wealth》信条 (富人不传子孙不死后捐/活着亲手把多余财富用回公众办图书馆大学) + 前提「帮肯自助的人不直接发钱怕养懒汉」+ 富人当好心管家保管财富 + 埋伏笔「造图书馆的钱最初从哪来」',
      engagementHook: '我主张富人有责任亲手把钱花回公众，但只帮「肯自助的人」，不直接发钱怕养懒汉。「造梯子让人自己爬」和「直接给钱」，你觉得哪个才是真帮穷人？',
      expectsRealAnswer: false,
    },
    {
      id: 'carn-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你是全美国最大的钢铁帝国的主人。你的钢厂里，几千个工人每天在 1500 度的高炉边上干 12 小时，热得能把人烤晕，事故能把人的胳膊腿绞掉。\n\n你给的工钱，比同行算大方的。可你的成本能压到全行业最低，靠的是什么？靠把工时拉满、把人力榨到极限、靠工人没有讨价还价的本钱。\n\n你心里很清楚一件事，但你不太愿意细想：你拿去造图书馆、显得那么慷慨的那笔钱，正是从这些高炉边的工人身上，一分一分省出来的。\n\n你给世界造图书馆的善名，和你在车间里压低工人成本的狠手，是同一笔账的两头。\n\n这一刻你得问自己：如果你的慷慨，是建立在让另一群人更苦的基础上——那你到底是在做善事，还是在用善事，给自己的狠心买一张漂亮的封面？',
        en: 'Now you are me.\n\nYou are the master of the largest steel empire in America. In your mills, thousands of workers stand twelve hours a day beside furnaces at 1,500 degrees, hot enough to make a man faint, with accidents that can tear off an arm or a leg.\n\nThe wages you pay are, by the standards of the trade, generous. Yet you drive your costs to the lowest in the whole industry. How? By stretching the hours to the limit, by squeezing labor to its edge, by leaving the workers no bargaining chips.\n\nYou know one thing clearly, though you would rather not dwell on it: the very money you spend on libraries, that makes you look so generous, is saved penny by penny off these men beside the furnaces.\n\nThe good name you earn building libraries for the world, and the hard hand with which you press down labor costs in the workshop, are two ends of the same account.\n\nHere you must ask yourself: if your generosity is built on making another group of people suffer more, are you really doing good, or are you using good deeds to buy a pretty cover for your own hard heart?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 钢厂几千工人 1500 度高炉 12 小时事故绞掉胳膊腿 + 成本全行业最低靠拉满工时榨人力 + 造图书馆的慷慨钱正是从高炉工人省出来 + 善名与压工人成本同一笔账两头 + 自我拷问: 慷慨建立在让另一群人更苦上算善事还是给狠心买漂亮封面',
      engagementHook: '你拿去造图书馆的钱，正是从高炉边的工人身上一分一分省出来的。如果慷慨是建在另一群人的苦上——那是真行善，还是给狠心买一张漂亮封面？',
      expectsRealAnswer: false,
    },
    {
      id: 'carn-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1892 年，我钢铁帝国里最大的一座厂——Homestead 钢厂——出事了。\n\n这座厂在匹兹堡边上，几千工人。当时工人有自己的组织，跟厂方签合同，约定工钱。1892 年那份合同要到期了，我这边想趁机把工钱压下去，最好把那个组织彻底赶出工厂。\n\n那个夏天，我人在苏格兰，远在大洋彼岸。我把厂里的全权交给了我的厂长 Henry Frick（亨利·弗里克）——他是出了名的硬手，专门对付工人。\n\n我给他的指示很清楚：这座厂，合同到期后必须变成「没有工人组织」的厂。怎么做到，你看着办。\n\n我隔着一个大西洋，没有亲眼看见接下来发生的事。可指令是我下的，账要算在我头上。\n\n（厂里的工人那边经历了什么，你换到流血那一天站在厂门口的人那一遍，会亲眼看见。）',
        en: 'In 1892, the largest works in my steel empire, the Homestead mill, blew up.\n\nThis mill stood just outside Pittsburgh, with thousands of workers. The workers had their own organization then, which signed contracts with the company and fixed the wages. That 1892 contract was about to expire, and my side wanted to use the moment to push wages down, and best of all to drive that organization out of the mill entirely.\n\nThat summer I was in Scotland, far across the ocean. I handed full authority over the mill to my plant manager, Henry Frick, a famously hard man who specialized in handling labor.\n\nMy instructions to him were clear: when the contract expires, this mill must become one with "no workers\' organization." How you do it is up to you.\n\nWith an ocean between us, I did not see with my own eyes what happened next. But the order was mine. The account falls on my head.\n\n(What the workers in the mill went through, you will see for yourself when you switch to the pass of the one standing at the mill gate on the day of blood.)',
      },
      deliverGoal: 'N5 story — 1892 Homestead 钢厂 (匹兹堡边几千工人/工人有组织签合同约工钱) + 合同到期 Carnegie 想压工钱赶走工人组织 + 那夏 Carnegie 在苏格兰把全权交厂长 Henry Frick (硬手) + 指示「合同到期后必须变没有工人组织的厂怎么做你看着办」+ 隔大西洋没亲眼看见但指令是他下的账算他头上 + 桥到 striker lens',
      engagementHook: '我远在苏格兰，把对付工人的全权交给了硬手厂长，只说「必须把工人组织赶出去，怎么做你看着办」。下命令的人没亲手做，这笔账还该算在他头上吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'carn-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我凭什么觉得，压垮工人、把财富集中到我这种人手里，是天经地义的？\n\n那个年代，有一套很流行的说法，给我们这些富人撑腰。它把生物界「适者生存」的道理，搬到人类社会上来：社会就像一场竞争，强者爬到顶、弱者沉到底，是自然规律，不该去硬扭。富人之所以富，是因为他们更能干、更适应；穷人之所以穷，是他们竞争输了。\n\n这套说法的鼓吹者里，有个英国人 Spencer（斯宾塞），还有个美国学者 Sumner（萨姆纳）。我跟 Spencer 私交不错。在我看来，这套道理简直是为我量身定做的：我的成功是「适者」的胜利，我的财富集中是自然在挑选最能花钱的人。\n\n但这套「适者生存」的说法，是一把双刃刀——同一句话，工人那边也能捡起来用。我用它证明「我该富」；几年后你会看到，工人用它的反面证明「我们得抱团，因为单打独斗的弱者注定被吃掉」。\n\n同一句「适者生存」——我用它替财富集中辩护；站在高炉边、站在私兵步枪前的人，用它看清自己是被「天择」掉的那一方。',
        en: 'On what ground did I feel that crushing workers and concentrating wealth into the hands of men like me was simply the way things ought to be?\n\nIn that era there was a popular idea that propped up us rich men. It took the rule of "survival of the fittest" from the world of living creatures and carried it over into human society: society is a contest, the strong climb to the top and the weak sink to the bottom, and this is a law of nature that should not be forced out of shape. The rich are rich because they are abler, fitter; the poor are poor because they lost the contest.\n\nAmong those who preached this idea were an Englishman, Spencer, and an American scholar, Sumner. Spencer and I were on good personal terms. To me, this doctrine seemed tailor-made: my success was the victory of the "fit," and my concentration of wealth was nature selecting the man best able to spend it.\n\nBut "survival of the fittest" was a double-edged blade. The same line, the workers could pick up too. I used it to prove "I deserve to be rich"; a few years on you will see workers use its other edge to prove "we must band together, because the lone weak man is doomed to be eaten."\n\nThe same line, "survival of the fittest." I used it to defend the concentration of wealth; the man beside the furnace, the man before the private rifle, used it to see clearly that he was the one nature had "selected out."',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Social Darwinism (适者生存搬到人类社会/强者爬顶弱者沉底是自然规律/富因能干穷因竞争输) + 鼓吹者 Spencer + Sumner (sourcingNote 一派术语 + Carnegie 跟 Spencer 私交) + Carnegie 用它证明「我该富」+ 跨 lens 对位「适者生存」双刃刀 (工人用反面证明得抱团/striker 看清自己是被天择掉的一方) → scientific-revolution 跨 Topic 锚',
      engagementHook: '同一句「适者生存」——我用它证明「我该富」，高炉边的工人用它看清自己是被「淘汰」掉的那一方。一句话怎么会同时替强者和弱者说话？',
      expectsRealAnswer: false,
    },
    {
      id: 'carn-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: 'Homestead 那场冲突，结果很惨。\n\n我的厂长 Frick，在合同到期前就把工人锁在厂门外，自己请来一支私人武装公司——Pinkerton（平克顿）。这是一家专门替资本家对付工人的私人保安公司，说白了，是有枪的私兵。\n\n1892 年 7 月 6 日，约 300 个 Pinkerton 私兵坐着船，沿河悄悄运到 Homestead 厂门口，想强行进厂。工人们守在岸上。两边对峙，开了枪。\n\n打了大半天。等烟散了，工人这边死了 7 个，Pinkerton 那边死了 3 个，伤了一大片。\n\n这件事在全国炸开了。报纸骂声一片。一边是我刚出版的《财富的福音》，讲富人要怎么仁慈地回报社会；另一边是我的厂门口，工人被私兵的子弹打死。\n\n我远在苏格兰，公开说我对 Frick 的强硬不知情、不赞成。可这是我的厂、我的工人、我下的「赶走工人组织」的命令。我撇得清吗？',
        en: 'The clash at Homestead ended in horror.\n\nMy manager Frick, before the contract even expired, locked the workers out of the mill and hired a private armed company, the Pinkertons. This was a private security firm that specialized in handling labor for the rich, which is to say, private soldiers with guns.\n\nOn 6 July 1892, about 300 Pinkerton men came quietly up the river by boat to the gate of the Homestead mill, meaning to force their way in. The workers held the bank. The two sides faced off, and shots were fired.\n\nThe fighting went on for most of a day. When the smoke cleared, 7 workers were dead on one side, 3 Pinkertons on the other, and many wounded.\n\nThe affair exploded across the nation. The newspapers were one chorus of outrage. On one side, my freshly published Gospel of Wealth, on how the rich should mercifully give back to society; on the other, the gate of my own mill, where workers were shot dead by private guns.\n\nFar away in Scotland, I said in public that I had not known of, and did not approve, Frick\'s hard line. But it was my mill, my workers, and mine the order to "drive the workers\' organization out." Can I really wash my hands of it?',
      },
      deliverGoal: 'N7 story — Frick 合同到期前锁工人在门外 + 请 Pinkerton 私人武装 (专门替资本家对付工人的私兵) + 1892.7.6 约 300 Pinkerton 坐船沿河到厂门口强行进厂 + 工人守岸开枪 + 大半天后工人死 7 Pinkerton 死 3 一大片伤 + 全国炸开报纸骂声 + 对比《财富的福音》仁慈 vs 厂门口工人被私兵打死 + Carnegie 公开说不知情不赞成但是他的厂他的命令撇不清',
      engagementHook: '一边是我刚出版的《财富的福音》讲富人要仁慈回报社会，另一边是我厂门口工人被私兵子弹打死。我公开说「我不知情」——你信吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'carn-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: 'Homestead 之后，我继续当我的慈善家。\n\n罢工被彻底打垮了。工人的组织被赶出 Homestead，往后很多年，钢厂里再没有能跟厂方讨价还价的工人组织。工钱压下去了，工时还是那么长。\n\n而我，照样在全世界造图书馆，照样捐大学、捐研究所、捐音乐厅。1901 年我把整个钢铁帝国卖掉，拿到一笔天文数字的钱，然后用余生几乎全部捐了出去——我捐掉了我财富的九成。\n\n你看到这里，可能会困惑：一个肯把九成财富捐出去的人，怎么会是同一个在厂门口让工人流血的人？\n\n这正是我这个人最让人想不通的地方。在我自己看来，这两件事一点都不矛盾：我用《财富的福音》那套逻辑，把高炉边榨出来的钱，「明智地」还给了社会。我真心相信，我做的是大善事。\n\n这就是最难的地方——施暴的人，未必觉得自己在施暴。他可能觉得自己正在做这个时代最大的好事。',
        en: 'After Homestead, I went on being my philanthropist self.\n\nThe strike was utterly crushed. The workers\' organization was driven out of Homestead, and for many years after, there was no workers\' organization in the steel mills that could bargain with the company. Wages were pushed down; the hours stayed as long as ever.\n\nAnd I went on building libraries all over the world, went on giving to universities, research institutes, concert halls. In 1901 I sold the whole steel empire for an astronomical sum, and then gave away nearly all of it over the rest of my life. I gave away ninety percent of my fortune.\n\nReading this, you may be puzzled: how can a man willing to give away ninety percent of his fortune be the same man who let workers bleed at the mill gate?\n\nThis is exactly what people find hardest to understand about me. In my own eyes, the two things did not contradict each other at all. By the logic of The Gospel of Wealth, I returned the money squeezed beside the furnaces "wisely" to society. I truly believed I was doing a great good.\n\nAnd that is the hardest part: the man who does harm need not feel he is doing harm. He may feel he is doing the greatest good of his age.',
      },
      deliverGoal: 'N8 story — 罢工彻底打垮工人组织被赶出 Homestead 多年没能讨价还价的组织工钱压下工时还长 + Carnegie 照样造图书馆捐大学研究所音乐厅 + 1901 卖掉钢铁帝国天文数字余生捐九成财富 + 困惑「肯捐九成的人怎么是同一个让工人流血的人」+ Carnegie 自认两件事不矛盾 (用《财富的福音》逻辑把榨来的钱明智还社会真信在做大善事) + 「施暴的人未必觉得自己在施暴他可能觉得在做时代最大的好事」',
      engagementHook: '一个肯捐掉九成财富的人，和一个在厂门口让工人流血的人，是同一个我——而我真心觉得自己在做大善事。最可怕的是不是：作恶的人，往往不觉得自己在作恶？',
      expectsRealAnswer: false,
    },
    {
      id: 'carn-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1919 年死了。可我这种人留下的难题，到今天还在。\n\n我和同代那批巨头，把整个行业的钢、石油、铁路攥在极少数人手里，富可敌国。财富像水一样往上流，越来越集中。\n\n我活着的时候，已经有人受不了了。1890 年，国会通过了一部法律，专门用来拆分像我们这样大到能左右整个市场的巨头——这是政府第一次伸手，想管一管财富集中。Homestead 之后，工人组织起来对抗资本的运动，也越烧越旺。\n\n这股「财富该不该如此集中、政府该不该出手管」的辩论，从我那个年代起，一直吵到今天。今天美国人争论亿万富翁该交多少税、大公司该不该被拆分、贫富差距是不是太大了——这些问题的根，就埋在我们这一代人手里。\n\n而我们这代人留下的、最刺眼的一个矛盾，是这个：富人靠一套「适者生存」的逻辑，既能替自己积累的财富辩护（这套科学语言怎么被权力挪用，你跑过科学革命那段历史会认得），又能转头用慈善，给这套积累买一身体面的外衣。',
        en: 'I died in 1919. But the problem men like me left behind is still here today.\n\nI and the handful of magnates of my generation gripped a whole industry\'s steel, oil, and railroads in very few hands, rich enough to rival nations. Wealth flowed upward like water, ever more concentrated.\n\nEven in my lifetime, some could bear it no longer. In 1890 Congress passed a law meant to break up giants like us, grown large enough to bend a whole market. This was the first time government reached out to try to manage the concentration of wealth. After Homestead, the movement of workers organizing against capital burned hotter and hotter.\n\nThis debate, over whether wealth should be allowed to concentrate so, and whether government should step in to manage it, has run from my age all the way to this day. Americans today argue over how much tax billionaires should pay, whether great companies should be broken up, whether the gap between rich and poor has grown too wide. The roots of these questions are buried in the hands of my generation.\n\nAnd the sharpest contradiction my generation left is this: the rich man uses a logic of "survival of the fittest" both to defend the wealth he has piled up (how that scientific language was bent by power, you will recognize if you have run the scientific-revolution topic), and then turns around to use charity to dress that pile in a respectable coat.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Carnegie 1919 死 + 同代巨头把钢石油铁路攥极少数人手富可敌国财富往上流集中 + 1890 国会法律拆分大到左右市场的巨头 (政府第一次伸手管财富集中) + Homestead 后工人对抗资本运动越烧越旺 + 「财富该不该集中政府该不该管」辩论从那年代吵到今天 (亿万富翁交税/大公司拆分/贫富差距) + 最刺眼矛盾「适者生存逻辑既辩护积累又用慈善买体面外衣」→ scientific-revolution 跨 Topic 锚 (科学语言被权力挪用)',
      engagementHook: '今天美国人争论亿万富翁该交多少税、贫富差距是不是太大——这些问题的根，就埋在我们这代人手里。一百多年了还没吵明白，你觉得这是为什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'carn-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是了不起的慈善家。我一个穷童工，凭本事建起钢铁帝国，又把九成财富捐了出去，造了 2500 多座图书馆，让无数穷孩子能像我当年一样靠书翻身。我没把钱传给子孙挥霍，我「明智地」还给了社会。这是富人能做到的最高境界。\n\n另一种说法：我是把剥削漂白成慈善的人。我造图书馆的每一块钱，都是从高炉边的工人身上榨出来的。1892 年我下令赶走工人组织，私兵的子弹打死了我自己的工人。我用一套「适者生存」的逻辑，先替我的财富集中辩护，再用慈善给它买一身体面外衣。我的善名，盖在工人的血上。\n\n这两边不是「功大于过」还是「过大于功」。是同一套逻辑的两面——同一份《财富的福音》，同一双手。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a great philanthropist. A poor child worker, I built a steel empire by my own ability, then gave away ninety percent of my fortune, built more than 2,500 libraries, and let countless poor children rise on books as I once did. I did not leave the money for my children to squander; I returned it "wisely" to society. This is the highest a rich man can reach.\n\nThe other view: I was a man who bleached exploitation into charity. Every dollar I spent on libraries was squeezed from the workers beside the furnaces. In 1892 I gave the order to drive out the workers\' organization, and private rifles shot dead my own workers. I used a logic of "survival of the fittest" first to defend my concentration of wealth, then used charity to buy it a respectable coat. My good name was laid over the workers\' blood.\n\nThese are not "the credit outweighs the fault" or "the fault outweighs the credit." They are two faces of one logic, the same Gospel of Wealth, the same pair of hands.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (了不起的慈善家/穷童工建钢铁帝国捐九成 2500 图书馆让穷孩子靠书翻身/明智还社会富人最高境界) / 另一种说法 (把剥削漂白成慈善/每块钱从高炉工人榨出/1892 下令赶工人组织私兵打死自己工人/适者生存逻辑辩护财富+慈善买体面外衣/善名盖在工人血上) / 同一套逻辑两面同一份《财富的福音》同一双手 / 想 30 秒',
      engagementHook: '了不起的慈善家，和把剥削漂白成慈善的人——是同一双手，同一份《财富的福音》。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'carn-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人？\n\n一个穷童工爬成钢铁大王，捐出九成财富造了 2500 座图书馆，又在自己厂门口让工人倒在血泊里。慈善和剥削，不是他先后做的两件事，是同时从他一双手里长出来的。把它们放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有「一个人做的好事」和「这好事背后谁付了代价」差很远的地方——某个被夸上天的捐赠、某次漂亮的善举、某个「回馈社会」的大人物，背后是谁在默默承担？\n\n那时候，你会只看见台前的善名，还是会像那些守在厂门口的工人一样，去追问一句：这份慷慨，最初是从谁身上省出来的？',
        en: 'Having walked my whole life, how would you judge a man like this?\n\nA poor child worker who climbed to steel king, gave away ninety percent of his fortune to build 2,500 libraries, and let workers fall in their own blood at the gate of his own mill. Charity and exploitation were not two things he did one after another; they grew at the same time from one pair of hands. Put them on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there somewhere "the good a person does" and "who paid the price behind that good" are far apart, a donation praised to the skies, a beautiful good deed, a great figure "giving back to society," with someone quietly bearing the cost behind it?\n\nWhen that happens, will you see only the good name in the spotlight, or will you do as the workers at the mill gate did, and ask one question: this generosity, whom was it first saved off of?',
      },
      deliverGoal: 'N11 close — 评价 (穷童工爬成钢铁大王捐九成造 2500 图书馆 vs 厂门口让工人倒血泊/慈善剥削同时从一双手长出同一天平) + transfer「今天你身边好事 vs 谁付代价差很远的地方 (被夸的捐赠/漂亮善举/回馈社会的大人物背后谁承担)」+ 你只看台前善名还是像守厂门的工人追问这份慷慨从谁身上省出来',
      engagementHook: '一边是捐 2500 座图书馆的善名，一边是厂门口工人的血，长在同一双手上。你会怎么评价这样一个人？今天你身边那个「被夸上天的善举」，你会去追问一句「代价是谁付的」吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Samuel Gompers (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var gompersLens = {
  id: 'samuel-gompers',
  name: 'Samuel Gompers',
  nameCn: '塞缪尔·龚帕斯',
  role: 'lonely-mediator',
  perspectiveTag: 'pragmatic-labor-leader',
  icon: '🚬',
  description: {
    cn: '1850 年生在伦敦东区一个穷犹太家庭，10 岁就当上卷雪茄的学徒。13 岁全家移民美国，落脚纽约下东区，他一边卷雪茄一边在工人组织里学说话、学谈判。后来他创立了全美最大的工人联合组织，当了快 40 年的头。他走一条「务实」的路：不谈推翻整个制度，只为工人争实实在在的工钱和工时。代价是，他把激进派、把很多没技术的移民和女工，挡在了门外。这一遍让你从一个夹在资本与激进之间的领袖位置，看「务实地为一部分人争取」到底救了谁、又丢下了谁。',
    en: 'Born in 1850 in the East End of London to a poor Jewish family, an apprentice cigar roller by the age of ten. At thirteen the family emigrated to America and settled on New York\'s Lower East Side, where he rolled cigars by day and learned to speak and to bargain in the workers\' organizations. Later he founded the largest federation of workers\' organizations in America and led it for nearly forty years. He walked a "practical" road: not to overthrow the whole system, only to win real wages and hours for workers. The price was that he shut the radicals, and many unskilled immigrants and women workers, out the door. This pass puts you in the seat of a leader caught between capital and the radicals, watching whom "practically fighting for some" actually saved, and whom it left behind.',
  },
  storyboard: [
    {
      id: 'gomp-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我手指被烟叶染得发黄，是卷了一辈子雪茄留下的。\n\n我 10 岁就开始卷雪茄。那活计有个好处：手在动，嘴是空的。所以我们卷烟工有个传统——干活时，一个人念书念报，其他人听。我就是在烟味里、在别人的念书声里，学会了思考工人该怎么活、该怎么争。\n\n我是 Samuel Gompers（塞缪尔·龚帕斯）。后来我建起全美最大的工人联合组织，当了快 40 年的头。\n\n但我要先告诉你一件不那么光彩的事：我这个为工人争权利的领袖，亲手把很多工人挡在了门外——没技术的、刚下船的移民、女工。\n\n这一遍，你坐进我这个位置。你会发现，「为工人争取」这句话听起来天经地义，可一旦你只有有限的本钱，你就必须做一个残酷的选择：为「所有工人」争，还是只为「争得动的那部分工人」争？',
        en: 'My fingers are stained yellow from tobacco, left there by a lifetime of rolling cigars.\n\nI began rolling cigars at ten. The work has one advantage: the hands move, the mouth is free. So we cigar workers had a tradition: while we worked, one man read aloud from books and newspapers, and the rest listened. It was there, in the smell of tobacco, amid another man\'s reading voice, that I learned to think about how workers should live and how they should fight.\n\nI am Samuel Gompers. Later I built the largest federation of workers\' organizations in America and led it for nearly forty years.\n\nBut first I must tell you something less than glorious: I, a leader fighting for workers\' rights, shut many workers out the door with my own hands, the unskilled, the immigrants fresh off the boat, the women.\n\nThis pass puts you in my seat. You will find that "fighting for workers" sounds beyond question, yet once your resources are limited, you must make a cruel choice: fight for "all workers," or only for "the part of the workers you can actually win for"?',
      },
      deliverGoal: 'N1 hook — 手指烟叶染黄卷一辈子雪茄 + 10 岁卷雪茄 (手动嘴空/卷烟工传统一人念书报其他人听/在烟味里学思考工人怎么争) + Gompers 自我介绍 (建全美最大工人联合组织当头快 40 年) + 不光彩: 为工人争权利的领袖亲手把没技术移民女工挡门外 + 这一遍视角 (本钱有限的残酷选择: 为所有工人争还是只为争得动的那部分争)',
      engagementHook: '我一个为工人争权利的领袖，却亲手把很多工人挡在了门外。当你本钱有限，是为「所有人」争，还是只为「争得动的那部分人」争？',
      expectsRealAnswer: false,
    },
    {
      id: 'gomp-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我从哪来，你才懂我后来为什么那么「现实」。\n\n我 1850 年生在伦敦东区一个叫 Spitalfields 的穷街区，家里是犹太人，祖上从荷兰来。家里太穷，我 10 岁就辍学去卷雪茄，给家里挣口饭。\n\n1863 年我 13 岁，全家漂洋过海移民美国，落脚纽约下东区——那是一片挤满了刚下船的移民的贫民区，犹太人、爱尔兰人、意大利人，一家几口挤一间屋。\n\n我接着卷雪茄。在卷烟的工坊里，我加入了卷烟工的工人组织。在那里，我亲眼看见：单个工人在老板面前什么都不是，老板想压工钱、想加班、想开除你，你毫无办法。可一旦工人抱成团，集体跟老板谈，情况就不一样了。\n\n犹太移民的离散、刚下船的艰难——这些底色我太熟了（你跑过黑死病那段历史，会认得犹太人四处漂泊、在哪都是外人的处境）。正因为我自己就是从最底层、最外人的位置爬上来的，我后来才那么死死抓住一个念头：工人要活下去，得有组织，得有讨价还价的本钱。',
        en: 'First, where I came from, so you understand why I later became so "practical."\n\nI was born in 1850 in a poor quarter of London\'s East End called Spitalfields, to a Jewish family whose forebears came from Holland. We were too poor for school; at ten I left to roll cigars and earn the family\'s bread.\n\nIn 1863, when I was thirteen, the whole family crossed the ocean to America and settled on New York\'s Lower East Side, a slum packed with immigrants fresh off the boat, Jews, Irish, Italians, several to a single room.\n\nI went on rolling cigars. In the cigar workshops I joined the cigar workers\' organization. There I saw with my own eyes: a single worker is nothing before the boss, who can cut your wage, add your hours, fire you, and you have no recourse. But once workers band together and bargain with the boss as one, things are different.\n\nThe scattering of Jewish immigrants, the hardship of those fresh off the boat, I knew that ground all too well (run the black-death topic and you will recognize the condition of Jews wandering everywhere, outsiders wherever they go). Because I myself climbed up from the lowest, most outsider place, I afterward held so fiercely to one idea: for workers to survive, they must have organization, must have bargaining chips.',
      },
      deliverGoal: 'N2 setup — Gompers 出身 (1850 伦敦东区 Spitalfields 穷犹太家祖上荷兰来/10 岁辍学卷雪茄/1863 13 岁全家移民美国纽约下东区移民贫民区) + 加入卷烟工组织看见单个工人在老板面前什么都不是抱团才不一样 + 犹太移民离散底色 → black-death 跨 Topic 锚 + 从最底层最外人爬上来才死死抓「工人要活得有组织有讨价还价的本钱」',
      engagementHook: '我亲眼看见：单个工人在老板面前什么都不是，可一旦抱成团集体谈，就不一样了。「人多就有力量」这件事，你在自己生活里见过吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gomp-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '1886 年，我把一堆各干各的工人组织联合起来，成立了一个全国性的大组织，简称 AFL（劳工联合会）。我当上头。\n\n那时候，工人这边其实分成两派，吵得很凶。\n\n一派是激进派。他们说：跟老板谈工钱工时没用，整个制度就是吃人的，得把它整个推翻，工人来当家。\n\n我是另一派。我管自己这套叫「务实工会」——一句话：不谈推翻制度，只谈眼前能拿到手的东西。更高的工钱、更短的工时、更安全的车间。我的口号很土：「我们要什么？要更多。」（More.）\n\n为什么我不跟激进派走？因为我太清楚工人有多脆弱了。一个家等着米下锅的工人，赌不起「推翻制度」那种几十年都不一定成的大事。我宁可一次只争两毛钱的加薪、一小时的减时——拿到手，是真的。\n\n这条路救了很多工人。但你先记住：「务实」是有代价的。一会儿你会看见，我为了让组织「谈得成」，把哪些人挡在了外面。',
        en: 'In 1886 I drew together a heap of workers\' organizations that had each gone their own way and founded a great national body, the AFL for short. I became its head.\n\nIn those days the workers\' side was in fact split into two camps, quarreling fiercely.\n\nOne camp was the radicals. They said: bargaining with bosses over wages and hours is useless; the whole system devours people, and it must be overthrown entire, with the workers taking charge.\n\nI was the other camp. I called my approach "practical unionism," in one line: do not talk of overthrowing the system, talk only of what can be gotten into hand right now. Higher wages, shorter hours, a safer workshop. My slogan was plain: "What do we want? More."\n\nWhy did I not go with the radicals? Because I knew too well how fragile workers are. A worker with a family waiting for rice in the pot cannot gamble on "overthrowing the system," a thing that may not come off in decades. I would rather win, one at a time, a twenty-cent raise, an hour less of work. What is in hand is real.\n\nThis road saved many workers. But hold this in mind: "practical" has its price. Soon you will see whom I shut outside, so that the organization could "win at the table."',
      },
      deliverGoal: 'N3 setup — 1886 Gompers 联合各组织成立全国性 AFL 当头 + 工人两派吵 (激进派: 谈工钱没用整个制度吃人得推翻工人当家 / Gompers 务实工会: 不谈推翻只谈眼前能拿到手的更高工钱更短工时更安全车间口号「要更多 More」) + 不跟激进派因工人太脆弱 (家等米下锅赌不起几十年不一定成的大事/宁可一次争两毛加薪一小时减时拿到手是真的) + 救了很多工人但「务实有代价」埋伏笔挡了哪些人',
      engagementHook: '激进派要推翻整个制度，我只争眼前的两毛加薪、一小时减时——因为「拿到手的才是真的」。一个等米下锅的家，赌得起「几十年后才可能成」的大事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gomp-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你是 AFL 的头。你手上的本钱，说大很大，说小也很小：你能集结起几十万有技术的工人，集体跟资本家叫板。但你的力量有个来源——「技术」。\n\n你心里很清楚一个残酷的算盘：一个会炼钢、会卷雪茄、会盖房子的熟练工，老板一时半会找不到人替他，所以他有讨价还价的本钱。可一个刚下船、不会任何手艺、随时能被另一个穷光蛋替换的移民呢？他几乎没有本钱。\n\n现在你要做一个选择。你要不要把那些没技术的工人、刚下船的移民、还有大批女工，都拉进你的组织？\n\n拉进来，道义上对——他们也是工人，也在受苦。可他们随时可被替换，老板根本不怕他们罢工，你带着他们去谈，谈不赢，反而把你那些熟练工的本钱也拖垮。\n\n你为「所有工人」张开怀抱，可能谁都救不了；你只为「争得动的那部分」死守，能救一部分，但要亲手把另一部分人关在门外。\n\n你怎么选？',
        en: 'Now you are me.\n\nYou are the head of the AFL. Your resources are large and small at once: you can muster hundreds of thousands of skilled workers to face off against capital as one. But your strength has one source, skill.\n\nYou know a cruel reckoning clearly: a skilled man who can make steel, roll cigars, build houses, cannot be replaced by the boss at a moment\'s notice, so he has bargaining chips. But an immigrant fresh off the boat, with no craft at all, who can be swapped out for another pauper any time? He has almost no chips.\n\nNow you must make a choice. Will you pull the unskilled workers, the immigrants fresh off the boat, and the great mass of women workers, into your organization?\n\nPull them in, and you are right by conscience, they too are workers, they too suffer. But they can be replaced any time, the boss does not fear their strike at all, and if you take them to the table and lose, you drag down the chips of your skilled men as well.\n\nOpen your arms for "all workers," and you may save no one; hold firm only for "the part you can win for," and you save some, but with your own hands you shut the rest outside the door.\n\nWhich do you choose?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — AFL 头本钱说大很大说小很小 (能集结几十万有技术工人叫板但力量来源是技术) + 残酷算盘 (熟练工老板找不到人替有本钱/刚下船没手艺随时被替换的移民几乎没本钱) + 选择: 要不要把没技术移民女工拉进组织 (拉进来道义对但随时被替换老板不怕罢工拖垮熟练工本钱) + 为所有工人张怀抱可能谁都救不了/只为争得动的死守能救一部分但亲手关另一部分在门外',
      engagementHook: '为「所有工人」张开怀抱，可能谁都救不了；只为「争得动的那部分」死守，能救一部分但要亲手关另一部分在门外。这两条路，你选哪条？',
      expectsRealAnswer: false,
    },
    {
      id: 'gomp-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我选了后者。我把 AFL 建成了一个主要由熟练工组成的组织。\n\n我这么做，是有一套清醒的算计的。\n\n我让 AFL 集中力量，只打那些「打得赢」的仗。我们组织的是有技术、不容易被替换的工人——印刷工、木匠、炼钢工、卷烟工。这些人罢工，工厂真会停摆，老板真会肉疼，才会坐下来谈。\n\n我教手下：别空喊口号，别动不动谈革命。要算账。这个厂罢工，能撑多久？罢工基金够不够发？老板的软肋在哪？谈判桌上，每一条都要换得回实在的东西。\n\n这套打法，几十年里实打实地把熟练工的工钱抬上去了、工时压下来了。AFL 成了全美最有力量的工人组织。\n\n但你看清楚我这套「务实」的另一面：它的力量，恰恰来自「排他」。正因为我们只要那些不可替换的人、把那些可替换的人挡在外面，我们才谈得赢。我的成功，建立在一道我亲手划下的门槛上。',
        en: 'I chose the latter. I built the AFL into an organization made up mainly of skilled workers.\n\nIn doing so I had a clear-eyed calculation.\n\nI made the AFL concentrate its force and fight only the fights it could win. We organized skilled workers, hard to replace, printers, carpenters, steelmakers, cigar rollers. When these men strike, the factory really stops, the boss really feels the pain, and only then will he sit down to talk.\n\nI taught my men: do not shout empty slogans, do not talk revolution at every turn. Do the arithmetic. How long can this mill\'s strike hold? Is the strike fund enough to pay out? Where is the boss\'s weak spot? At the table, every clause must be traded back for something real.\n\nThis way of fighting, over decades, truly lifted skilled workers\' wages and brought their hours down. The AFL became the most powerful workers\' organization in America.\n\nBut see clearly the other face of my "practical" approach: its strength came precisely from "exclusion." Just because we wanted only the irreplaceable and shut the replaceable outside, we could win at the table. My success was built on a threshold I drew with my own hand.',
      },
      deliverGoal: 'N5 story — Gompers 选后者把 AFL 建成主要熟练工组成 + 清醒算计 (只打打得赢的仗/组织不易替换的印刷工木匠炼钢工卷烟工罢工工厂真停摆老板肉疼才坐下谈) + 教手下别空喊口号别动辄谈革命要算账 (罢工撑多久基金够不够老板软肋谈判每条换实在东西) + 几十年实打实抬工钱压工时 AFL 最有力量 + 「务实另一面: 力量来自排他/只要不可替换的挡可替换的才谈得赢/成功建在亲手划的门槛上」',
      engagementHook: '我的组织能谈赢，恰恰因为我们只要「不可替换的人」、把「可替换的人」挡在外面。力量来自排他——这种「务实」，你接受得了吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gomp-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我亲手划下那道门槛的时候，心里有一套说法替我撑腰——可那套说法，正是资本家用来对付我们的同一套。\n\n那个年代流行一种道理：社会是一场竞争，强者上、弱者下，是「适者生存」的自然法则。卡内基那种富人，用它证明「我该富，穷人是竞争输了」。\n\n我恨这套说法替富人撑腰。可你仔细看，我自己的逻辑里，藏着它的影子：我把工人分成「争得动的」和「争不动的」，我集中力量保住前者，放弃后者。在某种意义上，我也在做一种筛选——留下「适应得了组织化斗争」的工人，放弃那些「太弱、护不住」的。\n\n这就是「适者生存」最阴险的地方：它不只是富人压穷人的工具，它会渗进受压的人自己的脑子里，让你也忍不住把同类分成三六九等。\n\n同一句「适者生存」——卡内基用它替财富集中辩护；我用它的逻辑，给我的组织划了一道排外的门槛；而真正被这套逻辑碾在最底下的人，是那些既被资本抛弃、又被我这样的工人领袖关在门外的人。',
        en: 'When I drew that threshold with my own hand, I had a doctrine propping me up, and that doctrine was the very same one the rich used against us.\n\nIn that era a notion was popular: society is a contest, the strong rise, the weak fall, a natural law of "survival of the fittest." Rich men like Carnegie used it to prove "I deserve to be rich, the poor lost the contest."\n\nI hated that doctrine for propping up the rich. But look closely, and in my own logic its shadow hides: I divided workers into "those we can win for" and "those we cannot," concentrated force to hold the former and gave up the latter. In a sense, I too was sorting, keeping the workers "fit for organized struggle" and abandoning those "too weak to protect."\n\nThis is the most insidious thing about "survival of the fittest": it is not only a tool of the rich against the poor, it seeps into the minds of the oppressed themselves, until you too cannot help sorting your own kind into ranks.\n\nThe same line, "survival of the fittest." Carnegie used it to defend the concentration of wealth; I used its logic to draw an excluding threshold around my organization; and the ones truly ground to the very bottom by this logic were those abandoned by capital and shut out by labor leaders like me at the same time.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Social Darwinism (社会是竞争强者上弱者下「适者生存」自然法则) + Carnegie 那种富人用它证明「我该富穷人竞争输」+ Gompers 恨它替富人撑腰但自己逻辑藏它影子 (把工人分争得动/争不动集中保前者放弃后者/留下适应组织化斗争的放弃太弱护不住的) + 「适者生存最阴险: 渗进受压者脑子让你也把同类分三六九等」+ 跨 lens 对位同一句「适者生存」(Carnegie 辩护财富/Gompers 划排外门槛/最底下的人被资本和工人领袖同时关门外)',
      engagementHook: '我恨「适者生存」替富人撑腰——可我自己也在用它的逻辑，把工人分成「保得住的」和「放弃的」。一套害人的道理，怎么会连受害者自己都忍不住去用？',
      expectsRealAnswer: false,
    },
    {
      id: 'gomp-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我把哪些人关在了门外？我得诚实地数给你听。\n\n第一种：刚下船、没技术的移民。讽刺的是，我自己就是移民。可我后来公开支持限制移民——尤其是对来自亚洲的劳工，我的立场很硬。我的理由很「务实」：移民太多，老板就有用不完的廉价替工，熟练工的本钱就被稀释。可这理由背后，是把另一群同样在受苦的工人，当成了威胁。\n\n第二种：女工。那个年代，成千上万女人在血汗工厂里做工，工钱比男人还低。可 AFL 对组织女工一直不上心——有些人甚至觉得女人就该回家，不该抢男人的饭碗。\n\n第三种：黑人工人。这一条跟前两条不太一样——它更多不是我一个人的主动排斥，而是整套结构的结果。AFL 是以一个个「行业工会」（craft union）拼起来的，而种族的门槛、各行业工会自己的章程和习惯，让黑人工人大多被挡在这些工会外面。换句话说，把黑人关在墙外的，主要是这套以熟练工、行业为骨架的体系本身。\n\n你看出来了吗？我建的这座「工人的堡垒」，墙是真的厚，可墙里站着的，主要是白人、男性、有技术的熟练工。墙外，还有数不清的、同样在受苦、却没人替他们组织的工人。\n\n我为「工人」争了一辈子。可「工人」这两个字，在我这里，从来不包括所有人。',
        en: 'Whom did I shut outside the door? I must count them honestly for you.\n\nFirst: immigrants fresh off the boat, without skill. The irony is that I myself was an immigrant. Yet I later openly backed limits on immigration, and against laborers from Asia my stance was especially hard. My reason was very "practical": too many immigrants gave bosses an endless supply of cheap replacements, and the chips of skilled workers were diluted. But behind that reason lay treating another group of suffering workers as a threat.\n\nSecond: women workers. In that era, tens of thousands of women labored in sweatshops for wages even lower than men\'s. Yet the AFL never took organizing women to heart, and some even felt women belonged at home and should not grab men\'s jobs.\n\nThird: Black workers. This one is not quite like the first two, it was less my own active exclusion than the result of the whole structure. The AFL was stitched together out of one craft union after another, and the barrier of race, together with each trade union\'s own bylaws and habits, kept most Black workers outside those unions. In other words, what shut Black workers beyond the wall was mainly this system itself, built on a skeleton of skilled trades.\n\nDo you see it? The "fortress of workers" I built had thick walls indeed, but those standing inside were mainly white, male, skilled. Outside the walls stood countless workers, suffering all the same, with no one to organize them.\n\nI fought for "workers" my whole life. But the word "workers," with me, never included everyone.',
      },
      deliverGoal: 'N7 story — Gompers 关门外三种人 (1 刚下船没技术移民/讽刺自己也是移民/后来公开支持限制移民尤其对亚洲劳工硬/理由务实但把受苦工人当威胁 2 女工/血汗工厂工钱更低 AFL 不上心有人觉得女人该回家 3 黑人工人/不同于前两条不是个人主动排斥而是结构结果: AFL 以 craft union 拼成/种族门槛+各行业工会章程习惯把黑人挡外/主要是这套熟练工行业为骨架的体系本身) + 工人的堡垒墙厚但里面主要白人男性熟练工墙外数不清同样受苦没人组织的工人 + 「我为工人争一辈子但工人这两字在我这从来不包括所有人」',
      engagementHook: '我自己就是移民，后来却公开支持限制移民；我为工人争一辈子，可「工人」这两个字在我这里从来不包括女工、黑人、刚下船的人。为一部分人争取，是不是注定要牺牲另一部分人？',
      expectsRealAnswer: false,
    },
    {
      id: 'gomp-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那 Homestead 呢？1892 年，钢厂工人被私兵打死的那一年，我在干什么？\n\n我得告诉你一个让我至今难受的真相：Homestead 钢厂里那些罢工的工人，大多不在我的 AFL 体系的核心里。那场仗，是钢铁工人自己的组织在打，打得惨烈，最后被卡内基那边的私兵和州里的军队彻底碾碎。\n\n我同情他们，我公开声援。可我没有、也没本钱，把整个 AFL 押上去救他们。我那套「只打打得赢的仗」的务实哲学，在 Homestead 这种「打不赢」的硬仗面前，是缩着的。\n\n这就是「务实」最痛的地方。务实让我守住了我能守的阵地，几十年稳扎稳打。可每当有一群工人，在一场注定打不赢的仗里流血时，我那套「算得清的理性」，恰恰让我没法不计代价地冲上去。\n\n我救得了能算赢的人。我救不了在 Homestead 厂门口，倒在私兵枪下的那些人。',
        en: 'And Homestead? In 1892, the year steel workers were shot dead by private guns, what was I doing?\n\nI must tell you a truth that pains me to this day: most of the striking workers at the Homestead mill were not at the core of my AFL. That fight was waged by the steel workers\' own organization, waged savagely, and in the end ground utterly to pieces by Carnegie\'s private guns and the state\'s troops.\n\nI sympathized with them; I spoke up for them in public. But I did not, and had not the resources to, throw the whole AFL in to save them. My practical philosophy of "fight only the fights you can win" shrank back before a hard fight like Homestead that "could not be won."\n\nThis is the most painful thing about being "practical." Practicality let me hold the ground I could hold, fighting steadily for decades. But each time a group of workers bled in a fight doomed to be lost, that very "clear-eyed reason" of mine kept me from rushing in regardless of cost.\n\nI could save those whose victory could be reckoned. I could not save the ones who fell at the Homestead mill gate, under the private guns.',
      },
      deliverGoal: 'N8 story — Homestead 1892 Gompers 在干什么 + 难受真相 (Homestead 罢工工人大多不在 AFL 核心/那场仗是钢铁工人自己组织打打得惨烈最后被 Carnegie 私兵+州军队彻底碾碎) + Gompers 同情公开声援但没本钱押整个 AFL 救 + 「只打打得赢的仗」哲学在 Homestead 打不赢的硬仗前缩着 + 「务实最痛: 守住能守的几十年稳扎稳打但有群工人在注定打不赢的仗里流血时算得清的理性恰恰让我没法不计代价冲上去」+ 救得了算赢的救不了 Homestead 厂门口倒在私兵枪下的',
      engagementHook: 'Homestead 工人流血时，我同情、声援，却没押上整个组织去救——因为那是一场「算下来打不赢」的仗。「算得清的理性」，有时候是不是反而拦住了人去做对的事？',
      expectsRealAnswer: false,
    },
    {
      id: 'gomp-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1924 年死了，当了快 40 年的工人领袖。我留下的东西，活到了今天。\n\n你今天知道的很多东西，根都在我这套务实工会里：8 小时工作制、周末、加班费、集体谈判的权利。这些不是老板大发慈悲送的，是一代代工人，靠组织、靠罢工、靠在谈判桌上一点点抠出来的。我那套「算账、稳扎稳打、只签拿得到手的」的打法，是这套成果背后的骨架。\n\n但我留下的，还有一道没填平的裂缝。\n\n我把工人分成「墙里的」和「墙外的」。墙里那些有技术的工人，确实过上了好日子。可墙外的——没技术的、移民、女工、黑人——他们的苦，我那个时代的工人运动没接住。这道沿着技术、种族、性别划开的裂缝，后来花了几十年、又一代人重新组织，才慢慢去补。\n\n这就是调停者、务实派的宿命：你守住了能守的，让一部分人真的过上了好日子。可你划下的那道门槛，会变成下一代人要替你拆掉的墙。',
        en: 'I died in 1924, after nearly forty years as a labor leader. What I left behind lives on to this day.\n\nMuch of what you know today is rooted in my practical unionism: the eight-hour day, the weekend, overtime pay, the right to bargain collectively. These were not gifts from merciful bosses; they were pried out, bit by bit, by generations of workers through organization, through strikes, at the bargaining table. My way of "doing the arithmetic, fighting steadily, signing only what could be gotten into hand" was the skeleton behind these gains.\n\nBut I also left behind a crack never filled.\n\nI divided workers into "those inside the wall" and "those outside." The skilled workers inside truly came to live well. But those outside, the unskilled, the immigrants, the women, the Black workers, their suffering my era\'s labor movement did not catch. This crack, cut along lines of skill, race, and sex, took decades and another generation\'s re-organizing to slowly mend.\n\nThis is the fate of the mediator, the pragmatist: you hold the ground you can hold and let some truly come to live well. But the threshold you drew becomes a wall the next generation must tear down for you.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Gompers 1924 死当工人领袖快 40 年 + 留下活到今天 (8 小时工作制周末加班费集体谈判权根都在务实工会/不是老板送的是一代代工人靠组织罢工谈判桌抠出来/算账稳扎稳打只签拿得到手的是骨架) + 没填平的裂缝 (分墙里墙外/墙里有技术的过上好日子墙外没技术移民女工黑人的苦没接住/沿技术种族性别划开的裂缝花几十年又一代人重新组织才补) + 「调停者务实派宿命: 守住能守的让一部分过上好日子但划下的门槛变成下一代要替你拆掉的墙」',
      engagementHook: '8 小时工作制、周末、加班费——这些都是我那代工人抠出来的。可我划下的那道门槛，后来变成下一代人要替我拆掉的墙。「让一部分人先过上好日子」，是进步，还是埋下了新的不公？',
      expectsRealAnswer: false,
    },
    {
      id: 'gomp-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是真正给工人争到东西的人。在一片空喊革命、却让工人白白流血的声音里，我是那个最清醒、最务实的人。我不赌虚的，只打打得赢的仗，几十年稳扎稳打，把熟练工的工钱抬上去、工时压下来。8 小时工作制、集体谈判，这些今天工人享受的成果，是我这套「现实主义」一点点抠出来的。空想救不了等米下锅的家，是我这样的人，把面包真的拿到了工人手里。\n\n另一种说法：我是把一部分工人卖了换另一部分工人的人。我那座「工人堡垒」墙厚，可墙里主要是白人、男性、熟练工。为了让这部分人谈得赢，我亲手把移民、女工关在外面，甚至公开支持限制移民——而我自己就是个移民；至于黑人工人，则被我这套以行业、熟练工为骨架的体系一道挡在了墙外。我恨富人的「适者生存」，却用它的逻辑给同类划了三六九等。Homestead 工人流血时，我的「理性」让我没冲上去。\n\n这两边不是「功劳加局限」。是同一套「务实」的两面——让我救得了一部分人的那套算计，正是让我放弃另一部分人的那套算计。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the one who truly won things for workers. Amid a clamor that shouted revolution yet let workers bleed for nothing, I was the most clear-eyed, most practical man. I did not bet on the empty; I fought only winnable fights, steadily for decades, lifting skilled workers\' wages and cutting their hours. The eight-hour day, collective bargaining, the gains workers enjoy today, my "realism" pried them out bit by bit. Daydreams cannot save a family waiting for rice; it was men like me who put bread actually into workers\' hands.\n\nThe other view: I was the one who sold one part of the workers to win for another. My "fortress of workers" had thick walls, but inside were mainly white, male, skilled men. To let this part win at the table, I shut immigrants and women outside with my own hands, even openly backing immigration limits, and I myself was an immigrant; as for Black workers, they were kept beyond the wall by this very system of mine, built on a skeleton of trades and skilled men. I hated the rich man\'s "survival of the fittest," yet used its logic to rank my own kind. When Homestead workers bled, my "reason" kept me from rushing in.\n\nThese are not "credit plus limitation." They are two faces of one "practicality." The very reckoning that let me save one part of the workers was the reckoning that made me give up the other.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (真正给工人争到东西/空喊革命让工人白流血声中最清醒务实/不赌虚只打打得赢稳扎稳打抬工钱压工时/8 小时集体谈判抠出来/空想救不了等米的家是他把面包拿到工人手里) / 另一种说法 (把一部分工人卖了换另一部分/堡垒墙里主要白人男性熟练工/亲手关移民女工在外公开支持限制移民而自己是移民/黑人工人则被这套以行业熟练工为骨架的体系一道挡在墙外/恨富人适者生存却用它逻辑给同类划三六九等/Homestead 流血时理性让他没冲上去) / 同一套务实两面 (让他救一部分人的算计正是让他放弃另一部分的算计) / 想 30 秒',
      engagementHook: '真正给工人争到面包的人，和把一部分工人卖了换另一部分的人——是同一套「务实」的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'gomp-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个领袖？\n\n他在一片空话里最清醒，把实实在在的面包拿到了一部分工人手里；他也亲手把移民、女工关在门外，又划下了一道沿技术、种族、性别裂开的墙——黑人工人就被这道墙一并挡在了外面。「为一部分人争到了真东西」和「亲手抛弃了另一部分人」，是同一套务实的两头。放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有这样的「圈子」——一个为「我们这群人」争利益、却把「不算我们这群人」的人排在外面的小团体？班里的、队里的、群里的，争取的时候同仇敌忾，可有些人从一开始就没被算进「我们」。\n\n那时候，你会站在「我们」这边享受好处，还是会回头问一句：那道把人分进分出的门槛，是谁划的，又是谁被划在了外面？',
        en: 'Having walked my whole life, how would you judge a leader like this?\n\nHe was the clearest head amid empty talk and put real bread into the hands of one part of the workers; he also shut immigrants and women outside the door with his own hands, and drew a wall cracked along skill, race, and sex, a wall that kept Black workers out along with the rest. "Won real things for one part" and "abandoned another part with his own hands" are two ends of the same practicality. Put them on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there such a "circle," a small group that fights for the interests of "us, this lot" while shutting out those who "do not count as us"? In a class, on a team, in a group chat, all of one mind when fighting for the cause, yet some were never counted into "us" from the start.\n\nWhen that happens, will you stand on the side of "us" and enjoy the gains, or will you turn back and ask: that threshold sorting people in and out, who drew it, and who was drawn outside?',
      },
      deliverGoal: 'N11 close — 评价领袖 (空话里最清醒把面包拿到一部分工人手里 vs 亲手关移民女工在外又划沿技术种族性别裂开的墙黑人工人被这道墙一并挡外/为一部分争真东西和亲手抛弃另一部分同一套务实两头同一天平) + transfer「今天你身边为我们这群人争利益却把不算我们的排外的圈子 (班里队里群里同仇敌忾但有人没被算进我们)」+ 你站我们这边享好处还是回头问那道分进分出的门槛谁划的谁被划外面',
      engagementHook: '他把面包拿到一部分工人手里，也亲手把另一部分关在门外。你会怎么评价这样一个领袖？今天你身边那个「为我们争、把别人排外」的圈子，你会享受好处，还是回头问一句「谁被划在了门外」？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Homestead striker (receiving-end) — DEFAULT
// composite — 基于 1892.7.6 Homestead 流血冲突的钢厂工人 (史料确证的是流血冲突 + 死伤数字; 具体姓名/家庭是叙事性补充)
// ═══════════════════════════════════════════════════════════════════════

export var homesteadStrikerLens = {
  id: 'homestead-striker-receiving-end',
  name: 'Homestead Striker',
  nameCn: 'Homestead 罢工的钢厂工人',
  role: 'receiving-end',
  perspectiveTag: 'steel-mill-striker',
  icon: '⚙️',
  description: {
    cn: '一个 1892 年夏天守在 Homestead 钢厂门口的工人，是依据那场真实流血冲突合成的人物（史料确证的是当天的对峙和死伤，他的姓名和家事是叙事性补充）。他在 1500 度的高炉边干了十几年，胳膊上全是被钢花烫出的疤。他不是激进派，不想推翻什么，他只想守住一份能养活一家人的工钱。可 1892 年 7 月，他守在厂门口，等来的是一船握着步枪的私兵。这一遍，你站在子弹这一头，从一个无名工人这边，看那个被叫做「进步」的时代，到底是用谁的血铺成的。',
    en: 'A worker who stood at the gate of the Homestead steel mill in the summer of 1892, a figure composed from that real battle of blood (what the record confirms is the standoff and the dead and wounded that day; his name and family are a narrative addition). He worked beside furnaces at 1,500 degrees for more than ten years, his arms covered with scars burned by flying steel. He was no radical and wished to overthrow nothing; he only wanted to hold a wage that could feed a family. Yet in July 1892, standing at the mill gate, what came for him was a boatload of private men holding rifles. This pass puts you on the bullet\'s end, watching, from the side of a nameless worker, whose blood the age called "progress" was actually paved with.',
  },
  storyboard: [
    {
      id: 'hs-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1892 年 7 月 6 日，天还没亮，我守在 Homestead 钢厂的河边。我手里没有枪。我手里只有我这身在高炉边烤了十几年的力气，和一肚子的怕。\n\n河面上，雾里飘来两条黑黢黢的大船。船上是握着步枪的人——是厂里花钱请来的私兵，专门来对付我们的。他们要从河上强行登岸，把我们这些罢工的工人赶开，好让厂子重新开工。\n\n我叫什么名字不重要。我是这场冲突里几千个工人里的一个（我这个人，是照着那一天真实发生的事拼出来的——那天的对峙、那天的死伤，是真的；我的名字、我的家，是替你把那一天看得更近的补充）。\n\n这一遍，你站在我这一头——子弹要打过来的这一头。你要看的，不是写《财富的福音》的大善人，也不是在谈判桌上算账的工会领袖。你要看的，是那个被「进步」碾过去的人。',
        en: 'On 6 July 1892, before dawn, I stood by the river at the Homestead steel mill. I held no gun. In my hands I had only this body, roasted beside the furnaces for more than ten years, and a belly full of fear.\n\nOut on the water, through the mist, two dark, hulking boats drifted in. On them were men holding rifles, private soldiers the mill had paid to come and deal with us. They meant to force a landing from the river, drive off us striking workers, and reopen the mill.\n\nMy name does not matter. I was one of thousands of workers in this clash (this person of mine is pieced together from what truly happened that day; the standoff, the dead and wounded, are real; my name and my family are an addition, to bring that day closer to you).\n\nThis pass puts you on my end, the end the bullets are coming toward. What you watch is not the great benefactor who wrote The Gospel of Wealth, nor the union leader doing arithmetic at the bargaining table. What you watch is the man whom "progress" rolled over.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 1892.7.6 天没亮守 Homestead 钢厂河边手里没枪只有高炉边烤十几年的力气和一肚子怕 + 河面雾里两条黑大船握步枪的私兵厂花钱请来强行登岸赶罢工工人重开工 + composite anti-fab 括号短句 (照真实事拼出/那天对峙死伤真的/名字家是补充) + 这一遍站子弹这一头 (不是写《财富的福音》大善人不是谈判桌算账工会领袖是被进步碾过去的人)',
      engagementHook: '我手里没有枪，对面河上是握着步枪的私兵——厂里花钱请来对付我们的。你能想象「等着一船枪向你开过来」是什么感觉吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hs-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我每天的日子，你才懂我为什么宁可守在厂门口挨枪，也不肯走。\n\n我在 Homestead 钢厂炼钢，干了十几年。一天 12 个小时，守在 1500 度的高炉边。那温度，能把人脸烤得脱皮，钢水溅出来的火星，落在胳膊上就是一个疤。我两条胳膊上，这种疤数都数不清。\n\n车间里没有什么安全这回事。我亲眼见过工友被烫伤、被机器绞断手、被滚烫的钢水烫死。死了一个，第二天工厂照转，门口排着队的穷人，随时有人补上他的位置。\n\n可就是这份要命的活，养着我一家人。工钱不算高，但够买面包、够付房租、够让孩子有口饭吃。\n\n这就是我的全部。一份玩命换来的、勉强够活的工钱。你现在该明白了：当厂里说要把工钱再压下去时，对我来说，那不是「少赚一点」。那是我一家人会不会饿肚子。',
        en: 'First let me tell you my daily life, so you understand why I would rather stand at the mill gate and take a bullet than walk away.\n\nI made steel at the Homestead mill for more than ten years. Twelve hours a day, beside furnaces at 1,500 degrees. That heat can peel the skin off a man\'s face, and a spark of molten steel, landing on your arm, leaves a scar. On my two arms such scars are beyond counting.\n\nIn the workshop there was no such thing as safety. With my own eyes I saw workmates scalded, arms torn off by machines, killed by boiling steel. One man dies, and the next day the mill turns as ever; the poor lined up at the gate mean someone fills his place at any moment.\n\nYet this killing work fed my whole family. The wage was not high, but it bought bread, paid the rent, kept food in the children\'s mouths.\n\nThat was all I had. A barely-enough wage, won by risking my life. Now you should understand: when the mill said it would push the wage down again, to me that was not "earning a little less." That was whether my family would go hungry.',
      },
      deliverGoal: 'N2 setup — 钢厂炼钢十几年一天 12 小时 1500 度高炉边 (温度烤脸脱皮钢水火星落胳膊是疤两胳膊数不清) + 车间没安全 (工友被烫伤机器绞断手滚烫钢水烫死/死一个第二天照转门口排队穷人随时补) + 这份要命活养一家 (工钱不高够面包房租孩子吃饭) + 「厂里压工钱对我不是少赚一点是一家会不会饿肚子」',
      engagementHook: '我两条胳膊上的烫疤数都数不清，可这份玩命的活养着我全家。当厂里要再压工钱，对我那不是「少赚一点」，是我一家会不会饿肚子。这种「退无可退」，你体会过吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hs-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我得说清楚：我不是那种想造反、想推翻一切的人。\n\n厂里那些激进派，整天讲要把整个制度砸烂、工人来当家。我听着热血，可我不敢跟。我上有老下有小，赌不起。我要的东西特别小、特别具体：一份说话算话的合同，一份能让我一家吃饱的工钱。就这么点。\n\n我们工人有自己的组织，跟厂方签着合同。靠着这个组织，我们好歹有点跟老板讨价还价的力气——不至于他说压工钱就压工钱，说开除就开除。这是我们这些没本钱的人，唯一能攥住的一点点底气。\n\n1892 年，合同到期了。我们听说，厂里这次铁了心，不光要压工钱，还要把我们的组织彻底赶出去——以后厂里说了算，我们一个字都没得讲。\n\n你现在懂我守在厂门口、为什么寸步不让了吧？我守的不是什么伟大的理想。我守的是我们这些人，最后那一点点不被人随意拿捏的底气。',
        en: 'Let me be clear: I was not the kind who wanted to rebel and overthrow everything.\n\nThe radicals at the mill talked all day of smashing the whole system and putting workers in charge. It stirred my blood to hear, but I dared not follow. I had old folk above me and children below; I could not gamble. What I wanted was very small, very concrete: a contract that held its word, a wage that could fill my family\'s bellies. Just that much.\n\nWe workers had our own organization, with a contract signed with the company. Through that organization we had at least a little strength to bargain with the boss, so he could not cut the wage or fire a man just because he said so. For people like us with no chips, it was the one bit of footing we could grip.\n\nIn 1892 the contract expired. We heard the mill had set its heart this time not only to cut wages but to drive our organization out entirely, so that afterward the mill would have the only say, and we would not get a single word in.\n\nNow do you understand why I stood at the mill gate and would not give an inch? I was not holding to some grand ideal. I was holding to the last bit of footing that kept people like us from being squeezed at will.',
      },
      deliverGoal: 'N3 setup — 工人不是想造反推翻一切的人 (激进派讲砸烂制度工人当家听着热血不敢跟/上有老下有小赌不起/要的特别小具体: 说话算话的合同能吃饱的工钱) + 工人有组织跟厂方签合同 (靠组织有点讨价还价力气不至于说压就压说开除就开除/没本钱的人唯一攥住的底气) + 1892 合同到期厂铁了心不光压工钱还要彻底赶走组织 (以后厂说了算工人一字没得讲) + 「守的不是伟大理想是最后一点不被随意拿捏的底气」',
      engagementHook: '我不想造反，我要的特别小：一份说话算话的合同，一份能让全家吃饱的工钱。可厂里要把我们仅有的组织彻底赶走。守住「最后一点不被人随意拿捏的底气」——这个要求过分吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hs-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1892 年 7 月初。厂长 Frick 先动了手——他没等谈，直接把我们锁在厂门外，又在厂子周围拉起高墙、架起铁丝网，活像要打仗。我们都明白了：他根本没打算谈，他要把我们饿垮、耗垮，再换一批听话的人进厂。\n\n我们几千个工人，把整座厂围了起来，日夜轮班守着。我们没有别的武器，只有人多，只有一个朴素的念头：只要我们守在这儿，不让别人进厂顶替我们的活，厂子就开不了工，老板就得回来跟我们谈。\n\n7 月 6 日凌晨，河上来了那两条船。船上是私兵，带着步枪。他们要从河上登岸，绕过我们的封锁，强行进厂。\n\n这一刻你得做个选择。你手里只有石头、棍子，最多一把猎枪。对面是训练有素、武装到牙齿的私兵。\n\n你是后退，保住命，眼睁睁看着别人进厂顶掉你养家的活？还是冲上去，用你这身肉，去挡那一船的枪？',
        en: 'Now you are me.\n\nEarly July 1892. Manager Frick struck first. He did not wait to talk; he locked us straight out of the mill, then threw up high walls and barbed wire around it, as if for war. We all understood: he had no intention of talking. He meant to starve us out, wear us down, and bring in a batch of obedient men instead.\n\nWe thousands of workers ringed the whole mill, keeping watch in shifts day and night. We had no other weapon but numbers, and one plain idea: as long as we held here and let no one in to take our jobs, the mill could not run, and the boss would have to come back and talk.\n\nBefore dawn on 6 July, the two boats came up the river. On them were the private men with rifles. They meant to land from the water, slip past our blockade, and force their way into the mill.\n\nHere you must make a choice. In your hands are only stones, clubs, at most a hunting gun. Across from you are trained, fully armed private soldiers.\n\nDo you fall back and keep your life, watching others go in to take the work that feeds your family? Or do you rush forward and use this body of flesh to block that boatload of guns?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1892.7 初 Frick 先动手 (没等谈直接锁工人在门外/厂周围拉高墙架铁丝网像打仗/明白他没打算谈要饿垮耗垮换听话的人) + 几千工人围厂日夜轮班守 (没武器只有人多和朴素念头: 守住不让人进厂顶替厂就开不了工老板得回来谈) + 7.6 凌晨河上两条船私兵步枪要登岸绕封锁强行进厂 + 选择: 手里只有石头棍子最多一把猎枪对面训练有素武装私兵 + 后退保命看别人顶掉养家的活/还是冲上去用肉挡一船枪',
      engagementHook: '你手里只有石头、棍子，对面是一船握着步枪的私兵。你是后退保命、眼看别人顶掉你养家的活，还是用这身肉去挡那一船枪？',
      expectsRealAnswer: false,
    },
    {
      id: 'hs-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我们没退。\n\n船一靠岸，两边就对上了。先是喊话、推搡，然后不知是谁先开了枪，接着就是一片枪响。河岸上、船上、工厂的院墙边，到处是人在跑、在喊、在倒下。\n\n那一天打了整整大半天，十几个小时。烟、血、河水，混在一起。\n\n等一切停下来，我们这边死了 7 个工人，私兵那边死了 3 个，两边受伤的，数都数不清。\n\n死的那 7 个，每一个都跟我一样——有名字、有爹娘、有等他回家吃饭的孩子。可在报纸的大字标题里、在后来的历史课本里，他们大多连名字都不会被记下。他们只是「7 名罢工者死亡」这行字里的一个数字。\n\n你现在明白我开头那句话了吧：我叫什么名字不重要。在那个时代，像我这样的人，活着是一双干活的手，死了是统计表上的一个数。',
        en: 'We did not fall back.\n\nThe moment the boats touched the bank, the two sides met. First shouting, shoving, then no one knows who fired first, and then a storm of gunfire. On the bank, on the boats, along the mill\'s walls, everywhere men ran, shouted, fell.\n\nThat day the fighting went on most of the day, more than ten hours. Smoke, blood, river water, all mixed together.\n\nWhen it was all over, 7 workers were dead on our side, 3 private men on theirs, and the wounded on both sides beyond counting.\n\nThose 7 dead, every one was like me, with a name, with parents, with children waiting for him to come home to supper. Yet in the newspapers\' great headlines, in the later history books, most would not have even their names set down. They were one figure inside the line "7 strikers dead."\n\nNow you understand my first words: my name does not matter. In that age, a man like me was, alive, a pair of working hands, and, dead, a number on a table.',
      },
      deliverGoal: 'N5 story — 工人没退船靠岸两边对上 (喊话推搡不知谁先开枪一片枪响河岸船上院墙边人跑喊倒下) + 打整整大半天十几小时烟血河水混一起 + 停下来工人死 7 私兵死 3 两边伤数不清 + 死的 7 个每个都跟我一样 (有名字爹娘等他回家吃饭的孩子) 但报纸大标题历史课本大多连名字不记只是「7 名罢工者死亡」一个数字 + 「我叫什么不重要那时代像我这样的人活着是一双干活的手死了是统计表一个数」',
      engagementHook: '死的 7 个工人，每个都有名字、有等他回家吃饭的孩子。可在历史课本里，他们只是「7 名罢工者死亡」里的一个数字。一个人活成「一双干活的手」、死成「一个数」，是怎么发生的？',
      expectsRealAnswer: false,
    },
    {
      id: 'hs-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那一天我躺在血泊里，脑子里反而异常清醒。我想起一句这些年到处都在说的话。\n\n那些有学问的人、那些富人，都爱讲一个道理：这世界是「适者生存」——强的活下来，弱的被淘汰，是天经地义的自然法则。卡内基那种大富翁，用这句话证明他活该坐拥钢铁帝国；连工会那边的领袖，也用这套逻辑，把我们这些「不够强、护不住」的工人，分进分出。\n\n躺在那儿，我看着对面那一船握枪的人，忽然懂了这句话最赤裸的意思：\n\n在那间会议室里、在那张谈判桌上，「适者」是说话的本钱、是讨价还价的筹码。可在这条河岸边，「适者」就是手里那杆步枪。谁有枪，谁就是「适者」；我们没有枪，我们就是被「自然」淘汰掉的那一方。\n\n同一句「适者生存」——富人用它替自己的财富开脱，工会用它给工人排座次，而到了我这儿，它脱掉所有体面的外衣，露出最后的真相：它就是对着我胸口的那一杆枪。',
        en: 'That day, lying in the blood, my mind was strangely clear. A line came back to me, one said everywhere in those years.\n\nThe learned men, the rich men, all loved a doctrine: this world is "survival of the fittest," the strong live on, the weak are eliminated, a natural law beyond dispute. A magnate like Carnegie used the line to prove he deserved his steel empire; even the leaders on the union side used the same logic to sort us workers, the "not strong enough, not protectable," in and out.\n\nLying there, looking at that boatload of armed men across from me, I suddenly understood the line\'s barest meaning:\n\nIn that meeting room, at that bargaining table, the "fit" meant the chips to speak, the leverage to bargain. But here on this riverbank, the "fit" was the rifle in a man\'s hands. Whoever has the gun is the "fit"; we had no guns, so we were the side "nature" eliminated.\n\nThe same line, "survival of the fittest." The rich used it to excuse their wealth, the union used it to seat workers in rank, and here, with me, it stripped off every respectable coat and bared its last truth: it was the gun pointed at my chest.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 工人躺血泊脑子清醒想起一句到处说的话 + Social Darwinism (有学问的人富人讲「适者生存」强活弱淘汰天经地义自然法则/Carnegie 用它证明活该坐拥钢铁帝国/连工会领袖也用逻辑把不够强护不住的工人分进分出) + 跨 lens 对位同一句「适者生存」最赤裸的意思 (会议室谈判桌「适者」是说话本钱讨价还价筹码/河岸边「适者」就是手里那杆步枪谁有枪谁是适者/我们没枪就是被自然淘汰的一方) + 「富人用它开脱工会用它排座次到我这脱掉体面外衣露真相: 对着我胸口的那杆枪」',
      engagementHook: '同一句「适者生存」——在谈判桌上是讨价还价的筹码，在河岸边就是手里那杆步枪。谁有枪谁就是「适者」。一句听起来很科学的话，到底是道理，还是给暴力穿的一件体面外衣？',
      expectsRealAnswer: false,
    },
    {
      id: 'hs-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你以为打赢了那一船私兵，我们就赢了？没有。真正碾碎我们的，还在后头。\n\n那一天，私兵确实被我们打退了，举手投降。可厂方一告状，宾州州长就派来了州里的军队——宾夕法尼亚的国民警卫队（州民兵），好几千名全副武装的士兵，开进 Homestead。\n\n你看清楚这件事的分量：先是厂里花钱雇的私兵，私兵不够，州政府的军队就直接开来了。枪杆子，从老板的私人保安，升级成了政府派来的正规武装。\n\n军队一到，一切都完了。罢工被彻底压垮。厂子重新开工，进去的是新雇的、听话的工人。我们这些带头的，有的被抓、被告，有的上了黑名单，这辈子别想再在钢厂找到活干。\n\n我们的组织，被赶出了 Homestead。往后整整几十年，这一带的钢厂里，工人再没有一个能跟老板讨价还价的组织。\n\n我们守在厂门口，用命换来的，是彻底的失败。一份养家的工钱，一点不被人随意拿捏的底气——我们连这么小的东西，都没守住。',
        en: 'You think that by beating off that boatload of private men, we won? No. What truly crushed us was still to come.\n\nThat day the private men were indeed driven off and threw up their hands in surrender. But once the company complained, the governor of Pennsylvania sent in the state\'s troops, the Pennsylvania National Guard (the state militia), several thousand fully armed soldiers, marching into Homestead.\n\nSee the weight of this clearly: first the private men the mill paid for, and when they were not enough, the state government\'s army came straight in. The gun passed from the boss\'s private guards up to the armed force the government itself sent.\n\nWith the army there, all was over. The strike was utterly crushed. The mill reopened, and in went newly hired, obedient workers. We who had led, some were arrested and charged, some put on a blacklist, never to find work in a steel mill again as long as we lived.\n\nOur organization was driven out of Homestead. For whole decades afterward, in the steel mills of that region, workers had no organization that could bargain with the boss.\n\nWe stood at the mill gate and traded our lives for utter defeat. A wage to feed a family, a little footing against being squeezed at will, even something this small, we could not hold.',
      },
      deliverGoal: 'N7 story — 打赢私兵不等于赢真正碾碎在后头 + 那天私兵被打退举手投降但厂方一告状宾州州长派州里的军队 (宾州国民警卫队/州民兵/好几千全副武装士兵开进 Homestead) + 「枪杆子从老板私人保安升级成政府派来的正规武装」(私兵不够州政府军队直接开来) + 军队一到罢工彻底压垮厂重开工进新雇听话工人/带头的被抓被告上黑名单这辈子别想再在钢厂找活 + 组织被赶出 Homestead 往后几十年工人再没能讨价还价的组织 + 「用命换来彻底失败/一份养家工钱一点底气这么小的东西都没守住」',
      engagementHook: '我们打退了私兵，可厂方一告状，州政府就把军队（宾州国民警卫队）开了进来——枪杆子从老板的私人保安，升级成了政府派来的正规武装。当老板和政府站在同一边，工人还有赢的可能吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hs-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想跟你说说，那个时代是怎么讲我们这场失败的。\n\n那时的舆论其实是分裂的：站厂方那边的报纸把我们写成「闹事的暴民」，把私兵的死写成「秩序受到工人攻击」；可也有不少报纸和普通人同情我们、痛骂雇私兵开枪的 Pinkerton 和 Frick。只是无论报纸怎么吵，卡内基的钢铁，照样源源不断地造铁路、架桥、盖起一座座高楼。整个国家在为「工业的奇迹」欢呼——钢产量翻番，城市拔地而起，美国一跃成了世界第一工业强国。\n\n这就是后来人们说的「进步」。可你站在我这一头，就看清了一件这凯歌里没人愿意提的事：\n\n这「进步」的每一根钢梁、每一段铁轨，都是用我们这种人的命铺出来的。高炉边烫死的、机器绞死的、罢工里被枪打死的——我们是这台轰隆隆向前的机器底下，没人去数的零件。\n\n历史课本会记住卡内基的钢铁帝国，会记住那些拔地而起的城市。可它很难记住，在 1892 年那个夏天的河边，有 7 个有名有姓的人，为了一份养家的工钱，倒了下去。',
        en: 'Let me tell you how that age told the story of our defeat.\n\nOpinion was in fact divided: the papers that stood with the company wrote us up as a "riotous mob," and wrote the private men\'s deaths as "order attacked by workers"; yet plenty of papers and ordinary people sympathized with us, and damned the Pinkertons and Frick who hired armed men to open fire. But whatever the papers quarreled over, Carnegie\'s steel went on, in an endless stream, building railroads, raising bridges, putting up tower after tower. The whole nation cheered the "miracle of industry," steel output doubling, cities rising from the ground, America vaulting to the first industrial power in the world.\n\nThis is what people later called "progress." But standing on my end, you see clearly one thing no one in that triumph wished to mention:\n\nEvery steel beam, every length of rail of this "progress," was paved with the lives of men like us. Scalded to death beside the furnaces, killed in the machines, shot dead in the strike, we were the parts no one counted, beneath this roaring machine grinding forward.\n\nThe history books will remember Carnegie\'s steel empire, will remember the cities risen from the ground. But it can hardly remember that by the river in the summer of 1892, seven men with names fell down for a wage to feed a family.',
      },
      deliverGoal: 'N8 story — 那时代怎么讲这场失败 + 舆论其实分裂 (站厂方的报纸写工人闹事暴民/私兵死写成秩序受工人攻击/但也有不少报纸和普通人同情工人痛骂 Pinkerton 和 Frick/无论怎么吵) + Carnegie 钢铁照样造铁路架桥盖高楼/全国为工业奇迹欢呼 (钢产翻番城市拔地起美国一跃世界第一工业强国) + 这就是后来说的「进步」+ 站这一头看清凯歌里没人愿提的事 (进步每根钢梁每段铁轨用我们这种人的命铺的/高炉烫死机器绞死罢工枪死的是机器底下没人去数的零件) + 「历史课本记住钢铁帝国记住城市但很难记住 1892 夏河边 7 个有名有姓的人为养家工钱倒下」',
      engagementHook: '钢产量翻番、城市拔地而起，整个国家为「工业奇迹」欢呼。可这凯歌里没人愿提：每根钢梁、每段铁轨，都是用我们这种人的命铺出来的。当人们欢呼「进步」时，谁会记得代价是谁付的？',
      expectsRealAnswer: false,
    },
    {
      id: 'hs-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我们这一仗，败得彻底。可这一仗，没有白打。\n\n我们当时不会知道：Homestead 河边的血，后来成了全美国工人都记得的一道伤口。它让越来越多的人看清一件事——光靠工人自己，挡不住老板加政府的枪。要改命，得让法律站到工人这一边来。\n\n往后几十年，一代又一代工人，接着我们没走完的路往下走。罢工、组织、一次次跟资本和政府死磕。慢慢地，事情真的变了：工厂不能再随便雇私兵打工人了；后来有了法律，明文保护工人组织起来、跟老板集体谈判的权利；再后来，有了限定工时、保障安全的规矩。\n\n你今天觉得天经地义的东西——8 小时工作制、加班费、工厂得讲安全——没有一样是天上掉下来的。每一样，背后都站着像我们这样、在某个厂门口倒下过的人。\n\n一份养家的工钱，一点不被人随意拿捏的底气。我们那一代没守住。可我们倒下的地方，后来人踩着，往前走了。',
        en: 'Our fight ended in utter defeat. Yet this fight was not fought for nothing.\n\nWe could not have known then: the blood by the Homestead river later became a wound that workers all over America remembered. It made more and more people see one thing clearly, that workers alone cannot hold back the guns of boss and government together. To change their fate, they had to bring the law onto the workers\' side.\n\nIn the decades after, generation upon generation of workers walked on down the road we did not finish. Strikes, organizing, fighting capital and government to the death again and again. Slowly, things truly changed: mills could no longer freely hire private men to beat workers; later there were laws plainly protecting the right of workers to organize and bargain collectively with the boss; later still came rules limiting hours and guarding safety.\n\nThe things you take as beyond question today, the eight-hour day, overtime pay, mills made to mind safety, not one fell from the sky. Behind every one stand people like us, who fell at some mill gate.\n\nA wage to feed a family, a little footing against being squeezed at will. Our generation did not hold it. But the place where we fell, those who came after stepped on, and walked forward.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 败得彻底但没白打 + Homestead 河边血成全美工人记得的伤口 (让越来越多人看清光靠工人自己挡不住老板加政府的枪/要改命得让法律站到工人这边) + 往后几十年一代代工人接没走完的路 (罢工组织一次次跟资本政府死磕慢慢变: 工厂不能随便雇私兵打工人/后来有法律明文保护工人组织集体谈判权/再后来限定工时保障安全规矩) + 「你今天天经地义的 8 小时加班费工厂讲安全没一样天上掉下来背后站着像我们在厂门口倒下过的人」+ 「我们那代没守住但倒下的地方后人踩着往前走了」',
      engagementHook: '8 小时工作制、加班费、工厂得讲安全——没有一样是天上掉下来的，每一样背后都站着在厂门口倒下过的人。我们那一代没守住的，后来人踩着我们倒下的地方往前走了。这样的「失败」，还算失败吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hs-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看那个被叫做「进步」的时代，两种说法都站得住。\n\n一种说法：那是个伟大的时代。钢铁、铁路、电力、一座座城市拔地而起，美国从一个农业国，一跃成了世界第一工业强国。卡内基那样的人，是把这个国家造起来的英雄。我们这些工人吃的苦，是任何一个国家走向现代、走向富强，都绕不开的代价。没有那些苦，就没有今天的繁荣。\n\n另一种说法：那「进步」是踩着我们的命堆出来的。钢产量翻番的同时，是我们在 1500 度高炉边一天 12 小时、是工友被机器绞死、是 1892 年河边 7 个工人倒在私兵和军队的枪下。财富像水一样往上流，流进卡内基那种人手里；苦和死，像石头一样往下沉，压在我们这种人身上。把我们的血叫做「必要的代价」，本身就是胜利者写的历史。\n\n这两边不是「成就加代价」。是同一个时代的两面——那耀眼的繁荣，和那没人去数的死，是同一台机器的正面和背面。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at the age called "progress." Both views stand.\n\nOne view: it was a great age. Steel, railroads, electricity, city after city rising from the ground, America vaulting from a farming country to the first industrial power in the world. Men like Carnegie were the heroes who built this nation. The suffering we workers bore was the price no country can avoid on its road to the modern, to wealth and strength. Without that suffering, there would be no prosperity today.\n\nThe other view: that "progress" was heaped up by trampling on our lives. As steel output doubled, it was us at the 1,500-degree furnaces twelve hours a day, it was workmates ground to death in the machines, it was seven workers by the river in 1892 falling under the guns of private men and the army. Wealth flowed upward like water, into the hands of men like Carnegie; the suffering and the dying sank downward like stone, pressing on men like us. To call our blood a "necessary price" is itself a history written by the victors.\n\nThese are not "achievement plus price." They are two faces of one age, that dazzling prosperity and that uncounted death, the front and the back of one machine.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (伟大时代/钢铁铁路电力城市拔地起美国一跃世界第一工业强国/Carnegie 那样的人是造起国家的英雄/工人的苦是任何国家走向现代富强绕不开的代价没苦没今天繁荣) / 另一种说法 (进步踩着我们的命堆出来/钢产翻番同时是我们 1500 度 12 小时工友被机器绞死 1892 河边 7 工人倒私兵军队枪下/财富往上流进 Carnegie 手里苦和死往下沉压我们身上/把血叫必要代价是胜利者写的历史) / 同一个时代两面 (耀眼繁荣和没人数的死是同一台机器正面背面) / 想 30 秒',
      engagementHook: '一种说法：那是个伟大的时代。另一种说法：那「进步」是踩着我们的命堆出来的。两种说法都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'hs-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一双在高炉边烤了十几年的手，两条数不清疤的胳膊，一份没守住的养家工钱，一个连名字都没留下的死——你会怎么评价那样一个时代？\n\n一边是钢铁、铁路、拔地而起的城市，是写进课本的「工业奇迹」；一边是高炉边、机器里、河岸上没人去数的死。这两样不是分开的两件事，是同一台机器的正面和背面。把它们放在同一个天平上，你怎么称？\n\n不过先记住：你这一遍，听的只是一个倒在血泊里的钢厂工人。钢铁大王、慈善家兼镇压者 Andrew Carnegie，夹在资本与激进之间的务实工会领袖 Samuel Gompers，各有各的说法——换个视角再走一遍，你会听见他们怎么讲这同一段历史，也会看看你刚才的判断站不站得住。\n\n再想一步。今天你身边，有没有这样的「光鲜」——一个漂亮的成绩、一份耀眼的成果、一个被夸上天的「了不起」——背后，有没有谁在默默吃着没人看见的苦？也许是一个总被使唤、却从不被提名的同学，也许是一个把活全干了、功劳却记在别人头上的人。\n\n那时候，你会跟着大家一起欢呼那份光鲜，还是会像记住我们这 7 个人一样，回头看一眼：这份了不起，到底是谁的命、谁的苦，给垫在了底下？',
        en: 'Having walked my whole life, a pair of hands roasted beside the furnaces for more than ten years, two arms of countless scars, a family\'s wage I could not hold, a death that left not even a name, how would you judge an age like that?\n\nOn one side, steel, railroads, cities risen from the ground, the "miracle of industry" written into the books; on the other, the uncounted dead beside the furnaces, in the machines, on the riverbank. These two are not separate things; they are the front and the back of one machine. Put them on the same scale. How do you weigh them?\n\nBut first, remember: this pass, you heard only a steel worker who fell in the blood. Andrew Carnegie, the steel king who was both philanthropist and enforcer, and Samuel Gompers, the pragmatic labor leader caught between capital and the radicals, each have their own case. Run it again through another lens and you will hear how they tell this same history, and see whether the judgment you just made still holds.\n\nThen take one more step. In your own life today, is there such a "shine," a fine grade, a dazzling result, a "remarkable" thing praised to the skies, behind which someone quietly bears a suffering no one sees? Perhaps a classmate always ordered about yet never named, perhaps someone who did all the work while the credit went to another\'s head.\n\nWhen that happens, will you cheer the shine along with everyone, or will you do as you would in remembering us seven, and turn back to look: this remarkable thing, whose life, whose suffering, was laid down beneath it?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价时代 (高炉边十几年的手/数不清疤的胳膊/没守住的养家工钱/连名字没留的死 → 钢铁铁路城市课本里工业奇迹 vs 高炉机器河岸没人数的死/不是分开两件是同一台机器正面背面同一天平) + transfer「今天你身边光鲜 (漂亮成绩耀眼成果被夸上天的了不起) 背后有没有谁默默吃没人看见的苦 (总被使唤不被提名的同学/把活全干功劳记别人头上的人)」+ 你跟着欢呼光鲜还是像记住我们 7 个一样回头看这份了不起谁的命谁的苦垫在底下',
      engagementHook: '走完我这一生，你会怎么评价那样一个时代？再想一步：今天你身边那份「光鲜的了不起」背后，有没有谁在默默吃着没人看见的苦？那时候，你会跟着欢呼，还是回头看一眼「代价是谁垫的」？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'andrew-carnegie':                 carnegieLens,
  'samuel-gompers':                  gompersLens,
  'homestead-striker-receiving-end': homesteadStrikerLens,
};

// per TOPIC_ROADMAP_G6_G12.md A8 + receiving-end 优先 pattern:
// 无名工人 composite + 被进步凯歌排除一方 + N1 gold-standard hook + N6「适者生存」跨 lens 对位 + N10/N11 伟大时代 vs 踩命堆出来 closing
export var defaultLens = 'homestead-striker-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'gilded-age-1890',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'andrew-carnegie': 30, 'samuel-gompers': 30, 'homestead-striker-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「适者生存 / survival of the fittest」一句话多个方向 (Carnegie 替财富集中辩护 vs Gompers 给工人划排外门槛 vs Homestead striker 看清「适者」就是握枪那一方)',
    'defaultLens: homestead-striker-receiving-end — 受影响者优先 (无名工人 composite + 被进步凯歌排除一方 + gold-standard N1 hook + N10/N11 伟大时代 vs 踩命堆出来)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: Homestead striker 是 composite (基于 1892.7.6 真实冲突)，N1 + lens description 括号短句标注; 史料确证的是当天对峙 + 死伤数字 (工人 7 / Pinkerton 3)',
    'cross-Topic 锚: Carnegie/Gompers Social Darwinism (Spencer/Sumner) → scientific-revolution (科学被权力挪用); Gompers 犹太移民 → black-death-1347 (Devorah 犹太离散)',
    '反 Whig: Carnegie 捐 2500 座图书馆 + 同时 1892 镇压自己工厂罢工致死 (慈善与剥削同体); Homestead striker lens 打破「工业进步=人民富裕」凯歌',
    '史实校验: Carnegie 1835-1919 / Gompers 1850-1924 / Homestead 1892.7.6 / Pinkerton 约 300 人坐船沿 Monongahela 河 / 13 小时冲突 / 工人 7 死 Pinkerton 3 死 / Frick 实际执行锁厂 Carnegie 在苏格兰 / Gospel of Wealth 1889 / AFL 1886',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
