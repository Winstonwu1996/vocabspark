// ─────────────────────────────────────────────────────────────────
// 早期人类与新石器革命 — Early Humans & the Neolithic Revolution (约前 10000)
// Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (AUTHORING_PIPELINE 第7条): 西亚部分全程当地真实术语
//   (Fertile Crescent / Göbekli Tepe / Çatalhöyük / Jericho / einkorn / emmer /
//   Holocene), 绝不套中国术语; §8 同时代的中国是唯一可用中文/中国概念
//   (粟/稻/长江/黄河) 的段落, 注入 receiving-end + mediator 的 synthesis。
// 3 lens / 11 nodes each / Rule 0 中性 / expectsRealAnswer 仅 N10+N11。
// 跨 lens micro-detail: 石磨 (磨麦的石磨 / quern) — 老猎人嗤之为「自找苦吃的石头」;
//   哥贝克力工匠看见聚会上有人用它磨出更多的粮喂饱人群; 农家少女是被它
//   磨坏了膝盖和手腕的那个人。三视角各触一次, 不互相点破。
// 无个人姓名 (这一万年没留下任何人的名字): 三个主角都是写实合成桥接人物。
// ─────────────────────────────────────────────────────────────────

export var hunterLens = {
  id: 'hunter-gatherer-actor',
  name: 'The Old Hunter-Gatherer',
  nameCn: '老一辈的狩猎采集者',
  role: 'actor',
  perspectiveTag: 'last-of-the-foragers',
  icon: '🏹',
  description: {
    cn: '肥沃新月地带（Fertile Crescent）边缘一支几十人游动小队里的年长者，没有名字，这一万年没为任何人留下名字。他懂的东西多得惊人：哪片坡春天先冒野麦、羚羊从哪道山口过、哪种根能吃哪种有毒。他一天只「工作」几小时，不矮、牙口好、几乎不知道传染病。在他眼里，那些开始蹲守一块地、天天弯腰伺候庄稼的年轻人，是在自找苦吃。这一遍让你站在「最后一代猎人」的位置，去问那个最锋利的问题：如果种地让人更累、更矮、更病，他们到底图什么？',
    en: 'An elder in a roaming band of a few dozen people, at the edge of the Fertile Crescent, with no name - these ten thousand years left no one a name. He knows a staggering amount: which slope greens with wild wheat first in spring, which pass the gazelle cross, which root you can eat and which is poison. He "works" only a few hours a day, is not short, has good teeth, and hardly knows what disease is. In his eyes, the young people who have begun to squat over one patch of ground and bend over crops all day are bringing suffering on themselves. This pass puts you in the place of the last of the foragers, to ask the sharpest question: if farming makes people more tired, shorter, and sicker, what on earth are they after?',
  },
  storyboard: [
    {
      id: 'early-humans-hunter-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '大约一万两千年前（约公元前 10000 年），西亚一片弯成月牙形的土地，叫 Fertile Crescent（肥沃新月地带）。我是这一带一支小队里的老人。\n\n我不告诉你名字——不是不肯，是这一万年没人替任何人留下过名字。我代表的是一整代人：农业到来前，最后的狩猎采集者。\n\n我们几十个人一起走，没有固定的家。我懂的东西多得惊人：哪片坡春天先冒野麦、羚羊从哪道山口过、哪种根能吃、哪种有毒。我一天「干活」也就几个小时，剩下的时间在走、在讲故事、在看孩子。\n\n我不矮，牙口好，几乎不知道什么叫传染病。\n\n可这几年，我看见有些年轻人开始做一件怪事：蹲守在一块地上，天天弯腰伺候几棵草。这一遍，你坐进我这个位置，看一件我到死都觉得愚蠢的事，怎么改变了整个人类。',
        en: 'About twelve thousand years ago (around 10000 BCE), in a strip of land in western Asia bent like a crescent, called the Fertile Crescent. I am an old man in a band of this region.\n\nI will not tell you my name — not because I refuse, but because these ten thousand years left no one a name. I stand for a whole generation: the last of the hunter-gatherers, before farming came.\n\nWe walk together, a few dozen of us, with no fixed home. I know a staggering amount: which slope greens with wild wheat first in spring, which pass the gazelle cross, which root you can eat, which is poison. I "work" only a few hours a day; the rest of the time I walk, tell stories, watch the children.\n\nI am not short, my teeth are good, and I hardly know what disease is.\n\nBut these last years I have seen some young people do a strange thing: squatting over one patch of ground, bending all day to tend a few plants. This pass puts you in my seat, to watch a thing I will think foolish until I die change all of humankind.',
      },
      deliverGoal: 'N1 hook — 约 1.2 万年前 Fertile Crescent 肥沃新月 + 老猎人自我介绍 (不给名字/这一万年没留名字/代表最后一代狩猎采集者) + 游动小队懂得惊人 (野麦/羚羊山口/可食有毒的根) + 一天只干几小时/不矮/牙好/几乎无传染病 + 这一遍视角 (看一件我觉得愚蠢的事怎么改变了整个人类)',
      engagementHook: '我一天只「干活」几小时，牙口好、几乎不生病——可有人开始天天弯腰伺候几棵草。你愿意从「最后一代猎人」的眼睛，看这件改变了全人类的怪事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-hunter-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先让你看清，我们这套活法有多稳。\n\n我们不种地，我们「读」大地。春天哪片坡先绿，夏天哪里有浆果，秋天羚羊群从哪条道迁过来——这些不是我一个人的本事，是几十万年一代代传下来的本事。\n\n我们吃得很杂：野麦、坚果、根茎、浆果、鱼、各种猎物。哪一样歉收了，还有别的十样顶上。这是我们最大的保险——不把命押在一种东西上。\n\n我们扛不动太多东西，也囤不了太多粮。所以我们之间，没有谁家比谁家富得多。东西少，反而人人差不多。\n\n这套活法，几十万年验证过，喂活了一代又一代人，把我们的脚印留遍了除一块冰原外的每块大陆。\n\n所以当我看见年轻人要把这套丢掉、去赌一块地，我第一个念头是：你们疯了吗？',
        en: 'First let me show you how steady our way of life is.\n\nWe do not farm; we "read" the land. Which slope greens first in spring, where the berries are in summer, which trail the gazelle herds migrate down in autumn — this is not the skill of one man, but a skill handed down across hundreds of thousands of years.\n\nWe eat widely: wild wheat, nuts, roots, berries, fish, all kinds of game. If one thing fails, ten others take its place. This is our greatest insurance — never staking our lives on a single thing.\n\nWe cannot carry much, and we cannot store much grain. So among us, no household is much richer than another. With few things, people stay roughly equal.\n\nThis way of life, tested over hundreds of thousands of years, fed one generation after another, and left our footprints across every continent but one sheet of ice.\n\nSo when I see the young wanting to throw this away and bet on a single patch of ground, my first thought is: have you lost your minds?',
      },
      deliverGoal: 'N2 setup — 游动活法多稳 + 不种地是「读」大地 (春绿夏果秋羚羊迁/几十万年传下) + 吃得杂=最大保险 (一样歉收十样顶/不押在一种东西上) + 扛不动囤不了→人人差不多 (东西少反而平等) + 几十万年验证脚印遍每块大陆 + 老猎人念头「年轻人要丢掉这套去赌一块地，疯了吗」',
      engagementHook: '我们吃得很杂，一样歉收还有十样顶上——这是几十万年验证过的活法。你觉得「不把命押在一种东西上」，和「专心种好一样东西」，哪个更安全？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-hunter-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '可我也得诚实：这几年，天和地都在变，我心里也有点发虚。\n\n大约一万一千多年前，那场漫长的大寒冷（最后一次冰期）退了，天气一年年变暖、变稳。地质学家后来给这个新时代起了个名字，叫 Holocene（全新世）。\n\n变暖本是好事。可好猎物好像比我年轻时少了，人却好像比从前多了。有些年头，光靠走、靠采、靠猎，已经不太够吃。\n\n（这一段我说不准。气候为什么逼人去种地，后来的学者也在争——我只能告诉你，我活着时确实感到日子比父辈紧了。）\n\n就是在这种时候，有人盯上了那片先冒头的野麦。他们想：与其追着它满坡跑，不如把种子撒在近处，留下来等它长。\n\n我懂他们的难处。可把一年的命押在「天明年还会下雨、还会回暖」上——这个赌，我赌不下去。',
        en: 'But I must be honest: these last years the sky and the land have both been changing, and I feel a little uneasy too.\n\nAbout eleven thousand years ago, that long great cold (the last ice age) drew back, and the weather grew warmer and steadier year by year. Scholars later gave this new age a name: the Holocene — a warm, steady age that is still going on today.\n\nThe warming was a good thing in itself. But the good game seems fewer than in my youth, and the people seem more than before. In some years, walking, gathering, and hunting are no longer quite enough to eat.\n\n(Here I cannot be sure. Why the climate pushed people toward farming, later scholars still argue — I can only tell you that, in my lifetime, the days did feel tighter than in my fathers\' time.)\n\nIt was in such times that someone fixed their eyes on that early wild wheat. They thought: rather than chase it all over the slope, scatter the seeds nearby, and stay to wait for it to grow.\n\nI understand their difficulty. But to stake a whole year\'s life on "next year the rain will still come, the warmth will still return" — that is a bet I cannot bring myself to make.',
      },
      deliverGoal: 'N3 setup — 老猎人诚实发虚 + 约 1.1 万年前冰期退/变暖稳定→Holocene 全新世 (两套尺子之一: years ago) + 好猎物变少人变多有些年不够吃 + anti-fab 括号短句 (气候为何逼人种地学者在争/我只能说日子比父辈紧) + 有人盯上野麦想撒种留下等长 + 老猎人「把一年命押在明年还下雨还回暖上，这赌我赌不下去」',
      engagementHook: '冰期退了、天变暖变稳，可好猎物少了、人多了，有些年不够吃。当老办法开始不够用，是该死守它，还是该赌一个全新的、谁也没试过的活法？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-hunter-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你的孙辈里，有人不肯跟队走了。他在近处一块地上，撒下了一把野麦的种子，然后蹲下来，说要等它长。\n\n你第一反应不是好奇，是火大。\n\n你这一辈子学会的所有本事——读云、读风、读兽粪、认路、认草——在他这块地上，一样都用不上了。他不再需要你。\n\n你劝他：天不下雨呢？一场虫害全完呢？守着一种草过日子，比我们吃十样东西，险得多。\n\n他不听。他说，跟着兽群走太累了，他想有个能睡安稳的地方，想让孩子不必从小就跟着跑。他还说，他每年只留下最听话、成熟了也不自己掉的那种麦种——后来人管它叫 einkorn、emmer（单粒麦、二粒麦）。他以为是他在改造麦，可我看，是麦也在把他一点点拴在这块地上。\n\n你看着他蹲在那块小小的地上，弯着腰，一下一下地侍弄那几棵草——那个姿势，你从没在一个自由人身上见过。\n\n你心里那句话顶到了嘴边：你这不是在种庄稼，你是在给自己造一个再也走不掉的笼子。',
        en: 'Now you are me.\n\nAmong your grandchildren, one will no longer follow the band. On a patch of ground nearby he has scattered a handful of wild wheat seeds, then squatted down, saying he will wait for it to grow.\n\nYour first reaction is not curiosity. It is anger.\n\nEvery skill you learned in your whole life — reading the clouds, the wind, the animal dung, knowing the paths, knowing the plants — on his patch of ground, not one of them is of any use. He no longer needs you.\n\nYou warn him: what if the rain does not come? What if one plague of insects ends it all? To live by guarding a single plant is far riskier than our eating ten different things.\n\nHe does not listen. He says following the herds is too tiring; he wants a place where he can sleep in peace, and wants his children not to have to run from the time they are small. He says, too, that each year he keeps only the most obedient seed, the kind that does not drop on its own even when ripe — later people would call it einkorn and emmer. He thinks he is reshaping the wheat; but the way I see it, the wheat is also tying him, bit by bit, to this land.\n\nYou watch him squat over that tiny patch of ground, bent over, tending those few plants one motion at a time — a posture you have never seen on a free man.\n\nThe words rise to your lips: you are not growing crops; you are building yourself a cage you will never be able to walk out of.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 孙辈不肯跟队/撒野麦种蹲下等长 + 老猎人第一反应是火大不是好奇 (一辈子本事读云风兽粪认路认草在那块地全用不上/他不再需要你) + 劝他 (天不下雨/虫害/守一种草比吃十样险) + 孙辈不听 (跟兽群太累想睡安稳想孩子不必从小跑) + 弯腰姿势从没在自由人身上见过 + 「你不是种庄稼你是给自己造一个走不掉的笼子」',
      engagementHook: '我看着他弯腰侍弄那几棵草——那个姿势，我从没在一个自由人身上见过。「为了有个安稳的家而失去自由」，你觉得值不值？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-hunter-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '过了些年，我不得不承认一件让我难受的事：那块地，真的能多养活人。\n\n一小块种了麦子的地，挤出来的粮食，比同样大小的野地多得多。粮一多，孩子就生得多、活得多。\n\n这就是我最怕的地方。\n\n我们游动的人，生孩子要隔好几年——你不可能一边赶路一边抱两个走不动的娃。可定下来的人不一样，孩子一个接一个地生。\n\n几十年里，蹲着种地的那一支，人越来越多；像我们这样走着的，人却没怎么变。\n\n我忽然明白了一件可怕的事：这场较量，比的根本不是谁活得更好——是谁的人更多。我们活得更自由、更健康、更平等，可这些，在「谁的人多」面前，一样都不算数。\n\n种地的人未必更幸福，但他们更多。而历史，好像只数人头。',
        en: 'After some years I had to admit a thing that pained me: that patch of ground really can feed more people.\n\nA small plot sown with wheat squeezes out far more food than the same size of wild land. With more grain, more children are born and more survive.\n\nThis is the very thing I feared most.\n\nWe roaming people must space our children years apart — you cannot carry two children who cannot yet walk while you are on the move. But settled people are different; their children come one after another.\n\nOver a few decades, the line that squatted to farm grew more and more numerous, while those of us who walked hardly changed in number.\n\nSuddenly I understood a terrible thing: this contest was never about who lives better. It was about whose people are more. We live more freely, more healthily, more equally — yet in the face of "whose people are more," none of that counts for anything.\n\nFarmers may not be happier, but they are more. And history, it seems, only counts heads.',
      },
      deliverGoal: 'N5 story — 老猎人难受承认那块地真能多养活人 (小块麦地挤出粮远多于同样大野地/粮多→孩子生得多活得多) + 最怕的地方 + 游动生孩子要隔几年 (赶路抱不动两娃) vs 定居一个接一个生 + 几十年种地一支人越来越多/走的人没变 + 醒悟「较量比的不是谁活得好是谁人多/自由健康平等在人头面前不算数」+ 「历史好像只数人头」',
      engagementHook: '种地的人未必更幸福，但他们更多——而历史，好像只数人头。当「活得好」和「人更多」冲突时，你觉得哪一个才算「赢」？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-hunter-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我跟你说一件我亲眼见过、却始终看不顺眼的东西——一块石头。\n\n那是种地人家门口的一块石磨：下面一块大的，上面一块小的，把麦粒夹在中间，一下一下地碾，碾成能煮糊的粉。\n\n我第一次看见有人用它，是在我那孙辈的村子里。一个小女孩，跪在地上，从天亮碾到天黑。来回，来回，没完没了。\n\n我心里一阵发凉。我们追猎物，是跑、是走、是站着的；可这孩子，是跪着的，一整天，对着一块石头。\n\n（我那时不懂，但这块石头会在她身上留下印子。后来的人挖出这些定居者的骨头，发现常年磨麦磨坏了膝盖和手腕——那是真的，刻在骨头上。）\n\n在我眼里，这块石磨就是那个笼子的样子：它磨出了喂饱很多人的粮，也磨弯了一个孩子的身子。这两件事，是同一块石头干的。',
        en: 'Let me tell you of a thing I saw with my own eyes and never could stomach — a stone.\n\nIt was a grinding stone at the door of a farming household: a large stone below, a small one above, the grain pinched between them, ground stroke by stroke into flour you can boil into gruel.\n\nThe first time I saw someone use it was in my grandchild\'s village. A small girl, kneeling on the ground, grinding from dawn to dark. Back and forth, back and forth, without end.\n\nA chill went through me. We chase game running, walking, standing; but this child was kneeling, a whole day, facing a stone.\n\n(I did not understand it then, but this stone would leave its marks on her. Later people dug up the bones of these settlers and found that years of grinding wore out the knees and wrists — that is real, written into the bone.)\n\nIn my eyes this grinding stone is the very shape of that cage: it ground out the grain that fed so many, and it ground bent the body of a child. Both things were done by the same stone.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 石磨从老猎人角度 (下大上小石磨/碾麦粒成粉/孙辈村子小女孩跪着从天亮碾到天黑) + 老猎人发凉「我们追猎物是跑是站这孩子是跪着对一块石头」+ anti-fab 括号短句 (我那时不懂但骨头挖出磨坏膝盖手腕是真的刻在骨头上) + 「石磨就是笼子的样子: 磨出喂饱很多人的粮也磨弯一个孩子的身子，同一块石头干的」。只碰石磨从他角度，不揭另两视角',
      engagementHook: '同一块石磨，磨出了喂饱很多人的粮，也磨弯了一个孩子的身子。当一样东西既养活了很多人、又压垮了某些人，你会怎么看它？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-hunter-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '又过了些年，村子大了。\n\n起先只是几户人家蹲在一处。后来房子越盖越多，泥砖房子一座挨一座，里面摆着存粮的大罐子。在我们这一带，有的地方聚起了几百人、上千人——这在我年轻时，是想都不敢想的。\n\n粮食第一次能「存」起来，这件事，我越看越不安。\n\n我们游动的人，从来存不了粮——你能囤的，就是你能扛的。所以从来没有谁,能靠囤着别人没有的东西，说话比别人响。\n\n可在这些村子里，我看见了新东西：有的人家罐子更满，有的人开始不下地，有的人说话别人就得听。\n\n我活了一辈子，从没见过人和人之间这样分层。\n\n我说不出那个词——后来的人管它叫「不平等」。我只知道，从把粮食存进罐子那天起，有些人，开始比另一些人「大」了。这东西，我们游动的几十万年里，从来没有过。',
        en: 'A few more years, and the village grew.\n\nAt first it was only a few households squatting in one place. Then the houses multiplied, mud-brick homes packed one against another, with great jars of stored grain inside. In our region, some places gathered hundreds, even a thousand people — a thing I would not have dared imagine in my youth.\n\nThat grain could be "stored" for the first time — the more I watched it, the more uneasy I grew.\n\nWe roaming people could never store grain — what you could hoard was what you could carry. So no one could ever speak louder than others by hoarding what others lacked.\n\nBut in these villages I saw a new thing: some households\' jars were fuller, some people began not to go to the fields, some people spoke and others had to listen.\n\nI have lived a whole life and never seen people layered apart like this.\n\nI cannot say the word — later people would call it "inequality." I only know that from the day grain went into the jars, some people began to grow "bigger" than others. This thing, in our hundreds of thousands of years of roaming, we never had.',
      },
      deliverGoal: 'N7 story — 村子大了 (几户→泥砖房一座挨一座/存粮大罐子/聚起几百上千人/年轻时想不敢想) + 粮第一次能存让老猎人不安 + 游动存不了粮 (能囤的就是能扛的/没人能靠囤别人没有的东西说话响) + 村里新东西 (有人罐子更满/有人不下地/有人说话别人得听) + 从没见过人这样分层 + 说不出那个词「不平等」+ 「从粮进罐子那天起有些人开始比另一些人大，游动几十万年从来没有过」',
      engagementHook: '从粮食第一次能存进罐子那天起，有些人开始比另一些人「大」了——这东西，我们游动的几十万年里从来没有过。你觉得「能囤东西」和「不平等」之间，有没有关系？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-hunter-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '到我老得快走不动时，我终于看明白了一件最让我心凉的事：他们回不去了。\n\n我一直以为，等他们尝够了种地的苦——更累、更病、更不平等——总有一天会醒过来，丢下锄头，重新跟我们走。\n\n不会了。\n\n那块地，那个村子，已经养起了几百上千人。这么多人，那点野地根本喂不饱；这么多人，也再散不回我们那种几十人的小队。\n\n他们被自己造出来的「成功」，锁在了这条路上。粮越多→人越多→越离不开地→越要多种粮。一个圈，越转越紧，再也松不开。\n\n这就是我到死都想不通的地方：我们用更自由、更健康的活法，输给了一种更累、更病、却能养更多人的活法。而赢的那一方，连「认输回头」的退路都没有了。\n\n往前，是一条再也下不去的台阶。我不知道那台阶尽头是天堂，还是更大的笼子。',
        en: 'By the time I was old and could barely walk, I finally saw the thing that chilled me most: they cannot go back.\n\nI had always thought that once they had tasted enough of farming\'s bitterness — more tired, more sick, more unequal — one day they would wake, drop the hoe, and walk with us again.\n\nThey will not.\n\nThat patch of ground, that village, has come to feed hundreds, a thousand people. So many people the wild land could never feed; so many people who can never scatter back into our bands of a few dozen.\n\nThey are locked onto this road by the "success" they made themselves. More grain leads to more people, to greater dependence on the land, to needing to grow still more grain. A circle, winding tighter and tighter, that can never be loosened again.\n\nThis is what I will not understand until I die: we, with a freer and healthier way of life, lost to a way that is more tiring and sicker, yet can feed more people. And the winning side has not even the retreat of "admitting defeat and turning back."\n\nForward is a staircase you can never step down from. I do not know whether the end of that staircase is heaven, or a larger cage.',
      },
      deliverGoal: 'N8 story (the trap) — 老猎人最心凉的醒悟「他们回不去了」+ 一直以为尝够苦会醒过来丢锄头回来 + 不会了 (那点野地喂不饱几百上千人/这么多人也散不回几十人小队) + 被自己造的成功锁在路上 (粮多→人多→离不开地→多种粮一个圈越转越紧) + 想不通「更自由更健康输给更累更病却能养更多人的活法/赢的一方连认输回头退路都没了」+ 「往前是再也下不去的台阶/尽头是天堂还是更大的笼子」',
      engagementHook: '我以为他们尝够苦会回头跟我们走——可那点野地再也喂不饱那么多人了。当一种活法成功到「再也回不去」，这是好事，还是另一种困住？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-hunter-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张我这辈子根本看不见的大地图。\n\n我以为种地这件怪事，只发生在我们这片月牙地上。我错了。\n\n就在和我们差不多、或者我之后不久的那段年代，地球好几个角落的人，谁也没通知谁，各自做了和我孙辈一模一样的事。\n\n（这张地图是后来的人才拼出来的——我活着时，谁也不可能知道海那头发生了什么。）\n\n在东方很远的地方，有两条大河。一条边上的人，驯化了一种泡在水里的野草，后来叫稻；另一条边上的人，驯化了一种耐旱的小籽，后来叫粟（小米）。还有更远的地方，有人驯化了一种后来叫玉米的东西。\n\n没有人抄谁。农业，是人类在好几个地方，面对差不多的处境，不约而同想出来的同一个主意。\n\n这让我更不安了：原来这不是我孙辈一个人的糊涂。这是整个人类，在差不多的时候，一起转的那个弯。',
        en: 'Let me step back and show you a great map I could never have seen in my whole life.\n\nI thought this strange thing, farming, happened only on our crescent of land. I was wrong.\n\nAround our own time, or not long after me, people in several corners of the earth, none of them telling the others, each did exactly what my grandchild did.\n\n(This map was only pieced together by later people — in my lifetime, no one could possibly know what happened across the sea.)\n\nFar away to the east there are two great rivers. The people by one river domesticated a wild grass that soaks in water, later called rice; the people by the other domesticated a drought-hardy little seed, later called millet. And farther still, people domesticated a thing later called maize.\n\nNo one copied anyone. Farming was the same idea that humankind, in several places, facing roughly the same circumstances, hit upon together without agreeing to.\n\nThis unsettled me even more: so it was not my grandchild\'s folly alone. It was all of humankind, at roughly the same time, turning the same corner together.',
      },
      deliverGoal: 'N9 zoom-out + 多中心起源 (§8 引子, 西亚 lens 用真实地名/不展开中国术语只点河与作物) — 老猎人以为种地只在月牙地错了 + anti-fab 括号 (这张地图后来人才拼出/我活着不可能知道海那头) + 多中心独立 (东方两条大河: 一河驯化泡水里野草后来叫稻/另一河驯化耐旱小籽后来叫粟/更远有玉米) + 没人抄谁「面对差不多处境不约而同想出同一个主意」+ 更不安「不是我孙辈一人的糊涂是整个人类差不多时候一起转的弯」',
      engagementHook: '地球好几个角落的人，谁也没通知谁，各自想出了「种地」这同一个主意。这说明农业是「迟早会发生的必然」，还是「好几次惊人的巧合」？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-hunter-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，请你替这场转弯称一称。两种说法都站得住，你来掂。\n\n一种说法（也是我至死的看法）：这是一笔糟糕的买卖。我亲眼看着种地的人，比我们更累、更矮、牙更坏、第一次有了传染病、第一次分出了穷富。我们用更短的劳作、更杂的饮食、更平等的日子，换来了什么更好的吗？没有。对活着的每一个人，这很可能是一次退步。\n\n另一种说法（我活着时不肯认的）：这是人类最伟大的一次转身。正因为有人肯蹲下来种地、肯把命押在种子上，人类才第一次能存粮、能定居、能越养越多——后来所有的村镇、城市、文字、一切，都从这一步长出来。对人类这个整体，这是天大的成功。\n\n这两边不是「谁对谁错」。是同一件事的两张脸：让人类这个物种「伟大」的，和让我孙辈那代人「受苦」的，是同一件事。\n\n这是一所学校的老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, weigh this turning for me. Both views stand. You do the weighing.\n\nOne view (and the one I hold to my death): it was a bad bargain. With my own eyes I watched the farmers grow more tired than us, shorter, with worse teeth, with disease for the first time, with rich and poor parted for the first time. We traded shorter labor, a more varied diet, and more equal days — for something better? No. For every living person, it was very likely a step backward.\n\nThe other view (the one I would not admit while alive): it was humankind\'s greatest turn. Precisely because some were willing to squat and farm, to stake their lives on seeds, humankind could for the first time store grain, settle, and grow ever more numerous — and from this step grew all the villages, cities, writing, everything. For humankind as a whole, it was an enormous success.\n\nThese are not "who is right and who is wrong." They are two faces of one thing: what made the human species "great," and what made my grandchild\'s generation "suffer," are the same thing.\n\nThis is the hard problem a teacher at a school will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (老猎人至死看法: 糟糕的买卖/亲眼见种地人更累矮牙坏第一次传染病第一次穷富/对活着每个人是退步) / 另一种说法 (活着不肯认: 最伟大转身/肯蹲下种地押命存粮定居越养越多→村镇城市文字一切/对人类整体天大成功) / 同一件事两张脸「让物种伟大的和让我孙辈受苦的是同一件事」/ neutral school name (一所学校的老师) / 想 30 秒 / 两边都站得住',
      engagementHook: '让人类这个物种「伟大」的，和让我孙辈那代人「受苦」的，是同一件事。一场对群体是巨大成功、对当时个人却是退步的变化，到底算不算「进步」？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'early-humans-hunter-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是一个守旧老人的声音——一个被时代甩下、至死不肯认输的人。\n\n请记住：这只是一边。我把种地讲成「自找苦吃的笼子」，听起来甚至有点道理——可这正是我这种视角最该警惕的地方：我太爱我那套活法，以至于很可能看小了它给后人带来的全部东西。\n\n这一遍里，有两个人从头到尾没真正开口。一个是凿巨石的工匠——在还没人正经种地的时候，他和同伴就搬动几吨重的石头、立起石阵办仪式；他也许会告诉你，把人推向定居的，不只是肚子，还有「想聚在一起办大事」的念头。另一个，是那个跪在石磨前的农家少女——她为这场革命付的账单最重，却最没人替她说话。等你换上他们的视角，他们会狠狠地挑战我刚说的每一句。\n\n最后，留一样东西给你。还记得那块让我发凉的石磨吗——磨出了粮，也磨弯了一个孩子的身子？\n\n换个视角再走一遍，你会从另一个人那里，再碰见它一次。到那时，它对你就不再只是一块石头了。',
        en: 'What you just heard was the voice of a stubborn old man — one cast off by his age, who would not admit defeat to his death.\n\nRemember: it is only one side. I told farming as a "self-inflicted cage," and it can even sound a little reasonable — but that is exactly what my kind of view should beware of: I love my way of life so much that I have very likely seen too small all that it brought to those who came after.\n\nIn this pass, two people never truly spoke. One is the stone-carver — before anyone farmed in earnest, he and his fellows moved stones of several tons and raised a ring of pillars for ceremony; he might tell you that what pushed people toward settling was not only the belly, but also the longing to gather and do something great together. The other is that farm girl kneeling at the grinding stone — she paid the heaviest bill for this revolution, yet has had the fewest to speak for her. When you switch to their perspectives, they will challenge, hard, every sentence I just said.\n\nAnd one last thing to leave with you. Do you remember the grinding stone that chilled me — that ground out grain, and ground bent a child\'s body?\n\nWalk this through once more from another perspective, and you will meet it again, through someone else. By then it will no longer be just a stone to you.',
      },
      deliverGoal: 'N11 close/meta — 你听的是守旧老人一边 (被时代甩下至死不认输/把种地讲成笼子能讲得通最该警惕: 太爱旧活法看小了它给后人的全部) + 还没听到: 凿巨石的工匠 (没人正经种地时就搬几吨石头立石阵办仪式/推人定居的不只肚子还有想聚在一起办大事) + 跪石磨的农家少女 (付账单最重最没人说话) 会挑战每句 + 暗示石磨会从另一视角再碰见一次 (不直接解释 echo)',
      engagementHook: '我太爱我那套活法，可能看小了它给后人带来的全部。你听完我这一边，最想去问那个凿巨石的工匠、那个跪在石磨前的农家少女什么问题？',
      expectsRealAnswer: true,
    },
  ],
};

export var gobekliLens = {
  id: 'gobekli-builder-mediator',
  name: 'The Stone-Carver of Göbekli Tepe',
  nameCn: '哥贝克力石阵的工匠',
  role: 'lonely-witness',
  perspectiveTag: 'faith-before-farming',
  icon: '⛰️',
  description: {
    cn: '一个主要还靠狩猎采集、却在凿巨石的工匠，挂在一处真实遗址上，Göbekli Tepe（哥贝克力石阵，约前 9500 年，今土耳其东南）。他没有名字。他还没有教科书式的农田、金属工具、家畜，却和成百上千同类用石头工具凿出几吨重的 T 形巨柱，刻上狐狸、野猪、毒蛇、秃鹫，立成一圈圈石阵。（近年在这座山头附近也挖出磨石、石臼，有人据此认为这里的人可能已经半定居、就近利用野麦，「建它的人完全不务农」是早期的说法，现在学者看法在变。）他站在人类历史最微妙的折点上，有一种有争议的可能：是「想聚在一起办大事」的需求，先把人推向了定居和农业。这一遍让你站在转折点上，看一个反直觉的可能：信仰，也许走在农业前头。',
    en: 'A craftsman who still lives mainly by hunting and gathering, yet carves great stones, anchored to a real site - Göbekli Tepe (c. 9500 BCE, in today\'s southeastern Turkey). He has no name. He has no textbook-style fields, metal tools, or livestock yet, yet with hundreds of his kind he chips out T-shaped pillars weighing several tons with stone tools, carving foxes, wild boar, snakes, and vultures, and raises them into rings of stone. (Near this hilltop, grinding stones and stone mortars have also been dug up in recent years; some take this to mean the people here may already have been semi-settled and using wild wheat close at hand - "the people who built it did not farm at all" is an early claim, and scholars\' views are changing.) He stands at the most delicate hinge of human history - one contested possibility is that the need to gather and do something great pushed people toward settling and farming. This pass puts you at the turning point, to see a counter-intuitive possibility: that faith may walk ahead of farming.',
  },
  storyboard: [
    {
      id: 'early-humans-gobekli-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '所有人都说，人得先吃饱，才有闲心搞别的。我想给你看一件，把这句话整个推翻的东西。\n\n大约一万一千五百年前（约公元前 9500 年），今天土耳其的东南，有一座山头。我和成百上千的人，在那里做一件听起来不可能的事：我们用石头工具，凿出几吨重的 T 形巨柱，在上面刻满狐狸、野猪、毒蛇、秃鹫，再把它们一根根立起来，围成一圈一圈。\n\n后来的人给这座山起了个名字，叫 Göbekli Tepe（哥贝克力石阵）。\n\n请你记住一件最要紧的事：我们还没有教科书里那种成片的农田，没有金属工具，没有一头家畜。我们主要还靠狩猎采集过活。\n\n我没有名字——这一万年没给任何人留下名字。这一遍，你站到我身边，站在人类历史最微妙的那个折点上，看一个反直觉的可能：也许，是信仰，先把人推向了农业。',
        en: 'Everyone says people must first be fed before they have the leisure for anything else. I want to show you a thing that overturns that sentence entirely.\n\nAbout eleven thousand five hundred years ago (around 9500 BCE), in what is today southeastern Turkey, there was a hilltop. With hundreds of others I did a thing there that sounds impossible: with stone tools we chipped out T-shaped pillars weighing several tons, carved them all over with foxes, wild boar, snakes, and vultures, and raised them one by one into rings.\n\nLater people gave this hill a name: Göbekli Tepe.\n\nPlease remember the most important thing: we have no broad textbook-style fields yet, no metal tools, not one head of livestock. We still live mainly by hunting and gathering.\n\nI have no name — these ten thousand years left no one a name. This pass, you stand beside me, at the most delicate hinge of human history, to see a counter-intuitive possibility: that perhaps faith pushed people toward farming first.',
      },
      deliverGoal: 'N1 hook — 推翻「先吃饱才搞别的」+ 约 1.15 万年前今土耳其东南山头 + 成百上千人石头工具凿几吨 T 形巨柱刻狐狸野猪毒蛇秃鹫立成圈 + Göbekli Tepe 哥贝克力石阵 + 最要紧: 还没农田/金属工具/家畜还是狩猎采集者 + 不给名字 + 这一遍站在最微妙折点看反直觉可能「信仰先把人推向农业」',
      engagementHook: '我们还没有农田、没有一头家畜，却搬动几吨重的石头立起石阵办仪式。「人得先吃饱才有闲心搞文化」这句话，会不会从一开始就说反了？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-gobekli-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先让你明白，我和那个守旧的老猎人，本是同一种人。\n\n我也是狩猎采集者。我这辈子大半时间在追猎物、采野果、读云读风。我也吃得很杂，也不矮、牙口也好，也几乎不知道传染病是什么。\n\n我们这一带，野麦满坡、猎物成群——这片地方后来叫 Fertile Crescent（肥沃新月地带），是地球上少有的、随手就能采到、能捕到大量食物的好地方。\n\n正因为东西多，我们才养得起一件别处养不起的奢侈：每年某些时候，一支支远方的小队，约着一起爬上这座山头，搬石头、刻巨柱、办仪式、吃喝、唱歌。\n\n所以你别把我想成什么神秘的祭司。我和那个老猎人一样，懂大地、靠大地吃饭。\n\n不一样的只有一点：他这辈子，从没为了「聚在一起办一件大事」，离开过他熟悉的路。而我，每年都为了这座山头，回来一次。',
        en: 'First let me make you understand: that stubborn old hunter and I were once the same kind of person.\n\nI too am a hunter-gatherer. I have spent most of my life chasing game, gathering wild fruit, reading clouds and wind. I too eat widely, am not short, have good teeth, and hardly know what disease is.\n\nIn our region wild wheat covers the slopes and game runs in herds — this place was later called the Fertile Crescent, one of the rare spots on earth where you can gather and catch great amounts of food within reach.\n\nIt is precisely because food was plentiful that we could afford a luxury others could not: in certain seasons each year, band after distant band would agree to climb this hill together, to move stones, carve pillars, hold ceremony, eat and drink and sing.\n\nSo do not imagine me as some mysterious priest. Like that old hunter, I know the land and live off the land.\n\nThe only difference is this: in his whole life he never left his familiar paths for the sake of "gathering to do one great thing." And I, every year, return for the sake of this hill.',
      },
      deliverGoal: 'N2 setup — 工匠和守旧老猎人本是同一种人 (也是狩猎采集者/追猎采野读云风/吃得杂不矮牙好几乎无传染病) + 这一带 Fertile Crescent 野麦满坡猎物成群 (随手采到捕到大量食物的好地方) + 正因东西多养得起奢侈 (每年某些时候远方小队约着爬山头搬石刻柱办仪式吃喝唱歌) + 别把我想成神秘祭司 + 唯一不一样: 老猎人从没为聚在一起办大事离开熟路/我每年为这座山头回来一次',
      engagementHook: '我和那个守旧的老猎人本是同一种人，只有一点不同：他从不为「聚在一起办件大事」离开熟路，而我每年都为这座山头回来一次。是什么，能让一个游动的人，年年回到同一个地方？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-gobekli-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '你大概想问：你们到底为什么要费这么大劲，凿几吨重的石头？\n\n说实话，我也没法给你一个能写在纸上的答案。\n\n（这正是哥贝克力石阵最难的地方：石头还在，可它们到底是干什么的，后来的学者只能猜——是神庙？是祭祖的地方？是各队聚会的场子？没有文字，谁也不敢说死。下面是我作为「这个位置上的人」会怎么讲，不是档案里逐字写下的话。）\n\n我能告诉你的是：我们把最敬畏的东西，刻上了那些石柱——狐狸、野猪、毒蛇、还有专吃死人的秃鹫。这些不是装饰。它们和生、和死、和我们看不见却信着的东西有关。\n\n立这些柱子，要好多支小队、好多人、好多天，一起出力。一个人，一支小队，凿不动几吨重的石头。\n\n所以这座山头，最神奇的不是石头本身。是它头一回，把本来各走各路的那么多人，因为同一件「看不见的大事」——一件你看不见、摸不着，却愿意为它出力气、甚至拼命的事，比如拜神、纪念死去的人——聚到了一起。',
        en: 'You probably want to ask: why on earth did you go to such trouble to chip out stones weighing several tons?\n\nHonestly, I cannot give you an answer to write on paper.\n\n(This is the hardest thing about Göbekli Tepe: the stones remain, but what they were truly for, later scholars can only guess — a temple? a place to honor the dead? a gathering ground for the bands? With no writing, no one dares say for certain. What follows is how I, as the person in this place, would tell it, not words recorded in any archive.)\n\nWhat I can tell you is this: we carved the things we held in most awe onto those pillars — foxes, wild boar, snakes, and the vulture that feeds on the dead. These are not decoration. They have to do with life, with death, with what we cannot see yet believe in.\n\nTo raise these pillars takes many bands, many people, many days, all pulling together. One person, one band, cannot move a stone of several tons.\n\nSo the most marvelous thing about this hill is not the stones themselves. It is that, for the first time, it gathered so many people who had each gone their own way, together, for one "unseen great thing" — a thing you cannot see or touch, yet will spend your strength on, even risk your life for, such as worshipping a god or honoring the dead.',
      },
      deliverGoal: 'N3 setup — 为什么费劲凿几吨石头 + anti-fab 大括号 (哥贝克力最难: 石头还在但干什么用学者只能猜神庙/祭祖/聚会场无文字不敢说死; 下面是我这个位置会怎么讲非档案逐字) + 把最敬畏的刻上石柱 (狐狸野猪毒蛇专吃死人的秃鹫/不是装饰/和生死和看不见却信的东西有关) + 立柱要好多队好多人好多天一起出力 (一人一队凿不动几吨) + 最神奇不是石头本身是头一回把各走各路的人因同一件看不见的大事聚到一起',
      engagementHook: '一个人、一支小队，凿不动几吨重的石头。这座山头最神奇的，不是石头，是它头一回把各走各路的那么多人，为了同一件「看不见的大事」聚到了一起。一个看不见的念头，为什么能让人聚起来出这么大的力？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-gobekli-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n这一年的聚会，来了比往年更多的人。石阵越立越大，活越来越重，要喂饱的嘴也越来越多。\n\n聚会那几天，光靠各队随手采来、猎来的东西，开始有点不够了。\n\n你站在半完工的石柱中间，心里冒出一个念头——一个会改变一切、可你自己完全没意识到的念头：与其每次都派人跑很远去采野麦，不如，在这山头近处，多撒点野麦的种子，留它们长着，明年聚会就近有得吃。\n\n你不是想「发明农业」。你脑子里压根没有「农业」这两个字。你只是想：让大家下次还能聚得成，让这件大事办得下去。\n\n你为的是那件看不见的大事。可你这一个小小的、为了「聚会有饭吃」的念头，正在不知不觉地，把人往「定居、种地」那条路上，推了一把。\n\n你愿意为了一件「看不见」的事，动手改变你和食物、和这块土地的关系吗？',
        en: 'Now you are me.\n\nThis year\'s gathering drew more people than before. The rings grow larger, the work grows heavier, and the mouths to feed grow more.\n\nDuring those gathering days, what each band gathered and hunted within reach began to fall a little short.\n\nYou stand among the half-finished pillars, and a thought rises in you — a thought that will change everything, yet that you yourself do not notice at all: rather than send people far off each time to gather wild wheat, why not scatter more wild-wheat seeds near this hill, leave them to grow, so next year\'s gathering has food close at hand.\n\nYou are not trying to "invent farming." The word "farming" is not in your head at all. You only think: let everyone be able to gather again next time, let this great thing carry on.\n\nYou do it for that unseen great thing. Yet this small thought of yours, for the sake of "having food at the gathering," is quietly giving people a push down the road toward "settling and farming."\n\nAre you willing, for the sake of an "unseen" thing, to set your hand to changing your relationship with food and with this land?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 这年聚会来更多人/石阵越立越大活越重要喂的嘴越多 + 聚会几天各队随手采猎开始不够 + 站半完工石柱间冒出会改变一切却自己没意识到的念头 (与其每次派人跑远采野麦不如山头近处多撒野麦种留它长明年聚会就近有吃) + 不是想发明农业 (脑子没有农业二字/只想让大家下次还能聚成让这件大事办下去) + 为看不见的大事却把人往定居种地推了一把 + 你愿不愿为看不见的事改变你和食物和土地的关系',
      engagementHook: '我脑子里压根没有「农业」这两个字。我只是想：让大家下次还能聚成，让这件大事办得下去。可就是这个小念头，把人往种地那条路上推了一把。改变历史的人，会不会常常根本不知道自己在改变历史？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-gobekli-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你看，这就是我和那个老猎人，吵得最凶的地方。\n\n老猎人说：是人先填饱了肚子、有了余粮、闲下来了，才有空盖神庙、搞信仰。他觉得这个顺序天经地义——肚子第一，神灵第二。\n\n可我站在这座山头上，看见的顺序，是反的。\n\n我们这群人，是先有了「想聚到一起、办一件看不见的大事」的念头，才被这个念头逼着，去山头近处多种点粮——好让这件大事一年一年办得下去。\n\n不是「吃饱了才盖神庙」。很可能是「为了盖神庙、为了聚在一起，才被逼着多种粮」。\n\n你品一下这个对调有多大：如果是这样，那把人类推向农业、推向定居、最后推向城市和文明的，第一推手也许根本不是肚子，而是——人想聚在一起、想信点什么、想一起办件大事的那股劲。\n\n所以别以为事情总是「先有原因再有结果」——有时是一件你原本只想顺手做的小事，倒过来把你整个人生改了。历史的因果，常常和我们的直觉，正好拧着来。',
        en: 'You see, this is where that old hunter and I quarrel most fiercely.\n\nThe old hunter says: people first filled their bellies, had surplus grain, grew idle, and only then had time to build temples and pursue faith. He thinks this order is self-evident — belly first, gods second.\n\nBut standing on this hill, the order I see is the reverse.\n\nWe, this crowd, first had the thought of "wanting to gather and do one unseen great thing," and only then were driven by that thought to grow more grain near the hill — so this great thing could carry on year after year.\n\nNot "fed first, then build the temple." Very likely it was "to build the temple, to gather together, we were driven to grow more grain."\n\nWeigh how large that swap is: if it is so, then the first thing that pushed humankind toward farming, toward settling, and at last toward cities and civilization, may not have been the belly at all, but the urge of people to gather, to believe in something, to do one great thing together.\n\nSo do not think a thing always goes "cause first, then result" — sometimes one small thing you only meant to do in passing turns around and changes your whole life. History\'s cause and effect often run exactly against our intuition.',
      },
      deliverGoal: 'N5 story (颠倒因果核心) — 工匠和老猎人吵最凶处 + 老猎人顺序 (先填饱肚子有余粮闲下来才盖神庙搞信仰/肚子第一神灵第二天经地义) + 工匠站山头看见顺序是反的 (先有想聚到一起办看不见大事的念头才被逼山头近处多种粮) + 「不是吃饱才盖神庙很可能是为盖神庙为聚在一起才被逼多种粮」+ 对调多大 (推人类向农业定居城市文明的第一推手也许不是肚子是想聚想信想一起办大事的劲) + 历史因果常和直觉拧着来',
      engagementHook: '老猎人说「先吃饱才有闲心搞信仰」；我站在石阵里看见的，却是反的——「为了搞信仰、为了聚在一起，才被逼着多种粮」。历史的因果，真的总是顺着我们的直觉走吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-gobekli-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想给你看一样小东西——一块石磨。它在我和老猎人眼里，是两回事。\n\n聚会那几天，要喂饱越来越多的人，光把麦粒囫囵煮，又慢又难吃。于是有人用两块石头，把麦粒夹在中间碾成粉，再煮成糊——一锅能喂饱好多张嘴。\n\n（说句实话：哥贝克力石阵附近确实挖出过大量磨麦、酿东西的痕迹，有人据此猜，这里办大聚会、备大量吃食是真的；但「为了办仪式而备粮，正是这块石磨的来由」，是我站在这个位置替你串起来的，不是石头上写着的。）\n\n那个老猎人看见这块石磨，只觉得是个让人跪着受苦的笨东西。\n\n可我看见的是另一面：正是有了它，我们才喂得饱这么多来聚会的人，这件看不见的大事才办得成。\n\n同一块石磨：在他眼里是枷锁，在我眼里是让大伙能聚到一起的本钱。它到底是哪一样？也许，两样都是。',
        en: 'I want to show you a small thing — a grinding stone. In my eyes and the old hunter\'s, it is two different things.\n\nDuring those gathering days, to feed more and more people, boiling whole grains was slow and hard to eat. So someone took two stones, pinched the grain between them and ground it to flour, then boiled it into gruel — one pot could feed many mouths.\n\n(To be honest: near Göbekli Tepe great traces of grain-grinding and of brewing have indeed been dug up, and some guess from this that large gatherings and the preparing of much food really happened here; but that "preparing grain for the sake of ceremony is the very origin of this grinding stone" is something I, standing in this place, string together for you — it is not written on the stone.)\n\nThat old hunter, seeing this grinding stone, thinks only that it is a clumsy thing that makes people kneel and suffer.\n\nBut what I see is the other side: it is precisely because of it that we can feed so many who come to gather, so that this unseen great thing can be done.\n\nThe same grinding stone: in his eyes a yoke, in mine the means by which everyone can come together. Which is it truly? Perhaps it is both.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 石磨从工匠角度 (聚会几天喂越来越多人/两块石头碾麦成粉煮糊一锅喂好多嘴) + anti-fab 大括号 (哥贝克力附近确挖出大量磨麦酿东西痕迹有人据此猜办大聚会备大量吃食是真的; 但「为办仪式备粮正是石磨来由」是我串起非石头上写的) + 老猎人看石磨=让人跪着受苦的笨东西 vs 工匠看=喂得饱聚会的人让大事办成的本钱 + 「同一块石磨他眼里是枷锁我眼里是聚到一起的本钱/也许两样都是」。只碰石磨从他角度，不揭农家少女',
      engagementHook: '同一块石磨：老猎人看见的是「让人跪着受苦的枷锁」，我看见的是「让大伙能聚到一起的本钱」。它到底是哪一样？也许，两样都是。同一样东西，为什么在不同人眼里能是相反的两样？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-gobekli-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '一年又一年，我看着这座山头近处，悄悄变了样。\n\n起先只是为了聚会方便，在近处撒点野麦。后来撒的人多了、种的地大了，有人开始在山下不远处，搭起越来越固定的住处——因为他得守着那片麦，不能像从前那样说走就走。\n\n于是怪事发生了：我们这群「为了聚在一起办大事」的人，正在一点一点，被自己种下的麦子，按在了这块地上。\n\n（这一步的因果，学者们还在争——是石阵带来了农业，还是反过来，谁先谁后没有定论。我只是把我亲眼看见的顺序，讲给你听。）\n\n我们立这些石柱时，从没想过要「定居」。我们只想一年年回来，办这件看不见的大事。\n\n可办着办着，那些为了喂饱聚会而种下的麦子，先把一部分人，变成了离不开土地的人。\n\n我们以为自己在追一件「看不见」的东西，却在不知不觉里，给人类盖起了第一批「看得见」的家。',
        en: 'Year after year I watched the ground near this hill quietly change.\n\nAt first it was only for the convenience of the gathering, scattering some wild wheat nearby. Later more people scattered, the fields grew larger, and some began to build ever more fixed dwellings not far below the hill — because they had to guard that wheat and could no longer pick up and leave as before.\n\nSo a strange thing happened: we, this crowd who came "to gather and do a great thing," were, little by little, being pinned to this land by the very wheat we had sown.\n\n(The cause and effect of this step is still argued by scholars — whether the rings brought farming, or the reverse, which came first has no settled answer. I only tell you the order I saw with my own eyes.)\n\nWhen we raised these pillars, we never thought of "settling." We only wanted to return year by year, to do this one unseen great thing.\n\nBut as we did it, the wheat we had sown to feed the gathering first turned a part of us into people who could not leave the land.\n\nWe thought we were chasing an "unseen" thing, yet without noticing, we built humankind\'s first "seen" homes.',
      },
      deliverGoal: 'N7 story — 一年年看山头近处悄悄变样 (起先为聚会撒点野麦→撒的人多种的地大→有人山下搭越来越固定住处因要守麦不能说走就走) + 怪事「为聚在一起办大事的人被自己种的麦按在地上」+ anti-fab 括号 (这步因果学者还在争: 石阵带来农业还是反过来谁先谁后没定论/我只讲亲眼看见的顺序) + 立石柱从没想定居只想一年年回来办大事 + 为喂饱聚会种的麦先把一部分人变成离不开土地的人 + 「以为在追看不见的东西却不知不觉给人类盖起第一批看得见的家」',
      engagementHook: '我们立石柱时，从没想过要「定居」——可那些为了喂饱聚会而种下的麦子，先把一部分人按在了这块地上。一个人为了一件事努力，却被自己努力的「副产品」彻底改变，这种事，你身上发生过吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-gobekli-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得诚实告诉你这座山头最后的结局——它后来被土和碎石埋了起来。\n\n（石柱后来被土和碎石盖住了，正因被埋才保存得这么好，一万多年后还能挖出来。可究竟是当年的人有意一层层填上去的，还是几千年里慢慢被冲、被弃才盖住的，学者们至今没有定论——早先有人猜是「有意回填」，近年的新发掘更多倾向自然堆积，谁也不敢说死。）\n\n我有时会想：等到山下的村子越来越大，地里的麦子越种越多，人们一天到晚为了庄稼、为了仓里的粮忙活——他们还记不记得，当初是为了什么，爬上这座山头？\n\n也许有一天，填饱肚子、看守粮仓，真的变成了第一位的事。而那件「看不见的大事」，那股最早把大家聚起来的劲，慢慢被埋进了土里——就像这些石柱一样。',
        en: 'I must honestly tell you this hill\'s final end — it was later buried under earth and rubble.\n\n(The pillars were later covered by earth and rubble, and it is precisely because they were buried that they were so well preserved, still to be dug out more than ten thousand years later. But whether the people of that time deliberately filled it in layer by layer, or it was slowly washed over and abandoned across thousands of years, scholars still have no settled answer — earlier some guessed "deliberate backfilling," but recent new excavations lean more toward natural accumulation, and no one dares say for certain.)\n\nSometimes I wonder: when the village below grows ever larger, the wheat in the fields ever more, and people are busy from dawn to dark over crops and over the grain in the storehouse — will they still remember what it was, at first, that made them climb this hill?\n\nPerhaps one day, filling the belly and guarding the granary truly became the first thing. And that "unseen great thing," that earliest urge that gathered everyone together, was slowly buried in the earth — just like these pillars.',
      },
      deliverGoal: 'N8 story — 诚实告知山头结局很可能被自己人埋掉 + 考古发现 (用了很久后被人有意用土碎石一层层填埋/正因被埋石柱才保存好一万多年后挖出) + anti-fab 括号 (为什么埋没人确切知道: 不再用了/仪式一部分/务农的人和立石的人想法已不一样? 学者各有猜没定论) + 工匠遐想 (山下村越来越大麦越种越多人天天为庄稼仓粮忙/还记不记得当初为什么爬这座山头) + 「也许有一天填饱肚子看守粮仓变成第一位/那件看不见的大事那股最早聚起大家的劲慢慢被埋进土里就像石柱一样」',
      engagementHook: '等村子越来越大、地里麦子越种越多，人们一天到晚为庄稼和粮仓忙活——他们还记不记得，当初是为了什么，爬上这座山头？最早把人聚起来的那股劲，会不会慢慢被埋掉？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-gobekli-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张比这座山头大得多的地图。\n\n我以为「为了聚在一起、为了信点什么，被逼着多种粮」这件事，只在我们这片月牙地上发生过。后来的人告诉我：不止这里。\n\n（这张大地图，是后来的学者一块块拼出来的——我活着时，连海那头有没有人都不知道。）\n\n在很远的东方，有两条大河。一条河边的人，把一种泡在水里的野草，慢慢驯化成了后来叫稻的庄稼；另一条河边的人，把一种耐旱的小籽，驯化成了后来叫粟（小米）的主粮。光是那一带，就有两个各自独立、谁也没抄谁的农业起点。\n\n他们也盖起了自己的村子。（中国这两个中心的早期人群，有没有类似哥贝克力那样「信仰先于农业」的故事，我活着时不可能知道，至今学者也另有讨论。）\n\n这让我想到一件很深的事：也许在好几个地方，把人推向定居和农业的，都不只是肚子。人想聚在一起、想信点什么、想一起办件大事的那股劲——可能是全人类共有的、最早的那台发动机之一。',
        en: 'Let me step back and show you a map far larger than this hill.\n\nI thought that this thing — "being driven to grow more grain for the sake of gathering, of believing in something" — happened only on our crescent of land. Later people told me: not only here.\n\n(This large map was pieced together, fragment by fragment, by later scholars — in my lifetime I did not even know whether there were people across the sea.)\n\nFar to the east there are two great rivers. The people by one river slowly domesticated a wild grass that soaks in water into the crop later called rice; the people by the other domesticated a drought-hardy little seed into the staple later called millet. In that region alone there were two separate starting points of farming, neither copied from the other.\n\nThey too built their own villages. (Whether the early peoples of these two Chinese centers had any story like Göbekli\'s "faith before farming," I could never know in my lifetime, and scholars still discuss it differently.)\n\nThis makes me think of something deep: perhaps in several places, what pushed people toward settling and farming was not the belly alone. The urge of people to gather, to believe in something, to do one great thing together — it may be one of the earliest engines shared by all humankind.',
      },
      deliverGoal: 'N9 zoom-out + 多中心起源 (§8 引子, 西亚 lens 不展开中国术语正文只点河与作物) — 工匠以为「为聚为信被逼多种粮」只在月牙地后来人告诉不止这里 + anti-fab 括号 (大地图后来学者拼出/我活着连海那头有没有人都不知道) + 很远东方两条大河 (一河泡水野草驯成后来叫稻/另一河耐旱小籽驯成后来叫粟/那一带就有两个各自独立没抄的农业起点) + 他们也盖村也有拜的神办的仪式 + 工匠深想「也许好几个地方推人向定居农业的都不只是肚子/想聚想信想一起办大事的劲可能是全人类共有的最早发动机之一」',
      engagementHook: '地球好几个角落的人，谁也没通知谁，都各自盖起了村子、有了自己拜的神。把人推向定居的，会不会在好几个地方，都不只是肚子，还有「想聚在一起、想信点什么」的那股劲？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-gobekli-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，请你替我这座山头掂一掂：到底是它推动了农业，还是这只是后人讲的一个好听的故事？两种说法都站得住。\n\n一种说法：哥贝克力石阵确实颠倒了老剧本。一群还没务农的人，能搬动几吨石头、办这么大的仪式——这本身就证明，「精神上的需求」可以走在「吃饱」前头，甚至能反过来把人逼向农业。信仰，可能是农业真正的第一推手。\n\n另一种说法（得给你这层冷静）：我讲的因果，很多是「猜」。石头上没有字。说不定是先有了能多打粮的好地方、人先多起来，才有余力来这山头办仪式——那样的话，顺序又倒回了老剧本。我亲眼看见的，未必就是真正的因果。\n\n这两边不是「谁信谁不信」。是同一堆没字的石头，能被诚实地读出两个相反的故事——而我们现在还没有足够的证据，去断定哪个才对。\n\n还有一件你该知道的事：当肥沃新月这边在立石阵、种头一批麦时，在很远的东方，长江边的人在驯化稻、黄河边的人在驯化粟——地球好几头，几乎同时，各自走上了这条路。这不是说中国最早或最强，也不是说西亚最早或最强——是地球好几头的人，面对差不多的处境，各自想出了同一个主意。\n\n你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, weigh this hill of mine: did it truly drive farming, or is this only a pleasing story later people tell? Both views stand.\n\nOne view: Göbekli Tepe really does overturn the old script. A crowd who did not yet farm could move stones of several tons and hold so great a ceremony — this itself proves that "a need of the spirit" can walk ahead of "being fed," can even, in reverse, drive people toward farming. Faith may be farming\'s true first cause.\n\nThe other view (I owe you this cool head): much of the cause and effect I told is a "guess." There are no words on the stones. Perhaps there was first a good place that could yield more grain, people grew more numerous first, and only then had the spare strength to come to this hill for ceremony — and then the order falls back into the old script. What I saw with my own eyes is not necessarily the true cause.\n\nThese are not "who believes and who does not." They are one heap of wordless stones that can be honestly read into two opposite stories — and we do not yet have evidence enough to settle which is right.\n\nAnd here is something that should matter to you: while this Fertile Crescent was raising rings of stone and growing its first wheat, far to the east, people by the Yangtze were domesticating rice, and people by the Yellow River domesticating millet — several corners of the earth, at almost the same time, each walking onto this road. This does not mean China was earliest or greatest, nor that western Asia was earliest or greatest — it means people in several corners of the earth, facing much the same circumstances, each thought up the same idea.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis + §8 中国桥 (mediator 注入, 写实非套话) — 真问题: 是石阵推动了农业还是后人讲的好听故事 / 一种说法 (确实颠倒老剧本/还没务农能搬几吨石办大仪式证明精神需求可走在吃饱前头反逼向农业/信仰可能第一推手) / 另一种说法 (冷静: 因果很多是猜石头没字/说不定先有好地方人先多才有余力办仪式顺序倒回老剧本/亲眼看见未必是真因果) / 同一堆没字石头能诚实读出两个相反故事证据不够断定 + §8 中国对照写实 (肥沃新月立石阵种头批麦时很远东方长江边驯化稻黄河边驯化粟/地球好几头几乎同时各自走上这条路) / 想 30 秒 / 两边都站得住',
      engagementHook: '同一堆没有字的石头，能被诚实地读出两个相反的故事——而我们还没有足够证据断定哪个才对。当证据不够、两个故事都讲得通时，一个诚实的人该怎么办？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'early-humans-gobekli-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是一个站在转折点上的见证者的声音——一个亲手凿石头、却没亲口务过农的人。\n\n请记住：这只是一边。我把「信仰先于农业」讲得动人，听起来甚至很有道理——可这正是我这种视角最该警惕的地方：我太想让我这座山头「重要」，可能不知不觉,把一个其实没定论的猜测，讲成了板上钉钉的事。\n\n这一遍里，有两个人没真正开口。一个是那个守旧的老猎人——他会说，别给种地找这么漂亮的理由，不管为了肚子还是为了神，它就是把人关进了笼子。另一个，是村子里那个跪在石磨前的农家少女——我口口声声说石磨是「让大伙聚到一起的本钱」，可真正趴在那块石头上、被它磨弯了身子的，是她，不是我。等你换上她的视角，她会替自己，反驳我这套漂亮话。\n\n最后，留一样东西给你。还记得那块石磨吗——我说它是「本钱」，老猎人说它是「枷锁」？\n\n换上那个少女的视角再走一遍，你会从最该说话的那个人那里，第三次碰见它。到那时，你大概就知道，它对她，到底是什么了。',
        en: 'What you just heard was the voice of a witness standing at the turning point — one who chipped stones with his own hands, yet never farmed with his own.\n\nRemember: it is only one side. I told "faith before farming" movingly, and it can even sound very reasonable — but that is exactly what my kind of view should beware of: I want my hill to be "important" so badly that I may, without noticing, have told a guess with no settled answer as a thing nailed down.\n\nIn this pass, two people never truly spoke. One is that stubborn old hunter — he would say, do not find farming so beautiful a reason; whether for the belly or for the gods, it shut people in a cage. The other is the farm girl in the village kneeling at the grinding stone — I keep saying the grinding stone is "the means by which everyone gathers," yet the one truly lying over that stone, ground bent by it, is her, not me. When you switch to her perspective, she will, on her own behalf, refute these fine words of mine.\n\nAnd one last thing to leave with you. Do you remember the grinding stone — which I called "the means," and the old hunter called "the yoke"?\n\nWalk this through once more in that girl\'s perspective, and you will meet it a third time, from the very person who should most speak. By then you will likely know what it truly was, to her.',
      },
      deliverGoal: 'N11 close/meta — 你听的是站在转折点的见证者一边 (亲手凿石却没务过农/把信仰先于农业讲得动人能讲得通最该警惕: 太想让山头重要可能把没定论的猜测讲成板上钉钉) + 还没听到: 守旧老猎人 (会说别给种地找漂亮理由不管为肚子为神就是把人关进笼子) + 跪石磨的农家少女 (我说石磨是聚到一起的本钱可真趴在石头上被磨弯的是她不是我/她会替自己反驳我的漂亮话) 会挑战 + 暗示石磨第三次从少女视角碰见 (不直接解释 echo)',
      engagementHook: '我口口声声说石磨是「让大伙聚到一起的本钱」——可真正趴在那块石头上、被它磨弯了身子的，是那个农家少女，不是我。换上她的视角，她会怎么反驳我这套漂亮话？',
      expectsRealAnswer: true,
    },
  ],
};

export var farmGirlLens = {
  id: 'first-generation-farmer-receiving-end',
  name: 'The First-Generation Farm Girl',
  nameCn: '第一代村庄的农家少女',
  role: 'receiving-end',
  perspectiveTag: 'paid-the-bill-for-civilization',
  icon: '🌾',
  description: {
    cn: '肥沃新月一座早期农业村子（像 Jericho 或 Çatalhöyük 那样的地方）里的女孩，没有名字，历史没为这些人留下名字，而这恰恰是问题的一部分。她从记事起就在干活：磨麦子（石磨把她的膝盖和手腕磨变了形，这在真实的考古骨骼上能看到）、照看弟妹、伺候圈里的羊。她吃得比狩猎采集的祖辈单调，个子更矮、牙更坏、更容易生病。她生的孩子更多，夭折的也更多。她还看见了一样新东西，「不平等」第一次在她这代人的村子里有了实体。这一遍是这一课的核心：新石器革命的账单，主要由像她这样的普通定居农民、尤其是女性，用更累的身体付的。',
    en: 'A girl in an early farming village of the Fertile Crescent (a place like Jericho or Çatalhöyük), with no name - history left these people none, and that is exactly part of the point. From her earliest memory she has worked: grinding wheat (the grinding stone deformed her knees and wrists, which can be seen on real archaeological bones), minding younger siblings, tending the sheep in the pen. She eats more monotonously than her hunter-gatherer ancestors, is shorter, has worse teeth, falls sick more easily. She bears more children, and more of them die young. She also saw a new thing - "inequality" took on body for the first time in her generation\'s village. This pass is the heart of this lesson: the bill for the Neolithic Revolution was paid mainly by ordinary settled farmers like her, women above all, with more exhausted bodies.',
  },
  storyboard: [
    {
      id: 'early-humans-farmgirl-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '天还没亮，我已经跪在石磨前了。\n\n我面前这两块石头：下面一块大的，上面一块小的。我把麦粒撒在中间，双手压着上面那块，一下一下，来回地碾，把它碾成能煮糊的粉。从天亮，碾到天黑。\n\n我没有名字给你。不是我不肯说，是没人替我记下来。后来的人挖出我们这些村子里的骨头，能认出哪些是女人——因为常年跪着磨麦，我们的膝盖和脚趾，磨出了一辈子改不掉的形状。骨头记得，名字没人记。\n\n我生在肥沃新月一座早期的村子里，泥砖房子一座挨一座，屋里摆着存粮的罐子。\n\n这一遍，你跪到我这儿来。这场被很多人叫做「伟大进步」的革命，账单，主要是像我这样的人付的。我想让你看见，付的到底是什么。',
        en: 'It is not yet light, and I am already kneeling at the grinding stone.\n\nBefore me are two stones: a large one below, a small one above. I scatter grain between them, press the upper stone with both hands, and grind, back and forth, stroke by stroke, into flour you can boil into gruel. From dawn until dark.\n\nI have no name to give you. Not because I will not say it, but because no one wrote it down for me. Later people dug up the bones from villages like mine and could tell which were women — because from years of kneeling to grind, our knees and toes took on a shape that never changed for life. The bone remembers; no one remembers the name.\n\nI was born in an early village of the Fertile Crescent, mud-brick houses packed one against another, jars of stored grain inside.\n\nThis pass, you kneel here with me. This revolution that so many call a "great advance" — its bill was paid mainly by people like me. I want you to see what, exactly, was paid.',
      },
      deliverGoal: 'N1 hook — 天不亮跪石磨前 + 两块石头 (下大上小/麦粒撒中间双手压碾成粉/天亮到天黑) + 没名字 (没人替我记下来/挖出骨头能认出女人因常年跪磨膝盖脚趾磨出一辈子改不掉的形状/骨头记得名字没人记) + 生在肥沃新月早期村子 (泥砖房一座挨一座/存粮罐子) + 这一遍跪到我这儿 (被叫伟大进步的革命账单主要像我这样的人付的/看见付的到底是什么)',
      engagementHook: '后来的人挖出我们的骨头，能认出哪些是女人——因为常年跪着磨麦，我们的膝盖磨出了一辈子改不掉的形状。骨头记得我，名字却没人记。一个连名字都没留下的人，凭什么值得被听见？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-farmgirl-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先让你看清我每天的日子，你才懂这账单有多重。\n\n我从记事起就在干活，没歇过。磨麦子是其中最熬人的一件，可不止这一件：照看更小的弟妹、伺候圈里的羊、挑水、和泥、看着锅。一件接一件，没有尽头。\n\n我吃的东西，比奶奶讲过的祖辈单调得多。她们那时吃得很杂——野果、坚果、各种根、各种猎物。我呢？翻来覆去就是麦子煮的糊。一样东西，吃到老。\n\n（这不是我一家的事。后来的人对比同一地区前后的骨头，发现定居以后的人普遍吃得更单一——这是从骨头里读出来的。）\n\n你也许会问：种地不是能产更多粮吗，怎么反而过得更苦？\n\n这正是我想让你记住的第一件事：「产出更多的粮」，和「让吃饭的人过得更好」，根本是两件不同的事。我们这代人，把前一件做成了，后一件，却付出了代价。',
        en: 'First let me show you my daily life, so you understand how heavy this bill is.\n\nFrom my earliest memory I have worked, without rest. Grinding wheat is the most wearing of it, but it is not the only thing: minding the younger ones, tending the sheep in the pen, carrying water, mixing mud, watching the pot. One thing after another, without end.\n\nWhat I eat is far more monotonous than the ancestors my grandmother spoke of. They ate widely then — wild fruit, nuts, all kinds of roots, all kinds of game. And I? Over and over it is only wheat boiled into gruel. One thing, eaten until I am old.\n\n(This is not just my household. Later people, comparing the bones of one region before and after, found that settled people generally ate more monotonously — this is read out of the bone.)\n\nYou might ask: does farming not yield more grain? How could life be harder instead?\n\nThis is the first thing I want you to remember: "yielding more grain" and "making the people who eat it live better" are two entirely different things. Our generation managed the first; the second, we paid for.',
      },
      deliverGoal: 'N2 setup — 每天的日子 (从记事干活没歇过/磨麦最熬人但不止: 照看弟妹伺候羊挑水和泥看锅一件接一件没尽头) + 吃得比奶奶讲的祖辈单调得多 (祖辈吃得杂野果坚果根猎物/我翻来覆去麦子糊一样吃到老) + anti-fab 括号 (不是我一家/后来人对比同地区前后骨头发现定居后普遍吃更单一/骨头里读出) + 种地能产更多粮怎么反而更苦 + 第一件要记住「产出更多粮和让吃饭人过得更好是两件不同的事/这代人做成前一件后一件付了代价」',
      engagementHook: '种地明明能产更多粮，我怎么反而过得更苦？因为「产出更多粮」和「让吃饭的人过得更好」，根本是两件不同的事。你之前有没有把这两件事，当成过同一件事？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-farmgirl-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '让我把账单一笔一笔摊给你看——这些，都不是我一个人的抱怨，是从我们这代人的骨头里，读出来的。\n\n第一笔：个子。我比狩猎采集的祖辈矮。后来的人量过同一地区前后的骨头，定居以后，人的平均身高明显降了——同一种人，越种地，越矮。\n\n第二笔：牙。天天吃麦子糊，淀粉黏在牙上，我的牙比祖辈坏得多。\n\n第三笔：病。我们几百上千人挤在一座村子里，和羊、和粮、和彼此挤在一处，喝同一口水。传染病第一次有了温床——这种病，在祖辈那种几十人、一直在走的小队里，根本囤不住。\n\n（这三笔，都不是传说。它们刻在真实挖出来的人骨上：更矮、更多坏牙、更多营养不良和感染的痕迹。骨头不会说谎。）\n\n你看，养活了更多人的那场革命，让活着的我们每一个，过得未必更好。这不是我命苦。这是这条路，一开始就带着的代价。',
        en: 'Let me lay the bill out for you, entry by entry — none of this is my complaint alone; it is read out of the bones of our generation.\n\nFirst entry: height. I am shorter than my hunter-gatherer ancestors. Later people measured the bones of one region before and after, and after settling, the average height of people clearly dropped — the same people, the more they farmed, the shorter.\n\nSecond entry: teeth. Eating wheat gruel every day, the starch sticking to the teeth, my teeth are far worse than my ancestors\'.\n\nThird entry: disease. Hundreds, a thousand of us packed into one village, crowded together with the sheep, the grain, and each other, drinking from the same water. Disease found its breeding ground for the first time — the kind of disease that, in the ancestors\' bands of a few dozen always on the move, simply could not take hold.\n\n(These three entries are no legend. They are carved on real bones dug from the ground: shorter, more rotten teeth, more marks of malnutrition and infection. Bone does not lie.)\n\nYou see, the revolution that fed more people did not necessarily make each of us living any better off. This is not my bad luck. This is the cost the road carried from the very start.',
      },
      deliverGoal: 'N3 setup (账单核心, 实物证据) — 一笔笔摊账单 (不是一个人抱怨是从这代人骨头读出) + 第一笔个子 (比祖辈矮/量同地区前后骨头定居后平均身高明显降/同种人越种地越矮) + 第二笔牙 (天天吃麦糊淀粉黏牙比祖辈坏得多) + 第三笔病 (几百上千挤一村和羊粮彼此挤喝同口水/传染病第一次有温床/祖辈几十人走动的小队囤不住) + anti-fab 括号 (三笔都不是传说刻在真实挖出人骨上更矮更多坏牙更多营养不良感染痕迹/骨头不会说谎) + 「养活更多人的革命让活着每个未必更好/不是我命苦是这条路一开始就带的代价」',
      engagementHook: '更矮、更多坏牙、更多生病——这些不是我一个人的命苦，是刻在真实挖出来的人骨上的。骨头不会说谎。当一场「进步」让活着的每个人身体更差，你还愿意叫它进步吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-farmgirl-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你跪在石磨前，碾着今天的麦子。手腕酸得发抖，膝盖硌在硬地上，早就没了知觉。\n\n村里有个老人，年轻时是跟着队伍走的猎人。他偶尔来，看你跪着磨麦，摇头叹气，说我们这代人「自找苦吃」，说从前跟着大地走，吃得杂、活得自由，比你这样强一百倍。\n\n你停下手，心里翻上来一句话——可你没说出口，因为你是个没人会听的女孩：\n\n说得轻巧。你们那种「自由」，养不活我们这么多人。我妈生了我们七个，活下来五个；要是回到你们那种走来走去的日子，这五个里，得有几个，根本生不下来、养不活。\n\n你低头继续磨。你心里清楚一件那个老人不肯承认的事：这块石磨磨垮了我的身子，可也正是它磨出来的粮，让我的弟弟妹妹，一个一个，活了下来。\n\n这账，到底该怎么算？',
        en: 'Now you are me.\n\nYou kneel at the grinding stone, grinding today\'s wheat. Your wrists ache and tremble; your knees, pressed against the hard ground, have long lost all feeling.\n\nThere is an old man in the village who was a hunter in his youth, following the band. Now and then he comes, watches you kneel and grind, shakes his head and sighs, says our generation "brings suffering on itself," says that following the land of old — eating widely, living freely — was a hundred times better than this.\n\nYou stop your hands, and a sentence rises in you — but you do not say it aloud, because you are a girl no one will hear:\n\nEasy for you to say. That "freedom" of yours could not feed so many of us. My mother bore seven of us, and five lived; if we went back to your roaming days, some of these five would never have been born, or never have survived.\n\nYou bend your head and grind on. You know clearly a thing that old man will not admit: this grinding stone wore my body down — yet it is the very grain it ground that let my little brothers and sisters live, one by one.\n\nThis account — how, in the end, should it be reckoned?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 跪石磨碾麦 (手腕酸抖膝盖硌硬地没知觉) + 村里老人年轻时是猎人偶尔来摇头叹气说这代「自找苦吃」从前跟大地走吃得杂活得自由强一百倍 + 你停手翻上一句没说出口 (因你是没人会听的女孩) 反驳「你们那种自由养不活我们这么多人/我妈生七活五/回到走动日子这五个有几个生不下养不活」+ 低头继续磨清楚老人不肯认的事「石磨磨垮我身子可正是它磨的粮让弟妹一个一个活下来」+ 「这账到底该怎么算」',
      engagementHook: '那个老猎人说我们「自找苦吃」——可他那种「自由」，养不活我们这么多人。这块石磨磨垮了我的身子，也正是它磨的粮，让我的弟弟妹妹一个一个活了下来。这账，到底该怎么算？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-farmgirl-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想让你看见，在我们村子里，第一次长出来的一样新东西——它没有名字，但你一眼就能认出。\n\n粮食能存起来以后，事情慢慢变了。\n\n有的人家，罐子总是更满。有的人，开始不下地了——他们守着公家的大粮仓，管着谁能分多少。慢慢地，村里有了「说话别人就得听」的人，和「只能听别人说」的人。\n\n我，是后一种。\n\n我磨一整天的麦，磨出来的粮，不全是我家的。一部分要交到那个管粮仓的人手里。他不下地，可他比我们谁都吃得饱、长得高。他会说：正因为有人专门管着粮，荒年才没饿死人——这话也不全是歪理。\n\n（这不是我编的。后来的人挖出这些村子的骨头，发现有的人骨头明显吃得更好、长得更高——「贵人」和「下人」，从骨头上就分得出来了。）\n\n奶奶说，她们走动的年代，东西少，谁也囤不了多少，所以人和人差不多。可在我们村，从粮食能存进罐子那天起，人，第一次分出了高低。',
        en: 'I want you to see a new thing that grew, for the first time, in our village — it has no name, yet you will know it at a glance.\n\nAfter grain could be stored, things slowly changed.\n\nSome households\' jars were always fuller. Some people began not to go to the fields — they guarded the great common granary and controlled how much each could be given. Slowly the village had people whose word others must obey, and people who could only obey.\n\nI am the latter.\n\nI grind wheat a whole day, and the grain I grind is not all my family\'s. A part must be handed to the one who keeps the granary. He does not go to the fields, yet he eats fuller and grows taller than any of us. He would say: it is precisely because someone keeps the grain that no one starves in a lean year — and that is not entirely twisted reasoning.\n\n(I am not making this up. Later people dug up the bones of these villages and found that some bones clearly ate better and grew taller — "the high" and "the low" can be told apart from the bone itself.)\n\nGrandmother said that in their roaming years, things were few, no one could hoard much, so people were roughly alike. But in our village, from the day grain could go into the jars, people were parted, for the first time, into high and low.',
      },
      deliverGoal: 'N5 story (不平等核心, §3 receiving-end 看见不平等有了实体) — 村里第一次长出新东西没名字但一眼认出 + 粮能存后慢慢变 (有人家罐子总更满/有人不下地守公家大粮仓管谁分多少/有了说话别人得听的人和只能听别人说的人) + 我是后一种 + 磨一天麦不全是我家的一部分交给管粮仓的人 (他不下地却比谁都吃得饱长得高) + anti-fab 括号 (不是编的/挖出骨头有的明显吃得更好长得更高/贵人下人从骨头分得出) + 奶奶说走动年代东西少谁也囤不了人差不多/我们村从粮进罐子那天起人第一次分出高低',
      engagementHook: '我磨一整天的麦，磨出的粮不全是我家的——一部分要交给那个管粮仓、却从不下地的人，他比我们谁都吃得饱、长得高。「谁管着存起来的粮，谁就大」——这第一道高低，是从哪儿来的？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-farmgirl-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在，让我带你回到那块石磨跟前——这一次，从我，那个真正趴在它上面的人，讲给你听。\n\n那个跟着队伍走了一辈子的老猎人见过它，他说它是「让人跪着受苦的笨石头」。那个在山头上凿巨石、立石阵的工匠也见过它，他说它是「能喂饱聚会、让大伙聚到一起的本钱」。\n\n他们俩都见过这块石磨。可他们俩，没有一个,真正在它上面跪过一整天。\n\n趴在它上面的，是我。\n\n它磨我的膝盖，磨我的手腕，磨我的脚趾——磨出一辈子也改不掉的形状，后来的人能从我的骨头上，一眼认出我是谁。它在我身上留下的印子，比留在任何石头上的都深。\n\n可我也不能只说它坏。它磨出来的粮，是我弟弟妹妹活下去的命。\n\n所以，这块石磨到底是什么？老猎人说是枷锁，工匠说是本钱。而我——那个真正被它磨着的人——会告诉你：它两样都是，而且，是用我的身体，把这两样,连在了一起。',
        en: 'Now let me take you back before that grinding stone — this time, told by me, the one who truly lay over it.\n\nThat old hunter, who followed the band his whole life, saw it; he said it was "a clumsy stone that makes people kneel and suffer." That stone-carver, who chipped the great stones and raised the rings on the hilltop, saw it too; he said it was "the means that fed the gathering and brought everyone together."\n\nThey both saw this grinding stone. Yet neither of them ever truly knelt over it for a whole day.\n\nThe one who lay over it was me.\n\nIt ground my knees, my wrists, my toes — ground them into a shape that never changed for life, so that later people could tell at a glance, from my bones, who I was. The mark it left on me is deeper than any it left on stone.\n\nYet I cannot say it was only bad. The grain it ground was the very life of my little brothers and sisters.\n\nSo what, in the end, is this grinding stone? The hunter said a yoke; the carver said a means. And I — the one truly ground by it — will tell you: it is both, and it is with my body that the two were joined together.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (第三次/最重一次碰石磨, 从最该说话的人) — 带回石磨前从真正趴在它上面的人讲 + 点破前两视角 (老猎人说笨石头让人跪着受苦/工匠说喂饱聚会聚到一起的本钱) 但他俩没一个真在它上面跪过一整天 + 趴在上面的是我 + 它磨膝盖手腕脚趾 (磨出一辈子改不掉的形状后来人从骨头一眼认出我是谁/留的印子比任何石头深) + 也不能只说坏 (磨的粮是弟妹活下去的命) + 「老猎人说枷锁工匠说本钱/我这个真正被磨的人告诉你: 它两样都是而且是用我的身体把这两样连在一起」',
      engagementHook: '老猎人说这块石磨是「枷锁」，工匠说它是「本钱」——可他俩没有一个，真正在它上面跪过一整天。趴在它上面的，是我。同一件事，是不是只有真正承受它的人，才说得清它到底是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-farmgirl-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想让你看清我住的地方，它和你想的「最早的城市」，完全不一样。\n\n我们村叫不上「城市」，可它真的很大。在我们这一带，有的村子聚起了几百人，有的甚至上千、几千人——后来的人挖出过这样的地方（约公元前 7000–7500 年），一个叫 Jericho（耶利哥），围着石墙；一个叫 Çatalhöyük（恰塔霍裕克），密密麻麻一大片。\n\n可你要是来 Çatalhöyük 那样的地方，会愣住：这里没有街道。泥砖房子一座死贴着一座，中间连条走的路都没有。我们进家门，是从屋顶的洞，爬梯子下去。\n\n屋里，地底下埋着我们家死去的祖先，墙上画着画。\n\n（这些不是我编的——这样没有街道、从屋顶进门、屋里埋着祖先的房子，是后来的人真的挖出来的。）\n\n我想让你记住：最早的「大村镇」，长得和你以为的城市一点都不像。没有马路，没有广场，没有王宫。连「这么多人怎么挤在一起住」，我们都还在头一回试。',
        en: 'I want you to see clearly the place I live; it is nothing like the "earliest cities" you imagine.\n\nOur village cannot be called a "city," yet it really is large. In our region some villages gathered hundreds of people, some even a thousand, several thousand — later people dug up such places (around 7000-7500 BCE): one called Jericho, ringed by a stone wall; one called Çatalhöyük, a dense great spread.\n\nBut if you came to a place like Çatalhöyük you would be stunned: there are no streets here. Mud-brick houses pressed dead against one another, without even a path to walk between. We enter our homes through a hole in the roof, climbing down a ladder.\n\nInside, beneath the floor, our dead ancestors are buried; on the walls there are paintings.\n\n(These are not my invention — such houses, with no streets, entered from the roof, with ancestors buried inside, were truly dug up by later people.)\n\nI want you to remember: the earliest "great villages" looked nothing at all like the cities you suppose. No roads, no squares, no palace. Even "how do so many people pack in together," we were still trying for the very first time.',
      },
      deliverGoal: 'N7 story (最早村镇 §5-D + §2 L2) — 我住的地方和你想的最早城市完全不一样 + 村真的很大 (有的几百有的上千几千/挖出过 Jericho 围石墙/Çatalhöyük 密密麻麻一大片) + Çatalhöyük 那样地方会愣住没有街道 (泥砖房死贴一座中间连路都没/进家门从屋顶洞爬梯子下去) + 屋里地底埋死去祖先墙上画画 + anti-fab 括号 (不是编的/没街道从屋顶进门屋里埋祖先的房子是后来人真挖出来的) + 记住最早大村镇长得和你以为城市一点不像 (没马路广场王宫/这么多人怎么挤一起住还在头一回试)',
      engagementHook: '我们最早的「大村镇」长得和你以为的城市一点都不像——没有马路、没有广场，进家门要从屋顶的洞爬梯子下去。连「这么多人怎么挤在一起住」，我们都还在头一回试。你能想象一座「没有街道」的村镇吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-farmgirl-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想跟你说一句，我自己一辈子都没真正想明白的话：我们，回不去了。\n\n那个老猎人总劝：别种地了，丢下石磨，回去跟着大地走，又自由又健康。\n\n听起来真好。可我心里清楚，这只是一句空话。\n\n你算算：我们村几百、上千号人，挤在这一片泥砖房里。回去跟着大地走？外头那点野地，根本喂不饱这么多张嘴。真要散回去，得饿死多少人？而这么多人，也再也散不回奶奶说的那种几十人的小队了。\n\n我们就这样，被自己村子的「成功」——人多、粮多、活下来的孩子多——死死按在了这块地上。粮越多，人越多；人越多，越离不开地；越离不开地，就得磨更多的麦。\n\n这是一个越收越紧的圈。我跪在石磨前，其实是被这个圈，锁在这儿的。\n\n往前，是一条再也下不去的台阶。我不知道它尽头是什么——但我知道，我和我的孩子，只能往前走。',
        en: 'I want to say to you a thing I never truly understood my whole life: we cannot go back.\n\nThat old hunter always urges: stop farming, drop the grinding stone, go back and follow the land — free and healthy.\n\nIt sounds so good. But I know in my heart it is only empty words.\n\nReckon it: our village has hundreds, a thousand people packed into this stretch of mud-brick houses. Go back and follow the land? That little wild land out there cannot feed so many mouths at all. If we truly scattered back, how many would starve? And so many people can never scatter back into the bands of a few dozen Grandmother spoke of.\n\nSo we are pinned, hard, to this land by our own village\'s "success" — more people, more grain, more children who lived. More grain, more people; more people, less able to leave the land; less able to leave, the more wheat must be ground.\n\nIt is a circle drawing ever tighter. Kneeling at the grinding stone, I am in truth locked here by this circle.\n\nForward is a staircase you can never step down from. I do not know what is at its end — but I know that I and my children can only walk forward.',
      },
      deliverGoal: 'N8 story (the trap, receiving-end 版) — 一辈子没真想明白的话「我们回不去了」+ 老猎人总劝别种地丢石磨回去跟大地走又自由又健康 + 听起来好可心里清楚只是空话 + 算账 (几百上千挤泥砖房/外头野地喂不饱这么多嘴/散回去得饿死多少/这么多人散不回几十人小队) + 被村子成功 (人多粮多孩子多) 死死按在地上 + 越收越紧的圈 (粮多→人多→离不开地→磨更多麦) + 跪石磨其实是被这圈锁在这儿 + 「往前是再也下不去的台阶不知尽头是什么但我和孩子只能往前走」',
      engagementHook: '老猎人总劝我「丢下石磨回去跟着大地走」——可外头那点野地，喂不饱我们村这么多张嘴了。我跪在石磨前，其实是被一个越收越紧的圈，锁在这儿的。当一种生活成功到「再也散不回去」，这算赢，还是被困住？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-farmgirl-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这辈子，没走出过几里地。可后来的人，替我看见了一张大得吓人的地图——上面有一处地方，和我有关，我却从不知道。\n\n（这张地图，是几千年后的人一块块拼出来的。我活着时，连我们村外那座山后头有什么，都不一定知道。）\n\n在很远很远的东方，有两条大河。一条叫长江的大河边，住着和我一样的人——他们也定居、也种地、也磨粮、也守着粮仓，种的是一种泡在水里的庄稼，叫稻。一条叫黄河的大河边，也住着和我一样的人，种的是一种耐旱的小籽，叫粟，也就是小米。光是那东方，就有两个各自独立、谁也没抄谁的起点——一个种稻，一个种粟。没有谁先开窍、别处再跟上。\n\n他们和我，隔着我一辈子都走不到的距离。没有人通知谁，没有人抄谁。可我们做着几乎一模一样的事：把命押在种子上，定居，磨粮，把账单用身体扛下来。\n\n这让我心里忽然不那么孤单了：原来在地球好几头，有好多个「我」，几乎在同一段时间里，跪在各自的石磨前，为各自的弟弟妹妹，磨着各自的粮。',
        en: 'In my whole life I never walked more than a few miles. Yet later people saw, for me, a map frighteningly large — and on it there is a place that has to do with me, which I never knew.\n\n(This map was pieced together, fragment by fragment, by people thousands of years later. In my lifetime I did not even surely know what lay behind the hill outside our village.)\n\nFar, far to the east there are two great rivers. By one great river, called the Yangtze, live people like me — they too settle, farm, grind grain, guard the granary, and what they grow is a crop that soaks in water, called rice. By another great river, called the Yellow River, also live people like me, and what they grow is a drought-hardy little seed, called millet. In that east alone there are two separate starting points, neither copied from the other — one grows rice, one grows millet. No one woke up first while others followed.\n\nThey and I are parted by a distance I could never cross in a lifetime. No one told anyone, no one copied anyone. Yet we do almost exactly the same thing: stake our lives on seeds, settle, grind grain, and carry the bill on our bodies.\n\nThis suddenly makes me feel less alone: it turns out that in several corners of the earth there were many "me," at almost the same time, kneeling before our own grinding stones, grinding our own grain for our own little brothers and sisters.',
      },
      deliverGoal: 'N9 zoom-out + 多中心起源 (§8 引子, receiving-end 写实落地) — 没走出几里地但后来人替我看见大得吓人的地图上有处和我有关却不知道 + anti-fab 括号 (地图几千年后人拼出/我活着连村外山后有什么都不一定知道) + 很远东方两条大河 (一河边住和我一样的人种泡水里庄稼叫稻/另一河边也住和我一样的人种耐旱小籽叫粟即小米) + 隔着一辈子走不到的距离没人通知没人抄却做几乎一模一样的事 (押命种子定居磨粮用身体扛账单) + 「忽然不那么孤单: 地球好几头有好多个我几乎同时跪在各自石磨前为各自弟妹磨各自的粮」',
      engagementHook: '原来在地球好几头，有好多个「我」，几乎在同一段时间里，跪在各自的石磨前，为各自的弟弟妹妹，磨着各自的粮——隔着我一辈子都走不到的距离，没人通知谁，没人抄谁。这件事，让你想到什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'early-humans-farmgirl-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，请你替我，称一称这场被叫做「伟大」的革命。两种说法都站得住，你来掂。\n\n一种说法：对我，这是一笔亏本的买卖。我比祖辈矮、牙更坏、一辈子跪着磨麦、膝盖磨变了形、还头一回看见有人天生就比我「大」。这场革命被叫做进步，可账单，是我这样没名字的人——尤其是女人——用身体一笔一笔付的。站在我这儿，你很难为「文明」欢呼。\n\n另一种说法：可正是这场革命，让我妈生的七个孩子，活下来了五个；让几百、上千人能挤在一座村子里活下去；让后来的城市、文字、一切，有了第一块地基。对人类整个,这是天大的成功。我付的账，换来的是「更多的人能活着」。\n\n这两边，不是「谁对谁错」。它们是同一件事的两张脸：让人类这个物种「伟大」的，和让我这样的人「受苦」的，是同一件事——而我，是那个用身体，把这两张脸,连在一起的人。\n\n还有一件你该知道的事：当我在肥沃新月跪着磨麦时，很远的东方，长江边有人在驯化稻、黄河边有人在驯化粟——地球好几头，几乎同时，有好多个「我」，在付着几乎一样的账。这不是说谁最早、谁最强，是好几头的人，面对差不多的处境，各自走上了同一条路。\n\n你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, weigh for me this revolution they call "great." Both views stand. You do the weighing.\n\nOne view: for me, it was a losing bargain. I am shorter than my ancestors, with worse teeth, kneeling a whole life to grind wheat, my knees ground out of shape, and for the first time I saw people born "bigger" than me. This revolution is called progress, yet the bill was paid by nameless people like me — women above all — entry by entry, with our bodies. Standing here, you can hardly cheer for "civilization."\n\nThe other view: yet it was this very revolution that let five of my mother\'s seven children survive; that let hundreds, a thousand people live packed in one village; that gave the later cities, writing, everything, their first foundation. For humankind as a whole, it was an enormous success. The bill I paid bought "more people able to live."\n\nThese are not "who is right and who is wrong." They are two faces of one thing: what made the human species "great," and what made people like me "suffer," are the same thing — and I am the one who, with my body, joined the two faces together.\n\nAnd here is something that should matter to you: while I knelt grinding wheat in the Fertile Crescent, far to the east, people by the Yangtze were domesticating rice and people by the Yellow River domesticating millet — several corners of the earth, at almost the same time, with many a "me" paying almost the same bill. This does not mean anyone was earliest or greatest — it means people in several corners, facing much the same circumstances, each walked onto the same road.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis + §8 中国桥 (receiving-end 注入, 写实非套话) — 称一称被叫伟大的革命 / 一种说法 (对我亏本: 比祖辈矮牙坏一辈子跪磨膝盖变形头回见有人天生比我大/被叫进步可账单是没名字的人尤其女人用身体付/站这儿很难为文明欢呼) / 另一种说法 (正是它让妈七个活五个/让几百上千挤一村活下去/让后来城市文字一切有第一块地基/对人类整体天大成功/我付的账换更多人能活) / 同一件事两张脸「让物种伟大的和让我这样人受苦的是同一件事/我是用身体把两张脸连在一起的人」+ §8 中国对照写实 (我在肥沃新月跪磨时很远东方长江边驯化稻黄河边驯化粟/地球好几头几乎同时好多个我付几乎一样的账) / 想 30 秒 / 两边都站得住',
      engagementHook: '让人类这个物种「伟大」的，和让我这样的人「受苦」的，是同一件事——而我，是那个用身体把这两张脸连在一起的人。一场对群体是巨大成功、对我这样的个人却是亏本的革命，到底算不算「进步」？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'early-humans-farmgirl-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个没名字的女孩，一块磨弯了我身子的石磨，一锅永远是麦糊的饭，一个我跪着也走不出去的村子，一张我用身体付的账单，你会怎么评价这样一个开端？\n\n它让我的弟弟妹妹活了下来，也让我这辈子跪在石磨前、矮、病、没名字。这两件事，是同一场革命。你怎么称？\n\n你刚才听的，是这一课最核心的一边：那个为「文明」付了最多账单、却最没人替她说话的人。我想让你看见：很多被讲成「伟大进步」的事，账单，往往是由最没声音的人付的。\n\n但请你别只停在我这一边。那个守旧的老猎人，会说这一切根本是「自找苦吃」；那个凿巨石的工匠，会说把人推向这条路的，是「想聚在一起办大事」的信仰。换上他们的视角再走一遍，你刚才下的判断，站不站得住？\n\n最后，给你留一个能带走的问题：今天你身边，有没有一件被所有人叫好的「大事」、「大进步」，它的账单，其实是由某些最没声音的人,在悄悄替大家付着？下次再听见「这是了不起的进步」，你会不会多问一句——这账，是谁在付？',
        en: 'Having walked my whole life — a nameless girl, a grinding stone that ground my body out of shape, a pot of food that was always wheat gruel, a village I could not walk out of even kneeling, a bill I paid with my body — how would you judge a beginning like this?\n\nIt let my little brothers and sisters live, and it also left me a whole life kneeling at the grinding stone — short, sick, nameless. These two things are the same revolution. How do you weigh it?\n\nWhat you just heard is the very heart of this lesson: the one who paid the most for "civilization," yet had the fewest to speak for her. I want you to see: many things told as a "great advance" — the bill is often paid by the people with the least voice.\n\nBut do not stop at my side alone. That stubborn old hunter would say all of this was simply "bringing suffering on oneself"; that stone-carver would say what pushed people onto this road was the faith of "wanting to gather and do a great thing." Run it again through their perspectives, and see whether the judgment you just made still holds.\n\nAnd one last question to carry away: in your own life today, is there a "great thing," a "great advance," cheered by everyone, whose bill is in truth quietly paid for all of us by some of the people with the least voice? The next time you hear "this is a remarkable advance," will you ask one more question — who is paying the bill?',
      },
      deliverGoal: 'N11 close/meta (DEFAULT lens close) — 评价开端 (没名字女孩/磨弯身子的石磨/永远麦糊的饭/跪着也走不出的村子/用身体付的账单 → 让弟妹活下来 vs 让我跪石磨前矮病没名字/同一场革命怎么称) + 你听的是最核心一边 (为文明付最多账单最没人替她说话/很多被讲成伟大进步的事账单往往最没声音的人付) + MANDATORY 跨视角指针: ① 别只停我这边 ② 守旧老猎人会说自找苦吃 + 工匠会说推上这条路的是想聚在一起办大事的信仰 ③ 换视角再走判断站不站得住 + transfer「今天身边被所有人叫好的大进步账单其实由最没声音的人悄悄替大家付」+ 下次听见了不起的进步会不会多问一句这账是谁在付',
      engagementHook: '很多被讲成「伟大进步」的事，账单往往是由最没声音的人付的。下次再听见「这是了不起的进步」，你会不会多问一句——这账，到底是谁在付？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator(lonely-witness) / receiving-end-default) ───
export var lenses = {
  'hunter-gatherer-actor':              hunterLens,
  'gobekli-builder-mediator':           gobekliLens,
  'first-generation-farmer-receiving-end': farmGirlLens,
};

// receiving-end 优先 (取自 narrative frontmatter defaultLens):
// 农家少女 = 承受代价最重、最没话语权的一类，新石器革命 DBQ 必考的「进步的账单」角度
export var defaultLens = 'first-generation-farmer-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'early-humans-10000bce',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: {
    'hunter-gatherer-actor': 28,
    'gobekli-builder-mediator': 30,
    'first-generation-farmer-receiving-end': 28,
  },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-06',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail: 石磨 (quern) — 三视角各触一次, 农家少女 N6 第三次/最重一次点破前两视角',
    'defaultLens: first-generation-farmer-receiving-end — 进步的账单 (AP DBQ 必考) + 无名农家少女女性承受代价最重',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total)',
    '时间两套尺子: 人类起源/迁徙用「年前/Holocene」; 农业革命默认前 10000+ BCE 口径 (正文以「年前」为主, 不混用)',
    'Cultural ban: 西亚部分全程真实地名 (Fertile Crescent/Göbekli Tepe/Çatalhöyük/Jericho/einkorn/emmer); §8 中国对照 (粟/稻/长江/黄河) 仅注入 mediator N10 + receiving-end N9/N10',
    'anti-fab: 哥贝克力石阵用途/被埋原因/气候逼农业/全岛信号细节均用括号短句显式标 (学者在争/史料无答案/lens 替你串起); 三主角皆写实合成桥接人物 (无姓名)',
    '4-agent review pending (7thgrader 小 U / AP teacher / ESL / Chinese teacher)',
  ],
};
