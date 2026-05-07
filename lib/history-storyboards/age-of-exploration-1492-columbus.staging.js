// ─── Age of Exploration 1492 · LENS 1: Christopher Columbus ─────────
//
// Topic: 大航海时代 1492 · The Age of Exploration
// HSS-7.11 · AP World 1.7 · AP Euro Period 1 · AP US pre-1607
//
// Lens 1 设计 (per Sarah Chen audit §5 推荐):
//   - id: 'columbus'
//   - role: 'perpetrator-actor'
//   - perspectiveTag: 'colonial-system-architect'
//
// 不是"英雄 vs 恶魔"二元化——而是 Genoa 织工孩子怎么变成 Hispaniola 奴役系统的设计者。
// 12 nodes 走 1492 黎明 Pinta 上那一声 "Tierra" → 1506 戴着错的算计死。
//
// 跨 lens micro-detail (per Sarah audit §6.1 + 本 lens 必须实现):
//   Columbus 1493/2 写的"信" — 后来 1493/4-5 印 9 个版本 — 是 3 lens cross-detail:
//   - Lens 1 (Columbus) N4: 写者 — 1493/2 在 Azores 海面写
//   - Lens 2 (las Casas)  : 1542 转录改写《简短叙述》引用此信
//   - Lens 3 (Anacaona Jr.): 1495 在场听到 Columbus 派人念命令
//
// per AUTHORING_PIPELINE.md 11 条铁律:
//   1 (cultural ban) / 2 (anti-fab) / 4 (em-dash 预算) / 6 (外语 italic 用 bare 不用 *X*)
//   11 (quote nesting 用「」中文方头括号 — 严禁 ASCII " 嵌入 outer "..." 字符串)
//
// per STORY_FIRST_PEDAGOGY.md 4 phase:
//   N1 hook / N2-N3 setup / N4-N9 story / N10-N11 synthesis / N12 meta
//
// Sarah audit P0.1 patch: Hispaniola Taíno 起点人口用统一"30 万 - 100 万 (学界争议)" 区间
// Sarah audit P0.2 patch: 1492.3.31 Alhambra Decree 灵魂段落 N3 必须出现
// Sarah audit P0.4 patch: 1518 Charles V asiento (Atlantic slave trade 系统化起点) 在 N9 影响层提

// ═══════════════════════════════════════════════════
// LENS 1: Christopher Columbus (perpetrator-actor)
// ═══════════════════════════════════════════════════

export var columbusLens = {
  id: 'columbus',
  name: 'Christopher Columbus',
  nameCn: '哥伦布',
  role: 'perpetrator-actor',
  perspectiveTag: 'colonial-system-architect',
  description: {
    cn:
      'Genoa 织工的儿子,自学拉丁文,38 岁带 3 艘船 + 90 个人横跨大西洋。' +
      '1492 年 10 月 12 日凌晨 2 点,Pinta 号桅杆瞭望员喊「Tierra」那一刻,' +
      '他踏上的是 Bahamas 一座小岛,而他至死相信自己到了亚洲。' +
      '这一遍让你看见他怎么从一个迷恋 Marco Polo 的水手,变成 Hispaniola 奴役系统的亲手设计者——' +
      '不是因为冷血,而是因为「可皈依 + 可工作 + 可奴役」三件套被他一笔写进 1493 年那封信里。',
    en:
      'Son of a Genoa weaver, self-taught in Latin, at thirty-eight he led three ships and ninety men across the Atlantic. ' +
      'At two in the morning on October 12, 1492, when the lookout on Pinta shouted "Tierra," ' +
      'he stepped onto a small island in the Bahamas — and he died still believing he had reached Asia. ' +
      'This lens shows how a sailor obsessed with Marco Polo became the hands-on architect of the Hispaniola enslavement system — ' +
      'not from cold blood, but because the three-part formula "convertible plus workable plus enslavable" was written down by him, in his own letter of 1493.',
  },

  storyboard: [

    // ═══════════════════════════════════════════════════
    // N1 — HOOK: 1492.10.12 凌晨 2 点 Pinta 桅杆 「Tierra」
    // ═══════════════════════════════════════════════════
    {
      id: 'col-n1',
      phase: 'hook',
      cosplay: 'Christopher Columbus',
      narrativeRef: '§1 一句话锚点 + §3 Columbus 1492.10.12',
      content: {
        cn:
          '1492 年 10 月 12 日,凌晨 2 点,大西洋。\n\n' +
          '我 38 岁。Genoa(意大利北部)织工的儿子。我的两艘姐妹船 Niña 和 Pinta,加上旗舰 Santa María——' +
          '已经在大西洋上漂了 70 天。从 8 月 3 日离开 Palos 港(西班牙南部一个小港)那天起。\n\n' +
          '70 天里,水手三次准备叛变。三次。10 月 10 日那天他们终于跟我摊牌——「再 3 天看不到陆地我们就回去」。' +
          '我同意。我自己心里清楚——10 月 12 日就是最后一天。\n\n' +
          '凌晨 2 点,Pinta 号桅杆瞭望台上的水手 Rodrigo de Triana 看见月光下一线白色海岸。他喊出我等了 7 年的两个字:\n\n' +
          '「Tierra! Tierra!」(陆地!陆地!)\n\n' +
          '——这一刻我以为我到了亚洲。我以为我看到的是 Marco Polo 写的东方边缘。' +
          '我以为天亮我们会见到 Marco Polo 笔下的「大可汗」(元朝皇帝),收下他的香料和黄金。\n\n' +
          '我错得离谱。\n\n' +
          '——我不知道我看到的是 Bahamas 一座小岛。我不知道接下来 60 年我亲手设计的体系,' +
          '会让这一片岛上 30 万到 100 万 Taíno 人(学界争议起点人口) 几乎全部死光。我不知道 500 年后' +
          '美国人会在 10 月 12 日这一天为我立铜像,然后又把铜像推倒。\n\n' +
          '接下来 12 节,你跟我走 14 年。从 38 岁的我以为到了亚洲,到 54 岁我戴着错的算计死,至死不肯承认自己看错了什么。',
        en:
          'October 12, 1492. Two in the morning. The Atlantic.\n\n' +
          'I am thirty-eight. Son of a weaver from Genoa, in northern Italy. My two sister ships, Niña and Pinta, ' +
          'and my flagship Santa María, have been at sea for seventy days, since we left the small port of Palos in southern Spain on August 3.\n\n' +
          'In those seventy days, the crew came close to mutiny three times. Three. On October 10 they finally said it to my face — ' +
          '"three more days, and if we see no land we turn back." I agreed. I knew October 12 would be my last day.\n\n' +
          'At two in the morning, the lookout on Pinta, a sailor named Rodrigo de Triana, saw a thin white shore in the moonlight. ' +
          'He shouted the word I had waited seven years to hear:\n\n' +
          '"Tierra! Tierra!" (Land! Land!)\n\n' +
          'In this moment I think I have reached Asia. I think what I am seeing is the eastern edge of the world Marco Polo wrote about. ' +
          'I expect that by daylight we will meet the Great Khan of Marco Polo\'s pages, accept his spices and his gold.\n\n' +
          'I am extravagantly wrong.\n\n' +
          'I do not know that I am looking at a small island in the Bahamas. I do not know that the system I will design with my own hands ' +
          'over the next sixty years will leave the 300,000 to 1,000,000 Taíno people who lived on these islands (the starting population is debated) ' +
          'almost completely dead. I do not know that five hundred years from now, Americans will raise bronze statues of me on October 12 — and then pull them down.\n\n' +
          'Over the next twelve sections you will walk fourteen years with me. From the thirty-eight-year-old who thought he had reached Asia, ' +
          'to the fifty-four-year-old who died wearing his own miscalculation, refusing to admit, until the last day, what he had really seen.',
      },
      deliverGoal: {
        cn: '我 38 岁站在 Bahamas 海岸以为到了亚洲——同一双手接下来设计的体系会让 30 万到 100 万 Taíno 死光。',
        en: 'At 38 I stood on a Bahamas shore believing I had reached Asia — the same hands would design a system that left 300,000 to 1,000,000 Taíno dead.',
      },
      engagementHook: {
        cn: '一个 Genoa 织工的儿子怎么走到这片海滩?倒回我 14 岁第一次跑商船那一年。',
        en: 'How did a Genoa weaver\'s son end up on this beach? Roll back to the year I first sailed on a merchant ship, age fourteen.',
      },
      expectedLength: '240-290 字 CN',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N2 — SETUP: 1455-1485 出身 + Marco Polo + 错的地球周长
    // ═══════════════════════════════════════════════════
    {
      id: 'col-n2',
      phase: 'setup',
      cosplay: 'Christopher Columbus',
      narrativeRef: '§3 Columbus 出身 + Marco Polo + 错的地理估算',
      content: {
        cn:
          '我 1451 年生在 Genoa(意大利西北部一个港口共和国)。我父亲 Domenico Colombo 是织工——做羊毛布的。家里不富,但 Genoa 是地中海航海中心,从小窗外就是港口的桅杆林。\n\n' +
          '14 岁起我就跟商船跑,先是地中海,后来一路到 Iceland。20 多岁那几年我去过西非、Madeira 群岛、Lisbon。我从来没有受过正式大学教育。所有我学的东西(拉丁文、数学、天文、地理)都是我自学的。\n\n' +
          '我 30 岁前后读到一本改变我一生的书。Marco Polo《马可波罗游记》——一本 13 世纪威尼斯商人写的东方游记。书里写大可汗的宫殿、东方的黄金、香料、丝绸。\n\n' +
          '我把这本书读到记得每一段。我在书页边上写了几百条笔记(这本书今天还在 Seville 一个图书馆里,带着我的笔迹)。我心里慢慢长出一个想法:如果我从西边走,能不能比走东陆路更快到达 Marco Polo 写的那个东方?\n\n' +
          '——这一刻我做了一个错的算计。我以为地球周长比真的小 25%。我以为亚洲东海岸比真的东得多。我估算 Canary Islands 到日本的距离是 4,200 公里。\n\n' +
          '真实距离是 19,500 公里。我算错了 5 倍。\n\n' +
          '如果中间没有一片我不知道的大陆挡在路上,我和我的 90 个船员会在大西洋中间漂死。我们的水和食物只够走我估算的距离,不够走真实距离。\n\n' +
          '我后来变成「英雄」靠的不是我算对了,是我算错了——而美洲意外正好挡在那里。这是历史最讽刺的事:我顶着错的地球周长走到对的地方。',
        en:
          'I was born in 1451 in Genoa, a port republic in northwestern Italy. My father, Domenico Colombo, was a weaver of woolen cloth. The family was not rich. But Genoa was a Mediterranean shipping center, and the masts at the harbor were always the first thing out the window.\n\n' +
          'From the age of fourteen I sailed on merchant ships — first the Mediterranean, then as far as Iceland. In my twenties I traveled to West Africa, to the Madeira Islands, to Lisbon. I never had a university education. Everything I learned — Latin, mathematics, astronomy, geography — I taught myself.\n\n' +
          'Around the age of thirty I read the book that would shape the rest of my life. Marco Polo\'s Travels — written by a thirteenth-century Venetian merchant about the East. The pages described the palace of the Great Khan, the gold and spices and silks of the East.\n\n' +
          'I read that book until I had every paragraph by heart. I wrote hundreds of notes in the margins (the book still sits in a library in Seville today, with my handwriting on it). Slowly, an idea grew in me: if I sailed west, could I reach the East Marco Polo described faster than going overland?\n\n' +
          'This is where I made a wrong calculation. I believed the earth was twenty-five percent smaller than it really is. I believed the eastern coast of Asia lay much farther east than it really did. I estimated the distance from the Canary Islands to Japan at 4,200 kilometers.\n\n' +
          'The real distance is 19,500 kilometers. I was off by a factor of five.\n\n' +
          'If a continent I did not know about had not been in the way, my ninety crewmen and I would have died of thirst in the middle of the Atlantic. Our water and food were calculated for my distance, not the real one.\n\n' +
          'I later became a "hero" not because my numbers were right but because they were wrong — and the Americas happened to be in the way. This is one of the cruel jokes of history: I sailed to the right place wearing the wrong measurements.',
      },
      deliverGoal: {
        cn: '我自学航海 + 迷上 Marco Polo + 把地球周长算错 25% — 我以为我去亚洲,我顶着错的算计撞上美洲。',
        en: 'Self-taught sailor, obsessed with Marco Polo, off by 25 percent on the size of the earth — I thought I was sailing to Asia, and I struck the Americas wearing wrong numbers.',
      },
      engagementHook: {
        cn: '我有这个错的算计 7 年——找不到一个国王愿意赌我。直到 1492 年初,西班牙突然有了钱。',
        en: 'I carried that wrong calculation for seven years before any monarch was willing to bet on it — until early 1492, when Spain suddenly had money.',
      },
      expectedLength: '270-320 字 CN',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N3 — SETUP: 1492 三连击 — Reconquista + Alhambra Decree + 出航 (Sarah P0.2 灵魂段)
    // ═══════════════════════════════════════════════════
    {
      id: 'col-n3',
      phase: 'setup',
      cosplay: 'Christopher Columbus',
      narrativeRef: '§4 1492 三连击 + Sarah audit P0.2 Alhambra Decree',
      content: {
        cn:
          '1485 到 1492,这 7 年我一直在找王室赞助。葡萄牙国王 João II 的专家委员会开会算了我的数字,告诉国王「这人算错了」——拒绝。西班牙的 Ferdinand 和 Isabella 第一次也拒绝。英国国王 Henry VII 没回我信。法国国王 Charles VIII 也没回。\n\n' +
          '1492 年初我的命运突然转。原因不在我身上,在西班牙王室身上。\n\n' +
          '——1492 年 1 月 2 日,Granada 投降。穆斯林在伊比利亚半岛 700 多年的最后一座城,落到 Ferdinand 和 Isabella 手里。Reconquista(Christian「收复」运动) 终结。西班牙王室突然有了钱——没有打仗这一项最大开销了。\n\n' +
          '——1492 年 3 月 31 日,Ferdinand 和 Isabella 颁了一道命令叫 Alhambra Decree(Alhambra 是 Granada 那座宫殿的名字)。命令是这样:全西班牙的犹太人,4 个月内,要么受洗变成基督徒,要么离开西班牙。' +
          '8 月底前,大约 10 万 Sephardic 犹太人(西班牙裔犹太人)被驱逐出去。\n\n' +
          '——1492 年 4 月 17 日,Isabella 在 Granada 旁边一个叫 Santa Fe 的军营,签字批准我出航。条件:我做「海洋将军」,任何我发现的土地我做总督,我拿 10% 利润。\n\n' +
          '——1492 年 8 月 3 日早上,我从 Palos 港离开。那一天 Palos 港里挤满了犹太人逃难的船——犹太人 deadline 是 7 月 31 日,我出航是 8 月 3 日,中间隔 2 天。我们几乎是同一片海岸,同一波船。\n\n' +
          '同一笔 Isabella 国库的钱——支付我的 3 艘船;同一种「基督教纯洁化」的国家逻辑——驱犹 + 把传教任务套到我身上。Reconquista 终结、驱犹、和我出航,不是三个独立事件。是一个事件链。\n\n' +
          '——这一遍让你听见我没说出口的:我接 Isabella 的钱出航的时候,我心里清楚我是在做基督教扩张的延伸,不只是一次商船探险。我袋里揣着一份给「印度大可汗」的信,Isabella 让我带的。但我也揣着一项任务——为基督教皈依新民族。\n\n' +
          '7 月 31 日的 Palos 海岸,犹太人离开。8 月 3 日的 Palos 海岸,我离开。同一片海,完全相反的命运——这是 1492 年的灵魂。',
        en:
          'From 1485 to 1492, for seven years, I had been looking for royal funding. The expert committee of King João II of Portugal sat down with my numbers and told the king, "This man has miscalculated." Refused. Ferdinand and Isabella of Spain refused me the first time. King Henry VII of England did not answer my letters. King Charles VIII of France did not answer either.\n\n' +
          'In early 1492, my fortune turned suddenly. Not because of me. Because of what was happening to the Spanish crown.\n\n' +
          'On January 2, 1492, Granada fell. The last Muslim city in Iberia after seven hundred years passed into the hands of Ferdinand and Isabella. The Reconquista (the Christian "reconquest" of Iberia) was complete. Suddenly the Spanish treasury had money — the largest line item in the budget, the war, was gone.\n\n' +
          'On March 31, 1492, Ferdinand and Isabella issued the Alhambra Decree (named for the palace at Granada). The order: every Jew in Spain must, within four months, accept baptism or leave the country. ' +
          'By the end of August, roughly one hundred thousand Sephardic Jews (Spanish Jews) had been expelled.\n\n' +
          'On April 17, 1492, at a military camp near Granada called Santa Fe, Isabella signed the document approving my voyage. Terms: I would be "Admiral of the Ocean Sea," I would be governor of any land I found, and I would take ten percent of all profit.\n\n' +
          'On the morning of August 3, 1492, I sailed from Palos. The harbor that day was crowded with refugee Jewish ships — the Jewish deadline was July 31, my sailing was August 3, two days apart. We were almost the same wave of vessels leaving the same shore.\n\n' +
          'The same Isabella treasury that paid for my three ships also paid for the expulsion. The same logic — "purify Christian Spain" — drove out the Jews and laid the missionary errand on me. The end of the Reconquista, the expulsion, and my sailing were not three separate events. They were one chain.\n\n' +
          'This is what I did not say out loud. When I took Isabella\'s money, I knew I was carrying out an extension of Christian expansion, not just a merchant\'s expedition. I had in my pouch a letter from Isabella addressed to "the Great Khan of the Indies" — and I also had a charge to convert new peoples to Christianity.\n\n' +
          'July 31 at Palos — the Jews leaving. August 3 at Palos — me leaving. Same shore, opposite fates. That is the soul of the year 1492.',
      },
      deliverGoal: {
        cn: '1492 年 1.2 Reconquista 完成 + 3.31 Alhambra Decree 驱犹 + 4.17 我被批准 + 8.3 我离开——同一笔国库钱,同一种「基督教纯洁化」逻辑——三件事是一个事件链。',
        en: 'January 2: Reconquista ends. March 31: Alhambra Decree expels the Jews. April 17: I am approved. August 3: I sail. One treasury, one "purify Christian Spain" logic — these are not three events but one chain.',
      },
      engagementHook: {
        cn: '70 天后我跨完大西洋。10 月 12 日凌晨 2 点 Rodrigo 喊「Tierra」——我上岸,我在日志里写下接下来 500 年欧洲对原住民的第一句描述。',
        en: 'Seventy days later I had crossed the Atlantic. At two in the morning on October 12, Rodrigo shouted "Tierra." I landed. And in my log I wrote the first sentence Europe would use to describe Indigenous peoples for the next five hundred years.',
      },
      expectedLength: '320-380 字 CN',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N4 — STORY (CROSS-LENS MICRO-DETAIL): 1492.10.12 当天日志 + 1493.2 Azores 写信
    // ⭐ 这是 3-lens cross-detail 锚点 — 必须 specifically 写 1493.2 Columbus 写信物理时刻
    // ═══════════════════════════════════════════════════
    {
      id: 'col-n4',
      phase: 'story',
      cosplay: 'Christopher Columbus',
      narrativeRef: '§3 Columbus 1492.10.12 日志 + §5 文献 1 Columbus 1493 信',
      content: {
        cn:
          '1492 年 10 月 12 日上午,Bahamas 一座小岛(今天可能是 San Salvador 或 Watling Island,学界还在争)。我给岛起名「San Salvador」(圣救主)——因为我相信这是上帝救了我和船员的命。\n\n' +
          '岛上原住民走出来。Taíno 人。他们和平地走过来,带礼物——鹦鹉、棉布、尖竹做的标枪。我注意到一件事:他们没有铁制武器。他们没有军事训练。\n\n' +
          '我打开航海日志,在第一天的笔记里写下后来塑造 500 年欧洲殖民语言的一句话:\n\n' +
          '「他们 50 个人就能征服全部——他们做一切我们想要的工作。」\n\n' +
          '——殖民 mindset 在我登陆第一天就已经写下来。不是 5 年后,不是 1 年后。是第一天上午。我看见 Taíno 那一刻,我想到的不是「我遇到了一个新文明」——是「这些人能用」。\n\n' +
          '——\n\n' +
          '4 个月后,1493 年 2 月,我从美洲返航。北大西洋冬季风暴,Santa María 已经在 12 月 25 日撞礁沉没——我用她的木头在 Hispaniola 建了第一个殖民地 La Navidad,留下 39 个人。剩下两艘船 Niña、Pinta 在风暴里被撞散。\n\n' +
          '我的 Niña 号被风暴推到 Azores 群岛(葡萄牙在大西洋中间的群岛)边上。我在 Azores 海面上,用一支羽毛笔,一张羊皮纸,写下一封信给 Ferdinand 和 Isabella。\n\n' +
          '我写的是这些话:\n\n' +
          '「这些岛屿的人民——他们很温和。没有铁制武器。没有完整的衣服。他们没有自己的宗教。\n\n' +
          '关于皈依——我相信,这些人很容易皈依基督教。如果陛下派几个修士——他们几年内全部能皈依。\n\n' +
          '关于工作——他们适合任何工作。50 个我们的人,就能让全部 5 万人为我们工作。\n\n' +
          '如果陛下需要任何奴隶——这里取之不尽。」\n\n' +
          '我把这封信交给一艘葡萄牙商船,让它带到 Lisbon。3 个月内,这封信被印刷在欧洲——拉丁文 + 西班牙文 + 意大利文 + 德文。1493 年 4-5 月间,9 个不同的版本在欧洲不同城市印刷。1493 到 1500 这 7 年,至少 17 个版本流通。\n\n' +
          '——这一遍让你听见我没说出口的。我在 Azores 海面上写这封信的时候,我手里在做一件事我后来 500 年都没办法收回。我把 Taíno 用三个字描述:可皈依、可工作、可奴役。这三个字组成的语言模板,接下来 500 年,英、法、荷、美、德、比利时殖民者都会用同样的模板。\n\n' +
          '我点燃了一种语言。这种语言比我活得长 500 年。',
        en:
          'Morning of October 12, 1492, on a small island in the Bahamas (today probably San Salvador, possibly Watling Island — scholars are still arguing). I named the island San Salvador, "Holy Savior," because I believed God had saved my crew and me.\n\n' +
          'The Indigenous people came out. The Taíno. They came in peace, with gifts — parrots, cotton cloth, javelins of sharpened cane. I noticed one thing. They had no iron weapons. They had no military training.\n\n' +
          'I opened my logbook, and on day one I wrote the line that would shape five hundred years of European colonial language:\n\n' +
          '"With fifty of our men we could subjugate them all — they would do anything we wanted of them."\n\n' +
          'The colonial mindset was on the page on day one. Not five years later. Not one year later. The first morning. The instant I saw the Taíno, I did not think, "I have met a new civilization." I thought, "These people can be used."\n\n' +
          '— —\n\n' +
          'Four months later, February 1493, on the way home. Winter storms in the North Atlantic. Santa María had hit a reef on December 25 — I used her timbers to build the first colony, La Navidad on Hispaniola, and left thirty-nine men there. The two remaining ships, Niña and Pinta, were torn apart by storm.\n\n' +
          'My Niña was driven to the Azores (Portuguese islands in the middle of the Atlantic). On the sea off the Azores, with a quill and a sheet of parchment, I wrote a letter to Ferdinand and Isabella.\n\n' +
          'These were the words I put down:\n\n' +
          '"The people of these islands are very gentle. They have no iron weapons. They have no proper clothing. They have no religion of their own.\n\n' +
          'On conversion: I believe these people will easily convert to Christianity. If Your Highnesses send a few friars, in a few years all of them will be converted.\n\n' +
          'On work: they are suited to any task. Fifty of our men could make all fifty thousand of them work for us.\n\n' +
          'If Your Highnesses need slaves, the supply here is inexhaustible."\n\n' +
          'I gave the letter to a Portuguese merchant ship to carry to Lisbon. Within three months, the letter was being printed across Europe — in Latin, Spanish, Italian, German. In April and May 1493, nine different editions ran in nine different European cities. Between 1493 and 1500, at least seventeen editions circulated.\n\n' +
          'This is what I did not say out loud. While I sat on the sea off the Azores writing this letter, I was doing a thing I could not take back across the next five hundred years. I described the Taíno in three words. Convertible. Workable. Enslavable. The three-part formula at the heart of those sentences became the template every European colonizer would use for the next five centuries — English, French, Dutch, American, German, Belgian.\n\n' +
          'I lit a language. That language outlived me by five hundred years.',
      },
      deliverGoal: {
        cn: '我登陆第一天日志写「50 人就能让 5 万人为我们工作」——4 个月后我在 Azores 海面上写信,把 Taíno 写成「可皈依 + 可工作 + 可奴役」三件套,这封信 3 个月内 9 个版本印遍欧洲——我点燃了一种 500 年殖民语言模板。',
        en: 'On day one I wrote in my log "fifty of our men could make them all work." Four months later, off the Azores, I wrote a letter describing the Taíno as convertible, workable, and enslavable. Three months later it was running in nine editions across Europe. I lit the language template colonizers would use for five hundred years.',
      },
      engagementHook: {
        cn: '1493 年 4 月,Barcelona。整个西班牙王室列队欢迎我回国。但我已经在准备第二次出航,这次目的是殖民。',
        en: 'April 1493, Barcelona. The full Spanish court lined up to welcome me home. But I was already preparing the second voyage — and this time the purpose was colonization.',
      },
      expectedLength: '380-440 字 CN',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N5 — STORY: 1493 Barcelona 凯旋 + 第二次出航 17 艘船 1500 人
    // ═══════════════════════════════════════════════════
    {
      id: 'col-n5',
      phase: 'story',
      cosplay: 'Christopher Columbus',
      narrativeRef: '§3 Columbus 1493 凯旋 + 第二次出航',
      content: {
        cn:
          '1493 年 4 月,Barcelona。我从 Palos 港下船,带着 7 个 Taíno 人(我从 Hispaniola 抓来的)、几只鹦鹉、一些黄金面具、一些棉布。\n\n' +
          'Ferdinand 和 Isabella 派人列队迎我进 Barcelona。我穿过城里游行队伍,到王座厅,跪下来。Isabella 让我起来,坐到她身边——这是西班牙王室对一个普通水手做过最高规格的事。我那一刻,38 岁,从 Genoa 织工的儿子,变成西班牙的「海洋将军」。\n\n' +
          '——这一遍让你听见我没说出口的。我跪在 Isabella 面前那一刻,我心里有两件事在拉。\n\n' +
          '一件是真信仰。我跟 Isabella 说:「陛下,这些 Taíno 容易皈依——他们等待你的信仰。」我说这话不是在表演。我真心相信我在做上帝的事。我在 Genoa 长大就是天主教徒,我读 Marco Polo 的时候同时在读 Bible 和 Aquinas。我相信向新民族传播基督教是 souls 的拯救。\n\n' +
          '另一件是算计。我跟 Isabella 说:「陛下,这片土地有黄金山——我会找到。」我说这话也不是在表演。我看到 Taíno 脖子上挂的小黄金球,我以为内陆有黄金山。我也算账——我自己的 10% 利润是巨大数字。\n\n' +
          '我的真信仰和我的算计长在同一颗心里。这是 16 世纪殖民者最重要的心理结构:对国王谦卑 + 对原住民暴力 + 真信仰 + 真贪婪——同时在一个人身上。\n\n' +
          '——\n\n' +
          '5 个月后,1493 年 9 月 25 日,我从 Cádiz(西班牙南部港口)第二次出航。这次完全不一样:\n\n' +
          '——17 艘船(第一次只有 3 艘)\n' +
          '——1,500 名西班牙人(第一次只有 90 人)\n' +
          '——目的不是探险,是殖民。\n' +
          '——船上装着马、猪、牛、羊、谷种——这是「殖民种植包」,准备在新土地上建立永久社区。\n' +
          '——最重要的乘客:5 个修士,带着任务皈依 Taíno。其中一个叫 Bernardo Boyl,后来很快和我吵翻——他认为我对 Taíno 太残忍。\n\n' +
          '我以为我在去建立一个西班牙的「东方殖民地」。我没意识到我其实在建立人类历史上第一个跨大西洋 plantation 系统的雏形。\n\n' +
          '从这一艘船开始,殖民模板被复制——给后面 4 个世纪的英、法、荷、葡、美。',
        en:
          'April 1493. Barcelona. I disembarked at Palos with seven Taíno people I had taken from Hispaniola, several parrots, gold masks, lengths of cotton cloth.\n\n' +
          'Ferdinand and Isabella sent escorts to lead me into Barcelona in procession. I walked through the city, into the audience hall, knelt down. Isabella told me to rise and sit beside her — the highest mark the Spanish court had ever shown an ordinary sailor. In that moment I, age forty-one, the son of a Genoa weaver, had become the Admiral of the Ocean Sea.\n\n' +
          'This is what I did not say out loud. As I knelt before Isabella, two things were pulling inside me.\n\n' +
          'The first was real faith. I told Isabella, "Your Highness, the Taíno will convert easily — they are waiting for your faith." I was not performing. I genuinely believed I was doing God\'s work. I had grown up Catholic in Genoa; I read Marco Polo with one hand and the Bible and Aquinas with the other. I believed bringing Christianity to a new people was the salvation of souls.\n\n' +
          'The second was calculation. I told Isabella, "Your Highness, this land has mountains of gold — I will find them." I was not performing this either. I had seen the small gold balls on Taíno necks, and I assumed there were gold mountains inland. I also did the math. My ten percent of any profit was an enormous number.\n\n' +
          'Real faith and real calculation lived in the same chest. This is the most important psychological structure of the sixteenth-century colonizer: humility before the king plus violence to Indigenous peoples plus true belief plus true greed — all in one person.\n\n' +
          '— —\n\n' +
          'Five months later, on September 25, 1493, I sailed from Cádiz on the second voyage. Everything was different now:\n\n' +
          '- Seventeen ships (the first voyage had three).\n' +
          '- Fifteen hundred Spaniards (the first voyage had ninety).\n' +
          '- The purpose was not exploration. It was colonization.\n' +
          '- The hold carried horses, pigs, cattle, sheep, seed grain — a "colonization kit" to build a permanent community on new land.\n' +
          '- The most important passengers were five friars charged with converting the Taíno. One of them, Bernardo Boyl, would soon quarrel with me — he thought I treated the Taíno too cruelly.\n\n' +
          'I thought I was sailing to set up a Spanish "eastern colony." I did not yet realize I was actually founding the prototype of the first transatlantic plantation system in human history.\n\n' +
          'From this fleet onward, the template would be copied — by the English, French, Dutch, Portuguese, and Americans for the next four centuries.',
      },
      deliverGoal: {
        cn: '1493 年 4 月 Barcelona 凯旋——我跪在 Isabella 面前,真信仰 + 真算计长在同一颗心里。9 月 25 日第二次出航 17 艘船 1500 人——这次目的是殖民。',
        en: 'April 1493 in Barcelona, I knelt before Isabella with both real faith and real calculation in the same chest. September 25, 1493, I sailed again with seventeen ships and fifteen hundred men — this time the purpose was colonization.',
      },
      engagementHook: {
        cn: '1494 年我建第二个殖民地 La Isabela。1495 年我做了一件让我后世最受指责的事——我下令砍手。',
        en: 'In 1494 I founded the second colony, La Isabela. In 1495 I gave the order that history would condemn me for most — I ordered the cutting off of hands.',
      },
      expectedLength: '370-430 字 CN',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N6 — STORY: 1495 黄金税 + 砍手 (Sarah audit §6.3 micro-detail)
    // 7 年级承受度: careful framing — 不轻飘飘过
    // ═══════════════════════════════════════════════════
    {
      id: 'col-n6',
      phase: 'story',
      cosplay: 'Christopher Columbus',
      narrativeRef: '§3 Columbus 1495 黄金税 + Sarah audit §6.3 砍手 micro-detail',
      content: {
        cn:
          '1494 年 La Isabela 建好,Hispaniola 北岸。我手下 1,500 个西班牙人开始要黄金。问题是——黄金不像我说的那么多。Hispaniola 内陆是有金沙的,但不是「金山」。\n\n' +
          '我手下的西班牙人开始抱怨。我自己也焦虑:如果我空手回西班牙,Isabella 会怎么看我?\n\n' +
          '1495 年我做了一个决定。这个决定接下来 530 年没有人为我辩护。\n\n' +
          '我下了一道命令。每一个 Hispaniola 上 14 岁以上的 Taíno,每 3 个月,必须上交一定量的黄金粉(具体量随地区而定,但都是 Taíno 平时根本采不到的量)。上交的人,我给一个铜片戴脖子上,作为「这一季已交税」的凭证。\n\n' +
          '——交不上的人会怎样?\n\n' +
          '我的命令是:砍手。\n\n' +
          '我让西班牙士兵抓没有铜片的 Taíno,把他们的双手砍掉,挂在脖子上,送回村里。我命令这是「警告」——让其他 Taíno 知道下一季要按时交税。\n\n' +
          '很多 Taíno 因此失血而死。很多家庭——爸爸去金矿,妈妈被强奸或杀,孩子饿死或天花死。整个 Hispaniola 这种事在 1495 到 1500 这 5 年间,系统性地发生。\n\n' +
          '——这一遍让你听见我没说出口的。我下这个命令的时候,我心里没有一刻怀疑过自己。我跟自己说:「这是为了让殖民地正常运作。这些是异教徒,他们的灵魂要等他们皈依才得救——他们的肉体不那么重要。我是在做西班牙王室和上帝的工作。」\n\n' +
          '我用「正常运作」「殖民秩序」「为了未来更大的好处」来给砍手命令找理由。我不是冷血疯子。我是一个相信自己在做对的事的人——这种相信,比冷血更危险。\n\n' +
          '——\n\n' +
          '同一年(1495 年),我写了一封信给 Isabella。信里有一句话:\n\n' +
          '「这里黄金一定多——我会找到。人民温和——做奴隶完美。」\n\n' +
          '——做奴隶完美。这五个字是我自己写的。我没有「无意识犯罪」。我没有「文化误解」。我主动设计了一个奴役体系——把它写成一封报告,寄给我的国王。\n\n' +
          '历史学家 1500 年前后已经看到这一点。Bartolomé de las Casas (一个西班牙修士,1502 年到 Hispaniola,我死后他写了《简短叙述印度群岛的毁灭》) 说过一句话:「Columbus 不是被时代裹着走——他在领着时代走向那个方向。」',
        en:
          'In 1494 La Isabela was built on the north coast of Hispaniola. My fifteen hundred Spaniards began to demand gold. The problem was that gold was not as plentiful as I had promised. Hispaniola did have gold dust in some inland streams, but no "mountain of gold."\n\n' +
          'My Spaniards began to complain. I was anxious for myself: if I returned empty-handed to Spain, how would Isabella regard me?\n\n' +
          'In 1495, I made a decision. No one in the next five hundred and thirty years has defended me on this point.\n\n' +
          'I issued an order. Every Taíno on Hispaniola aged fourteen or older, every three months, was to deliver a specified quantity of gold dust (the quantity varied by region, but was always more than the Taíno could actually find). Anyone who paid received a copper disc to wear around the neck, marking "tax paid this quarter."\n\n' +
          'And those who could not pay?\n\n' +
          'My order was: cut off their hands.\n\n' +
          'I had Spanish soldiers seize Taíno without the copper disc, cut off both hands, hang the hands around the neck, and send the person back to the village. The order called this "warning" — so the rest of the Taíno would understand the next deadline was real.\n\n' +
          'Many bled to death. Many families — father in the gold mines, mother raped or killed, children starving or dead of smallpox. Across Hispaniola, between 1495 and 1500, this happened as a system, not as occasional cruelty.\n\n' +
          'This is what I did not say out loud. When I gave the order, not one moment did I question myself. I told myself, "This is what it takes for the colony to function. These are pagans; their souls will be saved only when they convert; their bodies are less important. I am doing the work of the Spanish crown and of God."\n\n' +
          'I used the words "normal operation," "colonial order," "the greater good in the future" to justify hand-cutting. I was not a cold-blooded madman. I was a man who believed he was doing the right thing — and that belief is more dangerous than coldness.\n\n' +
          '— —\n\n' +
          'That same year, 1495, I wrote a letter to Isabella. In it sat one sentence:\n\n' +
          '"There is certainly much gold here — I will find it. The people are gentle — they will make perfect slaves."\n\n' +
          'They will make perfect slaves. Those words were mine. I was not "unconscious of crime." I was not "culturally confused." I actively designed an enslavement system — and reported it to my king.\n\n' +
          'Historians close to 1500 already saw this. Bartolomé de las Casas (a Spanish friar who came to Hispaniola in 1502 and, after my death, wrote A Short Account of the Destruction of the Indies) put it like this: "Columbus did not get carried along by his time. He led the time toward that direction."',
      },
      deliverGoal: {
        cn: '1495 年我下黄金税命令,交不上的人砍手。同一年我写信给 Isabella 说「人民温和,做奴隶完美」。我没有「无意识犯罪」——我主动写下来。',
        en: 'In 1495 I imposed the gold tribute and ordered hand-cutting for those who could not pay. The same year I wrote to Isabella that the Taíno would "make perfect slaves." Those words were mine, on the page, signed by me — there was no unconsciousness in this crime.',
      },
      engagementHook: {
        cn: '1500 年我手下西班牙殖民者开始反抗我。Isabella 派一个调查官 Bobadilla 来。我自己被自己设计的制度反噬。',
        en: 'By 1500 my own Spaniards were turning against me. Isabella sent an investigator named Bobadilla. The system I had designed turned around and bit its own designer.',
      },
      expectedLength: '430-490 字 CN',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N7 — STORY: 1500 戴脚镣回西班牙
    // ═══════════════════════════════════════════════════
    {
      id: 'col-n7',
      phase: 'story',
      cosplay: 'Christopher Columbus',
      narrativeRef: '§3 Columbus 1500 戴脚镣 + Bobadilla 调查',
      content: {
        cn:
          '1499 到 1500,我在 Hispaniola 的管理已经全面崩塌。原因有 4 个,任何一个单独存在也够倒台。\n\n' +
          '——西班牙殖民者反抗我。他们叫我「Genoa 外人」——我不是西班牙人,凭什么管他们?他们不愿交税给我,不愿听我命令。\n' +
          '——Taíno 反抗。1495 年起 Cibao 内陆的几个 cacique(酋长——Taíno 政治领袖)联手起义。我用马 + 火枪 + 战狗镇压,但他们没消失。\n' +
          '——黄金不像我承诺的多。我跟 Isabella 说「黄金山」,但每年送回西班牙的黄金量很小。我要补这个差,所以开始送奴隶。1495 年我送 500 个 Taíno 奴隶回 Cádiz,Isabella 当时大怒(她至少在表面上反对原住民奴役),叫我把活下来的送回 Hispaniola。\n' +
          '——我自己是个糟糕的管理者。我会航海,我不会管殖民地。我对西班牙殖民者太严,对 Taíno 太残,对 Bernardo Boyl 那样的修士太冷。我没有让任何一方满意。\n\n' +
          '1500 年 8 月,Isabella 派一个调查官 Francisco de Bobadilla 来 Hispaniola。\n\n' +
          'Bobadilla 9 月 23 日上岛——他到 La Isabela 时第一件事就是看见 7 个西班牙殖民者尸体挂在我的绞架上(我处死了他们因为他们密谋造反)。Bobadilla 决定:这个人不能继续管。\n\n' +
          '10 月,Bobadilla 把我抓起来。\n\n' +
          '——他给我戴脚镣。我 49 岁,从前是西班牙的「海洋将军」,现在被铁链锁住——和我的弟弟 Bartholomew、Diego 一起,关进 La Isabela 一座小房子里。\n\n' +
          '——他押我上船,送我回西班牙。船长在大西洋上想替我开锁,他说:「将军,这太丢脸了,我帮你。」我拒绝。我让脚镣留着——我要西班牙王室看见我是怎么被对待的。\n\n' +
          '12 月初我到 Cádiz。我下船的时候戴着脚镣。Isabella 听说我戴着脚镣进国门,流泪。她叫人立刻给我开锁,接我去见她。\n\n' +
          '——这一遍让你听见我没说出口的。我跪在 Isabella 面前那一次(7 年前 Barcelona 那次),我穿绸袍,我是英雄。我现在第二次跪在 Isabella 面前,我穿沾血的水手衣,脚踝上还有铁的痕迹。\n\n' +
          'Isabella 给我开锁。但她没还我总督的位子。她保留我「将军」的虚衔——但 Hispaniola 由别人管。\n\n' +
          '我的殖民管理者生涯,这一刻结束了。\n\n' +
          '我自己设计的制度——殖民地的「黄金税 + 奴役 + 强制劳动」系统——还在运作,运作得比我管的时候更狠(没有我就不会更温和;只会换一个名字继续)。我开的车,我下了车,车继续开。',
        en:
          'Between 1499 and 1500, my management of Hispaniola collapsed on every front. Four separate failures, any one of which would have brought me down.\n\n' +
          '- The Spanish colonists turned on me. They called me "the Genoese outsider" — I was not Spanish, why should I rule them? They refused to pay tribute to me. They refused my orders.\n' +
          '- The Taíno rebelled. From 1495, several cacique (chieftains, the political leaders of the Taíno) in the inland Cibao region rose together. I crushed them with horses, firearms, and war dogs, but the resistance did not die.\n' +
          '- The gold was nothing like the amount I had promised. I had told Isabella of "mountains of gold." Each year, very little gold actually reached Spain. To make up the gap I began shipping enslaved people — in 1495 I sent five hundred Taíno enslaved to Cádiz. Isabella was furious (at least openly, she opposed enslaving Indigenous peoples) and ordered the survivors returned.\n' +
          '- I was a poor administrator. I could navigate; I could not run a colony. I was harsh to the Spaniards, brutal to the Taíno, cold to friars like Bernardo Boyl. I had pleased no one.\n\n' +
          'In August 1500 Isabella sent a royal investigator, Francisco de Bobadilla, to Hispaniola.\n\n' +
          'Bobadilla landed on September 23. The first thing he saw at La Isabela was seven Spanish colonists\' corpses hanging from my gallows (I had executed them for plotting rebellion). Bobadilla decided this man cannot continue to rule.\n\n' +
          'In October, Bobadilla arrested me.\n\n' +
          'He had me put in chains. I was forty-nine. Once Admiral of the Ocean Sea, now in irons — held with my brothers Bartholomew and Diego in a small house at La Isabela.\n\n' +
          'He shipped me back to Spain. On the Atlantic crossing, the captain offered to take the chains off — "Admiral, this is shameful, let me free you." I refused. I let the chains stay on. I wanted the Spanish court to see how I had been treated.\n\n' +
          'In early December I reached Cádiz. I disembarked still wearing the chains. When Isabella heard I had come ashore in irons, she wept. She ordered the chains struck off at once and called for me.\n\n' +
          'This is what I did not say out loud. When I knelt before Isabella the first time, in Barcelona seven years earlier, I wore silk and I was a hero. The second time I knelt before her, I wore a sailor\'s blood-stained linen, and the marks of the iron were still on my ankles.\n\n' +
          'Isabella struck off my chains. But she did not return the governorship to me. She kept the empty title "Admiral" — and put Hispaniola under another man.\n\n' +
          'My career as a colonial administrator ended in that moment.\n\n' +
          'The system I had designed — the gold tribute, enslavement, forced labor — kept running, harsher than when I ran it (no Columbus did not mean kinder; it meant a different name on the same instrument). I had built the wagon and stepped off; the wagon kept rolling.',
      },
      deliverGoal: {
        cn: '1500 年我戴脚镣回西班牙——49 岁,从「海洋将军」沦为铁链中的人。我的殖民管理者生涯结束——但我设计的系统继续运作,比我管的时候更狠。',
        en: 'In 1500 I came back in chains. At 49 I went from Admiral of the Ocean Sea to a man in irons. My career as administrator ended — but the system I had designed kept running, harsher than when I ran it.',
      },
      engagementHook: {
        cn: '1502 年我 51 岁,绝望想再获 Isabella 信任。我请求第四次航行——我至死想找到「真正的亚洲」。',
        en: 'In 1502, at 51, I was desperate to win Isabella back. I begged for a fourth voyage — I died still trying to find what I called "the real Asia."',
      },
      expectedLength: '430-490 字 CN',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N8 — STORY: 1502-1504 第四次航行 — Caribbean 最后一次 + 经济失败
    // ═══════════════════════════════════════════════════
    {
      id: 'col-n8',
      phase: 'story',
      cosplay: 'Christopher Columbus',
      narrativeRef: '§3 Columbus 1502-1504 第四次航行',
      content: {
        cn:
          '1502 年 5 月 11 日,我从 Cádiz 出发第四次航行。我 51 岁。我带 4 艘小船,140 人,其中包括我 13 岁的儿子 Fernando(他后来写下我的传记)。\n\n' +
          '——这一次我心里有一个秘密目标。\n\n' +
          '我至今不愿承认我没到过亚洲。10 年过去了——别人开始怀疑我看到的不是亚洲,是一片新大陆。Amerigo Vespucci 1499 到 1500 年那两次航行回来,公开说「这是新世界」。1503 年开始,欧洲地图上有人画一片单独的陆地,标 Mundus Novus(「新世界」拉丁文)。\n\n' +
          '我不接受。我心里说:这不是新大陆——这是亚洲外缘的群岛。如果我能找到一条西通道,通到 Marco Polo 写的那个东方——我就能洗刷我地理错误的耻辱。\n\n' +
          '所以 1502 第四次航行,我沿中美洲(今天 Honduras、Nicaragua、Costa Rica、Panama)海岸找。我每到一个地方就问当地人:「这儿往西有没有大水路?」当地 Maya 商人说有——但他们说的是横跨 Panama 地峡那条 70 公里的小路,不是大洋。\n\n' +
          '我没找到。我没找到我想找的西通道。因为根本没有——Panama 海峡 1914 年才挖通,我比它早 412 年。\n\n' +
          '我的航行变成一场灾难:\n\n' +
          '——我的 4 艘船全坏了。3 艘漏水沉了,最后 1 艘搁浅在 Jamaica。\n' +
          '——我和我的 116 个船员在 Jamaica 一片海滩上困了 1 年。当地 Taíno 一开始给我们食物,后来他们看穿我们是「海上漂的人」,不再合作。\n' +
          '——我用一个把戏:1504 年 2 月 29 日有月食。我带的天文表显示这一天月食。我提前几天告诉 Taíno cacique:「上帝因为你们不给我们食物生气,他要把月亮拿走。」月食那一晚,Taíno 看见月亮真的开始消失,他们恐慌地求我向上帝求情。我「向上帝求情」,月食结束,月亮回来。Taíno 信了我,继续给我们食物。\n\n' +
          '我用一个天文骗局活下来。这是我「英雄」一面剩的最后一笔——一个最聪明的水手在一片绝望海滩上,用 Marco Polo 时代就已经知道的月食数据骗了一个本土民族。\n\n' +
          '——\n\n' +
          '1504 年 11 月,救援船终于到 Jamaica 接我。我回到西班牙。同一个月,Isabella 死。\n\n' +
          '我失去最后一个庇护人。我 53 岁,病重,关节炎严重——我在余下的日子里在西班牙各地房子里躺着,等着 Ferdinand 给我一个回应——回应「请还我总督头衔 + 10% 利润」的请求。\n\n' +
          'Ferdinand 不回。',
        en:
          'On May 11, 1502, I sailed from Cádiz on the fourth voyage. I was fifty-one. Four small ships, one hundred and forty men, including my thirteen-year-old son Fernando (who would later write my biography).\n\n' +
          'This time I carried a private goal.\n\n' +
          'Even now I refused to admit I had not reached Asia. Ten years had passed. Others were beginning to argue that what I had seen was not Asia but a new continent. Amerigo Vespucci, after voyages in 1499 and 1500, was openly calling it "a new world." From 1503 onward, European maps were starting to draw a separate landmass labeled Mundus Novus, "the New World" in Latin.\n\n' +
          'I refused this. In my head I said: this is not a new continent — these are islands off the outer edge of Asia. If I could find a strait westward, through to the East that Marco Polo described, I could wipe out the shame of my geographic error.\n\n' +
          'So in 1502 I sailed along the coast of Central America (today Honduras, Nicaragua, Costa Rica, Panama) hunting for the strait. At every village I asked the local people: "Is there a big waterway leading west from here?" Maya traders said yes — but what they meant was the seventy-kilometer overland trail across the Isthmus of Panama, not an ocean.\n\n' +
          'I found nothing. There was nothing to find. The Panama Canal would not be cut until 1914 — four hundred and twelve years later.\n\n' +
          'The voyage turned into a disaster.\n\n' +
          '- My four ships all failed. Three sprang leaks and sank. The last one ran aground in Jamaica.\n' +
          '- One hundred and sixteen men and I were stranded on a Jamaica beach for a year. The local Taíno fed us at first, but eventually saw us for what we were — castaways with nothing to offer — and stopped helping.\n' +
          '- I used a trick to survive. On February 29, 1504, an eclipse of the moon was due. I knew because I carried astronomical tables. A few days before, I told the Taíno cacique: "God is angry because you stopped feeding us. He will take the moon away." On the night of the eclipse, the Taíno watched the moon vanish and panicked. They begged me to ask God to give it back. I "asked God." The eclipse ended; the moon returned. They believed me; they began feeding us again.\n\n' +
          'I survived by an astronomical deception. That is the last "heroic" thing left of me — a sailor on a desperate beach using eclipse tables that had existed since Marco Polo\'s time to fool an Indigenous people.\n\n' +
          '— —\n\n' +
          'In November 1504 a rescue ship finally reached Jamaica and took me off. I returned to Spain. The same month, Isabella died.\n\n' +
          'I lost my last protector. I was fifty-three, gravely ill with severe arthritis. I spent my remaining days lying in borrowed houses around Spain, waiting for Ferdinand to answer my request: "Restore my title of governor and my ten percent of the profits."\n\n' +
          'Ferdinand never answered.',
      },
      deliverGoal: {
        cn: '1502-1504 第四次航行——4 艘船全坏 + Jamaica 困 1 年 + 我用月食骗 Taíno 拿食物 + 1504 年 11 月 Isabella 死,我失去最后庇护人。',
        en: 'Fourth voyage 1502-1504. All four ships failed. Stranded in Jamaica for a year. Survived by faking divine power with eclipse tables. November 1504 Isabella dies — I lose my last protector.',
      },
      engagementHook: {
        cn: '1506 年 5 月 20 日,Valladolid。我 54 岁,在床上闭眼。我至死相信自己到的是亚洲。',
        en: 'May 20, 1506. Valladolid. At 54 I closed my eyes for the last time. I died believing I had reached Asia.',
      },
      expectedLength: '420-480 字 CN',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N9 — STORY: 1506 死 + 至死相信亚洲 + 留下的系统继续 (Sarah P0.4 patch)
    // vocab/concept: encomienda + columbian-exchange + asiento + doctrine-of-discovery
    // ═══════════════════════════════════════════════════
    {
      id: 'col-n9',
      phase: 'story',
      cosplay: 'Christopher Columbus',
      narrativeRef: '§3 Columbus 1506 死 + §4 1493-1518 殖民系统 + §5 5 层意义',
      content: {
        cn:
          '1506 年 5 月 20 日,Valladolid(西班牙北部一个城)一所借来的房子里。我 54 岁。床边是我儿子 Fernando(17 岁)和我的弟弟 Diego。\n\n' +
          '——我闭眼前几小时,我对 Fernando 说的最后一句被记下来的话是:「神父,我把灵魂交在你手里」(In manus tuas, Domine, commendo spiritum meum——这是 Jesus 在十字架上的最后一句拉丁文,我借用它告别。)\n\n' +
          '我闭眼那一刻,我相信我到的是亚洲。我一辈子,4 次航行加起来 14 年,4 次到过中美洲 + 加勒比海岸,我没有承认过一次:这不是 Marco Polo 写的世界——这是一片完全新的大陆。\n\n' +
          '我顽固。我至死顽固。\n\n' +
          '——\n\n' +
          '我死后的事情,这一节让你看见,因为这是我留下的真正遗产:\n\n' +
          '——1503 年(我死前 3 年)Isabella 已经下了一道令,正式把 Hispaniola 的「黄金税 + 奴役」系统化叫做 encomienda——西班牙殖民者获分配一定数量的原住民,有权从他们身上「征收劳动和贡物」(交换条件是「保护他们 + 教他们基督教」),这就是西班牙在新世界 300 年的农奴制度。这个体系长在我 1495 年的命令上。\n\n' +
          '——1493 年 5 月 4 日(在我第二次航行准备期间)教皇 Alexander VI 颁了 Inter Caetera 敕令,确立 Doctrine of Discovery(发现教义)——基督徒可以征服非基督徒土地。这个法律框架之后 530 年支撑欧洲全球殖民。直到 2023 年 3 月 30 日,梵蒂冈在教皇 Francis 任内才正式废除 Doctrine of Discovery。530 年。\n\n' +
          '——1518 年(我死后 12 年),Charles V 颁了 asiento,批准 4,000 个非洲人 enslaved 直运 Hispaniola。这是跨大西洋奴隶贸易系统化的官方起点。我 1495 年送 500 个 Taíno 奴隶回西班牙的时候,我就已经在为这件事铺路。我证明了「跨大西洋人口运输」可行。20 年后欧洲只是把方向反过来,非洲到美洲。1500 到 1888 年,1,200 万非洲人被运到美洲,200-300 万死在船上(中间航程 Middle Passage)。\n\n' +
          '——1492 年起,我和我手下的人带去了天花、麻疹、流感。Hispaniola 起点 30 万到 100 万 Taíno (学界争议),1542 年时只剩 200 个(Bartolomé las Casas 数字)。整个美洲接下来 200 年大约 1 亿原住民死,主要死因是病(没免疫力),但奴役加屠杀加强制劳动加速了这个崩塌。这后来被叫做 Columbian Exchange(哥伦布交换):欧洲、美洲、非洲三大洲生物、病、文化、人口的双向流动。但这种「交换」从来不是平等的——欧洲带去的是病和锁链,美洲送来的是黄金、玉米和马铃薯,非洲送来的是被锁的人。\n\n' +
          '——这一遍让你听见我没说出口的。我以为我在做上帝的工作。我以为我在传福音。我以为我会在历史上变成「把基督教带到新大陆的人」。\n\n' +
          '我后来确实变成那个人——但不是只是这个意思。500 年后人们看着我,看到的是 1 亿人死亡的 trigger、跨大西洋奴隶贸易的雏形、500 年殖民语言模板的发明者。\n\n' +
          '我至死没看到这些。这是我「成功」的一面——也是我最大的盲点。',
        en:
          'May 20, 1506. A borrowed house in Valladolid (a city in northern Spain). I was fifty-four. At my bed: my son Fernando (seventeen) and my brother Diego.\n\n' +
          'A few hours before I closed my eyes, my last recorded sentence to Fernando was, "Father, into thy hands I commend my spirit" (In manus tuas, Domine, commendo spiritum meum — Jesus\'s last sentence on the cross in Latin; I borrowed it to say goodbye).\n\n' +
          'In that moment, I still believed I had reached Asia. Across my whole life, four voyages and fourteen total years at sea, four landings in Central America and the Caribbean, I never once admitted: this is not the world Marco Polo wrote about — this is a completely new continent.\n\n' +
          'I was stubborn. I was stubborn to the end.\n\n' +
          '— —\n\n' +
          'What happened after I died — this is the real legacy you have to see:\n\n' +
          '- In 1503 (three years before my death), Isabella formally codified the Hispaniola "gold tribute and enslavement" system as encomienda — Spanish colonists were allotted a certain number of Indigenous people, with the right to extract labor and tribute from them (in exchange for "protection and Christian teaching"). This was the Spanish New World feudal system for the next three hundred years. It grew straight out of my 1495 order.\n\n' +
          '- On May 4, 1493 (during the run-up to my second voyage), Pope Alexander VI issued the Inter Caetera bull, establishing the Doctrine of Discovery — Christians may conquer the lands of non-Christians. That legal framework underwrote five hundred and thirty years of European global colonization. Only on March 30, 2023, under Pope Francis, did the Vatican formally repudiate the Doctrine of Discovery. Five hundred and thirty years.\n\n' +
          '- In 1518 (twelve years after my death), Charles V issued the asiento, authorizing four thousand enslaved Africans to be shipped directly to Hispaniola. That was the official start of the systematic transatlantic slave trade. When I sent five hundred Taíno enslaved to Spain in 1495, I was already laying that track — I had proved that transatlantic human transport was workable. Twenty years later Europe simply reversed the direction: Africa to the Americas. From 1500 to 1888, twelve million Africans were carried to the Americas; two to three million died on the ships (the Middle Passage).\n\n' +
          '- From 1492 onward, my men and I brought smallpox, measles, influenza. Hispaniola, with its starting Taíno population of 300,000 to 1,000,000 (the figure is debated), was reduced to about 200 by 1542 (Bartolomé de las Casas\'s number). Across the Americas over the next two hundred years, roughly one hundred million Indigenous people died, mainly from disease (no immunity), but enslavement, massacre, and forced labor accelerated the collapse. This came to be called the Columbian Exchange — the two-way flow of biology, disease, culture, and people between Europe, the Americas, and Africa. But "exchange" was never equal: Europe sent disease and chains; the Americas sent gold and maize and potatoes; Africa sent people in iron.\n\n' +
          'This is what I did not say out loud. I thought I was doing God\'s work. I thought I was carrying the gospel. I thought I would be remembered as the man who brought Christianity to a new world.\n\n' +
          'I did become that man — but not only that. Five hundred years later, when people look at me, they see the trigger for one hundred million deaths, the prototype of the transatlantic slave trade, the inventor of the language template that justified five hundred years of colonization.\n\n' +
          'I never saw any of this. That is what made me "successful." It is also what made me blindest.',
      },
      deliverGoal: {
        cn: '我 1506 年死,至死相信我到的是亚洲。我留下的真正遗产:encomienda(1503) + Doctrine of Discovery(1493/2023 废除) + asiento(1518) + Columbian Exchange + 1 亿原住民死 + 1200 万非洲人 enslaved.',
        en: 'I died in 1506 still believing I had reached Asia. The real legacy I left: encomienda (1503), Doctrine of Discovery (1493 to 2023 repudiation), asiento (1518), Columbian Exchange, one hundred million Indigenous dead, twelve million enslaved Africans.',
      },
      engagementHook: {
        cn: '现在跳出 Columbus,narrator 接手,问你一个我自己没办法回答的问题。',
        en: 'Now step out of Columbus. Narrator takes over. The question I could not answer myself, you have to answer.',
      },
      expectedLength: '450-510 字 CN',
      expectsRealAnswer: false,
    },

    // ═══════════════════════════════════════════════════
    // N10 — SYNTHESIS: 真问题 — Columbus 是「reluctant 英雄」还是「殖民系统设计者」?
    // ═══════════════════════════════════════════════════
    {
      id: 'col-n10',
      phase: 'synthesis',
      cosplay: 'narrator',
      narrativeRef: '§3 Columbus reluctant 类型英雄 + §11 Q1 + Sarah audit §5',
      content: {
        cn:
          '你刚扮演完 Columbus 9 节。从 38 岁站在 Bahamas 海岸,到 1493 年在 Azores 海面写「可皈依 + 可工作 + 可奴役」那封信,到 1495 年下砍手命令同时写「人民温和——做奴隶完美」,到 1500 年戴脚镣回西班牙,到 1506 年至死相信自己到了亚洲。\n\n' +
          '这就是这一节要问的真问题:**Columbus 是「reluctant 类型英雄」(算错地球但意外改变历史) ——还是「殖民系统的主动设计者」**?\n\n' +
          '一边,他是 reluctant 英雄。他算错地球周长 25%,顶着错的算计向西走。如果美洲不正好挡在那里,他和 90 个人会渴死。他「成功」是因为他幸运加顽固,不是因为算对。这种 reluctant 类型在历史里特别常见——一个相信错事情的人,因为错的相信意外做了大事。\n\n' +
          '另一边,他是殖民系统的主动设计者。他 1492 年 10 月 12 日上岸第一天就在日志里写「50 人就能让 5 万人为我们工作」。殖民 mindset 不是 5 年后慢慢长出来,是登陆第一天就在。他 1493 年那封 Azores 信用三个字描述新民族:「可皈依 + 可工作 + 可奴役」。这套语言模板被印 17 个版本传遍欧洲,做了 500 年殖民语言的奠基。他 1495 年亲手写下「这里黄金一定多,人民温和,做奴隶完美」——这是签字承认,不是无意识犯罪。\n\n' +
          '两种说法都拿得出真证据:\n\n' +
          '**一种说法**(传统美国教科书 + 「Columbus Day」纪念派):Columbus 是 reluctant 英雄——他不是冷血计算者,他真心相信自己在做上帝的事 + 他作为水手确实勇敢顽固。' +
          '他个人的暴力命令(砍手 + 奴役)是 16 世纪殖民地常态——每一个西班牙、葡萄牙、英国殖民官员都做过类似的事——把一个人的责任放大到「殖民暴力的奠基者」是不公平的。' +
          '他给世界的礼物——大西洋海路、Columbian Exchange 带来的玉米/马铃薯/西红柿养活了下一个 5 亿欧洲人——是真的。你不能因为他后来的暴力否定他前面的勇气。\n\n' +
          '**另一种说法**(后殖民学派 + 21 世纪 Indigenous Peoples\' Day 派):Columbus 不是 reluctant 英雄——他是 active architect(主动建筑师)。1492 年 10 月 12 日上岸第一天日志「50 人就能让 5 万人为我们工作」,这不是无意识。1493 年 Azores 信「可皈依 + 可工作 + 可奴役」,这不是无意识。1495 年「人民温和,做奴隶完美」,这不是无意识。' +
          '他 4 次航行 14 年里有 12 年是在主动建立 Hispaniola 殖民地的奴役系统——encomienda 1503 + asiento 1518 长在他的命令上。把他叫「reluctant 英雄」是 21 世纪的认知失败——为他洗白让我们没办法看清楚 500 年殖民暴力的真正起点。\n\n' +
          '两边都站得住。\n\n' +
          '**你怎么看**——Columbus 是 reluctant 英雄,还是殖民系统的主动设计者?给我你最有力的一条理由。想 30 秒。',
        en:
          'You have just played Columbus across nine sections. From the thirty-eight-year-old standing on a Bahamas shore, to the 1493 letter on the sea off the Azores describing the Taíno as "convertible plus workable plus enslavable," to the 1495 hand-cutting order paired with the line "the people are gentle — they will make perfect slaves," to coming home in chains in 1500, to dying in 1506 still believing he had reached Asia.\n\n' +
          'So here is the real question: **was Columbus a "reluctant hero" (wrong about the earth, accidentally changing history) — or was he the active architect of a colonial system?**\n\n' +
          'On one side: he was a reluctant hero. He miscalculated the size of the earth by twenty-five percent. He sailed west wearing wrong numbers. If the Americas had not happened to be in the way, he and ninety men would have died of thirst. His "success" came from luck and stubbornness, not from calculation. That reluctant type appears often in history — a man who believes the wrong thing accomplishes great things because of his wrong belief.\n\n' +
          'On the other side: he was the active architect of a colonial system. On day one of landing, October 12, 1492, his log read "fifty of our men could make them all work" — the colonial mindset was not something that grew over five years; it was on the page on day one. The 1493 letter from the Azores summarized a new people in three words — convertible, workable, enslavable — and that template was printed in seventeen editions across Europe, becoming the founding script for five hundred years of colonial language. The 1495 line "this land has much gold — the people are gentle — they will make perfect slaves" was a signed admission, not an unconscious crime.\n\n' +
          'Both readings have evidence.\n\n' +
          '**One view** (traditional American textbooks plus the "Columbus Day" school): Columbus was a reluctant hero. He was not a cold calculator. He genuinely believed he was doing God\'s work, and as a sailor he really was brave and stubborn. ' +
          'His personal violent orders (hand-cutting, enslavement) were the norm in sixteenth-century colonies — every Spanish, Portuguese, and English colonial officer did similar things — and to scale up his individual responsibility to "founding architect of colonial violence" is unfair. ' +
          'The gifts he handed humanity — the Atlantic sea route, the maize, potatoes, and tomatoes of the Columbian Exchange that fed the next half-billion Europeans — are real. You cannot cancel his earlier courage because of his later cruelty.\n\n' +
          '**The other view** (postcolonial scholarship plus the twenty-first-century Indigenous Peoples\' Day school): Columbus was not a reluctant hero. He was an active architect. The October 12, 1492, log line "fifty of our men could make them all work" was not unconscious. The 1493 Azores letter "convertible, workable, enslavable" was not unconscious. The 1495 line "the people are gentle — they will make perfect slaves" was not unconscious. ' +
          'Across his four voyages and fourteen years, twelve of those years went into actively building the Hispaniola enslavement system — encomienda 1503 and asiento 1518 grew straight out of his orders. To call him a "reluctant hero" is a twenty-first-century failure of clarity — washing him white prevents us from seeing the real starting point of five hundred years of colonial violence.\n\n' +
          'Both sides stand.\n\n' +
          '**What do you think** — was Columbus a reluctant hero or the active architect of colonial system? Give me your strongest single reason. Take thirty seconds.',
      },
      deliverGoal: {
        cn: 'Columbus 是 reluctant 英雄(错算地球意外改变历史)——还是殖民系统的主动设计者(登陆第一天日志就写「可工作」)?两种说法都拿得出真证据——你给一条最有力的理由就够了。',
        en: 'Was Columbus a reluctant hero (wrong about the earth but accidentally changing history) — or the active architect of the colonial system (the day-one log already said "they will work for us")? Both views have evidence. Give me your strongest single reason.',
      },
      engagementHook: {
        cn: '**你怎么看**——Columbus 是 reluctant 英雄还是殖民系统的主动设计者?想 30 秒。',
        en: 'What do you think — reluctant hero, or active architect? Take thirty seconds.',
      },
      expectedLength: '440-500 字 CN + 真问题',
      expectsRealAnswer: true,
    },

    // ═══════════════════════════════════════════════════
    // N11 — SYNTHESIS: 跨时代锚 — 1493 信"可皈依 + 可工作 + 可奴役" vs 21 世纪「潜在市场——可教育——可服务」
    // ═══════════════════════════════════════════════════
    {
      id: 'col-n11',
      phase: 'synthesis',
      cosplay: 'narrator',
      narrativeRef: '§5 文献 1 第 2 层 + §5 现代化解读 + §11 Q1 Columbus Day vs Indigenous Peoples Day',
      content: {
        cn:
          '现在跳出 Columbus 1493 年那封信,看一看它今天在哪里。\n\n' +
          'Columbus 在 Azores 海面用三个字描述 Taíno——「可皈依 + 可工作 + 可奴役」。这套语言模板,接下来 500 年,被反复复用。每一次形态变一点点,但骨架是同一个:简化对方文化 + 强调对方「可改造 + 可工作 + 可剥削」+ 通过新媒体技术(印刷 → 报纸 → 电视 → 网络) 传给下一代。\n\n' +
          '——18-19 世纪欧洲殖民官员报告:直接 Columbus 模板。「这片土地的人民温和 + 没有铁制武器 + 容易皈依」。换了一片大陆,换了一种民族,语言架构没变。\n' +
          '——20 世纪初人类学家「原始 vs 文明」二分:直接 Columbus 模板。把别的文化简化成「未到我们这一步」——再决定怎么对待他们。\n' +
          '——21 世纪外资公司进新市场分析报告:某种程度上仍然 Columbus 模板。「潜在市场 + 可教育 + 可服务」。「这一片人民对我们的产品反应温和 + 缺乏现代工具 + 用低成本的工业品换发展中国家自然资源」——这种估值不对称的「贸易」逻辑,是 1493 年玻璃珠换黄金的当代延伸。\n\n' +
          '——\n\n' +
          '这是这一节问你的事:Columbus 1493 信不是「过去的奇怪文献」。它是 500 年殖民语言的模板。学历史是为了识别这种模板——什么时候被重新启用。\n\n' +
          '两种说法都拿得出真证据:\n\n' +
          '**一种说法**(经典批判派):500 年过去,模板没变,只是换了名字。今天的「全球化」「市场进入」「外资分析」「文化输出」——都是 Columbus 模板的变形。一个 21 世纪 13 岁的孩子读 Columbus 1493 信,如果不立刻识别这个模板,他将来在简介现代世界的语言里,会被同样模板的当代版本骗过。' +
          '识别 Columbus 模板 = 21 世纪信息素养的一部分。\n\n' +
          '**另一种说法**(中道实务派):跨 500 年类比有滑坡风险。1493 年 Columbus 命令砍手 + 1495 年送 500 个 Taíno 奴隶,这是 physical violence(物理暴力)。21 世纪外资公司「潜在市场」分析报告,这是 economic asymmetry(经济不对称)。把这两个混在一起会让 13 岁孩子失去区分能力,他可能开始觉得「所有跨文化贸易都是殖民」,这种平面化反而损害他理解殖民暴力的具体性。' +
          '现代经济不对称应该单独看,不靠 Columbus 类比 inflate。\n\n' +
          '两边都站得住。\n\n' +
          '**你怎么看**——Columbus 1493 信和 21 世纪「潜在市场 + 可教育 + 可服务」这套语言,是同一个模板的延续,还是危险的滑坡类比?想 30 秒。',
        en:
          'Step out of Columbus\'s 1493 letter and look at where it lives today.\n\n' +
          'Columbus described the Taíno on a sheet of parchment off the Azores in three words — "convertible plus workable plus enslavable." That language template kept being reused for the next five hundred years. Each century the surface changed a little, but the skeleton stayed the same: simplify the other culture; emphasize that the other is "reformable plus workable plus exploitable"; deliver the description through whatever the new media technology of the era is (print, then newspaper, then television, then the internet) so the next generation inherits the framing.\n\n' +
          '- The eighteenth- and nineteenth-century European colonial officer\'s report: directly the Columbus template. "The people of this land are gentle, have no iron weapons, will easily convert." Different continent, different people, same architecture.\n' +
          '- The early-twentieth-century anthropologist\'s "primitive vs civilized" frame: directly the Columbus template. The other culture is simplified down to "not yet at our stage" — and then policy decides what to do with them.\n' +
          '- Some twenty-first-century corporate market-entry reports still echo the Columbus template. "Potential market plus reformable plus serviceable." "This population is receptive to our product, lacks modern tooling, and can be reached by exchanging low-cost industrial goods for developing-country natural resources." That asymmetric-valuation "trade" logic is a modern descendant of 1493 — glass beads for gold.\n\n' +
          '— —\n\n' +
          'So this section asks you: the 1493 letter is not just a strange old document. It is the template script of five hundred years of colonial language. Reading history this way is partly about learning to recognize when the template is being reactivated.\n\n' +
          'Both readings have evidence.\n\n' +
          '**One view** (the classical critical reading): five hundred years on, the template has not changed, only its label. Today\'s "globalization," "market entry," "foreign-investment briefing," "soft-culture export" are variations on the Columbus template. A thirteen-year-old reading the 1493 letter who does not learn to spot this template will, as an adult in modern information space, be fooled by the contemporary version of the same template. ' +
          'Recognizing the Columbus template is part of twenty-first-century information literacy.\n\n' +
          '**The other view** (the moderate empirical reading): a five-hundred-year cross-time analogy carries a real slippery-slope risk. Columbus\'s 1495 hand-cutting order and 1495 shipment of five hundred enslaved Taíno are physical violence. A twenty-first-century corporate "potential market" briefing is economic asymmetry. Mixing those into the same category may train a thirteen-year-old to feel that "all cross-cultural trade is colonial," and that flattening actually damages their ability to see the specific shape of historical colonial violence. ' +
          'Modern economic asymmetry should be analyzed on its own terms, not inflated through a Columbus analogy.\n\n' +
          'Both sides stand.\n\n' +
          '**What do you think** — is the line from Columbus\'s 1493 letter to twenty-first-century "potential market plus reformable plus serviceable" language one continuous template, or a dangerous slippery analogy? Take thirty seconds.',
      },
      deliverGoal: {
        cn: 'Columbus 1493 信「可皈依 + 可工作 + 可奴役」三件套和 21 世纪「潜在市场 + 可教育 + 可服务」语言,是 500 年同一模板的延续,还是危险的滑坡类比?',
        en: 'Is the line from Columbus\'s 1493 "convertible plus workable plus enslavable" to twenty-first-century "potential market plus reformable plus serviceable" one continuous template across five centuries, or a dangerous overreach? Take thirty seconds.',
      },
      engagementHook: {
        cn: '同一个模板的延续,还是危险的滑坡类比?想 30 秒。',
        en: 'One continuous template, or a dangerous slippery analogy? Take thirty seconds.',
      },
      expectedLength: '430-490 字 CN + 真问题',
      expectsRealAnswer: true,
    },

    // ═══════════════════════════════════════════════════
    // N12 — META: Columbus Day vs Indigenous Peoples' Day + 桥到 las Casas / Anacaona Jr.
    // ═══════════════════════════════════════════════════
    {
      id: 'col-n12',
      phase: 'meta',
      cosplay: 'narrator',
      narrativeRef: '§3 Columbus 21 世纪争议 + §6 长尾 + 跨 lens 桥',
      content: {
        cn:
          '你刚扮演 Columbus 12 节。从 1492.10.12 凌晨 Pinta 桅杆「Tierra」,到 1493.2 Azores 海面写信,到 1495 年砍手 + 写「人民温和——做奴隶完美」,到 1500 年戴脚镣,到 1506 年至死相信自己到了亚洲。\n\n' +
          'Columbus 死了。但他奠基的故事还在继续——\n\n' +
          '我死后 12 年,1518 年 Charles V 颁 asiento(4,000 个非洲 enslaved 直运 Hispaniola)——跨大西洋奴隶贸易系统化起点。我死后 13 年,1519 年 Cortés 用我开的航路到墨西哥,2 年后 Tenochtitlán 围城,Aztec 帝国陷。我死后 26 年,1532 年 Pizarro 168 人在 Cajamarca 抓 Atahualpa,Inca 帝国陷。我死后 28 年,1534-1535 年 Pizarro 把 Cuzco(Inca 首都)抢光。\n\n' +
          '我死后接下来 200 年,大约 1 亿美洲原住民死。我死后 250 年,1750 年代欧洲启蒙运动开始——但启蒙时代的「自由 + 平等 + 博爱」是建在加勒比甘蔗 plantation + 跨大西洋奴隶贸易的钱上的。我死后 363 年,1869 年苏伊士运河打通——欧洲不再需要靠我的西航线到亚洲。我死后 408 年,1914 年 Panama 运河开,我 1502 年找了一年没找到的「西通道」终于挖通了。\n\n' +
          '我死后 500 年,2020 年代,美国和加拿大很多 Columbus 雕像被推倒。2021 年 Biden 总统签字——同一天,10 月 12 日,既是 Columbus Day 又是 Indigenous Peoples\' Day。两种 narrative 同时被联邦政府承认。\n\n' +
          '——\n\n' +
          '换一个角度看你已经走过这段历史的一面——但只是一面。\n\n' +
          '我 1493 年在 Azores 海面写那封信的时候,有一个修士 18 岁,在 Seville 长大,叫 Bartolomé de las Casas。他爸爸是我朋友,跟我第二次航行去 Hispaniola。9 年后(1502),Bartolomé 自己也去了 Hispaniola,做了 12 年 encomendero(西班牙殖民地主)。直到 1514 年他突然 conversion,剩下 50 年他变成原住民最强的辩护人。Bartolomé 转录了我 1493 年那封信——同样的物件,他读出完全不同的意义。下一个视角就是他。\n\n' +
          '我 1495 年下砍手命令的时候,Hispaniola 上一个 12 岁的 Taíno 女孩第一次见西班牙铁甲 + 战马。她叫 Anacaona Jr.(她阿姨 Anacaona 是 Xaragua 的 cacica——Taíno 王后,1503 年被西班牙人烧死)。她接下来 5 年,会失去爸爸(矿上死)、妈妈(被强奸病死)、叔叔(砍手)、哥哥(天花)、自己(被强奸怀孕)。她是 30 万到 100 万 Taíno 中的一个有名字的人。第三个视角就是她。\n\n' +
          '——\n\n' +
          '放下我之前,给我说一件事。\n\n' +
          '这次扮演里,哪一个瞬间最让你停了一下?是 1492.10.12 凌晨 2 点 Rodrigo 喊「Tierra」?是我登陆第一天日志里那句「50 人就能让 5 万人为我们工作」?是我 1493.2 在 Azores 海面写「可皈依 + 可工作 + 可奴役」?是 1495 我下砍手命令同时写「人民温和——做奴隶完美」?是 1500 我戴脚镣回西班牙?还是 1506 我至死相信我到了亚洲?\n\n' +
          '一句话就够,不用展开。\n\n' +
          '说完,你可以选——进 atlas-lab/age-of-exploration-1492 看 1492-1600 完整时间线 + Cortés 1519 + Pizarro 1532 + Magellan-Elcano 1519-1522 + 跨大西洋奴隶贸易 1518-1888 + Bartolomé 1542;或者换一个视角重玩这段历史——从 Bartolomé de las Casas 这边(从内部良心反对者) 或者从 Anacaona Jr. 这边(从被殖民的 12 岁女孩) 重看 1492。',
        en:
          'You have just walked Columbus across twelve sections. From the two-in-the-morning shout of "Tierra" off the Pinta on October 12, 1492, to the February 1493 letter on the sea off the Azores, to the 1495 hand-cutting order paired with "the people are gentle — they will make perfect slaves," to coming home in chains in 1500, to dying in 1506 still believing he had reached Asia.\n\n' +
          'Columbus is dead. But the story he founded keeps going.\n\n' +
          'Twelve years after my death, in 1518, Charles V issued the asiento — four thousand enslaved Africans direct to Hispaniola — the systematic start of the transatlantic slave trade. Thirteen years after my death, in 1519, Cortés used the sea route I had opened to reach Mexico; two years later Tenochtitlán fell. Twenty-six years after my death, in 1532, Pizarro and one hundred and sixty-eight men seized Atahualpa at Cajamarca — and the Inca empire fell. Twenty-eight years after my death, 1534 to 1535, Pizarro\'s men sacked Cuzco, the Inca capital.\n\n' +
          'Across the two centuries after my death, roughly one hundred million Indigenous Americans died. Two hundred and fifty years after my death, in the 1750s, the European Enlightenment was launched — but its "liberty, equality, fraternity" was funded by the sugar plantations of the Caribbean and the profits of the transatlantic slave trade. Three hundred and sixty-three years after my death, in 1869, the Suez Canal opened, and Europe no longer needed my western route to Asia. Four hundred and eight years after my death, in 1914, the Panama Canal opened, and the western strait I had hunted for a year in 1502 was finally cut through.\n\n' +
          'Five hundred years after my death, in the 2020s, many Columbus statues across the United States and Canada have been pulled down. In 2021 President Biden signed an order — the same day, October 12, is now both Columbus Day and Indigenous Peoples\' Day. Two narratives, both recognized by the federal government, on the same calendar square.\n\n' +
          '— —\n\n' +
          'Look at this from another angle. You have walked one side of this history. There are two more.\n\n' +
          'In 1493, while I sat on the sea off the Azores writing the letter, an eighteen-year-old growing up in Seville heard about it: Bartolomé de las Casas. His father was a friend of mine and went with me on the second voyage to Hispaniola. Nine years later, in 1502, Bartolomé followed and spent twelve years as an encomendero (a Spanish colonial slave-holding landlord) — until in 1514 he had a conversion of conscience and turned, for the rest of his fifty remaining years, into the strongest advocate for Indigenous people. Bartolomé later transcribed my 1493 letter into his own writings — the same artifact, completely different meaning. The next viewpoint is his.\n\n' +
          'In 1495, when I gave the hand-cutting order, a twelve-year-old Taíno girl on Hispaniola was meeting Spanish iron armor and a war horse for the first time. Her name was Anacaona Jr. — niece of Anacaona, the cacica (queen) of Xaragua, who would be burned by the Spanish in 1503. Over the next five years she would lose her father (in the gold mines), her mother (raped and dead of disease), her uncle (hand cut off), her older brother (smallpox), and herself (raped and pregnant). She is one named person among the 300,000 to 1,000,000 Taíno. The third viewpoint is hers.\n\n' +
          '— —\n\n' +
          'Before you set me down, tell me one thing.\n\n' +
          'In this playthrough, what was the moment that made you pause? Was it two in the morning, October 12, 1492, when Rodrigo shouted "Tierra"? Was it the day-one log line, "fifty of our men could make them all work"? Was it February 1493 on the sea off the Azores, "convertible plus workable plus enslavable"? Was it 1495, the hand-cutting order paired with "the people are gentle — they will make perfect slaves"? Was it 1500, coming home in chains? Or was it 1506, dying still believing he had reached Asia?\n\n' +
          'One line is enough. No need to explain.\n\n' +
          'After that, you can choose — open atlas-lab/age-of-exploration-1492 to see the full timeline 1492 to 1600, including Cortés 1519, Pizarro 1532, Magellan-Elcano 1519 to 1522, the transatlantic slave trade 1518 to 1888, and Bartolomé 1542; or replay this history from another viewpoint — from Bartolomé de las Casas (the inside conscience who turned), or from Anacaona Jr. (the twelve-year-old Taíno girl on the receiving end).',
      },
      deliverGoal: {
        cn: 'Columbus 死了,他奠基的故事继续 408 年到 Panama 运河 + 500 年到 Columbus Day vs Indigenous Peoples\' Day。你扮演完了,选一个最让你停下来的瞬间——再决定要不要换 Bartolomé 视角或 Anacaona Jr. 视角重玩。',
        en: 'Columbus is dead. The story he founded keeps going for 408 years to the Panama Canal, 500 years to "Columbus Day vs Indigenous Peoples\' Day." You have played him. Pick the moment that made you pause. Then decide whether to replay from Bartolomé de las Casas, or from Anacaona Jr.',
      },
      engagementHook: {
        cn: '**这次扮演里,哪一个瞬间最让你停了一下**?一句话告诉我就行——不用展开。',
        en: '**In this playthrough, what was the moment that made you pause?** One line is enough — no need to explain.',
      },
      expectedLength: '430-490 字 CN',
      expectsRealAnswer: true,
    },

  ],
};
