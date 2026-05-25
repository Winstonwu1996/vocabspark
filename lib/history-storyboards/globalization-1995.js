// ─── Globalization since ~1945 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 全球化 · Globalization since ~1945 (accelerating after 1991)
// HSS-10/11 · AP World History Modern Unit 9 (全球化) · 经济/文化整合 (非冷战超级大国冲突)
//
// 3 lens (per TOPIC_ROADMAP_G6_G12.md + AUTHORING_PIPELINE 第 7/8/12 条):
//   - ceo-or-trade-architect                  (perpetrator-power)  — 跨国公司高管 / 自由贸易架构师, 把生产外包 + 推动 WTO/自由贸易. icon 💼
//   - rust-belt-worker                        (lonely-mediator)    — 美国中西部工厂工人, 工作被外包, 夹在「更便宜的商品 (消费者)」和「丢掉的饭碗 (工人)」之间. icon ⚙️
//   - global-south-garment-worker-receiving-end (receiving-end, DEFAULT) — 全球南方制衣/电子厂年轻女工 (孟加拉/越南): 做出全球化廉价商品的劳动; 工时长工资低, 但 (诚实地) 工资可能高过乡下务农的赤贫. icon 🧵
//
// 跨 lens micro-detail (N6 anchor):
//   一件 T 恤 / 一部手机 — 三个人在供应链的三个位置:
//   - CEO/贸易架构师: 在会议室画供应链地图, 把工厂从俄亥俄搬到深圳/达卡, 成本砍一半, 股价涨
//   - rust-belt 工人: 那家关掉的工厂里, 上一个拧螺丝的人 — 现在去货架上买那件更便宜的、别人做的同款
//   - 南方女工: 缝那件 T 恤的人 — 每天 10 小时, 工资是 rust-belt 工人的零头, 但比她家乡种地多
//   同一件商品: 一个人设计了它的旅程, 一个人因它丢了工作又因它买得起, 一个人用双手做出它
//
// 跨 Topic 锚:
//   - 集装箱 1956 + 供应链 → industrial-revolution-1800 (B 工厂制度的全球版)
//   - 苏联 1991 解体后加速 → cold-war-1962 (两极格局结束 → 单一全球市场)
//   - 中国入世 2001「世界工厂」→ §8 同时代中国 (全球化最大赢家兼车间)
//
// defaultLens = 'global-south-garment-worker-receiving-end' (受影响者优先 pattern: 女性 + 做廉价商品的劳动一方 + 跨 lens 一件商品三个位置)
//
// ⚠️ Rule 0 双刃 (本 Topic 最敏感维度): 全球化真把数亿人脱贫 (全球极端贫困 ~36% 1990 → ~9% 2010s; 中国 ~8 亿)
//   同时也跑在廉价 + 常常不安全的劳动上 (Rana Plaza 2013 倒塌 ~1,134 死) + 部分地区失业/不平等.
//   不向任何一边说教 — 全球化真的是双刃的. 谁得益谁付代价, 是不是同一个人.
//
// STRUCTURE SPEC: multi-faction → 11 nodes/lens
//   - 220-380 CN chars/node; 只 N6 (cross-lens) + N10/N11 (synthesis) 可达 ~550; 其余 ≤380
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true (2/lens, 6 total); 其余全 false
//   - N6 = 普通 story anchor (runtime 注入 retrieval gate; 此处不写歇脚点/想停就停)
//
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: CEO / Trade Architect (perpetrator-power)
// ═══════════════════════════════════════════════════════════════════════

export var ceoLens = {
  id: 'ceo-or-trade-architect',
  name: 'A Multinational CEO',
  nameCn: '跨国公司高管',
  role: 'perpetrator-power',
  perspectiveTag: 'supply-chain-architect',
  icon: '💼',
  description: {
    cn: '一家美国服装公司的高管，掌着供应链。1990 年代，他做了一个让公司起死回生的决定：把工厂从俄亥俄关掉，把生产搬到地球另一边工资低得多的地方。同一双手，让一件 T 恤的成本砍掉一半，让美国家庭花更少的钱买到更多东西，也让一座小城的工厂熄了灯。他不觉得自己是坏人，他觉得自己在做一件让所有人都买得起的好事。这一遍让你从设计全球供应链的人内部，看「让世界更便宜」这件事，是怎么同时创造繁荣和制造受害者的。',
    en: 'An executive at an American clothing company, in charge of the supply chain. In the 1990s he made the decision that saved the company: close the factory in Ohio and move production to the other side of the world, where wages were far lower. The same hands that cut the cost of a T-shirt in half, that let American families buy more for less, also turned out the lights in a small town\'s factory. He does not think of himself as a villain. He thinks he is doing a good thing, making things everyone can afford. This pass lets you watch, from inside the person who designs a global supply chain, how "making the world cheaper" creates prosperity and produces victims at the same time.',
  },
  storyboard: [
    {
      id: 'ceo-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1994 年，我办公室的桌上摊着两张报价单。\n\n同样一件 T 恤，在俄亥俄我们自己的工厂做，成本 8 美元。在地球另一边一家工厂做，成本 3 美元。\n\n你要是我，你怎么选？\n\n我是一家美国服装公司的高管。公司在亏钱，董事会盯着我。如果我把生产搬出去，每件衣服省 5 美元，公司活下来，美国家庭买衣服更便宜。代价是：俄亥俄那座工厂，会关。几百个人，会失业。\n\n我不觉得自己是坏人。我觉得我在做一件让千千万万人买得起东西的事。\n\n这一遍，你坐进我这个位置。你手里握着的，不只是一家公司的命，还有两群你大概永远不会见面的人——一群因为你买得更便宜，一群因为你丢了饭碗。',
        en: 'In 1994, two quotes lay on my desk.\n\nThe same T-shirt, made in our own factory in Ohio, cost 8 dollars. Made in a factory on the other side of the world, it cost 3.\n\nIf you were me, how would you choose?\n\nI am an executive at an American clothing company. The company was losing money, and the board was watching me. If I moved production out, I would save 5 dollars a shirt, the company would survive, and American families would pay less for clothes. The price: that factory in Ohio would close. Hundreds of people would lose their jobs.\n\nI do not think of myself as a villain. I think I am doing something that lets millions of people afford things.\n\nThis pass puts you in my seat. What you hold is not only the life of one company, but two groups of people you will most likely never meet, one who pays less because of you, one who loses a livelihood because of you.',
      },
      deliverGoal: 'N1 hook — 1994 两张报价单 (俄亥俄 8 美元 vs 地球另一边 3 美元) + CEO 自我介绍 (公司亏钱/搬出去省钱但俄亥俄工厂关) + 不觉得自己是坏人是让人买得起 + 这一遍视角 (握着两群永不见面的人)',
      engagementHook: '同一件 T 恤，搬到地球另一边做能省 5 美元，但要关掉一座美国工厂。如果你是我，你怎么选？',
      expectsRealAnswer: false,
    },
    {
      id: 'ceo-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说清楚，「把工厂搬到地球另一边」这件事，为什么我这一代人忽然做得到了。\n\n以前做不到。一件商品要漂洋过海运过来，运费贵、装卸慢、容易碎容易丢，搬到远处生产根本不划算。\n\n变化发生在 1956 年。一个叫 Malcom McLean（麦克莱恩）的美国卡车司机出身的人，想出一个简单到不可思议的主意：把货物装进统一规格的大铁箱子里（这就是集装箱，container），整箱吊上船、吊下船、直接放上卡车，中间不用一件件搬。\n\n就这一个铁箱子，把跨洋运一件货的成本砍掉了一大截。从此，「在哪里生产」和「在哪里卖」可以彻底分开。\n\n你在加州买的东西，可以在一万公里外做。\n\n我做的所有决定，都是踩在这个铁箱子上的。没有它，我桌上那两张报价单，根本不会出现。',
        en: 'First, let me make clear why my generation could suddenly do this thing, "move a factory to the other side of the world."\n\nIt used to be impossible. To ship a good across the ocean was expensive, slow to load and unload, easy to break and lose. Producing it somewhere far away simply did not pay.\n\nThe change came in 1956. A former American truck driver named Malcom McLean had an idea so simple it was almost unbelievable: pack goods into a steel box of a standard size, the container, hoist the whole box onto the ship, off the ship, straight onto a truck, with no handling piece by piece in between.\n\nThat one steel box cut the cost of shipping a good across an ocean by a huge margin. From then on, "where you produce" and "where you sell" could be fully separated.\n\nWhat you buy in California can be made ten thousand kilometers away.\n\nEvery decision I made stands on that steel box. Without it, the two quotes on my desk would never have existed.',
      },
      deliverGoal: 'N2 setup — 为什么以前搬不到远处 (运费贵装卸慢) + 1956 Malcom McLean 集装箱 (统一铁箱整箱吊运不用一件件搬) → 跨洋运费暴跌 → 生产和销售彻底分开 + 我所有决定踩在这个铁箱子上',
      engagementHook: '一个卡车司机出身的人发明的大铁箱子，让「在哪做」和「在哪卖」彻底分开了。你身边有哪件东西，是一万公里外做的？',
      expectsRealAnswer: false,
    },
    {
      id: 'ceo-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '光有铁箱子还不够。我还需要一个允许货物自由跨国流动的世界。\n\n二战刚打完，1944 年，各国在美国一个叫 Bretton Woods（布雷顿森林）的地方开会，立下了一套战后经济规矩：建了 IMF（国际货币基金组织）和 World Bank（世界银行）。几年后，1947 年，各国又签了一个降低关税、鼓励自由贸易的协议——GATT（关税与贸易总协定）。到 1995 年，GATT 升级成一个正式机构：WTO（世界贸易组织）。\n\n这些名字听着枯燥，但对我来说，它们意味着一件具体的事：各国一层层拆掉贸易壁垒，我把工厂搬到哪儿、把货卖到哪儿，门槛越来越低。\n\n再加上一件大事：1991 年，苏联解体了。冷战结束，原来被两大阵营隔开的市场，第一次连成一片。半个原来够不着的地球，向我的生意打开了。\n\n铁箱子 + 自由贸易规则 + 苏联倒下——这三样凑齐，我这代生意人，第一次真的可以「全球」地做生意。',
        en: 'The steel box alone was not enough. I also needed a world that let goods flow freely across borders.\n\nRight after the Second World War, in 1944, nations met at a place in America called Bretton Woods and laid down a set of postwar economic rules: they built the IMF, the International Monetary Fund, and the World Bank. A few years later, in 1947, nations signed a separate agreement to lower tariffs and encourage free trade, called GATT. In 1995 GATT was upgraded into a formal body: the WTO, the World Trade Organization.\n\nThese names sound dry, but to me they meant one concrete thing: layer by layer, nations took down their trade barriers, and the threshold for moving my factory anywhere and selling my goods anywhere kept dropping.\n\nThen one more huge thing: in 1991 the Soviet Union collapsed. The Cold War ended, and markets long walled off into two camps were stitched into one for the first time. Half a planet I could not reach before opened up to my business.\n\nThe steel box, the rules of free trade, and the fall of the Soviet Union, with those three together, my generation of businessmen could, for the first time, truly do business "globally."',
      },
      deliverGoal: 'N3 setup — 1944 Bretton Woods (IMF/World Bank + GATT 降关税) → 1995 WTO + 贸易壁垒层层拆 + 1991 苏联解体冷战结束市场连成一片 + 铁箱子+自由贸易+苏联倒下三样凑齐 → 第一次真能全球做生意 (跨 cold-war Topic 锚)',
      engagementHook: '集装箱、自由贸易规则、再加苏联倒下——三样凑齐，「全球」做生意第一次成真。一个世界要变成「一个大市场」，需要凑齐哪些条件？',
      expectsRealAnswer: false,
    },
    {
      id: 'ceo-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你坐在会议室，墙上挂着一张世界地图。你的工作，是给公司的每一件商品，规划一条最省钱的旅程。\n\n棉花在一个国家种，纱线在另一个国家纺，布在第三个国家织，衣服在第四个国家缝，最后运回美国卖。每一段，都挑成本最低的地方。这就是「供应链」——一件衣服出生在十个国家。\n\n你把美国俄亥俄那家工厂，从地图上划掉。生产，搬到工资只有美国零头的地方去。\n\n报表很诚实：成本降了，利润涨了，股价涨了，董事会满意，美国超市货架上你家的衣服更便宜了。\n\n可你心里清楚：划掉地图上那个点，不是划掉一个数字。那是几百个真人的饭碗。\n\n这一刻你得想：你做的「让东西更便宜」，是在创造价值，还是只是把一群人的工作，转移到了另一群更便宜的人头上？这两件事，分得清吗？',
        en: 'Now you are me.\n\nYou sit in a meeting room, a map of the world on the wall. Your job is to plan, for every product the company makes, the cheapest possible journey.\n\nCotton grown in one country, spun into yarn in another, woven into cloth in a third, sewn into clothing in a fourth, then shipped back to America to sell. For each leg, you pick the place with the lowest cost. This is the "supply chain," a single shirt born in ten countries.\n\nYou cross the Ohio factory off the map. Production moves to a place where wages are a fraction of America\'s.\n\nThe numbers are honest: costs fall, profits rise, the share price climbs, the board is pleased, and your company\'s clothes sit cheaper on American supermarket shelves.\n\nBut you know in your gut: crossing that point off the map is not crossing off a number. It is hundreds of real people\'s livelihoods.\n\nSo here you must ask yourself: is your "making things cheaper" creating value, or just shifting one group\'s work onto another, cheaper group? Can those two things even be told apart?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 会议室世界地图规划供应链 (棉花/纱/布/缝在四国一件衣服出生在十个国家) + 划掉俄亥俄工厂搬到工资零头地方 + 报表诚实 (成本降利润涨股价涨货架更便宜) + 自我拷问: 创造价值还是把工作转移到更便宜的人头上',
      engagementHook: '你在地图上划掉一个点——那不是一个数字，是几百个真人的饭碗。「让东西更便宜」是在创造价值，还是只是把工作转给更便宜的人？你分得清吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ceo-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得替自己说句公道话——不是辩护，是让你看见全貌。\n\n我搬走工厂，确实让俄亥俄一些人失业了。但同一个决定，在地球另一边，让一些人第一次有了工厂的工作。\n\n那些工资，按美国标准低得吓人。但对一个原本在乡下种地、一年到头看天吃饭、收成不好就挨饿的人来说，进厂拿一份稳定的现金工资，可能是她家几代人头一回有的东西。\n\n这不是我编出来安慰自己的故事。后来的数据是真的：1990 年，全世界大约 36% 的人活在极端贫困里；到 2010 年代，这个数字降到了大约 9%。几亿人，靠着进入这套全球生产体系，爬出了赤贫。\n\n所以我做的事，到底是什么？\n\n我让俄亥俄的工人丢了工作，又让另一片大陆的农民进了工厂；我让美国家庭买得更便宜，又让几亿人脱了贫，也让一些工厂主赚得盆满钵满。同一个决定，同时干了这么多件方向相反的事。\n\n（那个进厂的人，她过的到底是什么日子，你换到她那一遍，会亲眼看见。）',
        en: 'Let me say something fair for myself, not a defense, but so you see the whole picture.\n\nMoving the factory did put some people in Ohio out of work. But the same decision, on the other side of the world, gave some people a factory job for the first time.\n\nThose wages, by American standards, are frighteningly low. But to someone who used to farm in the countryside, living year after year at the mercy of the weather, going hungry when the harvest failed, a steady cash wage in a factory may be the first such thing her family has had in generations.\n\nThis is not a story I made up to comfort myself. The later figures are real: in 1990, about 36 percent of the world lived in extreme poverty; by the 2010s that number had fallen to about 9 percent. Hundreds of millions of people climbed out of destitution by entering this global production system.\n\nSo what is it, exactly, that I did?\n\nI cost Ohio workers their jobs and put farmers on another continent into factories; I made American families pay less and lifted hundreds of millions out of poverty, and made some factory owners very rich. One decision, doing this many opposite things at once.\n\n(What kind of life the woman who entered the factory actually lived, you will see for yourself when you switch to her pass.)',
      },
      deliverGoal: 'N5 story — 搬工厂让俄亥俄失业但地球另一边有了工厂工作 + 对乡下看天吃饭的人稳定现金工资是几代头一回 + 真实数据 (极端贫困 ~36% 1990 → ~9% 2010s/几亿人脱贫) + 同一决定干了方向相反的多件事 + 桥到南方女工 lens',
      engagementHook: '同一个决定：让俄亥俄人失业，让另一片大陆的农民进了厂，让美国家庭买得便宜，让几亿人脱了贫。一个决定能同时干这么多方向相反的事——你怎么给它打分？',
      expectsRealAnswer: false,
    },
    {
      id: 'ceo-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我把镜头停在一件具体的东西上：一件 T 恤。或者你手里那部手机。\n\n这件 T 恤，是我设计了它的旅程。我在会议室里，把它的出生地从俄亥俄，挪到了一万公里外。我让它便宜了。\n\n而这件 T 恤经过的三双手，是三个永远不会坐到一起的人：\n\n第一双手是我——我没碰过棉花，没踩过缝纫机，我只是在地图上画线，决定它在哪里出生。决定一下，成本砍半，股价上涨。\n\n第二双手，是俄亥俄那家关掉的工厂里、上一个做这种衣服的工人。现在工厂没了，他去超市货架上，买这件更便宜的、别人做的同款 T 恤——他既是我省下成本的受害者，又是我压低物价的受益者。\n\n第三双手，是真正缝出这件 T 恤的人。一个在地球另一边、每天对着缝纫机十几个小时的年轻女工。她拿到的钱，是那第二双手的零头。\n\n同一件 T 恤：一个人设计了它的旅程，一个人因它丢了工作又因它买得起，一个人用双手做出了它。全球化，就是这三双手，被一件三美元的 T 恤，拴在了一起。',
        en: 'Let me hold the lens on one concrete thing: a T-shirt. Or the phone in your hand.\n\nThis T-shirt, I designed its journey. In a meeting room I moved its birthplace from Ohio to ten thousand kilometers away. I made it cheaper.\n\nAnd the three pairs of hands this T-shirt passes through belong to three people who will never sit together:\n\nThe first pair is mine. I never touched the cotton, never worked the sewing machine. I only drew lines on a map, deciding where it would be born. One decision, costs halved, the share price up.\n\nThe second pair belongs to the worker in that closed Ohio factory who used to make this kind of shirt. Now the factory is gone, and he goes to the supermarket shelf and buys this cheaper version of the same shirt, made by someone else. He is both a victim of the cost I cut and a beneficiary of the prices I lowered.\n\nThe third pair belongs to the person who actually sewed this T-shirt. A young woman on the other side of the world, bent over a sewing machine more than ten hours a day. What she is paid is a fraction of what the second pair earns.\n\nThe same T-shirt: one person designed its journey, one lost a job to it and can afford it because of it, one made it with her hands. Globalization is these three pairs of hands, tied together by a three-dollar T-shirt.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 一件 T 恤/手机 三双手 (CEO 画地图设计旅程 / rust-belt 工人丢工作又去买便宜同款既受害又受益 / 南方女工每天十几小时缝出它拿零头) + 全球化=三双手被一件三美元 T 恤拴在一起 (跨 3 lens 对位)',
      engagementHook: '一件三美元的 T 恤，拴着三双永远不会坐到一起的手：一个设计它的旅程，一个因它丢工作又因它买得起，一个用双手做出它。你身上穿的，是谁的三双手做的？',
      expectsRealAnswer: false,
    },
    {
      id: 'ceo-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得讲一个我宁愿不讲的日子：2013 年 4 月 24 日。\n\n在孟加拉国首都达卡郊外，一栋叫 Rana Plaza（拉纳广场）的八层楼塌了。楼里挤着好几家制衣厂，给一堆西方品牌做衣服。前一天，墙上已经裂出了大口子，警告过有危险，但工人被叫回去继续上工——订单不能停。\n\n大楼塌下来，压死了大约 1,134 个人，大多是年轻女工。这是制衣业历史上最惨的一次事故。\n\n我得诚实：那种为了赶我们这种公司的订单、为了把成本压到最低而忽视安全的工厂，正是我设计的这套「找最便宜的地方生产」的体系，一路逼出来的。\n\n我在会议室里只看到一个数字：每件衣服省 5 美元。我看不到，省下的这 5 美元，是从哪里挤出来的——是从加班费里、从消防通道里、从那堵裂了缝还不让停工的墙里挤出来的。\n\n便宜，从来不是凭空便宜的。总有人，在我看不见的地方，替这份便宜付了账。',
        en: 'I have to tell you about a day I would rather not: 24 April 2013.\n\nOn the outskirts of Dhaka, the capital of Bangladesh, an eight-story building called Rana Plaza collapsed. It was packed with several garment factories making clothes for a crowd of Western brands. The day before, large cracks had opened in the walls and a warning of danger had been raised, but the workers were ordered back inside to keep working. The orders could not stop.\n\nThe building came down and crushed about 1,134 people, most of them young women workers. It was the deadliest accident in the history of the garment industry.\n\nI have to be honest: a factory that ignores safety to rush the orders of companies like mine, to squeeze cost to the lowest, is exactly what the system I designed, "find the cheapest place to produce," pushed into being.\n\nIn the meeting room I saw only one number: 5 dollars saved per shirt. I could not see where that 5 dollars was squeezed from, from overtime pay, from fire exits, from that cracked wall they would not let anyone stop working beneath.\n\nCheap is never cheap out of nowhere. Somewhere I cannot see, someone always pays the bill for that cheapness.',
      },
      deliverGoal: 'N7 story — 2013.4.24 Rana Plaza (达卡郊外八层楼塌/挤着制衣厂给西方品牌做衣服/前一天墙裂警告却被叫回上工/约 1,134 死多是年轻女工/制衣业最惨事故) + CEO 诚实承认这套找最便宜地方的体系逼出来 + 便宜从来不凭空便宜总有人替它付账',
      engagementHook: '我在会议室只看到「每件省 5 美元」，看不到这 5 美元是从加班费、消防通道、那堵裂缝的墙里挤出来的。便宜从来不凭空便宜——谁替这份便宜付了账？',
      expectsRealAnswer: false,
    },
    {
      id: 'ceo-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在我得讲讲那个改变了整盘棋的国家：中国。\n\n2001 年，中国加入了 WTO（世界贸易组织）。这是全球化历史上最大的一步棋。\n\n对我这样的人来说，中国意味着一件事：一个有大量人口愿意进厂、又有政府全力修桥铺路建港口的地方。全世界的工厂订单像潮水一样涌进去。短短二十年，中国成了「世界工厂」——你家里的东西，翻过来看标签，一大半写着「Made in China」。\n\n这件事的另一面，是个惊人的数字：从 1980 年代到 2010 年代，中国大约有 8 亿人脱离了极端贫困。这是人类历史上规模最大、速度最快的一次脱贫——而它和这套全球生产体系紧紧绑在一起。\n\n当然，这份增长也有代价：无数中国工人同样经历过长工时、低工资、远离家乡进城打工的辛苦。\n\n中国证明了：全球化这套体系，真的能让一个穷国在一代人的时间里翻身。可它也提醒你——翻身的红利和翻身的辛苦，常常落在同一群人身上。',
        en: 'Now I have to talk about the country that changed the whole game: China.\n\nIn 2001 China joined the WTO, the World Trade Organization. It was the single biggest move in the history of globalization.\n\nTo someone like me, China meant one thing: a place with a vast population willing to enter factories, and a government putting everything into building bridges, roads, and ports. All at once, the world\'s factory orders poured in like a tide. In just twenty years China became the "factory of the world." Turn over the things in your home and read the label, and more than half say "Made in China."\n\nThe other face of this is a staggering number: from the 1980s to the 2010s, about 800 million people in China rose out of extreme poverty. It was the largest and fastest reduction of poverty in human history, and it was tightly bound to this global production system.\n\nOf course, that growth had its own price: countless Chinese workers also lived through long hours, low wages, and the hardship of leaving home to work in the cities. Winners and costs, again, bound together.\n\nChina proved one thing: this system of globalization really can let a poor country turn its fortunes around within a single generation. But it also reminds you, the dividend of that turnaround and the hardship of it often land on the very same people.',
      },
      deliverGoal: 'N8 story (§8 同时代中国) — 2001 中国入世全球化最大一步 + 大量人口愿进厂+政府修桥铺路建港口 → 世界工厂/Made in China + 1980s-2010s 约 8 亿人脱贫人类史最大最快 + 但也有代价 (长工时低工资进城辛苦) + 翻身红利和辛苦常落同一群人',
      engagementHook: '中国靠这套体系，让约 8 亿人在一代人时间里脱了贫——人类史上最大的一次。可翻身的红利和翻身的辛苦，常常落在同一群人身上。这算不算一笔划算的账？',
      expectsRealAnswer: false,
    },
    {
      id: 'ceo-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉到今天，看看我这套体系，给世界留下了什么。\n\n好的一面：你现在能用很便宜的钱，买到很多东西——衣服、手机、家电。一个普通家庭今天能买到的东西，比我父母那代人多得多。几亿人脱了贫。全世界被一条条供应链织成了一张网。\n\n坏的一面也很硬：在富国，像俄亥俄那样被掏空的工业城市，叫「锈带」（Rust Belt）——工厂走了，工作没了，整座城市慢慢凋零，几代人陷在里面出不来。在穷国，廉价劳动撑起了出口，可血汗工厂、Rana Plaza 那样的悲剧，也是这条网的一部分。\n\n还有一件事：全球化让财富涨了，但财富涨的钱，没有平均分。有人赚得盆满钵满，有人连工作都丢了。国与国之间、人与人之间的不平等，在很多地方反而拉大了。\n\n我设计这套体系的时候，满脑子只有一个词：效率。我没想过——效率最高的那条路，会把谁碾在轮子底下。',
        en: 'Pull the lens to today, and see what my system left the world.\n\nThe good side: you can now buy a great deal for very little, clothes, phones, appliances. An ordinary family today can afford far more than my parents\' generation. Hundreds of millions rose out of poverty. The whole world was woven into one net by supply chains.\n\nThe bad side is just as hard: in rich countries, hollowed-out industrial cities like Ohio\'s are called the "Rust Belt," the factories gone, the jobs gone, whole cities slowly withering, generations trapped inside with no way out. In poor countries, cheap labor holds up the exports, but sweatshops and tragedies like Rana Plaza are part of this net too.\n\nAnd one more thing: globalization made wealth grow, but the new wealth was not shared evenly. Some grew very rich, some lost their jobs entirely. Inequality, between nations and between people, in many places actually widened.\n\nWhen I designed this system, one word filled my head: efficiency. I never thought about who the most efficient road would crush beneath its wheels.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 体系给世界留下什么 (好: 便宜商品/几亿脱贫/供应链织成网; 坏: 富国 Rust Belt 锈带工厂走城市凋零 + 穷国血汗工厂 Rana Plaza + 不平等拉大) + CEO 满脑子只有效率没想过碾了谁',
      engagementHook: '我满脑子只有「效率」，没想过效率最高的那条路会把谁碾在轮子底下。「让世界更高效」和「让世界更公平」，能是同一件事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ceo-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是创造繁荣的人。我让一件衣服便宜一半，让普通家庭买得起从前买不起的东西；我把工厂带到穷国，让几亿农民第一次有了现金工资，爬出了赤贫。我不是慈善家，但我做生意的同时，确实把财富的蛋糕做大了，受益的人数以亿计。\n\n另一种说法：我是制造受害者的人。同一双手，掏空了俄亥俄，留下一座锈带死城；逼出了 Rana Plaza 那种压死上千女工的血汗工厂；把财富做大了，却让它越分越不均。我嘴里的「效率」，是另一些人嘴里的「我的饭碗没了」「我妹妹被压在楼里」。\n\n这两边不是「功劳加副作用」。是同一套供应链的两面——同一个让世界更便宜的决定，同时创造了繁荣，也制造了受害者。得益的人和付代价的人，常常根本不是同一个人。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a maker of prosperity. I cut a garment\'s price in half and let ordinary families afford what they once could not; I brought factories to poor countries and gave hundreds of millions of farmers their first cash wage, climbing out of destitution. I am no philanthropist, but in doing business I genuinely grew the pie of wealth, and the people who benefited number in the hundreds of millions.\n\nThe other view: I was a maker of victims. The same hands hollowed out Ohio and left a dead Rust Belt town; pushed into being the sweatshops like Rana Plaza that crushed a thousand women workers; grew the pie of wealth while sharing it ever more unevenly. The "efficiency" in my mouth is, in others\' mouths, "my livelihood is gone," "my sister was crushed under that building."\n\nThese are not "credit plus side effects." They are two faces of the same supply chain. The same decision to make the world cheaper created prosperity and produced victims at once. The people who benefited and the people who paid the price are often not the same people at all.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (创造繁荣/衣服便宜一半/几亿农民现金工资脱贫/做大蛋糕) / 另一种说法 (制造受害者/掏空俄亥俄锈带死城/Rana Plaza 血汗工厂/财富越分越不均) / 同一套供应链两面/得益和付代价常不是同一人 / 想 30 秒',
      engagementHook: '创造繁荣的人，和制造受害者的人——是同一双手。我的「效率」是别人的「饭碗没了」。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'ceo-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一套体系？\n\n它让全世界几亿人脱了贫，也掏空了一座座工业城市；它让你买得起从前买不起的东西，也把上千个女工压在了一栋裂了缝还不让停工的楼里。繁荣和代价，不是两份分开的账，是同一条供应链的同一笔交易。把它们放在同一个天平上，你怎么称？\n\n再想一步。看看你身上穿的、手里拿的——你的鞋、你的手机、你的书包。翻过来看看标签：它在哪里做的？\n\n那件东西能这么便宜，背后是谁让它便宜的？是哪一双你永远不会见到的手，替你省下了这笔钱？\n\n你不用为此内疚——你改变不了整套体系。但你可以选择：是从此假装那双手不存在，还是至少，记得它在那儿？',
        en: 'Having walked my whole life, how would you judge a system like this?\n\nIt lifted hundreds of millions out of poverty and hollowed out one industrial city after another; it let you afford what you once could not, and crushed a thousand women workers under a cracked building they were not allowed to stop working in. Prosperity and price are not two separate accounts, but the same transaction on the same supply chain. Put them on the same scale. How do you weigh them?\n\nThen take one more step. Look at what you are wearing, what you are holding, your shoes, your phone, your backpack. Turn it over and read the label: where was it made?\n\nFor that thing to be this cheap, who made it cheap? Which pair of hands you will never meet saved you this money?\n\nYou need not feel guilty, you cannot change the whole system. But you can choose: to pretend from now on that those hands do not exist, or at least, to remember they are there.',
      },
      deliverGoal: 'N11 close — 评价体系 (几亿脱贫 vs 掏空工业城市/买得起 vs Rana Plaza 上千女工/繁荣和代价是同一笔交易同一天平) + transfer「看你身上穿的手里拿的翻标签在哪做/谁让它便宜/哪双永不见的手替你省钱」+ 你会假装那双手不存在还是记得它在那儿',
      engagementHook: '翻过你的鞋、手机、书包看标签——它在哪做的？那件东西能这么便宜，是哪一双你永远不会见到的手替你省下了这笔钱？你会假装那双手不存在，还是记得它在那儿？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Rust Belt Worker (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var rustBeltLens = {
  id: 'rust-belt-worker',
  name: 'A Rust Belt Factory Worker',
  nameCn: '锈带工厂工人',
  role: 'lonely-mediator',
  perspectiveTag: 'offshored-worker',
  icon: '⚙️',
  description: {
    cn: '美国中西部一座小城的工厂工人，在同一家工厂拧了二十年螺丝，养大了两个孩子。1990 年代某一天，工厂贴出告示：生产要搬到地球另一边去，这里关门。他丢了工作，整座城慢慢空掉。可矛盾的是，他自己也去超市买那些更便宜的、别人在远方做的东西。作为工人，全球化抢走了他的饭碗；作为消费者，全球化让他的钱更经花。这一遍让你站在一个被夹在中间的人这里，体会全球化不是「好」或「坏」，而是同一件事，在同一个人身上，又抢又给。',
    en: 'A factory worker in a small city in the American Midwest, who turned the same bolts in the same plant for twenty years and raised two children. One day in the 1990s a notice went up: production was moving to the other side of the world, and this plant would close. He lost his job, and the whole city slowly emptied out. The contradiction is that he too goes to the supermarket and buys the cheaper things made far away by others. As a worker, globalization took his livelihood; as a consumer, it made his money stretch further. This pass puts you where a person caught in the middle stands, to feel that globalization is not "good" or "bad" but the same thing, on the same person, both taking and giving.',
  },
  storyboard: [
    {
      id: 'rb-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '工厂门口贴了一张告示。我站在那儿，读了三遍，才看懂。\n\n上面写着：生产将转移到海外，本厂将于年底关闭。\n\n我在这家工厂干了二十年。同一条流水线，同一个工位，我拧了二十年的螺丝。我用这份工资，买了房，养大了两个孩子。\n\n现在，一张告示，把这一切划掉了。\n\n我是美国中西部一座小城的工厂工人。我不懂什么叫「全球化」，我只知道：地球另一边有个我永远见不到的人，愿意用我五分之一的工资，做我做的活。于是公司选了他，不选我。\n\n这一遍，你站在我这儿。你会发现一件最别扭的事：抢走我饭碗的那套东西，跟让我买得起便宜货的那套东西，是同一套东西。我恨它，可我也在用它。',
        en: 'A notice was taped to the factory door. I stood there and read it three times before I understood.\n\nIt said: production will be moved overseas, and this plant will close at the end of the year.\n\nI worked in this factory for twenty years. The same line, the same station, I turned the same bolts for twenty years. On that wage I bought a house and raised two children.\n\nNow one notice crosses all of it out.\n\nI am a factory worker in a small Midwestern city. I do not know what "globalization" means. I only know this: somewhere on the other side of the world, a person I will never meet is willing to do my work for a fifth of my wage. So the company chose him, not me.\n\nThis pass, you stand where I stand. You will find the most awkward thing: the same thing that took my livelihood is the same thing that lets me afford cheap goods. I hate it, and I am also using it.',
      },
      deliverGoal: 'N1 hook — 工厂门口告示 (生产转海外年底关闭) + 工人自我介绍 (同一工厂二十年拧螺丝/买房养两个孩子) + 地球另一边的人用五分之一工资做我的活 + 这一遍视角 (抢饭碗的和让我买便宜货的是同一套东西/我恨它也在用它)',
      engagementHook: '抢走我饭碗的那套东西，跟让我买得起便宜货的那套东西，是同一套东西——我恨它，可我也在用它。这种又恨又离不开的感觉，你懂吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说说我们这座城，你才懂关一家工厂意味着什么。\n\n我们这种中西部小城，整座城是围着工厂转的。工厂发工资，工人花钱：街角的餐馆、五金店、学校、教堂、棒球场——全靠工厂的工资养着。我父亲在这家厂干过，我在这家厂干，本来以为我儿子也会进这家厂。\n\n这叫一座「工厂城」。它的命，跟那座工厂绑在一起。\n\n工厂一关，不是几百个人失业那么简单。是整座城的血，被抽干了。\n\n餐馆没人吃饭，关了。五金店没生意，关了。年轻人留不住，走了。房子卖不掉，空了。剩下的人，越来越老，越来越穷。\n\n这种城，后来有个名字，叫「锈带」（Rust Belt）——曾经是美国工业的心脏，后来一座座生锈、凋零。\n\n我不是一个人失业。我是眼睁睁看着我从小长大的整座城，慢慢死掉。',
        en: 'Let me tell you about our city first, so you understand what closing one factory means.\n\nA small Midwestern city like ours turns entirely around the factory. The factory pays wages, the workers spend: the diner on the corner, the hardware store, the school, the church, the baseball field, all fed by the factory\'s wages. My father worked at this plant, I worked at this plant, and I thought my son would work at this plant too.\n\nThis is a "factory town." Its life is tied to that one factory.\n\nWhen the factory closes, it is not as simple as a few hundred people losing jobs. It is the blood of the whole city drained out.\n\nNo one eats at the diner; it closes. No business at the hardware store; it closes. The young cannot be kept; they leave. The houses will not sell; they empty. Those who remain grow older and poorer.\n\nThis kind of city later got a name, the "Rust Belt," once the heart of American industry, then rusting and withering, one town after another.\n\nI did not lose a job alone. I watched the whole city I grew up in slowly die.',
      },
      deliverGoal: 'N2 setup — 工厂城整座城围着工厂转 (工资养餐馆五金店学校教堂棒球场/父子三代同厂) + 工厂一关不是几百人失业是整座城血抽干 (餐馆五金店关/年轻人走/房子空) + Rust Belt 锈带 (曾是工业心脏后凋零) + 眼睁睁看城死掉',
      engagementHook: '工厂一关，不是几百个人失业——是整座城的血被抽干。餐馆关、年轻人走、房子空。一座城的命，能不能不押在一家工厂身上？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我后来才弄明白，为什么公司能这么干。\n\n以前，一家美国公司想省钱，办法不多。把工厂搬到外国？运费贵得离谱，外国又有高高的关税挡着，搬过去根本不划算。所以公司只能在本地办厂，雇我们这些本地工人，给我们一份养得起家的工资。\n\n后来，两件事变了。\n\n第一，运货变得极便宜了——靠的是那种统一规格的大铁箱子，集装箱。一整箱货吊上船，跨过太平洋，成本低到可以忽略。\n\n第二，各国签了一堆自由贸易的协议，把关税一层层拆掉。1994 年美国、加拿大、墨西哥签了 NAFTA（北美自由贸易协定）；1995 年成立了 WTO（世界贸易组织）。墙拆了，门开了。\n\n这两件事一凑齐，公司忽然算明白了：与其给我一小时 20 美元，不如把活搬到一小时 1 美元的地方去。\n\n我不恨那个一小时拿 1 美元的人。他也是要养家的。我恨的是这套让我们俩，被逼着比谁更便宜的规矩。',
        en: 'Only later did I work out why the company could do this.\n\nBefore, an American company that wanted to save money had few options. Move the factory to a foreign country? Shipping was absurdly expensive, foreign tariffs stood like high walls, and moving simply did not pay. So the company had to build its plant locally, hire local workers like us, and pay us a wage a family could live on.\n\nThen two things changed.\n\nFirst, shipping became extremely cheap, thanks to that steel box of a standard size, the container. A whole box of goods hoisted onto a ship, across the Pacific, at a cost low enough to ignore.\n\nSecond, nations signed a pile of free-trade agreements and took the tariffs down layer by layer. In 1994 the United States, Canada, and Mexico signed NAFTA, the North American Free Trade Agreement; in 1995 the WTO was founded. The walls came down, the doors opened.\n\nWhen those two things came together, the company suddenly did the math: rather than pay me 20 dollars an hour, move the work to a place that costs 1 dollar an hour.\n\nI do not hate the man earning 1 dollar an hour. He has a family to feed too. What I hate is the set of rules that forced the two of us to compete over who is cheaper.',
      },
      deliverGoal: 'N3 setup — 以前公司搬不出去 (运费贵+外国高关税) 只能本地办厂给养家工资 + 两件事变了 (集装箱运费极便宜 + NAFTA 1994/WTO 1995 拆关税墙倒门开) → 公司算明白 20 美元/小时 vs 1 美元/小时 + 不恨那个工人恨逼我俩比谁便宜的规矩',
      engagementHook: '我不恨地球那头一小时拿 1 美元的人，他也要养家。我恨的是这套逼我俩比谁更便宜的规矩。当两个穷人被逼着互相压价，该恨对方，还是恨规矩？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。工厂关了半年。\n\n你领过失业金，找过新工作。可这座城里，像样的工作差不多都没了。你这双手会拧螺丝、会操作机床——可没人要这门手艺了。\n\n这天，你要给孩子买双新鞋。你走进城边新开的一家大卖场。\n\n货架上，一双鞋，便宜得让你愣住——比你当年厂里同事做的同款，便宜一半还多。翻过来看标签：海外做的。就是抢走你工作的那种地方做的。\n\n你站在货架前，手里捏着那双便宜鞋。\n\n你心里翻江倒海：买它，等于亲手把钱送给那套搞垮你的体系，等于承认「便宜」赢了「你的饭碗」。可你失业了，钱包瘪着，孩子的脚在长——这双便宜鞋，是你现在唯一买得起的。\n\n你买，还是不买？',
        en: 'Now you are me. The factory has been closed for half a year.\n\nYou have drawn unemployment, looked for new work. But in this city the decent jobs are nearly all gone. Your hands can turn bolts, run a machine, but no one wants the trade anymore.\n\nToday you need to buy your child new shoes. You walk into a big-box store newly opened at the edge of town.\n\nOn the shelf, a pair of shoes so cheap it stops you cold, cheaper by more than half than the same model your old coworkers used to make. Turn it over and read the label: made overseas. Made in the kind of place that took your job.\n\nYou stand at the shelf, the cheap shoes in your hand.\n\nYour insides churn: to buy them is to hand money to the very system that broke you, to admit that "cheap" beat "your livelihood." But you are out of work, your wallet is thin, your child\'s feet are growing, and these cheap shoes are the only ones you can afford right now.\n\nDo you buy them, or not?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 工厂关半年 (领失业金找工作/像样工作都没了/会拧螺丝操机床没人要) + 给孩子买鞋进大卖场 + 一双便宜一半的鞋标签写海外做 (抢你工作那种地方) + 内心翻江倒海 (买=送钱给搞垮你的体系/可失业钱瘪孩子脚在长这是唯一买得起的) + 买还是不买',
      engagementHook: '你手里捏着一双便宜一半的鞋，标签写着「海外制造」——就是抢走你工作那种地方做的。买它，等于承认「便宜」赢了「你的饭碗」；可你失业了，这是唯一买得起的。你买，还是不买？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我买了。\n\n我捏着那双便宜鞋走到收银台，付了钱。回家路上，我心里堵得慌。\n\n但你想想——我能怎么办？我失业了。我要是非买「美国制造」的贵鞋，我得多花一倍的钱，那钱我没有。我孩子的脚不会因为我有骨气就停止长大。\n\n这就是我说的那个最别扭的地方。\n\n作为一个工人，全球化抢走了我的饭碗，掏空了我的城。\n作为一个消费者，全球化让我瘪着的钱包，能买更多的东西。\n\n同一套东西，对我又抢又给。我恨它的左手，又离不开它的右手。\n\n更扎心的是：千千万万像我这样失业的工人，每个人都被迫去买便宜货——而我们买得越多，就越是在喂养那套搞垮我们的体系。我们一边被它打倒，一边亲手把它喂大。\n\n这不是「全球化是好是坏」的问题。这是它在同一个人身上，同时是好，又是坏。',
        en: 'I bought them.\n\nI carried the cheap shoes to the register and paid. On the way home, my chest was tight.\n\nBut think about it, what else could I do? I was out of work. To insist on expensive "Made in America" shoes, I would have to spend twice as much, money I did not have. My child\'s feet would not stop growing just because I had my pride.\n\nThis is the most awkward thing I spoke of.\n\nAs a worker, globalization took my livelihood and hollowed out my city.\nAs a consumer, globalization let my thin wallet buy more.\n\nThe same thing, both taking from me and giving to me. I hate its left hand and cannot do without its right.\n\nWhat stings more: tens of millions of workers laid off like me are each forced to buy cheap goods, and the more we buy, the more we feed the very system that broke us. We are knocked down by it and feed it bigger with our own hands.\n\nThis is not a question of "is globalization good or bad." It is good and bad on the same person at the same time.',
      },
      deliverGoal: 'N5 story — 买了便宜鞋心里堵 + 能怎么办 (失业/坚持美国制造贵一倍没钱/孩子脚不会因骨气停长) + 最别扭处: 作为工人全球化抢饭碗作为消费者让钱包买更多 + 同一套东西又抢又给恨左手离不开右手 + 失业工人被迫买便宜货=喂养搞垮自己的体系 + 不是好坏问题是同一人身上同时好又坏',
      engagementHook: '我们这些失业工人被迫去买便宜货——买得越多，越是在喂养那套搞垮我们的体系。一边被它打倒，一边亲手把它喂大。这个死循环，怎么破？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我把镜头停在一件具体的东西上：一件 T 恤。\n\n这件 T 恤，串起了三个永远不会坐到一起的人。\n\n第一个，是某家公司里的高管。他从没碰过缝纫机，他坐在会议室里，在地图上画了一条线，把这件 T 恤的出生地，从我们城，挪到了一万公里外。他省了钱，公司股价涨了。\n\n第二个，就是我。我以前就是在厂里做这种衣服的人。现在工厂没了，我站在货架前，买这件更便宜的、别人做的同款 T 恤。我既是这件 T 恤的受害者（它的便宜，是踩着我的失业来的），又是它的受益者——我瘪着的钱包，靠它才撑得住。\n\n第三个，是真正缝出这件 T 恤的人。地球另一边一个我永远见不到的年轻女工，每天对着缝纫机十几个小时。她拿的钱，是我当年工资的零头。\n\n同一件 T 恤：一个人设计了它的旅程，一个人因它丢了工作又因它买得起，一个人用双手做出它。我夹在最中间——既不是那个画线的人，也不是那个流汗的人。我是那个又被抢、又被喂的人。\n\n（那个缝衣服的女工，她过的是什么日子，你换到她那一遍，会亲眼看见。）',
        en: 'Let me hold the lens on one concrete thing: a T-shirt.\n\nThis T-shirt strings together three people who will never sit at one table.\n\nThe first is an executive at some company. He never touched a sewing machine; he sat in a meeting room and drew a line on a map, moving this T-shirt\'s birthplace from our city to ten thousand kilometers away. He saved money; the share price rose.\n\nThe second is me. I used to be the one making this kind of shirt in the plant. Now the plant is gone, and I stand at the shelf buying this cheaper version of the same shirt, made by someone else. I am both its victim, its cheapness built on my unemployment, and its beneficiary, my thin wallet holding up only because of it.\n\nThe third is the person who actually sewed this T-shirt. A young woman on the other side of the world I will never meet, bent over a sewing machine more than ten hours a day. What she earns is a fraction of what I once made.\n\nThe same T-shirt: one person designed its journey, one lost a job to it and can afford it because of it, one made it with her hands. I am caught right in the middle, neither the one who drew the line nor the one who sweats. I am the one both taken from and fed.\n\n(What kind of life that woman who sews lives, you will see for yourself when you switch to her pass.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 一件 T 恤 三个人 (CEO 画地图省钱股价涨 / 我 rust-belt 工人既受害于它的便宜又受益买得起既被抢又被喂 / 南方女工每天十几小时缝拿零头) + 我夹在最中间不画线不流汗是又被抢又被喂的人 + 桥到南方女工 lens',
      engagementHook: '同一件 T 恤：一个画线，一个流汗，我夹在最中间——既不是设计它的人，也不是做它的人，我是那个又被抢、又被喂的人。中间这个位置，最该怪谁？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想跟你说说，失业这些年，最难的不是没钱。\n\n钱难，但更难的是别的东西。\n\n我这双手，二十年只会一件事：在那条线上，把零件装好。我以这门手艺为荣——我做的东西，结实、耐用、是真东西。可现在，没人要这门手艺了。我成了一个「过时的人」。\n\n你知道一个人最怕什么吗？不是穷。是觉得自己没用了。是早上醒来，不知道今天该去哪儿、该干什么。是孩子问你「爸爸你上班吗」，你不知道怎么回答。\n\n这些年，我们这种城里，有人开始酗酒，有人染上了药瘾，有人再没站起来。这不是因为我们懒——我们干了一辈子活。是因为我们赖以为生、赖以为荣的那个东西，被一张告示拿走了。\n\n那些算账的人，只算得出「省了 5 美元」。他们算不出，一个人失去了「自己有用」这件事，值多少钱。',
        en: 'Let me tell you, in these years out of work, the hardest part was not the lack of money.\n\nMoney was hard, but something else was harder.\n\nThese hands of mine knew one thing for twenty years: on that line, fitting the parts together. I took pride in the trade, what I made was solid, durable, real. But now no one wants the trade. I became a man who is "out of date."\n\nDo you know what a person fears most? Not poverty. It is feeling that you are of no use anymore. It is waking in the morning not knowing where to go, what to do. It is your child asking, "Dad, are you going to work," and not knowing how to answer.\n\nIn these years, in cities like ours, some began to drink, some fell into addiction, some never got back up. It was not because we were lazy, we worked all our lives. It was because the thing we lived on and took pride in was taken away by a single notice.\n\nThe people who do the accounting can only calculate "5 dollars saved." They cannot calculate what it is worth, for a person to lose the sense of being useful.',
      },
      deliverGoal: 'N7 story — 失业最难不是没钱 + 二十年只会一件事 (线上装零件/以手艺为荣做真东西) 没人要了成了过时的人 + 最怕不是穷是觉得自己没用 (不知去哪/孩子问爸爸上班吗答不出) + 酗酒药瘾再没站起来 (不是懒是赖以为生为荣的东西被一张告示拿走) + 算账的算不出失去「自己有用」值多少',
      engagementHook: '算账的人只算得出「省了 5 美元」，算不出一个人失去「自己有用」这件事值多少钱。一个人的尊严，能不能放进供应链的成本表里？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我也得逼自己看公平点——别只盯着我自己的惨。\n\n那个抢走我工作、地球另一边一小时拿 1 美元的人，他不是我的敌人。\n\n对我来说，那份工作是「丢掉的好日子」。可对他来说，那份工作，可能是「翻身的第一步」。他原来在乡下种地，看天吃饭，收成不好就挨饿。进了厂，他第一次有了一份稳定的现金工资。\n\n这是真的，不是我替他美化：从 1990 到 2010 年代，全世界活在极端贫困里的人，比例从大约 36% 掉到了大约 9%。几亿人，尤其是亚洲那些进厂的农民，靠的就是接住了从我们这儿搬走的工作。\n\n所以这笔账，怎么算？\n\n我丢了一份养家的好工作，掉进了贫困。地球那头的他，捡起这份在我看来很差的工作，爬出了赤贫。同一份工作的转移，让一个人往下掉，让另一个人往上爬。\n\n我不甘心。但我没法说他错了。我们俩，都是被同一套体系，推着往相反方向走的人。',
        en: 'I must force myself to be fair too, not just stare at my own ruin.\n\nThe man who took my job, earning 1 dollar an hour on the other side of the world, he is not my enemy.\n\nTo me, that job was "the good days lost." But to him, that job may be "the first step up." He used to farm in the countryside, at the mercy of the weather, going hungry when the harvest failed. In the factory, for the first time, he had a steady cash wage.\n\nThis is true, not me prettifying it for him: from 1990 to the 2010s, the share of the world living in extreme poverty fell from about 36 percent to about 9. Hundreds of millions, especially the farmers in Asia who entered factories, did it by catching the work that moved away from us.\n\nSo how does this account add up?\n\nI lost a good job that fed a family and fell into poverty. He, across the world, picked up this job that looks poor to me and climbed out of destitution. The same transfer of work sent one man down and another up.\n\nI am not reconciled to it. But I cannot say he was wrong. The two of us are both people pushed by the same system in opposite directions.',
      },
      deliverGoal: 'N8 story — 逼自己看公平 + 那个一小时 1 美元的人不是敌人 + 对我是丢掉的好日子对他可能是翻身第一步 (原来乡下看天吃饭进厂第一次稳定现金工资) + 真实数据 (极端贫困 ~36% 1990 → ~9% 2010s/亚洲进厂农民接住搬走的工作) + 同一份工作转移一人往下一人往上 + 我不甘心但没法说他错',
      engagementHook: '同一份工作的转移：让我往下掉，让地球那头的他往上爬。我不甘心，但没法说他错了——我们都是被同一套体系推着往相反方向走的人。这笔账，到底该怎么算？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉到今天，看看我们这种城后来怎么样了。\n\n有些城，再也没缓过来。工厂走了，再没回来。剩下的人越来越老，主街上一半的店面钉着木板。这些地方后来在政治上变得很重要——一大批觉得「被全球化抛弃了」的人，开始用选票表达愤怒。这股怒气，至今还在搅动着富国的政治。\n\n也有些人和城，慢慢找到了新活法——转去做服务业、医疗、物流，或者搬去别的城市重新开始。痛是真的痛，但人也不是只会被碾死。\n\n我想让你记住的是：全球化的账本上，有一栏写着「几亿人脱贫」，光彩夺目。但同一本账上，还有一栏，写着像我们这种城——被掏空、被遗忘、几代人困在里面。这一栏，常常不被写进那些「全球化让所有人受益」的漂亮故事里。\n\n全球化没有让所有人受益。它让一些人受益，让另一些人付账。问题永远是：你站在账本的哪一栏？',
        en: 'Pull the lens to today, and see what became of cities like ours.\n\nSome cities never recovered. The factories left and never came back. Those who remain grow older, and half the storefronts on Main Street are boarded up. These places later became important in politics, a great mass of people who felt "abandoned by globalization" began to voice their anger at the ballot box. That anger still stirs the politics of rich countries today.\n\nSome people and cities slowly found new ways to live, turning to services, health care, logistics, or moving to other cities to start again. The pain is real pain, but people are not only crushed to death.\n\nWhat I want you to remember is this: the ledger of globalization has a column that reads "hundreds of millions lifted from poverty," dazzling. But the same ledger has another column, reading cities like ours, hollowed out, forgotten, generations trapped inside. That column is often left out of the pretty stories about "globalization benefits everyone."\n\nGlobalization did not benefit everyone. It benefited some and made others pay. The question is always: which column of the ledger do you stand in?',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 有些城再没缓过来 (工厂走主街钉木板) → 政治上「被全球化抛弃」的人用选票表达愤怒搅动富国政治 + 有些人找到新活法 (服务业医疗物流/搬城重来) + 账本一栏「几亿脱贫」光彩夺目同一本账另一栏被掏空被遗忘的城常被漏掉 + 全球化没让所有人受益让一些人付账',
      engagementHook: '全球化的账本上，一栏写着「几亿人脱贫」，光彩夺目；另一栏写着我们这种被掏空的城，常被漏掉。全球化没有让所有人受益——你站在账本的哪一栏？',
      expectsRealAnswer: false,
    },
    {
      id: 'rb-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么看全球化，两种说法都站得住。\n\n一种说法：全球化是抢。它抢走了我的饭碗，掏空了我的城，让我从一个有手艺、养得起家、活得有尊严的人，变成一个「过时的、没用的人」。它把工作从我手里夺走，送给地球另一边更便宜的人。对像我这样的几千万工人，全球化最真实的样子，就是一张贴在工厂门口的告示。\n\n另一种说法：全球化是给。它让我瘪着的钱包能买更多东西，让我孩子穿得上买得起的鞋。它让地球另一边几亿农民第一次有了工厂工作，爬出了赤贫。它把财富的蛋糕做大了——只是没分到我这一块。\n\n这两边不是「我吃亏、别人占便宜」那么简单。它在同一个人，也就是我，身上同时又抢又给。我恨它的左手，又攥着它的右手。它既毁了我，又喂了我。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge globalization, having walked my whole life, both views stand.\n\nOne view: globalization is a taking. It took my livelihood, hollowed out my city, turned me from a man with a trade who could feed a family and live with dignity into a man "out of date and of no use." It tore the work from my hands and gave it to cheaper people on the other side of the world. For tens of millions of workers like me, the truest face of globalization is a notice taped to a factory door.\n\nThe other view: globalization is a giving. It let my thin wallet buy more, let my child wear shoes I could afford. It gave hundreds of millions of farmers across the world their first factory job and climbed them out of destitution. It grew the pie of wealth, only my slice was not in it.\n\nThese two are not as simple as "I lose, others gain." On the same person, on me, it both takes and gives at once. I hate its left hand and grip its right. It ruined me and it fed me.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (全球化是抢/抢饭碗掏空城/从有手艺有尊严变过时没用/工作夺走送给更便宜的人/最真实是工厂门口告示) / 另一种说法 (全球化是给/钱包买更多孩子穿得起鞋/几亿农民第一次工厂工作脱贫/做大蛋糕只是没分我这块) / 同一人身上又抢又给恨左手攥右手 / 想 30 秒',
      engagementHook: '全球化是抢，还是给？它在我同一个人身上，同时又抢又给——我恨它的左手，又攥着它的右手。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'rb-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价全球化对我这样一个人做的事？\n\n它毁了我，也喂了我；它抢走我的饭碗，又让我买得起鞋；它把我推下去，又把地球那头的人托上来。这不是「好」或「坏」的二选一，是同一件事，在同一个人身上，又抢又给。把它放在天平上，你怎么称？\n\n不过先记住：你这一遍，只听了夹在中间的我。那个画线把工厂搬走的高管，那个在远方缝衣服的女工，各有各的说法。换个视角再走一遍，你会听见高管怎么算他的账，会看见那个女工的工厂里，发生了什么。\n\n再想一步：你身边有没有这样的事——一个变化，对你是好事，对另一个你认识的人却是坏事？一次班级重新分组、一项新规定、一笔家里的开销变化——同一件事，有人得益，有人吃亏。\n\n那时候你会怎么做？你会只盯着对你好的那一面，还是会停一下，去看看那个因为同一件事而吃了亏的人？',
        en: 'Having walked my whole life, how would you judge what globalization did to a person like me?\n\nIt ruined me and it fed me; it took my livelihood and let me afford shoes; it pushed me down and lifted the man across the world up. This is not a choice between "good" and "bad," it is the same thing, on the same person, both taking and giving. Put it on the scale. How do you weigh it?\n\nBut first, remember: this pass, you heard only me, caught in the middle. The executive who drew the line and moved the factory, and the woman who sews clothes far away, each have their own case. Run it again through another lens and you will hear how the executive does his accounting, and see what happens inside that woman\'s factory.\n\nThen take one more step: is there something near you where a change is good for you but bad for someone you know? A class reshuffle, a new rule, a shift in the family\'s spending, the same thing, one gains, one loses.\n\nWhen that happens, what will you do? Will you watch only the side that is good for you, or will you stop a moment to look at the person who lost out from the very same thing?',
      },
      deliverGoal: 'N11 close — 评价全球化对我做的事 (毁了我又喂了我/抢饭碗又让买得起鞋/推我下去又托起地球那头/不是好坏二选一是同一事同一人又抢又给天平) + cross-perspective pointer (只听夹中间的我/高管+女工各有说法换视角再走一遍) + transfer「身边一个变化对你好对别人坏 (班级重组/新规定/家里开销)」+ 只盯对你好的还是停一下去看吃亏的人',
      engagementHook: '你身边有没有这样的事——一个变化，对你是好事，对你认识的另一个人却是坏事？那时候，你会只盯着对你好的那一面，还是停一下，去看看那个因为同一件事吃了亏的人？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Global South Garment Worker (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var garmentWorkerLens = {
  id: 'global-south-garment-worker-receiving-end',
  name: 'A Garment Factory Worker',
  nameCn: '制衣厂女工',
  role: 'receiving-end',
  perspectiveTag: 'made-the-cheap-goods',
  icon: '🧵',
  description: {
    cn: '一个二十岁出头的年轻女子，老家在乡下，靠种地为生，一年到头看天吃饭。她进了城，在一家给西方品牌做衣服的制衣厂里，每天对着缝纫机十几个小时。她的工资，按西方标准低得可怜，可寄回老家，能让弟弟妹妹上学、让爹娘看得起病，这是她家几代人头一回。她做的衣服，挂在你永远不会去的商场里，标着你觉得「真便宜」的价格。这一遍，你站在那个真正用双手做出全球化廉价商品的人这里：是她的双手，让你买得起。',
    en: 'A young woman in her early twenties, from the countryside, where her family farmed and lived year after year at the mercy of the weather. She came to the city and works in a garment factory making clothes for Western brands, bent over a sewing machine more than ten hours a day. Her wage, by Western standards, is pitifully low, yet sent home it lets her younger siblings go to school and her parents see a doctor, the first time in her family in generations. The clothes she makes hang in malls you will never visit, priced at what you think of as "really cheap." This pass puts you where the person stands who actually makes globalization\'s cheap goods with her hands: it is her hands that let you afford them.',
  },
  storyboard: [
    {
      id: 'gw-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '天还没亮，我就坐在缝纫机前了。\n\n一天下来，我的手指要在这台机器上，缝出几百件衣服的某一道工序——也许只是袖口，也许只是领子。同一道线，缝几百遍，缝到晚上灯亮起来。\n\n我做的这些衣服，会被装进大铁箱子，漂洋过海，挂在一个我永远不会去的国家的商场里。那里的人拿起它，看一眼价格，说一句：「真便宜。」\n\n他们不知道是谁缝的。他们不会知道我的名字。\n\n我是一个二十出头的年轻女子，老家在乡下。这一遍，你站在我这儿——站在那个真正用双手，做出你们口中「真便宜」的东西的人这儿。\n\n你买得起，是因为我便宜。这句话，听着刺耳，但它是真的。这一遍，我想让你看清楚：你那件便宜衣服的背后，到底站着一个什么样的人。',
        en: 'Before the sky lightens, I am already at the sewing machine.\n\nOver a day, my fingers must run one step of the work on hundreds of garments, maybe only the cuff, maybe only the collar. The same seam, hundreds of times, until the lights come on at night.\n\nThe clothes I make will be packed into great steel boxes, carried across the ocean, and hung in a mall in a country I will never visit. People there pick one up, glance at the price, and say: "So cheap."\n\nThey do not know who sewed it. They will never know my name.\n\nI am a young woman in my early twenties, from the countryside. This pass, you stand where I stand, where the person stands who actually makes, with her hands, the thing you call "so cheap."\n\nYou can afford it because I am cheap. That sentence is harsh to hear, but it is true. This pass, I want you to see clearly: behind that cheap shirt of yours, what kind of person is standing.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 天没亮坐缝纫机前 + 一天缝几百件某一道工序 (袖口/领子) 缝到晚上 + 衣服装铁箱漂洋过海挂我永远不会去的商场/那里人说真便宜不知谁缝不知名字 + 二十出头乡下来 + 这一遍站在真正用双手做出真便宜东西的人这儿 + 你买得起因为我便宜 (刺耳但真)',
      engagementHook: '你买得起，是因为我便宜。这句话听着刺耳，但它是真的。你那件便宜衣服背后，站着一个什么样的人——你想过吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说说我为什么会来这家厂，你才懂这份工作对我意味着什么。\n\n我老家在乡下。我们家世世代代种地。种地是什么样的日子？是把命交给老天。雨水好，收成好，全家能吃饱；遇上旱年、涝年，地里颗粒无收，那就得挨饿——真的挨饿，肚子空着睡觉那种。\n\n我们家穷，穷到弟弟妹妹上不起学，爹娘病了不敢去看医生，因为看病的钱，可能就是全家几个月的口粮。\n\n我十几岁就懂了：守着这块地，我这辈子，跟我娘、我奶奶，不会有什么两样。\n\n后来听说，城里开了好多工厂，给外国人做衣服，招人，给现金工资。现金——你懂吗？不是「等收成」，是每个月，实打实，拿到手里的钱。\n\n我收拾了一个小包袱，离开家，进了城。我知道厂里苦。但我更知道，老家那块地，给不了我想要的东西。',
        en: 'Let me tell you why I came to this factory, so you understand what this work means to me.\n\nMy home is in the countryside. My family farmed for generations. What kind of life is farming? It is handing your life to the heavens. Good rain, good harvest, the whole family eats its fill; a year of drought or flood, the fields yield nothing, and then you go hungry, truly hungry, the kind where you sleep with an empty belly.\n\nWe were poor, poor enough that my younger siblings could not afford school, that my parents dared not see a doctor when sick, because the cost of treatment might be the family\'s grain for months.\n\nI understood by my teens: stay tied to this land and my life would be no different from my mother\'s, my grandmother\'s.\n\nThen I heard the city had opened many factories, making clothes for foreigners, hiring, paying a cash wage. Cash, do you understand? Not "wait for the harvest," but every month, real money, in your hand.\n\nI packed a small bundle, left home, and came to the city. I knew the factory would be hard. But I knew better that the land back home could not give me what I wanted.',
      },
      deliverGoal: 'N2 setup — 为什么来这家厂 + 老家乡下世代种地把命交给老天 (雨好吃饱/旱涝挨饿真的空肚子睡) + 穷到弟妹上不起学爹娘病不敢看 + 十几岁懂守着地这辈子跟娘奶奶没两样 + 听说城里厂给外国人做衣服招人给现金工资 (不是等收成是每月实打实) + 收拾包袱进城 (知道厂苦但地给不了想要的)',
      engagementHook: '守着老家那块地，我这辈子跟我娘、我奶奶不会有什么两样。是「现金工资」这三个字，让我收拾包袱离开了家。你能想象，为了一份工作离开家是什么感觉吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我说说厂里真实的日子，不夸大，也不替它遮掩。\n\n我每天上工十几个小时，旺季赶订单的时候更长。车间里又闷又吵，几百台缝纫机一起响。我的工位只够坐下，一坐一整天，腰和肩膀常年疼。中午吃饭的时间很短，去趟厕所都要赶。\n\n工资呢？按你们那边的标准，低得可怜——可能就是你买我缝的那件衣服，付的钱里的一个零头。\n\n这些，都是真的。这就是「廉价劳动」四个字，落在一个具体的人身上，每天的样子。\n\n但我要诚实地说另一半，不然你看不全：就是这份在你看来很差的工作，每个月发到我手里的现金，比我在老家种一年地挣的还多。我能往家里寄钱了。\n\n所以请你别急着可怜我，也别急着替我愤怒。我的日子，比你想的苦，也比你以为的，多一点你想不到的东西。这两样，是同时存在的。',
        en: 'Let me tell you the real days in the factory, without exaggerating and without covering for it.\n\nI work more than ten hours a day, longer in the busy season rushing orders. The floor is stuffy and loud, hundreds of sewing machines roaring together. My station has room only to sit, and I sit all day; my back and shoulders ache the year round. The lunch break is short; even a trip to the toilet must be hurried.\n\nThe wage? By your standards, pitifully low, maybe a fraction of what you pay for the very shirt I sewed.\n\nAll of this is true. This is what the four words "cheap labor" look like, every day, landing on one real person.\n\nBut I must tell you the other half honestly, or you will not see the whole: this job that looks poor to you, the cash it puts in my hand each month, is more than I could earn farming a whole year back home. I can send money home now.\n\nSo do not rush to pity me, and do not rush to be angry for me. My life is harder than you think, and also has a little more in it than you assume. Both of these are true at once.',
      },
      deliverGoal: 'N3 setup — 厂里真实日子不夸大不遮掩 (每天十几小时旺季更长/车间闷吵几百台机器/工位只够坐腰肩常年疼/吃饭短上厕所赶) + 工资低得可怜是你付那件衣服钱的零头 (廉价劳动落在具体人身上每天的样子) + 诚实另一半 (这份差工作每月现金比老家种一年地还多能寄钱回家) + 别急着可怜也别急着愤怒 (比你想的苦也多一点想不到的两样同时存在)',
      engagementHook: '别急着可怜我，也别急着替我愤怒。我的日子比你想的苦，也比你以为的多一点你想不到的东西——这两样，是同时存在的。同一份工作，能不能既是剥削，又是出路？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。又到了发工资的日子。\n\n你拿着这个月的工钱，坐在宿舍的床边，开始算账。\n\n这点钱，按缝这件衣服卖出去的价格算，少得让人心寒——你做出来的东西，挂在远方的商场里，卖你一个月工资的好几倍。你心里清楚：你被便宜地用着。\n\n可你低头再算一遍：这点钱，留下一小份自己吃住，剩下的，全寄回老家。这笔钱，够弟弟妹妹交这学期的学费了。够给爹治那个拖了很久的病了。\n\n你给家里打电话。电话那头，娘的声音是高兴的：妹妹考了班里前几名，弟弟新书包背上了。\n\n你坐在床边，手里攥着这点被人嫌「太便宜」的工钱。\n\n这一刻你心里翻腾：这份让你腰酸背痛、被人便宜使唤的工作——它到底是在剥削你，还是在托起你和你全家？\n\n这两件事，在你身上，分得清吗？',
        en: 'Now you are me. Payday has come again.\n\nYou hold this month\'s wage, sit on the edge of the dorm bed, and begin to count.\n\nThis little money, measured against the price the shirt you sewed sells for, is chilling, so small, what you made hangs in a far-off mall and sells for several times your monthly wage. You know it clearly: you are being used cheaply.\n\nBut you lower your head and count again: keep a small share for your own food and lodging, and send the rest, all of it, home. This money is enough for your younger siblings\' tuition this term. Enough to treat the illness your father has put off so long.\n\nYou call home. On the other end, your mother\'s voice is happy: your sister placed near the top of her class, your brother has a new schoolbag on his back.\n\nYou sit on the edge of the bed, gripping this wage others sneer at as "too cheap."\n\nIn this moment your heart churns: this work that aches your back and uses you cheaply, is it exploiting you, or holding up you and your whole family?\n\nCan those two things, on you, be told apart?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 发工资坐宿舍床边算账 + 按衣服卖价算少得心寒 (你做的挂远方商场卖你一个月工资好几倍/被便宜地用着) + 低头再算留一小份剩下全寄回家 (够弟妹学费够给爹治拖很久的病) + 打电话娘高兴 (妹妹考前几名弟弟新书包) + 攥着被嫌太便宜的工钱 + 内心翻腾这工作是剥削你还是托起你全家分得清吗',
      engagementHook: '你攥着这点被人嫌「太便宜」的工钱——它够弟弟妹妹交学费、够给爹治病。这份让你腰酸背痛的工作，到底是在剥削你，还是在托起你全家？你分得清吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想让你看见，我寄回去的那点钱，落在地上，长出了什么。\n\n我妹妹上学了。这在我们家，是天大的事。我没机会好好上学，可她有了。她现在认得很多字，会算很难的题。她将来，也许就不用再坐到缝纫机前了——也许她能去做别的，更体面、更不伤身体的活。\n\n我爹的病，治了。我娘攒下了一点钱，家里的土坯房，换了个结实点的屋顶，下雨不再漏了。\n\n这些，都是我一针一线缝出来的。\n\n你看，全球化对我，不只是「被便宜使唤」。它也是一条路——一条从「世代种地、看天吃饭」通向「我妹妹能上学、我家不再挨饿」的路。这条路又窄又苦，但它是真的存在，是以前我娘、我奶奶从来没有过的。\n\n这就是为什么，那些数字是真的：从 1990 到 2010 年代，全世界活在极端贫困里的人，比例从大约 36% 降到了大约 9%。几亿个像我这样的人，就是这么一针一线，把自己和家里，缝出了赤贫。',
        en: 'I want you to see what the little money I sent home grew into when it landed.\n\nMy younger sister went to school. In our family, this is an enormous thing. I never had the chance to study properly, but she does. She knows many characters now, can work hard problems. One day she may not have to sit at a sewing machine at all, may do something else, more dignified, less wearing on the body.\n\nMy father\'s illness was treated. My mother saved a little, and the family\'s mud-brick house got a sturdier roof; the rain no longer leaks in.\n\nAll of this, I sewed stitch by stitch.\n\nYou see, globalization, for me, is not only "being used cheaply." It is also a road, a road from "farming for generations, at the mercy of the weather" toward "my sister can go to school, my family no longer goes hungry." The road is narrow and bitter, but it is real, and it is one my mother and grandmother never had.\n\nThis is why the numbers are true: from 1990 to the 2010s, the share of the world living in extreme poverty fell from about 36 percent to about 9. Hundreds of millions of people like me sewed, stitch by stitch, themselves and their families out of destitution.',
      },
      deliverGoal: 'N5 story — 寄回去的钱落地长出什么 (妹妹上学家里天大的事/将来也许不用坐缝纫机/爹病治了娘攒钱换结实屋顶下雨不漏) + 都是一针一线缝出来 + 全球化对我不只是被便宜使唤是一条路 (从世代种地看天吃饭通向妹妹上学家不挨饿/又窄又苦但真实是娘奶奶没有过的) + 真实数据 (极端贫困 ~36%→~9%/几亿人一针一线缝出赤贫)',
      engagementHook: '我妹妹能上学、我家换了不漏雨的屋顶——这些都是我一针一线缝出来的。全球化对我不只是「被便宜使唤」，它也是一条我娘、我奶奶从来没有过的路。这条又窄又苦的路，该不该被看见？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我把镜头停在一件具体的东西上：一件 T 恤。就是我缝的那件。\n\n它会经过三双手，三个永远不会坐到一起的人。\n\n第一双手，是一个我永远见不到的高管。他在一个有空调的会议室里，从没碰过缝纫机，他在地图上画了一条线——把这件 T 恤的出生地，定在了我这座城。他这么做，是因为我便宜。他省了钱，公司股价涨了。\n\n第二双手，是地球另一边一个工厂被关掉的工人。他以前做这种衣服，现在工厂没了，他失业了，反过来去货架上买我缝的这件更便宜的同款。他因为我，丢了工作；又因为我，买得起衣服。\n\n第三双手，就是我。我是真正用双手，把这件 T 恤一针一线缝出来的人。他们俩，一个画线，一个买单，可这件衣服，是我做出来的。\n\n同一件 T 恤：一个人设计了它的旅程，一个人因它丢了工作又因它买得起，还有一个人，就是我，用双手做出了它。\n\n你穿的那件，最底下那双手，是我这样的人的手。',
        en: 'Let me hold the lens on one concrete thing: a T-shirt. The very one I sewed.\n\nIt passes through three pairs of hands, three people who will never sit at one table.\n\nThe first pair belongs to an executive I will never meet. In an air-conditioned meeting room, never having touched a sewing machine, he drew a line on a map, setting this T-shirt\'s birthplace in my city. He did it because I am cheap. He saved money; the share price rose.\n\nThe second pair belongs to a worker on the other side of the world whose factory was closed. He used to make this kind of shirt; now the plant is gone and he is out of work, and he turns around to buy on the shelf this cheaper version I sewed. Because of me he lost his job; because of me he can afford clothes.\n\nThe third pair is mine. I am the one who actually made this T-shirt, stitch by stitch, with my hands. The two of them, one drew the line, one paid at the till, but this garment, I made it.\n\nThe same T-shirt: one person designed its journey, one lost a job to it and can afford it because of it, one, me, made it with her hands.\n\nThe one you are wearing, the bottom-most pair of hands is the hands of someone like me.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 一件 T 恤 三双手 (CEO 空调会议室画地图定我这城因我便宜省钱股价涨 / rust-belt 工人工厂被关失业反去买我缝的便宜同款因我丢工作又因我买得起 / 我真正一针一线用双手做出它) + 一个画线一个买单这件衣服我做的 + 你穿的最底下那双手是我这样的人的手 (跨 3 lens 对位)',
      engagementHook: '同一件 T 恤：一个画线，一个买单，可这件衣服，是我用双手一针一线做出来的。你穿的那件，最底下那双手，是我这样的人的手。你想过最底下那双手吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在我要讲一件，我每次想起都喘不上气的事。\n\n2013 年 4 月 24 日，在孟加拉国首都达卡郊外，一栋叫 Rana Plaza（拉纳广场）的八层大楼，塌了。\n\n那栋楼里，挤着好几家制衣厂，做的就是我做的活——给西方品牌缝衣服。前一天，墙上已经裂出了大口子，有人说危险，可工人第二天还是被叫了回去：订单不能停，停了要扣钱、要丢工作。\n\n楼塌下来，压死了大约 1,134 个人。大多数，是和我一样的年轻女工。\n\n这是我们这行历史上最惨的一次。\n\n我每次听到「真便宜」三个字，就会想起 Rana Plaza。那些女工，和我一样，是为了往家里寄钱、为了让弟妹上学，才坐进那栋楼的。她们和我，做着同样的梦。只是她们的那栋楼，塌了。\n\n你那件「真便宜」的衣服背后，不只有我寄回家的学费。也有那堵裂了缝、却不让人停工的墙。便宜的代价，有时候是命。',
        en: 'Now I must tell you something that takes my breath away every time I remember it.\n\nOn 24 April 2013, on the outskirts of Dhaka, the capital of Bangladesh, an eight-story building called Rana Plaza collapsed.\n\nInside that building, several garment factories were packed together, doing the very work I do, sewing clothes for Western brands. The day before, large cracks had opened in the walls, and people said it was dangerous, but the next day the workers were called back in: the orders could not stop, and to stop meant docked pay, meant losing the job.\n\nThe building came down and crushed about 1,134 people. Most of them were young women workers, like me.\n\nIt was the worst in the history of our trade.\n\nEvery time I hear the words "so cheap," I think of Rana Plaza. Those women, like me, sat down in that building to send money home, to put their younger siblings through school. They and I dreamed the same dream. Only their building fell.\n\nBehind your "so cheap" shirt is not only the tuition I send home. There is also that cracked wall they would not let anyone stop working beneath. The price of cheap is, sometimes, a life.',
      },
      deliverGoal: 'N7 story (Rana Plaza anchor) — 2013.4.24 达卡郊外 Rana Plaza 八层楼塌 + 挤着制衣厂做我做的活给西方品牌缝衣/前一天墙裂有人说危险次日工人被叫回 (订单不能停停了扣钱丢工作)/约 1,134 死多是和我一样年轻女工/这行最惨 + 每次听「真便宜」想起 Rana Plaza (那些女工和我做同样的梦只是她们的楼塌了) + 你那件便宜衣服背后有学费也有那堵裂缝的墙 + 便宜的代价有时是命',
      engagementHook: '那些压死在 Rana Plaza 的女工，和我一样，是为了往家里寄钱、让弟妹上学，才坐进那栋楼的。她们和我做着同样的梦——只是她们的那栋楼塌了。便宜的代价，有时候是命。这个代价，你愿意知道吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想跟你说说一个比我大得多的故事：中国。\n\n你回家翻翻你的东西，衣服、玩具、手机的零件，很多上面写着「Made in China」（中国制造）。这不是偶然。\n\n2001 年，中国加入了 WTO（世界贸易组织）。从那以后，全世界的工厂订单像潮水一样涌进中国。一座座工厂建起来，无数像我这样的年轻人，从乡下走进城里的车间。短短二十来年，中国成了「世界工厂」。\n\n结果是一个惊人的数字：从 1980 年代到 2010 年代，中国大约有 8 亿人，脱离了极端贫困。这是人类历史上，规模最大、速度最快的一次脱贫。\n\n但我得诚实地补上另一半：那 8 亿人里，有无数和我一模一样的工人——离开家乡、住在拥挤的宿舍、每天长工时、拿着在城里人看来很低的工资。中国的脱贫奇迹，是无数双这样的手，一寸一寸撑起来的。\n\n你看，又是这件事：翻身的红利，和翻身的辛苦，落在同一群人，也就是我们这些人身上。',
        en: 'I want to tell you a story much bigger than mine: China.\n\nGo home and look through your things, clothes, toys, the parts inside your phone. Many of them say "Made in China." This is no accident.\n\nIn 2001 China joined the WTO, the World Trade Organization. From then on, the world\'s factory orders poured into China like a tide. Factory after factory rose, and countless young people like me walked from the countryside into the city\'s workshops. In just over twenty years, China became the "factory of the world."\n\nThe result is a staggering number: from the 1980s to the 2010s, about 800 million people in China rose out of extreme poverty. It was the largest and fastest reduction of poverty in human history.\n\nBut I must honestly add the other half: among those 800 million were countless workers exactly like me, who left home, lived in crowded dorms, worked long hours every day, and earned wages the city people thought very low. China\'s miracle of lifting people from poverty was held up, inch by inch, by countless pairs of hands like these.\n\nYou see, the same thing again: the dividend of the turnaround and the hardship of it landed on the same people, people like us.',
      },
      deliverGoal: 'N8 story (§8 同时代中国) — 中国故事 + 翻你的东西很多写 Made in China 不是偶然 + 2001 中国入世全世界工厂订单涌进/工厂建起无数年轻人从乡下进城车间/二十来年成世界工厂 + 1980s-2010s 约 8 亿人脱贫人类史最大最快 + 诚实另一半 (那 8 亿里无数和我一样的工人离家挤宿舍长工时低工资/脱贫奇迹是这样的手一寸一寸撑起) + 翻身红利和辛苦落同一群人身上',
      engagementHook: '中国靠无数双和我一样的手，让约 8 亿人脱了贫——人类史上最大的一次。可翻身的红利和翻身的辛苦，又是落在同一群人身上。这样的奇迹，该怎么记？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉到今天，看看像我这样的人，后来怎么样了。\n\n有的人，靠这份工作，真的改变了一家人的命运：弟妹读了大学，自己攒钱做了点小生意，或者学了门更值钱的手艺，离开了缝纫机。这条路是真的能走通的，不是骗人的。\n\n也有的人，缝了一辈子衣服，身体垮了，工资却始终没涨多少。还有更多人，名字从没被任何人记下——就像 Rana Plaza 之前，没人知道那栋楼里坐着谁。\n\n而全球化这套体系，也在慢慢变。订单从工资涨上来的地方，又流向更便宜的地方。今天给你做衣服的，明天可能就换了一个更穷国家的女孩。这条「最便宜」的链子，永远在往下一个穷地方移动。\n\n我想让你记住的是：全球化不是一句简单的「让所有人都过得更好」，也不是一句简单的「只剥削穷人」。它是一条真能让人翻身的路，这条路，又是用很苦、有时很危险的劳动铺成的。\n\n两件事，都是真的。',
        en: 'Pull the lens to today, and see what became of people like me.\n\nSome, on the strength of this work, truly changed a family\'s fortunes: younger siblings went to university, they saved and started a small business, or learned a more valuable trade and left the sewing machine behind. This road can really be walked; it is not a lie.\n\nSome sewed clothes their whole lives, their bodies broke down, and the wage never rose much. And many more, their names were never written down by anyone, just as before Rana Plaza, no one knew who sat inside that building.\n\nAnd the system of globalization keeps shifting. Orders flow from places where wages have risen toward cheaper places still. The girl who makes your clothes today may be replaced tomorrow by a girl in an even poorer country. This chain of "the cheapest" is forever moving toward the next poor place.\n\nWhat I want you to remember is this: globalization is not a simple "it made everyone better off," nor a simple "it only exploits the poor." It is a road that really can lift people up, and that road is paved with labor that is very hard, and sometimes very dangerous.\n\nBoth things are true.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 像我这样的人后来怎样 (有的真改变一家命运弟妹读大学攒钱做小生意学值钱手艺离开缝纫机这条路真能走通 / 有的缝一辈子身体垮工资没涨/更多人名字从没被记下像 Rana Plaza 之前) + 体系慢慢变 (订单从工资涨的地方流向更便宜/最便宜的链子永远往下一个穷地方移) + 全球化不是简单让所有人更好也不是简单只剥削穷人 (真能让人翻身的路又用很苦有时很危险的劳动铺成) + 两件事都真',
      engagementHook: '今天给你做衣服的，明天可能换成一个更穷国家的女孩——这条「最便宜」的链子，永远在往下一个穷地方移动。全球化是真能让人翻身的路，又是用很苦、有时很危险的劳动铺成的。两件事都是真的，你怎么放在一起看？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看全球化对我这样一个人做的事，两种说法都站得住。\n\n一种说法：它是剥削。它用低得可怜的工资，买走我每天十几个小时的辛苦；它把我缝出来的衣服，卖你好几倍的价钱，差价进了别人的口袋；它让我和 Rana Plaza 那些女工，在裂了缝的墙下，用命换订单。我做出了全世界的便宜货，自己却始终站在那条链子的最底下，被踩着。\n\n另一种说法：它是出路。它给了我老家那块地永远给不了的东西——每个月实打实的现金。靠它，我妹妹上了学，我爹治了病，我家不再挨饿。我，连同几亿个和我一样的人，靠这份苦工，把自己和家人，缝出了赤贫。这是我娘、我奶奶，做梦都没有过的路。\n\n这两边不是「坏处加好处」。是同一份工作的两面——同一双缝衣服的手，既被便宜地剥削着，又在实实在在地托起一整个家。剥削我的，和救我的，是同一件事。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at what globalization did to a person like me. Both views stand.\n\nOne view: it is exploitation. With a pitifully low wage it buys my ten-odd hours of labor a day; it sells the clothes I sew for several times the price, the difference going into others\' pockets; it set me and the women of Rana Plaza, beneath a cracked wall, trading our lives for orders. I made the world\'s cheap goods and yet stood always at the very bottom of that chain, trodden on.\n\nThe other view: it is a way out. It gave me what the land back home could never give, real cash every month. On it, my sister went to school, my father was treated, my family no longer goes hungry. I, together with hundreds of millions like me, sewed myself and my family out of destitution with this hard work. It is a road my mother and grandmother never had, even in dreams.\n\nThese two are not "harm plus benefit." They are two faces of the same job, the same hands that sew, cheaply exploited and really, truly holding up a whole family. The thing that exploits me and the thing that saves me are the same thing.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (剥削/低工资买我十几小时辛苦/我缝的卖你好几倍差价进别人口袋/我和 Rana Plaza 女工裂缝墙下用命换订单/做出全世界便宜货自己站链子最底被踩) / 另一种说法 (出路/老家地永远给不了的每月现金/妹妹上学爹治病家不挨饿/几亿人缝出赤贫娘奶奶做梦没有的路) / 同一份工作两面剥削我的和救我的是同一件事 / 想 30 秒',
      engagementHook: '剥削我的，和救我的，是同一件事——同一双缝衣服的手，既被便宜地剥削着，又实实在在地托起一整个家。两种说法都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'gw-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生（一个从乡下走进车间、用双手缝出全世界便宜货、把妹妹供上学、也亲眼见过那堵裂缝的墙夺走同伴性命的女子），你会怎么评价全球化对我做的事？\n\n它剥削我，也救了我；它让我站在链子最底下被踩，也给了我娘、我奶奶从来没有过的一条路。这不是「好」或「坏」的二选一，是同一件事，在我这同一双手上，又剥削又托举。把它放在天平上，你怎么称？\n\n不过先记住：你这一遍，只听了站在最底下的我。那个在会议室画线、把工厂搬来我这城的高管，那个在地球另一边因此丢了工作、又去买我缝的便宜衣服的工人，各有各的说法。换个视角再走一遍，你会听见高管怎么算「效率」，会听见那个失业工人的城，是怎么死掉的——也看看你刚才的判断，站不站得住。\n\n再想一步：低头看看你身上穿的、手里拿的——你的鞋、你的衣服、你的手机。翻过来看标签：它在哪做的？是谁，用一双你永远不会见到的手，让它变得「真便宜」？\n\n那时候，你会怎么做？你会只看价格，假装那双手不存在，还是会停一下，记得那双手——也记得它背后，可能有一面会塌的墙？',
        en: 'Having walked my whole life, a woman who came from the countryside into the workshop, sewed the world\'s cheap goods with her hands, put her sister through school, and saw with her own eyes a cracked wall take a companion\'s life, how would you judge what globalization did to me?\n\nIt exploited me and it saved me; it set me at the bottom of the chain to be trodden on, and gave me a road my mother and grandmother never had. This is not a choice between "good" and "bad," it is the same thing, on these same hands of mine, both exploiting and lifting. Put it on the scale. How do you weigh it?\n\nBut first, remember: this pass, you heard only me, standing at the very bottom. The executive who drew the line in a meeting room and moved the factory to my city, and the worker on the other side of the world who lost his job because of it and then bought the cheap clothes I sewed, each have their own case. Run it again through another lens and you will hear how the executive counts "efficiency," and hear how that laid-off worker\'s city died, and see whether the judgment you just made still holds.\n\nThen take one more step: look down at what you are wearing, what you are holding, your shoes, your clothes, your phone. Turn it over and read the label: where was it made? Who, with a pair of hands you will never meet, made it "so cheap"?\n\nWhen that happens, what will you do? Will you look only at the price and pretend those hands do not exist, or will you stop a moment and remember those hands, and remember too that behind them there may be a wall that could fall?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价全球化对我做的事 (剥削我也救了我/链子最底被踩也给了娘奶奶没有的路/不是好坏二选一是同一事同一双手又剥削又托举天平) + cross-perspective pointer (只听站最底的我/高管画线+失业工人各有说法换视角再走一遍听高管算效率听失业工人的城怎么死) + transfer「低头看你身上穿的手里拿的翻标签在哪做/谁用永远不见的手让它真便宜」+ 你会只看价格假装那双手不存在还是停一下记得那双手也记得背后可能有面会塌的墙',
      engagementHook: '走完我这一生，你会怎么评价全球化对我做的事？再想一步：翻过你的鞋、衣服、手机看标签——是谁，用一双你永远不会见到的手，让它「真便宜」？那时候，你会只看价格、假装那双手不存在，还是停一下，记得那双手，也记得它背后可能有一面会塌的墙？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'ceo-or-trade-architect':                    ceoLens,
  'rust-belt-worker':                          rustBeltLens,
  'global-south-garment-worker-receiving-end': garmentWorkerLens,
};

// per TOPIC_ROADMAP_G6_G12.md + receiving-end 优先 pattern:
// 女性 + 做廉价商品的劳动一方 + N1 gold-standard hook + N6 一件 T 恤三双手跨 lens 对位 + N10/N11 剥削 vs 出路 closing
export var defaultLens = 'global-south-garment-worker-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'globalization-1995',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'ceo-or-trade-architect': 30, 'rust-belt-worker': 28, 'global-south-garment-worker-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-25',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6: 一件 T 恤三双手 (CEO 画地图设计旅程 / rust-belt 工人因它丢工作又因它买得起 / 南方女工用双手做出它)',
    'defaultLens: global-south-garment-worker-receiving-end — 受影响者优先 (女性 + 做廉价商品的劳动一方 + gold-standard N1 hook + N10/N11 剥削 vs 出路)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'Rule 0 双刃: 极端贫困 ~36% (1990) → ~9% (2010s) 全球脱贫 (中国 ~8 亿) AND Rana Plaza 2013 ~1,134 死 + 锈带失业 + 不平等拉大; 不向任何一边说教',
    'anti-fab: 无伪造引文/数据; 真实数字标约数 (~36%/~9%/~8 亿/~1,134); 集装箱 1956 McLean / Bretton Woods 1944 / WTO 1995 / NAFTA 1994 / 中国入世 2001 均真实',
    'cross-Topic 锚: 集装箱+供应链→industrial-revolution-1800; 苏联 1991 解体→cold-war-1962; 中国入世 2001 世界工厂→§8 同时代中国',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
