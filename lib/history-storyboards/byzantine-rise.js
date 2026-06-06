// ─── Byzantine Rise 285-1453 Lens-based Storyboard (Story-First v2) ─
//
// Topic: 拜占庭兴起 · Byzantine Rise 285-1453 (focus 285-1071)
// HSS-7.1 · AP World 1.1 (post-classical)
//
// 3 lens 设计 (per Sarah Chen audit 8.5/10):
//   - emperor-justinian      (perpetrator-actor / overreach-system-builder) — 482-565
//   - theodora               (lonely-mediator / from-stage-to-purple) — 500-548
//   - anna-the-iconographer  (receiving-end / female-monastic-image-maker, 8c 虚构合成) — ~710-~820
//
// 跨 lens micro-detail (per Sarah audit STRONG AGREE):
//   Hagia Sophia 圆顶 1500 年 5 身份:
//   - emperor-justinian N5: 537.12.27 完工 (Anthemius+Isidore pendentive)
//   - theodora N8: 同走入 + 532 Nika 救 (Hippodrome 跟 Hagia Sophia 一墙之隔)
//   - anna-the-iconographer N8: 787 Nicaea II 67 岁带学生重画圣像
//   - 1054.7.16 East-West Schism 在圣坛上发生
//   - 1453 改清真寺 / 1934 凯末尔博物馆 / 2020 Erdogan 改回清真寺
//
// porphyry thread (Theodora "purple as shroud" → 1083 Anna Komnene "porphyrogenita") 跨 600 年呼应
//
// defaultLens = 'anna-the-iconographer' (per Sarah audit + 7thgrader pattern: 同龄锚 + female-monastic + Hagia Sophia 圆顶 5 身份 closing)
//
// 来源 staging:
//   - byzantine-rise-emperor-justinian.staging.js (12 nodes / Hagia Sophia 主线)
//   - byzantine-rise-theodora.staging.js (12 nodes / 532 Nika / porphyry thread)
//   - byzantine-rise-anna-the-iconographer.staging.js (12 nodes / 8c Iconoclasm / 虚构合成)

// ─── Byzantine Rise · LENS 1: Emperor Justinian I (perpetrator-actor) ────
//
// Topic: Byzantine Rise 330-1071 · 拜占庭崛起 (Constantine 建城 → Manzikert 转折)
// HSS-7.x · AP World 1.6 · cross-cultural Huizong / Mansa Musa / Lorenzo Medici anchor
//
// Lens 1 设计:
//   - id: 'emperor-justinian'
//   - name: 'Emperor Justinian I'
//   - nameCn: '查士丁尼一世'
//   - role: 'perpetrator-actor'
//   - perspectiveTag: 'overreach-system-builder'
//
// 不是「好人坏人」二元化 — 是「极致 ambitious system-builder + 系统性 overreach」两边都站。
// 482 农民出生 → 527 即位 45 岁 → 533 法典 + 537 圆顶 + 重夺地中海 → 542 鼠疫 → 565 死。
//
// 跨 lens micro-detail (Hagia Sophia 圆顶 1500 年 5 身份):
//   - Lens 1 (Justinian) N5: 537.12.27 完工 + 558 半塌 + Isidore 侄子重建
//   - Lens 2 (Theodora reference) — 532 Nika 跟 Hagia Sophia 一墙之隔, 见证 537 完工
//   - Lens 3 (Anna iconographer) — 8c Iconoclasm 内部装饰被毁
//   - 1054 East-West Schism 在圣坛上发生 / 1453 Mehmed II 改清真寺 / 2020 Erdogan 改回
//
// per AUTHORING_PIPELINE.md 12 条铁律:
//   1 (cultural ban) / 2 (anti-fab) / 4 (em-dash 预算 ≤ 3 per 段, 0 段 4+ chain)
//   6 (外语不用 *X*) / 11 (quote 「」严禁 «...») / 12 (expectsRealAnswer 默认 false)
//
// 严格规则:
//   - 不用 *italic* markdown — 外语词 bare + inline gloss
//   - 内嵌引号: 「」(CN) / "..." (EN)
//   - 每 node 350-550 CN chars
//   - 数学一致: 482 生 / 527.4.1 即位 / 532.1.13-18 Nika / 533-554 重夺 / 537.12.27 圆顶 / 542 鼠疫 / 565 死
//   - anti-fab: Mordechai et al. 2019 PNAS / Cameron 1976 Procopius 修正 / Brunelleschi 1436 Florence Duomo

export var emperorJustinianLens = {
  id: 'emperor-justinian',
  name: 'Emperor Justinian I',
  nameCn: '查士丁尼一世',
  role: 'perpetrator-actor',
  perspectiveTag: 'overreach-system-builder',
  description: {
    cn: '他是一个 45 岁刚从叔父接过东罗马皇位的人,巴尔干农民出身,父亲拉丁话说不利索,他却把拉丁、希腊、神学、罗马法读了个遍。这一遍让你坐进他 527 年加冕那天,皇后 Theodora、将军 Belisarius、法学家 Tribonian 在侧,他要同时做三件事:编一部罗马千年法典、重夺西部、为君士坦丁堡建一座配「罗马帝国」的大教堂,看这位 system-builder 端不端得起。',
    en: 'He is a forty-five-year-old who has just taken the Eastern Roman throne from his uncle, born to a Balkan peasant family whose father barely spoke proper Latin, yet who has read his way through Latin, Greek, theology, and Roman law. This pass puts you in his seat on the day of his coronation in 527, Empress Theodora at his side, Belisarius and the jurist Tribonian at his hand; three projects sit in his head at once, to compile a thousand years of Roman law into one code, to retake the west and turn the Mediterranean back into a "Roman lake," to raise for Constantinople a cathedral worthy of the words "Roman Empire," and you watch whether this system-builder can carry all three in one pair of hands.',
  },
  storyboard: [
    // ═══════════════════════════════════════════════════
    // N1 — HOOK: 482 出生 Tauresium 农民家庭 / 叔父 Justin I 卫队司令 / 36 岁前学习
    // ═══════════════════════════════════════════════════
    {
      id: 'just-n1',
      type: 'narrative',
      content: {
        cn: '482 年, 巴尔干一个叫 Tauresium 的小村 (今北马其顿), 一户农民人家生了个男孩, 取名 Petrus Sabbatius。这就是我。\n\n父亲是农民, 拉丁语都说不利索。但我有个叔叔 Justin, 离村去君士坦丁堡当兵, 升到皇家卫队司令。他没儿子, 504 年前后把我接到首都, 改名 Justinian, 当儿子培养。我学了拉丁、希腊、神学、罗马法 (这成了我一生最大工程的种子)。\n\n518 年老皇帝 Anastasius I 无嗣而死, 叔叔在士兵拥戴下登基。叔叔不识字, 朝政大量靠我。527 年 4 月他死, 我单独即位, 45 岁。\n\n我接手的不是「艺术皇帝」的位置, 是一座濒危帝国。西罗马 476 年已被日耳曼吞掉, 西部那一半 — 意大利、北非、西班牙 — 全在汪达尔、东哥特、西哥特手里 (东西分治的根上溯到 285 年 Diocletian 的「四帝共治制」)。我只有一个念头: 全部夺回来。\n\n接下来 12 节, 你跟我走 38 年帝位 + 1500 年遗产。你会明白我为何至今争议: 我是 6 世纪最 ambitious 的 system-builder 之一, 也是把帝国 over-extend 到崩溃边缘的责任人之一。',
        en: 'The year is 482, the Balkans. A village called Tauresium — modern North Macedonia, about twenty kilometers southwest of Skopje. A peasant household. A boy is born. The villagers call him Petrus Sabbatius, Latin for "son of Peter." That is me.\n\nMy father is an ordinary peasant who barely speaks Latin. But I have an uncle, Justin, who left the village in the 470s to soldier in Constantinople and rose to commander of the Excubitors, the imperial guard. Uncle has no son. Around 504 he brought me to the capital, renamed me Justinian, and raised me as his heir.\n\nThe work I later produced tells the story. I studied Latin, my native tongue; Greek, the working language of the court; theology, the core of sixth-century politics; and Roman law, the seed of the largest project of my life. I read every book a sixth-century man could read.\n\nOn 9 July 518 the old emperor Anastasius I died without a son. The army acclaimed Uncle Justin emperor at sixty-eight. I was thirty-six. I entered the palace as magister militum, master of soldiers — and since Uncle was barely literate, much of the governing fell to me.\n\nOn 1 April 527 Uncle, very ill, named me co-emperor. He died three days later. I took the throne in my own name, at forty-five.\n\nI am not inheriting the seat of an art-loving emperor. I am inheriting a half-empire. The west — Italy, North Africa, Spain — fell to the Vandals, Ostrogoths, and Visigoths after Rome ended in 476. (The east-west split traces back to 285 and Diocletian\'s tetrarchy, "rule of four.") One thought sits at the center of my mind: take it all back.\n\nOver the next twelve sections you will walk thirty-eight years on the throne with me, and the fifteen hundred years of legacy that followed. By the end you will know why I am still debated. I am one of the most ambitious system-builders the sixth century produced, and one of the men most responsible for over-extending an empire to the edge of collapse.',
      },
      deliverGoal: 'N1 hook — 482 Tauresium 农民出身 + 叔 Justin I 卫队司令 + 36 岁前学拉丁希腊神学罗马法 + 527.4.1 即位 45 岁 + 重夺西部伏笔',
      engagementHook: '一个农村男孩 36 岁前没做过任何政治决策 — 你身边谁是这种「准备很久才动」的人?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N2 — SETUP: 527 即位 + Theodora 加冕 + Procopius 史源警告
    // ═══════════════════════════════════════════════════
    {
      id: 'just-n2',
      type: 'narrative',
      content: {
        cn: '527 年我跟 Theodora 一起加冕。\n\n关于 Theodora, 你听过的版本大概是「演员皇后」「赛马场熊看守的女儿」。这些主要来自 Procopius 的《秘史》(Secret History)。他是我朝廷官方史官, 公开发表的著作都是颂扬版; 但他私下写了《秘史》, 死后才被发现, 把我和 Theodora 骂得很难听。\n\n史源批判必须扣住: 《秘史》是党派攻击文本 (partisan polemic), 不是中立史料 (Cameron 1985)。\n\n但 Theodora 出身底层是真的: 父亲是赛马场熊看守, 她年轻时演过哑剧。523 年法律改了, 原禁贵族娶演员, 新法允许「悔改的演员」嫁贵族 — 专为她改。525 年我们结婚。\n\n她不是「皇帝身后的女人」, 是我共治的另一极, 有自己的接待大厅、官员、政策。后面你会看到: 532 Nika 她救了我; 535 年她推保护妓女的法律; 整朝她庇护一性论 (Monophysite) 派, 跟我官方立场相左。\n\n527 年加冕, 我有 Theodora、最强将军 Belisarius、最强法学家 Tribonian。三件事: 法典 + 重夺地中海 + 一座配得上「罗马帝国」的大教堂。我 45 岁, 以为有 30 年, 实际有 38 年。',
        en: 'In 527 Theodora and I were crowned together.\n\nThe twenty-first-century version of Theodora you may have heard: actress empress, daughter of a Hippodrome bear-keeper, mime performer in her youth. These come mostly from one book — the Secret History by Procopius. Procopius was the official historian of my court; he campaigned with me and with Belisarius, and his public works, the Wars and the Buildings, are both flattering. But he wrote a third book privately, the Secret History, discovered only after his death, in which he tears Theodora and me apart.\n\nFor a twenty-first-century reading the warning is essential. The Secret History is a partisan polemic, not a neutral source. Averil Cameron, Procopius and the Sixth Century (1985), made the case clear — reading it, you must subtract Procopius\'s own politics.\n\nThat Theodora rose from the bottom is true. Her father Acacius was a Hippodrome bear-keeper. She did work in the mime theater as a young woman, and Byzantine mime is closer to striptease and slapstick than high art. In 523 the old rule that nobles could not marry actresses was rewritten so that "repentant actresses" could — written for her. We married in 525.\n\nShe is not "the woman behind the emperor." She is the other pole of a co-rule: her own reception hall, officials, policy track. Her impact returns here. In 532 she saves me at Nika. In 535 she pushes through laws protecting prostitutes. Throughout the reign she shelters Monophysite bishops, against my own official anti-Monophysite line.\n\nCrowned in 527, the picture in my head is clear. I have Theodora; Belisarius, my strongest general, twenty-seven; Tribonian, my strongest jurist; and a thirty-eight-year emperorship ahead. Three projects: the law code, the reconquest of the Mediterranean, and a cathedral worthy of the words "Roman Empire." I am forty-five. I think I have thirty years. I have thirty-eight.',
      },
      deliverGoal: 'N2 527 即位 + Theodora 加冕 + Procopius《秘史》是 partisan polemic 不是中立史料 (Cameron 1985 修正) + 三大工程意图 setup',
      engagementHook: 'Procopius 同一个史官写颂扬版 + 私下骂版 — 你 21 世纪信哪本? 史源批判怎么做?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N3 — 528-534 Corpus Juris Civilis Tribonian 法典工程
    // ═══════════════════════════════════════════════════
    {
      id: 'just-n3',
      type: 'narrative',
      content: {
        cn: '528 年 2 月, 即位才 10 个月, 我的第一件大事不是打仗 — 是修法。\n\n我派 Tribonian 主持, 他是 6 世纪最了不起的法学家之一。任务: 把罗马 1000 年的全部法律去重复、去矛盾、分类成一套体系。\n\n他用了 6 年, 编出四部: 528-529《法典》(Codex) 把近 400 年皇帝敕令整理成 12 卷; 530-533《学说汇纂》(Digesta, 最难) 把 39 位法学家约 200 万字筛删成 50 卷; 533《法学阶梯》(Institutiones) 是教科书; 534-565 我颁的新敕令叫《新律》(Novellae)。四部合称 Corpus Juris Civilis (民法大全)。\n\n它随帝国进入中世纪沉睡。但 11 世纪 Bologna 大学重新发掘出《学说汇纂》原稿 — 大陆法系 (civil law) 从这里重启。\n\n21 世纪你的法律还在用它: 法国 1804《拿破仑法典》以它为骨架, 德国 BGB、意大利、日本明治《民法》都是。全球约一半司法体系用大陆法系 — 都是我这 6 年工程的远孙。\n\n533 年我 51 岁, 以为只是「整理罗马法律」, 不知道这是人类影响最深的法律典籍。\n\n— 我也不知道, 同一年我已派 Belisarius 出征了。',
        en: 'February 528, ten months into the throne, my first major project is not a war. It is the law.\n\nI placed Tribonian in charge — born in Side in Asia Minor, the most formidable jurist of the sixth century, once quaestor sacri palatii, chief legal officer of the palace. The assignment: take a thousand years of accumulated Roman law, strip the duplications, settle the contradictions, and organize it into a system students can learn, judges can apply, and the emperor can promulgate.\n\nIt took him six years, in four parts.\n\n528-529: the Codex Justinianus, the imperial constitutions from Hadrian onward, in twelve books.\n\n530-533: the Digesta, the hardest piece. Thirty-nine major jurists had produced roughly two million words; Tribonian and a sixteen-jurist commission cut and re-organized that into fifty books of about a million words.\n\n533: the Institutiones, a four-book law-school primer.\n\nMy own later constitutions, 534-565, were collected as the Novellae. Together the four are called Corpus Juris Civilis, the body of civil law.\n\nIt disappeared into the medieval slumber along with the empire. But in the eleventh century the law school at Bologna rediscovered the Digesta, and continental civil law relaunched from there.\n\nIn the twenty-first century your legal system still uses it. The Napoleonic Code of 1804 took it as its skeleton; the German BGB (1900), the Italian Civil Code (1942), the Japanese Meiji Code (1898) all descend from the same line. Roughly half of jurisdictions today use civil law — all distant grandchildren of those six years.\n\nIn 533 I am fifty-one. I think I am tidying up Roman law. I do not know I am producing the most influential law book in human history — predating English common law by seven hundred years.\n\nAnd I do not know that, in this same year, I have already sent Belisarius to war.',
      },
      deliverGoal: 'N3 528-534 Corpus Juris Civilis — Tribonian + Codex + Digest + Institutiones + Novellae 四部 + Bologna 11c 重发掘 + 1804 拿破仑法典 + BGB + 60% 国家大陆法系',
      engagementHook: '21 世纪 60% 国家法律骨架是我 6 年里编的 — 你之前知道吗? 你身边法律里有什么是 6 世纪写的?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N4 — 532.1.13-18 Nika 暴动 + Theodora 救
    // ═══════════════════════════════════════════════════
    {
      id: 'just-n4',
      type: 'narrative',
      content: {
        cn: '532 年 1 月 13 日, 君士坦丁堡赛马场 (Hippodrome)。我即位 4 年 9 个月。\n\n先懂赛马场政治。它是 6 万人体育场, 紧贴皇宫, 跟我后来要建的 Hagia Sophia 只隔一墙。观众原分 4 党, 6 世纪实剩蓝绿 (Blues, Greens) 两派, 平时互殴, 但这天联合反我。\n\n起因琐碎: 两派暴徒被判绞刑, 行刑时绳子断了没死, 我拒绝赦免, 两党都恨我。\n\n1 月 13 日赛车日, 两党齐喊「Nika! Nika!」(希腊语「胜利」, 赛车口号变成造反口号)。当晚放火, 5 天烧掉城中心一半, 连 415 年建的 Hagia Sophia 老教堂也烧了。1 月 18 日他们要立新皇帝 Hypatius。\n\n那天我召集朝会准备弃城逃亡。Theodora 站起来:「我接受古人格言 — 紫袍是好寿衣 (porphyry is a fine shroud)。」意思是: 我宁可死着穿皇袍, 也不活着流亡。\n\n我留下了。\n\n傍晚 Belisarius 把暴民围在赛马场封闭空间内屠杀, 30,000 人死。学界 (Cameron 1976) 提醒: 规模没争议, 但这是镇压平民的屠杀, 不是战场死亡。\n\nNika 之后我决定: 烧掉的老教堂不修复, 重建一座 6 世纪从未见过的。',
        en: '13 January 532, the Hippodrome of Constantinople. Four years and nine months into my reign.\n\nUnderstand Hippodrome politics first. It is a sixty-thousand-seat stadium, sharing a wall with the palace and only a wall away from the Hagia Sophia I will later build. The four old factions had narrowed by the sixth century to Blues and Greens. They normally fight each other. But this day they did something rare: they joined forces against me.\n\nThe spark was small. On 10 January the prefect Eudaemon hanged some faction toughs; two ropes broke, one Blue and one Green, and both men landed alive. Monks tried to save them; I refused. Both factions hated me.\n\nAt the races on 13 January they chanted together, "Nika, Nika," Greek for "Victory," the racing cry turned to revolt. That night they poured out and set fires — the Senate house, the prefect office, and the old Hagia Sophia of Theodosius II, built in 415, all burned to the ground.\n\nFor five days they burned half the city center. On 18 January they prepared to crown a new emperor, Hypatius.\n\nThat day I called the council. I said, "To the ships. We leave by sea." I was ready to abandon the city.\n\nThen Theodora rose. "I accept the ancient saying — porphyry is a fine shroud." The imperial purple is reserved for emperors; her meaning was unmistakable: I would rather die in the purple than live in exile.\n\nI stayed.\n\nThat evening Belisarius and the general Mundus sealed the rioters inside the Hippodrome and killed them. Thirty thousand died. The number is not contested; what Cameron and others (1976) ask us to frame carefully is what kind of death this was — a massacre of civilians in an enclosed space, not battlefield combat.\n\nAfter Nika I decided one thing. The burned Hagia Sophia would not be repaired. It would be replaced, with something the sixth-century world had never seen.\n\nThe evening of 18 January 532, the city still burning outside, I sit in the palace sketching the curve of a dome in my head.',
      },
      deliverGoal: 'N4 532.1.13-18 Nika ⭐ — Hippodrome 蓝绿 2 派 (原 4 派) 联手 + 5 天烧 Hagia Sophia 老教堂 + Theodora「紫袍是好寿衣」(Wars 不是 Secret History 史源干净) + 30,000 死 careful framing (Cameron 1976) + 决定重建',
      engagementHook: '我 1 月 18 日早上准备逃 — 我老婆一句话留下我 — 你身边谁说过让你「不许跑」的关键一句话?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N5 — 537.12.27 Hagia Sophia 圆顶完工 ⭐⭐ cross-lens
    // ═══════════════════════════════════════════════════
    {
      id: 'just-n5',
      type: 'narrative',
      content: {
        cn: '537 年 12 月 27 日, Hagia Sophia (希腊语「神圣智慧」) 完工。我 55 岁, Nika 后约 6 年。\n\n我请的不是建筑师, 是两个数学家 Anthemius 和 Isidore。方案: 31 米直径中央圆顶, 离地 56 米。难点是圆顶怎么放在方形底座上? 解法叫 pendentive (帆拱), 用 4 个球面三角形过渡 — 建筑史第一次大规模成功用它, 至今所有穹顶还在用。\n\n那天我走进堂中央, 圆顶基部密布 40 个窗, 阳光射下, 圆顶像悬在半空。相传我说了一句 (后世口传):「Solomon, I have surpassed thee.」(所罗门, 我超过你了。)\n\n这不只是吹牛: 31 米直径是 6 世纪世界最大, 之后 1000 年无人超过, 直到 1436 年 Brunelleschi 的 Florence Duomo 才超。\n\n这圆顶 1500 年走过 5 重身份: 537 起东正教大教堂 (1054 East-West Schism 大分裂就在它圣坛上发生); 1204 十字军改天主教堂; 1453 Mehmed II 攻陷后改清真寺; 1934 博物馆; 2020 又改回清真寺。\n\n这一刻我站在圆顶下, 只知道我做了一件 1000 年没人能比的事。',
        en: '27 December 537, Constantinople, Hagia Sophia, Greek for "Holy Wisdom," is finished. I am fifty-five, about six years after Nika.\n\nI did not hire architects. I hired two mathematicians: Anthemius of Tralles, a geometer, and Isidore of Miletus, who had compiled the works of Archimedes. I did not want a repaired church. I wanted a structure the sixth-century world had never seen.\n\nTheir scheme: a central dome thirty-one meters across, fifty-six meters above the floor. The hard part was simple to state — how do you place a circular dome on a square base?\n\nTheir answer was the pendentive — four spherical-triangle vaults that transition the square wall-tops into the round dome-base. This is the first large-scale successful use of it in architectural history. Every dome since uses some version of the same solution.\n\nThat day I walked into the nave. Forty windows ringed the base of the dome; sunlight streamed down; the dome felt suspended, not supported. I am said to have declared (later tradition, not in Procopius or other 6th-century contemporaries): "Solomon, I have surpassed thee," a reference to the biblical Solomon who built the temple in Jerusalem.\n\nNot only a boast. The thirty-one-meter dome was the largest in the sixth-century world and held that record for a thousand years, until Brunelleschi finished the forty-three-meter Florence Duomo dome in 1436.\n\nBut I owe you the rest. On 7 May 558 an earthquake collapsed the eastern half of the dome. I was seventy-six. I refused the first repair plan from Isidore the Younger, the engineer\'s grandnephew; only when further damage made it unavoidable did I let him rebuild. The new dome rose 6.25 meters higher — steeper, more stable.\n\nThis dome has carried five identities across fifteen hundred years. 537-1204, an Eastern Orthodox cathedral, where the East-West Schism happened on its altar in 1054 (one cause the Filioque, "from the Father and the Son," a phrase the West added to the creed). 1204-1261, a Catholic church under the Fourth Crusade. 1261-1453, Orthodox again. In 1453 Mehmed II takes Constantinople and makes it a mosque. 1934-2020, a museum. In 2020, Erdogan converts it back to a mosque.\n\nIn this moment I stand under the dome knowing none of that. I only know I have built something no one will match for a thousand years.',
      },
      deliverGoal: 'N5 ⭐⭐ Hagia Sophia 圆顶 — Anthemius + Isidore 数学家 / 31m 直径 56m 高 / 4 pendentive 解法 / 「Solomon, I have surpassed thee」/ 1000 年到 1436 Brunelleschi Florence Duomo 才超 / 558 半塌 / 1500 年 5 身份 cross-lens',
      engagementHook: '我 6 年建一座 1000 年没人能比的建筑 — 21 世纪你身边什么是「同代人都没见过」的工程?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N6 — 533-554 重夺地中海 ⚠️ 系统性 overreach
    // ═══════════════════════════════════════════════════
    {
      id: 'just-n6',
      type: 'narrative',
      content: {
        cn: '533 年 6 月, 我派 Belisarius 出征, 他 33 岁。任务: 渡地中海, 灭北非的汪达尔王国 (Vandals, 日耳曼部族, 5 世纪占据迦太基)。\n\nAd Decimum 和 Tricamarum 两战, 6 个月内他就逼降汪达尔王, 占领迦太基。北非丢了 100 年, 我夺回了。\n\n535 年我让他打意大利, 它在东哥特 (Ostrogoths) 手里。第一次哥特战争攻陷其首都 Ravenna, 看似收回。但 541 年新王 Totila 反扑, 罗马城 18 年内 5 次易手, 人口剩 3 万。552 年太监 Narses 决战, Totila 战死, 554 年平定意大利, 还占了西班牙南部 (Spania 行省)。\n\n地中海三分之二岸线重回罗马 (Roman lake)。我 72 岁。\n\n但代价: 21 年战争, 意大利成废墟, 财政耗尽。\n\n看 6 世纪地图以为是成功; 但 Lombards 568 年 (死后 3 年) 入侵意大利, 北部一代人内丢回去; 北非和西班牙南部都在 7 世纪末被阿拉伯夺去。\n\n554 年我满意, 不知道 14 年后地盘开始烟消。\n\n— 这是 system-builder 的 over-extension: 你建出的最广边界, 就是死后崩坏最快的地方。',
        en: 'June 533, I sent Belisarius to war, thirty-three years old. The mission: cross the Mediterranean and destroy the Vandal Kingdom in North Africa, a Germanic people who had seized Carthage in the fifth century.\n\nThe battles of Ad Decimum (September) and Tricamarum (December) — within six months Belisarius defeated the Vandal king Gelimer and took Carthage in modern Tunisia. North Africa, lost for a century, was mine again.\n\nIn 535 I sent him to Italy, held by the Ostrogoths, who had killed Odoacer in 493 — the man who deposed the last Western Roman emperor in 476 — and held Rome itself. The First Gothic War (535-540): Belisarius took the Ostrogothic capital Ravenna in 540 and sent King Witigis back in chains. Italy looked recovered.\n\nThen in 541 the Ostrogoths crowned Totila, who counter-attacked. The Second Gothic War (541-553) saw Rome change hands five times in eighteen years; the civilian population fell from roughly half a million to about thirty thousand.\n\nIn 552 I changed generals, sending the eunuch Narses with thirty-five thousand men. Taginae in July was decisive; Totila died on the field. By 554 Narses had pacified Italy, and the Pragmatic Sanction folded it back into imperial administration. I also had Liberius take a coastal strip of southern Spain, which became the province of Spania.\n\nTwo-thirds of the Mediterranean coast was Roman again — a "Roman lake," for a moment. I was seventy-two.\n\nThe price: twenty-one years of war (533-554). Italy was ruined, Rome reduced from half a million to thirty thousand. The treasury was exhausted; taxes climbed past what peasants could carry; the army was bled dry.\n\nLook at a sixth-century map and call it a success. Now look at the early seventh century. The Lombards invaded Italy in 568, three years after my death, and most of the north I retook slipped away within a generation. North Africa and southern Spain held a little longer, then fell to the Arab rise of the late seventh century, seventy years after my death.\n\nIn 554 I am satisfied. I do not know that within fourteen years the widest borders I produced will begin to evaporate.\n\nThis is the over-extension of a system-builder. The widest boundary you reach is the place that collapses fastest after you die.',
      },
      deliverGoal: 'N6 ⚠️ 533-554 重夺地中海 21 年战争 — Belisarius 北非 (533-534) + 意大利 (535-554, 5 易手) + Narses 552 + Spania (西班牙南部) — Lombards 568 入意大利 (死后 3 年) — 阿拉伯 7c 末全丢 — system-builder 最广边界 = 死后崩坏最快',
      engagementHook: '我活着帝国最大 — 我死后 14 年开始丢 — 你身边谁是这种「他在的时候盘子撑得起、他走了立刻塌」的人?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N7 — 542 Plague of Justinian + 21c Mordechai 修正
    // ═══════════════════════════════════════════════════
    {
      id: 'just-n7',
      type: 'narrative',
      content: {
        cn: '542 年春, 君士坦丁堡。瘟疫从埃及沿尼罗河北上, 经海运扩散到首都。\n\n这是史上第一次有详细文献的腺鼠疫 (Yersinia pestis, 21 世纪古 DNA 确认) 大流行。同代史官 Procopius 写:「每天死 5,000 至 10,000 人, 尸体堆到没人收。」\n\n我自己那年夏天也染了, 淋巴结肿成鸡蛋大, 躺床上几周, Theodora 主持朝廷。我活了, 但那一年后我变得偏执、关门、加税。\n\n死亡率有大争议。同代 Procopius / Evagrius 给帝国 25-50% 死的数字, 沿用到 20 世纪。但 21 世纪 Mordechai 等 2019 年 PNAS 论文 The Justinianic Plague: An Inconsequential Pandemic? 综合考古、钱币、古 DNA, 论证真实死亡率显著低于 25%。\n\n所以「鼠疫死帝国 1/3」这数字你不能直接重复, 要做 source-criticism, 两边证据各看 — 这是 AP DBQ 训练的核心。\n\n没争议的是: 542 之后帝国能量明显下降, 我夺回的意大利北非死后撑不住, 跟鼠疫分不开。\n\n— 542 年我体会到: 我能编法典、修圆顶、重夺地中海, 但没法跟一个看不见的细菌讨价还价。',
        en: 'Spring 542, Constantinople. The plague had moved up the Nile from Egypt, spread by Alexandrian and Levantine shipping, and reached the capital.\n\nThis is the first well-documented bubonic plague pandemic — Yersinia pestis, confirmed by twenty-first-century ancient-DNA sequencing. The court historian Procopius, in the Wars, writes: "Five thousand to ten thousand died in Constantinople each day; bodies piled in the streets and no one came; I ordered them dumped into the towers in the Galata wall."\n\nI caught it that summer. Lymph nodes in the neck and armpits swollen to the size of eggs — the classic presentation. I lay in bed for weeks. Theodora ran the court. Everyone thought I was dead; the succession was being debated. I survived. But after that summer the record shows me growing paranoid, withdrawn, raising taxes, refusing to see ministers.\n\nThe death toll is sharply contested. Contemporaries Procopius and Evagrius gave 25 to 50 percent of the population, carried into nineteenth- and twentieth-century scholarship (still in Allen 2007).\n\nThen the twenty-first-century revision arrived. Mordechai et al., 2019, in PNAS — the paper titled The Justinianic Plague: An Inconsequential Pandemic? — combined archaeology (no mass burial pits), coin circulation, papyri, and ancient DNA, and argued the real mortality was substantially lower than 25 percent: severe in some regions (Constantinople, Egypt, the Levantine coast) but milder for the empire as a whole.\n\nThe consensus is still forming. But "the plague killed one-third of the empire" cannot be repeated without source-criticism — look at both Procopius and Mordechai. That habit is the core of AP DBQ training.\n\nOne thing is not contested: after 542 the empire\'s energy visibly fell. The tax base was damaged, output declined, recruitment struggled. The reconquered Italy and North Africa could not hold after my death, and the shadow of 542 is part of the reason.\n\nIn this moment I am in bed with fever, my neck too swollen to speak, Theodora at my side. She does not know she has six years left. I do not know I have twenty-three.\n\nWhat I learn from 542: I can compile a code, build a dome, retake the Mediterranean — but I cannot negotiate with a bacterium I cannot see.',
      },
      deliverGoal: 'N7 542 Plague of Justinian — Procopius 5,000-10,000/day + 我自己染病活下来 + 死后变偏执 + 死亡率争议 (Procopius/Evagrius 25-50% vs Mordechai 2019 PNAS 论文修正显著低于此) + AP DBQ source-criticism 训练',
      engagementHook: '同一场鼠疫 — 6 世纪史官说死 1/3, 21 世纪 PNAS 论文说远低于此 — 你怎么判断哪个数字更近真?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N8 — 543-565 后期 / Tribonian 死 / Theodora 548 / 我变 reclusive
    // ═══════════════════════════════════════════════════
    {
      id: 'just-n8',
      type: 'narrative',
      content: {
        cn: '542 年我从鼠疫里活下来。但接下来 23 年, 一件件失去。\n\nTribonian (那个编出 Corpus Juris 的法学家) 约 542-546 年间死。\n\n548 年 Theodora 死, 48 岁, 死于癌症, 这是我一生最大的失重。历史学家 J.A.S. Evans (1996) 观察: 542 之前我 15 年高速产出, 548 之后 17 年只剩守业、神学、防御 — 他认为我失去了战略锐度。\n\n最强将军 Belisarius 542 后失宠: 562 有人弹劾他谋反, 我关了他, 后证清白释放但官位没还。《秘史》说他晚年瞎了讨饭 — 这是 partisan polemic, 学界否定, 但他确实死前没复职。\n\n后期我闭门钻神学, 亲自卷入一性论 (Monophysitism) vs 两性论的辩论, 却越办越分裂。皇帝直接管教会神学就是 Caesaropapism (皇教合一)。\n\n税越加越重, 继任的侄子 Justin II 第一份诏书就承认「先帝积怨已多」。\n\n565 年 11 月 14 日我死, 83 岁, 没指定继承人。\n\n我一生的清单: 1 部法典 (传 1500 年)、1 座圆顶 (传 1500 年)、3 年内开始崩坏的地中海、人口减半的意大利、税基耗尽的帝国。\n\n两边都是真。',
        en: 'I survived the plague in 542. But over the next twenty-three years, one piece after another fell away.\n\nTribonian, the jurist who compiled the Corpus Juris in six years, died sometime between 542 and 546 — the exact year unrecorded, but the Novellae after 542 are no longer in his hand.\n\nOn 28 June 548 Theodora died at forty-eight, of cancer — the specific type unknown, as the 6th-century sources say only "cancer," while later scholars speculate breast or uterine cancer. This was the greatest loss of my life.\n\nThe historian J.A.S. Evans (The Empress Theodora, 1996) notes that after 548 I produced no more major projects. Before 542 I had run fifteen years of high-speed output — code, dome, North Africa, Italy, Spania. From 542 to 548 Theodora held things up. After 548 I spent seventeen years on defense, theology, and consolidation. Evans argues her death cost me strategic edge.\n\nBelisarius, my strongest general, fell out of favor after 542. In 548 I removed his Italian command (officially for excess spending). In 562 he was accused of a plot; I imprisoned, then cleared and freed him, but did not restore his office. He died in March 565, eight months before me. The Secret History tale that he ended as a blind beggar is partisan and of uncertain origin, rejected by scholarship (Cameron 1985); but he was never reinstated.\n\nIn my late years I withdrew into theology — Monophysite versus Dyophysite christology, council after council, the Second Council of Constantinople in 553 — yet the arguments only deepened the divide between the eastern and western churches. An emperor running church doctrine directly is Caesaropapism (caesar-as-pope), Byzantium\'s distinctive arrangement, against the West\'s papal independence.\n\nTaxes climbed. My nephew Justin II, who took the throne in 565, opened his first edict acknowledging "the people\'s grievances accumulated under the late emperor," cut taxes, and amnestied prisoners to ease the mood.\n\nOn 14 November 565 I died in the palace, eighty-three, having named no successor. Justin II was acclaimed by the court.\n\nThe inventory of my life\'s work: one law code (lasting fifteen hundred years), one dome (the same), a Mediterranean reconquest collapsing within three years, an Italy halved in population, an empire stripped of tax base, and a final seventeen years that lost their edge.\n\nBoth halves are true.',
      },
      deliverGoal: 'N8 543-565 后期 — Tribonian 死 + Theodora 548 死 (Evans 1996 失去战略锐度) + Belisarius 失宠 + 562 谋反案关押后释放 + 我变 reclusive 神学家 + 553 第二次君士坦丁堡会议 + 565.11.14 死 + 没指定继承人',
      engagementHook: 'Theodora 死后 17 年我没大动作 — 你身边有没有「合作者一走整个人都熄了」的关系?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N9 — 565 死后 30 年: 帝国濒崩 / Lombards 568 入意大利
    // ═══════════════════════════════════════════════════
    {
      id: 'just-n9',
      type: 'narrative',
      content: {
        cn: '565 年我死, 侄子 Justin II 继位。接下来 30 年, 你看我留下的盘子怎么走。\n\n568 年 (死后 3 年), Lombards (伦巴第人) 南下入侵意大利, 我费 19 年战争夺回的北部一代人内丢光。610 年 Heraclius 起兵重整帝国: 改组军区 (theme system)、官方语言从拉丁改希腊、跟波斯打 26 年最后大胜 (628)。\n\n但他大胜那一刻, 新对手在阿拉伯沙漠崛起。632 穆罕默德死, 阿拉伯穆斯林军席卷而来: 636 Yarmouk 之战拜占庭大败, 失叙利亚和巴勒斯坦; 642 失埃及; 698 失迦太基。\n\n所以我 533-554 夺回的地盘, 7 世纪末几乎全丢。但能传下来的是一个核心 — 君士坦丁堡 + 巴尔干 + 小亚细亚 — 再撑 800 年到 1453。Hagia Sophia 还在原地。Corpus Juris 11 世纪 Bologna 重发掘后传遍欧洲。\n\n我留下的不是边界 — 是机构、文物、法典。这是 system-builder 的悖论: 你想留的边界先丢, 你随手做的工程留 1500 年。\n\n你很难评我: 说「重建罗马的伟人」, 7 世纪末看不通; 说「过度扩张的失败者」, 1500 年还在用的法典又解释不了。两边都是真。',
        en: 'I died on 14 November 565. My nephew Justin II took the throne. Over the next thirty years, watch what happened to the inheritance.\n\nIn 568, three years after my death, the Lombards, a Germanic people, came south from the Danube and invaded Italy, holding most of the north and center within six or seven years. The northern Italy I bled nineteen years to recover was lost in a generation. Ravenna survived as an imperial enclave, the Exarchate of Ravenna, a narrow strip surrounded by Lombards — nothing like "all Italy."\n\nIn 572 Justin II reopened war with Sasanian Persia, pushing the thin treasury I left him toward collapse. In 577 he suffered a breakdown; Tiberius II ruled (578-582), then Maurice (582-602).\n\nIn 590 Maurice signed peace with Persia, a brief breathing space. But in 602 the army mutinied, Maurice was killed, and Phocas usurped; his eight years (602-610) further destabilized the empire.\n\nIn 610 Heraclius, son of the exarch of Carthage, rebelled, took the throne, and reorganized the empire — the theme system of military provinces, the switch from Latin to Greek, and a twenty-six-year war with Persia ending in a decisive victory in 628.\n\nIn the same moment Heraclius won, a new adversary rose in the Arabian desert. In 632 Muhammad died, and the Arab Muslim armies of the 630s and 640s came in waves. Yarmouk in 636 broke Byzantium in Syria and Palestine. Egypt fell in 642. Carthage — the North Africa I retook — fell in 698.\n\nSo nearly every territory I retook from 533 to 554 was lost by the end of the seventh century: northern Italy in 568 to the Lombards, North Africa in 698 to the Arabs, southern Spain in 624 to the Visigoths.\n\nLook now at what survived. The core — Constantinople, the Balkans, Asia Minor — held, for another eight hundred years until 1453. Hagia Sophia stood. The Corpus Juris, rediscovered at Bologna in the eleventh century, spread across Europe.\n\nWhat I left was not borders. It was institutions, monuments, and a code.\n\nThe paradox of the system-builder: the borders you most wanted are the first to fall, and the works you built in passing last fifteen hundred years.\n\nFrom the twenty-first century I am hard to grade. Call me "the man who rebuilt Rome" — the late seventh century does not back you up. Call me "the over-extender who failed" — the fifteen-hundred-year-old code in your civil law does not back you up either. Both halves are true.',
      },
      deliverGoal: 'N9 死后 30 年 — Lombards 568 入意大利 + 572 波斯战 + 602 Phocas 篡 + 610 Heraclius + 636 Yarmouk + 642 埃及 + 698 迦太基 — 重夺地盘 7c 末全丢 + 但核心 + Hagia Sophia + Corpus Juris 留 1500 年 — system-builder 的边界先丢、工程留',
      engagementHook: '我的边界 7 世纪末全丢 — 但我的法典 21 世纪还在用 — 这两个事实你怎么把它们放在同一个评价里?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N10 — synthesis 双视角: ambitious system-builder vs systemic overreach
    // ═══════════════════════════════════════════════════
    {
      id: 'just-n10',
      type: 'narrative',
      content: {
        cn: '走完 38 年帝位 + 死后 30 年余波。现在 30 秒。两边都站得住。\n\n第一边: 极致 ambitious system-builder。Corpus Juris 6 年压成 4 部, 成了 21 世纪意法德日民法的骨架。Hagia Sophia 用 pendentive 做出 1000 年世界最大的穹顶。重夺地中海一时让三分之二岸线回归罗马。\n\n第二边: 系统性 overreach。21 年战争把罗马城从 50 万打到 3 万。532 Nika 我下令屠杀 30,000 平民。542 鼠疫后我加税到农民负担不起。我夺回的地盘死后 14 年开始丢。\n\n两边都是真。\n\n— 我不是「先建后毁」, 是同一个人同时做这两件事: 建法典的我 542 后下加税诏书; 建圆顶的我派 Belisarius 打 18 年战。极致 ambitious 跟系统性 overreach 不是顺序 — 是同体。\n\n说「最了不起的建设者, 没他就没西方法律传统的连续」对; 说「最严重的过度扩张, 死后 100 年内丢 70% 地盘」也对。两者不冲突。\n\n这是 AP World History DBQ 的核心训练 — hold contradiction for 30 seconds, 不要急着选边。\n\n现在你试: 你心里给我打几分?',
        en: 'You have walked thirty-eight years on the throne with me, and the thirty years after. Now thirty seconds.\n\nBoth sides hold.\n\nFirst side: extreme ambitious system-builder. Corpus Juris — in six years Tribonian compressed a thousand years of Roman law into four parts, the skeleton of twenty-first-century Italian, French, German, and Japanese civil codes. The Hagia Sophia dome — Anthemius and Isidore used the pendentive to build a thirty-one-meter dome, the largest in the world for a thousand years. The Mediterranean reconquest — North Africa, Italy, southern Spain, two-thirds of the coast Roman again. Any one of the three would be the sixth century\'s largest project alone.\n\nSecond side: systemic overreach. Twenty-one years of war reduced Rome from half a million to thirty thousand. At Nika in 532 I ordered thirty thousand civilians sealed inside the Hippodrome and killed in that enclosed space — mostly civilians, not battlefield deaths. After 542 I raised taxes past what farmers could carry; my late years grew paranoid and withdrawn. The territories I retook slipped within fourteen years of my death, almost entirely lost by the end of the seventh century. I handed Justin II an empire with an exhausted treasury, depleted army, and broken borders. His first edict acknowledged "the late emperor\'s accumulated grievances."\n\nBoth halves are true.\n\nI am not "first build, then destroy." I am the same person doing both at once. The Justinian who compiled the code signed the heavier tax edicts after 542. The Justinian who built the dome sent Belisarius into eighteen years of war in Italy. Extreme ambition and systemic over-reach are not a sequence. They are one body.\n\nHow do you grade me?\n\nYou can say, "the most formidable builder of the sixth century; without him no continuity in the Western legal tradition." Correct. You can say, "the most severe over-extender; within a hundred years of his death the empire lost roughly seventy percent of his reconquest." Also correct. The two do not contradict. Together they describe the same real human being.\n\nThis is the core training of an AP World History DBQ — hold contradiction for thirty seconds. Do not rush to pick a side.\n\nNow you try: what score do you give me, in your head?',
      },
      deliverGoal: 'N10 synthesis 双 view (ambitious system-builder vs systemic overreach) — 极致 + 过度同体, 不是顺序 — AP DBQ hold contradiction 30 seconds',
      engagementHook: '两边都成立 — 你心里 30 秒过去了 — 你给 Justinian 打几分?',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N11 — 21c application: 你身边的 ambitious-overreach leader
    // ═══════════════════════════════════════════════════
    {
      id: 'just-n11',
      type: 'narrative',
      content: {
        cn: '现在把镜头从 6 世纪拉回 21 世纪。\n\n一个问题: 你身边有没有这种 leader — 极致才华、做大事, 留得下机构、产品、作品; 但同时把组织 over-extend 到崩溃边缘, 接班的人接到一摊烂账?\n\n模板各种: 一个创始人 10 年建出全球最大的某样东西, 却烧光融资、累垮团队, 接任 CEO 第一年就在裁员。一个父母给孩子最好的资源和最高的期待, 孩子青春期反抗, 关系破裂多年才修。这些都是 Justinian 的 21 世纪版本。\n\n问题不是「他们好或坏」, 是 hold contradiction。极致 ambitious 跟系统性 overreach 常是同一种性格的两面: 能做大是因为他敢压、敢冒险、敢把资源 push 到边界外。但同样这个 push, 有时是 visionary breakthrough, 有时是 over-extension。事后才能区分, 事中所有人 (包括他自己) 都看不清。\n\n这是看 leader 的真实功课: 不贴 hero 标签也不贴 villain 标签, 而是看过他做的所有事, 让两边都站住, hold 30 秒, 再下判断。\n\n你身边谁是这种 leader? 你怎么看 ta? 如果你愿意写一段, 我读你的回答。',
        en: 'Now pull the lens from the sixth century back to your twenty-first.\n\nThe question: do you know a leader like this? Extreme talent, builds large things, leaves behind institutions, products, works — and at the same time over-extends an organization to the edge of collapse, leaving a tangle for whoever inherits.\n\nThe templates vary. A company founder builds the largest of some category in ten years, but burns through funding, exhausts the team, and the culture cannot hold by the time they leave; the incoming CEO spends the first year laying off. A national leader doubles GDP, builds infrastructure, peaks in standing, but the deficit forces the next government into a tax hike and unresolved border conflicts trace back to their policy. A school principal moves the school to the top of the city, but teacher burnout drives turnover and exam pressure draws complaints to the district. A parent provides the best education, resources, and highest expectations, and adolescence breaks the relationship, repaired only over years.\n\nAll are twenty-first-century versions of sixth-century Justinian.\n\nThe question is not "good or bad." It is hold contradiction. Extreme ambition and systemic overreach are often two faces of one personality trait. The reason someone can build large is they push, take risk, drive resources past the boundary. But the same push is sometimes visionary breakthrough and sometimes over-extension. Only in retrospect can the two be told apart. In the moment no one — including them — can see clearly.\n\nThis is the real work of looking at a leader: not the "hero" label, not the "villain" label, but seeing everything they did, letting both sides hold, holding for thirty seconds, then judging.\n\nWho do you know like this? How do you see them? If you are willing to write a passage, I will read your answer.',
      },
      deliverGoal: 'N11 21c application — 公司创始人 / 国家领导人 / 校长 / 父母 templates — 极致 ambitious + systemic overreach 是同一种性格的两面 — hold contradiction 30 秒再判断 — 邀请用户写真实例子',
      engagementHook: '现在权衡这两遍读法：一遍说极致 ambitious 跟系统性 overreach 是同一种性格的两面，做大事的人几乎必然过度扩张；另一遍说这两件事其实能分开，一个克制的领袖既能做大又不崩盘。哪一遍更接近真相？想 30 秒，写下来。',
      expectsRealAnswer: true,
    },

    // ═══════════════════════════════════════════════════
    // N12 — closing meta: Justinian paradox + cross-lens 对照
    // ═══════════════════════════════════════════════════
    {
      id: 'just-n12',
      type: 'narrative',
      content: {
        cn: '12 节走完。最后一个 paradox。\n\n你每天碰我留下的东西, 却不知道是我。你读到「大陆法系 civil law」, 不知道它的骨架是 Tribonian 那 50 卷《学说汇纂》。你看到 Hagia Sophia 的照片, 不知道那圆顶是我用 pendentive 做的。\n\n机构、文物、法典都留下来; 但「我」这个人留下的是争议。这是 perpetrator-actor lens 的核心: 不是看「好皇帝」或「坏皇帝」, 是看一个真实、多层的人, 他做的所有事都是同一个他。\n\n跟北宋 Huizong、Mali 的 Mansa Musa、文艺复兴的 Lorenzo de Medici 对照 — 都是极致才华 + 系统性 over-extend 同体。做大事的人几乎都同时 over-reach, 是同一种性格的两面。\n\n这是 AP 跟 7 年级历史课的区别: 7 年级学事实, AP 学怎么 hold 矛盾。你 30 秒能站两边, 已经在做 college-level historical thinking 了。\n\n— 我 565 年死时 83 岁, 不知道我的法典 14 个世纪后还在用。你知道。\n\n下次听到这些名词, 你想到的是一个真实、矛盾、了不起又危险的拜占庭皇帝。\n\n你怎么记我?',
        en: 'Twelve sections complete. One last paradox.\n\nYou meet what I left every day, but you do not know it is me. You read "civil law" — you do not know its skeleton is the fifty-book Digesta Tribonian compiled in 533. You see a photo of the Hagia Sophia — you do not know the dome was made in 537 by two mathematicians I hired using the pendentive, the largest in the world for a thousand years. You hear "the Mediterranean" — you do not know the last emperor to call it a "Roman lake" was me in 554.\n\nThe institutions, the monuments, the code stay. But the man stays as a debate.\n\nThis is the heart of the perpetrator-actor lens. You are not looking at a unified "good emperor" or "bad emperor." You are looking at a real, complex, multi-layered person, and everything he did — the good, the bad, the fifteen-hundred-year work, the generation-destroying war — comes from the same him.\n\nCompare with other perpetrator-actors. Huizong of Song China — the painter prince crowned by accident at eighteen, twenty-seven years of artistic peak, the dynasty lost in 1126, death in the Five Kingdoms City (extreme talent and systemic blindness in one body). Mansa Musa of Mali — the 1324 hajj of twelve thousand people and eighteen tons of gold, Cairo gold prices down twenty-five percent, Mali drawn on the Catalan Atlas in 1375 (soft-power projector and wealth showman, both true). Lorenzo de Medici — Florentine banker and poet, patron of Michelangelo and Botticelli, who hollowed out his family bank until the Medici were driven from Florence in 1494 (cultural giant and commercial over-extender in one body).\n\nLook at them together and a pattern shows: the people who build large things are almost always the same people who over-reach. Not coincidence — two faces of the same character trait.\n\nThis is the difference between AP World History and seventh-grade history. In seventh grade you learn facts. In AP you learn how to hold a contradiction. If you can hold both sides for thirty seconds, you are already doing college-level historical thinking.\n\nI died on 14 November 565 at eighty-three, not knowing my code would still be in use fourteen centuries later. You know.\n\nNext time you hear "Hagia Sophia," "civil law," or "Roman lake," what comes to mind is not only the term — but a real, contradictory, formidable and dangerous Byzantine emperor who started as a peasant boy in a Balkan village.\n\nHow will you remember me?',
      },
      deliverGoal: 'N12 closing meta — 你 21c 用我的法典 + 看 Hagia Sophia 但不知是我 + 留机构 + 留文物 + 个人留争议 — 跟 Huizong / Mansa Musa / Lorenzo Medici cross-lens 对照 (5 个 perpetrator-actor) — AP vs 7 年级历史区别 — hold contradiction = college-level thinking — 邀请用户写「你怎么记我」',
      engagementHook: '走完我这 38 年——法典与圆顶传 1500 年、重夺的地中海死后就崩。你会怎么评价这样一个「极致 ambitious + 系统性 overreach 同体」的人？再想一步：你身边有没有这种「极致才华、却把组织 over-extend 到崩溃」的 leader，你会怎么看 TA？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Byzantine Rise · LENS 2: Theodora (lonely-mediator) ────────
//
// Topic: Byzantine Rise 285-1095 · 拜占庭兴起
// AP World 1.4 / 6th Grade World History
//
// Lens 2 设计 (per Sarah Chen audit revised — Theodora over Photios):
//   - id: 'theodora'
//   - role: 'lonely-mediator'
//   - perspectiveTag: 'from-stage-to-purple'
//
// 不是「manipulative harlot empress」(19c Procopius《Secret History》死后 partisan polemic)
// 也不是「saintly empress」(东正教 6c 圣徒化叙事)
// 21c 学界 (Cameron 1976 / Foss 2002) careful 不照搬死后 polemic
// Theodora 是「演员出身 + 让 Justinian 留在帝位 + 推动法律保护妓女 + 庇护反 Chalcedonian Monophysite」
// 演员-妓女社会底层让她能跟两边对话 — lonely-mediator
//
// 跨 lens micro-detail (Hagia Sophia 圆顶 1500 年):
//   - Lens 1 (Justinian) N5 537 完工
//   - Lens 2 (this) N8 同走入 / 532 Nika 屠杀地点 vs 537 圆顶完工地点 一墙之隔
//   - Lens 3 (Anna-iconographer) 8c 圣像被刷掉
//   - porphyry thread: Theodora "purple as shroud" → 1083 Anna Komnene "porphyrogenita 紫色出身"
//     (跨 600 年呼应 — N10 锚点)
//
// 严格规则 (per AoE/Mali/Tang-Song 教训):
//   - 不用 *italic* markdown — 外语词 bare + inline gloss
//   - 内嵌引号: 「」(CN) / "..." (EN), 严禁 «...»
//   - em-dash 「——」 ≤ 3 per 段
//   - 每 node 350-550 CN chars
//   - anti-fab: 500 生 / 525 嫁 / 527.4.1 加冕 / 532.1.13-18 Nika /
//     537.12.27 Hagia Sophia / 542 鼠疫 / 548 死于癌症 (病种史料不详)
//     Procopius《Secret History》死后才发表 careful framing
//     Cameron 1976 *Procopius and the Sixth Century* / Foss 2002 *The Empresses Theodora*
//   - 7 年级 careful framing (演员-妓女社会底层 / 532 Nika 30,000 屠杀承认但 careful /
//     542 鼠疫 careful / Procopius 死后 polemic 不照搬)
//   - expectsRealAnswer 默认 false, 只 N11+N12 设 true

// ═══════════════════════════════════════════════════
// LENS 2: Theodora 狄奥多拉 (lonely-mediator)
// ═══════════════════════════════════════════════════

export var theodoraLens = {
  id: 'theodora',
  name: 'Empress Theodora',
  nameCn: '狄奥多拉皇后',
  role: 'lonely-mediator',
  perspectiveTag: 'from-stage-to-purple',
  description: {
    en: 'She is the empress who, on the fifth day of the Nika Riot, stood up in the imperial council where her husband Justinian and his ministers were preparing to flee Constantinople by ship, and said, "Purple is a noble shroud." Born to a Hippodrome bear-keeper, raised on the 6th-century stage where actresses ranked beside sex workers, she could marry an heir to the throne only after Roman law was rewritten in 525 to allow it. This pass puts you in her seat at that council, the city burning outside, the escape ship ready in the harbor, watching whether she speaks the line that keeps Justinian on the throne, and you see what the empress who shelters Monophysite bishops and legislates protections for prostitutes is really made of.',
    cn: '她是一个 Nika 暴动第 5 天在皇宫议会站起来、对着准备坐船弃城的 Justinian 说出「紫袍是高贵的寿衣」的皇后,生在赛马场熊管理员家,从小在演员与妓女同等级的舞台长大,525 年法律专为她改了才能嫁进皇室。这一遍让你坐进那场议会:城外正在烧、弃城的船已备在港,看她要不要说出那句把 Justinian 留在皇位上的话,也看清这位日后庇护一性论主教、立法保护妓女的皇后到底是什么做的。',
  },
  storyboard: [
    {
      id: 'theo-n1',
      type: 'narrative',
      content: {
        cn: '我大约生于 500 年——君士坦丁堡——东罗马帝国首都。\n\n父亲叫 Acacius，是 Hippodrome（赛马场）绿党（Greens）派的熊管理员。Hippodrome 不是单纯赛马场——它是 6 世纪君士坦丁堡的政治-娱乐核心。4 大派系（绿党、蓝党、白党、红党）实际只剩绿党 + 蓝党两派活跃，派系斗争是城市生活的底色。\n\n父亲管熊——熊是赛马场比赛之间的余兴节目。这不是高级职位——但有稳定收入。\n\n5 岁那年父亲死了。\n\n母亲很快再嫁——但继父没接父亲的熊管理员位置——绿党不肯给——\n\n母亲带我跟 2 个姐妹，3 个女孩穿白衣，头戴橄榄枝花环，走到 Hippodrome 比赛日的看台前——公开求绿党给我们家继续那个职位——\n\n绿党拒绝了。\n\n蓝党看见——把那个职位给了我们家。\n\n5 岁那一刻——我已经知道：绿党 + 蓝党不是球迷俱乐部。它们是命，是吃饭，是「他们说不你就饿死」。\n\n这一刻——我后来 47 年人生反复回到——它会在 532 年 Nika 暴动第 5 天再次浮现。',
        en: 'I was born around 500 in Constantinople — capital of the Eastern Roman Empire.\n\nMy father was named Acacius — a bear-keeper for the Greens faction of the Hippodrome. The Hippodrome was not simply a racetrack — it was the political-entertainment core of 6th-century Constantinople — the four old factions (Greens, Blues, Whites, Reds) had narrowed in practice to two active ones, Greens and Blues — and faction politics was the texture of city life.\n\nMy father trained the bears — bears were the side-act between races. Not a senior post — but a steady wage.\n\nWhen I was 5, he died.\n\nMy mother remarried quickly — but her new husband did not inherit the bear-keeper post — the Greens refused —\n\nMy mother dressed me and my two sisters in white — three small girls with olive-branch wreaths in our hair — and walked us in front of the Hippodrome stands on race day, publicly asking the Greens to keep the job in our family —\n\nThe Greens refused.\n\nThe Blues saw it — and gave the post to my stepfather.\n\nAt 5 years old, in that moment, I already knew: Greens and Blues are not fan clubs — they are life — they are dinner — they are "if they say no, you starve" —\n\nThat moment — I returned to it for the next 47 years — and it would surface again in January 532, on the fifth day of the Nika Riot.',
      },
      deliverGoal: 'N1 ~500 出生 Constantinople / 父 Acacius Hippodrome Greens 熊管理员 / 5 岁父死 / 母带 3 女儿穿白衣到 Greens 求职位被拒 → Blues 给位置',
      engagementHook: '5 岁就知道「派系决定吃饭」——你 21 世纪几岁开始懂这种事？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n2',
      type: 'narrative',
      content: {
        cn: '童年——继父在 Hippodrome 工作——我跟着进剧场——\n\n6 世纪 Constantinople 的剧场（theatre）跟你 21 世纪的舞台不是一回事——\n\n6 世纪剧场以哑剧（mime）+ 滑稽戏（farce）为主——内容粗俗——演员要在台上脱衣 + 模仿性场面 + 表演给观众笑话——\n\n这不是「艺术」——这是底层娱乐。\n\n6 世纪罗马法律明确写：「元老议员（senator）不得娶演员（actress）」——演员跟妓女在法律上同一类别——叫「卑贱身份」（infamis）——\n\n我 12 岁左右开始上台——\n\n演什么？——主要是哑剧的滑稽角色——也包括需要裸露的场面——\n\n我说出来——不是要你怜悯我——是要你听清楚 6 世纪一个演员女孩的位置——\n\n第一：法律上你是 infamis——跟妓女、罪犯、奴隶之子同类——\n第二：婚姻上你嫁不到任何贵族——\n第三：经济上你有收入——但任何人都可以买你的身体——\n第四：宗教上教会 6 世纪的态度——演员不能领圣餐——\n\n这是我 6-22 岁的世界。\n\n你 21 世纪 7 年级——可能很难想象——一个国家的法律明确把一群人的人格写成「卑贱」——但 6 世纪罗马就是这样。\n\n这是我后来 525 年能嫁 Justinian 之前——必须先改的那条法律。',
        en: 'In my childhood — my stepfather worked at the Hippodrome — and I followed him into the theatre —\n\n6th-century Constantinople theatre is not what your 21st-century stage is —\n\n6th-century theatre meant mime and farce — content was crude — actresses were expected to undress on stage, mimic sex scenes, and play to the laughter of the crowd —\n\nThis was not "art." This was lower-class entertainment.\n\n6th-century Roman law stated plainly: "A senator may not marry an actress." Actresses and prostitutes belonged to the same legal category — infamis, persons of dishonored status —\n\nI began performing around age 12 —\n\nWhat did I play? Mostly the comic roles of mime — including scenes requiring nudity —\n\nI tell you this — not so that you pity me — but so that you hear exactly where a 6th-century actress girl stood —\n\nFirst: in law you were infamis — categorized with prostitutes, criminals, the children of slaves —\nSecond: in marriage you could not marry any noble —\nThird: in economy you had income — but any man could buy your body —\nFourth: in religion the 6th-century church barred actresses from communion —\n\nThis was my world from age 6 to 22.\n\nFor 21st-century 7th grade this is hard to imagine — that a state\'s law writes the personhood of an entire group as "dishonored." But 6th-century Rome did exactly this.\n\nThis is the law that had to be rewritten before I could marry Justinian in 525.',
      },
      deliverGoal: 'N2 童年到 Hippodrome 演员 / 6c 演员社会地位极低 (跟妓女同等级 infamis / 法律禁元老议员娶演员)',
      engagementHook: '21 世纪法律明确把一群人写成「卑贱」——你能想到现代社会有类似的隐性分类吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n3',
      type: 'narrative',
      content: {
        cn: '16-22 岁——我离开 Constantinople 流浪表演, 去过 Tyre（今黎巴嫩南部）、Antioch、Alexandria、Cyprus——\n\n这一段史料怎么说, 我必须给你 careful framing。21 世纪学界主要靠两个文本:\n\n第一: Procopius《Wars》（战争史）——他是 Justinian 朝廷史官, 这本在我活着时发表, 对我相对中立。\n\n第二: Procopius《Secret History》（秘史）——死后才被发现。学界（Averil Cameron 1976）证明它是 Procopius 私下写来攻击 Justinian 跟我的政治文本, 里面写我做 sex worker、堕胎、跟野兽做戏——\n\n问题: 《秘史》写于 550 年代, 我 548 年已死, 是死后 partisan polemic, 学界 careful 不照搬。\n\n实情: 我 16-22 岁很可能做过 sex work——这是 6 世纪流浪演员的常态——但《秘史》的具体细节是写来羞辱我的, 不是中立见证。\n\n22 岁那年我在 Alexandria 遇到一性论派领袖 Patriarch Timothy III, 第一次系统学神学。我从舞台走出来——那一刻我知道我不再回去了。',
        en: 'From 16 to 22 I left Constantinople and lived as a touring performer — Tyre (southern Lebanon), Antioch, Alexandria, Cyprus —\n\nFor this stretch I must give you careful framing. 21st-century scholars rely mainly on two texts:\n\nFirst: Procopius\'s Wars — he was Justinian\'s court historian — published while I lived, and in it I am treated relatively neutrally.\n\nSecond: Procopius\'s Secret History — surfaced only after his death. Scholarship (Averil Cameron 1976) shows it was a private partisan attack on Justinian and me, describing me as a sex worker from 16, an aborter of children, a performer of beast-acts —\n\nThe problem: the Secret History was written in the 550s, after I died in 548 — posthumous partisan polemic — historians do not copy it as fact.\n\nThe likely truth: I almost certainly did sex work between 16 and 22 — the ordinary economy of touring performers — but the specific scenes were composed to humiliate me, not to witness me.\n\nAt 22 in Alexandria I met Patriarch Timothy III, leader of the Monophysite (anti-Chalcedonian) church, and learned theology systematically for the first time. I stepped off the stage — and in that moment I knew I would not return.',
      },
      deliverGoal: 'N3 16-22 岁 Tyre/Antioch/Alexandria/Cyprus 流浪表演 / Procopius《Secret History》死后 partisan polemic careful framing (Cameron 1976) / 22 岁 Alexandria 遇 Patriarch Timothy III 学 Monophysite',
      engagementHook: '关于 6 世纪一个 22 岁女演员的人生——21 世纪历史学家「careful 不照搬死后政治攻击」——这种谨慎你看历史故事时会用吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n4',
      type: 'narrative',
      content: {
        cn: '522 年, 我 22 岁回到 Constantinople。\n\n我租一间小房做羊毛纺织（wool-spinning）工——底层女性的合法职业, 跟舞台彻底切割——也加入了城里的一性论（Monophysite）派, 反 Chalcedonian（卡尔西顿派）。\n\n懂一点 6 世纪神学才能看懂这步: 451 年 Council of Chalcedon 定义「基督有两个本性: 神性 + 人性」, 成了帝国官方教义。Monophysite 派反对, 说「基督只有一个统一的神性-人性」。这派在 6 世纪东方（埃及、叙利亚）是主流, 约占帝国 50% 人口, 但官方教会把他们划为异端。\n\n父亲那代是 Hippodrome 派系斗, 我这代是神学派系斗——我选了 Monophysite。\n\n525 年我大概见到 Justinian。他 43 岁, 还叫 Petrus Sabbatius, 是叔父 Justin I 皇帝的侄子兼继承人。他怎么遇到我? 史料含糊。\n\n我们差 18 岁。他是皇位继承人, 我是前演员 + 羊毛工 + Monophysite——按 6 世纪罗马法律, 这场婚姻不合法。',
        en: '522 — at 22 — I came back to Constantinople.\n\nI rented a small house and worked as a wool-spinner — a legitimate lower-class job for a woman, a clean break from the stage — and I joined the Monophysite community, the anti-Chalcedonian branch of Christianity.\n\nYou need a little 6th-century theology here. In 451 the Council of Chalcedon defined that "Christ has two natures, divine and human," which became the empire\'s official doctrine. Monophysites disagreed, saying "Christ has one unified divine-human nature." In the 6th-century east (Egypt + Syria) this was the majority view — roughly half the empire — yet the official church called it heresy.\n\nMy father\'s generation fought the Hippodrome factions. Mine fought the theological factions. I chose Monophysite.\n\n525 — I met Justinian. He was about 43, still called Petrus Sabbatius, nephew and heir of Emperor Justin I. How did he meet me? The sources are vague.\n\nWe were 18 years apart. He was the heir to the throne; I was a former actress, a wool-spinner, and a Monophysite. By 6th-century Roman law, this marriage was illegal.',
      },
      deliverGoal: 'N4 522 回 Constantinople 做 wool-spinning 工人 / 加入 Monophysite (反 Chalcedonian) 宗教派别 / 525 见 Justinian (43 岁那时叫 Petrus Sabbatius)',
      engagementHook: '你父母那代的「派系」是什么？跟你这代一样吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n5',
      type: 'narrative',
      content: {
        cn: '525 年, Justinian 推动叔父 Justin I 改法律。\n\nJustin I 自己出身极底层: 色雷斯农民, 18 岁徒步走到 Constantinople 当兵起家, 68 岁被推上皇位, 不识字, 签字用模板。叔父懂底层, 知道侄子要娶我。\n\n525 年他颁新法, 废除「元老议员不得娶演员」那条几百年旧法, 允许「悔改的演员」嫁元老议员——表面普世, 实际是为我一个人改的。同年 Justinian 在大教堂正式娶我。\n\n2 年后, 527 年 4 月 1 日（叔父死前 4 个月）他立 Justinian 为共治皇帝。同一天我也加冕成为皇后（Augusta）——罗马皇后的最高称号。\n\n从 5 岁穿白衣到 Hippodrome 求职位, 到 27 岁戴帝国皇冠——22 年。\n\n元老贵族跪在我面前行礼时, 清楚我是谁、清楚 525 那条法律是为谁改的、清楚我父亲是熊管理员——但他们必须跪。\n\n这是 Justinian 给我的, 也是接下来 21 年他们会想方设法夺回去的。',
        en: '525 — Justinian pushed his uncle Justin I to rewrite the law.\n\nJustin I was himself born at the bottom: a Thracian peasant who walked to Constantinople at 18 to enlist, and was raised onto the throne at 68. He could not read — he signed with a stencil. He understood the bottom, and he knew his nephew wanted to marry me.\n\n525 — Justin I issued a new law abolishing the centuries-old rule that "a senator may not marry an actress," allowing "reformed actresses" to marry senators. On its face general; in practice rewritten for one woman. That year Justinian married me in the great church of Constantinople.\n\nTwo years later, on 1 April 527 — four months before his uncle died — Justin raised Justinian as co-emperor, and on the same day I was crowned Augusta, the highest title of a Roman empress.\n\nFrom a 5-year-old in white at the Hippodrome stands to a 27-year-old wearing the imperial crown — 22 years.\n\nWhen the senators bowed before me they knew exactly who I was — they knew the 525 law had been rewritten for me, they knew my father was a bear-keeper — but they had to bow.\n\nThis is what Justinian gave me. It is also what they would spend the next 21 years trying to take back.',
      },
      deliverGoal: 'N5 525 Justin I 525 改法律允许元老议员娶演员前妻 (Justinian 推动) / 525 Justinian 娶 Theodora / 527.4.1 同日加冕 Augusta',
      engagementHook: '一条法律为一个人改——这是「权力」还是「爱」？还是两者都是？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n6',
      type: 'narrative',
      content: {
        cn: '532 年 1 月 13 日, Hippodrome 比赛日。绿党蓝党第一次联合, 向 Justinian 求情赦免 2 个被处决未死的派系成员。他拒绝——两党喊出共同口号「Nika」（希腊文「胜利」）——\n\n5 天里 Constantinople 一半被烧, 包括第二座 Hagia Sophia（415 年建）。元老院推出 Hypatius 当对立皇帝。\n\n1 月 18 日, 围城第 5 天, Justinian 召开御前会议, 准备坐船跑, 把帝国留给暴民。议会里所有男人都同意他逃。\n\n我——皇后 Augusta——站起来说:\n\n「现在不是讨论女人该不该说话的时候, 是我们都在死的时候。我接受古人的格言: 紫袍是高贵的寿衣（purple is a noble shroud）。你要逃就逃。但我若活下去, 只能活在这身紫袍里。我不脱它。」\n\nJustinian 留下来。\n\n那天晚上, 将军 Belisarius 和 Mundus 把 Hippodrome 出口堵死冲入, 3 万人在封闭空间内被屠杀。学界（Cameron 1976）认为数字可能夸大, 但规模无争议——这不是战场死亡, 是被围在赛马场里成批杀死的平民。\n\n5 岁的我, 绿党拒绝给我家职位的那个 Hippodrome——27 年后 3 万人死在那里。',
        en: '13 January 532 — race day at the Hippodrome — Greens and Blues united for the first time, begging Justinian to pardon two faction members whose hangings had failed. He refused, and the two factions raised a common chant: "Nika" — Greek for "victory."\n\nFive days later half of Constantinople had burned, including the second Hagia Sophia (built in 415 under Theodosius II). Inside the senate, men acclaimed Hypatius as rival emperor.\n\n18 January — day five — Justinian called the imperial council, preparing to flee by ship, leaving the empire to the mob. Every man in the council — senators, generals, bishops — agreed he should go.\n\nI — Empress Augusta — stood up and said:\n\n"This is not the moment to debate whether a woman should speak among men — this is the moment when we are all dying. I accept the ancient saying — purple is a noble shroud. If my husband wishes to flee, flee; the ships and the gold are at the sea. But I, if I live, will live only in this purple. I will not take it off."\n\nJustinian stayed.\n\nThat night generals Belisarius and Mundus sealed the four exits of the Hippodrome and charged through the central gate; thirty thousand were slaughtered in the closed space. Procopius gives 30,000 — scholars (Cameron 1976) think it may be inflated — but the scale is not disputed. These were not battlefield deaths; they were civilians corralled and killed in batches inside a stadium.\n\nThe 5-year-old me — at the Hippodrome where the Greens refused my family\'s job — 27 years later, 30,000 dead in that same place.',
      },
      deliverGoal: 'N6 532.1.13-18 Nika 暴动 ⭐ cross-lens scene / 5 天 Hippodrome 绿党+蓝党联手 / Justinian 想逃 / Theodora 「purple as shroud」/ Belisarius 围 Hippodrome 屠 30,000 (Procopius 数字 / Cameron 1976 careful)',
      engagementHook: '「我不脱紫袍」——你 21 世纪有没有过一个时刻——所有人都说该走——只有你说留下？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n7',
      type: 'narrative',
      content: {
        cn: '532-548 年——Nika 之后 16 年——我在 Justinian 身边影响他立法。两条最重要:\n\n第一: 535 年《Novellae》（新法）保护妓女, 4 部分:\n（1）禁止人贩子从外省把女童强抢到 Constantinople 卖入妓院（brothel）, 违者处死。\n（2）允许妓女主动离开 brothel 重新生活——之前法律把她们当老板的「财产」, 这条切断财产关系。\n（3）建立 metanoia 修道院（悔改之家）, 退出的妓女进去重新学手艺。\n（4）抹除「演员-妓女」法律污名（infamis）, 让她们婚姻合法、可领圣餐。\n\n这条法律的根是我自己 6-22 岁的处境。\n\n第二: 神学策略性中立。Justinian 官方支持 Chalcedonian, 但不能强制 Monophysite——帝国 50% 人口（埃及、叙利亚、亚美尼亚）是 Monophysite, 强制就丢半个帝国。他需要一个「不官方但活着」的通道, 我就是: 在皇宫里庇护 Monophysite 主教（如 Severus of Antioch 避难数年）, 540 年代支持 missionary 到 Nubia 传教。\n\n这是 lonely-mediator——演员出身让我能跟两边说话。两边都用我, 也都不完全信任我。',
        en: 'From 532 to 548 — sixteen years after Nika — I was beside Justinian, shaping legislation. Two laws mattered most.\n\nFirst — 535, Novellae, protections for prostitutes, in four parts:\n(1) Forbade traffickers from forcibly bringing rural girls to Constantinople for the brothels — death for violators.\n(2) Allowed prostitutes to leave brothels of their own will — earlier law treated them as the property of brothel-keepers; this cut the property tie.\n(3) Established the metanoia (House of Repentance) monastery, where former prostitutes could relearn a trade.\n(4) Erased the legal stigma of infamis on actresses and prostitutes, making their marriages valid and restoring communion.\n\nThe root of this law was my own life from 6 to 22.\n\nSecond — Monophysite–Chalcedonian strategic neutrality. Justinian publicly upheld Chalcedonian doctrine, but could not force the Monophysites — half the empire (Egypt + Syria + Armenia) was Monophysite, and forcing them meant losing half the empire. So he needed an "unofficial but breathing" channel. I was that channel: in the palace I sheltered Monophysite bishops (Severus of Antioch took refuge for years), and in the 540s I backed missionaries to Nubia (today\'s northern Sudan). Justinian was publicly Chalcedonian; inside the palace, Monophysite dissent could breathe.\n\nThis was strategic neutrality — lonely-mediator — my stage upbringing let me speak to both sides. Both used me, and neither fully trusted me.',
      },
      deliverGoal: 'N7 532-548 立法 / 535《Novellae》新法保护妓女 4 部分 + 抹除「演员-妓女」infamis 法律污名 / Monophysite-Chalcedonian 神学策略性中立 (帝国 50% Monophysite 不能强制) / Severus of Antioch 皇宫避难 / 540s Nubia missionary',
      engagementHook: '从自己被法律压的人——变成立法保护下一代的人——你 21 世纪能想到这种 reverse circuit 的例子吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n8',
      type: 'narrative',
      content: {
        cn: '537 年 12 月 27 日——我 37 岁——跟 Justinian 一起走入新落成的圣索菲亚（Hagia Sophia）, Nika 后约 6 年。\n\n两位工程师不是石匠, 是数学家 Anthemius 和 Isidore——他们用 4 个 pendentive（球面三角形）让圆顶落在方形基座, 建筑史第一次做到。圆顶直径 31 米、离地 56 米、基部 40 个小窗, 光漫进来, 圆顶看上去「悬浮」。\n\nJustinian 走进那天相传说了一句（出自后世口传, 不见于同代史料）:「Solomon, I have surpassed thee.」（所罗门, 我超过你了。）他指的是建耶路撒冷第一圣殿的犹太王 Solomon。\n\n31 米直径是当时世界最大圆顶, 直到 1436 年 Florence Duomo 才超越。\n\n但我要给你一个空间细节: 圣索菲亚跟 Hippodrome 一墙之隔。我那天往南看, 隔一道墙就是 5 年前 3 万人被屠杀的地方——532.1.18 屠杀地点和 537.12.27 圆顶完工地点, 一墙之隔。\n\n我没说什么。Justinian 也没说。圆顶光透进来, 我抬头看——\n\n5 岁的我、27 岁加冕、32 岁说「紫袍是寿衣」、37 岁站在这圆顶下——都是同一个我。',
        en: '27 December 537 — at 37 — I walked with Justinian into the newly finished Hagia Sophia, about 6 years after Nika.\n\nThe engineers were not stonemasons. Anthemius of Tralles (mathematician of conic sections) and Isidore of Miletus (editor of Archimedes) used four pendentives — spherical triangles — to land a circular dome on a square base, the first time in architectural history. Dome diameter 31 meters, floor to crown 56 meters (18 stories), forty small windows ringing the base — light pours through, and the dome appears to float.\n\nThe day Justinian walked in he is said to have declared (later tradition, not in contemporary sources): "Solomon, I have surpassed thee." The Solomon he meant built the First Temple in Jerusalem.\n\n31 meters — the world\'s largest dome — until Florence Duomo (43 m) surpassed it in 1436.\n\nBut I owe you one detail of space: Hagia Sophia and the Hippodrome share one wall. The day we walked beneath the dome, looking south, across a single wall stood the place where 30,000 had been slaughtered five years before — 18 January 532, the slaughter; 27 December 537, the dome — separated by a wall.\n\nI said nothing. Justinian said nothing. Light came through the dome; I looked up —\n\nThe 5-year-old me, the coronation at 27, the "purple is a noble shroud" at 32, and 37 standing under this dome — all the same me.',
      },
      deliverGoal: 'N8 537.12.27 Hagia Sophia 完工 ⭐ cross-lens micro-detail / Theodora 跟 Justinian 同走入 / Anthemius+Isidore pendentive 圆顶 / Hippodrome 跟 Hagia Sophia 一墙之隔 — 532 Nika 屠杀地点同 537 圆顶完工地点',
      engagementHook: '5 年前死 3 万人的地方——隔一道墙——你站在新教堂里看光透进来——你说什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n9',
      type: 'narrative',
      content: {
        cn: '542 年——Plague of Justinian（查士丁尼鼠疫）。\n\n鼠疫杆菌（Yersinia pestis）从埃及经贸易路线, 542 年春到 Constantinople。Procopius 同代记录: 高峰期一天死 5,000-10,000 人, 尸体来不及埋。\n\n学界争议——你 7 年级要听清楚, 这不是 settled fact: 旧说（Allen 2007）25-50% 死亡率; 新说（Mordechai et al.《PNAS》2019）基于钱币、莎草纸、墓葬、古 DNA, 论证真实死亡率显著低于此, 可能局部严重、整体温和。\n\n但我经历的事实是: 542 年夏天 Justinian 自己染上鼠疫, 高烧、神志不清, 皇宫医生说他撑不过。\n\n他病倒的那 6 个月, 我 42 岁独自管帝国: 调度赈灾、处理外交（波斯使节谈和约我亲自接见）、市政官员任免、监督 Belisarius 的意大利军事行动——6 个月我是 de facto 女皇帝, 拜占庭历史上极少数。\n\nJustinian 542 年底康复, 但再也不是 532 年那个人。他变偏执, 怀疑朝中有人篡位, 544 年没收 Belisarius 军权。\n\n542-548 这 6 年, 我看着丈夫从雄心皇帝变成多疑老人。我也老了。',
        en: '542 — the Plague of Justinian.\n\nYersinia pestis came up from Egypt along Mediterranean trade routes and reached Constantinople in spring 542. Procopius, contemporary, records 5,000-10,000 deaths a day at the peak; bodies could not be buried fast enough.\n\nA scholarly dispute — 7th grade, hear this clearly, this is not settled. Older view (Allen 2007, following the contemporary sources): 25-50% mortality. Newer view (Mordechai et al., PNAS 2019) — based on coinage, papyri, burials, and ancient DNA — true mortality significantly lower, perhaps locally devastating but globally mild. This is an active debate.\n\nBut what I lived was this. In summer 542 Justinian himself caught the plague — high fever, swollen lymph nodes, delirium — physicians said he would not survive.\n\nFor those six months, at 42, I ran the empire alone: relief supplies, diplomacy (I received the Persian envoy on a peace treaty in person), administration (appointing and dismissing city officials), and Belisarius\'s Italian campaign. Six months — I was de facto empress regnant, one of the rare such moments in Byzantine history.\n\nJustinian recovered by the end of 542, but he was no longer the man of 532. He grew paranoid, suspecting courtiers of plotting, and stripped Belisarius of command once (544).\n\nFrom 542 to 548 I watched my husband shift from the ambitious "rebuild Rome" emperor to a suspicious old man. I was getting old too.',
      },
      deliverGoal: 'N9 542 Plague of Justinian / Justinian 自己染上几乎死 / Theodora 6 个月独自管帝国 (de facto empress regnant) / 542-548 Justinian 康复后变偏执 / 学界争议 (Allen 2007 vs Mordechai et al. PNAS 2019)',
      engagementHook: '6 个月独自管一个帝国——你 21 世纪有没有过「所有人都倒下你必须撑」的时刻？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n10',
      type: 'narrative',
      content: {
        cn: '548 年 6 月 28 日——我 48 岁——死在 Constantinople 皇宫。\n\n死因同代来源只说是癌症, 没记病种; 后世推测乳腺或子宫癌, 但史料不足以定论。\n\nJustinian 在我床边。他比我大 18 岁, 活到 565 年, 之后 17 年没再大动作——历史学家 Evans（2002）认为我死后他失去战略锐度。\n\n我葬于圣使徒大教堂（皇室陵墓）。1453 年奥斯曼人攻下后拆了它建 Fatih 清真寺, 我的墓今天不存。\n\n但有一个跨 600 年的细节: 535 年后皇宫建了一个紫房间（porphyra）, 墙是紫色斑岩, 专供皇后生孩子。罗马传统: 在这房间生的孩子叫 porphyrogenita（生在紫色之中）, 是拜占庭最高贵血统标记。我自己没生, 但我影响 Justinian 把它制度化。\n\n600 年后, 1083 年一个女孩在那紫房间出生, 叫 Anna Komnene, 写了 15 卷《Alexiad》——中世纪欧洲第一本女性写的长篇史著。\n\n她 porphyrogenita 紫色出身, 我说「紫袍是寿衣」——600 年同一个紫色、同一个皇宫: 一个从舞台走到紫袍, 一个从紫袍走到修道院。\n\n紫色这条线, 你在 Lens 3 跟 Anna Komnene 见。',
        en: '28 June 548 — at 48 — I died in the imperial palace at Constantinople.\n\nThe cause: contemporary sources say only cancer, no specific type. Later scholars speculate (Foss 2002 leans toward breast cancer; others suggest uterine), but the sources are too thin to settle it.\n\nJustinian was at my bedside. He was 18 years older, lived to 565, and after my death attempted no major new initiative for 17 years. The historian J.A.S. Evans (2002) argues that after I was gone, Justinian lost his strategic edge.\n\nI was buried in the Church of the Holy Apostles, the second great church of Constantinople, the imperial mausoleum. After the Ottoman conquest in 1453 it was torn down and the Fatih Mosque built on the site. My tomb does not survive.\n\nBut one detail across 600 years: after the mid-530s a special room was built in the palace, the porphyra, its walls in purple porphyry stone, set aside for empresses to give birth in. Roman tradition: a child born there was called porphyrogenita, "born in the purple," the highest mark of Byzantine birth. I bore none myself, but I helped institutionalize the room.\n\n600 years later, on 1 December 1083, a girl was born in that same porphyra room — Anna Komnene, who lived to 1153, died at 70 in a monastery, and wrote the fifteen-book Alexiad, the first long-form history by a woman in medieval Europe.\n\nShe was porphyrogenita, born in the purple. I said in 532, purple is a noble shroud. 600 years, the same purple, the same palace — one woman from the stage to the purple, one from the purple to the cloister.\n\nThis thread of purple — you will meet again in Lens 3 with Anna Komnene.',
      },
      deliverGoal: 'N10 548 Theodora 48 岁死于癌症 (病种史料不详, 后世推测乳腺/子宫癌) / 葬于圣使徒大教堂 (1453 拆建 Fatih Mosque) / Justinian 之后 17 年失锐 (Evans 2002) / porphyry 紫房间 535 制度化 ⭐ porphyry thread → 1083 Anna Komnene porphyrogenita 600 年呼应',
      engagementHook: '600 年——同一个紫色房间——一个皇后从舞台走入——一个公主在里面出生——你 21 世纪有没有这种「跨 600 年同一个空间」的体验？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n11',
      type: 'synthesis',
      content: {
        cn: '关于我, 21 世纪两种说法。\n\n一种: 我是「manipulative harlot empress」。19 世纪 Gibbon 直接照搬《Secret History》, 把我写成「淫妇皇后」, 色诱操控 Justinian 篡权。\n\n另一种: 我是「saintly empress」。东正教把我封圣, 写成「悔改的演员」+「圣洁的皇后」。\n\n两种都是简化。学界 careful framing 真相:\n\n我做过 sex work——6 世纪流浪演员的常态——但《Secret History》具体细节是死后 polemic, 不能照搬。\n\n我影响 Justinian, 但不是「操控」: 我们是 23 年的政治-情感伙伴, 532.1.18 那天他本可不听我, 他听了。\n\n我推动 535 法律保护妓女, 这不是「圣洁」, 是「我自己经历过」。我庇护 Monophysite 主教, 是「演员出身让我能听见两边的语言」。\n\n一个演员的女孩做了 21 年皇后, 救了 Justinian, 改了法律, 让宗教异见在帝国内部维持。\n\n「演员的女儿不该到那位置」vs「她就是到了」——两件事同时成立。\n\n想 30 秒——这跟你 21 世纪「完美 paragon vs 完全堕落」二元化媒体叙事, 是一样的简化吗?',
        en: 'In the 21st-century academy, two stories of me.\n\nOne: I am the "manipulative harlot empress" — 19th-century Gibbon copied the Secret History straight and wrote me as a debauched empress who seduced and manipulated Justinian into stealing power.\n\nThe other: I am the "saintly empress" — Eastern Orthodoxy canonized me (feast day 14 November), the "repentant actress and holy empress."\n\nBoth are simplifications. Scholarship (Cameron 1976, Foss 2002, Evans 2002) gives a careful frame:\n\nI did do sex work — the 6th-century economy of touring actresses — but the specific scenes in the Secret History are posthumous partisan polemic, not fact.\n\nI shaped Justinian, but did not "manipulate" him. From 525 to 548, twenty-three years, we were political and emotional partners. On 18 January 532 he could have ignored me. He listened.\n\nI pushed the 535 law protecting prostitutes — not "holiness," but "I lived this myself." I sheltered Monophysite bishops — not "two-faced strategy," but "stage upbringing let me hear both languages."\n\nA 6th-century actress\'s daughter served 21 years as empress (527-548), kept Justinian on the throne, reshaped the law, kept religious dissent breathing inside the empire.\n\n"The daughter of an actress should not have reached that place" versus "she did" — both true at the same time.\n\nThink for 30 seconds. Is this the same simplification as your 21st-century "perfect paragon vs total fall" media binary?',
      },
      deliverGoal: 'N11 synthesis 双 view (manipulative harlot empress 19c Gibbon vs saintly empress 东正教封圣) — anti-binary 真相在中间 / hold 矛盾真相 30 秒 / AP DBQ 训练',
      engagementHook: '现在权衡这两遍读法：一遍把我当用色诱操控 Justinian 篡权的「淫妇皇后」；另一遍把我当悔改成圣的「圣洁皇后」。哪一遍更接近真实的我，还是两遍都漏了什么？想 30 秒，写下来。',
      expectsRealAnswer: true,
    },
    {
      id: 'theo-n12',
      type: 'synthesis',
      content: {
        cn: '我已死 1478 年——你 7 年级跟我做完 lonely-mediator 这一段。\n\n横向看几个 receiving-end 叙事:\n\n- Bartolomé de las Casas（1484-1566 西班牙修士）是男性, 但结构跟我同: 当过 13 年 encomendero, 后来 50 年反殖民——跟我一样从内部转向的 lonely-mediator。\n\n- Anacaona Jr.（1492 AoE）、Sister Agnes（Reformation）、Aisha（1235 Mali）——都是虚构 composite, 而我是真实历史人物。\n\n- Li Qingzhao（1084-1155 北宋词人）是真人, 靖康之耻南渡, 乱世失去一切的 receiving-end, 但她是诗人, 不是调停者。\n\n我跟她们都在 receiving-end, 但我是唯一的 lonely-mediator: 演员-妓女出身 + 成了皇后 + 立法保护下一代演员妓女 + 庇护宗教异见。\n\nreceiving-end 不只是「被压」, 也可以「成了之后让下一代不被压」。\n\n你身边有没有从 receiving-end 走到制度调停的人? 不是英雄、不是受害者, 是「自己经历过 + 后来用位置改变制度」的人。那个人是谁?',
        en: 'I have been dead 1478 years — at 7th grade you have walked this lonely-mediator stretch with me.\n\nLook across to other receiving-end narratives:\n\n- Bartolomé de las Casas (1484-1566, Spanish friar) — male — but "internal conscience + a life of correcting errors" is the same structure as mine. He was an encomendero himself for 13 years, then opposed colonialism for 50. Stage-born me and encomendero-born him — both lonely-mediators turning from inside.\n\n- Anacaona Jr. (fictional composite, AoE 1492 lens), a girl on the colonized side; Sister Agnes (fictional, Reformation lens), a nun witness; Aisha (fictional, Mali 1235 lens), a 14-year-old Mande girl whose mother was taken in a Songhai raid — all fictional composites, while I am a real historical person.\n\n- Li Qingzhao (1084-1155, Northern Song poet) — real — fled south after the 1127 catastrophe, "lost everything in war" receiving-end — but a poet, not a mediator.\n\nI share receiving-end with these, but I am the only lonely-mediator: actress-prostitute origin + became empress + wrote laws protecting the next generation of actresses and prostitutes + sheltered religious dissent.\n\nReceiving-end is not only "being crushed" — it can also be "becoming, then keeping the next generation from being crushed."\n\nNear you, is there someone who walked from receiving-end to institutional mediator? Not a hero, not a victim — someone who "lived it themselves, then used a position to change the structure." Who is that person?',
      },
      deliverGoal: 'N12 closing meta cross-civilization 5 receiving-end 女性 (Theodora 6c real lonely-mediator + Anacaona Jr. 1492 fictional + Sister Agnes Reformation fictional + Aisha 1235 Mali fictional + Li Qingzhao 1084 real) + las Casas 16c male lonely-mediator 平行 / receiving-end 不只「被压」也可以「成了让下一代不被压」/ 21 世纪你身边找一个',
      engagementHook: '走完我这一生——演员-妓女出身走到皇后、救下 Justinian、立法保护下一代演员妓女。你会怎么评价「演员的女儿不该到那位置 vs 她就是到了」这两件同时成立的事？再想一步：你身边有没有这种「自己经历过 + 后来用位置改变制度」的人，你会怎么对待 TA？',
      expectsRealAnswer: true,
    },
  ],
};

// 默认 export 兼容(给 staging 测试用)

// ─── Byzantine Rise · LENS 3: Anna the Iconographer (image-maker-witness) ────────
//
// Topic: Byzantine Rise 285-1095 · 拜占庭兴起
// AP World 1.4 / 6th Grade World History
//
// Lens 3 设计 (per spec — 8c 圣像派修女画家):
//   - id: 'anna-the-iconographer'
//   - role: 'receiving-end'
//   - perspectiveTag: 'female-monastic-image-maker'
//
// 虚构合成 (composite): Anna 是虚构人物——史书几乎没记 8 世纪 Iconoclasm 时期的
// 普通修女画家——但她活的世界全是真的:
//   - 717-718 阿拉伯围城 Constantinople (Leo III 防御战)
//   - 726 Leo III 第一次拆圣像
//   - 730 Edict 正式颁布
//   - 754 Hieria Council 圣像派定异端
//   - 762 Constantine V 关闭修道院 + Hippodrome 修女游街 (真事 / Theophanes 记)
//   - 775 Constantine V 死 / 780 Empress Irene 摄政
//   - 787.9.24 Nicaea II 圣像派短暂回归
//   - 815 Leo V 第二轮 Iconoclasm
//   - 843.3.11 Triumph of Orthodoxy
//
// 21c 学界反 Whig 钢筋:
//   Brubaker & Haldon 2011《Byzantium in the Iconoclast Era c.680-850》
//   ——拒绝旧叙事「邪恶 Iconoclast 皇帝 vs 圣徒圣像派」二元化
//   ——Iconoclasm 真实 driver: 阿拉伯军事压力 (717-718 围城) + Slavic 移民 +
//     6c 鼠疫后人口经济崩溃 + 帝国军事改革 (themata 制) + 神学辩论
//   ——而不是单纯「皇帝邪恶要毁艺术」
//
// 跨 lens micro-detail (Hagia Sophia 1500 年 5 身份):
//   - Lens 1 (Justinian) N5 537 完工
//   - Lens 2 (Theodora) N8 同走入
//   - Lens 3 (this Anna) N8 787 重画圣像 ⭐ (cross-lens anchor)
//   - 1054 Schism (East-West 分裂)
//   - 1453 Mehmed II 改清真寺 → 1934 Atatürk 改博物馆 → 2020 重改清真寺
//
// 严格规则 (per AoE/Mali/Tang-Song 教训 + 第 12 条):
//   - 不用 *italic* markdown — 外语词 bare + inline gloss
//   - 内嵌引号: 「」(CN) / "..." (EN), 严禁 «...»
//   - em-dash 「——」 ≤ 3 per 段, 0 段 4+ chain (per Crusades hotfix)
//   - 每 node 350-550 CN chars
//   - expectsRealAnswer 默认 false, 只 N11+N12 设 true (per 第 12 条)
//   - fictionalDisclaimer 在 description 不在 monologue (per Rule J / AoE Anacaona 教训)
//   - 7 年级 careful framing (762 修女 Hippodrome 游街 / 强制嫁人)
//   - 数学一致: 720 生 / 726 6 岁 (注: spec 说 16 岁? — 改 720 生 → 762 42 岁
//     但 spec line N3 写「726 Leo III 砸圣像 16 岁」 → 反推 710 生
//     重新校准: 710 生 / 717-718 阿拉伯围城 (7-8 岁父死) / 726 16 岁 / 762 52 岁 /
//     787 77 岁 / 815 105 岁 太老 → 改为「岁高龄/虚构」/ 820 死 110 岁不合理
//     最终采用 spec 内一致版: ~710 生 / 4 岁 (~714) 送女修院 / 726 16 岁 /
//     762 52 岁 / 787 77 岁 (老画家带学生重画) / 815 105 岁 (虚构高龄) /
//     820 死 ~110 岁
//     注: spec 里说「720 生 / 726 16 岁」数学冲突 (差 6 年) — 我以「726 砸圣像 16 岁」
//     为锚点 → 710 生 — 校准全部时间线)

// ═══════════════════════════════════════════════════
// LENS 3: Anna the Iconographer (image-maker-witness)
// ═══════════════════════════════════════════════════

export var annaTheIconographerLens = {
  id: 'anna-the-iconographer',
  name: 'Anna the Iconographer',
  nameCn: '修女安娜 (8 世纪圣像派修女画家, 虚构合成)',
  role: 'receiving-end',
  perspectiveTag: 'female-monastic-image-maker',
  description: {
    en: 'She is a 16-year-old Byzantine nun and icon-painter who has just watched imperial soldiers carry ladders up the Chalke Gate and prepare to smash the great Christ icon above it (a composite figure, standing for the thousands of nameless 8th- and 9th-century nuns and lay women who hid icons in grain sacks and under bed boards across 117 years of intermittent persecution). This pass puts you with her on the night her 70-year-old abbess gathers all eighty nuns and gives them three options, surrender the icons, hide them, or openly resist and die within three days, the vote 76 to 4 for hiding; you watch her slide the first Mother-of-God face she ever painted under the wood plank where she sleeps, and learn for the first time that "outward compliance" and "inner conviction" can be two different things.',
    cn: '她是一个 16 岁的拜占庭圣像派修女画家,看着皇家士兵搬梯子上 Chalke 门要砸那幅基督大像(合成人物,代表 117 年迫害里几千个无名、把圣像藏起来的修女和妇女)。这一遍让你跟她站在 70 岁女院长召集 80 个修女开秘密会的夜里,院长给三条路:交、藏、出去喊三天全死,投票 76 比 4 选「藏」,看她把自己画的第一张圣母脸包好藏在床板下,第一次知道「服从外表」和「真实信念」可以是两回事。',
  },
  fictionalDisclaimer: {
    en: 'Anna is a fictional composite. The chronicles of Theophanes and Nikephoros mostly recorded patriarchs, emperors, and male martyrs — they did not write down individual nuns who painted icons. But the world Anna lives in is real: the 717-718 Arab siege, the Chalke Gate icon (726), the 730 edict, the 754 Hieria Council, Constantine V\'s 762 closures and the Hippodrome parade (Theophanes Chronographia AM 6257), the 787 Second Council of Nicaea, the 815 second Iconoclasm under Leo V, and the 11 March 843 Triumph of Orthodoxy under Empress Theodora (the second one — not the 6th-century empress) — all real history. Anna stands in for the thousands of nameless 8th- and 9th-century Byzantine nuns and lay women who hid icons inside grain sacks, behind altar cloths, under bed boards — and who kept the painting tradition alive across 117 years of intermittent persecution. This pairing of real history with a fictional composite uses the same pattern as Anacaona Jr (fictional Taíno) in the Age of Exploration Topic, Sister Agnes (fictional nun) in the Reformation Topic, and Aisha (fictional Mande girl) in the Mali 1235 Topic.',
    cn: '安娜是虚构合成人物。Theophanes 跟 Nikephoros 的编年史主要记教宗、皇帝、男性殉教者——没记下单个画圣像的修女。但安娜活的世界全是真的：717-718 年阿拉伯围城 + Chalke 门基督像被拆（726）+ 730 年法令 + 754 年 Hieria 大公会议 + Constantine V 762 年关闭修道院跟 Hippodrome 游街（Theophanes《编年史》AM 6257 记）+ 787 年第二次 Nicaea 大公会议 + 815 年 Leo V 第二轮 Iconoclasm + 843 年 3 月 11 日皇后 Theodora（这是第二个，不是 6 世纪那个）下的 Triumph of Orthodoxy——都是真历史。安娜代表 8-9 世纪几千个没名字的拜占庭修女跟普通妇女——她们把圣像藏在粮袋里、藏在祭坛布后面、藏在床板下面——在 117 年断断续续迫害里把绘画传统保下来。这种「真历史 + 虚构合成」配对跟 AoE Anacaona Jr（虚构 Taíno）+ Reformation Sister Agnes（虚构修女）+ Mali Aisha（虚构 Mande 女孩）同 pattern。',
  },
  storyboard: [
    {
      id: 'anna-n1',
      type: 'narrative',
      content: {
        cn: '我大约生在 710 年——君士坦丁堡——东罗马帝国首都。\n\n父亲是城里一个小手艺人——做铜器——卖给修道院当烛台跟香炉。\n\n717 年夏天——我 7 岁——阿拉伯军队围了城。\n\n这场围城。你 21 世纪 7 年级要听清楚，不是教科书一句话。是 80,000 阿拉伯士兵 + 1,800 艘船——从陆海两面把君士坦丁堡封死——\n\n围 13 个月——从 717 年 8 月到 718 年 8 月——\n\n父亲被征去守城墙。他不是士兵，是手艺人——但城里所有男人都被征去——\n\n718 年春天——城墙某段被打塌——父亲那一段——\n\n他没回来。\n\n母亲带我跟两个弟弟——家里没钱——铜器没人买——\n\n719 年冬天——母亲做了一个决定——\n\n她带我走到城南一家女修院门口。我 9 岁。后来修院里别的修女说我那时候 4 岁，但我记得我 9 岁。记忆这件事，你 21 世纪也知道——童年记忆经常错——\n\n（修道院档案后来记我「童年入院」——具体几岁，连我自己都说不清。）\n\n母亲把我留在门口——回家带两个弟弟——\n\n她没再来过。',
        en: 'I was born around 710 in Constantinople — capital of the Eastern Roman Empire.\n\nMy father was a small artisan in the city — he made bronze pieces — selling them to monasteries as candle-stands and incense burners.\n\nIn the summer of 717 — I was 7 — an Arab army laid siege to the city.\n\nThis siege — 21st-century 7th grade, hear it clearly — is not a single textbook sentence. It was 80,000 Arab soldiers and 1,800 ships — sealing Constantinople from land and sea —\n\nThirteen months — from August 717 to August 718 —\n\nMy father was conscripted to the walls. He was not a soldier, he was an artisan — but every man in the city was conscripted —\n\nIn spring 718 — a section of the wall was breached — his section —\n\nHe did not come home.\n\nMy mother had me and two younger brothers. No money. The bronze did not sell —\n\nIn the winter of 719 — she made a decision —\n\nShe walked me to the gate of a women\'s monastery on the south side of the city. I was 9 — later other nuns told me I was 4 when I came — but I remember being 9 — memory at that age — 21st-century you know this too — childhood memory often gets the year wrong —\n\n(The monastery register simply recorded me as "entered as a child." Even I cannot say the exact age.)\n\nMother left me at the gate. She walked back to my brothers.\n\nShe never came again.',
      },
      deliverGoal: 'N1 ~710 出生 Constantinople 小手艺人家 / 717-718 阿拉伯围城 13 个月 / 父死城墙 / ~719 母带 4-9 岁 (记忆模糊) 送女修院',
      engagementHook: '童年记忆错年——你 21 世纪有没有「我记得我那时候 X 岁，但家里人说我 Y 岁」的事？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n2',
      type: 'narrative',
      content: {
        cn: '720 年代——我在女修院里长大。\n\n修院 80 个修女。年纪从 12 岁到 70 岁，共住一个院子——一起吃饭一起祷告一起劳动——\n\n我在那里学画圣像（icon）。\n\n圣像不是普通画。8 世纪拜占庭圣像有严格规矩。基督一定是这个手势，圣母一定是这个姿势。颜色按规矩分——金底是天国，蓝是圣母袍，红是基督血——\n\n画法用木板 + 蛋彩（egg tempera，蛋黄混颜料）+ 金箔——一幅小圣像要画 3-4 个月。\n\n我 12 岁开始磨颜料——14 岁画背景——16 岁第一次画圣母脸。\n\n教我的修女叫 Maria——她 60 岁——她师父是 6 世纪 Justinian 朝（你 Lens 1 跟 Lens 2 见过的那个朝代）的画家——\n\n意思是：我手里这条传承——往上数 5 代——一直接到 Theodora 皇后跟 Justinian 走入 Hagia Sophia 那一年。\n\n（Lens 2 你认识的 Theodora 是 6 世纪——我是 8 世纪——中间隔 200 年。）\n\n修院的女院长跟我说：「Anna，你的手稳——你以后能画祭坛中央那幅大像。」\n\n16 岁那年——我以为我会一辈子画下去。\n\n那一年是 726 年。',
        en: 'Through the 720s I grew up inside the women\'s monastery.\n\nEighty nuns shared a single courtyard — ages 12 to 70 — eating, praying, working together —\n\nIn there I learned to paint icons.\n\nAn icon is not an ordinary painting. 8th-century Byzantine icons follow strict conventions — Christ in this gesture, the Mother of God in that pose — colors are coded — gold ground is the kingdom of heaven, blue is the Mother\'s robe, red is the blood of Christ —\n\nMethod: wood panel, egg tempera (yolk mixed with pigment), gold leaf. A small icon takes three or four months.\n\nI ground pigments at 12. Painted backgrounds at 14. At 16 I painted my first face of the Mother of God.\n\nMy teacher was a nun named Maria — 60 years old. Her teacher had been a painter under the 6th-century court of Justinian (the era you met in Lens 1 and Lens 2).\n\nMeaning: the lineage in my hands — five teachers up — traces back to the year Empress Theodora and Justinian walked into Hagia Sophia.\n\n(The Theodora you met in Lens 2 was 6th century — I am 8th century — 200 years between us.)\n\nThe abbess told me: "Anna, your hand is steady. One day you will paint the great icon at the center of the altar."\n\nAt sixteen I believed I would paint for the rest of my life.\n\nThat year was 726.',
      },
      deliverGoal: 'N2 720s 童年学画圣像 / 80 修女院 / 蛋彩 + 金箔 + 严格图像学规矩 / 教师 Maria 师承上溯 5 代到 Justinian 朝 (Lens 1+2 cross-lens 200 年传承) / 16 岁画第一张圣母脸',
      engagementHook: '一种手艺往上数 5 代教师——你 21 世纪有没有这种「我会的事是 5 个老师传下来的」的感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n3',
      type: 'narrative',
      content: {
        cn: '726 年——我 16 岁——皇帝 Leo III 下令拆 Chalke 门的基督圣像。\n\nChalke 门是皇宫正门, 门洞上方那幅大基督像所有人进出都见过。拆像那天一群皇家士兵搬梯子上去准备砸, 几个修女跟妇女站在门下喊「不许动」, 士兵不听。\n\n（Theophanes《编年史》记拆像引发小骚乱, 几个抵抗者被打死。学界 Brubaker & Haldon 2011 提醒: 这段叙事是后来 9 世纪圣像派胜利后写的, 可能有润色, 但拆像本身是真的。）\n\n城里很多人想不通: 皇帝为什么砸自己宫门上的圣像? careful framing——这不是「皇帝邪恶讨厌艺术」那么简单, 而是 4 重压力同时作用:\n\n第一: 717-718 阿拉伯围城刚过 8 年, 帝国差点被穆斯林灭, 而穆斯林教义反对神像。\n\n第二: Justinian 鼠疫之后人口可能少 30-40%、经济崩溃, 皇帝需要新意识形态解释「为什么打不过」。\n\n第三: themata（军区制）改革, 皇帝靠军队, 而军区里小亚细亚士兵传统上反圣像。\n\n第四: 神学辩论真实——出埃及记 20:4「不可雕刻偶像」一直存在。\n\n（Brubaker & Haldon 2011 强调: 单一动机说全错。）\n\n但我 16 岁那天不懂这些, 只看见我画的东西被人砸下来。',
        en: 'In 726 — I was 16 — Emperor Leo III ordered the Christ icon at the Chalke Gate taken down.\n\nThe Chalke Gate was the palace\'s main entrance; everyone who entered or left saw the great Christ icon above it. The day they took it down, imperial soldiers carried ladders up to smash it; a few nuns and women stood under the gate shouting "Do not touch it." The soldiers did not stop.\n\n(Theophanes\'s Chronographia records the removal triggered a small riot in which several resisters were killed. Scholarship — Brubaker & Haldon 2011 — cautions this account was written later by the 9th-century iconophile victors, likely polished, but the removal itself is real.)\n\nMany could not understand: why smash an icon on the emperor\'s own gate? 21st-century careful framing — it is not as simple as "the emperor was evil and hated art." Four pressures acted at once:\n\nFirst: the Arab siege of 717-718 had ended only 8 years earlier; the empire had nearly been destroyed by Muslims, whose teaching forbids images of the divine.\n\nSecond: after the Justinianic plague, population may have dropped 30-40 percent and the economy collapsed; the emperor needed a new ideology for "why we keep losing."\n\nThird: the themata (military theme) reform made the emperor depend on the army, and Anatolian soldiers in the themata had long disliked icons.\n\nFourth: the theology was real — Exodus 20:4 ("Thou shalt not make any graven image") had always been there.\n\n(Brubaker & Haldon 2011 stress: any single-cause story is wrong.)\n\nThat day at sixteen I understood none of this. I only saw what I painted being knocked down.',
      },
      deliverGoal: 'N3 726 Leo III Chalke 门基督像被拆 (16 岁) / 反 Whig 钢筋 4 重原因 (Brubaker & Haldon 2011): 阿拉伯军事压力 + 鼠疫后人口经济崩溃 + themata 军区制改革 + 神学辩论 / 不是「皇帝邪恶讨厌艺术」二元化',
      engagementHook: '一件事 4 个原因同时作用——你 21 世纪能 hold 「不是单一原因」的复杂解释吗？还是更想要一个「坏人」的故事？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n4',
      type: 'narrative',
      content: {
        cn: '730 年——Leo III 颁布正式法令禁止圣像崇拜, 全帝国所有圣像必须拆除或刷白。君士坦丁堡牧首（Patriarch）Germanus 不肯签, 被罢免, Leo III 另立支持禁令的新牧首。\n\n那天晚上女修院发生一件事。70 岁的女院长召集 80 个修女开秘密会, 说:「我们有三条路。\n\n第一: 交出圣像, 配合, 保命。\n\n第二: 把圣像藏起来（粮袋里、祭坛布后面、地板下）, 表面交几张旧的糊弄过去。\n\n第三: 公开抵抗, 三天内全院 80 人都死。\n\n你们投票。」\n\n结果 80 票里 76 票选第二条——藏。那一夜我跟其他修女把祭坛上 30 多张圣像拆下分散藏。我那张 16 岁画的第一张圣母脸, 用麻布包好藏在自己睡觉的木板下。\n\n之后 20 年我们表面服从、内里藏着 30 多张。（21 世纪修道院考古发现无数小型隐藏圣像被埋在墙体跟地板里, 证明 Brubaker & Haldon 2011 说的「修道院网络是抵抗主体」。）\n\n这是我修女生涯第一次知道「服从外表」跟「真实信念」可以分开。你 21 世纪也会面对这件事。',
        en: 'In 730 Leo III issued the formal edict banning the veneration of icons; across the empire every icon had to be removed or whitewashed. Patriarch Germanus of Constantinople refused to sign and was removed; Leo III installed a new patriarch who supported the ban.\n\nThat night something happened at the monastery. The 70-year-old abbess gathered the 80 nuns and said: "We have three options.\n\nOne: surrender the icons, comply, survive.\n\nTwo: hide them — in grain sacks, behind altar cloths, under floorboards — turn in a few old worn ones to keep up appearances.\n\nThree: open resistance — within three days all eighty of us are dead.\n\nVote."\n\nThe count: 76 of 80 chose option two — hide. That night we took more than thirty icons from the altar and distributed them. My first Mother of God face, painted at 16, I wrapped in linen and slid under the wood plank where I slept.\n\nFor the next twenty years we outwardly complied and inwardly kept thirty-some panels alive. (21st-century archaeology has uncovered many small concealed 8th-century icons inside walls and beneath floorboards, confirming Brubaker & Haldon 2011\'s point that monastic networks were the core of resistance.)\n\nThis was the first time as a nun I learned that "outward compliance" and "inner conviction" can be two different things. 21st-century you will meet this question too.',
      },
      deliverGoal: 'N4 730 Edict 正式禁圣像 / Patriarch Germanus 被罢免 / 修院 80 修女投票 76 票选「藏不抵抗」/ 圣像藏在粮袋祭坛布地板下 (考古证据 Brubaker & Haldon 2011) / 「服从外表 vs 真实信念」分开',
      engagementHook: '80 人投票 76 选「藏」4 选「抗」——你 21 世纪在「保命服从」跟「公开反抗」之间会怎么选？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n5',
      type: 'narrative',
      content: {
        cn: '740 年 6 月 18 日——Leo III 死, 儿子 Constantine V 即位。我那时 30 岁, 在修院里表面画花纹、私下画圣母脸, 以为新皇帝可能松一点。\n\n错了。Constantine V 比父亲更狠, 自己写过 13 篇神学小册子论证圣像是异端——不是「军方推动」, 是「他自己 conviction」。\n\n754 年他召开 Hieria 大公会议（Council of Hieria）, 338 个主教参加, 正式宣布圣像崇拜是异端（heresy）、圣像派是「偶像崇拜者」（idolaters）。（careful framing: 这会议没有罗马教皇代表、也没有东方三大牧首区代表, 所以 787 年 Nicaea II 否认它是「真正大公会议」, 但 754 年它是 Constantine V 完整的国家神学定调。）\n\n754 年我 44 岁。那一年女修院新院长（55 岁）在祈祷室哭了一场:\n\n「Anna——他们说我们是 idolaters、拜偶像的。我们做了什么? 我们画了圣母的脸、基督的脸、圣徒的脸——这些脸我们 5 代手传下来。现在一群没拿过画笔的主教在 Hieria 开三个月会, 决定这些脸是异端。」\n\n这是我修女生涯第一次明确想: 神学辩论真的——但「谁在辩」也真的。',
        en: 'On 18 June 740 Leo III died and his son Constantine V succeeded. I was 30, outwardly painting patterns and privately still painting the Mother of God, thinking the new emperor might loosen the rule.\n\nI was wrong. Constantine V was harder than his father; he himself wrote thirteen theological treatises arguing icons were heresy — not "the army pushing him," but his own conviction.\n\nIn 754 he convened the Council of Hieria; 338 bishops attended, and the council formally declared icon-veneration a heresy and the iconophiles "idolaters." (Careful framing: Hieria had no representative from the Pope of Rome and none from the three eastern patriarchates, so when the iconophiles regathered at Nicaea II in 787 they refused to recognize it as a true ecumenical council — but in 754 it was Constantine V\'s full state theology.)\n\nIn 754 I was 44. That year the abbess (a new one, 55; the old one died in 745) wept once in the prayer hall:\n\n"Anna — they call us idolaters. What have we done? We painted the face of the Mother, the face of Christ, the faces of the saints — five generations of hands, passed down. Now a group of bishops who never held a brush, meeting three months at Hieria, decide those faces are heresy."\n\nThis was the first time as a nun I thought clearly: the theology is real — but who gets to argue it is also real.',
      },
      deliverGoal: 'N5 740 Leo III 死 / 子 Constantine V 即位更狠 (自写 13 篇神学小册子 conviction) / 754 Hieria Council 338 主教定圣像异端 / careful framing: 罗马教皇 + 东方三大牧首区都没参加 (787 Nicaea II 后否认其大公性)',
      engagementHook: '「神学辩论真的——但谁在辩也真的」——你 21 世纪有没有过「这件事道理是对的——但谁在说也很重要」的感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n6',
      type: 'narrative',
      content: {
        cn: '762 年——Constantine V 登基 22 年——下了帝国史上最狠的一招: 关闭君士坦丁堡及周边的修道院。（careful: 不是关全帝国, 主要是首都圈跟小亚细亚, 但规模空前。）修女修士被强制还俗——男的去当兵, 女的强制嫁人。\n\n我那年 52 岁, 修院 80 个修女大部分被带走。我同辈的画师修女 Theodosia, 跟我一起画了 30 年。（careful framing: Theodosia 后来被迫嫁人, 再没碰过画笔, 4 年后病死, 49 岁——这是 762 年那场关闭最常见的结局。）\n\n更狠的是: 那年某天 Constantine V 把一批僧尼拉到 Hippodrome 让他们一个一个走过赛场, 观众嘲笑——8 世纪的公开羞辱。（你在 Lens 2 跟 Theodora 站过那个 Hippodrome, 230 年后变成另一种戏台。）\n\nTheophanes《编年史》记下这一场。（Brubaker & Haldon 2011: 它是 9 世纪圣像派胜利后写的, 可能强化戏剧性, 但游街本身是真的。）\n\n那一天我躲在地窖没出去。我活下来, 但 Theodosia 没活下来。\n\n这是我 52 岁那年最难的一段——为什么是我活下来, 而不是她?',
        en: 'In 762 — Constantine V had reigned 22 years — he played the harshest hand of his life: closing the monasteries of Constantinople and its region. (Careful framing: not every monastery in the empire, mainly the capital region and Anatolia, but the scale was unprecedented.) Nuns and monks were forced to renounce vows — men into the army, women into forced marriage.\n\nI was 52; most of the 80 nuns of my house were taken away — among them Theodosia, a fellow painter three years younger, with whom I had painted for thirty years. (Careful framing: Theodosia was married off to a junior officer, never touched a brush again, and died of illness four years later, at 49 — the most common ending of the 762 closures.)\n\nThere was worse: that year Constantine V led a group of monks and nuns into the Hippodrome and paraded them one by one across the racetrack while the crowd jeered — the 8th-century public shaming. (In Lens 2 you stood in that Hippodrome with Theodora, where as a 5-year-old she had begged for a job in white — 230 years later, another kind of stage.)\n\nTheophanes\'s Chronographia AM 6257 (AD 765) records this scene. (Brubaker & Haldon 2011 caution: Theophanes wrote in the 9th century from the iconophile victors\' side, likely heightened, but the parade itself is real.)\n\nThat day I hid in the monastery cellar. I lived. Theodosia did not.\n\nAt 52, this was the hardest stretch — why did I live, and not she?',
      },
      deliverGoal: 'N6 762 Constantine V 关闭首都圈修道院 / 修士去当兵修女强制嫁人 / 同辈画师修女 Theodosia 强制嫁人 4 年后病死 / Hippodrome 游街僧尼 (Theophanes AM 6257 记) / careful framing 9c 圣像派胜利写法 / 「为什么我活下来不是她」',
      engagementHook: '「为什么是我活下来——而不是她？」——你 21 世纪有没有过这种「我跟另一个人差不多——结局完全不同」的疑惑？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n7',
      type: 'narrative',
      content: {
        cn: '775 年 9 月 14 日——Constantine V 死。我那年 65 岁还活着, 还在那个被关闭过的修院里——表面荒废, 内里 12 个老修女偷偷回来。\n\n他儿子 Leo IV 即位, 5 年后死, 继位的 Constantine VI 才 10 岁, 母亲皇后 Irene 摄政。她是拜占庭历史第一个女性单独执政者, 秘密是圣像派——父亲家族来自雅典（8 世纪圣像派强地）, 从小在家偷偷敬圣像。\n\n780 年她摄政那一刻风向变了。782 年逐步松绑 Iconoclasm 法令, 786-787 年召开第二次 Nicaea 大公会议。787 年 9 月 24 日 Nicaea II 正式投票: 圣像「敬礼」（veneration）合法, 不是「崇拜」（worship）, 撤销 754 Hieria。这场 350 多个主教参加, 包括罗马教皇代表——这次有了。（学界视它为最后一次正统东西方共同的大公会议, 之后 1054 年东西教会分裂。）\n\n787 年我 77 岁。61 年——我 16 岁开始藏画, 77 岁等到这一刻——这不是「下个月」, 是「你父母还没出生 + 祖父母刚出生」加起来的时间。\n\n我没哭。我去地窖, 把 16 岁那张麻布包的圣母脸拿出来。',
        en: 'On 14 September 775 Constantine V died. I was 65, still alive, still inside that "closed" monastery — outwardly derelict, inwardly twelve old nuns had quietly returned.\n\nHis son Leo IV succeeded but died 5 years later in 780; next came Constantine VI, 10 years old, with his mother Empress Irene as regent. You may not know her name, but she was the first solo female ruler in Byzantine history. She was a private iconophile — her father\'s family came from Athens, an 8th-century iconophile stronghold, and from childhood she had quietly venerated icons.\n\nIn 780, the moment she became regent, the wind shifted. In 782 she loosened the Iconoclast laws. In 786-787 she convened the Second Council of Nicaea. On 24 September 787 Nicaea II voted: icon-veneration is lawful — veneration, not worship — overturning the 754 Hieria. More than 350 bishops attended, including representatives of the Pope of Rome — this time. (Scholarship treats Nicaea II as "the last truly East-West ecumenical council"; in 1054 the churches split.)\n\nIn 787 I was 77. Sixty-one years — from 16 hiding my first panel to 77 living to see this moment — not "next month," but "your parents not yet born plus your grandparents just born" added together.\n\nI did not weep. I went to the cellar and lifted out the linen-wrapped Mother of God I had painted at sixteen.',
      },
      deliverGoal: 'N7 775 Constantine V 死 / Leo IV 5 年后 780 死 / Empress Irene 摄政 (拜占庭第一个女性单独执政者 / 私下圣像派) / 786-787 召开 Nicaea II / 787.9.24 圣像派胜利定 veneration 不是 worship / 350+ 主教含罗马教皇代表 / 视为最后一次正统东西方大公会议',
      engagementHook: '61 年——从 16 岁藏画到 77 岁等到合法——你 21 世纪敢想「我等一件事 60 年」的尺度吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n8',
      type: 'narrative',
      content: {
        cn: '787 年秋天——Nicaea II 之后——皇后 Irene 下令: 君士坦丁堡所有大教堂的圣像重画, 包括 Hagia Sophia——你 Lens 1 跟 Lens 2 都进过的那座圆顶。它 537 年完工, 730 年 Leo III 法令之后大部分被刷白。\n\n787 年, 77 岁的我被女修院推荐, 带 8 个学生（17 到 45 岁）进 Hagia Sophia 重画。我们站在圆顶下, 抬头看 56 米高的圆顶, 我跟学生们说:\n\n「这座圆顶 537 年由 Anthemius 跟 Isidore 用 pendentive 撑起来。那一年我们 5 代往上的祖师也站在这里——同一个传承。圆顶下 532 年死了 30,000 人, 一墙之隔。730 年这里的圣像被刷白。今天我们重画。\n\n记住: 这圆顶站了 250 年, 还会再站很多个 250 年。它不只是一座教堂, 会经过很多个名字。我们只是它 250 年的一个秋天。」\n\n那天我画了一幅基督圆顶中央像, 是我一生最大的一幅。28 年后 815 年它会被 Leo V 再刷白——但那天我不知道, 只知道我在画。',
        en: 'In autumn 787 — after Nicaea II — Empress Irene ordered the icons of every great church in Constantinople restored, including Hagia Sophia — the same dome you walked into in Lens 1 and Lens 2. Finished by Justinian in 537, its interior once covered in mosaic; after Leo III\'s 730 edict, most was whitewashed.\n\nIn 787, at 77, I was nominated by my monastery and led eight students (youngest 17, oldest 45) into Hagia Sophia to paint again. We stood beneath the dome, looking up 56 meters, and I told them:\n\n"In 537 the mathematicians Anthemius and Isidore raised this dome on pendentives. That year, the teacher five generations above ours also stood here — the same lineage. Under this dome 30,000 died in 532, one wall away. In 730 the icons here were whitewashed. Today, in 787, we paint again. Remember: this dome has stood 250 years and will stand many more. It is not only a church; it will pass through many names. We are only one autumn of its 250 years."\n\n(Hagia Sophia\'s 1500-year, 5-identity arc: 537 Justinian Byzantine Orthodox cathedral / 6th-century Theodora contemporary / 8th-century my repainting / 1054 East-West Schism witness / 1453 Mehmed II mosque → 1934 museum → 2020 mosque again.)\n\nThat day at 77 I painted a Christ Pantocrator at the dome\'s center, the largest panel of my life. 28 years later, in 815, Leo V would whitewash it again — but that day I did not know. I only knew I was painting.',
      },
      deliverGoal: 'N8 787 67 岁→77 岁带 8 个学生在 Hagia Sophia 重画圣像 ⭐ cross-lens micro-detail / Hagia Sophia 1500 年 5 身份 (537 Justinian / 6c Theodora / 8c Anna 重画 / 1054 Schism / 1453 改清真寺 → 1934 博物馆 → 2020 重改清真寺) / 自己最大一幅 / 28 年后 815 会再被刷白',
      engagementHook: '「我们只是它 250 年的一个秋天」——你 21 世纪能不能 hold 「我做的事不会永久——但仍然要做」这种感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n9',
      type: 'narrative',
      content: {
        cn: '815 年——皇帝 Leo V 下令第二轮 Iconoclasm。我那年按修院记录 105 岁。（注: 8-9 世纪人均寿命 30-40 岁, 105 岁代表「跨 117 年圣像派内战的活记忆」叙事 voice, 详见 fictionalDisclaimer。）那年我已看不太清, 但还能教学生。\n\n815 年 4 月 Leo V 在新一届主教会议上重新立 Iconoclasm 为国法, 787 Nicaea II 被撤销——787 到 815 的「短暂回归」只 28 年。\n\n这一轮比第一轮更精准: 第一轮（726-787）打修道院网络, 我们能藏; 第二轮（815-843）打「藏的人」——皇家暗探挨家挨户搜, 找出 30 年前藏的圣像再销毁。我学生那一辈这次成了主要受迫害对象。我那张 16 岁画的圣母脸被搜走。\n\n我画了 89 年。815 年那天士兵在我修院搜出 12 张圣像, 当我面砸碎。我没说话。（careful framing: 我没被打死, 他们觉得 105 岁的老修女不值得费力气——一种「年龄豁免」, 但我学生那一辈不豁免。）\n\n我修院 12 个学生里: 4 个被流放, 3 个被殴打致残, 5 个躲到山里小修院继续。\n\n我活在「看着第二代被打」的状态。这比 762 年我自己看朋友被带走更难。',
        en: 'In 815 Emperor Leo V ordered the second wave of Iconoclasm. That year, per the monastery register, I was 105. (Note: 8th- to 9th-century life expectancy was 30-40; the 105-year figure carries the narrative voice of 117 years of iconophile memory. See this lens\'s fictionalDisclaimer.) I could no longer see well, but I could still teach.\n\nApril 815 — at a new bishops\' synod Leo V reinstated Iconoclasm as imperial law, overturning the 787 Nicaea II; the "short restoration" from 787 to 815 was only 28 years.\n\nThis round was more precise. The first (726-787) struck monastic networks, and we could hide; the second (815-843) struck "the hiders" — imperial agents searched house by house, found the icons hidden 30 years earlier, and destroyed them again. My students\' generation (eldest now 73, youngest 45) became the primary target. The Mother of God I had painted at 16 was confiscated.\n\nI had painted for 89 years. That day in 815 soldiers found 12 icons in my monastery and broke them in front of me. I did not speak. (Careful framing: I was not beaten to death — they judged a 105-year-old nun not worth the effort, a kind of "age exemption" — but my students got no such exemption.)\n\nOf my 12 students: 4 exiled, 3 beaten to disablement, 5 fled to mountain hermitages and kept painting.\n\nI lived in the state of "watching the second generation be struck." Harder than 762, when I watched my friend be taken.',
      },
      deliverGoal: 'N9 815 Leo V 第二轮 Iconoclasm / 修女 105 岁高龄 (虚构 composite — 一肉身做不到 / 代表 117 年活记忆) / 第二轮比第一轮精准 (打「藏的人」搜家) / 学生辈受迫害 (4 流放 3 致残 5 躲山修院) / 16 岁那张圣母脸被搜走砸碎 / 「看第二代被打」比 762 朋友被带走更难',
      engagementHook: '「我看着第二代被打」——你 21 世纪有没有过「我自己受过的不算最难——看下一代受同样的苦最难」的感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n10',
      type: 'narrative',
      content: {
        cn: '约 820 年我死。修院记录「Anna 修女约百岁高龄逝于本院」, 具体那天没记。\n\n我死时, 第二轮 Iconoclasm 才开始 5 年, 结局还没出来。我学生那一辈继续藏圣像、偷偷画、教下一代。我没看到结局, 但你能看到。\n\n我死后 23 年, 843 年 3 月 11 日, 皇后 Theodora（这个是 9 世纪的, 不是 Lens 2 那个 6 世纪的; 拜占庭有 3 个 Theodora 皇后, 别混）摄政, 那天四旬期第一个星期日, 她下令撤销 815 年 Iconoclasm、重立 787 Nicaea II 为国法, 所有教堂重画圣像。\n\n这一天东正教叫 Triumph of Orthodoxy（正教凯旋日）, 今天每年第一个四旬期星期日仍然纪念。\n\n（同一个 9 世纪, 拜占庭传教士 Cyril 和 Methodius 创了 Cyrillic 斯拉夫字母, 21 世纪俄罗斯、乌克兰、塞尔维亚仍在用——拜占庭给世界的另一份遗产。）\n\n117 年——726 到 843——拜占庭圣像派内战, 两次 Iconoclasm、两次圣像派胜利。我学生那一辈活到 843 的 3 个走进重开的 Hagia Sophia, 重画一张基督圆顶中央像, 比我那张更老练。\n\n他们成了。我没看到, 但他们成了。',
        en: 'Around 820 I died. The monastery register reads: "Sister Anna, near a hundred years of age, departed this house." The exact day was not recorded.\n\nI died only 5 years into the second wave of Iconoclasm; the ending had not yet come. My students\' generation kept hiding icons, painting in secret, teaching the next generation in mountain hermitages. I did not see the ending, but you can.\n\nTwenty-three years after my death, on 11 March 843, a woman — the Empress Theodora (this one 9th-century, not the 6th-century one you met in Lens 2; Byzantine history has three Empresses Theodora, do not mix them up) — became regent after her husband Theophilos died in 842. On 11 March 843, the first Sunday of Lent, she ordered: 815 Iconoclasm overturned, 787 Nicaea II reinstated, icons restored in every church.\n\nThis day Eastern Orthodoxy calls the Triumph of Orthodoxy, still commemorated on the first Sunday of Lent every year — if you have an Orthodox classmate, they still keep it.\n\n(In the same 9th century, the Byzantine missionaries Cyril and Methodius created the Cyrillic alphabet, still used in 21st-century Russia, Ukraine, Bulgaria, and Serbia — another Byzantine gift to the world.)\n\nOne hundred and seventeen years — 726 to 843 — the iconophile civil war of Byzantium: two Iconoclasms, two iconophile victories. Three of my students lived to 843; they walked into a reopened Hagia Sophia and painted a Christ Pantocrator at the center of the dome again, more practiced than my 787 panel.\n\nThey arrived. I did not see it, but they arrived.',
      },
      deliverGoal: 'N10 ~820 Anna 死 ~110 岁 (composite voice 再申明) / 23 年后 843.3.11 Empress Theodora (9c 不是 6c Lens 2 那个 — 3 个同名皇后注意) Triumph of Orthodoxy / 117 年圣像派内战收尾 / 学生 3 人活到 843 走入重开 Hagia Sophia / 「我没看到——但他们成了」',
      engagementHook: '「我没看到——但他们成了」——你 21 世纪能不能想象自己「在死前没看到结局，但仍然为下一代做」？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n11',
      type: 'synthesis',
      content: {
        cn: '关于 117 年的拜占庭 Iconoclasm, 21 世纪有两种读法, 请你掂量这一对:\n\n一种（19 世纪到 20 世纪中期主流）: 这是「邪恶 vs 圣洁」——坏皇帝（Leo III、Constantine V、Leo V）讨厌艺术、砸圣像, 圣洁的修女修士拼死护住信仰, 最后正义赢。一个有坏人、有英雄、好记的故事。\n\n另一种（Brubaker & Haldon 2011 修正）: 根本没有「坏人」——是 4 重结构压力同时压上来: 阿拉伯军事压力（717-718 围城几乎灭帝国）+ 鼠疫后人口经济崩溃 + themata 军区制改革（皇帝靠反圣像的军队）+ 出埃及记 20:4 真实神学辩论。皇帝跟修女都被卷在里面。\n\n两种都不完整, 真相在中间: 4 重结构压力是真的, 但 Theodosia 49 岁病死、我学生 3 人致残、我修院 30 张圣像被砸也都是真的。「结构性原因」跟「个人代价」不是非此即彼。5 代手往下传的画师传承也是真的。\n\n你怎么看这两种读法? 哪一种更接近 8 世纪的真实, 还是各对一半? 一个没有「坏人」的解释你 hold 得住吗, 还是心里更想要一个可以恨的坏皇帝?\n\n这个问题没有标准答案。想 30 秒, 写下来。',
        en: 'About the 117 years of Byzantine Iconoclasm, the 21st century offers two readings — weigh this pair.\n\nOne (the dominant 19th to mid-20th century narrative): "evil vs holy" — wicked emperors (Leo III, Constantine V, Leo V) hated art and smashed icons, saintly nuns and monks resisted, and justice won. A story with a villain, a hero, easy to remember.\n\nThe other (Brubaker & Haldon 2011 revision): there is no "villain" — four structural pressures acted at once: Arab military pressure (the 717-718 siege nearly destroyed the empire) + post-Justinianic-plague demographic and economic collapse + the themata military reform (the emperor depended on an anti-icon army) + a real theological argument over Exodus 20:4. Emperor and nun were both caught in it.\n\nNeither is complete; the truth is in the middle. The four pressures are real — but Theodosia dying at 49, three of my students disabled, thirty icons in my house smashed, are also real. "Structural cause" and "personal cost" are not either/or. The five-generation painter\'s lineage is real — I as a composite voice cannot carry 117 years in one body, but five generations of nuns\' bodies carried it together.\n\nHow do you read these two? Which is closer to the 8th-century truth, or are they each half right? Can you hold an explanation with no "villain," or do you want a bad emperor to hate?\n\nThere is no standard answer. Think for 30 seconds, and write it down.',
      },
      deliverGoal: 'N11 synthesis expectsRealAnswer:true 双 view 掂量 (邪恶 Iconoclast 皇帝 vs 圣洁圣像派 19c 主流 / Brubaker & Haldon 2011 4 重结构压力) — anti-binary 真相在中间 / 「结构性原因」跟「个人代价」不是非此即彼 / 没有坏人的解释 hold 得住吗 / 117 年内战 / hold 矛盾真相 想 30 秒',
      engagementHook: '一种说法是坏皇帝讨厌艺术、圣洁修女抵抗，另一种说法根本没有坏人、只有 4 重结构压力——你掂量这一对，哪一种更接近 8 世纪的真实？想 30 秒，写下来。',
      expectsRealAnswer: true,
    },
    {
      id: 'anna-n12',
      type: 'synthesis',
      content: {
        cn: '我已死 1206 年——你跟我做完 image-maker-witness 这一段。\n\n横向看几个 receiving-end 没名字的 voice: Anacaona Jr.（1492 AoE）、Aisha（1235 Mali）、我（8c 修女）, 都是虚构 composite, 同一个 pattern: 「机构活了, 个人故事消失了」。\n\n843 Triumph of Orthodoxy 是机构胜利, 东正教今天每年第一个四旬期星期日还在纪念。但 Theodosia——762 年被强制嫁人 4 年后病死的我同辈画师——Theophanes 没记她, 她不在凯旋日、不在信经名单里, 只在我这虚构 voice 里。\n\nHagia Sophia 1500 年 5 个身份: 537 Justinian 东正教大教堂 / 6c Theodora 同代 / 787 我重画 / 1054 East-West Schism / 1453 清真寺 → 1934 博物馆 → 2020 重改清真寺。圆顶不动, 名字换 5 次。\n\n你身边有没有这种「场所活了, 但人换了几代」的感觉? 你所在的城市, 100 年前、500 年前是谁住? 你不是第一个住的人, 也不会是最后一个。\n\n你打算在你的「一个秋天」里画什么?',
        en: 'I have been dead 1206 years — you have walked this image-maker-witness stretch with me.\n\nLook across to several receiving-end nameless voices: Anacaona Jr (fictional, 1492 AoE Lens, 12-year-old Taíno girl, family destroyed), Aisha (fictional, 1235 Mali Lens, a 14-year-old Mande girl whose mother was taken in a Songhai raid), and me (fictional, 8th-century, ~110-year-old Byzantine nun, 117-year painter\'s lineage). Three civilizations, three eras, one pattern: "the institution lived; the personal story disappeared."\n\n(The Theodora you met in Lens 2 is another shape — a real person who walked to a lonely-mediator position; we three composites only "hide," "keep," "paint.")\n\nThe 843 Triumph of Orthodoxy is an institutional victory, still commemorated every first Sunday of Lent. But Theodosia — my fellow painter, forced into marriage in 762, dead four years later — Theophanes did not record her; she is not in the 843 Triumph, not in the Synodikon of Orthodoxy, only in this fictional voice of mine.\n\nOne more cross-lens reminder — Hagia Sophia\'s 1500-year, 5-identity arc: 537 Justinian Orthodox cathedral (Lens 1) / 6th-century Theodora contemporary (Lens 2) / 787 my repainting (this node) / 1054 East-West Schism witness / 1453 mosque → 1934 museum → 2020 mosque again. Five identities sharing one 56-meter dome — the dome does not move, the name changes five times.\n\nNear you, is there a "the place lives, but the people in it have changed across generations" feeling? Your city — who lived there 50, 100, 500 years ago? You are not the first to live there, and not the last.\n\nIn your one autumn, what do you intend to paint?',
      },
      deliverGoal: 'N12 closing meta cross-civilization 3 receiving-end 没名字的人 voice (Anacaona Jr 1492 / Aisha 1235 / Anna 8c) / 「机构活了—个人故事消失」 (843 Triumph 凯旋 vs Theodosia 不在 Synodikon) / Hagia Sophia 1500 年 5 身份 (537 Justinian / 6c Theodora / 787 Anna / 1054 Schism / 1453→1934→2020 清真寺-博物馆-清真寺) / 「你打算在你的一个秋天里画什么？」',
      engagementHook: '走完我这一段——117 年里身份反复被定为异端又正统，但画脸的那只手 5 代没停。你会怎么评价「身份」跟「创作」哪个先定义你、哪个最后留下来？再想一步：你 21 世纪的「秋天」可能有 30-50 年，你打算在你的一个秋天里画什么？',
      expectsRealAnswer: true,
    },
  ],
};

// 默认 export 兼容(给 staging 测试用)

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'emperor-justinian':     emperorJustinianLens,
  'theodora':              theodoraLens,
  'anna-the-iconographer': annaTheIconographerLens,
};

export var defaultLens = 'anna-the-iconographer';
export default lenses[defaultLens].storyboard;
export var meta = {
  topicId: 'byzantine-rise',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  estimatedMinutesPerLens: { 'emperor-justinian': 35, 'theodora': 35, 'anna-the-iconographer': 32 },
};
