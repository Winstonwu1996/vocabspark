// ─── Scramble for Africa 1884 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 瓜分非洲与新帝国主义 · The Scramble for Africa & New Imperialism 1870-1914
// HS 9-10 · AP World Modern Unit 6 (帝国主义) · AP Euro
//
// 3 lens 设计 (per TOPIC_ROADMAP_G6_G12.md B3 + AUTHORING_PIPELINE 第 8/12 条):
//   - leopold-ii      (perpetrator-actor) — Leopold II 1835-1909 比利时国王 / 把刚果当私人产业 / 橡胶暴政致数百万死
//   - gw-williams     (lonely-mediator)   — George Washington Williams 1849-1891 非裔美国记者+牧师 / 1890 公开信首次向世界揭发刚果暴行
//   - congo-rubber-villager-receiving-end (receiving-end) — 一个完不成橡胶配额被殖民军砍手的刚果村民 (composite, 基于真实照片记录)
//
// 跨 lens micro-detail (N6 anchor):
//   「文明使命 / civilizing mission」修辞 vs 砍手暴行 — 同一套「教化」话术两个方向:
//   - Leopold 对世界说他在刚果办的是「慈善 + 文明事业」(国际刚果协会 / 反奴隶贸易旗号)
//   - 村里收到的是配额、人质、砍下来的手 (殖民军以砍手作为「没浪费子弹」的凭证)
//   Leopold lens N6: 「文明使命」面具的算术 vs 村民手上少的那一只手 — 同一套修辞两个用法
//   Williams lens N6: 公开信把「文明使命」修辞翻过来 — 用证据对准写修辞的人
//
// 跨 Topic 锚:
//   - Leopold「文明使命」修辞 → age-of-exploration-1492 (Columbus 教化修辞 / Las Casas 揭发) 强对位
//   - George W. Williams 用证据揭发 → scientific-revolution (记录/证据作为武器) + Douglass 长链
//   - 殖民前非洲繁荣 vs 殖民暴力 → mali-empire-1235 (同一片非洲, 14 世纪 Timbuktu 知识中心 vs 1900 砍手)
//
// defaultLens = 'congo-rubber-villager-receiving-end' (受影响者优先 pattern: 被殖民暴政承受方 + 跨 lens「文明使命」对位 + 跨 mali-empire 反殖民史观锚)
//
// STRUCTURE SPEC (shorter format):
//   - 11 nodes per lens (multi-faction)
//   - 220-360 CN chars per node; only 2 anchor nodes (N6 cross-lens + synthesis) may reach 480; every other ≤380
//   - expectsRealAnswer: ONLY 倒数第二 (N10 synthesis) + 末节 (N11 close) = true; all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// Sensitive content (砍手 / 种族灭绝级暴行): documented restraint, no gratuitous gore, dignity for receiving-end.
// Villager = composite, grounded in documented photo record (Alice Seeley Harris 1904 照片) — flagged in-text 括号短句.
//
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Leopold II (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var leopoldLens = {
  id: 'leopold-ii',
  name: 'Leopold II',
  nameCn: '利奥波德二世',
  role: 'perpetrator-actor',
  perspectiveTag: 'congo-owner-king',
  icon: '👑',
  description: {
    cn: '比利时国王，1835 年生。他统治的比利时小得可怜，他一辈子嫌它不够大。他从没踏上过非洲一步，却让一整片比比利时大 76 倍的土地变成自己的私人产业，名字叫刚果自由邦。他对全世界说，他在那里办的是慈善和文明事业。同一个他，靠那片土地上的橡胶赚下惊人的财富，代价是几百万条人命。这一遍让你从一个把「文明」当面具的人内部，看一桩被精心包装过的暴行是怎么运转的。',
    en: 'King of Belgium, born 1835. The Belgium he ruled was painfully small, and he spent his whole life resenting that it was not bigger. He never set foot in Africa, yet he turned a stretch of land 76 times larger than Belgium into his own private property, called the Congo Free State. He told the whole world that what he ran there was charity and a work of civilization. The same man drew an astonishing fortune from the rubber of that land, at a cost of several million lives. This pass lets you watch, from inside a man who wore "civilization" as a mask, how a carefully packaged atrocity actually worked.',
  },
  storyboard: [
    {
      id: 'leo-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我从没去过非洲。一步都没踏上过。\n\n可是有二十多年，中部非洲一片比我的国家大 76 倍的土地，是我一个人的私人财产。不是比利时的——是我，利奥波德（Leopold），个人的。\n\n我是怎么做到的？我没派一支大军去打。我做的事，全世界看着，还鼓掌：我开会、写信、签条约，对每个人说，我去那里，是为了反对奴隶贩子，是为了把文明带给那片土地上的人。\n\n听起来像个圣人，对吧？\n\n这一遍，你坐进我这个位置。你会看见一个人怎么用「行善」这两个字，盖住一桩几百万人为它送命的暴行——而且盖了整整二十年，几乎没人识破。',
        en: 'I never went to Africa. Not one step.\n\nYet for more than twenty years, a stretch of central Africa 76 times larger than my own country was my private property. Not Belgium\'s. Mine. Leopold\'s, personally.\n\nHow did I manage it? I sent no great army to conquer it. What I did, the whole world watched, and applauded: I held conferences, wrote letters, signed treaties, and told everyone that I went there to fight the slave traders and to bring civilization to the people of that land.\n\nSounds like a saint, doesn\'t it?\n\nThis pass puts you in my seat. You will watch how a man used the two words "doing good" to cover an atrocity that cost several million lives, and covered it for a full twenty years, with almost no one seeing through.',
      },
      deliverGoal: 'N1 hook — 从没去过非洲却拥有比比利时大 76 倍的私人土地 + 不靠大军靠开会写信签条约 + 用反奴隶贸易/带文明的旗号 + 这一遍视角设定 (用「行善」盖暴行盖了 20 年)',
      engagementHook: '我用「行善」两个字，盖住了一桩几百万人送命的暴行——还盖了二十年。一个人怎么能把暴行包装成慈善，骗过全世界？',
      expectsRealAnswer: false,
    },
    {
      id: 'leo-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我为什么这么渴望一块殖民地。\n\n1870 年代，欧洲列强在比赛抢地盘。英国、法国、葡萄牙，各自在非洲、亚洲圈下大片领土。殖民地意味着原料、市场、还有面子——一个有殖民地的国家，才算「大国」。\n\n而我呢？我是比利时国王。比利时小得可怜，1830 年才独立，夹在大国中间。我手里没有海军去抢地，比利时议会也不肯出钱替我去冒险。\n\n我心里只有一个念头，几乎成了执念：我要一块属于自己的殖民地。哪怕比利时不给我，我自己也要弄到一块。\n\n问题是，怎么弄？正面去抢，我没那个本钱。我得换一条路——一条让全世界觉得我不是在抢，而是在做好事的路。',
        en: 'First, why I longed so badly for a colony.\n\nIn the 1870s the powers of Europe were racing to seize territory. Britain, France, Portugal, each fenced off vast lands in Africa and Asia. A colony meant raw materials, markets, and prestige. Only a country with colonies counted as a "great power."\n\nAnd me? I was King of Belgium. Belgium was painfully small, independent only since 1830, wedged between the great powers. I had no navy to seize land with, and the Belgian parliament would not pay for me to gamble abroad.\n\nOne thought sat in my mind, almost an obsession: I wanted a colony of my own. Even if Belgium would not give me one, I would get one myself.\n\nThe question was how. To seize one openly, I lacked the means. I had to take another road, a road that would make the whole world think I was not seizing anything, but doing good.',
      },
      deliverGoal: 'N2 setup — 1870s 新帝国主义列强抢地盘 (殖民地=原料/市场/面子/大国地位) + 比利时小 (1830 才独立/无海军/议会不出钱) + Leopold 执念要私人殖民地 + 正面抢没本钱要换一条「让世界觉得在做好事」的路',
      engagementHook: '我没本钱正面去抢，就得换一条「让全世界觉得我在做好事」的路。一个野心被实力卡住的人，会不会更容易学会伪装？',
      expectsRealAnswer: false,
    },
    {
      id: 'leo-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我那条路，是从一个词开始的：文明使命（civilizing mission）。\n\n这套说法，欧洲人用了快四百年。1492 年 Columbus（哥伦布）踏上美洲，殖民者就说他们是去「教化」那里的人、传播信仰、带去文明。（你跑过 age-of-exploration 那个 Topic，会认得这套话术。）四百年后，我把同一套话，原样搬来用在非洲。\n\n1876 年，我在布鲁塞尔开了一场地理大会，请来欧洲各国的探险家、科学家、人道主义者。我对他们说：中部非洲还有奴隶贩子在抓人卖人，这是文明世界的耻辱。我要成立一个组织，去那里反对奴隶贸易、推进科学和文明。\n\n我给它起了个好听的名字：国际非洲协会。听起来是个慈善机构，对吧？\n\n没人问一句：一个慈善机构，要那么大一片土地干什么？',
        en: 'My road began with one phrase: the civilizing mission.\n\nEuropeans had used this idea for nearly four hundred years. When Columbus reached the Americas in 1492, the colonizers said they had come to "civilize" the people there, to spread their faith, to bring civilization. (Run the age-of-exploration topic and you will recognize this script.) Four centuries later, I lifted the same words and applied them, unchanged, to Africa.\n\nIn 1876 I held a geographical conference in Brussels and invited explorers, scientists, and humanitarians from across Europe. I told them: slave traders are still seizing and selling people in central Africa, and this is a disgrace to the civilized world. I would found an organization to go there, fight the slave trade, and advance science and civilization.\n\nI gave it a fine name: the International African Association. It sounds like a charity, doesn\'t it?\n\nNo one asked one question: what does a charity need with so vast a piece of land?',
      },
      deliverGoal: 'N3 setup — 「文明使命」修辞 + 跨 age-of-exploration Topic 锚 (Columbus 教化话术四百年后原样搬到非洲) + 1876 布鲁塞尔地理大会 (探险家/科学家/人道主义者) + 反奴隶贸易/科学旗号 + 国际非洲协会伪装慈善 + 没人问慈善要那么大土地干什么',
      engagementHook: '我把四百年前对付美洲的「文明使命」话术，原样搬来用在非洲，没人识破。一套被用了几百年的漂亮话，为什么总是有人信？',
      expectsRealAnswer: false,
    },
    {
      id: 'leo-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你雇了一个有名的探险家 Stanley（斯坦利），让他去刚果河流域，一个村子一个村子地，跟当地酋长签条约。那些酋长大多不识字，更读不懂欧洲文字写的合同。他们在纸上画个记号，就等于把整片土地的主权「让」给了你。\n\n1884 到 1885 年，欧洲列强在柏林开了一场会，史称 Berlin Conference（柏林会议）。十四个国家坐下来，对着一张非洲地图，商量怎么瓜分这块大陆——而那张桌子上，没有一个非洲人。\n\n会上，列强承认了你对刚果的控制。你拿到了它。你给它取名 Congo Free State（刚果自由邦）——「自由」邦。\n\n你心里清楚：你嘴上说的「反奴隶、办文明」，和你真正要的「橡胶和财富」，是两件事。\n\n这一刻你得问自己：当全世界都信了你的漂亮话，连你自己，会不会也开始半信半疑地觉得，自己真是在做好事？',
        en: 'Now you are me.\n\nYou hired a famous explorer, Stanley, and sent him into the Congo river basin to sign treaties with local chiefs, village by village. Most of those chiefs could not read, still less understand a contract written in a European language. They made a mark on the paper, and that mark "ceded" the sovereignty of whole stretches of land to you.\n\nIn 1884 and 1885 the powers of Europe met at Berlin, the Berlin Conference. Fourteen countries sat down before a map of Africa and worked out how to carve up the continent, and at that table there was not one African.\n\nThere the powers recognized your control of the Congo. You got it. You named it the Congo Free State. "Free."\n\nYou know in your gut: the "fighting slavery and bringing civilization" you say out loud, and the "rubber and fortune" you actually want, are two different things.\n\nSo here you must ask yourself: when the whole world has believed your fine words, might even you begin, half-believing, to feel that you really are doing good?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 雇 Stanley 跟不识字酋长签条约 (画记号=让出主权) + 1884-85 Berlin Conference 14 国瓜分非洲 (桌上没一个非洲人) + 拿到刚果取名 Congo Free State + 嘴上「反奴隶办文明」vs 真正要橡胶财富 + 自问会不会自己也开始半信',
      engagementHook: '当全世界都信了你的漂亮话，连你自己也开始半信半疑地觉得真在做好事——这种自我欺骗，比赤裸裸的贪婪更可怕吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'leo-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '拿到刚果不久，世界上发生了一件事，让我的「私人产业」突然值钱了十倍。\n\n1890 年代，汽车和自行车开始普及，轮胎需要大量橡胶。橡胶价格一路猛涨。而刚果的森林里，长着可以割胶的野生藤蔓。\n\n我一下明白了：我手里这片土地，是一座橡胶金矿。\n\n问题是，野生橡胶藏在森林深处，采集又苦又慢，没人愿意干。怎么逼当地村民去采？\n\n我和我的代理人想出一套办法：给每个村子定一个橡胶配额，每隔一段时间必须交够。完不成，就有惩罚。\n\n我坐在布鲁塞尔的宫殿里，从没去看过一眼那片森林。我只看账本上交回来的数字。橡胶产量年年涨，我的财富也年年涨。\n\n而那些数字背后，每一公斤橡胶意味着什么——我那时候选择不去想。',
        en: 'Not long after I got the Congo, something happened in the world that made my "private property" suddenly worth ten times more.\n\nIn the 1890s cars and bicycles were spreading, and tires needed great quantities of rubber. The price of rubber climbed and climbed. And in the forests of the Congo grew wild vines from which rubber could be tapped.\n\nIn an instant I understood: this land of mine was a rubber gold mine.\n\nThe trouble was, wild rubber hid deep in the forest, and gathering it was bitter, slow work that no one wanted to do. How to force the local villagers to gather it?\n\nMy agents and I devised a system: set each village a rubber quota, due in full at fixed intervals. Fail to meet it, and there was punishment.\n\nI sat in my palace in Brussels and never once went to look at that forest. I looked only at the numbers the ledgers sent back. The rubber output rose year after year, and so did my fortune.\n\nWhat each kilogram of rubber behind those numbers meant, I chose, in those years, not to think about.',
      },
      deliverGoal: 'N5 story — 1890s 汽车自行车普及→橡胶需求暴涨 (跨 B1 工业革命隐线) + 刚果森林野生橡胶藤蔓 = 金矿 + 配额制度 (每村定额定期交够/完不成有惩罚) + Leopold 从没去看只看账本数字 + 「每公斤橡胶意味什么我选择不去想」',
      engagementHook: '我坐在宫殿里只看账本数字，从不去想每一公斤橡胶背后意味着什么。「选择不去想」——这算无辜，还是另一种罪？',
      expectsRealAnswer: false,
    },
    {
      id: 'leo-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我的账本上是橡胶数字。村子里发生的事，是另一回事。\n\n配额完不成，殖民军队怎么逼？他们抓走村里的女人和孩子当人质，关起来，逼男人进森林采胶来赎。还有一种更狠的：完不成配额，就砍掉村民的手。\n\n为什么是手？因为殖民军给了士兵子弹，要他们交回证据，证明子弹没被浪费——他们就砍下被打死者的手交差。慢慢地，手本身变成了一种货币：砍一只手，抵一份没完成的配额。被砍手的，很多还活着，包括孩子。\n\n（这些不是传说。1904 年，一个英国传教士拍下了照片——一个父亲，盯着面前地上他女儿被砍下的小手。照片传遍了世界。）\n\n这就是「文明使命」的真相：我对世界讲的，是反奴隶、办文明；我的土地上真正运转的，是配额、人质，和砍下来的手。\n\n同一套「文明」的话——我在布鲁塞尔用它筹款、博取掌声；村里收到的，是少了一只手的代价。一套修辞，两个方向。',
        en: 'On my ledger were rubber numbers. What happened in the villages was another thing.\n\nWhen a quota was not met, how did the colonial soldiers force it? They seized the women and children of the village as hostages, locked them up, and made the men go into the forest to gather rubber to ransom them. And there was a crueler thing: fail the quota, and a villager\'s hand was cut off.\n\nWhy the hand? Because the soldiers were issued bullets and ordered to bring back proof that none had been wasted. So they cut off the hands of those they shot, to account for the bullets. Slowly the hand itself became a kind of currency: one severed hand for one unmet quota. Many whose hands were taken were still alive, children among them.\n\n(These are not legends. In 1904 a British missionary photographed a father staring at the small severed hand of his daughter on the ground before him. The photographs traveled the world.)\n\nThis is the truth of the "civilizing mission": what I told the world was fighting slavery and bringing civilization; what actually ran on my land was quotas, hostages, and severed hands.\n\nThe same words about "civilization." In Brussels I used them to raise money and win applause; in the village what arrived was the price of one missing hand. One set of rhetoric, two directions.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 配额逼迫机制 (抓女人孩子当人质/砍手) + 砍手原因 (子弹证据→手变货币/很多被砍手者还活着) + anti-fab 括号短句 (1904 Alice Seeley Harris 照片/父亲盯着女儿被砍的手) + 文明使命真相 (说反奴隶办文明/真运转配额人质砍手) + 跨 lens 对位 (布鲁塞尔筹款掌声 vs 村里少一只手/一套修辞两方向)',
      engagementHook: '同一套「文明」的话——我在布鲁塞尔用它博取掌声，村里收到的是少了一只手的代价。一个词，怎么会有两个完全相反的用法？',
      expectsRealAnswer: false,
    },
    {
      id: 'leo-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你也许会问：村里死了那么多人，二十年里，外面的人怎么会不知道？\n\n因为我布了一张看不见的网。\n\n刚果自由邦不许外人随便进。能进去的传教士、商人，很多拿着我给的好处，闭着嘴。我在布鲁塞尔养了一批写手和报纸，专门替我说话，把任何揭发都骂成「嫉妒比利时的人在造谣」。我还成立了一个挂着「保护原住民」名号的委员会——名字好听，实际上是给暴行盖章的橡皮图章。\n\n我从不亲手砍人一只手。我做的，是定配额、收账、控制说法。脏活在四千公里外的森林里，由别人的手去做。我的手，始终是干净的——账本上签字的那只手。\n\n这是新帝国主义最阴的一面：施暴的人，可以离暴行很远很远，远到自己都觉得清白。',
        en: 'You might ask: with so many dead in the villages, how could the outside world not know, for twenty years?\n\nBecause I had spread an invisible net.\n\nThe Congo Free State did not let outsiders in freely. The missionaries and traders who could enter were often taking benefits from me and kept their mouths shut. In Brussels I kept a stable of writers and newspapers to speak for me, branding any exposure as "slander by people jealous of Belgium." I even set up a commission under the name "protection of the natives," a fine name, in fact a rubber stamp that put its seal on the atrocities.\n\nI never cut off a hand with my own hands. What I did was set quotas, collect the accounts, control the story. The dirty work was done four thousand kilometers away in the forest, by other people\'s hands. My own hands stayed clean, the hand that signed the ledger.\n\nThis is the darkest side of the new imperialism: the man who inflicts the violence can stand very, very far from it, far enough that he feels innocent himself.',
      },
      deliverGoal: 'N7 story — Leopold 掩盖网络 (不许外人进/收买传教士商人闭嘴/养写手报纸骂揭发是造谣/挂名「保护原住民」委员会橡皮图章) + 「我从不亲手砍人/定配额收账控制说法/脏活四千公里外别人的手做」+ 新帝国主义最阴一面 (施暴者离暴行远到自觉清白)',
      engagementHook: '我从不亲手砍人，只签字收账，脏活在四千公里外。施暴者离暴行越远，他的罪是不是就越轻——还是越重？',
      expectsRealAnswer: false,
    },
    {
      id: 'leo-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我的网，最后还是破了。\n\n第一道裂缝，1890 年，来自一个非裔美国人——记者兼牧师 George Washington Williams（乔治·华盛顿·威廉斯）。他亲自去了刚果，亲眼看了，回来写了一封公开信，公开点我的名，列出他看到的暴行。这是第一次有人向全世界系统揭发刚果。\n\n后来，更多证据涌出来。传教士拍的砍手照片、英国外交官写的官方调查报告、作家们的揭露文章。证据一旦摆在阳光下，我那套漂亮话，就再也圆不回去了。\n\n国际舆论一片哗然。压力越来越大。1908 年，我被迫把刚果自由邦交给比利时政府——它从「我的私人产业」，变成了比利时的国家殖民地。\n\n第二年，1909 年，我死了。\n\n临死前，我下令烧掉刚果自由邦的大批档案。我烧了三天。我太清楚那些纸上写着什么——我想让它们跟我一起，永远消失。',
        en: 'My net, in the end, was torn open.\n\nThe first crack, in 1890, came from an African American, the journalist and minister George Washington Williams. He went to the Congo himself, saw it with his own eyes, and came back and wrote an open letter, naming me publicly and listing the atrocities he had seen. It was the first time anyone exposed the Congo to the whole world, systematically.\n\nLater, more evidence poured out. The severed-hand photographs taken by missionaries, an official investigation report written by a British diplomat, the exposés of writers. Once the evidence stood in the sunlight, my fine words could no longer be made to add up.\n\nInternational opinion was in an uproar. The pressure grew and grew. In 1908 I was forced to hand the Congo Free State to the Belgian government. It went from "my private property" to a Belgian state colony.\n\nThe next year, 1909, I died.\n\nBefore I died I ordered the archives of the Congo Free State burned. They burned for three days. I knew too well what was written on those papers. I wanted them to vanish forever, together with me.',
      },
      deliverGoal: 'N8 story — 网破裂 (1890 George Washington Williams 公开信首次系统揭发/桥到 Williams lens) + 更多证据 (砍手照片/英国外交官调查报告/作家揭露) + 国际舆论压力 + 1908 被迫交给比利时政府变国家殖民地 + 1909 死前烧档案三天',
      engagementHook: '我临死前烧了三天的档案，因为我太清楚那些纸上写着什么。一个人想烧掉的东西，往往正是他最怕被记住的。证据真能被烧光吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'leo-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我死了，可我留下的东西，还在。\n\n刚果那二十多年里到底死了多少人？没有精确数字——因为我烧了账。学者们的估算，从几百万到一千万不等。无论哪个数，都是种族灭绝级别的。\n\n更长久的，是 Berlin Conference 那张桌子留下的东西。当年欧洲人对着地图，用尺子划出殖民地的边界，根本不管地上住的是哪个族群、说哪种语言。一条直线，可能把同一个民族劈成两半，也可能把世仇的两族塞进同一个国家。\n\n今天非洲地图上那些笔直的国界线，很多就是那次会议划下的。今天非洲很多内战和冲突的根，能一直追到那张桌子。\n\n再往回看一步：就在同一片非洲，几百年前有过 Mali（马里）这样的帝国——Timbuktu 是当时世界的知识中心之一。（你跑过 mali-empire 那个 Topic 会记得。）那片土地不是「等着被文明拯救的空白」。是我们来了，才把繁荣变成了砍下来的手。',
        en: 'I died, but what I left behind is still here.\n\nHow many died in the Congo over those twenty-odd years? There is no exact number, because I burned the accounts. Scholars\' estimates range from several million to ten million. Whatever the figure, it was on the scale of genocide.\n\nLonger-lasting is what the table at the Berlin Conference left behind. The Europeans drew colonial borders on the map with a ruler, paying no attention to which peoples lived on the ground, or what languages they spoke. One straight line might split a single people in two, or pen two feuding peoples into a single country.\n\nMany of the ruler-straight borders on Africa\'s map today were drawn at that conference. The roots of many of Africa\'s civil wars and conflicts today can be traced all the way back to that table.\n\nLook back one more step: in this very Africa, centuries earlier, there had been empires like Mali, and Timbuktu was one of the knowledge centers of the world. (Run the mali-empire topic and you will remember.) That land was not "a blank waiting to be saved by civilization." It was we who came, and turned its prosperity into severed hands.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 刚果死亡数字 (烧账无精确/估算几百万到千万/种族灭绝级) + Berlin Conference 用尺子划界不管族群语言 → 今日非洲直线国界+内战冲突根源 + 跨 mali-empire Topic 锚 (同片非洲几百年前 Mali 帝国/Timbuktu 知识中心/不是等被拯救的空白/我们来了把繁荣变砍手)',
      engagementHook: '同一片非洲，几百年前有 Mali 帝国、有 Timbuktu 这样的知识中心。那片土地从来不是「等着被文明拯救的空白」——是我们来了，才把繁荣变成砍下来的手。「带来文明」这四个字，到底是谁带给了谁什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'leo-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是个有远见的现代化推动者。我把一片「无人开发」的土地，接入了世界经济。我修了铁路、建了城镇、引进了贸易。比利时今天还有我留下的宏伟建筑。在我那个时代，每个强国都在抢殖民地——我做的，无非是别人也在做的事。\n\n另一种说法：我是种族灭绝级暴行的设计师，还是个高明的骗子。我用「文明」「慈善」「反奴隶」当面具，干的是配额、人质、砍手。我从没亲手碰过一滴血，却让几百万人死在我的账本背后，临死还烧了三天证据。我留下的不是文明，是砍下来的手和一道道随意划的国界。\n\n这两边不是「功劳加污点」。是同一套设计的两面——同一张「文明」的面具，正面是博物馆里的雕像，背面是地上那只小手。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a far-sighted modernizer. I connected a land "undeveloped" to the world economy. I built railways, founded towns, brought in trade. Belgium still has the grand buildings I left. In my age, every strong nation was seizing colonies. What I did was no more than what others were doing too.\n\nThe other view: I was the architect of a genocide-scale atrocity, and a skilled liar. I wore "civilization," "charity," and "anti-slavery" as a mask while running quotas, hostages, severed hands. I never touched a drop of blood with my own hands, yet I let several million die behind my ledger, and burned the evidence for three days before I died. What I left was not civilization, but severed hands and borders drawn at random.\n\nThese are not "merit and stain." They are two faces of one design, the same mask of "civilization," its front a statue in a museum, its back the small hand on the ground.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (有远见现代化推动者/接入世界经济/修铁路建城镇/那时代人人抢殖民地) / 另一种说法 (种族灭绝级暴行设计师+高明骗子/文明面具下配额人质砍手/没碰血却几百万死/烧三天证据) / 同一套设计两面 (一张面具正面雕像背面小手) / 想 30 秒',
      engagementHook: '远见的现代化推动者和种族灭绝的设计师——是同一个我，同一张「文明」面具的正反两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'leo-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人，和他做的事？\n\n一个从没踏上过那片土地的国王，靠几句「文明」「慈善」的漂亮话，把一整片非洲变成私人产业，让几百万人死在配额背后，临死烧光证据。他留给世界一座座宏伟建筑，也留下地上那只被砍下的小手。把这两样放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有人用一套「好听的说法」，盖住一件其实没那么好的事——某个广告说它在「关爱环境」，某个机构说它在「为你着想」，某个人嘴上全是善意，做的却是另一回事？\n\n那时候，你会被那套漂亮话哄住，还是会像那个揭发我的记者一样，绕到话术背面，去看真正发生了什么？',
        en: 'Having walked my whole life, how would you judge a man like this, and what he did?\n\nA king who never set foot on that land, who with a few fine words about "civilization" and "charity" turned a whole stretch of Africa into private property, let several million die behind quotas, and burned the evidence before he died. He left the world grand buildings, and he left the small severed hand on the ground. Put those two on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there someone using a set of "fine-sounding words" to cover something that is not actually so fine, an ad that says it "cares for the environment," an organization that says it is "looking out for you," a person whose mouth is all goodwill while what they do is another thing entirely?\n\nWhen that happens, will you be lulled by the fine words, or will you do what the reporter who exposed me did: go around to the back of the rhetoric, and look at what actually happened?',
      },
      deliverGoal: 'N11 close — 评价人 (从没踏上土地的国王/漂亮话变私人产业/几百万死/烧证据 → 宏伟建筑 vs 地上小手同一天平) + transfer「今天你身边用好听说法盖不好的事 (广告关爱环境/机构为你着想/嘴上善意做另一回事)」+ 你会被哄住还是像揭发的记者绕到话术背面看真相',
      engagementHook: '一边是宏伟建筑，一边是地上那只被砍下的小手，装在同一个人的「文明」里。你会怎么评价这样一个人？今天你身边那套「好听的说法」，你会被它哄住，还是绕到背面去看真相？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: George Washington Williams (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var williamsLens = {
  id: 'gw-williams',
  name: 'George Washington Williams',
  nameCn: '乔治·华盛顿·威廉斯',
  role: 'lonely-mediator',
  perspectiveTag: 'congo-whistleblower',
  icon: '✒️',
  description: {
    cn: '非裔美国人，1849 年生，当过兵、做过牧师、当过议员，最后成了记者和历史学家。他本来是相信利奥波德那套「文明刚果」说法的人之一，是去帮忙的。可他亲自去了刚果，亲眼看了，信仰碎了。1890 年他写下一封给利奥波德的公开信，第一次向全世界系统揭发刚果暴行。他写完不到一年就病死在异乡，没活着看到任何改变。这一遍让你从一个孤身揭发者的位置，看一个人怎么用证据，对准一个比他强大千万倍的国王。',
    en: 'An African American, born 1849, who had been a soldier, a minister, and a legislator before becoming a journalist and historian. He had been one of those who believed Leopold\'s story of a "civilized Congo," and went to help. But he went to the Congo himself, saw it with his own eyes, and his faith broke. In 1890 he wrote an open letter to Leopold, the first systematic exposure of the Congo atrocities to the whole world. He died of illness in a foreign land less than a year later, never living to see any change. This pass puts you in the seat of a lone whistleblower, watching how one man used evidence to take aim at a king ten million times more powerful than himself.',
  },
  storyboard: [
    {
      id: 'gw-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我去刚果，本来是去帮忙的。\n\n我叫 George Washington Williams（乔治·华盛顿·威廉斯），美国人。我读过利奥波德国王讲的那些话——他说他在刚果办的是文明、是慈善、是反对奴隶贩子。我信了。我甚至觉得，这是我这样一个黑人能为非洲做点事的好机会。\n\n我专程横渡大西洋，去亲眼看看这桩「了不起的善举」。\n\n可我看到的，跟他说的，是两个世界。\n\n这一遍，你坐进我这个位置。你不是国王，没有军队，没有财富。你手里只有一样东西：你的眼睛，和你的笔。\n\n问题是：当你撞见一桩没人敢说、连你自己原本都不信会发生的暴行——你，一个人，能用一支笔做什么？',
        en: 'I went to the Congo meaning to help.\n\nMy name is George Washington Williams, an American. I had read the words King Leopold spoke, that what he ran in the Congo was civilization, charity, a fight against the slave traders. I believed him. I even felt it was a fine chance for a Black man like me to do something for Africa.\n\nI crossed the Atlantic on purpose, to see this "remarkable good work" with my own eyes.\n\nBut what I saw and what he said were two different worlds.\n\nThis pass puts you in my seat. You are not a king. You have no army, no fortune. You hold only one thing: your eyes, and your pen.\n\nThe question is: when you stumble on an atrocity no one dares to name, one you yourself had not believed could happen, what can you, one person, do with a single pen?',
      },
      deliverGoal: 'N1 hook — Williams 自我介绍 (非裔美国人/本来信利奥波德文明慈善说法去帮忙/觉得是黑人为非洲做事的机会) + 横渡大西洋亲眼看 + 看到的与说的是两个世界 + 这一遍视角 (不是国王没军队财富只有眼睛和笔)',
      engagementHook: '我没有军队，没有财富，手里只有一双眼睛和一支笔。一个人，撞见没人敢说的暴行，能用一支笔做什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是谁，你才懂我为什么非去刚果不可。\n\n我 1849 年生在美国宾州一个黑人家庭。那个年代，黑人在美国处处受限。我 14 岁谎报年龄去参军，打过美国内战。后来我读神学，当上牧师；又转去俄亥俄州，成了那个州历史上第一位黑人州议员。\n\n再后来，我成了历史学家。我写了一部厚厚的书：《美国黑人种族史》。我太清楚一件事——一个种族如果没人替它写下历史，它就会被人当成「从来没存在过、没文明过」。\n\n所以当我听说利奥波德要「文明非洲」，我心里有一种特别的牵挂。我是黑人，非洲是我祖先的大陆。我想亲眼确认：那里真的在被善待吗？\n\n带着这份牵挂，1890 年，我去了刚果。我以为我会看到希望。',
        en: 'First, who I am, so you understand why I had to go to the Congo.\n\nI was born in 1849 to a Black family in Pennsylvania. In that age, Black people in America were hemmed in at every turn. At 14 I lied about my age to enlist and fought in the American Civil War. Later I studied theology and became a minister; then I moved to Ohio and became the first Black state legislator in that state\'s history.\n\nLater still I became a historian. I wrote a thick book: A History of the Negro Race in America. I knew one thing too well: a people for whom no one writes a history will be treated as if it had never existed, never had a civilization.\n\nSo when I heard that Leopold meant to "civilize Africa," I felt a particular pull. I am Black; Africa is the continent of my ancestors. I wanted to confirm with my own eyes: were the people there truly being treated well?\n\nCarrying that pull, in 1890 I went to the Congo. I thought I would see hope.',
      },
      deliverGoal: 'N2 setup — Williams 出身 (1849 宾州黑人家庭/14 岁谎报年龄参加内战/牧师/俄亥俄首位黑人州议员) + 历史学家写《美国黑人种族史》+ 「没人写历史的种族会被当成没存在过没文明过」+ 黑人对非洲祖先大陆的牵挂 + 1890 去刚果以为会看到希望',
      engagementHook: '我太清楚：一个种族如果没人替它写下历史，就会被当成「从来没文明过」。这就是为什么我非去亲眼看不可。「记录」这件事，为什么对一个被压迫的群体这么重要？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '去刚果之前，我先见了利奥波德本人。\n\n1890 年初，我在布鲁塞尔见到了这位国王。他高大、有风度、谈吐温文。他对我大谈他的「文明事业」——反奴隶、办学校、修文明。他知道怎么让你信他。说实话，那次见面，他几乎又把我说服了一遍。\n\n但我是个历史学家。历史学家有一条铁律：不信别人转述，只信亲眼证据。一个人嘴上说得再漂亮，你得去现场，看他真正做了什么。\n\n这条「用证据说话」的纪律，不是我一个人的发明。几百年来，正是「亲自观察、记录证据」这套方法，让人类一点点逼近真相。（你跑过 scientific-revolution 那个 Topic 会懂这条根。）\n\n所以我没有停留在布鲁塞尔的客厅里听他讲。我登上船，亲自去了刚果河上游。\n\n我要自己看。',
        en: 'Before going to the Congo, I first met Leopold himself.\n\nIn early 1890 I met the king in Brussels. He was tall, gracious, gentle in speech. He spoke to me at length of his "work of civilization," fighting slavery, building schools, raising up civilization. He knew how to make you believe him. Honestly, that meeting nearly persuaded me all over again.\n\nBut I was a historian. A historian holds one iron rule: do not trust what others report, trust only the evidence of your own eyes. However fine a man\'s words, you must go to the scene and see what he actually did.\n\nThis discipline of "letting evidence speak" was not my invention alone. For centuries it was exactly this method, observing for oneself and recording the evidence, that let humankind press, bit by bit, toward the truth. (Run the scientific-revolution topic and you will know this root.)\n\nSo I did not linger in a Brussels parlor listening to him talk. I boarded a ship and went, myself, up the Congo river.\n\nI would see for myself.',
      },
      deliverGoal: 'N3 setup — 1890 初布鲁塞尔见利奥波德 (高大有风度/大谈文明事业反奴隶办学校/几乎又说服 Williams) + 历史学家铁律「不信转述只信亲眼证据」+ 跨 scientific-revolution Topic 锚 (亲自观察记录证据逼近真相) + 不停留客厅登船亲自去刚果河上游',
      engagementHook: '国王几乎又把我说服了一遍——但我是历史学家，铁律是「不信转述，只信亲眼证据」。当一个人说得天花乱坠，你会选择相信，还是亲自去看？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你沿着刚果河往上走。一开始你还半信半疑，想着也许问题只是个别的、被夸大的。\n\n可是一路上，你看到的东西，一件件击碎你心里的希望。你看到被锁成一串的劳工。你看到几乎空掉的村子。你听当地人讲配额、讲人质、讲被砍掉的手——他们一开始不敢说，是因为没人替他们说过话。\n\n你越往里走，越明白：这不是个别的、被夸大的。这是一整套有组织的制度。布鲁塞尔客厅里那位温文的国王，和这条河上的惨状，是同一件事的两端。\n\n你心里清楚一件可怕的事：揭发他，几乎不可能赢。他是国王，有钱、有报纸、有整个欧洲的关系网。你是谁？一个黑人记者，没钱没势，连健康都在这片瘴气里一天天垮下去。\n\n这一刻你得决定：明知道几乎赢不了，你还要不要说出去？',
        en: 'Now you are me.\n\nYou travel up the Congo river. At first you are still half in doubt, thinking perhaps the trouble is isolated, exaggerated.\n\nBut along the way, what you see shatters the hope in you, piece by piece. You see laborers chained in a line. You see villages all but emptied. You hear the local people speak of quotas, of hostages, of severed hands, and at first they dare not speak, because no one has ever spoken for them.\n\nThe deeper you go, the clearer it becomes: this is not isolated, not exaggerated. It is a whole organized system. The gentle king in the Brussels parlor and the horror on this river are two ends of the same thing.\n\nYou know a terrible thing in your gut: to expose him, you can almost never win. He is a king, with money, with newspapers, with the connections of all Europe. And who are you? A Black journalist, with no money and no power, your very health failing day by day in this fever-laden air.\n\nSo here you must decide: knowing you can almost never win, will you still speak out?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 沿刚果河上行希望被一件件击碎 (锁成串劳工/空掉的村子/听配额人质砍手/当地人原本不敢说没人替他们说过话) + 明白是有组织制度 (温文国王与河上惨状两端) + 揭发几乎赢不了 (国王有钱报纸关系网/自己黑人记者没钱没势健康垮) + 明知赢不了还要不要说',
      engagementHook: '揭发一个国王，我几乎不可能赢——他有钱、有报纸、有整个欧洲的关系网，我什么都没有。明知道赢不了，你还会说出去吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我决定说。但我得想清楚，怎么说，才有用。\n\n我不是没武器的人。我的武器，是历史学家的武器：证据，和准确。\n\n我没有写一篇愤怒的控诉，骂利奥波德是恶魔。骂人没用——他可以反手说我「情绪化、不可信、出于嫉妒」。我做的是另一件事：我像写历史一样，一条一条、冷静地记录我亲眼看到的、亲耳听到的。哪里、什么时候、谁、做了什么。\n\n我也很克制。我没有把每一个惨状都渲染成血淋淋的故事——那会让人觉得我在煽情。我让事实本身去说话。事实摆在那儿，比任何形容词都重。\n\n这就是孤身揭发者的策略：你不能比对方更有钱、更有权。但你可以比对方更准、更冷静、更经得起查。\n\n他有的是权力。我有的，是站得住的证据。',
        en: 'I decided to speak. But I had to think clearly about how to speak, so that it would matter.\n\nI was not a man without weapons. My weapon was the historian\'s weapon: evidence, and accuracy.\n\nI did not write a furious denunciation calling Leopold a devil. Insults are useless. He could turn around and say I was "emotional, unreliable, driven by envy." What I did was another thing: I recorded, as one writes history, calmly, one item at a time, what I saw with my own eyes and heard with my own ears. Where, when, who, did what.\n\nI was also restrained. I did not work every horror up into a bloody tale, which would make people feel I was playing on emotion. I let the facts themselves speak. The facts, set down there, weigh more than any adjective.\n\nThis is the lone whistleblower\'s strategy: you cannot be richer or more powerful than your opponent. But you can be more accurate, more calm, harder to refute.\n\nHe had power. What I had was evidence that would stand.',
      },
      deliverGoal: 'N5 story — Williams 决定说但想清怎么说才有用 + 武器是历史学家的证据和准确 + 不写愤怒控诉骂恶魔 (会被反咬情绪化嫉妒)/像写历史冷静记录 (哪里何时谁做什么) + 克制不渲染血腥让事实说话 + 孤身揭发者策略 (不能更有钱更有权但能更准更冷静更经得起查)',
      engagementHook: '我没骂他是恶魔，因为骂人没用——他能反手说我「情绪化、不可信」。我选择冷静记录、让事实说话。比起愤怒，「准确」是不是更有力量？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1890 年，我写下了那封信。\n\n它的形式很特别：一封写给利奥波德国王本人的「公开信」。我直接对着他写，但故意让全世界都读到。\n\n信里，我把利奥波德对世界讲的那套「文明使命」修辞，一条一条翻了过来。他说他来反对奴隶贸易——我写下我看见的、被他的人锁成一串的劳工。他说他来传播文明——我写下被烧的村子、被抓的人质。他用「教化」「慈善」这些漂亮词筹款、博掌声；我用同样这些词，对准他，问他：你说的文明，在哪里？\n\n这是同一套话术的两个方向：他用它遮盖，我用它揭穿。我把他亲口说过的承诺，变成了对照他暴行的尺子。\n\n这封信，是历史上第一份系统、公开、点名向全世界揭发刚果暴行的文件。\n\n我一个没钱没势的黑人，第一次让国王嘴上的「文明」二字，反过来咬住了他自己。\n\n（这桩暴行在村子里到底是什么样，你换到承受它的那个人那一遍，会亲眼看见。）',
        en: 'In 1890 I wrote that letter.\n\nIts form was unusual: an "open letter" addressed to King Leopold himself. I wrote straight to him, but deliberately let the whole world read it.\n\nIn the letter I turned his "civilizing mission" rhetoric, the one he told the world, over item by item. He said he came to fight the slave trade; I set down the laborers I saw, chained in a line by his men. He said he came to spread civilization; I set down the burned villages, the seized hostages. He used the fine words "civilizing" and "charity" to raise money and win applause; I used those same words, aimed at him, and asked: where is this civilization of yours?\n\nThis is the same rhetoric in two directions: he used it to cover, I used it to uncover. I turned the promises he had spoken with his own mouth into a ruler to measure his atrocities against.\n\nThis letter was the first systematic, public, by-name exposure of the Congo atrocities to the whole world.\n\nI, a Black man with no money and no power, made the king\'s own word "civilization" turn around and bite him.\n\n(What this atrocity actually looked like in the village, you will see for yourself when you switch to the pass of the one who bore it.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1890 公开信 (写给利奥波德本人故意让全世界读) + 把「文明使命」修辞一条条翻过来 (说反奴隶→锁成串劳工/说传播文明→烧村抓人质/用文明慈善筹款 vs 对准他问文明在哪) + 同一套话术两方向 (他遮盖/Williams 揭穿/承诺变成丈量暴行的尺子) + 历史第一份系统公开点名揭发文件 + 桥到 villager lens',
      engagementHook: '我把国王亲口说过的「文明」二字，变成了一把尺子，反过来丈量他的暴行。同一套话——他用来遮盖，我用来揭穿。一个词，怎么会有两个相反的用法？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '信发出去之后，发生了什么？\n\n利奥波德的机器立刻开动。他养的报纸、写手，一起出来反击。他们没有反驳我列的事实——因为反驳不了。他们攻击的是我这个人：说我是个「失败者」、是来「敲诈」的、是个不可信的黑人。\n\n这是对付揭发者最常见的招：驳不倒你说的事，就抹黑你这个人。\n\n而我自己呢？我在非洲的旅途里，身体已经垮了。1891 年，写完那封信不到一年，我在回程途中病死在英国，才 42 岁。\n\n我没活着看到任何改变。利奥波德的刚果，又运转了 17 年才被揭穿。\n\n这就是孤身揭发者最苦的地方：你说了真话，可能一辈子都看不到它结果。你点的那把火，要等你死了很多年，才慢慢烧起来。',
        en: 'After the letter went out, what happened?\n\nLeopold\'s machine started up at once. The newspapers and writers he kept came out together to strike back. They did not refute the facts I listed, because they could not. What they attacked was me, the man: they called me a "failure," a man come to "extort," an untrustworthy Black man.\n\nThis is the commonest tactic against a whistleblower: unable to disprove what you say, they smear who you are.\n\nAnd I myself? On my journey in Africa my health had already broken. In 1891, less than a year after I wrote that letter, I died of illness on the way home, in England, only 42 years old.\n\nI never lived to see any change. Leopold\'s Congo ran on for another 17 years before it was undone.\n\nThis is the bitterest thing for a lone whistleblower: you tell the truth, and you may never see it bear fruit in your lifetime. The fire you light may take many years after your death to slowly catch.',
      },
      deliverGoal: 'N7 story — 信发出后利奥波德机器反击 (报纸写手不反驳事实因驳不了/攻击 Williams 是失败者敲诈不可信黑人) + 对付揭发者常见招 (驳不倒事就抹黑人) + Williams 身体垮 1891 写信不到一年回程病死英国 42 岁 + 没活着看到改变 (刚果又运转 17 年) + 揭发者最苦 (说真话看不到结果/点的火死后很久才烧起来)',
      engagementHook: '他们驳不倒我说的事实，就转头抹黑我这个人。这招对付说真话的人，今天还在用吗？你见过吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我死了，可我点的那把火，没灭。\n\n我那封公开信，成了后来所有揭发者的起点。我用过的方法——亲眼去看、冷静记录、用证据对准权力——被一个接一个的人接了过去。\n\n传教士开始拍照片：那些被砍手的人、那些空掉的村子，被定格在底片上。一张照片，比一千句控诉更难抵赖。后来，一个英国外交官 Roger Casement 拿着官方身份，深入刚果，写出一份详尽的官方调查报告，坐实了一切。再后来，一场国际运动——刚果改革协会——把这件事推到了全世界面前。\n\n你看出这条链了吗？我先点了火，照片添了柴，官方报告浇了油，国际运动把火烧成了燎原。\n\n一个人的证据，本身可能很弱。可证据是会接力的——一份接住另一份，最后没人能再装看不见。\n\n我没等到那一天。但那一天，是从我那封信开始的。',
        en: 'I died, but the fire I lit did not go out.\n\nThat open letter of mine became the starting point for every whistleblower who came after. The method I had used, go and see for yourself, record calmly, aim evidence at power, was taken up by one person after another.\n\nMissionaries began to take photographs: the people whose hands had been cut off, the emptied villages, fixed onto the negative. One photograph is harder to deny than a thousand accusations. Later, a British diplomat, Roger Casement, went deep into the Congo with official standing and wrote a detailed official report that confirmed it all. Later still, an international movement, the Congo Reform Association, pushed the matter before the whole world.\n\nDo you see the chain? I lit the fire first; the photographs added fuel; the official report poured on oil; the international movement turned the fire into a blaze across the plain.\n\nOne person\'s evidence may, by itself, be weak. But evidence runs a relay, one piece catching the next, until at last no one can pretend not to see.\n\nI did not live to that day. But that day began with my letter.',
      },
      deliverGoal: 'N8 story — 火没灭 (公开信成所有揭发者起点/方法被接过去) + 证据接力链 (传教士拍砍手照片→英国外交官 Roger Casement 官方调查报告→刚果改革协会国际运动) + 「一张照片比千句控诉难抵赖」+ 一个人证据可能弱但会接力 (一份接住另一份没人能再装看不见) + 没等到那天但那天从我的信开始',
      engagementHook: '一个人的证据可能很弱，可证据会接力——我点火，照片添柴，报告浇油，运动把它烧成燎原。你做的一件小事，会不会成为别人接力的第一棒？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉远，看我这件事在更长的链条里站在哪。\n\n我不是凭空冒出来的。在我之前，1492 年 Columbus 到美洲后，有一个修士 Las Casas，亲眼看见殖民者屠杀原住民，写下控诉，是最早揭发殖民暴行的人之一。（你跑过 age-of-exploration 那个 Topic 会记得他。）三百多年后，我做了同一件事——只不过这次，揭发者是个非裔美国人，对象换成了刚果。\n\n在我之后，这条链还在延续。一代代非裔美国人，从揭发奴隶制，到揭发刚果，再到二十世纪争取自己国家的民权——他们都在做同一件事：用证据和声音，逼一个不肯承认的世界，正视它对黑人做过什么。\n\n我只是这条长链上的一环。我没看到结果，但我把火传了下去。\n\n有些事，你做的时候就知道自己看不到结尾。可你还是得做——因为这把火，总得有人先点。',
        en: 'Pull the lens back, and see where my act stands in a longer chain.\n\nI did not spring up from nowhere. Before me, after Columbus reached the Americas in 1492, a friar named Las Casas saw with his own eyes the colonizers slaughtering the native peoples, and wrote his accusation, one of the earliest to expose colonial atrocity. (Run the age-of-exploration topic and you will remember him.) More than three centuries later, I did the same thing, only this time the one exposing it was an African American, and the subject was the Congo.\n\nAfter me, the chain went on. Generation after generation of African Americans, from exposing slavery, to exposing the Congo, to fighting in the twentieth century for civil rights in their own country, were all doing the same thing: using evidence and voice to force a world that would not admit it to face what it had done to Black people.\n\nI am only one link in that long chain. I did not see the result, but I passed the fire on.\n\nSome things, you know as you do them that you will not see the end. But you do them anyway, because this fire, someone has to be the first to light it.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 更长链条 (前有 1492 Columbus 后修士 Las Casas 揭发殖民屠杀/跨 age-of-exploration Topic 锚/三百年后 Williams 同一件事但非裔美国人+刚果) + 后有非裔美国人长链 (揭发奴隶制→刚果→20 世纪民权/用证据声音逼世界正视对黑人做过什么) + Williams 是一环没看到结果但传火 + 「有些事做时就知看不到结尾但还得做总得有人先点」',
      engagementHook: '我是一条长链上的一环——前面有揭发殖民屠杀的人，后面有争民权的人，我们做的是同一件事。有些火,你点的时候就知道自己看不到它烧起来。可总得有人先点。这样的事，你愿意做吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是失败者。我揭发利奥波德，没扳倒他。我那封信发出后，他的刚果照样运转了 17 年。我自己呢？写完信不到一年就病死异乡，42 岁，没看到任何改变。一个人单挑一个国王，结果是国王赢了，我死了。\n\n另一种说法：我是第一个点火的人。在所有人都信那套谎、都不敢说的时候，我第一个系统地、公开地、点着名地说了出来。我用历史学家的证据，给后来所有揭发者立了样。照片、官方报告、国际运动——那条最终扳倒利奥波德的链，第一环是我。我没赢，但没有我那第一声，后面的链可能根本不会开始。\n\n这两边不是「成功加失败」。是同一件事的两面——一个看起来失败的孤身揭发，可能正是一场迟到的胜利的第一步。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a failure. I exposed Leopold and did not bring him down. After my letter went out, his Congo ran on for 17 more years. And I? I died of illness in a foreign land less than a year after I wrote it, at 42, having seen no change. One man took on a king, and the result was the king won, and I died.\n\nThe other view: I was the first to light the fire. When everyone believed the lie and no one dared speak, I was the first to say it, systematically, publicly, by name. With a historian\'s evidence I set the pattern for every whistleblower after me. The photographs, the official report, the international movement, the chain that finally brought Leopold down, its first link was me. I did not win, but without my first cry, the chain behind it might never have begun at all.\n\nThese are not "success and failure." They are two faces of one thing: a lone exposure that looks like failure may be the first step of a victory that arrives late.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (失败者/没扳倒利奥波德/刚果又运转 17 年/写信不到一年病死 42 岁没看到改变/国王赢我死) / 另一种说法 (第一个点火的人/众人信谎不敢说时第一个系统公开点名说/用历史学家证据立样/扳倒利奥波德的链第一环是我/没我第一声链不会开始) / 同一件事两面 (看似失败的孤身揭发=迟到胜利第一步) / 想 30 秒',
      engagementHook: '一个看起来彻底失败的孤身揭发，和一场迟到胜利的第一步——是同一件事的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'gw-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人？\n\n一个没钱没势的黑人记者，单挑一个国王，用一支笔和满本证据，第一个把刚果的真相说给全世界听。他没赢，写完信不到一年就死了，没看到任何改变。可他点的那把火，二十年后烧倒了那个国王。一个「没看到结果的失败者」和「一场胜利的第一环」，是同一个人。你怎么称这个分量？\n\n再想一步。今天你身边，有没有一件你看见了、别人却都装看不见的不对的事——班上有人被欺负、某个规则明显不公、某句谎话被大家默认？说出来，可能没人撑你，可能你自己吃亏，可能你根本看不到它被改变。\n\n那时候，你会跟大家一样沉默，还是会像我一样——哪怕只有一支笔、哪怕赢不了，也先把那把火点起来？',
        en: 'Having walked my whole life, how would you judge a man like this?\n\nA Black journalist with no money and no power took on a king, and with a single pen and a notebook full of evidence was the first to tell the whole world the truth of the Congo. He did not win; he died less than a year after writing the letter, having seen no change. Yet the fire he lit burned the king down twenty years later. A "failure who saw no result" and "the first link of a victory" are the same man. How do you weigh that?\n\nThen take one more step. In your own life today, is there something wrong that you have seen while everyone else pretends not to, someone bullied in class, a rule that is plainly unfair, a lie everyone quietly accepts? Speak up, and maybe no one backs you, maybe you yourself lose out, maybe you never see it changed.\n\nWhen that happens, will you stay silent like everyone else, or will you do what I did: even with only a pen, even when you cannot win, light the fire first?',
      },
      deliverGoal: 'N11 close — 评价人 (没钱没势黑人记者单挑国王/一支笔满本证据第一个说真相/没赢不到一年死没看到改变/但火 20 年后烧倒国王 → 没看到结果的失败者 vs 一场胜利第一环同一人) + transfer「今天你身边别人装看不见的不对的事 (有人被欺负/规则不公/谎话被默认)」+ 你会沉默还是像我哪怕赢不了也先点火',
      engagementHook: '一个没看到结果的失败者，和一场胜利的第一环——是同一个人。你会怎么评价他？今天你身边那件别人都装看不见的事，你会沉默，还是哪怕赢不了也先把火点起来？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Congo rubber villager (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var villagerLens = {
  id: 'congo-rubber-villager-receiving-end',
  name: 'A Congo rubber villager',
  nameCn: '一个刚果橡胶村民',
  role: 'receiving-end',
  perspectiveTag: 'rubber-quota-bearer',
  icon: '🌿',
  description: {
    cn: '刚果河流域一个采橡胶的村民，约 1870 年生（这一遍的人是合成的，但他经历的每一件事，都有真实的照片和调查记录为证）。在那套制度里，他不是一个有名字的人，是一个橡胶配额。森林越割越远，配额越来越重，完不成的代价，是村里被抓走的人质，是有人手上少了一只手。这一遍，你站在那部宪法、那些条约、那张地图本来根本没打算算进去的人这边，从承受的那一端，看 1884 年以后的非洲。',
    en: 'A villager who gathered rubber in the Congo river basin, born around 1870 (the person in this pass is a composite, but every single thing he lived through is borne out by real photographs and investigation records). In that system he was not a person with a name; he was a rubber quota. The forest was tapped farther and farther out, the quota grew heavier and heavier, and the price of failing it was the village hostages taken away, a hand missing from someone\'s arm. This pass puts you on the side of the people that the constitution, the treaties, the map never planned to count in, looking at Africa after 1884, from the end that bore it.',
  },
  storyboard: [
    {
      id: 'vil-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '在他们的账本上，我不是一个名字。我是一个数字——一份橡胶配额。\n\n我是刚果河边一个村子的人，大概 1870 年生在这里。我的村子有森林、有河、有我从小认识的每一个人。然后有一天，远方来的人说，这片土地，现在归一个我们从没见过、从没听过名字的国王。\n\n（你接下来听到的这个人是合成的——但他经历的每一件事，都有真实的照片和调查记录在那儿。这是把成千上万真实的人，浓缩成一个你能听见的声音。）\n\n这一遍，你站在我这里。不是站在写宪法、签条约、画地图的人那边——是站在那张地图上，一个本来根本没打算被算进去的人这边。\n\n我要告诉你，当远方那位国王说他来「带文明」的时候，文明，落在我们村子里，到底是什么样子。',
        en: 'On their ledger, I am not a name. I am a number, a rubber quota.\n\nI am a man of a village by the Congo river, born here around 1870. My village had its forest, its river, and every person I had known since childhood. Then one day, men from far away said that this land now belonged to a king we had never seen, whose name we had never heard.\n\n(The person you are about to hear is a composite, but every single thing he lived through has real photographs and investigation records behind it. This is tens of thousands of real people, drawn down into one voice you can hear.)\n\nThis pass, you stand where I stand. Not on the side of the people who wrote the constitution, signed the treaties, drew the map, but on the side of one person on that map who was never meant to be counted in at all.\n\nI will tell you what "civilization" actually looked like when it landed in our village, the day that king from far away said he had come to "bring" it.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 账本上不是名字是数字一份橡胶配额 + 刚果河边村子约 1870 生 (有森林河认识的每个人) + 远方人说土地归一个没见过没听过的国王 + anti-fab 括号短句 (合成人物/每件经历有真实照片调查记录/把成千上万真人浓缩成一个能听见的声音) + 这一遍站在地图上没打算算进去的人这边 + 文明落在村里是什么样',
      engagementHook: '在他们的账本上，我不是一个名字，是一份橡胶配额。「被写成一个数字」——你能想象那是什么感觉吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'vil-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我们原来的日子，你才懂后来失去的是什么。\n\n我的村子靠河。我们种木薯、捕鱼、打猎。男人下河、进林子，女人种地、带孩子。我们有自己的语言、自己的歌、自己的规矩——谁家有事，全村一起帮。\n\n我们不富，可我们是自己土地的主人。林子是我们的，河是我们的，时间也是我们的——什么时候干活，什么时候歇，我们自己说了算。\n\n我从没听说过什么「比利时」，什么「国王」，什么「文明」。我们活得好好的，几百年都这么活过来的。\n\n说一句你也许会意外的话：在这片大陆上，几百年前就有过宏大的城市和帝国。我们不是「等着别人来开化的野人」。我们有自己的生活，完整的生活。\n\n然后，那些远方来的人到了。从那以后，「我们自己说了算」这件事，就一点一点没有了。',
        en: 'First, let me tell you the life we used to have, so you understand what was lost.\n\nMy village sat by the river. We grew cassava, fished, hunted. The men went to the river and into the forest; the women farmed and minded the children. We had our own language, our own songs, our own rules, when one household had trouble, the whole village helped.\n\nWe were not rich, but we were masters of our own land. The forest was ours, the river was ours, and our time was ours too, when to work and when to rest, we decided for ourselves.\n\nI had never heard of any "Belgium," any "king," any "civilization." We lived well, as we had lived for centuries.\n\nLet me say something that may surprise you: on this continent, centuries ago, there were great cities and empires. We were not "savages waiting for someone to come and civilize us." We had our own life, a whole life.\n\nThen the men from far away arrived. From then on, the thing called "we decide for ourselves" was, bit by bit, taken away.',
      },
      deliverGoal: 'N2 setup — 原来的日子 (靠河种木薯捕鱼打猎/有语言歌规矩/全村互助) + 是自己土地的主人 (林子河时间都是自己的/自己说了算) + 没听说过比利时国王文明/几百年这么活过来 + 反 Whig (这片大陆几百年前有宏大城市和帝国/不是等被开化的野人/有完整的生活) + 远方人到后「自己说了算」一点点没了',
      engagementHook: '我从没听说过「比利时」「国王」「文明」——我们有自己的语言、歌、规矩，活得好好的，活了几百年。「带文明来」之前，我们真的没有文明吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'vil-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '变化是从「橡胶」这两个字开始的。\n\n我们的林子里，长着一种藤蔓，割开它，会流出白色的浆——橡胶。我们祖祖辈辈守着它，从没把它当回事。\n\n可那些远方来的人，疯了一样要它。后来我才慢慢拼凑明白：在很远很远的地方，他们的车、他们的机器，需要橡胶。我们林子里这种不值钱的浆，在那边能换成钱。\n\n于是他们带着枪来了，给我们村子定下一条规矩：每隔一段时间，必须交上来一定数量的橡胶。这叫「配额」。\n\n一开始，配额不算太重。林子近，藤蔓多，咬咬牙交得上。\n\n可配额年年加重，近处的藤蔓越割越少，我们得走进更深的林子，离家越来越远，一去就是好几天。我们的木薯地荒了，鱼也没人捕了——所有的力气，都被那条配额吸走了。\n\n那时候我还不知道，比交不上橡胶更可怕的事，还在后头。',
        en: 'The change began with one word: rubber.\n\nIn our forest grew a kind of vine; cut it, and a white sap flowed out, rubber. Our ancestors had lived beside it for generations and never thought much of it.\n\nBut the men from far away wanted it as if they had gone mad. Bit by bit I pieced it together: in some place very, very far off, their carriages, their machines, needed rubber. This worthless sap of our forest could be turned into money over there.\n\nSo they came with guns and set our village a rule: at fixed intervals, we must hand over a certain amount of rubber. This was the "quota."\n\nAt first the quota was not too heavy. The forest was near, the vines were many; grit your teeth and you could meet it.\n\nBut the quota grew heavier year by year. The vines nearby were tapped thinner and thinner, and we had to go into deeper forest, farther and farther from home, gone for days at a time. Our cassava fields went to weeds, no one fished anymore. All our strength was drained away by that quota.\n\nI did not yet know that something more terrible than failing to meet the rubber was still to come.',
      },
      deliverGoal: 'N3 setup — 变化从橡胶开始 (林子藤蔓割出白浆/祖辈没当回事) + 远方人疯了要它 (他们的车机器需要橡胶/这边能换钱/跨 B1 工业革命隐线) + 带枪来定配额 (定期交一定数量) + 配额起初不重后年年加重 (近处藤蔓越少→走更深林子离家越远好几天/木薯地荒鱼没人捕力气被吸走) + 伏笔比交不上更可怕的还在后头',
      engagementHook: '我们守了几百年都不当回事的白色浆水，在很远的地方能换成钱——于是他们带着枪来了。一样东西突然「值钱」了，会不会就成了灾难的开始？',
      expectsRealAnswer: false,
    },
    {
      id: 'vil-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n这一回的配额，比哪一次都重。你和村里的男人在林子里跑了好多天，藤蔓割得手都麻了，可凑出来的橡胶，还是不够数。\n\n你心里清楚那意味着什么。完不成配额，殖民军队会来。他们的办法你见过：抓走村里的女人和孩子当人质，关起来，逼你们拿橡胶去赎；或者，直接惩罚——你听过别村的事，有人因为交不够，手被砍掉了。\n\n你蹲在林子里，手上是不够数的橡胶。你脑子里转着几条路，每条都是绝路：\n\n继续往更深的林子走？那里有野兽，有别的村子的人，可能再也回不来。空着手回村?人质会替你受罚。逃走，带全家躲进林子深处?那就再也没有家了。\n\n远方那位国王，在他的宫殿里说他给我们「带来了文明」。\n\n而你蹲在这里，手里攥着不够数的橡胶，要在几条绝路里选一条。这，就是落在你头上的「文明」。\n\n你怎么选？',
        en: 'Now you are me.\n\nThis time the quota is heavier than ever. You and the men of the village have run through the forest for days, tapped vines until your hands went numb, and the rubber you have scraped together is still not enough.\n\nYou know in your gut what that means. Fail the quota, and the colonial soldiers will come. You have seen their methods: seize the village\'s women and children as hostages, lock them up, force you to bring rubber to ransom them; or punish you outright, you have heard what happened in other villages, where someone who could not deliver enough had a hand cut off.\n\nYou crouch in the forest, the not-enough rubber in your hands. Several roads turn over in your mind, and every one is a dead end.\n\nGo deeper into the forest? There are wild animals there, and people of other villages; you may never come back. Return to the village empty-handed? The hostages will be punished in your place. Run, take your whole family into the deep forest? Then there is no home anymore.\n\nThe king far away, in his palace, says he has "brought us civilization."\n\nAnd you crouch here, the not-enough rubber clutched in your hands, having to choose one road among several dead ends. This, this is the "civilization" that landed on you.\n\nWhich do you choose?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 这次配额最重 (跑好多天手麻凑的橡胶还不够) + 知道完不成意味什么 (军队来抓女人孩子人质逼赎/或砍手别村听过) + 蹲林子手上不够数橡胶/几条路都是绝路 (往更深林子有野兽回不来/空手回人质受罚/逃走没了家) + 国王宫殿说带来文明 vs 你在几条绝路里选 + 这就是落头上的文明',
      engagementHook: '远方那位国王在宫殿里说他给我们「带来了文明」——而我蹲在林子里，手里攥着不够数的橡胶，要在几条绝路里选一条。这就是落在我头上的「文明」。你会怎么选？',
      expectsRealAnswer: false,
    },
    {
      id: 'vil-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那一次，军队还是来了。\n\n他们点数橡胶，不够。然后他们做了那件事——我一辈子都忘不掉。\n\n我不细讲那个场面。被砍掉手的人里，有大人，也有孩子。很多人没有当场死，是带着只剩一只手的身体，活了下来。那道伤口，跟着他们一辈子。\n\n（我说的不是传言。1904 年，有个外来的人，拍下了一张照片：一个父亲，坐在自家屋前，盯着地上他孩子被砍下来的一只小手。那张照片，后来被很多很多人看见。）\n\n为什么是手？我后来才听说原因，荒唐又冷血：那些士兵领了子弹，长官要他们交回证据，证明子弹没浪费——他们就砍下被打死者的手交差。慢慢地，一只手，成了一笔账：抵一份没交上的橡胶。\n\n你听明白了吗?在那套制度里，一个人的手，跟一公斤橡胶，是可以放在同一本账上算的。',
        en: 'That time, the soldiers came after all.\n\nThey counted the rubber, and it was not enough. Then they did the thing I will never forget my whole life.\n\nI will not tell that scene in detail. Among those whose hands were cut off were grown people, and children too. Many did not die on the spot; they lived on with a body that had only one hand left. That wound stayed with them their whole lives.\n\n(What I tell is not rumor. In 1904 an outsider took a photograph: a father, sitting before his own house, staring at the small severed hand of his child on the ground. That photograph was later seen by very, very many people.)\n\nWhy the hand? Only later did I hear the reason, absurd and cold-blooded: those soldiers drew bullets, and their officers ordered them to bring back proof that no bullet was wasted, so they cut off the hands of the dead to account for them. Slowly, a hand became an entry in a ledger: one for a missing batch of rubber.\n\nDo you understand it now? In that system, a person\'s hand and a kilogram of rubber could be set down on the same ledger and reckoned together.',
      },
      deliverGoal: 'N5 story (documented restraint, dignity) — 军队来点数不够 + 不细讲场面 (被砍手有大人有孩子/很多没当场死带一只手活下来/伤口跟一辈子) + anti-fab 括号短句 (1904 照片/父亲盯着孩子被砍的小手/后来很多人看见) + 砍手原因 (子弹证据→手抵账) + 「一个人的手跟一公斤橡胶在同一本账上算」',
      engagementHook: '在那套制度里，一个人的手，跟一公斤橡胶，是可以放在同一本账上算的。当人被换算成货物，到底是什么东西坏掉了？',
      expectsRealAnswer: false,
    },
    {
      id: 'vil-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '远方那位国王，对全世界讲的是另一套话。\n\n我后来才知道，他说他来刚果，是为了「反对奴隶贩子」，是为了给我们「带来文明」。他在欧洲开会、写信、筹款，用「文明」「慈善」这些词，赢得了一片掌声。\n\n你听听这两套话，对在一起多刺耳：\n\n他在那边说「文明」，我们这边收到的，是配额、是人质、是地上那只被砍下来的手。他用「文明」这个词去博掌声、去要钱；我们用一只手的代价，去填他那个词背后的账。\n\n同一个词——「文明」。在他嘴里，是光鲜的招牌；落到我们村里，是一道砍下去的伤口。一套话，两个方向，隔着四千公里，一边是掌声，一边是血。\n\n我不识字，没法去他的会上反驳他。可我身上、我村里人身上的伤，就是对他那个词最硬的反驳。\n\n（后来真有人替我们说话了——一个远道来的记者，把这一切写给了全世界。他怎么做的，你换到他那一遍能听见。）',
        en: 'The king far away told the whole world another story.\n\nOnly later did I learn that he said he had come to the Congo to "fight the slave traders," to "bring us civilization." In Europe he held conferences, wrote letters, raised money, and with the words "civilization" and "charity" he won a wave of applause.\n\nListen to these two stories, and how they grate against each other:\n\nThere he said "civilization"; here, what we received was quotas, hostages, the severed hand on the ground. He used the word "civilization" to win applause and ask for money; we paid the price of a hand to fill the ledger behind his word.\n\nThe same word, "civilization." In his mouth, a shining signboard; landed in our village, a wound cut down. One story, two directions, four thousand kilometers apart, applause on one side, blood on the other.\n\nI cannot read; I cannot go to his conference to argue with him. But the wounds on my body, on the bodies of my villagers, are the hardest argument against his word.\n\n(Later someone did speak for us, a journalist who came from far off and wrote it all to the whole world. How he did it, you can hear when you switch to his pass.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 国王对世界讲另一套 (反奴隶贩子/带来文明/开会写信筹款用文明慈善赢掌声) + 两套话对在一起刺耳 (他说文明 vs 这边收到配额人质地上的手/他用文明博掌声要钱 vs 我们用一只手代价填账) + 同一个词「文明」两方向 (招牌 vs 砍下的伤口/四千公里一边掌声一边血) + 不识字但身上的伤是最硬反驳 + 桥到 Williams lens',
      engagementHook: '同一个词——「文明」——在他嘴里是光鲜招牌，落到我们村里是一道砍下去的伤口。一套话隔着四千公里，一边是掌声，一边是血。一个词，怎么会有两个完全相反的用法？',
      expectsRealAnswer: false,
    },
    {
      id: 'vil-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你也许会问：那我们就只能受着吗？没有人反抗吗？\n\n有的。我们不是没有反抗。\n\n有人逃，带着全家躲进林子最深处，宁可吃野果、躲野兽，也不回去交橡胶。有的村子联合起来，拿起长矛和那些枪对打——明知打不过，还是打。有人偷偷给人质送吃的，有人帮逃跑的同乡带路。\n\n可是你要明白：他们有枪，有大炮，有一整套制度。我们有什么？长矛、林子、一条条人命。\n\n大多数反抗，被很快镇压下去。镇压之后，配额更重，惩罚更狠，被砍手的人更多。\n\n这是承受方最难讲清的一件事：不是我们不反抗——是反抗的代价，常常比忍着还要惨。外面的人后来只看见照片上「被砍手的受害者」，很少有人记得，我们里面有多少人，是宁可死也要反抗过的。\n\n沉默，不等于认命。很多时候，沉默只是因为，开口的人已经被打死了。',
        en: 'You might ask: then could we only endure it? Did no one resist?\n\nWe did. We were not without resistance.\n\nSome fled, taking their whole families into the deepest forest, choosing wild fruit and the danger of beasts over going back to deliver rubber. Some villages joined together and fought those guns with spears, knowing they could not win, and fighting anyway. Some secretly brought food to the hostages; some guided fleeing neighbors.\n\nBut you must understand: they had guns, cannon, a whole system. What did we have? Spears, the forest, lives one by one.\n\nMost resistance was put down quickly. After it was put down, the quota grew heavier, the punishment crueler, the hands taken more numerous.\n\nThis is the hardest thing for those on the receiving end to make clear: it is not that we did not resist, it is that the price of resisting was often worse than enduring. Outsiders later saw only the "victims with severed hands" in the photographs, and few remembered how many among us would rather have died than not resist.\n\nSilence is not the same as resignation. Often, silence is only because the ones who spoke up had already been killed.',
      },
      deliverGoal: 'N7 story — 反抗存在 (逃进最深林子宁吃野果躲野兽不交橡胶/村子联合拿长矛对枪明知打不过还打/偷给人质送吃的帮逃跑带路) + 但他们有枪炮制度我们只有长矛林子人命 + 多数反抗很快被镇压 (镇压后配额更重砍手更多) + 「不是不反抗是反抗代价比忍还惨/外人只看见照片受害者很少记得多少人宁死反抗」+ 「沉默不等于认命/开口的人已被打死」',
      engagementHook: '外面的人后来只看见照片上「被砍手的受害者」，很少有人记得，我们里面有多少人宁可死也反抗过。沉默，真的等于认命吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'vil-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '这些年到底死了多少人？\n\n我说不出准数。没人替我们一个一个记下来。后来外面的学者估算，那二十多年里，刚果死的人，从几百万到上千万——是病死的、饿死的、被打死的、累死在林子里的，加在一起。\n\n你听清楚这件事的可怕之处：连一个准确的数字，我们都没有。因为那位国王临死前，把账本烧了三天。\n\n我们大多数人，活着的时候是「一份橡胶配额」，死了以后，连「一」这个数都不算。我们没有墓碑，没有名字留在任何一张纸上。\n\n这就是为什么，这一遍要站在我这边讲。写宪法、签条约、画地图、记账本的人——他们留下了名字、雕像、宏伟的建筑。而我们这些被算进「人口」、被算成橡胶的人，连被数清楚的资格都没有。\n\n历史，常常只记得拿笔的人。这一遍，是想让你听见，那些没机会拿笔的人。',
        en: 'How many died in those years?\n\nI cannot give you an exact figure. No one wrote us down one by one. Scholars outside later estimated that in those twenty-odd years, the dead of the Congo numbered from several million to ten million, those who died of disease, of hunger, of being shot, of being worked to death in the forest, all added together.\n\nHear the horror of this clearly: we do not even have an exact number. Because that king, before he died, burned the accounts for three days.\n\nMost of us, while alive, were "a rubber quota"; once dead, we did not count even as the number "one." We have no gravestones, no names left on any piece of paper.\n\nThis is why this pass is told from my side. The people who wrote the constitution, signed the treaties, drew the map, kept the ledger, they left names, statues, grand buildings. And we, who were counted into the "population," counted as rubber, were not even granted the right to be counted clearly.\n\nHistory often remembers only the ones who held the pen. This pass means to let you hear the ones who never had a chance to hold it.',
      },
      deliverGoal: 'N8 story — 死了多少说不出准数 (没人一个个记下/外面学者估算二十多年几百万到上千万/病死饿死打死累死) + 可怕之处连准数都没有 (国王临死烧账三天) + 大多数活着是橡胶配额死了连「一」都不算 (没墓碑没名字留在纸上) + 为什么站这边讲 (写宪法签条约画地图记账的人留下名字雕像建筑/我们被算进人口算成橡胶连被数清的资格都没有) + 「历史只记得拿笔的人/这一遍让你听见没机会拿笔的人」',
      engagementHook: '我们活着的时候是「一份橡胶配额」，死了以后，连「一」这个数都不算——因为账本被烧了三天。历史常常只记得拿笔的人。那些没机会拿笔的人，就等于没存在过吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'vil-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那位国王 1909 年死了，刚果的事，慢慢被外面的人知道了。可那张在柏林会议上画下的地图，留到了今天。\n\n1884 年，欧洲人在柏林开会，对着一张非洲地图，用尺子划线，把整块大陆分给各国。他们划线时，根本不看地上住的是哪个族群、说哪种话。一条直线，可能把一个民族劈成两半，也可能把两个一直不和的族群，硬塞进同一个国家。\n\n你今天看世界地图，会发现非洲有好多笔直的国界，像用尺子比着画的。它们就是那次会议画的。后来非洲很多内战、很多冲突的根，能一直追回那张桌子。\n\n而别忘了：就在这同一片土地上，我们的祖先建过宏大的帝国，有过世界级的城市。（你跑过 mali-empire 那个 Topic 会记得。）我们从来不是「等着被文明拯救的空白」。\n\n那位国王说他来「带文明」。可文明落在我们头上，是配额、是砍下的手、是一条用尺子随手划出来、害了我们一百多年的国界。',
        en: 'That king died in 1909, and the Congo\'s story slowly became known outside. But the map drawn at the Berlin Conference has lasted to this day.\n\nIn 1884 the Europeans met at Berlin, and before a map of Africa they drew lines with a ruler, dividing the whole continent among their countries. As they drew, they paid no heed to which peoples lived on the ground, or what languages they spoke. One straight line might split a people in two, or pen two long-feuding peoples into a single country.\n\nLook at a world map today and you will find Africa has many ruler-straight borders, as if drawn against a ruler\'s edge. They were drawn at that conference. The roots of many of Africa\'s later civil wars and conflicts can be traced all the way back to that table.\n\nAnd do not forget: on this very land, our ancestors built great empires and had world-class cities. (Run the mali-empire topic and you will remember.) We were never "a blank waiting to be saved by civilization."\n\nThat king said he came to "bring civilization." But the civilization that landed on us was quotas, severed hands, and a border drawn offhand with a ruler that has harmed us for more than a hundred years.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 国王 1909 死刚果事被知道但柏林地图留到今天 + 1884 Berlin Conference 用尺子划线分大陆 (不看族群语言/直线劈民族/塞世仇族群进一国) + 今日非洲直线国界=那次会议画的→内战冲突根源 + 跨 mali-empire Topic 锚 (同片土地祖先建宏大帝国世界级城市/从来不是等被拯救的空白/反 Whig) + 文明落头上是配额砍手+尺子随手划害一百多年的国界',
      engagementHook: '就在这同一片土地上，我们的祖先建过宏大的帝国、有过世界级的城市。我们从来不是「等着被文明拯救的空白」。「带来文明」这四个字，到底是谁带给了谁什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'vil-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看那场所谓的「文明使命」，两种说法都站得住。\n\n一种说法：那就是一场种族灭绝级的抢劫，裹着一层「文明」的糖衣。他们要的从头到尾就是橡胶和钱。「反奴隶」「带文明」全是幌子，用来骗欧洲人掏钱、骗世界鼓掌。落到我们头上的，是配额、人质、砍下来的手，和几百万条没人数清的命。对我们这样的人，那套话从一开始就不打算算数。\n\n另一种说法：可也正是被他们写下、被他们挂在嘴上的那些词——「自由」「文明」「人」——后来反过来成了对付他们的武器。有人用这些词揭发了他们，有人用这些词争来了独立。一句他们用来骗人的漂亮话，被承受的人捡起来，对准了说它的人。\n\n两种说法都站得住。它既是一场裹糖衣的抢劫，也是一把后来被我们夺过来的刀。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at that so-called "civilizing mission." Both views stand.\n\nOne view: it was a genocide-scale robbery wrapped in a sugar coating of "civilization." What they wanted, from start to finish, was rubber and money. "Anti-slavery" and "bringing civilization" were all a front, to trick Europeans into paying and the world into applauding. What landed on us was quotas, hostages, severed hands, and several million lives no one ever counted. For people like us, that story never meant to count us at all.\n\nThe other view: yet it was exactly those words they wrote down and kept in their mouths, "freedom," "civilization," "person," that later turned around to become weapons against them. Some used those words to expose them; some used those words to win independence. A fine phrase they used to deceive was picked up by the people who bore it, and aimed at the ones who spoke it.\n\nBoth views stand. It was a sugar-coated robbery, and it was a knife later wrested into our own hands.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (种族灭绝级抢劫裹文明糖衣/从头要橡胶和钱/反奴隶带文明全是幌子骗钱骗掌声/落到我们头上配额人质砍手几百万没数清的命/那套话从不打算算我们) / 另一种说法 (被他们写下挂嘴上的词自由文明人后来反成对付他们的武器/有人用揭发有人用争独立/漂亮话被承受者捡起对准说它的人) / 两种都站得住 (裹糖衣的抢劫 vs 后来夺过来的刀) / 想 30 秒',
      engagementHook: '一种说法：那是一场裹着糖衣的抢劫。另一种说法：他们用来骗人的那些漂亮话，后来被我们夺过来，成了对付他们的刀。两种说法都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'vil-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一片本来属于我们的林子，一条压垮全村的配额，一只地上被砍下的手，一个连数字都不算的死，一片被尺子随手划过的土地——你会怎么评价这样一段历史？\n\n一套「带文明来」的说法，一边赢着欧洲的掌声，一边在我们村里砍下一只只手。你会说它是裹糖衣的抢劫，还是说，那些被他们写下的词，终究成了我们手里的刀？你怎么评？\n\n再想一步：今天你身边，有没有谁，用一套「好听的说法」，盖住一件其实在伤害别人的事——某个说自己「为大家好」的安排，落到某些人头上却是另一回事；某句漂亮的口号，背后是有人在默默吃亏？\n\n那时候，你会被那套漂亮话哄过去，还是会像那个不肯遮住自己疤、像那个孤身写信揭发的人一样——把他们说的话，捡起来，对准说它的人？',
        en: 'Having walked my whole life, a forest that was once ours, a quota that crushed the whole village, a severed hand on the ground, a death that did not count even as a number, a land scored offhand by a ruler, how would you judge a stretch of history like this?\n\nA story of "bringing civilization" that won Europe\'s applause on one side while cutting off hand after hand in our village on the other. Would you call it a sugar-coated robbery, or say that the words they wrote down became, in the end, a knife in our own hands? How do you judge it?\n\nThen take one more step: in your own life today, is there anyone using a set of "fine-sounding words" to cover something that actually harms others, an arrangement that says it is "for everyone\'s good" but lands on certain people as another thing entirely, a fine slogan with someone quietly paying the price behind it?\n\nWhen that happens, will you be lulled past it by the fine words, or will you do what the one who would not cover her scar did, what the one who wrote alone to expose it did: pick up the words they spoke, and aim them back at the ones who spoke them?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价历史 (本属我们的林子/压垮全村的配额/地上被砍的手/连数字都不算的死/被尺子划过的土地 → 裹糖衣的抢劫 vs 被写下的词成了我们手里的刀) + transfer「今天你身边用好听说法盖伤害别人的事 (为大家好的安排落某些人头上另一回事/漂亮口号背后有人吃亏)」+ 你会被哄过去还是像不遮疤的人/孤身写信揭发的人把话对准说它的人 (跨 lens 呼应 Mum Bett 母题 + Williams)',
      engagementHook: '一边赢着欧洲的掌声，一边在我们村里砍下一只只手——你会怎么评价这样一段历史？今天你身边那套「为大家好」却让人吃亏的说法，你会被它哄过去，还是把那些话捡起来，对准说它的人？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'leopold-ii':                            leopoldLens,
  'gw-williams':                           williamsLens,
  'congo-rubber-villager-receiving-end':   villagerLens,
};

// per TOPIC_ROADMAP_G6_G12.md B3 + receiving-end 优先 pattern:
// 被殖民暴政承受方 + N1 gold-standard hook + N6「文明使命」修辞 vs 砍手暴行跨 lens 对位 + N10/N11 抢劫 vs 夺过来的刀 closing
export var defaultLens = 'congo-rubber-villager-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'scramble-for-africa-1884',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'leopold-ii': 30, 'gw-williams': 28, 'congo-rubber-villager-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, shorter spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「文明使命 / civilizing mission」修辞两个方向 (Leopold 用它博掌声筹款 vs 村里收到配额人质砍手 + Williams 把它翻过来当揭发的尺子)',
    'defaultLens: congo-rubber-villager-receiving-end — 受影响者优先 (被殖民暴政承受方 + gold-standard N1 hook + N10/N11 抢劫 vs 夺过来的刀)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: composite villager flagged 括号短句 (N1) + 砍手细节用 1904 Alice Seeley Harris 照片记录锚定 (N5/N6/leo-N6); documented restraint 不渲染血腥/dignity for receiving-end',
    'cross-Topic 锚: Leopold 文明使命→age-of-exploration (Columbus/Las Casas); Williams 证据→scientific-revolution; 殖民前繁荣→mali-empire-1235 (Timbuktu 知识中心)',
    '反 Whig: 用 mali-empire 对照拆解「欧洲给非洲带来文明」谎言 + Berlin Conference 划界→今日非洲冲突根源',
    'math/date check: Leopold II 1835-1909; G.W. Williams 1849-1891 (公开信 1890/死时 42); Berlin Conf 1884-85; 1890s 橡胶热; 1904 砍手照片; 1908 交比利时政府',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
