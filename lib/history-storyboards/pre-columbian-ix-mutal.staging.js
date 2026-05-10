// Pre-Columbian T5 — Lens 3: Ix Mutal Ahaw (虚构 composite, defaultLens)
// receiving-end | Maya weaver | c.1480-1545 Yucatán
//
// Topic: Pre-Columbian Americas 1000-1532 · T5
// HSS-7 · AP World 2.1 (cross-cultural encounter)
//
// Lens 3 设计:
//   id: 'ix-mutal-weaver'
//   name: 'Ix Mutal Ahaw'
//   nameCn: '伊克斯·穆塔尔·阿豪（虚构）'
//   role: 'receiving-end'
//   defaultLens: true
//   fictionalDisclaimer: true
//
// 虚构 composite 声明 (参见 byzantine-rise Anna the Iconographer 格式):
//   Ix Mutal 不是真实个人。她是基于 Yucatán Maya 平民女性考古记录 +
//   Chilam Balam 文本碎片构建的 composite，代表 16 世纪 ~100 万 Yucatán
//   Maya 平民女性群体。
//   史料来源: Cook 1998 / Roys 1957 / Edmonson 1986 / Diego de Landa 1566 /
//   Restall 2003 / McNeill 1976
//
// 跨 lens 锁定:
//   N7 ↔ Malintzin (Lens 2) N9 — 1521.8.13 Tenochtitlán 陷落同一天
//   N6 ↔ Black Death Topic — 天花 1518 ↔ 鼠疫 1347 (McNeill 1976 同 pattern)
//
// per AUTHORING_PIPELINE.md 12 条铁律:
//   1 (cultural ban) / 2 (anti-fab) / 4 (em-dash ≤ 3 per 段, 0 段 4+ chain)
//   6 (外语 bare + inline gloss) / 11 (引号「」) / 12 (expectsRealAnswer 默认 false)
//   N11 + N12 expectsRealAnswer: true

export var lensId = 'ix-mutal-weaver';
export var lensName = 'Ix Mutal Ahaw';
export var lensNameCn = '伊克斯·穆塔尔·阿豪（虚构）';
export var lensRole = 'receiving-end';
export var lensDescription = 'Postclassic Maya 织者，c.1480-1545，Yucatán 北部内陆村，16 世纪殖民前后的见证者';
export var fictionalDisclaimer = true;
export var defaultLens = true;

export var storyboard = [

  // ═══════════════════════════════════════════════════
  // N1 — 出生 c.1480 · fictionalDisclaimer · 「分散 ≠ 衰落」
  // ═══════════════════════════════════════════════════
  {
    id: 'N1',
    title: {
      cn: '我出生的那个世界',
      en: 'The world I was born into',
    },
    setting: {
      time: 'c.1480',
      place: 'Yucatán 北部内陆村落',
      cn: 'Mayapan 崩溃 30 年后的 Yucatán 内陆，kuchkabal 分散政体时代',
      en: 'Yucatán interior, 30 years after Mayapan\'s collapse, era of kuchkabal dispersed polities',
    },
    content: {
      cn: `【这个故事是虚构 composite，不是真人传记。

Ix Mutal 这个名字和这个故事，是根据史料构建的虚构人物。她不是真实存在的特定个人。

但她代表的群体真实存在：16 世纪 Yucatán Maya 平民女性约 100 万人。她生活的每一个细节——huipil (伊普尔, 传统刺绣服) 织法、村落规模、瘟疫死亡率、encomienda (恩科米达, 西班牙殖民土地制度) 贡赋、口述传承——都来自真实史料 (Cook 1998 / Roys 1957 / Edmonson 1986 / Diego de Landa 1566)。

她的名字没传下来，不是因为她不重要，是因为殖民档案没记她。

这种写法叫「虚构 composite」，参见 VocabSpark Byzantine Topic 的 Anna the Iconographer。】

---

大约 1480 年，我出生在 Yucatán (尤卡坦) 半岛北部一个叫不出大名字的村子。从这里走几天路，能看到 Mayapan (玛雅潘) 的旧城遗址——那是 30 年前崩塌的城墙和广场，草已经把石头盖住了。

村里的老人说，Mayapan 那年是因为贵族内战倒的。我出生的时候 Mayapan 已经不存在了，但 Maya 人还在。我们 Yucatán 现在是 16 个左右的 kuchkabal (库奇卡巴尔, 分散小城邦)，每个由本地 batab (巴塔布, 城邦头) 治理，没有一个统一中心。外面的人——如果有外面的人知道我们存在——可能觉得这是「衰落」。

不是的。

分散不等于衰落。我们的市集有棉布、盐、黑曜石、蜂蜜。我们的田里有玉米、豆、南瓜——我们叫它们「三姐妹」，三种种在一起，相互支撑，比单独种哪一样都长得好。我的父亲是 milpa (米尔帕, 刀耕火种玉米田) 农夫，他每年的收成能养活我们，还有余粮给祭典。

我母亲织 huipil。这是我出生进来的世界——不是帝国，是村落；不是史书里的大事，是每天早晨母亲把棉线挂上 backstrap loom (背带织机)，开始的那个声音。

学界管这一段 Maya 历史叫「Postclassic Maya 分散政体」(Susan Kepecs 2003)。她说得对：分散，但不衰落。我就是这个分散世界里的一个小点。`,
      en: `[This story is a fictional composite, not a biography of a real person.

The name Ix Mutal and this story are constructed from historical sources. She is not a specific individual who existed.

But the population she represents was real: roughly 1 million Yucatán Maya commoner women in the 16th century. Every detail of her life — huipil weaving methods, village scale, epidemic mortality, encomienda tribute, oral transmission — comes from real sources (Cook 1998 / Roys 1957 / Edmonson 1986 / Diego de Landa 1566).

Her name was not preserved, not because she did not matter, but because the colonial archive did not record her.

This method of storytelling is called a "fictional composite." See VocabSpark's Byzantine Topic and Anna the Iconographer for the same approach.]

---

Around 1480, I was born in a village with no famous name in the northern interior of Yucatán. A few days' walk from here, you could see the ruins of Mayapan — walls and plazas that collapsed thirty years earlier, now covered by grass and roots.

The elders said Mayapan fell because of a noble war. By the time I was born, Mayapan was gone. But the Maya were not gone. Yucatán was now about sixteen kuchkabal (dispersed city-states), each governed by a local batab (city-state head), with no single center. Someone on the outside — if anyone on the outside knew we existed — might have called this "decline."

It was not decline.

Dispersal is not the same as collapse. Our markets had cotton cloth, salt, obsidian, honey. Our fields had maize, beans, and squash — what we called the three sisters, planted together to support each other, each growing better than it would alone. My father was a milpa farmer. His harvest fed us and left enough for the ritual feasts.

My mother wove huipil. This was the world I was born into — not an empire, but a village; not the great events of history books, but the sound each morning of my mother hanging cotton thread on the backstrap loom and beginning.

Scholars call this period "Postclassic Maya dispersed polities" (Susan Kepecs 2003). She is right: dispersed, but not in decline. I am one small point in that dispersed world.`,
    },
    deliverGoal: 'N1 — fictionalDisclaimer + c.1480 出生 + Mayapan 崩 30 年后分散政体 + 「分散 ≠ 衰落」反 Whig anchor + 父 milpa 母织 huipil setup',
    engagementHook: '「分散 ≠ 衰落」——你身边有没有什么东西，看起来「散了」，其实还活着？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    fictionalDisclaimer: true,
  },

  // ═══════════════════════════════════════════════════
  // N2 — c.1487, 7 岁 · 开始学织 huipil · 「布是文字」
  // ═══════════════════════════════════════════════════
  {
    id: 'N2',
    title: {
      cn: '布是文字',
      en: 'Cloth is writing',
    },
    setting: {
      time: 'c.1487，7 岁',
      place: 'Yucatán 北部内陆村落，家中织机旁',
      cn: '母亲手把手教织 backstrap loom，纹样是玉米神、Chaac 雨神、双头蛇',
      en: 'Mother teaching backstrap loom by hand, patterns of maize god, Chaac rain deity, double-headed serpent',
    },
    content: {
      cn: `7 岁那年，母亲把我拉到她的 backstrap loom (背带织机) 旁边，说：「该学了。」

背带织机不复杂——一头挂在树上或柱子上，另一头的腰带套住织者的腰，靠身体向后倾斜控制经线的松紧。但学起来并不容易。我头几次把经线缠乱，母亲没骂我，只是重新理顺，说：「再来。」

我学的第一个图案是玉米神——K'awil (卡威尔)——的侧脸轮廓。玉米神的形象在我们 Maya 人的 huipil 上出现了几百年，从古典期 (250-900 CE) 到今天。母亲告诉我：「这不是装饰，这是文字。」

我那时候不懂她的意思。我以为她是说图案「像」文字，后来才明白，她是字面意思——布上的纹样是记录，是叙事，是身份的外壳。

在 huipil 上，我们有玉米神、有 Chaac (恰克, 雨神)——他管雨，管收成，是 Maya 农民最怕也最需要的神——还有双头蛇，象征天地之间的连接。没有统一的「写法」，每个地区的妇女都有自己的一套。但如果你会读这些图案，你就知道一件 huipil 是哪个村子的，哪个家族的，为什么场合织的。

父亲在田里工作。母亲在 huipil 里记录。

Diego de Landa 主教 1562 年在 Maní 一口气烧掉了几千份 Maya 手稿——他烧不掉的，是每一件 huipil 上的纹样，是每一个母亲教女儿的动作。

我 12 岁之前，学会了独立织一件完整的婚礼 huipil。`,
      en: `When I was 7, my mother pulled me beside her backstrap loom and said: "Time to learn."

The backstrap loom is not complicated. One end hangs from a tree or post; the other end has a strap around the weaver's waist, and you control the warp tension by leaning back. But it is not easy to learn. My first tries tangled the warp threads into a mess. My mother did not scold me. She just sorted them out and said: "Again."

The first pattern I learned was the profile of K'awil (the maize god). His image had been appearing on Maya huipil for centuries, from the Classic period (250-900 CE) forward. My mother told me: "This is not decoration. This is writing."

I did not understand her then. I thought she meant the patterns "look like" writing. Later I understood she was being literal — the patterns on cloth are records, narratives, the outer skin of identity.

On the huipil we have K'awil, we have Chaac (the rain deity who controls harvests, the god Maya farmers both feared and depended on), and we have the double-headed serpent, representing the connection between sky and earth. There is no single "standard" rendering. Each village's women have their own system. But if you can read the patterns, you know which village made a huipil, which family, for which occasion.

My father recorded in the milpa field. My mother recorded in the huipil.

Bishop Diego de Landa burned thousands of Maya manuscripts at Maní in 1562. What he could not burn was the patterns on every huipil, or the movement each mother taught her daughter.

Before I was 12, I could weave a complete wedding huipil on my own.`,
    },
    deliverGoal: 'N2 — 7 岁学 backstrap loom + 玉米神 / Chaac / 双头蛇纹样 + 「布是文字」核心命题 + Diego de Landa 1562 烧稿对照',
    engagementHook: '「布是文字」——你身边有没有什么不是文字，但却在「记录」的东西？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N3 — c.1492, 12 岁 · 第一件完整婚礼 huipil · 两个世界的同步
  // ═══════════════════════════════════════════════════
  {
    id: 'N3',
    title: {
      cn: '同一年，两个世界',
      en: 'The same year, two worlds',
    },
    setting: {
      time: 'c.1492，12 岁',
      place: 'Yucatán 北部内陆村落',
      cn: '织出第一件完整婚礼 huipil，同年 Columbus 在 Hispaniola 登陆',
      en: 'First complete wedding huipil completed; same year Columbus lands in Hispaniola',
    },
    content: {
      cn: `大约 1492 年，我 12 岁，织出了第一件完整的婚礼 huipil。

这件 huipil 要穿好几个月——从下聘那天起，新娘家的女性轮流织，主要图案由母亲或祖母决定，但每个人都会加上一段自己的纹样。我加的是 Chaac 的雨点纹——我那年雨季特别顺，觉得是雨神保佑，想把这个记下来。

同一年——1492 年——大西洋彼岸，一个叫 Columbus (哥伦布) 的人从西班牙出发，在一个他以为是亚洲、其实是加勒比海的小岛登陆，把那里叫做 Hispaniola (希斯帕尼奥拉)。

我不知道这件事。

这就是这一节要说的事——不是「世界相遇」，是「两个世界在同一年各自做自己的事，其中一个不知道另一个存在」。

Columbus 那年在海上写航海日志，我在村子里织婚礼 huipil。他找的是黄金和香料贸易路线；我织进布里的是 Chaac 的雨点，是我那年觉得值得记录的事。

他不知道我在。我不知道他在。

但 25 年后，他那一边的东西会沿着船传到我的海岸——先是新面孔，然后是新的病，然后是从未见过的船。到那时候，我已经 37 岁了。

现在是 1492 年。我 12 岁。我刚完成了第一件婚礼 huipil，手指还酸着。`,
      en: `Around 1492, when I was 12, I finished my first complete wedding huipil.

A wedding huipil takes months. From the day of betrothal, the women of the bride's family weave in rotation. The main patterns are decided by the mother or grandmother, but each woman adds her own section. I added a rain-dot pattern for Chaac — that rainy season had been especially good, and I thought it was the rain deity's blessing, so I wanted to record it.

That same year — 1492 — across the Atlantic Ocean, a man named Columbus sailed from Spain and landed on a small island he believed was Asia but was actually in the Caribbean. He called it Hispaniola.

I did not know this.

That is the point of this node — not "worlds meeting," but "two worlds doing their own things in the same year, while one does not know the other exists."

Columbus was at sea that year, writing in a ship's journal. I was in my village, weaving a wedding huipil. He was searching for gold and spice trade routes; what I was weaving into cloth was Chaac's rain dots, the thing I felt worth recording that year.

He did not know I was here. I did not know he was there.

But twenty-five years later, what came from his side of the ocean would travel along ships to my coast — first new faces, then new sickness, then ships no one here had ever seen. By then I would be 37.

Right now it is 1492. I am 12. I just finished my first wedding huipil, and my fingers still ache.`,
    },
    deliverGoal: 'N3 — 12 岁第一件婚礼 huipil + 1492 Columbus 登陆 Hispaniola 同年 + 「两个世界同步，one 不知 other」反 discovery myth',
    engagementHook: '「两个世界同步，互不知道」——你能想到今天还有哪两个世界是这样的关系吗？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N4 — c.1495-1500, 15-20 岁 · 婚姻 · chilam 祭司的 katun 预言
  // ═══════════════════════════════════════════════════
  {
    id: 'N4',
    title: {
      cn: '祭司说：这个 katun 会有外来者',
      en: 'The priest says: this katun will bring outsiders',
    },
    setting: {
      time: 'c.1495-1500，15-20 岁',
      place: 'Yucatán 北部内陆村落',
      cn: '婚，生第一个孩子；村里 chilam 祭司讲 katun 20 年周期预言',
      en: 'Marriage and first child; village chilam priest recites katun 20-year-cycle prophecy',
    },
    content: {
      cn: `大约 15 岁，我嫁给一个同村的男人。他叫什么名字我就不在这里说了——因为我的名字也没有传下来，他的就更没有了。他是个小商人，走村串户卖棉布和盐，有时候走到海边。我们结婚，我生了第一个孩子，是个男孩。

那几年，村里的 chilam (奇拉姆, Maya 祭司-预言者) 是一个白发老人。他不管农业，不管打仗——他管的是时间。

Maya 人用 katun (卡顿) 计时。一个 katun 是 20 年。老 chilam 会念每一个 katun 的「命」——哪个 katun 有旱灾，哪个有疾病，哪个有「外来的 bearded 人从海上来」。

这里需要仔细说一件事：这些预言文本，是 1540 到 1600 年之间用拉丁字母写下来的——也就是在西班牙人已经来了之后才被记录。Matthew Restall 的《Seven Myths of the Spanish Conquest》(2003 Oxford) 提醒：不要把它们读成「Maya 人预知了西班牙人来」——有很大成分是事后合理化 (retrospective rationalization)，把已经发生的事套进旧预言框架。

但 katun 周期论本身是真的——Maya 人确实有这套 20 年为一周期的历史哲学，会用它解释当下（Restall 2003）。

我小时候听老 chilam 念。我不全懂，但我记得那个意象：「外来 bearded 人」，从海上来，在某个 katun 降临。

我那时候 15 到 20 岁，刚结婚，刚有孩子。我记下了这个意象，但我不懂它是什么意思。

我以为那是很久以后的事。`,
      en: `Around the age of 15, I married a man from the same village. I will not give his name here — since my own name did not survive, his certainly did not. He was a small trader who traveled between villages selling cotton cloth and salt, sometimes reaching the coast. We married, and I gave birth to our first child, a boy.

Around those years, the chilam (Maya priest-prophet) in our village was an old man with white hair. He did not manage farming or warfare — he managed time.

The Maya count time in katun (20-year cycles). The old chilam would recite the "nature" of each katun — which brings drought, which brings disease, which brings "bearded outsiders arriving from the sea."

One thing must be said carefully here: these prophetic texts were written down in Latin letters between 1540 and 1600, after the Spanish had already arrived. Matthew Restall's Seven Myths of the Spanish Conquest (Oxford 2003) warns against reading them as "Maya people foresaw the Spanish coming" — much of it is retrospective rationalization, fitting events that already happened into old prophetic frameworks.

But the katun-cycle worldview itself was real — the Maya genuinely had this philosophy of history built around 20-year periods, and used it to interpret the present (Restall 2003).

As a child I heard the old chilam recite. I did not understand all of it, but I held onto one image: "bearded outsiders," coming from the sea, arriving in some katun.

I was 15 to 20, newly married, newly a mother. I stored the image without knowing what it meant.

I thought it was a very long time away.`,
    },
    deliverGoal: 'N4 — 婚 + 第一个孩子 + chilam 祭司 katun 预言 + careful framing (Restall 2003 事后合理化警告) + katun 传统是真的',
    engagementHook: '「事后合理化」——你有没有做过一件事，事后给它编了一个「早就预料到了」的故事？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N5 — 1517.2, 37 岁 · Hernández de Córdoba · 「第一次接触，Maya 赢」
  // ═══════════════════════════════════════════════════
  {
    id: 'N5',
    title: {
      cn: '从未见过的船，但我们赢了',
      en: 'Ships never seen before — but we won',
    },
    setting: {
      time: '1517 年 2 月，37 岁',
      place: 'Yucatán 北部，Cape Catoche 沿海到内陆村落',
      cn: 'Hernández de Córdoba 3 艘船到 Cape Catoche；Maya 击退，Hernández 死于伤',
      en: 'Hernández de Córdoba\'s three ships reach Cape Catoche; Maya repel them, Hernández dies of wounds',
    },
    content: {
      cn: `1517 年 2 月，消息从海边传来：有人看到了从未见过的船。

不是沿海贸易的独木舟，不是我们熟悉的任何船型。三艘大得不像话的船，从东边海上来，在 Cape Catoche (卡托切角) 北岸附近停下来。从船上下来的人：皮肤浅，脸上有厚毛，穿着像乌龟壳一样硬的东西，说我们谁都听不懂的语言。

沿海的 Maya 人不知道该怎么对待他们。先试着接触，发现来者不善——于是打。

Maya 人用弓箭和投石弹，把那个叫 Hernández de Córdoba (埃尔南德斯·德·科尔多瓦) 的船长打成重伤，西班牙人撤回船上，回了 Cuba (古巴)，Hernández 几周后死于伤口。

第一次接触，Maya 「赢」了。

消息传到我们村的时候，已经是几周后。村里人你一句我一句地说：「从未见过的船。」「皮肤浅的人。」「穿着像铁一样的东西。」「我们把他们打跑了。」

我那年 37 岁，三个孩子，丈夫刚从海边回来，也带了同样的消息。我记住了那个形象——「从未见过的船」。

我想到小时候老 chilam 说的话：「外来 bearded 人，从海上来。」

但我们打跑他们了。所以，也许不是那个 katun。

我继续织 huipil。`,
      en: `In February 1517, news came from the coast: people had seen ships no one had ever seen before.

Not the trading canoes of the coast, not any familiar hull shape. Three enormous ships from the east, stopping near the north shore at Cape Catoche. The people who came off them had pale skin, thick hair on their faces, wore something as hard as turtle shells, and spoke a language no one recognized.

The coastal Maya did not know how to treat them. They tried an approach first, found the newcomers hostile — so they fought.

Maya fighters used bows and sling-stones. They wounded the captain, a man named Hernández de Córdoba, badly enough that the Spanish retreated to their ships and sailed back to Cuba. Hernández died of his wounds a few weeks later.

The first contact: the Maya "won."

By the time the news reached our village, it had traveled several weeks. People talked over each other: "Ships no one has ever seen." "Men with pale skin." "Wearing something like iron." "We drove them off."

I was 37 that year, with three children. My husband had just come back from the coast carrying the same news. I kept the image in my mind — "ships no one had ever seen."

I thought of what the old chilam used to say: "Bearded outsiders, coming from the sea."

But we had driven them off. So maybe this was not that katun yet.

I kept weaving.`,
    },
    deliverGoal: 'N5 — 1517.2 Hernández de Córdoba 3 艘船 Cape Catoche + Maya 击退 Hernández 死 + receiving-end 视角：消息口耳相传 + 「Maya 赢了」的暂时性安慰',
    engagementHook: '「我们赢了，所以也许不是那个 katun」——你有没有过这种把坏消息往后推的时刻？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N6 — 1518-1520, 38-40 岁 · 第一波天花 · Black Death cross-ref
  // ═══════════════════════════════════════════════════
  {
    id: 'N6',
    title: {
      cn: '这病只杀我们',
      en: 'This sickness only kills us',
    },
    setting: {
      time: '1518-1520，38-40 岁',
      place: 'Yucatán 北部内陆村落',
      cn: '第一波天花从 Hispaniola / Cuba 沿船传到 Yucatán 海岸，再到内陆',
      en: 'First smallpox wave carries from Hispaniola/Cuba along ships to Yucatán coast, then inland',
    },
    content: {
      cn: `1518 年起，另一种东西随船传来了——我们没有名字叫它，因为我们从未见过它。

后来我知道汉语管它叫「天花」。那时候我们只知道：人开始发高烧，皮肤上长出脓包，一个接一个死。

我的两个孩子死了。大儿子先死，烧了三天，第四天早上没了。小女儿两周后死，脸上的疹子密得没有空隙。

邻村——我们往西走半天路的那个——空了一半。一个秋天，800 个人的村落能剩多少？我不知道确切数字，但我知道我走过去找人借农具，叫了三声没人应。

Noble David Cook 在《Born to Die》(1998, Cambridge) 里计算：1518 到 1600 年间，美洲原住民因欧亚病原体死亡率 80 到 95%。这是一个现在学界接受的估算范围。

我那时候不知道数字，但我看出了一件事：这病只杀我们，不杀 bearded 人。

同一批病——1347 年从中亚传到欧洲的黑死病 (Black Death，参见 VocabSpark Black Death Topic)——1518 年从 Hispaniola 传到 Maya 海岸 (William McNeill《Plagues and Peoples》1976)。规律完全一样：新病原，加上一个从未接触过、完全没有免疫的人群，加上高密度接触——死亡率高得让人说不出话。Black Death 杀了欧洲 25 到 50%；天花在美洲的死亡率是 80 到 95%。差别是：欧洲人有时间建立部分免疫；我们同时遭遇几十种新病原，没有任何缓冲。

我丈夫生病，高烧一周，活下来了。我和我的一个女儿也活下来了，我到现在不明白为什么。

我埋了我的两个孩子。那年我 38 到 40 岁。`,
      en: `From 1518, something else traveled along the ships — something we had no name for, because we had never seen it before.

Later I learned the word: smallpox. At the time all we knew was this: people began burning with fever, pustules rose across their skin, and they died one after another.

Two of my children died. My older son went first — three days of fever, gone by the fourth morning. My younger daughter followed two weeks later, her face covered in rashes so dense there was no open skin between them.

The village half a day's walk west of us — it went half-empty. In one autumn season, how many people could a village of 800 have left? I do not know the exact count, but I know I walked there to borrow a tool and called out three times with no answer.

Noble David Cook, in Born to Die (Cambridge 1998), calculates that between 1518 and 1600, indigenous Americans died of Eurasian pathogens at rates of 80 to 95 percent. This is the range now accepted by scholars.

I did not know numbers then. But I saw one thing clearly: this sickness only kills us. Not the bearded ones.

The same class of disease — the Black Death (黑死病) that moved from Central Asia to Europe in 1347 (see VocabSpark Black Death Topic) — moved from Hispaniola to the Maya coast in 1518 (William McNeill, Plagues and Peoples, 1976). The pattern is identical: a new pathogen, a population with zero immunity, high-density contact — mortality rates too large to speak aloud. Black Death killed 25 to 50 percent of Europe. Smallpox killed 80 to 95 percent of us. The difference: European survivors had time to build partial immunity; we faced dozens of new pathogens at once, with no buffer at all.

My husband got sick. He burned for a week and survived. My one remaining daughter and I survived too. I still do not understand why.

I buried two of my children. I was 38 to 40 years old.`,
    },
    deliverGoal: 'N6 — 1518-1520 第一波天花 + 两个孩子死 + Cook 1998 死亡率 80-95% + 跨 Topic ⭐ McNeill 1976 Black Death 同 pattern + 「只杀我们」receiving-end 观察',
    engagementHook: '「这病只杀我们」——一个 38 岁的人，怎么理解一件她完全没有语言框架去解释的事？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N7 — 1521.11, 41 岁 · 跨 lens 锁定 #1 · Tenochtitlán 陷落
  // ═══════════════════════════════════════════════════
  {
    id: 'N7',
    title: {
      cn: '1521 年 11 月，消息到了我们村',
      en: 'November 1521, the news reaches our village',
    },
    setting: {
      time: '1521 年 11 月，41 岁',
      place: 'Yucatán 北部内陆村落',
      cn: '沿海贸易商带来 Tenochtitlán 8 月陷落消息；跨 lens 锁定 #1 接 Malintzin (Lens 2) N9',
      en: 'Coastal traders bring news of Tenochtitlán\'s August fall; cross-lens lock #1 connecting Malintzin (Lens 2) N9',
    },
    content: {
      cn: `1521 年 8 月 13 日，在距我们 1500 公里外的 Tenochtitlán (特诺奇蒂特兰，一座建在湖中央岛上的大城)，Aztec (阿兹特克) 最后一位王 Cuauhtémoc (夸乌特莫克) 被一个叫 Cortés (科尔特斯) 的 bearded 人抓住。

那天，城里有一个叫 Malintzin (玛琳茨恩) 的 Maya 女人——她是 Cortés 的翻译，她站在 Cortés 旁边，把 Cuauhtémoc 的话翻成西班牙语。

就是那一天，就是那一刻：Malintzin 在 Tenochtitlán 翻译 Cuauhtémoc 的投降。1500 公里外，我在 Yucatán 内陆的村子里——什么都不知道。

11 月，消息沿着 Yucatán 海岸的贸易网络传来。我丈夫那年在海边做生意，跟着消息回来了。他站在门口，说：「北边有一座大湖中间的城，叫 Mexica 人的城。bearded 人把它烧了，把湖水染红了，把城里的王抓了。」

村里长老听完，没有立刻说话。沉默了很久。然后说：「准备粮食。」

我丈夫说——那天晚上，我们在家里——「白胡须的人会再来。不是会不会，是什么时候。」

我那年 41 岁。我有一个还活着的女儿。我的两个孩子已经埋了。我丈夫说「不是会不会，是什么时候」的时候，我没有说话。

我去把手上的 huipil 经线拢紧了一下，继续织。`,
      en: `On August 13, 1521, 1,500 kilometers from where I stood, in the city of Tenochtitlán built on an island in the middle of a lake, the last Aztec king, Cuauhtémoc, was seized by a bearded man named Cortés.

That day, inside the city, there was a Maya woman named Malintzin — Cortés's translator — standing beside him, turning Cuauhtémoc's words into Spanish.

That exact day, that exact moment: Malintzin in Tenochtitlán translating Cuauhtémoc's surrender. 1,500 kilometers away, I was in our Yucatán village — knowing nothing.

In November, news traveled along the Yucatán coastal trading networks. My husband had been on the coast doing business; he came home with the news. He stood at the door and said: "There was a great city on a lake to the north, the city of the Mexica people. The bearded ones burned it, turned the lake red, and seized the king."

The village elders heard it out, said nothing for a long time. Then: "Store food."

That night at home, my husband said: "The white-bearded ones will come back. Not whether — when."

I was 41 that year. I had one surviving daughter. Two of my children were already in the ground. When my husband said "not whether, when," I did not speak.

I gathered the warp threads of the huipil in my hands and kept weaving.`,
    },
    deliverGoal: 'N7 — 跨 lens 锁定 #1: 1521.8.13 Malintzin 翻译 Cuauhtémoc 投降同一天 + 1500km 外 Ix Mutal 什么都不知道 + 11 月消息才到 + 「不是会不会，是什么时候」',
    engagementHook: '「不是会不会，是什么时候」——你有没有经历过一个你知道要来、但不知道何时到来的改变？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N8 — 1527, 47 岁 · Montejo 第一次远征 · huipil 作为抵抗载体
  // ═══════════════════════════════════════════════════
  {
    id: 'N8',
    title: {
      cn: '布上的星历，是我们的记录',
      en: 'The star-calendar on cloth is our record',
    },
    setting: {
      time: '1527 年，47 岁',
      place: 'Yucatán 北部内陆村落，难民涌入',
      cn: 'Montejo 第一次远征到北岸（失败）；难民从北边涌来；Ix Mutal 织 huipil 给难民',
      en: 'Montejo\'s first expedition reaches north coast (fails); refugees stream south; Ix Mutal weaves huipil for refugees',
    },
    content: {
      cn: `1527 年，Francisco de Montejo (蒙特霍) 带着西班牙征服许可登陆 Yucatán 北岸——他想做对 Aztec 和 Inca 做过的事。

他没做到。Yucatán 不是 Tenochtitlán，没有一个可以拿下就全盘崩塌的中心首都。Yucatán 是 16 个分散的 kuchkabal (Roys 1957)，你打下一个，还有 15 个，而且没有黄金诱惑，没有好水，热带病到处是。Montejo 1535 年彻底放弃——这一次，我们又「赢了」。

但难民开始从北边往南涌。

我们村里来了 30 个人，带着伤，带着病，带着只有棉布遮身的孩子。粮食立刻吃紧。

我开始织 huipil 给难民。

不是因为怜悯——是因为我爷爷教过我一句话：「衣服上的图案是文字。我们没纸，但我们有布。布会被穿，被传，被记住。」

我织进那批 huipil 的图案，是我们村的 Postclassic Maya 星历纹样——哪个方向是金星 (Venus) 的升起位置，哪个月份属于 Chaac 的雨，哪个纹样代表某年某地的玉米丰收。这些不是装饰，是我们的历法。

我不知道这些 huipil 后来去了哪里。但我知道一件事——17 世纪到 20 世纪 Maya 抵抗运动里，这些纹样反复出现 (Cook 1998)。2025 年 Yucatán 的妇女在市集卖的 huipil，上面还有这些纹样。

布活过了 Montejo。`,
      en: `In 1527, Francisco de Montejo landed on the northern Yucatán coast with Spanish authorization to conquer — intending to do to Yucatán what had been done to the Aztec and Inca.

He did not succeed. Yucatán was not Tenochtitlán. There was no single capital whose fall would collapse everything. Yucatán was sixteen dispersed kuchkabal (Roys 1957). You took one; fifteen remained, and there was no gold to motivate anyone, no reliable water, and tropical disease everywhere. Montejo gave up entirely in 1535. This time we had "won" again.

But refugees began moving south from the north.

Our village received thirty people — wounded, sick, with children covered only by cloth strips. Food became tight immediately.

I started weaving huipil for the refugees.

Not out of pity — because my grandfather had taught me something: "The patterns on clothes are writing. We have no paper, but we have cloth. Cloth gets worn, passed on, remembered."

The patterns I wove into that batch of huipil were our village's Postclassic Maya star-calendar marks — which direction marks Venus rising, which month belongs to Chaac's rain, which pattern records a good maize harvest in a particular year and place. These were not decoration. They were our calendar.

I do not know where those huipil went afterward. But I know one thing — from the 17th through the 20th centuries, these patterns kept appearing in Maya resistance movements (Cook 1998). The huipil sold in Yucatán markets today still carry them.

The cloth outlasted Montejo.`,
    },
    deliverGoal: 'N8 — 1527 Montejo 第一次远征失败 + 难民 30 人 + 织 huipil 给难民 + Postclassic 星历纹样 + 17-20 世纪 Maya 抵抗运动里反复出现 + 「布活过了 Montejo」',
    engagementHook: '「布活过了 Montejo」——你能想到有什么平凡的东西，比「大事件」活得更久？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N9 — 1530s, 50-55 岁 · 第二波天花 + 麻疹 · 记忆断链
  // ═══════════════════════════════════════════════════
  {
    id: 'N9',
    title: {
      cn: '老人几乎全没了',
      en: 'Almost all the elders were gone',
    },
    setting: {
      time: '1530 年代，50-55 岁',
      place: 'Yucatán 北部内陆村落',
      cn: '第二波天花 + 麻疹叠加；村 800 人 → 150 人；丈夫 1533 死于麻疹；老人几乎全没',
      en: 'Second wave: smallpox plus measles; village 800 → 150; husband dies of measles 1533; almost all elders gone',
    },
    content: {
      cn: `1530 年代，第二波来了。

这次是天花和麻疹一起——两种病叠着走，像两把刀同时砍。

我们村 1500 年前后大约有 800 人。1540 年前后，我估计剩了 150 人。这个数字是 Noble David Cook (1998) 在考古遗址分析中估算出来的同类村落数据，我自己当然没数过——我只是看到空了的家，数了数还在的人。

80% 死亡。

我丈夫 1533 年死于麻疹。他发烧三天，第四天早上安静地走了。我那年 53 岁，只剩一个女儿。

但最让我觉得害怕的，不是死亡本身——是老人全没了。

我们村的老人是什么？他们是历法。他们记得哪一年的 katun 节点发生了什么，记得家族系谱，记得 chilam 祭司世代口传的星历和仪式。他们的脑子里装着的，就是还没来得及写下来的 Chilam Balam。

老人一旦死了，那些记忆就没有了。

一代人的记忆，10 年里断了链。

这就是殖民接触真正的破坏——不只是人死了，是人死之前脑子里那些没法写在石头上的知识一起消失了。Diego de Landa 1562 年烧手稿；但这里，1533 到 1540 年代，无声的火，一个老人一个老人地把我们的记忆带走了。

我活下来，是因为部分人有部分免疫——学界后来才弄清楚为什么。我那时候只知道我活下来了，而我的丈夫没有。`,
      en: `In the 1530s, the second wave came.

This time smallpox and measles together — two diseases running side by side, like two blades cutting at once.

Our village had perhaps 800 people around 1500. By around 1540, I estimate about 150 remained. This figure is drawn from Noble David Cook's (1998) analysis of comparable village-level archaeological sites; I did not count myself — I only saw the empty houses and counted the faces still present.

Eighty percent dead.

My husband died of measles in 1533. Three days of fever, then gone quietly by the fourth morning. I was 53. I had one daughter left.

But what frightened me most was not death itself — it was that almost all the elders were gone.

What were our village elders? They were the calendar. They remembered which katun period had brought which events. They held the family genealogies, the chilam's generations of oral star-charts and ritual sequences. What was inside their minds was the Chilam Balam that had not yet been written down.

Once the elders died, that knowledge died with them.

A generation's memory, broken in ten years.

This is the true damage of colonial contact — not only that people died, but that the knowledge in their minds, the kind that cannot be carved in stone, vanished with them. Diego de Landa burned manuscripts in 1562; but here, in the 1530s and 1540s, a silent fire took our memory one elder at a time.

I survived because some people carry partial immunity — scholars only figured out why later. At the time all I knew was that I had survived, and my husband had not.`,
    },
    deliverGoal: 'N9 — 1530s 第二波天花 + 麻疹 + 村 800→150 人 80% 死亡 + 丈夫 1533 死 + 「老人几乎全没」= 记忆断链 + Cook 1998',
    engagementHook: '「脑子里的东西，比写在石头上的更难传下去」——你能想到什么知识是只能靠人传的吗？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N10 — 1542, 62 岁 · Mérida 立基 · encomienda · 双重生活
  // ═══════════════════════════════════════════════════
  {
    id: 'N10',
    title: {
      cn: '我学了几个西班牙词，但我只跟孙女说 Maya 语',
      en: 'I learned a few Spanish words, but I only spoke Maya with my granddaughter',
    },
    setting: {
      time: '1542 年，62 岁',
      place: 'Yucatán 北部内陆村落，划入 encomienda 系统',
      cn: 'Mérida 立基，村落划入 encomienda；encomendero 派人收贡赋；Ix Mutal 表面服从，内部传承',
      en: 'Mérida founded, village assigned to encomienda; encomendero\'s agent collects tribute; Ix Mutal outward compliance, inward transmission',
    },
    content: {
      cn: `1542 年，Francisco de Montejo el Mozo (小蒙特霍，他父亲的儿子) 在 Maya Tihó 城的旧址建起了 Mérida (今天 Yucatán 州首府)。我们村被划入 encomienda (恩科米达, 西班牙殖民土地制度) 系统。

encomienda 是这样运作的：一个 encomendero (领主) 在 Mérida 拿到文件，说他「负责」我们村的 Maya 人的宗教教化和管理——换取的是，我们每年要缴纳贡赋。那个领主我从来没见过，但他每年派一个人来，说几个词，列清单，然后收走：玉米、棉布、蜂蜜、火鸡。

我那年 62 岁，按 Postclassic Maya 平民女性的平均寿命算，我早就超出预期了。

我学了几个 Spanish (西班牙语) 词——señor (大人), tributo (贡赋), Dios (上帝)——够应付来收贡赋的人就行了。当着他们的面，我叫「señor」，我数好了玉米和棉布，我低着头。

但他们走了之后，我只跟我女儿和孙女说 Yucatec Maya (尤卡坦玛雅语)。

我织 huipil 的时候讲老故事——Chaac 的雨，玉米神 K'awil 的诞生，katun 周期里哪些年份什么事情发生。孙女坐在旁边看着我的手，学着纹样，听着故事。

这就是我 1542 年之后的生活：表面上纳贡，内部传承。两种语言，两套规则，两个世界，在我一个人身上同时运转。

这不是抵抗——这是活着。`,
      en: `In 1542, Francisco de Montejo el Mozo (the Younger, son of the previous Montejo) founded Mérida on the ruins of the Maya city of Tihó. Our village was assigned to the encomienda system.

Encomienda worked like this: an encomendero (lord) received documents in Mérida stating he was "responsible" for the religious instruction and administration of our village's Maya people — in exchange for which we owed annual tribute. I never saw that lord. But each year he sent someone who spoke a few words, made a list, and collected: maize, cotton cloth, honey, turkeys.

I was 62 that year. By the average life expectancy of a Postclassic Maya commoner woman, I had already outlasted expectations.

I learned a few Spanish words — señor (lord), tributo (tribute), Dios (God) — just enough to get through the tribute-collector's visit. In front of them, I said "señor," I counted out the maize and cloth, I kept my eyes down.

But when they left, I only spoke Yucatec Maya with my daughter and granddaughter.

Weaving huipil, I told the old stories — Chaac's rain, the birth of the maize god K'awil, which years in the katun cycle brought what events. My granddaughter sat beside me watching my hands, learning the patterns, listening to the stories.

This was my life after 1542: tribute outwardly, transmission inwardly. Two languages, two sets of rules, two worlds running simultaneously in one person.

This was not resistance. This was living.`,
    },
    deliverGoal: 'N10 — 1542 Mérida 立基 + 村划入 encomienda + encomendero 贡赋系统 + 学几个 Spanish 词 + 「只跟孙女说 Maya 语」+ 双重生活 = 「活着不是抵抗，是生存方式」',
    engagementHook: '「两种语言，两套规则，在同一个人身上同时运转」——你有没有过这种双重生活的感觉？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N11 — 1545, 65 岁 · 死 · 无名 · expectsRealAnswer: true
  // ═══════════════════════════════════════════════════
  {
    id: 'N11',
    title: {
      cn: '印第安女性，老，死于咳嗽',
      en: 'Indian woman, old, died of cough',
    },
    setting: {
      time: '1545 年，65 岁',
      place: 'Yucatán 北部内陆村落 / Mérida 教区档案',
      cn: 'Ix Mutal 死；Mérida 教区档案一行记录；无名',
      en: 'Ix Mutal dies; one line in the Mérida parish registry; no name',
    },
    content: {
      cn: `1545 年，我死了。65 岁，冬天，咳嗽了很久，然后不咳了。

Mérida 教区档案里有一行：「印第安女性，老，死于咳嗽。」

没有名字。

这不是疏忽——是制度。殖民档案记 encomendero 的名字，记神父的名字，记军官的名字，记「印第安女性」的数量，但不记她们的名字。她们是贡赋清单里的人头数，不是有名字的个人。

我的名字叫 Ix Mutal Ahaw——但这个名字是现代学者根据 Yucatán 地名和 Maya 女性命名传统给我取的（这是虚构 composite 的一部分，Edmonson 1986 的翻译给了我们一个框架）。没有档案记它。

我死的时候，我女儿在旁边。我孙女在旁边。我的 huipil 在旁边——最后一件没织完的，经线还挂在 backstrap loom 上。

学界把这种模式叫做「institutional survival, personal erasure」——机构活了，个人的故事消失了（参见 VocabSpark Scientific Revolution Topic 的 Maria Kirch：天文机构传下来了，她的名字没传下来）。

我的情况是：Maya 语言活了。huipil 的纹样活了。Chilam Balam 的口传记忆，部分通过我女儿、孙女、曾孙女传了下去，17 世纪被人用拉丁字母写进文本。

我的名字没传下来。

---

在我死后，你（读这段文字的 7 年级学生）看到的是什么？

你觉得一个人没有名字，是否意味着她「不重要」？为什么？`,
      en: `In 1545, I died. I was 65. Winter. A long cough, then it stopped.

The Mérida parish registry contains one line: "Indian woman, old, died of cough."

No name.

This was not an oversight — it was the system. Colonial records kept the encomendero's name, the priest's name, the officer's name. They kept the count of "Indian women." They did not keep the women's names. The women were headcounts on tribute lists, not individuals with names.

My name is Ix Mutal Ahaw — but this name was given to me by modern scholars drawing on Yucatán place-names and Maya women's naming traditions (this is part of the fictional composite; Edmonson 1986's translations give us a framework). No archive recorded it.

When I died, my daughter was beside me. My granddaughter was beside me. My huipil was beside me — the last one, unfinished, warp threads still hanging on the backstrap loom.

Scholars call this pattern "institutional survival, personal erasure" — the institution survived, the individual story vanished. (See VocabSpark Scientific Revolution Topic's Maria Kirch: the astronomical institution was transmitted; her name was not.)

In my case: the Maya language survived. The huipil patterns survived. The oral memory of Chilam Balam, part of it passed through my daughter, granddaughter, great-granddaughter, and in the 17th century someone wrote it into texts using the Latin alphabet.

My name was not passed down.

---

After my death, what do you (the 7th-grade reader of this passage) see?

Do you think a person without a name is therefore "unimportant"? Why or why not?`,
    },
    deliverGoal: 'N11 — 1545 死，65 岁 + 教区档案「印第安女性，老，死于咳嗽」无名 + 制度性抹除 + Maria Kirch cross-ref + 「机构活了，个人消失了」+ 反思问题',
    engagementHook: '「无名不等于无声」——你认为这句话是真的吗？为什么？',
    expectsRealAnswer: true,
    nodeType: 'receiving-end',
  },

  // ═══════════════════════════════════════════════════
  // N12 — 1545 → 21c · Closing · 「我没有名字，但我有声音」
  // ═══════════════════════════════════════════════════
  {
    id: 'N12',
    title: {
      cn: '我没有名字，但我有声音',
      en: 'I have no name, but I have a voice',
    },
    setting: {
      time: '1545 → 21 世纪',
      place: 'Yucatán → 现代 / 你现在坐着的地方',
      cn: '从 Ix Mutal 之死，经孙女、曾孙女、17 世纪 Chilam Balam 文本、Edmonson 1986，到 21 世纪 7 年级课堂',
      en: 'From Ix Mutal\'s death, through granddaughter, great-granddaughter, 17c Chilam Balam texts, Edmonson 1986, to 21c Grade 7 classroom',
    },
    content: {
      cn: `我死于 1545 年。我的名字不在任何档案里。

但我孙女教她的孙女织 huipil。

5 个世纪后，21 世纪的 Yucatán，约 150 万人说 Yucatec Maya 语，Yucatán 妇女在市集上卖的 huipil，上面的星历纹样是我这一代织进去的（Edmonson 1986）。Itzá Maya——那个住在 Lake Petén 中央岛屿上的 Maya 城邦——撑到了 1697 年 3 月 13 日，才被 Martín de Ursúa 攻破。

算一下：Aztec 1521 年陷落，Inca 1533 年陷落，Itzá 1697 年陷落——Maya 城邦比 Aztec 多抵抗了 176 年。1697 年是什么时候？Newton 的《Principia》已经出版 10 年，中国康熙帝在位，北美 13 殖民地已经成形。Maya 不是第一个衰落的，Maya 是抵抗最久的。

这是反 Whig (反胜利者叙事) 最重要的那一条：「Maya 文明」没有消失。它变形了，它被压缩了，它的名字被从档案里抹掉了——但它没有消失。它在布的纹样里，在 Yucatec Maya 语的句子里，在 Chilam Balam 的某一段话里。

Munro Edmonson 1986 年出版《Heaven Born Merida and Its Destiny: The Book of Chilam Balam of Chumayel》(University of Texas Press)。他在引言里说：「这些文本不是 Maya 精英的史诗，是村落的集体记忆——哪个老妇女讲的哪一句，我们不知道，但她们的句子在文本里。」

你在 7 年级课堂上读 Edmonson 翻译的句子时，你听到的不是「一个文明」。你听到的是一个 65 岁的老妇女在 1540 年代某个夜里，一边织 huipil，一边跟孙女说的话。

她不知道她的话会传 5 个世纪。她只知道她的孙女在旁边，在听。

比较一下：Sorghaghtani Beki（索尔哈克塔尼·别吉）是 13 世纪 Mongol 帝国里一个让四个儿子都当上可汗的女人，她的名字写进了 Marco Polo 的游记——她「留名了」。Maria Kirch 是 18 世纪柏林天文台的实际天文学家，发现了一颗彗星，档案里只写了她丈夫的名字——她「无名了」。Ix Mutal 连 Maria Kirch 那样的「我发现了但功劳算别人的」都没有——她的整个生命在档案里就是一行数字。

但 Sorghaghtani 的名字留在了书里；Ix Mutal 的声音留在了布里和口传里。500 年后，哪个更难被抹掉？

我没有名字。

但我有声音。

---

你现在读完了这 12 节 Ix Mutal 的故事。她是一个虚构 composite——但她代表的 100 万 Maya 平民女性是真实的。

你觉得：历史里「有名字的人」和「没有名字的人」，哪一类更多？他们各自留下了什么？`,
      en: `I died in 1545. My name is in no archive.

But my granddaughter taught her granddaughter to weave huipil.

Five centuries later, in the 21st century, about 1.5 million people in Yucatán speak Yucatec Maya. The huipil sold in Yucatán markets still carry the star-calendar patterns my generation wove in (Edmonson 1986). The Itzá Maya — the city-state on an island in Lake Petén — held out until March 13, 1697, when Martín de Ursúa's combined force broke through.

Think about the numbers: the Aztec fell in 1521, the Inca fell in 1533, the Itzá fell in 1697 — Maya city-states resisted 176 years longer than the Aztec. What was 1697? Newton's Principia had been published ten years earlier; the Kangxi Emperor was on the Chinese throne; the thirteen North American colonies were already mature. The Maya were not the first to decline. They were the last to resist.

This is the most important anti-Whig point: "Maya civilization" did not disappear. It was transformed, compressed, had its names removed from archives — but it did not vanish. It lives in cloth patterns, in Yucatec Maya sentences, in a passage of the Chilam Balam.

Munro Edmonson published Heaven Born Merida and Its Destiny: The Book of Chilam Balam of Chumayel (University of Texas Press) in 1986. In his introduction he writes: "These texts are not the epics of a Maya elite; they are the collective memory of villages — we do not know which old woman said which sentence, but their sentences are in the text."

When you, in a 7th-grade classroom, read a sentence translated by Edmonson, what you hear is not "a civilization." You hear what a 65-year-old woman said to her granddaughter on some night in the 1540s, while weaving a huipil.

She did not know her words would travel five centuries. She only knew her granddaughter was beside her, listening.

Consider the comparison: Sorghaghtani Beki was a 13th-century Mongol woman whose four sons each became a khan; Marco Polo wrote her name into his travels — she "has a name." Maria Kirch was an 18th-century Berlin astronomer who discovered a comet and was recorded in the archive only under her husband's name — she was "nameless." Ix Mutal did not even have a "I discovered it but the credit goes to someone else" situation — her entire life in the colonial archive is one row of numbers.

But Sorghaghtani's name lives in books; Ix Mutal's voice lives in cloth and oral tradition. Five hundred years later, which is harder to erase?

I have no name.

But I have a voice.

---

You have just read all twelve nodes of Ix Mutal's story. She is a fictional composite — but the one million Maya commoner women she represents were real.

What do you think: in history, which group is larger — people with names, or people without names? What did each group leave behind?`,
    },
    deliverGoal: 'N12 closing — 孙女教孙女 huipil + 21c 150万 Maya speaker + Itzá 1697 (176年) 反 Whig + Edmonson 1986 Chilam Balam 口传 + Sorghaghtani / Maria Kirch 跨文明对比 + 「我没有名字，但我有声音」',
    engagementHook: '「有名字的人」vs「没有名字的人」——哪一类在历史里更多？他们各自留下了什么？',
    expectsRealAnswer: true,
    nodeType: 'receiving-end',
  },

];
