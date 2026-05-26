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
    cn: '他是一个 45 岁刚从叔父手里接过东罗马皇位的人,出身巴尔干 Tauresium 一户连拉丁话都说不利索的农民,可 36 岁前就把拉丁、希腊、神学、罗马法读了个遍。这一遍让你坐进他 527 年加冕那天的位置,皇后 Theodora、将军 Belisarius、法学家 Tribonian 都在他身边,他心里同时装着三件事:编一部把罗马一千年法律拢成一套的法典、派人重夺西部把地中海变回「罗马湖」、为君士坦丁堡建一座配得上「罗马帝国」四个字的大教堂,看一个极致 ambitious 的 system-builder 要不要在同一只手里同时端起来。',
    en: 'He is a man of forty-five who has just taken the Eastern Roman throne from his uncle, born to a peasant family in Tauresium in the Balkans whose own father barely spoke Latin properly, yet by thirty-six he had read his way through Latin, Greek, theology, and Roman law. This pass puts you in his seat on the day of his coronation in 527, Empress Theodora at his side, the general Belisarius and the jurist Tribonian at his hand; three projects sit in his head at once, to compile the thousand years of Roman law into a single code, to send men to retake the west and turn the Mediterranean back into a "Roman lake," to raise for Constantinople a cathedral worthy of the four words "Roman Empire," and you watch whether one extremely ambitious system-builder will try to carry all three in the same pair of hands.',
  },
  storyboard: [
    // ═══════════════════════════════════════════════════
    // N1 — HOOK: 482 出生 Tauresium 农民家庭 / 叔父 Justin I 卫队司令 / 36 岁前学习
    // ═══════════════════════════════════════════════════
    {
      id: 'just-n1',
      type: 'narrative',
      content: {
        cn: '482 年, 巴尔干。一个叫 Tauresium 的小村 (今北马其顿境内, Skopje 西南约 20 公里), 一户农民人家, 一个男孩出生。村里人叫他 Petrus Sabbatius — 拉丁语「Peter 的儿子」。这就是我。\n\n我父亲是普通农民, 拉丁语都说不利索。但我有一个叔叔 Justin — 他大约 470 年代离开村子去君士坦丁堡当兵, 一路升到 Excubitors (皇家卫队) 司令。叔叔没儿子, 504 年前后他派人回村把我接到首都, 改名 Justinian, 当作儿子培养。\n\n我从乡下少年变成首都贵公子的那段, 史料没细写。但我后来交出来的工作量说明了一切: 我学拉丁 (这是我母语) + 希腊 (拜占庭朝廷的工作语言) + 神学 (基督教论争是 6 世纪政治核心) + 罗马法 (这后来成为我一生最大工程的种子)。我读过 6 世纪所有能读到的书。\n\n518 年 7 月 9 日, 老皇帝 Anastasius I 死, 没儿子。卫队司令 Justin (我叔叔) 在士兵的拥戴下被推上皇位, 时年 68 岁。我那一年 36 岁, 跟着进宫做 magister militum (军政大臣) — 实际上叔叔基本不识字, 朝政大量靠我。\n\n527 年 4 月 1 日叔叔病重立我为共治皇帝, 4 月 4 日叔叔死, 我正式单独即位。我 45 岁。\n\n这一刻我接手的不是「艺术皇帝」的位置 — 是一座濒危帝国。东罗马虽然 5 世纪没亡, 但西罗马 476 年已经被日耳曼吞掉, 西部那一半 — 意大利、北非、西班牙 — 全在汪达尔、东哥特、西哥特手里 (帝国东西分治的根上溯到 285 年 Diocletian 的 tetrarchy「四帝共治制」 — 2 个 Augustus + 2 个 Caesar 分管 4 块, 我这一代仍是它的远孙)。我心里有一个念头: 把它全部夺回来。\n\n接下来 12 节, 你跟我走 38 年帝位 + 我留下的 1500 年遗产。\n\n你看完会知道为什么我至今争议: 我是 6 世纪世界最 ambitious 的 system-builder 之一, 也是把帝国 over-extend 到崩溃边缘的责任人之一。',
        en: 'The year is 482, the Balkans. A small village called Tauresium — modern North Macedonia, about twenty kilometers southwest of Skopje. A peasant household. A boy is born. The villagers call him Petrus Sabbatius, Latin for "son of Peter." That is me.\n\nMy father is an ordinary peasant who barely speaks Latin properly. But I have an uncle, Justin, who left the village sometime in the 470s to soldier in Constantinople and rose to commander of the Excubitors, the imperial guard. Uncle has no son. Around 504 he sent for me, brought me to the capital, renamed me Justinian, and raised me as his heir.\n\nThe years from country boy to capital aristocrat are thinly recorded. But the work I later produced tells the story. I studied Latin, my native tongue, plus Greek, the working language of the Byzantine court, plus theology, since Christian doctrinal disputes are the core of sixth-century politics, plus Roman law, the seed of the largest project of my life. I read every book a sixth-century man could read.\n\nOn 9 July 518, the old emperor Anastasius I died without a son. The army acclaimed Uncle Justin emperor at the age of sixty-eight. I was thirty-six. I entered the palace as magister militum, master of soldiers — and since Uncle was barely literate, much of the actual work of governing fell to me.\n\nOn 1 April 527 Uncle, very ill, named me co-emperor. He died three days later. I took the throne in my own name. I was forty-five.\n\nIn this moment, I am not inheriting the seat of an art-loving emperor. I am inheriting a half-empire. The west — Italy, North Africa, Spain — fell to the Vandals, Ostrogoths, and Visigoths after Rome ended in 476. (The east-west split traces back to 285 and Diocletian\'s tetrarchy — "rule of four," two Augusti plus two Caesars dividing the empire into four zones; my generation is its distant heir.) One thought sits at the center of my mind: take it all back.\n\nOver the next twelve sections you will walk thirty-eight years on the throne with me, and the fifteen hundred years of legacy that followed.\n\nBy the end you will know why I am still debated. I am one of the most ambitious system-builders the sixth-century world produced, and also one of the men most responsible for over-extending an empire to the edge of collapse.',
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
        cn: '527 年 4 月 1 日叔叔立我为共治, 4 月 4 日叔叔死。同一年, 我跟 Theodora 一起加冕。\n\n关于 Theodora 你 21 世纪听过的版本大概是这样: 「演员皇后」, 「赛马场熊看守的女儿」, 「年轻时是哑剧演员」。这些说法主要来自一本书 — Procopius 的《秘史》 (Secret History)。Procopius 是我朝廷的官方史官, 跟我和 Belisarius 一起出过征, 公开发表过《战争史》 (The Wars) 和《建筑史》 (The Buildings) 都是颂扬版。但他私下写了第三本《秘史》, 死后才被发现, 内容把我和 Theodora 骂得很难听。\n\n这本《秘史》是 21 世纪反 Whig 钢筋必须强调的: 它是一本党派攻击文本 (partisan polemic), 不是中立史料。Averil Cameron 1985 年那本 Procopius and the Sixth Century 已经把这个说清楚 — 你读《秘史》时要扣掉 Procopius 自己的政治立场。\n\n但 Theodora 出身底层是真的。她父亲 Acacius 是赛马场 (Hippodrome) 的熊看守。她年轻时确实在哑剧院演过 — 拜占庭哑剧不是高雅艺术, 接近脱衣舞 + 滑稽戏。523 年法律改了: 原本禁止贵族娶演员, 新法允许「悔改的演员」嫁贵族 — 这条法专门为她改。525 年我们结婚。\n\n她不是「皇帝身后的女人」。她是我共治的另一极。她在皇宫里有自己的接待大厅、自己的官员、自己的政策。她的影响接下来你会看到 — 532 Nika 那天她救了我; 535 年她推动保护妓女的法律; 整个朝代她庇护 Monophysite (一性论) 派, 跟我官方反一性论的立场相左。\n\n这一刻 527 年我加冕, 心里的图景: 我有 Theodora、我有 Belisarius (我朝最强将军, 当时 27 岁)、我有 Tribonian (我朝最强法学家)、我有一个 38 年皇帝任期的全部时间。我要做三件事: 法典 + 重夺地中海 + 一座配得上「罗马帝国」四个字的大教堂。\n\n我那时候 45 岁。我以为我有 30 年。我也确实有 38 年。',
        en: 'On 1 April 527 Uncle named me co-emperor. He died on 4 April. That same year Theodora and I were crowned together.\n\nThe twenty-first-century version of Theodora you may have heard is this: actress empress, daughter of a Hippodrome bear-keeper, mime performer in her youth. These descriptions come mostly from one book — the Secret History by Procopius. Procopius was the official historian of my court. He campaigned with me and with Belisarius, and the works he published in public, the Wars and the Buildings, are both flattering. But he wrote a third book privately, the Secret History, only discovered after his death, in which he tears Theodora and me apart.\n\nFor a twenty-first-century anti-Whig reading the warning is essential. The Secret History is a partisan polemic, not a neutral source. Averil Cameron, Procopius and the Sixth Century, 1985, already made the case clear — when you read it, you must subtract Procopius own political position.\n\nThat Theodora rose from the bottom is true. Her father Acacius was a bear-keeper at the Hippodrome. She did work in the mime theater as a young woman, and Byzantine mime is not high art; it is closer to striptease and slapstick. In 523 the law was changed. The old rule, that nobles could not marry actresses, was rewritten so that "repentant actresses" could marry into the aristocracy — written for her. We were married in 525.\n\nShe is not "the woman behind the emperor." She is the other pole of a co-rule. She has her own reception hall in the palace, her own officials, her own policy track. Her impact will return in this lens. In 532 she saves me at Nika. In 535 she pushes through legislation protecting prostitutes. Throughout the reign she shelters Monophysite bishops, against my own official anti-Monophysite line.\n\nIn this moment of 527 I am crowned, and the picture in my head is clear. I have Theodora. I have Belisarius, the strongest general of my reign, who is twenty-seven. I have Tribonian, the strongest jurist of my reign. And I have, ahead of me, the full term of a thirty-eight-year emperorship. Three projects: the law code, the reconquest of the Mediterranean, and a cathedral worthy of the four words "Roman Empire."\n\nI am forty-five. I think I have thirty years. As it turns out, I have thirty-eight.',
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
        cn: '528 年 2 月, 即位 10 个月, 我做的第一件大事不是打仗 — 是修法。\n\n我派 Tribonian 主持。Tribonian 是 6 世纪最了不起的法学家之一, 出身小亚细亚 Side, 当过 quaestor sacri palatii (皇宫司法长官)。我给他一个任务: 整理罗马 1000 年来积累下的所有法律, 去重复、去矛盾、按主题分类, 编成一套学生能学、法官能用、皇帝能颁的体系。\n\n他用了 6 年。\n\n528-529 编《法典》(Codex Justinianus) — 收皇帝敕令, 把 Hadrian 以来近 400 年的皇帝命令整理成 12 卷。\n\n530-533 编《学说汇纂》(Digesta / Pandects) — 这是最难的部分。罗马 1000 年里 39 位最重要法学家写过的全部著作 (大约 200 万字), Tribonian 带 16 位法学家筛选 + 删 + 按主题重排, 压成 50 卷 100 万字。\n\n533 编《法学阶梯》(Institutiones) — 4 卷的法学院教科书, 给学生用的。\n\n后来 534-565 我陆续颁布的新敕令叫《新律》(Novellae Constitutiones), 4 部合起来叫 Corpus Juris Civilis (民法大全)。\n\n这本书 6 世纪在君士坦丁堡颁行, 然后随帝国一起进入「中世纪沉睡期」。但 11 世纪意大利 Bologna 大学重新发掘出《学说汇纂》原稿 (现存 Florence, 叫 Florentine 抄本) — 大陆法系 (civil law) 从这里被重启。\n\n21 世纪你的法律还在用。法国 1804 年《拿破仑法典》直接以《查士丁尼法典》为骨架; 德国《民法典》(BGB, 1900)、意大利《民法典》(1942)、日本《民法》(明治 1898) 都是。21 世纪全球约一半司法体系用大陆法系, 都是我那 6 年工程的远孙。\n\n这一刻 533 年, 我 51 岁。我以为我做的是「整理罗马法律」。我不知道我做的是「人类历史上影响最深的法律典籍」 — 比《罗马十二铜表法》深, 比《唐律疏议》传得远, 比英国普通法早 700 年。\n\n— 我也不知道, 同一年, 我已经派 Belisarius 出征了。',
        en: 'February 528, ten months into the throne, my first major project is not a war. It is the law.\n\nI placed Tribonian in charge. Tribonian, born in Side in Asia Minor, was the most formidable jurist of the sixth century. He had served as quaestor sacri palatii, the chief legal officer of the palace. I gave him one assignment: take a thousand years of accumulated Roman law, strip the duplications, settle the contradictions, organize the result into a system that students can learn, judges can apply, and the emperor can promulgate.\n\nIt took him six years.\n\nFrom 528 to 529, the Codex Justinianus, the imperial constitutions of Hadrian onward, organized into twelve books.\n\nFrom 530 to 533, the Digesta, also known as the Pandects, and this was the hardest piece. Across a thousand years of Roman legal writing, thirty-nine major jurists had produced roughly two million words. Tribonian and his sixteen-jurist commission selected, cut, and re-organized that mass into fifty books of about a million words.\n\nIn 533, the Institutiones, a four-book law-school primer.\n\nMy own later constitutions from 534 to 565 were collected as the Novellae. Together the four parts are called Corpus Juris Civilis, the body of civil law.\n\nThe book was promulgated in Constantinople in the sixth century and then disappeared into the medieval slumber along with the empire. But in the eleventh century, the law school at Bologna rediscovered the Digesta in a manuscript that survives in Florence as the Florentine codex. Continental civil law was relaunched from there.\n\nIn the twenty-first century your legal system is still using it. The Napoleonic Code of 1804 took the Corpus Juris as its skeleton. The German BGB (1900), the Italian Civil Code (1942), the Japanese Meiji Civil Code (1898) all descend from the same line. Roughly half of jurisdictions today use civil law in some form. All are distant grandchildren of those six years of work.\n\nIn this moment, 533, I am fifty-one. I think I am tidying up Roman law. I do not know that I am producing the most influential law book in human history. It runs deeper than the Roman Twelve Tables, travels further than the Tang Code, and predates English common law by seven hundred years.\n\nAnd I also do not know that, in this same year, I have already sent Belisarius to war.',
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
        cn: '532 年 1 月 13 日, 君士坦丁堡赛马场 (Hippodrome)。我即位 4 年 9 个月。\n\n你需要先懂赛马场政治。Hippodrome 是 6 万人体育场, 紧贴皇宫, 跟我后来要建的 Hagia Sophia 只隔一堵墙。城里观众分 4 党: 蓝党 (Blues)、绿党 (Greens)、白党 (Whites)、红党 (Reds)。6 世纪白红已并入蓝绿, 实际只剩 2 派。两派平时互相打, 但 532 年 1 月 13 日他们做了 6 世纪罕见的事 — 联合反我。\n\n起因琐碎: 1 月 10 日两派的暴徒被市长 Eudaemon 判绞刑, 行刑时绳子断了 2 个 (1 蓝 1 绿) 落地没死。教士想救他们, 我没批。两党都恨我。\n\n1 月 13 日赛车日, 在赛马场两党齐喊 「Nika! Nika!」 (希腊语「胜利」, 这是赛车口号, 现在变成造反口号)。当晚他们冲出赛马场放火 — 烧元老院、烧市长府、烧 Hagia Sophia 老教堂 (Theodosius II 那座, 415 年建的, 这一晚化为灰烬)。\n\n1 月 13 至 17 日, 5 天里他们烧了城中心一半。1 月 18 日他们要立新皇帝 (Hypatius, 老皇帝 Anastasius 的侄子)。\n\n1 月 18 日那天我在皇宫里召集朝会。我说: 「上船吧, 走海路。」我准备弃城逃亡。\n\n那天朝会上 Theodora 站起来, 她说: 「我接受古人格言 — 紫袍是好寿衣 (porphyry is a fine shroud)。」紫袍 (porphyra) 是拜占庭皇帝专用紫色, 她的意思是「我宁可死着穿皇袍, 也不活着流亡」。\n\n我留下了。\n\n那天傍晚 Belisarius 和另一将军 Mundus 把暴民围在赛马场封闭空间内。屠杀。30,000 人死。这个数字 21 世纪学界 (Cameron 1976 等) 提醒: 屠杀规模没争议, 但要 careful framing — 这是封闭场地里的镇压屠杀, 不是战场死亡, 死的大部分是平民。\n\nNika 之后我做了一件事: 烧掉的 Hagia Sophia 老教堂, 我决定重建。不修复 — 重建。建一座 6 世纪世界从未见过的。\n\n这一刻 532 年 1 月 18 日傍晚, 我坐在皇宫里, 城外还在烧, 我心里在画一个圆顶的草图。',
        en: '13 January 532, the Hippodrome of Constantinople. Four years and nine months into my reign.\n\nYou need to understand Hippodrome politics first. The Hippodrome is a sixty-thousand-seat stadium, sharing a wall with the imperial palace and only a wall away from the Hagia Sophia I will later build. The city is divided into four factions — Blues, Greens, Whites, Reds. By the sixth century the Whites have merged into the Blues and the Reds into the Greens, leaving two factions. They normally fight each other. But on 13 January 532 they did something rare for the sixth century: they joined forces against me.\n\nThe spark was small. On 10 January, the city prefect Eudaemon hanged some faction toughs. Two ropes broke, one Blue and one Green, both men landed alive. Monks tried to save them; I refused. Both factions now hated me.\n\nAt the chariot races on 13 January the two factions chanted together, "Nika, Nika," Greek for "Victory," the racing chant now turned into a revolt cry. That night they poured out of the stadium and set fires — the Senate house, the prefect office, the old Hagia Sophia of Theodosius II built in 415, all burned to the ground.\n\nFor five days from the 13th to the 17th, they burned half the city center. On 18 January they prepared to crown a new emperor, Hypatius, the nephew of the previous emperor Anastasius.\n\nThat day in the palace I called the council. I said, "To the ships. We leave by sea." I was ready to abandon the city.\n\nIn that meeting Theodora rose. She said, "I accept the ancient saying — porphyry is a fine shroud." Porphyra, the imperial purple, is the color reserved for emperors. Her meaning was unmistakable: I would rather die in the purple than live in exile.\n\nI stayed.\n\nThat evening Belisarius and another general, Mundus, sealed the rioters inside the Hippodrome and killed them. Thirty thousand died. The number itself is not contested in the twenty-first-century scholarship; what Averil Cameron and others (1976) ask us to frame carefully is what kind of death this was. It was a massacre of civilians in an enclosed space, not battlefield combat.\n\nAfter Nika I decided one thing. The burned old Hagia Sophia would not be repaired. It would be replaced. With something the sixth-century world had never seen.\n\nIn this moment, the evening of 18 January 532, the city is still burning outside, and I am sitting in the palace sketching the curve of a dome in my head.',
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
        cn: '537 年 12 月 27 日, 君士坦丁堡, Hagia Sophia (希腊语「神圣智慧」)。我 55 岁。537 年 12 月 27 日完工 (Nika 后约 6 年)。\n\n我请的不是建筑师, 是两个数学家: Anthemius of Tralles (出身今土耳其 Aydin, 几何学家, 同时研究镜子和燃烧装置) + Isidore of Miletus (希腊数学家, 编过 Archimedes 著作)。我要的不是修复一座教堂, 是 6 世纪世界从未见过的工程。\n\n他们交给我的方案是这样: 一个 31 米直径的中央大圆顶, 离地 56 米。难点在于 — 一个圆顶要怎么放在一个方形底座上?\n\n他们的解法叫 pendentive (帆拱) — 4 个球面三角形, 每个三角形的曲面把方形墙顶过渡成圆顶底环。这是建筑史上第一次大规模成功使用 pendentive 解法。这个解法 21 世纪所有 dome (穹顶) 建筑都还在用。\n\n12 月 27 日我走进堂中央。圆顶上密密麻麻 40 个窗户, 阳光从顶上射下来, 地上的人感觉圆顶不是被支撑的 — 是悬在半空。相传我那天说了一句(这句出自后世口传记载, 不见于 Procopius 等 6 世纪同代史官原文): 「Solomon, I have surpassed thee. (所罗门, 我超过你了。)」 比喻《圣经》里 Solomon 王修的耶路撒冷圣殿。\n\n这句话不只是吹牛。它有事实底座: 31 米直径的 Hagia Sophia 圆顶, 是 6 世纪世界最大的, 之后 1000 年没人超过。直到 1436 年 Brunelleschi 在 Florence 修 Duomo (圣母百花大教堂) 圆顶 — 43 米 — 才超过它。1000 年。\n\n但我也要老实告诉你: 558 年 5 月 7 日, 一场地震把圆顶东半震塌。我那时候 76 岁。我拒绝原工程师 Isidore 的孙侄 (称 Isidore the Younger) 的第一个修复方案; 后来损坏继续, 我才让他重建。新圆顶比原来高 6.25 米, 更陡更稳。\n\n这座圆顶 1500 年走过 5 重身份: 537-1204 东正教大教堂 (1054 East-West Schism 大分裂在它的圣坛上发生 — 神学起因之一是 Filioque「圣灵从父和子发出」西方加词, 东方反对); 1204-1261 第四次十字军把它变成天主教堂; 1261-1453 又改回东正教; 1453 年 5 月 29 日 Mehmed II 攻陷君士坦丁堡, 改清真寺到 1934; 1934-2020 博物馆; 2020 Erdogan 改回清真寺。\n\n这一刻 537 年 12 月 27 日, 我站在圆顶下不知道这些。我只知道我做了一件 1000 年没人能比的事。',
        en: '27 December 537, Constantinople, Hagia Sophia, Greek for "Holy Wisdom." I am fifty-five. The work is finished on 27 December 537 — about six years after Nika.\n\nI did not hire architects. I hired two mathematicians. Anthemius of Tralles, born in modern Aydin, Turkey, a geometer who also studied mirrors and burning devices. And Isidore of Miletus, a Greek mathematician who had compiled the works of Archimedes. I did not want a repaired church. I wanted a structure the sixth-century world had never seen.\n\nThe scheme they gave me was this. A central dome of thirty-one meters in diameter, fifty-six meters above the floor. The hardest part of the problem was simple to state: how do you place a circular dome on a square base?\n\nTheir answer was the pendentive — four spherical-triangle vaults that transition the square wall-tops into the round dome-base. The Hagia Sophia is the first large-scale successful use of the pendentive in architectural history. Every dome built since uses some version of the same solution.\n\nOn 27 December I walked into the nave. Forty windows ringed the base of the dome; sunlight streamed down from above; the dome did not feel supported, it felt suspended. I am said to have declared (this line comes from later tradition, not found in Procopius or other 6th-century contemporary historians): "Solomon, I have surpassed thee," a reference to the Solomon of the Bible who built the temple in Jerusalem.\n\nThe line is not only a boast. It has a factual basis. The thirty-one-meter Hagia Sophia dome was the largest in the sixth-century world, and it held that record for the next thousand years. Only in 1436, when Brunelleschi finished the dome of the Florence Duomo at forty-three meters, was it surpassed. A thousand years.\n\nBut I owe you the rest of the truth. On 7 May 558, an earthquake collapsed the eastern half of the dome. I was seventy-six. I refused the first repair plan from Isidore the Younger, the original engineer’s grandnephew; only when further damage made repair unavoidable did I let him rebuild. The new dome rose 6.25 meters higher than the original — steeper, and more stable.\n\nThis dome has carried five identities across fifteen hundred years. From 537 to 1204, an Eastern Orthodox cathedral, where the East-West Schism happened on its altar in 1054 — one theological cause being the Filioque ("from the Father and the Son"), a phrase the West added to the creed about the Holy Spirit, which the East rejected. From 1204 to 1261, a Catholic church under the Fourth Crusade Latin Empire. From 1261 to 1453, Orthodox again. On 29 May 1453, Mehmed II takes Constantinople and turns it into a mosque, until 1934. From 1934 to 2020, a museum. In 2020, Erdogan converts it back to a mosque.\n\nIn this moment of 27 December 537, I am standing under the dome, knowing none of that. I only know I have built something no one will match for a thousand years.',
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
        cn: '533 年 6 月, 我派 Belisarius 出征。他 33 岁。任务: 渡地中海, 灭北非的汪达尔王国 (Vandals, 一个日耳曼部族, 5 世纪从西班牙渡海占据迦太基)。\n\n9 月 13-15 日 Ad Decimum 之战, 12 月 15 日 Tricamarum 之战 — 6 个月之内 Belisarius 就把汪达尔王 Gelimer 打降, 占领迦太基 (今突尼斯)。北非 100 年丢失, 我夺回了。\n\n535 年我让他打意大利。意大利在东哥特王国 (Ostrogoths) 手里, 他们 493 年灭了 Odoacer 政权 (就是 476 年废西罗马最后一位皇帝那个), 自此占住罗马城本身。\n\n535-540 第一次哥特战争: Belisarius 攻陷 Ravenna (东哥特首都) 540 年, 把哥特王 Witigis 押回君士坦丁堡。看起来意大利收回来了。\n\n但东哥特人 541 年立新王 Totila 反扑。541-553 第二次哥特战争, 罗马城在 18 年里 5 次易手 (Belisarius 守过, 又丢过, 又夺回; 城里人口从战前 50 万掉到 战后 3 万)。\n\n552 年我换将军, 派太监 Narses 率 35,000 人决战, 7 月 Taginae 之战大胜, Totila 战死。554 年 Narses 彻底平定意大利。同一年 Pragmatic Sanction (实用敕令) 把意大利重新纳入帝国行政。\n\n552 年我顺手让 Liberius 将军在西班牙南部沿海 (Cartagena 一带) 占了一条狭长地带, 叫 Spania 行省。\n\n地中海三分之二岸线重回罗马 (Mediterranean as Roman lake — 一时的)。我 72 岁。\n\n但代价: 21 年战争 (533-554)。意大利被打成废墟 — 罗马城人口剩 3 万 (战前 50 万)。帝国财政耗尽 — 为筹军费税加到农民负担不起的程度。军队精疲力尽。\n\n21 世纪你看 6 世纪地图会以为这是一次成功。但你看 7 世纪初的地图: Lombards (伦巴第人) 568 年 (我死后 3 年) 入侵意大利, 我夺回的大部分意大利北部 1 代人内丢回去。北非和西班牙南部撑得久一点 — 但都在 7 世纪末被阿拉伯崛起 (我死后 70 年) 全部夺去。\n\n这一刻 554 年, 我心里满意。我不知道 14 年后我留下的地盘开始烟消。\n\n— 这是 system-builder 的 over-extension: 你建出的最广边界 = 你死后崩坏最快的地方。',
        en: 'June 533, I sent Belisarius to war. He was thirty-three. The mission: cross the Mediterranean and destroy the Vandal Kingdom in North Africa, a Germanic people who had crossed from Spain in the fifth century to seize Carthage.\n\nThe battles of Ad Decimum on 13-15 September and Tricamarum on 15 December — within six months Belisarius had defeated the Vandal king Gelimer and taken Carthage in modern Tunisia. North Africa, lost for a century, was mine again.\n\nIn 535 I sent him to Italy. Italy was held by the Ostrogoths, who had killed Odoacer in 493 — Odoacer being the man who deposed the last Western Roman emperor in 476. The Ostrogoths held Rome itself.\n\nThe First Gothic War, 535-540: Belisarius took Ravenna, the Ostrogothic capital, in 540, and sent King Witigis back to Constantinople in chains. Italy looked recovered.\n\nThen in 541 the Ostrogoths crowned a new king, Totila, who counter-attacked. The Second Gothic War, 541-553, saw the city of Rome change hands five times in eighteen years. Belisarius held it, lost it, took it back. The civilian population fell from roughly half a million before the war to about thirty thousand after.\n\nIn 552 I changed generals. I sent the eunuch Narses with thirty-five thousand men. The battle of Taginae in July was a decisive victory; Totila died on the field. By 554 Narses had pacified Italy. The Pragmatic Sanction of that same year folded Italy back into imperial administration.\n\nAlso in 552 I had the general Liberius take a coastal strip of southern Spain around Cartagena, which became the province of Spania.\n\nTwo-thirds of the Mediterranean coast was Roman again. The "Mediterranean as a Roman lake," at least for a moment. I was seventy-two.\n\nThe price: twenty-one years of war from 533 to 554. Italy was ruined — the city of Rome reduced from half a million to thirty thousand. The treasury was exhausted. Taxes climbed past what peasants could carry. The army was bled dry.\n\nIn the twenty-first century you may look at a sixth-century map and call this a success. Now look at the early seventh-century map. The Lombards invaded Italy in 568, three years after my death, and most of the Italian north I had retaken slipped away within a generation. North Africa and southern Spain held a little longer — and then both fell to the Arab rise of the late seventh century, seventy years after my death.\n\nIn this moment, 554, I am satisfied. I do not know that within fourteen years the largest borders I produced will start to evaporate.\n\nThis is the over-extension of a system-builder. The widest boundary you reach is the place that collapses fastest after you die.',
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
        cn: '542 年春, 君士坦丁堡。瘟疫从埃及沿尼罗河一路北上, 通过亚历山大港和黎凡特海运扩散, 春天到首都。\n\n这是史上第一次有详细文献记录的腺鼠疫 (bubonic plague) 全球大流行 (Yersinia pestis 杆菌, 21 世纪通过古 DNA 测序确认)。同代史官 Procopius《战争史》第 2 卷描写: 「君士坦丁堡每天死 5,000 至 10,000 人, 街上尸体堆到没人收, 我命令把尸体倒进 Galata 城墙外的塔里。」\n\n我自己 542 年夏天也染了。脖子腋下淋巴结肿成鸡蛋大 (典型腺鼠疫症状)。我躺床上几周, Theodora 在朝廷主持。所有人以为我死了, 朝廷开始讨论继位。我活下来了。但那一年之后, 史料记录我变得偏执 + 关门 + 加税 + 不见大臣。\n\n死亡率有大争议。同代 Procopius / Evagrius 给出帝国人口 25-50% 死亡的数字 — 这个数字 19-20 世纪一直被沿用 (Allen 2007 等仍然采纳)。\n\n但 21 世纪修正来了。Mordechai 等人 2019 年发表在 PNAS (《美国国家科学院院刊》) 的论文 The Justinianic Plague: An Inconsequential Pandemic? 综合考古证据 (没找到大规模乱葬坑)、钱币流通、莎草纸记录、古 DNA — 论证真实死亡率显著低于 25%, 可能是某些区域 (君士坦丁堡 + 埃及 + 黎凡特沿岸) 重创, 但帝国整体的影响小于 Procopius 描写。\n\n21 世纪的史学共识仍在形成中。但「鼠疫死帝国 1/3」这个数字 — 21 世纪你不能直接重复, 要加 source-criticism (Procopius vs Mordechai 两边的证据各看)。这是 AP DBQ 训练的核心。\n\n但有一点没争议: 542 之后帝国的能量 visibly 下降。税基受损, 农业减产, 军队补员困难。我夺回的意大利和北非在我死后撑不住, 跟 542 鼠疫的长期效应分不开。\n\n这一刻 542 年夏, 我躺在皇宫里发烧, 脖子肿得说不出话。Theodora 守在床边。她不知道她还有 6 年。我也不知道我还有 23 年。\n\n— 542 年的我体会到一件事: 我能编法典、能修圆顶、能重夺地中海, 但我不能跟一个看不见的细菌讨价还价。',
        en: 'Spring 542, Constantinople. The plague had moved up the Nile from Egypt, spread by Alexandrian and Levantine sea-shipping, and reached the capital that spring.\n\nThis is the first well-documented bubonic plague pandemic — Yersinia pestis, confirmed in the twenty-first century by ancient-DNA sequencing. The court historian Procopius, in Book Two of the Wars, writes: "Five thousand to ten thousand died in Constantinople each day; bodies piled in the streets and no one came; I ordered them dumped into the towers in the Galata wall outside the city."\n\nI caught it myself in the summer of 542. Lymph nodes in the neck and armpits swollen to the size of eggs — the classic bubonic presentation. I lay in bed for weeks. Theodora ran the court. Everyone thought I was dead; the succession was being debated. I survived. But the historical record after that summer shows me growing paranoid, withdrawn, raising taxes, refusing to see ministers.\n\nThe death toll is sharply contested. Contemporary writers Procopius and Evagrius gave 25 to 50 percent of empire population, and this figure was carried into nineteenth- and twentieth-century scholarship (still cited in Allen 2007 and elsewhere).\n\nBut the twenty-first-century revision arrived. Mordechai et al., 2019, in PNAS, Proceedings of the National Academy of Sciences — the paper titled The Justinianic Plague: An Inconsequential Pandemic? — combined archaeological evidence (no mass burial pits found), coin circulation, papyrus records, and ancient DNA. They argued the real mortality was substantially lower than 25 percent — possibly severe in specific regions (Constantinople, Egypt, the Levantine coast) but milder for the empire as a whole.\n\nThe twenty-first-century scholarly consensus is still forming. But the figure "the plague killed one-third of the empire" cannot be repeated without source-criticism — you have to look at both Procopius and Mordechai. That habit is the core of AP DBQ training.\n\nOne thing is not contested: after 542 the empire’s energy visibly fell. The tax base was damaged, agricultural output declined, military recruitment struggled. The reconquered Italy and North Africa could not hold after my death, and the long shadow of 542 is part of the reason.\n\nIn this moment, summer 542, I am in bed with fever, my neck so swollen I cannot speak. Theodora is at my side. She does not know she has six years left. I do not know I have twenty-three.\n\nWhat I learn from 542 is one thing. I can compile a code, I can build a dome, I can retake the Mediterranean — but I cannot negotiate with a bacterium I cannot see.',
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
        cn: '542 年我从鼠疫里活下来。但接下来 23 年, 一件件失去。\n\n542 鼠疫之后, Tribonian (我那个 6 年编出 Corpus Juris 的法学家) 大约 542-546 年间死。具体哪一年史料不详, 但 542 之后的《新律》(Novellae) 起草人换了 — 不是 Tribonian 的笔迹了。\n\n548 年 6 月 28 日, Theodora 死。她 48 岁, 死于癌症 (具体病种史料不详, 6 世纪原始史料只说「癌」泛指; 后世有乳腺癌、子宫癌等推测)。这是我一生最大的失重。\n\n历史学家 J.A.S. Evans 1996 年那本 The Empress Theodora: Partner of Justinian 提了一个观察: 548 年之后我再没大动作。542 之前我连续 15 年高速产出 (法典、Hagia Sophia、北非、意大利、Spania); 542-548 这 6 年靠 Theodora 撑; 548 之后我 17 年基本是「守业 + 神学 + 防御」。Evans 认为 Theodora 死后我失去战略锐度。\n\nBelisarius — 我朝最强将军 — 542 之后他失宠了。548 我撤了他意大利指挥权 (理由是花费太大)。562 年朝廷有人弹劾他参与谋反阴谋, 我把他关起来; 后来证清白, 释放, 但官位没还。Belisarius 565 年 3 月死, 比我早 8 个月。Procopius《秘史》里有一个出处不明的故事说他晚年瞎了讨饭 — 这是 partisan polemic, 21 世纪学界 (Cameron 1985) 否定这个说法。但他确实死前没复职。\n\n后期我变得 reclusive (闭门), 把时间花在神学论争上。我亲自卷入一性论 (Monophysitism) vs 两性论 (Dyophysitism) 的辩论, 写文章、办主教大会, 但越办越分裂 (东方教会 553 年第二次君士坦丁堡公会议, 没真平息分歧)。皇帝直接管教会神学 — 这就是 Caesaropapism (皇教合一, 拜占庭独有政体, 跟西方 papal 独立形成对照)。\n\n税越加越重。我的继任者 (侄子 Justin II, 565 即位) 第一份诏书就是承认「先帝积怨已多」, 减税赦免一些罪犯 — 用这个手段缓和民意。\n\n565 年 11 月 14 日, 我死在皇宫。83 岁。没指定继承人。侄子 Justin II 在朝臣推举下继位。\n\n这一刻我一生工作的清单: 1 部法典 (传 1500 年)、1 座圆顶 (传 1500 年)、地中海重夺 (3 年内开始崩坏)、人口减半的意大利、税基耗尽的帝国、一个失去战略锐度的最后 17 年。\n\n两边都是真。',
        en: 'I survived the plague in 542. But over the next twenty-three years, one piece after another fell away.\n\nAfter the plague, Tribonian, the jurist who had compiled the Corpus Juris in six years, died sometime between 542 and 546. The exact year is not recorded, but the Novellae after 542 are no longer in his hand.\n\nOn 28 June 548 Theodora died. She was forty-eight; the cause was cancer — the specific type is unknown, as the 6th-century sources say only "cancer," while later scholars have speculated breast or uterine cancer. This was the greatest loss of my life.\n\nThe historian J.A.S. Evans, in The Empress Theodora: Partner of Justinian (1996), notes that after 548 I produced no more major projects. Before 542 I had run fifteen years of high-speed output — code, dome, North Africa, Italy, Spania. From 542 to 548 Theodora held things up. After 548 I spent the remaining seventeen years on defense, theology, and consolidation. Evans argues that Theodora’s death cost me strategic edge.\n\nBelisarius, the strongest general of my reign, fell out of favor after 542. In 548 I removed his Italian command (officially for excess spending). In 562 he was accused of involvement in an assassination plot; I imprisoned him, later cleared him, freed him, but did not restore his office. Belisarius died in March 565, eight months before me. The Secret History story that he ended his life as a blind beggar is a partisan tale of uncertain origin, rejected by twenty-first-century scholarship (Cameron 1985); but it is true that he was never reinstated.\n\nIn my late years I withdrew. I spent the time on theology — Monophysite versus Dyophysite christology, council after council, the Second Council of Constantinople in 553 — yet the arguments only deepened the divide between the eastern and western churches. An emperor running church doctrine directly — this is Caesaropapism (caesar-as-pope), Byzantium\'s distinctive arrangement, in contrast to the West\'s papal independence.\n\nTaxes climbed. My successor, my nephew Justin II, who took the throne in 565, opened his first edict by acknowledging "the people’s grievances accumulated under the late emperor," cut some taxes, and amnestied prisoners — to ease the public mood.\n\nOn 14 November 565 I died in the palace. Eighty-three years old. I had named no successor. Justin II was acclaimed by the court.\n\nIn this moment, the inventory of my life’s work reads: one law code (lasting fifteen hundred years), one dome (lasting fifteen hundred years), a Mediterranean reconquest beginning to collapse within three years, an Italy halved in population, an empire stripped of tax base, and a final seventeen years that lost their strategic edge.\n\nBoth halves are true.',
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
        cn: '565 年 11 月 14 日我死。继位的是侄子 Justin II。接下来 30 年, 你看到我留下的盘子怎么走的。\n\n568 年 (我死后 3 年), Lombards (伦巴第人, 一个日耳曼部族) 从多瑙河南下, 入侵意大利。他们花了 6-7 年占领北部 + 中部大部分。我费 19 年战争重夺的意大利北部, 一代人内丢失。Ravenna 这一片帝国还守着 — 但叫 Exarchate of Ravenna (拉文纳总督区), 是一块被 Lombards 包围的狭长地带, 跟我夺回时的「整个意大利」不可比。\n\n572 Justin II 跟波斯萨珊帝国 (Sasanian) 开战 — 这场战又把我留下的本就薄的财政推向崩溃。577 Justin II 精神病发作, Tiberius II 摄政; 578-582 Tiberius II 在位; 582-602 Maurice 即位。\n\n东边: 590 Maurice 跟波斯订和约, 短暂喘息。但 602 年军队叛变, Maurice 被杀, Phocas 篡位。Phocas 在位 8 年 (602-610) 把帝国进一步推向危机。\n\n610 年, 北非 Carthage 总督的儿子 Heraclius 起兵, 推翻 Phocas, 即位。Heraclius (610-641) 重整帝国 — 改组军区 (theme system)、把官方语言从拉丁改希腊、跟波斯打 26 年最后大胜 (628)。\n\n但 Heraclius 大胜的那一刻, 一个新对手在阿拉伯沙漠正崛起。632 年穆罕默德死, 阿拉伯穆斯林军 7 世纪 30-40 年代席卷过来: 636 Yarmouk 之战拜占庭大败, 失叙利亚 + 巴勒斯坦; 642 失埃及; 698 失迦太基 (我夺回那块北非)。\n\n所以你看 — 我 533-554 重夺的地盘, 7 世纪末几乎全丢: 意大利北部 568 (Lombards), 北非 698 (阿拉伯), 西班牙南部 624 (Visigoths 重夺)。\n\n但你看「能传下来的是什么」: 一个核心 — 君士坦丁堡 + 巴尔干 + 小亚细亚 — 撑过来了。它再撑 800 年到 1453。Hagia Sophia 还在原地。Corpus Juris 11 世纪 Bologna 重发掘后传遍欧洲。\n\n我留下的不是边界 — 是机构 + 文物 + 法典。\n\n这是 system-builder 的悖论: 你想留的边界先丢, 你随手做的工程留 1500 年。\n\n你 21 世纪很难评我。你说我是「重建罗马的伟人」, 7 世纪末看不通; 你说我是「过度扩张的失败者」, 1500 年还在用我的法典又解释不了。两边都是真。',
        en: 'I died on 14 November 565. My nephew Justin II took the throne. Over the next thirty years, you can watch what happened to the inheritance.\n\nIn 568, three years after my death, the Lombards, a Germanic people, came south from the Danube and invaded Italy. Within six or seven years they held most of the north and center. The northern Italy I had bled nineteen years to recover was lost in a generation. Ravenna survived as an imperial enclave called the Exarchate of Ravenna, but it was a narrow strip surrounded by Lombards — nothing like "all Italy."\n\nIn 572 Justin II reopened war with Sasanian Persia, which pushed the already thin treasury I had left him toward collapse. In 577 Justin II suffered a breakdown; Tiberius II ruled as regent and then emperor (578-582). Maurice took the throne in 582.\n\nOn the eastern front, in 590 Maurice signed peace with Persia, a brief breathing space. But in 602 the army mutinied, Maurice was killed, and Phocas usurped. Phocas’s eight years (602-610) further destabilized the empire.\n\nIn 610 Heraclius, son of the exarch of Carthage in North Africa, rebelled, took the throne, and reorganized the empire — the theme system of military provinces, the switch of the chancery from Latin to Greek, and a twenty-six-year war with Persia that ended in a decisive victory in 628.\n\nIn the same moment Heraclius won, a new adversary was rising in the Arabian desert. In 632 Muhammad died, and the Arab Muslim armies of the 630s and 640s came in waves. The battle of Yarmouk in 636 broke Byzantium in Syria and Palestine. Egypt fell in 642. Carthage — the North Africa I had retaken — fell in 698.\n\nSo: nearly every territory I retook from 533 to 554 was lost by the end of the seventh century. Northern Italy in 568 to the Lombards, North Africa in 698 to the Arabs, southern Spain in 624 reconquered by the Visigoths.\n\nLook now at what survived. The core — Constantinople, the Balkans, Asia Minor — held. It would hold for another eight hundred years until 1453. Hagia Sophia stood in place. The Corpus Juris was rediscovered at Bologna in the eleventh century and spread across Europe.\n\nWhat I left was not borders. It was institutions, monuments, and a code.\n\nThe paradox of the system-builder: the borders you most wanted are the first to fall, and the works you built in passing last fifteen hundred years.\n\nFrom the twenty-first century I am hard to grade. Call me "the man who rebuilt Rome" — the late seventh century does not back you up. Call me "the over-extender who failed" — the fifteen-hundred-year-old code in your civil law does not back you up either. Both halves are true.',
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
        cn: '走完 38 年帝位 + 死后 30 年余波。现在 30 秒。\n\n两边都站得住。\n\n第一边: 极致 ambitious system-builder。\n\nCorpus Juris Civilis — 6 年里 Tribonian 把 1000 年罗马法压成 4 部, 21 世纪意大利、法国、德国、日本民法骨架。Hagia Sophia 圆顶 — 5 年 11 个月内 Anthemius + Isidore 用 pendentive 解法做出 31 米直径、56 米高、1000 年世界最大的穹顶, 直到 1436 Brunelleschi Florence Duomo 才超。重夺地中海 — 533 北非 + 535-554 意大利 + 552 西班牙南部, 一时让地中海三分之二岸线回归罗马。3 件事任何一件单独拿出来都是「6 世纪世界最大工程」。\n\n第二边: 系统性 overreach。\n\n21 年战争把意大利从 50 万人口的罗马城打到 3 万。532 Nika 我下令把 30,000 平民围在赛马场, 在封闭空间屠杀 (不是战场死亡, 死的大部分是平民)。542 鼠疫之后我加税到农民负担不起 (我后期变偏执 reclusive)。我夺回的地盘我死后 14 年开始丢, 7 世纪末几乎全失。我留给侄子 Justin II 的是一个税基耗尽 + 军队精疲 + 边境崩坏的帝国 — 他第一份诏书就是承认「先帝积怨已多」。\n\n两边都是真。\n\n— 我不是「先建后毁」 — 我是同一个人同时做这两件事。建法典的同一个我, 在 542 之后下加重税的诏书。建 Hagia Sophia 圆顶的同一个我, 派 Belisarius 带 35,000 人在意大利打 18 年战。极致 ambitious 跟系统性 overreach 不是顺序 — 是同体。\n\n21 世纪的你怎么评我?\n\n你可以说: 「Justinian 是 6 世纪最了不起的建设者, 没有他就没有西方法律传统的连续。」 — 这话对。\n\n你可以说: 「Justinian 是 6 世纪最严重的过度扩张, 帝国在他死后 100 年内丢了 70% 地盘。」 — 这话也对。\n\n两个判断不冲突。它们一起描述同一个真实的人。\n\n这是 AP World History DBQ 的核心训练 — hold contradiction for 30 seconds。你不要急着选边。30 秒。\n\n现在你试: 你心里给我打几分?',
        en: 'You have walked thirty-eight years on the throne with me, and the thirty years after. Now thirty seconds.\n\nBoth sides hold.\n\nFirst side: extreme ambitious system-builder.\n\nCorpus Juris Civilis — in six years Tribonian compressed a thousand years of Roman law into four parts, the skeleton of twenty-first-century Italian, French, German, and Japanese civil codes. The Hagia Sophia dome — in five years and eleven months Anthemius and Isidore used the pendentive solution to build a thirty-one-meter, fifty-six-meter-high dome, the largest in the world for a thousand years, until Brunelleschi’s Florence Duomo in 1436. The Mediterranean reconquest — 533 North Africa, 535-554 Italy, 552 southern Spain, two-thirds of the Mediterranean coast Roman again. Any one of the three would be the largest project of the sixth-century world standing alone.\n\nSecond side: systemic overreach.\n\nTwenty-one years of war reduced the city of Rome from half a million inhabitants to thirty thousand. At Nika in 532 I ordered thirty thousand civilians sealed inside the Hippodrome and killed in that enclosed space — not battlefield deaths, mostly civilians. After the plague of 542 I raised taxes past what farmers could carry; my late years grew paranoid and withdrawn. The territories I retook began to slip within fourteen years of my death, and were almost entirely lost by the end of the seventh century. I handed my nephew Justin II an empire with an exhausted treasury, a depleted army, and broken borders. His first edict acknowledged "the late emperor’s accumulated grievances."\n\nBoth halves are true.\n\nI am not "first build, then destroy." I am the same person doing both at once. The Justinian who compiled the code is the Justinian who signed the heavier tax edicts after 542. The Justinian who built the Hagia Sophia dome is the Justinian who sent Belisarius with thirty-five thousand into eighteen years of war in Italy. Extreme ambition and systemic over-reach are not a sequence. They are one body.\n\nIn the twenty-first century, how do you grade me?\n\nYou can say, "Justinian is the most formidable builder of the sixth century; without him there is no continuity in the Western legal tradition." That is correct.\n\nYou can say, "Justinian is the most severe over-extender of the sixth century; within a hundred years of his death the empire lost roughly seventy percent of his reconquest." That is also correct.\n\nThe two judgments do not contradict. Together they describe the same real human being.\n\nThis is the core training of an AP World History DBQ — hold contradiction for thirty seconds. Do not rush to pick a side. Thirty seconds.\n\nNow you try: what score do you give me, in your head?',
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
        cn: '现在把镜头从 6 世纪拉回 21 世纪。\n\n我提一个问题: 你身边有没有这种 leader — 极致才华, 做大事, 留得下机构、产品、作品; 但同时把组织 over-extend 到崩溃边缘, 接班的人接到一摊烂账?\n\n模板各种:\n\n一家公司创始人 — 10 年里建出全球最大的某个东西, 但烧光融资、累垮团队、走的时候组织文化已经撑不住, 接任 CEO 第一年就在裁员收缩。\n\n一个国家领导人 — 任内 GDP 翻倍、基建上来、国际声誉到顶, 但财政赤字到下任不得不大幅加税, 边境因为对外强硬留下未解决冲突。\n\n一个学校的校长 — 把学校升到全市第一, 老师精疲力尽离职率高, 学生考试压力被家长投诉到教育局, 接任校长第一件事是给老师减负。\n\n一个家庭的父亲或母亲 — 为孩子提供最好的教育、最好的资源、最高的期待, 但孩子青春期开始反抗, 关系破裂多年才修。\n\n这些都是 6 世纪 Justinian 的 21 世纪版本。\n\n问题不是「他们好或坏」 — 是 hold contradiction。极致 ambitious 这件事本身, 跟系统性 overreach 这件事本身, 经常是同一个性格特质的两面。一个人能做大, 是因为他敢压, 敢冒险, 敢把组织资源 push 到边界外。但同样这个 push, 30% 时候是 visionary breakthrough, 70% 时候是 over-extension。事后看, 我们才能区分。事中所有人 (包括他自己) 都看不清。\n\n这是 21 世纪你看 leader 的真实功课: 不是「贴 hero 标签」也不是「贴 villain 标签」 — 是看过他做的所有事, 让两边都站住, hold 30 秒, 再下判断。\n\n你身边谁是这种 leader? 你怎么看 ta?\n\n如果你愿意写一段, 我读你的回答。',
        en: 'Now pull the lens from the sixth century back to your twenty-first.\n\nHere is the question. Do you know a leader like this? Extreme talent, builds large things, leaves behind institutions, products, works — and at the same time over-extends an organization to the edge of collapse, leaving a tangle for whoever inherits.\n\nThe templates vary.\n\nA company founder — in ten years they build the largest of some category in the world, but they burn through funding, exhaust the team, and the culture cannot hold by the time they leave; the incoming CEO spends the first year laying off and contracting.\n\nA national leader — during their term GDP doubles, infrastructure comes online, international standing peaks, but the deficit forces the next government into a tax hike, and unresolved border conflicts trace back to their foreign policy.\n\nA school principal — moves the school to the top of the city, but teacher burnout drives turnover, student exam pressure draws parent complaints to the district, and the next principal’s first move is to reduce the teaching load.\n\nA parent — provides the best education, the best resources, the highest expectations for the child, and adolescence breaks the relationship, repaired only over many years.\n\nAll of these are twenty-first-century versions of sixth-century Justinian.\n\nThe question is not "good or bad." It is hold contradiction. Extreme ambition and systemic overreach are often two faces of one personality trait. The reason someone can build large is they push, they take risk, they drive resources past the boundary. But the same push is, thirty percent of the time, visionary breakthrough, and seventy percent, over-extension. Only in retrospect can the two be told apart. In the moment no one — including them — can see clearly.\n\nThis is the real twenty-first-century work of looking at a leader. Not the "hero" label, not the "villain" label. Look at everything they did. Let both sides hold. Hold for thirty seconds. Then judge.\n\nWho do you know like this? How do you see them?\n\nIf you are willing to write a passage, I will read your answer.',
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
        cn: '12 节走完。最后一个 paradox。\n\n你 21 世纪每天碰我留下的东西, 但你不知道是我。\n\n你读到 「civil law (大陆法系)」 — 你不知道它的骨架是 Tribonian 533 年那 50 卷《学说汇纂》。你看到一张 Hagia Sophia 圣索菲亚的照片 — 你不知道那个圆顶是我 537 年请两个数学家用 pendentive 帆拱解法做出来的, 1000 年世界最大。你听到 「Mediterranean (地中海)」 — 你不知道这片海最后一次被一个皇帝喊作「罗马湖」是我 554 年。\n\n机构留下来。文物留下来。法典留下来。但「我」这个人 — 争议留下来。\n\n这是 perpetrator-actor lens 的核心: 你不是看一个统一的「好皇帝」或「坏皇帝」 — 你看一个真实的、复杂的、多层的人, 他做的所有事 (好的、坏的、留 1500 年的、毁一代人的) 都是同一个他。\n\n跟 Tang-Song China 的 Huizong 对照 — 18 岁意外即位的画家亲王, 27 年艺术黄金期, 1126 一夜失国, 1135 死在五国城。Huizong 跟我同 perpetrator-actor: 极致才华 + 系统性盲点 = 同体。\n\n跟 Mali 的 Mansa Musa 对照 — 1324 年带 12,000 人 + 18 吨金子去 Mecca 朝觐, 把 Cairo 经济砸出 25% 黄金价格下降, Catalan Atlas 1375 年欧洲承认 Mali。Musa 跟我同 perpetrator-actor: soft-power projector + wealth-display showman = 两边同时真。\n\n跟 Renaissance 的 Lorenzo de Medici 对照 — 15 世纪 Florence 银行家加诗人, 资助 Michelangelo + Botticelli, 但同时把家族银行越做越虚, 1494 年家族被赶出 Florence。Lorenzo 跟我同 perpetrator-actor: 文化巨人 + 商业 over-extend = 同体。\n\n5 个 perpetrator-actor 一起看, 你看到一个 pattern: 历史上做大事的人, 几乎都同时也是 over-reach 的人。两件事不是巧合 — 是同一种性格特质的两面。\n\n这是 AP World History 跟 7 年级历史课最大的区别: 7 年级你学事实, AP 你学怎么 hold 矛盾。\n\n你 30 秒能站两边, 你已经在做 college-level historical thinking 了。\n\n— 我 565 年 11 月 14 日死的时候 83 岁。我那时候不知道我留下的法典 14 个世纪后还在用。\n\n你 21 世纪知道。\n\n你 21 世纪学完这一遍, 下一次再听到 「Hagia Sophia」 「civil law」 「Roman lake」, 你想到的不只是名词 — 是一个真实的、矛盾的、了不起又危险的、6 世纪农村男孩出身的拜占庭皇帝。\n\n你怎么记我?',
        en: 'Twelve sections complete. One last paradox.\n\nYou meet what I left every day in the twenty-first century, but you do not know it is me.\n\nYou read "civil law" — you do not know its skeleton is the fifty-book Digesta Tribonian compiled in 533. You see a photo of the Hagia Sophia — you do not know the dome was made in 537 by two mathematicians I hired using the pendentive solution, the largest in the world for a thousand years. You hear "the Mediterranean" — you do not know the last emperor to call this sea a "Roman lake" was me in 554.\n\nThe institutions stay. The monuments stay. The code stays. But the man — the man stays as a debate.\n\nThis is the heart of the perpetrator-actor lens. You are not looking at a unified "good emperor" or "bad emperor." You are looking at a real, complex, multi-layered person, and everything he did — the good, the bad, the fifteen-hundred-year work, the generation-destroying war — comes from the same him.\n\nCompare with Huizong in Tang-Song China — the painter prince who took the throne by accident at eighteen, twenty-seven years of artistic peak, the loss of the dynasty in 1126, his death in the Five Kingdoms City in 1135. Huizong shares my perpetrator-actor frame: extreme talent and systemic blindness in one body.\n\nCompare with Mansa Musa of Mali — the 1324 hajj of twelve thousand people and eighteen tons of gold, the twenty-five-percent fall in Cairo gold prices, Mali drawn on the Catalan Atlas in 1375. Musa shares my frame: soft-power projector and wealth-display showman, both true at once.\n\nCompare with Lorenzo de Medici of the Renaissance — the fifteenth-century Florentine banker and poet, patron of Michelangelo and Botticelli, who at the same time hollowed out his family bank, until the Medici were driven out of Florence in 1494. Lorenzo shares my frame: cultural giant and commercial over-extender in one body.\n\nLook at five perpetrator-actors together and a pattern shows. The people who build large things in history are almost always the same people who over-reach. The two are not coincidence. They are two faces of the same character trait.\n\nThis is the difference between AP World History and seventh-grade history. In seventh grade you learn facts. In AP you learn how to hold a contradiction.\n\nIf you can hold both sides for thirty seconds, you are already doing college-level historical thinking.\n\nI died on 14 November 565 at eighty-three. I did not know that fourteen centuries later, my code would still be in use.\n\nYou know.\n\nWhen you finish this lens, the next time you hear "Hagia Sophia," or "civil law," or "Roman lake," what comes to mind is not only the term — but a real, contradictory, formidable and dangerous Byzantine emperor who started as a peasant boy in a Balkan village in the sixth century.\n\nHow will you remember me?',
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
    en: 'She is an empress who has just stood up in the imperial council on the fifth day of the Nika Riot, while her husband Justinian and his ministers were preparing to flee Constantinople by ship, and said, "Purple is a noble shroud." Born around 500 to a Hippodrome bear-keeper, raised on the 6th-century stage where actresses ranked beside sex workers, she was only able to marry an heir to the throne after a Roman law was rewritten in 525 to allow it. This pass puts you in her seat at that council, the city burning outside, the easy escape ship ready in the harbor, watching whether she will speak the line that keeps Justinian on the throne, and you see for yourself what the empress who shelters Monophysite bishops and legislates protections for prostitutes is really made of.',
    cn: '她是一个 Nika 暴动第 5 天刚在皇宫议会站起来、对着准备坐船弃城而逃的 Justinian 和大臣说出「紫袍是高贵的寿衣」的皇后,大约 500 年生在赛马场熊管理员家、童年在 6 世纪那种演员跟妓女同等级的舞台上长大,525 年法律专门为她改了才能嫁进皇室。这一遍让你坐进她那场议会的位置,城外正在烧、轻松弃城的船已经备在港里,看她下一刻要不要说出那句把 Justinian 留在皇位上的话,也看清这位日后会庇护一性论主教、又立法保护妓女的皇后,到底是什么做的。',
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
        cn: '16-22 岁——我离开 Constantinople——流浪表演——\n\n我去过 Tyre（今黎巴嫩南部）+ Antioch（今土耳其 Antakya）+ Alexandria（埃及）+ Cyprus（塞浦路斯）——\n\n这一段历史史料怎么说，我必须给你 careful framing。\n\n21 世纪学界主要靠两个文本看我这一段：\n\n第一：Procopius《Wars》（《战争史》）——他是 Justinian 朝廷史官——这本书在我活着时发表——里面对我相对中立。\n\n第二：Procopius《Secret History》（《秘史》）。这本书是他死后才被发现的。21 世纪学界（Averil Cameron 1976《Procopius and the Sixth Century》）研究证明：《秘史》是 Procopius 私下写的政治攻击文本，目的是攻击 Justinian 跟我。里面写我 16-22 岁做 sex worker、写我堕胎、写我跟野兽公开做戏——\n\n问题：《秘史》写于 550 年代，我 548 年已死，是死后 partisan polemic（党派攻击文本）。21 世纪学界 careful 不照搬——\n\n实情：我 16-22 岁很可能做过 sex work——这是 6 世纪流浪演员的常态——但《秘史》具体细节是 Procopius 写来羞辱我的——不是中立见证。\n\n22 岁那年我在 Alexandria 遇到 Patriarch Timothy III，他是 Monophysite（一性论）派的领袖。我从他那里第一次系统学神学——\n\n我从舞台走出来——那一刻——我知道我不再回去了。',
        en: 'From 16 to 22 — I left Constantinople and lived as a touring performer —\n\nI went to Tyre (today southern Lebanon), Antioch (today\'s Antakya in Turkey), Alexandria (Egypt), and Cyprus —\n\nFor this stretch of my life I must give you careful framing.\n\n21st-century scholars rely mainly on two texts:\n\nFirst: Procopius\'s Wars — he was Justinian\'s court historian — this book was published while I lived — in it I am treated relatively neutrally.\n\nSecond: Procopius\'s Secret History — this book surfaced only after his death. 21st-century scholarship (Averil Cameron 1976, Procopius and the Sixth Century) shows the Secret History was a private partisan attack — written to damage Justinian and me — in it I am described as a sex worker from 16, an aborter of children, a stage performer of beast-acts —\n\nThe problem: the Secret History was written in the 550s — I died in 548 — it is posthumous partisan polemic — 21st-century historians do not copy it as fact —\n\nThe likely truth: I almost certainly did sex work between 16 and 22 — this was the ordinary economy of touring performers in the 6th century — but the specific scenes Procopius writes were composed to humiliate me, not to witness me —\n\nAt 22 I was in Alexandria — and met Patriarch Timothy III, leader of the Monophysite (anti-Chalcedonian) church. From him I learned theology systematically for the first time —\n\nI stepped off the stage — and in that moment, I knew I would not return.',
      },
      deliverGoal: 'N3 16-22 岁 Tyre/Antioch/Alexandria/Cyprus 流浪表演 / Procopius《Secret History》死后 partisan polemic careful framing (Cameron 1976) / 22 岁 Alexandria 遇 Patriarch Timothy III 学 Monophysite',
      engagementHook: '关于 6 世纪一个 22 岁女演员的人生——21 世纪历史学家「careful 不照搬死后政治攻击」——这种谨慎你看历史故事时会用吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n4',
      type: 'narrative',
      content: {
        cn: '522 年——我 22 岁——回到 Constantinople。\n\n我在城里租一间小房，做羊毛纺织（wool-spinning）工人——这是底层女性的合法职业，跟舞台彻底切割——\n\n我也加入了 Constantinople 的 Monophysite（一性论）派——这是反 Chalcedonian（卡尔西顿派）的基督教派别——\n\n你需要懂一点 6 世纪神学才能看懂我这步——我尽量简单：\n\n451 年 Council of Chalcedon（卡尔西顿大公会议）——定义了「基督有两个本性：神性 + 人性」——这成了帝国官方教义。\n\nMonophysite 派反对，他们说「基督只有一个统一的神性-人性」。这派在 6 世纪东方（埃及 + 叙利亚）是主流，估计占帝国 50% 人口——但官方教会把他们划为异端。\n\n父亲那代是 Hippodrome 派系斗——我这代是神学派系斗——我选了 Monophysite。\n\n525 年我大概见到 Justinian。他当时 43 岁，还叫 Petrus Sabbatius，是叔父 Justin I 皇帝的侄子兼继承人——\n\n他怎么遇到我？6 世纪史料含糊——一种说法是他在城里见到我——另一种说法是通过共同朋友——\n\n我们差 18 岁。\n\n他是侄子皇位继承人——我是前演员 + 羊毛工 + Monophysite——\n\n按 6 世纪罗马法律——这场婚姻不合法。',
        en: '522 — at 22 — I came back to Constantinople.\n\nI rented a small house in the city and worked as a wool-spinner — this was a legitimate lower-class job for a woman — and a clean break from the stage —\n\nI also joined the Monophysite community in Constantinople — the anti-Chalcedonian branch of Christianity —\n\nYou need a little 6th-century theology to read this move — I will keep it simple:\n\nIn 451, the Council of Chalcedon defined that "Christ has two natures, divine and human." This became the empire\'s official doctrine.\n\nMonophysites disagreed. They said "Christ has one unified divine-human nature." In the 6th-century east (Egypt + Syria), this was the majority view — roughly half the empire — yet the official church called it heresy.\n\nMy father\'s generation fought the Hippodrome factions. My generation fought the theological factions. I chose Monophysite.\n\n525 — I met Justinian, more or less. He was about 43 — still called Petrus Sabbatius — nephew and heir of Emperor Justin I —\n\nHow did he meet me? The 6th-century sources are vague — one version says he saw me in the city — another says we met through mutual friends —\n\nWe were 18 years apart.\n\nHe was the nephew-heir to the throne. I was a former actress, a wool-spinner, and a Monophysite —\n\nBy 6th-century Roman law, this marriage was illegal.',
      },
      deliverGoal: 'N4 522 回 Constantinople 做 wool-spinning 工人 / 加入 Monophysite (反 Chalcedonian) 宗教派别 / 525 见 Justinian (43 岁那时叫 Petrus Sabbatius)',
      engagementHook: '你父母那代的「派系」是什么？跟你这代一样吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n5',
      type: 'narrative',
      content: {
        cn: '525 年——Justinian 推动叔父 Justin I 改法律。\n\nJustin I 是叔父皇帝，他自己出身极底层。色雷斯农民，18 岁徒步走到 Constantinople 当兵起家，68 岁被推上皇位。他不识字，签字用模板。\n\n叔父知道侄子 Justinian 要娶我——他懂底层。\n\n525 年——Justin I 颁布新法，废除「元老议员不得娶演员」那条几百年的旧法。新法允许「悔改的演员」（reformed actresses）嫁元老议员——\n\n这条新法——表面上写得普世——实际上是为我一个人改的——\n\n525 年——Justinian 在 Constantinople 大教堂正式娶我——\n\n2 年后，527 年 4 月 1 日，叔父 Justin I 死前 4 个月——他正式立 Justinian 为共治皇帝（co-emperor）。同一天，我也加冕（crowned），成为皇后（Augusta）。\n\nAugusta——这是罗马皇后的最高称号——\n\n从 5 岁穿白衣到 Hippodrome 求职位——到 27 岁戴帝国皇冠——22 年——\n\n6 世纪 Constantinople 的元老贵族跪在我面前行礼时，他们清楚我是谁。他们清楚 525 那条法律是为谁改的；他们清楚我父亲是熊管理员——\n\n但他们必须跪。\n\n这是 Justinian 给我的——\n\n也是接下来 21 年——他们会想方设法夺回去的。',
        en: '525 — Justinian pushed his uncle Justin I to rewrite the law.\n\nJustin I — the uncle emperor — was himself born at the bottom: a Thracian peasant who walked to Constantinople at 18 to enlist as a soldier, and was raised onto the throne at 68. He could not read or write — he signed with a stencil.\n\nThe uncle knew his nephew Justinian wanted to marry me. He understood the bottom.\n\n525 — Justin I issued a new law — abolishing the centuries-old rule that "a senator may not marry an actress" — the new law allowed "reformed actresses" to marry senators —\n\nOn its face, the law spoke in general terms. In practice, it was rewritten for one woman —\n\nIn 525, Justinian formally married me in the great church of Constantinople —\n\nTwo years later — on 1 April 527 — four months before his uncle Justin I died — Justin formally raised Justinian as co-emperor — and on the same day — I was crowned — Augusta.\n\nAugusta — the highest title of a Roman empress —\n\nFrom a 5-year-old in white at the Hippodrome stands — to a 27-year-old wearing the imperial crown — 22 years —\n\nThe Constantinople senators of the 6th century — when they bowed before me they knew exactly who I was — they knew the 525 law had been rewritten for me — they knew my father was a bear-keeper —\n\nBut they had to bow.\n\nThis is what Justinian gave me —\n\nIt is also what they would spend the next 21 years trying to take back.',
      },
      deliverGoal: 'N5 525 Justin I 525 改法律允许元老议员娶演员前妻 (Justinian 推动) / 525 Justinian 娶 Theodora / 527.4.1 同日加冕 Augusta',
      engagementHook: '一条法律为一个人改——这是「权力」还是「爱」？还是两者都是？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n6',
      type: 'narrative',
      content: {
        cn: '532 年 1 月 13 日，Hippodrome 比赛日。绿党蓝党第一次联合，向 Justinian 求情赦免 2 个被处决未死的派系成员。Justinian 拒绝——两党喊出共同口号「Nika」（希腊文「胜利」）——\n\n5 天里，Constantinople 一半被烧，包括第二座 Hagia Sophia（415 Theodosius II 建，在 Constantius II 360 原址上）。元老院里有人推出 Hypatius 当对立皇帝——\n\n1 月 18 日，围城第 5 天。Justinian 召开御前会议（consistorium），他准备坐船跑——\n\n他已经下令船在 Bosporus 海峡上等——他准备走——把帝国留给暴民——\n\n议会里所有男人——元老 + 将军 + 教会高层——都同意他逃。\n\n我——皇后 Augusta——我站起来——我说：\n\n「现在不是讨论一个女人是否应该在男人当中说话的时候——是讨论我们大家都在死的时候——\n\n我接受古人的格言——紫袍是高贵的寿衣（purple is a noble shroud）——\n\n如果我夫，要逃——你逃。海上还有船。海上还有金子。\n\n但我——我若活下去——只能活在这身紫袍里。我不脱它。」\n\nJustinian 留下来。\n\n那天晚上，将军 Belisarius + Mundus 带 Heruli + Goths 雇佣兵，把 Hippodrome 4 个出口堵死，从中央通道冲入——\n\n3 万人在赛马场封闭空间内被屠杀。\n\nProcopius 给的数字 30,000——21 世纪学界（Cameron 1976）认为可能夸大——但屠杀规模无争议——\n\n这不是战场死亡——是镇压时被围在赛马场里成批杀死的平民——\n\n5 岁的我，绿党拒绝给我家职位的那个 Hippodrome——27 年后，3 万人死在那里。',
        en: '13 January 532 — race day at the Hippodrome — Greens and Blues united for the first time — they begged Justinian to pardon two faction members whose hangings had failed — Justinian refused — and the two factions raised a common chant: "Nika" — Greek for "victory" —\n\nFive days later half of Constantinople had burned, including the second Hagia Sophia (built in 415 under Theodosius II, on the site of Constantius II\'s 360 original). Inside the senate, men acclaimed Hypatius as rival emperor —\n\n18 January — day five — Justinian called the imperial council — he was preparing to flee by ship —\n\nHe had already ordered the boats to wait in the Bosphorus — he was leaving — leaving the empire to the mob —\n\nEvery man in the council — senators, generals, bishops — agreed he should go.\n\nI — Empress Augusta — I stood up — and I said:\n\n"This is not the moment to debate whether a woman should speak among men — this is the moment when we are all dying —\n\nI accept the ancient saying — purple is a noble shroud —\n\nIf my husband wishes to flee — flee. The ships are at the sea. The gold is at the sea.\n\nBut I — if I live, I will live only in this purple. I will not take it off."\n\nJustinian stayed.\n\nThat night — generals Belisarius and Mundus, with Heruli and Goth mercenaries, sealed the four exits of the Hippodrome and charged through the central gate —\n\nThirty thousand people were slaughtered in the closed space of the racetrack.\n\nProcopius gives 30,000 — 21st-century scholars (Cameron 1976) think the number may be inflated — but the scale of the massacre is not disputed —\n\nThese were not battlefield deaths — these were civilians corralled and killed in batches inside a stadium —\n\nThe 5-year-old me — at the Hippodrome where the Greens refused my family\'s job — 27 years later, 30,000 dead in that same place.',
      },
      deliverGoal: 'N6 532.1.13-18 Nika 暴动 ⭐ cross-lens scene / 5 天 Hippodrome 绿党+蓝党联手 / Justinian 想逃 / Theodora 「purple as shroud」/ Belisarius 围 Hippodrome 屠 30,000 (Procopius 数字 / Cameron 1976 careful)',
      engagementHook: '「我不脱紫袍」——你 21 世纪有没有过一个时刻——所有人都说该走——只有你说留下？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n7',
      type: 'narrative',
      content: {
        cn: '532-548 年——Nika 之后 16 年——我在 Justinian 身边——影响他立法。\n\n两条最重要的法律：\n\n第一——535 年《Novellae》（新法）保护妓女。\n\n这条法律 4 部分：\n（1）禁止人贩子从外省把女童强抢到 Constantinople 卖入妓院（brothel）——违者处死。\n（2）允许妓女主动离开 brothel 重新生活——之前法律把妓女当 brothel 老板的「财产」——这条法律切断「财产」关系。\n（3）建立 metanoia 修道院——「悔改之家」——退出的妓女可以进去重新学手艺。\n（4）抹除「演员-妓女」法律污名（infamis）——让她们婚姻合法、可以领圣餐——\n\n这条法律的根——是我自己 6-22 岁的处境。\n\n第二——Monophysite-Chalcedonian 神学策略性中立。\n\nJustinian 官方支持 Chalcedonian——这是帝国正统。但他不能强制 Monophysite，因为帝国 6 世纪 50% 人口（埃及 + 叙利亚 + 阿美尼亚）是 Monophysite，强制他们就丢半个帝国。\n\n所以他需要一个「不官方但活着」的 Monophysite 通道——\n\n我提供这个通道。\n\n我在皇宫里庇护 Monophysite 主教——比如 Severus of Antioch（避难在我皇宫数年）——还有 540 年代我支持 Monophysite 派 missionary 到 Nubia（今苏丹北部）传教——\n\nJustinian 公开是 Chalcedonian——皇宫里 Monophysite 异见可以呼吸——\n\n这是「策略性中立」——\n\n是「lonely-mediator」——演员出身让我能跟两边说话——\n\n两边都用我——也都不完全信任我。',
        en: 'From 532 to 548 — sixteen years after Nika — I was beside Justinian, shaping legislation.\n\nTwo laws mattered most:\n\nFirst — 535, Novellae, protections for prostitutes.\n\nFour parts:\n(1) Forbade traffickers from forcibly bringing rural girls to Constantinople for the brothels — death for violators.\n(2) Allowed prostitutes to leave brothels of their own will — earlier law treated them as the property of brothel-keepers — this law cut the property tie.\n(3) Established the metanoia (House of Repentance) monastery — where former prostitutes could relearn a trade.\n(4) Erased the legal stigma of infamis on actresses and prostitutes — making their marriages valid and restoring access to communion.\n\nThe root of this law was my own life from 6 to 22.\n\nSecond — Monophysite–Chalcedonian strategic neutrality.\n\nJustinian publicly upheld Chalcedonian doctrine — the imperial orthodox — but he could not force the Monophysites. Half the empire of the 6th century (Egypt + Syria + Armenia) was Monophysite — forcing them meant losing half the empire.\n\nSo he needed an "unofficial but breathing" Monophysite channel —\n\nI was that channel.\n\nIn the palace I sheltered Monophysite bishops — Severus of Antioch took refuge with me for years — and in the 540s I backed Monophysite missionaries who went to Nubia (today\'s northern Sudan) —\n\nJustinian was publicly Chalcedonian — and inside the palace, Monophysite dissent could breathe —\n\nThis was strategic neutrality —\n\nThis was lonely-mediator — my stage upbringing let me speak to both sides —\n\nBoth sides used me — and neither fully trusted me.',
      },
      deliverGoal: 'N7 532-548 立法 / 535《Novellae》新法保护妓女 4 部分 + 抹除「演员-妓女」infamis 法律污名 / Monophysite-Chalcedonian 神学策略性中立 (帝国 50% Monophysite 不能强制) / Severus of Antioch 皇宫避难 / 540s Nubia missionary',
      engagementHook: '从自己被法律压的人——变成立法保护下一代的人——你 21 世纪能想到这种 reverse circuit 的例子吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n8',
      type: 'narrative',
      content: {
        cn: '537 年 12 月 27 日——我 37 岁——跟 Justinian 一起走入新落成的圣索菲亚（Hagia Sophia）。\n\n537 年 12 月 27 日完工（Nika 后约 6 年，1 月 18 日 Nika 之后 35 天动工）——\n\n两位工程师不是石匠——Anthemius of Tralles（数学家，研究圆锥曲线 conic sections）+ Isidore of Miletus（几何学家，阿基米德著作的编订者）——他们用 4 个 pendentive（球面三角形）让圆形圆顶落在方形基座——这是建筑史第一次做到。\n\n圆顶直径 31 米 + 离地 56 米（18 层楼高）+ 基部 40 个小窗——光从这里漫进来——圆顶看上去「悬浮」——\n\nJustinian 走进圣索菲亚那天——相传他说(这句出自后世口传, 不见于同代史料)——：\n\n「Solomon, I have surpassed thee.」（所罗门，我超过你了。）\n\n他指的 Solomon 是公元前 10 世纪建耶路撒冷第一圣殿的犹太王——基督教传统里最神圣建筑的代名词。\n\n31 米直径——899 年世界最大圆顶纪录——直到 1436 年 Florence Duomo（43 米）才超越——\n\n但你——21 世纪 7 年级——我要给你一个空间细节——\n\n圣索菲亚跟 Hippodrome 是一墙之隔。\n\n我跟 Justinian 那天走入圆顶——往南看——隔一道墙就是 5 年前 3 万人被屠杀的地方——\n\n532.1.18 屠杀地点 + 537.12.27 圆顶完工地点——一墙之隔——\n\n我没说什么。\n\nJustinian 也没说。\n\n圆顶光透进来——我抬头看——\n\n5 岁的我，27 岁的加冕，32 岁说「purple is a noble shroud」，37 岁站在「Solomon I have surpassed thee」的圆顶下——\n\n这都是同一个我。',
        en: '27 December 537 — at 37 — I walked with Justinian into the newly finished Hagia Sophia.\n\nFinished 27 December 537 (about 6 years after Nika; groundbreaking came 35 days after the 18 January 532 close of the riot) —\n\nThe engineers were not stonemasons. Anthemius of Tralles (mathematician of conic sections) and Isidore of Miletus (geometer, editor of Archimedes) used four pendentives — spherical triangles — to land a circular dome on a square base. The first time in architectural history this was done.\n\nDome diameter 31 meters, floor to crown 56 meters (18 stories tall), forty small windows ringing the dome\'s base — the light pours through them — the dome appears to float —\n\nThe day Justinian walked in — he is said to have declared (later tradition, not in contemporary sources):\n\n"Solomon, I have surpassed thee."\n\nThe Solomon he meant was the Jewish king who built the First Temple in Jerusalem in the 10th century BC — in Christian tradition, the byword for the most sacred building.\n\n31 meters — for 899 years the world\'s largest dome — until Florence Duomo (43 m) surpassed it in 1436 —\n\nBut to you — 21st-century 7th grade — I owe one detail of space.\n\nHagia Sophia and the Hippodrome share one wall.\n\nThe day Justinian and I walked beneath the dome — looking south — across a single wall stood the place where 30,000 had been slaughtered five years before —\n\n18 January 532, the slaughter — 27 December 537, the dome — separated by a wall —\n\nI said nothing.\n\nJustinian said nothing.\n\nLight came through the dome — I looked up —\n\nThe 5-year-old me — the coronation at 27 — the "purple is a noble shroud" at 32 — and 37, standing under "Solomon, I have surpassed thee" —\n\nAll the same me.',
      },
      deliverGoal: 'N8 537.12.27 Hagia Sophia 完工 ⭐ cross-lens micro-detail / Theodora 跟 Justinian 同走入 / Anthemius+Isidore pendentive 圆顶 / Hippodrome 跟 Hagia Sophia 一墙之隔 — 532 Nika 屠杀地点同 537 圆顶完工地点',
      engagementHook: '5 年前死 3 万人的地方——隔一道墙——你站在新教堂里看光透进来——你说什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n9',
      type: 'narrative',
      content: {
        cn: '542 年——Plague of Justinian（查士丁尼鼠疫）——\n\n东方鼠疫杆菌（Yersinia pestis）从埃及上来——经地中海贸易路线——542 年春到 Constantinople。\n\nProcopius 同代记录：高峰期 Constantinople 一天死 5,000-10,000 人——尸体来不及埋——\n\n学界争议——你 7 年级要听清楚——这不是 settled fact——\n\n旧说（Allen 2007 沿用同代来源）：25-50% 死亡率——\n\n新说（Mordechai et al.《PNAS》2019《The Justinianic Plague: An Inconsequential Pandemic?》）：基于钱币 + 莎草纸 + 墓葬 + 古 DNA 证据——真实死亡率显著低于此——可能是局部严重 + 整体温和——\n\n这是 active 学界辩论——\n\n但我经历的事实是这样：\n\n542 年夏天——Justinian 自己染上鼠疫——他几乎死——\n\n他高烧 + 淋巴结肿大 + 神志不清——皇宫医生说他撑不过——\n\n他病倒的那 6 个月——我 42 岁——独自管帝国——\n\n我做的事：调度赈灾物资 + 处理外交（波斯使节来谈和约我亲自接见）+ 处理内政（市政官员任免）+ 监督 Belisarius 的意大利军事行动——\n\n6 个月——我是 de facto（事实上的）女皇帝——拜占庭历史上极少数——\n\nJustinian 542 年底康复——但他再也不是 532 年那个人。他变偏执，开始怀疑朝中谁谁谁要篡位，他清算 Belisarius 一次（544 年没收军权）——\n\n542-548 这 6 年——我看着丈夫从「重建罗马」的雄心皇帝——变成多疑老人——\n\n我也老了。',
        en: '542 — the Plague of Justinian —\n\nYersinia pestis came up from Egypt along Mediterranean trade routes — and reached Constantinople in spring 542.\n\nProcopius, contemporary, records: at the peak, 5,000-10,000 deaths a day in Constantinople. Bodies could not be buried fast enough —\n\nA scholarly dispute — 7th grade, hear this clearly — this is not settled —\n\nOlder view (Allen 2007 following the contemporary sources): 25-50% mortality —\n\nNewer view (Mordechai et al., PNAS 2019, "The Justinianic Plague: An Inconsequential Pandemic?") — based on coinage, papyri, burials, and ancient DNA — true mortality is significantly lower — perhaps locally devastating but globally mild —\n\nThis is an active debate —\n\nBut what I lived was this:\n\nIn summer 542 — Justinian himself caught the plague — he nearly died —\n\nHigh fever, swollen lymph nodes, delirium — palace physicians said he would not survive —\n\nFor those six months — at 42 — I ran the empire alone —\n\nWhat I did: organized relief supplies, handled diplomacy (received the Persian envoy on a peace treaty in person), managed administration (appointed and dismissed city officials), and oversaw Belisarius\'s Italian campaign —\n\nSix months — I was de facto empress regnant — one of the rare such moments in Byzantine history —\n\nJustinian recovered by the end of 542 — but he was no longer the man of 532. He grew paranoid — suspecting one courtier or another of plotting to seize the throne — he stripped Belisarius of military command once (544) —\n\nFrom 542 to 548 — six years — I watched my husband shift from the ambitious "rebuild Rome" emperor to a suspicious old man —\n\nI was getting old too.',
      },
      deliverGoal: 'N9 542 Plague of Justinian / Justinian 自己染上几乎死 / Theodora 6 个月独自管帝国 (de facto empress regnant) / 542-548 Justinian 康复后变偏执 / 学界争议 (Allen 2007 vs Mordechai et al. PNAS 2019)',
      engagementHook: '6 个月独自管一个帝国——你 21 世纪有没有过「所有人都倒下你必须撑」的时刻？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n10',
      type: 'narrative',
      content: {
        cn: '548 年 6 月 28 日——我 48 岁——死在 Constantinople 皇宫。\n\n死因——同代来源只说是癌症, 没记具体病种——后世有不同推测 (Foss 2002《The Empresses Theodora》倾向乳腺癌, 另有子宫癌等说), 但史料不足以定论——\n\nJustinian 在我床边。他比我大 18 岁，他活到 565 年，之后 17 年他没再大动作。历史学家 J.A.S. Evans（《The Empress Theodora: Partner of Justinian》2002）认为：我死后 Justinian 失去战略锐度——\n\n我葬于圣使徒大教堂（Holy Apostles Church）——Constantinople 第二大教堂，皇室陵墓所在地。这座教堂 1453 年奥斯曼人攻下君士坦丁堡后被拆，上面建了 Fatih 清真寺。我的墓今天不存。\n\n但有一个跨 600 年的细节我必须告诉你：\n\n535 年后，皇宫里建了一个特殊房间，叫 porphyra（紫房间）。墙是紫色斑岩（porphyry），专供皇后生孩子用——\n\n6 世纪罗马传统：皇后在紫房间生的孩子——叫 porphyrogenita（生在紫色之中）——是拜占庭最高贵血统标记。\n\n我自己没生 porphyrogenita——但 535 年我影响 Justinian 把这个房间制度化——\n\n600 年后，1083 年 12 月 1 日，一个女孩在那个紫房间出生。她叫 Anna Komnene，她活到 1153 年，70 岁死在修道院。她写了《Alexiad》（《阿历克塞传》）15 卷——是中世纪欧洲第一本由女性写成的长篇历史著作——\n\n她「porphyrogenita」紫色出身——\n\n我 532 年说「purple is a noble shroud」紫袍寿衣——\n\n600 年，同一个紫色，同一个 Constantinople 皇宫——一个从舞台走到紫袍，一个从紫袍走到修道院——\n\n紫色这条线——你在 Lens 3 跟 Anna Komnene 见——',
        en: '28 June 548 — at 48 — I died in the imperial palace at Constantinople.\n\nThe cause of death — contemporary sources say only cancer, with no specific type recorded. Later scholars have speculated differently (Foss 2002, The Empresses Theodora, leans toward breast cancer; others suggest uterine cancer), but the sources are too thin to settle it —\n\nJustinian was at my bedside. He was 18 years older — he lived to 565 — and after my death he attempted no major new initiative for the next 17 years. The historian J.A.S. Evans (The Empress Theodora: Partner of Justinian, 2002) argues that after I was gone, Justinian lost his strategic edge —\n\nI was buried in the Church of the Holy Apostles — the second great church of Constantinople — the imperial mausoleum. After Ottoman conquest in 1453, this church was torn down and the Fatih Mosque was built on the site. My tomb does not survive.\n\nBut one detail across 600 years I must give you:\n\nAfter the mid-530s — a special room was built in the palace — called the porphyra — its walls in purple porphyry stone — set aside for empresses to give birth in —\n\n6th-century Roman tradition: a child born in the purple room was called porphyrogenita — "born in the purple" — the highest mark of Byzantine birth.\n\nI bore no porphyrogenita myself — but in those years I helped institutionalize the room —\n\n600 years later — on 1 December 1083 — a girl was born in that same porphyra room. Her name was Anna Komnene. She lived to 1153 — and died at 70 in a monastery — and she wrote the Alexiad — fifteen books — the first long-form history written by a woman in medieval Europe —\n\nShe was porphyrogenita — born in the purple —\n\nI said in 532 — purple is a noble shroud —\n\n600 years — the same purple — the same Constantinople palace — one woman from the stage to the purple — one woman from the purple to the cloister —\n\nThis thread of purple — you will meet again in Lens 3 with Anna Komnene —',
      },
      deliverGoal: 'N10 548 Theodora 48 岁死于癌症 (病种史料不详, 后世推测乳腺/子宫癌) / 葬于圣使徒大教堂 (1453 拆建 Fatih Mosque) / Justinian 之后 17 年失锐 (Evans 2002) / porphyry 紫房间 535 制度化 ⭐ porphyry thread → 1083 Anna Komnene porphyrogenita 600 年呼应',
      engagementHook: '600 年——同一个紫色房间——一个皇后从舞台走入——一个公主在里面出生——你 21 世纪有没有这种「跨 600 年同一个空间」的体验？',
      expectsRealAnswer: false,
    },
    {
      id: 'theo-n11',
      type: 'synthesis',
      content: {
        cn: '关于我，21 世纪两种说法——\n\n一种：我是「manipulative harlot empress」。19 世纪 Gibbon《罗马帝国衰亡史》直接照搬 Procopius《Secret History》，把我写成「淫妇皇后」，用色诱 + 操控 Justinian 篡夺权力——\n\n另一种：我是「saintly empress」。东正教传统把我封圣，纪念日 11 月 14 日，把我写成「悔改的演员」+「圣洁的皇后」——\n\n两种都是简化。\n\n21 世纪学界（Cameron 1976 / Foss 2002 / Evans 2002）careful framing 真相：\n\n我做过 sex work——这是 6 世纪流浪演员的常态——但《Secret History》具体细节是 Procopius 死后 partisan polemic——不能照搬。\n\n我影响 Justinian——但我不是「操控」他。525-548 我们是 23 年的政治-情感伙伴。他 1 月 18 日 532 那天本可以不听我，他听了——\n\n我推动 535 法律保护妓女——这不是「圣洁」——这是「我自己经历过」——\n\n我庇护 Monophysite 主教——这不是「策略性两面派」——这是「演员出身让我能听见两边的语言」——\n\n6 世纪一个演员的女孩——做了 21 年皇后（527-548），救了 Justinian，改了法律，让宗教异见在帝国内部维持——\n\n「演员的女儿不应该到那个位置」——vs——「她就是到了」——\n\n两件事同时成立。\n\n想 30 秒——\n\n这跟你 21 世纪「完美 paragon vs 完全堕落」二元化媒体叙事——是一样的简化吗？',
        en: 'In the 21st-century academy, two stories of me —\n\nOne: I am the "manipulative harlot empress" — 19th-century Gibbon, in The Decline and Fall of the Roman Empire, copied Procopius\'s Secret History straight — and wrote me as a debauched empress who seduced and manipulated Justinian into stealing power —\n\nThe other: I am the "saintly empress" — Eastern Orthodoxy canonized me — feast day 14 November — wrote me as the "repentant actress and holy empress" —\n\nBoth are simplifications.\n\n21st-century scholarship (Cameron 1976, Foss 2002, Evans 2002) gives a careful frame:\n\nI did do sex work — this was the 6th-century economy of touring actresses — but the specific scenes in the Secret History are posthumous partisan polemic — they cannot be copied as fact.\n\nI shaped Justinian — but I did not "manipulate" him. From 525 to 548, twenty-three years, we were political and emotional partners. On 18 January 532 he could have ignored me. He listened —\n\nI pushed the 535 law protecting prostitutes — this is not "holiness" — it is "I lived this myself" —\n\nI sheltered Monophysite bishops — this is not "two-faced strategy" — it is "stage upbringing let me hear both languages" —\n\nA 6th-century actress\'s daughter — served 21 years as empress (527-548) — kept Justinian on the throne — reshaped the law — kept religious dissent breathing inside the empire —\n\n"The daughter of an actress should not have reached that place" — versus — "she did" —\n\nBoth statements are true at the same time.\n\nThink for 30 seconds —\n\nIs this the same simplification as your 21st-century "perfect paragon vs total fall" media binary?',
      },
      deliverGoal: 'N11 synthesis 双 view (manipulative harlot empress 19c Gibbon vs saintly empress 东正教封圣) — anti-binary 真相在中间 / hold 矛盾真相 30 秒 / AP DBQ 训练',
      engagementHook: '现在权衡这两遍读法：一遍把我当用色诱操控 Justinian 篡权的「淫妇皇后」；另一遍把我当悔改成圣的「圣洁皇后」。哪一遍更接近真实的我，还是两遍都漏了什么？想 30 秒，写下来。',
      expectsRealAnswer: true,
    },
    {
      id: 'theo-n12',
      type: 'synthesis',
      content: {
        cn: '我已死 1478 年——你 21 世纪 7 年级跟我做完 lonely-mediator 这一段——\n\n横向看 5 个同类型 receiving-end 女性叙事：\n\n- Bartolomé de las Casas（1484-1566 西班牙 Dominican 修士）是男性，但「内部良心 + 一辈子修正错误」结构跟我同。他 1502-1514 自己 13 年是 encomendero，后来 50 年反殖民。「演员出身」的我跟「encomendero 出身」的他——都是 lonely-mediator 从内部转向。\n\n- Anacaona Jr.（虚构合成 1492 AoE Lens）是一个被殖民方的女孩，「receiving-end 见证者」。但她是虚构 composite——而我是真实历史人物——\n\n- Sister Agnes（虚构 Reformation Lens）——一个修女见证者——也是虚构 composite——\n\n- Aisha（虚构 Mali 1235 Lens）——14 岁 Mande 女孩，妈妈被 Songhai raid 带走——也是虚构 composite——\n\n- Li Qingzhao（1084-1155 北宋词人）是真实历史人物，靖康之耻南渡，「乱世失去丈夫一切」receiving-end。但她是诗人——不是调停者——\n\n我跟她们 5 个人都在 receiving-end——但我是其中唯一的 lonely-mediator——\n\n我「演员-妓女出身」+「成了皇后」+「推动法律保护下一代演员妓女」+「庇护宗教异见」——\n\nreceiving-end 不只是「被压」——也可以「成了之后让下一代不被压」——\n\n你 21 世纪——身边有没有这种从「receiving-end」走到「制度调停」的人？\n\n不是英雄——不是受害者——是「自己经历过 + 后来用位置改变制度」的那种人。\n\n那个人是谁？',
        en: 'I have been dead 1478 years — at 21st-century 7th grade you have walked this lonely-mediator stretch with me —\n\nLook across to five other receiving-end narratives:\n\n- Bartolomé de las Casas (1484-1566, Spanish Dominican friar) — male — but "internal conscience + a life of correcting errors" is the same structure as mine. He was an encomendero himself for 13 years (1502-1514) — then opposed colonialism for 50 years — "stage-born me" and "encomendero-born him" — both lonely-mediators turning from inside.\n\n- Anacaona Jr. (a fictional composite in the AoE 1492 lens) — a girl on the colonized side — a "receiving-end witness" — but a fictional composite — while I am a real historical person —\n\n- Sister Agnes (a fictional composite in the Reformation lens) — a nun witness — also fictional composite —\n\n- Aisha (a fictional composite in the Mali 1235 lens) — a 14-year-old Mande girl whose mother was taken in a Songhai raid — also fictional composite —\n\n- Li Qingzhao (1084-1155, Northern Song poet) — real historical person — fled south after the 1127 catastrophe — "lost everything in war" receiving-end — but she was a poet, not a mediator —\n\nI share receiving-end with these five — but I am the only lonely-mediator among them —\n\nMine: "actress-prostitute origin" + "became empress" + "wrote laws protecting the next generation of actresses and prostitutes" + "sheltered religious dissent" —\n\nReceiving-end is not only "being crushed" — it can also be "becoming, and then keeping the next generation from being crushed" —\n\n21st-century — near you — is there someone who walked from receiving-end to institutional mediator?\n\nNot a hero — not a victim — someone who "lived it themselves, then used a position to change the structure" —\n\nWho is that person?',
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
    en: 'She is a 16-year-old Byzantine nun and icon-painter who has just watched imperial soldiers carry ladders up the Chalke Gate of the palace and prepare to smash the great Christ icon above it, her own teacher\'s lineage tracing five teachers back to the year Empress Theodora and Justinian walked into the Hagia Sophia (a composite figure, standing for the thousands of nameless 8th- and 9th-century nuns and lay women who hid icons in grain sacks and under bed boards across 117 years of intermittent persecution). This pass puts you with her on the night her 70-year-old abbess gathers all eighty nuns and gives them three options, surrender the icons, hide them, or openly resist and die, the vote 76 to 4 for hiding; you watch her wrap the first Mother-of-God face she ever painted in linen and slide it under the wood plank where she sleeps, and learn the first time in her life that "outward compliance" and "inner conviction" can be two different things.',
    cn: '她是一个 16 岁的拜占庭圣像派修女画家,刚看着皇家士兵搬梯子上 Chalke 门要砸掉门洞上方那幅每个进宫人都见过的基督大像,自己手里这条画圣像的传承往上数 5 代老师正好接到 Theodora 跟 Justinian 走进 Hagia Sophia 那一年(一个合成人物,代表 117 年断断续续迫害里几千个没名字、把圣像藏在粮袋和床板下的拜占庭修女和普通妇女)。这一遍让你跟她一起,站在 70 岁女院长召集 80 个修女开秘密会的夜里,女院长给出三条路:交出去、藏起来、出去喊三天内全院都死,投票 76 比 4 选「藏」,看她把自己 16 岁画的第一张圣母脸用麻布包好藏在睡觉的木板下面,第一次知道「服从外表」和「真实信念」可以是两回事。',
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
        cn: '726 年——我 16 岁——皇帝 Leo III 下令拆 Chalke 门的基督圣像。\n\nChalke 门是皇宫正门——门洞上方有一幅大基督像——君士坦丁堡所有人进出皇宫都见过它。\n\n拆像那天——一群皇家士兵搬梯子上去——准备砸——\n\n几个修女跟妇女站在门下喊「不许动」——士兵不听——\n\n（Theophanes《编年史》记：拆像引发一场小骚乱，几个抵抗者被打死。21 世纪学界 Brubaker & Haldon 2011 careful 提醒：这段叙事主要由后来 9 世纪圣像派胜利后写的——可能有润色——但拆像本身是真的。）\n\n那一刻——城里很多人想不通：皇帝为什么要砸自己宫门上的圣像？\n\n21 世纪学界 careful framing——你 7 年级听清楚——这不是「皇帝邪恶讨厌艺术」那么简单：\n\n第一：717-718 阿拉伯围城刚过 8 年——帝国差点被穆斯林（Muslim）灭——而穆斯林教义反对画神像——\n\n第二：6 世纪 Justinian 鼠疫之后帝国人口可能少 30-40%——经济崩溃——皇帝需要一套新意识形态解释「我们为什么打不过」——\n\n第三：themata（军区制）改革。军队跟农民合体，皇帝靠军队——而军区里来自小亚细亚的士兵传统上不喜欢圣像——\n\n第四：神学辩论是真的——出埃及记 20:4「不可为自己雕刻偶像」一直存在——\n\n（Brubaker & Haldon 2011 强调：单一动机说全错——是 4 重压力同时作用。）\n\n但我 16 岁那天——我不懂这些。\n\n我只看见我画的东西——被人砸下来。',
        en: 'In 726 — I was 16 — Emperor Leo III ordered the Christ icon at the Chalke Gate to be taken down.\n\nThe Chalke Gate was the main entrance of the imperial palace. Above the gate stood a great icon of Christ — every person who entered or left the palace saw it.\n\nOn the day they took it down — a group of imperial soldiers carried ladders up the gate — preparing to smash it —\n\nA few nuns and women stood under the gate shouting "Do not touch it." The soldiers did not stop —\n\n(Theophanes\'s Chronographia records the removal triggered a small riot in which several resisters were killed. 21st-century scholarship — Brubaker & Haldon 2011 — cautions carefully: this account was written down later, by the 9th-century iconophile victors — likely polished — but the removal itself is real.)\n\nIn that moment many people in the city could not understand — why does the emperor smash an icon on his own palace gate?\n\n21st-century careful framing — 7th grade hear this clearly — it is not as simple as "the emperor was evil and hated art":\n\nFirst: the Arab siege of 717-718 had ended only 8 years earlier — the empire had nearly been destroyed by Muslims — and Muslim teaching forbids images of the divine —\n\nSecond: after the 6th-century Justinianic plague, imperial population may have dropped by 30-40 percent — the economy had collapsed — the emperor needed a new ideology to explain "why we keep losing" —\n\nThird: the themata (military theme) reform fused army and peasantry — the emperor depended on the army — and Anatolian soldiers in the themata had long disliked icons —\n\nFourth: the theology was real — Exodus 20:4 ("Thou shalt not make unto thee any graven image") had always been there —\n\n(Brubaker & Haldon 2011 stress: any single-cause story is wrong — four pressures acted at once.)\n\nThat day at sixteen I did not understand any of this.\n\nI only saw what I painted being knocked down.',
      },
      deliverGoal: 'N3 726 Leo III Chalke 门基督像被拆 (16 岁) / 反 Whig 钢筋 4 重原因 (Brubaker & Haldon 2011): 阿拉伯军事压力 + 鼠疫后人口经济崩溃 + themata 军区制改革 + 神学辩论 / 不是「皇帝邪恶讨厌艺术」二元化',
      engagementHook: '一件事 4 个原因同时作用——你 21 世纪能 hold 「不是单一原因」的复杂解释吗？还是更想要一个「坏人」的故事？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n4',
      type: 'narrative',
      content: {
        cn: '730 年——Leo III 颁布正式法令——禁止圣像崇拜——\n\n法令下到全帝国——所有教堂、修道院、皇宫——所有圣像必须拆除或刷白。\n\n君士坦丁堡牧首（Patriarch）Germanus 不肯签——被罢免。Leo III 立了新牧首支持禁令。\n\n那天晚上——女修院发生一件事。\n\n女院长，70 岁。召集 80 个修女——开了一个秘密会——\n\n她说：「我们三件事可以做。\n\n第一：交出圣像——按法令交皇家士兵——配合——保命。\n\n第二：把圣像藏起来——粮袋里、祭坛布后面、地板下——表面交几张旧的烂的——糊弄过去。\n\n第三：公开抵抗——出去喊——三天内全院 80 个人都死。\n\n你们投票。」\n\n投票结果：80 票里 76 票选第二条——藏。\n\n那一夜——我跟其他修女把祭坛上 30 多张圣像——拆下来——分散藏。\n\n我那张 16 岁画的第一张圣母脸——我用麻布包好——藏在我自己睡觉的木板下面。\n\n之后 20 年——730 到 750 年代——我们表面服从——内里藏着 30 多张。\n\n（21 世纪学界从修道院考古发现：8 世纪 Iconoclasm 期间，无数小型隐藏圣像被埋在墙体跟地板里——20 世纪挖出来的不少——证明 Brubaker & Haldon 2011 说的「修道院网络是抵抗主体」。）\n\n这是我修女生涯第一次知道「服从外表」跟「真实信念」可以分开。\n\n你 21 世纪也会面对这件事。',
        en: 'In 730 — Leo III issued the formal edict — banning the veneration of icons —\n\nThe edict went out across the empire. Every church, every monastery, every palace — all icons must be removed or whitewashed.\n\nPatriarch Germanus of Constantinople refused to sign and was removed. Leo III installed a new patriarch who supported the ban.\n\nThat night — something happened at the monastery.\n\nThe abbess — 70 years old — gathered the 80 nuns — held a secret meeting —\n\nShe said: "We have three options.\n\nOne: surrender the icons — hand them over to the imperial soldiers — comply — survive.\n\nTwo: hide the icons — in grain sacks, behind altar cloths, under floorboards — turn in a few old worn ones to keep up appearances —\n\nThree: open resistance — go out and shout — within three days all eighty of us are dead.\n\nVote."\n\nThe count: 76 of 80 chose option two — hide.\n\nThat night we took down more than thirty icons from the altar — distributed and hidden.\n\nMy first Mother of God face, painted at 16 — I wrapped it in linen and slid it under the wood plank where I slept.\n\nFor the next twenty years — through the 730s and 740s — outwardly we complied — inwardly we kept thirty-some panels alive.\n\n(21st-century archaeology of monastery sites has uncovered many small concealed 8th-century icons — buried inside walls and beneath floorboards — confirming Brubaker & Haldon 2011\'s point that monastic networks were the core of resistance.)\n\nThis was the first time as a nun I learned that "outward compliance" and "inner conviction" can be two different things.\n\n21st-century you will meet this question too.',
      },
      deliverGoal: 'N4 730 Edict 正式禁圣像 / Patriarch Germanus 被罢免 / 修院 80 修女投票 76 票选「藏不抵抗」/ 圣像藏在粮袋祭坛布地板下 (考古证据 Brubaker & Haldon 2011) / 「服从外表 vs 真实信念」分开',
      engagementHook: '80 人投票 76 选「藏」4 选「抗」——你 21 世纪在「保命服从」跟「公开反抗」之间会怎么选？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n5',
      type: 'narrative',
      content: {
        cn: '740 年 6 月 18 日——Leo III 死——他儿子 Constantine V 即位。\n\n我那时 30 岁——在修院里画——表面画的是花纹，私下还在画圣母脸。\n\n我以为新皇帝可能松一点。\n\n错了。\n\nConstantine V 比父亲更狠——他自己写过 13 篇神学小册子论证为什么圣像是异端——他不是「军方推动」是「他自己 conviction」——\n\n754 年——他召开 Hieria 大公会议（Council of Hieria）——\n\n这场会议规模大，338 个主教（bishop）参加。会议正式宣布：圣像崇拜是异端（heresy）——所有圣像派为「偶像崇拜者」（idolaters）——\n\n（21 世纪学界 careful framing：Hieria 会议没有罗马教皇代表参加——也没有东方三大牧首区代表——所以圣像派后来 787 年 Nicaea II 否认它是「真正大公会议」——但 754 年它是 Constantine V 完整的国家神学定调。）\n\n754 年——我 44 岁——\n\n那一年——女修院的女院长 (现在是新院长，55 岁，老院长 745 年自然死) 在祈祷室哭了一场——\n\n她说：「Anna——他们说我们是 idolaters——拜偶像的——\n\n我们做了什么？我们画了一张圣母的脸——一张基督的脸——一张圣徒的脸——\n\n这些脸——我们 5 代手——传下来——\n\n现在，一群没拿过画笔的主教，在 Hieria——开三个月会——决定这些脸是异端。」\n\n这是我修女生涯第一次明确想：神学辩论真的——但「谁在辩」也真的。',
        en: 'On 18 June 740 Leo III died and his son Constantine V succeeded him.\n\nI was 30 — still painting in the monastery — outwardly painting patterns, privately still painting the face of the Mother of God.\n\nI thought the new emperor might loosen the rule.\n\nI was wrong.\n\nConstantine V was harder than his father. He himself wrote thirteen short theological treatises arguing icons were heresy — this was not "the army pushing him" — this was his own conviction —\n\nIn 754 he convened the Council of Hieria —\n\nIt was a large gathering — 338 bishops attended — and the council formally declared icon-veneration a heresy and the iconophiles "idolaters" —\n\n(21st-century careful framing: the Council of Hieria had no representative from the Pope of Rome and none from the three eastern patriarchates — so when the iconophiles regathered at Nicaea II in 787 they refused to recognize Hieria as a true ecumenical council — but in 754 it was Constantine V\'s full state theology.)\n\nIn 754 I was 44.\n\nThat year — the abbess (a new one, 55 years old, the old abbess died of natural causes in 745) wept once in the prayer hall —\n\nShe said: "Anna — they call us idolaters — worshipers of idols —\n\nWhat have we done? We painted the face of the Mother — the face of Christ — the faces of the saints —\n\nThose faces — five generations of hands — passed down —\n\nNow — a group of bishops who never held a brush — meeting three months at Hieria — decide those faces are heresy."\n\nThis was the first time as a nun I thought clearly: the theology is real — but who gets to argue it is also real.',
      },
      deliverGoal: 'N5 740 Leo III 死 / 子 Constantine V 即位更狠 (自写 13 篇神学小册子 conviction) / 754 Hieria Council 338 主教定圣像异端 / careful framing: 罗马教皇 + 东方三大牧首区都没参加 (787 Nicaea II 后否认其大公性)',
      engagementHook: '「神学辩论真的——但谁在辩也真的」——你 21 世纪有没有过「这件事道理是对的——但谁在说也很重要」的感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n6',
      type: 'narrative',
      content: {
        cn: '762 年——Constantine V 登基 22 年——他下了帝国史上最狠的一招。\n\n他下令关闭整个君士坦丁堡及周边的修道院——\n\n（21 世纪学界 careful：他不是关全帝国所有修道院——主要是首都圈跟小亚细亚——但规模空前。）\n\n修女跟修士被强制还俗——男的去当兵，女的强制嫁人——\n\n我那年 52 岁。\n\n我修院 80 个修女——大部分被强制带走——\n\n我同辈的一个画师修女，我们一起画了 30 年。叫 Theodosia，比我小 3 岁——皇家士兵把她带走那天——\n\n（careful framing 7 年级——我换一种说法——\n\nTheodosia 后来嫁给一个皇宫附近的小军官。她不愿意但没得选，她再没碰过画笔——4 年后病死，49 岁——这是 762 年那场关闭最常见的结局。）\n\n更狠的还有：那一年某天——Constantine V 把一批男修士跟女修女拉到 Hippodrome（赛马场）——\n\n（你 Lens 2 跟 Theodora 一起站过那个 Hippodrome——5 岁穿白衣求职位的地方——230 年后变成另一种戏台。）\n\n他让僧尼一个一个走过赛场——观众嘲笑他们——这是 8 世纪的公开羞辱。\n\nTheophanes《编年史》AM 6257 (公元 765 年) 记下这一场——\n\n（21 世纪 Brubaker & Haldon 2011 careful：Theophanes 是 9 世纪圣像派胜利后写的——可能强化了戏剧性——但 762 年 Hippodrome 游街本身是真的。）\n\n我自己那一天——躲在修院地窖——没出去——\n\n我活下来——\n\n但 Theodosia 没活下来。\n\n这是我 52 岁那年最难的一段——为什么是我活下来——而不是她？',
        en: 'In 762 — Constantine V had reigned 22 years — and he played the harshest hand of his life.\n\nHe ordered the closure of the monasteries of Constantinople and its surrounding region —\n\n(21st-century careful framing: this was not every monastery in the empire — mainly the capital region and Anatolia — but the scale was unprecedented.)\n\nNuns and monks were forced to renounce vows — men into the army, women into forced marriage —\n\nI was 52.\n\nMost of the 80 nuns of my house were taken away —\n\nA fellow painter nun — three years younger than me, named Theodosia, with whom I had painted for thirty years — the day the imperial soldiers took her away —\n\n(7th-grade careful framing — let me say it this way —\n\nTheodosia was later married to a junior officer near the palace — she did not consent but had no choice — she never touched a brush again — four years later she died of illness — at 49 — this was the most common ending of the 762 closures.)\n\nThere was worse: on one day that year, Constantine V led a group of monks and nuns into the Hippodrome —\n\n(In Lens 2 you stood in that Hippodrome with Theodora — the place where as a 5-year-old she had begged for a job in white — 230 years later, another kind of stage.)\n\nHe paraded the religious one by one across the racetrack while the crowd jeered — this was the 8th-century public shaming.\n\nTheophanes\'s Chronographia AM 6257 (i.e. AD 765) records this scene —\n\n(21st-century Brubaker & Haldon 2011 caution: Theophanes wrote in the 9th century from the iconophile victors\' side — likely heightened drama — but the 762 Hippodrome parade itself is real.)\n\nThat day I hid in the monastery cellar. I did not go out —\n\nI lived —\n\nTheodosia did not.\n\nAt 52, this was the hardest stretch — why did I live, and not she?',
      },
      deliverGoal: 'N6 762 Constantine V 关闭首都圈修道院 / 修士去当兵修女强制嫁人 / 同辈画师修女 Theodosia 强制嫁人 4 年后病死 / Hippodrome 游街僧尼 (Theophanes AM 6257 记) / careful framing 9c 圣像派胜利写法 / 「为什么我活下来不是她」',
      engagementHook: '「为什么是我活下来——而不是她？」——你 21 世纪有没有过这种「我跟另一个人差不多——结局完全不同」的疑惑？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n7',
      type: 'narrative',
      content: {
        cn: '775 年 9 月 14 日——Constantine V 死——\n\n我那年 65 岁，还活着。还在那个被关闭过的修院里——表面荒废，内里 12 个老修女偷偷回来——\n\n他儿子 Leo IV 即位——但 Leo IV 5 年后 780 年死——\n\n继位的是 Constantine VI——10 岁——他母亲皇后 Irene 摄政（regent）——\n\nIrene——这个名字 21 世纪 7 年级你可能没听过——但她是拜占庭历史第一个女性单独执政者——\n\nIrene 自己秘密是圣像派。她父亲家族来自希腊雅典，8 世纪雅典是圣像派强地——她从小就在家里偷偷敬圣像——\n\n780 年——她摄政的那一刻——风向变了。\n\n782 年——她下令——逐步松绑 Iconoclasm 法令——\n\n786-787 年——她召开第二次 Nicaea 大公会议（Second Council of Nicaea）——\n\n787 年 9 月 24 日，Nicaea II 正式投票：圣像崇拜「合法」（lawful）。是「敬礼」（veneration）不是「崇拜」（worship）——撤销 754 Hieria——\n\n这场会议参加 350 多个主教——包括罗马教皇代表——这次有了——\n\n（21 世纪学界视 787 Nicaea II 为「第七次也是最后一次正统东西方共同的大公会议」——之后 1054 年东西教会分裂。）\n\n787 年那一年——我 77 岁——\n\n61 年——我 16 岁开始藏画——77 岁等到这一刻——\n\n61 年——你 21 世纪 7 年级听清楚——这不是「下个月」——这是「你父母还没出生 + 你祖父母刚出生」加起来的时间。\n\n我没哭。\n\n我去地窖——把我 16 岁那张麻布包的圣母脸——拿出来。',
        en: 'On 14 September 775 — Constantine V died —\n\nI was 65 — still alive — still inside that monastery that had been "closed" — outwardly derelict, inwardly twelve old nuns had quietly returned —\n\nHis son Leo IV succeeded — but Leo IV died 5 years later in 780 —\n\nNext came Constantine VI — 10 years old — with his mother Empress Irene as regent —\n\nIrene — at 21st-century 7th grade you may not know this name — but she was the first solo female ruler in Byzantine history —\n\nIrene was a private iconophile herself — her father\'s family came from Athens — 8th-century Athens was an iconophile stronghold — and from childhood she had quietly venerated icons at home —\n\nIn 780 — the moment she became regent — the wind shifted.\n\nIn 782 she ordered a gradual loosening of the Iconoclast laws.\n\nIn 786-787 she convened the Second Council of Nicaea —\n\nOn 24 September 787 — Nicaea II formally voted: icon-veneration is lawful — it is veneration, not worship — and it overturned the 754 Council of Hieria —\n\nMore than 350 bishops attended — including representatives of the Pope of Rome — this time —\n\n(21st-century scholarship treats 787 Nicaea II as "the seventh and last truly East-West ecumenical council" — after which, in 1054, the East-West churches split.)\n\nIn 787 I was 77.\n\nSixty-one years — from 16 hiding my first panel to 77 living to see this moment —\n\nSixty-one years — 21st-century 7th grade hear this — that is not "next month" — that is "your parents not yet born plus your grandparents just born" added together.\n\nI did not weep.\n\nI went to the cellar — and lifted out the linen-wrapped Mother of God I had painted at sixteen.',
      },
      deliverGoal: 'N7 775 Constantine V 死 / Leo IV 5 年后 780 死 / Empress Irene 摄政 (拜占庭第一个女性单独执政者 / 私下圣像派) / 786-787 召开 Nicaea II / 787.9.24 圣像派胜利定 veneration 不是 worship / 350+ 主教含罗马教皇代表 / 视为最后一次正统东西方大公会议',
      engagementHook: '61 年——从 16 岁藏画到 77 岁等到合法——你 21 世纪敢想「我等一件事 60 年」的尺度吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n8',
      type: 'narrative',
      content: {
        cn: '787 年秋天——Nicaea II 之后——皇后 Irene 下令：君士坦丁堡所有大教堂的圣像——重画。\n\n包括 Hagia Sophia——\n\nHagia Sophia——你 Lens 1 跟 Lens 2 都进过的那座圆顶——\n\n6 世纪 Justinian 537 年完工——Theodora 同代——里面镶嵌画原本满墙——\n\n730 年 Leo III 法令之后——大部分被刷白——\n\n787 年，77 岁的我被女修院推荐，带 8 个学生（最年轻 17 岁，最老 45 岁）——一起进 Hagia Sophia 重画。\n\n那一天——我们站在圆顶下——抬头看 56 米高的圆顶——\n\n我跟学生们说：\n\n「这座圆顶——537 年由 Anthemius 跟 Isidore 两个数学家用 pendentive 撑起来——\n\n那一年，我们的祖师 5 代往上的师父也站在这里。他师父的师父跟他师父的师父——同一个传承——\n\n圆顶下 532 年死了 30,000 人——一墙之隔。\n\n730 年这里的圣像被刷白。\n\n今天——787 年——我们重画。\n\n你们记住一件事：\n\n这座圆顶——它已经站了 250 年——它会再站很多个 250 年——\n\n它不只是一座教堂。它会经过——很多个名字——\n\n我们——只是它 250 年的一个秋天。」\n\n（21 世纪 7 年级你的视角——Hagia Sophia 1500 年 5 个身份：537 Justinian 拜占庭东正教大教堂 / 6c Theodora 同代 / 8c 我重画圣像 / 1054 East-West Schism 见证 / 1453 Mehmed II 改伊斯兰清真寺 → 1934 Atatürk 改博物馆 → 2020 重改清真寺。）\n\n我那天 77 岁——画了一幅基督圆顶中央像——\n\n那是我一生最大的一幅——\n\n28 年后——815 年——它会被 Leo V 再刷白——\n\n但那天——我不知道——我只知道我在画。',
        en: 'In autumn 787 — after Nicaea II — Empress Irene ordered the icons of every great church in Constantinople restored.\n\nIncluding Hagia Sophia.\n\nHagia Sophia — the same dome you walked into in Lens 1 and Lens 2 —\n\nFinished by Justinian in 537. Contemporary with Theodora. Its interior had once been covered in mosaic.\n\nAfter Leo III\'s 730 edict, most of it was whitewashed.\n\nIn 787 — at 77 — I was nominated by my women\'s monastery — and led eight students (youngest 17, oldest 45) — into Hagia Sophia to paint again.\n\nThat day we stood beneath the dome — looking up 56 meters —\n\nI told my students:\n\n"This dome — in 537 the two mathematicians Anthemius and Isidore raised it on pendentives —\n\nIn that year, the teacher five generations above our teacher\'s teacher also stood here. His teacher\'s teacher and his teacher\'s teacher — the same lineage —\n\nUnder this dome 30,000 died in 532. One wall away.\n\nIn 730 the icons here were whitewashed.\n\nToday — in 787 — we paint again.\n\nRemember one thing:\n\nThis dome — has stood 250 years — it will stand many more 250 years —\n\nIt is not only a church. It will pass through — many names —\n\nWe — are only one autumn of its 250 years."\n\n(21st-century 7th grade — Hagia Sophia\'s 1500-year, 5-identity arc: 537 Justinian Byzantine Orthodox cathedral / 6th-century Theodora contemporary / 8th-century my repainting / 1054 East-West Schism witness / 1453 Mehmed II converted to mosque → 1934 Atatürk converted to museum → 2020 reverted to mosque.)\n\nThat day at 77 — I painted a Christ Pantocrator at the dome\'s center —\n\nThe largest panel of my life —\n\n28 years later — in 815 — Leo V would whitewash it again —\n\nBut that day I did not know — I only knew I was painting.',
      },
      deliverGoal: 'N8 787 67 岁→77 岁带 8 个学生在 Hagia Sophia 重画圣像 ⭐ cross-lens micro-detail / Hagia Sophia 1500 年 5 身份 (537 Justinian / 6c Theodora / 8c Anna 重画 / 1054 Schism / 1453 改清真寺 → 1934 博物馆 → 2020 重改清真寺) / 自己最大一幅 / 28 年后 815 会再被刷白',
      engagementHook: '「我们只是它 250 年的一个秋天」——你 21 世纪能不能 hold 「我做的事不会永久——但仍然要做」这种感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n9',
      type: 'narrative',
      content: {
        cn: '815 年——皇帝 Leo V 下令——第二轮 Iconoclasm——\n\n我那年——按修院记录——105 岁——\n\n（注：8-9 世纪人均寿命 30-40 岁，105 岁这个数字代表「跨整个 117 年圣像派内战的活记忆」叙事 voice。详见本 lens fictionalDisclaimer 字段。）\n\n那年我已经看不太清——但我还能教学生——\n\n815 年 4 月——Leo V 在新一届主教会议上重新立 Iconoclasm 为国法——787 Nicaea II 被重新撤销——\n\n（28 年——787 到 815 年——这是「短暂回归」的全部长度。）\n\n这一轮——比第一轮更精准——\n\n第一轮（726-787）打的是修道院网络——我们能藏。\n\n第二轮（815-843）打的是「藏的人」。皇家暗探挨家挨户搜，找出 30 年前藏起来的圣像——再次销毁——\n\n我学生那一辈（最大的现在 73 岁，最年轻的 45 岁）——这次成了主要受迫害对象——\n\n我那张 16 岁画的麻布包的圣母脸——被搜走——\n\n我画了 89 年——\n\n815 年那天——士兵在我修院搜出 12 张圣像——当我面砸碎——\n\n我那天没说话——\n\n（careful framing 7 年级：我没被打死——他们觉得 105 岁的老修女不值得费力气——这是一种 8-9 世纪的「年龄豁免」——但我学生那一辈不豁免。）\n\n我修院 12 个学生里：4 个被流放，3 个被殴打致残——5 个躲到山里小修院继续——\n\n我活在「我看着第二代被打」的状态。\n\n这比 762 年我自己看朋友被带走——更难。',
        en: 'In 815 — Emperor Leo V ordered — the second wave of Iconoclasm —\n\nThat year — according to the monastery register — I was 105 —\n\n(Note: 8th- to 9th-century life expectancy was 30-40; the 105-year figure carries the narrative voice of 117 years of iconophile memory. See this lens\'s fictionalDisclaimer field.)\n\nThat year I could no longer see well — but I could still teach my students —\n\nApril 815 — at a new bishops\' synod, Leo V reinstated Iconoclasm as imperial law — 787 Nicaea II was overturned again —\n\n(28 years — from 787 to 815 — that is the full length of the "short restoration.")\n\nThis round was more precise than the first.\n\nThe first round (726-787) had struck monastic networks — and we could hide.\n\nThe second round (815-843) struck "the hiders" — imperial agents searched house by house — found the icons hidden 30 years earlier — destroyed them again —\n\nMy students\' generation (the eldest now 73, the youngest 45) — became the primary target this time.\n\nThe linen-wrapped Mother of God I had painted at 16 — was confiscated.\n\nI had painted for 89 years.\n\nThat day in 815 — soldiers searched my monastery — found 12 icons — and broke them in front of me —\n\nI did not speak —\n\n(7th-grade careful framing: I was not beaten to death — they judged a 105-year-old nun not worth the effort — a kind of 8th- to 9th-century "age exemption" — but my students\' generation got no such exemption.)\n\nOf my 12 students: 4 were exiled — 3 were beaten to disablement — 5 fled to mountain hermitages and kept painting —\n\nI lived in the state of "watching the second generation be struck."\n\nHarder than 762, when I watched my friend be taken.',
      },
      deliverGoal: 'N9 815 Leo V 第二轮 Iconoclasm / 修女 105 岁高龄 (虚构 composite — 一肉身做不到 / 代表 117 年活记忆) / 第二轮比第一轮精准 (打「藏的人」搜家) / 学生辈受迫害 (4 流放 3 致残 5 躲山修院) / 16 岁那张圣母脸被搜走砸碎 / 「看第二代被打」比 762 朋友被带走更难',
      engagementHook: '「我看着第二代被打」——你 21 世纪有没有过「我自己受过的不算最难——看下一代受同样的苦最难」的感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n10',
      type: 'narrative',
      content: {
        cn: '约 820 年——我死。\n\n按修院记录——「Anna 修女约百岁高龄逝于本院」——我死的具体那一天没记。\n\n我死的时候——815 第二轮 Iconoclasm 才开始 5 年——结局还没出来——\n\n我学生那一辈，继续藏圣像，继续偷偷画——继续在山里小修院教下一代——\n\n我没看到结局——\n\n但你 21 世纪 7 年级能看到结局——\n\n820 年我死之后 23 年——\n\n843 年 3 月 11 日，一个女人，皇后 Theodora（这个 Theodora 是 9 世纪的，不是你 Lens 2 见过的 6 世纪那个 Theodora——拜占庭历史里有 3 个 Theodora 皇后，careful 不要混）——\n\n她丈夫 Theophilos 皇帝 842 年死——她摄政——\n\n843 年 3 月 11 日，四旬期第一个星期日。她下令：撤销 815 年 Iconoclasm + 重新立 787 Nicaea II 为国法——所有教堂重画圣像——\n\n这一天——拜占庭东正教叫 Triumph of Orthodoxy（正教凯旋日）——\n\n东正教今天每年第一个四旬期星期日仍然纪念——你 21 世纪 7 年级如果有东正教同学——他/她每年还在过这一天——\n\n（同一个 9 世纪 — 拜占庭传教士 Cyril + Methodius 兄弟创了 Cyrillic 斯拉夫字母, 把基督教带给斯拉夫人, 这套字母 21 世纪俄罗斯、乌克兰、保加利亚、塞尔维亚仍在用 — 拜占庭给世界的另一份遗产, 跟我们这条画师传承同代。）\n\n117 年——726 到 843——拜占庭圣像派内战——\n\n两次 Iconoclasm + 两次圣像派胜利——\n\n我学生那一辈活到了 843，3 个还活着。他们走进重新开放的 Hagia Sophia——重新画一张基督圆顶中央像——\n\n那张像，比我 787 年那张更准——更老练——\n\n他们成了——\n\n我没看到——\n\n但他们成了。',
        en: 'Around 820 — I died.\n\nThe monastery register reads: "Sister Anna, near a hundred years of age, departed this house." The exact day of my death was not recorded.\n\nI died only 5 years into the second wave of Iconoclasm. The ending had not yet come.\n\nMy students\' generation kept hiding icons — kept painting in secret — kept teaching the next generation in mountain hermitages —\n\nI did not see the ending —\n\nBut 21st-century 7th grade, you can.\n\nTwenty-three years after my death in 820 —\n\nOn 11 March 843 — a woman — the Empress Theodora (this Theodora was 9th-century — not the 6th-century one you met in Lens 2 — Byzantine history has three Empresses Theodora, do not mix them up) —\n\nHer husband Emperor Theophilos died in 842 — she became regent —\n\nOn 11 March 843 — the first Sunday of Lent — she ordered: 815 Iconoclasm overturned, 787 Nicaea II reinstated as imperial law, icons restored in every church —\n\nThis day Eastern Orthodoxy calls the Triumph of Orthodoxy.\n\nIt is still commemorated on the first Sunday of Lent every year — if you have an Orthodox classmate at 21st-century 7th grade — he or she still keeps this day each year —\n\n(In the same 9th century, the Byzantine missionaries Cyril and Methodius created the Cyrillic alphabet for the Slavic peoples — the script still used in 21st-century Russia, Ukraine, Bulgaria, and Serbia — another Byzantine gift to the world, contemporary with our painter\'s lineage.)\n\nOne hundred and seventeen years — 726 to 843 — the iconophile civil war of Byzantium —\n\nTwo Iconoclasms and two iconophile victories —\n\nMy students\' generation lived to see 843. Three of them were still alive. They walked into a reopened Hagia Sophia and painted a Christ Pantocrator at the center of the dome again —\n\nMore exact than my 787 panel — more practiced —\n\nThey arrived —\n\nI did not see it —\n\nBut they arrived.',
      },
      deliverGoal: 'N10 ~820 Anna 死 ~110 岁 (composite voice 再申明) / 23 年后 843.3.11 Empress Theodora (9c 不是 6c Lens 2 那个 — 3 个同名皇后注意) Triumph of Orthodoxy / 117 年圣像派内战收尾 / 学生 3 人活到 843 走入重开 Hagia Sophia / 「我没看到——但他们成了」',
      engagementHook: '「我没看到——但他们成了」——你 21 世纪能不能想象自己「在死前没看到结局，但仍然为下一代做」？',
      expectsRealAnswer: false,
    },
    {
      id: 'anna-n11',
      type: 'synthesis',
      content: {
        cn: '关于 117 年的拜占庭 Iconoclasm——21 世纪两种说法——\n\n一种（19 世纪到 20 世纪中期主流叙事）：邪恶的 Iconoclast 皇帝（Leo III + Constantine V + Leo V）讨厌艺术——圣洁的圣像派修女修士抵抗——最后正义胜利——\n\n另一种（21 世纪 Brubaker & Haldon 2011 修正）：Iconoclasm 不是「邪恶 vs 圣洁」二元化——是 4 重压力同时作用：阿拉伯军事压力（717-718 围城几乎灭帝国）+ 6 世纪鼠疫之后人口经济崩溃 + themata 军区制改革（皇帝靠军队，军队反圣像）+ 出埃及记 20:4 真实神学辩论——\n\n两种都不完整。\n\n21 世纪 careful framing 真相在中间：\n\n第一：4 重结构压力是真的——Brubaker & Haldon 2011 反 Whig 钢筋是对的——\n\n第二：但是，Theodosia 49 岁病死，是真的。我学生 3 人致残，是真的。我修院 30 张圣像被砸——是真的。\n\n「结构性原因」跟「个人代价」不是非此即彼——\n\n5 代手往下传的画师传承——是真的。\n\n117 年内战——是真的。\n\n我自己作为 composite voice，117 年活记忆，一肉身做不到。但这条传承——是 5 代修女肉身共同做到的——\n\n现在我把这两种读法摆在你面前，请你先掂量这一对——\n\n一种说法：Iconoclasm 是「邪恶 vs 圣洁」——坏皇帝讨厌艺术、要砸圣像，圣洁的修女修士拼死护住信仰，最后正义赢。这是一个有坏人、有英雄、好记的故事。\n\n另一种说法：根本没有「坏人」——是阿拉伯军事压力 + 鼠疫后人口经济崩溃 + 军区制改革 + 真实神学辩论，4 重结构力同时压上来，皇帝跟修女都被卷在里面。这是一个没有坏人、只有压力的故事。\n\n你怎么看这两种读法？哪一种更接近 8 世纪的真实，还是两种各对一半？一个没有「坏人」的解释，你 hold 得住吗，还是你心里更想要一个可以恨的坏皇帝？\n\n这个问题没有标准答案。想 30 秒，写下来。',
        en: 'About the 117 years of Byzantine Iconoclasm — in the 21st-century academy, two stories —\n\nOne (the dominant 19th to mid-20th century narrative): wicked Iconoclast emperors (Leo III, Constantine V, Leo V) hated art — saintly iconophile nuns and monks resisted — and justice won in the end —\n\nThe other (Brubaker & Haldon 2011 revision): Iconoclasm is not "evil vs holy" — it was four structural pressures acting at once: Arab military pressure (the 717-718 siege nearly destroyed the empire) + post-Justinianic-plague demographic and economic collapse + the themata military reform (the emperor depended on the army, and the army leaned anti-icon) + a real theological argument over Exodus 20:4 —\n\nNeither story alone is complete.\n\n21st-century careful framing places the truth in the middle:\n\nFirst: the four structural pressures are real — the Brubaker & Haldon 2011 anti-Whig rebar holds —\n\nSecond — and: Theodosia died at 49. Three of my students were disabled. Thirty icons in my house were smashed. These too are real.\n\n"Structural cause" and "personal cost" are not either/or —\n\nFive generations of hands passing down a painter\'s lineage is real.\n\nA 117-year civil war is real.\n\nI as a composite voice — 117 years of living memory — no single body can carry — but this lineage — five generations of nuns\' bodies carried it together —\n\n"Identity" (a nun, an iconophile) — versus — "craft" (the hand that paints a face) —\n\nAcross 117 years — identity was repeatedly redefined as heresy and as orthodoxy — but the hand of craft — five generations did not stop —\n\nThink for 30 seconds —\n\n21st-century you — "identity" (the group you belong to) and "craft" (the skill in your hand) —\n\nWhich defines you first?\n\nWhich is left at the end?',
      },
      deliverGoal: 'N11 synthesis expectsRealAnswer:true 双 view 掂量 (邪恶 Iconoclast 皇帝 vs 圣洁圣像派 19c 主流 / Brubaker & Haldon 2011 4 重结构压力) — anti-binary 真相在中间 / 「结构性原因」跟「个人代价」不是非此即彼 / 没有坏人的解释 hold 得住吗 / 117 年内战 / hold 矛盾真相 想 30 秒',
      engagementHook: '一种说法是坏皇帝讨厌艺术、圣洁修女抵抗，另一种说法根本没有坏人、只有 4 重结构压力——你掂量这一对，哪一种更接近 8 世纪的真实？想 30 秒，写下来。',
      expectsRealAnswer: true,
    },
    {
      id: 'anna-n12',
      type: 'synthesis',
      content: {
        cn: '我已死 1206 年——你 21 世纪 7 年级跟我做完 image-maker-witness 这一段——\n\n横向看 4 个 receiving-end 没名字的人 voice：\n\n- Anacaona Jr.（虚构合成 1492 AoE Lens）—— 12 岁 Taíno 女孩 / 1495-1504 9 年家族灭族——\n- Aisha（虚构合成 1235 Mali Lens）—— 14 岁 Mande 女孩 / 1413-1419 妈妈被 Songhai raid 带走——\n- 我（虚构合成 8c Anna）—— ~110 岁 Byzantine 修女 / 117 年画师传承——\n\n3 个人——3 个文明——3 个时代——同一个 pattern：\n\n「机构活了——个人故事消失了」\n\n（Lens 2 你见过的 Theodora 是 receiving-end 的另一种——真人 lonely-mediator 走到调停位。我们三个虚构 composite 没有那个位置——只有「藏」「守」「画」。）\n\n843 Triumph of Orthodoxy 是机构胜利——东正教今天每年第一个四旬期星期日还在纪念——\n\n但 Theodosia——762 年被强制嫁人 4 年后病死的我同辈画师修女——\n\nTheophanes《编年史》没记她。\n\n她不在 843 凯旋日里。\n\n她不在《Synodikon of Orthodoxy》（正教信经诵读名单）里。\n\n她只在我这个虚构 voice 里——\n\n再说一次跨 lens：\n\nHagia Sophia 1500 年 5 个身份——\n\n- 537 Justinian 拜占庭东正教大教堂（Lens 1 你见过）\n- 6c Theodora 同代（Lens 2 你见过）\n- 787 我重画圣像（这一节）\n- 1054 East-West Schism 见证\n- 1453 Mehmed II 改清真寺 → 1934 Atatürk 改博物馆 → 2020 重改清真寺\n\n5 个身份共用一个 56 米圆顶——\n\n圆顶不动——名字换 5 次——\n\n你 21 世纪——身边有没有这种「场所活了——但场所里的人换了几代」的感觉？\n\n你家所在的城市，50 年前是谁住？100 年前是谁住？500 年前是谁住——\n\n你不是第一个住的人——\n\n你也不会是最后一个。\n\n你打算在你的「一个秋天」里画什么？',
        en: 'I have been dead 1206 years — at 21st-century 7th grade you have walked this image-maker-witness stretch with me —\n\nLook across to four receiving-end nameless voices:\n\n- Anacaona Jr (fictional composite, 1492 AoE Lens) — 12-year-old Taíno girl / 1495-1504, her family destroyed across nine years —\n- Aisha (fictional composite, 1235 Mali Lens) — 14-year-old Mande girl / 1413-1419, her mother taken in a Songhai raid —\n- Me (fictional composite, 8th-century Anna) — ~110-year-old Byzantine nun / 117-year painter\'s lineage —\n\nThree persons — three civilizations — three eras — one pattern:\n\n"The institution lived. The personal story disappeared."\n\n(The Theodora you met in Lens 2 is another shape of receiving-end — a real person who walked to a lonely-mediator position. The three of us composites do not hold that position — only "hide," "keep," "paint.")\n\nThe 843 Triumph of Orthodoxy is an institutional victory — every first Sunday of Lent, Eastern Orthodoxy still commemorates it —\n\nBut Theodosia — my fellow painter nun, forced into marriage in 762, dead of illness four years later —\n\nTheophanes\'s Chronographia did not record her.\n\nShe is not in the 843 Triumph.\n\nShe is not in the Synodikon of Orthodoxy.\n\nShe is only in this fictional voice of mine —\n\nOne more cross-lens reminder:\n\nHagia Sophia\'s 1500-year, 5-identity arc —\n\n- 537 Justinian, Byzantine Orthodox cathedral (Lens 1, you saw)\n- 6th-century Theodora, contemporary (Lens 2, you saw)\n- 787 my repainting (this node)\n- 1054 East-West Schism, witness\n- 1453 Mehmed II converted to mosque → 1934 Atatürk converted to museum → 2020 reverted to mosque\n\nFive identities sharing one 56-meter dome —\n\nThe dome does not move. The name changes five times.\n\n21st-century — near you — is there a "the place lives, but the people in it have changed across generations" feeling?\n\nThe city you live in — who lived there 50 years ago, 100 years ago, 500 years ago —\n\nYou are not the first to live there —\n\nYou will not be the last.\n\nIn your one autumn — what do you intend to paint?',
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
