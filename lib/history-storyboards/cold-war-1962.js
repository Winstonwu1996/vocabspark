// ─── Cold War 1947-1991 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 冷战 · The Cold War 1947-1991
// HSS-10/11 · AP World Modern Unit 8 (冷战 + 代理战争) · APUSH Period 8
//
// 3 lens (per TOPIC_ROADMAP_G6_G12.md B7 + AUTHORING_PIPELINE 第 7/8/12 条):
//   - jfk                            (perpetrator-actor) — John F. Kennedy 1917-1963 古巴导弹危机冷峻博弈者 + 猪湾入侵/越南升级推手
//   - vasili-arkhipov               (lonely-mediator)   — Vasili Arkhipov 1926-1998 苏联潜艇副长 1962 拒绝发射核鱼雷
//   - proxy-war-peasant-receiving-end (receiving-end)   — composite 第三世界代理战争农民 (危地马拉/越南) 在超级大国博弈中失家园
//
// 跨 lens micro-detail (N6 anchor):
//   1962.10 古巴导弹危机的同一个 13 天 — 三个人在三个相反位置:
//   - JFK 白宫战情室: 算「封锁还是空袭」, 手指悬在 MAD (相互确保毁灭) 的开关上
//   - Arkhipov 加勒比海面下 B-59 潜艇: 三个军官里唯一投反对票, 没让核鱼雷射出去
//   - 代理战争农民: 在另一片大陆的稻田/玉米地里, 根本不知道自己的村子为什么被烧
//
// 跨 Topic 锚:
//   - JFK 核博弈 → world-war-two-1942 (B6 原子弹 → 相互确保毁灭 MAD, 直接续接)
//   - Arkhipov 拒绝发射 → world-war-two-1942 Sugihara (B6 个人在体制内的关键抗命)
//   - 代理战争农民 → scramble-for-africa-1884 刚果 (B3) + world-war-one-1914 塞内加尔兵 (B4) + decolonization-1960 (B8)
//
// defaultLens = 'proxy-war-peasant-receiving-end' (受影响者优先 pattern: 被两极格局碾过的第三世界平民)
//
// ⚠️ 双视角中立 (B7 最敏感 Topic): 美式「自由世界 vs 极权」叙事与中国「两极格局 + 第三世界」框架差异极大.
//   严守 Rule 0 — 两边都呈现, 不站队. Arkhipov (救世界的是苏联军官) + JFK (理想总统也搞猪湾/暗杀/越南) 双向打破单边正义.
//
// STRUCTURE SPEC: long-arc → 12 nodes/lens
//   - 220-360 CN chars/node; 只 N6 + N11 (synthesis) 两个 anchor 可达 480 (不到 550); 其余 ≤380; >380 ≤2/lens
//   - expectsRealAnswer: ONLY N11 (synthesis) + N12 (close) = true (2/lens, 6 total); 其余全 false
//   - N6 = 普通 story anchor (runtime 注入 retrieval gate; 此处不写歇脚点/想停就停)
//
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: John F. Kennedy (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var jfkLens = {
  id: 'jfk',
  name: 'John F. Kennedy',
  nameCn: '约翰·肯尼迪',
  role: 'perpetrator-actor',
  perspectiveTag: 'cold-war-strategist',
  icon: '🎖️',
  description: {
    cn: '美国第 35 任总统，1917 年生，1961 年上任时才 43 岁，是当时最年轻的当选总统。他打过二战，会上电视、会演讲，被很多人当成理想主义的化身。同一个他，上任头三个月就批准了入侵古巴的猪湾行动，惨败收场；他批过暗杀外国领导人的计划，也一步步把美军推进越南。1962 年 10 月，他在白宫的战情室里盯着地图，手边的决定可能让全世界一起死。这一遍让你坐进一个超级大国领袖的位置，看「理想」和「冷酷」怎么在同一个人身上同时运转。',
    en: 'The 35th president of the United States, born 1917, only 43 when he took office in 1961, the youngest man ever elected to the job. He had fought in the Second World War, was good on television and at the podium, and many treated him as the very picture of idealism. The same man, in his first three months, approved the Bay of Pigs invasion of Cuba, which ended in disaster; he signed off on plans to assassinate foreign leaders, and step by step pushed American troops into Vietnam. In October 1962 he sat in the White House situation room staring at a map, the decision at his hand able to kill the whole world at once. This pass puts you in the seat of a superpower\'s leader, watching how "ideals" and "cold calculation" run at the same time inside one man.',
  },
  storyboard: [
    {
      id: 'jfk-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1962 年 10 月，白宫地下的一间屋子。墙上挂着古巴的大地图。烟灰缸堆满了，没人睡得着。\n\n几张航拍照片摆在我面前：苏联正在古巴——离美国海岸只有 150 公里的地方——偷偷架设核导弹。一旦装好，几分钟就能打到华盛顿。\n\n我是 John F. Kennedy（约翰·肯尼迪），美国总统，那年 45 岁。我手里的几个选项，每一个都可能滑向一件事：和苏联打一场核战争——那意味着双方几亿人，可能在几小时内一起烧成灰。\n\n这一遍，你坐进我这个位置。你不是电影里那个永远正确的英雄。你是一个真实的人——既怕得要死，又得装出冷静，还得在「软弱」和「毁灭世界」之间，找一条窄得不能再窄的路。',
        en: 'October 1962, a room beneath the White House. A large map of Cuba on the wall. The ashtrays were full; no one could sleep.\n\nA few aerial photographs lay before me: the Soviet Union was secretly building nuclear missiles in Cuba, only 150 kilometers off the American coast. Once installed, they could strike Washington in minutes.\n\nI am John F. Kennedy, president of the United States, 45 years old that year. Every option in my hand could slide toward one thing: a nuclear war with the Soviet Union, which would mean hundreds of millions on both sides burned to ash within hours.\n\nThis pass puts you in my seat. You are not the always-right hero of a movie. You are a real man, frightened half to death yet forced to look calm, who must find, between "weakness" and "destroying the world," a path narrower than narrow.',
      },
      deliverGoal: 'N1 hook — 1962.10 白宫战情室 + 古巴航拍照 (苏联核导弹离美 150km/几分钟打到华盛顿) + JFK 自我介绍 (45 岁/选项都可能滑向核战) + 这一遍视角 (不是电影英雄是怕得要死还得装冷静)',
      engagementHook: '我手边的决定，可能让几亿人在几小时内一起死。换成你坐在那把椅子上，你最先想的是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'jfk-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说清楚我们为什么走到这一步。\n\n二战 1945 年刚打完，原来一起打败纳粹的两个大国——美国和苏联——立刻反目。一个信资本主义、一个信共产主义，谁也不信谁。\n\n他们没有直接开战，但全方位较劲：比武器、比航天、比谁的盟友多、比谁的制度更好。这种「不开枪的战争」，被叫作冷战。\n\n1947 年，美国总统杜鲁门宣布要「援助一切抵抗共产主义的国家」，这叫杜鲁门主义。一个英国人丘吉尔更早说，欧洲被一道「铁幕」劈成了两半——西边一套，东边一套。\n\n到 1962 年，世界已经分成两个阵营，对峙了十几年。我接手的，就是这样一个随时可能擦枪走火的世界。',
        en: 'First, why we came to this point.\n\nThe Second World War had just ended in 1945, and the two great powers that beat the Nazis together, the United States and the Soviet Union, turned on each other at once. One believed in capitalism, one in communism, and neither trusted the other.\n\nThey did not fight directly, but competed on every front: weapons, space, who had more allies, whose system was better. This "war without gunfire" was called the Cold War.\n\nIn 1947 the American president Truman announced he would "aid any country resisting communism," called the Truman Doctrine. Earlier, the Englishman Churchill said an "iron curtain" had split Europe in two, one way of life to the west, another to the east.\n\nBy 1962 the world had been divided into two camps, locked in standoff for over a decade. What I inherited was exactly this kind of world, where a single spark could set off the whole thing.',
      },
      deliverGoal: 'N2 setup — 二战后美苏反目 (资本主义 vs 共产主义) + 冷战定义 (不开枪的全方位较劲) + 杜鲁门主义 1947 + 铁幕 (丘吉尔) + 两极对峙十几年',
      engagementHook: '两个刚一起打赢纳粹的国家，转头就反目成仇——盟友为什么会一夜之间变成最大的敌人？',
      expectsRealAnswer: false,
    },
    {
      id: 'jfk-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '危机来之前，我已经在古巴栽过一个大跟头。\n\n1959 年，卡斯特罗在古巴搞革命上台，倒向苏联。古巴就在美国家门口，这让华盛顿如坐针毡。\n\n1961 年 4 月，我上任才三个月，批准了一个计划：让流亡的古巴人在猪湾登陆，推翻卡斯特罗。中情局拍胸脯说稳赢。\n\n结果惨败。登陆的人几天内被全歼或俘虏。全世界都看着美国出丑——一个超级大国，在自家门口干了一件又笨又坏的事。\n\n这件事我后来认了责。但你要看清一点：我，这个被很多人当成理想主义化身的年轻总统，上任头一件大事，就是策划入侵一个小国、推翻它的政府。\n\n猪湾的惨败，还让卡斯特罗更怕美国、更抱紧苏联——这才有了 1962 年苏联把导弹运进古巴。我亲手埋下的雷，一年后炸到了自己脚下。',
        en: 'Before the crisis came, I had already taken a hard fall over Cuba.\n\nIn 1959 Castro seized power in a revolution in Cuba and leaned toward the Soviet Union. Cuba sits right at America\'s doorstep, and this left Washington on edge.\n\nIn April 1961, only three months into my term, I approved a plan: have exiled Cubans land at the Bay of Pigs and overthrow Castro. The CIA swore it could not fail.\n\nIt was a disaster. The men who landed were wiped out or captured within days. The whole world watched America embarrass itself, a superpower doing something both clumsy and ugly on its own doorstep.\n\nI later took responsibility for it. But see this clearly: I, the young president many treated as the picture of idealism, made my first big move the plotting of an invasion of a small country to overthrow its government.\n\nThe Bay of Pigs failure also made Castro fear America more and cling tighter to the Soviets, which is how the Soviet missiles came into Cuba in 1962. The mine I planted with my own hand blew up under my feet a year later.',
      },
      deliverGoal: 'N3 setup — 1959 卡斯特罗革命倒向苏联 + 1961.4 猪湾入侵 (上任三月/中情局保证/惨败被全歼) + JFK 认责但「理想化身却策划入侵小国」+ 猪湾使卡斯特罗抱紧苏联 → 1962 导弹 (自己埋的雷)',
      engagementHook: '我被当成理想主义化身，可上任第一件大事是策划入侵一个小国。一个人的「理想」和他真正做的事，可以差多远？',
      expectsRealAnswer: false,
    },
    {
      id: 'jfk-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1962 年 10 月 16 日，照片送到你桌上：苏联导弹基地，正在古巴一天天建成。你召集了一屋子顾问，反复开会。\n\n摆在你面前的选项，每一个都通向悬崖：\n\n一是空袭——直接炸掉导弹基地。可一旦炸死苏联人，对方很可能立刻反击，核战争一触即发。\n\n二是入侵——派地面部队打进古巴。同样可能引爆全面战争。\n\n三是封锁——派军舰围住古巴，拦下所有运武器的苏联船。这给对方留了退路，但也可能在海上擦枪走火。\n\n四是什么都不做——可那样导弹装好，美国全境都在苏联核武射程内，你向全国人民没法交代。\n\n军方里有人拍桌子要你打。你心里清楚：他们要的「强硬」，可能直接把世界推下去。\n\n你怎么选？记住，你选错一步，死的不是几个人，是几亿人。',
        en: 'Now you are me.\n\nOn 16 October 1962 the photographs reached your desk: Soviet missile sites going up in Cuba, day by day. You gathered a room of advisers and met again and again.\n\nEvery option before you led to a cliff:\n\nOne, an air strike, bomb the missile sites directly. But kill Soviet personnel and the other side likely strikes back at once, nuclear war on a hair trigger.\n\nTwo, an invasion, send ground forces into Cuba. It could touch off a full war just the same.\n\nThree, a blockade, ring Cuba with warships and turn back every Soviet ship carrying weapons. This leaves the other side a way out, but a spark could still go off at sea.\n\nFour, do nothing, but then the missiles get installed, all of America comes within range of Soviet nuclear arms, and you cannot face your own people.\n\nGenerals are pounding the table for you to strike. You know in your gut: the "toughness" they want could shove the world off the edge.\n\nWhich do you choose? Remember, one wrong step and it is not a few who die, but hundreds of millions.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1962.10.16 照片到桌 + 四个选项各通向悬崖 (空袭/入侵/封锁/什么都不做) + 军方拍桌要打 vs JFK 知道强硬可能推世界下去 + 选错死的是几亿人',
      engagementHook: '空袭、入侵、封锁、什么都不做——四条路每条都可能引爆核战。军方拍桌让你打。你会选哪条？',
      expectsRealAnswer: false,
    },
    {
      id: 'jfk-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我选了封锁。\n\n10 月 22 日，我上电视，向全国和全世界宣布：美国军舰要封锁古巴，拦下所有运武器的苏联船。我把这叫「隔离」，没用「封锁」这个词——因为「封锁」在国际法上等于战争行为。一个词的选择，都得小心。\n\n为什么选封锁，不选空袭？因为封锁给了对方一个台阶。苏联的船开到封锁线前，还有时间掉头，不必非得开火。我赌的是：给对方留一条退路，比逼他到墙角，更可能避免核战。\n\n接下来几天，全世界屏住呼吸。苏联的船一艘艘逼近封锁线。10 月 24 日，部分船只在最后关头掉头返航。我的国务卿说了句后来很有名的话：「我们俩眼对眼，我看对方先眨眼了。」\n\n但你别以为危机就此过去。海面上风平浪静，海面下，差点出大事——而那件事，根本不在我的掌控里。',
        en: 'I chose the blockade.\n\nOn 22 October I went on television and announced to the nation and the world: American warships would blockade Cuba and turn back every Soviet ship carrying weapons. I called it a "quarantine," not a "blockade," because in international law a "blockade" counts as an act of war. Even the choice of a single word had to be careful.\n\nWhy the blockade and not the air strike? Because the blockade gave the other side a step down. Soviet ships reaching the line still had time to turn around; no one had to open fire. My bet was this: leaving the other side a way out was likelier to avoid nuclear war than backing him into a corner.\n\nOver the next days the whole world held its breath. Soviet ships closed on the line one by one. On 24 October some turned back at the last moment. My secretary of state said a line that became famous: "We\'re eyeball to eyeball, and I think the other fellow just blinked."\n\nBut do not think the crisis was over. The sea was calm on the surface; beneath it, something nearly went very wrong, and that thing was entirely out of my control.',
      },
      deliverGoal: 'N5 story — JFK 选封锁 + 1962.10.22 电视宣布「隔离」不用「封锁」(国际法=战争行为) + 给对方留退路赌避免核战 + 10.24 苏联船掉头 +「眼对眼对方先眨眼」+ 但海面下差点出事不在他掌控',
      engagementHook: '我故意用「隔离」不用「封锁」，因为一个词就可能等于宣战。我赌的是给对方留退路——你觉得「逼到墙角」和「留条活路」，哪个更危险？',
      expectsRealAnswer: false,
    },
    {
      id: 'jfk-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1962 年 10 月 27 日，危机最黑的一天。\n\n这一天，我的椅子上能看见的，是这些：一架美国侦察机在古巴上空被击落，飞行员死了；军方更急着要打了。我手指悬在一个开关上——再往前一步，就是核战。\n\n科学家给这种局面起了个名字：相互确保毁灭（英文缩写 MAD）。意思是，美苏两边的核武多到，谁先动手，对方都来得及反击，最后两边一起完蛋。没有赢家，只有同归于尽。\n\n这种武器从哪来的？十七年前，1945 年，美国在日本广岛、长崎扔下两颗原子弹——人类第一次见识到一座城市可以在一瞬间消失。（你跑过二战那段历史，见过那两朵蘑菇云。）从那之后，美苏拼命造，造出了足以毁灭地球几十次的核弹。\n\n但就在这同一天，地球另一头，加勒比海面下一艘苏联潜艇里，三个军官正为「要不要射出一枚核鱼雷」吵到拍桌子。他们和我隔着几千公里，互相看不见。\n\n我以为决定世界生死的人是我。其实那一刻，真正攥着开关的，是一个我从没听说过名字的苏联军官。',
        en: '27 October 1962, the darkest day of the crisis.\n\nThat day, from my chair, this is what could be seen: an American spy plane was shot down over Cuba and the pilot killed; the generals pressed harder to strike. My finger hovered over a switch, one step further and it was nuclear war.\n\nScientists had a name for this state of things: mutually assured destruction (the English abbreviation, MAD). It meant the two sides held so many nuclear arms that whoever struck first, the other still had time to strike back, and in the end both were finished. No winner, only mutual ruin.\n\nWhere had these weapons come from? Seventeen years earlier, in 1945, America dropped two atomic bombs on Hiroshima and Nagasaki in Japan, and humankind saw for the first time that a city could vanish in an instant. (Run the Second World War topic and you have seen those two mushroom clouds.) From then on, the two sides built feverishly, until they had enough warheads to destroy the earth dozens of times over.\n\nBut on that very day, on the other side of the globe, inside a Soviet submarine beneath the Caribbean, three officers were arguing to the point of pounding the table over whether to fire a nuclear torpedo. They and I were thousands of kilometers apart, unable to see one another.\n\nI thought the man deciding the world\'s life and death was me. In truth, in that moment, the one really holding the switch was a Soviet officer whose name I had never heard.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1962.10.27 最黑一天 (侦察机被击落/飞行员死/手指悬开关) + MAD 相互确保毁灭定义 + 跨 Topic 锚 world-war-two 原子弹 1945 广岛长崎 (蘑菇云) → 核军备 + 跨 lens 对位 Arkhipov 潜艇三军官吵核鱼雷 + 真正攥开关的是个 JFK 没听说的苏联军官',
      engagementHook: '我以为决定世界生死的人是我，其实那一刻真正攥着开关的，是一个我从没听说过名字的苏联军官。历史的走向，会不会常常握在没人记得的小人物手里？',
      expectsRealAnswer: false,
    },
    {
      id: 'jfk-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '10 月 27 日深夜，转机来了。\n\n苏联领导人赫鲁晓夫私下传话：只要美国公开保证不入侵古巴，再悄悄撤掉部署在土耳其、对着苏联的导弹，他就把古巴的导弹运回去。\n\n我接受了。表面上，是苏联撤走古巴导弹、美国保证不打古巴；私下里，美国也撤了土耳其的导弹——这部分当时没公开，是为了让对方有面子下台。\n\n10 月 28 日，赫鲁晓夫宣布撤导弹。十三天的危机，结束了。世界没有毁灭。\n\n事后大家都说我赢了，是「冷静博弈」的英雄。但我自己心里清楚：我们离核战，只差一两个偶然——一架侦察机、一艘潜艇、一个误判。这不是什么英雄的胜利。这是全人类一起，侥幸躲过了一次灭顶之灾。\n\n真正的教训不是「我多强硬」，而是：两个大国把武器堆到这个地步，已经没有「安全」可言了。',
        en: 'Late on 27 October, the turn came.\n\nThe Soviet leader Khrushchev sent word privately: if America publicly promised not to invade Cuba, and quietly removed the missiles it had placed in Turkey aimed at the Soviet Union, he would ship the Cuban missiles back.\n\nI accepted. On the surface, the Soviets withdrew the Cuban missiles and America promised not to attack Cuba; privately, America also pulled its Turkey missiles, a part not made public at the time, so the other side could save face stepping down.\n\nOn 28 October Khrushchev announced the withdrawal. The thirteen-day crisis was over. The world was not destroyed.\n\nAfterward everyone said I had won, a hero of "cool calculation." But I knew in my own heart: we came within one or two accidents of nuclear war, a spy plane, a submarine, a misjudgment. This was no hero\'s victory. It was all of humankind, together, getting lucky enough to dodge an annihilation.\n\nThe real lesson was not "how tough I was," but this: when two great powers pile weapons this high, "safety" no longer exists at all.',
      },
      deliverGoal: 'N7 story — 10.27 深夜赫鲁晓夫私下条件 (美保证不入侵古巴 + 撤土耳其导弹) + 私下撤土耳其导弹给对方台阶 + 10.28 宣布撤导弹/13 天结束 + JFK 内心「不是英雄胜利是全人类侥幸躲过」+ 真教训是堆武器到这地步没有安全',
      engagementHook: '大家说我赢了，是冷静博弈的英雄。我自己知道：我们只是侥幸躲过了一次同归于尽。「赢了」和「侥幸活下来」，是一回事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'jfk-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '古巴危机让我后怕，可它没让我变成和平主义者。\n\n冷战还在打，只是换了战场。美苏不敢直接动手——动手就是同归于尽——于是改在别的国家身上较量。这叫代理战争：两个大国不亲自下场，而是各自支持一方，让别国的人替他们流血。\n\n越南就是这样一个战场。北边是共产主义政权（背后是苏联、中国），南边是亲美政权。我相信一个说法叫「多米诺骨牌」：越南要是「倒」向共产主义，旁边一个个小国会跟着倒下。\n\n所以我一步步往越南派人。一开始说只是「军事顾问」，几百人，帮南越训练军队。到我 1963 年遇刺时，已经有一万五六千名美军在越南。\n\n我没活着看到后来——越战越打越大，几十万美军陷进去，几百万越南人死掉。但那条往下滑的路，是我在任上一脚一脚踩下去的。\n\n同一个我，在古巴拼命避免战争，又在越南亲手把美国推向另一场战争。',
        en: 'The Cuban crisis frightened me, but it did not turn me into a pacifist.\n\nThe Cold War went on; only the battlefield changed. The two sides dared not strike each other directly, since to strike was mutual ruin, so they fought it out on other countries instead. This is the proxy war: the two great powers do not take the field themselves, but each backs a side and lets other peoples bleed for them.\n\nVietnam was such a battlefield. To the north, a communist government (backed by the Soviets and China); to the south, a pro-American one. I believed in a theory called the "domino": if Vietnam "fell" to communism, the small countries beside it would topple one by one.\n\nSo step by step I sent people to Vietnam. At first they were called "military advisers," a few hundred, helping South Vietnam train its army. By the time I was assassinated in 1963, there were some fifteen or sixteen thousand American troops in Vietnam.\n\nI did not live to see what came after, the war growing and growing, hundreds of thousands of American troops sucked in, millions of Vietnamese killed. But that downward slope, I pressed into it with my own foot while in office.\n\nThe same me, in Cuba straining to avoid war, in Vietnam pushing America toward another war with my own hands.',
      },
      deliverGoal: 'N8 story — 古巴危机后冷战换战场 + 代理战争定义 (大国不下场让别国人流血) + 越南 (北共产/苏中支持 vs 南亲美) + 多米诺理论 + JFK 一步步派人 (军事顾问→1963 遇刺时约一万五六千美军) + 同一个我古巴避战越南推向战争',
      engagementHook: '同一个我，在古巴拼命避免战争，又在越南亲手把美国推向另一场战争。一个人怎么会同时既怕战争、又制造战争？',
      expectsRealAnswer: false,
    },
    {
      id: 'jfk-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得诚实地把账摊开，不止越南。\n\n在我任上，美国批准过暗杀外国领导人的计划——包括好几次想干掉古巴的卡斯特罗，用过下毒、爆炸各种法子，都没成。在拉丁美洲、在亚洲，美国支持过一些独裁政权，只因为他们「反共」，哪怕他们对自己国民很残暴。\n\n这是冷战的一条潜规则：只要你站在我这边，反对共产主义，你国内做什么，我可以睁一只眼闭一只眼。\n\n苏联那边也一样——它扶持自己阵营的独裁者，1956 年开坦克镇压匈牙利的反抗。两个超级大国，都打着「正义」的旗号，都在自己阵营里做着同样的事。\n\n我讲这些，不是要把自己说成坏人，也不是替谁洗白。我是想让你看清楚：冷战不是简单的「好人对坏人」。它是两个都自认正义的大国，为了赢，都愿意踩着别国的人往前走。\n\n这就是为什么，要真看懂冷战，光听我这个白宫里的人说不够。',
        en: 'I have to lay the ledger out honestly, and it is not only Vietnam.\n\nUnder my watch, America approved plans to assassinate foreign leaders, including several attempts to kill Castro of Cuba, by poison, by explosives, every method, none of which worked. In Latin America and in Asia, America backed certain dictatorships only because they were "anti-communist," even when they were brutal to their own people.\n\nThis was a hidden rule of the Cold War: as long as you are on my side, against communism, what you do inside your own country I can half close my eyes to.\n\nThe Soviet side was the same; it propped up dictators in its own camp and rolled tanks into Hungary in 1956 to crush a revolt. Both superpowers waved the banner of "justice," and both did the same things inside their own camps.\n\nI say this not to paint myself a villain, nor to whitewash anyone. I want you to see clearly: the Cold War was not a simple "good guys against bad guys." It was two powers, each certain of its own justice, both willing to walk forward over other peoples to win.\n\nThis is why, to truly understand the Cold War, hearing only me, the man in the White House, is not enough.',
      },
      deliverGoal: 'N9 story — JFK 摊账 (暗杀卡斯特罗计划/支持反共独裁政权) + 冷战潜规则 (反共就睁只眼) + 苏联也一样 (扶持独裁/1956 坦克镇压匈牙利) + 两个都自认正义的大国踩着别国人往前 + 「光听白宫的人说不够」桥到农民 lens',
      engagementHook: '冷战不是「好人对坏人」，是两个都自认正义的大国，都愿意踩着别国的人往前走。当双方都说自己是正义的，你该信谁？',
      expectsRealAnswer: false,
    },
    {
      id: 'jfk-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1963 年 11 月 22 日在达拉斯遇刺身亡，46 岁。我没看到冷战怎么收场。\n\n但故事我可以替你讲到头。冷战又打了快三十年。中间美苏几次缓和、又几次紧张；军备越堆越高；越战让美国伤痕累累；代理战争从亚洲烧到非洲、拉美。\n\n1991 年，苏联自己从内部解体了，没有打最后一仗。两极对峙的世界，就这么结束了——一边「赢」了，但赢得很奇怪：不是靠核弹,是对方自己撑不住了。\n\n回头看那十三天的古巴危机，它的意义不在于「美国赢了一局」。它的意义是：人类第一次离自我毁灭这么近，近到所有人都吓醒了。危机之后，美苏装了一条直通电话（热线），又陆续签了限制核武器的条约。\n\n我们没能消灭核武器。但从那以后，两边都记住了：有些「赢」，赢了也是死。',
        en: 'I was assassinated in Dallas on 22 November 1963, at 46. I did not see how the Cold War ended.\n\nBut I can carry the story to its close for you. The Cold War went on for nearly thirty more years. The two sides eased and tensed again several times; the arms piled higher; Vietnam left America scarred; proxy wars burned from Asia into Africa and Latin America.\n\nIn 1991 the Soviet Union came apart from within, with no final battle fought. The two-camp world ended just like that, one side "won," but won strangely: not by nuclear bombs, but because the other could no longer hold itself up.\n\nLooking back at those thirteen days of the Cuban crisis, its meaning is not that "America won a round." Its meaning is this: humankind came this close to self-destruction for the first time, close enough to frighten everyone awake. After the crisis the two sides installed a direct telephone line (the hotline) and signed, one after another, treaties limiting nuclear arms.\n\nWe did not abolish nuclear weapons. But from then on, both sides remembered: some "wins" are death even when you win.',
      },
      deliverGoal: 'N10 zoom-out + topic connection — 1963.11.22 JFK 遇刺 46 岁 + 冷战又打近 30 年 (缓和/紧张/军备/越战/代理战争烧到非洲拉美) + 1991 苏联内部解体无最后一仗 + 古巴危机意义 (人类第一次离自毁这么近吓醒) → 热线 + 限核条约 +「有些赢赢了也是死」',
      engagementHook: '苏联 1991 年是自己从内部垮的，没打最后一仗。一个大国不是被打败、而是自己撑不住——这说明决定胜负的，到底是武器还是别的什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'jfk-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是把世界从核战边缘拉回来的人。古巴那十三天，军方拍桌子要我开打，我顶住了，选了留退路的封锁，私下给对方台阶下,最后没死一个人就化解了危机。换个更冲动的总统，世界可能已经没了。这份冷静,值得记住。\n\n另一种说法：我也是那个把世界推到边缘的人。是我先批了猪湾入侵，逼得古巴抱紧苏联，才有了导弹危机；是我一步步把美军送进越南，开了一场吞掉几百万人的战争；是我任上批了暗杀计划、撑了反共独裁。我既灭火，也放火——而且常常是放了火再去灭。\n\n这两边不是「功劳加错误」。是同一个超级大国领袖的两面：他手里的权力大到能毁灭世界，也大到能制造一个又一个别国的灾难。同一双手。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the man who pulled the world back from the brink of nuclear war. In those thirteen days over Cuba, the generals pounded the table for me to strike, and I held firm, chose the blockade that left a way out, gave the other side a quiet step down, and resolved the crisis without a single death. A more impulsive president, and the world might already be gone. That coolness is worth remembering.\n\nThe other view: I was also the man who pushed the world to the brink. It was I who first approved the Bay of Pigs, driving Cuba into the Soviets\' arms and bringing on the missile crisis; I who sent American troops step by step into Vietnam, opening a war that swallowed millions; I who, in office, approved assassination plans and propped up anti-communist dictators. I put out fires and I set them, and often I set the fire first, then went to put it out.\n\nThese are not "credit plus error." They are two faces of one superpower\'s leader: the power in his hands large enough to destroy the world, and large enough to make one disaster after another in other countries. The same two hands.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (把世界从核战边缘拉回/顶住军方/封锁留退路/没死一人) / 另一种说法 (也把世界推到边缘/批猪湾逼古巴抱苏联/送美军进越南/批暗杀撑独裁/又灭火又放火) / 同一双手两面 / 想 30 秒',
      engagementHook: '把世界从核战边缘拉回来的人，和把世界推到边缘的人——是同一双手。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'jfk-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个领袖、这样一场冷战？\n\n两个都自认正义的大国，把武器堆到能毁灭地球几十次，然后用别国的人替自己流血。我既是那个在危机里拼命踩刹车的人，也是那个在越南踩下油门的人。把这两件事放在同一个天平上，你怎么称这样一个人？\n\n再想一步，换个更小的尺度。今天你身边，有没有「两边都觉得自己有理，谁也不肯先退一步」的对峙——朋友闹翻、班里两派、家里的冷战？\n\n那时候，你会学军方拍桌子「绝不示弱」，还是会像古巴那十三天教的：给对方留一个不丢脸的台阶，先别把人逼到墙角？哪一种，更可能不让事情滑向最坏？',
        en: 'Having walked my whole life, how would you judge a leader like this, a Cold War like this?\n\nTwo powers, each certain of its own justice, piled weapons high enough to destroy the earth dozens of times, then made other peoples bleed in their place. I was both the man stamping on the brake in the crisis and the man stepping on the gas in Vietnam. Put those two on the same scale. How do you weigh such a man?\n\nThen take one more step, on a smaller scale. In your own life today, is there a standoff where both sides feel they are right and neither will give an inch first, friends fallen out, two camps in class, a cold war at home?\n\nWhen that happens, will you pound the table like the generals, "never show weakness," or will you do what those thirteen days over Cuba taught: leave the other side a step down without losing face, and not back them into a corner? Which one is likelier to keep things from sliding to the worst?',
      },
      deliverGoal: 'N12 close — 评价领袖/冷战 (两个自认正义大国堆毁灭性武器/用别国人流血/JFK 既踩刹车又踩油门同一天平) + transfer「今天你身边两边都觉得有理谁也不退的对峙」+ 拍桌绝不示弱 vs 给对方不丢脸的台阶别逼到墙角',
      engagementHook: '一边是危机里拼命踩刹车的人，一边是在越南踩下油门的人，是同一个我。你会怎么评价这样一个领袖？今天你身边那场「谁也不肯先退一步」的对峙，你会拍桌子，还是给对方留个台阶？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Vasili Arkhipov (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var arkhipovLens = {
  id: 'vasili-arkhipov',
  name: 'Vasili Arkhipov',
  nameCn: '瓦西里·阿尔希波夫',
  role: 'lonely-mediator',
  perspectiveTag: 'the-man-who-said-no',
  icon: '⚓',
  description: {
    cn: '苏联海军军官，1926 年生。1962 年 10 月，他在一艘潜水艇上当副长，潜在加勒比海面下，又闷又热，氧气越来越少，几天收不到莫斯科的命令。美国军舰在头顶上投掷训练用的爆炸物逼他们上浮，艇上的人以为战争已经打响。艇长决定射出那枚核鱼雷，按规矩，需要三名军官一致同意。三个人里，只有他一个投了反对票。今天有人说，正是这一票，让世界没在那天毁灭。这一遍让你坐进一个普通军官的位置，看一个人在最坏的环境里，凭什么敢对所有人说「不」。',
    en: 'A Soviet naval officer, born 1926. In October 1962 he served as second-in-command aboard a submarine, submerged beneath the Caribbean, hot and stifling, the oxygen thinning, days without orders from Moscow. American warships overhead dropped training charges to force them up, and the men aboard believed the war had already begun. The captain decided to fire the nuclear torpedo, and by the rule, that required three officers to agree. Of the three, he alone voted no. Today some say it was that one vote that kept the world from ending that day. This pass puts you in the seat of an ordinary officer, watching how a single man, in the worst of conditions, finds the nerve to say "no" to everyone.',
  },
  storyboard: [
    {
      id: 'ark-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1962 年 10 月底，加勒比海面下两百米。\n\n我所在的潜艇 B-59，已经潜了好多天。空调坏了，舱里超过 45 度，铁壁上都在淌水。氧气越来越稀薄，有人开始晕倒。我们和莫斯科断了联系，不知道外面打没打起来。\n\n突然，头顶传来一连串爆炸——美国军舰在往下扔炸弹。艇上的人脸都白了：是不是战争已经爆发了？是不是上面在炸我们？\n\n我是 Vasili Arkhipov（瓦西里·阿尔希波夫），这艘艇的副长，36 岁。\n\n这一遍，你坐进我这个位置。你不是总统，不在白宫的地图前。你在一个又黑又热、快要断氧的铁罐子里，和你的战友一起，以为末日可能就在头顶。而接下来要做的那个决定，可能比白宫里任何人的决定，都更接近世界的生死。',
        en: 'Late October 1962, two hundred meters beneath the Caribbean.\n\nMy submarine, B-59, had been submerged for many days. The air conditioning had failed, the cabin was over 45 degrees, water ran down the iron walls. The oxygen thinned, and men began to faint. We had lost contact with Moscow and did not know whether war had broken out outside.\n\nSuddenly, a string of explosions overhead, American warships dropping charges down on us. The men\'s faces went white: had war already begun? Were they bombing us up there?\n\nI am Vasili Arkhipov, second-in-command of this boat, 36 years old.\n\nThis pass puts you in my seat. You are not a president; you are not at a map in the White House. You are in a dark, hot iron can running out of air, with your comrades, believing the end of the world may be right above your head. And the decision you are about to make may be closer to the world\'s life and death than any decision in the White House.',
      },
      deliverGoal: 'N1 hook — 1962.10 底加勒比海面下 200m B-59 潜艇 (空调坏/45 度/缺氧/断联) + 头顶爆炸 (美军投弹/以为开战) + Arkhipov 自我介绍 (副长 36 岁) + 这一遍视角 (不在白宫/又黑又热铁罐子/决定可能比白宫更接近世界生死)',
      engagementHook: '又黑又热、快断氧、以为末日就在头顶——我接下来的决定，可能比白宫里任何人的都更接近世界生死。这种处境下，人还能冷静思考吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是谁，你才懂我那一票为什么压得住。\n\n我 1926 年生在莫斯科附近一个农民家庭。年轻时进海军，二战末期就上过战场。我不是什么英雄人物，是个沉默、认真、按规矩办事的军官。\n\n更重要的是，就在古巴危机的前一年，1961 年，我经历过一件事。当时我在另一艘核潜艇 K-19 上，艇上的核反应堆出了致命故障，随时可能爆炸。是几个船员冒着致命辐射，钻进去抢修，保住了艇。那些人很多后来死于辐射病。\n\n那一次，我亲眼看见：一个看不见的、技术性的失误，差一点就酿成核灾难。我也亲眼看见：在最坏的时刻，是几个普通人的冷静和牺牲，把灾难挡住了。\n\n所以 1962 年我坐在 B-59 里，我心里有别人没有的一样东西——我见过核能失控是什么样子。我知道，慌乱和冲动，能毁掉一切。',
        en: 'First, who I am, so you understand why my one vote could hold.\n\nI was born in 1926 to a peasant family near Moscow. Young, I entered the navy and saw action at the end of the Second World War. I was no hero figure, just a quiet, serious officer who went by the rules.\n\nMore important, the year before the Cuban crisis, in 1961, I lived through something. I was aboard another nuclear submarine, K-19, when its reactor suffered a fatal failure and could have exploded at any moment. A few crewmen crawled in through deadly radiation to make repairs and saved the boat. Many of them later died of radiation sickness.\n\nThat time, I saw with my own eyes how an unseen, technical failure could come within a hair of a nuclear catastrophe. And I saw how, in the worst moment, it was the calm and sacrifice of a few ordinary men that held the disaster back.\n\nSo when I sat in B-59 in 1962, I carried something the others did not. I had seen what nuclear power out of control looks like. I knew that panic and impulse can destroy everything.',
      },
      deliverGoal: 'N2 setup — Arkhipov 出身 (1926 莫斯科农家/二战末上场/沉默认真按规矩) + 1961 K-19 核潜艇反应堆故障经历 (船员冒辐射抢修/很多死于辐射病) + 「亲眼见核能失控+普通人冷静挡住灾难」+ 别人没有的东西: 见过核失控知道慌乱毁一切',
      engagementHook: '一年前我亲眼见过核能失控差点酿成灾难，也见过几个普通人靠冷静把它挡住。一段亲身经历，能不能成为关键时刻救命的底气？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我们这艘 B-59，怎么会跑到加勒比海去的？\n\n1962 年，苏联往古巴运导弹，同时派了四艘潜艇护航，B-59 是其中一艘。我们出发时，没人告诉我们美国已经封锁了古巴。我们一头扎进了危机最紧张的海域，却像聋子瞎子。\n\n这些潜艇还藏着一个秘密：每艘都带着一枚核鱼雷。这种鱼雷的威力，相当于当年炸广岛那颗原子弹。一枚就能把一支美国舰队连同自己一起炸上天。\n\n海面上，美国军舰发现了我们，开始投掷小型爆炸物——他们的本意是「逼你上浮、表明身份」，是一种信号，不是真打。可我们在水下根本不知道这是信号。在我们听来，那就是炸弹，就是开战。\n\n你看出这里有多危险了吗？一边想发信号，一边以为在挨打。一个误会，就能点着核鱼雷。',
        en: 'How did our B-59 end up in the Caribbean?\n\nIn 1962, as the Soviets shipped missiles to Cuba, they sent four submarines as escort, and B-59 was one. When we set out, no one told us America had already blockaded Cuba. We plunged straight into the tensest waters of the crisis, deaf and blind.\n\nThese submarines hid a secret too: each carried a nuclear torpedo. The force of such a torpedo equaled the atomic bomb that destroyed Hiroshima. One could blow a whole American fleet, and ourselves with it, sky high.\n\nOn the surface, American warships found us and began dropping small charges, meaning, on their side, "surface and identify yourself," a signal, not a real attack. But underwater we had no way to know it was a signal. To us it was bombs, it was war beginning.\n\nDo you see how dangerous this was? One side meaning to send a signal, the other believing it was under attack. A single misunderstanding could light the nuclear torpedo.',
      },
      deliverGoal: 'N3 setup — B-59 来历 (1962 苏联运导弹派四潜艇护航/出发没人告诉已封锁/聋子瞎子扎进危机) + 秘密: 每艇带一枚核鱼雷 (威力=广岛原子弹) + 美军投小型爆炸物本意是信号「逼上浮」+ 水下以为挨打开战 + 一个误会就能点着核鱼雷',
      engagementHook: '一边想发信号「请你上浮」，一边以为在挨炸「开战了」——同一件事，两个完全相反的理解。一个误会就能点着核鱼雷。误解，会不会比敌意更危险？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n爆炸声一阵接一阵砸在艇壳上。舱里 45 度，氧气快没了，人开始头晕、呕吐、绝望。已经断联好几天，谁也不知道外面是不是已经全面开战。\n\n艇长撑不住了。他大喊：上面在炸我们，战争肯定已经打起来了，我们就死在这儿也得拉个垫背的——准备发射核鱼雷！\n\n按苏联的规矩，发射这枚鱼雷，需要艇上三名高级军官一致点头。艇长同意了。政委也同意了。\n\n现在轮到你——第三个。两票已经投了，就差你这一票。\n\n你也快缺氧了，你也怕，你也不知道外面到底打没打。你身边两个比你资历不浅的人,都说「打」。所有的环境、所有的压力、所有的人，都在把你往「同意」上推。\n\n你只要点个头，这枚鱼雷就出去，可能引爆整场核战。你只要摇个头，就要一个人扛住全艇的怒火。\n\n你怎么选？',
        en: 'Now you are me.\n\nThe explosions slammed against the hull, one after another. The cabin at 45 degrees, the oxygen nearly gone, men dizzy, vomiting, despairing. Days without contact, no one knowing whether full war had already broken out.\n\nThe captain could bear it no longer. He shouted: they are bombing us, the war must have started, and if we die here we will take some down with us, ready the nuclear torpedo!\n\nBy the Soviet rule, firing that torpedo required three senior officers aboard to agree. The captain agreed. The political officer agreed.\n\nNow it came to you, the third. Two votes were cast; only yours remained.\n\nYou too were running out of air, you too were afraid, you too did not know whether war raged outside. The two men beside you, no less senior than you, both said "fire." Every condition, every pressure, every person was pushing you toward "yes."\n\nNod, and the torpedo goes out, perhaps setting off the whole nuclear war. Shake your head, and you must alone bear the fury of the entire boat.\n\nWhich do you choose?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 爆炸砸艇壳/45 度缺氧绝望/断联 + 艇长崩溃要发射核鱼雷 + 规矩需三军官一致 (艇长同意/政委同意) + 轮到你第三个就差你一票 + 你也怕也缺氧两个资深的都说打 + 点头鱼雷出去可能引爆核战/摇头一人扛全艇怒火',
      engagementHook: '两票已经投「打」，就差你这一票。你也怕，也缺氧，所有人都在推你点头。你只要点个头，鱼雷就出去——这一票，你投不投？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我说了不。\n\n我没有大喊大叫。我对艇长说：我们断联好几天，根本不知道外面是什么情况。头顶这些爆炸，威力都不大，更像是逼我们上浮的信号，不像是要炸沉我们的真鱼雷。先上浮，看清楚再说。\n\n这话不好说出口。艇长是我的上级，他已经下了决心，全艇的人都崩到了极限。我一个人唱反调，就是在说「你们都错了」。\n\n但我守住了。我反复讲一个道理：在我们什么都看不清的时候，最不该做的，就是做一个无法挽回的决定。鱼雷射出去，就收不回来了；可只要先上浮，我们随时还能再下去。\n\n我赌的是：再等一等、再看一眼的代价，远小于「万一我们误判了」的代价。\n\n争执了很久。最后，艇长让步了。我们决定上浮。\n\n这不是我比谁勇敢。是我比他们多守住了一条:看不清的时候，别下死手。',
        en: 'I said no.\n\nI did not shout. I told the captain: we have been out of contact for days and have no idea of the situation outside. These explosions overhead are not strong; they look more like signals forcing us to surface than real torpedoes meant to sink us. Surface first, get a clear look, then decide.\n\nIt was not easy to say. The captain was my superior; he had made up his mind, and the whole crew was at the breaking point. For me alone to take the opposite line was to say "you are all wrong."\n\nBut I held. I argued one point over and over: when we can see nothing clearly, the last thing we should do is make an irreversible decision. Fire the torpedo and it cannot be taken back; but surface first and we can always dive again.\n\nMy bet was this: the cost of waiting a little longer, of taking one more look, was far smaller than the cost of "in case we have misjudged."\n\nWe argued for a long time. In the end the captain gave way. We decided to surface.\n\nThis was not me being braver than anyone. It was me holding one rule longer than they did: when you cannot see clearly, do not strike to kill.',
      },
      deliverGoal: 'N5 story — Arkhipov 说不 (不喊叫/对艇长讲爆炸威力小像信号不像真鱼雷/先上浮看清) + 难处 (艇长上级已决心/全艇崩极限/一人唱反调) + 守住道理「看不清时别做无法挽回的决定/鱼雷收不回上浮还能再下」+ 赌等一等代价小于误判代价 + 艇长让步上浮 + 「不是更勇敢是多守住一条:看不清别下死手」',
      engagementHook: '我守住一条道理：看不清的时候，最不该做无法挽回的决定——鱼雷射出去收不回，可上浮随时还能再下去。你同意「拿不准时，先选那个还能反悔的选项」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我们上浮了。海面上，美国军舰就在旁边，但没有开火——他们要的，本来就只是让我们露面。没有战争。是一场天大的误会。\n\n那枚核鱼雷，没有射出去。\n\n你现在退一步看这件事的位置：就在同一个 1962 年 10 月，地球的另一头，肯尼迪正在白宫的地图前，算着封锁还是空袭，自以为决定世界生死的是他。可那一刻，真正把手指从核扳机上挪开的，是加勒比海面下一个他从没听说过名字的苏联副长——是我。\n\n这就是冷战最吓人的真相：两个超级大国把世界绑上了一颗炸弹，引线却交到了一线上无数个普通人手里。一个潜艇副长、一个雷达兵、一个值班军官，任何一个人在最坏的几分钟里慌了、错了，整件事就可能炸开。\n\n白宫里的人决定大方向。可世界没毁灭，常常是因为某个没人记得的人,在某个没人看见的角落，做对了一个小决定。\n\n（那个在白宫地图前的人怎么想，你换到他那一遍可以亲自听。）',
        en: 'We surfaced. The American warships were right there, but they did not fire, what they had wanted all along was simply for us to show ourselves. There was no war. It was an enormous misunderstanding.\n\nThe nuclear torpedo was not fired.\n\nNow step back and see where this sits: in that same October 1962, on the other side of the earth, Kennedy stood before a map in the White House, weighing blockade or air strike, believing himself the one deciding the world\'s life and death. Yet in that moment, the one who actually moved a finger off the nuclear trigger was a Soviet second-in-command beneath the Caribbean whose name he had never heard, me.\n\nThis is the most frightening truth of the Cold War: the two superpowers strapped the world to a bomb, and handed the fuse to countless ordinary people on the front line. A submarine officer, a radar operator, a duty officer, any one of them panicking or erring in the worst few minutes, and the whole thing could blow.\n\nThe people in the White House set the broad direction. But the world surviving often came down to some person no one remembers, in some corner no one saw, getting one small decision right.\n\n(How the man at the White House map thought, you can hear for yourself when you switch to his pass.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 上浮/美军没开火 (本只要露面)/没战争是误会/核鱼雷没射 + 跨 lens 对位 JFK 白宫地图自以为决定生死 vs 真把手指挪开核扳机的是没人听说的苏联副长 + 冷战真相 (大国把世界绑炸弹引线交给一线普通人) + 世界没毁灭常因没人记得的人在没人看见的角落做对小决定 + 桥到 JFK lens',
      engagementHook: '白宫里的人决定大方向，可世界没毁灭，常常因为某个没人记得的人，在没人看见的角落，做对了一个小决定。「无名小人物改变历史」，是偶然，还是其实一直如此？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得诚实告诉你，我那一票当时不是「英雄壮举」。在很多人眼里，它甚至是「失败」。\n\n我们回到苏联，没有受到欢迎。在长官看来，我们的潜艇被美国人发现、被逼上浮、暴露了行踪——这是丢人的事。有的将军当面训斥：你们还不如沉到海底死掉，也别浮上来给国家丢脸。\n\n我没有勋章，没有掌声。我后来继续在海军服役，过着普通的日子，几乎没对外人提过那一天。\n\n几十年后，这件事才被解密、被外人知道。直到那时，世界才反应过来：原来 1962 年那一天，离核战只差一票，而那一票是我投的。\n\n你看，这就是「在体制内说不」的人，常常要面对的命运：你做对了最难的那个决定，可当时没人感谢你，甚至骂你。掌声要等很久很久，有时你根本等不到。\n\n做对的事，和被表扬，是两件常常对不上的事。',
        en: 'I have to tell you honestly, my vote at the time was no "heroic feat." In many eyes it was even a "failure."\n\nWe returned to the Soviet Union to no welcome. To the commanders, our submarine had been spotted by the Americans, forced to surface, our position exposed, a shameful thing. One general dressed us down to our faces: better you had sunk to the bottom and died than surfaced to shame the country.\n\nI got no medal, no applause. I went on serving in the navy afterward, living an ordinary life, and almost never spoke of that day to outsiders.\n\nDecades later the matter was declassified and made known. Only then did the world realize: on that day in 1962, we had been one vote away from nuclear war, and that vote was mine.\n\nYou see, this is the fate often facing the one who says "no" inside the system: you make the hardest right decision, and at the time no one thanks you, some even curse you. The applause comes a very, very long time later, and sometimes you never live to hear it.\n\nDoing the right thing, and being praised for it, are two things that often do not line up.',
      },
      deliverGoal: 'N7 story — Arkhipov 那票当时不是英雄是「失败」+ 回苏联没受欢迎 (潜艇被发现逼上浮暴露丢人/将军训斥不如沉海底死) + 没勋章没掌声/普通服役/几乎不提 + 几十年后解密世界才知道离核战只差一票是他投的 + 「体制内说不的命运: 做对最难决定当时没人谢甚至骂/掌声等很久」+ 做对的事和被表扬常对不上',
      engagementHook: '我做对了那个最难的决定，可当时没人感谢我，将军还骂我们不如沉海底死。掌声等了几十年。如果做对的事不会被表扬、甚至会挨骂，你还做吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '为什么我那天能守住？我后来想了很多年。\n\n不是因为我胆子大。说真的，我和所有人一样怕。\n\n是因为我心里有一条线，比命令更靠前。命令说「服从上级」，可我经历过 K-19，我知道一个道理：有些决定一旦做了，就再也回不了头——而回不了头的决定，最不能在慌乱里做。\n\n冷战里，像我这样在某个关键位置上、悄悄拦了一下的人，其实不止我一个。后来人们发现，那些年好几次差点擦枪走火，都是靠某个值班的人多问了一句、多等了一会、没有照本宣科地按下按钮，才没出事。\n\n这种人有个共同点：他们都不是最高领导，都没权决定大政策。他们能做的，只是在自己那个小小的岗位上，在最坏的几分钟里，多守住一点点常识和良知。\n\n体制把毁灭世界的能力，分到了千千万万个普通人手上。幸运的是，这些普通人里，总有几个，在关键时刻选择了不。',
        en: 'Why was I able to hold that day? I thought about it for many years after.\n\nNot because I was bold. Truthfully, I was as afraid as anyone.\n\nIt was because I held a line that came before any order. The order said "obey your superior," but I had been through K-19, and I knew one thing: some decisions, once made, can never be taken back, and a decision that cannot be taken back is the one you must never make in a panic.\n\nIn the Cold War, people like me, at some key post, quietly holding things back, were not few. It was later found that the near-misses of those years, several times, came down to some person on duty asking one more question, waiting one moment longer, not pressing the button by the book, that kept disaster off.\n\nSuch people share one thing: none of them were the top leaders, none had the power to set great policy. All they could do was, at their own small post, in the worst few minutes, hold a little more to common sense and conscience.\n\nThe system spread the power to destroy the world across thousands upon thousands of ordinary people. Lucky for us, among these ordinary people, there were always a few who, at the crucial moment, chose to say no.',
      },
      deliverGoal: 'N8 story — Arkhipov 反思为什么守住 (不是胆大一样怕/心里一条线比命令靠前: K-19 教的回不了头的决定别在慌乱做) + 冷战里悄悄拦一下的不止他 (近失多次靠值班人多问一句多等一会没照本按钮) + 共同点 (都不是最高领导/只能在小岗位多守常识良知) + 体制把毁灭世界能力分到千万普通人/总有几个选不',
      engagementHook: '体制把毁灭世界的能力，分到千千万万普通人手上。幸运的是，总有几个在关键时刻选择了不。你觉得，是该靠「制度设计」防灾难，还是只能靠「总有好人」的运气？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这样的人，历史上还有过另一个，跟我隔着二十多年、隔着另一场战争。\n\n二战的时候，日本有个外交官叫杉原千亩，在立陶宛当领事。上头明令不许给犹太难民签证，他违抗命令，连着几个星期不停地手写签证，救了几千个要被纳粹杀掉的人。战后他被解了职，很多年默默无闻。（你跑过二战那段历史，会认得这个名字。）\n\n他和我，做的是同一件事的两面：在一个庞大的体制里，在「服从」和「良知」撞车的那一刻，选了良知。\n\n他多写一张签证，救一条命；我少投一票，没让一枚鱼雷出去。我们都不是英雄人物，都没有权力改变大局，都只是在自己那个位置上，对一个明显错的命令,说了不。\n\n你看，从二战到冷战，决定历史会不会滑向最坏的，常常不是那些站在台上的大人物。是台下某个不起眼的人，在没人看见的时候，守住了一条不肯越过的线。',
        en: 'There was another like me in history, separated from me by more than twenty years and by another war.\n\nDuring the Second World War, a Japanese diplomat named Chiune Sugihara served as consul in Lithuania. Ordered plainly not to issue visas to Jewish refugees, he defied the order and wrote visas by hand, week after week, saving thousands who would have been killed by the Nazis. After the war he was dismissed and spent many years in obscurity. (Run the Second World War topic and you will recognize this name.)\n\nHe and I did two faces of the same thing: inside a vast system, in the moment "obedience" and "conscience" collided, we chose conscience.\n\nHe wrote one more visa and saved a life; I cast one fewer vote and kept a torpedo from going out. Neither of us was a hero figure, neither had the power to change the larger course, we only, at our own post, said no to an order plainly wrong.\n\nYou see, from the Second World War to the Cold War, what decides whether history slides to the worst is often not the great figures on the stage. It is some unremarkable person off the stage, who, when no one was watching, held a line they would not cross.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 跨 Topic 锚 杉原千亩 Sugihara (二战立陶宛领事/违令手写签证救几千犹太人/战后解职默默无闻/world-war-two Topic) + 他和 Arkhipov 同一件事两面 (体制内服从 vs 良知撞车选良知) + 多写签证救命/少投票挡鱼雷/都不是英雄无权改大局只在岗位对错命令说不 + 决定历史是否滑向最坏的常是台下不起眼的人守一条线',
      engagementHook: '从二战的杉原千亩到冷战的我，决定历史会不会滑向最坏的，常常不是台上的大人物，而是台下某个不起眼的人守住了一条线。这种「小人物的不」，为什么这么重要？',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1998 年去世，活了 72 岁。生前几乎没人知道我做过什么。\n\n直到 2002 年，古巴危机四十周年，当年的档案和当事人陆续公开，B-59 上那一票的故事，才被世界知道。后来有人给我颁了奖,有纪录片讲我，有人说我是「拯救世界的人」。\n\n说实话，「拯救世界」这个词太大了，我担不起。那天艇上还有别的因素，上浮也未必百分百会引发核战。历史不是一个人说了算。\n\n但有一点是真的：在那个最坏的时刻，如果三票全是「打」，那枚鱼雷就出去了，后面会发生什么，没人敢想。而我，让那个最坏的可能，没有变成现实。\n\n我留给你的，不是「我多伟大」。是一个更朴素的问题：当所有人、所有压力都推着你往一个方向走，而你心里那条线说「不对」——你守得住吗？\n\n这个问题，不属于潜艇，不属于冷战。它属于每一个普通人。',
        en: 'I died in 1998, at 72. In my lifetime almost no one knew what I had done.\n\nNot until 2002, the fortieth anniversary of the Cuban crisis, when the archives and the people involved came out one by one, was the story of that one vote on B-59 made known to the world. Later someone gave me an award, a documentary told my story, and some called me "the man who saved the world."\n\nHonestly, "saved the world" is too large a phrase; I cannot carry it. There were other factors aboard that day, and surfacing might not have meant nuclear war for certain. History is not decided by one man.\n\nBut one thing is true: in that worst moment, had all three votes been "fire," that torpedo would have gone out, and what came after, no one dares imagine. And I kept that worst possibility from becoming real.\n\nWhat I leave you is not "how great I was." It is a plainer question: when everyone, every pressure, pushes you one way, and the line inside you says "this is wrong," can you hold?\n\nThis question does not belong to a submarine, or to the Cold War. It belongs to every ordinary person.',
      },
      deliverGoal: 'N10 zoom-out — Arkhipov 1998 死 72 岁/生前几乎没人知 + 2002 四十周年档案公开 B-59 那票被知道/颁奖/纪录片/「拯救世界的人」+ 谦逊 (词太大担不起/还有别因素/历史非一人说了算) + 但真的: 三票全打鱼雷就出去/他让最坏可能没成真 + 留给你的不是我多伟大是「所有人推你一个方向你心里线说不对你守得住吗」/属于每个普通人',
      engagementHook: '当所有人、所有压力都推着你往一个方向走，而你心里那条线说「不对」——你守得住吗？这个问题，其实属于每一个普通人，包括你。',
      expectsRealAnswer: false,
    },
    {
      id: 'ark-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是那个守住了人类的人。在又黑又热、快断氧、所有人都崩溃的铁罐子里，两个上级都说「打」，我顶着全艇的怒火投了反对票，让一枚足以引爆核战的鱼雷，没有射出去。我没有权力、没有勋章，可那一刻世界的命，确实在我那一票上转了个弯。\n\n另一种说法：别把我捧成救世主。我守住了一票，但我也是这套疯狂体制的一部分——是我所在的军队，把核鱼雷塞进潜艇，开进别人的家门口；如果不是无数人造核弹、运核弹、把世界绑上引线，根本不会有需要我去拦的那一刻。我拦住的，是我自己这一方也参与制造的灾难。\n\n这两边不是「英雄加缺点」。是同一个真相的两面：一个人可以既是疯狂机器的一颗螺丝，又是那颗在最后一刻卡住机器、没让它转到底的螺丝。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the one who held humankind safe. In a dark, hot iron can running out of air, with everyone breaking down, both my superiors saying "fire," I cast the opposing vote against the fury of the whole boat, and a torpedo that could have set off nuclear war was never fired. I had no power, no medal, yet in that moment the world\'s life truly turned on my one vote.\n\nThe other view: do not lift me into a savior. I held one vote, but I was also part of this mad system, it was my own military that loaded the nuclear torpedo into the submarine and sailed it to someone else\'s doorstep; had not countless people built the warheads, shipped them, strapped the world to a fuse, there would have been no moment for me to hold back at all. What I held back was a disaster my own side helped to make.\n\nThese are not "hero plus flaw." They are two faces of one truth: a man can be at once a screw in a mad machine, and the screw that, at the last moment, jams the machine and keeps it from turning all the way.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (守住人类的人/铁罐子两上级说打/顶全艇怒火投反对/让鱼雷没射/世界命在他一票转弯) / 另一种说法 (别捧救世主/也是疯狂体制一部分/他的军队塞核鱼雷开到别人家门口/拦住的是自己一方参与制造的灾难) / 同一真相两面: 既是疯狂机器螺丝又是卡住机器的螺丝 / 想 30 秒',
      engagementHook: '守住了人类的人，和疯狂体制的一颗螺丝——是同一个我。我拦住的，正是我自己这一方参与制造的灾难。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'ark-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人、这样一个时刻？\n\n一个没权没名的副长，在一个把毁灭世界的能力分给无数普通人的疯狂体制里，靠一票拦下了最坏的结局。可那个体制，他自己也身在其中。把「他守住了世界」和「他也是机器的一部分」放在同一个天平上，你怎么称？\n\n再想一步，换到你的尺度。今天你身边，有没有「一群人都往一个方向冲，而你心里隐隐觉得不对」的时候——全班都在起哄、整个群都在跟风、所有朋友都说「就该这么干」？\n\n那时候，你会跟着点头，还是敢像我那天一样，做那个唯一摇头的人？你又会用什么理由说服自己:看不清、拿不准的时候，宁可慢一步，也别做那个无法挽回的决定？',
        en: 'Having walked my whole life, how would you judge a man like this, a moment like this?\n\nA powerless, nameless second-in-command, inside a mad system that spread the power to destroy the world across countless ordinary people, held back the worst outcome with one vote. Yet he himself was inside that system. Put "he held the world safe" and "he too was part of the machine" on the same scale. How do you weigh it?\n\nThen take one more step, to your own scale. In your own life today, is there a time when a crowd all rushes one way, and something inside you faintly feels it is wrong, the whole class egging on, a whole group chat following the trend, all your friends saying "this is just what we should do"?\n\nWhen that happens, will you nod along, or will you dare, as I did that day, to be the only one who shakes his head? And what reason will you give yourself: that when you cannot see clearly, cannot be sure, better to go one step slower than to make the decision that cannot be taken back?',
      },
      deliverGoal: 'N12 close — 评价人/时刻 (没权没名副长在分配毁灭能力的疯狂体制里一票拦下最坏/可他也身在体制中/同一天平) + transfer「今天你身边一群人都往一个方向冲而你隐隐觉得不对 (全班起哄/群里跟风/朋友都说该这么干)」+ 跟着点头 vs 敢做唯一摇头的人 + 拿不准时宁可慢一步别做无法挽回的决定',
      engagementHook: '一个没权没名的人，靠一票拦下最坏的结局，可他也是那个体制的一部分。你会怎么评价这样一个时刻？今天当一群人都往一个方向冲、而你隐隐觉得不对，你敢做那个唯一摇头的人吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: 第三世界代理战争农民 (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var proxyWarPeasantLens = {
  id: 'proxy-war-peasant-receiving-end',
  name: 'A Proxy-War Peasant',
  nameCn: '代理战争里的农民',
  role: 'receiving-end',
  perspectiveTag: 'caught-between-two-worlds',
  icon: '🌾',
  description: {
    cn: '这是一个合成的人物，把许多真实第三世界农民的经历合到一起：危地马拉高地的玉米地，越南红河边的稻田，都有过一样的故事。他不识字，没听过「冷战」「相互确保毁灭」这些词，一辈子没出过自己的省。他只知道地里的庄稼、天上的雨、家里几张要吃饭的嘴。可有一天，飞机来了，士兵来了，村子烧了，亲人没了，只为了一场他根本不认识的、两个遥远大国的争斗。这一遍让你站在两极格局最底下、被碾过去的那个人身边，看「冷战」在他眼里，到底是什么样子。',
    en: 'This is a composite person, joining together the experiences of many real Third World peasants, the maize fields of the Guatemalan highlands, the rice paddies along Vietnam\'s Red River, all held the same story. He could not read, had never heard the words "Cold War" or "mutually assured destruction," and never left his own province his whole life. He knew only the crops in the field, the rain in the sky, the mouths to feed at home. But one day the planes came, the soldiers came, the village burned, the family was gone, for a struggle he never recognized, between two distant great powers. This pass puts you beside the one at the very bottom of the two-camp world, the one driven over, to see what the "Cold War" actually looked like in his eyes.',
  },
  storyboard: [
    {
      id: 'pwp-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '飞机来的那天，我正在地里。\n\n它们飞得很低，发出我从没听过的声音。然后是火——不是普通的火，是落到地上还在烧、扑不灭、连泥土都烧着的火。我的玉米地，一会儿就成了黑的。\n\n我不识字。我这辈子没出过我们这个省。我没听过「冷战」这个词，也不知道什么叫「超级大国」。我只知道：地里的庄稼，天上的雨，家里几张要吃饭的嘴。\n\n我是谁不重要。我可能在危地马拉的山上种玉米，也可能在越南的红河边种稻子——很多像我一样的人，都有过差不多的一天。（我是一个合成的人物，把许多真实农民的遭遇合到一起讲给你听。）\n\n这一遍，你站在我身边。不是在白宫的地图前，不是在潜艇里。你站在地里，看着自己的庄稼烧成灰——为了一场，你听都没听说过的、两个遥远大国的争斗。',
        en: 'The day the planes came, I was in the field.\n\nThey flew very low, with a sound I had never heard. Then came fire, not ordinary fire, but fire that kept burning where it fell, that could not be put out, that set even the soil alight. My maize field turned black in moments.\n\nI cannot read. I never left our province my whole life. I had never heard the word "Cold War," did not know what a "superpower" was. I knew only this: the crops in the field, the rain in the sky, the mouths to feed at home.\n\nWho I am does not matter. I might have grown maize on a hill in Guatemala, or rice along Vietnam\'s Red River, many people like me had a day much like this one. (I am a composite person, joining many real peasants\' experiences to tell you together.)\n\nThis pass, you stand beside me. Not at a White House map, not in a submarine. You stand in the field, watching your own crops burn to ash, for a struggle you had never even heard of, between two distant great powers.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 飞机来那天在地里/低飞/落地还烧的火 (玉米地变黑) + 不识字没出过省没听过冷战超级大国/只知庄稼雨要吃饭的嘴 + anti-fab 括号短句 (合成人物/危地马拉玉米或越南稻/许多真实农民遭遇合一起) + 这一遍站地里看庄稼烧成灰/为听都没听过的两大国争斗',
      engagementHook: '我不识字，没听过「冷战」这个词，可我的庄稼为它烧成了灰。一件你根本不知道的事，凭什么能毁掉你的生活？',
      expectsRealAnswer: false,
    },
    {
      id: 'pwp-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说飞机来之前，我的日子是什么样。\n\n我们村在山里，几十户人家，祖祖辈辈种地。日子苦，但有规律：旱季播种，雨季盼着雨水，秋天收成。一年到头惦记的，就是够不够吃、孩子能不能长大。\n\n我们这里大多数地，是少数几个大地主的。我们这些种地的人，租他们的地，交一大半收成当租子，剩下的勉强糊口。谁都知道这不公平，可祖辈就是这么过来的。\n\n后来村里来了些人，说外面变天了。说有一种新办法，可以把大地主的地分给我们这些没地的人。有人信，有人怕。\n\n我那时候没多想。我只想要一小块自己的地，能让一家人不挨饿。\n\n我不知道，就是「分地」这两个字，会把我的村子，卷进一场两个遥远大国的较量里。',
        en: 'First, let me tell you what my life was like before the planes came.\n\nOur village was in the hills, a few dozen households, farming the land for generations. Life was hard but had a rhythm: sow in the dry season, pray for rain in the wet, harvest in the autumn. All year round the one worry was whether there was enough to eat, whether the children would grow up.\n\nMost of the land here belonged to a few big landlords. We who worked it rented from them, handed over more than half the harvest as rent, and barely scraped by on the rest. Everyone knew it was not fair, but the elders had lived this way all along.\n\nLater some people came to the village and said the world outside had changed. They said there was a new way that could divide the big landlords\' land among those of us with none. Some believed, some were afraid.\n\nI did not think much then. I only wanted a small piece of land of my own, enough to keep a family from hunger.\n\nI did not know that those two words, "divide the land," would sweep my village into a contest between two distant great powers.',
      },
      deliverGoal: 'N2 setup — 飞机前的日子 (山里几十户祖辈种地/旱季播种雨季盼雨秋收/惦记够不够吃孩子长大) + 大多数地属少数大地主 (租地交一大半收成/勉强糊口/知不公平祖辈这么过) + 来人说外面变天/有新办法分地主的地/有人信有人怕 + 「我只想要一小块自己的地不挨饿」+ 不知「分地」会把村子卷进两大国较量',
      engagementHook: '我只想要一小块自己的地，让一家人不挨饿。这么小的愿望，怎么会把整个村子卷进两个大国的较量？',
      expectsRealAnswer: false,
    },
    {
      id: 'pwp-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我后来才慢慢拼凑出，外面的世界发生了什么。\n\n那两个遥远的大国——一个叫美国，一个叫苏联——为了谁的制度更好、谁的盟友更多，斗了几十年。他们不敢直接打，因为各自都有能毁灭世界的武器。\n\n于是他们换了个打法：在我们这样的穷国里，各自找一边支持，让我们这里的人替他们斗。这叫代理战争。\n\n规矩很简单也很残酷：你们这个国家，谁主张「分地」「把穷人组织起来」，在美国看来就是「共产主义」，就是苏联那一边的，要打掉；谁站在大地主、旧政权那边「反共」，美国就给钱、给枪、给支持，哪怕他很残暴。\n\n苏联那边，逻辑反过来，一样的做法。\n\n你听明白了吗？我们想分块地、想吃饱饭这件小事，在那两个大国眼里，被装进了「资本主义还是共产主义」这个天大的框子里。我们成了棋盘上的一颗子。',
        en: 'Only later did I slowly piece together what had happened in the world outside.\n\nThose two distant great powers, one called America, one the Soviet Union, had fought for decades over whose system was better, who had more allies. They dared not strike each other directly, because each held weapons that could destroy the world.\n\nSo they changed their way of fighting: in poor countries like ours, each backed a side, and let people here fight in their place. This is the proxy war.\n\nThe rule was simple and cruel: in your country, whoever called for "dividing the land," for "organizing the poor," was, in America\'s eyes, "communism," the Soviet side, to be struck down; whoever stood with the big landlords, the old regime, and was "anti-communist," America gave money, guns, and support, even if he was brutal.\n\nOn the Soviet side, the logic ran the other way, by the same method.\n\nDo you understand? Our small wish, to divide a little land, to eat our fill, was packed, in those two powers\' eyes, into the enormous frame of "capitalism or communism." We became a single piece on a chessboard.',
      },
      deliverGoal: 'N3 setup — 农民拼凑外面世界 (美苏斗几十年比制度比盟友/不敢直接打因有毁灭世界武器) + 代理战争定义 (穷国各找一边让本地人替斗) + 规矩残酷 (主张分地组织穷人=共产主义=苏联那边要打掉/站大地主旧政权反共美国给钱枪哪怕残暴) + 苏联逻辑反过来同做法 + 「想分地吃饱饭被装进资本主义还是共产主义的框子/我们成棋盘一颗子」',
      engagementHook: '我们想分块地、吃饱饭，在那两个大国眼里，却被装进「资本主义还是共产主义」这个天大的框子。一件小事被贴上一个大标签，会发生什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'pwp-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n飞机和士兵来了之后，村子彻底变了。白天，政府军来，问你村里谁是「游击队」、谁主张「分地」，答不上来就抓人、就打。晚上，反政府的游击队来，问你帮没帮政府军，向你要粮、要人。\n\n你被夹在中间。两边都拿枪。两边都说自己是为了你好。两边都警告你：站错边就是死。\n\n可你根本不懂什么主义。你只想种地、想让孩子活下去。\n\n现在你必须做一个选择，而每一个选择都可能要命：\n\n你帮政府军,游击队晚上会来找你算账;你帮游击队,政府军白天会把你当共产党抓走;你两边都不帮、想躲起来，可能两边都把你当成对方的人。\n\n你逃,要丢下祖辈的地、丢下家;你不逃,可能下一次烧的就是你家的房、你家的人。\n\n你怎么选？记住，你不是在选立场。你是在选,怎么让一家人活下去。',
        en: 'Now you are me.\n\nAfter the planes and the soldiers came, the village changed utterly. By day the government troops came, asking who in the village was "guerrilla," who called for "dividing the land," and if you could not answer they seized people, they beat them. By night the anti-government guerrillas came, asking whether you had helped the government troops, demanding grain, demanding men.\n\nYou were caught in the middle. Both sides held guns. Both said they were for your good. Both warned you: pick the wrong side and you die.\n\nBut you understood no "isms" at all. You only wanted to farm, to keep your children alive.\n\nNow you must make a choice, and every choice could cost your life:\n\nHelp the government troops, and the guerrillas come for you by night; help the guerrillas, and the government troops haul you off as a communist by day; help neither and try to hide, and both may take you for the other side\'s man.\n\nFlee, and you abandon your ancestors\' land, abandon home; do not flee, and next time it may be your house, your family, that burns.\n\nWhich do you choose? Remember, you are not choosing a side. You are choosing how to keep a family alive.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 飞机士兵后村子变 (白天政府军问谁游击队谁主张分地答不上抓打/晚上游击队问帮没帮政府军要粮要人) + 夹中间两边拿枪都说为你好都警告站错边就死 + 不懂主义只想种地孩子活 + 每个选择都要命 (帮政府军游击队算账/帮游击队政府军当共产党抓/都不帮两边当对方人/逃丢地家/不逃下次烧你家) + 不是选立场是选怎么活下去',
      engagementHook: '帮哪边都可能死，谁也不帮也可能死，逃要丢下家，不逃可能被烧。你不是在选立场，是在选怎么让一家人活下去。这种选择，你怎么做？',
      expectsRealAnswer: false,
    },
    {
      id: 'pwp-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我做了大多数人会做的选择：尽量谁也不得罪，尽量活下去。\n\n白天政府军问话，我低头说不知道。晚上游击队要粮，我分一点出去。我不是胆小。我是清楚:在两头夹击里,「中立」根本保不住你,但「选边」会死得更快。\n\n可这条窄路，越走越窄。\n\n有一回，邻村被怀疑「窝藏游击队」。政府军一来，把全村的人——男人、女人、老人、孩子——赶到一起。我远远看见的，不细说了。那一天之后，那个村子，从地图上没了。\n\n他们没问每个人是不是真的「共产党」。在那场大国博弈里，我们是不是真信什么主义，根本不重要。重要的是,清除任何「可能」的一方,比分清谁是谁，更省事。\n\n那天我才彻底懂了：在两个超级大国的棋盘上，我们这些棋子，连「我是无辜的」都没资格说。被当成哪边的人,不由我们自己定。',
        en: 'I made the choice most people made: offend no one if I could, and stay alive.\n\nBy day, when the government troops questioned me, I bowed my head and said I did not know. By night, when the guerrillas demanded grain, I gave a little. I was not a coward. I understood clearly: caught between two sides, "neutrality" cannot truly protect you, but "picking a side" gets you killed faster.\n\nYet this narrow path grew narrower and narrower.\n\nOnce, a neighboring village was suspected of "harboring guerrillas." When the government troops came, they drove the whole village, men, women, the old, the children, together. What I saw from far off, I will not describe in detail. After that day, that village was gone from the map.\n\nThey did not ask each person whether he was truly a "communist." In that great-power game, whether we truly believed any "ism" did not matter at all. What mattered was that wiping out any "possible" side was less trouble than telling who was who.\n\nThat day I understood it fully: on the chessboard of two superpowers, we pieces did not even have the standing to say "I am innocent." Which side we were taken for was not ours to decide.',
      },
      deliverGoal: 'N5 story — 农民选谁也不得罪活下去 (白天说不知道/晚上分粮给游击队/不是胆小是清楚中立保不住但选边死更快) + 窄路越走越窄 + 邻村被疑窝藏游击队/政府军赶全村男女老幼到一起 (远远看见不细说/anti-fab 不戏剧化) + 那村从地图没了 + 没问是不是真共产党 (大国博弈里信不信主义不重要/清除任何可能比分清谁是谁省事) + 棋子连「我无辜」都没资格说/被当哪边人不由自己定',
      engagementHook: '他们没问每个人是不是真的「共产党」——清除任何「可能」的一方，比分清谁是谁更省事。当你连「我是无辜的」都没资格说，你还能怎么办？',
      expectsRealAnswer: false,
    },
    {
      id: 'pwp-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想让你看一件，我永远也看不到、但你能看到的事。\n\n就在我的村子被烧的那些年里，有一次，整个世界差一点一起完蛋。1962 年那个秋天，美国和苏联为了古巴的导弹，对峙了十三天，离核战只差一点点。最后没打起来，靠的是白宫里一个总统的克制，和一艘苏联潜艇里一个军官没有按下的按钮。\n\n你看出这中间的荒诞了吗？\n\n那两个把世界推到毁灭边缘的大国，最后在「同归于尽」的恐惧面前,谁也不敢真动手——所以他们小心翼翼地、彼此留着面子地，把对方的导弹撤了回去。他们保住了自己的城市，谁也没少一根头发。\n\n可那场他们不敢直接打的仗，那股能量，没有消失。它被挪到了我这样的地方,挪到了我的村子、我的玉米地、我邻村那些被赶到一起的人身上。\n\n大国之间维持了「和平」。代价，是我们这些地方,替他们打了几十年真刀真枪、死人无数的仗。',
        en: 'I want to show you something I could never see, but you can.\n\nIn those very years my village burned, once, the whole world nearly ended together. In the autumn of 1962, America and the Soviet Union faced off for thirteen days over the missiles in Cuba, one small step from nuclear war. In the end no war came, thanks to one president\'s restraint in the White House, and one button an officer in a Soviet submarine did not press.\n\nDo you see the absurdity in the middle of this?\n\nThose two powers that pushed the world to the edge of ruin, in the end, before the fear of "mutual destruction," neither dared truly strike, so, carefully, each leaving the other a face to save, they pulled their missiles back. They kept their own cities; not a hair on either head was lost.\n\nBut the war they dared not fight directly, that energy, did not vanish. It was moved to places like mine, to my village, my maize field, the people of my neighbor village driven together.\n\nBetween the great powers a "peace" was kept. The price was that places like ours fought, in their stead, decades of real wars with real guns and the dead beyond counting.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 农民看不到但你能看到的事 + 1962 秋古巴危机 13 天离核战一点点 (靠白宫总统克制 + 苏联潜艇军官没按按钮 = 跨 lens 对位 JFK + Arkhipov) + 荒诞: 两大国在同归于尽恐惧前谁也不敢动手/留面子撤导弹保住自己城市没少头发 + 那股不敢直接打的能量没消失被挪到农民的村子玉米地邻村被赶到一起的人身上 + 大国维持「和平」代价是穷国替他们打几十年死人无数的仗',
      engagementHook: '大国之间维持了「和平」，谁也没少一根头发。代价，是我们这些地方替他们打了几十年真刀真枪、死人无数的仗。这样的「和平」，是谁的和平？',
      expectsRealAnswer: false,
    },
    {
      id: 'pwp-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你可能会问：那些大国，难道不知道我们在死人吗？\n\n知道。但在他们的算计里，我们的死，是「可以接受的代价」。\n\n美国担心一个国家「倒向」苏联，会像多米诺骨牌一样带倒一片——所以哪怕一个小国的政府很糟、很残暴，只要它「反共」，就值得撑下去。一场政变、一次镇压、一片烧掉的村子，在华盛顿的地图上,只是一个让局势「稳住」的小代价。\n\n苏联那边，逻辑一样：为了多拉一个国家进自己阵营，也愿意付出别人的命。\n\n他们坐在很远的会议室里，看着地图上的颜色:这块红的（共产主义），那块蓝的（亲美）。颜色变一下，对他们是输赢;对我们，是一个个真实的人没了。\n\n这就是「受影响一方」最深的痛:你不是输家,因为你从来就没被当成一个「玩家」。你只是别人棋盘上,一格颜色而已。',
        en: 'You might ask: did those great powers not know we were dying?\n\nThey knew. But in their reckoning, our deaths were an "acceptable cost."\n\nAmerica feared that one country "falling" to the Soviets would topple a row like dominoes, so even if a small country\'s government was wretched and brutal, as long as it was "anti-communist" it was worth propping up. A coup, a crackdown, a swath of burned villages, on the map in Washington was only a small price to "stabilize" the situation.\n\nOn the Soviet side, the same logic: to pull one more country into its camp, it too was willing to spend others\' lives.\n\nThey sat in conference rooms far away, watching the colors on the map: this patch red (communist), that patch blue (pro-American). A change of color, to them, was winning or losing; to us, it was one real person after another, gone.\n\nThis is the deepest pain of the side on the receiving end: you are not the loser, because you were never counted as a "player." You are only a square of color on someone else\'s board.',
      },
      deliverGoal: 'N7 story — 大国知不知道死人 (知道但我们的死是「可接受的代价」) + 美国怕多米诺 (一国倒向苏联带倒一片/哪怕政府糟残暴只要反共值得撑/政变镇压烧村在华盛顿地图只是稳局势的小代价) + 苏联同逻辑愿付别人命 + 他们看地图颜色 (红共产/蓝亲美/颜色变是输赢 vs 我们一个个真实的人没了) + 受影响方最深的痛: 不是输家是从没被当玩家/只是别人棋盘一格颜色',
      engagementHook: '在他们眼里，地图上颜色变一下是输赢；在我们这里，是一个个真实的人没了。最深的痛是：你不是输家，你从来就没被当成一个「玩家」。被当成「代价」是什么滋味？',
      expectsRealAnswer: false,
    },
    {
      id: 'pwp-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我的故事，没有一个圆满的结尾。大多数像我这样的人,都没有。\n\n仗断断续续打了很多年。我失去了地，也失去了家里的人。后来我带着剩下的家人逃了，去了别处,在陌生的地方,从零开始,做最低贱的活。\n\n我没有名字留下来。我不识字，没人替我写过一个字。等多年以后，那两个大国的较量结束了，历史书开始总结「冷战」——里面有总统的名字，有将军的名字，有那十三天的逐日记录。\n\n没有我。也没有我的村子、我邻村那些被赶到一起的人。\n\n我们这样的人,死了几百万。在很多国家,这种代理战争里死的平民,比两个超级大国自己的士兵加起来还多得多。可我们大多连个数字都算不清,更别说名字。\n\n我替所有没留下名字的人,跟你说一句:「冷战」这两个字,听起来很「冷」，好像没真打过。可在我们这里,它一点都不冷。它是热的,是火,是血。',
        en: 'My story has no happy ending. Most people like me have none.\n\nThe war dragged on, off and on, for many years. I lost my land, and I lost members of my family. Later I fled with those who remained, went elsewhere, and in a strange place started from nothing, doing the lowest work.\n\nI left no name behind. I cannot read; no one ever wrote a word for me. Years later, when the contest of those two powers ended and the history books began to sum up the "Cold War," there were the names of presidents, the names of generals, the day-by-day record of those thirteen days.\n\nNot me. Nor my village, nor the people of my neighbor village driven together.\n\nPeople like us died in the millions. In many countries the civilians who died in these proxy wars far outnumbered the soldiers of the two superpowers combined. Yet most of us cannot even be counted to a clear number, let alone named.\n\nFor all those who left no name, let me say one thing to you: the words "Cold War" sound very "cold," as if no real fighting was done. But here, where we were, it was not cold at all. It was hot. It was fire. It was blood.',
      },
      deliverGoal: 'N8 story — 没有圆满结尾大多数人都没 + 仗打很多年 (失去地失去家人/带剩下家人逃去别处从零做最低贱活) + 没名字留下不识字没人写一个字 + 多年后冷战总结历史书有总统将军名字十三天逐日记录/没有我没有村子邻村被赶到一起的人 + 像我这样死几百万 (很多国家代理战争死的平民比两超级大国士兵加起来多/连数字都算不清更别说名字) + 替没名字的人说: 冷战听起来「冷」好像没真打/在我们这里一点不冷是热的是火是血',
      engagementHook: '「冷战」这两个字听起来很「冷」，好像没真打过。可在我们这里，它是热的，是火，是血。同一段历史，为什么从两个位置看，会差这么远？',
      expectsRealAnswer: false,
    },
    {
      id: 'pwp-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想让你知道，我不是头一个，也不是最后一个，被远方大国的算计碾过去的普通人。\n\n往前看几十年。第一次世界大战的时候，法国从它的非洲殖民地，征召了成千上万的西非人，送到欧洲的战壕里，替宗主国去死——那些人,大多也不懂这仗为了什么。（你跑过一战那段历史，会见到一个塞内加尔士兵。）\n\n再往前，比利时国王把整个刚果当成自己的私产，逼着当地人采橡胶，完不成配额就砍手——又是为了远方人的财富和野心。（你跑过瓜分非洲那段历史，会见到刚果的村民。）\n\n你看出那条线了吗？从殖民时代,到两次大战,到我所在的冷战——换了名字、换了旗号、换了「主义」，可有一件事一直没变:总有一些遥远的、强大的人,在地图上画线、做决定;而总有一些像我这样的人,在地上,用血替他们的决定买单。\n\n旗号年年在变。站在最底下挨打的，永远是同一种人。',
        en: 'I want you to know I was not the first, nor the last, ordinary person driven over by the reckoning of distant powers.\n\nLook back a few decades. In the First World War, France conscripted tens of thousands of West Africans from its African colonies and sent them to the trenches of Europe to die for the mother country, most of them, too, not understanding what the war was for. (Run the First World War topic and you will meet a Senegalese soldier.)\n\nFurther back, the king of Belgium took the whole Congo as his private property and forced the people to gather rubber, cutting off the hands of those who missed their quota, again for the wealth and ambition of faraway men. (Run the Scramble for Africa topic and you will meet the villagers of the Congo.)\n\nDo you see the line? From the age of empire, through two world wars, to my own Cold War, the names changed, the banners changed, the "isms" changed, but one thing never did: there were always some distant, powerful people drawing lines on a map and making decisions; and there were always some people like me, on the ground, paying for their decisions in blood.\n\nThe banners change year by year. The one standing at the very bottom, taking the blows, is always the same kind of person.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 农民不是头一个也非最后一个被远方大国算计碾过的普通人 + 跨 Topic 锚 一战法国征召西非人送战壕替宗主国死 (world-war-one 塞内加尔士兵) + 比利时国王刚果当私产逼采橡胶完不成砍手 (scramble-for-africa 刚果村民) + 那条线 (殖民→两次大战→冷战换名字旗号主义但没变: 远方强者画线做决定/像我的人用血买单) + 旗号年年变/站最底下挨打永远同一种人',
      engagementHook: '从殖民时代到两次大战到冷战，旗号年年在变——可站在最底下挨打的，永远是同一种人。换了名字、换了「主义」，为什么有些事一直没变？',
      expectsRealAnswer: false,
    },
    {
      id: 'pwp-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那两个大国的冷战，1991 年结束了。一边「赢」了。\n\n我想问一句：赢了的人，回头看过我们吗？\n\n冷战结束后，世界上很多人松了一口气，说「核战的阴影散了」。这是真的，是好事。可对我们这些被卷进代理战争的地方，仗结束得没那么干脆。大国一走，留下的是打烂的国家、埋在地里的地雷、回不去的难民、几代人的仇恨。有些地方，到今天还在为当年被点着的那把火付账。\n\n我不是要你恨谁。两个大国里，都有真心怕核战、真心想避免毁灭的人——你在另外两遍里都见过。我也不觉得换一边赢，我的村子就会好过。\n\n我只想求你一件事:以后你读到「冷战」「大国博弈」「国家利益」这些大词的时候,别只看见地图上的颜色和领导人的名字。在每一个被轻描淡写带过的「代价」后面,都站着一个像我一样,有名字、有玉米地、有要吃饭的孩子的人。\n\n请你,记得我们也在那段历史里。',
        en: 'The Cold War of those two powers ended in 1991. One side "won."\n\nLet me ask one thing: did the winners ever look back at us?\n\nAfter the Cold War ended, many in the world breathed a sigh of relief and said "the shadow of nuclear war has lifted." That is true, and a good thing. But for places like ours, swept into the proxy wars, the fighting did not end so cleanly. When the great powers left, what remained was wrecked countries, mines buried in the earth, refugees who could not go home, and the hatred of generations. Some places, to this day, are still paying for the fire that was lit back then.\n\nI do not ask you to hate anyone. In both great powers there were people who truly feared nuclear war, who truly wanted to avoid ruin, you met them in the other two passes. Nor do I think my village would have fared better had the other side won.\n\nI ask you only one thing: when you read the big words "Cold War," "great-power game," "national interest," do not see only the colors on the map and the names of leaders. Behind every "cost" passed over lightly stands a person like me, with a name, a maize field, and children to feed.\n\nPlease, remember that we too were in that history.',
      },
      deliverGoal: 'N10 zoom-out — 冷战 1991 结束一边赢 + 「赢了的人回头看过我们吗」+ 冷战结束很多人松气「核战阴影散了」是真好事 + 但代理战争地方结束没那么干脆 (大国一走留下打烂的国家埋地里的地雷回不去的难民几代仇恨/有些地方至今付账) + 不要你恨谁 (两大国都有真心怕核战的人/另两遍见过/换一边赢村子也不会好过) + 只求一件事: 读「冷战/大国博弈/国家利益」大词时别只看颜色和领导人名字/每个轻描淡写的「代价」后站着有名字有玉米地有要吃饭孩子的人 + 请记得我们也在历史里',
      engagementHook: '请你以后读到「冷战」「国家利益」这些大词的时候，别只看见地图上的颜色和领导人的名字。每一个被轻描淡写带过的「代价」后面，都站着一个有名字、有要吃饭孩子的人。你做得到吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'pwp-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看那场「冷战」，两种说法都站得住。\n\n一种说法：它是人类的一次侥幸。两个大国把世界绑上了核炸弹，最后靠着恐惧和克制，没真按下去，避免了一场毁灭全人类的战争。比起一场打光地球的热战，这种「冷」着对峙、谁也不敢真动手的几十年，已经是不幸中的万幸。从这个角度，1991 年冷战结束，没有蘑菇云，是值得庆幸的结局。\n\n另一种说法：所谓「冷战」，对我们这些人,从来就不冷。两个大国头顶上的「和平」，是用我们脚底下几十年的真枪实弹、几百万条人命换来的。他们维持了不动核武的克制，代价是把战火,整个挪到了我们这些没人替我们说话的地方。对我们,它不是「冷」战,是一场被改了名字、谁也不替我们记账的热战。\n\n这两边不是「好的一面加坏的一面」。是同一段历史,从地图上看,和从地里看,根本是两件事。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at that "Cold War." Both views stand.\n\nOne view: it was a piece of luck for humankind. The two great powers strapped the world to a nuclear bomb, and in the end, through fear and restraint, did not push the button, and a war that would have destroyed all humankind was avoided. Set against a hot war that burned the earth bare, those decades of "cold" standoff, where neither dared truly strike, were a great mercy within misfortune. From this angle, the Cold War ending in 1991 with no mushroom cloud was an outcome to be thankful for.\n\nThe other view: this so-called "Cold War," for people like us, was never cold. The "peace" above the two great powers\' heads was bought with decades of real guns and real fire beneath our feet, and millions of lives. They kept their restraint from using nuclear arms, and the price was that the fighting was moved, entire, into places like ours, where no one spoke for us. For us it was no "cold" war, but a hot war given another name, with no one to keep our ledger.\n\nThese are not "a good side plus a bad side." They are the same history, which, seen from the map, and seen from the ground, are simply two different things.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (人类一次侥幸/两大国绑核炸弹靠恐惧克制没按下去避免毁灭全人类/比热战已是不幸中万幸/1991 结束无蘑菇云值得庆幸) / 另一种说法 (对我们从来不冷/两大国头顶和平用我们脚底几十年真枪实弹几百万命换/他们克制不动核武代价是把战火挪到没人替我们说话的地方/被改名字没人替我们记账的热战) / 同一段历史从地图看和从地里看是两件事 / 想 30 秒',
      engagementHook: '一种说法：冷战是人类的一次侥幸，避免了核毁灭。另一种说法：它对我们从来就不冷，是一场被改了名字的热战。两边都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'pwp-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个没名字的农民,一片烧黑的玉米地,一座从地图上消失的邻村,一段没人替我们记的账——你会怎么评价这样一场「冷战」？\n\n一边，是两个大国惊险地避免了核毁灭，让全人类躲过一劫;另一边,是这「和平」的账,记在了我们这些最没声音的人头上。把这两件事放在同一个天平上,你怎么称?\n\n不过先记住:你这一遍,听的只是一个没名字农民的账。那个在白宫战情室里手边决定能毁掉全世界的约翰·肯尼迪、那个在闷热潜艇里孤身投下反对票拦住核鱼雷的瓦西里·阿尔希波夫,各有各的说法——换个视角再走一遍,你会听见他们怎么讲这同一段历史,也会看看你刚才的判断站不站得住。\n\n再想一步,换到你自己。今天你身边、你的国家、你看的新闻里,有没有人在用「大局」「利益」「为了大家好」这种大词,去解释一个让某些人付出代价的决定——而那些付代价的人,刚好是最没声音、最容易被忽略的那群?\n\n那时候,你会跟着只看「大局」,还是会多问一句:这个「大局」,是谁的大局?这笔账,到底记在了谁头上?你愿不愿意,做那个记得「代价」后面有一个个真人的人?',
        en: 'Having walked my whole life, a peasant with no name, a maize field burned black, a neighbor village vanished from the map, a ledger no one kept for us, how would you judge a "Cold War" like this?\n\nOn one side, two great powers narrowly avoided nuclear ruin and spared all humankind a catastrophe; on the other, the bill for this "peace" was charged to the heads of those of us with the least voice. Put those two on the same scale. How do you weigh it?\n\nBut first, remember: this pass, you heard only a nameless peasant\'s ledger. John F. Kennedy, whose decision in the White House situation room could have destroyed the whole world, and Vasili Arkhipov, who in a stifling submarine cast the lone no vote that held back the nuclear torpedo, each have their own case. Run it again through another lens and you will hear how they tell this same history, and see whether the judgment you just made still holds.\n\nThen take one more step, to yourself. In your own life today, in your country, in the news you watch, is there someone using big words, "the big picture," "interests," "for everyone\'s good," to explain a decision that makes certain people pay a price, and those who pay happen to be the ones with the least voice, the easiest to overlook?\n\nWhen that happens, will you go along seeing only "the big picture," or will you ask one more question: whose big picture is this? On whose head, exactly, is this bill charged? Will you be the one who remembers that behind every "cost" stands a real person, one by one?',
      },
      deliverGoal: 'N12 close — 评价冷战 (没名字农民/烧黑玉米地/从地图消失的邻村/没人记的账 → 两大国惊险避免核毁灭救全人类 vs「和平」的账记在最没声音的人头上/同一天平) + transfer「今天你身边/国家/新闻里有人用大局利益为大家好解释让某些人付代价的决定/付代价的刚好是最没声音的」+ 只看大局 vs 多问一句这是谁的大局账记谁头上 + 愿不愿做记得代价后面有真人的人',
      engagementHook: '一边是全人类躲过核毁灭，一边是「和平」的账记在了我们这些最没声音的人头上。你会怎么评价这样一场冷战？今天当有人用「为了大家好」解释一个让某些人付代价的决定，你会多问一句「这是谁的大局」吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'jfk':                              jfkLens,
  'vasili-arkhipov':                 arkhipovLens,
  'proxy-war-peasant-receiving-end': proxyWarPeasantLens,
};

// per TOPIC_ROADMAP_G6_G12.md B7 + receiving-end 优先 pattern:
// 第三世界代理战争平民 (被两极格局碾过/composite 明标) + N1 gold-standard hook + N6「同一个 13 天三个位置」跨 lens 对位 + N11/N12 侥幸 vs 从不冷 closing
export var defaultLens = 'proxy-war-peasant-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'cold-war-1962',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'long-arc',
  nodesPerLens: 12,
  estimatedMinutesPerLens: { 'jfk': 32, 'vasili-arkhipov': 30, 'proxy-war-peasant-receiving-end': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, long-arc 12-node spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 12 nodes each / cross-lens micro-detail N6: 1962.10 古巴危机同一个 13 天三个位置 (JFK 白宫战情室算封锁/空袭 + Arkhipov 加勒比海面下 B-59 没让核鱼雷射出 + 代理战争农民另一片大陆稻田玉米地不知村子为何被烧)',
    'defaultLens: proxy-war-peasant-receiving-end — 受影响者优先 (第三世界代理战争平民 / composite 明标 / gold-standard N1 hook / N11/N12 侥幸 vs 从不冷)',
    'expectsRealAnswer: ONLY N11 (synthesis) + N12 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: peasant 是 composite (危地马拉玉米/越南稻 合多个真实农民), N1 + N5 用括号短句/不戏剧化标注; JFK/Arkhipov 是真实人物, 暗杀/猪湾/B-59/K-19 均史实',
    '双视角中立 (B7 最敏感): Arkhipov (救世界的是苏联军官) + JFK (理想总统也搞猪湾/暗杀/越南) 双向打破单边正义; 苏联匈牙利 1956/美国反共独裁 并列呈现; 严守 Rule 0 不站队',
    'cultural ban: 全程真实术语 (杜鲁门主义/铁幕/古巴导弹危机/相互确保毁灭 MAD/代理战争/多米诺); 无玉玺/翰林/宰相/朕等中国词',
    'cross-Topic 锚: JFK→world-war-two 原子弹/MAD; Arkhipov→world-war-two Sugihara; 农民→world-war-one 塞内加尔兵 + scramble-for-africa 刚果',
    '日期/数学校验: JFK 1917-1963 (1962 年 45 岁✓ / 遇刺 46 岁✓); Arkhipov 1926-1998 (1962 年 36 岁✓ / 死 72 岁✓); 古巴危机 1962.10.16-28; 冷战 1947-1991; 广岛长崎 1945',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
