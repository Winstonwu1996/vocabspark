// ─── Renaissance 1500 Lens-based Storyboard (Story-First v2) ─────────
//
// Topic: 文艺复兴 1400-1600 · The Renaissance
// HSS-7.8 · AP European Period 1 · AP Art History required works
//
// 3 lens 设计 (per Sarah Chen audit + 4-agent review):
//   - lorenzo-medici  (perpetrator-actor / Florence "无冕之王" 银行家 patron)
//   - savonarola      (lonely mediator / 内部反扑者 / 1494-1498 道德权威)
//   - lucia-widow     (receiving-end commoner / 28 岁单亲妈妈 / 1497 Bonfire)
//
// 跨 lens micro-detail: 镶金小镜子
//   Lorenzo N7+N9: "Florence 文化载体" + 临终窗台镶金边在阳光下闪一下
//   Savonarola N6+N7: 约 60 英尺(18 米)火堆里"虚妄"代号 (没看见 Lucia 的脸)
//   Lucia N3+N5+N6: 嫁妆 / 唯一退路 / 5 岁女儿哭"妈妈奶奶给的东西去哪了"
//
// defaultLens = 'lucia-widow' (per Sarah + 7thgrader 推荐起手 — 同龄锚点 + 情感冲击最深)
//
// 4-agent review (5-6) 通过:
//   - 7thgrader (小 U / 13 岁中国转学加州): 4 P0 + 5 P1 全 fix
//   - AP teacher (Dr. Park / 12 yr): 4 P0 + 7 P1 全 fix (Charles VIII 24 岁 / Da Vinci 时间线 / Pazzi 80 / 跨 lens 矛盾)
//   - ESL teacher (Maria / 9 yr Irvine USD): 5 P0 + 8 P1 fix
//   - Chinese teacher (赵老师 / 北师大 12 yr): 4 P0 + 几 P1 fix (想 30 秒漏句号 / 我心里清楚译词痕迹 / 修士袍史实)
//
// 长度: 每节 200-380 字 CN / 170-260 词 EN per lens
// per AUTHORING_PIPELINE 第 7-10 条铁律全过

// ═══════════════════════════════════════════════════
// LENS 1: Lorenzo de' Medici (perpetrator-actor)
// ═══════════════════════════════════════════════════

var lorenzoStoryboard = [
  // ═══════════════════════════════════════════════════
  // N1 — HOOK
  // ═══════════════════════════════════════════════════
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Lorenzo de\' Medici',
    narrativeRef: '§3 Lorenzo 出身 1449-1469',
    content: {
      cn:
        '1469 年 12 月 2 日，Florence。我 20 岁。\n\n' +
        '父亲 Piero 三天前死了。痛风加关节炎，最后五年几乎没下过床，外号叫 "Piero il Gottoso"——痛风的 Piero。\n\n' +
        '我现在站在 Medici 宫一楼，翻账册。我们家在 Rome、Venice、Geneva、Bruges、London 五座城都开了银行——西欧三成的跨国汇款过我们的手。\n\n' +
        '我不是国王，没有任何官位。Florence 名义上是共和国（Repubblica Fiorentina），九个市民抽签当议员（Signoria）。表面上谁都不是老板。\n\n' +
        '但这一刻——这座城市从今天起，听我的。\n\n' +
        '我是 Lorenzo de\' Medici。接下来 12 节，你跟我走 23 年——你会看到我用银行家族的钱让 Florence 变成全欧洲艺术家想去的地方。同一双手，1478 年下令把约 80 个人的尸体挂出窗外。',
      en:
        'December 2, 1469. Florence. I am twenty years old.\n\n' +
        'My father Piero died three days ago. Gout and arthritis kept him bedridden most of his last five years — Florentines called him "Piero il Gottoso," Piero the Gouty.\n\n' +
        'I am standing on the ground floor of the Medici Palace, turning the pages of a ledger. We run banks in Rome, Venice, Geneva, Bruges, and London — about thirty percent of long-distance payments in western Europe pass through our hands.\n\n' +
        'I am not a king. I hold no office. Florence is technically a republic (Repubblica Fiorentina). Nine citizens, drawn by lot, sit on the Signoria — the city council. On paper, nobody is the boss.\n\n' +
        'But in this moment — from today on, this city listens to me.\n\n' +
        'I am Lorenzo de\' Medici. Over the next twelve sections, you will walk twenty-three years with me. You will see how a banker\'s money turned Florence into the place every artist in Europe wanted to come to. The same hands, in 1478, will order roughly eighty bodies hung from the windows.',
    },
    deliverGoal: {
      cn: '我 20 岁接管 Florence，没任何官位但实控全城——美和暴政是同一双手做的。',
      en: 'At 20 I took over Florence with no title — and the same hands that funded beauty also ordered killings.',
    },
    engagementHook: {
      cn: '一个 20 岁的银行家怎么实际控制一座共和城邦？倒回我家三代的爬升史。',
      en: 'How does a 20-year-old banker actually run a republic? Roll back to how my family climbed.',
    },
    expectedLength: '210-260 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N2 — SETUP: Medici 银行起源 + Florence 寡头
  // ═══════════════════════════════════════════════════
  {
    id: 2,
    phase: 'setup',
    cosplay: 'Lorenzo de\' Medici',
    narrativeRef: '§3 Cosimo 出身 1389-1429 + §2 制度 patron-client',
    content: {
      cn:
        '我家三代的故事，从一个绒线商人讲起。\n\n' +
        '1397 年，我曾祖父 Giovanni di Bicci 在 Florence 开了一家小银行——当时 Florence 几十家银行里毫不起眼的一家。1417 年他做了一件事：接下了失势教皇 John XXIII 的私人账户。从那以后，每一任教皇都把账放在 Medici Bank。\n\n' +
        '到我祖父 Cosimo 五十岁的时候，整个西欧三成的国际汇款经过我们家。Cosimo 1464 年死时，Florence 政府正式封他 Pater Patriae——祖国之父，这是一个古罗马的荣衔（当年也曾授予过 Cicero）。\n\n' +
        '我父亲 Piero 接班只活了 5 年——痛风让他几乎没下过床，但他守住了银行和政治。\n\n' +
        '现在轮到我。我从小读 Cicero 拉丁原文 + Plato 希腊原文，13 岁就被祖父派去跟教皇 Pius II 谈生意。我会写诗——意大利方言体，不是拉丁。我会骑马、击剑、跳舞。这是我祖父给我设计的"完美人"教育。\n\n' +
        '他在我 15 岁那年说过一句话："钱不是用来囤的——是用来传 Florence 的灵魂的。"那会儿我没听懂。现在我懂了。',
      en:
        'My family\'s story, in three generations.\n\n' +
        'In 1397, my great-grandfather Giovanni di Bicci opened a small bank in Florence — one of dozens, nothing special. In 1417 he did one thing: he took over the private accounts of a deposed pope, John XXIII. From that day on, every pope kept his money at the Medici Bank.\n\n' +
        'By the time my grandfather Cosimo was fifty, roughly thirty percent of every long-distance payment in western Europe flowed through our family. When Cosimo died in 1464, Florence formally awarded him the title Pater Patriae — Father of the Fatherland — an honorific from ancient Rome (once given to Cicero).\n\n' +
        'My father Piero ran things for only five years — gout kept him in bed most of the time, but he held the bank and the politics together.\n\n' +
        'Now it is my turn. I grew up reading Cicero in the original Latin and Plato in the original Greek. At thirteen my grandfather sent me to negotiate with Pope Pius II. I write poetry — in the Italian vernacular, not Latin. I ride, I fence, I dance. This was the "complete person" education my grandfather designed for me.\n\n' +
        'When I was fifteen he said one thing: "Money is not for hoarding — it is for carrying the soul of Florence forward." I did not understand him then. I do now.',
    },
    deliverGoal: {
      cn: 'Medici 三代从绒线商人到欧洲第一银行家，靠的是教皇账户和耐心，不是战争。',
      en: 'My family climbed across three generations through patience and the papal accounts, not war.',
    },
    engagementHook: {
      cn: '但 Florence 不是只有 Medici 一个银行家族——还有 Pazzi。他们恨我们。',
      en: 'But Florence was not Medici alone — there was another banking family, the Pazzi. They hated us.',
    },
    expectedLength: '230-280 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N3 — SETUP: Pazzi 阴谋背景
  // ═══════════════════════════════════════════════════
  {
    id: 3,
    phase: 'setup',
    cosplay: 'Lorenzo de\' Medici',
    narrativeRef: '§3 Lorenzo Pazzi 阴谋背景',
    content: {
      cn:
        '在 Florence，"银行家"从来不是一个家族独占的位子。\n\n' +
        'Pazzi 家是另一个老牌银行家族，比 Medici 资格更老。十字军时代他们的祖先从耶路撒冷带回圣火石，他们靠这个故事积累了几百年的虔诚名声。1470 年代他们已经把分行开到了 Rome、Naples，跟我们正面竞争国际生意。\n\n' +
        '1478 年我 29 岁这年，三方在 Rome 悄悄碰了头：\n\n' +
        '一方是 Pazzi 家族族长 Jacopo de\' Pazzi——他想夺回 Florence 的金融垄断。\n\n' +
        '一方是教皇 Sixtus IV——他刚把教皇的私人账户从 Medici 转到 Pazzi 名下，因为我拒绝借钱给他买 Imola 这座小城（他想送给自己的侄子）。他要把 Medici 在 Florence 的影响力一并清掉。\n\n' +
        '一方是 Salviati 大主教——Pisa 主教区，他原本想做 Florence 大主教被我挡了，恨我。\n\n' +
        '三方约定的日子是 1478 年 4 月 26 日，复活节，Florence 大教堂正午弥撒。\n\n' +
        '在欧洲基督教世界里，复活节弥撒是一年最神圣的时刻。在大教堂里、在仪式中、在整座城市最虔诚的几分钟里，他们要动手。\n\n' +
        '——他们赌的就是这个：我和弟弟 Giuliano 弥撒中绝不会披甲，我们的 30 个保镖按惯例在教堂外面等。',
      en:
        'In Florence, "banker" was never a title one family owned alone.\n\n' +
        'The Pazzi were an older banking family than the Medici. Their ancestors had supposedly brought back holy fire-stones from Jerusalem during the Crusades, and they had spent centuries trading on that pious reputation. By the 1470s they had branches in Rome and Naples, competing with us head-on.\n\n' +
        'In 1478, when I was twenty-nine, three parties met quietly in Rome:\n\n' +
        'First, the head of the Pazzi family, Jacopo de\' Pazzi, who wanted to break the Medici grip on Florentine finance.\n\n' +
        'Second, Pope Sixtus IV, who had just moved the papal accounts from the Medici to the Pazzi because I had refused to lend him money to buy the small city of Imola for one of his nephews. He wanted Medici influence in Florence wiped out along the way.\n\n' +
        'Third, Archbishop Salviati of Pisa — a man I had previously blocked from becoming Archbishop of Florence. He hated me.\n\n' +
        'The date they chose was April 26, 1478. Easter Sunday. High Mass in Florence Cathedral.\n\n' +
        'In Christian Europe, Easter Mass is the most sacred moment of the year. Inside the cathedral, during the most devout minutes of the most devout day, they were going to strike.\n\n' +
        'They counted on one thing: my brother Giuliano and I would not wear armor at Mass, and our thirty bodyguards would, as always, wait outside the church.',
    },
    deliverGoal: {
      cn: '三方阴谋——竞争对手银行家 + 教皇 + 怨主教——挑复活节大教堂下手，利用我没披甲的弱点。',
      en: 'Rival bank, pope, snubbed archbishop — three parties picked Easter Mass because I would not be armored.',
    },
    engagementHook: {
      cn: '4 月 26 日早上钟敲 11 点。我和 Giuliano 走进大教堂——这天我永远不会忘。',
      en: 'April 26, eleven in the morning. Giuliano and I walked into the cathedral. I will never forget this day.',
    },
    expectedLength: '260-310 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N4 — STORY: Pazzi 阴谋当天
  // ═══════════════════════════════════════════════════
  {
    id: 4,
    phase: 'story',
    cosplay: 'Lorenzo de\' Medici',
    narrativeRef: '§3 Lorenzo Pazzi 阴谋 1478/4/26',
    content: {
      cn:
        '1478 年 4 月 26 日，Florence 大教堂。\n\n' +
        '弥撒进行到一半。神父举起圣餐杯——这是仪式中最神圣的瞬间，全场低头屏息。\n\n' +
        '弟弟 Giuliano 24 岁，站在我左边偏后。他那天没穿胸甲——肩膀刚扭伤，胸甲压着疼。我穿了一件普通锦袍，里面也只有一件薄丝衬。\n\n' +
        '钟响到第七下的时候，左边一阵骚动。\n\n' +
        '两个刺客冲向 Giuliano。我转头时，已经晚了——第一刀刺进他后背，他往前扑倒，第二刀、第三刀、第四刀。后来在他身上数出 19 处刀伤。其中一刀直接砍断了头颅一半。他在大理石地上没说一句话就死了。\n\n' +
        '同一秒，另两个刺客冲向我。一刀划过我的脖子右侧——我用左手挡了一下，左手手背开了一道口子，但脖子那刀只划开皮没碰到颈动脉。我跟两个朋友 Francesco Nori 和 Poliziano（诗人）一起从北侧过道往圣器室冲。Francesco Nori 替我挡了一刀，胸口中刀，当场死。\n\n' +
        '我冲进圣器室，撞上青铜门，几个朋友把门反锁。外面拳头砸门的声音像鼓点。我捂着脖子，血从指缝渗出来。我听见 Poliziano 在身边说话，但脑子里只有一句：\n\n' +
        '"Giuliano 死了。我活着。从这一刻起，我会让做这件事的每一个人付出代价——这个城市，会替 Giuliano 把 1478 年记住八百年。"',
      en:
        'April 26, 1478. Florence Cathedral.\n\n' +
        'The Mass was halfway through. The priest lifted the chalice — the most sacred moment of the rite, the whole congregation bowed and silent.\n\n' +
        'My brother Giuliano was twenty-four, standing slightly behind me on my left. He had not worn his breastplate that morning — a recently sprained shoulder made it painful. I wore a plain brocade tunic with a thin silk shirt underneath. No mail.\n\n' +
        'On the seventh stroke of the bell, a commotion broke out to my left.\n\n' +
        'Two assassins lunged at Giuliano. By the time I turned, it was already too late — the first blade went into his back, he pitched forward, then a second, a third, a fourth. They later counted nineteen wounds on his body. One stroke split half his skull open. He died on the marble floor without a word.\n\n' +
        'In the same moment, two more attackers came at me. A blade slashed across the right side of my neck — I threw my left hand up to block, opened a gash across the back of it, but the neck cut tore only skin and missed the artery. With my friend Francesco Nori and the poet Poliziano, I bolted up the north aisle toward the sacristy. Francesco took a blade meant for me, square in the chest. He died on the spot.\n\n' +
        'I crashed into the sacristy, hit the bronze door with my shoulder, friends slammed it locked behind me. Fists pounded the metal outside like a drum. I held my neck. Blood seeped between my fingers. I could hear Poliziano speaking next to me, but only one thought ran through my head:\n\n' +
        '"Giuliano is dead. I am alive. From this moment on, every person who did this will pay — and this city will remember the year 1478 for the next eight hundred years on Giuliano\'s account."',
    },
    deliverGoal: {
      cn: '弟弟当场被刺 19 刀死，我脖子流血逃进圣器室——那一刻我决定让 Florence 集体记住这场报复。',
      en: 'My brother died with 19 wounds. I escaped with a slashed neck. In that moment I decided the city would remember.',
    },
    engagementHook: {
      cn: '接下来 80 天，Florence 没有任何法庭程序——直接处决了约 80 个人。',
      en: 'For the next 80 days there were no trials in Florence — roughly eighty people were simply put to death.',
    },
    expectedLength: '290-340 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N5 — STORY: 80 天复仇
  // ═══════════════════════════════════════════════════
  {
    id: 5,
    phase: 'story',
    cosplay: 'Lorenzo de\' Medici',
    narrativeRef: '§3 Lorenzo Pazzi 复仇 + Botticelli mural',
    content: {
      cn:
        '4 月 26 日下午——Florence 民众已经在街上自发动手了。Pazzi 家族的人被拖出宅院，没有任何审判。\n\n' +
        '我从圣器室出来时下了一道命令：抓人，但不要私刑，所有人交给政府。这不是仁慈，是政治算计。我要让 Salviati 大主教——一个穿着教士袍的人——被合法地吊起来。我要让全欧洲看见。\n\n' +
        '当天傍晚，Salviati 被穿着主教祭服直接吊死在 Palazzo della Signoria（市政厅）二楼窗外。他还穿着他那天早上做弥撒的紫色绸袍。绳子把他和一具 Pazzi 主谋的尸体绑在一起，两人挂在窗外整整一天。Florence 任何角落抬头都能看见。\n\n' +
        '接下来 80 天里，市政厅一共审判并处决了约 80 个人。Pazzi 家被全部抄家、流放，名字从所有公共记录里抹掉——Pazzi 在 Florence 拥有的店铺，门楣上的家徽被一锤一锤凿平。\n\n' +
        '然后我做了一件更毒的事。我雇了 Sandro Botticelli——当时 Florence 顶级画家——在市政厅外墙画 pittura infamante（耻辱画）：8 个 Pazzi 阴谋者被吊着的形象，附名字、附罪状，画在所有 Florence 人每天经过的墙上。这幅 fresco 一直保留到 1494 年我家被赶出 Florence 才被铲掉。\n\n' +
        '教皇 Sixtus IV 的反应：把我个人 excommunicate（绝罚）——从基督教世界里开除出去。然后他联合 Naples 王 Ferrante，从南面派军队进攻 Florence。\n\n' +
        '1478 年 7 月，我 29 岁，被绝罚 + 失去弟弟 + 被两个国家围攻。',
      en:
        'By the afternoon of April 26 — Florentines had already started hauling Pazzi family members out of their homes in the street, without any trial.\n\n' +
        'When I came out of the sacristy I gave one order: arrest, do not lynch, hand them all to the city. Not mercy. Calculation. I needed Archbishop Salviati — a man in clerical robes — to be hanged through formal procedure. I wanted all of Europe watching.\n\n' +
        'That evening Salviati was hanged from a second-floor window of the Palazzo della Signoria, still wearing the purple silk vestment from that morning\'s Mass. The rope bound him together with the body of one of the lay Pazzi conspirators. The two of them hung outside the window for a full day. From any corner of Florence, if you looked up, you saw them.\n\n' +
        'Over the next eighty days, the city tried and executed roughly eighty people. The Pazzi family was wiped out, exiled, their name erased from every public record. Their family crest, carved above doorways across Florence, was chiseled off stone by stone.\n\n' +
        'Then I did something colder. I hired Sandro Botticelli — at that moment the leading painter in Florence — to paint a pittura infamante, a shame-painting, on the outer wall of the city government building. Eight Pazzi conspirators shown hanging, with their names and crimes written underneath, on the wall every Florentine walked past every day. That fresco stayed there until my family was driven out of Florence in 1494.\n\n' +
        'Pope Sixtus IV\'s response: he excommunicated me personally, cutting me off from the Christian world. Then he allied with King Ferrante of Naples and launched a military invasion of Florence from the south.\n\n' +
        'July 1478. I was twenty-nine. Excommunicated, my brother dead, two states marching on my city.',
    },
    deliverGoal: {
      cn: '约 80 人被处死、Salviati 穿教士袍挂窗外、Botticelli 画耻辱壁画——我用极端报复树立威权。',
      en: 'Roughly eighty executions, an archbishop hanged in vestments, Botticelli\'s shame-fresco — I used violent display as politics.',
    },
    engagementHook: {
      cn: '接下来一年，我做了一件没人预料的事——我一个人去找敌方国王 Ferrante 谈。',
      en: 'In the year that followed I did something no one expected — I went alone to negotiate with Ferrante.',
    },
    expectedLength: '300-360 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N6 — STORY: Naples 单人外交 + 扩权
  // ═══════════════════════════════════════════════════
  {
    id: 6,
    phase: 'story',
    cosplay: 'Lorenzo de\' Medici',
    narrativeRef: '§3 Lorenzo 1469-1492 统治',
    content: {
      cn:
        '1479 年 12 月。教皇 + Naples 联军已经把 Florence 周边几座小城拿下。Florence 城里粮食价格在涨，民众开始议论：要不要把 Lorenzo 交出去换和平？\n\n' +
        '我做了一个事先没告诉任何人的决定。\n\n' +
        '12 月 6 日深夜，我从 Florence 南门出发。我没带军队。我带了一个秘书、一个翻译。骑马走了 7 天到 Naples 海岸——直接进 Ferrante 国王的城堡。\n\n' +
        'Ferrante 当时是欧洲最让人怕的国王。传说他的私人房间里——这条传闻 15 世纪欧洲人深信，今天历史学家无法证实——挂着政敌的木乃伊，他穿戴整齐每天去跟尸体说话。我去见的就是这样一个人。\n\n' +
        '我跟他谈了 3 个月。具体怎么谈下来的——账本上的来往、密室里的承诺——大部分没有留下记录。这一段是这个视角让你听见我心里在算计的事：他是讲利益的人，不是讲面子的人。我能给他海军支持，能给他贸易特权，能让他 Naples 的远房亲戚在 Florence 拿一份生意。我赌他会要这些，比要 Florence 的人头更划算。\n\n' +
        '1480 年 3 月我回到 Florence。我带回了和平条约。教皇被孤立，被迫放弃 Florence。\n\n' +
        'Florence 民众在城门口举着火把迎接我。市政厅当晚通过决议，扩大了我的实权——设立一个新的核心议会（Council of Seventy），把城邦最关键的权力收进我能掌控的圈子。我祖父 Cosimo 身后被封"祖国之父"（Pater Patriae）；我没有那个头衔，但从这一夜起，我对 Florence 的控制再没有人能撼动。\n\n' +
        '我 31 岁。从 1480 起到我死，没人再敢动 Florence。',
      en:
        'December 1479. The papal–Neapolitan army had already taken several small towns around Florence. Bread prices were climbing inside the city. People in the markets had started saying: should we hand Lorenzo over for peace?\n\n' +
        'I made a decision I told no one in advance.\n\n' +
        'On the night of December 6, I rode out of the southern gate of Florence. No army. One secretary, one translator. I rode seven days to the Neapolitan coast and walked straight into King Ferrante\'s castle.\n\n' +
        'Ferrante was, at that point, the most feared king in Europe. According to a story 15th-century Europeans believed but historians today cannot confirm, he kept the embalmed bodies of political enemies in a private room of his palace, fully dressed, and visited them every day to speak with them. That was the man I went to see.\n\n' +
        'I spent three months negotiating with him. The exact ledger of promises traded between us — most of it was never written down. This lens lets you hear what I was thinking in those rooms: this is a man who responds to interest, not to honor. I could offer him naval support. Trade privileges. A Florentine income for one of his minor Neapolitan cousins. I gambled that he would prefer those things to my severed head.\n\n' +
        'I returned to Florence in March 1480 with a peace treaty. The pope had been isolated and forced to drop the war.\n\n' +
        'Florentines met me at the gate with torches. That same night the Signoria voted to expand my real power — creating a new inner council (the Council of Seventy) that pulled the city-state\'s most important decisions into a circle I controlled. My grandfather Cosimo had been honored after his death as Father of the Fatherland (Pater Patriae); I never held that title, but from that night on, no one could shake my grip on Florence.\n\n' +
        'I was thirty-one. From 1480 until my death, no one moved against Florence.',
    },
    deliverGoal: {
      cn: '我一个人骑去敌国跟 Ferrante 谈了 3 个月——回来时市政厅扩大了我的实权，从此 12 年没人敢动 Florence。',
      en: 'I rode alone into enemy territory, negotiated three months, and came back to find the Signoria had expanded my real power.',
    },
    engagementHook: {
      cn: '接下来 13 年，我把 Florence 变成全欧洲艺术家想去的地方——这是我用银行钱做的事。',
      en: 'Over the next 13 years I turned Florence into where every artist in Europe wanted to be — paid for in banker\'s gold.',
    },
    expectedLength: '300-350 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N7 — STORY: 1480-1492 黄金期赞助
  // ═══════════════════════════════════════════════════
  {
    id: 7,
    phase: 'story',
    cosplay: 'Lorenzo de\' Medici',
    narrativeRef: '§3 Lorenzo 1469-1492 黄金期',
    content: {
      cn:
        '1480 年到 1492 年，13 年。Florence 是 Renaissance 最闪亮的中心。\n\n' +
        '我赞助艺术家不是写支票就完。我跟他们坐下来谈他们在做什么。我读 Plato 原文，自己写诗，懂他们画的雕的是什么——这跟我祖父不一样，他赞助是聪明的家族投资，我赞助是因为我自己被迷住。\n\n' +
        '两个名字最让我骄傲：\n\n' +
        '一是 Botticelli——1485 年我让他画《维纳斯的诞生》（Birth of Venus）。题材、构图全是我们 Florentine Academy 那圈人讨论出来的——那个 Academy 我拨款维持。\n\n' +
        '二是 Michelangelo——这一个我亲手栽。1489 年他 14 岁，原本是个石匠学徒。我把他接进 Medici 宫，给他单独房间，跟我儿子一桌吃饭，让他读 Plato。13 岁前他是石匠，14 岁起他是 Medici 家的人。\n\n' +
        'Leonardo da Vinci——他比 Michelangelo 大 23 岁，更早一辈。他 14 岁在我父亲那时代进 Verrocchio bottega（画室）学徒；我接班时他已经独立画家了。但 1482 年——我 33 岁——他离开 Florence 去米兰，去给 Sforza 公爵做军事工程师。我没挽留住他。这是我赞助生涯里最大的遗憾。\n\n' +
        '我引进 Florence 的不只是画和雕塑。我从 Antwerp、Venice 进口镶金小镜子——中产家庭也买得起。化妆品、方言诗集、印刷书，都通过我们家的银行网络从北方运进来。\n\n' +
        '我 30 岁的 Florence 跟 20 岁的 Florence 完全不同。这是我最骄傲的事。',
      en:
        'From 1480 to 1492, thirteen years. Florence was the brightest center of the Renaissance.\n\n' +
        'I did not patronize the way most patrons did — not a written check and goodbye. I sat with artists and talked through what they were making. I read Plato in Greek. I wrote my own poetry. That was different from my grandfather — he funded artists as a smart family investment; I funded them because I was personally captivated by what they did.\n\n' +
        'Two names I am proudest of:\n\n' +
        'First, Botticelli — in 1485 I asked him to paint "Birth of Venus." The subject, composition, all worked out in our Florentine Academy circle that I funded.\n\n' +
        'Second, Michelangelo — this one I raised personally. In 1489 he was fourteen, a stonemason\'s apprentice. I brought him into the Medici Palace, gave him his own room, sat him at my dining table with my own sons, had him read Plato. At thirteen he was a stonemason. At fourteen he was a member of the Medici household.\n\n' +
        'Leonardo da Vinci — he was twenty-three years older than Michelangelo, an earlier generation. He apprenticed in Verrocchio\'s bottega (workshop) at fourteen during my father\'s time. By the time I took over Florence he was already an independent master. But in 1482 — I was thirty-three — he left Florence for Milan, to take service with Duke Sforza as a military engineer. I could not keep him. That is the largest regret of my whole patronage career.\n\n' +
        'What I imported into Florence was not only paintings and sculpture. I brought in small gilded mirrors from Antwerp and Venice — affordable enough for a middle-class household. Cosmetics, vernacular (everyday Italian) poetry collections, printed books, all moving through our family\'s bank network from the north.\n\n' +
        'Florence at the end of my thirties was nothing like Florence at the start of my twenties. That is the thing I am proudest of.',
    },
    deliverGoal: {
      cn: '13 年里我用银行钱让 Florence 长出 Botticelli + Da Vinci + Michelangelo——并把镶金小镜子、印刷书、化妆品引进中产家庭。',
      en: 'For 13 years my bank paid for Botticelli, Leonardo, Michelangelo — and gilded mirrors, printed books, cosmetics for middle-class homes.',
    },
    engagementHook: {
      cn: '1492 年春天我 43 岁。痛风从我父亲传给我，关节炎从我祖父传给我。我快死了。',
      en: 'Spring 1492. I am 43. The gout from my father, the arthritis from my grandfather. I am dying.',
    },
    expectedLength: '320-380 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N8 — STORY: 临终 Savonarola 来访
  // ═══════════════════════════════════════════════════
  {
    id: 8,
    phase: 'story',
    cosplay: 'Lorenzo de\' Medici',
    narrativeRef: '§3 Lorenzo 1492/4/8 临终 + §3 Savonarola 1490 回 Florence',
    content: {
      cn:
        '1492 年 4 月 8 日。我躺在 Careggi 别墅的床上——Florence 城外一座 Medici 家族山间避暑庄。\n\n' +
        '我 43 岁。Medici 家族的痛风从父亲那里遗传给我，关节炎从祖父那里遗传给我。这两年我膝盖已经走不了路了，最后这几周连手指也开始变形。医生用珍珠粉混金粉给我灌下去——那年代欧洲贵族公认的"最贵药"。没用。\n\n' +
        '床边坐着我的私人医生 Pier Leoni，站着我的诗人 Poliziano，跪着我 17 岁的儿子 Piero。\n\n' +
        '我让他们去叫一个人来。\n\n' +
        'Girolamo Savonarola——一个 40 岁的 Dominican 修士，圣 Marco 修道院的院长。1490 年起他在 Florence 街头公开讲道，说自己有"先知 vision"，预言 Lorenzo 会死、Florence 会被惩罚、外国军队会来。Florence 民众已经开始相信他。\n\n' +
        'Savonarola 走进来——一身黑袍，眼睛深陷。我让所有人退下。\n\n' +
        '我请他听我的最后忏悔，给我赦免。他没说话——他只是看着我。\n\n' +
        '我们两个人在那间屋里。他没开口。但他的眼睛在问我三件事——一件比一件重——退银行钱给被榨过的工人、放掉对 Florence 共和的实际控制、承认我赞助的那些异教神话画是用穷人的代价堆起来的。\n\n' +
        '我躺在床上看着他眼睛。他知道我读到了。我也知道他读到我没法点头。\n\n' +
        '他站起来，没有给我赦免，转身走了。\n\n' +
        '我躺在那儿想——这个人 5 年后会接管 Florence。我看见了。',
      en:
        'April 8, 1492. I am lying in the bed at Careggi — the Medici family country villa in the hills outside Florence.\n\n' +
        'I am forty-three years old. The Medici gout came down to me from my father; the Medici arthritis came down from my grandfather. For two years I have not been able to walk, and these last weeks my fingers have started locking too. Doctors are pouring crushed pearl mixed with gold powder down my throat — what 15th-century European nobility considered the most expensive medicine money could buy. It is doing nothing.\n\n' +
        'My personal doctor Pier Leoni is sitting at the bedside. The poet Poliziano is standing. My seventeen-year-old son Piero is on his knees.\n\n' +
        'I tell them to send for one man.\n\n' +
        'Girolamo Savonarola — a forty-year-old Dominican friar, prior of the convent of San Marco. Since 1490 he has been preaching in the streets of Florence, claiming to have prophetic visions: Lorenzo will die, Florence will be punished, a foreign army will come. The people of Florence have started believing him.\n\n' +
        'Savonarola walks in — a black habit, hollow eyes. I send everyone else out.\n\n' +
        'I ask him to hear my final confession and grant me absolution. He says nothing — he only looks at me.\n\n' +
        'The two of us alone in that room. He does not open his mouth. But his eyes ask me three things, each weightier than the last — return the bank money to the workers I squeezed, give up real control over Florence, admit that the pagan-myth paintings I funded were paid for in the suffering of the poor.\n\n' +
        'I lie in bed looking back at his eyes. He knows I read the questions. I know he reads that I cannot nod.\n\n' +
        'He stands up, refuses absolution, and leaves the room.\n\n' +
        'I lie there thinking — this man will run Florence five years from now. I have just seen it.',
    },
    deliverGoal: {
      cn: 'Savonarola 拒绝给我临终赦免，因为我不肯把 Florence 还给共和——我看见他 5 年后会接管。',
      en: 'Savonarola refused me absolution because I would not return Florence to the republic. I saw he would replace me.',
    },
    engagementHook: {
      cn: 'Savonarola 走后我把 17 岁儿子 Piero 叫到床边——我对他和我另两个儿子有一段评价。',
      en: 'After Savonarola left I called my son Piero to the bedside — I had one thing to say about my three sons.',
    },
    expectedLength: '300-360 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N9 — STORY: 临终评 3 个儿子 + 镜子 micro-detail
  // ═══════════════════════════════════════════════════
  {
    id: 9,
    phase: 'story',
    cosplay: 'Lorenzo de\' Medici',
    narrativeRef: '§3 Lorenzo 1492 临终评儿子 Patch 3 + §3 Lucia 镜子 echo',
    content: {
      cn:
        'Savonarola 走了之后我让他们再退一会儿。\n\n' +
        '我躺在那里，想我留给 Florence 的三个儿子。\n\n' +
        'Piero，老大，17 岁，刚跪在我床边的那个。我从小没把他逼得很紧。他长得帅，运动好，但他不爱读 Plato，谈生意没耐心。\n\n' +
        'Giovanni，老二，16 岁，已经被我送进教廷做了红衣主教候选人——13 岁戴上枢机帽，史上最年轻。这孩子聪明、稳、懂得谁是要对手谁是要朋友。21 年后他会成为教皇 Leo X，把 Medici 家从流亡里带回 Florence。\n\n' +
        'Giuliano，老三，13 岁，跟我死掉的弟弟同名。心地好。但只有心地。\n\n' +
        '后来 Florence 的编年史里记下了我那天对身边人说的一句话：\n\n' +
        '"我有三个儿子——一个是傻子，一个是聪明人，一个是好人。"\n\n' +
        '这是我对 Medici 家未来 30 年最清醒的判断。老大撑不住——这个我清楚——他 23 岁会被 Florence 民众赶出城。\n\n' +
        '——\n\n' +
        '我躺在那儿还在想另一件事，没说出来：\n\n' +
        '我从 Antwerp 和 Venice 引进 Florence 的那些镶金小镜子——梳妆台上、嫁妆箱里、年轻女人手里。我房间窗台也有一面，午后阳光照下来，镶金的边在玻璃面上闪一下。我以为它们会成为 Florence 永恒的象征——一个普通家庭也能拥有美。\n\n' +
        '——这一遍让你听见我没说出口的——\n\n' +
        '我闭上眼。',
      en:
        'After Savonarola left I asked the others to step out again.\n\n' +
        'I lay there thinking about the three sons I was leaving behind to Florence.\n\n' +
        'Piero, the eldest, seventeen, the one who had just been kneeling at the bed. I had never pushed him as hard as I should have. He was handsome, athletic, but he did not love Plato and had no patience for the bank.\n\n' +
        'Giovanni, the middle son, sixteen, already moving up the Church — appointed cardinal at thirteen, the youngest in history. Intelligent. Calm. He understood who were the rivals and who were the friends. Twenty-one years from now he would become Pope Leo X and bring the Medici family back from exile to Florence.\n\n' +
        'Giuliano, the youngest, thirteen, named after my murdered brother. Good-hearted. Only good-hearted.\n\n' +
        'Florentine chroniclers later recorded what I said to those around me that day:\n\n' +
        '"I have three sons — one is a fool, one is intelligent, and one is good."\n\n' +
        'That was the clearest judgment I ever made about the next thirty years of the Medici family. The eldest would not hold — I knew this — and at twenty-three he would be driven out of Florence by the people themselves.\n\n' +
        '— —\n\n' +
        'I was also thinking about one more thing, which I did not say aloud:\n\n' +
        'Those small gilded mirrors I had imported into Florence from Antwerp and Venice — sitting on dressing tables, in dowry chests, in young women\'s hands. There was one on the windowsill of my own room. The afternoon sun would catch the gilded edge and the glass would flash. I thought they would become a permanent symbol of Florence — a regular family could own beauty.\n\n' +
        '— this lens lets you hear what I never said aloud —\n\n' +
        'I closed my eyes.',
    },
    deliverGoal: {
      cn: '我临终评 3 个儿子（傻子/聪明人/好人）+ 看着窗台那面闪着金边的镜子，以为它会成为 Florence 永恒的象征。',
      en: 'My deathbed verdict on three sons (fool, clever, good) — and the gilded mirror on the windowsill I thought would become a permanent symbol of Florence.',
    },
    engagementHook: {
      cn: '故事结束了。现在我们换个角度——回头问几个真问题。',
      en: 'The story is over. Now we step back and ask a few real questions.',
    },
    expectedLength: '320-380 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N10 — SYNTHESIS: 美 + 暴政?
  // ═══════════════════════════════════════════════════
  {
    id: 10,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§9 historiography + §11 思考问题',
    content: {
      cn:
        '你刚演完 Lorenzo de\' Medici——一个 80 天内处决约 80 人、把尸体挂出窗外，又给 14 岁的 Michelangelo 一间自己的房间的人。\n\n' +
        '这就是这一节要问的真问题：**美 + 暴政**能并存吗？\n\n' +
        '没有 Lorenzo，可能没有 Botticelli《维纳斯的诞生》，没有 Michelangelo 进 Medici 宫，没有那个让 Leonardo 成为 Leonardo 的 Florence。这是一边。\n\n' +
        '另一边，他赞助来的钱是高利贷 + 复式记账法垄断 + 跟教皇的政治交易，他对政敌的处理是 80 天内约 80 条人命，尸体挂出窗外。\n\n' +
        '两种说法都能拿出真证据：\n\n' +
        '**一种说法**（Renaissance 颂歌派，包括 19 世纪 Burckhardt 这一派）：Lorenzo 是 Renaissance 真正的 architect。他把"完美人"的理念变成可活的 — 他自己读 Plato、写诗、谈生意、骑马、统治，并把 Florence 变成下一代天才能长出来的土壤。没有他这样的人，"美"只能是想象。\n\n' +
        '**另一种说法**（修正派 + 经济史 reading）：Lorenzo 用一个银行家族的暴利买下了一座共和城邦的灵魂，然后用"赞助艺术家"这件事把暴利洗白，让八百年后的我们记住他的赞助而忘了他怎么赚的钱、怎么处理反对者。"Renaissance 的辉煌"是少数家庭对一座 6 万人城市的私人占有，挂着"美"的名义。\n\n' +
        '两边都站得住。**你怎么看**——美是值这个代价的，还是不该用这个代价换？给我你最有力的一条理由。想 30 秒。',
      en:
        'You have just played Lorenzo de\' Medici — a man who executed roughly eighty people in eighty days and hung bodies out a window, and also gave a fourteen-year-old Michelangelo his own room.\n\n' +
        'So here is the real question this section is asking: can **beauty and tyranny stand together**?\n\n' +
        'Without Lorenzo, there is probably no Botticelli "Birth of Venus," no Michelangelo in the Medici household, no Florence that turned Leonardo into Leonardo. That is one side.\n\n' +
        'On the other side: the money that paid for all of it came from interest-bearing loans, a monopoly on double-entry bookkeeping, and political deals with the popes. And his way of handling political enemies was roughly eighty lives in eighty days.\n\n' +
        'Both sides have real evidence:\n\n' +
        '**One view** (Renaissance-celebrating tradition, the 19th-century Burckhardt school and others): Lorenzo was the true architect of the Renaissance. He turned the idea of the "complete person" into a life one could actually live — he read Plato, wrote poetry, ran a bank, rode, ruled, and made Florence the soil where the next generation of geniuses could grow. Without people like him, beauty stays imagination.\n\n' +
        '**The other view** (revisionist and economic-history reading): Lorenzo used a banking family\'s profits to buy the soul of a republic, then used "patronage of the arts" to launder those profits, so that eight hundred years later we remember the patronage and forget how the money was made or how dissenters were dealt with. The "glory of the Renaissance" was a private possession of a few families over a city of sixty thousand, with "beauty" written across it.\n\n' +
        'Both sides stand. **What do you think** — was beauty worth this cost, or should it never have been bought at this cost? Give me your strongest single reason. Take thirty seconds.',
    },
    deliverGoal: {
      cn: '美 + 暴政能并存吗？两种说法都拿得出真证据——你给一条最有力的理由就够了。',
      en: 'Can beauty and tyranny coexist? Both views have evidence. Give me your strongest single reason.',
    },
    engagementHook: {
      cn: '**你怎么看**——美值这个代价吗？想 30 秒。',
      en: 'What do you think — was beauty worth this cost? Take thirty seconds.',
    },
    expectedLength: '320-380 字 CN + 真问题',
    expectsRealAnswer: true,
  },

  // ═══════════════════════════════════════════════════
  // N11 — SYNTHESIS: 跨文化锚 (Lorenzo vs 明朝皇帝)
  // ═══════════════════════════════════════════════════
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 同时代中国 + Joseph Needham',
    content: {
      cn:
        '跳出 Florence 看一眼当时的世界。\n\n' +
        'Lorenzo 1469-1492 统治 Florence 这 23 年，地球另一边是中国明朝中期。他刚接班 1469 年，中国是明宪宗成化五年；他死的 1492 年是明孝宗弘治五年。也就是说他跟成化、弘治两位皇帝同代。\n\n' +
        '两种"统治模式"在同一个 100 年里并行运行——\n\n' +
        '**中国皇帝**：血统授权（朱家姓的人才能当），管一个全国统一的帝国（1.5 亿人口 + 紫禁城在北京 + 科举选拔的官员体系），任何政策皇帝一个人决定。\n\n' +
        '**Lorenzo**：没有血统资格（Medici 是绒线商人后代，三代以前还没人听说过），没有任何官位（市政厅 Signoria 的位子是抽签的，他没去抽），管一座 6 万人的城邦，靠的是银行账户网络 + 跟教皇的私人交情 + 自己的人格吸引力。\n\n' +
        '同一个 1492 年，弘治皇帝在北京裁判全国官员升迁，Lorenzo 在 Florence 死前评 3 个儿子哪个能接班。\n\n' +
        '两种说法都能讲——\n\n' +
        '**一种说法**：Lorenzo 这种"靠钱和魅力实控城邦"的模式更"现代"——它是后来商人主导的现代世界的雏形。中国的"血统 + 大一统"是一条死胡同，所以 Joseph Needham 问"为什么科学革命没在中国发生"。\n\n' +
        '**另一种说法**：这种比较本身误导。明朝弘治治理 1.5 亿人 + 维持 200 年帝国 + 留下完整的法律和官员体系，这不是"落后版的 Lorenzo"，这是另一个完全不同 scale 的政治成就。说哪个更"现代"，是用 19 世纪欧洲的眼光给 15 世纪贴标签。两种 path 都是在自己的问题里找答案。\n\n' +
        '两边都站得住。哪一种你觉得更说服你？想 30 秒。',
      en:
        'Step out of Florence and look at the bigger picture.\n\n' +
        'Lorenzo ruled Florence from 1469 to 1492, twenty-three years. On the other side of the planet, that is China in the middle of the Ming dynasty. When he took over in 1469, the Ming year was Chenghua 5; when he died in 1492, it was Hongzhi 5. He was the contemporary of two Chinese emperors, Chenghua and Hongzhi.\n\n' +
        'Two different "models of rule" running in parallel in the same century —\n\n' +
        '**The Ming emperor**: authority by bloodline (only a man surnamed Zhu could be emperor), governing a unified empire of about 150 million people, with the Forbidden City in Beijing and an exam-selected official class. Every policy decided by one person.\n\n' +
        '**Lorenzo**: no bloodline qualification at all (the Medici were descended from a wool merchant, unheard of three generations earlier). No formal office (the city council seats were filled by lot, and he did not enter the lot). Running a city-state of sixty thousand. Held in place by a network of bank accounts, personal friendship with popes, and his own charisma.\n\n' +
        'In the same year, 1492, the Hongzhi emperor was reviewing nationwide promotions of officials in Beijing, while Lorenzo on his deathbed in Florence was rating which of his three sons could succeed him.\n\n' +
        'Two ways to read this —\n\n' +
        '**One view**: Lorenzo\'s "rule by money and charisma over a city-state" was the more modern form — it foreshadowed the merchant-led modern world. China\'s "bloodline plus unified empire" was a dead end. This is roughly the question Joseph Needham asked: why did the scientific revolution happen in Europe, not in China?\n\n' +
        '**The other view**: that comparison is misleading. Hongzhi was governing 150 million people and maintaining a two-hundred-year empire with a complete legal system and an official class. That is not a "backward version of Lorenzo." It is a political achievement on a different scale, in a different problem-space. To call one of them "more modern" is to put a 19th-century European frame onto two 15th-century answers to two different questions.\n\n' +
        'Both sides stand. Which one is more persuasive to you? Take thirty seconds.',
    },
    deliverGoal: {
      cn: '我跟成化/弘治皇帝同代——两种"统治模式"在同一个 100 年并行——一边是血统大一统，一边是钱 + 魅力 + 城邦。',
      en: 'I lived in the same century as the Chenghua and Hongzhi emperors — bloodline empire vs money-and-charisma city-state, side by side.',
    },
    engagementHook: {
      cn: '钱+魅力的城邦 vs 血统大一统的帝国，哪种更"现代"——先在心里想想你怎么看，下一节我会正式问你。',
      en: 'A city-state of money and charisma vs a bloodline empire — which is more "modern"? Sit with it for a moment; I will ask you properly in the next section.',
    },
    expectedLength: '320-380 字 CN + 真问题',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N12 — META
  // ═══════════════════════════════════════════════════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§4 1492-1494 黑洞 + Patch 3',
    content: {
      cn:
        '你刚扮演了 Lorenzo de\' Medici 12 节——他的接班、他差点被刺杀、他的复仇、他的赞助、他临终的 3 个儿子评价。\n\n' +
        'Lorenzo 死了。但故事在 Florence 还会继续——\n\n' +
        '你 17 岁的傻子儿子 Piero II 接班，2 年后被 Florence 民众赶出城。Medici 家族流亡 18 年。最后通过你的次子 Giovanni——21 年后他当上教皇 Leo X——Medici 才回到 Florence。\n\n' +
        '你死后 5 年，1497 年 2 月 7 日，Savonarola 在 Florence 中心广场点起一堆约 60 英尺（18 米）高的木头堆，让全城把"虚妄之物"上交。镶金小镜子、化妆品、古典书、异教雕像，还有 Botticelli 自己烧自己的几幅画，都在那把火里。这是你统治了 23 年的城市。\n\n' +
        '——\n\n' +
        '放下这一遍之前，给我说一件事。\n\n' +
        '这次扮演里，哪个瞬间最让你停了一下？是你弟弟 Giuliano 在大教堂里被刺 19 刀那一刻？是你单骑去 Naples 跟 Ferrante 谈判那 3 个月？是 Savonarola 拒绝给你赦免转身走出去那一段？还是你临终评 3 个儿子那一句"傻子、聪明人、好人"？\n\n' +
        '一句话就够，不用展开。\n\n' +
        '说完，你可以选——进 atlas-lab/renaissance 看完整 timeline 跟 Da Vinci / Michelangelo / Raphael / Vittoria Colonna 的位置，或者换一个视角重玩这段历史，从 Savonarola 那边或者一个普通 Florence 寡妇 Lucia 那边看。',
      en:
        'You have just walked through Lorenzo de\' Medici across twelve sections — his accession, the near-assassination, his revenge, his patronage, the last verdict on his three sons.\n\n' +
        'Lorenzo is dead. But the story in Florence keeps going —\n\n' +
        'Your seventeen-year-old foolish son Piero II takes over and is driven out of the city by the Florentines themselves two years later. The Medici family lives in exile for eighteen years. They only return when your second son Giovanni — twenty-one years from your death — becomes Pope Leo X.\n\n' +
        'Five years after you die, on February 7, 1497, Savonarola lights a bonfire about sixty feet (eighteen meters) high in the central square of Florence, ordering the whole city to bring out their "vanities." The gilded mirrors, the cosmetics, the classical books, the pagan sculpture, and a few of Botticelli\'s own paintings burned by his own hand — they all go into that fire. This is the city you ran for twenty-three years.\n\n' +
        '— —\n\n' +
        'Before you set this one down, tell me one thing.\n\n' +
        'In this playthrough, what was the moment that made you pause? Was it the moment your brother Giuliano took nineteen wounds in the cathedral? The three months you spent alone negotiating with Ferrante in Naples? Savonarola turning his back and walking out without absolving you? Or the deathbed line about three sons — "a fool, a clever one, a good one"?\n\n' +
        'One line is enough. No need to explain.\n\n' +
        'After that, you can choose — open atlas-lab/renaissance to see the full timeline and where Leonardo, Michelangelo, Raphael, Vittoria Colonna sit in it, or replay this same history from a different angle, from Savonarola\'s side or from an ordinary Florentine widow named Lucia.',
    },
    deliverGoal: {
      cn: '我死后 Florence 5 年内全部反转——Piero II 被赶出 + Savonarola 接管 + 烧 Vanity——你扮演完，选一个最让你停下来的瞬间。',
      en: 'Five years after my death the city reverses — Piero exiled, Savonarola in charge, the bonfire. Pick the moment that made you pause.',
    },
    engagementHook: {
      cn: '走完 Lorenzo 这一生——钱、魅力、艺术赞助撑起一座城邦，死后 5 年全反转。先回答一个：钱+魅力的城邦 vs 血统大一统的帝国，你觉得哪种更"现代"、更说服你？再想一步：这次扮演里哪个瞬间最让你停了一下，为什么是它？一句话就够。',
      en: 'You have walked the whole of Lorenzo — money, charisma, and art patronage holding a city-state together, all reversed within five years of his death. First, one question: a city-state of money and charisma vs a bloodline empire — which feels more "modern," more persuasive to you? Then go one step further: which moment in this playthrough made you pause, and why that one? One line is enough.',
    },
    expectedLength: '230-270 字 CN',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// LENS 2: Savonarola (lonely mediator)
// ═══════════════════════════════════════════════════

var savonarolaStoryboard = [
  // ═════ N1 hook — 1452 Ferrara + 19 岁出走 ═════
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Girolamo Savonarola',
    narrativeRef: '§3 Savonarola 出身 + Ferrara 名医家',
    content: {
      cn:
        '我叫 Girolamo Savonarola。1452 年我生在 Ferrara，意大利东北部一个公爵家附近的小城。\n\n' +
        '我父亲 Niccolò 是 Ferrara 公爵的私人医生。家里希望我也读医，子承父业、稳定、体面。我家书架上摆着 Aristotle、Galen、Avicenna 的医学全集，我从 12 岁起每天读这些。\n\n' +
        '但我也读别的：圣经、Augustine、几本写教会腐败的小册子。我 18 岁那年写了一首诗，叫《On the Ruin of the World》（论世界的崩坏）。诗里我说，整个意大利的奢华、整个教会的买卖赦免、整个 Renaissance 上层的优雅，都是建在穷人和真信仰之上的烂楼。家里人读完不说话。我父亲那一晚没看我。\n\n' +
        '1475 年 4 月一个雨夜，我 23 岁，从 Ferrara 家里走出来，没告诉家人。我背着一个布袋，里面有我抄的圣经、那首诗的手稿、一件换洗的粗布衣。我走 50 公里到 Bologna，敲多明我会修道院的门——粗布衣是入会前我自己穿的，会袍要进去之后才发。\n\n' +
        '我留下一封信给我父亲：我不能活在这个堕落世界里，我必须献身上帝。\n\n' +
        '我是 Girolamo Savonarola。接下来 11 节，你跟着我走 23 年——从 Ferrara 雨夜到 Florence 广场上的火。',
      en:
        'My name is Girolamo Savonarola. I was born in 1452 in Ferrara, a small city in northeastern Italy near a duke\'s court.\n\n' +
        'My father Niccolò was the personal physician to the Duke of Ferrara. My family wanted me to study medicine too: take over the practice, live a stable life, hold a respectable place. Our shelves held the complete works of Aristotle, Galen, Avicenna. I read these every day from age twelve.\n\n' +
        'But I read other things too: the Bible, Augustine, pamphlets about church corruption. At eighteen I wrote a poem called On the Ruin of the World. In it I said that all the luxury of Italy, all the selling of pardons by the Church, all the elegance of the Renaissance upper class, every bit of it stood on the backs of the poor and on the ruin of true faith. My family read it and said nothing. My father did not look at me that night.\n\n' +
        'April 1475. I was twenty-three. One rainy night I walked out of my family\'s house without telling anyone. I carried a cloth bag with my hand-copied Bible, the manuscript of that poem, and a spare friar\'s robe. I walked fifty kilometers to Bologna and entered the Dominican monastery.\n\n' +
        'I left one letter for my father: I cannot live in this corrupt world. I must give myself to God.\n\n' +
        'I am Girolamo Savonarola. Across the next eleven sections, you will walk twenty-three years with me — from a Ferrara rain to a fire in a Florence square.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我 23 岁雨夜出走，19 年后成为 Florence 道德权威，再 4 年我自己被烧。倒回我刚进修道院。',
    expectedLength: '240-280 字',
    expectsRealAnswer: false,
  },

  // ═════ N2 setup — 修道院里的内心冲突 ═════
  {
    id: 2,
    phase: 'story',
    cosplay: 'Girolamo Savonarola',
    narrativeRef: '§3 修道院期 + 18 岁诗',
    content: {
      cn:
        '在 Bologna 修道院的 7 年，我每天 4 点起床祷告。我读完 Plato 全集（San Marco 已经有 1453 年从君士坦丁堡逃来的希腊学者的译本）、Aristotle、圣经四个译本对照、Augustine、Aquinas。我也读 Petrarch，这位 Renaissance "之父"。读完他那一段写"古典美"的散文，我合上书，闭眼坐了很久。\n\n' +
        '我在心里跟自己吵架。\n\n' +
        '一边，我看见 Plato 写的那种纯粹理性、Aristotle 的严密、古典文学的优美。这些不是垃圾，这些值得读，值得保留。\n\n' +
        '另一边，我看见 Florence 的 Medici 银行家用犹太人放贷的钱赞助艺术，Rome 的教皇 Innocent VIII 公开承认 8 个私生子还把儿子塞进枢机主教位，Naples 的国王为了一场婚姻让 1500 个农民断粮。这些也是真的。\n\n' +
        '我 30 岁那年得出一个结论：Renaissance 的"优雅"和教会的腐败、上层的奢华、底层的饥饿，是一回事。优雅不是 Renaissance 的全部——优雅是奢华那一面给自己的化妆。\n\n' +
        '我相信我看到了真理。我也清楚，这个真理一旦讲出口，Florence 所有 patron、所有银行家、所有教皇，他们会变成我的敌人。\n\n' +
        '我接受。这是我的位置。',
      en:
        'In Bologna I rose at four every morning to pray. Across seven years I read all of Plato (San Marco already had translations from the Greek scholars who fled Constantinople in 1453), all of Aristotle, four parallel translations of the Bible, Augustine, Aquinas. I read Petrarch too, the so-called father of the Renaissance. After finishing his prose passage on classical beauty, I closed the book and sat with my eyes shut for a long time.\n\n' +
        'I argued with myself.\n\n' +
        'On one side: Plato\'s pure reasoning, Aristotle\'s rigor, the beauty of classical literature. These are not trash. These deserve reading. These deserve being kept.\n\n' +
        'On the other side: the Medici bankers in Florence funding art with money lent at interest, Pope Innocent VIII in Rome openly fathering eight children and placing his sons in cardinal seats, the King of Naples cutting off grain to fifteen hundred peasants for the sake of a marriage alliance. These are also real.\n\n' +
        'At thirty, I reached one conclusion: the elegance of the Renaissance and the rot of the Church, the luxury of the upper class, the hunger of the lower class, all of these are one thing. Elegance is not the whole of the Renaissance — elegance is the makeup that the rotten side wears.\n\n' +
        'I believed I had seen the truth. I also knew that once I spoke it aloud, every patron in Florence, every banker, every pope would become my enemy.\n\n' +
        'I accepted that. This is my place.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我相信真理，也知道讲出口就成所有人的敌人。1490 年我 38 岁回 Florence，你猜我第一站去哪。',
    expectedLength: '260-300 字',
    expectsRealAnswer: false,
  },

  // ═════ N3 setup — 1490 回 Florence + 街头讲先知 vision ═════
  {
    id: 3,
    phase: 'story',
    cosplay: 'Girolamo Savonarola',
    narrativeRef: '§3 1490 回 Florence + 先知 vision',
    content: {
      cn:
        '1490 年 8 月，我 38 岁，多明我会把我重新派回 Florence San Marco 修道院。这是我第二次到 Florence。第一次是 1482 年，我在这里讲了 3 年道，没人听。Florence 那时候在 Lorenzo il Magnifico 黄金期，大家爱艺术、爱享乐、爱古典。我站在讲坛上骂"罪恶 + 末日审判"，大家觉得这老和尚扫兴。1487 年我被调走。\n\n' +
        '这次我变了讲法。\n\n' +
        '我开始讲"先知 vision"。我说我看见 Florence 城市上空有一柄出鞘的剑。我说上帝对我讲过话——他要惩罚 Florence 的奢华、要惩罚教会的买卖赦免、要让一个北方军队像鞭子一样降下来。\n\n' +
        '这一遍让你听见我心里话。我看见的是不是真的"vision"？我自己分不清。我读了 15 年圣经、读了 15 年关于教会腐败的文献，我大脑里这些图像非常清晰、非常持续。说它是 vision 也好，说它是我对意大利政治的政治判断也好，对外面的人没有区别。\n\n' +
        'Lorenzo 这一年 41 岁。他从 1492 年开始痛风加重，家族遗传，我不需要 vision 也知道他活不过 50。\n\n' +
        '我在 San Marco 的讲坛上、在街头、在小教堂，每周讲 3 次。听众从 50 人涨到 500 人，再涨到 3000 人。\n\n' +
        'Florence 在等一个东西，他们自己说不清是什么。我给他们一个名字。',
      en:
        'August 1490. I was thirty-eight. The Dominican order sent me back to Florence, to San Marco. This was my second time in this city. The first was 1482; I preached three years and no one listened. Florence was in Lorenzo the Magnificent\'s golden age then. People loved art, pleasure, classical learning. I stood in the pulpit denouncing sin and the Last Judgment. People thought I was a tiresome old monk. They sent me away in 1487.\n\n' +
        'This time I changed the way I preached.\n\n' +
        'I began speaking of prophetic vision. I said I had seen a drawn sword above the city of Florence. I said God had spoken to me — He would punish the luxury of Florence, punish the Church\'s selling of pardons, send down a northern army like a whip from above.\n\n' +
        'This is the lens letting you hear what was turning in my mind. Was the vision actually real? I myself could not tell. Fifteen years of Bible reading, fifteen years of reading about Church corruption, these images burned in me, vivid and unending. Call it vision, call it political judgment about Italian politics; to the outside, the difference does not matter.\n\n' +
        'Lorenzo was forty-one this year. His gout grew worse from 1492 on, a family inheritance. I did not need a vision to know he would not see fifty.\n\n' +
        'In the pulpit at San Marco, in the streets, in small chapels, I preached three times a week. The audience grew from fifty to five hundred to three thousand.\n\n' +
        'Florence was waiting for something they could not name. I gave it a name.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '1492 年 4 月 Lorenzo 临终，他叫我去给最后忏悔。你猜我做了什么。',
    expectedLength: '260-300 字',
    expectsRealAnswer: false,
  },

  // ═════ N4 story — 1492/4/8 拒绝给 Lorenzo 赦免 ═════
  {
    id: 4,
    phase: 'story',
    cosplay: 'Girolamo Savonarola',
    narrativeRef: '§3 Lorenzo 1492/4/8 死 + 临终拒赦',
    content: {
      cn:
        '1492 年 4 月 8 日下午，我 40 岁。\n\n' +
        'Lorenzo 派人来 San Marco 接我。他在 Careggi 别墅卧床，痛风加发烧，43 岁，没几天了。我骑骡子穿过城外的橄榄园。他叫我来做什么我知道——临终忏悔。天主教这是最后一关：修士在床边听罪人最后的话，给他赦免，保证灵魂上天堂。\n\n' +
        '我走进卧室。Lorenzo 在床上瘦得脱形了。脸是灰的。他看见我，伸出右手。床边一个秘书拿着圣油。\n\n' +
        '这一遍让你听见我心里的话——我没写下来，也没说出口，但我自己知道。\n\n' +
        '我在心里问他三件事——退银行钱给被榨过的羊毛工人、放掉对 Florence 共和的实际控制、承认你赞助的 Birth of Venus 这些异教画是用穷人的泪堆起来的——三件你都做不到。我看着他眼睛问，他看着我说不出话。\n\n' +
        '他不愿意。他到死也是 Medici 银行家，不是悔罪者。\n\n' +
        '我没给他赦免。我转身离开。两小时后他死了。\n\n' +
        '我没救他的灵魂。我也不后悔。',
      en:
        'April 8, 1492. Afternoon. I was forty.\n\n' +
        'Lorenzo sent a messenger to San Marco. He lay in bed at the Careggi villa, gout and fever, forty-three years old, only days left. I rode a mule through the olive groves outside Florence. I knew what he wanted me for — final confession. In Catholic practice this is the last gate: a friar at the bedside, hearing the sinner\'s last words, granting absolution, securing the soul for heaven.\n\n' +
        'I entered the bedroom. Lorenzo lay in bed, hollowed out. His face was grey. He saw me and held out his right hand. A secretary stood by with holy oil.\n\n' +
        'This is the lens letting you hear what was turning in my mind. What I never wrote down, what I never said aloud. But I knew it.\n\n' +
        'I asked him three questions in my heart, looking into his eyes. I did not speak them. I asked through silence.\n\n' +
        'One. Will you return every coin of twenty-three years of banking profits to the wool workers you squeezed?\nTwo. Will you give up your real control over Florence and let the city hold a true election for its leadership?\nThree. Will you acknowledge that the pagan mythology paintings you funded (Birth of Venus, Pallas) were built on the tears of the poor?\n\n' +
        'His eyes were open. He did not answer. He could not speak, but I saw it in his eyes. He would not. He died a Medici banker, not a penitent.\n\n' +
        'I gave him no absolution. I turned and left. Two hours later, he was dead.\n\n' +
        'I did not save his soul. I do not regret it.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我没救他的灵魂。接下来 23 个月 Florence 进入真空，5 件大事一起爆。你猜哪件最先冲到 Florence。',
    expectedLength: '260-300 字',
    expectsRealAnswer: false,
  },

  // ═════ N5 story — 1492-1494 真空 + Charles VIII + 我接见法王 ═════
  {
    id: 5,
    phase: 'story',
    cosplay: 'Girolamo Savonarola',
    narrativeRef: '§3 Patch 3 1492-1494 黑洞 + 11/17 我接见 Charles',
    content: {
      cn:
        'Lorenzo 死后 23 个月，Florence 灵魂换轨。\n\n' +
        '1492 年 7 月，西班牙驱逐 15-20 万犹太人，一波难民带着资金和印刷术知识涌入 Florence + Venice。1492 年 8 月，哥伦布从 Palos 出航；10 月登 Bahamas。1494 年 8 月，法王 Charles VIII 24 岁带 25,000 人的大军翻 Alps 入侵意大利，他要 Naples 王位的继承权。\n\n' +
        'Piero II（Lorenzo 长子，那个"傻子"）继位 21 岁，没他父亲的政治嗅觉。Charles VIII 11 月初兵临 Florence。Piero II 软弱，直接给法王割让 Pisa 和几个边境城堡换"和平"。\n\n' +
        '11 月 9 日，Florence 民众冲进 Medici 宫，把 Piero II 全家赶出城。Medici 18 年不能回 Florence。\n\n' +
        '11 月 17 日，Charles VIII 进 Florence，25,000 大军在街上扎营。\n\n' +
        '我接见他。\n\n' +
        'Charles 24 岁，矮小，有点瘸，但他带的是欧洲第一支用火药彻底改写战争的军队，意大利雇佣兵在火炮面前不堪一击。我 42 岁，只是一个修士，没有军队，没有官职。我穿着多明我会黑白长袍走进 Palazzo della Signoria 的大厅。\n\n' +
        '我对他说一句话，用拉丁文：Florence 是上帝在意大利的城市，你只是上帝派来的工具。你来惩罚 Florence 的奢华，惩罚完，你回法国，不要碰这座城。\n\n' +
        '他看我看了很久。他怕我。他决定：拿了一笔赎金，离开。\n\n' +
        'Florence 民众认为这是奇迹，是我的"vision"挡住了 25,000 大军。\n\n' +
        '11 月底，我没有官职，但我实际控制 Florence 政治。',
      en:
        'For twenty-three months after Lorenzo\'s death, the soul of Florence changed track.\n\n' +
        'July 1492: Spain expelled 150,000 to 200,000 Jews; the refugees carried capital and printing knowledge into Florence and Venice. August 1492: Columbus sailed from Palos. October: he landed in the Bahamas. August 1494: King Charles VIII of France, twenty-four years old, crossed the Alps with twenty-five thousand troops to claim the throne of Naples.\n\n' +
        'Piero II (Lorenzo\'s eldest son, the "fool" his father named) had taken power at twenty-one without his father\'s political instinct. Charles reached the gates of Florence in early November. Piero handed over Pisa and several border fortresses for the sake of "peace."\n\n' +
        'November 9: the people of Florence stormed the Medici palace and drove the family out. The Medici would not return for eighteen years.\n\n' +
        'November 17: Charles VIII entered Florence with twenty-five thousand soldiers camping in the streets.\n\n' +
        'I received him.\n\n' +
        'Charles was twenty-four, short, with a slight limp. But he commanded the first European army to use gunpowder to fully rewrite warfare; Italian mercenaries stood no chance against his cannon. I was forty-two, only a friar, no army, no public office. I walked into the great hall of the Palazzo della Signoria in my black-and-white Dominican robe.\n\n' +
        'I said one sentence to him in Latin. Florence is God\'s city in Italy, and you are only the tool God has sent. You came to punish the luxury of Florence; when the punishment is done, return to France and do not touch this city.\n\n' +
        'He looked at me for a long time. He was afraid of me. He decided: took a payment, and left.\n\n' +
        'The people of Florence called this a miracle, said my vision had turned aside twenty-five thousand soldiers.\n\n' +
        'By the end of November, I held no office, but I controlled the politics of Florence.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '1494-1497 我没有官职但实际控制 Florence。我推 Christian Republic，你猜我下令做的第一件事。',
    expectedLength: '270-310 字',
    expectsRealAnswer: false,
  },

  // ═════ N6 story — 1494-1497 Christian Republic + Vanity Boys + 镶金小镜子 ═════
  {
    id: 6,
    phase: 'story',
    cosplay: 'Girolamo Savonarola',
    narrativeRef: '§3 Christian Republic + Vanity Boys + 镜子 micro-detail',
    content: {
      cn:
        '1494 到 1497，3 年，我推一个东西，给它名字叫 Christian Republic（基督教共和）。\n\n' +
        '具体的法律：\n\n' +
        '同性恋以前 Florence 罚款，我改判死刑。赌博之前 patron 家里整夜玩棋盘，我禁。化妆品（女人涂粉抹胭脂），我禁。奢华袍服（男人穿丝绸金线绣），我禁。古典神话画我让画家取下、上交。狂欢节之前 Florence 5 天大狂欢，我改成连续 5 天的祷告 + 街头讲道。\n\n' +
        '我做了一件事我至今认为是天才：我组织 6,000 个 9 到 16 岁的男孩，给他们白袍、给他们一个名字"Vanity Boys"（虚妄少年团），让他们上街，挨家挨户敲门，收"Vanities"。\n\n' +
        '什么是 Vanities？镜子、化妆品、香水、棋盘、乐器、化装舞会服装、Boccaccio Decameron、古希腊雕塑小像、异教神话绘画——所有"虚妄"。\n\n' +
        '6,000 个男孩穿白袍、敲门、收东西，这场面 Florence 没见过。\n\n' +
        '你想象一下。你 6 岁的儿子穿白袍站在你邻居家门口。你邻居是一个 28 岁的寡妇，她手里拿着一面镶金的小镜子，那是她娘家给她的嫁妆。她现在有两个孩子要养，她的镜子是她家最值钱的东西。她要不要交？\n\n' +
        '她交。她哭着交。\n\n' +
        '我从讲坛上看下去。我看见的不是她的脸，我看见的是几百件镜子、几百本古典书、几百盒化妆品、几百件丝绸，堆成一座约 60 英尺（18 米）高的木堆。\n\n' +
        '镜子在我眼里只是"虚妄"的代号，不是某个寡妇的嫁妆。',
      en:
        'From 1494 to 1497, three years. I built something. I called it the Christian Republic.\n\n' +
        'The new laws.\n\n' +
        'Homosexuality: Florence used to fine; I made it punishable by death. Gambling: patrons used to play board games all night in their houses; I banned it. Cosmetics (women applying powder and rouge): I banned. Luxury robes (men wearing silk embroidered with gold thread): I banned. Classical mythology paintings: I had artists take them down and surrender them. Carnival: Florence used to hold a five-day public festival; I replaced it with five days of prayer and street preaching.\n\n' +
        'I did one thing I still consider brilliant. I organized six thousand boys, ages nine to sixteen, gave them white robes, gave them a name (Vanity Boys), and sent them into the streets, door to door, collecting Vanities.\n\n' +
        'What were Vanities? Mirrors, cosmetics, perfume, board games, musical instruments, masquerade costumes, Boccaccio\'s Decameron, small Greek statues, paintings of pagan myths — every "vanity."\n\n' +
        'Six thousand boys in white robes, knocking on doors, collecting things. Florence had never seen anything like it.\n\n' +
        'Picture this. Your six-year-old son stands in a white robe at your neighbor\'s door. The neighbor is a twenty-eight-year-old widow. In her hand she holds a small mirror with a gilded frame, her wedding gift from her parents. She has two small children to raise. The mirror is the most valuable thing in her house. Will she hand it over?\n\n' +
        'She does. She hands it over weeping.\n\n' +
        'I look down from the pulpit. I do not see her face. I see hundreds of mirrors, hundreds of classical books, hundreds of boxes of cosmetics, hundreds of silk garments, piled into a wooden tower about sixty feet (eighteen meters) high.\n\n' +
        'In my eye, the mirror is only the code word "vanity." It is not anyone\'s dowry.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '1497 年 2 月 7 日 Mardi Gras。我点火，Botticelli 也来交画。你猜他交了什么。',
    expectedLength: '290-330 字',
    expectsRealAnswer: false,
  },

  // ═════ N7 story — 1497/2/7 Bonfire of the Vanities ═════
  {
    id: 7,
    phase: 'story',
    cosplay: 'Girolamo Savonarola',
    narrativeRef: '§3 1497/2/7 Bonfire + Botticelli 自交画',
    content: {
      cn:
        '1497 年 2 月 7 日，Mardi Gras（狂欢节最后一天），Piazza della Signoria 广场。\n\n' +
        '木堆已经搭了 3 天，约 60 英尺（18 米）高，8 边形，分 7 层。最底下是棋盘和乐器，中间是化妆品和镜子，上面是古典文学和异教神话画，最高一层是异教神话雕塑小像。木堆中央是一根高耸的木柱，柱上挂着一个稻草人，画着魔鬼的脸。\n\n' +
        '广场上聚了大约 1 万 5 千人。我穿黑白长袍站在广场南端，后面是 Vanity Boys 6,000 人合唱团唱赞美诗。\n\n' +
        'Botticelli 自己来了。他 51 岁。他手里拿着 3 卷他自己画的草稿（异教神话的），他自己交上去。我看见他把画放进木堆。他没看我，他低着头。我那个时刻心里想的是"看，连最大的画家也认输"，我以为这是我的胜利。\n\n' +
        '这一遍让你听见我心里没说出口的话——我没意识到的是什么。\n\n' +
        '我没意识到，Botticelli 自己交画不是因为他被我的论证折服。是他一辈子最大的犹豫：他在 Lorenzo 时代画 Birth of Venus、Pallas，画完了 Lorenzo 死了，他这 5 年不知道自己是谁。他把画交给我，是他自己想"也许 Savonarola 是对的——我画的那些异教神话也许真的是虚妄"。\n\n' +
        '他这种犹豫是 Renaissance 最深处的伤，但我那一刻看不见。\n\n' +
        '下午 3 点，我亲自点火。木堆烧 6 小时，火光照遍 Piazza。我的影子投在 Palazzo della Signoria 的墙上 6 米高。\n\n' +
        '几百年的 Florence 文化，一把火烧成灰。\n\n' +
        '广场上 1 万 5 千人，他们的脸我现在还记得，但他们手里那些镜子里照过的脸，我永远不会知道。',
      en:
        'February 7, 1497. Mardi Gras, the last day of Carnival. Piazza della Signoria.\n\n' +
        'The wooden pyre had been built for three days. About sixty feet (eighteen meters) high, eight-sided, seven tiers. The bottom: board games and instruments. The middle: cosmetics and mirrors. Above that: classical literature and pagan-mythology paintings. The top tier: small pagan statues. A tall central beam rose from the middle, with a straw effigy hanging from it, the face painted as the devil.\n\n' +
        'Around fifteen thousand people gathered. I stood in the black-and-white Dominican robe at the south end. Behind me, the six-thousand-strong Vanity Boys choir sang hymns.\n\n' +
        'Botticelli came in person. He was fifty-one. In his hands he held three of his own pagan-mythology sketches. He surrendered them himself. I watched him place the work onto the pyre. He did not look at me. He kept his head down. In that moment I thought: even the greatest painter has yielded. This is my victory.\n\n' +
        'This is the lens letting you hear what I did not understand at the time.\n\n' +
        'I did not realize: Botticelli did not surrender his work because my argument had broken him. This was the largest hesitation of his life. He had painted Birth of Venus and Pallas in Lorenzo\'s time. Lorenzo died. For five years Botticelli did not know who he was. Handing me his work was him asking himself, "Maybe Savonarola is right; maybe the pagan myths I painted truly are vanity."\n\n' +
        'That hesitation in him was the deepest wound of the Renaissance. I could not see it then.\n\n' +
        'Three in the afternoon. I lit the fire myself. The pyre burned for six hours. The light filled the piazza. My shadow climbed six meters up the wall of the Palazzo della Signoria.\n\n' +
        'Centuries of Florentine culture, turned to ash in one fire.\n\n' +
        'Fifteen thousand faces in the square. I still remember them. But the faces those mirrors had reflected, I will never know.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '1497 年 6 月教皇 excommunicate 我，Florence 商人开始反我。你猜哪个角色压倒了我。',
    expectedLength: '290-330 字',
    expectsRealAnswer: false,
  },

  // ═════ N8 story — 1497-1498 反扑 ═════
  {
    id: 8,
    phase: 'story',
    cosplay: 'Girolamo Savonarola',
    narrativeRef: '§3 1497/6 Alexander VI excommunicate + 商人反',
    content: {
      cn:
        '1497 年 6 月，教皇 Alexander VI 把我 excommunicate（绝罚）。按教会法，被绝罚的人不能讲道、不能主持圣礼。\n\n' +
        'Alexander VI 是谁？你听过的那个"最腐败教皇"，本名 Rodrigo Borgia。他是用钱买教皇位的：1492 年 8 月，34 个枢机里他用现金贿赂了 24 个。他公开承认 4 个私生子。他的儿子 Cesare Borgia 和 Juan Borgia 在 Rome 街头公开杀人。我从 1495 年起在讲坛上骂他，说他是"反基督"（Antichrist）。这种话欧洲没有第二个修士敢公开说。\n\n' +
        '他绝罚我，是预料中的。\n\n' +
        '让我意外的是，Florence 普通商人开始反我。\n\n' +
        '不是 Medici 党（他们 1494 年就被赶走了）。是普通鞋匠、普通羊毛工人、普通银行小职员。他们不在乎我跟教皇的神学吵架。他们在乎一件事：Florence 经济停滞了。\n\n' +
        '我的逻辑（禁奢华、禁狂欢、禁化妆）是为了道德。但奢华是 Florence 普通家庭的饭碗。\n\n' +
        '想象一下我家隔壁那条街——一个金匠的儿子原来跟我学拉丁文，他爸爸 4 年没活做，他现在 11 岁不上学了。再过去一户是丝绸织工，他妈妈跟我抱怨过两次：你禁了贵妇的丝裙，她家三个孩子上个礼拜没吃饱饭。再过去是化妆品店，关门半年了。\n\n' +
        '我以为我是"为穷人对抗奢华"。但我让最先饿肚子的，恰恰是这些普通人。\n\n' +
        '这一遍让你听见我心里没承认的话。\n\n' +
        '我的"基督教共和"在伦理上是对的，在经济上是灾难。我那时候不愿意承认，但 Florence 商人用脚投票告诉我，我错了。\n\n' +
        '一个修士能讲道，能煽动 6000 个孩子，但他不能让面包出现在饿汉桌上。',
      en:
        'June 1497. Pope Alexander VI excommunicated me. Under canon law, a man under excommunication cannot preach, cannot administer the sacraments.\n\n' +
        'Who was Alexander VI? The one you have heard called the most corrupt pope, born Rodrigo Borgia. He bought his way to the papal throne. In August 1492 he bribed twenty-four of the thirty-four cardinals in cash. He openly fathered four children. His sons Cesare and Juan Borgia killed people in the streets of Rome. From 1495 onward I had denounced him from the pulpit, calling him the Antichrist. No other friar in Europe would say that aloud.\n\n' +
        'His excommunication of me was expected.\n\n' +
        'What I did not expect: ordinary merchants in Florence began turning against me.\n\n' +
        'Not the Medici faction (they were driven out in 1494). Ordinary shoemakers, ordinary wool workers, ordinary clerks at the small banks. They did not care about my theological quarrel with the pope. They cared about one thing: the Florentine economy had stalled.\n\n' +
        'My logic (banning luxury, banning carnival, banning cosmetics) was about morality. But luxury was the bread on the tables of ordinary Florentine families.\n\n' +
        'Picture the street next to my own — a goldsmith\'s son who used to study Latin with me. His father has had no work for four years. He is eleven now and out of school. Two doors down lives a silk weaver; his wife came to me twice and said: you banned the rich women\'s silk dresses, and now my three children went hungry last week. Two doors further is the cosmetics shop. It has been closed for six months.\n\n' +
        'I thought I was defending the poor against luxury. But the people I made hungry first were exactly these ordinary people.\n\n' +
        'This is the lens letting you hear what I would not admit aloud.\n\n' +
        'My Christian Republic was right in ethics. It was a disaster in economics. I would not admit it then, but the merchants of Florence voted with their feet and told me I was wrong.\n\n' +
        'A friar can preach. A friar can rouse six thousand boys. But a friar cannot make bread appear on a hungry man\'s table.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '1498 年 5 月 23 日同一个 Piazza della Signoria。一年前我点火烧 Vanities，今天他们点火烧我。',
    expectedLength: '270-310 字',
    expectsRealAnswer: false,
  },

  // ═════ N9 story — 1498/5/23 我自己被烧 ═════
  {
    id: 9,
    phase: 'story',
    cosplay: 'Girolamo Savonarola',
    narrativeRef: '§3 1498/5/23 绞死 + 烧 + 骨灰扔 Arno',
    content: {
      cn:
        '1498 年 4 月 7 日，一场公开"火试罪"。\n\n' +
        '我的 follower Domenico 应该走过烧火堆证明我的"vision"是真的。Florence 全城来看。但是早上下大雨，火点不起来，仪式取消。Florence 人民——4 年里他们相信我是上帝派来的先知——这一天他们觉得我是骗子。\n\n' +
        '4 月 8 日，Florence 暴动。一群武装平民冲进 San Marco 修道院。我跟两个修士同伴（Domenico 和 Silvestro）被抓。我 46 岁。\n\n' +
        '审讯持续 6 周。他们用 strappado 刑（吊起来再放下、扯肩关节）。我招了一些他们想听的话，然后撤回，再被刑，再招，再撤回。审讯笔录我自己签字时手抖到字几乎不可读。\n\n' +
        '5 月 23 日清晨。同一个 Piazza della Signoria，同一个我 16 个月前点火烧 Vanities 的广场。\n\n' +
        '木堆已经搭好。中央一根铁链。\n\n' +
        '我跟 Domenico、Silvestro 三个人，被剥光修士袍，只穿白色囚衣，被押到铁链下。先绞死：绳子套脖子，脚下踏板抽走。然后尸体被点火，烧了 6 小时（跟 Vanities 烧的时间一样），骨灰收起来，倒进 Arno 河，免得 follower 收去当圣物。\n\n' +
        '广场上还是 1 万 5 千人，但这次的脸跟 16 个月前不一样。一些人哭，一些人欢呼，一些人沉默。\n\n' +
        '这一遍让你听见我那一天心里想的最后一句话。\n\n' +
        '我看见火，我闻见自己头发的焦味。我心里只想着一件事：我用 4 年烧 Florence 文化，今天他们用 6 小时烧我。我不知道哪个比较残忍——但我知道，这把火我点的，不能怪他们。',
      en:
        'April 7, 1498. A public ordeal of fire.\n\n' +
        'My follower Domenico was supposed to walk through a burning pyre to prove my visions were real. The whole city came to watch. But that morning a heavy rain fell. The fire would not light. The ceremony was canceled. The people of Florence, who had believed for four years that I was God\'s prophet, decided that day I was a fraud.\n\n' +
        'April 8: riot in Florence. An armed crowd stormed San Marco. I and two fellow friars (Domenico and Silvestro) were arrested. I was forty-six.\n\n' +
        'The interrogation lasted six weeks. They used the strappado: being hauled up by a rope and dropped, dislocating shoulders. I confessed to things they wanted to hear, then recanted, was tortured again, confessed again, recanted again. My signature on the transcripts shook so badly the letters were almost unreadable.\n\n' +
        'May 23, early morning. The same Piazza della Signoria, the same square where, sixteen months earlier, I had lit fire to the Vanities.\n\n' +
        'The pyre stood ready. An iron chain at its center.\n\n' +
        'Domenico, Silvestro, and I, three of us, stripped of our friar\'s robes, dressed only in white prisoner\'s linen, marched to the chain. We were hanged first: rope around the neck, the platform pulled from beneath our feet. Then the bodies were lit. The fire burned six hours (the same length as the Vanities fire). The ashes were gathered and poured into the Arno River, so followers could not collect them as relics.\n\n' +
        'Fifteen thousand people in the square again, but the faces this time were not the same as sixteen months ago. Some wept. Some cheered. Some stood silent.\n\n' +
        'This is the lens letting you hear my last thought.\n\n' +
        'I saw the fire. I smelled my own hair burning. Only one thought ran through me. I spent four years burning the culture of Florence; they spent six hours burning me. I do not know which is more cruel — but I know I lit the first fire, and I cannot blame them for the second.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我死了，但我抓到的矛盾还在。下面真问题来了。',
    expectedLength: '290-330 字',
    expectsRealAnswer: false,
  },

  // ═════ N10 synthesis — 我是疯子还是 truthteller? ═════
  {
    id: 10,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§11 Q5 Savonarola 反 Renaissance + §3 教学要点',
    content: {
      cn:
        '你刚演完 Savonarola，一个 Ferrara 名医家反叛儿子，46 岁在 Florence 广场被绞死烧尸骨灰扔河。\n\n' +
        '现在停下来想一个问题：他是疯子，还是 truthteller（讲真话的人）？\n\n' +
        '**一种说法**：他抓到了 Renaissance 真实的伦理矛盾。\n\n' +
        'Renaissance 教科书里讲的是 Birth of Venus、David、Sistine Chapel——优雅。但这种优雅的背面，是 Medici 银行家用犹太人放贷的钱赞助艺术，是教皇 Innocent VIII 公开承认 8 个私生子，是 Alexander VI 用现金贿赂 24 个枢机买教皇位，是 Naples 农民为一场上层婚姻断粮。Savonarola 没编故事，这些事都是真的、都有 documented record。Florence 上层不愿意看见这些，所以一个修士站出来用宗教纯洁主义打破他们的虚伪——这是 Renaissance 内部的"良心"。一个文化运动如果到了奢华一面压倒一切，内部反扑是健康的、必要的。Savonarola 是 Reformation 的早期 echo：19 年后 Luther 钉 95 Theses。\n\n' +
        '**另一种说法**：他是另一种暴政。\n\n' +
        'Savonarola 让 6,000 个男孩穿白袍上街敲门收邻居家的镜子，这不是道德，这是 soft 集权。他烧 Botticelli 的画，他烧古典文学，他烧异教雕塑，他用 4 年抹去 Florence 几百年的文化。他用同性恋判死刑、化妆品禁、狂欢节禁，这不是基督教谦卑，这是宗教警察国家。Botticelli 一辈子最大的犹豫（晚年画风变成神秘耶诞）是 Savonarola 逼出来的伤。一个文化里出现"奢华 vs 贫困"矛盾，正确的解药不是用一把火烧掉一边，是慢慢推改革（Erasmus 模式）。Savonarola 的"解药"比"病"还猛。\n\n' +
        '两边都站得住。想 30 秒。',
      en:
        'You have just played Savonarola, the rebellious son of a Ferrara physician, hanged and burned at forty-six in a Florence square, ashes thrown into the Arno.\n\n' +
        'Stop and ask one question. Was he a madman, or a truthteller?\n\n' +
        '**One view —** he caught a real ethical contradiction at the heart of the Renaissance.\n\n' +
        'The textbook tells you the Renaissance is Birth of Venus, David, the Sistine Chapel: elegance. But behind that elegance: Medici bankers funding art with money lent at interest, Pope Innocent VIII openly fathering eight children, Pope Alexander VI bribing twenty-four cardinals in cash to buy the papal throne, peasants in Naples cut off from grain for the sake of an upper-class marriage. Savonarola did not invent any of this; every example is documented. The Florentine upper class did not want to see it, so one friar stood up and broke their hypocrisy with religious purity. He was the conscience of the Renaissance from inside it. When a cultural movement lets its luxury side dominate everything else, an internal pushback is healthy and necessary. Savonarola was the early echo of the Reformation: Luther nailed his ninety-five theses nineteen years later.\n\n' +
        '**The other view —** he was simply a different kind of tyranny.\n\n' +
        'Savonarola sent six thousand boys in white robes to knock on doors and collect their neighbors\' mirrors. That is not morality; that is soft totalitarianism. He burned Botticelli\'s paintings, classical literature, pagan statues; in four years he erased centuries of Florentine culture. He made homosexuality punishable by death, banned cosmetics, banned carnival. That is not Christian humility; that is a religious police state. The deepest hesitation of Botticelli\'s life (the late shift to Mystical Nativity) was a wound forced on him by Savonarola. When a culture shows a contradiction between luxury and poverty, the right cure is not to torch one side. The right cure is patient reform (the Erasmus path). Savonarola\'s cure was worse than the disease.\n\n' +
        'Both sides stand. Take thirty seconds.',
    },
    deliverGoal:
      'Savonarola 是疯子还是 truthteller。' +
      '一种说法:他抓到 Renaissance 真实伦理矛盾(奢华 + 教会腐败 + 民众贫困),他是内部良心。' +
      '另一种说法:他用 6000 男孩警察国家烧几百年文化,他是另一种暴政。' +
      '两边都站得住。想 30 秒。',
    engagementHook:
      '**他是疯子还是 truthteller**？你站哪边？还是两边都有一点对？想 30 秒。',
    expectedLength: '320-380 字 + 真问题',
    expectsRealAnswer: true,
  },

  // ═════ N11 synthesis — 跨文化锚:为什么欧洲会出 Savonarola 而中国不会 ═════
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 同时代中国 + Joseph Needham + 王阳明',
    content: {
      cn:
        '现在换个角度想这件事。\n\n' +
        '1497 年 Savonarola 在 Florence 烧 Vanities。同一年中国是明朝弘治 10 年——一个相对稳定的年份。\n\n' +
        '问一个问题：同时代的中国会不会出一个 Savonarola？一个独立和尚或道士，不属于皇权系统，动员万人，4 年实际控制一座大城？\n\n' +
        '答案：几乎不可能。\n\n' +
        '为什么？\n\n' +
        '欧洲的教会跟世俗政权是两套独立系统。教皇在 Rome，国王在 Paris/London/Naples，他们互相牵制。一个修士可以站在教会一边骂世俗政权，他有制度位置。\n\n' +
        '中国的皇权统摄宗教。佛、道、儒都在皇帝管下，没有 Rome 那种独立机构当后盾。一个和尚想公开批评朝廷，最远走到地方，走不到全国动员。\n\n' +
        '这是 Joseph Needham 问题的另一面——Needham 自己警告过这个问题不是"中国为什么没现代"的简单答案，是开放的问题。但"碎片化竞争 vs 大一统"这个结构差异，确实解释了一件事：为什么 Savonarola 能在 Florence 出现而中国同期不会。\n\n' +
        '**一种说法**：欧洲的碎片化是 Renaissance 创新的母体，也是 Savonarola 暴政的母体。一枚硬币两面。\n\n' +
        '**另一种说法**：中国的大一统防止了 Savonarola 这种过度运动，但代价是没有 Renaissance 那种文化爆发。也是一枚硬币两面。\n\n' +
        '两边都站得住。想 30 秒。\n\n' +
        '你愿意要哪种代价？',
      en:
        'Now shift to a different angle.\n\n' +
        '1497: while Savonarola burned Vanities in Florence, China was in the tenth year of the Hongzhi reign of the Ming dynasty — a relatively stable year.\n\n' +
        'A question: could a Savonarola have appeared in Ming China at the same time? An independent monk or Daoist priest, outside the imperial system, mobilizing tens of thousands, running a major city for four years?\n\n' +
        'Almost certainly not.\n\n' +
        'Why?\n\n' +
        'In Europe the Church and the secular state are two separate systems. The pope in Rome, the king in Paris or London or Naples; they checked each other. A friar could stand on the Church side and denounce a secular ruler — he had institutional room.\n\n' +
        'In China imperial power absorbed religion. Buddhism, Daoism, Confucianism all sat under the emperor. A monk had no Rome behind him. The most he could do was speak in his region; he could not turn into a national mobilizer.\n\n' +
        'This is one face of the Joseph Needham Question. Needham himself warned this is not a simple answer to "why China did not modernize" — it is an open question. But the "fragmented competition vs unified empire" structural difference does explain one thing: why a Savonarola could appear in Florence but not in Ming China at the same time.\n\n' +
        '**One view —** Europe\'s fragmentation gave birth both to Renaissance innovation and to Savonarola\'s tyranny. Two faces of the same coin.\n\n' +
        '**The other view —** China\'s unified empire prevented Savonarola-style overreach, but at the cost of no Renaissance-style cultural explosion. Also two faces of the same coin.\n\n' +
        'Both sides stand. Take thirty seconds.\n\n' +
        'Which cost would you choose?',
    },
    deliverGoal:
      '为什么欧洲出 Savonarola 而中国不会。' +
      '欧洲教会 vs 世俗 2 套独立,一个修士有制度位置反抗。' +
      '中国皇权统摄宗教。方孝孺批永乐,十族被诛。' +
      '一种说法:欧洲碎片化是 Renaissance 母体也是 Savonarola 母体。' +
      '另一种说法:中国大一统防 Savonarola 但没 Renaissance。' +
      '两边都站得住。想 30 秒。',
    engagementHook:
      '欧洲式碎片化（创新 + 暴政）还是中国式大一统（稳定 + 没爆发），你愿意要哪种代价——先在心里想想你怎么看，下一节我会正式问你。',
    expectedLength: '340-400 字 + 真问题',
    expectsRealAnswer: false,
  },

  // ═════ N12 meta — 我是 Reformation 早期 echo + 桥到下一 Topic ═════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§4 1517 Luther 95 Theses + 桥到 reformation Topic',
    content: {
      cn:
        '你刚走完 Savonarola，他 1498 年 5 月 23 日在 Piazza della Signoria 被绞死烧尸，他以为故事结束了。\n\n' +
        '但 19 年后（1517 年 10 月 31 日），一个德国修士 Martin Luther 把 95 Theses 钉在 Wittenberg 教堂门上。Reformation 从这一刻开始，欧洲基督教永远分裂。\n\n' +
        'Luther 跟 Savonarola 抓的是同一个东西：教会买卖赦免、教皇腐败、奢华和真信仰矛盾。他们不一样的地方是 3 件。Luther 在德国（远离意大利天主教中心，有 Frederick III 这种世俗 patron 罩他）；Savonarola 在 Florence（意大利中心，所有压力直接到他头上）。Luther 借助印刷术（95 Theses 6 周内印 5,000 册，传遍欧洲）；Savonarola 太早，1490s 印刷术还没普及到能把他的讲道传遍欧洲。Luther 跟世俗政权结盟（Frederick III 保护他）；Savonarola 跟教皇 + 世俗都对立。\n\n' +
        'Savonarola 是 Reformation 的早期 echo——但他跑得太早，跑错地方，没有印刷术放大效应。他点的火没传出 Florence，Luther 点的火烧遍欧洲。\n\n' +
        '放下这个视角之前，给我一句话：这次扮演里，哪个瞬间最让你停了一下？是我 1492 年 4 月 8 日没给 Lorenzo 赦免、转身离开他病床？是 1494 年 11 月 17 日我对 24 岁 Charles VIII 用拉丁文说"你只是上帝派来的工具"？是 1497 年 2 月 7 日我从讲坛上看那座约 60 英尺（18 米）高的木堆，但没看见任何一张脸？还是 1498 年 5 月 23 日我闻见自己头发的焦味？\n\n' +
        '一句话就行。\n\n' +
        '说完，你也可以换一个视角重玩这段：Lorenzo 视角看 Renaissance 黄金期，Lucia 寡妇视角看普通人在 Vanity 火堆下的痛。\n\n' +
        '你也可以去 atlas-lab/reformation 看 19 年后 Luther 的火怎么烧成欧洲分裂。',
      en:
        'You have walked through Savonarola. He was hanged and burned in the Piazza della Signoria on May 23, 1498. He thought the story ended there.\n\n' +
        'But nineteen years later (October 31, 1517) a German friar named Martin Luther nailed his ninety-five theses to the church door at Wittenberg. The Reformation began. European Christianity split forever.\n\n' +
        'Luther named the same thing Savonarola named: sale of indulgences, papal corruption, the contradiction between luxury and true faith. The differences were three. Luther was in Germany, far from the Italian Catholic center, with a secular patron (Frederick III) shielding him; Savonarola was in Florence, the heart of Italy, with all the pressure landing on him directly. Luther had the printing press (five thousand copies of the theses in six weeks, all of Europe in months); Savonarola was too early, in the 1490s the press could not yet broadcast his sermons across Europe. Luther allied with secular power (Frederick III protected him); Savonarola fought both pope and secular at once.\n\n' +
        'Savonarola was the early echo of the Reformation — but he ran too soon, ran in the wrong place, and lacked the press to amplify him. The fire he lit did not leave Florence. The fire Luther lit burned across Europe.\n\n' +
        'Before you set this perspective down, give me one line. In this playthrough, which moment made you pause? Was it April 8, 1492, when I refused absolution to Lorenzo and turned from his bed? November 17, 1494, when I told a twenty-four-year-old Charles VIII in Latin "you are only the tool God has sent"? February 7, 1497, when I looked down from the pulpit at a sixty-foot (eighteen-meter) wooden tower and saw not a single face? Or May 23, 1498, when I smelled my own hair burning?\n\n' +
        'One line is enough.\n\n' +
        'Then you can replay this stretch through a different perspective: Lorenzo, to see the Renaissance golden age; Lucia the widow, to see what the Vanity fire felt like for the people below.\n\n' +
        'You can also visit atlas-lab/reformation to see how, nineteen years later, Luther\'s fire grew into the rupture of Europe.',
    },
    deliverGoal:
      '你扮演了 Savonarola 11 节,Reformation 的早期 echo。' +
      '他跑得太早,跑错地方,没印刷术。' +
      '19 年后 Luther 1517 钉 95 Theses,同样矛盾,但有 3 个不同。' +
      '你也可以换 Lorenzo 视角或 Lucia 视角重玩。' +
      '也可以去 atlas-lab/reformation 看 Luther 怎么把火烧遍欧洲。',
    engagementHook:
      '走完 Savonarola——他抓对了矛盾，却跑太早、跑错地方，火没出 Florence。先回答一个：欧洲式碎片化（创新 + 暴政）和中国式大一统（稳定 + 没爆发），你愿意要哪种代价？再想一步：这次扮演里哪个瞬间最让你停了一下，为什么是它？一句话就行。',
    expectedLength: '220-260 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// LENS 3: Lucia widow 1497 (receiving-end commoner)
// ═══════════════════════════════════════════════════

var luciaStoryboard = [
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Lucia',
    narrativeRef: '§3 Florence 寡妇 Lucia 1498 章节 + §3 Savonarola Bonfire 1497/2/7',
    content: {
      cn:
        '我叫 Lucia。\n\n' +
        '我是 Florence 几万个不会被史书提名字的女人之一（这一遍把这个虚构合成人物给你听见——史书写 Lorenzo / Savonarola / Botticelli，不写 Lucia 这种家庭主妇——但她们这种家庭存在，是 1497 文献证实的）。\n\n' +
        '今天是 1497 年 2 月 7 日，Mardi Gras（嘉年华）早上。\n\n' +
        'Savonarola 神父在广场上召集全城——他叫这次"Bonfire of the Vanities"——虚妄之火。\n\n' +
        '我抚摸我的**镶金小镜子**最后一次。\n\n' +
        '这是我娘家给我嫁妆的最后一件。我妈缝了 12 年衣服攒钱给我做的。\n\n' +
        '今天早上我必须把它交出去烧掉。\n\n' +
        '我 28 岁，1496 年丈夫死了一场小型 plague，留下我跟 5 岁女儿和 3 岁儿子。这一遍带你走 1497/2/7 这一天——从我家到 Piazza della Signoria 火堆边那一刻——以及 13 年后 1510 年我女儿嫁人时这件事的代价。',
      en:
        'My name is Lucia.\n\n' +
        'I am one of tens of thousands of women in Florence whose names history will not record (this playthrough lets you hear from a fictional composite character — the chronicles write Lorenzo, Savonarola, Botticelli, not housewives like Lucia — but families like hers existed, documented in 1497 records).\n\n' +
        'Today is February 7, 1497. The morning of Mardi Gras.\n\n' +
        'Friar Savonarola has called the whole city to the piazza. He calls this gathering "Bonfire of the Vanities."\n\n' +
        'I am stroking my **small gilded mirror** for the last time.\n\n' +
        'It is the final piece of my dowry from my mother. She sewed for twelve years to save up for it.\n\n' +
        'This morning, I must hand it over to be burned.\n\n' +
        'I am twenty-eight. In 1496 my husband died in a small return wave of plague, leaving me with a five-year-old daughter and a three-year-old son. This playthrough walks you through that one day — from my house to the fire at the Piazza della Signoria — and to the cost it carried thirteen years later, in 1510, when my daughter married.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我叫 Lucia。1497/2/7 早上我要把娘家给我嫁妆的最后一件——镶金小镜子——烧掉。你想看这一天怎么过吗',
    expectedLength: '160-200 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'setup',
    cosplay: 'Lucia',
    narrativeRef: '§2 Florence 城邦地理 + §3 Florence 普通人视角 Lucia 章节背景',
    content: {
      cn:
        '在我告诉你今天发生什么之前，我先告诉你我 28 岁的世界。\n\n' +
        '我住 Florence 的 Oltrarno 区（Arno 河南岸——Medici 家在北岸——河南这边住工匠和纺织底层）。\n\n' +
        '我嫁的人叫 Marco。他在城里一家 wool 工坊做活，是纺织底层的人——Florence 人叫这一阶层 ciompi。\n\n' +
        '1496 年春天小型 plague 复发——不是 1348 那种大规模——但够把 Marco 这种住人挤的工坊带走。他 32 岁。\n\n' +
        '现在是 1497 年。我 28 岁。两个孩子。我做缝纫维生。\n\n' +
        '我女儿 Caterina 5 岁。我儿子 Pietro 3 岁。\n\n' +
        '日子勉强过：每天能吃上两顿，孩子有衣服穿，房租付得上。\n\n' +
        '我妈 Maria 1495 年也死了。我没有娘家可以回。',
      en:
        'Before I tell you what happens today, I first need to tell you what my world looks like at twenty-eight.\n\n' +
        'I live in the Oltrarno quarter of Florence (the south bank of the Arno river — the Medici live on the north bank — the south side is where the artisans and the lowest textile workers live).\n\n' +
        'My husband was Marco. He worked in a wool workshop — the lowest tier of the textile trade. Florentines call this class the ciompi.\n\n' +
        'In the spring of 1496, a small return wave of plague hit. Not the 1348 kind. But enough to take a man like Marco from a crowded workshop. He was thirty-two.\n\n' +
        'Now it is 1497. I am twenty-eight. Two children. I sew to make a living.\n\n' +
        'My daughter Caterina is five. My son Pietro is three.\n\n' +
        'We get by: two meals most days, clothes on the children, rent paid most months.\n\n' +
        'My mother Maria also died, in 1495. I have no parents\' house to return to.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Oltrarno 区，wool 底层 ciompi 阶级。1496 丈夫死，1495 妈妈死。28 岁两孩子，缝纫维生。下一节：嫁妆里那面镜子的故事',
    expectedLength: '160-200 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'setup',
    cosplay: 'Lucia',
    narrativeRef: '§3 Lucia 章节 — 镶金小镜子的 dowry 来历（lens 合成细节，narrative 只确认有"镶金小镜子"嫁妆这件事）',
    content: {
      cn:
        '现在我告诉你这面**镶金小镜子**的故事。\n\n' +
        '我妈 Maria 1480 年代也是普通家庭主妇。她做缝纫，跟我现在一样。\n\n' +
        '她为我嫁妆攒了 12 年钱。镶金小镜子是她最贵的一件——从 Antwerp 来——Lorenzo 时代 Florence 进口的奢侈品。\n\n' +
        '我 16 岁出嫁那天，她把镜子塞我手里说："Lucia，嫁过去你也是有底子的女人。"\n\n' +
        '现在我妈死了。Marco 也死了。\n\n' +
        '这面镜子是我**唯一的嫁妆**，也是我**唯一的退路**——\n\n' +
        '如果哪天我穷到孩子吃不上饭，我可以拿它去抵押或卖掉，能换大半年的食物。\n\n' +
        '它是我跟两个孩子最后一道墙。\n\n' +
        '这是 28 岁的我，1497/2/7 这天早上，看着这面镜子的意义。',
      en:
        'Now let me tell you the story of this **small gilded mirror**.\n\n' +
        'In the 1480s, my mother Maria was an ordinary housewife. She sewed for a living, the same way I do now.\n\n' +
        'For twelve years she saved coin by coin to make my dowry. The gilded mirror was her most expensive piece — it came from Antwerp — the kind of luxury Florence began importing in the time of Lorenzo.\n\n' +
        'On my wedding day at sixteen, she pressed the mirror into my hands and said, "Lucia, you go to that house with something solid behind you."\n\n' +
        'Now my mother is gone. Marco is gone.\n\n' +
        'This mirror is my **only dowry** — and my **only fallback**.\n\n' +
        'If one day I am poor enough that the children cannot eat, I can pawn it or sell it, and it would buy us food for half a year or more.\n\n' +
        'It is the last wall standing between me and the two children.\n\n' +
        'That is what this mirror means to twenty-eight-year-old me, on the morning of February 7, 1497.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我妈 12 年缝纫攒的镶金小镜子。我 16 岁出嫁那天她说"嫁过去你也是有底子的女人"。它是我跟两个孩子最后一道墙。下一节：教士的男孩们来敲门',
    expectedLength: '160-200 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Lucia',
    narrativeRef: '§3 Savonarola 章节 — Vanity Boys 1496-1497 上街收 vanities documented',
    content: {
      cn:
        '1497 年 2 月，Bonfire 前一周。\n\n' +
        '城里到处贴告示——Savonarola 的"Vanity Boys"开始挨家挨户**收 vanities**。\n\n' +
        'Vanity Boys 是 6-12 岁基督徒男孩，戴白袍，组队上街。Savonarola 训练了几百个。\n\n' +
        '他们收的东西：化妆品、镜子、化妆服装、古典文学（Petrarch、Boccaccio Decameron）、异教题材的画、纸牌。\n\n' +
        '他们敲我邻居 Maria 的门那一天，我在窗后看着。她家的镜子被两个 8 岁男孩拎走，她跟着哭。\n\n' +
        '当晚我把我的镶金小镜子用一块布包起来，藏在床下毯子下面。\n\n' +
        '我心想：也许他们不会来我这一户。我跟两个孩子住，不是富人，不是 Medici 圈子的人。\n\n' +
        '也许他们看不到我。',
      en:
        'February 1497. The week before the Bonfire.\n\n' +
        'Notices appear all over the city. Savonarola\'s "Vanity Boys" begin going house to house **collecting vanities**.\n\n' +
        'The Vanity Boys are Christian boys, six to twelve years old, in white robes, walking in groups. Savonarola has trained several hundred of them.\n\n' +
        'What they collect: cosmetics, mirrors, costumes, classical books (Petrarch, Boccaccio\'s Decameron), paintings on pagan themes, playing cards.\n\n' +
        'On the day they knock on my neighbour Maria\'s door, I watch from behind my window. Her mirror is carried off by two eight-year-old boys, and she follows them, crying.\n\n' +
        'That night I wrap my gilded mirror in a piece of cloth and hide it under a blanket beneath my bed.\n\n' +
        'I think to myself: maybe they will not come to my door. I am not rich. I am not part of the Medici circle. I live alone with two small children.\n\n' +
        'Maybe they will not see me.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Vanity Boys 收邻居 Maria 的镜子。当晚我把镶金小镜子藏床下毯子下面，希望他们看不到我。下一节：Bonfire 前一晚邻居 Maria 来找我',
    expectedLength: '160-200 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'Lucia',
    narrativeRef: '§3 Lucia + §3 Savonarola Bonfire 前夜（虚构邻居示警场景，narrative 没有具体 documented 名字这一晚）',
    content: {
      cn:
        '1497 年 2 月 7 日，Mardi Gras 早上 6 点。天还没亮。\n\n' +
        '邻居 Maria 来敲我家门。她进门，没说话，先看了一眼我床下。\n\n' +
        '她说："Lucia，昨晚有人在 San Marco 修道院告发，名单上有你。"\n\n' +
        '我站住。\n\n' +
        'Maria 说："如果今天上午你**自愿**抱东西去广场，他们看见你来了，没事。如果你不去，下午 Vanity Boys 会来你这里破门进来翻——"\n\n' +
        '她停了一下。\n\n' +
        '"——他们如果在你床下找出来——可能指控你藏 vanities，可能算异端。异端在 Savonarola 神权下被烧。"\n\n' +
        '我 28 岁，那一刻第一次明白：这不是一件"交不交"的事。\n\n' +
        '是"我跟两个孩子今天还有没有命"的事。\n\n' +
        '我把镜子从床下毯子下面拿出来。\n\n' +
        '我把它放在桌上。\n\n' +
        '我抱我女儿 Caterina 看最后一眼。她 5 岁，她还不知道发生什么。',
      en:
        'February 7, 1497. Mardi Gras morning. Six in the morning. Still dark.\n\n' +
        'My neighbour Maria knocks on my door. She comes in. She does not speak first. She looks at the floor under my bed.\n\n' +
        'She says: "Lucia, last night someone reported names at the San Marco monastery. Your name is on the list."\n\n' +
        'I freeze.\n\n' +
        'Maria says: "If you bring the mirror to the piazza this morning **voluntarily** — they see you came on your own — you are safe. If you do not — by afternoon the Vanity Boys will come here and break the door and search —"\n\n' +
        'She pauses.\n\n' +
        '"— and if they find it under your bed — they could accuse you of hiding vanities. That can be heresy. Heretics under Savonarola burn."\n\n' +
        'At twenty-eight, I understand for the first time: this is not a question of giving or not giving.\n\n' +
        'This is a question of whether my two children and I are still alive tonight.\n\n' +
        'I take the mirror out from under the blanket. I set it on the table.\n\n' +
        'I lift my daughter Caterina up to look at it one last time. She is five. She does not know what is happening.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '邻居 Maria 6 点来敲门："名单上有你。如果不去广场——Vanity Boys 下午破门——异端会被烧。" 我 5 岁女儿 Caterina 不知道发生什么，我抱她看镜子最后一眼。下一节：去广场',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  {
    id: 6,
    phase: 'story',
    cosplay: 'Lucia',
    narrativeRef: '§3 Bonfire 1497/2/7 documented + Botticelli 据说亲手交画那天 + 跨 lens 镶金小镜子 micro-detail 高潮',
    content: {
      cn:
        '上午 9 点。我抱着镜子走过 Ponte Vecchio，向 Piazza della Signoria。\n\n' +
        '广场上约 60 英尺（18 米）高的木堆。万人围观。\n\n' +
        'Savonarola 站在讲台上喊。我听不清他说什么，因为人太多。\n\n' +
        '我看见的是：几百件别人家的东西已经堆上去——镜子、化妆盒、棋盘、书。\n\n' +
        '5 岁的 Caterina 拉我裙子问："**妈妈，奶奶给的东西去哪了？**"\n\n' +
        '我蹲下来，对她说："妈妈带它去看上帝。"\n\n' +
        '（这一遍让你听见 Lucia 心里转的：她不知道镜子去哪，只能跟女儿说一句听起来好的话——这是她编的——史料里 Lucia 这种家庭主妇没人记她当时说了什么。）\n\n' +
        '我走到木堆边。我把镜子放上去。\n\n' +
        '我抬头看了它一眼——\n\n' +
        '阳光下，镶金的边**闪了一下**。\n\n' +
        '边上一个穿画家围裙的男人捧着画走过来——边走边哭——把画放在堆上。\n\n' +
        '（你看到的是 Botticelli 自己来交画——据 Vasari 记载——但 Lucia 不认识他。她只看见**他边走边哭**。）\n\n' +
        '火点起来。\n\n' +
        '我看不见镜子了。',
      en:
        'Nine in the morning. I carry the mirror across the Ponte Vecchio toward the Piazza della Signoria.\n\n' +
        'In the piazza: a wooden pyre about sixty feet (eighteen meters) high. Tens of thousands watching.\n\n' +
        'Savonarola is shouting from the platform. I cannot make out the words, because the crowd is too thick.\n\n' +
        'What I see: hundreds of other people\'s things already stacked on the pyre — mirrors, cosmetic boxes, chess boards, books.\n\n' +
        'Five-year-old Caterina pulls on my skirt and asks: "**Mama, where is Grandma\'s thing going?**"\n\n' +
        'I crouch down and say: "Mama is taking it to see God."\n\n' +
        '(This playthrough lets you hear what is turning in Lucia\'s mind: she does not know where the mirror is going, so she gives the child a sentence that sounds gentle — she made the line up in the moment — the chronicles do not record what housewives like Lucia said to their daughters.)\n\n' +
        'I walk to the edge of the pyre. I place the mirror on top.\n\n' +
        'I look up at it one last time —\n\n' +
        'In the morning sun, the gilded rim **glints once**.\n\n' +
        'A man in a painter\'s smock walks up beside me. He carries a painting. He is crying as he walks. He sets the painting down on the pile.\n\n' +
        '(What you are seeing is Botticelli, by Vasari\'s account, bringing in his own paintings. Lucia does not know who he is. She only sees that **he is crying as he walks**.)\n\n' +
        'The fire is lit.\n\n' +
        'I can no longer see the mirror.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '广场 9 点。Caterina 问"妈妈奶奶给的东西去哪了"。我说"去看上帝"，这是我编的，史料没人记下。镶金边阳光下闪一下。边上一个穿画家围裙的男人边走边哭——是 Botticelli。然后火点起来',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  {
    id: 7,
    phase: 'story',
    cosplay: 'Lucia',
    narrativeRef: '§3 Lucia 章节 + §3 Lorenzo 1485 Botticelli《Birth of Venus》 — 暗时刻反差',
    content: {
      cn:
        '中午 12 点。我牵 Caterina 走回 Oltrarno。\n\n' +
        '她一路上还在问："**妈妈，奶奶给的东西什么时候回来？**"\n\n' +
        '我没办法回答。\n\n' +
        '回家。3 岁的 Pietro 还在睡觉。\n\n' +
        '我坐在窗前看 Arno 河。\n\n' +
        '我想起来——\n\n' +
        '1485 年我 5 岁那年，Botticelli 画了《Birth of Venus》。我妈那时还活着，她带我去 Medici 家附近看过这张画。画上 Venus 站在贝壳上从海里诞生，一个不穿衣服的古希腊女神——\n\n' +
        '那时候 Florence 是另一个城市：异教维纳斯、古典神话、优雅 humanism——\n\n' +
        '现在那个城市烧了。\n\n' +
        '我想我刚在广场看见的那个穿围裙的画家——他边走边哭——也许他就是那个 1485 年画 Venus 的人。\n\n' +
        '他亲手把自己年轻时画的东西放上火堆。\n\n' +
        '我跟他不认识。但今天这个早上，我跟他做了同一件事。',
      en:
        'Noon. I lead Caterina back to Oltrarno.\n\n' +
        'On the way she keeps asking: "**Mama, when is Grandma\'s thing coming back?**"\n\n' +
        'I cannot answer.\n\n' +
        'Home. Three-year-old Pietro is still asleep.\n\n' +
        'I sit by the window and look out at the Arno.\n\n' +
        'I remember —\n\n' +
        'In 1485, when I was five, Botticelli painted the Birth of Venus. My mother was still alive then. She took me near the Medici house to see the painting once — Venus standing on a shell, rising from the sea — a Greek goddess with no clothing —\n\n' +
        'In those days Florence was a different city: pagan Venus, classical myth, elegant humanism —\n\n' +
        'Now that city has burned.\n\n' +
        'I think the painter in the smock I saw at the piazza — the one walking and crying — may have been the man who painted Venus in 1485.\n\n' +
        'He laid his own young work on the fire with his own hands.\n\n' +
        'He and I do not know each other. But this morning, the two of us did the same thing.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '回家路上 Caterina 还在问"妈妈奶奶给的东西什么时候回来"。我想起 1485 年妈妈带我去看《Birth of Venus》——那时 Florence 是另一个城市。今天那个城市烧了。下一节：4-5 月反扑',
    expectedLength: '180-200 字',
    expectsRealAnswer: false,
  },
  {
    id: 8,
    phase: 'story',
    cosplay: 'Lucia',
    narrativeRef: '§3 Savonarola 1498/5/23 documented + §4 1498 Florence 商人反扑',
    content: {
      cn:
        '1497 年春天。Florence 商人开始反 Savonarola。\n\n' +
        '他们在街上互相说："经济停滞了。外地买家不敢来了。"\n\n' +
        '我从缝纫订单里也能感觉到：1497 年订单比 1496 年少一半。Florence 富人不再做新衣服。\n\n' +
        '一年过去。\n\n' +
        '1498 年 5 月 23 日——Savonarola 自己在 Piazza della Signoria 被绞死。然后尸体被烧。骨灰扔进 Arno 河。\n\n' +
        '一年前我在那个广场把镶金小镜子放上火堆。一年后他们在同一个广场烧那个让我把镜子放上去的人。\n\n' +
        '邻居 Maria 来叫我："Lucia，去看一眼吗？"\n\n' +
        '我没去。\n\n' +
        'Pietro 4 岁了，Caterina 6 岁。我有缝纫要做。我必须把房租攒出来。\n\n' +
        '我没时间看政治戏。',
      en:
        'Spring 1497. Florence merchants begin turning against Savonarola.\n\n' +
        'In the street they say to each other: "The economy is dead. Foreign buyers will not come anymore."\n\n' +
        'I can feel it from my sewing work: my orders in 1497 are half what they were in 1496. The wealthy of Florence no longer commission new clothing.\n\n' +
        'A year passes.\n\n' +
        'May 23, 1498 — Savonarola himself is hanged in the Piazza della Signoria. His body is burned. The ashes are thrown into the Arno.\n\n' +
        'A year earlier, I laid my gilded mirror on a fire in that same square. A year later, they burn the man who told me to lay it there, in the same square.\n\n' +
        'My neighbour Maria comes to my door: "Lucia, do you want to walk over and see?"\n\n' +
        'I do not go.\n\n' +
        'Pietro is four now. Caterina is six. I have sewing to finish. I have to put together the rent money.\n\n' +
        'I do not have time for political theatre.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '1498/5/23 Savonarola 被烧。一年前我在同一个广场放镜子，一年后他们烧那个让我放镜子的人。Maria 叫我去看，我没去——我有缝纫要做，房租要攒。下一节：1498-1510 后续',
    expectedLength: '160-200 字',
    expectsRealAnswer: false,
  },
  {
    id: 9,
    phase: 'story',
    cosplay: 'Lucia',
    narrativeRef: '§3 Lucia 章节后续 + §6 Renaissance 长尾 — Lucia 这种家庭家庭向下流动',
    content: {
      cn:
        '现在我把 1498 之后这 12 年压缩告诉你。\n\n' +
        '1500 年。我 31 岁。我嫁给一个鞋匠 Tommaso。\n\n' +
        '没嫁妆。再嫁是可能的，但**没嫁妆**意味着我嫁给一个**比 Marco 更老 + 更穷**的人。\n\n' +
        'Tommaso 47 岁，比我大 16 岁。他人不坏，但鞋匠铺生意差，他喝酒。我又生了 2 个孩子——不是 Marco 那种家——是另一种家。\n\n' +
        '1510 年 Caterina 18 岁了。该出嫁。\n\n' +
        '没嫁妆。\n\n' +
        '我看着她。5 岁那年广场上拉我裙子问"奶奶给的东西去哪了"的女儿，18 岁这一年——\n\n' +
        '她嫁给一个农民。Tuscany 乡下，离 Florence 30 公里。\n\n' +
        '一个农民比一个 wool 工人更下一层。\n\n' +
        '我妈 1480 年代缝纫 12 年攒了一个**镶金小镜子**，让我嫁给 wool 工人 Marco。我没有镜子可以攒，让 Caterina 嫁给一个农民。\n\n' +
        '我 41 岁那一年第一次明白：1497/2/7 那个早上我交出去的不只是一面镜子。我交出去了 Caterina 的婚姻。',
      en:
        'Now let me compress the twelve years after 1498 for you.\n\n' +
        '1500. I am thirty-one. I marry a cobbler named Tommaso.\n\n' +
        'I have no dowry. A second marriage is possible, but **without a dowry** I marry a man who is **older and poorer** than Marco was.\n\n' +
        'Tommaso is forty-seven, sixteen years older than me. He is not cruel, but the cobbler shop does poorly, and he drinks. I have two more children — not the household I had with Marco — a different kind of household.\n\n' +
        '1510. Caterina is eighteen. Time to marry.\n\n' +
        'No dowry.\n\n' +
        'I look at her — the same daughter who at five pulled my skirt at the piazza and asked where Grandma\'s thing was going — at eighteen —\n\n' +
        'She marries a peasant. Tuscan countryside, thirty kilometres outside Florence.\n\n' +
        'A peasant is one step below a wool worker.\n\n' +
        'In the 1480s my mother sewed for twelve years to save up a **small gilded mirror**, so that I could marry a wool worker named Marco. I have no mirror to save up, so Caterina marries a peasant.\n\n' +
        'At forty-one, I understand for the first time: what I handed over on the morning of February 7, 1497 was not only a mirror. I handed over Caterina\'s marriage.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '1500 我嫁鞋匠 Tommaso（比 Marco 老 16 岁、爱喝酒）。1510 Caterina 18 岁嫁给农民——比 wool 工人下一层。我妈缝纫 12 年攒一个镜子让我嫁 Marco；我交出镜子让 Caterina 嫁农民',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  {
    id: 10,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§9 historiography Renaissance 4 派 + §11 思考问题 Q5 Savonarola 是疯狂还是正当',
    content: {
      cn:
        '你刚跟 Lucia 走了 1497/2/7 那一天，加 1498-1510 那 13 年。\n\n' +
        '现在停下来想一个问题。\n\n' +
        'Lucia 是 Renaissance 的"受益者"还是"受害者"？\n\n' +
        '两边都有真证据。\n\n' +
        '**一种说法——受益者**：Renaissance 给 Florence 经济繁荣。Medici 时代 Lucia 妈妈做缝纫能存出嫁妆，这件事在 1300 年代之前几乎不可能（普通工匠家庭主妇 1280 年代没有"做缝纫攒嫁妆"这条路）。1450 年代起印刷术让普通人也能读到几页书，Lucia 的祖母可能是西方史上第一代认识几个字的工匠家庭主妇。Renaissance 把"普通女性"从中世纪的隐形里**抬上**了一档。Lucia 跟 Marco 嫁妆里有镶金小镜子这件事本身，就是 Renaissance 受益者的证据。\n\n' +
        '**另一种说法——受害者**：Renaissance 的奢华是 1% 的盛宴。Da Vinci 在米兰画 Last Supper 那几年（1495-1498），Lucia 在 Oltrarno 守寡。Botticelli 画 Birth of Venus 那一年（1485）她 5 岁，她妈带她路过远远看一眼，但她家从未拥有过那个 Florence。她妈缝纫 12 年攒的镶金小镜子 1497/2/7 早上烧成灰。她女儿 Caterina 18 岁嫁给农民，意味着这个家庭**向下流动**了。Renaissance 的故事是 Medici、Lorenzo、Botticelli 的故事，Lucia 这种家庭在故事里只出现一次：交镜子那一刻。\n\n' +
        '两边都站得住。\n\n' +
        '一种把 Lucia 这种家庭看成 Renaissance **抬上来**的人；\n\n' +
        '另一种把 Lucia 这种家庭看成 Renaissance **路过的代价**。\n\n' +
        '你怎么看？想 30 秒。',
      en:
        'You have just walked with Lucia through that one day, February 7, 1497, and the thirteen years that followed.\n\n' +
        'Now pause for one question.\n\n' +
        'Was Lucia a **beneficiary** of the Renaissance, or a **victim** of it?\n\n' +
        'Both sides have real evidence.\n\n' +
        '**One view — beneficiary.** The Renaissance brought Florence prosperity. In the time of the Medici, a woman like Lucia\'s mother could sew her way to a dowry. Before the 1300s, that path barely existed for an artisan housewife. From the 1450s onward, printing meant ordinary people could read a few pages of a book. Lucia\'s grandmother may have been among the first generations of artisan housewives in the West to read at all. The Renaissance lifted "ordinary women" out of the medieval invisibility by one rung. The very fact that Lucia\'s dowry contained a small gilded mirror is itself evidence of who benefited.\n\n' +
        '**The other view — victim.** The Renaissance\'s luxury was a feast for the top one per cent. In the years Leonardo painted the Last Supper in Milan (1495–1498), Lucia was a widow in Oltrarno. The year Botticelli painted the Birth of Venus (1485), she was five — her mother walked her past it once, at a distance, but her family never owned that Florence. The mirror her mother sewed for twelve years to save up burned to ash on the morning of February 7, 1497. Her daughter Caterina married a peasant at eighteen — the household had slid one step downward. The story of the Renaissance is Medici and Lorenzo and Botticelli; families like Lucia\'s appear in the story exactly once: the moment she handed in the mirror.\n\n' +
        'Both readings stand.\n\n' +
        'One reading: families like Lucia\'s were the people the Renaissance **lifted up**.\n\n' +
        'The other reading: families like Lucia\'s were the people the Renaissance **walked past**.\n\n' +
        'What do you think? Take thirty seconds.',
    },
    deliverGoal:
      'Lucia 是 Renaissance 的受益者还是受害者？' +
      '一种说法（受益者）：Renaissance 让普通工匠家庭主妇 Maria 能做缝纫攒嫁妆，让 Lucia 祖母能识字——把"普通女性"从中世纪隐形里抬上一档。' +
      '另一种说法（受害者）：Renaissance 是 1% 盛宴，Lucia 这种家庭在故事里只出现一次（交镜子那刻），Caterina 18 岁嫁农民意味着家庭向下流动。' +
      '——两边都站得住，你怎么看？',
    engagementHook: '**你怎么看**——Lucia 是 Renaissance 的受益者还是受害者？想 30 秒。',
    expectedLength: '300-360 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 同时代中国（明朝弘治）跨文化锚 + §11 思考问题 Q1 王阳明 vs Da Vinci',
    content: {
      cn:
        '第二个问题——一个跨文化的锚。\n\n' +
        '同一时间——1497 年——中国明朝弘治十年。\n\n' +
        '想象一个 1497 年苏州或杭州的家庭主妇。她跟 Lucia 同岁，28 岁，丈夫是织布的，两个孩子。她家里也有娘家给的嫁妆——可能是一对银耳坠或一面铜镜。\n\n' +
        '问题：她有没有可能 1497/2/7 早上被人逼着把铜镜烧掉？\n\n' +
        '答案：**几乎不可能**。\n\n' +
        '为什么？\n\n' +
        '中国明朝是"皇权统摄宗教"——皇帝是天子，是宗教权威的最高点。和尚、道士、回族阿訇都不能独立动员普通家庭烧自家东西。如果有人想这么做，地方官会第一个去阻止——因为这挑战的是皇权秩序。\n\n' +
        '欧洲不一样。1497 Florence 这一刻：教皇在罗马、Savonarola 在 Florence、世俗共和议会还在，三股权力没整合。Savonarola 这种独立教士能动员全城。这种"被独立宗教权威路过的小人物经验"——是 Renaissance 欧洲特有的，明朝中国家庭主妇不会有这种经历。\n\n' +
        '一种说法：明朝家庭主妇有不一样的处境——她不会被独立教士逼烧自家东西，但她也活在饥荒、苛税、战乱、童养媳等其他结构性脆弱里。\n\n' +
        '另一种说法：欧洲 Lucia 经历的是 Florence 这种"权力多极、没人统摄"的结构特有的脆弱——也正是这个结构后来长出科学革命 + 启蒙运动 + 现代权利体系的土壤。\n\n' +
        '两边的脆弱不一样，两边的可能性也不一样。两边都站得住。\n\n' +
        '你怎么看？1497 年生在 Florence 跟生在苏州，哪种处境更难？想 30 秒。',
      en:
        'A second question, this one a cross-cultural anchor.\n\n' +
        'In the same year — 1497 — in Ming China, the tenth year of the Hongzhi reign.\n\n' +
        'Picture a 1497 housewife in Suzhou or Hangzhou. She is the same age as Lucia, twenty-eight, her husband weaves cloth, she has two children. Her household also holds a dowry from her mother — perhaps a pair of silver earrings, or a small bronze mirror.\n\n' +
        'Question: could anyone force her, on the morning of February 7, 1497, to burn that bronze mirror?\n\n' +
        'Answer: **almost certainly not.**\n\n' +
        'Why?\n\n' +
        'Ming China was structured around imperial authority that absorbed religious authority. The emperor stood at the top of the religious order. Buddhist monks, Daoist priests, Hui Muslim imams — none of them could independently mobilize ordinary households to burn their own things. If anyone tried, local officials would shut it down first, because such a movement would itself threaten the imperial order.\n\n' +
        'Europe was different. In 1497 Florence the pope sat in Rome, Savonarola sat in Florence, the secular council still met — three centres of power, none of them on top. An independent friar like Savonarola could mobilize an entire city. The experience of being **walked over by an independent religious authority** is specific to Renaissance Europe. A Ming housewife in 1497 would not have that experience.\n\n' +
        'One view: the Ming housewife faced different vulnerabilities — no independent friar could force her to burn her own things, but she lived under famines, heavy taxes, war, and child-bride customs that were their own structural fragilities.\n\n' +
        'The other view: Lucia experienced a vulnerability specific to Florence — the "many centres of power, none on top" structure that also became the soil that later grew the Scientific Revolution, the Enlightenment, and the modern rights tradition.\n\n' +
        'Two different vulnerabilities, two different possibilities. Both sides stand.\n\n' +
        'What do you think? Was 1497 Florence harder than 1497 Suzhou, or just hard differently? Take thirty seconds.',
    },
    deliverGoal:
      'Lucia 1497 跟同年苏州/杭州一个 28 岁家庭主妇对比。' +
      '一种说法（明朝家庭主妇有不一样的脆弱）：皇权统摄宗教没有独立教士能逼她烧镜子，但她活在饥荒/苛税/战乱/童养媳结构里。' +
      '另一种说法（欧洲 Lucia 经历的是 Florence 特有脆弱）：权力多极结构也是后来科学革命+启蒙+现代权利体系的土壤。' +
      '——两边的脆弱不一样，两边的可能性也不一样，两边都站得住。',
    engagementHook: '1497 年生在 Florence 还是苏州，哪种处境更难——先在心里想想你怎么看，下一节我会正式问你。',
    expectedLength: '300-360 字 + 真问题',
    expectsRealAnswer: false,
  },
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题 + 跨视角 micro-detail echo（Lorenzo / Savonarola 视角的镶金小镜子）',
    content: {
      cn:
        '你刚从 Lucia 内部走完 1497/2/7 这一天 + 1498-1510 这 13 年。\n\n' +
        '一个虚构合成的 28 岁家庭主妇——但她代表 Florence 几万个真实存在过的女人——她们没有被史书写下名字。\n\n' +
        '在你进入记忆考核之前，一个问题：\n\n' +
        '这一遍里，最让你停一下的是什么？\n\n' +
        '是 5 岁 Caterina 拉裙子问"妈妈奶奶给的东西去哪了"那一刻？\n\n' +
        '是火堆边镶金边阳光下闪一下那一秒？\n\n' +
        '是边上那个穿画家围裙的男人边走边哭——你后来才知道是 Botticelli？\n\n' +
        '是 1498/5/23 Maria 叫你去看 Savonarola 被烧——你说"我有缝纫要做，房租要攒"？\n\n' +
        '还是 1510 年 Caterina 18 岁嫁农民那一刻，你 41 岁第一次明白：那天早上你交出去的不只是一面镜子？\n\n' +
        '说一句话告诉我。\n\n' +
        '\n\n' +
        '—\n\n' +
        '\n\n' +
        '**这一遍的最后一件事**：\n\n' +
        'Lucia 这种 receiving-end 视角——\n\n' +
        '在 atlas-lab/renaissance 里**没有**。Atlas 大多数课写的是 perpetrator-actor 视角（Lorenzo / Savonarola / Da Vinci / Michelangelo / Pope / Erasmus）——这些是史书有名字的人。\n\n' +
        'Lucia 这种没名字的家庭主妇——只有这种"视角学法"才能让你完整经历她的一天。\n\n' +
        '这段历史还有另外两个视角：Lorenzo（Florence 文化载体）和 Savonarola（虚妄之火点火人）。\n\n' +
        '如果你做完这两个视角，你会发现一个 micro-detail。\n\n' +
        '我**不告诉你**是什么。\n\n' +
        '让你自己 connect。\n\n' +
        '这个 connect 的瞬间，是多视角学法给你的最强一击——比直接告诉你"这三个视角是相连的"重 100 倍。\n\n' +
        '然后——准备好了吗？记忆考核：拼写、定义、应用题，把今天演过的变成你真正记得的。',
      en:
        'You have just walked through the day of February 7, 1497, and the thirteen years that followed, from inside Lucia.\n\n' +
        'A fictional composite housewife at twenty-eight — but she stands for tens of thousands of real women in Florence whose names history did not record.\n\n' +
        'Before you move into the mastery check, one question.\n\n' +
        'In this playthrough, what was the moment that made you pause?\n\n' +
        'Was it five-year-old Caterina pulling on your skirt and asking, "Mama, where is Grandma\'s thing going?"\n\n' +
        'Was it the gilded rim of the mirror glinting once in the morning sun at the edge of the pyre?\n\n' +
        'Was it the painter beside you in the smock, walking and crying — and learning later that he was Botticelli?\n\n' +
        'Was it May 23, 1498, Maria asking if you wanted to come watch Savonarola burn — and you saying, "I have sewing to do, the rent to put together"?\n\n' +
        'Or was it 1510, the year Caterina at eighteen married a peasant — when you, at forty-one, understood for the first time that what you had handed over that morning was not only a mirror?\n\n' +
        'Tell me in one sentence.\n\n' +
        '\n\n' +
        '—\n\n' +
        '\n\n' +
        '**One last thing about this playthrough.**\n\n' +
        'A receiving-end view like Lucia\'s —\n\n' +
        'is **not** in atlas-lab/renaissance. The atlas mostly carries perpetrator-actor figures (Lorenzo, Savonarola, Da Vinci, Michelangelo, the popes, Erasmus) — the people history named.\n\n' +
        'Housewives like Lucia, history did not name. Only this kind of perspective work can let you live one of her days from inside.\n\n' +
        'There are two other perspectives in this Topic: Lorenzo (the cultural patron of Florence) and Savonarola (the man who lit the fire).\n\n' +
        'If you walk through those two as well, you will find one micro-detail.\n\n' +
        'I will **not** tell you what it is.\n\n' +
        'You will connect it yourself.\n\n' +
        'That moment of connecting is the strongest blow this kind of perspective work can give you — a hundred times stronger than the narrator simply telling you "these three views are linked."\n\n' +
        'Now — are you ready? The mastery check: spelling, definitions, application questions — turning what you just played into what you actually remember.',
    },
    deliverGoal:
      '你扮演了 Lucia 9 节——1497/2/7 一天加 1498-1510 这 13 年。' +
      '现在你可以选：' +
      '(1) 进 mastery 通关 / ' +
      '(2) 换视角重玩——比如 Lorenzo（Florence 文化载体）或 Savonarola（虚妄之火点火人）——' +
      '做完那两个视角你会发现一个 micro-detail，这个 connect 是多视角学法最强一击',
    engagementHook:
      '走完 Lucia 这一遍——1497/2/7 交出嫁妆镜子的那个早上，到 13 年后才懂那天交出去的不只是一面镜子。先回答一个：1497 年生在 Florence 还是苏州，你觉得哪种处境更难？再想一步：这一遍最让你停一下的是哪一刻，为什么是它？说一句话',
    expectedLength: '380-440 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// 导出 lenses + default
// ═══════════════════════════════════════════════════
export var lenses = {
  'lorenzo-medici': {
    id: 'lorenzo-medici',
    icon: '👑',
    name: { cn: 'Lorenzo de\' Medici 美第奇·洛伦佐', en: 'Lorenzo de\' Medici' },
    role: {
      cn: 'Florence "无冕之王" / 银行家 patron / 1469-1492 perpetrator-actor 视角',
      en: 'Florence\'s "uncrowned king" / banker patron / 1469-1492 perpetrator-actor lens',
    },
    description: {
      cn: '他是 Medici 家二十岁的少东家,父亲三天前死了,他一个人站在宫里一楼翻账册,手里管着大半个西欧跨国汇款的钱,口袋里却一份官位都没有。这一遍让你跟他从那一页账册出发走二十三年,看一双同时把 Botticelli 推上画架、又会下令把八十具尸体挂出窗外的手。',
      en: 'He is the twenty-year-old heir of the Medici, his father dead three days, standing alone on the ground floor of the palace turning the pages of a ledger that runs much of western Europe\'s long-distance banking, with not a single official title in his pocket. This pass walks twenty-three years with him from that ledger page, watching the same hands that push Botticelli onto the easel later order eighty bodies hung from the windows.',
    },
    nameCn: 'Lorenzo de\' Medici 美第奇·洛伦佐',
    storyboard: lorenzoStoryboard,
  },
  'savonarola': {
    id: 'savonarola',
    icon: '🔥',
    name: { cn: 'Girolamo Savonarola', en: 'Girolamo Savonarola' },
    role: {
      cn: '多明我会修士 / 1490-1498 lonely mediator(内部反扑者)视角',
      en: 'Dominican friar / 1490-1498 lonely mediator (internal pushback) lens',
    },
    description: {
      cn: '他是 Ferrara 公爵御医家里那个不肯学医的儿子,二十三岁那个雨夜背着一个布袋走出家门,袋子里装着自己抄的圣经、一首写整片意大利奢华都建在烂楼上的诗,还有一件粗布会衣。这一遍让你跟他从那场雨走出来,二十三年后看一个修士怎么短暂接管 Florence 这座 Renaissance 中心城,再走到他自己被烧的那座广场。',
      en: 'He is the son of the Duke of Ferrara\'s personal physician who refuses to study medicine, walking out into the rain at twenty-three with a cloth bag holding his own hand-copied Bible, a poem that calls all of Italy\'s luxury a rotten building on the backs of the poor, and one spare friar\'s robe. This pass walks out of that rain with him, twenty-three years later watches one Dominican friar take over the very center of the Renaissance, and ends at the piazza where he himself is burned.',
    },
    nameCn: 'Girolamo Savonarola(修士独裁者)',
    storyboard: savonarolaStoryboard,
  },
  'lucia-widow': {
    id: 'lucia-widow',
    icon: '🪞',
    name: { cn: 'Lucia (虚构合成 28 岁寡妇)', en: 'Lucia (fictional composite, 28-year-old widow)' },
    role: {
      cn: 'Florence 普通家庭主妇 / 1497 receiving-end commoner 视角',
      en: 'Florentine ordinary housewife / 1497 receiving-end commoner lens',
    },
    description: {
      cn: '她是 Florence 一个二十八岁的寡妇,丈夫去年死在一场回潮的小瘟疫里,留下她带一个五岁女儿和一个三岁儿子,1497 年嘉年华那个早上,她坐在桌前最后一次抚摸娘家攒了十二年钱给她做的那面镶金小镜子(一个合成人物,代表史书写不到名字的几万个 Florence 家庭主妇)。这一遍让你跟她走 1497 年 2 月 7 日这一天,从家门到 Piazza della Signoria 的火堆边,再走到十三年后女儿出嫁那一刻才显出来的代价。',
      en: 'She is a twenty-eight-year-old widow in Florence whose husband died last year in a small return wave of plague, leaving her with a five-year-old daughter and a three-year-old son, sitting at her table on the morning of Mardi Gras 1497 stroking for the last time the small gilded mirror her mother sewed for twelve years to afford (a composite character standing in for tens of thousands of Florentine housewives whose names history does not record). This pass walks with her through February 7, 1497, from her front door to the bonfire at the Piazza della Signoria, and onward to the price that only shows up thirteen years later when her daughter marries.',
    },
    nameCn: 'Lucia(虚构 28 岁寡妇)',
    storyboard: luciaStoryboard,
  },
};

// per Sarah Chen audit + 7thgrader review: Lucia 起手 — 同龄锚点 + 情感冲击最深
export var defaultLens = 'lucia-widow';

// ─── 默认 export 兼容老 runtime(取 default lens 的 storyboard)──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'renaissance-1500',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  estimatedMinutesPerLens: { 'lorenzo-medici': 35, 'savonarola': 35, 'lucia-widow': 32 },
};
