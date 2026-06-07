// ─── Scientific Revolution 1543-1687 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 科学革命 · Scientific Revolution 1543-1687
// HSS-7.7 · AP World 4.5 (early modern science + global knowledge networks)
//
// 3 lens 设计 (per 王老师 curriculum decision + Sarah Chen audit 7.5/10):
//   - newton            (perpetrator-actor / system-builder-alchemist-Mint-enforcer) — 1643-1727 极致系统构建者 + 25 年炼金术 + Arianism 异端 + Mint 28 人绞架 + Hooke/Leibniz 学术暴力
//   - mersenne          (lonely-mediator / minim-friar-letter-broker) — 1588-1648 Minim 修士通信网 60-100 人 / 不是「教会反科学」二元
//   - maria-kirch       (receiving-end / astronomer-denied-Berlin-Academy-seat) — 1670-1720 路德派牧师女 / 1702 彗星发现 / 1711 Berlin Academy 拒 / Hevelius 老观测台流亡
//
// 跨 lens micro-detail (Sarah audit 锁定 3 个):
//   1. 1644 Mersenne→Pascal→Newton 1687 Principia Book 2 流体力学链
//   2. 1687.7.5《Principia》出版当天三 lens 时间不齐切片 (Newton 44 / Mersenne 死 39 年 / Maria 17 岁)
//   3. 1710-1712 Berlin 拒 Maria + Cambridge 开除 Whiston + Royal Society 1712 priority 战
//
// 跨 Topic 5+ 缝合:
//   - algebra ← Islamic Rise (al-Khwarizmi《Kitab al-Jabr》825) → Newton Principia 用
//   - 印刷术 ← Renaissance (Gutenberg 1455) → Halley 1685 自费印 Principia
//   - Erasmus 通信网 ← Reformation (1517) → Mersenne 1620s 模式延续 → Royal Society 1660 institutional
//   - Galileo 1633 软禁《Discorsi》← Tang-Song (Su Shi 1080 黄州《赤壁赋》perpetrator 打压 lonely-mediator pattern)
//   - Newton elixir ← Islamic Rise (al-iksir / Jabir ibn Hayyan)
//   - Maria 学徒 ← Mali (Fatima al-Fihri 859 al-Qarawiyyin 创办大学 800 年差)
//   - Maria N12 receiving-end ← 跨 6 文明 1100 年 8 voice (4 真 + 4 虚, Phase 1 Grade 7 收官)
//
// defaultLens = 'maria-kirch' (受影响者优先 + Phase 1 emotional climax)
//
// 4-agent review (5-7+ TBD)
//
// per AUTHORING_PIPELINE.md 11 条铁律 + 第 12 条 (expectsRealAnswer 默认 false / N11+N12 only true)
//
// 来源 staging (5-7+ lens-author):
//   - scientific-revolution-newton.staging.js     (12 nodes / 0 em-dash chain / 8 anti-fab citations)
//   - scientific-revolution-mersenne.staging.js   (12 nodes / 0 em-dash chain / 5 anti-fab citations)
//   - scientific-revolution-maria-kirch.staging.js (12 nodes / 0 em-dash chain / 5 anti-fab + Berlin Academy 1711 minutes 原文)

export var newtonLens = {
  id: 'newton',
  name: 'Isaac Newton',
  nameCn: '艾萨克·牛顿',
  role: 'perpetrator-actor',
  perspectiveTag: 'system-builder-alchemist-Mint-enforcer',
  description: {
    cn: '他是父亲死前 3 个月出生的遗腹子，3 岁被母亲改嫁丢给外婆。22 岁那年鼠疫关校，他一个人回老家做了 18 个月数学，没人指导，没人陪。这一遍让你坐在那间空房间里，看一种被丢弃的怒气，怎么慢慢变成后来压死所有对手的力量。',
    en: 'He is the posthumous son of an illiterate ploughman, handed to a grandmother at three when his mother remarried. This pass sits you in the one room, 22 years on, where plague has shut Cambridge and he works alone for 18 unguided months, watching a discarded boy\'s anger turn into the force that will crush every rival.',
  },
  storyboard: [
    {
      id: 'newton-n1',
      type: 'narrative',
      content: {
        cn: '1643.1.4（新历）我生在 Lincolnshire 的 Woolsthorpe Manor。父亲 Isaac Newton Sr. 是文盲农夫（ploughman），1642.10 死，我出生前 3 月。母亲 Hannah Ayscough 怀着我守寡。\n\ncareful framing：当时英国还在用儒略历（比 Gregorian 公历晚 10 天），所以英国人记我「生于圣诞节 1642」。同年 1.8 Galileo（伽利略）死。Voltaire（伏尔泰）1734《Letters on the English》写「Newton 生在 Galileo 死的那年」——这是 Voltaire 构造的 Whig 火炬传递史诗，别照单全收：我跟 Galileo 时差 16 天，却隔了一整套历法系统。\n\n我活了 84 岁——一个出生时被认为活不过几小时的早产儿，母亲后来回忆我能装进 1 quart 壶里。1643 年的我，一个文盲农夫的遗腹子。',
        en: 'Born January 4, 1643 (Gregorian) at Woolsthorpe Manor, Lincolnshire. My father Isaac Newton Sr., an illiterate ploughman, died October 1642 — three months before me. My mother Hannah Ayscough was a pregnant widow.\n\nCareful framing: England still used the Julian calendar (10 days behind Gregorian), so the English wrote "born Christmas 1642." Galileo died that same January 8. Voltaire\'s 1734 Letters on the English claimed "Newton was born the year Galileo died" — a Whig torch-passing epic Voltaire constructed; don\'t take it at face value. Galileo and I are 16 days apart but separated by an entire calendar system.\n\nI lived 84 years — a premature baby no one expected to survive, who (my mother recalled) could fit inside a one-quart pot. In 1643, the posthumous son of an illiterate farmer.',
      },
      deliverGoal: 'N1 hook — 1643.1.4 出生 (新历 vs 旧历 careful framing) + 父亲 ploughman 死 + Voltaire 火炬传递 Whig + 1 quart 壶早产活 84',
      engagementHook: 'Voltaire 把我跟 Galileo 串成「火炬传递」——但我们隔了一整套历法系统。你怎么读「后世构造的连续性」？',
      expectsRealAnswer: false,
    },
    {
      id: 'newton-n2',
      type: 'narrative',
      content: {
        cn: '1646 我 3 岁，母亲改嫁 63 岁有钱牧师 Barnabas Smith。Smith 不要我，母亲把我留给外婆在 Woolsthorpe 养，自己搬去 Smith 家又生 3 个孩子。\n\nFrank Manuel 1968《A Portrait of Isaac Newton》用精神分析解读：我一辈子 paranoid、终生未婚、跟 Hooke（胡克）/Leibniz（莱布尼茨）学术死战，根源都在 3 岁被母亲抛弃。这是 1960s 框架，现代史学家不全接受。但我 19 岁笔记本自己写过一条罪过：「Threatening my father and mother Smith to burne them and the house over them」（威胁要烧死 Smith、母亲跟房子）。这是我自己写的，不是后人猜的。\n\n1659 Smith 死，母亲召 16 岁的我回家务农。我彻底失败：牛跑了我还在树下读书。舅舅说服母亲送我去 Cambridge。1661.6 进 Trinity 当 sub-sizar——靠补助 + 服侍贵族学生倒夜壶换饭吃。母亲明明有钱，只给我 10 英镑/年。母子冷淡的证据。',
        en: '1646, age 3 — my mother remarried Barnabas Smith, a 63-year-old wealthy rector. Smith did not want me. Hannah left me with my grandmother Margery Ayscough in Woolsthorpe and moved into Smith\'s house, where she had three more children.\n\nFrank Manuel 1968, A Portrait of Isaac Newton ch. 9, reads my life psychoanalytically: lifelong paranoia, vengefulness, lifelong celibacy, lethal feuds with Hooke, Leibniz, Flamsteed — all from being abandoned at three. Manuel\'s framework is 1960s; modern historians do not all accept the chain. But at 19 I wrote in my own notebook a list of sins, including: "Threatening my father and mother Smith to burne them and the house over them." That sentence is mine, not a later guess.\n\n1659 Smith died and Hannah pulled me back to farm at 16. I failed: cattle wandered while I read. My uncle William Ayscough, Cambridge clergyman, persuaded her to send me to Cambridge. June 1661, Trinity College as a sub-sizar — charity student emptying chamber pots for wealthy classmates. Mother could have paid full fees; she sent me 10 pounds a year. Evidence of the coldness.',
      },
      deliverGoal: 'N2 1646 母亲改嫁 + Smith 不要我 + 外婆养 + Manuel 1968 paranoid careful framing + 19 岁烧母亲笔记自证 + 1659 务农失败 + 1661 Trinity sub-sizar',
      engagementHook: '我 19 岁笔记本自己写「想烧死继父跟母亲」——不是后人猜的，是我自己写的。你怎么读「自我承认 vs 后世解读」的差距？',
      expectsRealAnswer: false,
    },
    {
      id: 'newton-n3',
      type: 'narrative',
      content: {
        cn: ' 1665-1666 我 22-23 岁——anni mirabiles（拉丁「奇迹岁月」）。1665 夏 Great Plague 爆发，伦敦 1/4 人口死，Cambridge 关校，我回 Woolsthorpe 老家。18 个月一个人没指导，4 个突破：calculus（我叫 fluxions，没发表）；棱镜证白光是合成；引力反平方律雏形；切线方法 + 级数展开。\n\n苹果故事有三层红旗。来源是 William Stukeley 1726 跟 84 岁的我聊天后 1752 写进《Memoirs》。红旗 1：这是我 84 岁回忆 22 岁，60 年后我已是国家英雄，有动机自我神话化。红旗 2：现存 1665-1666 笔记本里没有「苹果」这个词。红旗 3：Westfall 1980 + Hall 1962 推算我当时算的月球加速度跟苹果比例差 10-20%（用了不准的旧地球半径），是依赖 reconstruction 的范围而非单一数字。我 1666 暂时放弃，20 年后用 Picard 1671 重测半径才算对。\n\nWhig 神话是「苹果掉下，灵感闪光，万有引力诞生」。真相：22 岁雏形 + 18 年闷头算 + 41 岁 Halley 推动才对外讲。',
        en: ' 1665-1666, ages 22-23 — anni mirabiles, "miracle years." Summer 1665 the Great Plague hit London — a quarter of the city died, Cambridge shut. I went home to Woolsthorpe. Over 18 months alone, four breakthroughs: calculus (I called it fluxions, never published); the prism proving white light is composite; the inverse-square gravity in draft; tangent methods and series expansions.\n\nThe apple story — three red flags. Source: William Stukeley talked with me at 84 in 1726 and wrote it into his 1752 Memoirs. Flag 1: source is me at 84 recalling age 22, 60 years on, already a national hero with strong incentive to self-mythologize. Flag 2: no Cambridge UL or Trinity 1665-1666 notebook contains the word "apple." Flag 3: Westfall 1980 ch. 4 and Hall 1962 reconstruct that my 1665 lunar-vs-apple ratio missed by roughly 10-20% (out-of-date Earth radius); the range is reconstruction-dependent, not a single number. I shelved it in 1666 and only got it to fit 20 years later, after Picard\'s 1671 re-measurement.\n\nThe Whig myth: "apple falls, insight strikes, universal gravitation born." The truth: a draft at 22, 18 silent years, then Halley pushing me at 41.',
      },
      deliverGoal: 'N3  1665-1666 anni mirabiles 22-23 + 4 突破 + 苹果 Stukeley 1752 三红旗 careful framing + 月球加速度 10-20% Westfall/Hall reconstruct hedge + 反 Whig',
      engagementHook: '苹果故事来源是我 84 岁回忆 22 岁的事——60 年后我已是国家英雄。你信这种「自我回忆 + 神话化动机」的故事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'newton-n4',
      type: 'narrative',
      content: {
        cn: '1668 我磨镜片造了第一台 reflecting telescope，用凹面镜避开色差（chromatic aberration）。1671 寄一台到 Royal Society，全场惊呼。\n\n1672.1.11 我被选入 Royal Society。2.6 寄第一篇论文「A New Theory about Light and Colours」，棱镜证明白光是合成。2.15 Robert Hooke 写「Considerations」反驳（他主张 wave 理论）。Hooke 语气其实客气，我却读成人格攻击，3 个月内写 4 封怒信威胁退会。被安抚后我把光学完整版压住 30 年不发表。1675.12 第二轮，我匿名寄一篇光学假说，Hooke 又说「这都是我以前讲过的」。\n\n1675.4 Charles II 给 Lucasian Chair 颁永久 dispensation，不必 take holy orders。Iliffe 2017 论证我是直接 lobbyist：否则我要么放弃教席，要么宣誓信 Trinity（作伪证）——1689 Toleration Act 之前 Arianism 仍是刑事罪。\n\nHooke 战只是序幕，这场仗打到 1703 他死才停。',
        en: '1668 I ground mirrors and built the first reflecting telescope — concave mirror, no chromatic aberration. 1671 sent one to the Royal Society. The room gasped.\n\nJanuary 11, 1672, elected to the Royal Society. February 6, my first formal paper, "A New Theory about Light and Colours" — the prism proved white light is composite. February 15, Robert Hooke wrote "Considerations" against it (Hooke was a wave theorist). Hooke\'s tone was polite. I read it as a personal attack. Within three months I wrote four furious letters to Oldenburg threatening to resign. March 1673: "I desire that you will procure that I may be put out." Oldenburg talked me down. From then on I held my full optical work back for 30 years.\n\nDecember 1675, round two. I sent "Hypothesis Explaining the Properties of Light" anonymously; Hooke jumped in: "I said all this already" (his 1665 Micrographia wave theory).\n\nApril 1675, Charles II issued a permanent royal dispensation for the Lucasian Chair — its holder need not take holy orders. Iliffe 2017 ch. 5 argues I lobbied directly. Without it I had to give up the chair or swear belief in the Trinity (perjury): before the 1689 Toleration Act, Arianism was a criminal offense.\n\nThe Hooke battles were prelude. The feud ran 30 years, ending only when Hooke died in 1703.',
      },
      deliverGoal: 'N4 1668 reflector + 1672.1.11 RS 入会 + 1672.2 Hooke Letter on Light 攻击 + 1675-76 第二轮 + 1675.4 Charles II Lucasian dispensation Iliffe 2017 lobbyist',
      engagementHook: 'Hooke 1672.2 写一篇技术反驳——我读成人格攻击，3 个月写 4 封怒信。你怎么读 technical critique 跟 personal attack 的边界？',
      expectsRealAnswer: false,
    },
    {
      id: 'newton-n5',
      type: 'narrative',
      content: {
        cn: ' 1670s 起 25 年（~30 到 ~52 岁），我私下做的事比《Principia》多得多。\n\nAlchemy（炼金术）：Trinity 后院搭炉子烧、蒸馏金属，现存炼金笔记约 100 万字，找 Philosopher\'s Stone（贤者之石）。英文「elixir」← 阿拉伯「al-iksīr」← 8-9c Baghdad 的 Jabir ibn Hayyan；我笔记里 270 处「elixir」直接接到 Abbasid 那一代——Islamic Rise + Scientific Revolution 同一条 800 年链。\n\n神学：现存约 300 万字里神学约 130 万字，比《Principia》(~50 万字) 还长。主题是 Arianism，核心是「Trinity 三位一体是不是真的」。我读 100 万字教父著作后私下结论：Trinity 是 4c 才形成的，不是原始基督教教义。\n\n私下信 Arian，公开装 Anglican 正统。Keynes 1936 拍下我大批手稿，1947 演讲：「He was not the first of the age of reason. He was the last of the magicians」。',
        en: ' From the 1670s onward, 25 years — roughly age 30 to 52 — what I did privately dwarfs the Principia.\n\nAlchemy: a furnace behind Trinity. About 1,000,000 surviving words of alchemical notes. I used symbols like "green lion" and "Mercury of the Philosophers" to log my Philosopher\'s Stone hunts.\n\nEtymological chain: English "elixir" — medieval Latin — Arabic al-iksīr — older Greek xērion. The 8th-9th century Baghdad father of chemistry Jabir ibn Hayyan (750-815, contemporary of al-Khwarizmi) used it. The word appears 270 times in my 1670s notebooks. A direct line to Abbasid Baghdad scholars. Islamic Rise and Scientific Revolution are one 800-year knowledge chain.\n\nTheology: about 3,000,000 surviving words total, of which roughly 1,300,000 are theological. Far longer than the Principia (~500,000). Subject: Arianism — the core question is simply whether the Trinity is real. Nicaea 325 condemned Arius. I read about 1,000,000 words of early Church Fathers and privately concluded the Trinity was a 4th-century formation, not original Christian doctrine.\n\nThe split: privately Arian, publicly Anglican. July 13-14, 1936, Sotheby\'s auctioned my heirs\' Portsmouth manuscripts. Keynes bought 38 lots, half. In a 1947 lecture: "He was not the first of the age of reason. He was the last of the magicians."',
      },
      deliverGoal: 'N5  1670s-1690s 25 年 alchemy 1.3M 字 + Philosopher\'s Stone + elixir ← al-iksir ← Jabir ibn Hayyan cross-Topic + Arianism + 1936 Sotheby\'s Keynes 拍 + Keynes 1947',
      engagementHook: 'Keynes 1947 说我「不是理性时代第一人——是最后的魔法师」。这句话颠覆了你对「现代科学 = 理性」的定义吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'newton-n6',
      type: 'narrative',
      content: {
        cn: '1684.1 London 咖啡馆，Halley（哈雷）+ Hooke + Wren 讨论：「引力按反平方律，行星轨道是什么形状？」Hooke 吹牛能证椭圆却拿不出，Halley 算几个月也失败。\n\n1684.8 Halley 二访 Cambridge 找我，问轨道形状，我答「An ellipse... I have calculated it」，却在乱纸堆里找不到，答应重算，18 个月后寄给他 9 页证明。\n\n之后 18 个月，Book 2「motion in resistive media」直接建在 1644 Mersenne 转手的 Pascal 流体力学上：1644 春 Mersenne 把 Torricelli 水银柱实验讲给 20 岁 Pascal。这条 39 年的链喂进我 Book 2。\n\n1685.6 Halley 自费印刷。Royal Society 没钱：经费花光去印《鱼类志》卖不掉而破产，连 Hooke 工资都发鱼书抵。Halley 30 岁中等收入还是自费约 £150-180，约等于他一年可支配收入。印刷术 1455 Gutenberg → 1543 Copernicus 死前出版 → 1685 Halley 自费印约 250-400 本，一条 230 年的物质链。',
        en: 'January 1684, a London coffeehouse. Halley, Hooke, Wren: "Given an inverse-square law, what is the planetary orbit?" Hooke claims he can prove an ellipse but produces nothing; Halley spends months and fails.\n\nAugust 1684, Halley\'s second Cambridge visit. De Moivre, 1727: "what would the curve be...?" Me — "An ellipse." "How do you know?" "Why, I have calculated it." I rummaged, found nothing, promised to recalculate, and 18 months later sent Halley nine pages proving the inverse-square law and elliptical orbit.\n\nThe next 18 months, Book 2, "motion in resistive media," built directly on Mersenne\'s relayed Pascal fluid mechanics: in spring 1644 Mersenne relayed Torricelli\'s mercury-column to a 20-year-old Pascal. That chain ran 39 years past Mersenne\'s death and emptied into my Book 2.\n\nJune 1685, Halley paid for printing himself. The Royal Society was broke — the year before it had spent the budget on a "History of Fishes" that failed, and paid Hooke in fish-book stock. Halley at 30 had middling income and a murdered father, yet still spent ~£150-180 to print 250-400 copies, roughly a year\'s disposable income.\n\nGutenberg 1455 → printing made Copernicus\' 1543 deathbed publication viable → Halley\'s 1685 self-funded Principia. One 230-year material chain.',
      },
      deliverGoal: 'N6 1684.1 咖啡馆 + 1684.8 Halley 对话 + 1685-87 18 月 + 1644 Mersenne→Pascal→Newton 流体力学链 cross-lens micro-detail #1 + Halley 自费印 (鱼书破产) + 印刷术 cross-Topic',
      engagementHook: 'Halley 30 岁中等收入自费印 Principia——花掉一年收入。如果他没那么做，《Principia》会出版吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'newton-n7',
      type: 'narrative',
      content: {
        cn: ' 1687.7.5《Philosophiæ Naturalis Principia Mathematica》出版，3 卷拉丁文约 510 页。\n\n反 Whig 关键：用几何，不用微积分。我 22 岁就发明微积分，但《Principia》全用 Euclid 几何证明：怕 Hooke 抢先 + 哲学保守。结果 18c 数学家花约 50 年才把这些证明翻回微积分。而微积分本身建在 al-Khwarizmi 825 的 algebra 上（algebra ← al-jabr），没有 825 Baghdad 就没有我的 fluxions——一条 800 年链。\n\n1687.7.5 同日三 lens 时间不齐切片：Lens 1 我 44 岁在 Trinity 拿到第一本。Lens 2 Mersenne 死 39 年，但 Oldenburg 1665 创办的 Philosophical Transactions 那期立刻 review《Principia》。Lens 3 Maria 17 岁在 Saxony 农夫天文学家 Arnold 家做学徒，23 年后才发现彗星，institution 还是不承认她。\n\nLeibniz 1684 已发表独立微积分，Newton-Leibniz 优先权之战的种子从这里埋下。',
        en: ' July 5, 1687: Philosophiæ Naturalis Principia Mathematica published — three Latin volumes, about 510 pages.\n\nThe anti-Whig core: geometry, not calculus. I had invented calculus at 22, but every Principia proof is Euclidean geometry. Two reasons: fear of Hooke (unpublished calculus would let him say "new mathematics, the proof does not count") and philosophical conservatism. 18th-century mathematicians took about 50 years to translate the geometric proofs back into calculus. And the calculus itself rests on al-Khwarizmi\'s 825 algebra (English "algebra" ← Arabic al-jabr) — no 825 Baghdad, no my 1665 fluxions, one 800-year chain.\n\nJuly 5, 1687, cross-lens slice. Lens 1: me at 44 in Trinity, holding Halley\'s first copy. Lens 2: Mersenne 39 years dead, but Oldenburg\'s Philosophical Transactions reviews the Principia in the next issue — a ripple from one Paris evening 43 years earlier reaching Cambridge. Lens 3: Maria, 17, apprentice to the peasant astronomer Christoph Arnold, 23 years before she discovers a comet the institution still will not accept.\n\nLeibniz had published his independent calculus in 1684. The seed of the Newton-Leibniz priority war is planted on this day.',
      },
      deliverGoal: 'N7  1687.7.5 出版 + 几何不用微积分 反 Whig + algebra ← al-Khwarizmi 825 cross-Topic + 三 lens 时间不齐切片 cross-lens #2 + Erasmus → Mersenne → RS',
      engagementHook: '我自己 22 岁发明微积分，《Principia》却全用几何——藏了一手。这是「智慧」还是「怕被超越」？',
      expectsRealAnswer: false,
    },
    {
      id: 'newton-n8',
      type: 'narrative',
      content: {
        cn: '1689 我 47 岁，光荣革命后被 Cambridge 选为议员。议会 13 个月我只发言一次——请求关窗（because he was cold，Westfall 1980）。\n\n1693 The Black Year，50 岁突发癫狂——Lens 1 中段 critical。这年春夏几件事压上来：挚友 Fatio de Duillier（瑞士数学家，60+ 封极密切通信）5 月跟我中断；母亲 1689 死的延迟 grief；25 年 alchemy 大量水银接触。\n\n9.16 我写信 John Locke，明显 paranoid delusion，指控他「endeavoured to embroil me with women」——Locke 根本没做过。\n\n病因有 spectrum：19c Brewster 推 mercury poisoning；20-21c Manuel/Westfall/Iliffe 倾向 emotional collapse（Fatio + 母亲 + Arian 双重生活的 chronic anxiety）。最 honest 的说法：multifactorial。1694 春恢复，1696 进 Mint 后 30 年没复发。',
        en: '1689, age 47, Cambridge elected me to the Convention Parliament. In 13 months I spoke once — to request a closed window (because he was cold; Westfall 1980).\n\n1693, the Black Year, age 50 — the acute breakdown, critical Lens 1 middle. Things piled up that spring and summer: Fatio de Duillier (Swiss mathematician 22 years my junior, 60+ letters of intense friendship) cut contact in May; my mother\'s 1689 death was a delayed grief (she abandoned me at three, yet I sat with her last weeks); and 25 years of alchemy meant heavy mercury exposure.\n\nSeptember 16, 1693, I wrote John Locke a clear paranoid delusion: "being of opinion that you endeavoured to embroil me with women." Locke had done nothing of the kind.\n\nScholars span a spectrum: 19th century Brewster blamed mercury; the 20th-21st lean emotional collapse (Fatio, delayed maternal grief, chronic Arian double-life anxiety). Honest framing: multifactorial. Recovered by spring 1694; Mint work from 1696 shows 30 years with no relapse.',
      },
      deliverGoal: 'N8 1689 Convention Parliament + 关窗一次 + 1693 Black Year 50 岁  + Fatio + 母亲延迟 grief + Pepys + Locke 信原文 + 19c mercury vs 21c emotional collapse hedge spectrum + Spargo & Pounds 1979',
      engagementHook: '我 50 岁给 Locke 写信指控他「想用女人陷害我」——明显 paranoid delusion。「不会犯错的天才」 vs 「中年崩溃」——你怎么读公众形象 vs 真实状态的差距？',
      expectsRealAnswer: false,
    },
    {
      id: 'newton-n9',
      type: 'narrative',
      content: {
        cn: '1696.4 我 53 岁离 Cambridge 任 Royal Mint Warden，1699.12 升 Master，到 1727 死，干了 31 年。\n\n三个 layer：表面是 Montagu 1696 推动 Great Recoinage 回收重铸贬值硬币；中层是 Black Year 后 Cambridge 让我 isolating；深层是钱：Warden 年薪 £400、Master £1500+，Lucasian 教授只 £100。起诉 counterfeiters 是法定职责——我是 chief prosecutor。\n\nWestfall 1980 + Craig 1946 整理档案：1697-1700 三年我起诉 28+ 名伪币犯全部判死刑（绞架 + 内脏剖出焚烧——17c 英国把 counterfeiting 当 high treason），最有名的 William Chaloner 1699.3.22 在 Tyburn 绞死。\n\nLevenson 2009：写《Principia》的同一个我，7 年后亲手送 28+ 人上绞架。这不是「污点」也不是「转型」——是 17c 末英国 state-building 里科学家、公务员、司法的 tight coupling。',
        en: 'April 1696, age 53, I left Cambridge for London as Warden of the Royal Mint, promoted to Master in 1699, and stayed until my death in 1727 — 31 years.\n\nThree layers. Surface: Charles Montagu (Chancellor and my Cambridge friend) was pushing the Great Recoinage, because clipping had badly debased the coin. Middle: post-Black Year, Cambridge felt isolating. Deep: the money — Warden £400/year, Master £1,500+, the Lucasian chair only £100. As Warden, prosecuting counterfeiters was my statutory duty — not amateur detective work; I was chief prosecutor.\n\nWestfall 1980 and Craig 1946, working the archives: in three years (1697-1700) I prosecuted 28+ counterfeiters, all sentenced to death (hanging, then disembowelment and burning — the English penalty for counterfeiting as high treason). The most famous, William Chaloner, hanged at Tyburn on March 22, 1699. I spent 18 months building cases in secret — going to taverns in disguise, working up witnesses.\n\nThomas Levenson, Newton and the Counterfeiter (2009): the man who wrote the Principia sent 28+ people to the gallows seven years later. Not a "stain" and not a "career change" — late-17th-century English state-building tightly coupled scientist, civil servant, and judiciary. I felt no contradiction: Mint work, like Principia mathematics, needed patient detective work.',
      },
      deliverGoal: 'N9 1696.4 Mint Warden 53 岁 + 1699 Master + 三 layer + 1697-1700 28+ 伪币犯绞架 (Westfall ch. 12 + Craig 1946 + Levenson 2009) + Chaloner 1699.3.22 Tyburn',
      engagementHook: '写《Principia》的我 7 年后亲手送 28+ 人上绞架。这是「污点」、「转型」、还是「同一种 patient detective work 在不同领域」？',
      expectsRealAnswer: false,
    },
    {
      id: 'newton-n10',
      type: 'narrative',
      content: {
        cn: ' 1703 Hooke 死，同年我 60 岁当选 Royal Society President，1705 封爵。1710 RS 搬址时 Hooke 唯一的 portrait「丢失」——圈内共识是我至少默许。\n\n同年 Cambridge 因 Arian 异端开除接我 Lucasian Chair 的 Whiston。反讽：我自己也信 Arian 30+ 年，但因我是 Newton 而被默许。\n\n1711.1.18 Berlin Academy 拒绝 Maria Kirch 接任，理由是「让 Frauenzimmer 当 astronomer 会开不光彩先例」。Cambridge 跟 Berlin 同一种 logic——「怕开先例」。\n\n1712-1717 Leibniz priority 战。我 23 岁发明 fluxions 没出版，Leibniz 1684 发表早我 9 年。1712 priority committee 全是我挑的、Leibniz 没机会答辩，我亲手写 70%《Commercium Epistolicum》却以「集体决议」发布（Smith 2004）。这跟 Galileo 1633 软禁写《Discorsi》同一 pattern——执行者打压孤独中介者，反逼出他最强作品。',
        en: ' March 3, 1703, Hooke died; the same year, at 60, I was elected Royal Society President (24 years, the longest tenure), and in 1705 Queen Anne knighted me. In 1710 the Society moved and Hooke\'s only portrait "vanished" — Jardine 2003 finds no smoking gun, but the consensus is at least acquiescence. No confirmed portrait of Hooke survives.\n\nThe same year Cambridge expelled William Whiston — my Lucasian successor — for Arian heresy. The irony: I had been a secret Arian for over 30 years, but because I was Newton, Cambridge looked the other way.\n\nCross-lens micro-detail #3: on 18 January 1711 the Berlin Academy refused Maria Kirch the post left by her husband, the gist (per Schiebinger 1989) being that a Frauenzimmer as astronomer would set an unflattering precedent. Two institutions, one logic: "afraid of setting a precedent, afraid of perception."\n\n1712-1717, the Leibniz priority war. I invented fluxions at 23 and never published; Leibniz published in 1684, nine years before any public hint from me. In 1712 the Royal Society\'s priority committee was all my own picks, and Leibniz had no chance to reply; I wrote 70% of the Commercium Epistolicum but it issued as a "collective verdict" (Smith 2004, surviving manuscripts).\n\nGalileo\'s 1633 house arrest writing the Discorsi and Su Shi\'s 1080 Huangzhou exile writing the Red Cliff Rhapsody share one pattern — a perpetrator-actor system crushing a lonely-mediator who produces his highest work in confinement.',
      },
      deliverGoal: 'N10  1703 Hooke 死 + 1703.11 RS President + 1705 封爵 + 1710 Hooke portrait 消失 (Jardine 2003) + 1710 Whiston 开除 + 1711.1.18 Berlin 拒 Maria cross-lens #3 + 1712-1717 Leibniz 暗箱 (Smith 2004) + 巨人肩上 hedge + Galileo 1633 vs Su Shi 1080 cross-Topic',
      engagementHook: '我 70 岁、封爵、RS President、Mint Master——不需要这场胜利。但还是用 institutional power 暗中碾压 70 岁的 Leibniz。你怎么读「权力达到顶点反而更暴力」？',
      expectsRealAnswer: false,
    },
    {
      id: 'newton-n11',
      type: 'synthesis',
      content: {
        cn: '我 1727.3.20 死，84 岁，London 家中膀胱结石。我是第一个被 Westminster Abbey 国葬的 scientist。\n\nVoltaire 后来把我包装成「理性时代预言家」，启动法国 Enlightenment 的 Newton 崇拜。他笔下的我是 idealized 版——完全没提 alchemy、Arianism、Mint 28 绞架、Leibniz 之战。这是 historical reception 的 selective amnesia：一个人被记成神。\n\n两边同样真。左边：极致 system-builder。1687《Principia》统一 Kepler 椭圆 + Galileo 落体 + Mersenne 通信网 + Descartes 几何 + Pascal 流体，接上 800 年知识链。\n\n右边：系统性暴力执行者。25 年 alchemy + 130 万字 Arian 异端 + Mint 28+ 绞架 + Hooke portrait 消失 + Leibniz 暗箱。\n\n这两边不是「优点 + 缺点」，是同一套心理在不同领域的表现。21c 你身边可能就有这种「极致系统构建 + 系统暴力同体」的人：Big Tech CEO、校长、官员、创业者、父母。',
        en: 'I died March 20, 1727, age 84, at Kensington, of bladder stone. I was the first scientist buried at Westminster Abbey.\n\nVoltaire later packaged me as the prophet of the Age of Reason and launched the French Enlightenment Newton cult (careful framing: his 1734 Lettres philosophiques has no first-person "I saw" — "Voltaire witnessed the funeral" is later inference). His Newton is idealized — not a word on alchemy, Arianism, the 28 Mint hangings, the Leibniz war. The selective amnesia of historical reception — a man remembered as a god.\n\nBoth sides equally true. Left — extreme system-builder: the 1687 Principia unified Kepler\'s ellipses, Galileo\'s fall, Mersenne\'s correspondence, Descartes\' geometry, Pascal\'s fluids, plugged into an 800-year chain (al-Khwarizmi\'s 825 algebra → my 1665 fluxions → the 1687 Principia).\n\nRight — perpetrator of systematic violence: 25 years of alchemy, 1.3 million words of Arian heresy, 28+ hangings, Hooke\'s portrait gone, the Leibniz star chamber, Flamsteed\'s incomplete catalog forced into print (he burned 300 of 400 in 1715).\n\nThese are not "strengths and weaknesses" — the same psychology across different domains. Five 21st-century samples likely live near you: a Big Tech CEO, a school principal, a government official, a startup founder, a parent (extreme household system, child autonomy stripped).',
      },
      deliverGoal: 'N11 expectsRealAnswer:true — 1727.3.20 死 Westminster Abbey 国葬 + Voltaire selective amnesia (1727 在 London careful framing) + 双 view 极致 system-builder vs 系统性暴力执行者 + synthesis weigh: 一体还是可分 + 21c 5 system-builder samples',
      engagementHook: '左边是统一了 800 年知识链的极致系统构建者，右边是送 28 人上绞架、暗算 Leibniz 的系统性暴力执行者。这两边到底是什么关系？有两种读法。一种说：这是同一套心理在不同领域的两个出口，分不开，伟大和冷酷长在同一根筋上。另一种说：这只是两件事恰好发生在同一个人身上，天才归天才，残忍归残忍，可以分开各算各的账。你更同意哪一种？想 30 秒，写下来。',
      expectsRealAnswer: true,
    },
    {
      id: 'newton-n12',
      type: 'synthesis',
      content: {
        cn: '最后——跨文化 6 个 perpetrator-actor、1500 年对照。\n\n1. Genghis Khan（1206）草原系统构建者；同一人西征屠几百万人。\n2. 宋徽宗（北宋）艺术皇帝；同一人主导北宋崩溃 + 1126 靖康之变（Su Shi 1080《赤壁赋》正是这套打压产物）。\n3. Mansa Musa（1324 Mali）Timbuktu 大学；同一人驱赶 12,000 奴隶跨撒哈拉。\n4. Lorenzo de\' Medici（15c）文艺复兴金主；同一人 Pazzi 阴谋后报复。\n5. Justinian（6c）重建罗马帝国；同一人 532 Nika 屠 30,000 人。\n6. 我 Newton（1687）写《Principia》；同一个我 alchemy 异端 + Mint 28 绞架 + 碾压 Leibniz。\n\n6 人、6 文明、1500 年，同一 pattern：极致系统构建 + 系统性暴力 + 同一个人。这不是「都是坏人」，是 perpetrator-actor 这角色在所有文明里都存在，成就与暴力常同体。\n\n21c AP DBQ 训练你 hold contradictions——同时看到光跟影：idealized 的 Newton、国葬、28 绞架都是真的，是同一个我。',
        en: 'Last — six cross-cultural perpetrator-actors over 1,500 years.\n\n1. Genghis Khan (1206) — steppe system-builder; the same man\'s western campaign sacked Bukhara and Merv, millions dead.\n2. Emperor Huizong (Northern Song) — artist-emperor; the same man presided over the Northern Song\'s collapse and the 1126 Jingkang catastrophe (Su Shi\'s 1080 Red Cliff Rhapsody was a product of that suppression).\n3. Mansa Musa (1324 Mali) — Timbuktu university; the same man marched 12,000 enslaved people across the Sahara.\n4. Lorenzo de\' Medici (15c Florence) — Renaissance patron; the same man\'s reprisals after the 1478 Pazzi conspiracy and his family dictatorship.\n5. Justinian (6c Byzantium) — restorer of the Roman empire; the same man ordered the 532 Nika massacre of 30,000.\n6. Me, Newton (1687) — the Principia unified European mathematics and physics; the same me: alchemy heresy, 28 Mint hangings, Leibniz crushed at 70.\n\nSix people, six civilizations, 1,500 years, one pattern: extreme system-building, systematic violence, same person. Not "they were all bad people" — the perpetrator-actor role exists in every civilization, and achievement and violence often inhabit one body.\n\n21st-century AP DBQ asks you to hold contradictions — light and shadow at once. The idealized Newton, the Westminster Abbey funeral, and the 28 Mint hangings are all real. They are the same me.',
      },
      deliverGoal: 'N12 closing meta — 6 perpetrator-actor 跨文化对照 1500 年 (Genghis 1206 / Huizong 1100 / Mansa Musa 1324 / Lorenzo 15c / Justinian 6c / me Newton 1687) + 同 pattern + AP DBQ hold contradictions',
      engagementHook: '走完我这一生——《Principia》统一 800 年知识链、同时把 28 人送上绞架，光和影是同一个我。你会怎么评价这样一个人？再想一步：你身边有没有这种「极致系统构建 + 系统性暴力 + 同一个人」的人（Big Tech CEO / 校长 / 创业者 / 父母都可能是），你会怎么对待 TA？',
      expectsRealAnswer: true,
    },
  ],
};
export var mersenneLens = {
  id: 'mersenne',
  name: 'Marin Mersenne',
  nameCn: '马林·梅森',
  role: 'lonely-mediator',
  perspectiveTag: 'minim-friar-letter-broker',
  description: {
    cn: '他是法国乡下一个农夫的儿子，靠教会奖学金读完 Jesuit 学校，选了最冷门的修会，立誓「成最小事」、不署自己的名字。这一遍让你跟他坐进巴黎那间四米见方的修士单间，看一个不出门的人，怎么靠羽毛笔和邮政马车，把半个欧洲的科学家串成一张网。',
    en: 'He is the son of a French peasant who reached the Jesuit schools on church charity, then chose the coldest order in Paris, one that vowed "the smallest things" and refused to sign its own name. This pass sits you in his four-meter cell, watching a man who never leaves Paris stitch half of Europe\'s scientists into one net by quill and postal coach.',
  },
  storyboard: [
    {
      id: 'mersenne-n1',
      type: 'narrative',
      content: {
        cn: '1588 年 9 月 8 日我生在法国西北 Maine 省（今 Sarthe）一个叫 Oizé 的小村。农民家庭。\n\n你听到「农民家庭」要先停一秒。这跟你印象里科学革命那批主角不一样：Galileo（伽利略）1564 出生于音乐家加数学家家庭，Descartes（笛卡尔）1596 出生于法律贵族家庭，Newton 出生于中等地主家庭。我没有这种背景。Maine 农民意味着第一代识字，靠天主教会教育系统才能走出村子。\n\n1604 年我 16 岁进了 Jesuit（耶稣会）办的 La Flèche 学校，全法最有名的 Jesuit 中学，学了 8 年拉丁文、希腊文、修辞、神学、数学、自然哲学。\n\n一个 micro-detail：Descartes 1606 也进了 La Flèche，比我晚 2 年，我们在同一栋楼读了 6 年。但他小我 8 岁，按年级我们没在一个班——1606-1612 同楼却没说过话。30 年后 1640s 我们成了通信最密的两个人。命运的初次擦肩。\n\nLa Flèche 给了我一辈子的底色：Jesuit 训练 + 数学 + 神学双修。这是我后来能做 broker 的原因。',
        en: 'I was born on 8 September 1588 in a village called Oizé, in the province of Maine (modern Sarthe), northwest France. A peasant family.\n\nHold that fact for a second. It does not fit your picture of 17th-century scientific-revolution figures. Galileo, born 1564 in Pisa, came from musicians and mathematicians. Descartes, born 1596 at La Haye, from a legal noble family. Newton, born 1642 at Woolsthorpe, from middling gentry. I had none of that. A Maine peasant — first-generation literate, walking out of the village only because the Catholic Church ran the schools.\n\n1604, at 16, I entered the Jesuit college at La Flèche (chartered in 1603 by Henri IV, the most famous Jesuit secondary school in France). Eight years there. Latin and Greek. Rhetoric. Theology. Mathematics. Natural philosophy along the Aristotelian line.\n\nOne micro-detail. Descartes entered La Flèche in 1606, two years after me. We were in the same Jesuit building from 1606 to 1612. But he was eight years younger; the form structure kept us apart. We never spoke. Thirty years later, in the 1640s, we became each other\'s most frequent correspondent. Fate brushed us first as strangers.\n\n1604, La Flèche, gave me the lifelong substrate: Jesuit training plus a double track in mathematics and theology. That is why I could later be the broker.',
      },
      deliverGoal: 'N1 hook — 1588.9.8 Maine 农民出生 (反 Whig: 不是贵族 + 不是数学家庭) + 1604 La Flèche Jesuit 入学 16 岁 + Descartes 1606 同校晚 2 年但没说过话 (30 年后才变最密通信) + Jesuit 训练数学 + 神学双修是 broker 底色',
      engagementHook: '1606-1612 Descartes 跟我在同一栋 Jesuit 楼里 6 年没说过话。30 年后我们成了通信最密的两个人。你身边有这种「擦肩 30 年才认识」的人吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mersenne-n2',
      type: 'narrative',
      content: {
        cn: '1611 年 7 月我 22 岁，在 Paris 加入 Minim Order（拉丁 Ordo Minimorum「最小者修会」）。\n\n这名字本身就值得停一下：Franciscan 1209 创立时已叫「小兄弟会」（Friars Minor）；1435 年 Saint Francis of Paola 又创 Minim，「比 Friars Minor 还小」，谦卑加倍版。立誓四条：贫穷、贞洁、服从，加一条独有的——永久素食（不吃肉、乳制品、蛋）。\n\n这在 1611 年的 Paris 是反潮流的。年轻人涌进的是 Jesuit（干练 + 全球传教 + 政治权力）跟 Oratorian（讲究学术 + 培养主教），Minim 是冷门，很多人觉得是「过时的中世纪苦修」。\n\n我为什么选 Minim？一是 humility 哲学：核心不是「成大事」是「成最小事」，跟我后来的 broker 角色完美对接（broker 不署自己名字）。二是时间：素食生活 + 最少行政事务，给我留下大量时间研究数学、神学、自然哲学。\n\n1611-1619 这 8 年我在 Minim 修道院学习教书（1612 祝圣为神父），学希腊文、希伯来文、数学。8 年没出版，但脑子里建起一张 17 世纪欧洲所有可读学问的清单。',
        en: 'July 1611, at 22, I joined the Order of Minims in Paris — Ordo Minimorum, "Order of the Least."\n\nStop on the name. The Franciscans were already "Friars Minor"; in 1435 Saint Francis of Paola founded a smaller offshoot, Minim, "smaller than Minor" — humility doubled. The vows: poverty, chastity, obedience, plus a unique fourth — perpetual Lenten life, no meat, dairy, or eggs, ever.\n\nIn 1611 Paris this was countercultural. Young men flooded into the Jesuits (disciplined, global mission, political power) or the Oratorians (scholarly, bishop-track); the Minims were cold, dismissed as "outdated medieval austerity."\n\nWhy I chose Minim. First, the humility: it does not vow to do great things but the smallest things — a perfect fit for the broker role I would later hold, since a broker does not sign his name. Second, time: the vegetarian regimen and minimal administrative duties left me hours every day for mathematics, theology, and natural philosophy.\n\n1611 to 1619 in the Paris Minim convent, studying and teaching (ordained priest in 1612): Greek, Hebrew, mathematics. Eight years of nothing published — but in my head a list was forming of every readable scholar in 17th-century Europe.',
      },
      deliverGoal: 'N2 1611.7 加入 Minim Order 22 岁 + 「最小者」修会 (Franciscan offshoot 1435 创 + 永久素食 + humility 加倍) + 反潮流选择 (1611 Paris 主流 Jesuit/Oratorian) + 选 Minim 两个理由 (broker 不署名 + 时间研究) + 1611-19 8 年学希腊+希伯来+数学没出版',
      engagementHook: '1611 Paris 主流是 Jesuit 加 Oratorian。我选 Minim「最最小者」。「成最小事」哲学跟 broker 角色完美对接，broker 不署自己名字。你怎么读「不署名」这种身份选择？',
      expectsRealAnswer: false,
    },
    {
      id: 'mersenne-n3',
      type: 'narrative',
      content: {
        cn: ' 1619 年我 31 岁，调到巴黎 Place Royale 修道院（今 Vosges 广场西侧）。那个单人 4 米见方的 cell，成了我之后 29 年的全部物理空间。\n\n1619-1623 我经历两件大事。\n\n第一件是信仰危机。1619-1620 我深读 Fludd（英国神秘主义者）跟 Bruno（1600 被烧死的多元宇宙论者），看到欧洲哲学最大的危机：hermeticism（神秘学）+ 自然魔法 + 占星 + 炼金被大量「自然哲学家」当成「真科学」。如果 mechanical philosophy（一切现象由可量化的物质运动解释）站不起来，基督教神学就会被泛神论吞掉，上帝变成「世界灵魂」。\n\n第二件是反击。我用机械哲学 + 数学 + Jesuit 神学三套武器，1623 出版 1900 多页的《Quaestiones in Genesim》逐句反驳 Fludd、Bruno、占星术，一夜成名。\n\ncareful framing：我不是反魔法的「科学先锋」，是反 hermeticism 的天主教神学家。Peter Dear 1988 论证：我不是「现代科学家穿了修士袍」，而是「Counter-Reformation 修士做出后来叫「科学」的事」。这个区分对你是反 Whig 的钢筋。',
        en: ' 1619, at 31, I was transferred to the Minim convent at the Place Royale in Paris (today\'s Place des Vosges). The cell, a single-occupant room four meters square, was to be my entire physical space for the next 29 years.\n\n1619-1623, two large events. First, a crisis of faith: I read deep into Robert Fludd (English hermeticist) and Giordano Bruno (burned by the Inquisition in 1600) and saw the largest crisis of early-17th-century philosophy — hermeticism, natural magic, astrology, alchemy were being treated as "real science." If mechanical philosophy (everything explained by quantifiable matter-in-motion) could not stand, Christian theology would be eaten by hermetic pantheism, God dissolving into "world-soul."\n\nSecond, the counterstrike. With three weapons — mechanical philosophy, mathematics, Jesuit theology — I published Quaestiones in Genesim in 1623, over 1,900 pages annotating Genesis verse by verse, every verse a charge against Fludd, Bruno, and astrology. It made me known overnight.\n\nCareful framing: I was not the "anti-magic science pioneer," but a Catholic theologian against hermeticism. Peter Dear 1988 makes it explicit — I am not "a modern scientist in a friar\'s habit," but "a Counter-Reformation friar doing what we later call science." For a 21st-century reader, that distinction is the structural anchor against Whig history.',
      },
      deliverGoal: 'N3  1619 调 Place Royale Minim cell (4 米见方住 29 年) + 1619-20 信仰危机读 Fludd + Bruno (hermeticism 危机 = 上帝变世界灵魂) + 1623《Quaestiones in Genesim》1900 页机械哲学 + 数学 + Jesuit 神学三武器 + careful framing Peter Dear 1988「修士 mainstream 不是科学家穿修士袍」反 Whig 钢筋',
      engagementHook: '我不是「现代科学家穿了修士袍」，我是「Counter-Reformation 修士做出后来叫「科学」的事」。同一个我，两种 framing，结果一样动机不同。你怎么读这种「反 Whig」区分？',
      expectsRealAnswer: false,
    },
    {
      id: 'mersenne-n4',
      type: 'narrative',
      content: {
        cn: '1623-1648 这 25 年，我做了一件 17 世纪没人做过的事：让我的 Place Royale cell 变成欧洲自然哲学的邮政交换台。\n\nde Waard 编了 17 卷《Correspondance du P. Marin Mersenne》，约 3000 封现存信，核心圈 60-100 人。\n\n4 个最有故事的：帮 Galileo 走私《Discorsi》；为 Descartes《Meditationes》收 6 组 reply；把 Torricelli 数据讲给 20 岁 Pascal；请流亡的 Hobbes 写 Third Objections。另外 8 个 hub（Fermat、Gassendi、Roberval、Beeckman、Huygens、Peiresc、Haak、Hartlib）各延伸出几十人。\n\n地图覆盖半个西欧，我却没出过 Paris，靠羽毛笔 + 邮政马车（Paris 到 Florence 走 3 周）。\n\n跨主题钩子：同期 Jesuit 利玛窦 1607 跟徐光启合译 Euclid《几何原本》前 6 卷——中国第一次接触欧氏几何，这张中欧知识网比我的 Paris 网还早 10-20 年。\n\n25 年我没结婚、没出国，只在 cell 里写信，却连起了欧洲自然哲学。',
        en: '1623-1648, 25 years (ages 35 to 60), I did what nobody in the 17th century had done: I made my Place Royale cell the postal switchboard of European natural philosophy.\n\nCornelis de Waard\'s Correspondance du P. Marin Mersenne (17 volumes) gathers about 3,000 surviving letters; historians put the core circle at 60-100. I did not write to everyone equally — I had a sized inner circle.\n\nThe four with the strongest stories: Galileo, under house arrest writing the Discorsi — I organized its smuggling out; Descartes, writing the Meditationes — he sent me the manuscript and I gathered six sets of Objections; Pascal, twenty in spring 1644 — I laid Torricelli\'s vacuum data in front of him myself; Hobbes, in exile in Paris — I asked him for the Third Objections. Eight more hubs (Fermat, Gassendi, Roberval, Beeckman, Huygens, Peiresc, Haak, Hartlib) each radiated dozens more.\n\nThe map covers half of Western Europe, yet I never left Paris — only a quill and the postal carriage (Paris to Florence about three weeks).\n\nCross-Topic hook: in the same period the Jesuit Matteo Ricci and Xu Guangqi co-translated the first six books of Euclid\'s Elements in 1607 — China\'s first encounter with Euclidean geometry. That China-Europe knowledge network predated my Paris one by ten to twenty years.\n\nFor 25 years I never married, never left the country, only wrote letters in a cell — and stitched European natural philosophy together.',
      },
      deliverGoal: 'N4 1623-48 25 年 letter-broker — de Waard 17 卷 ~3000 封信 + 60-100 人核心圈 careful framing (Peter Dear 1988 60-70, 其他 100) + 12 通信对象地图 (Galileo Florence, Descartes Holland, Pascal Paris, Hobbes Paris, Fermat Toulouse, Gassendi Provence, Roberval Paris, Beeckman Holland, Huygens Hague, Peiresc Aix, Haak England, Hartlib London) + Paris-Florence 3 周 + Paris-Hague 6 天 + 没出过 Paris 但把 Paris 变中央',
      engagementHook: '我没出过 Paris，25 年，羽毛笔加信纸加邮政马车。但我把欧洲自然哲学连了起来。一个不动的 broker 撬动 8000 公里的网。你怎么读「静止 hub vs 流动 nodes」？',
      expectsRealAnswer: false,
    },
    {
      id: 'mersenne-n5',
      type: 'narrative',
      content: {
        cn: ' 1633 年 6 月 22 日我 44 岁，听到消息：Galileo 70 岁被 Roman Inquisition 判「强烈疑似异端」、被迫弃绝日心说、终身软禁，只因他 1632《对话》公开支持 Copernicus 的日心说。那天 Paris 自然哲学家都坐立不安：Descartes 立刻把《Le Monde》锁进抽屉。\n\n但我做了不一样的事。1633-1638 这 5 年，我用通信网帮 Galileo 把软禁中写的《Discorsi》走私出意大利：藏在 Noailles 公爵的外交行李里经法国到 Leiden，1638 由新教书商 Elzevir 出版（Inquisition 管不到）。整个 pipeline 我组织（Drake 1978）。\n\n1638《Discorsi》一出，50 年后成了 Newton《Principia》力学的直接前身——没有这 5 年走私网，Newton 力学就建不到 Galileo 之上。\n\nWhig 爱讲「教会反科学 vs 自由科学」，但事实是：1633 一个 Catholic 修士在 Catholic Paris 帮 Catholic Galileo 在 Lutheran Leiden 出禁书。我不是教会的对立面，是教会内部 + 科学传播者的双重身份。',
        en: ' 22 June 1633, at 44, I heard the news: Galileo, 70, condemned by the Roman Inquisition as "vehemently suspected of heresy," forced into a public abjuration of heliocentrism, sentenced to indefinite house arrest — all because his 1632 Dialogue openly defended Copernicus\'s 1543 heliocentrism. Copernicus had published only on his deathbed to avoid the Church\'s reach; ninety years later his theory put Galileo on trial.\n\nThat day every natural philosopher in Paris held his breath: Descartes locked his finished Le Monde in a drawer (found only after he died); Gassendi halted his Astronomia.\n\nI did something different. 1633-1638, I used the correspondence network to smuggle Galileo\'s Discorsi (the foundation work of mechanics) out of Italy: hidden in the Duc de Noailles\' diplomatic luggage, via France to Leiden, printed in 1638 by the Protestant Elzevir beyond Inquisition reach. I organized the whole pipeline (Drake 1978).\n\nThe Discorsi came out in 1638 and became the direct precursor of the mechanics in Newton\'s 1687 Principia — without that smuggling network, Newton could not have built on Galileo.\n\nWhig history loves the binary "church against science." The actual fact: in 1633 a Catholic friar in Catholic Paris organized a Catholic\'s banned book into Lutheran Leiden (Biagioli 1993; Finocchiaro 2005). I was not the church\'s opposite — I was inside the church and inside science transmission at once.',
      },
      deliverGoal: 'N5  1633.6.22 Galileo 审判我 44 岁 + Descartes 锁《Le Monde》23 年 + Gassendi 停笔 + 我组织 1633-38 5 年走私网 (Paris-Florence-Hague Huygens-Leiden Elzevir) +《Discorsi》1638 出版变 Newton 1687 力学前身 + 反 Whig 钢筋 (Catholic 修士帮 Catholic Galileo 在 Lutheran Leiden 出版) + Biagioli 1993 + Finocchiaro 2005 cite',
      engagementHook: '1633 一个 Catholic 修士在 Catholic Paris 组织帮 Catholic Galileo 在 Lutheran Leiden 出版禁书。这跟你印象里「教会反科学 vs 自由科学」的二元故事，哪一个更接近真相？',
      expectsRealAnswer: false,
    },
    {
      id: 'mersenne-n6',
      type: 'narrative',
      content: {
        cn: ' 1641 年我 53 岁，做了 17 世纪哲学最重要的一次 collaborative project。\n\nDescartes 1640 寄给我《Meditationes de Prima Philosophia》手稿，想从命题 cogito ergo sum「我思故我在」重建全部知识。他提了个史无前例的请求：先把稿寄给最强反对者写 objections、他写 replies、三者一起印。这种 public peer review 之前没人做过，我一口答应、亲自做总编辑。\n\n一年里往返约 30 次邮件。6 组反对者：Caterus（经院哲学）、我自己、Hobbes（唯物论）、Arnauld（奥古斯丁主义）、Gassendi（经验主义）、Bourdin（亚里士多德主义）。1641 年 8 月出版 700 页杰作。\n\n你哲学课本里的 Cogito ergo sum 不是孤独天才的产物，而是 6 个反对者 + 30 次邮件敲 6 遍才定型的——collaborative 哲学。\n\n我自己的 Second Objections 最 sharp，攻击他神存在论证的循环论证；他没说服我，我把这点印进书里——不同意 Descartes 却帮他出书，broker 不站队的又一证明。',
        en: ' 1641, at 53, I ran the most important collaborative project of 17th-century philosophy.\n\nDescartes sent me his Meditationes de Prima Philosophia in 1640 — six meditations rebuilding all knowledge from one indubitable proposition: cogito ergo sum, "I think therefore I am." He made an unprecedented request: do not publish directly; first send the draft to Europe\'s strongest opponents for Objections, he writes Replies, print all three together. This public peer review had no 17th-century precedent. I agreed at once and made myself chief editor.\n\nOver 1640-1641 I sent it out, collected Objections, returned them, collected Replies — thirty round trips of mail. Six sets of Objections: Caterus (scholastic), me (theologian-mathematician), Hobbes (materialist), Arnauld (Augustinian), Gassendi (empiricist), the Jesuit Bourdin (Aristotelian). Published in Paris, August 1641 — a 700-page dialectical masterpiece.\n\nCogito ergo sum, the proposition in your textbook, was not the lonely-genius product of Descartes by his stove — it was hammered six times by six opponents and thirty round trips of mail I organized. Collaborative philosophy.\n\nMy own Second Objections were the sharpest, attacking the circularity in Descartes\'s ontological proof of God. He did not convince me, and I printed my disagreement straight into the book — Mersenne disagrees with Descartes yet publishes him. The broker takes no side.',
      },
      deliverGoal: 'N6  1641 Descartes《Meditationes》6 组 reply 我 53 岁组织 + 30 次邮件往返 + 6 组反对者 (Caterus / Mersenne 自己 / Hobbes / Arnauld / Gassendi / Bourdin) + 1641.8 Paris 出版 + Cogito ergo sum 是 collaborative 不是孤独天才 + 我自己 Second Objections 攻击 Descartes ontological proof 不站队',
      engagementHook: 'Cogito ergo sum「我思故我在」，你哲学课本看到的孤独天才命题，其实是 6 个反对者加 30 次邮件往返敲出来的 collaborative 产物。你怎么读「孤独天才神话 vs collaborative 真相」？',
      expectsRealAnswer: false,
    },
    {
      id: 'mersenne-n7',
      type: 'narrative',
      content: {
        cn: ' 1644 年春我 56 岁，一封信改变了 17 世纪物理学。\n\nTorricelli（Galileo 最后一个学生）寄来信和数据。1643 年 6 月他做了人类第一次真空实验：水银管倒立后上方留出 24 厘米空隙。按「自然憎恶真空」（horror vacui）传统这不可能，但实测就是存在了。\n\n我立刻意识到这是物理学根基级的发现，同时做了两件事。第一，亲手去 20 岁的 Paris 神童 Pascal 家演示；他当场震动，余生 18 年的真空研究核心来自这一夜。第二，写信给 Roberval、Descartes、Hobbes、Gassendi，把「真空可能存在」传到 5 城。\n\n下游：1648 年 9 月 Pascal 在 Puy-de-Dôme 山顶做了人类第一次大气压海拔实验。careful framing：他 9.19 做完，我 9.1 已死，没看到结果。\n\n更长的链：1644 Mersenne→Pascal→1662 Boyle\'s Law→1687 Newton《Principia》Book 2。Newton 的 baseline 是我转手的 Torricelli 实验，他不知道 Pascal 是 20 岁那年我 hook 的。跨 lens 共享时刻 #1，一根因果链穿过 4 代人。',
        en: ' Spring 1644, at 56, one letter changed 17th-century physics.\n\nTorricelli (Galileo\'s last student) sent me a letter and data from Florence. In June 1643 he had performed the first vacuum experiment in human history: a mercury tube, inverted, left an empty 24 cm space above the column. Two thousand years of horror vacui ("nature abhors a vacuum") said those 24 cm could not exist; his measurement said they did.\n\nI saw at once this was foundational physics, and did two things at the same time. First, I went to the house of the 20-year-old Parisian prodigy Blaise Pascal and demonstrated the mercury experiment myself; he was struck on the spot, and the remaining 18 years of his vacuum research came out of that one evening. Second, I wrote to Roberval, Descartes, Hobbes, Gassendi — "vacuum may exist" travelled to five cities out of one room in Florence.\n\nDownstream: in September 1648 Pascal performed the first altitude-atmospheric-pressure experiment at the summit of Puy-de-Dôme. Careful framing: he finished on 19 September; I had died on 1 September. I never saw the result.\n\nThe longer chain: 1644 Mersenne → Pascal → 1662 Boyle\'s Law → 1687 Newton\'s Principia Book 2 on fluid dynamics. Newton\'s baseline was the Torricelli experiment I handed over in 1644, and he did not know Pascal had been hooked at 20 by me. Cross-lens shared moment #1 — one causal chain through four generations.',
      },
      deliverGoal: 'N7  1644.spring Torricelli 寄真空实验数据 56 岁 + 我两件事同时 (1) 亲手讲给 20 岁 Pascal (2) 通信网传 5 城 + 1648.9.19 Pascal Puy-de-Dôme 实验我 1648.9.1 已死没看到 + 1644 Mersenne→Pascal→1653→Boyle 1662→Newton 1687 Principia Book 2 流体力学链  cross-lens 共享时刻 #1',
      engagementHook: 'Newton 1685 写《Principia》Book 2 那一夜，桌上摊着 Pascal 1653。他不知道 Pascal 是 20 岁那年我 hook 的。一根因果链穿过 4 代人。你身边有这种「不知名 hook 启动后世」的事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mersenne-n8',
      type: 'narrative',
      content: {
        cn: '1623-1648 这 25 年，我除了做 broker，也是个 active researcher——不只是邮政员。\n\n第一，Mersenne primes（梅森素数）。1644 我研究 2^n-1 何时是素数，列了一组指数（后来发现部分错了）。但这名字流传下来：21 世纪 GIMPS（1996）用全球分布式计算找它们，当前最大素数 2^82,589,933-1（2018，24,862,048 位）就是一个，cryptography 里还在用。\n\n第二，《Harmonie Universelle》（1636）里我第一个用实验测声速：早期炮口闪光法得约 448 米/秒（误差约 30%），1636 改用回声法测得约 316 米/秒（现代值 343，误差只约 8%）。1636 年欧洲没人测过声速，做到约 8% 相当惊人；后来 Newton、Halley、Laplace 才推到 0.1%。\n\n第三，弦振动公式 f ∝ (1/2L)√(T/μ)，21 世纪高中物理课本还在用，叫「Mersenne 定律」。\n\n所以 careful framing：我不是「单纯邮政员」，是 17 世纪 working scientist，只是 mediator 角色把我自己的研究遮住了。',
        en: '1623-1648, for 25 years, apart from being a broker I was an active researcher — not only a postman.\n\nFirst, Mersenne primes. In 1644 I studied when 2^n − 1 is prime and listed a set of exponents (some later found wrong). But the name "Mersenne primes" stuck: the 21st-century GIMPS project (founded 1996) uses distributed computing to hunt them, the current largest known prime 2^82,589,933 − 1 (2018, 24,862,048 digits) is one, and they still appear in cryptography.\n\nSecond, Harmonie Universelle (1636, 1,500 pages): I was the first to measure the speed of sound experimentally. The cannon-flash method gave about 448 m/s (about 30% error); the echo method in 1636 gave about 316 m/s (modern value 343, only about 8% off). Nobody in Europe had measured it before; about 8% accuracy in the 17th century is remarkable. Newton, Halley, and Laplace later tightened it to 0.1%.\n\nThird, the law of vibrating strings: f ∝ (1/2L)√(T/μ), still in 21st-century physics textbooks as Mersenne\'s Law.\n\nSo, careful framing: I am not "only a postman" — I am a working 17th-century scientist whose own research the broker role hid from later eyes.',
      },
      deliverGoal: 'N8 我自己研究 active researcher 不只 broker — Mersenne primes 1644 列表 (含错处 n=67/257 + 漏 n=89/107) + 21c GIMPS 1996 + 当前最大素数 2^82,589,933-1 + cryptography +《Harmonie Universelle》1636 1500 页 + 声速测两次: 早期炮口闪光法 ~448 m/s 30% 误差 → 1636 回声法 ~316 m/s ~8% 误差 (接近现代 343) careful framing 17c 首测 + 弦振动公式 Mersenne 定律 21c 物理课本',
      engagementHook: '我列的 Mersenne primes 表有错，但 21c GIMPS 加全球分布式计算加 cryptography 还在用我 1644 的 framework。我 1636 用回声法第一个测声速，就做到约 8% 精度。你怎么读「第一个去做这件事」本身的价值——哪怕工具还很粗糙？',
      expectsRealAnswer: false,
    },
    {
      id: 'mersenne-n9',
      type: 'narrative',
      content: {
        cn: '1648 年 9 月 1 日我 60 岁，死在 Place Royale 修道院 cell 里，死因肺脓疡（医生开错刀，脓引流不畅）。临终前我让人把通信网最后一批未回的信烧掉：「不要让别人看我答应过又没做的事。」\n\n这一天要放进 17 世纪欧洲大背景里读。1648 年 9 月 17 日（我死后 16 天）Westphalia 和约签订，结束 30 Years\' War（1618-1648 Catholic-Protestant 大战）。死人数 Wilson 2009 估 4-8M。\n\n把抽象数字落到具体地点：1631 年 Magdeburg 屠城——Tilly 帝国军破城后一夜屠 80% 人口，25,000 平民只剩 5,000，是 17 世纪欧洲单事件最大屠杀。Galileo、Descartes、我都听到了，但没人能做什么。\n\ncareful framing：Scientific Revolution 不是发生在和平时代，是发生在欧洲史上最血腥的宗教战争里。我 25 年的通信网常因战线被切断、信使被抢、城市被围。我没死在战争里，但我所有通信对象都活在战争阴影下。\n\n9.1 我死、9.17 Westphalia 签字、9.18 Pascal 完成实验——三件事 17 天内，我一件都没看到。',
        en: '1 September 1648, at 60, I died in my cell at the Place Royale Minim convent, of a lung abscess (the surgeon mis-cut, the pus did not drain). At the end I had the last unanswered letters in my pile burned: "do not let people see what I promised and did not deliver."\n\nThat one day must be read against the European backdrop. On 17 September 1648 (16 days after my death) the Peace of Westphalia was signed, ending the Thirty Years\' War (1618-1648, Catholic-Protestant warfare across the Holy Roman Empire). The death toll, by Wilson 2009, is 4-8 million — the wide range because 17th-century census records are poor.\n\nThe abstract number must land somewhere: the 1631 sack of Magdeburg, where Tilly\'s Imperial army killed 80% of the population in one night — 25,000 civilians, only 5,000 survivors, the largest single-event massacre of 17th-century Europe. Galileo, Descartes, and I all heard. None of us could do anything.\n\nCareful framing: the Scientific Revolution did not happen in peacetime — it happened during the bloodiest religious war in European history. My 25 years of correspondence were repeatedly cut by front lines, robbed couriers, besieged cities. I did not die in the war, but every one of my correspondents lived under its shadow.\n\nOn 1 September I died, 17 September Westphalia was signed, 18 September Pascal finished Puy-de-Dôme — three things within 17 days, and I saw none of them.',
      },
      deliverGoal: 'N9 1648.9.1 死 60 岁肺脓疡 + 临终烧未回信件 + 同年 Westphalia (9.17 + 10.24) + 30 Years\' War 死 ~800 万 careful framing (Parker 1990s + Wilson 2009 4-8M 范围) + 1631.5.20 Magdeburg 25,000 屠 80% (Tilly 帝国军) + 17 年我夹在写信跟读屠杀之间 + 17c Scientific Revolution 不是和平时代是宗教战争里 + 9.1 死 9.17 Westphalia 9.18 Pascal Puy-de-Dôme 三件事 17 天内',
      engagementHook: '我 25 年写信，同时 25 年读 Magdeburg 屠 25,000 人。Scientific Revolution 不是和平时代发生的，是欧洲史上最血腥宗教战争里发生的。这跟你印象里的「科学革命温和岁月」差多远？',
      expectsRealAnswer: false,
    },
    {
      id: 'mersenne-n10',
      type: 'narrative',
      content: {
        cn: ' 我死后，欧洲发生一件结构性的事：我的「个人 broker」模式被 institutionalize 成正式 Academy。1660 年 London 的「invisible college」（含我核心通信对象 Haak、Hartlib）创立 Royal Society，秘书 Oldenburg 办《Philosophical Transactions》（1665，世界最老科学期刊）做 peer review——他是我的制度版分身。1666 Paris、1700 Berlin 同模式。\n\n两个跨 lens 共享时刻：#2 1687.7.5《Principia》出版当天我已死 39 年，但 Oldenburg 建的机制让 Philosophical Transactions 立刻 review 它——我 1644 hook Pascal 那夜的 ripple 43 年后到达。#3 同期 Berlin 拒绝 Maria Kirch、Cambridge 以「Arian 异端」开除 Whiston。institution 的代价是「身份决定 visibility」：女人、异端被赶，同样信 Arian 的 Newton 却被默许。我的 lonely-mediator 角色已被它吞掉。',
        en: ' Twelve years after my death, a structural shift took place: my "individual broker letter-network" model was institutionalized into formal Academies.\n\nNovember 1660, a London "invisible college" (Theodore Haak and Samuel Hartlib among them, two of my core correspondents) plus Boyle and Wren founded the Royal Society. First Secretary Henry Oldenburg institutionalized my letter-broker model: he started Philosophical Transactions in 1665, the oldest scientific journal in the world, still published today, and peer-reviewed submissions — my institutional doppelgänger. The 1666 Paris Académie and the 1700 Berlin Academy were the same model continued.\n\nTwo cross-lens shared moments. #2: on 5 July 1687, the day Principia came out, Newton received the first copy at Cambridge while I had been dead 39 years — but Oldenburg\'s machine had its Philosophical Transactions review Principia at once. The ripple of one 1644 evening, when I hooked Pascal, arrived in Cambridge 43 years later.\n\n#3: 1710-1711, the Berlin Academy refused Maria Kirch the astronomer post left by her husband (the gist, per Schiebinger 1989, that employing a Frauenzimmer would set an unflattering precedent), and Cambridge expelled Newton\'s Lucasian successor William Whiston for "Arian heresy." The price of institutional formation was that identity now decides visibility: a woman and a heretic were thrown out, while Newton — privately Arian the whole time — was a Newton and looked away from. My lonely-mediator role, seventy years on, had been swallowed by the institution.',
      },
      deliverGoal: 'N10  1648-1660 死后 letter-network 模式 institutionalize + 1660 Royal Society + Henry Oldenburg 1665《Philosophical Transactions》21c 还出 + Mersenne institutional doppelgänger + 1666 Académie + 1700 Berlin Leibniz Mersenne 孙辈 + cross-lens 共享时刻 #2 (1687.7.5《Principia》Mersenne 死 39 年但 Oldenburg 机制立刻 review) + #3 (1710-1712 Berlin 拒 Maria + Cambridge 开除 Whiston + 「身份决定 visibility」institution 形成代价)',
      engagementHook: '我 1648 死时是「个人 broker 模式」。70 年后 institution 形成，但代价是「身份决定 visibility」：Maria 女人被赶加 Whiston 异端被赶加 Newton 同样 Arian 但装不知道。institution 形成解决了什么，又制造了什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'mersenne-n11',
      type: 'synthesis',
      content: {
        cn: '我 1648.9.1 死，60 岁。25 年通信网，3000 封信，60-100 人核心圈。一辈子干了什么？\n\n身份层：Maine 农民出生 → La Flèche Jesuit → Minim「最最小者」→ 1623《Quaestiones in Genesim》建反 hermeticism 阵地 → 帮 Galileo 走私《Discorsi》→ 组织 Descartes 6 组 reply → 转手 Torricelli 给 20 岁 Pascal。核心身份不是「教会反科学的对立面」，是 Minim 修士 + 科学 broker，两边都不完全属于。\n\n这种「两边都不属于」的人，21 世纪你见过吗？想 30 秒。几个样本：移民二代（回 A 国被当外国人，在 B 国被叫外来者）；跨国谈判中介（双方都给信息却都不信任他）；同声传译（听懂所有人却不属于任何代表团）；牧师（夹在神圣 vs 世俗之间）。\n\n这几种 lonely-mediator 跟我的处境结构相同。你身边、你自己有这种人吗？这种身份是负担、优势，还是两者都是？\n\n我 25 年的答案是「两者都是」：没结婚、没头衔，却用 cell 里的羽毛笔连了半个西欧。代价是孤独，回报是 broker 才有的全景视角。你怎么读这种「孤独跟视角同体」？',
        en: 'I died on 1 September 1648 at 60. Twenty-five years of correspondence, three thousand letters, sixty to one hundred core correspondents. What did the life amount to?\n\nThe identity layers: born a Maine peasant; La Flèche Jesuit; Minim Order, "the Least"; the Place Royale cell; 1623 Quaestiones in Genesim, anti-hermeticism position established; smuggling Galileo\'s Discorsi; organizing the six Replies for Descartes\'s Meditations; handing Torricelli to the 20-year-old Pascal. The core identity is not "the opposite of church-against-science" — it is Minim friar plus science broker, belonging to neither side fully.\n\nIn the 21st century have you met that kind of person? Think for 30 seconds. Some samples: the second-generation immigrant (foreign back in A, an outsider in B); the international mediator (both sides feed him information, neither trusts him); the simultaneous interpreter (understood everyone in the room, belongs to no delegation); the pastor (not an ordinary believer, not a secular elite, wedged between sacred and secular).\n\nThese share my structural position. In your circle, your family, yourself, is there someone wedged between two sides, belonging to neither? Is that identity a burden, an advantage, or both?\n\nMy own answer is: both. No marriage, no title — but the quill in the cell stitched together half of Western Europe. The cost was loneliness; the return was the broker\'s vista no single-side participant could see. How do you read the loneliness and the perspective living in the same body?',
      },
      deliverGoal: 'N11 expectsRealAnswer:true — 核心身份 Minim 修士 + 科学 broker 两边都不属于 + 21c 5 个 lonely-mediator 样本 (移民二代 / 跨国谈判中介 / 同声传译 / 跨界顾问 / 修士牧师) + synthesis weigh: 夹在中间主要是代价还是力量 + 我 25 年答案「两者都是」+ 「孤独跟视角同体」',
      engagementHook: 'Minim 修士加科学 broker，我夹在两边、哪边都不完全属于，孤独和视角是同一件事。但如果一定要你掂量一下，「夹在中间」对一个人来说主要是什么？有两种读法。一种说：主要是代价，他失去了归属，没婚姻、没头衔、孤独死，被夹住的人是被牺牲掉的。另一种说：主要是力量，正因为不站任何一边，他才能看到任何 single-side 看不到的全景，这是别人换不来的视角。你更同意哪一种？想 30 秒，写下来。',
      expectsRealAnswer: true,
    },
    {
      id: 'mersenne-n12',
      type: 'synthesis',
      content: {
        cn: '最后，跨文明 5 个 lonely-mediator 对照——同一角色在不同文明里。\n\n1. 我 Mersenne（17c 法国 Minim 修士）：夹在天主教会与新生科学之间。\n2. Stephen Langton（13c 英格兰大主教，见大宪章）：1215 在 King John 跟 baron 之间起草 Magna Carta，两边都不是。\n3. Erasmus（16c 荷兰，见宗教改革）：拒绝在 Luther 跟天主教之间站队、被两边骂；他的通信网是我的前身。\n4. las Casas（16c 西班牙修士，见大航海）：为印第安人辩护，却被两边都当成另一边的人。\n5. 耶律楚材（13c Khitan，见蒙古帝国）：草原帝国与 Han 文明间的双语 broker，救千万 Han 农民却说「是为蒙古财政」。\n\n5 人、5 文明、5 世纪，同一结构：lonely-mediator + 两边都不属于 + 孤独死 + 后世评价远高于生前。这不是「都是好人」，是这角色在所有文明里都存在，成就跟孤独同体。21c AP DBQ 训练你 hold contradictions——同时看到 broker 的价值与代价。Whig 爱讲「世俗 vs 宗教」，但我证明：修士不是「迷信」的对立面，是 broker。',
        en: 'Last, five cross-civilizational lonely-mediators — the same role across cultures.\n\n1. Me, Marin Mersenne (17c French Minim friar): wedged between the Catholic Church and the new science; I died sixteen days before Westphalia, never seeing my network become the Royal Society, Académie, Berlin Academy.\n2. Stephen Langton (13c English archbishop, see Magna Carta): in 1215 at Runnymede he drafted the Magna Carta between King John and the barons, being neither king nor baron.\n3. Erasmus (16c Dutch, see Reformation): refused to take sides between Luther and Rome, was abused by both; his 600-person network was the direct ancestor of mine.\n4. Bartolomé de las Casas (16c Spanish friar, see AoE): spent 50 years defending the indigenous Americans, yet the Spanish treated him as a traitor and the indigenous as Spanish.\n5. Yelü Chucai (13c Khitan, see Mongol Empire): bilingual broker between Genghis\'s steppe empire and Han civilization, saved tens of millions of Han peasants yet said it was "for Mongol fiscal sustainability."\n\nFive people, five civilizations, five centuries, same structure: lonely-mediator, belonging to neither side, posthumous reputation far higher than the living one. This is not "they were all good people" — the role exists in every civilization, and achievement and loneliness often inhabit one body. 21st-century AP DBQ asks you to hold contradictions — the broker\'s value and cost at once.\n\n"Counter-Reformation Catholic friar" and "Scientific Revolution broker" are the same me. Whig historians love the binary "secular versus religious," but I am the refutation: the friar is not the opposite of "superstition" — the friar is the broker. Are you a link on this chain?',
      },
      deliverGoal: 'N12 closing meta — 5 lonely-mediator 5 文明对照 (Mersenne 17c French / Stephen Langton 13c English Magna Carta / Erasmus 16c Dutch Reformation / las Casas 16c Spanish AoE / Yelü Chucai 13c Khitan Mongol) + Erasmus 600 人通信网是我前身 + Las Casas 1542 同年我 54 岁 + 同 pattern 5 世纪 + bilingual broker 两边都不属于 + 后世评价高于生前 + AP DBQ hold contradiction + 反 Whig (Whig「世俗 vs 宗教」二元——1644 Mersenne 修士不是迷信对立面是 broker)',
      engagementHook: '走完我这一生——3000 封信连起半个西欧、却没婚姻没头衔孤独死，孤独跟视角是同一件事。你会怎么评价这种「夹在中间、两边都不属于」的人？再想一步：你身边，你的家庭，或者你自己，有没有这样一个 broker，你会怎么对待 TA（或者怎么看待自己）？',
      expectsRealAnswer: true,
    },
  ],
};
export var mariaKirchLens = {
  id: 'maria-kirch',
  name: 'Maria Winkelmann Kirch',
  nameCn: '玛丽亚·温克尔曼·基尔希',
  role: 'receiving-end',
  perspectiveTag: 'astronomer-denied-Berlin-Academy-seat',
  defaultLens: true,
  description: {
    cn: '她是萨克森乡下一个路德派牧师的女儿，父亲死前教她读 Latin，13 岁那年父母双亡。叔叔把她送到一个白天种地、晚上观星的农夫家里，做了 9 年学徒。这一遍让你跟她坐进那个农夫家的小院子，看一个进不了任何大学的孤儿，怎么用 Latin 笔记和别人的望远镜，把自己练成一个观测者。',
    en: 'She is the daughter of a Lutheran pastor in a Saxon village, taught Latin by her father before he and her mother both died when she was 13. Her uncle apprenticed her to a farmer who plowed by day and observed the stars by night. This pass sits you in that farmhouse courtyard, watching a girl barred from every university train herself into an astronomer with another man\'s telescope.',
  },
  storyboard: [
    {
      id: 'maria-n1',
      type: 'narrative',
      content: {
        cn: '1670 年 2 月 25 日，我生在 Saxony 的 Panitzsch，一个离 Leipzig 东 10 公里的小村。父亲 Matthias Winckelmann 是路德派牧师（Lutheran pastor）。\n\n路德派牧师跟天主教神父不一样：神父不能结婚，路德派牧师可以娶妻生子。这是 1517 年 Martin Luther 宗教改革后德国新教的特色，也是为什么我能生在一个有书的家庭。\n\n宗教改革那一课你做过：Luther 1530s 推动 universal literacy（普及读写，因为新教徒要自己读 Bible）。结果之一是 17 世纪末 Saxony 农村女孩识字率比英国、法国高。\n\n但 careful framing：「能读 Bible」不等于「能学 Latin、数学、天文」。识字普及了，高级学问还是男性专属。我能学 Latin，是因为父亲在家里教我。这是 anomaly（例外），不是 norm。\n\n1683 年我 13 岁，父母相继去世。三十年战争后中欧人口少 30%、疾病横行，父母双亡的孩子很常见。叔叔 Justinus Toellner 把我接走，他也是路德派牧师，继续教我 Latin 跟神学。\n\n13 岁孤儿，能读 Latin，在 Saxony 农村——这是我故事的起点。',
        en: 'On 25 February 1670 I was born in Panitzsch, a small village in Saxony, ten kilometers east of Leipzig. My father, Matthias Winckelmann, was a Lutheran pastor.\n\nA Lutheran pastor is not a Catholic priest. A Catholic priest cannot marry; a Lutheran pastor takes a wife and raises children. This is one consequence of Luther\'s 1517 Reformation, and one reason I was born into a household with books.\n\nIn the Reformation Topic you walked through, Luther in the 1530s pushed universal literacy, because a Protestant was to read the Bible directly, without a priest. One result: by the late 17th century, literacy among rural Saxon girls was higher than among rural English and French girls.\n\nCareful framing: "able to read the Bible" is not "able to study Latin, mathematics, astronomy." Basic literacy was widespread; advanced learning still belonged to men. I could learn Latin because my father taught me at home. That made me an anomaly, not a norm.\n\nIn 1683, when I was 13, my father died, and my mother soon after. In late-17th-century central Europe, after the Thirty Years\' War of 1618-1648, the population had dropped by roughly 30 percent; disease was constant, and orphaning common. My uncle Justinus Toellner took me in. He too was a Lutheran pastor, and he kept teaching me Latin and theology.\n\nThirteen, an orphan, able to read Latin, in the Saxon countryside. This is where my story begins.',
      },
      deliverGoal: 'N1 1670 出生 Saxony Panitzsch 路德派牧师女儿 / Reformation 1530s universal literacy 17c 末 Saxony 农村女孩识字率高 / careful framing「读 Bible 不等于学 Latin/数学/天文」/ 1683 父母双亡 / 13 岁孤儿叔叔 Toellner 抚养教 Latin / 在 Saxony 农村 anomaly 不是 norm',
      engagementHook: '一个家庭背景给你「能进门」的机会——你 21 世纪有没有过这种「我能做这件事，是因为家里有人教过我」的感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'maria-n2',
      type: 'narrative',
      content: {
        cn: '1683 年 13 岁，叔叔把我送到 Sommerfeld 跟 Christoph Arnold 当学徒。\n\nArnold（1650-1695）是 Saxony 一个奇怪的人：白天种地、晚上是 self-taught peasant astronomer，自己磨镜片、1683 年还独立观测到那年的大彗星。他收我进家当 live-in apprentice（住家学徒）——这是 17 世纪欧洲跟医学、木工一样的 standard 学徒制。\n\n我跟他一家同住 9 年（1683-1692），学 Latin（天文学的 working language）、球面三角学、用他的望远镜观测、写报告。\n\n想象一下：我一辈子没上过大学一天，因为欧洲所有大学都不收女性、直到约 1900 年。我全部的天文知识来自这种中世纪 guild 遗留的学徒制。\n\n跨主题钩子：马里那课的 Fatima al-Fihri 859 年在 Fes 创办 al-Qarawiyyin 大学（至今还在运营）。859 年伊斯兰世界的女性能创办大学，1683 年欧洲的我连旁听都摸不到。这不是「伊斯兰对女性更好」，是「institution 形成期 vs 成熟期决定 historical visibility」——800 年差。',
        en: 'In 1683, at 13, my uncle sent me to Sommerfeld to apprentice with Christoph Arnold (1650-1695), a strange figure: farmer by day, self-taught peasant astronomer by night, who ground his own lenses and in 1683 independently observed that year\'s great comet. He took me in as a live-in apprentice — the standard 17th-century model, the same as medicine and carpentry apprenticeships.\n\nI lived with his family for nine years (1683-1692), learning Latin (astronomy\'s working language), spherical trigonometry, observation through his 4-foot refractor, and how to write observation reports.\n\nPicture this: I never spent a single day in a university, because no European university admitted women — a wait that lasted until around 1900. All my astronomy came from an apprenticeship carried forward from the medieval guild system.\n\nA cross-Topic hook: in the Mali Topic you met Fatima al-Fihri, who in 859 founded al-Qarawiyyin in Fes with her father\'s inheritance (it still runs today). In 859 a woman in the Islamic world could found a university; in 1683 in Christian Europe I could not even sit in on a lecture. This is not "Islam was kinder to women" — it is "the formation phase versus the mature phase of an institution decides who becomes historically visible." Eight hundred years apart.',
      },
      deliverGoal: 'N2 1683-1692 13-22 岁 Christoph Arnold 学徒 9 年 (live-in apprentice — 中世纪 guild 系统遗留) / Saxony self-taught peasant astronomer 1683 独立观测大彗星 / 学 Latin + 球面三角学 + 4ft 折射式望远镜 + 写观测报告 / 一辈子没上过大学一天 (欧洲所有大学不收女性到 ~1900) / cross-Topic 钩子 Mali Fatima al-Fihri 859 创办 al-Qarawiyyin 大学 800 年差 / careful framing「institution 形成期 vs 成熟期决定 historical visibility」',
      engagementHook: '你 21 世纪 7 年级有没有「我学的东西不在学校里——是某个人手把手教的」这种经验？这种学法跟学校学法哪个更深？',
      expectsRealAnswer: false,
    },
    {
      id: 'maria-n3',
      type: 'narrative',
      content: {
        cn: '1692 年 5 月我 22 岁，嫁给 Gottfried Kirch——那年 50 岁、Berlin 有名的天文学家，他要找新妻子也要找天文搭档。中间人是 Arnold。\n\ncareful framing：22 岁嫁 50 岁，你可能直接皱眉，这 normal，但请 hold 30 秒——三层同时成立、不互相否定：第一层「下嫁老男人」，第二层「权力交易换天文 access」，第三层「17c astronomy dual-pair 的 standard entry point」（Schiebinger 1989）。\n\n第三层什么意思？17 世纪天文学是 home-based craft，观测要在自家屋顶连续做、一人撑不下来，所以「夫妻档」是 standard 工作单元。Alic 1986：17 世纪末德国 96 个 astronomer 里 14 个是女性，几乎全是 dual-pair。\n\n唐宋那课的李清照也是「夫妻档」：跟赵明诚编《金石录》、1129 丈夫死后独立完成——但她名字进了文学史，因为她写词；我 1710 丈夫死后也独立工作，名字却没进 astronomy 史，因为「14% 反映的是看不见的家庭劳动」。\n\n22 岁那春天我不知道这些，只知道我能进 Berlin、用最好的望远镜。',
        en: 'In May 1692, at 22, I married Gottfried Kirch — 50, a well-known Berlin astronomer who needed a new wife and an astronomy partner. Arnold was the matchmaker.\n\nCareful framing: 22 marrying 50 — you may already be frowning. That reaction is normal, but hold it 30 seconds; all three layers hold at once and do not cancel each other. Layer one: "marrying down to an old man." Layer two: "power exchange for telescope access." Layer three (Schiebinger 1989): "the standard entry point of the 17th-century astronomy dual-pair."\n\nWhat does layer three mean? 17th-century astronomy was home-based craft; observation had to run continuously from a rooftop, and one person could not carry it, so the husband-wife dual was the standard working unit. Alic 1986: of 96 documented German astronomers in the late 17th century, 14 were women, nearly all in dual-pair households.\n\nIn the Tang-Song Topic you met Li Qingzhao, a "couple-team" who compiled the Records on Metal and Stone with her husband and completed it alone after he died in 1129 — her name made it into literary history because she wrote ci poetry. I worked alone after my husband died in 1710, but my name did not make it into astronomy history, because "the 14 percent reflects the invisible labor inside the household workshop" (Schiebinger 1989, p. 86).\n\nThat spring at 22 I did not know any of this. I only knew: Berlin, the best telescope.',
      },
      deliverGoal: 'N3 1692.5 22 岁嫁 Gottfried Kirch 50 岁 / Arnold 介绍人 / careful framing 三层: 不是「下嫁」也不是「权力交易」是「17c astronomy dual-pair 模式 standard entry point」(Schiebinger 1989 ch. 4 pp. 82-90) / 17c 末德国 96 人 astronomer 14 人女性 (Alic 1986 ch. 5 pp. 121-150) / cross-Topic 钩 Tang-Song 李清照 12c 词人夫妻档 1129 丈夫死独立完成《金石录》——李清照名字进文学史 Maria 名字没进 astronomy 史 / 「14% 反映的不是德国对女性开放是家庭作坊看不见的劳动」',
      engagementHook: '一件事三层 framing——layer 1「下嫁」/ layer 2「权力交易」/ layer 3「dual-pair standard」——你 21 世纪能 hold 「同一件事三层不是相互否定」的复杂吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'maria-n4',
      type: 'narrative',
      content: {
        cn: '1692-1700 年我 22-30 岁，跟 Gottfried 在 Saxony、Leipzig 工作 8 年，生 4 个孩子（3 个活到成年、全部进入天文），用同一台望远镜、同一份数据、同一份 Latin 报告。\n\n但 1700 年 7 月，Brandenburg 选帝侯 Friedrich III 创办 Berlin Akademie der Wissenschaften，第一任 President 是 Leibniz，跟 1660 London、1666 Paris 同模式的德国版。Academy 主要 revenue 是卖 calendar，所以第一任 astronomer 的工作是「编 calendar + 观测」。Gottfried 任此职，月薪 500 thaler（柏林工匠年薪约 100-150 thaler，这是中产）。\n\n我没有 official 职位，却每晚用它的望远镜观测、记录、校对 Gottfried 的报告——但 payroll 上没有我名字。\n\nSchiebinger 1989 一句很 sharp：「这跟现代「家庭主妇 GDP 不计入」是同一逻辑的 17 世纪版本。」1700 年的 Berlin 已经在用「无偿家务劳动」逻辑，只是用在天文学家妻子身上。',
        en: 'From 1692 to 1700, ages 22 to 30, Gottfried and I worked in Saxony and Leipzig for eight years and had four children (three lived to adulthood, all became astronomers). We used one telescope, one set of data, one Latin report.\n\nThen, on 11 July 1700, Friedrich III, Elector of Brandenburg, founded the Berlin Akademie der Wissenschaften; its first president was Leibniz (Newton\'s rival, a "grandchild" of Mersenne\'s network), and like the 1660 London and 1666 Paris academies it was the German version of the same model.\n\nThe Academy\'s main revenue was selling calendars, so the first astronomer\'s job was "edit the calendar and observe." Gottfried took it in July 1700 at 500 thaler a month (a Berlin craftsman earned 100-150 a year, so this was solid middle class).\n\nI had no official post, yet every night I used the Academy telescope — observed, recorded, edited Gottfried\'s reports — and my name was not on the payroll. Schiebinger 1989, a sharp sentence: "This is the 17th-century version of the same logic that today excludes housework from GDP." Berlin in 1700 already ran that "unpaid household labor" logic — just on the wife of an astronomer.',
      },
      deliverGoal: 'N4 1692-1700 22-30 岁 Saxony+Leipzig 8 年 / 4 孩子 (3 活成 全部天文): Christfried 1694 / Christine 1696 / Margaretha 1698 / 1700.7.11 Brandenburg 选帝侯 Friedrich III 创办 Berlin Academy / Leibniz 第一任 President / 模仿 1660 Royal Society + 1666 Académie 德国版 / Gottfried 任第一任 astronomer 月薪 500 thaler 中产阶级 / Maria 没 official 职位 / Academy payroll 没她名字 / Schiebinger「现代家庭主妇 GDP 不计入是同一逻辑 17c 版本」',
      engagementHook: '「家庭主妇 GDP 不计入」——你 21 世纪听过这种说法吗？同一种逻辑 1700 年已经在 Berlin 跑——你怎么看「同样的工作付工资 vs 不付工资」?',
      expectsRealAnswer: false,
    },
    {
      id: 'maria-n5',
      type: 'narrative',
      content: {
        cn: '1702 年 4 月 21 日我 32 岁，这是我整辈子最重要的一夜。\n\n凌晨我一个人值下半夜班，用 Gottfried 的望远镜对准 Aquarius，看到一颗模糊的星比前几夜移动了。记下坐标、等半小时再观测，确认是彗星。叫醒 Gottfried 确认后，4 天后他写信 Leibniz。\n\n信原文清楚写明「my wife Maria... discovered a comet」。但 Berlin Academy 1702 年 5 月的 official announcement 却单挂 Gottfried 名。\n\n为什么？三层：Gottfried 没故意偷（信里说是我）；我自己也接受了 dual-pair convention；最难 hold 的是 institution 压力——我不是 Academy 成员，挂 Gottfried 名才能进学术 record。那夜一颗彗星归丈夫名下，我等他死后才公开 claim。\n\n末尾一层 careful framing：罗马的 Bianchini、Maraldi 前一夜早约 2 小时瞥见过同一天体却没识别为彗星——所以最精确的说法是：我是首个正确识别为彗星、首个独立发现彗星的女性，但不是「第一个看见的人」。',
        en: 'On 21 April 1702, at 32, the most important night of my life.\n\nShortly past midnight I was alone on the late-night shift (Gottfried, who ran the early night, was asleep). I pointed his 4-foot refractor at Aquarius and saw a faint star that had moved from where I had logged it on previous nights. I recorded its coordinates, waited half an hour, observed again, confirmed it was a moving body — a comet. I woke Gottfried; he confirmed; four days later he wrote Leibniz.\n\nThe letter is plain: "my wife Maria... discovered a comet." But the Berlin Academy\'s May 1702 official announcement carried only Gottfried\'s name.\n\nWhy? Three layers: Gottfried did not "steal" it (his letter says it was me); I myself accepted the dual-pair convention; and hardest to hold, the pressure was institutional — I was not a member, so only Gottfried\'s name would let the comet enter the official record. That night a comet was credited to my husband, and I waited until he died in 1710 to claim it publicly.\n\nOne more careful framing at the end, so it does not blunt the night: in Rome, Bianchini and Maraldi had glimpsed the same body about two hours earlier the night before but did not identify it as a comet. So the most precise statement is: I was the first to correctly identify it as a comet, the first woman to discover one independently, but not, in the absolute sense, "the first person to see it."',
      },
      deliverGoal: 'N5 1702.4.21 凌晨 32 岁独立发现彗星 Aquarius 用 Gottfried 4ft 折射式望远镜 / Gottfried 1702.4.25 信 Leibniz 原文「my wife Maria... discovered」/ 但 Berlin Academy 1702.5 announcement 单挂 Gottfried 名 / Schiebinger 三层 framing: Gottfried 没故意偷 + Maria 同意 dual-pair convention + 真实压力 institutional (Maria 单署 Academy 拒入 official records) / careful framing 放末尾不削弱 emotional impact: 现代 Kronk Cometography Vol 1 catalog 为 C/1702 H1 + 堵漏 罗马 Bianchini/Maraldi 前夜早约 2 小时瞥见但未识别为彗星 → Maria 是首个识别为彗星者 + 首位女性独立发现者 (非绝对首个看见者) 三层无内部矛盾 / 1710 丈夫死后才公开 claim',
      engagementHook: '一颗彗星——三层 framing「丈夫没偷 + 我自己同意 + institution 强制」——你 21 世纪能 hold 「没人是坏人但结果坏」的复杂吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'maria-n6',
      type: 'narrative',
      content: {
        cn: '1700-1710 年我 30-40 岁，在 Berlin Academy 10 年：跟 Gottfried 共同编星表、编 calendar 卖给农民、教 4 个孩子天文，方式跟 Arnold 当年教我一样。\n\n这 10 年有一个时刻我想停下来说。1687 年 7 月 5 日 Newton《Principia》在 London 出版，那年我 17 岁、在 Saxony 学 Latin、根本不知道。看这个时间不齐的切片：那天 Newton 44 岁在剑桥拿到刚印好的《Principia》；Mersenne 已死 39 年，但他的通信网已成 1660 Royal Society + 1666 Académie；而我 17 岁在农夫家里抄 Latin 笔记。三个人、三个地方、同一天，历史厚度不同。\n\n还有一根 cross-lens 钩子：1644 Mersenne 给 Pascal 的流体力学信，通过 Pascal 1648、Boyle 1662 传到 Newton 1687《Principia》Book 2，跑了 43 年。我那套半夜分工 + Latin 报告也是这条链的延续。我跟 Mersenne 从没见过，但我每晚用的 protocol 是他写的。',
        en: 'From 1700 to 1710, ages 30 to 40, ten years at the Berlin Academy: Gottfried and I built joint catalogs, edited calendars to sell to farmers, and taught the four children astronomy the way Arnold had taught me — live-in apprenticeship.\n\nIn those ten years one moment I want to stop and show you. On 5 July 1687 Newton\'s Principia was published in London; I was 17 that year, apprenticing with Arnold in Saxony, with no idea a book had appeared. See this off-aligned time slice: that day Newton, 44, held fresh pages off the press at Cambridge; Mersenne was 39 years dead, but his correspondence network had been institutionalized into the 1660 Royal Society and 1666 Académie; and I, 17, was copying Arnold\'s Latin in a farmer\'s house. Three people, three places, one day, three different historical thicknesses.\n\nA cross-lens hook: in 1644 Mersenne wrote Pascal about fluid dynamics; that letter ran through Pascal 1648, Boyle 1662, then into Newton\'s 1687 Principia Book 2 — a chain of 43 years. The refractor I used from 1700 and Gottfried\'s working procedures (split nights, Latin reports, peer-checking) were also a continuation of it.\n\nThe network Mersenne started in a Paris monastery in 1620 became, 80 years later, the way I worked every night. I never met him — but the protocol I used each night, he wrote it.',
      },
      deliverGoal: 'N6 1700-1710 30-40 岁 Berlin 10 年 / 共同 catalogue + 编 calendar + 教 4 孩子天文 / 1687.7.5《Principia》出版三 lens 时间不齐切片  cross-lens micro-detail: Newton 44 岁 + Mersenne 死 39 年 + Maria 17 岁 Saxony 学 Latin / 1644 Mersenne→Pascal 1648→Boyle 1662→Newton 1687 Principia Book 2 流体力学链  跨 lens (Lens 2 Mersenne 网络遗产) / Maria 1700 用的工作 protocol 是 Mersenne 写的 / 「我没见过他他没见过我但我每晚用的工作 protocol 是他写的」',
      engagementHook: '同一天——三个人在三个地方——历史厚度不同——你 21 世纪能想象「我跟某个人没见过面，但他写的东西决定我每天怎么工作」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'maria-n7',
      type: 'narrative',
      content: {
        cn: '1710 年 7 月 25 日 Gottfried 死了，我 40 岁守寡。3 个月后我正式申请接任 astronomer 职位。\n\n我的 case 很强：18 年观测经验、1702 彗星发现、已日常工作 8 年。Leibniz 赌上声誉支持我，称我是当今「最博学的天文学家之一」。\n\n但 1711 年 1 月 18 日 Council 否决了 Leibniz 自己，大意是：让一个 Frauenzimmer 当 astronomer 会开不光彩先例。inline gloss：Frauenzimmer 字面是「女性的房间」，用「房间」代指「女性」暗含「女性该留私人空间」的假设。\n\n听清楚：我不是「不够 qualified」被拒，真实理由是一旦我任职就开了「女性可任职」先例——Council 怕这个 precedent。\n\ncross-lens 钩子：同年 Cambridge 用「Arian 异端」开除接 Newton Lucasian Chair 的 Whiston。两个 institution 用不同理由开除两种不可见信仰，却是同一种 logic「怕开先例」（Iliffe 2017）——1710-1712 是新生科学机构最 sharp 的「关门」时刻。',
        en: 'On 25 July 1710 Gottfried died at 71, and I was 40, a widow. Three months later I formally applied to succeed him as Berlin Academy astronomer.\n\nMy case was strong: 18 years of observation, the 1702 comet (Leibniz had privately confirmed it was mine), 8 years already doing roughly half the observatory\'s work. Leibniz, as Academy president, staked his reputation on me, calling me "one of the most learned astronomers now living."\n\nBut on 18 January 1711 the Council overruled Leibniz himself. As Schiebinger 1989 reports it, the gist was that employing a Frauenzimmer as astronomer would set an unflattering precedent (a paraphrase, not a verbatim archive original).\n\nInline gloss: Frauenzimmer — 17th-18th-century German, literally "women\'s apartments." Using "the rooms" for "women" carried the patriarchal assumption that women belonged in private spaces — not a neutral word.\n\nHear this clearly: I was not refused for lack of qualifications; Leibniz had certified me. The real reason was that the moment I was appointed, the Academy set a "women may hold posts" precedent — a door it could not later close.\n\nA cross-lens hook: the same year, Cambridge expelled William Whiston (Newton\'s Lucasian successor) for Arian heresy. Two institutions, two invisible affiliations (gender, heresy), the same logic: "we fear the precedent" (Iliffe 2017). 1710-1712 is the sharpest "closing the door" moment in the new scientific institutions.',
      },
      deliverGoal: 'N7 1710.7.25 Gottfried 死 71 岁 / Maria 40 岁守寡 / 1710.10 申请接任 Berlin Academy astronomer / 18 年经验 + 1702 彗星 + 8 年日常工作 + 知道所有流程 / Leibniz 1710.10.18 信原文「one of the most learned astronomers now living」/ 1711.1.18 Council 否决: 据 Schiebinger 1989 转述大意「让一个 Frauenzimmer 当 astronomer 会给 Academy 开不光彩先例」(转述非逐字 archive 原文; 权威措辞不一: Jablonski「旁人会更瞠目」/「怕开先例」) / Frauenzimmer inline gloss 17-18c 德语 patriarchal semantic loading / 真实理由「institutional precedent fear」/  cross-lens 钩 1710 Cambridge 开除 Whiston (Newton protégé) Arian 异端 同 institutional 自我保护 (Iliffe 2017)',
      engagementHook: '「我们怕开先例」——你 21 世纪有没有过这种「他们不是反对你这个人——是怕你后面带来的人」的感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'maria-n8',
      type: 'narrative',
      content: {
        cn: '1711 年 1 月 Council 否决后，Academy 给我的「补偿」只有 100 thaler 抚恤（Gottfried 月薪 500 的 1/5）+ 3 个月内搬出公寓。\n\n4 个月后我写信 Berlin Academy：「When my husband was alive, no one objected to my work. Now they object only because I am a widow... What has changed is not my hand but my position.」\n\ncareful 读：这不是 victim narrative，而是 institutional analysis——身份从 married 变 widow、工作没变，access 却只由身份决定。这是 receiving-end 最高的清醒度：不是哭，是精准。\n\ncross-lens 钩子：拜占庭那课的 Theodora 皇后嫁 Justinian、他改法让她立后，她说过类似的话「变的是法律，不是我」。12 个世纪差距，同一种 receiving-end 清醒。\n\n她那封信把这 pattern 写进 archive、300 年后被你读到——这就是「写下来」的力量。',
        en: 'In January 1711, after the Council\'s refusal, the Academy offered me "compensation": a 100-thaler one-time payment (a fifth of Gottfried\'s 500-a-month salary), three months to move out of the observatory apartment, no further official relationship.\n\nFour months later I wrote the Berlin Academy (the letter survives; Schiebinger 1989, p. 97): "When my husband was alive, no one objected to my work. Now they object only because I am a widow. The work I did then is the same work I would do now. What has changed is not my hand but my position."\n\nRead it carefully: it is not a victim narrative. I do not say "they are evil" or "I am pitiful" — I do institutional analysis, naming the decoupling of position and work: position changed (married then widow), the work did not, yet access is decided only by position. This is the highest clarity on the receiving end — not weeping, but precision.\n\nA cross-lens hook: in the Byzantine Topic you met Empress Theodora, who married Justinian out of an actress\'s background, and when he rewrote the law to crown her she is said to have spoken similarly: "What changed is the law, not me." Twelve centuries apart, the same receiving-end clarity.\n\nThe pattern — "while my husband lives my work counts under his name; once he dies even the work disappears" — is cross-civilizational. Maria was not the first and will not be the last. But what she did was write it down; the letter went into the archive, and three hundred years later you are reading it. That is the power of "putting it on paper."',
      },
      deliverGoal: 'N8 1711.1 Academy 补偿 100 thaler (Gottfried 月薪 1/5) + 3 个月搬出公寓 + 不再 official 关系 / 1711.4 Maria 抗议信原文「When my husband was alive, no one objected to my work. Now they object only because I am a widow. The work I did then is the same work I would do now. What has changed is not my hand but my position.」 archive 级 / 不是 victim narrative 是 sharp institutional analysis (身份 vs 工作脱钩) / receiving-end 最高清醒度 /  cross-lens 钩 Byzantine Theodora N6 525 嫁 Justinian 同 pattern「变的是法律不是我」12 世纪差跨文明 receiving-end 清醒 / 「写下来 archive 300 年后你读到」',
      engagementHook: '「变的不是我的手，是我的身份」——这一句你 21 世纪能用在自己身上的什么时刻吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'maria-n9',
      type: 'narrative',
      content: {
        cn: '1711 年搬出 Academy 公寓后，1712 年进入 Berlin 富商 von Krosigk 家做私人 astronomer，工作跟 Academy 时期一样但没 title。1714 年 Krosigk 死，我又失业。\n\n1714 年夏天 44 岁，我移居 Danzig。一个 cross-lens 时刻：1641 年 Hevelius 在自家屋顶盖了 Stellaeburgum（17 世纪欧洲最大私人观测台之一），1663 年娶 16 岁的 Elisabetha、18 年夫妻档天文。1687 Hevelius 死，她守寡后 6 年独立完成丈夫遗著《Prodromus Astronomiae》（1690），收录 1564 颗星、是 17c 末欧洲 standard reference（Lens 2 §11.5 见过）。\n\n我去 Danzig 是去「另一个 dual-pair 寡妇 Elisabetha 留下的废墟」。同一栋楼跨两代女性 astronomer：Elisabetha 1663-1693 → 我 1714-1716，隔 21 年却用同一种 dual-pair 模式。\n\n两年、同一栋观测台、两个寡妇、同一根传承链——17c 德语区天文夫妻档的物理基础设施。',
        en: 'After leaving the Academy apartment, in 1712, at 42, I entered the household of the Berlin merchant von Krosigk (1656-1714) as private astronomer — same work as at the Academy, but no institutional title. In April 1714 Krosigk died and I lost the post again.\n\nSummer 1714, at 44, I moved to Danzig (today Gdańsk, Poland). A cross-lens moment: in 1641 Johannes Hevelius had used his family\'s brewing income to build Stellaeburgum on his own roof — one of the largest private observatories in 17th-century Europe. In 1663, at 52, he married 16-year-old Elisabetha Koopmann; eighteen years of dual-pair astronomy followed. When Hevelius died in 1687, Elisabetha, 40, spent six years alone completing his unpublished Prodromus Astronomiae (1690) — 1564 stars catalogued, about double Tycho\'s catalog, the standard European reference (you met this in Lens 2, §11.5).\n\nIn 1714 I moved to Danzig not to a strange place but into "the ruins another dual-pair widow had left." One building across two generations of women astronomers — Elisabetha 1663-1693, then me 1714-1716 — separated by 21 years but inside the same walls and the same dual-pair pattern. I edited calendars for farmers; none carried my name.\n\nTwo years, one observatory, two widows, one chain of inheritance — the physical infrastructure of the 17th-century German-speaking astronomy dual-pair tradition.',
      },
      deliverGoal: 'N9 1711.5 搬出公寓 / 1712-1714 Bernhard Friedrich von Krosigk Berlin 商人家私人 astronomer 2 年 (1714.4 Krosigk 死又失业) / 1714 夏 44 岁移居 Danzig /  cross-lens micro-detail Hevelius 老观测台 1641 Stellaeburgum (Lens 2 §11.5 bridge): 1641 Hevelius 30 岁建 / 1663 娶 16 岁 Elisabetha Koopmann (52+16 岁差 36 年 18 年夫妻档) / 1687 Hevelius 死 (Elisabetha 接 6 年完成《Prodromus Astronomiae》1690 出版 1564 颗星比 Tycho 1602 catalog 多 50% standard reference) / 1693 Elisabetha 死 / 1714 Maria 44 岁来工作编 calendar 维持生计 / 「另一个 dual-pair 寡妇 Elisabetha 留下的废墟」/ 一栋楼跨两代女性 astronomer 21 年隔 / 17c 德语区天文夫妻档物理基础设施',
      engagementHook: '一栋楼跨两代——你 21 世纪所在的城市，有没有这种「同一栋建筑里换了几代人做同一种事」的地方？',
      expectsRealAnswer: false,
    },
    {
      id: 'maria-n10',
      type: 'narrative',
      content: {
        cn: '1716 年 Berlin Academy 重启 astronomer 职位——但没给 46 岁的我，给了我 23 岁的儿子 Christfried（天文是在我家学的）。1717 年春他接任，我 47 岁回 Berlin 当他的「assistant」。\n\n我做了 Christfried 做不到的工作，title 却是他的。Schiebinger 1989 的一句：「She had become invisible inside her own life\'s work.」\n\n47 到 50 岁我又工作 3 年。1720 年我死，50 岁。Christfried 1721 在《Acta Eruditorum》写讣告：「The Academy owes much to her, though it has acknowledged little.」\n\nChristfried 1740 年死、没继承人。两个女儿继续在 Academy 做 astronomer 到 1759/1782 死，都是「assistant」。同一栋观测台 1700-1782、82 年、三代女性、零 official title。\n\n同一栋观测台、同一台望远镜、同一种工作——谁 founder、谁 helper，性别决定。',
        en: 'In 1716 the Berlin Academy reopened the astronomer post — but did not give it to 46-year-old me. They gave it to my 23-year-old son Christfried Kirch (his astronomy learned from me). In spring 1717 he took the post, and I returned to Berlin at 47 — not as astronomer, but as Christfried\'s "assistant."\n\nI was doing work my son could not have done, but the title was his. Schiebinger 1989\'s cutting line: "She had become invisible inside her own life\'s work."\n\nThree more years inside the same building. On 29 December 1720 I died, 50, of fever. In 1721 Christfried wrote my eulogy in Acta Eruditorum: "The Academy owes much to her, though it has acknowledged little."\n\nChristfried died in 1740, no heirs. My two daughters kept working as astronomers at the Academy until 1759 and 1782 — both as "assistants," neither with an official title. One observatory, 1700 to 1782, eighty-two years, one family, three generations of women, zero official titles.\n\nOne observatory, one telescope, one kind of work — who is founder, who is helper, gender decides.',
      },
      deliverGoal: 'N10 1716 普鲁士新王 Friedrich Wilhelm I 重启 astronomer / Berlin Academy 给 23 岁儿子 Christfried 不给 Maria / 1717 47 岁回 Berlin 做 son\'s assistant 同一栋观测台 / Schiebinger pp. 102-103 cutting passage「She had become invisible inside her own life\'s work」 archive 级 / 1720.12.29 死 50 岁 fever / 葬 Sophienkirche 现 Mitte 区 Große Hamburger Straße 墓碑 1945 战火 + 战后改建无 / Christfried 1721《Acta Eruditorum》讣告原文「The Academy owes much to her, though it has acknowledged little」/ 两女 Christine 1759 + Margaretha 1782 继续 assistant 都无 official title / 一栋楼 1700-1782 82 年三代女性零 official title / 「同一栋观测台 founder→helper 性别决定」',
      engagementHook: '「她在自己一生的工作里变得不可见」——你 21 世纪听到这句最难受的是哪一部分？',
      expectsRealAnswer: false,
    },
    {
      id: 'maria-n11',
      type: 'synthesis',
      content: {
        cn: '我已死 305 年。你跟我做完这一段，坐 30 秒想一个问题：你身边「同一栋楼 founder vs helper 性别决定」是谁？\n\n21 世纪 5 个常见样本：\n第一，STEM 女博士——做 6 年实验，论文通讯作者是男导师，她是第二作者。\n第二，创业 cofounder 老婆——跟丈夫开公司、她写代码他融资；上市后他进招股书 founder 栏，她是 employee 13 号。\n第三，公司 invisible 女员工——8 年做脏活，升职却给了来 1 年的男同事。\n第四，work-from-home 妻子——丈夫 LinkedIn 写「dual-career couple」、她写「mother」。\n第五，学术圈第二作者——写了论文 80%，导师挂第一作者。\n\n5 个样本、300 年差、同一种 receiving-end pattern。你身边的呢？你妈妈、你姐姐，或者你自己？你现在 12 岁，可能已遇到「group project 我做 80% 却跟 leader 同分」的小版本。\n\n你不用现在 solve，只要把这条 pattern 看见——看见就是第一步。Maria 那封信 300 年后被你读到，是因为她「写下来」；你看见，也是一种「写下来」。如果那个人是你自己，你想怎么写下来？',
        en: 'I have been dead 305 years. Sit thirty seconds with one question: near you, who is the "same building, founder versus helper, decided by gender" person?\n\nFive familiar 21st-century cases. One: the woman PhD in a STEM lab — six years of experiments, but the corresponding author is her male PI and she is second author. Two: the cofounder-wife — she wrote the product code, he raised the money; at IPO his name is on the prospectus founder line, she is employee 13. Three: the invisible woman at the office — eight years of the dirty client-report work, but the promotion went to a man who had been there one year ("he has more leadership presence"). Four: the work-from-home wife — her husband\'s LinkedIn says "dual-career couple," hers says "mother." Five: the second-author scholar — she wrote 80 percent of the paper, her advisor took first authorship.\n\nFive cases, three hundred years apart, the same receiving-end pattern. Who is yours — your mother, your sister, or you? You are 12 now; maybe you have already met it in the small version ("I did 80 percent of the group project and got the same grade as the leader").\n\nYou do not have to solve it now — only to see the pattern. My April 1711 letter reached you because I wrote it down; your seeing it is a kind of writing it down. If the answer is you, how do you intend to write it down?',
      },
      deliverGoal: 'N11 receiving-end reflection 21c 5 个「同一栋楼 founder vs helper 性别决定」样本: STEM 女博士第二作者 / 创业 cofounder 老婆 / 公司 invisible 女员工 / 跨国家庭 work-from-home 妻子 / 学术圈 80% 第二作者 / 「你身边谁? 你自己?」/ Maria 1711 信「写下来」300 年后被读到 / 看见就是第一步 / 「你想怎么写下来?」expectsRealAnswer:true',
      engagementHook: '同一栋楼里，谁署名 founder、谁退成 helper，常常由性别决定。一种说法是：那是个人的选择和能力差距，谁更强谁就上。另一种说法是：位置在你出力之前就被制度按性别分好了，跟能力无关。你更认同哪一种？想 30 秒，写下来。',
      expectsRealAnswer: true,
    },
    {
      id: 'maria-n12',
      type: 'synthesis',
      content: {
        cn: '我已死 305 年。你做完 receiving-end Lens 3，也做完了 Phase 1 全部课的 receiving-end lens。\n\n横向看 8 个 receiving-end 女性 voice——跨 6 文明 1100 年。4 真：Sorghaghtani Beki、Theodora、李清照、我 Maria Kirch。4 虚（fictional composite）：Anna the Iconographer、Anacaona Jr、Aisha 1413、Sister Agnes。\n\n同一根 receiving-end pattern——「机构活了，个人故事消失。」Berlin Academy、《金石录》、Hagia Sophia 都还在——但我 1702 的彗星不在我名下，李清照晚年的孤独工作不在文学史正文，Anna、Aisha 妈妈、Anacaona Jr 也不在记录里。\n\n你已看见 8 个 voice、知道这条 pattern——这是 Phase 1 送你的礼物。\n\n想 30 秒：8 个人里哪个让你最难忘？哪个故事你想自己写下来？你写就是第 9 个；300 年后被读到，就是 Maria 1711 那封信的延续。你想写谁？',
        en: 'I have been dead 305 years. You and I have walked the receiving-end lens together — and now for every Topic in Phase 1.\n\nLook across, eight receiving-end voices over six civilizations and 1100 years. Four real: Sorghaghtani Beki (Mongol), Empress Theodora (Byzantine), Li Qingzhao (Tang-Song), me, Maria Kirch (Scientific Revolution). Four fictional composites: Anna the Iconographer, Anacaona Jr, Aisha 1413, Sister Agnes.\n\nOne receiving-end pattern: "The institution lived. The personal story disappeared." The Berlin Academy, Li Qingzhao\'s Records on Metal and Stone, and Hagia Sophia all still stand — but my 1702 comet does not bear my name, Li Qingzhao\'s lonely years after 1129 are not in the canonical literary spine, and Anna, Aisha\'s mother, and Anacaona Jr are not in any official record.\n\nYou have now seen eight voices and you know this chain — at twelve or thirteen you needed to see it, and that is what Phase 1 has carried to you. What you do next is another question, but you have seen, and seeing changes things.\n\nThirty seconds: of the eight, which one stays with you? Whose story do you want to write down, even a fragment? If you write, you become the ninth; if someone reads it 300 years from now, you continue Maria\'s April 1711 letter. Whose story do you want to write?',
      },
      deliverGoal: 'N12 closing meta cross-civilization 8 receiving-end voice (4 真 Sorghaghtani Mongol + Theodora Byzantine + Li Qingzhao Tang-Song + Maria Kirch Scientific Revolution / 4 虚 Anna Iconographer Byzantine + Anacaona Jr AoE + Aisha 1413 Mali + Sister Agnes Reformation) 跨 6 文明 1100 年 / 「机构活了 — 个人故事消失」(Berlin Academy 325 年还在 / 1702 彗星不在 Maria 名下 / Li Qingzhao 1129 后 26 年孤独工作不在文学史正文 / Anna+Theodosia 不在 Triumph of Orthodoxy / Aisha 妈妈不在 Mali 王朝史 / Anacaona Jr 不在 Columbus 日记) / 「你 12-13 岁要看见这条链 Phase 1 礼物」/「你想写谁? 你写就是第 9 个 300 年后被读到 = Maria 1711 信的延续」expectsRealAnswer:true',
      engagementHook: '走完这条 8 个 receiving-end voice、跨 6 文明 1100 年的链——机构都活了下来，个人的名字却消失了。你身边「同一栋楼 founder vs helper 性别决定」的人是谁，你会怎么看待 TA（你妈妈、姐姐、aunt，或者你自己）？再想一步：8 个人里你想写谁的故事？你写就是第 9 个——300 年后被读到，就是 Maria 1711 那封信的延续。',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'newton':      newtonLens,
  'mersenne':    mersenneLens,
  'maria-kirch': mariaKirchLens,
};

export var defaultLens = 'maria-kirch';
export default lenses[defaultLens].storyboard;
export var meta = {
  topicId: 'scientific-revolution',
  schemaVersion: 2,
  defaultLens: defaultLens,
  lensCount: 3,
  status: 'production',
  authoredBy: 'lens-author agents × 3 (Story-First Pedagogy v2)',
  authoredDate: '2026-05-09',
  notes: [
    '3 lens combined / 3 cross-lens micro-detail: 1644 Mersenne→Pascal→Newton + 1687.7.5 三 lens 切片 + 1710-1712 Berlin 拒 Maria',
    'defaultLens: maria-kirch — Phase 1 receiving-end 收官 emotional climax (跨 6 文明 1100 年 8 voice 4 真 + 4 虚)',
    'anti-fab: Westfall 1980 / Manuel 1968 / Iliffe 2017 / Smith 2004 / Hall 1962 / de Waard 1932-1988 / Peter Dear 1988 / Biagioli 1993 / Finocchiaro 2005 / Schiebinger 1989 / Alic 1986 / Ogilvie 1986',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
