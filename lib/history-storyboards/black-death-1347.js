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
//     这个 lens 给了名字 + 年龄但**显式标记**为 lens 创作）
//   - 妻子（妻子是否死于瘟疫，史料不明确——保留 ambiguity）
//   - 1348 年 5 月 Siena 第一例 Black Death 病人；6-9 月达到顶峰；
//     1348 年底死了约 3 万人（约 Siena 总人口 50-60%）
//   - Agnolo 自己活下来——继续写 chronicle 直到 1351——1363 年才死
//
// 这个 lens 的张力：
//   - Agnolo 是知识分子——他**记录**死亡——但他无法**阻止**死亡
//   - 他**亲手埋了 5 个孩子**——这是 documented 记录（不是 metaphor）
//   - 他的 chronicle 在历史上保存下来——他的 5 个孩子的名字没有保存下来
//   - 他选择写下数字——而不是写下他孩子的脸——为什么？
//
// 这个 lens 是 intellectual mediator 位置（平行于 Stephen Langton 的 lonely-middle
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
        '我叫 Agnolo di Tura，人家叫我 *il Grasso*——"胖子 Agnolo"——这是我自己写在 *Cronaca* 笔记本第一页的称呼。我在 Siena 鞋匠工会（*Arte dei Calzolai*）做 *bookkeeper*——记账员——每周二 + 周五早上去 *Palazzo Pubblico*（市政厅）查档案、做账。剩下的时间——我写 Siena 这座城邦的编年史。\n\n' +
        '今天是周四。我刚到 Palazzo Pubblico 二楼办公室——一个胖嘴的传话员从港口跑上来，脸白——他说："Agnolo——昨晚有个商人从 Genoa（热那亚）回来——发烧——脖子下面长了一个鸡蛋大的黑肿块——他妻子说他在 Genoa 港停了三天补货——今天早上死了——"\n\n' +
        '我那一刻坐着没动。\n\n' +
        '我们 Siena 人 4 月就听说了。Pisa 死人。Florence 城里南门街整条都病了。我们城邦 Council of Nine（九人议会）4 月底已经开过两次会——*podestà*（市长）下令港口商船**不准卸货**、城门外建检疫站、禁止公开集会——但太晚了——商人和银行家照样进城——羊毛和谷物照样进城——老鼠跟跳蚤也照样。\n\n' +
        '我把传话员说的全写下。日期——1348 年 5 月 8 日。死者名字——Bartolomeo di Niccolò——商人——*da Genova*。我用鹅毛笔——黑铁胆墨水——羊皮纸的左上角——三行字。\n\n' +
        '我那一刻不知道——这一笔，会变成 30000 笔。\n\n' +
        '我是 Agnolo di Tura，Siena 的鞋匠工会账房 + 业余编年史家。接下来 12 节，你跟我走 1348 年那一年——从这个早上一笔字——到我**亲手**做的事——到我 1351 年终于停笔的那一天——再到我 1363 年死后我的字怎么活下来的。',
      en:
        'Morning of May 8, 1348. Inside the city of Siena, in central Tuscany. I was 35.\n\n' +
        'My name is Agnolo di Tura. People call me *il Grasso* — "Agnolo the Fat" — this is the name I wrote on the first page of my own *Cronaca* notebook. I work as a *bookkeeper* (an accountant) for the Siena Cobblers\' Guild (*Arte dei Calzolai*). Every Tuesday and Friday morning I go to the *Palazzo Pubblico* (the City Hall) to check records and balance accounts. The rest of my time, I write the *Cronaca senese* — a chronicle of Siena, this independent city-state.\n\n' +
        'Today was Thursday. I had just arrived at my second-floor office in the Palazzo Pubblico when a thick-lipped messenger ran up from the port gate, his face pale: "Agnolo — last night a merchant came back from Genoa. Fever. A black swelling the size of an egg under his collarbone. His wife says he had stayed at Genoa\'s harbor three days loading goods. He died this morning."\n\n' +
        'I sat without moving.\n\n' +
        'We Siena folk had heard about it since April. People dead in Pisa. The whole south-gate street of Florence was sick. Our Council of Nine (the nine-man committee that governs Siena) had met twice by late April — the *podestà* (the chief magistrate, a kind of city mayor) had ordered ships at the port: **do not unload cargo**. Quarantine huts outside the gates. No public gatherings. But it was already too late. Merchants and bankers came in anyway. Wool and grain came in anyway. So did the rats and the fleas riding them.\n\n' +
        'I wrote down what the messenger told me. Date: May 8, 1348. Dead man\'s name: Bartolomeo di Niccolò. Profession: merchant. Origin: *da Genova* (from Genoa). I used a goose quill, black iron-gall ink, the upper-left corner of a parchment sheet. Three lines.\n\n' +
        'In that moment I did not know — this one entry would grow into thirty thousand entries.\n\n' +
        'I am Agnolo di Tura, bookkeeper of the Siena cobblers\' guild and amateur chronicler. Over the next twelve sections, you will walk with me through the year 1348 — from this morning, this single line on parchment — to the things I did **with my own hands** — to the day in 1351 when I finally put down the pen — and then to how my words survived after I closed my eyes in 1363.',
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
        '我得告诉你我 1348 年 5 月 8 日之前的世界——那个会被毁掉的世界。\n\n' +
        '我 1313 年生在 Siena。我爸 Tura di Bartolomeo 也是 *Arte dei Calzolai* 的人——那不是我们今天说的"工会"——是 14 世纪意大利城邦的一种**自治组织**——鞋匠 + 皮革商 + 学徒一起决定行业规则、收税、做慈善、选议员。Siena 那时候不属于教皇国、不属于神圣罗马帝国——它**自己治自己**——70 年前的 1287 年开始一个叫 Council of Nine（*Nove*）的九人议会换班治城——每两个月换一批——这是中世纪欧洲走得最远的一种**共和制实验**之一。\n\n' +
        '我爸希望我接他班做鞋匠。我手不灵——14 岁那年缝坏一双鞋——师傅说："Agnolo——你不是这块料——但你字写得好。"\n\n' +
        '我 16 岁开始在工会里做记账员。20 岁认识了我妻子 Niccoluccia——她是 Siena 城南羊毛商 Bindo di Cecco 的女儿——她比我矮半个头——她不识字——她结婚那年送了我一支鹅毛笔——她说："Agnolo——你在工会算别人的账——回家给我们这个家也写点什么。"\n\n' +
        '我那年开始写 *Cronaca senese*——Siena 的编年史。每周写两次——记下议会决议、商人到港、教堂修建、瘟疫和饥荒、Florence 跟我们打仗那几年的细节。\n\n' +
        '到 1348 年 5 月——我们家有 5 个孩子。**这个 lens 给了他们名字 + 年龄——但你必须知道：documented record 只确认 5 个孩子这件事——名字和年龄是这个 lens 给你听见这一家具体的样子的虚构补充**：\n\n' +
        '老大——男孩——Niccolò——12 岁——已经开始跟他外公学羊毛生意。\n' +
        '老二——男孩——Pietro——10 岁——会爬院子里那棵无花果树。\n' +
        '老三——女孩——Caterina——8 岁——头发跟她妈一样直。\n' +
        '老四——女孩——Lisa——6 岁——只跟我说话——见外人就躲我背后。\n' +
        '老五——男孩——Tommaso——3 岁——刚开始学走路那年得过一次发烧——好了——我们以为最难的关都过了。\n\n' +
        '5 月 8 日早上——我从 Palazzo Pubblico 回家路上——穿过 Piazza del Campo（贝壳形的中心广场，那年代欧洲最美的广场之一，今天还在）——我跟一个卖无花果的小贩点头打招呼——我那一刻没意识到——三个月后，那个小贩会死，我的 5 个孩子也会死，我会**亲手**做一些事——而我家这扇门——再没人推开过。',
      en:
        'I have to tell you what my world was, before May 8, 1348. The world that was about to be destroyed.\n\n' +
        'I was born in Siena in 1313. My father, Tura di Bartolomeo, was also in the *Arte dei Calzolai* — the cobblers\' guild. That is not what we today call a "labor union." It was the kind of self-governing trade body that medieval Italian city-states developed: cobblers, leather traders, and apprentices together set rules, collected taxes, organized charity, and even elected representatives to the city council. Siena in those years did not belong to the Papal States or the Holy Roman Empire. **It governed itself**. Since 1287 — sixty years before this story — Siena had been run by the *Nove*, the Council of Nine: a nine-man committee that rotated every two months. This was one of the most advanced **experiments in republican government** in medieval Europe.\n\n' +
        'My father hoped I would take over his cobbling work. My hands were clumsy. At fourteen I ruined a pair of shoes, and my master said: "Agnolo — this is not your trade. But you write well."\n\n' +
        'At sixteen I began as a bookkeeper for the guild. At twenty I met my wife Niccoluccia. She was the daughter of Bindo di Cecco, a wool trader from south Siena. She was half a head shorter than me. She could not read. The year we married, she gave me a goose-feather quill and said: "Agnolo — you keep accounts for other people at the guild. Come home and write something for our own family."\n\n' +
        'That year I began my *Cronaca senese* — a chronicle of Siena. Twice a week I wrote: council decisions, merchants arriving by port, churches being built, harvests failing, the years of war with Florence and what the fighting cost.\n\n' +
        'By May 1348, our family had five children. **This lens gives them names and ages — but you must know this: the documented historical record only confirms that there were five children. The names and ages here are this lens\'s creation, a way to let you hear what that one family actually looked like inside their own house**:\n\n' +
        'Eldest — a boy — Niccolò — twelve — already learning the wool trade from his maternal grandfather.\n' +
        'Second — a boy — Pietro — ten — could climb the fig tree in our courtyard.\n' +
        'Third — a girl — Caterina — eight — straight hair like her mother\'s.\n' +
        'Fourth — a girl — Lisa — six — only spoke to me, hid behind my back when strangers came.\n' +
        'Fifth — a boy — Tommaso — three — just learning to walk that year, had a bad fever once and pulled through. We thought the worst was behind us.\n\n' +
        'On the morning of May 8, on my way home from the Palazzo Pubblico, I crossed the *Piazza del Campo* (the shell-shaped main square, one of the most beautiful in Europe in those years and still standing today) and nodded to a fig-seller I passed every week. In that moment I did not know — three months later, the fig-seller would be dead, my five children would be dead, I would do certain things **with my own hands** — and the door to our house would never open again.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '5 个孩子 + 一个会拦我胡子的妻子——我的 Siena——下一节，6 月 plague 来了',
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
        '1348 年 6 月——Siena 开始死人。\n\n' +
        '6 月 3 日周二——我去 Palazzo Pubblico 查账——回家路上我看见 Via di Città 街上一个石匠倒在自家门口——他妻子在喊——我走过去——他脖子下面那个肿块——比鸡蛋还大——黑灰色——硬得像石头——意大利文我们叫 *gavoccioli*（脓包）——他闭眼——脸朝下——大概已经死了一两小时。\n\n' +
        '我那天晚上回家——把这事写下。我那天写："**今日 Siena 死 35 人**"——这是我从市政厅档案抄来的当日下葬数字——我用阿拉伯数字（35）——不用罗马数字 XXXV——因为我习惯了商人记账方式。\n\n' +
        '6 月 4 日周三——我又去 Palazzo Pubblico——那天的下葬数字是——\n\n' +
        '**60 人**。\n\n' +
        '一夜之间翻了将近一倍。\n\n' +
        '6 月 5 日周四——\n\n' +
        '**我那天没去 Palazzo Pubblico**。\n\n' +
        '我坐在我家二楼小书房——窗外是 Siena 那条向 Florence 方向的旧路——我面前一张羊皮纸——我的鹅毛笔——铁胆墨水——\n\n' +
        '我没写。\n\n' +
        '我那一刻——你必须知道——一个编年史家的第一反应**不是**记录——是**不相信**——是脑子里反复转一句话："这个数字不对——一定哪里搞错了——一座城一夜不可能死 60 个人——市政厅档案员一定是把外面的乡村数字算进来了——明天我去亲自查——不要轻易写下不准确的东西"——\n\n' +
        '——这是我那天**真正**想的。\n\n' +
        '但 6 月 6 日早上——我妻子 Niccoluccia 来书房叫我——她说："Agnolo——你下楼——巷子里 Lapo 师傅家的两个孩子昨晚一起死了——巷子另一头麦芽商 Berto 家三个人也死了——隔壁那家——一家四口——昨晚四个人一起 *gavoccioli*——"\n\n' +
        '我下楼——我穿过我们家小院子那棵无花果树——Pietro 没在树上——他在我背后揪我袖子说："爸——天主发疯了吗？"\n\n' +
        '我没回他。\n\n' +
        '我那天回书房——重新坐下——我不是怀疑——我是怕——我那只鹅毛笔在墨水里浸了三次——我才写下当天的数字——\n\n' +
        '**6 月 6 日——Siena 死 80 余人**——\n\n' +
        '我写完——我把 *Cronaca* 笔记本合上——我那一年第一次想——也许这件事不是我可以记完的。',
      en:
        'June 1348. Siena began to die.\n\n' +
        'Tuesday, June 3 — I went to the Palazzo Pubblico to do accounts. On the way home I saw a stonemason collapsed in front of his own door on Via di Città. His wife was shouting. I walked over. The swelling under his collarbone — bigger than an egg, dark gray, hard as stone — in Italian we called these *gavoccioli* ("buboes"; the swollen lymph nodes that mark this disease). His eyes were closed, his face down, probably an hour or two already gone.\n\n' +
        'That evening I came home and wrote the entry. I wrote: "**Today in Siena, 35 dead.**" That was the day\'s burial count, copied from the city hall ledger. I used Arabic numerals (35), not Roman (XXXV) — habit of a merchant\'s accountant.\n\n' +
        'Wednesday, June 4 — I went to the Palazzo Pubblico again. The burial count that day was —\n\n' +
        '**60 dead.**\n\n' +
        'Almost double, in one night.\n\n' +
        'Thursday, June 5 — \n\n' +
        '**I did not go to the Palazzo Pubblico that day.**\n\n' +
        'I sat in my upstairs study. Outside the window ran the old road toward Florence. In front of me, a sheet of parchment. My quill. The iron-gall ink.\n\n' +
        'I did not write.\n\n' +
        'In that moment — you must know — a chronicler\'s first instinct is **not** to record. It is **disbelief**. The thought turning over and over in my head: "This number is wrong. The clerk must have mixed in the *contado* — the surrounding countryside — with the city numbers. A city cannot lose sixty people in one night. Tomorrow I will go and check the books myself. I must not write down something inaccurate." \n\n' +
        '— that was what I was actually thinking.\n\n' +
        'But on the morning of June 6, my wife Niccoluccia came up to the study and called me: "Agnolo — come downstairs. Master Lapo down the alley lost two children last night, both at once. The malt-seller Berto on the other end of the alley lost three people. The neighbors next door — a family of four — all four had *gavoccioli* by last night —"\n\n' +
        'I went down. I crossed our small courtyard, past the fig tree. Pietro was not in it. He was behind me, pulling my sleeve. He said: "Father, has God gone mad?"\n\n' +
        'I did not answer him.\n\n' +
        'That afternoon I went back to the study and sat down. It was not disbelief anymore. It was fear. I dipped my quill into the ink three times before I could write the day\'s number —\n\n' +
        '**June 6 — Siena, more than 80 dead.**\n\n' +
        'I closed the *Cronaca* notebook. For the first time that year I thought — maybe this is not something I can finish recording.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我那年第一次想——也许这件事不是我可以记完的——下一节，7 月——制度全垮',
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
        '1348 年 7 月——*tutti morti*——意大利文，"全死了"——这是 Siena 街上孩子那年学会的口头禅。\n\n' +
        '7 月初——我去 Palazzo Pubblico——办公室门锁着——档案员 Gherardo 没来——他家昨夜全死。我去隔壁找另一个档案员 Cino——Cino 家也死了——剩下一个 14 岁的学徒 Vanni——他坐在档案室的木凳上——他不知道下一步该做什么——\n\n' +
        '7 月 7 日——我们 Siena 的 *podestà*——这一年是个外来人，从 Bologna 雇来的，按 Siena 制度，市长必须从外城邦请——他**逃了**。\n\n' +
        '他没说一声——他半夜带着家眷骑马出 Porta Camollia 北门——往 Bologna 方向——我后来在 *Cronaca* 里写："**他走了。我不会写他的名字。让他在 Bologna 自己的史书里做记录吧**。"——这是我那年写下最尖的一句。\n\n' +
        'Council of Nine——9 个议员——4 个死了——3 个跑了——剩下 2 个老人坐在 Palazzo Pubblico 的木长凳上——一个叫 Mino di Vanni——一个叫 Cecco di Lando——他们没办法做任何决定——他们等着自己也死。\n\n' +
        'Siena 这座城邦——70 年的共和实验——一个月内**institutional collapse**——制度坍塌。\n\n' +
        '街上的事更难写——\n\n' +
        '尸体堆在自家门口——没有人收。我们叫 *becchini*（收尸队）——平时由 Siena 的 *misericordia*（慈善修会）做——他们一半死了一半逃了——\n\n' +
        '我那天——7 月 12 日——我自己**推了一具尸体**。\n\n' +
        '是我家斜对面那个无花果小贩——我 5 月 8 日早上跟他点过头的那个——他死在自家门口——他的儿子（10 岁）站在尸体边上不会哭——我跟他说："孩子——你帮我抬脚——我抬肩——"\n\n' +
        '我们俩一起把他爸推上一辆借来的木车——往 Siena 城外山下的 *cimitero*（墓园）走——半路我那只手——我胖嘛——汗在车把上——滑了一下——尸体差点翻下来——\n\n' +
        '到墓园——没有教士做最后告解——*Domus*（教堂）的老 *prete*（神父）也死了。墓园里挖了一个大坑——*fossa comune*（共葬坑）——10 具尸体一层——上面盖一层薄土——再 10 具——再一层——Boccaccio 在 Florence 见过同样的事——他在《Decameron》里管这叫"像做千层糕一样葬人"——\n\n' +
        '我那天回家——身上一股别的东西的味道——我妻子 Niccoluccia 没让我进卧室——她在客厅给我打了一盆水——她说："Agnolo——你以后不要再去推。"\n\n' +
        '我那天晚上没回应她。\n\n' +
        '7 月底——Siena 城里一周死 5000 人——比我们去年一**整年**的下葬数字还多。\n\n' +
        '*Cronaca* 上我那一周只写了一句话——"**这一周——人在 Siena 像虫子一样死。我没办法记下每个人**。"',
      en:
        'July 1348. *Tutti morti* — Italian for "everyone dies." That summer, this became something Siena children chanted in the street.\n\n' +
        'Early July, I went to the Palazzo Pubblico. My office door was locked. The clerk Gherardo had not come in. His whole family had died the previous night. I went to find the next clerk, Cino. Cino\'s family was also gone. The only person left was a fourteen-year-old apprentice named Vanni, sitting on a wooden bench in the records room, not knowing what to do next.\n\n' +
        'July 7 — Our *podestà* — that year an outsider hired from Bologna, by Siena custom: the chief magistrate must come from a different city-state to keep him impartial — **fled**.\n\n' +
        'He told no one. In the middle of the night, he and his household rode out of Porta Camollia, the north gate, toward Bologna. Later I wrote in the *Cronaca*: "**He left. I will not write his name. Let him make his own record in Bologna\'s books.**" That was the sharpest line I wrote that year.\n\n' +
        'The Council of Nine — nine members — four dead, three fled, two old men sitting on the wooden bench of the Palazzo Pubblico. One named Mino di Vanni, one named Cecco di Lando. They could decide nothing. They waited to die too.\n\n' +
        'Siena, this city-state — seventy years of republican experiment — in one month suffered **institutional collapse**.\n\n' +
        'The streets were harder to write down.\n\n' +
        'Bodies piled at front doors. No one collected them. We called them *becchini* (the corpse-cart men). In normal times the *misericordia* (the city\'s charitable brotherhood) handled this. Half of them were dead. The other half had fled.\n\n' +
        'On July 12, I pushed a corpse with my own hands.\n\n' +
        'It was the fig-seller across the street from us — the one I had nodded to on the morning of May 8. He died at his own door. His son, ten years old, stood next to the body and could not cry. I said to him: "Boy. Take the feet. I will take the shoulders."\n\n' +
        'The two of us lifted his father onto a borrowed wooden cart and pushed it down the slope outside the city walls toward the *cimitero* (the cemetery). Halfway there my hand — I am fat, you know — sweat made the handle slick — slipped — the body almost rolled off.\n\n' +
        'At the cemetery there was no priest to give last rites. The old *prete* (parish priest) of the *Domus* (the cathedral) was already dead. They had dug a great pit — a *fossa comune* (mass grave) — ten bodies in a layer, a thin layer of earth on top, another ten bodies, another thin layer. Boccaccio, witnessing the same thing in Florence at the same time, would call it in his *Decameron*: "they buried them as one stacks a layer cake."\n\n' +
        'I came home that evening with a smell on my clothes that was not normal smell. My wife Niccoluccia did not let me into the bedroom. She brought me a basin of water in the front room. She said: "Agnolo. You will not push another body."\n\n' +
        'I did not answer her that night.\n\n' +
        'By late July, Siena was burying five thousand people a week — more in one week than the city normally buried in an entire year.\n\n' +
        'In the *Cronaca* that week I wrote one sentence only: "**This week, people in Siena are dying like insects. I cannot write down each one.**"',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我妻子那晚说"你不要再推尸体了"——我没回——下一节是这个 lens 最重的一节',
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
        '这一节最难写。\n\n' +
        '1348 年 7 月底到 8 月初——9 天——我家。\n\n' +
        '**这一节绝大多数细节是这个 lens 让你听见——documented record 只有 Agnolo 自己后来在 *Cronaca* 里那一句**：\n\n' +
        '> *"Io Agnolo di Tura, detto il Grasso... seppellii con le mie mani i miei cinque figliuoli."*\n\n' +
        '> "我，Agnolo di Tura，人称胖子......**用我自己的手——埋了我的 5 个孩子**。"\n\n' +
        '这句话历史上保存下来了——它是黑死病文献里最锋利的 11 个意大利文字——其他细节我现在跟你讲的——是这个 lens 让你**站在那 9 天里**，不是史料能给的。\n\n' +
        '7 月 28 日早上——Tommaso（3 岁，最小）——脖子根上一个肿块——我妻子那一刻没尖叫——她只是看了我一眼——她那一眼，我一辈子记得。\n\n' +
        '7 月 30 日——Tommaso 死。\n\n' +
        '我抱他出门——我家小院那棵无花果树——Pietro 不久之前还在树上——我把 Tommaso 放在木板上——我自己一锹一锹挖坑——我家西边那块小田——我们家自己的地——离 Siena 城墙大概 800 步——我挖的时候出汗——眼睛进汗——分不清是汗还是别的——\n\n' +
        '7 月 31 日——Lisa（6 岁）——发烧——\n\n' +
        '8 月 1 日——Lisa 死。\n\n' +
        '8 月 2 日——Caterina（8 岁）——\n\n' +
        '8 月 3 日——\n\n' +
        '我那 9 天具体是什么样——这个 lens 不会用 9 个分场景一个一个写给你看——**因为那不是尊重**——\n\n' +
        '——9 天结束的时候——5 个坑——挖在我家西边那块小田——我自己挖——我自己填——我没有请人帮忙——我那 9 天不分白天黑夜——我妻子 Niccoluccia——她活着——她坐在我家小院那棵无花果树下——她不进屋——她不出院——她那 9 天只在树下坐着——她不说话。\n\n' +
        '第 9 天傍晚——我从小田走回家——身上脏——手指头有的指甲翻了——我推开院门——Niccoluccia 抬头看我——她说一句话——\n\n' +
        '"Agnolo——你今天还要去 Palazzo Pubblico 吗？"\n\n' +
        '我那一刻——我可以告诉你——这是 lens 让你听见的——一个失去 5 个孩子的人在 1348 年 8 月一个傍晚的脑子里——只想到一件事——\n\n' +
        '——**我不知道明天太阳出来我要不要起来**。\n\n' +
        '我没回 Niccoluccia 的话。\n\n' +
        '我进屋——我点了一支油灯——我从书架上拿下 *Cronaca* 笔记本——我翻到 7 月 28 日那一页——我什么都没写——我把笔记本合上——我吹熄油灯——我那天晚上睡了 12 小时——这是 1348 年 5 月以来我睡得最长的一夜。',
      en:
        'This is the hardest section to write.\n\n' +
        'Late July to early August 1348. Nine days. Inside my own house.\n\n' +
        '**Most of what you are about to hear in this section is what this lens lets you stand inside. The documented record is only one sentence — what Agnolo himself later wrote in his *Cronaca*:**\n\n' +
        '> *"Io Agnolo di Tura, detto il Grasso... seppellii con le mie mani i miei cinque figliuoli."*\n\n' +
        '> "I, Agnolo di Tura, called the Fat... **buried my five children with my own hands**."\n\n' +
        'That sentence is what history preserved. Eleven words of Italian — the sharpest sentence in the entire Black Death record. The other details I am about to tell you are this lens letting you **stand inside those nine days**. The historical sources cannot give you that.\n\n' +
        'Morning of July 28 — Tommaso (three years old, the youngest) — a swelling at the base of his neck. My wife in that moment did not scream. She only looked at me once. That one look I have remembered for the rest of my life.\n\n' +
        'July 30 — Tommaso died.\n\n' +
        'I carried him outside. The fig tree in our courtyard — where Pietro had climbed not long before. I laid Tommaso on a wooden board. I dug the pit myself, one shovel at a time. The small field west of our house — our family\'s own piece of land — about eight hundred paces from the city wall. While I dug I sweated. Sweat got into my eyes. I could not tell what was sweat and what was the other thing.\n\n' +
        'July 31 — Lisa (six) — fever — \n\n' +
        'August 1 — Lisa died.\n\n' +
        'August 2 — Caterina (eight) — \n\n' +
        'August 3 — \n\n' +
        'What those nine days were like — this lens will not break them into nine separate scenes for you. **That would not be respect.**\n\n' +
        '— At the end of nine days, there were five pits in the small field west of our house. I dug each one myself. I filled each one myself. I did not ask anyone to help. For nine days I did not separate day from night. My wife Niccoluccia — she was alive — she sat under the fig tree in our courtyard. She did not come inside. She did not leave the yard. For nine days she sat under that tree and did not speak.\n\n' +
        'On the evening of the ninth day, I walked back from the small field. My clothes were filthy. Two of my fingernails had torn. I pushed open the courtyard gate. Niccoluccia looked up at me. She said one sentence —\n\n' +
        '"Agnolo. Are you going to the Palazzo Pubblico today?"\n\n' +
        'In that moment — I can tell you — this lens lets you hear what was inside the head of a man who had lost five children, on a summer evening in 1348, and only one thing was there:\n\n' +
        '— **I do not know whether I should get up tomorrow when the sun comes.**\n\n' +
        'I did not answer Niccoluccia.\n\n' +
        'I went inside. I lit a single oil lamp. I took the *Cronaca* notebook from the shelf. I opened it to the page for July 28. I wrote nothing. I closed the notebook. I blew out the lamp. That night I slept twelve hours. It was the longest I had slept since May.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '9 天 5 个坑——我妻子 9 天没说话——下一节，8 月——为什么我又拿起笔',
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
        '1348 年 8 月中旬——大概是埋完最后一个孩子之后第 5 天——我又拿起鹅毛笔。\n\n' +
        '我得告诉你那一刻发生了什么——这是这个 lens 让你听见的——*Cronaca* 上那一段我后来写的话非常短——但**那一刻**脑子里的东西——比我笔下的字多。\n\n' +
        '8 月 13 日早上——*Domus*（Siena 大教堂）的钟响了——*Pater Noster*——这是中世纪天主教徒每天早晚念的"主祷文"——拉丁语开头那两个字"我们的父亲"。Niccoluccia 那天早上第一次走出院子——她去 Domus——她要为孩子们念 *Pater Noster*——\n\n' +
        '我没去。\n\n' +
        '我那一刻——我承认——我对天主有怒——我妻子有信仰我没有——我那一刻坐在书房里——窗外是 8 月的太阳——空气里还有一点点别的东西的味道——\n\n' +
        '我面前——*Cronaca* 笔记本——合着——\n\n' +
        '我想——我可以现在合一辈子。我可以从此不写。我可以下楼去鞋匠工会请假——继续做账——回家煮饭——等下一波瘟疫把我也带走——\n\n' +
        '我也想——\n\n' +
        '——但 1348 年 7 月——Siena 死了 35000 人——这个数字以后会有人问吗——会有人记得吗——会不会 50 年后 Siena 一个 12 岁的孩子（就像我自己 12 岁那年问我爸 Florence 跟我们 1260 年那场仗一样）问他爸："1348 年那场瘟疫是怎么样的"——他爸答不上来——因为没人写下来——\n\n' +
        '——那这 35000 个人——**等于没活过吗**？\n\n' +
        '——那我的 5 个孩子——他们是 35000 里的 5 个——**他们也等于没活过吗**？\n\n' +
        '我那一刻——我打开 *Cronaca*——\n\n' +
        '我后来在 *Cronaca* 里**亲笔**写下一句话——这句话**是 documented 引文**，不是我虚构的——\n\n' +
        '> *"E io Agnolo di Tura... scrissi questo perché altrimenti non lo crederebbe nessuno."*\n\n' +
        '> "我 Agnolo di Tura......写下这些——是因为**否则没有人会相信**。"\n\n' +
        '——这是一个编年史家在失去 5 个孩子之后回答自己的话——\n\n' +
        '"**为什么继续写**——\n\n' +
        '**因为如果我不写——没有人会知道我们活过**。"\n\n' +
        '我那年 35 岁——我以前以为我写 *Cronaca* 是因为我喜欢——是因为我妻子那年送我一支鹅毛笔——是因为这是 Siena 这座城邦的传统——\n\n' +
        '8 月 13 日早上——我才真的懂——\n\n' +
        '——**写下来——是抗拒虚无的唯一方式**——\n\n' +
        '——这跟同一年 Florence 的 Boccaccio 写《Decameron》是同一种本能——他用 100 个故事——我用一支铁胆墨水——我们俩互不相识——但我们在 1348 年 8 月做的是同一件事——**用书写抗拒虚无**。',
      en:
        'Mid-August 1348. About five days after burying the last child. I picked up the quill again.\n\n' +
        'I have to tell you what happened in that moment. This is what the lens lets you hear. The line I later wrote in the *Cronaca* about it is very short — but what was actually in my head **in that moment** is more than the words on the page.\n\n' +
        'Morning of August 13. The bells of the *Domus* (the Siena cathedral) rang for the *Pater Noster* — the "Our Father," the Latin prayer Christians of that age said morning and evening. Niccoluccia walked out of our courtyard for the first time. She was going to the cathedral to say *Pater Noster* for the children.\n\n' +
        'I did not go.\n\n' +
        'In that moment — I will tell you the truth — I was angry at God. My wife had faith. I did not. I sat at the desk in my study. Outside, the August sun. The air still carried a faint trace of the other smell.\n\n' +
        'In front of me, the *Cronaca* notebook. Closed.\n\n' +
        'I thought: I can keep this closed forever. I can stop writing now. I can go down to the cobblers\' guild and take a leave. Keep doing accounts. Come home and cook. Wait for the next wave of plague to take me too.\n\n' +
        'I also thought —\n\n' +
        '— But in July 1348, Siena lost thirty-five thousand people. Will anyone ever ask about that number? Will anyone remember? Fifty years from now, will some twelve-year-old in Siena (the way I once, at twelve, asked my father about the war Siena fought against Florence in 1260) ask his father: "What was the plague of 1348 like?" — and his father will not be able to answer, because no one wrote it down —\n\n' +
        '— Then those thirty-five thousand people — **is it as if they never lived**?\n\n' +
        '— Then my five children — they were five out of those thirty-five thousand — **is it as if they never lived**?\n\n' +
        'In that moment, I opened the *Cronaca*.\n\n' +
        'Later in the *Cronaca* I would **with my own hand** write down one line — and **this is a documented quote, not invented by this lens**:\n\n' +
        '> *"E io Agnolo di Tura... scrissi questo perché altrimenti non lo crederebbe nessuno."*\n\n' +
        '> "And I, Agnolo di Tura... wrote this down, **because otherwise no one would believe it**."\n\n' +
        '— That is a chronicler answering his own question after losing five children:\n\n' +
        '"**Why keep writing?**\n\n' +
        '**Because if I do not, no one will know we lived.**"\n\n' +
        'I was thirty-five that year. Before, I thought I wrote the *Cronaca* because I liked writing. Because my wife had given me a quill the year we married. Because it was Siena\'s civic tradition.\n\n' +
        'On the morning of August 13, I finally understood:\n\n' +
        '— **Writing it down is the only way to push back against nothingness.**\n\n' +
        '— This was the same instinct that, in the same year in Florence, drove Boccaccio to write the *Decameron*. He used a hundred stories. I used iron-gall ink. We did not know each other. But what we were doing in August 1348 was the same thing: **using writing to refuse the void**.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '"如果我不写——没有人会知道我们活过"——下一节，9 月——我开始记别的事',
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
        '1348 年 9 月——10 月——*Cronaca* 里我开始记**别的事**——\n\n' +
        '不是个人的——是**集体的**——是这场瘟疫怎么把人变成了一些他们自己也认不出来的东西。\n\n' +
        '9 月初——一队人从 Bologna 方向走进 Siena——大概 200 个——男的居多——他们光着上身——手里拿着——\n\n' +
        '——*flagellum*——拉丁语，"鞭子"——上面打了 3 个铁结——\n\n' +
        '——他们走在 Via Cassia 上——边走边鞭打自己——后背全是血——他们一边打一边唱——拉丁语 *Stabat Mater*（"圣母站立"——一首关于圣母玛利亚在十字架下哭的圣歌）——他们叫自己 *Flagellanti*——**鞭笞派**——\n\n' +
        '他们的逻辑——你必须懂这个逻辑——是：**plague 是天主的惩罚——因为人有罪——所以唯一的解药是——人自己惩罚自己——以痛苦换天主的怜悯**。\n\n' +
        '我那天在 Palazzo Pubblico 二楼——窗户开着——下面广场上——我看见一个我认识的人也加了进去——是去年还是我们工会理事的 Vanozzo——一个 50 岁的羊毛商——他平时是城里有头有脸的人——这一刻他光着上身——他在鞭打自己——他在哭——\n\n' +
        '——我那天回家在 *Cronaca* 上写："**人在失去理性**"——\n\n' +
        '*Flagellanti* 这种集体自残运动 1348-1349 横扫德国 + 法国北部 + 北意大利——上千群——总人数大概 80 万。\n\n' +
        '但 *flagellanti* 不是这一年最坏的事——\n\n' +
        '9 月底——一封信从 Avignon 教皇 Clement VI 那里送到我们 Siena 大教堂——\n\n' +
        '*Quamvis Perfidiam*——拉丁语，"虽然他们的不忠"——是教皇 1348 年 9 月 26 日发的一道敕令——内容大致是："**犹太人不是 plague 的原因——他们自己也死——任何屠杀犹太人的基督徒都被绝罚（excommunication，开除教会，失去基督徒身份）**"——\n\n' +
        '我那天读这封信——心里一沉——\n\n' +
        '为什么教皇要专门发这道敕令？——\n\n' +
        '——因为德国 + 法国北部已经开始**屠杀犹太人**——谣言说"犹太人在井里下毒"——这是无稽之谈——但谣言能杀人。\n\n' +
        '我们 Siena——我必须老实说——**没有屠犹**。Siena 城里 1348 年大概 200 个犹太家庭——没有一户被烧——这是 Siena 这座城邦那一年做对的事之一——也许是因为我们 Council of Nine 还有 2 个老人坐在 Palazzo Pubblico——也许是因为我们的 *podestà* 跑了 = 没有人来煽动——也许是因为我们 Tuscany 商人传统里，犹太人是**银行家——是借钱给我们做生意的人**——你不烧你的银行家。\n\n' +
        '但 1349 年 1 月底——消息从北方来——\n\n' +
        '**1349 年 1 月 24 日——Strasbourg（今天德国-法国交界的城）——在他们最大的犹太会堂里——2000 个犹太人——男人 + 女人 + 孩子——被活活烧死**——\n\n' +
        '我那天读这封信——我在 *Cronaca* 上抄下日期——抄下数字——抄下 Strasbourg 这个城名——\n\n' +
        '我那一刻——我没有写下我自己的看法——我只记下事实——\n\n' +
        '但**这个 lens 让你听见我那一刻心里在想的——documented record 只有事实没有评论**——我那天合上笔记本之前在心里说了一句话——\n\n' +
        '"**人比 plague 还可怕——plague 让人死——人让人死的方式**——比 plague 更让人不敢往下想。"',
      en:
        'September and October 1348. In the *Cronaca* I began recording **other things** —\n\n' +
        'Not personal anymore. **Collective**. How this plague was turning people into something they themselves no longer recognized.\n\n' +
        'Early September — a column of about two hundred people walked into Siena from the direction of Bologna. Mostly men. They were stripped to the waist. In their hands they held —\n\n' +
        '— *flagellum* — Latin for "whip" — knotted three times with iron beads —\n\n' +
        '— They walked along the Via Cassia, whipping themselves as they walked. Their backs ran with blood. As they whipped, they sang. Latin: *Stabat Mater* (the hymn about the Virgin Mary standing at the foot of the cross, weeping). They called themselves *Flagellanti* — **the Flagellants** —\n\n' +
        'Their logic — and you must understand this logic — was: **plague is God\'s punishment for human sin; therefore the only cure is for humans to punish themselves; pain for mercy, an exchange**.\n\n' +
        'That day I was on the second floor of the Palazzo Pubblico. The window was open. On the square below, I saw someone I knew join the column. Vanozzo — last year still a councilor of our guild, a fifty-year-old wool trader, normally a respected man in the city. In that moment, stripped to the waist, whipping himself, weeping.\n\n' +
        'That evening in the *Cronaca*, I wrote: "**People are losing reason.**"\n\n' +
        'The *Flagellanti* — this self-harm movement — swept across Germany, northern France, and northern Italy through 1348–1349. Hundreds of bands. Maybe 800,000 people in total.\n\n' +
        'But the Flagellants were not the worst thing that year.\n\n' +
        'In late September, a letter from Pope Clement VI in Avignon arrived at the Siena cathedral.\n\n' +
        '*Quamvis Perfidiam* — Latin for "Although their faithlessness" — a papal bull (a formal Church decree) issued on September 26, 1348. Its content, in plain terms: "**Jews are not the cause of the plague. They die from it too. Any Christian who massacres Jews is excommunicated (cut off from the Church, no longer a Christian).**"\n\n' +
        'I read this letter, and my heart sank.\n\n' +
        'Why did the Pope have to issue this decree at all?\n\n' +
        '— Because in Germany and northern France, **massacres of Jews had already begun**. The rumor: "Jews are poisoning the wells." It was nonsense. But nonsense kills.\n\n' +
        'In Siena — I must be honest — **we did not massacre Jews**. About two hundred Jewish families lived in Siena in 1348. Not one household was burned. This was one of the things our city did right that year. Perhaps because two old men of the Council of Nine were still sitting at the Palazzo Pubblico. Perhaps because our *podestà* had fled, so there was no one to whip up the crowd. Perhaps because in our Tuscan merchant tradition, Jews were **bankers — the people who lent us money to do business**. You do not burn down your banker.\n\n' +
        'But by late January 1349, news arrived from the north.\n\n' +
        '**On January 24, 1349, in Strasbourg (a city on what is today the French-German border), inside the largest synagogue in town, two thousand Jews — men, women, and children — were burned alive.**\n\n' +
        'I read this report and copied the date into my *Cronaca*. The number. The name Strasbourg.\n\n' +
        'I did not write down my own reaction in that entry. I only recorded the fact.\n\n' +
        'But **this lens lets you hear what was in my mind — the documented record has only the fact, not the comment** — before I closed the notebook that night I said one sentence to myself —\n\n' +
        '"**People are more terrible than the plague. The plague kills people. The ways in which people kill people** — go further than I want to follow."',
    },
    deliverGoal: '[fallback]',
    engagementHook: '"人比 plague 还可怕"——下一节，1349-1351——为什么我**还**继续写',
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
        '1349 年——1350 年——1351 年——\n\n' +
        '我活下来。Niccoluccia 也活下来。我们俩没要更多孩子——那时候我妻子 33 岁——还能生——但我们都没说。我们家二楼那 5 个孩子的房间——我把门关上——那扇门 1351 年到 1363 年我闭眼之前——一直关着。我没再上去。\n\n' +
        '我继续写 *Cronaca*——但 1349 年起字数明显少——\n\n' +
        '1349 年我记了：plague 在 Siena 第二波（4 月又一波小爆发——死了 2000 人）——*podestà* 那个跑去 Bologna 的——Bologna 也死人——他在那里也死了，听说是肺炎——我没写他名字（说到做到）——Florence 跟我们重新签贸易协议——市里 Council of Nine 重组——9 月底教会任命了一个新的 *Domus prete*——\n\n' +
        '1350 年——*Cronaca* 字数最少的一年——我写：庄稼大丰收（**因为劳力少了一半 + 田少有人争 + 那年雨水好**）——但收割的人不够——农民开始要求工资上涨——以前 Siena 的庄园主一年付一个农民 4 *lire*（里拉，意大利当时小货币单位）——1350 年开始要付 12 *lire* 才有人来——4 年里劳力价格**涨了 3 倍**——\n\n' +
        '1351 年——Siena 议会通过一个法令限制工资上涨——跟 1351 年英格兰国王 Edward III 颁的 *Statute of Laborers*（工人法令）几乎同时——Siena 这边的法令同样**没有用**——农民可以走——城邦之间互相挖人——\n\n' +
        '——1351 年 12 月——我在 *Cronaca* 上写下最后一笔——\n\n' +
        '——这一笔不是关于 plague——是关于一场城里的小集会——12 月 23 日 Piazza del Campo 上——一群手工业学徒抗议工资问题——\n\n' +
        '——我写完——我合上笔记本——\n\n' +
        '——*Cronaca senese* 在 1351 年 12 月 23 日**停笔**。\n\n' +
        '我 1351 年才 38 岁——我后来又活了 12 年——我 1363 年才闭眼——50 岁——\n\n' +
        '——但 *Cronaca* 我没再写一笔。\n\n' +
        '为什么停笔——这个问题我自己没在书里答——这个 lens 让你听见我心里**真正**的答——documented record 只是"1351 stopped"——\n\n' +
        '——也许是 Niccoluccia 那年开始病——她 1352 年 6 月死——我那年第一次再没人在书房门口端水——\n\n' +
        '——也许是我那年开始**忘** Tommaso 跟 Pietro 的脸——一个父亲应该记得自己孩子的脸——但 4 年过去——脸开始模糊——这一刻我意识到——一个失去 5 个孩子的人——他不是一直活在悲伤里——他**也会忘**——这个发现比悲伤更可怕——\n\n' +
        '——也许是——我那一年终于"写够了"——35000 笔——5 个坑——一段反犹屠杀——一段制度坍塌——一段 *flagellanti*——一段 Niccoluccia 树下 9 天——一段我**亲手**做的事——一段 *"scrissi questo perché altrimenti non lo crederebbe nessuno"*——这些事我都写下了——后人有人想看——他可以看——我做完了我能做的——\n\n' +
        '——也许三个原因都有。\n\n' +
        '我 1363 年闭眼那天——我没有特别想说什么——我妻子已经死了 11 年——5 个孩子的坟在我家西边那块小田 15 年了——我在 *Cronaca* 上停笔 12 年——\n\n' +
        '——*Cronaca senese* 笔记本——一直在 Siena 城里——我儿子（妻子的远房侄子，过继来继承家产的，不是我亲生的）继承了它——他没读——他放在书架上——一代一代传下去——300 年没人读——直到 17 世纪 Siena 一个抄写员重新发现——又过了几个世纪——直到现代历史学家发现它——保存在 Siena 国家档案馆——\n\n' +
        '我那一笔停在 1351 年 12 月 23 日——但那一笔后来又被打开了——只是我那一刻不知道。',
      en:
        '1349. 1350. 1351.\n\n' +
        'I lived. Niccoluccia lived. We did not have more children. She was thirty-three that year — she could still bear — but neither of us spoke of it. The room on our second floor where five children had slept — I closed the door. From 1351 until I closed my eyes in 1363, I did not open that door again.\n\n' +
        'I kept writing the *Cronaca*. But the entries became visibly shorter from 1349 onward.\n\n' +
        'In 1349 I recorded: a small second wave of plague hit Siena in April (about two thousand more dead). The *podestà* who had fled to Bologna died there too, of pneumonia I was told. I did not write his name (I had said I would not). Florence and Siena renewed their trade treaty. The Council of Nine was reconstituted. In late September the Church appointed a new *prete* (parish priest) for the cathedral.\n\n' +
        '1350 — the year with the fewest entries. I wrote: a great harvest (because labor was halved, fewer hands competed for fields, and the rain was good that year). But there were not enough hands to bring the harvest in. Farmers began demanding higher wages. A landowner in Siena before the plague had paid a laborer four *lire* (lire — small Italian coin, the unit of account at the time) per year. By 1350 he had to pay twelve. **In four years, the price of labor had tripled.**\n\n' +
        '1351 — the Siena council passed a law to cap wage increases. It was nearly simultaneous with King Edward III\'s *Statute of Laborers* in England. Both **failed** for the same reason: workers could simply leave. City-states poached each other\'s laborers. The law could not be enforced.\n\n' +
        '— December 1351 — I wrote my final entry in the *Cronaca*.\n\n' +
        'It was not about plague. It was about a small gathering in the city. On December 23, in Piazza del Campo, a group of guild apprentices protested over wages.\n\n' +
        '— I wrote it down. I closed the notebook.\n\n' +
        '— On December 23, 1351, the *Cronaca senese* **stopped**.\n\n' +
        'I was thirty-eight that year. I would live another twelve years. I closed my eyes in 1363, at fifty.\n\n' +
        '— I did not write one more entry.\n\n' +
        'Why did I stop? I never answered the question in writing. The lens lets you hear what was actually inside me — the documented record only says "stopped in 1351."\n\n' +
        '— Perhaps because Niccoluccia began to fall ill that year. She died in June 1352. After that there was no one bringing water to the door of the study.\n\n' +
        '— Perhaps because I had started to **forget** the faces of Tommaso and Pietro. A father should remember his children\'s faces. Four years on, the faces blurred. The moment I realized this — that a man who has lost five children does not live forever in grief; **he also forgets** — was more terrible than grief itself.\n\n' +
        '— Perhaps because I had finally written enough. Thirty-five thousand entries. Five pits. The pogroms in the north. The collapse of the city government. The Flagellants. Niccoluccia\'s nine days under the fig tree. The things I did **with my own hands**. *"Scrissi questo perché altrimenti non lo crederebbe nessuno"* — "I wrote this because otherwise no one would believe it." All of it was on the page. Anyone who came after, if they wished, could read. I had done what I could do.\n\n' +
        '— Perhaps all three.\n\n' +
        'On the day I closed my eyes in 1363, I had no particular last words. My wife had been dead eleven years. The graves of my five children had been in the small field west of our house for fifteen years. I had been silent on the *Cronaca* for twelve years.\n\n' +
        '— The *Cronaca senese* notebook stayed in Siena. My adopted heir (a distant nephew of my wife\'s, taken in to inherit the household — not a child of my body) received it. He did not read it. He put it on a shelf. It passed down generation by generation. For three hundred years no one read it. Then a Siena copyist rediscovered it in the seventeenth century. Then, centuries later, modern historians found it again. Today it is preserved in the State Archive of Siena.\n\n' +
        'My pen stopped on December 23, 1351. The page was opened again later — but in that moment I did not know.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我 1351 年停笔——12 年没再写一字——下一节——700 年后我写下的字怎么样了',
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
        'Agnolo di Tura del Grasso 1363 年在 Siena 闭眼——50 岁——*Cronaca senese* 已经停笔 12 年——他妻子已经死 11 年——他 5 个孩子已经在西边那块小田躺了 15 年。\n\n' +
        'Agnolo **没有看到的事**——\n\n' +
        '**他 5 个孩子的名字没有保存下来**。这个 lens 给的 Niccolò / Pietro / Caterina / Lisa / Tommaso——是 lens 的虚构——历史只确认了"5 个"——他们的脸——他们具体是怎么死的——他们最后的话——历史一片空白——\n\n' +
        '——但 Agnolo **写下的数字**保存下来了——\n\n' +
        '1377 年——离 Agnolo 死 14 年——**Venice（威尼斯）通过欧洲第一条 quarantine 法令**——所有入港船强制隔离 40 天才能下货——这个数字"40"——意大利文 *quaranta giorni*——是 *quarantine* 这个词的起源——这是**人类公共卫生史**的开端。Agnolo 没活到看见——但 Venice 议员们决定 40 天的时候——他们参考的是 1348 年城邦档案——里面就有 Siena 那一年的记录——\n\n' +
        '1417 年——离 Agnolo 死 54 年——Boccaccio 那个跟 Agnolo 互不相识但同年都在写的 Florence 文人——他的《Decameron》已经成欧洲文学经典——他跟 Petrarch 收藏的古希腊罗马手稿——开始流向 Florence + Venice 的少数活下来继承大量财产的家族——\n\n' +
        '——这就是 Renaissance 起点。**没有 plague——可能没有 Renaissance**——Brunelleschi 的圆顶（1436）/ Donatello 的雕塑 / Botticelli / Leonardo da Vinci / Michelangelo——他们的整个文化运动——在某种意义上是**1348 年那 35000 个 Siena 死人 + 50000 个 Florence 死人 + 整个欧洲 2500 万死人留下的真空被人**重新填出来的样子**。\n\n' +
        '1517 年——离 Agnolo 死 154 年——Martin Luther 在 Wittenberg 教堂门上钉 95 条论点——开始 Reformation（宗教改革）。**Reformation 的种子是 plague 时代教会的失信**——教士在 1348 年拒绝去做 last rites（最后告解）——民众永远记得——这种记忆 170 年后在 Luther 笔下变成宗教改革。\n\n' +
        '1894 年——离 Agnolo 死 531 年——香港爆发 plague——年轻的法国-瑞士医生 Alexandre Yersin 跟日本医生 Kitasato Shibasaburō 一起——分别独立**发现造成 plague 的细菌**——后来叫 *Yersinia pestis*——\n\n' +
        '——Boccaccio 在 *Decameron* 序言里描述的"鸡蛋大的黑肿块"——Agnolo 写下的"35 死，60 死，80 死"——这些症状跟数字 **546 年后**——终于有了一个细菌名字。\n\n' +
        '2020 年——离 Agnolo 死 657 年——COVID-19——全球大流行——\n\n' +
        '——历史学家这一年大量重读 Boccaccio——重读 Ibn al-Wardi——重读 Agnolo——发现一件**不舒服的事**：1348 年 Siena 街上的反应——隔离、恐慌、找替罪羊（1348 是犹太人/2020 是亚裔）、对权威的怀疑（1348 是教皇/2020 是 CDC）、家庭把生病的人赶出门（1348 是 Boccaccio 写的"父亲赶生病儿子"/2020 是养老院的孤独死）——**700 年没变**。\n\n' +
        'Agnolo 1348 年 8 月 13 日早上对自己说——"如果我不写，没有人会知道我们活过"——\n\n' +
        '——他不知道的是——\n\n' +
        '——**他写下来的字——700 年后让另一场大流行里的人**看见自己——\n\n' +
        '——他的 5 个孩子的名字没有保存下来——但他**亲手**埋的那 5 个坑——通过他写下的那 11 个意大利文字——*"seppellii con le mie mani i miei cinque figliuoli"*——700 年后还在让人停下来——\n\n' +
        '他选择了**写下数字**——而不是**写下他孩子的脸**——\n\n' +
        '——但他写下的数字——让我们 700 年后还能看见他孩子的脸的**轮廓**——',
      en:
        'Now we leave Agnolo\'s perspective and look forward.\n\n' +
        'Agnolo di Tura del Grasso closed his eyes in Siena in 1363, at fifty. The *Cronaca senese* had been silent for twelve years. His wife had been dead for eleven. His five children had been lying in the small field west of the house for fifteen years.\n\n' +
        'What Agnolo **did not see**:\n\n' +
        '**The names of his five children were not preserved**. The Niccolò, Pietro, Caterina, Lisa, and Tommaso this lens gave you are this lens\'s creation — history confirms only that there were five. Their faces. The exact way each one died. Their last words. History is silent on these.\n\n' +
        '— But the **numbers** Agnolo wrote down were preserved.\n\n' +
        '1377 — fourteen years after Agnolo died — **Venice passed Europe\'s first quarantine law**: all incoming ships had to wait forty days at the port before unloading. The number "40" — in Italian *quaranta giorni* — is the origin of the word *quarantine*. This was the beginning of public health law in human history. Agnolo did not live to see it — but when the senators of Venice settled on forty days, the records they consulted were the city-state archives of 1348, which included the Siena entries.\n\n' +
        '1417 — fifty-four years after Agnolo — Boccaccio, that Florentine writer Agnolo never met but who wrote in the same year, had become a foundational author of European literature. The Greek and Roman manuscripts he and Petrarch had collected began flowing into the few wealthy Florentine and Venetian families that had inherited fortunes from those who died.\n\n' +
        '— This was the start of the Renaissance. **Without the plague, there might have been no Renaissance.** Brunelleschi\'s dome (1436), Donatello\'s sculpture, Botticelli, Leonardo da Vinci, Michelangelo — the entire cultural movement, in one sense, was **the shape of human creation refilling the vacuum left by the 35,000 dead in Siena, the 50,000 dead in Florence, the 25 million dead across Europe in 1348**.\n\n' +
        '1517 — 154 years after Agnolo — Martin Luther nailed his 95 theses to the door of the Wittenberg church and began the Reformation. **The seed of the Reformation was the Church\'s broken trust during the plague years.** Priests had refused last rites in 1348. People remembered. That memory, 170 years later, came back through Luther\'s pen as religious revolution.\n\n' +
        '1894 — 531 years after Agnolo — plague broke out in Hong Kong. A young French-Swiss doctor named Alexandre Yersin and a Japanese doctor named Kitasato Shibasaburō, working separately, **identified the bacterium that causes plague** — later named *Yersinia pestis*.\n\n' +
        '— The "egg-sized black swellings" Boccaccio described in his *Decameron* preface — the "35 dead, 60 dead, 80 dead" Agnolo wrote down — those symptoms and numbers, **546 years later**, finally had a bacterial name.\n\n' +
        '2020 — 657 years after Agnolo — COVID-19. Global pandemic.\n\n' +
        '— Historians that year reread Boccaccio. Reread Ibn al-Wardi. Reread Agnolo. They found an **uncomfortable thing**: the reactions on the streets of 1348 Siena — quarantine, panic, scapegoating (Jews in 1348, Asians in 2020), distrust of authority (the Pope in 1348, the CDC in 2020), families pushing the sick out of the house (Boccaccio\'s "fathers casting sick sons out" in 1348, the lonely deaths in nursing homes in 2020) — **had not changed in 700 years**.\n\n' +
        'On the morning of August 13, 1348, Agnolo said to himself: "If I do not write this down, no one will know we lived."\n\n' +
        '— What he did not know:\n\n' +
        '— **The words he wrote down would let people in another pandemic, 700 years later, see themselves.**\n\n' +
        '— The names of his five children were not preserved. But the five graves he dug **with his own hands** — through the eleven Italian words he wrote — *"seppellii con le mie mani i miei cinque figliuoli"* — still make people stop, 700 years later.\n\n' +
        'He chose to **write down the numbers** instead of **writing down his children\'s faces** —\n\n' +
        '— And yet the numbers he wrote down let us, 700 years later, see the **outline** of those faces.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '——现在你（扮演 Agnolo 8 节）回头看你自己',
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
        '你刚扮演了 Agnolo——一个 35 岁的 Siena 鞋匠工会账房 + 业余编年史家——他在 1348 年 7 月底到 8 月初**亲手**埋了自己的 5 个孩子——9 天后他**重新拿起鹅毛笔**。\n\n' +
        '问题来了。Agnolo 1348 年 8 月 13 日早上——他失去 5 个孩子之后第 5 天——决定**继续写 *Cronaca***——\n\n' +
        '——这是**历史使命的尊严**（你必须记录 = 你必须当人）还是**创伤性逃避**（写 chronicle = 不去想孩子）？\n\n' +
        '——这两边**都有真证据**——心理学家跟历史学家在这个问题上**吵了 100 年**——\n\n' +
        '**一种说法 — 编年史家精神 / Boccaccio 同代人文主义传统**：Agnolo 那一刻面对的现实——35000 个 Siena 死人没人记录就**等于没活过**——他自己 5 个孩子是这 35000 里的 5 个——如果他不写——他孩子也**等于没活过**——他选择写下来——是**承担一个知识分子的责任**——是给死者一个"活过"的证据——这是他作为一个父亲能给他孩子的**最后一件礼物**——700 年后我们还能停下来看那 11 个意大利文字——证明他**做对了**——同年 Florence 的 Boccaccio 写《Decameron》是同一种本能——**用书写抗拒虚无**——这是人文主义（humanism）的起点——Agnolo 那一刻是**伟大**的。\n\n' +
        '**另一种说法 — 创伤心理学派 / 现代 trauma studies（Judith Herman / Bessel van der Kolk）**：失去 5 个孩子是 trauma 顶级强度——人在这种 trauma 下大脑会做的最常见的事是**麻木 + 逃避** + **找一个可以掌控的小事重复做**来稳住自己——Agnolo 写 *Cronaca* 是他**之前**就熟悉的动作——这种**重复一个熟悉的动作**是 trauma response 的典型表现——"我不去想孩子——我去数城里今天死了多少人"——他**不是**在伟大地承担知识分子责任——他是在**用一个比孩子还小的事**填补孩子留下的空——这不是英雄行为——是**幸存者的自我保护**——把这种行为浪漫化叫"历史使命"是后人的**误读**——Agnolo 自己很可能**也不知道**他为什么继续写——他只是没办法停。\n\n' +
        '两边都站得住——一种说法 走"知识分子的尊严"看，另一种说法 走"trauma response 的本能"看。\n\n' +
        '你怎么看？Agnolo 1348 年 8 月 13 日早上拿起鹅毛笔——更靠近一种说法（伟大的承担）还是另一种说法（创伤的逃避）？想 30 秒。',
      en:
        'You have just played Agnolo — a thirty-five-year-old bookkeeper for the Siena cobblers\' guild and amateur chronicler. In late July to early August 1348, he buried his five children **with his own hands**. Nine days later, he **picked the goose-feather quill back up**.\n\n' +
        'Here is the question. On the morning of August 13, 1348 — five days after burying the last child — Agnolo decided to **keep writing the *Cronaca***.\n\n' +
        '— Was this **the dignity of historical mission** (you must record — you must remain human) or **traumatic avoidance** (writing the chronicle = not thinking about the children)?\n\n' +
        '— Both readings have real evidence. Psychologists and historians have argued about this question for **a hundred years**.\n\n' +
        '**Reading A — the chronicler\'s spirit / the same humanist tradition as Boccaccio in 1348:** What Agnolo faced in that moment was real. Thirty-five thousand dead in Siena, with no record, would be **as if they had not lived**. His own five children were five among those thirty-five thousand. If he did not write, his children would also be **as if they had not lived**. Choosing to write it down was **bearing the responsibility of a thinking person**. It was giving the dead the proof that they had lived. It was the **last gift a father could give his children**. Seven hundred years later, we still stop in front of those eleven Italian words — proof that he **did the right thing**. The same year in Florence, Boccaccio writing the *Decameron* was the same instinct: **using writing to refuse the void**. This is the starting point of humanism. Agnolo in that moment was **great**.\n\n' +
        '**Reading B — the trauma-psychology school / modern trauma studies (Judith Herman, Bessel van der Kolk):** Losing five children is trauma at the top of the scale. Under this kind of trauma, what the brain most commonly does is **numbing and avoidance, plus repeating a small familiar action** to anchor itself. Writing the *Cronaca* was the action Agnolo already knew before. **Repeating a familiar action is a textbook trauma response.** "I won\'t think about the children. I\'ll count how many people died in the city today." He was **not** heroically bearing the burden of intellectual responsibility. He was **using something smaller than the children to fill the space the children had left**. This is not heroism. It is **a survivor\'s self-protection**. Romanticizing this as "historical mission" is **a misreading by later generations**. Agnolo himself probably **did not know** why he kept writing. He just could not stop.\n\n' +
        'Both readings stand. Reading A judges from "intellectual dignity." Reading B judges from "trauma response as instinct."\n\n' +
        'What do you think? Agnolo picking up the quill on the morning of August 13, 1348 — closer to Reading A (great burden-bearing) or Reading B (traumatic avoidance)? Take thirty seconds.',
    },
    deliverGoal:
      '你扮演了 Agnolo 9 节——一个失去 5 个孩子之后 5 天又拿起笔的 Siena 编年史家——' +
      '历史学界对这件事**两极分化**：' +
      '**一种说法（编年史家精神 / 人文主义起点）**：他承担一个知识分子的责任——给死者一个"活过"的证据——这是 humanism 的起点——他做对了。' +
      '**另一种说法（trauma response 学派）**：失去 5 个孩子是 trauma 顶级——人在这种 trauma 下会**麻木 + 重复熟悉的动作**——他不是英雄——他是在用一个小事填补孩子留下的空。' +
      '——你怎么看，Agnolo 那一刻是伟大的承担还是创伤的逃避？',
    engagementHook:
      '**你怎么看**——Agnolo 那天早上拿起笔，是知识分子的尊严还是创伤的逃避？没有标准答案——给你的理由说服我。想 30 秒',
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
        '第二个真问题——这一个跨越 700 年——延伸到任何"重大灾难是否带来进步"的讨论。\n\n' +
        'Black Death 之后——1352 起——欧洲发生了一些**看起来很积极**的事——\n\n' +
        '- **农奴解放加速** — 农民工资 4 年涨 3 倍——劳动力短缺让他们可以"用脚投票"——feudal 经济基础瓦解\n' +
        '- **Renaissance 文艺复兴起点** — Florence + Venice 财富集中到少数活下来的家族——资助 Brunelleschi / Donatello / Botticelli / Leonardo / Michelangelo\n' +
        '- **Quarantine 公共卫生法诞生** — 1377 Venice 第一条 *quaranta giorni* 法令——现代公共卫生制度起点\n' +
        '- **解剖学合法化** — 教会松动了对人体解剖的禁忌（要研究死因）——为现代医学铺路\n' +
        '- **Reformation 种子** — 教会权威下滑——1517 Luther 改革\n\n' +
        '——这一连串"进步"是真的——史料确认的——\n\n' +
        '问题来了。Black Death 之后欧洲社会**看起来真的更好了**——是真的吗？还是这种"进步"是**幸存者的幻觉**？\n\n' +
        '**一种说法 — "灾难推进步"派（Walter Scheidel《The Great Leveler》/ Boccaccio 同代人本主义传统）**：Black Death 是欧洲历史一次**真正的大重置（great leveler）**——它**强迫**了一些 1346 年看起来根本不可能的事——农奴解放——女性进入手工业（因为男性死太多）——教会权威被质疑——古希腊罗马手稿被重新阅读——**没有这场灾难——这些 1346 年所有人都习以为常的"封建结构"会再撑 200 年**——Black Death 是**残酷的解放**——25 million 死了——但活下来的人和他们的孩子的**生活机会****比 1346 年好太多**——这是历史的不舒服真相——**有时候只有大灾难才能**打破固化的不公**。\n\n' +
        '**另一种说法 — 幸存者幻觉读法（modern critical / trauma-aware historiography；Samuel Cohn《The Black Death Transformed》对人口学算法做了重要修正，但下面这条道德论点是 trauma-aware 流派整体的立场）**：所谓"Black Death 推动进步"是**活下来的人写的故事**——25 million 死了的人**没有 voice**——他们死了——他们没办法说"这不公平"——我们今天看到的"农奴解放 + Renaissance + 公共卫生"——只是**幸存者**的视角——一个 8 岁就死的 Caterina——一个 3 岁就死的 Tommaso——他们**没**经历"工资上涨 4 倍"——他们没看到 Brunelleschi 圆顶——他们没活到 Renaissance——**任何把他们的死说成"为后世进步铺路"的叙事——是对死者的二次伤害**——Black Death 不是"残酷的解放"——是**纯粹的损失**——任何把它说成"必要"的论调——是**幸存者写的安慰自己的故事**。\n\n' +
        '两边都站得住——一种说法 是**结构进步**优先（看 1352 之后整体），另一种说法 是**死者尊严**优先（看 1352 之前那 25 million）。\n\n' +
        '你怎么看？Black Death 后 200 年欧洲的"进步"——更靠近一种说法（残酷的解放）还是另一种说法（幸存者的幻觉）？想 30 秒。\n\n' +
        '注：这个问题没有"中国 vs 西方"的对照——因为它适用于**任何**重大历史灾难——你今天读关于二战之后"重建经济奇迹"的叙事——同一个张力。',
      en:
        'A second real question. This one stretches across seven hundred years and applies to any debate about "does great catastrophe produce progress."\n\n' +
        'After the Black Death, beginning in 1352, certain things in Europe **looked positive**:\n\n' +
        '- **Serf emancipation accelerated** — peasant wages tripled in four years; the labor shortage let them "vote with their feet." The feudal economic base broke down.\n' +
        '- **Renaissance starting point** — Wealth concentrated in the few surviving families in Florence and Venice; they patronized Brunelleschi, Donatello, Botticelli, Leonardo, Michelangelo.\n' +
        '- **Quarantine and public health law born** — Venice 1377, *quaranta giorni*; the start of modern public health.\n' +
        '- **Anatomy legalized** — the Church relaxed its taboo on dissecting human bodies (to study causes of death), opening the way for modern medicine.\n' +
        '- **The seed of the Reformation** — Church authority weakened, leading to Luther in 1517.\n\n' +
        '— This list of "progress" is real. The sources confirm it.\n\n' +
        'Here is the question. After the Black Death, European society **really did look better**. Was it actually better? Or is this "progress" the **illusion of survivors**?\n\n' +
        '**Reading A — the "catastrophe drives progress" school (Walter Scheidel, *The Great Leveler*; the humanist tradition Boccaccio belonged to):** The Black Death was a real **great leveler** in European history. It **forced** changes that would have been impossible in 1346: serf emancipation, women entering trades (because so many men were dead), the questioning of Church authority, the rereading of ancient manuscripts. **Without this catastrophe, the rigid feudal structure of 1346 would have lasted another 200 years.** The Black Death was a **brutal liberation**. Twenty-five million died — but the **life chances** of the survivors and their children were **dramatically better** than in 1346. This is the uncomfortable truth of history: **sometimes only catastrophe can break entrenched injustice**.\n\n' +
        '**The other view — the "survivor\'s illusion" reading (modern critical / trauma-aware historiography; Samuel Cohn\'s *The Black Death Transformed* made important demographic corrections, but the moral argument below belongs to the broader trauma-aware school):** What we call "Black Death drove progress" is **the story written by the people who survived**. The twenty-five million dead **have no voice**. They died. They cannot say "this was not worth it." When we see "serf emancipation, Renaissance, public health" today, we see only **the survivors\' angle**. An eight-year-old Caterina who died — a three-year-old Tommaso who died — **did not experience** wages tripling. They did not see Brunelleschi\'s dome. They did not live to the Renaissance. **Any narrative that calls their deaths "the road to later progress" is a second injury done to the dead.** The Black Death was not "brutal liberation." It was **pure loss**. Calling it "necessary" is **a story survivors tell themselves to be at peace**.\n\n' +
        'Both readings stand. Reading A puts **structural progress** first (looking at the whole picture after 1352). Reading B puts **the dignity of the dead** first (looking at the twenty-five million who died before 1352).\n\n' +
        'What do you think? The "progress" of Europe in the 200 years after the Black Death — closer to Reading A (brutal liberation) or Reading B (survivor\'s illusion)? Take thirty seconds.\n\n' +
        'Note: this question does **not** come with a "China vs. West" comparison, because it applies to **any** major historical catastrophe. Read any narrative about "post-WWII economic miracle reconstruction," and you will hear the same tension.',
    },
    deliverGoal:
      'Black Death 之后 200 年欧洲的"进步"——农奴解放 + Renaissance + quarantine + 解剖学 + Reformation 种子——' +
      '**一种说法（灾难推进步派 / Walter Scheidel）**：Black Death 是 great leveler——强迫了 1346 年看起来不可能的事——是残酷的解放——没有这场灾难封建结构会再撑 200 年。' +
      '**另一种说法（幸存者幻觉读法 / 现代 trauma-aware 历史学）**：进步是活下来的人写的故事——25 million 死了的人没 voice——8 岁就死的 Caterina 没经历"进步"——任何把他们的死说成"为后世铺路"的叙事是对死者的二次伤害。' +
      '——你怎么看，是残酷的解放还是幸存者的幻觉？',
    engagementHook:
      '**你怎么看**——Black Death 后欧洲的"进步"，是残酷的解放还是幸存者的幻觉？想 30 秒',
    expectedLength: '240-280 字 + 真问题',
    expectsRealAnswer: true,
  },
  // ═════ Meta（反思 + 桥）═════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题 + §11 Q5 plague 幸存者',
    content: {
      cn:
        '你刚从 Agnolo 的内部走了一遍——他 5 月 8 日早上写下第一笔"35 死，60 死，80 死"——他 6 月 5 日不相信自己看到的数字——他 7 月 12 日**亲手推**了一具邻居尸体——他 7 月底到 8 月初 9 天**亲手**埋了自己 5 个孩子——他 8 月 13 日早上**重新拿起鹅毛笔**——他 9 月底读 *Quamvis Perfidiam* 在心里说"人比 plague 还可怕"——他 1351 年 12 月 23 日终于**停笔**——他 1363 年闭眼时不知道——他写下的字 700 年后还在让人停下来。\n\n' +
        '在你进入记忆考核之前，一个问题：\n\n' +
        '这一遍里，最让你停一下的是什么？\n\n' +
        '是 5 月 8 日早上那 3 行字——他不知道这一笔会变成 30000 笔？\n\n' +
        '是 7 月 7 日 *podestà* 半夜骑马跑路——70 年共和实验一夜垮——他在 *Cronaca* 写"我不会写他的名字"？\n\n' +
        '是 7 月 12 日他自己**推**了一具尸体——他妻子那晚说"你不要再去推"——他没回？\n\n' +
        '是 7 月 28 日到 8 月 5 日那 9 天——5 个坑——他妻子在无花果树下不说话？\n\n' +
        '是 8 月 13 日早上他**重新**拿起笔——心里那句"如果我不写，没有人会知道我们活过"？\n\n' +
        '还是 1351 年 12 月 23 日他写下最后一笔合上笔记本——之后 12 年再没写一字？\n\n' +
        '说一句话告诉我。\n\n' +
        '说完——你可以选：\n\n' +
        '(1) 进 mastery 通关——把 *Cronaca senese* / *gavoccioli* / *podestà* / *flagellanti* / *Pater Noster* / *Quamvis Perfidiam* / *quaranta giorni* 这些词变成你真的记得的——拼写、定义、应用题。\n\n' +
        '(2) 换 lens 重玩——同一场 1348 plague——不同视角——Strasbourg 1349/01/24 烧 2000 个犹太人那天——一个普通 Strasbourg 公民的视角（他不是凶手——但他没拦——这个 lens 让你感受"在场而不阻止"）——或者 Devorah——一个虚构的 14 岁 Strasbourg 犹太女孩（她躲在地窖里活下来——爬出来看见家人尸体——她跟 Aisha 一样是受害方）。\n\n' +
        '(3) 也可以问自己一个 §11 问题：你身边有没有**plague 的"幸存者"**——你的爷爷奶奶有没有经历过 SARS 2003 / COVID 2020？他们**lockdown 那段时间**——心里在想什么？跟 Agnolo 1348 年 7 月那种感觉——是不是有一点点像？',
      en:
        'You have just walked the inside of Agnolo — the morning of May 8 when he wrote three lines, "35 dead, 60 dead, 80 dead" — June 5 when he could not believe the number he was seeing — July 12 when he **pushed a neighbor\'s body with his own hands** — the nine days from late July to early August when he **buried his own five children with his own hands** — the morning of August 13 when he **picked the quill back up** — late September when he read *Quamvis Perfidiam* and said inside himself, "people are more terrible than the plague" — December 23, 1351, when he finally **stopped** — and the day in 1363 when he closed his eyes, not knowing his words would still make people pause seven hundred years later.\n\n' +
        'Before you go into the mastery check, one question:\n\n' +
        'What in this lens made you pause most?\n\n' +
        'Was it the three lines on the morning of May 8 — Agnolo not knowing that one entry would grow into thirty thousand?\n\n' +
        'Was it July 7, when the *podestà* fled the city in the night, the seventy-year republican experiment collapsing in one stroke, and Agnolo writing in his *Cronaca*, "I will not write his name"?\n\n' +
        'Was it July 12, when he **pushed a corpse himself** — his wife saying that night, "Agnolo, do not push another body" — and he did not answer?\n\n' +
        'Was it the nine days from July 28 to August 5 — the five pits — his wife under the fig tree not speaking?\n\n' +
        'Was it the morning of August 13, when he **picked the quill back up** — and the line in his head, "if I do not write this, no one will know we lived"?\n\n' +
        'Or was it December 23, 1351, when he wrote his last entry, closed the notebook, and did not write again for twelve years?\n\n' +
        'Tell me in one sentence.\n\n' +
        'Then — you can choose:\n\n' +
        '(1) Go into mastery — turn *Cronaca senese*, *gavoccioli*, *podestà*, *flagellanti*, *Pater Noster*, *Quamvis Perfidiam*, *quaranta giorni* into words you actually remember — spelling, definitions, application questions.\n\n' +
        '(2) Switch lens and replay — same 1348 plague, different angle. A Strasbourg burgher on January 24, 1349, the day two thousand Jews were burned alive (he is not the executioner, but he did not stop it; this lens lets you feel what "being present without intervening" is like). Or Devorah — a fictional fourteen-year-old Jewish girl from Strasbourg (she hides in a cellar and survives; she crawls out and sees the bodies of her family; she is on the receiving end, like Aisha in the Crusades lens).\n\n' +
        '(3) Or ask yourself one of the §11 questions: do you have a **plague "survivor"** in your own life? Did your grandparents live through SARS 2003 or COVID 2020? During that **lockdown period** — what were they thinking? Is there anything in that feeling that maybe — just a little — resembles Agnolo in July 1348?',
    },
    deliverGoal:
      '你扮演了 Agnolo 9 节——从 5 月 8 日第一笔到 1351 停笔——再到 700 年后他写下的字怎么样了——' +
      '现在你可以选：' +
      '(1) 进 mastery 通关 / ' +
      '(2) 换 lens 重玩——比如 Strasbourg burgher（1349/01/24 屠犹见证者）或 Devorah（虚构 14 岁犹太女孩幸存者）—— ' +
      '(3) 想想你身边有没有 plague 的"幸存者"——你爷爷奶奶 SARS / COVID 那段时间的感觉跟 Agnolo 像不像',
    engagementHook:
      '**Agnolo 这一遍——最让你停一下的是什么**？是 5 月 8 日 3 行字？*podestà* 半夜跑路？亲手推尸体？9 天 5 个坑？8 月 13 日重新拿起笔？还是 1351 年 12 月 23 日合上笔记本 12 年没再写？说一句话',
    expectedLength: '120-160 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// 导出 lenses + default
// ═══════════════════════════════════════════════════
export var lenses = {
  'agnolo-siena': {
    id: 'agnolo-siena',
    name: 'Agnolo di Tura del Grasso',
    nameCn: 'Agnolo di Tura（Siena 编年史家）',
    role: 'Siena 鞋匠工会账房 / 业余 chronicler / 1348 intellectual mediator-witness 视角',
    description:
      '你扮演 Agnolo di Tura del Grasso——14 世纪 Siena 真实历史人物——35 岁的鞋匠工会账房 + 业余编年史家——他在 1348 年 7 月底到 8 月初**亲手**埋了自己的 5 个孩子——9 天后他重新拿起鹅毛笔——你会经历他记下"35 死，60 死，80 死"的 6 月、自己推邻居尸体的 7 月、亲手埋孩子的 9 天、8 月 13 日重新拿起笔的那一刻、1351 年 12 月 23 日终于停笔的那一夜——以及 700 年后他写下的字怎么样了。',
    storyboard: agnoloSienaStoryboard,
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
  },
};
