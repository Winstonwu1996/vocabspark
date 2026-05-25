// ─── Roman Empire at Its Peak 117 CE Lens-based Storyboard (Story-First v2) ───
//
// Topic: 罗马帝国的巅峰 · The Roman Empire at Its Height (Pax Romana · Trajan 117 CE)
// CA HSS Grade 6.7 · AP World History Unit 1 (state-building / empires)
//
// NOTE: 这是 EMPIRE 巅峰 (前 27 — 公元 180 的 Pax Romana, Trajan 公元 98-117 在位最大版图)
//       与 sibling topic roman-republic-fall-44bce (共和国崩溃, 前 509-前 27) 是不同时代/不同人物。
//       Augustus = 第一位罗马皇帝 (前 27), 共和国此时已结束。绝不混淆。
//
// 3 lens (per AUTHORING_PIPELINE 第 7/8/12 条):
//   - trajan                       (perpetrator-actor) — Trajan 公元 53-117, 在位 98-117, 版图最大 (征服 Dacia)
//                                    + 建设者 (图拉真纪功柱/广场/道路) + Pliny 通信治理 Bithynia
//   - provincial-elite             (lonely-mediator)   — composite 行省精英 (西班牙/高卢被罗马化的家族)
//                                    拿到罗马公民权, 夹在本族身份与罗马权力之间, 罗马收编精英的活样本
//   - enslaved-dacian-receiving-end (receiving-end)    — composite 一个 Dacia 战俘, 被掳为奴 (DEFAULT)
//                                    承载: 罗马的「和平与荣耀」建在征服 + 奴隶制上 —— 这是谁的和平?
//
// 跨 lens micro-detail (N6 anchor):
//   「同一块大理石 / the same marble」一块石头两个方向 —
//   - Dacia 奴隶 lens N6: 图拉真纪功柱上刻着征服 Dacia 的浮雕 —— 那场让她变成奴隶的战争, 被刻成罗马的荣耀
//   - Trajan lens N6: 同一根柱子, 是他留给罗马的不朽功业 —— 胜利者写历史
//   - 行省精英 lens N6: 他出钱在本省修的罗马式建筑 (剧场/澡堂) —— 用同一种石头, 把征服变成「文明」
//
// 跨 Topic 锚:
//   - 罗马公民权/法律/道路 → constitutional-convention-1787 (Madison 读罗马政体借鉴) + magna-carta-1215 (rule of law 远祖)
//   - 共和 vs 帝国 → roman-republic-fall-44bce (共和怎么死的 → 帝国怎么运转的, 强闭环)
//   - 奴隶制建在征服上 → 任何 receiving-end「谁的和平」母题
//
// defaultLens = 'enslaved-dacian-receiving-end' (受影响者优先 pattern: 罗马「Pax Romana」从来只属征服者一方)
//
// 反 Whig + 反向 essentialism 都拒: 不写「罗马给世界文明/法律」单一进步叙事; 也不写「罗马只是屠杀机器」;
//   Pax Romana 是真的有道路/法律/公民权扩展, 同时它建在征服 + 约 1/4-1/3 人口被奴役之上 —— 两者同体, 不下结论。
//
// STRUCTURE SPEC (multi-faction):
//   - 11 nodes per lens
//   - 220-380 CN chars/node; ≤2 anchor nodes/lens 可达 ~550 (N6 cross-lens + N10/N11 synthesis)
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true (2/lens, 6 total); all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md cultural ban (罗马用真实术语: 罗马皇帝/Augustus/Caesar 头衔/元老院 Senate/
//   行省 province/军团 legion/公民权 citizenship/Dacia/Pax Romana; 绝不用皇帝(中国义)/丞相/太子/圣旨/玉玺/翰林)
//   + em-dash 预算 (每句 ≤1) + 名字分级 + synthesis voice (一种说法/另一种说法/想 30 秒) + anti-fab 括号短句
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Trajan (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var trajanLens = {
  id: 'trajan',
  name: 'Trajan',
  nameCn: '图拉真',
  role: 'perpetrator-actor',
  perspectiveTag: 'empire-at-its-peak',
  icon: '👑',
  description: {
    cn: '罗马皇帝，公元 53 年生在西班牙的一个行省家庭，不是罗马城里的旧贵族。他是第一个不出生在意大利本土的罗马皇帝，靠军功一路爬到帝国顶端，公元 98 年登基。在他手里，罗马的版图扩张到历史最大：他打下了 Dacia（达契亚），把帝国推到地中海以外。他修路、建广场、立功柱，让罗马城气派得空前。后世元老院给新皇帝的祝词是「愿你比 Augustus 幸运，比 Trajan 更好」。这一遍让你从一个站在帝国顶点的人内部，看「最伟大的罗马」是怎么被建起来的，又是踩着什么建起来的。',
    en: 'A Roman emperor, born in 53 CE to a provincial family in Spain, not to the old nobility of the city of Rome. He was the first Roman emperor born outside Italy, climbing to the top of the empire on military success, and taking the throne in 98 CE. Under his hand the empire reached its largest extent in history: he conquered Dacia and pushed Rome beyond the Mediterranean world. He built roads, raised a forum, set up a column, and made the city of Rome grand as never before. Later the Senate would greet each new emperor with the wish "may you be luckier than Augustus and better than Trajan." This pass lets you watch, from inside a man standing at the empire\'s summit, how "the greatest Rome" was built, and on top of what it was built.',
  },
  storyboard: [
    {
      id: 'tr-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '公元 117 年，罗马帝国的版图，是它五百年历史上最大的一次。\n\n从不列颠的雾，到埃及的沙；从西班牙的海，到两河流域的城——这一大圈土地，都在一个名字下面。我的名字。\n\n我是 Trajan（图拉真），罗马皇帝。说出来你可能意外：我不是生在罗马城里的旧贵族，我生在西班牙的一个行省。我是第一个不出生在意大利本土的罗马皇帝。一个「外省人」，坐上了整个地中海世界的顶端。\n\n人们后来管我这个时代叫 Pax Romana（罗马和平）——据说道路通到天边，商队走遍帝国，法律一视同仁。\n\n这一遍，你站进我这个位置。你会看见一个帝国怎么爬到它的最高点。也请你记住一个问题，一直问到最后：这份「和平」，是谁的和平？',
        en: 'In the year 117 CE, the Roman Empire reached the largest extent in its five hundred years.\n\nFrom the fogs of Britain to the sands of Egypt, from the sea off Spain to the cities of Mesopotamia, this whole vast ring of land lay under one name. My name.\n\nI am Trajan, emperor of Rome. It may surprise you: I was not born to the old nobility of the city. I was born in a province in Spain. I was the first Roman emperor born outside Italy. A "provincial," seated at the summit of the entire Mediterranean world.\n\nLater they would call my age the Pax Romana, the Roman Peace. They say the roads ran to the horizon, the caravans crossed the whole empire, and the law treated all alike.\n\nThis pass puts you in my place. You will watch an empire climb to its highest point. And keep one question, all the way to the end: this peace, whose peace is it?',
      },
      deliverGoal: 'N1 hook — 公元 117 帝国最大版图 + Trajan 自我介绍 (西班牙行省出身/第一个非意大利本土皇帝) + Pax Romana (道路/商队/法律) + 这一遍视角设定 + 埋下「谁的和平」母题',
      engagementHook: '我从西班牙一个行省，爬到整个地中海世界的顶端。一个「外人」能登上权力的最高点——你觉得这是制度的开放，还是只是另一种收编？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说清楚我接手的是什么。\n\n我不是开国者。罗马早就不是共和国了。一百多年前，Augustus（奥古斯都）终结了那场内战不断的共和，自己成了第一位罗马皇帝。从他开始，元老院还在，执政官还选，但真正说了算的，是一个人。\n\n到我登基的公元 98 年，罗马已经太平了一段日子。这套「一个人统治、但披着共和外衣」的制度，运转得相当稳。\n\n我接手的，是一台已经造好的巨型机器：几十个行省、几十万人的军团、铺到帝国各角落的道路、一套写下来人人要守的罗马法。\n\n我的活儿不是发明它，是把它推到极限——版图更大、城市更壮、皇帝的威望更高。\n\n一个皇帝最容易被记住的方式，是什么？打胜仗，开疆土。我选了这条路。',
        en: 'First, be clear about what I inherited.\n\nI was no founder. Rome had long ceased to be a republic. More than a century before, Augustus had ended the republic\'s endless civil wars and made himself the first Roman emperor. From him on, the Senate still met and consuls were still elected, but the one who truly decided was a single man.\n\nBy the year I took the throne, 98 CE, Rome had been at peace for some time. This system, rule by one man dressed in the clothing of a republic, ran quite steadily.\n\nWhat I inherited was a giant machine already built: dozens of provinces, legions of hundreds of thousands of men, roads laid into every corner of the empire, and a written Roman law that everyone was bound to keep.\n\nMy job was not to invent it. It was to push it to its limit, a larger map, grander cities, a higher prestige for the emperor.\n\nWhat is the easiest way for an emperor to be remembered? Win wars and widen the borders. I chose that road.',
      },
      deliverGoal: 'N2 setup — Augustus 前 27 终结共和成首位皇帝 (披共和外衣的一人统治) + Trajan 98 接手已建好的机器 (行省/军团/道路/罗马法) + 共和 vs 帝国区分 + 选择以军功立威',
      engagementHook: '我接手的是一台别人造好的机器，我的活儿是把它推到极限。「守成」和「扩张」，哪个才算真本事？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我盯上的第一个大目标，是 Dacia（达契亚）。\n\n它在多瑙河北岸，今天罗马尼亚那一带。那里有一个强悍的王，叫 Decebalus（德凯巴卢斯），手下兵勇善战，山里还藏着大量金矿银矿。前几任皇帝跟他打过，没占到便宜，最后只能花钱买和平——每年给他送钱，让他别来骚扰边境。\n\n你想想这对一个罗马皇帝意味着什么：堂堂罗马，每年给一个北方蛮王送钱买太平。这在我看来是奇耻大辱。\n\n公元 101 年，我亲自带军团北上，打第一次达契亚战争。这不是边境小打小闹，是举国之力的大远征。\n\n我要的不只是钱和金矿。我要的是：让全罗马看见，他们的皇帝不进贡，他们的皇帝去征服。',
        en: 'The first great target I fixed on was Dacia.\n\nIt lay north of the Danube, around what is today Romania. There ruled a fierce king named Decebalus, with brave soldiers and mountains hiding rich veins of gold and silver. Earlier emperors had fought him and gained nothing, and in the end could only buy peace, sending him money each year so he would not trouble the frontier.\n\nThink what that meant for a Roman emperor: mighty Rome, paying a northern barbarian king every year to keep quiet. To me this was a deep disgrace.\n\nIn 101 CE I led the legions north myself, in the first Dacian war. This was no small frontier skirmish. It was a great expedition with the whole strength of the state behind it.\n\nWhat I wanted was not only the money and the gold mines. What I wanted was for all of Rome to see that their emperor did not pay tribute. Their emperor went and conquered.',
      },
      deliverGoal: 'N3 setup — Dacia 在多瑙河北 (今罗马尼亚) + Decebalus 王 + 金矿银矿 + 前任皇帝花钱买和平 (Trajan 视为耻辱) + 公元 101 第一次达契亚战争举国远征 + 动机: 让罗马看见皇帝去征服不进贡',
      engagementHook: '前几任皇帝花钱买和平，我觉得那是耻辱，宁可打仗。「花钱买太平」和「打仗争面子」，你会选哪个？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你是站在帝国顶点的皇帝。你下令出征 Dacia，几万人的军团跟着你过多瑙河。\n\n你做的第一件事，是修一座桥。一座横跨多瑙河的大石桥，当时世界上最长的桥之一。你的工程师 Apollodorus（阿波罗多罗斯）设计的。光是这座桥，就告诉对面的 Decebalus 一件事：罗马来了，而且不打算走。\n\n两次战争（公元 101-102、105-106），打得艰苦。Decebalus 抵抗到最后，城破时自杀，没让罗马活捉他。\n\n你赢了。Dacia 成了罗马的新行省。山里的金矿，从此往罗马流。\n\n这一刻，你站在胜利里。但你得想一个问题：你说这是「为了罗马的荣耀」。可这场仗，真正流血的是军团里的普通士兵，真正家破人亡的是 Dacia 的百姓。「荣耀」是你的，代价是他们的——这笔账，你怎么算才算公平？',
        en: 'Now you are me.\n\nYou are the emperor at the summit of the empire. You order the campaign against Dacia, and legions of tens of thousands cross the Danube behind you.\n\nThe first thing you do is build a bridge. A great stone bridge spanning the Danube, one of the longest in the world at the time, designed by your engineer Apollodorus. The bridge alone told Decebalus across the river one thing: Rome has come, and does not mean to leave.\n\nTwo wars (101 to 102 and 105 to 106) were fought hard. Decebalus resisted to the end, and killed himself when his stronghold fell, rather than let Rome take him alive.\n\nYou won. Dacia became a new Roman province. From then on, the gold of its mountains flowed to Rome.\n\nIn this moment you stand inside victory. But you must ask one thing: you call this "for the glory of Rome." Yet the ones who truly bled were ordinary soldiers in the legions, and the ones truly ruined were the people of Dacia. The glory is yours, the cost is theirs. How would you settle that account fairly?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 过多瑙河 + Apollodorus 设计的大石桥 (世界最长之一) + 两次达契亚战争 101-102/105-106 + Decebalus 城破自杀 + Dacia 成行省/金矿流向罗马 + 自我拷问: 荣耀归你代价归士兵和 Dacia 百姓怎么算公平',
      engagementHook: '荣耀是我的，流血的是士兵，家破人亡的是 Dacia 百姓。当一个人的「丰功伟绩」是另一群人的灾难，这笔账该怎么算？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '打赢 Dacia，我做了一件事，让罗马城轰动了 123 天。\n\n我下令办一场盛大的庆典：123 天的角斗和竞技，据古代史家记载，前后投入约一万名角斗士、上万头野兽。整座城吃喝玩乐，免费看戏，免费分粮。\n\n这就是罗马皇帝拢住民心的办法，后人叫它「面包与竞技」（bread and circuses）：你给城里的平民免费的粮食，再加上免费的、血腥刺激的娱乐，他们就不会上街闹事。\n\n钱从哪来？很大一部分，正是从 Dacia 抢来的金银。一场远方的征服，变成了罗马城里 123 天的狂欢。\n\n你看出这套逻辑了吗：边疆打仗 → 抢回财富 → 城里发福利办盛会 → 民心稳 → 皇帝威望更高。\n\n罗马的「太平盛世」，有一部分，就是这么转起来的。',
        en: 'After winning Dacia, I did something that shook the city of Rome for 123 days.\n\nI ordered a vast celebration: 123 days of gladiatorial games and contests. By the record of an ancient historian, some ten thousand gladiators and many thousand beasts were used in all. The whole city ate, drank, watched for free, and was given free grain.\n\nThis was how a Roman emperor held the hearts of the crowd, what later ages called "bread and circuses": give the common people of the city free grain, plus free, bloody, thrilling entertainment, and they will not riot in the streets.\n\nWhere did the money come from? A large part of it was the gold and silver seized from Dacia. A conquest far away turned into 123 days of revelry in the city of Rome.\n\nDo you see the logic? War on the frontier brings back wealth, the wealth pays for welfare and games in the city, the crowd stays content, and the emperor\'s prestige rises higher.\n\nThis is part of how Rome\'s "golden age of peace" kept turning.',
      },
      deliverGoal: 'N5 story — 战胜后 123 天庆典 (古史家载约万名角斗士/万头野兽) + bread and circuses (免费粮+血腥娱乐稳民心) + 钱来自 Dacia 掠夺金银 + 逻辑链 (边疆征服→财富→城里福利盛会→民心稳→皇帝威望)',
      engagementHook: '征服远方抢回的金银，变成了城里 123 天的免费狂欢——「面包与竞技」让平民不上街闹事。用福利和娱乐换来的稳定，算真稳定吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想让 Dacia 这场胜利，永远留在罗马城的中心。所以我立了一根柱子。\n\n公元 113 年，图拉真纪功柱（Trajan\'s Column）落成。一根约 30 米高的大理石柱，从底到顶，盘着一条连续的浮雕带，像一卷展开的连环画，刻满了两次达契亚战争的场面：军团行军、渡河、攻城、Decebalus 之死。\n\n这是给罗马人看的：你们的皇帝，把一个王国整个拿下，刻在石头上，千年不朽。\n\n但请你跟我一起，绕到这根柱子的另一面去想。\n\n柱子上刻着「罗马的胜利」。可同一场战争，对 Dacia 那边的人，是国破、是被掳、是变成奴隶、被押着走上千公里去罗马的市场。\n\n同一块大理石，同一场战争。我把它刻成荣耀；那些被刻进背景里、没有名字的俘虏，他们经历的是另一个故事。（那个故事，你换到一个 Dacia 战俘那一遍，会亲耳听见。）\n\n胜利者立碑，写历史。可碑上那些低头被押走的小人影，他们自己怎么想，碑上从来不会说。',
        en: 'I wanted this victory over Dacia to stay forever at the heart of the city of Rome. So I raised a column.\n\nIn 113 CE, Trajan\'s Column was completed. A marble column about 30 meters tall, with a continuous band of carved relief spiraling from base to top, like an unrolled comic strip, covered with the scenes of the two Dacian wars: legions marching, crossing rivers, storming towns, and the death of Decebalus.\n\nThis was for the Romans to see: your emperor took an entire kingdom, carved it in stone, undying for a thousand years.\n\nBut come with me and think around to the other face of this column.\n\nThe column carves "the victory of Rome." Yet the same war, for the people on the Dacian side, was a kingdom destroyed, capture, enslavement, and being marched a thousand kilometers to the markets of Rome.\n\nThe same marble, the same war. I carved it as glory. Those captives pressed into the background, without names, lived another story. (That story, you will hear for yourself when you switch to the pass of a Dacian captive.)\n\nThe victor raises the monument and writes the history. But how those small bowed figures, marched away in the carving, felt about it, the monument never says.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 公元 113 图拉真纪功柱 (约 30 米/螺旋浮雕带刻两次达契亚战争/Decebalus 之死) + 给罗马人看的不朽功业 + 跨 lens 对位: 同一块大理石同一场战争, Trajan 刻成荣耀 vs Dacia 俘虏被押千里为奴 + 桥到 Dacia 奴隶 lens + 胜利者写历史',
      engagementHook: '同一块大理石，同一场战争——我把它刻成荣耀，碑上那些低头被押走的小人影，经历的是被掳为奴。胜利者立碑写历史，那被写进背景里的人呢？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '别以为我只会打仗。让罗马「伟大」的，不只是征服，还有治理。\n\n我修路——帝国最盛时，全境约有八万公里的硬化大道，从罗马城像血管一样伸到每个行省。路修好了，军团能快速调动，商队能安全往来，消息能传得飞快。罗马有句老话：条条大路通罗马。\n\n我建了图拉真广场和大市场（Trajan\'s Forum & Market），气派空前，是罗马城的新地标。\n\n我还认真管行省的日常。有一批我和一个行省总督 Pliny（小普林尼）来往的真实书信留到了今天。他在帝国东边管 Bithynia 那个省，碰到棘手的事就写信问我：城里的消防队该不该批、欠债的账目怎么处理、对某一群不肯拜罗马神的人该怎么办。我一封封回。\n\n你看，一个庞大帝国，不是光靠刀。它靠路、靠法、靠一个皇帝肯坐下来回信处理芝麻绿豆的政务。\n\nPax Romana 这四个字里，真有「秩序」「太平」「能安心做生意」的那一面——这是真的。',
        en: 'Do not think I only knew how to make war. What made Rome "great" was not only conquest, but governance.\n\nI built roads. At the empire\'s height there were some eighty thousand kilometers of paved highway across the whole realm, reaching out from the city of Rome like veins to every province. With the roads built, legions could move fast, caravans could travel safely, and news could fly. Rome had an old saying: all roads lead to Rome.\n\nI built Trajan\'s Forum and Market, grand as never before, a new landmark of the city.\n\nI also tended seriously to the daily business of the provinces. A set of real letters between me and a provincial governor, Pliny, survives to this day. He governed the eastern province of Bithynia, and when he met a hard matter he wrote to ask me: should a town fire brigade be allowed, how should bad debts be handled, what to do with a certain group who would not worship the Roman gods. I answered him, letter by letter.\n\nYou see, a vast empire does not run on the sword alone. It runs on roads, on law, and on an emperor willing to sit down and answer letters about small affairs of state.\n\nIn those words, Pax Romana, there really is a side of order, of peace, of being able to do business in safety. That is true.',
      },
      deliverGoal: 'N7 story — 治理面 (不只征服) + 约八万公里硬化道路 (军团调动/商队/消息/条条大路通罗马) + 图拉真广场和大市场 + Trajan-Pliny 真实书信治理 Bithynia (消防队/欠债/不拜罗马神的群体) + Pax Romana 真有秩序太平做生意一面',
      engagementHook: '我修了八万公里的路，也认真坐下来回总督的信处理琐事——帝国不光靠刀。一个庞大的「秩序」，让人能安心生活做生意，这本身算不算一种好？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我赢遍北方之后，又把眼光投向东边。\n\n公元 113 年起，我向东进军，打那个老对手——帕提亚帝国（Parthia，在今天伊朗、伊拉克一带）。我一路打到两河流域，拿下了 Mesopotamia（美索不达米亚），据说一直推到波斯湾边。\n\n站在波斯湾，我望着海，听说当年 Alexander 大帝也曾走到这一带。古代史家记载，我感叹自己年纪太大，再也没法像他那样一路打到印度了。\n\n这一刻，帝国的版图到了历史最大。我站在它的最东端。\n\n但请你记一个词：「最大」常常也是「极限」。版图越大，要守的边境越长，要花的钱越多，离罗马越远的地方越难管。我刚拿下的东边，转头就有城市叛乱。\n\n一个东西能撑多大，是有上限的。我把罗马撑到了它的上限。再往外，就撑不住了。',
        en: 'After winning everything in the north, I turned my eyes east.\n\nFrom 113 CE I marched east against the old rival, the Parthian Empire, in the lands of today\'s Iran and Iraq. I fought my way to the land between the rivers and took Mesopotamia, and they say I pushed all the way to the shore of the Persian Gulf.\n\nStanding by the Gulf, I looked out at the sea. They told me that long ago Alexander had reached these lands too. An ancient historian records that I sighed at being too old now to march on to India as he had.\n\nIn that moment the empire\'s map reached its largest in history. I stood at its easternmost edge.\n\nBut remember one word: "largest" is often also "limit." The bigger the map, the longer the borders to guard, the more money it costs, and the harder it is to rule the places far from Rome. The east I had just taken broke into city revolts almost at once.\n\nThere is a ceiling to how big a thing can grow. I had stretched Rome to its ceiling. Any further out, and it could not hold.',
      },
      deliverGoal: 'N8 story — 公元 113 起东征帕提亚 (今伊朗伊拉克) + 拿下 Mesopotamia 推到波斯湾 + Alexander 对照 (古史家载叹太老无法像他打到印度) + 版图历史最大 + 「最大即极限」(边境长/花钱多/远地难管/新占东边叛乱)',
      engagementHook: '我把罗马撑到了历史最大，可「最大」常常也是「极限」——刚拿下的东边转头就叛乱。一个东西做到「最大」的那一刻，是不是也最接近撑不住？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '公元 117 年，我在东征回程的路上病倒，死了。我没能活着回到罗马城。\n\n我死后，我指定的继承人 Hadrian（哈德良）当了皇帝。他做了一个跟我相反的决定：放弃我刚打下的两河流域那一块，把帝国的边界收回来，守住。后来他还在不列颠北边修了一道横贯全岛的长墙（Hadrian\'s Wall），明明白白告诉世界：罗马到这里为止，不再往外扩了。\n\n我一辈子在「扩张」，我的接班人转头就「收缩」。这不是他懦弱，是他看清了我没承认的那件事：帝国已经到顶了。\n\n往后近一百年，罗马大体维持太平，史称「五贤帝」时代的尾声。但「最大版图」这个纪录，停在了我手里，公元 117 年。\n\n后来罗马人给每个新皇帝的祝福语是：「愿你比 Augustus 幸运，比 Trajan 更好。」我成了那把尺子。可一把尺子，量的是荣耀，量不出脚下踩着的是什么。',
        en: 'In 117 CE, on the road back from the eastern campaign, I fell ill and died. I never made it home to the city of Rome alive.\n\nAfter my death, the heir I had named, Hadrian, became emperor. He made a decision opposite to mine: he gave up the land between the rivers I had just taken, pulled the empire\'s borders back, and held them. Later he built a wall running across the north of Britain, Hadrian\'s Wall, telling the world plainly: Rome ends here, and reaches no further.\n\nI spent my whole life expanding; my successor turned at once to contracting. This was not cowardice in him. He saw clearly what I would not admit: the empire had reached its peak.\n\nFor nearly a century after, Rome held its peace on the whole, in what is called the close of the age of the Five Good Emperors. But the record of "largest extent" stopped in my hands, in 117 CE.\n\nLater the Romans blessed each new emperor with the words "may you be luckier than Augustus and better than Trajan." I became the measuring stick. But a measuring stick measures glory. It cannot measure what is being trodden underfoot.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 公元 117 东征回程病死 + Hadrian 继位反向决定 (放弃 Mesopotamia/收缩边界/Hadrian\'s Wall) + 「不是懦弱是看清帝国到顶」+ 之后近百年太平 + Trajan 成「optimus」尺子 + 「尺子量荣耀量不出脚下踩着什么」',
      engagementHook: '我一辈子扩张，我的接班人转头就收缩——他看清了我不肯承认的事：帝国到顶了。该死守一个「最大」，还是该承认极限、稳住能守的？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是罗马最好的皇帝。我把帝国带到历史最大的版图，修了八万公里的路，建了不朽的广场和功柱，认真回每一封治理行省的信。在我和前后几位皇帝手里，地中海世界享了近两百年的太平，商旅安全，法律通行。罗马人把「比 Trajan 更好」当成对皇帝的最高期望，不是没有道理。\n\n另一种说法：我是一台征服机器最得意的操作者。我嫌「花钱买和平」是耻辱，宁可发动两场战争，让一个民族 Dacia 国破、百姓被掳为奴。我办 123 天的盛会，用的是抢来的金银。我引以为傲的功柱，背面是没有名字的俘虏。我那份「和平」，是建在别人的不和平之上的。\n\n这两边不是「优点加缺点」。是同一份功业的两面——同一条路，运的是商队，也运过被锁住的奴隶；同一个我。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was Rome\'s best emperor. I brought the empire to the largest map in its history, built eighty thousand kilometers of road, raised an undying forum and column, and answered every letter of provincial governance with care. In my hands and those of the emperors around me, the Mediterranean world enjoyed nearly two centuries of peace, with safe travel and law in force. The Romans made "better than Trajan" the highest hope for an emperor, and not without reason.\n\nThe other view: I was the proudest operator of a conquest machine. I scorned "buying peace" as a disgrace, and chose instead to launch two wars, to ruin a people, Dacia, and march its people off into slavery. I held 123 days of games with seized gold and silver. The column I was so proud of has, on its back, captives with no names. My "peace" was built on top of the unpeace of others.\n\nThese are not "strengths and weaknesses." They are two faces of the same achievement. The same road carried the caravans, and also carried chained slaves. The same me.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (罗马最好的皇帝/最大版图/八万公里路/不朽建筑/认真治理/近两百年太平) / 另一种说法 (征服机器操作者/嫌买和平耻辱发两场战争/Dacia 国破被掳为奴/盛会用抢来的钱/功柱背面无名俘虏/和平建在别人不和平上) / 同一功业两面 / 想 30 秒',
      engagementHook: '罗马最好的皇帝，和征服机器最得意的操作者——是同一个我。同一条路运商队也运奴隶。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'tr-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个「巅峰」？\n\n一个帝国爬到它五百年最高的那一点，地中海世界享了近两百年太平，道路、法律、城市气派空前。可这同一个巅峰，是靠不断征服别人、把一批批战俘变成奴隶喂出来的。「最伟大的罗马」和「踩在脚下的人」，是同一座金字塔的塔尖和塔基。把它们放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有这样的「光鲜」：一个班级、一支球队、一个公司，对外看起来风光、有秩序、人人羡慕——可这份光鲜，是不是有一部分人被牺牲、被压在底下、不被算进那张合影里换来的？\n\n那时候，你会只盯着塔尖的荣耀欢呼，还是会多问一句：这份「伟大」，是谁的伟大，又是踩着谁建起来的？',
        en: 'Having walked my whole life, how would you judge a "peak" like this?\n\nAn empire climbing to the highest point in its five hundred years, the Mediterranean world enjoying nearly two centuries of peace, roads, law, and cities grand as never before. Yet this same peak was fed by conquering others without end, turning batch after batch of captives into slaves. "The greatest Rome" and "the people trodden underfoot" are the tip and the base of the same pyramid. Put them on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there a kind of "shine" like this: a class, a team, a company that looks splendid from outside, orderly, envied by all, yet is that shine bought in part by some people sacrificed, pressed underneath, not counted into the group photo?\n\nWhen that happens, will you only stare at the glory at the tip and cheer, or will you ask one more question: this "greatness," whose greatness is it, and on top of whom was it built?',
      },
      deliverGoal: 'N11 close — 评价巅峰 (五百年最高点/近两百年太平/道路法律城市 vs 靠征服把战俘变奴隶喂出来/塔尖与塔基同一金字塔) + transfer「今天你身边光鲜的班级/球队/公司是不是有人被牺牲压在底下不进合影」+ 你会盯塔尖欢呼还是多问一句这是谁的伟大踩着谁建的',
      engagementHook: '「最伟大的罗马」和「踩在脚下的人」，是同一座金字塔的塔尖和塔基。你会怎么评价这样一个巅峰？今天你身边那份「光鲜」，是不是也有人被压在底下，不进合影？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Provincial Elite (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var provincialEliteLens = {
  id: 'provincial-elite',
  name: 'A Provincial Roman Citizen',
  nameCn: '一个行省的罗马公民',
  role: 'lonely-mediator',
  perspectiveTag: 'co-opted-elite',
  icon: '⚖️',
  description: {
    cn: '一个虚构但典型的行省精英：祖父那一辈还是西班牙南部一座小城里讲本地话的地方望族，到他这一代，全家拿到了罗马公民权。他取了罗马名字，穿罗马式的长袍，出钱在本城修罗马式的剧场和澡堂，把儿子送去学拉丁文和雄辩术。他既不是罗马城里的旧贵族，也不再是单纯的「本地人」，他卡在两种身份中间。这一遍让你从一个被罗马收编的精英内部，看罗马最厉害的一件本事：它征服一个地方，靠的不只是军团，更是把当地有头脸的人，变成罗马自己人。',
    en: 'A fictional but typical provincial elite: in his grandfather\'s day the family were local notables in a small town in southern Spain who still spoke the local tongue; by his own generation the whole family held Roman citizenship. He took a Roman name, wore the Roman robe, paid to build a Roman-style theater and baths in his town, and sent his son to study Latin and rhetoric. He is neither the old nobility of the city of Rome nor simply a "local" anymore. He is wedged between two identities. This pass lets you watch, from inside a co-opted elite, Rome\'s greatest skill of all: it conquered a place not only with legions, but by turning the local men of standing into Romans themselves.',
  },
  storyboard: [
    {
      id: 'pe-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我说的是拉丁文，我穿的是罗马式的长袍，我拜的是罗马的神。可我祖父，是个西班牙南部小城里讲本地话的人。\n\n两代人，从「被征服的本地人」，变成了「罗马公民」。这中间发生了什么？\n\n我是这个故事里没有名字的那种人——一个行省的精英。不是罗马城里的旧贵族，也不再是从前那个单纯的本地家族。我卡在中间。\n\n你大概以为，罗马征服一个地方，靠的是军团、是刀。一部分是。但罗马真正厉害的一手，是更软的：它不杀光当地的头面人物，它把他们变成自己人。变成我这样的人。\n\n这一遍，你站进我这个位置。你会看见一个帝国，怎么不靠多少士兵，就让被征服的人，心甘情愿地，开始觉得「我也是罗马人」。',
        en: 'I speak Latin, I wear the Roman robe, I worship the Roman gods. Yet my grandfather was a man of a small town in southern Spain who spoke the local tongue.\n\nIn two generations, from "conquered local" to "Roman citizen." What happened in between?\n\nI am the kind of person who has no name in this story, a provincial elite. Not the old nobility of the city of Rome, and no longer the simple local family of before. I am wedged in the middle.\n\nYou probably think Rome conquered a place with legions, with the sword. Part of it, yes. But Rome\'s truly great move was softer: it did not kill off the local men of standing. It turned them into its own. Into people like me.\n\nThis pass puts you in my place. You will watch an empire, with hardly any soldiers, get the conquered to begin, willingly, to feel "I too am a Roman."',
      },
      deliverGoal: 'N1 hook — 说拉丁文/穿罗马袍/拜罗马神但祖父是西班牙讲本地话的人 + 两代从被征服本地人到罗马公民 + 卡在中间的行省精英 + 罗马真正厉害的一手是软的 (把头面人物变自己人) + 这一遍视角 (帝国不靠多少兵就让被征服者觉得我也是罗马人)',
      engagementHook: '罗马没杀光我们这些当地的头面人物，它把我们变成了自己人。比起用刀征服，把人「变成自己人」是不是更厉害、也更可怕？',
      expectsRealAnswer: false,
    },
    {
      id: 'pe-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我家三代人的路，你才懂罗马这套是怎么运转的。\n\n祖父那一辈，我们这座西班牙南部的城刚归罗马管不久。祖父是城里的地方望族，有地、有名望，但在罗马人眼里，是个「行省土著」。\n\n父亲那一辈，他学会了拉丁文，开始跟罗马来的官员打交道，帮着收税、管地方事务。罗马需要有人替它管这些远方的城——它不可能从罗马城派人管遍几十个行省。谁来管？就是我们这种本地有头脸、又肯合作的家族。\n\n到我这一辈，全家拿到了罗马公民权。这意味着：我在法律上，和一个生在罗马城里的人，是平等的公民。我可以走遍帝国受罗马法保护，我的儿子甚至可以去争取进元老院。\n\n你看明白这桩交易了吗：我们帮罗马管好本地，罗马给我们身份、保护和上升的通道。这不是抢来的，是「谈」成的。',
        en: 'First, the road of three generations of my family, so you understand how Rome\'s system works.\n\nIn my grandfather\'s day this town in southern Spain had not long come under Roman rule. Grandfather was a local notable, with land and a good name, but in Roman eyes a "provincial native."\n\nIn my father\'s day he learned Latin and began to deal with the officials Rome sent, helping to collect taxes and manage local affairs. Rome needed someone to run these far-off towns for it. It could never send men from the city of Rome to rule dozens of provinces. Who would rule them? Families like ours, local, of standing, and willing to cooperate.\n\nBy my generation, the whole family held Roman citizenship. This meant that in law I was an equal citizen with a man born in the city of Rome. I could travel the whole empire under the protection of Roman law, and my son could even strive for a seat in the Senate.\n\nDo you see the bargain? We run the local place well for Rome, and Rome gives us status, protection, and a ladder upward. This was not seized. It was negotiated.',
      },
      deliverGoal: 'N2 setup — 三代人的路 (祖父地方望族/被视行省土著 → 父亲学拉丁文帮收税管地方 → 我这代全家拿公民权) + 罗马管不过来需本地合作家族 + 公民权 = 法律上平等公民/受罗马法保护/儿子可争进元老院 + 「这是谈成的交易不是抢来的」',
      engagementHook: '我们帮罗马管好本地，罗马给我们身份和上升通道——这是「谈」成的交易，不是抢来的。一份让你受益的合作，会不会也让你慢慢忘了你本来是谁？',
      expectsRealAnswer: false,
    },
    {
      id: 'pe-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我说一个最能代表我们这种人的活法：捐钱建城。\n\n我出钱，在我这座城里修了一座罗马式的剧场，又修了一座公共澡堂。钱是我自己掏的，刻着我名字的石碑立在门口。\n\n你可能会问：自己掏钱给全城人用，图什么？\n\n图的是「面子」和「位子」。在罗马的世界里，一个有钱的精英，证明自己配当头面人物的方式，就是为本城做这种公共捐建。这叫 euergetism（公益捐建）。修了剧场澡堂，全城人记你的好，罗马的官员也认你是个「靠得住的体面人」。\n\n而且你注意，我修的是「罗马式」的剧场和澡堂——不是我祖父那个年代本地样式的建筑。\n\n我用我自己的钱，亲手把我的家乡，一砖一瓦地变得更像罗马。\n\n没人拿刀逼我。是我自己愿意的。这就是罗马最高明的地方。',
        en: 'Let me tell you the way of life that best stands for people like me: paying to build the city.\n\nWith my own money I built a Roman-style theater in my town, and a public bath as well. The money came out of my own purse, and a stone inscribed with my name stands at the door.\n\nYou might ask: paying out of your own pocket for the whole town to use, what is in it for you?\n\nFace and position. In the Roman world, the way a wealthy elite proves he is fit to be a man of standing is exactly this kind of public building for his town. It is called euergetism, public benefaction. Build a theater and baths, and the whole town remembers your good, and Rome\'s officials mark you down as a "reliable, respectable man."\n\nAnd notice: what I built was a "Roman-style" theater and bath, not the local style of buildings from my grandfather\'s day.\n\nWith my own money, with my own hands, I turned my hometown, brick by brick, into something more like Rome.\n\nNo one held a sword to me. I did it willingly. This is the cleverest thing about Rome.',
      },
      deliverGoal: 'N3 setup — euergetism 公益捐建 (出钱修罗马式剧场/澡堂/刻名石碑) + 图面子和位子 (证明配当头面人物/全城记好/官员认体面人) + 注意修的是罗马式不是本地样式 + 「我用自己的钱亲手把家乡变得更像罗马/没人逼我」+ 罗马最高明处',
      engagementHook: '没人拿刀逼我，是我自己掏钱、自己愿意，把家乡一砖一瓦变得更像罗马。当同化是你「自愿」的，它还算被征服吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'pe-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你是这座城里最体面的人之一。你有罗马公民权，说一口好拉丁文，跟罗马来的总督同桌吃饭。在你的同乡眼里，你是「成功」的样板。\n\n可有一天，一件小事让你心里咯噔一下。\n\n你的老父亲，私下里还是用本地话跟你说话。你儿子听不懂了——他从小学的是拉丁文，本地话在他嘴里只剩几个词。三代人坐在同一张桌上，最老的和最小的，已经快说不到一块去了。\n\n那一刻你忽然意识到：你得到了罗马给的一切——身份、保护、上升的路。代价是，你正在亲手把你是谁、你从哪来，一点点交出去。你儿子这一代，会彻底变成罗马人，再也不记得祖辈讲的是什么话。\n\n这笔交易，到底划算吗？你换来的，和你交出去的，哪个更重？\n\n你站在中间，两头都够不着。这一刻你怎么想？',
        en: 'Now you are me.\n\nYou are one of the most respectable men in this town. You hold Roman citizenship, speak fine Latin, and dine at the same table as the governor Rome sends. In the eyes of your countrymen you are the model of "success."\n\nBut one day a small thing makes your heart catch.\n\nYour old father, in private, still speaks to you in the local tongue. Your son no longer understands it. From childhood he learned Latin, and of the local tongue only a few words remain in his mouth. Three generations at the same table, and the oldest and the youngest can barely speak to each other anymore.\n\nIn that moment you suddenly see: you have gained everything Rome gives, status, protection, a road upward. The price is that you are handing over, with your own hands, bit by bit, who you are and where you came from. Your son\'s generation will become Roman through and through, and will never remember what tongue their forefathers spoke.\n\nWas the bargain worth it? What you gained, and what you gave up, which weighs more?\n\nYou stand in the middle, unable to reach either end. In this moment, what do you think?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 你是城里最体面的人 (公民权/好拉丁文/跟总督同桌/同乡眼里成功样板) + 一件小事咯噔 (老父亲私下讲本地话/儿子听不懂只剩几个词/三代说不到一块) + 意识到得到罗马一切代价是交出你是谁 + 这笔交易划算吗换来的和交出去的哪个重 + 卡在中间两头够不着',
      engagementHook: '三代人同一张桌，最老的还讲本地话，最小的已经听不懂了。我得到了罗马给的一切，代价是亲手交出「我是谁」。这笔交易，到底划不划算？',
      expectsRealAnswer: false,
    },
    {
      id: 'pe-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '别以为像我这样的人爬不到顶。恰恰相反。\n\n看看坐在帝国最高位上的人是谁——Trajan（图拉真），现在的罗马皇帝，他就是西班牙行省出身，跟我同一片土地。我们这一代行省精英，已经有人进了元老院，有人当上总督，甚至有人成了皇帝。\n\n罗马这套，是真的给上升通道的。它不像有些征服者，永远把被征服的人按在底层。它对「肯变成罗马人」的精英，几乎是敞开门的。一个西班牙小城出来的家族，三代之内能出公民、出官员——这在很多古代帝国里，是不可想象的。\n\n所以你别只听我前面那点惆怅。这桩交易的另一面，是实打实的好处：身份、安全、财富、给后代的前途。\n\n这就是我这种人最难讲清楚的地方：罗马拿走了我们的「本来面目」，又给了我们一条很多人求之不得的路。\n\n它到底是抢了我，还是抬举了我？这两件事，在我身上是同一件事。',
        en: 'Do not think people like me cannot reach the top. Quite the opposite.\n\nLook at who sits in the highest seat of the empire. Trajan, the present emperor of Rome, was himself born in a province of Spain, from the same soil as me. Of my generation of provincial elites, some have entered the Senate, some have become governors, and one has even become emperor.\n\nRome\'s system truly does give a ladder upward. It is not like some conquerors who forever press the conquered into the bottom. To elites willing to "become Roman," it is almost an open door. A family out of a small Spanish town producing citizens and officials within three generations, this would be unthinkable in many an ancient empire.\n\nSo do not hear only the wistfulness from before. The other face of this bargain is solid benefit: status, safety, wealth, a future for one\'s children.\n\nThis is the hardest thing for someone like me to put clearly: Rome took away our "original face," and gave us a road many would give anything for.\n\nDid it rob me, or raise me up? On me, those two are the same thing.',
      },
      deliverGoal: 'N5 story — 行省精英能爬到顶 (Trajan 本人西班牙行省出身/我们这代有人进元老院当总督甚至当皇帝) + 罗马真给上升通道 (不像某些征服者永远按底层/对肯变罗马人的精英敞开门) + 三代出公民官员在多数古代帝国不可想象 + 交易另一面实打实好处 + 「罗马拿走本来面目又给求之不得的路/抢我还是抬举我是同一件事」',
      engagementHook: '现在的皇帝 Trajan 跟我同一片西班牙土地出身——我们这种人真能爬到顶。罗马拿走了我的「本来面目」，又给了我一条很多人求之不得的路。它到底是抢了我，还是抬举了我？',
      expectsRealAnswer: false,
    },
    {
      id: 'pe-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这辈子最得意的，是出钱在本城修了那座罗马式的剧场。用的，是上好的大理石。\n\n你猜怎么着——就在我修剧场的那几年，远在罗马城的中心，皇帝 Trajan 也在用大理石立一根巨大的功柱，刻着他征服 Dacia 的全过程。\n\n同一种石头，两个地方，做着同一件事：把「罗马」刻进大地，让它看起来天经地义、永远如此。\n\n皇帝用大理石，把一场血腥的征服，变成不朽的「荣耀」。\n我用大理石，把一座被征服的城，变成自愿的「文明」。\n\n我们一个在塔尖，一个在半山腰，但我们干的是同一桩活：让征服，看起来不像征服，而像「进步」「文明」「秩序」。\n\n（同一块石头，在最底下那个被征服、被掳走的人眼里是什么——你换到一个 Dacia 战俘那一遍，会亲眼看见。）\n\n我出钱建的每一座漂亮房子，是恩惠，也是一层一层把人变成罗马人的工具。这两件事，分不开。',
        en: 'The thing I am proudest of in my life is the Roman-style theater I paid to build in my town. It was made of fine marble.\n\nAnd guess what: in those very years I was building the theater, far away in the heart of the city of Rome, the emperor Trajan was raising a great marble column, carved with the whole course of his conquest of Dacia.\n\nThe same stone, two places, doing one same thing: carving "Rome" into the land, so that it looks natural, rightful, forever so.\n\nThe emperor used marble to turn a bloody conquest into undying "glory."\nI used marble to turn a conquered town into willing "civilization."\n\nOne of us at the tip, one halfway up the slope, but we did the same work: making conquest look not like conquest, but like "progress," "civilization," "order."\n\n(What that same stone is, in the eyes of the one at the very bottom who was conquered and marched off, you will see for yourself when you switch to the pass of a Dacian captive.)\n\nEvery handsome building I paid for is a gift, and also a tool that turns people into Romans, layer by layer. The two cannot be pulled apart.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 我用大理石修罗马式剧场 + 同几年 Trajan 用大理石立功柱刻征服 Dacia + 同一种石头两地干同一件事 (把罗马刻进大地看起来天经地义) + 皇帝把征服变荣耀/我把被征服城变自愿文明 + 桥到 Dacia 奴隶 lens (同一块石头在最底层被掳者眼里) + 「漂亮房子是恩惠也是把人变罗马人的工具分不开」',
      engagementHook: '皇帝用大理石把征服刻成「荣耀」，我用大理石把家乡变成自愿的「文明」——同一种石头，让征服看起来像「进步」。一份真实的恩惠，能不能同时是一件同化的工具？',
      expectsRealAnswer: false,
    },
    {
      id: 'pe-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我说一句你可能没想到的真心话：我并不觉得自己被骗了。\n\n罗马来之前，我的家乡是什么样？小城邦之间常打来打去，没有统一的法律，一场水灾或一场仗，可能让整座城几年缓不过来。\n\n罗马来之后，路通了，盗匪少了，有一套写下来、人人(至少是公民)能援引的法律，城里有了干净的水、像样的澡堂、能看戏的剧场。我的生意做到了帝国的另一头，钱安全地汇得回来。\n\n这些好处是真的。Pax Romana 那个「太平」，对我这样的人，不是空话——它实实在在改善了我的日子。\n\n所以我的处境，比「被骗」复杂得多：我清楚地知道罗马拿走了什么，也清楚地知道罗马给了什么，而且我承认，它给的那些，我是真心想要的。\n\n最难的从来不是「被强迫」。最难的是：你自愿走的那条路，确实给了你想要的东西，可它同时，也在悄悄改写你是谁。',
        en: 'Let me say something true that you might not expect: I do not feel I was deceived.\n\nWhat was my hometown like before Rome came? Small city-states forever warring with one another, no unified law, a flood or a war that could leave a whole town crippled for years.\n\nAfter Rome came, the roads opened, the bandits thinned, there was a written law that anyone (at least any citizen) could invoke, and the town had clean water, decent baths, a theater to watch plays in. My trade reached the other end of the empire, and the money came back safely.\n\nThese benefits are real. The "peace" of the Pax Romana, for someone like me, is no empty word. It truly bettered my days.\n\nSo my situation is far more complicated than "deceived." I know clearly what Rome took, and clearly what Rome gave, and I admit that what it gave, I genuinely wanted.\n\nThe hardest thing was never "being forced." The hardest thing is this: the road you walked willingly really did give you what you wanted, and at the same time, quietly, it was rewriting who you are.',
      },
      deliverGoal: 'N7 story — 「我不觉得被骗」+ 罗马来前家乡 (小城邦常打/无统一法律/一灾难缓不过来) + 罗马来后 (路通/盗匪少/写下来公民能援引的法律/干净水澡堂剧场/生意做到帝国另一头钱安全汇回) + Pax Romana 对我不是空话实在改善日子 + 「比被骗复杂/它给的我真心想要/最难不是被强迫是自愿的路改写你是谁」',
      engagementHook: '我不觉得被骗——罗马给的好处是真的，那些我也真心想要。最难的从来不是被强迫，是你自愿走的路确实给了你想要的，却同时在悄悄改写你是谁。',
      expectsRealAnswer: false,
    },
    {
      id: 'pe-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可这套「大家都是罗马人」的说法，有它够不着的地方。\n\n公民权是给精英的。给我这样有钱、肯合作、有用的人。在我脚下，城里城外还有大批人，根本不在这套交易里：种地的佃农、码头扛活的、还有数量庞大的奴隶。\n\n尤其是奴隶。我的剧场、我的澡堂、我的庄园，能转得起来，靠的是大量被奴役者的劳动。罗马整个经济，就架在奴隶制上——一场场边疆的征服，源源不断地把战俘变成奴隶，运进帝国的市场。\n\n我跟皇帝、跟总督，都能算「罗马人」。可在我家干活、给我盖房子的那些人，他们也活在 Pax Romana 里，却从没被这份「和平」算进去过。\n\n我这个夹在中间的人，往上看，惆怅自己丢了根；往下看，才发现：我惆怅的那点东西，比起脚下那些连「人」都不算的人，根本算不上苦。\n\n（他们的故事，你换到一个 Dacia 战俘那一遍，会亲耳听见。）',
        en: 'But this talk of "we are all Romans" has a place it cannot reach.\n\nCitizenship is for the elite. For people like me, wealthy, willing to cooperate, useful. Below my feet, in the town and beyond, are great numbers of people not in this bargain at all: tenant farmers tilling the land, dockworkers hauling cargo, and a vast number of slaves.\n\nSlaves above all. My theater, my baths, my estate can keep running only on the labor of many enslaved people. Rome\'s whole economy is built on slavery. War after war on the frontier turns captives into slaves without end, shipped into the markets of the empire.\n\nI, and the emperor, and the governor, can all count as "Romans." But the ones who labor in my house and build my buildings, they too live inside the Pax Romana, yet were never counted into this "peace" at all.\n\nI, wedged in the middle, looking up, grieve that I have lost my roots; looking down, I see that the little I grieve over is no hardship at all beside those beneath my feet who do not even count as "people."\n\n(Their story, you will hear for yourself when you switch to the pass of a Dacian captive.)',
      },
      deliverGoal: 'N8 story — 公民权是给精英的 (有钱肯合作有用的人) + 脚下不在交易里的人 (佃农/码头扛活/大批奴隶) + 我的剧场澡堂庄园靠被奴役者劳动 + 罗马经济架在奴隶制上 (边疆征服把战俘变奴隶运进市场) + 他们活在 Pax Romana 却从没被算进去 + 「我往上看惆怅丢根往下看才知我那点惆怅算不上苦」+ 桥到 Dacia 奴隶 lens',
      engagementHook: '我能算「罗马人」，可在我家干活、给我盖房的那些人，活在同一个「罗马和平」里，却从没被算进去过。「大家都是罗马人」这句话，到底是给谁说的？',
      expectsRealAnswer: false,
    },
    {
      id: 'pe-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我活在公元 117 年前后，没能看到后来的事。但罗马这套「把被征服者变成自己人」的本事，影响一直延续了下去。\n\n往后近一百年，到了公元 212 年，一位罗马皇帝下了一道令（史称 Caracalla 的敕令），把罗马公民权给了帝国境内几乎所有的自由人。我祖父那代人想都不敢想的身份，到那时几乎人手一份。\n\n这是罗马留给后世最深的一笔遗产：一个庞大的政治共同体，不靠血统，而靠「认同」和「身份」凝聚——理论上，无论你生在西班牙还是叙利亚，都可以是「罗马人」。\n\n后来很多帝国和国家都学这一手：用一个共同的身份、一套共同的法律和语言，把许多不同的人黏成一个整体。\n\n但我心里清楚一件事，这一手再高明，也始终有它的边界：那道「公民权」的线划得再宽，线外永远站着被它撑起来、却从不被它算进去的人——奴隶。荣耀的圈子越画越大，底座却一直没变。',
        en: 'I lived around the year 117 CE and did not see what came after. But Rome\'s skill of "turning the conquered into its own" carried on.\n\nNearly a century later, in 212 CE, a Roman emperor issued an edict (known as the edict of Caracalla) granting Roman citizenship to almost all free people within the empire. The status my grandfather\'s generation dared not even dream of was, by then, nearly in everyone\'s hand.\n\nThis is the deepest legacy Rome left to later ages: a vast political community held together not by blood but by "belonging" and "status." In theory, whether you were born in Spain or in Syria, you could be a "Roman."\n\nMany later empires and nations copied this move: use one shared identity, one shared law and language, to bind many different peoples into one whole.\n\nBut I know one thing in my heart. However clever this move, it always had its edge: however wide the line of "citizenship" is drawn, outside the line forever stand the ones who hold it up yet are never counted in, the slaves. The circle of glory is drawn wider and wider, but the base beneath it never changed.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Bett 视角延续: 公元 212 Caracalla 敕令把公民权给境内几乎所有自由人 (注明是后来的事) + 罗马最深遗产 (政治共同体靠认同身份不靠血统/生在西班牙叙利亚都可是罗马人) + 后世帝国学这一手 (共同身份法律语言黏合不同人) + 「但公民权线划再宽线外永远站着撑起它却不被算进的奴隶/圈子越大底座没变」',
      engagementHook: '罗马的遗产是：不靠血统，靠「认同」把许多不同的人黏成一个整体——后来很多国家都学这一手。可那道公民权的线划得再宽，线外永远站着撑起它却不被算进去的奴隶。',
      expectsRealAnswer: false,
    },
    {
      id: 'pe-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是文明的受益者，也是文明的搬运工。罗马给了我和平、法律、公民权和一条上升的路；我用我的钱和我的努力，把这些好处也带给了我的家乡，让一座从前小打小闹的城，有了路、有了水、有了像样的生活。我不是受害者，我是这套体系里活得很好、也让别人活得更好的人。\n\n另一种说法：我是被收编的工具，是替征服者擦亮门面的人。罗马不必派多少兵，只要把我这种当地的体面人变成自己人，我就会心甘情愿地，用自己的钱、自己的手，去帮它同化我自己的家乡，去维持一套底下压着无数奴隶的秩序。我越「成功」，这套体系就越稳。\n\n这两边不是「光荣加无奈」。是同一个位置的两面——受益和被收编，本来就是同一桩交易；同一个我。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a beneficiary of civilization, and a carrier of it. Rome gave me peace, law, citizenship, and a road upward; with my money and my effort I brought these benefits to my hometown too, giving a once petty, quarrelsome town roads, water, and a decent life. I am no victim. I am someone who lived well within this system, and helped others live better.\n\nThe other view: I was a co-opted tool, the man who polished the conqueror\'s storefront. Rome needed to send hardly any soldiers; it only had to turn a local man of standing like me into its own, and I would willingly, with my own money and my own hands, help it assimilate my own hometown and uphold an order pressing countless slaves underneath. The more "successful" I was, the steadier that system stood.\n\nThese are not "honor and helplessness." They are two faces of the same position. Benefiting and being co-opted were one and the same bargain from the start. The same me.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (文明受益者+搬运工/罗马给和平法律公民权上升路/我把好处带给家乡/不是受害者活得好也让别人更好) / 另一种说法 (被收编的工具/替征服者擦门面/罗马不必派兵把我变自己人就自愿同化家乡维持压奴隶的秩序/越成功体系越稳) / 受益和被收编同一桩交易 / 想 30 秒',
      engagementHook: '文明的受益者，和被收编的工具——是同一个我，同一桩交易的两面。我越「成功」，那套压着奴隶的体系就越稳。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'pe-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个三代之内从「本地土著」变成「罗马公民」的人——你会怎么评价这样一种「成功」？\n\n罗马没用多少刀，就让我心甘情愿地交出了我是谁，又心甘情愿地去同化我自己的家乡。它给的好处是真的，它拿走的根也是真的，而这两件事是同一桩交易。把它们放在同一个天平上，你怎么称？\n\n不过先记住：你这一遍，听的只是一个被收编、活得不错的中间人。那个站在塔尖、把征服刻成荣耀的皇帝 Trajan，还有那个被这场征服碾到最底下、变成奴隶的人，各有各的说法——换个视角再走一遍，你会听见他们怎么讲这同一个帝国，也会看看你刚才的判断站不站得住。\n\n再想一步。今天你身边，有没有一种「同化」是这样温柔地发生的：为了融入一个更光鲜的圈子，你慢慢改掉自己的口音、爱好、甚至想法，没人逼你，是你自己愿意——可某天你忽然认不出从前的自己了？\n\n那时候，你会怎么办：继续往那个圈子里走，还是停下来想一想，你为这份「成功」，到底交出去了什么？',
        en: 'Having walked my whole life, a man who went from "local native" to "Roman citizen" within three generations, how would you judge such "success"?\n\nRome, with hardly any sword, got me to hand over who I am willingly, and to assimilate my own hometown willingly. What it gave was real, and the roots it took were real too, and the two were one and the same bargain. Put them on the same scale. How do you weigh them?\n\nBut first, remember: this pass, you heard only a co-opted middleman who lived rather well. The emperor Trajan, standing at the tip and carving conquest into glory, and the one ground to the very bottom by that conquest and turned into a slave, each have their own case. Run it again through another lens and you will hear how they tell this same empire, and see whether the judgment you just made still holds.\n\nThen take one more step. In your own life today, is there a kind of "assimilation" happening this gently: to fit into a shinier circle, you slowly drop your accent, your hobbies, even your thoughts, no one forcing you, you doing it willingly, and one day you suddenly cannot recognize your old self?\n\nWhen that happens, what will you do: keep walking into that circle, or stop and think about what, exactly, you have handed over for this "success"?',
      },
      deliverGoal: 'N11 close — 评价成功 (三代从本地土著变罗马公民/心甘情愿交出我是谁又同化家乡/给的真拿走的根也真同一桩交易) + 跨视角指针 ①你只听了一个被收编活得不错的中间人 ②Trajan/Dacia 奴隶各有说法换个视角再走一遍看你判断站不站得住 + transfer「今天你身边温柔发生的同化 (为融入光鲜圈子自愿改掉口音爱好想法某天认不出自己)」+ 你会继续走还是停下想为成功交出了什么',
      engagementHook: '罗马没用多少刀，就让我心甘情愿交出了「我是谁」。今天你身边，有没有一种「同化」正温柔地发生——为了融入更光鲜的圈子，你慢慢改掉自己，没人逼你，可某天忽然认不出从前的自己？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Enslaved Dacian Captive (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var enslavedDacianLens = {
  id: 'enslaved-dacian-receiving-end',
  name: 'A Dacian Taken Captive',
  nameCn: '一个被掳的达契亚人',
  role: 'receiving-end',
  perspectiveTag: 'whose-peace',
  icon: '⛓️',
  description: {
    cn: '一个虚构但典型的达契亚少女：公元 106 年，罗马皇帝 Trajan 攻下她的家乡 Dacia，她的村子被烧，家人被分开，她被锁着押了上千公里，卖到罗马一户人家当奴隶。在罗马城的账本上，她不是人，是一笔财产。她每天端水、烧饭、扫地，从主人的窗口，能望见城中心那根刚立起来的大理石功柱，上面刻着的，正是那场把她变成奴隶的战争，被刻成了罗马的「荣耀」。这一遍，你从罗马那份「和平与伟大」最底下、最沉默的那一层，看公元 117 年的罗马帝国。',
    en: 'A fictional but typical Dacian girl: in 106 CE the Roman emperor Trajan took her homeland of Dacia, her village was burned, her family separated, and she was marched in chains for a thousand kilometers and sold to a household in Rome as a slave. In the ledgers of the city of Rome she is not a person but a piece of property. Each day she carries water, cooks, and sweeps, and from her master\'s window she can see the great marble column newly raised at the city\'s center, on which is carved the very war that made her a slave, carved as the "glory" of Rome. This pass lets you see the Roman Empire of 117 CE from the lowest, most silent layer beneath Rome\'s "peace and greatness."',
  },
  storyboard: [
    {
      id: 'ed-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '从我主人家的窗口，能望见城中心那根新立的大理石柱。\n\n人人都说那柱子气派、了不起，是皇帝的功业。柱子上从下到上盘着一圈一圈的浮雕，刻着一场大战：罗马军团、渡河、烧城、一个国王的死。\n\n罗马人路过它，仰起头，骄傲。\n\n我每次看见它，喉咙就发紧。因为那场被刻成「荣耀」的大战，就是把我从家里拖走、变成奴隶的那场战争。柱子上那些低着头、被押着走的小人影里，有我的同乡，有我的家人。\n\n我没有名字留在罗马的史书上。我是达契亚（Dacia）人，公元 106 年我的家乡被罗马攻下，我被卖到这里。在这家的账本上，我不是人，是一笔财产。\n\n这一遍，你站到我这里来。前面那些人会跟你讲罗马有多伟大、多太平。我只想让你看清一件事：那份「和平」，从来不包括我。',
        en: 'From the window of my master\'s house, I can see the new marble column at the center of the city.\n\nEveryone says that column is grand, magnificent, the achievement of the emperor. From bottom to top it spirals with bands of carved relief, showing a great war: Roman legions, river crossings, towns set afire, the death of a king.\n\nRomans pass it, lift their heads, and feel proud.\n\nEvery time I see it, my throat tightens. Because that great war carved as "glory" is the very war that dragged me from my home and made me a slave. Among those small bowed figures marched away in the carving are my own villagers, my own family.\n\nI have no name left in the histories of Rome. I am a Dacian. In 106 CE my homeland was taken by Rome, and I was sold to this place. In this household\'s ledger I am not a person, I am a piece of property.\n\nThis pass, you come and stand where I stand. The others will tell you how great Rome is, how peaceful. I only want you to see one thing clearly: that "peace" never included me.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 主人家窗口望见城中心功柱 (人人说气派/刻着大战/罗马人仰头骄傲) + 我看见喉咙发紧 (那场荣耀就是把我变奴隶的战争/小人影里有同乡家人) + 我没名字留在史书/Dacia 人/公元 106 家乡被攻下卖来/账本上是财产 + 这一遍从最底层看/那份和平从来不包括我',
      engagementHook: '人人仰头骄傲的那根功柱，刻的正是把我变成奴隶的那场战争。同一根柱子，对罗马人是荣耀，对我是噩梦。你会更愿意相信哪一种「历史」？',
      expectsRealAnswer: false,
    },
    {
      id: 'ed-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我被抓走之前的日子，你才懂后来失去的是什么。\n\n我的家乡 Dacia，在多瑙河北边的山里，今天叫罗马尼亚那一带。我们不是罗马人说的那种「野蛮人」。我们种地、放牧、有自己的王、自己的话、自己拜的神。山里产金子，我们有自己的城和要塞。\n\n我记得家门口的山，记得母亲的声音，记得我们过节时的样子。那是一个完整的、有自己规矩的世界——只不过，它不在罗马的版图里，还没有。\n\n罗马人后来在功柱上，把我们刻成了被征服的背景。可在被征服之前，我们不是谁的背景。我们就是我们自己。\n\n我说这些，不是为了让你可怜我。是因为：罗马的史书只会从「罗马打赢了」那一刻开始讲。可任何一场征服，被征服的那一方，在挨打之前，都有一个完整的、活生生的世界。\n\n那个世界，史书从来不写。我写给你听。',
        en: 'First let me tell you my life before I was taken, so you understand what was later lost.\n\nMy homeland Dacia lay in the mountains north of the Danube, around what is today called Romania. We were not the kind of "barbarians" the Romans speak of. We farmed, we herded, we had our own king, our own tongue, our own gods. The mountains held gold, and we had our own towns and strongholds.\n\nI remember the mountain at our door, my mother\'s voice, the way we looked at festival time. It was a whole world with its own rules, only it was not within Rome\'s map. Not yet.\n\nLater the Romans carved us, on the column, as the background of conquest. But before we were conquered, we were no one\'s background. We were simply ourselves.\n\nI say this not so that you pity me. It is because Rome\'s histories will only begin the story from the moment "Rome won." Yet in any conquest, the side conquered, before the blow fell, had a whole, living world.\n\nThat world the histories never write. I write it for you.',
      },
      deliverGoal: 'N2 setup — 被抓前的日子 (Dacia 多瑙河北山里/今罗马尼亚) + 不是罗马说的野蛮人 (种地放牧/有自己的王话神/山里产金/有城和要塞) + 记得家门口的山母亲声音过节 + 完整有规矩的世界只是不在罗马版图 + 「罗马史书从打赢那刻讲起/可被征服方挨打前有完整活生生的世界/史书不写我写给你听」',
      engagementHook: '罗马的史书只从「罗马打赢了」那刻讲起。可在挨打之前，我们不是谁的背景，我们就是我们自己。那些被征服之前的世界，凭什么不被写进历史？',
      expectsRealAnswer: false,
    },
    {
      id: 'ed-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '战争是怎么来到我们这儿的，我说给你听。\n\n罗马皇帝 Trajan 嫌前几任皇帝花钱买我们的和平是耻辱。他要的是征服。公元 101 年和 105 年，他两次带大军过多瑙河，打进我们的山里。\n\n第二次最惨。公元 106 年，我们的王 Decebalus（德凯巴卢斯）抵抗到最后，城破时自尽，没让罗马活捉他。山里的抵抗被一处处碾平。\n\n那一年，我的村子被烧。男人能打的被杀，剩下的人——女人、孩子、老人——被罗马兵驱赶着集合起来。\n\n（我家人怎么被分开、谁被带去哪，我后来再也没全弄清；我能确定的，是从那天起，我再没见过我母亲。）\n\n罗马的史家后来写：达契亚战争，罗马俘虏了数以万计的人。\n\n「数以万计」——这是史书里的写法。在那四个字里，每一个，都是一个像我一样的人，有家、有名字、有母亲的声音。史书把我们数成一个数字。我想让你记住：数字底下，是一个一个的人。',
        en: 'Let me tell you how the war came to us.\n\nThe Roman emperor Trajan thought it a disgrace that earlier emperors had paid for our peace. What he wanted was conquest. In 101 and 105 CE he led great armies across the Danube twice, into our mountains.\n\nThe second time was the worst. In 106 CE our king Decebalus resisted to the end, and took his own life when his stronghold fell, rather than let Rome capture him alive. The resistance in the mountains was crushed, place by place.\n\nThat year my village was burned. The men who could fight were killed, and the rest of us, women, children, the old, were driven together by Roman soldiers.\n\n(How my family was separated, who was taken where, I never fully learned afterward; what I am sure of is that from that day I never saw my mother again.)\n\nLater the Roman historians wrote: in the Dacian war, Rome took captives by the tens of thousands.\n\n"Tens of thousands," that is how the histories put it. Inside those words, every one was a person like me, with a home, a name, the sound of a mother. The histories count us into a number. I want you to remember: beneath the number are people, one by one.',
      },
      deliverGoal: 'N3 setup — 战争来由 (Trajan 嫌买和平耻辱要征服/101+105 两次大军过多瑙河) + 106 最惨 (Decebalus 抵抗到底城破自尽/山里抵抗被碾平) + 村子被烧 (能打的男人被杀/女人孩子老人被驱赶集合) + anti-fab 括号短句 (家人怎么分开没全弄清/能确定的是再没见过母亲) + 史家写「俘虏数以万计」+ 「数字底下是一个一个的人」',
      engagementHook: '史书写「罗马俘虏数以万计」——四个字里每一个，都是有家、有名字、有母亲声音的人。当苦难被写成一个数字，我们是不是就更容易看不见它了？',
      expectsRealAnswer: false,
    },
    {
      id: 'ed-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n公元 106 年那年，你被锁成一长串，跟着罗马的队伍，从多瑙河边的山里，往南走。\n\n你要走上千公里，一路走到罗马城的奴隶市场。脚上磨出血，倒下的人被丢在路边。你饿，你怕，你不知道家人活着没有。\n\n你脚下踩着的，是一条又宽又平、修得极好的罗马大道。\n\n你忽然懂了一件事，懂得让你心里发冷：罗马人最骄傲的那些大道——商队走、消息传、被夸成「文明」和「太平」的象征——同一条路，此刻正把你，一个被锁住的奴隶，运往拍卖台。\n\n同一条路，对罗马商人是繁荣，对你是通往奴役的传送带。\n\n这一刻你只能往前走，没有别的选择。但你心里那个问题，会跟你一辈子：他们口口声声的「罗马和平」「罗马伟大」——这份伟大，有没有一寸，是为你这样的人准备的？',
        en: 'Now you are me.\n\nIn that year, 106 CE, you are chained into a long line, following the Roman column, walking south out of the mountains by the Danube.\n\nYou must walk a thousand kilometers, all the way to the slave market of the city of Rome. Your feet bleed; those who fall are left at the roadside. You are hungry, you are afraid, you do not know if your family is alive.\n\nWhat you walk on is a wide, level, beautifully made Roman road.\n\nSuddenly you understand a thing that turns you cold inside: the great roads the Romans are proudest of, walked by caravans, carrying news, praised as the symbol of "civilization" and "peace," this same road is at this moment carrying you, a chained slave, toward the auction block.\n\nThe same road is prosperity to a Roman merchant, and to you a conveyor belt into bondage.\n\nIn this moment you can only walk on; there is no other choice. But the question in you will stay your whole life: their endless talk of "Roman peace" and "Roman greatness," is there one inch of that greatness made for someone like you?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 106 年被锁成一长串跟罗马队伍从多瑙河往南走 + 走上千公里到罗马奴隶市场 (脚磨出血/倒下被丢路边/饿怕不知家人死活) + 脚下是修得极好的罗马大道 + 懂得发冷 (罗马最骄傲的大道/被夸成文明太平象征/同一条路正把你运往拍卖台) + 同一条路对商人是繁荣对你是通往奴役的传送带 + 问题跟一辈子: 这份伟大有没有一寸为你这样的人准备',
      engagementHook: '罗马人最骄傲的大道，被夸成「文明」和「太平」的象征——同一条路，此刻正把我这个被锁的奴隶运往拍卖台。他们口里的「罗马伟大」，有没有一寸是为我准备的？',
      expectsRealAnswer: false,
    },
    {
      id: 'ed-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '到了罗马城，我被带上拍卖台。\n\n他们让我站上一个台子，脖子上挂个牌子，写着我从哪来、能干什么。买家围着看，捏我的胳膊，看我的牙，像在挑一头牲口。最后一个有钱人家把我买下，付了钱，我从此是他家的财产。\n\n你得知道我不是特例。罗马城里，每三四个人里，大概就有一个是奴隶。整个意大利，被奴役的人多达上百万。\n\n罗马的一切——盖房子、种庄园、挖矿、当佣人、当老师、当账房，甚至在角斗场里拼命——大量靠的是被奴役的人。罗马这台庞大的机器，是踩在奴隶的肩膀上转的。\n\n而这些奴隶从哪来？很大一部分，正是像我这样，从一场场边疆征服里被掳来的战俘。\n\n所以你看明白了：罗马越是「伟大」，越是不停地征服，就越是不停地，把一车一车的人，变成我这样的财产。它的「巅峰」，需要我们这样的人，源源不断地被运进来。',
        en: 'Reaching the city of Rome, I was brought up onto the auction block.\n\nThey made me stand on a platform, a placard hung at my neck saying where I came from and what I could do. Buyers crowded round, squeezing my arm, checking my teeth, as if picking out a head of livestock. In the end a wealthy household bought me, paid the money, and from then I was their property.\n\nYou should know I was no exception. In the city of Rome, perhaps one in every three or four people was a slave. In all of Italy the enslaved numbered as many as a million and more.\n\nEverything in Rome, building houses, working estates, mining, serving as servants, as teachers, as bookkeepers, even fighting for their lives in the arena, rested in great part on enslaved people. Rome\'s vast machine turned on the shoulders of slaves.\n\nAnd where did these slaves come from? A large part, just like me, were captives taken from war after war on the frontier.\n\nSo you see clearly: the more "great" Rome was, the more endlessly it conquered, the more endlessly it turned cartload after cartload of people into property like me. Its "peak" needed people like us, shipped in without end.',
      },
      deliverGoal: 'N5 story — 罗马城拍卖台 (站台子/脖子挂牌写从哪来能干啥/买家捏胳膊看牙像挑牲口/有钱人家买下成财产) + 不是特例 (罗马城每三四人有一奴隶/全意大利上百万被奴役) + 罗马一切靠奴隶 (盖房种庄园挖矿佣人老师账房角斗场/机器踩奴隶肩膀转) + 奴隶大部分是边疆征服掳来战俘 + 「越伟大越不停征服越把人变财产/巅峰需要我们源源不断运进来」',
      engagementHook: '罗马城每三四个人里就有一个奴隶，整个意大利上百万。罗马越「伟大」、越不停征服，就越不停地把人变成像我这样的财产。它的巅峰，需要我们源源不断地被运进来。',
      expectsRealAnswer: false,
    },
    {
      id: 'ed-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我在主人家干活，端水、烧饭、扫地。日子久了，主人有时让我跟着去城里办事。\n\n就是这样，有一天，我第一次走到了城中心那根大柱子底下。\n\n图拉真纪功柱（Trajan\'s Column），刚立起来没几年。约 30 米高，整根大理石，从底到顶盘着一条不断的浮雕带，刻着征服 Dacia 的两次战争——一格一格，像把那场战争从头到尾讲了一遍。\n\n罗马人站在柱下仰头看，看的是皇帝的丰功伟绩，是罗马的荣耀。\n\n我仰头看，看见的是：我的家乡在燃烧，我的同胞在逃，我的王在死。我看见一队低着头、被绳子串着押走的小人影——那就是我。我们被刻进了石头，可我们是被刻成「战利品」，刻成衬托皇帝伟大的背景。\n\n同一块大理石。一面，是行省精英拿它修剧场、把征服变成「文明」；另一面，是皇帝拿它立柱、把征服变成「荣耀」。\n\n而我，是这块石头真正讲的那个故事里，那个永远没有名字、低着头被押走的人。',
        en: 'I worked in my master\'s house, carrying water, cooking, sweeping. In time, the master would sometimes take me along on errands in the city.\n\nAnd so, one day, for the first time I came to the foot of the great column at the city\'s center.\n\nTrajan\'s Column, raised only a few years before. About 30 meters tall, one whole shaft of marble, spiraling from base to top with an unbroken band of relief, carved with the two wars of the conquest of Dacia, panel by panel, as if telling that war from start to finish.\n\nRomans stand at its foot and look up, and what they see is the emperor\'s great deeds, the glory of Rome.\n\nI look up, and what I see is: my homeland burning, my people fleeing, my king dying. I see a file of small figures, heads bowed, strung on a rope and marched away, and that is me. We were carved into the stone, but we were carved as "spoils," carved as the background that sets off the emperor\'s greatness.\n\nThe same marble. On one side, a provincial elite uses it to build a theater and turn conquest into "civilization." On the other, the emperor uses it to raise a column and turn conquest into "glory."\n\nAnd I am, in the story this stone truly tells, the one forever without a name, head bowed, marched away.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 主人带去城里办事第一次走到功柱下 + 图拉真纪功柱 (约 30 米/整根大理石/螺旋浮雕带刻两次征服 Dacia 战争) + 罗马人仰头看皇帝功业荣耀 + 我仰头看见家乡燃烧同胞逃王死/低头被绳串押走的小人影就是我/被刻成战利品衬托皇帝的背景 + 同一块大理石三方 (行省精英修剧场变文明/皇帝立柱变荣耀/我是石头真正讲的那个没名字被押走的人)',
      engagementHook: '罗马人仰头看见皇帝的荣耀；我仰头看见家乡燃烧、我的王在死、被绳串着押走的那队人里有我。同一块大理石，刻的是同一件事——你信哪一面看见的「历史」？',
      expectsRealAnswer: false,
    },
    {
      id: 'ed-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你大概会想：那罗马法呢？罗马不是号称有一套人人要守、最讲公道的法律吗？\n\n是有。但你得看清，那套法律是怎么看我的。\n\n在罗马法里，我不是「人」（person），我是「物」（一种财产）。主人可以买卖我、出租我、把我送人，可以惩罚我。我生的孩子，一出生就是主人的财产，不是我的。我没有资格结一场法律承认的婚姻，没有资格拥有任何东西。\n\n罗马法的精巧、公道、流传千年——那是对「人」说的。而它做的第一件事，是先把我划到「人」的圈子外面，划成「物」。\n\n这就是我想让你看清的：罗马最值得夸的那些东西——法律、和平、文明——它们都是真的好东西。问题从来不在它们好不好，而在那道线划在哪里：线里面的人，享受文明与和平；线外面的人，是支撑这一切的财产。\n\n我，就在线的外面。',
        en: 'You are probably thinking: but what of Roman law? Does Rome not boast a law that all must keep, the fairest of all?\n\nIt does. But you must see clearly how that law saw me.\n\nIn Roman law I am not a "person." I am a "thing," a kind of property. My master could buy and sell me, rent me out, give me away, and punish me. A child I bore was, from birth, my master\'s property, not mine. I had no right to a marriage the law would recognize, no right to own anything at all.\n\nThe elegance of Roman law, its fairness, its survival for a thousand years, that was spoken to "persons." And the first thing it did was draw me outside the circle of "persons," draw me as a "thing."\n\nThis is what I want you to see clearly: the things Rome is most worth praising, law, peace, civilization, they are all truly good things. The question was never whether they are good. It is where that line is drawn: inside the line, people enjoy civilization and peace; outside the line, people are the property that holds it all up.\n\nI was outside the line.',
      },
      deliverGoal: 'N7 story — 罗马法怎么看我 (法里我不是 person 是物/财产) + 主人可买卖出租送人惩罚我/我生的孩子一出生是主人财产不是我的/无资格法律婚姻无资格拥有任何东西 + 罗马法的精巧公道是对「人」说的/它第一件事先把我划到人的圈外划成物 + 「问题不在罗马的法律和平文明好不好它们真好/在那道线划在哪里/线里享文明线外是支撑一切的财产/我在线外」',
      engagementHook: '罗马法精巧、公道、流传千年——可它做的第一件事，是先把我划到「人」的圈子外面，划成「物」。法律的好坏从来不是问题，问题是那道线划在哪、谁被划在外面。',
      expectsRealAnswer: false,
    },
    {
      id: 'ed-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得跟你说句公道话，免得你把罗马的奴隶想成只有一种命。\n\n罗马的奴隶，命运差得很远。有人在矿里、在庄园里被往死里用，活不了几年。也有人——尤其在城里、在有钱人家——日子没那么惨：当账房、当老师、当医生的奴隶，有的甚至攒下钱，最后被主人放归（叫 manumission，释奴），从奴隶变成自由人。被释放的奴隶，他的孩子甚至能成为罗马公民。\n\n这也是真的。罗马这套，连「往上爬」的口子，都给奴隶留了一条缝。\n\n但你别被这条缝骗了。\n\n第一，能爬出去的是极少数，绝大多数人，一辈子就是财产，死了连名字都不留。\n第二，就算我侥幸被放归、我的孩子成了公民——这恰恰说明罗马多会经营：它连「希望」都能拿来用，让你为了那条缝，乖乖地、卖力地干活，不反抗。\n\n一条窄缝，既是真出路，也是最高明的锁链。这两件事，是同一条缝。',
        en: 'Let me say something fair, so you do not imagine Rome\'s slaves all had one single fate.\n\nThe fates of Rome\'s slaves differed greatly. Some were worked to death in the mines and on the estates, lasting only a few years. Others, especially in the city, in wealthy houses, had it less cruel: slaves who served as bookkeepers, teachers, doctors, some even saved money and were at last freed by their masters (it is called manumission), going from slave to free person. The child of a freed slave could even become a Roman citizen.\n\nThis too is true. Rome\'s system left even a crack for "climbing up," open to a slave.\n\nBut do not be fooled by that crack.\n\nFirst, those who could climb out were a tiny few; the vast majority were property their whole lives, leaving not even a name when they died. Second, even if I were freed by luck and my child became a citizen, that precisely shows how skilled Rome was at managing: it could even put "hope" to use, making you, for the sake of that crack, work hard and obediently, and not revolt.\n\nA narrow crack is both a real way out and the cleverest of chains. Those two are one and the same crack.',
      },
      deliverGoal: 'N8 story — 公道话 (罗马奴隶命运差很远) + 矿里庄园里被往死用活不了几年 vs 城里有钱人家账房老师医生没那么惨/有的攒钱被放归 manumission 释奴变自由人/释奴的孩子能成公民 + 罗马连往上爬口子都给奴隶留条缝 + 别被骗 (①能爬出去极少数大多数一辈子财产死了不留名 ②就算放归恰说明罗马会经营连希望都拿来用让你为那条缝乖乖干活不反抗) + 「窄缝既是真出路也是最高明的锁链同一条缝」',
      engagementHook: '罗马连「往上爬」都给奴隶留了一条缝——少数人真能熬成自由人。可这条缝也让大家为了那点希望，乖乖卖力干活、不反抗。一条窄缝，既是真出路，也是最高明的锁链。',
      expectsRealAnswer: false,
    },
    {
      id: 'ed-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我大概率会在这家干到老、干到死，名字不会留在任何地方。但我想让你看见，我这样的人，并不是没有声音过。\n\n罗马的历史里，被奴役的人不是总沉默。一百多年前，共和国的时候，一个叫 Spartacus（斯巴达克斯）的角斗士奴隶，带着几万奴隶起义，跟罗马军团正面打了两年，最后被镇压，几千人被钉死在大道两旁示众。\n\n（斯巴达克斯是更早、共和国时代的事，不是我这个帝国巅峰的年代——但他证明了一件事。）\n\n他证明了：奴隶不是天生认命的「物」。我们也会反抗，也敢反抗。是罗马的力量太大，把每一次反抗都碾了回去，碾得后人几乎忘了我们曾经反抗过。\n\n所以当你听罗马的史书讲它有多「太平」时，请记得问一句：那份太平里，有多少，是把我们这样的人，连同我们的愤怒和反抗，一起死死压在最底下，才换来的「安静」？\n\n太平，有时候只是反抗被压住后的，那种沉默。',
        en: 'I will most likely work in this house until I am old, until I die, my name left nowhere. But I want you to see that people like me were not always without a voice.\n\nIn Rome\'s history, the enslaved were not always silent. More than a century ago, in the time of the republic, a gladiator slave named Spartacus led tens of thousands of slaves in revolt, fought the Roman legions head-on for two years, and was at last put down, with thousands crucified along the great roads as a warning.\n\n(Spartacus was earlier, of the republic\'s time, not my own age of the empire\'s peak, but he proved one thing.)\n\nHe proved that slaves were no born-resigned "things." We too will resist, and dare to resist. It was that Rome\'s power was too great, crushing every revolt back down, crushing it until later ages all but forgot we had ever resisted at all.\n\nSo when you hear Rome\'s histories tell how "peaceful" it was, please ask one thing: how much of that peace was the "quiet" bought by pressing people like us, along with our anger and our resistance, dead-still to the very bottom?\n\nPeace is sometimes only the silence after resistance has been held down.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 我大概率干到死名字不留 + 被奴役者不是总沉默 + Spartacus 一百多年前共和国时代角斗士奴隶带几万人起义/正面打两年/被镇压几千人钉死大道两旁 + anti-anachronism 括号短句 (斯巴达克斯是更早共和国时代不是帝国巅峰年代/但证明一件事) + 奴隶不是天生认命的物我们也反抗/是罗马力量太大碾回去碾得后人忘了 + 「太平有多少是把我们和愤怒反抗压在最底下换来的安静/太平有时只是反抗被压住后的沉默」',
      engagementHook: '一百多年前斯巴达克斯带几万奴隶起义，证明了我们不是天生认命的「物」——是罗马力量太大，把每次反抗都碾了回去。那份「太平」里，有多少只是反抗被死死压住后的沉默？',
      expectsRealAnswer: false,
    },
    {
      id: 'ed-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看公元 117 年那个「最伟大的罗马」，两种说法都站得住。\n\n一种说法：它就是一台靠征服和奴役喂养的机器。它每一寸「伟大」，都要不停地打仗、不停地把人变成像我这样的财产来维持。它最骄傲的大道，把我运向拍卖台；它最精巧的法律，先把我划成「物」；它最不朽的功柱，把毁掉我家乡的那场战争，刻成了荣耀。它的「和平」，从一开始就没打算把我算进去。\n\n另一种说法：它确实造出了真实的、了不起的东西。它的道路、法律、公民权、近两百年的安定——是真的，而且影响了之后两千年的世界。后来罗马甚至把公民权扩大到几乎所有自由人。它不是只有黑暗，它真的留下了被后人反复借鉴的文明遗产。\n\n两种说法都站得住。它既是一台奴役机器，也是一份真实的文明遗产——而它能成为后者，恰恰是踩着前者。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at that "greatest Rome" of 117 CE. Both views stand.\n\nOne view: it was a machine fed on conquest and slavery. Every inch of its "greatness" had to be kept up by endless war, endlessly turning people into property like me. Its proudest road carried me to the auction block; its most elegant law first drew me as a "thing"; its most undying column carved the war that destroyed my homeland as glory. Its "peace" never meant to count me in from the start.\n\nThe other view: it truly built real, remarkable things. Its roads, its law, its citizenship, its near two centuries of stability, these were real, and shaped the world for two thousand years after. Rome even later widened citizenship to nearly all free people. It was not only darkness; it truly left a heritage of civilization that later ages drew on again and again.\n\nBoth views stand. It was a machine of slavery, and a real heritage of civilization, and the very way it became the latter was by treading on the former.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (靠征服奴役喂养的机器/每寸伟大要不停打仗把人变财产/大道运我去拍卖/法律先划我成物/功柱把毁我家乡的战争刻成荣耀/和平没打算算我进去) / 另一种说法 (确实造出真实了不起的东西/道路法律公民权近两百年安定真的影响两千年/后来公民权扩到几乎所有自由人/不是只有黑暗留下文明遗产) / 两种都站得住既是奴役机器也是文明遗产能成后者恰恰踩着前者 / 想 30 秒',
      engagementHook: '一种说法：它是靠征服和奴役喂养的机器。另一种说法：它真的留下了影响两千年的文明遗产。而它能成为后者，恰恰是踩着前者。两种说法都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'ed-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个被烧掉的村子，一段上千公里的锁链，一个账本上的名字，一根刻着我的苦难当荣耀的柱子——你会怎么评价这样一个「巅峰」？\n\n一个帝国爬到它五百年的最高点，道路、法律、和平样样真实、样样了不起。可它这份伟大，是踩着我这样千千万万被掳为奴、连名字都不留的人，建起来的。你会说它是一台奴役机器，还是一份真实的文明遗产？你怎么评？\n\n不过先记住：你这一遍，听的只是被这份「伟大」碾到最底下的人。那个把帝国推上巅峰的皇帝 Trajan，那个一边受益一边被收编的行省精英，各有各的说法——换个视角再走一遍，你会听见他们怎么讲这同一个帝国，也会看看你刚才的判断站不站得住。你只听了一边。\n\n再想一步。今天你身边，有没有这样的「了不起」：一个光鲜的成绩、一个体面的集体、一份让人羡慕的繁荣——它真的很好，可它好的那一部分，是不是有人被压在底下、被算成「不重要」、连名字都没人记得，才换来的？\n\n那时候，你会只仰头看那根「功柱」，跟着大家一起骄傲，还是会绕到它背面，去看看那些低着头、没有名字、却把整座柱子撑起来的人？',
        en: 'Having walked my whole life, a village burned, a thousand kilometers of chains, a name in a ledger, a column that carves my suffering as glory, how would you judge such a "peak"?\n\nAn empire climbing to the highest point in its five hundred years, its roads, law, and peace all real, all remarkable. Yet this greatness was built by treading on people like me, thousands upon thousands taken into slavery, leaving not even a name. Would you call it a machine of slavery, or a real heritage of civilization? How do you judge it?\n\nBut first, remember: this pass, you heard only the one ground to the very bottom by this "greatness." The emperor Trajan who pushed the empire to its peak, and the provincial elite who both benefited and was co-opted, each have their own case. Run it again through another lens and you will hear how they tell this same empire, and see whether the judgment you just made still holds. You have heard only one side.\n\nThen take one more step. In your own life today, is there a kind of "remarkable" like this: a shining result, a respectable group, an enviable prosperity, it really is good, yet is the good part of it bought by some people pressed underneath, counted as "unimportant," their names remembered by no one?\n\nWhen that happens, will you only look up at that "column" and feel proud with everyone else, or will you go around to its back, and look at the people, heads bowed, without names, who hold the whole column up?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价巅峰 (被烧的村子/上千公里锁链/账本上的名字/把我苦难当荣耀的柱子 → 奴役机器 vs 真实文明遗产) + 跨视角指针 ①你只听了一边 (被碾到最底下的人) ②Trajan/行省精英各有说法换个视角再走一遍看你判断站不站得住 + transfer「今天你身边了不起的成绩/集体/繁荣是不是有人被压在底下算成不重要没人记得名字换来的」+ 你会只仰头看功柱跟大家骄傲还是绕到背面看撑起柱子的没名字的人',
      engagementHook: '走完我这一生，你会怎么评价这样一个巅峰？今天你身边那份「了不起」——它真的很好，可它好的那部分，是不是有人被压在底下、被算成「不重要」换来的？你会只仰头看那根功柱，还是绕到它背面去看撑起它的人？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'trajan':                         trajanLens,
  'provincial-elite':               provincialEliteLens,
  'enslaved-dacian-receiving-end':  enslavedDacianLens,
};

// per AUTHORING_PIPELINE 第 8/Gate3 §6 + receiving-end 优先 pattern:
// 被掳为奴的 Dacia 战俘 + N1 gold-standard hook + N6「同一块大理石」跨 lens 对位 (功柱) + N10/N11 奴役机器 vs 文明遗产 closing
// + default lens N11 含跨视角指针 (①你只听了一边 ②Trajan/行省精英会挑战你的判断换个视角再走一遍) + transfer 到学生生活
export var defaultLens = 'enslaved-dacian-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'roman-empire-peak-117',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'trajan': 30, 'provincial-elite': 28, 'enslaved-dacian-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, multi-faction spec)',
  authoredDate: '2026-05-24',
  notes: [
    '这是 EMPIRE 巅峰 (Pax Romana / Trajan 公元 117 最大版图), 与 sibling roman-republic-fall-44bce (共和国崩溃, 前 509-前 27) 是不同时代/不同人物; Augustus 前 27 已终结共和, 绝不混淆',
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「同一块大理石 / the same marble」一块石头三个方向 (Trajan 立功柱变荣耀 / 行省精英修剧场变文明 / Dacia 奴隶在柱上是没名字被押走的背景)',
    'defaultLens: enslaved-dacian-receiving-end — 受影响者优先 (被掳为奴的 Dacia 战俘 + gold-standard N1 hook + N10/N11 奴役机器 vs 文明遗产 + 跨视角指针)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: Dacia 奴隶/行省精英是 composite 虚构典型 (description 已声明 fictional but typical); 家人分散细节用括号短句标注; Spartacus 用括号短句标注是共和国更早年代非帝国巅峰 (防 anachronism)',
    'cultural ban: 全程罗马真实术语 (罗马皇帝/Augustus/Pax Romana/行省 province/军团 legion/公民权 citizenship/Dacia/Decebalus/Trajan Column/manumission); 绝不用中国概念词 (皇帝中国义/丞相/太子/圣旨/玉玺/翰林)',
    'cross-Topic 锚: 共和 vs 帝国 → roman-republic-fall-44bce; 罗马法/公民权/rule of law → constitutional-convention-1787 + magna-carta-1215',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
