// ─────────────────────────────────────────────────────────────────
// 越南战争 1965 — The Vietnam War · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Rule 0 高敏感 (本课最高等级): 同时呈现支持战争者/反对者/被派去打仗的士兵/
//   越南平民/家里反对参军的家庭多方视角; 事实 (谁何时做了什么) 与评价 (对错)
//   严格分层; 绝不替学生下「这场战争是对是错」的最终结论。
// Cultural ban: 全程越南/美国真实术语 (Gulf of Tonkin/Viet Cong/ARVN/PAVN/Tet/
//   My Lai/Kent State/draft/Saigon/Hanoi/napalm), §8 中国桥段落除外。
// 3 lens / 11 nodes each / expectsRealAnswer 仅 N10+N11。
// 跨 lens micro-detail: 直升机旋翼声 (helicopter rotor) — 决策者在五角大楼报表上
//   只是一个调动数字; 士兵在丛林里听成生与死的接送声; 村庄少女听成头顶降下盘问与
//   炮火的预兆。三视角各触一次,不互相点破。
// §8 中国桥注入: mediator N9 + receiving-end (DEFAULT) N9/synthesis。
// anti-fab: 三个桥接人物 (决策者/士兵/越南少女) 均显式标合成、身份写实;
//   Cronkite「stalemate」标转述非档案逐字; Kent State 照片标不伪造原话。
// ─────────────────────────────────────────────────────────────────

export var policymakerLens = {
  id: 'policymaker-actor',
  name: 'The Washington Policymaker',
  nameCn: '华盛顿决策者',
  role: 'perpetrator-actor',
  perspectiveTag: 'cold-war-decision-machine',
  icon: '🗺️',
  description: {
    cn: '1960 年代中期华盛顿一位负责越南政策的高级官员，可能在白宫、国务院或五角大楼，没有名字，因为他代表的是一整套「决策机器」的逻辑。他每天看的是地图、伤亡统计、body count 报表，真心相信遏制 (containment) 和多米诺骨牌理论。他不是嗜血的人，反而常夜里睡不着，却还是一批批加兵，从几万加到五十多万。这一遍让你从决策者内部，看一套自认理性的冷战逻辑，怎么一步步运转，把一个国家拖进看不到尽头的泥潭；它会不会运转得太「顺」，由你自己来判断。',
    en: 'A senior U.S. official in charge of Vietnam policy in mid-1960s Washington, perhaps in the White House, the State Department, or the Pentagon, with no name, because he stands for a whole decision machine and its logic. Every day he reads maps, casualty counts, and body-count reports, and he sincerely believes in containment and the domino theory. He is not bloodthirsty; in fact he often cannot sleep, yet he keeps adding troops, batch by batch, from tens of thousands to over half a million. This pass lets you stand inside a policymaker and watch, step by step, how a Cold War logic he calls rational runs, and carries a nation into an endless swamp; whether it runs all too smoothly is for you to judge.',
  },
  storyboard: [
    {
      id: 'viet-policymaker-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1965 年的一个夜里，华盛顿。我办公室的灯还亮着。\n\n桌上摊着一张越南地图，旁边是一摞报表：今天又调多少兵、消耗多少弹药、还有一栏冷冰冰的数字——body count，敌方阵亡数。我们用它来衡量这场仗打得怎么样。\n\n我是这套越南政策里的一名高级官员。也许在白宫，也许在国务院，也许在五角大楼。我不告诉你我的名字，因为我不是某一个人，我是一整套「决策机器」。\n\n这台机器每天得出同一个判断：再加一点兵、再多炸一点，Hanoi（河内）就会撑不住，回到谈判桌。\n\n这一遍，你坐进我这个位置。你会看见一套我真心以为理性、正确的逻辑。你也会看见，它怎么一步一步，把一个国家拖进一片看不到尽头的泥潭。',
        en: 'A night in 1965, Washington. The light in my office is still on.\n\nA map of Vietnam is spread on the desk, beside a stack of reports: how many troops moved today, how much ammunition spent, and one cold column of numbers, the body count, the count of enemy dead. We use it to measure how the war is going.\n\nI am a senior official in this Vietnam policy. Perhaps in the White House, perhaps the State Department, perhaps the Pentagon. I will not tell you my name, because I am not one man. I am a whole decision machine.\n\nEvery day this machine reaches the same judgment: a few more troops, a little more bombing, and Hanoi will break and come to the table.\n\nThis pass puts you in my seat. You will see a logic I sincerely think is rational and right. You will also watch it drag a nation, step by step, into a swamp with no end in sight.',
      },
      deliverGoal: 'N1 hook — 1965 夜华盛顿 + 决策者自我介绍 (不给名字/代表一整套决策机器) + 地图/伤亡报表/body count + 机器的判断 (再加兵再炸 Hanoi 就撑不住回谈判桌) + 这一遍视角 (自认理性的逻辑怎么把国家拖进泥潭)',
      engagementHook: '我代表的不是一个人，是一整套每天得出「再加一点兵就赢」的决策机器。你愿意从决策者内部，看一套自认理性的逻辑，是怎么一步步运转起来的吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-policymaker-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先看清我脑子里那张更大的地图——它叫多米诺骨牌理论 (domino theory)。\n\n我们怕的，从来不是越南这一个小国。我们怕的是连锁反应：如果南越 (首都 Saigon，西贡) 倒下，变成共产党的，那么老挝、柬埔寨、泰国，会像一排多米诺骨牌一样，一个接一个倒下、一个接一个变红，最后威胁整个自由世界。\n\n这套逻辑有个总名字，叫遏制 (containment)——遏制共产主义扩散。从杜鲁门到我们这一代，这是美国冷战大战略一脉相承的核心。\n\n所以请你先停一下，别急着说我们「无缘无故」打这场仗。我们不是疯子。我们是真心相信：今天不在越南挡住它，明天它就会一片接一片地扩散过来。\n\n问题是——这套连锁反应，是一个被真诚相信的「假设」。而假设，未必是对的。',
        en: 'First, see clearly the larger map in my head. It is called the domino theory.\n\nWhat we fear is never Vietnam alone, this one small country. What we fear is the chain reaction: if South Vietnam (capital Saigon) falls and turns communist, then Laos, Cambodia, and Thailand will fall like a row of dominoes, one after another going red, until the whole free world is threatened.\n\nThis logic has a name, containment, the containing of communist spread. From Truman to my generation, it is the unbroken core of America\'s Cold War grand strategy.\n\nSo stop a moment before you say we fight this war "for no reason." We are not madmen. We sincerely believe that if we do not block it in Vietnam today, tomorrow it will spread, piece by piece, toward us.\n\nThe trouble is this: that chain reaction is an "assumption," sincerely believed. And an assumption is not always right.',
      },
      deliverGoal: 'N2 setup — domino theory + containment + 怕的不是越南一国是连锁反应 (南越倒→老挝柬埔寨泰国一个个变红→威胁自由世界) + 从杜鲁门一脉相承 + 不是疯子是真心相信 + 引出「连锁反应是被真诚相信的假设，未必对」',
      engagementHook: '我们怕的不是越南，是「南越一倒，东南亚一片接一片变红」。这套连锁反应是我们真心相信的——可一个被真诚相信的假设，就一定是对的吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-policymaker-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '那我手里凭什么打这场仗？凭一份 1964 年的文件——《东京湾决议》(Gulf of Tonkin Resolution)。\n\n1964 年 8 月 2 日，美国驱逐舰 USS Maddox 在东京湾和北越鱼雷艇交火。8 月 4 日，前线又报告「第二次袭击」。基于这份情报，国会 8 月 7 日通过决议，授权总统在东南亚「采取一切必要措施」。\n\n我得对你诚实地说一件后来才查清的事：8 月 4 日那「第二次袭击」，很可能根本没发生。\n\n但这份决议已经成了一张近乎不设上限的「空白支票」——不用正式宣战，总统就能放手在东南亚动武。整场越战，美国其实从未正式宣战。\n\n你看懂这套机制了吗？一场十年大战的法律起点，建在一份有问题的情报上。我手里有这张「支票」，于是我能签字加兵，却始终觉得自己在依法办事、并不越界。',
        en: 'So by what right do I wage this war? By a 1964 document, the Gulf of Tonkin Resolution.\n\nOn August 2, 1964, the U.S. destroyer USS Maddox traded fire with North Vietnamese torpedo boats in the Gulf of Tonkin. On August 4, the front reported a "second attack." On this intelligence, Congress passed the resolution on August 7, authorizing the president to "take all necessary measures" in Southeast Asia.\n\nI have to tell you, honestly, a thing only sorted out later: that August 4 "second attack" very likely never happened.\n\nBut the resolution had already become a near-limitless "blank check," to use force in Southeast Asia with no formal declaration of war. In fact, across the whole Vietnam War, the U.S. never formally declared war.\n\nDo you see the mechanism? The legal start of a ten-year war rested on flawed intelligence. With this "check" in my hand, I can sign for more troops, yet still feel I am acting within the law and crossing no line.',
      },
      deliverGoal: 'N3 setup — 1964.8.2 Maddox 交火/8.4 报告第二次袭击/8.7 国会通过东京湾决议 + anti-fab 诚实「第二次袭击很可能没发生」+ 决议=近乎空白支票 (不正式宣战就能动武/整场越战从未正式宣战) + 法律起点建在有问题情报上 + 「我有支票，加兵却觉得依法办事不越界」',
      engagementHook: '一场十年大战的法律起点，建在一次「很可能没发生」的袭击上，可我加兵时反而觉得自己依法办事——「合法」这层外衣，到底改变了什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-policymaker-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1965 年 3 月，两件大事同时落地：3 月 2 日，对北越的大轰炸 Operation Rolling Thunder (滚雷行动) 开始；3 月 8 日，3500 名海军陆战队员在岘港 (Da Nang) 登陆——这是第一批正式投入战斗的美军地面部队。\n\n你坐在办公室里，看着报表，做的不是一个大决定，而是一连串小决定。\n\n前线说：再给几万人，就能稳住。你算了算：加这几万，比「承认失败、撤出来」代价小。于是你签字。签字时，调动表上多出一行直升机出动架次——对你，那只是一个数字。你从没想过，那旋翼声落到地面上，对一个 19 岁的兵、一座稻田边的村子，意味着什么。\n\n过几个月，前线又说：还差一点，再加一批。你又算：再加，还是比撤出便宜。你又签字。\n\n这就是 escalation (逐步升级) 的陷阱：每一步单看都「合理」，都比认输划算。可你回头一看——1965 年几万人，到 1968 年，已经超过五十万。\n\n你自问：从哪一步起，这些「合理的小决定」，加成了一场谁也停不下来的大战？',
        en: 'Now you are me.\n\nIn March 1965, two big things land at once: on March 2, the great bombing of the North, Operation Rolling Thunder, begins; on March 8, 3,500 Marines land at Da Nang, the first U.S. ground combat troops of the war.\n\nYou sit in the office, reading the reports, and what you make is not one big decision, but a string of small ones.\n\nThe front says: a few tens of thousands more, and we can hold. You do the math: adding these costs less than "admitting failure and pulling out." So you sign. As you sign, one more line appears on the movement table, helicopter sorties dispatched; to you it is only a number. You never think what that rotor sound means when it lands on the ground, for a 19-year-old soldier, for a village at the edge of a rice paddy.\n\nA few months later, the front says: just a little short, send another batch. You count again: adding is still cheaper than withdrawal. So you sign again.\n\nThis is the trap of escalation: each step alone looks "reasonable," cheaper than giving up. But look back, and tens of thousands in 1965 have passed half a million by 1968.\n\nYou ask yourself: at which step did these "reasonable small decisions" add up to a war that no one can stop?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1965.3.2 Rolling Thunder 开始 + 3.8 3500 海军陆战队岘港登陆 (首批地面战斗部队) + 不是一个大决定是一连串小决定 + escalation 陷阱 (每步单看都比撤出划算/签字→再签字) + helicopter ANCHOR (从决策者角度: 调动表上一行直升机出动架次只是一个数字/从没想过旋翼声落地对 19 岁兵和稻田边村子意味什么) + 1965 几万→1968 超过五十万 + 自我拷问「从哪一步起小决定加成了停不下来的大战」',
      engagementHook: '每一步加兵，单看都比撤退划算——可加起来，1965 的几万人变成了 1968 的五十多万。一连串「合理的小决定」，怎么会加成一场谁都停不下来的大战？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-policymaker-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可你很快发现，我手里那套精确的数字，对不上前线的现实。\n\n这是一场没有前线的仗。越南是丛林、山地、湄公河三角洲的水网，对游击战极其有利。我们的对手 Viet Cong (越共游击队)，白天是田里弯腰的农民，晚上是端枪的战士，藏在村庄和地道里。\n\n我们有压倒性的火力、飞机、坦克。可火力对着一个「看不见的敌人」，往往落在分不清敌友的村庄上。\n\n于是我桌上那栏 body count 越报越高，捷报一份接一份。可越南这边，平民伤亡也越来越多，而 Hanoi 始终没有「撑不住」。\n\n这是我最致命的盲点：我太相信数字了。我以为只要 body count 够高，我们就在「赢」。我从没认真想过——在一场分不清谁是敌人的仗里，「数字上的赢」，和真正的赢，可能是两件完全不同的事。',
        en: 'But you soon find that my exact numbers do not match the reality at the front.\n\nThis is a war with no front line. Vietnam is jungle, mountains, the watery web of the Mekong Delta, terrain perfect for guerrilla war. Our enemy, the Viet Cong (the communist guerrillas), are farmers bent in the fields by day and fighters with rifles by night, hidden in villages and tunnels.\n\nWe have overwhelming firepower, planes, tanks. But firepower aimed at an "invisible enemy" often falls on villages where friend and foe cannot be told apart.\n\nSo the body-count column on my desk climbs higher and higher, one report of victory after another. Yet on the Vietnamese side, civilian casualties climb too, and Hanoi never "breaks."\n\nThis is my deadliest blind spot: I trust the numbers too much. I think that as long as the body count is high enough, we are "winning." I never seriously consider that, in a war where you cannot tell who the enemy is, "winning on paper" and truly winning may be two completely different things.',
      },
      deliverGoal: 'N5 story — 数字对不上现实 + 没有前线的仗 (丛林/山地/湄公河三角洲利于游击战) + Viet Cong 白天农民晚上战士藏村庄地道 + 压倒性火力对看不见的敌人落在分不清敌友的村庄 + body count 越报越高但平民伤亡也升 Hanoi 不撑不住 + 致命盲点: 太信数字以为 body count 高就赢/「数字上的赢」和真正的赢是两件事',
      engagementHook: '我太相信数字了，以为 body count 够高就是「赢」。可在一场分不清谁是敌人的仗里，「数字上的赢」和真正的赢，会不会根本是两回事？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-policymaker-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1968 年 1 月 30 日，越南春节 (Tet)。我永远记得那几天。\n\n按惯例，春节应该停火。可就在这一天，北越正规军 (PAVN) 和 Viet Cong 在越南全境同时发动突袭——这就是 Tet 春节攻势。他们甚至一度攻进了 Saigon 我们的美国大使馆。\n\n我桌上的电话响个不停。地图上，原本标着「我方控制」的城市，一座座亮起红点。\n\n纯从军事上算，这场攻势最后被我们击退了，北越损失惨重。按我那套数字，这是「我们赢了」。\n\n可我犯了一个直到那几天才看清的错：我一直盯着军事这一面，却没算到另一面。我们这些年一直对国会、对人民说「我们正在赢、快赢了」。而 Tet 那几天，美国人在电视上亲眼看到敌人攻进我们的大使馆。\n\n官方的话，和电视里的画面，对不上了。那一刻我意识到，有一样比城市更重要的东西，正在我手里塌掉——人民对我们的信任。',
        en: 'January 30, 1968, the Vietnamese Lunar New Year (Tet). I will always remember those days.\n\nBy custom, Tet should mean a ceasefire. Yet on this very day, the North Vietnamese regular army (PAVN) and the Viet Cong launched a surprise attack across all of Vietnam at once, the Tet Offensive. They even briefly stormed into our U.S. embassy in Saigon.\n\nThe phones on my desk would not stop ringing. On the map, cities once marked "ours" lit up, one by one, with red dots.\n\nIn purely military terms, the offensive was finally beaten back, and North Vietnam suffered heavy losses. By my numbers, this was "we won."\n\nBut I made an error I only saw clearly in those days: I had stared at the military side and missed the other side. For years we told Congress and the people, "we are winning, almost won." And during Tet, Americans saw, on their own TVs, the enemy storming into our embassy.\n\nThe official words and the images on the screen no longer matched. In that moment I realized something more important than any city was collapsing in my hands: the people\'s trust in us.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (Tet) — 1968.1.30 Tet 春节攻势 (PAVN+Viet Cong 全境突袭/一度攻进 Saigon 美国大使馆) + 军事上被击退北越损失惨重 (按数字=赢) + 决策者错: 只盯军事漏了另一面 + 多年说「我们正在赢」vs 电视上美国人看到敌人攻进大使馆 + 官方话和画面对不上 + 「比城市更重要的东西在塌——信任」。直升机意象留给士兵/村民 lens',
      engagementHook: '军事上我们击退了 Tet，按我的数字这是「赢」。可美国人在电视上看到敌人攻进我们的大使馆——官方说的，和人民看到的，对不上了。当这两样对不上时，城市还在，可什么塌了？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-policymaker-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '塌下来的那样东西，有个名字，叫 credibility gap (信任鸿沟)——政府说的，和人民看到的，对不上。\n\nTet 之后没几天，1968 年 2 月，全美国最受信任的电视主播 Walter Cronkite，在节目里说：这场仗，我们陷入了「僵局」(stalemate)，该想办法体面地谈出来了。\n\n(我得说清楚: 这是他那次评论流传下来的核心意思，不同来源措辞略有出入，不是档案里逐字定本的原话。)\n\n当一个以「中立、可信」著称的人都这么说，意味着我们官方那句「我们正在赢」，在公众心里破产了。\n\n约翰逊总统私下早就说，越南是「我这辈子见过最糟的烂摊子」。Tet 之后不久，他宣布不再竞选连任。\n\n坐在我的位置上，这是最难受的领悟：我可以调动五十万大军、可以算出每一栏数字，却买不回一样东西——一旦人民发现你说的和现实对不上，他们对你的信任，就再也回不到从前了。',
        en: 'The thing that collapsed has a name: the credibility gap, the gap between what the government says and what the people see.\n\nA few days after Tet, in February 1968, the most trusted TV anchor in America, Walter Cronkite, said on his program: in this war we are mired in "stalemate," and it is time to find an honorable way to talk our way out.\n\n(I should be clear: this is the core meaning of that commentary as it came down to us; different sources word it a little differently, and it is not a line recorded word for word in any archive.)\n\nWhen even a man famous for being "neutral and trustworthy" says this, it means our official line, "we are winning," has gone bankrupt in the public mind.\n\nPresident Johnson had long said in private that Vietnam was "the worst mess I ever saw in my life." Soon after Tet, he announced he would not run for re-election.\n\nFrom my seat, this is the hardest lesson: I can move half a million troops and calculate every column of numbers, yet I cannot buy back one thing. Once the people find that your words do not match reality, their trust in you never returns to what it was.',
      },
      deliverGoal: 'N7 story — credibility gap (政府说的和人民看到的对不上) + 1968.2 Walter Cronkite 称战争陷入 stalemate 该体面谈出来 + anti-fab 括号标转述非档案逐字 + 最受信任的人都这么说=官方「我们正在赢」破产 + LBJ 私下「最糟的烂摊子」+ Tet 后宣布不连任 + 决策者领悟: 调得动大军算得出数字却买不回信任',
      engagementHook: '我能调动五十万大军、算出每一栏数字，却买不回一样东西——人民一旦发现你说的和现实对不上，那份信任就再也回不来了。失去信任，为什么比丢掉一座城市更难挽回？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-policymaker-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我还得告诉你一件，发生在前线、却最终砸在我们整套机器头上的事。\n\n1968 年 3 月 16 日，在一个叫 My Lai (美莱) 的村子，美军一支部队 (Charlie 连) 在几个小时里，杀死了数百名手无寸铁的村民——估计约 347 到 504 人，大多是老人、妇女和孩子。\n\n这件事被掩盖了一年多。1969 年曝光后，震惊了美国和全世界。\n\n你坐在我的位置上，会本能地想把它说成「一个坏苹果」、一个孤立的失控个案。可它逼出来的问题，远比这复杂：在一场用 body count 衡量胜负、又分不清谁是敌人的仗里，这种事到底有多普遍？责任，到底该算在开枪的士兵头上，还是算在我们这套设计出这种打法的机器头上？\n\n1971 年，只有 Calley 中尉一人因此被军事法庭定罪，后来还获大幅减刑。\n\n这是我这套逻辑最沉的代价之一：当你把人变成报表上的「数字」，总有一天，真实的血会从数字里渗出来。',
        en: 'I must also tell you of a thing that happened at the front, yet finally landed on our whole machine.\n\nOn March 16, 1968, in a village called My Lai, a U.S. Army unit (Charlie Company) killed hundreds of unarmed villagers in a few hours, an estimated 347 to 504 of them, most of them old people, women, and children.\n\nThe event was covered up for over a year. When it was exposed in 1969, it shocked America and the world.\n\nIn my seat, your instinct is to call it "one bad apple," an isolated case gone out of control. But the questions it forces out are far more complex: in a war measured by body count, where you cannot tell who the enemy is, how common was a thing like this? And where does the responsibility lie, on the soldier who fired, or on our machine, which designed this way of fighting?\n\nIn 1971, only one man, Lieutenant Calley, was convicted by a military court, and his sentence was later sharply reduced.\n\nThis is one of the heaviest costs of my logic: when you turn people into "numbers" on a report, one day real blood seeps out from between the numbers.',
      },
      deliverGoal: 'N8 story — 1968.3.16 My Lai Charlie 连几小时杀数百手无寸铁村民 (约 347-504/多为老弱妇孺) + 掩盖一年多 1969 曝光震惊世界 + 决策者本能想说「一个坏苹果」但问题更复杂 (用 body count 衡量又分不清敌友这种事多普遍/责任在开枪士兵还是设计打法的机器) + 1971 仅 Calley 一人定罪后大幅减刑 + 「把人变成数字总有天血会渗出来」',
      engagementHook: '我本能想把 My Lai 说成「一个坏苹果」。可责任到底在那个开枪的士兵，还是在我们这套用数字衡量胜负、分不清敌友的机器？把人变成报表上的数字，会带来什么后果？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-policymaker-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我把这场仗讲到尽头，给你看这台机器最后的账单。\n\nTet 之后，逻辑变了。新上任的尼克松总统一边推「越南化」(Vietnamization)——逐步撤出美军、把仗交给南越 (ARVN) 接手；一边在 1970 年 4 月底，把战争扩大到柬埔寨，引爆全国校园抗议。5 月 4 日，俄亥俄国民警卫队在 Kent State (肯特州立) 大学向抗议学生开枪，13 秒内打死 4 名学生、打伤 9 人。战争的暴力，回到了美国自己的校园。\n\n1973 年 1 月，《巴黎和平协定》签署，美军 60 天内撤出约 2.37 万人。但协定允许北越军队留在南越。两年后，1975 年 4 月 30 日，北越坦克冲进西贡，南越垮台。\n\n账单：约 5.82 万美军阵亡；越南军民死亡数以百万计 (越南 1995 年官方估计平民死亡多达约 200 万)。\n\n坐在我的位置上，我得承认：我们这套机器赢了几乎每一场战斗的数字，却输掉了这整场战争，也输掉了人民对政府的信任。',
        en: 'Let me carry this war to its end and show you the machine\'s final bill.\n\nAfter Tet, the logic changed. The new president, Nixon, pushed "Vietnamization," gradually pulling out U.S. troops and handing the fighting to the South (ARVN); and in late April 1970, he widened the war into Cambodia, setting off nationwide campus protest. On May 4, the Ohio National Guard fired on protesting students at Kent State University, killing 4 and wounding 9 in 13 seconds. The violence of the war had returned to America\'s own campus.\n\nIn January 1973, the Paris Peace Accords were signed, and the U.S. withdrew about 23,700 troops within 60 days. But the accords let North Vietnamese troops remain in the South. Two years later, on April 30, 1975, North Vietnamese tanks rolled into Saigon and the South collapsed.\n\nThe bill: about 58,000 U.S. troops dead; Vietnamese military and civilian deaths in the millions (Vietnam\'s 1995 estimate: as many as about 2 million civilians).\n\nFrom my seat, I must admit: our machine won the numbers of almost every battle, yet lost this whole war, and lost the people\'s trust in their government.',
      },
      deliverGoal: 'N9 zoom-out/账单 — 尼克松 Vietnamization 逐步撤军交给 ARVN + 1970.4 底扩战柬埔寨 + 1970.5.4 Kent State 13 秒打死 4 伤 9 (暴力回到美国校园) + 1973.1 巴黎协定 60 天撤约 2.37 万但允许北越军留南越 + 1975.4.30 北越坦克入西贡南越垮台 + 账单约 5.82 万美军/越南军民数百万 (1995 官方估计平民约 200 万) + 决策者承认: 赢了每场战斗的数字输了整场战争和信任',
      engagementHook: '我们这套机器赢了几乎每一场战斗的数字，最后却输掉了整场战争，也输掉了人民的信任。一支几乎打赢每一仗的军队，怎么会输掉一整场战争？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-policymaker-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生的决策，该怎么评我？两种说法都站得住，你来称。\n\n一种说法：我只是个尽责的官员。我没发明遏制和多米诺理论，我接手时它们已是几代人的共识。我对着情报和数字，做了当时看来最理性、代价最小的判断。我没嗜血，我夜里睡不着，我尽了本分。一个被时代的大战略裹着走的人，怎么能一个人扛起一整场战争的罪？\n\n另一种说法：「尽责」「理性」「依法办事」恰恰是这台机器最致命的零件。正因为有成千上万个像我这样真诚、勤勉、相信自己在做对的事的人，每天安心地签字加兵、上报 body count，这场看不到尽头的战争才能一年年打下去。我从没亲手开枪，可我的每一个「理性的小决定」，都把更多人推向了那片泥潭。\n\n这两边不是「他有错但情有可原」。是同一个我的两面——一个被冷战逻辑推着走的普通官员，和一台靠无数「理性」决定才能运转的战争机器。\n\n这是 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked through my whole life of decisions, how should I be judged? Both views stand. You do the weighing.\n\nOne view: I was only a dutiful official. I did not invent containment or the domino theory; they were the consensus of generations when I took over. Facing intelligence and numbers, I made the judgments that seemed, at the time, most rational and least costly. I was not bloodthirsty; I could not sleep at night; I did my duty. How can a man carried along by his age\'s grand strategy be made to carry the crime of a whole war alone?\n\nThe other view: "dutiful," "rational," and "acting within the law" are exactly this machine\'s deadliest parts. It is precisely because there were thousands of men like me, sincere, diligent, believing we were doing right, calmly signing for more troops and filing body counts every day, that this endless war could grind on year after year. I never fired a shot, yet every "rational small decision" of mine pushed more people toward that swamp.\n\nThese are not "he was wrong but understandable." They are two faces of the same me, an ordinary official pushed along by Cold War logic, and a war machine that can only run on countless "rational" decisions.\n\nThis is the hard problem an AP teacher will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (尽责官员/没发明遏制多米诺/对情报数字做最理性判断/夜里睡不着尽本分/被大战略裹着走怎能一人扛罪) / 另一种说法 (尽责理性依法办事恰是机器最致命零件/成千上万真诚勤勉的人每天签字加兵报 body count 战争才能打下去/没开枪但每个理性小决定都推人入泥潭) / 同一个我两面 / neutral school name (AP 老师) / 想 30 秒 / 两边都站得住',
      engagementHook: '尽责理性的普通官员，和战争机器上的一颗零件——是同一个我。一个真诚相信自己在做对事、又每天签字加兵的人，该不该为整场战争负责？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'viet-policymaker-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是决策者这一边的声音。\n\n请记住：这只是一边。我讲的「遏制逻辑」「理性判断」「我尽了本分」，听起来甚至很有道理——这正是决策者视角最危险的地方，它能把自己讲得通。但越坐在高处，离真正流血的地方就越远；我桌上调动的每一个数字，落到地面上，都是一条具体的命。\n\n这一遍里，有两群人从头到尾没开口：那个 19 岁、被 draft (征兵) 抽中、被我签字送上飞机的工人家孩子——他在分不清敌友的丛林里，会怎么看我手里这套「理性」？还有湄公河三角洲一座村子里的农家少女——我报表上那栏 body count，落在她家的稻田上，是什么样子？等你换上他们的视角，他们会狠狠地挑战你刚才听我说的每一句。\n\n这场战争，至今没有在美国社会形成统一的「对错」结论——所以这一课，不替你下结论。\n\n换一个视角再走一遍。你会发现，同一段历史，从地面上往上看，是另一个故事。',
        en: 'What you just heard was the voice of one side, the policymaker\'s.\n\nRemember: it is only one side. My talk of "containment logic," "rational judgment," and "I did my duty" can even sound quite reasonable, and that is exactly the most dangerous thing about a policymaker\'s view. It can make itself make sense. But the higher you sit, the farther you are from where the blood is actually spilled; every number I move on my desk is, when it lands on the ground, one concrete life.\n\nIn this pass, two groups never spoke at all: the 19-year-old, picked by the draft, the working-class kid I signed onto a plane, how would he see my "rational" logic from inside a jungle where he cannot tell friend from enemy? And the farm girl in a village in the Mekong Delta, what does that body-count column on my report look like when it falls on her family\'s rice paddy? When you switch to their perspectives, they will challenge, hard, every sentence you just heard from me.\n\nThis war has still not produced a single shared verdict in American society on whether it was right or wrong, so this lesson draws no conclusion for you.\n\nWalk it through once more from another perspective. You will find that the same history, seen from the ground up, is another story.',
      },
      deliverGoal: 'N11 close/meta — 你听的是决策者一边 (能把自己讲得通最危险/越坐高处越远离流血/每个数字落地是一条命) + 还没听到: 被 draft 抽中的 19 岁工人家孩子 (在分不清敌友的丛林怎么看这套理性) + 湄公河农家少女 (body count 落在她家稻田是什么样) 会挑战你听的每句 + 越战至今美国无统一对错结论本课不下结论 + 换视角再走从地面往上看是另一个故事',
      engagementHook: '决策者最危险的地方，是他能把自己讲得通。可越坐在高处，离真正流血的地方就越远。你听完我这一边，最想去问那个被我签字送上飞机的士兵、那个稻田被炸的越南少女什么问题？',
      expectsRealAnswer: true,
    },
  ],
};

export var soldierLens = {
  id: 'drafted-soldier-mediator',
  name: 'The Drafted Soldier',
  nameCn: '被征兵的士兵',
  role: 'lonely-mediator',
  perspectiveTag: 'caught-between-policy-and-victim',
  icon: '✉️',
  description: {
    cn: '一个 19 岁、被 draft (征兵) 抽中的美国小镇青年，家里是工人或农民，没钱也没门路上大学拿缓征 (deferment)，没有名字，因为像他这样的人有几十万。1967 年邮箱里来了一封征兵令，几个月后他下了飞机，闷热的空气和柴油味扑面而来。他被告知是去阻止共产主义、保护自由，却在一场没有前线、分不清敌友的丛林战里挣扎。这一遍让你站在最被两头撕扯的位置：他既是被国家送来执行政策的人，又是这套政策最直接的受害者之一，卡在中间，谁都不完全把他当自己人。',
    en: 'A 19-year-old from a small American town, picked by the draft, his family working-class or farming, with no money and no way to a college deferment, and no name, because there are hundreds of thousands like him. In 1967 a draft notice came in the mailbox, and a few months later he stepped off a plane into a wall of hot air and the smell of diesel. He was told he was there to stop communism and protect freedom, yet he struggles in a jungle war with no front line, where he cannot tell friend from enemy. This pass puts you in the most torn-apart position: he is both a man his country sent to carry out policy and one of that policy\'s most direct victims, stuck in the middle, fully claimed by no side.',
  },
  storyboard: [
    {
      id: 'viet-soldier-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1967 年的一天，邮箱里来了一封信。我妈在厨房里把它递给我，手有点抖。\n\n信上是政府的章。它告诉我：你被 draft (征兵) 抽中了。你要去当兵。\n\n我 19 岁。我家在一个美国小镇上，爸是工人。我没钱、也没门路上大学——上得起大学的人，能拿一张 deferment (缓征)，合法地不去。可我没有。所以这封信，就落在了我头上。\n\n我不告诉你我的名字。因为像我这样、被这封信送去越南的年轻人，有几十万。我们大多是工人和农民家的孩子。\n\n这一遍，你站在我这儿——一个最普通、最没得选的位置。你会发现一件很怪的事：我既是被国家送去「执行政策」的人，又是这套政策最直接的受害者之一。我卡在这两者中间，谁都不完全把我当自己人。',
        en: 'One day in 1967, a letter came in the mailbox. My mother handed it to me in the kitchen, her hand shaking a little.\n\nIt carried the government\'s seal. It told me: you have been picked by the draft. You are going to be a soldier.\n\nI am 19. My family is in a small American town; my father is a worker. I have no money and no way to college, and people who can afford college can get a deferment and legally not go. But I cannot. So this letter landed on me.\n\nI will not tell you my name. Because there are hundreds of thousands of young men like me, sent to Vietnam by that letter. Most of us are the children of workers and farmers.\n\nThis pass puts you where I stand, the most ordinary place, the place with the least choice. You will find a strange thing: I am both a man my country sent to "carry out policy" and one of that policy\'s most direct victims. I am stuck between the two, fully claimed by no side.',
      },
      deliverGoal: 'N1 hook — 1967 邮箱来征兵令 + 19 岁小镇工人家孩子 + 没钱没门路上大学拿 deferment 缓征 (上得起大学的人能合法不去) + 不给名字 (像我这样几十万/多是工人农民家孩子) + 这一遍视角 (最没得选的位置/既执行政策又是受害者/卡中间谁都不完全当自己人)',
      engagementHook: '上得起大学的人能拿一张缓征，合法地不去；我没钱，所以这封征兵令落在我头上。当一套制度让有钱人能躲、穷人躲不掉，你怎么看这种「公平」？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-soldier-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说清楚，这封信为什么偏偏落在我这样的人头上。\n\n1964 到 1973 年间，大约 220 万美国男性被 draft 征召。听上去像是「公平地抽所有年轻人」。\n\n可它一点都不公平。能上大学的人，可以一张接一张地拿 deferment (缓征)，把当兵这事一直往后拖，很多人就这么拖过去了。能拖的，多是富裕家庭、能负担学费的孩子。\n\n拖不了的，是谁呢？是我们——穷人家的孩子、少数族裔的孩子。我们没有学费，没有门路，没有能帮我们写条子的人。于是我们承担了不成比例的伤亡。\n\n这套制度的不公，后来成了反战运动最核心的引信之一：凭什么去那么远的地方流血送命的，总是没钱的那批人？后来在大学校园里，年轻人烧征兵卡、占领校舍，和同一时期的民权运动、青年反主流文化 (counterculture) 拧成了 1960 年代一整片动荡——征兵这把火，是这片动荡的引信之一。\n\n这就是我出发前就压在心口的一句话：保护「自由」的担子，为什么总是先压在最不自由地选择的人身上？',
        en: 'First, let me make clear why this letter landed on people like me.\n\nBetween 1964 and 1973, about 2.2 million American men were drafted. It sounds like "fairly picking all young men."\n\nBut it was not fair at all. People who could go to college could take one deferment after another, pushing military service back and back, and many simply slipped past it that way. Those who could push it back were mostly wealthy families, kids who could afford tuition.\n\nWho could not push it back? Us, the children of the poor, the children of minorities. We had no tuition, no connections, no one to write a note for us. So we carried a disproportionate share of the dying.\n\nThe unfairness of this system later became one of the core fuses of the anti-war movement: why was it always the people with no money who went so far away to bleed and die? Later, on the college campuses, young people burned draft cards and occupied buildings, and braided together with the civil rights movement and the youth counterculture of the same years into one whole upheaval of the 1960s; the draft was one of that upheaval\'s fuses.\n\nThis is the sentence already pressing on my chest before I left: why does the burden of protecting "freedom" always fall first on the people with the least freedom to choose?',
      },
      deliverGoal: 'N2 setup — 1964-1973 约 220 万美国男性被征召 (听上去公平抽所有人) + 其实不公 (能上大学的一张张拿 deferment 拖过去/多是富裕家庭) + 拖不了的是穷人/少数族裔孩子 (没学费没门路承担不成比例伤亡) + 征兵不公=反战运动核心引信 + transfer/DBQ「社会运动相互激荡」(大学校园烧征兵卡占领校舍/与同期民权运动+青年 counterculture 拧成 1960s 一整片动荡/征兵是引信之一) + 出发前压心口的话「保护自由的担子为何总先压在最不自由选择的人身上」',
      engagementHook: '保护「自由」的担子，为什么总是先压在最不自由地选择的人身上？去那么远的地方流血的，凭什么总是没钱的那批人？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-soldier-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '在我懂这些不公之前，他们先给了我一个理由。\n\n新兵营里，长官把它讲得很清楚：你去越南，是为了阻止共产主义。如果南越倒了，整个东南亚会像多米诺骨牌一样一个个变红，最后威胁到我们自己的家。你是去保护自由的。\n\n我信了。我 19 岁，我没理由不信。我以为这跟我爷爷那辈打的仗一样：有清楚的敌人，有清楚的战线，我们是好人，去打坏人。\n\n他们剃了我的头，发给我枪，教我怎么开火、怎么服从命令。几个月后，我上了一架飞机。\n\n飞机门一开，越南的空气扑面而来——又闷又湿又热，混着柴油味，跟我小镇上任何一个夏天都不一样。\n\n那一刻我还不知道：长官嘴里那套清清楚楚的道理，和我接下来要踩进去的那片丛林，几乎没有一处对得上。',
        en: 'Before I understood any of this unfairness, they first gave me a reason.\n\nIn boot camp the officers spelled it out: you are going to Vietnam to stop communism. If South Vietnam falls, all of Southeast Asia will go red one by one, like dominoes, until our own home is threatened. You are going to protect freedom.\n\nI believed it. I was 19; I had no reason not to. I thought it would be like the war my grandfather\'s generation fought: a clear enemy, a clear front line, we are the good guys going to fight the bad guys.\n\nThey shaved my head, handed me a rifle, taught me how to fire and how to obey orders. A few months later, I boarded a plane.\n\nWhen the plane door opened, Vietnam\'s air rushed in, thick and wet and hot, mixed with the smell of diesel, unlike any summer in my small town.\n\nIn that moment I did not yet know: the clear, tidy reasoning in the officers\' mouths, and the jungle I was about to step into, matched almost nowhere.',
      },
      deliverGoal: 'N3 setup — 给我一个理由 (长官: 去越南阻止共产主义/南越倒东南亚多米诺变红威胁自家/你去保护自由) + 我信了 (19 岁以为像爷爷辈的仗有清楚敌人战线好人打坏人) + 剃头发枪教开火服从 + 上飞机 + 越南空气 (闷湿热+柴油味跟小镇夏天不一样) + 「长官那套清楚道理和接下来的丛林几乎没一处对得上」',
      engagementHook: '长官把道理讲得清清楚楚：清楚的敌人、清楚的战线，我们是好人去打坏人。我 19 岁，信了。当一个理由听上去这么干净时，你会停下来问它真不真吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-soldier-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你以为你来打一场有前线的仗。可越南这里，没有前线。\n\n你在丛林里行军，泥浆没过脚踝，雨季的雨能下到你怀疑人生。能见度极低，你看不见十步之外。你的对手 Viet Cong (越共)，不穿制服。\n\n白天，你经过一个村子，田里一个农民弯腰插秧，朝你笑笑。你冲他点点头。\n\n晚上，同一个人，可能端着枪，藏在黑暗里朝你的班开火。\n\n你的战友——昨天还跟你分一支烟的人——被一颗你从没看见的地雷炸飞，被一个你从没看见的狙击手打死。你抱着他，手上全是血，可你连朝谁还击都不知道。\n\n你心里那个 19 岁时清清楚楚的世界，在这片丛林里碎成了渣：谁是敌人？哪边是「我们」？我到底在保护谁、又在杀谁？\n\n没有人回答你。你只能端着枪，继续往前走。',
        en: 'Now you are me.\n\nYou thought you came to fight a war with a front line. But here in Vietnam, there is no front line.\n\nYou march through jungle, mud over your ankles, the rainy-season rain falling until you doubt your own life. Visibility is almost nothing; you cannot see ten steps ahead. Your enemy, the Viet Cong, wears no uniform.\n\nBy day, you pass a village; a farmer bends planting rice in the field and smiles at you. You nod back at him.\n\nBy night, the same man may be holding a rifle, firing at your squad from the dark.\n\nYour buddy, the man who shared a cigarette with you yesterday, is blown apart by a mine you never saw, shot by a sniper you never saw. You hold him, your hands all blood, and you do not even know whom to shoot back at.\n\nThe world that was so clear to you at 19 shatters to dust in this jungle: who is the enemy? Which side is "us"? Whom am I protecting, and whom am I killing?\n\nNo one answers you. You can only hold your rifle and keep walking forward.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 以为有前线其实没有 + 丛林行军 (泥浆没脚踝/雨季/能见度极低/Viet Cong 不穿制服) + 白天农民朝你笑晚上同一人朝你开火 + 战友 (昨天分烟) 被没看见的地雷/狙击手炸死打死你抱着他满手血却不知朝谁还击 + 19 岁清楚的世界碎成渣 (谁是敌人/哪边是我们/保护谁杀谁) + 没人回答只能端枪往前走',
      engagementHook: '白天朝我笑的农民，晚上可能端枪朝我开火。我抱着满手血的战友，却连朝谁还击都不知道。当你分不清谁是敌人，「保护」和「杀」的界线，还守得住吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-soldier-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '在这片分不清敌友的丛林里，我慢慢看清了我这个位置最难的地方。\n\n我手里有枪。上面有命令：清剿这片区域、控制这个村子。我执行命令，所以从越南村民眼里看，我是带着火力闯进他们家园的人——我是个 perpetrator (施害者)。\n\n可同时，我也是被一封征兵令、被一套我根本没参与制定的政策，硬塞进这片丛林来送死的人。地雷、狙击、丛林病，每天都可能要了我的命——从这个角度看，我又是这套政策最直接的 receiving-end (受害者)。\n\n我卡在中间。这就是「夹缝中人」的位置：上面下命令的人离前线几千里，下面承受炮火的村民就在我枪口前，而我，两样都是，又两样都不全是。\n\n这个位置逼出一个最难的问题：一个被命令开枪、自己也朝不保夕的普通年轻人，该怎么看待自己手上的那份责任？\n\n这个问题，我到今天都没有一个干净的答案。',
        en: 'In this jungle where I cannot tell friend from foe, I slowly saw the hardest thing about my position.\n\nI have a rifle. Above me are orders: sweep this area, control this village. I carry out the orders, so in the eyes of the Vietnamese villagers, I am the man who breaks into their home with firepower, I am a perpetrator.\n\nBut at the same time, I am also the one a draft notice and a policy I had no part in making shoved into this jungle to die. Mines, snipers, jungle sickness, any day could take my life, so from this angle I am also the most direct receiving-end of that policy.\n\nI am stuck in the middle. This is the place of the "person caught in the gap": the men who give orders are thousands of miles from the front, the villagers who bear the fire are right in front of my muzzle, and I am both, yet fully neither.\n\nThis position forces out the hardest question: how should an ordinary young man, ordered to fire and himself in danger every hour, see the responsibility on his own hands?\n\nThis question, even today, I have no clean answer to.',
      },
      deliverGoal: 'N5 story — 看清这个位置最难处 + 手里有枪有命令 (清剿区域控制村子) 从村民眼里看是 perpetrator 闯进家园 + 同时被征兵令和没参与制定的政策塞进丛林送死 (地雷狙击丛林病) 是政策最直接 receiving-end + 卡中间「夹缝中人」(下命令的离前线几千里/承受炮火的村民在枪口前/两样都是又两样都不全是) + 最难问题: 被命令开枪自己也朝不保夕的人该怎么看手上的责任 + 没干净答案',
      engagementHook: '在村民眼里我是带枪闯进他们家园的施害者；可我自己，又是被一封征兵令塞进丛林送死的受害者。我两样都是，又两样都不全是。这样一个夹缝中的人，该怎么看自己手上的责任？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-soldier-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1968 年春节 (Tet) 那几天，我离我们说的「赢」最近，也离它最远。\n\n按惯例，春节该停火。可那几天，北越和 Viet Cong 突然在全境发动突袭——这就是 Tet 春节攻势。连远在后方、我们以为最安全的城市，都打了起来。我们这些前线的兵，被打懵了：不是说敌人快撑不住了吗？\n\n我们最后把他们打退了，伤亡惨重的是他们那边。按长官和华盛顿的说法，这是「我们赢了」。\n\n可那几天我心里最清楚的，是另一件事：原来我在丛林里每天用命换来的那点「战果」、那些被报上去的 body count，跟「这场仗能不能赢」，根本不是一回事。\n\n后来听说，国内最受信任的电视主播，在节目里说这场仗陷入了「僵局」。前线的我们听了，没有觉得被背叛——很多人心里反而松了一口气：原来不是只有我们觉得，这场仗看不到头。',
        en: 'During Tet, the Lunar New Year of 1968, I was at once closest to the "win" we talked about and farthest from it.\n\nBy custom, Tet should mean a ceasefire. But in those days, North Vietnam and the Viet Cong launched a surprise attack across the whole country, the Tet Offensive. Even cities far in the rear, the ones we thought safest, broke into fighting. We at the front were stunned: were we not told the enemy was nearly finished?\n\nWe beat them back in the end, with heavy losses on their side. By the words of the officers and Washington, this was "we won."\n\nBut what was clearest in my heart those days was another thing: the bit of "result" I traded my life for every day in the jungle, the body counts filed upward, had nothing at all to do with "whether this war can be won."\n\nLater I heard that the most trusted TV anchor back home said on his program that the war was in a "stalemate." We at the front, hearing it, did not feel betrayed; many of us, in our hearts, breathed easier: so it was not only us who felt this war had no end in sight.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (Tet 从士兵角度) — 1968 Tet 离「赢」最近也最远 + 春节该停火却全境突袭 (连后方最安全的城市都打/前线兵被打懵: 不是说敌人快撑不住了吗) + 打退了伤亡惨重的是他们 (按长官华盛顿说法=赢) + 士兵最清楚的另一件事: 每天用命换的战果和 body count 跟「能不能赢」不是一回事 + 听说 Cronkite 说陷入僵局前线兵没觉得被背叛反而松气 (不是只有我们觉得看不到头)',
      engagementHook: '我们把 Tet 打退了，按上面的说法这是「赢」。可那几天我最清楚的是：我每天用命换来的 body count，跟「这场仗到底能不能赢」根本不是一回事。当你拼死换来的「战果」毫无意义时，你还撑得下去吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-soldier-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得告诉你一件最沉的事。它发生在我没去的另一支部队，但它本可以发生在任何一支被这片丛林逼疯的部队身上。\n\n1968 年 3 月 16 日，在一个叫 My Lai (美莱) 的村子，美军一支部队 (Charlie 连) 在几个小时里，杀死了数百名手无寸铁的村民——估计约 347 到 504 人，大多是老人、妇女和孩子。这件事被掩盖了一年多，1969 年才曝光。\n\n你坐在我这个位置，会比谁都更难面对它。因为我太懂那种处境了：分不清谁是敌人，战友天天被看不见的人炸死，恐惧、愤怒、复仇的念头，每天都在啃你。\n\n可「我懂那种处境」，绝不等于「那就该」。My Lai 那几个小时里被杀的，是放下了一切武器的老人和孩子。\n\n这件事像一根刺，扎在我们每个老兵心里：在一场把人逼疯的仗里，一个普通士兵，到底守得住、还是守不住自己手上那条线？',
        en: 'I must tell you the heaviest thing. It happened to another unit, not mine, but it could have happened to any unit driven mad by this jungle.\n\nOn March 16, 1968, in a village called My Lai, a U.S. unit (Charlie Company) killed hundreds of unarmed villagers in a few hours, an estimated 347 to 504, most of them old people, women, and children. The event was covered up for over a year and exposed only in 1969.\n\nFrom where I sit, you will face it harder than anyone. Because I know that situation too well: you cannot tell who the enemy is, your buddies are killed daily by people you never see, and fear, rage, and the urge for revenge gnaw at you every day.\n\nBut "I understand that situation" never means "then it was right." The ones killed in those hours at My Lai were old people and children who had laid down every weapon.\n\nThis sits in every veteran\'s heart like a thorn: in a war that drives men mad, can an ordinary soldier hold, or not hold, the line on his own hands?',
      },
      deliverGoal: 'N7 story — 最沉的事发生在别的部队但本可发生在任何被丛林逼疯的部队 + 1968.3.16 My Lai Charlie 连几小时杀数百手无寸铁村民 (约 347-504/多为老弱妇孺) 掩盖一年多 1969 曝光 + 士兵比谁都难面对 (太懂那处境: 分不清敌人/战友被看不见的人炸死/恐惧愤怒复仇啃人) + 但「我懂处境」≠「那就该」(被杀的是放下武器的老人孩子) + 像刺扎在老兵心里: 被逼疯的仗里普通士兵守不守得住手上那条线',
      engagementHook: '我太懂那种被逼疯的处境了——可「我懂」，绝不等于「那就该」。在一场把人逼疯的仗里，一个普通士兵，到底守不守得住自己手上那条线？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-soldier-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '熬过那一年，我活着回了家。可我很快发现，「回家」远没有我想的那么简单。\n\n我以为我是为国家流过血的人，会被当英雄迎接。可那时的美国，已经被这场战争撕成了两半。\n\n街上反战的年轻人，看着我这身军装，眼神里有种东西，像在说：你是帮凶，你去那里杀了人。他们反的是战争，可那愤怒，有时也落到我们这些被送去打仗的人身上。\n\n而那些支持战争的人呢？他们也不是坏人。我邻居家就是——他们真心相信：南越一倒，东南亚就会一片接一片变红；真心觉得，半路撤出，就是背叛了在前线流血的孩子。在他们眼里，我去那儿是对的。可奇怪的是，他们嘴上敬重「我们的孩子」，真到我们回来，很多人也没真的善待我们——找不到工作，没人想听我们在那边经历了什么。\n\n更难的是夜里。我会突然回到那片丛林，听见那声音、闻到那味道，浑身冷汗。后来人们给这个起了个名字，叫 PTSD (创伤后应激障碍)。\n\n我夹在两边，两边都不真正接住我。这是我作为「夹缝中人」，回家后才尝到的、最孤独的那一层。',
        en: 'I made it through that year and came home alive. But I soon found that "coming home" was far from as simple as I thought.\n\nI thought I was a man who had bled for his country and would be welcomed as a hero. But by then America had been torn in two by this war.\n\nThe anti-war young people on the street looked at my uniform with something in their eyes that seemed to say: you are part of the harm, you went there and killed. They opposed the war, but that anger sometimes fell on us, the ones sent to fight it.\n\nAnd the people who supported the war? They were not bad people either. My neighbors were among them; they sincerely believed that if South Vietnam fell, Southeast Asia would go red piece by piece, and sincerely felt that to pull out halfway was to betray the kids bleeding at the front. In their eyes, my going there was right. Yet, strangely, though they honored "our boys" with their mouths, when we actually came back many of them did not truly care for us either, no jobs, no one wanting to hear what we had been through over there.\n\nThe nights were harder. I would suddenly be back in that jungle, hearing the sound, smelling the smell, cold sweat all over. Later people gave it a name, PTSD.\n\nI was caught between the two sides, and neither truly caught me. This is the loneliest layer of being a "person in the gap," one I only tasted after coming home.',
      },
      deliverGoal: 'N8 story — 活着回家但「回家」不简单 + 美国已被战争撕两半 + 反战年轻人看军装眼神 (你是帮凶你去那杀了人/反的是战争但愤怒也落到士兵头上) + 支持战争的人 (pro-war 平民/沉默的大多数被人化非稻草人: 邻居也不是坏人/真心信南越一倒东南亚一片片变红/真心觉得半路撤出就是背叛在前线流血的孩子/在他们眼里我去那儿是对的) 但嘴上敬重「我们的孩子」真回来很多也没善待 (找不到工作没人想听经历) + 夜里突然回丛林冷汗 = PTSD + 「夹两边两边都不真正接住我」回家后最孤独那一层',
      engagementHook: '反战的人觉得我是帮凶，支持战争的人也没真的善待我——我夹在两边，两边都不真正接住我。一个被国家送去打仗、又被两头嫌弃的人，他的孤独，谁该负责？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-soldier-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '回家以后，有件怪事我想了很多年：跟我同年纪的人，命怎么会差这么远。\n\n地球这一端，被征兵抽中的我，在越南的丛林里听着头顶直升机旋翼的声音——它来，意味着把伤员接走，或者把更多人送进战场，是生与死的接送声。我们这一代美国年轻人里，约 5.82 万人没能回来。\n\n那时，地球的另一端也在动。中国派了几十万工程、防空部队去帮北越——也许你家里长辈记忆里的「抗美援越」，和我这个被征兵的美国兵，正是同一场仗的两面。而同一段时间，跟我同龄的中国年轻人，人生也被一场十年的大动荡改写——文化大革命 (文革，1966 到 1976)。这是这一遍里我能提到中国的地方。\n\n我不替谁论对错——文革也好、这场仗也好，我只想把同一段时间、地球两端跟我一样没得选的两群年轻人，摆在一起给你看。\n\n我后来常想：我们这两群人，隔着半个地球，互相不认识，却同样地——被一个远比自己大得多的东西，决定了人生最关键的那几年。我们都没被问过，想不想。',
        en: 'After I came home, one strange thing I turned over for years: how could the lives of people my own age turn out so differently.\n\nOn this side of the earth, I, picked by the draft, listened in the jungles of Vietnam to the sound of helicopter rotors overhead. Its coming meant lifting out the wounded, or sending more men into the fight, the sound of ferrying life and death. Of my generation of young Americans, about 58,000 never came back.\n\nIn that same time, the other side of the earth was moving too. China sent several hundred thousand engineering and anti-aircraft troops to help North Vietnam; perhaps the "Resist America, Aid Vietnam" in your elders\' memory, and I, this drafted American soldier, are two faces of the very same war. And in that same stretch of time, Chinese young people my age had their lives rewritten by a ten-year upheaval, the Cultural Revolution (1966 to 1976). This is the place in this pass where I can speak of China.\n\nI judge no one right or wrong, not the Cultural Revolution, not this war; I only want to set, side by side, two groups of young people in the same span of time, on two sides of the earth, who, like me, had no choice.\n\nI often thought afterward: we two groups, half a world apart, never knowing each other, were each, in the same way, decided in our most crucial years by something far bigger than ourselves. Neither of us was ever asked whether we wanted it.',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§8 注入 mediator) — 同年纪人命差这么远 + helicopter 直升机旋翼声 ANCHOR (从士兵角度: 接走伤员/送更多人进战场=生与死的接送声) + 约 5.82 万美国年轻人没回来 + 抗美援越关联 (中国派几十万工程防空部队帮北越/家里长辈记忆里的「抗美援越」和我这被征兵的美国兵是同一场仗的两面) + 同一段时间同龄中国年轻人人生被文革十年大动荡改写 (1966-1976) + Rule0 第一人称免责 (我不替谁论对错文革也好这场仗也好只想把同一段时间地球两端跟我一样没得选的两群年轻人摆一起) + 两群人隔半地球互不认识却同样被远比自己大的东西决定关键几年/都没被问过',
      engagementHook: '地球这一端，我在越南丛林里听着直升机旋翼声；同一段时间，地球那一端，跟我同龄的中国年轻人被卷进文革。我们隔着半个地球互不认识，却同样被一个远比自己大的东西，决定了人生最关键的几年——都没被问过想不想。',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-soldier-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，最难评的，是我手上那份责任。两种说法都站得住，你来称。\n\n一种说法：我无辜。我没要去越南，是一封征兵令把我抓去的；制定政策的人离前线几千里，把我塞进一片分不清敌友的丛林。我开过枪，可那是在命令下、在恐惧里、在「不开枪可能就是我死」的处境下。把一整套政策造成的伤害，算到一个 19 岁、自己也朝不保夕的小兵头上，公平吗？\n\n另一种说法：我没法完全把自己摘干净。我手里确实握着枪，扣动扳机的，到底是我自己的手指。被我的火力波及的越南村民，不会因为「我也是受害者」就少流一滴血。「我是被逼的」能解释很多，可它能不能洗掉全部责任？这道坎，My Lai 把它逼到了所有人面前。\n\n这两边不是「他可怜所以无辜」。是同一个我的两面——一个被政策碾过的受害者，和一个手上确实有过火力的执行者。\n\n这是 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, the hardest thing to judge is the responsibility on my hands. Both views stand. You do the weighing.\n\nOne view: I am innocent. I did not ask to go to Vietnam; a draft notice seized me. The men who made the policy were thousands of miles from the front and shoved me into a jungle where I could not tell friend from foe. I fired a rifle, yes, but under orders, in fear, in a situation where "not firing might mean I die." To pin the harm of a whole policy on a 19-year-old private, himself in danger every hour, is that fair?\n\nThe other view: I cannot fully clear myself. I did hold the rifle; the finger that pulled the trigger was, after all, my own. The Vietnamese villagers caught by my firepower do not bleed one drop less because "I was a victim too." "I was forced" explains much, but can it wash away all responsibility? My Lai forced that line in front of everyone.\n\nThese are not "he is pitiable, therefore innocent." They are two faces of the same me, a victim run over by policy, and an executor whose hands did hold firepower.\n\nThis is the hard problem an AP teacher will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 我手上那份责任 / 一种说法 (我无辜/征兵令抓去/制定政策的人离前线几千里塞我进丛林/开枪是在命令恐惧不开枪可能我死下/算到 19 岁朝不保夕小兵头上公平吗) / 另一种说法 (没法完全摘干净/扣扳机的是我自己手指/被波及村民不因我也是受害者少流血/「我是被逼的」能不能洗掉全部责任/My Lai 把这坎逼到所有人面前) / 同一个我两面 / neutral school name (AP 老师) / 想 30 秒 / 两边都站得住',
      engagementHook: '我是被征兵令抓去的受害者，可扣动扳机的，到底是我自己的手指。「我是被逼的」能解释很多——它能不能洗掉全部责任？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'viet-soldier-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是夹缝里这个士兵的声音。\n\n请记住：这只是一边。我讲的「我也是受害者」「我是被逼的」，听起来很值得同情——这也正是夹缝视角最微妙的地方，它既真实，又可能被用来回避手上的那份责任。\n\n这一遍里，有两群人，从头到尾没真正开口。一个是坐在华盛顿、签字把我送上飞机的决策者——他离前线几千里，他眼里我只是报表上一个调动的数字。另一个，是我枪口前那座村子里的越南农家少女——我执行命令清剿的那片稻田，就是她的家。我跟你讲我多苦，可她呢？她的苦，谁来替她讲？\n\n这场战争，至今没有在美国社会形成统一的「对错」结论——所以这一课，不替你下结论。\n\n换上他们的视角，再走一遍。尤其是那个越南少女——你会听见一个我这一遍里，几乎没能替她说出口的故事。',
        en: 'What you just heard was the voice of this soldier in the gap.\n\nRemember: it is only one side. My talk of "I was a victim too" and "I was forced" can sound deeply worthy of sympathy, and that is exactly the most delicate thing about the gap perspective: it is both true and possibly used to dodge the responsibility on one\'s own hands.\n\nIn this pass, two groups never truly spoke. One is the policymaker in Washington who signed me onto the plane; he was thousands of miles from the front, and to his eyes I was only a number moving on a report. The other is the Vietnamese farm girl in the village before my muzzle; the rice paddy I was ordered to sweep was her home. I told you how much I suffered, but what about her? Her suffering, who will tell it for her?\n\nThis war has still not produced a single shared verdict in American society on whether it was right or wrong, so this lesson draws no conclusion for you.\n\nSwitch to their perspectives and walk it again. Especially the Vietnamese girl, you will hear a story that, in this pass, I could barely speak for her.',
      },
      deliverGoal: 'N11 close/meta — 你听的是夹缝士兵一边 (「我也是受害者」「我是被逼的」既真实又可能被用来回避责任最微妙) + 还没真正开口: 华盛顿签字送我上飞机的决策者 (离前线几千里我只是报表数字) + 我枪口前村子的越南农家少女 (我清剿的稻田就是她的家/我讲我多苦她的苦谁替她讲) + 越战至今美国无统一对错结论本课不下结论 + 换视角再走尤其越南少女 (我这一遍几乎没能替她说出口的故事)',
      engagementHook: '我跟你讲了我多苦——可我枪口前那座村子里的越南少女呢？她的苦，谁来替她讲？换上她的视角再走一遍，你会听见一个我这一遍里几乎没能替她说出口的故事。',
      expectsRealAnswer: true,
    },
  ],
};

export var villagerLens = {
  id: 'villager-and-draftee-receiving-end',
  name: 'The Mekong Village Girl',
  nameCn: '湄公河村庄少女',
  role: 'receiving-end',
  perspectiveTag: 'civilian-the-fire-falls-on',
  icon: '🌾',
  description: {
    cn: '南越湄公河三角洲一座村子里的农家女孩。她没有确切的名字，因为对绝大多数越南村民来说，历史没有为他们留下名字，而这恰恰是问题本身。她每天插秧、挑水、照看弟妹，「共产主义」和「自由世界」是大人物嘴里的词，离她的稻田很远。她真正知道的是：白天南越政府军 (ARVN) 和美军会来盘问，晚上 Viet Cong 会来要粮、要人。这一遍让你站在最没有话语权、最常被两套大叙事同时忽略的位置，直面一个问题：当大国在你的家园上打一场关于「主义」的战争，没有人问过你想要什么。',
    en: 'A farmer\'s daughter in a village in the Mekong Delta of South Vietnam. She has no exact name, because for the vast majority of Vietnamese villagers history left no names, and that, exactly, is part of the problem. Each day she plants rice, carries water, watches her younger siblings; "communism" and "the free world" are words in the mouths of big people, far from her rice paddy. What she really knows is this: by day the South Vietnamese army (ARVN) and the Americans come to question people, by night the Viet Cong come for food and for recruits. This pass puts you in the position with the least voice, the one most often overlooked by both grand narratives at once, to face one question: when great powers fight a war about "isms" on top of your home, no one ever asked what you wanted.',
  },
  storyboard: [
    {
      id: 'viet-villager-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '天刚亮，我已经在稻田里了。脚踩进温温的泥水，手把一束束秧苗插进去。\n\n这里是南越湄公河三角洲，一座很小的村子。我是这村里一个农家女孩，每天插秧、挑水、照看弟弟妹妹。\n\n我没有名字告诉你。不是我没有名字，是这场大战里，没有人替我们这些村民把名字记下来。后来的历史书里，有将军、有总统、有那么多大人物，却几乎没有我们。\n\n而这，恰恰就是我想让你看见的事。\n\n大人物嘴里那些词——「共产主义」「自由世界」「遏制」——离我的稻田很远很远。我真正知道的，只有眼前这片田、我的家人，和一个问题：今晚，会是哪一边的军队，来我们村？\n\n这一遍，你站在我这儿——最没有声音、最常被所有人忽略的这一格。你会看见，这场战争，真正烧在了谁的身上。',
        en: 'Day has just broken, and I am already in the rice paddy. My feet press into the warm muddy water, my hands set the seedlings in, bundle by bundle.\n\nThis is the Mekong Delta of South Vietnam, a very small village. I am a farmer\'s daughter here, planting rice, carrying water, watching my younger brothers and sisters every day.\n\nI have no name to give you. It is not that I have no name; it is that in this great war, no one wrote down the names of us villagers. In the history books later, there are generals, presidents, so many big people, and almost none of us.\n\nAnd this, exactly, is the thing I want you to see.\n\nThose words in the big people\'s mouths, "communism," "the free world," "containment," are far, far from my rice paddy. What I really know is only this field before me, my family, and one question: tonight, which side\'s army will come to our village?\n\nThis pass puts you where I stand, the square with the least voice, the one everyone most often overlooks. You will see whom this war truly fell upon.',
      },
      deliverGoal: 'N1 hook — 天亮在稻田插秧 (温泥水/秧苗) + 南越湄公河三角洲小村农家女孩 (插秧挑水照看弟妹) + 没名字 (不是没有是没人替村民记下/历史书有将军总统大人物几乎没有我们) 这恰是要看见的事 + 大人物的词 (共产主义/自由世界/遏制) 离稻田很远 + 真正知道的: 眼前的田/家人/今晚哪边军队来村 + 这一遍从最没声音最被忽略的位置看战争真正烧在谁身上',
      engagementHook: '历史书里有将军、有总统、有那么多大人物，却几乎没有我们这些村民的名字——而这，恰恰是我想让你看见的事。你能想象「被一整场大战略略过、连名字都没留下」是什么感觉吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-villager-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说清楚我们村的处境，你才懂后来发生的事有多无处可躲。\n\n1954 年，法国人被打败、撤走了。一纸协议把越南从中间分成两半：北边是北越 (首都 Hanoi)，共产党领导；南边是南越 (首都 Saigon)，亲西方。我家在南边。\n\n可这条分界线，对我们村没什么意义。我们是种稻的农民。我爷爷种稻，我爸种稻，我也种稻。哪边的旗子插在 Saigon，跟我们村的稻子能不能熟，关系不大。\n\n外面那些大人物，把整个世界分成「共产主义」和「自由世界」两边，吵得你死我活。可在我们村，没有人真的为这两个词激动。我们关心的，是稻子、雨水、家人，和怎么活下去。\n\n我从小被教着：低头干活，谁来了都赔笑脸，别惹任何一边。我们以为，只要不站队，就能躲过这场大人物的争吵。\n\n后来我才明白：在这样一场战争里，「不站队」，根本不存在。',
        en: 'First, let me make clear my village\'s situation, so you understand how nowhere there was to hide from what came later.\n\nIn 1954, the French were defeated and pulled out. A piece of paper split Vietnam in two down the middle: the North, North Vietnam (capital Hanoi), led by communists; the South, South Vietnam (capital Saigon), pro-Western. My home is in the South.\n\nBut this dividing line meant little to our village. We are rice farmers. My grandfather grew rice, my father grew rice, I grow rice. Which flag flies over Saigon has little to do with whether our rice ripens.\n\nThe big people outside split the whole world into two sides, "communism" and "the free world," quarreling to the death. But in our village, no one was truly stirred by those two words. What we cared about was rice, rain, family, and how to stay alive.\n\nFrom childhood I was taught: keep your head down and work, give a smiling face to whoever comes, do not provoke any side. We thought that as long as we took no side, we could slip past the big people\'s quarrel.\n\nLater I understood: in a war like this, "taking no side" simply does not exist.',
      },
      deliverGoal: 'N2 setup — 我们村处境/无处可躲 + 1954 法国战败撤走/一纸协议把越南分两半 (北越 Hanoi 共产党/南越 Saigon 亲西方我家在南) + 分界线对种稻农民没意义 (爷爷爸我都种稻/哪边旗插 Saigon 跟稻子熟不熟关系不大) + 大人物把世界分共产主义/自由世界吵得你死我活村里没人为这两词激动 (关心稻子雨水家人活下去) + 从小被教低头干活赔笑脸别惹任何一边 + 后来明白这种战争里「不站队」根本不存在',
      engagementHook: '我们从小被教着：低头干活，谁来了都赔笑脸，别惹任何一边，以为这样就能躲过大人物的争吵。可后来我才明白，在这样一场战争里，「不站队」根本不存在。为什么连「不选边」都成了奢望？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-villager-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '为什么「不站队」不存在？因为我们村，被夹在了两边中间。\n\n白天，南越政府军 (ARVN) 和美军会来。他们端着枪走进村子，挨家挨户盘问：见过 Viet Cong (越共游击队) 吗？谁家的男人不见了？他们怀疑我们窝藏游击队。我们低着头，说不知道——说多了，会被当成通敌的。\n\n晚上，换 Viet Cong 来。他们也是越南人，有的就是邻村的。他们来要粮食、要药、有时要人——要我们村的年轻人跟他们走。我们不敢不给——不给，会被当成帮南越和美国人的。\n\n你看明白我们的处境了吗？同一座村子，白天怕这一边，晚上怕那一边。两边都可能怀疑我们替对方做事，两边的枪，都可能对准我们。\n\n我们没有选边的权利，却要为「站错边」付代价。我们什么主义都不信，可这场关于「主义」的战争，把我们死死地夹在了正中间。',
        en: 'Why does "taking no side" not exist? Because our village was caught between the two sides.\n\nBy day, the South Vietnamese army (ARVN) and the Americans came. They walked into the village with rifles, questioning house by house: have you seen the Viet Cong? Whose man has gone missing? They suspected us of hiding guerrillas. We kept our heads down and said we did not know, because to say too much was to be taken for helping the enemy.\n\nBy night, the Viet Cong (the communist guerrillas) came. They too were Vietnamese, some from the next village. They came for food, for medicine, sometimes for people, for the young of our village to go with them. We dared not refuse, because to refuse was to be taken for helping the South and the Americans.\n\nDo you see our situation? In one village, by day we feared this side, by night we feared that side. Both might suspect us of working for the other; the guns of both might point at us.\n\nWe had no right to choose a side, yet we paid the price for "choosing wrong." We believed in no ism at all, yet this war about "isms" caught us, fast, right in the middle.',
      },
      deliverGoal: 'N3 setup — 「不站队」不存在因为夹两边 + 白天 ARVN 和美军来端枪挨家盘问 (见过 Viet Cong 吗/谁家男人不见了/怀疑窝藏游击队/低头说不知道说多了被当通敌) + 晚上 Viet Cong 来 (也是越南人有的邻村/要粮要药要人/不敢不给不给被当帮南越美国) + 同一村白天怕这边晚上怕那边两边都可能怀疑两边枪都可能对准我们 + 没选边权利却要为站错边付代价 + 什么主义都不信却被这场关于主义的战争死死夹中间',
      engagementHook: '白天怕南越军和美军，晚上怕 Viet Cong——同一座村子，两边的枪都可能对准我们。我们什么主义都不信，却被一场关于「主义」的战争死死夹在正中间。没有选边权利、却要为「站错边」付代价，这公平吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-villager-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n这一年，战争离我们越来越近。你听见的第一个变化，是天上的声音。\n\n直升机。一开始很远，像闷雷。后来越来越近，旋翼搅动空气的「哒哒哒」声，能把人心搅乱。它一来，村里的狗就疯叫，孩子就哭。它意味着：美军要么来盘查，要么——要在附近「清剿」。\n\n然后是飞机投下来的东西。普通的炸弹已经够可怕了，可还有一种更可怕的，叫 napalm (凝固汽油弹)——一种烧起来会黏在东西上、扑不灭的火。它落下来，稻田烧、房子烧，沾上的人，火甩不掉。\n\n你抱着最小的弟弟，趴在田埂下，听着头顶那「哒哒哒」越来越响。你不知道这一次，火会不会落在你们家。\n\n你心里反复转着一个问题，可你问不出口，因为没有人会来回答你：我没碰过任何一边的枪，我只想种我的稻子——凭什么，这火会烧到我头上？',
        en: 'Now you are me.\n\nThis year, the war came closer and closer to us. The first change you heard was the sound in the sky.\n\nHelicopters. Far off at first, like muffled thunder. Then closer and closer, the "thup-thup-thup" of the rotors churning the air, enough to stir a heart into chaos. When it came, the village dogs went wild, the children cried. It meant: the Americans were coming to search, or coming to "sweep" the area nearby.\n\nThen came the things the planes dropped. Ordinary bombs were terrible enough, but there was a worse one, called napalm, a fire that sticks to whatever it touches and cannot be put out. When it falls, the rice paddy burns, the houses burn, and the people it touches cannot shake the fire off.\n\nYou hold your smallest brother and press down below the paddy dike, listening to the "thup-thup-thup" overhead grow louder. You do not know whether, this time, the fire will fall on your home.\n\nA question turns over and over in your heart, but you cannot ask it aloud, because no one will come to answer: I have never touched a gun on any side, I only want to grow my rice, by what right does this fire fall on me?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 战争越来越近第一个变化是天上的声音 + 直升机 ANCHOR (从村庄少女角度: 闷雷→越来越近哒哒哒搅乱人心/狗疯叫孩子哭/意味美军来盘查或附近清剿) + 飞机投下的 napalm 凝固汽油弹 (黏在东西上扑不灭/稻田房子烧沾上的人甩不掉) + 你抱最小弟弟趴田埂下听头顶哒哒哒越来越响不知火会不会落你家 + 问不出口的问题「我没碰过任何一边的枪只想种稻凭什么火烧到我头上」',
      engagementHook: '我没碰过任何一边的枪，我只想种我的稻子——凭什么这火会烧到我头上？这个问题我反复想，却问不出口，因为没有人会来回答。当大国的战争降到你头上，而你连问都没处问时，那是什么感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-villager-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你要懂这片土地，才懂为什么这场仗会这么残忍地落在我们头上。\n\n越南南方多是丛林、山地，还有我们脚下这片水网密布的湄公河三角洲。这种地形，对游击战极其有利。Viet Cong 就藏在这里——藏在丛林里、藏在地道里，也藏在像我们这样的村子里。他们白天是田里的农民，晚上才端起枪。\n\n所以在美军眼里，我们整个村子，都成了「可疑」的。他们分不清：眼前这个插秧的女孩，是不是晚上替 Viet Cong 送信？这个低头的老人，地窖里是不是藏着枪？\n\n你能体会那种被怀疑的恐惧吗？你什么都没做，可你站在这片土地上、长着这张脸，就足以让端枪的人怀疑你。\n\n这种「分不清谁是敌人」的处境，正是后来那场最可怕的悲剧的土壤——当一支被恐惧和愤怒逼到极限的部队，再也分不清、也不想分清谁是敌人时，最坏的事，就可能发生。',
        en: 'You must understand this land to understand why the war fell on us so cruelly.\n\nThe south of Vietnam is mostly jungle and mountains, and this watery web of the Mekong Delta beneath our feet. Such terrain is perfect for guerrilla war. The Viet Cong hid here, in the jungle, in tunnels, and in villages like ours too. By day they were farmers in the field; only by night did they take up rifles.\n\nSo in the Americans\' eyes, our whole village became "suspect." They could not tell: is this girl planting rice the one who carries messages for the Viet Cong at night? Does this bowing old man hide a rifle in his cellar?\n\nCan you feel that fear of being suspected? You have done nothing, yet standing on this land, wearing this face, is enough to make armed men suspect you.\n\nThis situation of "not being able to tell who the enemy is" was the very soil of the most terrible tragedy that came later, when a unit pushed to its limit by fear and rage could no longer tell, and no longer wanted to tell, who the enemy was, and the worst thing could happen.',
      },
      deliverGoal: 'N5 story — 懂这片土地才懂为何残忍落我们头上 + 越南南方丛林山地+湄公河三角洲水网 (地形利于游击战) + Viet Cong 藏丛林地道也藏村子 (白天农民晚上端枪) + 美军眼里整村「可疑」(分不清插秧女孩是不是夜里送信/低头老人地窖是不是藏枪) + 被怀疑的恐惧 (什么都没做站这片土地长这张脸就够让端枪人怀疑) + 「分不清谁是敌人」是后来最可怕悲剧的土壤 (被恐惧愤怒逼到极限的部队再也分不清也不想分清时最坏的事可能发生)',
      engagementHook: '我什么都没做，可我站在这片土地上、长着这张脸，就足以让端枪的人怀疑我。当一整个村子都被当成「可疑的」，而士兵又分不清谁是敌人时，最坏的事，会不会就在前面等着？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-villager-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我要告诉你那件最坏的事。它发生在 1968 年，一个跟我们村一模一样的村子。\n\n那年春节 (Tet) 前后，整片土地都打疯了。3 月 16 日早上，在一个叫 My Lai (美莱) 的村子，一支美军部队走了进来。村里那天没有打仗，没有 Viet Cong 跟他们交火。\n\n可在接下来几个小时里，他们杀死了数百名手无寸铁的村民——估计约 347 到 504 人。死的，大多是老人、妇女和孩子。跟我一样在田里插秧的女孩，跟我弟弟一样大的孩子。\n\n那座村子，本可以是我的村子。那些人，本可以是我的家人，是我。\n\n这件事被掩盖了一年多。1969 年曝光后，震惊了全世界。可你要记住：在它震惊世界、被写进历史之前，对 My Lai 的人来说，它不是「一个历史事件」。它是那天早上，真实地、一个一个地，落在他们身上的死亡。\n\n这，就是「分不清谁是敌人」这片土壤，最后长出的东西。',
        en: 'I must tell you the worst thing. It happened in 1968, in a village exactly like ours.\n\nAround Tet that year, the whole land had gone mad with fighting. On the morning of March 16, in a village called My Lai, a U.S. unit walked in. There was no battle in the village that day, no Viet Cong firing at them.\n\nYet in the next few hours, they killed hundreds of unarmed villagers, an estimated 347 to 504. The dead were mostly old people, women, and children. Girls planting rice in the fields, like me. Children the age of my little brother.\n\nThat village could have been my village. Those people could have been my family, could have been me.\n\nThe event was covered up for over a year. When it was exposed in 1969, it shocked the whole world. But you must remember: before it shocked the world and was written into history, to the people of My Lai it was not "a historical event." It was death falling on them, that morning, really, one person at a time.\n\nThis is what the soil of "not being able to tell who the enemy is" finally grew.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (My Lai 从村民角度 — receiving-end 良心核心) — 那件最坏的事发生在 1968 一个跟我们村一模一样的村子 + Tet 前后整片土地打疯 + 1968.3.16 早上 My Lai 美军部队走进来 (那天没打仗没 Viet Cong 交火) + 几小时杀数百手无寸铁村民 (约 347-504/多为老弱妇孺/跟我一样插秧的女孩跟我弟一样大的孩子) + 那村本可是我的村那些人本可是我家人是我 + 掩盖一年多 1969 曝光震惊世界 + 但对 My Lai 的人它不是历史事件是那天早上一个一个真实落在身上的死亡 + 这是分不清谁是敌人这片土壤最后长出的东西',
      engagementHook: '那座被屠杀的村子，本可以是我的村子；那些被杀的人，本可以是我的家人，是我。对历史书来说它是「一个事件」，可对那天早上的村民来说，它是一个一个真实落在身上的死亡。这两种「看见」，差在哪里？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-villager-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想让你看见一件，比 My Lai 更难看见的事——因为它太大、太散，散到几乎没有一张照片能装下。\n\nMy Lai 是一天、一座村子里的几百人。可整场战争里，像我这样的越南平民，死了多少？\n\n越南 1995 年的官方估计是：平民死亡多达约 200 万。\n\n(我得诚实地说：这是一个估计数字，不同来源差别很大，没有人能精确数清。可即便是最保守的估计，也是一个让人喘不过气的数目。)\n\n200 万。这不是一个抽象的大数字。它是 200 万个我——200 万个有名字、有家人、有自己的稻田和盼头的人。他们大多数，跟我一样，没有被历史书记住名字。\n\n你发现了吗？这场战争在美国，常被讲成「美国人的创伤」——士兵的牺牲、国内的撕裂。这些都是真的。可战火真正烧在的，是我们这片土地，和我们这些人。\n\n我不是要跟谁比谁更惨。我只是想让你，在听了那么多别人的故事之后，也看我们一眼。',
        en: 'I want you to see a thing harder to see than My Lai, because it is too vast, too scattered, scattered until almost no single photograph can hold it.\n\nMy Lai was hundreds of people, in one village, on one day. But across the whole war, how many Vietnamese civilians like me died?\n\nVietnam\'s 1995 official estimate is: as many as about 2 million civilians dead.\n\n(I have to say, honestly: this is an estimate; sources differ greatly, and no one can count it exactly. Yet even the most conservative estimate is a number that takes your breath away.)\n\nTwo million. This is not an abstract big number. It is two million of me, two million people with names, with families, with their own rice paddies and their own hopes. Most of them, like me, were never remembered by name in any history book.\n\nDo you notice? In America this war is often told as "America\'s trauma," the soldiers\' sacrifice, the country torn at home. These are all true. But the fire truly fell on this land of ours, and on us, these people.\n\nI am not trying to argue who suffered more. I only want you, after hearing so many others\' stories, to look at us, too, for once.',
      },
      deliverGoal: 'N7 story — 比 My Lai 更难看见的事 (太大太散没一张照片装下) + My Lai 是一天一村几百人/整场战争越南平民死多少 + 越南 1995 官方估计平民死亡多达约 200 万 + anti-fab 诚实括号 (估计数字不同来源差别大没人精确数清/即便最保守也喘不过气) + 200 万不是抽象数字是 200 万个我 (有名字家人稻田盼头/大多跟我一样没被历史记名字) + 这战争在美国常被讲成「美国人的创伤」(士兵牺牲国内撕裂都真) 可战火真正烧在我们这片土地我们这些人 + 不是比谁更惨只想你听了那么多别人故事后也看我们一眼',
      engagementHook: '200 万——这不是一个抽象的大数字，它是 200 万个我，200 万个有名字、有家人、有自己稻田和盼头的人。这场战争常被讲成「美国人的创伤」，可战火真正烧在的，是我们。我不是要比谁更惨，我只想你也看我们一眼。',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-villager-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '战争终于走到了头，可它结束的样子，也不是我们能选的。\n\n那些大人物，开始在远方谈了。1973 年 1 月，在巴黎，美国、北越、南越签了一份和平协定。美军 60 天内撤走了。\n\n可你别以为，他们一走，我们就太平了。协定允许北越军队留在南越境内——这等于把和平架在一根随时会断的线上。\n\n两年后，1975 年 4 月 30 日，北越的坦克冲进了 Saigon (西贡)，南越政权垮台。战争结束了。越南，从此统一。\n\n那几天，电视上传遍全世界的画面，是美国大使馆屋顶上，直升机在疏散最后一批人。可那旋翼声底下，挤不上直升机、留在地面上的，是我们——是几百万像我一样的普通越南人。\n\n仗是大人物开始的，也是大人物谈完的。从头到尾，没有一个人，来问过我们村，想要的是哪一种结局。',
        en: 'The war finally came to its end, but even the shape of its ending was not ours to choose.\n\nThe big people began to talk, far away. In January 1973, in Paris, the United States, North Vietnam, and South Vietnam signed a peace agreement. The Americans withdrew within 60 days.\n\nBut do not think that once they left, we were at peace. The agreement let North Vietnamese troops remain inside the South, which set the peace on a thread that could snap at any time.\n\nTwo years later, on April 30, 1975, North Vietnamese tanks rolled into Saigon and the South Vietnamese government collapsed. The war was over. Vietnam, from then on, was united.\n\nIn those days, the image that spread across the whole world on TV was helicopters lifting the last people off the roof of the U.S. embassy. But beneath those rotors, the ones who could not crowd onto the helicopters and stayed on the ground were us, the millions of ordinary Vietnamese like me.\n\nThe war was begun by the big people, and talked to its end by the big people. From beginning to end, not one person came to ask our village which kind of ending we wanted.',
      },
      deliverGoal: 'N8 story — 战争走到头但结束的样子也不是我们能选 + 大人物远方谈 1973.1 巴黎美/北越/南越签和平协定美军 60 天撤走 + 别以为一走就太平 (协定允许北越军留南越=和平架在随时断的线上) + 两年后 1975.4.30 北越坦克冲进 Saigon 西贡南越垮台战争结束越南统一 + 那几天传遍世界的画面: 美国大使馆屋顶直升机疏散最后一批人 (helicopter 旋翼声呼应) + 但旋翼声底下挤不上留地面的是我们几百万普通越南人 + 仗是大人物开始大人物谈完从头到尾没人来问过我们村想要哪种结局',
      engagementHook: '电视上传遍全世界的，是大使馆屋顶直升机疏散最后一批人。可那旋翼声底下，挤不上直升机、留在地面上的，是我们这几百万普通越南人。仗是大人物开始的，也是大人物谈完的——从头到尾，没人问过我们想要哪一种结局。',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-villager-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张更大的地图——一张当年站在稻田里的我，根本看不见的地图。\n\n这场仗，从来不只是美国和越南之间的事。它是冷战在亚洲的战场。北边的 Hanoi 背后，站着两个社会主义大国：中国和苏联。\n\n这是这一遍里我能说到中国的地方。1965 到 1971 年间，中国向北越派出了超过 32 万人的工程、防空部队，帮北越修被美军炸毁的路和桥、运去物资。背后有这两个大国撑着，是北越敢跟美国长期耗下去的底气之一。\n\n不过这两个大国之间，也并不和睦。中国和苏联当时严重分歧、公开决裂（这就是「中苏分裂」），北越夹在北京和莫斯科中间，得小心地两边都不得罪。1960 年代末，中国逐步收缩援助，北越就更多转向了苏联。所以「援越」背后，是两个大国各自的算盘，并不是一团和气。\n\n而就在中国援助北越的同时，中国自己国内，也正陷在一场十年的巨大动荡里——文化大革命 (文革，1966 到 1976)。\n\n我不替谁论对错——中国援越也好、文革也好、美国参战也好，我只是把同一段时间的另一面，摆给你看。\n\n于是地球上同时有三场动荡：美国因这场仗撕裂，中国陷在文革里，而越南，夹在两个大国的炮火正中间。这三段动荡，是同一场冷战风暴，吹向了三个不同的地方。',
        en: 'Let me step back and show you a larger map, a map that I, standing in the rice paddy back then, simply could not see.\n\nThis war was never only between America and Vietnam. It was the Cold War\'s battlefield in Asia. Behind Hanoi in the North stood two great socialist powers: China and the Soviet Union.\n\nThis is the place in this pass where I can speak of China. Between 1965 and 1971, China sent more than 320,000 engineering and anti-aircraft troops to North Vietnam, helping repair the roads and bridges the Americans bombed, and shipping in supplies. Having these two great powers at its back was one reason North Vietnam dared to wear America down over the long haul.\n\nYet the two great powers were not on good terms either. China and the Soviet Union were in sharp disagreement at the time and broke openly (this is the "Sino-Soviet split"), and North Vietnam, caught between Beijing and Moscow, had to be careful to offend neither. In the late 1960s China gradually scaled back its aid, and North Vietnam turned more toward the Soviet Union. So behind "aiding Vietnam" lay each great power\'s own calculations, not one harmonious family.\n\nAnd at the very same time China was aiding North Vietnam, China itself at home was caught in a ten-year upheaval, the Cultural Revolution (1966 to 1976).\n\nI judge no one right or wrong, not China\'s aid to Vietnam, not the Cultural Revolution, not America\'s entry into the war; I only set the other side of the same span of time before you.\n\nSo at one time there were three upheavals on the earth: America torn by this war, China caught in the Cultural Revolution, and Vietnam, right in the middle of two great powers\' fire. These three upheavals were one Cold War storm, blowing toward three different places.',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§8 注入 receiving-end) — 退一步看更大地图 (当年稻田里的我看不见) + 这仗从来不只美越之间是冷战在亚洲的战场 + Hanoi 背后站两个社会主义大国 (中国和苏联) + 1965-1971 中国向北越派逾 32 万人工程防空部队 (修被炸的路桥运物资) + 背后有两大国撑是北越敢长期耗的底气之一 + 中苏分裂 (中苏严重分歧公开决裂/北越夹京莫之间小心两边不得罪/1960s 末中国收缩援助北越更转向苏联/「援越」背后是各自算盘并非一团和气) + 同时中国自己陷文革 (1966-1976 十年动荡) + Rule0 第一人称免责 (我不替谁论对错中国援越/文革/美国参战只摆同一段时间另一面) + 三场动荡同时 (美国撕裂/中国文革/越南夹两大国炮火正中间) 是同一场冷战风暴吹向三个地方',
      engagementHook: '同一段时间，地球上有三场动荡：美国因这场仗撕裂，中国陷在文革里，而越南，夹在两个大国的炮火正中间。这三段动荡，其实是同一场冷战风暴，吹向了三个不同的地方。把它们放一起看，你看见的是三段孤立的历史，还是同一场风暴的三个侧面？',
      expectsRealAnswer: false,
    },
    {
      id: 'viet-villager-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，站在我这片稻田回头看，有一个真问题，等你来答。\n\n这场战争里，几乎每一方都在讲自己的道理：决策者讲遏制、讲多米诺；被征兵的士兵讲「我也是受害者」；反战的人讲良心；支持战争的人讲「不能背叛流血的士兵」。每一方的道理，都有它真实的一面。\n\n而我想问你的是：在这一整套互相争辩的「大道理」里，我们这些村民的声音，到底排在第几位？\n\n一种说法：大国之间的对抗，本就有它残酷的逻辑，平民的牺牲，是任何一场大战都躲不掉的代价——把它单独拎出来，无助于理解这场冷战博弈。\n\n另一种说法：恰恰是这种「平民牺牲是必要代价」的想法本身，让我们这些人，一次又一次，被两套大叙事 (「冷战正义」和「美国反思」) 同时略过。最该被听见的声音，反而最容易被「大道理」盖住。\n\n两边都站得住。你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, standing in this rice paddy and looking back, there is a real question waiting for you.\n\nIn this war, almost every side argued its own reason: the policymaker spoke of containment, of dominoes; the drafted soldier of "I was a victim too"; the anti-war people of conscience; the pro-war people of "we cannot betray the soldiers who bled." Each side\'s reasoning has a true part to it.\n\nAnd what I want to ask you is: in this whole set of grand reasons arguing against one another, where do the voices of us villagers rank?\n\nOne view: the confrontation of great powers has its own cruel logic, and civilian sacrifice is a cost no great war can avoid; to single it out does not help understand this Cold War game.\n\nThe other view: it is exactly this idea, that "civilian sacrifice is a necessary cost," that lets people like us be passed over, again and again, by both grand narratives ("Cold War justice" and "American self-reflection") at once. The voice that most deserves to be heard is the one most easily buried under the "grand reasons."\n\nBoth sides stand. What do you think? Take thirty seconds, and write it down.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 一整套互相争辩的大道理里我们村民的声音排第几 + 各方道理 (决策者遏制多米诺/士兵我也是受害者/反战讲良心/支持战争不能背叛流血士兵每方都有真实一面) + 一种说法 (大国对抗有残酷逻辑/平民牺牲是任何大战躲不掉的代价/单拎出来无助理解冷战博弈) + 另一种说法 (恰是「平民牺牲是必要代价」这想法让我们被两套大叙事冷战正义/美国反思同时略过/最该被听见的最易被大道理盖住) + 两边都站得住 + 想 30 秒',
      engagementHook: '这场战争里几乎每一方都在讲自己的道理——可在这一整套互相争辩的「大道理」里，我们这些村民的声音，到底排在第几位？两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'viet-villager-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个没名字的稻田女孩，一片我只想种好的稻子，一场从没问过我想不想的战争，你会怎么评价这样一个位置？\n\n我没有遏制理论，没有 body count (敌方阵亡数) 报表，没有「我也是受害者」的辩白。我只有一片被烧过的稻田，和一句没人来回答的问题：凭什么是我？我这一遍，是这场战争里最没有话语权的那一格——也正因为这样，它最该被听见。\n\n但你得记住：这一遍，你听的，仍然只是我一个人、一个位置的声音。\n\n那个在华盛顿签字加兵的决策者，会跟你讲他的遏制逻辑、他夜里的睡不着；那个被征兵抽中、在我枪口对面那片丛林里挣扎的美国士兵，会跟你讲他也是被迫的、他回家也没人接住。他们的故事，也都是真的。换上他们的视角，你刚才为我下的判断，还站得住吗？\n\n最后，留一个问题给你，带回你自己的生活里：今天，在你身边，有没有一群人，正像当年的我们一样——大人物在他们头顶上做着关于「大道理」的决定，却从没有人，低下头来，问一句他们想要什么？\n\n如果有，你愿不愿意，做那个低下头来、问一句的人？',
        en: 'Having walked my whole life, a nameless rice-paddy girl, a field I only wanted to grow well, a war that never asked whether I wanted it, how would you judge a position like this?\n\nI have no containment theory, no body-count report, no defense of "I was a victim too." I have only a burned rice paddy and one question no one came to answer: by what right was it me? This pass is the square with the least voice in this whole war, and exactly for that, it most deserves to be heard.\n\nBut you must remember: this pass, what you heard, is still only the voice of one person, one position.\n\nThe policymaker who signed for more troops in Washington will tell you his containment logic, his sleepless nights; the drafted American soldier who struggled in the jungle across from my muzzle will tell you he too was forced, that no one caught him when he came home. Their stories are also true. Switch to their perspectives, and does the judgment you just made for me still hold?\n\nAnd one last question to take back into your own life: today, around you, is there a group of people, just like us back then, over whose heads the big people make decisions about "grand reasons," while no one ever bends down to ask what they want?\n\nIf there is, would you be the one who bends down, and asks?',
      },
      deliverGoal: 'N11 close/meta — 评价这个位置 (没名字稻田女孩/只想种好的稻子/从没问过我想不想的战争) + 我没有遏制理论/body count/「我也是受害者」辩白只有被烧的稻田和没人回答的「凭什么是我」+ 最没话语权的格也正因此最该被听见 + MANDATORY 跨视角指针: ① 你听的仍只是我一个位置 ② 华盛顿决策者会讲遏制逻辑睡不着 + 我枪口对面丛林的美国士兵会讲他也被迫回家没人接住 (他们故事也真) ③ 换视角你为我下的判断还站得住吗 + transfer 带回自己生活 (今天身边有没有一群人像当年的我们/大人物在头顶做大道理决定却没人低头问他们想要什么) + 你愿不愿做那个低头问一句的人',
      engagementHook: '我这一遍，是这场战争里最没有话语权的那一格——可也正因为这样，它最该被听见。今天，在你身边，有没有一群人正像当年的我们：大人物在他们头顶做着关于「大道理」的决定，却从没人低下头问一句他们想要什么？你愿不愿意，做那个低头问一句的人？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator / receiving-end-default) ───
export var lenses = {
  'policymaker-actor':                    policymakerLens,
  'drafted-soldier-mediator':             soldierLens,
  'villager-and-draftee-receiving-end':   villagerLens,
};

// defaultLens 取自 narrative frontmatter (villager-and-draftee-receiving-end)
// 越南平民 = 最没话语权、最常被两套大叙事 (冷战正义 / 美国反思) 同时忽略的位置;
// 越南视角史学转向 = AP DBQ 必考的「Vietnamese-centered history」。
export var defaultLens = 'villager-and-draftee-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'vietnam-war-1965',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'policymaker-actor': 30, 'drafted-soldier-mediator': 32, 'villager-and-draftee-receiving-end': 32 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-06',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail: helicopter 直升机旋翼声 (三视角各触一次不点破: 决策者 n4=报表上一行调动架次只是个数字 / 士兵 n9=生与死的接送声 / 村庄少女 n4+n8=头顶盘问与炮火的预兆/大使馆屋顶疏散)',
    'Rule 0 高敏感 (本课最高等级): 多视角并列 (支持/反对/士兵/平民) + 事实/评价分层 + 绝不下「战争对错」最终结论 (每 lens N11 显式声明本课不下结论)',
    'defaultLens: villager-and-draftee-receiving-end — 越南平民 (Vietnamese-centered history, AP DBQ 必考) + 无名稻田少女最该被听见',
    'expectsRealAnswer: ONLY N10 (synthesis reflection) + N11 (synthesis close) per lens = true (2 per lens, 6 total)',
    '§8 中国桥注入: mediator N9 (抗美援越逾 32 万人/「家里长辈记忆里的抗美援越」与被征兵美国兵是同一场仗两面 + 同龄中国年轻人人生被文革十年动荡改写) + receiving-end N9 (抗美援越逾 32 万人 + 中苏分裂 Sino-Soviet split 北越夹京莫之间/1960s 末中国收缩援助北越转向苏联 + 文革同时性/三场动荡同一场冷战风暴); Rule0 免责改为第一人称角色口吻「我不替谁论对错…只把…摆给你看」(不评判中国援越/文革/美国参战); 数字统一用「人」非「人次」',
    'anti-fab: 三个桥接人物 (决策者/士兵/越南少女) narrative §3 已透明标合成、身份写实; Cronkite stalemate 引语 N7 标转述非档案逐字; My Lai 死亡数沿用区间约 347-504; 越南平民约 200 万标 1995 官方估计性质',
    'cultural ban: 越南/美国真实术语全程 (Gulf of Tonkin/Viet Cong/ARVN/PAVN/Tet/My Lai/Kent State/draft/deferment/Saigon/Hanoi/napalm/Rolling Thunder/Vietnamization/containment/domino/escalation/body count/credibility gap); 中国术语仅 §8 桥段 (抗美援越/文革/中苏)',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
