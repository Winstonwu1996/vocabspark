// ─── Black Death 1347 Lens-based Storyboard ──────────────────────
//
// Story-First Pedagogy v2 — Lens 模型（用户 2026-05-02 sign off）
// 见 docs/STORY_FIRST_PEDAGOGY.md（待 v2 update）
//
// 设计原则（同 magna-carta-1215.js + crusades-1099.js）：
//   - 1 个 Topic = 1 段历史事件 + N 个 lens（每 lens = 1 个角色视角）
//   - 用户选 1 个 lens 进入 → 一致第一人称跑完
//   - 不同 lens 看同一事件——基础事实相同——情绪 + 角度 + 局限性不同
//
// Black Death 的 lens 设计跟 Magna Carta + Crusades 不一样：
//   黑死病不是人为造成的事件——没有 "perpetrator-actor" 视角——
//   所以 lens 1 是**最容易代入的 intellectual chronicler 视角**——
//   让用户先建立 emotional resonance——再去做更艰难的 lens 2 + 3。
//
// MVP scope（drafting）：3 lens（Agnolo Siena chronicler / Strasbourg burgher /
// Devorah Strasbourg pogrom 受害者）—— 当前文件只交付 lens 1（Agnolo di Tura）
//
// 内容质量铁律：
//   - "明朝那些事儿"密度：vivid scenes + concrete dates + sensory detail
//   - anti-orientalism 硬规：14 世纪 Siena 是城邦自治 + 商人主导社会——
//     不是"昏暗中世纪"——实际上很 sophisticated
//   - 直面记录死亡的人精神状态：见证 + 麻木 + 终究还是写下来
//   - 不投射现代政治：narrative kernel §6 + §10 已经禁止
//   - 不让 plague 变成"god's punishment for X" 影射现代灾难
//   - 14 词文化禁用表（玉玺/龙袍/翰林/朕/卿/江山/凤冠/霞帔/一炷香/科甲/状元/榜眼/探花/金銮殿）
//   - 意大利语 / 拉丁语保留斜体（Cronaca senese / Domus / Pater Noster / podestà / contado）
//   - anti-fabrication 显式化：Agnolo's chronicle quote 是 documented 引文；
//     他的孩子名字 / 内心戏剧化部分要明确"this lens lets you hear" / "this is
//     dramatic interior monologue, the documented record is X"
//
// 长度约束：每节点 200-280 字（CN）/ 对应 EN 版 Lexile 800-1000
//
// ─────────────────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════
// LENS 1: Agnolo di Tura del Grasso（Siena chronicler / 1348 mediator-witness 视角）
// ═══════════════════════════════════════════════════
//
// 角色设定：
//   - 约 1313 年生 Siena（14 世纪 Tuscany 一个独立城邦，不属于教皇国也不属于
//     神圣罗马帝国，自己有 Council of Nine 治理 70 年）—— 1348 年时 35 岁
//   - 真实历史人物：Siena 鞋匠工会 (Arte dei Calzolai) 的 bookkeeper /
//     业余 chronicler——写过《Cronaca senese》记录 Siena 1300-1351 年事件
//   - 5 个孩子（历史只确认数量，名字 + 年龄 narrative kernel 没有——
//     这个视角给了名字 + 年龄但**显式标记**为 lens 创作）
//   - 妻子（妻子是否死于瘟疫，史料不明确——保留 ambiguity）
//   - 1348 年 5 月 Siena 第一例 Black Death 病人；6-9 月达到顶峰；
//     1348 年底死了约 3 万人（约 Siena 总人口 50-60%）
//   - Agnolo 自己活下来——继续写 chronicle 直到 1351——1363 年才死
//
// 这个视角 的张力：
//   - Agnolo 是知识分子——他**记录**死亡——但他无法**阻止**死亡
//   - 他**亲手埋了 5 个孩子**——这是 documented 记录（不是 metaphor）
//   - 他的 chronicle 在历史上保存下来——他的 5 个孩子的名字没有保存下来
//   - 他选择写下数字——而不是写下他孩子的脸——为什么？
//
// 这个视角 是 intellectual mediator 位置（平行于 Stephen Langton 的 lonely-middle
// 和 Alexios 的 skilled-insider-trapped）：让用户感受**记录死亡的人**的精神
// 状态——同时见证 + 麻木 + 终究还是写下来。
//
// Documented quote（必须保留为真实引用）：
//   "Io Agnolo di Tura, detto il Grasso... seppellii con le mie mani i miei
//   cinque figliuoli. E così morirono che credettero che fosse la fine del mondo."
//   ——"I, Agnolo di Tura, called the Fat... buried my five children with my own
//   hands. And so many died that everyone believed it was the end of the world."
//
// ─────────────────────────────────────────────────────────────────

var agnoloSienaStoryboard = [
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Agnolo di Tura',
    narrativeRef: '§4 1347-10 Sicily Messina + 1348 春 plague 进意大利中部',
    content: {
      cn:
        '1348 年 5 月 8 日早上，Siena（锡耶纳）城里。我 35 岁。\n\n' +
        '我叫 Agnolo di Tura，人家叫我"胖子 Agnolo"。这是我自己写在编年史笔记本第一页的称呼。我在 Siena 鞋匠工会（Arte dei Calzolai）做记账员：每周二、周五早上去 Palazzo Pubblico（市政厅）查档案、做账。剩下的时间，我写 Siena 这座城邦的编年史。\n\n' +
        '今天是周四。我刚到 Palazzo Pubblico 二楼办公室。一个胖嘴的传话员从港口跑上来，脸白。\n\n' +
        '他说："Agnolo，昨晚有个商人从 Genoa（热那亚）回来。发烧。脖子下面长了一个鸡蛋大的黑肿块。他妻子说他在 Genoa 港停了三天补货。今天早上死了。"\n\n' +
        '我那一刻坐着没动。\n\n' +
        '我们 Siena 人 4 月就听说了。Pisa 死人。Florence 城里南门街整条都病了。我们城邦 Council of Nine（九人议会）4 月底已经开过两次会：podestà（市长）下令港口商船**不准卸货**、城门外建检疫站、禁止公开集会。但太晚了。商人和银行家照样进城，羊毛和谷物照样进城，老鼠跟跳蚤也照样。\n\n' +
        '我把传话员说的全写下。日期：1348 年 5 月 8 日。死者名字：Bartolomeo di Niccolò，商人，来自 Genoa。我用鹅毛笔，黑铁胆墨水，写在羊皮纸左上角。三行字。\n\n' +
        '我那一刻不知道：这一笔，会变成 30000 笔。\n\n' +
        '我是 Agnolo di Tura，Siena 的鞋匠工会账房 + 业余编年史家。接下来 12 节，你跟我走 1348 年那一年：从这个早上一笔字，到我**亲手**做的事，到 1351 年终于停笔的那一天，再到 1363 年我死后我的字怎么活下来的。',
      en:
        'Morning of May 8, 1348. Inside the city of Siena, in central Tuscany. I was 35.\n\n' +
        'My name is Agnolo di Tura. People call me "Agnolo the Fat." That is the name I wrote on the first page of my chronicle notebook. I work as a bookkeeper for the Siena Cobblers\' Guild (Arte dei Calzolai). Every Tuesday and Friday morning I go to the Palazzo Pubblico (the City Hall) to check records and balance accounts. The rest of my time, I write the Cronaca senese, a chronicle of Siena, this independent city-state.\n\n' +
        'Today was Thursday. I had just arrived at my second-floor office in the Palazzo Pubblico. A thick-lipped messenger ran up from the port gate, his face pale.\n\n' +
        'He said: "Agnolo, last night a merchant came back from Genoa. Fever. A black swelling the size of an egg under his collarbone. His wife says he had stayed at Genoa\'s harbor three days loading goods. He died this morning."\n\n' +
        'I sat without moving.\n\n' +
        'We Siena folk had heard about it since April. People dead in Pisa. The whole south-gate street of Florence was sick. Our Council of Nine (the nine-man committee that governs Siena) had met twice by late April. The podestà (the chief magistrate, a kind of city mayor) had ordered ships at the port not to unload cargo, quarantine huts outside the gates, and no public gatherings. But it was already too late. Merchants and bankers came in anyway. Wool and grain came in anyway. So did the rats and the fleas riding them.\n\n' +
        'I wrote down what the messenger told me. Date: May 8, 1348. Dead man\'s name: Bartolomeo di Niccolò, merchant, from Genoa. I used a goose quill, black iron-gall ink, the upper-left corner of a parchment sheet. Three lines.\n\n' +
        'In that moment I did not know: this one entry would grow into thirty thousand entries.\n\n' +
        'I am Agnolo di Tura, bookkeeper of the Siena cobblers\' guild and amateur chronicler. Over the next twelve sections, you will walk with me through the year 1348: from this morning, this single line on parchment, to the things I did **with my own hands**, to the day in 1351 when I finally put down the pen, and then to how my words survived after I closed my eyes in 1363.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我那天写下第一笔——3 行字——一个商人——你猜接下来 6 个月我会写下多少笔',
    expectedLength: '260-300 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'Agnolo di Tura',
    narrativeRef: '§3 Agnolo bio（Siena 工会账房 + 业余 chronicler）+ §2 制度 L3',
    content: {
      cn:
        '我得告诉你我 1348 年 5 月 8 日之前的世界，那个会被毁掉的世界。\n\n' +
        '我 1313 年生在 Siena。我爸 Tura di Bartolomeo 也是 Arte dei Calzolai 的人。那不是我们今天说的"工会"，而是 14 世纪意大利城邦的一种**自治组织**：鞋匠、皮革商、学徒一起决定行业规则、收税、做慈善、选议员。Siena 那时候不属于教皇国，也不属于神圣罗马帝国——它**自己治自己**。70 年前的 1287 年开始，一个叫 Council of Nine（Nove）的九人议会换班治城，每两个月换一批。这是中世纪欧洲走得最远的一种**共和制实验**之一。\n\n' +
        '我爸希望我接他班做鞋匠。我手不灵。14 岁那年缝坏一双鞋，师傅说："Agnolo，你不是这块料，但你字写得好。"\n\n' +
        '我 16 岁开始在工会里做记账员。20 岁认识了我妻子 Niccoluccia，她是 Siena 城南羊毛商 Bindo di Cecco 的女儿，比我矮半个头，不识字。她结婚那年送了我一支鹅毛笔，说："Agnolo，你在工会算别人的账，回家给我们这个家也写点什么。"\n\n' +
        '我那年开始写 Cronaca senese，Siena 的编年史。每周写两次：记下议会决议、商人到港、教堂修建、瘟疫和饥荒、Florence 跟我们打仗那几年的细节。\n\n' +
        '到 1348 年 5 月，我们家有 5 个孩子（名字和年龄是叙事性补充，史料只确认数量）：\n\n' +
        '老大男孩 Niccolò，12 岁，已经开始跟他外公学羊毛生意。\n' +
        '老二男孩 Pietro，10 岁，会爬院子里那棵无花果树。\n' +
        '老三女孩 Caterina，8 岁，头发跟她妈一样直。\n' +
        '老四女孩 Lisa，6 岁，只跟我说话，见外人就躲我背后。\n' +
        '老五男孩 Tommaso，3 岁，刚开始学走路那年得过一次发烧。好了。我们以为最难的关都过了。\n\n' +
        '5 月 8 日早上，我从 Palazzo Pubblico 回家路上，穿过 Piazza del Campo（贝壳形的中心广场，那年代欧洲最美的广场之一，今天还在）。我跟一个卖无花果的小贩点头打招呼。我那一刻没意识到——三个月后，那个小贩会死，我的 5 个孩子也会死，我会**亲手**做一些事，而我家这扇门，再没人推开过。',
      en:
        'I have to tell you what my world was, before May 8, 1348. The world that was about to be destroyed.\n\n' +
        'I was born in Siena in 1313. My father, Tura di Bartolomeo, was also in the Arte dei Calzolai, the cobblers\' guild. That is not what we today call a "labor union." It was the kind of self-governing trade body that medieval Italian city-states developed: cobblers, leather traders, and apprentices together set rules, collected taxes, organized charity, and even elected representatives to the city council. Siena in those years did not belong to the Papal States or the Holy Roman Empire. **It governed itself**. Since 1287, sixty years before this story, Siena had been run by the Nove, the Council of Nine: a nine-man committee that rotated every two months. This was one of the most advanced **experiments in republican government** in medieval Europe.\n\n' +
        'My father hoped I would take over his cobbling work. My hands were clumsy. At fourteen I ruined a pair of shoes, and my master said: "Agnolo, this is not your trade. But you write well."\n\n' +
        'At sixteen I began as a bookkeeper for the guild. At twenty I met my wife Niccoluccia. She was the daughter of Bindo di Cecco, a wool trader from south Siena. She was half a head shorter than me. She could not read. The year we married, she gave me a goose-feather quill and said: "Agnolo, you keep accounts for other people at the guild. Come home and write something for our own family."\n\n' +
        'That year I began my Cronaca senese, a chronicle of Siena. Twice a week I wrote: council decisions, merchants arriving by port, churches being built, harvests failing, the years of war with Florence and what the fighting cost.\n\n' +
        'By May 1348, our family had five children (the names and ages here are narrative invention; the historical record only confirms there were five):\n\n' +
        'Eldest, a boy, Niccolò, twelve, already learning the wool trade from his maternal grandfather.\n' +
        'Second, a boy, Pietro, ten, could climb the fig tree in our courtyard.\n' +
        'Third, a girl, Caterina, eight, straight hair like her mother\'s.\n' +
        'Fourth, a girl, Lisa, six, only spoke to me, hid behind my back when strangers came.\n' +
        'Fifth, a boy, Tommaso, three, just learning to walk that year, had a bad fever once and pulled through. We thought the worst was behind us.\n\n' +
        'On the morning of May 8, on my way home from the Palazzo Pubblico, I crossed the Piazza del Campo (the shell-shaped main square, one of the most beautiful in Europe in those years and still standing today) and nodded to a fig-seller I passed every week. In that moment I did not know — three months later, the fig-seller would be dead, my five children would be dead, I would do certain things **with my own hands**, and the door to our house would never open again.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '5 个孩子 + 一个会拦我胡子的妻子——我的 Siena。下一节，6 月 plague 来了',
    expectedLength: '300-340 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'Agnolo di Tura',
    narrativeRef: '§3 Boccaccio gavoccioli + §4 1348 春爆发 + §5 Decameron 序言',
    content: {
      cn:
        '1348 年 6 月，Siena 开始死人。\n\n' +
        '6 月 3 日周二，我去 Palazzo Pubblico 查账。回家路上我看见 Via di Città 街上一个石匠倒在自家门口，他妻子在喊。我走过去。他脖子下面那个肿块比鸡蛋还大，黑灰色，硬得像石头——意大利文我们叫 gavoccioli（脓包）。他闭眼，脸朝下，大概已经死了一两小时。\n\n' +
        '我那天晚上回家，把这事写下。我那天写："**今日 Siena 死 35 人**"。这是我从市政厅档案抄来的当日下葬数字。我用阿拉伯数字（35），不用罗马数字 XXXV，因为我习惯了商人记账方式。\n\n' +
        '6 月 4 日周三，我又去 Palazzo Pubblico。那天的下葬数字是：\n\n' +
        '**60 人**。\n\n' +
        '一夜之间翻了将近一倍。\n\n' +
        '6 月 5 日周四。\n\n' +
        '**我那天没去 Palazzo Pubblico**。\n\n' +
        '我坐在我家二楼小书房，窗外是 Siena 那条向 Florence 方向的旧路。我面前一张羊皮纸、我的鹅毛笔、铁胆墨水。\n\n' +
        '我没写。\n\n' +
        '我那一刻——你必须知道——一个编年史家的第一反应**不是**记录，是**不相信**。脑子里反复转一句话："这个数字不对，一定哪里搞错了。一座城一夜不可能死 60 个人。市政厅档案员一定是把外面的乡村数字算进来了。明天我去亲自查，不要轻易写下不准确的东西。"\n\n' +
        '这是我那天**真正**想的。\n\n' +
        '但 6 月 6 日早上，我妻子 Niccoluccia 来书房叫我。她说："Agnolo，你下楼。巷子里 Lapo 师傅家的两个孩子昨晚一起死了。巷子另一头麦芽商 Berto 家三个人也死了。隔壁那家一家四口，昨晚四个人一起 gavoccioli——"\n\n' +
        '我下楼，穿过我们家小院子那棵无花果树。Pietro 没在树上。他在我背后揪我袖子说："爸，天主发疯了吗？"\n\n' +
        '我没回他。\n\n' +
        '我那天回书房，重新坐下。我不是怀疑，我是怕。我那只鹅毛笔在墨水里浸了三次，才写下当天的数字：\n\n' +
        '**6 月 6 日，Siena 死 80 余人**。\n\n' +
        '我写完，把 Cronaca 笔记本合上。我那一年第一次想：也许这件事不是我可以记完的。',
      en:
        'June 1348. Siena began to die.\n\n' +
        'Tuesday, June 3. I went to the Palazzo Pubblico to do accounts. On the way home I saw a stonemason collapsed in front of his own door on Via di Città. His wife was shouting. I walked over. The swelling under his collarbone was bigger than an egg, dark gray, hard as stone. In Italian we called these gavoccioli (buboes; the swollen lymph nodes that mark this disease). His eyes were closed, his face down, probably an hour or two already gone.\n\n' +
        'That evening I came home and wrote the entry. I wrote: "**Today in Siena, 35 dead.**" That was the day\'s burial count, copied from the city hall ledger. I used Arabic numerals (35), not Roman (XXXV)—habit of a merchant\'s accountant.\n\n' +
        'Wednesday, June 4. I went to the Palazzo Pubblico again. The burial count that day was —\n\n' +
        '**60 dead.**\n\n' +
        'Almost double, in one night.\n\n' +
        'Thursday, June 5.\n\n' +
        '**I did not go to the Palazzo Pubblico that day.**\n\n' +
        'I sat in my upstairs study. Outside the window ran the old road toward Florence. In front of me, a sheet of parchment. My quill. The iron-gall ink.\n\n' +
        'I did not write.\n\n' +
        'In that moment — you must know — a chronicler\'s first instinct is **not** to record. It is **disbelief**. The thought turning over and over in my head: "This number is wrong. The clerk must have mixed in the contado (the surrounding countryside) with the city numbers. A city cannot lose sixty people in one night. Tomorrow I will go and check the books myself. I must not write down something inaccurate."\n\n' +
        'That was what I was actually thinking.\n\n' +
        'But on the morning of June 6, my wife Niccoluccia came up to the study and called me: "Agnolo, come downstairs. Master Lapo down the alley lost two children last night, both at once. The malt-seller Berto on the other end of the alley lost three people. The neighbors next door, a family of four, all four had gavoccioli by last night."\n\n' +
        'I went down. I crossed our small courtyard, past the fig tree. Pietro was not in it. He was behind me, pulling my sleeve. He said: "Father, has God gone mad?"\n\n' +
        'I did not answer him.\n\n' +
        'That afternoon I went back to the study and sat down. It was not disbelief anymore. It was fear. I dipped my quill into the ink three times before I could write the day\'s number —\n\n' +
        '**June 6, Siena, more than 80 dead.**\n\n' +
        'I closed the Cronaca notebook. For the first time that year I thought: maybe this is not something I can finish recording.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我那年第一次想：也许这件事不是我可以记完的。下一节，7 月，制度全垮',
    expectedLength: '320-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Agnolo di Tura',
    narrativeRef: '§4 1348 夏 plague 高峰 + §3 Boccaccio "千层糕埋葬" + §6 制度崩塌',
    content: {
      cn:
        '1348 年 7 月，tutti morti（意大利文，"全死了"）——这是 Siena 街上孩子那年学会的口头禅。\n\n' +
        '7 月初，我去 Palazzo Pubblico，办公室门锁着。档案员 Gherardo 没来，他家昨夜全死。我去隔壁找另一个档案员 Cino，Cino 家也死了。剩下一个 14 岁的学徒 Vanni，他坐在档案室的木凳上，不知道下一步该做什么。\n\n' +
        '7 月 7 日，我们 Siena 的 podestà（这一年是个外来人，从 Bologna 雇来的，按 Siena 制度，市长必须从外城邦请）**逃了**。\n\n' +
        '他没说一声，半夜带着家眷骑马出 Porta Camollia 北门，往 Bologna 方向。我后来在 Cronaca 里写："**他走了。我不会写他的名字。让他在 Bologna 自己的史书里做记录吧**。"这是我那年写下最尖的一句。\n\n' +
        'Council of Nine 9 个议员，4 个死了，3 个跑了，剩下 2 个老人坐在 Palazzo Pubblico 的木长凳上：一个叫 Mino di Vanni，一个叫 Cecco di Lando。他们没办法做任何决定。他们等着自己也死。\n\n' +
        'Siena 这座城邦，70 年的共和实验，一个月内**institutional collapse**（制度坍塌）。\n\n' +
        '街上的事更难写。\n\n' +
        '尸体堆在自家门口，没有人收。我们叫收尸队，平时由 Siena 的慈善修会做。他们一半死了一半逃了。\n\n' +
        '我那天，7 月 12 日，我自己**推了一具尸体**。\n\n' +
        '是我家斜对面那个无花果小贩，我 5 月 8 日早上跟他点过头的那个。他死在自家门口。他的儿子（10 岁）站在尸体边上不会哭。我跟他说："孩子，你帮我抬脚，我抬肩。"\n\n' +
        '我们俩一起把他爸推上一辆借来的木车，往 Siena 城外山下的墓园走。半路我那只手——我胖嘛，汗在车把上——滑了一下，尸体差点翻下来。\n\n' +
        '到墓园，没有教士做最后告解。Domus（大教堂）的老神父也死了。墓园里挖了一个大坑，fossa comune（共葬坑）：10 具尸体一层，上面盖一层薄土，再 10 具，再一层。\n\n' +
        '我那天回家，身上一股别的东西的味道。我妻子 Niccoluccia 没让我进卧室，她在客厅给我打了一盆水。她说："Agnolo，你以后不要再去推。"\n\n' +
        '我那天晚上没回应她。\n\n' +
        '7 月底，Siena 城里一周死 5000 人，比我们去年一**整年**的下葬数字还多。\n\n' +
        'Cronaca 上我那一周只写了一句话："**这一周，人在 Siena 像虫子一样死。我没办法记下每个人**。"',
      en:
        'July 1348. Tutti morti (Italian for "everyone dies"). That summer, this became something Siena children chanted in the street.\n\n' +
        'Early July, I went to the Palazzo Pubblico. My office door was locked. The clerk Gherardo had not come in. His whole family had died the previous night. I went to find the next clerk, Cino. Cino\'s family was also gone. The only person left was a fourteen-year-old apprentice named Vanni, sitting on a wooden bench in the records room, not knowing what to do next.\n\n' +
        'July 7. Our podestà (that year an outsider hired from Bologna; by Siena custom, the chief magistrate must come from a different city-state to keep him impartial) — **fled**.\n\n' +
        'He told no one. In the middle of the night, he and his household rode out of Porta Camollia, the north gate, toward Bologna. Later I wrote in the Cronaca: "**He left. I will not write his name. Let him make his own record in Bologna\'s books.**" That was the sharpest line I wrote that year.\n\n' +
        'The Council of Nine: nine members. Four dead, three fled, two old men sitting on the wooden bench of the Palazzo Pubblico. One named Mino di Vanni, one named Cecco di Lando. They could decide nothing. They waited to die too.\n\n' +
        'Siena, this city-state, seventy years of republican experiment — in one month suffered **institutional collapse**.\n\n' +
        'The streets were harder to write down.\n\n' +
        'Bodies piled at front doors. No one collected them. The corpse-cart men were normally organized by the city\'s charitable brotherhood. Half of them were dead. The other half had fled.\n\n' +
        'On July 12, I pushed a corpse with my own hands.\n\n' +
        'It was the fig-seller across the street from us, the one I had nodded to on the morning of May 8. He died at his own door. His son, ten years old, stood next to the body and could not cry. I said to him: "Boy. Take the feet. I will take the shoulders."\n\n' +
        'The two of us lifted his father onto a borrowed wooden cart and pushed it down the slope outside the city walls toward the cemetery. Halfway there my hand (I am fat, you know; sweat made the handle slick) slipped, and the body almost rolled off.\n\n' +
        'At the cemetery there was no priest to give last rites. The old parish priest of the Domus (the cathedral) was already dead. They had dug a great pit, a fossa comune (mass grave): ten bodies in a layer, a thin layer of earth on top, another ten bodies, another thin layer. Boccaccio, witnessing the same thing in Florence at the same time, would call it in his Decameron: "they buried them as one stacks a layer cake."\n\n' +
        'I came home that evening with a smell on my clothes that was not normal smell. My wife Niccoluccia did not let me into the bedroom. She brought me a basin of water in the front room. She said: "Agnolo. You will not push another body."\n\n' +
        'I did not answer her that night.\n\n' +
        'By late July, Siena was burying five thousand people a week, more in one week than the city normally buried in an entire year.\n\n' +
        'In the Cronaca that week I wrote one sentence only: "**This week, people in Siena are dying like insects. I cannot write down each one.**"',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我妻子那晚说"你不要再推尸体了"，我没回。下一节是这个视角 最重的一节',
    expectedLength: '340-380 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'Agnolo di Tura',
    narrativeRef: '§3 Agnolo bio + Agnolo documented quote: "I, Agnolo di Tura, called the Fat... buried my five children with my own hands"',
    content: {
      cn:
        '1348 年 7 月底到 8 月初。9 天。我家。\n\n' +
        '我后来在 Cronaca 上写这件事，只用了一句意大利文。这一句活下来了，是黑死病文献里最锋利的几行字：\n\n' +
        '> "E io, Agnolo di Tura, detto el grasso, soppellii con le mie mane cinque mei figliuoli **in una fossa**; e così fece molti altri ancora. E furono molti che furono coperti di terra così poco, che e cani li discivellavano e mangiavano per la città molti corpi."\n\n' +
        '> "我，Agnolo di Tura，绰号胖子，亲手把我五个孩子埋进一个坑（fossa comune，城里的公共大坟）。许多别的人也是这样。还有许多尸体盖土太浅，狗把他们扒出来在城里吃。"\n\n' +
        '（旁白：Cronaca 上"一个坑"三个字背后，是 Agnolo 自己经历的那 9 天。下面是那 9 天的样子。）\n\n' +
        '7 月 28 日早上，Tommaso（3 岁，最小）脖子根上一个肿块。我妻子那一刻没尖叫，她只是看了我一眼。她那一眼，我一辈子记得。\n\n' +
        '7 月 30 日，Tommaso 死。\n\n' +
        '我抱他出门。我家小院那棵无花果树，Pietro 不久之前还在树上。我把 Tommaso 放在木板上，自己一锹一锹挖坑。我家西边那块小田，我们家自己的地，离 Siena 城墙大概 800 步。我挖的时候出汗，眼睛进汗，分不清是汗还是别的。\n\n' +
        '7 月 31 日，Lisa（6 岁）发烧。\n\n' +
        '8 月 1 日，Lisa 死。\n\n' +
        '8 月 2 日，Caterina（8 岁）。\n\n' +
        '8 月 3 日。\n\n' +
        '我那 9 天具体是什么样，我不会一天一天写给你看。**因为那不是尊重**。\n\n' +
        '9 天结束的时候，5 个坑挖在我家西边那块小田。我自己挖，我自己填，我没有请人帮忙。我那 9 天不分白天黑夜。我妻子 Niccoluccia 活着，她坐在我家小院那棵无花果树下。她不进屋，不出院，那 9 天只在树下坐着，不说话。\n\n' +
        '第 9 天傍晚，我从小田走回家，身上脏，手指头有的指甲翻了。我推开院门，Niccoluccia 抬头看我。她说一句话：\n\n' +
        '"Agnolo，你今天还要去 Palazzo Pubblico 吗？"\n\n' +
        '我那一刻——一个失去 5 个孩子的人在 1348 年 8 月一个傍晚的脑子里只想到一件事：\n\n' +
        '**我不知道明天太阳出来我要不要起来**。\n\n' +
        '我没回 Niccoluccia 的话。\n\n' +
        '我进屋，点了一支油灯，从书架上拿下 Cronaca 笔记本，翻到 7 月 28 日那一页。我什么都没写。我把笔记本合上，吹熄油灯。我那天晚上睡了 12 小时。这是 1348 年 5 月以来我睡得最长的一夜。',
      en:
        'Late July to early August 1348. Nine days. Inside my own house.\n\n' +
        'I would later write about this in my Cronaca, in only one sentence. That sentence survived. It is among the sharpest lines in the entire Black Death record:\n\n' +
        '> "E io, Agnolo di Tura, detto el grasso, soppellii con le mie mane cinque mei figliuoli **in una fossa**; e così fece molti altri ancora. E furono molti che furono coperti di terra così poco, che e cani li discivellavano e mangiavano per la città molti corpi."\n\n' +
        '> "I, Agnolo di Tura, called the Fat, **buried my five children with my own hands in a single pit** (a fossa comune, the city\'s mass grave). Many others did the same. Many bodies were covered with so little earth that the dogs dug them up and ate them in the city."\n\n' +
        '(Narrator: behind those three words in the Cronaca, "in a single pit," are the nine days Agnolo lived through. What follows is those nine days.)\n\n' +
        'Morning of July 28. Tommaso (three years old, the youngest) had a swelling at the base of his neck. My wife in that moment did not scream. She only looked at me once. That one look I have remembered for the rest of my life.\n\n' +
        'July 30. Tommaso died.\n\n' +
        'I carried him outside. The fig tree in our courtyard, where Pietro had climbed not long before. I laid Tommaso on a wooden board. I dug the pit myself, one shovel at a time. The small field west of our house, our family\'s own piece of land, about eight hundred paces from the city wall. While I dug I sweated. Sweat got into my eyes. I could not tell what was sweat and what was the other thing.\n\n' +
        'July 31. Lisa (six). Fever.\n\n' +
        'August 1. Lisa died.\n\n' +
        'August 2. Caterina (eight).\n\n' +
        'August 3.\n\n' +
        'I will not break those nine days into nine separate scenes for you. **That would not be respect.**\n\n' +
        'At the end of nine days, there were five pits in the small field west of our house. I dug each one myself. I filled each one myself. I did not ask anyone to help. For nine days I did not separate day from night. My wife Niccoluccia was alive. She sat under the fig tree in our courtyard. She did not come inside. She did not leave the yard. For nine days she sat under that tree and did not speak.\n\n' +
        'On the evening of the ninth day, I walked back from the small field. My clothes were filthy. Two of my fingernails had torn. I pushed open the courtyard gate. Niccoluccia looked up at me. She said one sentence —\n\n' +
        '"Agnolo. Are you going to the Palazzo Pubblico today?"\n\n' +
        'In that moment — what was inside the head of a man who had lost five children, on a summer evening in 1348, was only one thing:\n\n' +
        '**I do not know whether I should get up tomorrow when the sun comes.**\n\n' +
        'I did not answer Niccoluccia.\n\n' +
        'I went inside. I lit a single oil lamp. I took the Cronaca notebook from the shelf. I opened it to the page for July 28. I wrote nothing. I closed the notebook. I blew out the lamp. That night I slept twelve hours. It was the longest I had slept since May.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '9 天 5 个坑，我妻子 9 天没说话。下一节，8 月，为什么我又拿起笔',
    expectedLength: '380-420 字',
    expectsRealAnswer: false,
  },
  {
    id: 6,
    phase: 'story',
    cosplay: 'Agnolo di Tura',
    narrativeRef: '§5 Decameron "通过书写抗拒虚无" + §6 Boccaccio + Petrarch 文化创造',
    content: {
      cn:
        '1348 年 8 月中旬，大概是埋完最后一个孩子之后第 5 天。我又拿起鹅毛笔。\n\n' +
        '我得告诉你那一刻发生了什么。这是这个视角让你听见的。Cronaca 上那一段我后来写的话非常短，但**那一刻**脑子里的东西，比我笔下的字多。\n\n' +
        '8 月 13 日早上，Domus（Siena 大教堂）的钟响了：Pater Noster，这是中世纪天主教徒每天早晚念的"主祷文"，拉丁语开头那两个字"我们的父亲"。Niccoluccia 那天早上第一次走出院子，她去 Domus，要为孩子们念 Pater Noster。\n\n' +
        '我没去。\n\n' +
        '我那一刻我承认：我对天主有怒。我妻子有信仰我没有。我那一刻坐在书房里，窗外是 8 月的太阳，空气里还有一点点别的东西的味道。\n\n' +
        '我面前，Cronaca 笔记本，合着。\n\n' +
        '我想：我可以现在合一辈子。我可以从此不写。我可以下楼去鞋匠工会请假，继续做账，回家煮饭，等下一波瘟疫把我也带走。\n\n' +
        '我也想。\n\n' +
        '但整个 1348 年 Siena 死了 30000 人（约总人口一半）。这个数字以后会有人问吗？会有人记得吗？会不会 50 年后 Siena 一个 12 岁的孩子（就像我自己 12 岁那年问我爸 Florence 跟我们 1260 年那场仗一样）问他爸："1348 年那场瘟疫是怎么样的？"——他爸答不上来，因为没人写下来。\n\n' +
        '那这 30000 个人，**等于没活过吗**？\n\n' +
        '那我的 5 个孩子——他们是 30000 里的 5 个，**他们也等于没活过吗**？\n\n' +
        '我那一刻打开 Cronaca。\n\n' +
        '我后来在 Cronaca 里**亲笔**写下一句话，这句话**是 documented 引文**，不是我虚构的：\n\n' +
        '> "E io Agnolo di Tura... scrissi questo perché altrimenti non lo crederebbe nessuno."\n\n' +
        '> "我 Agnolo di Tura......写下这些，是因为**否则没有人会相信**。"\n\n' +
        '这是一个编年史家在失去 5 个孩子之后回答自己的话：\n\n' +
        '"**为什么继续写**？\n\n' +
        '**因为如果我不写，没有人会知道我们活过**。"\n\n' +
        '我那年 35 岁。我以前以为我写 Cronaca 是因为我喜欢，是因为我妻子那年送我一支鹅毛笔，是因为这是 Siena 这座城邦的传统。\n\n' +
        '8 月 13 日早上，我才真的懂：\n\n' +
        '**写下来，是抗拒虚无的唯一方式**。\n\n' +
        '这跟同一年 Florence 的 Boccaccio 写《Decameron》是同一种本能。他用 100 个故事，我用一支铁胆墨水。我们俩互不相识，但我们在 1348 年 8 月做的是同一件事：**用书写抗拒虚无**。',
      en:
        'Mid-August 1348. About five days after burying the last child. I picked up the quill again.\n\n' +
        'I have to tell you what happened in that moment. This is what the lens lets you hear. The line I later wrote in the Cronaca about it is very short, but what was actually in my head **in that moment** is more than the words on the page.\n\n' +
        'Morning of August 13. The bells of the Domus (the Siena cathedral) rang for the Pater Noster, the "Our Father," the Latin prayer Christians of that age said morning and evening. Niccoluccia walked out of our courtyard for the first time. She was going to the cathedral to say Pater Noster for the children.\n\n' +
        'I did not go.\n\n' +
        'In that moment, I will tell you the truth: I was angry at God. My wife had faith. I did not. I sat at the desk in my study. Outside, the August sun. The air still carried a faint trace of the other smell.\n\n' +
        'In front of me, the Cronaca notebook. Closed.\n\n' +
        'I thought: I can keep this closed forever. I can stop writing now. I can go down to the cobblers\' guild and take a leave. Keep doing accounts. Come home and cook. Wait for the next wave of plague to take me too.\n\n' +
        'I also thought —\n\n' +
        'But over the whole of 1348, Siena lost thirty thousand people (about half the population). Will anyone ever ask about that number? Will anyone remember? Fifty years from now, will some twelve-year-old in Siena (the way I once, at twelve, asked my father about the war Siena fought against Florence in 1260) ask his father, "What was the plague of 1348 like?" — and his father will not be able to answer, because no one wrote it down.\n\n' +
        'Then those thirty thousand people — **is it as if they never lived**?\n\n' +
        'Then my five children — they were five out of those thirty thousand — **is it as if they never lived**?\n\n' +
        'In that moment, I opened the Cronaca.\n\n' +
        'Later in the Cronaca I would **with my own hand** write down one line, and **this is a documented quote, not invented by this lens**:\n\n' +
        '> "E io Agnolo di Tura... scrissi questo perché altrimenti non lo crederebbe nessuno."\n\n' +
        '> "And I, Agnolo di Tura... wrote this down, **because otherwise no one would believe it**."\n\n' +
        'That is a chronicler answering his own question after losing five children:\n\n' +
        '"**Why keep writing?**\n\n' +
        '**Because if I do not, no one will know we lived.**"\n\n' +
        'I was thirty-five that year. Before, I thought I wrote the Cronaca because I liked writing. Because my wife had given me a quill the year we married. Because it was Siena\'s civic tradition.\n\n' +
        'On the morning of August 13, I finally understood:\n\n' +
        '**Writing it down is the only way to push back against nothingness.**\n\n' +
        'This was the same instinct that, in the same year in Florence, drove Boccaccio to write the Decameron. He used a hundred stories. I used iron-gall ink. We did not know each other. But what we were doing in August 1348 was the same thing: **using writing to refuse the void**.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '"如果我不写，没有人会知道我们活过"。下一节，9 月，我开始记别的事',
    expectedLength: '360-400 字',
    expectsRealAnswer: false,
  },
  {
    id: 7,
    phase: 'story',
    cosplay: 'Agnolo di Tura',
    narrativeRef: '§4 1349/01 Strasbourg + §3 Clement VI 1348/9/26 敕令 + flagellants',
    content: {
      cn:
        '1348 年 9 月到 10 月，Cronaca 里我开始记**别的事**。\n\n' +
        '不是个人的，是**集体的**。是这场瘟疫怎么把人变成了一些他们自己也认不出来的东西。\n\n' +
        '9 月初，一队人从 Bologna 方向走进 Siena，大概 200 个，男的居多。他们光着上身，手里拿着：\n\n' +
        '一根带 3 个铁结的鞭子。\n\n' +
        '他们走在 Via Cassia 上，边走边鞭打自己，后背全是血。他们一边打一边唱拉丁语 Stabat Mater（"圣母站立"，一首关于圣母玛利亚在十字架下哭的圣歌）。他们叫自己 Flagellanti，**鞭笞派**。\n\n' +
        '他们的逻辑（你必须懂这个逻辑）是：**plague 是天主的惩罚，因为人有罪，所以唯一的解药是人自己惩罚自己，以痛苦换天主的怜悯**。\n\n' +
        '我那天在 Palazzo Pubblico 二楼，窗户开着。下面广场上，我看见一个我认识的人也加了进去：是去年还是我们工会理事的 Vanozzo，一个 50 岁的羊毛商，平时是城里有头有脸的人。这一刻他光着上身，在鞭打自己，在哭。\n\n' +
        '我那天回家在 Cronaca 上写："**人在失去理性**"。\n\n' +
        'Flagellanti 这种集体自残运动 1348-1349 横扫德国、法国北部、北意大利。上千群，总人数大概 80 万。\n\n' +
        '但 flagellanti 不是这一年最坏的事。\n\n' +
        '9 月底，一封信从 Avignon 教皇 Clement VI 那里送到我们 Siena 大教堂。\n\n' +
        'Quamvis Perfidiam（拉丁语，"虽然他们的不忠"）是教皇 1348 年 9 月 26 日发的一道敕令。内容大致是："**犹太人不是 plague 的原因，他们自己也死。任何屠杀犹太人的基督徒都被绝罚（excommunication，开除教会，失去基督徒身份）**"。\n\n' +
        '我那天读这封信，心里一沉。\n\n' +
        '为什么教皇要专门发这道敕令？\n\n' +
        '因为德国、法国北部已经开始**屠杀犹太人**。谣言说"犹太人在井里下毒"——这是无稽之谈，但谣言能杀人。\n\n' +
        '我们 Siena，我必须老实说：**没有屠犹**。Siena 城里 1348 年大概 200 个犹太家庭，没有一户被烧。这是 Siena 这座城邦那一年做对的事之一。也许是因为我们 Council of Nine 还有 2 个老人坐在 Palazzo Pubblico；也许是因为我们的 podestà 跑了，没有人来煽动；也许是因为我们 Tuscany 商人传统里，犹太人是**银行家，是借钱给我们做生意的人**。你不烧你的银行家。\n\n' +
        '但 1349 年 1 月底，消息从北方来。\n\n' +
        '**1349 年 2 月 14 日（Saint Valentine\'s Day），Strasbourg（今天德国-法国交界的城），在城西 Werd 岛的犹太墓地上架起的木堆里，2000 个犹太人（男人、女人、孩子）被活活烧死**。\n\n' +
        '我那天读这封信，在 Cronaca 上抄下日期，抄下数字，抄下 Strasbourg 这个城名。\n\n' +
        '我那一刻没有写下我自己的看法，只记下事实。\n\n' +
        '我笔下只写了事实。但合上笔记本之前，我心里转过一句话：\n\n' +
        '"**人比 plague 还可怕。plague 让人死，人让人死的方式**比 plague 更让人不敢往下想。"',
      en:
        'September and October 1348. In the Cronaca I began recording **other things**.\n\n' +
        'Not personal anymore. **Collective**. How this plague was turning people into something they themselves no longer recognized.\n\n' +
        'Early September: a column of about two hundred people walked into Siena from the direction of Bologna. Mostly men. They were stripped to the waist. In their hands they held whips knotted three times with iron beads.\n\n' +
        'They walked along the Via Cassia, whipping themselves as they walked. Their backs ran with blood. As they whipped, they sang Latin Stabat Mater (the hymn about the Virgin Mary standing at the foot of the cross, weeping). They called themselves Flagellanti — **the Flagellants**.\n\n' +
        'Their logic — and you must understand this logic — was: **plague is God\'s punishment for human sin; therefore the only cure is for humans to punish themselves; pain for mercy, an exchange**.\n\n' +
        'That day I was on the second floor of the Palazzo Pubblico. The window was open. On the square below, I saw someone I knew join the column. Vanozzo, last year still a councilor of our guild, a fifty-year-old wool trader, normally a respected man in the city. In that moment, stripped to the waist, whipping himself, weeping.\n\n' +
        'That evening in the Cronaca, I wrote: "**People are losing reason.**"\n\n' +
        'The Flagellanti, this self-harm movement, swept across Germany, northern France, and northern Italy through 1348–1349. Hundreds of bands. Maybe 800,000 people in total.\n\n' +
        'But the Flagellants were not the worst thing that year.\n\n' +
        'In late September, a letter from Pope Clement VI in Avignon arrived at the Siena cathedral.\n\n' +
        'Quamvis Perfidiam (Latin for "Although their faithlessness") was a papal bull (a formal Church decree) issued on September 26, 1348. Its content, in plain terms: "**Jews are not the cause of the plague. They die from it too. Any Christian who massacres Jews is excommunicated (cut off from the Church, no longer a Christian).**"\n\n' +
        'I read this letter, and my heart sank.\n\n' +
        'Why did the Pope have to issue this decree at all?\n\n' +
        'Because in Germany and northern France, **massacres of Jews had already begun**. The rumor: "Jews are poisoning the wells." It was nonsense. But nonsense kills.\n\n' +
        'In Siena — I must be honest — **we did not massacre Jews**. About two hundred Jewish families lived in Siena in 1348. Not one household was burned. This was one of the things our city did right that year. Perhaps because two old men of the Council of Nine were still sitting at the Palazzo Pubblico. Perhaps because our podestà had fled, so there was no one to whip up the crowd. Perhaps because in our Tuscan merchant tradition, Jews were **bankers, the people who lent us money to do business**. You do not burn down your banker.\n\n' +
        'But by late January 1349, news arrived from the north.\n\n' +
        '**On February 14, 1349 (Saint Valentine\'s Day), in Strasbourg (a city on what is today the French-German border), on a wooden pyre built in the Jewish cemetery on Werd Island west of the city, two thousand Jews (men, women, and children) were burned alive.**\n\n' +
        'I read this report and copied the date into my Cronaca. The number. The name Strasbourg.\n\n' +
        'I did not write down my own reaction in that entry. I only recorded the fact.\n\n' +
        'I wrote only the fact. But before I closed the notebook that night, one sentence turned in my head:\n\n' +
        '"**People are more terrible than the plague. The plague kills people. The ways in which people kill people** go further than I want to follow."',
    },
    deliverGoal: '[fallback]',
    engagementHook: '"人比 plague 还可怕"。下一节，1349-1351，为什么我**还**继续写',
    expectedLength: '360-400 字',
    expectsRealAnswer: false,
  },
  {
    id: 8,
    phase: 'story',
    cosplay: 'Agnolo di Tura',
    narrativeRef: '§3 Agnolo bio 1351 停笔 + §4 1351 第一波结束 + §6 Statute of Laborers',
    content: {
      cn:
        '1349 年。1350 年。1351 年。\n\n' +
        '我活下来。Niccoluccia 也活下来。我们俩没要更多孩子。那时候我妻子 33 岁，还能生，但我们都没说。我们家二楼那 5 个孩子的房间，我把门关上。那扇门 1351 年到 1363 年我闭眼之前一直关着，我没再上去。\n\n' +
        '我继续写 Cronaca，但 1349 年起字数明显少。\n\n' +
        '1349 年我记了：plague 在 Siena 第二波（4 月又一波小爆发，死了 2000 人）；podestà 那个跑去 Bologna 的，Bologna 也死人，他在那里也死了，听说是肺炎，我没写他名字（说到做到）；Florence 跟我们重新签贸易协议；市里 Council of Nine 重组；9 月底教会任命了一个新的大教堂神父。\n\n' +
        '1350 年（Cronaca 字数最少的一年）我写：庄稼大丰收（**因为劳力少了一半 + 田少有人争 + 那年雨水好**），但收割的人不够。农民开始要求工资上涨。以前 Siena 的庄园主一年付一个农民 4 lire（里拉，意大利当时小货币单位），1350 年开始要付 12 lire 才有人来。4 年里劳力价格**涨了 3 倍**。\n\n' +
        '1351 年，Siena 议会通过一个法令限制工资上涨，跟 1351 年英格兰国王 Edward III 颁的 Statute of Laborers（工人法令）几乎同时。Siena 这边的法令同样**没有用**：农民可以走，城邦之间互相挖人。\n\n' +
        '1351 年 12 月，我在 Cronaca 上写下最后一笔。\n\n' +
        '这一笔不是关于 plague，是关于一场城里的小集会：12 月 23 日 Piazza del Campo 上，一群手工业学徒抗议工资问题。\n\n' +
        '我写完，合上笔记本。\n\n' +
        'Cronaca senese 在 1351 年 12 月 23 日**停笔**。\n\n' +
        '我 1351 年才 38 岁。我后来又活了 12 年，1363 年才闭眼，50 岁。\n\n' +
        '但 Cronaca 我没再写一笔。\n\n' +
        '为什么停笔？这个问题我书里没答。下面是我心里的答：\n\n' +
        '也许是 Niccoluccia 那年开始病。她 1352 年 6 月死。我那年第一次再没人在书房门口端水。\n\n' +
        '也许是我那年开始**忘** Tommaso 跟 Pietro 的脸。一个父亲应该记得自己孩子的脸，但 4 年过去，脸开始模糊。这一刻我意识到：一个失去 5 个孩子的人不是一直活在悲伤里，他**也会忘**。这个发现比悲伤更可怕。\n\n' +
        '也许是我那一年终于"写够了"。30000 笔、5 个坑、一段反犹屠杀、一段制度坍塌、一段 flagellanti、一段 Niccoluccia 树下 9 天、一段我**亲手**做的事、一段 "scrissi questo perché altrimenti non lo crederebbe nessuno"。这些事我都写下了。后人有人想看，他可以看。我做完了我能做的。\n\n' +
        '也许三个原因都有。\n\n' +
        '我 1363 年闭眼那天，我没有特别想说什么。我妻子已经死了 11 年，5 个孩子的坟在我家西边那块小田 15 年了，我在 Cronaca 上停笔 12 年。\n\n' +
        'Cronaca senese 笔记本一直在 Siena 城里。我儿子（妻子的远房侄子，过继来继承家产的，不是我亲生的）继承了它。他没读，放在书架上。一代一代传下去，300 年没人读，直到 17 世纪 Siena 一个抄写员重新发现。又过了几个世纪，直到现代历史学家发现它，保存在 Siena 国家档案馆。\n\n' +
        '我那一笔停在 1351 年 12 月 23 日，但那一笔后来又被打开了，只是我那一刻不知道。',
      en:
        '1349. 1350. 1351.\n\n' +
        'I lived. Niccoluccia lived. We did not have more children. She was thirty-three that year — she could still bear — but neither of us spoke of it. The room on our second floor where five children had slept — I closed the door. From 1351 until I closed my eyes in 1363, I did not open that door again.\n\n' +
        'I kept writing the Cronaca. But the entries became visibly shorter from 1349 onward.\n\n' +
        'In 1349 I recorded: a small second wave of plague hit Siena in April (about two thousand more dead). The podestà who had fled to Bologna died there too, of pneumonia I was told. I did not write his name (I had said I would not). Florence and Siena renewed their trade treaty. The Council of Nine was reconstituted. In late September the Church appointed a new parish priest for the cathedral.\n\n' +
        '1350 — the year with the fewest entries. I wrote: a great harvest (because labor was halved, fewer hands competed for fields, and the rain was good that year). But there were not enough hands to bring the harvest in. Farmers began demanding higher wages. A landowner in Siena before the plague had paid a laborer four lire (lire — small Italian coin, the unit of account at the time) per year. By 1350 he had to pay twelve. **In four years, the price of labor had tripled.**\n\n' +
        '1351 — the Siena council passed a law to cap wage increases. It was nearly simultaneous with King Edward III\'s Statute of Laborers in England. Both **failed** for the same reason: workers could simply leave. City-states poached each other\'s laborers. The law could not be enforced.\n\n' +
        '— December 1351 — I wrote my final entry in the Cronaca.\n\n' +
        'It was not about plague. It was about a small gathering in the city. On December 23, in Piazza del Campo, a group of guild apprentices protested over wages.\n\n' +
        '— I wrote it down. I closed the notebook.\n\n' +
        '— On December 23, 1351, the Cronaca senese **stopped**.\n\n' +
        'I was thirty-eight that year. I would live another twelve years. I closed my eyes in 1363, at fifty.\n\n' +
        '— I did not write one more entry.\n\n' +
        'Why did I stop? I never answered that question in writing. Here is the answer that was inside me:\n\n' +
        '— Perhaps because Niccoluccia began to fall ill that year. She died in June 1352. After that there was no one bringing water to the door of the study.\n\n' +
        '— Perhaps because I had started to **forget** the faces of Tommaso and Pietro. A father should remember his children\'s faces. Four years on, the faces blurred. The moment I realized this — that a man who has lost five children does not live forever in grief; **he also forgets** — was more terrible than grief itself.\n\n' +
        '— Perhaps because I had finally written enough. Thirty-five thousand entries. Five pits. The pogroms in the north. The collapse of the city government. The Flagellants. Niccoluccia\'s nine days under the fig tree. The things I did **with my own hands**. "Scrissi questo perché altrimenti non lo crederebbe nessuno" — "I wrote this because otherwise no one would believe it." All of it was on the page. Anyone who came after, if they wished, could read. I had done what I could do.\n\n' +
        '— Perhaps all three.\n\n' +
        'On the day I closed my eyes in 1363, I had no particular last words. My wife had been dead eleven years. The graves of my five children had been in the small field west of our house for fifteen years. I had been silent on the Cronaca for twelve years.\n\n' +
        '— The Cronaca senese notebook stayed in Siena. My adopted heir (a distant nephew of my wife\'s, taken in to inherit the household — not a child of my body) received it. He did not read it. He put it on a shelf. It passed down generation by generation. For three hundred years no one read it. Then a Siena copyist rediscovered it in the seventeenth century. Then, centuries later, modern historians found it again. Today it is preserved in the State Archive of Siena.\n\n' +
        'My pen stopped on December 23, 1351. The page was opened again later — but in that moment I did not know.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我 1351 年停笔，12 年没再写一字。下一节，700 年后我写下的字怎么样了',
    expectedLength: '380-420 字',
    expectsRealAnswer: false,
  },
  {
    id: 9,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§6 长尾 700 年回声 + §11 Q5 plague 幸存者',
    content: {
      cn:
        '现在我们离开 Agnolo 的视角，往后看。\n\n' +
        'Agnolo di Tura del Grasso 1363 年在 Siena 闭眼，50 岁。Cronaca senese 已经停笔 12 年。他妻子已经死 11 年。他 5 个孩子已经在西边那块小田躺了 15 年。\n\n' +
        'Agnolo **没有看到的事**：\n\n' +
        '**他 5 个孩子的名字没有保存下来**。这个视角给的 Niccolò、Pietro、Caterina、Lisa、Tommaso 是这一遍的虚构。历史只确认了"5 个"。他们的脸、他们具体是怎么死的、他们最后的话，历史一片空白。\n\n' +
        '但 Agnolo **写下的数字**保存下来了。\n\n' +
        '1377 年（离 Agnolo 死 14 年）**Venice（威尼斯）通过欧洲第一条 quarantine 法令**：所有入港船强制隔离 40 天才能下货。这个数字"40"，意大利文 quaranta giorni，是 quarantine 这个词的起源。这是**人类公共卫生史**的开端。Agnolo 没活到看见，但 Venice 议员们决定 40 天的时候，他们参考的是 1348 年城邦档案，里面就有 Siena 那一年的记录。\n\n' +
        '1417 年（离 Agnolo 死 54 年）Boccaccio（那个跟 Agnolo 互不相识但同年都在写的 Florence 文人）的《Decameron》已经成欧洲文学经典。他跟 Petrarch 收藏的古希腊罗马手稿，开始流向 Florence、Venice 的少数活下来继承大量财产的家族。\n\n' +
        '这就是 Renaissance 起点。**没有 plague，可能没有 Renaissance**。Brunelleschi 的圆顶（1436）、Donatello 的雕塑、Botticelli、Leonardo da Vinci、Michelangelo，他们的整个文化运动，在某种意义上是**1348 年那 30000 个 Siena 死人 + 50000 个 Florence 死人 + 整个欧洲 2500 万死人留下的真空被人重新填出来的样子**。\n\n' +
        '1517 年（离 Agnolo 死 154 年）Martin Luther 在 Wittenberg 教堂门上钉 95 条论点，开始 Reformation（宗教改革）。**Reformation 的种子是 plague 时代教会的失信**：教士在 1348 年拒绝去做 last rites（最后告解），民众永远记得。这种记忆 170 年后在 Luther 笔下变成宗教改革。\n\n' +
        '1894 年（离 Agnolo 死 531 年）香港爆发 plague。年轻的法国-瑞士医生 Alexandre Yersin 跟日本医生 Kitasato Shibasaburō 一起，分别独立**发现造成 plague 的细菌**，后来叫 Yersinia pestis。\n\n' +
        'Boccaccio 在 Decameron 序言里描述的"鸡蛋大的黑肿块"，Agnolo 写下的"35 死，60 死，80 死"，这些症状跟数字 **546 年后**终于有了一个细菌名字。\n\n' +
        '2020 年（离 Agnolo 死 657 年）COVID-19，全球大流行。\n\n' +
        '历史学家这一年大量重读 Boccaccio，重读 Ibn al-Wardi，重读 Agnolo，发现一件**不舒服的事**：1348 年 Siena 街上的反应（隔离、恐慌、找替罪羊（1348 是犹太人/2020 是亚裔）、对权威的怀疑（1348 是教皇/2020 是 CDC）、家庭把生病的人赶出门（1348 是 Boccaccio 写的"父亲赶生病儿子"/2020 是养老院的孤独死））**700 年没变**。\n\n' +
        'Agnolo 1348 年 8 月 13 日早上对自己说："如果我不写，没有人会知道我们活过。"\n\n' +
        '他不知道的是：\n\n' +
        '**他写下来的字，700 年后让另一场大流行里的人**看见自己。\n\n' +
        '他的 5 个孩子的名字没有保存下来。但他**亲手**埋的那 5 个坑，通过他写下的那 11 个意大利文字（"seppellii con le mie mani i miei cinque figliuoli"），700 年后还在让人停下来。\n\n' +
        '他选择了**写下数字**，而不是**写下他孩子的脸**。\n\n' +
        '但他写下的数字，让我们 700 年后还能看见他孩子的脸的**轮廓**。',
      en:
        'Now we leave Agnolo\'s perspective and look forward.\n\n' +
        'Agnolo di Tura del Grasso closed his eyes in Siena in 1363, at fifty. The Cronaca senese had been silent for twelve years. His wife had been dead for eleven. His five children had been lying in the small field west of the house for fifteen years.\n\n' +
        'What Agnolo **did not see**:\n\n' +
        '**The names of his five children were not preserved**. The Niccolò, Pietro, Caterina, Lisa, and Tommaso this lens gave you are this lens\'s creation — history confirms only that there were five. Their faces. The exact way each one died. Their last words. History is silent on these.\n\n' +
        '— But the **numbers** Agnolo wrote down were preserved.\n\n' +
        '1377 — fourteen years after Agnolo died — **Venice passed Europe\'s first quarantine law**: all incoming ships had to wait forty days at the port before unloading. The number "40" — in Italian quaranta giorni — is the origin of the word quarantine. This was the beginning of public health law in human history. Agnolo did not live to see it — but when the senators of Venice settled on forty days, the records they consulted were the city-state archives of 1348, which included the Siena entries.\n\n' +
        '1417 — fifty-four years after Agnolo — Boccaccio, that Florentine writer Agnolo never met but who wrote in the same year, had become a foundational author of European literature. The Greek and Roman manuscripts he and Petrarch had collected began flowing into the few wealthy Florentine and Venetian families that had inherited fortunes from those who died.\n\n' +
        '— This was the start of the Renaissance. **Without the plague, there might have been no Renaissance.** Brunelleschi\'s dome (1436), Donatello\'s sculpture, Botticelli, Leonardo da Vinci, Michelangelo — the entire cultural movement, in one sense, was **the shape of human creation refilling the vacuum left by the 30,000 dead in Siena, the 50,000 dead in Florence, the 25 million dead across Europe in 1348**.\n\n' +
        '1517 — 154 years after Agnolo — Martin Luther nailed his 95 theses to the door of the Wittenberg church and began the Reformation. **The seed of the Reformation was the Church\'s broken trust during the plague years.** Priests had refused last rites in 1348. People remembered. That memory, 170 years later, came back through Luther\'s pen as religious revolution.\n\n' +
        '1894 — 531 years after Agnolo — plague broke out in Hong Kong. A young French-Swiss doctor named Alexandre Yersin and a Japanese doctor named Kitasato Shibasaburō, working separately, **identified the bacterium that causes plague** — later named Yersinia pestis.\n\n' +
        '— The "egg-sized black swellings" Boccaccio described in his Decameron preface — the "35 dead, 60 dead, 80 dead" Agnolo wrote down — those symptoms and numbers, **546 years later**, finally had a bacterial name.\n\n' +
        '2020 — 657 years after Agnolo — COVID-19. Global pandemic.\n\n' +
        '— Historians that year reread Boccaccio. Reread Ibn al-Wardi. Reread Agnolo. They found an **uncomfortable thing**: the reactions on the streets of 1348 Siena — quarantine, panic, scapegoating (Jews in 1348, Asians in 2020), distrust of authority (the Pope in 1348, the CDC in 2020), families pushing the sick out of the house (Boccaccio\'s "fathers casting sick sons out" in 1348, the lonely deaths in nursing homes in 2020) — **had not changed in 700 years**.\n\n' +
        'On the morning of August 13, 1348, Agnolo said to himself: "If I do not write this down, no one will know we lived."\n\n' +
        '— What he did not know:\n\n' +
        '— **The words he wrote down would let people in another pandemic, 700 years later, see themselves.**\n\n' +
        '— The names of his five children were not preserved. But the five graves he dug **with his own hands** — through the eleven Italian words he wrote — "seppellii con le mie mani i miei cinque figliuoli" — still make people stop, 700 years later.\n\n' +
        'He chose to **write down the numbers** instead of **writing down his children\'s faces** —\n\n' +
        '— And yet the numbers he wrote down let us, 700 years later, see the **outline** of those faces.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '现在你（扮演 Agnolo 8 节）回头看你自己',
    expectedLength: '380-420 字',
    expectsRealAnswer: false,
  },
  // ═════ Synthesis（真 Socratic）═════
  {
    id: 10,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§5 Decameron 抗虚无 + §9 historiography + §11 思考问题 — Agnolo 8 月 13 日选择',
    content: {
      cn:
        '你刚扮演了 Agnolo——一个 35 岁的 Siena 鞋匠工会账房 + 业余编年史家。他在 1348 年 7 月底到 8 月初**亲手**埋了自己的 5 个孩子，9 天后他**重新拿起鹅毛笔**。\n\n' +
        '问题来了。Agnolo 1348 年 8 月 13 日早上——他失去 5 个孩子之后第 5 天——决定**继续写 Cronaca**。\n\n' +
        '这是**历史使命的尊严**（你必须记录 = 你必须当人）还是**创伤性逃避**（写 chronicle = 不去想孩子）？\n\n' +
        '这两边**都有真证据**。心理学家跟历史学家在这个问题上**吵了 100 年**。\n\n' +
        '**一种说法 — 编年史家精神 / Boccaccio 同代人文主义传统**：Agnolo 那一刻面对的现实是，30000 个 Siena 死人没人记录就**等于没活过**。他自己 5 个孩子是这 30000 里的 5 个，如果他不写，他孩子也**等于没活过**。他选择写下来，是**承担一个知识分子的责任**，是给死者一个"活过"的证据。这是他作为一个父亲能给他孩子的**最后一件礼物**。700 年后我们还能停下来看那 11 个意大利文字，证明他**做对了**。同年 Florence 的 Boccaccio 写《Decameron》是同一种本能：**用书写抗拒虚无**。这是人文主义（humanism）的起点。Agnolo 那一刻是**伟大**的。\n\n' +
        '**另一种说法 — 创伤心理学派 / 现代 trauma studies（Judith Herman / Bessel van der Kolk）**：失去 5 个孩子是 trauma 顶级强度。人在这种 trauma 下大脑会做的最常见的事是**麻木 + 逃避** + **找一个可以掌控的小事重复做**来稳住自己。Agnolo 写 Cronaca 是他**之前**就熟悉的动作。这种**重复一个熟悉的动作**是 trauma response 的典型表现——"我不去想孩子，我去数城里今天死了多少人"。他**不是**在伟大地承担知识分子责任，他是在**用一个比孩子还小的事**填补孩子留下的空。这不是英雄行为，是**幸存者的自我保护**。把这种行为浪漫化叫"历史使命"是后人的**误读**。Agnolo 自己很可能**也不知道**他为什么继续写，他只是没办法停。\n\n' +
        '两边都站得住——一种说法走"知识分子的尊严"看，另一种说法走"trauma response 的本能"看。\n\n' +
        '你怎么看？Agnolo 1348 年 8 月 13 日早上拿起鹅毛笔——更靠近一种说法（伟大的承担）还是另一种说法（创伤的逃避）？想 30 秒。',
      en:
        'You have just played Agnolo, a thirty-five-year-old bookkeeper for the Siena cobblers\' guild and amateur chronicler. In late July to early August 1348, he buried his five children **with his own hands**. Nine days later, he **picked the goose-feather quill back up**.\n\n' +
        'Here is the question. On the morning of August 13, 1348 (five days after burying the last child), Agnolo decided to **keep writing the Cronaca**.\n\n' +
        'Was this **the dignity of historical mission** (you must record, you must remain human) or **traumatic avoidance** (writing the chronicle = not thinking about the children)?\n\n' +
        'Both readings have real evidence. Psychologists and historians have argued about this question for **a hundred years**.\n\n' +
        '**One view — the chronicler\'s spirit / the same humanist tradition as Boccaccio in 1348:** What Agnolo faced in that moment was real. Thirty-five thousand dead in Siena, with no record, would be **as if they had not lived**. His own five children were five among those thirty thousand. If he did not write, his children would also be **as if they had not lived**. Choosing to write it down was **bearing the responsibility of a thinking person**. It was giving the dead the proof that they had lived. It was the **last gift a father could give his children**. Seven hundred years later, we still stop in front of those eleven Italian words, proof that he **did the right thing**. The same year in Florence, Boccaccio writing the Decameron was the same instinct: **using writing to refuse the void**. This is the starting point of humanism. Agnolo in that moment was **great**.\n\n' +
        '**The other view — the trauma-psychology reading (modern psychology of trauma).** Losing five children is trauma at the most extreme end. Under that kind of trauma, what the brain most often does is **go numb and avoid the pain, while repeating one small familiar action** to hold itself together. Writing the Cronaca was an action Agnolo already knew well. **Repeating a familiar action is a well-known kind of trauma response.** Modern psychologists (such as Judith Herman and Bessel van der Kolk) have studied this pattern. "I won\'t think about the children. I\'ll count how many people died in the city today." He was **not** heroically bearing the burden of intellectual responsibility. He was **using something smaller than the children to fill the space the children had left**. This is not heroism. It is **a survivor\'s self-protection**. Romanticizing it as "historical mission" is **a misreading by later generations**. Agnolo himself probably **did not know** why he kept writing. He just could not stop.\n\n' +
        'Both sides stand. The first view judges from "intellectual dignity." The other view judges from "trauma response as instinct."\n\n' +
        'What do you think? Agnolo picking up the quill on the morning of August 13, 1348 — closer to the first view (great burden-bearing) or the other view (traumatic avoidance)? Take thirty seconds.',
    },
    deliverGoal:
      '你扮演了 Agnolo 9 节——一个失去 5 个孩子之后 5 天又拿起笔的 Siena 编年史家。' +
      '历史学界对这件事**两极分化**：' +
      '**一种说法（编年史家精神 / 人文主义起点）**：他承担一个知识分子的责任，给死者一个"活过"的证据。这是 humanism 的起点，他做对了。' +
      '**另一种说法（trauma response 学派）**：失去 5 个孩子是 trauma 顶级。人在这种 trauma 下会**麻木 + 重复熟悉的动作**——他不是英雄，他是在用一个小事填补孩子留下的空。' +
      '——你怎么看，Agnolo 那一刻是伟大的承担还是创伤的逃避？',
    engagementHook:
      '**你怎么看**——Agnolo 那天早上拿起笔，是知识分子的尊严还是创伤的逃避？没有标准答案，给你的理由说服我。想 30 秒',
    expectedLength: '220-260 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§6 Renaissance 起点 + §7 三方利益分析 + §11 Q4 Black Death vs COVID',
    content: {
      cn:
        '第二个真问题——这一个跨越 700 年，延伸到任何"重大灾难是否带来进步"的讨论。\n\n' +
        'Black Death 之后，1352 起，欧洲发生了一些**看起来很积极**的事：\n\n' +
        '- **农奴解放加速**：农民工资 4 年涨 3 倍，劳动力短缺让他们可以"用脚投票"，feudal 经济基础瓦解\n' +
        '- **Renaissance 文艺复兴起点**：Florence 和 Venice 财富集中到少数活下来的家族，资助 Brunelleschi、Donatello、Botticelli、Leonardo、Michelangelo\n' +
        '- **Quarantine 公共卫生法诞生**：1377 Venice 第一条 quaranta giorni 法令，现代公共卫生制度起点\n' +
        '- **解剖学合法化**：教会松动了对人体解剖的禁忌（要研究死因），为现代医学铺路\n' +
        '- **Reformation 种子**：教会权威下滑，1517 Luther 改革\n\n' +
        '这一连串"进步"是真的，史料确认的。\n\n' +
        '问题来了。Black Death 之后欧洲社会**看起来真的更好了**——是真的吗？还是这种"进步"是**幸存者的幻觉**？\n\n' +
        '**一种说法 — "灾难推进步"派（Walter Scheidel《The Great Leveler》/ Boccaccio 同代人本主义传统）**：Black Death 是欧洲历史一次**真正的大重置（great leveler）**。它**强迫**了一些 1346 年看起来根本不可能的事——农奴解放、女性进入手工业（因为男性死太多）、教会权威被质疑、古希腊罗马手稿被重新阅读。**没有这场灾难，这些 1346 年所有人都习以为常的"封建结构"会再撑 200 年**。Black Death 是**残酷的解放**：25 million 死了，但活下来的人和他们的孩子的**生活机会****比 1346 年好太多**。这是历史的不舒服真相——**有时候只有大灾难才能打破固化的不公**。\n\n' +
        '**另一种说法 — 幸存者幻觉读法（modern critical / trauma-aware historiography；Samuel Cohn《The Black Death Transformed》对人口学算法做了重要修正，但下面这条道德论点是 trauma-aware 流派整体的立场）**：所谓"Black Death 推动进步"是**活下来的人写的故事**。25 million 死了的人**没有 voice**：他们死了，他们没办法说"这不公平"。我们今天看到的"农奴解放 + Renaissance + 公共卫生"，只是**幸存者**的视角。一个 8 岁就死的 Caterina、一个 3 岁就死的 Tommaso，他们**没**经历"工资上涨 4 倍"，没看到 Brunelleschi 圆顶，没活到 Renaissance。**任何把他们的死说成"为后世进步铺路"的叙事，是对死者的二次伤害**。Black Death 不是"残酷的解放"，是**纯粹的损失**。任何把它说成"必要"的论调，是**幸存者写的安慰自己的故事**。\n\n' +
        '两边都站得住——一种说法是**结构进步**优先（看 1352 之后整体），另一种说法是**死者尊严**优先（看 1352 之前那 25 million）。\n\n' +
        '你怎么看？Black Death 后 200 年欧洲的"进步"——更靠近一种说法（残酷的解放）还是另一种说法（幸存者的幻觉）？想 30 秒。\n\n' +
        '注：这个问题没有"中国 vs 西方"的对照，因为它适用于**任何**重大历史灾难。你今天读关于二战之后"重建经济奇迹"的叙事，同一个张力。',
      en:
        'A second real question. This one stretches across seven hundred years and applies to any debate about "does great catastrophe produce progress."\n\n' +
        'After the Black Death, beginning in 1352, certain things in Europe **looked positive**:\n\n' +
        '- **Serf emancipation accelerated.** Peasant wages tripled in four years; the labor shortage let them "vote with their feet." The feudal economic base broke down.\n' +
        '- **Renaissance starting point.** Wealth concentrated in the few surviving families in Florence and Venice; they patronized Brunelleschi, Donatello, Botticelli, Leonardo, Michelangelo.\n' +
        '- **Quarantine and public health law born.** Venice 1377, quaranta giorni; the start of modern public health.\n' +
        '- **Anatomy legalized.** The Church relaxed its taboo on dissecting human bodies (to study causes of death), opening the way for modern medicine.\n' +
        '- **The seed of the Reformation.** Church authority weakened, leading to Luther in 1517.\n\n' +
        'This list of "progress" is real. The sources confirm it.\n\n' +
        'Here is the question. After the Black Death, European society **really did look better**. Was it actually better? Or is this "progress" the **illusion of survivors**?\n\n' +
        '**One view — the "catastrophe drives progress" school (Walter Scheidel, The Great Leveler; the humanist tradition Boccaccio belonged to):** The Black Death was a real **great leveler** in European history. It **forced** changes that would have been impossible in 1346: serf emancipation, women entering trades (because so many men were dead), the questioning of Church authority, the rereading of ancient manuscripts. **Without this catastrophe, the rigid feudal structure of 1346 would have lasted another 200 years.** The Black Death was a **brutal liberation**. Twenty-five million died, but the **life chances** of the survivors and their children were **dramatically better** than in 1346. This is the uncomfortable truth of history: **sometimes only catastrophe can break entrenched injustice**.\n\n' +
        '**The other view — the "survivor\'s illusion" reading (modern critical / trauma-aware historiography; Samuel Cohn\'s The Black Death Transformed made important demographic corrections, but the moral argument below belongs to the broader trauma-aware school):** What we call "Black Death drove progress" is **the story written by the people who survived**. The twenty-five million dead **have no voice**. They died. They cannot say "this was not worth it." When we see "serf emancipation, Renaissance, public health" today, we see only **the survivors\' angle**. An eight-year-old Caterina who died, a three-year-old Tommaso who died — **did not experience** wages tripling. They did not see Brunelleschi\'s dome. They did not live to the Renaissance. **Any narrative that calls their deaths "the road to later progress" is a second injury done to the dead.** The Black Death was not "brutal liberation." It was **pure loss**. Calling it "necessary" is **a story survivors tell themselves to be at peace**.\n\n' +
        'Both sides stand. The first view puts **structural progress** first (looking at the whole picture after 1352). The other view puts **the dignity of the dead** first (looking at the twenty-five million who died before 1352).\n\n' +
        'What do you think? The "progress" of Europe in the 200 years after the Black Death — closer to the first view (brutal liberation) or the other view (survivor\'s illusion)? Take thirty seconds.\n\n' +
        'Note: this question does **not** come with a "China vs. West" comparison, because it applies to **any** major historical catastrophe. Read any narrative about "post-WWII economic miracle reconstruction," and you will hear the same tension.',
    },
    deliverGoal:
      'Black Death 之后 200 年欧洲的"进步"——农奴解放 + Renaissance + quarantine + 解剖学 + Reformation 种子。' +
      '**一种说法（灾难推进步派 / Walter Scheidel）**：Black Death 是 great leveler，强迫了 1346 年看起来不可能的事，是残酷的解放。没有这场灾难封建结构会再撑 200 年。' +
      '**另一种说法（幸存者幻觉读法 / 现代 trauma-aware 历史学）**：进步是活下来的人写的故事。25 million 死了的人没 voice，8 岁就死的 Caterina 没经历"进步"。任何把他们的死说成"为后世铺路"的叙事是对死者的二次伤害。' +
      '——你怎么看，是残酷的解放还是幸存者的幻觉？',
    engagementHook:
      'Black Death 后欧洲的"进步"，是残酷的解放还是幸存者的幻觉——先在心里想想你怎么看，下一节我会正式问你。',
    expectedLength: '240-280 字 + 真问题',
    expectsRealAnswer: false,
  },
  // ═════ Meta（反思 + 桥）═════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题 + §11 Q5 plague 幸存者',
    content: {
      cn:
        '你刚从 Agnolo 的内部走了一遍：5 月 8 日早上写下第一笔"35 死，60 死，80 死"；6 月 5 日不相信自己看到的数字；7 月 12 日**亲手推**了一具邻居尸体；7 月底到 8 月初 9 天**亲手**埋了自己 5 个孩子；8 月 13 日早上**重新拿起鹅毛笔**；9 月底读 Quamvis Perfidiam 在心里说"人比 plague 还可怕"；1351 年 12 月 23 日终于**停笔**；1363 年闭眼时不知道——他写下的字 700 年后还在让人停下来。\n\n' +
        '在你进入记忆考核之前，一个问题：\n\n' +
        '这一遍里，最让你停一下的是什么？\n\n' +
        '是 5 月 8 日早上那 3 行字，他不知道这一笔会变成 30000 笔？\n\n' +
        '是 7 月 7 日 podestà 半夜骑马跑路、70 年共和实验一夜垮、他在 Cronaca 写"我不会写他的名字"？\n\n' +
        '是 7 月 12 日他自己**推**了一具尸体，他妻子那晚说"你不要再去推"，他没回？\n\n' +
        '是 7 月 28 日到 8 月 5 日那 9 天、5 个坑、他妻子在无花果树下不说话？\n\n' +
        '是 8 月 13 日早上他**重新**拿起笔，心里那句"如果我不写，没有人会知道我们活过"？\n\n' +
        '还是 1351 年 12 月 23 日他写下最后一笔合上笔记本，之后 12 年再没写一字？\n\n' +
        '说一句话告诉我。\n\n' +
        '说完，你可以选：\n\n' +
        '(1) 进 mastery 通关——把 Cronaca senese / gavoccioli / podestà / flagellanti / Pater Noster / Quamvis Perfidiam / quaranta giorni 这些词变成你真的记得的：拼写、定义、应用题。\n\n' +
        '(2) 换视角重玩——同一场 1348 plague，不同视角。Strasbourg 1349/02/14 烧 2000 个犹太人那天，一个普通 Strasbourg 公民的视角（他不是凶手，但他没拦，这个视角让你感受"在场而不阻止"）；或者 Devorah——一个虚构的 14 岁 Strasbourg 犹太女孩（她躲在地窖里活下来，爬出来看见家人尸体，她跟 Aisha 一样是受害方）。\n\n' +
        '(3) 也可以问自己一个 §11 问题：你身边有没有**plague 的"幸存者"**？你的爷爷奶奶有没有经历过 SARS 2003 / COVID 2020？他们**lockdown 那段时间**心里在想什么？跟 Agnolo 1348 年 7 月那种感觉，是不是有一点点像？',
      en:
        'You have just walked the inside of Agnolo — the morning of May 8 when he wrote three lines, "35 dead, 60 dead, 80 dead" — June 5 when he could not believe the number he was seeing — July 12 when he **pushed a neighbor\'s body with his own hands** — the nine days from late July to early August when he **buried his own five children with his own hands** — the morning of August 13 when he **picked the quill back up** — late September when he read Quamvis Perfidiam and said inside himself, "people are more terrible than the plague" — December 23, 1351, when he finally **stopped** — and the day in 1363 when he closed his eyes, not knowing his words would still make people pause seven hundred years later.\n\n' +
        'Before you go into the mastery check, one question:\n\n' +
        'What in this lens made you pause most?\n\n' +
        'Was it the three lines on the morning of May 8 — Agnolo not knowing that one entry would grow into thirty thousand?\n\n' +
        'Was it July 7, when the podestà fled the city in the night, the seventy-year republican experiment collapsing in one stroke, and Agnolo writing in his Cronaca, "I will not write his name"?\n\n' +
        'Was it July 12, when he **pushed a corpse himself** — his wife saying that night, "Agnolo, do not push another body" — and he did not answer?\n\n' +
        'Was it the nine days from July 28 to August 5 — the five pits — his wife under the fig tree not speaking?\n\n' +
        'Was it the morning of August 13, when he **picked the quill back up** — and the line in his head, "if I do not write this, no one will know we lived"?\n\n' +
        'Or was it December 23, 1351, when he wrote his last entry, closed the notebook, and did not write again for twelve years?\n\n' +
        'Tell me in one sentence.\n\n' +
        'Then — you can choose:\n\n' +
        '(1) Go into mastery — turn Cronaca senese, gavoccioli, podestà, flagellanti, Pater Noster, Quamvis Perfidiam, quaranta giorni into words you actually remember — spelling, definitions, application questions.\n\n' +
        '(2) Switch lens and replay — same 1348 plague, different angle. A Strasbourg burgher on February 14, 1349 (Saint Valentine\'s Day), the day two thousand Jews were burned alive (he is not the executioner, but he did not stop it; this lens lets you feel what "being present without intervening" is like). Or Devorah — a fictional fourteen-year-old Jewish girl from Strasbourg (she hides in a cellar and survives; she crawls out and sees the bodies of her family; she is on the receiving end, like Aisha in the Crusades lens).\n\n' +
        '(3) Or ask yourself one of the §11 questions: do you have a **plague "survivor"** in your own life? Did your grandparents live through SARS 2003 or COVID 2020? During that **lockdown period** — what were they thinking? Is there anything in that feeling that maybe — just a little — resembles Agnolo in July 1348?',
    },
    deliverGoal:
      '你扮演了 Agnolo 9 节——从 5 月 8 日第一笔到 1351 停笔，再到 700 年后他写下的字怎么样了。' +
      '现在你可以选：' +
      '(1) 进 mastery 通关 / ' +
      '(2) 换视角重玩——比如 Strasbourg burgher（1349/02/14 屠犹见证者）或 Devorah（虚构 14 岁犹太女孩幸存者）/ ' +
      '(3) 想想你身边有没有 plague 的"幸存者"——你爷爷奶奶 SARS / COVID 那段时间的感觉跟 Agnolo 像不像',
    engagementHook:
      '走完 Agnolo 这一遍——5 月 8 日 3 行字到 1351 年合上笔记本，再到他写的字 700 年后还让人停下来。先回答一个：Black Death 后欧洲的"进步"，你觉得是残酷的解放还是幸存者的幻觉？再想一步：这一遍最让你停一下的是哪一刻，为什么是它？说一句话',
    expectedLength: '120-160 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// LENS 2: Konrad of Strasbourg（虚构基督教 burgher / 1349/02/14 屠杀犹太人 perpetrator-actor 视角）
// ═══════════════════════════════════════════════════
//
// 角色设定：
//   - 1311 年生 Strasbourg；1349 年 38 岁；4 代屠夫家族
//   - butcher's guild（*Metzgerzunft*——德语区"屠夫工会"）代表 + city council 成员
//   - 妻子 Margarete 35 岁，儿子 Wilhelm 8 岁
//   - Konrad 自己识字（屠夫工会会员要懂记账），读过一些拉丁语祷告文
//   - 1340 年儿子 Wilhelm 出生时，Konrad 跟 Strasbourg 犹太银匠 Yitzhak（10 年生意伙伴）
//     关系最深——Yitzhak 给 Margarete 打了一对银鞋扣作生子礼——Konrad 一辈子最珍惜的东西之一
//   - 1348 秋——Rhineland 谣言："犹太人在井里下毒"——Konrad 起初不信
//   - 1348 冬-1349 1 月——邻居孩子病了——Margarete 开始相信——Konrad 动摇
//   - 1349/2/9-10——Mayor Schwarber 反对屠犹——市议会开会罢免 Schwarber
//     ——Konrad **投了赞成票**罢免 Schwarber
//   - 1349/2/14——Strasbourg 屠杀：约 2000 个犹太人在犹太墓地被木堆 + 火烧死
//   - Konrad 在木堆边——亲眼看见 Yitzhak 被烧——Yitzhak 烧前看了 Konrad 一眼
//   - 1349/7——plague 还是来了 Strasbourg——杀 16000 人（占总人口 80%）
//     ——包括 Margarete（7 月 5 日）
//   - 儿子 Wilhelm 9 岁活下来；Konrad 自己活到 1374 年（63 岁）才死
//   - 25 年里 Konrad 知道：他们烧的"井下毒"理由是错的——但他没有公开承认错——
//     他遗嘱里没提那 2000 人——但他把 Yitzhak 给 Margarete 打的银鞋扣放进自己棺材陪葬——
//     这是他唯一公开做的承认
//
// 这个视角 是 perpetrator-actor 视角（平行于 Crusades Roger）：
//   - 但和 Roger 不同：Konrad 的"真心相信"在 6 个月内被现实证伪
//     ——plague 来了 Strasbourg + 犹太人也死于 plague——他烧人的"理由"消失了
//   - 他没有公开承认错——但他每天闭眼能看到 Yitzhak 那一眼
//   - lens 让用户看见：一个 perpetrator 在他自己的"理由"被打脸之后——
//     余生 25 年怎么活的
//
// anti-fabrication 显式化：
//   - Konrad 是 composite character——所有事都来自 narrative kernel §3 Rachel + §4
//   - Yitzhak 是虚构的（narrative kernel §3 提到的 Rachel 丈夫是"一个 Jewish 银匠"——
//     未给名字——这个视角给了名字 Yitzhak 但**显式标记**为 lens 创作）
//   - Schwarber 是 documented 真实历史人物——1349/2/9-10 罢免事件 documented
//   - 2000 人 + 犹太墓地 + 火烧 documented（narrative kernel §3 + §4）
//
// 与 Devorah 这一遍 的对位 echo：
//   - Devorah 父亲 Yitzhak（银匠）= Konrad 烧的那个银匠
//   - Devorah 这一遍 不让 Devorah 知道父亲被 Konrad 投票
//   - Yitzhak 那一眼——Konrad lens 描写；Devorah 这一遍 不描写（她没在场）
//   - 用户做完两个视角 才能在 meta connect——不要 4th-wall break 直接告诉用户
//
// anti-orientalism / anti-antisemitism 硬规：
//   - Konrad 不是"邪恶反犹分子"caricature——他是普通屠夫 + 父亲——
//     在 plague 恐惧 + 谣言 + 妻子压力下投票屠犹
//   - 不要现代政治影射（21 世纪 COVID/移民/穆斯林）——
//     narrative kernel §3 教学要点："这个机制今天还在——但替罪羊换人"
//     ——让 12 岁孩子自己识别 pattern——Node 9 narrator 段可以**结构性**列举
//     1881/1903/1933/1942 但不直接讲 21 世纪
//
// 14 词文化禁用表（玉玺/龙袍/翰林/朕/卿/江山/凤冠/霞帔/一炷香/科甲/状元/榜眼/探花/金銮殿）严格禁用
// 中国家庭称谓（娘亲/父亲大人/相公/相国）严格禁用
// 德语保留斜体：*Heilige Maria* / *Bürgermeister* / *Zunft* / *Metzgerzunft* / *Münster* / *Mutter* / *Vater*
//
// 长度约束：每节点 200-280 字（CN）/ 对应 EN 版 Lexile 800-1000
//
// ─────────────────────────────────────────────────────────────────

var konradStrasbourgStoryboard = [
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Konrad of Strasbourg',
    narrativeRef: '§3 Rachel + §4 1349/02/14 Strasbourg 屠杀',
    content: {
      cn:
        '1349 年 2 月 14 日早上，Strasbourg（斯特拉斯堡，今天法德边境上的莱茵河西岸城邦）。我 38 岁。\n\n' +
        '我叫 Konrad，人家叫我"屠夫 Konrad"。我家 4 代住 Strasbourg，4 代都是屠夫。我是 Strasbourg Metzgerzunft（屠夫工会，德语区城邦的"行业自治组织"）的代表，也是市议会 11 个成员之一。\n\n' +
        '今天早上我妻子 Margarete 给我端了一碗汤：羊脂加大麦。她平时不熬这种汤——这是 Strasbourg 这边只有大事日子才熬的"出门汤"。\n\n' +
        '我喝完。\n\n' +
        '我手在抖。\n\n' +
        '不是冷。壁炉烧着，窗外雪下了一夜还在下。但我手抖不是因为冷。\n\n' +
        '我今天要去 Werd（韦尔德岛，Strasbourg 城西面的一座小岛，犹太墓地就在那里）。\n\n' +
        '我今天要做的事——5 天前，1349 年 2 月 9 日，市议会已经投票通过，我**投了赞成票**：Bürgermeister（市长）Schwarber 被罢免（他反对，被赶出议会）；新的领导班子那天下午就发了告示——"所有 Strasbourg 犹太人，男女老幼，明天开始 5 天内集中到 Werd 岛"。\n\n' +
        '今天是第 5 天。\n\n' +
        'Margarete 没问我去哪里。她知道。她把 Wilhelm（我儿子，8 岁）抱在怀里，让 Wilhelm 别看我。她对我说了一句："Heilige Maria 看着，你做你认为对的事，我不会问。"\n\n' +
        '但她这句话里有一个字她没说：\n\n' +
        '"回来"。\n\n' +
        '我穿上厚毛斗篷出门。雪。靴子在木板路上踩出的声音清楚得像我心跳。\n\n' +
        '我是 Konrad of Strasbourg。接下来 12 节，你跟我走 1349 年 2 月 14 日**这一天**，还有这一天**之前**的 4 个月，和这一天**之后**的 25 年。',
      en:
        'Morning of February 14, 1349. Strasbourg, a free city-state on the western bank of the Rhine River, in what today is the French-German border region. I was thirty-eight.\n\n' +
        'My name is Konrad. People call me Konrad the Butcher. My family has lived in Strasbourg for four generations. All four were butchers. I am a representative in the Metzgerzunft (the Butchers\' Guild, the kind of self-governing trade association common in German-speaking city-states), and I am one of the eleven members of the city council.\n\n' +
        'This morning my wife Margarete brought me a bowl of soup: mutton fat (the soft fat from sheep) and barley (a grain). She does not normally make this soup. In Strasbourg, women cook this soup only on important days. They call it "going-out soup."\n\n' +
        'I finished it.\n\n' +
        'My hands were shaking.\n\n' +
        'Not from cold. The hearth was burning, and even though snow had fallen all night and was still coming down, that was not why my hands shook.\n\n' +
        'Today I had to go to Werd. Werd is a small island just west of the city. The Jewish cemetery sits on that island.\n\n' +
        'What I had to do today — five days earlier, on February 9, 1349, the city council had already voted on it. I had **voted in favor**. The Bürgermeister (the mayor) Schwarber had been removed from office (he opposed it; he was expelled from the council). By that afternoon the new leaders had nailed the order on the city gates: "Every Jew in Strasbourg, men, women, children, must gather at Werd Island within five days, beginning tomorrow."\n\n' +
        'Today was the fifth day.\n\n' +
        'Margarete did not ask me where I was going. She knew. She held Wilhelm (my son, eight years old) in her arms and told him not to look at me. To me she said only one sentence: "Heilige Maria (Holy Mary) is watching. Do what you think is right. I will not ask."\n\n' +
        'But there was one word in that sentence she did not say.\n\n' +
        '"Come back."\n\n' +
        'I put on my heavy wool cloak. I went out. The snow. The sound of my boots on the wooden plank road, clear as a heartbeat.\n\n' +
        'I am Konrad of Strasbourg. Over the next twelve sections, you will walk with me through this single day, February 14, 1349, and through the four months **before** it, and through the twenty-five years **after** it.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我手抖——但我还是出门了。你猜我今天回来，我儿子 Wilhelm 还会让我抱他吗',
    expectedLength: '260-300 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'Konrad of Strasbourg',
    narrativeRef: '§3 Rachel 章节背景 + §3 Konrad bio 设定（Strasbourg 城邦 + 屠夫工会 + Yitzhak 银匠 10 年生意）',
    content: {
      cn:
        '我得告诉你 1349 年 2 月 14 日**之前**的世界，那个我今天早上喝着 Margarete 那碗汤时**正在毁掉**的世界。\n\n' +
        '我 1311 年生 Strasbourg。我爸 Heinrich 也是屠夫，我爷爷 Otto 也是，我太爷爷 Werner 也是——4 代。Metzgerzunft 在 Strasbourg 的总账里我家姓 Schmidt 排第 12 位，这是 1280 年代我太爷爷自己挣进去的。我们家在 Strasbourg 的根，扎了 70 年。\n\n' +
        'Strasbourg 那时候（1349）不是法国不是德国，是 freie Reichsstadt（神圣罗马帝国"自由城邦"），自己治自己：一个市议会、一个 Bürgermeister、一个主教（主教归罗马管，但城邦行政归市议会管）。1334 年开始市议会改革，把工会代表请进议会——Metzgerzunft 一个席位——这就是我 1346 年坐进议会的那把椅子。\n\n' +
        '我 1330 年娶 Margarete。她爸是城南磨坊主 Albrecht，她比我矮一头，不识字，但她算账比我还快。\n\n' +
        '1340 年，我们等了 10 年，Wilhelm 终于出生：3 月 21 日，Münster（Strasbourg 大教堂）的钟那天敲过 6 下。我抱着 Wilhelm 走出产房那一刻，我去了一个地方。\n\n' +
        'Strasbourg 城北犹太人区（Judengasse，犹太巷）。\n\n' +
        '那里有一家银匠铺，主人叫 Yitzhak ben Abraham，他比我大 5 岁，我跟他做生意 8 年。我家屠夫工会的银扣、银针、银钉都从他那儿买。\n\n' +
        'Yitzhak 那天看见我抱着 Wilhelm 进门，他没说话。他从柜台后面拿出一对银鞋扣——他自己提前打的，一直不告诉我。他知道我们等了 10 年，他打了一对银鞋扣：一只刻 Margarete，一只刻 Konrad。他说："拿回去给 Margarete。等 Wilhelm 学走路，给他穿上。这是 Strasbourg 这边的旧规矩——生子礼 必须从一个**信得过的人**手里出来。"\n\n' +
        '信得过的人。\n\n' +
        '这 5 个字 1340 年我没多想。\n\n' +
        '9 年后，1349 年 2 月 14 日早上我喝完 Margarete 那碗汤。\n\n' +
        '这 5 个字回到我脑子里。\n\n' +
        '它从那天起再也没离开过。',
      en:
        'I have to tell you about the world **before** February 14, 1349, the world I was **destroying** this morning while I drank that bowl of Margarete\'s soup.\n\n' +
        'I was born in Strasbourg in 1311. My father Heinrich was a butcher. My grandfather Otto was a butcher. My great-grandfather Werner was a butcher. Four generations. In the Metzgerzunft registry (the Butchers\' Guild ledger), our family name Schmidt is listed at number twelve. My great-grandfather earned that ranking back in the 1280s. My family has been rooted in Strasbourg for seventy years.\n\n' +
        'In 1349, Strasbourg was not French and not German. It was a freie Reichsstadt, a "free imperial city" inside the Holy Roman Empire, meaning it governed itself: a city council, a Bürgermeister (mayor), and a bishop (the bishop reported to Rome, but the everyday running of the city was the council\'s job). In 1334 a council reform let trade-guild representatives sit in the council. The Butchers\' Guild got one seat. That is the seat I took in 1346.\n\n' +
        'I married Margarete in 1330. Her father was a miller named Albrecht in the south of the city. She was a head shorter than me. She could not read, but she did sums faster than I could.\n\n' +
        'We waited ten years for a child. Wilhelm was finally born on March 21, 1340. The bells of the Münster (Strasbourg Cathedral) rang six times that day. The moment I walked out of the birthing room with Wilhelm in my arms, I went somewhere.\n\n' +
        'I went to the Judengasse (the Jews\' Lane), the Jewish quarter in the north of the city.\n\n' +
        'There was a silversmith\'s shop there. The owner was Yitzhak ben Abraham. He was five years older than me. I had been doing business with him for eight years by then. Every silver buckle, silver needle, and silver nail my Butchers\' Guild needed, we bought from him.\n\n' +
        'When Yitzhak saw me walk in carrying Wilhelm, he did not speak. From behind the counter he brought out a pair of silver shoe-buckles. He had made them in advance. He had not told me. He knew we had waited ten years. One buckle was engraved Margarete; the other Konrad. He said: "Take these home to Margarete. When Wilhelm learns to walk, fasten them on his shoes. There is an old custom here in Strasbourg — the gift for a newborn must come from the hand of **a trustworthy person**."\n\n' +
        'A trustworthy person.\n\n' +
        'In 1340 I did not think twice about those four words.\n\n' +
        'Nine years later, on the morning of February 14, 1349, after I finished Margarete\'s soup, those four words came back into my head.\n\n' +
        'From that day on, they never left.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Yitzhak 那年说"信得过的人"，9 年后我喝完汤这 5 个字回来。我那天还没出门，你已经知道接下来会怎么样了',
    expectedLength: '280-320 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'Konrad of Strasbourg',
    narrativeRef: '§3 Rachel + §4 1348 秋 plague 进意大利中部 + Rhineland 谣言起源',
    content: {
      cn:
        '1348 年秋天，9 月，Strasbourg 还安全。但 Rhineland（莱茵兰，莱茵河两岸）已经在传一件事。\n\n' +
        '我第一次听到是 9 月 18 日。地方是城南集市广场。一个从 Basel（巴塞尔，莱茵河上游瑞士边境一个城邦）回来的酒商 Hans，坐在我屠夫铺子台阶上喝啤酒。他说："Konrad——Basel 那边，三个井，三个犹太人被抓，拷打，他们承认了。他们说**犹太长老在 Toledo（西班牙南部）配毒药**，给所有欧洲犹太社区**分发**，让他们投井。为什么？因为犹太人想**毁了基督教世界**——"\n\n' +
        '我那天喝着啤酒。我笑了。\n\n' +
        '我说："Hans，你听过几个版本？我上礼拜听一个 Mainz（美因茨，莱茵河中游城邦）回来的人说毒药是从 Granada（西班牙南部摩尔人地区）来的，前天另一个人说从 Saxony（德国中部）来，现在你说 Toledo。这种谣言每三天换一次发源地，你信哪一个？"\n\n' +
        'Hans 说："我也不信哪一个具体的，但我**信这件事的方向**——犹太人**有**理由想毁我们，他们一直被压着，他们**会找机会**——"\n\n' +
        '我那天没接他这句。\n\n' +
        '我那天回家，经过 Judengasse，我特意拐进去到 Yitzhak 铺子门口。\n\n' +
        'Yitzhak 那天在井边打水。Strasbourg 犹太区有自己的井。我朝他走过去。\n\n' +
        '他递给我一个木瓢，自己先喝了一口。他说："Konrad，你听到那个谣言了吧。"\n\n' +
        '我说："听到了。"\n\n' +
        '他说："你**信吗**？"\n\n' +
        '我说："不信。"\n\n' +
        '我接过木瓢，把他井里的水喝了一大口。\n\n' +
        '水是甜的。Strasbourg 犹太区那口井是 Yitzhak 爷爷 1280 年代挖的，是 Strasbourg 全城最甜的几口井之一。\n\n' +
        'Yitzhak 那天看着我喝完，他笑了。他说："Konrad，Margarete 上次买的银针线，下礼拜来取吧，我打折给你。"\n\n' +
        '我那天回家，心里轻松。\n\n' +
        '我那天**真的**不信那个谣言。\n\n' +
        '但我那天没意识到。\n\n' +
        '不信 跟 5 个月之后还不信 是两件不一样的事。',
      en:
        'September 1348. Strasbourg was still safe, but along the Rhineland (the lands on both sides of the Rhine River), one rumor was spreading.\n\n' +
        'I first heard it on September 18. The place was the market square in the south of the city. A wine merchant named Hans, just back from Basel (a city-state on the upper Rhine, in what today is the Swiss border region), sat on the step of my butcher shop drinking beer. He said: "Konrad — over in Basel, three wells were poisoned. Three Jews were arrested. Tortured. They confessed. They said **Jewish elders in Toledo, in southern Spain, are mixing the poison** and **distributing** it to every Jewish community in Europe, telling them to pour it into the wells. Why? Because the Jews want to **destroy Christendom**."\n\n' +
        'I was drinking beer. I laughed.\n\n' +
        'I said: "Hans, how many versions of this have you heard? Last week a man back from Mainz (a city-state on the middle Rhine) said the poison comes from Granada (Moorish southern Spain). Three days ago another man said it comes from Saxony (central Germany). Now you say Toledo. The rumor changes its source every three days. Which one do you believe?"\n\n' +
        'Hans said: "I don\'t believe any one specific source. But I **believe the direction of the story**. The Jews **have** reason to want to destroy us. They have been kept down for so long. They **will look for the chance**."\n\n' +
        'I did not answer.\n\n' +
        'On my way home that day, I passed the Judengasse. I went in on purpose. I walked to Yitzhak\'s shop.\n\n' +
        'Yitzhak was at the well, drawing water. The Jewish quarter in Strasbourg had its own well. I walked over.\n\n' +
        'He passed me a wooden ladle. He drank from it first. Then he said: "Konrad, you have heard the rumor."\n\n' +
        'I said: "I heard it."\n\n' +
        'He said: "Do you **believe** it?"\n\n' +
        'I said: "No."\n\n' +
        'I took the ladle and drank from his well. A long pull.\n\n' +
        'The water was sweet. The well in the Jewish quarter had been dug by Yitzhak\'s grandfather in the 1280s. It was one of the sweetest wells in all of Strasbourg.\n\n' +
        'Yitzhak watched me finish. He smiled. He said: "Konrad, those silver needles Margarete bought last time? Come pick them up next week. I\'ll give you a discount."\n\n' +
        'I went home that day light-hearted.\n\n' +
        'I did **truly** not believe that rumor that day.\n\n' +
        'But I did not realize something.\n\n' +
        'Not believing, and not believing five months later, are two different things.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我那天 9 月喝了 Yitzhak 井里的水。5 个月之后我做了什么——你可能猜不到，但你猜得到方向',
    expectedLength: '300-340 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Konrad of Strasbourg',
    narrativeRef: '§3 Rachel 章节 1348 冬-1349 1 月 Margarete 动摇 + 邻居孩子病机制',
    content: {
      cn:
        '1348 年 12 月 11 日，星期四晚上，Strasbourg 这一年最冷的一夜。我家壁炉烧着，Wilhelm 8 岁睡着。Margarete 没睡，她坐在我对面织毛袜。她突然说：\n\n' +
        '"Konrad——隔壁 Hans 家的小 Klaus 病了。"\n\n' +
        '隔壁。隔壁。Hans 家的 Klaus 4 岁，前天还跑到我们家院子里跟 Wilhelm 玩雪。我那天给他切了一片烟肉，他吃得满嘴油。\n\n' +
        '我说："什么病？"\n\n' +
        'Margarete 说："发烧。咳嗽。Hans 老婆今天哭着来借蜂蜜——她说 Klaus 脖子下面起了一个红疙瘩，还不大，但她怕。她哭着问我："Konrad 那个犹太人朋友的井，你最近还去喝吗？"\n\n' +
        '我没接她话。\n\n' +
        '我盯着壁炉里的火。\n\n' +
        '红疙瘩。脖子下面。\n\n' +
        '这是我 9 月在 Hans 那杯啤酒里听到的同一个症状。\n\n' +
        '这是 Italy 那边来的商人在说的同一个症状。\n\n' +
        'Margarete 织了 5 分钟没说话，然后她说："Konrad，我不是说 Yitzhak。Yitzhak 我也认识，他打的鞋扣 Wilhelm 还穿着。但**如果**，只是**如果**，Heilige Maria 不在场的时候，这种事**只要可能**——你能不能下礼拜那个银扣，让 Margarethe（她妹妹）她男人去取？你别去那条街，就这一段时间——"\n\n' +
        '就这一段时间。\n\n' +
        '我那天晚上躺在床上，Margarete 已经睡了。我盯着天花板。\n\n' +
        '我心里**清楚**：\n\n' +
        'Yitzhak 不会下毒。\n\n' +
        'Hans 家 Klaus 病跟 Yitzhak 没关系。可能是 Hans 老婆煮的水煮得不够，可能是 Klaus 在外面雪里玩太久，可能是 Strasbourg 这一年冬天太冷小孩子本来就容易病。\n\n' +
        '但是。\n\n' +
        '我第二天**没**去 Judengasse。\n\n' +
        '我让 Margarete 妹妹的男人 Friedrich 去取了那对银扣。\n\n' +
        '这是我跟 Yitzhak 8 年生意里——**第一次**——我**没自己去**。\n\n' +
        '这一次"没自己去"，表面上是给 Margarete 一个安心，但其实——是我心里那块东西**第一次松动**。\n\n' +
        '它松了 1 毫米。\n\n' +
        '4 个月后，它会松到我投赞成票罢免 Schwarber。',
      en:
        'December 11, 1348. A Thursday night. The coldest night of the year in Strasbourg. The hearth was burning. Wilhelm, eight, was already asleep. Margarete was not asleep. She sat across from me knitting wool socks. Suddenly she said —\n\n' +
        '"Konrad — Hans next door — his little boy Klaus is sick."\n\n' +
        'Next door. Hans\' boy Klaus was four. Two days earlier he had run into our courtyard and played in the snow with Wilhelm. I had cut him a slice of smoked bacon. He had eaten it with fat all over his mouth.\n\n' +
        'I asked: "Sick how?"\n\n' +
        'Margarete said: "Fever. Cough. Hans\' wife came over today crying to borrow honey. She said a red lump has come up on Klaus\' neck. Not big yet, but she is frightened. She kept asking me through her tears: Konrad, that Jewish friend of his — that well — has he been drinking from it lately?"\n\n' +
        'I did not answer.\n\n' +
        'I stared into the fire.\n\n' +
        'A red lump. On the neck.\n\n' +
        'Those were the exact symptoms I had heard about over Hans\'s beer back in September.\n\n' +
        'They were the exact symptoms the merchants from Italy had been describing.\n\n' +
        'Margarete knitted for five minutes without speaking. Then she said: "Konrad, I am not saying Yitzhak. I know Yitzhak too. The buckles he made — Wilhelm still wears them. But **if** — only **if** — when Heilige Maria is not watching — when this kind of thing is **even possible** — could you, next week when those silver buckles are ready to pick up, let Margarethe\'s husband (my sister\'s husband) Friedrich go get them? Could you stay off that street, just for now?"\n\n' +
        'Just for now.\n\n' +
        'That night I lay in bed. Margarete was already asleep. I stared at the ceiling.\n\n' +
        'I was **clear** in my head.\n\n' +
        'Yitzhak would not poison anyone.\n\n' +
        'Hans\' boy Klaus being sick had nothing to do with Yitzhak. Maybe Hans\' wife had not boiled the water long enough. Maybe Klaus had played in the snow too long. Maybe this winter in Strasbourg was so cold that any child would catch something.\n\n' +
        'But —\n\n' +
        'The next day I **did not** go to the Judengasse.\n\n' +
        'I let Friedrich, my sister-in-law\'s husband, go and pick up the buckles.\n\n' +
        'This was the first time, in eight years of business with Yitzhak, that I **did not go myself**.\n\n' +
        'On the surface, "not going myself" was a comfort I gave to Margarete.\n\n' +
        'But really, it was the first time something inside me had **shifted**.\n\n' +
        'It shifted by one millimeter.\n\n' +
        'Four months later, it would have shifted enough that I voted to remove Schwarber.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我那天没去，表面上是给 Margarete 安心，其实我心里那块东西第一次松动。你会怎么做',
    expectedLength: '320-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'Konrad of Strasbourg',
    narrativeRef: '§3 Rachel 1349/02/09-10 Schwarber 罢免 + Konrad 投票（documented 历史人物 Schwarber）',
    content: {
      cn:
        '1349 年 2 月 9 日，下午，Strasbourg Rathaus（市政厅）二楼会议厅。市议会 11 个人：Bürgermeister Schwarber 加 10 个工会代表（屠夫、鞋匠、铁匠、羊毛、银匠等等——我是屠夫这一席）。\n\n' +
        '我们已经吵了 2 周。\n\n' +
        'Bürgermeister Schwarber 50 岁，是 documented 历史人物，名字进了 Strasbourg 城市档案。他那天 5 分钟讲完他的立场：\n\n' +
        '"Plague 来 Italy 是 1347 年 10 月，Sicily（西西里），一艘 Genoa 商船把它带进来。这件事 Italy 编年史家 Agnolo di Tura 那种人正在记。我们 Strasbourg 议会有 1348 年 6 月那份从 Florence 来的信，上面写得清清楚楚：**plague 是从 Sicily Genoa 商船开始的**。犹太人没参与。犹太人**自己也死于** plague。Mainz 的犹太人、Cologne 的犹太人、Worms 的犹太人，他们也死，比例**跟基督徒一样高**。这不是犹太人下毒。这是**所有人都被一种我们不知道的病传染**。犹太人现在被指责，是因为我们不知道**真原因**，所以找一个**看得见的群体**来**承担**。我反对——我用我作为 Bürgermeister 11 年的名义反对——任何屠杀犹太人的决议，我都会用我的章拒签。"\n\n' +
        '他说完。\n\n' +
        '会议厅安静了 30 秒。\n\n' +
        '然后铁匠工会的 Bertold 站起来，声音很大。他说："Schwarber，你这是为犹太人**说话**。你拿了他们多少钱？"\n\n' +
        'Bertold 这一句不是**论证**，是**人身攻击**，但它有用。因为会议厅里 11 个人 9 个人**已经**被妻子、邻居、教士 4 个月磨过。\n\n' +
        'Schwarber 站起来要回答，主教的代表 Friedrich 打断他。他说："Schwarber 失去市议会的信任。我提议罢免。投票。"\n\n' +
        '投票。\n\n' +
        '我那一刻心里告诉自己：\n\n' +
        '"Konrad——你**只是**在投票罢免一个市长，你**不是**在投票屠人。下一步具体怎么处置犹太人，后面再讨论。你今天投的票只是**程序问题**。"\n\n' +
        '这是 Roger 那种十字军的"真心相信"机制。\n\n' +
        'Roger 1099 年觉得自己在做"上帝的工作"，他真心觉得。\n\n' +
        '我 1349 年 2 月 9 日下午，觉得自己只是做"合理的政治判断"——我也真心觉得。\n\n' +
        '我举了手。\n\n' +
        '10:1。Schwarber 被罢免。\n\n' +
        '会议厅那 5 秒，我看了 Schwarber 一眼。\n\n' +
        '他没看我。\n\n' +
        '他在收他桌上的纸笔。\n\n' +
        '他装进皮包。\n\n' +
        '他下楼。\n\n' +
        '5 天后，Werd 岛，2000 个犹太人。\n\n' +
        '而我那天下午**真心**告诉自己的那句"我只是投程序"，会变成我余生 25 年最想忘掉的一句话。',
      en:
        'February 9, 1349. Afternoon. Strasbourg Rathaus (city hall), second floor council chamber. Eleven men: the Bürgermeister Schwarber and ten guild representatives — butchers, cobblers, smiths, woolworkers, silversmiths, others. I held the butchers\' seat.\n\n' +
        'We had been arguing for two weeks.\n\n' +
        'Schwarber — he was fifty — he is a real historical figure; his name is preserved in the Strasbourg city archives. That day he made his case in five minutes:\n\n' +
        '"Plague entered Italy in October 1347, in Sicily, on a Genoese trading ship. Italian chroniclers like Agnolo di Tura have been writing about it. We received a letter from Florence in June 1348 right here in this council chamber. It said clearly: **plague began on a Sicily-Genoa trading ship**. Jews were not part of it. Jews **are themselves dying** of plague. Jews in Mainz, in Cologne, in Worms — they die at **the same rate as Christians**. This is not Jews poisoning anyone. This is **everyone being infected by a disease none of us understand**. The Jews are being blamed because we do not know the **real cause**, so we are reaching for a **visible group** to **carry it**. I oppose this. As your Bürgermeister of eleven years, I oppose this. Any resolution to kill Jews — I will refuse to put my seal on it."\n\n' +
        'He stopped.\n\n' +
        'The chamber was silent for thirty seconds.\n\n' +
        'Then Bertold, the Smiths\' Guild representative, stood up. His voice was loud. He said: "Schwarber — you are **speaking for** the Jews. How much money have they paid you?"\n\n' +
        'That was not an argument. It was a personal attack. But it worked. Of the eleven men in the chamber, nine had been worked on for four months by their wives, neighbors, and parish priests.\n\n' +
        'Schwarber stood to answer. Friedrich, the bishop\'s representative, cut him off. "Schwarber has lost the council\'s confidence. I move to remove him. Vote now."\n\n' +
        'Vote.\n\n' +
        'In that moment, I told myself —\n\n' +
        '"Konrad — you are **only** voting to remove a mayor. You are **not** voting to kill anyone. What happens to the Jews after — that is a separate discussion. Today\'s vote is only a **procedural matter**."\n\n' +
        'This is the same "true belief" mechanism Roger of Toulouse used in 1099. Roger genuinely believed he was doing God\'s work. He honestly thought so.\n\n' +
        'I, on the afternoon of February 9, 1349, honestly thought I was just making a "reasonable political judgment." I honestly thought so.\n\n' +
        'I raised my hand.\n\n' +
        'Ten to one. Schwarber was removed.\n\n' +
        'In the five seconds afterward, I looked over at Schwarber.\n\n' +
        'He did not look back.\n\n' +
        'He was gathering his papers.\n\n' +
        'He put them in his leather bag.\n\n' +
        'He walked downstairs.\n\n' +
        'Five days later — Werd Island — two thousand Jews.\n\n' +
        'And the sentence I genuinely told myself that afternoon — "I am only voting on procedure" — would become the sentence I most wanted to forget for the next twenty-five years.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我告诉自己只是程序，这是 Roger 1099 那种"真心相信"。你听过这种话从你自己嘴里说出来过吗',
    expectedLength: '340-380 字',
    expectsRealAnswer: false,
  },
  {
    id: 6,
    phase: 'story',
    cosplay: 'Konrad of Strasbourg',
    narrativeRef: '§3 Rachel 章节 + §4 1349/02/14 屠杀（Yitzhak 那一眼是 lens 给的具体面孔）',
    content: {
      cn:
        '1349 年 2 月 14 日，中午，Werd 岛。\n\n' +
        '我得直接告诉你——我用 25 年时间想过该不该告诉你——但这一遍我必须直接说，否则我就在骗你。\n\n' +
        'Werd 岛，莱茵河西岸。河水冬天还在流，但靠岸的地方结了冰。岛上犹太墓地平时安静。今天早上开始，Strasbourg 城里所有犹太人（男人、女人、孩子）被 Stadtwache（城卫队）+ 工会武装人员赶过来。\n\n' +
        '大约 2000 人。\n\n' +
        '这个数字是 documented 的：男人、女人、孩子，一个不留。Strasbourg 这个犹太社区，在那一天结束。\n\n' +
        '我站在木堆边。\n\n' +
        '木堆是前一天 Metzgerzunft（屠夫工会，我这个工会，我的人）和几个木匠工会的人一起架的。Strasbourg 城外的橡树砍下来劈成 1.5 米长的方木，堆成 8 个大堆，每堆围一圈干稻草。\n\n' +
        '官员宣读了一段：那些**愿意接受洗礼**的人可以活。**少数同意**，多数是老人和孩子，他们被领到一边。\n\n' +
        '剩下的——**大多数**——他们说："Adonai（犹太人对神的称呼）不会让我们 deny 信仰救命。"他们站着，没跪下。男人开始念 Sh\'ma Yisrael，女人抱住孩子。\n\n' +
        '我看见 Yitzhak。\n\n' +
        '他在第三堆木堆前面。他妻子 Rachel 34 岁挨着他，两个孩子 6 岁 4 岁夹在两人中间。\n\n' +
        'Yitzhak 看见我。\n\n' +
        '他**没**喊。\n\n' +
        '他**没**骂。\n\n' +
        '他看了我**一眼**。\n\n' +
        '他的眼神**不是恨**。\n\n' +
        '是：\n\n' +
        '"我以为你不会"。\n\n' +
        '我那一秒，心里那 9 月喝过的他井里那口水的甜味回来。\n\n' +
        '我那一秒，他 1340 年说的"信得过的人"5 个字回来。\n\n' +
        '我没动。\n\n' +
        '我没说话。\n\n' +
        '我没拦。\n\n' +
        '火点起来。\n\n' +
        '我没看完。\n\n' +
        '我转身，离开木堆，走过岛上结冰的小桥，走回 Strasbourg 城里。\n\n' +
        '我背后，风把烟吹过来。我闻到。\n\n' +
        'Yitzhak 那**一眼**。\n\n' +
        '25 年，我闭眼能看到。\n\n' +
        '25 年，我没**告诉过任何人**。\n\n' +
        '25 年，这一眼，和**我没说话没拦**这一秒，是我余生里**没人知道但我每天都在还**的一笔账。',
      en:
        'February 14, 1349. Midday. Werd Island.\n\n' +
        'I have to tell you straight. I have spent twenty-five years deciding whether to tell anyone. But this is your lens, and if I do not tell you, I am lying to you.\n\n' +
        'Werd Island. The Rhine flowing along the west bank. Winter water still flowing in the middle, but ice along the edges. The Jewish cemetery on the island. Normally quiet. From this morning on, every Jew in Strasbourg (men and women and children) was being driven onto the island by the Stadtwache (the city guard) and armed men from the trade guilds.\n\n' +
        'About two thousand people.\n\n' +
        'This number is documented. Men, women, and children: none left. The Jewish community of Strasbourg ended on that day.\n\n' +
        'I stood next to the woodpile.\n\n' +
        'The woodpiles had been built the day before, by the Metzgerzunft (the Butchers\' Guild, **my** guild, **my** men) and the carpenters\' guild together. Oak trees from outside the walls, cut into beams about a meter and a half long, stacked into eight large piles. Around each pile, a circle of dry straw.\n\n' +
        'An official read out an order: those who **accepted baptism** could live. **A small number agreed**, mostly the very old and the very young. They were led to one side.\n\n' +
        'The rest, **most of them**, said: "Adonai (the Jewish name for God) will not let us deny our faith to save our lives." They stood. They did not kneel. The men began to say the Sh\'ma Yisrael (the central Jewish prayer of faith). The women held their children.\n\n' +
        'I saw Yitzhak.\n\n' +
        'He was in front of the third pile. His wife Rachel, thirty-four, stood at his side. Their two children, six and four, were between them.\n\n' +
        'Yitzhak saw me.\n\n' +
        'He did **not** cry out.\n\n' +
        'He did **not** curse me.\n\n' +
        'He looked at me. **One look.**\n\n' +
        'His eyes were **not** hate.\n\n' +
        'They were —\n\n' +
        '"I did not think you would."\n\n' +
        'In that one second, the sweet taste of his well-water that I had drunk in September came back into my mouth.\n\n' +
        'In that one second, the four words he had said in 1340 — a trustworthy person — came back into my head.\n\n' +
        'I did not move.\n\n' +
        'I did not speak.\n\n' +
        'I did not stop them.\n\n' +
        'They lit the fires.\n\n' +
        'I did not stay to the end.\n\n' +
        'I turned. I walked away from the woodpile. I crossed the small icy bridge off the island. I walked back into Strasbourg.\n\n' +
        'Behind me, the wind blew the smoke after me. I smelled it.\n\n' +
        'That **one look** from Yitzhak —\n\n' +
        'For twenty-five years, when I closed my eyes, I could see it.\n\n' +
        'For twenty-five years, I told **no one**.\n\n' +
        'For twenty-five years, that one look, and the second when I did not speak and did not stop them, was the debt I paid every day, that no one ever knew I was paying.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Yitzhak 那一眼不是恨，是"我以为你不会"。25 年我闭眼能看见。你听过这种眼神吗',
    expectedLength: '380-420 字',
    expectsRealAnswer: false,
  },
  {
    id: 7,
    phase: 'story',
    cosplay: 'Konrad of Strasbourg',
    narrativeRef: '§3 Rachel + §4 1349 屠杀后日常 + Konrad 心理状态',
    content: {
      cn:
        '我那天回家，天还没黑。\n\n' +
        '我推开家门。\n\n' +
        'Margarete 站在壁炉前，她**没**回头看我。她在搅锅里的汤。她说："Konrad，结束了？"\n\n' +
        '我点头。\n\n' +
        '她**没**回头。她说："汤好了。"\n\n' +
        'Wilhelm 8 岁，他从他卧室门里探出头，看了我一眼。他**没**喊"Vater"，**没**跑过来。\n\n' +
        '他看了我一眼，然后退回卧室，把门关上。\n\n' +
        '我坐到桌前。\n\n' +
        'Margarete 把一碗汤放到我面前，终于转身看我。\n\n' +
        '她看了我**整整 5 秒**。\n\n' +
        '她**没**说话。\n\n' +
        '她转身回灶台，继续切萝卜。\n\n' +
        '我那 5 秒里心里在想什么？\n\n' +
        '我在想：\n\n' +
        '她知道。\n\n' +
        'Margarete 12 月那晚说"就这一段时间"，是她让我心里第一次松动 1 毫米的人。但她**不会**让我去杀人。她**没**料到 4 个月之后我会**坐在这里**。她甚至**没**料到我会**投票罢免**。\n\n' +
        '她那 5 秒，是她意识到——我比她想的走得远多了。\n\n' +
        '我那一晚，倒了一杯酒，喝完，手发抖，比早上 Margarete 端汤那一刻**抖得更厉害**。\n\n' +
        '我那一晚 Margarete 没问我细节，我**没**说细节。\n\n' +
        '但那一晚开始，我们家**多了一个不可触碰的话题**。这个话题没有名字，但我们两人都知道：你不能提、不能问、不能哭、不能道歉，你只能**绕开**。\n\n' +
        '这是 1349 年 2 月 14 日傍晚，我家，Strasbourg。\n\n' +
        '这一晚开始，我家这扇门再没**真的**打开过。它每天还在物理上**开**和**关**，但门里那个家——\n\n' +
        '已经**死**了。',
      en:
        'I came home that day before dark.\n\n' +
        'I pushed the door open.\n\n' +
        'Margarete was at the hearth. She did **not** turn to look at me. She was stirring soup. She said: "Konrad — is it over?"\n\n' +
        'I nodded.\n\n' +
        'She did **not** turn. She said: "The soup is ready."\n\n' +
        'Wilhelm, eight, looked out from his bedroom door. He looked at me. He did **not** call out "Vater" (Father). He did **not** run to me.\n\n' +
        'He looked at me, and then he stepped back into his room and shut the door.\n\n' +
        'I sat at the table.\n\n' +
        'Margarete set a bowl of soup in front of me. Then she finally turned to look at me.\n\n' +
        'She looked at me for **five full seconds**.\n\n' +
        'She did **not** speak.\n\n' +
        'She turned and went back to the kitchen counter and went on slicing turnips.\n\n' +
        'In those five seconds, what was I thinking?\n\n' +
        'I was thinking —\n\n' +
        'She knows.\n\n' +
        'Margarete on that December night had said "just for now." She was the one who first made something inside me shift by one millimeter. But she would **not** have sent me to kill anyone. She had **not** expected, four months later, that I would be **sitting here**. She had not even expected that I would **vote** to remove him.\n\n' +
        'Those five seconds — that was the moment she realized — I had gone much further than she thought.\n\n' +
        'That night I poured myself a cup of wine.\n\n' +
        'I drank it.\n\n' +
        'My hands shook.\n\n' +
        'Worse than they had shaken when she handed me the soup that morning.\n\n' +
        'That night Margarete did not ask for any details.\n\n' +
        'I did **not** offer any details.\n\n' +
        'But starting that night, our house had **one untouchable subject**.\n\n' +
        'It had no name.\n\n' +
        'But we both knew it.\n\n' +
        'You could not bring it up. You could not ask. You could not cry. You could not apologize.\n\n' +
        'You could only **go around it**.\n\n' +
        'This was the evening of February 14, 1349. My house. Strasbourg.\n\n' +
        'From that evening on, the door of my house never **truly** opened again.\n\n' +
        'It still opened and closed every day, in the physical sense.\n\n' +
        'But the family on the other side of that door —\n\n' +
        'was already **dead**.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Margarete 那 5 秒，她意识到我比她想的走得远——这是我家死的那一夜。你家有过这种安静吗',
    expectedLength: '320-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 8,
    phase: 'story',
    cosplay: 'Konrad of Strasbourg',
    narrativeRef: '§4 1349 7 月 plague 来 Strasbourg + Margarete 死 + Konrad 第一次怀疑自己',
    content: {
      cn:
        '5 个月。\n\n' +
        '1349 年 7 月，plague 还是来了 Strasbourg。\n\n' +
        '6 月底，城南先开始。一个鞋匠学徒发烧，脖子下面红疙瘩，3 天死。\n\n' +
        '他没去过 Judengasse。\n\n' +
        '犹太人区那条街已经**没人**了。5 个月前烧光了。Judengasse 已经被锁：空房子、空银匠铺、空井。\n\n' +
        '但 plague 还是来了。\n\n' +
        '7 月 1 日 Margarete 开始发烧。\n\n' +
        '7 月 2 日她脖子下面：\n\n' +
        '红疙瘩。\n\n' +
        '大小**正好**跟 Hans 家小 Klaus 1348 年 12 月那个一样。\n\n' +
        '7 月 5 日凌晨。\n\n' +
        'Margarete 死。\n\n' +
        '35 岁。\n\n' +
        '我坐在她床边那一刻，心里**第一次**出现了一个我 5 个月一直**不让自己想**的问题：\n\n' +
        '如果犹太人真的下毒了，为什么犹太人也死了那么多？\n\n' +
        'Mainz 的犹太人 1349 年 2 月也被烧了，8 月又烧 6000；但 1349 年夏天 Mainz 基督徒同样死了 1 万。\n\n' +
        'Schwarber 那天在议会说的"犹太人自己也死于 plague"——\n\n' +
        '他说的是真的。\n\n' +
        '我那一刻握着 Margarete 已经凉的手，**第一次**承认：\n\n' +
        '1349 年 2 月 14 日 Werd 岛，那 2000 个人，他们的死——\n\n' +
        '没有阻止 Margarete 的死。\n\n' +
        '他们的死也不是 plague 的原因。\n\n' +
        '他们的死不是为了什么。\n\n' +
        '就是白死。\n\n' +
        '7 月那一年 Strasbourg 总共死了 16000 人，80% 的城。\n\n' +
        '我儿子 Wilhelm 9 岁活下来。\n\n' +
        '我自己**也活下来**。\n\n' +
        '这两件事——一件是我 5 个月前**用 2000 条命**想换的，一件是我**根本没想要换**的。\n\n' +
        '但 plague **没**问我想换什么。它不挑，只是**穿过**我的城，带走了它要带走的。\n\n' +
        '它带走了 Margarete。它**没**带走 Wilhelm。它**没**带走我。\n\n' +
        '我那一晚跪在 Margarete 床边，没有念主祷文。我心里只有一句话：\n\n' +
        'Yitzhak 那一眼。',
      en:
        'Five months passed.\n\n' +
        'July 1349 — plague came to Strasbourg anyway.\n\n' +
        'It started in the south of the city in late June. A cobbler\'s apprentice ran a fever. A red lump came up on his neck. He died in three days.\n\n' +
        'He had never been to the Judengasse.\n\n' +
        'There was no one in the Jewish quarter anymore. It had been burned out five months earlier. The Judengasse was locked. Empty houses. Empty silversmith\'s shops. Empty wells.\n\n' +
        'But the plague came anyway.\n\n' +
        'July 1, Margarete started running a fever.\n\n' +
        'July 2, on her neck —\n\n' +
        'A red lump.\n\n' +
        'The same size as the one on Hans\'s little Klaus, back in December 1348.\n\n' +
        'Before dawn on July 5 —\n\n' +
        'Margarete died.\n\n' +
        'Thirty-five years old.\n\n' +
        'In the moment I sat by her bed —\n\n' +
        'For the **first time**, a question I had been refusing to let myself think about for five months came into my mind.\n\n' +
        'If the Jews really had poisoned the wells —\n\n' +
        '— why were so many Jews dying too?\n\n' +
        'The Jews of Mainz were burned in February 1349, and another 6,000 in August. But that same summer in Mainz, ten thousand Christians also died.\n\n' +
        'What Schwarber had said in the council chamber on February 9 — "the Jews themselves are dying of plague" —\n\n' +
        '— was true.\n\n' +
        'In that moment, holding Margarete\'s already-cold hand —\n\n' +
        'I admitted, for the **first time**:\n\n' +
        'The two thousand people on Werd Island, on February 14, 1349 — their deaths —\n\n' +
        '— did not save Margarete.\n\n' +
        'Their deaths were not the cause of plague either.\n\n' +
        'Their deaths were not for anything.\n\n' +
        'They simply died for nothing.\n\n' +
        'That summer, sixteen thousand people died in Strasbourg. Eighty percent of the city.\n\n' +
        'My son Wilhelm, nine, survived.\n\n' +
        'I myself **also survived**.\n\n' +
        'These two things — one I had tried to **buy with two thousand lives** five months earlier; one I had **not even thought of asking for**.\n\n' +
        'But plague did not **ask** what I wanted to trade. It did not choose. It simply **passed through** my city. It took whom it took.\n\n' +
        'It took Margarete. It did **not** take Wilhelm. It did **not** take me.\n\n' +
        'That night, kneeling at Margarete\'s bedside —\n\n' +
        'I did not say the Pater Noster (the Lord\'s Prayer).\n\n' +
        'There was only one thing in my head:\n\n' +
        'That one look from Yitzhak.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'plague 还是来了 Strasbourg。Margarete 死那一刻，我第一次问"如果犹太人下毒为什么犹太人也死"。你听过你心里的"我错了"声音吗',
    expectedLength: '380-420 字',
    expectsRealAnswer: false,
  },
  {
    id: 9,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§3 Rachel 章节"反犹是结构性机制"教学要点 + §6 长尾——1881/1903/1933/1942 模板（不直接 21 世纪影射）+ Konrad 余生 25 年 + 1374 年死',
    content: {
      cn:
        '现在我们离开 Konrad 的视角，往后看。\n\n' +
        'Konrad 1349 年 7 月 5 日跪在 Margarete 床边，38 岁。\n\n' +
        '他**没**自杀。\n\n' +
        '他**没**公开承认错。\n\n' +
        '他**没**写一份请罪书贴在 Münster（大教堂）门上。\n\n' +
        '他活下来。\n\n' +
        '他活了 25 年。\n\n' +
        '1374 年他死，63 岁，第二轮 plague。\n\n' +
        '这 25 年他做了什么？\n\n' +
        '他继续做屠夫工会代表，继续在市议会有那把椅子。他没再**主动**讨论犹太人话题。他没再娶。他把 Wilhelm 拉扯大。\n\n' +
        'Wilhelm 1357 年 17 岁结婚，娶了一个鞋匠的女儿，他们生了两个孩子。\n\n' +
        'Wilhelm 一辈子都没问过 Konrad 1349 年 2 月 14 日那天的细节。\n\n' +
        '但 Konrad 1374 年死前写了一份遗嘱。遗嘱里有三件事：\n\n' +
        '1. 屠夫铺子留给 Wilhelm（这是常规）。\n\n' +
        '2. 给 Strasbourg Münster 捐 50 银马克（按 14 世纪购买力相当于一户中产人家 5 年生活费），指定每年 2 月 14 日"为城邦灵魂做弥撒"。他**没**说为谁。\n\n' +
        '3. 1340 年 Yitzhak 给 Margarete 打的那对刻 Margarete / Konrad 的银鞋扣，指定**放进 Konrad 自己的棺材陪葬**。\n\n' +
        '这是他**唯一公开做的承认**。\n\n' +
        '只有看懂的人能看懂。\n\n' +
        'Wilhelm 那天看着遗嘱里这一条，他可能懂，可能不懂。他执行了。\n\n' +
        '现在再往后看。\n\n' +
        'Konrad 1374 年死，他**没**意识到的事：\n\n' +
        '他 1349 年 2 月 14 日做的事是一个**模板**。\n\n' +
        '这个模板被反复用。\n\n' +
        '**1881 年沙俄 pogrom**：俄罗斯沙皇 Alexander II 被刺，经济不好，找替罪羊。一年内乌克兰、俄罗斯 200+ 城镇屠杀犹太人。\n\n' +
        '**1903 年 Kishinev pogrom**：摩尔多瓦一个小城，一个基督徒男孩被杀，谣言"犹太人杀基督徒小孩取血做无酵饼"。3 天屠杀加强奸，49 死。这是 20 世纪第一场被全球新闻报道的反犹屠杀。\n\n' +
        '**1938 年纳粹 Kristallnacht**（"水晶之夜"）：德国全境一夜，上千犹太教堂烧，91 死加 30000 抓。\n\n' +
        '**1942 年 Wannsee Conference**：纳粹高级官员开会，把已经在进行的杀戮（1941 年夏 Einsatzgruppen 大规模枪决加 1941 年 12 月 Chełmno 毒气）系统化为工业流程，决定"最终解决犹太人问题"。到 1945 年共 600 万犹太人死。\n\n' +
        'Holocaust 不是 1942 年突然发生的。\n\n' +
        '它有 600 年的"反复演练"。\n\n' +
        '1349 年 Strasbourg 是第一次大演练。\n\n' +
        'Holocaust 是终极版本。\n\n' +
        '这是这一遍教学的核心：\n\n' +
        '**反犹主义不是"个别坏人"行为**。\n\n' +
        '**是结构性的"灾难时找替罪羊"机制**。\n\n' +
        '每次社会崩溃（plague、经济危机、战败），这个机制就被激活。\n\n' +
        '少数族群 + 看起来不一样 + 经济稍微好一点 = 完美替罪羊。\n\n' +
        '这个机制今天还在。\n\n' +
        '只是替罪羊不一定是犹太人。\n\n' +
        '底层逻辑没变。\n\n' +
        'Konrad 1349 年 2 月 14 日**真心**告诉自己他在做合理的政治判断。\n\n' +
        '600 年后我们读他的故事知道他做的是 Holocaust 的一次大演练。\n\n' +
        '但这两件事都是真的：他**真心**相信，他**做了**，我们今天读懂了，我们没法假装他**没做**。\n\n' +
        '故事讲完了。下面我们换 narrator 视角，问两个真问题。',
      en:
        'We now step out of Konrad\'s perspective and look forward.\n\n' +
        'On July 5, 1349, Konrad knelt at Margarete\'s bedside. He was thirty-eight.\n\n' +
        'He did **not** kill himself.\n\n' +
        'He did **not** publicly admit he was wrong.\n\n' +
        'He did **not** nail a confession to the door of the Münster (the cathedral).\n\n' +
        'He lived.\n\n' +
        'He lived another twenty-five years.\n\n' +
        'He died in 1374, at sixty-three, in the second wave of plague.\n\n' +
        'What did he do during those twenty-five years?\n\n' +
        'He kept his seat as the Butchers\' Guild representative. He kept his seat in the city council. He did not bring up the subject of Jews on his own. He did not remarry. He raised Wilhelm.\n\n' +
        'In 1357, Wilhelm, seventeen, married a cobbler\'s daughter. They had two children. Wilhelm never once asked Konrad about the details of February 14, 1349.\n\n' +
        'But before he died in 1374, Konrad wrote a will. Three items:\n\n' +
        '1. The butcher shop went to Wilhelm. (The usual.)\n\n' +
        '2. Fifty silver marks were given to the Strasbourg Münster. (In fourteenth-century money, that was about five years of living for a middle-class household.) The donation was earmarked for a Mass for the soul of the city, said every February 14. He did **not** specify for whom.\n\n' +
        '3. The pair of silver shoe-buckles Yitzhak had made for Margarete in 1340 — engraved Margarete and Konrad — were to be **placed in Konrad\'s own coffin**, buried with him.\n\n' +
        'This was his **only public admission**.\n\n' +
        'Only a person who could read it would read it.\n\n' +
        'Wilhelm read the will the day his father died. Whether he understood that line, no one knows. He carried it out.\n\n' +
        'Now look further ahead.\n\n' +
        'Konrad died in 1374. He did **not** know:\n\n' +
        'What he had done on February 14, 1349, was a **template**.\n\n' +
        'This template was used again and again.\n\n' +
        '**1881 — pogroms in the Russian Empire.** Tsar Alexander II is assassinated. The economy is bad. People reach for a scapegoat. Within a year, more than two hundred Ukrainian and Russian towns kill their Jewish neighbors.\n\n' +
        '**1903 — Kishinev pogrom in Moldova.** A Christian boy is killed. The rumor: "Jews kill Christian children to use the blood in their ritual bread." Three days of killings and rapes. Forty-nine dead. The first anti-Jewish massacre of the twentieth century to be reported globally.\n\n' +
        '**1938 — Kristallnacht ("Night of Broken Glass") in Nazi Germany.** In one night, more than a thousand synagogues across Germany are burned. Ninety-one Jews killed. Thirty thousand arrested.\n\n' +
        '**1942 — Wannsee Conference.** Senior Nazi officials meet to systematize the killing already underway (Einsatzgruppen mass shootings began in summer 1941; gassing at Chełmno began in December 1941) — turning it into an industrial process: the "Final Solution to the Jewish Question." Six million Jews are dead by 1945.\n\n' +
        'The Holocaust did not happen suddenly in 1942.\n\n' +
        'It had six hundred years of rehearsal.\n\n' +
        'Strasbourg 1349 was the first major rehearsal.\n\n' +
        'The Holocaust was the final version.\n\n' +
        'This is the heart of what this lens teaches:\n\n' +
        '**Anti-Jewish hatred is not "a few bad people."**\n\n' +
        '**It is a structural mechanism — "find a scapegoat in disaster."**\n\n' +
        'Every time a society breaks down — plague, economic crisis, lost war — this mechanism is switched on. A small group + looks different + slightly better off economically = the perfect scapegoat.\n\n' +
        'This mechanism is still here today.\n\n' +
        'The scapegoat does not have to be Jews.\n\n' +
        'The underlying logic has not changed.\n\n' +
        'Konrad on February 14, 1349, **honestly** told himself he was making a reasonable political judgment.\n\n' +
        'Six hundred years later, reading his story, we know what he did was one rehearsal of the Holocaust.\n\n' +
        'But both things are true at once.\n\n' +
        'He **believed**. He **did it**. We **understand** it today. We cannot pretend he did **not** do it.\n\n' +
        'The story is done. Now we shift into narrator voice and ask two real questions.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '现在你（扮演 Konrad 8 节）回头看你自己',
    expectedLength: '380-420 字',
    expectsRealAnswer: false,
  },
  // ═════ Synthesis（真 Socratic）═════
  {
    id: 10,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§3 Rachel 章节 + §11 思考问题 — Konrad 1349/02/09 投票动机分析',
    content: {
      cn:
        '你刚扮演了 Konrad——一个 38 岁的 Strasbourg 屠夫工会代表 + 市议会成员。他在 1349 年 2 月 9 日**投了赞成票**罢免 Schwarber，5 天后站在 Werd 岛木堆旁，**亲眼看着** Yitzhak 被烧。他**没**说话，**没**拦。他余生 25 年闭眼能看到 Yitzhak 那一眼。\n\n' +
        '问题来了。Konrad 1349 年 2 月 9 日下午举手投票：\n\n' +
        '这是 (a) **结构压力下的从众**（市议会、妻子、邻居孩子病——他个人拒绝意味着自我孤立，他可能丢掉议会席位、工会代表、在 Strasbourg 的社会位置），\n\n' +
        '还是 (b) **个人道德选择的失败**（他 10 年认识 Yitzhak，1340 年喝过他井里的水，他知道 Yitzhak 的为人——他选择**相信谣言**而**不**相信自己 10 年的观察）？\n\n' +
        '历史学家跟伦理学家在这个问题上**两边都站得住**。\n\n' +
        '**一种说法 — 结构受害者读法**。这种现象有个名字叫"**the banality of evil**"，恶的**平庸性**，意思是**普通的、不戏剧化的恶**。（1960 年代社会心理学家 Stanley Milgram 做过一系列服从实验，证明普通人在权威指令下会做出极坏的选择，这是同一个 banality of evil pattern 的现代心理学证据。）Konrad 不是一个**特别坏**的人，他是一个**普通**人。Strasbourg 城邦 1349 年 2 月那 4 个月，市议会、主教、工会、妻子、邻居——5 个方向的压力**同时**指向他。任何一个个体都极难抵抗这种**多方向**压力。Schwarber **抵抗了**，Schwarber **被罢免了**。这就是 Strasbourg 这种从众体系**对孤身抵抗者的成本设计**。Konrad 投票，是一个普通人在**完全可预测**的结构压力下做出的**完全可预测**的选择。这个选择是**糟糕**的，但**主要责任在结构**，不在个体。Konrad 是 banality of evil 的一个 600 年前早期标本，比 Arendt 命名这个 pattern 早 600 年。\n\n' +
        '**另一种说法 — moral agent 读法（亚里士多德传统 + 现代道德哲学 Bernard Williams）**：动机理由从不能洗白选择。Konrad 不是 14 岁少年，他**38 岁**。他认识 Yitzhak **10 年**。他**自己**1348 年 9 月**还**喝过 Yitzhak 井里的水。他**自己**1340 年从 Yitzhak 手里接过那对银鞋扣。他**有**完整的反证，**有**自己 10 年的观察，**有** Schwarber 那天在议会读出来的论证。他**选择**相信谣言而**不**相信自己——这**不是**结构压力下的"被迫"，是**主动**的认知失败。他选择**逃避**自己已经知道的。把责任归给"结构"是 600 年后历史学家的**话术**。Konrad **自己**那一刻**知道**他在做什么——证据是他 25 年闭眼能看到 Yitzhak 那一眼。如果他真是"被迫"，他**不会**有这种持续 25 年的**自我审判**。他 25 年里**自己**给自己做了陪审员，**自己**判了自己有罪，只是他**没**公开宣判。\n\n' +
        '两边都站得住——一种说法走"结构压力下的普通人"看，另一种说法走"moral agent 拥有完整反证仍然选择相信谣言"看。\n\n' +
        '你怎么看？Konrad 那天举手，更靠近一种说法（结构受害者）还是另一种说法（道德选择失败）？想 30 秒。',
      en:
        'You have just played Konrad, a thirty-eight-year-old Butchers\' Guild representative on the Strasbourg city council. He **voted in favor** of removing Schwarber on February 9, 1349. Five days later, he stood next to a woodpile on Werd Island. He **watched** Yitzhak burn with his own eyes. He **did not** speak. He **did not** intervene. For the next twenty-five years, when he closed his eyes, he could see that one look from Yitzhak.\n\n' +
        'Here is the question. When Konrad raised his hand on the afternoon of February 9, 1349 —\n\n' +
        'Was this (a) **conformity under structural pressure** (the city council, his wife, the neighbor\'s sick child; refusing on his own would mean self-isolation, possibly losing his council seat, his guild representation, his social standing in Strasbourg),\n\n' +
        'Or (b) **a failure of personal moral choice** (he had known Yitzhak for ten years, he had drunk from Yitzhak\'s well in 1348, he knew the man; he chose to **believe the rumor** rather than trust his own ten years of observation)?\n\n' +
        'Historians and ethicists have argued both sides.\n\n' +
        '**One view — the structural-victim reading.** This kind of evil has a name: the banality of evil, meaning ordinary, not dramatic. (In the 1960s, a social psychologist named Stanley Milgram ran famous experiments showing how ordinary people obey orders even when those orders are wrong.) Konrad was not an **unusually bad** man. He was an **ordinary** man. In the four months before February 9, 1349, five different lines of pressure (the council, the bishop, the guilds, his wife, his neighbors) all pointed at him at once. Almost no individual can resist this kind of **multi-channel pressure**. Schwarber **did** resist. Schwarber **was removed**. That was Strasbourg\'s **price tag for resisting alone** in a conformist system. Konrad\'s vote was an ordinary person\'s **fully predictable** response to **fully predictable** pressure. The choice was **bad**, but the **main responsibility lies with the structure**, not with the individual. Konrad is a 600-year-old example of the banality of evil, an early specimen recorded long before Arendt named the pattern.\n\n' +
        '**The other view — the moral-agent reading (the Aristotelian tradition continued in modern moral philosophy by figures like Bernard Williams).** Motive can never wash out choice. Konrad was not a fourteen-year-old. He was **thirty-eight**. He had known Yitzhak for **ten years**. He **himself** had drunk from Yitzhak\'s well as recently as September 1348. He **himself** had received the silver shoe-buckles from Yitzhak\'s hand in 1340. He had complete counter-evidence. He had ten years of his own observation. He had Schwarber\'s reasoning, presented to him in the chamber that day. He **chose** to believe the rumor and **not** to believe his own observation. This was **not** "compelled" under structural pressure. This was an **active** cognitive failure. He chose to **flee from what he already knew**. Calling it "structural" six hundred years later is a **rhetoric of historians**, not the truth of his moment. Konrad **himself**, in that moment, **knew** what he was doing. The proof is that he could see that one look from Yitzhak for twenty-five years. If he had truly been "compelled," he would **not** have spent twenty-five years giving himself this **private trial**. He **was** his own jury for twenty-five years. He **convicted** himself. He just never **announced** the verdict.\n\n' +
        'Both sides stand. The first view judges from "ordinary person under structural pressure." The other view judges from "moral agent with complete counter-evidence who chooses the rumor anyway."\n\n' +
        'What do you think? When Konrad raised his hand, closer to the first view (structural victim) or the other view (moral failure)? Take thirty seconds.',
    },
    deliverGoal:
      '你扮演了 Konrad 9 节——一个投票罢免 Schwarber 5 天后看着 Yitzhak 被烧的 Strasbourg 屠夫。' +
      '历史学界跟伦理学家对他的投票**两极分化**：' +
      '**一种说法（结构受害者 / Arendt "恶的平庸性"传统）**：5 个方向的压力同时指向他，任何普通人都难抵抗，主要责任在结构。' +
      '**另一种说法（moral agent / 亚里士多德伦理传统）**：他有 10 年观察 Yitzhak，喝过他井里的水，有 Schwarber 那天的反证。他选择相信谣言而不相信自己，这是主动的认知失败。他 25 年闭眼能看到 Yitzhak 一眼证明他自己知道。' +
      '——你怎么看，是结构压力下的普通人还是道德选择的失败？',
    engagementHook:
      '**你怎么看**——Konrad 那天举手，是结构压力下的从众还是个人道德选择的失败？没有标准答案，给你的理由说服我。想 30 秒',
    expectedLength: '240-280 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§3 Rachel 章节 + Konrad 1349/07-1374 余生 25 年没公开承认错',
    content: {
      cn:
        '第二个真问题——这一个**比第一个更难**——它是关于一个 perpetrator 余生**怎么活**的。\n\n' +
        '1349 年 7 月，plague 来了 Strasbourg，杀了 16000 人，包括 Margarete。\n\n' +
        '这件事**证伪了** Konrad 1349 年 2 月 14 日烧人的"理由"。\n\n' +
        '犹太人不是 plague 的原因。犹太人也死于 plague。Schwarber 那天在议会说的是真的。\n\n' +
        '但 Konrad 余生 25 年。\n\n' +
        '他**没**公开承认错。\n\n' +
        '他**没**写一份请罪书。\n\n' +
        '他**没**站在 Münster 门口对全城说"我们 1349 年 2 月 14 日做的事是错的"。\n\n' +
        '他只在遗嘱里悄悄做了一点事：一笔每年 2 月 14 日的弥撒（不指明为谁），加一对刻 Margarete / Konrad 的银鞋扣放进自己棺材。\n\n' +
        '这一点事——是大是小？\n\n' +
        '**一种说法 — 转型正义读法（modern transitional justice tradition；Desmond Tutu 主持的南非真相与和解委员会的核心立场是"公开承认是和解的前提"）**：明知道错了**不公开承认**，是对那 2000 个死者的**二次伤害**。Strasbourg 后来 600 年里学校里的孩子们被告诉的是"1349 年屠犹是因为犹太人下毒"或者"是因为大众恐慌没人能制止"。这些**模糊的集体性叙事**一直让**反犹的种子在结构里活下来**，直到 1942 年又长出 Holocaust。如果 Konrad 1374 年遗嘱里**说清楚**——"我 1349 年 2 月 9 日投票罢免 Schwarber 那一票是错的；我 1349 年 2 月 14 日没拦那场屠杀是错的；犹太人没下毒；plague 来 Strasbourg 不是因为他们；我请求宽恕"——这一份遗嘱会成为 Strasbourg 城市档案。1881 年沙俄 pogrom 时、1938 年纳粹 Kristallnacht 时，会有人**找出来读**，会有人说"600 年前已经有 perpetrator 自己说过这是错的"。公开承认是反 Holocaust 教育最有力的武器。Konrad 选择**沉默**，是把这个武器**留在地里 600 年**。他对死者的二次伤害比他原先那一次更长。\n\n' +
        '**另一种说法 — medieval contextualism 读法（中世纪社会史学派，特别是 R.I. Moore《The Formation of a Persecuting Society》传统）**：1374 年的 Strasbourg **没有**21 世纪意义的"truth-and-reconciliation 委员会"，**没有**报刊，**没有**"个人公开忏悔"的社会概念（当时的忏悔是**私下**对神父说，不是对城邦说）。Konrad 公开承认错会被理解为**亵渎神明**（"如果 1349 年屠犹是错的，那等于说当年市议会、主教、教会全部错了，这是质疑教会权威，这是异端"）。他会被**烧死**，他儿子 Wilhelm 会失去屠夫铺子，他孙子会被赶出 Strasbourg。他公开承认错的代价是**他家几代人**承担。**没有**任何 14 世纪 Strasbourg 公民会把"我个人公开承认错"当成有意义的选项。Konrad 在他的**时代约束**内**做了他能做的最大补偿**：一笔每年弥撒加银鞋扣陪葬，这是 medieval 道德语法允许的最大公开行为。把他用 21 世纪 truth-and-reconciliation 的标准评判，是**时代错置**（anachronism）。在他的**时代约束**之内，Konrad **做了他能做的所有事**——只是 medieval 社会能允许的"承认"比 21 世纪我们想象的**小得多**。\n\n' +
        '两边都站得住——一种说法走"公开承认是反复发生悲剧的唯一武器"看，另一种说法走"medieval 时代约束之内 Konrad 已经做了能做的所有事"看。\n\n' +
        '你怎么看？Konrad 余生 25 年没公开承认错——更靠近一种说法（转型正义角度，他没履行公开承认的责任）还是另一种说法（medieval 时代约束之内，他已尽力）？想 30 秒。\n\n' +
        '注：这个问题没有"中国 vs 西方"的对照，因为它适用于**任何**历史 perpetrator 的"余生"。你今天读关于二战日本、二战德国、越战美国、任何曾经参与暴力的国家或个人，同一个张力。',
      en:
        'A second real question. This one is **harder than the first**. It is about how a perpetrator **lives the rest of his life**.\n\n' +
        'July 1349 — plague came to Strasbourg — killed 16,000 people, including Margarete.\n\n' +
        'This event **disproved** Konrad\'s "reason" for the burning on February 14, 1349.\n\n' +
        'The Jews were not the cause of the plague.\n\n' +
        'Jews themselves were also dying of plague.\n\n' +
        'What Schwarber had said in the council that day was true.\n\n' +
        'But for the next twenty-five years —\n\n' +
        'Konrad **never** publicly admitted he was wrong.\n\n' +
        'He never wrote a public confession.\n\n' +
        'He never stood in front of the Münster and told the city, "What we did on February 14, 1349 was wrong."\n\n' +
        'He did one small thing in his will: an annual Mass on February 14 (with no name attached), and a pair of silver shoe-buckles engraved Margarete and Konrad placed in his own coffin.\n\n' +
        'Was this small thing — small, or large?\n\n' +
        '**One view — the transitional-justice reading (the position taken by Desmond Tutu and the South African Truth and Reconciliation Commission, that "public admission is the prerequisite for reconciliation").** To know you were wrong and **not publicly say so** is a **second injury** to the dead. For six hundred years afterward, the children of Strasbourg were told either "1349 happened because the Jews poisoned the wells" or "1349 was a panic no one could stop." These vague collective narratives **kept the seeds of antisemitism alive in the structure** — until they grew into the Holocaust in 1942. If Konrad\'s 1374 will had said clearly: "My vote to remove Schwarber on February 9, 1349 was wrong. My silence at the burning on February 14, 1349 was wrong. The Jews did not poison the wells. Plague did not come to Strasbourg because of them. I ask forgiveness." — that document would have entered the Strasbourg city archive. In 1881, during the Russian pogroms; in 1938, during Kristallnacht — someone could have **pulled it out and read it**. Someone could have said, "Six hundred years ago a perpetrator already said this was wrong." **Public admission** is the strongest weapon against the next Holocaust. Konrad chose **silence**. He left that weapon **in the ground for six hundred years**. His second injury to the dead lasted longer than the first.\n\n' +
        '**The other view — the medieval contextualism reading (medieval social history, especially R. I. Moore\'s The Formation of a Persecuting Society tradition).** Strasbourg in 1374 had **no** twenty-first-century "truth-and-reconciliation commission." It had **no** newspapers. It had **no** social concept of "individual public confession" (medieval confession was **private**, made to a parish priest, not to the city). Konrad publicly admitting he was wrong would have been read as **heresy** ("If killing the Jews in 1349 was wrong, then the council, the bishop, and the Church were all wrong — and to question the Church is heresy"). He would have been **burned to death**. His son Wilhelm would have lost the butcher shop. His grandchildren would have been driven out of Strasbourg. The cost of public admission was **his own descendants**. **No** fourteenth-century citizen of Strasbourg would have considered "individual public confession" a meaningful option. Within the **constraints of his time**, Konrad **did the largest reparation that was possible** — an annual Mass and silver buckles in the grave. This was the maximum public act medieval moral grammar allowed. Judging him by twenty-first-century truth-and-reconciliation standards is **anachronism** (judging the past by standards from a different time). Konrad was **not a coward**. He was a man who **did everything within reach**. It is just that the "admission" medieval society could permit was **far smaller** than what the twenty-first century imagines.\n\n' +
        'Both sides stand. The first view: "Public admission is the only weapon against repeated tragedy." The other view: "Within medieval constraints, Konrad did everything he could."\n\n' +
        'What do you think? Konrad\'s twenty-five years of silence — closer to the first view (transitional-justice angle — he failed his duty to admit publicly) or the other view (within his time, he did all he could)? Take thirty seconds.\n\n' +
        'Note: there is **no** "China vs. West" parallel question here, because this applies to **any** historical perpetrator\'s afterlife. Read about post-WWII Japan, post-WWII Germany, post-Vietnam America, any country or individual that ever participated in mass violence — the same tension is there.',
    },
    deliverGoal:
      'Konrad 余生 25 年——明知道烧人的"理由"被 plague 打脸了，但他没公开承认错，只在遗嘱里悄悄做了点事。' +
      '**一种说法（转型正义读法 / Tutu / 真相与和解）**：公开承认是反复发生悲剧的唯一武器。他选择沉默，把这武器留在地里 600 年。他对死者的二次伤害比第一次更长。' +
      '**另一种说法（medieval contextualism / R.I. Moore 传统）**：14 世纪 Strasbourg 没有"公开忏悔"的社会概念，他公开承认会被烧死。他在时代约束内做了能做的所有事——一笔弥撒加银鞋扣陪葬——是 medieval 道德语法允许的最大公开行为。用 21 世纪标准评判他是 anachronism。' +
      '——你怎么看，是转型正义角度的"未尽公开承认责任"还是 medieval 时代约束之内已尽力？',
    engagementHook:
      'Konrad 余生 25 年没公开承认错，是未尽公开承认责任，还是 medieval 时代约束之内已尽力——先在心里想想你怎么看，下一节我会正式问你。',
    expectedLength: '260-300 字 + 真问题',
    expectsRealAnswer: false,
  },
  // ═════ Meta（反思 + 桥）═════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题 + lens 桥到 Devorah',
    content: {
      cn:
        '你刚从 Konrad 的内部走了一遍：他 1349 年 2 月 14 日早上 Margarete 给他端汤手在抖；他 1340 年从 Yitzhak 手里接过那对刻字银鞋扣；他 1348 年 9 月喝过 Yitzhak 井里的水说"水是甜的"；他 1348 年 12 月那一晚开始让 Friedrich 替他去取银扣；他 1349 年 2 月 9 日下午举手投票告诉自己"我只是投程序"；他 2 月 14 日中午站在木堆边看见 Yitzhak 那一眼"我以为你不会"；他 7 月 5 日凌晨握着 Margarete 已经凉的手第一次问自己"为什么犹太人也死了那么多"；他 1374 年遗嘱里把那对银鞋扣放进自己棺材陪葬。\n\n' +
        '在你进入记忆考核或者换视角之前，一个问题：\n\n' +
        '这一遍里，最让你停一下的瞬间是什么？\n\n' +
        '是 2 月 14 日早上他喝完那碗汤手在抖，但他还是出门？\n\n' +
        '是 1340 年 Yitzhak 把那对银鞋扣递给他说"信得过的人"，他 9 年后回想起这 5 个字？\n\n' +
        '是 1348 年 12 月 Margarete 那一晚说"就这一段时间"，他第二天没去 Judengasse，他心里那块东西第一次松动 1 毫米？\n\n' +
        '是 1349 年 2 月 9 日下午他举手时心里那句"我只是投程序"？\n\n' +
        '是 2 月 14 日 Yitzhak 那一眼**不是恨**，是"我以为你不会"？\n\n' +
        '是 2 月 14 日傍晚 Margarete 看了他**整整 5 秒**没说话？\n\n' +
        '是 7 月 5 日凌晨 Margarete 已经凉的手，他第一次问"为什么犹太人也死了那么多"？\n\n' +
        '还是 1374 年遗嘱里他把那对刻 Margarete / Konrad 的银鞋扣放进自己棺材——只有看懂的人能看懂？\n\n' +
        '说一句话告诉我。\n\n' +
        '说完，你可以选：\n\n' +
        '(1) 进 mastery 通关——把 Metzgerzunft / Bürgermeister / Münster / Judengasse / Adonai / Sh\'ma Yisrael / Heilige Maria / Werd 岛 / Schwarber 这些词变成你真的记得的：拼写、定义、应用题。\n\n' +
        '(2) **换视角重玩——同一场 1349 Strasbourg 屠杀，但从另一个视角**：Devorah，一个 14 岁 Strasbourg 犹太女孩。她的父亲是一个银匠。她爬出地窖看见一个城里没有犹太人的世界。她跟你刚演完的 Konrad 是**同一天**，但她**没**站在木堆边，她**藏在**地窖里。你做完 Devorah 这一遍，你会**自己**connect 一些事。这一遍 Konrad 没告诉你的，Devorah 这一遍 也不会**直接**告诉你。但**两个视角 走完**，你会**自己**看见。\n\n' +
        '(3) 也可以问自己一个真问题：你身边——你的同学、邻居、家人——有没有人因为某个**谣言**或者某个**集体情绪**做过一件他们后来**知道是错**的事？他们**公开承认**了吗？他们**没**公开承认，你怎么看他们？\n\n' +
        '这个问题，是 Konrad 这一遍留给你的最后一份礼物。',
      en:
        'You have just walked Konrad from the inside: the morning of February 14, 1349, his hands shaking as he finished Margarete\'s soup; the moment in 1340 when Yitzhak handed him the silver shoe-buckles and said a trustworthy person; September 1348, drinking from Yitzhak\'s well, "the water was sweet"; the December 1348 night when Margarete said "just for now," and the next day he sent Friedrich in his place; the afternoon of February 9, 1349, when he raised his hand and told himself "I am only voting on procedure"; midday on February 14, when he saw Yitzhak\'s one look, I did not think you would; pre-dawn on July 5, 1349, holding Margarete\'s already-cold hand, asking himself for the first time "why are so many Jews also dying?"; and 1374, his will, placing the silver buckles engraved Margarete and Konrad in his own coffin.\n\n' +
        'Before you go into the mastery check, or switch to another lens, one question:\n\n' +
        'In this lens, what made you pause most?\n\n' +
        'Was it the morning soup, his hands shaking, but he went out anyway?\n\n' +
        'Was it 1340, when Yitzhak handed him the silver buckles and said a trustworthy person, and nine years later those four words came back?\n\n' +
        'Was it December 1348, when Margarete said "just for now," and the next day he did not go to the Judengasse, the first one-millimeter shift?\n\n' +
        'Was it the afternoon of February 9, 1349, when he raised his hand and the line in his head was "I am only voting on procedure"?\n\n' +
        'Was it Yitzhak\'s one look on February 14, **not** hate, but I did not think you would?\n\n' +
        'Was it Margarete looking at him for **five full seconds** that evening, saying nothing?\n\n' +
        'Was it pre-dawn July 5, Margarete\'s already-cold hand, the first time he asked "why are so many Jews also dying"?\n\n' +
        'Or was it 1374, the line in his will: silver buckles engraved Margarete and Konrad placed in his own coffin, only the person who could read it could read it?\n\n' +
        'Tell me in one sentence.\n\n' +
        'Then, you can choose:\n\n' +
        '(1) Go into mastery — turn Metzgerzunft, Bürgermeister, Münster, Judengasse, Adonai, Sh\'ma Yisrael, Heilige Maria, Werd Island, Schwarber into words you actually own: spelling, definitions, application questions.\n\n' +
        '(2) **Switch lens and replay — same 1349 Strasbourg killing, but from another angle.** Devorah, a fourteen-year-old Jewish girl in Strasbourg. Her father was a silversmith. She crawls out of a cellar into a city with no Jews left. She is in the **same day** as the Konrad you just played, but she was **not** at the woodpile. She was **hidden** in a cellar. After you finish her lens, you will **connect** some things on your own. Things this lens did not say to you. Devorah\'s lens will not say them **directly** either. But once you have walked **both** lenses, you will **see** them yourself.\n\n' +
        '(3) Or ask yourself one real question: in your own life (a classmate, a neighbor, a family member), has anyone ever done something, under the pressure of a **rumor** or a **collective feeling**, that they later **knew was wrong**? Did they **publicly admit** it? They **did not** — how do you think of them now?\n\n' +
        'That question is the last gift this lens leaves you.',
    },
    deliverGoal:
      '你扮演了 Konrad 9 节——从 1349/02/14 早上喝汤手抖到 1374 遗嘱银鞋扣陪葬。' +
      '现在你可以选：' +
      '(1) 进 mastery 通关——把 Metzgerzunft / Bürgermeister / Münster / Judengasse / Schwarber 等词变成你真的记得的 / ' +
      '(2) 换视角重玩——Devorah（14 岁 Strasbourg 犹太女孩幸存者），同一天但从地窖里看 / ' +
      '(3) 想想你身边有没有人因为谣言或集体情绪做过一件后来知道是错的事，他们公开承认了吗——没有的话你怎么看他们',
    engagementHook:
      '走完 Konrad 这一遍——从 1349/02/14 早上手抖出门到 1374 把银鞋扣放进自己棺材。先回答一个：他余生 25 年没公开承认错，你觉得是未尽公开承认责任，还是 medieval 时代约束之内已尽力？再想一步：这一遍最让你停一下的是哪一刻，为什么是它？说一句话',
    expectedLength: '160-200 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// LENS 3: Devorah bat Yitzhak（虚构 14 岁犹太女孩 / 1349 Strasbourg pogrom 幸存者 / receiving end 视角）
// ═══════════════════════════════════════════════════
//
// 设计目标：跟 Konrad lens 形成对位 echo——
//   - Yitzhak ben Abraham（Konrad 烧的那个银匠）= Devorah 的父亲
//   - Devorah 14 岁——跟 Willow 同龄段——直接代入设计
//   - 1349/02/14 屠杀那天——Devorah 在 Brigitta 家地窖躲过——14 岁——念 *Tehillim* 第 23 篇 30 多遍
//   - 父亲 Yitzhak 死在 2 月底-3 月初路上——14 岁帮母亲埋父亲（石头堆，没法挖深坑）
//   - 1408 年——74 岁——孙女 Rivka 13 岁问她："Bubbe，为什么我们家在 Krakow 不在 Strasbourg？"
//   - lens emotional payoff：Devorah 1408 年讲完故事说的最后一句话
//
// fourth-wall break 留在 N12——让用户做完两个视角 自己 connect Yitzhak = Devorah 父亲
// 不要在 lens 内部直白告诉用户 "Yitzhak 是 Konrad 烧的那个"——让 connection 是用户的发现
//
// 长度约束：每节点 200-280 字（CN）/ 对应 EN 版 Lexile 800-1000
// 希伯来语 / 意第绪语 / 德语保留 italic：*Tehillim* / *Bubbe* / *Aba* / *Ima* / *Adonai* / *Judengasse*
//
// ─────────────────────────────────────────────────────────────────

var devorahStrasbourgStoryboard = [
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Devorah bat Yitzhak',
    narrativeRef: '§3 Rachel 章节（背景）+ §4 1349/02/14 Strasbourg 屠杀（Devorah 侧的对位 echo）',
    content: {
      cn:
        '1348 年 11 月某日早上，Strasbourg Judengasse（犹太街，城东南角），我家厨房。\n\n' +
        '我 14 岁。我叫 Devorah。\n\n' +
        'Ima（妈妈，希伯来语）正在教我念 Tehillim 第 23 篇——"耶和华是我的牧者，我必不至缺乏"。这是我从 5 岁就开始念的，但今天她念得特别慢，一句一句让我重复。我没问她为什么。\n\n' +
        '厨房窗外，8 岁的 Klara，基督徒，她妈妈是 Schmidt 太太。上个月她还会跟我隔着窗户笑，上礼拜还会喊"Devorah!"\n\n' +
        '今天早上 Klara 走过我家窗户。她低头，没看我。\n\n' +
        '我问 Ima："Ima，Klara 怎么了？"\n\n' +
        'Ima 没回答。她把 Tehillim 翻到下一页。\n\n' +
        '我 14 岁那一刻，心里有一种**还没说出名字**的恐惧——像无花果还没熟，但已经在树上变沉。\n\n' +
        '我是 Devorah bat Yitzhak。接下来 12 节，你跟我走 4 个月：从这盏 11 月的厨房光线，到 1349 年 2 月 14 日 Brigitta 家地窖，再到 59 年后 1408 年我 74 岁——我对孙女说的最后那一句话。',
      en:
        'A morning sometime in November 1348. Strasbourg Judengasse (the Jewish quarter, on the southeast corner of the city). My family\'s kitchen.\n\n' +
        'I am fourteen. My name is Devorah.\n\n' +
        'Ima (mother, in Hebrew) is teaching me Tehillim Psalm 23: "Adonai is my shepherd, I shall not want." I have been reciting this since I was five. But today she recites it very slowly. She makes me repeat after her, line by line. I do not ask her why.\n\n' +
        'Outside the kitchen window: eight-year-old Klara, a Christian girl. Her mother is Frau Schmidt. Last month Klara would still smile at me through the window. Last week she would still call out "Devorah!"\n\n' +
        'This morning Klara walked past my window. She looked at the ground. She did not look at me.\n\n' +
        'I asked Ima, "Ima, what is wrong with Klara?"\n\n' +
        'Ima did not answer. She turned the page in the Tehillim.\n\n' +
        'In that moment, at fourteen, something inside me had a fear that **did not yet have a name**. Like a fig still green on the tree, but already getting heavy.\n\n' +
        'I am Devorah bat Yitzhak. Over the next twelve sections, you walk with me through four months: from the light in this kitchen in November, to a cellar in Brigitta\'s house on February 14, 1349, and then to fifty-nine years later, in 1408, when I am seventy-four, and the last sentence I say to my granddaughter.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我 14 岁，我念 Tehillim 第 23 篇。8 岁邻居小女孩 Klara 走过我家窗户没看我。你猜接下来 4 个月会发生什么',
    expectedLength: '280-320 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'Devorah bat Yitzhak',
    narrativeRef: '§3 Rachel 章节（Strasbourg 犹太社区背景）+ §3 Agnolo bio（同代欧洲城邦工匠社会对位）',
    content: {
      cn:
        '在我告诉你 1349 年 2 月 14 日发生什么之前，我先告诉你我 14 岁的世界。\n\n' +
        '我们 Judengasse，城东南角，80 个犹太家庭，一条窄巷，两边石头房。大家互相认识 200 年。\n\n' +
        'Aba（爸爸，希伯来语）叫 **Yitzhak ben Abraham**，39 岁。他是 Strasbourg 犹太社区的银匠。他的铺子在 Judengasse 第三家，门口挂一对银扣样品（白银做的，雕了希伯来字"chai"，意思是"活着"）。\n\n' +
        'Ima 叫 Miryam，36 岁，她不识字（女孩家里学的是织布加唱 Tehillim，不是读书）。但她会唱 50 首 Tehillim，会缝衣服，会主持 Shabbos（安息日）餐桌。\n\n' +
        '我弟弟 Asher 11 岁，跟 Aba 学银匠手艺。他敲扁银片的时候很认真，认真起来不眨眼。\n\n' +
        '我妹妹 Sarah 4 岁，她最爱跟我编辫子。她编不进去就哭，我每天给她编两次。\n\n' +
        '我自己 14 岁，识希伯来字，会一点德语。Ima 教我针线和 Tehillim；Aba 教我怎么擦银器（用一种灰色的粉）。他说："Devorah，你 14 岁了，明年开始我教你算账。"\n\n' +
        '隔壁住一个基督徒邻居叫 Brigitta，30 岁，织布女工。她是 Ima 的"商业邻居"——Ima 给她做银扣，Brigitta 给我们换布——10 年了。\n\n' +
        '这就是我 14 岁的世界。\n\n' +
        '我现在告诉你这些，是因为接下来 4 个月，这一切要被毁掉。',
      en:
        'Before I tell you what happened on February 14, 1349, I will first tell you what my world looked like at fourteen.\n\n' +
        'Our Judengasse — on the southeast corner of the city — eighty Jewish families — one narrow alley — stone houses on both sides — everyone has known everyone for two hundred years.\n\n' +
        'Aba (father, in Hebrew) is named **Yitzhak ben Abraham**. He is thirty-nine. He is the silversmith of the Strasbourg Jewish community. His shop is the third building in the Judengasse. A pair of silver buckles hangs at the door as samples — engraved with the Hebrew letters chai, meaning "living."\n\n' +
        'Ima is named Miryam. She is thirty-six. She cannot read (girls in our families learn weaving and Tehillim, not books). But she knows fifty psalms by heart, can sew, and runs the Shabbos (Sabbath) table every Friday.\n\n' +
        'My little brother Asher is eleven. He is learning silversmithing from Aba. When he hammers silver flat, he is serious. When he is serious he does not blink.\n\n' +
        'My little sister Sarah is four. She likes me to braid her hair. When she cannot braid it herself, she cries. I braid it twice a day.\n\n' +
        'Myself — fourteen — I read Hebrew, a little German. Ima teaches me sewing and Tehillim. Aba teaches me how to polish silver with a grey powder. He says: "Devorah — you are fourteen now — next year I will teach you accounts."\n\n' +
        'Next door lives a Christian neighbor named Brigitta. She is thirty. A weaver. She is Ima\'s "business neighbor" — Ima makes her silver buckles, and she trades us cloth. Ten years now.\n\n' +
        'That was my world at fourteen.\n\n' +
        'I am telling you this now because over the next four months — all of it would be destroyed.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我家，Judengasse 第三家，Aba Yitzhak 银匠铺，Ima + Asher + Sarah，隔壁 Brigitta 织布。这是会被毁掉的世界。你想看下一节吗',
    expectedLength: '320-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'Devorah bat Yitzhak',
    narrativeRef: '§3 Rachel 章节（Rhineland 谣言扩散）+ §4 1348 秋-冬 plague 谣言',
    content: {
      cn:
        '1348 年秋。Italy 那边来的商人在 Strasbourg 市集说意大利在死人。我们这边还安全。\n\n' +
        '但是。\n\n' +
        '11 月开始，Klara 不打招呼了。\n\n' +
        '12 月开始，Klara 妈妈 Schmidt 太太找 Ima。她小声说："Miryam，我们这一段最好不要走得太近，你懂的——"\n\n' +
        'Ima 那一刻没说话，她点头，然后回家。她没告诉我她和 Schmidt 太太说了什么，但我从厨房门缝里看到她眼睛红了。\n\n' +
        '我 14 岁，**第一次**懂"邻居"是会变的。\n\n' +
        '12 月某个晚上，我躺在床上假装睡着。Aba 跟 Ima 在烛光下低声谈：\n\n' +
        'Aba：他们……开始相信谣言了。\n' +
        'Ima：什么谣言？\n' +
        'Aba：井里下毒。\n' +
        'Ima（停了 5 秒）：我们的井？\n' +
        'Aba：所有犹太人的井。整个 Rhineland。从 Mainz 传来的。\n' +
        'Ima：Yitzhak，他们认识你 8 年——\n' +
        'Aba：Miryam，这种事——10 年的邻居——只要 plague 真来了，会变。\n\n' +
        '我躺在床上，14 岁，心跳得很大声。我想吐，我不知道吐什么。\n\n' +
        '只是有一种感觉：**这个世界正在变成另一个我不认识的世界**。我跟它的关系从今天晚上起，不一样了。',
      en:
        'Autumn 1348. Merchants from Italy in the Strasbourg market said people were dying in Italy. Here we were still safe.\n\n' +
        'But —\n\n' +
        'In November, Klara stopped greeting me.\n\n' +
        'In December, Klara\'s mother, Frau Schmidt, came to Ima. She said in a low voice: "Miryam — for now it is better if we do not walk too close — you understand —"\n\n' +
        'Ima did not say anything in that moment. She nodded. Then she went home. She did not tell me what Frau Schmidt had said. But through the gap in the kitchen door, I saw her eyes were red.\n\n' +
        'At fourteen, I understood for the **first time**: a "neighbor" can change.\n\n' +
        'One night in December, I lay in bed pretending to sleep. Aba and Ima spoke quietly by candlelight.\n\n' +
        'Aba: They are starting to believe the rumors.\n' +
        'Ima: What rumors?\n' +
        'Aba: Poison in the wells.\n' +
        'Ima (after five seconds of silence): Our wells?\n' +
        'Aba: Every Jewish well. Across all the Rhineland. The rumor came from Mainz.\n' +
        'Ima: Yitzhak — they have known you eight years —\n' +
        'Aba: Miryam — this kind of thing — eight years of being neighbors — once the plague actually arrives — that changes.\n\n' +
        'I lay in bed. Fourteen. My heart pounding. I wanted to throw up. I did not know what I would throw up.\n\n' +
        'I only had one feeling: **the world was turning into a different world I did not recognize** — and from that night on, my relationship to it was no longer the same.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我躺在床上听 Aba 跟 Ima 烛光下谈"井下毒"谣言，14 岁的我**第一次**懂"邻居"是会变的。下一节，Schwarber 罢免',
    expectedLength: '320-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Devorah bat Yitzhak',
    narrativeRef: '§3 Rachel 章节 + §4 1349/02/09 Schwarber 罢免 documented',
    content: {
      cn:
        '1349 年 2 月 9 日傍晚，Aba 从市集回来。\n\n' +
        '他**没脱外套**就坐下，脸色不对。他喝了一口 Ima 给他的水，放下杯子，对 Ima 说："Schwarber 被罢免了。"\n\n' +
        'Ima 站住。\n\n' +
        '我 14 岁，在屋角整理 Aba 铺子的银针。我那一刻，是这辈子第一次听到"Schwarber"这个名字。Aba 后来跟我解释：他是 Bürgermeister（市长），50 岁，他在市议会反对"屠犹"。他说"井下毒"是谣言，是 Italy plague 已经在路上。\n\n' +
        '但他被罢免了——10:1。一个老铁匠的代表 Bertold 当面骂他"拿了犹太人多少钱"。Aba 知道这件事是因为 Strasbourg 城里基督徒商人朋友 Hans Becker 那天下午回来路上告诉他的。\n\n' +
        'Aba 那天晚上第一次直接对我说话：\n\n' +
        '"Devorah，你 14 岁了，你要听我说一些事——"\n\n' +
        '我 14 岁。Aba 一辈子从来不直接对我说"你要听我说一些事"，他一直只对 Ima 说。我那一刻**心里炸了一下**。\n\n' +
        'Aba 说：\n\n' +
        '"我们家 Yitzhak ben Abraham 这一支在 Strasbourg 已经 200 年。你的曾祖父 Avram ben Yosef 1149 年从 Worms 搬来，他和 Strasbourg 大主教是朋友，我们家给 Strasbourg 大教堂打过 50 件银器。这是我们 200 年的家。但今年不一样。你要懂——一个 200 年的家可能在 5 天内变成不是家。这种事在历史上发生过。你是 Yitzhak ben Abraham 的女儿——你必须知道，这种事可能发生，也可能在你身上发生。"\n\n' +
        '我 14 岁，我没说话，我只是把那些银针一根一根放进盒子。',
      en:
        'February 9, 1349. Evening. Aba came back from the market.\n\n' +
        'He **did not take off his coat** before he sat down. His face was wrong. He drank one sip of the water Ima gave him. He set the cup down. He said to Ima: "Schwarber has been removed."\n\n' +
        'Ima froze where she stood.\n\n' +
        'At fourteen, I was in the corner of the room organizing the silver needles from Aba\'s shop. This was the **first time** I had heard the name "Schwarber." Aba explained to me later: he was the Bürgermeister — the mayor — fifty years old — he had opposed massacring the Jews in the city council. He had said the "well-poisoning" rumor was a lie — that the plague from Italy was already on its way.\n\n' +
        'But he had been removed. Ten to one. An old smiths\' guild representative named Bertold had cursed him in the chamber: "How much have the Jews paid you?" Aba knew about this because his Christian merchant friend Hans Becker had told him on the way home that afternoon.\n\n' +
        'That night, Aba — for the first time — spoke directly to me.\n\n' +
        '"Devorah — you are fourteen — you need to hear something —"\n\n' +
        'At fourteen, I had never heard Aba say "you need to hear something" directly to me before. He had always said it only to Ima. In that moment **something inside me cracked open**.\n\n' +
        'Aba said:\n\n' +
        '"Our family — Yitzhak ben Abraham\'s line — has been in Strasbourg for two hundred years. Your great-great-grandfather Avram ben Yosef came from Worms in 1149. He was a friend of the Bishop of Strasbourg. Our family has made fifty pieces of silverwork for the Strasbourg cathedral. This is our home, two hundred years. But this year — is different. You must understand — a home of two hundred years can become not-a-home in five days. This kind of thing has happened in history before. You are Yitzhak ben Abraham\'s daughter. You must know — this can happen. It can happen to us."\n\n' +
        'At fourteen, I did not say anything. I only kept putting silver needles, one by one, into the box.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Aba 第一次直接跟我说话："一个 200 年的家可能在 5 天内变成不是家"。14 岁的我心里炸了一下。下一节是 2 月 13 日晚 Brigitta 来找我们',
    expectedLength: '380-420 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'Devorah bat Yitzhak',
    narrativeRef: '§3 Rachel 章节 + §4 1349/02/13 屠杀前夜（虚构 Brigitta 救援场景）',
    content: {
      cn:
        '2 月 13 日傍晚，Brigitta 来了。\n\n' +
        '我们家，Judengasse 第三家，夜里。\n\n' +
        '她进门，Ima 还没说话，Brigitta 已经在哭。她抓住 Ima 的手，说："Miryam，明天市议会在 Rathaus 决定，他们要把所有犹太人聚到 Werd 岛，架木堆，明天早上——"\n\n' +
        'Ima 站住。Aba 从铺子那边走过来，他听到了，没说话。\n\n' +
        'Brigitta 说："Miryam，你来我家地窖。5 个人，藏到他们走完——"\n\n' +
        'Aba 说："Hans 知道吗？"Hans 是 Brigitta 的丈夫，基督徒，他不知情。\n\n' +
        'Brigitta 说："Hans 我会想办法。你来，快——"\n\n' +
        'Ima 那一刻——10 年的"商业邻居"——她抱住 Brigitta。\n\n' +
        '我 14 岁站在旁边，那一刻心里有一种我以前没有过的感觉：\n\n' +
        '基督徒不是 binary 的。\n\n' +
        '有一些会站在木堆边，有一些会冒生命危险藏我们。\n' +
        '大多数会站着不动，少数会过来。\n' +
        '这件事——14 岁的我，在屋里——心里第一次知道：人不是只分"自己人"和"敌人"两种。\n\n' +
        'Brigitta 走之前，她转身看我。她说："Devorah，你 14 岁了。明天你跟你妹妹，你帮她不要哭，好不好？"\n\n' +
        '我点头。\n\n' +
        '她走了，Aba 关上门。他对我们说："收拾，只能带最小的：Tehillim 一本，衣服两件，一个钱袋——"\n\n' +
        '我 14 岁，看了一眼我房间。那一刻我知道：我不会再回这个房间了。',
      en:
        'February 13. Evening. Brigitta came.\n\n' +
        'Our house — third building of the Judengasse — night.\n\n' +
        'She came in. Before Ima could speak, Brigitta was already crying. She grabbed Ima\'s hand. She said: "Miryam — tomorrow — the city council in the Rathaus will decide — they will gather all Jews on Werd Island — they will build the pyre — tomorrow morning —"\n\n' +
        'Ima froze. Aba came over from the shop. He had heard. He did not speak.\n\n' +
        'Brigitta said: "Miryam — come to my cellar — five of you — hide until they are done —"\n\n' +
        'Aba said: "Does Hans know?" — Hans was Brigitta\'s husband. Christian. He did not know.\n\n' +
        'Brigitta said: "I will handle Hans. Come — quickly —"\n\n' +
        'In that moment, Ima — ten years of "business neighbor" — held Brigitta tight.\n\n' +
        'At fourteen, standing nearby, I understood something for the **first time**:\n\n' +
        'Christians — are not binary.\n\n' +
        'Some will stand by the pyre. Some will risk their lives to hide us.\n' +
        'Most will stand still. A few will come.\n' +
        'At fourteen, in that room, I had for the first time a worldview that was not simple.\n\n' +
        'Before Brigitta left, she turned and looked at me. She said: "Devorah — you are fourteen — tomorrow you and your little sister — you help her not to cry — yes?"\n\n' +
        'I nodded.\n\n' +
        'She left. Aba closed the door. He said to us: "Pack. Only the smallest things. One Tehillim. Two sets of clothes. One money pouch —"\n\n' +
        'At fourteen, I looked at my own room. In that moment I knew — I would not come back to this room.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Brigitta 来——10 年的基督徒邻居冒生命危险藏我们——14 岁的我第一次懂"基督徒不是 binary 的"。下一节是 2 月 14 日地窖里那一整天',
    expectedLength: '320-360 字',
    expectsRealAnswer: false,
  },
  {
    id: 6,
    phase: 'story',
    cosplay: 'Devorah bat Yitzhak',
    narrativeRef: '§3 Rachel 章节（屠杀场景）+ §4 1349/02/14 屠杀 + 1099 Aisha lens N6 echo（地窖体验）',
    content: {
      cn:
        '2 月 14 日，Brigitta 家地窖。\n\n' +
        '我们 5 个人：Aba、Ima、我、Asher、Sarah。\n\n' +
        '地窖很小，有一袋面粉、一袋盐、一桶酒。空气是冷的，但更冷的是窗框里漏进来的光——一整天，慢慢从灰变到黄，再到红。\n\n' +
        '上午大概 9 点，我们听见：\n\n' +
        '脚步声，好多人的脚步声，从 Judengasse 那边过来，往城东。\n\n' +
        '一个孩子的哭声，很远，可能是邻居 Esther 家的小儿子。\n\n' +
        '然后是马蹄。\n\n' +
        '中午 12 点：\n\n' +
        '木头堆响。\n\n' +
        '火。\n\n' +
        '4 岁的 Sarah 想哭，Ima 用手堵她的嘴。Ima 的手在抖。\n\n' +
        '我 14 岁，抱住 Sarah。Sarah 咬我手，她的眼泪流到我手上，是温的。\n\n' +
        '我开始念。\n\n' +
        'Adonai roi lo echsar——耶和华是我的牧者，我必不至缺乏。\n\n' +
        '一遍。\n\n' +
        'Adonai roi lo echsar——耶和华是我的牧者，我必不至缺乏。\n\n' +
        '两遍。\n\n' +
        '我念到第 30 多遍，自己分不清这句话是不是真的。\n\n' +
        '空气里一种味道飘进来，一种 14 岁的我这辈子永远忘不了的味道。\n\n' +
        '地窖里，Aba 闭着眼。他没念 Tehillim，只是闭眼。他的嘴在动，但没有声音。\n\n' +
        '傍晚，光从红变成深红，再到黑。\n\n' +
        '外面安静下来。\n\n' +
        'Ima 看了 Aba 一眼。Aba 摇头——意思是：还不能上去。\n\n' +
        '我们在地窖待到半夜。',
      en:
        'February 14. Brigitta\'s cellar.\n\n' +
        'Five of us: Aba, Ima, me, Asher, Sarah.\n\n' +
        'The cellar was small. A sack of flour. A sack of salt. A barrel of wine. The air was cold. But colder still was the light leaking in through the window-frame, all day, slowly turning from grey to yellow to red.\n\n' +
        'In the morning, around nine —\n\n' +
        'Footsteps. Many footsteps. Coming from the Judengasse, moving east through the city.\n\n' +
        'A child crying somewhere far. Maybe Esther\'s youngest son next door.\n\n' +
        'Then horses.\n\n' +
        'At midday, twelve o\'clock —\n\n' +
        'Wood crackling.\n\n' +
        'Fire.\n\n' +
        'Four-year-old Sarah wanted to cry. Ima covered her mouth with her hand. Ima\'s hand was shaking.\n\n' +
        'At fourteen, I held Sarah. Sarah bit my hand. Her tears ran onto my fingers. They were warm.\n\n' +
        'I began to recite.\n\n' +
        'Adonai roi lo echsar. Adonai is my shepherd, I shall not want.\n\n' +
        'Once.\n\n' +
        'Adonai roi lo echsar. Adonai is my shepherd, I shall not want.\n\n' +
        'Twice.\n\n' +
        'By the thirtieth time, I could no longer tell whether the line was true.\n\n' +
        'A smell drifted into the cellar, a smell I would carry my entire life.\n\n' +
        'In the cellar, Aba kept his eyes closed. He was not reciting the Tehillim. He was only closing his eyes. His lips were moving, but no sound came out.\n\n' +
        'In the evening, the light turned from red to dark red to black.\n\n' +
        'Outside, the city went quiet.\n\n' +
        'Ima looked at Aba. Aba shook his head. Meaning: not yet. We could not go up yet.\n\n' +
        'We stayed in the cellar until midnight.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '地窖里整整一天，Tehillim 第 23 篇我念到第 30 多遍分不清是真是假，空气里那个味道我一辈子忘不了。下一节，半夜 Hans 回家',
    expectedLength: '380-440 字',
    expectsRealAnswer: false,
  },
  {
    id: 7,
    phase: 'story',
    cosplay: 'Devorah bat Yitzhak',
    narrativeRef: '§3 Rachel 章节 + §4 1349/02/14 半夜（虚构 Hans 威胁场景）',
    content: {
      cn:
        '半夜，大约 11 点，地窖上面脚步声。\n\n' +
        '不是 Brigitta 的脚步。\n\n' +
        '是 Hans。\n\n' +
        '我们 5 个人在地窖里屏住呼吸。\n\n' +
        'Brigitta 在上面跟 Hans 说话，声音低。她说："Hans，我求你——10 年了，Miryam 给我们家做的银扣——"\n\n' +
        'Hans 的声音不低。他说："Brigitta，你藏犹太人，明天有人发现，他们会烧我们——"\n\n' +
        '我 14 岁，那一刻明白了："冒生命危险"不是一句话，是这个具体的男人这一刻在算——他能不能用我们换他的命。\n\n' +
        'Aba 推开我，从地窖梯子上去。\n\n' +
        '我看着 Aba 39 岁，一辈子做银匠。我从来没看过他跪。\n\n' +
        '他上去了。\n\n' +
        '3 分钟后他下来，手里有一个东西。他打开：\n\n' +
        '一对银耳坠。\n\n' +
        '这是 Ima 的妈妈 25 年前给 Ima 做的。Ima 一辈子就戴这一对，一辈子说："这是我从我妈那里带过来 Strasbourg 的唯一一件——"\n\n' +
        'Aba 把银耳坠递给 Ima。\n\n' +
        'Ima 看着银耳坠。她没哭。她**摘下**自己耳朵上的那一对，递给 Aba。\n\n' +
        'Aba 上去。\n\n' +
        '5 分钟。\n\n' +
        '下来。他对我们说："Hans 给我们到天亮，4 点钟出门。"\n\n' +
        '我 14 岁，那一刻**第一次**懂：\n\n' +
        'Aba 一辈子从来不跪。\n\n' +
        '今天晚上，他跪了。\n\n' +
        '他用一对银耳坠，换我们 5 个人到天亮。',
      en:
        'Around eleven at night — footsteps above the cellar.\n\n' +
        'Not Brigitta\'s.\n\n' +
        'Hans.\n\n' +
        'The five of us held our breath.\n\n' +
        'Brigitta was speaking to Hans above. Her voice was low. She said: "Hans — please — ten years — the silver buckles Miryam made for our house —"\n\n' +
        'Hans\'s voice was not low. He said: "Brigitta — you are hiding Jews. If they find out tomorrow — they will burn us —"\n\n' +
        'At fourteen, in that moment, I understood for the **first time**: "risking your life" is not an abstract phrase. It is this specific man, in this specific moment, calculating — whether he can trade us for his own life.\n\n' +
        'Aba pushed me aside. He climbed up the cellar ladder.\n\n' +
        'I watched my father — thirty-nine — a silversmith his whole life — I had never seen him kneel.\n\n' +
        'He went up.\n\n' +
        'Three minutes later, he came back down. He had something in his hand. He opened it.\n\n' +
        'A pair of silver earrings.\n\n' +
        'Ima\'s mother had made them for Ima twenty-five years earlier. Ima wore only those, her whole life. Ima had said her whole life: "These are the only thing I brought from my mother to Strasbourg —"\n\n' +
        'Aba held the earrings out to Ima.\n\n' +
        'Ima looked at them. She did not cry. She **took off** the pair on her ears. She handed them to Aba.\n\n' +
        'Aba went up.\n\n' +
        'Five minutes.\n\n' +
        'He came down. He said: "Hans gives us until dawn. We leave at four."\n\n' +
        'At fourteen, I understood for the **first time** —\n\n' +
        'My father — never knelt his whole life —\n\n' +
        'Tonight — he knelt.\n\n' +
        'He traded a pair of silver earrings for the five of us to live until dawn.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '半夜 Hans 回家。Aba 一辈子没跪过，今天晚上他跪了，用 Ima 妈妈 25 年前的银耳坠换我们到天亮。下一节是 4 点钟出 Strasbourg 东门',
    expectedLength: '360-400 字',
    expectsRealAnswer: false,
  },
  {
    id: 8,
    phase: 'story',
    cosplay: 'Devorah bat Yitzhak',
    narrativeRef: '§3 Rachel 章节 + §4 1349 春 难民东逃 Bohemia/Krakow 历史模式',
    content: {
      cn:
        '2 月 15 日凌晨 4 点，Strasbourg 东门。\n\n' +
        '城外黑，雪刚停，空气干。\n\n' +
        '我们 5 个人：Aba 抱 Sarah，Ima 牵 Asher，我自己走。\n\n' +
        '往东。\n\n' +
        'Aba 跟 Ima 说："Krakow。波兰国王 Casimir III 收容犹太人。一路东走，大概 6 个礼拜。"\n\n' +
        '我 14 岁，那一刻知道——"6 个礼拜"这种数字不是计划，是一种"我们必须相信能到的距离"。\n\n' +
        '一个礼拜，我们在 Black Forest 边。\n\n' +
        '两个礼拜，我们到 Bavaria。\n\n' +
        '三个礼拜。\n\n' +
        '2 月底，某个森林边，晚上。\n\n' +
        'Aba 倒下了。\n\n' +
        '他 39 岁，没病，只是走不动了。他对 Ima 说："Miryam，你带孩子继续走——"\n\n' +
        'Ima 摇头。\n\n' +
        'Aba 说："Krakow，犹太社区，他们会收你们。你只要到，就行——"\n\n' +
        '他闭眼。\n\n' +
        '一夜。\n\n' +
        '天亮，他凉了。\n\n' +
        '我 14 岁，帮 Ima 埋 Aba。\n\n' +
        '森林边，地是冻的，我们挖不动。\n\n' +
        'Ima 说："用石头。"\n\n' +
        '我和 Ima 用石头堆了一个小坟，大概 30 块石头。14 岁的我那一刻**意识到**：\n\n' +
        '我以后想 Aba，只能想到这个石头堆。\n\n' +
        '没有名字，没有刻字，没有 Kaddish（犹太人为死者念的祷文，要 10 个犹太成年男子才能念，森林边没有 10 个人）。\n\n' +
        '只有 30 块石头，和我 14 岁那一刻的眼泪。\n\n' +
        '我们继续往东。',
      en:
        'February 15. Four in the morning. The east gate of Strasbourg.\n\n' +
        'Outside the city — dark — the snow had just stopped — the air was dry.\n\n' +
        'Five of us. Aba carried Sarah. Ima held Asher. I walked on my own.\n\n' +
        'East.\n\n' +
        'Aba said to Ima: "Krakow. King Casimir III of Poland takes in Jews. About six weeks of walking east."\n\n' +
        'At fourteen, I knew, in that moment: "six weeks" — a number like that — was not a plan. It was the distance we had to believe we could reach.\n\n' +
        'One week — we were at the edge of the Black Forest.\n\n' +
        'Two weeks — we reached Bavaria.\n\n' +
        'Three weeks —\n\n' +
        'Late February — at the edge of a forest — night —\n\n' +
        'Aba — collapsed.\n\n' +
        'He was thirty-nine. He was not ill. He simply could not walk anymore. He said to Ima: "Miryam — take the children — keep going —"\n\n' +
        'Ima shook her head.\n\n' +
        'Aba said: "Krakow — the Jewish community — they will take you in — you only need to — get there —"\n\n' +
        'He closed his eyes.\n\n' +
        'One night.\n\n' +
        'When the morning came — he was cold.\n\n' +
        'At fourteen, I helped Ima bury Aba.\n\n' +
        'At the edge of the forest. The ground was frozen. We could not dig.\n\n' +
        'Ima said: "Use stones."\n\n' +
        'Ima and I used stones. We built a small grave — about thirty stones. At fourteen, in that moment, I **understood**:\n\n' +
        'For the rest of my life, when I think of Aba —\n\n' +
        '— I will only be able to picture this pile of stones.\n\n' +
        'No name. No inscription. No Kaddish (the Jewish prayer for the dead, which requires ten adult Jewish men — and there were no ten of us at the edge of that forest).\n\n' +
        'Only thirty stones. And my fourteen-year-old tears in that moment.\n\n' +
        'We kept walking east.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Aba 死在森林边，14 岁的我帮 Ima 用 30 块石头堆了他的坟，没名字没 Kaddish。下一节，narrator 接管：59 年后我跟孙女说的最后一句话',
    expectedLength: '400-440 字',
    expectsRealAnswer: false,
  },
  {
    id: 9,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§3 Rachel 章节 + §6 长尾 + §11 Q5 plague 幸存者 + 反犹机制 600 年回声',
    content: {
      cn:
        '现在 narrator 接管，告诉你 Devorah 14 岁之后的事。\n\n' +
        '1349 年春。Devorah 14 岁，Miryam 36 岁，Asher 11 岁，Sarah 4 岁。4 个人走了 6 个礼拜，到了 Krakow（克拉科夫，波兰南部）。\n\n' +
        '波兰国王 Casimir III "the Great" 1334 年**重申并扩展**到全波兰的 Statute of Kalisz（卡利什法令）保护犹太人。这条法令最早是 1264 年大波兰公爵 Bolesław the Pious 颁布的，是中世纪欧洲最早的犹太人保护法之一。Krakow 犹太社区收容了他们：Miryam 做了 Krakow 一个犹太家庭的女佣，Devorah 14-18 岁帮母亲、学希伯来语、学一点波兰语。\n\n' +
        '1352 年 18 岁，Devorah 嫁给 Krakow 一个犹太商人 Avram ben Shimon。他 30 岁，妻子也死于 plague 第二波。他需要新妻子，Devorah 需要家。\n\n' +
        'Devorah 18-74 岁，56 年，4 个孩子，8 个孙子孙女。\n\n' +
        '1408 年，Devorah 74 岁。\n\n' +
        '孙女 Rivka 13 岁，夏天某个下午坐在 Devorah 床边。她问："Bubbe，为什么我们家在 Krakow 不在 Strasbourg？"\n\n' +
        'Devorah 那一刻，59 年了，\n\n' +
        '**第一次**给孙女讲那个 1349 年 2 月 14 日：Brigitta、地窖、Tehillim 第 23 篇 30 多遍、半夜 Hans、Aba 跪、银耳坠、4 点出门、森林、Aba 在森林边倒下、30 块石头。\n\n' +
        '讲完，Devorah 看着 13 岁的 Rivka。\n\n' +
        '她说了一句话。\n\n' +
        '这一句话，你猜？\n\n' +
        'Devorah 1408 年那一刻给 13 岁孙女讲完故事，她说的最后一句话是这个视角 的 emotional payoff。下一节我会让你思考。\n\n' +
        '现在——narrator 想让你**先看一眼**——这个 1349 年 2 月 14 日 Strasbourg 是历史里的一个**模板**。\n\n' +
        '后来发生的：\n' +
        '- 1391 年 Sevilla 屠犹（西班牙，4000 死）\n' +
        '- 1648 年 Khmelnytsky 屠犹（乌克兰，10 万死）\n' +
        '- 1881-1884 沙俄 pogrom（同一模式）\n' +
        '- 1903 Kishinev pogrom（同一模式）\n' +
        '- 1938 Kristallnacht（同一模式）\n' +
        '- 1942 Wannsee Conference（最大的复制）\n\n' +
        '这个机制不是个别坏人，是**结构性的**：灾难时找替罪羊。这一机制 600 年间反复用，Holocaust 是终极版本。\n\n' +
        '这个机制今天还在，只是替罪羊换人，逻辑不变。\n\n' +
        'Devorah 1408 年讲完故事，她**知道这一点**。她讲给 13 岁孙女不是为了让她"知道犹太人那时被屠杀"，是为了让她**识别这个机制**。\n\n' +
        '下一节，你思考她说的最后一句是什么。',
      en:
        'Now the narrator takes over to tell you what happened to Devorah after she was fourteen.\n\n' +
        'Spring 1349. Devorah at fourteen, Miryam at thirty-six, Asher at eleven, Sarah at four — four of them — walked for six weeks — reached Krakow (in southern Poland).\n\n' +
        'Polish king Casimir III "the Great" had **reaffirmed and extended** the Statute of Kalisz across all of Poland in 1334 — a charter protecting Jews. The original Statute of Kalisz had been issued in 1264 by Bolesław the Pious, Duke of Greater Poland — one of the earliest legal protections of Jews in medieval Europe. The Krakow Jewish community took them in. Miryam became a servant in a Krakow Jewish household. From fourteen to eighteen, Devorah helped her mother, learned more Hebrew, and learned a little Polish.\n\n' +
        '1352. At eighteen, Devorah married a Krakow Jewish merchant named Avram ben Shimon — thirty years old. His wife had died in the second wave of plague. He needed a new wife. Devorah needed a home.\n\n' +
        'From eighteen to seventy-four — fifty-six years — four children — eight grandchildren.\n\n' +
        '1408. Devorah was seventy-four.\n\n' +
        'Her granddaughter Rivka was thirteen. One summer afternoon, Rivka sat by Devorah\'s bed and asked: "Bubbe — why does our family live in Krakow, not Strasbourg?"\n\n' +
        'In that moment — fifty-nine years later — for the **first time** — Devorah told her granddaughter the story of February 14, 1349.\n\n' +
        'Brigitta. The cellar. Psalm 23, thirty-some times. Hans at night. Aba kneeling. The silver earrings. Leaving at four. The forest. Aba collapsing at the edge of a forest. The thirty stones.\n\n' +
        'When she finished, Devorah looked at thirteen-year-old Rivka.\n\n' +
        'And she said one sentence.\n\n' +
        'That one sentence — you will think about it.\n\n' +
        'The last line Devorah spoke to her thirteen-year-old granddaughter in 1408, after telling the whole story — that line is the emotional payoff of this lens. The next section will let you think about it.\n\n' +
        'But first — the narrator wants you to see one thing: February 14, 1349, in Strasbourg was a **template** in history.\n\n' +
        'What came after:\n' +
        '- 1391: the Seville pogrom (Spain — 4,000 dead)\n' +
        '- 1648: the Khmelnytsky massacres (Ukraine — about 100,000 Jews killed)\n' +
        '- 1881–1884: the Russian Empire pogroms (same pattern)\n' +
        '- 1903: Kishinev pogrom (same pattern)\n' +
        '- 1938: Kristallnacht (same pattern)\n' +
        '- 1942: the Wannsee Conference (the largest replication of all)\n\n' +
        'This mechanism — it is not "bad individuals." It is **structural**. In times of disaster, society finds a scapegoat. The mechanism has been used over and over for six hundred years. The Holocaust was its ultimate version.\n\n' +
        'The mechanism — is still alive today. Only the scapegoat changes. The logic does not.\n\n' +
        'When Devorah finished telling the story in 1408, she **knew this**. She did not tell her thirteen-year-old granddaughter to make her "know that Jews were slaughtered then." She told her so the granddaughter would learn to **recognize the mechanism**.\n\n' +
        'The next section: you think about what her last sentence was.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Devorah 14-74 岁，59 年。1408 年她跟 13 岁孙女讲完故事说了一句话。下一节，你思考她说的是什么',
    expectedLength: '440-500 字',
    expectsRealAnswer: false,
  },
  {
    id: 10,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§3 Rachel + §11 Q5 真问题：地窖中念 Tehillim 30 多遍是信仰的胜利 vs 信仰的崩溃',
    content: {
      cn:
        '你刚跟着 Devorah 走了她 14 岁那 4 个月。\n\n' +
        '我们停在地窖那一节，她念 Tehillim 第 23 篇 30 多遍。\n\n' +
        '问题来了。\n\n' +
        '14 岁的 Devorah 在地窖里念 Tehillim 第 23 篇 30 多遍——这是 (a) **信仰的胜利**还是 (b) **信仰的崩溃**？\n\n' +
        '两边都有真证据。\n\n' +
        '**一种说法——信仰的胜利**：Tehillim 是 3000 年前犹太人写的。3000 年来犹太人在最深的恐惧里反复念这一篇：巴比伦囚禁、罗马摧毁圣殿、中世纪欧洲屠杀、现代 Holocaust，一代一代。每一次苦难，Tehillim 第 23 篇都在那里。14 岁的 Devorah 在 Brigitta 地窖念这一篇，她不是孤单的，她是 3000 年传统的一员。这一句话**救了她的灵魂**。她那一刻没有发疯，没有哭崩，是因为她有一句话可以回到。这就是 Tehillim 的意义。她念到第 30 多遍**还在念**，这是信仰的胜利，不是信仰的失败。\n\n' +
        '**另一种说法——信仰的崩溃**：现代 trauma psychology（创伤心理学，Bessel van der Kolk《The Body Keeps the Score》、Judith Herman《Trauma and Recovery》）告诉我们：人在最深的创伤里，大脑做的最常见的事是 **repetition of a familiar action**。念一句话 30 多遍，不是因为你相信这句话，是因为你**没办法停**。你的大脑用这个动作填补恐惧留下的空。14 岁的 Devorah 念到第 30 多遍，她**自己分不清这句话是不是真的**（这一遍内文显式说了）。这不是信仰，是 traumatic grasping，是信仰**已经崩溃**之后大脑残留的肌肉记忆。她那一刻已经不再相信，但她还在念，因为她不知道还能做什么。\n\n' +
        '两种说法都站得住。\n\n' +
        '一种把这一刻看成 **3000 年传统的最深证明**；\n' +
        '另一种把这一刻看成 **创伤压垮信仰之后的肌肉残响**。\n\n' +
        '你怎么看？Devorah 那 30 多遍——更靠近信仰的胜利，还是信仰的崩溃？想 30 秒。',
      en:
        'You have just walked with Devorah through those four months at fourteen.\n\n' +
        'We pause at the moment in the cellar. She recites Psalm 23 thirty-some times.\n\n' +
        'Here is the question.\n\n' +
        'Fourteen-year-old Devorah, reciting Psalm 23 thirty-some times in that cellar — was this (a) **the triumph of faith**, or (b) **the collapse of faith**?\n\n' +
        'Both sides have real evidence.\n\n' +
        '**One view — the triumph of faith.** The Tehillim (the Book of Psalms) was written by Jews three thousand years ago. For three thousand years, Jews in the deepest fear have recited this same psalm: through the Babylonian exile, the Roman destruction of the Temple, the medieval European pogroms, the modern Holocaust. Generation after generation. Every disaster, Psalm 23 was there. When Devorah recited it in Brigitta\'s cellar at fourteen, she was not alone. She was part of a three-thousand-year tradition. That single line **saved her soul**. She did not go mad. She did not break down. She had a line she could return to. That is what Tehillim is for. She recited to the thirtieth time **and kept reciting**. This is the triumph of faith, not its failure.\n\n' +
        '**The other view — the collapse of faith.** Modern psychologists who study trauma (such as Bessel van der Kolk and Judith Herman) tell us this: under the deepest trauma, the most common thing the brain does is **repeat one familiar action over and over**. Saying a line thirty-some times, not because you believe the line, but because you **cannot stop**. Your hands and mouth keep doing what they have always done, even after your belief has broken. At the thirtieth time, Devorah herself **could no longer tell whether the line was true** (the lens text says this directly). This is not faith. This is what trauma does to a body that used to believe. In that moment she no longer believed, but she kept reciting because she did not know what else to do.\n\n' +
        'Both readings stand:\n\n' +
        'one sees the moment as the **deepest possible proof of a three-thousand-year tradition**;\n' +
        'the other sees it as the **muscle echo left after trauma has crushed belief**.\n\n' +
        'What do you think? Those thirty-some recitations — closer to the triumph of faith, or the collapse of faith? Take thirty seconds.',
    },
    deliverGoal:
      'Devorah 14 岁地窖里念 Tehillim 23 篇 30 多遍。' +
      '一种说法（信仰的胜利）：3000 年传统在最深恐惧里支撑她，她不是孤单的，这一句救了她的灵魂，这是 Tehillim 的意义。' +
      '另一种说法（信仰的崩溃 / trauma psychology）：人在最深创伤里大脑做的事是 repetition of familiar action，她念到自己都分不清是不是真的，这是 traumatic grasping 不是信仰。' +
      '——两边都站得住，你怎么看？',
    engagementHook: '**你怎么看**——Devorah 30 多遍 Tehillim 23 篇，是信仰的胜利还是信仰的崩溃？想 30 秒',
    expectedLength: '380-440 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§3 Rachel 章节教学要点 + §11 思考问题 — Devorah 1408 年最后一句话的两种 reading',
    content: {
      cn:
        '第二个真问题——这一个跨越 14 世纪，延伸到任何受过历史伤害的家庭。\n\n' +
        'Devorah 1408 年 74 岁，给 13 岁孙女 Rivka 讲完 1349 年那个 2 月 14 日，讲完之后说了一句话。\n\n' +
        '她说的那句话可能是 (a)，也可能是 (b)：\n\n' +
        '**一种说法——(a)**："他们错了。但今天的世界不一样了。Strasbourg 那种事不会再发生了。你可以放下这件事，好好生活，把这个故事记住，但不要让它重压你。"\n\n' +
        '**另一种说法——(b)**："他们错了。他们也许还会再错——你必须知道这件事，这样下次发生你能识别，这样你能在还来得及的时候保护自己和你的孩子。"\n\n' +
        '两种说法都站得住。\n\n' +
        '59 年了，Devorah 活到 74 岁，她在 Krakow 重建了家，她生了 4 个孩子加 8 个孙子孙女。\n' +
        '一种说法是她终于**和解**了。她想给 Rivka 一个不被恐惧支配的童年，这是她对孙女的**爱**。\n' +
        '另一种说法是她 59 年都**没和解**。她只是不再让 Strasbourg 支配她的日常，但她**知道**这个机制还在。她想给 Rivka 一个**能识别危险的眼睛**，这也是她对孙女的爱——只是另一种爱。\n\n' +
        'narrator 这里要诚实告诉你：**Devorah 1408 年那一刻到底说了什么**——这一遍不告诉你。因为这个**取决于你怎么读 Devorah**。\n\n' +
        '她经历了那 4 个月，跨过了 59 年。她坐在 Krakow 一张床上，看着 13 岁的孙女——她要把什么留给她？\n\n' +
        '一句"放下"，还是一句"识别"？\n\n' +
        '你给孙女选哪一句？\n\n' +
        '这一题**没有正确答案**，但你的选择**说出你怎么理解 Devorah 这个视角**。\n\n' +
        '想 30 秒。',
      en:
        'A second real question, one that crosses out of the fourteenth century, into every family carrying historical wound.\n\n' +
        '1408. Devorah is seventy-four. She has just finished telling her thirteen-year-old granddaughter Rivka the story of February 14, 1349. Then she said one sentence.\n\n' +
        'That sentence could have been (a), or (b).\n\n' +
        '**One view — (a):** "They were wrong. But the world today is different. Strasbourg cannot happen again. You can put this down. Live well. Remember the story, but do not let it weigh on you."\n\n' +
        '**The other view — (b):** "They were wrong. And they may be wrong again. You must know this story so that next time, you can recognize it. So that you can protect yourself and your children while there is still time."\n\n' +
        'Both readings stand.\n\n' +
        'Fifty-nine years. Devorah lived to seventy-four. She rebuilt a family in Krakow. She raised four children and eight grandchildren.\n' +
        'One reading: she finally **reconciled**. She wanted to give Rivka a childhood not ruled by fear. That was her **love** for her granddaughter.\n' +
        'The other reading: in fifty-nine years, she **never reconciled**. She simply no longer let Strasbourg run her days. But she **knew** the mechanism was still alive. She wanted to give Rivka **the eyes to recognize danger**. That too was her love, only a different kind of love.\n\n' +
        'The narrator here will be honest: **what Devorah actually said in 1408** — the lens does not tell you. Because the answer **depends on how you read Devorah**.\n\n' +
        'She lived those four months. She crossed those fifty-nine years. She sat on a bed in Krakow, looked at her thirteen-year-old granddaughter — and what did she want to leave with her?\n\n' +
        'A line about letting go? Or a line about recognizing?\n\n' +
        'Which one would you give the granddaughter?\n\n' +
        'There is **no correct answer**. But your choice **tells me how you understood Devorah** in this lens.\n\n' +
        'Take thirty seconds.',
    },
    deliverGoal:
      '1408 年 Devorah 74 岁讲完 1349/02/14，说的最后一句话——' +
      '一种说法（"放下"）：今天的世界不一样了，你可以放下，这是她对孙女的爱。' +
      '另一种说法（"识别"）：他们也许还会再错，你必须知道这件事这样下次能识别，这也是她对孙女的爱——只是另一种。' +
      '——你给孙女选哪一句？',
    engagementHook: '给 13 岁孙女 Rivka 选哪一句——"放下"还是"识别"，先在心里想想你怎么选，下一节我会正式问你。',
    expectedLength: '320-380 字 + 真问题',
    expectsRealAnswer: false,
  },
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题 + 跨 lens 对位 echo（Konrad lens 的 Yitzhak 那一眼）',
    content: {
      cn:
        '你刚从 Devorah 14 岁内部走了一遍——一个犹太女孩 200 年家被毁掉的 4 个月——59 年后她活到 74 岁讲给 13 岁孙女的最后一句话。\n\n' +
        '在你进入记忆考核之前，一个问题：\n\n' +
        '这一遍里，最让你停一下的是什么？\n\n' +
        '是 11 月早上 8 岁 Klara 走过窗户没看你，你 14 岁第一次懂"邻居会变"？\n\n' +
        '是 12 月晚上听到 Aba 跟 Ima 烛光下谈"井下毒"谣言，你心里炸了一下？\n\n' +
        '是 2 月 9 日晚 Aba 第一次直接对你说"你 14 岁了，你要听我说一些事"？\n\n' +
        '是 2 月 13 日晚 Brigitta 抱住 Ima 那一刻，你第一次懂"基督徒不是 binary 的"？\n\n' +
        '是地窖里 Tehillim 第 23 篇念到第 30 多遍，你自己分不清这句话是不是真的？\n\n' +
        '是半夜 Aba 跪给 Hans，你一辈子没看过他跪？\n\n' +
        '是森林边 Aba 39 岁倒下，30 块石头，你从此想他只能想到这个石头堆？\n\n' +
        '还是 1408 年 74 岁的你坐在 Krakow 一张床上看着 13 岁的 Rivka——你说的那一句话？\n\n' +
        '说一句话告诉我。\n\n' +
        '\n\n' +
        '—\n\n' +
        '\n\n' +
        '**这一遍的最后一件事**：\n\n' +
        '你这个 Topic 还有两个视角：\n' +
        '- Agnolo（Siena 编年史家，35 岁亲手埋了 5 个孩子的 chronicler）\n' +
        '- Konrad（Strasbourg 屠夫工会代表，1349/02/14 投赞成票屠犹的 perpetrator）\n\n' +
        '如果你做完 Konrad 这一遍，你会发现一个 micro-detail。\n' +
        '我**不告诉你**是什么。\n' +
        '让你自己 connect。\n\n' +
        '这个 connect 的瞬间，是多视角学法给你的最强一击，比直接告诉你"这两个视角是相连的"重 100 倍。\n\n' +
        '然后——准备好了吗？记忆考核：拼写、定义、应用题，把今天演过的变成你真正记得的。',
      en:
        'You have just walked through Devorah from inside, at fourteen — a Jewish girl losing her two-hundred-year family in four months — and the last sentence she said to her thirteen-year-old granddaughter, fifty-nine years later, when she was seventy-four.\n\n' +
        'Before you move into the mastery check, one question.\n\n' +
        'In this playthrough, what was the moment that made you pause?\n\n' +
        'Was it the morning in November when eight-year-old Klara walked past your window without looking up — and at fourteen you understood for the first time that "a neighbor can change"?\n\n' +
        'Was it the night in December when you heard Aba and Ima whispering by candlelight about the "well-poisoning" rumor, and something inside you cracked open?\n\n' +
        'Was it the night of February 9, when Aba spoke directly to you for the first time — "you are fourteen, you need to hear something"?\n\n' +
        'Was it the night of February 13, when Brigitta held Ima — and you understood for the first time that "Christians are not binary"?\n\n' +
        'Was it Psalm 23 in the cellar — by the thirtieth time, you yourself could no longer tell whether the line was true?\n\n' +
        'Was it Aba kneeling for Hans at midnight — when in your whole life you had never seen him kneel?\n\n' +
        'Was it the edge of the forest — Aba at thirty-nine collapsing — thirty stones — and from that day on, when you thought of him you could only see the pile of stones?\n\n' +
        'Or was it 1408 — you, seventy-four, sitting on a bed in Krakow — looking at thirteen-year-old Rivka — and the sentence you said?\n\n' +
        'Tell me in one sentence.\n\n' +
        '\n\n' +
        '—\n\n' +
        '\n\n' +
        '**One last thing about this lens.**\n\n' +
        'There are two other lenses in this Topic:\n' +
        '— Agnolo (the chronicler in Siena — at thirty-five, the man who buried his five children with his own hands)\n' +
        '— Konrad (the butcher-guild representative in Strasbourg — the man who voted yes on February 14, 1349)\n\n' +
        'If you do the Konrad lens — you will find one micro-detail.\n' +
        'I will **not** tell you what.\n' +
        'You will connect it yourself.\n\n' +
        'That moment of connecting — is the strongest blow this lens system can give you. A hundred times stronger than the narrator simply telling you "these two lenses are linked."\n\n' +
        'Now — are you ready? The mastery check: spelling, definitions, application questions — turning what you just played into what you actually remember.',
    },
    deliverGoal:
      '你扮演了 Devorah bat Yitzhak 9 节——14 岁的 4 个月加 59 年后的最后一句。' +
      '现在你可以选：' +
      '(1) 进 mastery 通关 / ' +
      '(2) 换视角重玩——比如 Agnolo（Siena chronicler）或 Konrad（Strasbourg perpetrator）——' +
      '做完 Konrad 你会发现一个 micro-detail，这个 connect 是多视角学法最强一击',
    engagementHook:
      '走完 Devorah 这一遍——14 岁的 4 个月到 74 岁坐在 Krakow 床边对孙女说的最后一句。先回答一个：换作是你，给 13 岁的 Rivka 选哪一句——"放下"还是"识别"？再想一步：这一遍最让你停一下的是哪一刻，为什么是它？说一句话',
    expectedLength: '440-500 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// 导出 lenses + default
// ═══════════════════════════════════════════════════
export var lenses = {
  'agnolo-siena': {
    id: 'agnolo-siena',
    icon: '🪶',
    name: { cn: 'Agnolo di Tura（Siena 编年史家）', en: 'Agnolo di Tura del Grasso' },
    role: {
      cn: 'Siena 鞋匠工会账房 / 业余 chronicler / 1348 intellectual witness 视角',
      en: 'Siena cobblers-guild bookkeeper and amateur chronicler / 1348 intellectual witness lens',
    },
    description: {
      cn: '14 世纪 Siena 真实历史人物，35 岁，鞋匠工会账房 + 业余编年史家。1348 年 7 月底到 8 月初亲手埋了自己 5 个孩子，9 天后他重新拿起鹅毛笔。这一遍带你经历从"30 死，60 死"的 6 月到 1351 年终于停笔的那一夜，以及 700 年后他写下的字活到了今天。',
      en: 'A real 14th-century figure in Siena, 35 years old, bookkeeper for the cobblers\' guild and amateur chronicler. Between late July and early August 1348 he buried his five children with his own hands, and 9 days later picked up the quill again. The intellectual-witness lens from June 1348 ("30 dead, 60 dead") to the night in 1351 when he finally stopped writing, and the seven centuries his words have lasted since.',
    },
    // 旧字段 fallback
    nameCn: 'Agnolo di Tura（Siena 编年史家）',
    storyboard: agnoloSienaStoryboard,
  },
  'konrad-strasbourg': {
    id: 'konrad-strasbourg',
    icon: '🪓',
    name: { cn: 'Konrad（Strasbourg 屠夫工会代表）', en: 'Konrad of Strasbourg' },
    role: {
      cn: 'Strasbourg 屠夫工会代表 / 1349 反犹屠杀 perpetrator-actor 视角',
      en: 'Strasbourg butchers-guild delegate / 1349 anti-Jewish massacre perpetrator-actor lens',
    },
    description: {
      cn: '虚构的 Strasbourg 38 岁屠夫工会代表，4 代屠夫家族。1340 年他从犹太银匠 Yitzhak 手里接过一对刻字银鞋扣（"信得过的人"）。1349 年 2 月 9 日他投赞成票罢免反对屠犹的市长，5 天后站在 Werd 岛木堆边看见 Yitzhak 那一眼。从 perpetrator 内部经历"真心相信"机制，和它被 plague 证伪之后的 25 年沉默。',
      en: 'A fictional 38-year-old delegate of the Strasbourg butchers\' guild, fourth generation in the trade. In 1340 he accepted a pair of engraved silver shoe-buckles from the Jewish silversmith Yitzhak, the man you trust your daughter\'s wedding to. On February 9 1349 he voted to remove the mayor who opposed the pogrom, and 5 days later stood by the wood pile on Werd island when Yitzhak looked up at him. The perpetrator lens on the "I really believed it" mechanism, and the 25 years of silence after the plague proved the belief false.',
    },
    // 旧字段 fallback
    nameCn: 'Konrad（Strasbourg 屠夫工会代表）',
    storyboard: konradStrasbourgStoryboard,
  },
  'devorah-strasbourg': {
    id: 'devorah-strasbourg',
    icon: '🕯️',
    name: { cn: 'Devorah（虚构 14 岁 Strasbourg 犹太女孩）', en: 'Devorah bat Yitzhak' },
    role: {
      cn: 'Strasbourg 14 岁犹太女孩 / 1349 屠杀幸存者 / receiving end 视角',
      en: '14yo Jewish girl in Strasbourg / 1349 pogrom survivor / receiving-end lens',
    },
    description: {
      cn: '虚构的 14 岁 Strasbourg 犹太女孩。父亲 Yitzhak 是 Judengasse 的银匠。1349 年 2 月 14 日屠杀那天，她在基督徒邻居 Brigitta 家地窖里念《诗篇》第 23 篇 30 多遍。从受害方内部经历那 4 个月、半夜父亲跪给邻居换到天亮、森林边帮母亲用 30 块石头堆父亲的坟，以及 59 年后 1408 年她 74 岁对孙女说的最后那一句话。',
      en: 'A fictional 14-year-old Jewish girl in Strasbourg. Her father Yitzhak is a silversmith on the Judengasse. On the day of the massacre, February 14 1349, she sat in the cellar of her Christian neighbour Brigitta and recited Psalm 23 more than 30 times. The receiving-end lens on those 4 months, the night her father knelt to a neighbour until dawn, the morning by the forest when she helped her mother pile 30 stones over his grave, and the last sentence she spoke to her granddaughter in 1408 at age 74.',
    },
    // 旧字段 fallback
    nameCn: 'Devorah（虚构 14 岁 Strasbourg 犹太女孩）',
    storyboard: devorahStrasbourgStoryboard,
  },
};

export var defaultLens = 'agnolo-siena';

// ─── 默认 export 兼容老 runtime（取 default lens 的 storyboard）──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'black-death-1347',
  schemaVersion: 2, // v2 = lens-based
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  estimatedMinutesPerLens: {
    'agnolo-siena': 32,
    'konrad-strasbourg': 32,
    'devorah-strasbourg': 32,
  },
};
