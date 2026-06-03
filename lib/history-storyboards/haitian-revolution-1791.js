// ─────────────────────────────────────────────────────────────────
// 海地革命 1791 — Haitian Revolution · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (AUTHORING_PIPELINE 第7条): 全程法国/海地/Kreyòl 真实术语
//   (Saint-Domingue/Le Cap/grand blanc/gens de couleur/Code Noir/Vodou/lambi),
//   绝不用中国特定词 (玉玺/龙袍/宰相/江山 等)。
// 3 lens / 11 nodes each / Rule 0 中性 / expectsRealAnswer 仅 N10+N11。
// 跨 lens micro-detail: lambi (海螺号) — 少年吹响/Toussaint 听成等待已久的信号/
//   种植园主听成黑暗里说不清来源的怪声。三视角各触一次,不互相点破。
// 跨 Topic 锚: field-worker N6 ↔ constitutional-convention mumBettLens (「生而自由」
//   1781 新英格兰 vs 1804 海地 / 1787 费城 3/5 vs 1804 废奴建国),双向呼应。
// ─────────────────────────────────────────────────────────────────

export var planterLens = {
  id: 'planter-actor',
  name: 'The Grand Blanc',
  nameCn: '大种植园主',
  role: 'perpetrator-actor',
  perspectiveTag: 'plantation-owner',
  icon: '⚜️',
  description: {
    cn: '加勒比海 Saint-Domingue 北部平原上的一个法国糖园主，属于 grand blanc（大白人）阶层，没有名字，因为他代表一整个阶层。他住通风的二层木屋，喝从波尔多运来的酒，账本上记着两百多个被奴役者的名字和价格。1789 年法国本土喊「人生而自由平等」，他要的只是少受巴黎管，绝不是放掉自己的财产。这一遍让你从一个施害者内部，看一套他以为天经地义的秩序，在他眼前烧成灰。',
    en: 'A French sugar-plantation owner on the Northern Plain of Saint-Domingue in the Caribbean, of the grand blanc ("big white") class, with no name, because he stands for a whole class. He lives in a breezy two-story wooden house, drinks wine shipped from Bordeaux, and keeps a ledger listing the names and prices of more than two hundred enslaved people. When France cried "men are born free and equal" in 1789, all he wanted was less control from Paris, never to let go of his own wealth. This pass lets you stand inside a perpetrator and watch an order he thought was natural burn to ash in front of him.',
  },
  storyboard: [
    {
      id: 'hai-planter-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1791 年 8 月一个夜里，加勒比海，Saint-Domingue（圣多曼格，今天的海地）北部平原。我站在二层木屋的阳台上，手里一杯波尔多运来的酒。\n\n外面是一望无际的甘蔗田，黑得发亮。空气又闷又湿，远处糖厂的大锅还在熬糖。这片地是全世界最赚钱的殖民地，而我，是这上面一座种植园的主人。\n\n我是个 grand blanc——「大白人」，法国来的大种植园主。我不告诉你我的名字，因为我不是某一个人，我是一整个阶层。这片平原上，几百个像我一样的人，过着一模一样的日子。\n\n这一遍，你坐进我这个位置。你会看见一套我从出生起就以为天经地义的秩序。你也会看见它在一夜之间，烧成灰。',
        en: 'A night in August 1791, the Caribbean, the Northern Plain of Saint-Domingue (today\'s Haiti). I stand on the balcony of my two-story wooden house, a glass of Bordeaux wine in my hand.\n\nOutside lie cane fields without end, black and glistening. The air is thick and wet, and far off the great pots of the sugar mill are still boiling. This land is the richest colony in the world, and I am the owner of one plantation on it.\n\nI am a grand blanc, a "big white," a great French planter. I will not tell you my name, because I am not one man. I am a whole class. On this plain, hundreds of men like me live exactly the same days.\n\nThis pass puts you in my seat. You will see an order I have thought natural since the day I was born. You will also watch it burn to ash in a single night.',
      },
      deliverGoal: 'N1 hook — 1791.8 夜 Saint-Domingue 北部平原 + grand blanc 自我介绍 (不给名字/代表一整个阶层/二层木屋/波尔多酒/最赚钱殖民地) + 这一遍视角 (天经地义的秩序一夜烧成灰)',
      engagementHook: '我代表的不是一个人，是一整个靠这套秩序发财的阶层。你愿意从一个施害者内部，看他的世界怎么塌吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-planter-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先看清我的财富是怎么来的。\n\n我的账本上，记着两百多个被奴役者的名字和价格——跟记牲口、记糖桶一样，记在同一本账上。糖价高，劳力可以买。被奴役者在田里砍甘蔗，砍到死，我再从非洲来的船上买新人补上。\n\n这是一套精确到残忍的算术：一个人能榨出多少糖、能撑几年、补一个新的要多少钱。我每天就在算这笔账。\n\n你可能想说我是个坏人。但请你先停一下——这片平原上几百个种植园主，全都这么干。在我们的世界里，这不叫残忍，这叫「正常生意」。\n\n而把「正常生意」这三个字写成法律的，是一份比我老得多的文件。',
        en: 'First, see clearly where my wealth comes from.\n\nIn my ledger I keep the names and prices of more than two hundred enslaved people, recorded in the same book as the cattle and the sugar barrels. Sugar prices are high. Labor can be bought. The enslaved cut cane in the fields until they die, and I buy new people off the ships from Africa to replace them.\n\nThis is a math so exact it is cruel: how much sugar one person can be squeezed for, how many years one will last, how much a replacement costs. Every day this is the ledger I run.\n\nYou may want to call me an evil man. But stop a moment first. Hundreds of planters on this plain all do exactly this. In our world, it is not called cruelty. It is called "normal business."\n\nAnd the thing that wrote those words, "normal business," into law is a document much older than I am.',
      },
      deliverGoal: 'N2 setup — 账本两百多被奴役者跟牲口记一起 + 精确到残忍的算术 (榨多少糖/撑几年/补人多少钱) + 不是个人特别坏，是整片平原都这么干 = 「正常生意」+ 引出 Code Noir',
      engagementHook: '在我的世界里这不叫残忍，叫「正常生意」。当一整个社会都这么做时，「正常」这两个字，是不是反而最危险？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-planter-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '那份文件，叫 Code Noir（黑法典）。\n\n它 1685 年由法国国王路易十四颁布，比我爷爷还老。它白纸黑字规定：被奴役者是主人的「动产」（biens meubles）——就是可以买卖的财产，跟一张桌子、一头牛一个法律类别。\n\n但它最阴的地方，不是赤裸的残忍。它一边把人定成财产，一边还假模假样规定：主人「有义务」给被奴役者衣食、不许随意杀害。\n\n你看懂这套把戏了吗？它用「法律」「秩序」，甚至一点点「保护」，把「把人当消耗品用」包装成了一桩体面、合法、有规矩的生意。\n\n所以我从来不觉得自己在犯罪。我手里有法律。我交税，我守规矩，我是个体面的法国绅士。Code Noir 让我能一边消耗人命，一边睡得安稳。',
        en: 'That document is called the Code Noir, the Black Code.\n\nKing Louis XIV of France issued it in 1685, older than my grandfather. It states in black and white that the enslaved are the owner\'s "movable property" (biens meubles) — property to be bought and sold, the same legal category as a table or an ox.\n\nBut its darkest part is not the open cruelty. It defines people as property. At the same time, it pretends to require that owners "have a duty" to give the enslaved food and clothing, and not to kill them at will.\n\nDo you see the trick? It uses "law," "order," and even a little "protection" to package "using people up" as a respectable, legal, orderly business.\n\nSo I never feel I am committing a crime. The law is in my hand. I pay my taxes, I follow the rules, I am a respectable French gentleman. The Code Noir lets me use up human lives and still sleep soundly.',
      },
      deliverGoal: 'N3 setup — Code Noir 1685 路易十四 + 被奴役者=动产 biens meubles (跟桌子牛同类别) + 最阴是用法律/秩序/一点保护把消耗人命包装成体面生意 + 「我有法律，我睡得安稳」',
      engagementHook: '一份法律让我一边消耗人命、一边觉得自己体面守法。当残忍被写进法律、变得「合规」时，它是变轻了，还是更可怕了？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-planter-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1789 年，海上来的船带来一个炸雷般的消息：法国本土革命了，巴黎喊出一句话——「人生而自由，权利平等。」\n\n你坐在二层木屋里，听着这句话，第一反应不是感动，是算计。\n\n你要的，是「自治」：少受巴黎那帮人管，殖民地的规矩自己定。这片地是你打理的，凭什么让几千里外的人对你指手画脚？\n\n但「自由平等」这四个字，你只想要其中对你有用的一半。岛上那些 gens de couleur（自由有色人）想要平等的公民权？你觉得放肆。田里那些被奴役者想要「自由」本身？你想都不敢想——那等于让你亲手烧掉自己的全部财产。\n\n所以你心里那句话其实是：自由是好东西——但只能是「我」的自由。这两件事，在你这儿分得清吗？',
        en: 'Now you are me.\n\nIn 1789 a ship from across the sea brought news like a thunderclap: France itself has had a revolution, and Paris has cried out a sentence — "men are born free and equal in rights."\n\nYou sit in your two-story wooden house, and hearing that sentence, your first reaction is not feeling. It is calculation.\n\nWhat you want is "self-rule": less control from those people in Paris, colonial rules made by yourselves. You run this land — why should men thousands of miles away point their fingers at you?\n\nBut those words "free and equal," you want only the half that is useful to you. The gens de couleur (free people of color) on the island want equal citizenship? You find it insolent. The enslaved in the fields want "freedom" itself? You dare not even imagine it — that would mean burning your entire fortune with your own hands.\n\nSo the sentence in your heart is really this: freedom is a fine thing, but only "my" freedom. On you, can those two things even be told apart?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1789 法国大革命「人生而自由平等」传到岛上 + 第一反应是算计不是感动 + 要 autonomy 不要 abolition (gens de couleur 平权=放肆/被奴役者自由=烧掉财产) + 自我拷问「自由只能是我的自由」',
      engagementHook: '同一句「自由平等」，我只想要对自己有用的那一半。你身边有没有人也是这样——支持「自由」，但只支持自己那部分？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-planter-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1789 到 1791，这两年岛上的空气越来越不对。\n\n那句「自由平等」，像火星掉进干草。它本不打算给殖民地的被奴役者——写它的巴黎人，脑子里的「人」根本不包括加勒比甘蔗田里的非洲人。可话一旦说出口，就拦不住了。\n\n我和同阶层的人忙着跟巴黎吵自治、跟 gens de couleur 争该不该给他们公民权。我们吵得很热闹。\n\n而我们脚下，那几十万被奴役的人（占全岛九成的人），我们几乎没把他们算进这场争论里。在我们眼里，他们是田、是糖、是账本上的数字，不是会「想要」什么的人。\n\n这是我最致命的盲点：我太习惯把他们当财产，以至于我从没认真想过，财产也会有自己的念头，也会在某个夜里，一起站起来。',
        en: 'From 1789 to 1791, over two years, the air on the island grew more and more wrong.\n\nThat sentence, "free and equal," was like a spark dropped into dry hay. It was never meant for the colony\'s enslaved — the Paris men who wrote it did not count the Africans of the Caribbean cane fields among "men." But once it was said, it could not be held back.\n\nI and my class were busy quarreling with Paris over self-rule, and arguing with the gens de couleur over whether they should get citizenship. We made a great deal of noise.\n\nAnd beneath our feet, those hundreds of thousands of enslaved people (nine in ten of everyone on the island), we barely counted them into the argument at all. To our eyes they were fields, sugar, numbers in a ledger, not people who could "want" anything.\n\nThis was my deadliest blind spot. I was so used to treating them as property that I never seriously imagined property could have a mind of its own, and could rise, all together, on some night.',
      },
      deliverGoal: 'N5 story — 1789-91 紧张升级 + 人权宣言本不给被奴役者 (巴黎人「人」不含加勒比非洲人) 但拦不住 + grands blancs 忙着争自治/跟 gens de couleur 争公民权 + 致命盲点: 太习惯把被奴役者当财产，没想过财产会有念头会站起来',
      engagementHook: '我太习惯把他们当账本上的数字，从没想过数字也会有念头。当你习惯了不把某些人当人，你会漏看什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-planter-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1791 年 8 月那个夜里。我记得每一个细节。\n\n那晚很闷，没有风。我在阳台上，酒还没喝完。\n\n然后我听见一个声音。从黑暗的甘蔗田深处传来，低、长、穿透力极强——不像人喊，不像鸟，不像任何我熟悉的东西。它一声接一声，从远处一座种植园，传到近处一座，像在黑夜里传递着什么。\n\n那是一支 lambi——海螺号。但那一刻我并不知道。我只觉得那声音让我后背发凉，说不清为什么。我喊管事来问，没人答得上来。\n\n几个小时后，我懂了。\n\n地平线上，一处、又一处、火光亮起来。甘蔗田烧了。糖厂烧了。火顺着风，朝我的木屋扑过来。那些我账本上的「财产」，正举着火把和砍甘蔗的 machete，朝这座屋子走来。\n\n那个我从没认真想过的问题，今夜替我回答了：财产，会站起来。',
        en: 'That night in August 1791. I remember every detail.\n\nThe night was close, without wind. I was on the balcony, my wine not yet finished.\n\nThen I heard a sound. It came from deep in the dark cane fields — low, long, and piercing. Not a human cry, not a bird, not anything I knew. It came again and again, passed from a far plantation to a near one, as if carrying something across the dark.\n\nIt was a lambi, a conch shell horn. But in that moment I did not know it. I only felt the sound run cold down my back, and could not say why. I called my steward to ask. No one could answer.\n\nA few hours later, I understood.\n\nOn the horizon, one point of fire, then another, lit up. The cane fields were burning. The sugar mill was burning. The fire came with the wind, rushing toward my wooden house. The "property" in my ledger was walking toward this house, holding torches and the machete that cut the cane.\n\nThe question I had never seriously asked was answered for me that night: property stands up.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1791.8 夜 lambi 海螺号 (planter 角度: 黑暗里说不清来源的怪声/后背发凉/喊管事没人答得上) 几小时后火起 (蔗田/糖厂/火扑木屋/举火把 machete 走来) + 「财产会站起来」。只碰 lambi 从他角度，不揭另两视角',
      engagementHook: '那声穿过黑夜的号声，我说不清是什么，只觉得后背发凉。有没有一种声音，等你听懂它的意思时，已经太晚了？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-planter-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那一夜之后的几天，整个北部平原都在烧。\n\n几千、继而几万被奴役者，举着火把和 machete，一座种植园接一座地烧过去。蔗田、糖厂、像我这样的人住的木屋，几天之内化成黑色的废墟。\n\n我那套精确的算术，那本记着两百多个名字和价格的账本，那个我以为永远不会变的秩序——在火里，什么都不剩。\n\n我想不明白。我给他们衣食（Code Noir 规定的那点），我没乱杀人，我是个守法的主人。为什么是我的屋子在烧？\n\n这就是我这种人到死都跨不过去的那道坎：我把「我没做得比别人更坏」当成了清白。我从没问过一个更根上的问题——这套让我「守法」的制度本身，是不是从地基上就错了？\n\n火光里，我没有答案。我只有惊恐：我熟悉的世界，正在不讲道理地，结束。',
        en: 'In the days after that night, the whole Northern Plain was burning.\n\nThousands, then tens of thousands of enslaved people, holding torches and the machete, burned through one plantation after another. Cane fields, sugar mills, the wooden houses where men like me lived — within days, all of it black ruin.\n\nMy exact arithmetic, my ledger of more than two hundred names and prices, the order I thought would never change — in the fire, nothing was left.\n\nI could not understand it. I gave them food and clothing (the little the Code Noir required). I did not kill at random. I was a law-abiding owner. Why was it my house burning?\n\nThis is the line men like me can never cross, even unto death: I took "I was no worse than the others" as my innocence. I never asked the deeper question — whether the very system that made me "law-abiding" was wrong from the foundation up.\n\nIn the firelight I had no answer. I had only terror: the world I knew was ending, and it would not listen to reason.',
      },
      deliverGoal: 'N7 story — 起义几天烧遍北部平原 (几万人/火把 machete/蔗田糖厂木屋成废墟) + planter 想不通「我守法为什么烧我」+ 跨不过的坎: 把「没做得比别人更坏」当清白，没问过制度本身是否从地基就错 + 惊恐: 熟悉的世界不讲道理地结束',
      engagementHook: '我一直觉得「我没比别人更坏」就等于清白。当一个人守着一套坏制度的规矩，他算不算无辜？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-planter-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你也许以为，火一烧起来，奴隶制就完了。没有。\n\n我们这些人没那么容易认输。我们逃到 Le Cap（法兰西角）那样有军队的港口城市，搬救兵，反扑。1791 年 11 月初（11 月 7 日），法军抓住起义早期一个叫 Boukman 的领袖，杀了他，把他的头颅挂出来公开示众——他们想用这个，打破被奴役者中间流传的「他刀枪不入」的传说。\n\n我当时甚至松了一口气：看，乱子压得住，秩序会回来。\n\n但我错了。火已经烧开，杀一个领袖压不住。\n\n这场仗，从那一夜烧起，整整打了十三年。法国、西班牙、英国三个帝国都想吃下这座最赚钱的岛，杀进杀出。而我们这些原来的主人，在这十三年里一点点失去一切——土地、奴隶、那套「正常生意」，最后连这座岛都不再属于我们。',
        en: 'You might think that once the fire was lit, slavery was finished. It was not.\n\nMen like us do not give up so easily. We fled to ports with troops, like Le Cap (Le Cap-Français), called for soldiers, and struck back. In November 1791 the French forces caught an early leader of the uprising named Boukman, killed him, and hung his head up for public display — they meant to break the legend, passed among the enslaved, that he was "unkillable."\n\nAt the time I even breathed easier: see, the trouble can be put down, order will return.\n\nBut I was wrong. The fire was already open, and killing one leader could not stop it.\n\nThis war, lit from that one night, dragged on for thirteen full years. Three empires (France, Spain, and Britain) all wanted to swallow this richest of islands, fighting in and out. And we, the former owners, lost everything over those thirteen years, piece by piece — land, the enslaved, that "normal business," and at last even the island itself, no longer ours.',
      },
      deliverGoal: 'N8 story — 主人不认输 (逃 Le Cap 搬救兵反扑) + 1791.11 Boukman 被杀头颅示众 (打破刀枪不入传说) + planter 松气以为秩序回来但错 + 仗打 13 年三帝国 (法/西/英) 混战 + 旧主人一点点失去一切 (土地/奴隶/正常生意/岛)',
      engagementHook: '领袖被杀、头颅示众，我以为秩序要回来了。但火已经烧开。一个想法一旦点燃了很多人，杀掉带头的人，还压得住吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-planter-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张更大的地图——一张我活着的时候根本看不懂的地图。\n\n1793 年，英国派了一支使团，跨过半个地球到清帝国求通商。那时的清朝正处在所谓盛世的顶点。可乾隆只回了一句「物产丰盈、无所不有」，就把他们婉拒了。\n\n那位远方的皇帝，和我，活在完全不同的世界里。但我们俩有一个一样的盲点：我们都没把绝大多数人，当成「完整的人」——他没把田里、城里的普通百姓算进朝廷的大事，我没把蔗田里那几十万人算进我的账本。我们都以为那套秩序会一直撑下去。\n\n区别只是：我脚下这套，1791 年那个夜里，被它排除的人，亲手掀翻了。',
        en: 'Let me step back and show you a larger map — a map I could not have read at all while I was alive.\n\nIn 1793 a British group crossed half the earth to the Qing empire to seek trade. The Qing was then at the peak of what was called a golden age. But the Qing emperor refused them with a single line: the empire "possessed all things in abundance" and needed nothing.\n\nThat distant emperor and I lived in entirely different worlds. But we shared one blind spot: neither of us counted most people as "full persons." He left the ordinary people of his fields and towns out of the court\'s great affairs; I left the hundreds of thousands in the cane fields out of my ledger. We both assumed that order would hold forever.\n\nThe only difference is this: the order beneath my feet, on that night in 1791, was overturned by the very people it had shut out, with their own hands.',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§8) — 1791 = 乾隆五十六年清朝盛世顶点/人口过三亿 + 1793 马戛尔尼使团被婉拒 (物产丰盈无所不有) + 清帝国对大西洋人权革命无感 + planter 与皇帝共同盲点 (把多数人排除在「完整的人」外/以为秩序永撑) + 区别: 我这套被排除者亲手掀翻',
      engagementHook: '我和那位远方的皇帝活在两个世界，却有同一个盲点：都没把多数人当「完整的人」。把同一年地球两端放一起看，你看见的是差距，还是两种相似的盲点？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-planter-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，该怎么评我？两种说法都站得住，你来称。\n\n一种说法：我不过是个守规矩的商人。我没发明 Code Noir，我出生时它已经在那儿一百多年。我交税、守法、按当时所有人都认的规矩经营。一个人随大流过日子，怎么能让他一个人扛起整个时代的罪？把我单独拎出来骂，是不是太轻巧了？\n\n另一种说法：「随大流」「守法」恰恰是这套制度最致命的零件。这台机器之所以能一年年消耗几十万条人命，靠的不是几个特别坏的恶魔，而是成千上万个像我这样「正常」「体面」「守法」的人，每天安心地翻动账本。我从不动手作恶，但我的安稳，正是建在别人的命被算成数字之上。\n\n这两边不是「他有错但情有可原」。是同一个我的两面——一个被时代裹着走的普通人，和一台靠无数普通人才能运转的暴力机器。\n\n这是一所学校里 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, how should I be judged? Both views stand. You do the weighing.\n\nOne view: I was only a businessman who followed the rules. I did not invent the Code Noir; it had stood for over a hundred years when I was born. I paid my taxes, obeyed the law, ran my estate by the rules everyone of my time accepted. How can one man who simply went with the current be made to carry the crime of a whole age? To single me out and curse me — is that not too easy?\n\nThe other view: "going with the current" and "obeying the law" are exactly this system\'s deadliest parts. This machine could consume hundreds of thousands of lives, year after year. It did not run on a few specially evil demons. It ran on thousands of "normal," "respectable," "law-abiding" men like me, calmly turning the ledger every day. I never did violence with my own hand — yet my ease was built on other people\'s lives counted as numbers.\n\nThese are not "he was wrong but understandable." They are two faces of the same me — an ordinary man carried along by his age, and a machine of violence that can only run on countless ordinary men.\n\nThis is the hard problem an AP teacher at a school will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (守规矩的商人/没发明 Code Noir/随大流/单拎出来骂太轻巧) / 另一种说法 (随大流守法恰是制度最致命零件/机器靠成千上万正常体面人运转/安稳建在别人命被算成数字上) / 同一个我两面 / neutral school name (AP 老师) / 想 30 秒 / 两边都站得住',
      engagementHook: '守规矩的普通商人，和暴力机器上的一颗零件——是同一个我。一个随大流的普通人，该不该为整个时代的罪负责？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'hai-planter-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是施害者这一边的声音。\n\n请记住：这只是一边。我讲的「正常生意」「我守法」「我没比别人更坏」，听起来甚至有点道理——这正是施害者视角最危险的地方，它能把自己讲得通。\n\n但这一遍里，有一群人从头到尾没开口：田里那个点火的少年——他为什么甘冒死也要拿起那把 machete？还有 Toussaint，一个被奴役者出身、后来写出一部废奴宪法、最后死在法国牢里的人——他会怎么讲我口中这场「暴乱」？等你换上他们的视角，他们会狠狠地挑战你刚才听我说的每一句。\n\n最后，留一个东西给你。还记得那个夜里，我在阳台上听见的、那声说不清来源、让我后背发凉的号声吗？\n\n换一个视角再走一遍，你会从另一个人的耳朵里，再听见它一次。到那时，它对你就不再是怪声了。',
        en: 'What you just heard was the voice of one side — the perpetrator\'s.\n\nRemember: it is only one side. My talk of "normal business," of "I obeyed the law," of "I was no worse than the others," can even sound a little reasonable — and that is exactly the most dangerous thing about a perpetrator\'s view. It can make itself make sense.\n\nBut in this pass, a group of people never spoke at all: the boy in the field who lit the fire — why would he risk death to pick up that machete? And Toussaint, a man born enslaved who later wrote a constitution abolishing slavery and died in a French prison — how would he tell this "riot" I have described? When you switch to their perspectives, they will challenge, hard, every sentence you just heard from me.\n\nAnd one last thing to leave with you. Do you remember the sound I heard from the balcony that night — the one I could not place, that ran cold down my back?\n\nWalk this through once more from another perspective, and you will hear it again, through someone else\'s ears. By then it will no longer be a strange sound to you.',
      },
      deliverGoal: 'N11 close/meta — 你听的是施害者一边 (能把自己讲得通最危险) + 还没听到: 田里点火少年 (为何冒死拿 machete) + Toussaint (废奴宪法/死在法国牢/会怎么讲这场暴乱) 会挑战你听的每句 + 暗示 lambi 号声会从另一视角再听见一次 (不直接解释 echo)',
      engagementHook: '施害者最危险的地方，是他能把自己讲得通。你听完我这一边，最想去问那个点火的少年、那个死在牢里的 Toussaint 什么问题？',
      expectsRealAnswer: true,
    },
  ],
};

export var toussaintLens = {
  id: 'toussaint-mediator',
  name: 'Toussaint Louverture',
  nameCn: '杜桑·卢维杜尔',
  role: 'lonely-mediator',
  perspectiveTag: 'between-three-empires',
  icon: '♟️',
  description: {
    cn: '约 1743 年生在 Bréda 种植园，被奴役出身，靠当马车夫和管事的差事偷偷学会了读书，1770 年代就被解放成了自由人。1791 年起义那夜，他已经四十多岁、早就自由，却选择走进这场被奴役者的革命。他真正的本事在战场和谈判桌上：十几年里，法国、西班牙、英国三个帝国为这座岛厮杀，他在三方之间反复纵横，谁承认自由就帮谁。这一遍让你站在所有人中间，看一个对谁都不完全是自己人的人，怎么用谈判和制度去抓一个所有人都能活的未来。',
    en: 'Born around 1743 on the Bréda plantation, enslaved, he taught himself to read while working as a coachman and steward, and was freed in the 1770s. On the night the uprising broke out in 1791 he was already in his late forties and long free, yet he chose to walk into this revolution of the enslaved. His real gift was on the battlefield and at the bargaining table: for over a decade, three empires, France, Spain, and Britain, fought over this island, and he moved between all three, helping whoever recognized freedom. This pass puts you in the middle of everyone, watching a man who was never fully "one of us" to any side try to seize, through talks and a constitution, a future where everyone could live.',
  },
  storyboard: [
    {
      id: 'hai-toussaint-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '所有人都在拼命的时候，有一个人不只在拼，还在算。\n\n1791 年那个起火的夜里，我四十多岁了。我不是田里的劳力。说出来你可能不信：我早就是个自由人。我本可以关上门，看着别人去烧、去打、去死。\n\n我没有。我走了进去。\n\n我是 Toussaint Louverture（杜桑·卢维杜尔）。十几年里，我做的事别人不太敢做：法国、西班牙、英国三个帝国为这座岛互相厮杀，我在他们三方中间反复来回——谁承认自由，我就帮谁；谁想把奴役搬回来，我就打谁。\n\n这一遍，你坐进我这个位置。你不站在任何一边，又好像欠每一边。你要在所有人都红了眼的时候，替一个所有人都能活下来的未来，下每一步棋。',
        en: 'When everyone else was fighting for their lives, one man was not only fighting. He was also calculating.\n\nOn the night of the fires in 1791 I was in my late forties. I was not field labor. You may not believe it: I had long been a free man. I could have shut my door and watched others burn, fight, and die.\n\nI did not. I walked in.\n\nI am Toussaint Louverture. For more than a decade I did what few others dared. Three empires, France, Spain, and Britain, were tearing this island apart, and I moved back and forth among all three. Whoever recognized freedom, I helped. Whoever wanted to drag slavery back, I fought.\n\nThis pass puts you in my seat. You stand on no one\'s side, yet you seem to owe every side. While everyone\'s eyes have gone red, you must move each piece for one future in which everyone can survive.',
      },
      deliverGoal: 'N1 hook — 1791 起火夜 Toussaint 四十多岁早是自由人却走进革命 + 三帝国之间反复纵横 (谁承认自由帮谁) + 这一遍视角设定 (不站任何一边却欠每一边/替所有人都能活的未来下棋)',
      engagementHook: '所有人都红了眼，只有一个人一边拼一边算。在所有人都选边的时候，你能不能不选边，只为「大家都能活」想办法？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-toussaint-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是谁，你才懂我为什么不只是个士兵。\n\n我约 1743 年生在北部一座叫 Bréda 的种植园，账本上的一笔财产。可我跟蔗田里大多数人不一样：我会驯马、懂牲口，主家就派我当马车夫、当管事。\n\n这份差事给了我一样东西，田里没有的——时间，和书。我偷偷学会了读字。一个被奴役的人识字，在当时几乎是不该发生的事。\n\n慢慢地，我攒下信任，1770 年代我被解放了，成了自由人。\n\n我得诚实告诉你一件不好听的事：自由之后，我一度租过地，甚至自己拥有过几个被奴役的人。\n\n我不替自己洗白。我要你从一开始就知道：我不是一个干干净净走出来的英雄。我是从这套制度里面爬出来、手上也沾过这套制度的人。正因为这样，1791 年我比谁都清楚——它有多深，也有多该烧掉。',
        en: 'First, who I am, so you understand why I am more than a soldier.\n\nI was born around 1743 on a northern plantation called Bréda, one entry of property in the ledger. But I was unlike most in the cane fields. I was good with horses and animals, so the household made me a coachman and a steward.\n\nThat work gave me something the fields did not: time, and books. I taught myself, in secret, to read. For an enslaved person to read was, in those days, a thing that was almost not allowed to happen.\n\nSlowly I gathered trust, and in the 1770s I was freed. I became a free man.\n\nI have to tell you something not pleasant to hear. After my freedom, for a time I rented land, and I even owned a few enslaved people myself.\n\nI will not wash myself clean. I want you to know from the start: I am not a hero who walked out spotless. I am a man who climbed out from inside this system, and whose own hands once touched it. That is exactly why, in 1791, I knew better than anyone how deep it ran, and how much it deserved to burn.',
      },
      deliverGoal: 'N2 setup — c.1743 生 Bréda 种植园被奴役 + 马车夫/管事差事 → 偷学识字 (被奴役者识字几乎不该发生) + 1770s 被解放成自由人 + 复杂面: 自由后租地/拥有过少数被奴役者 (不回避不洗白) + 「从制度里爬出来手也沾过」',
      engagementHook: '一个被奴役者识字、后来还自己拥有过被奴役的人——我不是干净走出来的英雄。一个手上也沾过的人去反抗这套制度，你更信他，还是更不信他？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-toussaint-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '要懂我后来为什么那样下棋，得先看清这盘棋有多乱。\n\n1789 年，法国本土爆发大革命，喊出一句话：「人生而自由、权利平等。」这句话漂过大西洋，落在我们这座岛上，像火星落进干柴。\n\n问题是，同一句话，岛上每一群人听见的意思都不一样，而且互相打架：\n\n大种植园主（grand blanc，大白人）听见的是「我们要自治」——少受巴黎管，但绝不放奴隶。\n\n自由有色人（gens de couleur，混血、法律上自由的一群）听见的是「我们要平等的公民权」——可他们里有人自己也蓄奴。\n\n而占全岛九成、约五十万的被奴役者听见的是「自由」两个字本身。\n\n你看出来了吗？这不是「好人对坏人」。这是四群人，每一群都拿着同一句「自由」，指着完全相反的方向。\n\n我要在这四股力量中间，找一条所有人都能活下去的路。',
        en: 'To understand why I later played the game as I did, you must first see how tangled the board was.\n\nIn 1789, revolution erupted in France itself, with one cry: "men are born free and equal in rights." That sentence drifted across the Atlantic and landed on our island like a spark in dry brush.\n\nThe trouble was, the same sentence meant something different to every group, and the meanings fought each other.\n\nThe big plantation owners (grand blanc, the "big whites") heard "we want self-rule," less control from Paris, but never freedom for the enslaved.\n\nThe free people of color (gens de couleur, of mixed ancestry and free under the law) heard "we want equal citizenship," yet some of them owned enslaved people too.\n\nAnd the enslaved, about 500,000, nine in ten people on the island, heard the word "freedom" itself.\n\nDo you see it? This is not "good people against bad people." It is four groups, each holding the same sentence about "freedom" and pointing it in completely opposite directions.\n\nMy task was to find, among these four forces, one road on which everyone could go on living.',
      },
      deliverGoal: 'N3 setup — 1789《人权宣言》「人生而自由平等」漂过大西洋点燃全岛 + 同一句话四群人相反诉求 (grand blanc 要自治不放奴 / gens de couleur 要平等公民权有人也蓄奴 / 约 50 万被奴役者要自由本身) + 「不是好人对坏人是四群人指同一句话相反方向」+ 跨 enlightenment 锚',
      engagementHook: '同一句「自由」，岛上四群人指向完全相反的方向，每一群都觉得自己对。当大家用的是同一个词、要的却是相反的东西，你怎么找一条共存的路？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-toussaint-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n起义烧起来了。北部平原一夜成火海，种植园主在逃，蔗田在烧。被奴役的人第一次拿起 machete（砍刀）和火把，站了起来。\n\n可你心里有一个别人来不及想的问题：火能烧掉一座岛，烧不出一个未来。烧完之后呢？谁来打仗？谁来谈判？谁来防着那三个在外面盯着这座岛的帝国？\n\n你不是只会冲锋的人。你看的是整盘棋。\n\n你做的第一件事，不是喊得最响，是把一群愤怒的人，练成一支真正能打、能服从命令、能进退的军队。你教他们：不是见人就杀，是该打的时候打、该停的时候停。\n\n这一刻你得想清楚：愤怒能点火，但只有纪律能赢。\n\n你愿意做那个泼冷水的人吗——在所有人都想立刻报仇的时候，按住他们，告诉他们「再等一步」？',
        en: 'Now you are me.\n\nThe uprising has caught fire. The Northern Plain is a sea of flame in one night. The owners flee, the cane burns. For the first time the enslaved have picked up the machete (the cane knife) and the torch, and stood up.\n\nBut a question turns in you that others have no time to ask: fire can burn down an island, but it cannot burn a future into being. After the burning, then what? Who fights the war? Who negotiates? Who guards against the three empires watching this island from outside?\n\nYou are not a man who only charges. You see the whole board.\n\nThe first thing you do is not to shout loudest. It is to drill a crowd of angry people into a real army, one that can fight, obey orders, advance and pull back. You teach them: not to kill everyone in sight, but to strike when it is time to strike and stop when it is time to stop.\n\nHere you must see it clearly: anger can light the fire, but only discipline can win.\n\nAre you willing to be the one who throws cold water, when everyone wants revenge at once, to hold them back and say, "wait one more step"?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 起义火海 machete + 火把 + Toussaint 的差别: 火烧不出未来要想烧完之后谁打仗谁谈判防三帝国 + 把愤怒的人练成真军队 (有纪律/该打打该停停) + 「愤怒能点火只有纪律能赢」+ 你愿不愿做泼冷水按住报仇的人',
      engagementHook: '所有人都想立刻报仇，你却按住他们说「再等一步」。在大家最想痛快的时候踩刹车——这是软弱，还是更难的勇敢？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-toussaint-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '军队练起来了，可一个更难的问题压上来：我们打谁，为谁打？\n\n这就是我这盘棋最像棋的地方。三个帝国都想吃下这座岛——\n\n法国，是岛原来的主人，但 1791 年的法国还没废奴，还在犹豫。\n\n西班牙，控制着岛的另一半，对我们这些起义者递来武器和军衔——他们想用我们去捅法国一刀。\n\n英国，海上最强，也在旁边等着捡便宜。\n\n起义初期，我做了一个让很多人后来骂我的决定：我先投了西班牙。为什么？因为那时候西班牙肯给我们武器、肯认我们是兵——而法国还在装看不见。\n\n我心里只有一把尺：谁，此刻，最能让「自由」往前走一步，我就站谁那边。\n\n这不是没有立场。这是我唯一的立场——不效忠任何一面旗，只效忠「不再有人被锁回去」这一件事。剩下的，都是棋子，包括我自己。',
        en: 'The army was taking shape, but a harder question pressed down: whom do we fight, and for whom?\n\nThis is where my game most resembles a game of chess. All three empires wanted to swallow the island.\n\nFrance was the island\'s old master, but in 1791 France had not yet abolished slavery. It was still hesitating.\n\nSpain controlled the other half of the island and held out weapons and ranks to us rebels. Spain wanted to use us to strike at France.\n\nBritain, strongest at sea, waited nearby to pick up the spoils.\n\nEarly in the uprising I made a choice that many later cursed me for: I joined Spain first. Why? Because at that moment Spain would give us weapons and call us soldiers, while France still pretended not to see us.\n\nI carried only one measure: whoever, at this moment, could move "freedom" one step forward, that was the side I stood on.\n\nThis is not having no position. It is my only position, to be loyal to no flag, only to one thing: that no one be locked back again. Everything else was a chess piece, myself included.',
      },
      deliverGoal: 'N5 story — 三帝国争岛 (法国旧主未废奴还犹豫 / 西班牙给武器军衔想借刀捅法 / 英国海上最强等捡便宜) + Toussaint 起义初先投西班牙 (因西班牙肯给武器认兵法国装看不见) + 唯一一把尺「谁此刻最能让自由前进一步就站谁那边」+ 「不效忠任何旗只效忠不再有人被锁回去/剩下都是棋子包括自己」',
      engagementHook: '我换边换得让很多人骂我「没立场」。可我心里只认一件事——谁能让「自由」往前一步。为了一个真正的目标不停换边，这算没立场，还是最坚定的立场？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-toussaint-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '回到起火的那一夜。我想让你听见，那一夜在我这边是什么。\n\n种植园主在黑暗里听见一声怪响，吓得不知道是什么。可那声音落在我耳朵里，是另一回事。\n\n那是 lambi——海螺号。把一只大海螺凿穿，用嘴一吹，号声低沉、能传很远，一座种植园接一座种植园，越过整片黑夜的蔗田。\n\n（这一段是 lens 让你听见。史料不会逐字记下我心里那一刻在想什么，但坐在我这个位置，你大概能猜到。）\n\n那声号，对我不是惊吓，是信号。是我等了很久的那个信号：开始了。\n\n等的人和怕的人，听见的是同一声号，心里却是两个世界。怕的人听见末日；等的人听见的，是终于轮到我们出手的那一刻。\n\n那一夜之后，我知道路只剩一条：往前。退回去，就是退回账本，退回锁链。这声号一响，就再也收不回去了。',
        en: 'Back to the night of the fires. I want you to hear what that night was, on my side.\n\nThe owner heard a strange sound in the dark and was terrified, not knowing what it was. But that sound, falling on my ear, was another thing entirely.\n\nIt was the lambi, a conch-shell horn. You bore a hole through a great sea shell, blow into it with your mouth, and the note comes low and carries far, from one plantation to the next, across the whole dark plain of cane.\n\n(This part is the pass letting you hear it. The record does not write down, word for word, what was turning in my mind that moment. But sitting in my seat, you can guess.)\n\nThat horn, to me, was no fright. It was a signal. It was the signal I had waited a long time for: it has begun.\n\nThe one who waits and the one who fears hear the same horn, yet live in two different worlds in that instant. The one who fears hears the end of the world. The one who waits hears the moment it is finally our turn to move.\n\nAfter that night, I knew only one road was left: forward. To go back was to go back to the ledger, back to the chains. Once that horn sounded, it could never be called back.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — lambi 海螺号从 Toussaint 角度 = 他等了很久的信号「开始了」(种植园主听成惊吓他听成信号) + anti-fab 框架 (lens 让你听见/史料不逐字记心里) + 「等的人和怕的人同一声号两个世界」+ 这声号一响收不回去只剩往前',
      engagementHook: '同一声号，怕的人听见末日，等的人听见「终于轮到我们」。同一件事，为什么落在不同的人耳朵里，意思能完全相反？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-toussaint-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1794 年 2 月，转折来了。\n\n法国国民公会终于宣布：废除全帝国的奴隶制。白纸黑字，全废。\n\n你知道这对我意味着什么吗？多年来我一直在等一面肯写下「自由」两个字的旗。现在法国写下了。\n\n所以我做了一个大转身：从西班牙那边，转过来为法国而战。很多人又不懂——你不是刚帮西班牙打法国吗？\n\n可在我那把尺上，这再一致不过：西班牙没废奴，法国废了。谁认自由，我就帮谁。旗换了，尺没换。\n\n接下来几年，我成了岛上最强的力量。我替法国把英国人赶下海、把西班牙压回去，一步步把整座岛攥进手里。\n\n到这里，我已经不只是个将领了。我开始想一件更大的事：仗总会打完，打完之后，得有一套规矩，让自由不再靠某一个人的剑撑着，而是写进制度里，谁也拿不走。',
        en: 'In February 1794, the turn came.\n\nThe French National Convention at last declared: slavery abolished across the whole empire. In black and white, all of it.\n\nDo you know what that meant to me? For years I had waited for a flag willing to write the word "freedom" down. Now France had written it.\n\nSo I made a great turn: from Spain\'s side, I came over to fight for France. Many again did not understand. Were you not just helping Spain fight France?\n\nBut on my measure, nothing was more consistent. Spain had not abolished slavery; France had. Whoever recognizes freedom, I help. The flag changed; the measure did not.\n\nIn the years that followed I became the strongest force on the island. For France I drove the British into the sea and pushed Spain back, and step by step I gathered the whole island into my hand.\n\nBy now I was no longer only a general. I began to think of something larger: the war will end someday, and after it ends there must be a set of rules, so that freedom no longer rests on one man\'s sword, but is written into the institution, where no one can take it away.',
      },
      deliverGoal: 'N7 story — 1794.2 法国国民公会宣布全帝国废奴 (白纸黑字) + Toussaint 大转身从西班牙转为法国而战 (西班牙没废奴法国废了/旗换尺没换) + 成岛上最强力量赶英国压西班牙攥住整岛 + 开始想更大的事: 让自由不靠一个人的剑而写进制度谁也拿不走',
      engagementHook: '法国一写下「废奴」，我就掉头帮它。我想的是：自由不能永远靠一个人的剑撑着，得写进规矩里。「靠一个英雄」和「靠一套制度」，你觉得哪个更靠得住？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-toussaint-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1801 年，我做了一件被奴役者出身的人几乎不可能做的事：我颁布了一部宪法。\n\n这部宪法写了三条最重要的：第一，这片土地上，永远废除奴隶制，谁都不许再有奴隶。第二，所有人生而自由，是公民。第三，由我，终身执政。\n\n你品一下这件事的重量：一个曾经的「财产」，亲手写下一部根本大法，规定这里再不许有「财产」。这在人类历史上，几乎没有先例。\n\n但你也该看见这一步里我的赌注。我把自己写成终身执政者——有人说这是我在抓权。也有人说，对一个生来就是「财产」的人，把「永久废奴」和「我终身执政」一起写进宪法，是想把好不容易换来的自由焊死、不让任何人有机会把它翻回去，不是为了我自己贪权。还有更要命的一条小心思：这部宪法名义上，还让这座岛属于法国。\n\n我为什么不干脆宣布彻底独立？因为我赌：只要还挂着法国这面旗，拿破仑就没有翻脸的借口，我就能保住这来之不易的自由。\n\n这一层小心翼翼，你先记住。它后来，正是要了我命的那道缝。',
        en: 'In 1801 I did a thing almost impossible for a man born enslaved: I issued a constitution.\n\nThree of its clauses mattered most. First, on this land, slavery is abolished forever; no one may ever hold a slave again. Second, all people are born free and are citizens. Third, I would govern for life.\n\nWeigh what this means: a former "piece of property" wrote, with his own hand, a foundational law declaring that here there would never again be "property." In human history there is almost no precedent.\n\nBut you should also see my gamble in this step. I wrote myself in as ruler for life; some say this was me grabbing power. Others say that for a man born as "property," writing "abolition forever" and "I govern for life" into the constitution together was a way to weld this hard-won freedom shut, so no one could ever turn it back, not a grab for myself. And there was a more dangerous small calculation: this constitution, on paper, still left the island belonging to France.\n\nWhy did I not simply declare full independence? Because I gambled: as long as the French flag still hung there, Napoleon would have no excuse to turn on us, and I could hold on to this hard-won freedom.\n\nKeep that carefulness in mind. It was, later, the very crack that cost me my life.',
      },
      deliverGoal: 'N8 story — 1801 Toussaint 宪法 (永久废奴/所有人生而自由是公民/本人终身执政) + 重量: 曾经的「财产」写根本大法规定这里再无财产 + 赌注/争议 (终身执政被说抓权 + 名义仍属法国) + 为何不彻底独立 (赌只要挂法国旗拿破仑没翻脸借口) + 「这层小心翼翼后来正是要命的缝」',
      engagementHook: '我没敢彻底独立，留了「名义上还属法国」这条缝——我赌这样最安全。把最后一道门虚掩着、不彻底关死，是聪明的留余地，还是埋下的祸根？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-toussaint-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我算漏了一个人：拿破仑。\n\n1802 年，他派来妹夫 Leclerc（勒克莱尔），带着两万多大军，登陆这座岛。表面上说是来「重新安排殖民地」，真正的目的，是把奴隶制搬回来。\n\n我抵抗了一阵。然后，我做了我一生最后一个判断——也许是最错的一个：我同意坐下来谈。我太信谈判桌了。我一辈子靠它活下来，这一次，它成了陷阱。\n\n谈着谈着，我被诱骗、被逮捕。1802 年 6 月，我被押上一艘叫 Le Héros（英雄号）的船，运往法国——运往我最信的那个帝国。\n\n船把我送进阿尔卑斯山里一座阴冷的要塞，Fort de Joux（茹堡）。一个加勒比热岛上长大的人，被关进欧洲雪山的石头牢里。\n\n1803 年 4 月 7 日，我在那间牢房里病死。约六十岁。我没等到独立——它要到第二年，1804 年 1 月，才由我的副手们打出来。\n\n我这一生最信法国，最后，死在法国的牢里。',
        en: 'I had misjudged one man: Napoleon.\n\nIn 1802 he sent his brother-in-law Leclerc with more than 20,000 troops, who landed on the island. On the surface it was to "rearrange the colony." The true aim was to bring slavery back.\n\nI resisted for a while. Then I made the last judgment of my life, perhaps the most wrong: I agreed to sit down and talk. I trusted the bargaining table too much. My whole life I had survived by it; this once, it became the trap.\n\nAs we talked, I was lured and arrested. In June 1802 I was put aboard a ship called Le Héros and shipped to France, to the empire I trusted most.\n\nThe ship carried me into a cold fortress in the Alps, Fort de Joux. A man raised on a hot Caribbean island, locked in a stone cell in the European snow mountains.\n\nOn April 7, 1803, I died sick in that cell. About sixty years old. I did not live to see independence; it would not come until the next year, January 1804, won by the officers who had served under me.\n\nThe France I trusted most, all my life, was where I died, in a French prison.',
      },
      deliverGoal: 'N9 story (climax/betrayal) — 算漏拿破仑 + 1802 Leclerc 两万多大军登陆真目的恢复奴隶制 + Toussaint 一生最后判断: 太信谈判桌同意坐下谈成陷阱被诱捕 + 1802.6 押上 Le Héros 运往法国 + Fort de Joux 阿尔卑斯阴冷要塞 (热岛人关进雪山石牢) + 1803.4.7 病死约六十岁没等到 1804.1 独立 + 「最信法国死在法国牢里」',
      engagementHook: '我一辈子靠谈判桌活下来，最后也死在谈判桌上——我太信我最信的那个帝国了。一个人最大的本事，会不会正好是他最大的破绽？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-toussaint-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，最难评的一件事，是我对法国的那份信任。两种说法都站得住。\n\n一种说法：信法国，是我致命的天真。三个帝国都盯着这座岛，没有一个真把我们当人，法国不过是最会包装的那个。我把命押在「只要挂着法国旗就安全」上，结果被那面旗骗上了船、关进了雪山。一个一辈子算无遗策的棋手，最后栽在自己最不该信的一手。\n\n另一种说法：信法国，是当时唯一现实的路。1794 年真把「废奴」写进法律的，只有法国。一座孤岛，外有三大帝国环伺，内有四群人互相为敌——彻底翻脸独立，可能当场被碾碎。挂着法国旗争取时间、把自由写进制度，也许是那个处境下，唯一能赌一个多种族共存未来的下法。\n\n这两边，不是「天真」对「明智」。是同一个判断的两张脸——同一份对谈判和制度的信，既救过我们，也送了我的命。\n\n有研究者（如 C.L.R. James）把我读成被时代背叛的悲剧主角；也有更冷的结构派提醒：个人再强，也算不过帝国的胃口和岛上的物质现实。两边都没把话说死。\n\n你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Of my whole life, the hardest thing to judge is my trust in France. Both views stand.\n\nOne view: trusting France was a fatal naivety. All three empires watched this island, and not one truly counted us as human; France was only the one best at dressing it up. I staked my life on "as long as the French flag hangs there, we are safe," and that flag lured me onto a ship and into a snow-mountain cell. A chess player who had calculated everything for a lifetime fell, at the end, on the one move he should least have trusted.\n\nThe other view: trusting France was the only realistic road at the time. The one power that actually wrote "abolition" into law, in 1794, was France. The island stood alone. Three great empires pressed in from outside. Four groups fought each other inside. A clean break for independence might have been crushed at once. To hang the French flag, buy time, and write freedom into the institution may have been, in that situation, the only way to gamble on a future where many races could live together.\n\nThese are not "naive" against "wise." They are two faces of one judgment. The same trust in talks and institutions both saved us and cost me my life.\n\nSome scholars (such as C.L.R. James) read me as a tragic hero betrayed by his age; colder structural readers remind us that no individual, however strong, can out-calculate an empire\'s appetite and the island\'s material facts. Neither side closes the question.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 信法国是致命天真还是唯一现实的多种族自由之路 / 一种说法 (致命天真/被最不该信的一手栽了) / 另一种说法 (唯一现实路/1794 只有法国废奴/挂旗争时间写进制度) / 同一份信两张脸既救人也送命 / ≤2 named scholar (C.L.R. James + 结构派通称) 中立无预判 / 想 30 秒两边都站得住',
      engagementHook: '信法国，是致命的天真，还是唯一现实的活路？同一份对谈判的信，既救了大家，也要了我的命。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'hai-toussaint-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价一个站在所有人中间的人？\n\n我不完全属于任何一边。对种植园主，我是反叛的财产；对一些起义者，我是换边太多的人；对法国，我是个先利用、后丢弃的棋子。我想用谈判和制度，替所有人抓一个能共存的未来，最后死在我最信的那个帝国手里，没等到那个未来。把这样一生放上天平，你怎么称——是失败，还是另一种没被打败？\n\n说到这里，有一句据说是我被押上船时说的话流传很广：「你们扳倒我，只是砍倒了自由这棵树的树干。它会重新长出来，因为它的根又多又深。」\n\n你得知道：这句话很可能是后人追记或加工的，史学界普遍标它为存疑，不是档案里逐字记下的原话。我把它原样交给你，连同这层提醒。可它说中了一件真事——1803 年我死了，1804 年，那棵树照样从根上，长成了一个国家。\n\n现在，你只听到了我这一边。那个在蔗田里点起第一把火的少年，那个一夜之间失去一切的种植园主——他们会怎么讲这同一段历史？还有那声号，你换个位置再听，会不会听出完全不同的东西？',
        en: 'Having walked my whole life, how would you judge a man who stood in the middle of everyone?\n\nI belonged fully to no side. To the owners, I was rebellious property; to some of the rebels, a man who changed sides too often; to France, a chess piece to use first and discard later. I tried, through talks and institutions, to seize for everyone a future where they could live together, and I died in the hands of the empire I trusted most, never reaching it. Put a life like this on the scale. How do you weigh it: a failure, or another kind of not-being-defeated?\n\nThere is a line said to be spoken as I was put aboard the ship, and it spread far: "In overthrowing me, you have only cut down the trunk of the tree of liberty. It will spring back, for the roots are many and deep."\n\nYou should know: this line is very likely a later retelling or reworking. Historians generally mark it as doubtful, not words recorded word for word in any archive. I hand it to you as it is, together with that warning. Yet it hit on a true thing: I died in 1803, and in 1804 that tree grew, from the roots, into a nation all the same.\n\nNow, you have heard only my side. The boy who lit the first torch in the cane fields, the owner who lost everything in a single night, how would they tell this same history? And that horn, when you stand in another place and listen again, might you hear in it something entirely different?',
      },
      deliverGoal: 'N11 close/meta — 评价站在所有人中间的人 (对各方都不是自己人/想替所有人抓共存未来/死在最信的帝国手里没等到) 天平: 失败还是另一种没被打败 + 「自由之树」名言 EXPLICITLY 标 apocryphal (很可能后人追记/史学界标存疑/非档案原话) 但说中真事 (1803 死 1804 长成国家) + 跨视角指针 (只听到我这一边 / 点火少年 + 种植园主会怎么讲 / 同一声号换位置再听会不同) — 不解释 lambi 内容',
      engagementHook: '我对谁都不完全是自己人，想替所有人抓一个共存的未来，最后没等到。你会怎么评价这样一个站在中间的人？现在你只听到了我这一边——那个点火的少年、那个一夜失去一切的种植园主，会怎么讲这同一段历史？',
      expectsRealAnswer: true,
    },
  ],
};

export var fieldWorkerLens = {
  id: 'field-worker-receiving-end',
  name: 'The Cane-Field Youth',
  nameCn: '甘蔗田里的少年',
  role: 'receiving-end',
  perspectiveTag: 'enslaved-becomes-agent',
  icon: '🔥',
  description: {
    cn: '1791 年加勒比海一座叫 Saint-Domingue 的法国糖殖民地上，一个被奴役的少年。他没有名字，因为历史没给这些人留下名字，而这恰恰是问题本身。每天天不亮就下田砍甘蔗，弯刀磨得发亮，手上全是被蔗叶割出的细口子。这一遍，你站在最底层、最没有名字的位置，亲手把自己变成历史的推动者，也直面自由是用什么换来的。',
    en: 'On a French sugar colony called Saint-Domingue in the 1791 Caribbean, an enslaved boy. He has no name, because history left these people none, and that is exactly the point. Every day before dawn he goes to cut cane, his machete sharpened bright, his hands covered in fine cuts from the cane leaves. This pass puts you in the lowest, most nameless position, where you turn yourself into a maker of history with your own hands, and face what freedom was bought with.',
  },
  storyboard: [
    {
      id: 'hai-field-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '天还没亮，我已经在甘蔗田里了。\n\n我手里这把弯刀，叫 machete（砍刀）。我把它磨得发亮——刀钝了，一天的活就更累。我的手上全是细口子，是甘蔗叶割的，干一阵就割一道，没好过。\n\n我没有名字给你。不是我不肯说，是没人替我记下来。在这座岛上，像我这样的人有五十万，我们种的糖喂饱了大半个法国，可账本上只有我们的价钱，没有我们的名字。\n\n这座岛叫 Saint-Domingue（圣多曼格），是法国的糖殖民地，今天叫海地。\n\n这一遍，你站在我这儿，最底下、最没名字的这一格，看一件事：一个账本上的「财产」，怎么有一天站了起来，做了一件财产不该做的事。',
        en: 'It is not yet light, and I am already in the cane field.\n\nThis blade in my hand is called a machete, a cane knife. I keep it sharpened bright. A dull blade makes the day\'s work even harder. My hands are covered in fine cuts from the cane leaves. Cut for a while, and you open a new one. They never heal.\n\nI have no name to give you. Not because I will not say it, but because no one wrote it down for me. On this island there are five hundred thousand people like me. The sugar we grow feeds most of France, yet the ledger holds only our prices, not our names.\n\nThis island is called Saint-Domingue, a French sugar colony. Today it is called Haiti.\n\nThis pass, you stand where I stand, in the lowest, most nameless square, and watch one thing: how a piece of "property" in a ledger one day stood up and did a thing that property is not supposed to do.',
      },
      deliverGoal: 'N1 hook — 天不亮在甘蔗田 + machete 磨亮/手上细口子 + 没名字 (没人替我记下来/五十万人/账本只有价钱没名字) + Saint-Domingue 法国糖殖民地今海地 + 这一遍从最底没名字看「财产站起来」',
      engagementHook: '账本上有我的价钱，没有我的名字。你能想象「被写成一笔财产、连名字都没留下」是什么感觉吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-field-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我每天的日子，你才懂后来那一夜对我意味着什么。\n\n这座岛上的糖，是全世界最赚钱的东西。我的主人是个法国种植园主，住在通风的二层木屋里，喝着从法国运来的酒。他的账本上记着两百多个人的名字和价钱——其中一个是我。\n\n他不是特别坏的一个人。可怕的不是他，是这套规矩：糖价高，人可以买；我们砍甘蔗砍到累死、病死，他再从非洲来的船上买新人补上就行。\n\n这套规矩有个名字，叫 Code Noir（黑法典），是一百多年前法国国王定的。它白纸黑字写着：我们是可以买卖的财产。它一边把人当牲口用，一边假装给我们一点「保护」。\n\n所以我每天天不亮下田，不是因为我懒、该罚。是因为有一部法律，早就把我算成了一头能干活的牲口。',
        en: 'First let me tell you my daily life, so you understand what that one night later meant to me.\n\nThe sugar on this island is the most profitable thing in the whole world. My owner is a French planter. He lives in a breezy two-story wooden house and drinks wine shipped from France. His ledger lists the names and prices of more than two hundred people. One of them is me.\n\nHe is not a specially evil man. The frightening thing is not him; it is the system: sugar prices are high, people can be bought, and when we cut cane until we drop dead or fall sick, he simply buys new people off the ships from Africa to fill the gap.\n\nThis system has a name, the Code Noir, the Black Code, set down by a French king more than a hundred years ago. It says plainly, in black and white: we are property that can be bought and sold. It works us like livestock while pretending to give us a little "protection."\n\nSo when I go to the field before dawn, it is not because I am lazy and being punished. It is because a law decided, long ago, to count me as a beast of burden that can work.',
      },
      deliverGoal: 'N2 setup — 岛上糖全世界最赚钱 + 主人法国种植园主 (二层木屋/法国酒/账本两百多人含我) + 不是他坏是规矩 (砍到死再买新人) + Code Noir 黑法典 (法国国王定/写明是可买卖财产/当牲口用假装保护) + 一部法律把我算成牲口',
      engagementHook: '一部法律白纸黑字把我算成「能干活的牲口」——可怕的不是我主人，是这套让「把人用掉」变成正常生意的规矩。你怎么看这种「合法的残忍」？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-field-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '可你别以为我生下来就是「财产」，心里也认这个。\n\n我们这五十万人，很多本来不是岛上生的。因为死的人太多，主人每年都要从非洲买新人补——所以田里站着的人，好多自己就出生在非洲，记得被卖上船的那一天，记得海那边有过自由是什么样。\n\n（这一段，史料没替他留下答案——他生在非洲，还是生在岛上，没人记下；这两种人，田里都站着。）\n\n我们带来的东西，账本记不下：我们的语言，我们的鼓点，我们拜的神。这些后来在岛上揉成一种信仰，叫 Vodou（伏都）。\n\n白天我们是「财产」，砍甘蔗、被监工拿鞭子赶。可到了夜里，鼓声一响，我们还是我们——记得自己从哪儿来、记得自己曾经是、或者本该是一个自由的人。\n\n这一点，我主人永远算不进他的账本。',
        en: 'But do not think I was born "property" and accepted it in my heart.\n\nMany of us five hundred thousand were not born on this island. So many died that the owners bought new people from Africa every year to fill the gaps. So among the people standing in the field, many were born in Africa, remembered the day they were sold onto a ship, remembered what freedom looked like on the other side of the sea.\n\n(Here the record left no answer for him — whether he was born in Africa or born on the island, no one wrote down. Both kinds of people stood in that field.)\n\nWhat we brought with us, the ledger could not record: our languages, our drumbeats, the gods we prayed to. On the island these blended into a faith called Vodou.\n\nBy day we were "property," cutting cane, driven by the overseer\'s whip. But at night, when the drums sounded, we were still ourselves, remembering where we came from, remembering that we had once been, or were meant to be, free people.\n\nThis, my owner could never enter into his ledger.',
      },
      deliverGoal: 'N3 setup — 不是生下来就认命 + 五十万人很多生在非洲 (死太多每年买新人/记得被卖上船/记得海那边自由) + anti-fab 括号短句 (我生在哪史料无答案/两种人田里都站着) + 带来的东西账本记不下 (语言/鼓/神→Vodou) + 夜里鼓响还是我们 + 主人算不进账本',
      engagementHook: '白天我是「财产」，夜里鼓声一响，我还是记得自己曾经自由的那个人。一个人最不能被夺走的东西，是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-field-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你听见一句话，从海那边传过来。法国本土闹了大革命，喊出一句口号：「人生而自由，权利平等。」\n\n这句话写在一张叫《人权宣言》的纸上。写它的法国人，脑子里的「人」根本不包括你——你是加勒比甘蔗田里的财产，你不在他们想的范围里。\n\n可话一旦说出口，就拦不住了。它漂洋过海，钻进你耳朵。\n\n你站在田里，弯刀还在手上。你脑子里轰一下：「所有人」生而自由——里面，有没有我？\n\n它没说「除了奴隶」。它没说「除了黑人」。它没说「除了甘蔗田里那个没名字的少年」。\n\n你心里那个藏了很久的念头，这一刻顶到了喉咙口：写这句话的人没打算给我——可凭什么，我不能自己把它捡起来？',
        en: 'Now you are me.\n\nYou hear a sentence, carried across the sea. France itself has erupted in revolution, crying out a slogan: "Men are born free and equal in rights."\n\nThis sentence is written on a paper called the Declaration of the Rights of Man. The French who wrote it did not mean you at all. You are property in a Caribbean cane field. You were never in the range of what they were thinking.\n\nBut once a sentence is said aloud, it cannot be held back. It crosses the ocean and goes into your ears.\n\nYou stand in the field, the machete still in your hand. Something goes off in your head: "all men" are born free. Is there a place in it for me?\n\nIt does not say "except slaves." It does not say "except Black people." It does not say "except that nameless boy in the cane field."\n\nThe thought you have hidden for so long rises to your throat in this moment: the people who wrote it did not mean it for me. But by what right can I not pick it up for myself?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 一句话从海那边传来《人权宣言》「人生而自由权利平等」+ 写它的法国人不包括你 (你是加勒比甘蔗田财产) + 话拦不住钻进耳朵 + 脑子轰一下「所有人里有没有我」+ 它没说除了奴隶/黑人/没名字的少年 + 念头顶喉咙口「凭什么我不能自己捡起来」',
      engagementHook: '写「人生而自由」的人，从没打算把它给我——可它也没说「除了我」。这句不属于你的话，你敢不敢自己捡起来？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-field-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我不是一个人敢。\n\n离我们种植园不远，有一片树林，叫 Bois Caïman（凯门森林）。1791 年 8 月 14 日那个夜里，森林深处有一场仪式。\n\n主持的是一个 Vodou 祭司，叫 Boukman，还有一个女祭司，叫 Cécile Fatiman。有鼓声，有血，有一个誓言。来的人，都是各个种植园里像我一样的人。\n\n那一夜我们立下盟约：我们要反抗。不是逃跑——逃跑是一个人偷偷溜走。这一次，是几万人，约好了，同时动手。\n\n你想想这有多难。我们互相之间，隔着一座座种植园、隔着监工的眼睛、隔着不同的非洲语言。可那一夜，鼓声把我们连成了一片。\n\n仪式之后，我们各自回到自己的田里，等一个信号。我心里又怕又烫。我知道，约好的那一刻一来，就再也回不了头了。',
        en: 'I was not the only one who dared.\n\nNot far from our plantation there was a stretch of woods called Bois Caïman, the Caiman Woods. On the night of August 14, 1791, deep in those woods, there was a ceremony.\n\nIt was led by a Vodou priest named Boukman, and a priestess named Cécile Fatiman. There were drums, there was blood, there was an oath. The people who came were all like me, from one plantation after another.\n\nThat night we swore a pact: we would rise up. Not run away. Running away is one person slipping off in secret. This time it was tens of thousands of us, agreed in advance, striking at the same moment.\n\nThink how hard that was. Between us stood plantation after plantation, the overseers\' eyes, and different African languages. Yet that night, the drums joined us into one.\n\nAfter the ceremony, we each went back to our own fields, and waited for a signal. My heart was afraid and burning at once. I knew that the moment the agreed hour came, there would be no turning back.',
      },
      deliverGoal: 'N5 story — 不是一个人敢 + Bois Caïman 凯门森林离种植园不远 + 1791.8.14 夜仪式 (Vodou 祭司 Boukman/女祭司 Cécile Fatiman/鼓/血/誓言) + 立盟约反抗 (不是逃跑是几万人约好同时动手) + 多难 (隔种植园/监工/不同非洲语言/鼓连成一片) + 回田里等信号又怕又烫回不了头',
      engagementHook: '逃跑是一个人偷偷溜走；这一次，是几万隔着监工和不同语言的人，约好同时动手。把这么多没名字的人连成一片，靠的是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-field-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '信号来了。\n\n几天后那个夜里，黑暗里响起一声号——有人吹响了 lambi（海螺号）。那声音穿过甘蔗田，一座种植园接一座种植园，传过整片黑夜的平原。\n\n这就是约好的信号。\n\n你手上是那把磨亮的弯刀。你弯下腰，捡起一把火把。\n\n就在这一刻，你做了一件账本上的「财产」永远不该做的事——你做了一个选择。一头牲口不会选择。一笔财产不会选择。可你选择了点起这把火。\n\n而就在同一个时代，海那边——1781 年，新英格兰一座厨房里，一个叫 Mum Bett 的被奴役女人，听见一句「生而自由」，转身去打官司，把自己从财产变回了一个完整的人。\n\n一句「生而自由」，一个在新英格兰的厨房，一个在加勒比的甘蔗田，隔着大海，同时把主人写的那句话捡起来，对准了主人。\n\n她用一张状纸。我用一把火把。',
        en: 'The signal came.\n\nA few nights later, in the dark, a horn sounded. Someone blew the lambi, the conch shell horn. The sound passed across the cane fields, from one plantation to the next, across the whole dark plain.\n\nThis was the agreed signal.\n\nIn your hand is that sharpened machete. You bend down and pick up a torch.\n\nIn this very moment, you do a thing that "property" in a ledger is never supposed to do: you make a choice. A beast of burden does not choose. A piece of property does not choose. But you chose to light this fire.\n\nAnd in that same era, across the sea, in 1781, in a New England kitchen, an enslaved woman named Mum Bett heard the words "born free," turned, and went to court, and changed herself from property back into a whole person.\n\nOne line, "born free." One in a New England kitchen, one in a Caribbean cane field, across an ocean, at the same time picking up the words their masters wrote and aiming them back at the masters.\n\nShe used a sheet of court paper. I used a torch.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 信号来了 (几天后夜里有人吹响 lambi 海螺号/穿过甘蔗田传过黑夜平原) + 你捡起火把 + 做了财产不该做的事「你做了一个选择」(牲口/财产不会选择/你选择点火) + 跨 lens/Topic 对位 Mum Bett 1781 新英格兰厨房听「生而自由」打官司变回人 (→ constitutional-convention-1787) + 一句「生而自由」隔海两地把主人的话对准主人 + 她用状纸我用火把',
      engagementHook: '一头牲口不会选择，一笔财产不会选择——可我捡起火把，做了一个选择。那一刻，账本上的「财产」第一次成了一个做选择的人。这个「选择」，为什么这么重？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-field-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '火一旦点起来，就停不下来了。\n\n那一夜过后几天，1791 年 8 月 21 到 22 日的夜里，整个北部平原烧成了一片火海。我们几千、然后几万人，拿着 machete 和火把，烧蔗田、烧糖厂、烧种植园主的木屋。我主人那座通风的二层木屋，那本记着我价钱的账本，一夜之间化成了灰。\n\n我得对你诚实：这不是一个干净的故事。\n\n我们手里的弯刀，本来是砍甘蔗的。那一夜，它也砍了人。多年里，每一方都杀人——法国人杀我们，我们也杀他们。\n\n我们的早期领袖 Boukman，那年 11 月初（11 月 7 日）就被法军杀了，头颅被挂出来示众，想吓住我们。可火已经烧开，杀一个人压不住。\n\n你点起的这把火，照亮了你这辈子第一次的自由。它也烧出了血。这两件事，是连在一起的——我没法只给你看亮的那一半。',
        en: 'Once the fire is lit, it cannot be stopped.\n\nA few nights after that one, on the night of August 21 to 22, 1791, the whole Northern Plain burned into a sea of fire. Thousands of us, then tens of thousands, with machetes and torches, burned the cane fields, the sugar mills, the planters\' wooden houses. My owner\'s breezy two-story house, and the ledger that held my price, turned to ash in one night.\n\nI have to be honest with you: this is not a clean story.\n\nThe cane knives in our hands were made for cutting cane. That night, they cut people too. Over the years, every side killed. The French killed us, and we killed them.\n\nOur early leader Boukman was killed by the French in early November that year (November 7), his head hung up for all to see, to frighten us. But the fire had already caught, and killing one man could not hold it down.\n\nThe fire you lit gave you the first light of freedom in your life. That same fire also spilled blood. These two things are joined together. I cannot show you only the bright half.',
      },
      deliverGoal: 'N7 story — 火停不下来 + 1791.8.21-22 夜北部平原烧成火海 (几千→几万人/machete+火把/烧蔗田糖厂木屋/主人木屋+账本化灰) + anti-fab 诚实「不是干净的故事」+ 弯刀本砍甘蔗那夜也砍人 (每一方都杀人/法国人杀我们我们也杀他们) + Boukman 1791.11 被杀头颅示众压不住 + 火照亮第一次自由也烧出血两件事连一起',
      engagementHook: '我点起的火，照亮了我这辈子第一次的自由——它也烧出了血。我没法只给你看亮的那一半。一场为自由的反抗，会不会注定带着血？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-field-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我们这把火，烧了整整十三年。\n\n这不是一夜的暴动，是一场打了十三年的战争。法国、西班牙、英国——三个帝国都想吞下这座最赚钱的岛，在我们头上互相厮杀。\n\n1794 年，法国本土宣布废除奴隶制。我们以为天亮了。\n\n可 1802 年，法国出了个拿破仑，派来两万多大军，真正的目的是把奴隶制再装回我们身上。\n\n这一下，连原本愿意跟法国走的黑人将领都反了——谁想再回到账本上当一头牲口？\n\n还有一个帮我们的，是岛上的一种病，叫黄热病（yellow fever）。我们这些在岛上长大、从非洲来的人，对它有点抵抗力；法国来的新兵没有，成片成片地倒下。\n\n你看，赢这场仗的，不只是我们的弯刀和火把。还有这片土地本身——它认得我们，不认得那些来抓我们回去的人。',
        en: 'Our fire burned for a full thirteen years.\n\nThis was not a one-night riot. It was a war that lasted thirteen years. France, Spain, Britain, three empires all wanted to swallow this richest island, slaughtering one another over our heads.\n\nIn 1794, France itself declared slavery abolished. We thought the day had dawned.\n\nBut in 1802, France produced a man named Napoleon, who sent more than twenty thousand troops, whose true purpose was to fasten slavery back onto us.\n\nAt that, even the Black officers who had been willing to follow France turned against it. Who would want to go back into the ledger as a beast of burden?\n\nSomething else helped us: an island sickness called yellow fever. Those of us raised on the island, and those who came from Africa, had some resistance to it. The fresh French soldiers did not, and they fell in rows.\n\nYou see, what won this war was not only our machetes and torches. It was the land itself. It knew us, and it did not know the men who came to drag us back.',
      },
      deliverGoal: 'N8 story — 火烧十三年 (不是一夜暴动是 13 年战争/法西英三帝国想吞最赚钱的岛) + 1794 法国废奴以为天亮 + 1802 拿破仑两万多大军真目的恢复奴隶制 + 黑人将领反了 (谁想回账本当牲口) + 黄热病 (岛上长大/非洲来的有抵抗力/法国新兵成片倒) + 赢靠的不只弯刀火把还有这片土地认得我们',
      engagementHook: '赢这场仗的，不只是我们的弯刀和火把，还有这片土地本身——它认得我们，不认得那些来抓我们回去的人。你觉得「土地认得谁」这句话，是真的吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-field-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1804 年 1 月 1 日，我们赢了。\n\n这座岛宣布独立。我们的领袖把法国人取的殖民地名字 Saint-Domingue 扔掉，换回这片土地最早的主人、原住民留下的旧名字——Haiti（海地），意思是「多山之地」。\n\n你要明白这有多不可思议：一群账本上的「财产」，自己点火、自己打、自己建国。这是历史上第一个由被奴役的人亲手建立的国家。世界上所有还在蓄奴的人，从此睡不安稳——因为我们证明了，奴隶能赢。\n\n但我还得把最黑的那一笔告诉你。\n\n独立之后，我们的新领袖下令，把岛上剩下的法国白人几乎杀光，死了大概三千到七千人。这是 1804 年的事。\n\n我点起那把火的时候，想的是自由。可这把火走到尽头，不只烧掉了枷锁，也烧掉了很多人的命——包括那些已经放下武器的人。\n\n我没法替这件事辩护。我只能让你看见它，整个地看见。',
        en: 'On January 1, 1804, we won.\n\nThis island declared independence. Our leaders threw away the colonial name the French gave it, Saint-Domingue, and took back the old name left by this land\'s first owners, the native people: Haiti, meaning "land of mountains."\n\nYou must understand how unthinkable this was: a crowd of "property" in a ledger lit their own fire, fought their own war, founded their own nation. This was the first country in history founded by enslaved people with their own hands. Every person in the world who still held slaves slept uneasy from then on, because we had proved that the enslaved can win.\n\nBut I still have to tell you the darkest entry.\n\nAfter independence, our new leader ordered nearly all the remaining French whites on the island killed. About three thousand to seven thousand died. This was in 1804.\n\nWhen I lit that fire, I was thinking of freedom. But by the time the fire reached its end, it had burned away not only the chains, but many lives too, including people who had already laid down their weapons.\n\nI cannot defend this. I can only let you see it, see the whole of it.',
      },
      deliverGoal: 'N9 zoom-out — 1804.1.1 赢/独立 + 扔掉殖民名 Saint-Domingue 换回原住民旧名 Haiti「多山之地」+ 多不可思议 (财产自己点火打建国/史上第一个被奴役者建的国/蓄奴的人睡不安稳证明奴隶能赢) + 最黑一笔 1804 屠杀剩余法国白人约 3000-7000 人 + 火走到尽头烧掉枷锁也烧掉命 (含放下武器的人) + 我没法辩护只能让你整个看见',
      engagementHook: '一群账本上的「财产」，自己点火、自己打、自己建国——这是史上第一个由被奴役者建立的国家。可同一把火，最后也烧掉了已经放下武器的人。这两件事，我都让你看见了。',
      expectsRealAnswer: false,
    },
    {
      id: 'hai-field-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，回头看那一夜，我捡起火把的那一夜，有一个真问题，等你来答。\n\n我们的自由，是用真实的暴力换来的。火一旦点起，它不只落在压迫我们的人身上：1804 年，连放下武器的法国人也被杀了。如果自由必须用这样的代价换，这个代价，改不改变你看这场革命的眼光？\n\n一种说法：这个代价是革命的污点。再正当的反抗，杀到已经投降的人头上，就越过了一条线。亮的那一半再亮，也不能把血的那一半抹掉。\n\n另一种说法：这个代价，是几百年奴役逼出来的。是先有了把人当牲口烧掉的制度，才有了后来这场连根烧回去的火。把账先记在点火的人头上，对那个没名字、被烫被卖被砍了几代的人，公平吗？\n\n两边都站得住。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look back at that night, the night I picked up the torch. There is a real question waiting for you.\n\nOur freedom was bought with real violence. Once the fire was lit, it did not fall on our oppressors alone: in 1804, even the French who had laid down their weapons were killed. If freedom must be bought at such a cost, does that cost change how you see this revolution?\n\nOne view: this cost is the revolution\'s stain. However just the resistance, when the killing reaches people who have already surrendered, it crosses a line. However bright the bright half is, it cannot wipe out the half that is blood.\n\nThe other view: this cost was forced out by centuries of slavery. First came the system that burned people up like livestock, and only then came this fire that burned back to the root. To pin the bill first on the people who lit it, is that fair to the nameless one who was burned, sold, and cut down for generations?\n\nBoth sides stand.\n\nWhat do you think? Take thirty seconds, and write it down.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 自由用真实暴力换/1804 连放下武器的法国人也被杀/这代价改不改变你看革命的眼光 + 一种说法 (代价是污点/杀投降者越线/亮的抹不掉血的) + 另一种说法 (代价是几百年奴役逼出来的/先有把人当牲口的制度才有连根烧回的火/账先记点火人头上对没名字被烫被卖几代的人公平吗) + 两边都站得住 + 想 30 秒',
      engagementHook: '自由是用真实的暴力换来的，1804 年连放下武器的人也被杀了。一种说法：这是革命的污点。另一种说法：这是几百年奴役逼出来的。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'hai-field-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个没名字的少年，一把磨亮的弯刀，一句不属于我的「生而自由」，一把我亲手点起的火，一个我们自己取的国名，你会怎么评价这样一个开端？\n\n它是人类历史上第一次，由账本上的「财产」自己挣回了「人」。它也在 1804 年，烧到了已经投降的人头上。这两件事，是同一把火。你怎么称？\n\n不过先记住：你这一遍，听的只是甘蔗田里那个点火的少年。\n\n那个木屋被烧掉的种植园主，会把这一夜讲成另一个样子——他眼里是「我的世界凭什么烧」。那个在被奴役者出身、却想用谈判和宪法抓住未来的 Toussaint，会把这场起义看成另一回事——他怕的是火烧过头、烧掉自己想建的新秩序。\n\n你还没听到他们的声音。换个视角再走一遍，你刚才下的判断，站不站得住？\n\n再想最后一步：今天你身边，有没有一句「写在纸上对所有人都算数」、可落到某些人头上就不算数的话？那时候，你会装没看见，还是会像我一样，把那句话捡起来，对准写它的人？',
        en: 'Having walked my whole life, a nameless boy, a sharpened machete, a "born free" that was never mine, a fire I lit with my own hands, a country name we gave ourselves, how would you judge a beginning like this?\n\nIt was the first time in human history that "property" in a ledger won back the name of "person" for itself. It also, in 1804, reached people who had already surrendered. These two things are the same fire. How do you weigh it?\n\nBut first, remember: this pass, you heard only the boy in the cane field who lit the fire.\n\nThe planter whose wooden house burned would tell this night as something else, in his eyes, "by what right does my world burn." Toussaint, who was born enslaved yet tried to grab the future with talks and a constitution, would see this uprising as something else again. What he feared was the fire going too far and burning down the new order he wanted to build.\n\nYou have not yet heard their voices. Run it again through another lens, and see whether the judgment you just made still holds.\n\nThen take one last step: in your own life today, is there a sentence "written on paper to count for everyone" that stops counting once it lands on certain people? When that happens, will you look away, or will you do what I did: pick up that sentence, and aim it back at the people who wrote it?',
      },
      deliverGoal: 'N11 close — 评价开端 (没名字少年/磨亮弯刀/不属我的生而自由/亲手点的火/自取国名 → 财产挣回人 vs 1804 烧到投降者/同一把火怎么称) + MANDATORY 跨视角指针: ① 你只听到点火的少年 ② 种植园主会讲成另一样 (我的世界凭什么烧) + Toussaint 看成另一回事 (怕火烧过头烧掉新秩序) ③ 你还没听到他们的声音/换视角再走判断站不站得住 + transfer「今天身边写在纸上对所有人算数却对某些人不算数的话」+ 你会装没看见还是像我把话对准写它的人',
      engagementHook: '你这一遍，只听到了点火的少年。种植园主会把这一夜讲成另一个样子，Toussaint 会把这场起义看成另一回事——你还没听到他们的声音。换个视角再走一遍，你刚才的判断站得住吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator / receiving-end-default) ───
export var lenses = {
  'planter-actor':              planterLens,
  'toussaint-mediator':         toussaintLens,
  'field-worker-receiving-end': fieldWorkerLens,
};

// receiving-end 优先 (黑人能动性 = AP DBQ 必考角度; 无名少年点火本身是 load-bearing pedagogy)
export var defaultLens = 'field-worker-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'haitian-revolution-1791',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'planter-actor': 28, 'toussaint-mediator': 30, 'field-worker-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-02',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail: lambi 海螺号 (三视角各触一次不点破)',
    'defaultLens: field-worker-receiving-end — 黑人能动性 (black agency, AP DBQ 必考) + 无名少年点火',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total)',
    'anti-fab: Toussaint「自由之树」名言显式标 apocryphal; 少年生于非洲/岛上用括号短句标 (史料无答案)',
    'cross-Topic 锚: field-worker N6 ↔ constitutional-convention mumBettLens (「生而自由」双向呼应)',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
