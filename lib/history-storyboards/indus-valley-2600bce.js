// ─────────────────────────────────────────────────────────────────
// 印度河流域(哈拉帕)文明 约前2600 — Indus Valley (Harappan) · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (AUTHORING_PIPELINE 第7条): 全程印度河/考古真实术语
//   (Harappa/Mohenjo-daro/Meluhha/Indus script/Great Bath/citadel/Priest-King/
//   Dancing Girl/Ghaggar-Hakra/carnelian/seal),除 §8 同代中国段外绝不用中国特定词。
// 史学警示: 本文明无可读文字,大量「事实」其实是推论。三视角都是身份写实的
//   合成桥接人物 (连国王都没留下名字) — 这个「沉默」本身就是这门课要教的东西。
// 3 lens / 11 nodes each / Rule 0 中性 / expectsRealAnswer 仅 N10+N11。
// 跨 lens micro-detail: 一块石砝码 (standardized weight) — 组织者每天校它/商人靠它
//   做成跨海买卖/普通孩子在井边见有人用它称粮。三视角各触一次,不互相点破。
// §9 中国桥: receiving-end N9 + mediator N9 注入 narrative §8 同代中国对照 (龙山/二里头)。
// ─────────────────────────────────────────────────────────────────

export var organizerLens = {
  id: 'organizer-actor',
  name: 'The Organizer Without a Crown',
  nameCn: '没有王冠的组织者',
  role: 'coordinator-actor',
  perspectiveTag: 'order-without-king',
  icon: '📐',
  description: {
    cn: '约公元前2600年,Mohenjo-daro 城里一个让全城按标准运转的人。他没有名字,也没有王的头衔，因为这座城挖了一百年,至今没找到任何证据证明它有过国王。能确证的只是:街道排成网格、家家通下水道、几十万块烧砖大小一致、几百公里外的城砝码几乎一样重,这些不会自己发生,一定有人在协调。这一遍让你坐进一种陌生的权力:它不靠王宫和军队炫耀,而藏在「让一切都一样」的标准化里。',
    en: 'Around 2600 BCE, a person in Mohenjo-daro who keeps the whole city running to one standard. He has no name and no royal title, because this city has been dug for a hundred years and no proof of any king has ever been found. What is certain is only this: streets laid in a grid, drains running to every house, hundreds of thousands of bricks all one size, weights in cities hundreds of kilometers apart almost identical. These do not happen by themselves; someone must be coordinating. This pass seats you inside a strange kind of power, one that does not boast through palaces and armies, but hides in the standardization that makes everything the same.',
  },
  storyboard: [
    {
      id: 'indus-valley-org-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '约公元前2600年,印度河边一座城,Mohenjo-daro(摩亨佐-达罗)。天刚亮,我已经走在街上。\n\n街道横平竖直,像棋盘一样排成网格。脚下,加了盖板的下水道把全城的脏水悄悄带走。家家有自己的浴室。这套排水之先进,有学者认为在古代世界罕有能及——要再过很久,别的地方才普遍出现可比的城市卫生系统。\n\n我是这座城的「组织者」之一——让一切按标准运转的人。可我不告诉你我的名字,因为没人替我记下来。我也没有王的头衔:这座城挖了一百年,没挖出一座王宫,没挖出一个国王的名字。\n\n这一遍,你坐进我这个位置,看一种你大概没见过的权力——它不靠宫殿和军队,藏在「让全城的砖一样大」这件事里。',
        en: 'Around 2600 BCE, a city by the Indus River, Mohenjo-daro. The sky has just lightened, and I am already walking the streets.\n\nThe streets run straight, crossing in a grid like a chessboard. Beneath my feet, covered drains quietly carry the whole city\'s dirty water away. Every house has its own bathroom. This drainage is so advanced that some scholars think few places in the ancient world could match it; it would be a long time before comparable city sanitation appeared widely elsewhere.\n\nI am one of this city\'s "organizers," a person who keeps everything running to standard. But I will not tell you my name, because no one wrote it down for me. I have no royal title either: this city has been dug for a hundred years, and no palace has come up, no name of any king.\n\nThis pass seats you in my place, to see a power you have probably never met, one that rests not on palaces and armies, but in the fact that every brick in the city is the same size.',
      },
      deliverGoal: 'N1 hook — 约前2600 Mohenjo-daro 网格街道+加盖下水道+家家浴室 (古代世界罕有能及、加 hedge 不下绝对断言) + 组织者自我介绍 (无名/无王衔/挖一百年无王宫无国王名字) + 这一遍视角 (一种不靠宫殿军队、藏在标准化里的陌生权力)',
      engagementHook: '我让全城运转,却没有王冠,连名字都没留下。一种不靠宫殿和军队、只藏在「让砖一样大」里的权力,你能想象它长什么样吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-org-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先看清我每天在管什么。\n\n这座城不是村子自然摊大的——它像是有人先画了图,再照着建。城分两块:高地(citadel),建公共和管理的大建筑;下城(lower town),住人。几乎所有城市用同一规格的烧砖。\n\n我关心的从来不是打仗、不是征服。我关心的是:今年河水会不会淹城?那座大水池(Great Bath)的防水沥青层要不要补?新来的商队带的货,称得对不对?\n\n我手里没有刀光剑影。我有的是度量衡、砖模、排水图。\n\n这就奇怪了:别的早期文明,权力长成国王、宫殿、军队的样子。可在我这儿,权力长成了「砖一样大、水排得走、砝码对得上」。\n\n你先记住这个反差。它是这门课最咬人的那个谜。',
        en: 'First, see clearly what I manage each day.\n\nThis city did not just spread out from a village. It looks as if someone drew a plan first, then built to it. The city has two parts: the citadel (the raised part with big public buildings) and the lower town (where people live). Almost every city uses bricks of one standard size.\n\nWhat I care about is never war, never conquest. I care about this: will the river flood the city this year? Does the waterproof tar layer of the Great Bath need repair? The goods the new caravan brings, do they weigh out correctly?\n\nIn my hands there is no flash of blades. What I have are weights and measures, brick molds, drainage plans.\n\nAnd here is the strange thing: in other early civilizations, power takes the shape of kings, palaces, armies. But for me, power takes the shape of "bricks all one size, water that drains away, weights that match."\n\nKeep that contrast in mind. It is the sharpest riddle of this whole course.',
      },
      deliverGoal: 'N2 setup — 城非自然摊大像先画图再建 (citadel 高地/lower town 下城/同规格烧砖) + 组织者管的是秩序工程不是征服 (防洪/Great Bath 沥青/商队称重) + 手里是度量衡砖模排水图非刀剑 + 反差: 别处权力=国王宫殿军队、这里权力=砖一样大水排得走砝码对得上',
      engagementHook: '我手里没有刀,只有度量衡、砖模和排水图。当一种权力不靠武器、只靠「让一切都一样」时,它还算不算权力?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-org-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我得对你诚实交一个底:你眼前这个「我」,是后人搭出来的一个桥接人。\n\n为什么?因为这座城没有为任何人留下名字——连统治者都没有。我们至今没找到任何文字,告诉我们这座城到底是谁在管。\n\n但「有人在管」这件事,几乎是铁的。你想:几十万块砖大小一致、街道按网格、几百公里外不同城市的砝码几乎完全一样重——这种统一,绝不会自己冒出来。背后一定有某种强力的协调。\n\n问题是,那是什么?是一个国王?一群祭司?一个商人长老的会议?还是一种我们今天根本没有词去称呼的安排?\n\n我们不知道。文字没解读出来,这个「我」就是个黑箱。\n\n所以请你这样读我:我代表的不是某一个确定的人,而是一个被实物逼出来的事实——这座城背后,必须有「组织」。至于那组织长什么样,这门课会一直老老实实地说:我们在猜。',
        en: 'I owe you an honest confession: this "me" before you is a bridging figure that later people built.\n\nWhy? Because this city left no one\'s name behind, not even a ruler\'s. To this day we have found no writing that tells us who actually ran it.\n\nBut that "someone ran it" is almost iron-hard. Think: hundreds of thousands of bricks of one size, streets on a grid, weights in cities hundreds of kilometers apart almost exactly the same. Such uniformity never rises on its own. Behind it there must be some strong coordination.\n\nThe question is, what was it? A king? A body of priests? A council of merchant elders? Or an arrangement we simply have no word for today?\n\nWe do not know. With the writing unread, this "me" is a black box.\n\nSo read me this way: I stand not for one certain person, but for a fact forced out by the objects themselves, that behind this city there must be "organization." As for what that organization looked like, this course will keep saying, honestly: we are guessing.',
      },
      deliverGoal: 'N3 setup/anti-fab — 透明标注「我」是合成桥接人 (城没留任何人名字连统治者都没有/无文字告诉谁在管) + 但「有人在管」近乎铁证 (砖一致/网格/跨城砝码统一不会自己冒出来) + 那是国王?祭司?商会?还是无词可称的安排?不知道 (文字未解读=黑箱) + 我代表被实物逼出的事实「必须有组织」、形态在猜',
      engagementHook: '砝码、砖、网格都在喊「有人在管」,可这座城没留下一个名字告诉我们那是谁。当证据只能逼到「一定有组织」、却说不出是谁,你会停在哪一步?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-org-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n天亮了,你要做今天的第一件事:校砝码。\n\n你手里是一块小小的立方体石砝码。它不起眼,可它是这整座文明里最厉害的东西之一。这套砝码按规整的比例做——小的翻倍、翻倍,大的也对得上——而且在相隔几百公里的不同城市里,几乎一模一样重。\n\n你把它放上秤,核对市场上要用的那一套。差一点,你就得换掉。因为今天会有商队进城,他们带来的货要按这块石头来称;城里收的、分的粮,也要按它来量。\n\n这一刻你忽然明白一件事:你手里没有军队,可你手里这块石头,管着这座城里几乎每一笔交易的公平。\n\n让所有人信「一斤就是一斤」,不靠刀,靠的就是你每天清晨,认真地校准这一块石头。',
        en: 'Now you are me.\n\nThe sky has lightened, and your first task today is to check the weights.\n\nIn your hand is a small cube of stone, a weight. It looks like nothing, yet it is one of the most powerful things in this whole civilization. This set of weights is made in neat ratios: the small ones double and double, the large ones match up too, and in cities hundreds of kilometers apart they weigh almost exactly the same.\n\nYou set it on the balance and check it against the set the market will use. If it is off even a little, you must replace it. Because today a caravan will enter the city, and the goods they bring will be weighed by this stone; the grain the city collects and shares out will be measured by it too.\n\nIn this moment you suddenly understand something: you have no army in your hand, but the stone in your hand governs the fairness of nearly every trade in this city.\n\nTo make everyone trust that "a pound is a pound" needs no blade. It needs only you, each early morning, carefully calibrating this one stone.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak + ANCHOR cross-lens 第一触 — 校砝码 (立方体石砝码/按规整比例翻倍/跨城几乎同重) + 放秤上核对要换掉差的 + 今天商队进城货按它称、城里粮按它量 + 顿悟: 没军队但这块石头管全城交易公平 + 「让所有人信一斤就是一斤不靠刀靠每天校这块石头」',
      engagementHook: '我手里没有军队,只有一块小石头——可它管着全城每一笔买卖公不公平。一块校准的砝码,凭什么能代替一支军队?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-org-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '校完砝码,你去看城里最特别的一座建筑:大水池(Great Bath)。\n\n它在城的高地上,约12米长,比周围地面低,有阶梯下去。它用烧砖砌,缝里灌了石膏灰浆,外面再裹一层沥青——防水做到这个地步,就为了让水稳稳地留在池子里。\n\n你绕着它走,心里却没底。\n\n因为连你也说不清,它到底是干什么用的。很多人猜它用于某种仪式性的沐浴。但它旁边没有神像,没有祭坛,没有任何「这是给某个神的」的标记。\n\n这就是你这座城最古怪的地方:你们能把一座公共水池的防水做到两千年没人比得上,却没在它身边立起一个让全城跪拜的神。工程做到了极致,信仰却留成了一个谜。\n\n你天天经过它,却答不上一个七岁孩子都会问的问题:这个大池子,到底是用来干什么的?',
        en: 'With the weights checked, you go to look at the city\'s most special building: the Great Bath.\n\nIt sits on the citadel, about twelve meters long, lower than the ground around it, with steps going down. It is laid in fired brick, the joints filled with gypsum mortar, then wrapped in a layer of tar outside. Waterproofing taken to this degree, only so the water will sit steady in the pool.\n\nYou walk around it, and yet your heart is unsure.\n\nBecause even you cannot say plainly what it is for. Many guess it was used for some ritual bathing. But beside it there is no idol, no altar, no mark at all that says "this is for a certain god."\n\nThis is the strangest thing about your city: you can waterproof a public pool so well that no one will match it for two thousand years, yet you have not raised beside it a god for the whole city to kneel to. The engineering is taken to its peak, while the faith is left as a riddle.\n\nYou pass it every day, yet you cannot answer a question even a seven-year-old would ask: what, exactly, is this great pool used for?',
      },
      deliverGoal: 'N5 story — Great Bath 大水池 (高地/约12米/低于地面有阶梯/烧砖+石膏灰浆+沥青防水) + 组织者也说不清用途 (猜仪式性沐浴但旁边无神像无祭坛无标记) + 最古怪: 防水两千年无人比却没立全城跪拜的神 (工程极致信仰成谜) + 答不上七岁孩子都会问的「这池子干什么用」',
      engagementHook: '我们能把一座水池防水做到两千年没人比得上,却没在它旁边立一个全城跪拜的神。一个把工程做到顶、却把信仰留成谜的城,你怎么读它?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-org-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '下午,商队进城了。你要去验他们的货。\n\n他们带来的,是这座文明的招牌:用红玉髓(carnelian)磨成、还蚀刻出白色花纹的珠子——这种手艺是印度河的招牌,别处少见;象牙;一卷卷棉布(这里是世界最早种棉、织棉的地方之一)。\n\n你拿起一枚方形的皂石印章(seal)。上面刻着一头动物,常是一种独角兽样子的牛,旁边一行符号。\n\n商人用它在货物的泥封上盖个章,证明这批货是谁的——有点像今天的签名或商标。\n\n可你盯着那行符号,心里一沉:你认得这是「字」,你们天天在用,可你说不出它念什么、什么意思。这套文字,后来连四千年后的人也读不懂。\n\n你忽然意识到一件让人发凉的事:你们把最要紧的东西写下来了,却没有一句话,能让很久以后的人听见。你们能让货物说清归属,却没法让自己,对未来说一句话。',
        en: 'In the afternoon, the caravan enters the city, and you go to inspect their goods.\n\nWhat they bring is this civilization\'s signature: beads ground from carnelian and etched with white patterns, a craft that is the Indus\'s signature, rarely seen elsewhere; ivory; rolls of cotton cloth (this is one of the earliest places in the world to grow and weave cotton).\n\nYou pick up a square steatite seal (steatite is a soft stone). On it is carved an animal, often a kind of unicorn-like bull, and beside it a row of signs.\n\nThe merchant presses it into the clay seal of a shipment, to show whose goods these are, a little like a signature or a trademark today.\n\nBut as you stare at that row of signs, your heart sinks: you know this is "writing," you use it every day, yet you cannot say how it is read or what it means. This script, even people four thousand years later cannot read.\n\nYou suddenly grasp something that runs cold: you wrote down the things that mattered most, yet not one sentence can be heard by people long after. You can make goods say whose they are, but you cannot say a single word, yourselves, to the future.',
      },
      deliverGoal: 'N6 story — 商队进城验货 (招牌外销品: carnelian 红玉髓蚀刻珠/象牙/棉布世界最早种棉之一) + seal 方形皂石印章 (刻动物常独角兽样牛+一行符号/泥封盖章证归属像签名商标) + Indus script 你认得是字天天用却说不出念什么 (四千年后也读不懂) + 发凉的领悟: 写下最要紧的东西却没一句能被未来听见',
      engagementHook: '我们把最要紧的东西写下来了,却没有一句话能让四千年后的人读懂。一个文明留下了文字,却没法对未来说一句话——这是它的本事,还是它的孤独?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-org-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '入夜,你站在高地上,往整座城看。\n\n你看见了你们做成的一切:网格街道、加盖下水道、统一的砖、对得上的砝码、做到极致的大水池、远销两河的红玉髓珠。这是同时代地球上最会规划、最讲卫生的城市之一。\n\n可这一夜,我想让你看见你们「没有」的东西——挖了一百年,始终没挖出来的东西:\n\n没有一座王宫。没有一座把全城压在脚下的独大神庙。没有炫耀某个君主的巨像、王陵、纪功碑——没有人留下「看,这是我建的」。也几乎没有大规模战争的痕迹:没有成排的兵器堆,没有屠城的尸骨层。\n\n这份「缺失」的清单,越列越长。\n\n于是一个问题压上你心头,它会跟着你一辈子:一个文明,要组织起几十万人、统一度量衡、修出全城排水,真的非得有一个坐在顶端发号施令的王吗?还是说,你们这种「让一切都一样」,本身就是另一种我们不熟悉的统治?',
        en: 'At nightfall you stand on the citadel and look out over the whole city.\n\nYou see all you have made: the grid streets, the covered drains, the standard bricks, the matching weights, the Great Bath taken to its peak, the carnelian beads sold as far as Mesopotamia. This is one of the best-planned and most sanitary cities on earth in its time.\n\nBut tonight, I want you to see what you do not have, what a hundred years of digging has never turned up:\n\nNo palace. No single great temple pressing the whole city beneath its feet. No giant statue, royal tomb, or monument boasting of some ruler; no one left behind "look, this is what I built." And almost no trace of large-scale war: no rows of stacked weapons, no layers of massacred bones.\n\nThis list of "what is missing" grows longer and longer.\n\nAnd so a question presses on your heart, one that will follow you all your life: to organize hundreds of thousands of people, unify weights and measures, and build drainage for a whole city, must there truly be a king at the top giving orders? Or is your way of "making everything the same" itself another kind of rule we are not used to?',
      },
      deliverGoal: 'N7 story (缺失清单核心) — 高地俯瞰你们做成的一切 (网格/下水道/统一砖/砝码/Great Bath/远销两河红玉髓珠=同代最会规划最讲卫生) + 但「没有」的清单挖一百年没挖出: 无王宫/无独大神庙/无君主巨像王陵纪功碑 (没人留「这是我建的」)/几乎无大战痕迹 (无兵器堆无尸骨层) + 终身之问: 组织几十万人统一度量衡修排水非得有坐顶端的王吗?还是标准化本身就是另一种统治',
      engagementHook: '我们造出了同时代最会规划的城,却挖了一百年都没挖出一座王宫。组织几十万人、统一度量衡、修出全城排水,一定要有一个坐在顶端的王吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-org-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你以为这样的城会一直办下去。它没有。\n\n你这一生看不到结局,但我替你把后来的事说了。\n\n大约从公元前1900年起,事情慢慢不对了。不是一夜陷落,没有大屠杀,没有敌军破城。是季风减弱、雨水变少;作为生命线之一的 Ghaggar-Hakra(加格尔-哈克拉)古河道,慢慢干涸;可能还叠加洪水改道、远方贸易萎缩。\n\n于是城市一片片被悄悄放弃。人们收拾东西,往东走,散成更小的村庄和农庄。你们那套了不起的本事——统一的砝码、网格的城、读不懂的印章文字——一起退场,慢慢失传。\n\n这就是反常的地方:别的文明常亡于一场大战、一次征服。你们这座城,是「淡出」的,不是「蒸发」的。\n\n你最骄傲的那套秩序,没有被谁打败。它只是,慢慢没人再照着做了。',
        en: 'You think a city like this will go on forever. It does not.\n\nYou will not see the end in your lifetime, but I will tell you what came after.\n\nFrom about 1900 BCE, things slowly went wrong. Not a fall in one night, no massacre, no enemy breaking the walls. The monsoon (the season of heavy rains) weakened, the rains thinned; the Ghaggar-Hakra, an old river that was one of the lifelines, slowly dried up; perhaps floods shifting course and distant trade shrinking piled on as well.\n\nAnd so the cities were quietly abandoned, one patch at a time. People packed their things, walked east, and scattered into smaller villages and farmsteads. Your remarkable skills, the standard weights, the grid city, the unread seal-script, all left the stage together, and slowly were lost.\n\nThis is the strange part: other civilizations often die in a great war, a single conquest. Your city faded out; it did not vanish.\n\nThe order you were proudest of was not defeated by anyone. It is only that, slowly, no one followed it anymore.',
      },
      deliverGoal: 'N8 story (衰落) — 你以为城会一直办下去但没有 + 约前1900起慢慢不对 (不是一夜陷落无屠杀无破城: 季风减弱雨变少/Ghaggar-Hakra 古河道干涸/可能叠加洪水改道贸易萎缩) + 城一片片被悄悄放弃人东迁散成小村农庄 + 砝码/网格城/印章文字一起退场失传 + 反常: 别处亡于大战征服你们是「淡出」不是「蒸发」+ 最骄傲的秩序没被打败只是慢慢没人再照做',
      engagementHook: '别的文明常亡于一场大战,我们这座城却是慢慢「淡出」的——没人打败它,只是慢慢没人再照着做。一套秩序,会不会不是被打垮的,而是被「遗忘」的?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-org-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步,给你看一张更大的地图——一张你活着的时候根本看不见的地图。\n\n就在你这座城最鼎盛的那几百年(约前2600到前1900),地球另一端,黄河、长江流域,正处在另一段故事里:大致是龙山文化晚期(与你这座城同代)、并紧接着进入二里头文化(略晚、约前1900后才兴起)的时段。那里,陶寺一类的大型夯土基址、等级森严的墓葬(有的墓随葬丰厚、有的几乎空手),正一步步把「谁在上面」摆到城市正中——不过那边的早期王权到底成熟到什么程度、传说中的夏是不是信史,学者也还在争。\n\n再往西,尼罗河边的埃及,早已立起法老、金字塔、巨大的神庙——把「谁在上面」刻进了石头里。\n\n几座文明,差不多同一个时候,却长出几种完全不同的「权力长相」:埃及和黄河边把统一挂在一个看得见的王身上;你这边同样达成了惊人的统一——砖一样大、砝码一样重——却看不见那个王。\n\n请注意,这不是排名。不能说「你们没有王所以更先进、更自由」,也不能说「那边有王所以更成熟、更落后」。这只是同一时段,地球上几种「如何把很多人组织起来」的不同方案。它们各自的盲区、各自的智慧,我们到今天,都还没看全。',
        en: 'Let me step back and show you a larger map, one you could never have seen while you were alive.\n\nIn the very centuries when your city was at its height (about 2600 to 1900 BCE), on the other side of the earth, along the Yellow and Yangtze rivers, another story was running: roughly the late Longshan culture (contemporary with your city), leading into the slightly later Erlitou culture (which rose only from about 1900 BCE). There, large rammed-earth foundations of the Taosi kind and steeply ranked tombs (some richly furnished, some nearly empty-handed) were step by step setting "who is on top" right at the center of the city, though just how developed that early kingship was, and whether the legendary Xia was historical, scholars still debate.\n\nFurther west, along the Nile, Egypt had long raised pharaohs, pyramids, and huge temples, carving "who is on top" into stone.\n\nSeveral civilizations, at about the same time, grew several completely different "faces of power": Egypt and the Yellow River hung their unity on one visible ruler; your side reached an astonishing unity too, bricks one size, weights one weight, yet without a ruler in sight.\n\nNote: this is not a ranking. One cannot say "you had no king, so you were more advanced and free," nor "they had a king, so they were more mature or more backward." It is only several different solutions, in the same era, to "how to organize many people." The blind spots of each, the wisdom of each, even today, we have not fully seen.',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§8 中国桥) — 你城鼎盛 (约前2600-前1900) 对应龙山晚期 (同代)、紧接进入略晚的二里头 (约前1900后才兴起) + 主要证据锚到陶寺式大型夯土基址+等级化墓 (随葬丰厚 vs 几乎空手)、二里头明确标更晚 + 对称诚实: 中国侧早期王权成熟度/夏是否信史学者也在争 + 加埃及 (法老/金字塔/神庙) 凑四方对照 + 几种「权力长相」(埃及+黄河靠看得见的王/你这边同样统一却看不见王) + Rule 0 不排名/各自盲区智慧今天没看全',
      engagementHook: '同一个时候,黄河边的城正把「谁在上面」摆到正中,我这座城却看不见一个王,却同样做到了砖一样大、砝码一样重。把这两种城放一起看,你看见的是高下,还是两种不同的活法?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-org-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,有一个真问题等你来答:我这座城,到底有没有一个看不见的「王」?两种说法都站得住,你来称。\n\n一种说法:它可能是早期复杂社会里最平等的一个。挖了一百年,没有王宫,没有君主巨像,房子大小差得不多——也许它真的就是靠某种集体的、分散的协调办起来的,根本不需要一个坐在顶端的人。「复杂」不一定非得配一个「统治阶级」。\n\n另一种说法:「没找到精英」不等于「没有精英」。也许权力就藏在我们今天读不出来的形式里——藏在宗教里、藏在某些家族里、藏在那套读不懂的印章文字里。砝码能告诉你「有规矩」,可它从来没告诉你「谁定的规矩」。\n\n这两边,不是「有王」对「没王」那么简单。它逼你面对一件更难的事:当一个文明不能为自己说话,我们能凭「没挖到」,断定一样东西「不存在」吗?\n\n这是一所学校里 AP 老师会反复让学生掂量的难题。你怎么看?想30秒,写下来。两边都站得住。',
        en: 'Having walked my whole life, a real question waits for you: did my city have an unseen "king" or not? Both views stand. You do the weighing.\n\nOne view: it may have been one of the most equal of early complex societies. A hundred years of digging, no palace, no giant ruler-statue, houses not far apart in size. Perhaps it truly ran on some collective, scattered coordination, with no need at all for a man at the top. "Complex" need not come with a "ruling class."\n\nThe other view: "no elite found" is not "no elite." Perhaps power hid in forms we cannot read today, in religion, in certain families, in that unreadable seal-script. Weights can tell you "there were rules," but they never tell you "who made the rules."\n\nThese two are not as simple as "had a king" against "had none." They force you to face a harder thing: when a civilization cannot speak for itself, can we, from "not dug up," conclude a thing "did not exist"?\n\nThis is the hard problem an AP teacher at a school will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 这座城有没有看不见的王 + 一种说法 (可能最平等的早期复杂社会/无王宫无巨像房子差不多/复杂不必配统治阶级) / 另一种说法 (没找到精英≠没有精英/权力藏在读不出的形式: 宗教/家族/印章文字/砝码告诉有规矩没告诉谁定规矩) + 更难的事: 文明不能为自己说话能否凭「没挖到」断定「不存在」(absence of evidence) + neutral school name (AP 老师) + 想30秒两边都站得住',
      engagementHook: '挖了一百年没挖到王——这说明它「没有王」,还是只说明它的王藏在我们读不出来的地方?「没找到」和「不存在」之间,差着什么?你的30秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'indus-valley-org-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的,是「组织者」这一边的声音——一个站在秩序和工程角度看这座城的人。\n\n请记住:这只是一边。我满脑子是砝码、砖模、排水图,我习惯把这座城讲成一台精密的机器。可一台机器里,人的喜怒、人的信仰、人的不公,我未必看得见。\n\n这一遍里,有人始终没开口。那个走西去两河、把我们的红玉髓珠卖到 Sargon 码头的商人——他脚踩两个文明,他会怎么看我们这座「没有王」的城?还有那个住在下城、用着先进下水道、却连自己城里有没有国王都说不清的普通孩子——他活在我管的这套秩序里,他过得到底好不好?这些,我答不上来。\n\n最后留一样东西给你。还记得今天清晨,我认真校准的那一块小小的石砝码吗?\n\n换一个视角再走一遍,你会从另一个人的手里,再见到它一次。到那时,这块石头对你,就不只是「公平」两个字了。',
        en: 'What you just heard was the voice of one side, the "organizer\'s," a person who sees this city from the angle of order and engineering.\n\nRemember: it is only one side. My head is full of weights, brick molds, drainage plans, and I am used to telling this city as a precise machine. But inside a machine, the joys and angers of people, the faiths of people, the injustices of people, I may not see them.\n\nIn this pass, some never spoke. The merchant who went west to Mesopotamia and sold our carnelian beads to Sargon\'s docks, who stands with a foot in two civilizations, how would he see this "kingless" city of ours? And the ordinary child of the lower town, who uses the advanced drains yet cannot even say whether his city has a king, who lives inside the very order I manage, is he actually well or not? These, I cannot answer.\n\nAnd one last thing to leave with you. Do you remember the small stone weight I carefully calibrated this morning?\n\nWalk this through once more from another perspective, and you will meet it again, in someone else\'s hand. By then, this stone will be more to you than the single word "fairness."',
      },
      deliverGoal: 'N11 close/meta — 你听的是组织者一边 (站秩序工程角度/习惯把城讲成精密机器但看不见人的喜怒信仰不公) + 还没听到: 走两河卖红玉髓珠到 Sargon 码头的商人 (脚踩两文明会怎么看没有王的城) + 住下城用先进下水道却说不清有没有国王的普通孩子 (活在我管的秩序里过得好不好) + 暗示石砝码会从另一视角再见一次 (不直接解释 echo)',
      engagementHook: '我习惯把这座城讲成一台精密的机器,可机器里人的喜怒、信仰、不公,我未必看得见。你听完我这一边,最想去问那个走两河的商人、那个住下城的孩子什么?',
      expectsRealAnswer: true,
    },
  ],
};

export var merchantLens = {
  id: 'meluhha-merchant-mediator',
  name: 'The Meluhha Merchant',
  nameCn: '走两河的 Meluhha 商人',
  role: 'between-two-worlds-mediator',
  perspectiveTag: 'trader-across-the-sea',
  icon: '⚓',
  description: {
    cn: '约公元前2400年,一个从印度河的城市出发、把货卖到美索不达米亚(两河)的商人。他没有名字,但他做的买卖是硬证据:两河的楔形文字泥板里,真的提到一个叫 Meluhha(美卢哈)的远方之地,学界普遍认为指的就是印度河流域;阿卡德国王 Sargon 的铭文夸口说,来自 Meluhha 的船泊在他的码头。这一遍让你站在两个文明中间，你见过两河高耸的塔庙和国王的巨像,回头看自己的城,奇怪,我们没有那种东西,可我们的下水道、我们的砝码,人家比不了。',
    en: 'Around 2400 BCE, a merchant who sets out from a city of the Indus and sells his goods to Mesopotamia. He has no name, but the trade he does is hard evidence: Mesopotamian cuneiform tablets really do mention a distant land called Meluhha, which scholars widely take to mean the Indus Valley; the Akkadian king Sargon\'s inscription boasts that ships from Meluhha lay at his docks. This pass puts you between two civilizations: you have seen Mesopotamia\'s towering temples and giant royal statues, and looking back at your own city, you find it strange, we have nothing like that, yet our drains, our weights, no one else can match.',
  },
  storyboard: [
    {
      id: 'indus-valley-mer-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '约公元前2400年。我是一个商人,刚从船上下来,脚踩在两河流域(美索不达米亚)一座港口的码头上。\n\n我从很远的地方来——从印度河边的城市,坐着船,沿海岸,走了很久。\n\n我没有名字给你,因为我的文字没人读得懂。可我做的买卖,是真真切切留了证据的:在这里,两河人的泥板上,记着一个叫 Meluhha(美卢哈)的远方——那说的,就是我的家乡。\n\n我是那个站在两个世界中间的人。我见过这里高耸的塔庙、国王的巨像。我也熟悉我自己的城——奇怪的是,我们那儿,没有这种东西。\n\n这一遍,你坐进我这个位置。你会同时看见两个文明,然后忍不住要问:同样了不起,它们怎么长得这么不一样?',
        en: 'Around 2400 BCE. I am a merchant, just off the ship, my feet on the dock of a port in Mesopotamia.\n\nI come from far away, from a city by the Indus, by ship, along the coast, a long journey.\n\nI have no name to give you, because no one can read my writing. But the trade I do has left real, solid evidence: here, on the Mesopotamians\' clay tablets, is recorded a far-off place called Meluhha, and that is my homeland.\n\nI am the one who stands between two worlds. I have seen the towering temples here, the giant statues of kings. I also know my own city well, and the strange thing is, where I come from, we have nothing like this.\n\nThis pass seats you in my place. You will see two civilizations at once, and then cannot help asking: both so remarkable, how did they grow so unlike each other?',
      },
      deliverGoal: 'N1 hook — 约前2400 商人刚下船踩两河港口码头 + 从印度河城市坐船沿海岸很久 + 无名 (文字没人懂) 但买卖留了硬证据 (两河泥板记 Meluhha 远方=我家乡) + 站两个世界中间 (见过两河塔庙国王巨像/熟悉自己城却没这种东西) + 这一遍同时看两文明: 同样了不起怎么长得这么不一样',
      engagementHook: '我脚踩两个文明:这边有高耸的塔庙和国王巨像,我家乡却一样都没有。两个同样了不起的文明,为什么长得这么不一样?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-mer-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先看清我船上装的是什么,你才懂我为什么走这么远。\n\n我带来的,是印度河的拳头产品。最招牌的,是一种珠子:用红玉髓(carnelian)磨成,还能在上面蚀刻出白色的花纹——这门手艺是印度河的招牌,两河人做不出同样的,所以他们抢着要。还有象牙、棉布、刻着动物的方形印章。\n\n这些不是我吹的。它们真的在两河的 Ur(乌尔)、Susa(苏萨)这些地方的墓里被挖了出来,年代对得上前2600到前2000。\n\n我跨过的,是一片很大的海和很长的海岸。我家乡那边,有像 Lothal(洛塔)这样靠海的城,可能就是港口、有船坞;有像 Dholavira(多拉维拉)这样靠巨大蓄水池系统活着的城。\n\n所以请你先放下一个误会:我家乡不是一个躲在角落、自己跟自己玩的奇观。它是一个外向的、做大买卖的文明——它的珠子,挂在几千里外、另一个帝国的人脖子上。',
        en: 'First, see clearly what I carry on my ship, so you understand why I travel so far.\n\nWhat I bring is the Indus\'s flagship goods. The most famous is a kind of bead: ground from carnelian and etched with white patterns, a craft that is the Indus\'s signature, which the Mesopotamians cannot make the same way, so they scramble for it. There is also ivory, cotton cloth, and square steatite seals (steatite is a soft stone) carved with animals.\n\nThis is no boast of mine. They really have been dug up from tombs in places like Ur and Susa in Mesopotamia, of dates matching 2600 to 2000 BCE.\n\nWhat I cross is a wide sea and a long coast. Back home there are coastal cities like Lothal, perhaps a port with a dockyard; and cities like Dholavira, living off a vast system of water tanks.\n\nSo set down one misunderstanding first: my homeland is not some wonder hiding in a corner, playing with itself. It is an outward-looking civilization that does big trade, its beads hanging on the necks of people in another empire thousands of kilometers away.',
      },
      deliverGoal: 'N2 setup — 船上装什么 (印度河拳头产品: carnelian 红玉髓蚀刻珠两河做不出抢着要/象牙/棉布/刻动物方形印章) + 硬证据 (真在两河 Ur/Susa 墓里挖出/年代对得上前2600-2000) + 跨大海长海岸 (家乡 Lothal 靠海可能港口船坞/Dholavira 巨大蓄水池) + 放下误会: 不是躲角落的奇观是外向做大买卖的文明 (珠子挂在几千里外另一帝国人脖子上)',
      engagementHook: '我家乡的珠子,挂在几千里外、另一个帝国的人脖子上——它不是躲在角落的奇观,是个做大买卖的文明。一个四千年前的文明能做这么远的生意,靠的是什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-mer-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我得对你说句实话:你眼前这个「我」,是后人搭的一个桥接人。\n\n为什么?因为我家乡的文字至今没人读得懂,我们没给自己留下一句话。没有哪块泥板写着「我,某某商人,某年去了两河」。\n\n但「有人在做这趟买卖」是铁证。证据有两头:一头在两河——他们的泥板、他们墓里的印度河珠子;一头在我家乡——靠海的港口城、外销的红玉髓。两头一对,中间就必须有一个像我这样的人,把货从这头运到那头。\n\n更硬的一笔证据,带着一个真实的名字:阿卡德的国王 Sargon(萨尔贡,约前2334到前2284),留下铭文夸口说——来自 Meluhha、Magan、Dilmun 的船,泊在我阿卡德的码头。\n\n听清楚:Sargon 是真人,这句铭文是真的。我,是被这两头证据逼出来的那个中间人。我没有名字,可我走过的这条海路,是确确实实存在过的。',
        en: 'I owe you an honest word: this "me" before you is a bridging figure later people built.\n\nWhy? Because my homeland\'s writing still cannot be read; we left ourselves not one sentence. No tablet says "I, such-and-such merchant, went to Mesopotamia in such a year."\n\nBut that "someone did this trade" is iron-hard. The evidence has two ends: one in Mesopotamia, their tablets, the Indus beads in their tombs; one in my homeland, the coastal port cities, the carnelian sold abroad. Match the two ends, and in the middle there must be a person like me, carrying goods from this end to that.\n\nHarder still is one piece of evidence with a real name: Sargon of Akkad (about 2334 to 2284 BCE) left an inscription boasting that ships from Meluhha, Magan, and Dilmun lay at his dock in Akkad.\n\nHear it clearly: Sargon was a real man, that inscription is real. I am the middleman forced out by these two ends of evidence. I have no name, but the sea road I traveled truly, certainly existed.',
      },
      deliverGoal: 'N3 setup/anti-fab — 透明标注「我」是合成桥接人 (家乡文字没人读懂没留一句话/没泥板写某商人某年去两河) + 但「有人做这趟买卖」铁证 (两头: 两河泥板+墓里印度河珠 / 家乡港口城+外销红玉髓/中间必须有人运货) + 更硬证据带真名: Sargon 阿卡德国王 (约前2334-2284) 铭文夸口 Meluhha/Magan/Dilmun 之船泊码头 + 「Sargon 真人铭文真/我是被两头证据逼出的中间人」',
      engagementHook: '我没留下名字,可两河国王 Sargon 的铭文真的写着「Meluhha 的船泊在我码头」。当一个人自己一句话都没留下,我们却能靠两头的物证,确信他真的存在过——这够不够算「历史」?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-mer-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。船靠了两河的码头,你要去谈一笔买卖。\n\n你从行囊里掏出今天最要紧的工具——不是刀,是一块小小的立方体石砝码。\n\n这是我家乡的标准砝码。它最神的地方:几百公里外不同的城,用的「一份重」几乎完全一样。所以无论我从哪座城出发,我称出来的分量,买家都认。\n\n两河人有他们自己的秤、自己的算法。你把你的砝码放上去,跟他们的核对。一来一回,双方都信了:这批红玉髓珠,该换多少他们的银子、铜、油。\n\n这一刻你忽然懂了一件事:我能把生意做到几千里外、做给一个语言不通的帝国,靠的不是哪个国王给我撑腰。靠的,是我家乡那套「在哪儿都一样」的砝码。\n\n它不响、不亮、不威风。可正是它,让一个陌生人,愿意跟另一个陌生人,隔着大海做买卖。',
        en: 'Now you are me. The ship has docked in Mesopotamia, and you go to strike a deal.\n\nFrom your pack you take out today\'s most important tool, not a blade, but a small cube of stone, a weight.\n\nThis is my homeland\'s standard weight. Its most marvelous quality: cities hundreds of kilometers apart use a "one-portion weight" that is almost exactly the same. So no matter which city I set out from, the weight I measure is one the buyer will accept.\n\nThe Mesopotamians have their own scales, their own reckoning. You set your weight on it and check it against theirs. Back and forth, both sides come to trust it: this batch of carnelian beads, how much of their silver, copper, oil it should exchange for.\n\nIn this moment you suddenly understand: I can do business thousands of kilometers away, with an empire whose language I cannot speak, and it rests on no king backing me. It rests on my homeland\'s set of weights that are "the same everywhere."\n\nIt makes no sound, no shine, no show of force. Yet it is exactly this that lets one stranger be willing to trade, across a sea, with another stranger.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak + ANCHOR cross-lens 第二触 — 船靠两河码头谈买卖 + 掏出最要紧工具不是刀是立方体石砝码 (家乡标准砝码/几百公里外不同城一份重几乎一样/从哪座城出发买家都认) + 跟两河人的秤核对双方都信 (红玉髓珠换多少银铜油) + 顿悟: 做到几千里外语言不通的帝国靠的不是国王撑腰是「在哪儿都一样」的砝码 + 「它不响不亮却让陌生人愿隔海做买卖」',
      engagementHook: '我能跟一个语言不通的帝国隔海做买卖,靠的不是哪个国王给我撑腰,是一块「在哪儿都一样」的砝码。让两个陌生人愿意交易的,到底是权力,还是信任?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-mer-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '买卖谈成了,你在两河多留了几天。你忍不住四处看——看着看着,心里越来越不是滋味。\n\n两河这边,处处都在喊「谁在上面」。城中央,矗着高高的塔庙(ziggurat),像一座人造的山,压着整座城。国王立着自己的巨像、刻着自己的纪功碑——Sargon 这样的国王,恨不得让每块石头都写上「这是我打下来的」。\n\n你看着这些,第一反应不是羡慕,是困惑。\n\n因为你回头想自己的城:我们没有这种东西。我们没有一座压着全城的大神庙,没有一个国王的巨像,没有谁在石头上喊「看我」。\n\n那一刻,一个念头第一次清清楚楚地撞上你:难道,一定要有一个高高在上的王、一座高高在上的神庙,一座城才办得起来吗?\n\n我家乡没有这些,可我家乡的城,一样整齐、一样富、一样能把珠子卖到这儿来。',
        en: 'The deal is struck, and you stay a few more days in Mesopotamia. You cannot help looking around, and the longer you look, the less easy your heart feels.\n\nHere in Mesopotamia, everywhere cries "who is on top." At the city\'s center stands a towering temple, a ziggurat, like a man-made mountain pressing down on the whole city. The king raises his own giant statue, carves his own victory monuments; a king like Sargon would have every stone say "this I conquered."\n\nLooking at all this, your first reaction is not envy. It is puzzlement.\n\nBecause you think back to your own city: we have nothing like this. We have no great temple pressing the whole city, no giant statue of a king, no one crying "look at me" on the stone.\n\nIn that moment, for the first time, a thought strikes you clearly: must there be a king high above, a temple high above, for a city to be run at all?\n\nMy homeland has none of these, yet my homeland\'s cities are just as orderly, just as rich, just as able to sell beads all the way here.',
      },
      deliverGoal: 'N5 story (对照) — 两河多留几天四处看心里不是滋味 + 两河处处喊「谁在上面」(城中央 ziggurat 塔庙像人造山压全城/国王立巨像刻纪功碑/Sargon 恨不得每块石头写「这是我打下来的」) + 困惑非羡慕 + 回想自己城: 没有压全城大神庙没国王巨像没人喊看我 + 念头第一次清楚撞上: 一定要有高高在上的王和神庙城才办得起来吗 + 家乡没这些却一样整齐富能卖珠子来',
      engagementHook: '两河的国王恨不得每块石头都写上「这是我打下来的」,我家乡却没有一座国王巨像。一座城,真的非得有一个高高在上的王才办得起来吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-mer-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可我也得拦住你,别太快下结论,把我家乡想成天堂。\n\n说一句实话:这一段,是这个 lens 替你具象出来的画面。史料没逐字记下任何一个 Meluhha 商人心里在想什么——我们家乡没留下文字,我此刻的「想法」,是坐在我这个位置上,你能合理猜到的,不是档案里抄下来的原话。\n\n这点诚实很重要,因为它正是我家乡最大的难处:我能给你看我带的货、我走的海路、两河泥板上提到的我们;我没法给你看我们自己怎么想、信什么、城里有没有不公平。\n\n两河人至少把国王的名字、神的名字、打过的仗,刻在了石头上,留给了后人。我们呢?我们把砝码做得天衣无缝,把下水道修得领先两千年,却没留下一句能让你听懂的话。\n\n所以我能替家乡骄傲它「做成了什么」,却没法替它说清「它到底是个什么样的社会」。这一半,是亮的;另一半,是哑的。',
        en: 'But I must hold you back too: do not conclude too fast and picture my homeland as paradise.\n\nAn honest word: this part is an image this lens draws for you. The record does not write down, word for word, what any Meluhha merchant was thinking. We left no writing back home; what I "think" in this moment is what you can reasonably guess, sitting in my place, not words copied from an archive.\n\nThis honesty matters, because it is exactly my homeland\'s greatest difficulty: I can show you the goods I carry, the sea road I take, the mention of us on Mesopotamian tablets; I cannot show you how we ourselves thought, what we believed, whether there was injustice in the city.\n\nThe Mesopotamians at least carved their kings\' names, their gods\' names, the wars they fought, into stone, and left them to later people. And us? We made our weights seamless, built our drains two thousand years ahead, yet left not one sentence you could understand.\n\nSo I can be proud of what my homeland "made," but I cannot say plainly "what kind of society it actually was." This half is bright; the other half is mute.',
      },
      deliverGoal: 'N6 story/anti-fab — 拦住别太快把家乡想成天堂 + anti-fab 框架 (这段 lens 替你具象/史料没逐字记任何 Meluhha 商人心里/家乡没文字我的想法是你能合理猜到不是档案原话) + 诚实=家乡最大难处 (能看货/海路/两河泥板提到我们/看不到我们怎么想信什么有无不公) + 两河至少把国王神战争刻石留后人/我们砝码下水道领先却没留一句懂的话 + 一半亮一半哑',
      engagementHook: '我能给你看我家乡做成了什么,却没法告诉你它到底是个什么样的社会——这一半是亮的,另一半是哑的。一个不能为自己说话的文明,你愿意相信它是天堂吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-mer-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '在两河待久了,你看出一件更深的事:这两个文明,连「权力靠什么撑」都不一样。\n\n两河这边,统一靠的是看得见的力量:国王、军队、神庙。Sargon 靠打仗,把一座座城收进自己的帝国;他的权威,写在征服里、写在巨像里。\n\n我家乡呢?我们一样达成了惊人的统一——你已经亲手用过那块砝码了,几百公里外的城,砖一样大、秤一样准。可这种统一,我们看不见一个坐在顶端的王,看不见成排的军队,几乎看不见大仗的痕迹。\n\n你站在两河的码头上,被这两种「统一」夹在中间,忍不住想:同样是让很多人、很多城步调一致,一边靠的是「征服」,一边靠的是「标准」。\n\n靠刀剑统一,和靠砝码统一,撑得一样久吗?哪一种,更结实?这个问题,你先揣着。我也答不上来——我只是个夹在中间、两边都看见了的商人。',
        en: 'Having stayed long in Mesopotamia, you see something deeper: these two civilizations differ even in "what holds their power up."\n\nHere in Mesopotamia, unity rests on visible force: kings, armies, temples. Sargon, through war, gathered city after city into his empire; his authority is written in conquest, written in giant statues.\n\nAnd my homeland? We too reached an astonishing unity. You have already used that weight with your own hands: cities hundreds of kilometers apart, bricks one size, scales one accuracy. Yet in this unity we see no king at the top, no rows of armies, almost no trace of great war.\n\nStanding on the Mesopotamian dock, caught between these two kinds of "unity," you cannot help thinking: both make many people and many cities move in step, but one rests on "conquest," the other on "standards."\n\nUnity by blade, and unity by weight, do they hold equally long? Which is the sturdier? Carry that question with you. I cannot answer it either. I am only a merchant caught in the middle, who has seen both sides.',
      },
      deliverGoal: 'N7 story (两种统一对照) — 待久看出更深的事: 两文明连「权力靠什么撑」都不一样 + 两河统一靠看得见的力量 (国王军队神庙/Sargon 靠打仗收城进帝国/权威写在征服和巨像里) + 家乡同样惊人统一 (你用过砝码/几百公里外砖一样大秤一样准) 却看不见王看不见军队几乎无大仗痕迹 + 夹在两种统一中间: 一边靠征服一边靠标准 + 靠刀剑统一和靠砝码统一谁更结实 (揣着我也答不上)',
      engagementHook: '一边靠「征服」把很多城拧成一个帝国,一边靠「标准」让很多城步调一致。靠刀剑统一,和靠砝码统一,哪一种更结实、撑得更久?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-mer-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '一趟趟跑下来,我老了。我没看到结局,但我把后来的事讲给你听。\n\n大约从公元前1900年起,我跑了一辈子的这条海路,生意越来越淡。\n\n不是被谁打断的。是我家乡那头出了事:季风减弱、雨水变少,有的河慢慢干了,城市一座座被悄悄放弃,人往东散成了小村。那些做珠子、织棉布、刻印章的城,慢慢没人住了。\n\n货,没了源头;懂行的人,散了;那套让买家放心的统一砝码,也慢慢没人再做了。\n\n于是两河泥板上,提到 Meluhha 的次数越来越少,最后,几乎没人再提起那个远方。\n\n你想想这有多安静:一个曾经把珠子卖到 Sargon 码头的文明,不是被谁征服、被谁烧掉的。它是慢慢断了货、慢慢被人忘了名字的。连我跑了一辈子的这条海路,最后也跟着,一起沉默了。',
        en: 'Trip after trip, I have grown old. I did not see the end, but I will tell you what came after.\n\nFrom about 1900 BCE, the sea road I ran my whole life, the trade grew thinner and thinner.\n\nIt was not cut off by anyone. Something went wrong back home: the monsoon weakened, the rains thinned, some rivers slowly dried, the cities were quietly abandoned one by one, and people scattered east into small villages. The cities that made beads, wove cotton, carved seals, slowly emptied of people.\n\nThe goods lost their source; those who knew the trade scattered; even that unified set of weights that put buyers at ease, slowly, no one made anymore.\n\nAnd so on the Mesopotamian tablets, Meluhha was mentioned less and less, until at last almost no one spoke of that far-off place again.\n\nThink how quiet this was: a civilization that once sold beads to Sargon\'s docks was not conquered, not burned by anyone. It slowly ran out of goods, and slowly had its name forgotten. Even the sea road I ran all my life, at the end, fell silent along with it.',
      },
      deliverGoal: 'N8 story (衰落·商人视角) — 跑老了没看到结局讲后来 + 约前1900起海路生意越来越淡 + 不是被打断是家乡出事 (季风减弱雨变少河干涸/城一座座被悄悄放弃人东散成小村/做珠织布刻印章的城没人住) + 货没源头懂行的人散了统一砝码没人再做 + 两河泥板提 Meluhha 越来越少最后没人再提 + 安静: 不是被征服被烧是慢慢断货慢慢被忘名字/海路也跟着沉默',
      engagementHook: '一个曾经把珠子卖到 Sargon 码头的文明,不是被谁征服、被谁烧掉,而是慢慢断了货、慢慢被人忘了名字。一个文明,会不会就这样安安静静地，从别人的记账里消失?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-mer-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步,把我跑过的世界,摊成一张更大的地图。\n\n就在我家乡最旺、我把珠子卖到两河的那几百年(约前2600到前1900),地球更东边,黄河、长江流域,也有人在把很多人组织起来——大致是龙山文化晚期(与我家乡同代),并紧接着进入略晚的二里头文化(约前1900后才兴起)。\n\n如果我有本事走到那么远,我会看见和两河有点像、又跟我家乡很不一样的东西:陶寺一类的大聚落,有大型夯土基址、有等级分明的墓——有的墓随葬一堆好东西,有的几乎空手。「谁在上面」,正一步步摆到城市的正中——不过那边的早期王权到底成熟到什么程度、传说中的夏是不是信史,学者也还在争,跟我家乡一样,有它说不清的地方。\n\n你看,绕地球一圈,我至少看见了三种「把很多人组织起来」的活法:两河靠国王和神庙、东边靠正在成形的王权和等级、我家乡靠一套看不见王的标准。\n\n这不是比高下——三种都让大批人协作了起来,各自运转了很久。我只是个商人,我没资格替它们排名。我只想让你看见:原来,组织一大群人,从来不止一种办法。',
        en: 'Let me step back and spread the world I traveled into a larger map.\n\nIn the very centuries when my homeland was at its height and I sold beads to Mesopotamia (about 2600 to 1900 BCE), further east on the earth, along the Yellow and Yangtze rivers, people too were organizing many people, roughly the late Longshan culture (contemporary with my homeland), leading into the slightly later Erlitou culture (which rose only from about 1900 BCE).\n\nIf I had been able to travel that far, I would have seen something a little like Mesopotamia, and very unlike my homeland: large settlements of the Taosi kind had big rammed-earth foundations, steeply ranked tombs, some buried with a heap of fine things, some nearly empty-handed. "Who is on top" was step by step being set right at the center of the city, though just how developed that early kingship was, and whether the legendary Xia was historical, scholars still debate, with its own unclear places, just like my homeland.\n\nYou see, all the way around the earth, I have seen at least three ways of "organizing many people": Mesopotamia by king and temple, the east by a forming kingship and rank, my homeland by a set of standards with no king in sight.\n\nThis is no contest of high and low. All three made great numbers of people cooperate, each running a long time. I am only a merchant; I have no standing to rank them. I only want you to see: to organize a great crowd of people, there was never only one way.',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§8 中国桥·商人视角) — 摊成更大地图 + 我家乡最旺那几百年 (约前2600-1900) 地球更东边黄河长江也有人组织很多人=龙山晚期 (同代)、紧接略晚的二里头 (约前1900后才兴起) + 若能走那么远会见到跟两河有点像又跟家乡很不一样的: 陶寺式大聚落大型夯土基址+等级化墓 (随葬丰厚 vs 几乎空手)/「谁在上面」摆城市正中 + 对称诚实: 中国侧早期王权成熟度/夏是否信史学者也在争跟家乡一样有说不清处 + 绕地球见三种活法 (两河靠国王神庙/东边靠成形王权等级/家乡靠看不见王的标准) + Rule 0 不比高下三种都运转很久',
      engagementHook: '绕地球一圈,我至少见过三种「把很多人组织起来」的活法:靠国王神庙、靠正在成形的王权等级、靠一套看不见王的标准。组织一大群人,真的只有一种正确办法吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-mer-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,有个真问题等你来答:站在我这个夹在两边的位置,该怎么看我家乡那套「没有王、却高度统一」的活法?两种说法都站得住。\n\n一种说法:这恰恰是它了不起的地方。它证明了一件别的文明没证明过的事——不靠一个国王、不靠一支军队、不靠满城的纪功碑,光靠一套「在哪儿都一样」的标准和协作,一样能修出全城排水、统一几百公里、把生意做到另一个帝国。原来,文明不是非走「集权」这一条路不可。\n\n另一种说法:别太早叫好。我是个商人,我看得见货、看得见秩序,可我看不见这套秩序背后压着谁。「看不见王」不等于「没有不公」——也许统一的代价、安排的代价,正落在某些我从没留意、史料也没留下声音的人身上。整齐,有时候也是一种我看不透的安排。\n\n这两边,不是「平等」对「不平等」那么简单。它逼你想:一个我们只看得见「成果」、看不见「内里」的文明,我们到底能替它下多重的结论?\n\n这是一道好的历史课会反复让你掂量的难题。你怎么看?想30秒,写下来。两边都站得住。',
        en: 'Having walked my whole life, a real question waits for you: from my place, caught between two sides, how should we see my homeland\'s way of being "kingless, yet highly unified"? Both views stand.\n\nOne view: this is exactly what makes it remarkable. It proved a thing other civilizations never did, that without a king, without an army, without a city full of victory monuments, by a set of "same-everywhere" standards and cooperation alone, one can still build drainage for a whole city, unify hundreds of kilometers, and do business with another empire. So civilization need not walk only the one road of "centralized power."\n\nThe other view: do not cheer too soon. I am a merchant; I can see goods, I can see order, but I cannot see who this order presses down upon. "No king in sight" is not "no injustice." Perhaps the cost of the unity, the cost of the arrangement, fell on certain people I never noticed, and whom the record left voiceless. Being so neat and orderly can also hide things I cannot see.\n\nThese two are not as simple as "equal" against "unequal." They force you to think: a civilization whose "results" we can see but whose "insides" we cannot, how heavy a conclusion can we really place on it?\n\nThis is the kind of hard problem a good history class will have you weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 站夹在两边位置怎么看家乡「没有王却高度统一」的活法 + 一种说法 (了不起/证明不靠国王军队纪功碑光靠标准协作也能修排水统一几百公里做到另一帝国/文明不必非走集权) / 另一种说法 (别太早叫好/我看得见货看得见秩序看不见背后压着谁/看不见王≠没有不公/统一的代价可能落在我没留意史料没留声音的人身上/整齐也是看不透的安排) + 更难的: 只看得见成果看不见内里能下多重结论 + neutral 收尾「好的历史课会反复让你掂量」(去重、非 AP 老师) + 想30秒两边都站得住',
      engagementHook: '我看得见货、看得见秩序,却看不见这套秩序背后压着谁。一个我们只看得见「成果」、看不见「内里」的文明,你敢替它下多重的结论?你的30秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'indus-valley-mer-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的,是一个商人的声音——一个脚踩两个文明、却始终站在「贸易」这个角度看家乡的人。\n\n请记住:这只是一边。我满脑子是货、是海路、是砝码对不对得上。我把家乡看成一个会做大买卖的伙伴。可一个文明,不只是它的出口商品;它怎么活、怎么信、城里公不公平,这些,贸易这副眼镜照不出来。\n\n这一遍里,有两种人没真正开口。那个让全城按标准运转的「组织者」——他站在城里、不出海,他会怎么讲这座城的「秩序」?还有那个住在 Mohenjo-daro 下城、用着先进下水道、却连自己城里有没有国王都说不清的普通孩子——他不是货,也不是码头上的数字,他是这套秩序里活生生的一个人。他过得到底好不好?我答不上来。\n\n最后留一样东西给你。还记得我谈成那笔买卖时,从行囊里掏出的那一块小小的石砝码吗?\n\n换一个视角再走一遍,你会在一座城的井边,从一个孩子的眼睛里,再见到它一次。',
        en: 'What you just heard was a merchant\'s voice, a man with a foot in two civilizations, who all along saw his homeland from the angle of "trade."\n\nRemember: it is only one side. My head is full of goods, sea roads, whether the weights match. I see my homeland as a partner good at big trade. But a civilization is more than its export goods; how it lived, what it believed, whether the city was fair, these the lens of trade cannot show.\n\nIn this pass, two kinds of people never truly spoke. The "organizer" who keeps the whole city running to standard, who stands in the city and does not go to sea, how would he tell this city\'s "order"? And the ordinary child of Mohenjo-daro\'s lower town, who uses the advanced drains yet cannot even say whether his city has a king, who is not goods, not a number on a dock, but a living person inside this order. Is he actually well or not? I cannot answer.\n\nAnd one last thing to leave with you. Do you remember the small stone weight I drew from my pack when I struck that deal?\n\nWalk this through once more from another perspective, and at a city\'s well, through a child\'s eyes, you will meet it again.',
      },
      deliverGoal: 'N11 close/meta — 你听的是商人一边 (脚踩两文明却站贸易角度看家乡/满脑子货海路砝码/把家乡看成会做大买卖的伙伴但文明不只出口商品/怎么活怎么信公不公平贸易眼镜照不出) + 还没真正开口: 组织者 (站城里不出海会怎么讲秩序) + 住下城用先进下水道却说不清有没有国王的普通孩子 (不是货不是数字是活生生的人过得好不好) + 暗示石砝码会在井边从孩子眼睛里再见一次 (不直接解释 echo)',
      engagementHook: '我把家乡看成一个会做大买卖的伙伴,可一个文明不只是它的出口货——它怎么活、城里公不公平,贸易这副眼镜照不出来。你听完我这一边,最想去问那个住城里的组织者、那个井边的孩子什么?',
      expectsRealAnswer: true,
    },
  ],
};

export var childLens = {
  id: 'ordinary-citizen-no-king',
  name: 'The Nameless Child of the Lower Town',
  nameCn: '下城里没名字的孩子',
  role: 'receiving-end',
  perspectiveTag: 'silent-majority-no-king',
  icon: '🏺',
  description: {
    cn: '约公元前2600年,住在 Mohenjo-daro 下城区一户普通人家的孩子。他没有名字，因为这个文明没为任何普通人留下名字,甚至没为它的统治者留下名字。能确证的是他的日常环境,好得惊人:结实的烧砖房、自己的浴室、可能还有连着下水道的厕所、街上有公共水井、城里有那座神秘的大水池。可这个视角也直面我们的无知:我们不知道他信什么神、属于哪个阶层、那套整齐背后是不是藏着我们看不见的等级。这一遍让你从最普通、最没有名字、最被历史忽略的位置,去体验一个奇特的社会。',
    en: 'Around 2600 BCE, a child of an ordinary household in the lower town of Mohenjo-daro. He has no name, because this civilization left no name for any ordinary person, and not even for its rulers. What is certain is his daily setting, astonishingly good: a solid fired-brick house, his own bathroom, perhaps even a toilet connected to the drains, public wells in the street, that mysterious Great Bath in the city. Yet this perspective faces our ignorance head-on: we do not know what god he believed in, which class he belonged to, or whether that orderliness hid a rank we cannot see. This pass puts you in the most ordinary, most nameless, most history-overlooked position, to live inside a strange society.',
  },
  storyboard: [
    {
      id: 'indus-valley-child-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '约公元前2600年。我是一个孩子,住在 Mohenjo-daro(摩亨佐-达罗)的下城区,一户普通人家。\n\n我没有名字给你。不是我不肯说,是没人替我记下来。在我们这个文明里,没有一个普通人留下名字——你信不信,连我们的国王(如果有的话)都没留下名字。在埃及、在两河,被记住的是国王;在我们这儿,连国王都没被记住,像我这样的人,就更是一片沉默。\n\n可奇怪的是:我活得一点都不像「沉默」该有的样子。我家是结实的烧砖房,有自己的浴室,街上有公共水井,城里有干净得发亮的下水道。比起同时代很多地方的孩子,我的日子,好得过分。\n\n这一遍,你站在我这儿——最普通、最没名字、最容易被历史忽略的这一格,去活一活这个奇特的世界。',
        en: 'Around 2600 BCE. I am a child, living in the lower town of Mohenjo-daro, an ordinary household.\n\nI have no name to give you. Not because I will not say it, but because no one wrote it down for me. In our civilization, not one ordinary person left a name behind, and, believe it or not, not even our king (if there was one) left a name. In Egypt, in Mesopotamia, it is the kings who are remembered; here, not even a king is remembered, and people like me are all the more a silence.\n\nYet the strange thing is: I do not live at all the way "silence" should look. My home is a solid fired-brick house, with its own bathroom; there are public wells in the street, and drains in the city so clean they shine. Compared with children in many places of the same age, my days are almost too good.\n\nThis pass, you stand where I stand, in the most ordinary, most nameless, most easily history-overlooked square, to live a while in this strange world.',
      },
      deliverGoal: 'N1 hook (DEFAULT lens) — 约前2600 孩子住 Mohenjo-daro 下城普通人家 + 没名字 (没人替我记下来/这文明没一个普通人留名字连国王都没留/埃及两河记住国王这儿连国王都没被记住像我更是沉默) + 但活得不像沉默 (结实烧砖房/自己浴室/公共水井/干净发亮下水道/比同代很多孩子好得过分) + 这一遍最普通最没名字最被忽略的位置活这个奇特世界',
      engagementHook: '在我们这儿,连国王都没留下名字,像我这样的普通孩子就更沉默。可我家有浴室、有连着暗渠排走脏水的厕所,日子好得过分。一个「连国王是谁都查不到、普通人却过得不差」的世界,你能想象吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-child-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先带你看看我家,你才懂这座城有多不一样。\n\n我家是烧砖砌的,墙很结实。最让外面来的人吃惊的,是我家有自己的浴室——一块铺好、略微倾斜的地面,洗澡的脏水顺着墙里、街下加了盖板的下水道流走。我们家可能还有一个连着暗渠的厕所——脏物顺着暗渠排走。\n\n你别小看这件事:在四千多年前,家家有浴室、脏水有专门的暗渠带走——这种卫生条件,放在同时代的地球上,是顶级的。有学者说,要再过很久,别的地方才普遍出现能比的城市卫生。\n\n出了门,街上有公共水井,我每天去打水。城里还有那座大水池(Great Bath),又大又干净,大人说它有特别的用处,可到底是什么用处,我也说不太清。\n\n你看,我虽然没名字、虽然普通,可我从小就活在一座把「干净」「整齐」做到极致的城里。这,是我能确确实实告诉你的。',
        en: 'First let me show you my home, so you understand how unlike other places this city is.\n\nMy home is built of fired brick, the walls very solid. What most astonishes visitors from outside is that my home has its own bathroom, a paved, slightly sloped floor, where the dirty bath water runs off through covered drains in the walls and under the street. My home may even have a toilet connected to a covered drain, the waste carried off through the channel.\n\nDo not make light of this: more than four thousand years ago, every house with a bathroom, dirty water carried off by special covered channels, this level of sanitation, on the earth of that time, was top-tier. Some scholars say it would be a long time before comparable city sanitation appeared widely elsewhere.\n\nOut the door, there are public wells in the street, and I fetch water every day. The city also has that Great Bath, large and clean. The grown-ups say it has a special use, but what use exactly, I cannot quite say either.\n\nYou see, though I have no name, though I am ordinary, I have lived since childhood in a city that took "clean" and "orderly" to their peak. This, I can tell you for certain.',
      },
      deliverGoal: 'N2 setup — 带看我家 (烧砖墙结实) + 最让外人吃惊: 有自己浴室 (略倾斜地面/脏水顺墙里街下加盖下水道流走/可能还有连着暗渠的厕所脏物顺暗渠排走、非机械冲水) + 别小看: 四千年前家家浴室+暗渠卫生条件同代顶级 (古代世界罕有能及、不下绝对数字) + 出门公共水井每天打水 + 大水池又大又干净大人说有特别用处但我也说不清 + 没名字普通却从小活在把干净整齐做到极致的城 (确证)',
      engagementHook: '四千多年前,我家就有浴室、有连着暗渠排走脏水的厕所——这卫生条件,在古代世界罕有能及。一个普通孩子能过上这种日子,你觉得这座城是怎么做到的?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-child-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '可这里我要停一下,跟你说句很重要的实话。\n\n你眼前这个「我」,是后人搭出来的一个桥接孩子。我家浴室、下水道、公共水井、我玩的陶土小牛车——这些都是真的,遗址里真的挖到过。可「我」这个人,我的心思、我的名字,是没有的。\n\n为什么?因为这个文明一个字都没给我们留下来——没有可读的文字,没有日记,没有名册。我能告诉你我住什么样的房子,却没法告诉你我叫什么、信哪个神、家里有几口人。\n\n所以请你这样读我:我的「环境」是考古挖出来的硬事实;我的「内心」,是这个 lens 替你想象的——是坐在一个那样的孩子的位置上,你能合理猜到的,不是哪本古书里写下的。\n\n这点诚实,正是这门课最想教你的:当一个文明不能为自己说话,我们替它讲的故事里,哪些是它的,哪些其实是我们替它补的?分清这两样,比记住任何一个年代,都重要。',
        en: 'But here I must stop and tell you a very important honest thing.\n\nThis "me" before you is a bridging child that later people built. My home\'s bathroom, the drains, the public wells, the little clay ox-cart I play with, these are all real; they really have been dug up at the sites. But "me" as a person, my thoughts, my name, do not exist.\n\nWhy? Because this civilization left us not one word, no readable writing, no diary, no register. I can tell you what kind of house I live in, but I cannot tell you my name, which god I believe in, or how many are in my family.\n\nSo read me this way: my "setting" is hard fact dug up by archaeology; my "inner world" is what this lens imagines for you, what you can reasonably guess sitting in such a child\'s place, not what some ancient book wrote down.\n\nThis honesty is exactly what this course most wants to teach you: when a civilization cannot speak for itself, in the story we tell for it, which parts are its, and which did we actually fill in for it? To tell these two apart matters more than remembering any date.',
      },
      deliverGoal: 'N3 setup/anti-fab — 停一下说重要实话 + 透明标注「我」是合成桥接孩子 (浴室/下水道/水井/陶土小牛车都真挖到过/但「我」的心思名字没有) + 为何: 文明一字没留 (无可读文字无日记无名册/能说住什么房子说不出叫什么信哪个神几口人) + 这样读我: 环境=考古硬事实/内心=lens 替你想象你能合理猜到不是古书写下 + 诚实正是本课最想教: 文明不能说话时哪些是它的哪些是我们补的/分清比记年代重要',
      engagementHook: '我家的浴室、我玩的小牛车,都是真的、挖得到的;可我的名字、我心里想什么,是没有的——是后人替我补的。当一个文明不能为自己说话,我们替它讲的故事里,哪些是它的,哪些是我们补的?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-child-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n今天早上,妈妈让你去街角的公共水井打水。你提着陶罐出门。\n\n井边,围着几个大人。一个商队刚到,有人在那儿用一块小小的石头,称着什么——也许是粮食,也许是要换的货。那块石头是立方体的,灰扑扑的,大人们却很认真地拿它一遍遍核对分量,谁也不争。\n\n你看不太懂,只觉得奇怪:这么一小块石头,凭什么让所有人都服气、都不吵?\n\n你不知道的是:在你这座城,在几百公里外另一座城,这种石头,几乎一模一样重。有人专门在管着,让「一份就是一份」。可你只是个打水的孩子,你看得见那块石头,看不见那个「管着」的人——就像你看得见干净的下水道,却从没见过是谁规定全城的砖都得一样大。\n\n你提起装满水的陶罐,往家走。这座城的秩序,就这样,悄悄地、不出声地,托着你这一天。',
        en: 'Now you are me.\n\nThis morning, mother sends you to fetch water from the public well at the street corner. You carry a clay pot out the door.\n\nAt the well, a few grown-ups are gathered. A caravan has just arrived, and someone there is weighing something with a small stone, maybe grain, maybe goods to be exchanged. The stone is a cube, dull gray, yet the grown-ups very seriously use it to check the amount, over and over, and no one argues.\n\nYou cannot quite follow it; you only find it strange: why does everyone trust this little stone? Why does no one argue?\n\nWhat you do not know is this: in your city, and in another city hundreds of kilometers away, this kind of stone weighs almost exactly the same. Someone is managing it on purpose, so that "one portion is one portion." But you are only a child fetching water; you can see the stone, you cannot see the person "managing" it, just as you can see the clean drains but have never met whoever decreed that all the city\'s bricks must be one size.\n\nYou lift the clay pot, now full of water, and walk home. The order of this city, just so, quietly, without a sound, holds up your whole day.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak + ANCHOR cross-lens 第三触 (井边孩子眼睛见砝码) — 早上妈妈让去街角公共水井打水提陶罐出门 + 井边大人围着商队刚到有人用小石头称东西 (立方体灰扑扑/认真核对分量谁也不争) + 孩子看不懂只觉奇怪: 这么小块石头凭什么让所有人服气不吵 + 你不知道的: 你城和几百公里外另一城这石头几乎同重有人专门管让「一份就是一份」 + 你看得见石头看不见管着的人 (像看得见下水道没见过谁规定砖一样大) + 提水回家秩序悄悄托着你这一天',
      engagementHook: '井边那块灰扑扑的小石头,凭什么让所有大人都服气、都不吵?我看得见这块石头,却从没见过那个让全城「一份就是一份」的人。你身边有没有这种「你天天受它好处、却从没见过它是谁定的」规矩?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-child-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '打完水回到家,我想跟你说说,我家里那些账本上记不下的东西。\n\n白天,这座城是整齐的、安静的、按规矩转的。可一到傍晚,屋里就热闹起来。妈妈在准备晚饭,小米、小麦、大麦,有时还有鱼;我们穿的是这里特产的棉布——这片土地,是世界上最早种棉、织棉的地方之一。\n\n我有几样心爱的玩具:陶土捏的小动物,还有一辆带轮子的小牛车。这些不是我编的——它们真的在遗址里被挖了出来,四千年后,还有孩子模样的小玩具,静静躺在土里。\n\n至于我们一家信什么神、晚上会不会拜、心里盼着什么——对不起,这一段我没法老实告诉你,因为没人记下来过。我能给你看我玩的小牛车,却没法给你看我睡前心里在想什么。\n\n这就是当一个「沉默的普通人」的滋味:我的日子留下了实物,我的心,却没留下声音。',
        en: 'Back home with the water, I want to tell you about the things in my home that no ledger could record.\n\nBy day, this city is orderly, quiet, turning by the rules. But come evening, the house grows lively. Mother is preparing supper, millet, wheat, barley, sometimes fish; what we wear is the cotton cloth special to this place, for this land is one of the earliest in the world to grow and weave cotton.\n\nI have a few beloved toys: little clay animals, and a small ox-cart with wheels. I am not making these up; they really were dug up at the sites. Four thousand years later, little toys in the shape a child would love still lie quietly in the earth.\n\nAs for what god my family believed in, whether we prayed at night, what our hearts longed for, I am sorry, this part I cannot honestly tell you, because no one ever wrote it down. I can show you the little ox-cart I played with, but I cannot show you what was in my heart before sleep.\n\nThis is the taste of being a "silent ordinary person": my days left objects behind, but my heart left no voice.',
      },
      deliverGoal: 'N5 story — 回家说账本记不下的东西 + 白天城整齐安静按规矩转傍晚屋里热闹 (妈妈备晚饭小米小麦大麦有时鱼/穿本地特产棉布世界最早种棉织棉之一) + 几样心爱玩具 (陶土小动物/带轮子小牛车真在遗址挖出/四千年后孩子模样小玩具静躺土里) + anti-fab: 信什么神晚上拜不拜盼什么没法老实说没人记下 (能看小牛车看不见睡前心里想什么) + 当沉默普通人的滋味: 日子留下实物心却没留下声音',
      engagementHook: '四千年后,我玩的小牛车还静静躺在土里,可我睡前心里想什么、信哪个神,一点声音都没留下。我的日子留下了实物,我的心却没留下声音——这是一种什么样的存在?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-child-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得带你看一件让我自己也想不明白的事。\n\n有一天,大人带我去城里那座最特别的建筑——大水池(Great Bath)。它在城的高处,很大,约十二米长,比地面低,有阶梯一级级下到水里。砖砌得严丝合缝,缝里灌了浆,外面还裹了沥青,水稳稳地留在里面,一点不漏。\n\n我问大人:这个大池子,是干什么用的?\n\n大人的回答含含糊糊。有人说,是用来「洗干净身体」的,一种特别的、郑重的沐浴。可它旁边,没有一尊神像,没有一座祭坛,没有任何「这是给哪个神的」的记号。\n\n我站在池边,心里第一次冒出一个念头:我们这座城,什么都做得这么齐整——砖、下水道、水井——可这座全城最大、最讲究的池子,连大人都说不清它到底为什么而建。\n\n我们好像把所有的本事,都用在了「把东西做对」上;至于「为什么这么做」,反倒留成了一个,连我们自己都答不上来的谜。',
        en: 'I must take you to see a thing I cannot understand myself.\n\nOne day the grown-ups took me to the city\'s most special building, the Great Bath. It sits on the city\'s high ground, large, about twelve meters long, lower than the ground, with steps going down level by level into the water. The brick is laid seamlessly, the joints filled with mortar, wrapped outside in tar, and the water sits steady inside, not leaking at all.\n\nI asked a grown-up: what is this great pool for?\n\nThe answer was vague. Some say it is for "washing the body clean," a special, solemn bathing. Yet beside it there is no idol, no altar, no mark at all of "this is for a certain god."\n\nStanding at the pool\'s edge, a thought rose in me for the first time: our city does everything so neatly, the bricks, the drains, the wells, yet this largest, most careful pool in the whole city, even the grown-ups cannot say clearly what it was built for.\n\nWe seem to have spent all our skill on "doing things right"; as for "why do it this way," that, instead, was left as a riddle even we ourselves cannot answer.',
      },
      deliverGoal: 'N6 story (信仰之谜·孩子视角) — 带看想不明白的事: 大水池 Great Bath (城高处/约12米/低于地面阶梯下到水里/砖严丝合缝灌浆裹沥青水不漏) + 我问大人这池子干什么用 + 大人含糊 (有人说洗干净身体特别郑重沐浴/但旁边无神像无祭坛无给哪个神的记号) + 池边第一次冒念头: 城什么都做齐整 (砖下水道水井) 却连大人都说不清这最大最讲究的池为什么建 + 本事都用在「把东西做对」上「为什么这么做」反成连自己都答不上的谜',
      engagementHook: '我们这座城什么都做得齐齐整整,可连大人都说不清那座最大的水池到底为什么而建。把「怎么做」做到极致、却留不下「为什么」——你觉得这是这个文明的厉害,还是它的遗憾?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-child-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '这一段,我要替你面对一个最不舒服的问题:我,真的过得好吗?\n\n你已经看见了我的好:烧砖房、浴室、下水道、水井、玩具。从挖出来的房子看,我们这座城里,大多数人家的房子大小、用的东西,差得不像别的古文明那么悬殊。有学者据此说,这也许是早期复杂社会里最平等的一个。\n\n可我要拉住你,别太快替我高兴。\n\n「看不见明显的国王和巨富」,不等于「真的人人平等」。也许这座城的权力和不平等,藏在我们今天读不出来的形式里——藏在我属于哪个家族、信哪种仪式、能不能靠近那座大水池里。\n\n我自己,其实也说不清:我家是这座城里的「中产」,还是这套整齐背后,藏着某种我从没察觉的高低?我活在一个工程上无比先进、记录上无比沉默的世界里——我连自己过得算不算好,都没有一个能查证的答案。',
        en: 'In this part, I must face for you the most uncomfortable question: did I, really, live well?\n\nYou have already seen my good: the brick house, the bathroom, the drains, the wells, the toys. From the houses dug up, in our city most families\' houses, in size and in what they used, did not differ as starkly as in other ancient civilizations. Some scholars say from this that ours may have been one of the most equal of early complex societies.\n\nBut let me hold you back: do not be glad for me too fast.\n\n"No obvious king or great wealth in sight" is not "everyone truly equal." Perhaps this city\'s power and inequality hid in forms we cannot read today, in which family I belonged to, which rites I believed, whether I could go near that Great Bath.\n\nI myself cannot say for sure: was my home the city\'s "middle class," or did that orderliness hide some high and low I never noticed? I live in a world endlessly advanced in engineering and endlessly silent in record. I do not even have a verifiable answer to whether I lived well or not.',
      },
      deliverGoal: 'N7 story (直面无知核心) — 替你面对最不舒服的问题: 我真的过得好吗 + 已见我的好 (烧砖房浴室下水道水井玩具/挖出房子看大多数人家大小用的东西差得不像别古文明悬殊/学者说也许最平等的早期复杂社会) + 拉住别太快高兴 + 「看不见明显国王巨富」≠「真的人人平等」(权力不平等可能藏读不出的形式: 我属哪个家族信哪种仪式能不能靠近大水池) + 我自己说不清是中产还是整齐背后藏高低 + 活在工程先进记录沉默的世界连自己过得算不算好都没能查证的答案',
      engagementHook: '你已经看见我过得不差,可我要拉住你:「看不见明显的国王和巨富」,不等于「真的人人平等」。我连自己过得算不算好,都没有一个能查证的答案。你愿意承认「我们其实不知道」吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-child-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这一生看不到结局。但我替你把后来的事说了——因为后来发生的事,正好落在像我这样的人身上。\n\n大约从公元前1900年起,这座城慢慢不对了。不是一场大火,不是敌人破城。是季风减弱、雨水变少;有的河慢慢干了;田里收的粮越来越少。\n\n于是大人们开始商量:要不要走?一户,又一户,收拾东西,往东边去,散到更小的村子里。曾经几万人的大城,人越来越少。\n\n那套了不起的本事——干净的下水道、统一的砝码、读不懂的印章文字——没人再需要,也没人再传下去,慢慢就失传了。\n\n请你记住一件事:这座城不是「轰」地一下塌掉的。它是像我这样千千万万个没名字的普通人,一户一户、安安静静地走掉,才慢慢空下来的。历史书爱写大事;可一座城的结束,常常就是无数个像我这样的人,默默拎起行李,转身的背影。',
        en: 'I will not see the end in my lifetime. But I will tell you what came after, because what came after fell exactly on people like me.\n\nFrom about 1900 BCE, this city slowly went wrong. Not a great fire, not an enemy breaking the walls. The monsoon (the season of heavy rains) weakened, the rains thinned; some rivers slowly dried; the grain the fields yielded grew less and less.\n\nAnd so the grown-ups began to talk it over: should we leave? One household, then another, packed their things and went east, scattering into smaller villages. The great city that once held tens of thousands had fewer and fewer people.\n\nThose remarkable skills, the clean drains, the standard weights, the unread seal-script, no one needed them anymore, no one passed them on, and slowly they were lost.\n\nRemember one thing: this city did not collapse in one crash. It slowly emptied as thousands upon thousands of nameless ordinary people like me, household by household, quietly walked away. History books love to write of great events; but the end of a city is often just countless people like me, quietly picking up their bundles and turning to walk away.',
      },
      deliverGoal: 'N8 story (衰落·孩子/无权方视角) — 看不到结局但讲后来 (后来正好落在像我这样的人身上) + 约前1900起城慢慢不对 (不是大火不是敌人破城: 季风减弱雨变少/河干/田里粮越来越少) + 大人商量要不要走 (一户又一户收拾东西往东散到小村/几万人大城人越来越少) + 了不起的本事 (下水道/砝码/印章文字) 没人需要没人传失传 + 记住: 城不是轰一下塌是千千万万没名字普通人一户户安静走掉才空下来 (历史书爱写大事一座城的结束常是无数普通人拎行李转身的背影)',
      engagementHook: '历史书爱写大事,可一座城的结束,常常就是无数个像我这样没名字的人,一户一户、安安静静地拎起行李,转身走掉。「大城衰落」这四个字背后,你看见的是大事,还是无数个普通人的背影?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-child-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步,给你看一张更大的地图——一张我活着时根本看不见的地图。\n\n就在我住在这座干净城里的年头(约前2600到前1900),地球更东边,黄河、长江流域,也有像我这样的普通人,在另一种城里过日子——大致是龙山文化晚期(和我同代),并紧接着进入略晚的二里头文化(约前1900后才兴起)。\n\n如果我能飞过去看一眼,我会看见一种和我家很不一样的城:像陶寺那样,有大型夯土的基址,有等级分明的墓——有的人下葬时随葬一堆好东西,有的人几乎空着手入土。「谁在上面、谁在下面」,一眼就能看出来。不过那边的早期王权到底有多成熟、传说里的夏是不是信史,学者也还在争——那一头,也有它说不清的地方。\n\n再往西,尼罗河边的埃及,有法老、有金字塔——「谁在上面」一样写得明明白白。\n\n而在我这座城,挖了一百年,既没有宫殿,也没有那种「有人陪葬一堆宝、有人什么都没有」的极端等级墓。\n\n我不是说哪种更好。我只想让你看见:同一个时候,地球上有人头顶清清楚楚有个王,有人头顶那个「管事的」连四千年后的人都找不到——这是几种很不一样的活法。',
        en: 'Let me step back and show you a larger map, one I could never have seen while alive.\n\nIn the very years I lived in this clean city (about 2600 to 1900 BCE), further east on the earth, along the Yellow and Yangtze rivers, ordinary people like me were living their days in another kind of city, roughly the late Longshan culture (contemporary with me), leading into the slightly later Erlitou culture (which rose only from about 1900 BCE).\n\nIf I could fly over for a look, I would see a city very unlike my home: like Taosi, with large rammed-earth foundations and steeply ranked tombs, some people buried with a heap of fine things, some going into the earth nearly empty-handed. "Who is above, who is below," you could see at a glance. Though just how developed that early kingship was, and whether the legendary Xia was historical, scholars still debate; that side, too, has its unclear places.\n\nFurther west, along the Nile, Egypt had pharaohs and pyramids, where "who is on top" is written just as plainly.\n\nAnd in my city, dug for a hundred years, there is neither a palace, nor that kind of extreme ranked tomb where some are buried with a heap of treasure and some with nothing at all.\n\nI am not saying which is better. I only want you to see: at about the same time on the earth, some had a king clearly overhead, and some had an "one in charge" overhead whom not even people four thousand years later can find, these are several very different ways to live.',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§8 中国桥·孩子视角·DEFAULT lens) — 我住干净城的年头 (约前2600-1900) 地球更东边黄河长江也有像我的普通人在另一种城过日子=龙山晚期 (同代)、紧接略晚二里头 (约前1900后才兴起) + 若能飞过去看会见到跟我家很不一样的城: 陶寺式大型夯土基址+等级化墓 (随葬丰厚 vs 几乎空手/谁在上谁在下一眼看出) + 对称诚实: 中国侧早期王权成熟度/夏是否信史学者也在争那头也有说不清处 + 加埃及 (法老金字塔) 凑四方对照 + 我城挖一百年既无宫殿也无极端等级墓 + Rule 0 不说哪种更好/hook 改中性认知问 (看见高下还是两种活法、非「你更想活哪种」)',
      engagementHook: '同一个时候,地球上两群普通人活在两种很不一样的秩序里——一种头顶清清楚楚有个王,一种连四千年后都找不到管事的人。把这两种放一起看,你看见的是高下,还是两种不同的活法?',
      expectsRealAnswer: false,
    },
    {
      id: 'indus-valley-child-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,有一个真问题等你来答。问的不是国王,是我——是像我这样,过得不差、却连自己城里有没有王都说不清的普通人。\n\n我们这座城,看上去出奇地平等:房子大小差不多,人人有干净的水和下水道,找不到压在所有人头上的国王和巨富。\n\n一种说法:那就该相信眼睛看见的。挖了一百年都没挖出明显的等级,房子也确实差不多——也许它就是一个罕见的、把大多数人照顾得都不差的社会。证据指向哪儿,我们就信到哪儿。\n\n另一种说法:别忘了我是「沉默」的。我没留下一个字。「看起来平等」,会不会只是因为我们读不懂他们的文字、看不见他们的不平等?也许真有高低,只是藏在我没察觉、你也挖不到的地方。把「沉默」当成「平等的证明」,是不是太一厢情愿?\n\n这两边,不是「平等」对「不平等」。它逼你想:对一个不能为自己说话的人,我们该信「眼睛看见的」,还是该老实承认「我们其实不知道」?\n\n这是一道好的历史课会反复让你掂量的难题。想30秒,写下来。两边都站得住。',
        en: 'Having walked my whole life, a real question waits for you. It asks not about the king, but about me, about the ordinary person like me, who lived not badly yet cannot even say whether his city had a king.\n\nOur city looks strangely equal: houses about the same size, everyone with clean water and drains, no king or great wealth pressing down on all. \n\nOne view: then we should trust what the eyes see. A hundred years of digging turned up no obvious rank, and the houses truly are about the same; perhaps it simply was a rare society that cared for most people not badly. Where the evidence points, that far we believe.\n\nThe other view: do not forget I am "silent." I left not one word. "Looks equal," might it be only because we cannot read their writing, cannot see their inequality? Perhaps there truly was high and low, only hidden where I never noticed and you cannot dig. To take "silence" as "proof of equality," is that not too wishful?\n\nThese two are not "equal" against "unequal." They force you to think: of a person who cannot speak for himself, should we trust "what the eyes see," or honestly admit "we do not actually know"?\n\nThis is the kind of hard problem a good history class will have you weigh again and again. Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (DEFAULT lens) — 真问题: 问的不是国王是像我这样过得不差却说不清有没有王的普通人 + 城看上去出奇平等 (房子差不多/人人有干净水和下水道/找不到压头上的国王巨富) + 一种说法 (该信眼睛看见的/挖一百年没挖出明显等级房子确实差不多/也许罕见把多数人照顾不差的社会/证据指向哪信到哪) / 另一种说法 (别忘我是沉默的没留一个字/看起来平等可能只因读不懂文字看不见不平等/真有高低只藏在没察觉挖不到处/把沉默当平等证明太一厢情愿) + 更难: 对不能为自己说话的人信眼睛看见还是老实承认不知道 + neutral 收尾「好的历史课会反复让你掂量」(去重、非 AP 老师) + 想30秒两边都站得住',
      engagementHook: '我们这座城看上去出奇地平等——可别忘了,我是「沉默」的,一个字都没留下。「看起来平等」,会不会只是因为我们读不懂他们的文字、看不见他们的不平等?你的30秒到了,你信眼睛看见的,还是老实承认「我们其实不知道」?',
      expectsRealAnswer: true,
    },
    {
      id: 'indus-valley-child-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个没名字、却过得不差的孩子——你会怎么评价这样一种「被历史忽略的好日子」?\n\n它也许是早期世界里普通人过得最不差的地方之一;它也可能,把某种我永远没察觉的不公,藏在了那份整齐里。这两件事都挂着,谁也没法替我钉死。你怎么称?\n\n不过先记住:你这一遍,听的只是我——下城里一个没名字的孩子。那个让全城砖一样大、砝码一样准的「组织者」,会把这座城讲成一台他亲手校准的、了不起的机器;那个把我们珠子卖到 Sargon 码头的商人,又会把它看成一个会做大买卖、却没有国王巨像的奇怪伙伴。你还没听到他们的声音。换个视角再走一遍,我那句「我们其实不知道」,会被补上,还是被挑战得更厉害?\n\n最后,我想把那块井边的小石头留在你心里。换上「组织者」的眼睛,你会看见他每天清晨,怎样一遍遍校准那块托起我整座城的石头。',
        en: 'Having walked my whole life, a nameless child who still lived not badly, how would you judge such a "history-overlooked good life"?\n\nIt may have been one of the early-world places where ordinary people lived least badly; it may also have hidden some injustice I never noticed inside that orderliness. Both hang there; no one can nail them shut. How do you weigh it?\n\nBut first, remember: this pass you heard only me, a nameless child of the lower town. The "organizer" who keeps the bricks one size and the weights one accuracy would tell this city as a remarkable machine he calibrates with his own hands; the merchant who sold our beads to Sargon\'s docks would see it as a strange partner, good at big trade yet with no king\'s giant statue. You have not heard their voices yet. Run it again through another lens, and my "we do not actually know" might be filled in, or challenged harder.\n\nAnd last, I leave that small stone by the well in your heart. Put on the "organizer\'s" eyes, and you will see how each early morning he calibrates, over and over, that one stone that holds up my whole city.',
      },
      deliverGoal: 'N11 close/meta (DEFAULT lens) — 评价「被历史忽略的好日子」(没名字孩子/干净发亮城/看不懂小石头/大人说不清用处的大水池/安静走掉结局 → 也许普通人过得最不差之一 vs 可能把没察觉的不公藏整齐里/都挂着没法钉死怎么称) + MANDATORY 跨视角指针: ① 你只听到下城没名字的孩子 ② 组织者会讲成另一样 (亲手校准的了不起机器) + 商人会看成另一回事 (会做大买卖却没国王巨像的奇怪伙伴) ③ 你还没听到他们声音/换视角再走「我们其实不知道」会被补上或挑战更厉害 + 闭合 echo: 把井边小石头留你心里换组织者眼睛看他每天清晨郑重校准那块托起整座城的石头',
      engagementHook: '你这一遍,只听到了下城里一个没名字的孩子。那个让全城砖一样大的组织者、那个把珠子卖到 Sargon 码头的商人,会把这同一座城讲成完全不同的样子——你还没听到他们的声音。换个视角再走一遍,我刚才那句「我们其实不知道」,会被补上,还是被挑战得更厉害?',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator / receiving-end-default) ───
export var lenses = {
  'organizer-actor':            organizerLens,
  'meluhha-merchant-mediator':  merchantLens,
  'ordinary-citizen-no-king':   childLens,
};

// receiving-end 优先 (无名沉默大多数 = 本文明核心 pedagogy; 「连国王都查不到」从最底位置体验)
// 与 narrative frontmatter defaultLens 一致
export var defaultLens = 'ordinary-citizen-no-king';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'indus-valley-2600bce',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'organizer-actor': 28, 'meluhha-merchant-mediator': 28, 'ordinary-citizen-no-king': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-06',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail: 一块石砝码 standardized weight (组织者每天校它 / 商人靠它做跨海买卖 / 孩子在井边见有人用它称粮 — 三视角各触一次不点破)',
    'defaultLens: ordinary-citizen-no-king — 无名沉默大多数 (silent majority, AP「证据缺失」必考) + 「连国王都查不到」从最底位置体验',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total)',
    'anti-fab: 三视角全是身份写实合成桥接人 (本文明无可读文字/连统治者都没留名字)，N3 各 lens 透明标注；商人/孩子内心用括号或正文显式标「lens 替你想象/史料无答案」',
    '§9 中国桥 (narrative §8): receiving-end N9 + mediator N9 + actor N9 均注入同代中国对照 (龙山晚期=同代、二里头明确标略晚约前1900后才兴起、证据锚陶寺式夯土基址+等级化墓)，对称诚实标中国侧夏信史争议；actor/child N9 补埃及凑四方对照，Rule 0 不排名',
    '史学诚实主线: 反复区分「考古能确证的」vs「我们在猜的」；absence of evidence (没挖到≠不存在) 是本 topic 最高阶 DBQ 训练',
    '4-agent review 已处理 (Opus 定稿): 修 P0 排水夸张断言降级带 hedge / 二里头年代滑移收紧为略晚 + 加埃及四方对照 + child-n9 hook 去价值排序 / child-n11 节点过载瘦身 / child-n4 倒装句改直白；P1 carnelian-厕所 over-claim 软化、citadel/steatite/monsoon EN gloss、翻译腔句落地、三 synthesis AP 老师措辞去重',
  ],
};
