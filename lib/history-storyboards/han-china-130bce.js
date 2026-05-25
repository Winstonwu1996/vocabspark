// ─── Han China at its Height (c.130 BCE) Lens-based Storyboard (Story-First v2) ───
//
// Topic: 汉武盛世 · Han China under Emperor Wu c.130 BCE
// CA HSS Grade 6 Ancient China · 中国课纲 七年级上 · AP World Period 2 (state-building / Silk Road / belief systems)
//
// 3 lens 设计 (per AUTHORING_PIPELINE 第 8/12 条):
//   - han-wudi                          (perpetrator-power) — 汉武帝 刘彻 r.141-87 BCE 击匈奴 + 独尊儒术 + 通西域 + 盐铁专卖
//   - zhang-qian                        (lonely-mediator)   — 张骞 ?-114 BCE 出使西域被匈奴扣十余年 / 凿空 / 夹在两个世界之间
//   - conscript-peasant-receiving-end   (receiving-end, DEFAULT) — 一个为盛世买单的农民/戍卒 (虚构桥接, 代表无名苍生; 挑战「盛世」先验)
//
// 跨 lens micro-detail (N6 anchor):
//   「同一道意志」一件事两个方向 — 同一个汉武帝的大业两面:
//   - 汉武帝 lens N6: 独尊儒术 — 给帝国一个统一的思想灵魂 vs 也是给皇权一件合身的外衣, 一道命令两面
//   - 张骞 lens N6: 凿空西域 — 打通一条路 (administrative/外交杰作) vs 这条路本是为找军事盟友打匈奴, 路的另一头是战争
//   - 戍卒 lens N6: 同一场「武功」 — 朝堂上的赫赫战功 = 田里的他被征去送死的同一道征发令; 盛世的荣光与买单的人, 一件事两头
//
// 跨 Topic / 同代世界锚 (CN 用「视角」不用 lens 工程词; §8 同时代世界 = 罗马, repurposed):
//   - 同代地中海: 罗马共和国晚期正在扩张 (布匿战争已胜 / Gracchi 改革 / 行省化) — 两个同期扩张的帝国, 怎么扩、谁买单的结构对照
//   - 历史学 (historiography): 司马迁《史记》当世写成 (受宫刑) / 班固《汉书》东汉追记 / 盐铁会议《盐铁论》— 盛世 vs 穷兵黩武之争, N9 zoom 触及
//
// defaultLens = 'conscript-peasant-receiving-end' (受影响者优先 pattern 回归):
//   注意与 qin 的差异 — qin 学生先验是「暴君」, 故默认进权力方挑战暴君先验; 但 Han 学生先验是「盛世/强汉」(celebratory),
//   故默认进受影响者(买单的农民)视角, 挑战「盛世」这个 celebratory 先验 (盛世背后谁买单/值不值/穷兵黩武).
//   cp-n10/n11 含 default-lens-stands-alone 跨视角指针; 汉武帝/张骞为加深 lens.
//
// 第 7 条 cultural-ban 例外: 本 Topic 是中国史描述中国, 皇帝/丞相/匈奴/儒术/盐铁/戍卒/西域/察举 等是史实正确术语, 必须用.
//   仍避免时代错置 + 不伪造引文 (司马迁《史记》/班固《汉书》paraphrase, 不编造原话).
//
// NEW STRUCTURE SPEC:
//   - 11 nodes per lens (multi-faction)
//   - 220-380 CN chars per node; ≤2 anchor nodes per lens may reach 550 (N6 cross-lens + N10/N11 synthesis)
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true; all others false (2/lens, 6 total)
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点 wording authored here)
//
// per AUTHORING_PIPELINE.md 铁律 (em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: 汉武帝 刘彻 Emperor Wu of Han (perpetrator-power)
// ═══════════════════════════════════════════════════════════════════════

export var hanWudiLens = {
  id: 'han-wudi',
  name: 'Emperor Wu of Han',
  nameCn: '汉武帝 刘彻',
  role: 'perpetrator-power',
  perspectiveTag: 'emperor-wu',
  icon: '👑',
  description: {
    cn: '汉朝第七位皇帝，公元前 156 年生，16 岁登基，在位 54 年，是当时世界上最有权势的人之一。他从祖父辈攒下的太平家底出发，做了几件改写历史的大事：把儒家立为帝国唯一的官方思想，派大军北击草原上的匈奴，又派人凿穿西域，打通了后世所说的丝绸之路。同一个他，为了养这些战争，把盐和铁收归国家专卖，把帝国几代人攒下的钱粮几乎打空，晚年还下了一道罕见的悔过诏书。这一遍让你从这个皇帝的内部，看一个被叫做「盛世」的时代，它的荣光和它的代价怎么同时长出来。',
    en: 'The seventh emperor of the Han dynasty, born 156 BCE, enthroned at sixteen, who reigned fifty-four years and was one of the most powerful men in the world of his day. Starting from the peace and wealth his grandfathers had saved up, he did several things that rewrote history: he made Confucianism the empire\'s one official doctrine, sent great armies north against the Xiongnu of the steppe, and sent men to bore through the Western Regions, opening what later ages call the Silk Road. The same man, to feed these wars, took salt and iron into a state monopoly, nearly emptied the treasury his ancestors had built over generations, and in his last years issued a rare edict of remorse. This pass lets you watch, from inside the emperor, how an age men call a golden age grows up with its glory and its cost at the same time.',
  },
  storyboard: [
    {
      id: 'hw-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '公元前 130 年前后。我站在长安的宫殿里，往北看。\n\n我是大汉的皇帝，姓刘名彻。我接手这个帝国的时候，国库满得钱串子的绳都烂了，粮仓里的陈粮多到吃不完，烂在那里。这是我祖父、父亲两代人，几十年不打大仗、轻徭薄赋，一点一点攒下来的。\n\n他们攒，是为了让百姓喘口气。可我看着这满库的钱粮，心里想的是另一件事。\n\n北边草原上，有匈奴。几十年来，他们年年南下抢掠，我大汉只能送公主、送财物去换一时的安宁。这口气，我咽不下。\n\n我要用这笔家底，做几件之前没有哪个皇帝做成的大事：把匈奴打服，把帝国的思想拧成一股，把路通到我从没见过的西边去。\n\n这一遍，你坐进我这个位置。你手握一个帝国几代人的积蓄。你不知道的是，等你走完这一生，这满库的钱粮，会被你花得几乎见底。',
        en: 'Around 130 BCE. I stand in the palace at Chang\'an and look north.\n\nI am the emperor of the great Han, Liu Che by name. When I took over this empire, the treasury was so full the cords stringing the coins had rotted through, and the granaries held so much old grain it could not be eaten and rotted where it lay. This my grandfather and my father, two generations, had saved up little by little over decades of fighting no great war and keeping taxes and labor light.\n\nThey saved it to let the common people catch their breath. But looking at these full storehouses, what was in my mind was another thing.\n\nOn the northern steppe were the Xiongnu. For decades they had come south to raid year after year, and my Han could only send princesses and goods to buy a moment\'s peace. That was a thing I could not swallow.\n\nI meant to use this inheritance to do several great things no emperor before me had done: beat the Xiongnu into submission, twist the empire\'s thought into one strand, and run a road out to a west I had never seen.\n\nThis pass puts you in my seat. You hold the savings of generations of an empire. What you do not know is this: by the time you have walked your whole life, these full storehouses will be spent down to nearly the bottom.',
      },
      deliverGoal: 'N1 hook — c.130 BCE 长安望北 + 汉武帝刘彻自我介绍 + 文景之治攒下的满库钱粮 (钱串绳烂/陈粮烂仓) + 祖辈轻徭薄赋 vs 武帝另有打算 + 匈奴年年南下/和亲送财换安宁咽不下 + 三件大业 (击匈奴/独尊儒术/通西域) + 反讽伏笔「满库钱粮会被花得见底」+ 这一遍视角',
      engagementHook: '我祖辈几十年不打仗、轻徭薄赋，攒下满库的钱粮。我接手后，想的不是让百姓继续喘气，而是用这笔家底去打一场大仗。一个攒了几代的家底，你会守着它，还是拿它去搏一件大事？',
      expectsRealAnswer: false,
    },
    {
      id: 'hw-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我接手的，是个什么样的帝国。\n\n我大汉，是在秦朝崩塌的废墟上建起来的。秦始皇修长城、严刑峻法，结果二世而亡——这个教训，我们汉朝刻在骨子里。所以开国之后，几代皇帝都走相反的路：少管、少征、与民休息。这几十年，史书叫它「文景之治」，是我祖父汉文帝、父亲汉景帝的时代。\n\n这条路给了帝国一个殷实的底子，可它也留下一个我不能忍的局面：中央软，边患重。\n\n对外，匈奴骑兵来去如风，我们打不过，只能和亲——把汉室公主嫁过去，每年再送大批丝绸粮食，换他们少来抢。这在我看来，是奇耻大辱。\n\n对内，当年开国分封出去的诸侯王，有的坐大得快要跟中央叫板。\n\n我 16 岁登基。我心里很清楚：休养生息那一套，到我这儿该结束了。我要做的，是把权、把钱、把思想，统统收紧到中央，收紧到我一个人手里。',
        en: 'First, what kind of empire I inherited.\n\nMy Han was built on the rubble of the collapsed Qin. The First Emperor of Qin built his wall and ruled by harsh law, and his dynasty fell at the second generation. That lesson my Han carved into our bones. So after the founding, several emperors took the opposite road: govern less, levy less, rest with the people. Those decades the histories call the Rule of Wen and Jing, the age of my grandfather Emperor Wen and my father Emperor Jing.\n\nThat road gave the empire a solid foundation, and it also left a situation I could not bear: a soft center and heavy trouble on the borders.\n\nAbroad, the Xiongnu horsemen came and went like the wind. We could not beat them, and could only make marriage alliances, marry a Han princess off to them and send great quantities of silk and grain each year, to buy fewer raids. To me that was a deep humiliation.\n\nAt home, some of the vassal kings enfeoffed at the founding had grown so strong they were near to defying the center.\n\nI took the throne at sixteen. I knew it clearly in my heart: the whole policy of rest and recovery should end with me. What I meant to do was draw power, money, and thought all tight to the center, tight into my one hand.',
      },
      deliverGoal: 'N2 setup — 汉建在秦崩废墟上 (秦二世而亡教训刻骨) + 文景之治 (少管少征与民休息) 攒底子但留软中央重边患 + 匈奴和亲 (嫁公主送丝绸粮食换少抢) = 奇耻大辱 + 诸侯王坐大 + 16 岁登基要把权钱思想收紧到中央一人手里',
      engagementHook: '我祖辈学的是秦朝亡国的教训：别像秦始皇那样压榨百姓，要少管少征、与民休息。可到我这儿，我偏要反过来——把权、钱、思想全收紧到我一个人手里。同一段历史教训，为什么我读出了相反的结论？',
      expectsRealAnswer: false,
    },
    {
      id: 'hw-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我做的第一件大事，不是打仗，是给帝国换一颗脑子。\n\n汉朝开国头几十年，朝廷上奉的是黄老之学——讲清静无为，少折腾。这套思想配「与民休息」很合身，可它配不上我要做的事。我要一个能让所有人、所有事，都围着皇帝这个中心转的思想。\n\n这时候，有个叫董仲舒的儒生，给我上了一套主张。他说：诸子百家各讲各的，人心就散；不如「罢黜百家，独尊儒术」——只把儒家立为官学，其余学派不再扶持。而他讲的儒家，已经被他改造过：天子是上天选定的，是天和人之间的桥；君臣、父子、上下，各有各的本分，谁也不许乱。\n\n这正是我想要的。\n\n于是我采纳了。我设立太学，专教儒家经典；选官也开始看你懂不懂这些经书。从此，读儒家的书，成了进入这个帝国权力体系的门票。\n\n（要注意:「独尊儒术」是慢慢落地的，不是一道圣旨当天就换了天。但方向，是从我这里定的。）',
        en: 'The first great thing I did was not war. It was to give the empire a new brain.\n\nIn the first decades of the Han, the court honored the teaching of the Yellow Emperor and Laozi, which preached stillness and doing little, fewer disturbances. That doctrine suited "rest with the people" well, but it could not suit what I meant to do. I wanted a thought that made every person and every matter turn around the emperor as the center.\n\nAt this time a Confucian scholar named Dong Zhongshu put a proposal to me. He said: the hundred schools each preach their own, and so the people\'s minds scatter; better to "dismiss the hundred schools and honor Confucianism alone," set up only Confucianism as official learning and stop supporting the rest. And the Confucianism he taught had already been reshaped by him: the Son of Heaven is chosen by Heaven, a bridge between Heaven and men; ruler and minister, father and son, high and low, each has his own duty, and none may break it.\n\nThis was exactly what I wanted.\n\nSo I adopted it. I set up the Imperial Academy to teach the Confucian classics, and the choosing of officials began to look at whether you knew these texts. From then on, reading the Confucian books became the ticket into this empire\'s system of power.\n\n(Note: "honoring Confucianism alone" landed slowly; it was not one edict that changed the sky in a day. But the direction was set from me.)',
      },
      deliverGoal: 'N3 setup — 第一件大事换脑子 (开国奉黄老清静无为配休息但配不上武帝大业) + 董仲舒上策「罢黜百家独尊儒术」+ 改造过的儒家 (天子受命于天/君臣父子各有本分) 正合武帝意 + 设太学/选官看经书 → 读儒书=进权力体系门票 + anti-fab 括号: 独尊儒术慢慢落地非一日 (避免时代错置)',
      engagementHook: '董仲舒劝我「罢黜百家，独尊儒术」——只立儒家一个学派，还把它改造成「皇帝是上天选的」。给一个帝国只留一种官方思想，你觉得这是让人心齐了，还是把别的声音掐掉了？',
      expectsRealAnswer: false,
    },
    {
      id: 'hw-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你坐在长安的宫里，地图摊在面前。北边那片广阔的草原，是匈奴。几十年来，你的祖辈靠送公主、送丝绸，换那条边境上一点点安宁。每送一次，你都觉得脸上挨了一巴掌。\n\n你下定决心：不送了，打。\n\n可匈奴是骑马的游牧人，来无影去无踪，你的步兵追不上他们。要打，你得有大批骑兵、大批战马、大批粮草，还得有敢深入草原几千里去找他们决战的将领。\n\n你提拔了两个年轻人：卫青、霍去病。他们带着汉军一次次北上，深入大漠，打了好几场硬仗，把匈奴往北、往西赶。霍去病打到很远的地方，封狼居胥，成了千古传颂的战功。\n\n那一刻，你扬眉吐气。送了几十年公主的耻辱，被你一战一战洗掉了。\n\n但现在你得想一件事：你打这些仗，到底是为了让边境的百姓不再被劫掠，还是为了洗你自己、洗你这个皇室咽了几十年的那口气？这两件事，在你心里，分得清吗？',
        en: 'Now you are me.\n\nYou sit in the palace at Chang\'an, the map spread before you. That wide steppe to the north is the Xiongnu. For decades your forebears traded princesses and silk for a little peace along that border. Each time you sent them, you felt a slap on your own face.\n\nYou resolve: no more sending. Fight.\n\nBut the Xiongnu are mounted nomads, here and gone without a trace, and your foot soldiers cannot chase them. To fight, you need great masses of cavalry, of war horses, of grain and fodder, and generals who dare ride a thousand li deep into the steppe to seek them out for a decisive battle.\n\nYou raise up two young men: Wei Qing and Huo Qubing. They lead the Han armies north again and again, deep into the desert, fight several hard battles, and drive the Xiongnu north and west. Huo Qubing struck far away and held a great sacrifice at Mount Langjuxu, a feat sung of for the ages.\n\nIn that moment you hold your head high. The shame of sending princesses for decades, you washed it away battle by battle.\n\nBut now you must ask one thing: in fighting these wars, was it really so the people on the border would no longer be raided, or to wash away the breath you and your imperial house had swallowed for decades? In your own heart, can you tell those two apart?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 长安地图望北匈奴 + 祖辈和亲耻辱 + 决心不送了打 + 匈奴骑兵步兵追不上需大批骑兵战马粮草 + 提拔卫青霍去病北上深入大漠 (霍去病封狼居胥) 把匈奴往北往西赶 + 扬眉吐气洗耻辱 + 自我拷问: 为边境百姓不被劫掠还是为洗皇室那口气',
      engagementHook: '我提拔卫青、霍去病，一次次深入大漠，把匈奴打跑，洗掉了送几十年公主的耻辱。可我打这些仗，到底是为了边境百姓不再被抢，还是为了洗我自己咽下的那口气？你觉得我分得清吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hw-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '打匈奴，不能只靠正面硬拼。我还要找帮手。\n\n我听说，西边很远的地方，有一个叫大月氏的部族，曾经被匈奴打得大败，国王的头盖骨都被匈奴拿去当了酒器。我想：他们一定恨匈奴。如果我派人去联络他们，约定东西夹击，匈奴不就两面受敌了吗？\n\n这条路，从来没有汉人走过。前面是匈奴的地盘，是沙漠，是雪山，谁也不知道尽头有什么。\n\n公元前 138 年，我派了一个叫张骞的郎官，带着一百多人,持节出发，去找大月氏。\n\n你猜怎么着？他一出河西走廊就被匈奴抓住，一扣就是十几年。我几乎以为他死了。可十几年后，他活着回来了，虽然出去一百多人，回来只剩两个。他没能说动大月氏一起打匈奴——可他带回来的，是另一样更大的东西。\n\n（他在外面那十几年是怎么过来的，你换到他那一遍，会从他自己嘴里听见。）\n\n他第一次让我们看清了西边那个广阔的世界：那里有城邦、有骏马、有我们没见过的物产。一条路，就这样被他一个人，用十几年的命，凿开了。',
        en: 'Beating the Xiongnu could not rest on head-on force alone. I needed allies too.\n\nI heard that far to the west was a people called the Yuezhi, who had once been crushed by the Xiongnu, their king\'s skull taken by the Xiongnu and made into a drinking cup. I thought: surely they hate the Xiongnu. If I sent a man to make contact and agree to strike from east and west together, would the Xiongnu not be caught between two fronts?\n\nThis road no Han man had ever traveled. Ahead lay Xiongnu ground, desert, snow mountains, and no one knew what was at the end.\n\nIn 138 BCE I sent an attendant officer named Zhang Qian, with more than a hundred men, bearing the staff of mission, to find the Yuezhi.\n\nDo you know what happened? No sooner had he passed beyond the Hexi corridor than the Xiongnu seized him, and held him more than ten years. I had all but thought him dead. Yet more than ten years on, he came back alive, though of the hundred-odd who set out, only two returned. He had not persuaded the Yuezhi to fight the Xiongnu with us, but what he brought back was a larger thing.\n\n(How he got through those ten-odd years out there, you will hear from his own mouth when you switch to his pass.)\n\nHe let us see clearly for the first time the wide world to the west: there were city-states, fine horses, goods we had never seen. A road was bored open, just like that, by one man, with ten-odd years of his life.',
      },
      deliverGoal: 'N5 story — 找帮手打匈奴 + 大月氏被匈奴打败 (国王头盖骨做酒器) 必恨匈奴想东西夹击 + 这条路没汉人走过 (匈奴地盘/沙漠/雪山) + 138 BCE 派张骞持节带百余人找大月氏 + 一出河西走廊被匈奴扣十几年/几乎以为死了/活着回来百余人剩两人 + 没说动大月氏但带回更大的东西 (第一次看清西边世界) + 桥到张骞 lens',
      engagementHook: '我派张骞去西边找盟友打匈奴，他一出门就被匈奴扣了十几年，出去一百多人回来只剩两个，还没说动盟友。可他带回的，是另一样更大的东西。一次「失败」的任务，能不能反而打开一扇没人想到的门？',
      expectsRealAnswer: false,
    },
    {
      id: 'hw-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我做的这几件大事，看着各不相干——立儒术、打匈奴、通西域。可你站到我这个位置上，会看见它们其实是同一道意志。\n\n就拿独尊儒术来说。\n\n表面上，它是给帝国一个统一的思想灵魂：天下读一样的书，敬一样的礼，人心就齐了。这是了不起的功业——它定下的格局，影响了中国之后两千年，连「以德治国」「尊师重道」这些至今还在的观念，根都在这儿。\n\n可你换个角度看同一件事。董仲舒那套被改造过的儒家，核心是什么？是「天子受命于天」——皇帝的权力，是上天给的，谁也不能质疑。我把别的学派都罢黜了，剩下的这一种，恰好是最替我说话、最能把所有人都安顿在我之下的那一种。\n\n所以同一道命令有两张脸：一张脸，是给帝国一个共同的灵魂；另一张脸，是给我的皇权，缝一件最合身的外衣。\n\n统一思想，和让所有思想都服从我——你说得清，这两者中间，那条线划在哪里吗？\n\n（我这道命令落到一个种田人头上是什么样，你换到那个为我的盛世买单的人那一遍，会亲眼看见。）',
        en: 'The several great things I did look unrelated, setting up Confucianism, fighting the Xiongnu, opening the west. But stand in my seat and you will see they are one and the same will.\n\nTake honoring Confucianism alone.\n\nOn its face it gives the empire one unified soul of thought: the realm reads one set of books, honors one set of rites, and the people\'s minds are made one. That is a remarkable achievement; the frame it set shaped China for the two thousand years after, and even ideas still with us, like governing by virtue and honoring teachers, have their roots here.\n\nBut look at the same thing from another angle. Dong Zhongshu\'s reshaped Confucianism, what is at its heart? "The Son of Heaven receives his mandate from Heaven," the emperor\'s power is given by Heaven, and none may question it. I dismissed the other schools, and the one I kept happened to be the one that spoke for me best, that best settled everyone below me.\n\nSo one order has two faces: one face gives the empire a common soul; the other sews my imperial power its best-fitting robe.\n\nUnifying thought, and making all thought obey me, can you tell where the line between those two is drawn?\n\n(What this order of mine looks like when it lands on one man who farms, you will see for yourself when you switch to the pass of the one who pays for my golden age.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 三件大业其实同一道意志 + 聚焦独尊儒术两张脸: 表面给帝国统一思想灵魂 (影响两千年/以德治国尊师重道根在此=了不起功业) vs 另一角度董仲舒儒家核心「天子受命于天」皇权不可质疑/罢黜别派留的这种恰好最替皇帝说话 + 一道命令两面 (给帝国灵魂 vs 给皇权缝合身外衣) + 「统一思想 vs 让所有思想服从我那条线划哪」+ 桥到戍卒 lens',
      engagementHook: '独尊儒术有两张脸：一张是给帝国一个共同的灵魂，影响了两千年；另一张是给我的皇权，缝一件最合身的外衣——只留下那个最替我说话的学派。「统一思想」和「让所有思想都服从我」，这两者中间那条线，你划得清吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hw-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在说一个我登基时没料到的麻烦：仗，太烧钱了。\n\n打匈奴要养几十万军队、几十万匹战马；通西域、修边塞、迁移百姓去戍边，每一样都是无底洞。我祖辈攒下那满库的钱粮，没几年就见了底。\n\n钱不够，怎么办？我手下有理财的能臣，给我想了一连串办法。\n\n最有名的一招，是盐和铁。盐，人人都得吃；铁，种田打仗都离不开。我下令把盐、铁收归国家专营——民间不许私自煮盐、铸铁，由官府统一生产、统一卖。这一下，巨额的利润从民间流进了国库。\n\n我还卖官、卖爵，让有钱人花钱买身份；又发行新币，整顿货币。总之，想尽办法把天下的财，往中央、往军费上聚。\n\n这些办法，确实撑住了我的战争。可你得听清另一头的声音：盐铁专营，意味着百姓买盐买铁，价高质次，没得挑。我在朝堂上算的是「军费够不够」；一个种田人在灶台前算的，是「这个月的盐钱，又涨了」。\n\n同一套敛财的本事，在我这头是「富国强兵」，在他那头是「日子越来越紧」。',
        en: 'Now a trouble I had not foreseen at my enthronement: war burns money, too much of it.\n\nFighting the Xiongnu meant feeding hundreds of thousands of soldiers and hundreds of thousands of war horses; opening the west, building border forts, moving people out to garrison the frontier, each a bottomless pit. The full storehouses my forebears had saved hit the bottom within a few years.\n\nMoney short, what to do? I had able ministers of finance who devised a string of measures for me.\n\nThe most famous move was salt and iron. Salt everyone must eat; iron neither farming nor war can do without. I ordered salt and iron taken into a state monopoly: no private boiling of salt or casting of iron was allowed, and the government produced and sold them all. With that, vast profits flowed from the people into the treasury.\n\nI also sold offices and ranks, letting the rich buy status with money, and issued new coin and reordered the currency. In short, by every means I could, I gathered the wealth of the realm toward the center and toward war funds.\n\nThese measures did hold my wars up. But you must hear the voice from the other end: a salt and iron monopoly meant the common people bought salt and iron dear and poor, with no choice. At court I reckoned whether the war funds were enough; a farmer at his stove reckoned that this month\'s salt money had gone up again.\n\nThe same skill of gathering wealth, on my end was "a rich state and a strong army," on his end was "life getting tighter and tighter."',
      },
      deliverGoal: 'N7 story — 仗太烧钱 (养几十万军队战马/通西域修边塞迁民戍边/满库钱粮见底) + 理财能臣一连串办法 + 盐铁专卖 (盐人人吃铁种田打仗离不开/收归国营禁私煮私铸/巨利入库) + 卖官卖爵/发新币 + 撑住战争但另一头: 百姓买盐铁价高质次没得挑 + 「朝堂算军费够不够 vs 灶台前算盐钱又涨了」+ 同一敛财本事两头 (富国强兵 vs 日子越来越紧)',
      engagementHook: '打仗太烧钱，我把盐和铁收归国家专卖——盐人人要吃，铁人人要用，巨额的钱就这样流进国库。我在朝堂上算军费够不够，一个种田人在灶台前算这个月盐钱又涨了。同一套敛财的本事，怎么会有两副面孔？',
      expectsRealAnswer: false,
    },
    {
      id: 'hw-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我在位 54 年，到了晚年，我开始尝到苦果。\n\n几十年的大仗，把帝国几代人的积蓄打空了。为了榨出更多的军费，赋税越来越重，徭役越来越多。各地开始出现成群的流民，甚至有人起来造反。我引以为傲的「强汉」，底下的百姓，正在被我的雄心一点点压垮。\n\n更糟的是，我老了，疑心也越来越重。晚年宫廷里出了一场大祸，叫「巫蛊之祸」——有人诬告别人用巫术诅咒我，一查再查，越牵连越广，最后连我自己的太子都被卷进去，起兵、兵败、自杀。几万人因这桩案子死掉。我亲手逼死了自己的继承人。\n\n等我冷静下来，太子已经回不来了。我后来才查明，他是被冤枉的。\n\n一个能调动几十万大军、能把路通到万里之外的皇帝，到头来，连自己的儿子都没能保住，还是死在我自己点起的猜忌里。\n\n绝对的权力，让我能做成天大的事。可它也让我身边再没有一个人敢对我说真话。',
        en: 'I reigned fifty-four years, and in my late years I began to taste the bitter fruit.\n\nDecades of great war had emptied the savings of generations of the empire. To squeeze out more war funds, taxes grew heavier and labor levies heavier. In place after place crowds of displaced people appeared, and some even rose in revolt. The "strong Han" I took such pride in, the common people beneath it were being crushed bit by bit by my ambition.\n\nWorse, I had grown old, and my suspicion grew with me. In my late years a great calamity broke out in the palace, the disaster of witchcraft accusations: someone falsely charged another with cursing me by sorcery, and as it was investigated again and again the web spread wider, until even my own crown prince was drawn in, raised troops, was defeated, and killed himself. Tens of thousands died over this case. With my own hand I drove my own heir to his death.\n\nWhen I had calmed down, the prince could not come back. Only later did I find that he had been wronged.\n\nAn emperor who could move armies of hundreds of thousands, who could run a road ten thousand li away, in the end could not even keep his own son, and lost him to the suspicion I myself had lit.\n\nAbsolute power let me do things vast as the sky. And it also left not one person beside me who dared tell me the truth.',
      },
      deliverGoal: 'N8 story — 在位 54 年晚年尝苦果 + 几十年大仗打空几代积蓄/赋税徭役越来越重/流民造反/强汉底下百姓被雄心压垮 + 巫蛊之祸 (诬告巫术诅咒/越查越广/太子被卷起兵败自杀/几万人死/亲手逼死继承人) + 后查明太子冤枉 + 「能调几十万大军通路万里却保不住自己儿子/死在自己点起的猜忌里」+ 绝对权力让人能做天大的事也让身边没人敢说真话',
      engagementHook: '我能调动几十万大军，能把路通到万里之外，可晚年我却在自己点起的猜忌里，亲手逼死了自己的太子——后来才查明他是冤枉的。绝对的权力让我能做成天大的事，却让我身边再没有一个人敢对我说真话。你觉得，这是权力的代价，还是它的本性？',
      expectsRealAnswer: false,
    },
    {
      id: 'hw-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '到我快走到生命尽头的时候，我做了一件历代皇帝几乎都不会做的事：我承认我错了。\n\n公元前 89 年，有大臣上奏，建议在西域的轮台一带继续屯田、扩张。换作年轻时的我，一定准了。可这一次，我没有。\n\n我下了一道诏书，史称「轮台诏」。在这道诏书里，我罕见地反省了自己几十年的穷兵黩武——我说，这些年劳师远征、横征暴敛，让天下百姓困苦，是我的过错；从今往后，要把重心转回到「与民休息、重视农业」上来。\n\n这几乎是一个皇帝的认罪书。一个一辈子要强、要洗刷耻辱的人，到最后，亲口承认：我走得太远，代价太大了。\n\n你想想这有多难。承认错误，对一个普通人都不容易；对一个被尊为「天子」、被告知「受命于天」的皇帝，等于当众否定自己大半生的方向。\n\n可也别把这道诏书想得太纯。它来得太晚了——该付的代价，那几十年里，已经由千千万万个我从没见过面的百姓，替我付掉了。',
        en: 'As I neared the end of my life, I did a thing almost no emperor of any age would do: I admitted I was wrong.\n\nIn 89 BCE, a minister memorialized, proposing to keep farming and expanding around Luntai in the Western Regions. The younger me would surely have approved it. But this time I did not.\n\nI issued an edict, known in history as the Luntai Edict. In it I rarely turned and reflected on my decades of warmongering: I said that these years of marching armies far and taxing harshly had brought the realm\'s people to hardship, and that this was my fault; from now on the focus should turn back to resting with the people and valuing agriculture.\n\nThis was all but an emperor\'s confession of guilt. A man who all his life was hard, who wanted to wash away shame, in the end admitted with his own mouth: I went too far, the cost was too great.\n\nThink how hard that is. Admitting a mistake is not easy even for an ordinary person; for an emperor honored as the Son of Heaven and told he "receives his mandate from Heaven," it is to deny in public the direction of most of his life.\n\nBut do not think this edict too pure either. It came too late. The price that had to be paid had, over those decades, already been paid for me by countless common people I never once met.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 临终做历代皇帝几乎不做的事承认错了 + 89 BCE 轮台诏 (大臣建议轮台屯田扩张/年轻时必准但这次没/罕见反省穷兵黩武劳师远征横征暴敛让百姓困苦是我过错/转回与民休息重视农业) + 几乎是皇帝认罪书 (要强一辈子最后承认走太远代价太大) + 对受命于天的天子等于当众否定大半生 + 但别想太纯 (来得太晚/代价已由千万没见过的百姓替他付掉)',
      engagementHook: '一辈子要强、要洗刷耻辱的我，临终前下了一道罕见的诏书，亲口承认：我穷兵黩武，让百姓困苦，是我的错。一个被告知「受命于天」的皇帝当众认错，有多难？可这道认罪书来得太晚了——代价早就由千万个我没见过面的百姓替我付掉了。一句迟来的「对不起」，能抵掉已经付出的代价吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hw-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是开创盛世的雄主。在我之前，大汉对匈奴只能忍气和亲；在我之后，匈奴被打服，西域被打通，丝绸之路从此连起东西方。我立的独尊儒术，给了中国之后两千年一个统一的思想框架。「汉」这个字成了一个民族的名字，很大程度上，是因为我这一朝把它撑成了一个真正强盛、自信的帝国。\n\n另一种说法：我是穷兵黩武的败家子。我把祖辈几代攒下的太平家底，几乎全砸进了无休止的战争。我用盐铁专营、横征暴敛榨干百姓，逼出流民和反叛。我钳制思想、晚年猜忌成性，连自己的太子都逼死了。我连自己临终都得承认——我走得太远了。我的「盛世」，是踩着无数被征发、被榨干、被压垮的普通人堆起来的。\n\n这两边不是「功大于过」一句话能抹平的。它们是同一道意志的两面——同一个想把帝国推上顶峰的雄心，既铸了千古的功业，也碾碎了无数的人。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the great ruler who opened a golden age. Before me, the Han could only swallow its breath and make marriage alliances with the Xiongnu; after me, the Xiongnu were beaten into submission, the Western Regions opened, and the Silk Road linked East and West from then on. The honoring of Confucianism I set up gave China a unified frame of thought for the two thousand years after. That the word "Han" became the name of a people is, in large part, because my reign held it up into a truly strong and confident empire.\n\nThe other view: I was a spendthrift who wore out his army on war. I smashed nearly the whole peaceful inheritance my forebears had saved over generations into endless war. I wrung the people dry with salt and iron monopolies and harsh taxes, driving them to flight and revolt. I shackled thought, grew suspicious to the bone in my old age, and drove even my own crown prince to his death. Even at my own end I had to admit it: I went too far. My "golden age" was heaped up on countless common people, conscripted, wrung dry, and crushed.\n\nThese two are not something one phrase, "the merit outweighs the fault," can smooth over. They are two faces of one will, one ambition to push the empire to its peak, which forged achievements for the ages and ground countless people to pieces alike.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (开创盛世雄主/匈奴打服西域打通丝路连东西/独尊儒术给两千年思想框架/「汉」成民族名) / 另一种说法 (穷兵黩武败家子/砸光文景家底/盐铁横征逼出流民反叛/钳制思想猜忌逼死太子/临终自认走太远/盛世踩无数被征发榨干压垮的人) / 同一道意志两面 (雄心铸功业也碾碎人) / 想 30 秒',
      engagementHook: '开创盛世的雄主，和穷兵黩武的败家子——是同一个我，同一道想把帝国推上顶峰的雄心的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'hw-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个时代？\n\n一个被叫做「盛世」的时代，被后人庆祝了两千年；同一个盛世，是用打空的国库、榨干的百姓、几十万被征去送死的人换来的。这两件事不是分开的两段历史，是同一个我、同一道雄心的同一面墙——墙是雄伟的，墙底下埋着人。把它们放在同一个天平上，你怎么称？\n\n不过先记住：你这一遍，听的只是坐在最高处、下令的我。被我派去西域、在匈奴手里熬了十几年的张骞，还有那个在田里被我的征发令拖去送死的种田人，各有各的说法——换个视角再走一遍，你会听见他们怎么讲这同一个时代，也会看看你刚才的判断，站不站得住。\n\n再想一步。你从小听到的「盛世」「强汉」——多半是从我这种坐在最高处的人的角度讲的。可一个时代到底「盛」不「盛」，问皇帝，和问那个买不起盐、儿子被征走的农民，答案会一样吗？\n\n那么，当你以后再听到「某某盛世」「某某黄金时代」这样的说法——你会不会多问一句：这盛世，是谁的盛世？它的荣光，又是谁在底下，替它扛着？',
        en: 'Having walked my whole life, how would you judge an age like this?\n\nAn age men call a golden age, celebrated by later generations for two thousand years; the same golden age, bought with an emptied treasury, a wrung-dry people, and hundreds of thousands conscripted to their deaths. These two are not separate stretches of history. They are one face of the same wall built by the same me on the same ambition: the wall is mighty, and beneath it people are buried. Put them on the same scale. How do you weigh them?\n\nBut first, remember: this pass, you heard only me, the one at the very top who gave the orders. Zhang Qian, whom I sent to the Western Regions and who endured ten-odd years in Xiongnu hands, and the farmer dragged off to his death by my conscription order in the field, each have their own case. Run it again through another lens and you will hear how they tell this same age, and see whether the judgment you just made still holds.\n\nThen take one more step. The "golden age" and "strong Han" you have heard of since childhood are mostly told from the angle of men like me, seated at the very top. But whether an age is truly "golden," ask the emperor, and ask the farmer who could not afford salt and whose son was conscripted away, will the answers be the same?\n\nSo when you next hear talk of "such-and-such golden age" or "such-and-such golden era," will you ask one more question: whose golden age is this? And its glory, who is it down below, carrying it on their back?',
      },
      deliverGoal: 'N11 close — 评价时代 (盛世被庆祝两千年 vs 打空国库榨干百姓几十万送死/同一面墙雄伟而墙下埋人同一天平) + 跨视角指针 (你只听了下令的我/张骞+戍卒各有说法/换视角再走一遍看判断站不站得住) + transfer「从小听的盛世强汉多半从最高处角度讲/问皇帝和问买不起盐儿子被征走的农民答案一样吗」+ 以后再听某某盛世黄金时代多问一句: 谁的盛世/荣光谁在底下扛',
      engagementHook: '一个盛世被庆祝两千年，可它是用打空的国库、榨干的百姓、几十万被征去送死的人换来的。你会怎么评价这样一个时代？再想一步：以后你再听到「某某盛世」「黄金时代」，会不会多问一句——这盛世，是谁的盛世？它的荣光，又是谁在底下替它扛着？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: 张骞 Zhang Qian (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var zhangQianLens = {
  id: 'zhang-qian',
  name: 'Zhang Qian',
  nameCn: '张骞',
  role: 'lonely-mediator',
  perspectiveTag: 'envoy-west',
  icon: '🐫',
  description: {
    cn: '汉中人，本是皇帝身边一个普通的郎官。公元前 138 年，他领了一桩几乎必死的差事：带着一百多人、持着汉朝的符节，往谁也没去过的西边走，去联络一个传说中的部族一起夹击匈奴。他一出河西走廊就被匈奴抓住，一扣就是十几年，在那里娶妻生子，却始终没扔掉那根代表使命的节杖。他没能完成皇帝交给他的任务，却第一次为汉朝看清了西边那个广阔的世界。这一遍让你从一个夹在两个世界之间、漂泊了大半生的使者内部，看一条改变世界的路，是怎么被一个人用十几年的命，一步步走出来的。',
    en: 'A man of Hanzhong, originally an ordinary attendant officer at the emperor\'s side. In 138 BCE he took on an errand that was nearly certain death: to lead more than a hundred men, bearing the staff of a Han mission, out to a west no one had ever crossed, to make contact with a half-legendary people and strike the Xiongnu together. No sooner had he passed the Hexi corridor than the Xiongnu seized him, and held him more than ten years, where he took a wife and had a child, yet never threw away the staff that stood for his mission. He failed the task the emperor gave him, and yet he was the first to see clearly, for the Han, the wide world to the west. This pass lets you watch, from inside an envoy caught between two worlds and adrift for most of his life, how a road that changed the world was walked open, step by step, by one man with ten-odd years of his life.',
  },
  storyboard: [
    {
      id: 'zq-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我手里有一根节。\n\n那是一根竹杖，上头系着旄牛尾做的穗子，是皇帝派我出使时交到我手里的。它代表大汉，代表我此行的使命。只要这根节在我手上，我就还是大汉的使者，不管我人在哪里。\n\n我是张骞，汉中人，本来是皇帝身边一个普通的郎官。公元前 138 年，皇帝交给我一桩差事：带人往西走，去找一个叫大月氏的部族，约他们一起夹击匈奴。\n\n那时候，西边对我们汉人来说，几乎是一片空白——地图的尽头，是传说，是沙漠，是没人回来过的地方。\n\n我没想到，这一去，是十三年。我没想到，这中间有十几年，我是在匈奴的手里度过的。我更没想到，我这趟没完成的差事，最后会改写整个东西方的历史。\n\n这一遍，你坐进我这个位置。你是一个夹在两个世界中间的人。你会发现：有些使命，哪怕没完成，也已经改变了世界。',
        en: 'In my hand I hold a staff of mission.\n\nIt is a bamboo staff, hung with a tassel of yak-tail, placed in my hand by the emperor when he sent me out as envoy. It stands for the great Han, and for the mission of my journey. So long as this staff is in my hand, I am still an envoy of the Han, no matter where I am.\n\nI am Zhang Qian, a man of Hanzhong, originally an ordinary attendant officer at the emperor\'s side. In 138 BCE the emperor gave me an errand: lead men west, find a people called the Yuezhi, and arrange to strike the Xiongnu together.\n\nIn those days the west, to us Han, was all but a blank, the end of the map, legend, desert, a place no one had come back from.\n\nI did not think this going would be thirteen years. I did not think that for ten-odd of them I would be in Xiongnu hands. Still less did I think that this unfinished errand of mine would in the end rewrite the history of all the East and West.\n\nThis pass puts you in my seat. You are a man caught between two worlds. You will find: some missions, even unfinished, have already changed the world.',
      },
      deliverGoal: 'N1 hook — 手里的节 (竹杖系旄牛尾穗/皇帝交的/代表大汉与使命/节在手就还是使者) + 张骞自我介绍 (汉中人/普通郎官) + 138 BCE 皇帝差事找大月氏夹击匈奴 + 西边对汉人是空白 (地图尽头传说沙漠没人回来过) + 没想到一去十三年/十几年在匈奴手里/没完成的差事改写东西方历史 + 这一遍视角 (夹在两个世界/有些使命没完成也改变了世界)',
      engagementHook: '皇帝交给我一根节杖、一桩差事，让我去一片汉人从没去过的西边。只要节在我手上，我就还是大汉的使者——不管我人在哪里。一个把使命系在一根杖上的人，你觉得他靠的是什么撑下去？',
      expectsRealAnswer: false,
    },
    {
      id: 'zq-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我为什么会接下这桩几乎必死的差事。\n\n那几年，皇帝刚下定决心要跟匈奴硬碰硬。他打听到一个消息：西边很远的地方，有个叫大月氏的部族，从前被匈奴打得大败，连国王的头盖骨都被匈奴砍下来做了酒器。皇帝判断：他们一定恨匈奴，恨得入骨。\n\n皇帝的算盘是：如果能派人翻山越岭找到大月氏，约定汉朝从东、月氏从西，两头一起夹击，匈奴就腹背受敌了。\n\n可这事说起来容易。去西边，第一关就是河西走廊——那时候，整条走廊都在匈奴的控制之下。换句话说，我要去找匈奴的敌人，第一步就得先从匈奴的地盘上穿过去。\n\n这是个谁都知道凶多吉少的差事。皇帝下令招募，敢去的人不多。我报了名。\n\n我不是什么大英雄，也不是天生胆大。我只是觉得：总得有人去走第一趟。如果连第一步都没人敢迈，西边对我们，就永远是一片空白。',
        en: 'First, why I took on this errand that was near certain death.\n\nIn those years the emperor had just resolved to meet the Xiongnu head on. He had heard a piece of news: far to the west was a people called the Yuezhi, who had once been crushed by the Xiongnu, their king\'s very skull cut off and made into a drinking cup. The emperor judged: surely they hate the Xiongnu, hate them to the bone.\n\nThe emperor\'s plan was this: if a man could be sent over mountains and ridges to find the Yuezhi, and agree that the Han strike from the east and the Yuezhi from the west, then the Xiongnu would be caught front and back.\n\nBut this was easier said than done. To go west, the first gate was the Hexi corridor, and in those days the whole corridor was under Xiongnu control. In other words, to seek the Xiongnu\'s enemy, my first step was to cross Xiongnu ground.\n\nIt was an errand everyone knew was more peril than promise. The emperor ordered men recruited, and few dared go. I put my name down.\n\nI was no great hero, nor born bold. I only felt: someone has to walk the first trip. If no one dares take even the first step, the west will stay a blank to us forever.',
      },
      deliverGoal: 'N2 setup — 为何接必死差事 + 皇帝决心硬碰匈奴 + 大月氏被匈奴打败 (国王头盖骨做酒器) 必恨匈奴 + 皇帝算盘东西夹击 + 但去西边第一关河西走廊全在匈奴控制下 (找匈奴敌人第一步先穿匈奴地盘) + 凶多吉少招募敢去的不多/张骞报名 + 「不是大英雄只是总得有人走第一趟/不迈第一步西边永远是空白」',
      engagementHook: '去西边的第一步，竟然是要先穿过匈奴自己的地盘——我去找匈奴的敌人，却得先从匈奴手心里过。这趟差事凶多吉少，没几个人敢去，我报了名。不是因为我胆大，只是觉得：总得有人去走第一趟。换作你，会去吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'zq-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '果然，刚出门没多久，我就出事了。\n\n公元前 138 年，我带着一百多人，从陇西出发，往西进入河西走廊。我们走得再小心，也躲不过匈奴的眼线。没多久，我们整队人被匈奴的骑兵截住、抓了起来。\n\n匈奴的单于（也就是他们的王）见了我，又好气又好笑。他说了一句很扎心的话，大意是：大月氏在我匈奴的北边，你们汉朝凭什么派使者越过我的地盘去找他们？这就好比，我匈奴要派人穿过你们汉朝，去南边联络越人，你们汉朝肯吗？\n\n他没杀我。他把我和我的人扣了下来，软禁在匈奴。为了拴住我，他还给我娶了一个匈奴妻子，让我在草原上安家、生子。\n\n日子一年一年过去。匈奴待我不算太差，可我心里那根弦一直没松：我是大汉派出来的使者，我的差事还没办成。\n\n那根代表使命的节杖，我一直留在身边，没有丢。哪怕过了五年、十年，哪怕我已经有了草原上的家——只要那根节还在，我就告诉自己：我还是张骞，我还在路上。',
        en: 'Sure enough, not long after setting out, disaster struck.\n\nIn 138 BCE I led more than a hundred men out from Longxi, west into the Hexi corridor. However carefully we moved, we could not slip past the Xiongnu\'s watchers. Before long our whole party was intercepted by Xiongnu horsemen and seized.\n\nThe Xiongnu chanyu, that is, their king, when he saw me, was half angry and half amused. He said a thing that cut deep, to this effect: the Yuezhi are to the north of my Xiongnu, so by what right does your Han send an envoy across my ground to find them? It is as if my Xiongnu wished to send a man through your Han to make contact with the Yue people to the south. Would your Han allow it?\n\nHe did not kill me. He held me and my men, kept under guard among the Xiongnu. To tie me down, he even gave me a Xiongnu wife, let me make a home and have a child on the steppe.\n\nThe years went by, one after another. The Xiongnu did not treat me too badly, yet the string in my heart never slackened: I was an envoy sent out by the great Han, and my errand was not yet done.\n\nThat staff that stood for my mission, I kept by me always, and never lost it. Even after five years, ten years, even after I had a home on the steppe, so long as that staff remained, I told myself: I am still Zhang Qian, I am still on the road.',
      },
      deliverGoal: 'N3 setup — 刚出门出事 + 138 BCE 带百余人从陇西西进河西走廊/躲不过匈奴眼线整队被截抓 + 单于扎心的话 (大月氏在匈奴北/汉凭什么越我地盘去找/好比匈奴穿汉去南边联越人你们肯吗) paraphrase 非伪造引文 + 没杀扣下软禁/娶匈奴妻安家生子拴住他 + 一年年过去待他不算太差但心弦没松 (使命没办成) + 节杖一直留身边没丢 (五年十年有了草原家/节在就还是张骞还在路上)',
      engagementHook: '匈奴单于反问我：大月氏在我北边，你们汉朝凭什么越过我的地盘去找他们？这话我答不上来。他没杀我，反而给我娶妻安家，把我软禁了十几年。可那根代表使命的节杖，我五年、十年都没丢。在一个让你慢慢忘记自己是谁的地方，你靠什么记住「我还在路上」？',
      expectsRealAnswer: false,
    },
    {
      id: 'zq-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你已经在匈奴待了十年。你有了草原上的妻子、孩子。匈奴人对你渐渐放松了看管，因为他们觉得：这个汉人，大概早就认命了，不会再走了。\n\n可你心里那根弦，一直绷着。\n\n有一天，机会来了。看守松懈，你瞅准了一个空子。\n\n现在你要做一个决定。摆在你面前的，是两条路。\n\n一条路：留下。你在这里有家、有妻儿，匈奴待你也还过得去。你已经被困了十年，谁还会怪一个被困十年的人选择活下去？回汉朝的路，前途未卜，九死一生。\n\n另一条路：走。带上那根你一直没丢的节杖，继续往西，去完成那桩十年前没办成的差事。可这一走，你就要抛下草原上的妻儿，独自踏进更远、更未知的西方。\n\n你会怎么选？是认下这草原上的安稳，还是带上一根早就该过期的节杖，继续去走一条没人知道尽头的路？',
        en: 'Now you are me.\n\nYou have been among the Xiongnu ten years. You have a wife and children on the steppe. The Xiongnu have slowly loosened their watch over you, because they reckon: this Han man has surely long since accepted his lot, and will not leave again.\n\nBut the string in your heart stays taut.\n\nOne day the chance comes. The watch slackens, and you mark an opening.\n\nNow you must make a decision. Before you lie two roads.\n\nOne road: stay. Here you have a home, a wife and children, and the Xiongnu treat you well enough. You have been trapped ten years; who would blame a man trapped ten years for choosing to live? The road back to the Han is uncertain, near certain death.\n\nThe other road: go. Take up the staff you never lost, keep heading west, and finish the errand you failed to finish ten years ago. But to go is to abandon the wife and children on the steppe, and step alone into a west farther and more unknown.\n\nWhich would you choose? To accept this steppe peace, or to take up a staff long since expired and go on walking a road whose end no one knows?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 已在匈奴十年有草原妻儿/匈奴放松看管 (以为认命不会走) + 心弦一直绷着 + 机会来了看守松懈瞅空子 + 两条路决定: 留 (有家有妻儿匈奴待他过得去/困十年谁怪他活下去/回汉九死一生) vs 走 (带没丢的节杖往西完成十年前差事/但抛下草原妻儿独闯更远未知西方) + 拷问: 认草原安稳还是带早该过期的节杖继续走没人知道尽头的路',
      engagementHook: '困了十年，我有了草原上的妻儿，匈奴也不再盯着我。谁会怪一个被困十年的人选择留下来好好活？可一个逃跑的机会出现了——走，就要抛下妻儿，去完成一桩早就该作废的差事。是认下这份安稳，还是带上那根节杖继续往西？你会怎么选？',
      expectsRealAnswer: false,
    },
    {
      id: 'zq-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我选了走。\n\n我趁看守松懈，带着随从，逃了出来。可我没有往东跑回汉朝——我往西，继续去完成十年前那桩差事。十年的囚禁，没把我那根弦磨断。\n\n我一路向西，穿过沙漠，翻过雪山，终于找到了大月氏。\n\n可这时候，事情已经变了。\n\n大月氏在西迁的途中，找到了一块水草丰美、安稳富庶的新地方住下了。十年过去，他们早已不是当年那个被匈奴追着打、满心复仇的部族了。日子安稳了，仇恨也就淡了。\n\n我把汉朝的提议讲给他们听：东西夹击，一起报仇打匈奴。他们听完，客客气气，却始终没有答应。\n\n我在大月氏那里待了一年多，反复游说，终究没能说动他们。\n\n你看，调停者最难堪的一刻，就是这样：你拼了十年的命赶到，要促成一桩联盟，对方却已经不需要这桩联盟了。我千辛万苦带来的，是一个过了时的提议。从「完成皇帝交代的任务」这个意义上说——我，失败了。',
        en: 'I chose to go.\n\nWhile the watch was slack I escaped with my followers. But I did not run east, back to the Han. I went west, to finish that errand of ten years before. Ten years of captivity had not worn through the string in me.\n\nI went on west, crossed the desert, climbed over snow mountains, and at last found the Yuezhi.\n\nBut by now things had changed.\n\nOn their westward migration the Yuezhi had found a place of rich water and grass, settled and prosperous, and made their home there. Ten years gone, they were no longer the people once hounded by the Xiongnu, their hearts full of vengeance. With life secure, the hatred had faded too.\n\nI laid the Han\'s proposal before them: strike from east and west, and take revenge on the Xiongnu together. They heard me out, courteous, and yet never agreed.\n\nI stayed among the Yuezhi over a year, pressed my case again and again, and in the end could not move them.\n\nYou see, the most painful moment for a go-between is just this: you race ten years of your life to bring about an alliance, and the other side no longer needs the alliance. What I brought through such hardship was an outdated proposal. In the sense of "completing the task the emperor charged me with," I failed.',
      },
      deliverGoal: 'N5 story — 选了走/趁松懈带随从逃出/没往东跑回汉朝而往西继续完成差事 (十年囚禁没磨断弦) + 穿沙漠翻雪山找到大月氏 + 但事情变了 (西迁找到水草丰美新地安顿/十年过去不再是被追打满心复仇的部族/日子安稳仇恨淡了) + 讲汉朝提议东西夹击报仇/客气却没答应 + 待一年多反复游说终究没说动 + 「调停者最难堪一刻: 拼十年命赶到对方已不需要这联盟/带来过时的提议/从完成任务说我失败了」',
      engagementHook: '我拼了十年命逃出来、翻山越岭赶到大月氏，要约他们一起报仇打匈奴。可他们已经在新地方安顿下来，仇恨淡了，不需要这桩联盟了。我千辛万苦带来的，是一个过了时的提议。一个使者拼命完成的任务，到头来对方根本不需要——这算谁的错？',
      expectsRealAnswer: false,
    },
    {
      id: 'zq-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '差事是失败了。可我在外面这十几年，并没有白过。\n\n我这个人有个习惯：走到哪儿，看到哪儿，记到哪儿。在匈奴、在大月氏、在沿途经过的一个个西域城邦，我把看见的一切都记在心里——那里的山川、道路、城池、人口、物产、风俗。哪里产好马，哪里有美玉，哪条路能通到更远的地方。\n\n回到汉朝以后，我把这些，原原本本讲给了皇帝。\n\n这就是为什么后人说，我「凿空」了西域——「凿空」，就是凿穿了一片原本不通的空白。在我之前，西边对汉人是一团迷雾；在我之后，那片广阔的世界，第一次有了清晰的轮廓。\n\n现在你站到我这个位置，会看见一件事的两面。\n\n皇帝当初派我出去，目的只有一个：找军事盟友，去打匈奴。这是一条为战争而生的路。可这条为打仗而开的路，最后变成了一条做生意、通使节、传文化的路——后世叫它丝绸之路。汉朝的丝绸经它运向西方，西方的骏马、葡萄、苜蓿、乐器顺它传进中原。\n\n同一条路：它的起点，是皇帝的战争野心；它的尽头，却是东西方两个世界第一次真正握上了手。一件事，两个方向。\n\n（这条路通了之后，它的另一头连着谁、那个同时代正在扩张的西方帝国是什么样，你换到那个为盛世买单的人那一遍，会从另一个角度再碰到。）',
        en: 'The errand failed. But these ten-odd years out there were not wasted.\n\nI have a habit: wherever I go, I look, and I remember. Among the Xiongnu, among the Yuezhi, in the city-states of the Western Regions I passed along the way, I held in mind all I saw, the mountains and rivers, the roads, the walled towns, the peoples, the goods, the customs. Where the good horses were bred, where the fine jade was found, which road could carry on to somewhere farther.\n\nWhen I returned to the Han, I told the emperor all of this, just as it was.\n\nThis is why later ages say I "bored open" the Western Regions. To bore open is to bore through a blank that had not connected before. Before me, the west was a fog to the Han; after me, that wide world had, for the first time, a clear outline.\n\nNow stand in my seat and you will see two faces of one thing.\n\nThe emperor sent me out for one purpose only: to find a military ally to fight the Xiongnu. It was a road born for war. Yet this road opened for war became in the end a road of trade, of envoys, of culture, the road later ages call the Silk Road. Han silk traveled west along it, and western horses, grapes, alfalfa, and instruments came into the central lands along it too.\n\nThe same road: its starting point was the emperor\'s ambition for war; its end was the first time the two worlds of East and West truly clasped hands. One thing, two directions.\n\n(Once this road opened, who lay at its other end, and what that contemporary expanding empire of the west looked like, you will meet again from another angle when you switch to the pass of the one who pays for the golden age.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 差事失败但十几年没白过 + 张骞习惯走到哪记到哪 (山川道路城池人口物产风俗/哪产好马哪有美玉哪条路通更远) + 回汉原原本本讲给皇帝 + 「凿空」西域 (凿穿不通的空白/之前迷雾之后清晰轮廓) + 一件事两面: 皇帝派他只为找军事盟友打匈奴 (为战争而生的路) vs 最后变成做生意通使节传文化的丝绸之路 (丝绸西运/骏马葡萄苜蓿乐器东传) + 同一条路 (起点皇帝战争野心 vs 尽头东西方第一次握手) 一件事两个方向 + 桥到戍卒 lens + 同代世界 (西方扩张帝国) 伏笔',
      engagementHook: '皇帝派我出去，只为一件事：找盟友打匈奴——这是一条为战争而生的路。可这条为打仗开的路，最后却变成了一条做生意、传文化的丝绸之路，让东西方第一次握上了手。同一条路，起点是战争的野心，尽头却是两个世界的相遇。一件事，怎么会朝两个完全不同的方向长去？',
      expectsRealAnswer: false,
    },
    {
      id: 'zq-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '回到汉朝以后，我的价值，反而比出发前更大了。\n\n因为我是唯一一个亲眼见过西域、能说清那边情况的人。皇帝把我当成宝贝，封了我官，凡是跟西域有关的大事，都要听我的意见。\n\n公元前 119 年前后，匈奴被卫青、霍去病打得往北退了，河西走廊腾了出来。皇帝又派我出使，这次是去联络更西边的乌孙等部族。这一回我风光多了：带着三百多人、上万头牛羊、大批金帛，浩浩荡荡地往西去。我还派副使分头去了更远的好几个国家。\n\n从此，汉朝和西域之间，使者来来往往，络绎不绝。一条路，被踩成了大路。\n\n可你别只看我风光的这一面。\n\n我两次出使，前前后后,带出去多少人、多少牛羊、多少金帛？这些，全是从这个帝国的民力、财力里出的。我在西域受到的每一次款待、我送出去的每一匹丝绸，背后都是无数个种田、养蚕、服役的普通人，在替这桩「国家大业」掏腰包、出力气。\n\n我站在西域的城邦里，被当成上邦来的贵客。可撑起我这份体面的，是远在中原、我永远不会认识的那些人。',
        en: 'After I returned to the Han, my worth grew greater than before I set out.\n\nFor I was the only man who had seen the Western Regions with his own eyes and could speak clearly of conditions there. The emperor treated me as a treasure, gave me office, and in every great matter touching the west, my view was sought.\n\nAround 119 BCE, the Xiongnu had been driven north by Wei Qing and Huo Qubing, and the Hexi corridor opened up. The emperor sent me out again, this time to make contact with the Wusun and other peoples farther west. This time I went in far greater state: more than three hundred men, tens of thousands of cattle and sheep, great stores of gold and silk, a grand procession heading west. I sent deputy envoys off separately to several states farther still.\n\nFrom then on, envoys passed back and forth between the Han and the Western Regions without cease. A road was trodden into a highway.\n\nBut do not look only at this glorious side of me.\n\nOn my two missions, all told, how many men, how many cattle and sheep, how much gold and silk did I take out? All of it came from this empire\'s strength of labor and of wealth. Every welcome I received in the Western Regions, every bolt of silk I gave away, behind it were countless ordinary people, farming, raising silkworms, serving in labor, paying out of their own pockets and their own backs for this "great work of state."\n\nI stood in the city-states of the Western Regions, treated as an honored guest from a great realm. But what held up this dignity of mine were people far off in the central lands, whom I would never know.',
      },
      deliverGoal: 'N7 story — 回汉价值更大 (唯一亲见西域能说清情况/皇帝当宝贝封官/西域大事听他意见) + c.119 BCE 二次出使 (匈奴被卫青霍去病打退河西腾出/联络乌孙等/带三百余人上万牛羊大批金帛浩荡西去/派副使分头去更远国家) + 从此使者络绎不绝路踩成大路 + 但别只看风光 + 两次出使带出的人牛羊金帛全出自帝国民力财力 + 每次款待每匹丝绸背后是无数种田养蚕服役的普通人替国家大业掏腰包出力 + 「我被当上邦贵客/撑起体面的是中原我永远不认识的人」',
      engagementHook: '第二次出使我风光多了：带着三百多人、上万头牛羊、大批金帛，浩浩荡荡西去，被西域当成上邦贵客。可撑起我这份体面的，是远在中原、我永远不会认识的那些种田、养蚕、服役的普通人。当一个人代表「国家」出风头，谁在背后替这份风光买单？',
      expectsRealAnswer: false,
    },
    {
      id: 'zq-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这辈子，大半都在路上，或者在等着上路。\n\n第二次出使乌孙回来不久，公元前 114 年，我就病死了。我没能看见这条路后来变得多繁忙，没能看见西域的城邦一个个跟汉朝建立往来，没能看见「丝绸之路」这四个字被后人一遍遍传颂。\n\n我想跟你说的，是另一件事。\n\n后世记住了我——史书给了我名字，给了我「凿空」西域这个评价，把我写成一个传奇。可你要知道：跟我一起出发的那一百多人，回来的只有两个。那剩下的九十多个，死在了沙漠里、雪山上、匈奴的刀下。他们也走了那条路，也吃了那份苦，可他们一个名字都没留下。\n\n还有我那些副使带的随从、那些赶着牛羊的人、那些在路上倒下的役夫——这条「凿空」的路，不是我一个人凿的。是许许多多没有名字的人，用脚、用命，一寸一寸踩出来的。\n\n历史只来得及记住带头的那一个。可路，从来不是一个人走出来的。',
        en: 'Most of my life was on the road, or waiting to set out.\n\nNot long after I returned from the second mission to the Wusun, in 114 BCE, I died of illness. I did not live to see how busy this road later became, did not see the city-states of the west each open dealings with the Han, did not see the four characters "Silk Road" recited again and again by later generations.\n\nWhat I want to tell you is another thing.\n\nLater ages remembered me. The histories gave me a name, gave me the judgment that I "bored open" the Western Regions, wrote me into a legend. But you must know: of the hundred-odd men who set out with me, only two came back. The other ninety-odd died in the desert, on the snow mountains, under Xiongnu blades. They walked that road too, ate that bitterness too, and not one of them left a name.\n\nAnd the followers my deputy envoys took, the men who drove the cattle and sheep, the laborers who fell on the road, this road I "bored open" was not bored by me alone. It was trodden out, inch by inch, by a great many nameless people, with their feet and with their lives.\n\nHistory only had time to remember the one who led. But a road is never walked open by one man.',
      },
      deliverGoal: 'N8 story — 大半生在路上或等上路 + 114 BCE 二次出使乌孙回来不久病死 + 没看见路后来多繁忙/西域城邦跟汉往来/丝绸之路被传颂 + 但另一件事 + 后世记住他 (史书给名字给凿空评价写成传奇) + 但跟他出发百余人回来只剩两个/剩九十多死沙漠雪山匈奴刀下/也走那路吃那苦却一个名字没留 + 副使随从赶牛羊的人路上倒下的役夫 + 「凿空的路不是他一个人凿的/许多没名字的人用脚用命一寸寸踩出来」+ 「历史只来得及记住带头那一个/路从来不是一个人走出来的」',
      engagementHook: '后世把我写成传奇，给了我「凿空西域」的名声。可跟我一起出发的一百多人，回来只剩两个——剩下九十多个死在沙漠、雪山、匈奴的刀下，一个名字都没留下。这条路不是我一个人凿的，是许多没名字的人用命一寸寸踩出来的。历史只来得及记住带头的那一个，这公平吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'zq-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我死之后，这条路，越走越宽，远远超出了皇帝当初的算盘。\n\n皇帝派我出去，本来只是想找个盟友打匈奴。可这条路一通，它带来的，是谁都没预料到的东西。\n\n往后的几百年，汉朝的丝绸顺着这条路，一站一站运向西方，最远到了罗马那样遥远的帝国——那边的贵族，为一匹中国丝绸一掷千金。而西方的良马、葡萄、苜蓿、各种乐器和奇珍，也顺着这条路传进中原。后来，佛教也是顺着这条商路，一点一点传入中国的。\n\n这条「凿空」之路，把两个原本互不知道对方存在的世界，连成了一张网。\n\n你看出这里头的反讽了吗：皇帝的本意，是战争——找盟友、打匈奴。可这条为战争而开的路，留给后世最珍贵的遗产，恰恰是和平的那一面：通商、交流、文明的彼此照亮。\n\n一个人为了一个目的去做一件事，做出来的结果，却可能朝着一个他从没想过的方向，长成参天大树。我这趟没办成的差事，就是最好的例子。',
        en: 'After I died, this road grew wider and wider, far beyond the emperor\'s original plan.\n\nThe emperor sent me out only to find an ally to fight the Xiongnu. But once this road opened, what it brought was something no one had foreseen.\n\nIn the centuries that followed, Han silk traveled west along this road, stage by stage, as far as empires distant as Rome, where the nobles paid fortunes for a single bolt of Chinese silk. And western fine horses, grapes, alfalfa, all manner of instruments and rare things, came into the central lands along it too. Later, Buddhism also entered China, bit by bit, along this trade road.\n\nThis road, "bored open," joined two worlds that had not known of each other\'s existence into one web.\n\nDo you see the irony in it: the emperor\'s intent was war, to find an ally and fight the Xiongnu. Yet this road opened for war left to later ages its most precious legacy on exactly the side of peace, trade, exchange, the mutual lighting of civilizations.\n\nA man does a thing for one purpose, and the result it makes may grow, in a direction he never imagined, into a towering tree. This unfinished errand of mine is the best example of it.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 死后路越走越宽超出皇帝算盘 + 派他本只为找盟友打匈奴/路一通带来谁都没预料的东西 + 往后几百年丝绸顺路西运最远到罗马 (贵族一掷千金买丝绸) + 西方良马葡萄苜蓿乐器奇珍东传 + 佛教顺商路传入中国 + 「凿空之路把两个互不知道对方存在的世界连成网」+ 反讽: 皇帝本意是战争/为战争开的路留给后世最珍贵的是和平那面 (通商交流文明照亮) + 「为一个目的做一件事结果朝没想过的方向长成大树/没办成的差事是最好的例子」',
      engagementHook: '皇帝派我，本意是战争——找盟友、打匈奴。可这条为战争开的路，留给后世最珍贵的遗产，恰恰是和平那一面：丝绸西运到罗马，佛教东传入中原，两个世界第一次相遇。我那趟没办成的差事，长成了一棵我从没想象过的参天大树。一件事的结果，会不会常常背离它出发时的目的？',
      expectsRealAnswer: false,
    },
    {
      id: 'zq-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是一个伟大的开拓者。我用十三年、用大半条命，第一次为汉朝凿穿了西域，让中原和西方两个世界第一次连上了线。我带回的见闻，开出了一条延续千年、连通东西方的丝绸之路。后世记住我的名字，称我「凿空」，我当得起。一个普通的郎官，硬是凭一根节杖和一股不肯放弃的劲，改写了世界。\n\n另一种说法：我是一台扩张机器上一颗最亮的零件。说到底，我出发，是为了帮皇帝打仗；我开的路，起点是帝国的军事野心。我两次出使耗费的人力物力，是从无数种田人身上榨出来的；跟我同行而死在路上的几十人，连名字都没留下。我个人的传奇越闪亮，越容易让人忘记：这条路的底色，是战争，是征发，是许许多多没被记住的人垫在下面。\n\n这两边不是「功臣还是工具」二选一。它们是同一个我的两面——我既是真心想走通这条路的开拓者，也是皇帝那架庞大机器派出去的一只手。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a great pioneer. With thirteen years, with most of my life, I bored open the Western Regions for the Han for the first time, and joined the two worlds of the central lands and the west for the first time. What I brought back opened a Silk Road that lasted a thousand years and linked East and West. Later ages remember my name, call me the one who "bored open" the way, and I deserve it. An ordinary attendant officer, by sheer force of a single staff and a refusal to give up, rewrote the world.\n\nThe other view: I was the brightest part on a machine of expansion. In the end, I set out to help the emperor make war; the road I opened began in the empire\'s military ambition. The men and goods my two missions consumed were wrung out of countless farmers; the dozens who traveled with me and died on the road left not even a name. The brighter my personal legend shines, the easier it is to forget: the ground tone of this road was war, conscription, and a great many unremembered people laid beneath it.\n\nThese two are not a choice between "hero" or "tool." They are two faces of the same me, both the pioneer who truly wished to walk this road through, and a hand sent out by the emperor\'s vast machine.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (伟大开拓者/十三年大半条命凿穿西域连东西方/带回见闻开千年丝路/凿空当得起/普通郎官凭节杖和不放弃改写世界) / 另一种说法 (扩张机器上最亮的零件/出发为帮皇帝打仗/路起点是军事野心/两次出使耗的人力物力从种田人榨出/同行死几十人没留名/个人传奇越亮越让人忘记路的底色是战争征发与没被记住的人) / 同一个我两面 (真心开拓者 + 皇帝机器派出的一只手) / 想 30 秒',
      engagementHook: '伟大的开拓者，和一台扩张机器上最亮的零件——是同一个我的两面。我既真心想走通这条路，也是皇帝那架庞大机器派出去的一只手。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'zq-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生：一根没丢的节杖，十几年的囚禁，一桩没办成的差事，一条意外凿穿的路，几十个死在途中、没留下名字的同伴——你会怎么评价这样一段历程？\n\n一条连通东西方、被传颂千年的丝绸之路，它的起点，却是一场战争的算计，和无数被征发、被榨干的普通人。你会说我是凭一己之力改写世界的开拓者，还是一台扩张机器上身不由己的零件？你怎么评？\n\n不过先记住：你这一遍，听的只是我这个被派出去、半生在路上的使者。下令派我去的汉武帝，还有那个连出门的机会都没有、只能在田里替这一切买单的种田人，各有各的说法——换个视角再走一遍，你会听见他们怎么讲这同一个时代，也会看看你刚才的判断，站不站得住。\n\n再想一步。我这一生最像样的成就，恰恰是一桩「失败的任务」长出来的——我没说动大月氏，却凿通了一条路。\n\n那么在你自己的生活里：是不是也有过一件事，你照着原来的目的去做，结果没做成，可它却意外地，把你带去了一个更好、更没想到的地方？当一件事「没按计划成功」的时候，你会急着判它失败，还是会再等一等，看看它到底会长成什么样？',
        en: 'Having walked my whole life, a staff never lost, ten-odd years of captivity, an errand never finished, a road bored open by accident, dozens of companions dead on the way who left no name, how would you judge a journey like this?\n\nA Silk Road that linked East and West and was sung of for a thousand years, and yet its starting point was the reckoning of a war, and countless conscripted, wrung-dry common people. Would you call me a pioneer who rewrote the world by his own strength, or a part on a machine of expansion, carried along against his will? How do you judge it?\n\nBut first, remember: this pass, you heard only me, the envoy sent out, half his life on the road. Emperor Wu, who ordered me sent, and the farmer who never even had the chance to leave home and could only pay for all of it in the field, each have their own case. Run it again through another lens and you will hear how they tell this same age, and see whether the judgment you just made still holds.\n\nThen take one more step. The most worthy achievement of my life grew, of all things, out of a "failed task." I did not move the Yuezhi, and yet I bored a road through.\n\nSo in your own life: has there been a thing you did toward its original purpose, that did not come off, and yet unexpectedly carried you to a better, less imagined place? When a thing "does not succeed as planned," will you rush to call it a failure, or wait a while longer and see what it grows into?',
      },
      deliverGoal: 'N11 close — 评价历程 (没丢的节杖/十几年囚禁/没办成的差事/意外凿穿的路/几十个死途中没留名的同伴 → 一己之力改写世界的开拓者 vs 扩张机器上身不由己的零件) + 跨视角指针 (你只听了被派出去的使者/汉武帝+戍卒各有说法/换视角再走一遍看判断站不站得住) + transfer「张骞特有: 最像样的成就恰是失败任务长出来的 (没说动大月氏却凿通路)」+ 你生活里有没有照原目的做没做成却意外带去更好地方的事 + 「没按计划成功」时急着判失败还是再等等看长成什么样',
      engagementHook: '走完我这一生，你会怎么评价这样一段历程？我这辈子最像样的成就，恰恰是一桩「失败的任务」长出来的——我没说动盟友，却凿通了一条改变世界的路。在你自己的生活里，有没有一件事你没做成，却意外把你带去了一个更好的地方？「没按计划成功」时，你会急着判它失败，还是再等等看它长成什么样？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: 戍卒 / 为盛世买单的农民 The Conscript-Peasant (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var conscriptPeasantLens = {
  id: 'conscript-peasant-receiving-end',
  name: 'A Conscript-Peasant',
  nameCn: '一个戍卒',
  role: 'receiving-end',
  perspectiveTag: 'golden-age-bearer',
  icon: '🌾',
  description: {
    cn: '一个虚构的普通农民，代表汉武帝盛世底下千千万万没有名字的人。他原本在家乡种田、养蚕、娶妻、有个还没长大的儿子。文景之治那几十年的太平，他赶上了尾巴。可到了汉武帝这一朝，仗一场接一场地打，赋税越来越重，盐铁越来越贵，一道征发令最终落到他头上，把他从田里拖去遥远的边塞。在官府的账册上，他不是一个人，是「盛世」这台大机器需要的一份力气。这一遍，你从那个被歌颂了两千年的「汉武盛世」本来没打算记住的人这边，看这个时代。看一座所有人都赞颂的盛世，到底是谁在底下背着。',
    en: 'An invented common farmer, standing for the countless nameless people beneath Emperor Wu\'s golden age. He had been farming, raising silkworms, with a wife and a son not yet grown in his home village. He caught the tail end of the decades of peace under the Rule of Wen and Jing. But in Emperor Wu\'s reign the wars came one after another, taxes grew heavier, salt and iron grew dearer, and a conscription order fell at last on him, dragging him from his field to a far frontier. In the government ledgers he was not a person but a portion of strength that the great machine of the "golden age" required. This pass lets you see this age from the side of the people that the "golden age of Emperor Wu," sung of for two thousand years, never planned to remember, to see who, beneath a golden age all men praise, was carrying it on his back.',
  },
  storyboard: [
    {
      id: 'cp-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我没有名字留下来。\n\n你在史书里找不到我。皇帝有名字，丞相有名字，连那个出使西域的张骞都有名字。我没有。我只是官府账册上的一个数字——「发卒若干」里的那个「若干」之一。\n\n我原本在家乡种田、养蚕。有一小块地，一个妻子，一个还没长大的儿子。我这辈子最大的盼头，就是地里能多收点粮，蚕能多吐点丝，看着儿子长大。\n\n我赶上过几年好日子。老人们说，那叫「文景之治」——皇帝不怎么打仗，赋税也轻，日子能喘口气。\n\n可到了新皇帝这一朝，一切都变了。直到有一天，一道征发的文书贴到了村口，亭长念到了我的名字。\n\n这一遍，你站在我这里看那个被你们叫做「盛世」的时代。不是从下令打仗的皇帝那边看，不是从凿空西域的使者那边看，是从这个「盛世」本来没打算记住的人这边看。',
        en: 'I left no name behind.\n\nYou will not find me in the histories. The emperor has a name, the chancellor has a name, even Zhang Qian who went as envoy to the west has a name. I do not. I am only a number in a government ledger, one of the "so many conscripts levied," one among the "so many."\n\nI had been farming and raising silkworms in my home village. A small plot of land, a wife, a son not yet grown. The greatest hope of my life was for a little more grain from the field, a little more silk from the worms, and to watch my son grow.\n\nI caught a few good years. The old folk called it the Rule of Wen and Jing, when the emperor fought few wars, the taxes were light, and life could catch its breath.\n\nBut in the new emperor\'s reign, everything changed. Until one day a conscription notice was pasted at the village gate, and the village head read out my name.\n\nThis pass, you stand where I stand and look at the age you call a golden age. Not from the side of the emperor who ordered the wars, not from the side of the envoy who bored open the west, but from the side of the people this "golden age" never planned to remember.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 没有名字 (史书找不到/皇帝丞相连张骞都有名他没有/账册上一个数字「发卒若干」之一) + 原本种田养蚕有地有妻儿 + 盼头多收粮多吐丝看儿子长大 + 赶上过文景之治好日子 (不打仗赋税轻能喘气) + 新皇帝这一朝一切变了 + 村口贴征发文书亭长念到名字 + 这一遍从盛世没打算记住的人看 (不从下令的皇帝/不从凿空的使者)',
      engagementHook: '皇帝有名字，丞相有名字，连出使西域的张骞都有名字。我没有——我只是官府账册上的一个数字。你怎么想象「在一个被歌颂两千年的盛世里，连个名字都没留下」是什么滋味？',
      expectsRealAnswer: false,
    },
    {
      id: 'cp-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说在那道文书来之前，日子是怎么一点点变样的，你才懂后来那条路意味着什么。\n\n我小时候，赶上过太平年景。老人们总念叨，新朝开国那几代皇帝，吸取了秦朝把百姓榨垮、二世而亡的教训，对我们这些种田的，管得松、征得少。粮够吃，税不重，农闲了还能歇歇。那是我记忆里最好的几年。\n\n可新皇帝登基以后，风向慢慢变了。\n\n先是听说，北边在跟匈奴打大仗了——一场接一场，越打越大。打仗要钱、要粮、要人。于是赋税一年比一年重，徭役一年比一年多。\n\n再后来，连盐和铁，都归官府专卖了。盐是天天要吃的，铁是种地的农具、做饭的锅，谁家离得开？官府一垄断，价就上去了，质还差。我妻子每次称盐回来，都念叨一句：这盐，怎么又贵了。\n\n我那时候还不太懂朝廷在远方谋的那些大事。我只知道一件实实在在的事：这个号称越来越强盛的国家，落到我们家灶台上，是日子一年比一年紧。',
        en: 'First, let me tell you how life slowly changed before that notice came, so you understand what that road later meant.\n\nWhen I was a child I caught the years of peace. The old folk always said that the first emperors of the new dynasty, having taken the lesson of how Qin wrung the people dry and fell at the second generation, held us farmers loosely and levied us lightly. There was grain enough, the taxes were not heavy, and in the farming off-season we could even rest. Those were the best years in my memory.\n\nBut after the new emperor took the throne, the wind slowly shifted.\n\nFirst came word that the north was at great war with the Xiongnu, one campaign after another, growing larger. War wants money, grain, men. So taxes grew heavier year by year, and labor levies heavier year by year.\n\nLater still, even salt and iron were taken into government monopoly. Salt is eaten every day; iron is the tools of farming, the pot for cooking, what household can do without it? Once the government monopolized it, the price went up and the quality fell. Every time my wife came back from weighing out salt, she would mutter the same thing: this salt, how has it gone dearer again.\n\nI did not much understand, then, the great matters the court schemed far away. I knew only one solid thing: this state that boasted of growing stronger and stronger, when it reached our family stove, was life getting tighter year by year.',
      },
      deliverGoal: 'N2 setup — 文书来前日子一点点变样 + 小时候赶上太平年景 (新朝吸取秦榨垮二世而亡教训/对农民管松征少/粮够税不重农闲能歇=记忆里最好几年) + 新皇帝登基风向变 + 北边跟匈奴打大仗一场接一场 (打仗要钱粮人/赋税徭役一年比一年重) + 盐铁归官府专卖 (盐天天吃铁是农具是锅/垄断价上质差/妻子念叨盐又贵了) + 「不懂朝廷远方大事只知道实实在在: 号称越来越强盛的国家落到灶台上是日子一年比一年紧」',
      engagementHook: '我赶上过太平日子——新朝头几代皇帝吸取了秦朝榨垮百姓、二世而亡的教训，对我们管得松。可新皇帝一登基，仗越打越多，税越来越重，连盐都越来越贵。这个号称越来越强盛的国家，落到我家灶台上，是日子一年比一年紧。「国家强盛」和「我家日子」，为什么会朝相反的方向走？',
      expectsRealAnswer: false,
    },
    {
      id: 'cp-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '那道文书，终究还是落到了我头上。\n\n那天，亭长带着名册到了村口。他念出一串名字，我的名字在里头。征发：北上戍边。要在限定的日子内，赶到指定的地方报到。\n\n（当时我们只隐约听说，误了期限「要严办」，并不全懂有多重。汉承秦制，律法严苛，误期、逃役都是重罪——这些，是我后来在路上、在边塞，才一点点弄明白的。）\n\n我没有任何讨价还价的余地。不去，是抗命，全家跟着遭殃。去，前路茫茫，谁也不知道还回不回得来。\n\n我连夜收拾。妻子一句话也说不出，只是默默给我缝补鞋子、烙干粮——去那么远的边塞，鞋和粮，就是命。儿子还小，趴在门槛上看我，不太明白爹这是要去哪儿。\n\n第二天天没亮，我和村里另外几个被征的人，一起上了路。\n\n你记住这一点：从皇帝在长安拍板要打匈奴，到那一道道法令，到官府发文书，到名册念到我——这一整条长长的链子，从头到尾，没有一个环节，问过我一句「你愿不愿意」。',
        en: 'That notice, in the end, fell on me too.\n\nThat day the village head came to the gate with the roll. He read out a string of names, and mine was among them. Levied: north to garrison the frontier. Report to the appointed place within a set number of days.\n\n(At the time we only vaguely heard that missing the deadline "would be dealt with severely," and did not fully grasp how heavy. The Han carried on the Qin system; its law was harsh, and missing a deadline or fleeing service were grave crimes. These things I worked out only bit by bit, later, on the road and at the frontier.)\n\nI had no room to bargain at all. Not to go was to defy the order, and the whole family would suffer for it. To go was a road without end, and no one knew whether I would ever come back.\n\nI packed through the night. My wife could not say a word; she only silently mended my shoes and baked dry rations. For a frontier that far, shoes and grain were life itself. My son was small, lying across the threshold watching me, not quite understanding where his father was going.\n\nBefore dawn the next day, I and a few others from the village who had been levied set out together on the road.\n\nRemember this: from the emperor at Chang\'an deciding to fight the Xiongnu, to those orders, to the government sending the notice, to the roll reading out my name, this whole long chain, from beginning to end, not one step ever asked me "are you willing."',
      },
      deliverGoal: 'N3 setup — 征发文书落到他头上 (亭长名册念名/北上戍边/限期报到) + anti-fab 括号短句 (当时只隐约听说误期严办/汉承秦制律法严误期逃役重罪/后来路上边塞才弄明白) + 没讨价余地 (不去抗命全家遭殃/去前路茫茫) + 妻子缝鞋烙粮/儿子趴门槛看不懂爹去哪 + 「从皇帝长安拍板打匈奴到法令到文书到名册念到我/这一整条长链子从头到尾没一个环节问过我愿不愿意」',
      engagementHook: '从皇帝在长安拍板要打匈奴，到一道道法令，到官府发文书，到名册念到我——这一整条长长的链子，从头到尾，没有一个环节，问过我一句「你愿不愿意」。当一件「国家大事」完全不需要你点头就把你卷进去，你能做什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'cp-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你已经在路上走了一个多月。脚底磨穿了，结了痂，又磨穿。一路向北，越走越冷，越走越荒。同行的人里，有人病倒了，被丢在路边；有人受不了想逃——可逃役是重罪，抓回来下场很惨。\n\n终于到了边塞。眼前是荒寒的塞外，一道烽燧接着一道烽燧，望不到头。你被分去戍守、屯田、运粮——哪里缺人，就把你填到哪里。\n\n夜里轮到你站岗，你裹紧单薄的衣服，望着北边黑沉沉的草原。就是从那个方向,匈奴的骑兵会来。你忽然冒出一个念头，你不敢说出口：\n\n几千里外的长安城里，皇帝打了大胜仗，朝堂上一片「赫赫武功」「扬我大汉国威」的庆贺。那「武功」「国威」，是用我，和我身边这些被填到边塞上的人，一条命一条命垒起来的。\n\n那么——朝堂上那份「盛世」的荣光里，到底算不算我们这些人的一份？还是说，将来人们歌颂这个「盛世」的时候，根本不会想起，边塞的烽火台底下，曾经站过我？',
        en: 'Now you are me.\n\nYou have been on the road over a month. The soles of your feet wore through, scabbed, and wore through again. North and north, colder and more desolate the further you go. Among your companions, some fell ill and were left at the roadside; some could not bear it and tried to flee, but fleeing service was a grave crime, and those caught met a bitter end.\n\nAt last you reach the frontier. Before you is the cold and barren land beyond the passes, beacon tower after beacon tower, stretching beyond sight. You are sent to stand guard, to farm the garrison fields, to haul grain, wherever hands are short, there you are filled in.\n\nAt night your turn comes to stand watch. You pull your thin clothes tight and look at the black steppe to the north. It is from that direction the Xiongnu horsemen will come. A thought rises in you that you dare not speak aloud:\n\nA thousand li away in the city of Chang\'an, the emperor has won a great battle, and the court rings with congratulations of "glorious feats of arms" and "raising the prestige of the great Han." That "feat of arms," that "prestige," was stacked up, life by life, out of me and these people around me filled into the frontier.\n\nSo then, in that glory of the "golden age" at court, does it count any share for people like us? Or when later ages sing of this "golden age," will they never think that beneath the beacon tower at the frontier, I once stood?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 路上一个多月 (脚磨穿/病者丢路边/逃役重罪下场惨) + 到边塞荒寒塞外烽燧望不到头 + 分去戍守屯田运粮哪缺填哪 + 夜里站岗裹单薄衣望北黑草原 (匈奴会从那来) + 念头不敢说出口 + 「几千里外长安皇帝打胜仗朝堂庆贺赫赫武功扬国威/那武功国威是用我和身边被填到边塞的人一条命一条命垒起来」+ 拷问: 盛世荣光算不算我们一份/歌颂盛世时会不会想起烽火台底下站过我',
      engagementHook: '几千里外的长安城里，皇帝打了大胜仗，朝堂上一片「赫赫武功」的庆贺。可那「武功」，是用我和身边这些被填到边塞上的人，一条命一条命垒起来的。那么——朝堂上那份「盛世」的荣光里，算不算我们这些人的一份？',
      expectsRealAnswer: false,
    },
    {
      id: 'cp-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '在边塞的日子，是我这辈子最难捱的。\n\n塞外的风，冷得能割脸。粮常常不够——运粮的路太长，几千里运过来，一路损耗，到我们手里时总是缺。活重，戍守、屯田、修工事，没有歇的时候。管事的吏拿军法压人，谁误了事、谁顶了嘴，重罚就下来了。\n\n身边的人，一个接一个地没了。有冻死的，有病死的，有打仗时死在匈奴箭下的，有受不了想逃被军法处置的。\n\n夜里，我常常想家。想我那块地，这时候该插秧了吧；想我妻子，蚕该结茧了吧；想我儿子，他长高了吗，还记不记得我这张脸。\n\n我不识字。我没法给家里捎一个字，也没法给自己留下一句话。我能做的，只有把这些想念，烂在心里。\n\n你现在该明白了：史书里那一句轻飘飘的「发卒数万，击匈奴」——「数万」这两个字底下，是一个一个像我这样、有家、有牵挂、有名字（只是没被记下来）的活人。',
        en: 'The days at the frontier were the hardest I ever bore.\n\nThe wind beyond the passes was cold enough to cut your face. Grain was often short, the supply road too long, hauled a thousand li, losses all the way, so that what reached us always fell short. The work was heavy, standing guard, farming the garrison fields, building fortifications, with no time to rest. The officers pressed us with military law, and whoever erred, whoever talked back, heavy punishment came down.\n\nThe people around me went, one after another. Some froze, some died of sickness, some died under Xiongnu arrows in battle, some could not bear it and tried to flee and were dealt with by military law.\n\nAt night I often thought of home. Of my plot of land, the rice should be transplanted by now; of my wife, the silkworms should be spinning their cocoons; of my son, had he grown taller, did he still remember this face of mine.\n\nI could not read. I could send no word home, could leave no line for myself. All I could do was let this longing rot in my heart.\n\nNow you should understand: that weightless line in the histories, "tens of thousands of conscripts were levied to strike the Xiongnu," beneath those two words "tens of thousands" was one living person after another, like me, with a home, with people to long for, with a name, only one that was never written down.',
      },
      deliverGoal: 'N5 story — 边塞最难捱 (塞外风冷割脸/粮不够运几千里损耗/活重戍守屯田修工事无歇/吏拿军法压人重罚) + 身边人冻死病死匈奴箭下逃役军法处置 + 夜里想家 (地该插秧/妻子蚕该结茧/儿子长高吗记不记得我) + 不识字捎不了一个字 + 「史书一句『发卒数万击匈奴』, 『数万』底下是一个个有家有牵挂有名字只是没被记下的活人」',
      engagementHook: '史书里轻飘飘一句「发卒数万，击匈奴」——「数万」这两个字底下，是一个一个像我这样、有家、有牵挂、有名字（只是没被记下来）的活人。当历史把人变成一个数字，我们丢掉了什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'cp-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '在边塞，我见过一样东西，让我把这一切，慢慢想明白了。\n\n有一天，一支从长安来的使团路过我们这一带，往更西边去。听押送的人说，那是去西域的，要联络远方的国家，开通商路。带队的那个使者，据说当年被匈奴扣了十几年才回来，了不起得很。（后来我才听说，那人叫张骞。）\n\n我远远看着那支队伍：几百号人，上万头牛羊，一车车的金帛丝绸。我心里咯噔一下，忽然懂了一件事。\n\n那一车车风风光光运往西域的丝绸，是哪来的？是像我妻子那样、千千万万养蚕缫丝的农妇，一夜一夜熬出来的。那上万头牛羊、那大批随行的人，又是哪来的？是从我们这样的人家、从我们这样的民力里，一点一点征出来的。\n\n那一刻我看明白了：朝堂上的「凿空西域」「通使万里」（人人都夸它了不起），和把我从家里征到这边塞上来的那道令，是同一桩事的两头。同一个皇帝的同一份雄心——在长安，是名垂青史的盛世伟业；在我这里，是把我和家人拆散、把我钉死在这塞外的那只手。\n\n荣光归于最高处那几个人，账，落到我们这些没名字的人头上。一件事，两头。',
        en: 'At the frontier I saw one thing that slowly made all of this clear to me.\n\nOne day a mission from Chang\'an passed through our parts, heading farther west. From the escorts I heard it was bound for the Western Regions, to make contact with distant states and open a trade road. The envoy at its head, they said, had once been held by the Xiongnu more than ten years before he returned, a remarkable man. (Only later did I hear he was called Zhang Qian.)\n\nI watched that procession from afar: hundreds of men, tens of thousands of cattle and sheep, cart after cart of gold, silk, and bolts of cloth. Something turned over in me, and I suddenly understood a thing.\n\nThose cart-loads of silk, hauled so gloriously to the west, where did they come from? From farm women like my wife, countless of them raising silkworms and reeling silk, sweating it out night after night. And those tens of thousands of cattle and sheep, the great train of attendants, where did they come from? Levied out, bit by bit, from households like ours, from the people\'s strength like ours.\n\nIn that moment I saw it clearly: the "boring open of the Western Regions," the "envoys ten thousand li" everyone praises as remarkable, and the order that levied me from my home to this frontier, were two ends of one matter. The same emperor\'s same ambition: at Chang\'an, a golden-age glory written into history; at my end, the hand that tore me from my family and nailed me to this land beyond the passes.\n\nThe glory goes to the few at the very top; the bill lands on us, the people without names. One thing, two ends.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 边塞见使团路过往西域 (押送的人说去联络远方国家开通商路/带队使者当年被匈奴扣十几年才回/后才听说叫张骞) + 远看队伍 (几百号人上万牛羊一车车金帛丝绸) + 顿悟 + 那车车丝绸是像妻子那样千万养蚕缫丝农妇熬出来的/上万牛羊随行人从我们民力征出 + 「朝堂凿空西域通使万里 (人人夸了不起) 和把我征到边塞的令是同一桩事两头」+ 同一皇帝同一雄心 (长安名垂青史盛世伟业 vs 我这里拆散家人钉死塞外的手) + 「荣光归最高处几个人/账落到没名字的人头上」一件事两头 + 桥到张骞 lens',
      engagementHook: '那一车车风风光光运往西域的丝绸，是像我妻子那样千千万万养蚕缫丝的农妇一夜一夜熬出来的。朝堂上人人夸「凿空西域」了不起，那和把我征到这边塞上来的征发令，是同一桩事的两头——荣光归于最高处那几个人，账落到我们这些没名字的人头上。同一个皇帝的同一份雄心，怎么会有两副面孔？',
      expectsRealAnswer: false,
    },
    {
      id: 'cp-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '被这台机器拖走的，不只有我们这些戍边的农民。\n\n我在边塞，还见过别的人。有犯了法被罚来服苦役的刑徒，剃了头、戴着刑具，干最重的活。有被官府强行从内地迁来戍边、开荒的整村整户的移民，拖家带口，从此回不去故乡。还有为了凑军费，被各种名目的捐税逼得卖田、卖儿女的破产人家。\n\n我渐渐看明白：皇帝那些「盛世伟业」，打匈奴、通西域、修边塞，是一台胃口大得永远填不满的机器。\n\n它要粮，就加税；要钱，就把盐铁专卖、卖官鬻爵；要人，就一道道征发令下到村里。它越是「强盛」，胃口就越大；胃口越大，从我们身上抽走的就越多。\n\n到后来，我有时分不清：这一切的折腾，到底是为了让天下百姓过上好日子，还是这台叫「盛世」的机器，本身就需要源源不断地，烧掉我们这些人？\n\n你看，我和那些刑徒、那些破产的、那些被迫迁徙的，本来是不同的人。可在这台机器眼里，我们没有区别：都只是它需要的、可以随时补充的一份力气、一笔钱、一条命。',
        en: 'It was not only us, the farmers garrisoning the frontier, whom this machine dragged off.\n\nAt the frontier I saw other people too. There were convict-laborers, who had broken the law and were sentenced to hard labor, heads shaved, fitted with irons, doing the heaviest work. There were whole villages and households of migrants moved out by force from the interior to garrison and break new ground, dragging their families along, never to return to their homeland. And there were ruined families, pressed by taxes under every name, to raise war funds, into selling their fields, their sons and daughters.\n\nSlowly I came to see: the emperor\'s "golden-age great works," fighting the Xiongnu, opening the west, building the frontier, doing so many great things, were a machine with an appetite too vast ever to fill.\n\nIt wanted grain, so it raised taxes; wanted money, so it monopolized salt and iron and sold offices and ranks; wanted men, so order after order of conscription came down to the villages. The more "strong and flourishing" it grew, the larger its appetite; the larger the appetite, the more it drew from us.\n\nIn time I sometimes could not tell: was all this turmoil really to let the people of the realm live good lives, or did this machine called "golden age" itself simply need, steadily and without cease, to burn up people like us?\n\nYou see, the convicts, the ruined, the forcibly moved, and I, we were meant to be different people. But in the eyes of this machine there was no difference between us: we were only the strength it needed, the money, the lives, replaceable at any time.',
      },
      deliverGoal: 'N7 story — 被机器拖走的不只戍边农民 + 边塞见别的人 (刑徒犯法罚来剃头戴刑具干最重活/强行从内地迁来戍边开荒的整村整户移民回不去故乡/为凑军费被捐税逼得卖田卖儿女的破产人家) + 顿悟皇帝盛世伟业是胃口永远填不满的机器 (要粮加税/要钱盐铁专卖卖官鬻爵/要人征发令下村/越强盛胃口越大抽走越多) + 「分不清折腾是为百姓好日子还是这台叫盛世的机器本身就需要源源不断烧掉我们」+ 「我和刑徒破产迁徙的本是不同的人/机器眼里没区别都是可随时补充的力气钱命」',
      engagementHook: '皇帝那些「盛世伟业」，是一台胃口永远填不满的机器：要粮就加税，要钱就专卖盐铁，要人就一道道征发令下到村里。它越「强盛」，从我们身上抽走的就越多。到后来我分不清：这一切，到底是为了让百姓过好日子，还是这台叫「盛世」的机器，本身就需要源源不断地烧掉我们？你觉得，有没有一种「强盛」，其实是在消耗它声称要造福的人？',
      expectsRealAnswer: false,
    },
    {
      id: 'cp-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我最后没能回家。\n\n具体怎么没的，已经不重要了——是冻病的，是累垮的，还是哪一次跟匈奴的遭遇战，我就成了埋在塞外那些人里的一个。我没能再看见我的妻子，没能看着我儿子长大，没能回到那块该插秧的地里。\n\n我想跟你说的，是另一件事。\n\n你现在听见了我的故事——有家、有牵挂、被征走、死在边塞。可你要知道：我这个「我」，是后人替千千万万真实存在过、却一个字都没留下的人，拼出来的一个声音。\n\n真实的他们，连这点都没有。没有名字，没有故事，没有一句遗言被记下。皇帝的赫赫武功写满了史书，张骞的凿空之功代代传诵，可那千千万万死在边塞、累死在徭役、破产流亡的人，史书最多给他们几个字：「天下虚耗，户口减半」。\n\n「户口减半」——人口少了一半。少的那一半，是谁？没有名。怎么没的？没有数。\n\n这就是为什么，要有这一遍。要有人，站到「户口减半」这四个字底下，替那一个一个具体的人，把没说出口的话，说出来。',
        en: 'In the end I never made it home.\n\nHow exactly I went no longer matters, whether sickened by the cold, worked to collapse, or in some chance encounter with the Xiongnu; I became one of those buried beyond the passes. I never saw my wife again, never watched my son grow, never returned to that field that should have been planted with rice.\n\nWhat I want to tell you is another thing.\n\nYou have heard my story now, a man with a home, with people to long for, levied away, dead at the frontier. But you must know: this "I" is a voice pieced together by later people on behalf of the countless who truly existed and left not a single word.\n\nThe real ones did not have even this much. No name, no story, not one dying word written down. The emperor\'s glorious feats of arms fill the histories, Zhang Qian\'s boring-open is recited generation to generation, but those countless who died at the frontier, worked to death in the levies, ruined and driven into flight, the histories gave them at most a few characters: "the realm was drained, and the registered households fell by half."\n\n"Households fell by half." The half that fell, who were they? No name. How did they go? No number.\n\nThis is why there must be this pass. There must be someone to stand beneath those four characters, "households fell by half," and on behalf of each single person, speak the words that were never spoken.',
      },
      deliverGoal: 'N8 story — 他没能回家 (怎么没的不重要/成了埋塞外的一个/没再见妻子没看儿子长大没回到该插秧的地) + anti-fab 透明化: 「我」是后人替千千万万真实存在却一字没留的人拼出的一个声音 + 真实的他们连这点都没有 (没名没故事没遗言) + 「皇帝赫赫武功写满史书/张骞凿空代代传诵/那千万死边塞累死徭役破产流亡的人史书最多给几个字: 天下虚耗户口减半」+ 「户口减半: 少的那一半是谁没名怎么没的没数」+ 「为什么要有这一遍: 替户口减半底下一个个具体的人说出没说出口的话」',
      engagementHook: '皇帝的赫赫武功写满史书，张骞的凿空之功代代传诵，可那千千万万死在边塞、累死在徭役、破产流亡的人，史书最多给四个字：「户口减半」。少的那一半是谁？没有名。怎么没的？没有数。那些没被记下的人，就等于没存在过吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'cp-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我死之后，事情的走向，连那位雄才大略的皇帝，自己都看明白了。\n\n打了几十年的仗，把国家几代人攒下的家底打空了。各地的百姓被赋税徭役压得喘不过气，流离失所的越来越多，有的地方甚至有人聚众反抗。这个号称「强盛」的帝国，底子已经被掏空了一大半。\n\n到了晚年，皇帝自己也撑不住了。公元前 89 年，他下了一道罕见的诏书——史称「轮台诏」。在那道诏书里，他亲口承认：这些年穷兵黩武、横征暴敛，让天下百姓困苦，是他的过错。他说，从今往后，要把心思转回到「让百姓休养、重视农耕」上来。\n\n你听到这里，会不会觉得有一点点安慰？连高高在上的皇帝，最后都承认了：他错了，代价太大了。\n\n可你也别忘了——这道认错的诏书，对我，对我那些埋在塞外的同伴，已经太晚了。皇帝可以转身、可以改弦更张、可以写进史书里被后人称赞「晚年悔悟」。可我们这些替他的雄心买了单的人，命已经没了，回不来了。\n\n一个掌权者迟来的「我错了」，能在史书里给他挣回几分体面。可它换不回，已经付出去的那些命。',
        en: 'After I died, the turn things took, even that emperor of grand vision came at last to see for himself.\n\nDecades of war had emptied the inheritance generations had saved. The people everywhere, crushed by taxes and levies, could not draw breath; the displaced grew more and more numerous, and in some places people even gathered to resist. This empire that boasted of being "strong and flourishing" had had a good half of its foundation hollowed out.\n\nIn his late years the emperor himself could no longer hold it up. In 89 BCE he issued a rare edict, known in history as the Luntai Edict. In it he admitted with his own mouth: these years of warmongering and harsh taxation, bringing the realm\'s people to hardship, were his fault. He said that from now on his mind should turn back to letting the people recover and valuing farming.\n\nHearing this, do you feel a little comfort, perhaps? That even the emperor on high admitted in the end: he was wrong, the cost was too great.\n\nBut do not forget either, this edict of admitting fault came, for me and for my companions buried beyond the passes, too late. The emperor could turn around, could change course, could be written into the histories and praised by later ages for his "repentance in old age." But we who paid for his ambition, our lives were already gone, never to return.\n\nA latecoming "I was wrong" from a man in power may win him back a few measures of dignity in the histories. But it cannot buy back the lives already paid out.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 死后走向连雄才大略皇帝自己都看明白 + 打几十年仗打空几代家底/百姓被赋税徭役压得喘不过气流离失所越来越多有的地方聚众反抗/强盛帝国底子掏空一大半 + 89 BCE 轮台诏 (亲口承认穷兵黩武横征暴敛让百姓困苦是他过错/转回让百姓休养重视农耕) + 「会不会有点安慰: 连皇帝都承认错了代价太大」+ 但别忘了: 认错诏书对我对埋塞外的同伴太晚了 + 皇帝能转身改弦更张写进史书被赞晚年悔悟/我们替雄心买单的人命没了回不来 + 「掌权者迟来的我错了能挣回几分体面/换不回已付出的命」',
      engagementHook: '连那位雄才大略的皇帝，晚年都亲口认错了——他说穷兵黩武、让百姓困苦，是他的过错。听到这里你会不会有点安慰？可这道认错的诏书，对我、对那些埋在塞外的同伴，已经太晚了。皇帝可以转身、可以写进史书被后人称赞「晚年悔悟」，可我们的命，回不来了。一个掌权者迟来的「我错了」，能抵掉已经付出去的那些命吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'cp-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看那个被叫做「盛世」的时代，两种说法都站得住。\n\n一种说法：那是一座建在我们尸骨上的盛世。汉武帝的「盛世」被歌颂了两千年——打服了匈奴，凿通了西域，立了影响后世两千年的儒术。可那份「盛」，是用打空的国库、用我和千千万万个没有名字的我、一条命一条命垫出来的。从一开始，这个「盛世」就没打算把我们算进它的荣耀里。我们只是「户口减半」里减掉的那一半。\n\n另一种说法：那确实是一件改变了历史的大业，只是代价，本不必这么惨。我得老实承认一件我活着时没想明白的事：打服匈奴，让边境的百姓往后几代少受劫掠；凿通西域，让两个世界第一次连上，这条路惠及了后世千年。这些，是真的大事。错的，或许不是「要不要强大」本身——错的是，皇帝太急、太狠，把几代人的家底和无数条命，在短短几十年里一次性烧光，连他自己晚年都承认走过了头。换一种不那么草菅人命、不那么穷兵黩武的走法，这份强盛，也许不必踩着这么多人的命。\n\n两种说法都站得住。它既是踩着我们尸骨建起来的，也确实是一件改变了历史的大业。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at the age men call a golden age. Both views stand.\n\nOne view: it was a golden age built on our bones. Emperor Wu\'s "golden age" has been sung of for two thousand years, the Xiongnu beaten into submission, the west bored open, a Confucianism set up that shaped two thousand years after. But that "flourishing" was laid down, life by life, with an emptied treasury and with me and the countless nameless versions of me. From the start, this "golden age" never planned to count us into its glory. We were only the half that was subtracted in "households fell by half."\n\nThe other view: it was truly a great work that changed history, and the cost need not have been this terrible. I must honestly admit something I never worked out while alive: beating the Xiongnu spared the border people raiding for generations after; boring open the west joined two worlds for the first time, and that road benefited a thousand years to come. These were real great things. What was wrong, perhaps, was not "whether to be strong" itself; what was wrong was that the emperor was too hurried, too harsh, burning the inheritance of generations and countless lives all at once in a few short decades, so much that even he, in his old age, admitted he had gone too far. Taken by a road less careless of human life, less of warmongering, this strength might not have had to step on so many lives.\n\nBoth views stand. It was built on our bones, and it was truly a great work that changed history.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (建在尸骨上的盛世/汉武盛世歌颂两千年打服匈奴凿通西域立儒术影响两千年但那盛是打空国库+没名字的我一条命一条命垫出/从没打算把我们算进荣耀/只是户口减半减掉的那一半) / 另一种说法 (确实改变历史的大业但代价本不必这么惨/打服匈奴让边境几代少受劫掠+凿通西域两世界第一次连上惠及千年是真大事/错的或许不是要不要强大而是皇帝太急太狠几十年一次性烧光几代家底和命连他自己都承认走过头/换种不草菅人命不穷兵黩武的走法不必踩这么多命) / 两种都站得住 / 想 30 秒',
      engagementHook: '一种说法：那是建在我们尸骨上的盛世。另一种说法：那确实是改变历史的大业，只是代价本不必这么惨。两种说法都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'cp-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生：一个没有名字的农民，一道贴到村口的文书，一条向北的千里路，一座我用命垫起来的盛世，一句没人记下的遗言——你会怎么评价这样一个时代？\n\n一个被歌颂了两千年的「汉武盛世」；而它的地基里，埋着我，和千千万万个「户口减半」里减掉的人。你会说它是踩着尸骨的盛世，还是说它是一件代价惨重、却真的改变了历史的大业？你怎么评？\n\n不过先记住：你这一遍，听的只是被这个盛世碾在最底下的人。坐在最高处、下令打匈奴的汉武帝，和被派去凿空西域、半生在路上的张骞，各有各的说法——换个视角再走一遍，你会听见他们怎么为这份盛世辩护，也会看看你刚才的判断，站不站得住。\n\n还有一件难的事，趁现在逼自己想一想：你从小听到的「盛世」「强汉」，多半是赞颂的口气。可一个时代到底「盛」不「盛」，问坐在长安庆功的皇帝，和问我这个买不起盐、最后死在塞外的农民，答案会一样吗？「盛世」这两个字，是谁说了算的？\n\n再想一步：今天，在你读到的故事里、听到的说法里——是不是常常有这样的事：一项被所有人赞美的伟大成就、一个被反复歌颂的「黄金时代」，背后站着一群从没被问过、也从没被记住的人？\n\n那么，当你以后再听到「某某盛世」「某某黄金时代」——你会不会多问一句：这盛世，是谁的盛世？它的荣光，又是谁在底下，替它扛着？',
        en: 'Having walked my whole life, a farmer without a name, a notice pasted at the village gate, a thousand-li road to the north, a golden age I propped up with my life, a dying word no one wrote down, how would you judge an age like this?\n\nA "golden age of Emperor Wu" sung of for two thousand years; and in its foundation are buried me, and the countless subtracted in "households fell by half." Would you call it a golden age built on bones, or a great work of terrible cost that truly changed history? How do you judge it?\n\nBut first, remember: this pass, you heard only the person ground at the very bottom of this golden age. Emperor Wu at the very top, who ordered the war on the Xiongnu, and Zhang Qian, sent to bore open the west, half his life on the road, each have their own case. Run it again through another lens and you will hear how they defend this golden age, and see whether the judgment you just made still holds.\n\nAnd one hard thing, force yourself to think it now: the "golden age" and "strong Han" you have heard of since childhood are mostly in a voice of praise. But whether an age is truly "golden," ask the emperor toasting his victories at Chang\'an, and ask me, the farmer who could not afford salt and died at last beyond the passes, will the answers be the same? Those two words, "golden age," who gets to decide them?\n\nThen take one more step: today, in the stories you read, in the talk you hear, is it not often so: a great achievement praised by everyone, a "golden era" sung of again and again, with a crowd of people standing behind it who were never asked and never remembered?\n\nSo when you next hear of "such-and-such golden age," "such-and-such golden era," will you ask one more question: whose golden age is this? And its glory, who is it down below, carrying it on their back?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价时代 (没名字农民/村口文书/向北千里路/我用命垫起来的盛世/没人记下的遗言 → 踩尸骨的盛世 vs 代价惨重却真改变历史的大业) + 跨视角指针 (你只听了碾在最底下的人/汉武帝+张骞各有说法/换视角再走一遍看判断站不站得住) + 逼自己想: 从小听的盛世强汉多半赞颂口气/问长安庆功的皇帝和问买不起盐死塞外的我答案一样吗/盛世二字谁说了算 + transfer「今天故事里说法里被所有人赞美的伟大成就被歌颂的黄金时代背后没被问过没被记住的人」+ 以后再听某某盛世黄金时代多问一句: 谁的盛世/荣光谁在底下扛',
      engagementHook: '走完我这一生，你会怎么评价这样一个时代？逼自己想一想：你从小听到的「盛世」「强汉」，多半是赞颂的口气。可问坐在长安庆功的皇帝，和问我这个买不起盐、死在塞外的农民，「这是不是盛世」，答案会一样吗？以后你再听到「某某盛世」「黄金时代」，会不会多问一句——这盛世，是谁的盛世？它的荣光，又是谁在底下替它扛着？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'han-wudi':                          hanWudiLens,
  'zhang-qian':                        zhangQianLens,
  'conscript-peasant-receiving-end':   conscriptPeasantLens,
};

// defaultLens = conscript-peasant-receiving-end (受影响者优先 pattern 回归):
// 与 qin 的关键差异 — qin 学生先验是「暴君」故默认进权力方挑战暴君先验; Han 学生先验是「盛世/强汉」(celebratory)
// 故默认进受影响者(买单的农民)视角, 挑战这个 celebratory 先验 (盛世背后谁买单/值不值/穷兵黩武).
// cp-n10/n11 含 default-lens-stands-alone 跨视角指针 (你只听一边/汉武帝+张骞会挑战/换视角再走一遍) + transfer.
export var defaultLens = 'conscript-peasant-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'han-china-130bce',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'han-wudi': 30, 'zhang-qian': 30, 'conscript-peasant-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-25',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「同一道意志」一件事两个方向 (汉武帝独尊儒术=给帝国灵魂 vs 给皇权合身外衣 / 张骞凿空=打通一条路 vs 路为找军事盟友打匈奴 / 戍卒同一场武功=朝堂赫赫战功与田里被征送死同一道令)',
    'defaultLens: conscript-peasant-receiving-end — 受影响者优先回归. 关键差异: qin 学生先验「暴君」默认进权力方挑战暴君先验; Han 学生先验「盛世/强汉」(celebratory) 故默认进买单农民挑战 celebratory 先验 (盛世背后谁买单/值不值/穷兵黩武). cp-n10/n11 含跨视角指针; 汉武帝/张骞为加深 lens',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    '第 7 条 cultural-ban 例外: 中国史描述中国, 皇帝/丞相/匈奴/儒术/盐铁/戍卒/西域/察举/节杖 等史实术语必须用; 仍避免时代错置 + 不伪造引文',
    'FACTUAL GUARDRAILS: 汉 206 BCE-220 CE; 汉武帝 r.141-87 BCE; 独尊儒术 (董仲舒); 张骞首次出使 138 BCE (西域)/二次约 119 BCE; 卫青霍去病击匈奴 (霍去病封狼居胥); 盐铁专卖筹军费; 巫蛊之祸逼死太子; 轮台诏 89 BCE 武帝晚年悔过 (real, 几乎是认罪书); 司马迁《史记》当世受宫刑写成/班固《汉书》东汉追记 — paraphrase 不编造原话',
    '§8 同时代世界 repurpose = 罗马 (共和国晚期扩张/Gracchi 改革/行省化) — 两个同期扩张帝国谁买单结构对照; zq-n9 提及丝绸最远到罗马',
    '戍卒 lens 是虚构桥接人物代表无名苍生, cp-n8 显式 anti-fab 透明化「我是后人替千万真实存在却一字没留的人拼出的声音」; 史书四字「户口减半」对位 qin「死者甚众」',
    '与 qin 不重叠: qin=统一/法家/焚书/长城; Han=巩固/儒术/丝绸之路/穷兵黩武. 戍卒 N9 反讽不同 (qin=严法逼反/Han=轮台诏迟来悔过)',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
