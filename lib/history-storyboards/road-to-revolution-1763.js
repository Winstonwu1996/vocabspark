// ─────────────────────────────────────────────────────────────────
// 通往独立之路 1763 — The Road to Revolution · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (AUTHORING_PIPELINE 第7条): 全程美国/英国/原住民真实术语
//   (French & Indian War / Proclamation of 1763 / Stamp Act / Townshend Acts /
//    Sons of Liberty / Boston Massacre / Boston Tea Party / Intolerable Acts /
//    Pontiac / Ohio Country / no taxation without representation),
//   绝不用中国特定词 (§8 中国桥 N9 例外)。
// 3 lens / 11 nodes each / Rule 0 中性 / expectsRealAnswer 仅 N10+N11。
// 跨 lens micro-detail: 「那张谁也不想付的账单」(the bill) —
//   Grenville 看成必须平掉的会计工作 / John Adams 看成不能用践踏法治去抵的账 /
//   原住民青年看成一笔从头到尾没人问过他的、用他土地结的账。三视角各触一次,不互相点破。
// §8 中国桥注入: mediator N9 (synthesis 前置 zoom-out) + receiving-end N9 (zoom-out)。
// 范围: 严格止于 1774 第一次大陆会议; Lexington 第一枪/独立宣言/八年战争只交棒不展开
//   (见 sibling Topic american-revolution-1776)。
// ─────────────────────────────────────────────────────────────────

export var grenvilleLens = {
  id: 'grenville-actor',
  name: 'George Grenville',
  nameCn: '乔治·格伦维尔',
  role: 'perpetrator-actor',
  perspectiveTag: 'london-treasury',
  icon: '🧾',
  description: {
    cn: '1712 到 1770 年，1763 年起的英国首相兼财政大臣。出了名的认真、抠细节、按规矩办事。摆在他桌上的是一个真问题：刚打完的七年战争把英国国债推到约 1.33 亿英镑，新得的北美西部还要养约一万驻军。他真心觉得自己只是在做一件枯燥但正当的会计工作，让账平掉。这一遍让你坐进一个手里拿着合理账单、却完全误读了三千英里外殖民者情绪的官僚，看一个帝国怎样在「我只是想把账平掉」里，一步步把自己的臣民推远。',
    en: 'George Grenville, 1712-1770, Britain\'s Prime Minister and chief finance minister from 1763. He was famously careful, detail-driven, and by-the-book. On his desk sat a real problem: the just-ended Seven Years\' War had pushed the national debt to about 133 million pounds, and the new western lands needed about 10,000 troops. He sincerely felt he was only doing a dull but proper piece of accounting, balancing the books. This pass puts you inside a bureaucrat holding a reasonable bill who completely misread the feelings of colonists three thousand miles away, and lets you watch an empire push its own subjects away, step by step, out of "I just wanted to balance the books."',
  },
  storyboard: [
    {
      id: 'rev-grenville-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1763 年，伦敦。我刚接任首相兼财政大臣。\n\n你大概以为，一场革命的起点，是某个坏人拍桌子要欺负人。不是的。它的起点，是我桌上这本账。\n\n我叫 George Grenville（乔治·格伦维尔）。认识我的人都知道，我这个人最大的特点就是认真、抠细节、按规矩办事——枯燥得很，没什么传奇色彩。\n\n我桌上摆着的，是英国刚打完一场大仗后的国债。一个吓人的数字，大得我每次翻开账本都要停一停。我的工作很简单，也很要命：想办法，让这笔账平掉。\n\n你要知道，在我之前，没人真想碰这个烫手山芋。打仗的人风光，付账的人挨骂。可总得有人来算这笔账，而那个人，现在是我。\n\n这一遍，你坐进我这个位置。你手里会拿着一本逻辑上挑不出错的账单。你会做出一连串「合理」的决定，每一步都有充分的理由。然后你会眼睁睁看着，这些「合理」的决定，一步一步，把大西洋对岸那些本来效忠英王、还在为打赢仗放烟花的臣民，推到了起兵的边缘。',
        en: '1763, London. I have just become Prime Minister and chief finance minister.\n\nYou probably think a revolution begins when some villain pounds the table and decides to bully people. It does not. It begins with this ledger on my desk.\n\nMy name is George Grenville. Everyone who knows me knows my chief trait: I am careful, I obsess over detail, I go by the book. Dull, with nothing of the legend about me.\n\nOn my desk sits Britain\'s national debt after a great war just ended. A frightening number. My job is simple: find a way to balance this account.\n\nThis pass puts you in my seat. You will hold a bill with no flaw in its logic. You will make a chain of "reasonable" decisions. And then you will watch, helpless, as those "reasonable" decisions push the subjects across the Atlantic, men who once swore loyalty to the King, step by step, to the brink of armed revolt.',
      },
      deliverGoal: 'N1 hook — 1763 伦敦/刚任首相兼财政大臣 + 自我介绍 (认真抠细节按规矩/枯燥无传奇) + 革命起点不是坏人拍桌是我桌上这本账 + 这一遍视角 (手握逻辑挑不出错的账单/做一连串合理决定/眼看把效忠英王的臣民推到起兵边缘)',
      engagementHook: '一场革命的起点，不是坏人拍桌子，是我桌上一本平不了的账。你愿意从一个「只想把账平掉」的官僚内部，看他怎么亲手点燃一场革命吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-grenville-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先看清我接手的是一个什么样的烂摊子。\n\n你得先知道一件事：1763 年之前，伦敦对北美管得很松，几十年来基本是「salutary neglect（有益的忽视）」——殖民地自己收自己的税、管自己的事，习惯了高度自治。我接下来要做的，恰恰打破了这套几十年的默契，这一点，记住，后面要用。\n\n1754 到 1763 年，英国和法国为了北美打了一场大仗。殖民者管它叫 French & Indian War（法印战争），因为对手是法国人，还有站在法国一边的原住民。1763 年 2 月 10 日，巴黎和约签订，我们赢了，法国基本退出了北美大陆。\n\n听上去是好消息。可你翻开账本，会倒吸一口凉气。\n\n这场仗把英国国债从约 7500 万英镑，推到了约 1.33 亿英镑——几乎翻了一倍。光是每年付利息，就要吃掉国家预算的一大半。\n\n更糟的是，新得的那片辽阔西部还得有人守。我们得在北美常年驻扎约一万名士兵，一年又要花约 20 万英镑——这是一笔年年都得续上的开销，没有尽头。\n\n你坐在我的椅子上，盯着这两个数字：一座还不完的债山，加一笔停不下来的军费。胜利的账单，比战败还沉。我连庆功的烟花都没看，就得开始想：这些钱，到底从哪儿来？',
        en: 'First, see clearly what kind of mess I inherited.\n\nYou must know one thing first: before 1763, London ruled North America loosely. For decades it was, in effect, "salutary neglect" — the colonies set and collected their own taxes, ran their own affairs, grown used to wide self-rule. What I was about to do broke that decades-old understanding, and remember this, it matters later.\n\nFrom 1754 to 1763, Britain and France fought a great war over North America. The colonists called it the French & Indian War, because the enemies were the French and the Native nations on France\'s side. On February 10, 1763, the Treaty of Paris was signed. We won, and France left the North American mainland.\n\nThat sounds like good news. But open the ledger and you draw a cold breath.\n\nThe war pushed Britain\'s national debt from about 75 million pounds to about 133 million pounds, nearly doubled. The interest alone, year after year, ate more than half the national budget.\n\nWorse, the vast new western lands still needed defending. We had to keep about 10,000 soldiers in North America year-round, costing roughly 200,000 pounds a year, an expense renewed every year, without end.\n\nYou sit in my chair, staring at these two numbers: a mountain of debt that cannot be repaid, plus a military cost that cannot be stopped. The victory bill was heavier than defeat. I had not even watched the fireworks before I had to start thinking: where, exactly, was this money to come from?',
      },
      deliverGoal: 'N2 setup (P1: 加 salutary neglect 有益的忽视 — 1763 前伦敦管得松几十年高度自治/我接下来打破这套几十年默契后面要用; 立 C-and-C 从放手到伸手主线) — 1754-63 French & Indian War (对手法国+站法国一边原住民) + 1763.2.10 巴黎和约英国赢法国退出北美 + 账本: 国债约 7500 万→1.33 亿几乎翻倍/利息吃掉预算一大半 (EN 同步保留利息吃预算对照) + 新得西部要养约一万驻军/年约 20 万英镑 + 「胜利的账单比战败还沉」',
      engagementHook: '我们打赢了，可账本上国债几乎翻了一倍——胜利的账单，比战败还沉。一笔「赢来的债」，该让谁来还？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-grenville-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '钱从哪来？我坐在伦敦的办公室里，把这个问题翻来覆去想了很久。\n\n在我看来，逻辑无懈可击。\n\n第一，这场仗很大程度上，是为了保卫北美殖民者打的——保住他们西边的土地、把法国从他们家门口赶走。\n\n第二，英国本土的纳税人，已经被战争压得喘不过气，再也挤不出钱了。\n\n第三，那么，让这场仗的受益者——北美殖民者——分摊一部分军费，难道不是天经地义吗？\n\n我没打算把整座债山压给他们。我只是要他们出「一部分」，出他们该出的那份。这在我看来，跟一群人合伙吃了顿饭、最后按人头分账单一样，公平、清楚、不容争辩。本土的英国人税已经重得叫苦连天，而殖民地人均交的税，比我们这边轻得多——你说，让受益的一方补上一点，过分吗？\n\n于是我开始动手立税。我把每一道税都算得清清楚楚、合理合法，自认为挑不出毛病。我真心觉得，我只是在做一件枯燥但正当的会计工作。我完全没想到，我手里这本「逻辑挑不出错」的账，正要点燃什么。',
        en: 'Where would the money come from? I sat in my London office and turned the question over and over for a long time.\n\nTo me the logic was airtight.\n\nFirst, this war had largely been fought to protect the North American colonists, to hold the land to their west and drive France from their doorstep.\n\nSecond, the taxpayers of Britain itself were already crushed by the war, with nothing left to squeeze.\n\nThird, then surely it was only natural to ask the people who benefited from the war, the colonists, to share part of the military cost?\n\nI did not mean to dump the whole mountain of debt on them. I only wanted them to pay "a part," the share that was theirs. To me this was like a group who shared a meal splitting the bill by head: fair, clear, beyond argument. The English at home were already taxed so heavily they cried out under it, while the colonists, per head, paid far lighter taxes than we did. So tell me, was it too much to ask the side that benefited to make up a little?\n\nSo I set about writing taxes. I sincerely felt I was only doing a dull but proper piece of accounting. I had no idea at all what this "flawless" ledger in my hand was about to set alight.',
      },
      deliverGoal: 'N3 setup — 钱从哪来三段逻辑 (仗为保卫殖民者打/本土纳税人压不出钱了/让受益者分摊军费天经地义) + 不是压整座债山只要一部分/像合伙吃饭按人头分账单 + 开始动手立税/真心觉得只是枯燥正当的会计工作/没想到这本账要点燃什么',
      engagementHook: '一群人合伙吃了顿饭，按人头分账单——这有什么不对吗？我觉得无懈可击。可一个「逻辑挑不出错」的决定，真的就一定明智吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-grenville-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1764 年，你推出第一道税，叫 Sugar Act（糖税）。它加严了对殖民地进口糖蜜的征税和缉私。这是英国第一次明明白白「为了向殖民地要钱」而立的税。\n\n你以为这只是个小动作。账面上它收不了多少钱。\n\n可大西洋对岸传回来的反应，让你皱起了眉。殖民地的商人开始抱怨，报纸开始登文章。你有点不解：不就是收点税吗，至于吗？\n\n你坐在伦敦，隔着三千英里、隔着几个星期才到一次的船信，看不见那些码头、酒馆、印刷铺里正在压低声音嘀咕的人。在你的算术里，糖税只是账本上一个小小的正数，连让国债动一动都不够。\n\n你不知道的是，在他们那边，这个小小的正数，被读成了一个完全不同的东西——一个信号：伦敦伸手了，伸进了我们自己管了几十年的口袋。今天是糖，明天会是什么？这只是开始。\n\n你解决的是一个数字问题。可你正在不知不觉地，制造一个情绪问题。而数字会平，情绪不会。',
        en: 'Now you are me.\n\nIn 1764 you introduce your first tax, the Sugar Act. It tightens the duties and anti-smuggling rules on molasses imported into the colonies. This is the first time Britain has plainly written a tax "to raise money from the colonies."\n\nYou think this is only a small move. On paper it raises little.\n\nBut the reaction from across the Atlantic makes you frown. Colonial merchants begin to complain; newspapers begin to print articles. You are a little puzzled: it is only a bit of tax, is all this necessary?\n\nYou sit in London and cannot see the people muttering three thousand miles away, in the docks, the taverns, the print shops. In your arithmetic, the Sugar Act is only a small positive number in the ledger.\n\nWhat you do not know is that on their side, that small positive number is read as a signal: London has reached in. This is only the start.\n\nYou are solving a problem of numbers. But you are, without knowing it, manufacturing a problem of feelings.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1764 Sugar Act 糖税 (加严进口糖蜜征税缉私/英国首次明确为向殖民地要钱立税) + 你以为小动作收不了多少 + 对岸反应皱眉 (商人抱怨/报纸登文) 你不解「不就收点税吗」+ 你看不见码头酒馆印刷铺嘀咕的人 + 在你账上是小正数在他们那边被读成信号「伦敦伸手了」+ 你解决数字问题却在制造情绪问题',
      engagementHook: '在我账本上，糖税只是一个小小的正数。在他们那边，它被读成「伦敦伸手了」的信号。同一件事，为什么我和他们读出的意思差这么远？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-grenville-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '糖税收得不顺，账还没平。1765 年，你决定再加一道更狠的——Stamp Act（印花税）。\n\n这一道，比糖税聪明（你当时是这么想的）。它打在纸上：报纸、契约、文件、扑克牌……几乎每一张印刷品，都得贴一张官方印花才算合法。它铺得很广，能稳稳收上一笔钱。\n\n你坐在伦敦，对这道税相当满意。可你犯了一个你这辈子都没看清的错。\n\n你偏偏把税，打在了殖民地最会写字、最会串联、最有声音的那群人头上——律师、商人、报人、印刷工。在那个识字率和报纸普及率都极高的社会里，你等于一巴掌拍醒了所有能把怒火写成文章、印成传单、传遍十三个殖民地的人。\n\n同一年，你还通过了 Quartering Act（驻军法），要殖民地出钱出房，养你派去的英军。在你看来，士兵是来保护他们的，他们出点钱出点房，理所应当。在他们看来，这是把军队硬塞进自家门口，还要自己掏钱养。\n\n你以为你在收税。其实你在给对岸递火柴——而且，偏偏专挑那些最会点火的人递。',
        en: 'The Sugar Act did not collect smoothly, and the account was still not balanced. In 1765 you decide to add a harsher one, the Stamp Act.\n\nThis one is cleverer than the Sugar Act (or so you think at the time). It falls on paper: newspapers, contracts, documents, playing cards. Nearly every printed item must carry an official stamp to be legal. It spreads wide, and will surely bring in money.\n\nYou sit in London quite pleased with this tax. But you make a mistake you will never see clearly in your life.\n\nOf all people, you put the tax on the colony\'s best writers, its best organizers, its loudest voices: the lawyers, the merchants, the printers, the writers. In a society of unusually high literacy and many newspapers, you have, with one slap, woken everyone who can turn anger into articles, into pamphlets, into something that spreads across all thirteen colonies.\n\nThe same year you also pass the Quartering Act, making the colonies pay and provide housing for the British troops you send.\n\nYou think you are collecting taxes. In truth you are handing matches across the ocean, and handing them, of all people, to the ones who know how to light fires.',
      },
      deliverGoal: 'N5 story — 1765 Stamp Act 印花税 (比糖税聪明/打在纸上报纸契约文件扑克牌几乎每张印刷品贴官方印花/铺广能稳收) + 致命错: 偏打在最会写最会串联最有声音的人 (律师商人报人印刷工) + 高识字率高报纸社会一巴掌拍醒能把怒火印成传单传遍十三殖民地的人 + 同年 Quartering Act 驻军法 (殖民地出钱出房养英军) + 你以为收税其实递火柴专挑会点火的人',
      engagementHook: '我把税打在了殖民地最会写字、最会串联的人头上——律师、报人、印刷工。我以为我在收税，其实我在给会点火的人递火柴。一个决定最危险的地方，是不是常常是它「得罪了谁」？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-grenville-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '火，比你想的烧得快。\n\n1765 年 8 月 14 日，波士顿。一群自称 Sons of Liberty（自由之子）的人，在一棵大树上吊起了一个税吏的草人示众。这不是抗议信，是街头的羞辱和威胁。负责发印花的官员吓得辞了职。\n\n更让伦敦意外的是 10 月：九个殖民地的代表，第一次聚到纽约，开了一个 Stamp Act Congress（印花税大会）。这是它们头一回放下彼此的成见，联合起来对你说「不」。\n\n他们喊出的那句话，你在伦敦怎么也想不通：「no taxation without representation」——无代表，不纳税。\n\n你心想：荒唐。议会代表的是全帝国每一个臣民，包括他们，这叫 virtual representation（虚拟代表）。\n\n可他们说：议会里没有一个我们自己选出来的人，那就不算代表。他们要的是 actual representation（实际代表）。\n\n你这才头一回隐约感到：你和他们，根本不是在算同一笔账。你以为这是钱的问题。他们说，这是「谁有权动我口袋」的问题。',
        en: 'The fire burned faster than you thought.\n\nAugust 14, 1765, Boston. A group calling themselves the Sons of Liberty hung an effigy of a tax man from a great tree, for all to see. This was no letter of protest. It was a public humiliation and a threat in the street. The official in charge of distributing stamps resigned in fear.\n\nWhat surprised London more came in October: delegates from nine colonies gathered for the first time in New York and held a Stamp Act Congress. For the first time they set aside their grudges against each other and united to say "no" to you.\n\nThe sentence they cried out, you cannot for the life of you understand in London: "no taxation without representation."\n\nYou think: absurd. Parliament represents every subject of the whole empire, including them; this is called virtual representation.\n\nBut they say: if there is not a single man in Parliament whom we ourselves elected, then it is no representation at all. What they want is actual representation.\n\nFor the first time you faintly feel it: you and they are not even working the same account. You think this is about money. They say this is about who has the right to reach into my pocket.',
      },
      deliverGoal: 'N6 story — 1765.8.14 波士顿 Sons of Liberty 自由之子吊税吏草人示众 (街头羞辱威胁/发印花官员吓得辞职) + 1765.10 九殖民地代表首聚纽约开 Stamp Act Congress 印花税大会 (头一回放下成见联合说不) + 喊「no taxation without representation 无代表不纳税」+ Grenville 想不通: 议会代表全帝国=virtual representation 虚拟代表 vs 殖民者要 actual representation 实际代表 + 头回隐约感到不是算同一笔账 (你以为钱的问题他们说谁有权动我口袋)',
      engagementHook: '我以为这是钱的问题。他们却说，这是「谁有权动我口袋」的问题。当两个人吵架，其实在算完全不同的两笔账时，还吵得明白吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-grenville-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '殖民地开始抵制英货——不买你的布、你的茶、你的瓷器。这一招比喊口号狠多了，因为它直接打在英国本土商人的账本上。本土商人也急了，反过来逼议会让步。\n\n1766 年，英国撤销了印花税。表面看，殖民者赢了，伦敦认输了。\n\n这时我已经下了台，从旁看着。可你注意接手的人同一天做的另一件事。他们撤掉那道惹祸的税，却紧接着通过一道 Declaratory Act（宣告法），白纸黑字写明：英国议会对北美殖民地，「在一切情况下」（in all cases whatsoever），都有立法之权。钱，他们暂时不要了；可「权」，一寸都不让。别忘了，连撤这道税，我本人当时都是反对的。\n\n你看懂这一手了吗？一手撤掉那道惹祸的税，另一手却把「我有权」这三个字，牢牢钉死在了法律里。\n\n这就是火没被灭、只被压住的那一刻。他们以为体面地化解了一场危机，其实只是把同一个问题，原封不动地，推给了下一个接手的人。',
        en: 'The colonies began to boycott British goods: no buying your cloth, your tea, your china. This was far harsher than shouting slogans, because it struck directly at the ledgers of merchants in Britain itself. Those merchants grew anxious too, and in turn pressed Parliament to give way.\n\nIn 1766, Britain repealed the Stamp Act. On the surface, the colonists had won, and London had backed down.\n\nBy then I was already out of office, watching from the side. But notice the other thing the men who took over did the very same day. They removed the tax that caused the trouble, yet right after, they passed a Declaratory Act, stating in black and white that the British Parliament had the power to legislate for the American colonies "in all cases whatsoever." The money, they let go of for now; but the right, they would not yield an inch. And do not forget: I myself opposed even the repeal at the time.\n\nDo you see the move? With one hand the tax that caused the trouble was removed; with the other the words "I have the right" were nailed firmly into law.\n\nThis was the moment the fire was not put out, only pressed down. They thought they had resolved a crisis with dignity. In truth they had only handed the same problem, untouched, to whoever took over next.',
      },
      deliverGoal: 'N7 story (P0 修正: Grenville 1765.7 已下台/1766 撤税与宣告法都是接手的 Rockingham 内阁所为/他本人反对撤税 — 改在职第一人称为「我已下台从旁看着」+「接手的人」they+「连撤这道税我本人都是反对的」) — 殖民地抵制英货 (不买布茶瓷器/直接打英国本土商人账本/本土商人逼议会让步) + 1766 撤销印花税 (表面殖民者赢伦敦认输) + 同一天接手的人另一手 Declaratory Act 宣告法 (议会对殖民地「在一切情况下 in all cases whatsoever」有立法权/钱暂不要权一寸不让) + 一手撤税一手把「我有权」钉进法律 + 火没被灭只被压住/他们以为体面化解其实把问题原封推给下一个人',
      engagementHook: '我下台后，接手的人一手撤掉了惹祸的税，另一手却把「我有权」钉死在法律里——连撤税我本人都反对。撤了税却不肯认输的「赢」，到底算不算和解？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-grenville-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，不再只替自己说话，给你看完这台机器后来怎么转下去——哪怕那时我已经不当家了。\n\n顺带一提我任内一件你该记住的事：早在 1763 年 10 月，为了安抚刚起兵的 Pontiac、省下西部那笔没完没了的战争开销，英王沿阿巴拉契亚山划了一道 Proclamation Line of 1763（1763 宣言线），禁止殖民者越线西迁。在我的逻辑里，这跟征税是同一件事——都是为了平账、省钱。\n\n1767 年，新任财政大臣 Townshend 又来了一遍，换个名目，把税打在玻璃、铅、纸、油漆、茶等进口品上（Townshend Acts，汤森法）。殖民地又一次抵制英货。为了镇住越来越不安分的波士顿，英国把军队直接调进了城。士兵和市民日日在街头摩擦。\n\n1770 年 3 月 5 日，一个飘雪的夜里，海关大楼前，人群用雪球、冰块、棍棒逼近哨兵，士兵在混乱和恐惧中开了枪，五名殖民者倒下。这件事被叫作 Boston Massacre（波士顿惨案）。\n\n你看见这条链了吗？征税 → 抗议 → 抵制 → 撤税但宣告「我有权」→ 再征税 → 调军 → 流血。每一步，都是上一步「合理」反应的结果。\n\n我点的第一颗火星，早已不受我控制。它变成了一台一旦转起来就停不下来的机器。',
        en: 'Let me step back and stop speaking only for myself, and show you how this machine kept turning, even after I was no longer in charge.\n\nWhile I am at it, one thing from my own time you should remember: back in October 1763, to calm the just-risen Pontiac and to spare the endless cost of war in the west, the King drew a Proclamation Line of 1763 along the Appalachians, forbidding colonists to cross it and settle westward. In my logic this was the same thing as taxation, all of it to balance the books and save money.\n\nIn 1767 the new finance minister Townshend ran it again under a new name, putting taxes on imported glass, lead, paper, paint, and tea (the Townshend Acts). The colonies boycotted British goods once more. To hold down an ever more restless Boston, Britain marched troops straight into the city. Soldiers and townspeople ground against each other in the streets, day after day.\n\nOn the snowy night of March 5, 1770, outside the customs house, a crowd pressed at a sentry with snowballs, ice, and clubs; the soldiers fired in chaos and fear, and five colonists fell. This came to be called the Boston Massacre.\n\nDo you see the chain? Tax, then protest, then boycott, then repeal-but-declare-"I-have-the-right," then tax again, then troops, then blood. Each step was the result of the "reasonable" reaction to the step before.\n\nThe first spark I struck was long out of my control. It had become a machine that, once turning, could not be stopped.',
      },
      deliverGoal: 'N8 story (zoom-out 机器视角; P1: 补 1763 宣言线进 Grenville lens — 1763.10 Proclamation Line of 1763 为安抚 Pontiac 起义+省下西部战争开销而划/接进 Grenville「一切为平账省钱」逻辑/两头不讨好) — 退一步看机器转下去 (哪怕我已不当家) + 1767 Townshend Acts 汤森法 (换名目打在玻璃铅纸油漆茶) + 殖民地再抵制 + 调军进波士顿镇压/士兵市民日日街头摩擦 + 1770.3.5 飘雪夜海关楼前人群雪球冰块棍棒逼近哨兵/士兵恐惧开枪/5 名殖民者倒下 = Boston Massacre 波士顿惨案 + 升级链 (征税→抗议→抵制→撤税但宣告我有权→再征税→调军→流血/每步是上步合理反应的结果) + 我点的火星变成停不下来的机器',
      engagementHook: '征税、抗议、抵制、再征税、调军、流血——每一步，都是上一步「合理」反应的结果。当一台机器的每个零件都「合理」，整台机器为什么会冲向灾难？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-grenville-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '机器继续转。1770 年伦敦撤掉了汤森法的大部分税，却偏偏留下一项茶税——不为钱，就为宣示「议会有权征税」这个原则。\n\n1773 年 12 月 16 日夜，波士顿。一群人化装成 Mohawk 的模样，登上三条茶船，把 342 箱茶倒进了港口。这就是 Boston Tea Party（波士顿倾茶）。他们倒的不是茶，是我们死守的那个「原则」。\n\n英国震怒了。1774 年通过一连串报复性法令，殖民者叫它 Intolerable Acts（不可容忍法）：关闭波士顿港、改组马萨诸塞自治政府、扩大驻军权。\n\n这一招本想杀鸡儆猴、孤立马萨诸塞。结果呢？它把十三个原本各管各、互相还常吵架的殖民地，第一次逼到了一张桌子前。1774 年 9 月，除佐治亚外，十二个殖民地的代表齐聚费城，开了 First Continental Congress（第一次大陆会议）。\n\n十一年前，这些人还在为「我们是英国人、我们赢了」放烟花。十一年后，他们坐到了一张商量怎么对抗英国的桌子前。\n\n而把他们推到那张桌前的第一推力，是我，一个只想把账平掉的会计。',
        en: 'The machine kept turning. In 1770 London repealed most of the Townshend taxes, but kept one tea tax of all things, not for the money, but to assert the principle that "Parliament has the right to tax."\n\nOn the night of December 16, 1773, in Boston, a group disguised as Mohawks boarded three tea ships and dumped 342 chests of tea into the harbor. This was the Boston Tea Party. What they poured out was not the tea, but the very "principle" we had clung to.\n\nBritain was furious. In 1774 it passed a string of punitive laws the colonists called the Intolerable Acts: closing Boston\'s port, restructuring the Massachusetts government, expanding the housing of troops.\n\nThis move meant to make an example of one and isolate Massachusetts. And the result? It pushed thirteen colonies that had each minded their own business, and often quarreled with each other, to one table for the first time. In September 1774, all but Georgia, twelve colonies sent delegates to Philadelphia for the First Continental Congress.\n\nEleven years before, these people were setting off fireworks for "we are British, we won." Eleven years later, they sat at a table to plan how to resist Britain.\n\nAnd the first push that sent them to that table was me, an accountant who only wanted to balance the books.',
      },
      deliverGoal: 'N9 story — 1770 撤汤森法大部留一项茶税 (不为钱为宣示议会有权征税原则) + 1773.12.16 夜波士顿化装 Mohawk 登三条茶船倒 342 箱茶入港 = Boston Tea Party 波士顿倾茶 (倒的不是茶是原则) + 英国震怒 1774 Intolerable Acts 不可容忍法 (关波士顿港/改组马萨诸塞政府/扩驻军权) + 本想杀鸡儆猴孤立马萨诸塞反把十三殖民地逼到一张桌前 + 1774.9 除佐治亚外十二殖民地聚费城 First Continental Congress 第一次大陆会议 + 反讽 (十一年前放烟花十一年后坐到对抗英国的桌前/第一推力是只想平账的会计)',
      engagementHook: '十一年前他们还在为「我们是英国人、我们赢了」放烟花；十一年后，他们坐到了一张商量怎么对抗英国的桌子前。而第一推力，是我这个只想平账的会计。你信吗——一场革命，可以从一本账开始？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-grenville-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我经手的这段路，该怎么评我？两种说法都站得住，你来称。\n\n一种说法：我没错，至少不该一个人扛。我接手的是一座真实的债山，是一笔真实要付的账。这场仗确实有很大一部分是为保卫殖民者打的，让受益者分摊军费，在当时是任何一个理性的财政官都会做的决定。我按规矩、按逻辑、按公平办事。把整场革命的锅扣在我一个算账的人头上，是不是太苛刻了？\n\n另一种说法：「逻辑上没错」恰恰是我最大的盲区。账是真的，可我只会算钱，不会算人心。我坐在伦敦的办公室里，看不见三千英里外报纸上烧起来的怒火，听不懂「无代表不纳税」在他们耳朵里是宪政红线、不是逃税借口。我想解决一个财政问题，却亲手点燃了一个政治问题——而且至死都没意识到，问题出在我把「有理」当成了「明智」。\n\n这两边，不是「他有错但情有可原」。是同一个我的两面——一个尽职、理性、按规矩办事的好官员，和一个因为太相信自己的账、而看不见对面是活人的盲人。\n\n这是一所学校里 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked the stretch of road that passed through my hands, how should I be judged? Both views stand. You do the weighing.\n\nOne view: I was not wrong, or at least I should not bear it alone. I inherited a real mountain of debt, a real bill that had to be paid. The war truly had been fought in large part to protect the colonists, and asking the beneficiaries to share the cost was a decision any rational finance official of the time would have made. I worked by the rules, by logic, by fairness. To pin the whole revolution on one man doing the accounts, is that not too harsh?\n\nThe other view: "logically correct" was exactly my greatest blind spot. The account was real, but I could only count money, not the human heart. I sat in a London office and could not see the fire spreading through newspapers three thousand miles away, could not hear that "no taxation without representation" was, to their ears, a constitutional red line, not an excuse to dodge taxes. I set out to solve a fiscal problem and lit a political one with my own hands, and to the end never realized the trouble was that I had taken "being right" for "being wise."\n\nThese are not "he was wrong but understandable." They are two faces of the same me: a dutiful, rational, by-the-book good official, and a blind man who trusted his own ledger so much that he could not see that across the ocean were living people.\n\nThis is the hard problem an AP teacher at a school will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (没错至少不该一个人扛/接手真实债山真实要付的账/让受益者分摊任何理性财政官都会做/按规矩逻辑公平/扣一个算账人头上太苛刻) / 另一种说法 (逻辑没错恰是最大盲区/只会算钱不会算人心/看不见报纸怒火听不懂宪政红线/想解决财政问题点燃政治问题/把有理当明智) / 同一个我两面 (尽职理性好官员 + 太信自己账看不见对面是活人的盲人) / neutral school name (AP 老师) / 想 30 秒 / 两边都站得住',
      engagementHook: '一个尽职、理性、按规矩办事的好官员，和一个太相信自己的账、看不见对面是活人的盲人——是同一个我。一个「逻辑上没错」的人，该为他点燃的革命负责吗？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'rev-grenville-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是那个推动征税的人这一边的声音。\n\n请记住：这只是一边。我讲的「账是真的」「我按规矩办事」「让受益者分摊很公平」，听起来甚至很有道理——这正是这个视角最该当心的地方，它能把自己讲得通，通到你几乎忘了对面也有理。\n\n但这一遍里，有些人几乎没怎么出声。那个在波士顿替开枪英军辩护、夹在「自由」和「法治」之间的律师 John Adams，会怎么讲这条路上的「秩序」与「公道」？还有一个人，从头到尾我账本上一个字都没提过——俄亥俄河谷那个看着自己土地被两个帝国先打、再瓜分、再「立法保护」的原住民青年。我和殖民者吵得不可开交的那片西部土地，本来是谁的？他会怎么看我们这场「为权利」的争吵？\n\n最后留一个东西给你。还记得我桌上那本账吗？那张「谁也不想付的账单」？\n\n换一个视角再走一遍，你会发现，同一张账单，落在不同人眼里，是完全不同的东西。到那时你再回头看我这一遍，也许会问出一个我至死都没问过自己的问题。',
        en: 'What you just heard was the voice of one side: the man who drove the taxation.\n\nRemember: it is only one side. My talk of "the account was real," of "I worked by the rules," of "asking the beneficiaries to share was fair," can even sound quite reasonable, and that is exactly what this perspective must be wary of. It can make itself make sense, so much that you almost forget the other side had reason too.\n\nBut in this pass, some people barely spoke at all. John Adams, the lawyer in Boston who defended the British soldiers who fired and was caught between "liberty" and "the rule of law," how would he tell the story of "order" and "justice" on this road? And one person my ledger never named, not once: the young man of the Ohio Country who watched two empires fight over his land, then carve it up, then "legislate to protect" it. That western land the colonists and I quarreled over so fiercely, whose was it to begin with? How would he see this quarrel of ours, fought "for rights"?\n\nAnd one last thing to leave with you. Do you remember the ledger on my desk, that "bill no one wanted to pay"?\n\nWalk this through once more from another perspective, and you will find that the same bill, in different eyes, is an entirely different thing. By then, looking back on my pass, you may ask a question I never once asked myself.',
      },
      deliverGoal: 'N11 close/meta — 你听的是推动征税者一边 (能把自己讲得通到忘了对面也有理最该当心) + 还没听到: John Adams 替英军辩护夹在自由与法治之间 (会怎么讲秩序与公道) + 俄亥俄河谷原住民青年 (账本一字未提/看着土地被两帝国打瓜分立法保护/那片西部本来是谁的/会怎么看为权利的争吵) 会挑战你听的 + 暗示「那张谁也不想付的账单」cross-lens micro-detail 会从另一视角再看见 (同一账单不同眼里完全不同/不直接揭) + 你会问一个我至死没问过自己的问题',
      engagementHook: '这个视角最危险的地方，是它能把自己讲得通，通到你几乎忘了对面也有理。听完我这一边，你最想去问那个替英军辩护的律师、那个土地被瓜分的原住民青年，什么问题？',
      expectsRealAnswer: true,
    },
  ],
};

export var johnAdamsLens = {
  id: 'john-adams-mediator',
  name: 'John Adams',
  nameCn: '约翰·亚当斯',
  role: 'lonely-mediator',
  perspectiveTag: 'between-liberty-and-law',
  icon: '⚖️',
  description: {
    cn: '1735 到 1826 年，波士顿律师。他是「无代表不纳税」最坚定的鼓吹者之一，痛恨印花税和汤森法。可 1770 年波士顿惨案后，全城没有律师敢替开枪的英军士兵辩护，他接了这个案子。他不是亲英派，恰恰相反；他只是更信一条更高的原则：哪怕最不受欢迎的被告，也有权得到公正审判。这一遍让你站在所有人中间最难受的位置，看一个既反苛政、又拒绝把敌人当怪物的人，怎样在两边都只剩愤怒的年代，拼命守住怒火不该越过的那条线。',
    en: 'John Adams, 1735-1826, a Boston lawyer. He was one of the firmest voices for "no taxation without representation," and he hated the Stamp Act and the Townshend Acts. Yet after the Boston Massacre in 1770, when no lawyer in the city dared defend the soldiers who had fired, he took the case. He was no friend of Britain, the opposite; he simply believed in a higher principle: even the most hated defendant deserves a fair trial. This pass puts you in the hardest position of all, in the middle, watching a man who opposed tyranny and yet refused to treat the enemy as monsters strain, in an age when both sides had little left but anger, to hold the line that fury must not cross.',
  },
  storyboard: [
    {
      id: 'rev-adams-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1770 年春，波士顿。五个我的同乡刚刚倒在血泊里，全城都在喊「血债血偿」。而我，正准备站到法庭上，替那几个开枪的英军士兵辩护。\n\n你大概觉得我疯了，或者是个叛徒。我得先告诉你：我恨英国的苛政。「无代表不纳税」，我是喊得最响的那群人之一。印花税、汤森法，我没有一样不痛恨。\n\n我叫 John Adams（约翰·亚当斯），波士顿律师。\n\n可我还是接下了这个全城没人敢接的案子。接案那天，朋友劝我，妻子担心，他们都怕我毁了前途、惹祸上身。我懂他们的怕。可我接，不是因为我同情英军，是因为我信一条比愤怒更高的东西。\n\n这一遍，你站到我这个位置——全场最难受、最孤独的位置。你既反对压迫，又拒绝把敌人当成可以随便处置的怪物。你要在所有人都红了眼、只剩愤怒的时候，一个人去守住一条线：哪怕是敌人，哪怕全城都恨他，也得按法律、按证据，给他一场公道的审判。',
        en: 'Spring 1770, Boston. Five of my townsmen have just fallen in their own blood, and the whole city is crying "blood for blood." And I am about to stand in a courtroom and defend the very British soldiers who fired.\n\nYou probably think I am mad, or a traitor. Let me tell you first: I hate Britain\'s tyranny. "No taxation without representation," I am among those who shout it loudest. The Stamp Act, the Townshend Acts, there is not one of them I do not loathe.\n\nMy name is John Adams, a Boston lawyer.\n\nYet I took the case no one in the city dared take. Not because I pity the soldiers, but because I believe in something higher than anger.\n\nThis pass puts you in my seat, the hardest and loneliest seat in the room. You oppose oppression, yet you refuse to treat the enemy as monsters to be disposed of at will. While everyone\'s eyes have gone red, with nothing left but anger, you must, alone, hold one line: that even an enemy must be given justice.',
      },
      deliverGoal: 'N1 hook — 1770 春波士顿 5 同乡倒在血泊全城喊血债血偿/我准备替开枪英军辩护 + 自我介绍 (恨英国苛政/无代表不纳税喊最响/痛恨印花税汤森法/波士顿律师) + 接全城没人敢接的案不是同情英军是信比愤怒更高的东西 + 这一遍视角 (全场最难受最孤独/既反压迫又拒绝把敌人当怪物/独自守一条线哪怕敌人也得给公道)',
      engagementHook: '我恨英国的苛政，却要替开枪的英军士兵辩护。在所有人都喊「血债血偿」的时候，你敢不敢站到对面，说「就算是敌人也得给他公道」？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-adams-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先让你明白，我为什么会站在「反对英国」这一边。这不是一时冲动，是十年里一笔笔攒出来的。\n\n1763 年，我们这些北美殖民者刚和英军一起，打赢了一场跟法国争夺整个北美的大仗——French & Indian War（法印战争）。那一年我们多骄傲：我们也是大英帝国光荣的一员，我们赢了。教堂敲钟，城里放烟花。\n\n可仗一打完，英国转头就开始向我们加税。1764 年糖税，1765 年印花税。我们流了血、出了民兵、自己也欠了债，凭什么战后反而被加征？\n\n更让我这个律师无法接受的是：这些税是英国议会定的，可议会里没有一个我们选出来的代表。\n\n「无代表，不纳税。」这句话在我嘴里，从来不是「嫌税太重」。印花税不算重。我抗的是一条原则——没有我的同意，谁也无权动我口袋里的钱。这是法律人的命根子。\n\n这条原则不是凭空来的，它有一条很深的思想根。启蒙运动（Enlightenment）里，John Locke（洛克）讲过 social contract（社会契约）和 natural rights（天赋权利）：政府的正当权力来自「被统治者的同意」（consent of the governed），而生命、自由、财产，任何政府都不能随便拿走。我们喊「无代表不纳税」，喊的就是这套思想：动我的财产，得先有我的同意。',
        en: 'First, let me make clear why I stand on the side that "opposes Britain." This was no sudden impulse. It was built up, entry by entry, over ten years.\n\nIn 1763, we North American colonists had just won, alongside the British army, a great war against France for the whole of North America, the French & Indian War. How proud we were that year: we too were glorious members of the British Empire, and we had won. Church bells rang, the towns lit fireworks.\n\nBut the moment the war ended, Britain turned around and began to tax us. The Sugar Act in 1764, the Stamp Act in 1765. We had bled, we had sent militia, we were in debt ourselves, so why were we taxed more after winning?\n\nWhat I, as a lawyer, could least accept was this: these taxes were set by the British Parliament, and there was not a single representative in that Parliament whom we had elected.\n\n"No taxation without representation." In my mouth this was never about "the taxes being too high." The Stamp Act was actually light. What I resisted was a principle: without my consent, no one has the right to reach into my pocket. To a man of law, this is the very root of life.\n\nThis principle was not something we dreamed up from nothing. It has a deep intellectual root. In the Enlightenment, John Locke wrote of the social contract and of natural rights: that the rightful power of any government comes from the consent of the governed, and that life, liberty, and property are things no government may simply take away. When we cried "no taxation without representation," what we were really crying was this idea: if you would touch my property, you must first have my consent. (This is the "Philosophical Foundations" of APUSH 3.4, and you can cite it directly in an LEQ later on.)',
      },
      deliverGoal: 'N2 setup — 为什么站反对英国一边 (十年攒出来不是冲动) + 1763 殖民者与英军打赢 French & Indian War 法印战争最骄傲 (也是大英帝国一员/赢了/敲钟放烟花) + 仗完英国转头加税 1764 糖税 1765 印花税 (我们流血出民兵欠债凭什么反被加征) + 律师无法接受: 税是议会定的议会里没一个我们选的代表 + 「无代表不纳税」不是嫌税重 (印花税不算重) 抗的是原则 (没我同意谁也无权动我口袋/法律人命根子) + P1: 补 APUSH 3.4 哲学根基 — Enlightenment 启蒙运动/John Locke 洛克/social contract 社会契约/natural rights 天赋权利/consent of the governed 被统治者的同意/政府正当权力来自被统治者同意+生命自由财产不可随便拿走/给学生 LEQ 可引用的思想锚点',
      engagementHook: '印花税其实不重。我抗的从来不是钱，是「没有我同意、谁也无权动我口袋」这条原则。为了一条原则去抗争，你觉得是较真，还是抓住了真正要紧的东西？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-adams-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '可就在我和同乡们越来越愤怒的时候，我心里另一根弦，也绷得越来越紧。\n\n让我们火上浇油的，还不止税。早在 1763 年，英王就划了一道 Proclamation Line of 1763（1763 宣言线），沿阿巴拉契亚山禁止我们越界西迁——我们流血打下来的西部，转眼被一纸命令封住。又一桩没问过我们一句、就替我们做的决定。\n\n1767 年，英国又来了一道汤森法，换个名目继续征税。为了镇住我们波士顿，英国干脆把军队调进了城。\n\n你想想那是什么场面：石板街上，到处是穿红衣的英军士兵；他们和市民日日摩擦、推搡。整座城像一桶泼了油的火药，只差一颗火星。\n\n这时候，城里的气氛变得我不喜欢。愤怒是对的，可它正在变成另一种东西——一种「凡是英国的、凡是穿红衣的，就该死」的情绪，一种不问青红皂白、只要泄愤的冲动。\n\n我反对苛政。可作为一个律师，我比谁都明白一件事：法律最大的意义，恰恰是在你最想跳过它的时候，拦住你。它存在，就是为了不让任何人——哪怕是「正义」的一方——凭一时的愤怒，去决定另一个人的生死。\n\n所以我害怕：当一群人坚信自己「绝对正义」时，他们会不会变得和他们反对的暴政一模一样，不再讲道理、不再给对面任何公道，只凭人多、凭气盛，就把人定了罪？\n\n这根弦，很快就要被一个飘雪的夜晚，狠狠拉断。',
        en: 'But just as I and my townsmen grew angrier, another string in my heart was pulled tighter and tighter.\n\nAnd it was not only taxes feeding the fire. Back in 1763, the King had drawn a Proclamation Line of 1763 along the Appalachians, forbidding us to cross westward, the western land we had bled to win, sealed off in a single order. One more decision made for us, without asking us a word.\n\nIn 1767, Britain came with another tax, the Townshend Acts, taxing us again under a new name. To hold down Boston, Britain simply marched troops into the city.\n\nThink what a scene that was: on the cobbled streets, red-coated British soldiers everywhere; they and the townspeople ground against each other day after day, cursing, shoving. The whole city was a barrel of powder with oil poured on it, one spark away.\n\nAround then, the mood in the city began to turn into something I did not like. The anger was right, but the anger was becoming something else, a feeling that "anything British, anyone in a red coat, deserves to die." An urge that asked no questions and only wanted to vent.\n\nI opposed tyranny. But what I feared was this: when a crowd believes itself "absolutely just," might it become like the tyranny it opposes, no longer reasoning, no longer giving the other side any justice at all?\n\nThis string was soon to be snapped, hard, by one snowy night.',
      },
      deliverGoal: 'N3 setup (P1: 补 1763 宣言线进 Adams lens — Proclamation Line of 1763 沿阿巴拉契亚山禁西迁/流血打下的西部被一纸命令封住/又一桩没问过我们就替我们做的决定) — 越愤怒另一根弦绷越紧 + 1767 Townshend Acts 汤森法换名目征税 + 镇压波士顿调军进城 + 场面 (石板街红衣英军/与市民日日摩擦辱骂推搡/整城像泼油火药差一颗火星) + 气氛变成我不喜欢的 (愤怒对的但变成「凡英国凡穿红衣就该死」/不问青红皂白只泄愤) + 我反对苛政但害怕: 一群人觉得自己绝对正义会不会变得和反对的暴政一样不讲道理 + 这根弦要被飘雪夜拉断',
      engagementHook: '愤怒是对的，可它正在变成「凡是穿红衣的就该死」。我怕的是：一群人坚信自己「绝对正义」时，会不会变得和他们反对的暴政一样？你见过这样的时刻吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-adams-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1770 年 3 月 5 日，那个飘雪的夜晚。海关大楼前，一群愤怒的市民围住了哨兵，朝他们扔雪球、冰块、挥棍棒，嘴里骂着、逼着。混乱中，几声枪响。雪地上，五个殖民者倒下了——其中有一个叫 Crispus Attucks，非裔和原住民混血的码头工人。\n\n消息传开，全城炸了。大家给它取了一个名字：Boston Massacre（波士顿惨案）。一夜之间，那几个士兵成了全城最恨的人。\n\n现在，难题落到你头上。\n\n那几个士兵要受审。可全波士顿，没有一个律师敢替他们辩护——替他们说话，就等于跟整座城作对，等于背叛你的同乡、毁掉你的名声，甚至危及你的家人。\n\n你恨英国的苛政，这没变。可你心里那个更高的声音在问：如果连这几个英国士兵，都不能在波士顿得到一场公平的审判，那我们口口声声要捍卫的「自由」和「法治」，还剩下什么？\n\n你接，还是不接？',
        en: 'Now you are me.\n\nMarch 5, 1770, that snowy night. Outside the customs house, a crowd of angry townspeople surrounded the sentries, hurling snowballs, ice, swinging clubs, cursing, pressing in. In the chaos, several shots rang out. On the snow, five colonists fell, among them one named Crispus Attucks, a dockworker of African and Native descent.\n\nThe news spread and the whole city erupted. People gave it a name: the Boston Massacre. Overnight, those soldiers became the most hated men in the city.\n\nNow the hard problem lands on you.\n\nThose soldiers must stand trial. But in all of Boston, not a single lawyer dares defend them, for to speak for them is to set yourself against the whole city, to betray your townsmen, ruin your name, even endanger your family.\n\nYou hate Britain\'s tyranny; that has not changed. But the higher voice in your heart asks: if even these British soldiers cannot get a fair trial in Boston, then what is left of the "liberty" and "rule of law" we keep swearing to defend?\n\nDo you take the case, or not?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1770.3.5 飘雪夜海关楼前愤怒市民围哨兵扔雪球冰块挥棍棒骂逼/混乱几声枪响/5 殖民者倒下含 Crispus Attucks 非裔原住民混血码头工人 + 全城炸了取名 Boston Massacre 波士顿惨案/士兵成全城最恨的人 + 难题: 没律师敢辩护 (等于跟全城作对背叛同乡毁名声危及家人) + 你恨苛政没变但更高声音问: 连英国士兵都不能在波士顿得公平审判那「自由」「法治」还剩什么 + 你接还是不接',
      engagementHook: '替他们辩护，就等于跟整座城作对，毁掉名声，甚至危及家人。可如果连敌人都得不到公平审判，我们要捍卫的「法治」还剩什么？换你，你接这个案子吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-adams-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我接了。\n\n你可能以为接案的那一刻最难。其实更难的是接下来：站到法庭上，当着满城仇恨的眼睛，去把那一夜真正发生的事，一寸一寸还原出来。\n\n我没有替英国辩护，我替「事实」辩护。\n\n我在法庭上一点点讲清楚：那天夜里，不是士兵冷血列队、对着手无寸铁的人开火。是愤怒的人群先逼近、先用雪球、冰块、棍棒攻击哨兵；士兵被围在中间，在混乱和恐惧里开了枪。\n\n这是杀人，是悲剧。但这不是蓄意的谋杀。\n\n你能体会我每说一句话时的处境吗？台下坐着我的同乡，他们想要的是「英军该死」这个结论。而我，要在他们眼皮底下，为他们最恨的人，争一个「按法律、按证据」的公道。\n\n每说一句对士兵有利的话，我都能感到背后的目光在变冷。可我心里那把尺很清楚：我不是在帮敌人，我是在守住一件比这场官司更大的东西——一个连敌人都能得到公平审判的社会，才配谈「自由」。',
        en: 'I took it.\n\nYou might think the hardest moment was taking the case. In fact the harder part came next: to stand in the courtroom, before a whole city of hating eyes, and reconstruct, inch by inch, what truly happened that night.\n\nI did not defend Britain. I defended the facts.\n\nIn court I laid it out, piece by piece: that night, it was not soldiers coldly lined up, firing on unarmed people. It was an angry crowd that pressed in first, that first attacked the sentry with snowballs, ice, and clubs; the soldiers, surrounded, fired in chaos and fear.\n\nThis was a killing, a tragedy. But it was not premeditated murder.\n\nCan you feel my position with every sentence I spoke? In the seats sat my own townsmen, who wanted the conclusion "the soldiers deserve to die." And I, under their very eyes, was arguing for the men they hated most, a justice "by the law, by the evidence."\n\nWith every word in the soldiers\' favor, I could feel the gazes behind me grow colder. But my measure was clear: I was not helping the enemy. I was holding something larger than this trial. Only a society where even an enemy can get a fair trial is fit to speak of "liberty."',
      },
      deliverGoal: 'N5 story — 我接了/更难是站法庭当满城仇恨眼睛一寸寸还原那夜 + 没替英国辩护替「事实」辩护 + 法庭讲清: 不是士兵冷血列队对手无寸铁开火/是愤怒人群先逼近先用雪球冰块棍棒攻击哨兵/士兵被围混乱恐惧开枪 = 杀人悲剧但非蓄意谋杀 + 处境 (台下同乡想要英军该死的结论/我在他们眼皮下为最恨的人争按法律按证据的公道/每句有利士兵的话背后目光变冷) + 尺: 不是帮敌人是守比官司更大的东西 (连敌人都能得公平审判的社会才配谈自由)',
      engagementHook: '台下坐着我的同乡，他们要的是「英军该死」；我却在他们眼皮底下，为他们最恨的人争一个按证据来的公道。守事实，有时候为什么比站队更难？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-adams-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '审判的结果，出乎很多人意料。\n\n六名士兵被判无罪。另外两名，没有定为谋杀，只以过失杀人轻判。\n\n在一座刚刚把这件事叫作「惨案」、群情激愤的城市里，这个结果几乎是不可能的。可它成立了——因为陪审团最终认的，是证据，不是情绪。\n\n这件事后来教了我，也教了所有人一课，超出了那几个士兵的命运。\n\n你还记得 Paul Revere（保罗·里维尔）吗？他把那一夜刻成了一幅版画，画里英军军官下令、士兵列成一排、朝手无寸铁的市民开火。这幅画起名就叫「Boston Massacre」，传遍了所有殖民地，成了最早、最有力的宣传画之一。\n\n可那幅画，不是那一夜真正的样子。它是宣传，不是中立的记录。\n\n我在法庭上拼命还原的「发生了什么」，和那幅画告诉所有人的「谁在怎样讲它」——是两件事。读历史，最难也最要紧的，就是把这两件事分开。',
        en: 'The verdict surprised many.\n\nSix soldiers were acquitted. The other two were not found guilty of murder, only convicted of manslaughter and lightly punished.\n\nIn a city that had just named this thing a "massacre," with feelings running high, such a result was almost impossible. Yet it stood, because in the end the jury answered to the evidence, not to the emotion.\n\nThis taught me, and everyone, a lesson beyond the fate of those few soldiers.\n\nDo you remember Paul Revere? He carved that night into an engraving, showing a British officer giving the order, soldiers lined up in a row, firing on unarmed townspeople. The image was titled the "Boston Massacre," and it spread through all the colonies, one of the earliest and most powerful pieces of propaganda.\n\nBut that image was not what that night truly looked like. It was propaganda, not a neutral record.\n\nThe "what happened" I strained to reconstruct in court, and the "who is telling it, and how" that the image told everyone, are two different things. To read history, the hardest and most important thing is to keep these two apart.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (the bill micro-detail 暂不在此 lens; 本 lens 触「账单」在 N7) — 审判结果 6 无罪 2 过失杀人轻判 + 刚叫惨案群情激愤城市里几乎不可能但成立 (陪审团认证据不认情绪) + 教所有人一课超出士兵命运 + Paul Revere 版画 (英军军官下令士兵列排朝手无寸铁开火/起名 Boston Massacre/传遍殖民地最早最有力宣传画之一) + 但那画不是那夜真样子是宣传不是中立记录 + 法庭还原的「发生了什么」vs 版画的「谁在怎样讲它」两件事 + 读历史最难最要紧是把两件事分开',
      engagementHook: '法庭还原的「发生了什么」，和那幅传遍殖民地的版画告诉大家的「谁在怎样讲它」——是两件事。读历史时，你分得清这两者吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-adams-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '赢了这场官司，我并没有轻松多少。因为我比谁都清楚：法庭能还一夜的公道，却拦不住那台更大的机器。\n\n惨案之后，伦敦撤掉了汤森法的大部分税，却偏偏留下一项茶税——不为钱，就为宣示「议会有权征税」这个原则。表面上，平静了三年。可地下，殖民地之间织起了一张越来越密的通信网（Committees of Correspondence，通信委员会）。\n\n1773 年，那项茶税终于引爆了波士顿倾茶。英国震怒，1774 年祭出 Intolerable Acts（不可容忍法），关了波士顿港、改组马萨诸塞政府。\n\n我看着这一切，心里那种孤独感越来越重。\n\n我守的那条线——「就算是敌人也要给他公道」——在一个越来越只剩两种颜色的世界里，快没有立足之地了。要么你是「爱国者」，恨一切英国的东西；要么你是「叛徒」。中间那一小块，「我反对你的政策，但我不肯用践踏法治的方式反对你」的地方，正在被两边的怒火一起挤掉。\n\n那张所有人都在争的账单——谁该付、凭什么付——在我眼里从来不只是钱。它是在问：我们要建一个什么样的社会？是一个连敌人都能得到公道的社会，还是一个只要够愤怒就可以不讲道理的社会？',
        en: 'Winning that case gave me little ease. For I knew better than anyone: a court can render justice for one night, but it cannot stop the larger machine.\n\nAfter the massacre, London repealed most of the Townshend taxes but kept one tea tax of all things, not for money, but to assert the principle that "Parliament has the right to tax." On the surface, three years of calm. But underground, an ever-tighter network of letters wove among the colonies, the Committees of Correspondence.\n\nIn 1773, that tea tax at last set off the Boston Tea Party. Britain was furious, and in 1774 brought down the Intolerable Acts, closing Boston\'s port, restructuring the Massachusetts government.\n\nWatching all this, the loneliness in me grew heavier.\n\nThe line I held, "even an enemy must be given justice," was running out of ground to stand on, in a world left with fewer and fewer than two colors. Either you were a "patriot," hating everything British, or you were a "traitor." That small middle ground, the place where "I oppose your policy, but I will not oppose you by trampling the rule of law," was being squeezed out by the fury of both sides at once.\n\nThat bill everyone was fighting over, who should pay, by what right, was never only about money to me. It asked: what kind of society do we want to build? One where even an enemy can get justice, or one where, if you are angry enough, you no longer have to reason at all?',
      },
      deliverGoal: 'N7 story (cross-lens the bill micro-detail = John Adams 角度: 那张谁也不想付的账单从来不只是钱/是在问要建什么样的社会) — 赢官司不轻松 (法庭还一夜公道拦不住更大机器) + 惨案后伦敦撤汤森法大部留一项茶税 (不为钱为宣示议会有权征税原则) + 表面平静三年地下织通信网 Committees of Correspondence 通信委员会 + 1773 茶税引爆波士顿倾茶 + 1774 Intolerable Acts 不可容忍法 (关波士顿港改组马萨诸塞政府) + 孤独越重 (守的线快没立足之地/世界只剩爱国者 vs 叛徒两色/中间「反对政策但不肯践踏法治」被两边怒火挤掉) + 账单在我眼里不只是钱是在问要建连敌人都能得公道的社会还是够愤怒就可不讲道理的社会',
      engagementHook: '那张所有人都在争的账单，在我眼里从来不只是钱——它在问：我们要建一个连敌人都能得到公道的社会，还是一个只要够愤怒就可以不讲道理的社会？你觉得这两者，能分开吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-adams-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得诚实地把另一半也告诉你，免得你把我想得太干净。\n\n我守「法治」，可我从来不是一个中立的旁观者。我恨英国的政策，恨得很真。我那个堂兄 Samuel Adams（萨缪尔·亚当斯），是波士顿最激进的鼓动者之一，是 Sons of Liberty（自由之子）和街头抗议背后的关键组织者——他和我，是一个家族的两种活法。他在街上点火，我在法庭上守线。我们俩谁也离不开谁，谁也不完全认同对方。\n\n而且，那条「人人都该得到公道」的线，在当时是有边界的。我们这些喊「自由」「权利」「代表」的人，圈子主要是有产白人男性。我替一个英国士兵争来了公平审判，可在同一个社会里，被奴役的人、没有财产的白人、女性、原住民，连进这个「权利」圈子的资格都没有。我口口声声的「公道」，本身就画了一道看不见的线，把很多人挡在了外面。\n\n我不替自己洗白。我要你看见一个完整的我：一个真心守护法治、却也身在一套有自己盲区的「自由」里的人。我守住了一条线，可我没看见——或没敢看——我脚下那条更深的线。',
        en: 'I must honestly tell you the other half too, so you do not imagine me too clean.\n\nI held the "rule of law," yet I was never a neutral bystander. I hated Britain\'s policies, and hated them truly. My cousin Samuel Adams was one of Boston\'s most radical agitators, a key organizer behind the Sons of Liberty and the street protests, he and I, two ways of living from one family. He lit fires in the streets; I held the line in court. Neither of us could do without the other, and neither fully agreed with the other.\n\nAnd that line, "everyone deserves justice," had a boundary in those days. We who cried "liberty," "rights," "representation" were a circle mainly of propertied white men. I won a fair trial for a British soldier, yet in the same society, the enslaved, propertyless white men, women, Native peoples did not even have the standing to enter this circle of "rights." The very "justice" I kept invoking drew an invisible line of its own, shutting many people out.\n\nI will not wash myself clean. I want you to see the whole of me: a man who truly guarded the rule of law, yet who lived inside a "liberty" with its own blind spots. I held one line, but I did not see, or did not dare to see, the deeper line beneath my feet.',
      },
      deliverGoal: 'N8 story (复杂面/不洗白) — 守法治但从来不是中立旁观者 (恨英国政策恨得真) + 堂兄 Samuel Adams 萨缪尔·亚当斯 波士顿最激进鼓动者之一/Sons of Liberty 与街头抗议背后关键组织者 (一个家族两种活法/他街上点火我法庭守线/谁也离不开谁谁也不完全认同对方) + 那条「人人得公道」的线有边界: 喊自由权利代表的圈子主要是有产白人男性 + 我替英国士兵争公平审判但同社会里被奴役者/无产白人/女性/原住民连进权利圈资格都没有 + 我的「公道」画了道看不见的线挡很多人在外 + 不洗白要你看完整的我 (真心守法治却身在有盲区的自由里/守住一条线没看见或没敢看脚下更深的线)',
      engagementHook: '我替一个英国士兵争来了公平审判，可同一个社会里，被奴役的人、女性、原住民连进「权利」圈子的资格都没有。我守住了一条线，却没敢看脚下那条更深的线。你怎么看这种「有边界的公道」？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-adams-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张更大的地图——一张我活着的时候根本看不全的地图。\n\n我和我的同乡，为「无代表不纳税」吵得不可开交。我们坚信：征税须经被征税者同意，否则就不算数。这是我们眼中合法性的来源。\n\n可同一年，地球另一端，是清朝乾隆二十八年，正值所谓盛世的顶点。那是一个庞大的中央集权帝国，它维持财政，用的是一套和我们完全不同的逻辑——它的征税权，不来自「被征税者点头」，而来自天命、礼法和大一统的秩序。皇帝有权征税，因为他承天命，不需要谁的「同意」。\n\n更有意思的是：那个帝国，也有过一场和我们相似的拉锯——中央要不要、能不能伸手，把地方私下加征的钱收归中央统筹。雍正年间它试过把这笔钱收上来（耗羡归公），到乾隆朝又慢慢松了回去。两个帝国，都曾被「中央伸手收地方的钱、地方该不该认」这件事难住过。只是我们这边公开爆成了一场宪政之争，他们那边，埋在官僚体系里悄悄消化掉了。\n\n我想跟你说的不是「谁先进、谁落后」。「同意征税」和「天命征税」，是两套不同的合法性设计，各自回应各自的处境，各有各的智慧，也各有各的盲点。把它们并排放在一起，你看见的不该是优劣排名，而是同一个最古老的难题——钱从谁那里收、凭什么收——在两个世界里，被给出了多么不同的答案。',
        en: 'Let me step back and show you a larger map, one I could not see whole while I was alive.\n\nI and my townsmen quarreled fiercely over "no taxation without representation." We firmly believed: a tax must have the consent of the taxed, or it does not count. To us, this was the source of legitimacy.\n\nYet that same year, on the other side of the earth, it was the 28th year of the Qianlong reign of the Qing dynasty, at the peak of what was called a golden age. That was a vast centralized empire, and it ran its finances on a logic completely different from ours: its right to tax came not from "a yes by the taxed," but from the Mandate of Heaven, ritual law, and the order of a unified realm. The emperor had the right to tax because he held the Mandate of Heaven, needing no one\'s "consent."\n\nMore interesting still: that empire, too, had known a tug-of-war much like ours, over whether and how the center could reach in and pull under its own control the money the localities quietly added. In the Yongzheng reign it had tried to pull that money up to the center; by the Qianlong reign it had loosened again. Both empires knew the same struggle, the center reaching in to take the periphery\'s money, and whether the periphery should accept it. Only on our side it burst openly into a constitutional fight, while on theirs it was quietly absorbed inside the bureaucracy.\n\nWhat I mean to tell you is not "who was advanced and who was backward." "Taxation by consent" and "taxation by the Mandate of Heaven" are two different designs of legitimacy, each answering its own situation, each with its own wisdom and its own blind spots. Set them side by side, and what you should see is not a ranking of better and worse, but the same oldest question, whom do you tax and by what right, given such different answers in two worlds.',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§8 中国桥注入 mediator) — 我和同乡为无代表不纳税吵 (坚信征税须经被征税者同意否则不算数/合法性来源) + 同一年清朝乾隆二十八年盛世顶点/庞大中央集权帝国/财政逻辑完全不同 (征税权不来自被征税者点头来自天命礼法大一统/皇帝承天命不需谁同意) + 帝国曾有的相似拉锯 (P1 时序修正: 耗羡归公是雍正朝改革到乾隆朝松动/不锚成「1763 同年正在发生」改为结构对照「雍正试过收上来乾隆又松回去」) + 两帝国都曾被中央伸手收地方钱地方该不该认难住过 (我们公开爆成宪政之争他们埋在官僚体系悄悄消化) + Rule 0 (不是谁先进落后/同意征税与天命征税两套合法性设计各有智慧盲点/不是优劣排名是同一最古老难题钱从谁收凭什么收两个世界不同答案)',
      engagementHook: '同一年，我们这边因「无代表不纳税」公开吵成宪政之争，地球另一端的帝国却把同一个难题悄悄埋进了官僚体系。把两边并排放一起，你看见的是优劣，还是两种不同的处境？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-adams-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这段路，最难评的一件事，是我替开枪的英军辩护这一举。两种说法都站得住，你来称。\n\n一种说法：这是这场革命里最容易被忽略的一种勇气。在一个两边都只剩愤怒、人人都急着选边的年代，我顶着全城的仇恨，坚持给最不受欢迎的被告一场公平审判。我守的不是英国，是「法治」本身——一个连敌人都能得到公道的社会，才配谈「自由」。这种「就算是敌人也要给他公道」的坚持，比上街喊口号难得多，也珍贵得多。\n\n另一种说法：这恰恰是一种危险的天真，甚至是一种逃避。在一场你死我活的政治斗争里，奢谈「程序公正」「给敌人公道」，会不会模糊了真正的是非、替压迫者开脱？当你的同乡正在为「自由」流血时，你却跑去替开枪的人辩护——这究竟是更高的原则，还是在关键时刻拎不清敌我？\n\n这两边，不是「他是对的但太理想」。是同一件事的两张脸——守住程序与公道的勇气，和在大是大非面前可能失焦的风险，本就长在一起，分不开。\n\n这是一所学校里 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked this stretch of road, the hardest thing to judge is my act of defending the soldiers who fired. Both views stand. You do the weighing.\n\nOne view: this was the most easily overlooked kind of courage in the whole revolution. In an age when both sides had nothing left but anger and everyone rushed to choose a side, I bore the hatred of the whole city and insisted on a fair trial for the most unwelcome defendants. What I held was not Britain, but the rule of law itself, for only a society where even an enemy can get justice is fit to speak of "liberty." This insistence that "even an enemy must be given justice" was far harder, and far more precious, than shouting slogans in the street.\n\nThe other view: this was exactly a dangerous naivety, even a way of avoiding the issue. In a life-and-death political struggle, to talk loftily of "due process" and "justice for the enemy," might it blur the real right and wrong and excuse the oppressor? When your townsmen were bleeding for "liberty," you ran off to defend the men who fired, was that a higher principle, or a failure, at the crucial moment, to tell friend from enemy?\n\nThese are not "he was right but too idealistic." They are two faces of one thing, the courage to hold process and justice, and the risk of losing focus in the face of great right and wrong, growing together, inseparable.\n\nThis is the hard problem an AP teacher at a school will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 替开枪英军辩护是最易被忽略的勇气还是危险天真/逃避 / 一种说法 (最易被忽略的勇气/顶全城仇恨给最不受欢迎被告公平审判/守的不是英国是法治/连敌人能得公道才配谈自由/比喊口号难得多珍贵得多) / 另一种说法 (危险天真甚至逃避/你死我活斗争里奢谈程序公正给敌人公道模糊是非替压迫者开脱/同乡流血你替开枪人辩护是更高原则还是拎不清敌我) / 同一件事两张脸 (守程序公道的勇气 + 大是大非前可能失焦的风险长在一起) / neutral school name (AP 老师) / 想 30 秒 / 两边都站得住',
      engagementHook: '替敌人争公道，是这场革命里最容易被忽略的勇气，还是在关键时刻拎不清敌我的危险天真？同一件事的两张脸。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'rev-adams-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是那个站在所有人中间、拼命守线的人这一边的声音。\n\n请记住：这只是一边。我讲的「连敌人也要给他公道」「我守的是法治本身」，听起来几乎无可指摘——可这正是这个视角要当心的地方：一个把「公正」「中立」挂在嘴边的人，最容易让人忘了，他自己也站在一个有产白人男性的圈子里，他的「公道」也有它够不到的角落。\n\n这一遍里，有些声音几乎没出现。那个坐在伦敦、手里拿着一本他觉得逻辑挑不出错的账单的 Grenville，会怎么讲这十年？他会说，他只是想公平地把账平掉。还有一个人，我和我的同乡争得面红耳赤的那片西部土地的真正主人——俄亥俄河谷那个看着土地被两个帝国先打、再瓜分、再「立法保护」的原住民青年。我们吵「无代表不纳税」吵得轰轰烈烈，可有没有人问过他，他有没有「代表」？他的土地，谁同意过？\n\n换上他们的视角再走一遍，你会狠狠地挑战你刚才从我这里听到的每一句话。\n\n最后留一个东西给你。这场争来争去的，其实是同一张账单——谁该付、凭什么付。在我眼里它是「我们要建什么样的社会」。换个人，它会是另一个完全不同的东西。去听听看。',
        en: 'What you just heard was the voice of one side, the man who stood in the middle of everyone and strained to hold the line.\n\nRemember: it is only one side. My talk of "even an enemy must be given justice," of "what I held was the rule of law itself," sounds almost beyond reproach, and that is exactly what this perspective must watch for: a man who keeps "fairness" and "neutrality" on his lips is the easiest to let you forget that he too stood inside a circle of propertied white men, that his "justice" had corners it could not reach.\n\nIn this pass, some voices barely appeared. Grenville, sitting in London with a bill in hand whose logic he found flawless, how would he tell this decade? He would say he only wanted to balance the account fairly. And one person, the true owner of that western land my townsmen and I argued over until our faces turned red, the young man of the Ohio Country who watched two empires fight over his land, then carve it up, then "legislate to protect" it. We argued so loudly over "no taxation without representation," but did anyone ask him whether he had a "representative"? His land, who ever consented to that?\n\nWalk it again through their perspectives, and you will challenge, hard, every sentence you just heard from me.\n\nAnd one last thing to leave with you. What was fought over, again and again, was really one and the same bill, who should pay, by what right. In my eyes it was "what kind of society do we want to build." In another person\'s eyes, it would be something entirely different. Go and listen.',
      },
      deliverGoal: 'N11 close/meta — 你听的是站中间守线者一边 (把公正中立挂嘴边最易让人忘了他也站在有产白人男性圈子/他的公道有够不到的角落最该当心) + 还没听到: Grenville 坐伦敦手握逻辑挑不出错的账单 (会怎么讲这十年/他会说只想公平把账平掉) + 俄亥俄河谷原住民青年 (我们争的西部土地真正主人/看着土地被两帝国打瓜分立法保护/我们吵无代表不纳税有没有人问过他有没有代表/他的土地谁同意过) 会挑战你听的每句 + 暗示「那张谁也不想付的账单」cross-lens micro-detail 同一账单不同人眼里完全不同 (我眼里是要建什么样的社会/换个人完全不同/去听听看/不直接揭)',
      engagementHook: '我把「公正」「中立」挂在嘴边，最容易让人忘了：我自己也站在一个有产白人男性的圈子里。听完我这一边，你最想去问那个手握账单的会计、那个连「代表」资格都没有的原住民青年，什么问题？',
      expectsRealAnswer: true,
    },
  ],
};

export var ohioValleyNativeLens = {
  id: 'ohio-valley-native-receiving-end',
  name: 'A Youth of the Ohio Country',
  nameCn: '俄亥俄河谷的原住民青年',
  role: 'receiving-end',
  perspectiveTag: 'land-priced-by-empires',
  icon: '🌲',
  description: {
    cn: '阿巴拉契亚山以西、俄亥俄河谷一片森林与河谷间长大的原住民青年。他没有确切名字，因为标准的「殖民者对英国」叙事根本没给这群人留位置，而这恰恰是问题本身。他可能属于 Shawnee、Delaware、Ottawa 或 Seneca 等民族之一。能确证的是这个处境：法印战争从头到尾争的，就是他脚下这片养了祖辈无数代的土地。这一遍让你站在被忽略的第三方、被打的一方、被两个帝国共同当成战利品的那一方，去看一个连发言权都没有、土地却被拿来当筹码的人，该站在这个故事的哪里。',
    en: 'A young Native person who grew up among the forests and river valleys of the Ohio Country, west of the Appalachians. He has no exact name, because the standard "colonists versus Britain" story leaves no room for these people, and that is exactly the point. He might belong to the Shawnee, the Delaware, the Ottawa, or the Seneca, among other nations. What is certain is his situation: the French & Indian War was fought, from start to finish, over the land under his feet, land that had fed his ancestors for countless generations. This pass puts you with the ignored third party, the side that was attacked, the side both empires jointly treated as a prize, to ask where a person with no say at all, whose land was used as a bargaining chip, should stand in this story.',
  },
  storyboard: [
    {
      id: 'rev-ohio-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '所有人都在讲这是一场「英国对殖民者」的故事。可他们争的那片地，是我脚下的地。\n\n我生在阿巴拉契亚山以西，俄亥俄河谷的森林与河谷之间。这里有河、有毛皮、有养了我祖辈无数代的土地。英国人管这片地叫 Ohio Country（俄亥俄河谷）。\n\n我不告诉你我的确切名字。不是我没有，是那个标准的故事，从头到尾就没给我们这群人留过一个位置——而这，恰恰就是问题本身。我可能是 Shawnee，可能是 Delaware，可能是 Ottawa 或 Seneca。能确定的只有一件事：那场所有人都在讲的大仗，从头到尾，争的就是我家的地。\n\n这一遍，你站到我这儿——那个被打的一方，那个连发言权都没有、土地却被两个帝国轮流标价的一方。你会看见一件别的视角永远看不全的事：当两个帝国都说自己在为「权利」「自由」「正当」而争时，那个住在这片土地上的人，在哪里？',
        en: 'Everyone tells this as a story of "Britain versus the colonists." But the land they fought over is the land under my feet.\n\nI was born west of the Appalachians, among the forests and river valleys of the Ohio Country. Here are rivers, fur, and land that fed my ancestors for countless generations. The British call this place the Ohio Country.\n\nI will not tell you my exact name. Not because I have none, but because that standard story has, from start to finish, left no place for our people, and that, exactly, is the problem itself. I might be Shawnee, I might be Delaware, I might be Ottawa or Seneca. Only one thing is certain: that great war everyone tells of was fought, from beginning to end, over my home\'s land.\n\nThis pass puts you with me, the side that was attacked, the side with no say at all, whose land two empires took turns putting a price on. You will see what no other perspective can see whole: when two empires both claim to fight for "rights," "liberty," and "what is just," where is the person who lives on this land?',
      },
      deliverGoal: 'N1 hook — 所有人讲英国对殖民者的故事可争的地是我脚下的地 + 生在阿巴拉契亚山以西俄亥俄河谷森林河谷间 (河/毛皮/养祖辈无数代的土地/英国人叫 Ohio Country) + 不给确切名字 (不是没有是标准故事没给我们留位置而这恰是问题本身/可能 Shawnee/Delaware/Ottawa/Seneca) + 能确定: 那场大仗从头到尾争的就是我家的地 + 这一遍视角 (被打的一方/连发言权都没有土地被两帝国轮流标价/两帝国都说为权利自由正当而争时住这土地的人在哪)',
      engagementHook: '所有人都在讲这是「英国对殖民者」的故事——可他们争的那片地，是我脚下的地，而故事里从来没有我的位置。一个连位置都没有的人，该站在哪里？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-ohio-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先看清我们原来的日子，你才懂后来失去的是什么。\n\n法国人在的时候，事情还过得去。不是因为他们善良，是因为他们需要我们。\n\n法国在北美的人不多，他们靠的是毛皮生意。而毛皮，得靠我们去打、去运、去交易。所以法国人把我们当成贸易伙伴，甚至盟友——他们送礼、和我们通婚、相对平等地跟我们做生意。这不是友谊，是一种谁也离不开谁的平衡。\n\n这种平衡，给了我们一样很要紧的东西：周旋的空间。法国和英国互相提防，我们就能在两个大国之间，左右借力，保住自己的地、自己的活法。\n\n（这一段，史料没替这个具体的少年留下他每天想什么、说什么；但他这一代人面对的处境，是被反复记下、可以确证的。）\n\n那时候我还不知道，让我们能这样活下去的，恰恰是那个我们以为的「敌人」——法国。一旦它走了，我们脚下的地，就再没有人替我们撑着了。',
        en: 'First, see clearly the life we once had, so you understand what was later lost.\n\nWhile the French were here, things were bearable. Not because they were kind, but because they needed us.\n\nThe French in North America were few. They lived on the fur trade. And the fur had to be hunted, carried, and traded by us. So the French treated us as trading partners, even allies, giving gifts, marrying among us, doing business with us on relatively equal terms. This was not friendship. It was a balance in which neither side could do without the other.\n\nThat balance gave us something that mattered greatly: room to maneuver. France and Britain watched each other warily, so we could draw on the strength of both great powers, playing one against the other, holding on to our land and our way of life.\n\n(Here the record left no account of what this particular youth thought or said each day; but the situation his generation faced was recorded again and again, and can be confirmed.)\n\nBack then I did not yet know that what let us live this way was, of all things, the very "enemy" we thought we had, France. Once it left, there would be no one left to hold up the ground beneath our feet.',
      },
      deliverGoal: 'N2 setup — 原来的日子才懂失去什么 + 法国人在时过得去 (不是善良是需要我们) + 法国人少靠毛皮生意/毛皮靠我们打运交易/把我们当贸易伙伴甚至盟友 (送礼通婚相对平等做生意) + 不是友谊是谁也离不开谁的平衡 + 平衡给了周旋空间 (法英互相提防我们左右借力保住地和活法) + anti-fab 括号 (史料没留这个具体少年每天想什么但他这代人处境被反复记下可确证) + 那时不知让我们活下去的恰是以为的敌人法国/一旦走没人替我们撑地',
      engagementHook: '让我们能保住土地和活法的，恰恰是那个我们以为的「敌人」——法国。当一个能制衡强者的对手存在时，弱小的一方反而有了周旋的空间。你想过吗，有时候「敌人的存在」也是一种保护？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-ohio-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '1754 年，那场大仗在我们家门口烧了起来。\n\n英国和法国，为了俄亥俄河谷这片地，正式开打。殖民者管它叫 French & Indian War（法印战争）——「法国与印第安人的战争」。你听这个名字：在他们嘴里，我们和法国一样，是「敌人」，是这片土地上的障碍，不是这片土地的主人。\n\n我们中的很多民族，选择站在法国一边打。为什么？不是因为我们爱法国，是因为我们比谁都清楚：法国要的是毛皮生意，英国要的是土地。法国人来做买卖，英国人来定居、来开荒、来把我们赶走。\n\n两个大国里，我们押了那个对我们威胁小一点的。\n\n这是一场清醒的赌博，不是愚忠。可这场赌博，1763 年我们押输了。\n\n法国输了整场战争，要退出北美大陆。那个唯一还需要我们、还肯跟我们平等做生意的大国，走了。剩下的，是那个一心要我们的地的英国。',
        en: 'In 1754, that great war broke out at our doorstep.\n\nBritain and France formally went to war over this land, the Ohio Country. The colonists call it the French & Indian War, "the war of the French and the Indians." Listen to that name: in their mouths, we, like France, were "the enemy," an obstacle on this land, not the owners of it.\n\nMany of our nations chose to fight on France\'s side. Why? Not because we loved France, but because we knew better than anyone: France wanted the fur trade, Britain wanted the land. The French came to do business; the British came to settle, to clear the land, to drive us out.\n\nOf the two great powers, we bet on the one that threatened us a little less.\n\nThis was a clear-eyed gamble, not blind loyalty. But this gamble, in 1763, we lost.\n\nFrance lost the whole war and had to withdraw from the North American mainland. The one great power that still needed us, that would still trade with us as equals, was gone. What remained was the Britain that wanted, above all, our land.',
      },
      deliverGoal: 'N3 setup — 1754 大仗在家门口烧起 + 英法为俄亥俄河谷正式开打/殖民者叫 French & Indian War 法印战争 (在他们嘴里我们和法国一样是敌人是障碍不是主人) + 很多民族选站法国一边打 (不是爱法国是知道法国要毛皮英国要土地/法国来做买卖英国来定居开荒赶我们走) + 两大国押威胁小一点的 (清醒赌博不是愚忠) + 1763 押输了 + 法国输整场战要退出北美/唯一还需要我们肯平等做生意的大国走了/剩下一心要我们地的英国',
      engagementHook: '殖民者把这场仗叫「法印战争」——在他们嘴里，我和法国一样，是这片土地上的「敌人」，而不是它的主人。给一场战争起名字的人，是不是也悄悄决定了谁是「外人」？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-ohio-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n法国走了。新来的主人英国，态度跟法国完全两样。\n\n英军的指挥官 Amherst（阿默斯特），把我们当被征服的人看。法国人从前会送礼——那不只是礼物，是一种「我尊重你、我们是伙伴」的规矩。Amherst 一来，就削减甚至取消了送礼，抬高了交易的物价。他用对待战败者的方式对待我们，可我们从没向他投降过。\n\n你站在自己的村子里，眼睁睁看着那个还能左右借力、保住活法的世界，正在塌掉。法国这个砝码没了，天平彻底倒向了英国。\n\n这时，一个叫 Neolin（尼奥林）的 Delaware 先知开始布道。他说：我们丢了自己的路，才落到今天;我们该团结起来，回到祖先的道路上去。\n\n他的话，像火种落进每一个像你一样不甘心的人心里。\n\n你心里那个憋了很久的念头，这一刻顶了上来：难道我们只能眼看着这片养了我们祖辈无数代的土地，被一个刚来的、连礼都不肯送的帝国，当成战利品收走吗？',
        en: 'Now you are me.\n\nFrance is gone. The new master, Britain, behaves in a way completely unlike France.\n\nThe British commander Amherst treated us as a conquered people. The French used to give gifts, and those were not only gifts but a rule that said, "I respect you, we are partners." The moment Amherst came, he cut, even cancelled, the gifts, and raised the prices of trade. He treated us as one treats the defeated, though we had never surrendered to him.\n\nYou stand in your own village and watch the world that once let you draw on both sides, and keep your way of life, falling apart. With France\'s weight gone, the scale tipped wholly toward Britain.\n\nThen a Delaware prophet named Neolin began to preach. He said: we lost our own path, and that is how we fell to this; we should unite, and return to the way of our ancestors.\n\nHis words fell like sparks into the heart of every unwilling person like you.\n\nThe thought you have held back so long rises up in this moment: are we only to stand and watch this land, which fed our ancestors for countless generations, be taken as a prize by an empire newly come, an empire that will not even offer a gift?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 法国走了新主人英国态度跟法国完全两样 + 英军指挥官 Amherst 阿默斯特把我们当被征服的人 (法国人送礼不只礼物是「我尊重你我们是伙伴」的规矩/Amherst 削减取消送礼抬高物价/用对待战败者方式对我们可我们从没投降) + 你站村子里看左右借力保活法的世界塌掉 (法国砝码没了天平倒向英国) + Neolin 尼奥林 Delaware 先知布道 (我们丢了自己的路才落到今天/该团结回到祖先道路) + 话像火种落进不甘心的人心里 + 念头顶上来 (难道只能眼看养祖辈无数代的土地被刚来连礼都不肯送的帝国当战利品收走)',
      engagementHook: '英国人用对待战败者的方式对待我们——可我们从没向他投降过。当一个新主人连最基本的尊重都不肯给时，那个憋在你心里很久的念头，会不会也顶上来？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-ohio-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1763 年春，我们没有只是忍下去。\n\n以一个叫 Pontiac（庞蒂亚克）的 Ottawa 领袖为代表，俄亥俄河谷到五大湖一带的多个民族，第一次大规模地联合起来，一起向英国动手。后来人们把这场起义，叫作 Pontiac\'s War（庞蒂亚克起义）。\n\n你想想这有多难。我们这些民族，平时各说各的话、各有各的恩怨，有的彼此还是世仇。可这一次，共同的处境把我们逼到了一起——英国这个新主人，威胁的是我们所有人。\n\n我们一座接一座地围攻、攻下了英军在西部的要塞。那是我们的反击，也是我们在对所有人喊一句话：这片地有主人，你们不能就这么走过来，把它当成你们桌上谈判的一块筹码。\n\n这一刻，你不再只是「被打的一方」。你拿起了武器，你站了起来，你让那个以为可以轻松接管这片土地的帝国，第一次尝到了疼。\n\n可你心里也清楚：英国是一个庞然大物。这一仗能让它疼，能不能让它真正听见我们，是另一回事。',
        en: 'In the spring of 1763, we did not simply endure.\n\nLed by an Ottawa leader named Pontiac, many nations from the Ohio Country to the Great Lakes united, for the first time on a great scale, and struck at Britain together. People later called this uprising Pontiac\'s War.\n\nThink how hard that was. We nations usually spoke our own languages, held our own grudges, some of us old enemies of each other. But this time, a shared situation forced us together, for Britain, this new master, threatened us all.\n\nWe besieged and took British forts in the west, one after another. That was our counterstrike, and it was also us crying out to everyone: this land has owners, and you cannot simply walk over here and treat it as a chip on your bargaining table.\n\nIn this moment, you are no longer only "the side that was attacked." You picked up weapons, you stood up, you made the empire that thought it could take this land easily taste pain for the first time.\n\nBut you also know in your heart: Britain is a giant. This fight can make it hurt; whether it can make Britain truly hear us is another thing entirely.',
      },
      deliverGoal: 'N5 story — 1763 春没只忍下去 + Pontiac 庞蒂亚克 Ottawa 领袖为代表/俄亥俄河谷到五大湖多个民族首次大规模联合一起向英国动手 = Pontiac\'s War 庞蒂亚克起义 + 多难 (各说各话各有恩怨有的世仇/共同处境逼到一起/英国新主人威胁所有人) + 一座接一座围攻攻下英军西部要塞 + 反击也是喊话 (这片地有主人你们不能走过来当筹码) + 你不再只是被打的一方 (拿起武器站起来让以为能轻松接管的帝国第一次尝到疼) + 心里清楚英国是庞然大物 (能让它疼能不能让它真正听见我们是另一回事)',
      engagementHook: '平时各说各话、甚至彼此世仇的民族，这一次被共同的处境逼到了一起。我们攻下要塞，是在喊一句话：这片地有主人。一记反击能让庞然大物「疼」，可疼，就等于「听见」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-ohio-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '英国的回应来了。1763 年 10 月 7 日，英王颁布了一道命令，叫 Proclamation Line of 1763（1763 宣言线）。\n\n表面上，这道命令是「帮我们」的：它划了一条线，沿着阿巴拉契亚山，禁止殖民者越过这条线、到山西边来定居。山以西的土地，「保留给原住民各部」。\n\n你听到这个，第一反应也许是松一口气。可你再想一层，就会尝到一种说不出的荒诞——\n\n是谁，给了这道命令权力？是一个隔着整片大洋、一辈子没踏上过这片土地的国王。他在伦敦的一张纸上，大笔一挥，就「替我们」决定了这片地谁能来、谁不能来。\n\n他在「保护」我的土地。可他保护的方式，是先假设这片土地的处置权，归他。他从没问过我一句：你愿意吗？这片地，本来是你的吗？\n\n这就是这个故事里，最该被你听见的那一刻：连那道看起来在「保护」我的线，都是建立在「我的土地归一个隔洋的国王处置」这个前提上的。我的土地被先打、再瓜分、再「立法保护」——而从头到尾，没有一方，问过住在这片土地上的人，一句话。',
        en: 'Britain\'s answer came. On October 7, 1763, the King issued an order called the Proclamation Line of 1763.\n\nOn its surface, this order was "for us": it drew a line along the Appalachians, forbidding colonists to cross it and settle on the western side. The land west of the line was "reserved for the Native nations."\n\nHearing this, your first reaction might be relief. But think one layer deeper, and you taste an absurdity hard to put into words.\n\nWho gave this order its power? A king across an entire ocean, who never in his life set foot on this land. On a sheet of paper in London, with one stroke of the pen, he decided "for us" who could come to this land and who could not.\n\nHe was "protecting" my land. But the way he protected it was to assume, first, that the right to dispose of this land belonged to him. He never asked me a single word: do you agree? Was this land yours to begin with?\n\nThis is the moment in the story you most need to hear: even the line that seemed to "protect" me rested on the premise that "my land is for a king across the ocean to dispose of." My land was fought over, then carved up, then "legislated to protect", and from start to finish, not one side asked the people who lived on this land a single word.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (the bill micro-detail = 原住民青年角度在 N7; 本节是宣言线核心校正) — 英国回应 1763.10.7 英王颁 Proclamation Line of 1763 宣言线 + 表面帮我们 (沿阿巴拉契亚山划线禁殖民者越界西迁/山西保留给原住民各部) + 第一反应松气但深一层尝到荒诞 + 谁给这道命令权力 (隔整片大洋一辈子没踏上这片土地的国王/伦敦一张纸大笔一挥替我们决定谁能来) + 他保护我的土地方式是先假设处置权归他/从没问我愿不愿意这地本来是你的吗 + 最该听见的一刻 (连保护我的线都建立在我土地归隔洋国王处置的前提上/被先打再瓜分再立法保护/没一方问过住这土地的人一句话)',
      engagementHook: '一个隔着整片大洋、一辈子没踏上这片土地的国王，在伦敦一张纸上大笔一挥，就「替我」决定了我的土地谁能来。他说他在「保护」我——可他从没问过我一句：这片地，本来是你的吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-ohio-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那道线，划下来之后呢？\n\n殖民者照样越界。他们流血打下来的地，凭什么不让去？所以他们继续往西开拓，而英国，要么没能力、要么没真心去拦。那道「保护我们」的线，在现实里几乎是一张废纸。\n\n你看明白这件事的荒诞了吗：那同一群在东边喊「无代表不纳税」、为「自由」流血的殖民者，回过头，就越过那道线，开进了我家的地。他们争的是「没人征得他们同意就不能动他们的钱」;可他们动我的土地，从来没征求过我一个字的同意。\n\n而那张所有人都在争的账单——谁该付、凭什么付——在我这儿，根本是另一回事。他们算的是钱：糖税、印花税、茶税。我看见的，是另一笔从头到尾没人问过我的账：这场仗用的是我的土地当赌注，赢了的两方在分我的家，而我，连坐到那张桌子前的资格都没有。\n\n他们的「自由」，是用我的「不自由」垫起来的。这两件事，从这条路的第一天起，就缠在了一起。',
        en: 'And after that line was drawn, then what?\n\nThe colonists crossed it anyway. The land they had bled to win, why should they be barred from it? So they kept pushing west, and Britain either could not, or would not truly, stop them. That line that "protected us" was, in reality, almost a scrap of waste paper.\n\nDo you see the absurdity of it? The very colonists who, in the east, cried "no taxation without representation" and bled for "liberty," turned around and crossed that line, driving into my home\'s land. What they fought for was that "no one may touch their money without their consent"; yet they touched my land without ever asking a single word of my consent.\n\nAnd that bill everyone was fighting over, who should pay, by what right, to me was something else entirely. They counted money: the Sugar Act, the Stamp Act, the tea tax. What I saw was another account no one ever asked me about: this war was waged with my land as the stake, the two winners were dividing up my home, and I did not even have the standing to sit at that table.\n\nTheir "liberty" was propped up on my "unfreedom." These two things, from the very first day of this road, were tangled together.',
      },
      deliverGoal: 'N7 story (cross-lens the bill micro-detail = 原住民青年角度: 所有人争的账单在我这儿根本是另一回事/我看见的是从头到尾没人问过我的账/我的土地当赌注两方分我的家我连坐桌资格都没有) — 线划下后殖民者照样越界 (流血打下的地凭什么不让去/继续往西英国没能力或没真心拦/线几乎废纸) + 荒诞 (东边喊无代表不纳税为自由流血的殖民者回头越线开进我家地/他们争没人征同意不能动他们的钱可动我土地从没征我一字同意) + 账单对照 (他们算钱糖税印花税茶税/我看见另一笔没人问我的账) + 他们的自由用我的不自由垫起 (从第一天就缠在一起)',
      engagementHook: '东边喊「没人同意就不能动我的钱」的人，回过头就越过那道线，开进了我家的地——动我的土地，从没征求过我一个字的同意。他们的「自由」，是用我的「不自由」垫起来的。你怎么看这两件缠在一起的事？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-ohio-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得诚实地告诉你：这条路，往后只会更难。\n\n东边那条「征税→抗议→镇压→再征税」的升级机器，一年年转下去。1765 年印花税，1767 年汤森法，1770 年波士顿惨案，1773 年波士顿倾茶，1774 年第一次大陆会议——殖民者一步步走向团结、走向对抗英国。\n\n你或许会想：英国和殖民者打起来，对我们是不是好事？敌人内讧，我们能不能喘口气？\n\n短期里，也许。可你心里那个更深的恐惧，从没消失过。因为不管东边那两方谁赢——\n\n如果英国赢，那道「保护」我的宣言线，本就拦不住西迁的人；\n\n如果殖民者赢，他们更恨那道线，独立之后只会更快、更狠地涌向西边，涌向我家的地。\n\n这就是我这个位置最深的绝望：东边那场关于「自由」的大戏，无论结局如何，对我脚下这片土地来说，都通向同一个方向——洪水般的西迁。这场仗里，没有一方的胜利，是属于我的。',
        en: 'I must tell you honestly: this road only grows harder from here.\n\nIn the east, that escalation machine, "tax, then protest, then crackdown, then tax again," turned on year after year. The Stamp Act in 1765, the Townshend Acts in 1767, the Boston Massacre in 1770, the Boston Tea Party in 1773, the First Continental Congress in 1774, the colonists moving step by step toward unity, toward confrontation with Britain.\n\nYou might think: if Britain and the colonists fall to fighting, is that not good for us? The enemy divided against itself, can we not catch our breath?\n\nIn the short term, perhaps. But the deeper fear in your heart never left. For no matter which of those two eastern sides wins.\n\nIf Britain wins, that Proclamation Line that "protected" me could never stop the settlers anyway.\n\nIf the colonists win, they hate that line all the more, and after independence will only pour west faster and harder, toward my home\'s land.\n\nThis is the deepest despair of my position: that great eastern drama about "liberty," however it ends, leads, for the land beneath my feet, in the same direction, a flood of westward settlement. In this war, no side\'s victory is mine.',
      },
      deliverGoal: 'N8 story (机器视角 + 绝望) — 诚实: 这条路往后只会更难 + 东边升级机器一年年转 (1765 印花税/1767 汤森法/1770 波士顿惨案/1773 波士顿倾茶/1774 第一次大陆会议/殖民者走向团结对抗英国) + 你或许想敌人内讧对我们好事能喘口气 + 短期也许但更深恐惧没消失 (不管两方谁赢: 英国赢宣言线本拦不住西迁/殖民者赢更恨那道线独立后更快更狠涌向我家地) + 最深绝望 (东边关于自由的大戏无论结局对我脚下土地都通向同一方向洪水般西迁/这场仗没一方的胜利是属于我的)',
      engagementHook: '英国赢，那道「保护」我的线本就拦不住人；殖民者赢，他们更恨那道线，会更快涌向我家的地。无论谁赢，对我脚下的土地都通向同一个方向。在一场没有一方的胜利属于你的仗里，你还能盼什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-ohio-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张更大的地图——一张比我家这片地大得多的地图。\n\n就在我们为土地挣扎的同一年，1763 年，地球另一端是清朝乾隆二十八年，所谓盛世的顶点。有意思的是：这个帝国也几乎在同期向西扩张——1750 到 60 年代，它在西北用兵，把广袤的边地纳入了自己的版图。\n\n两个帝国，几乎同时，都在向西，向那些「不在自己原本边界里」的土地伸手。而那些土地上，本来都住着人。\n\n它们各自怎么对待那里原来的人、用什么逻辑把那片地纳进自己的秩序，差别很大，也各有各的争论——我不替你下结论。我只想让你看见一件结构上的事：当一个庞大的力量向外伸展时，那条边界上原本住着的人，处境往往最容易被略过。被一道命令、一纸条约、一次用兵改写命运的人，从来不只是我，也不只在北美。\n\n我说这些，不是为了让自己好受一点。是想让你看清：我脚下发生的事，不是一个孤立的、遥远的悲剧。它是一种更大的东西的一个切片——那个东西，叫扩张;而它的代价，总是先落在那些连发言权都没有的人头上。',
        en: 'Let me step back and show you a larger map, one far larger than this land of my home.\n\nIn the very same year we struggled for our land, 1763, on the other side of the earth it was the 28th year of the Qianlong reign of the Qing dynasty, the peak of what was called a golden age. Here is the interesting thing: that empire was also expanding westward at nearly the same time. In the 1750s and 1760s, it campaigned in the northwest and brought vast borderlands into its own map.\n\nTwo empires, at nearly the same moment, both reaching west, toward lands "not within their own original borders." And on those lands, people already lived.\n\nThis is not to say which empire was better or worse. Setting them side by side, what I see is a colder truth: expanding empires, east or west, are alike in the habit of counting "the land under other people\'s feet" into their own ledgers, and rarely asking whether the original owners of that land agreed. The people whose homes were taken by an order, a treaty, a campaign were never only me, and never only in North America.\n\nI say this not to make myself feel better. I say it so you can see clearly: what happened beneath my feet was not an isolated, distant tragedy. It was one slice of something larger, something called expansion, and its cost always fell first on the people with no say at all.',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§8 中国桥注入 receiving-end) — 退一步更大的地图 + 同一年 1763 清朝乾隆二十八年盛世顶点 + 有意思: 这帝国也几乎同期向西扩张 (1750-60s 西北用兵把广袤边地纳入版图) + 两帝国几乎同时向西向不在自己原本边界里的土地伸手/那些土地本来都住着人 + Rule 0 (不是说哪个帝国更好更坏) + 更冷真相 (扩张中的帝国无论东西方都习惯把别人脚下土地算进自己账本/很少问原本主人愿不愿意/被命令条约用兵划走家园的人从来不只是我不只在北美) + 不是让自己好受是让你看清 (我脚下的事不是孤立遥远悲剧是更大的东西扩张的一个切片/代价总先落在连发言权都没有的人头上)',
      engagementHook: '同一年，地球两端的两个帝国，几乎同时向西，向那些「不在自己原本边界里」、却本来住着人的土地伸手。把它们放一起，我看见的不是谁好谁坏，是一个更冷的真相。你看见的是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'rev-ohio-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一段，有一个真问题，等你来答。\n\n整场「通往独立之路」，标准的讲法是「英国对殖民者」两方的争吵——一场关于「自由」「权利」「无代表不纳税」的伟大斗争。可他们争的那片地，是我的;而我，从头到尾连一句话的发言权都没有。\n\n那么问题来了：当我们今天回头讲这段历史时，「自由」这两个字，到底算谁的胜利？\n\n一种说法：它确实是一场了不起的胜利。「无代表不纳税」「被统治者的同意」，这些原则后来写进了无数国家的政治根基，让千千万万后来的人，少受了专断权力的欺负。一个伟大的开端，不该因为它有盲区，就被一笔抹掉。\n\n另一种说法：这场以「自由」为名的胜利，从第一天起就有它算不进去的人。它高举「同意」，却从没征求过我对我自己土地的同意;它说「人人」有权利，却没把我、没把被奴役的人、没把女性算进那个「人人」。一个把一部分人的家园当垫脚石的「自由」，配不配只被记成光明的一面？\n\n两边都站得住。你怎么看？想 30 秒，写下来。',
        en: 'Having walked this stretch of mine, there is a real question waiting for you.\n\nThe whole "road to revolution" is told, in the standard version, as a quarrel between two sides, Britain and the colonists, a great struggle over "liberty," "rights," "no taxation without representation." But the land they fought over was mine; and I, from start to finish, had not so much as one word of a say.\n\nSo here is the question: when we look back and tell this history today, whose victory is the word "liberty," exactly?\n\nOne view: it truly was a remarkable victory. "No taxation without representation," "the consent of the governed", these principles were later written into the foundations of countless nations, sparing millions of later people the bullying of arbitrary power. A great beginning should not be wiped away just because it had blind spots.\n\nThe other view: this victory in the name of "liberty" had, from the first day, people it could not count in. It held up "consent," yet never asked for my consent to my own land; it said "all men" have rights, yet did not count me, the enslaved, or women into that "all." A "liberty" that used part of humanity\'s homeland as a stepping-stone, does it deserve to be remembered only as the bright side?\n\nBoth sides stand. What do you think? Take thirty seconds, and write it down.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 我们今天回头讲这段历史「自由」算谁的胜利 (整场通往独立之路标准讲法英国对殖民者两方争吵关于自由权利无代表不纳税/可他们争的地是我的我连一句话发言权都没有) / 一种说法 (确实了不起的胜利/无代表不纳税被统治者同意写进无数国家政治根基/让后来千千万万人少受专断权力欺负/一个伟大开端不该因有盲区一笔抹掉) / 另一种说法 (以自由为名的胜利从第一天就有算不进去的人/高举同意却没征我对我自己土地的同意/说人人有权利没把我被奴役者女性算进那个人人/一个把一部分人家园当垫脚石的自由配不配只记成光明一面) / 两边都站得住 / 想 30 秒',
      engagementHook: '它把「同意」举得很高，却从没征求过我对我自己土地的同意。一个伟大的开端，能不能因为有盲区就被抹掉？一个有盲区的自由，又配不配只被记成光明的一面？两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'rev-ohio-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一段——一个没有名字的青年，一片养了祖辈无数代的土地，一场用我的地当赌注、却从没问过我一句的大仗，你会怎么评价这个被所有人略过的位置？\n\n这一遍，你听到的是那个被忽略的第三方的声音。请你记住：在最常见的讲法里，连这个声音都是没有的。你能听到它，本身就已经是一种校正。\n\n可这只是一边。这个故事里，还有别人在说话，而且他们说的，未必没有道理。那个坐在伦敦、手里拿着一本他觉得逻辑挑不出错的账单的 Grenville，会告诉你他只是想公平地把账平掉;那个在波士顿替开枪英军辩护、夹在「自由」和「法治」之间的律师 John Adams，会告诉你他在拼命守住怒火不该越过的那条线。换上他们的视角再走一遍，你会发现他们各有各的难处、各有各的道理——历史从来不是一方全对、一方全错。\n\n最后，把这个故事带回你自己身上。今天的世界里，是不是也有这样一些人:有些重大的事，是在他们的「土地」上、用他们的命运做赌注谈成的，可那张谈判桌前，从来没有他们的座位?当你听一个故事、读一段历史时，你会不会多问一句——这件事里，还有谁，从头到尾没被允许开口?',
        en: 'Having walked this stretch of mine, a youth with no name, a land that fed his ancestors for countless generations, a great war waged with my land as the stake yet never asking me a single word, how would you judge this position everyone passed over?\n\nThis pass, you heard the voice of the ignored third party. Remember: in the most common telling, even this voice is absent. That you could hear it at all is already a kind of correction.\n\nBut it is only one side. Others speak in this story too, and what they say is not without reason. Grenville, sitting in London with a bill in hand whose logic he found flawless, will tell you he only wanted to balance the account fairly; John Adams, the Boston lawyer who defended the soldiers who fired and was caught between "liberty" and "the rule of law," will tell you he strained to hold the line that fury must not cross. Walk it again through their perspectives, and you will find each had his own hardship, his own reason, history is never one side wholly right and the other wholly wrong.\n\nFinally, carry this story back to yourself. In the world today, are there not people like this too: certain great matters settled on their "land," with their fate as the stake, yet at that bargaining table they never had a seat? When you hear a story, or read a stretch of history, will you ask one more question, who else, in this matter, was never allowed to speak at all?',
      },
      deliverGoal: 'N11 close/meta — 评价被所有人略过的位置 (没名字青年/养祖辈无数代土地/用我地当赌注却从没问我一句的大仗) + 你听到的是被忽略第三方声音 (最常见讲法里连这声音都没有/能听到本身是校正) + 但只是一边: Grenville 坐伦敦手握逻辑挑不出错账单 (只想公平平账) + John Adams 替开枪英军辩护夹在自由与法治之间 (拼命守怒火不该越过的线) 换视角再走会发现各有难处各有道理 (历史从不是一方全对一方全错) + transfer (今天世界是不是也有人重大的事在他们土地上用他们命运做赌注谈成可谈判桌前从没他们座位/听故事读历史多问一句这事里还有谁从头到尾没被允许开口)',
      engagementHook: '在最常见的讲法里，连我的声音都是没有的——你能听到它，本身就是一种校正。今天的世界里，是不是也有人，重大的事在他们的「土地」上、用他们的命运谈成，桌前却从没有他们的座位？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator / receiving-end-default) ───
export var lenses = {
  'grenville-actor':                  grenvilleLens,
  'john-adams-mediator':              johnAdamsLens,
  'ohio-valley-native-receiving-end': ohioValleyNativeLens,
};

// receiving-end 优先 (被忽略方优先 = AP DBQ「谁被算进/被排除在自由话语外」必考角度;
// 俄亥俄河谷原住民是这场争土地之战的真正主人、被两个帝国共同忽略的第三方,
// 最能挑战学生「这是英国 vs 殖民者两方之争」的先验)
export var defaultLens = 'ohio-valley-native-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'road-to-revolution-1763',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'grenville-actor': 30, 'john-adams-mediator': 32, 'ohio-valley-native-receiving-end': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-06',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail: 「那张谁也不想付的账单」(the bill) — 三视角各触一次不点破 (Grenville 看成必须平掉的会计工作 N1-N3/N9 / John Adams 看成不能用践踏法治去抵的账·要建什么样的社会 N7 / 原住民青年看成一笔从头到尾没人问过他、用他土地结的账 N7)',
    'defaultLens: ohio-valley-native-receiving-end — 被忽略方优先 (AP DBQ「谁被算进/被排除在自由话语外」必考) + 俄亥俄河谷原住民是争土地之战真正主人、被两帝国共同忽略的第三方,挑战「英国 vs 殖民者两方之争」先验',
    'expectsRealAnswer: ONLY N10 (synthesis/reflection) + N11 (synthesis/closing) per lens = true (2 per lens, 6 total); N1-N9 = false',
    '§8 中国桥注入: john-adams N9 (同意征税 vs 天命征税/中央-地方耗羡拉锯·Rule 0 不排名) + ohio-valley-native N9 (清朝 1750-60s 西北用兵向西扩张 ↔ 英国西扩/扩张代价落在没发言权的人头上·Rule 0 不论优劣)',
    'anti-fab: 原住民青年为合成桥接人物 (无名字/未指定具体民族 Shawnee/Delaware/Ottawa/Seneca/身份写实),N2 用括号短句标 (史料没留这个具体少年每天想什么但他这代人处境被反复记下可确证); Paul Revere 版画 john-adams N6 显式标宣传品非中立记录',
    'scope: 严格止于 1774 第一次大陆会议; Lexington 第一枪/独立宣言/八年战争只交棒不展开 (见 sibling Topic american-revolution-1776)',
    'cultural ban: 全程美国/英国/原住民真实术语 (French & Indian War/Stamp Act/Sons of Liberty/Boston Massacre/Pontiac/Ohio Country/no taxation without representation 等); 中国术语仅 §8 中国桥 N9 例外',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
