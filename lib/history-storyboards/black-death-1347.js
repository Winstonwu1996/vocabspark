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
        '我叫 Agnolo di Tura，人家叫我"胖子 Agnolo"——这是我自己写在编年史第一页的称呼。我在 Siena 鞋匠工会（Arte dei Calzolai）做记账员，每周二、周五去 Palazzo Pubblico（市政厅）查档做账。其余时间，我写这座城邦的编年史。\n\n' +
        '今天是周四。我刚到二楼办公室，一个传话员从港口跑上来，脸白。他说："Agnolo，昨晚有个商人从 Genoa（热那亚）回来。发烧。脖子下面长了一个鸡蛋大的黑肿块。今早死了。"\n\n' +
        '我那一刻坐着没动。\n\n' +
        '我们 4 月就听说了——Pisa 死人，Florence 整条街病倒。Council of Nine（九人议会）下令港口商船不准卸货、禁止集会。但太晚了：商人、羊毛、谷物照样进城，老鼠和跳蚤也照样。\n\n' +
        '我把这事全写下。日期：1348 年 5 月 8 日。死者：Bartolomeo di Niccolò，商人，来自 Genoa。鹅毛笔，黑铁胆墨水，三行字。\n\n' +
        '我那一刻不知道：这一笔，会变成 30000 笔。\n\n' +
        '接下来 12 节，你跟我走 1348 这一年：从这个早上一笔字，到我**亲手**做的事，到 1351 年终于停笔的那天，再到我死后我的字怎么活下来。',
      en:
        'Morning of May 8, 1348. Inside the city of Siena, in central Tuscany. I was 35.\n\n' +
        'My name is Agnolo di Tura. People call me "Agnolo the Fat" — the name I wrote on the first page of my chronicle. I am a bookkeeper for the Siena Cobblers\' Guild (Arte dei Calzolai); every Tuesday and Friday I go to the Palazzo Pubblico (the City Hall) to check records and balance accounts. The rest of my time, I write the Cronaca senese, a chronicle of this independent city-state.\n\n' +
        'Today was Thursday. I had just reached my second-floor office when a messenger ran up from the port, his face pale. He said: "Agnolo, last night a merchant came back from Genoa. Fever. A black swelling the size of an egg under his collarbone. He died this morning."\n\n' +
        'I sat without moving.\n\n' +
        'We had heard about it since April — people dead in Pisa, a whole street of Florence sick. Our Council of Nine (the nine-man committee that governs Siena) had ordered ships at the port not to unload cargo and banned public gatherings. But it was already too late: merchants, wool, and grain came in anyway. So did the rats and the fleas riding them.\n\n' +
        'I wrote it all down. Date: May 8, 1348. Dead man: Bartolomeo di Niccolò, merchant, from Genoa. Goose quill, black iron-gall ink. Three lines.\n\n' +
        'In that moment I did not know: this one entry would grow into thirty thousand entries.\n\n' +
        'Over the next twelve sections, you will walk with me through the year 1348: from this morning\'s single line, to the things I did **with my own hands**, to the day in 1351 when I finally put down the pen, and then to how my words survived after I died.',
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
        '我得告诉你 5 月 8 日之前的世界——那个会被毁掉的世界。\n\n' +
        '我 1313 年生在 Siena，我爸也是 Arte dei Calzolai 的人。那不是今天说的"工会"，而是 14 世纪意大利城邦的自治组织：鞋匠、皮革商、学徒一起定规则、选议员。Siena 那时自己治自己——从 1287 年起一个九人议会 Council of Nine 每两个月换一班治城，是中世纪欧洲走得最远的共和实验之一。\n\n' +
        '我手不灵，缝坏过鞋，师傅说："你不是这块料，但字写得好。"我 16 岁起做记账员，20 岁娶了 Niccoluccia。她不识字，结婚那年送我一支鹅毛笔："你给别人算账，回家也给这家写点什么。"那年我开始写 Cronaca senese。\n\n' +
        '到 1348 年 5 月，我们家有 5 个孩子（名字年龄是叙事补充，史料只确认数量）：老大 Niccolò，12 岁，跟外公学羊毛；老二 Pietro，10 岁，会爬无花果树；老三 Caterina，8 岁；老四 Lisa，6 岁，怕生；老五 Tommaso，3 岁，去年发烧又好了，我们以为最难的关过了。\n\n' +
        '5 月 8 日早上我穿过 Piazza del Campo（贝壳形中心广场，今天还在）回家。没想到三个月后这 5 个孩子都会死，我家这扇门再没人推开。',
      en:
        'I have to tell you what my world was before May 8, 1348 — the world that was about to be destroyed.\n\n' +
        'I was born in Siena in 1313; my father was also in the Arte dei Calzolai, the cobblers\' guild. That is not what we today call a "labor union." It was the kind of self-governing trade body medieval Italian city-states developed: cobblers, leather traders, and apprentices together set rules and elected representatives. Siena in those years governed itself — since 1287 it was run by the Council of Nine, a nine-man committee that rotated every two months, one of the most advanced experiments in republican government in medieval Europe.\n\n' +
        'My hands were clumsy; I ruined a pair of shoes, and my master said: "This is not your trade. But you write well." At sixteen I became a bookkeeper for the guild. At twenty I married Niccoluccia. She could not read; the year we married she gave me a goose-feather quill: "You keep accounts for others. Come home and write something for our own family." That year I began my Cronaca senese.\n\n' +
        'By May 1348, our family had five children (the names and ages here are narrative invention; the record only confirms there were five): eldest, Niccolò, twelve, learning the wool trade from his grandfather; Pietro, ten, who climbed the fig tree in our courtyard; Caterina, eight; Lisa, six, shy with strangers; and Tommaso, three, who had a bad fever last year and pulled through — we thought the worst was behind us.\n\n' +
        'On the morning of May 8, I crossed the Piazza del Campo (the shell-shaped main square, still standing today) on my way home. I did not know that three months later all five of these children would be dead, and the door to our house would never open again.',
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
        '6 月 3 日周二，我从市政厅回家，看见 Via di Città 上一个石匠倒在自家门口。他脖子下面那个肿块比鸡蛋还大，黑灰色，硬得像石头——意大利文叫 gavoccioli（脓包）。大概死了一两小时。\n\n' +
        '那晚我写下："**今日 Siena 死 35 人**"——从市政厅档案抄来的当日下葬数。我用阿拉伯数字 35，记账习惯。\n\n' +
        '6 月 4 日，下葬数：**60 人**。一夜翻了近一倍。\n\n' +
        '6 月 5 日，我没去市政厅。\n\n' +
        '我坐在书房，面前羊皮纸、鹅毛笔、铁胆墨水。我没写。一个编年史家的第一反应不是记录，是不相信。我反复想："这数字不对，一座城一夜不可能死 60 人，一定是把城外乡村算进来了。明天我亲自查。"\n\n' +
        '但 6 月 6 日早上，Niccoluccia 来叫我："下楼。巷子里 Lapo 家两个孩子昨晚一起死了。麦芽商 Berto 家死了三个。隔壁一家四口昨晚全长了 gavoccioli——"\n\n' +
        '我下楼，穿过院里那棵无花果树。Pietro 没在树上，他在我背后揪我袖子："爸，天主发疯了吗？"\n\n' +
        '我没回他。\n\n' +
        '我回书房坐下。不是怀疑了，是怕。鹅毛笔浸了三次墨才写下：6 月 6 日，Siena 死 80 余人。\n\n' +
        '写完我合上笔记本。那一年第一次想：这件事也许不是我能记完的。',
      en:
        'June 1348. Siena began to die.\n\n' +
        'Tuesday, June 3. On my way home I saw a stonemason collapsed in front of his own door on Via di Città. The swelling under his collarbone was bigger than an egg, dark gray, hard as stone. In Italian we called these gavoccioli (buboes; the swollen lymph nodes that mark this disease). He was probably an hour or two already gone.\n\n' +
        'That evening I wrote: "**Today in Siena, 35 dead.**" That was the day\'s burial count, copied from the city hall ledger. I used Arabic numerals (35) — habit of a merchant\'s accountant.\n\n' +
        'Wednesday, June 4. The burial count: **60 dead.** Almost double, in one night.\n\n' +
        'Thursday, June 5. I did not go to the Palazzo Pubblico.\n\n' +
        'I sat in my study — parchment, quill, iron-gall ink. I did not write. A chronicler\'s first instinct is **not** to record. It is **disbelief**. The thought turning over in my head: "This number is wrong. A city cannot lose sixty people in one night. The clerk must have mixed in the contado (the surrounding countryside). Tomorrow I will check the books myself."\n\n' +
        'But on the morning of June 6, Niccoluccia called me: "Come downstairs. Master Lapo down the alley lost two children last night, both at once. The malt-seller Berto lost three. The neighbors, a family of four, all had gavoccioli by last night."\n\n' +
        'I went down, past the fig tree. Pietro was not in it. He was behind me, pulling my sleeve: "Father, has God gone mad?"\n\n' +
        'I did not answer him.\n\n' +
        'Back in the study, it was not disbelief anymore. It was fear. I dipped my quill three times before I could write: **June 6, Siena, more than 80 dead.**\n\n' +
        'I closed the notebook. For the first time that year I thought: maybe this is not something I can finish recording.',
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
        '1348 年 7 月，tutti morti（意大利文，"全死了"）——那年 Siena 街上孩子学会的口头禅。\n\n' +
        '7 月初我去市政厅，门锁着：档案员一家昨夜全死，剩一个 14 岁学徒坐在木凳上不知该做什么。\n\n' +
        '7 月 7 日，我们的 podestà（市长，按 Siena 制度须从外城邦请）半夜带家眷骑马出北门逃了。我在 Cronaca 写："他走了，我不会写他的名字。"\n\n' +
        'Council of Nine 9 个议员，4 死 3 跑，剩 2 个老人坐在长凳上等死。Siena 70 年的共和实验，一个月内 institutional collapse（制度坍塌）。\n\n' +
        '尸体堆在门口没人收——平时收尸的慈善修会一半死一半逃。\n\n' +
        '7 月 12 日，我自己推了一具尸体：对面那个无花果小贩，我 5 月 8 日跟他点过头的那个。他 10 岁的儿子站在尸体边不会哭。我俩把他爸推上木车往城外墓园走。\n\n' +
        '墓园没有教士做最后告解，老神父也死了。坑是 fossa comune（共葬坑）：10 具一层盖薄土，再 10 具。\n\n' +
        '我回家身上一股味道。Niccoluccia 不让我进卧室，打了盆水："你以后别再去推。"\n\n' +
        '7 月底，Siena 一周死 5000 人，比去年一整年还多。那一周我只写一句："这一周人像虫子一样死，我记不下每个人。"',
      en:
        'July 1348. Tutti morti (Italian for "everyone dies"). That summer, Siena children chanted it in the street.\n\n' +
        'Early July, I went to the Palazzo Pubblico. My office door was locked: the clerk\'s whole family had died the previous night, and the only person left was a fourteen-year-old apprentice sitting on a wooden bench, not knowing what to do next.\n\n' +
        'July 7. Our podestà (the chief magistrate; by Siena custom he had to come from a different city-state to keep him impartial) fled in the night, riding out the north gate with his household. Later I wrote in the Cronaca: "**He left. I will not write his name.**"\n\n' +
        'The Council of Nine: nine members. Four dead, three fled, two old men sitting on the bench, waiting to die too. Siena, seventy years of republican experiment — in one month suffered **institutional collapse**.\n\n' +
        'Bodies piled at front doors. No one collected them; the corpse-cart men of the city\'s charitable brotherhood were half dead, half fled.\n\n' +
        'On July 12, I pushed a corpse with my own hands. It was the fig-seller across the street, the one I had nodded to on the morning of May 8. His ten-year-old son stood next to the body and could not cry. The two of us lifted his father onto a wooden cart and pushed it outside the walls toward the cemetery.\n\n' +
        'There was no priest to give last rites; the old parish priest was dead too. They had dug a fossa comune (mass grave): ten bodies in a layer, a thin layer of earth, another ten. Boccaccio, witnessing the same thing in Florence, called it "burying them as one stacks a layer cake."\n\n' +
        'I came home with a smell on my clothes that was not a normal smell. Niccoluccia did not let me into the bedroom. She brought me a basin of water: "You will not push another body."\n\n' +
        'By late July, Siena was burying five thousand people a week — more in one week than the city normally buried in an entire year. That week I wrote one sentence only: "**This week, people in Siena die like insects. I cannot write down each one.**"',
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
        '我后来写这件事只用一句意大利文，是黑死病文献里最锋利的几行：\n\n' +
        '> "E io, Agnolo di Tura, detto el grasso, soppellii con le mie mane cinque mei figliuoli **in una fossa**."\n\n' +
        '> "我，Agnolo di Tura，绰号胖子，亲手把五个孩子埋进一个坑（fossa comune，公共大坟）。"\n\n' +
        '"一个坑"背后，是我经历的那 9 天。\n\n' +
        '7 月 28 日，Tommaso（3 岁，最小）脖子根上一个肿块。Niccoluccia 没尖叫，只看了我一眼——那一眼我一辈子记得。\n\n' +
        '7 月 30 日 Tommaso 死，我在西边那块小田一锹一锹挖坑。7 月 31 日 Lisa 死，8 月 2 日 Caterina，8 月 3 日……\n\n' +
        '那 9 天我不会一天天写给你看，那不是尊重。5 个坑都是我自己挖、自己填。Niccoluccia 那 9 天只坐在无花果树下，不说话。\n\n' +
        '第 9 天傍晚我走回家，她抬头看我："你今天还去市政厅吗？"\n\n' +
        '我只想到一件事：**我不知道明天太阳出来要不要起来**。\n\n' +
        '我没回她，进屋翻开 Cronaca 到 7 月 28 日那页，什么都没写。',
      en:
        'Late July to early August 1348. Nine days. Inside my own house.\n\n' +
        'I would later write about this in my Cronaca in only one sentence — among the sharpest lines in the entire Black Death record:\n\n' +
        '> "E io, Agnolo di Tura, detto el grasso, soppellii con le mie mane cinque mei figliuoli **in una fossa**."\n\n' +
        '> "I, Agnolo di Tura, called the Fat, **buried my five children with my own hands in a single pit** (a fossa comune, the city\'s mass grave)."\n\n' +
        'Behind "a single pit" are the nine days I lived through.\n\n' +
        'Morning of July 28. Tommaso (three, the youngest) had a swelling at the base of his neck. Niccoluccia did not scream. She only looked at me once — that look I have remembered for the rest of my life.\n\n' +
        'July 30, Tommaso died, and I dug the pit myself, one shovel at a time, in the small field west of our house. July 31, Lisa died. August 2, Caterina. August 3 …\n\n' +
        'I will not break those nine days into separate scenes for you. That would not be respect. At the end, there were five pits, each one I dug and filled myself. Niccoluccia sat under the fig tree in our courtyard for nine days and did not speak.\n\n' +
        'On the evening of the ninth day, I walked back, and she looked up at me: "Are you going to the Palazzo Pubblico today?"\n\n' +
        'I could think of only one thing: **I do not know whether I should get up tomorrow when the sun comes.**\n\n' +
        'I did not answer her. I went inside, opened the Cronaca to the page for July 28, and wrote nothing.',
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
        '1348 年 8 月中旬，埋完最后一个孩子第 5 天，我又拿起鹅毛笔。\n\n' +
        '8 月 13 日早上，大教堂的钟响起 Pater Noster（"主祷文"，天主教徒每天念的拉丁祷文）。Niccoluccia 第一次走出院子，去为孩子们念。\n\n' +
        '我没去。我对天主有怒——她有信仰，我没有。我坐在书房，想：我可以从此不写，等下一波瘟疫带走我。\n\n' +
        '但整个 1348 年 Siena 死了 30000 人，约总人口一半。这数字以后有人记得吗？会不会 50 年后没人答得出"那场瘟疫是什么样的"？\n\n' +
        '那这 30000 个人等于没活过吗？我那 5 个孩子，也等于没活过吗？\n\n' +
        '我打开 Cronaca，亲笔写下一句，这是 documented 引文，不是虚构：\n\n' +
        '> "E io Agnolo di Tura... scrissi questo perché altrimenti non lo crederebbe nessuno."\n\n' +
        '> "我 Agnolo di Tura……写下这些，是因为否则没有人会相信。"\n\n' +
        '为什么继续写？因为我不写，没有人会知道我们活过。这早上我才真懂：写下来是抗拒虚无的唯一方式。\n\n' +
        '同年 Florence 的 Boccaccio 写《Decameron》也是同一种本能：他用 100 个故事，我用铁胆墨水，做同一件事。',
      en:
        'Mid-August 1348, five days after burying the last child, I picked up the quill again.\n\n' +
        'Morning of August 13. The bells of the cathedral rang for the Pater Noster, the "Our Father," the Latin prayer Christians of that age said every day. Niccoluccia walked out of our courtyard for the first time, to say it for the children.\n\n' +
        'I did not go. I was angry at God — my wife had faith, I did not. I sat at my desk and thought: I can stop writing now, keep doing accounts, and wait for the next wave of plague to take me too.\n\n' +
        'But over the whole of 1348, Siena lost thirty thousand people, about half the population. Will anyone remember that number? Fifty years from now, will anyone be able to answer "What was the plague of 1348 like?"\n\n' +
        'Then those thirty thousand people — is it as if they never lived? My five children — is it as if they never lived?\n\n' +
        'I opened the Cronaca and wrote one line with my own hand. This is a documented quote, not invented by this lens:\n\n' +
        '> "E io Agnolo di Tura... scrissi questo perché altrimenti non lo crederebbe nessuno."\n\n' +
        '> "And I, Agnolo di Tura... wrote this down, because otherwise no one would believe it."\n\n' +
        'Why keep writing? Because if I do not, no one will know we lived. That morning I finally understood: writing it down is the only way to push back against nothingness.\n\n' +
        'In the same year in Florence, the same instinct drove Boccaccio to write the Decameron. He used a hundred stories; I used iron-gall ink — the same thing.',
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
        '1348 年 9 月，我开始记集体的事：瘟疫怎么把人变成自己也认不出来的东西。\n\n' +
        '9 月初，约 200 人从 Bologna 走进 Siena，光着上身用带铁结的鞭子边走边抽自己，唱拉丁语 Stabat Mater。他们叫 Flagellanti（鞭笞派），逻辑是：plague 是天主对人罪的惩罚，解药就是人自己惩罚自己。这种自残 1348-1349 横扫德、法北、北意大利，约 80 万人。\n\n' +
        '但这不是那年最坏的事。\n\n' +
        '9 月底，教皇 Clement VI 从 Avignon 送来敕令 Quamvis Perfidiam（1348 年 9 月 26 日）："犹太人不是 plague 的原因，他们自己也死；屠杀犹太人的基督徒一律被绝罚（excommunication，开除教会）。"\n\n' +
        '他为什么专门发？因为德、法北已经开始屠犹——谣言说"犹太人在井里下毒"，无稽之谈但能杀人。\n\n' +
        'Siena 没有屠犹，约 200 个犹太家庭没一户被烧——也许因为犹太人是借钱给我们做生意的银行家。\n\n' +
        '但 1349 年 2 月 14 日，Strasbourg（今德法交界）城西犹太墓地的木堆里，2000 个犹太人被活活烧死。\n\n' +
        '我抄下日期、数字、城名，没写看法，但心里转过：人比 plague 还可怕——瘟疫让人死，人让人死的方式更可怕。',
      en:
        'September 1348. In the Cronaca I began recording collective things: how the plague was turning people into something they themselves no longer recognized.\n\n' +
        'Early September, about two hundred people walked into Siena from Bologna, stripped to the waist, whipping themselves with iron-knotted whips as they walked, singing the Latin Stabat Mater (the hymn of the Virgin weeping at the foot of the cross). They called themselves Flagellanti (the Flagellants). Their logic: plague is God\'s punishment for human sin, so the only cure is for humans to punish themselves. This self-harm movement swept Germany, northern France, and northern Italy through 1348–49 — maybe 800,000 people.\n\n' +
        'But that was not the worst thing that year.\n\n' +
        'In late September, Pope Clement VI in Avignon sent the Siena cathedral a papal bull, Quamvis Perfidiam (September 26, 1348): "Jews are not the cause of the plague. They die from it too. Any Christian who massacres Jews is excommunicated (cut off from the Church)."\n\n' +
        'Why did he have to issue it? Because in Germany and northern France, massacres of Jews had already begun. The rumor: "Jews are poisoning the wells." Nonsense — but nonsense kills.\n\n' +
        'Siena did not massacre Jews; not one of our roughly two hundred Jewish families was burned — perhaps because Jews were the bankers who lent us money to do business, and you do not burn your banker.\n\n' +
        'But on February 14, 1349, in Strasbourg (today on the French-German border), two thousand Jews were burned alive on a pyre in the Jewish cemetery west of the city.\n\n' +
        'I copied down the date, the number, the name. I did not write my reaction, but one sentence turned in my head: people are more terrible than the plague — the plague kills, but the ways people kill people are worse.',
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
        '1349 到 1351 年。\n\n' +
        '我活下来，Niccoluccia 也活下来，但没要更多孩子。二楼那 5 个孩子的房间我关上门，到死前没再上去。\n\n' +
        '我继续写 Cronaca，但 1349 年起字数明显少：plague 第二波（4 月又死 2000）；逃去 Bologna 的 podestà 在那里也死了。\n\n' +
        '1350 年庄稼大丰收，但收割的人不够。农民要求涨工资：从前一个农民一年 4 lire（里拉），1350 年要 12 lire——4 年劳力价格涨了 3 倍。\n\n' +
        '1351 年 Siena 议会立法限制涨工资，跟英格兰 Edward III 同年的 Statute of Laborers（工人法令）几乎同时——两边都没用，农民可以走。\n\n' +
        '1351 年 12 月 23 日，我写下最后一笔，是一群学徒抗议工资。Cronaca senese 从此停笔。\n\n' +
        '为什么停笔？也许是 Niccoluccia 1352 年死；也许是我开始忘 Tommaso 跟 Pietro 的脸——一个失去 5 个孩子的人也会忘，这比悲伤更可怕；也许是我写够了。\n\n' +
        'Cronaca 笔记本留在 Siena 没人读，300 年后被一个抄写员重新发现，今天保存在 Siena 国家档案馆。\n\n' +
        '我那一笔停在 1351 年，但后来又被打开，只是我那刻不知道。',
      en:
        '1349 to 1351.\n\n' +
        'I lived. Niccoluccia lived. We did not have more children. The room on our second floor where five children had slept — I closed the door and did not open it again until I died.\n\n' +
        'I kept writing the Cronaca, but the entries grew visibly shorter from 1349: a second wave of plague (April, two thousand more dead); the podestà who had fled to Bologna died there too.\n\n' +
        '1350 brought a great harvest, but not enough hands to bring it in. Farmers demanded higher wages: a laborer who had earned four lire (a small Italian coin) a year now wanted twelve — in four years the price of labor had tripled.\n\n' +
        'In 1351 the Siena council passed a law to cap wages, nearly simultaneous with King Edward III\'s Statute of Laborers in England — and both failed for the same reason: workers could simply leave.\n\n' +
        'On December 23, 1351, I wrote my final entry: a group of apprentices protesting over wages. The Cronaca senese stopped.\n\n' +
        'Why did I stop? Perhaps because Niccoluccia died in 1352; perhaps because I had started to forget the faces of Tommaso and Pietro — a man who has lost five children also forgets, which is more terrible than grief; perhaps because I had written enough.\n\n' +
        'The notebook stayed in Siena, unread, until a copyist rediscovered it three hundred years later. Today it is preserved in the State Archive of Siena.\n\n' +
        'My pen stopped in 1351 — but the page was opened again later, and in that moment I did not know.',
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
        '现在我们离开 Agnolo 的视角往后看。Agnolo 1363 年闭眼，5 个孩子的名字没保存下来（名字是这一遍的虚构，历史只确认"5 个"），但他写下的数字保存下来了。\n\n' +
        '1377 年，Venice 通过欧洲第一条 quarantine 法令：入港船隔离 40 天（quaranta giorni 正是 quarantine 的起源），公共卫生史就此开端。\n\n' +
        '约 1417 年，Boccaccio 的《Decameron》成了经典；他和 Petrarch 收藏的古希腊罗马手稿流向少数活下来的富裕家族——这是 Renaissance 起点。\n\n' +
        '1517 年，Martin Luther 钉出 95 条论点开始 Reformation，种子是教士 1348 年拒绝做最后告解的失信。\n\n' +
        '1894 年，Yersin 发现 plague 的病菌 Yersinia pestis——Agnolo 写的死亡数字 546 年后才有名字。\n\n' +
        '2020 年 COVID-19，历史学家重读 Agnolo，发现一件不舒服的事：1348 年的反应——恐慌、找替罪羊、怀疑权威、赶走病人——700 年没变。\n\n' +
        'Agnolo 那早上说："如果我不写，没有人会知道我们活过。"他写下的字，让 700 年后另一场大流行里的人看见了自己。',
      en:
        'Now we leave Agnolo\'s perspective and look forward. Agnolo closed his eyes in 1363. The names of his five children were not preserved (the names here are this lens\'s invention; history confirms only that there were five) — but the numbers he wrote down were.\n\n' +
        '1377: Venice passed Europe\'s first quarantine law — incoming ships had to wait forty days (Italian quaranta giorni, the origin of the word quarantine), the beginning of public health law.\n\n' +
        'Around 1417: Boccaccio\'s Decameron had become a classic, and the Greek and Roman manuscripts he and Petrarch collected flowed into the few wealthy families who survived — the start of the Renaissance.\n\n' +
        '1517: Martin Luther nailed up his 95 theses and began the Reformation; the seed was the Church\'s broken trust when priests refused last rites in 1348.\n\n' +
        '1894: Yersin identified the plague bacterium, Yersinia pestis — the death counts Agnolo wrote finally had a name, 546 years later.\n\n' +
        '2020: COVID-19. Historians reread Agnolo and found an uncomfortable thing: the reactions of 1348 — panic, scapegoating, distrust of authority, casting the sick out — had not changed in 700 years.\n\n' +
        'On that morning Agnolo said: "If I do not write this down, no one will know we lived." The words he wrote let people in another pandemic, 700 years later, see themselves.',
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
        '你刚扮演了 Agnolo——35 岁的 Siena 账房兼业余编年史家。他 1348 年亲手埋了 5 个孩子，9 天后又重新拿起鹅毛笔。\n\n' +
        '问题来了：8 月 13 日早上（埋完最后一个孩子第 5 天），他决定继续写 Cronaca。这是历史使命的尊严（必须记录 = 必须当人），还是创伤性逃避（写编年史 = 不去想孩子）？两边都有真证据，人们争了 100 年。\n\n' +
        '一种看法是：30000 个 Siena 死人没人记录就等于没活过，他 5 个孩子也在其中；他写下来是承担一个知识分子的责任，是给死者"活过"的证据，也是一个父亲能给孩子的最后礼物。700 年后我们还停下来看那 11 个意大利文字——这一刻他是伟大的。\n\n' +
        '另一种看法是：失去 5 个孩子是最重的创伤，人在这种打击下最常做的就是麻木、抓住一件熟悉的小事反复做来稳住自己。写编年史正是 Agnolo 早就熟悉的动作——"我不去想孩子，我去数今天死了多少人"。所以他不是在承担责任，而是用一件比孩子还小的事填补孩子留下的空。这不是英雄，是幸存者的自我保护；他自己也许不知道为什么写，只是停不下来。\n\n' +
        '两边都站得住——一种看重"知识分子的尊严"，一种看重"创伤下的本能"。\n\n' +
        '你怎么看？Agnolo 那早上拿起笔，更靠近伟大的承担，还是创伤的逃避？想 30 秒。',
      en:
        'You have just played Agnolo, a thirty-five-year-old Siena bookkeeper and amateur chronicler. In 1348 he buried his five children with his own hands, and nine days later he picked the quill back up.\n\n' +
        'Here is the question: on the morning of August 13, 1348 (five days after burying the last child), he decided to keep writing the Cronaca. Was this the dignity of historical mission (you must record = you must stay human), or traumatic avoidance (writing the chronicle = not thinking about the children)? Both readings have real evidence; people have argued about it for a hundred years.\n\n' +
        'One view: thirty thousand dead in Siena, with no record, would be as if they never lived — and his five children were among them. Writing it down was bearing the responsibility of a thinking person, giving the dead proof that they lived, the last gift a father could give his children. Seven hundred years later we still stop in front of those eleven Italian words — in that moment he was great.\n\n' +
        'The other view: losing five children is the most extreme trauma, and under that kind of blow the most common thing a person does is go numb and cling to one familiar small action to steady themselves. Writing the chronicle was exactly what Agnolo already knew how to do — "I won\'t think about the children; I\'ll count how many died today." So he was not heroically bearing a burden; he was using something smaller than the children to fill the space they left. Not heroism, but a survivor\'s self-protection — he himself may not have known why he kept writing, he just could not stop.\n\n' +
        'Both sides stand: one weighs "intellectual dignity," the other weighs "instinct under trauma."\n\n' +
        'What do you think? Agnolo picking up the quill that morning — closer to great burden-bearing, or traumatic avoidance? Take thirty seconds.',
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
        '第二个真问题——跨越 700 年，适用于任何"重大灾难是否带来进步"的讨论。\n\n' +
        'Black Death 之后，欧洲发生了一些看起来积极的事：农民工资 4 年涨 3 倍、农奴制松动；财富集中到活下来的家族资助了 Renaissance；教会权威下滑埋下 1517 年 Reformation 的种子。\n\n' +
        '问题来了：欧洲看起来真的更好——是真的更好，还是只是幸存者的幻觉？\n\n' +
        '一种看法是：Black Death 是一次真正的大重置，强迫了 1346 年看起来不可能的事——农奴解放、女性进入手工业、教会权威被质疑。没有它，僵化的封建结构可能还要再撑 200 年。它是残酷的解放：2500 万人死了，但活下来的人生活机会比 1346 年好太多——有时候只有大灾难才能打破固化的不公。\n\n' +
        '另一种看法是："灾难推动进步"是活下来的人写的故事。2500 万死者没有声音，说不出"这不值得"。8 岁就死的 Caterina、3 岁就死的 Tommaso，没经历工资上涨、没看到 Renaissance。把他们的死说成"为后世铺路"，是对死者的二次伤害。Black Death 是纯粹的损失。\n\n' +
        '两边都站得住——一种看重整体进步，一种看重那 2500 万死者的尊严。\n\n' +
        '你怎么看？更靠近残酷的解放，还是幸存者的幻觉？想 30 秒。',
      en:
        'A second real question — it stretches across seven hundred years and applies to any debate about whether great catastrophe brings progress.\n\n' +
        'After the Black Death, certain things in Europe looked positive: peasant wages tripled in four years and serfdom loosened; wealth concentrated in the surviving families funded the Renaissance; weakened Church authority planted the seed of the 1517 Reformation.\n\n' +
        'Here is the question: Europe really did look better afterward — was it actually better, or just the illusion of survivors?\n\n' +
        'One view: the Black Death was a real great reset. It forced changes impossible in 1346 — serf emancipation, women entering trades, the questioning of Church authority. Without it, the rigid feudal structure might have lasted another 200 years. It was a brutal liberation: twenty-five million died, but the survivors\' life chances were far better than in 1346 — sometimes only catastrophe can break entrenched injustice.\n\n' +
        'The other view: "catastrophe drives progress" is the story written by the people who survived. The twenty-five million dead have no voice; they cannot say "this was not worth it." An eight-year-old Caterina and a three-year-old Tommaso never saw wages rise or the Renaissance. Calling their deaths "the road to later progress" is a second injury to the dead. The Black Death was pure loss.\n\n' +
        'Both sides stand: one weighs the overall progress, the other weighs the dignity of those twenty-five million.\n\n' +
        'What do you think? Closer to brutal liberation, or survivor\'s illusion? Take thirty seconds.',
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
        '你刚从 Agnolo 的内部走了一遍：5 月 8 日第一笔"35 死，60 死，80 死"；7 月底 9 天亲手埋了 5 个孩子；8 月 13 日重新拿起笔；1351 年停笔——他写下的字 700 年后还让人停下来。\n\n' +
        '进记忆考核前，一个问题：这一遍最让你停一下的是哪一刻？是 8 月 13 日他重新拿起笔、心里那句"如果我不写，没有人会知道我们活过"，还是那 9 天、5 个坑、他妻子在无花果树下不说话？说一句话，为什么是它。\n\n' +
        '说完，你可以选：\n\n' +
        '(1) 进 mastery 通关——把 Cronaca senese / gavoccioli / podestà / flagellanti / Quamvis Perfidiam / quaranta giorni 变成你真的记得的词。\n\n' +
        '(2) 换视角重玩同一场 1348 plague：1349 年 2 月 14 日烧 2000 个犹太人那天的 Strasbourg 公民（不是凶手，但没拦）；或 Devorah——一个虚构的 14 岁犹太女孩，躲在地窖里活下来、爬出来看见家人尸体。\n\n' +
        '(3) 或问自己：你身边有没有 plague 的"幸存者"？你爷爷奶奶经历过 SARS 或 COVID 吗？lockdown 那段他们在想什么，跟 Agnolo 像不像？',
      en:
        'You have just walked the inside of Agnolo — the morning of May 8 when he wrote "35 dead, 60 dead, 80 dead"; the nine days when he buried his five children with his own hands; the morning of August 13 when he picked the quill back up; the day in 1351 when he stopped — his words still making people pause seven hundred years later.\n\n' +
        'Before the mastery check, one question: what in this lens made you pause most? Was it August 13, when he picked the quill back up and the line in his head — "if I do not write this, no one will know we lived" — or the nine days, the five pits, his wife under the fig tree not speaking? Tell me in one sentence, and why.\n\n' +
        'Then you can choose:\n\n' +
        '(1) Go into mastery — turn Cronaca senese, gavoccioli, podestà, flagellanti, Quamvis Perfidiam, quaranta giorni into words you actually remember.\n\n' +
        '(2) Switch lens and replay the same 1348 plague: a Strasbourg burgher on February 14, 1349, the day two thousand Jews were burned alive (not the executioner, but he did not stop it); or Devorah — a fictional fourteen-year-old Jewish girl who hides in a cellar, survives, and crawls out to see the bodies of her family.\n\n' +
        '(3) Or ask yourself: do you have a plague "survivor" in your own life? Did your grandparents live through SARS or COVID? During lockdown, what were they thinking — anything like Agnolo?',
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
        '1349 年 2 月 14 日早上，Strasbourg（斯特拉斯堡，今天法德边境的莱茵河西岸城邦）。我 38 岁。\n\n' +
        '我叫 Konrad，人家叫我"屠夫 Konrad"。我家 4 代住 Strasbourg，4 代都是屠夫。我是 Metzgerzunft（屠夫工会，德语区城邦的行业自治组织）的代表，也是市议会 11 个成员之一。\n\n' +
        '今天早上妻子 Margarete 给我端了一碗"出门汤"（Strasbourg 只有大事日子才熬）。我喝完，手在抖。不是冷——是因为我今天要去 Werd（韦尔德岛，城西一座小岛，犹太墓地就在那里）。\n\n' +
        '5 天前 2 月 9 日市议会已投票通过，我投了赞成票：市长 Schwarber 因反对被罢免；新班子发告示——"所有 Strasbourg 犹太人，男女老幼，5 天内集中到 Werd 岛"。今天是第 5 天。\n\n' +
        'Margarete 没问我去哪。她把 8 岁的 Wilhelm 抱在怀里让他别看我，只说一句："Heilige Maria 看着，你做你认为对的事，我不会问。"但这句话里有一个字她没说：\n\n' +
        '"回来"。\n\n' +
        '我穿上厚毛斗篷出门。雪。靴子在木板路上的声音清楚得像我心跳。\n\n' +
        '接下来 12 节，你跟我走 1349 年 2 月 14 日这一天，还有它之前 4 个月、之后 25 年。',
      en:
        'Morning of February 14, 1349. Strasbourg, a free city-state on the western bank of the Rhine, in what today is the French-German border region. I was thirty-eight.\n\n' +
        'My name is Konrad. People call me Konrad the Butcher. My family has lived in Strasbourg for four generations, all butchers. I am a representative in the Metzgerzunft (the Butchers\' Guild, a self-governing trade association common in German-speaking city-states) and one of the eleven members of the city council.\n\n' +
        'This morning my wife Margarete brought me "going-out soup," which Strasbourg women cook only on important days. I finished it. My hands were shaking — not from cold, but because today I had to go to Werd, a small island just west of the city where the Jewish cemetery sits.\n\n' +
        'Five days earlier, on February 9, the city council had voted, and I had **voted in favor**: the Bürgermeister (mayor) Schwarber had been removed for opposing it; the new leaders posted the order — "Every Jew in Strasbourg, men, women, children, must gather at Werd Island within five days." Today was the fifth day.\n\n' +
        'Margarete did not ask where I was going. She held Wilhelm (my son, eight) and told him not to look at me, and said only: "Heilige Maria (Holy Mary) is watching. Do what you think is right. I will not ask." But there was one word she did not say:\n\n' +
        '"Come back."\n\n' +
        'I put on my heavy wool cloak and went out. The snow. The sound of my boots on the plank road, clear as a heartbeat.\n\n' +
        'Over the next twelve sections, you will walk with me through February 14, 1349 — and the four months before it, and the twenty-five years after it.',
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
        '我得告诉你 2 月 14 日之前的世界——那个我今早喝着 Margarete 那碗汤时正在毁掉的世界。\n\n' +
        '我 1311 年生 Strasbourg，爸、爷爷、太爷爷都是屠夫——4 代。Strasbourg 那时不是法国不是德国，是 freie Reichsstadt（神圣罗马帝国"自由城邦"），自己治自己；议会把工会代表请进来，我 1346 年坐进了 Metzgerzunft 那把椅子。\n\n' +
        '我 1330 年娶 Margarete，她不识字但算账比我快。1340 年我们等了 10 年 Wilhelm 终于出生，我抱着他走出产房去了城北犹太人区（Judengasse，犹太巷）。\n\n' +
        '那里一家银匠铺，主人 Yitzhak ben Abraham 比我大 5 岁，我跟他做生意 8 年——屠夫工会的银扣、银针都从他那儿买。\n\n' +
        'Yitzhak 看见我抱着 Wilhelm 进门，拿出一对他提前打好的银鞋扣：一只刻 Margarete，一只刻 Konrad。他说："等 Wilhelm 学走路给他穿上。Strasbourg 的旧规矩——生子礼必须从一个**信得过的人**手里出来。"\n\n' +
        '信得过的人。这 5 个字 1340 年我没多想。9 年后 1349 年 2 月 14 日早上我喝完那碗汤，它回到脑子里，从那天起再没离开。',
      en:
        'I have to tell you about the world **before** February 14, 1349 — the world I was destroying this morning while I drank Margarete\'s soup.\n\n' +
        'I was born in Strasbourg in 1311; my father, grandfather, and great-grandfather were all butchers — four generations. In 1349 Strasbourg was not French and not German. It was a freie Reichsstadt, a "free imperial city" inside the Holy Roman Empire, meaning it governed itself; the council let trade-guild representatives sit, and I took the Metzgerzunft seat in 1346.\n\n' +
        'I married Margarete in 1330; she could not read, but she did sums faster than I could. We waited ten years for a child, and when Wilhelm was finally born in 1340, I walked out of the birthing room with him in my arms and went to the Judengasse (the Jews\' Lane), the Jewish quarter in the north of the city.\n\n' +
        'There was a silversmith\'s shop there owned by Yitzhak ben Abraham, five years older than me, with whom I had done business for eight years — every silver buckle and needle my guild needed.\n\n' +
        'When Yitzhak saw me carrying Wilhelm, he brought out a pair of silver shoe-buckles he had made in advance — one engraved Margarete, one Konrad. He said: "When Wilhelm learns to walk, fasten them on his shoes. There is an old custom here — the gift for a newborn must come from the hand of **a trustworthy person**."\n\n' +
        'A trustworthy person. In 1340 I did not think twice about it. Nine years later, after I finished Margarete\'s soup, it came back into my head and never left.',
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
        '1348 年秋天，Strasbourg 还安全，但 Rhineland（莱茵兰，莱茵河两岸）已经在传一件事。\n\n' +
        '9 月 18 日，城南集市，一个从 Basel（莱茵河上游城邦）回来的酒商 Hans 坐在我铺子台阶上喝啤酒。他说："Konrad——Basel 那边三个犹太人被抓拷打、承认了：犹太长老在 Toledo 配毒药，分发给欧洲犹太社区投井，要毁基督教世界——"\n\n' +
        '我笑了："你听过几个版本？上礼拜一个人说毒药从 Granada 来，前天另一个说从 Saxony 来，现在你说 Toledo。谣言每三天换一次发源地，你信哪个？"\n\n' +
        'Hans 说："我不信哪个具体的，但我信这件事的方向——犹太人有理由想毁我们，他们一直被压着，会找机会——"\n\n' +
        '我没接。回家路上我拐进 Judengasse 到 Yitzhak 铺子门口。他正在井边打水（犹太区有自己的井），递给我一个木瓢，自己先喝一口，问："你信那个谣言吗？"\n\n' +
        '我说："不信。"我把他井里的水喝了一大口。水是甜的——那口井是他爷爷 1280 年代挖的，全城最甜的几口之一。\n\n' +
        'Yitzhak 笑了："Margarete 上次买的银针线，下礼拜来取，我打折给你。"\n\n' +
        '我那天回家心里轻松，真的不信那个谣言。但我没意识到：不信，跟 5 个月之后还不信，是两件不一样的事。',
      en:
        'September 1348. Strasbourg was still safe, but along the Rhineland (the lands on both sides of the Rhine), one rumor was spreading.\n\n' +
        'On September 18, in the market square, a wine merchant named Hans, just back from Basel (a city-state on the upper Rhine), sat on the step of my shop drinking beer. He said: "Konrad — over in Basel, three Jews were arrested and tortured and confessed: Jewish elders in Toledo are mixing poison and distributing it to every Jewish community in Europe to pour into the wells — because the Jews want to destroy Christendom."\n\n' +
        'I laughed. "How many versions have you heard? Last week a man said the poison comes from Granada, three days ago another said Saxony, now you say Toledo. The rumor changes its source every three days. Which one do you believe?"\n\n' +
        'Hans said: "I don\'t believe any one source. But I believe the direction of the story — the Jews have reason to want to destroy us; they have been kept down so long; they will look for the chance."\n\n' +
        'I did not answer. On my way home I went into the Judengasse to Yitzhak\'s shop. He was at the well (the Jewish quarter had its own), passed me a ladle, drank first, and asked: "Do you believe the rumor?"\n\n' +
        'I said: "No," and drank a long pull from his well. The water was sweet — his grandfather had dug that well in the 1280s, one of the sweetest in Strasbourg.\n\n' +
        'Yitzhak smiled: "Those silver needles Margarete bought? Come get them next week, I\'ll give you a discount."\n\n' +
        'I went home light-hearted. I truly did not believe that rumor. But I did not realize: not believing, and still not believing five months later, are two different things.',
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
        '1348 年 12 月 11 日，Strasbourg 这年最冷的一夜。Margarete 织毛袜时突然说："Konrad——隔壁 Hans 家的小 Klaus 病了。"\n\n' +
        '隔壁。Klaus 才 4 岁，前天还跑到我们院子跟 Wilhelm 玩雪。我问："什么病？"她说："发烧、咳嗽。Hans 老婆今天哭着来借蜂蜜，说 Klaus 脖子下面起了个红疙瘩还不大但她怕，还问\'Konrad 那个犹太人朋友的井他最近还去喝吗\'。"\n\n' +
        '我盯着壁炉里的火。红疙瘩，脖子下面——这是我 9 月听到的、也是 Italy 商人在说的同一个症状。\n\n' +
        'Margarete 织了 5 分钟，然后说："我不是说 Yitzhak。但**如果**，只是**如果**——下礼拜那对银扣，让妹夫 Friedrich 去取行吗？你别去那条街，就这一段时间——"\n\n' +
        '就这一段时间。\n\n' +
        '那晚我躺着盯天花板。我心里清楚：Yitzhak 不会下毒，Klaus 病跟他没关系。但是。\n\n' +
        '第二天我没去 Judengasse，让 Friedrich 去取了那对银扣。这是我跟 Yitzhak 8 年生意里第一次没自己去。\n\n' +
        '表面是给 Margarete 一个安心，其实是我心里那块东西第一次松动——松了 1 毫米。4 个月后，它会松到我投赞成票罢免 Schwarber。',
      en:
        'December 11, 1348. The coldest night of the year in Strasbourg. Margarete sat across from me knitting wool socks. Suddenly she said: "Konrad — Hans next door — his little boy Klaus is sick."\n\n' +
        'Next door. Klaus was four. Two days earlier he had played in the snow in our courtyard with Wilhelm. I asked: "Sick how?" Margarete said: "Fever, cough. Hans\' wife came over today crying to borrow honey. She said a red lump has come up on Klaus\' neck, not big yet, but she is frightened — and she asked, \'that Jewish friend\'s well — has Konrad been drinking from it lately?\'"\n\n' +
        'I stared into the fire. A red lump on the neck — the exact symptoms I had heard about in September, the exact symptoms the Italian merchants were describing.\n\n' +
        'Margarete knitted for five minutes, then said: "I am not saying Yitzhak. But **if** — only **if** — could you let Friedrich, my sister\'s husband, pick up the silver buckles next week instead? Could you stay off that street, just for now?"\n\n' +
        'Just for now.\n\n' +
        'That night I lay in bed and stared at the ceiling. I was clear in my head: Yitzhak would not poison anyone; Klaus being sick had nothing to do with him. But —\n\n' +
        'The next day I **did not** go to the Judengasse. I let Friedrich pick up the buckles. This was the first time, in eight years of business with Yitzhak, that I did not go myself.\n\n' +
        'On the surface it was a comfort for Margarete. But really, it was the first time something inside me had shifted — by one millimeter. Four months later, it would shift enough that I voted to remove Schwarber.',
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
        '1349 年 2 月 9 日下午，Strasbourg 市议会 11 人：Bürgermeister Schwarber 加 10 个工会代表（我是屠夫这席）。已经吵了 2 周。\n\n' +
        'Schwarber 50 岁，是 documented 历史人物。他讲完立场："plague 1347 年从 Sicily 一艘 Genoa 商船进 Italy。我们有 1348 年从 Florence 来的信：犹太人没参与，他们自己也死于 plague，比例跟基督徒一样高。犹太人被指责只因为我们要找个看得见的群体来承担。屠犹决议我都拒签。"\n\n' +
        '会议厅安静 30 秒。铁匠工会的 Bertold 大声说："你替犹太人说话，拿了多少钱？"这是人身攻击但有用——11 人里 9 个已被妻子、邻居、教士磨了 4 个月。\n\n' +
        'Friedrich 打断他："他失去议会的信任。投票罢免。"\n\n' +
        '我那一刻告诉自己："你只是投票罢免一个市长，不是投票屠人。"这是 Roger 1099 年那种"真心相信"——他觉得在做上帝的工作，我也真心觉得只是做合理的政治判断。\n\n' +
        '我举了手。10:1，Schwarber 被罢免，他没看我，收起纸笔下楼。\n\n' +
        '5 天后，Werd 岛，2000 个犹太人。而我那句"我只是投程序"，会变成我余生 25 年最想忘掉的一句话。',
      en:
        'February 9, 1349. Afternoon. Strasbourg city council: eleven men, the Bürgermeister Schwarber and ten guild representatives. I held the butchers\' seat. We had been arguing for two weeks.\n\n' +
        'Schwarber, fifty, is a real historical figure whose name survives in the Strasbourg archives. He made his case: "Plague entered Italy in 1347 on a Genoese ship from Sicily. We have a letter from Florence in 1348: Jews were not part of it. Jews **are themselves dying** of plague, at the same rate as Christians. They are being blamed only because we are reaching for a visible group to carry it. Any resolution to kill Jews — I will refuse to seal it."\n\n' +
        'The chamber was silent for thirty seconds. Then Bertold, the Smiths\' representative, said loudly: "You are speaking for the Jews. How much have they paid you?" Not an argument — a personal attack, but it worked. Nine of the eleven had been worked on for four months by their wives, neighbors, and priests.\n\n' +
        'Friedrich, the bishop\'s representative, cut Schwarber off: "He has lost the council\'s confidence. Vote to remove him."\n\n' +
        'In that moment I told myself: "You are only voting to remove a mayor, not voting to kill anyone." This is the same "true belief" mechanism Roger of Toulouse used in 1099 — he genuinely believed he was doing God\'s work; I genuinely thought I was making a reasonable political judgment.\n\n' +
        'I raised my hand. Ten to one. Schwarber was removed. He did not look at me; he gathered his papers and walked downstairs.\n\n' +
        'Five days later — Werd Island — two thousand Jews. And the sentence "I am only voting on procedure" would become the one I most wanted to forget for the next twenty-five years.',
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
        '1349 年 2 月 14 日中午，Werd 岛。我得直接说，否则我就在骗你。\n\n' +
        'Werd 岛在莱茵河西岸，岛上是犹太墓地。今天早上起，Strasbourg 所有犹太人（男女老幼）被城卫队和工会武装赶过来——大约 2000 人。这个数字是 documented 的，一个不留。\n\n' +
        '我站在木堆边。木堆是前一天我这个屠夫工会和木匠工会一起架的：橡木堆成 8 个大堆，每堆围一圈干稻草。\n\n' +
        '官员宣读：愿意接受洗礼的可以活。少数同意（多是老人和孩子）被领到一边。剩下大多数说："Adonai（犹太人对神的称呼）不会让我们 deny 信仰救命。"他们站着没跪，男人念 Sh\'ma Yisrael，女人抱住孩子。\n\n' +
        '我看见 Yitzhak。他在第三堆木堆前，妻子 Rachel 挨着他，6 岁、4 岁两个孩子夹在中间。\n\n' +
        '他看见我，没喊没骂，只看了我一眼。那眼神不是恨，是："我以为你不会。"\n\n' +
        '我那一秒，9 月喝过他井里那口水的甜回来了，他 1340 年说的"信得过的人"也回来了。\n\n' +
        '我没动，没说话，没拦。\n\n' +
        '火点起来。我没看完，转身走过结冰的小桥回城，风把烟吹过来我闻到。\n\n' +
        'Yitzhak 那一眼，25 年我闭眼能看见，没告诉过任何人。这一眼和我没拦那一秒，是我余生没人知道、但我每天都在还的一笔账。',
      en:
        'February 14, 1349. Midday. Werd Island. I have to tell you straight, or I am lying to you.\n\n' +
        'Werd Island, on the west bank of the Rhine, holds the Jewish cemetery. From this morning on, every Jew in Strasbourg (men, women, children) was driven onto the island by the city guard and armed guildsmen — about two thousand people. This number is documented. None left.\n\n' +
        'I stood next to the woodpile. It had been built the day before by my Butchers\' Guild and the carpenters\' guild: oak stacked into eight large piles, each ringed with dry straw.\n\n' +
        'An official read out: those who accepted baptism could live. A small number agreed, mostly the very old and young, and were led aside. The rest said: "Adonai (the Jewish name for God) will not let us deny our faith to save our lives." They stood, did not kneel; the men said the Sh\'ma Yisrael (the central Jewish prayer), the women held their children.\n\n' +
        'I saw Yitzhak. He stood in front of the third pile, his wife Rachel beside him, their two children, six and four, between them.\n\n' +
        'He saw me. He did not cry out, did not curse me. He looked at me — one look. His eyes were not hate. They were: "I did not think you would."\n\n' +
        'In that second, the sweet taste of his well-water from September came back, and the words "a trustworthy person" from 1340 came back.\n\n' +
        'I did not move. I did not speak. I did not stop them.\n\n' +
        'They lit the fires. I did not stay to the end; I turned, crossed the icy bridge, and walked back into Strasbourg. The wind blew the smoke after me, and I smelled it.\n\n' +
        'That one look from Yitzhak — for twenty-five years, when I closed my eyes, I could see it, and I told no one. That look, and the second when I did not stop them, was the debt I paid every day that no one knew I was paying.',
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
        '我推开门。Margarete 站在壁炉前没回头，搅着锅里的汤，说："Konrad，结束了？"我点头。她没回头，说："汤好了。"\n\n' +
        'Wilhelm 8 岁从卧室门探出头，看了我一眼——没喊"Vater"，没跑过来。他退回卧室，把门关上。\n\n' +
        '我坐到桌前。Margarete 把一碗汤放到我面前，终于转身看我。她看了我整整 5 秒，没说话，然后转身回灶台继续切萝卜。\n\n' +
        '那 5 秒我在想什么？我在想：她知道。\n\n' +
        'Margarete 12 月那晚说"就这一段时间"，是让我心里第一次松动 1 毫米的人。但她不会让我去杀人，她没料到 4 个月后我会坐在这里，甚至没料到我会投票罢免。那 5 秒，是她意识到——我比她想的走得远多了。\n\n' +
        '那一晚我倒了一杯酒喝完，手发抖，比早上她端汤那刻抖得更厉害。她没问细节，我没说。\n\n' +
        '但那一晚开始，我们家多了一个不可触碰的话题。它没有名字，但我们都知道：不能提、不能问、不能哭、不能道歉，只能绕开。\n\n' +
        '这是 1349 年 2 月 14 日傍晚，我家。从这一晚起，我家这扇门再没真的打开过——它每天还在物理上开和关，但门里那个家，已经死了。',
      en:
        'I came home before dark and pushed the door open. Margarete was at the hearth, stirring soup. She did not turn. She said: "Konrad — is it over?" I nodded. She did not turn. "The soup is ready."\n\n' +
        'Wilhelm, eight, looked out from his bedroom door. He did not call out "Vater" (Father), did not run to me. He stepped back into his room and shut the door.\n\n' +
        'I sat at the table. Margarete set a bowl of soup in front of me, then finally turned and looked at me for five full seconds. She did not speak. She turned back and went on slicing turnips.\n\n' +
        'In those five seconds, what was I thinking? I was thinking: she knows.\n\n' +
        'On that December night she had said "just for now"; she was the one who first made something inside me shift by a millimeter. But she would not have sent me to kill anyone. She had not expected, four months later, that I would be sitting here. Those five seconds were the moment she realized — I had gone much further than she thought.\n\n' +
        'That night I drank a cup of wine; my hands shook worse than when she handed me the soup that morning. She did not ask for details. I did not offer any.\n\n' +
        'But from that night, our house had one untouchable subject. It had no name, but we both knew it: you could not bring it up, ask, cry, or apologize. You could only go around it.\n\n' +
        'This was the evening of February 14, 1349. From that evening, the door of my house never truly opened again — it still opened and closed every day, but the family on the other side was already dead.',
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
        '5 个月后，1349 年 7 月，plague 还是来了 Strasbourg。\n\n' +
        '6 月底城南先开始，一个鞋匠学徒 3 天死。犹太人区那条街 5 个月前就烧光锁了，但 plague 还是来了。\n\n' +
        '7 月 1 日 Margarete 发烧，7 月 2 日脖子下面起了红疙瘩，跟 Hans 家小 Klaus 那个一样。7 月 5 日凌晨 Margarete 死，35 岁。\n\n' +
        '我坐在她床边那一刻，第一次出现一个我 5 个月不让自己想的问题：如果犹太人真下毒，为什么犹太人也死了那么多？\n\n' +
        'Mainz 犹太人 1349 年 2 月被烧，但那年夏天 Mainz 基督徒同样死了 1 万。Schwarber 说的"犹太人自己也死于 plague"是真的。\n\n' +
        '我握着 Margarete 凉了的手第一次承认：2 月 14 日 Werd 岛那 2000 个人的死，没阻止 Margarete 的死，也不是 plague 的原因——就是白死。\n\n' +
        '那年 Strasbourg 死了 16000 人，80% 的城。Wilhelm 9 岁活下来，我也活下来。\n\n' +
        '但 plague 没问我想换什么。它不挑，只穿过我的城：带走 Margarete，没带走 Wilhelm，没带走我。\n\n' +
        '那一晚我跪在她床边没念主祷文，心里只有一句：Yitzhak 那一眼。',
      en:
        'Five months later, July 1349 — plague came to Strasbourg anyway.\n\n' +
        'It started in the south in late June; a cobbler\'s apprentice died in three days. The Jewish quarter had been burned out and locked five months earlier — but the plague came anyway.\n\n' +
        'July 1, Margarete started a fever. July 2, a red lump came up on her neck, the same size as the one on Hans\'s little Klaus. Before dawn on July 5, Margarete died. Thirty-five years old.\n\n' +
        'Sitting by her bed, for the first time a question I had refused to let myself think about for five months came into my mind: if the Jews really had poisoned the wells, why were so many Jews dying too?\n\n' +
        'The Jews of Mainz were burned in February 1349, but that summer in Mainz ten thousand Christians also died. What Schwarber had said — "the Jews themselves are dying of plague" — was true.\n\n' +
        'Holding her cold hand, I admitted for the first time: the two thousand on Werd Island did not save Margarete, and were not the cause of plague — they simply died for nothing.\n\n' +
        'That summer sixteen thousand died in Strasbourg, eighty percent of the city. Wilhelm, nine, survived. I survived.\n\n' +
        'But plague did not ask what I wanted to trade. It did not choose; it simply passed through my city, taking whom it took. It took Margarete. It did not take Wilhelm. It did not take me.\n\n' +
        'That night, kneeling at her bedside, I did not say the Pater Noster (the Lord\'s Prayer). There was only one thing in my head: that one look from Yitzhak.',
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
        '现在我们离开 Konrad 的视角往后看。\n\n' +
        'Konrad 没自杀，没公开认错，活了 25 年，1374 年死于第二轮 plague。他唯一的承认藏在遗嘱里：把 Yitzhak 当年打的那对银鞋扣放进自己棺材陪葬——只有看懂的人能看懂。\n\n' +
        'Konrad 没意识到：他 1349 年做的事是一个模板，被反复用。\n\n' +
        '1881 年沙俄：沙皇被刺、经济不好，一年内 200 多个城镇屠杀犹太人。1903 年 Kishinev：谣言"犹太人取血做无酵饼"引发屠杀。1938 年纳粹 Kristallnacht（"水晶之夜"）一夜烧上千犹太教堂。1942 年 Wannsee 会议决定"最终解决犹太人问题"，到 1945 年共 600 万犹太人死。\n\n' +
        'Holocaust 不是 1942 年突然发生的，它有 600 年的反复演练——1349 年 Strasbourg 是第一次大演练。\n\n' +
        '这一遍的核心：反犹不是"个别坏人"，是结构性的"灾难时找替罪羊"机制。每次社会崩溃它就被激活：少数族群 + 看起来不一样 + 经济稍好一点 = 完美替罪羊。这个机制今天还在，只是替罪羊不一定是犹太人。\n\n' +
        'Konrad 真心相信他在做合理判断；600 年后我们读懂他做的是 Holocaust 的一次大演练。两件事都是真的。\n\n' +
        '下面问两个真问题。',
      en:
        'We now step out of Konrad\'s perspective and look forward.\n\n' +
        'Konrad did not kill himself, never publicly admitted he was wrong, and lived another twenty-five years, dying in the second wave of plague in 1374. His only admission was hidden in his will: the pair of silver shoe-buckles Yitzhak had made were to be placed in his own coffin — only a person who could read it would understand.\n\n' +
        'Konrad did not know that what he had done in 1349 was a template, used again and again.\n\n' +
        '1881 — pogroms in the Russian Empire: the Tsar is assassinated, the economy is bad, and within a year more than two hundred towns kill their Jewish neighbors. 1903 — the Kishinev pogrom: the rumor that "Jews use Christian children\'s blood in ritual bread" sparks a massacre. 1938 — Kristallnacht ("Night of Broken Glass"): more than a thousand synagogues burned in one night. 1942 — the Wannsee Conference decides the "Final Solution"; six million Jews are dead by 1945.\n\n' +
        'The Holocaust did not happen suddenly in 1942. It had six hundred years of rehearsal — Strasbourg 1349 was the first major one.\n\n' +
        'This is the heart of what this lens teaches: anti-Jewish hatred is not "a few bad people" but a structural mechanism — find a scapegoat in disaster. Every time a society breaks down it is switched on: a small group + looks different + slightly better off = the perfect scapegoat. It is still here today; the scapegoat just does not have to be Jews.\n\n' +
        'Konrad honestly told himself he was making a reasonable political judgment; six hundred years later we understand what he did was one rehearsal of the Holocaust. Both are true.\n\n' +
        'Now we ask two real questions.',
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
        '你刚扮演了 Konrad——38 岁的 Strasbourg 屠夫工会代表、市议会成员。他 1349 年 2 月 9 日投票罢免 Schwarber，5 天后站在 Werd 岛木堆旁看着 Yitzhak 被烧，没说话、没拦。余生 25 年他闭眼能看到那一眼。\n\n' +
        '问题来了。Konrad 那天举手，是 (a) 结构压力下的从众（一个人拒绝就意味着自我孤立，可能丢掉议会席位），还是 (b) 个人道德选择的失败（他认识 Yitzhak 10 年、喝过他井里的水，却选择相信谣言而不信自己）？两边都站得住。\n\n' +
        '一种看法是：这是普通人在压力下做的"平庸的恶"——不是特别坏的人干的戏剧化恶行，而是普通人在权威和众人压力下做出的极坏选择。那 4 个月市议会、主教、工会、妻子、邻居同时压向他；Schwarber 抵抗了就被罢免。主要责任在结构。\n\n' +
        '另一种看法是：理由从不能洗白选择。他 38 岁，认识 Yitzhak 10 年，手里有完整反证和 Schwarber 当场读出的论证，却选择相信谣言、不信自己。这不是"被迫"，是主动的认知失败。证据是他 25 年的自我审判。\n\n' +
        '两边都站得住——一种看重"压力下的普通人"，一种看重"有完整反证仍选择相信谣言"。\n\n' +
        '你怎么看？更靠近结构受害者，还是道德选择失败？想 30 秒。',
      en:
        'You have just played Konrad, a thirty-eight-year-old Butchers\' Guild representative on the Strasbourg city council. He voted to remove Schwarber on February 9, 1349; five days later he stood by the woodpile on Werd Island and watched Yitzhak burn, without speaking or intervening. For twenty-five years he could see that one look from Yitzhak.\n\n' +
        'Here is the question. When Konrad raised his hand, was it (a) conformity under structural pressure (refusing alone would mean self-isolation, perhaps losing his council seat), or (b) a failure of personal moral choice (he had known Yitzhak ten years and drunk from his well, yet chose the rumor over his own observation)? Both sides stand.\n\n' +
        'One view: this is an ordinary person\'s "banality of evil" — not a dramatic act by an unusually bad man, but an ordinary man making a terrible choice under the pressure of authority and the crowd. (In the 1960s, a psychologist named Stanley Milgram showed how ordinary people obey orders even when those orders are wrong.) In those four months the council, the bishop, the guilds, his wife, and his neighbors all pressed on him at once; Schwarber resisted and was removed. The main responsibility lies with the structure.\n\n' +
        'The other view: motive can never wash out choice. He was thirty-eight, had known Yitzhak ten years, had complete counter-evidence and Schwarber\'s reasoning read aloud — yet he chose the rumor over himself. This was not "compelled" but an active failure. The proof is his twenty-five years of private self-trial: if he had truly been compelled, he would not have suffered like that.\n\n' +
        'Both sides stand: one weighs "an ordinary person under pressure," the other "a moral agent with full counter-evidence who chooses the rumor anyway."\n\n' +
        'What do you think? Closer to structural victim, or moral failure? Take thirty seconds.',
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
        '第二个真问题比第一个更难——它关于一个施害者余生怎么活。\n\n' +
        '1349 年 7 月 plague 杀了 16000 个 Strasbourg 人，包括 Margarete，证伪了 Konrad 烧人的"理由"。但他余生 25 年没公开认错，只在遗嘱里悄悄做了一点：一笔每年 2 月 14 日的弥撒，加一对刻字银鞋扣陪葬。这一点事，是大是小？\n\n' +
        '一种看法是：明知道错了却不公开承认，是对那 2000 个死者的二次伤害。Strasbourg 后来 600 年里，反犹的种子在模糊的集体叙事里活下来，直到 1942 年长成 Holocaust。如果他在遗嘱里说清楚"我错了，犹太人没下毒"，后世屠犹时有人能找出来读。公开承认是反 Holocaust 最有力的武器，他却把它留在地里 600 年。\n\n' +
        '另一种看法是：1374 年的 Strasbourg 没有报刊，没有"公开认错"这种社会概念（当时忏悔是私下对神父说）。Konrad 公开认错会被当成异端，会被烧死，儿子失去铺子。在时代约束内他做了能做的最大补偿。用 21 世纪的标准评判他是时代错置。\n\n' +
        '两边都站得住——一种看重"公开承认是反复悲剧的唯一武器"，一种看重"时代约束内他已尽力"。\n\n' +
        '你怎么看？更靠近他没履行公开承认的责任，还是时代约束内他已尽力？想 30 秒。',
      en:
        'A second real question, harder than the first — it is about how a perpetrator lives the rest of his life.\n\n' +
        'In July 1349, plague killed sixteen thousand in Strasbourg, including Margarete, disproving Konrad\'s "reason" for the burning: the Jews were not the cause; they died of plague too; what Schwarber had said was true. But for twenty-five years Konrad never publicly admitted he was wrong. He did one quiet thing in his will: an annual Mass on February 14, and a pair of engraved silver buckles placed in his own coffin. Was this small, or large?\n\n' +
        'One view: to know you were wrong and not say so publicly is a second injury to the dead. For six hundred years the seed of antisemitism stayed alive in vague collective narratives, until it grew into the Holocaust in 1942. If Konrad\'s will had said clearly, "I was wrong; the Jews did not poison the wells; I ask forgiveness," that document would have entered the city archive, and later pogroms could have pulled it out and read it. Public admission is the strongest weapon against the next Holocaust — and he left it in the ground for six hundred years.\n\n' +
        'The other view: 1374 Strasbourg had no newspapers and no concept of "individual public confession" (confession then was private, to a parish priest). Admitting it publicly would have been read as heresy — he would have been burned, his son would have lost the shop, his grandchildren driven out. Within the constraints of his time, he did the largest reparation possible. Judging him by twenty-first-century standards is anachronism.\n\n' +
        'Both sides stand: one weighs "public admission is the only weapon against repeated tragedy," the other "within his time, he did all he could."\n\n' +
        'What do you think? Closer to failing his duty to admit publicly, or doing all he could within his time? Take thirty seconds.',
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
        '你刚从 Konrad 的内部走了一遍：2 月 14 日早上喝汤手在抖；2 月 9 日举手投票告诉自己"我只是投程序"；2 月 14 日中午看见 Yitzhak 那一眼"我以为你不会"；7 月 5 日握着 Margarete 凉了的手问"为什么犹太人也死了那么多"；1374 年遗嘱里把银鞋扣放进棺材陪葬。\n\n' +
        '进记忆考核或换视角前，一个问题：这一遍最让你停一下的是哪一刻？是 2 月 9 日他那句"我只是投程序"，还是 2 月 14 日 Yitzhak 那一眼"我以为你不会"？说一句话，为什么。\n\n' +
        '说完，你可以选：\n\n' +
        '(1) 进 mastery 通关——把 Metzgerzunft / Bürgermeister / Münster / Judengasse / Sh\'ma Yisrael / Schwarber 变成你真的记得的词。\n\n' +
        '(2) 换视角重玩同一场 1349 Strasbourg 屠杀：Devorah，一个 14 岁犹太女孩，父亲是银匠，她藏在地窖里活下来、爬出来看见一个没有犹太人的城。她跟 Konrad 是同一天却没站在木堆边。两个视角走完，有些事你会自己看见。\n\n' +
        '(3) 或问自己：你身边有没有人因为一个谣言或集体情绪，做过一件后来知道是错的事？他们公开承认了吗？没有的话你怎么看他们？',
      en:
        'You have just walked Konrad from the inside: the morning of February 14, 1349, his hands shaking as he finished Margarete\'s soup; February 9, raising his hand and telling himself "I am only voting on procedure"; midday February 14, Yitzhak\'s one look, "I did not think you would"; pre-dawn July 5, holding Margarete\'s cold hand, asking "why are so many Jews also dying?"; and 1374, placing the silver buckles in his own coffin.\n\n' +
        'Before the mastery check or switching lenses, one question: what made you pause most? Was it February 9, the line in his head "I am only voting on procedure," or Yitzhak\'s one look — not hate, but "I did not think you would"? Tell me in one sentence, and why.\n\n' +
        'Then you can choose:\n\n' +
        '(1) Go into mastery — turn Metzgerzunft, Bürgermeister, Münster, Judengasse, Sh\'ma Yisrael, Schwarber into words you actually own.\n\n' +
        '(2) Switch lens and replay the same 1349 Strasbourg killing from another angle: Devorah, a fourteen-year-old Jewish girl whose father is a silversmith, who hides in a cellar, survives, and crawls out into a city with no Jews left. She is in the same day as Konrad, but she was not at the woodpile. Once you walk both lenses, you will see some things yourself.\n\n' +
        '(3) Or ask yourself: has anyone in your life, under the pressure of a rumor or a collective feeling, done something they later knew was wrong? Did they publicly admit it? If they did not — how do you think of them now?',
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
        '在我告诉你 1349 年 2 月 14 日发生什么之前，先告诉你我 14 岁的世界。\n\n' +
        '我们 Judengasse，城东南角，80 个犹太家庭，一条窄巷，两边石头房，大家互相认识 200 年。\n\n' +
        'Aba（爸爸，希伯来语）叫 **Yitzhak ben Abraham**，39 岁，是社区的银匠。他的铺子在 Judengasse 第三家，门口挂一对银扣样品，雕了希伯来字 chai，意思是"活着"。\n\n' +
        'Ima 叫 Miryam，36 岁，不识字（女孩家里学的是织布和唱 Tehillim），但她会唱 50 首 Tehillim，会主持 Shabbos（安息日）餐桌。\n\n' +
        '我弟弟 Asher 11 岁，跟 Aba 学银匠，敲银片时认真得不眨眼。我妹妹 Sarah 4 岁，最爱我给她编辫子，编不进去就哭。\n\n' +
        '我自己 14 岁，识希伯来字，会一点德语。Ima 教我针线和 Tehillim，Aba 教我擦银器。他说："Devorah，你 14 岁了，明年我教你算账。"\n\n' +
        '隔壁住一个基督徒邻居 Brigitta，30 岁，织布女工，是 Ima 的"商业邻居"——Ima 给她做银扣，她给我们换布——10 年了。\n\n' +
        '这就是我 14 岁的世界。我现在告诉你这些，是因为接下来 4 个月，这一切要被毁掉。',
      en:
        'Before I tell you what happened on February 14, 1349, I will tell you my world at fourteen.\n\n' +
        'Our Judengasse — on the southeast corner of the city — eighty Jewish families, one narrow alley, stone houses on both sides, everyone known to everyone for two hundred years.\n\n' +
        'Aba (father, in Hebrew) is named **Yitzhak ben Abraham**, thirty-nine, the silversmith of the community. His shop is the third building in the Judengasse; a pair of silver buckles hangs at the door, engraved with the Hebrew letters chai, meaning "living."\n\n' +
        'Ima is named Miryam, thirty-six. She cannot read (girls in our families learn weaving and Tehillim), but she knows fifty psalms by heart and runs the Shabbos (Sabbath) table.\n\n' +
        'My brother Asher, eleven, is learning silversmithing from Aba; when he hammers silver he does not blink. My sister Sarah, four, likes me to braid her hair and cries when she cannot do it herself.\n\n' +
        'Myself — fourteen — I read Hebrew and a little German. Ima teaches me sewing and Tehillim; Aba teaches me to polish silver. He says: "Devorah, you are fourteen now — next year I will teach you accounts."\n\n' +
        'Next door lives a Christian neighbor, Brigitta, thirty, a weaver — Ima\'s "business neighbor" for ten years: Ima makes her silver buckles, she trades us cloth.\n\n' +
        'That was my world at fourteen. I am telling you this because over the next four months, all of it would be destroyed.',
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
        '1349 年 2 月 9 日傍晚，Aba 从市集回来，没脱外套就坐下，脸色不对，喝了一口水对 Ima 说："Schwarber 被罢免了。"\n\n' +
        'Ima 站住。\n\n' +
        '我在屋角整理银针，那是我第一次听到"Schwarber"这个名字。Aba 后来解释：他是 Bürgermeister（市长），50 岁，在议会反对屠犹，说"井下毒"是谣言、Italy 的 plague 已经在路上。但他被罢免了——10:1，一个老铁匠代表当面骂他"拿了犹太人多少钱"。\n\n' +
        'Aba 那晚第一次直接对我说话："Devorah，你 14 岁了，你要听我说一些事——"\n\n' +
        'Aba 一辈子从来不直接对我说这种话，他一直只对 Ima 说。我那一刻**心里炸了一下**。\n\n' +
        'Aba 说："我们家在 Strasbourg 已经 200 年。你的曾祖父 Avram ben Yosef 1149 年从 Worms 搬来，我们家给 Strasbourg 大教堂打过 50 件银器。这是我们 200 年的家。但今年不一样——你要懂，一个 200 年的家可能在 5 天内变成不是家。这种事在历史上发生过，你是 Yitzhak ben Abraham 的女儿，你必须知道它可能发生在你身上。"\n\n' +
        '我 14 岁，没说话，只是把银针一根一根放进盒子。',
      en:
        'February 9, 1349. Evening. Aba came back from the market, did not take off his coat, sat down with a wrong look on his face, drank one sip of water, and said to Ima: "Schwarber has been removed."\n\n' +
        'Ima froze.\n\n' +
        'I was in the corner organizing silver needles — the **first time** I had heard the name "Schwarber." Aba explained later: he was the Bürgermeister (mayor), fifty, who had opposed massacring the Jews in the council, saying the "well-poisoning" rumor was a lie and the plague from Italy was already on its way. But he had been removed, ten to one — an old smiths\' representative had cursed him: "How much have the Jews paid you?"\n\n' +
        'That night Aba, for the first time, spoke directly to me: "Devorah — you are fourteen — you need to hear something —"\n\n' +
        'He had never said that directly to me before; he had always said it only to Ima. In that moment **something inside me cracked open**.\n\n' +
        'Aba said: "Our family has been in Strasbourg for two hundred years. Your great-great-grandfather Avram ben Yosef came from Worms in 1149, and our family has made fifty pieces of silverwork for the Strasbourg cathedral. This is our home of two hundred years. But this year is different — you must understand, a home of two hundred years can become not-a-home in five days. This has happened in history before. You are Yitzhak ben Abraham\'s daughter; you must know it can happen to us."\n\n' +
        'At fourteen, I said nothing. I only kept putting silver needles, one by one, into the box.',
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
        '她进门，Ima 还没说话，她已经在哭，抓住 Ima 的手："Miryam，明天市议会要把所有犹太人聚到 Werd 岛，架木堆，明天早上——"\n\n' +
        'Ima 站住。Aba 从铺子那边走过来，听到了，没说话。\n\n' +
        'Brigitta 说："你来我家地窖，5 个人，藏到他们走完——"Aba 问："Hans 知道吗？"（Hans 是她丈夫，不知情。）Brigitta 说："Hans 我会想办法，你来，快——"\n\n' +
        'Ima 那一刻抱住了这个 10 年的"商业邻居"。\n\n' +
        '我 14 岁站在旁边，心里第一次有一种感觉：基督徒不是非黑即白的。有些会站在木堆边，有些会冒生命危险藏我们；大多数站着不动，少数会过来。人不是只分"自己人"和"敌人"两种。\n\n' +
        'Brigitta 走之前转身看我："Devorah，你 14 岁了。明天你帮你妹妹不要哭，好不好？"我点头。\n\n' +
        '她走了，Aba 关上门，对我们说："收拾，只能带最小的：Tehillim 一本，衣服两件，一个钱袋——"\n\n' +
        '我看了一眼我的房间。那一刻我知道：我不会再回这个房间了。',
      en:
        'February 13. Evening. Brigitta came.\n\n' +
        'Before Ima could speak, she was already crying, gripping Ima\'s hand: "Miryam — tomorrow the council will gather all Jews on Werd Island, build the pyre, tomorrow morning —"\n\n' +
        'Ima froze. Aba came over from the shop, having heard, and did not speak.\n\n' +
        'Brigitta said: "Come to my cellar — five of you — hide until they are done —" Aba asked: "Does Hans know?" (Hans was her husband; he did not know.) Brigitta said: "I will handle Hans. Come — quickly —"\n\n' +
        'In that moment Ima held this "business neighbor" of ten years tight.\n\n' +
        'At fourteen, standing nearby, I understood for the **first time**: Christians are not binary. Some will stand by the pyre; some will risk their lives to hide us. Most stand still; a few come. People are not only divided into "us" and "enemy."\n\n' +
        'Before she left, Brigitta turned to me: "Devorah — you are fourteen — tomorrow, help your little sister not to cry, yes?" I nodded.\n\n' +
        'She left. Aba closed the door: "Pack. Only the smallest things. One Tehillim, two sets of clothes, one money pouch —"\n\n' +
        'I looked at my room. In that moment I knew — I would not come back to it.',
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
        '2 月 15 日凌晨 4 点，Strasbourg 东门。城外黑，雪刚停。我们 5 个人：Aba 抱 Sarah，Ima 牵 Asher，我自己走。往东。\n\n' +
        'Aba 跟 Ima 说："Krakow。波兰国王 Casimir III 收容犹太人，一路东走大概 6 个礼拜。"我 14 岁那一刻知道——"6 个礼拜"不是计划，是一种"我们必须相信能到的距离"。\n\n' +
        '一个礼拜到 Black Forest 边，两个礼拜到 Bavaria。三个礼拜，2 月底某个森林边的晚上，Aba 倒下了。\n\n' +
        '他 39 岁，没病，只是走不动了。他对 Ima 说："你带孩子继续走——Krakow 的犹太社区会收你们，你只要到，就行——"他闭眼。\n\n' +
        '一夜。天亮，他凉了。\n\n' +
        '我帮 Ima 埋 Aba。森林边地是冻的，挖不动。Ima 说："用石头。"我和 Ima 用大概 30 块石头堆了一个小坟。那一刻我意识到：我以后想 Aba，只能想到这个石头堆。\n\n' +
        '没有名字，没有刻字，没有 Kaddish（犹太人为死者念的祷文，要 10 个犹太成年男子才能念，森林边没有 10 个人）。只有 30 块石头，和我 14 岁那一刻的眼泪。\n\n' +
        '我们继续往东。',
      en:
        'February 15. Four in the morning. The east gate of Strasbourg. Outside, dark, the snow just stopped. Five of us: Aba carried Sarah, Ima held Asher, I walked on my own. East.\n\n' +
        'Aba said to Ima: "Krakow. King Casimir III of Poland takes in Jews. About six weeks of walking east." At fourteen I knew: "six weeks" was not a plan, but the distance we had to believe we could reach.\n\n' +
        'One week to the edge of the Black Forest, two weeks to Bavaria. Three weeks — late February, at the edge of a forest, at night — Aba collapsed.\n\n' +
        'He was thirty-nine, not ill, simply unable to walk anymore. He said to Ima: "Take the children, keep going — Krakow\'s Jewish community will take you in, you only need to get there —" He closed his eyes.\n\n' +
        'One night. When morning came, he was cold.\n\n' +
        'I helped Ima bury Aba. The ground was frozen; we could not dig. Ima said: "Use stones." We built a small grave of about thirty stones. In that moment I understood: for the rest of my life, when I think of Aba, I will only be able to picture this pile of stones.\n\n' +
        'No name. No inscription. No Kaddish (the Jewish prayer for the dead, which requires ten adult Jewish men — and there were not ten of us at the edge of that forest). Only thirty stones, and my fourteen-year-old tears.\n\n' +
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
        '1349 年春，她们 4 个人走了 6 个礼拜到 Krakow（波兰南部）。波兰国王 Casimir III 把保护犹太人的 Statute of Kalisz 扩展到全波兰，Krakow 犹太社区收容了他们。\n\n' +
        'Devorah 18 岁在 Krakow 结婚，后来有 4 个孩子、8 个孙辈。1408 年她 74 岁，孙女 Rivka 13 岁问："Bubbe，为什么我们家在 Krakow 不在 Strasbourg？"她 59 年来第一次给孙女讲那个 1349 年 2 月 14 日。讲完她说了一句话——下一节我让你思考。\n\n' +
        '但 narrator 先让你看一眼：1349 年 Strasbourg 是历史里的一个模板。后来：1391 年 Sevilla 屠犹、1648 年 Khmelnytsky 屠犹（乌克兰约 10 万死）、1881 沙俄 pogrom、1938 Kristallnacht、1942 Wannsee 会议。\n\n' +
        '这个机制不是个别坏人，是结构性的：灾难时找替罪羊。600 年间反复用，今天还在，只是替罪羊换人。Devorah 讲给孙女，正是为了让她识别这个机制。\n\n' +
        '下一节，你思考她说的最后一句是什么。',
      en:
        'Now the narrator takes over to tell you what happened to Devorah after she was fourteen.\n\n' +
        'Spring 1349. The four of them walked for six weeks and reached Krakow (in southern Poland). King Casimir III had extended the Statute of Kalisz, a charter protecting Jews, across all of Poland, and the Krakow Jewish community took them in.\n\n' +
        'At eighteen Devorah married a Krakow Jewish merchant, and over the years had four children and eight grandchildren. In 1408 she was seventy-four. Her thirteen-year-old granddaughter Rivka asked: "Bubbe — why does our family live in Krakow, not Strasbourg?" For the first time in fifty-nine years, she told the story of February 14, 1349. When she finished, she said one sentence — the next section will let you think about it.\n\n' +
        'But first the narrator wants you to see one thing: Strasbourg 1349 was a template. What came after: the Seville pogrom (1391), the Khmelnytsky massacres (1648, about 100,000 Jews killed in Ukraine), the Russian Empire pogroms (1881), Kristallnacht (1938), the Wannsee Conference (1942 — the largest replication).\n\n' +
        'This mechanism is not "bad individuals." It is structural: in disaster, society finds a scapegoat. It has been used for six hundred years and is still alive today; only the scapegoat changes. Devorah told her granddaughter not to make her "know that Jews were slaughtered," but so she would learn to recognize the mechanism.\n\n' +
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
        '你刚跟着 Devorah 走了她 14 岁那 4 个月。我们停在地窖那一节：她念 Tehillim 第 23 篇 30 多遍。\n\n' +
        '14 岁的 Devorah 在地窖里念这 30 多遍——这是 (a) 信仰的胜利还是 (b) 信仰的崩溃？两边都有真证据。\n\n' +
        '一种看法是信仰的胜利：Tehillim 是 3000 年前犹太人写的，3000 年来犹太人在最深的恐惧里反复念这一篇——巴比伦囚禁、罗马摧毁圣殿、中世纪屠杀、Holocaust，一代一代。Devorah 在地窖念它，她不是孤单的，她是 3000 年传统的一员。这一句救了她的灵魂：她那一刻没发疯、没崩溃，是因为有一句话可以回到。这是胜利，不是失败。\n\n' +
        '另一种看法是信仰的崩溃：研究创伤的心理学家发现，人在最深的创伤里大脑最常做的是反复重复一个熟悉的动作。念一句话 30 多遍，不是因为相信它，而是因为停不下来。Devorah 念到自己都分不清这句话是不是真的。这不是信仰，是创伤之后大脑残留的肌肉记忆：她那一刻已经不再相信，但还在念，因为不知道还能做什么。\n\n' +
        '两边都站得住——一种把这一刻看成 3000 年传统的最深证明，一种看成创伤压垮信仰之后的肌肉残响。\n\n' +
        '你怎么看？那 30 多遍，更靠近信仰的胜利，还是信仰的崩溃？想 30 秒。',
      en:
        'You have just walked with Devorah through those four months at fourteen. We pause at the cellar, where she recites Psalm 23 thirty-some times.\n\n' +
        'Was this (a) the triumph of faith, or (b) the collapse of faith? Both sides have real evidence.\n\n' +
        'One view — the triumph of faith. The Tehillim (the Book of Psalms) was written by Jews three thousand years ago, and for three thousand years Jews in the deepest fear have recited this same psalm — through the Babylonian exile, the Roman destruction of the Temple, the medieval pogroms, the Holocaust. When Devorah recited it in the cellar, she was not alone; she was part of a three-thousand-year tradition. That line saved her soul: she did not go mad or break down because she had a line she could return to. This is the triumph of faith, not its failure.\n\n' +
        'The other view — the collapse of faith. Psychologists who study trauma find that under the deepest trauma, the most common thing the brain does is repeat one familiar action over and over — not because you believe it, but because you cannot stop. By the thirtieth time, Devorah could no longer tell whether the line was true. This is not faith; it is what trauma leaves in a body that used to believe. In that moment she no longer believed, but kept reciting because she did not know what else to do.\n\n' +
        'Both readings stand: one sees the deepest proof of a three-thousand-year tradition, the other the muscle echo left after trauma has crushed belief.\n\n' +
        'What do you think? Closer to the triumph of faith, or the collapse of faith? Take thirty seconds.',
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
        '第二个真问题跨越 14 世纪，延伸到任何受过历史伤害的家庭。\n\n' +
        'Devorah 1408 年 74 岁，给 13 岁孙女 Rivka 讲完 1349 年那个 2 月 14 日，最后说了一句话。那句话可能是 (a)，也可能是 (b)：\n\n' +
        '(a)："他们错了。但今天的世界不一样了，Strasbourg 那种事不会再发生了。你可以放下，好好生活，记住这个故事，但别让它压着你。"\n\n' +
        '(b)："他们错了，他们也许还会再错——你必须知道这件事，这样下次发生你能识别，能在还来得及时保护自己和你的孩子。"\n\n' +
        '两边都站得住。Devorah 活到 74 岁，在 Krakow 重建了家，生了 4 个孩子加 8 个孙辈。一种看法是她终于和解了，想给 Rivka 一个不被恐惧支配的童年——这是她的爱。另一种看法是她 59 年都没和解，只是不再让 Strasbourg 支配日常，但她知道这个机制还在，想给 Rivka 一双能识别危险的眼睛——这也是爱，只是另一种。\n\n' +
        'Devorah 那一刻到底说了什么，这一遍不告诉你，因为它取决于你怎么读她。她跨过 59 年，坐在 Krakow 的床上看着孙女——她要留给她一句"放下"，还是一句"识别"？\n\n' +
        '你给孙女选哪一句？没有正确答案，但你的选择说出你怎么理解 Devorah。想 30 秒。',
      en:
        'A second real question, crossing out of the fourteenth century into every family carrying a historical wound.\n\n' +
        '1408. Devorah is seventy-four. She has just finished telling her thirteen-year-old granddaughter Rivka the story of February 14, 1349, and then said one sentence. It could have been (a), or (b):\n\n' +
        '(a): "They were wrong. But the world today is different; Strasbourg cannot happen again. You can put this down and live well. Remember the story, but do not let it weigh on you."\n\n' +
        '(b): "They were wrong, and they may be wrong again. You must know this story so that next time you can recognize it, and protect yourself and your children while there is still time."\n\n' +
        'Both readings stand. Devorah lived to seventy-four and rebuilt a family in Krakow, with four children and eight grandchildren. One reading: she finally reconciled, and wanted to give Rivka a childhood not ruled by fear — that was her love. The other: in fifty-nine years she never reconciled, she just no longer let Strasbourg run her days, but she knew the mechanism was still alive and wanted to give Rivka the eyes to recognize danger — that too was love, only a different kind.\n\n' +
        'What Devorah actually said, the lens does not tell you, because it depends on how you read her. Sitting on a bed in Krakow, looking at her granddaughter — would she leave a line about letting go, or about recognizing?\n\n' +
        'Which would you give the granddaughter? There is no correct answer, but your choice tells me how you understood Devorah. Take thirty seconds.',
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
        '你刚从 Devorah 14 岁内部走了一遍——一个犹太女孩 200 年家被毁掉的 4 个月，到 59 年后她 74 岁讲给 13 岁孙女的最后一句话。\n\n' +
        '进记忆考核前，一个问题：这一遍最让你停一下的是哪一刻？是地窖里 Tehillim 第 23 篇念到第 30 多遍、你自己都分不清这句话是不是真的，还是森林边 Aba 39 岁倒下、30 块石头、你从此想他只能想到这个石头堆？说一句话，为什么是它。\n\n' +
        '—\n\n' +
        '这一遍的最后一件事：你这一课还有两个视角——Agnolo（Siena 编年史家，35 岁亲手埋了 5 个孩子）和 Konrad（Strasbourg 屠夫工会代表，1349 年 2 月 14 日投赞成票屠犹的施害者）。\n\n' +
        '如果你做完 Konrad 那一遍，你会发现一个 micro-detail。我不告诉你是什么，让你自己 connect。这个 connect 的瞬间，是多视角学法给你的最强一击，比直接告诉你"这两个视角是相连的"重 100 倍。\n\n' +
        '然后——准备好了吗？记忆考核：拼写、定义、应用题，把今天演过的变成你真正记得的。',
      en:
        'You have just walked through Devorah from inside, at fourteen — a Jewish girl losing her two-hundred-year family in four months — and the last sentence she said to her granddaughter fifty-nine years later, at seventy-four.\n\n' +
        'Before the mastery check, one question: what made you pause most? Was it Psalm 23 in the cellar — by the thirtieth time, you could no longer tell whether the line was true — or the edge of the forest, Aba at thirty-nine collapsing, thirty stones, so that from then on you could only picture the pile of stones? Tell me in one sentence, and why.\n\n' +
        '—\n\n' +
        'One last thing: there are two other lenses in this Topic — Agnolo (the chronicler in Siena who buried his five children with his own hands) and Konrad (the Strasbourg butcher-guild representative who voted yes on February 14, 1349).\n\n' +
        'If you do the Konrad lens, you will find one micro-detail. I will not tell you what — you will connect it yourself. That moment of connecting is the strongest blow this lens system can give you, a hundred times stronger than the narrator simply telling you "these two lenses are linked."\n\n' +
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
      cn: '他是 Siena 鞋匠工会的胖账房,1348 年 5 月的一个早上听传话员讲城里第一个从 Genoa 回来的商人脖子下面长了鸡蛋大的黑肿块,坐着没动了一会儿,然后拿鹅毛笔写下三行字。这一遍让你跟他从那一笔走到 1351 年终于停笔的那个夜里,看一个普通账房怎么一边亲手埋掉自己五个孩子,一边继续记下每天死了多少人。',
      en: 'He is the heavy-set bookkeeper of the Siena cobblers\' guild who, on a May morning in 1348, listens to a messenger describe the first merchant back from Genoa with an egg-sized black swelling under his collarbone, sits still for a long moment, then picks up a goose quill and writes three lines. This pass walks with him from that single entry to the night in 1351 when he finally stops writing, watching an ordinary clerk bury his five children with his own hands and keep counting the dead the next day.',
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
      cn: '他是 Strasbourg 屠夫工会的三十八岁代表,四代屠夫,1349 年 2 月 14 日早上手抖着喝完妻子熬的「出门汤」,出门要去 Werd 岛(一个合成人物,把这场屠杀里许多真实工会代表的姿态合到一起)。这一遍让你跟他走完这一天,看一个从小跟犹太银匠做了十年生意的人,怎么五天前在市议会投了赞成票,又要走过冰冷的木板路去亲眼站在那堆木柴边。',
      en: 'He is a thirty-eight-year-old delegate of the Strasbourg butchers\' guild, fourth generation in the trade, who on the morning of February 14 1349 drinks his wife\'s "going-out soup" with shaking hands before heading to Werd island (a composite character drawn from many real guild delegates in this massacre). This pass walks with him through that single day, watching a man who has done ten years of business with a Jewish silversmith now act on the yes vote he cast five days earlier and stand by a pile of firewood on a cold western island.',
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
      cn: '她是 Strasbourg 犹太街上一个十四岁的银匠女儿,父亲铺子门口挂着一对刻着希伯来字「活着」的银扣,十一月里跟着母亲一遍遍慢慢念《诗篇》第 23 篇(一个合成人物,代表这场反犹屠杀里许多没有名字留下的犹太孩子)。这一遍让你坐在那个十一月的厨房里,看一个邻居小女孩第一次走过窗户不再叫她的名字,再陪她走完接下来四个月到那个木柴堆烧起来的二月。',
      en: 'She is a fourteen-year-old silversmith\'s daughter on the Judengasse in Strasbourg, where her father\'s shop sign carries a silver buckle engraved with the Hebrew word "alive," and where in November her mother starts walking her line by line through Psalm 23 again (a composite character standing in for the many Jewish children of this pogrom whose names did not survive). This pass sits you in that November kitchen as a neighbor girl passes her window for the first time without calling her name, then walks with her through the four months that follow to the morning the woodpile is lit.',
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
