// ─── Qin Unification 221 BCE Lens-based Storyboard (Story-First v2) ───
//
// Topic: 秦统一中国 · Qin Shi Huang's Unification of China 221 BCE
// CA HSS Grade 6 Ancient China · 中国课纲 七年级上 · AP World Period 1 (state-building)
//
// 3 lens 设计 (per AUTHORING_PIPELINE 第 8/12 条):
//   - qin-shi-huang                   (perpetrator-actor) — 嬴政 / 始皇帝 259-210 BCE 统一六国 + 标准化天才 + 焚书 + 役死苍生
//   - li-si                           (lonely-mediator)   — 李斯 ?-208 BCE 法家丞相 / 设计郡县制书同文 / 主张焚书 / 最终被自己服务的机器腰斩
//   - conscript-laborer-receiving-end (receiving-end)     — 一个被征去北边修长城的戍卒 / 刑徒 (虚构桥接人物, 代表无名苍生)
//
// 跨 lens micro-detail (N6 anchor):
//   「书同文 / 统一文字」一件事两个方向 — 同一道法令两面:
//   - 李斯 lens N6: 小篆统一六国文字 = 帝国伟业的技术杰作 (administrative genius)
//   - 戍卒 lens N6: 同一道「车同轨书同文」的法令系统, 也是「徭役律」「戍卒律」把人征到北边的同一部机器
//   - 始皇帝 lens N6: 焚书令 — 统一思想 vs 烧掉异见, 同一道命令两面
//
// 跨 Topic / 同代世界锚 (CN 用「视角」不用 lens 工程词):
//   - 同代罗马共和国正在扩张 (布匿战争) / 印度孔雀王朝 Ashoka 治下 — 三个大territory 同期, 怎么统一、怎么治理的结构对照
//   - 历史学 (historiography): 司马迁《史记》在汉朝写成, 汉有理由把秦写黑 → N9 zoom 触及
//
// defaultLens = 'conscript-laborer-receiving-end' (受影响者优先 pattern: 无名苍生 + 谁付了代价 + 跨视角对位)
//
// 第 7 条 cultural-ban 例外: 本 Topic 是中国史描述中国, 皇帝/丞相/郡县制/法家/焚书/戍卒/刑徒/玉玺 等是史实正确术语, 必须用.
//   仍避免时代错置: 长城是夯土 (非明代砖石) / 孟姜女是后世传说非秦代史实 / 坑儒按《史记》记载且标注学界存疑.
//
// NEW STRUCTURE SPEC:
//   - 11 nodes per lens (multi-faction)
//   - 220-380 CN chars per node; ≤2 anchor nodes per lens may reach 550 (N6 cross-lens + N10/N11 synthesis)
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true; all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点 wording authored here)
//
// per AUTHORING_PIPELINE.md 铁律 (em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: 嬴政 / 秦始皇 Qin Shi Huang (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var qinShiHuangLens = {
  id: 'qin-shi-huang',
  name: 'Qin Shi Huang',
  nameCn: '嬴政 / 秦始皇',
  role: 'perpetrator-actor',
  perspectiveTag: 'first-emperor',
  icon: '👑',
  description: {
    cn: '秦国国君，公元前 259 年生，13 岁继位，39 岁那年把打了几百年的天下打完了。他灭掉韩、赵、魏、楚、燕、齐六个国家，第一次把整个华夏合成一个帝国，并给自己造了一个前所未有的称号：始皇帝。他统一文字、度量衡、车轴宽度、货币，让一道命令能传到帝国最远的角落。同一个他，焚书、严刑、把几十万人征去修长城和自己的陵墓，求一颗能让他长生不死的药。这一遍让你从这个第一个皇帝的内部，看一个帝国的伟业和它的代价怎么同时长出来。',
    en: 'King of Qin, born 259 BCE, who took the throne at thirteen and, by the age of thirty-nine, had finished a war that had run for centuries. He destroyed the six rival states of Han, Zhao, Wei, Chu, Yan, and Qi, fused the whole of the Chinese world into one empire for the first time, and gave himself a title no one had ever held: First Emperor. He standardized the writing, the weights and measures, the width of cart axles, and the coinage, so that one order could reach the farthest corner of the empire. The same man burned books, ruled by harsh law, drove hundreds of thousands to build the wall and his own tomb, and chased an elixir that would let him never die. This pass lets you watch, from inside the first emperor, how an empire\'s greatness and its cost grow up at the same time.',
  },
  storyboard: [
    {
      id: 'qsh-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '公元前 221 年。我站在咸阳的高台上，往下看。\n\n打了五百多年的仗，从我往上数好几代，天下一直是七个国家互相砍杀。今天，最后一个国家齐国投降了。地图上那些边界线，全没了。从今往后，只有一个国家。\n\n我嫌「王」这个称号配不上我做的事——以前每个国家的国君都叫王，太多太贱了。我要一个从来没人用过的称号。我把传说里最高的「皇」和「帝」两个字合起来，叫自己「皇帝」。我是第一个，所以我是始皇帝。\n\n我还下了一道命令：从我开始，往后一代一代叫二世、三世，传到万世。\n\n这一遍，你坐进我这个位置。你刚刚做成了之前没有任何人做成的事。可你不知道的是，你这个帝国，连十五年都没撑到。',
        en: '221 BCE. I stand on a high terrace at Xianyang and look down.\n\nThe wars had run more than five hundred years; for many generations before me the land had been seven states hacking at one another. Today the last of them, Qi, surrendered. Those borders on the map are gone. From now on there is only one state.\n\nI found the title "King" too small for what I had done. Every ruler of every state had called himself King; the word was cheap from overuse. I wanted a title no one had ever held. I joined the two highest words in the old legends, "august" and "divine ruler," and called myself Emperor. I was the first, so I am the First Emperor.\n\nI gave one more order: from me onward, my heirs would be called the Second, the Third, on and on to the ten-thousandth generation.\n\nThis pass puts you in my seat. You have just done what no one before you had ever done. What you do not know is this: your empire would not last even fifteen years.',
      },
      deliverGoal: 'N1 hook — 公元前 221 灭六国统一 (最后齐降) + 嫌「王」太贱造新称号「皇帝」/ 始皇帝 + 妄想传万世 + 反讽伏笔「连十五年都没撑到」+ 这一遍视角设定',
      engagementHook: '我刚做成之前没人做成的事，还打算把帝国传到万世。一个人靠武力把天下合成一个，你信这种「合一」能长久吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'qsh-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是怎么走到那个高台上的。\n\n我公元前 259 年生在赵国，那时我是个被扣在敌国当人质的孩子，处境很险。13 岁那年，我父亲死了，我回秦国继位当了秦王。\n\n那时候天下叫「战国」——七个大国打成一锅粥，谁都想吞掉别人。秦国在最西边，被中原各国看不起，叫我们「西边的蛮子」。可秦国有一样别人没有的东西：一套狠到底的法律制度。\n\n这套制度的核心很简单：耕田和打仗，是国家唯一看重的两件事。农民多打粮，士兵多砍头，就升爵、给地。偷懒、逃跑、违令，连坐重罚。整个秦国，被改造成一台只为「耕」和「战」运转的机器。\n\n我接手的，就是这台机器。我要做的，是用它把另外六个国家，一个一个碾过去。',
        en: 'First, how I came to stand on that terrace.\n\nI was born in 259 BCE in the state of Zhao, a child held there as a hostage in enemy hands, in real danger. When I was thirteen my father died, and I returned to Qin to take the throne as King of Qin.\n\nThose were called the Warring States: seven great powers boiled together in war, each wanting to swallow the rest. Qin sat in the far west, looked down on by the central states, who called us the western barbarians. But Qin had one thing the others did not: a system of law harsh to the bone.\n\nThe heart of that system was simple. Farming and war were the only two things the state valued. A farmer who grew more grain, a soldier who took more heads, rose in rank and was given land. Idleness, flight, and disobedience were punished hard, with whole groups held liable for one person. The whole of Qin had been remade into a machine that ran for only two purposes: to farm and to fight.\n\nWhat I inherited was that machine. What I meant to do was use it to grind the other six states down, one by one.',
      },
      deliverGoal: 'N2 setup — 嬴政 259 BCE 生于赵 (人质) /13 岁继位秦王 + 战国七雄 + 秦在西被叫蛮子 + 法家耕战制度 (耕田打仗升爵/连坐重罚) + 「秦国是一台耕战机器」继承这台机器去碾六国',
      engagementHook: '秦国被改造成一台只为「耕田」和「打仗」运转的机器，靠它统一了天下。把整个国家变成一台高效的机器，你觉得这是强大，还是可怕？',
      expectsRealAnswer: false,
    },
    {
      id: 'qsh-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '统一不是一天的事。从公元前 230 年到 221 年，十年里我灭了六个国家。\n\n顺序我记得清清楚楚：先灭最弱的韩（前 230），再灭赵（前 228）、魏（前 225），然后是最大的楚（前 223）、燕（前 222），最后是齐（前 221）。一个一个吃掉，没给他们联手的机会。\n\n打完了，更难的事才开始：这么大一块地，怎么管？\n\n我手下有个丞相，叫李斯。他给我出了一个主意，彻底改写了中国后来两千年。以前的办法叫分封——把土地分给亲戚、功臣，让他们各自当一方诸侯。可这些诸侯坐大了，就是下一场战国。\n\n李斯说：别分封了。把全国划成一个个郡，郡下面再分县，每个郡县派朝廷的官去管，官由我任命、我撤换，土地和军队都归中央。这叫郡县制。\n\n从此，天下不再属于一群诸侯，而是属于一个人——我。',
        en: 'Unification was not the work of a day. From 230 to 221 BCE, in ten years, I destroyed six states.\n\nI remember the order exactly: first the weakest, Han, in 230; then Zhao in 228, Wei in 225; then the largest, Chu, in 223, Yan in 222; and last, Qi, in 221. I ate them one at a time, never letting them join hands.\n\nWith the fighting done, the harder thing began: a territory this vast, how do you rule it?\n\nI had a chancellor named Li Si. He gave me a plan that rewrote the next two thousand years of China. The old way was enfeoffment: hand out land to kin and to men who had earned it, and let each become a lord of his own domain. But such lords, once grown strong, are the next age of warring states.\n\nLi Si said: no more enfeoffment. Carve the realm into commanderies, divide each commandery into counties, and send officials of the court to govern each one, officials I appoint and I dismiss, with land and armies held by the center. This is the commandery-county system.\n\nFrom then on the realm belonged not to a crowd of lords but to one man: me.',
      },
      deliverGoal: 'N3 setup — 前 230-221 十年灭六国顺序 (韩→赵→魏→楚→燕→齐, 不给联手机会) + 李斯丞相献策 + 郡县制 vs 分封 (官由皇帝任命撤换/中央集权) + 「天下属于一个人」+ 改写两千年',
      engagementHook: '李斯劝我别分封——别把地分给诸侯，全国设郡县，官全归中央。你觉得「把权力收到一个人手里」，是治理的智慧，还是埋下的祸根？',
      expectsRealAnswer: false,
    },
    {
      id: 'qsh-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你统一了天下，可你低头一看，乱得吓人。六个国家原来各写各的字、用各的钱、量东西各有各的尺。从齐到楚，一封公文可能没人看得懂；一笔生意，秤和钱对不上。\n\n你下了一连串命令，要把这一切捏成一个。书同文：全国用同一种文字（小篆）。车同轨：车轴定一个宽度，这样全国的车辙一样宽，路能通到底。统一度量衡：一斤多重、一尺多长，全国一个标准。统一货币：废掉六国杂钱，用秦国的圆形方孔钱（半两钱）。\n\n这些事，没有一件轰轰烈烈。可正是这些不起眼的标准，把六块地真正粘成了一个国家——比你打的任何一场仗都长久。\n\n现在你要想一件事：你做这些，到底是为了让百姓日子好过，还是为了让你的命令能一路畅通无阻地传到帝国每一个角落？这两件事，在你心里分得清吗？',
        en: 'Now you are me.\n\nYou have unified the realm, and then you look down and it is frighteningly chaotic. The six states each wrote their own script, used their own coins, measured things with their own rulers. A document from Qi to Chu might be unreadable; a single trade, with scales and money that did not match.\n\nYou issue a string of orders to press it all into one. Same script: the whole realm uses one writing, the small-seal script. Same axle: cart axles set to a single width, so wheel ruts run the same everywhere and roads carry through. Same weights and measures: how heavy a catty, how long a foot, one standard for all. Same coin: scrap the six states\' tangle of money and use the Qin round coin with the square hole.\n\nNone of this was glorious. Yet it was these unremarkable standards that truly glued six lands into one country, more lasting than any battle you fought.\n\nNow here you must ask one thing: did you do this to make the common people\'s lives easier, or to make your orders run unobstructed to every corner of the empire? In your own heart, can you tell those two apart?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 统一后乱 (六国各字各钱各尺) + 书同文 (小篆)/车同轨/统一度量衡/统一货币 (半两钱) + 「不起眼的标准比战争更长久把六块地粘成一国」+ 自我拷问: 为百姓还是为命令畅通无阻',
      engagementHook: '我统一了文字、钱、尺、车轴——这些不起眼的标准，比任何一场仗都长久。可我做这些，是为百姓方便，还是为我的命令畅通无阻？你分得清吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'qsh-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '统一之后，最让我睡不着的是北边。\n\n北边草原上，是匈奴——一群骑马的游牧人，来去如风，抢了就跑，中原的步兵追不上。战国时候，北边几个国家各自修过一段段土墙挡他们。\n\n我派大将蒙恬带三十万人北上，把匈奴往北赶，然后做一件大事：把原来各国那些断断续续的旧墙，连起来、补起来、往西往东接长，连成一道横在帝国北缘的长城。\n\n这里你得记住一个事实，免得被后人骗了：我修的长城，主要是夯土——把土一层层夯实垒起来的土墙，不是后人旅游照片里那种灰砖大墙。那种砖石长城是一千六百多年后明朝修的。我的长城，是土的。\n\n修墙的人，是谁？是被一道道法令从田里、从家里征来的几十万普通人——戍卒、刑徒。他们走上千里，到这荒寒的北境，搬土、夯墙、戍守。\n\n我在咸阳的地图上看，这道墙又长又壮，是我帝国的脊梁。可那道墙底下埋了多少人，我的地图上没有标。\n\n（那些人怎么过的，你换到他们那一遍，会亲眼看见。）',
        en: 'After unification, what kept me awake was the north.\n\nOn the northern steppe were the Xiongnu, mounted nomads who came and went like the wind, raided and fled, faster than any foot soldier of the central lands could chase. In the Warring States age, several northern states had each built stretches of earthen wall to keep them out.\n\nI sent the general Meng Tian north with three hundred thousand men to drive the Xiongnu back, and then to do a great thing: take the old broken stretches of the various states\' walls and join them, mend them, extend them east and west, into one long wall lying across the northern edge of the empire.\n\nHere you must hold one fact, so that later ages do not fool you: the wall I built was mostly rammed earth, walls raised by pounding earth down layer by layer, not the gray brick wall in the tourist photographs of later days. That brick-and-stone wall was built more than sixteen hundred years later, by the Ming. My wall was earth.\n\nAnd who built it? Hundreds of thousands of ordinary people, conscripted by one law after another from their fields and their homes: garrison conscripts and convict-laborers. They walked a thousand li to this cold and barren frontier to haul earth, pound walls, and stand guard.\n\nOn my map at Xianyang the wall looks long and mighty, the spine of my empire. But how many were buried beneath it, my map did not mark.\n\n(How those people lived, you will see for yourself when you switch to their pass.)',
      },
      deliverGoal: 'N5 story — 北边匈奴威胁 + 蒙恬三十万北上驱匈奴 + 长城是连补旧墙 (MYTH BUST: 夯土非明代砖石/明长城晚 1600 年) + 修墙的是几十万戍卒刑徒 + 「地图上没标埋了多少人」+ 桥到戍卒 lens',
      engagementHook: '我修的长城是夯土，不是后人旅游照片里的砖石大墙——那是一千六百多年后明朝修的。一道我看着雄伟的墙，底下埋了多少人，我的地图上没有标。你会去问那个数字吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'qsh-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '长城摆平了北边，可帝国内部，有一种我更怕的东西：不同的声音。\n\n公元前 213 年，一场宴会上，有读书人当面说我：你废分封、行郡县，是错的，古时候的圣王不是这么干的，你不学古，长不了。\n\n李斯听了大怒。他对我说：现在天下已经定于一，可这些读书人，张口闭口拿古代来批评当下，私下里聚众议论朝政，人心就这么散了。不如把那些书烧掉。\n\n于是我下了焚书令：除了医药、占卜、种田这类实用的书，还有秦国自己的史书，民间收藏的《诗》《书》和六国史书，一律烧掉。谈论这些书的，处死。\n\n第二年，又出了一件事。我花大价钱养着一批方士，让他们替我找长生不死的药。两个方士骗了我的钱，还在背后说我坏话，然后跑了。我震怒，下令追查咸阳的读书人，最后据《史记》记载，活埋了四百六十多个。这就是后人说的「坑儒」。\n\n（《史记》是一百多年后司马迁写的，他记的人数和细节，后世有些史家存疑。但焚书这件事，是确凿的。）\n\n同一道意志——「天下要统一」。统一文字，是把六国的字合成一种；焚书坑儒，是把六国的声音、不同的想法，也合成一种。一道命令的两面。',
        en: 'The wall settled the north, but inside the empire was something I feared more: different voices.\n\nIn 213 BCE, at a banquet, a scholar reproached me to my face: in scrapping enfeoffment and ruling by commanderies you are wrong; the sage kings of old did not do this; a ruler who does not study the ancients will not last.\n\nLi Si was furious. He said to me: the realm is now settled as one, yet these scholars open their mouths to judge the present by the past, gather in private to debate the court\'s affairs, and so the people\'s loyalty scatters. Better to burn those books.\n\nSo I issued the order to burn the books. Except for practical works on medicine, divination, and farming, and Qin\'s own histories, the privately held Odes and Documents and the histories of the six states were all to be burned. Anyone who discussed these books would be put to death.\n\nThe next year another thing happened. I had kept, at great cost, a group of masters of the arts to find me an elixir that would let me never die. Two of them cheated me of my money, slandered me behind my back, and fled. In a rage I ordered an inquiry into the scholars at Xianyang, and in the end, as the Records of the Grand Historian tell it, more than four hundred and sixty were buried alive. This is what later ages call the burying of the scholars.\n\n(The Records were written more than a century later by Sima Qian, and some later historians question his numbers and details. But the burning of the books is firmly attested.)\n\nThe same will, that the realm must be one. To unify the writing is to fuse six scripts into one; to burn the books and bury the scholars is to fuse the six states\' voices, their differing thoughts, into one as well. Two faces of one order.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 焚书 213 BCE (读书人当面批郡县/李斯主张焚/烧《诗》《书》六国史留医药占卜农书) + 坑儒 212 BCE (方士骗钱逃/活埋 460+ 据《史记》, anti-fab 括号: 司马迁百年后写/数字存疑但焚书确凿) + 跨视角对位: 同一道「统一」意志 — 书同文统一字 vs 焚书统一声音, 一道命令两面',
      engagementHook: '统一文字，是把六国的字合成一种；焚书坑儒，是把六国的声音、不同的想法，也合成一种。同一道「天下要统一」的意志，怎么会长出这两张脸？',
      expectsRealAnswer: false,
    },
    {
      id: 'qsh-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我做的大工程，不止一道长城。\n\n我修驰道——从咸阳辐射出去的几条国家级大路，让我的车马、军队能最快到达帝国任何一处。我修阿房宫——一座大到史书说「上面能坐一万人」的宫殿（不过它到我死都没真正建完）。我还从即位起，就在骊山给自己修陵墓——一修就是几十年，最多时役使了号称七十万人。\n\n这座陵墓里，埋着后来震惊世界的兵马俑——成千上万个真人大小的陶土士兵、战马、战车，排成军阵，替我在地下守卫。（这支地下大军，一直到公元 1974 年才被几个打井的农民挖出来。）\n\n长城、驰道、阿房宫、骊山陵——每一项都是惊人的奇迹。可这些奇迹，是同一笔账：用千千万万普通人的命，堆出来的。\n\n一道徭役令下去，一个农民就得放下田、离开家、走上千里，去服劳役。很多人，再也没回来。\n\n我站在我的奇迹中间，从没问过一句：这些人，有谁问过他们愿不愿意吗？',
        en: 'The great works I built were not only the wall.\n\nI built the imperial highways, several state-grade roads radiating out from Xianyang, so my chariots and armies could reach any part of the empire fastest. I built the Epang Palace, a palace so vast the histories say ten thousand could sit in its hall (though it was never truly finished by the time I died). And from my accession I built my own tomb at Mount Li, working at it for decades, employing at its height a reported seven hundred thousand.\n\nIn that tomb lay what would later astonish the world, the terracotta army: thousands upon thousands of life-sized clay soldiers, war horses, and chariots, drawn up in formation to guard me underground. (This underground army was not unearthed until 1974, by a few farmers digging a well.)\n\nThe wall, the highways, the Epang Palace, the Mount Li tomb, each a staggering wonder. But these wonders were a single account: heaped up out of the lives of countless ordinary people.\n\nOne corvee order went out and a farmer had to set down his fields, leave his home, walk a thousand li, and serve. Many never came back.\n\nI stood in the midst of my wonders and never once asked: did anyone ask these people whether they were willing?',
      },
      deliverGoal: 'N7 story — 大工程清单 (驰道/阿房宫未完工/骊山陵几十年役 70 万) + 兵马俑 (真人大小陶土军阵/1974 农民打井挖出) + 「每项奇迹是同一笔账: 用千万人命堆出来」+ 徭役令下农民走千里很多没回来 + 「有谁问过他们愿不愿意」',
      engagementHook: '长城、驰道、阿房宫、兵马俑——每一项都是惊人的奇迹，可每一项都是用千千万万普通人的命堆出来的。我站在奇迹中间，从没问过：有谁问过他们愿不愿意？',
      expectsRealAnswer: false,
    },
    {
      id: 'qsh-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我最怕的一件事，是死。\n\n我做成了之前没人做成的事，我不甘心像普通人一样死掉。我派人出海去找传说中的仙岛，找能让人长生的仙药。我吃方士炼的丹药——那里头很可能有水银，越吃越伤身。\n\n我一次次出巡，坐着车队走遍我的帝国，一是宣示威权，二也是在找那颗永远找不到的药。\n\n公元前 210 年，我在第五次出巡的路上，死了。死在沙丘那个地方，离咸阳还很远。\n\n临死前，我留了遗诏，要让在北边军中的长子扶苏回来继位。\n\n可你猜怎么着？我的遗诏，没能算数。我尸骨未寒，身边几个最信任的人，就把我的遗愿改了——改成了对他们有利的样子。\n\n（怎么改的、谁改的，你换到李斯那一遍，会从他自己嘴里听见。）\n\n我活着的时候，一道命令能传遍天下。我一死，我连自己最后一道命令，都保不住。',
        en: 'The thing I feared most was death.\n\nI had done what no one before me had done, and I would not consent to die like an ordinary man. I sent men out to sea to find the legendary isles of the immortals, to find the drug that lets a man never die. I swallowed the elixirs the masters of the arts brewed, which very likely held mercury, harming me the more I took.\n\nTime and again I went on tour, traveling my empire in a long procession, partly to display my power, partly still in search of that drug I would never find.\n\nIn 210 BCE, on my fifth tour, I died. I died at a place called Shaqiu, still far from Xianyang.\n\nBefore I died I left a final edict, that my eldest son Fusu, then with the army in the north, should return and take the throne.\n\nBut do you know what happened? My final edict was not allowed to stand. My body was not yet cold when a few of the men I trusted most altered my last wish, altered it into a shape that served them.\n\n(How it was altered, and by whom, you will hear from his own mouth when you switch to Li Si\'s pass.)\n\nWhile I lived, one order of mine could run across the whole realm. The moment I died, I could not even protect my own last order.',
      },
      deliverGoal: 'N8 story — 怕死 + 找仙药/吃丹药 (含水银越吃越伤) + 出巡兼找药 + 210 BCE 第五次出巡死于沙丘 + 遗诏要扶苏继位 + 「尸骨未寒被身边人改遗诏」(桥到李斯 lens) + 「活着一道命令传天下/死了保不住最后一道命令」',
      engagementHook: '我活着的时候，一道命令能传遍天下；我一死，连自己最后一道遗诏都保不住，被身边人偷偷改了。一个靠绝对权力撑起的帝国，当那个人不在了，会怎样？',
      expectsRealAnswer: false,
    },
    {
      id: 'qsh-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我死之后，事情塌得比谁想的都快。\n\n公元前 209 年，我死才一年，一队被征去戍边的农民，因为大雨误了报到的期限——按秦法，误期是要杀头的。横竖是死，他们里有两个人，叫陈胜、吴广，干脆反了。一句「天下苦秦久矣」，点着了整个帝国。\n\n反秦的火，一处接一处烧起来。我那个被改立的、软弱的小儿子，根本压不住。公元前 206 年，我亲手缔造的大秦帝国，垮了。从我称始皇帝那年算起，连十五年都没到。\n\n我曾经下令，让我的帝国传到万世。结果，传到二世就完了。\n\n可你别急着笑话我。我立的郡县制、我统一的文字、度量衡——这些，没跟着秦朝一起死。后来的汉朝，骂着我残暴，却几乎原封不动地继承了我这套制度，用了下去。后面两千年，一个又一个王朝，都在我画的这张骨架上运转。\n\n我这个人没了，我这个朝代没了。可我造的这台机器，活了两千年。',
        en: 'After I died, things collapsed faster than anyone imagined.\n\nIn 209 BCE, only a year after my death, a band of farmers conscripted for frontier garrison duty were held up by heavy rain and missed their reporting deadline. By Qin law, missing the deadline meant beheading. Dead either way, two among them, Chen Sheng and Wu Guang, simply rose in revolt. One cry, "the realm has long suffered under Qin," set the whole empire alight.\n\nThe fires of revolt rose one place after another. My weak younger son, set up in Fusu\'s place, could not hold them down at all. In 206 BCE the great Qin empire I had built with my own hands fell. Counting from the year I named myself First Emperor, it had not lasted even fifteen years.\n\nI had ordered my empire to pass to the ten-thousandth generation. It ended at the Second.\n\nBut do not be too quick to laugh at me. The commandery-county system I set up, the writing and the measures I unified, these did not die with the Qin. The Han dynasty that followed cursed me as a tyrant and yet inherited my system almost untouched and carried it on. For the two thousand years after, dynasty upon dynasty ran on the skeleton I had drawn.\n\nThe man is gone. The dynasty is gone. But the machine I built lived two thousand years.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 209 BCE 陈胜吴广起义 (戍卒大雨误期/秦法误期当斩/「天下苦秦久矣」) + 206 BCE 秦亡不到 15 年 + 妄想传万世结果二世而亡 + 但郡县制/书同文/度量衡没死 + 汉骂残暴却继承制度 + 「人没了朝代没了机器活两千年」',
      engagementHook: '我想传万世，结果二世而亡，不到十五年。可我造的那套制度——郡县、文字、度量衡——活了两千年，连骂我残暴的汉朝都照搬。一个人短命的暴政，留下了长命的制度。你怎么看这件事？',
      expectsRealAnswer: false,
    },
    {
      id: 'qsh-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是千古一帝。在我之前，「中国」只是一堆互相砍杀的国家；在我之后，「中国」才第一次成为一个统一的整体。我立的郡县制、统一的文字和度量衡，奠定了之后两千年的中华大一统格局。没有我那十年的铁腕，就没有后来那个「中国」的概念。\n\n另一种说法：我是空前的暴君。我用焚书坑儒掐死异见，用酷刑连坐压制百姓，把几十万人活活役死在长城和我的陵墓上。我从没问过任何一个被我征用的人愿不愿意。我的统一，是踩着无数无名者的尸骨堆起来的。\n\n这两边不是「功大于过」或「过大于功」可以一笔抹平的。它们是同一件事的两面——同一道「天下归一」的意志，既造了制度，也碾了人。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I am the emperor of the ages. Before me, "China" was only a heap of states hacking at one another; after me, "China" became for the first time one unified whole. The commandery-county system I set up, the writing and the measures I unified, laid the foundation of two thousand years of a unified China. Without my ten years of an iron hand, the very idea of that "China" would not exist.\n\nThe other view: I am a tyrant without precedent. I choked off dissent by burning books and burying scholars, crushed the people with harsh punishment and group liability, and worked hundreds of thousands to death on the wall and on my tomb. I never once asked any of the people I conscripted whether they were willing. My unification was heaped up on the bones of countless nameless dead.\n\nThese two are not something "the merit outweighs the fault," or the reverse, can smooth over. They are two faces of one thing, one will that "the realm must be one," which built the system and ground down the people alike.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (千古一帝/第一次让中国成统一整体/郡县制文字度量衡奠定两千年大一统) / 另一种说法 (空前暴君/焚书坑儒酷刑连坐/役死几十万/没问过任何人/踩无名尸骨) / 同一道意志两面 / 想 30 秒',
      engagementHook: '千古一帝，和空前暴君——是同一个我，同一道「天下归一」意志的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'qsh-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个开端？\n\n一个统一的中国，被庆祝了两千年；同一个统一，是用焚书、酷刑和几十万人的命换来的。这两件事不是分开的两段历史，是同一个我、同一道命令的同一面墙——墙是雄伟的，墙底下埋着人。把它们放在同一个天平上，你怎么称？\n\n再想一步。在你读过的、听过的故事里——是不是常常有这样的事：某个伟大的成就、某座了不起的建筑、某项让所有人受益的工程，背后站着一群从没被问过、也没被记住的人？\n\n那么，当一件了不起的事，是踩着别人的痛苦建起来的——你要怎么同时把这两样东西都拿在手里：既看见那件事真的了不起，又不假装那些代价不存在？',
        en: 'Having walked my whole life, how would you judge a beginning like this?\n\nA unified China, celebrated for two thousand years; the same unification, bought with burned books, harsh punishment, and the lives of hundreds of thousands. These two are not separate stretches of history. They are one face of the same wall built by the same me on the same order: the wall is mighty, and beneath it people are buried. Put them on the same scale. How do you weigh them?\n\nThen take one more step. In the stories you have read and heard, is it not often so: some great achievement, some remarkable building, some project that benefits everyone, with a crowd of people standing behind it who were never asked and never remembered?\n\nSo when a remarkable thing is built on others\' suffering, how will you hold both in your hands at once: to see that the thing is truly remarkable, and yet not pretend the cost was nothing?',
      },
      deliverGoal: 'N11 close — 评价开端 (统一被庆祝两千年 vs 焚书酷刑几十万命/同一面墙雄伟而墙下埋人同一天平) + transfer「读过听过的故事里伟大成就背后没被问过没被记住的人」+ 当了不起的事踩着别人痛苦建起, 怎么同时拿住成就与代价',
      engagementHook: '一个统一的中国被庆祝两千年，可它是用焚书、酷刑和几十万人的命换来的——同一面墙，雄伟，墙下埋着人。你会怎么评价这样一个开端？当一件了不起的事踩着别人的痛苦建起，你怎么同时把成就和代价都拿在手里？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: 李斯 Li Si (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var liSiLens = {
  id: 'li-si',
  name: 'Li Si',
  nameCn: '李斯',
  role: 'lonely-mediator',
  perspectiveTag: 'legalist-chancellor',
  icon: '📜',
  description: {
    cn: '楚国人，出身一个小吏，年轻时穷得没名气，靠才学一步步爬到秦帝国的丞相，一人之下、万人之上。他是这个帝国的总设计师：郡县制是他劝皇帝定的，文字统一是他主持的，连焚书令也是他提的主张。他是法家最得力的执行者，相信只有冷酷的法、绝对的权，才能让天下不再大乱。可这个他亲手喂大的机器，最后也吞掉了他自己——公元前 208 年，他被腰斩于咸阳街市。这一遍让你从一个绝顶聪明的技术官僚内部，看一个人怎么服务一台机器，又怎么被这台机器碾碎。',
    en: 'A man of Chu, born to a minor clerk, poor and unknown in his youth, who climbed by his talent step by step to become chancellor of the Qin empire, second to one man and above ten thousand. He was the empire\'s chief designer: the commandery-county system was set by his urging, the unification of the writing was led by him, and even the order to burn the books was his proposal. He was Legalism\'s ablest executor, believing that only cold law and absolute power could keep the realm from chaos again. Yet the machine he fed with his own hands swallowed him in the end: in 208 BCE he was cut in two at the waist in the Xianyang market. This pass lets you watch, from inside a brilliant technocrat, how a man serves a machine and is then ground to pieces by it.',
  },
  storyboard: [
    {
      id: 'ls-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我年轻的时候，在楚国一个小衙门里当差，管粮仓。\n\n有一天我上厕所，看见厕所里的老鼠，吃脏东西，一有人来就吓得乱窜。后来我去看粮仓里的老鼠，吃得肥头大耳，住在大屋里，没人没狗去惊扰它。\n\n我盯着那两窝老鼠看了很久，心里想：人这一辈子，是有出息还是没出息，跟老鼠一样，全看你待在什么地方。\n\n从那天起，我决定离开楚国，去当时最强的秦国，找一个能让我这只「老鼠」住进大粮仓的位置。\n\n我是李斯。后来，我成了秦帝国的丞相。我帮第一个皇帝设计了这个帝国的骨架。我做的事，影响了中国两千年。\n\n这一遍，你坐进我这个位置。你是这屋里最聪明、最有用的人。可越往后你越会发现：聪明和有用，保不住你自己的命。',
        en: 'When I was young I held a small post in a granary office in Chu.\n\nOne day I went to the latrine and saw the rats there, eating filth, bolting in fear the moment anyone came near. Later I went to look at the rats in the granary, fat and sleek, living in a great hall, where no man or dog came to startle them.\n\nI stared a long while at those two nests of rats and thought: whether a man amounts to anything in his life, like a rat, depends entirely on where he places himself.\n\nFrom that day I resolved to leave Chu and go to Qin, the strongest state of the time, to find a place that would let a rat like me move into the great granary.\n\nI am Li Si. Later I became chancellor of the Qin empire. I helped the first emperor design the skeleton of that empire. What I did shaped China for two thousand years.\n\nThis pass puts you in my seat. You are the cleverest and most useful man in the room. But the further on you go, the more you will find: clever and useful cannot keep your own life safe.',
      },
      deliverGoal: 'N1 hook — 李斯老鼠论 (厕鼠 vs 仓鼠/出息看待在什么地方) + 离楚去秦 + 自我介绍 (爬到丞相/设计帝国骨架/影响两千年) + 这一遍视角 (最聪明最有用但保不住自己的命)',
      engagementHook: '我看着两窝老鼠悟出一个道理：人有没有出息，全看你待在什么地方。你信「位置决定命运」吗，还是觉得人能凭本事改变处境？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我到了秦国，靠的不是出身，是脑子和嘴。\n\n我去拜在当时一位大学问家门下学「帝王之术」——怎么治国、怎么用人、怎么让一个君主把天下抓在手里。学成之后，我看准了秦国是唯一能统一天下的国家，就去投奔。\n\n我给秦王（也就是后来的始皇帝）出的第一个大主意，是「先取韩」——劝他抓住六国各自为战、互不信任的时机，一个一个吞掉，别给他们联手的机会。\n\n我信奉的，是法家。法家的想法很冷：别指望人会自觉做好事。人都是趋利避害的——你只要把赏和罚定得清清楚楚、毫不留情，立了功就重赏，犯了法就重罚，连坐到一家一族，天下自然就服服帖帖。\n\n仁义道德？法家觉得那是乱世里的奢侈品。真正能止乱的，是法，是权，是让每个人都怕。\n\n我相信这一套。因为我亲眼见过，靠这一套，秦国怎么从西边的蛮子，变成了最强的国家。',
        en: 'I came to Qin, and what carried me was not birth but mind and tongue.\n\nI studied under a great scholar of the day, learning the art of rulership: how to govern, how to use men, how to let a ruler hold the realm in his grasp. When I had learned it, I judged that Qin alone could unify the realm, and I went to serve it.\n\nThe first great counsel I gave the King of Qin, who would become the First Emperor, was "take Han first": seize the moment while the six states fought separately and distrusted one another, swallow them one by one, and give them no chance to join hands.\n\nWhat I believed in was Legalism. Legalism\'s thought is cold: do not count on people to do good of their own accord. Men all chase gain and flee harm. Set reward and punishment out clearly and without mercy, reward merit richly, punish crime hard, hold whole families and clans liable, and the realm will fall into obedience on its own.\n\nBenevolence and virtue? Legalism held those to be luxuries of a chaotic age. What truly stops chaos is law, is power, is making every man afraid.\n\nI believed in all of it, because I had seen with my own eyes how, by this, Qin turned from the western barbarians into the strongest state of all.',
      },
      deliverGoal: 'N2 setup — 李斯学帝王之术 + 看准秦能统一去投奔 + 献策「先取韩」(趁六国各自为战吞并不给联手机会) + 法家核心 (人趋利避害/赏罚分明连坐/不靠仁义靠法与权与让人怕) + 「亲眼见秦靠这套从蛮子变最强」',
      engagementHook: '法家相信：别指望人自觉做好事，只要赏罚够狠、让每个人都怕，天下自然服帖。比起靠道德教化，靠制度和恐惧来治理——你觉得哪个更靠得住？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我的位置，有点尴尬。\n\n我是楚国人，是个外来户。秦国本土那些贵族大臣，一直防着我们这些外国来的客卿。有一年，秦国出了一桩间谍案，本土派趁机上奏：把所有外国来的客卿，全都赶走。我的名字也在驱逐名单上。\n\n眼看到手的前程要泡汤，我写了一篇奏章给秦王，就是后来很有名的《谏逐客书》。我的意思是：秦国能强大到今天，靠的恰恰是历代从外国招来的人才。你今天要是把外人都赶走，等于把人才拱手送给敌国。\n\n秦王读了，收回了驱逐令，还把我留下重用。\n\n你看，我这个人，从来不是靠站队、靠出身活下来的。我是个夹在中间的人——本土派不把我当自己人，可我比谁都更卖力地为这个国家设计制度。\n\n我的全部价值，系在一件事上：我对皇帝有用。这是我往上爬的全部本钱，也是后来要了我命的那根线。',
        en: 'My position was an awkward one.\n\nI was a man of Chu, an outsider. The native Qin nobles and ministers had always guarded against us foreign guest-officials. One year a spy case broke out in Qin, and the native faction seized the chance to memorialize the throne: drive out every foreign guest-official. My name was on the list of the expelled.\n\nWith the future I had reached for about to dissolve, I wrote a memorial to the King of Qin, the one later famous as the Memorial Against Expelling the Guest-Officials. My argument was this: that Qin had grown strong to this day was precisely because of the talent it had drawn from foreign lands across the generations. To drive the outsiders out now was to hand your talent to your enemies.\n\nThe King read it, withdrew the order of expulsion, and kept me on in high trust.\n\nYou see, I never survived by taking sides or by birth. I was a man caught in the middle: the native faction never counted me one of their own, yet I labored harder than anyone to design this state\'s institutions.\n\nMy whole worth hung on one thing: I was useful to the emperor. That was all the capital I had for climbing, and it was also the thread that would later cost me my life.',
      },
      deliverGoal: 'N3 setup — 李斯外来户尴尬 + 逐客令 (间谍案/本土派趁机驱逐客卿/李斯在名单上) + 《谏逐客书》(秦强靠外来人才/赶人等于资敌) + 秦王收回令重用 + 「夹在中间的人/全部价值系在对皇帝有用/这是本钱也是后来要命的线」',
      engagementHook: '我不是靠站队、靠出身活下来的，我的全部价值系在一件事上：对皇帝有用。把自己的命运全押在「对一个人有用」上——你觉得这聪明，还是危险？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n公元前 221 年，六国全灭，天下统一了。可摆在面前的难题，比打仗还棘手：这么大一块地，从来没人管过，怎么管？\n\n朝堂上，一派老臣主张沿用老办法——分封：把皇子、功臣封出去，各管一方，像周朝那样。这听起来稳妥，大家都熟。\n\n可你心里清楚：周朝就是这么完蛋的。分出去的诸侯，几代之后就各自坐大，互相打，打出了五百年的战国。分封，就是给下一场大乱埋种子。\n\n你站出来，跟整个老臣集团对着干。你对皇帝说：别分封。全国设郡、郡下设县，官全部由朝廷派、由皇帝任免，地和兵全归中央。一个诸侯都不留。\n\n这是个得罪一大片人的主张。可你赌的是：皇帝想要的是「江山永固」，而你这套，正是把权力锁死在他一个人手里的唯一办法。\n\n现在你要想：你劝皇帝把所有权力都收到他一个人手里——这到底是为了天下不再乱，还是因为，一个绝对集权的皇帝，才最需要你这样一个设计制度的人？',
        en: 'Now you are me.\n\nIn 221 BCE the six states were all destroyed and the realm was one. But the problem before us was thornier than war: a territory this vast, never governed by anyone before, how do you rule it?\n\nAt court one faction of old ministers argued for the old way, enfeoffment: send out the imperial sons and the meritorious to each rule a region, as the Zhou had done. It sounded safe; everyone knew it.\n\nBut you knew in your heart: that was exactly how the Zhou had perished. The lords sent out grew strong in their own right within a few generations, fought one another, and fought out five hundred years of warring states. Enfeoffment was sowing the seed of the next great chaos.\n\nYou stepped forward against the whole bloc of old ministers. You said to the emperor: no enfeoffment. Set up commanderies across the realm, counties beneath them, officials all sent by the court and appointed and dismissed by the emperor, land and armies all held by the center. Not one lord left.\n\nThis was a stance that offended a great many people. But you wagered on this: what the emperor wanted was a dynasty fixed forever, and your plan was the only way to lock all power into his single hand.\n\nNow you must ask: in urging the emperor to gather all power into his one hand, was it really so the realm would not fall into chaos again, or because an absolute emperor most needs a man like you, a man who designs the system?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 前 221 统一后难题怎么管 + 老臣主张分封 (像周朝) vs 李斯看出周就这么完的 (诸侯坐大→战国) + 李斯单挑老臣集团主张郡县制 (官皇帝任免/地兵归中央) + 赌皇帝要江山永固 + 自我拷问: 为天下不乱还是因绝对集权的皇帝最需要你这种人',
      engagementHook: '我劝皇帝把所有权力都收到他一个人手里。这到底是为了天下不再乱，还是因为——一个绝对集权的皇帝，才最需要我这样一个设计制度的人？这两个动机，我自己分得清吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '郡县制定下来了。可天下刚合，到处还是六国的旧痕迹，乱得很。\n\n最头疼的是文字。六个国家，写同一个字能写出好几种样子。一份从咸阳发出的公文，到了原来的楚国、齐国，当地的官吏不一定看得懂。一个国家，政令却传不通，这怎么行？\n\n这件事，落到我头上。我主持把文字统一：以秦国原有的字为底子，整理简化，定出一套全国通用的标准字，就是小篆。从此，无论你在帝国的东边还是西边，写「马」就是同一个「马」，公文一路看得懂。\n\n这不是一件起眼的事，没有打仗那么轰动。可你想想：一道命令，能让从东海到陇西的人都看懂、都照办——这才是「大一统」真正落地的样子。打仗只能征服土地，统一文字，才真正把人心和政令拧成一股。\n\n两千年后，中国还在用从我这套小篆一路演变下来的方块字。这是我这辈子，最得意的一笔。',
        en: 'The commandery-county system was settled. But the realm had only just been joined, and the old traces of six states were everywhere, full of confusion.\n\nThe worst headache was the writing. The six states could write one and the same character in several different shapes. A document sent out from Xianyang, reaching the old Chu or Qi, might be unreadable to the local officials. One state, yet its orders could not pass through. How could that stand?\n\nThis fell to me. I led the unifying of the writing: taking Qin\'s existing characters as the base, ordering and simplifying them, setting out one standard script for the whole realm, the small-seal script. From then on, whether you were in the empire\'s east or west, to write "horse" was to write the same "horse," and documents could be read all the way through.\n\nIt was not a glorious thing, nothing as loud as a battle. But think: one order, made readable and obeyed by people from the eastern sea to the far west, this is what a true unification looks like when it lands. War can only conquer land; unifying the writing truly twists hearts and orders into one strand.\n\nTwo thousand years later, China still writes the square characters that descend from my small-seal script all the way down. This is the work of my life I am proudest of.',
      },
      deliverGoal: 'N5 story — 郡县定后文字乱 (六国一字多形/公文传不通) + 李斯主持书同文 (以秦字为底简化定小篆/「马」全国同一个) + 「打仗征服土地, 统一文字才把人心政令拧成一股」+ 两千年后还在用方块字是李斯最得意的一笔',
      engagementHook: '打仗只能征服土地，统一文字才真正把人心和政令拧成一股——两千年后中国还在用从我这套字演变下来的方块字。你觉得，是刀剑还是文字，更能把一群人变成「一个民族」？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可我手上的这套本事，有一个我一直不愿细想的暗面。\n\n公元前 213 年，一场宫廷宴会上，有读书人当面批评皇帝：你废分封、搞郡县，违背古制，长不了。这话戳到了我——郡县制是我一手设计的，骂郡县，就是骂我。\n\n我站出来对皇帝说了一番话，我现在原原本本告诉你，因为这是我一生最沉重的一笔：我说，如今天下已经一统，可这些读书人偏偏拿古代来否定现在，私下聚在一起非议朝政，长此下去，皇帝的权威就被架空了。不如把民间那些《诗》《书》、六国的史书，都烧掉。谈论这些书的，杀。\n\n皇帝准了。这就是焚书令。\n\n你听明白这里的对称没有：同样是我这双手——一只手统一文字，让天下人能读懂同一道命令；另一只手烧书，让天下人不能再读到不同的想法。\n\n书同文，是让大家用同一种字。焚书，是让大家只剩同一种声音。我亲手做了这两件事，它们是同一套逻辑的两面：一个真正「大一统」的帝国，连人们脑子里想的，也得统一。',
        en: 'But the craft in my hands had a dark side I never cared to think through.\n\nIn 213 BCE, at a court banquet, a scholar reproached the emperor to his face: in scrapping enfeoffment and making commanderies you defy the old ways, and you will not last. The words stung me, for the commandery-county system was mine, of my own design; to curse the commanderies was to curse me.\n\nI stepped forward and said something to the emperor that I now tell you in full, because it is the heaviest thing of my life. I said: the realm is now one, yet these scholars insist on using the past to deny the present, gathering in private to fault the court; let it go on and the emperor\'s authority is hollowed out. Better to burn the privately held Odes and Documents and the histories of the six states. Put to death any who discuss them.\n\nThe emperor approved. This was the order to burn the books.\n\nDo you catch the symmetry here: the same two hands of mine, one hand unifying the writing so all under heaven could read the same order, the other hand burning books so all under heaven could no longer read a different thought.\n\nSame script is making everyone use one writing. Burning the books is leaving everyone only one voice. I did both with my own hands, and they are two faces of one logic: a truly unified empire must unify even what people think in their own heads.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 213 BCE 宴会读书人批郡县 (戳到李斯本人) + 李斯主张焚书 (拿古否今/私下非议架空皇帝权威/烧《诗》《书》六国史/谈论者杀) + 皇帝准 + 跨视角对称: 同一双手 — 一手书同文让人读懂同一命令 vs 一手焚书让人读不到不同想法 / 大一统连脑子里想的也要统一',
      engagementHook: '同样是我这双手：一只手统一文字，让天下人读懂同一道命令；另一只手烧书，让天下人读不到不同的想法。书同文和焚书，是不是同一套逻辑的两面？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得对你诚实：我设计的这套制度，有一个我一直绕着走的盲点。\n\n我擅长的是「让帝国高效运转」。郡县怎么设、文字怎么统一、赏罚怎么定、政令怎么一路畅通——这些我算得清清楚楚。\n\n可我的算盘里，从来没有一栏，是「这套制度落到一个普通农民头上，是什么滋味」。\n\n我定下的徭役律、戍卒律，在我眼里是一行行整齐的条文：每个成年男子，一年要服多少天劳役，要去哪里戍守，误期怎么罚。在纸面上，它高效、清晰、无懈可击。\n\n可纸面下面，是几十万被这些条文从田里、从家里抽走的人。他们走上千里去修长城、修陵墓，很多人死在路上、死在工地。我的条文里，他们只是一个个需要被调度的数字。\n\n这是我们这种设计制度的人，最难面对的事：你以为你在「治理天下」，可你治理的「天下」里，那些真正承重的人，从来没坐在你的算盘上。你算的，只是怎么让机器转得更顺——至于机器底下碾着谁，你不看。',
        en: 'I must be honest with you: the system I designed had a blind spot I always walked around.\n\nWhat I was good at was making the empire run efficiently. How to set commanderies, how to unify the writing, how to fix reward and punishment, how to make orders run unobstructed, all this I reckoned out clearly.\n\nBut in my reckoning there was never a column for "what it feels like when this system lands on an ordinary farmer."\n\nThe corvee laws and garrison laws I set down were, to my eye, neat rows of clauses: how many days a year each grown man must labor, where he must stand guard, how lateness is punished. On paper it was efficient, clear, without a flaw.\n\nBut beneath the paper were hundreds of thousands of people pulled by those clauses from their fields and their homes. They walked a thousand li to build the wall and the tomb, and many died on the road, died on the works. In my clauses they were only so many numbers to be deployed.\n\nThis is the hardest thing for those of us who design systems to face: you think you are governing the realm, but in the realm you govern, the people who truly bear the weight were never on your abacus. What you reckon is only how to make the machine run smoother; as for who is ground beneath it, you do not look.',
      },
      deliverGoal: 'N7 story — 李斯制度盲点 (擅长让帝国高效运转/算盘里没有「落到农民头上什么滋味」一栏) + 徭役律戍卒律纸面高效但底下几十万人被抽走死在路上工地 + 「承重的人从来没坐在你的算盘上/算的只是机器转得更顺不看碾着谁」',
      engagementHook: '我以为我在「治理天下」，可我治理的天下里，那些真正承重的普通人，从来没坐在我的算盘上。当一个设计制度的人只看「机器转得顺不顺」，不看机器底下碾着谁——这套制度还能叫「好」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '公元前 210 年，皇帝在第五次出巡的路上，突然病死了。死在沙丘，离咸阳还很远。\n\n这一刻，我面临一生最大的抉择。\n\n皇帝临死留了遗诏：让在北边军中的长子扶苏回来继位。扶苏为人宽厚，跟我这套严刑峻法的路子不大对付。而皇帝身边那个掌印的宦官赵高，找上了我。\n\n赵高对我说：扶苏要是即位，重用的是北边的大将蒙恬，哪还有你李斯的位置？不如我们改了遗诏，立那个一直跟在身边、好控制的小儿子胡亥。\n\n我犹豫了。我知道这是篡改先帝遗命，是灭族的大罪。可我更怕的是——失去丞相的位置，失去我用一辈子换来的一切。\n\n我做了一辈子最大的错事：我同意了。我们伪造遗诏，逼死了扶苏，立了那个昏庸的胡亥当二世皇帝。\n\n那一刻，我用我设计制度的聪明，干了一件最蠢的事。我以为我在保住自己的位置。其实，我亲手放进来的那个赵高，会成为埋葬我、也埋葬整个帝国的人。',
        en: 'In 210 BCE the emperor, on his fifth tour, suddenly fell ill and died. He died at Shaqiu, still far from Xianyang.\n\nIn that moment I faced the greatest choice of my life.\n\nThe emperor had left a dying edict: that his eldest son Fusu, with the army in the north, should return and take the throne. Fusu was a generous man, not well suited to my road of harsh and severe law. And the eunuch Zhao Gao, who held the imperial seal at the emperor\'s side, came to me.\n\nZhao Gao said: if Fusu takes the throne, the man he will favor is Meng Tian, the great general of the north, and what place is left then for you, Li Si? Better we alter the edict and set up the younger son Huhai, who has always been at hand and is easy to control.\n\nI hesitated. I knew this was the forging of the late emperor\'s last command, a crime that wipes out a whole clan. But what I feared more was losing the chancellor\'s seat, losing everything I had traded a lifetime for.\n\nI did the greatest wrong of my life: I agreed. We forged the edict, drove Fusu to his death, and set up the foolish Huhai as the Second Emperor.\n\nIn that moment, with all my cleverness at designing systems, I did the stupidest thing. I thought I was keeping my own place. In truth, the Zhao Gao I had let in with my own hand would become the man who buried me, and the whole empire with me.',
      },
      deliverGoal: 'N8 story — 210 BCE 皇帝沙丘病死 + 李斯一生最大抉择 + 遗诏要扶苏 (宽厚不合李斯严法) + 赵高拉拢 (扶苏即位重用蒙恬没你位置/改立好控制的胡亥) + 李斯犹豫怕失去位置 + 同意伪造遗诏逼死扶苏立胡亥二世 + 「用设计制度的聪明干最蠢的事/亲手放进来的赵高会埋葬他和帝国」',
      engagementHook: '皇帝一死，我面临一生最大的抉择：守住先帝遗诏，还是改了它保住自己的位置。我选了后者。当「守住原则」和「保住自己」撞在一起，你赌哪一个？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我亲手放进来的赵高，没有放过我。\n\n胡亥即位后，赵高一步步把我架空。他在二世面前进谗言，说我谋反。我写了一封又一封辩白的奏章，可那些奏章，全落到赵高手里，到不了皇帝面前。\n\n公元前 208 年，我被下狱、严刑拷打，最后被判腰斩（拦腰斩成两段）。刑场就在咸阳的街市上，当众处死，还株连了全族。\n\n临刑前，我对一起赴死的儿子说了一句话：我真想再和你，牵着咱们家那条黄狗，出上蔡东门去追兔子啊——可这辈子，再也回不去了。\n\n你看出这里头的残酷了吗：我设计了一套最严密的法、最高效的机器，让权力毫无缝隙地集中。可正是这台严密的机器，被赵高拿去，毫无缝隙地碾死了我。\n\n我喂大了这台机器。我以为我是驾驭它的人。到头来，我只是它碾过的又一个数字——和那些死在长城下的戍卒，没什么两样。',
        en: 'The Zhao Gao I had let in with my own hand did not spare me.\n\nAfter Huhai took the throne, Zhao Gao hollowed me out step by step. He slandered me before the Second Emperor, saying I plotted rebellion. I wrote memorial after memorial to clear myself, but they all fell into Zhao Gao\'s hands and never reached the emperor.\n\nIn 208 BCE I was thrown in prison, harshly tortured, and at last condemned to be cut in two at the waist, sliced through the middle, the execution ground right in the Xianyang market, put to death before the crowd, with my whole clan punished along with me.\n\nBefore the execution I said one thing to the son who was to die with me: how I wish I could go with you once more, leading our family\'s yellow dog out the east gate of Shangcai to chase hares. But that life, I can never go back to it.\n\nDo you see the cruelty in this: I designed the tightest of laws, the most efficient of machines, to concentrate power without a seam. And it was exactly that tight machine, taken up by Zhao Gao, that ground me to death without a seam.\n\nI fed this machine. I thought I was the man who drove it. In the end I was only one more number it ground over, no different from the garrison conscripts who died beneath the wall.',
      },
      deliverGoal: 'N9 zoom-out + cross-lens — 赵高架空李斯 (谗言谋反/奏章到不了皇帝) + 208 BCE 李斯腰斩咸阳街市株连全族 + 临刑「牵黄狗出上蔡东门追兔子回不去了」+ 「我设计最严密机器/正是它被赵高拿去碾死我/我喂大机器以为驾驭它实只是它碾过的又一个数字/和死在长城下的戍卒没两样」(桥到戍卒)',
      engagementHook: '我设计了一套最严密的机器让权力毫无缝隙地集中，可正是这台机器，被别人拿去毫无缝隙地碾死了我。一个为绝对权力造机器的人，最后死在自己造的机器手里——这是报应，还是必然？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是帝国的总设计师。郡县制是我劝皇帝定的，文字统一是我主持的——这两样，奠定了之后两千年的中国。皇帝打下了天下，可真正把这块地「装配」成一个能运转的帝国的，是我这样懂制度的人。没有李斯，就没有那个能传两千年的「中国」骨架。\n\n另一种说法：我是亲手锻造暴政工具的人。同一双手，设计了高效的郡县，也提出了焚书的主张；定下了清晰的法，也定下了把人活活役死的徭役律。我比谁都明白这套制度的力量，却从不肯去看它碾在普通人身上的重量。最后，我为了保住自己的位置篡改遗诏，又被自己造的机器碾碎——这或许是最公道的结局。\n\n这两边不是「才华加污点」。是同一种本事的两面——「把帝国装配得高效」的本事，既能立国，也能造一台谁都逃不掉的绞肉机。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the empire\'s chief designer. The commandery-county system was set by my urging, the unification of the writing was led by me, and these two laid the foundation of two thousand years of China. The emperor won the realm, but the one who truly assembled that land into an empire that could run was a man like me, who understood systems. Without Li Si, there is no skeleton of "China" able to pass down two thousand years.\n\nThe other view: I was the man who forged the tools of tyranny with my own hands. The same hands that designed the efficient commanderies also proposed the burning of the books; the same hands that set down clear law also set down the corvee law that worked people to death. I understood the power of this system better than anyone, and I would never look at the weight it laid on ordinary people. In the end I forged an edict to keep my place, and was ground to pieces by the machine I had built, which is perhaps the fairest of endings.\n\nThese two are not "talent and a stain." They are two faces of one ability. The skill of "assembling an empire to run efficiently" can found a state, and it can also build a meat grinder no one escapes.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (帝国总设计师/郡县制书同文奠定两千年/皇帝打天下李斯装配成能运转的帝国) / 另一种说法 (亲手锻造暴政工具/设计郡县也提焚书/定清晰法也定役死人的徭役律/不肯看碾在人身上的重量/篡改遗诏又被自己机器碾碎最公道) / 同一种本事两面 / 想 30 秒',
      engagementHook: '帝国总设计师，和亲手锻造暴政工具的人——是同一个我，同一种本事的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'ls-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个设计者？\n\n他设计了一套精巧高效的制度，让一个帝国第一次真正运转起来，这套骨架活了两千年；他也亲手提出焚书、定下役死人的律法，最后还篡改遗诏，又死在自己造的机器里。「把帝国装配得高效」这件事，到底值多少分？你怎么评？\n\n不过先记住：你这一遍，听的只是那个设计制度的人怎么看他自己。坐在他上面的始皇帝、和被他的律法征到长城底下的那个戍卒，各有各的说法——换个视角再走一遍，你会听见他们怎么看待这同一套制度，也会看看你刚才的判断站不站得住。\n\n再想一步：今天你身边，有没有这样一个「很聪明、很有用」的人或一套「很高效」的规则——它把事情办得又快又好，可代价，是落在某些没被问过的人头上？\n\n那时候，你会只盯着「它有多高效」，还是会停下来问一句：这台机器转得这么顺，它底下，正碾着谁？',
        en: 'Having walked my whole life, how would you judge a designer like this?\n\nHe designed a system delicate and efficient, made an empire truly run for the first time, and that skeleton lived two thousand years; he also proposed the burning of the books with his own hand, set down laws that worked people to death, and in the end forged an edict and died in the machine he had built. The work of "assembling an empire to run efficiently," how many points is it worth? How do you judge it?\n\nBut first, remember: this pass, you heard only how the man who designed the system saw himself. The First Emperor above him, and the garrison conscript his laws drove to the foot of the wall, each have their own case. Run it again through another lens and you will hear how they see this same system, and see whether the judgment you just made still holds.\n\nThen take one more step: in your own life today, is there such a person, "clever and useful," or such a rule, "highly efficient," that gets things done fast and well, but at a cost that falls on certain people who were never asked?\n\nWhen that happens, will you stare only at "how efficient it is," or will you stop and ask: this machine runs so smoothly, who, beneath it, is being ground?',
      },
      deliverGoal: 'N11 close — 评价设计者 (精巧高效制度让帝国运转骨架活两千年 vs 提焚书定役死律篡改遗诏死在自己机器里) + 跨视角指针 (你只听了设计制度的人/始皇帝+戍卒各有说法/换视角再走一遍看判断站不站得住) + transfer「今天身边很聪明很有用的人或很高效的规则代价落在没被问过的人头上」+ 你会只盯高效还是停下问机器底下碾着谁',
      engagementHook: '走完我这一生，你会怎么评价这样一个设计者？今天你身边那套「很高效」的规则——它把事办得又快又好，可代价落在某些没被问过的人头上。你会只盯着它多高效，还是会停下来问：这台机器底下，正碾着谁？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: 戍卒 / 刑徒 The Conscript-Laborer (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var conscriptLaborerLens = {
  id: 'conscript-laborer-receiving-end',
  name: 'A Conscript-Laborer',
  nameCn: '一个戍卒',
  role: 'receiving-end',
  perspectiveTag: 'wall-conscript',
  icon: '⛏️',
  description: {
    cn: '一个虚构的普通农民，代表秦帝国治下千千万万没有名字的人。他原本在家乡种田、娶妻、有个还没长大的儿子。某一天，一道征发的文书贴到村口，他被征为戍卒，徒步走上千里，去帝国最北边修一道夯土的长城。在官府的账册上，他不是一个人，是一个需要被调度的数字。他不识字，没人会为他写一行字。这一遍，你从那个统一了两千年的中国「本来没打算记住」的人这边，看公元前 221 年的天下——看一座所有人都赞颂的奇迹，到底是谁在底下背着。',
    en: 'An invented common farmer, standing for the countless nameless people under the Qin empire. He had been farming in his home village, with a wife and a son not yet grown. One day a conscription notice was pasted at the village gate, and he was levied as a garrison conscript, walking a thousand li on foot to build a rammed-earth wall at the far north of the empire. In the government ledgers he was not a person but a number to be deployed. He could not read, and no one would write a line for him. This pass lets you see the realm of 221 BCE from the side of the people that a China unified for two thousand years never planned to remember, to see who, beneath a wonder all men praise, was carrying it on his back.',
  },
  storyboard: [
    {
      id: 'cl-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我没有名字留下来。\n\n你在史书里找不到我。皇帝有名字，丞相有名字，连那些大将都有名字。我没有。我只是官府账册上的一个数字——「戍卒若干」里的那个「若干」之一。\n\n我原本在家乡种田。有一小块地，一个妻子，一个还没长大的儿子。我这辈子最大的盼头，就是地里能多收点粮，看着儿子长大。\n\n直到有一天，村口贴了一张文书。亭长拿着名册，念到了我。我被征走了，去北边，修长城。\n\n我走的时候，回头看了一眼我的妻子和儿子。我那时候还不知道，那是最后一眼。\n\n这一遍，你站在我这里看公元前 221 年那个统一的天下。不是从皇帝那边看，不是从设计制度的丞相那边看，是从这个天下「本来没打算记住」的人这边看。',
        en: 'I left no name behind.\n\nYou will not find me in the histories. The emperor has a name, the chancellor has a name, even the great generals have names. I do not. I am only a number in a government ledger, one of the "so many garrison conscripts," one among the "so many."\n\nI had been farming in my home village. A small plot of land, a wife, a son not yet grown. The greatest hope of my life was for a little more grain from the field, and to watch my son grow.\n\nUntil one day a notice was pasted at the village gate. The village head held the roll and read out my turn. I was levied away, to the north, to build the wall.\n\nWhen I left I looked back once at my wife and my son. I did not know then that it was the last look.\n\nThis pass, you stand where I stand and look at the unified realm of 221 BCE. Not from the emperor\'s side, not from the side of the chancellor who designed the system, but from the side of the people this realm never planned to remember.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 没有名字 (史书找不到/皇帝丞相大将有名他没有/账册上一个数字) + 原本种田有地有妻儿 + 村口贴征发文书被征去北边修长城 + 回头看妻儿最后一眼 + 这一遍从天下没打算记住的人看 221 BCE',
      engagementHook: '皇帝有名字，丞相有名字，连大将都有名字。我没有——我只是官府账册上的一个数字。你怎么想象「在历史里连个名字都没留下」是什么滋味？',
      expectsRealAnswer: false,
    },
    {
      id: 'cl-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我被征走之前，日子是怎么过的，你才懂后来那条路意味着什么。\n\n我家在原来的某个国家。这些年，先是打仗——秦国的军队一年比一年逼近，我们这些种田的，年年提心吊胆。后来仗打完了，听说天下「统一」了，归了一个皇帝管。\n\n村里人一开始还以为，仗打完了，总能消停几年，安生种地了。\n\n可没多久就明白了：统一，不等于太平。新来的官府，比打仗那会儿管得还紧。每家每户登记在册，几口人、几亩地、多大年纪，写得清清楚楚。秦法严，偷懒、迟到、说错话，都有重罚，还连坐——一家犯事，邻里跟着遭殃。\n\n而最要命的，是徭役。按律，成年男子每年都得为官府出工出力：修路、运粮、戍边、修陵墓。一道文书下来，你就得放下手里的活，走人。\n\n我一边盼着这世道能安稳，一边在心里隐隐怕着——不知道哪一天，那道文书会落到我头上。',
        en: 'First, let me tell you how life ran before I was levied away, so you understand what that road later meant.\n\nMy home was in one of the old states. In those years there was first the war, the Qin armies pressing nearer year by year, and we who farmed lived in dread season after season. Then the fighting ended, and word came that the realm was unified, under one emperor.\n\nAt first the village thought that, with the fighting over, there would surely be a few quiet years to farm in peace.\n\nBut before long we understood: unification was not the same as peace. The new government held us tighter than the war ever had. Every household was registered: how many mouths, how many mu of land, what ages, all written down clearly. Qin law was harsh; idleness, lateness, a wrong word, all brought heavy punishment, and group liability, one household\'s offense bringing down the neighbors too.\n\nAnd the deadliest of all was the corvee. By law, every grown man owed the government his labor each year: roads, hauling grain, frontier guard, building the tomb. A notice came down and you had to set down what was in your hands and go.\n\nI hoped the times would settle, and at the same time I feared, faintly, in my heart, that some day that notice would fall on me.',
      },
      deliverGoal: 'N2 setup — 被征前的日子 (原属某六国/连年怕秦军/统一后以为能消停) + 统一不等于太平 (官府管更紧/编户登记口数田亩年龄/秦法严连坐) + 徭役律 (成年男子每年出工修路运粮戍边修陵) + 隐隐怕文书落到自己头上',
      engagementHook: '村里人以为仗打完了，统一了，总能安生种几年地。可很快明白：统一，不等于太平——新官府管得比打仗时还紧。你会不会也以为「大局定了，普通人就该过好了」？',
      expectsRealAnswer: false,
    },
    {
      id: 'cl-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '那道文书，终究还是落到了我头上。\n\n那天，亭长带着名册到了村口，敲着锣。他念出一串名字，我的名字在里头。征发：北上戍边，修长城。限几日内到指定地点集合，误期者，按律严办。\n\n（「误期严办」到底有多重，那时候我们只是隐约听说，并不全懂——后来我才知道，按秦法，戍卒误了报到的期限，是要杀头的。）\n\n我没有任何可以讨价还价的余地。不去，是抗命，全家连坐。去，前路茫茫，谁也不知道还回不回得来。\n\n我连夜收拾。妻子一句话也说不出，只是默默给我缝补鞋子、烙干粮——去北边那么远的路，鞋和粮，就是命。\n\n第二天天没亮，我和村里另外几个被征的人，一起上路了。\n\n你记住这一点：从头到尾，没有任何一个人，问过我一句「你愿不愿意」。皇帝要长城，丞相定律法，官府发文书，名册念到我——这中间，没有一个环节，需要我点头。',
        en: 'That notice, in the end, fell on me too.\n\nThat day the village head came to the gate with the roll, striking a gong. He read out a string of names, and mine was among them. Levied: north to the frontier, to build the wall. Report to the appointed place within so many days; whoever is late will be dealt with severely by law.\n\n(How heavy "dealt with severely" was, we only vaguely heard at the time and did not fully grasp. Only later did I learn that by Qin law, a garrison conscript who missed his reporting deadline was to be beheaded.)\n\nI had no room to bargain at all. Not to go was to defy the order, and the whole family would be held liable. To go was a road without end, and no one knew whether I would ever come back.\n\nI packed through the night. My wife could not say a word; she only silently mended my shoes and baked dry rations. For a road that far north, shoes and grain were life itself.\n\nBefore dawn the next day, I and a few others from the village who had been levied set out together on the road.\n\nRemember this: from beginning to end, not one person ever asked me "are you willing." The emperor wanted the wall, the chancellor set the law, the government sent the notice, the roll read out my name, and in all of it, not one step needed my nod.',
      },
      deliverGoal: 'N3 setup — 征发文书落到他头上 (亭长名册念名/北上戍边修长城/限期到误期严办) + anti-fab 括号短句 (当时只隐约听说误期严办/后才知秦法误期当斩) + 没讨价余地 (不去抗命连坐/去前路茫茫) + 妻子缝鞋烙粮 + 「从头到尾没人问过我愿不愿意/没一个环节需要我点头」',
      engagementHook: '从头到尾，没有任何一个人，问过我一句「你愿不愿意」。皇帝要墙，丞相定律，官府发文书，名册念到我——这中间没一个环节需要我点头。当一件大事完全不需要你同意就把你卷进去，你能做什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'cl-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你已经在路上走了一个多月。脚底磨穿了，结了痂，又磨穿。一路向北，越走越冷，越走越荒。同行的人里，有人病倒了，被丢在路边；有人受不了，半夜想逃——可逃，是死罪，抓回来当场就办了。\n\n终于到了北境。眼前，是一道修了一半的夯土墙，在荒寒的山岭上，一眼望不到头。墙边，是密密麻麻像你一样的人：搬土的、夯墙的、戍守的。\n\n你被分去夯土。把湿土倒进木框，几个人抡起夯，一下一下砸实，砸出薄薄一层，再倒土，再砸。一道墙，就是这样一层一层、用人的力气，砸出来的。\n\n你直起腰，望着这道望不到头的墙，心里冒出一个念头，你不敢说出口：\n\n这道墙，将来会被人叫做伟大的奇迹。可它的每一寸，都是我和我身边这些没有名字的人，一夯一夯砸出来的。我们的命，砌进了这墙里。\n\n那么——这道墙的「伟大」，里面到底算不算我们这些人的一份？还是说，将来人们赞颂它的时候，根本不会想起，墙底下，曾经站过我？',
        en: 'Now you are me.\n\nYou have been on the road over a month. The soles of your feet wore through, scabbed, and wore through again. North and north, colder and more desolate the further you go. Among your companions, some fell ill and were left at the roadside; some could not bear it and tried to flee in the night, but flight was a capital crime, and those caught were dealt with on the spot.\n\nAt last you reach the northern frontier. Before you is a half-built rammed-earth wall, on the cold and barren ridges, stretching beyond where the eye can see. Along it are people packed thick, people like you: hauling earth, pounding walls, standing guard.\n\nYou are sent to pound earth. Pour wet earth into a wooden frame, several men swing the rammer, strike it solid blow by blow, pound out a thin layer, pour more, pound again. A wall is raised just so, layer by layer, out of the strength of human bodies.\n\nYou straighten your back, look at this wall stretching beyond sight, and a thought rises that you dare not speak aloud:\n\nThis wall will one day be called a great wonder. But every inch of it was pounded out, blow by blow, by me and these nameless people around me. Our lives are built into this wall.\n\nSo then, the "greatness" of this wall, does it count any share for people like us? Or when later ages praise it, will they never think that beneath the wall, I once stood?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 路上一个多月 (脚磨穿/病者丢路边/逃是死罪) + 到北境半夯土墙望不到头 + 分去夯土 (湿土入木框抡夯一层层砸) + 「墙每一寸是没名字的人砸出来/命砌进墙里」+ 拷问: 墙的伟大算不算我们一份/赞颂时会不会想起墙底下站过我',
      engagementHook: '这道墙将来会被叫做伟大的奇迹，可它的每一寸，都是我和身边这些没名字的人一夯一夯砸出来的。那么——这道墙的「伟大」，里面算不算我们这些人的一份？',
      expectsRealAnswer: false,
    },
    {
      id: 'cl-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '在北边的日子，是我这辈子最难捱的。\n\n天冷得能冻裂手。粮常常不够，运粮的路太长，一路损耗，到我们手里时总是缺。活重，夯墙、搬土、戍守，没有歇的时候。监工的吏拿着鞭子，谁慢了、谁倒了，鞭子就抽下来。\n\n身边的人，一个接一个地没了。有累死的，有冻死的，有病死的，有受不了想逃被处死的。死了的人，就近埋在墙边——后来我才慢慢看明白，这道墙的底下，埋着的不只是土。\n\n夜里，我常常想家。想我那块地，这时候该种什么了；想我妻子；想我儿子，他长高了吗，还记得我吗。\n\n我不识字。我没法给家里写一个字，也没法给自己留下一句话。我能做的，只有把这些想念，烂在心里。\n\n你现在该明白了：史书里那一句轻飘飘的「发民若干，筑长城」——「若干」这两个字底下，是一个一个像我这样、有家、有牵挂、有名字（只是没被记下来）的活人。',
        en: 'The days in the north were the hardest I ever bore.\n\nThe cold could split your hands. Grain was often short, the supply road too long, losses all the way, so that what reached us always fell short. The work was heavy, pounding walls, hauling earth, standing guard, with no time to rest. The overseers held whips, and whoever slowed, whoever fell, the whip came down.\n\nThe people around me went, one after another. Some worked to death, some froze, some died of sickness, some could not bear it and tried to flee and were put to death. The dead were buried nearby, at the foot of the wall, and only slowly did I come to see that what lay beneath this wall was not only earth.\n\nAt night I often thought of home. Of my plot of land, of what should be planted by now; of my wife; of my son, had he grown taller, did he still remember me.\n\nI could not read. I could send no word home, could leave no line for myself. All I could do was let this longing rot in my heart.\n\nNow you should understand: that weightless line in the histories, "so many of the people were levied to build the wall," beneath those two words "so many" was one living person after another, like me, with a home, with people to long for, with a name, only one that was never written down.',
      },
      deliverGoal: 'N5 story — 北边最难捱 (天冷冻裂手/粮不够运耗/活重无歇/监工鞭子) + 身边人累死冻死病死逃死 + 死者埋墙边「墙底下埋的不只是土」+ 夜里想家想地想妻子儿子 + 不识字写不了一个字 + 「史书一句『发民若干筑长城』, 『若干』底下是一个个有家有名字只是没被记下的活人」',
      engagementHook: '史书里轻飘飘一句「发民若干，筑长城」——「若干」这两个字底下，是一个一个像我这样、有家、有牵挂、有名字（只是没被记下来）的活人。当历史把人变成一个数字，我们丢掉了什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'cl-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '在工地上，我见过一样东西，让我把这一切，慢慢想明白了。\n\n监工要清点人数、记录用料、上报进度。他们用的，是一种统一的文字，写在简牍上——后来我知道，那叫小篆，是丞相李斯主持，让全国都用同一种字。一道命令，从遥远的咸阳写下来，能一路传到我们这最北的工地，每个吏都看得懂、都照办。\n\n那一刻我忽然懂了一件事。\n\n那个让公文畅通无阻、让天下「书同文」的本事（人人都夸它了不起），和那个把我从家里征到这墙底下来的本事，是同一套东西。同一张写着标准文字的简牍，可以是一道嘉奖令，也可以是一道征发令、一道「误期者斩」的军法。\n\n皇帝和丞相眼里的「大一统」，是一道命令能传遍天下、没有死角。可这道能传遍天下的命令，传到最底下，就是来抓我的那张文书。\n\n同一套高效的制度——在他们那头，是帝国的伟业；在我这头，是把我和家人拆散、把我钉死在这墙上的那只手。一件事的两头。',
        en: 'On the works I saw one thing that slowly made all of this clear to me.\n\nThe overseers had to count heads, record materials, report progress. What they used was a unified writing, set down on bamboo slips, and later I learned it was called the small-seal script, led by the chancellor Li Si so the whole realm would use one writing. One order, written far away at Xianyang, could run all the way to our works at the far north, and every clerk could read it and carry it out.\n\nIn that moment I suddenly understood something.\n\nThat skill that made documents run unobstructed, that gave the realm one writing, the skill everyone praises as remarkable, and the skill that levied me from my home to the foot of this wall, were the same thing. The same bamboo slip in standard script could be an order of commendation, and it could be an order of conscription, an order of "behead the latecomer."\n\nThe "great unification" in the eyes of the emperor and the chancellor was one order running across the realm with no blind corner. But that order able to run across the realm, when it reached the very bottom, was the notice that came to seize me.\n\nThe same efficient system: on their end, the empire\'s great work; on my end, the hand that tore me from my family and nailed me to this wall. Two ends of one thing.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 工地见监工用小篆简牍清点上报 (李斯主持书同文/一道命令从咸阳传到最北工地都看懂) + 顿悟: 让书同文的本事和把我征来的本事是同一套 + 同一张标准文字简牍可以是嘉奖令也可以是征发令/误期斩军法 + 「他们眼里大一统=命令传遍无死角/传到最底下就是来抓我的文书」+ 同一套高效制度两头 (帝国伟业 vs 拆散家人钉死我的手)',
      engagementHook: '那个让天下「书同文」、人人夸了不起的本事，和那个把我从家里征到这墙底下的本事，是同一套东西。同一张写着标准字的简牍，可以是嘉奖令，也可以是来抓我的征发令。同一套制度，怎么会有两副面孔？',
      expectsRealAnswer: false,
    },
    {
      id: 'cl-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '修墙的，不只有我们这些被征来戍边的农民。\n\n工地上，还有一种人，叫刑徒——犯了秦法被罚来服苦役的人。秦法严苛，连坐又广，所以犯法的人极多。这些刑徒，剃了头、戴着刑具，干的活比我们还重，吃的比我们还差。\n\n我渐渐看明白：秦的这套制度，养着一台永远缺人的机器。长城要人、陵墓要人、阿房宫要人、驰道要人——胃口大得填不满。\n\n它怎么填？两条路：一条是徭役，把我这样的良民从田里征来；一条是刑罚，把犯了法的人罚来。法越严，犯法的人越多，能罚来的劳力就越多。到后来，我有时分不清：这套严刑峻法，到底是为了让天下太平，还是为了源源不断地，给这台机器供人？\n\n你看，我和那些刑徒，本来是两种人——我守法，他们犯法。可在这道墙底下，我们干一样的活，埋在一样的土里。在这台机器眼里，我们没有区别：都只是它需要的、可以随时补充的力气。',
        en: 'It was not only us, the farmers levied for frontier guard, who built the wall.\n\nOn the works there was another kind of people, the convict-laborers, those who had broken Qin law and were sentenced to hard labor. Qin law was severe and group liability wide, so the lawbreakers were very many. These convicts, heads shaved, fitted with irons, did work heavier than ours and ate worse than us.\n\nSlowly I came to see: the Qin system fed a machine forever short of hands. The wall wanted men, the tomb wanted men, the Epang Palace wanted men, the highways wanted men, an appetite too vast to fill.\n\nHow was it filled? Two roads: one the corvee, levying law-abiding men like me from the fields; one the penal law, sentencing lawbreakers to be sent. The harsher the law, the more lawbreakers, the more forced labor it could send. In time I sometimes could not tell: was this harsh and severe law really for the peace of the realm, or for the steady supply of men to this machine?\n\nYou see, the convicts and I were meant to be two kinds of people, I law-abiding, they lawbreakers. But at the foot of this wall we did the same work and were buried in the same earth. In the eyes of this machine there was no difference between us: we were only the strength it needed, replaceable at any time.',
      },
      deliverGoal: 'N7 story — 修墙还有刑徒 (犯秦法罚来服苦役/秦法严连坐广犯法者多/剃头戴刑具活更重吃更差) + 永远缺人的机器 (长城陵墓阿房宫驰道胃口填不满) + 两条填法 (徭役征良民/刑罚罚犯人/法越严劳力越多) + 「分不清严法是为太平还是为给机器供人」+ 「我守法他们犯法可墙底下干一样活埋一样土/机器眼里没区别都是可随时补充的力气」',
      engagementHook: '法越严，犯法的人越多，能罚来当苦力的人就越多。到后来我分不清：这套严刑峻法，到底是为了天下太平，还是为了源源不断给这台机器供人？你觉得，有没有一种「秩序」，其实是在制造它声称要消灭的东西？',
      expectsRealAnswer: false,
    },
    {
      id: 'cl-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我最后没能回家。\n\n具体怎么没的，已经不重要了——是累垮的，是冻病的，还是哪一次塌方、哪一场苦役，我就成了埋在墙边那些人里的一个。我没能再看见我的妻子，没能看着我儿子长大。\n\n我想跟你说的，是另一件事。\n\n你现在听见了我的故事——有家、有牵挂、被征走、死在北边。可你要知道：我这个「我」，是后人替千千万万真实存在过、却一个字都没留下的人，拼出来的一个声音。\n\n真实的他们，连这点都没有。没有名字，没有故事，没有一句遗言被记下。皇帝的功业写满了史书，丞相的谋略代代传诵，可那几十万死在长城下、陵墓里、驰道上的人，史书只给了他们四个字：「死者甚众」。\n\n「死者甚众」——死的人很多。多少？没有数。叫什么？没有名。\n\n这就是为什么，要有这一遍。要有人，站到「死者甚众」这四个字底下，替那一个一个具体的人，把没说出口的话，说出来。',
        en: 'In the end I never made it home.\n\nHow exactly I went no longer matters, whether worked to collapse, sickened by the cold, or in some cave-in, some bout of hard labor; I became one of those buried at the foot of the wall. I never saw my wife again, never watched my son grow.\n\nWhat I want to tell you is another thing.\n\nYou have heard my story now, a man with a home, with people to long for, levied away, dead in the north. But you must know: this "I" is a voice pieced together by later people on behalf of the countless who truly existed and left not a single word.\n\nThe real ones did not have even this much. No name, no story, not one dying word written down. The emperor\'s achievements fill the histories, the chancellor\'s schemes are recited generation to generation, but those hundreds of thousands who died at the foot of the wall, in the tomb, on the highways, the histories gave them only four characters: "the dead were very many."\n\n"The dead were very many." How many? No number. Called what? No name.\n\nThis is why there must be this pass. There must be someone to stand beneath those four characters, "the dead were very many," and on behalf of each single person, speak the words that were never spoken.',
      },
      deliverGoal: 'N8 story — 他没能回家 (怎么没的不重要/成了埋墙边的一个/没再见妻子没看儿子长大) + anti-fab 透明化: 「我」是后人替千千万万真实存在却一字没留的人拼出的一个声音 + 真实的他们连这点都没有 (没名没故事没遗言) + 「皇帝功业写满史书/那几十万人史书只给四个字: 死者甚众」+ 「为什么要有这一遍: 替死者甚众底下一个个具体的人说出没说出口的话」',
      engagementHook: '皇帝的功业写满史书，丞相的谋略代代传诵，可那几十万死在长城下的人，史书只给了四个字：「死者甚众」。多少？没有数。叫什么？没有名。那些没被记下的人，就等于没存在过吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'cl-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我死之后，事情的走向，连皇帝都没料到。\n\n公元前 209 年，皇帝死后第二年，一队跟我一样、被征去戍边的农民，因为大雨误了报到的期限。按秦法，误期是杀头的罪。横竖是死，他们里有两个人，陈胜、吴广，索性反了。陈胜喊了一句话，传遍了天下：「王侯将相，宁有种乎？」——当王侯将相的，难道天生就是那块料吗？\n\n这句话，从一个戍卒嘴里喊出来。压垮这个帝国的，不是哪个国家的军队，是千千万万个像我、像他们一样、被这台机器逼到走投无路的普通人。\n\n你看出这里的反讽了吗：把我们这些戍卒逼上绝路的，是那条「误期者斩」的严法；而点燃灭秦大火的，也正是这条严法。这台机器太严、太狠，最后逼反了它赖以运转的那些人。\n\n公元前 206 年，那个号称要传万世的大秦帝国，亡了。亡它的，不是六国旧贵族，是从我们这些「死者甚众」里，活着站起来的人。',
        en: 'After I died, the turn things took, even the emperor had not foreseen.\n\nIn 209 BCE, the year after the emperor died, a band of farmers like me, levied for frontier guard, were held up by heavy rain and missed their reporting deadline. By Qin law, missing the deadline was a capital crime. Dead either way, two among them, Chen Sheng and Wu Guang, simply rose in revolt. Chen Sheng cried out one line that ran across the realm: "Kings and lords, generals and chancellors, are they born of a special seed?"\n\nThat line, from the mouth of a garrison conscript. What broke this empire was not the army of any state, but the countless ordinary people like me, like them, driven to a dead end by this machine.\n\nDo you see the irony here: what drove us conscripts to the wall was that harsh law, "behead the latecomer," and what lit the fire that destroyed Qin was that same harsh law. This machine, too severe, too cruel, in the end drove into revolt the very people on whom it ran.\n\nIn 206 BCE the great Qin empire that boasted it would pass to the ten-thousandth generation fell. What felled it was not the old nobles of the six states, but the people who rose up alive out of us, the "very many dead."',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 209 BCE 陈胜吴广起义 (戍卒大雨误期/秦法误期当斩/横竖是死索性反/「王侯将相宁有种乎」从戍卒嘴里喊出) + 压垮帝国的是千万被机器逼到走投无路的普通人 + 反讽: 逼戍卒上绝路的严法也是点燃灭秦的严法/机器逼反赖以运转的人 + 206 BCE 秦亡/亡它的是从死者甚众里活着站起来的人',
      engagementHook: '把我们这些戍卒逼上绝路的，是那条「误期者斩」的严法；而点燃灭秦大火的，也正是这条严法——这台机器太狠，最后逼反了它赖以运转的人。一套靠恐惧维持的秩序，会不会注定要被恐惧反噬？',
      expectsRealAnswer: false,
    },
    {
      id: 'cl-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看公元前 221 年那个统一的天下，两种说法都站得住。\n\n一种说法：那是一座建在我们尸骨上的奇迹。统一被庆祝了两千年，长城被叫做伟大的奇迹——可那「伟大」，是用我，和千千万万个没有名字的我，一夯一夯、一条命一条命，砸出来、填出来的。从一开始，这个「天下」就没打算把我们算进它的荣耀里。我们只是「死者甚众」。\n\n另一种说法：那确实是一件了不起的大事，而代价，本不必这么惨。统一文字、统一度量衡、把华夏第一次拧成一个整体——这些是真的功业，惠及了后世两千年。错的不是「统一」这件事本身，错的是它被一台不把人当人的机器、用最狠最急的方式硬推出来。换一种不那么草菅人命的走法，这件大事，也许不必踩着这么多人的命。\n\n两种说法都站得住。它既是踩着我们的尸骨建起来的，也确实是一件改变了两千年的大事。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at the unified realm of 221 BCE. Both views stand.\n\nOne view: it was a wonder built on our bones. The unification has been celebrated for two thousand years, the wall called a great wonder, but that "greatness" was pounded out, filled in, by me and the countless nameless versions of me, blow by blow, life by life. From the start, this "realm" never planned to count us into its glory. We were only "the very many dead."\n\nThe other view: it was truly a great thing, and the cost need not have been this terrible. Unifying the writing, the weights and measures, twisting the Chinese world into one whole for the first time, these were real achievements, benefiting two thousand years after. What was wrong was not "unification" itself; what was wrong was that it was forced through by a machine that did not treat people as people, in the cruelest and most hurried way. Taken by a road less careless of human life, this great thing might not have had to step on so many lives.\n\nBoth views stand. It was built on our bones, and it was truly a thing that changed two thousand years.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (建在尸骨上的奇迹/统一庆祝两千年长城叫奇迹但伟大是没名字的我砸出填出/从没打算把我们算进荣耀/只是死者甚众) / 另一种说法 (确实了不起的大事但代价本不必这么惨/统一文字度量衡拧成整体是真功业惠及两千年/错的不是统一本身而是不把人当人的机器最狠最急硬推/换种走法不必踩这么多命) / 两种都站得住 / 想 30 秒',
      engagementHook: '一种说法：那是建在我们尸骨上的奇迹。另一种说法：那确实是改变两千年的大事，只是代价本不必这么惨。两种说法都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'cl-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生：一个没有名字的农民，一道贴到村口的文书，一条向北的千里路，一道用命砌起来的墙，一句没人记下的遗言——你会怎么评价这样一个开端？\n\n一个统一的中国，被庆祝了两千年；而它的地基里，埋着我，和千千万万个「死者甚众」。你会说它是踩着尸骨的奇迹，还是说它是一件代价惨重、却真的改变了历史的大事？你怎么评？\n\n不过先记住：你这一遍，听的只是被这件大事碾在最底下的人。坐在最高处的始皇帝，和设计了整套制度的丞相李斯，各有各的说法——换个视角再走一遍，你会听见他们怎么为这份伟业辩护，也会看看你刚才的判断，站不站得住。\n\n再想一步：今天，在你读过的故事里、在你身边的生活里——是不是常常有这样的事：一项让所有人受益、被所有人赞美的成就，背后站着一群从没被问过、也从没被记住的人？\n\n那么，当一件了不起的事，是踩着一些人的痛苦建起来的——你要怎么同时把这两样都拿在手里：既不否认那件事真的了不起，也不假装那些被踩着的人，从来不存在？',
        en: 'Having walked my whole life, a farmer without a name, a notice pasted at the village gate, a thousand-li road to the north, a wall built up with lives, a dying word no one wrote down, how would you judge a beginning like this?\n\nA unified China, celebrated for two thousand years; and in its foundation are buried me, and the countless "very many dead." Would you call it a wonder built on bones, or a thing of terrible cost that truly changed history? How do you judge it?\n\nBut first, remember: this pass, you heard only the person ground at the very bottom of this great thing. The First Emperor at the very top, and the chancellor Li Si who designed the whole system, each have their own case. Run it again through another lens and you will hear how they defend this great work, and see whether the judgment you just made still holds.\n\nThen take one more step: today, in the stories you have read, in the life around you, is it not often so: an achievement that benefits everyone and is praised by everyone, with a crowd of people standing behind it who were never asked and never remembered?\n\nSo when a remarkable thing is built on some people\'s suffering, how will you hold both in your hands at once: neither to deny that the thing is truly remarkable, nor to pretend that the people stepped on never existed?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价开端 (没名字农民/村口文书/向北千里路/用命砌的墙/没人记下的遗言 → 踩尸骨的奇迹 vs 代价惨重却真改变历史的大事) + 跨视角指针 (你只听了碾在最底下的人/始皇帝+李斯各有说法/换视角再走一遍看判断站不站得住) + transfer「今天故事里身边生活里让所有人受益被赞美的成就背后没被问过没被记住的人」+ 当了不起的事踩着痛苦建起, 怎么同时拿住成就与那些被踩着的人',
      engagementHook: '走完我这一生，你会怎么评价这样一个开端？再想一步：今天你身边，有没有这样一项被所有人赞美的成就，背后站着一群从没被问过、也从没被记住的人？那时候，你会怎么做？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'qin-shi-huang':                    qinShiHuangLens,
  'li-si':                            liSiLens,
  'conscript-laborer-receiving-end':  conscriptLaborerLens,
};

// 受影响者优先 pattern: 无名苍生 + 谁付了代价 + N6「书同文/统一」一件事两个方向跨视角对位 + N10/N11 奇迹 vs 代价 closing
export var defaultLens = 'conscript-laborer-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'qin-china-221bce',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'qin-shi-huang': 30, 'li-si': 30, 'conscript-laborer-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-24',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「书同文/统一」一件事两个方向 (李斯小篆=帝国伟业 vs 戍卒同一道标准文字简牍=来抓我的征发令 / 始皇帝焚书=统一思想与烧异见两面)',
    'defaultLens: conscript-laborer-receiving-end — 受影响者优先 (无名苍生 + 谁付了代价 + gold-standard N1 hook + N10/N11 奇迹 vs 代价)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    '第 7 条 cultural-ban 例外: 中国史描述中国, 皇帝/丞相/郡县制/法家/焚书/戍卒/刑徒 等史实术语必须用; 仍避免时代错置',
    'FACTUAL GUARDRAILS: 长城=夯土非明代砖石 (明长城晚 1600+ 年); 坑儒按《史记》记载且括号标司马迁百年后写+学界存疑/焚书确凿; 孟姜女未用 (后世传说非秦史); 兵马俑 1974 出土; 司马迁《史记》汉朝写成有理由写黑秦 (N9 触及)',
    '戍卒 lens 是虚构桥接人物代表无名苍生, N8 显式 anti-fab 透明化「我是后人替千万真实存在却一字没留的人拼出的声音」',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
