// ─── Magna Carta 1215 Lens-based Storyboard ──────────────────────
//
// Story-First Pedagogy v2 — Lens 模型（用户 2026-05-02 sign off）
// 见 docs/STORY_FIRST_PEDAGOGY.md（待 v2 update）
//
// 设计原则（用户 2026-05-02 拍板）：
//   - 1 个 Topic = 1 段历史事件 + N 个 lens（每 lens = 1 个角色视角）
//   - 用户选 1 个 lens 进入 → 一致第一人称跑完
//   - 不同 lens 看同一事件——基础事实相同——情绪 + 角度 + 局限性不同
//   - replay 价值：用户跑完 1 lens 后可以选另一个 lens 重学（DBQ 训练）
//
// 教育学支撑（历史教学家立场）：
//   - 历史 = 冲突的产物（Hegel / Marx / Annales 主流）
//   - 多视角无绝对对错（AP/IB DBQ 标准）
//   - "符合历史长河趋势"作为软判断（不是道德裁判）
//
// MVP scope：3 lens（King John + Stephen Langton + Tom 农奴）
// 后续可扩到 5 lens（加 Robert Fitzwalter + Pope Innocent III）
//
// 长度约束（Willow 测试反馈）：
//   - 每节点 150-220 字——不要过长——画面感优先
//   - Tom 农奴 lens 可以更短（100-180 字）——Tom 的视角天然有限
//
// ─────────────────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════
// LENS 1: King John（暴君 + 受害者双重身份）
// ═══════════════════════════════════════════════════
var kingJohnStoryboard = [
  {
    id: 1,
    phase: 'hook',
    cosplay: 'King John',
    narrativeRef: '§4 Runnymede 6/15',
    // ⭐ Opus 直接写——用户最终看到的文字（不是 deliverGoal 引导）
    content: {
      cn:
        '1215 年 6 月 15 日清晨。我骑着马来到 Runnymede 草地——泰晤士河边一片湿地，下着小雨。\n\n' +
        '25 个贵族（baron）站在我对面，全副武装，手按剑柄。草地泥泞，空气里有湿羊皮纸和河泥的味道。我的右手在抖——不是因为冷，是因为愤怒。\n\n' +
        '我面前是一张羊皮纸，摊在木板上，上面密密麻麻 63 条拉丁文。一只青铜印模——重 1.5 公斤，正反两面雕着我的纹章和拉丁文 SIGILLUM JOHANNES REX（约翰王玺）——正在融化的红蜡里加热。\n\n' +
        '我把印模往下压。蜡上留下纹章。这就是 Great Seal——王室印玺。盖完，文件就生效。\n\n' +
        '盖完那一刻我心里只有一句话："等你们走，我就让教皇废了它。"\n\n' +
        '我是约翰王（King John）。接下来 8 节，你会跟我一起走 16 年——看我怎么走到这一刻。',
      en:
        'Morning of June 15th, 1215. I rode my horse to Runnymede meadow — a damp stretch of land along the Thames, light rain falling.\n\n' +
        'Twenty-five barons stood across from me, fully armed, hands on their sword hilts. The grass was muddy. The air smelled of wet parchment and river silt. My right hand was trembling — not from cold, but from rage.\n\n' +
        'In front of me lay a parchment on a wooden board, packed with 63 lines of Latin. A bronze seal die — 1.5 kilograms, both faces engraved with my coat of arms and the Latin words SIGILLUM JOHANNES REX (Seal of John, the King) — sat warming in melting red wax.\n\n' +
        'I pressed the die down. The wax took the imprint. This is the Great Seal — the Royal Seal — and once stamped, the document becomes law.\n\n' +
        'The moment the wax cooled, only one thought ran through my head: "The minute these barons ride away, I am getting the Pope to destroy this."\n\n' +
        'I am King John. Over the next 8 sections, you will walk 16 years with me — and see how I got to this morning.',
    },
    deliverGoal: '[fallback for AI generation if content missing]',
    engagementHook: '我为什么走到这一刻？倒回 1199 年我刚做王那天。',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'King John',
    narrativeRef: '§3 King John 出身 1166-1199',
    content: {
      cn:
        '我出生在 1166 年 12 月 24 日，圣诞节前夜，牛津。Henry II（亨利二世）的第 5 个儿子。\n\n' +
        '中世纪有条铁律：长子继承全部，老二老三去当骑士或教士，老四老五——什么都分不到。\n\n' +
        '我前面 4 个哥哥：William（婴儿就死了）、Henry the Young King、Geoffrey、Richard。我父亲苦笑着给我起了个外号——"John Lackland"——无地约翰。\n\n' +
        '据说我妈 Eleanor of Aquitaine 第一次抱我的时候叹了一句："这孩子注定要让兄弟们头疼。"\n\n' +
        '她说错了一半。我没让兄弟们头疼——他们一个个意外死去：Henry，26 岁，打仗痢疾死。Geoffrey，27 岁，打锦标赛被马踩死。Richard——狮心王（Lionheart），第三次十字军主角——1199 年 4 月在法国一次围城战中被一支偏箭射中肩膀，10 天后伤口感染，死在我妈怀里。临终遗言："我的继承人，是我弟弟 John。"\n\n' +
        '1199 年 5 月 27 日，我在 Westminster Abbey（西敏寺）加冕。32 岁。突然成英格兰国王。但我从来没准备过。',
      en:
        'I was born on December 24, 1166 — Christmas Eve — in Oxford. The fifth son of Henry II.\n\n' +
        'There was an iron rule in medieval Europe: the eldest son inherits everything, the second and third become knights or clergy, and the fourth and fifth — they got nothing.\n\n' +
        'I had four brothers ahead of me. William, who died as an infant. Henry the Young King. Geoffrey. And Richard. My father gave me a bitter nickname — "John Lackland" — John With No Land.\n\n' +
        'They say when my mother Eleanor of Aquitaine first held me, she sighed: "This one is going to be trouble for his brothers."\n\n' +
        'She was half right. I didn\'t trouble my brothers — they died, one by one. Henry, age 26, dysentery in war. Geoffrey, age 27, trampled by a horse at a tournament. And Richard — Lionheart, hero of the Third Crusade — was struck by a stray crossbow bolt during a siege in southern France in April 1199. Ten days later the wound went septic. He died in our mother\'s arms. His last words: "My heir is my brother John."\n\n' +
        'On May 27, 1199, I was crowned at Westminster Abbey. Thirty-two years old. Suddenly King of England. With no preparation at all.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '没准备过的人当王——你猜我第一件大事会做错什么。',
    expectedLength: '230-280 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'King John',
    narrativeRef: '§3 + §4 1204 失去 Normandy + 残忍',
    content: {
      cn:
        '1204 年的麻烦从一桩抢未婚妻的事开始。\n\n' +
        '法国有个叫 Hugh of Lusignan 的贵族，跟一个叫 Isabella of Angoulême 的姑娘订了亲。我看上了 Isabella，直接把她娶过来。Hugh 怒不可遏，告到法王 Philip Augustus（菲利普二世）那里——而 Philip 早就在等借口。他立刻宣布没收我所有法国领地。\n\n' +
        '战争开打。我没去前线——我在英国南部宫殿里打猎。Philip 一个城一个城地推进。一个夏天，Normandy（诺曼底）全丢，连带 Anjou、Maine、Touraine 也丢了。从我高祖父威廉征服英格兰那年算起，138 年的祖业，一夜尽失。\n\n' +
        '回到英国，我做了一件让欧洲心寒的事。1203 年，我侄子 Arthur of Brittany（16 岁）从我囚禁他的 Rouen 城堡失踪。我对外宣布"他逃跑时摔死了"。当时的编年史家有 3 种说法：Coggeshall 说我醉酒亲手杀了他；Margam 说我把尸体扔进塞纳河；还有一种说法是活活饿死。没人能证实。\n\n' +
        '我心里清楚的只有一件事：他不会再威胁我了。',
      en:
        'The trouble of 1204 began with a stolen bride.\n\n' +
        'A French baron named Hugh of Lusignan was engaged to a young woman called Isabella of Angoulême. I wanted Isabella. I simply took her and married her. Hugh, furious, complained to the French King, Philip Augustus — who had been waiting for an excuse. Philip immediately declared all my French lands forfeit.\n\n' +
        'War broke out. I didn\'t ride to the front — I went hunting at my palace in southern England. Philip advanced city by city. In one summer, all of Normandy was lost. Anjou, Maine, Touraine — gone too. The lands my great-great-grandfather William had conquered when he took England — 138 years of family inheritance — vanished in a single season.\n\n' +
        'Back in England, I did something that froze Europe\'s blood. In 1203, my nephew Arthur of Brittany, age 16, disappeared from Rouen Castle, where I had imprisoned him. I announced he had "fallen to his death while attempting to escape." But chroniclers of the time told three different stories: Coggeshall said I killed him myself in a drunken rage; Margam said I had the body thrown into the Seine; a third version had him starved to death. No one could prove anything.\n\n' +
        'The only thing I knew for sure: he would never threaten me again.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '杀侄子加重税，贵族们还能忍。让他们集体倒戈的事，1208 年才发生。',
    expectedLength: '280-340 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'King John',
    narrativeRef: '§3 + §4 1208-1213 教皇冲突',
    content: {
      cn:
        '1208 年我跟教皇英诺森三世（Innocent III）翻脸。他要任命 Stephen Langton 当 Canterbury 大主教。我不接受——我要自己的人。\n\n' +
        '3 月 23 日，教皇下了 Interdict（停教令——全英国教堂关门，婴儿不能洗礼，结婚不能办，死人不能下葬）。这一招针对的不是我——是我的臣民。整个英国陷入宗教恐慌。\n\n' +
        '我硬扛着。1209 年 11 月，教皇升级——直接对我个人 excommunicate（绝罚——把我开除教籍）。按教法，被绝罚的国王，他的臣民可以不必效忠他。这等于核武器：贵族们突然有了背弃我的法律理由。\n\n' +
        '我又扛了 4 年。直到 1213 年 5 月 15 日，我在 Dover 跪下了——把整个英格兰献给教皇做封地，每年付 1000 银马克的贡。\n\n' +
        '那天大厅里念出条约的时候，全场沉默。贵族们眼睁睁看着自家君王跪在罗马脚下。他们心里只剩一句话：这样的王，还值得效忠吗？\n\n' +
        '这是我此生最深的耻辱。但还没完——下一年 1214，更大的灾难等着我。',
      en:
        'In 1208, I broke with Pope Innocent III. He wanted to appoint Stephen Langton as Archbishop of Canterbury. I refused — I wanted my own man.\n\n' +
        'On March 23, the Pope issued an Interdict — a religious shutdown across all of England. Churches closed. Babies could not be baptized. Couples could not be married. The dead could not be buried in consecrated ground. The weapon wasn\'t aimed at me. It was aimed at my subjects. The whole country fell into religious panic.\n\n' +
        'I held out. In November 1209, the Pope escalated — he placed me personally under excommunication. He cut me off from the Church. By canon law, a king under excommunication forfeits his subjects\' duty of loyalty. That was the nuclear option: my barons suddenly had a legal basis to abandon me.\n\n' +
        'I held out four more years. Then on May 15, 1213, I knelt at Dover. I surrendered England itself to the Pope as a papal fief. I agreed to pay 1,000 silver marks every year as tribute.\n\n' +
        'When the treaty was read aloud in the hall, the room went silent. My barons watched their own king kneel before Rome. The thought in every one of their minds: A king like this — is he still worth our loyalty?\n\n' +
        'This was the deepest humiliation of my life. But it wasn\'t over. The bigger disaster was waiting in 1214.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '跪完教皇，第二年 1214 我又输一场关键战。你猜在哪。',
    expectedLength: '280-340 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'King John',
    narrativeRef: '§4 1214 Bouvines 战役',
    content: {
      cn:
        '1214 年 7 月 27 日，Bouvines 战役。我酝酿了 4 年的反法联盟全压上去：神圣罗马帝国皇帝 Otto IV、Flanders 伯爵、还有我的同父异母弟弟 William Longespée（Salisbury 伯爵，绰号"长剑"）。我们的目标是把法王 Philip Augustus 从两面夹击。\n\n' +
        '我自己又没去前线——我在英国南部 Poitou。一个下午，联军彻底崩溃。Otto IV 弃马逃走，Longespée 被俘。\n\n' +
        '消息传回英国时，70 岁的老骑士 William Marshal 来见我。他这辈子服侍过 5 个国王——Henry II、Henry the Young King、Richard、我，后来还有我儿子 Henry III——他是英格兰最忠诚的人。Marshal 站在我面前，话很少："Sire（陛下），贵族们再也忍不下去了。"\n\n' +
        '没有钱了。没有领地了。没有盟友了。\n\n' +
        '1215 年 4 月，贵族集合在 Stamford。5 月 5 日，他们正式与我断绝效忠誓——这是中世纪最严重的政治宣告，法律上等于"我们不再认你做王"。5 月 17 日，London 城门主动为他们打开——伦敦商人也恨我的高税。\n\n' +
        '我没了首都。必须谈判。',
      en:
        'July 27, 1214. The Battle of Bouvines. The anti-French coalition I had spent four years building threw everything onto the field: Holy Roman Emperor Otto IV, the Count of Flanders, and my own half-brother William Longespée — Earl of Salisbury, nicknamed "Longsword." The plan was to crush King Philip Augustus from two sides at once.\n\n' +
        'And once again I wasn\'t at the front. I was in Poitou, in southern England. In a single afternoon, the coalition collapsed. Otto IV abandoned his horse and fled. Longespée was captured.\n\n' +
        'When the news reached England, William Marshal came to see me. Seventy years old. He had served five kings in his lifetime — Henry II, Henry the Young King, Richard, me, and would later serve my son Henry III. He was the most loyal man in the country. Marshal stood before me and said very little: "Sire, the barons cannot bear it any longer."\n\n' +
        'No more money. No more lands. No more allies.\n\n' +
        'In April 1215, the barons gathered at Stamford. On May 5, they formally renounced their oath of fealty to me — the gravest political act in medieval law. It legally meant: "We no longer accept you as our king." On May 17, the gates of London opened for them, voluntarily — London\'s merchants hated my taxes too.\n\n' +
        'I had lost my capital. I had to negotiate.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '贵族点名要的中间人，是一个我刚跟他翻脸不久的人——Stephen Langton 大主教。',
    expectedLength: '280-340 字',
    expectsRealAnswer: false,
  },
  {
    id: 6,
    phase: 'story',
    cosplay: 'King John',
    narrativeRef: '§4 1215.5-6 baron 谈判 + Stephen Langton drafts',
    content: {
      cn:
        '贵族点名要的中间人，是一个我刚跟他翻脸不久的人——Stephen Langton 大主教。\n\n' +
        '1215 年 5 月底，我退到 Windsor 城堡。贵族在 London。Langton 来回奔走。他在巴黎大学读过神学和教会法，他知道怎么把愤怒写成文件。\n\n' +
        '他先起草了一份《Articles of the Barons》（贵族诉求条款）——49 条。我看到第 39 条停下来，反复读：\n\n' +
        '"任何 free man（自由人）不能被随便抓走或没收财产，必须经过同辈合法审判，或者按国法。"\n\n' +
        '我心里清楚：这条是要把国王本人放在法律之下。\n\n' +
        '但我没有选择。如果不签，我就失去王位。\n\n' +
        '6 月 10 日开始，我们在 Runnymede 草地上谈判。Langton 把 49 条改写成 63 条，加上教会保护、司法独立、征税共议——这些条款不仅约束我，也约束我的继承人。\n\n' +
        '我心里早就在想怎么反悔。我需要时间。',
      en:
        'The intermediary the barons demanded was a man I had recently broken with myself — Archbishop Stephen Langton.\n\n' +
        'At the end of May 1215, I withdrew to Windsor Castle. The barons held London. Langton shuttled back and forth. He had studied theology and canon law at the University of Paris — he knew how to translate rage into a legal document.\n\n' +
        'He drafted first what was called the *Articles of the Barons* — 49 demands. I stopped at Article 39 and read it again and again:\n\n' +
        '"No free man shall be seized or imprisoned, or stripped of his rights or possessions, except by the lawful judgment of his peers, or by the law of the land."\n\n' +
        'I understood instantly: this clause was meant to put the King himself under the law.\n\n' +
        'But I had no choice. If I refused to sign, I lost the throne.\n\n' +
        'Starting June 10, we negotiated at Runnymede meadow. Langton expanded the 49 articles into 63 — adding Church protections, judicial independence, taxation by common counsel — clauses binding not just me but every king after me.\n\n' +
        'In my head, I was already plotting how to renege. I just needed to buy time.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '6 月 15 日 Runnymede，我去签。但我心里已经在想怎么反悔。',
    expectedLength: '240-280 字',
    expectsRealAnswer: false,
  },
  {
    id: 7,
    phase: 'story',
    cosplay: 'King John',
    narrativeRef: '§4 Runnymede 6/15 + 我的内心',
    content: {
      cn:
        '6 月 15 日，Runnymede。Stephen Langton 念拉丁文，63 条，一条一条。25 个贵族站在草地上，全副武装。\n\n' +
        '我把红蜡滴在羊皮纸下方。把青铜印模压下去。\n\n' +
        '盖那一刻，我心里在想三件事——\n\n' +
        '"我父亲 Henry II 一辈子收复整个西法国。我一个夏天就丢光了。"\n\n' +
        '"我哥哥 Richard 死的时候，整个英格兰为他哭。我活着，所有人在恨我。"\n\n' +
        '"今天我在草地上盖印——字是 Langton 写的，印是我的——但我心里没认。"\n\n' +
        '仪式结束后我立刻派密使去罗马。我让他带一封信给教皇英诺森三世——告诉他这份文件是我被胁迫签的，按教法应当无效。教皇是我的封建宗主，他必须帮我。\n\n' +
        '我等他的回信。',
      en:
        'June 15. Runnymede. Stephen Langton read the Latin aloud, clause by clause — sixty-three of them. Twenty-five barons stood on the meadow, fully armed.\n\n' +
        'I dripped red wax onto the lower edge of the parchment. I pressed the bronze seal down.\n\n' +
        'At the moment the wax cooled, three thoughts moved through my head —\n\n' +
        '"My father Henry II spent his life reconquering western France. I lost it all in a single summer."\n\n' +
        '"My brother Richard died, and the whole of England wept for him. I live, and the whole of England hates me."\n\n' +
        '"Today I am standing in a meadow setting my seal to a document — the words are Langton\'s, the seal is mine — but in my heart, I have not consented."\n\n' +
        'The minute the ceremony ended, I sent a messenger to Rome. He carried a letter for Pope Innocent III: this document was signed under coercion, and by canon law it should be void. The Pope was my feudal overlord. He had to help me.\n\n' +
        'I waited for his reply.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '7 月教皇真的废了 charter，内战重启。但我没活到看结果——你猜我什么时候死。',
    expectedLength: '220-260 字',
    expectsRealAnswer: false,
  },
  {
    id: 8,
    phase: 'story',
    cosplay: 'King John',
    narrativeRef: '§4 1216.10 我死',
    content: {
      cn:
        '1216 年 10 月 18 日，Newark 一个城堡。我躺在床上，痢疾。再过两个月就满 50 岁。\n\n' +
        '教皇真的在 8 月废了 Magna Carta——但贵族不认。他们去法国请来法王的儿子 Louis 当英格兰王。内战重新开打。1216 年 9 月我在 Wash 海湾过河时丢失了大量辎重——传说连王冠都掉进了沼泽。10 月，我病倒了。\n\n' +
        '弥留之际，我数我留下了什么——\n\n' +
        '"我失去了 Normandy。"\n\n' +
        '"我跪过教皇。"\n\n' +
        '"我让贵族集体造反。"\n\n' +
        '"我让一份限制我的文件传遍英国。"\n\n' +
        '"我儿子 Henry 才 9 岁。摄政是 William Marshal——70 岁老骑士，我一辈子最信任的人。"\n\n' +
        '我闭上眼，以为那张羊皮纸会跟我一起入土。\n\n' +
        '我没料到的是——一个月后，1216 年 11 月，Marshal 借 9 岁新王 Henry III 之名，重新颁布了 Magna Carta。他添了一句"此乃国王恩赐"——给它合法外衣。\n\n' +
        '我亲手签下的那张败笔，会传 800 年。',
      en:
        'October 18, 1216. A castle in Newark. I lay on a bed with dysentery. Two months short of fifty.\n\n' +
        'The Pope had voided Magna Carta in August, just as I had asked. But the barons rejected the voiding. They had brought Louis, son of the King of France, across the Channel and were trying to make him King of England. Civil war was burning across the country. In September, crossing The Wash estuary, I lost a great deal of my treasure — legend said even the Crown Jewels sank into the marsh. By October I was sick.\n\n' +
        'On my deathbed, I counted what I was leaving behind:\n\n' +
        '"I lost Normandy."\n\n' +
        '"I knelt before the Pope."\n\n' +
        '"My barons rose against me."\n\n' +
        '"I let a document limiting the King circulate across England."\n\n' +
        '"My son Henry is nine years old. The regent will be William Marshal — seventy years old, the most loyal man I ever knew."\n\n' +
        'I closed my eyes, expecting that parchment to be buried with me.\n\n' +
        'What I didn\'t see coming — one month later, November 1216, Marshal, in the name of nine-year-old Henry III, reissued Magna Carta. He added a single line: "This is granted as a gift from the King" — giving it the cover of legitimacy.\n\n' +
        'The document I had signed in failure would last eight hundred years.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我死前没看到这一切。但你看到了——这张纸怎么活下来的，下一节我们 zoom out。',
    expectedLength: '300-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 9,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§4 1216-1297 charter 演化',
    content: {
      cn:
        '现在我们离开约翰王视角。回看那张 1215 年签下的羊皮纸，怎么活下来的。\n\n' +
        '1216 年 11 月，William Marshal 以 Henry III 之名重新颁布 Magna Carta。\n\n' +
        '1217 年、1225 年、1297 年——一次又一次重新颁布、修订。\n\n' +
        '1297 年，Edward I（爱德华一世）把 Magna Carta 写进英国 statute book（成文法令集），从此成为正式国法。\n\n' +
        '1628 年，英国《Petition of Right》（权利请愿书）引用 Article 39。\n\n' +
        '1689 年，《Bill of Rights》（权利法案）再引用。\n\n' +
        '1789 年，美国宪法第 5 修正案 + 第 14 修正案——直接继承 Article 39 的 *due process*（正当法律程序）原则。\n\n' +
        '约翰王 1215 年签字那一刻不知道：他签的，不是一份失败的妥协。是一根种子。八百年后这根种子长成现代法治。\n\n' +
        '故事讲完了。下面我们换一个视角——回头看，问几个问题。',
      en:
        'We now step out of King John\'s perspective. Looking back, how did that piece of parchment from 1215 actually survive?\n\n' +
        'November 1216: William Marshal reissued Magna Carta in the name of Henry III.\n\n' +
        '1217. 1225. 1297. Reissued and revised, again and again.\n\n' +
        '1297: King Edward I had Magna Carta written into the official English statute book — making it formal law.\n\n' +
        '1628: The English *Petition of Right* cited Article 39.\n\n' +
        '1689: The *Bill of Rights* cited it again.\n\n' +
        '1789: The Fifth and Fourteenth Amendments to the United States Constitution drew directly from Article 39 — adopting the doctrine of *due process of law*.\n\n' +
        'King John, when he set his seal in 1215, did not realize what he was signing. It was not a failed compromise. It was a seed. Eight hundred years later that seed grew into modern rule of law.\n\n' +
        'The story is over. Now we shift perspective — and look back, with some questions.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '故事讲完了。现在你（扮演约翰王 8 节后）回头看自己——',
    expectedLength: '240-280 字',
    expectsRealAnswer: false,
  },
  // ═════ Synthesis（真 Socratic）═════
  {
    id: 10,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§5 + §6 + §7',
    deliverGoal:
      '你刚扮演了 King John，一个失败者，一个被逼签字的暴君。' +
      '但他签的那张纸，成了西方现代法治源头。这是历史的**反讽**：' +
      'King John 想集中权力，他失败了，结果反而 enable 了权力分散的 trend。' +
      '——但是，历史学界对此有**两种相反**解读：' +
      '**解读 A（Whig 进步派）**：Magna Carta 是自由对抗暴政的胜利，预设了民主。' +
      '**解读 B（修正派 / 马克思派）**：Magna Carta 只保护 25 个 baron 寡头，' +
      '把"自由"狭隘定义在 10% 上层男性手里——可能**延缓**了真正的民主 600 年。' +
      '问题来了——',
    engagementHook:
      '**你怎么看**——Magna Carta 是"加速了"民主，还是"延缓了"民主（让贵族借法律巩固特权）？' +
      '没有标准答案——给你的理由说服我。想 30 秒答。',
    expectedLength: '200-240 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 同代中国 + Tang Code 651',
    deliverGoal:
      '比 Magna Carta 早 564 年，唐律疏议 651 年颁布。12 卷 502 条，管所有人，更系统。' +
      '但唐律没成现代法律源头。Magna Carta 1215 年只 63 条，只保护 25 baron，只在英国，' +
      '却变成全球宪政基础。同样的"成文法"，为什么走出**完全不同的命运**？',
    engagementHook:
      '**你怎么看**——是文化决定？历史偶然？还是**英国后续 800 年反复重新解读**让 Magna Carta 越来越大——而中国**没这种重新解读机制**？想 30 秒答',
    expectedLength: '180-220 字 + 真问题',
    expectsRealAnswer: true,
  },
  // ═════ Meta（反思 + 桥）═════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题',
    deliverGoal:
      '你扮演了 King John 8 节——经历了他的失去 + 残忍 + 屈辱 + 死——' +
      '现在你可以选：' +
      '(1) 进 mastery 通关 / ' +
      '(2) 换 lens 重玩——比如 Stephen Langton（起草人视角）或 Tom（农奴小孩视角）——' +
      '——同一事件不同角度——会发现新东西',
    engagementHook:
      '**做 King John 这一遍——最让你 surprise 的是什么**？是他的残忍？是他签字时的内心？还是他死前不知道 charter 会活 800 年？说一句话',
    expectedLength: '120-160 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// LENS 2: Stephen Langton（中间人 + 起草人）
// ═══════════════════════════════════════════════════
var stephenLangtonStoryboard = [
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Stephen Langton',
    narrativeRef: '§4 Runnymede 6/15',
    deliverGoal:
      '第一人称 Stephen Langton——1215 年 6 月 15 日 Runnymede 草地——' +
      '我 65 岁——Canterbury 大主教——我手里拿一卷羊皮纸——63 条拉丁文——' +
      '我念给 King John 听——我念给 25 个 baron 听——' +
      '我看到 King John 的脸——他在签——但他**心里没认**——' +
      '我看到 baron 的脸——他们在监视——他们也**不完全信**——' +
      '——这一刻我想：这张纸——能活吗？' +
      '我是 Stephen Langton——你接下来跟我经历 8 年——看我怎么走到这一刻',
    engagementHook: '我为什么是夹在 King 和 baron 中间的人——倒回 1207 年',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'Stephen Langton',
    narrativeRef: '§3 Stephen Langton 出身',
    deliverGoal:
      '我（Stephen）1150 年生于 Lincolnshire——英国乡下——' +
      '我 20 岁去巴黎大学——读神学 + 教会法 25 年——' +
      '我成为巴黎最有名的神学教授——教皇 Innocent III 是我学生时代朋友——' +
      '1207 年——教皇任命我为 Canterbury 大主教（英国最高教职）——' +
      '——但 King John 拒绝接受——' +
      '我流亡 6 年——在法国 Pontigny 修道院——看英国发生大事但我回不去',
    engagementHook: '6 年我在远处看——King John 跟教皇撕——baron 越来越愤怒——你猜我 1213 年怎么回去',
    expectedLength: '170-210 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'Stephen Langton',
    narrativeRef: '§3 + §4 1213 回英国',
    deliverGoal:
      '1213 年 5 月——King John 终于跪了——他接受我做大主教——他甚至把英国献给教皇——' +
      '我 7 月回英国——下船时我心想："我终于能做事了"——' +
      '但我看到的是——' +
      'baron 们对 King 已经**绝望**——他们不只是不满——他们在**密谋起义**——' +
      '我心想：如果发生内战——教会会被卷进去——民众会受苦——' +
      '我必须在 King 和 baron 中间——找到第三条路——**用法律**',
    engagementHook: '法律是什么——是限制 King——也保护 baron——也保护未来——你猜我会怎么写',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Stephen Langton',
    narrativeRef: '§4 1214 Bouvines + 1215 春',
    deliverGoal:
      '1214 年 7 月 Bouvines 战役——King John 大败——失了所有 reconquest 希望——' +
      'baron 决定动手——1215 年 4 月在 Stamford 集合——5 月进 London——' +
      'King John 退到 Windsor——他派人来找我："Stephen——你做中间人"——' +
      '我接了——我去 baron 那边——他们给我一份"Articles of the Barons"——49 条诉求——' +
      '我读完——我说："这写得太具体太事——必须改成法律语言——必须保护未来——不只是 1215"——' +
      '——5 月 6 月我把 49 条改写成 63 条——加教会保护 + 司法独立 + 征税共议',
    engagementHook: '63 条里——最关键的是第 39 条——我用了一个词——这个词 800 年后改变世界——你猜哪个词',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'Stephen Langton',
    narrativeRef: '§5 Clause 39 起草',
    deliverGoal:
      '我（Stephen）写第 39 条时——我用 6 个拉丁词："Nullus liber homo capiatur..."——' +
      '中文："任何 free man 不能被随便抓走"——' +
      '关键词 1：**lawful judgment of his peers**（同辈合法审判）——' +
      '关键词 2：**by the law of the land**（按国法）——' +
      '我心想：' +
      '今天 free man 是 baron——但 200 年后？500 年后？谁知道——' +
      '我故意用**抽象词**——"free man" 这个范畴未来可以扩展——这不是为 1215——是为永远',
    engagementHook: '6 月 15 日 Runnymede——我念这一条——King 听完皱眉——baron 听完点头——但我自己心里在想：这一刻能活几天',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },
  {
    id: 6,
    phase: 'story',
    cosplay: 'Stephen Langton',
    narrativeRef: '§4 7 月 → 1216 → 1297',
    deliverGoal:
      '6 月 15 日 Runnymede 我主持仪式——King 盖印——baron 拔剑誓——' +
      '我心里没庆祝——我知道 King 会反悔——' +
      '果然——7 月 King 派密使去 Rome——8 月教皇 Innocent III 废 charter——' +
      '内战重启——baron 找法王 Louis 来当英格兰王——' +
      '我夹在中间——又被教皇罚——又被 baron 不信任——' +
      '1216 年 10 月 King John 死——William Marshal 摄政——他做了一件**保我命的事**：' +
      '11 月**重新颁** Magna Carta——以新王名义——加"这是 King 的礼物"——' +
      '——我的草稿活下来了',
    engagementHook: '我 1228 年死——77 岁——我活到看 charter 通过 1217 + 1225 reissue——但我看不到 800 年后的 1789',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },
  {
    id: 7,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§6 800 年回声',
    deliverGoal:
      '现在 zoom out——Stephen Langton 起草的 63 条 → 800 年演化：' +
      '1297 Edward I statute——1628 Petition of Right——1689 Bill of Rights——' +
      '1789 美国宪法 5th + 14th Amendment 直接继承——' +
      '1948 联合国人权宣言——' +
      '——Stephen 用的"free man"抽象词——慢慢扩到 "all person"——' +
      'Stephen 1215 年那一刻**故意**留的扩展空间——后人接住了',
    engagementHook: '——现在你（扮演 Stephen 6 节）回头看你自己',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  // ═════ Synthesis ═════
  {
    id: 8,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§5 Article 39 演化 + §6 800 年回声',
    deliverGoal:
      '你刚扮演了 Stephen Langton——一个起草人——一个相信法律能比人活久的人——' +
      '他用"free man"这个抽象词——故意留了**未来可扩展的空间**——' +
      '1789 美国宪法把"free man"换成"no person"——保护全人类——' +
      '——这种"故意留白让后人填"的智慧——叫**living constitution**',
    engagementHook:
      '**你怎么看**——Stephen 1215 年真的预见到 800 年后吗？还是后人**重新解读**才让他显得"远见"？想 30 秒答',
    expectedLength: '180-220 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 9,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 同代中国 + Tang Code 651',
    deliverGoal:
      '同代有另一个起草人——唐律疏议 651 年——长孙无忌主编——' +
      '12 卷 502 条——比 Stephen Langton 早 564 年——更系统——管所有人——' +
      '但唐律没成现代法律源头——而 Magna Carta 成了——' +
      '为什么——',
    engagementHook:
      '**你怎么看**——是 Stephen 比长孙无忌**预见性更强**？还是**后续社会**对法律的态度不同（英国敢反复重新解读 vs 中国把唐律当祖训不动）？想 30 秒答',
    expectedLength: '180-220 字 + 真问题',
    expectsRealAnswer: true,
  },
  // ═════ Meta ═════
  {
    id: 10,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题',
    deliverGoal:
      '你扮演了 Stephen Langton 6 节——一个起草人的视角——' +
      '你也可以选 King John（暴君视角）或 Tom（农奴小孩视角）——' +
      '同一事件不同角度——会发现新东西',
    engagementHook:
      '**做 Stephen 这一遍——最让你 surprise 的是什么**？是他对未来的"故意留白"？是他 6 年流亡的耐心？还是他在 King 和 baron 中间的 lonely？说一句话',
    expectedLength: '120-160 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// LENS 3: Tom 农奴男孩（被排除的下层视角）
// ═══════════════════════════════════════════════════
var tomVilleinStoryboard = [
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Tom（13 岁农奴男孩）',
    narrativeRef: '§3 Tom 虚构桥接 + §4 Runnymede',
    deliverGoal:
      '第一人称 Tom——1215 年 6 月 15 日——我 13 岁——在 Runnymede 草地附近放羊——' +
      '我看到大军——我从没见过这么多骑兵——我怕——我躲在树后面——' +
      '我看到一个胖男人（穿好衣服的）跟一群穿铁衣的人坐桌前——他们在签什么——' +
      '我不识字——我不知道发生什么——' +
      '但 30 年后我会知道——那一天改变了西方法律——' +
      '——而 1215 年的我——只看到一个画面',
    engagementHook: '我是 Tom——我是历史的"配角"——但配角看到的也是历史——倒回我的童年',
    expectedLength: '160-200 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'Tom（13 岁农奴男孩）',
    narrativeRef: '§3 Tom + 农奴 villein 制度',
    deliverGoal:
      '我（Tom）家世代是 Mowbray 庄园的 villein（农奴）——' +
      '我爸是 villein——我妈是 villein——我也是——我儿子也会是——' +
      '我们不能离开庄园——不能识字——不能告状——' +
      '每年收成 1/3 给地主——1/10 给教会——剩下勉强活——' +
      '英格兰 1215 年大约 90% 是 villein——只有 10% 是 free man——' +
      '我属于那 90%——那张 charter 写"free man"——**不是我**',
    engagementHook: '但 1215 年春——一件事让我家也不安——你猜是什么',
    expectedLength: '160-200 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'Tom（13 岁农奴男孩）',
    narrativeRef: '§4 1215 春 baron 起兵 + 农民眼中',
    deliverGoal:
      '1215 年春——King John 的税官来 Mowbray 庄园——抢 Lord Mowbray 1/2 收成——' +
      '我爸跟我说："王跟 baron 撕——baron 找借口起兵——但**最后吃亏的是我们**"——' +
      '5 月——我听说 baron 进 London——我妈说："那不关我们事——交税还是要交"——' +
      '6 月初——大军经过我们庄园 north——往 Runnymede——' +
      '我跟着一群孩子去看热闹——我躲在树后面——' +
      '我看到 King John（胖的）——baron（穿铁衣的）——还有一个穿大主教袍的（Stephen Langton）——' +
      '——我 13 岁——我不懂他们在做什么',
    engagementHook: '我看到了画面——但我不懂——你猜我什么时候才懂',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Tom（13 岁农奴男孩）',
    narrativeRef: '§3 Tom 30 年后',
    deliverGoal:
      '15 年后——我 28 岁——成磨坊主（不再是 villein——我赎了身）——' +
      '一个律师过路——他跟我聊——他说："你知道 1215 年那张纸吗——里面有第 39 条——任何 free man 不能被随便抓"——' +
      '我说："但我家 1215 年还是 villein——那条不保护我"——' +
      '律师说："对——但你**儿子**呢？你儿子如果做 free man——那条**保护他**"——' +
      '我心里咯噔一下——' +
      '——1215 年那张纸**不立刻**保护我家——但**它播下种子**——' +
      '"free man"这个词——我儿子可能是——我孙子更可能',
    engagementHook: '15 年前那个 13 岁的我躲在树后看大军——不懂——15 年后我懂了——你猜更后面的人怎么用这张纸',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§6 800 年回声 + 农奴解放',
    deliverGoal:
      '现在 zoom out——Tom 后代怎么走：' +
      '14 世纪黑死病（Black Death）后，英国农奴大量死亡，劳动力短缺。' +
      '剩下的农奴纷纷逃到城市做 free man——' +
      '15 世纪英国 villein 制度**自然消失**——' +
      '1381 Wat Tyler 农民起义——直接引用 Magna Carta 第 39 条——' +
      '——Tom 的 14 世纪后代真的成了 free man——' +
      'Magna Carta 第 39 条——慢慢扩展——保护 Tom 的 200 年后子孙',
    engagementHook: '——现在你（扮演 Tom 4 节）回头看你自己',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  // ═════ Synthesis ═════
  {
    id: 6,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§5 free man 演化 + §6 农奴解放',
    deliverGoal:
      '你刚扮演了 Tom——一个 13 岁的 villein——一个**被 charter 排除**的人——' +
      '但**Tom 的 200 年后子孙**——慢慢被 charter 保护——' +
      '——这就是 Magna Carta 真实的"扩展机制"：' +
      '不是立刻——不是公平——是**慢慢扩展**——是**每一代抢一点**',
    engagementHook:
      '**你怎么看**——Tom 1215 年应该**感谢** Magna Carta（虽然不保护他但保护后代）？还是应该**愤怒**（凭什么他和儿子要等 200 年才被保护）？想 30 秒答',
    expectedLength: '170-210 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 7,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 同代中国 + Tom 视角扩展',
    deliverGoal:
      '同代中国——同样是农民 90%——但中国农民**没有 Magna Carta 这种法律保护**——' +
      '中国走另一条路——**科举制度**——农民儿子**理论上**可以做官——' +
      '一个走"法律保护所有 free man（慢慢扩展）"——' +
      '一个走"个人通过考试上升"——' +
      '——两条路给农民的命运不同',
    engagementHook:
      '**你怎么看**——如果你是 Tom——你愿意活在 1215 英国（被 charter 排除但 200 年后子孙被保护）还是同代中国（科举一线机会但 charter 永远没有）？想 30 秒答',
    expectedLength: '170-210 字 + 真问题',
    expectsRealAnswer: true,
  },
  // ═════ Meta ═════
  {
    id: 8,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题',
    deliverGoal:
      '你扮演了 Tom 4 节——一个被排除的人的视角——' +
      '你也可以选 King John（暴君视角）或 Stephen Langton（起草人视角）——' +
      '同一事件不同角度——会发现新东西——' +
      'Tom 的视角让你看到：**Magna Carta 不立刻保护所有人——但它播下种子——慢慢长**',
    engagementHook:
      '**做 Tom 这一遍——最让你 surprise 的是什么**？是他 13 岁不懂的画面？是 30 年后他突然懂的那一刻？还是他 200 年后子孙才被保护？说一句话',
    expectedLength: '120-160 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// 导出 lenses + default
// ═══════════════════════════════════════════════════
export var lenses = {
  'king-john': {
    id: 'king-john',
    name: 'King John',
    nameCn: '约翰王',
    role: '英格兰国王 / 暴君 + 失败者',
    description: '你扮演 King John——经历他的失去 + 残忍 + 屈辱 + 死。被 charter 逼盖印的人。',
    storyboard: kingJohnStoryboard,
  },
  'stephen-langton': {
    id: 'stephen-langton',
    name: 'Stephen Langton',
    nameCn: '斯蒂芬·朗顿',
    role: 'Canterbury 大主教 / 起草人 / 中间人',
    description: '你扮演 Stephen Langton——巴黎大学法学博士——夹在 King 和 baron 中间——亲手写 Article 39。',
    storyboard: stephenLangtonStoryboard,
  },
  'tom-villein': {
    id: 'tom-villein',
    name: 'Tom 农奴男孩',
    nameCn: 'Tom（13 岁 villein）',
    role: '被排除的下层 / 200 年后才被保护的人',
    description: '你扮演 13 岁农奴 Tom——在 Runnymede 边放羊看到大军——不识字不懂发生什么——但你的子孙 200 年后被 Magna Carta 保护。',
    storyboard: tomVilleinStoryboard,
  },
};

export var defaultLens = 'king-john';

// ─── 默认 export 兼容老 runtime（取 default lens 的 storyboard）──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'magna-carta-1215',
  schemaVersion: 2, // v2 = lens-based
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  estimatedMinutesPerLens: {
    'king-john': 28,
    'stephen-langton': 22,
    'tom-villein': 18,
  },
};
