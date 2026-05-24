// ─── Decolonization & the Non-Aligned World 1947-1975 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 去殖民化与不结盟 · Decolonization & the Non-Aligned World 1947-1975
// HS 10 · AP World Modern Unit 8 (decolonization / Non-Aligned Movement)
//
// 3 lens (per TOPIC_ROADMAP_G6_G12.md B8 + AUTHORING_PIPELINE 第 8/12 条):
//   - winston-churchill              (perpetrator-actor) — Winston Churchill 1874-1965 反纳粹英雄 + 顽固帝国主义者 + 1943 孟加拉饥荒拒援 ~300 万死
//   - ralph-bunche                   (lonely-mediator)   — Ralph Bunche 1904-1971 非裔美国外交官 / 联合国斡旋 / 1950 诺贝尔和平奖
//   - partition-refugee-receiving-end(receiving-end)     — 1947 印巴分治旁遮普难民 (composite, c.1920-1990) / 大迁徙中失去一切的一个人
//
// 跨 lens micro-detail (N6 anchor):
//   「一条线 / a line on a map」殖民者画的线 — 同一支笔的两个方向:
//   - Churchill lens N6: 帝国就是一张被英国画满线的世界地图 / 谁来管这些线
//   - 分治难民 lens N6: 1947 Radcliffe 用 5 周在地图上画一条线 → 旁遮普被切成两半 / 线两边的人连夜逃命
//   Ralph Bunche lens N6: 1949 他在罗德岛 (Rhodes) 谈判桌上一寸一寸地画停火线 / 同样是线但他想让线少流血
//
// 跨 Topic 锚:
//   - Churchill 帝国主义面 → B3 Leopold + B4 Wilson (「英雄」殖民暴力同体母题, 反 Whig)
//   - Ralph Bunche → A4 Douglass + B3 George W. Williams (非裔美国人全球人权角色长链)
//   - 印巴分治难民 → B3 Berlin Conference 划界 (殖民者画的线制造永久冲突) + B7 冷战 (新国家被卷入两极)
//
// defaultLens = 'partition-refugee-receiving-end' (受影响者优先 pattern: 普通民众 + 独立暴力代价 + 跨 Topic 划界对位)
//
// NEW STRUCTURE SPEC (shorter format):
//   - 11 nodes per lens (multi-faction)
//   - 220-360 CN chars/node; only N6 + N10/N11 synthesis anchors may reach 480, NOT 550; every other ≤380
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true; all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md cultural ban (decolonization → real terms: 印巴分治/不结盟运动/Berlin 划界/孟加拉饥荒;
//   NEVER 玉玺/翰林/宰相/朕/圣旨/太子) / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Winston Churchill (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var churchillLens = {
  id: 'winston-churchill',
  name: 'Winston Churchill',
  nameCn: '温斯顿·丘吉尔',
  role: 'perpetrator-actor',
  perspectiveTag: 'empire-defender',
  icon: '🎩',
  description: {
    cn: '英国人，1874 年生在一座贵族庄园里。二战时他是首相，带领英国顶住纳粹德国的轰炸，是世界公认的反法西斯英雄。同一个他，一辈子坚信大英帝国统治世界是天经地义，公开说自己「不是为了拆掉帝国才当首相的」。1943 年印度孟加拉闹大饥荒，约 300 万人饿死，他拒绝调粮救援。这一遍让你从一个真英雄、也真帝国主义者的内部，看「自由的胜利」这个故事的另一面。',
    en: 'An Englishman, born in 1874 in an aristocratic estate. During the Second World War he was prime minister, holding Britain together under Nazi German bombing, and the world remembers him as a hero against fascism. The same man believed all his life that the British Empire ruling the world was simply natural, and said openly that he had not become prime minister "to preside over the breakup of the Empire." In 1943, when a great famine struck Bengal in India and about three million people starved to death, he refused to send relief grain. This pass lets you watch, from inside a man who was both a real hero and a real imperialist, the other side of the story we call "the victory of freedom."',
  },
  storyboard: [
    {
      id: 'churchill-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1942 年的伦敦，炸弹还在头上落。我是首相 Winston Churchill（温斯顿·丘吉尔）。全世界都在听我的广播——我说英国绝不投降，我们要在海滩上、在街道上跟纳粹打到底。\n\n那几年，我是反法西斯的英雄。这一点，没人能否认，也包括我自己。\n\n可同一个我，那几年还说过另一句话。有人问起印度独立，我说：我当首相，不是为了去主持大英帝国的散伙。\n\n你看，同一张嘴：一边喊「绝不向纳粹的暴政低头」，一边说「我的帝国一寸都不让」。\n\n这一遍，你坐进我这个位置。你会看见一个真英雄，怎么同时是一个真正的帝国主义者——这两件事，长在同一个人身上。',
        en: 'London, 1942, bombs still falling overhead. I am the prime minister, Winston Churchill. The whole world listens to my broadcasts. I say Britain will never surrender, that we will fight the Nazis on the beaches and in the streets to the very end.\n\nIn those years I was a hero against fascism. No one can deny it, myself included.\n\nBut the same man, in those same years, said another thing. When someone raised Indian independence, I said: I did not become prime minister to preside over the breakup of the British Empire.\n\nLook, the same mouth: on one side, "we will never bow to Nazi tyranny," and on the other, "I will not give up one inch of my Empire."\n\nThis pass puts you in my seat. You will see how a real hero is at the same time a real imperialist. The two things grow on the same man.',
      },
      deliverGoal: 'N1 hook — 1942 伦敦炸弹下 Churchill 自我介绍 (反纳粹英雄绝不投降) + 同时说「不为拆帝国当首相」+ 同一张嘴反暴政却不让帝国 + 这一遍视角设定 (真英雄 + 真帝国主义者同体)',
      engagementHook: '同一张嘴，一边喊「绝不向纳粹低头」，一边说「我的帝国一寸不让」——一个人能同时是英雄和压迫者吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'churchill-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是怎么长成这样一个人的。\n\n我 1874 年生在英格兰一座叫 Blenheim 的贵族庄园里，家里是公爵。我从小被教的是一件事：大英帝国是人类历史上最伟大的东西，它统治世界，是给那些「还不会自己管自己」的民族带去文明和秩序。\n\n年轻时我当兵、当记者，在印度、在苏丹、在南非打过仗。我亲眼见过帝国怎么用枪炮扩张地盘。在我眼里，那不是侵略，那是「白人的责任」——把秩序带给落后的地方。\n\n你今天听「把文明带给落后民族」这种话会觉得刺耳。可对我那一代英国上层人，这是天经地义，像太阳从东边升起一样不需要证明。\n\n记住这一点，你才懂我后面做的事：在我心里，帝国不是一个需要辩护的选择，它是世界本来的样子。',
        en: 'First, how I grew into the man I am.\n\nI was born in 1874 in an aristocratic estate called Blenheim, into a duke\'s family. From childhood I was taught one thing: the British Empire was the greatest thing in human history, and its rule over the world brought civilization and order to peoples "not yet able to govern themselves."\n\nAs a young man I was a soldier and a reporter, and I fought in India, in Sudan, in South Africa. I saw with my own eyes how the Empire expanded its territory with guns. In my eyes that was not invasion. It was "the white man\'s duty," to bring order to backward places.\n\nToday, "bringing civilization to backward peoples" grates on your ear. But for my generation of upper-class Britons it was self-evident, needing no proof, like the sun rising in the east.\n\nRemember this, and you will understand what I did later: in my heart, the Empire was not a choice to be defended. It was simply the way the world was.',
      },
      deliverGoal: 'N2 setup — Churchill 1874 生 Blenheim 贵族庄园 + 从小被教帝国是最伟大的给落后民族带文明秩序 + 年轻时印度/苏丹/南非打仗见帝国枪炮扩张 + 「白人责任」对那代上层是天经地义 + 帝国是世界本来样子不是需辩护的选择',
      engagementHook: '在我心里，帝国不是需要辩护的选择，它是世界本来的样子。你身上有没有什么「从小就觉得理所当然、从没怀疑过」的想法？',
      expectsRealAnswer: false,
    },
    {
      id: 'churchill-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '那帝国到底是个什么东西？给你一个画面。\n\n二战前，全世界差不多四分之一的土地、四分之一的人口，都在大英帝国旗下。从加拿大到印度，从非洲到澳洲，地图上一大片一大片涂成同一种颜色。英国人骄傲地说：太阳永远照在大英帝国上——意思是这帝国太大了，地球转一圈，总有一块它的地是白天。\n\n这里面最贵的一块，叫印度。英国人叫它「王冠上的明珠」。印度的棉花、茶叶、人力、市场，养着英国的工厂和财富。没有印度，大英帝国就只是个普通国家。\n\n所以你要懂我的逻辑：让印度独立，对我不是「一个殖民地走了」这么简单。那是把王冠上最大的那颗宝石抠下来。那是帝国的开始崩塌。\n\n这就是为什么，到死我都没法接受印度独立。',
        en: 'So what exactly was this Empire? Let me give you a picture.\n\nBefore the Second World War, roughly a quarter of all the land and a quarter of all the people in the world flew the British flag. From Canada to India, from Africa to Australia, great stretches of the map were painted one color. The British said proudly: the sun never sets on the British Empire, meaning it was so vast that as the earth turned, some piece of it was always in daylight.\n\nThe most precious piece was called India. The British called it "the jewel in the crown." India\'s cotton, tea, labor, and markets fed Britain\'s factories and wealth. Without India, the British Empire was just an ordinary country.\n\nSo understand my logic: letting India go free was, to me, not as simple as "one colony leaving." It was prying the largest gem out of the crown. It was the beginning of the Empire\'s collapse.\n\nThis is why, to my dying day, I could never accept Indian independence.',
      },
      deliverGoal: 'N3 setup — 帝国规模 (二战前全球 1/4 土地人口/太阳永远照在大英帝国上) + 印度=王冠上的明珠 (棉花茶叶人力市场养英国/没印度英国只是普通国家) + Churchill 逻辑: 印度独立=抠下最大宝石=帝国崩塌开始',
      engagementHook: '印度是「王冠上的明珠」，没有它英国只是个普通国家。当一样东西关系到你「是谁」，你还能客观地决定要不要放手吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'churchill-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。1943 年，印度的孟加拉地区，闹起一场可怕的大饥荒。\n\n这场饥荒后来估计有 200 万到 300 万人活活饿死（学界因是否计入间接、长期的死亡而有争议）。原因很多：日本占了缅甸切断了大米进口，台风毁了庄稼，囤粮抬价，加上战时的混乱管理。\n\n你是首相。下面的人来报告：孟加拉的人在街上饿死，请求从别处调粮食去救。\n\n你心里那本账是这样算的：现在是打仗，船要运兵、运武器、运给前线士兵的粮。把粮食调去印度，前线就少一份。而且——你心里还有一个你不太愿意承认的念头——你一向看不起印度人，私下说过很难听的话。\n\n于是你把救援的请求一次次压下去、推迟、打折。\n\n这一刻你得想：当「打赢这场仗」和「救活那 300 万人」放在你手里的天平上，你是真的没办法两全，还是你心底里，根本没把他们当成跟英国士兵一样的「人」？',
        en: 'Now you are me. In 1943, in the Bengal region of India, a terrible famine broke out.\n\nThat famine would starve an estimated two to three million people to death (scholars disagree, depending on whether indirect and longer-term deaths are counted). The causes were many: Japan had taken Burma and cut off rice imports, a cyclone had ruined crops, hoarders drove prices up, and wartime management was a mess.\n\nYou are prime minister. Your officials report: people in Bengal are dying in the streets, and they beg to move grain from elsewhere to save them.\n\nThe ledger in your heart runs like this: there is a war on, ships are needed to carry troops, weapons, and grain for soldiers at the front. Send grain to India and the front goes one share short. And there is a thought you would rather not admit: you have always looked down on Indians, and have said ugly things about them in private.\n\nSo you push the relief requests down, again and again, delaying, cutting them short.\n\nHere you must ask: when "winning this war" and "saving those three million" sit on the scale in your hand, can you truly not do both, or is it that, deep down, you never counted them as "people" the way you counted British soldiers?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1943 孟加拉饥荒 估计 200-300 万死 (学界因是否计入间接/长期死亡有争议; 日占缅甸切断大米/台风/囤粮/战时混乱) + 你是首相被请求调粮 + 战时算账 (船要运兵/私下看不起印度人) + 一次次压下推迟打折 + 自我拷问: 真没办法两全还是没把他们当人',
      engagementHook: '当「打赢这场仗」和「救活 300 万人」放在你手里的天平上，你是真的没法两全，还是心底从没把他们当成跟英国士兵一样的人？',
      expectsRealAnswer: false,
    },
    {
      id: 'churchill-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '战争打完了，1945 年。英国赢了，可英国也打穷了、打累了。\n\n这时候，印度那边压力越来越大。有个瘦小的老人，穿着自己纺的土布，靠绝食、靠不合作、靠几亿人一起不买英国货，把整个帝国逼到墙角。他叫 Gandhi（甘地）。\n\n我恨他。我公开骂他是「半裸的苦行僧」，觉得跟这种人谈判是英国的耻辱。在我眼里，把印度交出去，等于亲手拆掉我一辈子相信的东西。\n\n可英国实在撑不住了。1945 年大选，英国人把我选下了台——他们想要福利、想要和平，不想再为遥远的帝国流血。\n\n接我位子的新政府决定：放手，让印度独立。\n\n你听清这里的反讽：那个带英国打赢二战、被全世界当英雄的我，在「帝国去留」这件事上，被自己的国家、被一个穿土布的老人，一起按到了地上。',
        en: 'The war ended, 1945. Britain had won, but Britain was also broke and exhausted by the fight.\n\nNow the pressure from India grew and grew. There was a thin little old man in homespun cloth he had woven himself, who through hunger strikes, through non-cooperation, through hundreds of millions refusing to buy British goods, pushed the whole Empire into a corner. His name was Gandhi.\n\nI hated him. In public I called him a "half-naked fakir," and felt that negotiating with such a man was a disgrace to Britain. In my eyes, handing India over was tearing down with my own hands the thing I had believed in all my life.\n\nBut Britain truly could not hold on. In the 1945 election the British voted me out of office. They wanted welfare, they wanted peace, they no longer wished to bleed for a distant empire.\n\nThe new government that took my place decided: let go, let India be independent.\n\nHear the irony: the same me who led Britain to victory in the war and was a hero to the whole world, on the question of the Empire, was pushed to the ground by my own country and a man in homespun cloth, together.',
      },
      deliverGoal: 'N5 story — 1945 战后英国赢但穷累 + Gandhi (土布/绝食/不合作/几亿人不买英货) 把帝国逼墙角 + Churchill 恨他骂半裸苦行僧 + 1945 大选被选下台 (英国人要福利和平不为帝国流血) + 新政府放手让印度独立 + 反讽: 反法西斯英雄在帝国去留上被自己国家+土布老人按到地上',
      engagementHook: '带英国打赢二战的英雄，却被自己的国家、被一个穿土布的老人，一起按倒在「该不该放手帝国」这件事上。你怎么看这个反讽？',
      expectsRealAnswer: false,
    },
    {
      id: 'churchill-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我说过，我一辈子最舍不得的，是那张涂满英国颜色的世界地图。可你有没有想过：那些颜色、那些边界，是怎么来的？\n\n是画上去的。是一群坐在伦敦、巴黎、布鲁塞尔办公室里的欧洲人，拿着笔，在他们大半辈子没去过的土地上，画出来的。\n\n几十年前，欧洲列强在 Berlin（柏林）开会瓜分非洲，就是这么干的：摊开地图，拿尺子和笔，把整块非洲切成一份份，谁分哪块。线两边住的是什么人、说什么话、信什么教，画线的人根本不在乎。（你要是跑过那段瓜分非洲的历史，会认得这种画线。）\n\n现在，1947 年，轮到印度了。英国要走了，可走之前还要再画最后一条线——把印度切成两个国家。这条线，将会决定上千万人的命。\n\n那条线两边的人会经历什么，你换到他们那一遍，会亲眼看见。\n\n我这一辈子守的「帝国」，说到底，就是这样一支笔画出来的东西。',
        en: 'I said the thing I could least bear to lose was that world map painted in British colors. But have you ever thought: where did those colors, those borders, come from?\n\nThey were drawn on. By a group of Europeans sitting in offices in London, Paris, Brussels, pen in hand, drawing on lands most of them had never set foot on.\n\nDecades earlier, the European powers met in Berlin to carve up Africa, and this is exactly how they did it: spread out the map, take ruler and pen, cut the whole of Africa into shares, who gets which piece. What people lived on either side of a line, what they spoke, what they believed, the men drawing did not care at all. (If you have run that history of the carving of Africa, you will recognize this kind of line.)\n\nNow, in 1947, it was India\'s turn. Britain was leaving, but before leaving it would draw one last line, cutting India into two countries. That line would decide the fate of tens of millions.\n\nWhat the people on either side of that line went through, you will see for yourself when you switch to their pass.\n\nThe "Empire" I guarded all my life was, in the end, a thing drawn by a pen just like this.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 帝国地图的颜色边界是欧洲人在办公室画出来的 + Berlin Conference 瓜分非洲 (尺子和笔切非洲/不在乎线两边的人/跨 B3 Topic 锚) + 1947 轮到印度英国走前画最后一条线切成两国决定上千万人命 + 桥到分治难民 lens + 帝国就是一支笔画出来的东西',
      engagementHook: '那些边界都是欧洲人在办公室里拿笔画出来的，根本不在乎线两边住的是什么人。一条画在地图上的线，凭什么能决定上千万人的命？',
      expectsRealAnswer: false,
    },
    {
      id: 'churchill-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '印度独立了。可独立这件事，没有像故事书里那样「从此幸福快乐」。\n\n印度内部，信印度教的人和信伊斯兰教的人谈不拢。穆斯林领袖怕在一个印度教占多数的国家里被边缘化，要求单独建国。最后印度被切成两个国家：印度（印度教为主）和巴基斯坦（伊斯兰教为主）。这叫 Partition（分治）。\n\n切开的那一刻，上千万人发现自己「站错了边」——印度教徒住进了巴基斯坦，穆斯林住进了印度。于是几乎一夜之间，约 1500 万人收拾家当，往「自己那边」逃。两股人流在路上相遇，互相砍杀。死亡人数，估计在几十万到一百多万之间。\n\n这就是我要你看清的：去殖民化常被讲成「自由的胜利」。可对很多很多普通人来说，独立的第一个礼物，不是自由，是逃命，是邻居变成仇人，是一条线两边的血。\n\n独立，不等于美好结局。',
        en: 'India became independent. But independence did not end "happily ever after," the way it does in storybooks.\n\nInside India, Hindus and Muslims could not come to terms. Muslim leaders feared being pushed to the margins in a Hindu-majority country, and demanded a separate state. In the end India was cut into two countries: India (mostly Hindu) and Pakistan (mostly Muslim). This is called Partition.\n\nThe moment the cut was made, tens of millions found themselves "on the wrong side," Hindus living inside Pakistan, Muslims living inside India. Almost overnight, about 15 million people packed their belongings and fled toward "their side." The two streams of people met on the roads and cut each other down. The death toll is estimated somewhere between several hundred thousand and over a million.\n\nThis is what I want you to see clearly: decolonization is often told as "the victory of freedom." But for very many ordinary people, independence\'s first gift was not freedom but flight, neighbors turned into enemies, blood on both sides of a line.\n\nIndependence does not equal a happy ending.',
      },
      deliverGoal: 'N7 story — 印度独立不是从此幸福快乐 + 印度教 vs 伊斯兰教谈不拢/穆斯林怕边缘化求单独建国 + Partition 切成印度 (印度教) + 巴基斯坦 (伊斯兰) + 上千万人站错边/~1500 万逃命/两股人流互砍/死几十万到一百多万 + 反 Whig: 独立第一个礼物是逃命邻居变仇人/独立不等于美好结局',
      engagementHook: '去殖民化常被讲成「自由的胜利」，可对很多人来说，独立的第一个礼物不是自由，是逃命、是邻居变仇人。「自由」和「幸福」，是同一件事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'churchill-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '印度只是开头。1945 年之后，一个接一个的殖民地都要走了。\n\n这些刚独立的新国家，发现自己掉进了一个新麻烦：美国和苏联两个超级大国，正在搞冷战，逼着全世界站队——要么跟美国，要么跟苏联。\n\n有一批新国家的领袖不干。1955 年，他们在印尼一个叫万隆（Bandung）的城市开会，1961 年正式成立了不结盟运动（Non-Aligned Movement）。他们说：我们刚从一个帝国手里挣脱出来，凭什么又要去给另外两个大国当小弟？我们谁的队都不站，我们走自己的路。\n\n你听这话，是不是有点耳熟？这正是我当年最怕的：那些我认为「还不会自己管自己」的民族，不但要独立，还要在世界舞台上自己说话、自己结盟、自己拒绝大国。\n\n我守了一辈子的那个「太阳永不落」的帝国世界，到这里，是真的散了。',
        en: 'India was only the beginning. After 1945, one colony after another was leaving.\n\nThese newly independent states found themselves in a new trouble: the United States and the Soviet Union, the two superpowers, were waging the Cold War, forcing the whole world to take sides, either with America or with the Soviets.\n\nA group of leaders of the new states refused. In 1955 they met in an Indonesian city called Bandung, and in 1961 they formally founded the Non-Aligned Movement. They said: we have just broken free from one empire, so why should we go and be the little brother of two more great powers? We will take no one\'s side. We will walk our own road.\n\nDoes that sound a little familiar? This was exactly what I feared most: that the peoples I thought "not yet able to govern themselves" would not only become independent, but would speak for themselves on the world stage, make their own alliances, and refuse the great powers.\n\nThe "sun never sets" empire-world I guarded all my life, by this point, had truly come apart.',
      },
      deliverGoal: 'N8 story — 1945 后殖民地一个接一个走 + 新国家掉进冷战麻烦 (美苏逼站队) + 1955 Bandung 会议 + 1961 不结盟运动成立 (刚挣脱一个帝国不愿给两大国当小弟/谁队都不站走自己路) + Churchill 反讽: 这正是他最怕的「还不会自管」的民族自己结盟拒大国 + 太阳永不落帝国真的散了',
      engagementHook: '这些新国家说：我们刚挣脱一个帝国，凭什么又给两个超级大国当小弟？我们谁的队都不站。在两个强者中间「谁都不选」，是聪明，还是危险？',
      expectsRealAnswer: false,
    },
    {
      id: 'churchill-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1965 年死了。死的时候，我守了一辈子的帝国已经差不多没了。\n\n今天的世界，记住的是哪个我？\n\n大部分人记住的，是那个反法西斯的英雄——演讲、雪茄、V 字手势、绝不投降。我的雕像立在伦敦的广场上。\n\n可这些年，越来越多人开始说另一个我：1943 孟加拉饥荒里那 300 万饿死的人；我对印度人说过的那些恶毒的话；我到死都不肯放手的帝国。在今天的印度、在很多曾经的殖民地，「丘吉尔」这个名字，意味着的不是英雄，是压迫。\n\n这里有一个母题，你要记住：历史上很多被尊为「英雄」「文明使者」的大人物，翻过来看，同一双手也沾着殖民地的血。（你跑过 Leopold 国王、跑过 Wilson 总统那些 Topic，会一次次撞见这同一张脸。）\n\n一个人可以同时是英雄，和加害者。这不是矛盾，这是历史的常态。',
        en: 'I died in 1965. By then, the Empire I had guarded all my life was nearly gone.\n\nWhich me does today\'s world remember?\n\nMost people remember the hero against fascism, the speeches, the cigar, the V-for-victory sign, "we will never surrender." My statue stands in a London square.\n\nBut in recent years, more and more people speak of another me: the three million who starved in the Bengal famine of 1943; the vicious things I said about Indians; the Empire I would not let go of to my dying day. In today\'s India, and in many former colonies, the name "Churchill" means not a hero but an oppressor.\n\nHere is a pattern you must remember: many of history\'s great figures honored as "heroes" and "bringers of civilization," turned over, had the same hands stained with colonial blood. (Run the topics on King Leopold, on President Wilson, and you will meet this same face again and again.)\n\nA person can be a hero and a perpetrator at the same time. This is not a contradiction. It is the ordinary condition of history.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Churchill 1965 死帝国差不多没了 + 今天世界记住哪个 (大部分记反法西斯英雄/雕像/越来越多人说另一个: 孟加拉 300 万/恶毒话/不放手帝国/在前殖民地丘吉尔=压迫) + 母题: 英雄/文明使者翻过来同一双手沾殖民地血 → Leopold + Wilson 跨 Topic 锚 + 一个人可同时是英雄和加害者是历史常态',
      engagementHook: '在伦敦我是雕像上的英雄，在印度我的名字意味着压迫。同一个人，同一双手。「一个人可以同时是英雄和加害者」——你接受这句话吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'churchill-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是拯救文明的英雄。1940 年，整个欧洲快被纳粹吞掉，是我顶住了，是我让英国没投降。如果没有我那几年的硬撑，希特勒可能就赢了。我守护的，是全人类对抗暴政的那道防线。\n\n另一种说法：我是帝国主义的化身。同一双顶住纳粹的手，把 300 万孟加拉人挡在救援之外，一辈子拒绝放开对几亿殖民地人民的统治。我反对的「暴政」，只算欧洲白人头上的暴政；落到印度人头上的暴政，在我眼里根本不算数。\n\n这两边不是「功大于过」或「过大于功」可以简单加减的。是同一个信念的两面——「英国统治世界天经地义」——它既让我无比勇敢，也让我无比冷酷。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the hero who saved civilization. In 1940, with all of Europe about to be swallowed by the Nazis, it was I who held the line, I who kept Britain from surrendering. Without my hard years of holding on, Hitler might have won. What I guarded was all humanity\'s defense against tyranny.\n\nThe other view: I was the embodiment of imperialism. The same hands that held off the Nazis kept three million Bengalis out of reach of relief, and refused all my life to loosen the rule over hundreds of millions of colonized people. The "tyranny" I opposed counted only as tyranny over white Europeans; the tyranny that fell on Indians did not count at all in my eyes.\n\nThese are not a simple sum of "merit outweighs fault" or the reverse. They are two faces of one belief, that "Britain ruling the world is natural," which made me both immensely brave and immensely cold.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (拯救文明的英雄/1940 顶住纳粹/没他希特勒可能赢/守护对抗暴政防线) / 另一种说法 (帝国主义化身/同双手挡 300 万孟加拉人于救援外/拒绝放开几亿殖民地/他反的暴政只算欧洲白人) / 同一信念两面 (英国统治世界天经地义→既勇敢又冷酷) / 想 30 秒',
      engagementHook: '拯救文明的英雄，和帝国主义的化身——是同一个信念的两面，既让我勇敢也让我冷酷。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'churchill-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个时代的结束？\n\n一个旧帝国终于散了——这本该是「自由的胜利」。可它散得这么慢、这么不甘、这么血腥：饿死的、逃命的、互相砍杀的，大多是从没坐上过谈判桌的普通人。守帝国的英雄，和承受帝国代价的人，从来不是同一群人。把「我守住了文明」和「我让 300 万人饿死」放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有这样一个人或一件事：被大家公认是「好的」「了不起的」，可你心里隐隐知道，它对某些人其实很不公平——一个被崇拜的名人、一条听起来很正义的规矩、一段「主流说法」？\n\n那时候，你会跟着大家一起喝彩，还是敢去问一句：这件「好事」，对那些没被算进去的人，到底意味着什么？',
        en: 'Having walked my whole life, how would you judge the end of an age like this?\n\nAn old empire at last came apart, and that ought to be "the victory of freedom." But it came apart so slowly, so unwillingly, so bloodily: those who starved, who fled, who cut each other down were mostly ordinary people who never once sat at a negotiating table. The heroes who guarded the empire and the people who bore its cost were never the same group. Put "I held the line for civilization" and "I let three million starve" on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there a person or a thing that everyone agrees is "good" and "great," yet you quietly know is in fact very unfair to certain people, a celebrity who is worshipped, a rule that sounds just, a "mainstream account"?\n\nWhen that happens, will you cheer along with everyone, or will you dare to ask: this "good thing," what does it actually mean for the people who were never counted in?',
      },
      deliverGoal: 'N11 close — 评价一个时代的结束 (旧帝国散本该是自由胜利但散得慢不甘血腥/承受代价的多是没坐上谈判桌的普通人/守帝国的英雄≠承受代价的人/「守住文明」vs「让 300 万饿死」同天平) + transfer「今天你身边被公认好的却对某些人不公平的人/规矩/主流说法」+ 你会跟着喝彩还是敢问对没被算进去的人意味什么',
      engagementHook: '守帝国的英雄，和承受帝国代价的人，从来不是同一群人。你会怎么评价这样一个时代的结束？今天你身边那个「大家都说好、却对某些人不公平」的事，你会跟着喝彩，还是敢问一句？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Ralph Bunche (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var ralphBuncheLens = {
  id: 'ralph-bunche',
  name: 'Ralph Bunche',
  nameCn: '拉尔夫·本奇',
  role: 'lonely-mediator',
  perspectiveTag: 'un-peace-broker',
  icon: '🕊️',
  description: {
    cn: '美国人，1904 年生，祖母曾被奴役，他在一个种族隔离的美国长大，黑人孩子被告知一辈子也别想坐到台面上。他靠读书一路读到博士，成了一名外交官。1949 年，他在一座小岛上，把打得不可开交的双方关在一栋旅馆里,一寸一寸谈出一条停火线,因此在 1950 年成为第一个获得诺贝尔和平奖的非裔人士。这一遍让你从一个调停者的位置，看一个在自己国家都不被当平等公民的人，怎么去为别人调停和平。',
    en: 'An American, born in 1904, whose grandmother had been enslaved, who grew up in a segregated America where Black children were told never to expect a seat at the table. He read his way up to a doctorate and became a diplomat. In 1949, on a small island, he shut two warring sides inside a hotel and negotiated a ceasefire line inch by inch, and for it became, in 1950, the first person of African descent to win the Nobel Peace Prize. This pass puts you in a mediator\'s seat, watching a man who was not even treated as an equal citizen in his own country go and broker peace for others.',
  },
  storyboard: [
    {
      id: 'bunche-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1949 年，地中海里一座小岛上的旅馆。我是 Ralph Bunche（拉尔夫·本奇），联合国派来的调停员。\n\n屋里坐着两边人——刚打完一场惨烈战争的敌人。他们恨对方，连同一张桌子都不愿意坐。\n\n我的工作，是让这两边停火。没有军队听我的，没有任何一方怕我。我手里唯一的东西，是耐心，和一张地图。\n\n这一年我 45 岁。我是个美国黑人。在我自己的国家，很多餐馆不让我进，很多旅馆不让我住，很多人觉得像我这样的人，天生就该待在底层。\n\n可现在，全世界都在等我这个「不该坐到台面上」的人，去为两个国家谈出和平。\n\n这一遍，你坐进我这个位置。你会发现：一个在自己家都不被当平等的人，去为别人调停公正，是一种什么样的滋味。',
        en: '1949, a hotel on a small island in the Mediterranean. I am Ralph Bunche, the mediator sent by the United Nations.\n\nIn the room sit two sides, enemies who have just finished a brutal war. They hate each other and will not even sit at the same table.\n\nMy job is to get these two sides to a ceasefire. No army obeys me, no side fears me. The only thing in my hands is patience, and a map.\n\nThis year I am 45. I am a Black American. In my own country many restaurants will not let me in, many hotels will not give me a room, and many people feel that someone like me belongs at the bottom by birth.\n\nYet now the whole world waits for me, a man who is "not supposed to have a seat at the table," to negotiate peace for two nations.\n\nThis pass puts you in my seat. You will find out what it is like for a man not treated as an equal in his own home to go and broker fairness for others.',
      },
      deliverGoal: 'N1 hook — 1949 地中海小岛旅馆 Bunche 自我介绍 (联合国调停员/两边敌人不愿同桌/手里只有耐心和地图) + 45 岁美国黑人 (餐馆旅馆不让进/被认为天生该待底层) + 全世界等他这个「不该坐台面上」的人谈和平 + 这一遍视角',
      engagementHook: '我在自己国家连餐馆都进不去，可全世界都在等我去为两个国家谈和平。一个在家不被当平等的人，去为别人主持公正，是什么滋味？',
      expectsRealAnswer: false,
    },
    {
      id: 'bunche-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我从哪里来，你才懂这份工作对我意味着什么。\n\n我 1904 年生在美国。我的祖母，年轻时是被奴役的人。我小时候父母都早早去世，是这位祖母把我带大。她个子小、皮肤浅，本可以装成白人过轻松日子，可她偏不。她对我说：你是个黑人，你要记住自己是谁，然后比所有人都更努力。\n\n那是一个种族隔离的美国。黑人小孩走进商店，店员当你不存在；黑人坐公交，得坐到后排去。整个社会用一千种方式告诉你：你低人一等。\n\n我没认。我一路读书，读到加州大学第一名毕业，又读到哈佛的博士。我用学问，硬生生在一个不给我留座位的世界里，给自己挤出一张椅子。\n\n记住我这个出身，你才懂：当我后来坐在调停桌前，我太清楚「被排除在外」是什么感觉了。',
        en: 'First, where I come from, so you understand what this work means to me.\n\nI was born in 1904 in America. My grandmother had been enslaved in her youth. My parents died young, and it was this grandmother who raised me. She was small and light-skinned, and could have passed as white and lived an easier life, but she would not. She told me: you are a Black man, remember who you are, and then work harder than everyone else.\n\nThat was a segregated America. A Black child walks into a store and the clerk acts as if you do not exist; a Black person rides the bus and must sit in the back. Society told you in a thousand ways: you are lesser.\n\nI did not accept it. I read my way up, graduated first in my class at the University of California, then earned a doctorate at Harvard. With learning, I forced a chair for myself out of a world that had left me no seat.\n\nRemember this origin of mine, and you will understand: when I later sat at the negotiating table, I knew all too well what it feels like to be shut out.',
      },
      deliverGoal: 'N2 setup — Bunche 1904 生美国 + 祖母曾被奴役 (父母早逝祖母带大/本可装白人却不/叮嘱记住自己是谁更努力) + 种族隔离美国 (店员当你不存在/公交坐后排/一千种方式说你低人一等) + 没认靠读书 (加州第一名 + 哈佛博士/在不给座位的世界挤出椅子) + 太懂被排除在外的感觉',
      engagementHook: '祖母对我说：记住自己是谁，然后比所有人更努力。在一个一千种方式告诉你「你低人一等」的地方，你怎么不让它定义你？',
      expectsRealAnswer: false,
    },
    {
      id: 'bunche-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我怎么从一个教授，变成一个全世界的调停员？\n\n二战之后，全世界想搞一个新组织，让各国坐下来谈，别再用枪解决问题。这就是联合国（United Nations）。我加入了它。\n\n那几年，世界上最棘手的事，是一个接一个的殖民地要独立。旧主人不想走，新国家要诞生，中间全是火药桶。联合国需要有人去这些火药桶之间穿梭，劝架、调停、找出双方都能勉强接受的方案。\n\n这活儿没人爱干。它没有荣耀，只有没完没了的会议、僵局、和半夜的争吵。一个调停员，两边都不会真心感谢你——你逼这边让步，这边骂你；你逼那边让步，那边也骂你。\n\n可这正是我擅长的。我这一辈子，都在跟「不被当人看」这件事打交道。我知道怎么坐在一个对你不友好的房间里，不动声色，一点一点把死结解开。\n\n这份没人要的脏活，最后落到了我手里。',
        en: 'How did I go from a professor to a mediator for the whole world?\n\nAfter the Second World War, the world wanted a new organization where countries could sit down and talk instead of settling things with guns. This was the United Nations. I joined it.\n\nIn those years, the thorniest thing in the world was colony after colony wanting independence. The old masters did not want to leave, new nations wanted to be born, and in between was nothing but powder kegs. The UN needed people to shuttle among these powder kegs, to talk down quarrels, to mediate, to find plans both sides could barely accept.\n\nNo one loved this work. It had no glory, only endless meetings, deadlocks, and quarrels at midnight. A mediator gets no real thanks from either side. Press this side to give ground and they curse you; press that side and they curse you too.\n\nBut this was exactly what I was good at. My whole life I had dealt with being "not seen as a person." I knew how to sit in a room unfriendly to me, calm on the surface, and untie the knot bit by bit.\n\nThis unwanted, dirty work fell, in the end, to my hands.',
      },
      deliverGoal: 'N3 setup — Bunche 从教授到调停员 + 二战后联合国成立 (各国坐下谈别用枪) + 那几年最棘手是殖民地独立 (旧主人不走新国家要生/中间全是火药桶) + 联合国需人穿梭调停 + 调停没荣耀没人爱干 (两边都不感谢/逼谁让步谁骂你) + 但 Bunche 擅长 (一辈子跟「不被当人看」打交道/会在不友好房间一点点解死结)',
      engagementHook: '调停员逼这边让步，这边骂你；逼那边让步，那边也骂你。两边都不会感谢你。你愿意做一份没人感谢、却很重要的脏活吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'bunche-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。1948 年，中东打起一场惨烈的战争。\n\n联合国本来派了一位瑞典外交官 Bernadotte 去调停，结果他被人刺杀了。这个最危险、最没人想接的烂摊子，落到了你头上。\n\n你心里清楚：你是个美国黑人，在自己国家都没有完整的公民权。现在让你去给两个互相仇恨、刚死了无数人的国家当裁判——凭什么他们会听你的？\n\n你没有军队。你没有可以威胁谁的力量。你能用的，只有三样：耐心，公正，和让双方都相信「你不是来偏帮谁的」。\n\n1949 年，你想了个办法：把双方代表请到地中海的一座小岛上，关进同一栋旅馆。不准走，谈不出停火线，谁也别想回家。\n\n这一刻你得想：当你手里没有任何强迫别人的力量，你要靠什么，让两个恨到要杀对方的人，坐下来听你说话？',
        en: 'Now you are me. In 1948, a brutal war broke out in the Middle East.\n\nThe UN had first sent a Swedish diplomat, Bernadotte, to mediate, and he was assassinated. This most dangerous mess, the one no one wanted to take, fell to you.\n\nYou know it clearly: you are a Black American without full citizenship even in your own country. Now you are asked to referee for two nations that hate each other and have just lost countless lives. Why would they listen to you?\n\nYou have no army. You have no power to threaten anyone with. All you can use is three things: patience, fairness, and making both sides believe "you are not here to favor anyone."\n\nIn 1949 you hit on a method: invite both sides\' delegates to a small island in the Mediterranean and shut them inside the same hotel. No leaving. Until a ceasefire line is worked out, no one goes home.\n\nHere you must ask: when you hold no power to force anyone, what do you rely on to get two people who hate each other enough to kill, to sit down and hear you out?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1948 中东惨烈战争 + 前任瑞典外交官 Bernadotte 被刺杀 + 最危险烂摊子落 Bunche 头上 + 他是美国黑人在自家都没完整公民权凭什么被听 + 没军队没威胁力量只有耐心公正不偏帮 + 1949 想办法把双方关进小岛旅馆谈不出停火线别回家 + 自我拷问: 没有强迫力量靠什么让恨到要杀的人坐下听',
      engagementHook: '你没有军队，没有可以威胁谁的力量，却要让两个恨到要杀对方的人坐下听你说话。手里没有任何强迫的力量，你靠什么让人妥协？',
      expectsRealAnswer: false,
    },
    {
      id: 'bunche-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '岛上的谈判，比打仗还熬人。\n\n两边代表谁也不肯先松口。今天谈崩了，明天接着谈；这一条吵不下去，先放着谈下一条。一连好几个星期，没完没了。\n\n我做了几件事。第一，我从不偏帮。我让两边都看见：我不替任何一方说话，我只盯着一件事——少死人。\n\n第二，我管吃管住，把人留在桌上。我甚至想了个小招：闲下来的时候，拉着双方代表一起打台球。前一秒还在为一条边界吵得脸红脖子粗的人，后一秒在球台边一起笑。人一旦把对方当回「人」，再坐下谈，火气就小了一截。\n\n第三，最难的，是那条停火线。一寸土地、一座村庄地抠。这边让一点，那边也得让一点。\n\n我没靠权力，我靠的是：让两边都慢慢相信，跟我谈，比接着打，对他们更划算。',
        en: 'The talks on the island were more wearing than the war.\n\nNeither side would be the first to give. Today the talks broke down; tomorrow they resumed. This clause stalled, so set it aside and take the next. Week after week, with no end.\n\nI did several things. First, I never took a side. I let both see: I speak for no one, I watch only one thing, fewer deaths.\n\nSecond, I fed them and housed them and kept them at the table. I even hit on a small trick: in the idle hours I got the delegates to play billiards together. Men red in the face over a border one moment laughed together at the billiard table the next. Once a person sees the other as a "person" again, the heat goes down a notch when they sit back to talk.\n\nThird, the hardest, was that ceasefire line. We pried at it inch by inch of land, village by village. This side gives a little, that side must give a little too.\n\nI did not lean on power. I leaned on this: slowly making both sides believe that talking with me was a better deal for them than going on fighting.',
      },
      deliverGoal: 'N5 story — 岛上谈判比打仗熬人 (谁也不先松口/谈崩接着谈/一条吵不下去放着谈下一条/好几周) + Bunche 做几件事 (从不偏帮只盯少死人/管吃住留人在桌/打台球小招让人重新把对方当人火气小一截) + 最难是停火线一寸一寸抠 + 没靠权力靠让两边相信谈比打更划算',
      engagementHook: '我拉着两边代表一起打台球——前一秒为边界吵红脸的人，后一秒在球台边一起笑。让对手重新把你当回「人」，是不是和解最关键的一步？',
      expectsRealAnswer: false,
    },
    {
      id: 'bunche-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我守在那张地图前，一守就是好几个月。\n\n我做的事，说穿了，也是在地图上画线。可我画的线，和殖民者画的线，是反着来的。\n\n你想想几十年前的那些线：欧洲人坐在伦敦、布鲁塞尔的办公室里，摊开一张他们没去过的土地的地图，拿尺子和笔，一刀切下去，决定线两边几百万人的命，却根本不在乎那些人是谁。1947 年印度被切成两半，也是这么一支笔干的。（那条线两边的血，你换到那一遍会亲眼看见。）\n\n而我在这张桌子上画线，是反过来：我把双方都请到线的旁边，一寸一寸地问——这个村子归谁？这条河怎么分？哪边让一步能少死几个人？\n\n同样是一支笔，同样在地图上落线。殖民者那支笔，是远远地、傲慢地决定别人的命；我这支笔，是把当事人请到跟前，让线尽量少流一点血。\n\n1949 年，停火线终于谈成了。仗，停下来了。',
        en: 'I kept watch before that map for months on end.\n\nWhat I was doing, stripped bare, was also drawing lines on a map. But the lines I drew ran opposite to the colonizers\' lines.\n\nThink of those lines from decades ago: Europeans sitting in offices in London and Brussels, spreading a map of land they had never visited, taking ruler and pen, cutting straight down, deciding the fate of millions on either side while caring nothing for who those people were. In 1947 India was cut in two by just such a pen. (The blood on either side of that line you will see for yourself in that pass.)\n\nAnd I, drawing lines at this table, did the reverse: I brought both sides up to the line and asked, inch by inch, whose is this village? How is this river split? Where can one side give a step and fewer die?\n\nThe same pen, the same lines falling on a map. The colonizer\'s pen decided others\' fate from far away, with arrogance; my pen brought the people themselves up close, to make the line bleed as little as possible.\n\nIn 1949, the ceasefire line was finally agreed. The fighting stopped.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Bunche 守地图几个月也在画线但反着来 + 殖民者的线 (欧洲人办公室拿尺笔一刀切决定别人命不在乎是谁/1947 印度被切成两半同一支笔/跨分治难民 lens 锚) + Bunche 的线 (把双方请到线旁一寸寸问村归谁河怎分哪边让步少死人) + 同一支笔两个方向 (傲慢决定别人命 vs 把当事人请到跟前少流血) + 1949 停火线谈成仗停下',
      engagementHook: '同样是一支笔在地图上画线：殖民者远远地、傲慢地决定别人的命；我把当事人请到跟前，让线尽量少流一点血。同一个动作，怎么会差这么远？',
      expectsRealAnswer: false,
    },
    {
      id: 'bunche-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1950 年，因为那条停火线，我得了诺贝尔和平奖。我是历史上第一个拿到这个奖的非裔人士。\n\n这件事的反讽，你一定要听清。\n\n领奖那年，我在欧洲、在世界舞台上，是受人尊敬的和平英雄。可我一回到美国，还是那个进不去某些餐馆、住不进某些旅馆、在某些州不能跟白人同坐一节车厢的黑人。\n\n1949 年，杜鲁门总统请我去做助理国务卿——一个很高的位子。我拒绝了，因为那意味着要带着家人住进华盛顿，一座对黑人实行种族隔离（Jim Crow）的城市。一个诺贝尔和平奖得主，在自己的祖国，依然要为「能不能被当成平等的人」而斗争。\n\n这不是我一个人的故事。在我之前一百年，有一个从奴隶里逃出来、靠演讲和文字震动全美的人；在我同代，还有更多黑人，在为「黑人也是完整的人」这件事，一代一代地接力。（你跑过那些非裔美国人争人权的 Topic，会认出这条长长的链。）\n\n我在国外为别人争来的公正，在自己家里，我还得继续为它斗争。',
        en: 'In 1950, for that ceasefire line, I was given the Nobel Peace Prize. I was the first person of African descent in history to receive it.\n\nThe irony of this you must hear clearly.\n\nThe year I accepted the prize, in Europe and on the world stage I was a respected hero of peace. But the moment I returned to America, I was still the Black man kept out of certain restaurants, refused certain hotels, barred in certain states from sharing a railway car with white people.\n\nIn 1949, President Truman asked me to become Assistant Secretary of State, a high post. I refused, because it would mean moving my family into Washington, a city that enforced racial segregation, Jim Crow, against Black people. A Nobel Peace laureate, in his own homeland, still had to fight to be "counted as an equal person."\n\nThis is not my story alone. A hundred years before me, there was a man who escaped from slavery and shook all of America with his speeches and writing; in my own time, more Black people carried on, generation after generation, the work of "a Black person is a whole person too." (Run the topics on African Americans fighting for human rights, and you will recognize this long chain.)\n\nThe fairness I won abroad for others, at home I still had to keep fighting for.',
      },
      deliverGoal: 'N7 story — 1950 Bunche 因停火线得诺贝尔和平奖第一个非裔得主 + 反讽 (世界舞台上和平英雄/回美国还是进不去餐馆旅馆某些州不能跟白人同车厢的黑人/1949 拒杜鲁门请他当助理国务卿因不愿带家人住实行 Jim Crow 种族隔离的华盛顿/诺奖得主在祖国仍为「能否被当平等人」斗争) + 不是一个人的故事 → A4 Douglass (逃奴靠演讲文字震动全美) + 后代接力 → 跨 Topic 非裔争人权长链 + 国外争来的公正在家里还得继续斗争',
      engagementHook: '我在国外是受尊敬的和平英雄，一回到自己国家，还是那个进不去餐馆的黑人。在外为别人争公正、在家却要为自己争平等——你怎么看这种撕裂？',
      expectsRealAnswer: false,
    },
    {
      id: 'bunche-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '诺奖之后，我没停下。我把后半辈子，几乎都给了那个最难的活——去殖民化。\n\n1945 年之后，几十个殖民地一个接一个独立。这些新国家诞生的时候，很多都伴着流血：边界要重画，权力要重分，旧仇要清算。联合国一次次派我去这些火药桶之间，帮着搭一个新国家能站住脚的架子，帮着避免内战，帮着把暴力压到最低。\n\n这活儿不好看，也不出名。没人会为「避免了一场没发生的战争」给你颁奖——因为那场仗没打起来，大家就以为本来就不会打。调停成功的最高境界，是「什么都没发生」，而「什么都没发生」，从来上不了头条。\n\n我做的，是当那个站在新旧之间、两边都不讨好的人。当帝国退场、新国家上场，中间那段最危险的真空里，总得有人去填、去缓冲、去接住那些快要掉下去的东西。\n\n那个人，很多次，是我。',
        en: 'After the Nobel I did not stop. I gave nearly the whole rest of my life to the hardest work, decolonization.\n\nAfter 1945, dozens of colonies became independent one after another. Many of these new nations were born in blood: borders to be redrawn, power to be redivided, old scores to be settled. Time and again the UN sent me among these powder kegs, to help build a frame on which a new nation could stand, to help avoid civil war, to help press the violence as low as it could go.\n\nThis work was not pretty, and not famous. No one gives you a prize for "a war that was prevented," because the war never happened, so everyone assumes it never would have. The highest art of successful mediation is that "nothing happened," and "nothing happened" never makes the headlines.\n\nWhat I did was to be the man standing between the old and the new, pleasing neither side. When an empire exits and a new nation enters, in the most dangerous vacuum between them, someone always has to fill it, cushion it, catch the things about to fall.\n\nThat someone, many times, was me.',
      },
      deliverGoal: 'N8 story — 诺奖后 Bunche 后半生几乎都给去殖民化 + 1945 后几十个殖民地独立常伴流血 (边界重画/权力重分/旧仇清算) + 联合国派他去火药桶帮搭新国家架子避免内战压低暴力 + 这活不好看不出名 (没人为「避免了没发生的战争」颁奖/调停最高境界是什么都没发生而那上不了头条) + 当站在新旧之间两边都不讨好的人/在最危险真空填缓冲接住快掉下去的东西',
      engagementHook: '调停成功的最高境界是「什么都没发生」——可「什么都没发生」从来上不了头条。一份成功了反而没人看见的工作，值不值得做？',
      expectsRealAnswer: false,
    },
    {
      id: 'bunche-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1971 年去世。回头看我这一辈子，我想说一句老实话：调停员能做的，是有边界的。\n\n我谈成的那条 1949 年的停火线，停的是「这一仗」，停不了「这一恨」。那片土地上的冲突，到今天还在继续。我能让枪暂时哑下来，我没法让仇恨的根消失。\n\n我帮着新国家避免了一些内战，可有更多的冲突，我够不着、管不了。一个调停员，再耐心、再公正，也只能在大国博弈的缝隙里，争取一点点喘息的空间。把帝国留下的烂账彻底算清，不是开几次会、画几条线能做到的。\n\n但我不后悔。我这一辈子证明了一件事：一个在自己国家都被当作二等公民的黑人，可以站到世界的中央，去为公正、为和平做实实在在的事。\n\n我没能改变整个世界。但我让「像我这样的人能做什么」这个问题，有了一个新的、更大的答案。',
        en: 'I died in 1971. Looking back on my whole life, let me say one honest thing: what a mediator can do has limits.\n\nThe 1949 ceasefire line I negotiated stopped "this war," but it could not stop "this hatred." The conflict over that land continues to this day. I could make the guns fall silent for a time; I could not make the root of the hatred disappear.\n\nI helped some new nations avoid civil wars, but there were many more conflicts I could not reach, could not manage. A mediator, however patient, however fair, can only win a little breathing room in the cracks of the great powers\' games. Settling the rotten accounts the empires left behind was never something a few meetings and a few drawn lines could do.\n\nBut I do not regret it. My life proved one thing: a Black man treated as a second-class citizen even in his own country can stand at the center of the world and do real things for fairness and peace.\n\nI did not change the whole world. But I gave the question "what can someone like me do" a new and larger answer.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Bunche 1971 死 + 老实话调停员能做的有边界 (1949 停火线停了「这一仗」停不了「这一恨」/那片土地冲突至今继续/能让枪暂哑没法让仇恨根消失) + 帮新国家避免些内战但更多够不着 (只能在大国博弈缝隙争喘息/帝国烂账非几次会几条线能算清) + 不后悔 (证明被当二等公民的黑人能站世界中央做公正和平实事/给「像我这样的人能做什么」一个新的更大的答案)',
      engagementHook: '我谈成的停火线，停的是「这一仗」，停不了「这一恨」。一个调停员能让枪暂时哑下来，却消不掉仇恨的根。那这份工作，还有意义吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'bunche-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是真正的破壁者和和平缔造者。一个祖母当过奴隶、自己被国家当二等公民的黑人，硬是读到博士、坐进世界舞台中央、谈成停火线、拿下诺贝尔和平奖。我用一辈子证明：肤色和出身，决定不了一个人能做多大的事。我让一代代被压在底层的人，看见了一种新的可能。\n\n另一种说法：我是大国体系里一个有用的、却也被利用的角色。我的调停，常常是在帮西方大国和联合国，给一个不公正的世界秩序「消火」「补窟窿」——让矛盾不至于烧起来，但矛盾的根，那些殖民留下的烂账，我并没有、也无力去拆。有人会说，我让一个本该被推翻的旧秩序，多撑了一阵。\n\n这两边不是「好人加局限」。是同一种身份的两面——一个「体制内的局外人」，既能从内部推动公正，也可能在不知不觉里，替这个体制兜了底。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a true breaker of walls and a maker of peace. A Black man whose grandmother had been enslaved, treated as a second-class citizen by his own country, read his way to a doctorate, took a seat at the center of the world stage, negotiated a ceasefire, and won the Nobel Peace Prize. With my whole life I proved: color and birth cannot decide how large a thing a person can do. I let generation after generation of those pressed to the bottom see a new possibility.\n\nThe other view: I was a useful, and also a used, role within the system of the great powers. My mediation often helped the Western powers and the UN "put out fires" and "patch holes" in an unjust world order, keeping the contradictions from bursting into flame, but the root of those contradictions, the rotten accounts left by colonialism, I did not, and could not, tear down. Some would say I helped an old order that should have been overthrown last a while longer.\n\nThese are not "a good man and his limits." They are two faces of one identity, an "outsider inside the system," who can push for fairness from within, and can also, without knowing it, prop the system up.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (真正破壁者和和平缔造者/祖母奴隶自己被当二等公民硬读到博士坐世界中央谈停火线拿诺奖/证明肤色出身决定不了能做多大事/让被压底层的人看见新可能) / 另一种说法 (大国体系里有用却也被利用的角色/调停常帮西方大国和联合国给不公正秩序消火补窟窿/殖民烂账的根没去也无力拆/让本该被推翻的旧秩序多撑一阵) / 同一身份两面 (体制内的局外人既推动公正也替体制兜底) / 想 30 秒',
      engagementHook: '真正的破壁者，和大国体系里一个被利用的角色——是同一个「体制内的局外人」的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'bunche-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个调停者？\n\n一个被自己国家当作二等公民的人，跑到世界舞台上去为别人主持公正；他让一些枪暂时停了火，却没能、也无力拔掉仇恨和不公的根。他用一生证明了「像他这样的人能做大事」，可他做的很多事，到头来只是给一个不公正的旧秩序补窟窿。这样一个人，到底该被记一大功，还是该被看作一颗有用的螺丝钉？你怎么评？\n\n再想一步。今天你身边，有没有一个看起来「不公平、改不动」的局面——班里的某种风气、某条不合理的规矩、某个没人敢碰的现状？\n\n那时候，你会因为「反正改不了根」就干脆不管，还是会像他一样——明知道自己只能改一点点，明知道没人会感谢你，还是去做那个站出来缓和、修补、接住别人的人？',
        en: 'Having walked my whole life, how would you judge a mediator like this?\n\nA man treated as a second-class citizen by his own country went out onto the world stage to broker fairness for others; he made some guns fall silent for a time, yet could not, and had not the power to, pull out the root of hatred and injustice. With his life he proved that "someone like him can do great things," yet much of what he did, in the end, only patched holes in an unjust old order. Such a man, should he be credited with a great achievement, or seen as a useful screw in the machine? How do you judge it?\n\nThen take one more step. In your own life today, is there a situation that looks "unfair and impossible to change," a certain mood in your class, an unreasonable rule, a status quo no one dares touch?\n\nWhen that happens, will you, because "the root can\'t be changed anyway," simply do nothing, or will you do as he did: knowing you can only change a little, knowing no one will thank you, still be the one who steps up to ease it, to mend it, to catch the others?',
      },
      deliverGoal: 'N11 close — 评价调停者 (被当二等公民却为别人主持公正/让枪暂停火却无力拔仇恨不公的根/证明像他这样的人能做大事却很多事只是给旧秩序补窟窿/记一大功 vs 有用的螺丝钉) + transfer「今天你身边看起来不公平改不动的局面 (班里风气/不合理规矩/没人敢碰的现状)」+ 你会因改不了根就不管还是像他明知只能改一点点没人感谢还去站出来缓和修补接住别人',
      engagementHook: '他明知只能改一点点、明知没人会感谢，还是站出来缓和、修补、接住别人。你会怎么评价这样一个人？今天你身边那个「不公平、改不动」的局面，你会因为改不了根就不管，还是去做点什么？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: 印巴分治旁遮普难民 (receiving-end, composite) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var partitionRefugeeLens = {
  id: 'partition-refugee-receiving-end',
  name: 'A Punjab Partition refugee',
  nameCn: '一个旁遮普分治难民',
  role: 'receiving-end',
  perspectiveTag: 'partition-survivor',
  icon: '🚂',
  description: {
    cn: '一个合成的、有真实历史依据的人物，代表 1947 印巴分治大迁徙中失去一切的几百万人之一。他生在旁遮普一个村子，那里印度教徒、穆斯林、锡克教徒做了几代人的邻居。1947 年夏天，一条新画的国境线穿过他的家乡，一夜之间，邻居变成了要他命的人。他这一辈子的故事，由历史学家从无数真实幸存者的口述里拼出来。这一遍，你从那些被「自由的胜利」碾过去、却从没上过谈判桌的普通人这边，看去殖民化。',
    en: 'A composite character, grounded in real history, standing for one of the millions who lost everything in the great migration of the 1947 Partition of India. He was born in a Punjab village where Hindus, Muslims, and Sikhs had been neighbors for generations. In the summer of 1947 a newly drawn national border ran through his homeland, and overnight, neighbors became people who wanted him dead. His life is pieced together by historians from the spoken testimonies of countless real survivors. This pass lets you see decolonization from the side of the ordinary people who were run over by "the victory of freedom" and never once sat at a negotiating table.',
  },
  storyboard: [
    {
      id: 'refugee-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我不告诉你我的名字。因为我不是一个人——我是几百万人。\n\n（我这个人，是历史学家从无数真实幸存者的口述里拼出来的一个代表。我身上每一件事，都真的发生在 1947 年的某个真人身上。）\n\n1947 年夏天，我大概 27 岁，住在旁遮普（Punjab）一个村子里。那是印度西北部一片肥沃的平原。我家世世代代住在那儿。\n\n我的邻居里，有印度教徒，有穆斯林，有锡克教徒。我们一起种地，一起过节，孩子们一起在田埂上跑。我们做了几代人的邻居。\n\n然后有一天，一条线，凭空画在了地图上。那条线，把我的家乡从中间切开。\n\n这一遍，你站在我这里。不是站在写历史的大人物那边，是站在被那条线碾过去的普通人这边——我们从来没坐上过谈判桌，可那张桌子上的每一个决定，都砸在我们头上。',
        en: 'I will not tell you my name. Because I am not one person, I am millions.\n\n(This person of mine is a representative pieced together by historians from the spoken testimonies of countless real survivors. Everything that happened to me truly happened to some real person in 1947.)\n\nIn the summer of 1947, I was about 27, living in a village in Punjab, a fertile plain in the northwest of India. My family had lived there for generations.\n\nAmong my neighbors were Hindus, Muslims, and Sikhs. We farmed together, kept festivals together, our children ran together on the field paths. We had been neighbors for generations.\n\nThen one day, a line was drawn on a map out of nowhere. That line cut my homeland straight down the middle.\n\nThis pass, you stand where I stand. Not on the side of the great figures who write history, but on the side of the ordinary people the line ran over. We never sat at a negotiating table, yet every decision made at that table came down on our heads.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 不说名字因为是几百万人 + anti-fab 括号短句 (历史学家从无数真实幸存者口述拼出的代表/每件事真发生在某真人身上) + 1947 夏 ~27 岁住旁遮普肥沃平原世代住那儿 + 邻居有印度教徒穆斯林锡克教徒做了几代邻居一起种地过节 + 一条线凭空画地图上切开家乡 + 这一遍站在被线碾过的普通人这边/从没上谈判桌但桌上决定都砸头上',
      engagementHook: '我们做了几代人的邻居——印度教徒、穆斯林、锡克教徒。然后一条线凭空画在地图上，切开了我的家乡。一条线，怎么能拆散几代人的邻居？',
      expectsRealAnswer: false,
    },
    {
      id: 'refugee-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我们原来的日子，你才懂后来失去的是什么。\n\n旁遮普这片地方，土地肥，水又好，是印度有名的粮仓。我家有几亩地，种小麦，养几头牲口，日子不富，但安稳。\n\n我们村里几种信仰的人混着住。逢上印度教的排灯节，穆斯林邻居会来道喜；逢上穆斯林的开斋节，我们也会去他家吃一顿。谁家娶亲、谁家办丧，全村不分信仰都来帮忙。\n\n当然也有过摩擦、有过争执——哪个村子没有呢。但那是邻里之间的小磕碰，不是你死我活。我从没想过，有一天，这位每年来给我家道喜的邻居，会拿起刀。\n\n这就是我要你先记住的：分治的悲剧，最痛的地方，不是「两个陌生的民族打起来了」。是「几代人的好邻居，一夜之间，被逼着互相砍杀」。\n\n那把刀落下来之前，我们本来是一家人一样的。',
        en: 'First, let me tell you our old life, so you understand what was later lost.\n\nPunjab is rich land, with good water, a famous granary of India. My family had a few acres, grew wheat, kept a few animals. Not wealthy, but settled.\n\nIn our village, people of several faiths lived mixed together. At the Hindu festival of Diwali, our Muslim neighbors came to offer congratulations; at the Muslim festival of Eid, we went to eat at their houses. When a family married off a child or held a funeral, the whole village, faith aside, came to help.\n\nOf course there had been frictions, there had been quarrels, what village has none? But those were small bumps between neighbors, not life and death. I never once imagined that one day this neighbor who came every year to congratulate my family would take up a knife.\n\nThis is what I want you to remember first: the deepest pain of Partition is not that "two strange peoples went to war." It is that "good neighbors of generations were forced, overnight, to cut each other down."\n\nBefore that knife came down, we had been almost like one family.',
      },
      deliverGoal: 'N2 setup — 原来的日子 (旁遮普土肥水好印度粮仓/我家几亩地种小麦养牲口不富但安稳) + 几种信仰混住 (排灯节穆斯林来道喜/开斋节我们去吃/娶亲办丧全村不分信仰帮忙) + 有过摩擦但是小磕碰不是你死我活 + 从没想过来道喜的邻居会拿刀 + 分治最痛不是两个陌生民族打起来是几代好邻居一夜被逼互砍 + 刀落下前本来像一家人',
      engagementHook: '每年来给我家道喜的邻居，我从没想过有一天他会拿起刀。分治最痛的不是陌生人打仗，是几代好邻居一夜之间互相砍杀。是什么能把邻居变成仇人？',
      expectsRealAnswer: false,
    },
    {
      id: 'refugee-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '那条线，是怎么来的，我说给你听。\n\n1947 年，英国终于决定从印度撤走了。可走之前，他们要先把印度分成两个国家：一个给印度教徒为主的，叫印度；一个给穆斯林为主的，叫巴基斯坦。\n\n这条把两国分开的国境线，交给了一个英国律师来画，他叫 Radcliffe（拉德克利夫）。这个人，在接这个活之前，从没来过印度。他对这片土地、对住在这里的人，一无所知。\n\n他被关在一间屋子里，对着地图，只给了大约五个星期。五个星期，他要决定一条线——这条线两边，住着几千万人，会决定他们一夜之间变成哪个国家的人。\n\n他画完，连这条线具体在哪儿，都拖到独立那天之后才公布。也就是说，很多人是在「已经独立了」之后，才突然知道：原来我家，被划到了「另一个国家」那一边。\n\n一个没来过这儿的人，用五个星期，一支笔，决定了我们所有人的命。',
        en: 'Let me tell you how that line came to be.\n\nIn 1947, Britain at last decided to withdraw from India. But before leaving, it would first split India into two countries: one mostly for Hindus, called India; one mostly for Muslims, called Pakistan.\n\nThe national border separating the two was handed to a British lawyer to draw, a man named Radcliffe. This man, before taking the job, had never been to India. Of this land, of the people who lived here, he knew nothing.\n\nHe was shut in a room with a map and given about five weeks. Five weeks, to decide a line, and on either side of that line lived tens of millions who would, overnight, become people of one country or the other.\n\nWhen he finished, exactly where the line ran was not announced until after independence day itself. That is to say, many people learned only after they were "already independent": my home, it turns out, was drawn onto the side of "the other country."\n\nA man who had never been here, in five weeks, with one pen, decided the fate of us all.',
      },
      deliverGoal: 'N3 setup — 那条线怎么来的 (1947 英国决定从印度撤走/走前分两国: 印度教为主的印度 + 穆斯林为主的巴基斯坦) + 国境线交给英国律师 Radcliffe 画 (接活前从没来过印度/对土地和人一无所知) + 关屋里对地图只给约 5 周决定线两边几千万人一夜变哪国人 + 画完线在哪拖到独立后才公布 (很多人独立后才突然知道家被划到另一国) + 一个没来过的人 5 周一支笔决定所有人命',
      engagementHook: '画这条国境线的英国律师，接活前从没来过印度，被关在屋里只给了五个星期。一个对这片土地一无所知的人，凭什么用五周决定几千万人的命？',
      expectsRealAnswer: false,
    },
    {
      id: 'refugee-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。1947 年 8 月，消息传到村里：那条线公布了。我们村，被划到了「另一个国家」那一边。\n\n这意味着：按照我的信仰，我成了「站错边」的人。我世代生活的家，从今往后属于一个「不欢迎我这种人」的国家。\n\n几乎是一夜之间，空气变了。从前一起过节的邻居，眼神不对了。村外开始有传言：哪个村昨晚被屠了，整列火车的人到站时全是尸体。\n\n你站在自家门口，手里攥着一个最难的决定。\n\n留下来：这是你的家，你的地，你祖辈的坟。可留下来，你可能活不过这个月。\n\n走：往「自己人那一边」逃，几百公里，路上全是危险。可你得抛下一切——房子、地、来不及带走的东西，甚至来不及埋的亲人。\n\n你怎么选？走，还是留？这不是历史课本上的一道题。这是你，站在自家门口，必须当场做的决定。',
        en: 'Now you are me. August 1947, the news reaches the village: the line has been announced. Our village was drawn onto the side of "the other country."\n\nThis meant: by my faith, I had become a person "on the wrong side." The home where my family had lived for generations now belonged to a country that "did not welcome people like me."\n\nAlmost overnight, the air changed. Neighbors who had once kept festivals with me, their eyes were wrong now. Rumors began outside the village: which village had been massacred last night, a whole trainload of people who arrived at the station all dead.\n\nYou stand at your own doorway, clutching the hardest decision.\n\nStay: this is your home, your land, the graves of your ancestors. But stay, and you might not live out the month.\n\nGo: flee toward "your own side," hundreds of kilometers, the road full of danger. But you must abandon everything, the house, the land, the things there is no time to carry, even kin there is no time to bury.\n\nWhich do you choose? Go, or stay? This is not a question in a history textbook. This is you, standing at your own doorway, having to decide on the spot.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1947.8 线公布村被划到另一国那边 + 你按信仰成了站错边的人 (世代的家属于不欢迎你的国家) + 一夜空气变 (邻居眼神不对/传言哪村被屠/整列火车到站全尸体) + 站自家门口攥最难决定 (留下=你的家地祖坟但可能活不过这月/走=往自己人那边逃几百公里路上全危险但抛下一切甚至来不及埋的亲人) + 走还是留不是课本一道题是你当场必须做的决定',
      engagementHook: '留下，这是你的家、你的地、你祖辈的坟，但你可能活不过这个月；走，要抛下一切，路上全是危险。你站在自家门口，走还是留？',
      expectsRealAnswer: false,
    },
    {
      id: 'refugee-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我选择了走。\n\n那是 1947 年大迁徙里最常见的一幕：约 1500 万人，同时上路。一边的人往这边逃，另一边的人往那边逃，两股人流在同一条路上、同一片旷野里，迎面相遇。\n\n我们走了好多天。带着老人、孩子，推着仅剩的几样家当。白天怕太阳，晚上怕黑——黑里藏着拿刀拿枪的人。\n\n最可怕的，是火车。整列整列的难民火车，本该把人送到安全的那一边。可有些火车开到站，门一拉开，里面没有一个活人。后来人们给这种火车起了个名字，叫「鬼魂列车」。\n\n（这些事，是真的。历史学家从成千上万幸存者口里，一遍遍听到同样的场景。我把它们合在了我一个人身上，但它们一件都不是编的。）\n\n你问那一路我失去了什么。我只能告诉你：上路的时候，我们是一家人;到达的时候，不是所有人都还在。',
        en: 'I chose to go.\n\nThat was the most common scene in the great migration of 1947: about 15 million people on the road at once. People of one side fleeing this way, people of the other fleeing that way, two streams meeting head-on on the same road, in the same open country.\n\nWe walked for many days. With the old and the children, pushing the few belongings we had left. By day we feared the sun; by night we feared the dark, for in the dark hid men with knives and guns.\n\nThe most terrible thing was the trains. Whole trainloads of refugees that should have carried people to the safe side. But some trains pulled into the station, the doors slid open, and not one living soul inside. Later people gave such trains a name: ghost trains.\n\n(These things are real. Historians heard the same scenes again and again from the mouths of tens of thousands of survivors. I have gathered them onto one person, me, but not one of them is invented.)\n\nYou ask what I lost on that road. I can only tell you: when we set out, we were a family; when we arrived, not all of us were still there.',
      },
      deliverGoal: 'N5 story — 选择了走 + 1947 大迁徙最常见一幕 (~1500 万人同时上路/两股人流同一条路迎面相遇) + 走好多天 (带老人孩子推仅剩家当/白天怕太阳晚上怕黑里藏拿刀拿枪的人) + 最可怕是火车 (整列难民火车应送安全那边/有些到站门拉开没一个活人/人称鬼魂列车) + anti-fab 括号短句 (这些是真的/历史学家从成千上万幸存者口里一遍遍听到/合在我一人身上但一件不是编的) + 上路时是一家人到达时不是所有人都还在',
      engagementHook: '有些难民火车开到站，门一拉开，里面没有一个活人——人们叫它「鬼魂列车」。上路时我们是一家人，到达时不是所有人都还在。这种代价，「自由」配得上吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'refugee-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '这么多年过去，我一直在想一个问题：要我命的，到底是谁？\n\n是那个拿刀的邻居吗？是，也不是。他昨天还是我的朋友。把刀塞进他手里的，是恐惧——他也听说了「另一边在屠我们的人」，他怕的，跟我怕的，是同一件事。\n\n真正的源头，是那条线。是那个从没来过这儿的人，用五个星期，在地图上落下的一笔。\n\n这一笔，你是不是有点眼熟？几十年前，欧洲列强在 Berlin（柏林）开会瓜分非洲，也是这么干的：摊开一张他们没去过的土地的地图，拿尺子和笔，一刀切下去，把整块大陆分给各国。线两边住的是谁、是不是一家人、会不会因此打起来，画线的人根本不在乎。（你跑过那段瓜分非洲的历史，会认得这种线。）\n\n殖民者最厉害的本事，不是占领土地。是画线——把活生生的人，按他们的方便，切成「这边的」和「那边的」。然后他们拍拍手走了，留下线两边的人，世世代代为这条线流血。',
        en: 'In all the years since, I have kept turning over one question: who, in the end, wanted me dead?\n\nWas it the neighbor with the knife? Yes, and no. Yesterday he was my friend. What put the knife in his hand was fear, he too had heard that "the other side is massacring our people," and what he feared was the same thing I feared.\n\nThe true source was that line. It was the man who had never been here, who in five weeks let fall one stroke of the pen on the map.\n\nDoes that stroke look a little familiar? Decades earlier, the European powers met in Berlin to carve up Africa, and did the very same thing: spread out a map of land they had never visited, take ruler and pen, cut straight down, divide the whole continent among the powers. Who lived on either side of a line, whether they were one people, whether they would come to blows over it, the men drawing did not care at all. (Run that history of the carving of Africa, and you will recognize this kind of line.)\n\nThe colonizer\'s greatest skill was never taking land. It was drawing lines, cutting living people, for their own convenience, into "this side" and "that side." Then they clapped their hands and left, and the people on either side of the line bled over it for generations.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 多年想一个问题: 要我命的到底是谁 + 拿刀的邻居 (是也不是/昨天还是朋友/把刀塞他手里的是恐惧/他怕的跟我怕的是同一件事) + 真正源头是那条线 (没来过的人 5 周地图上落一笔) + 这一笔眼熟 → Berlin Conference 瓜分非洲 (摊开没去过的地图拿尺笔一刀切分大陆/不在乎线两边是谁是否一家是否打起来/跨 B3 Topic 锚) + 殖民者最厉害本事不是占领土地是画线 (把活人按方便切成这边那边/拍拍手走留下线两边世代流血)',
      engagementHook: '殖民者最厉害的本事，不是占领土地，是画线——把活生生的人切成「这边的」和「那边的」，然后拍拍手走了，留下线两边的人世代流血。你怎么看这种「画完就走」？',
      expectsRealAnswer: false,
    },
    {
      id: 'refugee-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '逃到「自己人那一边」，故事并没有结束。\n\n我到了，可我什么都没了。房子、地、几代人攒下的家业，全留在了线的另一边，再也回不去。我成了一个难民——在一个本该是「自己国家」的地方，从零开始。\n\n挤在难民营里，几十万人，吃不饱，缺医少药。瘟疫、饥饿，又带走一批熬过了逃亡路的人。\n\n而那些大人物呢？独立那天，新国家的领袖在首都升起新国旗，发表激动人心的演讲，全世界的报纸都在庆祝「一个伟大民族获得了自由」。\n\n你品一品这中间的距离：同一个 1947 年 8 月，有人在首都的台上，宣告「自由的胜利」；有人在几百公里外的路上，数着自己还剩几个家人。\n\n历史课本记住的，往往是台上那一刻。可真正承受了这场「自由」全部重量的，是路上那几百万、连名字都没留下的我们。',
        en: 'Fleeing to "my own side," the story did not end.\n\nI arrived, but I had nothing left. The house, the land, the family fortune saved over generations, all left on the other side of the line, never to return. I had become a refugee, in a place that was supposed to be "my own country," starting from zero.\n\nPacked into refugee camps, hundreds of thousands of us, never enough to eat, short of doctors and medicine. Plague and hunger took away another wave of those who had survived the road of flight.\n\nAnd the great figures? On independence day, the leaders of the new nation raised the new flag in the capital, gave stirring speeches, and the newspapers of the whole world celebrated "a great people winning its freedom."\n\nTaste the distance in between: in the same August of 1947, some stood on a platform in the capital proclaiming "the victory of freedom," and some, hundreds of kilometers away on the road, counted how many of their family were left.\n\nWhat the history textbook remembers is usually that moment on the platform. But those who truly bore the full weight of this "freedom" were us, the millions on the road, who did not even leave our names.',
      },
      deliverGoal: 'N7 story — 逃到自己人那边故事没结束 (到了但什么都没了/房子地几代家业全留线另一边回不去/成难民在本该是自己国家的地方从零开始) + 难民营几十万人吃不饱缺医少药/瘟疫饥饿又带走一批熬过逃亡的人 + 大人物呢 (独立那天领袖首都升新国旗激动演讲/全世界报纸庆祝伟大民族获自由) + 品距离 (同一 1947.8 有人台上宣告自由胜利/有人几百公里外路上数还剩几个家人) + 课本记住台上那刻/真正承受自由全部重量的是路上几百万连名字都没留下的我们',
      engagementHook: '同一个 1947 年 8 月：有人在首都台上宣告「自由的胜利」，有人在几百公里外的路上，数着自己还剩几个家人。历史课本记住的，为什么总是台上那一刻？',
      expectsRealAnswer: false,
    },
    {
      id: 'refugee-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我落了脚，活了下来。可我心里那道伤，比身上任何一道都深。\n\n最让我夜里睡不着的，不是失去了房子和地——是失去了对人的信任。我亲眼看见，几代人的好邻居，怎么在几天之内，变成提刀的陌生人。从那以后，我再也没法像从前那样，毫无保留地相信另一种信仰的人。\n\n这道伤，没有跟着我一起被埋掉。它传给了我的孩子，又传给了孩子的孩子。\n\n我们这一边的孩子，从小听「那一边的人」怎么杀了我们的亲人；那一边的孩子，也从小听我们怎么杀了他们的。仇恨，就这样一代一代地交接下去。\n\n那条 1947 年画下的线，到今天还在那儿。线两边，是两个互相提防、动不动就剑拔弩张的国家，打过好几仗，至今没有真正和解。\n\n殖民者那一笔，画的不只是一条国境线。画的是一道横在几代人心里、几十年都长不好的伤口。',
        en: 'I found my feet and stayed alive. But the wound inside me runs deeper than any on my body.\n\nWhat keeps me awake at night is not the loss of the house and the land, it is the loss of trust in people. I saw with my own eyes how good neighbors of generations became, within a few days, strangers with knives. From then on I could never again, as before, trust without reserve a person of another faith.\n\nThis wound was not buried with me. It passed to my children, and to their children\'s children.\n\nThe children on our side grew up hearing how "the people of that side" killed our kin; the children on that side grew up hearing how we killed theirs. Hatred was handed down, generation to generation.\n\nThe line drawn in 1947 is still there today. On either side of it are two nations that watch each other warily, that flare up at the slightest thing, that have fought several wars and to this day are not truly reconciled.\n\nThat one stroke of the colonizer\'s pen drew more than a national border. It drew a wound across the hearts of generations, one that decades have not healed.',
      },
      deliverGoal: 'N8 story — 落脚活下来但心里伤比身上任何一道深 + 最睡不着不是失去房地是失去对人的信任 (亲眼见几代好邻居几天内变提刀陌生人/从此再没法毫无保留信另一信仰的人) + 这道伤没被埋掉传给孩子又传孩子的孩子 (我们这边孩子从小听那边怎么杀我们亲人/那边孩子也从小听我们怎么杀他们/仇恨一代代交接) + 1947 那条线到今天还在 (线两边两个互相提防剑拔弩张的国家打过好几仗至今没真正和解) + 那一笔画的不只国境线是横在几代人心里几十年长不好的伤口',
      engagementHook: '我失去房子和地不是最痛的——最痛的是失去了对人的信任，而这道伤还传给了我的孩子、孩子的孩子。仇恨为什么能一代一代地传下去？',
      expectsRealAnswer: false,
    },
    {
      id: 'refugee-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我老了，回头看我这一生，我想跟你说一句最不该被忘记的话。\n\n去殖民化，在课本里，常常是一个昂扬的故事：被压迫的民族站起来了，赶走了殖民者，赢得了独立。这个故事是真的，它也确实值得骄傲。\n\n可这个昂扬的故事里，常常没有我们的位置。\n\n那些刚独立的新国家，转头就掉进了另一个大局：美国和苏联两个超级大国搞冷战，逼着全世界站队。有一批新国家的领袖说「我们谁的队都不站」，搞了个不结盟运动（Non-Aligned Movement）。这是大人物在世界舞台上的博弈。\n\n而我们这些路上的人呢？我们既没赶上「独立的荣耀」，也没资格上「不结盟」的谈判桌。我们只是承受——承受大人物画线的后果，承受冷战大棋局里的炮灰命运。\n\n请你记住：每一个写进课本的「伟大转折」背后，都站着一大群没有名字、只负责承受代价的普通人。我，就是其中之一。',
        en: 'I have grown old, and looking back on my life, I want to tell you the one thing that should never be forgotten.\n\nDecolonization, in the textbook, is often a soaring story: oppressed peoples stood up, drove out the colonizers, and won independence. That story is true, and it is genuinely worth being proud of.\n\nBut in that soaring story, there is often no place for us.\n\nThose newly independent nations turned around and fell into another great game: the United States and the Soviet Union waging the Cold War, forcing the whole world to take sides. A group of new-nation leaders said "we take no one\'s side" and founded the Non-Aligned Movement. That was the great figures\' game on the world stage.\n\nAnd us, the people on the road? We caught neither "the glory of independence" nor a place at the "non-aligned" negotiating table. We only bore it, bore the consequences of the great figures\' drawn lines, bore the fate of cannon fodder in the great chess game of the Cold War.\n\nPlease remember: behind every "great turning point" written into the textbook stands a great crowd of nameless ordinary people whose only role was to bear the cost. I am one of them.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 老了回头看说一句最不该忘的话 + 去殖民化课本里常是昂扬故事 (被压迫民族站起来赶走殖民者赢独立/是真的值得骄傲) + 但昂扬故事里常没我们位置 + 新国家转头掉进另一大局 (美苏冷战逼站队/一批领袖说谁队都不站搞不结盟运动/大人物世界舞台博弈) + 我们路上的人既没赶上独立荣耀也没资格上不结盟谈判桌只是承受 (画线后果/冷战大棋局炮灰命运) + 每个写进课本的伟大转折背后都站着一大群没名字只负责承受代价的普通人',
      engagementHook: '去殖民化在课本里是个昂扬的故事，可这个故事里常常没有我们的位置。每一个「伟大转折」背后，都站着一大群没名字、只负责承受代价的人。你想过他们吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'refugee-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看 1947 年那场独立，两种说法都站得住。\n\n一种说法：那是真正的解放，再大的代价也值。几亿人甩掉了几百年的殖民枷锁，第一次成了自己土地的主人。一个民族要站起来，哪有不流血的？我和我家人的苦难，是一个伟大民族重生必须付的学费。回头看，独立是对的。\n\n另一种说法：那是一场被搞砸的撤退，代价大得不该。英国人匆匆忙忙、毫不负责地一走了之，把一条乱画的线和一片火药桶丢给我们。本可以慢一点、稳一点、少死几百万人的，他们没有。我和几百万人的命，是大人物图省事、抢时间的牺牲品。这样的代价，本不必付。\n\n这两边不是「值得加不值得」的简单加减。它既是真正的解放，也是一场本可避免的浩劫——而这两件事，同时发生在 1947 那一年。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at the independence of 1947. Both views stand.\n\nOne view: it was true liberation, worth any price. Hundreds of millions threw off centuries of colonial chains and became, for the first time, masters of their own land. For a people to rise, when is there no blood? The suffering of my family and me was the tuition a great people had to pay to be reborn. Looking back, independence was right.\n\nThe other view: it was a botched retreat, at a price that should never have been paid. The British left in a rush, with no responsibility at all, throwing us a carelessly drawn line and a powder keg. It could have been slower, steadier, with millions fewer dead, and they did not make it so. My life and the lives of millions were sacrificed to the great figures\' wish to save trouble and snatch time. Such a price need never have been paid.\n\nThese are not a simple sum of "worth it and not worth it." It was both a true liberation and an avoidable catastrophe, and the two happened at once, in that one year of 1947.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (真正解放再大代价也值/几亿人甩掉几百年殖民枷锁第一次成自己土地主人/民族站起来哪有不流血/苦难是伟大民族重生学费/独立是对的) / 另一种说法 (一场被搞砸的撤退代价大得不该/英国匆忙不负责一走了之丢一条乱画的线和火药桶/本可慢点稳点少死几百万/我和几百万人是大人物图省事抢时间的牺牲品/代价本不必付) / 既是真正解放也是本可避免的浩劫同时发生在 1947 / 想 30 秒',
      engagementHook: '一种说法：那是真正的解放，再大代价也值。另一种说法：那是一场被搞砸的撤退，代价本不该这么大。两种说法都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'refugee-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个旁遮普的农人，一片回不去的家乡，一条凭空画下的线，一段没有所有家人到达终点的逃亡，一道传了三代的伤——你会怎么评价 1947 那一年？\n\n一场独立，一边是几亿人挣脱殖民、站起来的荣耀，一边是几百万像我这样的人，付出了本不必付的代价。你会说它是值得的解放，还是被搞砸的浩劫？这两件事，挤在同一年里，你怎么称？\n\n不过先记住：你这一遍，听的只是一个旁遮普难民的一句话。那个一心要保住帝国的丘吉尔、那个夹在中间斡旋的调解人本奇，各有各的说法——换个视角再走一遍，你会听见他们怎么讲这同一段历史，也会看看你刚才的判断站不站得住。\n\n再想一步。今天你身边，有没有这样的事：一个被大家热烈庆祝的「大好事」「大胜利」，可在那片欢呼底下，总有一些人，正在悄悄地、没人看见地付出代价——一个被忽略的同学、一群没人替他们说话的人、一段「主流」之外的故事？\n\n那时候，你会只顾着跟大家一起欢呼，还是会停下来，问一句：这件「好事」，那些没被算进去的人，过得还好吗？',
        en: 'Having walked my whole life, a Punjab farmer, a homeland I can never return to, a line drawn out of nowhere, a flight in which not all of my family reached the end, a wound handed down three generations, how would you judge the year 1947?\n\nAn independence, on one side the glory of hundreds of millions throwing off colonialism and standing up, on the other side millions of people like me paying a price that need never have been paid. Would you call it a liberation worth having, or a botched catastrophe? Those two things, crowded into one year, how do you weigh them?\n\nBut first, remember: this pass, you heard only one Punjab refugee. Churchill, set on holding the Empire together, and Bunche, the mediator caught in the middle, each have their own case. Run it again through another lens and you will hear how they tell this same history, and see whether the judgment you just made still holds.\n\nThen take one more step. In your own life today, is there something like this: a "great good thing," a "great victory" everyone celebrates warmly, yet beneath the cheering there are always some people quietly, unseen, paying the cost, a classmate overlooked, a group no one speaks for, a story outside the "mainstream"?\n\nWhen that happens, will you only cheer along with everyone, or will you stop and ask: this "good thing," the people who were never counted in, are they all right?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价 1947 那一年 (旁遮普农人/回不去的家乡/凭空画下的线/没所有家人到终点的逃亡/传了三代的伤 → 值得的解放 vs 被搞砸的浩劫挤在同一年怎么称) + transfer「今天你身边被热烈庆祝的大好事大胜利底下总有人悄悄没人看见地付出代价 (被忽略的同学/没人替他们说话的人/主流之外的故事)」+ 你会只顾跟大家欢呼还是停下来问那些没被算进去的人过得还好吗',
      engagementHook: '走完我这一生，你会怎么评价 1947 那一年？再想一步：今天你身边那个被大家热烈庆祝的「大好事」底下，有没有一些人正在悄悄地、没人看见地付出代价？那时候，你会怎么做？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'winston-churchill':               churchillLens,
  'ralph-bunche':                    ralphBuncheLens,
  'partition-refugee-receiving-end': partitionRefugeeLens,
};

// per TOPIC_ROADMAP_G6_G12.md B8 + receiving-end 优先 pattern:
// 普通民众 + 独立的暴力代价 + N1 gold-standard hook + N6「殖民者画的线」跨 lens/Topic 对位 (Berlin 划界) + N10/N11 解放 vs 浩劫 closing
export var defaultLens = 'partition-refugee-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'decolonization-1960',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'winston-churchill': 30, 'ralph-bunche': 28, 'partition-refugee-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「殖民者画的线 / a line on a map」一支笔两个方向 (Churchill 帝国地图 / 分治难民 1947 Radcliffe 线 / Bunche 1949 停火线少流血) + Berlin Conference 划界跨 Topic 对位',
    'defaultLens: partition-refugee-receiving-end — 受影响者优先 (普通民众 composite + 独立暴力代价 + gold-standard N1 hook + N10/N11 解放 vs 浩劫)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: 难民是 composite — N1/N5 用括号短句标注 (历史学家从无数真实幸存者口述拼出/每件事真发生在某真人身上/合在一人但不是编的); 无伪造引文',
    '反 Whig: 去殖民化常被讲成「自由的胜利」— Churchill 反法西斯英雄同时是 1943 孟加拉饥荒 ~300 万死的拒援者 + 分治死亡可能超百万 → 独立不等于美好结局',
    'cross-Topic 锚: Churchill→B3 Leopold/B4 Wilson (英雄殖民暴力同体); Ralph Bunche→A4 Douglass/B3 G.W.Williams (非裔美国人全球人权长链); 分治难民→B3 Berlin 划界 + B7 冷战',
    '日期/数学校验: Churchill 1874-1965 / Ralph Bunche 1904-1971 1950 诺奖 / 印巴分治 1947 / 孟加拉饥荒 1943 ~300 万 / 大迁徙 ~1500 万 / Bunche 1949 停火 45 岁 (1904+45=1949 ✓)',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
