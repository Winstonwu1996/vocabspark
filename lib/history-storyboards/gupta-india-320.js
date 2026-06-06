// ─────────────────────────────────────────────────────────────────
// 笈多王朝 320 — Gupta India · The Golden Age · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (AUTHORING_PIPELINE 第7条): 全程印度/梵语真实术语
//   (Pataliputra/Magadha/Sanskrit/Aryabhatiya/samanta/varna/jati/stupa/
//    Puranas/Nalanda/palm-leaf/monsoon/Huna), 绝不把中国特定词用在印度段落。
//   只有 §8 桥 (receiving-end N9 + mediator N9) 是真中国段, 那里才允许中国术语。
// 3 lens / 11 nodes each / Rule 0 中性 / expectsRealAnswer 仅 N10+N11。
// 跨 lens micro-detail: 季风的雨 (monsoon) — 农人靠它定丰歉/抄经少年听雨打棕榈叶/
//   Aryabhata 在雨后晴夜观星。三视角各触一次,不互相点破。
// 核心张力: 「黄金时代」是真的, 但金子落在谁手里? (谁有名字, 谁被史书沉默)
// anti-fab: 抄经少年 + 村庄农人 = 合成桥接人物 (无名/身份写实), 显式标注;
//   Aryabhata 地球自转「坐船」比喻标为「转述/rendering」非档案逐字原话。
// ─────────────────────────────────────────────────────────────────

export var aryabhataLens = {
  id: 'aryabhata-actor',
  name: 'Aryabhata',
  nameCn: '阿里亚哈塔',
  role: 'actor-protagonist',
  perspectiveTag: 'astronomer-mathematician',
  icon: '🔭',
  description: {
    cn: '约公元 476 年生，活跃在 Kusumapura（一般认为就在华氏城一带）的天文数学家，笈多黄金时代的科学心脏。499 年，他才二十三岁，就写成了薄薄一部《Aryabhatiya》：熟练运用十进制位值制，把圆周率算到约 3.1416，还主张地球每天绕自己的轴自转。在那个天经地义认为天在转的年代，这需要的不只是聪明，还有胆量。这一遍让你站在一个用观察和算术挑战天经地义的年轻人身边，看一颗最亮的星怎么发光，也看清它发光的位置有多稀少。',
    en: 'Born around 476 CE, an astronomer-mathematician active in Kusumapura (generally thought to be near Pataliputra), at the scientific heart of the Gupta Golden Age. In 499, at just twenty-three, he wrote a thin book called the Aryabhatiya: fluent decimal place-value, pi pinned to about 3.1416, and the claim that the Earth turns on its own axis every day. In an age that took for granted that the sky turns, this needed not only brains but nerve. This pass puts you beside a young man who used observation and arithmetic to challenge what everyone knew, watching one of the brightest stars shine, and seeing how rare the spot it shines from really is.',
  },
  storyboard: [
    {
      id: 'gup-aryabhata-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '公元 499 年的一个夜里，恒河边，华氏城（Pataliputra）一带。一场季风的雨刚停，天被洗得干干净净，星星密得能数不过来。\n\n我才二十三岁。我手里是一卷棕榈叶，刚写完的诗句还没干透。我用梵语，把它写成一句句押韵的诗——这样人就能背下来，一代代传下去。这部书，我叫它《Aryabhatiya（阿里亚哈塔历数书）》。\n\n我是 Aryabhata（阿里亚哈塔）。这一年，我做了一件我自己都觉得大胆的事：我对着满天的星，说出一句几乎没人敢说的话——不是天在转，是我们脚下这块大地，在转。\n\n这一遍，你坐进我这个位置。你会看见一个黄金时代最亮的一颗脑子是怎么发光的。你也会慢慢看清：能站在这个发光的位置上的人，整座帝国里，有多么少。',
        en: 'A night in 499 CE, by the Ganges, near the city of Pataliputra. A monsoon rain has just stopped. The sky is washed clean, and the stars are too thick to count.\n\nI am only twenty-three. In my hands is a roll of palm leaf, the verse I just finished not yet dry. I write in Sanskrit, line by line in rhyme, so that people can memorize it and pass it down across generations. This book I call the Aryabhatiya.\n\nI am Aryabhata. This year I did a thing even I find bold: facing the whole sky of stars, I said a sentence almost no one dared to say. It is not the sky that turns. It is this ground beneath our feet that turns.\n\nThis pass puts you in my seat. You will see how one of the brightest minds of a Golden Age shines. And you will slowly come to see just how few people, in the whole empire, ever get to stand in this shining spot.',
      },
      deliverGoal: 'N1 hook — 499 夜华氏城季风雨停星密 + Aryabhata 23 岁刚写完 Aryabhatiya (梵语押韵诗便于背诵传世) + 大胆主张「不是天转是大地在转」+ 这一遍视角 (看黄金时代最亮脑子发光, 也看清能发光的位置有多稀少)',
      engagementHook: '我对着满天星，说出一句几乎没人敢说的话：是我们脚下的大地在转。在所有人都觉得「天经地义」的事面前，你敢不敢相信自己看见的？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-aryabhata-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说清我站在什么样的时代里，你才懂我的运气有多大。\n\n我活在笈多王朝（Gupta，约 320-550）的黄金时代。约公元 320 年，一个叫 Chandragupta I（旃陀罗笈多一世）的国王在华氏城加冕，把碎成许多小邦的北印度重新攒成一个强权。到 Chandragupta II 在位时，帝国达到顶点。\n\n（提醒一句：笈多的 Chandragupta，和六百年前孔雀王朝那个名字相近的 Chandragupta Maurya，是完全不同的两个人、两个王朝——这是头号易混点。）\n\n这个王朝有钱、有粮、相对安稳。皇帝和宫廷愿意花钱供养我们这些不种地、只读书算数的人。正因为有这样一片土壤，数学、天文、医学、梵语诗，才能一起开花。\n\n所以我得诚实：我的天才是真的，但我能坐下来安心算星星，靠的是这个时代肯养我。这一点，先记住。',
        en: 'First let me make clear what kind of age I stand in, so you understand how lucky I am.\n\nI live in the Golden Age of the Gupta dynasty (c. 320-550). Around 320 CE, a king named Chandragupta I crowned himself at Pataliputra and pulled a north India broken into many small states back into one power. By the reign of Chandragupta II, the empire reached its peak.\n\n(A reminder: the Gupta Chandragupta and the similarly named Chandragupta Maurya, founder of the Mauryan empire six hundred years earlier, are two completely different people in two different dynasties. This is the number-one mix-up.)\n\nThis dynasty was rich, well-fed, and relatively stable. The emperor and court were willing to spend money supporting people like us, who grew no food and only read and calculated. Precisely because there was such soil, mathematics, astronomy, medicine, and Sanskrit poetry could flower together.\n\nSo I must be honest: my talent is real, but my being able to sit and calmly study the stars rests on this age being willing to feed me. Keep that in mind first.',
      },
      deliverGoal: 'N2 setup — 笈多约 320-550 黄金时代 + Chandragupta I 约 320 加冕华氏城重新统一北印度 + Chandragupta II 鼎盛 + 易混点清坑 (笈多 Chandragupta ≠ 孔雀 Chandragupta Maurya 相隔六百年) + 王朝有钱供养不种地的学者 → 科学开花 + Aryabhata 诚实: 天才是真的但靠时代养他',
      engagementHook: '我的天才是真的，可我能安心坐下来算星星，靠的是这个时代肯花钱养我。一个人的成就，有多少是他自己的，有多少是他运气好站对了位置？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-aryabhata-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '在我动手算星星之前，先有一样东西，是我全部工作的地基——一套写数字的方法。\n\n这套方法叫十进制位值制（decimal place-value）。意思是：同一个符号，放在不同的位置，就代表完全不同的大小。放个位是一，放十位是十，放百位是一百。位置，决定大小。\n\n它还有一个最关键的伙伴：「空位」的概念。当某一位上什么都没有，你不能就让它空着——你得有个东西，认真地占住那个位置，告诉别人「这一位是空的」。（这个「空位」的想法，后来一步步长成了我们说的「零」；它真正被当成一个能加减的数，还要再等两百年，另一个数学家才说清楚。）\n\n你今天写「307」，中间那个 0 不是「没有」。它在认真地占住十位，告诉你这是三百零七，不是三十七。\n\n这套看似理所当然的写法，是印度黄金时代留给全人类的礼物。没有它，就没有现代算术，没有科学。而我接下来要算的一切，全都站在它上面。',
        en: 'Before I set to work on the stars, there is one thing that is the foundation of all my work: a way of writing numbers.\n\nThis way is called the decimal place-value system. It means: the same symbol, placed in a different position, stands for a completely different size. In the ones slot it is one, in the tens slot it is ten, in the hundreds slot it is a hundred. Position decides size.\n\nIt also has a most crucial partner: the idea of an "empty slot." When a slot holds nothing, you cannot just leave it blank. You need something to firmly hold that position and tell others "this slot is empty." (This idea of an "empty slot" slowly grew into what we call "zero"; for it to truly be treated as a number you can add and subtract took another two hundred years, until a different mathematician spelled it out.)\n\nWhen you write "307" today, that 0 in the middle is not "nothing." It firmly holds the tens slot, telling you this is three hundred and seven, not thirty-seven.\n\nThis obvious-seeming way of writing is the Indian Golden Age\'s gift to all humankind. Without it, no modern arithmetic, no science. And everything I am about to calculate stands on top of it.',
      },
      deliverGoal: 'N3 setup — 十进制位值制 (同一符号位置不同大小不同: 个/十/百) + 关键伙伴「空位」概念→零 (某位空着要有东西占住) + 「307」中间 0 不是没有是认真占住十位 + 这套写法是印度黄金时代给全人类的礼物 (没它没现代算术没科学) + Aryabhata 全部工作站在它上面',
      engagementHook: '你写「307」，中间那个 0 不是「没有」——它在认真地占住一个位置。一个表示「空」的符号，凭什么成了全人类算术的地基？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-aryabhata-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n一场季风雨刚过的晴夜，你坐在观星的台上，棕榈叶和笔就在手边。你抬头看星——所有人都告诉你，星星每晚东升西落，是天在绕着我们转。这是天经地义，从来没人怀疑过。\n\n可你心里有个念头，压了很久。\n\n白天你坐过顺流而下的船。船往前走的时候，你明明觉得是岸上的树在往后退，而不是自己的船在往前。你那一刻就想：会不会，星星也是这样？\n\n会不会，不是星空在动，是我们脚下这块大地，每天绕着自己转了一整圈，所以我们才看见星星在「移动」？\n\n你越想越心惊。因为这个念头，等于说所有人、所有老师、所有古书，在这件事上都搞反了。\n\n你只有两条路：把这个危险的念头压回去，当个安稳的学者；或者，相信你自己坐船时看见的那一幕，把整个天空翻个个儿。你选哪条？',
        en: 'Now you are me.\n\nA clear night just after a monsoon rain. You sit on the observing platform, palm leaf and a stylus (a pointed writing tool) at hand. You look up at the stars. Everyone tells you the stars rise in the east and set in the west each night, because the sky turns around us. This is taken for granted; no one has ever doubted it.\n\nBut a thought has pressed on you for a long time.\n\nBy day you have ridden a boat going downstream. As the boat moves forward, you clearly feel that the trees on the bank are sliding backward, not that your own boat is moving ahead. In that moment you thought: could the stars be like this too?\n\nCould it be that it is not the sky moving, but this ground beneath our feet, turning a full circle around itself every day, so that we only seem to see the stars "move"?\n\nThe more you think, the more it frightens you. Because this thought means that everyone, every teacher, every old book, has it backward on this one thing.\n\nYou have only two roads: push this dangerous thought back down and be a safe scholar, or trust the scene you saw from the boat, and flip the whole sky inside out. Which do you choose?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 季风雨后晴夜观星 + 所有人说天经地义是天绕我们转 + 压了很久的念头: 坐顺流船觉得是岸上树后退不是船前进 → 会不会星星也是这样/是大地每天自转一圈 + 心惊因为等于说所有人老师古书都搞反了 + 两条路: 压回去当安稳学者 vs 相信坐船看见的把天空翻个个儿',
      engagementHook: '相信这个念头，就等于说所有人、所有老师、所有古书都搞反了。当你看见的东西和「所有人都信的」相反时，你信哪一个？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-aryabhata-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我选了相信我自己看见的。\n\n我在《Aryabhatiya》里写下了那个比喻。大意是这样（这是后人从梵语原诗转述的通行说法，不是我一字一句的原话）：「就像坐在顺流而下的船上的人，看见岸上不动的东西在往后退；站在自转的地球上的人，也就看见本来不动的星星，在往西移。」\n\n你品一下这一步有多巧：我没有飞到天上去证明地球在转——那时谁也做不到。我用的是一件人人都坐过船、人人都有过的日常经验，把整个宇宙的因果，翻了个个儿。\n\n我得对你诚实：我这套天文模型里，今天看来还有不少地方是错的。我不是句句都对的先知。\n\n但了不起的从来不是「我全对」。了不起的是——在一个把「天在转」当铁律的年代，我敢用观察和一个坐船的比喻，去质疑「天经地义」。这一点小小的胆量，正是后来叫作「科学」的那颗种子。',
        en: 'I chose to trust what I saw with my own eyes.\n\nIn the Aryabhatiya I wrote down that comparison. The gist is this (a common later rendering from the Sanskrit verse, not my own word-for-word original): "Just as a person on a boat going downstream sees the still things on the bank slide backward, a person standing on the rotating Earth sees the fixed stars drift westward."\n\nWeigh how clever this step is: I did not fly up into the sky to prove the Earth turns. No one then could do that. I used a thing everyone has done, an everyday boat ride, to flip the whole cause-and-effect of the universe inside out.\n\nI must be honest with you: my astronomical model has many parts that we would call wrong today. I am not a prophet right line by line.\n\nBut what is remarkable was never "I was all correct." What is remarkable is that, in an age that took "the sky turns" as iron law, I dared to use observation and a boat comparison to question what everyone knew. That small bit of nerve is exactly the seed of what was later called science.',
      },
      deliverGoal: 'N5 story — 选相信自己看见的 + 写下坐船比喻 (显式标: 后人从梵语转述的通行说法非逐字原话) 「坐顺流船见岸物后退/站自转地球见恒星西移」+ 巧在: 没飞天证明用人人坐过船的日常经验翻转宇宙因果 + anti-fab 诚实: 天文模型今看不少地方错不是句句对的先知 + 了不起的不是全对是敢用观察质疑天经地义 = 科学的种子',
      engagementHook: '我没飞到天上去，只用了一件人人都坐过船的小事，就把整个宇宙翻了个个儿。了不起的，是「我全对」，还是「我敢问一句为什么」？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-aryabhata-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '除了地球自转，我还做了一件后世更天天用得到的事：我算圆。\n\n我把圆周率——一个圆的周长和它直径的比——算到了约 3.1416。这个数，今天的工程师、造桥的、造火箭的，还在用。\n\n但我做的，比「算出一个数」更微妙。我用了一个梵语词 āsanna，意思是「逼近的、近似的」。我在暗示：这个值，是永远算不尽的。你算到小数点后再多位，也到不了头。\n\n你想想这有多惊人：在一千五百年前，没有计算器，我靠的就是那套位值制和空位记号，一笔一笔在棕榈叶上算，竟然摸到了一个「算不尽的数」的边。\n\n这就是那套写数字的方法的威力。它不只是记数，它让一个人能真正地去「算」最难的东西。\n\n我手里这卷棕榈叶，写的就是这些。可棕榈叶会烂。它能不能活过我，活到几百年后，靠的根本不是我——靠的是别人。',
        en: 'Besides the Earth\'s rotation, I did another thing the later world uses every single day: I calculated the circle.\n\nI worked out pi, the ratio of a circle\'s circumference to its diameter, to about 3.1416. Engineers, bridge-builders, rocket-makers still use this number today.\n\nBut what I did is subtler than "getting a number." I used a Sanskrit word, asanna, meaning "approaching, approximate." I was hinting: this value can never be reached exactly. However many decimal places you compute, you never arrive at the end.\n\nThink how astonishing this is: fifteen hundred years ago, with no calculator, relying only on that place-value system and its empty-slot notation, computing stroke by stroke on palm leaf, I touched the edge of "a number with no end."\n\nThis is the power of that way of writing numbers. It is not only for recording; it lets a person truly calculate the hardest things.\n\nThis roll of palm leaf in my hand holds all of this. But palm leaf rots. Whether it can outlive me, and survive to be read centuries later, does not really rest on me at all. It rests on others.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens setup — 圆周率约 3.1416 (今工程师造桥造火箭仍用) + 比「算出数」更微妙: 梵语 āsanna 暗示这值永远算不尽 + 惊人在 1500 年前无计算器靠位值制+空位记号棕榈叶一笔笔算摸到算不尽的边 + 写数字方法的威力 (不只记数让人真去算最难的) + 引出: 棕榈叶会烂能否活过我靠的不是我是别人 (暗接抄经少年/不点破)',
      engagementHook: '一千五百年前没有计算器，我靠位值制和空位记号，竟摸到了一个「永远算不尽的数」的边。可我写在棕榈叶上的这一切，棕榈叶会烂——它能不能活下去，靠的根本不是我。',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-aryabhata-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我从星空往下看一看，看看养着我的这个世界，长什么样。\n\n我坐在观星台上算星星的时候，台子底下，是一整套等级森严的秩序。社会被切成层层的种姓：婆罗门祭司在最上，往下是武士、平民、劳动者，再往下，还有被排在四大种姓之外、做最被嫌弃的活的人。这套秩序叫 varna 和 jati，很多人一出生，就被钉死在最底下。\n\n我能读书、能写字、能被宫廷供养，是因为我生在能读写的那一层。我的名字能留下来，靠的不只是我聪明，还靠我站在了一个「会被史书记住」的位置。\n\n而养活我、养活整座城、养活这全部辉煌的，是城外恒河平原上那些种地的人。他们里绝大多数，一辈子读不到我写的一个字，算出地球自转跟他们的收成没有半点关系。\n\n我得承认一件不舒服的事：我的星空，是踩在他们的稻田上的。',
        en: 'Let me look down from the stars and see what this world that feeds me really looks like.\n\nWhile I sit on the observing platform calculating the stars, beneath the platform lies a strictly ranked order. Society is cut into layers of caste: the Brahmin priests at the top, then warriors, commoners, laborers below, and below them again, people ranked outside the four castes entirely, doing the most despised work. This order is called varna and jati, and many people, from the day they are born, are pinned to the very bottom.\n\nI can read, write, and be supported by the court because I was born into the layer that can read and write. My name survives not only because I am clever, but because I stand in a spot that "the histories will remember."\n\nAnd the people who feed me, feed the whole city, feed all this glory, are the farmers out on the Ganges plain beyond the city. The great majority of them will, in their whole lives, never read a single word I wrote; the calculation that the Earth spins has nothing to do with their harvest.\n\nI have to admit an uncomfortable thing: my starry sky stands on their rice fields.',
      },
      deliverGoal: 'N7 story — Aryabhata 从星空往下看养他的世界 + 等级森严秩序 (varna/jati 婆罗门祭司在上→武士平民劳动者→种姓外被嫌弃者/很多人出生就钉最底) + 我能读写被供养因生在能读写那层/名字留下靠站在「会被史书记住」的位置 + 养我养城养辉煌的是城外恒河平原种地人 (绝大多数读不到我一个字) + 不舒服的承认: 我的星空踩在他们的稻田上',
      engagementHook: '我的名字能留下来，不只因为我聪明，还因为我生在了一个「会被史书记住」的位置。同样聪明的人，生在最底层，会怎么样？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-aryabhata-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我活着的时候，并不知道我那卷棕榈叶，后来走了一条多远的路。\n\n我死后，笈多帝国本身也没撑太久——北方游牧的 Huna（嚈哒/白匈奴）一波波南下，连年战争把国库掏空，约公元 550 年，帝国瓦解，北印度重新碎成许多小邦。\n\n可我留下的那套数字和「零」，没有跟着帝国一起死。\n\n它一路往西走。约公元 825 年，巴格达一个叫 Al-Khwarizmi（花拉子米）的数学家，写了一部书介绍「印度数字」，阿拉伯世界把它学了去。到 1202 年，一个叫 Fibonacci（斐波那契）的欧洲人，又把它带进了欧洲。\n\n欧洲人后来管它叫「阿拉伯数字」——可你现在知道了，它真正的老家，是印度。\n\n你今天用手机、按计算器、写下任何一个数字，用的都是我们这套符号。它比笈多的疆界活得久，比我活得久，比任何一个国王活得久。',
        en: 'While I was alive, I had no idea how far that roll of palm leaf would later travel.\n\nAfter I died, the Gupta empire itself did not last long either. The northern nomadic Huna (the Hephthalites, or White Huns) pushed down wave after wave; years of war emptied the treasury; and around 550 CE the empire fell apart, and north India broke into many small states again.\n\nBut the numbers and "zero" I left behind did not die with the empire.\n\nThey traveled west. Around 825 CE, a mathematician in Baghdad named Al-Khwarizmi wrote a book introducing the "Indian numerals," and the Arab world learned them. By 1202, a European named Fibonacci carried them into Europe.\n\nEuropeans later called them "Arabic numerals." But now you know: their real home is India.\n\nWhen you use a phone today, press a calculator, write any number at all, you use this set of symbols of ours. It outlived the Gupta borders, outlived me, outlived any king.',
      },
      deliverGoal: 'N8 story — Aryabhata 不知棕榈叶后来走多远 + 死后帝国没撑久 (Huna 嚈哒/白匈奴南下/连年战争掏空国库/约 550 瓦解北印度再碎) + 数字和零没跟帝国一起死 + 往西走 (约 825 Al-Khwarizmi 巴格达介绍印度数字阿拉伯学去 → 1202 Fibonacci 带进欧洲) + 欧洲误叫阿拉伯数字老家是印度 + 你今天用手机计算器写数字用的都是这套符号 (比疆界比我比国王活得久)',
      engagementHook: '我活着时根本不知道，我写在棕榈叶上的那几个数字，后来传遍了全世界，活得比笈多的疆界、比我、比任何一个国王都久。什么东西能比一个帝国活得更久？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-aryabhata-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '回到 499 年那个雨后的晴夜。我想让你站在我身边，再看一眼那满天的星。\n\n我用观察、用一个坐船的比喻、用那套位值制和空位记号，去逼近一个算不尽的数，去质疑「天在转」这件天经地义的事。\n\n但我也想让你看见我没看见的那一半。\n\n我能站在这个台上，是因为底下有一整座金字塔托着我：是城外种地的人交上来的粮，养着这座城；是工匠的手，造出我观星用的器具；是无数个我从没见过面的人，把他们的一生，垒成了我脚下这个发光的位置。\n\n金子，照亮了我和我的星。可金子从哪儿来？从那片我背对着的、黑黢黢的恒河平原上来。\n\n所以，当你听到「黄金时代」这四个字——请你别只看见我这颗最亮的星。请你也回头，看一眼那片我站在上面、却几乎从没回头看过的大地。',
        en: 'Back to that clear night after rain in 499. I want you to stand beside me and look once more at the whole sky of stars.\n\nWith observation, with a boat comparison, with that place-value system and its empty-slot notation, I reached toward a number with no end, and questioned the taken-for-granted thing that "the sky turns."\n\nBut I also want you to see the half I did not see.\n\nI can stand on this platform because a whole pyramid holds me up: the grain the farmers outside the city hand up feeds this city; the artisans\' hands make the instruments I use to watch the stars; countless people I never met piled their whole lives into this shining spot beneath my feet.\n\nThe gold lit up me and my stars. But where does the gold come from? It comes from that dark Ganges plain I have my back turned to.\n\nSo when you hear those words "Golden Age," please do not see only my one brightest star. Please also turn around, and look at the land I stand upon, the land I have almost never turned to look at.',
      },
      deliverGoal: 'N9 zoom-out — 回 499 雨后晴夜再看星 + 我用观察/坐船比喻/位值制+空位记号逼近算不尽的数质疑天在转 + 但看见我没看见的一半: 站台上靠整座金字塔托 (城外种地人交粮养城/工匠手造观星器具/无数没见过的人垒成发光位置) + 金子照亮我和星但金子从我背对的黑黢黢恒河平原来 + 听到「黄金时代」别只看我这颗最亮的星请回头看我站在上面却从没回头看的大地',
      engagementHook: '金子照亮了我和我的星，可金子是从那片我背对着的、黑黢黢的恒河平原上来的。当你赞叹一颗最亮的星时，你会不会忘了去看，它脚下站着的是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-aryabhata-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，该怎么记我？两种说法都站得住，你来称。\n\n一种说法：我就该被当成天才来记。二十三岁写出位值制、圆周率、地球自转，靠的实打实是我自己的头脑和胆量。一个人能凭一支笔、几片棕榈叶，摸到宇宙的边——这样的人，理应被史书记住名字。把功劳记在我头上，没记错。\n\n另一种说法：把「黄金时代」简化成几个有名字的天才，恰恰是历史最爱犯的错。我的天才再真，也是被一整个时代、一整座金字塔托起来的：是稳定的王朝肯养我，是城外没名字的农人种粮养我，是工匠造器具给我，是后来无数抄经的人替我把字传下去。我有名字，他们没有——可没有他们，就没有我。\n\n这两边不是「天才」对「时代」二选一。是同一颗星的两面：一个真实发光的个人，和一座必须有无数无名者垫底、才能让某个人发光的金字塔。\n\n这是一所学校里 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, how should I be remembered? Both views stand. You do the weighing.\n\nOne view: I should be remembered as a genius. Place-value, pi, the Earth\'s rotation, written at twenty-three, rested on my own mind and nerve, plain and real. A person who can, with one stylus and a few palm leaves, touch the edge of the universe, deserves to have his name kept by the histories. Crediting it to me is not wrong.\n\nThe other view: reducing a "Golden Age" to a few named geniuses is exactly the mistake history loves to make. However real my talent, it was held up by a whole age, a whole pyramid: a stable dynasty willing to feed me, nameless farmers outside the city growing grain to feed me, artisans making my instruments, and later countless copyists passing my words on for me. I have a name; they do not. But without them, there is no me.\n\nThese two are not "genius" versus "age," choose one. They are two faces of one star: a real, shining individual, and a pyramid that must have countless nameless people at its base before any one person can shine.\n\nThis is a hard problem an AP teacher at a school will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (该当天才记/23 岁写位值制圆周率地球自转靠自己头脑胆量/凭笔和棕榈叶摸宇宙的边理应被记名字) / 另一种说法 (把黄金时代简化成几个有名字天才恰是历史最爱犯的错/天才被整个时代整座金字塔托起: 王朝养/无名农人种粮/工匠造器具/后来抄经人传字/我有名他们没有但没他们没我) / 同一颗星两面 / neutral school name (AP 老师) / 想 30 秒两边都站得住',
      engagementHook: '一个真实发光的天才，和一座必须有无数无名者垫底才能让他发光的金字塔——这是同一颗星的两面。一个时代的辉煌，该记在几个有名字的人头上，还是记在所有没名字的人头上？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'gup-aryabhata-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是这座金字塔最尖、最亮的那一颗星的声音。\n\n请记住：这只是一边，而且是最被照亮、最容易被记住的那一边。我有名字、有书、有后世几百年的传颂——我讲的故事，自带光环，听起来当然动人。这正是「最亮的那颗星」视角最需要小心的地方。\n\n可这一遍里，有两群人几乎没开口。\n\n一个，是在廊下一片一片抄我那卷棕榈叶的少年——没有他这样的人一遍遍重抄，棕榈叶一烂，我的数字就跟我一起死了。可他没有名字。\n\n另一个，是城外恒河平原上那个种地的人——他养活了这整座城和我全部的星空，却一辈子读不到我一个字，可能根本没听过「黄金时代」这四个字。\n\n等你换上他们的视角，他们会狠狠地挑战你刚才听我说的每一句话。\n\n最后留一个东西给你：还记得我故事开头，那场把天洗干净、让我能看见满天星的季风雨吗？换个视角再走一遍，你会从另一个人那里，再遇见这场雨一次——到那时，同样一场雨，落下来的意思，会完全不同。',
        en: 'What you just heard was the voice of the highest, brightest star at the top of this pyramid.\n\nRemember: it is only one side, and the most lit, most easily remembered side at that. I have a name, a book, centuries of later praise. The story I tell carries its own halo and of course sounds moving. That is exactly where the "brightest star" view most needs care.\n\nBut in this pass, two groups of people barely spoke.\n\nOne is the boy in the porch copying my roll of palm leaf, leaf by leaf. Without people like him recopying it again and again, the moment the palm leaf rots, my numbers die with me. Yet he has no name.\n\nThe other is the farmer out on the Ganges plain beyond the city. He fed this whole city and all my starry sky, yet in his whole life could not read a single word of mine, and may never have heard the words "Golden Age" at all.\n\nWhen you switch to their perspectives, they will challenge, hard, every sentence you just heard from me.\n\nAnd one last thing to leave with you: remember the monsoon rain at the start of my story, the one that washed the sky clean so I could see the stars? Walk this through again from another perspective, and you will meet that rain once more, through someone else. By then, the same rain, as it falls, will mean something entirely different.',
      },
      deliverGoal: 'N11 close/meta — 你听的是金字塔最尖最亮的星 (有名字有书有传颂自带光环最需小心) + 还没听到: ① 廊下抄棕榈叶少年 (没他重抄棕榈叶一烂数字就死/可他没名字) ② 城外恒河平原种地人 (养活整座城和我星空却读不到我一个字可能没听过黄金时代) 会挑战你听的每句 + 暗示季风雨会从另一视角再遇见一次同样的雨意思完全不同 (不直接解释 echo)',
      engagementHook: '我有名字、有书、有几百年的传颂，我的故事自带光环——这正是「最亮那颗星」最危险的地方。你听完我这一边，最想去问那个抄经的少年、那个种地的人什么问题？',
      expectsRealAnswer: true,
    },
  ],
};

export var copyistLens = {
  id: 'copyist-mediator',
  name: 'The Palm-Leaf Copyist',
  nameCn: '抄经的少年',
  role: 'lonely-mediator',
  perspectiveTag: 'between-scholar-and-village',
  icon: '🍃',
  description: {
    cn: '笈多宫廷边缘一个抄写棕榈叶手稿的学徒，没有名字，因为历史几乎没给这一层让知识传下去的无名抄写者留名。他大概是婆罗门或书吏家庭的少年，识梵语，每天坐在寺庙或学府的廊下，用尖笔一笔一笔抄录《Aryabhatiya》的诗句、Kalidasa 的戏剧、往世书。他卡在两个世界之间: 往上是有名字、被供养的学者, 往下是城外读不到一个字的村庄。这一遍让你站在「桥」上, 看一个黄金时代的光, 怎么被一双无名的手, 一片叶子一片叶子地接力传下去。',
    en: 'An apprentice copying palm-leaf manuscripts at the edge of the Gupta court, with no name, because history left almost no names for this layer of anonymous copyists who kept knowledge alive. He is likely a boy from a Brahmin or scribe family, literate in Sanskrit, sitting all day in a temple or school porch, copying with a stylus the verses of the Aryabhatiya, Kalidasa\'s plays, the Puranas. He is wedged between two worlds: above are the named, supported scholars; below are the villages beyond the city that cannot read a single line. This pass puts you on the bridge, watching how a Golden Age\'s light is relayed forward, leaf by leaf, by an anonymous hand.',
  },
  storyboard: [
    {
      id: 'gup-copyist-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '一个黄金时代要发光，光得有人接着、有人传下去。我，就是那双没人记得的手。\n\n华氏城（Pataliputra）一座学府的廊下，天刚亮。我盘腿坐下，膝上摊开一片棕榈叶（palm-leaf），手里一支尖笔。我要做的，是把别人写好的东西，一笔一笔，抄到新的叶子上。\n\n今天抄的，是 Aryabhata（阿里亚哈塔，一位天文数学家）那卷《Aryabhatiya》——那些算星星、算圆的诗句。昨天抄的是 Kalidasa 的戏剧，前天是往世书（Puranas）。\n\n我没有名字告诉你。Aryabhata 有名字，Kalidasa 有名字。可像我这样、把他们的字一遍遍重抄下去的人，历史几乎没给我们留一个名字。\n\n这一遍，你坐进我这个位置——一个「桥」的位置。你会看见，黄金时代的光不是凭空亮着的，它是被我这样一双无名的手，一片叶子、一片叶子，慢慢传下去的。',
        en: 'For a Golden Age to shine, someone has to catch the light and pass it on. I am that hand no one remembers.\n\nIn the porch of a school in Pataliputra, just at dawn. I sit cross-legged, a palm leaf spread on my knees, a stylus in my hand. My task is to take what others have written and copy it, stroke by stroke, onto fresh leaves.\n\nToday I copy Aryabhata\'s roll (Aryabhata, an astronomer-mathematician), the Aryabhatiya, the verses that calculate the stars and the circle. Yesterday it was a play by Kalidasa, the day before the Puranas.\n\nI have no name to give you. Aryabhata has a name. Kalidasa has a name. But people like me, who recopy their words again and again, history left almost no names for us.\n\nThis pass puts you in my seat, the seat of a "bridge." You will see that a Golden Age\'s light does not glow on its own. It is passed on, slowly, leaf by leaf, by an anonymous hand like mine.',
      },
      deliverGoal: 'N1 hook — 黄金时代发光要有人接传 + 华氏城学府廊下天亮盘腿坐棕榈叶+尖笔 + 抄别人写好的 (今天 Aryabhatiya 算星算圆诗句/昨天 Kalidasa 戏剧/前天往世书) + 没名字 (Aryabhata/Kalidasa 有名字像我这样重抄的人历史几乎没留名) + 这一遍坐进「桥」的位置 (黄金时代光不凭空亮是无名的手一片叶子一片叶子传下去)',
      engagementHook: '一个黄金时代要发光，得有人接着光、传下去——我就是那双没人记得的手。一段了不起的历史，能不能没有这样一双无名的手？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-copyist-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我为什么能坐在这廊下，你才懂这个位置有多稀少。\n\n这座帝国，是一座层层叠叠的金字塔。社会被切成森严的种姓：婆罗门祭司在最上，往下是武士、平民、劳动者，再往下，还有被排在四大种姓之外的人。这套秩序叫 varna 和 jati，很多人一出生就被钉死了位置。\n\n我之所以能识梵语、能拿起这支笔，是因为我生在一个婆罗门或书吏的家庭——一个允许我读书写字的位置。这不是我挣来的，是我生下来就有的。\n\n在这整座帝国里，识字的人，是极少极少的一小撮。绝大多数人，一辈子不识一个字。\n\n所以你别以为「抄书」是个低贱的小活。在那个年代，能读、能写、能抄，本身就是一种了不起的特权。我离 Aryabhata 那样的大学者还差得远，可我已经站在了金字塔上层、能碰到「字」的那一小块地方。',
        en: 'First let me say why I get to sit in this porch, so you understand how rare this spot is.\n\nThis empire is a pyramid in layer upon layer. Society is cut into strict castes: Brahmin priests at the top, then warriors, commoners, laborers below, and below them people ranked outside the four castes entirely. This order is called varna and jati, and many people are pinned to their place from the day they are born.\n\nI can read Sanskrit and pick up this stylus because I was born into a Brahmin or scribe family, a position that allows me to read and write. I did not earn this; I had it from birth.\n\nIn this whole empire, the people who can read are a very, very small handful. The great majority go their whole lives without knowing a single letter.\n\nSo do not think "copying books" is some lowly little chore. In that age, to read, write, and copy was itself a remarkable privilege. I am far from a great scholar like Aryabhata, but I already stand on an upper layer of the pyramid, on the small patch where one can touch "letters" at all.',
      },
      deliverGoal: 'N2 setup — 为什么能坐廊下/这位置多稀少 + 帝国是层层金字塔 varna/jati (婆罗门祭司在上→武士平民劳动者→种姓外/很多人出生钉死位置) + 我能识梵语拿笔因生在婆罗门或书吏家庭 (允许读写的位置/不是挣来是生下就有) + 全帝国识字的人极少绝大多数一辈子不识一个字 + 抄书不是低贱小活在那年代能读写抄本身是了不起的特权 (离 Aryabhata 远但已在金字塔上层能碰到字)',
      engagementHook: '我能拿起这支笔，不是我挣来的，是我生在了一个「允许读书写字」的家庭。在那个年代，连「识字」本身，都是极少数人的特权。这公平吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-copyist-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '再说我手里这片叶子，你才懂我做的事为什么要紧。\n\n那时候没有纸印的书。知识写在棕榈叶（palm-leaf）上——把叶子裁好、晒干、抹平，再用尖笔在上面刻字。我闻得到叶子晒干后那股草木味，手指被尖笔磨出了一层薄茧。\n\n可棕榈叶有个致命的毛病：它会烂。潮湿的恒河平原，季风一来，又闷又湿，叶子放几十年就脆了、坏了、字没了。\n\n所以一部书想活下去，唯一的办法，就是不停地抄。一片叶子快烂了，就得有人在它烂掉之前，把上面的字，原样抄到一片新叶子上。\n\n这就是我每天干的事。我不创造任何新东西。我只是个「接力的人」：在旧叶子烂掉、和知识彻底消失之间，我用我的笔，争出一点时间。\n\nAryabhata 的数字能活到今天，靠的不只是他写下来——更靠无数个我这样的人，在他死后几百年里，一遍又一遍，把它从快烂的叶子，搬到新的叶子上。',
        en: 'Now let me speak of this leaf in my hand, so you understand why what I do matters.\n\nIn those days there were no printed paper books. Knowledge was written on palm leaf: the leaves were cut, dried, smoothed, and then letters were scratched on with a stylus. I can smell the dried, grassy scent of the leaves; the stylus has worn a thin callus onto my finger.\n\nBut palm leaf has a fatal flaw: it rots. On the damp Ganges plain, when the monsoon comes, thick and wet, leaves go brittle in a few decades, spoil, and the letters are gone.\n\nSo the only way a book can survive is to be copied without end. As one leaf nears rotting, someone must, before it rots, copy its letters faithfully onto a fresh leaf.\n\nThis is what I do every day. I create nothing new. I am only "the one in the relay": between the old leaf rotting and the knowledge vanishing for good, I use my stylus to win a little time.\n\nAryabhata\'s numbers survive to today not only because he wrote them down, but more because countless people like me, over the centuries after his death, again and again, moved them from a near-rotten leaf to a fresh one.',
      },
      deliverGoal: 'N3 setup — 手里这片叶子为什么要紧 + 那时没纸印书知识写棕榈叶 (裁晒平尖笔刻字/草木味/手指薄茧) + 棕榈叶致命毛病: 会烂 (潮湿恒河平原季风又闷又湿叶子几十年脆坏字没了) + 一部书想活下去唯一办法不停抄 (旧叶快烂前原样抄到新叶) + 我每天干的: 不创造新东西只是接力的人 (在旧叶烂掉和知识消失之间用笔争一点时间) + Aryabhata 数字活到今天靠的不只他写下更靠无数我这样的人死后几百年一遍遍搬到新叶',
      engagementHook: '棕榈叶会烂——一部书想活下去，唯一的办法就是不停地有人抄。我不创造任何新东西，我只是在知识彻底消失之前，争出一点时间。这样的「接力」，重要吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-copyist-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n今天摊在你膝上的，是 Aryabhata 的《Aryabhatiya》。你抄到一句，停住了。\n\n那句诗说：站在自转的地球上的人，看见本来不动的星星在往西移——就像坐顺流的船，看见岸上的树在往后退。\n\n你读懂了。你心里一震：这跟所有老师教的、所有人信的都不一样。这是说，不是天在转，是大地在转。\n\n这一刻，你面前其实有三条路。\n\n第一条：你看不懂，机械地照抄。很多抄写者就是这样，手在动，脑子是空的。\n\n第二条：你觉得这句话太离经叛道、太危险，干脆「手滑」抄错一个字，让它的意思走样——一个抄写者，是有这个权力悄悄改掉历史的。\n\n第三条：你看懂了，被它震到了，于是你格外小心，一个字都不改，原原本本把它送往下游。\n\n你手里的笔停在叶子上方。你选哪条？你抄下去的这一笔，决定了几百年后的人，还能不能读到 Aryabhata 真正想说的话。',
        en: 'Now you are me.\n\nSpread on your knees today is Aryabhata\'s Aryabhatiya. You copy to one line and stop.\n\nThat line says: a person standing on the rotating Earth sees the unmoving stars drift westward, just as a person on a downstream boat sees the trees on the bank slide backward.\n\nYou understand it. Something jolts in you: this is unlike everything the teachers taught, everything people believe. It says it is not the sky that turns, but the ground.\n\nIn this moment, three roads lie before you.\n\nThe first: you do not understand it, and you copy mechanically. Many copyists are just so, hand moving, mind empty.\n\nThe second: you find this line too dangerous, too far against what everyone believed, and so you "let the stylus slip," miscopy one character, and let its meaning go crooked. A copyist does have the power to quietly change history.\n\nThe third: you understand it, you are struck by it, and so you are especially careful, change not one letter, and send it downstream exactly as it is.\n\nYour stylus hovers above the leaf. Which road do you choose? This one stroke you make decides whether people centuries from now can still read what Aryabhata truly meant.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 今天膝上是 Aryabhatiya 抄到一句停住 (站自转地球见星西移如坐顺流船见岸树后退) + 读懂心里一震 (跟所有老师所有人信的不一样: 不是天转是地转) + 三条路: ① 看不懂机械照抄 (手动脑空) ② 觉得离经叛道危险手滑抄错一字让意思走样 (抄写者有权力悄悄改历史) ③ 看懂被震到格外小心一字不改原样送下游 + 笔停叶上方你选哪条 (这一笔决定几百年后能不能读到 Aryabhata 真想说的话)',
      engagementHook: '我手里这支笔，有一个可怕的权力：我可以悄悄抄错一个字，让几百年后的人，读到一个走了样的 Aryabhata。一个「只是抄书」的人，手里其实握着什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-copyist-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我选了第三条：一个字都不改，原原本本送下去。\n\n但我要对你诚实：选这条路，其实很难。\n\n难，不是因为危险。难，是因为没人看见。\n\n我抄完这卷《Aryabhatiya》，叶子上不会留我的名字。读到它的人，只会记住 Aryabhata。哪怕我抄得再准、再用心，几百年后，没有一个人会知道，曾经有一个少年，在某座学府的廊下，一笔一笔，把这些数字救了下来。\n\n我做的是一件「重要、但注定无名」的事。\n\n有时候我也想：我图什么呢？我又当不成 Aryabhata，我连自己的名字都留不下。\n\n可每次这么想，我又会停下笔，看看膝上这片叶子。我忽然懂了：正因为有无数个像我一样、甘心无名的人，那些有名字的光，才传得下去。我不是那颗星。我是让星光，能照到几百年以后的——那段看不见的路。',
        en: 'I chose the third road: change not one letter, send it on exactly as it is.\n\nBut I must be honest with you: choosing this road is hard.\n\nHard, not because it is dangerous. Hard, because no one sees it.\n\nWhen I finish copying this roll of the Aryabhatiya, the leaf will not bear my name. Whoever reads it will remember only Aryabhata. However accurately, however carefully I copy, centuries from now not one person will know that there was once a boy, in some school porch, who stroke by stroke saved these numbers.\n\nWhat I do is a thing that is "important, yet doomed to be nameless."\n\nSometimes I wonder: what is in it for me? I will never be an Aryabhata; I cannot even leave my own name.\n\nBut every time I think this, I stop the stylus and look at the leaf on my knees. And suddenly I understand: it is precisely because there are countless people like me, willing to be nameless, that the named lights get passed on. I am not the star. I am the unseen road, the road that lets starlight reach centuries later.',
      },
      deliverGoal: 'N5 story — 选第三条一字不改原样送下去 + anti-fab 诚实: 选这条很难不因危险而因没人看见 + 抄完叶子不留我名读者只记 Aryabhata (再准再用心几百年后没人知道有个少年廊下救了数字) + 做「重要但注定无名」的事 + 自问图什么 (当不成 Aryabhata 留不下名字) + 停笔看膝上叶子懂了: 正因无数甘心无名的人那些有名字的光才传得下去 + 我不是那颗星我是让星光照到几百年后的那段看不见的路',
      engagementHook: '我做的是一件「重要、但注定无名」的事——再用心，几百年后也没人知道有过我这个人。一件没人看见、不会留名的好事，你做不做？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-copyist-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我说一说，我抄字的时候，外面在下什么。\n\n季风来了。雨点噼里啪啦打在学府的屋檐上，也打在院子里那几棵棕榈树宽大的叶子上——啪、啪、啪，一声接一声。\n\n（说一句实话：史料不会逐字记下我抄书那天，廊下到底是晴是雨。这场雨，是这一段替你具象出来的——但「季风决定一切」，在那片土地上，是再真实不过的事。）\n\n对 Aryabhata 来说，这场雨，是把天洗干净、让他夜里能看星的好雨。\n\n对我来说，这场雨却让我心头一紧：太潮了。潮湿是棕榈叶的天敌。雨季一长，叶子烂得更快，我手里这些字，消失得更快。雨越大，我越得抢着抄。\n\n而对城外那个种地的人来说，这同一场雨，是他一整年的命——雨来得准，他有饭吃；雨晚了，他要饿肚子。\n\n同一场季风的雨，落在我们三个人头上，是三件完全不同的事。我夹在中间：上面那个人靠它看星，下面那个人靠它活命，而我，靠和它赛跑，把上面的光，往下面传。',
        en: 'Let me tell you what was falling outside while I copied.\n\nThe monsoon came. Raindrops drummed on the eaves of the school, and on the broad leaves of the few palm trees in the courtyard, tap, tap, tap, one after another.\n\n(An honest note: the record does not write down, word for word, whether the porch was clear or rainy on the day I copied. This rain is an image this part draws for you, but "the monsoon decides everything" was, on that land, as real as anything.)\n\nFor Aryabhata, this rain is a good rain, washing the sky clean so he can watch the stars at night.\n\nFor me, this rain tightens my chest: too damp. Damp is the deadly enemy of palm leaf. A long rainy season rots the leaves faster, and these letters in my hand vanish faster. The harder the rain, the more I must rush to copy.\n\nAnd for the farmer outside the city, this same rain is his whole year\'s life: rain on time, he eats; rain late, he goes hungry.\n\nThe same monsoon rain, falling on the three of us, is three completely different things. I am wedged in the middle: the one above relies on it to watch the stars, the one below relies on it to stay alive, and I race against it to pass the light above down to the one below.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 季风雨从抄经少年角度 + 雨打屋檐打院里棕榈树宽叶啪啪 + anti-fab 括号 (史料不逐字记那天晴雨/这场雨替你具象/但季风决定一切真实) + 同一场雨三义 (Aryabhata: 洗天能看星的好雨 / 少年: 太潮棕榈叶天敌烂得快字消失快越大越抢着抄 / 城外种地人: 一整年的命雨准有饭雨晚饿肚) + 我夹中间 (上面靠它看星下面靠它活命我靠和它赛跑把上面的光往下传)。不点破另两视角',
      engagementHook: '同一场季风的雨，落在我们三个人头上：一个靠它看星，一个靠它活命，我靠和它赛跑抢救字。同一件事，为什么在不同的人那里，意思能完全不一样？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-copyist-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我抄的，远不止 Aryabhata 的数字。\n\n这是一个什么都在开花的时代。我抄过 Kalidasa 的戏剧——他是笈多宫廷供养的梵语第一大诗人，他的《沙恭达罗》是梵语文学的巅峰，后来连远方的人都赞叹。我也抄往世书（Puranas），抄那些讲毗湿奴（Vishnu）等神的故事——这是一个印度教（Hinduism）重新兴盛的时代。\n\n你看，黄金时代不只有 Aryabhata 那样的硬科学，也有最柔软的诗、最神圣的经。而它们能流传下去的方式，都一样：靠人抄。\n\n但我心里也清楚一件事：我抄的这些——数学、诗、经——全是上层的东西。能写出来、能被宫廷供养、能被一遍遍抄在叶子上的，都是站在秩序上层的极少数人。\n\n城外那些种地的人，他们有没有自己的歌、自己的故事？一定有。可那些东西，没人抄，没人写，随着唱它的人一起，烂进了泥土里。\n\n我这双手，只接得住从上面流下来的光。下面那一整片沉默，我接不住。',
        en: 'What I copy is far more than Aryabhata\'s numbers.\n\nThis is an age when everything is flowering. I have copied Kalidasa\'s plays. He is the greatest Sanskrit poet supported by the Gupta court; his Shakuntala is the peak of Sanskrit literature, later praised even by people far away. I have also copied the Puranas, the stories of gods like Vishnu, for this is an age when Hinduism rises again.\n\nYou see, the Golden Age holds not only hard science like Aryabhata\'s, but the softest poetry and the most sacred scripture. And the way they all survive is the same: by being copied.\n\nBut I also know one thing clearly: what I copy, the mathematics, the poetry, the scripture, is all the upper layer\'s. The ones who can write, be supported by the court, be copied again and again onto leaves, are the tiny few standing in the upper layer of the order.\n\nThe farmers outside the city, do they have their own songs, their own stories? Surely they do. But those things, no one copies, no one writes; they rot into the soil along with the people who sang them.\n\nThese hands of mine can only catch the light flowing down from above. That whole silence below, I cannot catch.',
      },
      deliverGoal: 'N7 story — 抄的远不止 Aryabhata 数字 (什么都开花的时代) + Kalidasa 戏剧 (笈多宫廷供养梵语第一大诗人/沙恭达罗梵语文学巅峰远方人赞叹) + 往世书 Puranas 讲毗湿奴 Vishnu (印度教 Hinduism 重新兴盛) + 黄金时代不只硬科学也有最柔软诗最神圣经/流传方式都靠人抄 + 但清楚: 抄的数学诗经全是上层的 (能写/被供养/被抄的是秩序上层极少数) + 城外种地人有没有自己的歌故事? 一定有但没人抄没人写随唱它的人烂进泥土 + 我这手只接得住上面流下的光下面那片沉默接不住',
      engagementHook: '我抄数学、抄诗、抄经——可这些全是上层的东西。城外种地人也一定有自己的歌、自己的故事，但没人替他们抄，它们随人一起烂进了泥土。历史，是不是只记住了「被抄下来」的那一半？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-copyist-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我活着的时候，根本想不到我抄的字，后来走了多远的路。\n\n约公元 550 年，笈多帝国瓦解了。北方游牧的 Huna（嚈哒/白匈奴）一波波打进来，连年战争把帝国掏空，北印度重新碎成许多小邦。供养学者的宫廷散了，安稳的日子没了。\n\n你可能以为，帝国一倒，那些数字、那些诗，也就跟着烂在乱世里了。\n\n没有。\n\n因为像我这样的人没有停。哪怕没有宫廷供养了，哪怕天下乱了，一代又一代的抄写者，还是在一片片叶子上，把那些字传了下去。正是这条无名的接力，让 Aryabhata 的数字熬过了帝国的崩塌。\n\n几百年后，这套数字一路往西，传到了巴格达，又传到了欧洲，最后变成了全世界都在用的数字。\n\n那条路的起点，有一段，是我这样的人用一支尖笔、一片棕榈叶，在没人看见的廊下，一笔一笔铺出来的。',
        en: 'While I was alive, I could never have imagined how far the letters I copied would travel.\n\nAround 550 CE, the Gupta empire fell apart. The northern nomadic Huna (the Hephthalites, or White Huns) struck in wave after wave; years of war hollowed out the empire; north India broke into many small states again. The courts that supported scholars scattered, and the stable days were gone.\n\nYou might think that once the empire fell, those numbers and poems rotted away in the chaos.\n\nThey did not.\n\nBecause people like me did not stop. Even without a court to support us, even with the land in chaos, generation after generation of copyists still passed those letters on, leaf by leaf. It was precisely this nameless relay that carried Aryabhata\'s numbers through the empire\'s collapse.\n\nCenturies later, this set of numbers traveled west, to Baghdad, then to Europe, and at last became the numbers the whole world uses.\n\nThe start of that road has a stretch that people like me laid down, stroke by stroke, with one stylus and one palm leaf, in a porch no one was watching.',
      },
      deliverGoal: 'N8 story — 活着时想不到抄的字走多远 + 约 550 笈多瓦解 (Huna 嚈哒/白匈奴一波波打进/连年战争掏空/北印度再碎/供养学者宫廷散安稳日子没了) + 以为帝国一倒数字诗烂在乱世 + 没有 + 因像我这样的人没停 (哪怕没宫廷供养哪怕天下乱一代代抄写者还在叶子上传/这条无名接力让 Aryabhata 数字熬过崩塌) + 几百年后数字往西传巴格达→欧洲→全世界用 + 那条路起点有一段是我这样的人尖笔棕榈叶没人看见的廊下一笔笔铺出来的',
      engagementHook: '帝国倒了，可像我这样的人没停——哪怕没人供养、天下大乱，一代代抄写者还在一片片叶子上传字。后来传遍世界的那条路，起点有一段，是无名的手在没人看见的地方铺出来的。',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-copyist-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张更大的图——同一个世纪，地球的另一端。\n\n就在我抄着 Aryabhata 圆周率的时候（约公元 500 年），地球东边，有一个叫祖冲之（Zu Chongzhi，429-500）的人，几乎跟我们完全同代，也在算同一个圆周率。他算得比 Aryabhata 还准，精确到了小数点后七位——这个纪录，领先了世界大约八百年。\n\n但有意思的是工具不一样。祖冲之用的是算筹（counting rods）——一种用小棍子在算板上摆来摆去的工具，它也是「位置决定大小」的十进制，跟印度的位值制是同一种智慧。\n\n可你发现没有：祖冲之那套，是摆在板上的小棍，算完就收走了；我们印度这套，是写在叶子上的符号，能抄、能传。\n\n所以传遍全世界的，是我们印度的数字，不是中国的算筹——这是形式的命运，不是聪明的高下。这不是说哪个更聪明——祖冲之精度还更高呢。是因为：我们这套，能被我这样的手，一片叶子一片叶子地抄下去、传出去。\n\n你看，我这双无名的手，原来站在了一件那么大的事的中间。',
        en: 'Let me step back and show you a larger picture, the same century, the other end of the Earth.\n\nJust as I was copying Aryabhata\'s pi (around 500 CE), on the eastern edge of the Earth there was a man named Zu Chongzhi (429-500), almost exactly our contemporary, also calculating the same pi. He calculated it even more precisely than Aryabhata, to seven decimal places, a record that led the world by about eight hundred years.\n\nBut the interesting thing is the tools differ. Zu Chongzhi used counting rods, small sticks laid out and shifted on a board, also a decimal of "position decides size," the same wisdom as India\'s place-value.\n\nYet notice: Zu Chongzhi\'s was sticks laid on a board, swept away once the sum was done; ours in India was symbols written on leaves, which could be copied and passed on.\n\nSo what spread across the whole world was our Indian numbers, not China\'s counting rods, the fate of a form, not a ranking of cleverness. This is not to say which was smarter, Zu Chongzhi\'s precision was even higher. It is because ours could be copied and carried onward, leaf by leaf, by a hand like mine.\n\nYou see, these nameless hands of mine turn out to have stood in the middle of something that large.',
      },
      deliverGoal: 'N9 zoom-out + §8 中国桥 — 同一世纪地球另一端 + 约 500 我抄 Aryabhata 圆周率时东边祖冲之 (Zu Chongzhi 429-500) 几乎完全同代也算同一圆周率算得更准 7 位领先世界约 800 年 + 括号标 (同时代中国可用中国说法) + 工具不一样: 祖冲之用算筹 (counting rods 小棍算板摆/也是位置决定大小十进制/同一种智慧) + 关键差: 祖冲之摆板上小棍算完收走/印度写叶上符号能抄能传 + 传遍世界是印度数字不是中国算筹 (不说哪个聪明祖冲之精度更高/是因印度这套能被我的手一片叶一片叶抄下去传出去) + 我这双无名手站在那么大事中间。Rule 0 中性',
      engagementHook: '同一个世纪，地球另一端的祖冲之，圆周率算得比我们还准。可传遍世界的是印度数字，不是中国算筹——不是因为谁更聪明，是因为我们这套，能被我这样的手抄下去、传出去。「更聪明」和「更能传」，是同一回事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-copyist-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，该怎么记一个像我这样的人？两种说法都站得住，你来称。\n\n一种说法：我无足轻重。我没创造任何新东西，我只是个抄字的，连自己的名字都没留下。真正了不起的是 Aryabhata、是祖冲之、是 Kalidasa——那些有名字、有原创的人。历史只记住他们，是公道的。一个抄书匠，凭什么跟天才并列？\n\n另一种说法：恰恰是我这样的人，决定了哪些光能活下来。天才负责发光，可光要是没人接、没人传，它和帝国一起烂掉，就什么都不剩。Aryabhata 的数字能熬过帝国崩塌、传遍世界，靠的不是他一个人，是无数个无名的我，在叶子烂掉之前，一遍遍把它救出来。功劳簿上只有天才的名字，可这功劳，有一大半，是没名字的人垫的。\n\n这两边不是「天才」对「抄书匠」二选一。是同一件事的两半：被记住的发光的人，和没被记住、却让光不灭的人。\n\n这是一所学校里 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, how should a person like me be remembered? Both views stand. You do the weighing.\n\nOne view: I am of no importance. I created nothing new; I am only a copyist, who did not even leave my own name. The truly remarkable ones are Aryabhata, Zu Chongzhi, Kalidasa, the people with names and originality. For history to remember only them is just. By what right does a copyist stand beside a genius?\n\nThe other view: it is precisely people like me who decide which lights survive. The genius makes the light, but if no one catches and passes it on, it rots away with the empire, and nothing is left. Aryabhata\'s numbers surviving the empire\'s collapse and spreading across the world rested not on him alone, but on countless nameless copies of me, saving it again and again before the leaf rotted. The ledger of credit holds only the genius\'s name, yet a good half of that credit was laid down by people with no name.\n\nThese two are not "genius" versus "copyist," choose one. They are two halves of one thing: the remembered people who shine, and the unremembered people who keep the light from going out.\n\nThis is a hard problem an AP teacher at a school will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (我无足轻重/没创造新东西只是抄字的连名字没留/真了不起是 Aryabhata 祖冲之 Kalidasa 有名字有原创/历史只记他们公道/抄书匠凭什么跟天才并列) / 另一种说法 (恰是我这样的人决定哪些光活下来/天才发光但没人接没人传就和帝国一起烂/Aryabhata 数字熬过崩塌传遍世界靠无数无名的我叶烂前一遍遍救/功劳簿只有天才名字但一大半是没名字的人垫的) / 同一件事两半 (被记住发光的人 + 没被记住却让光不灭的人) / neutral school name (AP 老师) / 想 30 秒两边都站得住。含 §8 桥呼应祖冲之',
      engagementHook: '天才负责发光，可光要是没人接、没人传，它就和帝国一起烂掉了。功劳簿上只有天才的名字——可这功劳，有一大半，是没名字的人垫的。「记住谁」这件事，本身公平吗？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'gup-copyist-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是「桥」上那个人的声音——一个夹在上下两层中间、传递别人光芒的人。\n\n请记住：这也只是一边。我虽然没名字，但我识字、我能碰到「字」、我站在金字塔的上层。我讲的故事里，有一种「我已经够苦、够无名了」的味道——可比起城外那个人，我已经是被照到光的那一边了。这正是「桥」这个视角最容易自我感动的地方。\n\n这一遍里，还有两群人，比我更没有声音。\n\n往上看，是 Aryabhata——他有名字、有书、有几百年的传颂，是这座金字塔最亮的那颗星。他会怎么讲这个「黄金时代」？\n\n往下看，是城外恒河平原上那个种地的人——他读不到我抄的任何一个字，他的歌、他的故事，没有任何一个抄写者替他留下来。在他眼里，「黄金时代」也许根本不存在。\n\n等你换上他们的视角，他们会从两头，挑战你刚才听我说的话。\n\n最后留一个东西给你：还记得我抄字时，外面那场打在棕榈叶上的季风雨吗？换个视角再走一遍，你会在城外那个种地人那里，再遇见这场雨——到那时，同样一场雨，是另一个人一整年的生死。',
        en: 'What you just heard was the voice of the person on the "bridge," someone wedged between the upper and lower layers, relaying another\'s light.\n\nRemember: this too is only one side. Though I have no name, I can read, I can touch "letters," I stand on the upper layer of the pyramid. In the story I tell there is a flavor of "I am already wretched enough, nameless enough," yet compared with the farmer outside the city, I am already on the side the light has reached. That is exactly where the "bridge" view most easily moves itself to tears.\n\nIn this pass, two more groups have even less voice than I.\n\nLook up, and there is Aryabhata, who has a name, a book, centuries of praise, the brightest star at the top of this pyramid. How would he tell this "Golden Age"?\n\nLook down, and there is the farmer out on the Ganges plain, who cannot read a single letter I copied, whose songs and stories no copyist ever kept for him. In his eyes, the "Golden Age" may not exist at all.\n\nWhen you switch to their perspectives, they will challenge, from both ends, what you just heard from me.\n\nAnd one last thing to leave with you: remember the monsoon rain drumming on the palm leaves while I copied? Walk this through again from another perspective, and you will meet that rain again, with the farmer outside the city. By then, the same rain is another person\'s whole year of life and death.',
      },
      deliverGoal: 'N11 close/meta — 你听的是「桥」上的人 (夹上下两层传递别人光芒) + 提醒也只是一边 (我没名字但识字能碰字站金字塔上层/讲故事有「我已够苦够无名」味道但比城外人我已是被照到光那边/桥视角最易自我感动) + 还有两群比我更没声音: ① 往上 Aryabhata (有名字有书几百年传颂最亮的星会怎么讲黄金时代) ② 往下城外种地人 (读不到我抄的一个字/歌故事没抄写者留/在他眼里黄金时代也许不存在) 会从两头挑战 + 暗示季风雨会在城外种地人那里再遇见同样的雨是另一个人一整年生死 (不直接解释 echo)',
      engagementHook: '我虽然没名字，但我识字、站在金字塔上层——比起城外那个种地的人，我已经是被照到光的那一边了。你听完我这个「桥」，最想去问最亮的那颗星、和最沉默的那片大地什么？',
      expectsRealAnswer: true,
    },
  ],
};

export var cultivatorLens = {
  id: 'village-cultivator-receiving-end',
  name: 'The Ganges-Plain Cultivator',
  nameCn: '恒河平原的种田人',
  role: 'receiving-end',
  perspectiveTag: 'who-got-the-gold',
  icon: '🌾',
  description: {
    cn: '恒河平原一座村庄里的种田人，没有名字，因为历史没给这绝大多数人留下名字，而这恰恰是「黄金时代」最该被追问的地方。他的一年由季风决定: 雨来得准就有稻米和小麦, 雨晚了就是饥荒。他种的粮一部分要交给 samanta (地方封建领主)。他离 Aryabhata 的天文台不算太远, 却隔着一整套秩序, 读不到一个字, 算出地球自转跟他的收成没有半点关系。这一遍是这一课的良心: 当我们说一个时代是「黄金的」, 请同时问一句, 金子落在谁手里?',
    en: 'A cultivator in a village on the Ganges plain, with no name, because history left no names for this great majority, and that absence is exactly what a "Golden Age" most needs to be asked about. His year is decided by the monsoon: rain on time means rice and wheat, rain late means famine. Part of what he grows goes to the samanta, the local feudal lord. He does not live far from Aryabhata\'s observatory, yet a whole order stands between them; he cannot read a word, and the calculation that the Earth spins has nothing to do with his harvest. This pass is the conscience of the lesson: when we call a time golden, ask at the same time, who got the gold?',
  },
  storyboard: [
    {
      id: 'gup-cultivator-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '人人都说这是一个「黄金时代」。可我从来没摸过那块金子。\n\n我是恒河平原一座村庄里种地的人。天不亮我就下田，弯腰插秧、割稻、挑水，一直到天黑。我的背是弯的，手是裂的，脚常年泡在泥水里。\n\n我没有名字告诉你。不是我没有过名字，是没人替我记下来。在那些写「黄金时代」的书里，有 Aryabhata（阿里亚哈塔，一位天文数学家）的名字，有国王的名字，有诗人的名字——可没有我。像我这样种地的人，占了这座帝国里十个人里的八九个，可史书里，一个我们的名字都找不到。\n\n这一遍，你站在我这儿——最底下、最没名字、却养活了上面所有人的这一格。\n\n你会听到一个别人不太愿意讲的故事。当所有人都在赞叹「黄金时代」有多亮的时候，你跟我一起，问一句最该问的话：这块金子，到底落进了谁的口袋？',
        en: 'Everyone says this is a "Golden Age." But I have never once touched that gold.\n\nI am a cultivator in a village on the Ganges plain. Before dawn I go to the field, bend to plant the rice, cut the grain, carry the water, until dark. My back is bent, my hands are cracked, my feet soak in muddy water the year round.\n\nI have no name to give you. Not that I never had a name, but that no one wrote it down for me. In the books that write "Golden Age," there is Aryabhata\'s name (Aryabhata, an astronomer-mathematician), the king\'s name, the poet\'s name, but not mine. People like me who farm the land are eight or nine of every ten in this empire, yet in the histories you cannot find a single one of our names.\n\nThis pass, you stand where I stand, in the lowest, most nameless square, the square that feeds everyone above.\n\nYou will hear a story others are not so willing to tell. While everyone marvels at how bright the "Golden Age" is, you and I ask the one question that most needs asking: this gold, into whose pocket did it actually fall?',
      },
      deliverGoal: 'N1 hook — 人人说黄金时代我从没摸过那块金子 + 恒河平原村庄种地人 (天不亮下田插秧割稻挑水到天黑/背弯手裂脚泡泥水) + 没名字 (不是没有过是没人记下来/写黄金时代的书有 Aryabhata 国王诗人没有我/种地的占十个里八九个史书一个名字都没有) + 这一遍站最底最没名字却养活上面所有人 + 听别人不愿讲的故事/赞叹黄金时代多亮时问最该问的: 金子落进谁口袋',
      engagementHook: '人人都说这是「黄金时代」，可我一辈子没摸过那块金子。当你听到一个时代被叫作「黄金」，你最先想到的，是它有多亮，还是「金子落在谁手里」？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-cultivator-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我的一年，是怎么过的，你才懂我活在一个什么样的世界。\n\n我的命，攥在天上——攥在季风（monsoon）手里。\n\n每年夏天，西南季风带来雨水。雨来得准、来得够，我的稻米和小麦就长得好，这一年有饭吃。可要是雨来晚了、来少了，田就干了，收成就完了——那就是饥荒，是一家人饿肚子，是有人熬不过去。\n\n没有人能跟我说，今年的雨准不准。没有 Aryabhata 的星图能帮我，没有国王的军队能帮我。我只能看天、等雨、求神。\n\n这就是我和上面那些人最大的不同：他们的日子，靠这个稳定的王朝撑着；我的日子，靠一场说来就来、说不来就不来的雨撑着。\n\n那个能算出地球自转的天才，离我其实不远。可他算得出星星怎么转，算不出今年我家的雨什么时候来。',
        en: 'First let me tell you how my year goes, so you understand what kind of world I live in.\n\nMy life is held in the sky, held in the hand of the monsoon.\n\nEvery summer the southwest monsoon brings rain. If the rain comes on time and enough, my rice and wheat grow well, and this year there is food. But if the rain comes late, or comes too little, the field dries up and the harvest is finished. That is famine: a family going hungry, someone not making it through.\n\nNo one can tell me whether this year\'s rain will be on time. Aryabhata\'s star charts cannot help me. The king\'s army cannot help me. I can only watch the sky, wait for the rain, and pray to the gods.\n\nThis is the biggest difference between me and the people above: their days rest on this stable dynasty; my days rest on a rain that comes when it comes and fails when it fails.\n\nThat genius who can calculate the Earth\'s rotation does not actually live far from me. But he can compute how the stars turn; he cannot compute when this year\'s rain will reach my home.',
      },
      deliverGoal: 'N2 setup — 我的一年怎么过/活在什么世界 + 命攥在天上攥在季风 monsoon 手里 + 夏天西南季风带雨 (准且够: 稻米小麦长好有饭吃 / 晚或少: 田干收成完 = 饥荒一家饿肚有人熬不过) + 没人能说今年雨准不准 (Aryabhata 星图帮不了/国王军队帮不了/只能看天等雨求神) + 我和上面最大不同 (他们靠稳定王朝撑/我靠说来就来说不来不来的雨撑) + 能算地球自转的天才离我不远算得出星转算不出我家雨何时来',
      engagementHook: '那个能算出地球自转的天才，离我其实不远——可他算得出星星怎么转，算不出今年我家的雨什么时候来。对我来说，星空的奇迹，和一场雨，哪个更要紧？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-cultivator-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我种出来的粮食，不全是我的。\n\n我得交出一部分。可你猜，我交给谁？不是那个远在华氏城、我这辈子见不到一面的皇帝。我交给的，是身边一个叫 samanta（萨曼塔）的人——一个地方上的封建领主。\n\n这就是笈多王朝的运转方式。皇帝管不了这么大的地方，于是他让各地的 samanta 替他管：samanta 向皇帝称臣、纳贡、出兵，但在自己的地盘里，说了算的是他。我头顶上压着的，是这个 samanta，不是皇帝。\n\n（顺便说一句：这跟六百年前孔雀王朝那种皇帝一竿子管到底的法子，很不一样。笈多是靠一层层地方领主，松松地连在一起的。）\n\n对我来说，「皇帝」是个遥远得没有意义的词。我的天，是季风；我的地，是这块田；而管着我的，是身边这个我惹不起的 samanta。黄金时代的金光，照得到皇帝的金币、照得到 Aryabhata 的星图，可从来没照到过我和我的 samanta 之间，那一袋一袋交上去的粮食。',
        en: 'The grain I grow is not all mine.\n\nI must hand over a part. But guess to whom? Not the emperor far away in Pataliputra, whom I will never see in my life. I hand it to someone nearby called a samanta, a local feudal lord.\n\nThis is how the Gupta dynasty runs. The emperor cannot govern so vast a land, so he lets the local samanta govern it for him: the samanta bows to the emperor, pays tribute, and supplies troops, but inside his own territory, he is the one who decides. What presses down on me is this samanta, not the emperor.\n\n(By the way: this is very different from the Mauryan way six hundred years ago, where the emperor governed all the way down with one pole. The Guptas were loosely tied together through a layer upon layer of local lords.)\n\nTo me, "emperor" is a word so distant it has no meaning. My sky is the monsoon; my land is this field; and the one who rules me is this samanta nearby whom I cannot afford to cross. The Golden Age\'s gold light reaches the emperor\'s gold coins, reaches Aryabhata\'s star charts, but it never once reached the sacks of grain handed up between me and my samanta.',
      },
      deliverGoal: 'N3 setup — 种的粮不全是我的得交一部分 + 交给谁? 不是远在华氏城见不到的皇帝是身边 samanta 萨曼塔 (地方封建领主) + 笈多运转方式 (皇帝管不了这么大/让各地 samanta 替管: 称臣纳贡出兵但自己地盘他说了算/我头上压的是 samanta 不是皇帝) + 括号对比孔雀王朝 (皇帝一竿子管到底/笈多靠一层层地方领主松松连一起) + 对我皇帝是遥远没意义的词 (我的天是季风我的地是这块田管我的是惹不起的 samanta) + 黄金时代金光照得到皇帝金币 Aryabhata 星图从没照到我和 samanta 间交上去的粮食',
      engagementHook: '管着我的，从来不是那个遥远的皇帝，是身边这个我惹不起的 samanta。黄金时代的金光照得到皇帝的金币、照得到天才的星图，却从没照到过我交上去的那一袋袋粮食。这算哪门子「我的」黄金时代？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-cultivator-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n有一天，村里来了个识字的人，路过歇脚。他喝着水，跟人吹嘘城里的新鲜事：说有个二十出头的年轻人，写了一卷书，说大地是会转的，说他把一个圆量到了头、又量不到头……\n\n你蹲在一边听着。你听不太懂。\n\n你心里冒出来的，不是惊叹，是一个很实在的问题：那……今年的雨，会准吗？\n\n那个会转的大地、那个量不尽的圆，跟你田里的稻子，有半点关系吗？地球转得再准，你家的雨该不来，还是不来。\n\n你不是不聪明。你能看云识天气，能算出哪块田该歇、哪块田该种，你脑子里也有一整套活下去的学问。只是你的学问，没人写下来，没人觉得它配叫「学问」。\n\n你低头看看自己裂口的手，再看看那个高谈阔论的识字人。你心里那句话，你不会说出口，但它很重：你们说的那个金光闪闪的时代——里头，到底有没有我这样的人的一格？',
        en: 'Now you are me.\n\nOne day a literate man passes through the village and stops to rest. Drinking water, he boasts of the news from the city: that a young man barely past twenty wrote a roll of a book, saying the earth turns, saying he measured a circle to its end and yet could not reach its end...\n\nYou crouch to one side and listen. You do not quite understand.\n\nWhat rises in you is not wonder, but a very practical question: then... will this year\'s rain be on time?\n\nThe turning earth, the circle with no end, do they have anything at all to do with the rice in your field? However precisely the earth turns, if your home\'s rain will not come, it will not come.\n\nYou are not unintelligent. You can read the clouds for the weather, can judge which field to rest and which to plant; you carry in your head a whole body of knowledge for staying alive. Only your knowledge was never written down, and no one thinks it deserves to be called "knowledge."\n\nYou look down at your cracked hands, then at the literate man holding forth. The sentence in your heart you will not say aloud, but it is heavy: that gold-glittering age you all speak of, is there, anywhere in it, a square for a person like me?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 村里来个识字的人路过歇脚吹嘘城里新鲜事 (二十出头年轻人写卷书说大地会转/把圆量到头又量不到头) + 你蹲一边听不太懂 + 心里冒出的不是惊叹是实在问题: 今年的雨会准吗 + 会转的大地量不尽的圆跟你田里稻子有半点关系吗 (地球转再准你家雨该不来还不来) + 你不是不聪明 (看云识天气算哪块田歇哪块种/脑里有活下去的学问只是没人写下没人觉得配叫学问) + 看裂口的手再看高谈阔论识字人 + 心里很重的话: 你们说的金光闪闪的时代里到底有没有我这样的人一格',
      engagementHook: '别人说大地会转、圆量不尽，我心里冒出来的却是：那今年的雨，会准吗？我也有一整套活下去的学问，只是没人觉得它配叫「学问」。谁的知识算「知识」，是谁定的？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-cultivator-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你也许会问：那我为什么不反抗？为什么不去争一个名字、争一块属于我的金子？\n\n这个问题，本身就有点站着说话不腰疼。\n\n我生在哪一格，是出生那一刻就定死的。这套秩序叫 varna 和 jati——一层一层的种姓，把人从生到死钉在固定的位置上。婆罗门的儿子生下来就是婆罗门，种地人的儿子生下来还是种地人。我不是「选择」了种地，是我从来没有过别的选项。\n\n而且，这套秩序不只是用刀枪压着我。它还告诉我：你这辈子在最底下，是天经地义的，是你命该如此。它让我自己都觉得，我本来就该在这儿。\n\n（说一句实话：史料几乎没替我这样的人留下任何一句话。我心里到底服不服、怨不怨，没人记下来。这一段替你想象了一个声音——但「绝大多数人没留下声音」这件事本身，是真的。）\n\n所以我没有揭竿而起。我只是日复一日地，种地、交粮、看天、求雨。我的反抗，安静得连历史都没听见。',
        en: 'You might ask: then why did I not resist? Why not fight for a name, fight for a piece of gold of my own?\n\nThat question itself is a little too easy to ask from where you stand.\n\nWhich square I was born into was fixed dead at the moment of birth. This order is called varna and jati, layer upon layer of caste that pins a person from birth to death in a fixed place. A Brahmin\'s son is born a Brahmin; a cultivator\'s son is born a cultivator still. I did not "choose" to farm; I never had any other option.\n\nAnd this order does not press on me with blades alone. It also tells me: that you are at the very bottom your whole life is natural, is what your fate ordained. It makes even me feel that this is simply where I belong.\n\n(An honest note: the record left almost no words from a person like me. Whether in my heart I accepted it or resented it, no one wrote down. This part imagines a voice for you, but the fact that "the great majority left no voice" is itself true.)\n\nSo I did not rise up in revolt. I only farmed, paid grain, watched the sky, and prayed for rain, day after day. My resistance was so quiet that even history did not hear it.',
      },
      deliverGoal: 'N5 story — 你为什么不反抗争名字争金子? 这问题站着说话不腰疼 + 生在哪格出生定死 (varna/jati 一层层种姓从生到死钉固定位置/婆罗门儿子生下是婆罗门种地人儿子还是种地人/我不是选择种地是从没别的选项) + 这秩序不只刀枪压还告诉我: 你在最底下天经地义命该如此 (让我自己都觉得本该在这儿) + anti-fab 括号 (史料几乎没替我留一句话/服不服怨不怨没人记下/替你想象一个声音但绝大多数人没留下声音本身是真的) + 没揭竿而起只日复一日种地交粮看天求雨 + 我的反抗安静得连历史都没听见',
      engagementHook: '我没有「选择」种地——我生在这一格，出生那一刻就定死了。而这套秩序最厉害的地方，是它让我自己都觉得：我本来就该在最底下。一套让人甘心待在底层的秩序，比刀枪更可怕吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-cultivator-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我说说，那个所有人都在等的东西，落在我身上是什么。\n\n季风的雨。\n\n对城里那个抄书的少年，这场雨是麻烦——太潮，他的棕榈叶烂得快。对那个观星的天才，这场雨是好事——天洗干净了，夜里能看星。\n\n可对我，这场雨是命。\n\n那一年，雨来得很晚。田裂了缝，秧苗黄了、卷了。我天天到田边站着，望着天，望着那一片该来却不来的云。我求遍了所有的神。\n\n（这一段，没有哪本史书记下了那个具体的、在田边等雨的我。它替你具象出一个农人——但「一场迟到的季风就能让千万人挨饿」，在那片土地上，是反复发生过的真事。）\n\n你能想象吗：同一片天，同一场雨。城里有人嫌它耽误抄书，有人谢它洗亮了星空，而我，跪在田埂上，为它能不能来，赌着我一家人这一年的生死。\n\n同一场雨，落在不同的人头上，是麻烦、是诗意、是生死——三件完全不同的事。',
        en: 'Let me tell you what that thing everyone waits for is, when it falls on me.\n\nThe monsoon rain.\n\nFor the copying-boy in the city, this rain is trouble: too damp, his palm leaves rot faster. For the star-watching genius, this rain is a good thing: the sky washed clean, the stars visible at night.\n\nBut for me, this rain is life itself.\n\nThat year, the rain came very late. The field cracked open; the seedlings yellowed and curled. Day after day I stood at the field\'s edge, gazing at the sky, gazing at the clouds that should come and did not. I prayed to every god there was.\n\n(This part: no history wrote down the specific me waiting for rain at the field\'s edge. It draws a cultivator for you, but the fact that "one late monsoon could starve millions" happened, again and again, on that land.)\n\nCan you imagine it: the same sky, the same rain. In the city one resents it for delaying his copying, one thanks it for washing the stars bright; and I kneel on the field ridge, betting my whole family\'s life this year on whether it comes.\n\nThe same rain, falling on different heads, is trouble, is poetry, is life and death, three completely different things.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 所有人等的东西落我身上是什么: 季风的雨 + 收束三视角 (城里抄书少年: 麻烦太潮棕榈叶烂得快 / 观星天才: 好事天洗干净夜能看星 / 我: 命) + 那年雨来很晚 (田裂缝秧苗黄卷/天天田边站望该来不来的云/求遍所有神) + anti-fab 括号 (没史书记下田边等雨的我/替你具象农人但一场迟到季风让千万人挨饿是反复发生的真事) + 同一片天同一场雨: 城里嫌耽误抄书/谢洗亮星空/我跪田埂赌一家生死 + 同一场雨三件完全不同的事 (麻烦/诗意/生死)。明收三视角',
      engagementHook: '同一场雨：城里有人嫌它耽误抄书，有人谢它洗亮了星空，而我跪在田埂上，赌着我一家人这一年的生死。同样一件事，凭什么对不同的人，意思能差这么远？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-cultivator-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得说句公道话：这个「黄金时代」，不是假的。\n\n它真的辉煌。Aryabhata 的数字是真的了不起，Kalidasa 的诗是真的美，那根德里铁柱——一根七米多高的铁柱，一千六百年几乎不锈——是真的神。这些，我不否认，也不嫉妒。\n\n可我要你看清一件事：这一切的辉煌，是站在什么上面的。\n\n那座供养着 Aryabhata 的城，吃的是我种的粮。那卷被抄来抄去的棕榈叶，是别人有闲、有书、有人养着才写得出来的——而别人能有闲，是因为有我这样的人，在田里替整个帝国流汗。\n\n就连那根千年不锈的铁柱，铭文上记住了下令造它的国王的名字，却没记住任何一个真正炼出这根铁、把它一锤一锤打起来的工匠的名字。\n\n你看，我和那个工匠，是一类人：我们的手，造出了黄金时代的一切；我们的名字，一个都没留下。辉煌是真的，可辉煌底下那些扛着它的人，是沉默的、无名的——这也是真的。',
        en: 'I have to say a fair word: this "Golden Age" was not fake.\n\nIt truly was brilliant. Aryabhata\'s numbers really are remarkable, Kalidasa\'s poems really are beautiful, that Iron Pillar of Delhi, over seven meters tall, barely rusted in sixteen hundred years, really is a marvel. These I do not deny, nor do I envy.\n\nBut I want you to see one thing clearly: what all this brilliance stands upon.\n\nThe city that supported Aryabhata ate the grain I grew. The roll of palm leaf copied again and again was written by someone who had leisure, books, and people to keep him, and that someone could have leisure because people like me sweated in the fields for the whole empire.\n\nEven that rust-free pillar: its inscription remembered the name of the king who ordered it made, but remembered not a single name of the artisans who actually made the iron and hammered it up, blow by blow.\n\nYou see, I and that artisan are one kind of people: our hands made everything of the Golden Age; not one of our names was kept. The brilliance is real, yet the people beneath it, carrying it on their backs, are silent and nameless, and that is real too.',
      },
      deliverGoal: 'N7 story — 说句公道话: 黄金时代不是假的真辉煌 (Aryabhata 数字真了不起/Kalidasa 诗真美/德里铁柱七米多高 1600 年几乎不锈真神/不否认不嫉妒) + 但看清辉煌站在什么上面 + 供养 Aryabhata 的城吃我种的粮 + 那卷被抄的棕榈叶是别人有闲有书有人养才写得出/别人能有闲因有我这样的人田里替整个帝国流汗 + 千年不锈铁柱铭文记下令造它的国王名字没记炼铁一锤锤打起来的工匠名字 + 我和那工匠是一类人 (手造出黄金时代一切名字一个没留) + 辉煌是真的辉煌底下扛它的人沉默无名也是真的',
      engagementHook: '那根千年不锈的铁柱，铭文记住了下令造它的国王，却没记住任何一个真正炼铁、一锤一锤打起来的工匠。我和那个工匠是一类人：手造出了一切，名字一个没留。辉煌是真的——可谁在扛着它？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-cultivator-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我也活着，看着这个「黄金时代」走到了头。\n\n约公元 480 年代起，北方游牧的 Huna（嚈哒/白匈奴）一波波打了进来。Skandagupta 那样的皇帝苦战过，可连年的仗，把帝国掏空了。到约公元 550 年，笈多帝国散了，北印度重新碎成许多小邦。\n\n你猜，帝国垮了，对我意味着什么？\n\n几乎什么都没变。\n\n皇帝换了、旗子换了、那个遥远的、自称受神庇佑的王换了——可我还是天不亮下田，还是看季风的脸色，还是把粮交给身边那个 samanta。无非是，仗一打，匪一多，我交的更重了，日子更苦了。\n\n那些史书会大书特书的事——帝国的兴、帝国的亡——在我这儿，激不起多大的浪。因为我从来就没真正「属于」过那个帝国。它强盛的时候，金子没分我一块；它垮掉的时候，也轮不到我去心疼。\n\n王朝是上面那些人的事。我的命，从头到尾，只系在一件事上：今年的雨，会不会来。',
        en: 'I too lived to watch this "Golden Age" reach its end.\n\nFrom around the 480s, the northern nomadic Huna (the Hephthalites, the White Huns) struck in wave after wave. An emperor like Skandagupta fought them hard, but the years of war hollowed out the empire. By around 550 CE, the Gupta empire scattered, and north India broke into many small states again.\n\nGuess what the empire\'s collapse meant for me?\n\nAlmost nothing changed.\n\nThe emperor changed, the flag changed, that distant "mandate" changed, but I still went to the field before dawn, still watched the face of the monsoon, still handed grain to the samanta nearby. Only that, with war and more bandits, what I paid grew heavier, and my days grew harder.\n\nThe things the histories write up at length, the empire\'s rise, the empire\'s fall, raise no great wave with me. Because I never truly "belonged" to that empire. When it was mighty, it shared me no piece of gold; when it fell, it was not my place to grieve.\n\nThe dynasty was the business of the people above. My life, from start to finish, hung on one thing only: whether this year\'s rain would come.',
      },
      deliverGoal: 'N8 story — 我也活着看黄金时代走到头 + 约 480 年代起 Huna 嚈哒/白匈奴一波波打进 (Skandagupta 苦战过/连年仗掏空帝国) + 约 550 笈多散北印度再碎 + 帝国垮对我意味什么? 几乎什么都没变 + 皇帝换旗换遥远天命换可我还天不亮下田看季风脸色把粮交身边 samanta (无非仗一打匪一多交得更重日子更苦) + 史书大书特书帝国兴亡在我这激不起多大浪 (我从没真正属于过那帝国/强盛没分我金子垮掉也轮不到我心疼) + 王朝是上面人的事我的命从头到尾只系一件: 今年的雨会不会来。注意中性勿用中国天命术语-改写',
      engagementHook: '帝国垮了，对我意味着什么？几乎什么都没变——我还是天不亮下田，还是看季风的脸色。它强盛时没分我一块金子，它垮掉时也轮不到我去心疼。一个普通人，到底「属于」过那个伟大的帝国吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-cultivator-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张更大的图——同一个世纪，地球的另一端。\n\n就在我看天等雨的这些年（约公元 500 年），地球东边的中国，正处在一段叫魏晋南北朝（约 220-589，就是汉朝散了之后、隋朝再统一之前的那段大分裂）的大分裂里。一个庞大的王朝散了，南北对峙，政权像走马灯一样换。那里也有无数像我一样种地、看天、交粮的人，他们的名字，史书一样没替他们留下。\n\n有意思的是：那个分裂的中国，照样开了花。出了书法、出了诗、出了石窟里的佛像；还出了一个叫祖冲之（Zu Chongzhi，429-500）的人，几乎跟 Aryabhata 完全同代，把圆周率算得比谁都准。\n\n你看出来一件事没有：一边在统一里开花，一边在分裂里也照样开花。可不管是统一还是分裂，不管金子是落在华氏城还是落在长江边——种地的、流汗的、没名字的那群人，永远是垫在最底下、扛着这一切的那群人。\n\n地球两端，两个「时代」，同一种沉默的大多数。',
        en: 'Let me step back and show you a larger picture, the same century, the other end of the Earth.\n\nJust in these years when I watch the sky for rain (around 500 CE), China on the eastern edge of the Earth was in a great age of division called the Wei-Jin-Northern-Southern dynasties (c. 220-589, a long age of division after the Han fell and before the Sui reunited China). A vast dynasty had fallen apart. North and south stood against each other. Power changed hands again and again. There too were countless people like me, farming, watching the sky, paying grain, and the histories likewise kept none of their names.\n\nThe interesting thing: that divided China flowered all the same. It produced calligraphy, poetry, the Buddha statues in cave grottoes; it produced a man named Zu Chongzhi (429-500), almost exactly Aryabhata\'s contemporary, who calculated pi more precisely than anyone.\n\nDo you notice one thing: one side flowered in unity, the other flowered in division all the same. Yet whether unity or division, whether the gold fell in Pataliputra or by the Yangtze, the farmers, the sweating, the nameless ones were always the group laid at the very bottom, carrying it all.\n\nTwo ends of the Earth, two "ages," the same silent majority.',
      },
      deliverGoal: 'N9 zoom-out + §8 中国桥 — 同一世纪地球另一端 + 约 500 我看天等雨时东边中国处魏晋南北朝 (约 220-589) 大分裂 (庞大王朝散南北对峙政权走马灯换/那里也有无数像我种地看天交粮的人名字史书一样没留) + 括号标 (同时代中国可用中国说法) + 有意思: 分裂的中国照样开花 (书法诗石窟佛像/出祖冲之 Zu Chongzhi 429-500 几乎跟 Aryabhata 完全同代圆周率算得比谁都准) + 看出: 一边统一开花一边分裂也照样开花 + 但不管统一分裂不管金子落华氏城还是长江边种地流汗没名字的永远垫最底扛这一切 + 地球两端两个时代同一种沉默的大多数。Rule 0 中性',
      engagementHook: '同一个世纪，印度在统一里开花，中国在分裂里也照样开花。可不管金子落在恒河边还是长江边，种地、流汗、没名字的那群人，永远垫在最底下。地球两端，两个「黄金时代」，同一种沉默的大多数——你看见他们了吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gup-cultivator-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，有一个真问题，等你来答：我们到底该不该叫笈多那个时代「黄金时代」？两种说法都站得住，你来称。\n\n一种说法：该叫，而且名副其实。一个时代能算出地球自转、能算出算不尽的圆、能造出千年不锈的铁柱、能写出最美的梵语诗——这些成就是实打实的，是全人类的财富。不能因为有人没分到金子，就否认这个时代真的发过光。把它叫「黄金时代」，是对人类智慧的诚实致敬。\n\n另一种说法：「黄金时代」这四个字，遮蔽的比它照亮的多。它把一个十个人里八九个没名字、靠天吃饭、被钉在最底层的社会，说成了金光灿灿的盛世。它让后人只记住了塔尖那几个有名字的人，忘了垫在塔底、扛着这一切的我们。给一个荣光极不均匀的时代镀上「黄金」二字，对沉默的大多数，是不是一种二次的抹去？\n\n这两边不是「真伟大」对「真不公」二选一——它们同时是真的。伟大是真的，不均也是真的。\n\n这是一所学校里 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, there is a real question waiting for you: should we, after all, call the Gupta age a "Golden Age"? Both views stand. You do the weighing.\n\nOne view: yes, and it deserves the name. An age that could calculate the Earth\'s rotation, the circle with no end, that could make a pillar rust-free for a thousand years and write the most beautiful Sanskrit poetry, these achievements are solid and real, the wealth of all humankind. You cannot, because some got no share of the gold, deny that the age truly shone. To call it a "Golden Age" is an honest tribute to human genius.\n\nThe other view: those words "Golden Age" hide more than they light. They call a society where eight or nine of ten have no name, live at the mercy of the weather, and are pinned to the bottom, a glittering high age. They make later people remember only the few named ones at the spire, and forget us, laid at the base, carrying it all. To gild a steeply unequal age with the word "golden," is that not a second erasure of the silent majority?\n\nThese two are not "truly great" versus "truly unjust," choose one. They are true at the same time. The greatness is real, and the inequality is real.\n\nThis is a hard problem an AP teacher at a school will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 到底该不该叫笈多那时代「黄金时代」+ 一种说法 (该叫名副其实/能算地球自转算不尽的圆造千年不锈铁柱写最美梵语诗成就实打实是全人类财富/不能因有人没分到金子就否认真发过光/叫黄金时代是对人类智慧诚实致敬) / 另一种说法 (黄金时代遮蔽比照亮多/把十个里八九个没名字靠天吃饭钉最底层的社会说成金光灿灿盛世/让后人只记塔尖几个有名字的忘垫塔底扛一切的我们/给荣光极不均的时代镀黄金对沉默大多数是二次抹去) / 同时是真的伟大真不均真 / neutral school name (AP 老师) / 想 30 秒两边都站得住',
      engagementHook: '一个十个人里八九个没名字、靠天吃饭、被钉在最底层的社会，配不配被叫「黄金时代」？一种说法：成就是真的，名副其实。另一种说法：给极不均的时代镀金，是对我们的二次抹去。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'gup-cultivator-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个没名字的种田人，一双裂口的手，一辈子看天等雨、交粮求神，从没摸过那块金子——你会怎么评价我所在的这个「黄金时代」？\n\n它真的算出了地球自转，真的发明了传遍全世界的数字。它也真的，让十个人里八九个像我这样的人，没名字、没字、没在史书里留下半个声音。这两件事，是同一个时代。你怎么称？\n\n这一遍，是这一课的良心。但请你记住：它也只是其中一边——而且是最容易被忘记、最该被听见的那一边。\n\n你这一路，还听过另外两个人。那个观星的天才 Aryabhata——金子最先照亮的就是他，他会把这个时代讲得金光万丈。那个在廊下抄棕榈叶的少年——他没名字，却识字、能碰到「字」，他夹在我和天才中间，替天才传光。\n\n你已经把三个人都听完了：发光的、传光的、和被光照不到的。现在，最难的一步交给你——\n\n把这三种声音放在一起，你会怎么重新理解「黄金时代」这四个字？还有，今天你身边，有没有哪一种辉煌，也是垫在一群「没名字的人」身上的？这一次，你看得见他们吗？',
        en: 'Having walked my whole life, a nameless cultivator, a pair of cracked hands, a lifetime watching the sky for rain, paying grain and praying to gods, never once touching that gold, how would you judge this "Golden Age" I lived in?\n\nIt truly calculated the Earth\'s rotation, truly invented numbers that spread across the whole world. It also truly left eight or nine of every ten people like me with no name, no letters, not half a voice in the histories. These two things are the same age. How do you weigh it?\n\nThis pass is the conscience of the lesson. But please remember: it too is only one side, and the most easily forgotten, most needing-to-be-heard side.\n\nAlong the way you have heard two others. Aryabhata, the star-watching genius, the first one the gold lit up, who tells this age in ten thousand rays of gold. The boy copying palm leaf in the porch, who has no name yet can read and touch "letters," wedged between me and the genius, passing the genius\'s light along.\n\nYou have now heard all three: the one who shines, the one who passes the light, and the one the light never reaches. Now the hardest step is yours.\n\nPut these three voices together. How would you understand anew those words, "Golden Age"? And in your own life today, is there some brilliance that also rests on a crowd of "people with no name"? This time, can you see them?',
      },
      deliverGoal: 'N11 close/meta (DEFAULT lens 收束) — 评价我所在的黄金时代 (没名字种田人裂口手一辈子看天等雨交粮求神从没摸过金子) + 它真算出地球自转真发明传遍世界数字也真让十个里八九个像我没名字没字没在史书留半个声音/同一个时代怎么称 + 这一遍是这一课良心但也只一边 (最易被忘最该听见) + 这一路还听过另两人: Aryabhata 观星天才 (金子最先照亮他讲得金光万丈) + 廊下抄棕榈叶少年 (没名字却识字能碰字夹我和天才中间替天才传光) + 已听完三人 (发光的/传光的/被光照不到的) + 最难一步: 把三种声音放一起怎么重新理解「黄金时代」+ transfer「今天身边有没有哪种辉煌也垫在一群没名字的人身上/这一次你看得见他们吗」',
      engagementHook: '你已经听完了三个人：发光的天才、传光的少年、和被光照不到的我。把这三种声音放在一起，「黄金时代」这四个字，对你还是原来的意思吗？今天你身边，有没有哪一种辉煌，也垫在一群没名字的人身上——这一次，你看得见他们吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator / receiving-end-default) ───
export var lenses = {
  'aryabhata-actor':                  aryabhataLens,
  'copyist-mediator':                 copyistLens,
  'village-cultivator-receiving-end': cultivatorLens,
};

// receiving-end 优先 (「金子落在谁手里」= AP DBQ agency & silence 必考角度;
//   无名种田人正是这一课的良心, frontmatter defaultLens 指定)
export var defaultLens = 'village-cultivator-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'gupta-india-320',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'aryabhata-actor': 30, 'copyist-mediator': 28, 'village-cultivator-receiving-end': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-06',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail: 季风的雨 monsoon (三视角各触一次不点破; cultivator N6 明收三视角)',
    'defaultLens: village-cultivator-receiving-end —「金子落在谁手里」(agency & silence, AP DBQ 必考) + 无名种田人是本课良心',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total)',
    'anti-fab: 抄经少年 + 种田人 = 合成桥接人物, 显式标注 (无名/身份写实); Aryabhata 坐船比喻标为转述非逐字原话; 农人内心声音/晴雨/生于何处用括号短句标 (史料无答案)',
    '§8 中国桥注入 copyist N9 + cultivator N9 (祖冲之 429-500 / 魏晋南北朝 220-589 / 算筹 vs 印度书写符号), Rule 0 中性不褒贬',
    'cultural ban: 印度段全程用印度/梵语真实术语 (Pataliputra/samanta/varna/jati/Puranas/Nalanda/Huna/palm-leaf/monsoon); 中国术语仅限两处 §8 桥',
    '4-agent review applied (Dr. Park / 赵老师 / Maria): P0 删 copyist-n9 + cultivator-n9 作者文化禁令批注 (CN+EN); P1 n3 零史实收口 (空位→零, 两百年后才成可运算的数) + n1/desc Kusumapura hedge + copyist/cultivator-n9「形式命运非聪明高下」缓冲 + cultivator-n8 改「天命」为印度中性措辞 + 魏晋南北朝白话 gloss + Aryabhata 跨 lens 角色锚 + EN ESL 降阶 (stylus/heretical/smelted)',
  ],
};
