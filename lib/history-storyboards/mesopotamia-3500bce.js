// ─────────────────────────────────────────────────────────────────
// 美索不达米亚·苏美尔 3500 BCE — Mesopotamia & Sumer · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (AUTHORING_PIPELINE 第7条): 全程两河流域真实术语
//   (Sumer/Uruk/Ur/Eridu/ziggurat/cuneiform/en/ensi/lugal/dub-sar/stylus/
//    Gilgamesh/Sargon/Enheduanna/Kushim/salinization), 绝不用中国特定词。
//   §8「同时代的中国」对照只注入 receiving-end / mediator 的 synthesis 节点。
// 3 lens / 11 nodes each / Rule 0 中性 / expectsRealAnswer 仅 N10+N11。
// 三视角 = 神庙书吏 (actor) / lugal 早期的王 (mediator, 以 Gilgamesh 传说为锚) /
//          神庙田里的劳工 (receiving-end · DEFAULT)。
// 跨 lens micro-detail: 同一块「Kushim 大麦账」泥板 —— 书吏压下它/lugal 用它清点
//   仓库与征兵/劳工的口粮被写进它 (本人不识字)。三视角各触一次,不互相点破。
// anti-fab: 三个主角中两个 (书吏/劳工) 为合成桥接人物,身份写实,显式标注;
//   lugal 以 Gilgamesh 传说为锚,显式标传说;Kushim「会计」释读用「可能/很可能」软化。
// ─────────────────────────────────────────────────────────────────

export var scribeLens = {
  id: 'temple-scribe-actor',
  name: 'The Temple Scribe',
  nameCn: '神庙书吏',
  perspectiveTag: 'who-holds-the-stylus',
  icon: '🖋️',
  description: {
    cn: '公元前 3300 年前后，世界第一座大城 Uruk（乌鲁克）神庙仓库旁，一个会写字的管事（dub-sar，书吏）。他没有名字，因为他代表一整个阶层，苏美尔极少数学会了那几百个符号的人。他坐在泥砖房里，手边一堆湿泥板、一支削尖的芦苇杆（stylus）。他做的事在今天看平平无奇：把「谁交了多少大麦」压进泥里。可正是这件事，让他成了这座城的大脑。这一遍让你坐进发明文字的人那一边，看清一个反直觉的真相：文字不是为写诗而生的，是为记账、为管理、为权力而生的。',
    en: 'Around 3300 BCE, beside the temple storehouse of Uruk, the world\'s first great city, sits a literate manager (a dub-sar, a scribe). He has no name, because he stands for a whole class - the tiny few in Sumer who mastered the hundreds of signs. He sits in a mud-brick room, a pile of wet clay tablets and a sharpened reed (a stylus) at hand. What he does looks ordinary now: pressing "who paid how much barley" into clay. Yet exactly this made him the brain of the city. This pass puts you on the side of the people who invented writing, to see a counter-intuitive truth: writing was not born to write poems, but to keep accounts, to manage, to serve power.',
  },
  storyboard: [
    {
      id: 'meso-scribe-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '公元前 3300 年前后，一个又热又干的午后，世界第一座大城 Uruk（乌鲁克）。我坐在神庙仓库旁一间泥砖小屋里，手边一堆湿泥板，一支削尖的芦苇杆。\n\n外面是一望无际的大麦田、纵横的灌溉渠，城中央那座越垒越高、像人造山一样的神庙塔（ziggurat）。这座城里挤着大约四万人，是当时全世界最大的人群。\n\n我是个 dub-sar——书吏，会写字的人。我不告诉你名字，因为我不是某一个人：在这座四万人的城里，认得那几百个符号的，只有极少数几个，我代表的是这一小撮人。\n\n我做的事，今天看平平无奇：把「谁交了多少大麦」压进泥里。可这一遍你会看见，正是这件不起眼的小事，让我成了整座城的大脑——也第一次，把人分成了两种。',
        en: 'Around 3300 BCE, on a hot, dry afternoon, in Uruk, the world\'s first great city. I sit in a small mud-brick room beside the temple storehouse, a pile of wet clay tablets and a sharpened reed at hand.\n\nOutside lie endless barley fields, a grid of irrigation canals, and at the center a temple tower (a ziggurat) built higher and higher like a man-made mountain. About forty thousand people are packed into this city — the largest gathering of humans on earth at the time.\n\nI am a dub-sar, a scribe, one who can write. I will not tell you my name, because I am not one man: in this city of forty thousand, only a tiny few know the hundreds of signs, and I stand for that handful.\n\nWhat I do looks ordinary today: I press "who paid how much barley" into clay. But this pass will show you that exactly this small, unremarkable act made me the brain of the whole city — and, for the first time, sorted people into two kinds.',
      },
      deliverGoal: 'N1 hook — c.3300 BCE Uruk 神庙仓库旁 + dub-sar 书吏自我介绍 (不给名字/代表极少数识字者/泥砖屋/湿泥板/stylus 芦苇杆/城内约 4 万人世界最大) + 这一遍视角 (一件不起眼的记账小事让我成城的大脑/第一次把人分两种)',
      engagementHook: '一座四万人的城里，只有极少数人认得字，我是其中之一。一件「记账」这么小的事，怎么会让一个人变成整座城的大脑？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-scribe-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先看清我坐的这个地方——神庙。你别以为它只是拜神的地方。\n\n在 Uruk，神庙是这座城里最大的「公司」：它是仓库、是银行、是工厂、是田产的总管。名义上，这一切属于城市的守护神；实际上，它管着大片大麦田、成千的劳工、堆满谷物的巨大仓库。它发口粮、收贡赋、组织挖渠灌溉。\n\n问题来了：成千的劳工、海量的大麦、谁交了多少、谁领了多少、仓库里还剩多少——这些事，光靠脑子根本记不住。\n\n这就是我存在的理由。神庙需要一个能把这一切「记下来、算清楚」的人。在我之前，没有这样的工具。\n\n所以请你记住一件反直觉的事：文字不是某个诗人灵感一来发明的。它是被一个又大又复杂的仓库，硬逼出来的。',
        en: 'First, see clearly where I sit — the temple. Do not think it is only a place to worship gods.\n\nIn Uruk, the temple is the biggest "company" in the city: it is the storehouse, the bank, the workshop, and the landlord, all in one. In name, all of this belongs to the city\'s patron god; in fact, it controls vast barley fields, thousands of workers, and huge storehouses heaped with grain. It hands out rations, collects tribute, and organizes the digging of canals for irrigation.\n\nHere is the problem: thousands of workers, mountains of barley, who paid how much, who received how much, how much is left in the store — none of this can be held in the head alone.\n\nThat is the reason I exist. The temple needed someone who could "write it down and count it up." Before me, there was no such tool.\n\nSo remember a counter-intuitive thing: writing was not invented by some poet in a flash of inspiration. It was forced into being by a huge, complicated storehouse.',
      },
      deliverGoal: 'N2 setup — 神庙=城里最大「公司」(仓库+银行+工厂+田产总管/名义属守护神实际管田/劳工/仓库/发口粮收贡赋组织灌溉) + 成千劳工海量大麦光靠脑子记不住 = 我存在的理由 + 「文字不是诗人灵感发明的，是被一个又大又复杂的仓库硬逼出来的」',
      engagementHook: '文字不是某个诗人灵感一来发明的，是一个堆满大麦、雇着几千人的大仓库逼出来的。需求逼出发明——你还能想到别的例子吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-scribe-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '可这座城、这座神庙，又是从哪儿长出来的？得往前倒几百年。\n\n这片两河之间的平原（Mesopotamia，希腊语「两河之间的土地」，约今伊拉克南部），又热又干，几乎不下雨。但底格里斯河和幼发拉底河每年泛滥，留下肥沃的淤泥。麻烦是洪水来的时间不对、时大时小。所以这里从一开始就是一道工程题：不合伙挖渠引水，就没饭吃。\n\n一旦渠挖成、水引来，这片地能养活的人远超别处——粮食有了富余（剩余粮食）。\n\n富余的粮食，能养活一批不下田的人：祭司、工匠、士兵、管事，还有我这样的书吏。这是人类第一次出现这么细的分工，也第一次出现明显的阶层。\n\n你看，灌溉 → 剩余粮食 → 分工 → 阶层，一环扣一环。而我，正站在这条链子上一个谁也想不到的位置：那个负责把这一切「记下来」的人。',
        en: 'But where did this city, this temple, grow from? You have to go back a few hundred years.\n\nThis plain between two rivers (Mesopotamia, Greek for "the land between the rivers," roughly today\'s southern Iraq) is hot and dry, with almost no rain. But the Tigris and the Euphrates flood each year, leaving rich silt. The trouble is the floods come at the wrong time and are unpredictable. So from day one this was an engineering problem: dig no canals together, and you do not eat.\n\nOnce the canals are dug and the water led in, this land can feed far more people than anywhere else — there is extra food (surplus grain).\n\nSurplus grain can feed people who never go into the fields: priests, craftsmen, soldiers, managers, and scribes like me. This is the first time humans had such fine division of labor — and the first time there were clear social classes.\n\nSee the chain: irrigation → surplus grain → division of labor → classes, link after link. And I stand at a spot on that chain no one would expect — the one whose job is to "write it all down."',
      },
      deliverGoal: 'N3 setup — 两河平原 Mesopotamia (希腊语两河之间/约今伊拉克南部) 极旱几乎不下雨 + Tigris/Euphrates 每年泛滥留淤泥但时间不对时大时小 = 工程题「不挖渠没饭吃」+ 灌溉→剩余粮食→养活不下田的人 (祭司/工匠/士兵/书吏)→第一次细分工与明显阶层 + 我站在这条因果链上「记下来」的位置',
      engagementHook: '灌溉 → 剩余粮食 → 分工 → 阶层，一环扣一环。而记账的我，就长在这条链子最末端。如果当年没人想到合伙挖渠，这一切还会发生吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-scribe-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n清晨，仓库门口排着交大麦的人。你面前摊着一块湿泥板，手里握着削尖的芦苇杆。\n\n你要记的，不是诗，不是故事，是这么一件事：某人，交进大麦若干，存若干天。你在泥上压下几个符号——一个代表「大麦」，几道刻痕代表数目，再压上经手这笔账的标记。最早这些符号还是小图画，慢慢被压成芦苇杆戳出来的楔形笔画（这就是 cuneiform，拉丁文「楔形」的由来）。\n\n你心里清楚：你不是在创作，你是在「算清楚东西」。神庙有多少大麦、多少羊、多少劳工、欠谁多少、谁欠神庙多少——你能记、能算、能查。\n\n这一刻你要诚实面对自己：你手里这支芦苇杆，写下的第一批字，没有一个字是关于「美」的。全是关于「账」的。文字一出生，就站在了管理者这一边。',
        en: 'Now you are me.\n\nAt dawn, people line up at the storehouse door to hand in barley. A wet clay tablet lies before you, a sharpened reed in your hand.\n\nWhat you record is not a poem, not a story, but this: so-and-so handed in this much barley, to be stored this many days. You press a few signs into the clay — one for "barley," some marks for the number, then the mark of whoever handled the account. At first these signs were little pictures; slowly they were pressed into wedge strokes poked by the reed (this is where cuneiform, Latin for "wedge-shaped," comes from).\n\nYou know in your heart: you are not creating, you are "counting things up." How much barley the temple has, how many sheep, how many workers, who owes what, who owes the temple how much — you can record it, count it, check it.\n\nIn this moment, be honest with yourself: the first words this reed of yours ever wrote, not one of them is about "beauty." Every one is about "the account." From the moment writing was born, it stood on the side of the managers.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 清晨仓库门口交大麦 + 你压泥板记「某人交大麦若干存若干天」(符号: 大麦/数目刻痕/经手标记) + 符号从小图画→芦苇杆戳的楔形笔画 = cuneiform 拉丁文「楔形」由来 + 自我拷问: 第一批字没一个关于「美」全是关于「账」+ 「文字一出生就站在管理者一边」',
      engagementHook: '我手里这支芦苇杆，写下的第一批字，没有一个是关于「美」的，全是关于「账」的。你以为文字天生属于诗，可它出生第一天就属于账本——这让你意外吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-scribe-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '别小看「会写字」这三个字。在这座城里，它是当时最高的权力技能之一。\n\n你想想：我能记下谁交了粮、谁欠了债；我能写下命令、写下契约；过几个月、几年，谁说了什么、答应了什么，泥板上都查得到。一件事一旦被我写进泥里，它就不再只是你的记忆、你的说法——它变成了「记录」。\n\n而这座城里，认得那几百个符号的人，屈指可数。这意味着：记录、命令、契约、法律，全攥在我们这一小撮人手里。不识字的人，连那块决定他命运的泥板上写了什么都看不懂。\n\n所以书吏慢慢成了一种精英职业。会写字，不只是一门手艺，它是一道门槛——把这座城的人，分成了能进入「记录」的少数，和只能被「记录」的多数。\n\n我得承认：这道门槛，我站在它有利的那一边。',
        en: 'Do not underrate those three words, "can write." In this city, it was one of the highest forms of power at the time.\n\nThink about it: I can record who paid grain, who owes a debt; I can write down orders, write down contracts; months or years later, who said what, who promised what — it can all be checked on the tablet. Once a thing is pressed into clay by me, it is no longer just your memory, your account of it — it becomes "the record."\n\nAnd in this city, the people who know the hundreds of signs can be counted on one hand. That means records, orders, contracts, laws — all of it is held in the hands of our tiny few. A person who cannot read cannot even understand what is written on the very tablet that decides his fate.\n\nSo scribes slowly became an elite profession. To write was not just a craft; it was a threshold — sorting the city\'s people into the few who could enter "the record," and the many who could only be "recorded."\n\nI will admit it: on that threshold, I stand on the favorable side.',
      },
      deliverGoal: 'N5 story — 「会写字」是当时最高权力技能之一 (记债/写命令契约/几年后可查→变成「记录」) + 识字者屈指可数 = 记录命令契约法律攥在一小撮人手里/不识字者看不懂决定自己命运的泥板 + 书吏成精英职业 = 一道门槛把人分成能进入记录的少数 vs 只能被记录的多数 + 「我站在门槛有利的一边」',
      engagementHook: '一件事被我写进泥里，就不再是你的说法，而成了「记录」。掌握「写下来」的权力，就掌握了「什么算数」。今天谁握着这种权力？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-scribe-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我给你看一块我压过的泥板——一块后来变得很有名的泥板。\n\n它记的就是一笔大麦的收支。账目旁边，我压上了一个标记：Kushim（库辛）。\n\n（这块泥板是真的，今天还在。但「Kushim 到底是谁」，史料没给确切答案。多数学者认为，它很可能是一个机构职位、或者经手这笔账的人的名字——我作为书吏的猜测是：很可能就是个像我一样管仓库、管账的人。)\n\n你品一下这件事的分量：人类已知最早被「写下来」的名字之一，不是国王，不是英雄，不是诗人——是一个跟一笔大麦账连在一起的、很可能管仓库的人。\n\n换句话说，人类历史上第一个被永远记住的「名人」，很可能是个会计。\n\n这块小小的泥，就是整座城的缩影：写的人（我）用它管理；被写的人（交粮、领粮的劳工）大多连一行都没留下；而第一个留名的，是个记账的。文字最初想留住的，从来不是不朽，是账目。',
        en: 'Let me show you a tablet I once pressed — a tablet that later became famous.\n\nIt records a transaction of barley. Beside the account, I pressed in a mark: Kushim.\n\n(This tablet is real, and it still exists today. But "who exactly Kushim was," the record gives no certain answer. Most scholars think it was probably an institutional title, or the name of the person handling the account — and my own guess, as a scribe, is that it was very likely someone like me, who managed a storehouse and its accounts.)\n\nWeigh what this means: one of the earliest names humanity ever "wrote down" was not a king, not a hero, not a poet — it was a name attached to a barley account, very likely a person who managed a storehouse.\n\nIn other words, the first "famous name" ever remembered forever in human history was very likely an accountant.\n\nThis small piece of clay is the whole city in miniature: the one who writes (I) uses it to manage; the ones written about (the laborers paying and receiving grain) mostly left not a single line; and the first to leave a name was a bookkeeper. What writing first tried to keep was never immortality — it was the account.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Kushim 大麦账泥板从书吏角度 (他压下账目+Kushim 标记) + anti-fab 括号 (泥板真/「Kushim 是谁」无确切答案/多学者认为可能是机构职位或经手人/书吏「很可能像我一样管仓库的人」软化) + 最早被写下的名字之一不是王/英雄/诗人而是连着大麦账很可能管仓库的人 + 「第一个名人很可能是会计」+ 一块泥=整城缩影 (写的人管理/被写的人没留一行/第一个留名是记账的)',
      engagementHook: '人类已知最早被写下的名字之一，很可能是个管仓库的会计——不是国王，不是诗人。如果连「被记住」都先轮到记账的人，这说明文字最在乎的是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-scribe-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '一开始，我只能记数和物：多少大麦、多少羊。可符号用得越久、越熟，能记的东西就越多。\n\n慢慢地，泥板能记下名字，能记下命令，能记下契约——「谁答应在某月还多少粮」「这块地归谁」。文字从「记东西」长成了「记语言」。\n\n这件事的影响，远比当时的我能想象的大。多少代人之后，这套楔形文字成了整个近东两千多年的国际书写系统，被一拨又一拨说不同语言的人借去用。和它一起被记下来、传下去的，还有苏美尔人算数的法子——把一圈分成六十份的六十进制。\n\n你今天看表，一小时六十分钟、一分钟六十秒；你量角度，一圈三百六十度——这些，都是从我们这些坐在仓库旁记账的人手里，一代代传下来的。\n\n我当年只是想把账记清楚。我没想到，我压进湿泥里的那套办法，会一直压到你的手表上。',
        en: 'At first I could only record numbers and goods: so much barley, so many sheep. But the longer and more skillfully the signs were used, the more they could record.\n\nSlowly, the tablets could record names, could record orders, could record contracts — "who promised to repay how much grain in which month," "whose this plot of land is." Writing grew from "recording things" into "recording language."\n\nThe effect of this was far larger than I could have imagined back then. Many generations later, this cuneiform became the international writing system of the whole Near East for over two thousand years, borrowed by wave after wave of people who spoke different languages. Recorded and passed down with it was the Sumerian way of counting — the base-60 system that divides a circle into sixty parts.\n\nWhen you look at a clock today — sixty minutes to an hour, sixty seconds to a minute; when you measure angles — three hundred sixty degrees to a circle — all of it was passed down, generation by generation, from the hands of us who sat beside the storehouse keeping accounts.\n\nBack then I only wanted to keep the accounts straight. I never imagined the method I pressed into wet clay would press all the way onto your wristwatch.',
      },
      deliverGoal: 'N7 story (中长期影响) — 符号从只记数和物→能记名字/命令/契约 = 文字从「记东西」长成「记语言」+ 多代后 cuneiform 成近东 2000+ 年国际书写系统被多语言借用 + 六十进制 (1 小时 60 分/1 分 60 秒/圆 360 度源此) + 「我只想记清账，没想到压进湿泥的办法会压到你的手表上」',
      engagementHook: '一小时六十分钟、一圈三百六十度——这套数，是几千年前坐在仓库旁记账的我们留下的。一个只想把账记清的人，怎么会一直影响到你今天的手表？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-scribe-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '但文字这把工具，谁攥着它，它就替谁说话。我得给你看它另一种用法——它怎么替权力撒谎。\n\n时间往后走。城邦之间争水、争地、打仗，原本的战时统帅（lugal）权力越攥越紧，从临时变世袭，成了王。再往后，约公元前 2334 年，一个叫 Sargon（萨尔贡）的人征服了苏美尔各城邦，建起人类已知第一个帝国。\n\n王和帝国，都需要书吏。可这一次，我们手里的芦苇杆，记的不只是大麦了。\n\n比如苏美尔王表——书吏写下的一份名单，开头一句是：「王权从天降下，最早降在 Eridu（埃利都）。」它把历代国王一个个列出来，最早的几位，写成在位成千上万年。\n\n你信吗？当然不能全信。这不是客观历史，是政治宣传。把王权说成「天上给的」，是为了让现任统治者的权力，显得天经地义、不可挑战。\n\n你看，同一支芦苇杆：它能老老实实记账，也能堂而皇之替权力编一个「天命」般的故事。读任何一份记录，你都得问一句：是谁在写，他想让你信什么？',
        en: 'But this tool, writing — whoever holds it, it speaks for them. I must show you another use of it — how it lies for power.\n\nTime moves on. City-states fight over water and land; the wartime commander (the lugal) holds power tighter, going from temporary to hereditary, becoming a king. Later still, around 2334 BCE, a man named Sargon conquered the Sumerian city-states and built humanity\'s first known empire.\n\nKings and empires both need scribes. But this time, the reed in our hands recorded more than barley.\n\nTake the Sumerian King List — a roster written down by scribes, opening with the line: "Kingship descended from heaven; it first descended at Eridu." It names king after king, and the earliest of them are written as reigning for tens of thousands of years.\n\nDo you believe it? Of course you cannot believe all of it. This is not objective history — it is political propaganda. Calling kingship "given from heaven" makes the current ruler\'s power seem natural and beyond challenge.\n\nSee it: the same reed can keep accounts honestly, and can also grandly write power a "heaven-mandate" of a story. With any record, you must ask one thing: who is writing, and what do they want you to believe?',
      },
      deliverGoal: 'N8 story (文字替权力服务) — 城邦争水打仗 lugal 从战时统帅→世袭王 + c.2334 BCE Sargon 征服城邦建人类已知第一个帝国 + 书吏的芦苇杆不只记大麦了 + 苏美尔王表「王权从天降下最早降在 Eridu」/最早几位在位成千上万年 = 不是客观历史是政治宣传 (把王权说成天授让现任权力显得天经地义不可挑战) + 「谁在写他想让你信什么」史料即宣传',
      engagementHook: '同一支芦苇杆，能老实记账，也能堂而皇之替国王编一个「王权从天降下」的故事。当握笔的人想让你信某件事，你怎么分清这是记录，还是宣传？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-scribe-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '文字成熟之后，终于做了一件，连我都没料到的事——它开始写人心。\n\n约公元前 2285 年，Sargon 的女儿 Enheduanna（恩赫杜安娜）被任命为 Ur（乌尔）月神最高女祭司。她写下献给女神 Inanna 的赞美诗，并且，做了一件之前几百年没人做过的事：她署上了自己的名字。\n\n你想想这个对照：从我这样的书吏发明文字算起，几百年来，文字一直是匿名的账房工具——泥板上有数目、有货物，唯独没有「我」。直到这一刻，才第一次有一个具体的人，用它说：「这是我写的。」她被普遍视为人类历史上第一位留下姓名的作者。\n\n又过了些时候，连那位传说中的 Uruk 国王 Gilgamesh（吉尔伽美什）的故事，也被书吏刻进了泥板——里面有友谊，有对死亡的恐惧，有一场大洪水。文字终于从账本，长成了文学。\n\n但请你千万记住那个顺序：先有账本，几百年后，才有史诗。文学，是文明的奢侈品；账目，才是它的地基。',
        en: 'After writing matured, it finally did a thing even I had not expected — it began to write the human heart.\n\nAround 2285 BCE, Sargon\'s daughter Enheduanna was appointed high priestess of the moon god at Ur. She wrote hymns to the goddess Inanna, and did a thing no one had done in the centuries before: she signed her own name.\n\nThink of the contrast: counting from when scribes like me invented writing, for centuries it had been an anonymous accountant\'s tool — on the tablets there were numbers and goods, but never an "I." Only in this moment did a specific person, for the first time, use it to say: "I wrote this." She is widely regarded as the first author in history whose name we know.\n\nSome time later, even the story of that legendary king of Uruk, Gilgamesh, was carved by scribes into tablets — with friendship, the fear of death, and a great flood inside it. Writing had finally grown from ledger into literature.\n\nBut do remember the order: first the ledger, and centuries later, the epic. Literature is a civilization\'s luxury; the account is its foundation.',
      },
      deliverGoal: 'N9 story (文字长成文学) — c.2285 BCE Enheduanna (Sargon 之女/Ur 月神最高女祭司) 写 Inanna 赞美诗并署名 (几百年来文字一直匿名账房工具/泥板有数目货物无「我」/此刻第一次有人说「这是我写的」) + 「被普遍视为」史上第一位留名作者 (hedge) + 后来 Gilgamesh 史诗被刻进泥板 (友谊/惧死/大洪水) 文字从账本长成文学 + 顺序: 先账本几百年后才史诗/文学是奢侈品账目是地基',
      engagementHook: '文字诞生几百年，泥板上只有数目和货物，从没有一个「我」。直到 Enheduanna 署上自己的名字。为什么「我写的」这三个字，要等这么久才出现？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-scribe-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，该怎么评我这个发明文字、又攥着文字的人？两种说法都站得住，你来称。\n\n一种说法：我是人类知识的奠基人。是我，第一次让「记忆」走出脑子、走出一代人，被压进泥里，跨越时间传下去。没有我手里这支芦苇杆，就没有记录、没有积累、没有可以一代代往下传的知识。人类能像今天这样积累文明，起点就在我压下的第一笔账上。\n\n另一种说法：我也是「不平等」的第一个技术员。同一套文字，一边让人类能大规模协作，一边第一次把人精确地分成两种：被记录的，和记录别人的。我让神庙能精确算出每个劳工值多少口粮、能撑几年；我让王权能把「天授」写成白纸黑字。文字越厉害，少数人就越能彻底地管住多数人。\n\n这两边不是「他有功也有过」。是同一件发明的两面——它既是人类协作与记忆的伟大飞跃，又是系统性不平等的第一件趁手工具。\n\n这是一所学校里 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, how should I be judged — the one who invented writing and also held it? Both views stand. You do the weighing.\n\nOne view: I am a founder of human knowledge. It was I who first let "memory" leave the head, leave a single generation, pressed into clay to be passed across time. Without this reed in my hand there would be no record, no accumulation, no knowledge to hand down generation by generation. That humans can build up civilization the way we do today — the start is on the first account I pressed.\n\nThe other view: I am also inequality\'s first technician. The same writing, on one side, let humans cooperate at scale; on the other, for the first time it sorted people precisely into two kinds: the recorded, and those who record others. I let the temple calculate exactly how much ration each laborer was worth and how many years he would last; I let kingship write "heaven-given" down in black and white. The stronger writing grew, the more completely the few could control the many.\n\nThese are not "he did good and also did harm." They are two faces of one invention — both a great leap in human cooperation and memory, AND inequality\'s first handy tool.\n\nThis is the hard problem an AP teacher at a school will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (人类知识奠基人/让记忆走出脑子跨越时间/没这支芦苇杆就没记录积累知识/文明积累起点在第一笔账) / 另一种说法 (不平等第一个技术员/同套文字一边大规模协作一边第一次把人精确分成被记录的与记录别人的/让神庙精算劳工口粮/让王权把天授写成白纸黑字/文字越厉害少数越能管住多数) / 同一发明两面 (协作记忆飞跃 + 系统性不平等趁手工具) / neutral school name (AP 老师) / 想 30 秒 / 两边都站得住 + expectsRealAnswer',
      engagementHook: '我既是人类知识的奠基人，又是「不平等」的第一个技术员——这是同一件发明的两面。一项工具如果既让多数人受益、又让少数人能更彻底地统治多数人，你怎么评价它？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'meso-scribe-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是握笔那一边的声音。\n\n请记住：这只是一边。我讲的「我是知识的奠基人」「文字是了不起的飞跃」，听起来甚至很光荣——这正是握笔者视角最舒服、也最危险的地方：写历史的是我们，所以历史很容易就被写成对我们有利的样子。\n\n但这一遍里，有一群人从头到尾几乎没出声：田里那个种大麦、挖水渠、被我写进口粮配额的劳工——他看着那块决定他吃多少的泥板，一个字也看不懂，他会怎么讲「文字」这件事？还有那个慢慢从战时统帅变成王、要在祭司、军队和百姓之间维持平衡的 lugal——在他眼里，文字、城墙、王权又是什么？等你换上他们的视角，他们会狠狠地挑战你刚才听我说的每一句。\n\n最后，留一样东西给你。还记得我给你看的那块 Kushim 大麦账泥板吗——我压下它、骄傲地说「连最早留名的都是我们记账的人」。\n\n换个视角再走一遍，你会从另一个人的眼睛里，再看见同一块泥板一次。到那时，它对你，可能就不再是一块骄傲的账，而是别的东西了。',
        en: 'What you just heard was the voice of the side that holds the pen.\n\nRemember: it is only one side. My talk of "I am a founder of knowledge," of "writing is a great leap," can even sound glorious — and that is exactly the most comfortable, and most dangerous, thing about the pen-holder\'s view: it is we who write history, so history is easily written to look good for us.\n\nBut in this pass, a group of people barely spoke at all: the laborer in the field who grew the barley, dug the canals, and was written by me into a ration figure — he looks at the tablet that decides how much he eats and cannot read one word of it; how would he tell the story of "writing"? And the lugal who slowly turned from wartime commander into king, who had to balance priests, army, and the people — in his eyes, what are writing, the city walls, and kingship? When you switch to their perspectives, they will challenge, hard, every sentence you just heard from me.\n\nAnd one last thing to leave with you. Do you remember the Kushim barley-account tablet I showed you — the one I pressed and proudly said, "even the first name remembered was one of us bookkeepers"?\n\nWalk this through once more from another perspective, and you will see that same tablet again, through someone else\'s eyes. By then it may no longer be a proud account to you, but something else.',
      },
      deliverGoal: 'N11 close/meta — 你听的是握笔一边 (写历史的是我们/历史易被写成对我们有利最危险) + 还没听到: 田里被我写进口粮配额的劳工 (看不懂决定他吃多少的泥板/会怎么讲文字) + lugal (从战时统帅变王/平衡祭司军队百姓/文字城墙王权在他眼里是什么) 会挑战你听的每句 + 暗示 Kushim 泥板会从另一视角再看见一次 (不直接点破/可能不再是骄傲的账) + expectsRealAnswer',
      engagementHook: '写历史的是我们握笔的人，所以历史很容易被写成对我们有利的样子——这是握笔者视角最危险的地方。你听完我这一边，最想去问田里那个看不懂泥板的劳工什么问题？',
      expectsRealAnswer: true,
    },
  ],
};

export var lugalLens = {
  id: 'lugal-mediator',
  name: 'The Lugal (Early King)',
  nameCn: 'Lugal · 早期的王',
  perspectiveTag: 'between-temple-and-army',
  icon: '♟️',
  description: {
    cn: '一个早期苏美尔城邦的 lugal（卢伽尔，字面意思「大人物」→ 王）。以 Uruk 传说国王 Gilgamesh（吉尔伽美什）为锚，后世史诗把他写成三分之二是神的英雄，为 Uruk 筑起巨大城墙；把传说剥开，他代表的是一个真实的历史过程：权力从神庙（祭司）转移到宫殿（王）。lugal 本来是打仗时临时推出来的统帅，可临时的军权一旦尝到甜头，就很难还回去。这一遍让你站在所有人中间：你要在祭司、军队、城里百姓之间维持平衡，又要不断把更多权力攥进自己手里。你是「国家」这个东西从无到有时，最关键的那个角色。',
    en: 'A lugal (literally "big man" → king) of an early Sumerian city-state. Anchored on Uruk\'s legendary king Gilgamesh - later epics made him a hero two-thirds god who raised great walls for Uruk; peel away the legend and he stands for a real historical process: power moving from the temple (priests) to the palace (king). The lugal began as a war leader pushed up temporarily, but once temporary military power tastes good, it is hard to hand back. This pass puts you in the middle of everyone: you must balance priests, army, and the people of the city, while pulling more and more power into your own hands. You are the key figure at the moment "the state" came into being out of nothing.',
  },
  storyboard: [
    {
      id: 'meso-lugal-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '在祭司说了算的城里，有一个人，原本谁也没把他当一回事——直到打仗的那一天。\n\n我是个 lugal（卢伽尔）。这个词，字面意思就是「大人物（big man）」。\n\n我得先告诉你一个反直觉的事：在最早的苏美尔城里，说了算的不是我，是神庙的祭司（en）。我这个「大人物」，本来只是打仗时临时被推出来的统帅。仗打完，按理我就该把权力还回去。\n\n可你已经猜到了：临时的权力一旦尝到甜头，就很难还回去。\n\n后世会用一个传说包住我的名字——Uruk 的国王 Gilgamesh（吉尔伽美什），三分之二是神、为城筑起巨墙的英雄。把那层神话剥开，里面是一个真实的过程：权力，怎么从神庙的祭司，一步步挪进了王的宫殿。\n\n这一遍，你坐进我这个位置。你站在祭司、军队、百姓中间，谁都要稳住，又谁都想压过——你要亲手，把「国家」这个从没存在过的东西，攥出来。',
        en: 'In a city the priests ran, there was a man no one thought much of — until the day of war.\n\nI am a lugal. The word means, literally, "big man."\n\nI must tell you a counter-intuitive thing first: in the earliest Sumerian cities, the one in charge was not me — it was the temple priest (the en). I, this "big man," was at first only a commander pushed up temporarily for war. When the war ended, by rights I should have handed the power back.\n\nBut you have already guessed: once temporary power tastes good, it is hard to hand back.\n\nLater ages would wrap a legend around my name — Gilgamesh, king of Uruk, a hero two-thirds god who raised great walls for the city. Peel away that myth, and inside is a real process: how power moved, step by step, from the temple\'s priests into the king\'s palace.\n\nThis pass puts you in my seat. You stand among priests, army, and people — you must steady them all, yet you want to rise above them all. You must, with your own hands, squeeze out the thing called "the state," which had never existed before.',
      },
      deliverGoal: 'N1 hook — lugal 字面「大人物 big man」自我介绍 + 反直觉: 最早苏美尔城说了算的是神庙祭司 en 不是 lugal/lugal 本是战时临时统帅仗完该还权 + 「临时权力尝到甜头难还回去」+ 后世用 Gilgamesh 传说包住 (2/3 神/筑巨墙/剥开是真实过程: 权力从神庙祭司挪进王的宫殿) + 这一遍视角 (站祭司军队百姓中间都要稳住又都想压过/亲手攥出从没存在过的「国家」)',
      engagementHook: '我本来只是打仗时临时推出来的统帅，仗一打完就该交权——可权力一旦尝到甜头，谁还愿意还回去？你身边有没有「临时的」后来赖着不走的权力？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-lugal-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '要懂我为什么能崛起，先得看清我崛起的这座城，是怎么长出来的。\n\n这片两河之间的平原（约今伊拉克南部），又热又干，几乎不下雨。底格里斯河和幼发拉底河每年泛滥，留下肥土，但洪水时间不对、时大时小。所以这里从头就是一道工程题：不合伙挖渠引水，就没饭吃。\n\n渠挖成了，水引来了，地能养活的人远超别处——粮食有了富余。富余的粮食，养活了一大批不下田的人：祭司、工匠、商人、士兵，还有我这样能带兵的人。\n\n人聚得越多，城就越大。鼎盛时，Uruk 城里挤了大约四万人，是当时世界最大的城市。城越大，事就越复杂：要分水、要修渠、要防外敌、要跟邻城争地。\n\n而苏美尔从来不是一个统一的大国，它是一堆互相竞争、常常打仗的城邦——每座城有自己的守护神、自己的神庙、自己的统治者。\n\n争斗一多，「打仗」就成了头等大事。而我，正是因为打仗，才有了出头的机会。',
        en: 'To understand why I could rise, first see how the city I rose in grew.\n\nThis plain between two rivers (roughly today\'s southern Iraq) is hot and dry, with almost no rain. The Tigris and the Euphrates flood each year, leaving rich soil, but the floods come at the wrong time and are unpredictable. So from the start this was an engineering problem: dig no canals together, and you do not eat.\n\nThe canals were dug, the water led in, and the land could feed far more people than anywhere else — there was surplus grain. Surplus grain fed a whole crowd of people who never went into the fields: priests, craftsmen, merchants, soldiers, and people like me who could lead troops.\n\nThe more people gathered, the larger the city. At its peak, Uruk packed in about forty thousand people, the largest city in the world at the time. The larger the city, the more complicated its affairs: dividing water, repairing canals, guarding against enemies, fighting neighboring cities over land.\n\nAnd Sumer was never one unified country — it was a cluster of competing, often warring city-states, each with its own patron god, its own temple, its own ruler.\n\nThe more the fighting, the more "war" became the first priority. And it was exactly because of war that I got my chance to rise.',
      },
      deliverGoal: 'N2 setup — 两河平原 (约今伊拉克南部) 极旱/Tigris-Euphrates 泛滥肥土但时间不对 = 工程题不挖渠没饭吃 + 渠成水来→剩余粮食养活不下田的人 (祭司/工匠/商人/士兵/带兵的人) + 人聚成城 Uruk 鼎盛约 4 万人世界最大/城越大事越复杂 (分水修渠防外敌争地) + 苏美尔非统一大国是互相竞争常打仗的城邦 (各有守护神神庙统治者) + 「争斗多打仗成头等大事我因打仗出头」',
      engagementHook: '苏美尔不是一个大帝国，是一堆互相争水、争地、打仗的城邦。正因为天天要打仗，像我这样会带兵的人，才有了出头的机会。乱世为什么总是给「能打的人」让路？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-lugal-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '现在看清我要在中间斡旋的，到底是哪几股力量。这盘棋有三方，每一方手里都攥着我离不开的东西。\n\n第一方，祭司（en）。神庙是这座城里最大的「公司」——仓库、银行、工厂、田产，全在它手里。它名义上属于守护神，管着大片大麦田、成千劳工、巨大仓库。它有钱、有粮、有人，还有「神在我们这边」的话语权。在我之前，城里真正说了算的，是他们。\n\n第二方，军队。这是我的根。城邦要打仗，就得有人带兵；我能崛起，靠的就是大家在危急时刻需要一个统帅。可军队既是我的力量，也是我的麻烦——养它要粮，用它要由头。\n\n第三方，城里的百姓——种地的、挖渠的、做工的大多数。他们的劳动养活整座城。他们要的不复杂：有饭吃、别老打仗、别被欺负得太狠。\n\n我夹在这三方中间。我想往上爬，可我离不开任何一方：祭司的粮和神、军队的刀、百姓的活儿。我的全部本事，就是在这三股力量之间，找一条让我能越站越高、又不让它们联手把我掀翻的路。',
        en: 'Now see clearly the forces I must broker among. This board has three sides, and each holds something I cannot do without.\n\nThe first side: the priests (en). The temple is the biggest "company" in the city — storehouse, bank, workshop, landlord, all in its hands. In name it belongs to the patron god, controlling vast barley fields, thousands of workers, huge storehouses. It has money, grain, people, and the authority to say "the god is on our side." Before me, the ones who truly ran the city were them.\n\nThe second side: the army. This is my root. A city-state must fight, and so someone must lead troops; I could rise only because everyone, in a moment of danger, needed a commander. But the army is both my strength and my trouble — feeding it takes grain, using it takes a pretext.\n\nThe third side: the city\'s people — the majority who farm, dig canals, and labor. Their work feeds the whole city. What they want is not complicated: food to eat, not to be at war all the time, not to be pushed around too hard.\n\nI am wedged among these three. I want to climb, yet I cannot do without any of them: the priests\' grain and god, the army\'s blades, the people\'s labor. My whole skill is to find, among these three forces, a road that lets me stand higher and higher without letting them join hands and overturn me.',
      },
      deliverGoal: 'N3 setup — 三方力量 (lugal 要在中间斡旋): ① 祭司 en/神庙=最大「公司」(仓库银行工厂田产/名义属守护神/管田劳工仓库/有钱粮人+「神在我们这边」话语权/在我之前真正说了算) ② 军队=我的根 (城邦要打仗需统帅我靠此崛起/既是力量也是麻烦养它要粮用它要由头) ③ 百姓 (种地挖渠做工大多数养活全城/要饭吃别老打仗别被欺负太狠) + 我夹中间离不开任何一方 + 「全部本事是找一条越站越高又不被联手掀翻的路」',
      engagementHook: '我夹在祭司、军队、百姓三方中间，谁都离不开，谁都想压过。当你必须靠很多人、又想爬到他们头上时，这是一门什么样的本事？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-lugal-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n邻城来抢水了。城邦之间为了一条灌溉渠、一片大麦田，又要打仗。城里乱成一团，祭司也慌了——神庙能管账、能拜神，可它不会打仗。\n\n所有人的目光，落到了你身上。\n\n这是你一生最关键的时刻。你被推到城邦的最前面，成了 lugal——战时的统帅。你召集人手，把一群慌乱的农夫和工匠，编成能听号令、能进退的队伍。你带他们守住了水渠，打退了邻城。\n\n仗赢了。城保住了。所有人都松了一口气。\n\n按老规矩，仗一打完，你这个临时统帅就该把权力交回去，回去过普通人的日子。\n\n可你站在打了胜仗的人群中间，手里第一次握着这么多人的服从。你心里有个声音在问：为什么要还回去？\n\n你愿不愿意，就在这一刻，做那个不肯松手的人——把「为了打仗临时给我的权力」，悄悄变成「永远是我的权力」？',
        en: 'Now you are me.\n\nThe neighboring city has come to seize water. City-states are at war again over a single canal, a stretch of barley field. The city is in chaos, and the priests are alarmed too — the temple can keep accounts and worship gods, but it cannot fight a war.\n\nEveryone\'s eyes fall on you.\n\nThis is the most crucial moment of your life. You are pushed to the very front of the city-state and become the lugal — the wartime commander. You gather men, form a crowd of panicked farmers and craftsmen into a force that can obey orders and advance and pull back. You lead them to hold the canal and drive off the neighboring city.\n\nThe war is won. The city is saved. Everyone breathes out.\n\nBy the old rule, once the war ends, you, the temporary commander, should hand the power back and return to ordinary life.\n\nBut you stand in the middle of a crowd that has just won, holding, for the first time, the obedience of this many people. A voice in you asks: why hand it back?\n\nWill you, in this very moment, be the one who refuses to let go — and quietly turn "the power lent to me for war" into "power that is mine forever"?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 邻城抢水城邦争渠争田又打仗/城里乱祭司慌 (神庙能管账拜神不会打仗) + 所有目光落到你 = 一生最关键时刻被推到最前成 lugal 战时统帅 (把慌乱农夫工匠编成能听号令的队伍/守住水渠打退邻城) + 仗赢城保住按老规矩该交权回普通日子 + 但第一次握这么多人服从心里问「为什么还回去」+ 你愿不愿做不肯松手的人把「临时权力」悄悄变成「永远的权力」',
      engagementHook: '仗赢了，按规矩我该交权回去当普通人。可我手里第一次握着这么多人的服从——你站在我的位置，舍得松手吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-lugal-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '不肯松手，只是第一步。难的是：怎么把刀尖上抢来的权力，变成谁也夺不走的位子？\n\n我不能只靠军队。光靠刀，今天能上去，明天就被另一把刀掀下来。我得让我的权力，看起来「本该如此」。\n\n第一步，我盖宫殿。本来城里最高、最气派的建筑是神庙塔（ziggurat），那是祭司的地盘。现在，我在它旁边，盖起一座属于王的宫殿——和神庙并立，慢慢地，甚至要压过它。让全城人天天看着：这座城里，除了神，还有一个王。\n\n第二步，更阴的一步，我得让人相信：我的权力，也是神给的。还记得书吏写的那份苏美尔王表吗——开头一句「王权从天降下」。那不是给祭司写的，那是给我这样的王写的。我让书吏把「王权天授」一笔一笔写进泥里，让我的位子，显得像神安排好的，不可挑战。\n\n你看明白这步棋了吗？我没有跟祭司翻脸抢神。我做的更高明——我把「神」也变成我权力的一部分。',
        en: 'Refusing to let go is only the first step. The hard part is: how to turn power seized at the point of a blade into a seat no one can take from you?\n\nI cannot rely on the army alone. By the blade alone, I can rise today and be knocked down tomorrow by another blade. I must make my power look as if it "was always meant to be."\n\nFirst step: I build a palace. The tallest, grandest building in the city was the temple tower (the ziggurat), the priests\' ground. Now, beside it, I raise a palace that belongs to the king — standing next to the temple, and slowly, even rising above it. So the whole city sees, day after day: in this city, besides the god, there is also a king.\n\nSecond step, the darker one: I must make people believe my power, too, comes from the god. Remember the Sumerian King List the scribes wrote — the opening line, "kingship descended from heaven"? That was not written for the priests. That was written for kings like me. I have the scribes press "kingship is heaven-given" into the clay, stroke by stroke, so my seat looks arranged by the god, beyond challenge.\n\nDo you see this move? I did not fall out with the priests and seize their god. I did something cleverer — I made "the god," too, a part of my power.',
      },
      deliverGoal: 'N5 story — 不肯松手只是第一步/难在把刀尖抢来的权力变成谁也夺不走的位子 + 不能只靠军队 (光靠刀今天上去明天被掀)/要让权力看起来「本该如此」+ 第一步盖宫殿 (本来最高最气派是 ziggurat 祭司地盘/现在旁边盖王的宫殿并立慢慢压过/让全城天天看到除了神还有一个王) + 第二步更阴: 让人信我的权力也是神给的 (苏美尔王表「王权从天降下」是给王写的/让书吏把天授一笔笔写进泥里位子显得神安排好不可挑战) + 「没跟祭司翻脸抢神，把神也变成我权力的一部分」',
      engagementHook: '我没有跟祭司翻脸去抢神——我做了更高明的一步：让「神」也变成我权力的一部分。把对手最厉害的武器变成自己的，这招高明在哪？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-lugal-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得让你看一样东西——一块泥板。你可能会奇怪，一个王，为什么离不开一块记账的泥。\n\n那是一块大麦账的泥板，账目旁边压着一个标记：Kushim。它本是神庙书吏记的一笔再普通不过的仓库账。\n\n（这块泥板是真的，今天还在。书吏会骄傲地跟你说，这是最早留名的人之一。但坐在我这个王的位置上，我看这块泥，看到的是另一样东西。)\n\n我看到的，是「我的城到底有多少家底」。仓库里有多少大麦、能养多少兵、能撑多久打一场仗——全在这种泥板上。没有这些账，我连自己有几个人、几袋粮都不知道，怎么打仗，怎么收税，怎么征人去挖渠、去筑墙？\n\n所以书吏看这块泥，看到的是「文字的荣耀」；我看这块泥，看到的是「权力的家底」。\n\n这就是我和祭司、和书吏的关系：我离不开他们的账，可最终，是我用他们的账，去打仗、去收税、去把这座城越攥越紧。笔在他们手里，但用笔算出来的那点力量，最后流进了我的宫殿。',
        en: 'I must show you something — a clay tablet. You may wonder why a king cannot do without a tablet of accounts.\n\nIt is a barley-account tablet, with a mark pressed beside the account: Kushim. It was, in origin, the most ordinary storehouse account, recorded by a temple scribe.\n\n(This tablet is real, and it still exists today. The scribe will proudly tell you it is one of the earliest names ever written down. But sitting in my seat as king, what I see in this clay is another thing.)\n\nWhat I see is "exactly how much my city is worth." How much barley is in the storehouse, how many soldiers it can feed, how long it can sustain a war — all of it is on tablets like this. Without these accounts, I would not even know how many men, how many sacks of grain I have; how then do I fight a war, collect taxes, conscript people to dig canals and raise walls?\n\nSo the scribe looks at this clay and sees "the glory of writing"; I look at this clay and see "the assets of power."\n\nThis is my relationship with the priests and the scribes: I cannot do without their accounts, yet in the end it is I who use their accounts — to wage war, to tax, to grip this city tighter and tighter. The pen is in their hands, but the power counted out by that pen flows, at last, into my palace.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Kushim 大麦账泥板从 lugal 角度 (本是神庙书吏记的普通仓库账) + anti-fab 括号 (泥板真/书吏骄傲说最早留名之一/但王看到另一样东西) + 王看到的是「我的城有多少家底」(仓库多少大麦/养多少兵/撑多久打仗/没账不知有几人几袋粮怎么打仗收税征人) + 「书吏看到文字荣耀，我看到权力家底」+ 「笔在他们手里，但算出来的力量最后流进我的宫殿」',
      engagementHook: '同一块记账的泥板，书吏看到「文字的荣耀」，我这个王看到「权力的家底」。一样东西，握权的人和做事的人看到的，为什么常常完全不同？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-lugal-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我筑墙。这是我留给这座城最显眼的东西。\n\n传说里，Gilgamesh 为 Uruk 筑起巨大的城墙——高、厚、绕城一圈，挡住外敌。后人记住我，往往就记住这堵墙。\n\n墙是真有用的：邻城常来抢水抢地，有了墙，城里的人和粮食才安全。从这个角度看，我是个保护者。\n\n可你也得看见墙的另一面。这么大一圈墙，谁去筑？是城里那些种地、挖渠的百姓，被一批批征去搬泥、烧砖、垒墙。砖是他们烧的，墙是他们垒的，墙护的城是他们的家——但筑墙这件事本身，是我的命令、我的功劳。墙上刻的，是我的名字，不是他们的。\n\n这就是我这种角色最微妙的地方：我做的很多事，确实在「保护」这座城。可这些事，又总是同时，在把这座城和城里的人，更紧地攥进我手里。\n\n保护，和控制，在我这儿，常常是同一个动作。你分得清吗？',
        en: 'I build walls. This is the most visible thing I leave this city.\n\nIn legend, Gilgamesh raised great walls for Uruk — tall, thick, circling the city, holding off enemies. Later ages remember me, and often it is this wall they remember.\n\nThe wall is truly useful: neighboring cities often come to seize water and land, and with a wall, the people and grain inside are safe. From this angle, I am a protector.\n\nBut you must also see the other side of the wall. Such a great ring of wall — who builds it? It is the city\'s people, the ones who farm and dig canals, conscripted batch after batch to haul mud, fire bricks, and stack the wall. They fired the bricks, they stacked the wall, and the city the wall protects is their home — but the building of the wall itself is my order, my achievement. Carved on the wall is my name, not theirs.\n\nThis is the most delicate thing about my kind of role: much of what I do truly "protects" this city. Yet these same things always, at the same time, grip the city and its people tighter in my hand.\n\nProtection and control, in me, are often the same act. Can you tell them apart?',
      },
      deliverGoal: 'N7 story — lugal 筑墙 (最显眼的遗产/传说 Gilgamesh 为 Uruk 筑巨墙高厚绕城挡外敌/后人记住我就记住这墙) + 墙真有用 (邻城常抢水地有墙人和粮安全/从这角度我是保护者) + 墙另一面: 谁去筑?城里种地挖渠的百姓被征去搬泥烧砖垒墙 (砖他们烧墙他们垒护的是他们的家/但筑墙是我的命令我的功劳/墙刻我的名不是他们的) + 「保护和控制在我这儿常是同一个动作，你分得清吗」',
      engagementHook: '墙护着城里人的家，砖是他们烧的、墙是他们垒的，可墙上刻的是我的名字。保护他们，和控制他们，常常是我同一个动作——你分得清这两件事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-lugal-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这一生攥权的路，没有停在我这里。它一直往前，走向一个我没能亲眼看到的终点——帝国。\n\n约公元前 2334 年，北边来了一个比所有 lugal 都更狠的人：Sargon（萨尔贡）。他做的事，是把我这条路推到了头。\n\n我这样的 lugal，争的是一座城、一片水、一段渠。我的雄心，到一座城邦的城墙为止。可 Sargon 不一样：他一座接一座地征服苏美尔的城邦，第一次把许多城，拢到同一个统治者手下——这就是人类已知的第一个帝国（阿卡德帝国）。\n\n他还把统治变成了一套制度：派总督去各地、统一度量、用阿卡德语。换句话说，他不只是占了更多地，他发明了「怎么管住一大片地、一大群陌生人」的办法。\n\n你看这条线：祭司 → lugal（王）→ Sargon（帝国）。权力一级一级往上攥，攥的范围一圈一圈往外扩。我是这条线中间的一环——「国家」从神庙手里挪到王手里，是我这一环做的；而把「国家」放大成「帝国」，是 Sargon 接着我往下走的那一步。',
        en: 'My life\'s road of gathering power did not stop with me. It kept going forward, toward an end I did not live to see — empire.\n\nAround 2334 BCE, from the north came a man fiercer than any lugal: Sargon. What he did was push my road all the way to its end.\n\nA lugal like me fights for one city, one share of water, one stretch of canal. My ambition stops at a city-state\'s walls. But Sargon was different: he conquered the Sumerian city-states one after another and, for the first time, gathered many cities under one ruler — this is humanity\'s first known empire (the Akkadian Empire).\n\nHe also turned rule into a system: sending governors to the regions, standardizing measures, using the Akkadian language. In other words, he did not just take more land — he invented the method of "how to control a vast region and a vast crowd of strangers."\n\nSee the line: priest → lugal (king) → Sargon (empire). Power is gathered upward rung by rung, and the range it grips widens ring by ring. I am one link in the middle of that line — moving "the state" from the temple\'s hands into the king\'s hands was my link; and enlarging "the state" into "the empire" was the step Sargon took, carrying on from me.',
      },
      deliverGoal: 'N8 story (攥权之路的终点: 帝国) — 我攥权的路没停在我这往前走向帝国 + c.2334 BCE 北边 Sargon 比所有 lugal 更狠把这条路推到头 + lugal 争一座城一片水一段渠雄心到城墙为止 vs Sargon 一座接一座征服城邦第一次把许多城拢到同一统治者下 = 人类已知第一个帝国 (阿卡德) + 把统治变制度 (派总督/统一度量/用阿卡德语 = 发明「怎么管住一大片地一大群陌生人」) + 线: 祭司→lugal(王)→Sargon(帝国) 权力一级级往上攥范围一圈圈外扩 + 「我这环把国家从神庙挪到王手里，Sargon 接着把国家放大成帝国」',
      engagementHook: '祭司 → 王 → 帝国，权力一级一级往上攥、一圈一圈往外扩。我把「国家」从神庙挪到王手里，Sargon 又把它放大成帝国。这条越攥越大的路，有尽头吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-lugal-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我攥来的这套东西，会不会哪天垮掉？会。而埋下隐患的，恰恰是养活这一切的那项本事——灌溉。\n\n这里有个残酷的反讽。让我的城强大的，是灌溉：挖渠引水，养出剩余粮食，养出军队，养出我。可在这又干又热的地方，渠里的水一年年蒸发，把盐分一点点留在土里（这叫 salinization，盐碱化）。土越来越咸，大麦越收越少。\n\n你想想这意味着什么：我的兵、我的墙、我的宫殿、我的权力，归根到底都是靠大麦养着的。粮少了，一切都跟着晃。这是后来一些城邦衰落、人口南移北迁的结构性原因之一——让文明崛起的那项技术，埋着它自己的隐患。\n\n再退一步，给你看一张更大的地图。当我在两河流域筑墙、攥权的时候，地球另一端的黄河流域，还没有城、没有文字。中国最早的国家级社会（二里头）要再晚一千五百年上下才出现，最早确凿的文字（甲骨文）更要到约公元前 1250 年。\n\n两条大河，各自靠农业剩余、独立地从村庄走向国家。我们之间几乎没有接触，却各自走到了「城市 + 文字 + 国家」。这不是谁抄谁——是人类在两个互不相通的地方，各自把权力攥成了「国家」。',
        en: 'Will this thing I gathered one day collapse? It will. And the one who planted the danger is exactly the skill that fed all of it — irrigation.\n\nHere is a cruel irony. What made my city strong was irrigation: digging canals, leading in water, raising surplus grain, raising an army, raising me. But in this dry, hot place, the canal water evaporates year after year, leaving salt little by little in the soil (this is salinization). The soil grows saltier, and barley yields fall.\n\nThink what this means: my soldiers, my walls, my palace, my power — all of it, in the end, is fed by barley. When grain falls, everything sways with it. This is one structural reason some city-states later declined and populations shifted — the very technology a civilization rose on carried the seed of its own trouble.\n\nStep back once more, and look at a larger map. While I was building walls and gathering power between the two rivers, the Yellow River valley on the other side of the earth still had no cities and no writing. China\'s earliest state-level society (Erlitou) would not appear for about another 1,500 years, and its earliest certain writing (oracle-bone script) not until about 1250 BCE.\n\nTwo great rivers, each on its own, on farming surplus, walked from village to state. There was almost no contact between us, yet each arrived at "cities + writing + states." This is not one copying the other — it is humans, in two places that never spoke to each other, each squeezing power into "the state."',
      },
      deliverGoal: 'N9 story (隐患 + §8 中国桥, mediator) — 我攥的东西会垮/埋隐患的恰是灌溉 + 反讽: 灌溉养剩余粮食养军队养我/但干热地方渠水蒸发盐分留土 (salinization 盐碱化) 土越咸大麦越少 + 兵墙宫殿权力归根靠大麦养/粮少一切晃 = 部分城邦衰落人口迁移结构性原因之一/技术埋自己隐患 + §8 中国桥: 我筑墙攥权时黄河流域还没城没文字/二里头晚约 1500 年/甲骨文约前 1250 + 两条大河独立从村庄走向国家几乎无接触却各自走到「城市+文字+国家」/不是谁抄谁是各自把权力攥成国家',
      engagementHook: '让我的城强大的灌溉，正在用盐一点点毁掉我的土地。而地球另一端的黄河流域，几乎没跟我们接触，却各自独立地也走到了「城市+文字+国家」——这是巧合，还是某种必然？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-lugal-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，该怎么评我这个把权力从神庙攥进宫殿的人？两种说法都站得住，你来称。\n\n一种说法：我是「国家」的助产士。在我之前，城里只有神庙的祭司在管事，城邦之间一打仗就乱。是我，把一群慌乱的人编成军队、守住了城；是我，盖起宫殿、立起王权，让这座城有了一个能拍板、能调动所有人去挖渠筑墙、能在乱世里护住百姓的中心。没有 lugal 这样的角色，「国家」这个能让成千上万陌生人一起活下去的东西，根本长不出来。\n\n另一种说法：我是把「自由」收走的那个人。在我把权力越攥越紧之前，权力是分散的——祭司管神、百姓管自己的地。是我，借着打仗的由头，把临时的兵权变成了世袭的王权；是我，让书吏把「王权天授」写进泥里，让我的统治变得不可挑战。我护城，也用城；我筑墙，也用筑墙的人。「国家」这个东西从我手里成形的那一刻，多数人也第一次，被一个高高在上的权力，牢牢摁住了。\n\n这两边不是「他是好王还是坏王」。是同一个我的两面——「国家」的缔造者，和把多数人摁进「被统治」位置的那只手，是同一只手。\n\n这是一所学校里 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, how should I be judged — the one who squeezed power from the temple into the palace? Both views stand. You do the weighing.\n\nOne view: I am the midwife of "the state." Before me, only the temple priests ran things in the city, and city-states fell into chaos whenever war came. It was I who formed a crowd of panicked people into an army and held the city; it was I who built the palace and raised kingship, giving the city a center that could decide, mobilize everyone to dig canals and raise walls, and shield the people in chaotic times. Without a role like the lugal, "the state" — the thing that lets thousands of strangers live together — could never grow at all.\n\nThe other view: I am the one who took "freedom" away. Before I gripped power tighter and tighter, power was scattered — priests ran the god, the people ran their own land. It was I who, under the pretext of war, turned temporary military command into hereditary kingship; it was I who had the scribes write "kingship is heaven-given" into the clay, making my rule beyond challenge. I shielded the city, and I used the city; I built the wall, and I used the people who built it. The moment "the state" took shape in my hands, the majority were also, for the first time, pressed down hard by a power towering over them.\n\nThese are not "was he a good king or a bad king." They are two faces of the same me — the founder of "the state" and the hand that pressed the majority into the position of "the ruled" are the same hand.\n\nThis is the hard problem an AP teacher at a school will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (mediator) — 一种说法 (「国家」的助产士/我之前只有祭司管事城邦一打仗就乱/我编军队守城盖宫殿立王权给城一个能拍板调动护百姓的中心/没 lugal 国家长不出来) / 另一种说法 (把自由收走的人/我之前权力分散 (祭司管神百姓管地)/我借打仗由头把临时兵权变世袭王权/让书吏写天授使统治不可挑战/护城也用城筑墙也用筑墙的人/国家成形那刻多数人第一次被高高在上的权力摁住) / 同一个我两面 (国家缔造者 + 把多数人摁进被统治位置的手是同一只手) / neutral school name (AP 老师) / 想 30 秒 / 两边都站得住 + expectsRealAnswer',
      engagementHook: '我既是「国家」的助产士，又是把多数人摁进「被统治」位置的那只手——而这是同一只手。一个让大家能一起活下去、却也让大家头上多了个王的人，该怎么评？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'meso-lugal-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是攥权那一边的声音。\n\n请记住：这只是一边。我讲的「我是国家的助产士」「没有我护不住城」，听起来甚至很有担当——这正是统治者视角最危险的地方：它能把「攥权」讲成「担当」，把「控制」讲成「保护」，而且讲得让你点头。\n\n但这一遍里，有两群人，我的声音盖过了他们。一群是田里那个种大麦、挖渠、被征去筑墙的劳工——城墙是他垒的，墙上却刻着我的名字，他会怎么讲「这座城是谁的城」？另一群是那个坐在仓库旁、替我记下全城家底的书吏——笔在他手里，可算出来的力量流进了我的宫殿，他又会怎么讲文字和权力？等你换上他们的视角，他们会狠狠地挑战你刚才听我说的每一句。\n\n最后，留一样东西给你。还记得那块 Kushim 大麦账泥板吗——书吏说它是「文字的荣耀」，我说它是「权力的家底」。\n\n换个视角再走一遍，你会从田里那个人的眼睛里，再看见同一块泥板一次。那时你也许会发现：同一块泥，第三个人看到的，既不是荣耀，也不是家底，而是他自己被算成了一个数字。',
        en: 'What you just heard was the voice of the side that grips power.\n\nRemember: it is only one side. My talk of "I am the midwife of the state," of "without me the city could not be held," can even sound responsible — and that is exactly the most dangerous thing about the ruler\'s view: it can tell "gripping power" as "taking responsibility," tell "control" as "protection," and tell it in a way that makes you nod.\n\nBut in this pass, there are two groups my voice drowned out. One is the laborer in the field who grew the barley, dug the canals, and was conscripted to build the wall — he stacked the wall, yet my name is carved on it; how would he tell "whose city this is"? The other is the scribe who sat beside the storehouse and recorded the whole city\'s assets for me — the pen was in his hand, yet the power it counted out flowed into my palace; how would he tell the story of writing and power? When you switch to their perspectives, they will challenge, hard, every sentence you just heard from me.\n\nAnd one last thing to leave with you. Do you remember the Kushim barley-account tablet — the scribe called it "the glory of writing," I called it "the assets of power"?\n\nWalk this through once more from another perspective, and you will see that same tablet again, through the eyes of the man in the field. Then you may find: in the same clay, what the third person sees is neither glory nor assets, but himself, counted into a single number.',
      },
      deliverGoal: 'N11 close/meta (mediator) — 你听的是攥权一边 (能把攥权讲成担当/控制讲成保护让你点头最危险) + 还没听到 (我的声音盖过他们): 田里被征去筑墙的劳工 (墙他垒的却刻我的名/会怎么讲「这座城是谁的城」) + 替我记全城家底的书吏 (笔在他手算出的力量流进我宫殿/会怎么讲文字和权力) 会挑战你听的每句 + 暗示 Kushim 泥板会从田里那人视角再看见一次 (书吏说荣耀我说家底/第三人看到的是自己被算成一个数字) + expectsRealAnswer',
      engagementHook: '我能把「攥权」讲成「担当」、把「控制」讲成「保护」，还讲得让你点头——这是统治者视角最危险的地方。你听完我这一边，最想去问那个垒墙、墙上却刻着我名字的劳工什么问题？',
      expectsRealAnswer: true,
    },
  ],
};

export var laborerLens = {
  id: 'temple-laborer-receiving-end',
  name: 'The Temple Laborer',
  nameCn: '神庙田里的劳工',
  perspectiveTag: 'a-name-once-on-a-ledger',
  icon: '🌾',
  description: {
    cn: '公元前三千纪，世界第一座大城 Uruk 周边，一个神庙名下的劳工。这是这门课的 DEFAULT 视角，也是最该被听见的那一个。他没有确切姓名，因为对绝大多数这样的人，历史只在账本上为他留了一行：领了多少口粮。他可能在大麦田里弯腰割穗，可能在灼热的太阳下挖深灌溉渠，可能在作坊里搓泥砖、织羊毛布。他的口粮按天发，记在书吏的泥板上，而他本人不识字，看不懂那块决定他吃多少的泥板。这一遍让你站在文明的最底层往上看，问一个 AP 级别的问题：一座城的伟大，是用谁的劳动、谁的不被记住换来的？',
    en: 'In the 3rd millennium BCE, around Uruk, the world\'s first great city, a laborer owned by the temple. This is the DEFAULT perspective of this lesson, and the one that most needs to be heard. He has no exact name - because for the vast majority of such people, history left only one line on a ledger: how much grain they received. He might be bent over cutting heads of barley, or digging a deep irrigation canal under a scorching sun, or in a workshop pressing mud bricks and weaving wool cloth. His ration is handed out by the day and written on the scribe\'s tablet - and he himself cannot read, cannot understand the tablet that decides how much he eats. This pass puts you at the very bottom of civilization looking up, asking an AP-level question: a city\'s greatness - paid for with whose labor, and whose being-forgotten?',
  },
  storyboard: [
    {
      id: 'meso-laborer-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '历史课讲苏美尔，总说它是「文明的光荣起点」——人类第一座城、第一种文字。这一遍，你要从最底下、最不被人提起的那个位置，来看这份「光荣」。\n\n公元前三千纪，世界第一座大城 Uruk（乌鲁克）周边的大麦田里。我是个劳工，属于神庙。\n\n我不告诉你我的名字——因为我根本没有一个被记下来的名字。对像我这样的几十万人，历史只在账本上留了一行：领了多少口粮。仅此而已。\n\n你别去史书里找我。史书里有国王、有英雄、有第一个署名的诗人。没有我。我种的大麦、挖的水渠、搬的泥砖，养活了这座城，可这座城几乎没记住我是谁。\n\n这一遍，你蹲下来，蹲到这座光荣城市的最底层，从我这双割大麦、磨出茧的手往上看。你会看见一个历史课很少讲的真相：每一座伟大的城底下，都压着一群没被写进去的人。',
        en: 'When history class teaches Sumer, it always calls it "the glorious beginning of civilization" — humanity\'s first city, its first writing. This pass, you will look at that "glory" from the very bottom, from the position least often mentioned.\n\nIn the 3rd millennium BCE, in the barley fields around Uruk, the world\'s first great city. I am a laborer, owned by the temple.\n\nI will not tell you my name — because I have no name that was ever written down. For the hundreds of thousands of people like me, history left only one line on a ledger: how much grain they received. That is all.\n\nDo not look for me in the history books. The history books have kings, heroes, the first poet to sign her name. They do not have me. The barley I grew, the canals I dug, the mud bricks I carried fed this city, yet this city barely remembered who I was.\n\nThis pass, you crouch down — down to the very bottom of this glorious city, and look up from these hands of mine, which cut barley and are worn with calluses. You will see a truth history class rarely tells: beneath every great city is pressed a crowd of people who were never written in.',
      },
      deliverGoal: 'N1 hook (DEFAULT/receiving-end) — 历史课总说苏美尔「文明光荣起点」/这一遍从最底层看这份光荣 + 公元前三千纪 Uruk 周边大麦田/我是神庙名下的劳工 + 不给名字 (根本没有被记下来的名字/几十万人历史只留一行: 领了多少口粮) + 「史书里有国王英雄第一个署名诗人，没有我/我种的大麦挖的渠养活城但城没记住我」+ 这一遍蹲到最底层从割大麦的手往上看 + 「每座伟大的城底下都压着一群没被写进去的人」',
      engagementHook: '史书里有国王、有英雄、有第一个署名的诗人——唯独没有我，一个养活了整座城的人。一座「光荣」的城，为什么会记不住养活它的大多数人？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-laborer-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先让你看看，我每天的活儿是什么样的。\n\n天没亮，我就被叫起来。这片两河之间的平原，又热又干，几乎不下雨。要种活大麦，全靠从河里引来的水。所以我大半辈子都在跟「水」打交道：挖渠，清淤，把水从远处的河，一段段引到田里。\n\n那是真正的苦力。灼热的太阳底下，我弯着腰，在硬土里挖出一条又一条深沟。渠挖好了，还得守着、修着——一场不对时候的洪水，就能把几个月的活儿冲垮。\n\n到了收获季，我又在大麦田里弯腰割穗，一割就是一整天。不忙田里的时候，我在神庙的作坊里搓泥砖、织羊毛布。\n\n我的身体，就是这座城的工具。城里那座越垒越高的神庙塔、那一圈高大的城墙、仓库里堆着的大麦——没有一样，不是我和像我一样的人，一砖一砖、一穗一穗，亲手做出来的。\n\n记住这一点：这座「第一城」的每一块砖，都浸着我们这种人的汗。',
        en: 'First, let me show you what my days look like.\n\nBefore dawn, I am called up. This plain between two rivers is hot and dry, with almost no rain. To grow barley alive, everything depends on water led in from the river. So most of my life is spent dealing with "water": digging canals, clearing silt, leading water from the distant river to the fields, stretch by stretch.\n\nThat is real hard labor. Under a scorching sun, I bend my back and dig one deep ditch after another out of the hard earth. Once a canal is dug, it must still be guarded and repaired — a single flood at the wrong time can wash away months of work.\n\nWhen the harvest season comes, I bend in the barley field cutting the heads of grain, a whole day at a stretch. When the fields are not busy, I am in the temple workshop pressing mud bricks and weaving wool cloth.\n\nMy body is this city\'s tool. The temple tower built higher and higher, the ring of tall walls, the barley heaped in the storehouse — not one of them was not made, brick by brick and head by head, by my own hands and the hands of people like me.\n\nRemember this: every brick of this "first city" is soaked with the sweat of people like us.',
      },
      deliverGoal: 'N2 setup (DEFAULT) — 我每天的活: 天没亮被叫起/两河平原极旱几乎不下雨种大麦全靠引水/大半辈子跟水打交道 (挖渠清淤一段段引水) + 真正苦力 (灼热太阳弯腰硬土挖深沟/渠挖好还得守着修一场不对时洪水冲垮几月活) + 收获季弯腰割穗一整天/不忙时作坊搓泥砖织羊毛布 + 「我的身体是这座城的工具/ziggurat 城墙仓库大麦没一样不是我和像我的人一砖一穗亲手做的」+ 「第一城每块砖都浸着我们的汗」',
      engagementHook: '城里那座神庙塔、那圈高墙、仓库里堆着的大麦——没有一样不是我和像我一样的人一砖一穗亲手做出来的。养活一座城的人，为什么往往是最不被看见的人？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-laborer-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '你可能会问：我这么辛苦，那我种的大麦、我盖的城，到底有没有我的份？\n\n答案，藏在历史课最爱讲的那个词里——「文明四要素」。城市、剩余粮食、文字、分工与阶层。老师讲到这四样，语气都是骄傲的。可你跟着我的命运过一遍，就会发现，这四样落到我头上，是另一个味道。\n\n城市——我住在城墙里，可这墙不是为我盖的，是为了护住神庙的粮和王的安全。\n\n剩余粮食——是我种出来的，可大部分进了神庙的大仓库，我只拿到按天发的一点口粮配额。\n\n文字——它记录了我的劳动，却不属于我。账本上有「我领了多少粮」，可我不识字，看不懂那块决定我吃多少的泥板。我是被写的人，不是写的人。\n\n分工与阶层——人被分成了好多层，而我，被分到了最底下那一层。\n\n你看出来了吗？同样四个词，对祭司、对书吏、对王，是「文明的成就」；对我，是「我出了力，却几乎什么都没分到」。',
        en: 'You might ask: I work this hard — so the barley I grow, the city I build, is there any share in it for me?\n\nThe answer hides in the very phrase history class loves most — "the building blocks of civilization." City, surplus grain, writing, division of labor and class. When the teacher reaches these four, the tone is proud. But walk through my fate with me, and you find that these four, landing on me, have a different taste.\n\nCity — I live inside the walls, but they were not built for me; they were built to protect the temple\'s grain and the king\'s safety.\n\nSurplus grain — I grew it, but most of it went into the temple\'s great storehouse; I got only a small ration handed out by the day.\n\nWriting — it recorded my labor, but it does not belong to me. The ledger says "I received this much grain," yet I cannot read; I cannot understand the tablet that decides how much I eat. I am the one written about, not the one who writes.\n\nDivision of labor and class — people were sorted into many layers, and I was sorted into the very bottom one.\n\nDo you see it? The same four words are, to the priest, the scribe, the king, "the achievements of civilization"; to me, they are "I gave my labor, yet got almost nothing in return."',
      },
      deliverGoal: 'N3 setup (DEFAULT) — 我这么辛苦种的大麦盖的城有没有我的份 + 「文明四要素」(城市/剩余粮食/文字/分工与阶层) 老师讲得骄傲/落到我头上另一个味道: 城市 (住墙里墙不为我为护神庙粮和王) / 剩余粮食 (我种的大部分进神庙仓库我只拿一点按天口粮配额) / 文字 (记录我劳动却不属于我/账本有我领多少粮但我不识字看不懂决定我吃多少的泥板/我是被写的人不是写的人) / 分工阶层 (人分好多层我在最底) + 「同四个词对祭司书吏王是文明成就，对我是出了力却几乎什么都没分到」',
      engagementHook: '「文明四要素」——城市、粮食、文字、分工，老师讲得很骄傲。可这四样落到我头上，全变成了「我出了力，却几乎什么都没分到」。同一份「文明」，为什么对不同的人意思完全相反？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-laborer-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n太阳快落山了，干了一整天，你拖着发酸的腰，排进神庙仓库门口领口粮的队伍。\n\n队伍尽头，坐着一个书吏。他面前摊着一块湿泥板，手里握着芦苇杆。轮到你，他抬眼看你一下，低头在泥板上压几下——几个符号，记下今天发给你多少大麦。然后挥手让你过去领。\n\n你接过那点大麦，转身走开。\n\n可你停下来，回头看了一眼那块泥板。\n\n上面，刚刚被压下去的那几个符号，决定了你今晚、你一家人今晚吃多少。它是你一天劳动的全部「证明」，是你这个人在这座城里留下的唯一痕迹。\n\n可你盯着它看，一个字都不认得。\n\n这一刻，你心里是什么滋味？那块决定你饿不饿的泥板，那串关于你的记录，你连看，都看不懂。你愿意说说，站在那个看不懂自己命运的位置上，是一种什么感觉吗？',
        en: 'Now you are me.\n\nThe sun is almost down. You have worked a whole day, and dragging your aching back, you join the line at the temple storehouse door to receive your ration.\n\nAt the end of the line sits a scribe. A wet clay tablet lies before him, a reed in his hand. When your turn comes, he glances up at you, lowers his head, and presses a few times into the clay — a few signs, recording how much barley you are given today. Then he waves you on to collect it.\n\nYou take that little bit of barley and turn to go.\n\nBut you stop, and look back at that tablet.\n\nOn it, the few signs just pressed in decide how much you, and your family, will eat tonight. It is the whole "proof" of your day\'s labor, the only trace you, this person, leave in this city.\n\nYet you stare at it, and cannot read a single sign.\n\nWhat does this feel like, in this moment? The tablet that decides whether you go hungry, the line of record about you — you cannot even read it. Will you say what it feels like, to stand in that position, unable to read your own fate?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak (DEFAULT) — 太阳落山干一整天拖着发酸的腰排进仓库门口领口粮的队 + 队尾坐书吏 (湿泥板+芦苇杆/轮到你抬眼看一下压几下记今天发你多少大麦/挥手让你过去领) + 你接过大麦转身但停下回头看泥板 + 那几个符号决定你和一家今晚吃多少/是你一天劳动全部「证明」/你在城里留下的唯一痕迹 + 「可你盯着看一个字都不认得」+ 站在看不懂自己命运的位置上是什么感觉',
      engagementHook: '那块泥板决定我今晚吃不吃得饱，记的是关于我的事——可我盯着它看，一个字都不认得。站在「看不懂自己命运」的位置上，会是一种什么感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-laborer-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你也许会想：苦是苦，可至少我的劳动被记下来了，账本上有我那一行，不算白活吧？\n\n我也曾这么安慰自己。可你仔细看那块泥板上记的，是什么。\n\n它记的是：「发出大麦若干」。\n\n它记的不是「我」。它不在乎我叫什么、我多大、我家里有几口人、我今天腰疼不疼、我有没有梦想。它只在乎一个数字：神庙今天，付出了多少大麦。我，只是这笔支出后面那个被省略的、可以替换的劳力。\n\n这就是我处境里最凉的一层：我的劳动被精确地记录了，我的人生却一点没被记录。\n\n书吏会跟你说，文字多了不起——它让记忆跨越时间传下去。是，可它替谁传？它替神庙记住了「付出多少粮」，替国王记住了「修了多少墙」，替历史记住了第一个署名的诗人。\n\n唯独，它没替我记住：我是谁，我怎么活过这一生。它记得我的产出，记不得我这个人。',
        en: 'You might think: hard as it is, at least my labor was written down, my one line is in the ledger — not a life lived for nothing, surely?\n\nI once comforted myself that way too. But look closely at what that tablet records.\n\nIt records: "barley issued, this much."\n\nIt does not record "me." It does not care what I am called, how old I am, how many mouths are in my house, whether my back aches today, whether I have a dream. It cares about one number: how much barley the temple paid out today. I am only the omitted, replaceable labor behind that expense.\n\nThis is the coldest layer of my situation: my labor was recorded precisely, my life was not recorded at all.\n\nThe scribe will tell you how marvelous writing is — it lets memory cross time and be passed down. Yes, but passed down for whom? It remembered for the temple "how much grain was paid," for the king "how many walls were built," for history the first poet to sign her name.\n\nOnly it did not remember, for me: who I was, how I lived this one life. It remembers my output; it does not remember me, the person.',
      },
      deliverGoal: 'N5 story (DEFAULT) — 安慰自己「至少劳动被记下账本有我一行不算白活」+ 仔细看泥板记的是「发出大麦若干」+ 它记的不是「我」(不在乎我叫什么多大家里几口人腰疼不疼有没有梦想/只在乎一个数字: 神庙今天付出多少大麦/我只是这笔支出后面被省略的可替换的劳力) + 「最凉一层: 劳动被精确记录人生却一点没被记录」+ 文字替谁传 (替神庙记付出多少粮/替王记修多少墙/替历史记第一个署名诗人/唯独没替我记我是谁怎么活过这一生/记得我的产出记不得我这个人)',
      engagementHook: '账本上确实有我一行：「发出大麦若干」。可它记的是神庙付出了多少粮，不是「我」是谁。我的劳动被精确记下了，我的人生却一点没被记下——这两者的差别，你品出来了吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-laborer-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我跟你说一块泥板。几千年后，它会变得很有名——可它有名的方式，恰恰把我这种人的命运，说得透透的。\n\n那是一块大麦账的泥板，账目旁边压着一个标记：Kushim（库辛）。\n\n（这块泥板是真的，今天还在博物馆里。后来的人说，Kushim 是「人类已知最早被写下的名字之一」。但他到底是谁，史料没有确切答案——多数学者认为，他很可能是个机构职位，或者经手这笔账的人，大概是个管仓库、管账的。)\n\n你听明白这件事有多扎心了吗？人类最早被「永远记住」的名字之一，不是英雄，不是受苦的多数，而是一个——管账的。\n\n是那个发口粮给我的人，被记住了；不是我这个种出大麦的人。文字一睁眼，第一个看见的，是管理者，不是劳动者。\n\n我和成千上万跟我一样的人，把整座城从泥里垒起来。可几千年后，被这座城「记住」的第一个普通名字，是那个坐着记账的。我们这些站着流汗的，连一行都没留下。\n\n这，就是「被记录的人」和「记录别人的人」之间，那道隔了一辈子、隔了几千年的缝。',
        en: 'Let me tell you about a tablet. Thousands of years later, it will become famous — and the way it is famous tells the fate of people like me through and through.\n\nIt is a barley-account tablet, with a mark pressed beside the account: Kushim.\n\n(This tablet is real, and it sits in a museum today. Later people say Kushim is "one of the earliest names humanity ever wrote down." But who he was, the record gives no certain answer — most scholars think he was very likely an institutional title, or the person handling the account, probably someone who managed a storehouse and its books.)\n\nDo you hear how much this stings? One of the earliest names humanity ever "remembered forever" was not a hero, not the suffering majority, but a — bookkeeper.\n\nIt was the man who handed out my ration who was remembered; not me, the one who grew the barley. The moment writing opened its eyes, the first thing it saw was the manager, not the laborer.\n\nI and tens of thousands like me raised this whole city out of the mud. Yet thousands of years later, the first ordinary name this city "remembered" was the one who sat and kept accounts. We who stood and sweated did not leave a single line.\n\nThis is the crack — a lifetime wide, thousands of years wide — between "those who are recorded" and "those who record others."',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (DEFAULT) — Kushim 大麦账泥板从劳工角度 (几千年后变有名/有名方式恰把我这种人命运说透) + anti-fab 括号 (泥板真今天在博物馆/后人说 Kushim 最早被写下名字之一/到底是谁无确切答案/多学者认为很可能机构职位或经手人大概管仓库管账的) + 扎心: 最早被永远记住的名字之一不是英雄不是受苦多数而是管账的 + 「发口粮给我的人被记住了,不是我种大麦的人/文字一睁眼第一个看见管理者不是劳动者」+ 我们把城从泥里垒起来,被记住的第一个普通名字是坐着记账的,我们站着流汗的连一行没留 + 「被记录的人和记录别人的人之间隔一辈子隔几千年的缝」',
      engagementHook: '人类最早被「永远记住」的名字之一，是那个发口粮给我的记账人——不是我这个种出大麦的人。文字一睁眼，为什么第一个看见的是管理者，不是劳动者？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-laborer-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '别误会，我不是在说这座城一无是处，也不是说我宁愿没有它。我得诚实——文明这东西，从来不是只有一面。\n\n往好里说：正是因为有了城、有了灌溉、有了神庙这个大仓库，几万人才能挤在一块儿活下来。荒年的时候，神庙仓库里囤的粮，有时真能救命。一个人单干，斗不过这片又旱又烫的土地；是无数人合起来挖渠、合起来劳作，才让这片不毛之地，长出了能养活几万人的大麦。城，是人类第一次学会「大规模合起来活」的地方。这份了不起，有我的一份汗，我不否认。\n\n可往坏里说：同样是这座城，第一次把人这么清楚地分了三六九等。在没有城、没有剩余粮食的小村子里，人和人之间没这么大的差距。是城和它的仓库，养出了一小撮不下田、却管着所有人的人；也是它，把我这样的人，牢牢摁在了最底下。\n\n你看，同一座城，对我既是「能活下去的依靠」，又是「把我摁在底层的机器」。它给了我一条命，也给了我一个位置——最底下的那个位置。这两件事，是同一座城给的。',
        en: 'Do not misread me — I am not saying this city is worthless, nor that I would rather it never existed. I must be honest: civilization is never one-sided.\n\nTo speak of the good: it is exactly because there was a city, irrigation, and the temple as a great storehouse that tens of thousands could crowd together and survive. In a lean year, the grain stored in the temple could sometimes truly save lives. One person alone cannot beat this dry, burning land; it is countless people digging canals together, laboring together, that made this barren ground grow barley enough to feed tens of thousands. The city is the first place humans learned to "live together at scale." That greatness has a share of my sweat in it, I will not deny.\n\nBut to speak of the bad: this same city, for the first time, sorted people so clearly into high and low ranks. In a small village with no city and no surplus grain, the gap between person and person was not this wide. It was the city and its storehouse that raised a tiny few who never farmed yet ran everyone; and it was the same city that pressed people like me firmly to the very bottom.\n\nSee it: the same city is both "the support that lets me live" and "the machine that pins me to the bottom." It gave me a life, and it gave me a place — the lowest place. These two things are given by the same city.',
      },
      deliverGoal: 'N7 story (DEFAULT, Rule 0 双面) — 不是说城一无是处也不是宁愿没有它/文明从来不只一面 + 往好里说 (有城有灌溉有神庙大仓库几万人才能挤一块活下来/荒年仓库囤粮有时救命/一人单干斗不过旱烫土地是无数人合起来挖渠劳作让不毛之地长出养活几万人的大麦/城是人类第一次学会大规模合起来活/这份了不起有我一份汗) + 往坏里说 (同座城第一次把人清楚分三六九等/没城没剩余粮的小村人和人差距没这么大/城和仓库养出一小撮不下田却管所有人的人/也把我摁在最底) + 「同一座城既是能活下去的依靠又是把我摁在底层的机器/给了我一条命也给了我最底下的位置/同一座城给的」',
      engagementHook: '同一座城，对我既是「能活下去的依靠」，又是「把我摁在底层的机器」——它给了我一条命，也给了我最底下那个位置。一样东西同时是恩惠又是枷锁，你该怎么看它？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-laborer-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你大概以为，我的处境到此为止了。其实，我头上的天，还会一层层往下压。\n\n我是神庙的劳工，头上压着祭司。可城邦之间常打仗，慢慢地，又冒出来一个新的主人——lugal，王。他借着打仗的由头，把权力越攥越紧，盖起跟神庙并立、甚至压过神庙的宫殿。于是我头上，从「神庙」一个主人，变成了「神庙 + 王」两个主人。\n\n打仗，要征兵——征的是我。筑墙，要出力——出力的是我。王的宫殿、王的城墙，一砖一瓦，又是我这样的人垒起来的。墙上刻着王的名字，地基里埋着我们的汗。\n\n再往后，约公元前 2334 年，一个叫 Sargon 的人征服了所有城邦，建起人类第一个帝国。主人，从一座城的王，变成了一个帝国的皇帝。可你猜，最底下的我，处境变了吗？\n\n没变。神庙也好，王也好，帝国也好——顶上换了一茬又一茬主人，争来争去。可那个在田里弯腰割大麦、在太阳下挖渠、领着按天发的口粮、名字不会被记下的人，从头到尾，还是我。',
        en: 'You probably think my situation ends here. In fact, the sky above me presses down layer upon layer.\n\nI am the temple\'s laborer, with the priest pressing above me. But city-states often went to war, and slowly a new master appeared — the lugal, the king. Under the pretext of war, he gripped power tighter and tighter, building a palace that stood beside, and even rose above, the temple. So above me, one master, "the temple," became two: "the temple and the king."\n\nWar needs conscripts — and it is I who am conscripted. Walls need labor — and it is I who labor. The king\'s palace, the king\'s walls, brick by brick, were again raised by people like me. The king\'s name is carved on the wall; our sweat is buried in the foundation.\n\nLater still, around 2334 BCE, a man named Sargon conquered all the city-states and built humanity\'s first empire. The master changed from the king of one city into the emperor of an empire. But guess: for me at the very bottom, did anything change?\n\nNothing changed. Temple, king, empire — at the top, master after master came and went, fighting one another. Yet the one bent in the field cutting barley, digging canals under the sun, receiving the ration handed out by the day, whose name will not be written down — from beginning to end, it is still me.',
      },
      deliverGoal: 'N8 story (DEFAULT, continuity & change) — 头上的天还会一层层往下压 + 我是神庙劳工头上压着祭司/城邦常打仗冒出新主人 lugal 王 (借打仗由头攥权盖宫殿压过神庙)/头上从神庙一个主人变神庙+王两个 + 打仗征兵征的是我/筑墙出力是我/王的宫殿城墙我垒的 (墙刻王的名地基埋我们的汗) + c.2334 BCE Sargon 征服所有城邦建人类第一个帝国/主人从一座城的王变帝国皇帝 + 「最底下的我处境变了吗?没变/顶上换一茬又一茬主人争来争去/可在田里弯腰割麦挖渠领按天口粮名字不会被记下的人从头到尾还是我」',
      engagementHook: '神庙、王、帝国——我头顶的主人换了一茬又一茬，争来争去。可那个在田里弯腰割麦、名字不会被记下的人，从头到尾还是我。顶上换了那么多主人，最底下的人为什么没变？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-laborer-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '退一步，给你看一张更大的地图——一张能让你看清「我这种命运」到底有多普遍的地图。\n\n当我在两河流域的太阳底下挖渠、割麦时，地球另一端的黄河流域，还没有城、没有文字。中国最早的国家级社会（二里头）要再晚一千五百年上下才出现，最早确凿的文字（甲骨文）更要到约公元前 1250 年。\n\n两条大河，几乎从不来往，却各自独立地从村庄长成了国家，各自独立地发明了文字（学界普遍认为，文字在世界上至少独立发明了三次，互不相抄）。\n\n这本是一件了不起的事：殊途同归。可坐在我这个最底层的位置上，我看到的，是另一个殊途同归——\n\n两河流域有我这样的神庙劳工，黄河流域，后来也会有在田里劳作、被写进别人账册的普通人。城市 + 文字 + 国家，这套东西在哪儿长出来，哪儿就会同时长出一个「记录别人的少数」和一个「被记录的多数」。\n\n这才是最让我心里发沉的地方：被摁在最底层、名字留不下来的，从来不只是我一个苏美尔人。它好像是「城市 + 文字 + 国家」这套东西，走到哪儿，都甩不掉的一个影子。',
        en: 'Step back, and look at a larger map — one that lets you see how common "a fate like mine" really is.\n\nWhile I dug canals and cut barley under the sun between the two rivers, the Yellow River valley on the other side of the earth still had no cities, no writing. China\'s earliest state-level society (Erlitou) would not appear for about another 1,500 years, and its earliest certain writing (oracle-bone script) not until about 1250 BCE.\n\nTwo great rivers, almost never in contact, each grew from villages into a state on its own, each invented writing on its own (scholars widely agree writing was invented independently at least three times in the world, no copying).\n\nThis is, in itself, a remarkable thing: different roads, the same destination. But sitting in my position at the very bottom, what I see is another "same destination" —\n\nThe two rivers had temple laborers like me; the Yellow River valley, later, would also have ordinary people who labored in the fields and were written into other people\'s ledgers. Cities + writing + states — wherever this set of things grows, there grows, at the same time, a "recording few" and a "recorded many."\n\nThis is what weighs heaviest on me: the ones pressed to the very bottom, whose names cannot be kept, were never just me, one Sumerian. It seems to be a shadow that "cities + writing + states" cannot shake off, wherever it goes.',
      },
      deliverGoal: 'N9 story (DEFAULT, §8 中国桥) — 退一步看更大地图 (看清我这种命运多普遍) + 我在两河太阳下挖渠割麦时黄河流域还没城没文字/二里头晚约 1500 年/甲骨文约前 1250 + 两条大河几乎不来往却各自独立从村庄长成国家各自独立发明文字 (学界普遍认为至少独立发明三次互不相抄) + 本是了不起的殊途同归/但从最底层位置看到另一个殊途同归: 两河有神庙劳工黄河后来也有在田劳作被写进别人账册的普通人/城市+文字+国家在哪长出来哪就同时长出记录别人的少数和被记录的多数 + 「最让我心沉: 被摁最底层名字留不下的从来不只我一个苏美尔人/像是城市+文字+国家走到哪都甩不掉的影子」',
      engagementHook: '两条几乎不来往的大河，各自独立走到了「城市+文字+国家」。可在我看来，它们还各自独立地长出了同一个东西：一个被摁在最底层、名字留不下来的我。这是巧合，还是这套东西甩不掉的影子？',
      expectsRealAnswer: false,
    },
    {
      id: 'meso-laborer-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生——一个没名字的劳工，一双割大麦、挖水渠的手，一行只写着「领了多少粮」的账，你会怎么评价我活过的这座城？两种说法都站得住，你来称。\n\n一种说法：这座城，是人类了不起的一步。在它之前，人散在小村子里，斗不过旱地，攒不下知识，一代人的经验随一代人死去。是城，第一次让几万人合起来活、合起来挖渠、合起来把经验用文字传下去。我虽然在最底层，可我也是这场大合作的一份子——没有我们这些流汗的人，这一步迈不出去。从这个角度，连我自己，都该为这座城骄傲。\n\n另一种说法：这座城，也是人类第一次系统地把人分成「被记录的人」和「记录别人的人」。在它之前，没有谁能精确算出「一个人值多少口粮、能撑几年」；是这座城、这套文字，第一次把人变成了账本上可以计算、可以替换的数字。我出了最多的力，分到了最少的份，连名字都没留下。从这个角度，这座城的「伟大」，是踩着我这种人的不被记住，垒起来的。\n\n这两边不是「城是好是坏」。是同一座城的两面——人类最伟大的合作，和人类第一次系统的不平等，是同一块地基浇出来的。\n\n这是一所学校里 AP 老师会反复让学生掂量的难题：一座城的伟大，到底该用谁的尺子来量？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life — a laborer with no name, a pair of hands that cut barley and dug canals, a single line of account reading only "received this much grain" — how would you judge the city I lived in? Both views stand. You do the weighing.\n\nOne view: this city is a remarkable step for humanity. Before it, people were scattered in small villages, could not beat the dry land, could not store up knowledge, and one generation\'s experience died with that generation. It was the city that first let tens of thousands live together, dig canals together, and pass experience down in writing together. Though I was at the very bottom, I too was part of this great cooperation — without us who sweated, this step could not have been taken. From this angle, even I should be proud of this city.\n\nThe other view: this city is also the first time humanity systematically sorted people into "those who are recorded" and "those who record others." Before it, no one could calculate exactly "how much ration a person is worth, how many years he will last"; it was this city, this writing, that first turned people into numbers on a ledger, countable and replaceable. I gave the most labor, got the smallest share, and left not even a name. From this angle, the "greatness" of this city was built by treading on the being-forgotten of people like me.\n\nThese are not "is the city good or bad." They are two faces of the same city — humanity\'s greatest cooperation and humanity\'s first systematic inequality were poured from one and the same foundation.\n\nThis is the hard problem an AP teacher at a school will have students weigh again and again: a city\'s greatness — by whose measure should it be judged? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (DEFAULT) — 走完一生 (没名字劳工/割麦挖渠的手/一行只写「领了多少粮」的账) 怎么评这座城 + 一种说法 (人类了不起的一步/它之前人散在小村斗不过旱地攒不下知识经验随人死去/城第一次让几万人合起来活挖渠用文字传经验/我虽在最底也是大合作一份子没我们流汗的人迈不出这步/连我都该为城骄傲) / 另一种说法 (第一次系统把人分成被记录的与记录别人的/它之前没谁能精确算一个人值多少口粮撑几年/城和文字第一次把人变成账本上可计算可替换的数字/我出最多力分最少份连名字没留/城的伟大是踩着我这种人的不被记住垒起来的) / 同一座城两面 (人类最伟大合作 + 第一次系统不平等同一块地基浇出来) / neutral school name (AP 老师) /「一座城的伟大该用谁的尺子量」(回扣 §3 核心问) / 想 30 秒 / 两边都站得住 + expectsRealAnswer',
      engagementHook: '人类最伟大的合作，和人类第一次系统的不平等，是同一块地基浇出来的——而我，正站在那块地基的最底下。一座城的伟大，到底该用谁的尺子来量？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'meso-laborer-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是最底层那个人的声音——那个把城垒起来、却几乎没被城记住的人。\n\n请记住：这只是一边，而且是历史几乎从不主动讲的那一边。正因为我没名字、没留下记录，所以这一遍，是别人替我把话说出来的——这本身就是我命运的一部分：连「替我说话」，都得靠后来的人。\n\n但你还没听到另外两个人的声音。\n\n那个坐在仓库旁、替我记口粮的书吏——他会骄傲地跟你讲，文字多了不起，是人类知识的奠基。他不会主动告诉你，他记的每一笔，都把我变成了一个数字。还有那个盖宫殿、筑城墙、攥着王权的 lugal——他会跟你讲，是他护住了这座城。他不会主动告诉你，墙是我垒的，名字却是他的。\n\n换上他们的视角再走一遍，你会听见两套理直气壮的说法。到那时，请你带着我这一遍的问题去听：他们口中那座了不起的城，那项了不起的发明——底下，还压着谁？\n\n最后，留一样东西给你。还记得那块 Kushim 大麦账泥板吗？书吏会说它是「文字的荣耀」，王会说它是「权力的家底」。而我告诉你的是：那上面，本该有我的名字，却只有一个被发出去的数目。\n\n同一块泥，三双眼睛。你都看过之后，那块泥，对你会变成什么？',
        en: 'What you just heard was the voice of the one at the very bottom — the one who raised the city, yet was barely remembered by it.\n\nRemember: it is only one side, and the side history almost never tells on its own. Precisely because I had no name and left no record, this pass had someone else speak for me — and that itself is part of my fate: even "speaking for me" had to wait for people who came later.\n\nBut you have not yet heard the other two voices.\n\nThe scribe who sat beside the storehouse and recorded my ration — he will proudly tell you how marvelous writing is, the foundation of human knowledge. He will not volunteer that every entry he made turned me into a number. And the lugal who built the palace, raised the walls, and gripped kingship — he will tell you it was he who protected this city. He will not volunteer that I stacked the wall, yet the name on it is his.\n\nSwitch to their perspectives and walk it again, and you will hear two confident accounts. When you do, please listen with the question from my pass: that remarkable city they speak of, that remarkable invention — who else is pressed beneath it?\n\nAnd one last thing to leave with you. Do you remember the Kushim barley-account tablet? The scribe will call it "the glory of writing," the king will call it "the assets of power." And what I tell you is this: on it, there should have been my name, yet there is only an amount issued.\n\nThe same clay, three pairs of eyes. After you have seen with all of them, what will that clay become to you?',
      },
      deliverGoal: 'N11 close/meta (DEFAULT) — 你听的是最底层的声音 (把城垒起却几乎没被城记住的人) + 这只是一边而且历史几乎从不主动讲的一边/因我没名字没记录这一遍是别人替我说的 (连替我说话都得靠后来的人是我命运一部分) + MANDATORY 跨视角指针: 还没听到书吏 (骄傲讲文字了不起是人类知识奠基/不会主动说他记的每笔都把我变成数字) + lugal (讲是他护住城/不会主动说墙我垒的名字是他的) + 换视角再走会听见两套理直气壮说法/带我的问题去听 (他们口中了不起的城和发明底下还压着谁) + 回扣 Kushim 泥板三视角 (书吏说荣耀王说家底/我说本该有我名字却只有发出去的数目) + 「同一块泥三双眼睛你都看过之后那块泥对你会变成什么」+ expectsRealAnswer',
      engagementHook: '你这一遍，听的是把城垒起来、却几乎没被城记住的那个人。书吏会讲文字的荣耀，王会讲护城的功劳——他们都不会主动告诉你，他们脚下还压着谁。换个视角再走一遍，带着我的问题去听，你的判断还站得住吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator / receiving-end-default) ───
export var lenses = {
  'temple-scribe-actor':         scribeLens,
  'lugal-mediator':              lugalLens,
  'temple-laborer-receiving-end': laborerLens,
};

// receiving-end 优先 (无名劳工 = AP DBQ「a city's greatness paid for by whose labor」必考角度;
//   narrative frontmatter defaultLens 即此)
export var defaultLens = 'temple-laborer-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'mesopotamia-3500bce',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'temple-scribe-actor': 28, 'lugal-mediator': 30, 'temple-laborer-receiving-end': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-06',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail: Kushim 大麦账泥板 (三视角各触一次不点破)',
    'defaultLens: temple-laborer-receiving-end — 无名劳工 (AP DBQ「whose labor / whose being-forgotten」必考) + 文明四要素的代价面',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total)',
    'anti-fab: 书吏 / 劳工为合成桥接人物 (身份写实, 显式标注 §3); lugal 以 Gilgamesh 传说为锚 (显式标传说); Kushim「会计」释读用「可能/很可能」软化',
    'Rule 0 中性: 全程「文明=光荣起点 + 系统性不平等起点」两面并置, 不替学生下最终道德结论',
    '§8 中国桥 (二里头约前 1900 / 甲骨文约前 1250 / 文字独立发明三次) 注入 laborer N9 + lugal N9 (receiving-end / mediator)',
    'cultural ban: 全程两河真实术语, 中国术语仅限 §8 对照段落 (laborer N9 / lugal N9)',
  ],
};
