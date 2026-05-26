// ─── Great Depression & New Deal 1929-1939 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 大萧条与新政 · The Great Depression & the New Deal 1929-1939
// APUSH Period 7 · AP US Government（New Deal 联邦权扩张）· AP Macroeconomics（财政政策入门）
//
// 3 lens 设计 (per TOPIC_ROADMAP_G6_G12.md B10 + AUTHORING_PIPELINE 第 7/8/12 条):
//   - fdr               (perpetrator-actor) — Franklin D. Roosevelt 1882-1945 新政缔造者 / 扩张联邦权 / 但社保排除农业家政工 + AAA 补贴付地主赶走黑人佃农
//   - frances-perkins   (lonely-mediator)   — Frances Perkins 1880-1965 首位女性内阁部长（劳工部长）/ 社会保障法主设计者
//   - displaced-sharecropper-receiving-end (receiving-end / DEFAULT) — 一个被 AAA 减产补贴挤出土地的南方黑人佃农 (composite, c.1900-1970)
//
// 跨 lens micro-detail (N6 anchor):
//   「政府的钱」一笔到底落进谁口袋 — 同一笔 AAA 减产补贴, 在三个人那里是三件事:
//   - FDR lens N6: AAA 把支票寄给地主, 地主拿钱减产 = 把佃农从地里挤出去 (设计盲点)
//   - Frances Perkins lens N6: 社会保障法保护工人, 却为换南方议员的票, 排除了农业工 + 家政工 (=多数黑人)
//   - 佃农 lens N6: 那笔本该救命的「政府的钱」, 落进地主口袋, 把他赶上了去北方的路
//
// 跨 Topic 锚:
//   - FDR 联邦权扩张 → hamilton-jefferson-1790s (联邦权 vs 州权百年张力顶点) + gilded-age-1890 (对镀金时代不平等的制度回应)
//   - Frances Perkins 社保 → womens-suffrage-1920 (女性进入权力核心的延续)；社会安全网思想源头 (B1 Owen, narrative 层处理)
//   - 被挤出佃农 → reconstruction-1877 freedman-sharecropper-receiving-end (sharecropping 延续 + 新政种族盲点, 强闭环)
//
// 经济史双视角 (synthesis 中立, 不预设「大政府=好」):
//   凯恩斯 (政府花钱救命) vs Hayek (政府干预延长萧条) — synthesis 用「一种说法 / 另一种说法 / 想 30 秒」保持中立
//
// defaultLens = 'displaced-sharecropper-receiving-end' (受影响者优先 pattern: 被新政高光叙事系统性排除一方)
//
// STRUCTURE SPEC (per task):
//   - 12 nodes per lens (long-arc)
//   - 220-360 CN chars/node; only 2 anchor nodes (N6 + synthesis N11) may reach 480, NOT 550; every other ≤380
//   - expectsRealAnswer: ONLY N11 (synthesis) + N12 (close) = true (exactly 2 per lens); all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 4-agent review (TBD): 7thgrader (小 U) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Franklin D. Roosevelt (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var fdrLens = {
  id: 'fdr',
  name: 'Franklin D. Roosevelt',
  nameCn: '富兰克林·罗斯福',
  role: 'perpetrator-actor',
  perspectiveTag: 'new-deal-architect',
  icon: '🦽',
  description: {
    cn: '纽约的富家子弟，1882 年生，39 岁那年得了小儿麻痹症，从此下半身瘫痪，公开露面时靠钢支架硬撑着站。1933 年他当上总统时，全国四分之一的人没工作，银行一家接一家倒闭。他用一连串前所未有的政府计划去救这个国家，把联邦政府的权力扩张到从未有过的程度。同一个他，签下的救济计划里，社会保障最初不覆盖农业工和家政工，而这两类工作雇着多数黑人。这一遍让你从一个救国者内部，看一只伸出来救人的手，怎么同时漏掉了一整群人。',
    en: 'A wealthy son of New York, born 1882, struck at 39 by polio that left him paralyzed below the waist, so that in public he stood braced on steel leg-irons. When he became president in 1933, a quarter of the country was out of work and banks were failing one after another. He used a string of unprecedented government programs to rescue the nation, expanding the power of the federal government further than it had ever reached. The same man signed relief programs whose Social Security, at first, did not cover farm workers or domestic workers, the two kinds of work that employed most Black Americans. This pass lets you watch, from inside a rescuer, how a hand reaching out to save people can leave a whole group of them out at the same time.',
  },
  storyboard: [
    {
      id: 'fdr-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1933 年 3 月，我宣誓就任总统的那天，这个国家像是停了。\n\n四个人里有一个没工作。银行一家接一家倒，老百姓排长队想把存款取出来，取不出。农民的粮食烂在地里，因为城里人买不起。整条街的店都关了门。\n\n我自己也是个「站不起来」的人——39 岁那年得了小儿麻痹，下半身瘫了。我现在站在这里宣誓，腿上绑着钢支架，硬撑着不让人看出来。\n\n我说了一句话，后来很多人记住了：我们唯一该怕的，就是「怕」本身。\n\n我是 Franklin Roosevelt（富兰克林·罗斯福）。这一遍，你坐进我这个位置——一个要在崩塌里，重新把政府的手伸进千万人生活的人。',
        en: 'In March 1933, the day I was sworn in as president, the country seemed to have stopped.\n\nOne in four people had no work. Banks failed one after another; people stood in long lines trying to pull out their savings and could not. Farmers\' crops rotted in the fields because city people could not afford to buy them. Whole streets of shops had closed their doors.\n\nI was a man who could not "stand up" myself. At 39 polio left me paralyzed below the waist. As I stood here to take the oath, steel braces strapped to my legs, I held myself up so no one would see.\n\nI said one line that many would remember: the only thing we have to fear is fear itself.\n\nI am Franklin Roosevelt. This pass puts you in my seat, a man who, in the middle of a collapse, would reach the government\'s hand into the lives of millions.',
      },
      deliverGoal: 'N1 hook — 1933.3 就任 + 大萧条惨状 (四分之一失业/银行倒闭挤兑/粮烂地里) + FDR 小儿麻痹瘫痪靠钢支架站 +「唯一该怕的是怕本身」+ 这一遍视角设定',
      engagementHook: '一个自己腿都站不起来的人，要去把一个倒下的国家扶起来。在最绝望的时候，「别怕」这句话，是真有用，还是只是好听的话？',
      expectsRealAnswer: false,
    },
    {
      id: 'fdr-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说清楚，我接手的是个什么烂摊子。\n\n1929 年 10 月，股市崩了。一夜之间，无数人的财富变成废纸。这叫大萧条（the Great Depression），是美国历史上最严重的一次经济崩溃。\n\n它不是一天的事，是滚雪球。股市垮 → 银行垮 → 工厂关 → 工人失业 → 没人买东西 → 更多工厂关。一环扣一环，越滚越大。到 1933 年，全国大概有一千三百万人失业。\n\n之前那位总统的办法是：政府别插手，市场自己会缓过来。等了三年，没缓过来，反而更糟。\n\n我上台时，很多人心里只剩一个问题：这个制度，是不是要彻底完了？\n\n所以我打算做一件以前的总统不敢做的事——让政府主动下场，直接花钱、直接造工作、直接救人。',
        en: 'First, let me be clear about the wreck I inherited.\n\nIn October 1929 the stock market crashed. Overnight, countless people\'s wealth turned to wastepaper. This was the Great Depression, the worst economic collapse in American history.\n\nIt was not a single day; it was a snowball. The market falls, banks fall, factories close, workers lose jobs, no one buys anything, more factories close. Link by link, rolling larger. By 1933 about thirteen million people across the country were out of work.\n\nThe president before me had one answer: keep the government out, the market will recover on its own. Three years passed. It did not recover. It got worse.\n\nWhen I took office, many people had only one question left: is this whole system finished for good?\n\nSo I meant to do something earlier presidents had not dared: send the government onto the field, to spend money directly, build jobs directly, save people directly.',
      },
      deliverGoal: 'N2 setup — 1929.10 股市崩盘 + 大萧条定义 (最严重经济崩溃) + 滚雪球链条 (股市→银行→工厂→失业→消费萎缩) + 1933 约 1300 万失业 + 前任不插手三年更糟 → FDR 决定政府主动下场',
      engagementHook: '前一个总统说「政府别插手，市场会自己缓过来」，等了三年反而更糟。经济垮了的时候，政府到底该不该出手？',
      expectsRealAnswer: false,
    },
    {
      id: 'fdr-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我上台后头一百天，干得像打仗。\n\n这一百天里，我推着国会通过了一大堆法案，造出一连串新机构，统称「新政」（the New Deal）。\n\n它们的目标说白了就三个字：救济、复兴、改革。给饿肚子的人发饭、给没工作的人造活干、给垮掉的银行立规矩防它再垮。\n\n我搞了一个专给年轻人的：让几百万小伙子去种树、修路、建公园，国家发工钱。我搞了一个管农业的，叫 AAA（农业调整法）。我还在全国办公共工程，政府出钱雇人去修桥、修水坝、盖学校。\n\n这是美国历史上头一回，联邦政府的手，这么深地伸进普通人的日子里。\n\n这一步迈出去，争论就来了：政府管这么宽，是在救人民，还是在变成一个谁也管不住的庞然大物？',
        en: 'My first hundred days in office, I worked as if at war.\n\nIn those hundred days I pushed Congress to pass a great stack of laws and built a string of new agencies, together called the New Deal.\n\nTheir goal came down to three words: relief, recovery, reform. Feed the hungry, build work for the jobless, set rules on the broken banks so they would not break again.\n\nI made one just for young men: send millions of them to plant trees, build roads, lay out parks, paid by the nation. I made one to manage farming, called the AAA. And across the country I set up public works, the government paying to hire people to build bridges, dams, and schools.\n\nThis was the first time in American history the federal government\'s hand reached so deep into ordinary people\'s days.\n\nWith that step taken, the argument came: when the government manages this much, is it saving the people, or turning into a giant no one can rein in?',
      },
      deliverGoal: 'N3 setup — 百日新政 + New Deal 定义 + 三 R (relief/recovery/reform) + 具体计划 (CCC 种树修路 / AAA 农业调整法 / 公共工程修桥水坝学校) + 联邦权头一回这么深伸进普通人生活 → 救人还是失控庞然大物',
      engagementHook: '头一回，政府的手这么深地伸进普通人的日子里。政府管得越多，是越能救人，还是越危险？',
      expectsRealAnswer: false,
    },
    {
      id: 'fdr-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你面前摆着农业这个最难的死结。农民种太多，粮价跌到比成本还低，越种越穷。怎么办？\n\n你的经济顾问给你出了个反直觉的主意：让农民少种。地空着、猪杀掉、棉花犁掉，政府发补贴给他们，作为「少生产」的报酬。供应少了，价格自然涨回去，农民就能喘口气。\n\n这就是 AAA。1933 年签下去。\n\n你心里清楚一件别扭事：在一个还有人饿肚子的国家，你居然花钱让农民少种粮、杀掉猪。城里排队领救济的人看着，会怎么想？\n\n可你也清楚，光让农民拼命多种，价格只会跌得更死，他们只会更穷。\n\n这一刻你得选：你救「农业」这个大盘子，可这个大盘子下面，那些最底层、租地种田的人，会不会被你这一招，反而推下悬崖？',
        en: 'Now you are me.\n\nBefore you sits the hardest knot of all: farming. Farmers grow too much, crop prices fall below even the cost of growing, and the more they grow the poorer they get. What do you do?\n\nYour economic advisers give you a counterintuitive idea: have the farmers grow less. Leave fields empty, slaughter the hogs, plow the cotton under, and the government pays them a subsidy as reward for "producing less." With supply cut, prices climb back, and farmers can catch their breath.\n\nThis is the AAA. Signed in 1933.\n\nYou know one uneasy thing in your heart: in a country where people still go hungry, you are paying farmers to grow less grain and to kill hogs. The people standing in relief lines in the cities, watching, what will they think?\n\nBut you also know that if you just push farmers to grow more, prices only fall harder and they only grow poorer.\n\nSo here you must choose: you save the big board called "agriculture," but underneath that board, the people at the very bottom who rent the land they farm, will your move push them off a cliff instead?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — AAA 死结 (农民多种粮价跌更穷) + 反直觉解 (减产/杀猪/犁棉花 + 政府发补贴换少生产→价格回升) + 1933 签 + 别扭 (饿肚子国家花钱让少种粮) + 自我拷问: 救农业大盘子会不会把租地种田的底层推下悬崖',
      engagementHook: '在一个还有人饿肚子的国家，你花钱让农民少种粮、杀掉猪——为了把价格救回来。这是聪明的经济学，还是冷酷的算计？',
      expectsRealAnswer: false,
    },
    {
      id: 'fdr-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '新政推得越大，我得罪的人也越多。\n\n大企业家骂我：你管这么宽，又收高税，又给工人撑腰，这是要把美国变成另一种国家。\n\n更难缠的是法院。1935、1936 年，最高法院连着判我好几个新政计划「违宪」——他们说，宪法没给联邦政府这么大的权力来管农业、管工厂。\n\n我被判输了几次，气坏了。1937 年我想了个招：往最高法院里加塞我自己的人，把不听话的法官稀释掉。\n\n结果连我自己党内的人都反对——他们说，你这是想踩烂三权分立，让总统骑到法院头上。这个招砸了。\n\n这件事你得记住：连我这样一个真心想救国的人，权力一旦顺手了，第一反应也是去搬开挡路的那一堵墙。挡我的那堵墙，恰恰是当年宪法故意立起来防我这种人的。',
        en: 'The bigger the New Deal grew, the more people I made into enemies.\n\nBig businessmen cursed me: you manage this much, tax this high, back the workers, you mean to turn America into another kind of country.\n\nHarder to handle was the court. In 1935 and 1936 the Supreme Court struck down several of my New Deal programs as unconstitutional. They said the Constitution gave the federal government no such power to manage farming and factories.\n\nLosing a few times made me furious. In 1937 I came up with a scheme: pack the Supreme Court with my own people, to dilute the judges who would not go along.\n\nIn the end even people in my own party opposed it. They said: you mean to trample the separation of powers and ride the president over the court. The scheme failed.\n\nRemember this: even a man like me who truly wanted to save the country, once power came easy, reached first to shove aside the wall in his way. And that wall was exactly the one the Constitution had raised on purpose, to guard against a man like me.',
      },
      deliverGoal: 'N5 story — 新政树敌 (大企业骂/高税撑工人) + 最高法院 1935-36 判新政违宪 (联邦无权管农业工厂) + 1937 court-packing 塞人稀释 + 党内反对踩烂三权分立失败 + 「权力顺手第一反应是搬开挡路的墙/那墙正是宪法防我这种人立的」',
      engagementHook: '我真心想救国，可权力一顺手，第一反应就是去搬开挡路的那堵墙——而那堵墙正是当年立来防我这种人的。好人有了大权，就一定还是好人吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'fdr-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在说一件我当时没太当回事、后来才看清的事。它跟「政府的钱」有关。\n\nAAA 的补贴，是怎么发的？支票，寄到地主手里。因为地是地主的，合同上签字的是地主。\n\n可南方很多地，根本不是地主自己种。是一大批租地的人在种——其中很多是黑人佃农，祖祖辈辈租别人的地，分一点收成糊口。\n\n现在地主拿了政府的钱，要「减产」。减产就是少种地。少种地，就不需要那么多佃农了。于是地主拿着我寄去的支票，转手把佃农从地里赶出去。\n\n我寄出去想救「农业」的钱，落进地主口袋，变成了把最穷的那群人赶上路的盘缠。\n\n（被赶走的佃农那一段日子有多苦，你换到他那一遍会亲眼看见。）\n\n同一笔「政府的钱」——我以为它在救人，地主拿它减产，佃农被它扫地出门。一笔钱，三个完全不同的故事。',
        en: 'Now a thing I did not think much of at the time and only saw clearly later. It has to do with "the government\'s money."\n\nHow was the AAA subsidy paid out? By check, mailed to the landlords. Because the land was the landlords\', and the name on the contract was the landlord\'s.\n\nBut in much of the South the landlord did not work the land himself. A whole crowd of renters worked it, many of them Black sharecroppers, renting another man\'s land for generations, keeping a small share of the crop to live on.\n\nNow the landlord took the government\'s money to "cut production." Cutting production meant farming less. Farming less meant he no longer needed so many sharecroppers. So the landlord, holding the check I had mailed, turned around and drove the sharecroppers off the land.\n\nThe money I sent out to save "agriculture" landed in landlords\' pockets and became the fare that pushed the poorest people onto the road.\n\n(How hard those days were for a sharecropper driven off, you will see for yourself when you switch to his pass.)\n\nThe same "government money." I thought it was saving people; the landlord used it to cut production; the sharecropper was swept out the door by it. One sum of money, three completely different stories.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — AAA 补贴支票寄给地主 (地+合同是地主的) + 南方很多地是黑人佃农租种 + 地主拿钱减产→不需要那么多佃农→拿支票把佃农赶走 + 桥到佃农 lens + 同一笔「政府的钱」三个故事 (FDR 以为救人/地主减产/佃农被扫地出门)',
      engagementHook: '我寄出去想救「农业」的钱，落进地主口袋，变成了把最穷的那群人赶上路的盘缠。同一笔钱，怎么会救了一些人、又毁了另一些人？',
      expectsRealAnswer: false,
    },
    {
      id: 'fdr-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '佃农被挤出土地，不是新政唯一漏掉黑人的地方。\n\n1935 年，我签下新政里最重要的一块：社会保障法（Social Security Act）。老了有养老金，失业了有救济金——一张兜住所有人的安全网。这是了不起的一步。\n\n可这张网，一开始有两个大窟窿：它不覆盖农业工人，也不覆盖家政工人（在别人家做饭、带孩子、打扫的人）。\n\n你猜这两类活，当时主要是谁在干？正是南方的黑人。\n\n为什么留这两个窟窿？因为我需要南方那些议员的票，才能让法案过关。而南方议员的条件就是：别用联邦的安全网，去动我们南方的种族秩序。我妥协了。\n\n所以这张「兜住所有人」的网，从一开始，就把多数黑人漏在了外面。\n\n这件事我当时说服自己：先把网织起来，再慢慢补窟窿。可那些被漏掉的人，可没有「慢慢」的本钱。',
        en: 'The sharecroppers pushed off the land were not the only place the New Deal left Black people out.\n\nIn 1935 I signed the most important piece of the New Deal: the Social Security Act. A pension in old age, relief when out of work, a safety net to catch everyone. It was a remarkable step.\n\nBut this net had two large holes from the start: it did not cover farm workers, and it did not cover domestic workers, the people who cook, mind children, and clean in other people\'s homes.\n\nGuess who mostly did those two kinds of work back then? It was the Black people of the South.\n\nWhy leave those two holes? Because I needed the votes of those Southern congressmen to get the bill through. And the Southern congressmen\'s condition was: do not use a federal safety net to touch our racial order in the South. I compromised.\n\nSo this net to "catch everyone" left most Black people outside it from the very start.\n\nAt the time I talked myself into it: weave the net first, patch the holes slowly. But the people left out could not afford "slowly."',
      },
      deliverGoal: 'N7 story — 1935 Social Security Act (养老金+失业救济=安全网了不起的一步) + 两窟窿不覆盖农业工+家政工 + 这两类活主要是南方黑人 + 为换南方议员票妥协 (条件: 别用联邦网动南方种族秩序) + 「兜住所有人的网从一开始漏掉多数黑人」+ 自我说服「先织网慢慢补」',
      engagementHook: '一张本该「兜住所有人」的安全网，为了换南方议员的票，从一开始就把多数黑人漏在外面。为了让好事能过关，牺牲掉一部分人——这个交易，值吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'fdr-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我承认这些漏洞，但也想让你看见我做对的那一面。\n\n新政之前，美国信一条老规矩：政府管得越少越好，穷是你自己的事，国家不管。我这一任，把这条老规矩掀翻了。\n\n我让联邦政府第一次担起责任：你失业了，国家管；你老了，国家管；你存银行的钱，国家给你保。今天美国人退休拿的养老金、失业领的救济、银行倒了存款还在——根子都在我那几年。\n\n这背后是一种新的经济想法。有个英国经济学家（指 Keynes/凯恩斯）主张：经济垮的时候，老百姓不敢花钱，那就让政府带头花——政府花钱造工作，工人有了钱再去消费，经济才转得起来。我用的就是这套路子。\n\n所以同一段历史，你可以说我把联邦政府变成了一个救人的政府；也可以说，我把它变成了一个再也不肯退场的庞然大物。这两句话，说的是同一件事。',
        en: 'I admit these holes, but I also want you to see the side I got right.\n\nBefore the New Deal, America believed an old rule: the less the government manages the better; if you are poor, that is your own affair, the nation stays out. My term overturned that old rule.\n\nI made the federal government take on responsibility for the first time: lose your job, the nation has you; grow old, the nation has you; the money you keep in the bank, the nation insures it. The pension Americans draw in retirement today, the relief they get when jobless, the deposits that survive a bank\'s collapse, the roots of all of it are in those years of mine.\n\nBehind it was a new economic idea. An English economist (Keynes) argued: when the economy collapses, ordinary people are afraid to spend, so let the government lead the spending. The government spends to build jobs, the workers then have money to spend, and only then does the economy turn again. That was the path I took.\n\nSo of the same history, you can say I turned the federal government into a government that saves people; or you can say I turned it into a giant that will never again step off the field. Those two sentences describe the same thing.',
      },
      deliverGoal: 'N8 story — 新政前老规矩 (政府管越少越好/穷是自己的事) 被掀翻 + 联邦第一次担责 (失业/养老/存款保险延续至今) + 凯恩斯主义经济想法 (经济垮时政府带头花钱造工作→消费→经济转) sourcingNote 处理 + 「救人的政府 vs 再不退场的庞然大物是同一件事」',
      engagementHook: '我把联邦政府变成了一个救人的政府——也变成了一个再也不肯退场的庞然大物。这两句话，说的其实是同一件事。一样东西的好和坏，能分得开吗？',
      expectsRealAnswer: false,
      sourcingNote: 'Keynesian fiscal stimulus — Keynes, General Theory (1936); New Deal deficit spending as applied case',
    },
    {
      id: 'fdr-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '说一件我最不愿意被人记住、却必须摆上桌的事。\n\n新政救国的同一双手，1942 年又签下了一道命令（9066 号行政命令）。当时美国卷进了二战，跟日本开战。我下令，把西海岸十几万有日本血统的人——其中三分之二是出生在美国、拿美国护照的公民——不经审判，全部关进内陆的拘留营。\n\n他们没犯任何罪。仅仅因为长着一张「敌国人」的脸。\n\n这是同一个我。一只手发养老金、织安全网、被千万人当成救星；另一只手，把一整个族群，凭血统关进了铁丝网。\n\n你看，「为了大多数人的安全/福祉」这句话，可以拿来盖一座养老金大厦，也可以拿来盖一座拘留营。说这话的，是同一张嘴，同一个我。\n\n权力做好事和做坏事，用的常常是同一套理由。',
        en: 'Now a thing I would least want to be remembered for, and yet must put on the table.\n\nThe same hands that saved the country with the New Deal signed, in 1942, an order (Executive Order 9066). America had entered the Second World War and was at war with Japan. I ordered more than a hundred thousand people of Japanese descent on the West Coast, two-thirds of them born in America, holding American passports as citizens, locked without trial into inland internment camps.\n\nThey had committed no crime. Only that they wore the face of an "enemy nation."\n\nThis is the same me. One hand handing out pensions, weaving the safety net, taken by millions as a savior; the other hand, locking a whole people behind barbed wire on the basis of blood.\n\nYou see, the line "for the safety and welfare of the majority" can be used to raise a tower of pensions, and it can be used to raise an internment camp. The mouth that says it is the same mouth, the same me.\n\nWhen power does good and when it does harm, it often uses the very same reason.',
      },
      deliverGoal: 'N9 story — 1942 Executive Order 9066 (二战对日开战) + 西海岸 10 万+ 日裔三分之二是美国公民不经审判关拘留营 + 没犯罪只因长敌国人的脸 + 同一个我 (一手养老金救星/一手凭血统关铁丝网) + 「为多数人福祉」同一句话盖养老金大厦也盖拘留营',
      engagementHook: '同一双手，一边发养老金织安全网，一边把一整个族群凭血统关进铁丝网。「为了大多数人」这句话，既能盖养老金大厦，也能盖拘留营。你怎么分得清它什么时候在骗你？',
      expectsRealAnswer: false,
    },
    {
      id: 'fdr-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头从我个人拉远，看这场新政在更长的时间里留下了什么。\n\n往前看，我做的事，是一场百年老争论的一个顶点。美国从立国起就吵一件事：联邦政府该强，还是各州该强？早年 Hamilton（汉密尔顿）那一派要强联邦，对手要守住州权。这条张力吵了一百多年。我这一任，把天平狠狠推向了「强联邦」那一边——而且再没推回去过。（你跑过汉密尔顿那段历史，会认得这条线的起点。）\n\n往深看，新政也是对前几十年的一个回应。镀金时代（Gilded Age）那几十年，财富疯狂集中、贫富撕裂、政府放任不管——新政某种意义上，是这个国家被那种「放任」逼到崩溃后，第一次系统地说「不能再这样了」。（你跑过镀金时代那段历史，会认得这种不平等的来路。）\n\n我把联邦政府的角色，从「守夜人」改成了「兜底人」。这个改变，到今天还在塑造每个美国人的生活——也还在被人争论。',
        en: 'Pull the lens back from me as a person and look at what this New Deal left behind over a longer span of time.\n\nLooking back, what I did was one peak of a century-old argument. From its founding, America had quarreled over one thing: should the federal government be strong, or should the states be strong? In the early days Hamilton\'s side wanted a strong federal government; his opponents wanted to hold state power. That tension was argued for more than a hundred years. My term pushed the scale hard toward "strong federal," and never pushed it back. (Run the hamilton topic and you will recognize where this line begins.)\n\nLooking deeper, the New Deal was also a response to the decades before. In the Gilded Age, wealth concentrated wildly, rich and poor tore apart, and the government let it all alone. The New Deal was, in a way, the first time this country, driven to collapse by that "letting alone," systematically said "we cannot go on like this." (Run the gilded-age topic and you will recognize where this inequality came from.)\n\nI changed the federal government\'s role from "night watchman" to "the one who catches you when you fall." That change shapes every American\'s life to this day, and is still argued over to this day.',
      },
      deliverGoal: 'N10 zoom-out + topic connection — 百年联邦 vs 州权争论顶点 → hamilton-jefferson-1790s 跨 Topic 锚 (Hamilton 强联邦起点) + 新政是对镀金时代不平等的制度回应 → gilded-age-1890 跨 Topic 锚 + 联邦角色从守夜人变兜底人塑造至今仍被争论',
      engagementHook: '我把联邦政府从「守夜人」改成了「兜底人」——这个改变到今天还在塑造每个美国人的生活，也还在被人争论。一个国家该不该在你跌倒时接住你？',
      expectsRealAnswer: false,
    },
    {
      id: 'fdr-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。先放下「好人坏人」，单看一个更硬的问题：政府这只手，到底救了这个国家，还是反而拖长了它的病？\n\n一种说法：政府该出手，是它救了命。1929 年那种自由放任，三年没缓过来，越等越死。是政府带头花钱、造工作、织安全网，才把这个国家从崩溃边上拉了回来。这一派背后是凯恩斯的想法：经济瘫了，就得靠政府这台「外力」把它重新发动起来。\n\n另一种说法：政府这只手，反而帮了倒忙。有经济学家（指 Hayek/哈耶克）认为，是政府乱插手、扭曲了价格和市场，才让萧条拖了整整十年，到二战才真正结束。市场本来会更快自愈，是政府把它越救越乱。\n\n这不是「大政府好」对「小政府坏」。是同一个问题的两种诚实答案。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand. Set aside "good man, bad man" and look at a harder question: did the government\'s hand save this country, or did it instead drag out its sickness?\n\nOne view: the government should act, and it saved lives. The laissez-faire of 1929 did not recover in three years; the longer it waited, the deader it got. It was the government leading the spending, building jobs, weaving the safety net, that pulled this country back from the edge of collapse. Behind this side is the idea of Keynes: when the economy is paralyzed, you need the government as an outside force to start it up again.\n\nThe other view: the government\'s hand made it worse instead. Some economists (Hayek) held that it was the government meddling, distorting prices and the market, that dragged the depression out a full ten years, ending only with the war. The market would have healed faster on its own; the government, the more it "rescued," the more it muddled.\n\nThis is not "big government good" against "small government bad." It is two honest answers to the same question.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis 经济双视角中立 — 一种说法 (政府该出手救命/凯恩斯外力发动) / 另一种说法 (政府帮倒忙/Hayek 扭曲价格拖长萧条十年到二战才结束) / 不是大政府好 vs 小政府坏是同一问题两种诚实答案 / 想 30 秒',
      engagementHook: '政府出手到底救了这个国家，还是拖长了它的病？一种说法是凯恩斯（政府花钱救命），一种说法是哈耶克（政府越救越乱）。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
      sourcingNote: 'Keynes vs Hayek debate on the Depression — Keynes, General Theory (1936); Hayek, Prices and Production (1931). Synthesis kept neutral per AUTHORING_PIPELINE 第 8 条 B.',
    },
    {
      id: 'fdr-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个救国者？\n\n同一双手，织起了到今天还在兜住美国人的安全网，也亲手把多数黑人漏在网外、把一整个族群关进了营。我救了这个国家，也在「救大多数」的名义下，牺牲了那些没坐在谈判桌前、没人替他们投票的人。把这两件事放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有那种「为了大局好」「为了大多数人」的决定——一个班规、一项安排、一个家里的决定——听起来很对，可总有那么一两个最没声音的人，悄悄被牺牲掉了？\n\n那时候，你会跟着说「这是为了大家好」，还是会停一下，去问那句最难的问题：被牺牲掉的那个人，有没有人替他算过这笔账？',
        en: 'Having walked my whole life, how would you judge a rescuer like this?\n\nThe same hands wove the safety net that catches Americans to this day, and with their own work left most Black people outside the net and locked a whole people in camps. I saved this country, and in the name of "saving the majority" I sacrificed the people who did not sit at the negotiating table, for whom no one cast a vote. Put those two on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there a decision made "for the greater good," "for the majority," a class rule, an arrangement, a decision at home, that sounds right, yet there is always that one or two people with the least voice who quietly get sacrificed?\n\nWhen that happens, will you go along and say "this is for everyone\'s good," or will you stop a moment and ask the hardest question: the person being sacrificed, has anyone done the math for him?',
      },
      deliverGoal: 'N12 close — 评价救国者 (织起至今安全网 vs 漏掉多数黑人+关族群进营/「救大多数」名义牺牲没坐谈判桌没人替他投票的人同一天平) + transfer「今天你身边为大局好/为多数人的决定总牺牲最没声音的人」+ 你会跟着说为大家好还是去问被牺牲的人有没有人替他算账',
      engagementHook: '我织起了至今还在兜住美国人的网，也把最没声音的人漏在了网外。你会怎么评价这样一个救国者？今天你身边那个「为了大家好」却牺牲掉最没声音的人的决定，你会怎么做？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Frances Perkins (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var francesPerkinsLens = {
  id: 'frances-perkins',
  name: 'Frances Perkins',
  nameCn: '弗朗西丝·珀金斯',
  role: 'lonely-mediator',
  perspectiveTag: 'social-security-architect',
  icon: '🧷',
  description: {
    cn: '1880 年生，新英格兰人。1911 年她亲眼看见纽约一场工厂大火，146 个被锁在车间里的女工葬身火海。那一天，决定了她这一生要做什么。1933 年她当上劳工部长，成为美国历史上第一位女性内阁部长。她进内阁前提了一张条件清单，社会保障就在上面；后来她成了社会保障法最主要的设计者。她常常是会议室里唯一的女人，被男人们绕过、轻视。这一遍让你从一个总在被低估的人内部，看一张兜住所有人的安全网，是怎么一边织起来、一边被迫剪掉几个角的。',
    en: 'Born 1880, a New Englander. In 1911 she watched a great factory fire in New York, where 146 women workers, locked inside their workrooms, burned to death. That day decided what she would do with her life. In 1933 she became Secretary of Labor, the first woman ever in an American cabinet. Before joining, she handed over a list of conditions, with social security on it; later she became the chief designer of the Social Security Act. She was often the only woman in the room, talked over and dismissed by the men. This pass lets you watch, from inside someone always underestimated, how a safety net to catch everyone was woven, and forced at the same time to have a few of its corners cut off.',
  },
  storyboard: [
    {
      id: 'fp-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1911 年 3 月 25 日，纽约。我正在街对面喝下午茶，忽然听见尖叫。\n\n一栋制衣厂着火了。火在八楼以上，逃不出来。我抬头，看见女工一个接一个从窗口跳下来——因为车间的门，被老板从外面锁死了，怕她们偷懒、偷布料。\n\n那天烧死、摔死了 146 个人，大多是年轻女工，最小的才十几岁。\n\n我站在街上，看着她们落下来。那一刻我心里立下一件事：我这辈子，就是要让这种事不再发生。\n\n我是 Frances Perkins（弗朗西丝·珀金斯）。二十多年后，我成了美国第一位女性内阁部长。这一遍，你坐进我这个位置——一个总在被男人们绕过去、却下定决心要把「保护普通人」写进国家法律的人。',
        en: 'On 25 March 1911, in New York, I was having afternoon tea across the street when I heard screaming.\n\nA garment factory was on fire. The fire was above the eighth floor, with no way out. I looked up and saw women workers leaping from the windows one after another, because the workroom doors had been locked from the outside by the bosses, afraid the women would slack off or steal cloth.\n\nThat day 146 people burned or fell to their deaths, most of them young women, the youngest only in their teens.\n\nI stood in the street and watched them come down. In that moment I set one thing in my heart: my whole life would be to keep this from happening again.\n\nI am Frances Perkins. More than twenty years later, I became the first woman in an American cabinet. This pass puts you in my seat, a person always talked past by the men, yet set on writing "protect ordinary people" into the law of the nation.',
      },
      deliverGoal: 'N1 hook — 1911.3.25 Triangle 制衣厂大火 (门被老板从外锁死/女工跳窗) + 146 死多是年轻女工 + Perkins 街对面目睹立志 + 二十多年后成美国首位女性内阁部长 + 这一遍视角 (总被男人绕过但决心把保护普通人写进法律)',
      engagementHook: '她亲眼看着女工从窗口跳下来——只因为门被老板从外面锁死了。一件让你这辈子都忘不掉的事，能不能变成你一生要做的事？',
      expectsRealAnswer: false,
    },
    {
      id: 'fp-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是谁，你才懂我为什么敢提那些条件。\n\n那场大火之后，我没回去过安稳日子。我一头扎进劳工保护——查血汗工厂、推工时限制、争工人安全的法律。一干就是二十年。\n\n那个年代，女人能进政界本来就少。我每往上走一步，都有人提醒我：你是个女人，别太出头。\n\n但我有一样别人没有的东西：我亲眼见过 146 个人是怎么死的。这让我在谈判桌上，比那些只看数字的男人，多一份谁也夺不走的底气。\n\n顺带说一句：我能站到这个位置，背后是一代女性几十年争来的。就在我成为部长前十几年，美国女性才刚争到投票权——女人能参政、能当部长，是踩着她们的肩膀。（你跑过妇女选举权那段历史，会认得这条路。）',
        en: 'First, who I am, so you understand why I dared to ask for those conditions.\n\nAfter that fire I did not go back to a settled life. I threw myself into labor protection, inspecting sweatshops, pushing limits on working hours, fighting for laws on worker safety. I did it for twenty years.\n\nIn that age, few women could enter politics at all. Every step up, someone reminded me: you are a woman, do not stick out too far.\n\nBut I had one thing the others did not: I had seen with my own eyes how 146 people died. That gave me, at the negotiating table, a footing no one could take from me, more than the men who saw only numbers.\n\nAnd one more thing: that I could stand in this position rests on what a generation of women fought for over decades. Only about a dozen years before I became Secretary did American women win the vote. That a woman could enter politics and serve as Secretary stands on their shoulders. (Run the womens-suffrage topic and you will recognize this road.)',
      },
      deliverGoal: 'N2 setup — 大火后 Perkins 扎进劳工保护二十年 (查血汗工厂/推工时限制/争安全法) + 女人进政界少被劝别出头 + 「亲眼见 146 人死」是谈判桌底气 + 跨 Topic 锚: 成部长前十几年女性才争到投票权 → womens-suffrage-1920',
      engagementHook: '别人在谈判桌上只看数字，我亲眼见过 146 个人是怎么死的。亲身经历过的事，会不会让你比谁都更有底气，也更难妥协？',
      expectsRealAnswer: false,
    },
    {
      id: 'fp-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '1933 年，罗斯福（FDR）请我当劳工部长。\n\n这是史无前例的——之前从没有女人进过内阁。可我没有立刻答应。我做了一件让他意外的事：我提了一张条件清单。\n\n我对他说：你要我来，可以。但我要你支持这些东西——给老人养老金、给失业的人救济、定最低工资、限制童工、织一张兜住普通人的安全网。\n\n这不是讨价还价。这是我二十年想做、却一直没权力做的事。现在有人把权力递给我，我得先问清楚：这个权力，能不能用来做这些事？\n\n他答应了。我才上任。\n\n这一步你得记住：很多人拿到权力，先想的是「我升官了」。我拿到权力，先想的是「我能用它换到什么」——不是给自己，是给那 146 个再也回不来的人，和千千万万还活着、还在血汗工厂里的人。',
        en: 'In 1933, Roosevelt asked me to be Secretary of Labor.\n\nIt was unprecedented; no woman had ever entered the cabinet. But I did not say yes at once. I did something that surprised him: I handed over a list of conditions.\n\nI told him: you want me, fine. But I want you to back these things, pensions for the old, relief for the jobless, a minimum wage, limits on child labor, a safety net to catch ordinary people.\n\nThis was not haggling. These were the things I had wanted to do for twenty years and never had the power to do. Now someone was handing me power, and I had to ask first: can this power be used for these things?\n\nHe agreed. Only then did I take the post.\n\nRemember this step: many people, getting power, first think "I have been promoted." I, getting power, first thought "what can I trade it for", not for myself, but for the 146 who would never come back, and for the millions still alive, still in the sweatshops.',
      },
      deliverGoal: 'N3 setup — 1933 FDR 请 Perkins 当劳工部长 (史无前例无女人进内阁) + 她没立刻答应提条件清单 (养老金/失业救济/最低工资/限童工/安全网) + 不是讨价还价是二十年想做没权力做的事 + 「很多人拿权力先想升官我先想能换到什么 (给 146 个回不来的人)」',
      engagementHook: '别人拿到权力，先想「我升官了」；我拿到权力，先想「我能用它换到什么」。如果有一天你手里有了权，你最想用它做的第一件事是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'fp-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你坐进了内阁会议室。一屋子都是男人——议员、银行家、各部部长。你是唯一的女人。\n\n你提出要做一张全国的安全网：人老了发养老金，失业了发救济金。这是美国从来没有过的东西。\n\n反对声立刻压过来。有人说：这是社会主义那一套，会把美国人养懒。有人说：钱从哪来？有人干脆当你不存在，你说话，他们看别处。\n\n你心里清楚，硬碰硬你赢不了——你一个女人，没有他们的人脉、没有他们的票仓。\n\n可你也有他们没有的：你比谁都懂普通工人到底缺什么，你能把一个吓人的大计划，拆成他们听得懂、咽得下的具体条款。\n\n这一刻你得想：在一个根本不把你当回事的房间里，你怎么把一件没人做过的大事，一寸一寸推过去？',
        en: 'Now you are me.\n\nYou sit down in the cabinet room. It is full of men, congressmen, bankers, the other secretaries. You are the only woman.\n\nYou put forward a national safety net: a pension when old, relief when out of work. Something America has never had.\n\nThe opposition presses in at once. Some say: this is socialism, it will make Americans lazy. Some say: where does the money come from? Some simply act as though you do not exist; when you speak, they look elsewhere.\n\nYou know in your heart you cannot win head to head. You are a woman, without their connections, without their voting blocs.\n\nBut you have what they do not: you understand better than anyone what ordinary workers actually lack, and you can take a frightening grand plan and break it into concrete clauses they can understand and swallow.\n\nSo here you must think: in a room that does not take you seriously at all, how do you push something no one has done before, an inch at a time, through?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 内阁会议室唯一女人 + 提全国安全网 (养老金+失业救济美国从没有过) + 反对 (社会主义养懒/钱从哪来/当她不存在) + 硬碰硬赢不了没人脉票仓 + 但比谁都懂工人缺什么能把大计划拆成具体条款 + 怎么在不把你当回事的房间一寸寸推过去',
      engagementHook: '在一个根本不把你当回事的房间里，你要把一件没人做过的大事推过去。当别人连看都不看你，你靠什么让他们听你的？',
      expectsRealAnswer: false,
    },
    {
      id: 'fp-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我没有去跟他们吵「该不该有安全网」。我换了个打法。\n\n我把这件大事，包装成一件「实际、稳妥、不激进」的事。我不说「社会主义」「再分配」这种吓人的词，我说：这是给老人的一点保障，是让工人自己每月存一点、政府帮着管，老了能领回来。听起来像保险，不像革命。\n\n我还做了一件笨功夫：组了个委员会，把养老金怎么算、钱从哪来、谁来管，全部算成白纸黑字的细账，让那些质疑「钱从哪来」的人无话可说。\n\n调停的真功夫，不是把声音喊得最大。是把一件让人害怕的事，讲成一件让人放心的事；把一个宏大的口号，拆成一条条能落地、能算账的条款。\n\n我让那些本来反对我的男人，一条一条地，点了头。',
        en: 'I did not go and argue with them over "whether there should be a safety net." I changed my approach.\n\nI dressed this great thing up as something practical, steady, not radical. I did not use frightening words like "socialism" or "redistribution." I said: this is a bit of security for the old, workers putting aside a little each month, the government helping to manage it, drawing it back when old. It sounded like insurance, not revolution.\n\nI also did the plodding work: I put together a committee and worked out, in black and white, how the pension would be calculated, where the money would come from, who would manage it, so the people who doubted "where does the money come from" had nothing to say.\n\nThe real craft of mediation is not shouting loudest. It is telling a thing people fear as a thing people can be easy about; breaking a grand slogan into clause after clause that can take root and be reckoned.\n\nI got the men who had opposed me to nod, one clause at a time.',
      },
      deliverGoal: 'N5 story — Perkins 不吵该不该有安全网换打法 (包装成实际稳妥不激进/不说社会主义说像保险不像革命) + 笨功夫组委员会算白纸黑字细账让质疑钱从哪来的人无话可说 + 「调停真功夫不是喊最大声是把害怕的事讲成放心的事/把口号拆成能落地能算账的条款」',
      engagementHook: '我没去争「该不该有」，我把一件让人害怕的事，讲成了一件让人放心的事。同样一件事，换个说法，结果就完全不同——这是聪明，还是耍滑头？',
      expectsRealAnswer: false,
    },
    {
      id: 'fp-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1935 年，社会保障法（Social Security Act）通过了。\n\n这是我这辈子最重要的一仗，也是新政里最持久的一块。从那天起，美国老人有了养老金，失业的人有了救济金。今天美国人退休拿的钱，根子就在这部法。\n\n可我要诚实告诉你这块网上的两个洞。\n\n要让法案在国会过关，必须拿到南方议员的票。他们开的条件是：别让这张网，覆盖农业工人和家政工人。\n\n这两类活，当时主要是南方黑人在干。换句话说，为了让这部法活下来，我们亲手把多数黑人，剪在了网外面。\n\n那笔本该兜住所有人的「政府的钱」，从一开始就绕开了他们。（被这张网漏掉、又被农业补贴挤出土地的那群人，过的是什么日子，你换到他那一遍会看见。）\n\n我后来一直为这两个洞难受。可在当时，要么是这张「有洞的网」，要么是一张都没有。我选了有洞的。',
        en: 'In 1935, the Social Security Act passed.\n\nIt was the most important fight of my life, and the most lasting piece of the New Deal. From that day, America\'s old had pensions and the jobless had relief. The money Americans draw in retirement today has its roots in this law.\n\nBut I must be honest with you about the two holes in this net.\n\nTo get the bill through Congress, we had to win the Southern congressmen\'s votes. Their condition was: do not let this net cover farm workers and domestic workers.\n\nThose two kinds of work were done mostly by Black Southerners back then. In other words, to keep this law alive, we cut most Black people out of the net with our own hands.\n\nThe "government money" that should have caught everyone went around them from the start. (What kind of days were lived by the people left out of this net, and pushed off the land by the farm subsidy, you will see when you switch to his pass.)\n\nI ached over those two holes afterward. But at the time, it was either this "net with holes" or no net at all. I chose the one with holes.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1935 Social Security Act 通过 (养老金+失业救济最持久延续至今) + 诚实说两个洞 + 为换南方议员票必须不覆盖农业工+家政工 + 这两类活主要南方黑人 = 亲手把多数黑人剪网外 + 桥到佃农 lens (被漏掉+被农业补贴挤出) + 「要么有洞的网要么没有/我选了有洞的」',
      engagementHook: '为了让这部法活下来，我们亲手把多数黑人剪在了网外面——因为要么是「有洞的网」，要么一张都没有。你会选那张有洞的网吗？还是宁愿什么都不要？',
      expectsRealAnswer: false,
    },
    {
      id: 'fp-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得跟你掰扯清楚，那两个洞是怎么剪下去的。\n\n不是我们恨黑人，也不是谁拍桌子说「不许黑人进」。它发生得很「干净」：南方议员只说一句技术话——农业工人和家政工人「不好统计、不好收费」，把他们排除在外「更省事」。\n\n你看，最大的不公，往往不靠喊口号，靠的是一条听起来无比合理的「技术细节」。没人需要说出「种族」两个字，可结果，正好把一个种族大半挡在门外。\n\n这是调停者最该警惕的事：你忙着「让大家都能接受」，可有些「让步」，听起来是技术问题，骨子里是把没在场的人，悄悄牺牲掉。\n\n我当时算过这笔账吗？算过。我知道这两个洞是冲谁去的。可我没有那么大的力气，同时打赢「立法」和「种族」这两场仗。\n\n我承认：我保住了网，代价是默许了那两个洞。',
        en: 'Let me lay out plainly how those two holes got cut.\n\nIt was not that we hated Black people, nor that anyone pounded the table and said "no Blacks allowed." It happened very "cleanly": the Southern congressmen said one technical thing, that farm workers and domestic workers were "hard to count, hard to collect from," and leaving them out was "simpler."\n\nYou see, the greatest injustice often does not work by shouting slogans. It works through one detail that sounds perfectly reasonable. No one needed to say the word "race," and yet the result kept most of a race outside the door.\n\nThis is what a mediator must watch for most: you are busy "getting everyone to accept it," but some "concessions" sound like technical questions and are, at the bone, the quiet sacrifice of people not in the room.\n\nDid I do that math at the time? I did. I knew whom those two holes were aimed at. But I did not have the strength to win both the legislative fight and the racial fight at once.\n\nI admit it: I saved the net at the price of allowing those two holes.',
      },
      deliverGoal: 'N7 story — 两个洞怎么剪的 (不是喊口号/南方议员说技术话: 农业家政工不好统计不好收费排除更省事) + 「最大不公靠听起来合理的技术细节/没人说种族却把一个种族大半挡门外」+ 调停者最该警惕 (技术让步骨子里牺牲没在场的人) + 「保住网代价是默许两个洞」',
      engagementHook: '没人说出「种族」两个字，只说了一句「不好统计、更省事」——结果正好把一个种族大半挡在门外。最大的不公，是不是常常藏在一句听起来最合理的话里？',
      expectsRealAnswer: false,
    },
    {
      id: 'fp-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '别只记住那两个洞。我也想让你看见我织成的这张网，到底有多大。\n\n社会保障法之外，那几年我推着定下了一连串保护普通人的规矩：每周工时有了上限、最低工资有了底线、雇童工被严格限制、工人有了组工会、跟老板谈判的法律权利。\n\n这些今天听起来天经地义的东西——周末、最低工资、不让孩子下工厂——在我之前，大多不存在。是我们这一代人，一条一条争来的。\n\n这背后还有一条更长的线。这种「让政府织一张安全网兜住穷人」的想法，不是我凭空想出来的。一百多年前，英国有人办工厂时就试过：缩短工时、办学校、不雇童工，证明善待工人工厂也能办下去。这条「社会安全网」的思路，是几代人接力传下来的。\n\n我做的，是把这条传了一百多年的思路，第一次写成了一个大国的法律。',
        en: 'Do not remember only those two holes. I also want you to see how large the net I wove really was.\n\nBeyond the Social Security Act, in those years I pushed through a string of rules protecting ordinary people: a ceiling on the workweek, a floor under the minimum wage, strict limits on hiring children, and the legal right of workers to form unions and bargain with their bosses.\n\nThe things that sound obvious today, weekends, a minimum wage, no children sent to the factory floor, mostly did not exist before me. They were won by my generation, one rule at a time.\n\nBehind this runs a longer line. The idea of "the government weaving a safety net to catch the poor" was not something I invented from nothing. More than a hundred years earlier, a man running mills in England had tried it: shorten the hours, build a school, hire no children, proving a factory could run while treating workers well. This thread of the "social safety net" was passed down through several generations.\n\nWhat I did was take that thread, handed down for more than a hundred years, and write it for the first time into the law of a great nation.',
      },
      deliverGoal: 'N8 story — 别只记两个洞看网多大 (工时上限/最低工资底线/严限童工/工会谈判权) + 周末最低工资不让孩子下厂之前大多不存在是这代人一条条争来的 + 跨 Topic 锚: 社会安全网思想源头 (一百多年前英国办厂人缩工时办学校不雇童工 = Owen) sourcingNote + Perkins 第一次把这思路写成大国法律',
      engagementHook: '周末、最低工资、不让孩子下工厂——这些今天天经地义的东西，在我之前大多不存在。你享受的哪些「理所当然」，其实是有人替你争来的？',
      expectsRealAnswer: false,
      sourcingNote: 'Robert Owen / New Lanark mills as 19th-century precursor of the social safety net (B1 cross-topic anchor)',
    },
    {
      id: 'fp-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我在劳工部长这个位置上，干了整整十二年——比任何人都久。\n\n这十二年我学会一件苦的事：当调停者，意味着你永远在「能拿到的」和「应该要的」之间，被拉扯。\n\n我应该要一张兜住每个人的网。我能拿到的，是一张漏掉了多数黑人的网。我每天都在这两者之间，做一个又一个不干净的选择。\n\n有人事后骂我软弱，说我向南方议员低了头。也有人说，正因为我肯低这个头，这张网才活了下来——要是我当时寸步不让，可能连有洞的网都没有。\n\n这就是调停者的命：你做成的每一件事，都带着一道你被迫剪下的口子。后人记住你织的网，也该记住那两个洞是怎么来的。\n\n我从不假装那两个洞不存在。我只是想让你明白：在那个屋子里，那是我能为最多人，争到的最好结果。',
        en: 'I held the post of Secretary of Labor for a full twelve years, longer than anyone.\n\nIn those twelve years I learned one bitter thing: to be a mediator means you are forever pulled between "what you can get" and "what you ought to demand."\n\nI ought to have demanded a net that caught everyone. What I could get was a net that left out most Black people. Every day I made one unclean choice after another between the two.\n\nSome cursed me afterward as weak, said I bowed my head to the Southern congressmen. Others said it was precisely because I would bow that head that the net survived at all; had I refused to give an inch, there might have been no net, holes and all.\n\nThis is the mediator\'s fate: everything you accomplish carries a cut you were forced to make. Later generations remember the net you wove, and they should also remember where those two holes came from.\n\nI never pretend those two holes do not exist. I only want you to understand: in that room, that was the best result I could win for the most people.',
      },
      deliverGoal: 'N9 story — Perkins 任劳工部长十二年最久 + 学会苦事 (调停者永远在能拿到的 vs 应该要的之间拉扯) + 应该要兜住每个人能拿到漏掉多数黑人 + 有人骂软弱/有人说肯低头网才活 + 「调停者命: 做成的每件事带一道被迫剪下的口子」+ 「那是我能为最多人争到的最好结果」',
      engagementHook: '应该要的，是兜住每个人的网；能拿到的，是漏掉多数黑人的网。我每天都在这两者之间，做一个又一个不干净的选择。如果是你，你会守住理想寸步不让，还是要那个不完美但能成的结果？',
      expectsRealAnswer: false,
    },
    {
      id: 'fp-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头从我个人拉远，看我织的这张网，在更长的时间里走到了哪。\n\n那两个洞，没有永远留着。社会保障法通过二十年后，农业工人和家政工人，陆续被加进了这张网。我没能在 1935 年补上的洞，后人一点点替我补上了。这说明一件事：一部法律不是刻死的，它可以被后人改、被后人补。\n\n往更宽里看，我这个人本身，也是一条长线上的一个点。我能当上部长，是因为前一代女性争来了投票权、争来了女人能进公共生活的门（你跑过妇女选举权那段历史就懂这条路）。而我做的事——把「保护工人」写进国家法律——又成了后来无数人接着往下走的起点。\n\n一个人能做的总是有限的。可如果你做的事，能被下一个人接着做下去，那它就没有白做。',
        en: 'Pull the lens back from me as a person and look at where the net I wove went over a longer span of time.\n\nThose two holes did not stay forever. Twenty years after the Social Security Act passed, farm workers and domestic workers were, bit by bit, added into the net. The holes I could not close in 1935, later generations closed for me, little by little. This shows one thing: a law is not carved in stone; it can be changed and patched by those who come after.\n\nLooking wider, I myself am only one point on a long line. I could become Secretary because the generation of women before me won the vote and won women the door into public life (run the womens-suffrage topic and you will know this road). And what I did, writing "protect the workers" into the law of the nation, became in turn the starting point that countless people after me carried on.\n\nWhat one person can do is always limited. But if what you do can be carried on by the next person, then it was not done in vain.',
      },
      deliverGoal: 'N10 zoom-out + topic connection — 两个洞没永远留着 (法通过二十年后农业工+家政工陆续加进网) + 法律不刻死可被后人补 + Perkins 自己是长线一点 (能当部长靠前代女性争来投票权 → womens-suffrage-1920 跨 Topic 锚) + 她的事成后人起点 + 「一个人有限/能被接着做就没白做」',
      engagementHook: '我没能在 1935 年补上的洞，后人一点点替我补上了——一部法律不是刻死的。一件你这辈子做不完的好事，交给下一个人接着做，算不算也是你做的？',
      expectsRealAnswer: false,
    },
    {
      id: 'fp-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是那张安全网的母亲。在一个根本不把女人当回事的房间里，我把一件没人做过的大事推成了法律。今天每个美国老人领的养老金、每个失业的人领的救济，根子都在我那一仗。没有我这样肯低头、肯算细账、肯一寸寸磨的人，再好的理想也落不了地。\n\n另一种说法：我也是那两个洞的共谋。我心里清楚地知道，剪掉农业工和家政工，剪掉的是谁。我选择默许，去换法案过关。我保住了网，代价是亲手把多数黑人，关在了网外面好几十年。我不是不知道——我是知道了，还是做了。\n\n这两边不是「功劳加遗憾」。是同一种本事的两面——「让事情能成」的本事，既能织出一张救人的网，也能把不该剪的角，剪得很「干净」。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the mother of that safety net. In a room that did not take a woman seriously at all, I pushed something no one had done before into law. The pension every old American draws today, the relief every jobless person draws, has its roots in that fight of mine. Without people like me, willing to bow the head, to reckon the fine accounts, to grind it through an inch at a time, even the finest ideal never reaches the ground.\n\nThe other view: I was also a partner to those two holes. I knew clearly whom we were cutting out when we cut out the farm workers and the domestic workers. I chose to allow it, to trade for the bill\'s passage. I saved the net at the price of locking most Black people outside it for decades, with my own hands. It was not that I did not know. I knew, and did it anyway.\n\nThese are not "credit and regret." They are two faces of one ability. The skill of "making things happen" can weave a net that saves people, and it can cut off the corner that should not be cut, very "cleanly."\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (安全网的母亲/不把女人当回事房间推成法律/养老金救济根子在她/肯低头算细账理想才落地) / 另一种说法 (两个洞的共谋/清楚剪掉的是谁/选默许换过关/亲手把多数黑人关网外几十年/知道了还做) / 同一种本事两面 / 想 30 秒',
      engagementHook: '安全网的母亲，和那两个洞的共谋——是同一个我，同一种本事的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'fp-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个调停者？\n\n她在一个不把女人当回事的房间里，织出了一张兜住几代人的安全网；她也清清楚楚地知道，自己亲手把多数黑人，剪在了网外。她保住了一件能救最多人的事，代价是默许牺牲掉那些没坐在桌前、没人替他们投票的人。「让事情能成」这件本事，到底值多少分？你怎么评？\n\n再想一步。今天你身边，有没有这样的时刻：你想做成一件好事，可要做成，就得对某个「不太合理却很现实」的条件低头——而低这个头，会悄悄牺牲掉某个没在场的人？\n\n那时候，你会为了「把事情做成」而低头，还是会停下来，先问一句：这个被我牺牲掉的人，将来谁替他把这笔账，补回来？',
        en: 'Having walked my whole life, how would you judge a mediator like this?\n\nIn a room that did not take a woman seriously, she wove a safety net that caught generations; she also knew, clearly, that she cut most Black people out of the net with her own hands. She saved a thing that could save the most people, at the price of allowing the sacrifice of those who did not sit at the table, for whom no one cast a vote. The skill of "making things happen," how many points is it worth? How do you judge it?\n\nThen take one more step. In your own life today, is there a moment like this: you want to make a good thing happen, but to make it happen you must bow to some condition that is "not quite reasonable yet very real", and bowing that head quietly sacrifices someone not in the room?\n\nWhen that happens, will you bow the head to "get it done," or will you stop and ask first: this person I am sacrificing, who, later, will set his account right again?',
      },
      deliverGoal: 'N12 close — 评价调停者 (不把女人当回事房间织出兜几代人的网 vs 清楚亲手把多数黑人剪网外/保住能救最多人的事代价是默许牺牲没坐桌前没人投票的人) + transfer「今天你想做成好事得对不合理却现实的条件低头会牺牲没在场的人」+ 你会为做成而低头还是先问谁替被牺牲的人补账',
      engagementHook: '她织出了兜住几代人的网，也亲手把最没声音的人剪在了网外。你会怎么评价这样一个调停者？今天你想做成一件好事、却得对一个会牺牲别人的条件低头时，你会怎么做？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: 被新政农业补贴挤出土地的南方黑人佃农 (receiving-end) — DEFAULT
// composite — 基于 1930s 南方 sharecropping 史 + AAA displacement 记录
// ═══════════════════════════════════════════════════════════════════════

export var displacedSharecropperLens = {
  id: 'displaced-sharecropper-receiving-end',
  name: 'A Displaced Sharecropper',
  nameCn: '一个被挤走的佃农',
  role: 'receiving-end',
  perspectiveTag: 'aaa-displaced',
  icon: '🌾',
  description: {
    cn: '一个虚构但真实的南方黑人佃农（人物是合成的，他经历的事，是 1930 年代南方千千万万人真实经历过的）。他的祖父曾是奴隶，南北战争后获得自由，却一辈子租别人的地、还不完的债。他生在密西西比一间漏雨的木屋，没上过学，认得几个字。1933 年新政来了，城里的报纸说政府要救农民，可那年冬天，地主拿着政府寄来的支票，把他一家从耕了三代的地里赶了出去。这一遍，你站在那张新政安全网本来就没打算兜住的人这边，看一段「政府拯救人民」的历史。',
    en: 'A fictional but true Black sharecropper of the South (the person is a composite; what he lives through is what millions in the 1930s South truly lived through). His grandfather had been a slave, freed after the Civil War, yet rented another man\'s land his whole life and never paid off the debt. He was born in a leaking wooden cabin in Mississippi, never went to school, and could read a few words. In 1933 the New Deal came, and the city papers said the government would save the farmers, but that winter, the landlord, holding the check the government had mailed, drove his family off the land three generations had farmed. This pass lets you stand with the people the New Deal\'s safety net never planned to catch, and look at a history of "the government saving the people."',
  },
  storyboard: [
    {
      id: 'ds-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1933 年冬天，密西西比。地主来到我家门口，手里捏着一封信。\n\n他说：政府给我寄了钱，今年地要少种。你们一家，不用留了。\n\n我耕这块地，我爹耕过，我爷爷也耕过——三代人，一辈子弯腰在这片土上。可它从来不是我们的。它是地主的。\n\n我没读过几年书，可那封信我看不懂的字，我也大概猜到了意思：城里人管那叫「新政」，说是政府来救农民的。\n\n救农民。我也是农民。可救到最后，政府寄来的那笔钱，成了把我赶走的那一脚。\n\n我是谁不重要——我没在任何历史书上留过名。我说的事，是那几年南方千千万万人真实经历过的。这一遍，你站在我这里，看那场「政府拯救人民」的历史，到底救了谁。',
        en: 'Winter 1933, Mississippi. The landlord came to my door, a letter pinched in his hand.\n\nHe said: the government sent me money, and this year we plant less. Your family, you do not need to stay.\n\nI farmed this land, my father farmed it, my grandfather farmed it, three generations, a lifetime bent over this soil. But it was never ours. It was the landlord\'s.\n\nI had little schooling, but the words on that letter I could not read, I could guess at all the same: in the city they called it the "New Deal," and said the government had come to save the farmers.\n\nSave the farmers. I was a farmer too. But in the end, the money the government mailed became the boot that kicked me out.\n\nWho I am does not matter; I left my name in no history book. What I tell is what millions in the South truly lived through in those years. This pass, you stand where I stand and see who that history of "the government saving the people" actually saved.',
      },
      deliverGoal: 'N1 hook (受影响者优先 gold-standard) — 1933 冬密西西比地主拿信上门 (政府寄钱今年少种你们不用留) + 三代人耕地却从来不是我们的是地主的 + 没读书但猜到「新政」救农民 + 「我也是农民可政府寄的钱成了赶我走的一脚」+ composite 显式 (没留名/那几年千千万万人真实经历) + 这一遍从安全网没打算兜住的人看',
      engagementHook: '城里报纸说政府来救农民，我也是农民——可政府寄来的钱，成了把我赶走的那一脚。「救人民」的好政策，怎么会变成赶人走的工具？',
      expectsRealAnswer: false,
    },
    {
      id: 'ds-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我们家是怎么走到租地这一步的，你才懂这块地对我意味着什么。\n\n我爷爷生下来就是奴隶。南北战争打完，1865 年，奴隶制废了，他自由了。\n\n可自由那天，他一无所有——没有地、没有钱、不识字。他能做的，只有去租从前主人那种人的地来种。说好了：你种我的地，收成分我一大半，剩下的归你。\n\n这叫 sharecropping（分成租佃）。听起来公平，其实是个填不满的坑。种子、农具、口粮，全得先向地主赊；年底一算账，收成还不够还赊的债。债滚债，越欠越多。\n\n我爷爷这么过了一辈子，我爹这么过了一辈子，到我，还是这么过。\n\n（我们家三代的具体年份、人名，是这个故事的合成补充。能确证的是：这套「自由了却还不完债」的活法，是当年南方多数黑人真实的命。）',
        en: 'First, how my family came to renting land, so you understand what this land meant to me.\n\nMy grandfather was born a slave. When the Civil War ended, in 1865, slavery was abolished and he was free.\n\nBut the day he was free, he had nothing, no land, no money, could not read. All he could do was rent land to farm from the same kind of people who had once been masters. The deal: you farm my land, give me a large share of the crop, the rest is yours.\n\nThis is called sharecropping. It sounds fair; it is really a pit that can never be filled. Seed, tools, the food you eat, all of it taken on credit from the landlord first; at year\'s end the accounts are tallied, and the crop is not even enough to clear the credit. Debt rolls on debt, owing more and more.\n\nMy grandfather lived his whole life this way, my father lived his whole life this way, and down to me, it is still this way.\n\n(My family\'s exact years and names across three generations are a composite addition to this story. What can be confirmed is that this way of living, "free yet never out of debt," was the true fate of most Black people in the South back then.)',
      },
      deliverGoal: 'N2 setup — 爷爷生为奴隶 1865 内战后自由却一无所有 (无地无钱不识字) → 只能租从前主人那种人的地 + sharecropping 定义 (收成分地主一大半) + 听起来公平实是填不满的坑 (种子农具口粮先赊/年底收成不够还债/债滚债) + 三代都这么过 + anti-fab 括号短句 (年份人名合成/确证: 自由了还不完债是多数黑人真实命)',
      engagementHook: '我爷爷自由那天，一无所有——只能去租从前主人那种人的地，欠一辈子还不完的债。「自由了」和「真正能自己做主」，是不是根本是两回事？',
      expectsRealAnswer: false,
    },
    {
      id: 'ds-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '说说大萧条那几年，我们的日子。\n\n1929 年城里股市崩了，我们一开始没太当回事——我们本来就穷，能再穷到哪去？\n\n后来才知道，能。棉花是我们的命根子，棉价一年比一年低，低到摘一天棉花换不来一顿饱饭。我们越拼命种，越不值钱；越不值钱，欠地主的债越还不上。\n\n那几年，我家孩子里有的是饿死、病死的。穷人家的孩子，发个烧就可能没了——请不起医生，买不起药。\n\n我听城里来的人说，远在华盛顿，换了个新总统，叫罗斯福，要搞一套大办法救国家。我心里燃起一点点指望：也许，这回轮到我们这种人，能喘口气了？\n\n你记住我这点指望。因为接下来发生的事，跟我指望的，正好相反。',
        en: 'Let me tell you about our days in those Depression years.\n\nIn 1929 the city stock market crashed, and at first we did not think much of it; we were poor already, how much poorer could we get?\n\nWe found out later: we could. Cotton was our lifeline, and the price of cotton fell lower year by year, so low that a whole day picking cotton would not buy a full meal. The harder we grew it, the less it was worth; the less it was worth, the less of the landlord\'s debt we could clear.\n\nIn those years some of my children died, of hunger, of sickness. A poor man\'s child could be gone from a single fever, with no doctor we could afford, no medicine we could buy.\n\nI heard from people up from the city that far off in Washington there was a new president, named Roosevelt, who would bring some grand plan to save the country. A small hope kindled in me: maybe, this time, it was the turn of people like us to catch our breath?\n\nRemember that small hope of mine. Because what came next was the very opposite of what I hoped for.',
      },
      deliverGoal: 'N3 setup — 大萧条几年的日子 (1929 崩盘起初没当回事本来就穷) + 棉花命根子棉价年年低到摘一天换不来一顿饱饭 + 越种越不值钱越还不上债 + 孩子饿死病死 (请不起医生买不起药) + 听说华盛顿新总统罗斯福要救国 + 燃起指望「轮到我们喘口气」+ 伏笔「接下来跟指望正好相反」',
      engagementHook: '我听说华盛顿换了新总统，要搞一套大办法救国家——我心里燃起一点指望：也许这回轮到我们喘口气了。一个穷到极点的人，敢不敢去相信「这回会不一样」？',
      expectsRealAnswer: false,
    },
    {
      id: 'ds-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1933 年冬天，地主把你叫到他家门廊上。他手里有封政府的信。他说：政府的新规矩，今年地要少种，少种了政府给我补贴。你们这些佃农，我用不了这么多了。\n\n你一下子懵了。少种地，怎么会是让你走？\n\n你慢慢想明白了那笔账：政府发钱，是奖励地主「少种」。地少种，地主就不需要这么多种地的人。而那笔政府发的补贴，按规矩，是寄给地主的——因为地是他的，签字的是他。\n\n你种了三代的地，你欠他的债，你的全部指望，在这一刻，全压在他一句话上。\n\n你能怎么办？你想争：那政府的钱里，有没有我们一份？可你不识字，看不懂那封信；你是佃农，没有任何合同保护你；你是黑人，在 1933 年的密西西比，你去找谁说理？\n\n你站在那个门廊上。你怎么办？',
        en: 'Now you are me.\n\nWinter 1933, the landlord calls you up onto his porch. He has a government letter in his hand. He says: the government\'s new rule, this year we plant less, and for planting less the government pays me a subsidy. You sharecroppers, I do not need this many of you.\n\nYou are stunned. Planting less, how does that turn into sending you away?\n\nSlowly you work out the arithmetic: the government pays money to reward the landlord for "planting less." Less land farmed, and the landlord needs fewer people to farm it. And that subsidy the government pays, by the rule, is mailed to the landlord, because the land is his and the signature is his.\n\nThe land you have farmed for three generations, the debt you owe him, your every hope, in this moment all rest on one sentence from him.\n\nWhat can you do? You want to argue: in that government money, is there not a share for us? But you cannot read, you cannot make out the letter; you are a sharecropper, no contract protects you; you are Black, and in the Mississippi of 1933, whom would you go to for justice?\n\nYou stand on that porch. What do you do?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1933 冬地主门廊拿政府信 (新规矩少种政府给补贴/用不了这么多佃农) + 懵了少种怎么是让走 + 想明白账 (政府奖励地主少种→不需这么多人/补贴寄地主因地+签字是他) + 三代地+债+全部指望压在他一句话 + 想争却不识字看不懂信/佃农没合同保护/黑人 1933 密西西比找谁说理 + 你站门廊怎么办',
      engagementHook: '政府发钱奖励地主「少种地」，少种地就不需要这么多人——这笔本该救农民的钱，把你这种佃农变成了多余的人。当一条「救人」的规矩，制定时根本没把你算进去，你还能向谁讨个公道？',
      expectsRealAnswer: false,
    },
    {
      id: 'ds-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我试过争。\n\n我去问地主：政府那笔钱，发的时候说了，地主得分一部分给佃农。我能不能拿到我那份？\n\n他笑了。他说：规矩是这么写的，可钱寄到我手里，分多少、分不分，谁管得着我？你要是再啰嗦，今晚就走。\n\n我后来才知道，我不是一个人。那几年，南方有些佃农联合起来，组了个跨黑白的佃农工会，去争政府本该分给他们的那份钱、争一个说理的地方。地主们的回应是：威胁、毒打、半夜把人赶走，甚至开枪。\n\n你看明白了吗？法律纸面上写着「地主要分一部分给佃农」。可纸面是一回事，真实发生的是另一回事。规矩落到我们头上，就变了样——因为执行它的人，正是从中得利的地主。\n\n一条好规矩，交到错的人手里执行，能变成一把更趁手的刀。',
        en: 'I tried to argue.\n\nI went to the landlord: when that government money was handed out, the rule said the landlord must share part of it with the sharecroppers. Can I have my share?\n\nHe laughed. He said: that is how the rule is written, but the money comes to my hand, and how much I share, or whether I share at all, who is going to make me? Make any more noise and you leave tonight.\n\nI learned later I was not alone. In those years some sharecroppers in the South banded together and formed a union across Black and white, to fight for the share of government money that was supposed to be theirs, and for a place to be heard. The landlords answered with threats, beatings, driving people out in the night, even gunfire.\n\nDo you see it? On paper the law said "the landlord must share part with the sharecroppers." But paper is one thing and what actually happens is another. The rule, landing on us, changed shape, because the man enforcing it was the very landlord who profited from it.\n\nA good rule, handed to the wrong man to enforce, can become a knife that fits his grip better.',
      },
      deliverGoal: 'N5 story — 佃农试争 (政府规定地主得分一部分给佃农) + 地主笑 (钱到我手分不分谁管得着/再啰嗦今晚走) + 不是一个人 (跨黑白佃农工会争该分的钱+说理处=Southern Tenant Farmers Union) + 地主回应威胁毒打半夜赶走开枪 + 「纸面写着分一部分但纸面 vs 真实/规矩落头上变样因执行者正是得利地主」+ 「好规矩交错的人变成更趁手的刀」',
      engagementHook: '法律白纸黑字写着「地主要分一部分给佃农」——可执行这条规矩的，正是从中得利的地主。一条好规矩，交到错的人手里，会变成什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'ds-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我没能争到。那年冬天，我们一家收拾了能带走的东西，离开了耕了三代的地。\n\n现在我要你看清楚那笔「政府的钱」，到底走了一条什么路。\n\n它从华盛顿出发的时候，名字叫「救农民」。城里的好人真心相信，这是政府在救人。\n\n它到了地主手里，变成「减产补贴」——奖励他少种地，让棉价回升。\n\n它落到我头上，变成「滚蛋」两个字——地主少种了地，就不再需要我。\n\n同一笔钱，从华盛顿到地主到我，走了三步，换了三张脸：第一张脸是恩典，第二张脸是利润，第三张脸是把我赶上路的那只脚。\n\n（写新政的那个总统，是不是存心要赶我走？换到他那一遍你会看见：他可能根本没想到我这种人。可「没想到」，对站在门廊上被赶走的我来说，跟「存心」一样疼。）',
        en: 'I could not win it. That winter my family gathered what we could carry and left the land three generations had farmed.\n\nNow I want you to see clearly what road that "government money" actually traveled.\n\nWhen it set out from Washington, its name was "save the farmers." Good people in the cities truly believed this was the government saving people.\n\nWhen it reached the landlord\'s hand, it became a "production-cut subsidy", rewarding him for planting less, to lift the price of cotton.\n\nWhen it landed on me, it became two words: get out. The landlord planted less, so he no longer needed me.\n\nThe same money, from Washington to landlord to me, took three steps and wore three faces: the first face was grace, the second was profit, the third was the boot that kicked me onto the road.\n\n(The president who wrote the New Deal, did he mean to drive me out? Switch to his pass and you will see: he probably never thought of a man like me at all. But "never thought of," for me, driven off the porch, hurts just as much as "meant to.")',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 没争到那年冬天一家离开耕三代的地 + 看清「政府的钱」走的路 (华盛顿出发叫救农民/到地主手变减产补贴/落我头上变滚蛋) + 同一笔钱三步三张脸 (恩典/利润/赶我走的脚) + 桥到 FDR lens (存心还是没想到/「没想到」跟「存心」一样疼)',
      engagementHook: '同一笔钱，从华盛顿到地主到我，走了三步，换了三张脸：先是恩典，再是利润，最后是把我赶上路的那只脚。一份善意，是怎么在传递的路上，变成一把刀的？',
      expectsRealAnswer: false,
    },
    {
      id: 'ds-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '被赶走，只是新政漏掉我们的第一处。还有第二处，藏在一张「兜住所有人」的网里。\n\n1935 年，政府立了一部大法，叫社会保障法——老了有养老金，丢了工作有救济金。城里的工人欢呼：国家终于要管我们了。\n\n可这张网，故意留了两个洞：它不管农业工人，也不管在别人家做饭带孩子的家政工人。\n\n你猜南方的黑人，干的是哪两种活？正是这两种。\n\n所以这张本该「兜住所有人」的网，从一开始，就把我们这种人，漏在了外面。不是忘了，是为了换南方那些议员的票，特意留的洞。\n\n我被农业补贴从地里挤出来，又被社会保障的网漏在外面。新政这件大好事，两只手，一只把我推下了地，另一只没接住我。\n\n（这两个洞是怎么剪下去的，你换到那个设计社保的女部长那一遍，会听见她自己讲。）',
        en: 'Being driven off was only the first place the New Deal left us out. There was a second, hidden inside a net meant to "catch everyone."\n\nIn 1935 the government passed a great law, the Social Security Act, a pension in old age, relief when you lose your job. City workers cheered: the nation will finally look after us.\n\nBut this net deliberately left two holes: it did not cover farm workers, and it did not cover the domestic workers who cook and mind children in other people\'s homes.\n\nGuess which two kinds of work the Black people of the South did? Those very two.\n\nSo this net meant to "catch everyone" left people like us outside from the start. Not forgotten, but holes left on purpose, to trade for the votes of those Southern congressmen.\n\nI was pushed off the land by the farm subsidy and left outside the net by Social Security. This great good thing, the New Deal, had two hands: one pushed me off the land, and the other did not catch me.\n\n(How those two holes got cut, you will hear from the woman secretary who designed Social Security, in her own words, when you switch to her pass.)',
      },
      deliverGoal: 'N7 story — 被赶走只是第一处漏掉/第二处藏在兜住所有人的网 + 1935 Social Security Act (养老金+失业救济城里工人欢呼) + 故意两个洞不管农业工+家政工 + 南方黑人正干这两种活 + 不是忘了是为换南方议员票特意留的洞 + 「一只手把我推下地另一只没接住我」+ 桥到 Perkins lens',
      engagementHook: '我被农业补贴从地里挤出来，又被社会保障的网漏在外面——一只手把我推下了地，另一只手没接住我。一件「救所有人」的大好事，怎么会同时是两只伤人的手？',
      expectsRealAnswer: false,
    },
    {
      id: 'ds-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '被赶出土地后，我们去了哪？\n\n南方待不下去了——没地种，没活干，社保网又不管我们。我们听说，北方的城市，底特律、芝加哥，工厂在招工，能拿现钱的工。\n\n于是我们走了。背着行李，挤上往北的火车。\n\n我们不是一家。那几年，几百万南方黑人，为了活命，离开世代生活的南方，往北方的工业城市涌。后来人管这叫「大迁徙」（the Great Migration）。\n\n这条路也不好走。北方的工厂肯要我们的力气，可北方的房东、北方的白人邻居，未必肯要我们这个人。我们挤在最破的街区，干最累、最危险、白人不愿干的活。\n\n但我不后悔走。在南方，我是地主账本上一笔还不完的债。到了北方，至少我领的是现钱，至少我的孩子，能进一间黑人也能上的学校。\n\n被推下悬崖的人，有时候是在半空里，自己长出了翅膀。',
        en: 'After being driven off the land, where did we go?\n\nThe South could not hold us, no land to farm, no work to do, and the Social Security net would not cover us. We heard that in the cities of the North, Detroit, Chicago, the factories were hiring, work that paid in cash.\n\nSo we left. Bundles on our backs, crowding onto trains heading north.\n\nWe were not one family. In those years millions of Black Southerners, to stay alive, left the South where their families had lived for generations and poured into the industrial cities of the North. Later people called it the Great Migration.\n\nThat road was not easy either. The Northern factories would take our muscle, but the Northern landlords and white neighbors did not always want us as people. We crowded into the worst districts and did the hardest, most dangerous work the white men would not do.\n\nBut I do not regret leaving. In the South I was a debt in a landlord\'s ledger that could never be cleared. In the North, at least I drew cash, at least my children could enter a school that took Black children too.\n\nA person pushed off a cliff sometimes grows wings in midair.',
      },
      deliverGoal: 'N8 story — 被赶走后去哪 (南方待不下没地没活社保不管) + 听说北方底特律芝加哥工厂招工拿现钱 + 走了挤上往北火车 + 不是一家几百万南方黑人离开往北涌 = Great Migration + 路不好走 (北方厂要力气但房东邻居不要这人/挤破街区干最累最危险活) + 不后悔 (南方是还不完的债/北方至少现钱孩子能上学) + 「被推下悬崖的人有时半空长出翅膀」',
      engagementHook: '被推下悬崖的人，有时候是在半空里，自己长出了翅膀。一件本来要毁掉你的事，会不会反而逼你走出了一条新路？',
      expectsRealAnswer: false,
    },
    {
      id: 'ds-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这一辈子，没等到一个公道。可我的故事，没停在我这儿。\n\n我被赶出的那块地，往前数，是我爷爷做奴隶、内战后获自由、却只能去租地的那条线的延续。自由了七十年，到我这儿，还是别人地里一个随时能被赶走的人。（你跑过重建时期那段历史，会认得这条从奴隶到佃农、一层层被收回去的线。）\n\n往后数，我们这批往北走的人，把南方的苦带进了北方的城。我们的孩子、孙子，在北方的工厂、街区里长大。几十年后，正是这些城里的黑人后代，走上街头，掀起了争取平等权利的大运动。\n\n我没能为自己讨回公道。可我把命搬到了一个，我孩子有可能讨回公道的地方。\n\n一代人还不完的债，有时候，得靠下一代人，用一种全新的方式，去把它讨回来。',
        en: 'In my whole life I never got justice. But my story did not stop with me.\n\nThe land I was driven off, traced back, is the continuation of the line where my grandfather was a slave, freed after the Civil War, yet could only rent land. Seventy years free, and down to me, still a man on another\'s land who could be driven off at any moment. (Run the reconstruction topic and you will recognize this line, from slave to sharecropper, taken back layer by layer.)\n\nTraced forward, those of us who went north carried the South\'s hardship into the Northern cities. Our children and grandchildren grew up in the Northern factories and districts. Decades later, it was these city-born descendants of Black migrants who took to the streets and raised the great movement for equal rights.\n\nI could not win justice for myself. But I moved my life to a place where my children might win it.\n\nA debt one generation cannot clear must sometimes be claimed back by the next, in a wholly new way.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 没等到公道但故事没停 + 往前数: 爷爷奴隶→内战自由→只能租地的线延续/自由七十年到我还是随时被赶走 → reconstruction-1877 跨 Topic 强闭环 (奴隶到佃农一层层被收回) + 往后数: 往北走的人把苦带进北方城/孩子孙子长大几十年后掀起争平等权利大运动 + 「没能为自己讨公道但搬到孩子可能讨回的地方/一代还不完的债下代用全新方式讨回」',
      engagementHook: '我没能为自己讨回公道，可我把命搬到了一个我孩子有可能讨回公道的地方。一代人还不完的债，能不能靠下一代人,用一种全新的方式讨回来？',
      expectsRealAnswer: false,
    },
    {
      id: 'ds-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头从我个人拉远，看新政这件事，到底是怎么回事。\n\n你别误会，我不是说新政全是坏的。它确实救了很多人——城里失业的工人有了活干，老人有了养老金，垮掉的银行立了规矩。对那几千万人来说，新政是真的把他们从崩溃边上拉了回来。\n\n我要你看见的，是另一面：同一套救人的办法，怎么会系统地、一次又一次地，漏掉同一群人？农业补贴漏掉佃农，社保网漏掉农业工和家政工——每一次，被漏掉的，都是我们这种最没声音、在投票上最没分量的人。\n\n这不是某个坏人故意害我们。这更可怕：它是制度自己的盲点。设计的人，在那间屋子里，根本看不见我们。\n\n所以「政府拯救人民」这句话，得反过来问一句：拯救哪些人民？又是踩着哪些人民，去拯救的？',
        en: 'Pull the lens back from me as a person and look at what the New Deal really was.\n\nDo not mistake me, I am not saying the New Deal was all bad. It did save many people, jobless city workers got work, the old got pensions, broken banks were given rules. For those tens of millions, the New Deal truly pulled them back from the edge of collapse.\n\nWhat I want you to see is the other side: how could the same rescue, systematically, again and again, leave out the same group of people? The farm subsidy left out the sharecroppers; the Social Security net left out farm and domestic workers, and each time, those left out were people like us, with the least voice and the least weight in a vote.\n\nThis was not some villain harming us on purpose. It is worse than that: it was the system\'s own blind spot. The people who designed it, in that room, simply could not see us.\n\nSo the line "the government saving the people" must be turned around and asked: saving which people? And on whose backs was that saving done?',
      },
      deliverGoal: 'N10 zoom-out — 别误会新政不全坏 (确实救很多人: 城里工人有活/老人养老金/银行立规矩/把几千万人拉回崩溃边) + 另一面: 同一套救人办法系统地一次次漏掉同一群人 (农业补贴漏佃农/社保漏农业家政工/每次都是最没声音投票最没分量的人) + 不是坏人故意更可怕是制度盲点 (设计的人在屋里看不见我们) + 「政府拯救人民得反问: 救哪些人民/踩着哪些人民去救」',
      engagementHook: '不是某个坏人故意害我们。这更可怕——它是制度自己的盲点：设计的人在那间屋子里，根本看不见我们。「看不见」造成的伤害，会不会比「故意」更难纠正？',
      expectsRealAnswer: false,
    },
    {
      id: 'ds-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看那场新政，两种说法都站得住。\n\n一种说法：它对我们就是一场背叛。它打着「救农民」的旗号，把救命的钱寄给地主，再用那笔钱把我们赶出土地；它说要织一张兜住所有人的网，却特意留两个洞，把我们这种人漏在外面。对我们这些最底层的黑人佃农来说，新政不是救星，是又一只把我们往下踩的脚。\n\n另一种说法：新政是一场不完整的、却真实的进步。它第一次让政府承认「人民受苦，国家有责任管」——这个原则本身，是了不起的一步。它当时没把我们算进去，可这个原则一旦立下，后人就能拿它来问：凭什么把我们漏掉？我孙子那一代争平等权利，靠的正是这个原则。\n\n这不是「新政好」对「新政坏」。是同一场新政，对不同的人，是完全不同的两件事。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at that New Deal. Both views stand.\n\nOne view: to us it was a betrayal. Under the banner of "saving the farmers," it mailed the lifesaving money to the landlords, who used that very money to drive us off the land; it said it would weave a net to catch everyone, then left two holes on purpose, leaving people like us outside. For us, the Black sharecroppers at the very bottom, the New Deal was no savior; it was one more boot stamping us down.\n\nThe other view: the New Deal was an incomplete, but real, step forward. For the first time it made the government admit that "when the people suffer, the nation has a duty to act", and that principle itself was a remarkable step. It did not count us in at the time, but once the principle was set, those who came after could use it to ask: by what right were we left out? My grandchildren\'s generation, fighting for equal rights, leaned on exactly this principle.\n\nThis is not "the New Deal good" against "the New Deal bad." It is the same New Deal being two completely different things to different people.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (对我们是背叛/打救农民旗号钱寄地主再赶我们/说兜住所有人却特意留洞漏我们/不是救星是又一只往下踩的脚) / 另一种说法 (不完整却真实的进步/第一次让政府承认人民受苦国家有责任/原则一立后人能拿来问凭什么漏掉/孙子争平等权利靠这原则) / 同一场新政对不同人是两件事 / 想 30 秒',
      engagementHook: '一种说法：新政对我们就是一场背叛。另一种说法：它是一场不完整、却真实的进步。同一场新政，对不同的人，是完全不同的两件事。两边都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'ds-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个三代租地的人，一笔还不完的债，一封把我赶走的政府信，一趟往北的火车——你会怎么评价这样一段「政府拯救人民」的历史？\n\n一场救了几千万人的大好事，同时又系统地漏掉、踩低了我这种最没声音的人。你会说它是背叛，还是说它是一步不完整的进步？这两件事，能放在同一个天平上称吗？你怎么称？\n\n不过先记住：你这一遍，听的只是一个被新政漏掉的佃农的一句话。那个推行新政、救了几千万人的总统罗斯福、那个夹在中间替劳工争权益的部长珀金斯，各有各的说法——换个视角再走一遍，你会听见他们怎么讲这同一段历史，也会看看你刚才的判断站不站得住。\n\n再想一步。今天你身边，有没有哪件「为了大家好」的事——一项政策、一条班规、一个安排——办的时候，根本没人想到那些最没声音、最容易被忽略的人？\n\n那时候，你会跟着大家说「这是好事啊」，还是会停一下，多问一句：这件好事，是不是又一次，正好踩在了那些没人替他们说话的人身上？',
        en: 'Having walked my whole life, a man who rented land for three generations, a debt never cleared, a government letter that drove me out, a train heading north, how would you judge a history like this of "the government saving the people"?\n\nA great good thing that saved tens of millions, and at the same time systematically left out and pressed down a man like me, with the least voice. Would you call it a betrayal, or an incomplete step forward? Can those two be weighed on the same scale? How do you weigh them?\n\nBut first, remember: this pass, you heard only one sharecropper the New Deal left out. Roosevelt, the president who ran the New Deal and saved tens of millions, and Perkins, the labor secretary fighting for workers in the middle, each have their own case. Run it again through another lens and you will hear how they tell this same history, and see whether the judgment you just made still holds.\n\nThen take one more step. In your own life today, is there some "for everyone\'s good" thing, a policy, a class rule, an arrangement, made without anyone once thinking of the people with the least voice, the easiest to overlook?\n\nWhen that happens, will you go along and say "but this is a good thing," or will you stop a moment and ask one more question: this good thing, is it once again landing right on the backs of the people no one is speaking for?',
      },
      deliverGoal: 'N12 close — 评价「政府拯救人民」历史 (三代租地/还不完的债/赶走的政府信/往北火车 → 救几千万人同时系统漏掉踩低最没声音的我 → 背叛 vs 不完整的进步同一天平) + transfer「今天你身边为大家好的事办时没人想到最没声音最易被忽略的人」+ 你会跟着说好事还是多问这好事是否又踩在没人替他们说话的人身上',
      engagementHook: '走完我这一生，你会怎么评价这样一段「政府拯救人民」的历史？再想一步：今天你身边那件「为了大家好」的事，会不会又一次，正好踩在了那些没人替他们说话的人身上？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'fdr':                                   fdrLens,
  'frances-perkins':                       francesPerkinsLens,
  'displaced-sharecropper-receiving-end':  displacedSharecropperLens,
};

// per TOPIC_ROADMAP_G6_G12.md B10 + receiving-end 优先 pattern:
// 被新政高光叙事系统性排除一方 + N6「政府的钱」三个方向跨 lens 对位 + N11/N12 双视角 closing
export var defaultLens = 'displaced-sharecropper-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'great-depression-1933',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'long-arc',
  nodesPerLens: 12,
  estimatedMinutesPerLens: { 'fdr': 32, 'frances-perkins': 30, 'displaced-sharecropper-receiving-end': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, 12-node long-arc spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 12 nodes each / cross-lens micro-detail N6:「政府的钱」一笔三个方向 (FDR AAA 支票寄地主=挤走佃农 / Perkins 社保为换南方票漏农业家政工=多数黑人 / 佃农 那笔救命钱落地主口袋把他赶上路)',
    'defaultLens: displaced-sharecropper-receiving-end — 受影响者优先 (被新政高光叙事系统性排除一方 + N1 gold-standard hook + N11/N12 背叛 vs 不完整进步 closing)',
    'expectsRealAnswer: ONLY N11 (synthesis) + N12 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'N11 经济史双视角中立: 凯恩斯 (政府花钱救命) vs Hayek (政府干预延长萧条) — 不预设大政府=好 (FDR lens); 佃农/Perkins lens N11 用 背叛 vs 不完整进步 / 救场 vs 共谋',
    'anti-fab: 佃农是 composite (N1 显式「没留名/那几年千千万万人真实经历」+ N2 括号短句「年份人名合成/确证: 自由了还不完债是多数黑人真实命」); 学者引注 (Keynes/Hayek/Owen) 移入 sourcingNote',
    'cross-Topic 锚: FDR→hamilton-jefferson-1790s (联邦vs州权顶点) + gilded-age-1890 (镀金时代不平等回应); Perkins→womens-suffrage-1920 (女性进权力核心) + Owen 社会安全网源头 (sourcingNote); 佃农→reconstruction-1877 freedman-sharecropper-receiving-end (sharecropping 延续+种族盲点 强闭环) + Great Migration',
    'cultural ban 自检: 大萧条/新政/AAA/社会保障/凯恩斯主义/Hayek/财政政策 用真实术语; 无 玉玺/翰林/宰相/朕/圣旨/太子',
    '日期/年代自检: FDR 1882-1945 / Frances Perkins 1880-1965 / 崩盘 1929 / 新政 1933 / 社保法 1935 / EO 9066 1942 / Triangle 火 1911 / 内战 1865; 三代佃农 composite (爷爷 1865 自由→佃农→Great Migration)',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
