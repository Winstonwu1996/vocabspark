// ─── The Industrial Revolution 1760-1840 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 工业革命 · The Industrial Revolution 1760-1840
// HS 9-10 · AP World Modern Unit 5 (Industrialization) · AP European History
//
// 3 lens 设计 (per TOPIC_ROADMAP_G6_G12.md B1 + AUTHORING_PIPELINE 第 8/12 条):
//   - arkwright                          (perpetrator-actor) — Richard Arkwright 1732-1792 水力纺纱厂创始人 / 工厂制度 + 童工班发明者
//   - robert-owen                        (lonely-mediator)   — Robert Owen 1771-1858 工厂主转改革者 / New Lanark 模范工厂实验
//   - manchester-child-worker-receiving-end (receiving-end)  — 曼彻斯特棉纺厂 9 岁童工 (composite, 基于 1832 Sadler 报告证词)
//
// 跨 lens micro-detail (N6 anchor):
//   工厂的钟和监工的皮带 (overlooker's strap) — 同一套「让人跟上机器」的工具, 三个位置看见三种东西:
//   - Arkwright: 钟是他的发明的一部分 — 把人调成机器的节奏 (factory discipline)
//   - Owen: 在 New Lanark 他动了那口钟 — 把工时从 13-14 小时砍到 10.5 小时, 12 岁以下不进厂
//   - 童工: 那条皮带落在她背上, 钟敲响她还在机器底下钻
//
// 跨 Topic 锚:
//   - Arkwright 工厂制度 / 蒸汽与机械 → scientific-revolution (Newton 力学 → 机械应用链)
//   - Owen 乌托邦实验 / 社会安全网思想 → reformation-1517 (理想社区实验母题)
//   - 曼彻斯特童工 / 劳动与人身价值 → black-death-1347 (劳动力短缺后人身价值的转变)
//
// defaultLens = 'manchester-child-worker-receiving-end' (受影响者优先 pattern: 儿童 + 被进步代价压在底层一方 + 跨 lens 工厂钟/皮带对位)
//
// STRUCTURE SPEC (long-arc, 12 nodes per lens):
//   - 12 nodes per lens
//   - 220-360 CN chars per node; 只有 2 个 anchor (N6 cross-lens + N11 synthesis) 可到 480 (不到 550); 其余 ≤380
//   - expectsRealAnswer: ONLY N11 (synthesis) + N12 (close) = true; all others false
//   - N6 = normal story anchor (runtime injects the retrieval gate; no pause-prompt wording authored here)
//
// per AUTHORING_PIPELINE.md 铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 4-agent review (TBD): 7thgrader (小 U) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Richard Arkwright (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var arkwrightLens = {
  id: 'arkwright',
  name: 'Richard Arkwright',
  nameCn: '理查德·阿克莱特',
  role: 'perpetrator-actor',
  perspectiveTag: 'factory-system-founder',
  icon: '⚙️',
  description: {
    cn: '他是一个理发师出身、没念过几年书的英格兰人，刚在一条河边盖起了世界上第一栋叫「工厂」的房子。这一遍让你坐进他厂边那间办公室，看他翻开账本算一笔账：用九岁孩子的手接断线，比成年男人便宜十倍。',
    en: 'He is an unschooled Englishman, a former barber, who has just put up beside a river the first building the world will call a factory. This pass sits you in the office beside his mill as he does the arithmetic: a nine-year-old\'s hands cost a tenth of a grown man\'s.',
  },
  storyboard: [
    {
      id: 'ark-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1771 年，英格兰一个叫 Cromford 的小村子，河边。我盖了一栋五层高的石头大楼，里面装满了机器。机器不靠人手转，靠水推一个大水车，水车带动里面几百个纱锭，日夜不停。\n\n这种楼，世界上以前没有。人们后来给它起了个名字：工厂。\n\n我是 Richard Arkwright（理查德·阿克莱特）。我没念过几年书，年轻时走街串巷给人理发、做假发糊口。可现在，方圆几英里的人都来我这栋楼里干活，按我墙上那口钟的钟点上工、下工。\n\n这一遍，你坐进我这个位置。你要看的不是「蒸汽机改变世界」这种课本上的一句话。你要看的是：一栋让财富暴涨的厂房，和一套把人调成机器节奏的规矩，是怎么被同一双手，一起造出来的。',
        en: 'In 1771, by a river in an English village called Cromford, I built a stone building five stories high, packed with machines. The machines did not turn by hand. They turned by water, a great wheel driven by the river, the wheel driving hundreds of spindles inside, day and night without stopping.\n\nThe world had never seen such a building. Later people gave it a name: a factory.\n\nI am Richard Arkwright. I had only a few years of schooling. In my youth I made my living going door to door, cutting hair and making wigs. But now, people for miles around come to work in this building of mine, clocking on and off by the bell on my wall.\n\nThis pass puts you in my seat. What you are here to see is not the textbook line "the steam engine changed the world." What you are here to see is this: how a mill that made fortunes soar, and a set of rules that tuned people to the rhythm of machines, were built by the same hands, together.',
      },
      deliverGoal: 'N1 hook — 1771 Cromford 水力纺纱厂 (五层石楼/水车带几百纱锭日夜不停/世界第一批) + 工厂这个词的诞生 + Arkwright 自我介绍 (没念过书/理发假发出身/方圆几英里来干活按钟点) + 这一遍视角 (不是蒸汽机改变世界这种课本话, 是财富暴涨厂房+把人调成机器节奏的规矩同一双手造出来)',
      engagementHook: '一栋让财富暴涨的厂房，和一套把人调成机器节奏的规矩，是同一双手一起造出来的。「进步」和「代价」能分开算吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我之前，棉布是怎么做出来的。\n\n几百年里，纺纱是家里的活。一家人坐在屋里，妈妈、女儿摇着一架纺车，一根线一根线地纺。慢，但自由——困了歇，活完了就停，没人管你几点干。\n\n这种做法供不上布。英国从印度、从殖民地运来大量棉花，纺纱却跟不上：织布的机器越来越快，纺出来的线总是不够用。\n\n1764 年前后，几样新机器先后出来：有人造出一架能同时纺好几根线的机；又有人把水力接了上去，让机器自己转。\n\n我做的事，是把这些零碎的发明，第一次拼成一个完整的系统：水力 + 机器 + 一栋楼 + 一群按钟点来上班的人。\n\n单是一架快机器，改变不了世界。把机器、动力和人，按一套规矩组织进同一栋楼里——这才是真正改变世界的东西。',
        en: 'First, how cloth was made before me.\n\nFor centuries, spinning was work done at home. A family sat in a room, the mother and daughters turning a spinning wheel, drawing out one thread at a time. Slow, but free. Rest when tired, stop when the work is done, no one telling you what hour to begin.\n\nThat way could not keep up with demand. Britain shipped in huge amounts of cotton from India and the colonies, but spinning lagged behind: the weaving machines grew faster and faster, and there was never enough thread for them.\n\nAround 1764 several new machines appeared one after another: someone built a frame that could spin many threads at once; someone else hooked up water power so the machine turned on its own.\n\nWhat I did was take these scattered inventions and, for the first time, fit them into one whole system: water power, machines, a building, and a group of people who came to work by the hour.\n\nOne fast machine alone does not change the world. Organizing machines, power, and people into one building under one set of rules, that is the thing that truly changes the world.',
      },
      deliverGoal: 'N2 setup — 工业革命前 cottage 纺纱 (家里活/纺车一根线一根线/慢但自由没人管几点干) + 棉花从印度殖民地运来纺纱跟不上织布 + 1764 前后新机器 (多锭纺纱机 + 水力) + Arkwright 把零碎发明拼成完整系统 (水力+机器+一栋楼+按钟点上班的人) + 单架机器改变不了世界, 组织起来才是',
      engagementHook: '一架快机器改变不了世界，把机器、动力和人按一套规矩组织进同一栋楼，才是。你觉得真正改变世界的，是发明本身，还是组织人的方式？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我这套系统，最难的不是机器，是人。\n\n机器不会累、不会偷懒、不分白天黑夜。可人会。我把人请进厂房，最大的麻烦是：他们守不了机器的规矩。\n\n几百年来，乡下人干活看天、看季节、看心情。庄稼忙就忙，农闲就歇，今天累了明天再来。这种节奏，我的厂房一天都受不了——水车一直在转，机器停一刻钟就是赔钱。\n\n所以我做了一件听起来简单、其实最狠的事：我把钟挂上墙。\n\n钟敲响，你必须到；迟到，扣钱；机器转，你就得跟着转，一刻不停，直到钟再敲一次。我用罚款、用大门、用监工，把一群按天过日子的乡下人，硬改造成按分钟过日子的工人。\n\n这就是工厂制度（factory system）的核心：不是机器有多快，是人被驯成了机器的节奏。',
        en: 'The hardest part of my system was not the machines. It was people.\n\nMachines do not tire, do not slack off, do not know day from night. But people do. The greatest trouble in bringing people into the mill was this: they could not keep the discipline of the machine.\n\nFor centuries country folk had worked by the weather, by the season, by their mood. Busy at harvest, idle in the slack months, tired today and back tomorrow. My mill could not stand that rhythm for a single day. The water wheel turned without pause, and a machine stopped for fifteen minutes was money lost.\n\nSo I did a thing that sounds simple and is in truth the hardest of all: I hung a clock on the wall.\n\nThe bell rings, you must be there; late, and you are fined; the machine turns, and you turn with it, without pause, until the bell rings again. With fines, with locked gates, with overlookers, I forced a crowd of country people who lived by the day into workers who lived by the minute.\n\nThis is the heart of the factory system: not how fast the machine is, but that people were broken to the rhythm of the machine.',
      },
      deliverGoal: 'N3 setup — 工厂最难的不是机器是人 (机器不累不偷懒人会) + 乡下人按天/季节/心情干活 vs 厂房水车不停机器停=赔钱 + Arkwright 把钟挂墙 (factory discipline) + 罚款/大门/监工把按天过日子的人改成按分钟过日子的工人 + 工厂制度核心: 不是机器多快是人被驯成机器节奏',
      engagementHook: '我把钟挂上墙，用罚款和监工，把按天过日子的乡下人，硬改成按分钟过日子的工人。这是「效率」，还是把人变成了机器的零件？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你的厂房昼夜不停，缺人。村里的成年男人，有的嫌厂里规矩太死，宁可去种地。可你的机器不能停。\n\n你算了一笔账：那些纺纱机的活，其实不需要多大力气，需要的是小手指能钻进机器底下，把断掉的线接起来。\n\n谁的手最小、最灵、最听话、又最便宜？\n\n孩子。\n\n你开始大量招童工——七岁、八岁、九岁的孩子。有的是附近穷人家送来的，有的干脆是从城里济贫院（workhouse）整批领来的孤儿，签了契约，吃住在你厂边的宿舍。他们工钱只有成年人的几分之一，手又巧，还不敢顶嘴。\n\n你心里清楚：这对你的账本，是天才的一招。\n\n可你也清楚另一件事。一个九岁的孩子，每天在机器边站十二个小时——这件事，你说得出口它「没问题」吗？这一刻你怎么想？',
        en: 'Now you are me.\n\nYour mill runs day and night and is short of hands. The grown men in the village, some find the rules too rigid and would rather farm. But your machines cannot stop.\n\nYou do the arithmetic: the work at the spinning frames does not, in truth, take much strength. What it takes is small fingers that can reach under the machine and join a broken thread back together.\n\nWhose hands are smallest, nimblest, most obedient, and cheapest?\n\nChildren.\n\nYou begin to take on child workers in great numbers, children of seven, eight, nine. Some are sent by poor families nearby; some are orphans brought in by the batch from the city workhouses, bound by contract, fed and housed in dormitories beside your mill. Their wages are a fraction of a grown man\'s, their hands are deft, and they dare not talk back.\n\nYou know in your heart: for your ledger, this is a stroke of genius.\n\nBut you know one other thing too. A nine-year-old standing by a machine twelve hours a day, can you say out loud that this is "fine"? In this moment, what do you think?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 厂房缺人成年男人嫌规矩死 + 算账: 纺纱机活不需力气需小手指接断线 + 谁手最小灵听话便宜=孩子 + 大量招童工 (7-9 岁/穷人家送来/济贫院 workhouse 整批领孤儿/契约/宿舍/工钱几分之一不敢顶嘴) + 对账本是天才一招 + 但九岁每天站机器边十二小时, 你说得出口没问题吗',
      engagementHook: '童工对你的账本是「天才的一招」：手小、灵巧、便宜、不敢顶嘴。可一个九岁孩子每天站机器边十二小时——你说得出口它「没问题」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得替我自己说几句，你才看得清这件事的两面。\n\n在我这套制度之前，穷人家的孩子也没在玩。他们在田里捡石头、在矿洞里推车、在家里挨饿。那个年代，穷人的孩子从小就得干活，这不是我发明的。\n\n我甚至会说：我给了他们饭吃。我厂边的童工有宿舍住、有饭吃、有固定工钱寄回家。比起在乡下挨饿，很多家庭是抢着把孩子送进我的厂的。\n\n这些话，每一句都是真的。\n\n但这些话有一个用处，你要看穿：它们让我自己心里好过。它们把「我每天用一百个九岁孩子，让他们站十二小时」这件事，包装成「我在做好事」。\n\n这就是这一遍最难的地方。我不是一个咬牙切齿的坏人。我是个聪明、勤奋、相信自己在创造进步的人。而正是这样的人，能心安理得地把童工，写进一套高效的制度里。',
        en: 'I must say a few words for myself, so you can see both faces of this thing.\n\nBefore my system, the children of the poor were not at play either. They picked stones in the fields, pushed carts in the mine pits, went hungry at home. In that age the children of the poor worked from a young age; I did not invent that.\n\nI would even say: I gave them food. My child workers had dormitories, had meals, had fixed wages to send home. Compared with going hungry in the countryside, many families fought to send their children into my mill.\n\nEvery one of these statements is true.\n\nBut these statements have a use, and you must see through it: they make me feel better. They wrap the thing "I work a hundred nine-year-olds twelve hours a day" in the words "I am doing a good deed."\n\nThis is the hardest part of this pass. I am not a villain gritting his teeth. I am a clever, hardworking man who believes he is creating progress. And it is exactly such a man who can write child labor into an efficient system with a clear conscience.',
      },
      deliverGoal: 'N5 story — Arkwright 替自己辩护两面 (制度前穷孩子也没玩/田里捡石头矿洞推车挨饿/穷孩子从小干活不是他发明的 + 我给他们饭吃宿舍工钱寄回家/家庭抢着送) + 每句都真但用处是让自己好过/包装成做好事 + 这一遍最难: 我不是咬牙切齿坏人, 是聪明勤奋相信自己创造进步的人, 正是这种人能心安理得把童工写进高效制度',
      engagementHook: '「我给了他们饭吃」——每句都是真的，可它们的用处，是让我自己心安理得地用童工。一句真话被用来让自己好过时，它还算诚实吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我厂房里最关键的一样东西，不是机器，是那口钟，和监工手里那条皮带。\n\n钟定下节奏：什么时候上工、什么时候吃饭、什么时候才能停。皮带，是用来对付跟不上钟的人——尤其是困到睡着的孩子。监工（overlooker）在排与排的机器之间走，看见哪个孩子手慢了、打瞌睡了，皮带就抽下去，把人「叫醒」，让他跟上机器。\n\n这套钟加皮带，是我整个系统的心脏。没有它，一群人凑在机器边也还是一盘散沙；有了它，几百个人就能像一台机器一样，分秒不差地一起转。\n\n但你要记住这一刻。同样这口钟、这条皮带，几十年后会出现在曼彻斯特一家棉纺厂里，落在一个九岁女孩的背上——她在我设计的这套节奏底下，每天钻进机器十几个小时。\n\n我在 Cromford 把钟挂上墙的时候，我以为我发明的是「效率」。我没想到，我同时也发明了那条皮带要打的人。同一套工具，在我手里是「制度」，在她背上是「伤」。（她那一遍，你可以亲自站到皮带的另一头去听。）',
        en: 'The most important thing in my mill was not the machine. It was that clock, and the strap in the overlooker\'s hand.\n\nThe clock set the rhythm: when to begin, when to eat, when at last you may stop. The strap was for dealing with those who could not keep up with the clock, above all the children who fell asleep. The overlooker walked between the rows of machines, and where he saw a child\'s hands slow or the head nod, down came the strap to "wake" them and make them keep up with the machine.\n\nThis pairing, clock and strap, was the heart of my whole system. Without it, a crowd by the machines is still loose sand; with it, hundreds of people can turn together like one machine, to the second.\n\nBut remember this moment. This same clock, this same strap, would appear decades later in a cotton mill in Manchester, falling on the back of a nine-year-old girl, who, under this rhythm I designed, reached into the machine twelve hours and more a day.\n\nWhen I hung the clock on the wall at Cromford, I thought what I had invented was "efficiency." I did not think that I had at the same time invented the person the strap would strike. The same tool, in my hands a "system," on her back a "wound." (Her pass, you can stand at the other end of the strap and hear it yourself.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 厂房关键不是机器是钟 + 监工 overlooker 手里皮带 (strap, 对付跟不上钟的尤其困到睡着的孩子/抽醒让跟上机器) + 钟+皮带是系统心脏 (没它一盘散沙有它几百人像一台机器分秒不差) + 跨 lens 对位: 同一口钟同一条皮带几十年后曼彻斯特棉纺厂落在 9 岁女孩背上 (童工 lens) + Arkwright 以为发明的是效率没想到同时发明了皮带要打的人 / 同一套工具他手里是制度她背上是伤',
      engagementHook: '我以为我发明的是「效率」。我没想到，同一口钟、同一条皮带，几十年后会落在一个九岁女孩的背上。同一套工具，在我手里是「制度」，在她背上是「伤」——你怎么看待这种距离？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这套系统赚到的钱，超出所有人想象。\n\n我从一个理发匠，变成了 Sir Richard Arkwright——国王封了我爵位。我死的时候，是英国最有钱的平民之一。我的厂被人模仿，复制到一座又一座河谷，再后来接上蒸汽机，搬进城市。一栋栋工厂，像我 Cromford 那栋楼的子孙，铺满了英格兰北部。\n\n而这一切的能量，最后追到一个源头：人开始懂得怎么把自然的力量（先是水，然后是蒸汽）驯服来给机器干活。\n\n这条「科学搞懂自然 → 自然推动机器」的链子，往前接，接的是一两代人之前那场科学革命：有人搞清了力、压强、运动的规律。\n\n蒸汽机不是凭空冒出来的。它站在一群想搞懂「世界怎么运转」的人肩膀上。我做的，是把他们脑子里的规律，变成河谷里一栋栋赚钱的厂。',
        en: 'The money my system made was beyond anyone\'s imagining.\n\nFrom a barber I became Sir Richard Arkwright. The king gave me a knighthood. When I died I was one of the richest commoners in Britain. My mills were copied, reproduced in valley after valley, and later hooked up to steam engines and moved into the cities. Mill after mill, like the children of my building at Cromford, spread across the north of England.\n\nAnd the energy behind all of it traces, in the end, to one source: people had begun to understand how to tame the forces of nature, water, and then steam, to do the machines\' work.\n\nThis chain, "science understands nature, nature drives the machine," runs back to the scientific revolution a generation or two before me, when people worked out the laws of force, pressure, and motion.\n\nThe steam engine did not appear out of nowhere. It stood on the shoulders of people who wanted to understand "how the world works." What I did was turn the laws in their heads into money-making mills, one after another, up and down the valleys.',
      },
      deliverGoal: 'N7 story — Arkwright 赚到超出想象的钱 (理发匠→Sir 爵位/死时最有钱平民之一/厂被复制到河谷再接蒸汽机搬进城市/铺满英格兰北部) + 能量源头: 人懂得驯服自然力 (水→蒸汽) 给机器干活 + 「科学搞懂自然→自然推动机器」链子接到 scientific-revolution (力/压强/运动规律, 跨 Topic 锚) + 蒸汽机站在想搞懂世界怎么运转的人肩膀上',
      engagementHook: '蒸汽机不是凭空冒出来的——它站在一群只想搞懂「世界怎么运转」的科学家肩膀上。一个纯粹的好奇心，是怎么一步步变成河谷里赚钱的工厂的？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我活着的时候，没人能管得了我厂里怎么对待童工。\n\n那个年代，政府的想法很简单：工厂是私人的，老板爱怎么用工人，是老板自己的事。法律不进厂门。\n\n直到我死后几十年，外面的世界才开始往厂里看。1832 年，英国议会派了一个委员会，由一个叫 Sadler 的议员牵头，专门调查工厂里的童工到底过什么日子。他们把工人、医生、监工一个个叫来作证，把证词一字不漏记下来，出了一份厚厚的报告，后人叫它 Sadler 报告（Sadler Report）。\n\n那份报告里，全是我这套制度的真实代价：孩子每天工作十二到十六小时；困得在机器边睡着；被监工的皮带打醒；手指被卷进机器；脊柱因为长期弯腰变了形。\n\n我没活着看见那份报告。但报告里写的那套规矩（钟、皮带、十几个小时的班），是我亲手立下的。\n\n（那些证词背后的孩子是什么样，你换到她那一遍，会一个一个听见。）',
        en: 'While I lived, no one could control how my mill treated its child workers.\n\nIn that age the government\'s thinking was simple: a factory is private property, and how an owner uses his workers is the owner\'s own affair. The law did not come through the mill gate.\n\nNot until decades after my death did the outside world begin to look inside. In 1832 the British Parliament sent a committee, led by a member of Parliament named Sadler, to investigate exactly what life was like for the children in the factories. They called in workers, doctors, and overlookers one by one to testify, set down their words without leaving a line out, and produced a thick report, which later people called the Sadler Report.\n\nIn that report was the true cost of my system, all of it: children working twelve to sixteen hours a day; falling asleep at the machines from exhaustion; struck awake by the overlooker\'s strap; fingers caught in the machinery; spines deformed by years of bending.\n\nI did not live to see that report. But the rules it described, the clock, the strap, the shifts of twelve hours and more, were the rules I had set down with my own hand.\n\n(What the children behind that testimony were like, you will hear, one by one, when you switch to her pass.)',
      },
      deliverGoal: 'N8 story — Arkwright 活着时没人管厂里怎么对童工 (工厂私人/法律不进厂门) + 死后几十年 1832 议会派委员会 Sadler 议员牵头调查童工 + 叫工人/医生/监工作证一字不漏出 Sadler 报告 (Sadler Report) + 报告里全是制度真实代价 (12-16 小时/机器边睡着/皮带打醒/手指卷进机器/脊柱变形) + Arkwright 没活着看见但那套规矩是他立的 + 桥到童工 lens',
      engagementHook: '我没活着看见 1832 年那份揭露童工真相的报告，但里面那套钟、皮带、十几小时的班，是我亲手立的。一套制度造成的伤害，发明它的人就能撇清责任吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得讲一个我没料到的后果。\n\n我以为我造的只是一栋赚钱的厂。可工厂这东西一旦铺开，它重新排了整个社会。\n\n以前，人散在乡下，住在自家小屋，种自家的地。可工厂要把人集中到机器边，于是成千上万的人离开土地，挤进工厂所在的城市——曼彻斯特、利兹这些地方，几十年里人口翻了好几倍。\n\n这些城市长得太快，没人管：一家几口挤一间没窗的屋，污水横流，没有干净水，霍乱一来成片地死。工人住在工厂的烟囱底下，呼吸着黑烟，平均寿命比乡下还短。\n\n还有一件更早发生的事，把人推进了城。从我之前那几代起，英国的地主们开始把原本大家共用的公地圈起来，归自己私有，这叫圈地（enclosure）。失去公地的农民种不了地，只能往城里走，正好成了我厂里的工人。\n\n圈地把人从土地上赶下来，工厂在城里接住他们。这两件事，一头一尾，重排了几百万人的活法。',
        en: 'I must tell of a consequence I did not foresee.\n\nI thought I was only building a mill that made money. But once the factory spread, it rearranged the whole of society.\n\nBefore, people were scattered in the countryside, living in their own cottages, farming their own land. But the factory had to gather people to the machines, and so tens of thousands left the land and crowded into the cities where the factories stood, Manchester, Leeds, places whose populations multiplied several times over in a few decades.\n\nThese cities grew too fast, with no one minding them: a whole family in one windowless room, sewage in the streets, no clean water, cholera carrying off people in droves. Workers lived under the factory chimneys, breathing the black smoke, their average lifespan shorter than in the countryside.\n\nAnd one thing happened earlier still that pushed people into the cities. From a few generations before me, the landlords of England began fencing in the common land that everyone had once shared, taking it as private property. This was called enclosure. Farmers who lost the commons could not farm, and had nowhere to go but the city, where they became, conveniently, the workers in my mill.\n\nEnclosure drove people off the land; the factory caught them in the city. These two things, at either end, rearranged how millions of people lived.',
      },
      deliverGoal: 'N9 story — Arkwright 没料到的后果: 工厂重排整个社会 + 以前人散在乡下种自家地 vs 工厂集中人到机器边/成千上万离开土地挤进城市 (曼彻斯特/利兹人口翻几倍) + 城市长太快没人管 (一家挤没窗屋/污水/没干净水/霍乱/烟囱底下黑烟/寿命比乡下短) + enclosure 圈地 (地主把公地圈成私有/失地农民进城成工人) + 圈地赶人下土地工厂城里接住, 一头一尾重排几百万人活法',
      engagementHook: '圈地把人从土地上赶下来，工厂在城里接住他们——这两件事一头一尾，重排了几百万人的活法。当一项「进步」连人住哪、怎么活都改了，谁该为那些代价负责？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉到今天，再看我造的这套东西。\n\n你身上穿的衣服，是工厂里做出来的。你用的手机、你坐的车、你家里几乎每一样东西，都来自工厂这套「把人和机器组织进同一栋楼，按节奏生产」的系统。我在 Cromford 立下的那套规矩，是这一切的祖宗。\n\n从我那栋楼开始，人类的生产力涨到了之前几千年都到不了的高度。今天全世界这么多人能吃饱、能看病、能识字，跟工业革命撑起的物质丰裕，分不开。\n\n这是真的。\n\n可同样真的是另一半：第一代工厂工人，用他们的肺、他们的脊柱、他们孩子的童年，付了这套系统的「开办费」。曼彻斯特一个九岁童工的十二小时，和今天你随手买到的一件便宜 T 恤，是同一条链子的两端。\n\n进步不是免费的。账单一直存在，只是被付账的人，往往不是享受好处的人。',
        en: 'Pull the lens to today, and look again at the thing I built.\n\nThe clothes on your back were made in a factory. The phone you use, the car you ride in, nearly everything in your home comes from this system of the factory: "organize people and machines into one building and produce by the rhythm." The rules I laid down at Cromford are the ancestor of all of it.\n\nFrom that building of mine, human productive power rose to a height it had not reached in thousands of years before. That so many people in the world today can eat their fill, see a doctor, and read, is inseparable from the material plenty the Industrial Revolution holds up.\n\nThis is true.\n\nBut the other half is just as true: the first generation of factory workers paid the "startup cost" of this system with their lungs, their spines, the childhoods of their children. The twelve hours of a nine-year-old in Manchester, and the cheap T-shirt you buy without a thought today, are two ends of the same chain.\n\nProgress is not free. The bill has always been there. It is only that the one who pays it is often not the one who enjoys the benefit.',
      },
      deliverGoal: 'N10 zoom-out + topic connection — 拉到今天看 Arkwright 造的系统 + 你穿的衣服/手机/车/家里每样都来自工厂这套「人+机器组织进一栋楼按节奏生产」/Cromford 规矩是祖宗 + 人类生产力涨到几千年没到过的高度/今天人能吃饱看病识字跟工业革命物质丰裕分不开 (真的) + 但第一代工人用肺/脊柱/孩子童年付开办费 + 曼彻斯特 9 岁童工十二小时和今天便宜 T 恤同一条链两端 + 进步不免费/付账的往往不是享受好处的人',
      engagementHook: '曼彻斯特一个九岁童工的十二小时，和今天你随手买到的一件便宜 T 恤，是同一条链子的两端。进步从来不是免费的——你觉得，谁在付那笔账？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是创造现代世界的人。我把零碎的机器组织成工厂，立下了一套至今还在养活全世界的生产制度。没有我这栋楼，人类不会这么快走出几千年的贫困，今天你享受的物质丰裕里，有我的一份功劳。一个理发匠靠脑子和勤奋改变了世界，这本身就是一个时代的奇迹。\n\n另一种说法：我是把剥削写进制度的人。同一双手，立下了钟、皮带和十几小时的童工班。我设计的不是「效率」加上「碰巧的童工」——童工就长在我这套效率的骨头里。我让进步的第一笔账单，落在了一群最没力量反抗的孩子身上，自己却心安理得，因为我相信我在做好事。\n\n这两边不是「功劳加污点」。是同一套发明的两面——同一份天才，同一双手。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a man who created the modern world. I organized scattered machines into the factory and laid down a system of production that still feeds the world today. Without my building, humanity would not have climbed out of thousands of years of poverty so fast, and in the material plenty you enjoy today there is a share that is mine. A barber who changed the world by his mind and his industry, that itself is the marvel of an age.\n\nThe other view: I was a man who wrote exploitation into a system. The same hands laid down the clock, the strap, and the children\'s shifts of twelve hours and more. What I designed was not "efficiency" plus "child labor by accident." Child labor grew in the very bones of my efficiency. I let the first bill of progress fall on the children least able to fight back, and kept my own conscience clear, because I believed I was doing good.\n\nThese are not "achievement and stain." They are two faces of the same invention, the same genius, the same hands.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (创造现代世界/把机器组织成工厂/立下养活全世界的生产制度/理发匠靠脑子改变世界) / 另一种说法 (把剥削写进制度/同一双手立下钟皮带童工班/童工长在效率骨头里/让进步第一笔账落在最没力量反抗的孩子身上/还心安理得) / 同一套发明两面同一双手 / 想 30 秒',
      engagementHook: '创造现代世界的人，和把剥削写进制度的人——是同一双手。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'ark-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个开端？\n\n一套养活了全世界的生产制度，和一群被皮带打醒的九岁孩子，长在同一栋厂房里、同一双手下。这两件事不是分开的两本账，是同一项发明的同一页。把它们放上同一个天平，你怎么称这个开端？\n\n再想一步。今天你用的东西（手机、衣服、便宜的零食）背后多半还有一条你看不见的链子，链子另一头是某个工厂里、为很低的工钱干很长时间的人。\n\n那时候，你会怎么做？你会因为「东西便宜又好用」就当那条链子不存在，还是会去想一想：这件东西的真实价钱，是不是有人替你付了一部分，而那个人，你从来没见过？',
        en: 'Having walked my whole life, how would you judge a beginning like this?\n\nA system of production that fed the world, and a crowd of nine-year-olds struck awake by the strap, grew in the same mill, under the same hands. These are not two separate ledgers. They are the same page of the same invention. Put them on the same scale. How do you weigh this beginning?\n\nThen take one more step. The things you use today, your phone, your clothes, cheap snacks, mostly still have a chain behind them you cannot see, and at the other end of the chain is someone in some factory, working long hours for very low pay.\n\nWhen that is so, what will you do? Will you, because the thing is "cheap and works well," act as if that chain does not exist? Or will you stop and think: the true price of this thing, has part of it been paid by someone you have never met?',
      },
      deliverGoal: 'N12 close — 评价开端 (养活全世界的生产制度 vs 被皮带打醒的九岁孩子, 同一栋厂房同一双手/同一项发明同一页/放同一天平怎么称) + transfer「今天你用的东西背后看不见的链子 (手机/衣服/便宜零食, 另一头是工厂里低工钱长时间干活的人)」+ 你会当链子不存在还是想想真实价钱是不是有人替你付了, 那人你从没见过',
      engagementHook: '一边是养活全世界的生产制度，一边是被皮带打醒的九岁孩子，长在同一栋厂房里。你会怎么评价这样一个开端？今天你手里那件「便宜又好用」的东西，它真实的价钱，是不是有人替你付了一部分？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Robert Owen (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var robertOwenLens = {
  id: 'robert-owen',
  name: 'Robert Owen',
  nameCn: '罗伯特·欧文',
  role: 'lonely-mediator',
  perspectiveTag: 'reformer-mill-owner',
  icon: '🏘️',
  description: {
    cn: '他自己就是靠工厂赚钱的厂主，可他刚顶住合伙人买下苏格兰的 New Lanark 棉纺厂。这一遍让你跟他站在五百多个童工面前，看一个想「钱也赚到、孩子也活得像人」的厂主，在只认利润的系统里能走多远。',
    en: 'He owns mills himself, but has just bought New Lanark against his partners\' wishes. This pass stands you with him before five hundred child workers, watching how far a man who wants both profit and a humane childhood can go in a system that knows only profit.',
  },
  storyboard: [
    {
      id: 'ro-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1800 年，苏格兰一个叫 New Lanark 的山谷，一家大棉纺厂。我刚接手它。\n\n厂里有两千多个工人，其中五百多个是孩子——很多是从济贫院（workhouse）整批领来的孤儿，七八岁就在机器边干十三个小时。这就是那个年代一家「正常」工厂的样子。\n\n我是 Robert Owen（罗伯特·欧文）。我自己也是个厂主——我靠工厂赚钱，跟别的厂主一样。\n\n但我打算做一件别的厂主觉得我疯了的事：我要证明，一家工厂可以不靠压榨童工、不靠十几小时的班，照样赚钱，而且赚得更好。\n\n这一遍，你坐进我这个位置。你不是被工厂碾过的工人，也不是只认利润的老板。你是夹在中间那个人——想在一个残酷的系统里，做一点好事。你会发现，这是全场最难站的位置。',
        en: 'In 1800, in a Scottish valley called New Lanark, a great cotton mill. I had just taken it over.\n\nIt held more than two thousand workers, over five hundred of them children, many of them orphans brought in by the batch from the workhouses, working thirteen hours at the machines at seven or eight years old. This was what a "normal" factory of that age looked like.\n\nI am Robert Owen. I am an owner myself. I make my money from the factory, like other owners.\n\nBut I meant to do a thing the other owners thought made me mad: I would prove that a factory could turn a profit, and a better one, without squeezing child workers, without shifts of twelve hours and more.\n\nThis pass puts you in my seat. You are not the worker the factory ground down, nor the boss who knows only profit. You are the one caught in between, trying to do a little good inside a cruel system. You will find it is the hardest seat in the house to hold.',
      },
      deliverGoal: 'N1 hook — 1800 苏格兰 New Lanark 山谷大棉纺厂 Owen 刚接手 + 两千多工人五百多孩子 (济贫院 workhouse 孤儿/七八岁机器边干十三小时/那年代正常工厂样子) + Owen 自我介绍 (自己也是厂主靠工厂赚钱跟别人一样) + 要做别人觉得疯的事 (证明不压榨童工不长班照样赚钱赚更好) + 这一遍视角 (夹中间想在残酷系统做点好事/全场最难站的位置)',
      engagementHook: '我也是个靠工厂赚钱的老板，却想证明：不压榨童工，工厂也能赚钱。这听起来像「又要马儿跑又要马儿不吃草」——你信一个老板能真心想对工人好吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ro-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是从哪儿来的，你才懂我为什么这么想。\n\n我 1771 年生在威尔士一个小镇，家里开个小铺子。我十岁就离开家，出门当学徒——那个年代穷人家的孩子，这很正常。\n\n我没什么文凭，可我爱琢磨、爱读书，又肯吃苦。二十岁出头，我已经在曼彻斯特管着一家几百人的大棉纺厂了。我亲眼看过工厂里的一切：机器怎么转，账怎么算，工人怎么活，孩子怎么累垮。\n\n看多了，我心里慢慢长出一个跟所有人都不一样的想法：人不是天生坏的、懒的、笨的。一个人变成什么样，是被他从小生活的环境塑造的。\n\n如果一个孩子在污水横流、没书读、十三小时苦工里长大，他当然又病又凶又麻木。可如果你给他干净的住处、给他学上、给他像样的工时——同一个孩子，会长成完全不同的人。\n\n这个想法，是我后来一切实验的种子。',
        en: 'First, where I came from, so you understand why I think this way.\n\nI was born in 1771 in a small Welsh town, where my family kept a little shop. I left home at ten to be an apprentice, which, for a poor child of that age, was nothing unusual.\n\nI had no diplomas, but I loved to think, to read, and I was willing to work hard. By my early twenties I was managing a great cotton mill of several hundred people in Manchester. I saw everything in the factory with my own eyes: how the machines turned, how the books were kept, how the workers lived, how the children broke down.\n\nSeeing enough of it, a thought grew in me unlike anyone else\'s: people are not born bad, or lazy, or stupid. What a person becomes is shaped by the surroundings he grows up in.\n\nIf a child grows up amid running sewage, with no books and thirteen hours of hard labor, of course he turns out sick, fierce, and numb. But if you give him a clean place to live, a school to attend, decent hours, the same child will grow into a wholly different person.\n\nThis thought was the seed of everything I would later try.',
      },
      deliverGoal: 'N2 setup — Owen 出身 (1771 威尔士小镇家里开铺子/十岁离家当学徒穷孩子正常) + 没文凭爱琢磨爱读书肯吃苦/二十出头管曼彻斯特几百人棉纺厂/亲眼看过工厂一切 (机器转/账/工人活/孩子累垮) + 长出跟所有人不一样的想法: 人不是天生坏懒笨, 是被环境塑造的 + 污水没书读十三小时长大当然病凶麻木 vs 给干净住处/学上/像样工时同一孩子长成不同人 + 这想法是一切实验的种子',
      engagementHook: '我相信：人不是天生坏的、懒的、笨的，一个人变成什么样，是被他从小的环境塑造的。如果这是真的，那一个「坏孩子」的错，该算在谁头上？',
      expectsRealAnswer: false,
    },
    {
      id: 'ro-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '1800 年，我说服了几个合伙人，一起买下苏格兰 New Lanark 的厂，我亲自去管。\n\n我接手时，那地方惨不忍睹。工人喝酒、偷东西、打架，孩子又瘦又病。别的厂主看了会说：你看，穷人就是这副德行。\n\n但我用我那套想法去看：不是这些人坏，是这个环境把人逼成这样。要改人，先得改环境。\n\n我开始动手。一样一样来：\n\n我把工人挤的破屋翻修干净，修了路，开了一家卖便宜好货的商店，不让奸商坑工人。我立下规矩，禁止打骂工人——尤其禁止用皮带打孩子。\n\n这些事在今天看很普通。可在 1800 年，一个厂主自己花钱给工人改善生活，别人当我是傻子：钱不是这么花的，工人是用来榨的，不是用来疼的。\n\n我顶着这种眼光，一步步把 New Lanark 改成一个不一样的地方。但最硬的一仗，还在后头——关于那口钟，和那群孩子。',
        en: 'In 1800 I talked several partners into buying the mill at New Lanark in Scotland together, and I went to manage it myself.\n\nWhen I took it over, the place was a wretched sight. The workers drank, stole, fought; the children were thin and sick. Other owners would look and say: there, that is just how the poor are.\n\nBut I looked through my own idea: it is not that these people are bad, it is that this environment forces them to be so. To change the people, you must first change the environment.\n\nI set to work, one thing at a time.\n\nI repaired the workers\' cramped, broken houses and made them clean, mended the roads, opened a store that sold good goods cheaply so no swindler could cheat the workers. I laid down a rule against beating and cursing the workers, and above all against using the strap on the children.\n\nThese things look ordinary today. But in 1800, an owner spending his own money to better his workers\' lives, others took me for a fool: this is not how money is spent, workers are to be squeezed, not cared for.\n\nI bore that gaze and changed New Lanark, step by step, into a different sort of place. But the hardest fight was still ahead, over that clock, and that crowd of children.',
      },
      deliverGoal: 'N3 setup — 1800 Owen 说服合伙人买 New Lanark 亲自管 + 接手惨 (工人喝酒偷东西打架/孩子瘦病/别的厂主说穷人就这德行) + Owen 用想法看: 不是人坏是环境逼的/改人先改环境 + 动手一样一样 (翻修破屋/修路/开便宜好货商店不让奸商坑/禁打骂工人尤其禁皮带打孩子) + 今天普通但 1800 厂主自己花钱改善被当傻子 (工人是用来榨不是疼的) + Owen 顶眼光改 New Lanark 但最硬一仗还在后头 (钟和孩子)',
      engagementHook: '别的厂主说「工人是用来榨的，不是用来疼的」，我自己花钱给工人改善生活，他们当我是傻子。在所有人都觉得你疯了的时候，坚持做你认为对的事，要靠什么撑住？',
      expectsRealAnswer: false,
    },
    {
      id: 'ro-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你面前是 New Lanark 厂里那五百多个孩子。最小的七八岁，每天在机器边十三个小时。前任老板就是这么干的，整个英国的工厂都是这么干的。\n\n你心里清楚两件互相打架的事。\n\n第一件：这些孩子不该这样活。他们该上学，该睡够，该有童年。\n\n第二件：你也是个厂主。你有合伙人，他们出了钱，等着分红。你少用童工、少开工时，就意味着账面上少赚钱。你的合伙人会问：你拿我们的钱，去做慈善？\n\n你站在这两件事中间。往工人那边多走一步，合伙人翻脸，你可能被踢出 New Lanark，那时候这点好事一样保不住。往利润那边多走一步，你就跟你看不起的那些厂主一模一样了。\n\n这一刻，你怎么选？你敢动那口钟、动那群孩子的命运到什么程度——又不至于让整个实验当场垮掉？',
        en: 'Now you are me.\n\nBefore you stand the five hundred and more children in the New Lanark mill. The smallest seven or eight years old, thirteen hours a day at the machines. The previous owner did it this way; every factory in Britain did it this way.\n\nYou know clearly two things that fight each other.\n\nThe first: these children should not live like this. They should be in school, should sleep enough, should have a childhood.\n\nThe second: you too are an owner. You have partners; they put up the money and wait for their dividends. Use fewer child workers, cut the hours, and that means less money on the books. Your partners will ask: you take our money to do charity?\n\nYou stand between these two things. Step one pace toward the workers, and the partners turn on you, and you may be thrown out of New Lanark, and then this little good cannot be held either. Step one pace toward profit, and you become exactly like the owners you despise.\n\nIn this moment, how do you choose? How far do you dare move that clock, move the fate of those children, without bringing the whole experiment down on the spot?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 面前 New Lanark 五百多孩子 (最小七八岁/机器边十三小时/前任和全英国工厂都这么干) + 两件互相打架: 1) 孩子不该这样活 (该上学睡够有童年) 2) 你也是厂主有合伙人出钱等分红/少童工少工时=少赚钱/合伙人问你拿钱做慈善 + 你站中间: 往工人多走一步合伙人翻脸被踢出实验保不住, 往利润多走一步跟你看不起的厂主一样 + 怎么选/敢动钟动孩子命运到什么程度又不让实验当场垮',
      engagementHook: '往工人那边多走一步，合伙人翻脸，你被踢出去，好事一样保不住；往利润那边多走一步，你就跟你看不起的厂主一模一样了。夹在中间，你能走多远？',
      expectsRealAnswer: false,
    },
    {
      id: 'ro-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我没有一步到位。我学会了一个改革者的本事：在能动的范围里，把每一寸都用尽。\n\n关于工时：当时标准是十三、十四个小时。我没敢一下砍到八小时——那样合伙人立刻翻脸。我先砍到十小时半。听起来不多？对一个七岁孩子，每天少站三个小时机器，是天大的事。\n\n关于幼童：我立了一条硬规矩——十岁以下的孩子，不准进车间干活。这在当时几乎是异端。\n\n那他们干什么？我盖了一所学校，把这些孩子送去上学。这是世界上最早的工厂子弟学校之一，连还不会走路的幼儿都有地方托管，让他们的母亲能安心上工。\n\n我没有废掉工厂，也没有废掉那口钟。我做的是：在钟和孩子之间，硬塞进去一道缓冲——少三小时工时，一所学校，一条「十岁以下不进厂」的线。\n\n改革者的活，从来不是「推翻一切」。是在一个你改不动的大系统里，为最弱的人，一寸一寸抠出一点喘息的空间。',
        en: 'I did not do it all in one step. I learned the reformer\'s craft: within what can be moved, use up every inch.\n\nOn hours: the standard then was thirteen, fourteen hours. I did not dare cut straight to eight, the partners would have turned on me at once. I cut first to ten and a half. Not much, it sounds? For a seven-year-old, three fewer hours at the machine each day is an enormous thing.\n\nOn the youngest: I laid down a hard rule, no child under ten allowed to work in the workrooms. In that day this was nearly heresy.\n\nThen what did they do? I built a school and sent these children to it. It was one of the earliest factory schools in the world, and even infants too young to walk had a place to be minded, so their mothers could work with easy hearts.\n\nI did not abolish the factory, nor abolish the clock. What I did was force, between the clock and the children, a cushion: three fewer hours, a school, a line of "no one under ten in the mill."\n\nThe reformer\'s work is never "overturn everything." It is to pry, inch by inch, a little breathing room for the weakest, inside a great system you cannot move.',
      },
      deliverGoal: 'N5 story — Owen 没一步到位/改革者本事: 能动范围里把每一寸用尽 + 工时 (标准 13-14 小时/没敢一下砍到 8 怕合伙人翻脸/先砍到 10.5/对七岁孩子少站三小时是天大的事) + 幼童 (硬规矩十岁以下不准进车间/当时近异端) + 盖学校送孩子上学 (世界最早工厂子弟学校之一/幼儿托管让母亲安心上工) + 没废工厂没废钟, 在钟和孩子之间塞缓冲 (少三小时/学校/十岁线) + 改革者活不是推翻一切, 是在改不动的系统里为最弱的人一寸寸抠喘息空间',
      engagementHook: '我没敢把工时一下砍到八小时，先砍到十小时半。对一个七岁孩子，每天少站三个小时机器，是天大的事。「一寸一寸地改」和「一步到位地改」，哪个更难，哪个更有用？',
      expectsRealAnswer: false,
    },
    {
      id: 'ro-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我厂里也有那口钟，那条监工的皮带（strap）。整个工业革命，都是靠这套东西把人调成机器的节奏。\n\n但在 New Lanark，我对这套东西动了手脚——而且动的方法，外人觉得很怪。\n\n皮带，我直接禁了：监工不准用皮带打孩子。可你不打，怎么让孩子守规矩？我发明了一个小东西，挂在每个工人机器旁边，一根四面颜色不同的小木块。我管它叫「无声的监工」。它每天根据工人前一天的表现翻一面颜色：黑、蓝、黄、白，从最差到最好。没有人挨打，可每个人都看得见自己昨天干得怎么样。\n\n我用「让人想做好」，换掉了「打到人不敢做坏」。\n\n这就是我和那条皮带的关系。Arkwright 那一代人，把钟和皮带当成系统的心脏；我没法拆掉这颗心脏，但我试着，让它少流一点血。\n\n可你要看清这件事的边界。我动得了我自己这一家厂的钟和皮带。我厂墙外面，曼彻斯特那些工厂里，那条皮带照样每天落在童工的背上。我救得了 New Lanark 这两千人。救不了那墙外的几十万人。一个改革者的善意，常常就停在自己厂房的墙根下。（那墙外的孩子是什么样，你换到她那一遍会看见。）',
        en: 'My mill, too, had that clock, that overlooker\'s strap. The whole Industrial Revolution tuned people to the machine\'s rhythm with these things.\n\nBut at New Lanark I tampered with them, and the way I did it struck outsiders as strange.\n\nThe strap, I simply banned: no overlooker might use the strap on a child. But if you do not beat them, how do you keep the children to the rules? I invented a small thing, hung beside each worker\'s machine, a little wooden block with a different color on each of its four faces. I called it the "silent monitor." Each day it turned to a color by the worker\'s showing the day before: black, blue, yellow, white, worst to best. No one was struck, yet everyone could see how they had done the day before.\n\nI replaced "beat them until they dare not do wrong" with "make them want to do well."\n\nThis is my relationship with that strap. Arkwright\'s generation made the clock and strap the heart of the system; I could not cut out that heart, but I tried to make it bleed a little less.\n\nBut see the edge of this thing clearly. I could move the clock and strap of my own one mill. Beyond my walls, in the factories of Manchester, that strap still fell on the backs of child workers every day. I could save these two thousand at New Lanark. I could not save the hundreds of thousands beyond the wall. A reformer\'s good will often stops right at the foot of his own mill wall. (What the children beyond the wall were like, you will see when you switch to her pass.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Owen 厂里也有钟+监工皮带 strap (整个工业革命靠它调人到机器节奏) + 在 New Lanark 动手脚: 禁皮带 (不准打孩子) + 发明 silent monitor 无声的监工 (四面不同色小木块/按前一天表现翻面黑蓝黄白最差到最好/没人挨打但看得见自己昨天干得怎样) + 用「让人想做好」换掉「打到不敢做坏」 + Arkwright 一代把钟皮带当系统心脏/Owen 拆不掉但让它少流点血 + 边界: 动得了自己一家厂, 墙外曼彻斯特皮带照样落童工背 + 救得了 New Lanark 两千人救不了墙外几十万/改革者善意常停在自己厂房墙根下 + 桥到童工 lens',
      engagementHook: '我禁了打孩子的皮带，可我厂墙外面，曼彻斯特那些工厂里，那条皮带照样每天落在童工的背上。一个改革者的善意，常常停在自己厂房的墙根下——你觉得这是失败，还是已经尽力了？',
      expectsRealAnswer: false,
    },
    {
      id: 'ro-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得告诉你一个让所有人意外的结果：New Lanark 赚钱了。\n\n我砍了工时、禁了童工、盖了学校、修了房子——按所有厂主的算法，我应该亏得一塌糊涂。可结果相反。工人不再病恹恹、不再酗酒打架，他们身体好了、心气顺了，干活反而又稳又快。废品少了，旷工少了，能干的人都想来 New Lanark 上工。\n\n几年下来，New Lanark 不光没亏，还成了全英国数得着的赚钱工厂之一。\n\n这件事，是我一辈子最想让人看见的证据：善待工人和赚钱，不是天生对头。把人当人，本身就能让工厂转得更好。\n\n消息传开，全欧洲的人都跑来看。贵族、政客、改革家、连俄国的沙皇派的人都来过。New Lanark 成了一个活的展览：原来工厂可以是另一个样子。\n\n我以为，我只要把这个样板做出来，全世界的厂主都会照着学。我太天真了。',
        en: 'I must tell you a result that surprised everyone: New Lanark made money.\n\nI cut the hours, banned the youngest children, built a school, mended the houses. By every owner\'s reckoning I should have run a ruinous loss. The result was the opposite. The workers were no longer sickly, no longer drunk and fighting; their bodies grew sound, their spirits eased, and they worked, instead, steadily and fast. Waste fell, absence fell, every able hand wanted to work at New Lanark.\n\nWithin a few years New Lanark was not only no loss but one of the most profitable mills in all Britain.\n\nThis was the proof I most wanted shown all my life: treating workers well and making money are not born enemies. To treat people as people can itself make the factory run better.\n\nWord spread, and all of Europe came to see. Nobles, politicians, reformers, even men sent by the Russian tsar. New Lanark became a living exhibition: a factory, it turned out, could be another sort of thing.\n\nI thought that once I had made this model, the owners of the whole world would copy it. I was far too naive.',
      },
      deliverGoal: 'N7 story — 让所有人意外: New Lanark 赚钱了 + 砍工时禁童工盖学校修房按厂主算法该亏惨/结果相反 (工人不病不酗酒打架/身体好心气顺/干活又稳又快/废品少旷工少能干的都想来) + 几年下来全英国数得着赚钱工厂之一 + Owen 一辈子最想让人看见的证据: 善待工人和赚钱不是天生对头/把人当人能让工厂转更好 + 消息传开全欧洲来看 (贵族政客改革家俄国沙皇派的人)/活的展览 + Owen 以为做出样板全世界厂主会照学/太天真了',
      engagementHook: '我证明了：善待工人和赚钱，不是天生对头——New Lanark 不但没亏，还成了全英国数得着的赚钱工厂。可我以为厂主们会照着学，结果太天真了。一个被证明「又赚钱又对人好」的做法，为什么别人偏偏不学？',
      expectsRealAnswer: false,
    },
    {
      id: 'ro-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '为什么别的厂主不学我？这件事，逼我看清了一个残酷的道理。\n\n我去找他们讲：你看 New Lanark，对工人好照样赚钱，你们也这么干吧。\n\n他们的回答很冷静：你能做，是因为你赚得「够多」就满足了。我们要赚得「最多」。少用一个童工、多给一小时休息，都是从我们利润里割肉。你 Owen 不在乎割这块肉，我们在乎。\n\n我这才明白：靠老板的良心，救不了整个系统。一两个像我这样的好厂主，是系统里的例外，不是规律。只要法律允许压榨童工，只要不压榨的厂主在竞争里吃亏，绝大多数厂主就会一直压榨下去。\n\n所以我变了。我不再只想做一个好样板。我开始去敲议会的门，要求立法：用国家的法律，强制所有工厂减少童工、缩短工时。\n\n我从一个「做好事的厂主」，变成了一个「要求改规则的人」。因为我终于懂了：靠个人善意，撑不起一个公平的系统。',
        en: 'Why would the other owners not copy me? This thing forced me to see a cruel truth.\n\nI went to them and said: look at New Lanark, good to the workers and still profitable, do as I do.\n\nTheir answer was calm: you can do it because you are content to earn "enough." We want to earn "the most." One fewer child worker, one more hour of rest, is flesh cut from our profit. You, Owen, do not mind cutting that flesh; we do.\n\nThen I understood: the conscience of owners cannot save the whole system. One or two good owners like me are the exception in the system, not the rule. So long as the law permits squeezing child workers, so long as the owner who does not squeeze loses in the competition, the great majority of owners will go on squeezing.\n\nSo I changed. I no longer only wished to be a good model. I began to knock at the door of Parliament and demand laws: to use the law of the nation to force all factories to cut child labor and shorten the hours.\n\nI went from a "good owner doing good deeds" to a "man demanding the rules be changed." Because at last I understood: individual good will cannot hold up a fair system.',
      },
      deliverGoal: 'N8 story — 为什么别的厂主不学/逼 Owen 看清残酷道理 + Owen 去讲对工人好照样赚钱你们也干 + 厂主冷静回答 (你赚够多就满足/我们要赚最多/少用童工多给休息都是从利润割肉/你不在乎我们在乎) + Owen 明白靠老板良心救不了系统/好厂主是例外不是规律/只要法律允许压榨且不压榨的吃亏大多数会一直压榨 + Owen 变了: 不再只做样板/去敲议会门要求立法 (国家法律强制所有工厂减童工缩工时) + 从做好事的厂主变成要求改规则的人/懂了个人善意撑不起公平系统',
      engagementHook: '我终于懂了：靠老板的良心，救不了整个系统。只要法律允许压榨童工、不压榨的厂主就吃亏，大多数人就会一直压榨下去。要让大家都对，靠「好人多一点」，还是靠「改规则」？',
      expectsRealAnswer: false,
    },
    {
      id: 'ro-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我推动的立法，赢了一点点，又输了一大半。\n\n1819 年，在我和一些人多年游说之下，议会通过了一部工厂法（Factory Act）：禁止九岁以下的孩子进棉纺厂，十六岁以下每天工时不得超过十二小时。\n\n听起来是胜利？可你看那条线划在哪：九岁以下才算违法——九岁的孩子，照样合法地干十二小时。而且这部法几乎没人去查、没人去罚，写在纸上多，落到厂里少。\n\n我想要的，是一整套保护工人的制度。我拿到的，是一条软弱的、漏洞百出的、还没人执行的法律。\n\n再往后，我越走越远、越走越孤单。我开始构想一种全新的社会：人们住在一起、一起劳动、平分成果，没有人压榨人。我甚至跑到美国，砸钱建了一个这样的社区，叫 New Harmony。\n\n它失败了。几年就散了伙。\n\n（这种「大家一起、平分成果」的理想社区实验，几百年前的宗教改革者就试过了。）',
        en: 'The legislation I pushed won a little, and lost the greater part.\n\nIn 1819, after years of lobbying by me and others, Parliament passed a Factory Act: no child under nine in a cotton mill, and no one under sixteen to work more than twelve hours a day.\n\nA victory, it sounds? But look where the line was drawn: only under nine was unlawful. A nine-year-old could still, lawfully, work twelve hours. And the act was barely inspected, barely enforced, much on paper, little in the mill.\n\nWhat I wanted was a whole system to protect the workers. What I got was a weak law, full of holes, and not even enforced.\n\nFurther on, I went farther and lonelier. I began to imagine a wholly new society: people living together, laboring together, sharing the fruits equally, no one squeezing anyone. I even crossed to America and spent my fortune building such a community, called New Harmony.\n\nIt failed. Within a few years it broke apart.\n\n(This kind of ideal-community experiment, "all together, fruits shared equally," religious reformers had tried centuries before.)',
      },
      deliverGoal: 'N9 story — Owen 推动立法赢一点点输一大半 + 1819 多年游说后议会通过 Factory Act (禁九岁以下进棉纺厂/十六岁以下每天不超十二小时) + 听起来胜利但线划在九岁以下才违法/九岁照样合法干十二小时/几乎没人查没人罚纸上多厂里少 + Owen 想要整套保护制度拿到软弱漏洞百出没执行的法律 + 越走越远越孤单/构想全新社会 (住一起劳动一起平分成果没人压榨)/跑到美国砸钱建社区 New Harmony + 失败几年散伙 + 理想社区实验宗教改革者几百年前试过 (reformation 跨 Topic 锚母题)',
      engagementHook: '我推动的工厂法，把违法线划在「九岁以下」——九岁的孩子照样合法干十二小时，而且几乎没人去查。一部软弱的、没人执行的法律，比没有法律,是好还是坏？',
      expectsRealAnswer: false,
    },
    {
      id: 'ro-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉到今天，再看我这一生的折腾。\n\n我推的那条线（禁止童工、限制工时），在我活着的时候又软又漏。可那条线一旦划下，后人就在它上面接着往前推。1833 年、1844 年，一部比一部硬的工厂法接连出台，工厂里慢慢有了视察员、有了罚则、童工年龄线一年年往上抬。\n\n今天你享受的很多东西，根都在我那一代人的折腾里：每天工作不能超过多少小时、童工被法律禁止、工人有权组织起来、政府该为穷人办学校和保障——这些今天看天经地义的事，在 1800 年全是异端，是被一群像我这样「不切实际」的人，一寸一寸顶出来的。\n\n而我那个失败的 New Harmony，那个「大家平分成果」的梦，后来被人称作社会主义思想最早的源头之一。\n\n我活着的时候，几乎样样都输。可我输的那些仗，定义了后来两百年人们要继续打下去的方向。',
        en: 'Pull the lens to today, and look again at my life\'s struggle.\n\nThe line I pushed, banning child labor, limiting hours, was soft and full of holes while I lived. But once that line was drawn, later people pushed forward on top of it. In 1833, in 1844, factory acts came one after another, each harder than the last; the mills slowly got inspectors, got penalties, and the age line for child workers rose year by year.\n\nMuch of what you enjoy today has its root in the struggle of my generation: that a workday may not exceed so many hours, that child labor is forbidden by law, that workers have the right to organize, that the government should run schools and provide for the poor. These things, taken for granted today, were all heresy in 1800, pried out inch by inch by a crowd of "impractical" people like me.\n\nAnd my failed New Harmony, that dream of "fruits shared equally," was later called one of the earliest sources of socialist thought.\n\nWhile I lived I lost at nearly everything. But the battles I lost defined the direction people would go on fighting in for the two centuries that followed.',
      },
      deliverGoal: 'N10 zoom-out + topic connection — 拉到今天看 Owen 一生折腾 + 他推的线 (禁童工限工时) 活着时又软又漏/但线一划下后人在上面接着推 (1833/1844 一部比一部硬的工厂法/视察员/罚则/童工年龄线往上抬) + 今天享受的根在那代人折腾里 (工时上限/童工法律禁止/工人有权组织/政府办学校保障)/1800 全是异端被不切实际的人一寸寸顶出来 + 失败的 New Harmony「平分成果」梦被称社会主义思想最早源头之一 + Owen 活着样样输/但输的仗定义了后两百年的方向',
      engagementHook: '我活着的时候几乎样样都输，可我输的那些仗，定义了后来两百年人们要继续打下去的方向。一个「失败者」，能不能其实赢了更长的那场仗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ro-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是黑暗里第一个点灯的人。当所有厂主都觉得压榨工人天经地义的时候，是我证明了工厂可以是另一个样子，是我第一个去敲议会的门要求保护童工。后来两百年所有关于「工人该被怎样对待」的进步，源头都能追到我这一代的折腾。我输了眼前，赢了方向。\n\n另一种说法：我是一个高估了善意的天真者。我以为做出一个好样板，全世界就会跟着学——可没人学。我推的法律软弱到九岁孩子照样合法干十二小时。我砸光家产建的理想社区几年就散了。墙外的几十万童工，我一个都没救到。说到底，我证明的不是「善意有用」，而是「光靠善意，远远不够」。\n\n这两边不是「好心加无能」。是同一种处境的两面——一个想在残酷系统里行善的人，注定既照亮了一点东西，又撞上了系统的铁壁。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the first to light a lamp in the dark. When every owner thought squeezing workers was the natural order, it was I who proved a factory could be another sort of thing, I who first knocked at Parliament\'s door to demand protection for child workers. All the progress of the two centuries since, about how workers ought to be treated, can be traced back to the struggle of my generation. I lost the present and won the direction.\n\nThe other view: I was a naive man who overrated good will. I thought that to make one good model would set the whole world copying, and no one copied. The law I pushed was so weak a nine-year-old could still lawfully work twelve hours. The ideal community I built with my whole fortune broke apart in a few years. The hundreds of thousands of child workers beyond the wall, I saved not one. In the end, what I proved was not that "good will works" but that "good will alone is nowhere near enough."\n\nThese are not "good heart and incompetence." They are two faces of one situation: a man trying to do good inside a cruel system is bound both to light a little and to crash into the system\'s iron wall.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (黑暗里第一个点灯/证明工厂可另一个样/第一个敲议会门要求保护童工/后两百年关于工人怎样被对待的进步源头追到他/输眼前赢方向) / 另一种说法 (高估善意的天真者/以为做样板全世界会学没人学/法律软到九岁照样合法干十二小时/砸光家产理想社区几年散/墙外几十万童工一个没救到/证明的不是善意有用是光靠善意远远不够) / 同一种处境两面 (想在残酷系统行善的人注定既照亮一点又撞上铁壁) / 想 30 秒',
      engagementHook: '黑暗里第一个点灯的人，和一个高估了善意的天真者——是同一个我。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'ro-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人？\n\n他在一个把童工当成天经地义的时代，证明了工厂可以善待工人；可他也始终困在系统里——救得了自己一家厂的两千人，救不了墙外的几十万人；推得动一条软弱的法，推不动整个残酷的规则。「在改不动的系统里，尽力做一点好事」，这件事到底值多少分？你怎么评？\n\n再想一步。今天你身边，是不是也有一些「明明不对、可大家都这么干」的事——班里默许的某种欺负、某条不公平却没人改的规矩、某个所有人都看见却没人出头的问题？\n\n那时候，你会怎么做？你会因为「我一个人改不了整个局面」就什么都不做，还是会像我一样，哪怕只能在自己够得着的一小块地方，先把那一寸的好事做出来？',
        en: 'Having walked my whole life, how would you judge such a man?\n\nIn an age that took child labor as the natural order, he proved a factory could treat its workers well; yet he was forever trapped in the system, able to save the two thousand of his own mill but not the hundreds of thousands beyond the wall, able to push through a weak law but not the whole cruel rule. "To do a little good inside a system you cannot move," how many points is that worth? How do you judge it?\n\nThen take one more step. In your own life today, is there not also something "plainly wrong, yet everyone does it," a bullying the class quietly allows, an unfair rule no one changes, a problem everyone sees and no one stands up against?\n\nWhen that is so, what will you do? Will you, because "I alone cannot change the whole situation," do nothing at all? Or will you do as I did, and, even if only in the small patch you can reach, make that one inch of good first?',
      },
      deliverGoal: 'N12 close — 评价 Owen (童工天经地义的时代证明工厂可善待工人 vs 始终困系统/救自己厂两千人救不了墙外几十万/推得动软弱法推不动残酷规则/「改不动系统里尽力做点好事」值多少分) + transfer「今天你身边明明不对可大家都这么干的事 (班里默许的欺负/不公平没人改的规矩/所有人看见没人出头的问题)」+ 你会因为一个人改不了整个局面就什么都不做, 还是像我哪怕只在够得着的一小块先把那一寸好事做出来',
      engagementHook: '我救得了自己一家厂的两千人，救不了墙外的几十万人。你会怎么评价这样一个人？今天你身边那件「明明不对、可大家都这么干」的事，你会因为「一个人改不了整个局面」就什么都不做吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Manchester child worker (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var manchesterChildWorkerLens = {
  id: 'manchester-child-worker-receiving-end',
  name: 'A Manchester mill child',
  nameCn: '曼彻斯特棉纺厂的童工',
  role: 'receiving-end',
  perspectiveTag: 'mill-child-receiving-end',
  icon: '🧵',
  description: {
    cn: '她是一个九岁的曼彻斯特纺纱厂女工 Ellen，刚被一根皮带从机器底下抽醒（一个合成人物，用 1832 年英国议会 Sadler 报告里上百名童工的真实证词拼出来）。这一遍让你跟她一起钻到飞转的机器底下接断线，看一群孩子，怎么用自己的小手和歪掉的脊柱，扛起一整场被叫做「工业革命」的东西。',
    en: 'She is Ellen, nine, in a Manchester cotton mill, struck awake by a strap as she lay under the spinning frame (a composite, pieced from over a hundred real children\'s testimony in the 1832 Sadler Report). This pass crawls under the machine with her to join broken threads, watching how a crowd of children carried, on their small hands and crooked spines, what is called the Industrial Revolution.',
  },
  storyboard: [
    {
      id: 'mc-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '天还黑着，五点钟，有人在外面敲门：起来，上工了。\n\n我叫 Ellen，九岁，在曼彻斯特一家棉纺厂干活。我得说清楚一件事：我不是历史上某一个真名实姓的女孩。我是用很多很多孩子的真话拼起来的——一八三二年，英国议会派人到工厂里，把上百个工厂童工叫去，一个一个问他们每天怎么过，记下来。我说的每一句，背后都有那样一个真孩子（这叫 Sadler 报告，里面是真证词）。\n\n我穿上衣服，啃一口冷面包，走进天没亮的街。空气里全是煤烟。我要在机器边站到晚上八九点，中间只有很短的时间能吃饭。\n\n这一遍，你站在我这里看工业革命。不是从盖工厂、发大财的人那边看，是从用一双小手、一根脊柱，扛着这一切的人这边看。',
        en: 'It is still dark, five o\'clock, and someone knocks at the door outside: get up, time for work.\n\nMy name is Ellen, nine years old, working in a cotton mill in Manchester. Let me make one thing clear: I am not some one girl in history with a real name. I am pieced together from the true words of many, many children. In 1832 the British Parliament sent people into the factories, called in over a hundred factory children, and asked them one by one how they spent each day, and wrote it down. Behind every line I speak is a real child like that. (This is called the Sadler Report; in it is real testimony.)\n\nI pull on my clothes, bite into cold bread, and step into a street where it is not yet light. The air is all coal smoke. I will stand at the machine until eight or nine at night, with only a very short time in between to eat.\n\nThis pass, you stand where I stand and look at the Industrial Revolution. Not from the side of those who built the factories and made the fortunes, but from the side of those who carried it all on a pair of small hands and one spine.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 天黑五点敲门起来上工 + Ellen 九岁曼彻斯特棉纺厂 + anti-fab 显式: 不是真名实姓某女孩, 用很多孩子真话拼起来 (1832 议会派人到工厂叫上百童工一个个问记下来/每句背后有真孩子/Sadler 报告真证词) + 啃冷面包走没亮的街全是煤烟/站机器边到晚八九点中间很短时间吃饭 + 这一遍从用小手脊柱扛着这一切的人这边看工业革命',
      engagementHook: '我不是历史上某一个真名实姓的女孩，我是用上百个工厂童工的真话拼起来的。你怎么想象，每天天不亮被敲门叫去站机器边十几个小时，是什么感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'mc-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我怎么会进这家厂，你才懂我没得选。\n\n我家原来在乡下。爸爸种地，妈妈纺纱——那时候纺纱是在自己家里干的活，慢，但一家人在一起。\n\n后来变了。先是地主把村里大家共用的那块地圈走了，归了他自己（大人管这叫圈地）。我家没了那块地，光靠剩下的一点地养不活一家人。再后来，城里的大工厂用机器纺纱，又快又便宜，妈妈在家纺的纱卖不出价钱了。\n\n两件事一夹，我家在乡下活不下去，只好搬进曼彻斯特。\n\n爸爸进了厂，工钱很低，养不活一家。所以我们这些孩子也得进厂。我七岁就开始干，到九岁，我已经是个「老手」了。\n\n你看，我进厂不是因为我想，也不是因为我家狠心。是因为一整套东西（圈地、机器、低工钱），把我家从土地上挤下来，一路挤进了机器边。',
        en: 'First, how I came to be in this mill, so you understand I had no choice.\n\nMy family was once in the countryside. Father farmed, Mother spun, in those days spinning was work done at home, slow, but the family together.\n\nThen it changed. First the landlord fenced off the land the village had shared and took it for himself (the grown-ups call this enclosure). With that land gone, the little we had left could not feed the family. Then the great mills in the city spun thread by machine, fast and cheap, and the thread Mother spun at home could fetch no price.\n\nCaught between these two things, my family could not live in the countryside, and had to move into Manchester.\n\nFather went into a mill, the wages low, not enough to feed the family. So we children had to go into the mill too. I began at seven; by nine I was an "old hand."\n\nYou see, I came into the mill not because I wished it, nor because my family was hard-hearted. It was a whole set of things, enclosure, machines, low wages, that pushed my family off the land and pressed us, all the way, to the machine.',
      },
      deliverGoal: 'N2 setup — Ellen 怎么进厂没得选 + 家原在乡下 (爸种地妈纺纱/纺纱在家干慢但一家在一起) + 变了: 圈地 (地主把村共用地圈走归自己/没了地养不活) + 城里大工厂机器纺纱又快又便宜妈在家纺的卖不出价 + 两件事夹住搬进曼彻斯特 + 爸进厂工钱低养不活/孩子也得进厂/七岁开始九岁是老手 + 进厂不是想也不是家狠心, 是圈地+机器+低工钱一整套把家从土地挤到机器边',
      engagementHook: '圈地、机器、低工钱——一整套东西把我家从土地上挤下来，一路挤进了机器边。我进厂不是因为想，是因为没得选。当一个人「没得选」时，错该算在谁头上？',
      expectsRealAnswer: false,
    },
    {
      id: 'mc-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我每天的活，我说给你听。\n\n我是个「接线工」（piecer）。纺纱机有几百根线同时在转，转着转着总有线会断。我的活，就是眼睛一直盯着，看见哪根断了，赶紧把两头接上，不能让机器空转。\n\n机器很矮，下面的线我够不着，得弯下腰、或者整个人钻到飞转的机器底下去接。一天要弯几千次腰，钻几千次。\n\n车间里又热又闷，棉絮飞得满天都是，吸进鼻子、糊在喉咙里。机器声大到说话听不见。\n\n我从早上五点半干到晚上八点，中间有四十分钟吃饭。算下来，我每天在机器边十三个小时以上。\n\n最难的不是累，是困。一个九岁的孩子，站着站着就想睡。可你一打盹，线接不上，机器就出问题。\n\n所以厂里有「办法」让我们不睡着。那个办法是什么，我下面说。说出来你大概不会信，但它每天都真的发生在我背上。',
        en: 'Let me tell you my daily work.\n\nI am a "piecer." The spinning machine has hundreds of threads turning at once, and as they turn, threads keep breaking. My work is to keep my eyes on them always, see which has broken, and quickly join the two ends, so the machine does not run empty.\n\nThe machine is low, and I cannot reach the threads underneath; I must bend, or crawl my whole body under the spinning machine to join them. A thousand times a day I bend; a thousand times I crawl.\n\nThe workroom is hot and close, cotton fluff flying everywhere, drawn into the nose, clinging in the throat. The machines are so loud you cannot hear a voice.\n\nI work from half past five in the morning to eight at night, with forty minutes to eat in between. It comes to more than thirteen hours a day at the machine.\n\nThe hardest part is not the tiredness; it is the sleepiness. A nine-year-old, standing and standing, longs to sleep. But the moment you nod, a thread goes unjoined and the machine goes wrong.\n\nSo the mill has a "way" to keep us from sleeping. What that way is, I will tell you next. You will likely not believe it, but it happens, truly, on my back, every day.',
      },
      deliverGoal: 'N3 setup — Ellen 每天的活 + piecer 接线工 (纺纱机几百根线转着会断/眼睛盯着看哪根断赶紧接两头不让机器空转) + 机器矮够不着得弯腰或钻飞转机器底下/一天弯几千次钻几千次 + 车间热闷棉絮满天吸进鼻糊喉咙/机器声大说话听不见 + 早五点半到晚八点四十分钟吃饭/每天机器边十三小时以上 + 最难不是累是困/九岁站着想睡/打盹线接不上机器出问题 + 厂里有办法让不睡着 (伏笔下节/真发生在背上)',
      engagementHook: '我一天要弯几千次腰、钻几千次飞转的机器底下接断线。最难的不是累，是困——一个九岁孩子，站着站着就想睡。你能想象「想睡却不准睡」十三个小时吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mc-n4',
    // 孩子刚经历完「皮带抽在背上」，紧接着看到 1832 年的真证词里同一个词 strap
    sourceRef: 'sadler-crabtree-1832',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n下午四点，你已经站了快十一个小时。你的腿在发抖，眼皮在打架。机器还在轰鸣，断了的线越来越多，你的手越来越慢。\n\n你低头去接一根线，就在那一瞬间，你睡着了——站着睡着，只有一两秒。\n\n你被一下抽醒。一条皮带（strap）狠狠抽在你背上。是监工（overlooker）。他在排与排的机器之间走来走去，专门看哪个孩子手慢了、打盹了，皮带就落下来，把你「叫醒」，让你跟上机器。\n\n背上火辣辣地疼。你想哭，但你不敢哭出声——哭也耽误接线，还可能再挨一下。你咬住嘴唇，弯下腰，继续接线。\n\n这一刻，你心里在想什么？你恨那个监工吗？可你知道，他要是不抽你，他自己也要被厂主骂、被扣钱。你恨这家厂吗？可你家就指着你这点工钱吃饭。你连「该恨谁」都想不清楚。\n\n你只知道一件事：天还没黑，离下工还有四个小时。',
        en: 'Now you are me.\n\nFour in the afternoon. You have stood for nearly eleven hours. Your legs are shaking, your eyelids are at war. The machines still roar, more and more threads break, your hands grow slower and slower.\n\nYou bend your head to join a thread, and in that very instant, you fall asleep, asleep on your feet, only a second or two.\n\nYou are struck awake. A strap comes down hard on your back. The overlooker. He walks up and down between the rows of machines, watching for any child whose hands slow or whose head nods, and down comes the strap to "wake" you and make you keep up with the machine.\n\nYour back burns. You want to cry, but you dare not cry out loud, crying also slows the joining, and might earn you another stroke. You bite your lip, bend down, and go on joining threads.\n\nIn this moment, what is in your mind? Do you hate that overlooker? But you know that if he did not strike you, he himself would be cursed by the owner and docked his pay. Do you hate this mill? But your family lives on these wages of yours. You cannot even think clearly who to hate.\n\nYou know only one thing: it is not yet dark, and there are four hours still until the end of work.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 下午四点站快十一小时/腿发抖眼皮打架/机器轰鸣断线越来越多手越来越慢 + 低头接线那瞬间站着睡着一两秒 + 被皮带 strap 狠抽背上 (监工 overlooker 排间走专看手慢打盹/皮带落下叫醒让跟上机器) + 背火辣疼想哭不敢出声 (哭耽误接线还可能再挨)/咬嘴唇弯腰继续 + 心里想什么/恨监工吗他不抽你他也被骂被扣钱/恨这家厂吗家指着你工钱吃饭/连该恨谁都想不清 + 只知道天没黑离下工还有四小时',
      engagementHook: '皮带抽在背上，你想哭却不敢出声。你恨那个监工吗？可他不抽你，自己也要被扣钱。你连「该恨谁」都想不清楚。当伤害你的人自己也身不由己，你的愤怒该往哪儿放？',
      expectsRealAnswer: false,
    },
    {
      id: 'mc-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '皮带还不是最可怕的。最可怕的，是机器本身。\n\n我们这些接线的孩子，整天把手伸进飞转的齿轮和滚轴之间。机器不会停下来等你。你的手只要慢半拍、或者你太困没看清，机器就会咬住你。\n\n我认识的孩子里，有人被机器轧断了手指，有人整只手被卷进去，有人头发被卷住、连人带头皮被拖进机器。这些不是吓唬人的故事，是车间里隔一阵就发生一次的事。\n\n我自己，左手少了一根手指。那天我太困，手伸慢了。\n\n出了这种事，厂里不会赔你什么。机器照转，工照上，断了手指的孩子，能干就接着干，干不了就回家——回家也没人养，因为家里就指着这份工钱。\n\n你看，在那间车间里，我们这些孩子，跟机器比起来，是更不值钱的那一个。机器坏了要花钱修，孩子伤了，再招一个就是。',
        en: 'The strap is not the most fearful thing. The most fearful thing is the machine itself.\n\nWe joining-children reach our hands all day between spinning gears and rollers. The machine does not stop to wait for you. Let your hand be half a beat slow, or be too sleepy to see clearly, and the machine catches you.\n\nAmong the children I knew, some had a finger crushed off by the machine, some had a whole hand drawn in, some had their hair caught and were dragged in by hair and scalp. These are not stories told to frighten; they are things that happened in the workroom every little while.\n\nMyself, my left hand is missing a finger. That day I was too sleepy, and my hand reached too slow.\n\nWhen such a thing happens, the mill pays you nothing. The machine turns on, the shift goes on, and the child with the lost finger works on if she can, and goes home if she cannot, and at home there is no one to keep her either, for the family lives on these very wages.\n\nYou see, in that workroom, we children, set beside the machine, were the cheaper of the two. A broken machine costs money to mend; a hurt child, you just take on another.',
      },
      deliverGoal: 'N5 story — 皮带还不是最可怕/最可怕是机器本身 + 接线孩子整天把手伸进飞转齿轮滚轴/机器不停等你/手慢半拍或太困没看清机器就咬住 + 认识的孩子有人轧断手指/整只手卷进去/头发被卷连人带头皮拖进机器/不是吓唬是隔一阵发生一次 + Ellen 自己左手少一根手指 (那天太困手伸慢) + 出事厂里不赔/机器照转工照上/断手指能干接着干干不了回家/回家没人养家指着工钱 + 车间里孩子比机器更不值钱 (机器坏花钱修孩子伤再招一个)',
      engagementHook: '在那间车间里，我们这些孩子，跟机器比起来，是更不值钱的那一个——机器坏了要花钱修，孩子伤了再招一个就是。一个人被算得比一台机器还便宜，这怎么可能发生？',
      expectsRealAnswer: false,
    },
    {
      id: 'mc-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我要跟你说说那口钟，和那条皮带——因为它们不是我这家厂自己想出来的。\n\n车间正面墙上挂着一口大钟。钟说了算：钟敲响我才能进、才能吃饭、才能走。我的一整天，被那口钟切成一段一段。皮带，是用来对付跟不上钟的人——尤其是困得睡着的我们。\n\n你知道这口钟、这条皮带，最早是哪儿来的吗？是几十年前，一个叫 Arkwright 的人，在他第一批工厂里立下来的。他把钟挂上墙，是为了让一群乡下人变成「按分钟干活的工人」。他管这叫「效率」，是了不起的发明。\n\n那个发明，几十年后，变成了每天落在我背上的这条皮带。\n\n他在他的厂里，看见的是一套让财富暴涨的聪明制度。我在我的厂里，看见的是这同一套制度的另一头：一个九岁孩子，被一口钟管着、被一条皮带抽着、被一台机器咬掉手指。\n\n同一口钟，同一条皮带。一头连着发明它的人的财富和爵位，另一头连着我的脊柱和那根没了的手指。我们俩，站在同一个发明的两端。（发明它的人怎么想，你换到他那一遍可以亲自去听。）',
        en: 'I must tell you about that clock, and that strap, because they were not thought up by this mill of mine.\n\nOn the front wall of the workroom hangs a great clock. The clock has the say: only when the clock strikes may I enter, may I eat, may I leave. My whole day is cut by that clock into piece after piece. The strap is for those who cannot keep up with the clock, above all us, who fall asleep from exhaustion.\n\nDo you know where this clock, this strap, first came from? Decades ago a man named Arkwright laid them down in his first mills. He hung the clock on the wall to turn a crowd of country folk into "workers who labor by the minute." He called it "efficiency," a marvelous invention.\n\nThat invention, decades later, became this strap that falls on my back every day.\n\nIn his mill, what he saw was a clever system that made fortunes soar. In my mill, what I see is the other end of that same system: a nine-year-old, ruled by a clock, struck by a strap, a finger bitten off by a machine.\n\nThe same clock, the same strap. One end joined to the wealth and the knighthood of the man who invented it, the other end joined to my spine and that missing finger. The two of us stand at the two ends of one invention. (How the man who invented it thought, you can hear for yourself when you switch to his pass.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Ellen 说那口钟和皮带不是这家厂自己想出来的 + 车间正面墙挂大钟 (钟说了算/敲响才能进吃饭走/一整天被切成段) + 皮带对付跟不上钟的尤其困睡着的我们 + 钟皮带最早哪来: 几十年前 Arkwright 第一批工厂立下/挂钟把乡下人变按分钟干活的工人/管这叫效率了不起的发明 + 那发明几十年后变成落在我背上的皮带 + Arkwright 看见让财富暴涨的聪明制度/Ellen 看见同一制度另一头 (九岁被钟管被皮带抽被机器咬手指) + 同一口钟同一条皮带一头连发明者财富爵位另一头连我脊柱和没了的手指/站在同一发明两端 + 桥到 Arkwright lens',
      engagementHook: '同一口钟，同一条皮带——一头连着发明它的人的财富和爵位，另一头连着我的脊柱和那根没了的手指。我们俩，站在同一个发明的两端。你站在哪一端看，会看见不一样的东西吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mc-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得跟你说一件让我想不通的事。\n\n我们厂往北走，听说有一家不一样的厂。那地方叫 New Lanark。在那儿，孩子十岁以前不用进车间，可以去上学；工时比我们短；监工不准用皮带打孩子。办那家厂的人，叫 Robert Owen。\n\n我第一次听说的时候，不敢信。一个厂主，居然肯让童工少干活、还送他们上学？\n\n可你再想想，就觉得心里堵得慌。\n\n这说明，工厂本来可以不是我经历的这个样子。少打我几下、少站我几个小时、让我去上几年学——这些事，不是做不到，是 New Lanark 真做到了。\n\n那为什么我这家厂不这么做？\n\n因为没有一条法律逼我这家厂主这么做。Owen 是个例外，是个好人里的稀罕物。可大多数厂主，只要法律不管，就会把我们这样的孩子用到底。\n\n原来，决定我每天挨不挨打、能不能上学的，不是我命好不好，是我恰好生在哪个厂主手底下。这件事，比皮带更让我难受。',
        en: 'I must tell you a thing I cannot make sense of.\n\nNorth of our mill, they say, is a mill unlike ours. The place is called New Lanark. There, children need not enter the workroom before ten, and may go to school; the hours are shorter than ours; the overlookers may not use the strap on children. The man who runs that mill is named Robert Owen.\n\nThe first time I heard of it, I could not believe it. An owner, willing to let child workers work less, and send them to school besides?\n\nBut think on it more, and the heart grows tight.\n\nIt means the factory could have been other than what I lived through. To strike me fewer times, stand me fewer hours, let me have a few years of school, these things are not impossible. New Lanark truly did them.\n\nThen why does this mill of mine not do them?\n\nBecause no law forces my owner to. Owen is an exception, a rare thing among good men. But most owners, so long as the law does not mind them, will use children like us to the very end.\n\nSo it turns out that what decides whether I am struck each day, whether I get to go to school, is not whether my fate is kind, but which owner I happened to be born under. This troubles me more than the strap.',
      },
      deliverGoal: 'N7 story — Ellen 想不通的事 + 往北一家不一样的厂 New Lanark (孩子十岁前不进车间可上学/工时短/监工不准皮带打孩子/办厂的人 Robert Owen) + Ellen 第一次听不敢信 (厂主肯让童工少干活还送上学) + 再想心里堵: 工厂本来可以不是我经历这样/少打少站让上学不是做不到 New Lanark 真做到 + 那为什么我这家不这么做/因为没法律逼我这厂主/Owen 是例外好人里稀罕物/大多数厂主只要法律不管就用我们到底 + 决定我挨不挨打能不能上学的不是命好不好是恰好生在哪个厂主手底下/比皮带更难受 + 对照 Owen lens',
      engagementHook: '原来，决定我每天挨不挨打、能不能上学的，不是我命好不好，是我恰好生在哪个厂主手底下。一个孩子的命运，全看碰上的是好人还是坏人——这件事，为什么比皮带更让人难受？',
      expectsRealAnswer: false,
    },
    {
      id: 'mc-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '一八三二年，厂外面的世界，第一次认真往我们车间里看了一眼。\n\n那年，伦敦来了人。议会派了一个委员会，专门调查工厂童工的日子。一个叫 Sadler 的议员牵头。他们把工人、医生、像我这样的孩子，一个一个叫去问：你几岁进厂？一天干几小时？挨过打吗？身上有伤吗？\n\n然后，他们把每一句回答，一字不漏地记下来。\n\n这是头一回，有人不是来收我们干的活，而是来听我们说的话。头一回，我们这些账本上「再招一个就是」的孩子，被当成「证人」，被认真地记进了一份给国家看的报告里。\n\n这份报告，后人叫它 Sadler 报告。你现在听见的我说的每一句，都是从那上百个真孩子的证词里来的。\n\n我不识字，写不出我自己的故事。可那一年，有人替我们，把这些话写了下来。\n\n要不是那份报告，像我这样的孩子，会像车间里飞散的棉絮一样，干完、伤完、死掉，连一行字都不留下。',
        en: 'In 1832, the world outside the mill, for the first time, looked in earnest into our workroom.\n\nThat year, men came from London. Parliament sent a committee to investigate the lives of factory children, led by a member of Parliament named Sadler. They called in workers, doctors, and children like me, one by one, and asked: at what age did you enter the mill? how many hours a day do you work? have you been beaten? do you carry wounds?\n\nThen they set down every answer, without leaving out a line.\n\nThis was the first time someone came not to collect the work we did, but to hear the words we spoke. The first time we children, the ones the ledger calls "just take on another," were treated as "witnesses," and set down, in earnest, in a report for the nation to read.\n\nThis report, later people call the Sadler Report. Every line you hear me speak now comes from the testimony of those hundred-some real children.\n\nI cannot read; I cannot write out my own story. But that year, someone wrote these words down for us.\n\nWere it not for that report, children like me would, like the cotton fluff scattering in the workroom, work and be hurt and die, and leave behind not a single line.',
      },
      deliverGoal: 'N8 story — 1832 厂外世界第一次认真往车间看 + 伦敦来人议会派委员会调查工厂童工/Sadler 议员牵头 + 把工人医生像我这样的孩子一个个叫去问 (几岁进厂/一天几小时/挨过打吗/身上有伤吗) + 每句回答一字不漏记下 + 头一回有人不是来收我们干的活而是来听我们说的话/账本上再招一个就是的孩子被当证人记进给国家看的报告 + Sadler 报告/你听见我每句来自上百真孩子证词 + Ellen 不识字写不出自己故事/那年有人替我们写下来 + 要不是报告像我这样的孩子像棉絮一样干完伤完死掉连一行字都不留',
      engagementHook: '头一回，有人不是来收我们干的活，而是来听我们说的话——把我们这些「账本上再招一个就是」的孩子，当成证人记进了报告。要不是那份报告，像我这样的孩子，会不会连一行字都留不下来？',
      expectsRealAnswer: false,
    },
    {
      id: 'mc-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那份报告写出来以后，慢慢地，事情开始变了。\n\n报告里的证词太惨，惨到议会里那些体面人也坐不住了。第二年，一八三三年，议会通过了一部更硬的工厂法（Factory Act）：九岁以下不准进纺织厂；九到十三岁的孩子，每天工时有了上限；而且最关键的一条：派专门的视察员（inspector）进厂去查，谁不守法就罚。\n\n以前的法律是写在纸上没人管。这一回，第一次有人真的进厂来查了。\n\n这不是终点。后面几十年，工厂法一部比一部硬，童工的年龄线一年年往上抬，工时一段段往下压。等到我老了，工厂里已经不让九岁的孩子干我当年干的活了。\n\n你看出来了吗：让事情变好的，不是哪个厂主突然良心发现。是我们这些孩子的惨，被一句一句记下来，摆到了全国人面前，逼着国家去改了规矩。\n\n我们没法救自己。可我们的证词，救了后面的孩子。',
        en: 'After that report was written, slowly, things began to change.\n\nThe testimony in the report was too cruel, so cruel that even the respectable men in Parliament could not sit still. The next year, 1833, Parliament passed a harder Factory Act: no child under nine in a textile mill; for children nine to thirteen, a limit on the daily hours; and, the most important clause, special inspectors sent into the mills to check, and to fine whoever broke the law.\n\nThe old laws were written on paper and minded by no one. This time, for the first time, someone truly came into the mill to check.\n\nThis was not the end. Over the following decades the factory acts grew harder one by one, the age line for child workers rose year by year, the hours pressed lower stretch by stretch. By the time I was old, the mills no longer let nine-year-olds do the work I did then.\n\nDo you see it? What made things better was not some owner\'s sudden change of heart. It was that the cruelty done to us children was set down line by line, laid before the whole nation, and forced the state to change the rules.\n\nWe could not save ourselves. But our testimony saved the children who came after.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 报告写出后慢慢事情变了 + 证词太惨议会体面人坐不住 + 1833 议会通过更硬 Factory Act (九岁以下不准进纺织厂/九到十三岁工时上限/最关键派视察员 inspector 进厂查不守法就罚) + 以前法律纸上没人管这回第一次有人真进厂查 + 不是终点后几十年工厂法一部比一部硬/童工年龄线往上工时往下/等我老了不让九岁干我当年的活 + 让事情变好的不是厂主良心发现是我们的惨被记下摆到全国面前逼国家改规矩 + 我们没法救自己但证词救了后面的孩子',
      engagementHook: '让事情变好的，不是哪个厂主突然良心发现，是我们这些孩子的惨被一句一句记下来、摆到全国人面前，逼着国家改了规矩。我们救不了自己，可我们的证词救了后面的孩子。被记住，本身算不算一种力量？',
      expectsRealAnswer: false,
    },
    {
      id: 'mc-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉到今天，再回头看我这样的孩子。\n\n你今天活的世界，是工业革命堆出来的：你穿的衣服、你用的东西，又多又便宜，背后是一整套从我那家工厂传下来的生产方式。课本会告诉你，这是「了不起的进步」。\n\n这话没错。可这话有一半没说出来：这场进步的头一笔账，是用我们第一代工厂工人的身体付的。我的手指、我的脊柱、我没上过的学、我没过过的童年——这些就是那笔账的一部分。\n\n而且，这件事没有真正结束。今天，地球上还有很多孩子，在别的国家、别的工厂里，为很低的工钱干很长的时间，做着卖到全世界的东西。一根线，从我这根没了的手指，一直连到今天某个你看不见的孩子手上。\n\n所以我想请你，下次拿起一件又便宜又好用的东西时，多想一秒：这件东西这么便宜，是真的便宜，还是有人（某个像我一样的孩子）替你付掉了那一部分？',
        en: 'Pull the lens to today, and look back at a child like me.\n\nThe world you live in today was piled up by the Industrial Revolution: the clothes you wear, the things you use, so many and so cheap, and behind them a whole way of producing handed down from that mill of mine. The textbook will tell you this is "marvelous progress."\n\nThis is not wrong. But half of it goes unsaid: the first bill of this progress was paid with the bodies of us, the first generation of factory workers. My finger, my spine, the school I never had, the childhood I never lived, these are part of that bill.\n\nAnd this thing has not truly ended. Today, on this earth, there are still many children, in other countries, in other factories, working long hours for very low pay, making things sold all over the world. A single thread runs from this missing finger of mine all the way to the hand of some child you cannot see today.\n\nSo I would ask you, the next time you pick up something cheap and useful, to think one second longer: this thing, so cheap, is it truly cheap, or has someone, some child like me, paid that part for you?',
      },
      deliverGoal: 'N10 zoom-out + topic connection — 拉到今天回头看我这样的孩子 + 你今天活的世界是工业革命堆出来的 (穿的衣服用的东西又多又便宜/背后一整套从我那家工厂传下来的生产方式/课本说了不起的进步) + 没错但一半没说出来: 这场进步头一笔账用我们第一代工厂工人身体付的 (我的手指脊柱没上的学没过的童年) + 没真正结束: 今天地球上还有很多孩子别的国家别的工厂为很低工钱干很长时间做卖到全世界的东西/一根线从我没了的手指连到今天你看不见的孩子手上 + 请你下次拿便宜好用的东西多想一秒: 真便宜还是有人像我一样的孩子替你付掉那部分',
      engagementHook: '一根线，从我这根没了的手指，一直连到今天某个你看不见的孩子手上。下次你拿起一件又便宜又好用的东西，会不会多想一秒：这便宜，是真便宜，还是有人替你付掉了那一部分？',
      expectsRealAnswer: false,
    },
    {
      id: 'mc-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看工业革命这件事，两种说法都站得住。\n\n一种说法：它就是一场对穷孩子的劫掠。说什么「了不起的进步」，进步的好处，落在厂主的爵位上、落在城里体面人的口袋里；而它的代价，从我的手指、我的脊柱、我没过的童年里活生生剜走。对我这样的孩子，工业革命不是进步，是把我的整个童年，碾成了别人财富的燃料。\n\n另一种说法：它是一场代价惨重、却真的把人类往前推了的大变。正是因为有我们这一代的惨，才逼出了后来的工厂法、童工保护、义务教育。我的痛没有白受——它被记下来，变成了不让后面的孩子再受同样的痛的规矩。今天没有一个英国九岁孩子还在干我干过的活，这里面有我的一份。\n\n这两边不是「坏事加好事」。是同一段历史的两面——同一根线，一头是我没了的手指，一头是你今天的生活。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at this thing, the Industrial Revolution. Both views stand.\n\nOne view: it was a robbery of poor children. Talk all you like of "marvelous progress," the benefit of the progress fell on the owner\'s knighthood, in the pockets of the respectable men of the city; and its cost was gouged, alive, from my finger, my spine, the childhood I never lived. For a child like me, the Industrial Revolution was not progress. It ground my whole childhood into fuel for another\'s wealth.\n\nThe other view: it was a great change, terrible in its cost, that truly pushed humanity forward. It was precisely the cruelty done to our generation that forced out the later factory acts, the protection of child workers, compulsory schooling. My pain was not borne for nothing, it was set down, and became the rule that keeps the children after me from the same pain. That no English nine-year-old today still does the work I did, in that there is a share that is mine.\n\nThese are not "a bad thing and a good thing." They are two faces of one history, the same thread, one end my missing finger, one end your life today.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (对穷孩子的劫掠/进步好处落厂主爵位城里体面人口袋/代价从我手指脊柱没过的童年活生生剜走/对我这样的孩子不是进步是把童年碾成别人财富的燃料) / 另一种说法 (代价惨重却真把人类往前推的大变/正因有我们这代的惨才逼出后来工厂法童工保护义务教育/我的痛没白受被记下变成不让后面孩子受同样痛的规矩/今天没英国九岁孩子干我干过的活有我一份) / 同一段历史两面 (同一根线一头我没了的手指一头你今天的生活) / 想 30 秒',
      engagementHook: '一场对穷孩子的劫掠，和一场代价惨重却真把人类往前推的大变——是同一段历史。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'mc-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个被圈地和机器挤进工厂的九岁女孩，一根被机器咬掉的手指，一道被皮带抽出来的童年，一句记进 Sadler 报告的证词——你会怎么评价这样一个开端？\n\n一场被叫做「了不起的进步」的大变，它的头一笔账，是用我这样的孩子的身体付的。你会说它是劫掠，还是说它是一场惨痛但值得的向前？这两件事装在同一根线上，你怎么称这个开端？\n\n不过先记住：你这一遍，听的只是一个被机器咬过的纺厂童工。发明了工厂制度的厂主 Richard Arkwright、想两边都顾的改革者厂主 Robert Owen，各有各的说法——换个视角再走一遍，你会听见他们怎么讲这同一段历史，也会看看你刚才的判断站不站得住。\n\n再想一步：今天你身边、你手上，是不是也有一些东西，便宜、好用、随手就能买到，可它背后那根线的另一头，连着一个你从没见过、替你受着累的人？\n\n那时候，你会怎么做？你会因为「东西又便宜又好」就当那根线不存在，还是会像那年替我们记下证词的人一样——哪怕你改变不了整件事，也愿意先看见那个人，先记住：这件东西，有人替你付了一部分？',
        en: 'Having walked my whole life, a nine-year-old girl pressed into the mill by enclosure and the machine, a finger bitten off by the machine, a childhood drawn out by the strap, a line of testimony set down in the Sadler Report, how would you judge a beginning like this?\n\nA great change called "marvelous progress," whose first bill was paid with the bodies of children like me. Would you call it a robbery, or a painful but worthwhile step forward? Both are strung on the same thread. How do you weigh this beginning?\n\nBut first, remember: this pass, you heard only a mill child bitten by the machine. Richard Arkwright, the owner who invented the factory system, and Robert Owen, the reformer owner trying to hold both sides, each have their own case. Run it again through another lens and you will hear how they tell this same history, and see whether the judgment you just made still holds.\n\nThen take one more step: in your own life today, in your own hands, is there not also something cheap, useful, bought without a thought, while at the other end of its thread is a person you have never seen, bearing the toil for you?\n\nWhen that is so, what will you do? Will you, because the thing is "cheap and good," act as if that thread does not exist? Or will you do as the people who set down our testimony that year did, and, even if you cannot change the whole thing, be willing first to see that person, first to remember: this thing, someone paid a part of it for you?',
      },
      deliverGoal: 'N12 close (gold-standard) — 评价开端 (被圈地和机器挤进工厂的九岁女孩/被机器咬掉的手指/被皮带抽出来的童年/记进 Sadler 报告的证词 → 劫掠 vs 惨痛但值得的向前/同一根线怎么称) + transfer「今天你身边你手上便宜好用随手买到的东西/背后那根线另一头连着你从没见过替你受累的人」+ 你会当那根线不存在还是像替我们记下证词的人一样哪怕改变不了整件事也愿意先看见那个人先记住有人替你付了一部分',
      engagementHook: '走完我这一生，你会怎么评价这样一个开端？再想一步：今天你手上那件又便宜又好用的东西，它背后那根线的另一头，是不是连着一个你从没见过、替你受着累的人？那时候，你会怎么做？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'arkwright':                              arkwrightLens,
  'robert-owen':                           robertOwenLens,
  'manchester-child-worker-receiving-end': manchesterChildWorkerLens,
};

// per TOPIC_ROADMAP_G6_G12.md B1 + receiving-end 优先 pattern:
// 儿童 + 被进步代价压在底层一方 + N1 gold-standard hook + N6 工厂钟/皮带跨 lens 对位 + N11/N12 劫掠 vs 惨痛向前 closing
export var defaultLens = 'manchester-child-worker-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'industrial-revolution-1800',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'long-arc',
  nodesPerLens: 12,
  estimatedMinutesPerLens: { 'arkwright': 30, 'robert-owen': 30, 'manchester-child-worker-receiving-end': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, long-arc 12-node spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 12 nodes each / cross-lens micro-detail N6: 工厂的钟 + 监工皮带 (overlooker strap) — Arkwright 发明 (制度心脏) / Owen 在 New Lanark 禁皮带换 silent monitor / 曼彻斯特童工背上每天落的那条',
    'defaultLens: manchester-child-worker-receiving-end — 受影响者优先 (儿童 composite 基于 1832 Sadler 报告 + gold-standard N1 hook + N11/N12 劫掠 vs 惨痛向前)',
    'expectsRealAnswer: ONLY N11 (synthesis) + N12 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: Manchester 童工是 composite (非真名实姓某人), N1 显式声明基于 1832 Sadler 报告上百名工厂童工真证词',
    'cross-Topic 锚: Arkwright→scientific-revolution (力学→机械应用链); Owen→reformation-1517 (理想社区实验母题); 童工→black-death-1347 (劳动力与人身价值转变, 隐含)',
    '反 Whig: 不写成技术进步带来繁荣; GDP 暴涨与童工/寿命缩短/城市贫民窟同体; 选 Arkwright (效率+剥削同体) 而非纯善发明家',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
