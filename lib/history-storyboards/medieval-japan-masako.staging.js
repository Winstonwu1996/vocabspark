// Medieval Japan T4 — Lens 3: Hōjō Masako (北条政子, defaultLens)
// receiving-end | widow-nun who held Kamakura | 1156-1225
//
// Topic: Medieval Japan 794-1603 · T4
// HSS-7.5 · AP-WHAP-1.3 (East Asian political transformation)
//
// Lens 3 设计:
//   id: 'masako-widow-nun'
//   name: 'Hōjō Masako'
//   nameCn: '北条政子'
//   role: 'receiving-end'
//   defaultLens: true
//   fictionalDisclaimer: false  ← 真实历史人物，不需要 fictionalDisclaimer
//
// 跨 lens 锁定:
//   N4 → 时宗 (Lens 1) — 政子构建的御家人忠诚体制，是时宗 1268 年拒绝蒙古的政治资源
//   N9 ↔ Byzantine Topic — 政子 1221 年演讲 ↔ Theodora 532 年 Nika 暴动演讲 (§19 已写)
//
// per AUTHORING_PIPELINE.md 12 条铁律:
//   1 (cultural ban) / 2 (anti-fab) / 4 (em-dash ≤ 3 per 段, 0 段 4+ chain)
//   6 (外语 bare + inline gloss) / 11 (引号「」) / 12 (expectsRealAnswer 默认 false)
//   N11 + N12 expectsRealAnswer: true
//   政子为真实历史人物，无 fictionalDisclaimer

export var lensId = 'masako-widow-nun';
export var lensName = 'Hōjō Masako';
export var lensNameCn = '北条政子';
export var lensRole = 'receiving-end';
export var lensDescription = '镰仓幕府创建期的内部见证者与政治决策者，1156-1225，伊豆武士之女，赖朝之妻，幕府之盾';
export var fictionalDisclaimer = false;
export var defaultLens = true;

export var storyboard = [

  // ═══════════════════════════════════════════════════
  // N1 — 1156 · 伊豆国出生 · 打破「贤妻良母」预设
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N1',
    title: {
      cn: '我生在权力地图的白地',
      en: 'I was born where the map goes blank',
    },
    setting: {
      time: '1156 年',
      place: '伊豆国，今静冈县伊豆半岛',
      cn: '保元之乱同年，京都政变与伊豆农村同时存在，互不知晓',
      en: 'Year of the Hōgen Disturbance in Kyoto; the capital crisis and Izu countryside coexisted, unknown to each other',
    },
    content: {
      cn: `1156 年，我出生在伊豆国（Izu Province）。那一年，京都正在发生保元之乱（Hōgen no Ran）——天皇家内部分裂，藤原氏内部分裂，武将源氏和平氏被拉进首都的权力游戏。

我不知道这件事。

伊豆在京都西南方向，隔着山，隔着海，隔着那种「远到发生了大事也很久才能听说」的距离。我父亲北条时政（Hōjō Tokimasa）是伊豆当地的御家人（gokenin）——字面意思是「将军家里的人」，但那时候还没有将军，这个称呼只是说他效忠于地方豪族网络，有自己的庄园（shōen），有武装，有土地，在伊豆半岛是个说得上话的人。在全国权力地图上，他几乎是白地。

我出生进来的世界，是伊豆的世界——不是《源氏物语》（Genji Monogatari）里薰香琴瑟的宫廷，不是藤原氏操弄天皇的幕后大厅，是庄园里的土地纠纷、债务清算、武装冲突和季节轮回。

人们后来经常把我描述成「贤妻良母」，或者「悲伤出家的遗孀」。这两种说法都把我缩小了。我想在第一节就说清楚：那不是我。

从边缘看权力，往往比在中心看得更清楚——因为没有装饰，只有骨头。我在伊豆度过的这 24 年，学到的是权力真正的样子。后来在镰仓，我认出了它。

那是后来的事。现在是 1156 年，我刚出生，京都出了大事，而我们不知道。

出生地点，决定了你最先学会什么语言的权力。我学会的第一种语言，是伊豆武士的语言。`,
      en: `In 1156, I was born in Izu Province. That same year, Kyoto was in the middle of the Hōgen Disturbance — the imperial family was fractured, the Fujiwara were fractured, and the warrior clans Minamoto and Taira were being pulled into the capital's power games.

I did not know this.

Izu is separated from Kyoto by mountains, by sea, by the kind of distance where major events take a long time to arrive. My father, Hōjō Tokimasa, was a local gokenin in Izu — "someone in the shogun's household" is the literal meaning, though there was no shogun yet; the title only meant he owed loyalty to a regional power network, had his own estate, had armed retainers, had land, and was a person whose word counted in Izu. On any national map of power, he was nearly invisible.

The world I was born into was Izu's world — not the incense and koto strings of the world in The Tale of Genji, not the backstage halls where Fujiwara manipulated emperors, but estate disputes, debt collection, armed conflict, and seasonal cycles.

People later described me often as a "virtuous wife and good mother," or as "the widow who took Buddhist vows out of grief." Both descriptions diminish me. I want to say clearly, from the first node: that is not who I am.

Seeing power from the margins is often clearer than seeing it from the center — because there is no decoration, only the skeleton. The twenty-four years I spent in Izu taught me what power actually looks like. Later, in Kamakura, I recognized it.

That is later. Right now it is 1156, I have just been born, something large has happened in Kyoto, and we do not know.

Where you are born determines which language of power you learn first. The first one I learned was the language of Izu warriors.`,
    },
    deliverGoal: 'N1 — 1156 出生伊豆 + 保元之乱同年但伊豆不知 + 打破贤妻良母预设 + 「边缘看权力更清楚」anti-Whig anchor',
    engagementHook: '「从边缘看权力，往往比在中心看得更清楚」——你有没有这样的经验：局外人看到了局内人看不到的事？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    sourcingNote: 'narrative §3；Mass 1989《Warrior Government in Early Medieval Japan》御家人体制分析',
  },

  // ═══════════════════════════════════════════════════
  // N2 — c.1156-1180 · 伊豆成长 · 白地里的权力教育
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N2',
    title: {
      cn: '没有装饰的权力长什么样',
      en: 'What power looks like without decoration',
    },
    setting: {
      time: 'c.1156-1180，0-24 岁',
      place: '伊豆国，北条氏庄园',
      cn: '平清盛控制京都时期，伊豆是武士权力的学校，没有宫廷礼仪的掩盖',
      en: 'Period of Taira no Kiyomori\'s dominance in Kyoto; Izu was a school of warrior power, without the courtly veil',
    },
    content: {
      cn: `我在伊豆度过的这 24 年，没有人教我《源氏物语》。

这不是遗憾。这是另一种教育。

京都贵族学的是：怎么把权力用诗歌和礼仪包裹起来，让它看起来不像权力。我父亲那一代伊豆御家人学的是：土地的边界在哪里，债务到期用什么方式索还，联盟关系怎么维护，武力什么时候用、什么时候威胁就够了。

这两种教育都是关于权力的。但我学到的那种，没有包装纸。

父亲的庄园平时是农业单位，秋收之后就变成账本——谁欠了多少，谁按时交了贡赋，谁试图讨价还价，谁跟邻近豪族暗中联系。我从小跟着父亲的账房走，听庄园管事报告。我学会了在一个房间里，通过一个人说话的速度、他看父亲的眼神、他的手有没有放松，来判断他在说谎还是说真话。

这不是我能在书上读到的东西。这是伊豆教给我的。

1160 年代，平清盛（Taira no Kiyomori）控制了京都，走的是藤原氏的老路：把女儿嫁给天皇。这件事的消息，传到伊豆的时候已经是几个月后的事。父亲听完，沉默了一下，说：「武将终究是走了外戚的路。这条路很短。」

我那时候大约 4 岁，还听不懂这句话的意思。

但 20 年后，赖朝来了，我记起了这句话。

这 24 年，我观察了一件事：权力不是头衔给的，头衔只是记录权力已经在谁手里。真正的权力是关系，是信用，是你说了话别人相信你会做到。父亲的庄园不大，但他说了话，伊豆人听。

我把这件事记在心里，像记一个会用到的工具。`,
      en: `The twenty-four years I spent in Izu — no one taught me The Tale of Genji.

This was not a lack. It was a different education.

What Kyoto nobles learned: how to wrap power in poetry and ritual, so it would not look like power. What my father's generation of Izu gokenin learned: where the estate boundary sits, how to collect a debt when it comes due, how to maintain an alliance, when to use force and when a threat is enough.

Both educations are about power. The one I received had no wrapping paper.

My father's estate was an agricultural unit in ordinary times. After the harvest it became an account book — who owed what, who had paid tribute on time, who was trying to negotiate, who had been quietly making contact with a neighboring family. From childhood I walked with my father's stewards, hearing the estate managers report. I learned to read a room: the speed at which someone spoke, how he looked at my father, whether his hands were relaxed, all told me whether he was lying or telling the truth.

That cannot be read in a book. That is what Izu taught me.

In the 1160s, Taira no Kiyomori took control of Kyoto by the old Fujiwara method: marrying his daughter to the emperor. News of this reached Izu months after the fact. My father heard it out, paused, and said: "A warrior has taken the courtier's path in the end. That path is short."

I was perhaps four years old. I did not understand what he meant.

Twenty years later, when Yoritomo arrived, I remembered it.

In those twenty-four years I watched one thing: power is not given by a title. A title only records where power already is. Real power is relationship, is credibility, is people believing that when you say something, you will do it. My father's estate was not large — but when he spoke, Izu listened.

I stored this observation like a tool I knew I would someday use.`,
    },
    deliverGoal: 'N2 — 伊豆成长 24 年 + 庄园政治实操经验 + 对比京都贵族教育 + 「权力不是头衔给的」+ 平清盛外戚路线预示',
    engagementHook: '「权力不是头衔给的，头衔只是记录权力已经在谁手里」——你见过哪些有头衔但没有真正权力的人，或者有权力但没有头衔的人？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    sourcingNote: 'narrative §3 + §2；Mass 1989 御家人阶层政治分析',
  },

  // ═══════════════════════════════════════════════════
  // N3 — 1180 · 与赖朝结婚 · 一次家族政治赌注
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N3',
    title: {
      cn: '这不只是一个爱情故事',
      en: 'This is not only a love story',
    },
    setting: {
      time: '1180 年，24 岁',
      place: '伊豆国，赖朝流放地周边',
      cn: '以仁王令旨反平氏；北条时政把政治赌注押在赖朝身上；政子嫁赖朝',
      en: 'Prince Mochihito\'s edict against the Taira; Tokimasa bets his political capital on Yoritomo; Masako marries Yoritomo',
    },
    content: {
      cn: `1160 年，源赖朝（Minamoto no Yoritomo）被平清盛流放到伊豆，当时他 13 岁。平清盛本来想杀他，有人劝说留了一命。赖朝在伊豆待了整整 20 年——不是坐牢，是半监视居住，不能随意进入政治活动，但可以走动。

他在伊豆认识了我父亲，认识了伊豆的御家人网络。我认识他，是从童年开始的。

1180 年，赖朝 33 岁，我 24 岁。

这一年，以仁王（Mochihito-Ō）发出令旨，号召各地源氏举兵反平氏。这是一个极度危险的政治赌局——举兵失败，全族灭亡；成功，翻身豪门。父亲听完令旨，决定支持赖朝举兵。

《吾妻鏡》（Azuma Kagami）——幕府官修史书，约 13 世纪末写定——记载，父亲原本已为我安排了婚事，对象是山木兼隆（Yamaki Kanetaka）。但我不顾安排，夜间逃到赖朝住处。父亲追赶，没追上。

这段记载需要谨慎处理。《吾妻鏡》是幕府的政治宣传，有塑造英雄配偶形象的动机，不能字字当作事实。但以下是学界共识：我确实嫁给了赖朝，这桩婚姻确实使父亲从「支持者」变成「岳父」——政治押注变得具体得多。Mass 1989 分析北条氏上升史，把这段婚姻放在「地方御家人进入全国政治」的框架里，而不是爱情故事的框架里。

一个婚姻决定，可以同时是个人选择和家族赌注。这两件事不矛盾。

我 24 岁，我知道这个男人有可能失败，知道失败的代价是什么。父亲也知道。赌注已经押下去了，押注的是这个家族，而这个家族押注的方式，是把我嫁过去。

这不只是一个爱情故事。爱情是真的，但它发生在一个政治赌局里，两件事同时都是真的。`,
      en: `In 1160, Minamoto no Yoritomo was exiled to Izu by Taira no Kiyomori, at the age of thirteen. Kiyomori had wanted him killed; someone persuaded him to let the boy live. Yoritomo spent twenty full years in Izu — not imprisoned, but under a kind of supervised residence, unable to move freely in political circles, though he could travel within limits.

He came to know my father in Izu, came to know the gokenin networks of the region. I knew him from childhood.

In 1180, Yoritomo was thirty-three. I was twenty-four.

That year, Prince Mochihito issued an edict calling on Minamoto warriors throughout the country to rise against the Taira. This was a politically dangerous gamble — failure meant the entire family line ended; success meant transforming from a marginal family to a major power. My father heard the edict out and decided to support Yoritomo's uprising.

The Azuma Kagami — the shogunate's official chronicle, finalized around the late 13th century — records that my father had already arranged a marriage for me, to a man named Yamaki Kanetaka. But I disregarded the arrangement, slipping away by night to Yoritomo's residence. My father pursued me and failed to catch us.

This account requires careful handling. The Azuma Kagami is political writing in service of the shogunate, with motivation to shape an image of the heroic founding couple. It cannot be taken word for word as fact. But the following is scholarly consensus: I did marry Yoritomo, and this marriage did convert my father from "supporter" to "father-in-law" — a much more specific form of political commitment. Mass (1989) analyzes the Hōjō family's rise within a framework of provincial gokenin entering national politics, not within a romantic story.

A single marriage decision can be simultaneously a personal choice and a family's political bet. These two things are not contradictory.

I was twenty-four. I knew this man might fail. I knew what failure would cost. My father knew too. The bet was already made. The family was betting everything — and the form that bet took was sending me across to his side.

This is not only a love story. The love was real. But it happened inside a political gamble, and both things were true at the same time.`,
    },
    deliverGoal: 'N3 — 1180 结婚 + careful framing《吾妻鏡》私奔叙事 + 北条时政政治赌注 + Mass 1989 分析 + 「婚姻 = 个人选择 + 家族赌注，两件事并不矛盾」',
    engagementHook: '「一件事可以同时是个人选择，也是家族赌注」——你觉得这两者可以同时是真的吗？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    sourcingNote: '《吾妻鏡》私奔记载 + Mass 1989 + narrative §3；careful framing: 幕府官修史书叙事动机',
  },

  // ═══════════════════════════════════════════════════
  // N4 — 1185-1199 · 镰仓幕府创建期 · 内部见证者
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N4',
    title: {
      cn: '见证者是最清楚的，也是最沉默的',
      en: 'The witness sees clearest, and speaks least',
    },
    setting: {
      time: '1185-1199，29-43 岁',
      place: '镰仓（Kamakura），幕府创建期',
      cn: '壇ノ浦之战后幕府建立；政子是「内部见证者」；四个孩子，两个早死；跨 lens：她构建的御家人体制是时宗 1268 年的政治资源',
      en: 'Shogunate founded after Battle of Dan-no-ura; Masako as inside witness; four children, two died young; cross-lens: the gokenin loyalty system she witnessed became Tokimune\'s political resource in 1268',
    },
    content: {
      cn: `1185 年，壇ノ浦之战（Battle of Dan-no-ura）结束了源平合战。平氏残部在今山口县的海峡里沉没，年幼的安德天皇被平氏抱入水中。赖朝成为镰仓政权的核心，1192 年朝廷正式封他为征夷大将军（Seii Taishōgun）。

我 29 岁，是将军的妻子。

我有四个孩子。两个幼年早死——这在那个时代的医疗条件下不是意外。活下来的是长子赖家（Yoriie，1182-1204）和次子实朝（Sanetomo，1192-1219）。

我不是那 14 年里的政治决策者。那是赖朝的权力，是父亲和义时的权力，不是我的。我是见证者——一个既懂伊豆武士语言，又懂镰仓幕府制度语言的人。两种语言都懂的人，往往是唯一真正看清楚发生了什么的人。

但见证者通常没有发言权。

那 14 年，我看着御家人（gokenin）体制怎么被建立起来。地方武士和将军之间，建立了一套「忠诚换土地保障」的关系——你跟着将军，将军承认你的庄园，你的土地权利由幕府背书。这套体制让镰仓幕府有了真正的地方基础，不只是军事权威，是经济利益的绑定。

我当时不知道——这套体制，我的孙子一辈的北条时宗（Hōjō Tokimune，1251-1284），会在我死后 26 年，用它来抵御蒙古的使者。1268 年，他能够让御家人全力备战，是因为这套「忠诚换土地保障」的关系在 1185 年就被建立起来了，我亲眼看着它搭建的每一块砖。

见证者往往是最清楚事情真相的人，也是最没有发言权的人。直到发言的时刻来临。`,
      en: `In 1185, the Battle of Dan-no-ura ended the Genpei War. The last Taira forces went down in the straits near today's Yamaguchi Prefecture, and the child Emperor Antoku was carried into the water by the Taira. Yoritomo became the center of the Kamakura regime; in 1192 the court formally appointed him Seii Taishōgun.

I was twenty-nine, wife of the shogun.

I had four children. Two died young — not unusual given the medicine of the era. The two who survived were Yoriie (1182-1204) and Sanetomo (1192-1219).

I was not a political decision-maker during those fourteen years. Power belonged to Yoritomo, to my father, to Yoshitoki. Not to me. I was a witness — the one person who understood both the language of Izu warriors and the language of Kamakura shogunate institutions. Someone fluent in both languages is often the only one who truly sees what is happening.

But witnesses usually have no voice.

Through those fourteen years I watched the gokenin system being built from the inside. Between the provincial warriors and the shogun, a structure was established: loyalty exchanged for guaranteed land tenure. You followed the shogun; the shogun recognized your estate; your property rights were backed by the shogunate. This structure gave Kamakura real local roots — not merely military authority, but a binding of economic interests.

What I did not know then: this same system, in the hands of Hōjō Tokimune (1251-1284) — a generation that would be born twenty-six years after my death — would be the political resource that let him refuse the Mongol envoys in 1268. His ability to mobilize gokenin for full military preparation traced back to this structure of "loyalty exchanged for land guarantee" that was built starting in 1185, brick by brick, while I watched.

A witness is often the person who sees the truth most clearly, and the person with the least standing to speak. Until the moment to speak arrives.`,
    },
    deliverGoal: 'N4 — 1185-1199 幕府创建期 + 政子「内部见证者」+ 御家人体制建立过程 + 跨 lens 锁定：时宗 1268 的政治资源来自政子构建期 + 「见证者最清楚也最没发言权」',
    engagementHook: '「见证者是最清楚的，也是最沉默的」——你有没有过这种感觉：你看得最清楚，但你没有机会说话？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    crossLensHook: '政子构建的御家人忠诚体制，是 Lens 1 北条时宗（1251-1284）1268 年拒绝忽必烈的政治基础——两人相差 95 年，但体制是同一根骨架。',
    sourcingNote: 'narrative §4 §5；Mass 1989；Sansom 1958',
  },

  // ═══════════════════════════════════════════════════
  // N5 — 1199 · 赖朝死 · 削发为尼 · 政治身份转换
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N5',
    title: {
      cn: '我剃了头，不是为了出家，是为了自由',
      en: 'I shaved my head — not to leave the world, but to move freely in it',
    },
    setting: {
      time: '1199 年，43 岁',
      place: '镰仓，赖朝死后',
      cn: '赖朝 1199 年 1 月死，死因成谜；政子削发为尼，法号「二位尼」；这是政治身份转换，不是退休',
      en: 'Yoritomo dies January 1199, cause unclear; Masako takes Buddhist vows under the name Nii-no-Ama; this is a political identity shift, not retirement',
    },
    content: {
      cn: `1199 年 1 月，赖朝死了，52 岁。《吾妻鏡》说他是落马，但细节含糊，后世有各种推测，没有定论。

我那年 43 岁。

按照那个时代武士妇女的礼制：丈夫死后，遗孀应该出家——剃发为尼，退出世俗生活，让儿子主持丧事，让家族的权力在儿子辈里重新分配。礼制的逻辑是：遗孀必须服从儿子，将军之母必须退到将军之后。

如果我按照礼制走，我就成了赖家（17 岁）的「母亲」。「母亲」在礼制里，是一个必须服从「儿子」的位置。

我削了发，取法号「二位尼（Nii-no-Ama）」。

这是礼制允许我做的动作，但我用的方式，跟礼制预设的结果完全相反。

出家，让我脱离了「将军遗孀」这个位置——那个位置有一个无形的约束：你必须服从你的儿子，因为你的儿子是将军。出家之后，我是宗教人士，不是将军的母亲，不是任何人的妻子。礼制对宗教人士的约束，跟对世俗妇女的约束，是两套不同的规则。我找到了那个缝隙。

「尼将军（Ama Shōgun）」这个称呼，最早出现在《吾妻鏡》1221 年前后的记录里。那是史书对我角色的总结，不是我的自称，也不是任何正式官职。Paul Varley（1994）提醒：后世文学和教科书把这个词反复强化，给我的形象加上了比当时现实更整齐的「女性权力」叙事。

那一天，赖家 17 岁，准备接任将军。我剃了头，变成了一个礼制上没有「母亲」身份的人。于是我可以继续作为政治行动者存在，而不是作为遗孀存在。

一个女人剃了头，不是为了出家，是为了自由。`,
      en: `In January 1199, Yoritomo died, at fifty-two. The Azuma Kagami says he fell from a horse, but the details are vague and later generations have proposed various explanations without reaching a conclusion.

I was forty-three.

By the warrior-widow custom of that era: when a husband died, a widow was expected to take Buddhist vows — shave her head, withdraw from worldly life, let her sons manage the mourning, let the family's power redistribute among the next generation. The logic of the custom: a widow must defer to her son, and the shogun's mother must stand behind the shogun.

If I followed that path, I would become Yoriie's "mother." In custom, "mother" is a position that must defer to "son."

I shaved my head and took the religious name Nii-no-Ama.

This was a move the custom allowed me to make — but the outcome I used it to achieve was completely opposite to what the custom assumed I would do.

Taking vows released me from the position of "shogun's widow" — that position carried an invisible constraint: defer to your son, because your son is the shogun. Once I had taken vows, I was a religious person, not a shogun's mother, not anyone's wife. The rules that custom imposed on religious figures and those it imposed on secular women were two different systems. I found the gap between them.

The label "Ama Shōgun" — Nun Shogun — first appears in the Azuma Kagami's records around 1221 as the chronicle's own summary of my role, not my self-designation, and not any official title. Paul Varley (1994) cautions that later literature and textbooks amplified the term repeatedly, attaching to my image a tidier "female power" narrative than the contemporary reality supports.

On the day I shaved my head, Yoriie was seventeen, preparing to take the shogunal position. I became, by the logic of custom, a person without the status of "mother." Which meant I could continue to exist as a political actor, rather than existing as a widow.

I shaved my head not to leave the world, but to move freely in it.`,
    },
    deliverGoal: 'N5 — 1199 赖朝死 + 政子 43 岁削发为尼 + 政治身份转换逻辑：脱离「母亲」礼制约束 + careful framing：「尼将军」是史书总结非自称（Varley 1994）+ 「剃头是为了自由」',
    engagementHook: '「用别人给的规则，做规则没预料到的事」——你能想到类似的例子吗？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    sourcingNote: 'narrative §4 §16；Varley 1994《Japanese Culture》「尼将军」称呼考；Sansom 1958 赖朝死因',
  },

  // ═══════════════════════════════════════════════════
  // N6 — 1203 · 废赖家立实朝 · 政治优先于母性的判断
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N6',
    title: {
      cn: '有些选择，只有放弃一部分自己，才能做出来',
      en: 'Some choices require giving up part of yourself to make',
    },
    setting: {
      time: '1203 年，47 岁',
      place: '镰仓，将军位废立',
      cn: '北条时政废赖家，立实朝为第三代将军；政子默许；McCullough 1985：政子是主动参与者',
      en: 'Tokimasa deposes Yoriie, installs Sanetomo as third shogun; Masako acquiesces; McCullough 1985: Masako as active participant',
    },
    content: {
      cn: `1203 年，父亲时政废掉了将军赖家——我的儿子——立赖家的弟弟实朝为第三代将军。实朝那年 11 岁。赖家 21 岁，被送往修禅寺（Shuzenji），翌年被杀。

我默许了这件事。

我知道这对我意味着什么：我的亲儿子被废，被送走，最终被杀。

人们后来用各种方式描述这件事：有人说我是权谋的受害者，被父亲和弟弟操控，无力阻止；有人把我描述成一个忍受父权压迫的悲哀母亲。

Helen McCullough（1985）的读法不同。她认为我是主动参与者，不是受害者。从这个角度看，我做了一个政治判断：赖家稳不住幕府。

赖家这个人，性格刚愎，在 21 岁的年纪还没有学会御家人体制需要的那种政治耐心。他在位期间已经和多位宿老产生冲突。如果他继续当将军，北条氏和御家人网络之间的裂缝会越来越大，幕府的内部稳定性会被侵蚀。我需要实朝——11 岁，好塑造，可以在北条氏的辅政下成长。

这是政治判断，不是母亲的判断。

这两种判断不是同一种判断。我做了政治判断，就意味着我没有做母亲的判断。这两件事不能同时都做，我只能选一个。

把政子读成「贤惠母亲忍受父权压迫」，是 19 世纪人把自己的叙事框架投射到 12-13 世纪的政治现实上（McCullough 1985）。那个框架在这里用不上。

有些选择，只有放弃一部分自己，才能做出来。我放弃的那部分，1203 年叫做「母亲」。`,
      en: `In 1203, my father Tokimasa deposed the shogun Yoriie — my son — and installed Yoriie's younger brother Sanetomo as the third shogun. Sanetomo was eleven years old. Yoriie was twenty-one. He was sent to Shuzenji temple and was killed the following year.

I acquiesced.

I knew what that meant for me: my own son deposed, sent away, killed.

Later, people described this event in various ways. Some said I was a victim of the scheme, manipulated by my father and brother with no power to stop it. Some described me as a sorrowful mother enduring patriarchal pressure.

Helen McCullough's (1985) reading is different. She sees me as an active participant, not a victim. From that reading, I made a political judgment: Yoriie could not hold the shogunate stable.

Yoriie was headstrong. By the age of twenty-one, he had not yet developed the political patience that the gokenin system required. During his tenure he had already generated friction with multiple senior warriors. If he continued as shogun, the cracks between the Hōjō house and the gokenin network would widen, and the internal stability of the shogunate would erode. I needed Sanetomo — eleven, shapeable, able to grow up under Hōjō guidance.

That was a political judgment. Not a mother's judgment.

Those two judgments are not the same thing. Making the political judgment meant not making the mother's judgment. Both could not be done simultaneously — only one could be chosen.

Reading Masako as "a patient mother enduring patriarchal oppression" is a 19th-century narrative framework projected onto 12th-13th century political reality (McCullough 1985). That frame does not fit here.

Some choices require giving up part of yourself to make. What I gave up in 1203 went by the name "mother."`,
    },
    deliverGoal: 'N6 — 1203 废赖家立实朝 + 政子默许 + McCullough 1985：主动参与者，非受害者 + 反 Whig：不是「贤惠母亲忍受父权」而是政治判断优先 + 「放弃一部分自己」',
    engagementHook: '「有些选择，只有放弃一部分自己，才能做出来」——你认为这种选择是强大还是软弱的表现？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    sourcingNote: 'narrative §4 §16；McCullough 1985《The Tale of the Heike》Stanford UP',
  },

  // ═══════════════════════════════════════════════════
  // N7 — 1213 · 和田合战 · 忠于体制的代价
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N7',
    title: {
      cn: '忠于体制的人，最终会失去所有个人的东西',
      en: 'Whoever stays loyal to a system will eventually lose everything personal',
    },
    setting: {
      time: '1213 年，57 岁',
      place: '镰仓，和田合战',
      cn: '义时消灭宿老和田义盛；政子支持义时；北条家权力进一步集中；镰仓旧日情谊消失',
      en: 'Yoshitoki destroys the veteran warrior Wada Yoshimori; Masako supports Yoshitoki; Hōjō power consolidates; old-generation Kamakura bonds severed',
    },
    content: {
      cn: `1213 年，弟弟义时（Hōjō Yoshitoki）消灭了宿老和田义盛（Wada Yoshimori）。这是北条氏清除镰仓内部潜在对手的又一步。

我支持义时。

和田义盛是镰仓早期的武将，跟着赖朝从源平合战走过来的老人。他跟我认识了超过 30 年，我知道他这个人——直率，忠义，按照旧武士的方式做事。他也是体制不需要了的人。北条氏的权力要继续集中，就不能有这样一个资历深厚的宿老长期占着侍所别当（Samurai-dokoro Bettō，统领御家人的军事要职）的位置。

义时来找我，要我表态。我表态了：支持。

我不是不知道这意味着什么。和田义盛死了，镰仓旧一代武将的情谊就彻底断了。那些从 1180 年就跟着赖朝的人，一个一个消失——有的死于内部权斗，有的被排挤，有的出走。那种创业期的氛围——大家都在赌一件事会不会成，彼此命运连在一起的氛围——在 1213 年正式结束了。

只剩下体制。

我每支持一个决定，就失去另一样东西。1199 年，我失去了「妻子」身份，换来政治行动空间。1203 年，我失去了「母亲」判断，换来幕府稳定。1213 年，我失去了镰仓老一辈武士的情谊，换来北条氏的权力集中。

这些交换都是我主动做的，没有人逼我。但每一次，我失去的那部分，都再也回不来了。

体制越来越稳固。我越来越空。`,
      en: `In 1213, my brother Yoshitoki destroyed the veteran warrior Wada Yoshimori. This was another step in the Hōjō house's clearing of internal Kamakura rivals.

I supported Yoshitoki.

Wada Yoshimori was one of the early Kamakura warriors — an old man who had fought through the Genpei War with Yoritomo. I had known him for more than thirty years. He was straightforward and loyal, operating by the old warrior standards. He was also someone the system no longer needed. For Hōjō power to keep concentrating, there could be no veteran warrior with deep seniority long holding the post of Samurai-dokoro Bettō — chief administrator of the shogun's warrior corps.

Yoshitoki came to me and asked where I stood. I told him: in support.

I was not unaware of what this meant. With Wada Yoshimori dead, the old bonds between Kamakura's founding generation of warriors were permanently severed. The people who had followed Yoritomo since 1180 were disappearing one by one — some killed in internal power struggles, some pushed to the margins, some gone. That atmosphere of the founding years — everyone betting on something uncertain, fates bound together — ended formally in 1213.

Only the system remained.

Each time I supported a decision, I lost something else in return. In 1199, I gave up the identity of "wife" and gained political room to move. In 1203, I gave up a mother's judgment and got shogunate stability. In 1213, I gave up the companionship of Kamakura's older generation of warriors and got further Hōjō consolidation.

All these exchanges were things I made actively. No one compelled me. But with each one, what I lost was something that could not come back.

The system grew more solid. I grew emptier.`,
    },
    deliverGoal: 'N7 — 1213 和田合战 + 政子支持义时 + 北条权力集中 + 「每次支持一个决定，就失去另一样东西」+ 镰仓创业期情谊终结 + 「体制越稳固，人越空」',
    engagementHook: '「忠于一件事，往往意味着背叛另一件事」——你觉得在生活里，这种两难可以被解决吗？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    sourcingNote: 'narrative §4 §5；Mass 1989；Sansom 1958《A History of Japan to 1334》',
  },

  // ═══════════════════════════════════════════════════
  // N8 — 1219 · 实朝被暗杀 · 所有孩子全部死去
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N8',
    title: {
      cn: '体制活了，孩子全死了',
      en: 'The system survived. Every child I bore did not.',
    },
    setting: {
      time: '1219 年，63 岁',
      place: '鹤岡八幡宫，镰仓',
      cn: '实朝在鹤岡八幡宫被侄子公晓刺杀；赖家 1204 年已死；政子失去最后一个儿子；源氏嫡流断绝',
      en: 'Sanetomo assassinated at Tsurugaoka Hachimangū by his nephew Kugyō; Yoriie had died 1204; Masako loses her last son; Minamoto main line ends',
    },
    content: {
      cn: `1219 年 1 月，实朝在鹤岡八幡宫（Tsurugaoka Hachimangū）参拜后被杀。行凶者是赖家的儿子公晓——他称实朝为杀父仇人（赖家 1204 年死于修禅寺，疑为义时授意）。

实朝死的时候 27 岁。我 63 岁。

赖家，1204 年死。实朝，1219 年死。我四个孩子，两个幼年早死，两个存活到成年，然后一个一个死掉。

四个孩子，全部死在我前面。

我维护的体制活了。我亲生的孩子，全部死去。

这是 receiving-end 的悖论——体制需要你喂养它，你喂养了它，它吃掉了你最重要的东西，然后继续运转，好像那些东西不重要。

但 1219 年，我没有崩溃。

我知道这听起来奇怪。也许更奇怪的是：我没有崩溃这件事，不是因为我不爱我的孩子，而是因为我对体制的判断，从来没有和对孩子的爱混在一起。两件事始终分开的。现在体制还需要我，我就还在体制里。

实朝死后，源氏嫡流断绝。将军位此后由从京都引入的皇族或藤原贵族子弟担任——名义将军，真正的权力在北条氏执权手里。

体制完成了它在实朝这里需要完成的事，然后继续往前走。我也继续往前走。

一个母亲的孩子全部死了，她还在为孩子们死于其中的那个体制工作。这是我 1219 年的处境。我没有好的语言来描述它。`,
      en: `In January 1219, Sanetomo was killed at Tsurugaoka Hachimangū after a religious ceremony. The killer was Kugyō, Yoriie's son — who called Sanetomo the murderer of his father (Yoriie had died at Shuzenji in 1204, likely on Yoshitoki's orders).

Sanetomo was twenty-seven. I was sixty-three.

Yoriie — dead in 1204. Sanetomo — dead in 1219. Of my four children, two had died young, two had grown to adulthood, and then one by one they died.

All four children died before me.

The system I maintained survived. Every child I bore died.

This is the receiving-end paradox — the system needs you to feed it; you feed it; it consumes the things that matter most to you; and then it keeps running as though those things did not matter.

But in 1219, I did not collapse.

I know this sounds strange. Perhaps what is stranger still: the fact that I did not collapse was not because I did not love my children, but because my judgment about the system had never been tangled up with my love for my children. Both things had always been separate. The system still needed me now; I was still inside the system.

After Sanetomo's death, the Minamoto main line ended. The shogunal position was then held by princes or Fujiwara aristocrats brought from Kyoto — figure-head shoguns. The real power was in the hands of the Hōjō regent.

The system finished what it needed from Sanetomo, and moved forward. I also moved forward.

A mother whose children have all died is still working for the system those children died inside of. That was my situation in 1219. I do not have good language for it.`,
    },
    deliverGoal: 'N8 — 1219 实朝被公晓刺杀 + 政子失去最后一个儿子 + 四个孩子全部死在她前面 + receiving-end 悖论：体制活了，孩子全死 + 政子没有崩溃 + 「体制完成了它需要的事继续往前走」',
    engagementHook: '「你维护的东西，最终消耗了你最重要的东西」——你怎么理解这种处境？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    sourcingNote: 'narrative §4 §16；McCullough 1985；Sansom 1958',
  },

  // ═══════════════════════════════════════════════════
  // N9 — 1221 · 承久之乱 · 政子的演讲
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N9',
    title: {
      cn: '最重要的话，在最不确定的时刻说出来',
      en: 'The most important words are spoken in the most uncertain moment',
    },
    setting: {
      time: '1221 年，65 岁',
      place: '镰仓，御家人集会',
      cn: '后鸟羽上皇讨幕令；御家人犹豫；政子演讲；McCullough 1985 + Bialock 2007 史料复杂性',
      en: 'Retired Emperor Go-Toba\'s anti-shogunate edict; wavering gokenin; Masako\'s speech; McCullough 1985 + Bialock 2007 on source complexity',
    },
    content: {
      cn: `1221 年，退位的后鸟羽上皇（Retired Emperor Go-Toba，1180-1239）颁布讨幕令，以「讨义时」为名，号召西国武士背叛镰仓，重新归附京都朝廷。这是镰仓幕府建立以来最严重的政治危机。

御家人集会。

我站起来发言之前，会场里有人还没有决定。后鸟羽上皇是上皇——传统上最高的文化权威，天皇制度的象征核心。对抗他，对很多武士来说，心理上有障碍。

《吾妻鏡》所载我的演讲大意是：「赖朝公从无到有建立这个政权，你们的土地、你们的地位，都来自那段历史。上皇此举是奸臣蒙蔽，不是上皇本意。如果还有人想投靠上皇，现在就说，我不阻拦；但如果你们想报答赖朝公的恩情，就现在举兵。」

这里需要诚实地说明：《吾妻鏡》成书于演讲发生 50 多年后，是幕府官修史书，有美化幕府建国合法性的动机。David Bialock（2007）和 Varley（1994）都指出，这段演讲在文本中有明显的「写定化」痕迹——措辞整齐，节奏有力，符合后世需要「传奇女性稳住幕府」的叙事。它可能被后期润色过。

但 Helen McCullough（1985）的判断是：演讲的内容可能是重构的，但政子确实在场，确实发表了影响御家人决策的讲话，这一点有充分旁证——幕府胜利是历史事实，她的政治行动是其中一个因素。

我不知道我说的话是否如记录中那样完整。但我知道我站起来的那一刻，我不知道结果会怎样。我只知道如果我不说，就没有人说。

这是政子 1221 年演讲，跟 Byzantine Topic 的狄奥多拉（Theodora）532 年 Nika 暴动时的「紫袍是好寿衣」并列。两个女性在政权最危险的时刻开口。两人都不是体制里的正式权力持有者，都用语言重新定义了危机的性质。最重要的话，往往是在最不确定的时刻说出来的。`,
      en: `In 1221, the Retired Emperor Go-Toba (1180-1239) issued an edict calling for the overthrow of the shogunate, framed as a campaign "against Yoshitoki," and calling on western warriors to abandon Kamakura and return to Kyoto's authority. This was the gravest political crisis since the shogunate's founding.

The gokenin assembly met.

Before I stood to speak, some in the hall had not yet decided. Go-Toba was an ex-emperor — the symbolic center of the imperial system, traditionally the highest cultural authority. Many warriors felt a psychological barrier to opposing him.

The Azuma Kagami records the substance of my speech: "Yoritomo built this government from nothing. Your land, your position — all of it comes from that history. What Go-Toba has done is the work of treacherous advisors; it is not Go-Toba's own true intention. If there is anyone here who wishes to go over to Go-Toba's side, say it now — I will not stop you. But if you wish to repay what Yoritomo gave you, take up arms now."

Something must be said honestly here: the Azuma Kagami was written more than fifty years after the speech occurred, as the shogunate's own official chronicle, with motivation to legitimize the shogunate's founding. David Bialock (2007) and Varley (1994) both note that the text shows signs of "formalization" — balanced phrasing, controlled rhythm, precisely fitting a later narrative need for a legendary woman who held Kamakura firm. The speech may have been shaped and polished afterward.

But Helen McCullough's (1985) judgment is: the speech's content may be a reconstruction, but Masako was there, and she did deliver words that influenced the gokenin assembly's decision — this has substantial evidence from other sources. The shogunate's victory in the Jōkyū Disturbance is historical fact; her political action was one of its components.

I do not know whether what I said was as complete as the record states. I only know that when I stood up, I did not know the outcome. I only knew that if I did not speak, no one would.

Masako's 1221 speech sits alongside Theodora's "the purple is a good burial shroud" during the Nika Riots of 532 in the Byzantine Topic. Two women speaking at the most dangerous moment for their respective regimes. Neither held formal power within their systems. Both used language to redefine what the crisis was. The most important words are often spoken in the most uncertain moment.`,
    },
    deliverGoal: 'N9 — 1221 承久之乱 + 御家人犹豫 + 政子演讲 + careful framing：《吾妻鏡》写定化 (Bialock 2007 / Varley 1994) + McCullough 1985：演讲影响有实质依据 + 跨 Topic：Theodora 532 年 Nika 暴动对照',
    engagementHook: '「不确定的时刻说出重要的话」——如果你不知道结果，你还会说吗？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    crossTopicHook: '政子 1221 年演讲与 Byzantine Topic 狄奥多拉（Theodora）532 年 Nika 暴动演讲并列——两位女性在政权最危险的时刻开口，相隔 689 年，都不是体制里的正式权力持有者，都用语言改变了危机的走向。（narrative §19 已写）',
    sourcingNote: '《吾妻鏡》1221 年记录 + McCullough 1985 + Bialock 2007 + Varley 1994；narrative §4 §16',
  },

  // ═══════════════════════════════════════════════════
  // N10 — 1221 同年 · 幕府胜 · 历史的 tipping point
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N10',
    title: {
      cn: '一个 tipping point 不是唯一原因',
      en: 'A tipping point is not the only cause',
    },
    setting: {
      time: '1221 年（承久之乱同年），65 岁',
      place: '镰仓 → 西国战场 → 后鸟羽流放地隠岐',
      cn: '幕府军 30 天击溃上皇军；后鸟羽流放隠岐；日本史上第一次武家政权彻底击败天皇的军事挑战',
      en: 'Shogunate forces defeat the retired emperor in 30 days; Go-Toba exiled to Oki; first time in Japanese history that a warrior government militarily defeated the imperial line',
    },
    content: {
      cn: `1221 年，御家人集会之后，幕府军西征。

30 天，后鸟羽上皇的军队被击溃。后鸟羽上皇流放隠岐（Oki，今岛根县离岛），在那里度过余生，1239 年死在流放地。

这是日本史上第一次：武家政权彻底击败了天皇/上皇的军事挑战。从这一年之后，直到 1868 年明治维新——647 年——天皇再也没有尝试武力推翻幕府。

这件事的意义，我在 1221 年不完全看得清楚。当时我只知道：幕府赢了，义时的权力更稳了，后鸟羽被送走了。

我的演讲，是这次胜利的因素之一。

但我需要说清楚：只是因素之一，不是唯一原因。幕府在东日本的军事基础、义时的战略部署、御家人的经济利益绑定、后鸟羽一方对西国武士动员能力的高估——这些加在一起，才是幕府胜利的完整解释。把 1221 年的胜利归功于我一个人的演讲，是把历史简化了。

一个女人的声音，可以成为历史的 tipping point。但 tipping point 不是唯一原因——它是已经在下坡路上的那块石头最后碰到的那个手指，而不是整座山坡。

北条义时从此主导战后处置——300 余名西国武士被没收土地，后鸟羽上皇家族全部流放。权力重心完全转移到义时手里。

我在这个结果里，是一个声音，是演讲，是那天早晨站起来的那个 65 岁的人。不是这场胜利的主人，但不是旁观者。

这个定位，我觉得是准确的。`,
      en: `In 1221, after the gokenin assembly, the shogunate's army moved west.

Thirty days: Go-Toba's forces were destroyed. The retired emperor was exiled to Oki Island — today's Shimane Prefecture — where he lived out his remaining years, dying in exile in 1239.

This was the first time in Japanese history: a warrior government had militarily defeated a challenge from the emperor or retired emperor. From that year until the Meiji Restoration in 1868 — 647 years — no emperor again attempted to use military force to overthrow the shogunate.

The full significance of this was not something I could completely see in 1221. What I knew then: the shogunate had won, Yoshitoki's power was more secure, Go-Toba was gone.

My speech was one of the factors in this victory.

But I need to be clear: one factor, not the only cause. The shogunate's military foundations in eastern Japan, Yoshitoki's strategic deployment, the economic-interest binding of the gokenin, Go-Toba's overestimation of his ability to mobilize western warriors — all of these together form the complete explanation for the shogunate's victory. Crediting 1221 to my speech alone would be simplifying history.

A woman's voice can be a tipping point in history. But a tipping point is not the only cause — it is the last finger that touches the stone that was already rolling downhill, not the whole slope.

Yoshitoki dominated the post-war settlement: more than three hundred western warriors had their lands confiscated, and Go-Toba's entire family was exiled. The center of power shifted completely to Yoshitoki's hands.

In this outcome, I was a voice, a speech, the sixty-five-year-old person who stood up that morning. Not the owner of the victory, but not a bystander.

That is the position. I think it is accurate.`,
    },
    deliverGoal: 'N10 — 承久之乱胜 + 后鸟羽流放隠岐 + 日本史第一次武家彻底击败天皇军事挑战 + careful framing：演讲是因素之一不是唯一原因 + 「tipping point 不是整座山坡」',
    engagementHook: '「一个 tipping point 不是唯一原因」——你觉得在历史上，有没有被过度归因于单一原因的事件？',
    expectsRealAnswer: false,
    nodeType: 'receiving-end',
    sourcingNote: 'narrative §4 §16；McCullough 1985；Varley 1994；Sansom 1958',
  },

  // ═══════════════════════════════════════════════════
  // N11 — 1221-1225 · 退出决策中心 · 体制用完就放下 · expectsRealAnswer: true
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N11',
    title: {
      cn: '体制使用人，用完了就放下',
      en: 'A system uses people, then sets them down',
    },
    setting: {
      time: '1221-1225 年，65-69 岁',
      place: '镰仓，承久之乱战后',
      cn: '北条义时主导战后处置；政子退回「见证者」位置；不是因为软弱，是体制完成了需要她做的事',
      en: 'Yoshitoki dominates post-war settlement; Masako returns to witness position; not weakness — the system completed what it needed from her',
    },
    content: {
      cn: `承久之乱之后，北条义时主导一切。

战后处置——300 余名西国武士没收土地，后鸟羽一家流放——都是义时的决定，不是我的决定。幕府在全国的权威确立之后，权力重心完全在义时手里。

我还在，但我不再是关键决策者。

这不是因为我衰老了，不是因为我软弱了，不是因为义时排挤了我。是因为体制完成了它需要我做的事，就不再需要我了。

1199 年，体制需要我成为幕府和北条氏之间的接口，我做了。1203 年，体制需要我对废赖家这件事默许，我做了。1213 年，体制需要我在和田合战上表态，我做了。1221 年，体制需要我在御家人面前开口——我开了。

每一次，体制需要我，我就在那里。

1221 年之后，体制不需要那个声音了，因为问题已经解决了。权力的逻辑，是功能性的，不是感情性的——你有用，你在场；你不再有那个特定的用处，你就退到边缘。

我没有对此感到屈辱，也没有愤恨。这是我从伊豆就懂的事：权力的位置，不是永久的，是条件性的。你的条件还在，你就在那里；条件变了，位置就变了。

1221 到 1225 年，我在镰仓，在幕府的运转里，但不在中心了。我再次成为见证者，这一次，是见证我自己构建和维护的体制，在我还活着的时候，就完成了对我的交班。

体制使用人，用完了就放下。

---

你看到这里，政子 65 到 69 岁，从关键决策者退回见证者。你怎么看这个过程？是「体制辜负了她」，还是「这是任何人在任何体制里都会面临的处境」？`,
      en: `After the Jōkyū Disturbance, Yoshitoki controlled everything.

The post-war settlement — more than three hundred western warriors dispossessed of land, Go-Toba's family exiled — these were Yoshitoki's decisions, not mine. Once the shogunate's authority over the whole country was established, the center of power was entirely in Yoshitoki's hands.

I was still present, but no longer a key decision-maker.

Not because I had grown old, not because I had grown weak, not because Yoshitoki pushed me aside. Because the system had finished what it needed me to do, and no longer needed me for it.

In 1199, the system needed me as the interface between the shogunate and the Hōjō house — I was there. In 1203, the system needed me to acquiesce in deposing Yoriie — I did. In 1213, the system needed me to declare my position during the Wada conflict — I did. In 1221, the system needed me to speak before the gokenin assembly — I spoke.

Each time the system needed me, I was there.

After 1221, the system no longer needed that particular voice — the problem had been resolved. The logic of power is functional, not sentimental: you are useful, you are present; you no longer have that specific use, you move to the margin.

I felt no humiliation from this, and no bitterness. This is something I understood since Izu: a position in power is not permanent, it is conditional. When your conditions hold, you are there; when the conditions change, the position changes.

From 1221 to 1225, I was in Kamakura, inside the shogunate's operation, but no longer at the center. I became a witness again — this time, witnessing the system I had built and maintained complete its handoff from me while I was still alive.

A system uses people, then sets them down.

---

Looking at this, Masako at sixty-five to sixty-nine, moving from key decision-maker back to witness — how do you read this? Is it "the system failed her," or is it "this is what any person inside any system eventually faces"?`,
    },
    deliverGoal: 'N11 — 1221-1225 战后 + 义时主导 + 政子退回见证者 + 不是软弱是体制用完就放下 + 反思问题：「体制辜负了她」vs「任何人在体制里都会这样」',
    engagementHook: '「体制使用人，用完了就放下」——你同意这是不可避免的，还是可以抵抗的？',
    expectsRealAnswer: true,
    nodeType: 'receiving-end',
    sourcingNote: 'narrative §4 §5 §16；McCullough 1985；Mass 1989',
  },

  // ═══════════════════════════════════════════════════
  // N12 — 1225 · 死 · 反 Whig 总结 · 孤例不是先例 · expectsRealAnswer: true
  // ═══════════════════════════════════════════════════
  {
    id: 'masako-N12',
    title: {
      cn: '她之后，再也没有人能这样做',
      en: 'After her, no one could do it again',
    },
    setting: {
      time: '1225 年，69 岁',
      place: '镰仓 → 历史记录 → 你现在坐着的地方',
      cn: '政子死，69 岁；她的演讲留在《吾妻鏡》里；反 Whig：孤例不是先例；跨 Topic：Theodora 548 年死，Masako 1225 年死，两人之后体制都没有产生同等级女性政治声音',
      en: 'Masako dies at 69; her speech preserved in Azuma Kagami; anti-Whig: a singularity, not a precedent; cross-topic: Theodora died 548, Masako 1225, neither system afterward produced comparable female political voices',
    },
    content: {
      cn: `1225 年，我死，69 岁。

镰仓的 8 月，热，我病了一段时间，然后不病了。

我的演讲留在《吾妻鏡》里。但《吾妻鏡》是幕府官修史书，我的声音经过了幕府的过滤——留下来的，是幕府需要留下的那个版本的声音。其他的，不在记录里。

1225 年之后，日本历史里，再没有一个女性能以自身名义执掌政权，或发出可以被史书记录的政治声音。我是日本史上「女性政治声音在制度里消失」的节点，而不是这种声音的开端。我的出现，是孤例，不是先例。

这件事值得仔细想：我的出现，是因为当时有一个罕见的条件组合——伊豆武士家庭出身（懂权力的真实面目），赖朝的妻子（合法性来源），父亲和弟弟的政治支持网络，加上 1199 年出家找到的礼制缝隙。这些条件在 1225 年之后，没有在任何一个女性身上重新组合出来。制度性的原因，不是个人能力的原因。

跨 Topic 对比：Theodora 548 年死，我 1225 年死——相隔 677 年。两个女性之后的制度，都没有继续产生同等级的女性政治声音。Theodora 死后的拜占庭，政治里的女性声音逐渐式微；我死后的日本，执权体制在北条氏手里继续运转，但这个体制不再给女性任何制度性的位置。两个案例的规律是相同的：女性政治声音的出现，在那个时代不是趋势，是偶然，是条件性的，是不可复制的。

---

这是北条政子 12 节的最后一节。她不是「女性权力的先驱」，不是「贤妻良母」，也不是「封建压迫的受害者」。她是在极端约束下做出政治判断的人，在她活着的时候，制度允许她做这些判断；在她死了之后，制度没有再产生类似的条件。

你现在读完了她的故事。

历史记住北条政子，不是因为她开创了什么，而是因为她之后，再也没有人能这样做。那个「再也没有人」，是历史对她最诚实的评价，也是她所处的制度最诚实的证词。

你觉得：一个人被历史记住，是因为她特别，还是因为她之后的人更不特别？这两种理由，有什么区别？`,
      en: `In 1225, I died, at sixty-nine.

Kamakura in the late summer, heat, I had been ill for a time, and then I was not ill anymore.

My speech remains in the Azuma Kagami. But the Azuma Kagami is the shogunate's official chronicle, and my voice passed through the shogunate's filter — what was preserved is the version of my voice the shogunate needed to preserve. The rest is not in the record.

After 1225, no woman in Japanese political history again wielded power in her own name or generated a political voice deemed worth recording by the historical record. I am the node in Japanese history at which a female political voice went silent inside the institutional structure — not the beginning of such a voice. My existence was, in history, a singularity, not a precedent.

This is worth thinking through carefully: my existence depended on a rare combination of conditions — born into an Izu warrior family (understanding power's real face), wife of Yoritomo (source of legitimacy), the political support network of my father and brother, and the gap in ritual custom I found by taking vows in 1199. After 1225, these conditions did not recombine in any other woman. The reason is institutional, not a question of individual capacity.

A cross-topic comparison: Theodora died in 548; I died in 1225 — 677 years apart. Neither of the institutional systems that followed either of us continued to produce female political voices at the same level. After Theodora, women's political voice in Byzantine institutional life gradually faded. After me, the regent system continued in Hōjō hands, but the system gave women no institutional position. The pattern in both cases is the same: the appearance of female political voice in that era was not a trend, it was contingent — conditional, non-reproducible.

---

This is the twelfth and final node of Hōjō Masako's story. She was not "a pioneer of female power," not a "virtuous wife and good mother," and not "a victim of feudal oppression." She was a person making political judgments under extreme constraint — while she was alive, the institutional conditions allowed those judgments; after she died, the institution did not produce the conditions again.

You have now read her full story.

History remembers Hōjō Masako not because she pioneered something, but because after her, no one could do it again. That "no one afterward" is history's most honest assessment of her — and the institution's most honest testimony about itself.

What do you think: is a person remembered by history because she was exceptional, or because those who came after her were less exceptional? What is the difference between those two explanations?`,
    },
    deliverGoal: 'N12 — 1225 死 + 演讲经幕府过滤 + 反 Whig 总结：孤例不是先例 + 条件性分析（伊豆出身 + 赖朝妻 + 出家缝隙）+ 跨 Topic：Theodora 548 / Masako 1225 对比 + 「历史记住她，因为她之后再没有人能这样做」',
    engagementHook: '「被历史记住，因为她特别，还是因为她之后的人更不特别」——这两种理由，对你来说有什么区别？',
    expectsRealAnswer: true,
    nodeType: 'receiving-end',
    crossTopicHook: '拜占庭 Topic：Theodora 548 年死，Masako 1225 年死，相隔 677 年。两个女性之后的制度都没有再产生同等级的女性政治声音——不是个人能力的问题，是制度性条件的问题。（Byzantine Topic §19）',
    sourcingNote: 'narrative §16 末尾；McCullough 1985；Varley 1994；Bialock 2007；Sansom 1958',
  },

];
