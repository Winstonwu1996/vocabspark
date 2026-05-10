// Pre-Columbian T5 — Lens 2: Malintzin / La Malinche
// lonely-mediator | Nahua translator | c.1500-1529
//
// Topic: T5 Pre-Columbian Americas 1000-1532
// Grade 7 Story-First Pedagogy v2
//
// 来源:
//   - Camilla Townsend, Malintzin's Choices (University of New Mexico Press, 2006)
//   - Bernal Díaz del Castillo, Historia verdadera de la conquista de la Nueva España (1568)
//   - Matthew Restall, Seven Myths of the Spanish Conquest (Oxford, 2003)
//   - Hugh Thomas, Conquest (Simon & Schuster, 1993)
//   - Ross Hassig, Aztec Warfare (University of Oklahoma Press, 1988)
//   - Inga Clendinnen, Aztecs: An Interpretation (Cambridge, 1991)
//   - Noble David Cook, Born to Die: Disease and New World Conquest (Cambridge, 1998)
//
// 反 Whig: Malintzin 不是叛徒也不是英雄；她是在极端受限条件下做选择的人
// 12 条铁律 + 第 12 条 (expectsRealAnswer 默认 false / N11+N12 设为 true)
// em-dash 规范: 单段内——最多 3 个

export var lensId = 'malintzin-mediator';
export var lensName = 'Malintzin / La Malinche';
export var lensNameCn = '马林钦 / 玛利纳';
export var lensRole = 'lonely-mediator';
export var lensDescription = 'Nahua 翻译者，1519-1521 站在 Cortés 与 Moctezuma 之间，两边都不完全属于';
export var defaultLens = false;

export var storyboard = [
  {
    id: 'N1',
    title: {
      cn: '边境出身就是命运',
      en: 'Born on the border',
    },
    setting: {
      time: 'c.1500（Townsend 2006 估计 1500-1502 出生概率最高，c.1500 是中值）',
      place: 'Coatzacoalcos，今 Veracruz 与 Tabasco 交界低地',
      cn: '约公元 1500 年，Coatzacoalcos，Aztec 帝国东南边境',
      en: 'c. 1500, Coatzacoalcos, southeastern frontier of the Aztec empire',
    },
    content: {
      cn: `我最早的记忆是两种声音。

白天，父亲身边的人说 Nahuatl——我们家族的语言，也是 Tenochtitlán 大城的语言，整个 Aztec 帝国的官话。晚上，从河南边传来的声音不一样，是 Chontal Maya 的语调，更低沉，辅音更多，像是雨季里的青蛙叫声。我住的 Coatzacoalcos 就在这条语言的分界线上——北边是 Nahuatl 村子，南边是 Maya 村子，中间是我家。

父亲是这里的 cacique，贵族领主。我不会忘记他的样子：他在地界争端里发言，两边的人都听；他去 Tenochtitlán 朝贡，穿着棉甲，带着玉器和可可豆。我在贵族家庭里出生，这意味着我不用下地，可以学，可以听大人谈论远方的事。

我懂事的那几年，Tenochtitlán 的 Moctezuma II 刚刚即位不久，是 Aztec 帝国最鼎盛的时候。帝国控制超过 500 万人口，首都 Tenochtitlán 的人口在 20 万到 25 万之间，比欧洲任何城市都大。这些我当时不知道——我只是一个 Coatzacoalcos 边境上的小女孩，在两种语言里玩耍。

那时候我不知道「边境」意味着什么。后来我才懂：边境不是你可以选择的东西，边境就是你是谁的一部分。两种语言在我脑子里住下来，我以为这是普通的。我不知道这两种语言会变成我唯一能用来活下去的东西。

8 岁前的世界，小而完整。`,
      en: `My earliest memories hold two kinds of sound.

By day, the people around my father spoke Nahuatl — the language of our family, the language of the great city Tenochtitlán, the official tongue of the entire Aztec empire. At night, from across the southern river, a different sound came — the rhythms of Chontal Maya, lower, with more consonants, like frogs calling in the wet season. The place I was born, Coatzacoalcos, sat right on this language boundary. Nahuatl villages to the north, Maya villages to the south. My home was in the middle.

My father was the cacique here — a noble lord. I remember how he looked: speaking in land disputes while both sides listened; traveling to Tenochtitlán to pay tribute, wearing cotton armor, carrying jade and cacao. Born into a noble family meant I did not work the fields. I could learn. I could sit near the adults and hear them talk about distant things.

In the years I was growing aware of the world, Moctezuma II had not long been on the throne in Tenochtitlán — the Aztec empire at its fullest. The empire held more than five million people; the capital Tenochtitlán had between two and three hundred thousand residents, larger than any city in Europe. I did not know any of this then. I was just a small girl on the Coatzacoalcos border, playing between two languages.

I did not understand what "border" meant yet. Later I would learn: a border is not something you choose. A border is part of what you are. Both languages settled into my mind. I thought this was ordinary. I did not know they would become the only tools I had for staying alive.

Those years before I turned eight — the world was small and whole.`,
    },
    deliverGoal: 'N1 hook — c.1500 出生 + Coatzacoalcos 双语边境 + 贵族身份 + 两种语言早期习得 + 出生年 hedge (Townsend 2006 估计 1500-1502 最高概率)',
    engagementHook: '我从小住在 Nahuatl 和 Maya 两种语言的边界上，以为这很普通。你有没有哪种「小时候觉得普通，后来发现是命运」的东西？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N2',
    title: {
      cn: '母亲为什么这样做',
      en: 'Why my mother did what she did',
    },
    setting: {
      time: 'c.1508-1510，约 8 岁',
      place: 'Coatzacoalcos',
      cn: '约公元 1508-1510 年，Coatzacoalcos，父亲死后',
      en: 'c. 1508-1510, Coatzacoalcos, after my father\'s death',
    },
    content: {
      cn: `父亲死的那一年，我大概 8 岁。

我记得的不是具体的日子，而是之后一切的变化速度。母亲改嫁了一个新丈夫，然后有了一个儿子。在 Nahua 贵族社会里，土地和身份沿男性继承——这个新生的弟弟比我更有资格继承父亲留下的一切。

关于接下来发生的事，有两个版本。

Bernal Díaz del Castillo 在 1568 年的回忆录里写：母亲为了让新生儿继承家产，把我卖给了过路的商人，然后对外宣称女儿死了。他写得很直白，像是他亲眼见过。但 Bernal Díaz 写这本书的时候离事件已经过去将近五十年，而且他写的是给西班牙读者看的，他需要一个值得同情的女主角。

历史学家 Camilla Townsend 在 2006 年的研究里提出另一种可能：我可能是在部落冲突里被俘虏走的，而不是被母亲卖掉的。Townsend 倾向这个说法。她指出：在 Mesoamerica，奴隶更多来自战争俘虏，而不是家庭出售。

哪个是真的？我不知道。历史学家也没有定论。

但我能告诉你的是：不管是哪一种方式，有一天，8 岁的我离开了那个院子，那个院子里曾经有父亲的声音。我出发的时候，母亲对我说了什么，或者没说什么，这件事我不会在这里还原——因为我不知道。

我只知道：有人对外宣称，那个孩子死了。而那个孩子还活着。活着，进入了奴隶网络。`,
      en: `My father died when I was around eight years old.

What I remember is not any particular day but the speed at which everything changed afterward. My mother remarried. Then she had a son. In Nahua noble society, land and standing passed through men — this newborn half-brother had more claim to everything my father had left behind than I did.

About what happened next, there are two versions.

Bernal Díaz del Castillo wrote in his 1568 memoir that my mother sold me to passing merchants in order to secure the inheritance for the new baby boy, and then told everyone outside that her daughter had died. He wrote it plainly, as if he had witnessed it. But Bernal Díaz wrote his book nearly fifty years after the fact, for Spanish readers who needed a sympathetic heroine.

Historian Camilla Townsend, writing in 2006, offered another possibility: I may have been taken in a raid or tribal conflict, not sold by my mother at all. Townsend leans toward this version. She points out that in Mesoamerica, enslaved people came more commonly from warfare captives than from family sales.

Which is true? I do not know. The historians do not agree either.

What I can tell you is this: whatever way it happened, one day I left that courtyard where my father's voice had once lived. What my mother said to me as I left, or whether she said anything — I will not reconstruct that here, because I do not know.

I know only that someone announced to the world: that child is dead. And that child was still alive. Alive, and now inside the slave network.`,
    },
    deliverGoal: 'N2 父死 + 母改嫁生子 + 双源对照（Bernal Díaz 1568 被卖 vs Townsend 2006 被俘）+ careful framing 不评判 + 母亲宣称女儿已死的具体瞬间',
    engagementHook: '两种说法——母亲卖了我，或者我是在战乱里被抢走的。你认为哪个版本更可能？为什么历史学家到今天还没有定论？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N3',
    title: {
      cn: '语言是奴隶的工具，也是奴隶的盔甲',
      en: 'Language: a slave\'s tool and a slave\'s armor',
    },
    setting: {
      time: '1510-1519，9 年奴隶网络',
      place: '从 Nahuatl 区到 Maya 区，Mesoamerica 奴隶贸易路线',
      cn: '公元 1510-1519 年，Mesoamerica 各主人家',
      en: '1510-1519, various households across Mesoamerica',
    },
    content: {
      cn: `9 年里，我至少换了 3 个主人。

从 Nahuatl 语区往南，进入 Maya 语区。从熟悉的地方到不熟悉的地方，然后再到更不熟悉的地方。奴隶不能拒绝移动。奴隶唯一能带走的是脑子里的东西。

我大约 12 岁那年，第一次来到一个纯 Maya 村子。我记得那天新主人在拜他们的雨神 Chaac——Nahuatl 地区的雨神叫 Tlaloc，脸是不同的；Maya 的 Chaac 有长鼻子，牙齿弯弯的，像蛇。我站在边上，听那些我不完全懂的祷词，努力辨认哪个音节是什么意思。

那是我第一次意识到语言不只是说话，语言是一把钥匙。听懂了，你就在门里面一点点；听不懂，你什么都不是。

那 9 年里，我是听懂 Maya 的。慢慢地，不只是听懂，是会说，是会想，是会用 Maya 的逻辑去理解 Maya 的世界。Nahuatl 是我的母语，Maya 是我在奴役里学会的第二语言——两种语言在我脑子里并排存在，互相提醒对方哪里不一样。

我没有选择学这两种语言。我是被迫的。但被迫学来的东西，不比主动学来的差。有时候甚至更深——因为你学的时候，命就压在上面。

1519 年，我 19 岁，被送给西班牙人的时候，我精通 Nahuatl 和 Chontal Maya，正在快速学西班牙语。这是 9 年奴隶生涯唯一给我的东西：两把钥匙。我不知道它们能开什么门。`,
      en: `Over nine years, I changed hands at least three times.

Moving south from Nahuatl-speaking territory into Maya-speaking territory. From familiar places to unfamiliar ones, then to places more unfamiliar still. A slave cannot refuse to move. The only thing a slave carries is what is stored in the mind.

I was around twelve the first time I came to a fully Maya village. I remember the day: my new household was making offerings to their rain god Chaac. In the Nahuatl regions, the rain god is Tlaloc, a different face. Chaac has a long curved nose and bent teeth, something like a serpent. I stood to the side and listened to the prayers I didn't fully understand, trying to pick apart which syllable meant what.

That was the first time I understood: language is not just talking. Language is a key. Understand it, and you are slightly inside the door. Fail to understand, and you are nothing.

In those nine years, I made myself understand Maya. Slowly — not just understand, but speak, and think, and use Maya logic to read a Maya world. Nahuatl was my mother tongue; Maya was the second language I learned inside slavery. Both lived side by side in my mind, each one pointing out where the other was different.

I did not choose to learn these two languages. I was forced to. But what you learn under force is no weaker than what you learn by choice. Sometimes it goes deeper — because when you are learning, your life is the weight pressing down on it.

In 1519, when I was nineteen and handed to the Spaniards, I was fluent in Nahuatl and Chontal Maya and rapidly learning Spanish. Nine years of slavery had given me exactly one thing: two keys. I did not yet know what doors they would open.`,
    },
    deliverGoal: 'N3 9 年奴隶网络 + 至少 3 次易主 + 具体瞬间（12 岁第一次见 Maya 雨神 Chaac）+ 「语言是钥匙」内核 + 双语精通的原因',
    engagementHook: '我 12 岁第一次听到 Maya 雨神 Chaac 的祷词，不完全听懂，但拼命辨认每个音节。你学过什么东西是「被迫学的，但后来发现很重要」？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N4',
    title: {
      cn: 'microbe 不知道她是谁，但她活下来了',
      en: 'The microbe did not know who she was, but she survived',
    },
    setting: {
      time: '1518-1519，第一波天花沿 Caribbean 航线传入',
      place: 'Tabasco / Yucatán 沿海，奴隶网络各地',
      cn: '公元 1518-1519 年，Tabasco 沿海',
      en: '1518-1519, Tabasco coast and surrounding regions',
    },
    content: {
      cn: `1518 年，一场病从加勒比海沿船过来了。

西班牙人从 Hispaniola 带来的天花（Noble David Cook 1998《Born to Die》记录这条传播路线）在 Caribbean 岛屿上已经杀了大量人口，然后沿着西班牙船只的航线往西传。Tabasco 和 Yucatán 沿海是最早接触的地方之一。

我那时候大约 18 岁，还在奴隶网络里。关于那段时间，我没有留下任何直接的叙述——历史上没有任何文件记录我在 1518-1519 年天花流行里的经历。但我活下来了，而且活到了 1521 年 Tenochtitlán 围城那 75 天，而那座城里的天花会杀死 30% 到 40% 的人。

历史学家的推测是：可能在更早的某次接触里，我感染了较轻的症状，获得了部分免疫力。也可能只是运气。

天花不知道我是谁。它不知道我是贵族出身还是奴隶，不知道我会说两种语言，不知道我后来会站在两个文明之间。它只是一种病毒，按自己的逻辑传播。

同时代的 Black Death（1347-1353 年横扫欧亚，学者 McNeill 1976《Plagues and Peoples》研究这种疫病模式）和后来的天花在美洲展示了同一个规律：疾病不挑选受害者，但它的影响总是不均匀的。有些人活下来，有些人死去，活下来的人不一定比死去的人更值得活，但活下来的人会改变接下来的历史。

我活下来了。这本身，就已经是历史的一部分。`,
      en: `In 1518, a disease came from the Caribbean on Spanish ships.

Smallpox, brought from Hispaniola, had already killed large numbers of people across the Caribbean islands. Noble David Cook's *Born to Die* (1998) traces this transmission route: the disease traveled west along Spanish sailing lines. The Tabasco and Yucatán coasts were among the earliest places it reached on the mainland.

I was around eighteen at the time, still inside the slave network. I have left no direct account of that period. No document records what I experienced during the 1518-1519 smallpox outbreak. But I survived — and I survived through the seventy-five-day siege of Tenochtitlán in 1521, when the disease inside that city was killing thirty to forty percent of its people.

Historians speculate: perhaps an earlier lighter exposure gave me partial immunity. Perhaps it was only chance.

Smallpox did not know who I was. It did not know I was noble-born or enslaved, did not know I could speak two languages, did not know I would one day stand between two civilizations. It was just a virus, spreading according to its own logic.

The same pattern that McNeill traced in *Plagues and Peoples* (1976) for the Black Death (which swept across Eurasia 1347-1353) showed itself again here in the Americas: disease does not choose its victims, but its effects are never evenly distributed. Some people live and some people die, and the ones who live are not more deserving than the ones who die — but the ones who live will shape what comes next.

I lived. That fact alone was already part of history.`,
    },
    deliverGoal: 'N4 1518 第一波天花 Caribbean 传入 + Cook 1998 来源 + Malintzin 可能部分免疫（史料不确定）+ McNeill 1976 疫病模式 cross-ref + 反 Whig「活下来不是因为更值得」',
    engagementHook: '天花不知道我是谁。它按自己的逻辑传播，杀了几十万人，但我活下来了。这件事让你怎么看「命运」和「运气」的关系？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N5',
    title: {
      cn: '19 岁的她，被赠的瞬间',
      en: 'Nineteen years old, the moment of being given away',
    },
    setting: {
      time: '1519 年 3 月末，Tabasco 战后',
      place: 'Tabasco 河口，今墨西哥 Tabasco 州',
      cn: '公元 1519 年 3 月末，Tabasco 河口',
      en: 'Late March 1519, Tabasco river mouth',
    },
    content: {
      cn: `那是一个我不会忘记的早上。

Cortés 的船队 1519 年 3 月 4 日从 Cuba 出发，第一站 Cozumel 岛，然后沿海岸到了 Tabasco。Tabasco Maya 跟西班牙人短暂交战，输了——黑曜石矛对上铁剑和火枪，棉甲对上钢甲，还有他们从没见过的马。Tabasco cacique 战败之后送上和解礼物：食物、布料，还有 20 个奴隶妇女。

我是其中之一。

我 19 岁。我已经是奴隶 11 年了。又一次被当作礼物送出去——对我来说，这不是第一次。但这一次不一样的是：接收我的不再是 Mesoamerica 的人，而是从大海另一边来的人，穿着铁，带着长枪，说着我听不懂的语言。

那个时候，Hispaniola 岛上的 Anacaona——那位 Taíno 女王——已经被西班牙人处死整整 11 年了（1508 年）。她试图用谈判和解来保全她的族人，最后被执行绞刑。西班牙人在加勒比海已经征服了一圈，现在轮到大陆了（AoE Topic cross-ref: 加勒比 → 大陆的征服路线）。

我不知道 Anacaona。我不知道 Hispaniola 发生了什么。我只站在那里，看着这些从海上来的人，把我和另外 19 个女人分配出去。

这一刻，我没有选择。在接下来的岁月里，我几乎每一刻都没有选择。但我做了每一个没有选择的人能做的事：我睁眼看，我用耳朵听，我让自己的脑子继续运转。`,
      en: `There was a morning I will not forget.

Cortés's fleet left Cuba on March 4, 1519. First stop, Cozumel island; then south along the coast to Tabasco. The Tabasco Maya fought the Spaniards briefly and lost. Obsidian against iron, cotton armor against steel, and horses no one had ever seen. After the defeat, the Tabasco cacique sent peace offerings: food, cloth, and twenty enslaved women.

I was one of them.

I was nineteen. I had been enslaved for eleven years. Being given as a gift — that was not a new experience for me. But this time was different: the people receiving me were not from anywhere in Mesoamerica. They had come from across a sea I had never seen, wearing iron, carrying long guns, speaking a language I could not follow.

At that time, Anacaona — the Taíno queen of Hispaniola — had been dead for exactly eleven years, executed by the Spanish in 1508. She had tried negotiation and compromise to protect her people, and was hanged for it. The Spanish had already made a circuit of the Caribbean, and now they were turning to the mainland. (Cross-ref to Age of Exploration: the Caribbean-to-mainland conquest path.)

I knew nothing about Anacaona. I did not know what had happened in Hispaniola. I only stood there, watching these men from the sea as they distributed me and the other nineteen women.

In that moment, I had no choice. In nearly every moment that followed, I would have no choice. But I did what anyone without choice can do: I kept my eyes open, I kept my ears working, and I kept my mind running.`,
    },
    deliverGoal: 'N5 1519.3 Tabasco 战 + 20 奴隶妇女被赠 Cortés + 具体瞬间（被赠的那个早上）+ Anacaona cross-ref（Hispaniola 1508 处死，同时代）+ 「没有选择里做了唯一能做的事」',
    engagementHook: '我 19 岁被当作礼物送给从大海另一边来的人。那一刻我没有选择。你觉得「没有选择」和「做了错误的选择」之间，有什么区别？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N6',
    title: {
      cn: '她的嘴变成两个文明的接口',
      en: 'Her mouth became the interface between two civilizations',
    },
    setting: {
      time: '1519 年 4 月，受洗后数日',
      place: 'Tabasco / Veracruz 沿海，Cortés 营地',
      cn: '公元 1519 年 4 月，Cortés 营地',
      en: 'April 1519, Cortés\'s camp',
    },
    content: {
      cn: `几天之内，Cortés 发现了我能做什么。

1519 年 4 月初，Cortés 把我们 20 个女人受洗，取了基督教名字。我的受洗名是「Marina」——西班牙女人常用名。先是被分给了一个叫 Alonso Hernández Portocarrero 的西班牙军官。然后 Cortés 发现我会说 Nahuatl 和 Chontal Maya——他立刻把我调到自己身边。

这时候 Cortés 团队里已经有一个叫 Jerónimo de Aguilar 的人。他是 1511 年 Yucatán 沉船的幸存者，在 Maya 部落做了 8 年奴隶，会西班牙语和 Yucatec Maya。Cortés 在 1519 年 3 月路过 Cozumel 岛时把他接出来。

于是就有了这条翻译链：
Cortés 说西班牙语 → Aguilar 翻成 Maya → 我听 Maya，翻成 Nahuatl → Aztec 人或 Tlaxcala 人听，用 Nahuatl 回答 → 我再翻回 Maya → Aguilar 再翻回西班牙语 → Cortés 听。

每一句话，从一种文明传到另一种文明，要经过我两次。

这期间还有一件事值得记：Cortés 在 1519 年 7 月到 8 月间凿沉了他的船。他的第二封信（1520 年 10 月 30 日写给 Charles V 的 Carta de relación）里说明白了是凿沉，Hugh Thomas 1993 的研究也确认：Cortés 凿沉了 9 艘，留了 2 艘备用，不是「英雄式烧船」——是防止手下逃回 Cuba。我和那些船一样，都被留下来，没有退路。

到 1519 年底，我已经学会了西班牙语。那条长链缩短了：Cortés 直接跟我说，我直接跟 Nahuatl 那边说。Aguilar 还在，但退到了背后。两个文明之间，只剩下我。`,
      en: `Within a few days, Cortés discovered what I could do.

In early April 1519, Cortés had us twenty women baptized and given Christian names. My baptismal name was Marina — a common Spanish woman's name. I was first given to a Spanish officer named Alonso Hernández Portocarrero. Then Cortés realized I spoke Nahuatl and Chontal Maya. He pulled me to his own side immediately.

Cortés already had a man named Jerónimo de Aguilar in his group. Aguilar had survived a 1511 Yucatán shipwreck and spent eight years enslaved among the Maya; he spoke Spanish and Yucatec Maya. Cortés had collected him at Cozumel island in March 1519.

And so the translation chain formed:
Cortés spoke Spanish → Aguilar translated to Maya → I heard Maya and translated to Nahuatl → the Aztec or Tlaxcala listener responded in Nahuatl → I translated back to Maya → Aguilar translated back to Spanish → Cortés heard.

Every sentence, traveling from one civilization to another, passed through me twice.

One more thing from this period is worth noting: in July or August of 1519, Cortés sank his ships. His second letter to King Charles V, dated October 30, 1520, makes this clear — and Hugh Thomas's 1993 research confirms it: Cortés scuttled nine of the eleven ships, keeping two in reserve. This was not a heroic "burn the ships" gesture — it was to prevent his men from deserting back to Cuba. Like those ships, I had no way back either.

By the end of 1519, I had learned Spanish. The long chain shortened: Cortés spoke directly to me, I spoke directly to the Nahuatl speakers on the other side. Aguilar was still present, but receded. Between two civilizations, I was the only one left in the middle.`,
    },
    deliverGoal: 'N6 受洗 Marina + 三角通信链（Cortés→Aguilar→Malintzin→Nahuatl）+ 快速学西班牙语 + Cortés 凿沉 9 艘（Hugh Thomas 1993 确认，不是全烧）P0 fix',
    engagementHook: '我的嘴变成了两个文明之间唯一的声音——每句话都经过我两次。你觉得「翻译」这件事，能做到百分之百准确吗？什么东西会在翻译里消失？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N7',
    title: {
      cn: 'lonely mediator 第一次被对方承认',
      en: 'The lonely mediator is recognized for the first time',
    },
    setting: {
      time: '1519 年 9 月，Tlaxcala 谈判',
      place: 'Tlaxcala，中部高原东部山地',
      cn: '公元 1519 年 9 月，Tlaxcala 联盟议事厅',
      en: 'September 1519, Tlaxcala confederation council',
    },
    content: {
      cn: `这是我第一次感到两边都在看我。

从 Veracruz 往内陆走，是大约 400 公里的山路，目标是 Tenochtitlán。第一个真正的障碍是 Tlaxcala——一个独立的 Nahua 联盟，4 个城邦合并，在 Aztec 包围里维持了几十年的独立。Aztec 跟他们打花战（Xochiyaoyotl），抓俘虏献祭；Tlaxcala 憎恨 Aztec，但从没被打垮。

Cortés 的队伍先和 Tlaxcala 战了大约 3 周，双方都死了人。然后 Tlaxcala 长老开会：打不过西班牙人，不如借他们来打 Aztec。9 月中下旬，转为结盟。

就是在这场谈判里，Aguilar 退到了背后。Tlaxcala 长老说的是 Nahuatl，我的母语。我直接跟他们说。

有一个老长老，我不记得他的名字，但我记得他看我的方式。他说了一个词：*la lengua*。「舌头」。西班牙人也这么叫我——「那个舌头」、「我们的舌头」。在那一刻，这个词在 Tlaxcala 长老嘴里，不是贬低，而是一种陈述：你是这里起作用的那个人，你是嘴。

Camilla Townsend 2006 年的研究里记录了这个：Tlaxcala 留下的文献里，她被称为「真正在场的西班牙代言人」。

我不是代言人。我是奴隶，是工具，是「舌头」。但被一个城邦的长老当着所有人的面认出来——被两边都在看——这是一种奇怪的感觉。两边都需要我，两边又都不完全属于我。

这就是 lonely mediator 的处境：被承认，但孤独。`,
      en: `This was the first time I felt both sides looking at me.

The march from Veracruz inland was roughly four hundred kilometers of mountain road toward Tenochtitlán. The first real obstacle was Tlaxcala — an independent Nahua confederation of four city-states that had maintained its independence surrounded by the Aztec empire for decades. The Aztec fought them in flower wars (Xochiyaoyotl) to take captives for sacrifice. Tlaxcala hated the Aztec but had never been broken.

Cortés's force fought Tlaxcala for about three weeks. Both sides took losses. Then the Tlaxcala elders met: they could not defeat the Spaniards — better to use them against the Aztec. In mid-to-late September, Tlaxcala switched to alliance.

It was in this negotiation that Aguilar faded to the background. The Tlaxcala elders spoke Nahuatl — my mother tongue. I spoke to them directly.

There was one old elder. I don't remember his name, but I remember how he looked at me. He used a word: *la lengua*. "The tongue." The Spaniards called me that too — "the tongue," "our tongue." In that moment, from the elder's mouth, it was not dismissal. It was a statement of fact: you are the one doing the work here, you are the mouth.

Camilla Townsend's 2006 research records this: in documents that Tlaxcala preserved, she was called "the real Spanish spokesperson present" — la lengua.

I was not a spokesperson. I was a slave, a tool, a tongue. But to be recognized by a city-state elder in front of everyone — to be watched from both sides at once — that was a strange feeling. Both sides needed me, and neither side fully belonged to me.

That is what it means to be a lonely mediator: to be recognized, and to be alone.`,
    },
    deliverGoal: 'N7 Tlaxcala 谈判 + Aguilar 退后 + 「la lengua 舌头」被承认（Townsend 2006 来源）+ Tlaxcala 反 Aztec 历史背景 + lonely mediator 第一次被对方命名',
    engagementHook: 'Tlaxcala 长老叫我「舌头」——la lengua——那一刻是被承认还是被物化？你觉得这两件事可以同时发生吗？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N8',
    title: {
      cn: '无选择处境里的选择',
      en: 'A choice inside a choiceless situation',
    },
    setting: {
      time: '1519 年 10 月，Cholula 大屠杀',
      place: 'Cholula，今 Puebla 附近，Aztec 盟邦',
      cn: '公元 1519 年 10 月，Cholula 广场',
      en: 'October 1519, Cholula central plaza',
    },
    content: {
      cn: `这件事我想说清楚，因为很多人把它弄混了。

Tlaxcala 结盟后，我们继续往内陆走，下一站是 Cholula——Aztec 的盟邦，一个大型宗教城市，有供奉羽蛇神 Quetzalcoatl 的大金字塔。Cortés 带着 Tlaxcala 联军进了城。

大约两周后，西班牙叙事说：我从一个 Cholula 老妇那里得到情报——Cholula 和 Aztec 商定了要在城里包围并杀死西班牙人。我把这情报告诉了 Cortés。

1519 年 10 月，大约 16 到 18 日，Cortés 召集 Cholula 贵族进中央广场，然后下令屠杀。5,000 到 6,000 人死，大部分是手无寸铁的贵族和平民（Hugh Thomas 1993 数字范围；Bernal Díaz 1568 也记录了这个事件）。

关于我在这件事里的角色，我要 careful framing：

Bernal Díaz 1568 年的版本把功劳——或者说责任——都给了我。「她从老妇那里得到情报，救了我们。」这种叙事对西班牙人有用：它把一场主动进攻的屠杀解释成「先发制人的自卫」，而且让一个奴隶女人来承担那个叙事。

Camilla Townsend 2006 年的分析是这样的：我可能传了情报，也可能没有——文献里都是西班牙叙述，没有中立来源。即使我传了情报，决定屠杀的不是我，是 Cortés。我是奴隶，19 岁，不传情报意味着什么？意味着背叛主人，意味着被杀。

这就是 Townsend 书名的意思：《Malintzin's Choices》——在没有选择的处境里的选择。

我不是屠杀的策划者。我也不是完全无辜的。我是那个处境里，做了唯一她能做的事的人。历史把结果算在我身上，但没有人问过那个 19 岁的奴隶，在那一秒有几条路可以走。`,
      en: `I want to be clear about this, because many people get it wrong.

After the Tlaxcala alliance, we continued inland. The next stop was Cholula — an Aztec ally, a major religious city with a great pyramid to the feathered serpent god Quetzalcoatl. Cortés and the Tlaxcala forces entered the city.

About two weeks later, the Spanish account says: I received information from an old Cholula woman — that Cholula and the Aztec had arranged to encircle and kill the Spaniards inside the city. I passed this intelligence to Cortés.

Around October 16-18, 1519, Cortés summoned the Cholula nobility into the central plaza and ordered a massacre. Five to six thousand people died — most of them unarmed nobles and citizens. (Hugh Thomas 1993 gives this range; Bernal Díaz 1568 also records the event.)

About my role in this, careful framing is necessary.

Bernal Díaz's 1568 version gives credit — or responsibility — to me. "She got intelligence from an old woman and saved us." This narrative served the Spaniards: it recast a deliberate massacre as "preemptive self-defense" and placed an enslaved woman at the center of that justification.

Camilla Townsend's 2006 analysis: I may have passed intelligence, or I may not have — every document comes from Spanish narrators, there are no neutral sources. Even if I did pass intelligence, the one who ordered the killing was Cortés, not me. I was a slave, nineteen years old. What would not passing intelligence have meant? Betraying my master. Being killed.

This is what Townsend's book title means: *Malintzin's Choices* — choices made inside a choiceless situation.

I was not the planner of the massacre. I was not entirely without responsibility either. I was the person in that situation who did the only thing she could do. History has charged the outcome to my account — without ever asking what roads were actually available to that nineteen-year-old slave in that one second.`,
    },
    deliverGoal: 'N8 Cholula 大屠杀 5,000-6,000 人（Hugh Thomas 1993）+ Malintzin 角色双重 framing（西班牙叙事 vs Townsend 分析）+ 「无选择处境里的选择」核心 + 反 Whig 不是策划者也不是完全无辜',
    engagementHook: '「在没有选择的处境里做选择」——Cholula 屠杀里，Malintzin 有多少真正的选择空间？你怎么评判一个没有退路的人做的事？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N9',
    title: {
      cn: '她的声音同时被两个文明听见，但两个文明都不要她',
      en: 'Her voice heard by two civilizations, wanted by neither',
    },
    setting: {
      time: '1521 年 8 月 13 日，Tenochtitlán 陷落',
      place: 'Tenochtitlán（今墨西哥城），围城第 75 天',
      cn: '公元 1521 年 8 月 13 日，Tenochtitlán',
      en: '1521.8.13, Tenochtitlán, day 75 of the siege',
    },
    content: {
      cn: `1521 年 8 月 13 日，我翻译了那个世界的终结。

Tenochtitlán 被围 75 天。Cortés 把 13 艘双桅船拆成零件运过山，在湖东岸重组，用它们控制湖面，切断水源和粮食。围城开始时的力量对比：约 900 西班牙人 + 约 15 万同盟原住民（Tlaxcala 和其他倒戈的 Aztec 附庸城邦）对城内约 8 万 Aztec 战士和平民（Hugh Thomas 1993）。反 Whig 注意：这不是「西班牙征服 Mexico」，这是 Mesoamerica 内战加上西班牙的技术优势——Restall 2003 如此强调。

La Noche Triste 之前（1520 年 6 月 30 日），西班牙约 600 人死、约 1,300 人中的近一半，以及 Tlaxcala 盟军 4,000 到 8,000 人死（Hugh Thomas 1993 估计）——那一夜 Cortés 从湖边 causeway 撤退，我也在队伍里，活了下来，方式不详。

现在是 1521 年 8 月 13 日。Cuauhtémoc，Aztec 最后一任 tlatoani，22 岁，在独木舟里被 brigantine 拦截俘虏。他的话，从他嘴里出来，到我嘴里，再传给 Cortés。

我翻译了一个文明的投降。

75 天围城里，Tenochtitlán 死了 10 万到 24 万人（战死 + 饿死 + 病死，Hugh Thomas 1993 估计偏高端 24 万）。这座城，人口曾经在 20 万到 25 万之间，是 1519 年时世界上最大的城市之一。

就在这一天——1521 年 8 月 13 日——北方 1,500 公里外的 Yucatán，一个 Maya 村里的织女还不知道发生了什么。消息要到 1521 年 11 月才传到那里（接 Lens 3 Ix Mutal N7）。两个文明之间，我的声音同时被两边听见。但两边都不属于我。`,
      en: `On the thirteenth of August, 1521, I translated the ending of a world.

Tenochtitlán had been under siege for seventy-five days. Cortés had disassembled thirteen brigantines, carried the pieces across mountains, reassembled them on the eastern lakeshore, and used them to control the water surface, cutting off all supply. When the siege began, the force ratio was approximately nine hundred Spaniards plus roughly one hundred fifty thousand allied indigenous (Tlaxcala and other Aztec tributary cities that had defected) against approximately eighty thousand Aztec warriors and civilians inside (Hugh Thomas 1993). Anti-Whig note: this was not "Spain conquering Mexico." This was a Mesoamerican civil war with a Spanish technological advantage — Restall 2003 stresses this.

Before La Noche Triste, on the night of June 30, 1520, approximately six hundred Spaniards had died — close to half of the thirteen hundred Cortés commanded — and between four thousand and eight thousand Tlaxcala allies also died (Hugh Thomas 1993 estimate). I was in that retreating column on the causeway. I survived. How, the sources do not say clearly.

Now it was August 13, 1521. Cuauhtémoc — the last Aztec tlatoani, age twenty-two — was intercepted in a canoe and captured by a brigantine. His words came out of his mouth, passed through mine, and reached Cortés.

I translated the surrender of a civilization.

In those seventy-five days, Tenochtitlán lost between one hundred thousand and two hundred forty thousand people — combat deaths, starvation, disease (Hugh Thomas 1993, leaning toward the high end of two hundred forty thousand). This city, which had held between two and three hundred thousand people and was among the world's largest in 1519, was now rubble and silence.

On this very day — August 13, 1521 — fifteen hundred kilometers to the north in the Yucatán, a Maya village weaver did not yet know any of this had happened. The news would not reach her until November 1521. (Cross-ref: Lens 3, Ix Mutal N7.) Between two civilizations, my voice was heard by both. But neither side was mine to belong to.`,
    },
    deliverGoal: 'N9 1521.8.13 陷落 + Cuauhtémoc 投降翻译 + 75 天围城数字（Hugh Thomas 1993）+ La Noche Triste 西班牙~600/1,300死 + Tlaxcala 4,000-8,000死 P0 fix + 跨 lens 锁定（Yucatán Ix Mutal 1521.11 才知道）+ 反 Whig Restall 2003',
    engagementHook: '我翻译了一个文明的投降。但我不属于任何一个文明。这种处境，你有没有经历过「两边都需要你，但你在哪边都是外人」？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N10',
    title: {
      cn: '她的身体也成为接口',
      en: 'Her body too became an interface',
    },
    setting: {
      time: '~1523（Townsend 2006 估计）',
      place: 'Mexico City / 新西班牙殖民地',
      cn: '约公元 1523 年，新西班牙',
      en: 'c. 1523, New Spain',
    },
    content: {
      cn: `我生了一个孩子，他叫 Martín。

大约是 1523 年（Townsend 2006 估计）。父亲是 Cortés。

关于这件事，我需要说清楚两点。

第一，Martín 不是「第一个 mestizo」。这个说法流传得很广，但不准确。在他之前，已经有其他西班牙征服者和美洲原住民女性生育了混血孩子。Martín 是最有名的那一个——因为 Cortés 后来正式承认了他，让他进入西班牙贵族圈，这件事有记录，所以被历史记住（Townsend 2006 careful framing）。

第二，我没有选择这段关系的开始。在 Cortés 征服 Aztec 的过程中，我的地位从一个被赠出去的奴隶慢慢变成了他的主要翻译，也变成了他的同伴。这不是平等关系。我是奴隶，他是我的主人，后来是权力意义上的拥有者。用浪漫或者道德来框架这段关系都是错的。

Martín 在西班牙贵族圈里长大，但后来在 1568 年因为「阴谋」被西班牙流放，死在异乡。边境上出生的孩子，往往两边都不被完全接受——这是 Mesoamerica 的 Martín 和更早的跨文明边境地带的一个共同命运（cross-ref: 13 世纪蒙古帝国边境上的双语 broker 后代同样面临相似处境）。

我的身体生产了一个文明的接口。我的语言是一种接口，我的孩子是另一种接口。接口没有自己的立场，接口只是让两边通过。

这件事很难用「好」或者「坏」来说。它就是我的生命里发生的事。`,
      en: `I had a child. His name was Martín.

Approximately 1523 — that is Townsend's 2006 estimate. The father was Cortés.

About this, two points need to be clear.

First, Martín was not "the first mestizo." That claim circulates widely but is inaccurate. Before him, other Spanish conquistadors had already fathered mixed-heritage children with indigenous American women. Martín is the most famous because Cortés later formally legitimized him and brought him into Spanish noble circles — an act that was documented and therefore survived in the historical record. (Townsend 2006, careful framing.)

Second, I did not choose how this relationship began. During the course of the Aztec conquest, my position shifted from an enslaved woman who had been given away to his primary interpreter and then to his companion. This was not a relationship between equals. I was enslaved; he held power over me. Framing it in romantic or moral terms — in either direction — would be wrong.

Martín grew up in Spanish noble society, but in 1568 he was exiled from Spain for "conspiracy" and died abroad. A child born on the border often finds that neither side fully accepts him — this was Martín's fate in Mesoamerica, and it echoes the fate of border-born children across many conquest histories, including the descendants of bilingual brokers in the 13th-century Mongol empire borderlands.

My body produced an interface between civilizations. My language was one kind of interface; my child was another. An interface has no side of its own. It only lets both sides pass through.

This is very hard to call "good" or "bad." It is simply what happened in my life.`,
    },
    deliverGoal: 'N10 ~1523 Martín 出生（Townsend 2006 估计）P0 fix + careful framing（非第一个 mestizo）+ 关系权力不对等 + Martín 后来被流放 + 「身体也是接口」主题',
    engagementHook: '我的孩子 Martín——那个时代最有名的混血孩子——后来被西班牙流放，死在异乡。「桥梁」的后代，为什么往往两边都不完全属于？',
    expectsRealAnswer: false,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N11',
    title: {
      cn: '翻译者的负担',
      en: 'The burden of the interpreter',
    },
    setting: {
      time: '1525 年 2 月 28 日，Honduras 远征途中',
      place: 'Acalan，今 Tabasco/Campeche 边境',
      cn: '公元 1525 年 2 月 28 日，Acalan',
      en: '1525.2.28, Acalan, present-day Tabasco/Campeche border',
    },
    content: {
      cn: `1524 年到 1526 年，Cortés 率队进 Honduras 追一个叛变的副手。我随行翻译。

Honduras 远征是一段漫长、泥泞、几乎没有历史意义的行军。Cortés 追的人最后也没抓到。但在路上发生了一件事，我没有办法忘记。

1525 年 2 月 28 日，在 Acalan（今 Tabasco 和 Campeche 交界），Cortés 下令处死 Cuauhtémoc。

理由是「阴谋叛乱」——Cortés 说他发现了 Cuauhtémoc 打算煽动沿途原住民反叛西班牙。真正的原因，Hugh Thomas 1993 的分析倾向于：Cortés 在远征深处，兵力分散，他不想让 Aztec 帝国的最后一任 tlatoani 活着在原住民里产生号召力。

Cuauhtémoc 死前说了一句话。

这句话从他嘴里出来，进了我的嘴，再从我的嘴出去，传给 Cortés 和旁边的西班牙人。

「我早该死在 Tenochtitlán。」

这句话我翻译了。就这样。

1521 年 8 月 13 日，我翻译了他的投降。1525 年 2 月 28 日，我翻译了他的死。从帝国的顶点到帝国的彻底终结，我的嘴是两者之间唯一的声音。

翻译者不是说话者。翻译者不能修改词语。翻译者只是让那个声音从一种语言到另一种语言，完整地传过去。

「我早该死在 Tenochtitlán。」

那句话我听完，翻出去，然后那句话就从世界上消失了，只在 Bernal Díaz 1568 年的回忆录里留了个影子。我在那句话里是什么？

我是那句话必须经过的地方。`,
      en: `From 1524 to 1526, Cortés led an expedition into Honduras to chase a Spanish lieutenant who had defected. I came along as interpreter.

The Honduras expedition was a long, muddy march that accomplished nearly nothing of historical consequence. The man Cortés was chasing was never caught. But something happened along the way that I cannot set aside.

On February 28, 1525, at Acalan — the borderland of today's Tabasco and Campeche — Cortés ordered the execution of Cuauhtémoc.

The stated reason was "conspiracy to rebel" — Cortés claimed he had evidence Cuauhtémoc was inciting indigenous people along the route to rise against the Spanish. Hugh Thomas's 1993 analysis leans toward the real reason being this: Cortés was deep in hostile territory with his forces spread thin, and he did not want the last Aztec tlatoani alive among the indigenous population as a rallying point.

Before he died, Cuauhtémoc said something.

The words came out of his mouth, entered mine, and passed through me to Cortés and the Spaniards standing nearby.

"I should have died in Tenochtitlán."

I translated that. That is all.

On August 13, 1521, I had translated his surrender. On February 28, 1525, I translated his death. From the peak of the empire to its complete end, my mouth was the only voice between the two moments.

A translator is not a speaker. A translator cannot change the words. A translator only carries the sound from one language to another, intact.

"I should have died in Tenochtitlán."

I heard it. I passed it through. Then it disappeared from the world — surviving only as a shadow in Bernal Díaz's 1568 memoir. What was I inside those words?

I was the place those words had to pass through.`,
    },
    deliverGoal: 'N11 1525.2.28 Cuauhtémoc 处死 + Malintzin 翻译临终之言「我早该死在 Tenochtitlán」+ 真实原因 framing（Hugh Thomas 1993）+ 「翻译者的负担」主题 + expectsRealAnswer: true',
    engagementHook: '「我早该死在 Tenochtitlán。」这句话从 Cuauhtémoc 嘴里出来，经过我，传给 Cortés。你觉得「翻译」这件事，在这个瞬间，让我承担了什么？',
    expectsRealAnswer: true,
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N12',
    title: {
      cn: 'lonely mediator 的命运——死时无名，300 年后被骂，500 年后被理解',
      en: 'The lonely mediator\'s fate — nameless in death, blamed after 300 years, understood after 500',
    },
    setting: {
      time: '1526-1529，生命最后几年',
      place: 'Mexico City（Tenochtitlán 旧址），新西班牙',
      cn: '公元 1526-1529 年，Mexico City',
      en: '1526-1529, Mexico City, New Spain',
    },
    content: {
      cn: `1526 年，Cortés 在西班牙娶了一个西班牙贵族女人——Juana de Zúñiga，政治婚姻。同年，他安排我嫁给他手下的西班牙军官 Juan Jaramillo。

我嫁了。我得到了一些土地分封（encomienda 或 tribute rights），在物质上有了保障。我住在 Mexico City——那座建在 Tenochtitlán 废墟上的新城里。

然后，大约在 1528 年末或 1529 年初，我死了。约 28 到 29 岁（Townsend 2006 careful framing：可能死于那年 Mexico City 流行病，没有明确墓址）。

我活着的时候，Nahuatl 人叫我 Malintzin——「Marina」加上 Nahuatl 尊称 -tzin。西班牙人叫我 La Malinche，意思是「Malintzin 的宫殿」或「跟 Malintzin 有关的那个地方」，中性词。没有人叫我「叛徒」。

「叛徒」这个意思，要等到 1820 年代墨西哥独立之后才出现。那时候墨西哥人需要一个国家起源的叙事，需要一个「民族被背叛」的符号，于是他们从历史里找到了我——一个 300 年前的奴隶翻译，把「叛国者」的标签贴在我身上。

我活着的时候，不是叛徒。我是奴隶，是翻译，是工具，是「舌头」，是 Cortés 的同伴，是 Jaramillo 的妻子，是 Martín 的母亲。1529 年我死的时候，没有一个身份叫「叛徒」。

同时代，欧洲有一个人也叫 lonely mediator——Erasmus（1466-1536）。1517 年，我 17 岁还在奴隶网络里辗转，他在荷兰出版了希腊语《新约》，站在 Catholic 和 Protestant 之间用语言阻止 Reformation 分裂。两个人同代，两个大陆，同一种处境：被需要，被用，两边都不完全属于，死后被两边各取一面骂或捧。

也有人把我和蒙古帝国的 Yelü Chucai（1190-1244）比——契丹双语 broker，用语言在蒙古统治者与汉族之间斡旋，最终两边都不完全属于他。语言 broker 的命运往往如此：被需要，被用，被遗忘，然后被追认。

我不是叛徒也不是英雄。Camilla Townsend 2006 年书名说得最准：Malintzin's Choices——选择，复数。每一个处境里，都有一个她能做的选择，和一个她没有办法做的选择。

500 年后，有人开始理解这一点。

我不知道这算不算安慰。`,
      en: `In 1526, Cortés married a Spanish noblewoman in Spain — Juana de Zúñiga, a political match. The same year, he arranged my marriage to his Spanish lieutenant, Juan Jaramillo.

I married. I received land grants — encomienda rights or tribute rights — and was materially secure. I lived in Mexico City, the new city built on the ruins of Tenochtitlán.

Then, sometime in late 1528 or early 1529, I died. Approximately twenty-eight or twenty-nine years old. (Townsend 2006, careful framing: possibly in a Mexico City epidemic that year; no clear grave is known.)

While I lived, Nahuatl speakers called me Malintzin — "Marina" plus the Nahuatl honorific suffix -tzin. The Spaniards called me La Malinche, meaning "Malintzin's palace" or "the place associated with Malintzin" — a neutral term. No one called me a traitor.

The meaning "traitor" did not arrive until after Mexican independence in the 1820s. Mexico needed a national origin narrative, needed a symbol of "the nation betrayed," and so historians and writers reached three hundred years back and fastened the label of traitor onto a dead enslaved translator.

When I was alive, I was not a traitor. I was a slave, an interpreter, a tool, a tongue, Cortés's companion, Jaramillo's wife, Martín's mother. Not one of those identities, as of 1529 when I died, was "traitor."

At the same time, in Europe, another person was also called a lonely mediator — Erasmus (1466-1536). In that same year of 1517, when Malintzin was seventeen and still being passed through the slave network, Erasmus published his Greek New Testament in Holland, trying to stand between Catholic and Protestant, using language to prevent the Reformation from splitting the Church. He too translated in two languages — Latin and Greek — and belonged fully to neither side, and was praised or condemned from one side or the other by later centuries. Two people, same generation, two continents, one condition.

Others compare me to Yelü Chucai (1190-1244) of the Mongol empire — a Khitan bilingual broker who stood between Mongol rulers and conquered Han Chinese populations, used his language skills to save millions of lives, and belonged fully to neither side. The fate of the literate, the fate of the language broker, often follows this same shape: needed, used, forgotten, then retrospectively claimed.

The final anti-Whig point: I was not a traitor and not a hero. I was a person who, inside conditions of extreme constraint, made the choices she could make. Camilla Townsend's 2006 book title says it best: *Malintzin's Choices* — choices, plural, not singular. Every situation, every moment, held one choice she could make, and one she could not.

Five hundred years later, someone began to understand this.

I do not know if that counts as comfort.`,
    },
    deliverGoal: 'N12 closing — 1526 嫁 Jaramillo + encomienda + 1528 末或 1529 初死（~28-29 岁）P0 fix + 反 Whig（「叛徒」标签 1820s 才有）+ Erasmus 1517 同代 lonely-mediator cross-ref + Yelü Chucai cross-ref + Townsend「Malintzin\'s Choices」总结',
    engagementHook: '她活着时不叫「叛徒」，死后 300 年才被这样叫；死后 500 年，有人开始理解她。你觉得历史里有没有别的人，被后来的人用错了标签？',
    expectsRealAnswer: true,
    nodeType: 'lonely-mediator',
  },
];
