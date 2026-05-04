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
        '1215 年 6 月 15 日清晨。我骑着马来到 Runnymede（兰尼米德）草地——泰晤士河边一片湿地，下着小雨。\n\n' +
        '二十五个贵族（baron）一字排开站在我对面，个个披甲，手按剑柄。草地踩下去全是泥水，空气里混着湿羊皮纸和河泥的腥气。我的右手在抖。不是冷，是怒。\n\n' +
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
        '我出生在 1166 年 12 月 24 日，圣诞节前夜，牛津。父亲是 Henry II（亨利二世），我是他第 5 个儿子。\n\n' +
        '中世纪有条铁律：长子继承全部，老二老三去当骑士或教士。老四老五——什么都分不到。\n\n' +
        '我前面 4 个哥哥：William（婴儿就死了）、Henry the Young King、Geoffrey、Richard。父亲给我起了个外号叫"John Lackland"——无地约翰。宫廷里跟着叫，传说是父亲自嘲式的玩笑（学界对这一点仍有争议）。\n\n' +
        '母亲是 Eleanor of Aquitaine。她第一次抱我，叹道："这孩子，注定要让兄弟们头疼。"\n\n' +
        '她说错了一半。我没让兄弟们头疼——他们一个个意外死去。Henry，26 岁，打仗痢疾死（dysentery，肠道感染）。Geoffrey，27 岁，打锦标赛被马踩死。Richard——人称狮心王（Lionheart），第三次十字军主角——1199 年 3 月底在法国一次围城战中被一支偏弩射中肩膀。约 11 天后伤口感染，死在母亲怀里。临终一句话："我的继承人，是我弟弟 John。"\n\n' +
        '1199 年 5 月 27 日，我在 Westminster Abbey（西敏寺）加冕。32 岁，突然成英格兰国王。但我从来没准备过。',
      en:
        'I was born on December 24, 1166 — Christmas Eve — in Oxford. My father was Henry II, and I was his fifth son.\n\n' +
        'There was an iron rule in medieval Europe: the eldest son inherits everything, and the second and third become knights or clergy. The fourth and fifth got nothing.\n\n' +
        'I had four brothers ahead of me. William, who died as an infant. Henry the Young King. Geoffrey. And Richard. My father gave me a nickname: "John Lackland" — John With No Land. (The court used it. Tradition says my father coined it as a self-mocking joke, though historians still debate this.)\n\n' +
        'My mother was Eleanor of Aquitaine. They say when she first held me, she sighed: "This one is going to be trouble for his brothers."\n\n' +
        'She was half right. I didn\'t trouble my brothers — they died, one by one. Henry, age 26, dysentery (a deadly intestinal disease) in war. Geoffrey, age 27, trampled by a horse at a tournament. And Richard — known as Lionheart, hero of the Third Crusade — was struck by a stray crossbow bolt during a siege in southern France in late March 1199. About eleven days later the wound went septic (infected). He died in our mother\'s arms. His last words: "My heir is my brother John."\n\n' +
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
        '1204 年的麻烦，是从一桩抢未婚妻的事开始的。\n\n' +
        '法国有个叫 Hugh of Lusignan 的贵族，跟一个叫 Isabella of Angoulême 的姑娘订了亲。我看上了 Isabella，直接把她娶过来。Hugh 一怒之下，跑到法王 Philip Augustus（菲利普二世）面前告状。Philip 早就在等借口——他立刻宣布没收我所有法国领地。\n\n' +
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
        '1208 年我跟教皇英诺森三世（Pope Innocent III）翻脸。他要任命 Stephen Langton 当 Canterbury 大主教，我不肯——我要用自己的人。\n\n' +
        '3 月 23 日，教皇下了 Interdict（停教令）：全英国教堂关门，婴儿不能洗礼，结婚不能办，死人不能下葬。这一招不冲我来，冲的是我的臣民。整个英国陷入宗教恐慌。\n\n' +
        '想一想——1208 年你生了女儿。接下来 6 年她不能受洗。中世纪信徒真心相信没受洗的婴儿夭折后会下 limbo（地狱边境）。每个英国父母——都怕。\n\n' +
        '我硬扛。1209 年 11 月，教皇升级——直接对我个人 excommunicate（绝罚，开除教籍）。按教会法 canon law（教会法），被绝罚的国王，他的臣民可以不必效忠。这等于核武器：贵族们突然有了背弃我的合法理由。\n\n' +
        '我又扛了 4 年。直到 1213 年 5 月 15 日，我在 Dover 跪下，把整个英格兰献给教皇做封地（papal fief，归罗马管的属地），每年付 1000 银马克贡。\n\n' +
        '那天大厅里念条约的时候，全场沉默。贵族们眼睁睁看着自家君王跪在罗马脚下。他们心里只剩一句：这样的王，还值得效忠吗？\n\n' +
        '这是我此生最深的耻辱。但还没完。下一年 1214，更大的灾难等着我。',
      en:
        'In 1208, I broke with Pope Innocent III. He wanted to appoint Stephen Langton as Archbishop of Canterbury. I refused — I wanted my own man.\n\n' +
        'On March 23, the Pope issued an Interdict (a religious shutdown). Churches closed across England. Babies could not be baptized. Couples could not be married. The dead could not be buried in consecrated ground. The weapon was not aimed at me. It was aimed at my subjects. The whole country fell into religious panic.\n\n' +
        'Imagine: you have a daughter in 1208. For six years she cannot be baptized. Medieval Christians truly believed that an unbaptized infant who died would go to limbo, a borderland of hell. Every English parent was afraid.\n\n' +
        'I held out. In November 1209, the Pope went further. He placed me personally under excommunication, cutting me off from the Church. In canon law (Church law), a king under excommunication loses the loyalty of his subjects. By Church rules, no one had to obey me anymore. This was the nuclear option. My barons suddenly had a legal reason to abandon me.\n\n' +
        'I held out four more years. Then on May 15, 1213, I knelt at Dover. I surrendered England itself to the Pope as a papal fief (territory held under the Pope). I agreed to pay 1,000 silver marks every year as tribute.\n\n' +
        'When the treaty was read aloud in the hall, the room went silent. My barons watched their own king kneel before Rome. The thought in every one of their minds: A king like this — is he still worth our loyalty?\n\n' +
        'This was the deepest humiliation of my life. But it was not over. The bigger disaster was waiting in 1214.',
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
        '我自己在 Poitou（法国西部）打另一条战线——围 La Roche-aux-Moines。Bouvines 那条北线我交给 Otto IV 和 Longespée 带。一个下午，Bouvines 联军彻底崩溃。Otto IV 弃马逃走，Longespée 被俘。我自己这条南线也吃紧，被迫回英国。\n\n' +
        '消息传回英国时，70 岁的老骑士 William Marshal 来见我。他这辈子服侍过 5 个国王——Henry II、Henry the Young King、Richard、我，后来还有我儿子 Henry III——他是英格兰最忠诚的人。Marshal 站在我面前，话很少："Sire（陛下），贵族们再也忍不下去了。"\n\n' +
        '没有钱了。没有领地了。没有盟友了。\n\n' +
        '1215 年 4 月，贵族集合在 Stamford。5 月 5 日，他们正式与我断绝效忠誓——这是中世纪最严重的政治宣告，法律上等于"我们不再认你做王"。5 月 17 日，London 城门主动为他们打开——伦敦商人也恨我的高税。\n\n' +
        '我没了首都。必须谈判。',
      en:
        'July 27, 1214. The Battle of Bouvines. The anti-French coalition I had spent four years building threw everything onto the field: Holy Roman Emperor Otto IV, the Count of Flanders, and my own half-brother William Longespée — Earl of Salisbury, nicknamed "Longsword." The plan was to crush King Philip Augustus from two sides at once.\n\n' +
        'I was fighting the southern front myself, in Poitou (western France), besieging La Roche-aux-Moines. The northern front at Bouvines I left to Otto IV and Longespée. In a single afternoon, the Bouvines coalition collapsed. Otto IV abandoned his horse and fled. Longespée was captured. My own siege in the south then failed too. I had to retreat to England.\n\n' +
        'When the news reached England, William Marshal came to see me. Seventy years old. He had served five kings in his lifetime — Henry II, Henry the Young King, Richard, me, and would later serve my son Henry III. He was the most loyal man in the country. Marshal stood before me and said very little: "Sire, the barons cannot bear it any longer."\n\n' +
        'No more money. No more lands. No more allies.\n\n' +
        'In April 1215, the barons gathered at Stamford. On May 5, they formally renounced their oath of fealty (loyalty oath to a feudal lord) to me. This was the gravest political act in medieval law. It legally meant: "We no longer accept you as our king." On May 17, the gates of London opened for them — voluntarily. London\'s merchants hated my taxes too.\n\n' +
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
        '盖那一刻，三件事在我心里翻——\n\n' +
        '"我父亲 Henry II 一辈子收复整个西法国。我一个夏天就丢光了。"\n\n' +
        '"我哥哥 Richard 死的时候，整个英格兰为他哭。我活着，所有人恨我。"\n\n' +
        '"今天我在草地上盖印。字是 Langton 写的，印是我的。可我心里没认。"\n\n' +
        '仪式一结束我立刻派密使去罗马，带一封信给教皇英诺森三世：这份文件是我被胁迫签的，按教法应当无效。教皇是我的封建宗主，他必须帮我。\n\n' +
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
        '教皇 8 月真的废了 Magna Carta，但贵族不认。他们去法国请来法王的儿子 Louis，要立他做英格兰王。内战又烧起来。1216 年 9 月我在 The Wash 海湾（英格兰东部潮汐湾）过河时丢了大量辎重——加冕器物和银箱沉入沼泽（学界对这一传说仍在争论：可能是 Roger of Wendover 13 世纪修士的渲染）。10 月，我病倒了。\n\n' +
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
        'The Pope had voided Magna Carta in August, just as I had asked. But the barons rejected the voiding. They had brought Louis, son of the King of France, across the Channel and were trying to make him King of England. Civil war was burning across the country. In September, crossing The Wash estuary on the east coast of England, I lost a great deal of treasure — legend says royal regalia and chests of silver sank into the marsh. (Modern historians debate this story, which comes from the 13th-century monk Roger of Wendover.) By October I was sick.\n\n' +
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
    content: {
      cn:
        '你刚演完 King John——一个签完字当天就在想怎么废掉它的人。\n\n' +
        '可这张羊皮纸，800 年后出现在了美国宪法第 5 修正案里。\n\n' +
        '当事人想要 A，800 年后却成了 B——这是历史里最常出现的反讽。\n\n' +
        '那么问题来了：这张纸到底是**推动**了民主，还是**拖慢**了民主？两边都拿得出真证据。\n\n' +
        '**一种说法**（19 世纪英美的主流）：它是自由的第一枪。1215 → 1689 → 1776，一条清楚的进步线。没有它，后面这些都晚到。\n\n' +
        '**另一种说法**（20 世纪修正派，J.C. Holt 等史学家）：纸上写的"free man"在 1215 年只覆盖 10-20% 的人——贵族加少量自由农和市民。剩下 80% 的农奴、所有女人，被白纸黑字排除在外。更狠的是，"自由 = 上层人的特权"这个定义被钉进了法律——后人想扩大保护范围，要先回头跟这张原始文件较劲。从这个角度看，它不是起点，是路障。\n\n' +
        '两边证据都过硬。没有谁是凭情绪。\n\n' +
        '**你怎么看**——推动，还是拖慢？给我你最有力的一条理由。想 30 秒。',
      en:
        'You have just played King John — a man who was already plotting to cancel the document the moment the wax dried.\n\n' +
        'And yet that piece of parchment shows up 800 years later in the Fifth Amendment of the United States Constitution.\n\n' +
        'The people at the center wanted A, and 800 years later it became B. This is one of history\'s most common ironies.\n\n' +
        'So here is the real question: did this document **push democracy forward**, or **hold it back**? Both sides have real evidence.\n\n' +
        '**One view** (mainstream in 19th-century Britain and America): Magna Carta was the first shot fired for liberty. The line is clear — 1215 → 1689 *Bill of Rights* → 1776 American independence. Without it, all of that arrives later.\n\n' +
        '**The other view** (20th-century historians who challenge that older account, J.C. Holt and others): the "free man" mentioned in 1215 covered only about 10–20 percent of the population — the barons, plus a small number of freeholders (small landowners) and townsmen. The remaining 80 percent — villeins (bonded farmers) and *all women* — were excluded **in writing**. Worse: by locking "liberty = the privilege of those at the top" into the law, it froze the definition. Later generations who wanted to expand it had to fight against the original document. By this view, Magna Carta wasn\'t the starting line. It was a roadblock.\n\n' +
        'Both sides have real evidence. Neither is just an opinion.\n\n' +
        '**What do you think** — did it push democracy forward, or hold it back? Give me your strongest single reason. Take thirty seconds.',
    },
    deliverGoal:
      '你刚扮演了 King John，一个失败者，一个被逼签字的暴君。' +
      '但他签的那张纸，成了西方现代法治源头。这是历史的**反讽**：' +
      'King John 想集中权力，他失败了，结果反而 enable 了权力分散的 trend。' +
      '——但是，历史学界对此有**两种相反**解读：' +
      '**解读 A（Whig 进步派）**：Magna Carta 是自由对抗暴政的胜利，预设了民主。' +
      '**解读 B（修正派，J.C. Holt 等 20 世纪史学家）**：Magna Carta 只保护 25 个 baron 寡头，' +
      '把"自由"狭隘定义在 10–20% 的人群手里（除贵族外加少量自由农和市民）——可能**延缓**了真正的民主 600 年。' +
      '问题来了——',
    engagementHook:
      '**你怎么看**——是"推动"了民主，还是"拖慢"了民主？没有标准答案——给我你最有力的一条理由。想 30 秒。',
    expectedLength: '200-240 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 同代中国 + Tang Code 651',
    content: {
      cn:
        '跳出英国，看一眼当时的世界。\n\n' +
        'Magna Carta 1215 年——63 条，只保护贵族，只在英国一个海岛上。\n\n' +
        '比它早 564 年，唐朝就有了《永徽律》（651 年颁布的基础律典；653 年长孙无忌加注疏后定本为《唐律疏议》）。12 卷，502 条，管皇族也管平民——朝鲜、日本、越南的法律后来都从它派生，是当时亚洲最系统的法典。\n\n' +
        '同样是"成文法"，为什么《唐律疏议》后来变成了博物馆里的文物，而 Magna Carta 变成了现代宪法的祖宗？\n\n' +
        '三种想法，每一种都有道理：\n\n' +
        '**一种想法：文化决定论**。中国法律是皇帝从上往下的工具——管你不管自己。英国封建是双向合同——贵族也能反过来要求国王。从根上就不一样，几百年走出两条路是必然。\n\n' +
        '**另一种想法：纯属偶然**。17 世纪英国法学家 Edward Coke 跟国王查理一世吵架，翻出 Magna Carta 当武器——给它塞进了 1215 年根本没有的宪政意义。没有 Coke 那次重新解读，Magna Carta 大概率也是文物。这种想法不信"注定"，认为一次关键选择改了命运。\n\n' +
        '**还有一种：机制不同**。英国普通法允许法官引用几百年前的旧文件——每一代人都在给 Magna Carta 加新意义。唐律之后中国走"祖制不可改"路线——新朝修法主要是继承，不是用旧条款对新问题发声。机制活的，文件就活；机制僵的，再好的文件也用不起来。\n\n' +
        '哪一种最说服你？或者三种都对一部分？想 30 秒。',
      en:
        'Step out of England for a moment. Look at the bigger picture.\n\n' +
        'Magna Carta, 1215: 63 clauses, protecting only the nobility, confined to one island.\n\n' +
        '564 years earlier, the Tang dynasty already had the *Yonghui Code* (the foundation text, promulgated in 651 CE; in 653 CE, the chancellor Zhangsun Wuji finalized an annotated version called the *Tang Code with Commentary*, or *Tanglü Shuyi*). Twelve volumes, 502 articles, applying to royalty and commoners. The legal systems of Korea, Japan, and Vietnam all derived from it. It was the most systematic legal code in Asia.\n\n' +
        'Both were written law codes. Why did the Tang Code end up as a museum piece, while Magna Carta became the ancestor of modern constitutional law?\n\n' +
        'Three ways of thinking about it — each has real support:\n\n' +
        '**One way: culture decided it.** Chinese law was a tool the emperor used downward — to govern others, not himself. English feudalism was a two-way contract — lords could push back against the king. The two systems started from different roots, and centuries of growth pulled them in opposite directions. Inevitable.\n\n' +
        '**Another way: pure accident.** In the 1620s, an English legal scholar named Edward Coke had a fight with King Charles I. He reached back into history, pulled out Magna Carta, and *loaded it with constitutional meaning the 1215 document never originally carried*. Without that one act of reinterpretation, Magna Carta would probably be a museum piece too. This view doesn\'t believe in destiny — one choice, one moment, redirected history.\n\n' +
        '**A third way: the mechanism was different.** English *common law* (judge-made law built up from old cases) lets judges cite documents from centuries ago to solve today\'s problems. Each generation can reload Magna Carta. After the Tang Code, Chinese law moved toward "the ancestors\' rules cannot be changed" — new dynasties mostly inherited old codes, rarely reactivating them as weapons. When the mechanism is alive, the document stays alive. When the mechanism is frozen, even the best document collects dust.\n\n' +
        'Which explanation convinces you most? Or are all three partially right? Take thirty seconds.',
    },
    deliverGoal:
      '比 Magna Carta 早 564 年，唐《永徽律》651 年颁布（653 年加注疏成《唐律疏议》）。12 卷 502 条，管所有人，更系统。' +
      '但唐律没成现代法律源头。Magna Carta 1215 年只 63 条，只保护 25 baron，只在英国，' +
      '却变成全球宪政基础。同样的"成文法"，为什么走出**完全不同的命运**？',
    engagementHook:
      '**你怎么看**——文化决定？纯属偶然？还是机制不同（英国敢反复激活旧文件，中国把唐律供起来）？想 30 秒。',
    expectedLength: '180-220 字 + 真问题',
    expectsRealAnswer: true,
  },
  // ═════ Meta（反思 + 桥）═════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题',
    content: {
      cn:
        '你刚从 King John 内部走了一遍——他的失去、他的算计、他死前那张倒霉的清单。\n\n' +
        '放下这一遍之前，给我说一件事：\n\n' +
        '这次扮演里，哪个瞬间最让你停了一下？是他签字时手在抖、心里却在算账的反差？是他一辈子做什么都做不成，连"毁掉自己最丢脸的文件"都做不成？还是别的什么——一句话、一个画面，留在了你脑子里的那个。\n\n' +
        '一句话就好，不用展开。\n\n' +
        '说完，我们走最后一段：把今天演过的这些，变成你真正记得的——拼写、定义、应用题，一个一个过。',
      en:
        'You have just walked through King John from the inside — his losses, his calculations, the unlucky little list he kept on his deathbed.\n\n' +
        'Before you set this lens down, tell me one thing:\n\n' +
        'In this playthrough, what was the moment that made you pause? Was it the gap between his trembling hand on the seal and his calculating mind underneath? Was it that a man who failed at everything could not even manage to destroy his own most embarrassing document? Or was it something else — one sentence, one image, that stuck.\n\n' +
        'One line is enough. No need to explain.\n\n' +
        'Then we walk the last stretch together: turning what you just played into something you actually remember — spelling, definitions, application questions, one at a time.',
    },
    deliverGoal:
      '你扮演了 King John 8 节——经历了他的失去 + 残忍 + 屈辱 + 死——' +
      '现在你可以选：' +
      '(1) 进 mastery 通关 / ' +
      '(2) 换 lens 重玩——比如 Stephen Langton（起草人视角）或 Tom（农奴小孩视角）——' +
      '——同一事件不同角度——会发现新东西',
    engagementHook:
      '**这次扮演里——哪个瞬间最让你停了一下**？一句话告诉我就行——不用展开。',
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
    content: {
      cn:
        '1215 年 6 月 15 日，Runnymede 草地，早晨。\n\n' +
        '我叫 Stephen Langton，今年六十五岁，Canterbury 大主教，英国教会一把手。手里拿着一卷羊皮纸，是我和三个书记员连续五天改出来的。六十三条拉丁文，每个字我都数过。\n\n' +
        '我站在中间，左边是 King John，右边是二十五个贵族，个个披甲。草地踩下去全是泥水，泰晤士河上飘着晨雾。\n\n' +
        '我开始念第一条。念到第三十九条时，我停了一下——\n\n' +
        '*Nullus liber homo capiatur...* 任何 free man（自由人）不能被随便抓走……\n\n' +
        '我抬头。John 盯着羊皮纸，脸上没有表情。那不是接受，那是算计。贵族们看着他，手没离开剑柄。\n\n' +
        '念完六十三条，John 把青铜印模（重约一点五公斤，雕着他的纹章和拉丁文 SIGILLUM JOHANNES REX）压进红蜡。王室蜡封印落下，文件生效。\n\n' +
        '贵族们没欢呼。我也没有。\n\n' +
        '我只在心里问了一句：这张纸，能活几天？\n\n' +
        '我是 Stephen Langton。接下来你会跟着我，从 1207 年走到这一刻——看我怎么从一个流亡学者，变成这张改变西方法律的文件的起草人。',
      en:
        'Morning of June 15, 1215. Runnymede meadow, beside the Thames.\n\n' +
        'My name is Stephen Langton. I am sixty-five years old, Archbishop of Canterbury — the head of the Church in England. I am holding a rolled parchment: sixty-three clauses of Latin, every word revised by me and three scribes over five straight days.\n\n' +
        'I stand in the middle. To my left: King John. To my right: twenty-five barons in full armor, hands near their sword hilts. The ground is muddy. Morning mist drifts off the Thames.\n\n' +
        'I begin reading the first clause aloud. When I reach Clause 39, I pause —\n\n' +
        '*Nullus liber homo capiatur...* No free man shall be seized or imprisoned...\n\n' +
        'I look up. John is staring at the parchment. His face is empty — not of acceptance, but of calculation. The barons watch him. No one lets go of their sword.\n\n' +
        'I read through all sixty-three clauses. Then John presses the bronze seal die — about 1.5 kilograms, engraved with his coat of arms and the Latin words SIGILLUM JOHANNES REX (Seal of John the King) — into red wax. The Great Seal drops. The document is law.\n\n' +
        'The barons do not cheer. I do not either.\n\n' +
        'There is only one question in my mind: How long will this piece of parchment survive?\n\n' +
        'I am Stephen Langton. In the sections ahead you will walk with me from 1207 to this morning — and see how a scholar in exile became the man who drafted the document that changed Western law.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我为什么是夹在 King 和 baron 中间的人——倒回 1207 年',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'Stephen Langton',
    narrativeRef: '§3 Stephen Langton 出身',
    content: {
      cn:
        '我叫 Stephen Langton（斯蒂芬·朗顿）。1150 年前后出生在 Lincolnshire，英国中部一个普通家庭。没有贵族血统，没有土地，没有城堡。\n\n' +
        '十九岁那年我去巴黎大学——十二世纪欧洲的学术中心，神学家、法学家、医生挤在同一条街上争论。我在那里整整待了将近三十年。不是混日子，是真做学问：今天你打开任何版本的《圣经》，看到的那套**章**（chapter divisions）的划分，就是我在 1190 年代前后定的。（节 verses 的划分要等到 1551 年巴黎印刷商 Robert Estienne 才完成——这是后来的事。）\n\n' +
        '我还教 canon law（教会法 / Church law）。Lothario dei Conti——后来的教皇 Innocent III——也在那段时期的巴黎学术圈。我们是否真"同窗"，今天的史家仍在争（一手证据不足）。但他登上教皇位之后，记得我。\n\n' +
        '1207 年，他写信给我：Canterbury 大主教的位子空了，你来当。Canterbury 大主教是英国教会一把手，地位仅次于国王。\n\n' +
        '我不想去。巴黎是我的家。但教皇不是在问我的意见。\n\n' +
        '同年，King John 得知任命后，直接拒绝让我入境。他要自己的人当大主教。于是我被困在法国 Pontigny 修道院——坐在法国，看着海峡对岸的英国，看不到头。\n\n' +
        '这一等就是六年。英国为我一个人，陷进了一场宗教危机。',
      en:
        'My name is Stephen Langton. I was born around 1150, in Lincolnshire — central England, a plain family, no noble title, no land, no castle.\n\n' +
        'At nineteen I went to the University of Paris — the intellectual center of twelfth-century Europe. Theologians, canon lawyers, physicians all argued in the same streets. I stayed nearly thirty years. Not passing time — doing real scholarship. The chapter divisions in every Bible you open today are the ones I set, around the 1190s. (Verse divisions came much later — a Paris printer named Robert Estienne added those in 1551.)\n\n' +
        'I also taught canon law (教会法 / Church law). Lothario dei Conti — the man who would become Pope Innocent III — was in the Paris academic world during those years. Whether we were truly classmates, historians still debate. But once he was Pope, he remembered me.\n\n' +
        'In 1207, he wrote to me: the Archbishop of Canterbury seat was empty. He wanted me to fill it. Archbishop of Canterbury — head of the English Church, second in rank only to the King himself.\n\n' +
        'I did not want to go. Paris was my home. But the Pope was not asking.\n\n' +
        'When King John learned of the appointment, he refused to let me land in England. He wanted his own man in that seat. So I was stranded (stuck, unable to leave) at Pontigny Abbey in France — sitting on the French side of the Channel, watching England from a distance, with no way in.\n\n' +
        'The wait lasted six years. England, for the sake of one disputed appointment — mine — fell into a religious crisis.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '6 年我在远处看——King John 跟教皇撕——baron 越来越愤怒——你猜我 1213 年怎么回去',
    expectedLength: '170-210 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'Stephen Langton',
    narrativeRef: '§3 + §4 1213 回英国',
    content: {
      cn:
        '1208 年 3 月 23 日，教皇下了 Interdict（停教令）：全英国的教堂关门，婚礼停办，死人不能按教会仪式下葬，婴儿不能受洗。这道命令的导火索就是 John 拒绝让我回国。整个英国因为我一个人的任命，陷进宗教恐慌。\n\n' +
        '1209 年教皇又宣布对 John 个人绝罚 excommunication——按教会法，被绝罚的国王，臣民可以不效忠他。\n\n' +
        'John 硬扛了四年。1213 年 5 月 15 日，他在 Dover 跪下，把英格兰献给教皇做 papal fief（教皇封地，territory held under the Pope），每年付一千银马克贡。条件之一：接受我回国。\n\n' +
        '1213 年 7 月，我踏上 Canterbury 的土地，六十三岁。从 1207 年任命算起，整整六年没踏上这片土地。\n\n' +
        '我以为终于可以做事了。\n\n' +
        '但我一到就看清楚了：贵族们对 John 的愤怒已经不是抱怨，是绝望。他们在私下串联，在谈起兵。英国离内战只差一个借口。\n\n' +
        '内战对谁都是灾难。教会会被卷进去，普通百姓的庄园会烧掉，收成会没。我在巴黎读了三十年的书——我知道历史上处理这种局面只有一条路：把愤怒写成文件，把文件变成法律。',
      en:
        'In 1208, the Pope issued an Interdict — a religious shutdown across all of England. Churches closed. Weddings halted. The dead could not be buried with Church rites. Infants could not be baptized. The trigger for all of this was King John\'s refusal to let me enter England. The entire country was pushed into six years of religious panic over one man\'s appointment: mine.\n\n' +
        'In 1209, the Pope added excommunication against John personally. Under canon law, a king under excommunication loses the loyalty of his subjects.\n\n' +
        'John held out for four years. Then on May 15, 1213, he knelt at Dover. He surrendered England to the Pope as a papal fief (教皇封地 / territory held under the Pope), agreeing to pay 1,000 silver marks per year as tribute. One condition: allow me to return.\n\n' +
        'In July 1213, I stepped onto English soil at Canterbury. I was sixty-three years old. Six years since my appointment, six years without setting foot in this country.\n\n' +
        'I thought I could finally get to work.\n\n' +
        'But what I saw the moment I arrived made things clear: the barons\' anger toward John was no longer complaint — it was despair. They were meeting in private, talking about raising arms. England was one provocation away from civil war.\n\n' +
        'Civil war would be a disaster for everyone. The Church would be dragged in. Farmland would burn. Harvests would fail. I had spent thirty years in Paris reading history — I knew there was only one way to handle a moment like this: turn anger into a document, and turn the document into law.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '法律是什么——是限制 King——也保护 baron——也保护未来——你猜我会怎么写',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Stephen Langton',
    narrativeRef: '§4 1214 Bouvines + 1215 春',
    content: {
      cn:
        '1214 年 7 月 27 日，Bouvines 战役。John 精心筹备了四年的反法联盟，一战崩了。神圣罗马帝国皇帝 Otto IV 战败溃逃；John 的同父异母弟弟 William Longespée 被俘。John 退回英国，手里再没有重新夺回法国领地的筹码。\n\n' +
        '消息传到英国，贵族们等的时机到了。1215 年复活节后（4 月 19-26 日），四十多位北方贵族在 Stamford 集结。5 月 5 日，他们在 Brackley 正式向 John 发出 defiance（宣战书 / 撤回封建效忠的正式声明）——中世纪封建术语，意思是撤回 fealty（效忠誓 / loyalty oath to a feudal lord）。5 月 17 日，伦敦城门由市民从里面打开，迎接贵族军队进城。伦敦商人也恨 John 的苛税。\n\n' +
        'John 退到 Windsor 城堡，派人来找我。信里说得客气，意思只有一个：Stephen，你来做中间人。\n\n' +
        '我接了。不是帮 John，是因为内战对任何人都是灾难。\n\n' +
        '贵族那边给了我一份 Articles of the Barons（贵族诉求条款）——四十九条，写得乱，多数是封建技术细节：遗孀改嫁权、继承金额上限、森林狩猎权。我读完，知道这份东西不够。它只能保护 1215 年的贵族，不能保护任何人的未来。\n\n' +
        '我告诉他们：这四十九条，我来改写。改成法律语言。',
      en:
        'July 27, 1214. The Battle of Bouvines. The anti-French coalition John had spent four years building collapsed in a single afternoon. Holy Roman Emperor Otto IV was defeated and forced to flee. John\'s half-brother William Longespée was captured. John retreated to England. He had nothing left — no allies, no money. The French lands he lost ten years earlier were now beyond reach.\n\n' +
        'When the news reached England, the barons saw their moment. In late April 1215 (after Easter), more than forty northern barons gathered at Stamford. On May 5, at Brackley, they sent John a formal defiance (a written declaration of war, withdrawing feudal loyalty) — in medieval feudal terms, this meant withdrawing their fealty (loyalty oath to a feudal lord). On May 17, the gates of London were opened from the inside by the city\'s own merchants. London\'s traders hated John\'s taxes too.\n\n' +
        'John retreated to Windsor Castle and sent word to me. The message was politely worded. The meaning was plain: Stephen, be our intermediary.\n\n' +
        'I agreed. Not to help John — because civil war would be a disaster for everyone without exception.\n\n' +
        'The barons gave me their draft: Articles of the Barons — forty-nine clauses, written roughly, mostly feudal technical demands. Rights of widows to remarry. Caps on inheritance fees. Hunting rights in royal forests. I read through the whole thing. It was not enough. It could protect the barons of 1215. It could not protect anyone in the future.\n\n' +
        'I told them: give me these forty-nine clauses. I will rewrite them in legal language.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '63 条里——最关键的是第 39 条——我用了一个词——这个词 800 年后改变世界——你猜哪个词',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'Stephen Langton',
    narrativeRef: '§5 Clause 39 起草',
    content: {
      cn:
        '贵族那四十九条原文里，没有第三十九条。最后五天我和书记员定稿时，把它加了进去。\n\n' +
        '我不会说这一条只属于我——五天的起草室里有几个人。但我是少数受过 canon law（教会法）训练的人，也是写最终拉丁文版本的人之一（学界共识 Holt 1992：Clause 39 加入的方式让人怀疑 Stephen 的笔，但缺一手证据断言是孤证作者）。\n\n' +
        '贵族要的是具体保护：不要乱收钱，不要随便没收庄园。合理。但他们没有往更远想。我在巴黎读过 Henry I 的 Charter of Liberties（1100 年，一百一十五年前的旧文件，里面国王承诺不滥用权力）。我知道，保护今天二十五个贵族的条款，下一代国王可以用另一种借口绕开。\n\n' +
        '必须写一条能穿越时间的。\n\n' +
        '于是这一条写下来：\n\n' +
        '*Nullus liber homo capiatur...*\n\n' +
        '意思是：任何 free man（自由人）不能被随便逮捕、监禁或剥夺财产，除非经过他同辈的合法审判，或者按照国法。\n\n' +
        '关键词是"free man"——不是"baron"，不是"knight"。\n\n' +
        '1215 年的 free man 大概只有全英国人口的十分之一，主要是贵族和自由农民。但"free man"这个词，边界是活的。是谁，由未来决定。如果有一天农奴被解放，他们就成了 free man。如果有一天商人取得公民权，他们也是 free man。\n\n' +
        '我不敢说我们在 1215 年预见了八百年后。我只知道，写法律不应该只为今天写。',
      en:
        'Clause 39 was not in the original forty-nine articles the barons drafted. It was added during the final five days of revisions, in the small drafting room.\n\n' +
        'I will not claim it was mine alone — there were several of us in that room. But I was among the few trained in canon law (Church law), and one of the people who drafted the final Latin. (Modern historians, including J.C. Holt, see Langton\'s influence in Clause 39, but no single document proves I was the sole author.)\n\n' +
        'The barons wanted specific protections: no more arbitrary fines, no more seizure of estates without cause. Reasonable. But they were not thinking further ahead. During my years in Paris, I had studied Henry I\'s Charter of Liberties — a document from 1100, a hundred and fifteen years old, in which the King promised not to abuse his power. I knew that a clause protecting twenty-five barons today could be circumvented by the next king using a different excuse.\n\n' +
        'We needed a clause that could survive across time.\n\n' +
        'These six Latin words went down on parchment:\n\n' +
        '*Nullus liber homo capiatur...*\n\n' +
        'No free man shall be seized, imprisoned, or stripped of his possessions — except by the lawful judgment of his peers, or by the law of the land.\n\n' +
        'The key term was "free man" — not "baron," not "knight."\n\n' +
        'In 1215, free men were perhaps one tenth of England\'s population: mainly nobles and free farmers. But "free man" is an open category. Who counts as a free man is something each generation decides for itself. If serfs were ever freed, they would become free men. If merchants ever gained rights, they would be free men too. The boundary of the word was not sealed.\n\n' +
        'I will not claim we foresaw eight hundred years of history in 1215. I only knew that a law should never be written for today alone.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '6 月 15 日 Runnymede——我念这一条——King 听完皱眉——baron 听完点头——但我自己心里在想：这一刻能活几天',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },
  {
    id: 6,
    phase: 'story',
    cosplay: 'Stephen Langton',
    narrativeRef: '§4 7 月 → 1216 → 1297',
    content: {
      cn:
        '仪式结束后我没有庆祝。\n\n' +
        '我在 Runnymede 草地上站了很久，看着贵族们骑马散去，看着 John 的队伍回 Windsor。我手里还拿着那卷羊皮纸的副本，蜡封还是暖的。\n\n' +
        '我知道 John 不会认。一个人在胁迫下盖印，他在心里从来没有同意。我在他的眼睛里看到的，不是接受，是算账。\n\n' +
        '果然——六月底，他派密使出发去罗马，带着一封信给教皇 Innocent III。信里的逻辑精明：这份文件限制了他这个 vassal（封臣），也就等于限制了他的封建上位者教皇的权威。教皇会接吗？\n\n' +
        '教皇接了。1215 年 8 月 24 日，Innocent III 签发了一道 papal bull（教皇敕令——正式的教会决定）：Magna Carta 无效，永远无效。签这份文件的起草人我，也被暂停 archbishopric（大主教职位），理由是"支持反叛"。\n\n' +
        '我第二次流亡。这次去罗马上诉。\n\n' +
        '1216 年 10 月，John 死了。regent（摄政——替年幼国王代理国政的人）是 William Marshal，七十岁的老骑士。他做了一件我没想到的事——1216 年 11 月，他以九岁新王 Henry III 的名义，重新颁布 Magna Carta。他加了一句话：此乃国王恩赐。\n\n' +
        '这句话给文件穿上了合法外衣——不再是贵族逼出来的，是国王主动给的。\n\n' +
        '我在罗马听到这个消息时，沉默了很久。那张我改了五天的羊皮纸，活过了盖印它的国王，活过了废掉它的教皇。它还在。',
      en:
        'I did not celebrate when the ceremony ended.\n\n' +
        'I stood on the Runnymede meadow for a long time, watching the barons ride off, watching John\'s entourage head back toward Windsor Castle. I still held a copy of the parchment. The wax seal was still warm.\n\n' +
        'I knew John would not honor it. A man who seals a document under duress has never agreed in his heart. What I saw in his eyes was not acceptance. It was calculation.\n\n' +
        'As I expected — by late June, he dispatched a secret messenger to Rome, carrying a letter for Pope Innocent III. The argument was sharp: this document restrained him as a vassal (a feudal subordinate), which meant it also restrained the authority of his feudal superior, the Pope. Would the Pope allow that?\n\n' +
        'The Pope would not. On August 24, 1215, Innocent III issued a papal bull (a formal Church decree): Magna Carta was null and void — null and void forever. As for me, the man who had drafted it, my archbishopric (position as Archbishop) was suspended. The stated reason: supporting rebellion.\n\n' +
        'I went into exile a second time, this time to Rome to appeal.\n\n' +
        'In October 1216, John died. The regent (a temporary ruler for a child king) was William Marshal — a knight of seventy years. He did something I had not anticipated. In November 1216, in the name of the nine-year-old new King Henry III, Marshal reissued Magna Carta. He added a single line: this is granted as a gift from the King.\n\n' +
        'That line gave the document legal cover. It was no longer a charter forced out under threat — it became a charter the King had freely given.\n\n' +
        'When word reached me in Rome, I was quiet for a long time. The parchment I had revised for five days had outlived the king who sealed it, and outlived the pope who voided it. It was still there.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我 1228 年死，78 岁。活到看 charter 在 1217 + 1225 反复重发，但看不到 800 年后的 1789。',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },
  {
    id: 7,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§6 800 年回声',
    content: {
      cn:
        '现在我们离开 Stephen Langton 的视角，往后看。\n\n' +
        'Stephen 1228 年在 Slindon 的庄园里平静死去，七十八岁。他活着的时候，亲自主持了 1217 年和 1225 年两次 Magna Carta 重发。他看到文件在内战后站稳了脚。这是他最后的告慰。\n\n' +
        '他没看到的是——\n\n' +
        '1297 年，Edward I（爱德华一世）把 Magna Carta 写进英国 statute book（成文法令集），从此成为正式国法。\n\n' +
        '1628 年，英国《Petition of Right》（权利请愿书）引用 Clause 39。\n\n' +
        '1689 年，《Bill of Rights》（权利法案）再次引用。\n\n' +
        '1789 年，美国宪法第五修正案，其中 *due process of law*（正当法律程序）原则直接来自 Clause 39 的语言。"free man"这个词，到了 1868 年第十四修正案，变成了"no person"——任何人，不论出身。\n\n' +
        '1948 年，联合国《世界人权宣言》，再次回响 Clause 39 的核心原则。\n\n' +
        'Stephen 在那个帐篷里写下"free man"时，他在留一个开口。八百年里，每一代人都在用自己的方式把这个开口推得更宽。\n\n' +
        '他故意留的扩展空间，后人接住了。',
      en:
        'We now step out of Stephen Langton\'s perspective and look forward.\n\n' +
        'Stephen died peacefully in 1228 at his manor in Slindon, aged seventy-eight. While he was alive, he personally oversaw two reissues of Magna Carta — in 1217 and 1225. He watched the document survive a civil war and take hold. That was his final comfort.\n\n' +
        'What he did not live to see:\n\n' +
        '1297: King Edward I had Magna Carta written into England\'s official statute book — making it formal law of the realm.\n\n' +
        '1628: The English *Petition of Right* cited Clause 39 directly.\n\n' +
        '1689: The *Bill of Rights* cited it again.\n\n' +
        '1789: The Fifth Amendment to the United States Constitution — its guarantee of *due process of law* — drew its language from Clause 39. The "free man" Stephen wrote became "no person" in the Fourteenth Amendment of 1868. Any person. Regardless of origin.\n\n' +
        '1948: The United Nations *Universal Declaration of Human Rights* echoed the core principle of Clause 39 once more.\n\n' +
        'That night in a tent when Stephen wrote the words "free man" — he was leaving an opening. For eight hundred years, each generation pushed that opening a little wider.\n\n' +
        'The space he deliberately left, others caught.',
    },
    deliverGoal: '[fallback]',
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
    content: {
      cn:
        '你刚演完 Stephen Langton——一个流亡 7 年里读遍英国旧文件的学者，最后用 5 天把贵族的怒火写成了能穿越时间的法律语言。\n\n' +
        '他在 Clause 39 里选了"free man"，没选"baron"也没选"knight"。他后来自己说过一句：写法律，不应该只为今天写。\n\n' +
        '问题来了：他 1215 年真的预见到 800 年后吗？还是我们站在 21 世纪回头看，把今天的解读硬塞给他？\n\n' +
        '**一种说法：他确实有远见**。Stephen 在巴黎学过法律，也读过 Henry I 在 1100 年的 Charter of Liberties——他知道法律语言要能"活得比国王久"。"free man"这个词不是随手写的，是一个训练过的法学家的故意选择——他知道这个词的边界是活的，每一代人都能往里面填新的人。这是**有意留白**。\n\n' +
        '**另一种说法：后人的解读才是关键**。1215 年这个"free man"，在当时的法律意义上只覆盖 10-20% 的人——剩下绝大多数被排除。1628 年 Edward Coke 跟查理一世吵架，把 Magna Carta 翻出来当武器——给这个词塞进了 1215 年根本没有的宪政意义。1776 年杰斐逊借去美国，才让它跨过大西洋。Stephen 写的字是他写的——但这些字最后变成什么，是后人决定的。J.C. Holt 一句话说透：Magna Carta 的"伟大"是它后来变成的，不是它原本就是的。\n\n' +
        '两边都有真证据。你站哪边？还是两边都有一点对？想 30 秒。',
      en:
        'You have just played Stephen Langton — a scholar who spent seven years in exile reading old English documents, then in five days turned baronial fury into legal language built to outlive its century.\n\n' +
        'In Clause 39, he chose "free man." Not "baron." Not "knight." He once said: a law should never be written for today alone.\n\n' +
        'So here is the question. Did he genuinely foresee eight hundred years? Or are we — looking back from the 21st century — projecting our reading onto him?\n\n' +
        '**One view: he really did have foresight.** Stephen had studied law in Paris, and he had read Henry I\'s *Charter of Liberties* from 1100. He knew legal language had to outlive specific kings. Choosing "free man" over "baron" was not a random word from a trained legal scholar — it was *deliberate*. He understood the boundary of "free man" was open, and each generation could refill it with new people. **He left the door ajar on purpose.**\n\n' +
        '**The other view: later reinterpretation did the real work.** In 1215, "free man" (*liber homo*) covered only about 10–20 percent of the population — most people were excluded. In 1628, Edward Coke had a fight with King Charles I, pulled Magna Carta into the conflict, and *loaded the word with constitutional meaning the 1215 document never originally carried*. In 1776, Jefferson carried it across the Atlantic. The words were Stephen\'s. What those words became was decided by others. Historian J.C. Holt put it bluntly: Magna Carta\'s greatness is what it became, not what it originally was.\n\n' +
        'Both sides have real evidence. Which side do you lean toward — or do you think both have something right? Take thirty seconds.',
    },
    deliverGoal:
      '你刚扮演了 Stephen Langton——一个起草人——一个相信法律能比人活久的人——' +
      '他用"free man"这个抽象词——故意留了**未来可扩展的空间**——' +
      '1789 美国宪法把"free man"换成"no person"——保护全人类——' +
      '——这种"故意留白让后人填"的智慧——叫**living constitution**',
    engagementHook:
      '**你怎么看**——他 1215 年真有远见？还是后人重新解读才让他显得"有远见"？想 30 秒。',
    expectedLength: '180-220 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 9,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§6 Stephen 死 1228 + §10 800 年回声',
    content: {
      cn:
        '现在换个角度想想这事。\n\n' +
        'Stephen 死在 1228 年。他活到看见 Magna Carta 撑过了一场内战，被新国王亨利三世先后三次重新颁布——他大概觉得"这纸总算站稳了"。\n\n' +
        '但他绝对没料到，400 年后 Edward Coke 会拿它跟查理一世吵架；560 年后杰斐逊会借它写美国独立宣言；730 年后联合国会用它的语言写《世界人权宣言》。\n\n' +
        '如果你能给 1228 年临终前的 Stephen 寄一封信，告诉他这张纸 800 年后的下场——他会更**欣慰**，还是更**困惑**？\n\n' +
        '**一种说法：欣慰**。他故意选"free man"留下扩展空间，后人真的把这空间填满了。一个法学家最大的成就，就是法律语言比自己活得久——他赌赢了。临终前知道这个，应该是一种深深的、终于能闭眼的满足。\n\n' +
        '**另一种说法：困惑**。Stephen 1215 年想保护的，是英国贵族跟约翰王的具体契约关系。他从没想过"全人类的人权"——这是 18 世纪启蒙之后才有的概念。后人把他的字拉到了一个他根本没活在的世界。他可能会想：这还是我写的那个东西吗？\n\n' +
        '你会怎么给他写这封信？想 30 秒。',
      en:
        'Now shift to a different angle.\n\n' +
        'Stephen died in 1228. He lived long enough to watch Magna Carta survive a civil war, reissued three times by the new boy-king Henry III. He probably felt: *the document has finally settled in*.\n\n' +
        'But he never imagined: 400 years later, Edward Coke would pull it into a fight with King Charles I; 560 years later, Jefferson would borrow its language for the American Declaration of Independence; 730 years later, the United Nations would echo it in the *Universal Declaration of Human Rights*.\n\n' +
        'If you could send a letter back to Stephen on his deathbed in 1228, telling him what would become of his document over the next 800 years — would he feel **vindicated** (proven right), or **bewildered** (confused)?\n\n' +
        '**One view: vindicated.** He *deliberately* chose "free man" to leave room for expansion. Later generations actually filled that room. The greatest thing a legal scholar can hope for is for the language to outlive him — he bet right. Hearing this on his deathbed should bring a deep, final kind of peace.\n\n' +
        '**The other view: bewildered.** What Stephen wanted to protect in 1215 was a contract between English barons and one specific king. He never thought about "human rights for everyone" — that concept didn\'t arrive until the Enlightenment, five centuries later. Later generations pulled his words into a world he never lived in. He might wonder: *is this still the thing I wrote?*\n\n' +
        'How would you write that letter? Take thirty seconds.',
    },
    deliverGoal:
      '给 1228 年临终前的 Stephen 寄一封信——告诉他这纸 800 年后的下场——' +
      '一种说法：他会**欣慰**（赌赢了）——' +
      '一种说法：他会**困惑**（这还是我写的吗）——' +
      '你会怎么给他写——',
    engagementHook:
      '**你会怎么给 1228 年的 Stephen 写这封信**——他会更欣慰，还是更困惑？想 30 秒。',
    expectedLength: '200-260 字 + 真问题',
    expectsRealAnswer: true,
  },
  // ═════ Meta ═════
  {
    id: 10,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题',
    content: {
      cn:
        '你刚从 Stephen Langton 的视角走了一遍——一个巴黎学者被卷进英国宪政史，流亡 7 年，5 天起草了一份他自己都不知道能活多久的文件。\n\n' +
        '放下这一遍之前，给我说一件事：\n\n' +
        '这次扮演里，哪个瞬间最让你停了一下？是他流亡 7 年默默在修道院里翻 Henry I 的旧文件、把历史合法性提前备好？是他签字当天就知道约翰王会反悔，但还是把 63 条念完了？还是他死前以为故事结束了，没想到真正的故事 400 年后才开始？\n\n' +
        '一句话就行，不用展开。\n\n' +
        '说完，我们走最后一段：把今天演过的这些，变成你真正记得的——拼写、定义、应用题，一个一个过。',
      en:
        'You have just walked through Stephen Langton\'s perspective — a Paris scholar pulled into English constitutional history, seven years in exile, five days of drafting, a document whose lifespan he could not predict.\n\n' +
        'Before you set this lens down, tell me one thing:\n\n' +
        'In this playthrough, what was the moment that made you pause? Was it the seven years he spent in a monastery, quietly studying Henry I\'s old charter — preparing the historical legitimacy the barons would need before they knew they needed it? Was it the day of the ceremony, when he already knew John would break his word, and read all sixty-three clauses anyway? Or was it that he died believing the story was over, when the real story was still four hundred years from starting?\n\n' +
        'One line is enough. No need to explain.\n\n' +
        'Then we walk the last stretch together: turning what you just played into something you actually remember — spelling, definitions, application questions, one at a time.',
    },
    deliverGoal:
      '你扮演了 Stephen Langton 6 节——一个起草人的视角——' +
      '你也可以选 King John（暴君视角）或 Tom（农奴小孩视角）——' +
      '同一事件不同角度——会发现新东西',
    engagementHook:
      '**这次扮演里——哪个瞬间最让你停了一下**？一句话告诉我就行——不用展开。',
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
    content: {
      cn:
        '1215 年 6 月 15 日，我在河边放羊。\n\n' +
        '我叫 Tom，今年十三岁。我家住 Mowbray 庄园，靠近泰晤士河边一块叫 Runnymede 的草地。我从没离开过这片地方。我爸是农奴（villein），我也是，以后也会是。\n\n' +
        '那天早上，大军来了。先是马蹄声——很远就能听到，像打雷一样。然后是骑兵，穿铁衣的，排成队，一队接一队，从庄园北边的路过去。庄园里的狗都叫起来了。我妈把我弟弟拉进屋。\n\n' +
        '我没进去。我沿着河边跑，躲在一棵大树后面，往草地上看。\n\n' +
        '草地上搭了几张桌。一个穿好衣服的胖男人坐在那边，周围站着二十几个穿铁衣的人，手按着剑。还有一个穿大主教袍的，站在两边中间。桌上有张皮纸，有蜡，有印。他们在做什么，我看不懂。\n\n' +
        '我不识字。那张皮纸写了什么，我不知道。\n\n' +
        '三十年后，我才慢慢弄明白，那天草地上发生了一件事，后来影响了整个西方的法律。但那时候的我，只知道一件事：大军走了，羊还在，我还是要把它们赶回圈里。\n\n' +
        '我是 Tom。这是我的故事，也是 1215 年英格兰九成人的故事。',
      en:
        'June 15, 1215. I was out watching the sheep by the river.\n\n' +
        'My name is Tom. I am thirteen years old. My family lives on Mowbray manor, near a meadow along the Thames called Runnymede. I have never left this place. My father is a villein (a serf — a farmworker bound to the land who cannot leave), and I am one too, and I will always be one.\n\n' +
        'That morning, an army came. First came the sound of hooves — far away, like thunder. Then the horsemen: armored men, riding in long columns, one after another, moving north along the road past our manor. I had never seen so many armed men in my life. The dogs in the yard were all barking. My mother pulled my little brother inside.\n\n' +
        'I did not go inside. I ran along the riverbank and hid behind a big oak tree, looking out across the meadow.\n\n' +
        'On the grass, some tables had been set up. A heavy man in fine clothes sat on one side. About twenty armored men stood around him, hands on their sword hilts. A man in a wide archbishop\'s robe stood between the two groups. On the table there was a flat piece of skin, some wax, and a stamp. I did not understand what they were doing.\n\n' +
        'I cannot read. I did not know what was written on that piece of skin.\n\n' +
        'Thirty years later, I slowly came to understand what had happened on that meadow — something that would shape the laws of the whole Western world for centuries. But the boy hiding behind the oak tree knew only one thing: the army moved on, the sheep were still there, and I still had to bring them back to the pen before dark.\n\n' +
        'I am Tom. This is my story — and the story of nine out of every ten people in England in 1215.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我是 Tom——我是历史的"配角"——但配角看到的也是历史——倒回我的童年',
    expectedLength: '160-200 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'Tom（13 岁农奴男孩）',
    narrativeRef: '§3 Tom + 农奴 villein 制度',
    content: {
      cn:
        '我家世代是 Mowbray 庄园的农奴（villein）。我爸是农奴，我妈是农奴，我也是，我以后的儿子也会是。这不是选的，是生下来就定的。\n\n' +
        '农奴（serfdom，农奴制）是什么意思？就是你属于庄园，不能离开，不能去别的地方。我爸有一次说想去南边的集市，地主的管事直接说不行。没有为什么，就是不行。\n\n' +
        '我们的负担主要不是按收成分成，是按出工：每星期三天免费给地主干活——播种、收割、修栅栏、运东西。我们自己的地排在剩下的几天。除此之外还有十分之一交给教会，遇到红白事还要给地主交杂费。坏年景，自己那几天的活忙不过来，全家就饿。\n\n' +
        '我们不能识字。村里只有教堂的神父会读书写字。我爸跟我说，识字是绅士的事，不是我们的事。\n\n' +
        '我们也不能去告状。要是地主的管事打了人，我们能去哪里说？法庭那些东西，跟我们没关系。\n\n' +
        '1215 年，英格兰大概九成人是农奴，只有一成是 free man（自由人）。那张大家都在说的 charter（大宪章），里面写"free man"，那不是在说我们。\n\n' +
        '我们属于那九成。那张纸跟我们无关。',
      en:
        'My family has been villeins on Mowbray manor for as long as anyone can remember. My father is a villein, my mother is a villein, I am one too, and my children will be. You do not choose it. You are born into it.\n\n' +
        'Serfdom (the villein system — being bound to the land and the lord) means you belong to the manor. You cannot leave. My father once said he wanted to travel to a market in the south. The lord\'s steward said no. No reason given. Just no.\n\n' +
        'Our main burden is not a share of the harvest. It is labor service: three days a week of unpaid work for the lord — sowing, reaping, mending fences, hauling. Our own fields get squeezed into the remaining days. On top of that, one tenth of our own crop goes to the church, and the lord takes extra fees on every birth, marriage, and death. In a bad year, the work for our own land falls behind, and the family goes hungry.\n\n' +
        'We cannot read. In our village, only the priest at the church knows how to read and write. My father told me that reading is for gentry, not for us.\n\n' +
        'We also cannot take anyone to court. If the lord\'s steward strikes someone, where do we go? The courts and the law — those things are not for us.\n\n' +
        'In 1215, roughly nine out of ten people in England were villeins. Only one out of ten was a free man. That charter everyone is talking about — the one that says "no free man shall be seized" — it is not talking about us.\n\n' +
        'We are the nine out of ten. That piece of skin on the table at Runnymede had nothing to do with us.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '但 1215 年春——一件事让我家也不安——你猜是什么',
    expectedLength: '160-200 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'Tom（13 岁农奴男孩）',
    narrativeRef: '§4 1215 春 baron 起兵 + 农民眼中',
    content: {
      cn:
        '1215 年春天，我还是十二岁，过完生日才十三。那年庄园里不太平。\n\n' +
        '春耕前，国王的税官来了。不是找我们要税，是找 Mowbray 地主要。但地主要出钱，压力就往下压。那段时间地主管事的脸色难看，叫我们多干活少说话。\n\n' +
        '我爸有一天跟我说："王跟那些穿铁衣的大老爷（baron）要打起来了。他们说税太重，要带兵反国王。但你记住，不管谁赢，最后吃亏的是我们。大老爷打仗，粮食从哪来？从地里来，从我们手里来。"\n\n' +
        '五月，我听说贵族进了 London 城。我妈说："那不关我们的事。税还是得交，地还是得种。"\n\n' +
        '六月初，大军从庄园北边的路过去，往 Runnymede 方向。我跟着几个孩子偷偷跑去看。\n\n' +
        '草地上那个胖男人是国王，我后来才知道叫 King John。穿铁衣的是贵族。穿大主教袍的那个是大主教 Stephen Langton，我那时候不知道他叫什么名字。\n\n' +
        '我十三岁，我不懂他们在做什么。我只知道他们的马很多，铁衣很亮，桌上有张皮纸。',
      en:
        'In the spring of 1215, I was still twelve years old — I did not turn thirteen until later that year. The manor was unsettled that spring.\n\n' +
        'Before the planting season, the king\'s tax collectors came. They were not collecting from us — they came for the lord. But when the lord had to pay, the pressure came down on everyone below. The lord\'s steward went around with a dark face, telling us to work more and say less.\n\n' +
        'One day my father told me: "The king and the iron-armored men — the barons, the nobles — they are going to fight. The barons say the taxes are too heavy, and they are raising armies. But remember this: whoever wins, it is us who will pay. When lords go to war, where does the grain come from? From the fields. From our hands."\n\n' +
        'In May, I heard that the barons had entered London city. My mother said: "That is not our business. The taxes still have to be paid, the fields still have to be worked."\n\n' +
        'In early June, a great army passed along the road north of our manor, heading toward Runnymede. I ran with a few other children to look.\n\n' +
        'The heavy man in fine clothes out on the meadow was the king — I learned later his name was King John. The iron-armored men were the barons. The man in the archbishop\'s robe was Archbishop Stephen Langton, though I did not know his name then.\n\n' +
        'I was thirteen. I did not understand what they were doing. I only knew there were many horses, the armor was bright, and there was a piece of skin on the table.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我看到了画面——但我不懂——你猜我什么时候才懂',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Tom（13 岁农奴男孩）',
    narrativeRef: '§3 Tom 30 年后',
    content: {
      cn:
        '二十多年过去了。我三十五岁，已经不是农奴了。\n\n' +
        '我十五岁那年逃到了离庄园三十里外的一个集镇。中世纪有条规矩："住在自治市里满一年又一天的人，自动成为自由人"。我在镇上磨坊学徒，熬过那一年又一天。后来攒了钱，回村边买了块小地，自己开磨坊，磨村里和过往商人的粮。我的儿子今年六岁，正在外面追鸡。\n\n' +
        '有一天，一个路过的律师在我这里歇脚。聊到磨面价钱、近期收成，最后他随口提了一句：你知道 1215 年 Runnymede 那张纸吗？里面有第三十九条，Article 39——任何 free man（自由人）不能被随便抓走，不能被随便夺走财产，必须经过合法的审判。\n\n' +
        '我说，我知道那张纸。我那年十三岁，躲在树后面看他们签。但那条不保护我，那年我家还是农奴。\n\n' +
        '律师只是说了 Article 39 几个字，他没多想。他喝完水，付了铜板，骑马走了。\n\n' +
        '我一个人坐在磨坊里。心里一沉，半天没说出话。\n\n' +
        '我想起那个十三岁躲在树后的孩子。那时我以为那张纸跟我没一点关系。今天我突然意识到——我现在是 free man 了。我儿子也会是。如果有一天官府想抓他，那张二十二年前我看着盖印的纸，他可以拿出来。\n\n' +
        '那条没在 1215 年保护我家。但它在那里放着，二十二年。等到我从农奴变成自由人，等到我儿子在屋外追鸡——它才轮到我们。\n\n' +
        '我不知道这算好事还是坏事。我把那一句"任何 free man 不能被随便抓走"，翻来覆去想了一整个下午。',
      en:
        'Twenty-something years later. I was thirty-five, and I was no longer a villein.\n\n' +
        'When I was fifteen, I ran away to a market town about thirty miles from the manor. There was a medieval rule: "if a man lives in a chartered town for a year and a day, he becomes a free man." I worked as an apprentice at a town mill and got through that year and a day. Years later, with savings, I came back, bought a small plot near the village, and set up my own mill, grinding grain for the villagers and traveling merchants. My son is six years old now, chasing chickens out in the yard.\n\n' +
        'One day a traveling lawyer stopped at my mill to rest. We talked about flour prices, the recent harvest. At the end, he mentioned in passing: do you know about that piece of skin from Runnymede in 1215? Inside it there is Article 39 — no free man shall be seized or imprisoned or stripped of his property without lawful judgment.\n\n' +
        'I said, I know that document. I was thirteen years old that day. I hid behind a tree and watched them stamp it. But that clause did not protect us — my family were still villeins then.\n\n' +
        'The lawyer just said the words "Article 39" — he was not making a point. He drank his water, dropped a copper coin on the counter, and rode off.\n\n' +
        'I sat alone in the mill. Something tightened in my chest, and for a long while I could not say anything.\n\n' +
        'I thought of that thirteen-year-old hiding behind the oak. Back then, I had been certain that piece of skin had nothing to do with me. Today I suddenly understood — I am a free man now. My son will be too. If one day the authorities ever try to seize him, that piece of skin I watched them stamp twenty-two years ago — he can point to it.\n\n' +
        'That clause did not protect my family in 1215. But it sat there, for twenty-two years. Waiting until I went from villein to free man. Waiting until my son was outside chasing chickens. Only then did its turn come for us.\n\n' +
        'I do not know whether to call this a good thing or a bad thing. I sat there and thought about that one line — "no free man shall be seized" — again and again, for the rest of the afternoon.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '15 年前那个 13 岁的我躲在树后看大军——不懂——15 年后我懂了——你猜更后面的人怎么用这张纸',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§6 800 年回声 + 农奴解放',
    content: {
      cn:
        'Tom 活到了什么时候，没有人知道。他不识字，没有人给他写传记。\n\n' +
        '但他的子孙后来怎么样了，历史告诉了我们。\n\n' +
        '1348 年，黑死病（Black Death）席卷英格兰。每四个人里死掉将近两个。庄园里的农奴大量死亡，地里没人干活，地主突然发现自己需要农奴，比农奴需要他们还迫切。劳动力一下子值钱了。留下来的农奴开始敢开口要工钱，敢谈条件，敢往城里跑。\n\n' +
        '地主们想用旧规矩挡住这股浪，没有挡住。十四世纪末，越来越多的农奴要么买了自由身，要么直接逃进城里。到十五世纪，英格兰的农奴制（serfdom）基本自然消失了——不是靠一纸法令，是黑死病搅动了所有人的活路。\n\n' +
        '1381 年，瓦特·泰勒（Wat Tyler）带着农民在肯特郡起义，几万人进了 London。他们的诉求是：废除农奴制，把劳动义务换成现金租金。带头的人讲的不是 Magna Carta，而是约翰·鲍尔（John Ball）那句有名的话："亚当耕田、夏娃织布的时候，谁是绅士？"——意思是：本来人人平等，凭什么有贵族、有农奴？\n\n' +
        '起义被镇压。Wat Tyler 死了。\n\n' +
        '——这里要说清楚：Magna Carta 第三十九条**并不是 1381 年这场起义直接引用的武器**。Article 39 真正进入普通人话语，要等到 17 世纪英国法学家 Edward Coke 重新解读它的时候——那时已经是 400 年后。\n\n' +
        '历史的扩展是慢的。Tom 的后代慢慢成了自由人，靠的是黑死病、是城市、是约翰·鲍尔的话。Article 39 等他们等了好几百年，才轮到他们用。',
      en:
        'Nobody knows when Tom died. He could not read or write, and no one wrote his story down.\n\n' +
        'But history tells us what happened to his descendants.\n\n' +
        'In 1348, the Black Death swept through England. Nearly half the population died. The villeins on the manors died in enormous numbers. Suddenly the lords found that they needed workers far more than the workers needed them. Labor became valuable. The villeins who survived started to bargain — asking for wages, setting conditions, fleeing to the towns.\n\n' +
        'The lords tried to hold back the tide with the old rules. It did not work. By the late fourteenth century, more and more villeins had either bought their freedom or simply walked away. By the fifteenth century, serfdom (the villein system) had mostly disappeared from England — not through any single law, but because the Black Death had upended the way everyone made a living.\n\n' +
        'In 1381, Wat Tyler led a peasant revolt in Kent. Tens of thousands of people marched into London. Their demands were: end serfdom, replace forced labor with cash rent. The leading voice was not Magna Carta. It was the priest John Ball, with his famous question: "When Adam delved and Eve span, who was then the gentleman?" The point was simple: people were originally equal — why should there be lords and serfs?\n\n' +
        'The revolt was crushed. Wat Tyler was killed.\n\n' +
        'A note for accuracy: Article 39 of Magna Carta was **not** a weapon the 1381 rebels directly used. Article 39 only entered the ordinary person\'s vocabulary much later — in the 17th century, when the English jurist Edward Coke reread it and gave it a constitutional meaning. That was four hundred years after Runnymede.\n\n' +
        'History expands slowly. Tom\'s descendants did become free people — through the Black Death, through the towns, through John Ball\'s words. Article 39 waited centuries for them. Only then did its turn finally come.',
    },
    deliverGoal: '[fallback]',
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
    content: {
      cn:
        '你刚跟着 Tom 走了一遍——13 岁躲在树后看贵族跟国王谈判，什么也不懂，什么也没得到。\n\n' +
        '羊皮纸上的"free man"，1215 年不是他，不是他爸，也不是他儿子。\n\n' +
        '要等 200 年后黑死病杀掉半个英国、农奴用脚投票往城里跑——Article 39 的保护才慢慢轮到 Tom 的子孙。\n\n' +
        '那 1215 年的 Tom，应该**感谢** Magna Carta，还是**愤怒**？\n\n' +
        '**有理由感谢**：这张纸留了个法律的口子。它没说"永远只保护贵族"。Tom 子孙后来变成自由人的时候，Article 39 是在那儿等着他们的。一颗要等 200 年才发芽的种子，也是种子。\n\n' +
        '**有理由愤怒**：Tom 本人活不到 200 年后，他儿子也活不到。一张说"你的后代 200 年后可能被保护"的法律，对今天正在挨饿、正在被打、随时可能被地主处置的人来说，算什么保护？况且那个"扩展"也不是 Magna Carta 主动给的——是黑死病死了半个英国、是农奴自己用脚投票抢出来的。1215 年起草这张纸的贵族，根本没想 Tom。\n\n' +
        '你会感谢，还是愤怒？或者两边都有——比例怎么分？想 30 秒。',
      en:
        'You have just followed Tom through it — a thirteen-year-old hiding behind an oak tree while barons and a king negotiated something he could not read, and got nothing from.\n\n' +
        'The words "free man" on that parchment did not mean him, his father, or his son in 1215.\n\n' +
        'Two hundred years later, the Black Death arrived. Nearly half the population died. Labor became scarce. Villeins began voting with their feet, walking to the towns. Only then did Article 39\'s protection slowly reach Tom\'s descendants.\n\n' +
        'So the question: should Tom, in 1215, have been **grateful** to Magna Carta — or **furious**?\n\n' +
        '**Reason for gratitude:** Magna Carta left a legal opening. It did not say "protect nobles forever, and only nobles." When Tom\'s descendants became free men, Article 39 was waiting for them. A seed that takes two hundred years to grow is still a seed.\n\n' +
        '**Reason for fury:** Tom himself will not live two hundred years. Neither will his son. A law that says "your descendants *may* be protected two centuries from now" is not protection for someone being starved, beaten, or disposed of by a lord today. And the "expansion" was not something Magna Carta delivered voluntarily — the Black Death killed half the population, villeins walked away, the change was *forced*. The barons drafting Magna Carta in 1215 were not thinking about Tom at all.\n\n' +
        'Grateful or furious? Or some of both — and in what proportion? Take thirty seconds.',
    },
    deliverGoal:
      '你刚扮演了 Tom——一个 13 岁的 villein——一个**被 charter 排除**的人——' +
      '但**Tom 的 200 年后子孙**——慢慢被 charter 保护——' +
      '——这就是 Magna Carta 真实的"扩展机制"：' +
      '不是立刻——不是公平——是**慢慢扩展**——是**每一代抢一点**',
    engagementHook:
      '**你怎么看**——感谢，还是愤怒？或者两边都有——比例怎么分？想 30 秒。',
    expectedLength: '170-210 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 7,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 同代中国 + Tom 视角扩展',
    content: {
      cn:
        '1215 年，英格兰约 90% 的人是农奴或乡村劳动者。Tom 是其中之一。\n\n' +
        '同一年的南宋是另一种活法——没有西欧式农奴制。佃农有人身自由，自由民出身的儿子理论上可以读书考科举（虽然有身份门槛和层层筛选——"贱籍"、某些客户被禁应试，多数底层人也读不起书）。\n\n' +
        '更值得注意的是第三条路：宋代县乡有**乡约**（蓝田吕氏乡约 1076 年起）和**义庄**（范仲淹义田 1049 年起）——通过宗族和乡里互助给农村底层提供**集体保护**：饥荒救助、教育资助、纠纷调解。不是法律，是民间安全网。\n\n' +
        '英国走"法律慢慢扩展"，中国走"个人考试 + 民间互助"——两条路都有真实代价。\n\n' +
        '**英国路的代价**：Tom 本人和儿子 1215 年没有任何保护。地主今天打他，Magna Carta 管不到——那张纸是为未来写的，不是为今天的农奴写的。而且 200 年后那个扩展，是黑死病逼出来的，不是贵族主动给的。\n\n' +
        '**中国路的代价**：科举只给个人机会，不给集体保护。整个农民作为一个群体，没有法律机制约束皇权对他们的处置。乡约和义庄能管小范围互助，但管不了"整个国家怎么对待农民"这种系统问题——而且全是民间自治，没有强制力，遇到强势地主或贪官就挡不住。\n\n' +
        '如果你是 Tom——你宁愿活在 1215 英国，还是同代南宋？或者这两个都不够，你想要别的？想 30 秒。',
      en:
        'In 1215, about 90 percent of England\'s people were villeins or rural laborers. Tom was one of them.\n\n' +
        'The same year, in Southern Song China, farmers lived differently. There was no Western-style serfdom (a system binding people to the land without freedom to leave). Tenant farmers had personal freedom. In theory, the son of a free commoner could study and sit the imperial examinations (*keju*, a competitive civil service exam) — though significant status barriers applied. Certain "debased" categories (*jianji*: enslaved households, hereditary servants) were barred from sitting the exam, reaching the top required passing several elimination rounds, and most poor families could not afford the books and years of study.\n\n' +
        'Worth noting: there was a third path. Song-era counties and villages had ***xiangyue*** (community covenants — the Lü family covenant of 1076 was the most famous) and ***yizhuang*** (charitable estates — Fan Zhongyan\'s charitable land of 1049). Through clan and community mutual aid, these gave the rural poor **collective protection**: famine relief, education funds, dispute mediation. Not law — a folk safety net.\n\n' +
        'England\'s path: law expands slowly. China\'s path: individual exams plus community mutual aid. Both have real costs.\n\n' +
        '**The cost of the English path:** Tom and his son have no protection in 1215. If the lord strikes him today, Magna Carta cannot reach that — the law was written for the future, not today\'s villein. And the 200-year expansion came because the Black Death forced it, not because the barons chose to give it.\n\n' +
        '**The cost of the Chinese path:** The exams offered only individual opportunity, not collective protection. The whole farming population, as a group, had no legal mechanism to constrain how the emperor\'s system treated them. *Xiangyue* and *yizhuang* helped at small scale, but they could not constrain *how the state itself treated the farming population* — and they had no enforcement power. A strong landlord or corrupt official could simply ignore them.\n\n' +
        'If you were Tom — would you rather live in 1215 England, or in Southern Song China? Or are both insufficient — and what would you actually want? Take thirty seconds.',
    },
    deliverGoal:
      '同代南宋是另一种活法——没有西欧式农奴制——' +
      '南宋走"个人科举 + 民间互助"（乡约、义庄）——' +
      '英国走"法律慢慢扩展（200 年后才轮到 Tom 子孙）"——' +
      '两条路都有真实代价——你愿意活在哪条？',
    engagementHook:
      '**你怎么看**——1215 英国 vs 同代南宋，你愿意活在哪条路？还是两条都不够，你想要别的？想 30 秒。',
    expectedLength: '240-300 字 + 真问题',
    expectsRealAnswer: true,
  },
  // ═════ Meta ═════
  {
    id: 8,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题',
    content: {
      cn:
        '你刚从 Tom 的视角走了一遍——一个 13 岁的农奴男孩，不识字，看不懂草地上发生了什么，然后回去赶羊。历史书里没有他的名字。\n\n' +
        '放下这一遍之前，给我说一件事：\n\n' +
        '这次扮演里，哪个瞬间最让你停了一下？是那个 13 岁的孩子隔着树看着影响 800 年的事件，却只记得"铠甲很亮"？是 30 年后他在磨坊里听到"Article 39"三个字，才突然明白自己曾经目击过什么？还是 Magna Carta 真正轮到 Tom 这样的人，是因为黑死病死了一半人口，而不是贵族想给？\n\n' +
        '一句话就行，不用展开。\n\n' +
        '说完，我们走最后一段：把今天演过的这些，变成你真正记得的——拼写、定义、应用题，一个一个过。',
      en:
        'You have just walked through Tom\'s perspective — a thirteen-year-old villein who could not read, could not understand what was happening on the meadow, and went back to herd the sheep. His name is in no history book.\n\n' +
        'Before you set this lens down, tell me one thing:\n\n' +
        'In this playthrough, what was the moment that made you pause? Was it the thirteen-year-old boy watching an event that would shape eight hundred years of history from behind a tree — and all he remembered was that the armor was bright? Was it the moment thirty years later in a mill, when he heard the words "Article 39" and suddenly understood what he had witnessed? Or was it that Magna Carta only reached people like Tom because the Black Death killed half the population — not because the barons chose to give it?\n\n' +
        'One line is enough. No need to explain.\n\n' +
        'Then we walk the last stretch together: turning what you just played into something you actually remember — spelling, definitions, application questions, one at a time.',
    },
    deliverGoal:
      '你扮演了 Tom 4 节——一个被排除的人的视角——' +
      '你也可以选 King John（暴君视角）或 Stephen Langton（起草人视角）——' +
      '同一事件不同角度——会发现新东西——' +
      'Tom 的视角让你看到：**Magna Carta 不立刻保护所有人——但它播下种子——慢慢长**',
    engagementHook:
      '**这次扮演里——哪个瞬间最让你停了一下**？一句话告诉我就行——不用展开。',
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
