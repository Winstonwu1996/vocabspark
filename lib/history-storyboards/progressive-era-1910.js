// ─── Progressive Era 1890-1920 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 进步时代 · The Progressive Era 1890-1920
// HS 11 · APUSH Period 7 · AP US Government & Politics
//
// 3 lens (per TOPIC_ROADMAP_G6_G12.md B5 + AUTHORING_PIPELINE 第 7/8/12 条):
//   - theodore-roosevelt (perpetrator-actor) — TR 1858-1919 反垄断+护自然的改革总统 / 同时帝国主义+优生学倾向
//   - jane-addams        (lonely-mediator)   — Jane Addams 1860-1935 Hull House 创办者 / 移民安置先驱 / 1931 诺奖
//   - triangle-fire-worker-receiving-end (receiving-end) — 1911 Triangle 火灾移民女工 (composite, grounded in 146 死)
//
// 跨 lens micro-detail (N6 anchor):
//   一道「锁着的门」两个方向 —
//   - TR lens N6: 反垄断「拆开 trust 这扇门」vs Triangle 工厂被锁死的那扇门 — 改革够不着的角落
//   - Jane Addams lens N6: Hull House 帮移民 vs 改革对工厂女工滞后到 146 人死后才动
//   - 女工 lens N6: 那扇锁着的门 + 跨 Topic 对位 gilded-age Carnegie trust / scientific-revolution Galton 优生学
//
// 跨 Topic 锚:
//   - TR 反垄断 → gilded-age (回应 Carnegie trust)
//   - TR 优生学倾向 → scientific-revolution (科学被挪用为种族等级 Newton→Galton)
//   - Jane Addams 移民安置 → 排华/移民 (安置 vs 排外张力)
//
// defaultLens = 'triangle-fire-worker-receiving-end'
//
// SPEC (shorter tight format):
//   - 11 nodes per lens (multi-faction)
//   - 220-360 CN chars/node; only N6 (cross-lens) + N10 (synthesis) anchors may reach 480
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true; all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md 铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 4-agent review (TBD): 7thgrader (小 U) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Theodore Roosevelt (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var theodoreRooseveltLens = {
  id: 'theodore-roosevelt',
  name: 'Theodore Roosevelt',
  nameCn: '西奥多·罗斯福',
  role: 'perpetrator-actor',
  perspectiveTag: 'reform-president',
  icon: '🐻',
  description: {
    cn: '他是一个谁都没选过的总统：1901 年 9 月他正在山间小路上登山，传令员追上来说总统中枪了，几小时后他 42 岁接班，成了美国到那时最年轻的总统。这一遍让你从他这里看，他面前是一个被几个没人选过的钢铁大王、石油大王攥住的国家，他要挥起大棒去拆，可同一双手也举着白人种族更优越的旗子去抢殖民地，「进步」这两个字的光和影，在他身上同时长着。',
    en: 'He is a president no one elected. In September 1901 he was on a mountain trail when a messenger came panting up to say the president had been shot, and hours later, at 42, he took over as the youngest president America had ever had. This pass lets you watch him as he faces a country gripped by a few unelected steel and oil kings, ready to swing his big stick and break them, while the same hands hoist the banner of white racial superiority and grab for colonies abroad. The light and the shadow of the word "progress" grow on him at once.',
  },
  storyboard: [
    {
      id: 'tr-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1901 年 9 月，我在登山。山间小路上，一个传令员气喘吁吁追上来：总统中枪了，快不行了。\n\n那个总统是 McKinley，被一个无政府主义者开了两枪。我是副总统。等我赶到，他已经死了。\n\n我 42 岁，成了美国到那时最年轻的总统。没人选我当过总统——我是接班接上来的。华盛顿的老政客们头疼：这个浑身是劲、谁都敢顶的年轻人，要怎么管？\n\n我是 Theodore Roosevelt（西奥多·罗斯福）。小时候我体弱、近视、哮喘，差点活不过童年。我是靠拳头、靠拼命运动，把自己从一个病孩子练成了牛仔和军人。\n\n这一遍，你坐进我这个位置。你要去做一件大事：在一个被几个巨富攥住的国家里，替普通人把权力夺一点回来。',
        en: 'September 1901, I was up a mountain. On the trail a messenger came panting after me: the president has been shot, he is dying.\n\nThat president was McKinley, shot twice by an anarchist. I was vice president. By the time I reached him, he was dead.\n\nI was 42, the youngest president America had ever had to that point. No one had elected me president. I came up through succession. The old politicians in Washington were worried: this restless young man who would face down anyone, how do we control him?\n\nI am Theodore Roosevelt. As a boy I was weak, nearsighted, asthmatic, and nearly did not live through childhood. I built myself, with my fists and with relentless exercise, from a sick child into a cowboy and a soldier.\n\nThis pass puts you in my seat. You are about to do something big: in a country gripped by a handful of the very rich, you will pull a little power back for ordinary people.',
      },
      deliverGoal: 'N1 hook — 1901.9 McKinley 遇刺 TR 42 岁接任最年轻总统 + 病孩子练成牛仔军人 + 老政客头疼 + 这一遍视角 (替普通人从巨富手里夺回权力)',
      engagementHook: '一个谁都没选过的人，突然成了总统。你信「有能力的人就该多揽权去做好事」，还是觉得权力必须先有人授权？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我接手的是个什么样的国家。\n\n那几十年，美国工业爆炸式增长，钢铁、铁路、石油，造出了一批富可敌国的巨头。一个人控制全国大半的钢，一个人控制大半的石油。他们把同行买光、挤垮，组成超级联合体，这种垄断巨头叫 trust（托拉斯）。\n\n一条铁路想涨运费就涨，农民只能认。一家石油公司想压价就压，小厂只能死。这些 trust 没人选他们，却比很多政客还有权。\n\n\n\n普通人活在他们脚底下：工人一天干 12 小时，工资压到最低，工厂出了事故没人负责。\n\n我心里清楚：一个国家如果被几个不受约束的巨头攥着，那「人民当家」就是句空话。',
        en: 'First, the kind of country I inherited.\n\nIn those decades American industry exploded: steel, railroads, oil, producing a handful of magnates richer than nations. One man controlled most of the country\'s steel; one man controlled most of its oil. They bought out and crushed their rivals and formed giant combinations. Such a monopoly combination was called a trust.\n\nA railroad raised its freight rates whenever it pleased, and the farmer could only take it. An oil company forced prices down, and the small refiner could only die. No one had elected these trusts, yet they held more power than many politicians.\n\n(If you have run the gilded-age topic, you will recognize these names, the steel king, the oil king. What I inherited was the mess left after they grew huge.)\n\nOrdinary people lived under their feet: workers labored 12 hours a day, wages pressed to the floor, and when an accident struck the factory, no one was held to account.\n\nI knew this clearly: if a country is gripped by a few unchecked giants, then "the people rule" is an empty phrase.',
      },
      deliverGoal: 'N2 setup — 工业爆炸 + trust 托拉斯垄断巨头 (钢/石油/铁路) + 没人选却比政客有权 + 跨 gilded-age Topic 锚 (钢铁大王/石油大王) + 工人 12 小时低工资无安全 → 改革动机',
      engagementHook: '几个没人选出来的巨富，比政客还有权力。你觉得「有钱就有权」是市场的自然结果，还是必须被管住的危险？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我不是一个人在战斗。那个年代有一群人，专门去扒巨头和政客的黑幕。\n\n有记者钻进肉联厂，写下香肠里掺了什么、地上扫起来的是什么——书一出，全国人吃不下饭。有记者一篇篇追查石油大王怎么靠回扣和恐吓挤垮对手。\n\n这群专门挖丑闻的记者，我给他们起了个外号：muckraker（扒粪者）——低头扒地上的脏东西。这个词后来成了进步时代的标志。\n\n他们扒出来的脏，逼着我和国会不得不动手。1906 年，靠那本写肉联厂的书掀起的民愤，国会通过了《纯净食品和药品法》——这是美国第一部管食品安全的联邦法律。\n\n你看这个链条：记者扒、民众怒、政府改。这就是进步时代的发动机。\n\n而我，站在这台发动机的顶上。',
        en: 'I was not fighting alone. In that era a group of people made it their work to dig up the dark dealings of the magnates and the politicians.\n\nOne reporter slipped into the meatpacking plants and wrote down what was mixed into the sausage, what was swept up off the floor. When the book came out, the whole country lost its appetite. Another chased, story by story, how the oil king crushed his rivals through rebates and threats.\n\nThese reporters who dug up scandal I gave a nickname: muckrakers, people raking the muck off the ground. The word became a mark of the Progressive Era.\n\nThe filth they raked up forced my hand and the hand of Congress. In 1906, on the public fury stirred by that book about the meatpacking plants, Congress passed the Pure Food and Drug Act, America\'s first federal law on food safety.\n\nSee the chain: reporters dig, the public rages, the government reforms. That was the engine of the Progressive Era.\n\nAnd I stood at the top of that engine.',
      },
      deliverGoal: 'N3 setup — muckraker 扒粪记者 (肉联厂掺假/追查石油大王回扣) + 记者扒→民众怒→政府改的链条 + 1906 Pure Food and Drug Act 第一部食品安全联邦法 + TR 站在发动机顶上',
      engagementHook: '记者扒、民众怒、政府改——这台发动机靠的是把脏东西摊在阳光下。你觉得「揭丑」是进步的力量，还是只会让人对一切失望？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你手上有一件武器，是几年前国会立的一条反垄断法（Sherman 反托拉斯法），可前几任总统几乎没用过它。\n\n1902 年，你盯上了一个巨型铁路联合体——它把美国西北部几条大铁路并成一家，等于一个人卡住了半个国家的运输咽喉。\n\n你下令司法部起诉它，要求法院把它拆开。\n\n华尔街炸了。最有钱的那个金融大王亲自跑来找你，问能不能「私下谈个解决办法」——他习惯了，钱能摆平一切。\n\n你拒绝了。1904 年,最高法院判你赢,那个铁路联合体被拆散。报纸把你叫「打 trust 的人」(trust-buster)。\n\n这一刻你尝到一种从没有过的滋味：你,代表政府,第一次让一个巨富低头。\n\n但你心里也有个声音:你拆这一家，是真要管住所有巨头，还是只是挑一个软的立威给全国看？你分得清吗？',
        en: 'Now you are me.\n\nIn your hand is a weapon, an antitrust law Congress passed years ago, the Sherman Antitrust Act, which earlier presidents had barely used.\n\nIn 1902 you set your sights on a giant railroad combination. It had merged several great railroads of the Northwest into one, so that a single hand gripped the transport throat of half the country.\n\nYou ordered the Justice Department to sue it and asked the court to break it apart.\n\nWall Street exploded. The richest financier came to you in person, asking whether you might "settle it privately." He was used to it: money fixes everything.\n\nYou refused. In 1904 the Supreme Court ruled in your favor, and the railroad combination was broken up. The newspapers called you the trust-buster.\n\nIn that moment you tasted something you had never tasted before: you, on behalf of the government, had for the first time made a magnate bow.\n\nBut a voice inside you asks: are you breaking this one because you mean to control every giant, or just picking a soft target to show the country your strength? Can you tell the difference?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — Sherman 反托拉斯法武器 + 1902 起诉巨型铁路联合体 + 金融大王私下谈被拒 + 1904 最高法院判赢拆散 + trust-buster 称号 + 自我拷问 (真管住所有巨头还是挑软的立威)',
      engagementHook: '你第一次让一个巨富低头，全国叫你英雄。可你拆的到底是真垄断，还是一个好欺负的对象？你怎么分得清自己的动机？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我管的不只是 trust。我还干了一件当时没人当回事、今天却影响最深的事：保护自然。\n\n那年代的美国人觉得森林、河流、野地是用之不尽的——砍光一片就去下一片。我从小爱打猎、爱观鸟，亲眼看见原野怎么被吃掉。我心里清楚：这块大陆的野，再不管，一代人就糟蹋光了。\n\n我用总统权力，把约两亿三千万英亩公共土地保护起来——其中划出 150 多片国家森林、5 个国家公园、18 处国家纪念地（像大峡谷）。我让政府第一次系统地「替后代留住一部分荒野」。\n\n1903 年，我和一个叫 John Muir（约翰·缪尔）的自然主义者，跑到加州的 Yosemite（优胜美地）露营三天。没有随从，没有记者，就睡在大树下、雪地上。回来后我更铁了心：这些地方要从私人手里护住，留给所有人。\n\n这件事，今天你去任何一个美国国家公园，还在替我作证。',
        en: 'I did not only deal with trusts. I did one more thing that no one at the time thought much of, yet that runs deepest today: protecting nature.\n\nAmericans of that era thought the forests, rivers, and wild land were inexhaustible. Cut one stretch bare and move to the next. I had loved hunting and watching birds since boyhood, and had seen with my own eyes how the wild was being eaten away. I knew clearly: the wildness of this continent, left unmanaged, would be ruined in a single generation.\n\nUsing presidential power, I set aside about 230 million acres of public land, among them more than 150 national forests, 5 national parks, and 18 national monuments (such as the Grand Canyon). For the first time the government systematically kept back some wilderness for those who came after.\n\nIn 1903 I went camping for three days in Yosemite, in California, with a naturalist named John Muir. No retinue, no reporters, just sleeping under the great trees, on the snow. I came back more resolved: these places must be guarded out of private hands and kept for everyone.\n\nGo to any American national park today, and it still bears witness for me.',
      },
      deliverGoal: 'N5 story — TR 保护自然 (约 2.3 亿英亩公共土地/其中 150+ 片国家森林/5 国家公园/18 国家纪念地) + 1903 与 John Muir Yosemite 露营三天 + 替后代留荒野 + 国家公园今天作证',
      engagementHook: '我替还没出生的人留住了荒野，今天的国家公园还在替我作证。「为了将来的人，限制现在人的自由」——你觉得该不该?',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我拆 trust、护森林，民众喊我英雄。可有一扇门，我的改革够不着。\n\n1911 年（我已经卸任）3 月 25 日，纽约一栋楼的高层，一家叫 Triangle 的制衣厂起火。厂里几百个工人，大多是十几二十岁的移民女工。逃命时她们发现，通往楼梯的门——被老板从外面锁死了。\n\n锁门，是为了防工人「偷布料」、防她们溜出去歇口气。火起来时，这扇锁着的门，把她们关在了里面。\n\n那天 146 个人死了。有人活活烧死，有人从八九层楼跳下去摔死。街上的人眼睁睁看着，拦都拦不住。\n\n我拆开了铁路那扇「垄断的门」，逼一个金融大王低头。可纽约这扇真正锁着人命的工厂门，我的反垄断、我的国家公园，一寸都够不着。\n\n同样是「门」——我在华盛顿拆开一扇象征性的，她们在纽约死在一扇真实的门后。我的「进步」，到底进步到了谁身上？',
        en: 'I broke trusts, I guarded forests, and the public called me a hero. But there was one door my reforms could not reach.\n\nOn 25 March 1911 (I had already left office), on the upper floors of a New York building, a garment factory called Triangle caught fire. Inside were hundreds of workers, most of them immigrant women in their teens and twenties. Fleeing, they found that the door to the stairwell had been locked from the outside by the owners.\n\nThe doors were locked to stop workers from "stealing cloth," from slipping out for a breath. When the fire came, that locked door sealed them inside.\n\nThat day 146 people died. Some burned alive; some jumped from the eighth and ninth floors to the pavement. People in the street watched, unable to stop it.\n\nI had broken open the railroad\'s "door of monopoly" and forced a financier to bow. But that New York factory door, the one truly locked over human lives, my trust-busting and my national parks could not reach by an inch.\n\nThe same word, "door." In Washington I broke open a symbolic one; in New York they died behind a real one. My "progress," whom exactly did it reach?',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Triangle Shirtwaist 火灾 1911.3.25 (146 死/移民女工/门被从外锁死/烧死或跳楼) + 对位: TR 拆开象征的垄断之门 vs 工厂真实锁死人命的门 + 「进步进步到谁身上」反 Whig',
      engagementHook: '我在华盛顿拆开一扇象征性的「垄断之门」，她们在纽约死在一扇真实锁死的工厂门后。同样是「门」，我的进步够不着她们——「进步」到底进步到了谁身上？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在我得说我身上最难看的那一面，很多颂歌会跳过它。\n\n我相信白人种族——尤其是英语国家的人——天生更优越。这不是别人栽赃，是我反复在演讲和文章里说的。\n\n那年代有一门时髦的「科学」，叫优生学（eugenics）：主张靠控制谁能生孩子，来「改良」人种，让「优等的」多生、「劣等的」少生甚至别生。我公开支持这套想法。我担心的是，我眼里「优等」的白人新教家庭生得太少，会被移民「比下去」。\n\n\n\n这就是麻烦的地方：同一个我，一手用国家力量保护普通人和荒野，一手又相信人是分等级的，有些人「不该多生」。\n\n进步和偏见，长在同一颗脑袋里。',
        en: 'Now I must speak of my ugliest side, the one many songs of praise skip over.\n\nI believed the white race, the English-speaking peoples especially, was superior by birth. This is not something others pinned on me; I said it again and again in speeches and essays.\n\nThat era had a fashionable "science" called eugenics: the claim that by controlling who may have children one could "improve" the human stock, letting the "superior" breed more and the "inferior" breed less, or not at all. I openly backed this idea. My worry was that the white Protestant families I saw as "superior" were having too few children and would be "out-bred" by immigrants.\n\n(If you have run the scientific-revolution topic, you will recognize this wrong turn: the scientific method that Newton\'s generation built with such labor was, by this era, hijacked to dress "races have a higher and a lower" in a coat of "science.")\n\nHere is the trouble: the same me, with one hand used the power of the state to protect ordinary people and the wild, and with the other believed people came in ranks, that some "should not breed."\n\nProgress and prejudice grew in the same head.',
      },
      deliverGoal: 'N7 story — TR 公开种族优越论 + eugenics 优生学 (控制谁能生孩子改良人种/担心白人新教家庭被移民比下去) + 跨 scientific-revolution Topic 锚 (科学方法被挪用 Newton→给种族高低披科学外衣) + 进步与偏见同头',
      engagementHook: '同一个我，一手保护普通人和荒野，一手相信人分等级、有些人「不该多生」。一个真做了好事的人，能不能同时是危险的偏见者？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我的偏见，不止停在脑子里——它变成了枪和军舰。\n\n我相信强国就该扩张。1898 年美西战争，我辞了海军部的官，自己组了一支义勇骑兵团，跑去古巴打仗，一战成名。打赢之后，美国从西班牙手里拿走了菲律宾、波多黎各、关岛。\n\n当总统后，我要在中美洲挖一条连通两大洋的运河——巴拿马运河。挡路的是哥伦比亚不肯松口。我的办法是：1903 年支持巴拿马从哥伦比亚独立出去，新国家立刻把运河区交给美国。我后来自己得意地说：「我拿下了运河区。」\n\n我有句出名的话：「说话客气，但手里拿根大棒。」（Speak softly and carry a big stick.）这就是我的外交——嘴上讲道理，背后是舰队。\n\n对国内的普通人，我是替他们出头的总统。对国门外的小国，我是那个拿着大棒、想怎么划界就怎么划界的帝国总统。\n\n同一根大棒，朝里是保护，朝外是征服。',
        en: 'My prejudice did not stop in my head. It became guns and warships.\n\nI believed a strong nation ought to expand. In the Spanish-American War of 1898 I resigned my post in the Navy Department, raised a volunteer cavalry regiment, went to fight in Cuba, and made my name in one stroke. After the victory, America took the Philippines, Puerto Rico, and Guam from Spain.\n\nAs president I wanted to dig a canal across Central America joining the two oceans, the Panama Canal. In the way stood Colombia, which would not give in. My solution: in 1903 I backed Panama in breaking away from Colombia, and the new nation handed the canal zone to America at once. I later boasted of it myself: "I took the Canal Zone."\n\nI had a famous line: "Speak softly and carry a big stick." That was my diplomacy, reasonable words backed by a fleet.\n\nTo ordinary people at home, I was the president who stood up for them. To small nations beyond our borders, I was the imperial president who carried a big stick and drew the lines wherever he pleased.\n\nThe same big stick: turned inward, protection; turned outward, conquest.',
      },
      deliverGoal: 'N8 story — 帝国主义 (1898 美西战争义勇骑兵团/拿走菲律宾波多黎各关岛) + 巴拿马运河 (1903 支持巴拿马独立拿下运河区/「我拿下了运河区」) + Big Stick 外交 + 同一根大棒朝里保护朝外征服',
      engagementHook: '同一根大棒，对国内是保护普通人，对国门外的小国是想怎么划界就怎么划界。一个国家「为了自己强大」去抢别国，可以被原谅吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉远，看进步时代到底留下了什么。\n\n那二十年，美国人改了好几条宪法修正案：第 16 条让联邦能收所得税（向富人多收一点），第 17 条让参议员由人民直接选（以前是州议会指定），第 18 条禁酒，第 19 条让女性有了投票权。\n\n还有一批新办法，让普通人能绕过被收买的议会，直接立法、直接罢免官员（叫 initiative、referendum、recall）。\n\n这些都是真的进步——权力从巨头和老政客手里，挪了一点给普通人。\n\n但你别忘了 Triangle 那扇锁着的门。改革管得了食品、管得了垄断、管得了选举，却迟迟管不到工厂里一个移民女工的命——直到 146 个人死了，纽约才痛下决心立工厂安全法。\n\n进步时代的真相是：进步是真的，可它来得有先有后。有权说话的人先被照顾到，没权说话的人，常常要先死一批，改革才肯走到他们那扇门前。',
        en: 'Pull the lens back and look at what the Progressive Era actually left behind.\n\nIn those twenty years Americans changed several constitutional amendments: the 16th let the federal government collect an income tax (taking a little more from the rich); the 17th let the people elect senators directly (before, state legislatures appointed them); the 18th banned alcohol; the 19th gave women the vote.\n\nThere were also new tools letting ordinary people bypass a bought legislature and make law or remove officials directly (called initiative, referendum, and recall).\n\nThese were real progress: power shifted, a little, from the giants and the old politicians toward ordinary people.\n\nBut do not forget that locked door at Triangle. Reform could reach food, could reach monopoly, could reach elections, yet was slow to reach the life of one immigrant woman in a factory, until 146 died and only then did New York resolve to pass factory safety laws.\n\nThe truth of the Progressive Era is this: the progress was real, but it came in an order. Those with a voice were cared for first; those without one often had to lose a batch of lives before reform would walk up to their door.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 进步时代修正案 (16 所得税/17 直选参议员/18 禁酒/19 女性投票) + initiative/referendum/recall 直接民主 + 但 Triangle 锁门 (146 死后纽约才立工厂安全法) + 「进步有先后，没权说话的常要先死一批」',
      engagementHook: '进步是真的，但它来得有先有后——有权说话的先被照顾，没权说话的常要先死一批，改革才肯走到他们门前。这是进步的代价，还是进步的谎言？',
      expectsRealAnswer: false,
    },
    {
      id: 'tr-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是进步时代的英雄。我拆开垄断巨头，逼最有钱的人对政府低头；我留下两亿多英亩荒野，今天的国家公园都从这儿来；我替没权的普通人，从巨富和老政客手里夺回了一点权力。一个被几个巨头攥住的国家，是我让它开始转向。\n\n另一种说法：我是把偏见包进进步里的人。同一双手，一手护普通人，一手相信人分等级、支持优生学、把美国变成抢殖民地的帝国。我的「进步」先照顾有声音的人，对锁在工厂里的移民女工，迟迟够不着。我嘴里的「优等种族」，根本没把她们算成「我要保护的人民」。\n\n这两边不是「功劳加缺点」。是同一套世界观的两面——同一个「让美国更强更好」的信念，既造出了改革，也造出了排斥。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the hero of the Progressive Era. I broke apart the monopoly giants and forced the richest men to bow to the government; I left more than two hundred million acres of wilderness, the source of today\'s national parks; for the powerless ordinary person I pulled back a little power from the magnates and old politicians. A country gripped by a few giants, I made it begin to turn.\n\nThe other view: I was the man who wrapped prejudice inside progress. The same hands, one guarding ordinary people, the other believing people came in ranks, backing eugenics, turning America into an empire grabbing colonies. My "progress" cared first for those with a voice, and was slow, very slow, to reach the immigrant women locked in the factory. The "superior race" in my mouth never counted them among "the people I meant to protect."\n\nThese are not "credit and weakness." They are two faces of one worldview, the same belief in "making America stronger and better" that produced both the reform and the exclusion.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (进步时代英雄/拆垄断/留荒野/替普通人夺回权力) / 另一种说法 (把偏见包进进步/相信人分等级+优生学+帝国/进步够不着移民女工) / 同一套世界观两面 / 想 30 秒',
      engagementHook: '进步时代英雄，和把偏见包进进步里的人——是同一套世界观的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'tr-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个改革者？\n\n同一个我，一边拆开垄断、留住荒野、替普通人出头，一边相信人分等级、支持优生学、拿大棒去别国划界。改革和偏见不是我身上分开的两块，是长在同一颗脑袋、同一个「让美国更强」信念里的两面。把它们放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有人或一件事，「做了真的好事」和「藏着真的偏见」同时成立——一个老师、一个偶像、一条你支持的政策？你会因为他做的好事，就替他的偏见开脱吗？\n\n还有：当「进步」来了，先照顾到的是有声音的人，而不是 Triangle 门后那些没声音的人——你会不会去做那个，专门替没声音的人多问一句的人？',
        en: 'Having walked my whole life, how would you judge a reformer like this?\n\nThe same me, on one side breaking monopolies, keeping wilderness, standing up for ordinary people, and on the other believing people came in ranks, backing eugenics, carrying a big stick to draw lines in other nations. Reform and prejudice are not two separate blocks on me; they are two faces grown in one head, one belief in "making America stronger." Put them on the same scale. How do you weigh them?\n\nThen take one more step. In your life today, is there a person or a thing where "did something truly good" and "holds a real prejudice" are both true at once, a teacher, an idol, a policy you support? Will you excuse their prejudice because of the good they did?\n\nAnd this: when "progress" comes, it reaches first those with a voice, not the voiceless ones behind the Triangle door. Will you be the one who asks one more question on behalf of the people with no voice?',
      },
      deliverGoal: 'N11 close — 评价改革者 (拆垄断/留荒野/替普通人 vs 人分等级+优生学+帝国大棒 同一天平) + transfer「今天你身边好事与偏见同时成立的人/会不会替没声音的人多问一句」',
      engagementHook: '一边是真的改革，一边是真的偏见，长在同一颗脑袋里。你会怎么评价这样一个改革者？今天你身边那个「做好事又藏着偏见」的人，你会怎么对待？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Jane Addams (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var janeAddamsLens = {
  id: 'jane-addams',
  name: 'Jane Addams',
  nameCn: '简·亚当斯',
  role: 'lonely-mediator',
  perspectiveTag: 'settlement-founder',
  icon: '🏠',
  description: {
    cn: '她是 1889 年那个搬进芝加哥最穷移民区的富家女儿。别人是去「行善」，她是直接搬进去，跟意大利人、波兰人、犹太人、希腊人做邻居，住同一条街，闻同样的味道，听同样夜里的哭声。这一遍让你跟她一起站在 Hull House 门口看，华盛顿在谈反垄断、谈选举这些大事，可这些大事怎么变成她邻居孩子嘴里的一口饭、肺里的一口干净空气，中间没人搭那座桥，她决定她来搭。',
    en: 'She is the wealthy daughter who in 1889 moved into the poorest immigrant district of Chicago, not to "do good" but to live there, neighbor to Italians, Poles, Jews and Greeks on the same street, breathing the same smells, hearing the same crying at night. This pass puts you with her at the door of Hull House: in Washington they argue antitrust and elections, but how do those great matters become a mouthful of food in her neighbor\'s child, a breath of clean air in their lungs? A vast distance lies between, no one is building the bridge, and she decides she will.',
  },
  storyboard: [
    {
      id: 'ja-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1889 年，芝加哥。我和一个朋友租下了一栋又旧又破的大房子，在城里最穷的那个区——周围全是刚下船的移民，意大利人、波兰人、犹太人、希腊人，挤在又脏又挤的出租屋里。\n\n我没去那儿「行善」。我搬了进去。我要和他们做邻居，住在同一条街上，闻同样的味道，听同样夜里的哭声。\n\n我是 Jane Addams（简·亚当斯）。我父亲是有钱的商人，我从小读书，本可以过太太小姐的安稳日子。可那种日子让我喘不过气——一个受过教育的女人，那年代竟然找不到一件「正经事」可做。\n\n这栋房子，我们叫它 Hull House。\n\n这一遍，你坐进我这个位置。你不去夺权，也不去揭丑。你做一件更难的事：站在所有互相看不顺眼的人中间，让他们开始彼此听见。',
        en: '1889, Chicago. A friend and I rented a big old run-down house, in the poorest district of the city, surrounded by immigrants just off the boats, Italians, Poles, Jews, Greeks, crammed into filthy, crowded tenements.\n\nI did not go there to "do good." I moved in. I would be their neighbor, live on the same street, breathe the same smells, hear the same crying in the night.\n\nI am Jane Addams. My father was a wealthy merchant; I was well read from childhood and could have lived the settled life of a lady. But that life suffocated me. An educated woman, in that era, could find no "proper work" to do.\n\nThis house we called Hull House.\n\nThis pass puts you in my seat. You do not seize power, and you do not dig up scandal. You do something harder: stand among all the people who cannot stand one another, and make them begin to hear each other.',
      },
      deliverGoal: 'N1 hook — 1889 芝加哥租旧楼住进最穷移民区 (意/波/犹/希移民) + 不行善而是搬进去做邻居 + Jane Addams 自我介绍 (富商女儿/受教育却找不到正经事) + Hull House + 这一遍视角 (站中间让人彼此听见)',
      engagementHook: '我没去那儿「行善」，我搬了进去，和最穷的移民做邻居。「帮人」和「跟人住在一起」，差别在哪里?',
      expectsRealAnswer: false,
    },
    {
      id: 'ja-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我为什么是我，你才懂我为什么搬进那条街。\n\n那年代，一个女人就算上了大学，出来也几乎无路可走——不能当医生、当律师、进政界。社会给受教育女人安排的，只有当妻子、当母亲，或者教书。我大学毕业后病了好几年，一半是身体，一半是憋的：满肚子学问，没处使。\n\n后来我去欧洲旅行，在伦敦看到一种新东西：一群受过教育的年轻人，搬进穷人区，跟穷人住在一起，办识字班、托儿所、讨论会。这种地方叫 settlement house（睦邻之家）。\n\n我一下子看懂了：这就是我能做的「正经事」。\n\n我把它带回芝加哥。Hull House 不发钱、不传教。我们开幼儿园让上班的母亲有地方放孩子，开夜校教移民英语和手艺，办澡堂、图书馆、剧团。\n\n说到底，我做的是一件事：把「孤立无援的穷人」和「冷漠的城市」，重新连起来。',
        en: 'First, why I am who I am, so you understand why I moved onto that street.\n\nIn that era a woman, even with a college degree, had almost nowhere to go. She could not be a doctor, a lawyer, or enter politics. What society arranged for an educated woman was to be a wife, a mother, or to teach. After college I was ill for years, half in body and half in frustration: a head full of learning and nowhere to use it.\n\nLater I traveled in Europe and in London saw something new: a group of educated young people had moved into a poor district to live among the poor, running literacy classes, nurseries, discussion circles. Such a place was called a settlement house.\n\nAll at once I understood: this was the "proper work" I could do.\n\nI brought it back to Chicago. Hull House handed out no money and preached no religion. We opened a kindergarten so working mothers had somewhere to leave their children, a night school teaching immigrants English and trades, a bathhouse, a library, a theater group.\n\nIn the end I did one thing: reconnect the isolated, helpless poor with a cold city.',
      },
      deliverGoal: 'N2 setup — 那年代受教育女人无路可走 (不能当医生律师从政) + Addams 毕业后憋病 + 欧洲伦敦见 settlement house 睦邻之家 + 带回芝加哥 Hull House (幼儿园/夜校/澡堂/图书馆/剧团不发钱不传教) + 把孤立穷人和冷漠城市连起来',
      engagementHook: '我满肚子学问却没处使，差点憋出病来。一个人空有能力却被社会挡在门外——你身边有没有这样被浪费的人?',
      expectsRealAnswer: false,
    },
    {
      id: 'ja-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '住进那条街，我才看清进步时代漂亮口号底下的真实。\n\n我的邻居是这样过日子的：一家七八口挤一间没窗的屋子。父亲在工厂一天干 12 小时，挣的钱不够吃饭。母亲在家里接外包的活，缝纽扣、卷烟，连五六岁的孩子也得帮忙——这叫血汗工厂（sweatshop），有时就在自家床边。\n\n孩子呢？该上学的年纪进了工厂，断了手指、得了肺病。街上没下水道，伤寒、肺结核一来就成片地死。\n\n华盛顿那些改革者在谈反垄断、谈选举、谈大事。可这些大事，怎么变成我邻居孩子嘴里的一口饭、肺里的一口干净空气?中间隔着十万八千里，没人去搭那座桥。\n\n我决定，我来搭。我不光办班子帮人，我还要把我亲眼看见的这些惨状，一笔一笔记下来、算成数据，送到立法者桌上——让坐在远处定政策的人，看见这条街上真实的命。',
        en: 'Only after moving onto that street did I see the truth beneath the Progressive Era\'s fine slogans.\n\nMy neighbors lived like this: seven or eight to a single windowless room. The father worked 12 hours a day in a factory and did not earn enough to eat. The mother took in piecework at home, sewing on buttons, rolling cigars, and even children of five or six had to help. This was the sweatshop, sometimes right beside the family bed.\n\nThe children? At the age they should have been in school they went into the factories, lost fingers, caught lung disease. The streets had no sewers, and when typhoid or tuberculosis came, people died in batches.\n\nThe reformers in Washington talked of antitrust, of elections, of great matters. But how do those great matters become a mouthful of food in my neighbor\'s child, a breath of clean air in their lungs? Between them lay a vast distance, and no one was building the bridge.\n\nI decided I would build it. I would not only run programs to help people; I would write down, case by case, the miseries I saw with my own eyes, turn them into data, and carry them to the lawmakers\' desks, so that those who set policy from far off could see the real lives on this street.',
      },
      deliverGoal: 'N3 setup — 移民邻居真实生活 (七八口一间没窗屋/父亲 12 小时不够吃/母亲在家血汗工厂 sweatshop/孩子帮忙) + 童工断指肺病 + 没下水道传染病 + 华盛顿大事与街上一口饭隔很远没人搭桥 + Addams 决定搭桥 (办班+把惨状记成数据送立法者)',
      engagementHook: '华盛顿在谈反垄断、谈选举这些大事，可这些大事怎么变成穷孩子嘴里的一口饭? 中间隔着十万八千里，没人去搭那座桥——你觉得谁该去搭?',
      expectsRealAnswer: false,
    },
    {
      id: 'ja-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你想推一条法律：禁止工厂雇用童工，限制女工的工时。听起来天经地义，对吧?\n\n可你一开口，三边人同时不满意你。\n\n工厂主骂你：你断我财路，没了便宜童工我成本就高，工厂要倒，工人全失业，到时候你负责?\n\n移民父母也不领情：你不许我孩子做工，可我全家就靠这几个孩子那点工钱活命，你这是要饿死我们。\n\n连一些上流社会的改革者都嫌你：你天天跟那些「肮脏的外国人」混在一起，成何体统。\n\n你站在正中间，四面不讨好。你不是工厂主，不是移民，不是政客——你谁也不是，又想替所有人说话。\n\n这一刻你得想：你坚信「童工是错的」，可那个靠孩子工钱吃饭的母亲，她的难处也是真的。你怎么办——硬推你认的「对」，还是先听懂她为什么反对你?',
        en: 'Now you are me.\n\nYou want to push a law: ban factories from hiring child labor, limit the hours of women workers. It sounds self-evidently right, doesn\'t it?\n\nBut the moment you open your mouth, three sides are unhappy with you at once.\n\nThe factory owners curse you: you cut off my profit; without cheap child labor my costs rise, the factory closes, the workers all lose their jobs, and then who answers for it?\n\nThe immigrant parents are not grateful either: you forbid my child to work, but my whole family lives on the few coins those children earn; you would starve us.\n\nEven some upper-class reformers look down on you: you spend your days mixing with those "filthy foreigners," it is unseemly.\n\nYou stand dead in the middle, pleasing no one on any side. You are not a factory owner, not an immigrant, not a politician. You are no one, and yet you want to speak for everyone.\n\nNow you must think: you firmly believe "child labor is wrong," yet the mother who lives on her child\'s wages has a real hardship too. What do you do, force through the "right" as you see it, or first understand why she opposes you?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 推童工法/限女工工时 + 三边不满 (工厂主骂断财路/移民父母靠孩子工钱反对/上流改革者嫌混外国人) + 站正中间四面不讨好谁也不是却替所有人说话 + 自我拷问 (硬推你认的对还是先听懂母亲为什么反对)',
      engagementHook: '你想禁童工，听起来天经地义——可那个靠孩子工钱吃饭的母亲，她的反对也是真的。你会硬推你认的「对」，还是先听懂她为什么反对你?',
      expectsRealAnswer: false,
    },
    {
      id: 'ja-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我的办法，不是站在高处喊「童工是错的」。是先蹲下去，搞清每一边到底怕什么。\n\n对那个靠孩子工钱活命的母亲，我没光说「别让孩子做工」。我帮她想活路：Hull House 办托儿所，让她能去上班；办夜校教手艺，让她挣得更多；推救济，让家里少一个童工也饿不死。\n\n对工厂主，我不空讲道德。我拿数据：这条街上多少孩子断了手指、多少染了肺病，这些病人最后是谁在养、社会在替你的「便宜劳力」付什么代价。\n\n对政客，我把我邻居的命，翻译成他们听得懂的东西——调查报告、伤亡数字、地图。我和 Hull House 的同伴做了芝加哥第一份贫民区的逐户调查。\n\n这就是调停的真功夫：不是逼一边赢，是先让每一边的难处被另一边看见。1893 年，伊利诺伊州通过了一条限制童工和女工工时的法律——这里面有我一份。\n\n（我帮的那些移民家庭，他们自己怎么过这一关，你换到他们那一遍可以亲眼看。）',
        en: 'My way was not to stand on high and shout "child labor is wrong." It was to crouch down first and learn exactly what each side feared.\n\nTo the mother living on her child\'s wages, I did not only say "don\'t let the child work." I helped her find another way to live: Hull House ran a nursery so she could go to work, a night school teaching trades so she could earn more, and pressed for relief so that one fewer child laborer would not mean the family starved.\n\nTo the factory owner, I did not preach morality into the air. I brought data: how many children on this street had lost fingers, how many caught lung disease, who in the end paid to care for the sick, what your "cheap labor" cost society.\n\nTo the politicians, I translated my neighbors\' lives into something they could understand, survey reports, casualty figures, maps. With my Hull House companions I made the first house-by-house survey of a Chicago slum.\n\nThis is the real craft of mediation: not forcing one side to win, but first making each side\'s hardship visible to the other. In 1893 Illinois passed a law limiting child labor and women\'s working hours, and there was a share of me in it.\n\n(How the immigrant families I helped lived through this, you can see for yourself when you switch to their pass.)',
      },
      deliverGoal: 'N5 story — 调停办法 (蹲下去搞清每边怕什么): 对母亲帮想活路 (托儿所/夜校/救济)/对工厂主拿数据/对政客翻译成报告数字地图 + Hull House 第一份贫民区逐户调查 + 1893 伊利诺伊限童工女工工时法 + 桥到女工 lens',
      engagementHook: '我不站在高处喊「童工是错的」，我先蹲下去搞清每一边到底怕什么。比起「讲对错」，「先听懂各方的难处」是不是更能解决问题?',
      expectsRealAnswer: false,
    },
    {
      id: 'ja-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可有些门，我搭的桥够不着——它们关得太快、太死。\n\n1911 年 3 月 25 日，纽约。一家叫 Triangle 的制衣厂高层起火。厂里几百个工人，大多是十几二十岁的移民女工——跟我 Hull House 街上的那些女孩，是同一类人。\n\n她们逃命时发现，通往楼梯的门，被老板从外面锁死了。锁门，是为了防她们「偷布」、防她们溜出去歇口气。\n\n那天 146 人死了。烧死的，跳楼摔死的。\n\n我做了二十年改革：办托儿所、推童工法、做调查、把命翻译成数据送进立法机关。我以为我在一点一点把桥搭过去。可这场火告诉我一件残忍的事：改革走得太慢了。在它走到那扇门前之前，门后的人已经死了 146 个。\n\n我搭的桥，永远比她们脚下的火，慢一步。\n\n这就是调停者最痛的地方：你尽了全力把两边拉近，可现实里，总有人等不到桥搭好的那一天。',
        en: 'But some doors my bridge could not reach. They shut too fast, too tight.\n\n25 March 1911, New York. The upper floors of a garment factory called Triangle caught fire. Hundreds of workers inside, most of them immigrant women in their teens and twenties, the same kind of girls as those on my Hull House street.\n\nFleeing, they found the door to the stairwell locked from the outside by the owners. The doors were locked to stop them "stealing cloth," from slipping out for a breath.\n\nThat day 146 died. Burned, or fallen from the windows.\n\nI had done twenty years of reform: nurseries, child-labor laws, surveys, translating lives into data carried into the legislature. I thought I was building the bridge across, plank by plank. But that fire told me a cruel thing: reform moves too slowly. Before it reached that door, 146 people behind it were already dead.\n\nThe bridge I built will always be one step slower than the fire beneath their feet.\n\nThis is the mediator\'s deepest pain: you give everything to draw two sides closer, yet in the real world there is always someone who does not live to see the bridge finished.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Triangle 火灾 1911.3.25 (146 死/移民女工跟 Hull House 街上女孩同类/门从外锁死防偷布) + Addams 二十年改革 vs 改革走太慢门后已死 146 + 「我搭的桥永远比她们脚下的火慢一步」+ 桥到女工 lens',
      engagementHook: '我做了二十年改革，以为在一点点把桥搭过去——可这场火告诉我，改革走得太慢，门后的人已经死了 146 个。当你的努力永远慢一步，还值得做吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'ja-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在我得说调停者绕不过的一道难关。\n\n那年代，很多体面的美国人看我的移民邻居，眼神是嫌弃的：脏、吵、信奇怪的教、抢美国人的饭碗。还有一门时髦的「科学」叫优生学，专门论证某些「种族」天生低劣，不该多生、最好别让他们进来。\n\n我反对这套。我相信一个意大利木匠、一个犹太裁缝，只要给他机会，就和任何美国人一样有用、一样有尊严。所以 Hull House 不教移民「丢掉你的旧国家、变成美国人」——我们办意大利语剧团、保留他们老家的手艺和节日。我要的不是把他们「漂白」，是让美国接纳他们本来的样子。\n\n但难关在这儿：我替移民说话，可我毕竟是个有钱、有学问、说一口标准英语的白人女士。我「替」他们说，会不会其实是我在替他们「决定」?我搭的桥，会不会还是按我这边的样子搭的?\n\n调停者最容易犯的错，就是把「我为你好」当成了「我懂你要什么」。',
        en: 'Now I must speak of a gate a mediator cannot get around.\n\nIn that era many respectable Americans looked at my immigrant neighbors with disgust: dirty, loud, following strange faiths, taking Americans\' jobs. There was also a fashionable "science" called eugenics, devoted to arguing that certain "races" were inferior by birth, should not breed much, and were best kept from entering at all.\n\nI opposed all of that. I believed an Italian carpenter, a Jewish tailor, given the chance, were as useful and as worthy of dignity as any American. So Hull House did not teach immigrants to "throw away your old country and become American." We ran an Italian-language theater, kept the crafts and festivals of their homelands. I wanted not to "bleach" them but to make America accept them as they were.\n\nBut here is the gate: I spoke for the immigrants, yet I was, after all, a rich, educated white lady who spoke standard English. When I "spoke for" them, was I in fact "deciding for" them? Was the bridge I built still built to my own design?\n\nThe mistake a mediator most easily makes is to take "I mean well for you" for "I understand what you want."',
      },
      deliverGoal: 'N7 story — 移民被嫌弃 + eugenics 优生学论证某些种族天生低劣不该进来 + Addams 反对 (移民有机会就一样有尊严/Hull House 不漂白移民保留母语剧团手艺节日) + 但难关: 有钱有学问的白人女士替移民说会不会是替他们决定 + 「我为你好≠我懂你要什么」',
      engagementHook: '我替移民说话，可我毕竟是个有钱有学问的白人女士——我「替」他们说，会不会其实是我在替他们「决定」? 「我为你好」和「我懂你要什么」，是一回事吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'ja-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我还有一个立场，让我从「人人爱戴」变成「人人骂我」。\n\n1914 年，第一次世界大战打起来。整个美国渐渐被战争热情点燃：参军是光荣，反战是懦弱、是叛国。\n\n我反战。我做了一辈子的事，就是让吵到要打的人坐下来谈。在我看来，国与国之间也该这样——用谈判，不用枪炮。我跑去欧洲，参加国际妇女和平会议，试着劝交战国停手。\n\n报纸翻脸了。昨天还把我捧成「美国最受尊敬的女人」，今天骂我是危险的、不爱国的人。我从万人敬仰，跌到处处挨骂。\n\n我没改口。我相信：调停者真正的考验，不是在大家都同意你的时候坚持立场，而是在全世界都反对你、连你的盟友都离你而去的时候，你还站不站得住。\n\n1931 年，世界终于回过头来——我拿了诺贝尔和平奖。但那时候，离我最孤立的那些年，已经过去很久了。',
        en: 'I held one more position that turned me from "beloved by all" into "cursed by all."\n\nIn 1914 the First World War broke out. All of America was slowly set alight with the fever of war: to enlist was glory, to oppose the war was cowardice, was treason.\n\nI opposed the war. The work of my whole life had been to sit people who were ready to fight down to talk. To me, nations should do the same, negotiate, not shoot. I went to Europe, joined an international women\'s peace congress, and tried to persuade the warring nations to stop.\n\nThe newspapers turned. Yesterday they had crowned me "the most respected woman in America"; today they cursed me as dangerous, unpatriotic. I fell from the admiration of thousands to being cursed on every side.\n\nI did not take it back. I believed the mediator\'s true test is not holding your ground when everyone agrees with you, but whether you can still stand when the whole world is against you and even your allies have left you.\n\nIn 1931 the world finally turned back to me: I won the Nobel Peace Prize. But by then the years of my deepest isolation were long past.',
      },
      deliverGoal: 'N8 story — 1914 一战 + 美国战争热情 (参军光荣反战叛国) + Addams 反战 (国与国也该谈判不用枪炮/去欧洲国际妇女和平会议) + 从最受尊敬女人跌到处处挨骂 + 没改口「调停者真正考验是全世界反对时还站不站得住」+ 1931 诺贝尔和平奖',
      engagementHook: '昨天他们把我捧成「最受尊敬的女人」，今天骂我不爱国——只因为我说战争应该用谈判解决。当全世界都反对你，连盟友都离开，你还会坚持自己认对的事吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'ja-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1935 年死了。回头看，Hull House 这种地方，到底改变了什么?\n\n我做的事，后来长成了一整门职业，叫社会工作（social work）：专门有人，去连接孤立无援的人和能帮他们的系统。今天美国每个城市的社工，根子都在 Hull House 这样的睦邻之家。\n\n我和同伴的那些贫民区调查，后来成了一整套用数据推动立法的方法——不再靠喊口号，靠摆事实。童工法、工厂安全法、女性工时法，背后都有这种调查的影子。\n\n（移民安置这件事，到今天还在拉扯：一边是 Hull House 这种「接纳、安置」，一边是同年代把人挡在国门外的排外浪潮。）\n\n但我得诚实：我搭了一辈子桥，进步时代结束了，移民还在受苦，工人还在死。我没能让世界变好。\n\n调停者改不了潮水的方向。他能做的，是在潮水里，多救起几个人，多让两岸的人，彼此看见一点。',
        en: 'I died in 1935. Looking back, what did a place like Hull House actually change?\n\nWhat I did later grew into a whole profession, social work, people whose job is to connect the isolated and helpless with the systems that can help them. The social workers in every American city today have their root in settlement houses like Hull House.\n\nThe slum surveys my companions and I made grew into a whole method of driving legislation with data, no longer by shouting slogans but by laying out facts. Child-labor laws, factory safety laws, women\'s hours laws, all carry the shadow of that kind of survey.\n\n(The matter of settling immigrants is still pulling at us today: on one side the "accept and settle" of a Hull House, on the other the exclusion wave of the same era that kept people out at the border.)\n\nBut I must be honest: I built bridges my whole life, the Progressive Era ended, and immigrants still suffered, workers still died, eugenics was still being written into law. I could not make the world good all at once.\n\nA mediator cannot change the direction of the tide. What he can do is, within the tide, pull a few more people out, and let the two banks see each other a little more.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Hull House 长成 social work 社会工作职业 + 贫民区调查→用数据推立法方法 (童工法/工厂安全法/女性工时法) + 跨 Topic 锚 (移民安置 vs 排华排外相反的力) + 诚实: 没能让世界一下变好 + 「调停者改不了潮水方向但能多救几个多让两岸彼此看见」',
      engagementHook: '我搭了一辈子桥，可进步时代结束了，移民还在受苦，工人还在死——我没能让世界一下子变好。改不了潮水方向的努力，算不算白费?',
      expectsRealAnswer: false,
    },
    {
      id: 'ja-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是真正把改革落了地的人。华盛顿的大人物谈反垄断、谈选举，可我是那个搬进贫民区、和移民同吃同住、把他们的命翻译成立法者听得懂的数据的人。社会工作这门职业、一批保护工人和孩子的法律，都从我这儿长出来。我没有权力，却让进步时代真的碰到了最底层的人。\n\n另一种说法：我终究是个居高临下的好心人。我替移民说话，可我是个有钱有学问的白人女士，我「替」他们决定了什么对他们好。我搭的桥，比 Triangle 那扇门后的火慢一步，146 个跟我邻居一样的女工，没等到我的改革。我尽了全力，可底层的人还是在我够不着的地方死去。\n\n这两边不是「功劳加局限」。是同一种处境的两面——一个有良心、有能力、却终究站在外面的人，能做到的极限，和做不到的无奈。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the one who truly brought reform down to the ground. The great men in Washington talked of antitrust, of elections, but I was the one who moved into the slum, ate and lived among the immigrants, and translated their lives into data the lawmakers could understand. The profession of social work, a body of laws protecting workers and children, all grew from me. I had no power, yet I made the Progressive Era actually touch the people at the very bottom.\n\nThe other view: in the end I was a kind-hearted person looking down from above. I spoke for the immigrants, but I was a rich, educated white lady, and I "decided for" them what was good for them. The bridge I built was one step slower than the fire behind the Triangle door, and 146 women workers, like my own neighbors, did not live to see my reform. I gave everything, and still the people at the bottom died in a place I could not reach.\n\nThese are not "credit and limitation." They are two faces of one situation, the limit of what a person with conscience and ability, yet standing in the end on the outside, can do, and the helplessness of what she cannot.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (真正把改革落地/搬进贫民区同吃住/把命翻成数据/长出社会工作和保护法/没权力却让进步碰到最底层) / 另一种说法 (居高临下好心人/有钱白人女士替移民决定/桥比火慢一步 146 没等到) / 同一种处境两面 / 想 30 秒',
      engagementHook: '真正把改革落地的人，和居高临下的好心人——是同一种处境的两面。两边都站得住，你的 30 秒到了，你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'ja-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个调停者?\n\n一个没有权力的女人，搬进最穷的移民区，办起 Hull House，让进步时代那些遥远的大改革，第一次真的碰到了底层人的生活；可她终究是个站在外面的好心人，她搭的桥，慢过了 Triangle 那扇门后的火。把「她做到的」和「她没能做到的」放在同一个天平上，你怎么称?\n\n再想一步。今天你身边，有没有一群「没有声音」的人——新来的同学、不会说本地话的人、被大家默认「不重要」的人? 有没有人替他们搭桥，让他们被看见?\n\n那时候，你会做那个搬过去、坐到他们身边、替他们把话翻译给有权的人听的人吗? 还有，你会怎么提醒自己：别把「我为你好」，错当成「我替你决定」?',
        en: 'Having walked my whole life, how would you judge a mediator like this?\n\nA woman with no power moved into the poorest immigrant district, opened Hull House, and made the Progressive Era\'s distant great reforms touch the lives of those at the bottom for the first time; yet in the end she was a kind-hearted person standing on the outside, and the bridge she built was slower than the fire behind the Triangle door. Put "what she did" and "what she could not do" on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there a group with "no voice", a newly arrived classmate, someone who cannot speak the local language, people everyone quietly treats as "unimportant"? Is anyone building a bridge for them, making them seen?\n\nWhen that happens, will you be the one who moves over, sits down beside them, and translates their words for those with power? And how will you remind yourself not to mistake "I mean well for you" for "I decide for you"?',
      },
      deliverGoal: 'N11 close — 评价调停者 (无权力女人让大改革碰到底层 vs 站外面好心人桥慢过火 同一天平) + transfer「今天你身边没有声音的人 (新同学/不会本地话/被默认不重要)」+ 你会搬过去替他们翻译吗/怎么提醒别把我为你好当我替你决定',
      engagementHook: '她让大改革第一次碰到底层人，可她的桥又慢过了那场火。你会怎么评价这样一个调停者? 今天你身边那些「没有声音」的人，你会替他们搭桥吗?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Triangle Fire Worker (receiving-end) — DEFAULT — composite
// ═══════════════════════════════════════════════════════════════════════

export var triangleFireWorkerLens = {
  id: 'triangle-fire-worker-receiving-end',
  name: 'A Triangle Factory Worker',
  nameCn: '一个 Triangle 工厂女工',
  role: 'receiving-end',
  perspectiveTag: 'locked-door-worker',
  icon: '🔥',
  description: {
    cn: '她是 1911 年 3 月 25 日下午快五点那场火里的人（合成角色，名字和年龄是叙事补充，确证的是这场火和 146 个死者）。她十几岁，几年前跟家人从欧洲坐船来到纽约，每天在 Triangle 制衣厂踩缝纫机到天黑。那天下午她准备收工回家，八楼起火，她和几百个工友冲向楼梯口，门锁着，从外面锁的。这一遍让你跟她站在那扇锁着的门后面往外看，进步时代漂亮的口号到底有没有能伸到这门里的那只手。',
    en: 'She is one of the people in the fire just before five on the afternoon of 25 March 1911 (a composite figure; what is confirmed is the fire and its 146 dead). In her teens, she came by ship from Europe a few years before, and treads a sewing machine at the Triangle garment factory until dark each day. That afternoon, getting ready to go home, the eighth floor caught fire; she and hundreds of workmates rushed to the stairwell, and the door was locked from the outside. This pass puts you behind that locked door with her, looking out, to see whether the fine slogans of the Progressive Era have any hand that can reach in.',
  },
  storyboard: [
    {
      id: 'tw-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我想先说清楚，我是谁。我是一个合成出来的人——一个名字、一个年龄，是讲故事补上的。但我死的那场火，和跟我一起死的 146 个人，是真的。\n\n1911 年 3 月 25 日，星期六，下午快五点，纽约。一栋十层楼，高层是一家叫 Triangle 的制衣厂。几百个工人正准备收工回家，大多是十几二十岁的女孩，像我一样，是几年前坐船来的移民。\n\n然后，八楼起火了。\n\n我们冲向楼梯口。门——锁着。从外面锁的。\n\n这一遍，你站在我这里看进步时代。不是从拆 trust 的总统那边，也不是从办 Hull House 的好心女士那边。你从那扇锁着的门后面，往外看。',
        en: 'Let me make one thing clear first: who I am. I am a composite, a name and an age supplied by the telling. But the fire I died in, and the 146 people who died with me, were real.\n\n25 March 1911, a Saturday, just before five in the afternoon, New York. A ten-story building, with a garment factory called Triangle on its upper floors. Hundreds of workers were getting ready to go home, most of them girls in their teens and twenties, like me, immigrants who had come by ship a few years before.\n\nThen the eighth floor caught fire.\n\nWe rushed to the stairwell. The door was locked. Locked from the outside.\n\nThis pass, you stand where I stand and look at the Progressive Era. Not from the side of the president who broke trusts, nor from the side of the kind lady who ran Hull House. You look out from behind that locked door.',
      },
      deliverGoal: 'N1 hook (gold-standard) — composite 声明 (名字年龄是补的/火和 146 死是真的) + 1911.3.25 周六下午五点纽约十层楼 Triangle 制衣厂 + 几百女工大多十几二十岁移民 + 八楼起火冲向楼梯门锁着从外面锁 + 这一遍从锁着的门后往外看',
      engagementHook: '我们冲向楼梯口，门——锁着，从外面锁的。你试着想象一下：发现唯一的出口被人从外面锁死，是什么感觉?',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我怎么会站在那台缝纫机前，你才懂这场火是怎么积出来的。\n\n几年前，我家在欧洲过不下去了——有的是因为穷，有的是因为我们是犹太人、被人追打。我们卖掉能卖的，挤上一艘开往美国的船，在底舱里晕了好多天，才看见纽约港。\n\n到了纽约，我们住进下东区——一条街上挤满了像我们一样的移民。一家好几口挤一间小屋，没热水，厕所是楼里十几户共用的。\n\n爸妈年纪大、不会英语，找不到好活。家里要吃饭，我十几岁就进了制衣厂。每天天不亮出门，踩缝纫机踩到天黑，一周干六天。挣的钱，几乎全交回家。\n\n美国，是我们逃来的「新生活」。可这新生活的第一站，是一台从早踩到晚的缝纫机。\n\n这就是进步时代那些漂亮口号底下，一个移民女孩真实的每一天。',
        en: 'First, how I came to stand at that sewing machine, so you understand how this fire built up.\n\nA few years before, my family could no longer live in Europe, some of us because we were poor, some because we were Jews and were hunted and beaten. We sold what we could, crowded onto a ship bound for America, were seasick in the hold for many days, and at last saw New York harbor.\n\nIn New York we moved into the Lower East Side, a street packed with immigrants like us. Several to a small room, no hot water, a toilet shared by a dozen families on the floor.\n\nMy parents were older, spoke no English, and could not find good work. The family had to eat, so in my teens I went into a garment factory. Out the door before dawn, treading the sewing machine until dark, six days a week. Almost all I earned I handed back to the family.\n\nAmerica was the "new life" we had fled toward. But the first stop of that new life was a sewing machine I trod from morning to night.\n\nThis was the real daily life of one immigrant girl, beneath the fine slogans of the Progressive Era.',
      },
      deliverGoal: 'N2 setup — 移民来由 (欧洲过不下去/穷或犹太被追打/卖东西挤船底舱晕船到纽约港) + 下东区一间小屋多人住没热水共用厕所 + 父母老不会英语 + 她十几岁进制衣厂踩缝纫机到天黑一周六天钱交回家 + 进步时代口号下移民女孩真实每天',
      engagementHook: '美国是我们逃来的「新生活」，可这新生活的第一站，是一台从早踩到晚的缝纫机。你想象中的「移民去美国追梦」，和我说的，差多远?',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我得说说那个工厂，它本身就是一个等着出事的地方。\n\n制衣厂在楼的高层，一层挤几百个工人，缝纫机一台挨一台，过道窄得侧身才能过。地上、桌上，到处是碎布、棉絮、纸样——全是一点就着的东西。\n\n车间里很多人抽烟，火星掉进碎布堆里，没人当回事。\n\n老板为什么把通往楼梯的门从外面锁上? 因为他们怕工人「偷布料」，怕我们没经允许就溜出去歇口气、上厕所。下班时，每个人要排队，从一道窄门出去，让工头检查包里有没有夹带。\n\n你听明白了吗? 在老板眼里，防我们「偷」一块布、偷一分钟懒，比我们几百条命更要紧。\n\n那扇锁着的门，不是哪天忘了开。它天天锁着，是这家工厂运转的一部分。\n\n火还没烧起来，杀人的条件，早就一样一样备齐了。',
        en: 'I must speak of the factory itself; it was a place waiting for disaster.\n\nThe garment shop was on the upper floors, hundreds of workers packed onto one floor, sewing machines crammed side by side, the aisles so narrow you had to turn sideways to pass. On the floor and the tables, everywhere, scraps of cloth, lint, paper patterns, all things that catch fire at a spark.\n\nMany in the shop smoked, sparks dropped into the scrap heaps, and no one took it seriously.\n\nWhy did the owners lock the door to the stairwell from the outside? Because they feared the workers would "steal cloth," feared we would slip out without leave for a breath or the toilet. At quitting time everyone had to line up and go out through one narrow door so the foreman could check our bags for anything smuggled.\n\nDo you understand? In the owners\' eyes, stopping us from "stealing" a scrap of cloth, a minute of idleness, mattered more than our hundreds of lives.\n\nThat locked door was not forgotten open one day. It was locked every day; it was part of how the factory ran.\n\nBefore the fire ever started, the conditions for killing were already laid out, one by one.',
      },
      deliverGoal: 'N3 setup — 工厂等着出事 (高层挤几百人/缝纫机一台挨一台过道窄/碎布棉絮纸样到处一点就着/有人抽烟火星没人管) + 门从外锁的原因 (怕偷布怕溜出去歇/下班排队窄门查包) + 防偷一块布比几百条命要紧 + 门天天锁是工厂运转一部分 + 杀人条件早备齐',
      engagementHook: '在老板眼里，防我们偷一块布、偷一分钟懒，比我们几百条命更要紧。当一个地方把「防你」看得比「你的命」还重，会发生什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。但先回到火灾之前一年多。\n\n你和工友早就知道这工厂不安全。1909 年冬天，纽约成千上万个像你一样的制衣女工，一起罢了工。这场大罢工，后来被叫做「两万人起义」。\n\n你们的要求很朴素：少一点工时、安全一点的车间、别再把门锁上。\n\n罢工很苦。冬天站在厂门外，没工资，被雇来的打手推搡、被警察抓。有的工厂松了口，答应改善。\n\n可你们 Triangle 的老板，是最硬的那批。他们宁可花钱雇人对付罢工，也不肯改条件。罢工结束了，门，照样锁着。\n\n这一刻你得想：你们用尽办法喊过、争过、罢过工了。你们把该说的都说了，该做的都做了。可那扇门，还是锁着。\n\n当你已经为自己的安全拼过命，而有权的人就是不听——你还能怎么办?',
        en: 'Now you are me. But go back first to more than a year before the fire.\n\nYou and your workmates had long known this factory was unsafe. In the winter of 1909, tens of thousands of garment women like you across New York went on strike together. The great strike was later called the "Uprising of the Twenty Thousand."\n\nYour demands were plain: fewer hours, a safer shop, no more locking the doors.\n\nThe strike was bitter. Standing outside the factory gate in winter, no wages, shoved by hired thugs, arrested by police. Some factories gave in and promised to improve.\n\nBut the owners of your Triangle were among the hardest. They would sooner pay men to break the strike than change the conditions. The strike ended, and the door, as before, stayed locked.\n\nNow you must think: you used every means, you shouted, you fought, you struck. You said all there was to say, did all there was to do. And still that door stayed locked.\n\nWhen you have already risked your life for your own safety, and those with power simply will not listen, what else can you do?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 火前一年多 + 1909 冬两万人起义大罢工 (成千上万制衣女工) + 朴素要求 (少工时/安全车间/别锁门) + 罢工苦 (冬天没工资被打手推被警察抓/有厂松口) + Triangle 老板最硬宁雇人对付不改 + 门照样锁 + 自我拷问 (拼过命有权的人不听还能怎么办)',
      engagementHook: '我们罢过工、喊过、争过，把该做的都做了——可那扇门还是锁着。当你已经为自己的安全拼过命，而有权的人就是不听，你还能怎么办?',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '回到 1911 年 3 月 25 日，那个下午。\n\n快五点，要收工了。八楼先起的火——一堆碎布,一点火星,几秒钟就蹿成一片。\n\n火顺着碎布、纸样、挂着的成衣，像活的一样往上爬。八楼的人有的从一道楼梯逃了出去，有人按响了警报。\n\n我在更高的楼层。我们冲向通往楼梯的那扇门。\n\n锁着。\n\n有人砸门、撞门、哭喊。门那么厚，锁那么牢，几十个人挤在门口，谁也出不去。另一边有一道逃生用的铁梯，太旧太窄，爬上去的人太多，它当场塌了。\n\n电梯工冒死来回开了几趟，能塞的塞，可几百个人，电梯一次能装几个?\n\n烟越来越浓，火越来越近。门后的我们，被困在十几层的高空，下面是火，外面是锁。\n\n那一刻，没有总统能救我们，没有 Hull House 能救我们。进步时代所有漂亮的改革，没有一条，能打开我们面前这一扇门。',
        en: 'Back to 25 March 1911, that afternoon.\n\nNearly five, time to quit. The fire started on the eighth floor, a heap of scraps, a single spark, and in seconds it leapt into a sheet of flame.\n\nThe fire climbed up the scraps, the paper patterns, the finished garments hanging there, alive, climbing. Some on the eighth floor escaped down one stairway; someone rang an alarm.\n\nI was on a higher floor. We rushed to the door to the stairwell.\n\nLocked.\n\nPeople pounded the door, threw themselves at it, cried out. The door was so thick, the lock so firm, dozens crushed against it and no one could get out. On the other side was a fire escape, an iron ladder too old and too narrow, and with too many on it, it collapsed on the spot.\n\nThe elevator operators ran the cars up and down at the risk of their lives, packing in all they could, but with hundreds of people, how many can an elevator carry at a time?\n\nThe smoke grew thicker, the fire nearer. We behind the door were trapped a dozen floors up, fire below, a lock outside.\n\nIn that moment no president could save us, no Hull House could save us. Of all the fine reforms of the Progressive Era, not one could open the single door in front of us.',
      },
      deliverGoal: 'N5 story — 1911.3.25 下午快五点 + 八楼起火碎布火星几秒蹿开 + 火顺碎布纸样成衣往上爬 + 高楼层冲向门锁着 + 砸门撞门哭喊出不去 + 逃生铁梯太旧太窄塌了 + 电梯工冒死开几趟装不下几百人 + 烟浓火近门后困高空 + 没总统没 Hull House 能救/进步时代没一条改革能开这扇门',
      engagementHook: '那一刻，没有总统能救我们，没有 Hull House 能救我们——进步时代所有漂亮的改革，没有一条能打开我们面前这一扇门。你觉得，问题出在哪里?',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '门后没有出路，窗口成了最后一个选择。\n\n那天 146 个人死了。烧死的、窒息的，还有很多，是从八楼、九楼、十楼的窗口跳下去的。下面街上挤满了人，眼睁睁看着一个又一个女孩落下来，连接都没法接。消防队的云梯，够不到那么高。\n\n你站在窗口往外看：外面是纽约的天空、是自由的城市。里面是火。脚下，是把人当成「随时可换的便宜劳力」的整个系统。\n\n那扇被从外面锁死的门，不只是一扇木门。它是一句话：你这条命，比一块布还不值钱。\n\n\n\n同样是一扇「门」：总统在华盛顿拆开一扇象征垄断的门，被全国当英雄；我们在纽约，死在一扇真实锁着的门后，连名字都没几个被记住。',
        en: 'With no way out behind the door, the window became the last choice.\n\nThat day 146 people died. Burned, suffocated, and many of them jumped from the windows of the eighth, ninth, and tenth floors. The street below was packed with people watching one girl after another fall, unable even to catch them. The fire ladders could not reach so high.\n\nYou stand at the window and look out: outside is the New York sky, the free city. Inside is fire. Beneath your feet is a whole system that treated people as "cheap labor to be swapped at any time."\n\nThat door locked from the outside was not only a wooden door. It was a sentence: your life is worth less than a bolt of cloth.\n\n(If you have run the gilded-age topic, you will recognize this arithmetic, the steel king and the oil king pressing workers\' lives to the floor to push profit to the ceiling. The owners who locked our door were a smaller version of the same logic. And there was a "science" called eugenics, devoted to arguing that immigrants like us were "inferior by birth"; run the scientific-revolution topic and you will recognize this wrong turn. In that telling we were never among "the people who deserved protecting" at all.)\n\nThe same word, "door." A president in Washington broke open a door symbolizing monopoly and was hailed by the nation as a hero; we in New York died behind a real locked door, and barely a few of our names were remembered.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 146 死 (烧死窒息/从八九十楼窗口跳下/街上接不住/云梯够不到) + 窗外自由城市窗内火脚下把人当便宜劳力的系统 + 锁门=「你命比一块布不值钱」+ 跨 Topic 锚 (gilded-age Carnegie 利润最高把命压最低同逻辑 + scientific-revolution 优生学论证移民天生低劣不算该被保护的人) + 对位总统拆象征之门当英雄 vs 女工死真实锁门后名字没几个记住',
      engagementHook: '同样是一扇「门」：总统在华盛顿拆开一扇象征垄断的门被当英雄；我们在纽约死在一扇真实锁着的门后，连名字都没几个被记住。为什么有的「门」全国都看见，有的「门」没人看见?',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在把镜头拉到火之后。我死了，可这场火，逼出了一些东西。\n\n那天街上有成千上万的纽约人，亲眼看着女孩从高楼落下。这一幕太惨，没人能装作没看见。报纸登满了，全城愤怒。\n\n几天后，几万人冒雨为我们送葬，街道两边站满了人。\n\n人们要的不只是哀悼，是追问：为什么门是锁着的? 为什么没人管这种工厂? 那两个老板被告上法庭——可结果，他们被判无罪。法律那时候，还保不了我们这种人。\n\n但有一个人，把这件事接住了。纽约州派人成立了一个工厂调查委员会，一家一家工厂去查，记下了几千页。后来纽约通过了三十多条新法律：工厂的门必须能从里面打开、必须有逃生通道、必须有灭火设备、限制女工和童工的工时。\n\n你看出来了吗? 这些保命的规矩，不是哪个好心人提前想到的。是我们 146 个人，用命换来的。',
        en: 'Now pull the lens to after the fire. I died, but the fire forced some things into being.\n\nThat day tens of thousands of New Yorkers watched with their own eyes as girls fell from the high floors. The sight was too terrible; no one could pretend not to have seen. The newspapers were full of it, and the whole city raged.\n\nDays later, tens of thousands marched in the rain at our funeral, the streets lined on both sides.\n\nPeople wanted more than mourning; they wanted answers: why was the door locked? Why did no one regulate such factories? The two owners were taken to court, and the result was that they were found not guilty. The law, in those days, still could not protect people like us.\n\nBut one thing took this up. New York State set up a Factory Investigating Commission that went factory by factory, recording thousands of pages. New York then passed more than thirty new laws: factory doors must open from the inside, there must be escape routes, there must be fire equipment, and the hours of women and children were limited.\n\nDo you see it? These life-saving rules were not thought up ahead of time by some kind soul. They were bought with the lives of us 146.',
      },
      deliverGoal: 'N7 story — 火之后 (成千上万纽约人亲眼看女孩落下/太惨没人能装没看见/报纸登满全城愤怒/几万人冒雨送葬) + 追问为什么锁门为什么没人管 + 两老板被告判无罪 (法律保不了我们这种人) + 纽约 Factory Investigating Commission 一家家查几千页 + 三十多条新法 (门从里面开/逃生通道/灭火设备/限女工童工工时) + 保命规矩是 146 人用命换来的',
      engagementHook: '那两个老板被告上法庭，结果被判无罪——法律那时候还保不了我们这种人。可后来那些保命的工厂法，是我们 146 个人用命换来的。一条好规矩，要死多少人才换得来?',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得说一件让我难受的事：我们死了，才被人看见。\n\n罢工的时候，我们一万、两万人站在厂门外喊「给我们安全的工厂」——多数体面人当我们是「闹事的外国佬」，没人真听。\n\n我们一个一个地说「门别锁了」，没人听。\n\n可一旦我们一天死了 146 个，从高楼摔在街上，全城就哭了，立法者就动了，三十多条法律就出来了。\n\n这让我心里发凉：原来对我们这种没权没钱的移民来说，「说话」是没用的，只有「死给你看」才有用? 我们活着争取的，没人理；我们死了，才换来一点改变。\n\n这就是站在锁着的门后面，看到的进步时代真相：进步不是均匀地洒下来的。有声音的人、有钱有票的人，先被照顾到。像我这样没声音的人，常常要先死一批，改革才肯走到我们这扇门前。\n\n这个代价，本来不该由我们来付。',
        en: 'I must say a thing that pains me: we had to die before we were seen.\n\nWhen we struck, ten, twenty thousand of us standing outside the factory gates crying "give us a safe factory," most respectable people took us for "foreign troublemakers," and no one truly listened.\n\nOne by one we said "stop locking the doors," and no one listened.\n\nBut once 146 of us died in a single day, falling from high floors onto the street, the whole city wept, the lawmakers moved, more than thirty laws came out.\n\nThis chilled me: so for immigrants like us, with no power and no money, "speaking" was useless, and only "dying for you to see" worked? What we fought for while alive, no one heeded; only by dying did we win a little change.\n\nThis is the truth of the Progressive Era seen from behind a locked door: progress did not fall evenly. Those with a voice, with money and a vote, were cared for first. People with no voice, like me, often had to lose a batch of lives before reform would walk up to our door.\n\nThis price should never have been ours to pay.',
      },
      deliverGoal: 'N8 story — 死了才被看见 (罢工时一两万喊安全被当闹事外国佬没人听/一个个说别锁门没人听/可一天死 146 全城哭立法者动三十多条法) + 心凉 (没权没钱移民「说话」没用只有「死给你看」才有用/活着争取没人理死了才换改变) + 锁门后看到的进步时代真相 (进步不均匀有声音的先被照顾没声音的要先死一批) + 这代价本不该我们付',
      engagementHook: '我们活着喊「给我们安全的工厂」，没人听；我们一天死了 146 个，全城就哭了，法律就出来了。为什么有些人非要「死给你看」，才会被听见?',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉到很远很远的以后。\n\n我们换来的那些工厂法——门要能从里开、要有逃生通道、要有灭火设备——后来传遍了全美国，又传到世界各地。今天你走进任何一栋大楼，那些标着「紧急出口」的、永远不上锁的门，那些墙上的灭火器和疏散图——根子里，有 1911 年我们这扇锁着的门。\n\n（这条用人命换工厂安全的路，不是从我们开始的。我们 146 个，是这条血路上的一段。）\n\n我想让你记住的，不是「美国后来变好了」这个结局。是这个结局的代价：每一条让你今天活得更安全的规矩，背后可能都压着一批没等到它的人。\n\n进步是真的。但进步从来不是免费的，也从来不是先给最需要它的人。\n\n下次你看见一扇标着「紧急出口」的门，能从里面轻轻一推就开——想一想那扇 1911 年锁着的门，想一想我们。',
        en: 'Pull the lens to a time very, very far ahead.\n\nThe factory laws we bought, doors that open from inside, escape routes, fire equipment, later spread across all of America and on around the world. Today, walk into any building, and those doors marked "emergency exit" that are never locked, the extinguishers and evacuation maps on the walls, at their root is our locked door of 1911.\n\n(This road of buying factory safety with lives did not begin with us. We 146 are one stretch of that bloody road.)\n\nWhat I want you to remember is not the ending, "America got better later." It is the price of that ending: behind every rule that keeps you safer today may be pressed a batch of people who did not live to see it.\n\nProgress is real. But progress was never free, and never came first to those who needed it most.\n\nNext time you see a door marked "emergency exit" that opens at a light push from inside, think of that door locked in 1911, think of us.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 工厂法传遍全美又传世界 (门从里开/逃生通道/灭火设备) + 今天大楼紧急出口不上锁的门/灭火器/疏散图根在 1911 锁门 + 跨 industrial-revolution Topic 锚 (英国曼彻斯特童工先死很多才有人管/146 是血路一段) + 记住的不是「美国变好」是代价 (每条保命规矩背后压着没等到的人) + 进步是真的但从不免费也不先给最需要的人',
      engagementHook: '下次你看见一扇标着「紧急出口」、能从里面轻轻一推就开的门——它的根，是 1911 年我们这扇锁着的门。每一条让你今天更安全的规矩，背后是不是都压着一批没等到它的人?',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这段短短的命，再看进步时代，两种说法都站得住。\n\n一种说法：进步时代终究是进步的。我们 146 个人没有白死——这场火逼出了三十多条工厂安全法，逼出了一整套保护工人的制度，一直传到今天每一栋楼的紧急出口。一个原本把工人当便宜劳力的国家，开始学着把工人当人。从这个角度，我们的死，推了历史一把。\n\n另一种说法：进步时代是写给有声音的人看的。我们活着罢工、喊话、争取，没人听；我们必须先死 146 个，改革才肯走到我们门前。锁我们门的老板被判无罪，论证我们「天生低劣」的优生学还在立法。在那套「进步」里，我们从一开始就不算「该被保护的人」。\n\n这两边不是「光明加阴影」。是同一段历史的两面——同样的「进步」，对屋外的人是凯歌，对锁着的门后的人，是用命垫出来的台阶。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my short little life, look again at the Progressive Era. Both views stand.\n\nOne view: the Progressive Era was, in the end, progress. We 146 did not die in vain; the fire forced out more than thirty factory safety laws, forced out a whole system protecting workers, carried down to the emergency exit in every building today. A country that had treated workers as cheap labor began to learn to treat workers as people. From this angle, our deaths pushed history forward.\n\nThe other view: the Progressive Era was written for those with a voice. While alive we struck, we cried out, we fought, and no one listened; 146 of us had to die first before reform would walk up to our door. The owners who locked our door were found not guilty, and the eugenics that argued we were "inferior by birth" was still being written into law. In that "progress" we were never, from the start, among "the people who deserved protecting."\n\nThese are not "light and shadow." They are two faces of one history, the same "progress," a song of triumph for those outside, and for those behind the locked door, a stair built up out of lives.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (终究是进步/146 没白死逼出三十多条工厂安全法和保护工人制度传到今天紧急出口/开始把工人当人/我们的死推了历史一把) / 另一种说法 (写给有声音的人看/活着争取没人听必须先死 146 才动/老板判无罪优生学还在立法/我们从不算该被保护的人) / 同一段历史两面 / 想 30 秒',
      engagementHook: '一种说法：我们 146 个人没白死，推了历史一把。另一种说法：进步是写给有声音的人看的，我们必须先死才被听见。两种说法都站得住，你的 30 秒到了，你怎么看?',
      expectsRealAnswer: true,
    },
    {
      id: 'tw-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这段短短的命——一个坐船来的移民女孩，一台从早踩到晚的缝纫机，一场罢工，一扇从外面锁死的门，146 条人命——你会怎么评价那样一个时代?\n\n一个时代，一边拆垄断、护森林、改宪法，喊着「进步」；一边把跟我一样的人，锁在工厂里活活烧死，事后还判老板无罪。你会说它是进步，还是说它的进步从来没算上我们? 你怎么评?\n\n不过先记住：你这一遍，听的只是一个被锁在工厂里的移民女工。那个举大棒打垄断却也信白人更优越、要帝国的西奥多·罗斯福、那个住进移民区把谁也不听谁的两边拉到一张桌上的简·亚当斯，各有各的说法——换个视角再走一遍，你会听见他们怎么讲这同一段历史，也会看看你刚才的判断站不站得住。\n\n再想一步。今天你身边，有没有人在「说话没人听」的处境里——他们提的问题被当成「闹事」，他们的难处被当成「不重要」，非得出大事了，大家才回头看一眼?\n\n那时候，你会怎么做? 你会等到「出了大事」才听见他们，还是会在他们还在好好说话的时候，就先停下来，认真听一次?',
        en: 'Having walked my short little life, an immigrant girl who came by ship, a sewing machine trodden from morning to night, a strike, a door locked from the outside, 146 lives, how would you judge an era like that?\n\nAn era that on one side broke monopolies, guarded forests, amended the Constitution, crying "progress," and on the other locked people like me in a factory to burn alive, and afterward found the owners not guilty. Would you call it progress, or say its progress never counted us at all? How do you judge it?\n\nBut first, remember: this pass, you heard only an immigrant girl locked in a factory. Theodore Roosevelt, who swung a big stick at the trusts yet also believed the white race superior and wanted an empire, and Jane Addams, who moved into the immigrant district and pulled both sides who would not listen to the same table, each have their own case. Run it again through another lens and you will hear how they tell this same history, and see whether the judgment you just made still holds.\n\nThen take one more step. In your life today, is there someone in the position of "speaking and no one listening", whose questions are treated as "making trouble," whose hardship is treated as "unimportant," who is only looked at once something big has happened?\n\nWhen that happens, what will you do? Will you wait until "something big happens" to hear them, or will you stop, while they are still speaking calmly, and listen once, in earnest?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价时代 (坐船来的移民女孩/缝纫机/罢工/锁死的门/146 条命 → 进步 vs 进步从没算上我们) + transfer「今天你身边说话没人听的人 (问题被当闹事难处被当不重要非出大事才回头)」+ 你会等出大事才听还是在他们还好好说话时就先停下认真听一次',
      engagementHook: '走完我这段短短的命，你会怎么评价那样一个时代? 再想一步：今天你身边，有没有人在「说话没人听」的处境里? 你会等到出了大事才听见他们，还是现在就先停下来，认真听一次?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'theodore-roosevelt':                  theodoreRooseveltLens,
  'jane-addams':                         janeAddamsLens,
  'triangle-fire-worker-receiving-end':  triangleFireWorkerLens,
};

// per TOPIC_ROADMAP_G6_G12.md B5 + receiving-end 优先 pattern:
// 移民女工 + 被进步改革够不着的一方 + N1 gold-standard hook + N6「锁着的门」跨 lens/Topic 对位 + N10/N11 进步 vs 写给有声音的人 closing
export var defaultLens = 'triangle-fire-worker-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'progressive-era-1910',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'theodore-roosevelt': 30, 'jane-addams': 28, 'triangle-fire-worker-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, tight shorter spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「锁着的门 / locked door」一个意象两个方向 (TR 拆象征的垄断之门 vs Triangle 真实锁死人命的门 + Jane Addams 改革慢过火 + Toussaint 无关此处)',
    'defaultLens: triangle-fire-worker-receiving-end — 受影响者优先 (移民女工 composite + 被进步改革够不着的一方 + gold-standard N1 hook + N10/N11 进步 vs 写给有声音的人)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: composite 女工 (姓名/年龄是叙事性补充) 用 N1 + lens card 括号短句标注; 史料确证的是 1911 Triangle fire 146 死',
    'cross-Topic 锚: TR→gilded-age (Carnegie trust) + scientific-revolution (Galton 优生学); Jane Addams→chinese-exclusion (移民安置 vs 排外); 女工→gilded-age + scientific-revolution + industrial-revolution (曼彻斯特童工)',
    '反 Whig: 「进步」对谁进步? 同一批改革者同时是优生学/科学种族主义/帝国主义推手; 改革滞后的人命代价 (火灾后才有工厂安全法)',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
