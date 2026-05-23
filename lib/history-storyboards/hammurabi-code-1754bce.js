// ─── Hammurabi's Code c.1754 BCE Lens-based Storyboard (Story-First v2) ───
//
// Topic: 美索不达米亚与汉谟拉比法典 · Mesopotamia & Hammurabi's Code c.1754 BCE
// CA HSS Grade 6.2 · AP World 史前根 (成文法起源)
//
// 3 lens (per TOPIC_ROADMAP_G6_G12.md C1 + AUTHORING_PIPELINE 第 7/8/12 条):
//   - hammurabi                              (perpetrator-actor) — Hammurabi r.1792-1750 BCE 巴比伦王 / 刻 282 条法典于石柱 / 正义按 awilum-mushkenum-wardum 三等差等
//   - babylonian-scribe                      (lonely-mediator, COMPOSITE) — 一个刻写法典的书吏 c.1770 BCE / 楔形文字识字阶层 / 夹在王权与百姓间
//   - babylonian-commoner-woman-receiving-end (receiving-end, COMPOSITE, DEFAULT) — 一个受三等差等正义不同对待的平民女性 c.1750 BCE
//
// ⚠️ TWO COMPOSITES (基于楔形文字职业史 + 法典阶级结构构建的虚构典型人物，非单一史载个人):
//   - babylonian-scribe (书吏)
//   - babylonian-commoner-woman-receiving-end (平民女性)
//   两者均为 composite，N1 lens card description 显式声明，正文用括号短句标注虚构补充。
//
// cross-lens micro-detail (N6 anchor):
//   「同样的伤害，不同的人,讨回的公道天差地别」— 同一部法典里,贵族打掉同等贵族的牙,要以牙还牙(敲掉他的牙抵);
//   贵族打掉一个 mushkenum (平民) 的牙,只赔三分之一 mina 银子了事。同一颗牙,看谁打谁。
//   - Hammurabi lens N6: 三等差等是设计,不是疏漏 — 「同罪不同罚」就是这部法典的核心
//   - scribe lens N6: 书吏的笔 — 把「人不平等」一字一字刻进湿泥,刻进永恒
//   - commoner woman lens N6: 受害者这边 — 贵族打我的牙赔点钱了事,贵族之间却得拿牙抵牙
//
// cross-Topic 锚:
//   - 成文法「以眼还眼」→ magna-carta-1215 (成文法约束 vs 不约束统治者; Magna Carta 的 law of the land 可前挂此源头)
//   - 书吏识字中介 → scientific-revolution Mersenne / mali-empire 廷巴克图抄书人 (识字者作为知识中介跨文明母题)
//   - 三等差等正义 → A4 美国奴隶制 (法律下人不平等的古今对照)
//
// defaultLens = 'babylonian-commoner-woman-receiving-end' (受影响者优先 pattern: 平民女性 + 法律差等对待一方 + N6 跨 lens「同一颗牙不同命」对位)
//
// SPEC (simple-binary, new shorter format):
//   - 9 nodes per lens
//   - 220-360 CN chars per node; 仅 2 anchor nodes (N6 cross-lens + N8 synthesis) 可达 480, 其余 ≤380
//   - expectsRealAnswer: ONLY N8 (synthesis) + N9 (close) = true; all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md cultural ban (两河文明真实术语: 楔形文字/法典石柱/巴比伦/awilum/mushkenum/wardum;
//   绝不用 玉玺/翰林/宰相/朕/圣旨/太子 等中国概念类比) + em-dash 预算 + 名字分级 + synthesis voice + anti-fab 括号短句
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Hammurabi (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var hammurabiLens = {
  id: 'hammurabi',
  name: 'Hammurabi',
  nameCn: '汉谟拉比',
  role: 'perpetrator-actor',
  perspectiveTag: 'lawgiver-king',
  icon: '👑',
  description: {
    cn: '巴比伦的国王，公元前 1792 年到前 1750 年在位。他用了几十年，把两河流域许多小城邦打成一个统一的王国。公元前 1754 年前后，他下令把 282 条法律刻在一根两米多高的黑色石柱上，立在城里给所有人看。石柱顶上刻着他站在太阳神面前接过权杖的样子，意思是：这些法律，是神授权给我立的。同一部法典里，贵族打掉同等贵族的牙得以牙还牙，可贵族打掉平民的牙只赔点银子就完了。这一遍让你从立法者内部，看一部最早的成文法，怎么把「人不平等」一条一条写成了规矩。',
    en: 'The king of Babylon, who reigned from 1792 to 1750 BCE. Over several decades he forged the many small city-states of Mesopotamia into one unified kingdom. Around 1754 BCE he ordered 282 laws carved onto a black stone pillar more than two meters tall, set up in the city for everyone to see. At the top of the pillar he is shown standing before the sun god, receiving a rod of authority, meaning: these laws were given to me by a god. In the same code, knocking out a noble\'s tooth and knocking out a commoner\'s tooth cost different amounts of silver, several times apart. This pass lets you watch, from inside the lawgiver, how one of the earliest written law codes wrote "people are not equal" into rule after rule.',
  },
  storyboard: [
    {
      id: 'ham-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '公元前 1754 年前后，巴比伦。我让人在城里立起一根两米多高的黑石柱。\n\n石柱上密密麻麻刻满了字——楔形文字，用尖头在湿泥板上压出来的那种符号。一共 282 条法律。石柱顶上，刻着我站在太阳神 Shamash 面前，从他手里接过一根权杖。\n\n我是 Hammurabi（汉谟拉比），巴比伦的王。\n\n我立这根石柱，是要让全城的人都看见：从今天起，对错有了白纸黑字的标准，不再是哪个官吏当场说了算。\n\n听起来像好事，对吧？一部写下来的法律，谁都能看，谁都得守。\n\n可这一遍，你坐进我这个王的位置，会看见一件事：把法律写下来，和让法律对每个人都公平，是两码事。',
        en: 'Around 1754 BCE, Babylon. I had a black stone pillar more than two meters tall set up in the city.\n\nThe pillar was covered, top to bottom, in writing, cuneiform, the wedge-shaped marks you press into wet clay with a sharp reed. In all, 282 laws. At the top of the pillar, I am carved standing before the sun god Shamash, receiving a rod of authority from his hand.\n\nI am Hammurabi, king of Babylon.\n\nI raised this pillar so the whole city would see: from this day on, right and wrong have a written standard, no longer whatever some official decides on the spot.\n\nSounds like a good thing, doesn\'t it? A written law that anyone can read, that everyone must obey.\n\nBut this pass puts you in my seat, the king\'s seat, and you will see one thing: writing law down, and making law fair to everyone, are two different matters.',
      },
      deliverGoal: 'N1 hook — c.1754 BCE 巴比伦立黑石柱 (两米多/楔形文字/282 条法律/顶上 Shamash 授权杖) + Hammurabi 自我介绍 + 写下标准不再官吏说了算 + 这一遍核心张力 (写下来 ≠ 对每个人公平)',
        engagementHook: '我把法律刻进石头，让全城都看得见。「把规矩写下来」这件事本身，是不是就一定比「谁有权谁说了算」更公平？',
      expectsRealAnswer: false,
    },
    {
      id: 'ham-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是怎么走到立这根石柱这一步的。\n\n两河流域（底格里斯河和幼发拉底河之间的这片平原）不是一个国家，是一堆互相打来打去的城邦。每个城有自己的王、自己的神、自己的规矩。巴比伦本来只是中间一个不大的城。\n\n我前面在位三十多年，大半时间在打仗。我一个一个收拾掉周围的对手，把上游下游的城都并进来。到我晚年，整个两河中下游，第一次归一个王管——就是我。\n\n可打下来容易，管起来难。这么多原来各管各的城，规矩五花八门：同一件事，这个城判得轻，那个城判得重；同一笔买卖，换个地方算法就不一样。\n\n一个刚拼起来的大王国，最怕的就是各地各来一套。我要的是：一套规矩，管所有人。\n\n这就是我刻那 282 条的真正动机——不只是为了「公正」，更是为了让这个新王国捏得拢、散不掉。',
        en: 'First, how I came to the point of raising this pillar.\n\nMesopotamia, the plain between the Tigris and Euphrates rivers, was not one country. It was a heap of city-states forever fighting one another. Each city had its own king, its own god, its own rules. Babylon was, at first, only a middling city among them.\n\nI reigned for over thirty years, and spent most of them at war. One by one I dealt with the rivals around me and folded the cities upstream and down into my kingdom. By my late years, the whole lower and middle Mesopotamia answered to one king for the first time, me.\n\nBut conquering is easy; governing is hard. So many cities that had each run themselves now had a tangle of different rules: the same act judged lightly here, harshly there; the same trade reckoned one way in one place, another way elsewhere.\n\nWhat a freshly stitched-together kingdom fears most is each region keeping its own code. What I wanted was one set of rules for everyone.\n\nThat was the real motive behind those 282 laws. Not only "justice," but to hold this new kingdom together so it would not fall apart.',
      },
      deliverGoal: 'N2 setup — 两河流域是互相打的城邦 + Hammurabi 在位三十多年打仗统一中下游 + 各城规矩五花八门难管 + 立法真动机 (一套规矩管所有人/捏拢新王国不只为公正)',
      engagementHook: '我立法不只是为了「公正」，更是为了把刚打下来的大王国捏在一起。一套统一的规矩，到底是为了百姓，还是为了王自己好管？',
      expectsRealAnswer: false,
    },
    {
      id: 'ham-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '那我凭什么说我的法律是对的？\n\n这里有个关键。我没有说「这是我 Hammurabi 想出来的规矩，你们听我的」。我说的是：这些法律，是神交给我的。\n\n石柱顶上那幅画就是干这个用的：我站着，太阳神 Shamash 坐着，把象征权力和公正的权杖递到我手里。Shamash 是两河人心里管「公正」的神。\n\n这幅画的意思全城人一看就懂：这 282 条不是一个凡人的命令，是神的意志，经过我的手，写给你们。\n\n你违法，不只是违抗国王，是违抗神。\n\n（神是不是真把权杖交给他，没人能证；能确证的是这幅浮雕真刻在石柱顶上，今天还能在博物馆看到。）\n\n你看，把法律和神绑在一起，是最早、也最聪明的一招：让一套对我有利的规矩，看起来像天经地义、不容置疑的真理。',
        en: 'So on what grounds do I say my laws are right?\n\nHere is the key. I did not say "these are rules I, Hammurabi, thought up, so obey me." I said: these laws were handed to me by a god.\n\nThat carving at the top of the pillar does exactly this work: I stand, the sun god Shamash sits, and he passes into my hand a rod that stands for power and justice. Shamash was the god the Mesopotamians held to be the keeper of "justice."\n\nThe whole city understood the picture at a glance: these 282 laws are not the command of a mortal man, but the will of a god, written for you through my hand.\n\nBreak the law, and you defy not only the king but the god.\n\n(Whether a god truly handed him the rod, no one can prove; what can be confirmed is that this carving really sits atop the pillar, still visible in a museum today.)\n\nYou see, binding law to a god was the earliest and cleverest move: making a set of rules that favored me look like self-evident, unquestionable truth.',
      },
      deliverGoal: 'N3 setup — Hammurabi 不说「我想的规矩听我的」而说「神交给我的」+ 石柱顶浮雕 Shamash 授权杖 (公正之神) + 违法=违神 + anti-fab 括号短句 (神授无法证/浮雕确证) + 「法律绑神」让对王有利的规矩看似不容置疑',
      engagementHook: '我把法律说成「神的旨意」，违法就是违神。当掌权的人说「这是神的意思，不是我的意思」，你会不会更不敢质疑？',
      expectsRealAnswer: false,
    },
    {
      id: 'ham-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你要给整个王国定一套规矩。可你面对的不是一群一样的人。你的子民，被分成三等。\n\n最上一等叫 awilum（阿维鲁），是有地位的自由人，贵族。中间一等叫 mushkenum（穆什凯努），是地位低一截的平民。最下一等叫 wardum（瓦尔杜），是奴隶，在法律眼里更接近财产。\n\n现在你提笔写第一条伤害赔偿：有人打掉别人一颗牙，该怎么处置？\n\n你可以写「打掉一颗牙，怎么处置，不分对方是谁」。这样最简单，也最平等。\n\n但你没有。你写的是：一个 awilum 打掉另一个 awilum 的牙，要以牙还牙——敲掉他的牙抵；可一个 awilum 打掉一个 mushkenum 的牙，只赔三分之一 mina 银子就完事。同一颗牙，看是谁打谁，分量天差地别。\n\n你为什么这么写？因为在你眼里，这不是不公平，这就是世界本来的样子。贵族之间得拿牙抵牙，可对平民，花点钱就能打发。\n\n你写下的，不是「人人平等」。你写下的，是「不平等」本身，而且把它变成了法律。',
        en: 'Now you are me.\n\nYou must set one body of rules for the whole kingdom. But the people before you are not all alike. Your subjects are split into three ranks.\n\nThe top rank is the awilum, free people of standing, the nobles. The middle rank is the mushkenum, commoners attached to the palace or temple, a notch lower. The bottom rank is the wardum, the enslaved, who in the eyes of the law are closer to property than to whole people.\n\nNow you take up the reed to write the first law on injury: someone knocks out another person\'s tooth; how shall it be handled?\n\nYou could write "knock out a tooth, handle it this way, no matter who the other person is." That is the simplest, and the most equal.\n\nBut you did not. You wrote: if an awilum knocks out another awilum\'s tooth, it is a tooth for a tooth, his own tooth is knocked out to settle it; but if an awilum knocks out a mushkenum\'s tooth, he need only pay one-third of a mina of silver and be done. The same tooth weighs utterly differently depending on who strikes whom.\n\nWhy write it that way? Because in your eyes this is not unfairness, it is simply the way the world is. Among nobles it is tooth for tooth, but a commoner can be settled with a little money.\n\nWhat you wrote down is not "all people are equal." What you wrote down is inequality itself, and you turned it into law.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 三等人 (awilum 贵族/mushkenum 平民/wardum 奴隶近财产) + 提笔写打牙处置 + 可写平等但写成差等 (awilum 打 awilum 牙以牙还牙 / awilum 打 mushkenum 牙赔三分之一 mina 了事) + 在王眼里差等是世界本来样子 + 你写下的是不平等本身变成法律',
      engagementHook: '贵族打贵族的牙要以牙还牙,贵族打平民的牙赔点钱就完事。我觉得这天经地义。如果你是立法的王,你会把「不平等」也写成法律,还是写一条人人一样的规矩?',
      expectsRealAnswer: false,
    },
    {
      id: 'ham-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我那 282 条里，最出名的一句，你大概听过：「以眼还眼，以牙还牙。」\n\n听起来很狠，也很「公平」——你弄瞎我一只眼，我也弄瞎你一只眼，扯平。比起「弄瞎眼就处死」，这反而是一种节制：报复不能超过伤害本身。\n\n但这里有个陷阱，得看清楚。\n\n「以眼还眼」这条，只在同一等人之间成立。一个 awilum 弄瞎另一个 awilum 的眼，对，以眼还眼。\n\n可一个 awilum 弄瞎一个 mushkenum（平民）的眼呢？不还眼了——赔钱，赔一 mina 银子就完事。一个主人弄瞎自己 wardum（奴隶）的眼呢？连赔都不用，因为奴隶是他的财产。\n\n所以「以眼还眼」从来不是「人人一命抵一命」。它是「同等人之间一命抵一命」。你比我低一等，我伤了你，我用钱买单；你伤了我，你拿命或拿身体还。\n\n这就是我这部法典的脊梁：同样的罪，不同的人，不同的罚。',
        en: 'Of my 282 laws, the most famous line is one you have probably heard: "an eye for an eye, a tooth for a tooth."\n\nIt sounds harsh, and also "fair," you blind my eye, I blind yours, we are even. Compared to "blind an eye, be put to death," it is actually a restraint: revenge may not exceed the harm itself.\n\nBut there is a trap here you must see clearly.\n\nThe "eye for an eye" rule held only between people of the same rank. An awilum blinds another awilum\'s eye, yes, an eye for an eye.\n\nBut an awilum who blinds a mushkenum\'s eye? No eye is taken back, he pays silver, one mina, and that is the end of it. A master who blinds his own wardum\'s eye? He pays nothing at all, because the slave is his property.\n\nSo "an eye for an eye" was never "every life worth a life." It was "a life for a life among equals." If you are a rank below me and I harm you, I settle it with money; if you harm me, you pay with your body or your life.\n\nThis is the spine of my code: the same crime, different people, different punishment.',
      },
      deliverGoal: 'N5 story — 「以眼还眼以牙还牙」(lex talionis) + 比死刑节制 (报复不超伤害) + 陷阱: 只在同等人之间成立 (awilum 伤 awilum 还眼 / awilum 伤 mushkenum 只赔钱 / 主人伤 wardum 不赔) + 「同罪不同罚」是法典脊梁',
      engagementHook: '「以眼还眼」听起来很公平,可它只在同一等人之间成立——你弄瞎比你低一等的人,赔钱就行。这种「公平」,到底是公平,还是只对上等人公平?',
      expectsRealAnswer: false,
    },
    {
      id: 'ham-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我把这件事掰到最清楚的一刻给你看。\n\n想象同一天，我的城里，两个人各被打掉一颗牙。\n\n第一个被打的是 awilum，一个有地位的自由人，动手的也是个 awilum。按我的法典，要以牙还牙——把动手那人的牙也敲掉，拿牙抵牙。\n\n第二个被打的是 mushkenum，一个普通平民，动手的是个 awilum。一样是一颗牙，一样的疼，一样的血。可动手的人，只要赔三分之一 mina 银子就完事。\n\n同一颗牙。同样的伤害。一边拿牙抵，一边花点钱打发。\n\n这不是哪个糊涂书吏抄错了。这是我亲自定的。在我的法典里，一颗牙怎么抵，先看打的是哪一等人。\n\n我要你记住的，正是这个：成文法不等于平等的法。我把规矩写下来、刻进永远不烂的石头里，我让它公开、可查、对所有人一致——可这套「对所有人一致」的规矩，内容本身，就是把人分成三六九等。\n\n白纸黑字，反而把不平等钉死了：从此它不再是某个官吏一时的偏心，而是神授的、永恒的、写进石头的「正义」。',
        en: 'Let me show you the moment that makes this clearest.\n\nImagine that on the same day, in my city, two men each have a tooth knocked out.\n\nThe first one struck is an awilum, a free man of standing, and the one who struck him is an awilum too. By my code, it is a tooth for a tooth, the striker\'s own tooth is knocked out to settle it.\n\nThe second one struck is a mushkenum, an ordinary commoner, and the one who struck him is an awilum. The same one tooth, the same pain, the same blood. Yet the striker need only pay one-third of a mina of silver and be done.\n\nThe same tooth. The same injury. One pays with his own tooth, the other waves it off with a little money.\n\nThis was not some careless scribe copying it wrong. I set it myself. In my code, how a tooth is repaid depends first on which rank the struck man belongs to.\n\nWhat I want you to remember is exactly this: written law is not the same as equal law. I wrote the rules down, carved them into stone that would never rot, made them public, checkable, the same for all to read, and yet the content of these "same for all" rules was itself the sorting of people into ranks.\n\nIn black and white, inequality was nailed down all the harder: no longer one official\'s passing favoritism, but a god-given, eternal "justice" written into stone.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 同一天两人各被打掉一颗牙: awilum 被 awilum 打=以牙还牙(敲掉对方牙抵) vs mushkenum 被 awilum 打=赔三分之一 mina 了事 (同牙/同伤/一边拿牙抵一边花钱打发) + 不是抄错是 Hammurabi 亲定 + 核心命题: 成文法 ≠ 平等的法 (公开可查一致但内容把人分三等) + 白纸黑字反把不平等钉死成神授永恒的正义',
      engagementHook: '同一颗牙,贵族之间得拿牙抵牙,贵族打平民却赔点钱就完事——这不是抄错,是我亲定的。一旦把「不平等」刻进永不烂的石头、说成神授,它是不是比口头偏心更难翻案?',
      expectsRealAnswer: false,
    },
    {
      id: 'ham-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头从我的石柱拉远一点，你会看见一条很长的线。\n\n我刻法典，是人类最早把「法律写下来」的大事之一。在我之前，规矩多半在官吏脑子里；在我之后，「法律是写下来的、公开的、谁都能查的东西」这个想法，一代代传了下去。\n\n两千多年后，1215 年的英格兰，一群贵族逼国王签下一份写明规矩的文件，叫 Magna Carta（大宪章），里面有一句「依国法」：任何自由人，不经国法不得被任意拘押。把规矩写下来好约束权力，这条思路的老祖宗，可以前挂到我这根石柱。（你跑过 magna-carta 那个 Topic，会认得这条线。）\n\n但这里有个分岔。\n\n我的法典，是王立给百姓守的，它管的是子民，不太管王自己。Magna Carta 想做的，是反过来：用写下来的法，去约束国王本人。\n\n同样是「成文法」，一个是统治者拿来管别人的工具，一个是被统治者拿来管统治者的武器。同一个发明，两个相反的用法。',
        en: 'Pull the lens back from my pillar a little, and you will see a very long line.\n\nMy carving of the laws was one of the earliest great moments of humanity writing law down. Before me, rules lived mostly in officials\' heads and in custom; after me, the idea that "law is something written, public, that anyone can check" was passed down generation after generation.\n\nMore than two thousand years later, in England in 1215, a group of nobles forced their king to sign a document spelling out the rules, called Magna Carta. In it is a line, "by the law of the land," no free man may be seized arbitrarily except by the law of the land. The ancestor of the idea that writing rules down can bind power can be traced all the way back to my pillar. (Run the magna-carta topic and you will recognize this line.)\n\nBut here is a fork you should not miss.\n\nMy code was set by the king for his subjects to obey. It governs the subjects, not so much the king himself. What Magna Carta tried to do was the reverse: to use written law to bind the king in person.\n\nThe same "written law," one a tool the ruler uses to govern others, one a weapon the ruled use to govern the ruler. The same invention, two opposite uses.',
      },
      deliverGoal: 'N7 zoom-out + topic connection — Hammurabi 是人类最早写下法律之一 (之前规矩在官吏脑里/之后法律=写下公开可查) + 跨 Topic 锚 magna-carta-1215「依国法」law of the land 前挂此源头 + 分岔: Hammurabi 法管子民不管王 vs Magna Carta 用法约束国王本人 + 同一发明两个相反用法',
      engagementHook: '我的法律是王立给百姓守的,管不到王自己;两千年后的大宪章,想用写下来的法去管国王本人。同样是「成文法」,你觉得它更该是管百姓的工具,还是管掌权者的武器?',
      expectsRealAnswer: false,
    },
    {
      id: 'ham-n8',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是了不起的立法者。我把两河流域第一次拢成一个王国，又把规矩从官吏的脑子里搬出来，刻进公开的石头。从此对错有了可查的标准，强者不能随口编个理由欺负弱者。「以眼还眼」看似狠，其实是给报复设了上限。我立的，是人类最早的成文法之一，后面几千年的法律传统，都站在我这根石柱的肩膀上。\n\n另一种说法：我是把不平等写成永恒的人。我用神的名义，给一套对贵族有利的规矩，镀上了「不容置疑」的金。我亲手把人分成三等，让同一颗牙、同一条命，因为身份不同而换来不同的下场。在我这里，「法律」从诞生第一天起，就是权力的工具——它写下来的不是正义，是谁该听谁的。\n\n这两边不是「优点加缺点」。是同一根石柱的两面——同一双手，既带来了「写下来的法」，也带来了「写下来的不平等」。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a remarkable lawgiver. I gathered Mesopotamia into one kingdom for the first time, and I lifted the rules out of officials\' heads and carved them into public stone. From then on right and wrong had a checkable standard, and the strong could not just invent a reason to crush the weak. "An eye for an eye" looks harsh but in truth set a ceiling on revenge. What I made was one of the earliest written law codes, and the legal traditions of the thousands of years that followed stand on the shoulders of my pillar.\n\nThe other view: I was the one who wrote inequality into eternity. In the name of a god, I gilded a set of rules favoring the nobles with "the unquestionable." With my own hand I sorted people into three ranks, so that the same tooth and the same life met different fates depending on rank. With me, "law" was, from its very first day, a tool of power, what it wrote down was not justice but who must obey whom.\n\nThese are not "strengths and weaknesses." They are two faces of the same pillar, the same hands that brought "written law" also brought "written inequality."\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N8 synthesis — 一种说法 (了不起立法者/统一王国/规矩从脑里搬进石头/可查标准/以眼还眼设上限/最早成文法奠基) / 另一种说法 (把不平等写成永恒/神名义镀金/亲手分三等/同牙同命不同下场/法律从第一天就是权力工具) / 同一根石柱两面 / 想 30 秒',
      engagementHook: '了不起的立法者,和把不平等写成永恒的人——是同一个我,同一双手。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'ham-n9',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个开端？\n\n人类最早把法律写下来的大事之一，出自我的手——可我写下的第一批规矩里，就明明白白把人分成了三等，让同一颗牙换来不同的下场。「把规矩写下来」和「让规矩对每个人都公平」，从一开始就不是一回事。把这两件事放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有「写在纸上的规矩」对不同的人其实不一样的地方——同一条校规，有的人犯了没事、有的人犯了重罚；同一个群里说好的约定，落到不同人头上就变了样？\n\n那时候，你会觉得「反正都写下来了，就是公平的」，还是会多问一句：这条写下来的规矩，对每个人，真的是一个价吗？',
        en: 'Having walked my whole life, how would you judge a beginning like this?\n\nOne of the earliest great moments of humanity writing law down came from my hand, yet in the very first batch of rules I wrote, I plainly sorted people into three ranks and made the same tooth meet different fates. "Writing the rules down" and "making the rules fair to everyone" were never, from the start, the same thing. Put those two on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there somewhere "the rules written on paper" actually work differently for different people, the same school rule where one person breaks it and nothing happens while another is punished hard, the same promise agreed in some group that changes shape depending on whose head it lands on?\n\nWhen that happens, will you think "it is written down, so it must be fair," or will you ask one more question: this written rule, for everyone, is it really one price?',
      },
      deliverGoal: 'N9 close — 评价开端 (人类最早写下法律之一 vs 第一批规矩就把人分三等/同牙不同价 → 写下来 ≠ 对每个人公平,同一天平怎么称) + transfer「今天你身边写在纸上的规矩对不同人其实不一样的地方 (同校规有人没事有人重罚)」+ 你会觉得「写下来就公平」还是多问一句「真的一个价吗」',
      engagementHook: '人类最早写下法律之一,出自我手——可它第一批规矩就把人分成三等。你会怎么评价这样一个开端?今天你身边那条「写下来却对不同人不一样」的规矩,你会照单全收,还是多问一句它是不是真的一个价?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Babylonian Scribe (lonely-mediator, COMPOSITE)
// ═══════════════════════════════════════════════════════════════════════

export var babylonianScribeLens = {
  id: 'babylonian-scribe',
  name: 'A Babylonian Scribe',
  nameCn: '一个巴比伦书吏',
  role: 'lonely-mediator',
  perspectiveTag: 'cuneiform-scribe',
  icon: '🪶',
  description: {
    cn: '一个刻写法典的书吏，公元前 1770 年前后的巴比伦人。这是一个虚构的典型人物，根据楔形文字职业史拼出来的——那个时代真有这样一群识字的人，只是没留下名字。在一座几乎没人识字的城里，他是少数能读会写的人，从小在书吏学校里手抄了千百遍泥板才出师。国王的法律要变成石柱上的字，得经他的手一笔一笔刻进湿泥、刻上石头。这一遍让你从一个夹在王权和百姓之间的识字人这里，看「写字的人」在历史里到底是什么角色。',
    en: 'A scribe who carved the law code, a Babylonian of around 1770 BCE. This is a composite, an invented typical figure pieced together from the history of the cuneiform profession, there really was such a class of literate people in that age, they simply left no names. In a city where almost no one could read, he was one of the few who could read and write, trained from childhood in a scribal school where he copied clay tablets thousands of times before qualifying. For the king\'s law to become the writing on the pillar, it had to pass through his hands, pressed wedge by wedge into wet clay and onto stone. This pass lets you see, through a literate person caught between the king and the people, what "the one who writes" really is in history.',
  },
  storyboard: [
    {
      id: 'sc-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我的手指尖上有薄薄一层茧，是握尖头压泥板压出来的。\n\n这座城里几乎没人识字。一万个人里，能读会写的，可能就那么几个。我是其中一个。我是一名书吏，公元前 1770 年前后，在巴比伦讨生活。\n\n（先说清楚：我不是史书上某个有名有姓的人。那个时代真有一群刻字的书吏，只是大多没留下名字。这一遍，你跟着这样一个典型的书吏走。）\n\n国王那 282 条法律，你以为是国王亲手刻的？不是。国王说话，我们书吏记。他的话要变成石柱上谁都能看的字，得先经过我的手——一个尖头，一块湿泥，一笔一笔压进去。\n\n这一遍，你坐进我这个位置。你不是王，也不是挨罚的百姓。你是那个把别人的话，变成永远擦不掉的字的人。',
        en: 'My fingertips have a thin layer of callus, worn from gripping the reed that presses into clay.\n\nIn this city almost no one can read. Out of ten thousand people, perhaps only a handful can read and write. I am one of them. I am a scribe, making my living in Babylon around 1770 BCE.\n\n(Let me be clear first: I am not some named person from the history books. There really was a class of carving scribes in that age, only most left no names. In this pass, you follow one such typical scribe.)\n\nThe king\'s 282 laws, you think the king carved them with his own hand? No. The king speaks; we scribes record. For his words to become the writing on the pillar that anyone can read, they must first pass through my hands, one reed, one slab of wet clay, pressed in wedge by wedge.\n\nThis pass puts you in my seat. You are not the king, nor a punished commoner. You are the one who turns another person\'s words into writing that can never be wiped away.',
      },
      deliverGoal: 'N1 hook — 指尖薄茧 (握尖头压泥板) + 书吏自我介绍 (c.1770 BCE 巴比伦/万人里几个识字) + anti-fab 括号 (非史载个人/composite 典型书吏) + 法律经书吏的手一笔笔压进湿泥 + 这一遍视角 (不是王不是百姓,是把别人的话变成永远擦不掉的字的人)',
      engagementHook: '万个人里只有几个识字,我是其中一个。在一个几乎没人会读写的世界里,「会写字」这件事,会给你什么样的权力?',
      expectsRealAnswer: false,
    },
    {
      id: 'sc-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我这身本事是怎么练出来的，你才懂识字在那个年代有多稀罕。\n\n我从小被送进书吏学校，那地方苦得很。楔形文字不是几十个字母，是几百个符号，每个由不同方向的尖头压痕拼成。我们一块泥板一块泥板地抄，抄错了，老师拿棍子打手。一天抄坏多少块泥板，自己都数不清。\n\n这样练上好多年，才算出师。\n\n出师之后，我能做的事，城里大多数人一辈子做不了：我能读懂账本、写下契约、记录审判、抄写王的命令。一桩买卖、一笔借债、一场官司，谁对谁错，最后落在我写下的那块泥板上。\n\n你看出来了吗？在一个绝大多数人不识字的城里，会写字的人，手里攥着一种隐形的权力——因为「写下来的」才作数，而能写、能读那些字的，只有我们这几个人。',
        en: 'First, how I trained this skill, so you understand how rare literacy was in that age.\n\nFrom childhood I was sent to a scribal school, a bitter place. Cuneiform is not a few dozen letters but hundreds of signs, each built from reed-marks pressed in different directions. We copied tablet after tablet, and when we copied wrong, the teacher beat our hands with a stick. How many tablets I ruined in a day, I could not count.\n\nYears of this, and only then did I qualify.\n\nOnce qualified, I could do what most people in the city never could in a whole lifetime: read a ledger, write a contract, record a trial, copy the king\'s commands. A trade, a debt, a lawsuit, who was right and who was wrong, came down at last to the tablet I wrote.\n\nDo you see it? In a city where almost no one could read, the one who could write held a kind of invisible power, because only "what is written down" counts, and only a few of us could write and read those marks.',
      },
      deliverGoal: 'N2 setup — 书吏学校苦练 (楔形文字几百符号/抄错挨棍子打手/抄坏数不清泥板/练好多年出师) + 出师后能做大多数人做不了的 (读账本/写契约/记审判/抄王命) + 「写下来的才作数」+ 识字人手握隐形权力',
      engagementHook: '在一个绝大多数人不识字的城里,「写下来的才作数」,而只有我们几个会写。会读会写,在那个年代为什么是一种隐形的权力?',
      expectsRealAnswer: false,
    },
    {
      id: 'sc-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '现在，国王交给我们书吏一桩大活：把他那 282 条法律，刻成全城都看得见的样子。\n\n这不是随便记个账。这是要立在城里、传给后世的东西。先在泥板上拟稿、核对、改；定稿了，再由最好的工匠把字凿到那根两米多高的黑石柱上。石头不像泥，刻错一笔，改不了。\n\n刻的时候，我一条一条往下走。前面几条还好。刻到伤害赔偿那几条，我手上慢了下来。\n\n法律写得清清楚楚：一个 awilum（贵族）打掉另一个 awilum 的牙，要以牙还牙——敲掉他的牙抵；可一个 awilum 打掉一个 mushkenum（平民）的牙，赔三分之一 mina 银子就完事。\n\n我读得懂这些字。我比城里几乎所有人都更早、更清楚地知道：这部法律，把同一颗牙，定了不同的命。\n\n而我的活，就是把这个「不同的命」，一笔一笔，刻进永远擦不掉的石头。',
        en: 'Now the king hands us scribes a great task: to carve his 282 laws into a form the whole city can see.\n\nThis was not just keeping some account. This was something to stand in the city and be passed to later ages. First we drafted on clay tablets, checked, corrected; once the text was final, the best craftsmen would chisel the signs onto that black pillar more than two meters tall. Stone is not like clay, a wrong stroke cannot be undone.\n\nAs I carved, I went down them one by one. The first few were fine. Coming to the laws on injury, my hand slowed.\n\nThe law is written plainly: if an awilum knocks out another awilum\'s tooth, it is a tooth for a tooth, his own is knocked out to settle it; but if an awilum knocks out a mushkenum\'s tooth, he pays one-third of a mina of silver and is done.\n\nI can read these signs. Earlier and more clearly than almost anyone in the city, I know this: this law has fixed the same tooth at different fates.\n\nAnd my work is to carve that "different fate," stroke by stroke, into stone that can never be wiped away.',
      },
      deliverGoal: 'N3 setup — 国王交活把 282 条刻成全城可见 (泥板拟稿核对改/工匠凿黑石柱/石头刻错改不了) + 刻到伤害赔偿手慢下来 (awilum 打 awilum 牙以牙还牙 / awilum 打 mushkenum 牙赔三分之一 mina) + 书吏比谁都更早读懂同牙不同命 + 他的活是把不平等刻进擦不掉的石头',
      engagementHook: '我读得懂这些字,比城里几乎所有人都更早知道:这部法律把同一颗牙定了不同的命。读懂了,可活还得照刻——你会是什么心情?',
      expectsRealAnswer: false,
    },
    {
      id: 'sc-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你手里这块尖头，正悬在湿泥上方。下一条，你要刻的是：同一颗牙，贵族打贵族得以牙还牙，贵族打平民只赔三分之一 mina 就完事。\n\n你心里清楚这不公平。你自己就是个平民出身的书吏，不是 awilum。这条法律真要用上，亏的是跟你一样的人。\n\n可你能怎么办？\n\n你不刻，有的是别人刻；你刻错一个字，可能掉脑袋。你只是个书吏——你不立法，你只「写」法。国王说什么，你写什么。这就是你的活，你的饭碗，你的命。\n\n但这里有个你绕不过去的问题：你只是「照着写」，你就真的没责任吗？\n\n这部法律要靠你的手，才能从国王嘴里的一句话，变成石头上谁都改不了的「永恒正义」。没有你这样的人，它就只是空话。是你，让它有了牙齿。\n\n你刻，还是不刻？刻了，你算不算帮凶？',
        en: 'Now you are me.\n\nThe reed in your hand hovers over the wet clay. The next law you must carve: the same tooth, when a noble strikes a noble it is tooth for tooth, but when a noble strikes a commoner it is settled with one-third of a mina.\n\nYou know in your heart it is unfair. You yourself are a scribe of commoner birth, not an awilum. If this law is ever used, the ones who lose are people like you.\n\nBut what can you do?\n\nIf you do not carve it, plenty of others will; carve a single sign wrong and you might lose your head. You are only a scribe, you do not make the law, you only "write" it. The king says, you write. This is your work, your rice bowl, your life.\n\nBut here is a question you cannot get around: just because you only "write it down," are you truly free of responsibility?\n\nThis law needs your hand to turn from a sentence in the king\'s mouth into an "eternal justice" on stone that no one can alter. Without people like you, it is only empty words. It is you who gives it teeth.\n\nDo you carve it, or not? If you carve it, are you an accomplice?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 尖头悬在湿泥上要刻同牙不同命 (贵族打贵族以牙还牙/贵族打平民赔三分之一 mina) + 书吏自己平民出身亏的是跟他一样的人 + 但不刻别人刻/刻错掉脑袋/只写法不立法是饭碗是命 + 绕不过的问题: 只「照着写」就没责任吗 + 是你让空话有了牙齿 + 刻不刻/算不算帮凶',
      engagementHook: '我只是照国王的话刻,我没立这条法。可没有我的手,它就只是空话——是我让它有了牙齿。「只是执行命令」的人,到底算不算帮凶?',
      expectsRealAnswer: false,
    },
    {
      id: 'sc-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我刻了。一条都没漏，一条都没改。\n\n我跟你说实话：那个年代，几乎没有书吏会去改国王的法。我们这行的规矩，第一条就是「忠实抄录」——一字不差，半点不改。改字，不光是抗命，在我们眼里几乎是亵渎：这字是要传给后世、立在神面前的。\n\n所以我做的，不是「反抗」，是「忠实」。\n\n可你回头想想这件事的分量。正因为我们书吏忠实，这部把人分三等的法律，才一字不差地立了起来、传了下去、刻进了石头。我们没有篡改它，我们让它「准确无误」地变成了永恒。\n\n这就是写字的人，在历史里最尴尬的位置：我们既不是下令的人，也不是挨罚的人。我们是中间那只手——把上面的意志，精确地、忠实地，传给下面所有人。\n\n忠实，有时候反而让坏的东西更牢。',
        en: 'I carved it. Not one law skipped, not one altered.\n\nI will tell you the truth: in that age, almost no scribe would alter the king\'s law. The first rule of our trade was "faithful copying," not a sign off, not a thing changed. To change a sign was not only to disobey but, in our eyes, almost to commit sacrilege: this writing was to be passed to later ages and set before a god.\n\nSo what I did was not "resistance," it was "faithfulness."\n\nBut think of the weight of that. Precisely because we scribes were faithful, this law that sorts people into three ranks stood up exactly as written, was passed down, was carved into stone. We did not tamper with it; we made it become "accurate and flawless" forever.\n\nThis is the most awkward place of the writing person in history: we are neither the ones who give the order nor the ones who are punished. We are the hand in the middle, passing the will from above, precisely and faithfully, to everyone below.\n\nFaithfulness, sometimes, only makes the bad thing hold all the firmer.',
      },
      deliverGoal: 'N5 story — 书吏刻了一条不漏不改 + 那年代书吏行规第一条「忠实抄录」(一字不差/改字近亵渎) + 他做的不是反抗是忠实 + 反讽: 正因忠实这部分三等的法才准确无误立起传下刻进石头 + 写字人尴尬位置 (中间那只手) + 「忠实有时让坏东西更牢」',
      engagementHook: '我们书吏的第一条规矩是「忠实抄录」,一字不改。可正因为忠实,这部把人分三等的法律才准确无误地传了下去。「忠实地执行」一件错事,是清白,还是另一种参与?',
      expectsRealAnswer: false,
    },
    {
      id: 'sc-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我把我这双手做的事，掰到最清楚的一刻给你看。\n\n那块湿泥板在我面前。我刚刻完一行：一个 awilum 打掉另一个 awilum 的牙，要以牙还牙，敲掉他的牙抵。\n\n下一行，我要刻的是：一个 awilum 打掉一个 mushkenum 的牙，赔三分之一 mina 就完事。\n\n两行字，挨在一起。同一颗牙，同样的疼。我的尖头落下去，把「三分之一」这个数字，一笔一笔压进泥里——平民那颗牙，原来只值这么点。压完泥，工匠会照着凿进石头。石头一旦凿成，几千年都改不了。\n\n你看清这一刻了吗？「人不平等」这件事，本来只是国王心里的一个想法、嘴里的一句话。是我的手，把它变成了看得见、摸得着、谁都改不了的字。\n\n口头的偏心，会随说话的人一起死掉。可一旦刻进石头，它就不再依赖任何人活着——它自己活下去，一代一代，告诉后面所有人：这就是「正义」，这就是「神定的规矩」。\n\n我这双手最大的本事，也是它最沉的罪：我让「不平等」有了永生。',
        en: 'Let me show you the moment that makes clearest what these two hands did.\n\nThe slab of wet clay is before me. I have just carved a line: if an awilum knocks out another awilum\'s tooth, it is a tooth for a tooth, his own is knocked out to settle it.\n\nThe next line I must carve: if an awilum knocks out a mushkenum\'s tooth, he pays one-third of a mina and is done.\n\nTwo lines, side by side. The same tooth, the same pain. My reed comes down, pressing the number "one-third" into the clay, stroke by stroke, that commoner\'s tooth, it turns out, is worth only this much. When the clay is done, the craftsman will chisel it into stone after me. Once the stone is cut, it cannot be changed for thousands of years.\n\nDo you see this moment clearly? "People are not equal" was, at first, only a thought in the king\'s heart, a sentence in his mouth. It was my hand that turned it into writing you can see, touch, and no one can alter.\n\nSpoken favoritism dies with the one who speaks it. But once cut into stone, it no longer depends on anyone being alive, it lives on by itself, generation after generation, telling all who come after: this is "justice," this is "the rule a god set."\n\nThe greatest skill of these two hands is also their heaviest sin: I gave "inequality" everlasting life.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 两行字挨在一起 (awilum 打 awilum 牙以牙还牙 / awilum 打 mushkenum 牙赔三分之一 mina) 尖头一笔笔把「三分之一」压进泥/平民那颗牙只值这么点/工匠照凿石头几千年改不了 + 核心: 不平等本是国王心里想法嘴里一句话,书吏的手把它变成谁都改不了的字 + 口头偏心随人死/刻进石头自己活下去成永恒「正义」+ 「我让不平等有了永生」',
      engagementHook: '「人不平等」本来只是国王心里的一个念头。是我的手,把它刻成谁都改不了的字,让它活了几千年。把一句话变成永恒,这是书吏最大的本事,还是最沉的罪?',
      expectsRealAnswer: false,
    },
    {
      id: 'sc-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头从我的泥板拉远，你会发现：像我这样「写字的人」，在每一个文明里都有。\n\n几乎每一个有文字的社会，都靠一小群识字者撑着它的记忆和规矩。我在巴比伦刻法典；两千多年后，西非的廷巴克图，有一群人成天在抄书，把伊斯兰世界的学问抄进一卷卷手稿，养活了一座学问之城。（这条线你在 mali-empire 那个 Topic 见过。）\n\n再往后，在欧洲，一个叫 Mersenne 的修士，靠写信把各国的科学家连成一张网，信息经他的手转来转去。（这是 scientific-revolution 里的人。）\n\n时代不同，文字不同，可这群人干的是同一件事：他们是知识的中介。在大多数人读不到、写不出的时候，是这群识字的人，决定了什么被记下、什么被传开、什么被遗忘。\n\n这是一种很大的权力，也是一种很大的责任。因为「被写下来的」，往往就成了后人眼里「真的发生过的」。',
        en: 'Pull the lens back from my clay tablet, and you will find that "the writing person" like me exists in every civilization.\n\nAlmost every society with writing rests on a small group of literate people to carry its memory and its rules. I carved law in Babylon; more than two thousand years later, in Timbuktu in West Africa, a group spent their days copying books, copying the learning of the Islamic world into scroll after scroll, sustaining a city of scholarship. (You met this line in the mali-empire topic.)\n\nLater still, in Europe, a friar named Mersenne tied the scientists of many countries into one network by writing letters, information passing back and forth through his hands. (This is a person from the scientific-revolution topic.)\n\nDifferent ages, different scripts, yet these people did the same thing: they were the brokers of knowledge. When most could not read or write, it was this literate few who decided what got recorded, what got passed on, what was forgotten.\n\nThis is a great power, and a great responsibility. Because "what is written down" often becomes, in the eyes of those who come after, "what really happened."',
      },
      deliverGoal: 'N7 zoom-out + topic connection — 「写字的人」每个文明都有 (识字者撑记忆和规矩) + 跨 Topic 锚 mali-empire 廷巴克图抄书人 + scientific-revolution Mersenne 书信网 + 同一件事: 知识中介决定什么被记/传/忘 + 大权力大责任 (被写下的成后人眼里真发生过的)',
      engagementHook: '巴比伦的我、廷巴克图的抄书人、欧洲写信的修士——干的是同一件事:决定什么被记下、什么被遗忘。「被写下来的」就成了后人眼里「真发生过的」,这权力大不大?',
      expectsRealAnswer: false,
    },
    {
      id: 'sc-n8',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我只是一个忠实的手艺人。我没立那条法，我没分谁是贵族谁是平民。我苦练多年才学会读写，我的活就是把别人交代的字，准确无误地刻下来。一字不改，是我们这行的本分，也是我的清白。要怪，该去怪立法的王，不是刻字的我。一个只是「执行」的人，凭什么背立法者的锅？\n\n另一种说法：正因为我「只是执行」，这部把人分三等的法律才得以成真。国王心里的一个念头，要靠我的手，才能变成石头上谁都改不了的「永恒正义」。没有我们这群忠实的书吏，它就只是空话。我没篡改它——我让它精确地、永久地立了起来。「我只是照着写」从来不是清白，而是让坏东西更牢的那只手。\n\n这两边不是「忠诚加软弱」。是同一双手的两面——「忠实」既是手艺人的美德，也是让权力的意志畅通无阻的那条通道。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was only a faithful craftsman. I did not make that law, I did not sort who was noble and who was commoner. I trained for years to learn to read and write, and my work was to carve down, accurate and flawless, the words others handed me. To change not a sign was the duty of my trade and also my innocence. If there is blame, blame the king who made the law, not me who carved it. Why should one who only "carries it out" bear the lawgiver\'s burden?\n\nThe other view: precisely because I "only carried it out," this law that sorts people into three ranks came true. A thought in the king\'s heart needed my hand to become an "eternal justice" on stone that no one could alter. Without us faithful scribes, it was only empty words. I did not tamper with it, I made it stand up precisely and permanently. "I only wrote it down" was never innocence, but the very hand that made the bad thing hold all the firmer.\n\nThese are not "loyalty and weakness." They are two faces of the same hands, "faithfulness" is both the craftsman\'s virtue and the channel through which the will of power flows unobstructed.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N8 synthesis — 一种说法 (只是忠实手艺人/没立法没分贵贱/苦练读写/一字不改是本分是清白/该怪立法的王) / 另一种说法 (正因只执行法才成真/国王念头靠书吏手变永恒/没书吏只是空话/「只照着写」从不是清白是让坏东西更牢的手) / 同一双手两面 / 想 30 秒',
      engagementHook: '忠实的手艺人,和让坏东西更牢的那只手——是同一双手,同一个我。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'sc-n9',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个写字的人？\n\n我读得懂那部法律的不公，却用我练了多年的手，把它一字不差地刻进了永恒。我没立法，可我让法律有了牙齿；我没分贵贱，可我让「人分三等」成了石头上改不了的真理。「我只是执行」这五个字，到底能不能洗清一个人？你怎么评？\n\n再想一步。今天你身边，有没有这样的时刻：一件事你心里知道不太对，但「上面这么定的」「规矩就这样」「大家都这么做」，于是你也照做了——你是那个递文件、传消息、按下确认的「中间那只手」吗？\n\n那时候，你会跟自己说「这不关我事，我只是照办」，还是会停下来想一想：我这双手，正在让一件什么样的事，变得更真、更牢、更难推翻？',
        en: 'Having walked my whole life, how would you judge a writing person like this?\n\nI could read the injustice of that law, yet with hands I had trained for years I carved it into eternity without a sign off. I did not make the law, but I gave it teeth; I did not sort the ranks, but I made "people in three ranks" a truth on stone that could not be changed. The five words "I only carried it out," can they truly clear a person? How do you judge it?\n\nThen take one more step. In your own life today, is there a moment when you know in your heart something is not quite right, but "this is how those above decided," "the rule is just so," "everyone does it this way," and so you do it too, are you the "hand in the middle" that passes the document, relays the message, presses confirm?\n\nWhen that happens, will you tell yourself "this is not my business, I only followed orders," or will you stop and think: these hands of mine, what kind of thing am I making truer, firmer, harder to overturn?',
      },
      deliverGoal: 'N9 close — 评价写字的人 (读懂不公却把它刻进永恒/没立法但让法有牙齿/「我只是执行」能不能洗清一个人) + transfer「今天你身边明知不太对但上面定的规矩如此大家都做于是照做的时刻/你是那只中间的手吗」+ 你会说「不关我事只是照办」还是停下想「我让什么变得更真更牢更难推翻」',
      engagementHook: '我读懂了那部法律的不公,却用自己的手把它刻进了永恒。你会怎么评价这样一个写字的人?今天你身边那个「明知不太对但还是照办」的时刻,你会说「我只是执行」,还是停下来想想自己的手正在让什么变得更牢?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Babylonian Commoner Woman (receiving-end, COMPOSITE) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var babylonianCommonerWomanLens = {
  id: 'babylonian-commoner-woman-receiving-end',
  name: 'A Babylonian Commoner Woman',
  nameCn: '一个巴比伦平民女性',
  role: 'receiving-end',
  perspectiveTag: 'mushkenum-woman',
  icon: '🏺',
  description: {
    cn: '一个巴比伦的平民女性，公元前 1750 年前后的人。这是一个虚构的典型人物，根据汉谟拉比法典里关于平民、女性的条款拼出来的——法典里真有这一类人，只是没有哪个具体的名字留下来。她是 mushkenum，中间那一等人，不是贵族，也不是奴隶。她不识字，法典上的字她一个都看不懂，可那些字管着她能不能离婚、欠了债怎么办、被人打了能赔多少。这一遍，你站在法律差等对待的那一头，看同样一部「正义」的法典，怎么因为你是谁，给你算了一个更低的价。',
    en: 'A commoner woman of Babylon, a person of around 1750 BCE. This is a composite, an invented typical figure pieced together from the code\'s clauses about commoners and women, there really were such people in the code, only no particular name was left behind. She is a mushkenum, the middle rank, neither noble nor slave. She cannot read, not one sign of the code on the pillar means anything to her, yet those signs govern whether she may divorce, what happens when she is in debt, how much she is owed if she is struck. This pass puts you on the receiving end of the law\'s unequal treatment, watching how the same "just" code, because of who you are, reckoned you at a lower price.',
  },
  storyboard: [
    {
      id: 'cw-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '城中心立着一根两米多高的黑石柱，上面刻满了字。人们说，那是国王的法律，是「正义」。\n\n我每天从它旁边走过。我一个字都看不懂。\n\n我是一个巴比伦的平民女人，公元前 1750 年前后，活在这座城里。\n\n（先说清楚：我不是史书上某个具体的人。法典里真写着像我这样的平民、女人，只是没留下哪个名字。这一遍，你跟着这样一个普通女人走。）\n\n那石柱上的字我读不了，可它们管着我的命：我能不能离开一段不想要的婚姻，我家欠了债该怎么办，我要是被人打了能讨回多少。\n\n这些事的答案，早就刻在那块我看不懂的石头上了。\n\n这一遍，你站到我这里来。不是从立法的王那边看，不是从刻字的书吏那边看，是从那部法律「算计」的那个人这边看——看「正义」两个字，落到我头上，到底是什么分量。',
        en: 'In the center of the city stands a black pillar more than two meters tall, covered in writing. People say it is the king\'s law, that it is "justice."\n\nI walk past it every day. I cannot read a single sign of it.\n\nI am a commoner woman of Babylon, living in this city around 1750 BCE.\n\n(Let me be clear first: I am not some particular person from the history books. The code really does write of commoners and women like me, only no name was left behind. In this pass, you follow one such ordinary woman.)\n\nThe writing on that pillar I cannot read, yet it governs my life: whether I may leave a marriage I do not want, what happens when my household is in debt, how much I can claim back if I am struck.\n\nThe answers to these things were carved long ago into that stone I cannot read.\n\nThis pass, you come and stand where I stand. Not looking from the king who made the law, not from the scribe who carved it, but from the one the law "reckons", to see what the word "justice," landing on my head, really weighs.',
      },
      deliverGoal: 'N1 hook — 城中心两米黑石柱刻满字 (国王法律/「正义」) + 平民女人一字看不懂每天走过 + anti-fab 括号 (非史载个人/composite 平民女人) + 那些字管她的命 (离婚/欠债/被打赔多少) + 这一遍视角 (不是王不是书吏,是被法律算计的那个人)',
      engagementHook: '城中心那根写满「正义」的石柱,管着我能不能离婚、被打了赔多少——可我一个字都看不懂。一部你读不懂、却管着你一生的法律,你会信任它吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是谁，你才懂法典上那些字，对我意味着什么。\n\n我是 mushkenum——中间那一等人。两河这座城里，人被分成三等：最上面是 awilum，有地位的自由人，贵族；最下面是 wardum，奴隶，在法律眼里几乎是财产；我在中间，不上不下。\n\n我没什么地，靠给人做工、织布、操持一个小家过日子。我男人、我孩子，日子都紧巴巴的。\n\n我活在两层身份的最底下：我是平民，不是贵族；我又是女人，在那个年代，女人本就矮男人一头。\n\n这两层叠在一起，意味着：在国王那部「对所有人」的法典里，我属于赔得最少、护得最薄的那一类人。\n\n我不识字，看不懂那些条款。可日子会一次次把那些条款的分量，实实在在地砸到我身上——让我用自己的命，读懂那部我读不了的法律。',
        en: 'First, who I am, so you understand what those signs on the code mean to me.\n\nI am a mushkenum, the middle rank. In this Mesopotamian city, people are split into three: at the top the awilum, free people of standing, the nobles; at the bottom the wardum, the enslaved, who in the eyes of the law are nearly property; I am in the middle, neither high nor low.\n\nI have little land. I live by working for others, weaving cloth, keeping a small household going. My man, my children, our days are always tight.\n\nI live at the bottom of two layers of standing at once: I am a commoner, not a noble; and I am a woman, and in that age a woman stood a head below a man to begin with.\n\nThese two layers stacked together mean: in the king\'s code "for everyone," I belong to the class paid the least and protected the thinnest.\n\nI cannot read; I cannot make out those clauses. But life will, again and again, bring the weight of those clauses down on me, real and solid, making me read with my own life the law I could not read.',
      },
      deliverGoal: 'N2 setup — 女人是 mushkenum 中间一等 (上 awilum 贵族/下 wardum 奴隶近财产) + 没地靠做工织布操持小家日子紧巴 + 两层身份最底 (平民非贵族 + 女人矮男人一头) + 在「对所有人」法典里属赔最少护最薄一类 + 不识字但日子砸来分量让她用命读懂',
      engagementHook: '我是平民,又是女人——两层身份叠在一起,在那部「对所有人」的法典里,我属于赔得最少、护得最薄的那一类。一部说「对所有人」的法律,真的对所有人一样吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '你可能会问：那部法典，对女人难道一点好处都没有？\n\n说句公道话，有的。\n\n法典里有些条款，确实给了像我这样的女人一点保障。比如：如果丈夫要休妻，他得退还我当初带进门的嫁妆，不能让我净身出户；如果他长期出门、抛下我不管，在一定情况下我可以另嫁；寡妇对亡夫留下的财产，也有一些受保护的份额。\n\n在那个年代，这些已经不算少了。比起「全凭男人一句话」，白纸黑字写下来的这几条，至少给了我一点可以指望的东西。\n\n所以这部法典不是「对女人全是坏的」。它确实写进了一些保护。\n\n可你别急着替它叫好。同一部法典，给了我一点保护的同时，也用更细的笔，把我钉在了比男人、比贵族都低的位置上。\n\n好处和枷锁，是同一批字一起给的。',
        en: 'You might ask: did that code do women no good at all?\n\nTo be fair, it did some.\n\nSome clauses in the code truly gave a woman like me a little security. For instance: if a husband divorces his wife, he must return the dowry I brought with me at marriage, he cannot turn me out with nothing; if he is long away and abandons me, under certain conditions I may marry another; a widow holds some protected share of the property her late husband left.\n\nIn that age, this was not little. Compared to "entirely at a man\'s word," these few lines, set down in black and white, at least gave me something I could count on.\n\nSo this code was not "all bad for women." It truly wrote in some protection.\n\nBut do not rush to cheer for it. The same code that gave me a little protection also, with a finer pen, nailed me into a place lower than men and lower than nobles.\n\nThe benefit and the chain were given by the same set of signs, together.',
      },
      deliverGoal: 'N3 setup — 公道话: 法典对女人有些保障 (休妻退嫁妆不净身出户/丈夫长期抛弃可另嫁/寡妇受保护份额) + 那年代不算少比「全凭男人一句话」好 + 不是「对女人全是坏的」+ 但同一部法典也把她钉在比男人比贵族低的位置 + 「好处和枷锁是同一批字一起给的」',
      engagementHook: '那部法典确实给了像我这样的女人一点保护——退嫁妆、寡妇有份额。可同一部法典,也把我钉在比男人、比贵族都低的位置上。好处和枷锁是同一批字给的,你怎么看这样一部法律?',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n这一天，在巷子里，你跟一个人起了争执。对方动了手，一拳打掉了你一颗牙。\n\n血在嘴里。疼得钻心。\n\n你去讨说法。城里有法律，你想：好，有法律，我能讨回公道。\n\n可你接下来听到的话，会让你这辈子忘不掉。\n\n断案的人翻出法典上的条款：打掉一个 mushkenum（平民）的牙，赔三分之一 mina 银子。\n\n你愣住了。三分之一 mina？就这？\n\n旁边有人小声告诉你：同样这一拳，要是打掉的是一个 awilum（贵族）的牙，法典可不是叫人赔钱了事——是以牙还牙，得把动手那人的牙也敲掉抵。\n\n同一颗牙。同样的疼，同样的血。可贵族的牙，要用一颗牙来抵；你的牙，对方塞三分之一 mina 就能走人。\n\n你站在那儿，嘴里还在淌血。你心里那个问题，憋了很久，这一刻冒出来：凭什么？凭什么打贵族要拿牙抵命，打我，花点钱就两清了？',
        en: 'Now you are me.\n\nOne day, in an alley, you fall into a quarrel with someone. The other strikes you, and one blow knocks out a tooth.\n\nBlood in your mouth. Pain to the bone.\n\nYou go to claim justice. There is law in the city, you think: good, there is law, I can win what is fair.\n\nBut what you hear next, you will never forget your whole life.\n\nThe one who judges turns up the clause in the code: knock out a mushkenum\'s tooth, pay one-third of a mina of silver.\n\nYou freeze. One-third of a mina? That is all?\n\nSomeone beside you says quietly: the same blow, if it had knocked out an awilum\'s tooth, the code would not have it settled with money, it would be a tooth for a tooth, the striker\'s own tooth knocked out to pay for it.\n\nThe same tooth. The same pain, the same blood. But a noble\'s tooth must be answered with a tooth; yours, the other man hands over one-third of a mina and walks away.\n\nYou stand there, blood still running in your mouth. The question held back so long rises up in this moment: by what right? By what right does striking a noble cost a tooth, while striking me is squared with a little money?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 巷子里争执被打掉一颗牙 (血/疼) + 去讨说法以为有法律能讨公道 + 断案翻条款 mushkenum 牙赔三分之一 mina + 旁人告诉她 awilum 牙不是赔钱是以牙还牙(敲掉对方牙抵) + 同牙同疼同血但贵族牙要拿牙抵/平民牙塞点钱就走人 + 憋很久的问题冒出来「凭什么打贵族要拿牙抵,打我花点钱就两清」',
      engagementHook: '同样一拳打掉一颗牙,我是平民只赔三分之一,贵族能赔三倍。我站在那儿,嘴里还淌着血,憋出一个问题:凭什么我的疼,比贵族的疼便宜三分之二?这个「凭什么」,你能替我答吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我把这口气咽下去了。不是因为我服，是因为我没得选。\n\n那个断案的人，语气很平静，好像在念一件天经地义的事：法律就这么写的。你是 mushkenum，你的牙就值三分之一 mina。这不是他偏心，这是「神定的正义」。\n\n你听清这话里的可怕没有？\n\n如果是断案的人当场偏袒贵族，我还能骂他不公，还能盼着换个人来断会不会好点。\n\n可现在，不公平的不是某个人，是那块石头上的字。是「法律」本身，白纸黑字、神授盖章，定死了我的牙不如贵族的牙金贵。我没法骂石头，没法换一部法律，没法盼着哪天它「想通了」。\n\n那一刻我才真正明白：把不平等写进法律，比让一个坏官随口欺负我，可怕得多。\n\n坏官会死，会换。可刻进石头、说成神意的不公，会一直立在那儿，理直气壮地，告诉每一个像我这样的人：你，本来就该值得更少。',
        en: 'I swallowed it. Not because I accepted it, but because I had no choice.\n\nThe one who judged spoke calmly, as if reciting something self-evident: the law is written so. You are a mushkenum, your tooth is worth one-third of a mina. This is not his favoritism, this is "the justice a god set."\n\nDo you hear the terror in those words?\n\nIf the judge had favored the noble on the spot, I could at least curse him as unfair, could hope a different man judging might be better.\n\nBut now the unfair thing is not some person, it is the signs on that stone. It is "the law" itself, in black and white, stamped by a god, that fixes my tooth as counting for less than a noble\'s. I cannot curse the stone, cannot swap out a law, cannot hope it will one day "come around."\n\nIn that moment I truly understood: writing inequality into law is far more terrible than letting a bad official bully me on a whim.\n\nA bad official dies, gets replaced. But injustice carved into stone and called the will of a god stands there forever, righteous and unashamed, telling everyone like me: you were always meant to be worth less.',
      },
      deliverGoal: 'N5 story — 咽下这口气没得选 + 断案人语气平静「法律就这么写/你是 mushkenum 牙值三分之一/不是偏心是神定正义」+ 可怕之处: 偏袒贵族还能骂能换人,但不公是石头上的字/法律本身/神授盖章定死 + 「把不平等写进法律比坏官随口欺负可怕得多」+ 坏官会死会换/刻进石头的不公一直立着理直气壮告诉她「你本该值更少」',
      engagementHook: '坏官会死、会换,我还能盼下一个好点。可刻进石头、说成神意的不公,一直立在那儿,理直气壮地告诉我:你本来就该值得更少。把不平等写进法律,是不是比一个坏官随口欺负你,更可怕?',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我把这件事，掰到最清楚的一刻给你看。\n\n那天，城里还有另一个人，也被打掉了一颗牙。他是 awilum，一个贵族，打他的也是个贵族。\n\n我们俩，同一座城，同一种伤，同一颗牙。我嘴里淌的血，和他嘴里淌的血，是一样红的；我的疼，和他的疼，是一样钻心的。\n\n可法典翻开，白纸黑字：他的牙，要拿一颗牙来抵——以牙还牙；我的牙，赔三分之一 mina 银子就完了。\n\n同一颗牙，一边拿牙抵，一边花点钱打发。差的那一截，不是因为他更疼、不是因为他流的血更多。差的那一截，只因为——他是贵族，我是平民。\n\n你现在懂我为什么说那部石柱上的「正义」让我心寒了吧？\n\n它不是没给我「正义」。它给了——只不过，它先把我和那个贵族，标上了不一样的价签，再按价签给我们各自的「正义」。\n\n在那块石头上，我从来不是「一个人」。他的牙换得回一颗牙，我的牙，只换得回三分之一 mina。我是「三分之一」。',
        en: 'Let me show you the moment that makes this clearest.\n\nThat day, another person in the city also had a tooth knocked out. He was an awilum, a noble, and the one who struck him was a noble too.\n\nThe two of us, the same city, the same injury, the same one tooth. The blood running in my mouth and the blood running in his were the same red; my pain and his pain were the same, cutting to the bone.\n\nBut open the code, in black and white: his tooth must be paid with a tooth, an eye for an eye; my tooth was settled with one-third of a mina of silver and that was the end of it.\n\nThe same tooth, one answered with a tooth, the other waved off with a little money. The gap was not because he hurt more, not because he bled more. The gap was only because he was a noble and I was a commoner.\n\nNow you understand why I said the "justice" on that pillar chilled my heart?\n\nIt was not that it gave me no "justice." It gave it, only it first marked the noble and me with different price tags, then handed each of us our own "justice" according to the tag.\n\nOn that stone, I was never "a person." His tooth bought back a whole tooth; mine bought back only one-third of a mina. I was "one-third."',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 同一天另一人 awilum 被另一贵族打掉一颗牙 + 同城同伤同牙/血一样红疼一样钻心 + 法典白纸黑字: 他牙要以牙还牙(拿一颗牙抵)/我牙赔三分之一 mina 了事 + 差的一截不因他更疼流更多血只因他贵族我平民 + 石柱「正义」让她心寒 (不是没给正义,是先标不同价签再按价签给各自正义) + 「他的牙换得回一颗牙,我的牙只换三分之一 mina,我是三分之一」',
      engagementHook: '同一天,我和一个贵族都被打掉一颗牙——血一样红,疼一样钻心。可法典里,他的牙要拿一颗牙来抵,我的牙塞三分之一 mina 就打发了。在那块石头上,我从来不是「一个人」,我是「三分之一」。一部把你标成「三分之一」的法律,还配叫「正义」吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头从我的牙拉远，你会看见一条很长、很沉的线。\n\n「法律下，人不平等」这件事，不是只有我这个巴比伦女人遇到过。三千多年后，在大洋那一边的美国，一部新写的宪法把被奴役的人，算成「五分之三个人」——不是出于疏忽，是写进了根本大法。法律下，有人是「整个人」，有人只是个分数。（这条古今对照，你在讲美国奴隶制的那个 Topic 里会再碰到。）\n\n我的牙值三分之一，他们把人算成五分之三。隔着三千年、隔着半个地球，是同一件事：用「写下来的法律」，把人明码标上不同的价。\n\n这就是为什么，「法律」这两个字，从来不简单。\n\n一部写下来的法，可以保护弱者，也可以理直气壮地压住弱者。它写的是「正义」还是「谁该听谁的」，不看它写没写下来，看它给不同的人，标的是不是同一个价。',
        en: 'Pull the lens back from my tooth, and you will see a very long, very heavy line.\n\n"Under the law, people are not equal" was not met only by me, a Babylonian woman. More than three thousand years later, across the ocean in America, a freshly written constitution counted enslaved people as "three-fifths of a person", not out of oversight, but written into the foundational law. Under the law, some were "a whole person," some only a fraction. (This comparison across ages you will meet again in the topic on American slavery.)\n\nMy tooth worth one-third, they counting a person as three-fifths. Across three thousand years and half the world, it is the same thing: using "written law" to mark people, plain and clear, at different prices.\n\nThis is why the word "law" is never simple.\n\nA written law can protect the weak, and it can also, righteous and unashamed, hold the weak down. Whether it writes "justice" or "who must obey whom" depends not on whether it is written, but on whether it marks different people at the same price.',
      },
      deliverGoal: 'N7 zoom-out + topic connection — 「法律下人不平等」不只巴比伦女人 + 跨 Topic 锚 A4 美国奴隶制宪法把人算「五分之三」(非疏忽是写进根本大法/古今对照) + 我牙三分之一/他们人五分之三隔三千年半地球同一件事 (用写下来的法明码标不同价) + 「法律」从不简单 (能护弱也能压弱/看给不同人标的是不是同一个价)',
      engagementHook: '我的牙值三分之一,三千年后美国宪法把被奴役的人算成「五分之三个人」——隔着半个地球,是同一件事。判断一部法律是「正义」还是「谁该听谁的」,该看它写没写下来,还是看它给不同的人标的是不是同一个价?',
      expectsRealAnswer: false,
    },
    {
      id: 'cw-n8',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看城中心那部法典，两种说法都站得住。\n\n一种说法：它毕竟是个进步。在它之前，我这样的平民女人，生死赔偿全凭官吏一张嘴、男人一句话，连个可指望的标准都没有。这部法典至少写下来了：我的牙值多少、休妻得退嫁妆、寡妇有份额——这些白纸黑字，是我能抓住的、能拿去讨说法的东西。比起「全凭权势者高兴」，有一部写下来的法，对弱者反而是一层薄薄的护身。\n\n另一种说法：它把不平等钉成了永恒。它确实写下来了——可它写下来的，是「我的牙只值贵族的三分之一」。它没让我和贵族平等，它用神的名义，把「我本来就该值更少」变成了不容质疑的真理。在它眼里，我从来不是一个完整的人，我是一个分数。这样的「法律」，从第一天起就不是为我这样的人写的。\n\n这两边不是「优点加缺点」。是同一部法典的两面——它既给了弱者一点可抓的东西，也把弱者的「低人一等」刻成了石头。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at the code in the center of the city. Both views stand.\n\nOne view: it was, after all, a step forward. Before it, a commoner woman like me had no standard to count on at all, life and death and compensation hung on an official\'s mouth, a man\'s word. This code at least wrote it down: what my tooth is worth, that a divorce must return the dowry, that a widow holds a share, these things in black and white were something I could grasp, something I could take and claim with. Compared to "entirely at the powerful\'s pleasure," a written law was, for the weak, a thin layer of shelter.\n\nThe other view: it nailed inequality into eternity. It did write things down, but what it wrote was "my tooth is worth only one-third of a noble\'s." It did not make the noble and me equal; in the name of a god it turned "I was always meant to be worth less" into an unquestionable truth. In its eyes I was never a whole person, I was a fraction. A "law" like this was, from its first day, not written for people like me.\n\nThese are not "strengths and weaknesses." They are two faces of the same code, it both gave the weak a little to grasp and carved the weak\'s "lower standing" into stone.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N8 synthesis — 一种说法 (毕竟进步/之前全凭官吏男人一句话没标准/法典写下我牙值多少+休妻退嫁妆+寡妇份额是能抓能讨说法的/对弱者是薄薄护身) / 另一种说法 (把不平等钉成永恒/写下的是「我牙只值贵族三分之一」/神名义把「该值更少」变不容质疑真理/我从不是完整的人是分数/从第一天不为我写) / 同一部法典两面 / 想 30 秒',
      engagementHook: '它毕竟给了弱者一点可抓的东西,可它也把「我低人一等」刻成了石头——是同一部法典的两面。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'cw-n9',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个读不懂法律、却被法律算成三分之一的平民女人——你会怎么评价这样一个开端？\n\n人类最早把法律写下来的大事之一，就发生在我的城里。可这部法律写下的第一批规矩里，就明明白白把我的牙，标成区区三分之一 mina——而贵族的牙，得拿一颗牙来抵。它说自己是「正义」，是「神定的」。你会说它是弱者的第一层护身，还是把不平等钉死的第一块石头？你怎么评？\n\n再想一步。今天你身边，有没有「写在纸上的规矩」对不同的人其实不一样的地方——同一条校规，有人犯了被重罚，有人犯了没事；同一个说好的约定，落到不同人头上就变了样。\n\n那时候，你会像那个平静念法条的人一样，觉得「反正写下来了，就是公平的」？还是会替那个被算成「三分之一」的人，多问一句：这条写下来的规矩，对每个人，真的是一个价吗？',
        en: 'Having walked my whole life, a commoner woman who could not read the law yet was reckoned by the law as one-third, how would you judge a beginning like this?\n\nOne of the earliest great moments of humanity writing law down happened in my city. Yet in the very first batch of rules this law wrote, it plainly marked my tooth at a mere one-third of a mina, while a noble\'s tooth had to be answered with a tooth. It calls itself "justice," calls itself "set by a god." Would you call it the weak\'s first layer of shelter, or the first stone that nailed inequality down? How do you judge it?\n\nThen take one more step. In your own life today, is there somewhere "the rules written on paper" actually work differently for different people, the same school rule where one is punished hard and another goes free, the same agreed promise that changes shape depending on whose head it lands on.\n\nWhen that happens, will you, like the man who calmly recited the clause, think "it is written down, so it is fair"? Or will you, for the one reckoned as "one-third," ask one more question: this written rule, for everyone, is it really one price?',
      },
      deliverGoal: 'N9 close — 评价开端 (读不懂法律却被算三分之一的平民女人/人类最早写下法律之一就在她城里/可第一批规矩就把她牙标成区区三分之一 mina 而贵族牙要拿牙抵/说自己是「正义」「神定的」→ 弱者第一层护身 vs 钉死不平等第一块石头) + transfer「今天你身边写在纸上的规矩对不同人其实不一样的地方 (同校规有人重罚有人没事)」+ 你会像平静念法条的人觉得「写下来就公平」还是替被算三分之一的人多问一句「真的一个价吗」',
      engagementHook: '走完我这一生——一个被法律算成三分之一的平民女人——你会怎么评价这样一个开端?今天你身边那条「写下来却对不同人不一样」的规矩,你会觉得「写下来就公平」,还是替那个被算成「三分之一」的人,多问一句它是不是真的一个价?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'hammurabi':                                hammurabiLens,
  'babylonian-scribe':                        babylonianScribeLens,
  'babylonian-commoner-woman-receiving-end':  babylonianCommonerWomanLens,
};

// per TOPIC_ROADMAP_G6_G12.md C1 + receiving-end 优先 pattern:
// 平民女性 + 法律差等对待一方 + N6「同一颗牙不同命」跨 lens 对位 + N8/N9 进步 vs 钉死不平等 closing
export var defaultLens = 'babylonian-commoner-woman-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'hammurabi-code-1754bce',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'simple-binary',
  nodesPerLens: 9,
  estimatedMinutesPerLens: { 'hammurabi': 22, 'babylonian-scribe': 22, 'babylonian-commoner-woman-receiving-end': 22 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, 9-node simple-binary spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 9 nodes each / cross-lens micro-detail N6: 同一颗牙不同命 (awilum 打 awilum 牙=以牙还牙 法200 vs awilum 打 mushkenum 牙=赔 1/3 mina 法201) — Hammurabi 三等差等是设计 / scribe 把不平等刻进永恒 / commoner woman 我从不是一个人是三分之一',
    'TWO COMPOSITES: babylonian-scribe (书吏) + babylonian-commoner-woman-receiving-end (平民女性) — 均基于职业史/法典阶级条款构建的虚构典型人物,N1 lens card + 正文括号短句显式声明',
    'defaultLens: babylonian-commoner-woman-receiving-end — 受影响者优先 (平民女性 + 法律差等对待一方 + N6 同牙不同命 + N8/N9 进步 vs 钉死不平等)',
    'expectsRealAnswer: ONLY N8 (synthesis) + N9 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'reverse-Whig: 不写成「人类法治第一步」进步起点 — 法典明文 awilum/mushkenum/wardum 三等同罪不同罚,成文 ≠ 平等,法律从一开始就是权力工具',
    'cultural ban: 全程两河文明真实术语 (楔形文字/法典石柱/巴比伦/awilum/mushkenum/wardum/Shamash/mina); 绝不用 玉玺/翰林/宰相/朕/圣旨/太子 类比中国概念',
    'cross-Topic 锚: 成文法「以眼还眼」→ magna-carta-1215 (law of the land 前挂此源头); 书吏识字中介 → scientific-revolution Mersenne / mali-empire 廷巴克图抄书人; 三等差等 → A4 美国奴隶制 (3/5 古今对照)',
    'math/date check: Hammurabi r.1792-1750 BCE; 法典 c.1754 BCE; awilum 牙 1 mina / mushkenum 牙 1/3 mina (三倍差/便宜三分之二)',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
