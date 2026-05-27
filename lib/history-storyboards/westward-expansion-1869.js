// ─── Westward Expansion 1869 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 西进运动 · Westward Expansion (post-Civil-War: transcontinental railroad, homestead, Plains nations) 1862-1890
// CA HSS-5.8 / HSS-8.5 西进 · APUSH Period 6 (Topic 6.3 Westward Migration / 6.4 The "New South" & West / 6.6 Conflict in the West)
//
// 3 lens 设计 (per TOPIC_ROADMAP + AUTHORING_PIPELINE 第 8/12 条):
//   - railroad-baron                  (perpetrator-power)  — 一个横贯大陆铁路巨头 / 西进鼓吹者 (Union/Central Pacific 式人物 + 推 Homestead 的扩张派) + 把「进步」当旗号
//   - railroad-worker-or-homesteader  (lonely-mediator)    — 一个修铁路的华工 (Central Pacific) + 一户追免费土地的拓荒家庭; 机器里的普通人
//   - plains-native-receiving-end     (receiving-end)      — 一个 Lakota (拉科塔) 平原民族的人; 土地/野牛/生活方式被摧毁 — DEFAULT
//
// defaultLens = 'plains-native-receiving-end' (受影响者优先: 被「免费土地」+「进步」碾过的一方 + 跨视角「免费土地 / 进步 — 对谁免费, 在谁的土地上」对位)
//
// qaTemplate: multi-faction (铁路公司 + 联邦政府 + 拓荒者 + 华工/爱尔兰工 + 平原民族 + 军队 多势力长跨度)
//
// 跨 lens micro-detail (N6 anchor):
//   「free land / progress — 免费土地 / 进步」一句话三个方向 (核心对位「对谁免费, 在谁的土地上」) —
//   - baron N6: 用「进步」「文明」给夺地正名 — 铁路 + Homestead 把空地变财富 (那地从来不空)
//   - worker N6: 华工 + 拓荒家庭 — 都在「免费 / 机会」的招牌下出力, 也都不是规则的制定者
//   - native N6 (ANCHOR): 同一片「免费土地」是他们世代的家; 野牛被成片打光 (~3000万 → 近零), 不是意外, 部分是蓄意 — 打垮平原民族的活法
//
// 跨 Topic 锚:
//   - 「条约写了, 又一份份毁掉」/ 谁执行规则比规则写什么更重要 → manifest-destiny-1845 (Vallejo 失地 / 条约 ≠ 真保护) — 但本主题是 post-1865 平原/铁路, 不是 1840s 墨西哥割让
//   - 华工是铁路语境 (Central Pacific 劳力), 不是排华法本身 → chinese-exclusion-1882 (1882 那部排华「法律」是另一个 Topic; 这里华工是背景不是焦点)
//   - 「进步 / 文明」做扩张旗号 + 把人算进 / 算不进「我们」→ constitutional-convention-1787 (谁被算进政治共同体)
//
// Anti-fabrication 重点 (per 第 8 条 A + J):
//   - native lens + worker lens 第一人称内心戏用括号短句标注 (虚构的具体姓名 / 家庭细节是叙事补充; 史料确证的是: 1869.5.10 Promontory 接轨 / Homestead 1862 给 160 英亩 / 野牛 ~3000万→1880s 近零 / Little Bighorn 1876 / Wounded Knee 1890 / Dawes 1887)
//   - 无伪造私人引文 / 日记; documented 引文 (如 Sherman / Sheridan 灭牛言论的史学概述) 用学派通称, 不伪造逐字
//
// 数学 + 年代自检:
//   Homestead Act 1862 (160 英亩) / 横贯大陆铁路 1869.5.10 Promontory Summit, Utah 金道钉接轨 / Central Pacific (华工为主, 由西向东) + Union Pacific (爱尔兰工等, 由东向西)
//   野牛 ~3000万 (1800 前后) → 1880s 近灭绝 (部分蓄意, 断平原民族生计) / Little Bighorn 1876.6 (Custer 全军覆没) / Wounded Knee 1890.12 (约 250-300 Lakota 死) / Dawes Act 1887 (拆分保留地为个人份地)
//
// per AUTHORING_PIPELINE.md 11 条铁律 + 第 12 条 (expectsRealAnswer 默认 false / N10 synthesis + N11 closing only true)
//   每 lens 11 nodes / 220-380 CN chars (anchor N6 + synthesis N10/N11 可到 ~550) / cultural ban 非中国史用 real terms / §8 中国部分(narrative)才用中国词 (晚清 / 洋务运动)
// 4-agent review (TBD): 7thgrader (小 U) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Railroad Baron / Expansion Booster (perpetrator-power)
// ═══════════════════════════════════════════════════════════════════════

export var railroadBaronLens = {
  id: 'railroad-baron',
  name: 'Railroad Baron',
  nameCn: '铁路巨头',
  role: 'perpetrator-power',
  perspectiveTag: 'transcontinental-magnate',
  icon: '🚂',
  description: {
    cn: '他是一个修横贯大陆铁路的大老板（合成人物，代表那一代真实存在的几位铁路巨头）。1869 年 5 月 10 日，他站在犹他州一片荒地上，看一根金道钉砸下去，把东西两段铁轨接成一条。他相信这一锤把刚打完内战、差点散掉的国家重新缝成了一个。这一遍让你从他这里看，他嘴上一直说的「空地」「免费土地」「文明」这几个词，每一个都压着另一群人的命，而他自己也越来越分不清账本上的数字和那套漂亮说辞。',
    en: 'He is the boss of a transcontinental railroad (a composite person, standing for the real handful of railroad magnates of that generation), and on 10 May 1869 he stood on a stretch of empty ground in Utah and watched a golden spike come down, joining the eastern and western halves of track into one line. He believes that one blow stitched back into one a country that had just fought a civil war and nearly come apart. This pass lets you watch him from inside as the federal payments come by the mile and the land along the route is his to sell, so the faster and longer he builds, the more he takes, and the words on his lips, "empty land," "free land," "civilization," each press down on another people\'s lives, while he himself can less and less tell the numbers in his ledger from his own fine speech.',
  },
  storyboard: [
    {
      id: 'rb-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1869 年 5 月 10 日，犹他州一个叫 Promontory Summit 的荒地。两条铁轨从东西两头修过来，今天在这里碰头。\n\n有人递上一根金子做的道钉。锤子落下，电报「咔」一声打向全国：成了。从大西洋到太平洋，第一次有一条铁轨连通。一封电报，瞬间传遍整个国家。\n\n我是这件事背后的人之一。我是修铁路、推西进的大老板。在我眼里，这一锤不只是接两段铁轨——它把一个刚打完内战、差点散掉的国家，重新缝成了一个。\n\n这一遍，你坐进我这个位置。你会看到一项工程多么了不起，也会慢慢看见：这条线缝起了一个国家，也压垮了别的东西。这两件事，是同一锤砸下去的。',
        en: 'May 10, 1869, a stretch of empty ground in Utah called Promontory Summit. Two lines of rail had been built toward each other from east and west, and today they met here.\n\nSomeone handed up a spike made of gold. The hammer came down, and the telegraph clicked out across the nation: done. From the Atlantic to the Pacific, for the first time a line of rail ran unbroken. A single telegram swept the whole country in an instant.\n\nI am one of the men behind it. I am a boss of railroad-building and a pusher of westward expansion. In my eyes, that one blow of the hammer was not only the joining of two stretches of track. It stitched back into one a country that had just fought a civil war and nearly come apart.\n\nThis pass puts you in my seat. You will see how magnificent a work this is, and you will slowly see this too: the line stitched a country together, and it crushed something else. Both came from the same blow of the hammer.',
      },
      deliverGoal: 'N1 hook — 1869.5.10 Promontory Summit, Utah 金道钉接轨 + 电报传全国 + baron 自我介绍 (修铁路推西进的大老板) + 把刚打完内战的国家重新缝起来 + 这一遍视角设定 (工程了不起 + 缝起国家也压垮别的 = 同一锤)',
      engagementHook: '一锤下去，一个刚打完内战的国家被一条铁轨缝起来——可同一锤也压垮了别的东西。「了不起的成就」和「压在别人身上的代价」，能分得开吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我们为什么这么急着修这条铁路。\n\n1865 年，南北内战刚打完。这场仗死了几十万人，国家差点裂成两半。打完了，所有人都在问：怎么让这个国家重新像一个国家？\n\n我的答案是：把它连起来。当时从东岸去加州，要么坐几个月的船绕过整个南美洲，要么坐马车横穿一整片荒野，路上可能丢命。东西两半像两个国家。\n\n更早，1862 年，国会通过了两条法律。一条叫 Pacific Railway Act（太平洋铁路法），授权修这条横贯大陆的铁路，给公司钱、还给沿线大片土地。另一条叫 Homestead Act（宅地法）：任何人，只要去西部一块地上住满五年、把它种起来，就能免费拿到 160 英亩。\n\n你看出我们的算盘了吗？铁路把人运到西部，宅地法给人理由去西部。两条法律咬在一起——把整片大陆，变成可以卖、可以住、可以赚钱的地方。',
        en: 'First, why we were in such a hurry to build this railroad.\n\nIn 1865 the Civil War had just ended. That war killed hundreds of thousands and nearly split the country in two. When it was over, everyone was asking: how do we make this country feel like one country again?\n\nMy answer was: connect it. Back then, to go from the East Coast to California you either sailed for months around the whole of South America, or crossed an entire wilderness by wagon and risked your life on the way. The two halves were like two separate countries.\n\nEarlier, in 1862, Congress had passed two laws. One was the Pacific Railway Act, authorizing the transcontinental railroad, giving the companies money and huge tracts of land along the route. The other was the Homestead Act: anyone who lived on a plot of western land for five years and farmed it could get 160 acres free.\n\nDo you see our plan? The railroad carried people west, and the Homestead Act gave people a reason to go west. The two laws locked together to turn a whole continent into something that could be sold, settled, and made to pay.',
      },
      deliverGoal: 'N2 setup — 内战 1865 后重连国家动机 + 东西像两个国家 (绕南美 / 横穿荒野) + 1862 Pacific Railway Act (给钱给沿线土地) + 1862 Homestead Act (住满 5 年种起来免费 160 英亩) + 两法咬合把大陆变可卖可住可赚的地方',
      engagementHook: '一条法律把人运到西部，另一条给人免费的地当理由——两条法律咬在一起，把整片大陆变成可以卖钱的地方。这听起来像「机会」，还是像「圈地」？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我得让你明白，我不觉得自己在做坏事。当时几乎所有体面人，都觉得我们在做一件高尚的事。\n\n那个年代有一句话挂在每个人嘴边：把「文明」和「进步」带到西部去。在我们的讲法里，西部是一片荒凉的「空地」——没有铁路、没有农场、没有城镇，浪费在那儿。我们要做的，是把它「填满」：铁轨、麦田、教堂、学校。\n\n报纸把铁路工人画成英雄，把拓荒农民画成把荒野变花园的勇士。讲台上的人说：上天要美国人去占据并开发这整片大陆。这是我们配得上的命运。\n\n你听出问题了吗？「空地」这两个字，是整套说法的地基。只要那地是空的，我们做的一切就都是「开发」，不是「夺取」。\n\n所以请你记住「空地」这个词。这一遍后面，你会看到它到底是不是真的。',
        en: 'I need you to understand: I did not think I was doing wrong. At the time nearly every respectable person thought we were doing something noble.\n\nThere was a phrase on everyone\'s lips in those years: bring "civilization" and "progress" to the West. In our telling, the West was a desolate "empty land," no railroads, no farms, no towns, wasted out there. What we set out to do was "fill it up": rails, wheat fields, churches, schools.\n\nNewspapers drew the railroad workers as heroes and the homesteading farmers as brave men turning wilderness into garden. Men at the pulpit said: Providence meant for Americans to occupy and develop this whole continent. This was a destiny we deserved.\n\nDo you hear the trouble? The two words "empty land" are the foundation of the whole story. As long as the land was empty, everything we did was "development," not "taking."\n\nSo please remember the word "empty." Later in this pass, you will see whether it was really true.',
      },
      deliverGoal: 'N3 setup — baron 不觉得作恶 + 时代「文明 / 进步」旗号 + 西部=「空地」叙事 (没铁路农场城镇=浪费/要填满) + 报纸把工人农民画英雄 + 「空地」是整套说法的地基 (空的→开发不是夺取) + 埋词「空地」后面验真假',
      engagementHook: '只要那地是「空」的，我们做的一切就都是「开发」，不是「夺取」。一个词——「空地」——就能把抢变成建。一个词的力量，能有多大？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你手里攥着两样东西：联邦给你的钱，和沿铁路两侧大片大片的土地。修一英里铁轨，政府按里程给钱；铁路修到哪，沿线的地就归你卖。\n\n这意味着什么？你修得越快，越长，拿得越多。所以你疯狂赶工。你雇了上万工人——加州这边主要是华工，从太平洋往东修；另一头主要是爱尔兰移民等，从东往西修。两支队伍朝对方冲。\n\n工人在零下的山里凿隧道，在沙漠里铺轨，工伤、雪崩、爆破事故，死了不少人。你给的工钱很低，华工拿得比白人工人还少。\n\n你心里清楚：你不是在做慈善。你是在做这辈子最大的一笔生意。\n\n这一刻你得想：你嘴上说的「把文明带给国家」，和你账本上算的「每英里能拿多少地和钱」——这两件事，在你身上，到底哪个是真的？还是说，你早就分不清了？',
        en: 'Now you are me.\n\nYou hold two things in your hands: the money the federal government gave you, and broad tracts of land along both sides of the railroad. For every mile of track laid, the government paid by the mile; wherever the railroad reached, the land along it was yours to sell.\n\nWhat does that mean? The faster and longer you build, the more you take. So you drove the work like a madman. You hired tens of thousands of workers, on the California side mostly Chinese laborers building east from the Pacific, on the other end mostly Irish immigrants and others building west, the two crews racing toward each other.\n\nWorkers tunneled through subzero mountains and laid track across deserts; injuries, avalanches, blasting accidents killed many of them. The wages you paid were low, and the Chinese workers got even less than the white ones.\n\nYou know it in your gut: you are not doing charity. You are doing the biggest deal of your life.\n\nSo here you must ask yourself: what you say with your mouth, "bring civilization to the country," and what you tally in your ledger, "how much land and money per mile," which of those two is the real one? Or have you long since lost the ability to tell them apart?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 联邦给钱 + 沿线大片土地 (按里程给钱/沿线地归卖) → 修越快越长拿越多 + 上万工人 (华工由西向东/爱尔兰等由东向西对冲) + 低工钱华工更少 + 工伤雪崩死人 + 自我拷问: 「带文明」vs 账本「每英里拿多少」哪个真',
      engagementHook: '你嘴上说「把文明带给国家」，账本上算「每英里能拿多少地和钱」——这两件事在你身上哪个是真的？还是你早就分不清了？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1869 年 5 月 10 日，金道钉砸下去那一刻，我是真的激动。\n\n你得理解那有多了不起。横穿一整片大陆的铁路，全世界没人做过。它把从东岸到加州的几个月路程，压缩成几天。它让货物、人、邮件、消息，第一次能横着流过整片大陆。\n\n这之后，西部炸开了。城镇沿着铁路一个接一个冒出来——铁路停在哪，哪就长出一座城。农民拿着宅地法的地契坐火车来，一户接一户。芝加哥靠铁路变成全国的肉食和粮食中心。整个国家的经济，被这条铁轨重新拼了一遍。\n\n这些都是真的。这是真实的、巨大的成就。我不打算假装谦虚。\n\n但你别走开。因为有一件事，金道钉的庆典上没人提：这条线铺过去的每一英里，都铺在某些人世世代代生活的土地上。下面那一段，比庆典难看得多。\n\n（那地原来是谁的，住着谁，你换到他们那一遍，会亲眼看见。）',
        en: 'On May 10, 1869, the moment the golden spike came down, I truly was moved.\n\nYou have to understand how extraordinary it was. A railroad across an entire continent, no one in the world had done it. It compressed the months-long journey from the East Coast to California into a few days. It let goods, people, mail, and news flow crosswise over the whole continent for the first time.\n\nAfter this, the West exploded. Towns sprang up along the rails one after another, wherever the railroad stopped, a town grew. Farmers came by train with their homestead deeds, household after household. Chicago became the nation\'s center for meat and grain on the strength of the rails. The whole country\'s economy was reassembled around this one line.\n\nAll of this is true. It is a real and enormous achievement. I will not pretend to be modest.\n\nBut do not walk away. Because there is one thing no one mentioned at the golden-spike celebration: every mile this line was laid, it was laid on land where some people had lived for generation upon generation. The part below is far uglier than the celebration.\n\n(Whose land it was, and who lived there, you will see for yourself when you switch to their pass.)',
      },
      deliverGoal: 'N5 story — 1869.5.10 金道钉激动 + 工程之巨 (全世界没人做过/几个月→几天/货物人邮件横流) + 西部炸开 (铁路停哪长一座城/农民坐火车来/芝加哥成肉粮中心/经济重拼) + 这些是真实成就不假谦虚 + 但每英里铺在某些人世代生活的地上 + 桥到 native lens',
      engagementHook: '横穿大陆的铁路，全世界没人做过——这是真实的巨大成就。可它铺过去的每一英里，都在某些人世代生活的土地上。一件了不起的事，能不能同时是一件残忍的事？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在我必须说一件，我当年很少正眼看的事。\n\n我说西部是「空地」。可大平原上，住着一个个民族——Lakota（拉科塔）、Cheyenne（夏延）这些平原民族。他们已经在那儿生活了很久很久。那地不空。从来不空。\n\n他们靠什么活？野牛（bison）。这片大平原上原本有大约三千万头野牛。平原民族吃野牛肉、用牛皮做帐篷和衣服、用牛骨做工具——整套生活方式，建在野牛身上。\n\n然后发生了一件事，到今天我都不愿细想。随着铁路推进、白人猎手涌入，野牛被成片成片地打光。几十年里，三千万头降到近乎零。\n\n更难听的是：这不全是意外。当时有军方的人公开说过类似的话——杀光野牛，就能逼平原民族投降。打垮一个民族，不一定靠打仗，断了他们赖以为生的东西就够了。\n\n所以你看：我说的「免费土地」「进步」，对我是免费的，是进步。可那片地，本是别人世代的家；那「进步」，是踩着另一群人的整个活法过去的。同一片土地——对我是机会，对他们是被连根拔起。免费——免的是谁的费？',
        en: 'Now I must say something I rarely looked at squarely back then.\n\nI called the West "empty land." But across the Great Plains lived nations, the Lakota, the Cheyenne, and others, the Plains nations. They had lived there for a very, very long time. That land was not empty. It was never empty.\n\nWhat did they live on? The bison. There had been roughly thirty million bison on these plains. The Plains nations ate the bison\'s meat, made their lodges and clothing from its hide, made tools from its bones, an entire way of life built on the bison.\n\nThen something happened that I still do not like to dwell on. As the railroad pushed forward and white hunters poured in, the bison were shot down in great swaths. In a few decades, thirty million fell to nearly zero.\n\nUglier still: it was not all an accident. Men in the army said as much openly at the time, kill off the bison and you can force the Plains nations to surrender. You do not always break a people by fighting them. Cut off the thing they live on, and that is enough.\n\nSo you see: the "free land" and "progress" I spoke of, free to me, progress for me. But that land was someone\'s home for generations; that "progress" walked right over another people\'s entire way of living. The same land, opportunity to me, torn up by the roots to them. Free, free at whose cost?',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 「空地」是谎: 大平原住 Lakota/Cheyenne 平原民族 (住很久那地不空) + 野牛 ~3000万 整套生活方式建在野牛身上 + 随铁路+白人猎手 野牛打光 ~3000万→近零 + 不全意外 (军方公开说杀牛逼投降/断生计) + 核心对位「免费土地/进步 — 对我免费对他们连根拔起 / 免的是谁的费」',
      engagementHook: '我说的「免费土地」「进步」——对我是免费、是进步；可那地是别人世代的家，那进步踩着另一群人的整个活法过去。「免费」——免的到底是谁的费？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '土地从平原民族手里拿过来，靠的不只是野牛和铁路。还有一整套规则。\n\n联邦政府一份份地跟平原民族签条约：这块地永远归你们，白人不许进。可只要那地上发现了金子、或者铁路要从那儿过，条约说毁就毁。一份签了，过几年又改、又缩、又作废。条约一份份地破。\n\n他们反抗过。1876 年，在一个叫 Little Bighorn（小大角河）的地方，Lakota 和 Cheyenne 的战士打了一场漂亮的胜仗，把美军一个叫 Custer 的指挥官和他的部队全歼。那是平原民族最响亮的一次胜利。\n\n可一次胜仗改不了大局。军队源源不断地来，野牛没了，他们的人挨饿。最后大多数平原民族被赶进保留地（reservation）——划定的、缩小的、贫瘠的地块，由政府管着。\n\n你听我的语气。我在讲一件我这边「赢了」的事。可越往下讲，「赢」这个字越说不出口。',
        en: 'Taking the land from the Plains nations took more than bison and rails. It took a whole set of rules.\n\nThe federal government signed treaty after treaty with the Plains nations: this land is yours forever, no white man may enter. But the moment gold was found on that land, or a railroad wanted to pass through it, the treaty was broken on command. One was signed, and a few years later it was altered, shrunk, voided. Treaty after treaty broken.\n\nThey fought back. In 1876, at a place called Little Bighorn, the warriors of the Lakota and the Cheyenne won a brilliant victory, wiping out a U.S. commander named Custer and his entire force. It was the Plains nations\' loudest victory.\n\nBut one won battle could not change the larger picture. The army kept coming, the bison were gone, their people were starving. In the end most of the Plains nations were driven onto reservations, marked-out, shrunken, barren plots of land, managed by the government.\n\nListen to my tone. I am telling you about something my side "won." But the further down I go, the harder the word "win" is to say.',
      },
      deliverGoal: 'N7 story — 拿地靠整套规则: 一份份条约 (这地永远归你们) + 发现金子/铁路要过就说毁就毁 (条约一份份破) + 1876 Little Bighorn Lakota+Cheyenne 全歼 Custer (最响亮胜利) + 一次胜仗改不了大局 (军队不断来/野牛没了/挨饿) + 赶进 reservation (缩小贫瘠政府管) + 「赢」越说越说不出口',
      engagementHook: '我们一份份跟他们签条约「这地永远归你们」，又一份份在发现金子时撕掉。一个连自己签的字都不算数的赢家——这还算赢吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '赶进保留地之后，还有最后一步。这一步，是用「为你们好」的名义做的。\n\n1887 年，国会通过 Dawes Act（道斯法）。表面上很「善意」：把保留地这种大家共有的土地，拆成一块块，分给每个原住民家庭一份，让他们学白人那样，一家一户种地、当个体农民。\n\n听起来像帮他们融入，对吧？可真正的效果是：分完每家那一份之后，剩下的大片「多余」土地，被拿出来卖给白人定居者和公司。几十年里，原住民手里的土地又少掉一大块。\n\n而且这一刀，砍的是平原民族整套生活方式的根。他们的活法本就是部落共同体——共有土地、跟着野牛迁徙。Dawes Act 要他们变成一家一户的私人农民，等于从里到外把他们拆开。\n\n你看出这套路了吗？先用枪和饥饿把人逼进保留地，再用一部「为你们好」的法律，把保留地也拆开拿走。每一步，都有一个体面的名字。',
        en: 'After they were driven onto reservations, there was one last step. This one was done in the name of "for your own good."\n\nIn 1887 Congress passed the Dawes Act. On its face it looked benevolent: take reservation land, which was held in common, and break it into plots, giving each Native family a share, so they could learn to farm one household at a time, like white men, as individual farmers.\n\nSounds like helping them fit in, doesn\'t it? But the real effect was this: after each family\'s share was parceled out, the large "surplus" of land left over was put up for sale to white settlers and companies. Over a few decades, the land in Native hands shrank by another huge piece.\n\nAnd this cut struck at the root of the Plains nations\' whole way of life. Their way was the tribal community, land held in common, following the bison in their migration. The Dawes Act wanted to make them single-household private farmers, which was to take them apart from the inside out.\n\nDo you see the pattern? First you drive people onto reservations with guns and hunger, then with a law "for their own good" you break the reservations apart and take those too. Every step has a respectable name.',
      },
      deliverGoal: 'N8 story — Dawes Act 1887 表面善意 (拆共有保留地为个人份地/学白人一家一户种地) + 真效果 (分完剩「多余」土地卖给白人定居者公司/原住民地又少一大块) + 砍部落共同体活法的根 (共有土地/跟野牛迁徙→变私人农民=从里拆开) + 套路 (枪+饥饿逼进保留地→「为你们好」的法律再拆走/每步都有体面名字)',
      engagementHook: '先用枪和饥饿把人逼进保留地，再用一部「为你们好」的法律把保留地也拆开拿走——每一步都有一个体面的名字。最危险的伤害，是不是常常裹着「为你好」？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '故事的结尾，发生在 1890 年冬天，一个叫 Wounded Knee（伤膝河）的地方。\n\n那时野牛没了，平原民族被关在保留地里，挨饿、绝望。一种叫「鬼舞」（Ghost Dance）的信仰在他们中间传开：跳这个舞，他们相信死去的亲人会回来，野牛会回来，白人会退去。这只是一群走投无路的人，在抓最后一根稻草。\n\n政府却把它当成要造反的危险。1890 年 12 月，军队包围了一群 Lakota，在缴枪时枪响了。结果是一场屠杀，约两三百个 Lakota 死在那里，很多是妇女和孩子。\n\nWounded Knee 之后，平原上有组织的抵抗基本结束了。同一年，政府宣布：美国的「边疆」（frontier）关闭了，再没有「未开发」的西部。\n\n你听我把这条线从头讲到尾：1869 一根金道钉，1890 一场伤膝河的屠杀。我那条把国家缝起来的铁路，和这片大陆上一整套生活方式的终结，是同一段历史。我，是这段历史的赢家那一边。',
        en: 'The end of the story comes in the winter of 1890, at a place called Wounded Knee.\n\nBy then the bison were gone, the Plains nations were penned on reservations, starving and in despair. A faith called the Ghost Dance had spread among them, dance this dance, they believed, and the dead would return, the bison would return, the white men would withdraw. It was only people with nowhere left to turn, grasping at a last straw.\n\nThe government treated it as the danger of a coming revolt. In December 1890 the army surrounded a band of Lakota, and as they were being disarmed a gun went off. What followed was a massacre, some two to three hundred Lakota died there, many of them women and children.\n\nAfter Wounded Knee, organized resistance on the plains was essentially over. That same year the government declared that America\'s "frontier" was closed, there was no more "undeveloped" West.\n\nListen to me carry this line from beginning to end: 1869, a golden spike; 1890, a massacre at Wounded Knee. My railroad that stitched a country together, and the end of an entire way of life on this continent, are the same stretch of history. And I am on the winners\' side of it.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Wounded Knee 1890.12 (野牛没了/关保留地挨饿绝望 + Ghost Dance 鬼舞最后稻草 + 政府当造反/缴枪枪响/屠杀约两三百死多妇孺) + 之后有组织抵抗基本结束 + 同年宣布 frontier 关闭 (无未开发西部) + 1869 金道钉↔1890 屠杀同一段历史 + baron 是赢家那边',
      engagementHook: '1869 一根金道钉，1890 一场伤膝河的屠杀——我缝起国家的铁路，和一整套生活方式的终结，是同一段历史。一段历史能不能既是「连接」又是「毁灭」？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是把国家建起来的人。我修出全世界第一条横贯大陆的铁路，把一个刚打完内战、差点散掉的国家重新缝成一个。我让千千万万普通人——拓荒农民、移民工人——有了去西部、改写自家命运的机会。城镇、农田、工业，沿着我的铁轨长出来。没有我们这种人，这个国家走不到今天。\n\n另一种说法：我是制度性摧毁的赢家。我用「空地」「进步」「文明」这些好词，给一件事正名——夺走平原民族世代的土地，纵容把三千万头野牛打到近零，看着一份份条约被撕毁、一个个民族被赶进保留地、最后死在伤膝河。我修铁路赚的钱，和他们失去的一切，是同一笔账的两头。\n\n这两边不是「功劳加污点」。是同一项工程的两面——同一根金道钉，缝起一个国家，也砸碎了另一群人的世界。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a man who built the country. I built the world\'s first transcontinental railroad and stitched back into one a nation that had just fought a civil war and nearly come apart. I gave countless ordinary people, homesteading farmers, immigrant workers, the chance to go west and rewrite their own fortunes. Towns, farmland, industry grew along my rails. Without men like us, this country does not reach where it is today.\n\nThe other view: I was the winner of an institutional destruction. I used fine words, "empty land," "progress," "civilization," to justify one thing: taking the Plains nations\' land of generations, allowing thirty million bison to be shot down to nearly zero, watching treaty after treaty torn up, nation after nation driven onto reservations, and at last dead at Wounded Knee. The money I made building the railroad and everything they lost are two ends of the same ledger.\n\nThese are not "credit and a stain." They are two faces of the same work, the same golden spike that stitched a country together also shattered another people\'s world.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (建国的人/全球首条横贯铁路/缝起内战后国家/给普通人去西部改命机会/城镇农田工业沿铁轨长) / 另一种说法 (制度性摧毁的赢家/「空地进步文明」给夺地正名/野牛近零/条约撕毁/赶进保留地/伤膝河/赚的钱与他们失去的是同一笔账两头) / 同一项工程两面同一根金道钉 / 想 30 秒',
      engagementHook: '建国的人，和制度性摧毁的赢家——是同一个我，同一根金道钉缝起一个国家也砸碎另一群人的世界。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'rb-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个开端？\n\n一条把国家缝成一体的铁路，和一整套生活方式的终结，装在同一段历史里。一边是真实的、改变世界的成就，一边是踩着另一群人整个活法过去的代价。这两件事不是先后发生的两章，是同一根金道钉砸下去的同一下。放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有人用一个好听的词——「升级」「改造」「为大家好」「更高效」——去做一件其实让某些人吃了大亏的事？那个词，是不是也像我的「空地」「进步」一样，把代价藏了起来？\n\n那时候，你会跟着那个好听的词一起喊，还是会停下来问一句：这件事「免费」「进步」——对谁免费？谁在付这个费？',
        en: 'Having walked my whole life, how would you judge a beginning like this?\n\nA railroad that stitched a country into one, and the end of an entire way of life, held inside the same stretch of history. On one side a real, world-changing achievement; on the other, a cost paid by walking right over another people\'s whole way of living. These are not two chapters one after the other, they are the same single blow of the same golden spike. Put them on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there someone using a fine-sounding word, "upgrade," "reform," "for everyone\'s good," "more efficient," to do a thing that in fact costs certain people dearly? Does that word, like my "empty land" and "progress," hide the cost?\n\nWhen that happens, will you chant along with the fine-sounding word, or will you stop and ask: this thing that is "free," that is "progress," free for whom? Who is paying the cost?',
      },
      deliverGoal: 'N11 close — 评价开端 (缝成一体的铁路 vs 一整套生活方式终结同一段历史/世界级成就 vs 踩着别人活法的代价/同一根金道钉同一下) + transfer「今天你身边有人用好听的词 (升级/改造/为大家好/更高效) 做让某些人吃亏的事/那词像不像我的空地进步藏了代价」+ 你会跟着喊还是停下问「免费/进步 — 对谁免费谁付费」',
      engagementHook: '一边是改变世界的成就，一边是踩着别人整个活法的代价，装在同一段历史里。你会怎么评价这样一个开端？今天你身边那个用「为大家好」藏起代价的词，你会跟着喊，还是停下来问一句「对谁好」？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Railroad Worker / Homesteader (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var workerHomesteaderLens = {
  id: 'railroad-worker-or-homesteader',
  name: 'Railroad Worker / Homesteader',
  nameCn: '铁路工人 / 拓荒者',
  role: 'lonely-mediator',
  perspectiveTag: 'inside-the-machine',
  icon: '⚒️',
  description: {
    cn: '他是两双手合到一起的人（合成视角，把两类真实存在的普通人放进一个声音里）：一双手在加州一座结冰的高山里凿隧道，是从大洋彼岸来的华工；另一双手攥着地契和犁，是坐火车来追宅地法承诺的 160 英亩免费地的拓荒户。两双手都在「机会」「免费」这几个字底下出力，也都不是定规则的人。这一遍让你站在他这个不上不下的位置，他要诚实回答：他到底是受害者，还是那只夺地的手的一部分。',
    en: 'He is a person of two pairs of hands joined into one (a composite voice, putting two kinds of real ordinary people into a single speaker): one pair grips chisel and fuse in a frozen California mountain, a Chinese laborer who crossed the ocean to build the railroad; the other grips a land deed and a plow, a homesteader who came by train chasing the 160 acres the Homestead Act promised. Both pairs labor under the words "opportunity" and "free," and neither made the rules. This pass puts you in his in-between seat: he is at once exploited and beneficiary, neither the biggest winner nor the worst loser, and he must answer honestly, am I a victim, or am I also part of the hand that took the land.',
  },
  storyboard: [
    {
      id: 'wh-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我有两双手要让你看。\n\n一双，握着凿子和炸药引信，在加州一座结冰的高山里，一寸一寸往岩壁里掏隧道。这双手是我的——一个从大洋彼岸来加州修铁路的华工。\n\n另一双，攥着一张地契和一把犁，在大草原上，对着一片到处望不到边的草地。这双手是另一个我——一户坐着火车来这里、想拿到 160 英亩免费土地的拓荒人。\n\n我们俩，一个修铁路，一个种荒地，看起来八竿子打不着。可我们都在同一句话底下出力：来吧，这里有机会，这里有免费的地。\n\n这一遍，你不是发号施令的大老板，也不是被连根拔起的平原民族。你站在中间——你是这台大机器里的一颗螺丝。你出了力，也得了一点东西，可这条线怎么修、修到谁头上，从来不是你说了算。',
        en: 'I have two pairs of hands to show you.\n\nOne grips a chisel and a blasting fuse, hollowing out a tunnel inch by inch through a frozen mountain in California. These hands are mine, a Chinese laborer who came across the ocean to California to build the railroad.\n\nThe other grips a land deed and a plow, facing a prairie of grass with no edge in sight. These hands are another me, a homesteader who came here by train, hoping to claim 160 acres of free land.\n\nThe two of us, one building rail, one breaking sod, seem to have nothing to do with each other. But we put out our labor under the same line: come, there is opportunity here, there is free land here.\n\nThis pass, you are not the boss giving orders, nor the Plains nations torn up by the roots. You stand in the middle, you are a bolt in this great machine. You put out your labor and you got a little something, but how this line gets built, and onto whom, was never yours to decide.',
      },
      deliverGoal: 'N1 hook — 两双手 (华工凿子+炸药引信凿冰山隧道 / 拓荒人地契+犁对望不到边草地) + 一个修铁路一个种荒地八竿子打不着 + 都在「机会/免费的地」一句话下出力 + 这一遍中间位置 (不是大老板不是被连根拔起的平原民族/机器里一颗螺丝/出力得一点但怎么修修到谁不是你说了算)',
      engagementHook: '我是这台大机器里的一颗螺丝——出了力，得了一点，可怎么修、修到谁头上，从来不是我说了算。在一件大事里只是「一颗螺丝」，是什么滋味？',
      expectsRealAnswer: false,
    },
    {
      id: 'wh-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先讲我这双修铁路的手。\n\n我从大洋彼岸坐船来加州。家里日子过不下去，听说这边修铁路要人，工钱比家里高，就来了。来了才知道，活有多狠。\n\n负责加州这一段的公司，工人大半是华工。我们从太平洋这头往东修，要翻越一道叫 Sierra Nevada（内华达山脉）的大山。山里冬天大雪能埋住整个工棚。我们在岩壁上吊着篮子放炸药，炸出落脚的地方；在零下的雪山里凿隧道，一天可能只前进几十厘米。\n\n雪崩、塌方、炸药事故——身边的工友一个个没了。死了多少华工，没人认真数过。\n\n而我的工钱，比干同样活的白人工人还低。包工头还从里头抽水。\n\n我修的这条铁路，后来被叫作了不起的奇迹。可那奇迹里，有我的命，也有很多没留下名字的工友的命。',
        en: 'First, let me tell you about these railroad-building hands.\n\nI came to California by ship from across the ocean. Life at home could not go on, and I heard they needed men to build the railroad over here, for higher wages than at home, so I came. Only after arriving did I learn how brutal the work was.\n\nThe company in charge of the California stretch worked mostly Chinese laborers. We built east from the Pacific, having to cross a great range called the Sierra Nevada. In winter the mountain snow could bury a whole work-shack. We hung in baskets against rock faces to set blasting charges and blow out a foothold; we cut tunnels through subzero snow mountains, sometimes advancing only a few inches in a day.\n\nAvalanches, cave-ins, blasting accidents, the workmates beside me were lost one by one. How many Chinese laborers died, no one ever seriously counted.\n\nAnd my wages were lower than the white workers doing the same work. The labor boss skimmed his cut on top of that.\n\nThe railroad I built was later called a wondrous miracle. But in that miracle is my life, and the lives of many workmates who left no name behind.',
      },
      deliverGoal: 'N2 setup — 华工的手: 大洋彼岸坐船来加州 (家里过不下去/工钱高) + 加州段公司大半华工 + 由太平洋往东翻 Sierra Nevada (冬雪埋工棚/吊篮放炸药/零下凿隧道一天几十厘米) + 雪崩塌方炸药事故工友一个个没了 (死多少没认真数) + 工钱比白人低包工头抽水 + 「奇迹里有我的命和没名字工友的命」',
      engagementHook: '我修的铁路被叫作了不起的奇迹——可那奇迹里有我的命，和很多没留下名字的工友的命。一个「奇迹」的代价，该记在谁头上？',
      expectsRealAnswer: false,
    },
    {
      id: 'wh-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '现在换我另一双手——拓荒的手。\n\n这一回，我是一户普通人家。东部地少、租金贵，活不出头。1862 年那部 Homestead Act（宅地法）像一道光：去西部，挑一块没人登记的地，住满五年、种起来，160 英亩就归你，几乎免费。\n\n对我们这种没地的穷人，这是一辈子可能都等不到的机会。我们卖掉家当，挤上火车，一路往西。\n\n到了才发现，「免费」两个字背后，是另一种狠。草原上没有树，我们只能用草皮垒房子，叫「草皮屋」（sod house），下雨漏泥。冬天暴风雪，夏天蝗灾、旱灾、草原大火。井要自己挖几十米深。很多人家撑不过头几年，破产走人。\n\n但也有人扎下了根。我们这一户，靠着这块地，慢慢有了自己的农场——这是我们在东部一辈子都买不起的。\n\n这就是我的位置：宅地法是真的给了我机会，改写了我家的命。这一点，我说什么也不会否认。',
        en: 'Now switch to my other pair of hands, the homesteading hands.\n\nThis time I am an ordinary family. In the East land was scarce and rents high, and there was no way up. The Homestead Act of 1862 was like a shaft of light: go west, pick a plot no one had registered, live on it five years and farm it, and 160 acres were yours, almost free.\n\nFor poor people like us with no land, this was a chance we might wait a whole lifetime and never get. We sold our belongings, crowded onto a train, and went west.\n\nOn arriving we found that behind the word "free" lay a brutality of its own. There were no trees on the prairie, so we could only stack sod to build a house, a "sod house," that leaked mud in the rain. Blizzards in winter; locusts, drought, and prairie fire in summer. The well had to be dug ourselves, tens of meters down. Many families could not last the first few years and went broke and left.\n\nBut some put down roots. Our family, on the strength of this land, slowly came to have a farm of our own, something we could never have afforded in the East in a lifetime.\n\nThis is my position: the Homestead Act truly gave me a chance and rewrote my family\'s fortune. That I will never deny, whatever else I say.',
      },
      deliverGoal: 'N3 setup — 拓荒的手: 普通人家东部地少租贵活不出头 + Homestead 1862 像一道光 (没登记的地住满 5 年种起来 160 英亩几乎免费) + 卖家当挤火车往西 + 「免费」背后另一种狠 (没树→草皮屋漏泥/暴风雪蝗灾旱灾草原火/自挖深井/撑不过头几年破产走人) + 但有人扎根 (自己农场东部一辈子买不起) + 「宅地法真给了机会改写命/绝不否认」',
      engagementHook: '宅地法是真的给了我家机会，改写了我们的命——这点我绝不否认。一个真实地帮到了你的东西，会不会同时是别人的灾难？这个问题难不难想？',
      expectsRealAnswer: false,
    },
    {
      id: 'wh-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我——这两双手，都是你的。\n\n你白天在山里凿隧道，命悬一线，工钱却比身边白人工友低一截；你又是那户拓荒人家，靠 160 英亩免费地，第一次有了自己的农场。\n\n你心里有一团说不清的东西。\n\n一方面，你是被剥削的那个：低工钱、危险活、没人记你的名字。比起山顶上数钱的大老板，你是被压在底下的。\n\n可另一方面，你又是得了好处的那个：那块「免费」的地，你接了，种了，靠它翻了身。\n\n现在，关键的问题来了，请你诚实地想：你脚下这块「免费」的地，原来是谁的？\n\n你低着头种地的时候，会不会偶尔想起——这片草原，几年前还是别的人世代生活的家？你出的力、你得的地，是不是也压在他们失去的东西上面？\n\n你既不是最大的赢家，也不是最惨的输家。可你站的这个位置，恰恰最难回答一个问题：我到底是受害者，还是也是那只手的一部分？',
        en: 'Now you are me, and both pairs of hands are yours.\n\nBy day you cut tunnels in the mountains, your life on a thread, yet your wages are a notch below the white workmates beside you; and you are also that homesteading family, with your own farm for the first time on the strength of 160 acres of free land.\n\nThere is a tangle in your heart you cannot quite name.\n\nOn one side, you are the one exploited: low wages, dangerous work, no one recording your name. Next to the boss counting money at the summit, you are the one pressed down at the bottom.\n\nBut on the other side, you are also the one who got something: that "free" land, you took it, you farmed it, you turned your life around on it.\n\nNow the key question comes, and ask yourself honestly: that "free" land under your feet, whose was it before?\n\nWhen you bend your head over the soil, do you ever happen to think, this prairie, only a few years ago, was the home where other people had lived for generations? Your labor, the land you got, do they too rest on top of what they lost?\n\nYou are neither the biggest winner nor the worst loser. But the very place you stand makes one question hardest to answer: am I a victim, or am I also part of that hand?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 两双手都是你的 (山里凿隧道命悬一线工钱比白人低 + 拓荒户靠 160 英亩免费地第一次有农场) + 心里说不清的团 + 一面被剥削 (低工钱危险活没名字/被压底下) 一面得好处 (免费地接了种了翻身) + 关键诚实想「脚下免费地原来是谁的」+ 种地时想不想起几年前别人世代的家/你的力你的地压在他们失去的上面 + 不是最大赢家不是最惨输家但最难回答「我是受害者还是也是那只手的一部分」',
      engagementHook: '我又是被剥削的，又是得了「免费土地」好处的。我到底是受害者，还是那只夺走别人土地的手的一部分？这个问题，你帮我想想，难不难？',
      expectsRealAnswer: false,
    },
    {
      id: 'wh-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我为什么说自己站在「中间」？因为我两头都看得见，可两头我都说不上话。\n\n往上看，是修铁路、发宅地法、签条约的那些人——政府、公司、大老板。规则是他们定的。修哪条线、给谁地、毁哪份条约，从头到尾没人问过我。我只是被招来出力的那双手。\n\n往下看，是被这一切碾过去的平原民族。我脚下种的地，是从他们手里拿走的；我修的铁路，把猎手和军队运进他们的家园。我没签过任何夺地的命令，可我确实在这套机器里转着。\n\n这就是我最难受的地方：我不是恶人，我只是个想活下去、想让家人过好点的普通人。可「普通人想过好日子」这件再正当不过的事，竟然也成了那台大机器的一部分。\n\n历史里最多的，其实就是我这种人——不是发令的，也不是反抗的，是夹在中间、跟着机器转的大多数。',
        en: 'Why do I say I stand "in the middle"? Because I can see both ends, and at neither end do I get a say.\n\nLook up, and there are the men who build the railroad, pass the Homestead Act, sign the treaties, the government, the companies, the bosses. They make the rules. Which line to build, whom to give land, which treaty to break, from start to finish no one asked me. I am only the pair of hands hired to labor.\n\nLook down, and there are the Plains nations ground beneath all of it. The land I farm underfoot was taken from their hands; the railroad I build carried the hunters and the army into their homeland. I never signed any order to seize land, but I truly turn inside this machine.\n\nThis is what troubles me most: I am no villain. I am just an ordinary person who wants to survive and give his family a little better. Yet "an ordinary person wanting a better life," the most rightful thing there is, became part of that great machine too.\n\nWhat there is most of in history is, in fact, people like me, not the ones giving orders, not the ones resisting, but the majority caught in the middle, turning along with the machine.',
      },
      deliverGoal: 'N5 story — 为什么站「中间」: 两头看得见两头说不上话 + 往上看 (政府公司大老板定规则/修哪条给谁地毁哪份条约没问过我/我只是被招来出力的手) + 往下看 (被碾过去的平原民族/脚下地从他们拿走/我修的铁路运猎手军队进他们家园/没签夺地命令但在机器里转) + 最难受 (不是恶人只是想活下去想让家人好点的普通人/「普通人想过好日子」竟也成机器一部分) + 历史里最多的就是这种夹中间跟机器转的大多数',
      engagementHook: '我不是发令的，也不是反抗的，只是个想让家人过好点的普通人——可这件再正当不过的事，也成了那台机器的一部分。历史里最多的，是不是就是我这种「跟着机器转」的大多数？',
      expectsRealAnswer: false,
    },
    {
      id: 'wh-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我把那块「免费的地」，掰开给你看清楚。\n\n大老板说：西部有「免费土地」，谁来谁拿。这话听着多好。可「免费」这个词，藏着一整套没说出口的东西。\n\n第一，这地对我「免费」，是因为它对另一群人「被夺走」。政府能把这地一块块发给拓荒人，前提是先用条约、用枪、用饥饿，把平原民族从这地上清走。我拿到的「免费」，是他们付的费。\n\n第二，连我这个出力的人，「免费」也是打了折的。华工修铁路，工钱比白人低，命没人数；拓荒户的「免费」地，要拿命去扛风雪旱灾才守得住。「免费」从来没有真免费——只是费用换了人来付。\n\n所以同一句「免费土地」，在这条线上传了一圈：大老板靠它发财，我靠它勉强翻身或卖命，平原民族靠它失去一切。\n\n免费——免的是谁的费？站在我这个中间的位置，这个问题我躲不开。因为我既占了这个「免费」的便宜，又亲眼看见了那个真正付费的人。\n\n（那个付了全部费的人，他那一遍怎么过的，你换过去就明白了。）',
        en: 'Let me pry open that "free land" and show it to you clearly.\n\nThe boss says: there is "free land" in the West, whoever comes takes it. How fine that sounds. But the word "free" hides a whole set of things left unsaid.\n\nFirst, this land is "free" to me because it was "taken" from another people. The government can parcel it out to homesteaders plot by plot only because, first, with treaties, with guns, with hunger, it cleared the Plains nations off this land. The "free" I received is the cost they paid.\n\nSecond, even for me, the one who labors, the "free" is discounted. Chinese workers building rail were paid less than the whites, their deaths uncounted; the homesteader\'s "free" land had to be defended with your life against blizzard and drought. "Free" was never truly free, the cost only changed who paid it.\n\nSo the same line, "free land," traveled a full circle down this track: the boss got rich on it, I barely turned my life around or spent my life on it, and the Plains nations lost everything to it.\n\nFree, free at whose cost? Standing in this middle place, I cannot dodge the question. Because I both took the advantage of this "free" and saw with my own eyes the one who truly paid.\n\n(How the one who paid the whole cost lived through it, you will understand when you switch to their pass.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 掰开「免费的地」: 大老板说西部免费土地谁来谁拿 + 藏一整套没说出口的东西 + 第一 (这地对我免费=对另一群人被夺走/政府发地前提先用条约枪饥饿清走平原民族/我的免费是他们付的费) + 第二 (连出力的我免费也打折/华工工钱低命没数/拓荒免费地要拿命扛风雪旱灾守) + 「免费从没真免费只是费用换人付」+ 同一句免费传一圈 (老板发财/我勉强翻身或卖命/平原民族失去一切) + 核心对位「免费 — 免的是谁的费」+ 桥到 native lens',
      engagementHook: '同一句「免费土地」，老板靠它发财，我靠它勉强翻身或卖命，平原民族靠它失去一切。免费——免的到底是谁的费？这个问题，站在中间的我躲不开。',
      expectsRealAnswer: false,
    },
    {
      id: 'wh-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得跟你说一件，关于我们这些出力人之间的事。\n\n你可能以为，同样被剥削的工人，会抱成一团。其实没有。\n\n我华工拿得比白人工人少，干得比他们险。可白人工人里，不少人不但不跟我们站一起，反而恨我们——说我们抢了他们的活、压低了工钱。一些拓荒的白人移民，也把我们这些「外来的、长得不一样的」当成威胁。\n\n大老板乐见这种事。我们底下的人互相恨，就没人盯着上面那个真正拿走大头的人。\n\n这股对华工的怨气，几十年里越积越深。后来在 1882 年，国会专门通过了一部法律，几乎把华工挡在国门外——那是另一段更专门的历史了。在这里，你只要先看见这颗种子：一群同样被压在底下的人，没有联手，反而被分化、互相敌视。\n\n这是「中间人」最悲哀的一课：被剥削，不一定让你和同样被剥削的人站在一起。有时候，它反而让你去踩比你更弱的那一个。',
        en: 'I have to tell you something about us laborers, among ourselves.\n\nYou might think workers who are all exploited alike would band together. They did not.\n\nWe Chinese laborers were paid less than the white workers and worked at greater risk. Yet many of the white workers, far from standing with us, hated us, said we stole their jobs and drove down the wages. Some white homesteading immigrants treated us, "the outsiders who look different," as a threat.\n\nThe boss was glad to see it. As long as those of us below hated one another, no one was watching the man above who actually took the lion\'s share.\n\nThis resentment toward Chinese laborers deepened over the decades. Later, in 1882, Congress passed a law specifically to shut Chinese laborers out of the country, that is another, more specialized stretch of history (you will recognize it if you have run that topic). Here, you only need to see the seed first: a group of people pressed down alike did not join hands, but were divided, set against one another.\n\nThis is the saddest lesson of the "middle person": being exploited does not necessarily make you stand with others who are exploited. Sometimes, it makes you trample the one weaker than you instead.',
      },
      deliverGoal: 'N7 story — 出力人之间: 同样被剥削的工人没抱团 + 华工拿得少干得险 + 白人工人不少不站一起反而恨 (说抢活压工钱) + 白人拓荒移民把华工当威胁 + 大老板乐见 (底下互相恨没人盯真拿大头的人) + 对华工怨气越积越深 → 1882 排华法挡国门外 (另一段更专门历史/chinese-exclusion Topic 锚不展开) + 先看见种子 (同样被压的没联手反被分化敌视) + 中间人悲哀一课 (被剥削不一定让你和同样被剥削的人站一起/有时让你踩更弱的)',
      engagementHook: '被剥削，不一定让你和同样被剥削的人站在一起——有时候反而让你去踩比你更弱的那一个。为什么底层的人，常常先恨上彼此，而不是恨上面那个拿走大头的人？',
      expectsRealAnswer: false,
    },
    {
      id: 'wh-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我修的铁路、我种的地，后来变成了什么样，我也想让你知道。\n\n华工这边：1869 年金道钉砸下去，全国欢呼。庆典上拍照、演讲、敬酒，几乎看不见我们华工的影子。修出这条线最险一段的人，被从那张「伟大时刻」的画面里抹掉了。后来很多年，华工对这条铁路的贡献，才一点点被重新讲出来、记下来。\n\n拓荒这边：随着一户户人家扎根，草原被犁成麦田，城镇冒出来。我们这些拓荒人，确实改写了自家的命，也把美国变成了世界粮仓。这是实打实的。\n\n可同样实打实的是：我们脚下的每一亩地，都曾是平原民族的。我家的丰收，和他们家园的消失，长在同一片土上。\n\n我没法假装这两件事不在一起。我既是这片土地上勤恳的建设者，也是踩着别人失去的东西站稳脚跟的人。这两个身份，都是我。',
        en: 'What became of the railroad I built and the land I farmed, I want you to know that too.\n\nOn the Chinese side: when the golden spike came down in 1869, the whole country cheered. In the photographs, the speeches, the toasts of the celebration, you can barely find a trace of us Chinese laborers. The men who built the most dangerous stretch of the line were erased from that picture of the "great moment." Only over many later years was the Chinese laborers\' contribution to this railroad slowly told again and written down.\n\nOn the homesteading side: as family after family put down roots, the prairie was plowed into wheat fields and towns sprang up. We homesteaders truly rewrote our own fortunes and turned America into a granary of the world. That is solid and real.\n\nBut just as solid and real: every acre underfoot had once belonged to the Plains nations. My family\'s harvest and the disappearance of their homeland grow from the same soil.\n\nI cannot pretend these two things are not together. I am both a diligent builder on this land and a man who found his footing by standing on what others lost. Both of these are me.',
      },
      deliverGoal: 'N8 story — 铁路和地后来怎样: 华工这边 (1869 金道钉全国欢呼/庆典拍照演讲敬酒几乎看不见华工/修最险一段的人被从「伟大时刻」画面抹掉/很多年后贡献才一点点重新讲出来记下来) + 拓荒这边 (一户户扎根草原犁成麦田城镇冒出/拓荒人改写命把美国变世界粮仓实打实) + 同样实打实 (每亩地曾是平原民族的/我家丰收与他们家园消失长在同一片土) + 没法假装两件事不在一起 (既是勤恳建设者又是踩着别人失去站稳脚跟的人/都是我)',
      engagementHook: '修出最险那段铁路的华工，被从「伟大时刻」的照片里抹掉了。一个人出了最大的力，却被从历史的画面里删去——这种「被消失」，比没出过力更冤吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'wh-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉远，看我这种「中间人」在整段历史里到底是个什么角色。\n\n往大了说，正是千千万万个我——出力的工人、扎根的拓荒户——的双手，才真把这件事干成了。没有我们，大老板的钱和政府的法律，落不到地上。是我们的汗、我们的命，把「西进」从一句口号变成了真实的铁轨和麦田。\n\n可也正因为我们干成了，平原民族才彻底没了退路。机器需要无数双手才转得动，而我们，就是那无数双手。\n\n这是我留给你最想不通的一件事：一件大错，往往不是靠几个坏人做成的。它是靠成千上万个「只想好好过日子」的普通人，一人出一点力，凑起来做成的。\n\n我不是那个下令的人。可要是没有我这样的人,那命令也变不成现实。\n\n那么——一个只是想活下去的普通人，对这件事，到底要不要担一份责任？担多少？这个问题，我到死都没想明白。我把它留给你。',
        en: 'Pull the lens back and look at what role a "middle person" like me really played in this whole stretch of history.\n\nIn the largest sense, it was exactly the hands of countless men like me, laboring workers, rooted homesteaders, that actually got this thing done. Without us, the boss\'s money and the government\'s laws could not reach the ground. It was our sweat and our lives that turned "westward expansion" from a slogan into real rails and real wheat fields.\n\nBut it is precisely because we got it done that the Plains nations were left with no way back at all. The machine needs countless hands to turn, and we were those countless hands.\n\nThis is the thing I leave you that I could never work out: a great wrong is often not done by a few evil men. It is done by tens of thousands of ordinary people who "just want to live well," each putting out a little, adding up to the deed.\n\nI was not the one who gave the order. But without people like me, that order could never have become real.\n\nSo, an ordinary person who only wanted to survive, does he bear a share of the responsibility for this, or not? How much? That question I never worked out to my death. I leave it to you.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 中间人在整段历史的角色: 往大了说千千万万个我 (出力工人扎根拓荒户) 的手才真干成 (没我们老板的钱政府的法落不到地/我们的汗命把西进从口号变真实铁轨麦田) + 也正因干成平原民族彻底没退路 (机器需无数双手而我们就是那无数双手) + 最想不通 (一件大错往往不是几个坏人做成是成千上万「只想好好过日子」普通人一人出一点凑成) + 不是下令的人但没我们命令变不成现实 + 留给用户「只想活下去的普通人要不要担责/担多少」',
      engagementHook: '一件大错，往往不是几个坏人做成的，是成千上万「只想好好过日子」的普通人一人出一点凑成的。一个只想活下去的普通人，对这件事要不要担一份责任？担多少？',
      expectsRealAnswer: false,
    },
    {
      id: 'wh-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这两双手的一生，该怎么评我，两种说法都站得住。\n\n一种说法：我是被这台机器辗过的人。我是华工，干最险的活、拿最低的工钱、死了没人数、连那张「伟大时刻」的照片里都没我；我是拓荒户，靠双手在风雪旱灾里硬扛出一个农场。我从头到尾没定过一条规则。我是这段历史里被使用、被剥削、又被抹掉的普通人。\n\n另一种说法：我也是这台机器的一部分。那条铁路、那片被夺来的「免费」土地，是我亲手修的、亲手种的。平原民族失去的家园，正是我脚下站稳的地方。我不是下令的人，可没有我这样千千万万双手，那道命令永远变不成现实。\n\n这两边不是「可怜加可恨」。是同一双手的两面——同样一双想给家人挣口饭的手，既被压在最底下，又成了压垮别人的那台机器的零件。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked the life of these two pairs of hands, how to judge me, both views stand.\n\nOne view: I am the one ground beneath this machine. I am the Chinese laborer, doing the most dangerous work, taking the lowest wage, dying uncounted, not even in that photograph of the "great moment"; I am the homesteader, forcing a farm out of blizzard and drought with my own hands. From start to finish I set not one rule. I am the ordinary person used, exploited, and erased in this stretch of history.\n\nThe other view: I am also part of this machine. That railroad, that "free" land taken from others, I built it with my own hands, farmed it with my own hands. The homeland the Plains nations lost is the very ground where I found my footing. I was not the one who gave the order, but without countless pairs of hands like mine, that order could never have become real.\n\nThese are not "pity and blame." They are two faces of the same pair of hands, the same hands trying to earn bread for a family, both pressed down at the very bottom and made into a part of the machine that crushed others.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (被机器辗过的人/华工最险活最低工钱死了没数照片没我/拓荒户风雪旱灾硬扛农场/没定过一条规则/被使用剥削抹掉的普通人) / 另一种说法 (也是机器一部分/铁路+被夺来的免费地是我亲手修种/平原民族失去的家园正是我站稳的地/不是下令但没我这样千千万万双手命令变不成现实) / 同一双手两面 (想给家人挣口饭既被压最底又成压垮别人机器的零件) / 想 30 秒',
      engagementHook: '被机器辗过的人，和机器的一部分——是同一双想给家人挣口饭的手。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'wh-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这两双手的一生，你会怎么评价这样一个「中间人」？\n\n一双手被压在最底下，低工钱、危险活、被历史抹掉；同一双手又亲手修了那条铁路、种了那块从别人手里夺来的地。被剥削和当帮凶，装在同一双手上。放在同一个天平上，你怎么称？\n\n不过先记住：你这一遍，听的是夹在中间、跟着机器转的普通人。上面那个用「进步」「免费土地」发号施令的大老板，下面那个失去了一切的平原民族——他们各有各的说法。其中那个真正付了全部费的人，你还没听他亲口讲过一句。换个视角再走一遍，你会听见他的声音，也会看看你刚才的判断站不站得住。\n\n再想一步：今天你身边，有没有你「只是照做」「只是参与了一下」的事，回头看，其实让某个人吃了亏？你当时是不是也想：这又不是我定的规矩，我只是个普通人？\n\n那时候——你会怎么看待「我只是跟着做」这五个字？',
        en: 'Having walked the life of these two pairs of hands, how would you judge a "middle person" like this?\n\nOne pair of hands pressed at the very bottom, low wages, dangerous work, erased from history; the same pair of hands built that railroad and farmed that land taken from others. Being exploited and being an accomplice, held in the same pair of hands. Put them on the same scale. How do you weigh them?\n\nBut first, remember: this pass, you heard the ordinary person caught in the middle, turning along with the machine. The boss above giving orders with "progress" and "free land," the Plains nations below who lost everything, each has their own case. And the one who truly paid the whole cost, you have not yet heard him speak a single line in his own voice. Run it again through another lens and you will hear him, and see whether the judgment you just made still holds.\n\nThen take one more step: in your own life today, is there something you "just went along with," "just took a small part in," that, looking back, actually cost someone? Did you tell yourself at the time: this isn\'t a rule I made, I\'m just an ordinary person?\n\nWhen that happens, how will you regard those five words, "I just went along"?',
      },
      deliverGoal: 'N11 close — 评价「中间人」(一双手压最底低工钱危险活被抹掉 + 同一双手修铁路种从别人夺来的地/被剥削和当帮凶同一双手/同一天平) + default-lens 跨视角指针 (你这一遍听夹中间跟机器转的普通人/上面用进步免费土地发号施令的大老板 + 下面失去一切的平原民族各有说法/那个真正付全部费的人你还没听他亲口讲/换视角再走听他声音看判断站不站得住) + transfer「今天你身边你只是照做只是参与一下的事回头看让某人吃亏/你是不是也想这不是我定的规矩我只是普通人」+ 你会怎么看待「我只是跟着做」',
      engagementHook: '被剥削和当帮凶，装在同一双手上。你会怎么评价这样一个「中间人」？今天你身边那件你「只是跟着做」的事，回头看让某人吃了亏——你会怎么看待「我只是跟着做」这五个字？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Plains Native (Lakota) — receiving-end — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var plainsNativeLens = {
  id: 'plains-native-receiving-end',
  name: 'A Lakota of the Plains',
  nameCn: '一个平原上的拉科塔人',
  role: 'receiving-end',
  perspectiveTag: 'bison-and-land-lost',
  icon: '🐎',
  description: {
    cn: '他是一个 Lakota（拉科塔）平原民族的人（合成的声音，但里面的山坡、野牛、条约和猎手都是史料里真切发生过的）。小时候他站在一道小山坡上望出去，是黑压压走大半天走不完的野牛群；老了再回到同一道山坡，他看见的是一片空。这一遍让你跟他一起站在那道山坡上，看远处地平线上忽然多出的两道闪光铁条，看他赖以为生的整个世界一片片被拆光，他要决定是束手就擒，还是用一辈子打一场明知会输的仗。',
    en: 'He is one of the Lakota of the Plains nations (a composite voice, but the rise, the bison, the treaties and the hunters in it all truly happened in the record). As a child he stood on a low rise and looked out at bison so dense and dark that one herd would take most of a day to pass; when he is old he stands on the same rise and sees only emptiness. This pass puts you with him on that rise, watching the two gleaming iron rails appear on the horizon and the men who pour in along them, hunters with guns, farmers with plows, soldiers in uniform, watching the whole world he lives on get taken apart before his eyes, while he must decide, give in, or spend his life fighting a war he knows he will lose.',
  },
  storyboard: [
    {
      id: 'pn-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '小时候，我站在一道小山坡上，朝远处看。整片大平原上，黑压压的，全是野牛（bison）。一群走过去，要走大半天才走得完。地在脚下都跟着震。\n\n我是 Lakota（拉科塔）人，我家世世代代住在这片大平原上。我们靠野牛活：吃牛肉、用牛皮搭帐篷做衣服、用牛骨做工具。野牛在哪，我们就跟到哪。这片地，不是哪个人的财产，是我们大家的家。\n\n等我老了，我又站到那道山坡上，朝远处看。\n\n什么都没有。野牛没了。一头都看不见了。\n\n这一遍，你站在我这里看 1869 年以后的西部。白人把那叫「进步」，叫「文明」，叫「免费的土地」。可你先在我这道山坡上站一会儿——看看那片「免费的土地」，原来是谁的家。',
        en: 'When I was a child I stood on a low rise and looked into the distance. Across the whole Great Plains, dark and dense, were the bison. One herd passing would take most of a day to go by. The ground shook beneath your feet.\n\nI am Lakota. My family lived on this Great Plains for generation upon generation. We lived on the bison: ate the meat, used the hide for lodges and clothing, made tools from the bone. Where the bison went, we followed. This land was no one man\'s property; it was the home of all of us.\n\nWhen I had grown old, I stood again on that same rise and looked into the distance.\n\nThere was nothing. The bison were gone. Not one to be seen.\n\nThis pass, you stand where I stand and look at the West after 1869. The white men called it "progress," called it "civilization," called it "free land." But first stand a while with me on this rise, and look at whose home that "free land" once was.',
      },
      deliverGoal: 'N1 hook (default-lens gold-standard sample) — 小时候站山坡望见黑压压全是野牛 (一群走大半天/地都震) + Lakota 世代住大平原靠野牛活 (吃肉牛皮帐篷衣服牛骨工具/野牛在哪跟到哪/地不是财产是大家的家) + 老了再站同一山坡 → 什么都没有野牛一头不见 + 这一遍站这看 1869 后西部 (白人叫进步文明免费土地) + 先站这看「免费土地」原来是谁的家',
      engagementHook: '小时候我望出去，黑压压全是野牛；老了再望，一头都没了。白人把这片地叫「免费的土地」——可它原来是谁的家？',
      expectsRealAnswer: false,
    },
    {
      id: 'pn-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先讲讲野牛没来之前，我们是怎么过日子的，你才懂后来失去的是什么。\n\n我们 Lakota，不种地、不盖固定的房子。我们跟着野牛走。野牛迁徙到哪，我们就把帐篷（白人叫它 tipi）收起来，骑马跟过去。\n\n一头野牛，几乎养活我们生活的全部。肉，是吃的。皮，鞣好了搭帐篷、做衣服、做被子。筋，搓成线。骨头和角，做成针、勺、工具。连胃和膀胱，都拿来装水。一头野牛身上，几乎没有一处被浪费。\n\n所以对我们，野牛不是「猎物」，更不是「财产」。它是我们活着的根。我们打野牛，会带着敬意，只取够用的——因为我们知道，断了野牛，就断了自己。\n\n这片大平原，对我们也不是「土地」这两个字能装下的。它是祖先葬身的地方，是孩子出生的地方，是我们整个民族的家。\n\n你记住这种「活法」——因为接下来你会看到，它是怎么被一样样拆掉的。',
        en: 'First let me tell you how we lived before the bison were gone, so you understand what was later lost.\n\nWe Lakota did not farm, did not build fixed houses. We moved with the bison. Wherever the bison migrated, we folded up our lodges (the white men called them tipis), mounted our horses, and followed.\n\nA single bison nearly fed the whole of our life. The meat we ate. The hide, once tanned, made lodges, clothing, bedding. The sinew we twisted into thread. The bones and horns we made into needles, spoons, tools. Even the stomach and bladder we used to carry water. On a single bison, almost nothing was wasted.\n\nSo to us the bison was not "game," still less "property." It was the root of our being alive. We hunted the bison with respect, taking only what we needed, because we knew that to cut off the bison was to cut off ourselves.\n\nAnd this Great Plains, to us, was not something the two words "the land" could hold. It was where the ancestors were buried, where the children were born, the home of our whole people.\n\nRemember this "way of living," because next you will see how it was taken apart, one piece at a time.',
      },
      deliverGoal: 'N2 setup — 野牛没来前怎么过: Lakota 不种地不盖固定房子跟野牛走 (迁到哪收起帐篷 tipi 骑马跟) + 一头野牛养活全部生活 (肉吃/皮鞣好搭帐篷做衣被/筋搓线/骨角做针勺工具/胃膀胱装水/几乎不浪费) + 野牛不是猎物不是财产是活着的根 (带敬意只取够用/断野牛=断自己) + 大平原不是「土地」二字能装 (祖先葬身/孩子出生/整个民族的家) + 记住这活法 (接下来一样样被拆掉)',
      engagementHook: '对我们，野牛不是猎物，不是财产，是我们活着的根；大平原不是「土地」二字装得下的，是整个民族的家。这种「活法」，跟你熟悉的过日子方式，差在哪里？',
      expectsRealAnswer: false,
    },
    {
      id: 'pn-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '一开始，白人是一点一点来的。\n\n先是几个商人，拿货来换我们的毛皮。再是几队马车，从我们的地上穿过去，往更西边走。我们大多由着他们过——地这么大，多几个过路的人，似乎也没什么。\n\n然后，他们带来了一种新东西：条约（treaty）。白人的政府派人来，跟我们谈，在纸上画线：这条线以东归白人，以西永远归你们 Lakota，白人保证不越界。\n\n我们的人里，有人不信纸。可也有人想：白纸黑字写下了，立了字据，总比口说为凭强吧？至少他们「保证」了。\n\n那时候我们还不懂一件事：一张纸有没有用，不看上面写了什么，看的是——谁拿着枪，谁说了算，谁来执行它。\n\n而那支枪、那个说了算的人、那个执行的人，从来都不是我们。\n\n这个教训，我们后来用整个民族，学了个透。',
        en: 'At first the white men came a little at a time.\n\nFirst a few traders, bringing goods to swap for our furs. Then a few wagon trains crossing our land, headed farther west. We mostly let them pass, the land was so vast, a few more travelers seemed to matter little.\n\nThen they brought a new thing: the treaty. The white men\'s government sent people to talk with us, to draw lines on paper: east of this line is the white men\'s, west of it is forever yours, the Lakota\'s, and the white men guarantee they will not cross.\n\nAmong our people, some did not trust paper. But others thought: set down in black and white, with a written pledge, surely that is better than spoken word? At least they "guaranteed" it.\n\nWhat we did not yet understand was this: whether a piece of paper is worth anything depends not on what is written on it, but on who holds the gun, who calls the shots, who enforces it.\n\nAnd that gun, that one who called the shots, that one who enforced it, was never us.\n\nThis lesson we later learned right through, with our whole people.',
      },
      deliverGoal: 'N3 setup — 白人一点一点来: 先几个商人换毛皮 + 再几队马车穿过往西 (地大多几个过路似乎没什么) + 然后带来条约 (政府派人谈/纸上画线: 东归白人西永远归 Lakota/白人保证不越界) + 我们的人有人不信纸有人想白纸黑字立字据总比口说强至少保证了 + 那时不懂 (一张纸有没有用不看写了什么看谁拿枪谁说了算谁执行) + 那枪那说了算的那执行的从来不是我们 + 这教训后来用整个民族学透',
      engagementHook: '一张纸有没有用，不看上面写了什么，看谁拿着枪、谁来执行它。而那支枪，从来不是我们的。一份「保证」，握在对方手里，还算保证吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'pn-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你跟着野牛、骑着马，过了大半辈子。有一天，你回到熟悉的草原，发现地平线上多了一样东西：两道闪着光的铁条，笔直地切开整片草原，一眼望不到头。那是铁路。\n\n紧接着，沿着这条铁路，来的人不再是几个商人、几队马车了。是成千上万的人——拿枪的猎手、扛犁的农民、穿军装的兵。\n\n那些猎手，专门打野牛。不是为了吃,有的只为了那张皮，有的甚至只为了取乐，打完把整头牛扔在草原上烂掉。一天能打死几百头。火车窗口里,有人就着车速朝牛群开枪。\n\n你眼睁睁看着，那曾经黑压压、走大半天走不完的牛群，一年比一年稀，一年比一年少。\n\n你心里清楚，那不是普通的「牛少了」。野牛是你们活着的根。牛没了，意味着——冬天没有肉，没有皮做帐篷御寒，没有一切。\n\n这一刻，你站在空荡荡的草原上，得想一个最难的问题：你赖以为生的整个世界，正在你眼前被人一点点拆光。你，能做什么？',
        en: 'Now you are me.\n\nYou have followed the bison and ridden your horse for most of your life. One day you come back to a familiar prairie and find a new thing on the horizon: two gleaming iron rails, cutting dead straight across the whole prairie, running out of sight. That is the railroad.\n\nAnd close behind, along this railroad, the ones who came were no longer a few traders, a few wagon trains. They were tens of thousands, hunters with guns, farmers with plows, soldiers in uniform.\n\nThose hunters hunted the bison on purpose. Not to eat, some only for the hide, some even only for sport, leaving the whole carcass to rot on the prairie. Hundreds could be killed in a day. From the train windows, men fired into the herds at the speed of the train.\n\nYou watch with your own eyes as that herd, once dark and dense, once too long to pass in most of a day, grows thinner year by year, fewer year by year.\n\nYou know in your heart this is not an ordinary "fewer cattle." The bison is the root of your being alive. The bison gone means: no meat in winter, no hide for lodges against the cold, nothing.\n\nIn this moment, standing on the emptied prairie, you must face the hardest question: the whole world you live on is being taken apart, piece by piece, before your eyes. You, what can you do?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 跟野牛骑马过大半辈子 + 有一天地平线多了两道闪光铁条笔直切开草原望不到头 (铁路) + 沿铁路来的不再是几个商人是成千上万 (拿枪猎手扛犁农民穿军装兵) + 猎手专打野牛 (不为吃/只为皮/只为取乐扔牛烂掉/一天几百头/火车窗就着车速朝牛群开枪) + 眼睁睁牛群一年比一年稀少 + 心里清楚不是普通牛少 (野牛是活着的根/牛没了=冬天没肉没皮做帐篷御寒没一切) + 站空草原最难问题 (赖以为生的整个世界正眼前被拆光/你能做什么)',
      engagementHook: '你赖以为生的整个世界，正在你眼前被人一点点拆光。你站在空荡荡的草原上——你，能做什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'pn-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我们没有束手就擒。我们反抗了。\n\n白人要的地越来越多。有一次，是因为在我们的圣地 Black Hills（黑山）里发现了金子——那地，明明前几年还有一份条约写着「永远归 Lakota」。可金子一出现，白人潮水一样涌进来。条约？说没就没了。\n\n1876 年，我们的战士聚到一处叫 Little Bighorn（小大角河）的地方。一支美军骑兵冲过来，带头的指挥官叫 Custer。\n\n我们打赢了。打得干净利落——Custer 和他带的那一队，全军覆没，没剩几个活口。那是我们这些年，打得最漂亮、最响亮的一仗。\n\n那一天，我们以为我们守住了。\n\n可你别高兴得太早。\n\n你现在站在我这个位置，得明白一件残酷的事：当一边有源源不断的人、火车、枪和粮食，另一边连赖以为生的野牛都快没了——赢下一两场仗，改变不了最后谁会输。\n\n胜利，有时候只是让结局来得慢一点点。',
        en: 'We did not give ourselves up without a fight. We resisted.\n\nThe white men wanted more and more land. Once it was because gold was found in our sacred Black Hills, land that, only a few years before, a treaty had said was "forever the Lakota\'s." But the moment gold appeared, the white men poured in like a flood. The treaty? Gone, just like that.\n\nIn 1876 our warriors gathered at a place called Little Bighorn. A force of U.S. cavalry charged in, led by a commander named Custer.\n\nWe won. We won clean, Custer and the column he led were wiped out, almost no one left alive. It was the finest, the loudest battle we fought in those years.\n\nThat day, we thought we had held.\n\nBut do not rejoice too soon.\n\nStanding now where I stand, you must understand a cruel thing: when one side has an endless stream of people, trains, guns, and food, and the other has nearly lost even the bison it lives on, winning one or two battles cannot change who loses in the end.\n\nVictory, sometimes, only makes the ending come a little more slowly.',
      },
      deliverGoal: 'N5 story — 没束手就擒反抗了 + 白人要地越来越多 + 一次因圣地 Black Hills 发现金子 (那地前几年还有条约写永远归 Lakota/金子一出白人潮水涌进/条约说没就没) + 1876 战士聚 Little Bighorn + 美军骑兵 Custer 带头冲来 + 我们打赢了打得干净 (Custer 全军覆没没剩活口/最漂亮最响亮一仗) + 以为守住了 + 别高兴太早 + 残酷的事 (一边源源不断人火车枪粮另一边野牛快没/赢一两场改变不了最后谁输) + 胜利有时只让结局来得慢一点',
      engagementHook: '我们在 Little Bighorn 打了最漂亮的一仗，全歼了 Custer。可对方有源源不断的人、火车、枪和粮——胜利，有时候只是让结局来得慢一点点。明知道赢不了最后，还要不要反抗？',
      expectsRealAnswer: false,
    },
    {
      id: 'pn-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在我要把那个白人挂在嘴上的词，掰开给你看：「免费的土地」。\n\n他们说，西部有大片「免费的土地」，谁去登记就归谁，160 英亩，几乎不要钱。报纸上画着拓荒人在金黄的麦田里笑。\n\n可你站在我这里，看看那「免费的土地」到底是什么。\n\n那是我们的家。是我祖父的祖父就开始打野牛的草原，是我们埋祖先、生孩子的地方。它不是「没人要的空地」，它一直有人——是我们。\n\n白人能把这地「免费」发给一户户拓荒人，唯一的办法，是先把我们从这地上弄走：先签条约骗我们退一步，再撕条约逼我们退一步；先把野牛打光让我们饿肚子，再用枪和军队把我们赶进保留地。\n\n等我们被清空了，这地才「空」了，才能被叫作「免费」，发给别人。\n\n所以你听好了：那个词——「免费」——对拓荒人是免费，对铁路老板是财富，对我们，是失去一切。它从来没有真免费过。免的那笔费，是我们整个民族，用家、用野牛、用命，替他们付的。\n\n免费——对谁免费？在谁的土地上？这个问题，你现在站在我这道空草原上，该有答案了。',
        en: 'Now I will pry open the word the white men keep on their lips: "free land."\n\nThey say there is broad "free land" in the West, whoever registers it gets it, 160 acres, almost for nothing. The newspapers drew homesteaders laughing in golden wheat fields.\n\nBut stand here where I stand and look at what that "free land" really is.\n\nIt is our home. It is the prairie where my grandfather\'s grandfather already hunted the bison, where we buried our ancestors and bore our children. It was not "empty land no one wanted," it always had people, us.\n\nThe only way the white men could hand this land out "free" to homesteader after homesteader was to remove us from it first: first sign a treaty to coax us back a step, then tear the treaty to force us back a step; first shoot the bison out so we went hungry, then with guns and the army drive us onto reservations.\n\nOnly once we had been emptied out was the land "empty," only then could it be called "free" and handed to others.\n\nSo hear this clearly: that word, "free," free to the homesteader, wealth to the railroad boss, and to us, the loss of everything. It was never truly free. The cost that was waived, our whole people paid it for them, with our home, with the bison, with our lives.\n\nFree, free for whom? On whose land? That question, standing now on this emptied prairie with me, you should have an answer.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (核心对位 default) — 掰开白人的词「免费的土地」: 他们说西部大片免费土地谁登记归谁 160 英亩几乎不要钱 (报纸画拓荒人金麦田笑) + 站我这看那免费土地是什么 + 那是我们的家 (祖父的祖父就打野牛的草原/埋祖先生孩子的地/不是没人要的空地一直有人=我们) + 白人能免费发给拓荒人唯一办法是先把我们弄走 (签条约骗退一步→撕条约逼退一步→打光野牛让饿→枪和军队赶进保留地) + 等我们被清空地才「空」才能叫免费发给别人 + 「免费」对拓荒人免费对铁路老板财富对我们失去一切 (从没真免费/那笔费我们整个民族用家用野牛用命替他们付) + 核心问「免费对谁免费在谁的土地上/站这空草原该有答案」',
      engagementHook: '那个词——「免费」——对拓荒人是免费，对铁路老板是财富，对我们，是失去一切。免的那笔费，是我们整个民族用家、用野牛、用命替他们付的。免费——对谁免费？在谁的土地上？',
      expectsRealAnswer: false,
    },
    {
      id: 'pn-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把野牛打光，是最狠的一招。我后来才慢慢明白，那不全是意外。\n\n白人里有打仗的人,他们看得很清楚：我们 Lakota 这样的平原民族，骑马、打野牛、来去如风，正面打仗很难打垮。可我们有一个死穴——野牛。\n\n断了野牛，就断了我们的肉、我们的皮、我们的一切。不用一枪一炮，光是饿，就能把我们逼到投降。\n\n所以打光野牛，不只是猎手贪皮、贪乐。它后来变成了一种办法：用消灭一种动物，来消灭一个民族的活法。\n\n这一招太管用了。当我们的孩子开始挨饿，当冬天没有皮做帐篷，当老人冻死、病死——再硬的战士，也得为了让族人活下去，走进白人划好的保留地，伸手领那点发下来的口粮。\n\n你想想这有多绝：打垮我们的，最后不是哪一场战役。是饥饿。是他们算准了，把我们活命的根，连根拔掉。\n\n这件事，我用了很久才敢正眼看：有时候毁掉一个民族，不靠屠杀，靠的是有计划地，让他们没法再像自己那样活下去。',
        en: 'Shooting out the bison was the cruelest stroke of all. Only later did I slowly understand it was not all an accident.\n\nThere were fighting men among the white men, and they saw it clearly: a Plains people like us Lakota, riding, hunting bison, coming and going like the wind, was hard to break in open battle. But we had one fatal weakness, the bison.\n\nCut off the bison, and you cut off our meat, our hides, our everything. Without a single shot, hunger alone could force us to surrender.\n\nSo shooting out the bison was not only hunters greedy for hides and sport. It became, over time, a method: to wipe out a people\'s way of living by wiping out an animal.\n\nThe stroke worked all too well. When our children began to starve, when there were no hides for lodges in winter, when the old froze and sickened and died, even the hardest warriors, to keep their people alive, had to walk into the reservations the white men had marked out, and hold out a hand for the rations doled to them.\n\nThink how merciless that is: what broke us, in the end, was not any one battle. It was hunger. It was that they reckoned it out, and pulled the root of our living up by the root.\n\nThis I took a long time to dare to look at squarely: sometimes you destroy a people not by slaughter, but by, with a plan, making it impossible for them ever to live as themselves again.',
      },
      deliverGoal: 'N7 story — 打光野牛是最狠一招/不全是意外 + 白人打仗的人看得清 (平原民族骑马打野牛来去如风正面难打垮/死穴是野牛) + 断野牛=断肉皮一切 (不用一枪一炮光饿就能逼投降) + 打光野牛不只猎手贪皮贪乐 (变成办法: 用消灭一种动物消灭一个民族的活法) + 太管用 (孩子挨饿/冬天没皮做帐篷/老人冻死病死/再硬战士为族人活下去走进保留地领口粮) + 多绝 (打垮我们的不是哪场战役是饥饿/算准把活命的根连根拔) + 用很久才敢正眼看 (毁掉一个民族不靠屠杀靠有计划让他们没法再像自己那样活)',
      engagementHook: '打垮我们的，最后不是哪一场战役，是饥饿——他们算准了，把我们活命的根连根拔掉。毁掉一个民族，可以不靠屠杀，靠的是让他们没法再像自己那样活下去。这种「不流血的毁灭」，是不是更可怕？',
      expectsRealAnswer: false,
    },
    {
      id: 'pn-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '被赶进保留地（reservation）以后，日子是什么样，我也要让你知道。\n\n保留地，是白人划给我们的、缩了又缩的一块地，往往贫瘠、没法靠它活。我们这些跟着野牛、来去自由了一辈子的人，被圈在里头，靠政府发下来的口粮过活。能不能吃饱，看管事白人官员的脸色。\n\n更狠的还在后头。1887 年，他们又出了一部法律，叫 Dawes Act（道斯法）。白人说这是「为我们好」：把保留地这种共有的地，拆成一小块一小块，分给每家每户，让我们学他们那样，一家一户当农民。\n\n可你听我说，这一刀砍的正是我们活法的命根。我们的活法本就是共有土地、一起跟野牛走。「一家一户、各种各的地」，从根上就不是我们。这部法律真正干的，是把我们这个「大家」拆成一个个孤零零的「一家」。而且每家分完那一小块，剩下的大片地，又被白人拿去卖了。\n\n你看明白了吗？先用饥饿把我们逼进保留地，再用一部「为你们好」的法律，把保留地也拆开拿走。每一步，都裹着一个体面的名字。',
        en: 'After we were driven onto the reservation, what life was like, I want you to know that too.\n\nThe reservation was a piece of land the white men marked out for us, shrunk and shrunk again, often barren land you could not live on. We who had followed the bison and come and gone freely all our lives were penned inside it, living on the rations the government doled out. Whether you ate your fill depended on the face of the white official in charge.\n\nCrueler still was yet to come. In 1887 they passed another law, the Dawes Act.\n\nThe white men said it was "for our own good": take reservation land, held in common, and break it into small plots, one for each family, so we could learn to be farmers one household at a time, like them.\n\nBut hear me, this cut struck at the very lifeblood of our way of living. Our way was holding land in common, moving together with the bison. "Each family farming its own plot" was, at the root, not us. What this law really did was break our "all of us" into one lonely "single family" after another.\n\nAnd after each family\'s small plot was parceled out, the large remainder of the land was taken by the white men to sell.\n\nDo you see it clearly? First with hunger they drove us onto the reservation, then with a law "for your own good" they broke the reservation apart and took that too. Every step wrapped in a respectable name.',
      },
      deliverGoal: 'N8 story — 被赶进 reservation 后日子: 保留地是白人划的缩了又缩的地 (往往贫瘠没法靠它活) + 跟野牛来去自由一辈子的人被圈靠政府口粮过活 (能否吃饱看管事白人官员脸色) + 更狠的: 1887 Dawes Act + 白人说为我们好 (拆共有地为小块分每家每户/学他们一家一户当农民) + 这一刀砍活法命根 (我们活法本是共有土地一起跟野牛走/「一家一户各种各的」从根上不是我们/真正干的是把「大家」拆成孤零零「一家」) + 每家分完剩大片地白人拿去卖 + 套路 (饥饿逼进保留地→「为你们好」法律拆走/每步裹体面名字)',
      engagementHook: '先用饥饿把我们逼进保留地，再用一部「为你们好」的法律，把保留地也拆开拿走——每一步都裹着一个体面的名字。当伤害裹上「为你好」，它会变得更难反抗吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'pn-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我要讲最后一件事，发生在 1890 年冬天，一个叫 Wounded Knee（伤膝河）的地方。\n\n那时候，野牛早没了，我们被困在保留地里，挨饿、绝望，日子看不到一点光。就在那时，一种叫「鬼舞」（Ghost Dance）的信仰，在我们中间传开了。跳这个舞的人相信：死去的亲人会回来，黑压压的野牛会回来，这片土地会变回我们小时候的样子。\n\n你别笑我们天真。一个被逼到墙角、什么都失去了的人，总得抓住点什么才撑得下去。鬼舞，是我们最后一根稻草。\n\n可白人政府却把它看成要造反。1890 年 12 月，军队包围了我们一群人，在缴枪的时候枪响了。接着是一场屠杀，约两三百个 Lakota 死在那片雪地上，里面有很多妇女和孩子。那一天，是平原上有组织的抵抗真正的终点。\n\n你回头看这条线：1869 年白人敲下那根金道钉，全国欢呼「连起来了」；1890 年，在伤膝河，我们躺在雪里。他们的「连起来」，和我们的「散掉了」，是同一段历史。',
        en: 'I have one last thing to tell, in the winter of 1890, at a place called Wounded Knee.\n\nBy then the bison were long gone, and we were penned on the reservation, starving and in despair. There was not a glimmer of light in our days.\n\nJust then, a faith called the Ghost Dance spread among us. Those who danced it believed: the dead would return, the dark dense herds of bison would return, this land would turn back into what it had been when we were children.\n\nDo not laugh at us for being naive. A person pushed into a corner, having lost everything, must grasp at something to go on. The Ghost Dance was our last straw.\n\nBut the white government saw it as a coming revolt. In December 1890 the army surrounded a band of us, and as we were being disarmed, a gun went off. What followed was a massacre, some two to three hundred Lakota died on that snowy ground, many of them women and children.\n\nThat day was the true end of organized resistance on the plains.\n\nLook back along this line: in 1869 the white men drove that golden spike, and the whole country cheered "we are joined." In 1890, at Wounded Knee, we lay in the snow.\n\nTheir "joined together," and our "broken apart," are the same stretch of history.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Wounded Knee 1890.12 (野牛早没了被困保留地挨饿绝望看不到光) + Ghost Dance 鬼舞传开 (信死去亲人会回来/黑压压野牛会回来/土地变回小时候样子) + 别笑天真 (被逼墙角失去一切总得抓住点什么/最后一根稻草) + 白人政府当造反 + 1890.12 军队包围缴枪枪响屠杀 (约两三百 Lakota 死雪地/很多妇女孩子) + 平原有组织抵抗真正终点 + 回看这条线 (1869 金道钉全国欢呼连起来 vs 1890 伤膝河我们躺雪里) + 「他们的连起来和我们的散掉是同一段历史」',
      engagementHook: '1869 年他们敲下金道钉，全国欢呼「连起来了」；1890 年，我们躺在伤膝河的雪里。他们的「连起来」和我们的「散掉了」，是同一段历史。同一段历史，怎么会有两个完全相反的结局？',
      expectsRealAnswer: false,
    },
    {
      id: 'pn-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看 1869 年以后那段被叫作「西进」「进步」的历史，两种说法都站得住。\n\n一种说法：那就是一场夺取，一场毁灭。他们用「空地」「免费土地」「文明」「进步」这些好听的词，盖住了真相：这地一直是我们的家。他们签了又撕一份份条约，蓄意打光了三千万头野牛，用饥饿把我们逼进保留地，再用「为你们好」的法律拆走保留地，最后在伤膝河朝妇女孩子开枪。对我们这样的人，那从头到尾就是被连根拔起。\n\n另一种说法：那也是一个国家真实地建了起来。铁路把大陆连成一体，几百万普通人有了土地和活路，城镇、农田、工业从草原上长出来。对很多人，那确实是机会，是新生活，是了不起的成就。这些，也都是真的。\n\n两种说法都站得住。同一段历史，是有人的「建起来」，踩着另一些人的「被毁掉」。它既是成就，也是毁灭。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at that stretch of history after 1869 called "westward expansion" and "progress," both views stand.\n\nOne view: it was a taking, a destruction. They used fine words, "empty land," "free land," "civilization," "progress," to cover the truth: this land was always our home. They signed and tore up treaty after treaty, deliberately shot out thirty million bison, drove us onto reservations with hunger, broke the reservations apart with a law "for your own good," and at last fired on women and children at Wounded Knee. For people like us it was, from start to finish, being torn up by the roots.\n\nThe other view: it was also a nation truly built. The railroad joined the continent into one, millions of ordinary people got land and a living, towns, farmland, industry grew up out of the prairie. For many people it really was opportunity, a new life, a magnificent achievement. These too are all true.\n\nBoth views stand. The same stretch of history is some people\'s "building up" standing on other people\'s "being destroyed." It was an achievement, and it was a destruction.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (default gold-standard) — 一种说法 (一场夺取一场毁灭/用空地免费土地文明进步好词盖住真相这地一直是我们的家/签了又撕条约/蓄意打光三千万野牛/饥饿逼进保留地/为你们好法律拆走保留地/伤膝河朝妇女孩子开枪/被连根拔起) / 另一种说法 (一个国家真实建起来/铁路连大陆/几百万普通人有土地活路/城镇农田工业从草原长出/对很多人是机会新生活了不起成就/也都是真的) / 两种都站得住 (有人建起来踩着另一些人被毁掉/既成就又毁灭) / 想 30 秒',
      engagementHook: '一种说法：那是一场夺取、一场毁灭。另一种说法：那也是一个国家真实地建了起来。两种说法都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'pn-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个望见过黑压压野牛、又望见过空荡草原的人；一个跟着野牛自由了一辈子、最后死在保留地里的人——你会怎么评价这样一段「开端」？\n\n一段历史，一边是铁路把国家缝成一体、几百万人有了新生活，一边是我们这样的民族被夺走土地、打光野牛、连根拔起。这两件事不是分开的两章，是同一段历史的同一页。放在同一个天平上，你怎么称？\n\n不过先记住：你这一遍，听的是被这一切碾过去的人——是我。可那个修铁路、推西进的大老板，那个夹在中间、靠「免费」土地翻身的普通人，各有各的说法。换个视角再走一遍，你会听见他们怎么说「进步」「机会」，也会看看你刚才的判断，站不站得住。\n\n再想一步：今天你身边，有没有人用一个特别好听的词——「发展」「升级」「为了大局」「免费送你」——去做一件，其实让某些人失去了很多的事？那个好听的词，是不是也像当年的「免费土地」一样，把代价藏了起来？\n\n那时候，你会跟着那个词一起说好，还是会停下来，像我希望有人当年替我们问的那样，问一句：这件事，对谁免费？在谁的土地上？谁，在替它付费？',
        en: 'Having walked my whole life, a person who once saw the dark dense herds of bison and then saw the emptied prairie; a person who followed the bison free all his life and died at last on the reservation, how would you judge a "beginning" like this?\n\nA stretch of history, on one side the railroad stitching a country into one, millions getting a new life, and on the other a people like ours stripped of land, the bison shot out, torn up by the roots. These are not two separate chapters, they are the same page of the same history. Put them on the same scale. How do you weigh them?\n\nBut first, remember: this pass, you heard the one ground beneath all of it, me. But the boss who built the railroad and pushed expansion, and the ordinary person caught in the middle who turned his life around on "free" land, each has their own case. Run it again through another lens and you will hear how they speak of "progress" and "opportunity," and see whether the judgment you just made still holds.\n\nThen take one more step: in your own life today, is there someone using an especially fine-sounding word, "development," "upgrade," "for the greater good," "free, just for you," to do a thing that in fact cost certain people a great deal? Does that fine word, like the "free land" of those days, hide the cost?\n\nWhen that happens, will you say yes along with the word, or will you stop, as I wish someone back then had stopped to ask for us, and ask: this thing, free for whom? On whose land? Who is paying the cost?',
      },
      deliverGoal: 'N11 close (default gold-standard) — 评价「开端」(望见黑压压野牛又望见空草原/跟野牛自由一辈子最后死保留地 → 铁路缝国家几百万人新生活 vs 被夺土地打光野牛连根拔起/同一段历史同一页/同一天平) + default-lens 跨视角指针 (你这一遍听被碾过去的人是我/那个修铁路推西进大老板 + 那个夹中间靠免费土地翻身的普通人各有说法/换视角再走听他们怎么说进步机会看判断站不站得住) + transfer「今天你身边有人用好听的词 (发展/升级/为了大局/免费送你) 做让某些人失去很多的事/那词像不像当年免费土地藏了代价」+ 你会跟着说好还是停下像我希望当年有人替我们问的那样问「对谁免费/在谁的土地上/谁在替它付费」',
      engagementHook: '走完我这一生，你会怎么评价这样一段「开端」？今天你身边那个用「发展」「免费送你」藏起代价的词，你会跟着说好，还是会停下来，像我希望当年有人替我们问的那样，问一句：这件事，对谁免费？在谁的土地上？谁在替它付费？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'railroad-baron':                  railroadBaronLens,
  'railroad-worker-or-homesteader':  workerHomesteaderLens,
  'plains-native-receiving-end':     plainsNativeLens,
};

// per TOPIC_ROADMAP_G6_G12.md + receiving-end 优先 pattern:
// 平原民族 (被「免费土地」+「进步」碾过的一方) + N1 gold-standard hook (黑压压野牛→空草原) + N6「免费土地 — 对谁免费在谁的土地上」跨 lens 对位 + N10/N11 成就 vs 毁灭 closing
export var defaultLens = 'plains-native-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'westward-expansion-1869',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'railroad-baron': 30, 'railroad-worker-or-homesteader': 28, 'plains-native-receiving-end': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-25',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「免费土地 / 进步 — 对谁免费, 在谁的土地上」一句话三个方向 (baron 给夺地正名 / worker 在招牌下出力也付折扣费 / native 整个民族用家+野牛+命替「免费」付费)',
    'defaultLens: plains-native-receiving-end — 受影响者优先 (平原民族 + 被免费土地/进步碾过一方 + gold-standard N1 hook 黑压压野牛→空草原 + N10/N11 成就 vs 毁灭)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: native + worker lens 第一人称内心戏为类型化合成 (未具名虚构个人); 史料确证锚点: 1869.5.10 Promontory 金道钉 / Homestead 1862 给 160 英亩 / 野牛 ~3000万→1880s 近零 (部分蓄意) / Little Bighorn 1876 / Wounded Knee 1890.12 / Dawes 1887',
    'DISTINCT from manifest-destiny-1845 (那是 1840s 墨西哥割让/Texas/Oregon); THIS is post-1865 平原民族/横贯铁路/Homestead. 不复制 chinese-exclusion-1882 (那是 1882 排华法本身; 这里华工是铁路语境/背景非焦点, N7 仅埋种子+跨 Topic 锚不展开)',
    'cross-Topic 锚: 条约≠真保护/谁执行规则比写什么重要→manifest-destiny (但本主题平原非墨西哥); 华工怨气种子→chinese-exclusion-1882; 「进步/文明」做扩张旗号+谁被算进「我们」→constitutional-convention-1787',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
