// ─── Native Nations of North America (pre-1500 / at contact) Lens-based Storyboard (Story-First v2) ───
//
// Topic: 接触前的北美原住民 · Native Nations of North America before 1500
// CA HSS-5.1 · AP US History Period 1 (1491-1607 / pre-contact North America)
//
// ⚠️ DISTINCT FROM `pre-columbian` Topic:
//   pre-columbian = Mesoamerica + Andes (Inca/Aztec/Maya — Pachacuti / Malintzin / Maya weaver).
//   THIS Topic = NORTH America (Haudenosaunee Confederacy / Mississippian Cahokia /
//   Ancestral Puebloans / Pacific NW / Plains). Zero figure/place/event overlap with pre-columbian.
//
// 3 lens 设计 (per AUTHORING_PIPELINE 第 8/12 条 + receiving-end 优先 pattern):
//   - haudenosaunee-leader  (perpetrator-actor / builder)   — Haudenosaunee 邦联 sachem (酋长) / 大和平法 / 联合 5 (后 6) 国
//   - clan-mother           (lonely-mediator)               — Haudenosaunee Clan Mother (氏族母亲) / 母系制 / 选立与罢免 sachem
//   - contact-survivor      (receiving-end) — DEFAULT        — 接触期幸存的原住民 / 大死亡 (旧世界疾病杀 ~90%) / 「空地神话」
//
// 跨 lens micro-detail (N6 anchor):
//   「谁算数 / who counts」一条线串三个 lens:
//   - sachem N6: 大和平法把战争部落织成一个会议——把「敌人」算成「亲人」
//   - clan-mother N6: 母系制里女人选立 sachem——把女人算成政治权力 (欧洲人看不懂)
//   - contact-survivor N6: 殖民者把已经住满人的大陆算成「空地」——把人算成「无人」
//
// 跨 Topic 锚:
//   - 复杂治理对照 → constitutional-convention-1787 (Iroquois-influence 论争, 标注为 DEBATED 不夸大)
//   - 大死亡/疾病 → pre-columbian (天花先于征服者到达, 但那是 Mesoamerica/Andes; 此处是北美)
//   - 同时代 (§8) = 明朝 (Ming), 对照复杂社会 + 治理, 不做文化对应翻译
//
// defaultLens = 'contact-survivor' (受影响者优先: 被「发现/空地」叙事抹掉的一整块大陆)
//
// SCHEMA (mirror constitutional-convention-1787.js, schemaVersion 2):
//   - 11 nodes per lens (multi-faction); 220-380 CN chars/node; ≤2 anchor 节点可达 ~550
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true; 其余全 false (6 total)
//   - description: { cn, en } bilingual; lens 有 icon + name + nameCn + role
//
// FACTUAL STANCE (anti-fab):
//   - 北美数百个民族, 多个语系, NOT one people. 「原住民」是上百个复杂民族的统称.
//   - Haudenosaunee/Iroquois 邦联: 大和平法 (Great Law of Peace), 建立年代学界有争议 (~1450-1600 区间),
//     5 国 (Mohawk/Oneida/Onondaga/Cayuga/Seneca) + Tuscarora 1722 = 6; 母系制, Clan Mother 选立 sachem.
//   - Iroquois 影响美国宪法的说法是 REAL 学术争论——present as debate, 不夸大.
//   - Mississippian/Cahokia: 大型土丘城 ~1050-1350, 近今 St. Louis, 约 1-2 万人.
//   - Ancestral Puebloans: 西南悬崖居所. Pacific NW: 鲑鱼 + potlatch. Plains: 马是欧洲人带来的 (pre-1492 不同).
//   - 大死亡: 旧世界疾病 (天花/麻疹, 无免疫力) 在很多地区杀死估计高达 ~90%; 殖民者看到的「空地」
//     大多是被疾病清空的, 不是天然无人.
//   - NO 伪造引文; 避免「primitive/savage」也避免「noble savage」. 合成人物用括号短句标注代表性.
//
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Haudenosaunee Sachem (perpetrator-actor / builder)
// ═══════════════════════════════════════════════════════════════════════

export var haudenosauneeLeaderLens = {
  id: 'haudenosaunee-leader',
  name: 'Haudenosaunee Sachem',
  nameCn: 'Haudenosaunee 邦联酋长',
  role: 'perpetrator-actor',
  perspectiveTag: 'confederacy-builder',
  icon: '🪶',
  description: {
    cn: 'Haudenosaunee（中文常按英文译作「易洛魁」）邦联的一位 sachem（推举出来的酋长），住在今天纽约州北部的长屋里。在他之前，这一带五个说同源语言的民族世代互相仇杀。他这一代人接过一套叫「大和平法」的规矩，把五个仇敌织进同一个会议，靠商量而不是流血做决定。他不是世袭的王，是被氏族里的女性长辈选出来、也能被她们撤掉的。这一遍让你从一个建造者的内部，看一套比欧洲人晚来时想象的「野蛮部落」复杂得多的治理，是怎么被一代代人维持下来的。',
    en: 'A sachem (a raised-up chief) of the Haudenosaunee Confederacy, living in a longhouse in what is now upstate New York. Before his time, five peoples in this region who spoke related languages had killed one another for generations. His generation carried forward a body of law called the Great Law of Peace, weaving five enemies into a single council that made decisions by talking rather than by blood. He was not a hereditary king. He was chosen by the senior women of his clan, and they could remove him too. This pass lets you watch, from inside a builder, how a system of government far more intricate than the "savage tribes" Europeans would later imagine was kept alive across generations.',
  },
  storyboard: [
    {
      id: 'hl-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '会议厅里安静下来。烟从中间的火塘升起。\n\n我们五个民族——Mohawk、Oneida、Onondaga、Cayuga、Seneca——的代表，坐成两边，中间隔着火。\n\n你要知道一件事：就在几代人之前，我们这五家是仇敌。一个村子被血洗，活下来的人要去报仇，仇报回来，再报回去——一代杀一代，没完没了。\n\n我是其中一个民族推举出来的 sachem——一个酋长。但我手里没有王的权力。我说话不算数，除非这个会议商量同意。\n\n这一遍，你坐进我这个位置。你看的不是一群「住在森林里的野人」。你看的是一套规矩：怎么让五个世代互杀的民族，放下武器，坐到同一堆火边，靠开口商量而不是动刀，把事情定下来。\n\n几百年后会有欧洲人渡海过来，他们看不懂这套东西。但它一直在这儿，比他们早。',
        en: 'The council house falls quiet. Smoke rises from the central fire.\n\nRepresentatives of our five peoples — Mohawk, Oneida, Onondaga, Cayuga, Seneca — sit on two sides, the fire between us.\n\nYou must understand one thing: only a few generations ago, these five houses were enemies. A village would be soaked in blood, the survivors went to take revenge, the revenge came back, and back again. One generation killing the next, with no end.\n\nI am a sachem, a chief, raised up by one of these peoples. But I hold no king\'s power. My word means nothing unless this council talks it over and agrees.\n\nThis pass puts you in my seat. What you are watching is not a band of "wild men in the forest." It is a system: how to get five peoples who killed one another for generations to lay down their weapons, sit at the same fire, and settle things by opening their mouths instead of drawing knives.\n\nCenturies later, Europeans will cross the ocean. They will not understand this. But it was here, before them.',
      },
      deliverGoal: 'N1 hook — 会议厅火塘 + 五国 (Mohawk/Oneida/Onondaga/Cayuga/Seneca) 曾世代互杀 + sachem 无王权须会议同意 + 这一遍视角 (不是野人是一套治理) + 欧洲人晚来看不懂',
      engagementHook: '五个世代互相仇杀的民族，放下武器坐到同一堆火边商量——你信「仇敌真能变成一个会议里的人」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hl-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我们住在哪、过什么日子，你才懂这套规矩有多不容易。\n\n我们住在今天纽约州北部的林地里，盖一种长屋——一根长屋顶底下住好几户，都是同一个母亲传下来的亲戚。一个村子有好几座长屋，外面围着木栅栏。\n\n我们种「三姐妹」：玉米、豆子、南瓜，种在一起，互相帮衬长。女人管田、管长屋、管收成。男人打猎、打仗、出去开会。\n\n这不是几十个人的小部落。一个邦联底下是好几万人，分成不同的氏族（clan），氏族跨越五个民族——比如「龟氏族」在 Mohawk 有，在 Seneca 也有。\n\n这一点很关键：你的氏族亲人，散在五个民族里。所以「别的民族」从来不是纯粹的外人——里面有你龟氏族的兄弟姐妹。\n\n这套亲属网，后来成了把五个仇敌缝起来的线。',
        en: 'First, where we live and how, so you understand how hard this system was to build.\n\nWe live in the woodlands of what is now upstate New York, in longhouses, several families under one long roof, all kin descended from the same mother. A village holds several longhouses, ringed by a wooden palisade.\n\nWe grow the Three Sisters: corn, beans, and squash, planted together so they help one another grow. Women manage the fields, the longhouse, the harvest. Men hunt, fight, and travel to council.\n\nThis is not a little band of a few dozen people. A confederacy holds tens of thousands, divided into clans, and the clans cross all five peoples. A Turtle clan exists among the Mohawk and among the Seneca alike.\n\nHere is the key: your clan kin are scattered across all five peoples. So "the other people" are never pure strangers. Among them are your Turtle clan brothers and sisters.\n\nThat web of kinship later became the thread that stitched five enemies together.',
      },
      deliverGoal: 'N2 setup — 纽约北部林地 + 长屋 (母系亲属同住) + 三姐妹农业 (玉米/豆/南瓜) + 女人管田长屋收成 + 几万人规模分氏族 + 氏族跨五民族 (龟氏族两族都有) → 亲属网是缝合的线',
      engagementHook: '我的氏族亲人散在五个民族里，所以「别的民族」从来不全是外人。你身边有没有「明明分属不同圈子，却因为血缘或情谊绑在一起」的人？',
      expectsRealAnswer: false,
    },
    {
      id: 'hl-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '这套规矩，叫「大和平法」（Great Law of Peace）。它不是一个人某天写下来的，是一代代人口传下来、记在一种叫 wampum 的贝壳串里的。\n\n它什么时候立的？这一点学界到今天还在争——有的说一千四百多年代，有的往前推，有的往后推，没有定论（我们没有欧洲那种写字的史书，靠的是 wampum 串和长辈记诵）。但规矩本身是真的，一直在用。\n\n传说里，立法的是两个人：一个叫「和平缔造者」（the Peacemaker）的先知，和他的助手 Hiawatha。Hiawatha 自己的家人在仇杀里死光了，是悲痛到极点的人——可正是他，帮着把「以血还血」的循环停下来。\n\n大和平法说什么？简单讲三条：五个民族停止互杀；建一个共同的会议（Grand Council），由各民族推举的 sachem 组成；大事必须商量到所有人都同意（consensus，一致同意），不靠多数压少数。\n\n一个失去全部家人的人，去立一部「不准报仇」的法。这件事你先记住。',
        en: 'This body of law is called the Great Law of Peace. No one person wrote it down one day. It was passed mouth to mouth across generations and recorded in strings of shell beads called wampum.\n\nWhen was it founded? Scholars still argue, some say the 1400s, some push earlier, some later, with no settled answer. We had no written histories of the European kind; we relied on wampum strings and the memory of elders. But the law itself is real, and has been in use ever since.\n\nIn the tradition, two figures founded it: a prophet called the Peacemaker, and his helper Hiawatha. Hiawatha\'s own family had all been killed in the cycle of revenge. He was a man broken by grief, and yet it was he who helped stop the cycle of blood for blood.\n\nWhat does the Great Law say? In short, three things: the five peoples stop killing one another; they build a common council, the Grand Council, made of sachems raised up by each people; and great matters must be talked through until everyone agrees, by consensus, not by the majority overpowering the minority.\n\nA man who had lost his whole family went to found a law that forbids revenge. Hold on to that.',
      },
      deliverGoal: 'N3 setup — Great Law of Peace 口传 + wampum 记录 + 建立年代学界有争议 (~1400s 等无定论) + Peacemaker + Hiawatha (家人在仇杀中死光) + 三条 (停杀/Grand Council/consensus 一致同意) + 失家者立不准报仇之法',
      engagementHook: '一个家人在仇杀里死光的人，去帮着立一部「不准报仇」的法。换作是你，失去一切之后，你会想报仇，还是想让仇恨在你这儿停住？',
      expectsRealAnswer: false,
    },
    {
      id: 'hl-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你是其中一个民族推举出来的 sachem。今天 Grand Council 开会，要议一件大事——也许是要不要跟一个外族开战，也许是怎么分一片新猎场。\n\n你坐在火的一边。规矩是：五个民族不是各投一票了事。要按固定的次序发言，一个民族说完，传给下一个，绕一圈，再绕一圈，直到所有民族都能接受同一个说法。\n\n这慢得要命。一件事议上好几天是常事。\n\n你心里急——你这一族有自己的利益，你想推自己想要的结果。可大和平法压着你：你不能靠人多压人少，不能靠吼，不能拍板了事。你只能说理，等别人被说动，或者你被别人说动。\n\n这一刻你得想：一个不能「快刀斩乱麻」、必须慢慢商量到所有人点头的制度，是软弱，还是另一种强？如果你是这个会议里最急的那个人，你忍得住吗？',
        en: 'Now you are me.\n\nYou are a sachem raised up by one of the peoples. Today the Grand Council meets to weigh a great matter, perhaps whether to go to war with an outside nation, perhaps how to share a new hunting ground.\n\nYou sit on one side of the fire. The rule is this: the five peoples do not simply each cast a vote and be done. They speak in a fixed order, one people finishing and passing to the next, around the circle, and around again, until all can accept the same wording.\n\nIt is maddeningly slow. A single matter taking several days is ordinary.\n\nYou are impatient. Your own people have their interests, and you want to push the outcome you want. But the Great Law presses on you: you cannot overpower the few with the many, cannot shout, cannot simply rule and be done. You can only reason, and wait to be persuaded, or to persuade.\n\nHere you must ask: a system that cannot cut the knot fast, that must talk slowly until everyone nods, is that weakness, or another kind of strength? If you were the most impatient person at this fire, could you hold yourself back?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — Grand Council 议大事 + 固定次序发言绕圈到所有民族能接受 (consensus 慢) + sachem 有本族利益却被大和平法压住 (不能人多压人少/不能吼/只能说理) + 拷问: 慢商量是软弱还是另一种强',
      engagementHook: '一个必须慢慢商量到所有人都点头、不能快刀斩乱麻的制度——你觉得是软弱，还是另一种强？',
      expectsRealAnswer: false,
    },
    {
      id: 'hl-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '会议慢，但不是没有结构。我说给你听它多精巧。\n\n五十个 sachem 的席位，固定分给五个民族，名额不一样多——这不是按人口，是按立法时定下的格局。\n\nOnondaga 这个民族管「火」——会议在他们那儿开，他们当主持，记录用的 wampum 也由他们保管。有点像今天会议的「东道主 + 秘书处」。\n\n议事分两边：一边是 Mohawk 和 Seneca（管军事的「老兄长」一类），另一边是 Oneida 和 Cayuga（「弟弟」一类）。一件事先在一边议，议出说法，递到另一边，另一边同意就过，不同意就退回去重议。Onondaga 最后确认，有时能把僵住的局打破。\n\n你看出来了吗？这不是一群人围一圈瞎吵。这是有分工、有流程、有制衡的设计——一份事要经过好几道，谁也不能一个人说了算。\n\n几百年后，海那边会有人以为「真正的政府」是他们带来的。可这套东西，在他们出现之前，已经在这片林子里运转了很久。',
        en: 'The council is slow, but not without structure. Let me tell you how intricate it is.\n\nFifty sachem seats are fixed among the five peoples, and the numbers differ, not by population, but by the pattern set when the law was founded.\n\nThe Onondaga keep the fire. The council meets among them; they host, and the wampum records are kept in their care. Something like the host and the secretariat of a meeting today.\n\nBusiness moves in two sides: one side the Mohawk and Seneca, the elder-brother sort who carry the military weight; the other side the Oneida and Cayuga, the younger-brother sort. A matter is debated first on one side, a wording reached, then passed to the other side. If they agree, it carries; if not, it goes back to be reworked. The Onondaga confirm it at the last, and can sometimes break a deadlock.\n\nDo you see it? This is not a crowd shouting in a ring. It is a design with a division of labor, a procedure, and checks: a matter passes through several stages, and no one can decide alone.\n\nCenturies later, people across the ocean will think "real government" was the thing they brought. But this had been running in these woods, long before they appeared.',
      },
      deliverGoal: 'N5 story — 治理精巧 (50 sachem 席位固定分五国名额不等非按人口/Onondaga 管火主持保管 wampum/两边制 Mohawk+Seneca vs Oneida+Cayuga 来回议 + Onondaga 确认破僵) + 有分工流程制衡谁也不能独断 + 欧洲人晚来误以为政府是他们带的',
      engagementHook: '固定席位、主持方、两边来回议、谁也不能一个人说了算——这套设计精巧到不像「野蛮部落」。你以前对「原住民政府」的想象，跟这个差多远？',
      expectsRealAnswer: false,
    },
    {
      id: 'hl-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '大和平法最难的一步，不是开会的流程。是把「敌人」重新算成「亲人」。\n\n想想看：你村里有人死在 Seneca 人手上。仇恨是真的。可大和平法要求你做一件几乎反人性的事——不去报仇，而是坐到 Seneca 人对面，把他叫作同一个会议里的兄弟。\n\n怎么做到？靠那张氏族亲属网。\n\n大和平法把五个民族重新编进同一套氏族：龟、熊、狼、鹿、鹰……同一个氏族的人，无论属于哪个民族，都是亲人，不能通婚，要互相收留。「调解」的逻辑是：一个 Seneca 的龟氏族人，和一个 Mohawk 的龟氏族人，是亲戚——你怎么去杀你的亲戚？\n\n这就是这套规矩最深的一手：它不是靠武力把人压服，是重新画了「谁是自己人」这条线。把整片大陆上最难化解的东西——世仇——用一张新的亲属网盖过去。\n\n（这张网怎么从女人手里织出来、女人在里面有多大权力，你换到氏族母亲那一遍，会亲眼看见。）\n\n谁算「自己人」、谁算「外人」——这条线，是这整个邦联的命根子。后来欧洲人来，画的是另一条完全不同的线。',
        en: 'The hardest step of the Great Law is not the procedure of the council. It is recounting an "enemy" as "kin."\n\nThink of it. Someone from your village died at the hands of a Seneca. The hatred is real. Yet the Great Law asks of you a thing that runs almost against human nature: not to take revenge, but to sit across from a Seneca and call him a brother in the same council.\n\nHow is it done? Through that web of clan kinship.\n\nThe Great Law re-sorts the five peoples into shared clans: Turtle, Bear, Wolf, Deer, Hawk. People of the same clan, whatever their people, are kin: they cannot marry, and they must shelter one another. The logic of reconciliation is this: a Seneca of the Turtle clan and a Mohawk of the Turtle clan are relatives. How can you kill your own relative?\n\nThis is the deepest move in the whole system. It does not crush people by force. It redraws the line of "who is one of us." It lays a new web of kinship over the hardest thing on the continent to dissolve, the blood feud.\n\n(How that web was woven from the hands of women, and how much power women held within it, you will see for yourself when you switch to the clan mother\'s pass.)\n\nWho counts as "one of us" and who as "an outsider," that line is the lifeblood of this whole confederacy. Later, the Europeans came and drew a completely different line.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 大和平法最难一步: 把敌人重算成亲人 + 氏族亲属网 (龟/熊/狼/鹿/鹰跨五国同氏族即亲人不能通婚要收留) 化解世仇 + 「谁算自己人」这条线是邦联命根 + 桥到 Clan Mother lens (网由女人织) + 伏笔欧洲人画另一条线',
      engagementHook: '大和平法不靠武力压服，而是重新画了「谁是自己人」这条线——把敌人算成亲人。同一个人，怎么会从「该杀的仇敌」变成「不能杀的亲戚」？',
      expectsRealAnswer: false,
    },
    {
      id: 'hl-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在把镜头从我这片林子，拉远一点。\n\n我得诚实告诉你一件事：「原住民」不是一个民族。我的邦联，只是这片大陆上几百个民族里的一支。\n\n往西南走，在今天 St. Louis 附近，几百年前有过一座叫 Cahokia 的城——他们堆起几十座巨大的土丘，最大一座的底座比埃及一些金字塔还宽，城里住过一两万人，是当时北美最大的聚落。我们盖长屋，他们建土丘城。\n\n再往西南，到今天的沙漠地带，有人把房子直接嵌进悬崖峭壁里，一住几代。\n\n往西北，到太平洋海岸，那里的人靠每年回游的鲑鱼就能富足，富到要办一种叫 potlatch 的大宴——比谁送出去的礼物多，靠「散财」来证明地位。\n\n还有一件今天人常搞错的事：你想象中那种「骑着马在大平原上追野牛的印第安人」——pre-1492 还不存在。马是欧洲人后来带过来的。在那之前，平原上的人是步行打猎的。\n\n几百个民族，几十种语言，几种完全不同的活法。把这么多人说成「一个原始的民族」，是后来才发明出来的故事。',
        en: 'Now pull the lens back from my woods a little.\n\nI have to be honest with you about one thing: "Native people" are not one people. My confederacy is only one among hundreds of peoples on this continent.\n\nGo southwest, near today\'s St. Louis. Centuries ago there stood a city called Cahokia. They raised dozens of huge earthen mounds; the largest had a base wider than some Egyptian pyramids, and the city once held ten or twenty thousand people, the largest settlement in North America of its time. We woodland people build longhouses; they built a city of mounds. Entirely different ways of living.\n\nFarther southwest, in today\'s desert country, people set their houses straight into the faces of cliffs and lived there for generations.\n\nGo northwest, to the Pacific coast. There the people grew wealthy on the salmon that returned each year, wealthy enough to hold a great feast called a potlatch, competing over who could give the most away, proving rank by giving wealth out.\n\nAnd one thing people often get wrong today: the "Indian on horseback chasing buffalo across the great plains" you imagine did not yet exist before 1492. Horses were brought later, by Europeans. Before that, the plains people hunted on foot.\n\nHundreds of peoples, dozens of languages, several entirely different ways of living. Calling all of them "one primitive people" is a story invented later.',
      },
      deliverGoal: 'N7 story — 北美多样性 (NOT one people 数百民族数十语言) + Cahokia 土丘城近 St. Louis ~1-2 万人最大底座比金字塔宽 + 西南悬崖居所 + Pacific NW 鲑鱼 + potlatch 散财证地位 + Plains 马是欧洲带来 pre-1492 步行打猎 + 「一个原始民族」是后来发明的故事',
      engagementHook: '林地长屋、土丘大城、嵌进悬崖的房子、靠鲑鱼办散财大宴——几百个民族几十种语言。把这么多不同的人说成「一个原始民族」，你觉得是误会，还是有人故意？',
      expectsRealAnswer: false,
    },
    {
      id: 'hl-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得说说这套规矩的另一面，免得你把我们想得太完美。\n\n大和平法管的是「内部和平」——把五个民族之间的仇杀停下来。可它没有让我们变成不打仗的人。\n\n对邦联外面的民族，我们照样打。我们的战士打得凶、走得远，把势力扩到很大一片地方。有时候，我们会把打来的俘虏，「收养」进我们的氏族——补上因为打仗、后来还有因为瘟疫而死掉的人口。被收养的人，运气好的能成为真正的家人，运气不好的下场很惨。\n\n所以别误会：我们不是一群「天生爱好和平的好人」（这种想象，跟「野蛮人」一样是假的，只是方向反了）。我们是一群想明白了「内部不能再这么杀下去」的人，立了一套规矩，让自己人之间停手——好把力气一致对外。\n\n和平，在我们这儿，首先是一种力量的组织方式。先在内部团结，才能在外部强大。\n\n这一点，跟海那边那些建国家的人，其实想的是同一件事。',
        en: 'I have to tell you the other side of this system, so you do not imagine us as flawless.\n\nThe Great Law governs an inner peace: it stopped the killing among the five peoples. But it did not turn us into people who do not make war.\n\nAgainst the peoples outside the confederacy, we fought as before. Our warriors fought hard and ranged far, pushing our reach over a wide territory. Sometimes we would adopt captives taken in war into our clans, to make up for the people lost to war, and later to plague. The adopted, if fortunate, could become true family; if not, their fate could be grim.\n\nSo do not mistake us for a band of "naturally peace-loving good people." That picture, like the "savage," is false too, only pointed the other way. We were people who had reasoned out that the killing among ourselves could not go on, and made a law to stay our own hands, so that we could turn our strength outward as one.\n\nPeace, with us, was first of all a way of organizing power. Unite within, and you are strong without.\n\nIn that, we were thinking the same thing as those who built nations across the ocean.',
      },
      deliverGoal: 'N8 story — 大和平法是内部和平不是不打仗 (对外照打/战士打远扩势力/收养俘虏补人口运气好成家人不好很惨) + 反「noble savage」(天生爱和平也是假的方向反了) + 和平首先是组织力量的方式 (内部团结才能对外强大) + 跟海那边建国者想同一件事',
      engagementHook: '我们停止内部仇杀，是为了能一致对外——和平首先是一种组织力量的方式。「先内部团结才能对外强大」，这个道理你觉得是高明，还是有点冷？',
      expectsRealAnswer: false,
    },
    {
      id: 'hl-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在说一件让人吵到今天的事。\n\n几百年后，海那边来的人在费城关起门写一部宪法（你要是跑过「费城制宪」那个 Topic 会认得这件事）。有一种说法是：他们的联邦设计——好几个州联合成一个，既保留各自的权力，又服从一个共同的会议——是从我们 Haudenosaunee 邦联这里学去的。\n\n这件事，我要老实告诉你：这是一个真实的学术争论，两边都有学者，我不能替你下结论，也不该夸大。\n\n一边说：有证据。当年富兰克林这些人确实跟我们打过交道、了解过我们的邦联，1988 年美国国会还正式承认过我们的影响。\n\n另一边说：别夸大。他们的宪法主要来自欧洲自己的思想传统（你跑过的孟德斯鸠那些），把功劳大半归给我们，证据不够硬。\n\n我不替这场争论站队。但有一点是确定的，也是这一遍最想让你记住的：在欧洲人来之前，这片大陆上早就有人在认真琢磨「好几个民族怎么联合起来共同治理」这个难题——而且琢磨出了一套行得通的办法。这件事本身，不需要靠「影响了谁」来证明它了不起。',
        en: 'Now a matter people still argue over today.\n\nCenturies later, people from across the ocean shut a door in Philadelphia and wrote a constitution (run the Constitutional Convention topic and you will know this). One claim is that their federal design, several states joined into one, each keeping its own powers yet answering to a common council, was learned from us, the Haudenosaunee Confederacy.\n\nI have to be honest with you about this: it is a genuine scholarly debate, with scholars on both sides. I cannot settle it for you, and I should not overstate it.\n\nOne side says: there is evidence. Men like Franklin did deal with us and study our confederacy, and in 1988 the U.S. Congress formally acknowledged our influence.\n\nThe other side says: do not overstate it. Their constitution came mainly from Europe\'s own traditions of thought (the Montesquieu you have met), and crediting us with most of it rests on evidence that is not firm enough.\n\nI take no side in that argument. But one thing is certain, and it is what this pass most wants you to keep: before the Europeans came, people on this continent had long been wrestling, in earnest, with the hard problem of how several peoples can join into one shared government, and had worked out a way that functioned. That fact does not need "we influenced someone" to prove it remarkable.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Iroquois-influence 论争 (跨 constitutional-convention Topic) 明确标 DEBATED 不夸大 + 一边 (Franklin 接触/1988 国会承认) vs 另一边 (主要来自欧洲传统/孟德斯鸠/证据不硬) + sachem 不站队 + 关键: 欧洲人来前北美已认真琢磨多民族联合治理且行得通 (不靠影响谁来证明了不起)',
      engagementHook: '「美国宪法是不是学了我们邦联？」——这是真有两边的学术争论，我不替你下结论。但欧洲人来之前我们已经把「多民族联合治理」做成了。一件事了不起，需不需要靠「它影响了谁」来证明？',
      expectsRealAnswer: false,
    },
    {
      id: 'hl-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我们这套东西，两种说法都站得住。\n\n一种说法：我们是了不起的建造者。在没有文字、没有国王、没有警察的条件下，我们把五个世代互杀的民族织进一个会议，靠商量而不是流血做决定，让它运转了几百年。这套治理的精巧和成熟，把「原住民等于原始野人」这个偏见，整个推翻。\n\n另一种说法：别把我们浪漫化。我们的「内部和平」是靠对外打仗、靠收养（有时是强掳）俘虏撑起来的；我们也有自己的等级、自己的暴力、自己排斥的「外人」。我们不是没有污点的「高贵野人」——那同样是别人发明的故事，只是把我们捧高，不是踩低。\n\n这两边不是「优点加缺点」。是同一套设计的两面——能把仇敌缝成亲人的那张网，同时也划定了谁被关在网外。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge this system of ours, both views stand.\n\nOne view: we were remarkable builders. With no writing, no king, no police, we wove five peoples who had killed one another into a single council, made decisions by talking rather than by blood, and kept it running for centuries. The intricacy and maturity of this government overturns, entirely, the prejudice that "Native equals primitive savage."\n\nThe other view: do not romanticize us. Our "inner peace" was held up by war on the outside, and by adopting, sometimes seizing, captives. We had our own ranks, our own violence, our own "outsiders" we shut out. We were not flawless "noble savages." That, too, is a story invented by others, only one that lifts us up instead of pushing us down.\n\nThese are not "strengths and weaknesses." They are two faces of the same design: the web that could stitch enemies into kin also drew the line of who was shut outside it.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (了不起的建造者/无文字无王无警察织五国成会议/推翻原始野人偏见) / 另一种说法 (别浪漫化/内部和平靠对外战与收养掳俘/有等级暴力外人/不是高贵野人) / 同一套设计两面 (缝仇敌成亲人的网也划定谁被关在外) / 想 30 秒',
      engagementHook: '了不起的建造者，和不该被浪漫化的征服者——是同一套制度的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'hl-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价我们建的这套东西？\n\n一套靠商量而不是流血来治国的规矩，在欧洲人到来之前已经在这片林子里运转了很久。它精巧、成熟，足以推翻「原住民是原始野人」的偏见；它也有自己的对外征战、自己排斥的外人。把它放在同一个天平上，你怎么称？\n\n再想一步。你这一遍，听的只是一个建造者——一个站在权力中心、推举出来的酋长的声音。可这张「把敌人缝成亲人」的网，是从氏族里的女人手里织出来的；而几代之后，会有人活着撞上欧洲人到来、看着自己的世界被叫作「空地」。换个视角再走一遍，你会听见他们怎么说，也会看看你刚才的判断还站不站得住。\n\n最后想一件离你近的事：今天你身边，有没有「靠慢慢商量、所有人都点头」做决定的地方——一个社团、一个小组、家里的某次决定？那种慢，那种谁也不能一个人说了算的麻烦——你觉得它值吗？',
        en: 'Having walked my whole life, how would you judge what we built?\n\nA system that governed by talking rather than by blood, running in these woods long before the Europeans came. It was intricate and mature enough to overturn the prejudice that "Native people are primitive savages," and it had its own outward wars, its own outsiders shut out. Put those on the same scale. How do you weigh them?\n\nThen take one more step. This pass, you heard only a builder, the voice of a raised-up chief standing at the center of power. But the web that stitched enemies into kin was woven from the hands of the clan\'s women; and generations later, someone would live to meet the Europeans\' arrival and watch their world be called "empty land." Run it again through another lens, and you will hear how they speak, and see whether the judgment you just made still holds.\n\nLast, think of something close to you: in your own life today, is there somewhere decisions are made by talking slowly until everyone nods, a club, a group, a choice at home? That slowness, that trouble of no one being able to decide alone, do you think it is worth it?',
      },
      deliverGoal: 'N11 close — 评价 (商量治国精巧成熟推翻偏见 vs 对外征战排斥外人同一天平) + 跨视角指针 ①只听了建造者一边 ②clan mother (网由女人织) + contact-survivor (世界被叫空地) 会挑战, 换视角再走 + transfer「今天你身边靠慢商量所有人点头做决定的地方那种慢值不值」',
      engagementHook: '走完我这一生，你会怎么评价我们建的这套东西？你这一遍只听了我一个建造者——女人怎么织这张网、后人怎么撞上「空地」叙事，换个视角才听得见。今天你身边那个「慢慢商量到所有人点头」的地方，那种慢，你觉得值吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Clan Mother (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var clanMotherLens = {
  id: 'clan-mother',
  name: 'Haudenosaunee Clan Mother',
  nameCn: 'Haudenosaunee 氏族母亲',
  role: 'lonely-mediator',
  perspectiveTag: 'matrilineal-kingmaker',
  icon: '🌽',
  description: {
    cn: 'Haudenosaunee 一个氏族里最年长、最有威望的女性，人称 Clan Mother（氏族母亲）。在这个母系社会里，长屋、田地、家族的血脉都从母亲这边传下去。她手里握着一样欧洲人后来怎么都看不懂的权力：那些坐在 Grand Council 里的男性 sachem，是她和族里的女长辈选出来的；他们要是做得不好，也是她把人撤下来。她自己不坐在那张会议桌上，却决定谁能坐上去。这一遍让你从一个「在幕后定人选」的位置，看一个把女性放在政治中心的社会，到底怎么运转。',
    en: 'The eldest and most respected woman of a Haudenosaunee clan, called a Clan Mother. In this matrilineal society, the longhouse, the fields, and the family\'s bloodline all pass down through the mother. She holds a power Europeans would later find impossible to understand: the male sachems who sit in the Grand Council are chosen by her and the senior women of her clan, and if they fail, it is she who removes them. She does not sit at that council table herself, yet she decides who may. This pass lets you watch, from the seat of one who names the leaders from behind, how a society that put women at its political center actually worked.',
  },
  storyboard: [
    {
      id: 'cm-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我手里捏着一串贝壳珠——wampum，蓝白两色，是我这个氏族世代传下来的。\n\n你别小看这串珠子。它是一个名号的凭证。在我们这儿，sachem（酋长）的名号不是某个男人自己的，是属于氏族的——而氏族，由我这样的女人掌管。\n\n我是这个氏族里最年长、说话最有分量的女人，人称 Clan Mother（氏族母亲）。坐在 Grand Council 里的那个 sachem，是我和族里的女长辈一起选出来的。等他做不好了，把他名号收回来的，也是我。\n\n我不坐那张会议桌。可坐上桌的是谁，由我定。\n\n这一遍，你站到我这里。几百年后渡海来的欧洲人，会反复搞不懂一件事：这里的女人，怎么会有这么大的权力？\n\n那是因为他们带着自己那套「女人该在哪儿」的规矩来量我们。可我们这套，跟他们的，根本不是同一套。',
        en: 'In my hand I hold a string of shell beads, wampum, blue and white, passed down in my clan for generations.\n\nDo not underestimate this string. It is the warrant of a name. Among us, a sachem\'s title does not belong to the man himself. It belongs to the clan, and the clan is held by women like me.\n\nI am the eldest woman of this clan, the one whose word carries most weight, called the Clan Mother. The sachem who sits in the Grand Council was chosen by me and the senior women of the clan together. And when he no longer does well, the one who takes his name back is me.\n\nI do not sit at that council table. But who sits there, I decide.\n\nThis pass, you stand where I stand. The Europeans who cross the ocean centuries from now will fail, again and again, to understand one thing: how can the women here hold such power?\n\nIt is because they come measuring us with their own rules about "where a woman belongs." But our system and theirs are not the same system at all.',
      },
      deliverGoal: 'N1 hook — wampum 串是名号凭证 + sachem 名号属氏族非个人 + Clan Mother 自我介绍 (最年长有分量/和女长辈选 sachem/做不好收回名号) + 不坐桌但决定谁坐 + 这一遍视角 + 欧洲人搞不懂女人为何有这么大权力 (拿自己规矩量我们)',
      engagementHook: '我不坐会议桌，可坐上桌的是谁由我定。一个「在幕后定人选」的女人，算不算真正有权力？',
      expectsRealAnswer: false,
    },
    {
      id: 'cm-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我们这套是怎么转的，你才懂我的权力从哪来。\n\n我们是母系社会（matrilineal）。这话的意思是：血脉从母亲这边算。孩子属于母亲的氏族，不属于父亲的。一个男人结了婚，是搬进妻子的长屋，跟妻子娘家的人一起住——不是妻子嫁过来。\n\n长屋是谁的？是女人的。田是谁种、谁分收成？是女人。粮仓的钥匙，握在女人手里。一个男人打猎、打仗、出去开会，可他回到的那个家，那块地，那仓粮——都不属于他，属于这边的女人。\n\n所以我的权力不是「皇帝赏的」，是这套结构本来就长这样：经济在女人手里，血脉在女人手里。男人去前台说话，女人在这套结构的根上。\n\n你可能会问：那男人岂不是很没地位？不是。是分工不同。男人有男人的位置，女人有女人的位置，两边互相需要，谁也吃不掉谁。\n\n这套平衡，是欧洲人来之前，我们已经过了很多代的日子。',
        en: 'First, how our system turns, so you understand where my power comes from.\n\nWe are matrilineal. That means the bloodline is counted through the mother. A child belongs to the mother\'s clan, not the father\'s. When a man marries, he moves into his wife\'s longhouse and lives with her mother\'s people. The wife does not marry out to him.\n\nWhose is the longhouse? The women\'s. Who farms the fields and shares out the harvest? The women. The key to the granary is in women\'s hands. A man hunts, fights, travels to council, but the home he returns to, the land, the stored grain, none of it is his. It belongs to the women of this side.\n\nSo my power is not "granted by an emperor." It is simply how the structure is built: the economy in women\'s hands, the bloodline in women\'s hands. Men go to the front to speak; women are at the root of the structure.\n\nYou might ask: does that leave men with no standing? No. It is a different division. Men have their place, women have theirs, each side needs the other, and neither can swallow the other.\n\nThis balance was the life we had lived for many generations before the Europeans came.',
      },
      deliverGoal: 'N2 setup — 母系社会 (血脉从母算/孩子属母氏族/男人婚后搬进妻方长屋) + 长屋田收成粮仓钥匙都在女人手 + 权力来自结构 (经济血脉在女人/男人前台女人在根) + 不是男人没地位是分工不同两边互需谁也吃不掉谁 + 欧洲人来前过了很多代的平衡',
      engagementHook: '在我们这儿，男人结婚是搬进妻子家，长屋、田、粮仓都是女人的。这套「男女分工互需」跟你熟悉的安排，差在哪？',
      expectsRealAnswer: false,
    },
    {
      id: 'cm-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我选 sachem，不是随便指一个人。这是一门要看一辈子的功夫。\n\n名号是固定的——每个属于我们氏族的 sachem 名号，都有它的历史，前面戴过这个名号的人是谁，大家都记得。我要做的，是从族里的男人里，挑一个配得上这个名号的，把它「立」到他头上。\n\n我怎么挑？我看的不是谁能打、谁嗓门大。大和平法早就讲明白了一个 sachem 该是什么样：他的脸皮要有「七层厚」——不是脸皮厚不要脸，是说他被人骂、被人激，要忍得住，不能一冲动就误了全族的事。\n\n他还得不贪、不记私仇、肯为族人受累。最重要的一条：做决定时，眼光要放到「往后第七代」——你今天定的事，会落到你重孙的重孙身上。\n\n我从小看着族里的男孩长大，谁沉得住气、谁顾全大局、谁一点小事就炸——我心里有数。\n\n选错一个 sachem，整个邦联会跟着遭殃。所以我看人，是慢功夫，是一辈子的功夫。',
        en: 'When I choose a sachem, I do not simply point at a man. It is a craft you watch a lifetime to learn.\n\nThe titles are fixed. Every sachem name belonging to our clan has its history, and everyone remembers who wore it before. What I do is pick, from the men of the clan, one worthy of the name, and raise it onto him.\n\nHow do I choose? Not by who fights best or shouts loudest. The Great Law long ago made plain what a sachem should be: his skin must be "seven thumbs thick," not shameless, but able to endure being cursed and provoked without letting a flash of temper ruin the whole people\'s affairs.\n\nHe must also be free of greed, free of private grudges, and willing to wear himself out for his people. And the most important rule: in deciding, his eyes must reach to "the seventh generation to come." What you settle today falls on the great-grandchild of your great-grandchild.\n\nI have watched the boys of the clan grow since they were small. Who keeps his composure, who holds the whole in view, who blows up over a trifle, I keep a count.\n\nChoose the wrong sachem and the whole confederacy suffers for it. So my reading of people is slow work, the work of a lifetime.',
      },
      deliverGoal: 'N3 setup — 选 sachem 不随便 (名号固定有历史/从族中男人挑配得上的立上去) + 标准 (大和平法定: 脸皮七层厚=被激能忍/不贪/不记私仇/肯受累/最重要眼光到第七代) + Clan Mother 从小看男孩长大心里有数 + 选错整邦联遭殃所以是一辈子的功夫',
      engagementHook: '我选酋长，看的不是谁能打、谁嗓门大，而是谁忍得住激、谁能想到「往后第七代」。如果让你选一个领头的，你会看他什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'cm-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你立上去的那个 sachem，最近不对劲了。他在 Grand Council 上越来越听不进别人的话，开始为自己捞好处，有一次还差点因为一时火气，把和别族谈好的事搅黄。\n\n族里的女人来找你了。她们看在眼里。她们看着你——这是你的事，因为名号是你立的。\n\n你心里清楚：动他，不是小事。他是你看着长大的，他背后有他这一房的人。把名号收回来，会得罪一批人，会让族里好一阵子不安生。\n\n可你也清楚：你立他，不是为了他，是为了全族。一个开始为自己、压不住火的 sachem，会把整个邦联往坑里带。\n\n大和平法给了你一道明确的程序：先警告，再警告，第三次还不改，才正式「拔掉他头上的鹿角」——收回名号，换人。\n\n这一刻你得想：这个会得罪人、会让你睡不好的决定，你下不下得了手？把一个你亲手扶起来、却变了的人请下去——这是冷酷，还是真正的负责？',
        en: 'Now you are me.\n\nThe sachem you raised up has lately gone wrong. In the Grand Council he listens less and less, he has begun to grab benefits for himself, and once he nearly wrecked a settled agreement with another people in a flash of temper.\n\nThe women of the clan come to you. They have seen it. They look to you, because this is your affair: you raised the name.\n\nYou know it well: to move him is no small thing. You watched him grow; behind him stands his household. Taking the name back will offend a set of people and unsettle the clan for a good while.\n\nBut you also know: you raised him not for his sake but for the whole people. A sachem who begins serving himself and cannot hold his temper will lead the whole confederacy into a pit.\n\nThe Great Law gives you a clear procedure: warn him once, warn him twice, and if by the third time he has not changed, then formally "remove the antlers from his head," take the name back, and replace him.\n\nHere you must ask: this decision that will offend people and cost you sleep, can you bring yourself to make it? To ask down a man you raised with your own hands, now changed, is that coldness, or true responsibility?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 立的 sachem 变质 (听不进/为己捞/一时火气差点搅黄别族协议) + 族里女人来找你 (名号你立的是你的事) + 动他得罪人不安生 vs 为全族不能让他带坑 + 大和平法程序 (警告两次第三次拔鹿角收名号) + 拷问: 请下亲手扶起的人是冷酷还是真负责',
      engagementHook: '你亲手扶起来的酋长变了——把他请下去会得罪一批人、让你睡不好。这一刀，你下不下得了手？这是冷酷，还是真正的负责？',
      expectsRealAnswer: false,
    },
    {
      id: 'cm-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我的权力，最难的地方在于：它是「在桌子底下」的。\n\n我不在 Grand Council 上发言——那是 sachem 的位置。我的影响力，靠的是会议之前、会议之外的那些时刻。\n\n大事议之前，sachem 要回到长屋，听族里的女人怎么说。我们围着火，把这件事翻来覆去地讲：这样定，对我们这一房有什么后果？对下面几代有什么后果？他该在会上怎么开口，哪些话不能说？\n\n等他坐到会议上，他带去的不只是他自己的想法，是我们这一屋子人嚼过的想法。\n\n这就是「lonely」的地方：我做的事最关键，可它不在前台。功劳记在 sachem 的名号上，史书（如果有史书的话）写的是他的名字。我在他背后，没有名字。\n\n但我从不觉得这是委屈。前台和后台，是一套机器的两半。少了我这半，他在台上说的话，是空的。\n\n真正的影响力，不一定要坐在最显眼的位置上。有时候，决定谁坐那个位置、在他开口之前替他想清楚的人，才是那根定盘的轴。',
        en: 'The hardest thing about my power is that it works "under the table."\n\nI do not speak in the Grand Council; that is the sachem\'s place. My influence rests on the moments before the council and outside it.\n\nBefore a great matter is debated, the sachem returns to the longhouse to hear what the women of the clan say. We sit around the fire and turn the thing over and over: settle it this way, and what falls on our household? What falls on the generations below? How should he open his mouth in council, and which words must he not say?\n\nWhen he takes his seat, he carries not only his own thinking but the thinking this whole room has chewed over.\n\nThis is the lonely part: what I do is most decisive, yet it is not at the front. The credit is recorded on the sachem\'s name; the histories, if there are any, write his name. I am behind him, with no name.\n\nBut I never felt this as a grievance. Front and back are two halves of one machine. Without my half, the words he speaks on the stage are hollow.\n\nReal influence need not sit in the most visible seat. Sometimes the one who decides who sits there, and thinks it through for him before he speaks, is the axle the whole thing turns on.',
      },
      deliverGoal: 'N5 story (lonely-mediator core) — Clan Mother 权力在桌子底下 (不在 Council 发言/影响力在会前会外) + sachem 议前回长屋听女人/围火翻讲对本房对几代后果该怎么开口 + 带去全屋嚼过的想法 + lonely (最关键却不在前台/功劳记 sachem 名号/她无名) + 不委屈 (前后台两半少了她台上的话是空的) + 真影响力不必坐最显眼位置',
      engagementHook: '我做的事最关键，可功劳记在 sachem 的名号上，史书写的是他的名字，我在他背后没有名字。一个「最关键却没有名字」的人，你觉得她亏吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'cm-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在说一件你必须看清的事：同一件东西，在不同的人眼里，会被算成完全相反的样子。\n\n在我们这套规矩里，我是政治的根：选立酋长、掌田掌粮、传血脉。我是「算数」的，而且算得很重。\n\n可几百年后，渡海来的欧洲人，带着他们自己那套规矩来量我们。在他们老家，女人不能拥有土地，不能选官，不能罢免谁。所以当他们看见我这样的女人手里握着这些权力，他们的第一反应不是「原来还能这样」，而是「这不对，这不文明」。\n\n他们看不懂，于是他们就当它不存在。他们跟我们打交道，只肯跟 sachem 谈，绕过我们这些真正定人选的女人。在他们写的记录里，我们常常是隐形的。\n\n你看出来了吗？这是同一条线的两个用法。我们用一套规矩，把女人算进政治的中心；他们用另一套规矩，把女人从政治里整个划掉——连看见都不肯看见。\n\n（这条「谁算数、谁被划掉」的线，到了那个活着撞上欧洲人到来的人那一遍，会变成最痛的东西——他们会把整片住满人的大陆，算成「空地」。）',
        en: 'Now a thing you must see clearly: the same thing, in different eyes, can be counted as its exact opposite.\n\nIn our system I am the root of politics: I raise up the chiefs, I hold the fields and the grain, I carry the bloodline. I count, and I count heavily.\n\nBut centuries later, the Europeans cross the ocean and come measuring us by their own rules. In their homeland a woman cannot own land, cannot choose an official, cannot remove anyone. So when they see a woman like me holding these powers, their first reaction is not "so it can be done this way," but "this is wrong, this is uncivilized."\n\nThey could not understand it, so they treated it as if it did not exist. In dealing with us they would speak only to the sachem, going around the women who actually name the leaders. In the records they wrote, we are often invisible.\n\nDo you see it? This is one line used two ways. By our rules, women are counted into the very center of politics; by theirs, women are struck out of politics entirely, not even allowed to be seen.\n\n(This line of who counts and who is struck out becomes the most painful thing of all in the pass of the one who lived to meet the Europeans\' arrival. They would count an entire continent full of people as "empty land.")',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 同一东西不同眼里算成相反 + Clan Mother 是政治的根算得很重 vs 欧洲人拿自己规矩量 (老家女人不能拥地选官罢免→看见女人有权当成不文明) + 看不懂就当不存在 (只跟 sachem 谈绕过女人/记录里隐形) + 「谁算数谁被划掉」一条线两用法 + 桥到 contact-survivor (把住满人的大陆算成空地)',
      engagementHook: '我们用一套规矩把女人算进政治中心，欧洲人用另一套规矩把女人从政治里整个划掉——连看见都不肯。同样是女人，怎么会被算成两个完全相反的样子？',
      expectsRealAnswer: false,
    },
    {
      id: 'cm-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得说一句实话，免得你把我想成一个无所不能的女王。\n\n我的权力很大，但它是有边界的，也是被规矩框住的。\n\n我能选 sachem，能罢免他，可我不能代替他坐到 Grand Council 上去发言——前台是男人的位置，这一条我也得守。我能在长屋里、在会前定调子，可一旦事情上了会议桌，怎么谈、谈成什么样，是 sachem 在场上的本事，我管不到那一步。\n\n而且我也不是一个人说了算。我是 Clan Mother，可一个氏族里有好几位有威望的女长辈，大事要我们一起商量。我也受族人盯着——我要是选人选得糊涂、办事不公，我的话也会慢慢不再有人听。\n\n所以别误会：我们这套，不是「女人统治男人」，也不是「男人统治女人」。是两边各管一摊、互相牵制、谁也不能独大——跟那个把五个民族互相牵制起来的大和平法，是同一个道理。\n\n一个把权力拆开、不让任何一方独吞的社会。这件事本身，就够让晚来的人吃惊很久了。',
        en: 'Let me say one honest thing, so you do not picture me as an all-powerful queen.\n\nMy power is large, but it has its edges, and it too is framed by the law.\n\nI can choose a sachem and remove him, but I cannot take his place and speak in the Grand Council. The front is the men\'s place, and that rule binds me too. I can set the tone in the longhouse before the council, but once a matter reaches the table, how it is argued and what it becomes is the sachem\'s skill on the floor, beyond my reach.\n\nNor do I decide alone. I am a Clan Mother, but a clan has several respected senior women, and great matters we weigh together. I am watched by my people too: if I choose foolishly or act unfairly, my word will slowly stop being heeded.\n\nSo do not mistake it: our system is not "women rule men," nor "men rule women." It is each side keeping its own domain, checking the other, neither able to dominate, the same principle as the Great Law that set the five peoples to check one another.\n\nA society that split power apart and let no single side swallow it whole. That fact alone was enough to astonish the latecomers for a long time.',
      },
      deliverGoal: 'N7 story — Clan Mother 权力有边界被规矩框 (能选罢免 sachem 但不能代他坐 Council 发言/能会前定调但上桌怎么谈是 sachem 本事) + 不是一人说了算 (多位女长辈共商/受族人盯选糊涂办不公话就没人听) + 不是女统男也非男统女是两边各管互相牵制谁也不独大 (同大和平法道理) + 拆权不让独吞够让晚来者吃惊',
      engagementHook: '我能选酋长、罢免酋长，却不能代他上会议发言——我的权力也是被规矩框住的。一个「谁也不能独大、各管一摊」的社会，跟「一个人说了算」比，你觉得哪个更稳？',
      expectsRealAnswer: false,
    },
    {
      id: 'cm-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这一辈子做的事，大多没有名字留下来。\n\n我们没有欧洲那种写字的史书。我们的历史，记在 wampum 串里，记在长辈一代代的记诵里，记在选立 sachem 的仪式里。一个 Clan Mother 把名号立给谁、为什么把谁拔掉、在火塘边替全族想清楚过多少回——这些不会被某个史官写下来。\n\n所以后来翻历史的人，很容易得出一个错的结论：这里的女人没什么地位，因为「记录里看不见她们」。\n\n可你想想：记录里看不见，是因为她们真的不重要，还是因为写记录的人——大多是后来的欧洲男人——压根不觉得一个有权力的原住民女人值得写？\n\n这是一个会反复出现的陷阱：历史里能听见声音的人，往往不是最重要的人，而是恰好被记下来的人。在我身后，有一长串像我一样的女人——撑起整个社会的根，却几乎没在任何人写的字里留下一笔。\n\n你以后读到「某某社会里女人没有地位」的时候，记得多问一句：是真没有，还是写字的人没看见、不肯写？',
        en: 'Most of what I did in my life left no name behind.\n\nWe had no written histories of the European kind. Our history lives in wampum strings, in the recitations of elders generation after generation, in the ceremony of raising a sachem. To whom a Clan Mother gave a name, why she pulled another down, how many times she thought a matter through for the whole people at the fire, none of this was set down by any official historian.\n\nSo those who later turned the pages of history easily reached a false conclusion: the women here had little standing, because "you cannot see them in the records."\n\nBut think: not seeing them in the records, is it because they truly did not matter, or because the ones who wrote the records, mostly later European men, simply did not think a Native woman with power was worth writing down?\n\nThis is a trap that keeps returning: the people whose voices we can still hear in history are often not the most important, but the ones who happened to be written down. Behind me stands a long line of women like me, the root that held a whole society up, and almost none left a single line in anyone\'s writing.\n\nWhen you later read that "women had no standing in such-and-such a society," remember to ask one more question: was it truly so, or did the one holding the pen not see it, and not care to write it?',
      },
      deliverGoal: 'N8 story — Clan Mother 做的事大多无名留下 (无写字史书/历史在 wampum+记诵+立 sachem 仪式) + 后人易得错结论 (记录看不见=没地位) + 反问真不重要还是写记录的欧洲男人不觉值得写 + 「能听见声音的是恰好被记下的人不是最重要的人」+ 身后一长串撑社会根却无一笔的女人 + 读到「女人没地位」要多问一句',
      engagementHook: '后人翻历史说「这里女人没地位」，因为记录里看不见。可看不见，是真不重要，还是写字的人不觉得一个有权的原住民女人值得写？这两种，差得有多远？',
      expectsRealAnswer: false,
    },
    {
      id: 'cm-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这一遍快走完了，说一件长出我这片林子之外的事。\n\n把女人放在社会中心的，不只我们一家。这片大陆上几百个民族，活法各不相同——你跑过这个 Topic 的建造者那一遍，会记得：有靠鲑鱼办散财大宴的，有把房子嵌进悬崖的，有堆起巨大土丘建城的。它们之间，男女的安排也各不相同。\n\n把这么多不同的社会，笼统说成「原住民都怎样怎样」，本身就是个错。我们不是一个民族，自然也没有一套「原住民的男女关系」。\n\n而几百年后，渡海来的人会带来一套统一的标尺，去量我们所有人：用他们的「文明」标准，把我们这套母系的、拆权的、靠商量的安排，统统判成「落后」「不开化」。\n\n他们没看懂的，不是某一个细节。是他们打心底不相信：原来人可以用这么多种不同的、而且都行得通的方式，把一个社会组织起来。\n\n这件事，我希望你换到下一遍、听那个亲历接触的人说完之后，再回头想一想。',
        en: 'My pass is nearly done. Let me say one thing that grows beyond my woods.\n\nWe are not the only ones who put women at the center of a society. The hundreds of peoples on this continent lived in ways all their own. Run the builder\'s pass of this topic and you will remember: some grew wealthy on salmon and held great giving-feasts, some set their houses into cliffs, some raised huge mounds and built cities. Among them, the arrangements between men and women also differed.\n\nTo lump so many different societies into "Native people were all like this" is itself an error. We were not one people, and so there was no single "Native way between men and women."\n\nAnd centuries later, those who crossed the ocean would bring one uniform measuring stick for us all. By their standard of "civilization," they judged our matrilineal, power-splitting, talking-it-through arrangements all alike as "backward," "unenlightened."\n\nWhat they failed to grasp was not some single detail. It was that, in their hearts, they could not believe a society could be organized in so many different ways, all of which worked.\n\nThis is something I hope you will turn over again after you switch to the next pass and hear out the one who lived through the contact.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 把女人放中心不只一家 (回指 builder lens 多样性: Pacific NW 鲑鱼散财/悬崖屋/Cahokia 土丘城/各民族男女安排不同) + 「原住民都怎样」是错 (非一个民族无单一男女关系) + 欧洲人带统一标尺判母系/拆权/商量为落后 + 没看懂的是不信人能用这么多种都行得通的方式组织社会 + 留给 contact-survivor 那一遍再想',
      engagementHook: '几百个民族活法各不相同，连男女的安排都不一样——可晚来的人带来一把统一的尺，把我们全判成「落后」。他们没看懂的，其实是「人能有这么多种都行得通的活法」。你信这件事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'cm-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我这样一个人，两种说法都站得住。\n\n一种说法：我手里握着实打实的权力。我选立酋长、罢免酋长，掌着田、掌着粮、传着血脉。一个把女人放在政治根上的社会，在欧洲人来之前已经稳稳运转了很多代——这一点，把「原住民女人没地位」「女人天生该靠边」这些偏见，全都打翻。\n\n另一种说法：别把它讲成一个「女权乌托邦」。我的权力是被规矩框死的——我不能上会议桌，不能一个人说了算，我也是这套结构里的一个零件，不是它的主人。把我们这套讲成「完美的男女平等」，跟把它讲成「女人没地位」，犯的是同一个毛病：用一个简单的标签，盖掉一套复杂的、有它自己的边界和张力的真实安排。\n\n这两边不是「有权加没权」。是同一套结构的两面——它既把女人放到了中心，也给每一个人(包括我)都画了不能越过的线。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge a person like me, both views stand.\n\nOne view: I held real, solid power. I raised up chiefs and removed them, I held the fields, the grain, the bloodline. A society that placed women at the root of politics ran steadily for many generations before the Europeans came, and that overturns, entirely, the prejudices that "Native women had no standing" and "women belong off to the side."\n\nThe other view: do not tell it as a "feminist utopia." My power was framed tight by the law: I could not take the council table, could not decide alone, I too was one part in this structure, not its master. To tell our system as "perfect equality between the sexes," and to tell it as "women had no standing," commit the same fault: using one simple label to paper over a complex, real arrangement with its own edges and tensions.\n\nThese are not "power and no power." They are two faces of one structure: it placed women at the center, and it also drew, for everyone including me, a line not to be crossed.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (握实权选立罢免酋长掌田粮血脉/女人在政治根上稳运转多代/打翻「原住民女人没地位」偏见) / 另一种说法 (别讲成女权乌托邦/权力被规矩框死不能上桌不能独断是零件非主人/「完美平等」与「没地位」同毛病: 简单标签盖复杂真实) / 同一套结构两面 (放女人到中心也给每人画线) / 想 30 秒',
      engagementHook: '握着实权的女人，和被规矩框死的零件——是同一个我。「女权乌托邦」和「女人没地位」犯的是同一个错。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'cm-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一串传家的 wampum，一双看人看了一辈子的眼睛，一个不坐会议桌却决定谁坐上去的位置——你会怎么评价这样一个女人，和她身处的这套安排？\n\n一个把女人放在政治根上、又给每个人都框了边界的社会。你会说它是被偏见埋掉的了不起，还是被后人浪漫化的复杂真实？你怎么评？\n\n再想一步。你这一遍，听的只是一个站在权力幕后、把这套规矩当成天经地义的女人。可那个在前台坐着的酋长，对「谁建了这一切」有他自己的说法；而几代之后，会有人活着看着这整套规矩、这整片大陆，被外来者一笔判成「落后」「空地」。换个视角再走一遍，你会听见很不一样的声音。\n\n最后想一件离你近的事：今天你身边，有没有那种「真正出力、真正定调，却没被记上名字」的人——某个总在背后张罗的同学、家里那个不声不响把一切撑住的人？下次，你会不会记得，去看见 TA?',
        en: 'Having walked my whole life, a wampum strung down through the family, a pair of eyes that read people for a lifetime, a seat that does not sit at the council table yet decides who does, how would you judge a woman like me, and the arrangement she lived inside?\n\nA society that set women at the root of politics and also drew a boundary for everyone. Would you call it a remarkable thing buried by prejudice, or a complex truth romanticized by later hands? How do you judge it?\n\nThen take one more step. This pass, you heard only a woman who stood behind power and took these rules as the way things simply are. But the sachem seated at the front has his own account of "who built all this," and generations on, someone will live to watch this whole system, this whole continent, judged in a single stroke by outsiders as "backward," as "empty." Run it again through another lens, and you will hear very different voices.\n\nLast, think of something close to you: in your own life today, is there someone who truly does the work and sets the tone, yet whose name is never recorded, a classmate always arranging things from behind, the quiet one at home who holds everything up? Next time, will you remember to see them?',
      },
      deliverGoal: 'N11 close — 评价 (女人在政治根+给每人框边界 → 被偏见埋的了不起 vs 被后人浪漫化的复杂真实) + 跨视角指针 ①只听了幕后女人一边把规矩当天经地义 ②sachem (谁建这一切有自己说法) + contact-survivor (整套规矩整片大陆被判落后/空地) 会挑战, 换视角再走 + transfer「今天身边真正出力定调却没被记名的人下次会不会去看见 TA」',
      engagementHook: '走完我这一生，你会怎么评价这样一个不坐会议桌却决定谁坐上去的女人？这一遍只听了我幕后一边——酋长和后来撞上「空地」叙事的人会很不一样。今天你身边那个「真正出力、真正定调，却没被记上名字」的人，下次你会去看见 TA 吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Contact Survivor (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var contactSurvivorLens = {
  id: 'contact-survivor',
  name: 'Contact Survivor',
  nameCn: '接触期的幸存者',
  role: 'receiving-end',
  perspectiveTag: 'great-dying-witness',
  icon: '🌾',
  description: {
    cn: '一个虚构但有代表性的北美原住民，活在欧洲人初到这片大陆的那几代人里（这个人物是把许多真实经历合在一起的代表，不是某一个有名有姓的史料人物）。他记得村子还满是人的样子，也亲眼看着一场看不见的瘟疫，把身边十个人里夺走将近九个——这是「大死亡」，旧世界带来的天花、麻疹，原住民从没接触过、毫无免疫力。等后来的殖民者大批到来时，看见的是被清空的村庄、长满草的田，于是他们讲了一个故事：这是一片「空地」，等着被发现。这一遍，你站在那片地本来住满了人的人这边，看「空」这个字是怎么被写出来的。',
    en: 'A fictional but representative Native person of North America, living through the first generations of the Europeans\' arrival (this character gathers many real experiences into one representative figure, not a single named person from the records). He remembers the village when it was full of people, and he watched an unseen sickness take nearly nine of every ten around him. This was the great dying: smallpox and measles brought from the Old World, which Native people had never met and had no immunity against. When the colonists later came in numbers, they saw emptied villages and fields gone to grass, and so they told a story: this was "empty land," waiting to be discovered. This pass, you stand with the people whose land was full, and watch how the word "empty" came to be written.',
  },
  storyboard: [
    {
      id: 'cs-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我记得我们村子满是人的样子。\n\n（先跟你说清楚：我不是史书里某个有名有姓的人。我是把那几代人里，许许多多真实经历，合到一个人身上的代表——这样你才能贴着一个人，走进一件大到没法贴着任何一个人讲的事。）\n\n我小时候，村里长屋一座挨一座，火塘的烟从早到晚不断。田里是玉米、豆子、南瓜，孩子在田埂上跑。集会的时候，人多到坐不下。\n\n然后，有一年，来了一种我们从没见过的病。\n\n它不挑人。最壮的猎手，最有经验的长辈，怀里的婴儿，一个接一个倒下，浑身起疱、发高烧。没有人知道这是什么，没有人知道怎么治。\n\n等它过去，我们村十个人里，走了将近九个。\n\n这一遍，你站到我这里。后来会有外来的人渡海过来，看着我们这片地，说它是「空的」，等着被发现。\n\n可它不是空的。它是被清空的。这中间差的那个字，是这一遍最想让你看清的东西。',
        en: 'I remember our village when it was full of people.\n\n(Let me be clear with you first: I am not a named person from the histories. I am a figure who gathers the many real experiences of those generations into one, so that you can stand close to a single person and walk into a thing too large to tell through any single person.)\n\nWhen I was small, the longhouses stood one against the next, and the smoke of the hearths rose from morning to night. The fields held corn, beans, and squash, and children ran along the rows. When we gathered, there were more people than there were places to sit.\n\nThen, one year, a sickness came that we had never seen.\n\nIt picked no one out. The strongest hunter, the most seasoned elder, the infant at the breast, fell one after another, their bodies broken out in blisters, burning with fever. No one knew what it was. No one knew how to heal it.\n\nWhen it passed, of every ten people in our village, nearly nine were gone.\n\nThis pass, you stand where I stand. Later, people will cross the ocean, look at this land of ours, and call it "empty," waiting to be discovered.\n\nBut it was not empty. It was emptied. The word that differs between those two is the thing this pass most wants you to see.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 记得村满是人 + anti-fab 括号短句 (不是史书有名有姓的人/把许多真实经历合到一人的代表) + 长屋火塘三姐妹田孩子集会人多 + 一年来从没见过的病不挑人 (壮猎手/长辈/婴儿倒下起疱高烧无人知治) + 十人走近九 + 这一遍视角 + 外来者说「空的等被发现」+ 不是空是被清空 (差那个字)',
      engagementHook: '后来的人说我们这片地是「空的」，等着被发现。可它不是空的，是被清空的——「空」和「被清空」，差的是哪个字？',
      expectsRealAnswer: false,
    },
    {
      id: 'cs-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说清楚，那场病为什么那么狠。\n\n这种病——后来的人叫它天花、麻疹——是从旧世界（欧洲、亚洲、非洲连成的那一大块）来的。那边的人，几千年来跟这些病、跟牛羊猪这些家畜挤在一起过，得过、活下来的人身上有了一点抵抗力，一代代传下去。\n\n可我们这片大陆，跟那边隔着大洋，隔了上万年。我们从没碰过这些病，身体里一点准备都没有。\n\n这就是为什么它在我们这儿，比在那边狠太多。在欧洲，得天花的孩子很多能挺过去；在我们这儿，它见谁倒谁——因为我们每一个人，对它都是全新的、毫无防备的身体。\n\n这一点你要记牢，因为它常被讲错：我们大批死去，不是因为我们弱、我们脏、我们不如人。是因为一个谁也想不到的原因——我们这片大陆，太久没跟那些病打过照面了。\n\n这不是「天意」，也不是「我们活该」。这是两块隔绝了上万年的大陆，第一次撞在一起时，落在我们身上的那一半代价。',
        en: 'First, let me make clear why that sickness was so merciless.\n\nThis disease, what later people call smallpox and measles, came from the Old World, that great joined mass of Europe, Asia, and Africa. The people there had lived for thousands of years pressed in among these diseases and among cattle, sheep, and pigs. Those who caught them and survived carried a little resistance, passed down generation to generation.\n\nBut our continent lay across a great ocean, cut off for tens of thousands of years. We had never met these diseases. Our bodies held not the slightest preparation.\n\nThat is why, among us, it was so much more merciless than over there. In Europe many children with smallpox could pull through; among us, it felled whomever it met, because every one of us was a body wholly new to it and wholly unguarded.\n\nKeep this firmly, because it is often told wrong: we died in great numbers not because we were weak, or dirty, or lesser. It was for a reason no one could have foreseen: our continent had simply gone too long without crossing paths with those diseases.\n\nThis was not "the will of heaven," nor "what we deserved." It was the half of the cost that fell on us when two continents, sundered for tens of thousands of years, struck against each other for the first time.',
      },
      deliverGoal: 'N2 setup — 病为何那么狠 (天花/麻疹来自旧世界欧亚非/那边几千年与病和家畜共处有抵抗力传代) + 北美隔大洋上万年从没碰过身体无准备 + 在欧洲孩子能挺过在这儿见谁倒谁 (全新无防备身体) + 反偏见 (不是因为弱/脏/不如人) + 不是天意不是活该是两块隔绝大陆首次相撞落在我们身上的一半代价',
      engagementHook: '我们大批死去，不是因为弱、脏、不如人，是因为这片大陆太久没跟那些病打过照面。「死这么多人」这件事，你以前以为原因是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'cs-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我想让你看清，「九个人里走了将近九个」到底是什么样子。数字太干净了，它盖住了真正发生的事。\n\n病来的时候，不是排着队来的。是几天之内，半个村子同时病倒。\n\n谁来照顾病人？健康的人。可健康的人一个个也病倒了。到后来，没有人能去打水，没有人能去煮饭，没有人能去给发烧的人擦身——因为该去做这些事的人，自己也躺下了。\n\n很多人不是直接死于那个病。是死于「没有人能照顾了」——渴死的，饿死的，烧到没人管的。一场病，把整个互相照应的网，一下子撕烂了。\n\n田里的玉米熟了，没有人去收。冬天来了，没有存够粮。活下来的人，往往是一个家里最后剩下的那一两个。\n\n（这些是那几代人反复经历的真实景象——我把它们合在一个村子里讲给你听。）\n\n你现在懂了吗？「人口减少了百分之九十」这句话，不是一个统计数字。它是一座座空掉的长屋，一片片没人收的田，和无数个在自己村子里，突然成了几乎唯一活人的人。',
        en: 'I want you to see clearly what "nearly nine of every ten gone" actually looked like. The number is too clean; it covers over what truly happened.\n\nWhen the sickness came, it did not come in an orderly line. Within a few days, half the village fell ill at once.\n\nWho cares for the sick? The healthy. But the healthy fell ill one by one too. In the end no one could fetch water, no one could cook, no one could wipe down those burning with fever, because the ones who should have done these things were lying down themselves.\n\nMany did not die of the sickness directly. They died of "no one left to care for them," of thirst, of hunger, of fever with no one to tend it. One sickness tore the whole web of mutual care apart in a single stroke.\n\nThe corn ripened in the fields with no one to harvest it. Winter came with not enough grain stored. Those who survived were often the last one or two left in a household.\n\n(These are real scenes those generations lived through again and again; I gather them into one village to tell you.)\n\nDo you understand now? "The population fell by ninety percent" is not a statistic. It is longhouse after longhouse gone empty, field after field left unharvested, and countless people who, inside their own village, became almost the only one still alive.',
      },
      deliverGoal: 'N3 setup — 「走近九」到底什么样 (数字太干净盖住真相) + 病几天内半村同时倒 + 照顾者也倒下 (没人打水煮饭擦身) + 很多人死于「没人照顾」(渴饿烧没人管) 互相照应网撕烂 + 玉米熟没人收冬天没存粮 + 活下的常是一家最后一两个 + anti-fab 括号短句 (真实景象合一村) + 「减少 90%」不是统计是空长屋没人收的田和突然成几乎唯一活人的人',
      engagementHook: '很多人不是死于那个病，是死于「没有人能照顾了」——照顾的人自己也倒下了。「人口减少 90%」这句话，跟你刚刚看见的景象，是同一件事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'cs-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n病过去了。你活了下来。你站在村子中间——长屋空了大半，火塘冷了，你认识的人，十个里没了将近九个。\n\n你脑子里全是想不通的问题。为什么是他们死、是你活？为什么最强壮的人先倒、你这个普通人反而留下？神去哪了？祖先去哪了？那些祖祖辈辈传下来、教我们怎么过日子的规矩，怎么一夜之间，连一个能听懂这些规矩的人都快没有了？\n\n这不只是亲人没了。是一整个世界，连同它的意义，一起塌了。\n\n你现在得做一个几乎不可能的决定：剩下的这一两个人，怎么活下去？是凑到隔壁同样残破的村子去，几家拼成一家？是投靠一个还算完整的邦联，把自己整族「并」进去？还是守在这片埋着祖先的空地上，撑一天是一天？\n\n而且你心里隐约知道：海那边来的人，还会再来。这场病，可能只是开头。\n\n这一刻，你怎么选？活下去这件事，在一个塌掉的世界里，到底还算不算「活」？',
        en: 'Now you are me.\n\nThe sickness has passed. You survived. You stand in the middle of the village. More than half the longhouses are empty, the hearths are cold, and of the people you knew, nearly nine of every ten are gone.\n\nYour head is full of questions you cannot work out. Why did they die and you live? Why did the strongest fall first, while you, an ordinary person, were left? Where did the spirits go? Where did the ancestors go? The rules handed down through all the generations, that taught us how to live, how is it that overnight there is barely anyone left who can even understand them?\n\nThis is not only that your kin are gone. It is that a whole world, and its meaning with it, has caved in together.\n\nNow you must make an almost impossible decision: how do the one or two of you who remain go on living? Do you gather to the next village, just as broken, and make one household from several? Do you take shelter with a confederacy still more or less whole, and fold your whole people into it? Or do you hold to this emptied land where the ancestors are buried, and last one more day at a time?\n\nAnd you half-know it already: the people from across the ocean will come again. This sickness may be only the beginning.\n\nHere, how do you choose? To go on living, in a world that has caved in, does it even still count as "living"?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 病过去你活下来站村中 (长屋空大半火塘冷十人没近九) + 想不通的问题 (为何他们死你活/最强先倒/神祖先去哪/规矩没人能听懂) + 不只亲人没了是整个世界连意义塌了 + 几乎不可能的决定 (凑隔壁村/并进完整邦联/守空地撑一天) + 隐约知道海那边人还会再来病只是开头 + 拷问: 塌掉世界里活下去算不算活',
      engagementHook: '病过去了，你活了下来，可你认识的人十个没了近九个，整个世界连同它的意义一起塌了。在一个塌掉的世界里活下去——这还算不算「活」？这一步，你怎么走？',
      expectsRealAnswer: false,
    },
    {
      id: 'cs-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我活下来了，可活下来的世界，跟以前不一样了。\n\n你得明白一件事：病传得，比那些带病的人本身快得多。\n\n很多村子，在还没亲眼见过一个外来人之前，就先被病掏空了。病顺着我们原本就有的路走——我们各民族之间，本来就有贸易、有走亲戚、有来往的路。这些路平时运的是玉米、是贝壳、是消息；这一次，它们运的是死亡。\n\n所以等后来的殖民者大批走进内陆时，他们看见的，已经是一片被掏空过的土地了。空了的村，长满草的田，森林重新爬回曾经的耕地。\n\n他们没看见之前的样子。他们不知道几十年前这里有多少人、多热闹。他们看见「空」，就以为这里「本来」就空。\n\n这是一个致命的误会，而且这个误会，对他们太方便了——一片「本来就空」的地，拿走它就不算抢；可一片「住满了人、被掏空了」的地，拿走它，就是另一回事了。\n\n你看，「空」这个字，是怎么一点点，从一个错觉，变成一个可以心安理得的理由的。',
        en: 'I survived, but the world I survived into was not the same.\n\nYou must grasp one thing: the sickness traveled far faster than the people who carried it.\n\nMany villages were hollowed out by the disease before they ever laid eyes on a single outsider. It moved along the paths we already had, the routes of trade, of visiting kin, of coming and going among our peoples. In ordinary times those paths carried corn, shell beads, news. This time they carried death.\n\nSo when the colonists later walked into the interior in numbers, what they saw was already a hollowed-out land. Emptied villages, fields gone to grass, forest creeping back over what had once been planted ground.\n\nThey did not see what it had been before. They did not know how many people, how much life, had been here a few decades earlier. They saw "empty," and assumed it had "always" been empty.\n\nThis was a fatal mistake, and the mistake was far too convenient for them. A land "always empty" can be taken without it counting as theft. But a land "full of people, then hollowed out," to take that is another matter entirely.\n\nYou see how the word "empty" came, bit by bit, from an illusion to a reason a person could live with easily.',
      },
      deliverGoal: 'N5 story — 病传得比带病人快 + 很多村没见过外来人就被掏空 + 病顺原有的路走 (民族间贸易走亲来往的路平时运玉米贝壳消息这次运死亡) + 殖民者大批入内陆看见已是掏空的地 (空村长草田森林爬回耕地) + 没看见之前看见空就以为本来空 + 致命误会且太方便 (本来空=拿走不算抢/住满被掏空=另一回事) + 「空」字从错觉变成心安理得的理由',
      engagementHook: '病顺着我们贸易走亲的路走，跑在带病的人前头——很多村子还没见过外来人就空了。等殖民者看见「空」，就以为本来就空。这个误会，为什么对他们「太方便」？',
      expectsRealAnswer: false,
    },
    {
      id: 'cs-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在说这一遍最核心的一件事：同一片土地，怎么被算成两种完全相反的东西。\n\n在我这边，这片地满是「谁算数」的痕迹。每一座空掉的长屋，曾住着一个氏族的人。每一片长草的田，是我母亲、我祖母弯着腰种过的。每一座山，埋着我们的祖先——在我们的活法里，祖先没有走，他们还在这片地里。这片地，每一寸都属于某些人。\n\n可在他们那边——后来渡海来的人那边——这片地被算成「无主」「荒野」「空地」「等待被发现」。他们看不见死掉的人，看不见埋着的祖先，看不见这片地上原本密密麻麻的「谁算数」。他们看见的，是一张可以重新画的白纸。\n\n你换到这个 Topic 的另外两遍，会看见同一条线的另一头：那位建造者，靠「谁算亲人、谁算外人」把五个民族缝起来；那位氏族母亲，被欧洲人从政治里「划掉」。\n\n现在轮到最狠的一刀：把整整一片住满了人、又被疾病掏空的大陆，整个算成「无人」。\n\n「谁算数」——从把敌人算成亲人，到把女人划出政治，再到把一整个民族的存在，从一片土地上抹掉。同一个问题，一路走到了它最黑的地方。',
        en: 'Now the very heart of this pass: how the same land came to be counted as two opposite things.\n\nOn my side, this land is full of the marks of "who counts." Every emptied longhouse once held the people of a clan. Every grass-grown field was bent over and planted by my mother, my grandmother. Every hill holds our ancestors, and in our way of living the ancestors have not left; they are still in this land. Every inch of this land belongs to someone, to some people.\n\nBut on their side, the side of those who crossed the ocean, this land was counted as "unowned," "wilderness," "empty," "waiting to be discovered." They did not see the dead, did not see the buried ancestors, did not see the dense marks of "who counts" that had covered this land. What they saw was a blank page that could be drawn on anew.\n\nSwitch to the other two passes of this topic and you will see the other end of the same line: the builder, who stitched five peoples together by "who counts as kin and who as outsider"; the clan mother, struck out of politics by the Europeans according to their own rules.\n\nNow comes the most merciless stroke of all: to count an entire continent, full of people and then hollowed out by disease, wholly as "no one."\n\n"Who counts," from counting an enemy as kin, to striking women out of politics, to erasing the very existence of whole peoples from a land. The same question, walked all the way to its darkest place.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 同一片土地算成两种相反东西 + 我这边满是「谁算数」痕迹 (每座空长屋住过氏族/每片长草田母亲祖母种过/每座山埋祖先且祖先还在地里/每寸属于某人) vs 他们那边算成无主/荒野/空地/待发现 (看不见死者祖先看见可重画白纸) + 回指 builder (谁算亲人外人缝五国) + clan mother (被划出政治) + 最狠一刀: 整片住满又被掏空的大陆算成无人 + 「谁算数」从敌人变亲人→女人划出政治→抹掉整族存在走到最黑',
      engagementHook: '同一片地，在我这边每一寸都埋着人、属于人；在他们那边却是一张「等待被发现的白纸」。从「把敌人算成亲人」到「把一整个民族抹成无人」——「谁算数」这个问题，怎么一路走到了最黑的地方？',
      expectsRealAnswer: false,
    },
    {
      id: 'cs-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得拦你一下，免得你走到另一个极端。\n\n听完我说的，你可能会想：那原住民就是一群只会等死的可怜人吧？\n\n不是。这一点请你记牢。\n\n世界塌了之后，我们没有躺平。我们重组。残破的村子拼成新的村子。有些民族重新结盟，组成更大的邦联来自保。有些人学会了用外来人带来的东西——金属的刀和锅，后来还有枪——反过来为自己所用。还有些民族，在贸易、在外交、在打仗里，跟那些外来人周旋了几百年，一步都不肯轻易让。\n\n我们一直在做选择，一直在反抗，一直在适应。我们不是历史里一动不动、等着被写进结局的背景板。\n\n所以请你避开两个一样错的故事：一个是「野蛮人挡了文明的路，被淘汰是必然」;另一个是「可怜的好人，纯粹的受害者，除了被毁什么都没做」。\n\n两个故事都把我们写成了「不会自己做主」的人。可真实的我们，在一个一次次塌下来的世界里，一次次地，自己做主，自己往下走。\n\n受害，和有力量，在我们身上，从来是同时存在的。',
        en: 'I have to stop you here, so you do not swing to the other extreme.\n\nHearing what I have said, you might think: so Native people were a pitiful lot who only waited to die?\n\nNo. Hold on to this.\n\nAfter the world caved in, we did not lie down. We regrouped. Broken villages were pieced into new villages. Some peoples allied anew, forming larger confederacies to defend themselves. Some learned to use what the outsiders brought, metal knives and pots, and later guns, and turned them to their own ends. Some peoples maneuvered with those outsiders, in trade, in diplomacy, in war, for centuries, yielding not a step lightly.\n\nWe were always choosing, always resisting, always adapting. We were not a motionless backdrop in history, waiting to be written into an ending.\n\nSo avoid two stories, equally wrong: one, that "savages stood in the way of civilization and were bound to be swept aside"; the other, that we were "pitiful good people, pure victims, who did nothing but be destroyed."\n\nBoth stories write us as people who "cannot decide for themselves." But the real us, in a world that caved in again and again, again and again decided for ourselves and went on.\n\nVictimhood and strength, in us, were never anything but present at the same time.',
      },
      deliverGoal: 'N7 story — 拦学生别走极端 (别以为原住民只会等死的可怜人) + 世界塌后没躺平: 重组 (残村拼新村/重新结盟组更大邦联自保/学用金属刀锅后来枪反为己用/贸易外交打仗周旋几百年不轻易让) + 一直在选择反抗适应不是背景板 + 避开两个一样错的故事 (野蛮人挡文明被淘汰必然 / 纯粹受害者啥都没做) 都写成不会自己做主 + 受害与有力量在我们身上同时存在',
      engagementHook: '听完我说的，你可能想「那原住民就是一群只会等死的可怜人」——不是。「野蛮人被淘汰是必然」和「纯粹的受害者啥都没做」，这两个故事错在同一个地方。错在哪？',
      expectsRealAnswer: false,
    },
    {
      id: 'cs-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想说说那些没留下名字的人——因为他们才是大多数。\n\n你想想：一场病，把一个村子十个人夺走近九个。那走掉的近九个里，绝大多数，没有名字传下来。不是因为他们不重要，是因为记着他们名字的人，跟他们一起没了。\n\n我们没有欧洲那种写字的史书。我们的记忆，本来是活在长辈嘴里、活在仪式里、活在一代教一代的。可当一个村子近九成的人在几年里死光，那条「一代教一代」的链子，断了。会讲我们故事的人没了，故事也就跟着没了。\n\n所以后来翻历史的人，常常只能从外来人留下的记录里看我们——而那些记录，是看着「空地」写的，是从「发现新大陆」那一头写的。\n\n我活下来了，我的话你能听见。可在我身后，是成千上万、几十万、上百万个，连一句话、一个名字都没能留下的人。\n\n请你记住这件事：历史里能被听见的，往往是侥幸活下来、又恰好被记下来的那极少数。最大的那一片沉默，是听不见的——可它真实地、巨大地，发生过。',
        en: 'I want to speak of those who left no name, because they are the great majority.\n\nThink of it: a sickness takes nearly nine of every ten in a village. Of those nearly nine who went, the vast majority left no name behind, not because they did not matter, but because the ones who held their names went with them.\n\nWe had no written histories of the European kind. Our memory lived in the mouths of elders, in ceremony, in one generation teaching the next. But when nearly nine in ten of a village die within a few years, that chain of one generation teaching the next breaks. The ones who could have told our stories were gone, and the stories went with them.\n\nSo those who later turned the pages of history could often see us only through the records the outsiders left, and those records were written looking at "empty land," written from the "discovery of a new world" end.\n\nI survived, and my words you can hear. But behind me are tens of thousands, hundreds of thousands, millions, who could not leave a single word, a single name.\n\nRemember this: the ones who can be heard in history are usually the very few who happened to survive and happened to be written down. The largest silence of all cannot be heard, and yet it really, hugely, happened.',
      },
      deliverGoal: 'N8 story — 没留名的人是大多数 + 病夺村中近九走掉的绝大多数无名 (不是不重要是记名字的人一起没了) + 无写字史书记忆活在长辈嘴/仪式/一代教一代 + 近九成几年死光「一代教一代」链断 (会讲故事的人没了故事跟着没) + 后人只能从外来人记录看我们 (看着空地写从发现新大陆那头写) + 我活下你能听见但身后几十万上百万无一句一名 + 「能被听见的是侥幸活又恰被记下的极少数最大沉默听不见却巨大真实发生」',
      engagementHook: '走掉的那近九成里，绝大多数没有名字传下来——不是因为不重要，是因为记着他们名字的人，跟他们一起没了。一片「听不见的沉默」，我们该怎么对待它？',
      expectsRealAnswer: false,
    },
    {
      id: 'cs-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这一遍快走完了。把镜头拉到很远，你才看得清这件事有多大。\n\n这不是我一个村子的事，也不是某一个民族的事。从今天的加拿大，到今天的美国，再往南，旧世界带来的疾病，在一两个世纪里，一波一波扫过整片大陆。很多估算说，某些地区死掉的人，高达十之八九。这是人类历史上最大规模的人口崩塌之一。\n\n而它发生得太「安静」了——没有一场惊天动地的大战，没有谁挥刀。一个看不见的东西，顺着我们自己的路，把一个住满了人的世界，几乎清空。\n\n然后，在这片被清空的土地上，长出了一个故事：「这是一片空旷的、等待被开拓的新大陆。」这个故事，后来被写进了很多很多人的课本里，讲了几百年。\n\n这一遍最想交到你手上的，就是这件事：当你以后听到「发现新大陆」「开拓荒野」这种说法时，请你多停一秒，问一句——\n\n在「发现」之前，那里真的没有人吗？那片「荒野」，是天生就荒，还是被什么，清空成了荒？\n\n一个被讲了几百年的故事，不一定是真的。有时候，最大的真相，藏在那个故事没有讲的人身上。',
        en: 'My pass is nearly done. Pull the lens far back, and only then can you see how large this was.\n\nThis was not the affair of my one village, nor of any single people. From today\'s Canada, through today\'s United States, and farther south, the diseases the Old World brought swept across the whole continent in wave after wave over a century or two. Many estimates say that in some regions the dead ran as high as eight or nine in ten. This was one of the greatest collapses of population in all human history.\n\nAnd it happened so "quietly," with no earth-shaking great war, no one\'s blade raised. An unseen thing, moving along our own paths, all but emptied a world full of people.\n\nThen, on this emptied land, a story grew: "This is an open new continent, waiting to be settled." That story was later written into very, very many people\'s textbooks, and told for centuries.\n\nWhat this pass most wants to put into your hands is just this: when you later hear "the discovery of a new world," "the settling of the wilderness," pause one more second and ask:\n\nBefore the "discovery," was there truly no one there? Was that "wilderness" wild by nature, or emptied into wildness by something?\n\nA story told for centuries is not necessarily true. Sometimes the largest truth is hidden in the people the story leaves out.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 拉远看多大 (不是一村一族/从加拿大到美国往南旧世界疾病一两世纪一波波扫整片大陆/某些地区死十之八九/人类史最大人口崩塌之一) + 发生太安静 (无大战无人挥刀/看不见的东西顺自己的路清空住满人的世界) + 被清空土地上长出故事「空旷待开拓新大陆」写进课本讲几百年 + 交到手上: 听到「发现新大陆/开拓荒野」多停一秒问 (发现前真没人吗/荒野天生荒还是被清空成荒) + 讲几百年的故事不一定真最大真相藏在故事没讲的人身上',
      engagementHook: '一个被讲了几百年、写进课本的故事——「发现新大陆」「开拓荒野」——不一定是真的。下次听到它，请多停一秒问：在「发现」之前，那里真的没有人吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'cs-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看「这是一片等待被发现的空地」这个故事，两种说法都站得住。\n\n一种说法：这个故事是一个谎，而且是一个方便的谎。这片大陆从来不空，它住满了几百个民族、上千万的人。它之所以看起来「空」，是因为一场旧世界带来的、原住民毫无防备的瘟疫，先把它掏空了。把「被掏空」说成「天生空」，把抢占说成「发现」——这是用一个字，抹掉了上千万人的存在。\n\n另一种说法：也别把所有事都算成一场有预谋的阴谋。那场瘟疫，在当时，没有任何人懂——病毒、免疫力这些，几百年后人类才弄明白。最初带病过来的人，自己也不知道身上带着什么。「大死亡」首先是一场谁也想不到、谁也挡不住的生物灾难。可「空地」这个故事是后来人讲的——灾难不是阴谋，但用灾难的结果去编一个心安理得的故事，是人做的选择。\n\n这两边不是「谁对谁错」。是同一件事的两层：一层是谁也挡不住的灾难，一层是人在灾难之后，选择怎么讲它。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at the story that "this was empty land waiting to be discovered." Both views stand.\n\nOne view: the story is a lie, and a convenient one. This continent was never empty. It was full of hundreds of peoples, tens of millions of people. The reason it looked "empty" is that a plague brought from the Old World, against which Native people had no guard, hollowed it out first. To call "hollowed out" "empty by nature," to call seizing "discovery," that is using one word to erase the existence of tens of millions.\n\nThe other view: do not reckon all of it as a planned conspiracy either. That plague, at the time, no one understood. Viruses, immunity, these humans only worked out centuries later. The ones who first carried the disease across did not know what they bore. The great dying was first of all a biological catastrophe no one foresaw and no one could stop. But the "empty land" story was told by later people. The catastrophe was not a conspiracy, yet using the catastrophe\'s result to build a story one can live with easily is a choice people made.\n\nThese are not "who is right and who is wrong." They are two layers of one thing: one layer a catastrophe no one could stop, one layer how people, after the catastrophe, chose to tell it.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (空地故事是方便的谎/大陆从不空住满几百民族上千万人/看起来空是瘟疫先掏空/把被掏空说成天生空把抢占说成发现=一个字抹掉上千万人) / 另一种说法 (别全算成预谋阴谋/瘟疫当时无人懂病毒免疫几百年后才明白/带病者也不知带啥/大死亡首先是谁也挡不住的生物灾难/但空地故事是后人讲的: 灾难非阴谋但用灾难结果编心安理得的故事是人的选择) / 两层 (挡不住的灾难 + 灾难后选择怎么讲) / 想 30 秒',
      engagementHook: '一种说法：「空地」是一个方便的谎。另一种说法：大死亡首先是谁也挡不住的生物灾难，但「怎么讲它」是人的选择。两边都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'cs-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个记得村子满是人、看着身边十个走了近九个、又在塌掉的世界里选择往下走的人——你会怎么评价「这是一片等待被发现的空地」这个故事？\n\n一片从来住满了人、被一场谁也挡不住的瘟疫掏空、又被一个讲了几百年的故事抹成「空」的大陆。你会说它是谎，还是说它至少有一半是谁也无法预见的灾难？你怎么评？\n\n不过先记住：你这一遍，听的只是被那个故事挡在门外、被算成「无人」的人。这个 Topic 还有另外两个声音：把五个民族织成一个会议的建造者，在母系社会里选立酋长、却被欧洲人「划掉」的氏族母亲。换个视角再走一遍，你会从权力中心、从社会根部，看见这同一片大陆完全不同的样子，也会回头看看你刚才的判断还站不站得住。\n\n最后想一件离你近的事：今天你身边，有没有那种「被讲成空、其实满是东西」的地方——一段被说成「没什么人住」的老街区，一群被说成「没什么想法」的人？\n\n那时候，你会跟着现成的故事走，还是会像我希望你做的那样：多停一秒，问一句——「空」这个字底下，到底有没有人？',
        en: 'Having walked my whole life, one who remembers the village full of people, one who watched nearly nine of every ten around him go, one who, in a caved-in world, chose to go on, how would you judge a story like "this was empty land waiting to be discovered"?\n\nA continent that was always full of people, hollowed out by a plague no one could stop, then erased into "empty" by a story told for centuries. Would you call that story a lie, or say at least half of it was a catastrophe no one could foresee? How do you judge it?\n\nBut first, remember: this pass, you heard only the one shut out by that story, the one counted as "no one." This topic has two more voices: the builder who wove five peoples into a single council, and the clan mother who raised up chiefs in a matrilineal society and was "struck out" by the Europeans. Run it again through another lens, and from the center of power, from the root of the society, you will see this same continent look entirely different, and you will look back to see whether the judgment you just made still holds.\n\nLast, think of something close to you: in your own life today, is there somewhere told as "empty" that is in fact full, an old neighborhood said to have "hardly anyone living there," a group of people said to have "no real ideas," a corner said to be one "nobody cares about anyway"?\n\nWhen that happens, will you go along with the ready-made story, or will you do what I hope you will: pause one more second, and ask, under the word "empty," is there really no one?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价「空地」故事 (从来住满被谁也挡不住的瘟疫掏空又被讲几百年的故事抹成空 → 谎 vs 至少一半是无法预见的灾难) + 跨视角指针 ①只听了被算成无人的一边 ②builder (织五国会议) + clan mother (母系选立酋长被划掉) 会从权力中心/社会根部挑战, 换视角再走 + transfer「今天身边被讲成空其实满是东西的地方 (老街区/被说没想法的人/没人在乎的角落) 会跟现成故事走还是多停一秒问空字底下有没有人」',
      engagementHook: '走完我这一生，你会怎么评价「这是一片等待被发现的空地」这个故事？这一遍只听了被算成「无人」的我——建造者和氏族母亲会让你看见完全不同的大陆。今天你身边那个「被讲成空、其实满是东西」的地方，你会跟着现成的故事走，还是多停一秒，问一句：「空」字底下，到底有没有人？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'haudenosaunee-leader': haudenosauneeLeaderLens,
  'clan-mother':          clanMotherLens,
  'contact-survivor':     contactSurvivorLens,
};

// per receiving-end 优先 pattern:
// 被「发现/空地」叙事抹掉的一整块大陆 + N6「谁算数 / who counts」跨 lens 对位 + N10/N11 谎 vs 灾难 closing
export var defaultLens = 'contact-survivor';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'native-americans-pre1500',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'haudenosaunee-leader': 30, 'clan-mother': 28, 'contact-survivor': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-25',
  notes: [
    'NORTH America (distinct from pre-columbian = Mesoamerica/Andes). Spine on Haudenosaunee Confederacy + §2 broader diversity (Cahokia/Pueblo/Pacific NW/Plains) + receiving-end carries great dying + empty-land myth.',
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「谁算数 / who counts」一条线 (sachem 把敌人算成亲人 / clan mother 把女人算成政治权力欧洲人划掉 / contact-survivor 把住满人的大陆算成空地)',
    'defaultLens: contact-survivor — 受影响者优先 (被「发现/空地」叙事抹掉一整块大陆 + gold-standard N1 hook + N10/N11 谎 vs 灾难)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: contact-survivor 是合成代表人物 (括号短句标注/不是史料有名有姓的人); great-dying ~90% 是估算; Great Law 建立年代标 DEBATED',
    'Iroquois-influence on US Constitution 明确标为 DEBATED 学术争论 (一边 Franklin/1988 国会承认 vs 另一边主要来自欧洲传统证据不硬), 不夸大',
    '避免 primitive/savage 也避免 noble savage (sachem N8/N10 + contact-survivor N7 显式反两极); Plains 马是欧洲带来 pre-1492 步行 (builder N7)',
    'cross-Topic 锚: 复杂治理→constitutional-convention (Iroquois debate); 同时代 §8 = 明朝 Ming (narrative); 大死亡机制对照 pre-columbian (但此处北美)',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
