// ─── Age of Exploration 1492 · Lens 2: Bartolomé de las Casas ─────────
//
// Topic: 大航海时代 1492 · The Age of Exploration
// HSS-7.7 · AP World 4.4 · AP US Period 1
//
// Lens 2 of 3: Bartolomé de las Casas (1484-1566)
//   - id: 'las-casas'
//   - role: lonely-mediator (孤独的内部良心调停者)
//   - perspective tag: internal-conscience-pivot
//
// 12 节奏 (per Sarah audit §5 Lens 2 + narrative line 591-695):
//   N1  HOOK     1502/4 17 岁随父到 Hispaniola — 第一次见 encomienda
//   N2  SETUP    1502-1514 13 年自己是 encomendero
//   N3  STORY    1514/5 Cuba 读 Sirach 34:21-23 — conversion (比 Luther 1517 早 3 年)
//   N4  STORY    1515 第一次回 Spain 见 Ferdinand
//   N5  STORY    1535 Santo Domingo 转录改写 Columbus 1493 信 — 跨 lens echo ⭐
//   N6  STORY    1516 建议非洲奴隶替代 — 道德最难时刻 (careful scaffold)
//   N7  STORY    1542 写《简短叙述印度群岛的毁灭》+ 1542 New Laws
//   N8  STORY    1550 Valladolid 辩论 vs Sepúlveda — "Indians 是人吗"
//   N9  STORY    1552 在《Historia》后记反思 1516 错误 + "我求上帝原谅"
//   N10 STORY    1566/7/18 Madrid 修道院死 — 留下未完成《Historia》
//   N11 SYNTHESIS 13 岁 reflection: las Casas 是不是"完美英雄"? AP DBQ
//   N12 META     16 世纪两个 conscience 革命 (Luther 撕教会 / las Casas 撕殖民)
//                + 21 世纪 #MeToo / Snowden / TRC 模板原型 + 换视角 hint
//
// 跨 lens micro-detail: Columbus 1493 致 Isabella 的信
//   - Columbus N4 = producer (1493 在 Azores 写)
//   - las Casas N5 = interpreter (1535 在 Santo Domingo 修道院转录 + 批注)
//   - Anacaona Jr. N5 = affected party (1495 听别人念过片段)
//
// 风格 (per AUTHORING_PIPELINE 11 条):
//   第 1 条 cultural ban / 第 2 条 anti-fab (las Casas 史实精度高 — Sirach 34:21-23 真实
//     + 1502/1514/1515/1516/1535/1542/1550/1552/1566 都是真年份)
//   第 4 条 em-dash 「——」 (每句最多 1 个,绝不串联)
//   第 6 条 italic 外语术语极少化,bare 形式 (encomienda / Brevísima Relación / Sirach
//     / Náhuatl / Taíno / Sola Fide / metanoeite — 不加 *italic* markdown)
//   第 11 条 quote nesting: outer JS 用单引号 '...', 内嵌中文方头括号 「」 防 SWC parser
//
// 这是 staging 文件 — 待 4-agent review (7thgrader + AP teacher + ESL + Chinese teacher)
// 通过后 merge 进 age-of-exploration-1492.js 主文件

// ═══════════════════════════════════════════════════
// LENS 2: Bartolomé de las Casas (lonely-mediator)
// ═══════════════════════════════════════════════════

var lasCasasStoryboard = [
  // ═══════════════════════════════════════════════════
  // N1 — HOOK: 1502/4 17 岁到 Hispaniola — 第一次见 encomienda
  //   cross-lens hook: Anacaona Jr. 1502 时还在山上 (1504 饿死)
  // ═══════════════════════════════════════════════════
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Bartolomé de las Casas',
    narrativeRef: '§3 las Casas 出身 line 591-606 + Sarah audit §5 Lens 2 line 200-203',
    content: {
      cn:
        '1502 年 4 月,Hispaniola(伊斯帕尼奥拉,加勒比海)。我刚下船,踩进湿热的沙滩,鞋还在滴水。\n\n' +
        '我叫 Bartolomé de las Casas,17 岁,Seville 商人之子。我父亲 Pedro 是 Columbus 的朋友——9 年前(1493)他跟 Columbus 第二次航行也来过这座岛。这次他带我来,他要在这里赚钱,我要在这里继承一份家产。\n\n' +
        '我手里捏着一张羊皮纸——西班牙王室分给我的 encomienda(委托权)。这张纸告诉我:这片土地上一片 Taíno(泰诺人)村子是「我的」。我有权强迫他们为我工作,名义上要给他们传教 + 保护,实际上他们替我挖金子 + 种田。\n\n' +
        '17 岁的我,觉得这是天赐的好运。\n\n' +
        '——这一刻我不知道。我不知道接下来 13 年我自己就是一个奴隶主。我不知道 12 年后我会在 Cuba 一个清晨突然崩溃,放掉所有奴隶,进修道院。我不知道我接下来 50 年会写、骂、辩、跑回西班牙见 5 任国王。我不知道 14 年后我会犯下我一辈子最大的错误,建议用非洲奴隶代替原住民——50 岁我才意识到这是错的——80 岁我还在为这个错误向上帝求原谅。\n\n' +
        '今天可能这座山的某个山洞里,有一个 19 岁的 Taíno 女孩(她叫 Anacaona Jr.,我永远不会知道她的名字)正在饿死——她全家 5 年前就死光。我跟她,这一年 1502,在同一座岛。我看不见她。\n\n' +
        '接下来 12 节,你跟我走 64 年——你会看见我从奴隶主变成奴隶解放者,但中间有一个我永远擦不掉的污点。',
      en:
        'April 1502. Hispaniola, in the Caribbean. I have just stepped off the ship onto wet sand, my shoes still dripping.\n\n' +
        'My name is Bartolomé de las Casas, seventeen years old, son of a Seville merchant. My father Pedro is a friend of Columbus — nine years ago, in 1493, he sailed with Columbus on the second voyage to this same island. Now he has brought me. He wants to make money. I want to inherit a piece of it.\n\n' +
        'In my hand is a parchment from the Spanish crown — my encomienda. The paper tells me that one cluster of Taíno villages on this island is now «mine.» I have the legal right to make them work for me; in name I owe them preaching and protection, in fact they will dig gold and farm for me.\n\n' +
        'At seventeen I think this is a gift from heaven.\n\n' +
        'In this moment I do not know what I do not know. I do not know that for the next thirteen years I will be a slaveholder. I do not know that twelve years from now, on a single morning in Cuba, I will break in half, free every Taíno I own, and enter a friars\' house. I do not know that the next fifty years of my life I will write, argue, curse, and run back to Spain to face five different kings. I do not know that fourteen years from now I will make the worst mistake of my life — recommending that African slaves replace the dying Taíno. I will not see it as a mistake until I am fifty. I will still be begging God\'s forgiveness for it at eighty.\n\n' +
        'Today, somewhere in a cave on this mountain, a nineteen-year-old Taíno woman (her name is Anacaona Jr.; I will never learn it) is starving to death — her whole family was wiped out five years ago. She and I are on the same island, this year, 1502. I do not see her.\n\n' +
        'Across the next twelve sections you will walk sixty-four years with me. You will see how I turned from a slaveholder into a man who fought slavery for half a century — and you will see the one stain I could never wash off.',
    },
    deliverGoal: {
      cn: '我 17 岁拿着 encomienda 上岛——觉得是天赐好运。我不知道接下来 13 年我自己就是奴隶主。我不知道 14 年后我会建议非洲奴隶替代,50 岁才意识到错——80 岁还在求原谅。',
      en: 'At seventeen I held an encomienda parchment and thought it was a gift from heaven. I did not know I would be a slaveholder for thirteen years, would recommend African slavery in 1516, and at eighty would still be begging God\'s forgiveness.',
    },
    engagementHook: {
      cn: '一个 17 岁奴隶主怎么变成 50 年反殖民斗士?倒回我自己拥有 Taíno 的那 13 年。',
      en: 'How did a seventeen-year-old slaveholder become a fifty-year campaigner against colonial violence? Roll back to the thirteen years I owned Taíno men.',
    },
    expectedLength: '300-360 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N2 — SETUP: 1502-1514 13 年自己是 encomendero
  // ═══════════════════════════════════════════════════
  {
    id: 2,
    phase: 'setup',
    cosplay: 'Bartolomé de las Casas',
    narrativeRef: '§3 las Casas encomendero 期 line 600-606',
    content: {
      cn:
        '1502 到 1514 年,我 18 到 30 岁,这 13 年我自己是 encomendero(委托权领主)。\n\n' +
        '这 13 年我做过的事——我必须说清楚,不能美化。\n\n' +
        '我有一片 Taíno 村子被分给我。我每天派他们去河边淘金、去田里种 yuca(木薯)、给我盖石房。给他们的「报酬」是一点点食物 + 名义上的传教(我让一个修士每周来念几段拉丁文 Mass,他们听不懂)。我亲眼看见有人在矿上累死,我亲眼看见女人被士兵强奸,我亲眼看见小孩饿死——但我那时候觉得这就是「殖民」,觉得这就是天主教把异教徒带进文明的过程。\n\n' +
        '我那时候不觉得 Taíno 是「我」。\n\n' +
        '我读过 Aristotle(亚里士多德)关于「天生奴隶」的论证——希腊人 1800 年前就这么说。我接受了。我心里默默觉得 Taíno 是「另一种人」,是「中间形态」,介于动物和欧洲人之间。我没有恶意——我只是没看见他们是人。\n\n' +
        '1510 年我 26 岁,在 Hispaniola 做了 secular priest(教区神父)——这是新大陆第一个被祝圣的神父。1512 年我 28 岁,跟 Pánfilo de Narváez 去 Cuba,参与征服 Cuba 的军事行动。我作为 chaplain(随军神父)——给士兵祷告,看士兵屠杀 Taíno 村子。我没有制止。我也没有特别难受。\n\n' +
        '——这 13 年我不是 villain(恶人)——我只是 ordinary(普通)。普通的西班牙殖民者,普通的天主教神父,普通的 1500 年代欧洲人。\n\n' +
        '这是这个视角最难的一节。我不能把自己写成「一直就是反对者」——那是骗你。我曾经就是问题的一部分。',
      en:
        'From 1502 to 1514, age eighteen to thirty, for thirteen years I was an encomendero — a master with a royal grant.\n\n' +
        'I have to tell you what I did in those years. I cannot dress it up.\n\n' +
        'A cluster of Taíno villages had been assigned to me. Every day I sent the men to wash gold from the rivers, the women to plant yuca (cassava) in the fields, the boys to build me a stone house. The «payment» was a little food and a token of preaching — once a week a friar came to recite Latin Mass nobody understood. With my own eyes I saw men collapse and die in the mines. With my own eyes I saw women raped by soldiers. With my own eyes I saw children starve. At the time I thought this was simply what «colony» meant. I thought this was how the Catholic Church carried heathens into civilization.\n\n' +
        'In those years I did not see the Taíno as «like me.»\n\n' +
        'I had read Aristotle on natural slavery — the Greeks had argued it eighteen hundred years before. I accepted it. Quietly I believed the Taíno were «another kind» of people, a middle form, between animals and Europeans. I did not feel hatred. I just did not see them as men.\n\n' +
        'In 1510, age twenty-six, I was ordained a secular priest in Hispaniola — the first priest ordained in the New World. In 1512, age twenty-eight, I joined Pánfilo de Narváez on the conquest of Cuba. I served as chaplain — I prayed for the soldiers, and I watched them slaughter Taíno villages. I did not stop them. I did not even feel particularly disturbed.\n\n' +
        'For those thirteen years I was not a villain. I was ordinary. An ordinary Spanish colonist, an ordinary Catholic priest, an ordinary European of the early sixteenth century.\n\n' +
        'This is the hardest passage in this perspective. I cannot tell you I was always a dissenter. That would be a lie. I was, for thirteen years, part of the problem.',
    },
    deliverGoal: {
      cn: '我 18-30 岁 13 年自己是 encomendero——派 Taíno 淘金 / 种 yuca / 盖房,亲眼看死人 / 强奸 / 饿死,我没特别难受。我接受 Aristotle「天生奴隶」论证。我曾经就是问题的一部分。',
      en: 'For thirteen years from age eighteen to thirty I was an encomendero — sending Taíno to wash gold and plant yuca, watching them die in the mines, women raped, children starve, and feeling nothing unusual. I had accepted Aristotle on natural slavery. I was part of the problem.',
    },
    engagementHook: {
      cn: '13 年的「正常」突然怎么破?1514 年 5 月一个清晨,Cuba,一段 Bible 经文。',
      en: 'How does thirteen years of «normal» suddenly crack open? In May 1514, in Cuba, a single line from the Bible.',
    },
    expectedLength: '320-380 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N3 — STORY (CONVERSION): 1514/5 Cuba 读 Sirach 34:21-23
  //   核心节点 — 比 Luther 1517 早 3 年的「内心革命」
  // ═══════════════════════════════════════════════════
  {
    id: 3,
    phase: 'story',
    cosplay: 'Bartolomé de las Casas',
    narrativeRef: '§3 1514 conversion line 608-627',
    content: {
      cn:
        '1514 年 5 月某天清晨,Cuba 中部,我的小修道院。\n\n' +
        '我那年 30 岁,正在准备一次圣灵降临节(Pentecost)的布道。我手里翻 Bible,翻到 Sirach(《便西拉智训》——天主教旧约的一卷,新教 1500 年代后不算正典)第 34 章。\n\n' +
        '我读到 21 到 23 节。原文我记到现在——\n\n' +
        '「夺取邻舍衣食的——是杀人。\n' +
        '克扣雇工工资的——是流血。\n' +
        '从压迫穷人手里得来的祭品——上帝不接受。」\n\n' +
        '我读完这一段,放下 Bible,坐在凳子上。\n\n' +
        '我忽然看见——不是想出来的,是看见——我自己分到的那片 Taíno 村子,在矿上累死的人,被士兵强奸的女人,饿死的小孩。我看见我每天吃的粮食 + 我盖的石房 + 我攒的金子,全部是「夺取邻舍衣食」+「克扣雇工工资」+「压迫穷人」。我每周做的 Mass——我献给上帝的祭品——上帝不接受。\n\n' +
        '我崩溃了。我跪下,哭了一整天。\n\n' +
        '接下来几个月,我做了 3 个决定。\n\n' +
        '第一,我释放我所有的 Taíno 奴隶。第二,我退出 encomienda(把那张羊皮纸还给王室)。第三,我从 secular priest 转进 Dominican(多明我会)修会做修士。\n\n' +
        '——这是 1514 年。Luther 在 Wittenberg 还要再过 3 年(1517 年 10 月 31 日)才把 95 条钉教堂门。Ignatius 在 Pamplona 还要再过 7 年(1521)才被炮弹打中腿后转向上帝。我不知道。我那时候不知道我是 16 世纪 conscience(良心)革命第一波。\n\n' +
        '我只知道一件事:我曾经是杀人犯,但不再是。',
      en:
        'One morning in May 1514, in central Cuba, in my small friars\' house.\n\n' +
        'I was thirty, preparing a sermon for Pentecost. Bible open on the table, I had turned to Sirach — the Book of Sirach, one of the wisdom books in the Catholic Old Testament (Protestants after the 1500s would drop it from their canon) — chapter 34.\n\n' +
        'I read verses 21 to 23. The lines stayed with me my whole life:\n\n' +
        '«To take away a neighbor\'s living is to kill him.\n' +
        'To withhold the wages of a hired man is to shed blood.\n' +
        'A gift from the oppressed — the Lord will not accept.»\n\n' +
        'I read those lines, set the Bible down, and sat on the bench.\n\n' +
        'And then — not thought, seen — I saw the Taíno villages I had been given. Men dying in my gold mines. Women raped by my soldiers. Children starving. I saw every meal I had eaten, every wall of the stone house I had built, every gold coin I had saved — all of it taking a neighbor\'s living, withholding the wages of a hired man, oppressing the poor. I saw the Mass I celebrated every week — the gift I had been laying on the altar — and I saw the Lord not accepting it.\n\n' +
        'I broke. I went to my knees and wept the whole day.\n\n' +
        'Over the next months I made three decisions. First, I freed every Taíno I owned. Second, I returned my encomienda parchment to the crown. Third, I left the secular priesthood and entered the Dominican order as a friar.\n\n' +
        'This is 1514. Luther will not nail his ninety-five theses to the Wittenberg church door for another three years (October 31, 1517). Ignatius will not be hit in the leg by a cannonball at Pamplona and turn to God for another seven years (1521). I did not know. I did not know that I was the first wave of the sixteenth century\'s conscience revolution.\n\n' +
        'I only knew one thing. I had been a killer. I would not be one anymore.',
    },
    deliverGoal: {
      cn: '1514 年 5 月 Cuba 我读 Sirach 34:21-23——「夺取邻舍衣食是杀人」——我看见我所有的粮食 / 房子 / 金子是杀人的祭品。我崩溃。释放所有奴隶 + 退 encomienda + 进 Dominican 修会。比 Luther 1517 早 3 年——我是 16 世纪良心革命第一波。',
      en: 'In May 1514 in Cuba, reading Sirach 34:21-23 — to take away a neighbor\'s living is to kill him — I saw that every meal, wall, and coin I owned was a gift from killing. I broke. I freed every Taíno I owned, returned the encomienda, and joined the Dominicans. Three years before Luther\'s 95 theses, I was the first wave of the sixteenth century\'s conscience revolution.',
    },
    engagementHook: {
      cn: '皈依容易——50 年抵抗难。1515 我第一次跑回 Spain 见国王 Ferdinand。',
      en: 'Conversion is easy. Fifty years of resistance is hard. In 1515 I sailed back to Spain to face King Ferdinand for the first time.',
    },
    expectedLength: '320-380 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N4 — STORY: 1515 第一次回 Spain 见 Ferdinand
  // ═══════════════════════════════════════════════════
  {
    id: 4,
    phase: 'story',
    cosplay: 'Bartolomé de las Casas',
    narrativeRef: '§3 1515 见 Ferdinand line 633',
    content: {
      cn:
        '1515 年我 31 岁,我从 Cuba 坐船回 Spain。我要见王。\n\n' +
        '当时西班牙王是 Ferdinand II of Aragon——也就是 1492 年放走 Columbus + 赶走犹太人 + 让 Granada 投降的那位国王。1515 年 12 月我在 Plasencia(西班牙中部小城)见到他,他 63 岁,身体已经很差,3 个月后他就死了。\n\n' +
        '我跟他单独谈了 1 个小时。我把我亲眼看见的告诉他——Taíno 在矿上累死、女人被强奸、小孩被喂狗、整村被烧。我告诉他 1492 年 Hispaniola 上估计有几十万到上百万 Taíno,我告诉他 23 年后 1515 年我估计只剩几万——其余的人都死了。\n\n' +
        '我请求他做一件事:废止 encomienda。\n\n' +
        'Ferdinand 听完。他沉默了很久。然后他说:「修士,你说的我相信。但我不能废止 encomienda——殖民者会反抗,殖民地会乱。我会让人调查。等调查报告出来再说。」\n\n' +
        '3 个月后 Ferdinand 死了。调查报告没了下文。\n\n' +
        '——这是我跑回 Spain 的第一次。接下来 51 年我会再跑 6 次。每次见新王(Charles V 1517 / Charles V 1542 / Philip II 1561...),每次他们都说「我相信你」「我会调查」「我会颁法」。每次回去我都觉得这次成了。每次几个月后政策又被殖民者反弹推翻。\n\n' +
        '我学到一件事:写报告 + 见国王 + 颁法律——这些都很重要,但都不够。因为 Hispaniola 离 Madrid 有大西洋这么远,国王颁的法律传到岛上,殖民者就把法律撕了喂狗。\n\n' +
        '我那时候还年轻,我以为下一次见王就行了。我不知道我接下来 50 年大部分时间会在跑这个我跑不通的循环。',
      en:
        'In 1515, age thirty-one, I sailed from Cuba back to Spain. I had to see the king.\n\n' +
        'The king at that time was Ferdinand II of Aragon — the same Ferdinand who in 1492 had let Columbus sail, expelled the Jews, and accepted the surrender of Granada. In December 1515 I met him at Plasencia in central Spain. He was sixty-three, his health already failing; three months later he would be dead.\n\n' +
        'We spoke alone for an hour. I told him what I had seen with my own eyes — Taíno men collapsing in the mines, women raped, babies fed to dogs, whole villages burned. I told him that in 1492 Hispaniola had held somewhere between several hundred thousand and over a million Taíno; that twenty-three years later, in 1515, perhaps a few tens of thousands were left, and the rest were dead.\n\n' +
        'I asked him to do one thing. End the encomienda.\n\n' +
        'Ferdinand listened. He was silent a long time. Then he said: «Friar, I believe what you say. But I cannot end the encomienda — the colonists will rebel, the colonies will fall. I will order an inquiry. When the report comes back, we will speak again.»\n\n' +
        'Three months later Ferdinand was dead. The inquiry never went anywhere.\n\n' +
        'This was the first of my journeys back to Spain. Across the next fifty-one years I would make the journey six more times. Each time I met a new king (Charles V in 1517, Charles V again in 1542, Philip II in 1561). Each time the king said: «I believe you. I will look into it. I will pass a law.» Each time I sailed back thinking this time it had worked. Each time, within months, the colonists pushed back and the policy collapsed.\n\n' +
        'I learned one thing. Reports, audiences with kings, royal laws — all important, none enough. The Atlantic was too wide between Madrid and Hispaniola. By the time the law reached the island, the colonists had already torn it up and fed it to dogs.\n\n' +
        'I was still young. I thought the next audience would do it. I did not yet know that the next fifty years would mostly be me running a loop I could not close.',
    },
    deliverGoal: {
      cn: '1515 我 31 岁见 Ferdinand 1 小时——他说「我相信你 + 我会调查」。3 个月后他死了,调查没了。这是我 7 次跑 Spain 见 5 任国王中第一次。Atlantic 太宽,法律传到岛上殖民者就撕了喂狗。',
      en: 'In 1515 I met Ferdinand for an hour. He said «I believe you, I will inquire.» Three months later he died and the inquiry went nowhere. This was the first of seven journeys to Spain to face five kings. The Atlantic was too wide; by the time the law reached the islands, colonists tore it up and fed it to dogs.',
    },
    engagementHook: {
      cn: '我跑回 Spain 的循环没完。但 1516 年我犯了我一辈子最大的错。',
      en: 'My loop to Spain did not close. And in 1516 I made the worst mistake of my life.',
    },
    expectedLength: '300-360 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N5 — STORY (CRITICAL CROSS-LENS ECHO):
  //   1535 Santo Domingo 修道院书桌 — 转录改写 Columbus 1493 信
  //
  //   ⭐ las Casas N5 = Columbus 1493 信的 interpreter
  //     Columbus N4 = producer / Anacaona Jr. N5 = affected party
  //
  //   历史 fact: las Casas 是 Columbus 1493 信主要现存版本的 archivist
  //              在《Historia de las Indias》I.45 真的转录了 Columbus 信
  //              + 写自己的批注 + 自己批判
  // ═══════════════════════════════════════════════════
  {
    id: 5,
    phase: 'story',
    cosplay: 'Bartolomé de las Casas',
    narrativeRef: '§3 1530s las Casas 历史档案工作 + 跨 lens micro-detail Columbus 1493 信',
    content: {
      cn:
        '1535 年某个下午,Santo Domingo(Hispaniola 首都),Dominican 修道院二楼我的房间。\n\n' +
        '我那年 51 岁。我在写一本大书,叫《Historia de las Indias》(《印度群岛史》)。我打算把 1492 年 Columbus 第一次航行起,所有西班牙在新大陆做的事,系统记下来。我手边有几堆档案——王室档案、Columbus 自己留下的信、Columbus 儿子 Diego 给我抄的副本。\n\n' +
        '我桌子上现在摊着一份东西。\n\n' +
        '是 Columbus 1493 年 2 月在 Azores 写给国王 Ferdinand 和 Isabella 的信——他第一次航行返回途中写的。原信现在已经丢了,但我手里这份是 Diego Colón 1530 年代给我抄的副本。这是欧洲第一份「美洲一手记录」。1493 年 4-5 月间它被印 9 个版本传遍欧洲。这是我们这个殖民故事的源头文件。\n\n' +
        '我读它,边读边批注。\n\n' +
        '我读到这一段——Columbus 写:「这些岛屿的人民——他们很温和——他们没有自己的宗教——50 个我们的人就能让全部 5 万人为我们工作——这里取之不尽奴隶。」\n\n' +
        '我放下笔。\n\n' +
        '——这一段我读不下去。我父亲 Pedro 1493 年跟 Columbus 第二次航行来过这座岛。我自己 1502 年 17 岁也来过这座岛。我读这封信,我看见的不是「美丽新世界」——我看见的是 Columbus 写完信几个月后,1494 年他给 Hispaniola 上 14 岁以上每个 Taíno 男人定的规矩:每 3 个月交一定量黄金,不交砍手。我看见小孩的手被砍下来扔在地上——因为父亲那一季黄金没交够。\n\n' +
        '我拿起笔,在边上写下我自己的批注:「Columbus 写 gente muy noble (西班牙文「非常高贵的人」)——但他要求他们 14 岁以上每 3 个月交一定量黄金,不交砍手。我父亲是他朋友。我 17 岁也去过同一座岛。我们错了。」\n\n' +
        '——这是我做了一辈子的事的核心:把征服者自己写的话保存下来,然后在边上写下我看到的真相。Columbus 的话「可皈依 + 可工作 + 可奴役」三件套支配了接下来 400 年殖民。我没有能力把它擦掉——但我能在它旁边写一句:「我们错了。」\n\n' +
        '我那天晚上没睡。我想:Columbus 写这封信的时候,他不觉得自己写错。他真的相信他在做好事。我 13 年的 encomendero 时,我不觉得自己做错。我也真的相信我在做好事。\n\n' +
        '错的不是「坏人」——错的是看不见的人。\n\n' +
        '我那一夜决定:我要写一本书,让 500 年后的人,看不见也得看见。',
      en:
        'One afternoon in 1535. Santo Domingo, the capital of Hispaniola. Upstairs in the Dominican monastery, in my room.\n\n' +
        'I was fifty-one. I was writing a long book — Historia de las Indias, my history of the Indies. I meant to record, year by year, everything the Spanish had done in the New World since Columbus\'s first voyage in 1492. Around me on the floor sat stacks of papers — royal archives, letters Columbus had written himself, copies that Columbus\'s son Diego had made for me.\n\n' +
        'On my desk that afternoon was a single document.\n\n' +
        'A letter Columbus had written to King Ferdinand and Queen Isabella in February 1493, on the way home from his first voyage, from the Azores. The original is lost, but the copy in my hand was made for me by Diego Colón in the 1530s. This was Europe\'s first eye-witness report of America. In April and May of 1493 it had been printed in nine different editions across Europe. It was the source document of the colonial story.\n\n' +
        'I read it. As I read I wrote in the margin.\n\n' +
        'I came to one passage. Columbus had written: «These islanders are gentle. They have no religion of their own. With fifty of our men we could make all fifty thousand of them work for us. There are slaves here without limit.»\n\n' +
        'I set the pen down.\n\n' +
        'I could not read past that line. My father Pedro had come to this island with Columbus on the second voyage in 1493. I had come to this island myself, at seventeen, in 1502. Reading this letter, what I saw was not «a beautiful new world.» What I saw was the order Columbus issued only months after writing the letter: in 1494 he commanded that every Taíno man on Hispaniola over the age of fourteen deliver a fixed quantity of gold every three months, and that any man who failed have his hand cut off. I saw the cut-off hands of children fall to the ground — because their fathers had not made the quota.\n\n' +
        'I picked up the pen. In the margin I wrote: «Columbus called them gente muy noble — Spanish for «people of great nobility.» Yet he ordered that every man over fourteen deliver gold every three months, on penalty of having his hand cut off. My father was his friend. At seventeen I came to the same island. We were wrong.»\n\n' +
        'This is the work of my life in one motion. Save the conqueror\'s own words. Then write the truth I saw in the margin beside them. Columbus\'s phrase — «can be converted, can be worked, can be enslaved» — would govern four hundred years of colonization. I could not erase it. But I could write beside it: «we were wrong.»\n\n' +
        'That night I did not sleep. I kept thinking: when Columbus wrote that letter, he did not feel he was wrong. He truly believed he was doing good. When I was an encomendero for thirteen years, I did not feel I was wrong. I truly believed I was doing good.\n\n' +
        'The wrong is not the «bad person.» The wrong is the man who cannot see.\n\n' +
        'That night I decided. I would write a book that would force people five hundred years from now to see what they could not see.',
    },
    deliverGoal: {
      cn: '1535 我在 Santo Domingo 修道院摸 Columbus 1493 信副本(Diego Colón 给我抄的)。我读到「50 个我们的人能让 5 万人为我们工作 + 取之不尽奴隶」——我放下笔。我父亲是他朋友,我 17 岁也去过同一座岛。我在边上批注「Columbus 写 gente muy noble——但他要求 14 岁以上每 3 个月交黄金不交砍手——我们错了。」 错的不是坏人——是看不见的人。',
      en: 'In 1535 in the Santo Domingo monastery I held Columbus\'s 1493 letter (a copy Diego Colón had made for me). I read «with fifty of our men we could make all fifty thousand work for us» and set the pen down. My father had sailed with him; I had come at seventeen. I wrote in the margin: «He called them gente muy noble — yet he ordered that every man over fourteen deliver gold every three months on pain of losing his hand. We were wrong.» The wrong is not the bad person; it is the man who cannot see.',
    },
    engagementHook: {
      cn: '我决定写一本书让 500 年后的人也看见。但我得先讲我 14 年前犯过的错。',
      en: 'I decided to write a book that would make people five centuries from now see. But first I have to tell you about the mistake I made fourteen years before.',
    },
    expectedLength: '380-440 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N6 — STORY (MORAL HARDEST MOMENT — careful scaffold):
  //   1516 建议非洲奴隶替代 — 道德污点
  //
  //   13 岁需要的处理:
  //     - 不轻飘飘过去
  //     - 不让孩子觉得「他是英雄但有污点」
  //     - 让孩子坐在 las Casas 1516 书桌前——他想保护 Taíno
  //       但他没意识到非洲人也是人——这是真实的有限性
  //     - AP DBQ 训练: 1516 是不是错?如果他不建议,Taíno 能逃过灭族吗?
  //                    这两个答案能同时存在吗?
  // ═══════════════════════════════════════════════════
  {
    id: 6,
    phase: 'story',
    cosplay: 'Bartolomé de las Casas',
    narrativeRef: '§3 1516 非洲奴隶建议 line 666-674 + §11 Q4 line 2146-2155',
    content: {
      cn:
        '我现在要告诉你一件我一辈子最难讲清楚的事。\n\n' +
        '1516 年——我 conversion 之后 2 年,我 32 岁。我在 Madrid 见新王 Charles V(他刚从荷兰来,16 岁刚登基)。我跟他汇报殖民地情况。我说:「Taíno 在矿上一年死一半。再这样下去 5 年内全死光。」\n\n' +
        '我那一刻心里只有一件事——我要保护 Taíno。\n\n' +
        '我在写给王室的备忘录(Memorial de Remedios)里,提了一个建议。\n\n' +
        '我建议:不要让 Taíno 在矿上死。从葡萄牙人那里买非洲奴隶来代替——非洲人对这个气候有抵抗力,对疟疾抵抗力强,体格比 Taíno 强壮,挖矿挖得动。每个西班牙殖民者可以拿配额,12 个非洲奴隶。\n\n' +
        '这是我的原话。我那一刻笔下写出来,墨水流到纸上,没有一秒迟疑。\n\n' +
        '——你现在坐在 1516 年的我的书桌前。你知道我在想什么吗?\n\n' +
        '我那一刻在想:Taíno 是「我的责任」。我亲眼看了 14 年他们死。我必须救他们。非洲奴隶——我没亲眼看过非洲。我没去过非洲。我对葡萄牙人 1450 年代起在西非买卖奴隶的整个体系——只读过几份零散的报告,我以为那是「合法贸易」(因为非洲人卖给葡萄牙人时,经常是非洲国王在卖战俘——我误以为这是「公平获得的」奴隶)。\n\n' +
        '我看不见非洲人是人。\n\n' +
        '我那一刻就跟 13 年前我看不见 Taíno 是人,完全一样。\n\n' +
        '我那一刻不是 villain。我没有恶意。我心里全是想救 Taíno。\n\n' +
        '——但「想救一个群体」+「看不见另一个群体」=「错」。\n\n' +
        '这是这个视角最难的一节。比 N2(我 13 年是奴隶主)更难。因为 N2 是 conversion 之前——「之前」可以原谅。但这是 conversion 之后。我已经读过 Sirach 34:21-23,我已经知道「夺人衣食是杀人」——我应该看见非洲人也是「邻舍」。我没看见。\n\n' +
        '我接下来要花 36 年——从 1516 到 1552——才慢慢看见。\n\n' +
        '我现在请你做一件事——别替我辩护。我自己晚年也不替自己辩护。下一节我会告诉你 1552 年我自己怎么写下「我求上帝原谅」。\n\n' +
        '但我也想请你别简化把我贴成「非洲奴隶贸易之父」。这个标签也不公——1516 年我只是几十个建议这件事的西班牙人之一,葡萄牙人 70 年前就开始这个贸易了,Charles V 不需要我建议也会买非洲奴隶。\n\n' +
        '我犯了真错。但我不是这件事的发动机。\n\n' +
        '这两件事,你能同时握住吗?',
      en:
        'I have to tell you the hardest thing of my life now.\n\n' +
        'In 1516 — two years after my conversion, age thirty-two — I traveled to Madrid to meet the new king, Charles V (he had just arrived from the Low Countries, sixteen years old, freshly crowned). I reported on the colonies. I said: «In the mines, half the Taíno die in a year. At this rate, in five years they will all be dead.»\n\n' +
        'In that moment, only one thing was in my mind. I have to save the Taíno.\n\n' +
        'In a memorandum I wrote for the crown (Memorial de Remedios), I made a proposal.\n\n' +
        'I proposed: do not let the Taíno die in the mines. Buy African slaves from the Portuguese to replace them — Africans, I argued, were resistant to this climate, resistant to malaria, physically stronger than the Taíno, and able to bear the mining work. Each Spanish colonist could be allotted a quota — twelve African slaves.\n\n' +
        'These are my own words. In that moment my pen ran and ink went to the page without a second\'s hesitation.\n\n' +
        'You are now sitting at my 1516 desk. Do you know what I was thinking?\n\n' +
        'I was thinking: the Taíno are «my responsibility.» I have watched them die with my own eyes for fourteen years. I must save them. African slaves — I have never seen Africa with my own eyes. I have never been to Africa. About the whole Portuguese trade in West African slaves, started in the 1450s, I had only read a few scattered reports. I assumed it was «legitimate trade,» because Africans sold to Portuguese were often war captives sold by African kings, and I had falsely believed this made them «justly acquired» slaves.\n\n' +
        'I could not see the African as a person.\n\n' +
        'In that moment I was exactly the man I had been thirteen years earlier when I could not see the Taíno as a person.\n\n' +
        'In that moment I was not a villain. I felt no malice. My whole heart was on saving the Taíno.\n\n' +
        'But «wanting to save one group» plus «failing to see another group» equals «wrong.»\n\n' +
        'This is the hardest passage in this perspective. Harder than N2 (the thirteen years I was a slaveholder). Because N2 was before my conversion — before is forgivable. This was after. I had already read Sirach 34:21-23. I already knew that «to take a neighbor\'s living is to kill him.» I should have seen the African as «neighbor.» I did not.\n\n' +
        'It would take me thirty-six years — from 1516 to 1552 — to begin to see.\n\n' +
        'I want to ask one thing of you. Do not defend me. I did not defend myself in old age either. The next section will tell you how, in 1552, I wrote down with my own hand: «I beg God\'s forgiveness.»\n\n' +
        'But also do not simplify me into «the father of the African slave trade.» That label is also unfair. In 1516 I was one of dozens of Spaniards making this kind of recommendation; the Portuguese had been running the trade for seventy years; Charles V did not need my advice to buy African slaves.\n\n' +
        'I made a real wrong. But I was not the engine of this evil.\n\n' +
        'Can you hold both of those at the same time?',
    },
    deliverGoal: {
      cn: '1516 我 32 岁见 Charles V,提议非洲奴隶替代 Taíno——每殖民者 12 个配额。我那一刻只想救 Taíno + 看不见非洲人是人——跟我 13 年前看不见 Taíno 是人完全一样。这是我 conversion 之后犯的错——更难原谅。我 36 年才慢慢看见。别替我辩护——但也别贴「非洲奴隶贸易之父」的简化标签。两件事能同时握住吗?',
      en: 'In 1516 at thirty-two I met Charles V and proposed African slaves to replace dying Taíno — twelve per colonist. In that moment I wanted only to save the Taíno and could not see the African as a person — exactly as I could not see the Taíno thirteen years earlier. This was post-conversion. Harder to forgive. It would take me thirty-six years to begin to see. Do not defend me. But do not flatten me into «father of the African slave trade» either. Can you hold both?',
    },
    engagementHook: {
      cn: '36 年我才慢慢看见。但在那 36 年里我做了别的真事——1542 写了一本震惊欧洲的书。',
      en: 'It would take me thirty-six years to begin to see. In those years I did something real — in 1542 I wrote a book that shook Europe.',
    },
    expectedLength: '420-490 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N7 — STORY: 1542 写《Brevísima Relación》+ 1542 New Laws
  // ═══════════════════════════════════════════════════
  {
    id: 7,
    phase: 'story',
    cosplay: 'Bartolomé de las Casas',
    narrativeRef: '§3 1542 Brevísima line 639-656 + §6 文献 2 line 1500-1561',
    content: {
      cn:
        '1542 年我 58 岁,在 Valladolid(西班牙中部小城,那时候王室经常住这里)。我刚写完一本 60 多页的小册子,叫《Brevísima Relación de la Destrucción de las Indias》——《简短叙述印度群岛的毁灭》。\n\n' +
        '我把手稿放在国王 Charles V 面前。\n\n' +
        '这本书 60 页——但每一页都重。\n\n' +
        '我没用抽象数字。我用具体的:Hispaniola 1492 年 30 万到 100 万 Taíno → 1542 年只剩 200 个。我亲眼见。我用具体名字 + 具体地点 + 具体年份。\n\n' +
        '我写一段:「在 Hispaniola 一座村,西班牙人把 13 个 Taíno 绑成一束,用斧头一斧砍 13 人,作为「实验」——看斧头能不能一下砍过 13 个。」\n\n' +
        '我写一段:「另一处,西班牙人摔婴儿头到岩石上,然后笑——他们在打赌谁的婴儿摔得最远。」\n\n' +
        '我写一段:「在 Cuba,我亲眼看西班牙人把 Taíno 喂狗——他们养专门的猎狗,训练它们咬人喉咙。」\n\n' +
        '——这是我 40 年目击的浓缩。1502 到 1542,40 年。我不能再忍受让这件事埋在档案里。\n\n' +
        '王室那一边,Charles V 读完这本书,很震动。1542 年 11 月 20 日——大概在我把书放他桌上 6 周后——他颁了 New Laws of the Indies(印度群岛新法律):废止 encomienda 继承(殖民者死后,encomienda 不能传给儿子,要还王室);禁止给新殖民者新 encomienda;禁止用印第安人做奴隶。\n\n' +
        '我那一刻觉得我赢了。50 年的奔走见王 + 40 年的目击 + 1 本 60 页的书——终于推动了制度。\n\n' +
        '——3 年后 1545 年,Peru(秘鲁)殖民者武装反抗,杀了王室派去执行 New Laws 的副王 Blasco Núñez。Charles V 怕殖民地分裂,撤回 New Laws 一半。encomienda 继续。\n\n' +
        '我没赢。我只是赢了一次,然后被推回原地。\n\n' +
        '但《Brevísima Relación》自己活下来了。1552 年正式出版,接下来 50 年翻成 5 种语言:拉丁文 1578、法文 1579、英文 1583(正好 Spanish Armada 5 年前)、荷兰文 1578、德文 1597。新教国家(英国 / 荷兰 / 德国)用我这本书做反西班牙的政治武器,塑造了 400 年的「Black Legend」(西班牙黑色传说)。\n\n' +
        '这是我没想到的反作用——我想揭露的是殖民暴力,但我意外帮新教国家洗白他们自己的殖民暴力。这件事我永远纠正不了——书一旦出版就不属于作者。',
      en:
        'In 1542, at fifty-eight, in Valladolid (a small town in central Spain where the crown often resided), I had just finished a sixty-page pamphlet — Brevísima Relación de la Destrucción de las Indias, A Short Account of the Destruction of the Indies.\n\n' +
        'I laid the manuscript on Charles V\'s desk.\n\n' +
        'Sixty pages, but every page weighed.\n\n' +
        'I did not use abstract numbers. I used the concrete: Hispaniola 1492, between three hundred thousand and a million Taíno; Hispaniola 1542, two hundred. I saw it. I named names, places, years.\n\n' +
        'One passage: «In one Hispaniola village, the Spaniards bound thirteen Taíno together and tested whether one stroke of an axe could pass through all thirteen — they wanted to know.»\n\n' +
        'Another: «Elsewhere they smashed infants\' heads on rocks and laughed; they were betting on whose infant flew furthest.»\n\n' +
        'Another: «In Cuba I watched with my own eyes Spaniards feed the Taíno to dogs — they bred a special hunting dog, trained to seize the throat.»\n\n' +
        'This was forty years of eye-witness in a single book. From 1502 to 1542 — forty years. I could not keep it buried in the archive any longer.\n\n' +
        'On the crown\'s side, Charles V read the book and was shaken. On November 20, 1542 — about six weeks after I had set the manuscript on his desk — he issued the New Laws of the Indies: encomienda would no longer be inheritable (when a colonist died, his encomienda would revert to the crown, not pass to his son); no new encomiendas would be granted to new colonists; no Indian could be made a slave.\n\n' +
        'I thought I had won. Fifty years of crossing oceans to face kings, forty years of eye-witness, one sixty-page book — at last institutional change.\n\n' +
        'Three years later, in 1545, the colonists of Peru armed themselves and killed the viceroy Blasco Núñez whom the crown had sent to enforce the laws. Charles V, fearing the colonies would secede, rolled half the New Laws back. The encomienda continued.\n\n' +
        'I had not won. I had won once, and been pushed back to where I started.\n\n' +
        'The Brevísima itself, though, lived on. It was formally printed in 1552 and translated within fifty years: Latin 1578, French 1579, English 1583 (five years before the Spanish Armada), Dutch 1578, German 1597. The Protestant nations — England, the Netherlands, Germany — used my book as a political weapon against Spain, and shaped four centuries of what was called «the Black Legend.»\n\n' +
        'This is the backfire I had not foreseen. I wanted to expose colonial violence. I ended up giving Protestant nations the cover they needed to whitewash their own. I could never correct this — once a book is printed it stops belonging to the author.',
    },
    deliverGoal: {
      cn: '1542 我 58 岁写《Brevísima Relación》60 页——具体名字 / 地点 / 年份(13 人绑成一束斧头实验 / 摔婴儿打赌 / 喂狗)。Charles V 1542/11/20 颁 New Laws 废 encomienda 继承——但 1545 Peru 殖民者武装反抗,Charles V 撤一半。我赢一次又被推回原地。书后来翻 5 种语言塑造 400 年「Black Legend」——新教国家用我的书洗白他们自己的殖民——书一旦出版不属于作者。',
      en: 'In 1542 at fifty-eight I wrote the sixty-page Brevísima — concrete names, places, years (the axe test on thirteen, infants smashed on rocks for a bet, men fed to dogs). On November 20, 1542 Charles V issued the New Laws ending the inheritance of encomienda; in 1545 the Peruvian colonists rose, killed the viceroy, and forced him to roll half the laws back. I won once and was pushed back. The book became the textual base of the «Black Legend» — Protestant nations used it to whitewash their own colonies. Once a book is printed it does not belong to the author anymore.',
    },
    engagementHook: {
      cn: '我赢一次又被推回原地。但 8 年后 1550,我有了一次更直接的对决。',
      en: 'I won once and was pushed back. But eight years later, in 1550, I had a more direct fight.',
    },
    expectedLength: '380-440 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N8 — STORY: 1550 Valladolid 辩论 vs Sepúlveda
  //   "Indians 是人吗" 历史性辩论 — 5 天 las Casas 单边发言
  // ═══════════════════════════════════════════════════
  {
    id: 8,
    phase: 'story',
    cosplay: 'Bartolomé de las Casas',
    narrativeRef: '§6 文献 2 第 2 层 line 1521-1531 + Valladolid 辩论',
    content: {
      cn:
        '1550 年 8 月,Valladolid(西班牙中部),Colegio de San Gregorio(圣格雷戈里学院)——一座小学院的辩论厅。我那年 66 岁。\n\n' +
        '这是历史上一次罕见的辩论——王室 Charles V 委派 14 位法学家 + 神学家 + 修士组成评审团,正式辩论一个问题:\n\n' +
        '「Indians(印第安人)是不是人?如果是人,西班牙征服他们合不合法?」\n\n' +
        '我对面坐的是 Juan Ginés de Sepúlveda——一个 60 岁的人文主义法学家,Charles V 的宫廷史官。他刚出版一本书《Democrates Alter》(《第二位 Democrates》),用 Aristotle 的「天生奴隶」论证为西班牙征服辩护。他主张:Indian 是 servi a natura(拉丁文「天生奴隶」),他们「献人祭 + 没文字 + 没基督教 + 风俗野蛮」——天生属于「不完整的人」,西班牙人「文明」化他们 + 强制劳动是合法的。\n\n' +
        '我那一刻心里只有一个念头:这个问题如果我输了,接下来 100 年的殖民暴力就拿到了正式神学背书。Aristotle 的话会变成接下来 4 个世纪殖民主义者最常引用的依据。\n\n' +
        '辩论分两轮。Sepúlveda 第一天发言 3 小时——读他的书。\n\n' +
        '我接着,连续 5 天发言。我不读现成稿——我用我 48 年(1502-1550)亲眼看的事举例。\n\n' +
        '我说:「Indians 不是 servi a natura。他们有自己的语言——Náhuatl(纳瓦特尔语)+ Quechua(克丘亚语)+ Maya(玛雅语)。他们有自己的文字——Maya 的象形文字,我读过他们的 codex(典籍)。他们有自己的天文——Aztec 历法 365.2422 天每年比同期欧洲精确。他们有自己的医学 + 农业 + 政治。他们说话 + 织布 + 唱诗 + 痛 + 笑——跟我们一样。」\n\n' +
        '我说:「他们献人祭——是的。但 1500 年前 Roman 也斗剑士死亡,300 年前我们烧女巫,我们 Inquisition 烧异端。每个文明都有自己的暴力阶段。我们没资格因此说他们是 servi a natura。」\n\n' +
        '我说:「Aristotle 写的话——他活在公元前 4 世纪,他从没见过 Indian。我活了 48 年在 Indians 中间。我可以告诉评审团 Aristotle 错了。错的不是 Indians,错的是我们想用 Aristotle 给我们的暴力盖章。」\n\n' +
        '辩论持续 5 天我发言。Sepúlveda 后续也答。\n\n' +
        '14 位评审团没有给出最终判决。他们犹豫,他们分成两派,他们私下信件写「las Casas 论据强,但 Sepúlveda 立场更符合王室政治需要」。最终判决一直没下,1551 年辩论解散。\n\n' +
        '——但我私下知道:大部分神学家心里站我这边。1573 年(我死后 7 年),Philip II 颁《征服法令》(Ordenanzas de descubrimiento),明确禁止「conquest(征服)」一词,改成「pacification(和平化)」。这是 Valladolid 没下来的判决,在我死后 23 年下来。\n\n' +
        '辩论我没赢。但我把「Indians 是人」作为一个问题钉进了西班牙王室的官方记录。这一钉,300 年后 1948 年联合国《人权宣言》第 1 条「人人生而自由 + 在尊严和权利上一律平等」——这个 chain 的第一个 link 就是 1550 年我跟 Sepúlveda 在 Valladolid 那 5 天。',
      en:
        'August 1550, Valladolid in central Spain, the Colegio de San Gregorio — a small academy with a debating hall. I was sixty-six.\n\n' +
        'It was a rare moment in history. Charles V had appointed fourteen jurists, theologians, and friars to sit as a formal panel and decide one question:\n\n' +
        '«Are Indians men? If they are men, is the Spanish conquest of them lawful?»\n\n' +
        'Across the chamber sat Juan Ginés de Sepúlveda — sixty years old, a humanist jurist, royal chronicler to Charles V. He had just published Democrates Alter, using Aristotle\'s natural slavery to defend the conquest. His position: Indians were servi a natura (in Latin, slaves by nature), because they «practiced human sacrifice, had no writing, had no Christianity, and were barbarous in custom.» As natural inferiors they could be «civilized» and forced into labor lawfully.\n\n' +
        'In that moment one thing was on my mind. If I lose this question, the next hundred years of colonial violence get formal theological cover. Aristotle\'s line will become the most-quoted argument of European colonialists for four centuries.\n\n' +
        'The debate ran in two rounds. On the first day Sepúlveda spoke for three hours — reading from his book.\n\n' +
        'Then I spoke. Five days. I did not read a prepared text — I used examples from forty-eight years of seeing it (1502 to 1550) with my own eyes.\n\n' +
        'I said: «Indians are not servi a natura. They have their own languages — Náhuatl, Quechua, Maya. They have their own writing — I have read Maya hieroglyphic codices. They have their own astronomy — the Aztec calendar runs 365.2422 days a year, more precise than Europe\'s of the same period. They have their own medicine, agriculture, government. They speak, weave, sing, ache, and laugh — the way we do.»\n\n' +
        'I said: «They practice human sacrifice — yes. So did Romans at the gladiator games, fifteen hundred years ago. We burned witches three hundred years ago. We burn heretics in the Inquisition. Every civilization passes through its own season of violence. None of that gives us the right to call them slaves by nature.»\n\n' +
        'I said: «Aristotle\'s line was written in the fourth century before Christ. He never saw an Indian. I have lived forty-eight years among Indians. I am here to tell the panel that Aristotle was wrong. The error is not in the Indians. The error is in our wanting Aristotle to bless our violence.»\n\n' +
        'The debate ran five days on my side. Sepúlveda answered too.\n\n' +
        'The fourteen judges never delivered a verdict. They wavered, divided, and one of them wrote in a private letter: «las Casas\'s arguments are stronger, but Sepúlveda\'s position fits the political needs of the crown better.» The panel adjourned in 1551 with no judgment.\n\n' +
        'Still — privately I knew. Most of the theologians stood with me. In 1573 — seven years after I died — Philip II issued the Ordenanzas de descubrimiento, which formally banned the word «conquest» and replaced it with «pacification.» That was the verdict Valladolid had withheld, delivered twenty-three years after my death.\n\n' +
        'I did not win the debate. But I drove the question — «are Indians men?» — into the official record of the Spanish crown. That nail held. Three hundred years later, in 1948, Article 1 of the United Nations Universal Declaration of Human Rights — «All human beings are born free and equal in dignity and rights» — the first link of that chain runs back to Valladolid, August 1550, those five days.',
    },
    deliverGoal: {
      cn: '1550/8 Valladolid 我 66 岁辩论 5 天 vs Sepúlveda(60 岁宫廷史官,用 Aristotle servi a natura 「天生奴隶」论辩护)。我用 48 年目击举例:Indians 有 Náhuatl/Quechua/Maya 语言 + Maya 象形文字 + Aztec 历法精确 365.2422 天 + 农业医学政治。他们也献人祭——但 Roman 斗剑士 / 我们 Inquisition / 烧女巫——每文明都有暴力阶段。14 评审犹豫没下判决——但 1573 Philip II 禁「conquest」一词改「pacification」。1948 联合国人权宣言第 1 条 chain 的第一个 link 在 Valladolid 1550 那 5 天。',
      en: 'August 1550 at sixty-six I debated five days in Valladolid against Sepúlveda (sixty-year court chronicler defending conquest with Aristotle\'s servi a natura, slaves by nature). I cited forty-eight years of eye-witness: Indians have Náhuatl, Quechua, Maya languages, Maya hieroglyphic writing, an Aztec calendar at 365.2422 days more precise than Europe\'s, agriculture, medicine, government. They sacrifice — yes; so did Romans at the games, so do we in the Inquisition. The fourteen judges never delivered a verdict. But in 1573 Philip II banned the word «conquest» from royal documents. The first link of the 1948 UN Universal Declaration runs back to those five days.',
    },
    engagementHook: {
      cn: 'Valladolid 没赢但钉进了一个问题。两年后 1552,我自己回头清算了 36 年前的错。',
      en: 'Valladolid did not win but it nailed the question. Two years later, in 1552, I went back and reckoned with the wrong I had made thirty-six years earlier.',
    },
    expectedLength: '420-490 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N9 — STORY (SELF-RECKONING):
  //   1552 在《Historia》后记里反思 1516 的建议
  //   「我以为非洲人是公平获得的奴隶 — 我错了 — 我后悔」
  //
  //   这是 las Casas 自己 36 年后的自我修正 — AP DBQ 思维训练材料
  // ═══════════════════════════════════════════════════
  {
    id: 9,
    phase: 'story',
    cosplay: 'Bartolomé de las Casas',
    narrativeRef: '§3 1552 反思 line 666-674',
    content: {
      cn:
        '1552 年我 68 岁。我已经回 Spain 定居,在 Valladolid 一座 Dominican 修道院。\n\n' +
        '我每天在房间里写《Historia de las Indias》——我从 1527 年开始写,已经写了 25 年,这本书最后会有 3 卷,我到死也没写完。这一年我写到第 3 卷的最后部分,我要写殖民地早期的故事。\n\n' +
        '我写到了 1516 年——我建议非洲奴隶替代 Taíno 的那一段。\n\n' +
        '我那一天坐在桌前。我可以选两条路。第一,我可以美化它,说「我那时候年轻 + 知识有限 + 时代局限——我只是没想到」。第二,我可以承认它是错。\n\n' +
        '我选了第二条。\n\n' +
        '我在《Historia》第 3 卷第 102 章里,加了一段。我把我自己 36 年前的建议引述了一遍,然后我写下我自己的批注。原文我记到现在——\n\n' +
        '「这个建议——我自己写的——我现在 68 岁回头看,我必须说清楚:这是错的。\n\n' +
        '我那时候以为非洲人是公平获得的奴隶——他们是非洲国王卖的战俘——所以买他们是合法贸易。我错了。当我后来读得多一点 + 知道得多一点,我发现葡萄牙人怎么获得这些非洲人——他们突袭非洲沿海村庄,绑架平民,有时候确实跟非洲国王交易,但很多时候是抢的。\n\n' +
        '即使是「公平获得的战俘」——一个人作为战俘可以被卖吗?一个人的生命是商品吗?我那时候没问。我现在问。\n\n' +
        '我那时候只想救 Taíno。我没看见非洲人是邻舍——是 Sirach 34:21-23 里的「邻舍」。我看不见。\n\n' +
        '我那时候做的——按我自己 1514 年的标准——是杀人。\n\n' +
        '我求上帝原谅。我求每一个因为我那张备忘录被迫上船 + 横渡大西洋 + 在矿上死的非洲人原谅。\n\n' +
        '原谅可能不来。但我必须把这个错写下来,留在书里——让 500 年后的人看见我犯过这个错,看见我自己反对自己。\n\n' +
        '一个人可以在他自己 50 年后说「我错了」——这是我能给历史的唯一一件事。」\n\n' +
        '——你现在读到的是我 68 岁那天写下的。我没有把它放在书的开头作为「英雄式忏悔」——我把它埋在第 3 卷第 102 章,跟其他叙述并列。我不要它显得高尚。我只要它在那里。\n\n' +
        '《Historia》我到死也没出版。1559 年我留下手稿,要求 Dominican 修会 40 年后再出版——我担心王室会查禁。修会的确等到 1875 年才出。我死后 309 年,我的反思才面世。\n\n' +
        '我接受这个延迟。我写的不是给我同代人——是给 500 年后的你。',
      en:
        'In 1552, age sixty-eight, I had returned to Spain for good and was settled in a Dominican monastery in Valladolid.\n\n' +
        'Every day I sat writing my Historia de las Indias. I had begun it in 1527; I had been writing for twenty-five years; eventually it would run to three volumes; I would never finish it. That year I had reached the end of the third volume, the early colonial story.\n\n' +
        'I had reached 1516 — the year I had recommended African slaves to replace the Taíno.\n\n' +
        'That day I sat at the desk. I had two choices. I could dress it up — «I was young, my knowledge was limited, my time was limited, I simply did not think it through.» Or I could call it what it was. Wrong.\n\n' +
        'I chose the second.\n\n' +
        'In Historia, volume three, chapter one hundred and two, I added a passage. I quoted my own thirty-six-year-old recommendation, and then I added my own gloss in the margin. I remember my own words still:\n\n' +
        '«This proposal — written by my own hand — I now, at sixty-eight, have to say plainly: it was wrong.\n\n' +
        'At the time I believed Africans were slaves justly acquired — that they were prisoners of war sold by African kings, that buying them was legitimate trade. I was wrong. When I read more later, when I came to know more, I learned how the Portuguese obtained these Africans — they raided African coastal villages, kidnapped commoners, sometimes traded with African kings but often simply took.\n\n' +
        'And even if a captive was «justly taken» — can a man, as a captive, be sold? Is a man\'s life a commodity? I did not ask in 1516. I ask now.\n\n' +
        'In 1516 my whole heart was on saving the Taíno. I did not see the African as «neighbor» — the «neighbor» of Sirach 34:21-23. I could not see.\n\n' +
        'What I did then, by my own standard from 1514, was killing.\n\n' +
        'I beg God\'s forgiveness. I beg the forgiveness of every African who, because of that memorandum of mine, was forced onto a ship, carried across the Atlantic, and died in a mine.\n\n' +
        'The forgiveness may not come. But I have to write the wrong down, leave it in the book — so that the people of five centuries from now can see that I made this mistake, can see me oppose myself.\n\n' +
        'A man can say «I was wrong» fifty years on. That is the one thing I can give to history.»\n\n' +
        'You are reading what I wrote that day at sixty-eight. I did not put it in the opening of the book as a «heroic confession.» I buried it in volume three, chapter one hundred and two, side by side with other narratives. I did not want it to look noble. I just wanted it there.\n\n' +
        'I never published Historia in my lifetime. In 1559 I left the manuscript with the Dominican order with the instruction to wait forty years before publishing — I feared the crown would suppress it. The order in fact waited until 1875. Three hundred and nine years after my death, my reckoning reached the public.\n\n' +
        'I accept the delay. What I wrote was not for my contemporaries. It was for you, five hundred years from now.',
    },
    deliverGoal: {
      cn: '1552 我 68 岁在 Valladolid Dominican 修道院写《Historia》第 3 卷第 102 章,引述自己 1516 建议然后批注「我错了 + 我求上帝原谅 + 求每一个因为我那张备忘录死在矿上的非洲人原谅」。我没把它放开头作英雄式忏悔——埋在第 102 章。我没出版,1559 留手稿要 40 年后出——Dominican 等到 1875,我死 309 年。我写的不是给同代人——是给 500 年后的你。',
      en: 'In 1552 at sixty-eight in the Valladolid Dominican monastery I added to volume three, chapter one hundred and two of the Historia: I quoted my own 1516 recommendation and wrote in the margin «I was wrong; I beg God\'s forgiveness; I beg the forgiveness of every African who, because of that memorandum, died in a mine.» I did not put it at the opening as heroic confession; I buried it in chapter one hundred and two. I never published it. In 1559 I left the manuscript with the Dominicans asking they wait forty years; they waited until 1875 — three hundred and nine years after my death. What I wrote was not for my contemporaries; it was for you, five hundred years from now.',
    },
    engagementHook: {
      cn: '我 68 岁写下错。我 82 岁死。剩下 14 年我做了什么?',
      en: 'At sixty-eight I wrote down the wrong. At eighty-two I died. What did I do in the fourteen years between?',
    },
    expectedLength: '400-460 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N10 — STORY: 1566/7/18 Madrid 修道院 82 岁死 — 留下未完成《Historia》
  // ═══════════════════════════════════════════════════
  {
    id: 10,
    phase: 'story',
    cosplay: 'Bartolomé de las Casas',
    narrativeRef: '§3 1566 死 line 676-695',
    content: {
      cn:
        '1566 年 7 月 18 日,Madrid,Atocha 一座 Dominican 修道院。\n\n' +
        '我 82 岁。我从 4 月起就病了——发烧 + 咳嗽 + 老人的衰弱。我躺在修道院一间小房间的木板床上。窗外是 7 月午后的炎热——Madrid 7 月气温有时候能到 38 度。\n\n' +
        '我身边没有家人(我 1514 年放掉所有奴隶 + 进 Dominican 修会以后,我一辈子没结婚,没有儿女)。只有几个 Dominican 修士兄弟和一个抄书员,他们在我床边轮流坐。\n\n' +
        '我留下的东西——\n\n' +
        '《Historia de las Indias》3 卷,2000 多页,没出版,封存到 Dominican 修会档案。\n' +
        '《Brevísima Relación》60 页,1552 年已出版,正在欧洲翻成多国语言。\n' +
        '我跟 Sepúlveda 1550 年 Valladolid 辩论的速记稿。\n' +
        '一封刚写完的给 Pope Pius V 的信——我求他给西班牙王 Philip II 施压,要求继续推进 New Laws + 保护原住民——这封信我没寄出,3 个月后 Pope 收到时我已经死。\n' +
        '50 多年间几百份给王室、给 Pope、给西班牙各殖民地总督的备忘录、报告、控诉书。\n\n' +
        '我没看见的——\n\n' +
        '我没看见 1573 年 Philip II 颁《征服法令》禁「conquest」一词改「pacification」(我 Valladolid 辩论的迟到判决——我死后 7 年)。我没看见 18-19 世纪欧洲废奴运动直接引《Brevísima》(我死后 250 年)。我没看见 1948 年联合国《人权宣言》第 1 条根子在 Valladolid 1550(我死后 382 年)。我没看见 1965 年 Vatican II 教皇公开赞扬我「为压迫者声音」(我死后 399 年)。我没看见 2002 年 Pope John Paul II 启动我的 beatification(封圣前阶段),如果完成我将是「第一位以反殖民暴力为理由的圣人」(我死后 436 年)。\n\n' +
        '我那一刻临终。修士在床边问我有没有最后的话。\n\n' +
        '我说了 4 个字。\n\n' +
        '——「我后悔我没做更多」(Me arrepiento de no haber hecho más)。\n\n' +
        '不是「我做完了」。是「我后悔我没做更多」。\n\n' +
        '我闭上眼。我死了。\n\n' +
        '——你现在听到的是 1566 年 7 月 18 日下午我闭眼之前说的最后 4 个字。我活了 64 年在新大陆相关的事上,我跑了 7 趟回 Spain,我见 5 任国王,我打 1550 一场辩论,我写一本震动欧洲的书,我犯一个 36 年才反思的错。\n\n' +
        '我死的时候,Hispaniola 上 1492 年的几十万 Taíno 还是死光了。我没救成。我的「反殖民暴力」事业,52 年(1514-1566)只换了王室一次法律(1542 New Laws,3 年后撤一半)。\n\n' +
        '从 metric(指标)上看我失败。\n\n' +
        '从 chain(链条)上看——我钉了一颗钉,300 年后被联合国接住。',
      en:
        'July 18, 1566, in Madrid, in a Dominican monastery at Atocha.\n\n' +
        'I am eighty-two. I have been ill since April — fever, cough, the old man\'s slow weakening. I lie on a plank bed in a small monastery cell. Outside is the heat of a Madrid July afternoon — the city sometimes touches forty degrees Celsius this month.\n\n' +
        'No family is with me. After 1514 — when I freed every slave and entered the Dominicans — I never married, never had children. Only a few brother friars and a copyist sit by the bed in shifts.\n\n' +
        'What I leave behind:\n\n' +
        'The three volumes of Historia de las Indias, more than two thousand manuscript pages, unpublished, sealed in the Dominican archive.\n' +
        'The sixty pages of the Brevísima Relación, printed in 1552, now being translated into a half-dozen European languages.\n' +
        'A shorthand record of my five-day debate against Sepúlveda at Valladolid in 1550.\n' +
        'A letter to Pope Pius V I have just finished — I am asking him to press Philip II of Spain to push the New Laws forward and protect the indigenous peoples — I will not live to send it; three months later, when the pope reads it, I will be dead.\n' +
        'And, across fifty years, hundreds of memoranda, reports, and indictments to the crown, to popes, to colonial governors.\n\n' +
        'What I do not see:\n\n' +
        'I do not see Philip II in 1573 ban the word «conquest» from royal documents and replace it with «pacification» — the delayed verdict of Valladolid, seven years after I die. I do not see the Brevísima cited directly by the eighteenth- and nineteenth-century European abolitionists, two hundred and fifty years on. I do not see the 1948 United Nations Universal Declaration of Human Rights trace its first article back to Valladolid 1550, three hundred and eighty-two years on. I do not see Vatican II in 1965 publicly thank me as «the voice for the voiceless,» three hundred and ninety-nine years on. I do not see Pope John Paul II in 2002 open my cause of beatification, the step before sainthood — if it ever completes, I will be «the first saint canonized for resistance to colonial violence,» four hundred and thirty-six years after my death.\n\n' +
        'In this moment I am at the end. A friar by the bed asks if I have any last word.\n\n' +
        'I speak four words.\n\n' +
        '«Me arrepiento de no haber hecho más.» «I am sorry I did not do more.»\n\n' +
        'Not «I have finished.» «I am sorry I did not do more.»\n\n' +
        'I close my eyes. I die.\n\n' +
        'These are the last four words I spoke on the afternoon of July 18, 1566, before my eyes closed. I had given sixty-four years to matters of the New World, made seven crossings back to Spain, faced five different kings, fought a five-day debate in 1550, written a book that shook Europe, and committed a wrong it took me thirty-six years to face.\n\n' +
        'When I died, the hundreds of thousands of Taíno on Hispaniola from 1492 were still gone — I had not saved them. Across fifty-two years (1514 to 1566) of fighting colonial violence, I had moved the crown to one law (the 1542 New Laws, half rolled back three years later).\n\n' +
        'Measured in metrics, I failed.\n\n' +
        'Measured in chain — I drove a single nail, and three hundred years later the United Nations caught it.',
    },
    deliverGoal: {
      cn: '1566/7/18 Madrid Atocha Dominican 修道院,82 岁,7 月午后 38 度。我留下《Historia》3 卷未出版 + 《Brevísima》正在翻 5 种语言 + Valladolid 1550 速记稿 + 给 Pope Pius V 没寄出的信。我没看见 1573 Philip II 禁 conquest 一词、1948 联合国人权宣言、1965 Vatican II、2002 Pope John Paul II 启 beatification。临终 4 字「我后悔我没做更多」。从 metric 看我失败。从 chain 看——我钉一颗钉 300 年后被联合国接住。',
      en: 'July 18, 1566, Madrid Atocha Dominican monastery, eighty-two years old, Madrid July afternoon at forty degrees. I leave behind three unpublished volumes of Historia, the Brevísima already being translated into half a dozen languages, the Valladolid 1550 shorthand, and an unsent letter to Pope Pius V. I do not see Philip II ban the word «conquest» in 1573, the 1948 UN Declaration, Vatican II 1965, or Pope John Paul II open my beatification in 2002. My last four words are «I am sorry I did not do more.» Measured in metrics, I failed. Measured in chain, I drove a single nail and three hundred years later the United Nations caught it.',
    },
    engagementHook: {
      cn: '我死了。但你刚走完我 64 年——一个真问题留给你。我是不是「完美英雄」?',
      en: 'I am gone. But you have just walked sixty-four years with me. One real question is left. Am I a «perfect hero»?',
    },
    expectedLength: '420-490 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N11 — SYNTHESIS (CHOICE/PUZZLE):
  //   13 岁孩子 reflection: las Casas 是不是「完美英雄」?
  //   错过的 36 年自我修正 = AP DBQ 思维训练
  // ═══════════════════════════════════════════════════
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§11 Q4 line 2146-2155 + Sarah audit AP DBQ 训练',
    content: {
      cn:
        '你刚扮演了 las Casas 64 年——他从 17 岁奴隶主变成 82 岁临终说「我后悔我没做更多」的反殖民斗士。\n\n' +
        '现在停下来想一个问题:\n\n' +
        '**他是不是「完美英雄」?**\n\n' +
        '想 30 秒之前,我先帮你把这件事拆开成 3 个真问题——这 3 个问题能不能同时握住,是 AP DBQ(Document-Based Question)思维训练最高级的练习。\n\n' +
        '**问题 1**:1502-1514 这 13 年他自己是 encomendero。这 13 年算不算他的「黑历史」?\n\n' +
        '——一种说法:算。他亲眼看了 13 年屠杀,还参与了 Cuba 1512 征服。他不是不知道,他是不在乎。这 13 年里他享受了奴隶劳动的好处。conversion(皈依)再深刻,也擦不掉这 13 年。\n\n' +
        '——另一种说法:1500 年代欧洲所有人都这么做。要求一个 18 岁的人在他那个时代「先看见」对方文化复杂——是 21 世纪的标准强加在 16 世纪。conversion 之所以有意义,正是因为它不是「一直对」——是「曾经错,后来认」。\n\n' +
        '**问题 2**:1516 年他建议非洲奴隶替代——错没错?\n\n' +
        '——一种说法:错得离谱。他刚 1514 年读完 Sirach 34:21-23 知道「夺人衣食是杀人」,2 年后就把这个标准只用在 Taíno,看不见非洲人。这是 conversion 的不彻底,是道德上的失败。\n\n' +
        '——另一种说法:他 1552 年自己反思 + 自己写下「我错了 + 我求上帝原谅」+ 把这个错埋在《Historia》第 102 章。一个人能在 36 年后承认自己错——这件事比一开始就对更稀有。我们这个时代,有几个人 36 年后承认自己错?\n\n' +
        '——还有第三种说法:如果他 1516 不建议非洲奴隶,那 Taíno 1492-1542 的灭族会延后吗?会更慢吗?会更少人死吗?——答案大概是不会。葡萄牙人 1450 年代就开始非洲奴隶贸易了,没有 las Casas 1516 那张备忘录,Charles V 也会买非洲奴隶。Atlantic slave trade 接下来 350 年贩运 1200 万非洲人不是 las Casas 一张纸推动的。\n\n' +
        '——「las Casas 1516 错了」+「他不是 Atlantic slave trade 的发动机」——这两件事,你能同时握住吗?\n\n' +
        '**问题 3**:他 1550 Valladolid 没赢、1542 New Laws 3 年后被撤一半、Hispaniola Taíno 还是灭族——他「失败」了吗?\n\n' +
        '——一种说法:从 metric(指标)看,失败。Taíno 1492 年几十万,1566 年他死时还是只剩几百。他没救成一个 Taíno 部落。他 50 年的奔走从「死的人数」上看,几乎没改变什么。\n\n' +
        '——另一种说法:从 chain(链条)看,他不是失败。1573 Philip II 禁「conquest」一词、1948 联合国人权宣言、1965 Vatican II 公开赞扬、2002 启动 beatification——这是他钉的一颗钉,300-400 年后接住。改变不是 metric——改变是 chain。\n\n' +
        '——这两个 frame(框架),哪个更「真」?\n\n' +
        '我现在请你做一件事——别选「他是英雄」,也别选「他不是英雄」。坐在「他是 + 他不是」的中间,30 秒。\n\n' +
        '这就是 AP DBQ 真正在训练的能力——不是「下结论」,是「同时握住两个看似矛盾的真相」。\n\n' +
        '历史没有 villain,也没有「完美英雄」。\n\n' +
        '历史只有人——犯过错、会反思、有局限的人。',
      en:
        'You have just played las Casas across sixty-four years — from a seventeen-year-old slaveholder to an eighty-two-year-old dying with the words «I am sorry I did not do more.»\n\n' +
        'Now stop and ask one question.\n\n' +
        '**Was he a «perfect hero»?**\n\n' +
        'Before you take thirty seconds, let me unfold the question into three smaller real questions — whether you can hold all three at the same time is the highest form of AP DBQ (Document-Based Question) thinking.\n\n' +
        '**Question 1.** From 1502 to 1514, for thirteen years, he was himself an encomendero. Do those thirteen years count as his «dark history»?\n\n' +
        'One view — yes. He watched the slaughter for thirteen years and joined the conquest of Cuba in 1512. He did not «not know.» He «did not care.» For thirteen years he enjoyed the fruits of slave labor. No conversion, however deep, can wipe those years off the record.\n\n' +
        'Another view — every European in the 1500s did this. To demand that an eighteen-year-old of that time «see first» the complexity of another culture is to impose twenty-first-century standards on the sixteenth century. The conversion has its meaning precisely because he was not «always right.» He was «wrong, then he saw.»\n\n' +
        '**Question 2.** In 1516 he recommended African slaves to replace the Taíno. Was he wrong?\n\n' +
        'One view — outrageously wrong. He had read Sirach 34:21-23 in 1514 — «to take a neighbor\'s living is to kill him» — and two years later he applied that standard only to the Taíno, blind to the African. The conversion was incomplete. A moral failure.\n\n' +
        'Another view — in 1552 he reckoned with himself, wrote «I was wrong; I beg God\'s forgiveness,» and buried the wrong in chapter one hundred and two of the Historia. A man able to call himself wrong thirty-six years later is rarer than a man who is right from the start. How many people in our own time admit they were wrong thirty-six years on?\n\n' +
        'A third view — if he had not recommended African slaves in 1516, would the destruction of the Taíno from 1492 to 1542 have been delayed? Slower? Fewer dead? Probably no. The Portuguese had been running the African slave trade since the 1450s. Without las Casas\'s 1516 memorandum, Charles V would still have bought African slaves. The Atlantic slave trade that carried twelve million Africans across the next three hundred and fifty years was not driven by one Spaniard\'s sheet of paper.\n\n' +
        '«Las Casas was wrong in 1516» + «las Casas was not the engine of the Atlantic slave trade.» Can you hold both at once?\n\n' +
        '**Question 3.** Valladolid 1550 ended without a verdict; the 1542 New Laws were half rolled back three years later; the Taíno of Hispaniola were destroyed all the same. Did he «fail»?\n\n' +
        'One view — measured in metrics, yes. Several hundred thousand Taíno in 1492, a few hundred when he died in 1566. He did not save a single Taíno community. By the metric of «people not dead,» fifty years of running barely moved the line.\n\n' +
        'Another view — measured in chain, he did not fail. Philip II banning the word «conquest» in 1573; the UN Declaration in 1948; Vatican II in 1965; the opening of his cause for beatification in 2002 — these are nails he drove in, caught three hundred to four hundred years later. Change is not a metric. Change is a chain.\n\n' +
        'Which frame is more «true»?\n\n' +
        'I want to ask you to do one thing. Do not pick «he was a hero.» Do not pick «he was not a hero.» Sit in the middle, between «he was» and «he was not,» for thirty seconds.\n\n' +
        'This is the real skill the AP DBQ is training. Not «reach a verdict.» «Hold two seemingly contradictory truths at the same time.»\n\n' +
        'There are no villains in history. There are no «perfect heroes.»\n\n' +
        'There are only people — who made mistakes, reflected, were limited.',
    },
    deliverGoal:
      'las Casas 是不是「完美英雄」拆 3 真问题(13 年 encomendero 黑历史 / 1516 非洲奴隶建议错 / 1550-1566 metric 失败 vs chain 成功)。' +
      '每问题给 2-3 view,don\'t pick 一个——hold 矛盾真相 30 秒。' +
      'AP DBQ 真训练:不是下结论是同时握两个矛盾真相。' +
      '历史没 villain 没完美英雄——只有犯过错 + 会反思 + 有局限的人。',
    engagementHook:
      '**他是不是「完美英雄」**?坐在「他是 + 他不是」的中间。想 30 秒。',
    expectedLength: '480-560 字 CN + 真问题',
    expectsRealAnswer: true,
  },

  // ═══════════════════════════════════════════════════
  // N12 — META: 16 世纪两个 conscience 革命 (Luther / las Casas)
  //   + 21 世纪 #MeToo / Snowden / TRC 模板原型
  //   + 换视角 hint
  // ═══════════════════════════════════════════════════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§6 文献 2 第 4 层 line 1543-1561 + Sarah audit Lens 2 line 173-178',
    content: {
      cn:
        '你刚走完 las Casas 11 节,他 1566 年 7 月 18 日 82 岁死在 Madrid Atocha 修道院,临终 4 字「我后悔我没做更多」。\n\n' +
        '放下这个视角之前,我想跟你讲两个 chain。\n\n' +
        '**Chain 1:16 世纪两个 conscience 革命**\n\n' +
        'las Casas 1514 年 5 月 Cuba 读 Sirach 34:21-23 决心反殖民。\n' +
        'Luther 1517 年 10 月 31 日 Wittenberg 钉 95 条决心反教廷腐败。\n\n' +
        '两人差 3 年。两人都是 30 岁左右。两人都是欧洲基督教内部的「内部反对者」。两人都不是「外部正义者」——是「自己曾经在系统里的人」。\n\n' +
        '不同的是:Luther 撕开教会(Protestants vs Catholics 永远分裂),las Casas 撕开殖民地(Indians 是不是人——这个问题钉进西班牙王室记录,300 年后接到 1948 联合国人权宣言)。\n\n' +
        '这两件事是 16 世纪欧洲 conscience 同时爆发的两个频道——一个对内(教会),一个对外(殖民地)。Renaissance 1486 Pico Oration on the Dignity of Man「人有自由选择良心」是它们共同的精神祖先。\n\n' +
        '如果你做完这一遍想换视角——\n\n' +
        '——atlas-lab/reformation 那边 Luther 视角就在等你。你会发现 Luther 1505 年雷电誓言进修道院 + 1525 年写《反农民帮派》叫贵族杀 10 万农民——他跟 las Casas 一样有真实的局限性。\n\n' +
        '——atlas-lab/renaissance 那边 1486 Pico Oration 是它们的精神祖先。\n\n' +
        '**Chain 2:las Casas 是 21 世纪「内部反对者」模板的祖父**\n\n' +
        'las Casas 不是「外部正义者」——是「自己曾经在系统里、conversion 后剩下 50 年 advocacy 的人」。这种「内部反对」+「忏悔录」模式不是孤例——\n\n' +
        '1968 年越战回归者写 Winter Soldier 听证证词揭露美军暴行——他们曾经就是开枪的士兵。\n' +
        '1995 年南非 Truth and Reconciliation Commission(真相与和解委员会)——白人警察在 Tutu 大主教面前承认自己酷刑的细节。\n' +
        '2003 年美国 Abu Ghraib 监狱虐囚事件被内部反对者揭露——他们曾经就是看守。\n' +
        '2013 年 Edward Snowden 揭露 NSA 监控——他曾经就是 NSA 承包商。\n' +
        '2017 年 #MeToo 运动 — 一些核心爆料是行业内部曾经的同谋,后来转头反抗。\n\n' +
        '——这个模式的共同结构:不是「一直对」,是「曾经错 + conversion + 剩下生命用来 advocacy」。\n\n' +
        'las Casas 是这个模式 16 世纪的原型。Sirach 34:21-23 是这个模式的圣经依据。1516 那张备忘录 + 1552 那段反思,是这个模式最早的「忏悔录」。\n\n' +
        '21 世纪我们看 Snowden / TRC / #MeToo 时,我们其实在看 las Casas 1514-1552 那 38 年的现代变体。模式同。\n\n' +
        '**最后一件事**\n\n' +
        '放下这个视角之前,给我一句话。这次扮演里,哪个瞬间最让你停了一下?\n\n' +
        '是 1502 年 4 月 17 岁我手里那张 encomienda 羊皮纸,觉得是天赐好运?\n' +
        '是 1514 年 5 月 Cuba 我读 Sirach 34:21-23 然后跪下哭一整天?\n' +
        '是 1535 年 Santo Domingo 我在 Columbus 1493 信边上写「我们错了」?\n' +
        '是 1516 年我提议非洲奴隶替代——「想救一个群体 + 看不见另一个群体 = 错」?\n' +
        '是 1552 年 68 岁我在《Historia》第 102 章埋下「我错了 + 我求上帝原谅」?\n' +
        '是 1566 年 7 月 18 日临终 4 字「我后悔我没做更多」?\n\n' +
        '一句话就行。\n\n' +
        '说完,你也可以换一个视角重玩这段:Columbus 视角看「reluctant 类型英雄」是什么感觉,Anacaona Jr. 视角看 1495 年 12 岁第一次见铁甲是什么感觉。\n\n' +
        '你也可以回 atlas-lab/reformation 看 Luther——我跟他都是 16 世纪 conscience 革命第一波,但我们撕的是不同的东西。',
      en:
        'You have walked through las Casas across eleven sections. He died on July 18, 1566, at eighty-two, in the Atocha Dominican monastery in Madrid, his last four words «I am sorry I did not do more.»\n\n' +
        'Before you set this perspective down, two chains.\n\n' +
        '**Chain 1. Two conscience revolutions of the sixteenth century.**\n\n' +
        'In May 1514, in Cuba, las Casas reads Sirach 34:21-23 and turns against colonial violence.\n' +
        'On October 31, 1517, in Wittenberg, Luther nails the ninety-five theses to the church door and turns against Roman corruption.\n\n' +
        'Three years apart. Both around thirty. Both inside European Christianity, both internal dissenters — not «outside critics» but «men who had been in the system.»\n\n' +
        'Where they differ: Luther tore the Church open (Protestants and Catholics permanently split). las Casas tore the colony open (the question «are Indians men?» nailed into the official record of the Spanish crown, caught three hundred years later by the 1948 UN Declaration of Human Rights).\n\n' +
        'These were two channels of one sixteenth-century conscience — Luther turned inward against the Church, las Casas turned outward against the colony. The Renaissance, in 1486 with Pico\'s Oration on the Dignity of Man — «the human being can choose his own conscience» — is the shared ancestor of both.\n\n' +
        'If you want to switch perspective after this playthrough:\n\n' +
        'Luther in atlas-lab/reformation is waiting. You will see Luther in 1505 swear his lightning vow into a monastery, and in 1525 write Against the Murderous, Thieving Hordes of the Peasants, calling the nobility to kill one hundred thousand peasants — he had the same real limitations las Casas did.\n\n' +
        'Pico\'s 1486 Oration in atlas-lab/renaissance is the spiritual ancestor of both.\n\n' +
        '**Chain 2. las Casas is the grandfather of the twenty-first century\'s «internal dissenter» template.**\n\n' +
        'las Casas was not an «outside critic.» He was «a man who had been in the system, who had a conversion, and gave the remaining fifty years to advocacy.» This «internal dissent + confession» pattern is not a one-off:\n\n' +
        'In 1968 Vietnam veterans gave the Winter Soldier testimony — exposing American military atrocities. They had been the soldiers pulling the trigger.\n' +
        'In 1995 South Africa\'s Truth and Reconciliation Commission saw white police officers confess, before Archbishop Tutu, the details of torture they themselves had committed.\n' +
        'In 2003 the Abu Ghraib prison abuses were exposed by inside dissenters — guards who had been part of it.\n' +
        'In 2013 Edward Snowden exposed NSA surveillance — he had been an NSA contractor.\n' +
        'In 2017 the core of the #MeToo movement included industry insiders, sometime accomplices, who turned and pushed back.\n\n' +
        'The structural shape: not «always right,» but «once wrong, then a conversion, and the rest of one life given to advocacy.»\n\n' +
        'las Casas is the sixteenth-century prototype of this shape. Sirach 34:21-23 is its biblical anchor. The 1516 memorandum and the 1552 reckoning are its earliest «confession.»\n\n' +
        'When you look at Snowden, the TRC, or #MeToo in the twenty-first century, you are looking at a modern variant of las Casas 1514-1552. Same shape.\n\n' +
        '**One last thing.**\n\n' +
        'Before you set this perspective down, give me one line. In this playthrough, which moment made you pause?\n\n' +
        'Was it April 1502, age seventeen, the encomienda parchment in your hand, thinking it was a gift from heaven?\n' +
        'Was it May 1514 in Cuba, Sirach 34:21-23, then kneeling and weeping the whole day?\n' +
        'Was it 1535 in Santo Domingo, writing «we were wrong» in the margin of Columbus\'s 1493 letter?\n' +
        'Was it 1516, the proposal to replace the Taíno with African slaves — «wanting to save one group plus failing to see another group equals wrong»?\n' +
        'Was it 1552, age sixty-eight, burying «I was wrong; I beg God\'s forgiveness» in chapter one hundred and two of the Historia?\n' +
        'Or was it July 18, 1566, the last four words: «I am sorry I did not do more»?\n\n' +
        'One line is enough.\n\n' +
        'Then you can replay this stretch through a different perspective. Columbus, to feel the «reluctant hero» from inside. Anacaona Jr., to see what it was like at twelve in 1495 to face Spanish steel for the first time.\n\n' +
        'You can also return to atlas-lab/reformation and see Luther. He and I were both the first wave of the sixteenth-century conscience revolution. We tore at different things.',
    },
    deliverGoal:
      '你扮演 las Casas 11 节——16 世纪 conscience 革命第一波。' +
      'Chain 1: las Casas 1514 vs Luther 1517 — 同代两个内部反对者,撕教会 / 撕殖民地两个频道,共同祖先 Pico 1486。' +
      'Chain 2: las Casas 是 21 世纪「内部反对者」模板的祖父——Snowden / TRC / Abu Ghraib / #MeToo 都是 1514-1552 现代变体。' +
      '换 Columbus 或 Anacaona Jr. 视角重玩。也可以回 atlas-lab/reformation 看 Luther,或 atlas-lab/renaissance 看 Pico 1486。',
    engagementHook:
      '**这次扮演里,哪个瞬间最让你停了一下**?一句话告诉我就行。',
    expectedLength: '420-490 字 CN',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// 导出 lens 对象 (待 merge 进 age-of-exploration-1492.js 主文件)
// ═══════════════════════════════════════════════════

export var lasCasasLens = {
  id: 'las-casas',
  icon: '✝️',
  name: { cn: 'Bartolomé de las Casas 拉斯卡萨斯', en: 'Bartolomé de las Casas' },
  nameCn: 'Bartolomé de las Casas 拉斯卡萨斯',
  role: {
    cn: 'Dominican 修士 / 1502-1566 lonely-mediator (孤独的内部良心调停者) 视角',
    en: 'Dominican friar / 1502-1566 lonely-mediator lens',
  },
  description: {
    cn: '你是 Bartolomé de las Casas (1484-1566),Seville 商人之子。17 岁随父到 Hispaniola,1502-1514 自己当了 13 年 encomendero(奴隶主)。1514 年 5 月在 Cuba 读 Sirach 34:21-23,你崩溃,放掉所有奴隶进 Dominican 修会。接下来 52 年你写、骂、辩、跑回 Spain 见 5 任国王。但 1516 年你犯了一辈子最大的错——建议非洲奴隶替代 Taíno,36 年后才写下「我求上帝原谅」。你是「lonely mediator(孤独的内部良心调停者)」。',
    en: 'You are Bartolomé de las Casas (1484-1566), son of a Seville merchant. At seventeen you sailed to Hispaniola; from 1502 to 1514 you yourself were an encomendero, a slaveholder, for thirteen years. In May 1514 in Cuba, reading Sirach 34:21-23, you broke, freed every Taíno you owned, and joined the Dominican order. The next fifty-two years you wrote, argued, and crossed the Atlantic seven times to face five different Spanish kings. But in 1516 you made the worst mistake of your life — recommending African slaves to replace the dying Taíno, and only thirty-six years later wrote «I beg God\'s forgiveness.» You are the lonely mediator — internal-conscience-pivot.',
  },
  perspectiveTag: 'internal-conscience-pivot',
  storyboard: lasCasasStoryboard,
};

// 默认 export 兼容(给 staging 测试用)
export default lasCasasStoryboard;

// ─── Storyboard staging 元信息 ───
export var meta = {
  topicId: 'age-of-exploration-1492',
  lensId: 'las-casas',
  schemaVersion: 2,
  status: 'staging',
  estimatedMinutes: 38,
  authoredBy: 'lens-author agent (Story-First Pedagogy v2)',
  authoredDate: '2026-05-07',
  notes: [
    'N5 cross-lens echo: 1535 Santo Domingo 修道院摸 Columbus 1493 信副本 (Diego Colón 抄)',
    '  Columbus N4 = producer, las Casas N5 = interpreter, Anacaona Jr. N5 = affected party',
    'N6 道德污点 careful scaffold: 1516 非洲奴隶建议——不轻飘飘过去,不让孩子贴「英雄但有污点」简化标签',
    '  AP DBQ 训练: 「想救一个群体 + 看不见另一个群体 = 错」+ 「他不是 Atlantic slave trade 发动机」两件事同时握住',
    'N11 reflection: 3 真问题 (13 年 encomendero 黑历史 / 1516 错 / metric vs chain 失败)',
    '  目标:hold 矛盾真相 30 秒,不下结论——AP DBQ 真训练',
    'N12 双 chain: 16 世纪 Luther vs las Casas 同代镜像 + 21 世纪 #MeToo/Snowden/TRC 16 世纪原型',
    '待 4-agent review (7thgrader 小薇 + AP teacher Dr. Park + ESL Maria + Chinese teacher 赵老师)',
  ],
};
