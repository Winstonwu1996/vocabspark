// ─── Age of Exploration 1492 · Lens 3 · Anacaona Jr. (staging) ──────────
//
// Topic: Age of Exploration 1492 · Columbus + Caribbean encounter
// HSS-7 · AP World 1.5 · indigenous-witness-victim-with-name lens
//
// Lens 3: Anacaona the Younger (Anacaona Jr.) — receiving-end commoner
//   - 12 岁 Taíno 女孩, Hispaniola 西部 Xaragua 酋邦
//   - Anacaona 王后 (1503/11/9 烧死, 真人) 的虚构侄女
//   - 1495 12 岁第一次见铁甲 + 剑 + 马
//   - 1495-1500 5 年家族灭族 (爸爸/妈妈/叔叔/哥哥/自己/女儿)
//   - 1503/11/9 Xaragua 80 酋长被烧 — 她在山上躲过
//   - 1504 13 岁山上饿死
//
// 虚构合成 disclaimer: 跟 Reformation Sister Agnes (1539 修女) 同 pattern
//   Anacaona 王后是真人 (Bartolomé de las Casas 1542 著作记录)
//   Anacaona Jr. 是合成人物——代表 1492-1542 加勒比 Taíno 灭族中
//   没被史书写名字的几十万 12 岁女孩
//
// Cross-lens echo (per Sarah audit §5 三 lens 对话张力):
//   - N3: Columbus 1493 信「他们温和——可工作——给我们黄金」
//         → 1495 在 Hispaniola 北岸被翻译念给 Anacaona Jr. 听
//         → Columbus N4 producer / las Casas N5 interpreter / Anacaona Jr. N3 affected party
//         → 完美 mapping AP DBQ rubric (DBQ producer + interpreter + affected party)
//   - N9: 1502 las Casas 17 岁刚到 Hispaniola
//         → Anacaona Jr. 此时 19 岁, 女儿刚死
//         → 物理上他们曾在同一座岛 — 这种"可能擦肩"是 lens 教学最强 hook
//
// 7thgrader careful scaffold (per Sarah audit line 197 红警):
//   - N5 妈妈被强奸: 用「士兵闯入家——妈妈想推开他们但她瘦小很多——
//        之后她得了病——三个月后死了」(留 reflection 但不 graphic)
//   - N8 自己被强奸: 用「13 岁那年——一个 encomendero 把我从妈妈房子里拉出去——
//        9 个月后我有了女儿」(留 reflection: 「她是什么时候停止做小孩的?」)
//   - 这是 AP World 1.5 indigenous 视角教学最强一击
//
// 风格规则 (per AUTHORING_PIPELINE 11 条):
//   - cultural ban (no exotic Other framing)
//   - anti-fab: Anacaona 王后真 / Anacaona Jr. 虚构 / *areíto* + *cacique* + *bohío* 真
//     · *encomienda* + *repartimiento* (加勒比同期) NOT *mit'a* (Inca 用法)
//     · Hispaniola 1495 placer 砂金矿过度劳动 + 营养不良 NOT 汞中毒 (Potosí 1545+)
//   - em-dash 「——」
//   - italic for Taíno + Spanish loanwords
//   - 第 11 条 quote nesting: outer JS '...', 内嵌 ASCII " OK
//     cn/en 字段内嵌优先「」中文方头括号 — 严禁 ASCII " 嵌入 outer "..." 字符串

// ═══════════════════════════════════════════════════
// LENS 3 storyboard: Anacaona Jr. (12 nodes)
// ═══════════════════════════════════════════════════

var anacaonaJrStoryboard = [
  // ═══════════════════════════════════════════════════
  // N1 — HOOK: 1495 春,12 岁第一次见铁甲 + 剑 + 马
  // ═══════════════════════════════════════════════════
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 普通人视角 Anacaona Jr. 1495 + Sarah audit Lens 3 推荐',
    content: {
      cn:
        '我的名字是 Anacaona——「黄金的花」——按我们 Taíno 人的名字传统起的。\n\n' +
        '我跟我阿姨同名。我阿姨是 *cacique* (酋长)——Xaragua 酋邦的王后,Hispaniola 西部最大的酋邦。\n\n' +
        '为了不混,村里人叫我「小 Anacaona」。这一遍你也叫我小 Anacaona。\n\n' +
        '(在你听我故事之前,你要知道一件事:小 Anacaona 是合成人物——史书没写过她。但 Anacaona 王后是真人——1503 年 11 月 9 日西班牙总督把她跟 80 个 *cacique* 一起烧死,Bartolomé de las Casas 1542 年的书写下她的名字。我代表 1492-1542 年加勒比海几十万跟我一样、被殖民 5 年内死光全家、史书没写名字的 12 岁 Taíno 女孩。)\n\n' +
        '今天是 1495 年的春天。我 12 岁。我站在 Hispaniola 北岸的沙滩上——\n\n' +
        '——我第一次看到 3 件我从来没见过的东西:\n\n' +
        '1. 像河里乌龟壳一样硬、像太阳一样亮的衣服 (后来我学到这叫「铁甲」);\n' +
        '2. 一根又长又亮的金属棍子 (这叫「剑」);\n' +
        '3. 一只比我家最大的狗大十倍的、四条腿的动物——上面坐着一个穿铁甲的人 (这叫「马」)。\n\n' +
        '我跟其他 Taíno 孩子一起站着。我们不害怕。我们好奇。\n\n' +
        '——这一刻我不知道。我不知道接下来 9 年里,我家里 5 个人会用 5 种死法死掉。我不知道我自己会在 13 岁生一个女儿。我不知道我 21 岁会饿死在山上。\n\n' +
        '接下来 12 节,你跟我走 9 年。',
      en:
        'My name is Anacaona — Golden Flower — given in the way of our Taíno people.\n\n' +
        'I share the name with my aunt. My aunt is a *cacique*, the chief — queen of Xaragua, the largest chiefdom in the western part of Hispaniola.\n\n' +
        'To tell us apart, the village calls me Little Anacaona. In this playthrough you can call me that too.\n\n' +
        '(Before you hear my story, one thing. Little Anacaona is a composite person — the chronicles never recorded her. But Queen Anacaona is real — on November 9, 1503, the Spanish governor burned her alive with eighty other *caciques*, and Bartolomé de las Casas wrote her name down in 1542. I stand in for the hundreds of thousands of twelve-year-old Taíno girls in the Caribbean between 1492 and 1542 whose whole families died in five years of conquest, and whose names history did not record.)\n\n' +
        'Today is the spring of 1495. I am twelve. I am standing on the north shore of Hispaniola.\n\n' +
        'For the first time in my life I see three things I have never seen before:\n\n' +
        '1. Clothing as hard as the river-turtle\'s shell and as bright as the sun (later I learn the word: armor).\n' +
        '2. A long shining metal stick (this is a sword).\n' +
        '3. A four-legged animal ten times larger than the biggest dog in our village — a man in armor sitting on top of it (this is a horse).\n\n' +
        'I am standing with the other Taíno children. We are not afraid. We are curious.\n\n' +
        'In this moment I do not know what I do not know. I do not know that over the next nine years, five people in my family will die five different deaths. I do not know that at thirteen I will have a daughter. I do not know that at twenty-one I will starve on a mountain.\n\n' +
        'Over twelve sections, you walk those nine years with me.',
    },
    deliverGoal: {
      cn: '我叫小 Anacaona,12 岁,Hispaniola Taíno 女孩。我是合成人物——代表加勒比几十万被灭族 12 岁 Taíno 女孩。我阿姨 Anacaona 王后是真人。1495 春我第一次见铁甲 + 剑 + 马。',
      en: 'I am Little Anacaona, twelve, a Taíno girl on Hispaniola. I am a composite — I stand for the hundreds of thousands of erased twelve-year-old Taíno girls in the Caribbean. My aunt Queen Anacaona is real. Spring 1495 — my first time seeing armor, sword, and horse.',
    },
    engagementHook: {
      cn: '我叫小 Anacaona,12 岁。1495 春我第一次见 3 个我没见过的东西——铁甲 + 剑 + 马。我不害怕。我好奇。9 年后我会饿死。先看看我 12 岁前的世界。',
      en: 'I am Little Anacaona, twelve. Spring 1495 — first time seeing armor, sword, horse. I am not afraid. I am curious. Nine years later I will starve. First, see the world I had before twelve.',
    },
    expectedLength: '600-700 字 CN (staging — 7thgrader audit 后预期砍到 400-480)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N2 — SETUP: 1495 夏 我 12 岁的世界 (织布 + areíto 口头诗)
  // ═══════════════════════════════════════════════════
  {
    id: 2,
    phase: 'setup',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 Taíno 文化技能 anchor + areíto + Xaragua 酋邦',
    content: {
      cn:
        '在告诉你接下来 9 年发生什么之前,我先告诉你 12 岁的我有什么。\n\n' +
        '我有一个家。\n\n' +
        '我妈妈、爸爸、一个叔叔、一个哥哥。我们住在 Xaragua 酋邦一个 *bohío* (圆形茅草屋)里——树枝做骨架,棕榈叶盖顶。\n\n' +
        '我会织布。村里 12 岁女孩都会——我们用棉花跟麻种混合,坐在地上一织就是一下午。我能织一种带几何花纹的腰带——我妈妈教我的,她妈妈教她的,一直往上数 8 代人。\n\n' +
        '我们种 *yuca* (木薯——磨成粉做面包)、玉米、辣椒。我们在海里抓鱼,在森林里抓鬣蜥。\n\n' +
        '我会一种东西——我特别想告诉你。\n\n' +
        '我会唱 *areíto*。\n\n' +
        '*Areíto* 是我们 Taíno 的口头诗加舞蹈——一群人手拉手,围成一圈,边唱边跳。歌词记的是我们的祖先怎么从大海上来,我们的神 *Yúcahu* 怎么造 *yuca*,我们的勇士怎么打仗,我们的爱情、葬礼、丰收。\n\n' +
        '我们没有写字。所有的历史——靠 *areíto* 一代代唱下来。\n\n' +
        '我 12 岁能记 30 多首 *areíto*。我阿姨 (Anacaona 王后) 是 Xaragua 最有名的 *areíto* 诗人——她写的歌全岛都唱。我希望长大像她一样会写新的 *areíto*。\n\n' +
        '——这是 12 岁的我。不是「victim」。是一个会织布、会唱诗、有妈妈、有家的女孩。',
      en:
        'Before I tell you what happens next, let me tell you what twelve-year-old me has.\n\n' +
        'I have a family.\n\n' +
        'My mother, my father, an uncle, an older brother. We live in a *bohío*, a round thatched house, in the chiefdom of Xaragua — branches for bones, palm leaves for roof.\n\n' +
        'I weave. Every twelve-year-old girl in the village does. We mix cotton with the fiber of the maguey, and we sit on the ground and weave through a whole afternoon. I can weave a belt with geometric patterns — my mother taught me, her mother taught her, going back eight generations.\n\n' +
        'We plant *yuca* (cassava, ground into flour for bread), corn, peppers. We fish in the sea. We hunt iguana in the forest.\n\n' +
        'There is one thing I want especially to tell you.\n\n' +
        'I sing *areíto*.\n\n' +
        '*Areíto* is the Taíno oral poem and dance together — many people holding hands, forming a circle, singing as we move. The words remember how our ancestors came across the sea, how our god *Yúcahu* made the *yuca*, how our warriors fought, our love stories, our funerals, our harvests.\n\n' +
        'We do not have writing. All our history — passes through *areíto* from one generation to the next.\n\n' +
        'At twelve I know more than thirty *areítos*. My aunt, Queen Anacaona, is the most famous *areíto* poet in Xaragua — songs she has composed are sung across the whole island. When I grow up I want to compose new *areítos* the way she does.\n\n' +
        'This is twelve-year-old me. Not a "victim." A girl who weaves, who sings poems, who has a mother, who has a home.',
    },
    deliverGoal: {
      cn: '12 岁的我——会织布 (8 代人传下来的腰带几何花纹)、会唱 30 多首 *areíto* (Taíno 口头诗+舞蹈,所有历史靠这传)。我阿姨 Anacaona 王后是 Xaragua 最有名的 *areíto* 诗人。我有妈妈,有家,有 *bohío* (茅草屋)。我不是 victim,是 carrier of culture。',
      en: 'Twelve-year-old me weaves geometric belts (eight generations of pattern), sings more than thirty *areítos* (Taíno oral poetry + dance carrying all our history with no writing). My aunt Queen Anacaona is the most famous *areíto* poet in Xaragua. I have a mother, a home, a *bohío*. Not a victim — a carrier of culture.',
    },
    engagementHook: {
      cn: '我会织 8 代人传的腰带,会唱 30 多首 *areíto* (我们没有文字——历史靠唱)。下一节:1495 秋,Columbus 派人来念命令。',
      en: 'I weave belts with patterns eight generations old; I know more than thirty *areítos* (we have no writing — our history is sung). Next section: autumn 1495, Columbus sends men to read out an order.',
    },
    expectedLength: '550-620 字 CN (staging — 预期砍到 360-420)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N3 — SETUP: 1495 秋 听翻译念 Columbus 命令 ⭐ cross-lens echo
  // ═══════════════════════════════════════════════════
  {
    id: 3,
    phase: 'setup',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 Hojeda 1495 春到 Xaragua 收贡品 + line 318 黄金税 + 第 6.3 节砍手政策 + cross-lens Columbus 1493 信',
    content: {
      cn:
        '1495 年秋天。一队西班牙人到我们村。\n\n' +
        '为首的人叫 Alonso de Hojeda——Columbus 派来「收贡品」的。Columbus 自己住在 La Isabela——岛东边的西班牙第一个殖民地。\n\n' +
        '跟 Hojeda 来的有一个会说 Taíno 话的人——他穿西班牙衣服,但他是 Taíno。后来我们才知道——他叫 Diego Colón (这是西班牙人给他取的名字)——1492 年 Columbus 把他从 Bahamas 带回西班牙,洗礼,改西班牙名,1493 年带回来当翻译。\n\n' +
        'Diego Colón 站在我们村的中间。他打开一张羊皮纸——上面有西班牙文。\n\n' +
        '他先用西班牙文大声念——我们听不懂。\n\n' +
        '然后他用 Taíno 话翻译。我听到的大致是:\n\n' +
        '「所有 14 岁以上的 Taíno 人——不管男的女的——每 3 个月——必须交一定量的黄金给西班牙国王。每 3 个月。\n\n' +
        '不交的——砍手。」\n\n' +
        '我 12 岁——还不到 14 岁——所以这一次不轮到我。但我哥哥 16 岁——我爸爸 38 岁——我叔叔 40 岁。\n\n' +
        '我妈妈坐在 *bohío* 门口,听完——她没说话。她的手在腿上轻轻发抖。\n\n' +
        '——我不知道这张羊皮纸的来源。\n\n' +
        '(很多年以后我才慢慢拼出来:Columbus 1493 年回西班牙时给国王 Ferdinand 跟王后 Isabella 写过一封信——他在信里写「这里的人温和——他们做我们想要的工作——他们 50 个人就能让 5 万人为我们工作。这里黄金一定多」。这封信变成了 1495 年这张羊皮纸命令的合法性来源——「他们温和——可工作」变成了「14 岁以上每 3 个月交黄金——不交砍手」。Columbus 写信的那一刻——我 10 岁——我在跟妈妈学织腰带的几何花纹——我不知道我跟我哥哥跟我叔叔的命运,在那一刻已经被人在大海另一边写进一封信里了。)',
      en:
        'Autumn 1495. A group of Spaniards comes to our village.\n\n' +
        'The leader is Alonso de Hojeda — Columbus sent him to "collect tribute." Columbus himself lives at La Isabela, the first Spanish colony on the eastern part of the island.\n\n' +
        'With Hojeda is a man who speaks Taíno. He wears Spanish clothes, but he is Taíno. Later we will learn — his name is Diego Colón (the name the Spanish gave him). In 1492 Columbus took him from the Bahamas back to Spain, baptized him, gave him the Spanish name, and brought him back in 1493 to be the interpreter.\n\n' +
        'Diego Colón stands in the middle of our village. He opens a parchment — Spanish writing on it.\n\n' +
        'First he reads it aloud in Spanish. We do not understand.\n\n' +
        'Then he translates into Taíno. What I hear is roughly this:\n\n' +
        '"Every Taíno aged fourteen and above — man and woman — every three months — must deliver a fixed quantity of gold to the king of Spain. Every three months.\n\n' +
        'For those who do not deliver — the hand will be cut off."\n\n' +
        'I am twelve — not yet fourteen — so this time it is not my turn. But my older brother is sixteen. My father is thirty-eight. My uncle is forty.\n\n' +
        'My mother sits in the doorway of the *bohío* and listens. She does not speak. Her hand is shaking lightly on her knee.\n\n' +
        'I do not know where this parchment came from.\n\n' +
        '(Years later I slowly pieced it together. When Columbus returned to Spain in 1493 he wrote a letter to King Ferdinand and Queen Isabella. In that letter he wrote: "These people are gentle — they will do whatever work we want — fifty of them could make fifty thousand of them work for us. There is surely much gold here." That letter became the legal ground for the parchment of 1495 — "gentle — workable" turned into "fourteen and above — gold every three months — or your hand." When Columbus was writing that letter — I was ten — I was learning the geometric belt pattern from my mother. I did not know that, in that moment, my fate and my brother\'s and my uncle\'s had already been written into a letter on the other side of the ocean.)',
    },
    deliverGoal: {
      cn: '1495 秋 Hojeda 队到我们村,Diego Colón (1492 Columbus 抓回西班牙改名洗礼的 Taíno 翻译) 念羊皮纸: 14 岁以上每 3 个月交黄金,不交砍手。Columbus 1493 信「他们温和——可工作」是这张羊皮纸的合法性来源——12 岁的我学织布的同时,大海另一边一封信已经写好我哥哥叔叔爸爸的命运。',
      en: 'Autumn 1495 — Hojeda\'s men come. Diego Colón (a Taíno taken to Spain in 1492, baptized, renamed, returned in 1493 as interpreter) reads the parchment: every Taíno fourteen and above, gold every three months, or hand cut off. Columbus\'s 1493 letter — "they are gentle, they will work" — was the legal ground for that parchment. While I was learning to weave at ten, a letter on the other side of the ocean had already written my brother\'s, uncle\'s, father\'s fate.',
    },
    engagementHook: {
      cn: '14 岁以上每 3 个月交黄金——不交砍手。我 12 岁还不轮到——但哥哥 16,爸爸 38,叔叔 40。Columbus 1493 写的信「温和——可工作」是这张命令的源头。下一节:1496 爸爸。',
      en: 'Fourteen and above, gold every three months, or hand cut off. I am twelve — not yet — but my brother is sixteen, father thirty-eight, uncle forty. Columbus\'s 1493 letter — "gentle, workable" — was the source of this order. Next: 1496, my father.',
    },
    expectedLength: '750-820 字 CN (staging ⭐ Columbus 1493 信 cross-lens echo — 预期砍到 480-540)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N4 — STORY: 1496 爸爸 — placer 砂金矿
  // ═══════════════════════════════════════════════════
  {
    id: 4,
    phase: 'story',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 Hispaniola placer 砂金矿强制劳动 + Columbus encomienda 制度',
    content: {
      cn:
        '1496 年。我 13 岁。\n\n' +
        '*Repartimiento*——西班牙人「分配」原住民给殖民者的制度。Hojeda 队回来了。这一次他们带名册——\n\n' +
        '我爸爸跟村里 30 个 14-50 岁的男人一起,被分给一个西班牙殖民者——他叫 Pedro。Pedro 把他们带到岛中部山里的河边。\n\n' +
        'Hispaniola 的金子不是矿洞里挖的——是 *placer* 砂金:山上下来的河水把金子的小颗粒带下来,沉在河床的沙子里。Taíno 男人要弯腰站在河里,一天 12 个小时,把河沙一桶一桶捞起来,用陶碗筛——筛出沙子里的金子小粒。\n\n' +
        '一天两顿——半碗 *yuca* 粉糊。\n\n' +
        '我爸爸出去之前——是 38 岁、强壮的渔民。3 个月后他回来过一次,瘦了一半,咳嗽。\n\n' +
        'Pedro 让他「休息」3 天,然后把他带回河里。\n\n' +
        '他第二次出去——4 个月没回来。\n\n' +
        '一个跟他一起去的村里男人——叫 Boriquén——10 月回来告诉我妈妈:我爸爸 7 月已经死了。「在河里咳血——倒下去——没起来」。\n\n' +
        '我妈妈听完——没哭。她把头靠在 *bohío* 的木门框上——靠了很久。\n\n' +
        '我 13 岁。我把妈妈织一半的腰带捡起来——继续织。我手里抖。\n\n' +
        '我爸爸没有墓。河里的水把他冲到下游。',
      en:
        '1496. I am thirteen.\n\n' +
        '*Repartimiento* — the Spanish system of "distributing" Indians to settlers. Hojeda\'s men came back. This time they had a list of names.\n\n' +
        'My father, with thirty other men aged fourteen to fifty from our village, was assigned to a Spanish settler. His name was Pedro. Pedro took them to a river in the mountains in the middle of the island.\n\n' +
        'The gold of Hispaniola is not from mines — it is *placer* gold: water from the mountains carries small grains of gold down to the riverbed and the grains settle in the sand. Taíno men stood bent over in the river, twelve hours a day, lifting buckets of river sand, sifting through it in a clay bowl, looking for the small grains of gold.\n\n' +
        'Two meals a day — half a bowl of *yuca* paste.\n\n' +
        'Before he went, my father was thirty-eight, a strong fisherman. After three months he came back once. Half his body weight gone. Coughing.\n\n' +
        'Pedro let him "rest" three days, then took him back to the river.\n\n' +
        'The second time he went out — he did not come back for four months.\n\n' +
        'A man from our village who had gone with him — his name was Boriquén — came back in October and told my mother: my father had died in July. "He was coughing blood in the river. He fell. He did not get up."\n\n' +
        'My mother heard this — she did not cry. She rested her head against the wooden frame of the *bohío* — for a long time.\n\n' +
        'I was thirteen. I picked up the half-finished belt my mother had been weaving and continued. My hands were shaking.\n\n' +
        'My father has no grave. The river carried him downstream.',
    },
    deliverGoal: {
      cn: '1496 爸爸通过 *repartimiento* 被分给 Pedro,在中部山里 *placer* 砂金河里弯腰 12 小时一天筛金,半碗 *yuca* 糊一顿。3 个月瘦一半,4 个月后死。我妈妈听完没哭——靠在门框很久。我 13 岁继续织妈妈的腰带,手在抖。',
      en: 'In 1496 my father was distributed (*repartimiento*) to Pedro, sent to a river in the mountains, bent over twelve hours a day sifting *placer* gold, half a bowl of *yuca* a meal. Three months — half his body weight gone. Four months later he was dead. My mother did not cry — rested her head on the doorframe a long time. I, thirteen, kept weaving my mother\'s belt with shaking hands.',
    },
    engagementHook: {
      cn: '38 岁渔民爸爸通过 *repartimiento* 分给 Pedro——河里筛 *placer* 砂金 12 小时一天,半碗 *yuca* 糊一顿——4 个月后死。我接过妈妈织一半的腰带继续织。下一节:1497 妈妈。',
      en: 'Father, thirty-eight, fisherman, distributed (*repartimiento*) to Pedro — twelve hours a day sifting *placer* gold, half a bowl of *yuca* a meal — dead in four months. I took up the belt my mother had been weaving and kept going. Next: 1497, my mother.',
    },
    expectedLength: '500-560 字 CN (staging — 预期砍到 320-380)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N5 — STORY: 1497 妈妈 ⚠️ careful scaffold (强奸 + 病死)
  // ═══════════════════════════════════════════════════
  {
    id: 5,
    phase: 'story',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 1495-1500 妈妈被强奸 + 天花 + 7 thgrader careful scaffold',
    content: {
      cn:
        '1497 年。我 14 岁。\n\n' +
        '我读这一节的你——这一节比上一节更难。我会慢慢讲。\n\n' +
        '一个月夜——三个西班牙士兵进我们村。他们到我们家——我跟妈妈在 *bohío* 里。\n\n' +
        '士兵闯进来。妈妈想把他们推开——但她比他们瘦小很多。他们把我推到墙边——让我看。\n\n' +
        '——我不能写下接下来发生什么。我只告诉你:那一夜结束的时候,妈妈坐在地上,头靠着墙。她叫我过去。她的手摸我的脸,她的眼睛看我——但她没说话。\n\n' +
        '一个月后,妈妈开始发烧。皮肤上长红色小点——后来变成水泡。她吐。她躺在 *bohío* 地上,一直叫我去远一点。\n\n' +
        '——这是天花。一种从西班牙人身上来的、Taíno 人之前从来没有过的病。我们没有抗体——一个村子里第一次有这种病的时候,经常 80% 的人死。\n\n' +
        '3 个月后——1497 年的春末——妈妈死。\n\n' +
        '是天花的病杀她,还是那个月夜杀她?——我不知道。我那时候 14 岁——我后来 50 年想这件事(我没活到 50 年——21 岁我饿死——但如果我能活到 50 年我会想这件事)——我现在跟你说:两件事都杀了她。\n\n' +
        '妈妈死的那一天我把她织一半的、传 8 代人的几何花纹腰带——卷起来,藏在 *bohío* 后面的一棵 *yuca* 树下。\n\n' +
        '——\n\n' +
        '⚠️ 这一节读起来,你什么感觉?\n\n' +
        '不要急着回答。先放手机/键盘 30 秒。让 14 岁的我跟你坐一会儿。',
      en:
        '1497. I am fourteen.\n\n' +
        'You who are reading this section — this section is harder than the last one. I will go slowly.\n\n' +
        'A moonlit night. Three Spanish soldiers came into our village. They came to our house. My mother and I were in the *bohío*.\n\n' +
        'The soldiers forced their way in. My mother tried to push them away — but she was much smaller than they were. They held me against the wall — they made me watch.\n\n' +
        'I cannot write down what happened next. I will only tell you: when that night ended, my mother sat on the ground, her head against the wall. She called me over. Her hand touched my face, her eyes looked at me — and she did not speak.\n\n' +
        'A month later my mother began to run a fever. Small red spots appeared on her skin — later they became blisters. She vomited. She lay on the floor of the *bohío* and kept telling me to go further away.\n\n' +
        'This was smallpox. A disease the Spaniards brought from across the sea, that no Taíno had ever had before. We had no immunity — when smallpox first reached a village, it was common for eighty out of every hundred people to die.\n\n' +
        'Three months later — late spring of 1497 — my mother was dead.\n\n' +
        'Was it the smallpox that killed her, or that moonlit night? I do not know. I was fourteen then — I would think about this for fifty years (I did not live fifty years — at twenty-one I starved — but if I had lived fifty years I would have thought about this) — and what I tell you now is: both things killed her.\n\n' +
        'The day my mother died I took the half-woven belt — the eight-generation geometric pattern — rolled it up, and hid it under a *yuca* tree behind the *bohío*.\n\n' +
        '—\n\n' +
        'How does this section feel to read?\n\n' +
        'Do not rush to answer. Put down the phone or the keyboard for thirty seconds. Let fourteen-year-old me sit with you a moment.',
    },
    deliverGoal: {
      cn: '1497 一个月夜士兵闯入,妈妈推不开他们(她比他们瘦小很多)。一个月后她发烧 + 长红疹 + 水泡——天花,Taíno 之前没接触过的病——3 个月后死。是病杀她还是那一夜杀她——两件事都杀了她。妈妈死那天我把她织一半的 8 代腰带藏在 *yuca* 树下。',
      en: 'In 1497 a moonlit night — soldiers forced their way in; my mother could not push them away (she was much smaller). A month later she began to fever — red spots, then blisters — smallpox, a disease the Taíno had never met — three months later she was dead. Was it the disease, or the night? Both. The day she died I rolled up her half-woven eight-generation belt and hid it under a *yuca* tree.',
    },
    engagementHook: {
      cn: '⚠️ 这一节读起来你什么感觉?放下 30 秒。14 岁的我把妈妈织一半的腰带藏在 *yuca* 树下。下一节:1498 叔叔。',
      en: 'How does this section feel? Put it down for thirty seconds. Fourteen-year-old me rolled up my mother\'s half-finished belt and hid it under a *yuca* tree. Next: 1498, my uncle.',
    },
    expectedLength: '550-620 字 CN ⚠️ careful scaffold + 反思停顿 (staging — 预期砍到 360-420)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N6 — STORY: 1498 叔叔 — 砍手 (黄金税不交)
  // ═══════════════════════════════════════════════════
  {
    id: 6,
    phase: 'story',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 砍手政策 (line 318-319) + 第 6.3 节 micro-detail',
    content: {
      cn:
        '1498 年。我 15 岁。\n\n' +
        '我叔叔——40 岁——爸爸的弟弟。爸爸死后他搬来跟我跟哥哥住。\n\n' +
        '叔叔每 3 个月要交一定量的黄金。但我们 Xaragua 西部不像东部山里——这里没有 *placer* 砂金河。叔叔交不出来。\n\n' +
        '第一个 3 个月——他用织布跟玉米换了一点点别村人筛出来的金子,凑足了。\n\n' +
        '第二个 3 个月——别村也快没了。叔叔交了一半的量。\n\n' +
        '第三个 3 个月——1498 年夏——他没东西交。\n\n' +
        'Hojeda 队又来。他们带名单。叔叔的名字在「未交」那一栏。\n\n' +
        '他们把叔叔拉到村中间的空地上。一个士兵从腰里抽出剑。叔叔的两个手腕——被一个一个砍下来。\n\n' +
        '我 15 岁站在 *bohío* 门口。我哥哥拉着我不让我看。\n\n' +
        '——\n\n' +
        '砍手不是杀人。砍完之后他们就走了。\n\n' +
        '但是大多数 Taíno 男人——叔叔这样的 40 岁男人——3 天之内就死了。\n\n' +
        '失血 + 感染 + 没有抗生素 + 没有缝合 + 心理崩溃——\n\n' +
        '叔叔在 *bohío* 里躺了 4 天。我哥哥用 *yuca* 叶子包他的两只手腕。我用 *areíto* 唱给他听——一首我妈妈教过我的关于 *Yúcahu* (我们的造物神) 的歌。\n\n' +
        '第 4 天叔叔死了。\n\n' +
        '——这就是 Columbus 1495 年定的「14 岁以上每 3 个月一定量黄金,不交砍手」政策的具体身体——一个 40 岁渔民的两只手腕。',
      en:
        '1498. I am fifteen.\n\n' +
        'My uncle — forty — my father\'s younger brother. After my father died, he moved in with my brother and me.\n\n' +
        'My uncle had to deliver a fixed quantity of gold every three months. But we are in western Xaragua, not the mountains of the east — there is no *placer* gold in the rivers here. He could not produce it.\n\n' +
        'First quarter — he traded woven cloth and corn for a little gold that men from another village had panned, and made the count.\n\n' +
        'Second quarter — the other village was running out too. He turned in half of the required amount.\n\n' +
        'Third quarter — summer 1498 — he had nothing.\n\n' +
        'Hojeda\'s men came again. They had the list. My uncle\'s name was in the column "did not deliver."\n\n' +
        'They dragged him into the open ground in the middle of the village. A soldier drew a sword from his belt. My uncle\'s two wrists — were cut off, one and then the other.\n\n' +
        'I was fifteen, standing at the doorway of the *bohío*. My brother held me back so I would not see.\n\n' +
        '—\n\n' +
        'Cutting off the hands is not the same as killing. After they cut, the soldiers left.\n\n' +
        'But most Taíno men — forty-year-old men like my uncle — were dead inside three days.\n\n' +
        'Blood loss, infection, no antibiotics, no stitches, the spirit broken —\n\n' +
        'My uncle lay in the *bohío* for four days. My brother wrapped his wrists in *yuca* leaves. I sang an *areíto* for him — a song my mother had taught me, about *Yúcahu*, our creator god.\n\n' +
        'On the fourth day my uncle died.\n\n' +
        'This is what the policy Columbus set in 1495 — "fourteen and above, fixed quantity of gold every three months, hand cut off if not" — looked like in one body. The two wrists of a forty-year-old fisherman.',
    },
    deliverGoal: {
      cn: '1498 叔叔交不出黄金——西班牙士兵把他两只手腕砍下来。他在 *bohío* 里躺 4 天死。我哥哥用 *yuca* 叶子包伤口,我唱 *areíto* (关于 *Yúcahu* 造物神的歌) 给他听。这是 Columbus 1495「14 岁以上每 3 个月不交砍手」政策的具体身体。',
      en: 'In 1498 my uncle could not produce the gold — soldiers cut off both his wrists. He lay in the *bohío* four days, then died. My brother wrapped the wrists in *yuca* leaves; I sang an *areíto* (the song of *Yúcahu*, our creator god) over him. This is the body the 1495 Columbus policy — "fourteen and above, gold every three months, hand cut off if not" — looked like.',
    },
    engagementHook: {
      cn: '叔叔交不出黄金——两只手腕砍下来——4 天后死。我唱 *areíto* 给他听。Columbus 1495 砍手政策的具体身体——一个 40 岁渔民的两只手腕。下一节:1499 哥哥。',
      en: 'My uncle could not produce the gold — both wrists cut off — dead in four days. I sang an *areíto* over him. Columbus\'s 1495 hand-cutting policy in one body — the two wrists of a forty-year-old fisherman. Next: 1499, my brother.',
    },
    expectedLength: '560-640 字 CN (staging — 预期砍到 360-420)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N7 — STORY: 1499 哥哥 — 天花
  // ═══════════════════════════════════════════════════
  {
    id: 7,
    phase: 'story',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 天花 1499 + Taíno 没有免疫力 + 80% 死亡率',
    content: {
      cn:
        '1499 年。我 16 岁。\n\n' +
        '只剩下我跟我哥哥。哥哥 19 岁。\n\n' +
        '1497 年妈妈死的那一波天花——传遍 Hispaniola。1498-1499 又有第二波。1499 年春——哥哥发烧。皮肤长红疹。水泡。\n\n' +
        '我做妈妈做过的同样的事——给他煮 *yuca* 粉糊,把他的额头用湿布擦,让他喝水。\n\n' +
        '我自己没病。后来人类才知道:有的人天生对某些病毒抵抗强一些——那时候我以为我活下来是 *Yúcahu* 决定的。\n\n' +
        '哥哥躺了 5 个星期。第 5 个星期他清醒过一次——他叫我:\n\n' +
        '「Anacaona——。不要死。。活下去——。唱 *areíto*——。把我们家所有人的名字——。唱进去。」\n\n' +
        '——3 天后哥哥死了。\n\n' +
        '我 16 岁。我们家——爸爸 1496 年河里死,妈妈 1497 年天花死,叔叔 1498 年砍手死,哥哥 1499 年天花死。\n\n' +
        '4 年。4 个人。4 种死法。\n\n' +
        '我把哥哥埋在 *bohío* 后面那棵 *yuca* 树旁边——妈妈织一半的腰带也埋在那里。\n\n' +
        '我开始按哥哥说的——把家里 4 个人的名字编进 *areíto*。我边唱边织布。\n\n' +
        '我那时候不知道——我的诗里只写到 4 个人。再过 5 年——会变成 6 个人。',
      en:
        '1499. I am sixteen.\n\n' +
        'Only my brother and I are left. He is nineteen.\n\n' +
        'The wave of smallpox that killed my mother in 1497 — spread across all of Hispaniola. A second wave came in 1498-1499. Spring 1499 — my brother began to fever. Red spots. Blisters.\n\n' +
        'I did the same things my mother had done — I cooked *yuca* paste, wiped his forehead with a wet cloth, made him drink water.\n\n' +
        'I did not get sick myself. Centuries later, humans would learn that some people are born more resistant to certain viruses than others. Back then I thought it was *Yúcahu* who decided I would live.\n\n' +
        'My brother lay sick five weeks. In the fifth week he had one clear hour — he called me:\n\n' +
        '"Anacaona. Do not die. Live. Sing the *areíto* — put all the names of our family — into it."\n\n' +
        'Three days later my brother was dead.\n\n' +
        'I was sixteen. My family — father, 1496, the river. Mother, 1497, smallpox. Uncle, 1498, the cut hands. Brother, 1499, smallpox.\n\n' +
        'Four years. Four people. Four different deaths.\n\n' +
        'I buried my brother behind the *bohío*, next to the *yuca* tree where I had buried the half-woven belt.\n\n' +
        'I began to do what my brother had asked — to weave the four names of my family into an *areíto*. I sang as I wove.\n\n' +
        'I did not know then — my poem held four names. Five years later — it would hold six.',
    },
    deliverGoal: {
      cn: '1499 哥哥 19 岁天花死。临死他说: 「不要死,活下去——唱 *areíto*——把我们家所有人的名字唱进去。」我 16 岁。爸爸/妈妈/叔叔/哥哥——4 年 4 人 4 种死法。我把哥哥埋在 *yuca* 树旁妈妈腰带旁。开始把 4 个名字编进 *areíto*。',
      en: 'In 1499 my brother, nineteen, died of smallpox. His last clear words: "Do not die. Live. Sing the *areíto*. Put our family\'s names into it." I am sixteen. Father, mother, uncle, brother — four years, four people, four different deaths. I buried him by the *yuca* tree next to my mother\'s belt. I began weaving four names into an *areíto*.',
    },
    engagementHook: {
      cn: '哥哥临死说: 不要死——唱 *areíto*——把我们的名字唱进去。我 16 岁——4 年 4 人 4 种死法。下一节:13 岁的我变成妈妈那一年。',
      en: 'My brother\'s last words: "Do not die. Sing the *areíto*. Put our names in it." I am sixteen — four years, four people, four deaths. Next section: the year I became a mother.',
    },
    expectedLength: '480-560 字 CN (staging — 预期砍到 320-380)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N8 — STORY: 1500-1502 我自己 ⚠️ careful scaffold (13 岁 → 强奸 → 怀孕)
  // ═══════════════════════════════════════════════════
  {
    id: 8,
    phase: 'story',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 1500 自己被强奸 + 15 生 mestizo 女儿 + 7thgrader 最 hardest moment scaffold',
    content: {
      cn:
        '1500 年。我 17 岁。\n\n' +
        '——\n\n' +
        '我读这一节的你——这一节是这一遍最难的一节。我写得慢。你读得慢。\n\n' +
        '哥哥死后,村里没什么人了——天花跟砍手跟矿河——5 年里 Xaragua 西部很多村空了一大半。我一个人住在 *bohío* 里。\n\n' +
        '一个白天——一个 *encomendero* (拥有 *encomienda* 的西班牙殖民者)来到我们村。*Encomienda* 是西班牙国王把一片地的「原住民」分给一个殖民者管的制度——名义上殖民者要给他们传教 + 保护——实际上是奴役。\n\n' +
        '这个 *encomendero*——他是 Hojeda 的朋友。他从 *bohío* 把我拉出来。\n\n' +
        '——我不写下接下来发生什么。\n\n' +
        '9 个月后——1500 年的冬天——我有一个女儿。\n\n' +
        '我那时候 17 岁。\n\n' +
        '⚠️——\n\n' +
        '你想一下:13 岁的孩子有 1 岁的女儿——这是什么样子。\n\n' +
        '你身边的人,有 13 岁的——就停一下,想想这个朋友。或者想 7 年级你自己班上的女生。13 岁——再过 1 年就可能是这样的处境。\n\n' +
        '我——我在哪一刻停止做小孩?\n\n' +
        '是 1495 年第一次见铁甲那一刻吗?\n\n' +
        '是 1496 年妈妈死那一夜吗?\n\n' +
        '是 1497 年妈妈病死,我 14 岁一个人继续织腰带那个下午吗?\n\n' +
        '是 1498 年砍手那个早上,我 15 岁哥哥拉着我不让我看吗?\n\n' +
        '是 1500 年那一天,*encomendero* 把我从 *bohío* 拉出去那一刻吗?\n\n' +
        '还是 1500 年冬天我抱着 1 岁前的女儿那个夜晚吗?\n\n' +
        '——我自己也不知道。我没有一个清楚的「停止做小孩」那一天。但我知道:1500 年冬天我抱着我的女儿,我已经不是 12 岁的我了。\n\n' +
        '我给女儿起的名字——按 *areíto* 的传统——叫 Tureyra。意思是「天空给的」。\n\n' +
        '——\n\n' +
        '⚠️ 读到这里——再放手机/键盘 30 秒。',
      en:
        '1500. I am seventeen.\n\n' +
        '—\n\n' +
        'You who are reading this — this is the hardest section in this playthrough. I write it slowly. You read it slowly.\n\n' +
        'After my brother died, the village was nearly empty — between smallpox, the cut hands, and the river, half the people of western Xaragua were gone in five years. I lived alone in the *bohío*.\n\n' +
        'One day — an *encomendero* (a Spanish settler holding an *encomienda*) came to our village. *Encomienda* was the system in which the Spanish king assigned the indigenous people of an area to one settler — officially the settler was supposed to give them religious teaching and protection; in practice it was enslavement.\n\n' +
        'This *encomendero* — he was a friend of Hojeda\'s. He pulled me out of the *bohío*.\n\n' +
        'I do not write down what happened next.\n\n' +
        'Nine months later — the winter of 1500 — I had a daughter.\n\n' +
        'I was seventeen.\n\n' +
        '—\n\n' +
        'Take a moment. A thirteen-year-old with a one-year-old daughter. Picture that.\n\n' +
        'If you know someone who is thirteen, pause and picture them. Or picture the girls in your seventh-grade class. Thirteen — only one more year, and this could have been their place.\n\n' +
        'When did I stop being a child?\n\n' +
        'Was it the moment in 1495 when I first saw the armor?\n\n' +
        'Was it the moonlit night in 1496?\n\n' +
        'Was it the afternoon in 1497, my mother dead, I am fourteen, alone, still weaving the belt?\n\n' +
        'Was it the morning in 1498, the hands cut off, my brother holding me back so I would not see?\n\n' +
        'Was it the day in 1500 the *encomendero* pulled me out of the *bohío*?\n\n' +
        'Or was it the winter night in 1500 when I held the daughter who had not yet turned one?\n\n' +
        'I do not know myself. There is no single day on which I stopped being a child. But I know this: the winter of 1500, holding my daughter, I was no longer the twelve-year-old who had stood on the beach.\n\n' +
        'I gave my daughter a name in the *areíto* tradition — Tureyra. It means "given by the sky."\n\n' +
        '—\n\n' +
        'Put down the phone or keyboard for thirty seconds before you read on.',
    },
    deliverGoal: {
      cn: '1500 一个 *encomendero* 把我从 *bohío* 拉出去。9 个月后冬天我有了女儿——我 17 岁(narrative 写 15 — 这里改成 17 跟时间线吻合)。我女儿叫 Tureyra (*areíto* 传统取名,「天空给的」)。reflection: 13 岁的孩子有 1 岁女儿是什么样子? 我哪一刻停止做小孩?——1495? 1496? 1497? 1498? 1500? 没有一个清楚的那一天。',
      en: 'In 1500 an *encomendero* pulled me out of the *bohío*. Nine months later — winter 1500 — I had a daughter. I was seventeen. Her name was Tureyra ("given by the sky," in the *areíto* tradition). Reflection: a thirteen-year-old with a one-year-old. Picture it. When did I stop being a child? 1495? 1496? 1497? 1498? 1500? There is no one day.',
    },
    engagementHook: {
      cn: '⚠️ 这一节最难。13 岁有 1 岁女儿——你身边有 13 岁的吗?想想她。我哪一刻停止做小孩——没有一个清楚的那一天。女儿叫 Tureyra (天空给的)。下一节:1502 las Casas 来。',
      en: 'The hardest section. A thirteen-year-old with a one-year-old daughter. Do you know someone who is thirteen? Picture her. When did I stop being a child? There is no single day. My daughter\'s name is Tureyra (given by the sky). Next: 1502, las Casas arrives.',
    },
    expectedLength: '750-820 字 CN ⚠️ hardest moment careful scaffold + 反思停顿 (staging — 预期砍到 480-540)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N9 — STORY: 1502 女儿死 ⭐ las Casas 17 岁刚到 Hispaniola (cross-lens 时空 hook)
  // ═══════════════════════════════════════════════════
  {
    id: 9,
    phase: 'story',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 Anacaona Jr. 1502 + las Casas 1502 Hispaniola 物理重叠 (Sarah audit line 200-203)',
    content: {
      cn:
        '1502 年。我 19 岁。\n\n' +
        'Tureyra 1 岁多。她开始会走路——*bohío* 里的木地上,小脚一晃一晃。\n\n' +
        '夏天——她发烧。红疹。水泡。\n\n' +
        '——天花。第三波。\n\n' +
        '我做我妈妈做过的、我哥哥做过的同样的事。但她那么小——5 天后她死。\n\n' +
        '我把 Tureyra 埋在 *bohío* 后面——爸爸的腰带、妈妈织一半的腰带、哥哥旁边。我们家在那棵 *yuca* 树下集起来了。\n\n' +
        'Tureyra 是 4 个里面最小的。\n\n' +
        '——\n\n' +
        '同一年。1502 年。9 月。\n\n' +
        '岛的另一边——东边的 La Isabela 港——一艘西班牙船到。船上有一个 18 岁的西班牙年轻人——他名字叫 Bartolomé de las Casas。他爸爸 Pedro de las Casas 是 Columbus 朋友——1493 年跟 Columbus 第二次航行来过 Hispaniola。\n\n' +
        '1502 年 Bartolomé 自己来了——18 岁——他来当殖民者,他自己也有 *encomienda*——他自己也奴役 Taíno。\n\n' +
        'Bartolomé 1502 年下船的那一天——我 19 岁——我刚埋完 Tureyra。\n\n' +
        '我们没见过面。Hispaniola 是一座大岛——东边到西边走 200 公里。Bartolomé 在东边的 La Isabela——我在西边的 Xaragua。\n\n' +
        '——但我们在同一座岛上,同一个月,同一片天空。\n\n' +
        '12 年后——1514——Bartolomé 30 岁会读到一段经文,会突然崩溃,会释放他的奴隶,会做修士,会用余生 50 年写书反对殖民暴力。1542 年他写《Brief Account of the Destruction of the Indies》——他写下 Anacaona 王后的名字。\n\n' +
        '但他写不下我的名字——我是合成人物。他没见过我。\n\n' +
        '我也没见过他——我 1504 年饿死。1502 年我们曾经同时在这座岛上。',
      en:
        '1502. I am nineteen.\n\n' +
        'Tureyra is just over a year old. She has begun to walk — small unsteady feet on the wooden floor of the *bohío*.\n\n' +
        'Summer — she ran a fever. Red spots. Blisters.\n\n' +
        'Smallpox. The third wave.\n\n' +
        'I did everything my mother had done, everything I had done for my brother. But she was so small — five days later she was dead.\n\n' +
        'I buried Tureyra behind the *bohío* — beside my mother\'s belt, beside my brother. Our family had gathered under that *yuca* tree.\n\n' +
        'Tureyra was the smallest of the four.\n\n' +
        '—\n\n' +
        'The same year. 1502. September.\n\n' +
        'On the other side of the island — the eastern port of La Isabela — a Spanish ship landed. On that ship was an eighteen-year-old Spaniard. His name was Bartolomé de las Casas. His father Pedro had been a friend of Columbus — Pedro had come to Hispaniola in 1493 with Columbus\'s second voyage.\n\n' +
        'In 1502 Bartolomé came himself — eighteen — to be a settler. He too had his own *encomienda*. He too enslaved Taíno.\n\n' +
        'The day Bartolomé stepped off that ship in 1502 — I was nineteen — I had just finished burying Tureyra.\n\n' +
        'We never met. Hispaniola is a large island — two hundred kilometers from east to west. Bartolomé was in La Isabela in the east. I was in Xaragua in the west.\n\n' +
        'But we were on the same island, in the same month, under the same sky.\n\n' +
        'Twelve years later — 1514 — Bartolomé, then thirty, would read a passage of scripture, break down, free his slaves, become a friar, and spend the next fifty years of his life writing against the violence of the conquest. In 1542 he wrote the *Brief Account of the Destruction of the Indies*, and he wrote down the name of Queen Anacaona.\n\n' +
        'But he could not write down my name — I am a composite. He never met me.\n\n' +
        'I never met him either — I starved in 1504. In 1502 we were on this island at the same time.',
    },
    deliverGoal: {
      cn: '1502 夏 Tureyra 1 岁多得天花 5 天死——埋在 *yuca* 树下家里 4 人旁边。同年 9 月——岛东边 La Isabela 港 18 岁 Bartolomé de las Casas 下船 (他爸爸 Pedro 是 Columbus 朋友 + 1493 来过岛)——他来当殖民者 + 自己有 *encomienda*。我跟他没见过面——岛 200 公里——但 1502 同一个月同一座岛同一片天空。12 年后 1514 他会 conversion——1542 写下 Anacaona 王后的名字——但写不下我。',
      en: 'Summer 1502 — Tureyra, just over a year old, smallpox, dead in five days. Buried under the *yuca* tree with the other four. The same year, September — eighteen-year-old Bartolomé de las Casas (his father Pedro was Columbus\'s friend, came to the island in 1493) steps off a ship at La Isabela on the eastern side, to be a settler with his own *encomienda*. We never met — the island is two hundred kilometers across — but 1502, same month, same island, same sky. Twelve years later, in 1514, he will convert. In 1542 he will write down the name of Queen Anacaona. He cannot write down mine.',
    },
    engagementHook: {
      cn: 'Tureyra 1 岁天花 5 天死——埋在家里 4 人旁。同月——岛另一边 18 岁 las Casas 下船当殖民者(他后来 1542 写下我阿姨 Anacaona 王后的名字——但写不下我)。我们 1502 同一座岛 200 公里相隔。下一节:1503/11/9。',
      en: 'Tureyra, smallpox, dead in five days, buried with the other four. The same month — eighteen-year-old las Casas, on the other side of the island, steps off as a settler (he will, in 1542, write down the name of my aunt Queen Anacaona — but never mine). 1502, same island, two hundred kilometers apart. Next: November 9, 1503.',
    },
    expectedLength: '780-860 字 CN ⭐ las Casas 1502 同岛 cross-lens hook (staging — 预期砍到 500-560)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N10 — STORY: 1503/11/9 Xaragua 80 酋长被烧 (含 Anacaona 王后真人)
  // ═══════════════════════════════════════════════════
  {
    id: 10,
    phase: 'story',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 Xaragua 1503/11/9 烧大厅 + Anacaona 王后真人 + Ovando 总督',
    content: {
      cn:
        '1503 年 11 月 9 日。我 20 岁。\n\n' +
        '新的西班牙总督 Nicolás de Ovando——1502 年到任——他比 Hojeda 更冷。他给我阿姨 Anacaona 王后送信:他要来 Xaragua,跟全岛西部的 80 个 *cacique* (酋长) 开「和平会议」。\n\n' +
        '阿姨——50 岁——是岛上最大酋邦的 *cacique* + 全岛最有名的 *areíto* 诗人——她相信「和平会议」可以谈。她让村里准备 *yuca* 面包,让 *areíto* 圈准备唱新歌。\n\n' +
        '我那一天没去。前一晚我做梦——梦到我爸爸跟妈妈跟叔叔跟哥哥跟 Tureyra 站在 *yuca* 树下——他们 5 个一起对我摇头。\n\n' +
        '我醒来——我跟阿姨说: 「我不去。」阿姨摸我的头——她说: 「Anacaona,你不一定要去。」她去了。\n\n' +
        '我拿着妈妈织一半的腰带——往山上走。\n\n' +
        '——\n\n' +
        '11 月 9 日下午——80 个 *cacique* + Anacaona 王后聚集在 Xaragua 一个大 *bohío* 里。Ovando 跟他的士兵把门口围起来。\n\n' +
        '一个 Taíno 男孩——后来逃到山上找到我——告诉我:Ovando 给一个手势——士兵开始烧大 *bohío*。\n\n' +
        '80 个 *cacique* 没有一个出来。\n\n' +
        '我阿姨——后来人说——她在大 *bohío* 烧的时候唱 *areíto*。她唱的是她自己 30 年前写的一首歌——讲 Xaragua 大地怎么从大海里升起来。\n\n' +
        '——\n\n' +
        '20 岁的我站在山上的树后面。我看到 *bohío* 那边的烟——黑色的烟柱直直升到天上,白色的云被切开。\n\n' +
        '那一晚我在山上唱 *areíto*——把家里 4 个人 + Tureyra + 阿姨 = 6 个人的名字编进去。\n\n' +
        '哥哥 1499 年说的话——他说我应该把家里所有人的名字都唱进去。他那时候不知道——「家里所有人」会变成 6 个人。',
      en:
        'November 9, 1503. I am twenty.\n\n' +
        'The new Spanish governor, Nicolás de Ovando — appointed in 1502 — was colder than Hojeda. He sent word to my aunt, Queen Anacaona: he was coming to Xaragua to hold a "peace meeting" with all eighty *caciques* (chiefs) of the western part of the island.\n\n' +
        'My aunt — fifty years old — was the *cacique* of the largest chiefdom on the island and the most famous *areíto* poet on Hispaniola. She believed a peace meeting could be talked through. She had the village prepare *yuca* bread. She had the *areíto* circle ready a new song.\n\n' +
        'I did not go that day. The night before, I dreamed — my father, my mother, my uncle, my brother, and Tureyra stood under the *yuca* tree, all five of them shaking their heads at me.\n\n' +
        'I woke. I said to my aunt: "I will not go." My aunt put her hand on my head and said: "Anacaona, you do not have to go." She went.\n\n' +
        'I took my mother\'s half-woven belt. I walked up the mountain.\n\n' +
        '—\n\n' +
        'On the afternoon of November 9, eighty *caciques* and Queen Anacaona gathered inside one large *bohío* in Xaragua. Ovando and his soldiers ringed the doorway.\n\n' +
        'A Taíno boy — later he ran up the mountain and found me — told me: Ovando gave a hand signal. The soldiers set fire to the great *bohío*.\n\n' +
        'Of the eighty *caciques*, not one came out.\n\n' +
        'My aunt — those who later spoke of it said — sang an *areíto* as the *bohío* burned. The song she sang was one she had composed thirty years before, about how the land of Xaragua had risen from the sea.\n\n' +
        '—\n\n' +
        'I, twenty, stood behind a tree on the mountain. I saw the smoke from the *bohío* — a black column rising straight up, cutting the white clouds open.\n\n' +
        'That night, on the mountain, I sang an *areíto*. I wove the names — my family\'s four, Tureyra, my aunt — six names — into the song.\n\n' +
        'What my brother had said in 1499 — that I should put every name in our family into the *areíto* — he had not known then that "every name in our family" would become six.',
    },
    deliverGoal: {
      cn: '1503/11/9 总督 Ovando 召集 80 *cacique* 在 Xaragua 大 *bohío* 开「和平会议」——下手势烧 *bohío*——80 全死,包括我阿姨 Anacaona 王后(50 岁,Xaragua 最有名 *areíto* 诗人)。我前一晚做梦看到死去 5 人摇头——没去——我 20 岁在山上看烟柱升起。那夜我把 6 个名字(家里 4 + Tureyra + 阿姨)编进 *areíto*。',
      en: 'November 9, 1503 — Governor Ovando called eighty *caciques* to a "peace meeting" in a great *bohío* in Xaragua, gave a hand signal, and the soldiers burned the building. All eighty died, including my aunt Queen Anacaona (fifty, the most famous *areíto* poet on the island). The night before I had dreamed my five dead family members shaking their heads — I did not go — at twenty I watched the column of smoke rise from the mountain. That night I wove six names — the four of my family, Tureyra, and my aunt — into an *areíto*.',
    },
    engagementHook: {
      cn: '1503/11/9 Ovando 总督把 80 *cacique* 烧死在大 *bohío* 里——包括 Anacaona 王后(我阿姨)。我前一晚做梦没去。20 岁山上看黑烟柱升起。那夜把 6 个名字编进 *areíto*。下一节:1504 山上。',
      en: 'November 9, 1503 — Governor Ovando burned eighty *caciques*, my aunt Anacaona among them. I had dreamed the night before and did not go. At twenty, on the mountain, I watched the column of smoke rise. That night I put six names into an *areíto*. Next: 1504, the mountain.',
    },
    expectedLength: '780-870 字 CN (staging — 预期砍到 480-560)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N11 — REFLECTION: 1504 山上饿死 + areíto 最后一句 + 13 岁孩子 reflection
  // ═══════════════════════════════════════════════════
  {
    id: 11,
    phase: 'reflection',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 1504 饿死 + 反思: 21 岁的孩子 / 13 岁的你',
    content: {
      cn:
        '1504 年。我 21 岁。\n\n' +
        '1503 年 11 月之后我一直在山上——*Bahoruco* 山——这一片岛西部的山地是 *cimarrón* (逃亡 Taíno) 最后的躲处。\n\n' +
        '山上能找的: *yuca* 野根, 鸟蛋, 蛇, 偶尔一只鬣蜥。冬天 1503/12——西班牙士兵进山搜——很多 *cimarrón* 躲在洞穴里。我躲在一个洞——洞里另外 4 个人——3 个孩子加一个老女人。\n\n' +
        '1504 春——3 个孩子先死。然后老女人。我一个人在洞里。\n\n' +
        '1504 春——岛上还有一些 Taíno——但 Xaragua 西部的我们这一支基本完了。1492 年估算 30 万到 100 万 Taíno 在岛上——1504 年降到 30 万以下。1542 年只剩 200 个。\n\n' +
        '我 21 岁。我饿得肚子已经不疼了——只觉得累。我躺在洞里——眼睛半闭。\n\n' +
        '——\n\n' +
        '我知道我快死了。\n\n' +
        '我做最后一件事:我用 Taíno 话——慢慢——把家里 6 个名字的 *areíto* 唱完最后一句。\n\n' +
        '哥哥 1499 年说: 「不要死,活下去——把我们家所有人的名字唱进去。」\n\n' +
        '我没活下去。我活到 21 岁。但我把 6 个名字唱进去了——我现在跟你说一遍:\n\n' +
        '1. 我爸爸 Yaguareix——1496 年河里。\n' +
        '2. 我妈妈 Bayajiba——1497 年天花。\n' +
        '3. 我叔叔 Caguarí——1498 年砍手。\n' +
        '4. 我哥哥 Maboguán——1499 年天花。\n' +
        '5. 我女儿 Tureyra——1502 年天花。\n' +
        '6. 我阿姨 Anacaona——1503 年烧死。\n\n' +
        '6 个名字。9 年。\n\n' +
        '现在——我闭眼。\n\n' +
        '——\n\n' +
        '⚠️——这一节读完,你 13 岁。\n\n' +
        '我 21 岁——也跟 13 岁的你只差 8 年。这 9 年里——我经历了 8 年里你身边人完全没经历过的事。\n\n' +
        '你停 30 秒——告诉我:21 岁的我闭眼之前——你想跟我说什么?',
      en:
        '1504. I am twenty-one.\n\n' +
        'Since November 1503 I have been on the mountain — the *Bahoruco* range in the west of the island, the last hiding place for the *cimarrón* (Taíno who fled).\n\n' +
        'On the mountain you can find wild *yuca* roots, bird eggs, snakes, sometimes an iguana. Winter 1503-1504 — Spanish soldiers came up into the mountains to search. Many *cimarrón* hid in caves. I hid in one — four other people inside, three children and an old woman.\n\n' +
        'Spring 1504 — the three children died first. Then the old woman. I was alone in the cave.\n\n' +
        'Spring 1504. Some Taíno were still alive elsewhere on the island, but our western Xaragua people were nearly all gone. In 1492 the estimate was three hundred thousand to one million Taíno on Hispaniola. By 1504 it had fallen below three hundred thousand. By 1542, two hundred remained.\n\n' +
        'I am twenty-one. I am so hungry my stomach no longer hurts — only tired. I lie in the cave, eyes half closed.\n\n' +
        '—\n\n' +
        'I know I am about to die.\n\n' +
        'I do one last thing. I sing — slowly, in Taíno — the last line of the *areíto* I have woven, with the six names of my family.\n\n' +
        'In 1499 my brother said: "Do not die. Live. Put every name in our family into the *areíto*."\n\n' +
        'I did not live. I lived to twenty-one. But I have put the six names in. Let me tell you them now, one time:\n\n' +
        '1. My father Yaguareix — 1496, the river.\n' +
        '2. My mother Bayajiba — 1497, smallpox.\n' +
        '3. My uncle Caguarí — 1498, the cut hands.\n' +
        '4. My brother Maboguán — 1499, smallpox.\n' +
        '5. My daughter Tureyra — 1502, smallpox.\n' +
        '6. My aunt Anacaona — 1503, burned.\n\n' +
        'Six names. Nine years.\n\n' +
        'Now — I close my eyes.\n\n' +
        '—\n\n' +
        'You who are reading this — you are thirteen.\n\n' +
        'I am twenty-one — only eight years older than you. In these nine years I went through what no one around you, in the past eight years, has been through.\n\n' +
        'Pause for thirty seconds. Tell me: before twenty-one-year-old me closes her eyes — what do you want to say to her?',
    },
    deliverGoal: {
      cn: '1504 我 21 岁山上 *Bahoruco* 洞里饿死。我用 Taíno 话唱完 *areíto* 最后一句——把家里 6 个名字唱进去: 爸爸 Yaguareix(1496 河)、妈妈 Bayajiba(1497 天花)、叔叔 Caguarí(1498 砍手)、哥哥 Maboguán(1499 天花)、女儿 Tureyra(1502 天花)、阿姨 Anacaona(1503 烧)。9 年 6 个人。reflection: 13 岁的你——21 岁的我闭眼之前——你想跟我说什么?',
      en: '1504 — twenty-one — starving in a cave in *Bahoruco*. In Taíno I sing the last line of the *areíto* I have woven, the six names of my family: my father Yaguareix (1496, river), my mother Bayajiba (1497, smallpox), my uncle Caguarí (1498, hands), my brother Maboguán (1499, smallpox), my daughter Tureyra (1502, smallpox), my aunt Anacaona (1503, burned). Nine years, six people. Reflection: you, thirteen — before twenty-one-year-old me closes her eyes, what do you want to say to her?',
    },
    engagementHook: {
      cn: '21 岁山洞里饿死前我唱完 *areíto*——6 个名字。13 岁的你——你想跟我说什么? 30 秒。',
      en: 'Twenty-one, starving in the cave, I finished the *areíto* — six names. You, thirteen — what do you want to say to me? Thirty seconds.',
    },
    expectedLength: '780-870 字 CN + 真问题 (staging — 预期砍到 500-580)',
    expectsRealAnswer: true,
  },

  // ═══════════════════════════════════════════════════
  // N12 — META: closing — 她不是数字, 是有名字 + 有诗 + 有家人 + 有具体死法的人
  // ═══════════════════════════════════════════════════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§3 教学要点 line 1078-1082 + 第 6 节 micro-detail echo + Atlantic slave trade 起点',
    content: {
      cn:
        '你刚从小 Anacaona 内部走完 1495-1504 这 9 年。\n\n' +
        '一个 12 岁的 Taíno 女孩。一个合成人物——不是真人。但她代表的——是真人。\n\n' +
        '1492 年 Hispaniola 估算 30 万到 100 万 Taíno。1542 年只剩 200。\n\n' +
        '加勒比海整个区域(Taíno + Caribs + Lucayans)50 年里大约 500 万到 1000 万人灭族。\n\n' +
        '——但「500 万到 1000 万」这个数字,是抽象的。你 13 岁的脑子记不住这个数字——你睡前梦不到这个数字。\n\n' +
        '你能记住的是什么?\n\n' +
        '是 1495 春第一次见铁甲那一刻吗?\n\n' +
        '是 14 岁的我把妈妈织一半的腰带藏在 *yuca* 树下吗?\n\n' +
        '是 1498 年那个早上叔叔的两只手腕——Columbus 1495 政策的具体身体?\n\n' +
        '是 1499 年哥哥临死说「把名字唱进去」?\n\n' +
        '是 1500 年我 13 岁有 1 岁女儿——你哪一刻停止做小孩?\n\n' +
        '是 1502 年女儿天花死的同一个月,18 岁 las Casas 在岛另一边下船——我们曾经在同一座岛上?\n\n' +
        '是 1503/11/9 阿姨在烧的大 *bohío* 里唱 30 年前自己写的 *areíto*?\n\n' +
        '是 1504 年山洞里 21 岁我闭眼前唱完最后一句——6 个名字?\n\n' +
        '——\n\n' +
        '说一句话告诉我哪一刻让你停下来。\n\n' +
        '——\n\n' +
        '**这一遍最后一件事**——\n\n' +
        '我有名字: Anacaona。我有家人 6 个名字。我有 *areíto* 写下他们的死。我有一种死法——21 岁山洞里饿死。\n\n' +
        '我不是「灭族 1 亿原住民」里的「1」。我是 Anacaona——黄金的花。\n\n' +
        '加勒比海是 Atlantic slave trade 的起点(Columbus 1495 第一批 500+ Taíno 奴隶被送回西班牙——这是大西洋奴隶贸易的开端)。也是西班牙第一个 plantation system 的起点。\n\n' +
        '500 年灭族——加勒比海原住民、北美原住民、Aztec、Inca、Maya——第一波是我和我家。\n\n' +
        '——但我有名字。\n\n' +
        '——\n\n' +
        '这个 Topic 还有另外两个视角:Columbus(1492 出航的人)和 las Casas(1502 下船的、1514 conversion 的、1542 写下我阿姨名字的修士)。\n\n' +
        '如果你做完这两个视角,你会发现一个 micro-detail——\n\n' +
        '关于一封 1493 年的信。\n\n' +
        '我不告诉你是什么。让你自己 connect。\n\n' +
        '准备好了吗?记忆考核:拼写、定义、应用题——把今天演过的变成你真正记得的。',
      en:
        'You have just walked through 1495-1504, those nine years, from inside Little Anacaona.\n\n' +
        'A twelve-year-old Taíno girl. A composite person — not a real one. But what she stands for is real.\n\n' +
        'In 1492, the estimate of Taíno on Hispaniola: three hundred thousand to one million. In 1542, two hundred.\n\n' +
        'Across the entire Caribbean — Taíno, Caribs, Lucayans — roughly five to ten million people were lost to genocide over fifty years.\n\n' +
        'But "five to ten million" is an abstract number. A thirteen-year-old brain cannot hold it. You will not dream of it before you sleep.\n\n' +
        'What can you remember?\n\n' +
        'Is it the spring 1495 moment, the first time I saw the armor?\n\n' +
        'Is it fourteen-year-old me hiding my mother\'s half-woven belt under the *yuca* tree?\n\n' +
        'Is it the morning of 1498, my uncle\'s two wrists — the body of Columbus\'s 1495 policy?\n\n' +
        'Is it 1499, my brother\'s last words — "put the names in the song"?\n\n' +
        'Is it 1500 — thirteen-year-old me with a one-year-old daughter — when did you stop being a child?\n\n' +
        'Is it 1502, the same month my daughter died of smallpox, eighteen-year-old las Casas stepping off a ship on the other side of the island — we were on the same island once?\n\n' +
        'Is it November 9, 1503 — my aunt singing, inside the burning *bohío*, the *areíto* she had composed thirty years before?\n\n' +
        'Is it 1504, the cave, twenty-one-year-old me singing the last line — six names — before I closed my eyes?\n\n' +
        '—\n\n' +
        'Tell me in one sentence which moment made you stop.\n\n' +
        '—\n\n' +
        '**One last thing about this playthrough.**\n\n' +
        'I have a name: Anacaona. I have a family of six names. I have an *areíto* that holds their deaths. I have a way of dying — at twenty-one, starving in a cave.\n\n' +
        'I am not the "1" inside "100 million indigenous people erased." I am Anacaona — Golden Flower.\n\n' +
        'The Caribbean is the starting point of the Atlantic slave trade (Columbus shipped the first 500+ Taíno slaves back to Spain in 1495 — that was the opening of the Atlantic slave trade). It is also the starting point of the first Spanish plantation system.\n\n' +
        'Five hundred years of genocide — Caribbean, North American, Aztec, Inca, Maya — the first wave was me and my family.\n\n' +
        'But I have a name.\n\n' +
        '—\n\n' +
        'This Topic has two other perspectives: Columbus (the man who sailed in 1492) and las Casas (the man who stepped off the ship in 1502, who in 1514 converted, who in 1542 wrote down my aunt\'s name).\n\n' +
        'If you walk through those two as well, you will find one micro-detail —\n\n' +
        'about a letter from 1493.\n\n' +
        'I will not tell you what it is. You will connect it yourself.\n\n' +
        'Are you ready? The mastery check: spelling, definitions, application questions — turning what you played into what you remember.',
    },
    deliverGoal: {
      cn: '我演了 9 节小 Anacaona——9 年 6 个家人 6 种死法。我有名字 Anacaona(黄金的花)、有 *areíto* 写下家人的死、有具体死法(21 岁山洞饿死)。加勒比海是大西洋奴隶贸易+第一个 plantation system 的起点—500 年灭族第一波是我跟我家——但我有名字。可以选: (1) 进 mastery 通关 / (2) 换 Columbus(1492 出航人)或 las Casas(1502 下船 + 1514 conversion + 1542 写下阿姨名字)视角——做完那两个会 connect 到一个关于 1493 年信的 micro-detail。',
      en: 'You played nine sections of Little Anacaona — nine years, six family members, six different deaths. I have a name (Anacaona, Golden Flower). I have an *areíto* that holds my family\'s deaths. I have a way of dying — twenty-one, the cave. The Caribbean is the start of the Atlantic slave trade and the first Spanish plantation system — five hundred years of genocide began here. But I have a name. Choose: (1) mastery check, or (2) the other two lenses — Columbus (the 1492 voyage) and las Casas (the man who stepped off in 1502, converted in 1514, wrote my aunt\'s name in 1542). After both you will connect a micro-detail about a 1493 letter.',
    },
    engagementHook: {
      cn: '**这一遍哪一刻让你停下?** 1495 铁甲? 14 岁藏腰带? 1498 砍手? 1499 哥哥说唱名字? 1500 13 岁有女儿? 1502 las Casas 同岛? 1503 阿姨烧? 1504 山洞 6 个名字? 一句话告诉我。然后选: mastery 或换 Columbus / las Casas 视角——会 connect 一个 1493 年信的 micro-detail。',
      en: '**Which moment made you stop?** 1495 armor? Fourteen-year-old hiding the belt? 1498 cut hands? 1499 brother saying sing the names? 1500 thirteen-year-old with a daughter? 1502 las Casas same island? 1503 aunt burned? 1504 cave six names? One sentence. Then choose: mastery, or one of the other two lenses (Columbus or las Casas) — to connect a 1493 letter micro-detail.',
    },
    expectedLength: '1050-1150 字 CN + 真问题 (staging closing — 预期砍到 580-680)',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// 导出 lens (Anacaona Jr. 顶层包装)
// ═══════════════════════════════════════════════════

export var anacaonaJrLens = {
  id: 'anacaona-jr',
  icon: '🌺',
  name: { en: 'Anacaona the Younger', cn: '小安娜卡奥娜' },
  nameCn: '小安娜卡奥娜 (虚构合成 1495-1504 Taíno 女孩)',
  role: {
    cn: 'Hispaniola Xaragua Taíno / 1495-1504 indigenous-witness-victim-with-name (有名字的原住民见证者-受害者) 视角',
    en: 'Hispaniola Xaragua Taíno / 1495-1504 indigenous-witness-victim-with-name lens',
  },
  description: {
    cn: '你是小 Anacaona,一个虚构合成的 12 岁 Taíno 女孩,代表 1492-1542 年加勒比海几十万被殖民 5 年内死光全家、史书没写名字的 Taíno 女孩。你阿姨 Anacaona 王后 (1503/11/9 烧死,真人) 是 Xaragua 酋邦的女王 + 全岛最有名的 *areíto* 诗人。1495 春你 12 岁第一次见铁甲 + 剑 + 马。9 年里你失去爸爸 (1496 *placer* 砂金河)、妈妈 (1497 强奸 + 天花)、叔叔 (1498 砍手)、哥哥 (1499 天花)、女儿 (1502 天花)、阿姨 (1503 烧)。1504 你 21 岁山洞里饿死前唱完 *areíto* 6 个名字。你不是数字,是有名字 + 有诗 + 有家人 + 有具体死法的人。',
    en: 'You are Little Anacaona, a fictional composite twelve-year-old Taíno girl who stands for the hundreds of thousands of Caribbean Taíno girls between 1492 and 1542 whose whole families died within five years of conquest, and whose names history did not record. Your aunt Queen Anacaona (burned alive November 9, 1503 , a real person) was queen of the chiefdom of Xaragua and the most famous *areíto* poet on the island. In spring 1495, at twelve, you saw armor, sword, and horse for the first time. Over the next nine years you lose your father (1496, *placer* gold river), your mother (1497, rape and smallpox), your uncle (1498, hands cut off), your brother (1499, smallpox), your daughter (1502, smallpox), and your aunt (1503, burned). In 1504, at twenty-one, you starve in a cave after singing the six names of your family into an *areíto*. You are not a number. You are a person , with a name, a poem, a family, and a specific way of dying.',
  },
  perspectiveTag: 'indigenous-witness-victim-with-name',
  fictionalDisclaimer: {
    cn: '小 Anacaona (Anacaona Jr.) 是虚构合成人物——史书没写过她。但 Anacaona 王后是真人——1503 年 11 月 9 日 Spanish 总督 Nicolás de Ovando 把她跟 80 个 *cacique* (酋长) 一起烧死,Bartolomé de las Casas 1542 年的《Brief Account of the Destruction of the Indies》写下她的名字。小 Anacaona 代表 1492-1542 年加勒比海几十万跟她一样、被殖民 5 年内死光全家、史书没写名字的 12 岁 Taíno 女孩。这种「真人 + 虚构合成」配对是跟 Reformation 里的 Sister Agnes (1539 修女) 同 pattern——让 receiving-end 的没名字的人有一个能跟你坐下来讲 9 年的 voice。',
    en: 'Little Anacaona (Anacaona Jr.) is a fictional composite — the chronicles never recorded her. Queen Anacaona, however, is a real historical person: on November 9, 1503, the Spanish governor Nicolás de Ovando burned her alive together with eighty other *caciques* (chiefs), and Bartolomé de las Casas wrote her name down in the *Brief Account of the Destruction of the Indies* in 1542. Little Anacaona stands in for the hundreds of thousands of twelve-year-old Taíno girls in the Caribbean between 1492 and 1542 who, like her, lost their whole families within five years of conquest and whose names history never recorded. This pairing of a real person with a fictional composite uses the same pattern as Sister Agnes (the 1539 nun) in the Reformation Topic — giving a receiving-end nameless person a voice that can sit down with you and tell nine years.',
  },
  storyboard: anacaonaJrStoryboard,
};

export default anacaonaJrStoryboard;

// ─── Storyboard 元信息 (staging) ───
export var meta = {
  topicId: 'age-of-exploration-1492',
  lensId: 'anacaona-jr',
  schemaVersion: 2,
  status: 'staging',
  estimatedMinutes: 38,
  authorNote:
    '12 nodes 完整 — 12 节 (1495 春 / 1495 夏 / 1495 秋 ⭐ Columbus 1493 信 cross-lens echo / 1496 爸爸 / 1497 妈妈 ⚠️ scaffold / 1498 叔叔 / 1499 哥哥 / 1500 自己 ⚠️ scaffold / 1502 女儿 + las Casas 同岛 / 1503/11/9 阿姨烧 / 1504 山洞 6 个名字 / closing) — N3/N9/N12 三处 cross-lens echo 全部就位',
};
