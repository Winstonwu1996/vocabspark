// ─── Age of Exploration 1492 Lens-based Storyboard (Story-First v2) ─────
//
// Topic: 大航海时代 1492-1600 · The Age of Exploration
// HSS-7.11 · AP World 4.1-4.2 · AP Euro Period 1.4 · AP US Foundations
//
// 3 lens 设计 (per Sarah Chen audit + 4-agent review TBD):
//   - columbus       (perpetrator-actor / colonial-system-architect)
//   - las-casas      (lonely-mediator / internal-conscience-pivot) — 16 世纪 Luther 同代 conscience 革命
//   - anacaona-jr    (receiving-end / indigenous-witness-victim-with-name) — 12 岁 Taíno 虚构合成
//
// 跨 lens micro-detail: Columbus 1493 信 (1493/2 Azores 海面写 → 9 个版本印遍欧洲)
//   AP DBQ rubric producer / interpreter / affected party 三角:
//   - Columbus  N4: 写者 — 1493/2 Azores 海面用羽毛笔 + 羊皮纸物理写信
//   - las Casas N5: 1535 Santo Domingo 修道院 Diego Colón 抄本 + 边注「我们错了」
//   - Anacaona Jr. N3: 1495 秋村中央听 Hojeda 队 + Diego Colón 念命令 (14 岁以上每 3 个月交黄金不交砍手)
//
// Topic 视觉 anchor (Sarah audit §6.1): Florentine Codex 黑曜石镜子 (Aztec prophecy 视角)
//   跟 Renaissance 镶金小镜子 + Reformation 95 Theses + AoE 黑曜石镜子 = 16 世纪信息技术三角
//
// defaultLens = 'anacaona-jr' (per Sarah audit + 7thgrader 推荐: 12 岁同龄锚点 + areíto 文化 carrier
//   + 5 年家族灭族最强情感入口 + N12 closing 双 chain)
//
// 4-agent review (5-7 / 5-8): TBD
//   待: 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)
//
// per AUTHORING_PIPELINE.md 11 条铁律:
//   - 第 1 条 cultural ban: 0 中国术语污染
//   - 第 2 条 anti-fab: 数字/日期/名字严格 (Anacaona 王后 + las Casas 1502/1514/1542/1552 + Columbus 1493 信)
//   - 第 6 条 italic: Spanish/Taíno/Latin/Náhuatl 外语词 *italic*
//   - 第 11 条 quote nesting: outer JS 单引号 + cn/en 字段内嵌优先「」中文方头括号
//
// 来源 staging 文件 (5-7 lens-author parallel):
//   - age-of-exploration-1492-columbus.staging.js   (674 行 / 8414 CN chars / 12 nodes)
//   - age-of-exploration-1492-las-casas.staging.js  (774 行 / 13316 CN chars / 12 nodes)
//   - age-of-exploration-1492-anacaona-jr.staging.js (767 行 / 8638 CN chars / 12 nodes)

// ─── Age of Exploration 1492 · LENS 1: Christopher Columbus ─────────
//
// Topic: 大航海时代 1492 · The Age of Exploration
// HSS-7.11 · AP World 4.1-4.2 · AP Euro Period 1.4 · AP US Foundations
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
      'Genoa 织工的儿子,自学拉丁文,41 岁带 3 艘船 + 90 个人横跨大西洋。' +
      '1492 年 10 月 12 日凌晨 2 点,Pinta 号桅杆瞭望员喊「Tierra」那一刻,' +
      '他踏上的是 Bahamas 一座小岛,而他至死相信自己到了亚洲。' +
      '这一遍让你看见他怎么从一个迷恋 Marco Polo 的水手,变成 Hispaniola 奴役系统的亲手设计者——' +
      '不是因为冷血,而是因为「可皈依 + 可工作 + 可奴役」三件套被他一笔写进 1493 年那封信里。',
    en:
      'Son of a Genoa weaver, self-taught in Latin, at forty-one he led three ships and ninety men across the Atlantic. ' +
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
          '我 41 岁。Genoa(意大利北部)织工的儿子。我的两艘姐妹船 Niña 和 Pinta,加上旗舰 Santa María——' +
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
          '接下来 12 节,你跟我走 14 年。从 41 岁的我以为到了亚洲,到 54 岁我戴着错的算计死,至死不肯承认自己看错了什么。',
        en:
          'October 12, 1492. Two in the morning. The Atlantic.\n\n' +
          'I am forty-one. Son of a weaver from Genoa, in northern Italy. My two sister ships, Niña and Pinta, ' +
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
          'Over the next twelve sections you will walk fourteen years with me. From the forty-one-year-old who thought he had reached Asia, ' +
          'to the fifty-four-year-old who died wearing his own miscalculation, refusing to admit, until the last day, what he had really seen.',
      },
      deliverGoal: {
        cn: '我 41 岁站在 Bahamas 海岸以为到了亚洲——同一双手接下来设计的体系会让 30 万到 100 万 Taíno 死光。',
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
          '——我那时候没跟人说的是:我接 Isabella 的钱出航的时候,我心里清楚我是在做基督教扩张的延伸,不只是一次商船探险。我袋里揣着一份给「印度大可汗」的信,Isabella 让我带的。但我也揣着一项任务——为基督教皈依新民族。\n\n' +
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
          '这封信的大意是这样(下面是我说的意思,不是逐字原文):\n\n' +
          '——这些岛屿的人民很温和,没有铁制武器,没有完整的衣服,也没有他们自己的宗教。\n\n' +
          '——关于皈依:我相信只要陛下派几个修士来,这些人几年内就能全部变成基督徒。\n\n' +
          '——关于工作:他们适合任何劳动,很容易被驱使。\n\n' +
          '——而且这里能取到的奴隶,似乎取之不尽。\n\n' +
          '(顺带一提——「50 个我们的人就能让全部 5 万人为我们工作」那句最有名的话,其实是我 4 个月前 10 月 12 日登陆那天写在航海日志里的,不是这封 1493 信里的原文。后人常把两处混在一起引用。)\n\n' +
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
          'The letter said, in substance (this is the gist of what I wrote, not a word-for-word quotation):\n\n' +
          '- The people of these islands are very gentle. They have no iron weapons, no proper clothing, no religion of their own.\n\n' +
          '- On conversion: I believe that if Your Highnesses send a few friars, in a few years all of them can be made Christian.\n\n' +
          '- On work: they are suited to any labor and easily driven.\n\n' +
          '- And the supply of people to be enslaved here seems inexhaustible.\n\n' +
          '(A note — the most famous line, "fifty of our men could make all fifty thousand of them work for us," actually comes from my ship\'s log on the day I landed, October 12, four months earlier, not from this 1493 letter. Later readers often blend the two together.)\n\n' +
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
          'Ferdinand 和 Isabella 派人列队迎我进 Barcelona。我穿过城里游行队伍,到王座厅,跪下来。Isabella 让我起来,坐到她身边——这是西班牙王室对一个普通水手做过最高规格的事。我那一刻,42 岁,从 Genoa 织工的儿子,变成西班牙的「海洋将军」。\n\n' +
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
          '很多 Taíno 因此失血而死。很多家庭——爸爸去金矿,妈妈被强奸或杀,孩子饿死或死于欧洲带来的疫病。整个 Hispaniola 这种事在 1495 到 1500 这 5 年间,系统性地发生。\n\n' +
          '——我那时候没跟人说的是:我下这个命令的时候,我心里没有一刻怀疑过自己。我跟自己说:「这是为了让殖民地正常运作。这些是异教徒,他们的灵魂要等他们皈依才得救——他们的肉体不那么重要。我是在做西班牙王室和上帝的工作。」\n\n' +
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
          'Many bled to death. Many families — father in the gold mines, mother raped or killed, children starving or dead of the European sicknesses. Across Hispaniola, between 1495 and 1500, this happened as a system, not as occasional cruelty.\n\n' +
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
          '——他给我戴脚镣。我 49 岁,从前是西班牙的「海洋将军」,现在被铁链锁住——和我的弟弟 Bartholomew、弟弟 Diego (Diego Columbus) 一起,关进 La Isabela 一座小房子里。\n\n' +
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
          'He had me put in chains. I was forty-nine. Once Admiral of the Ocean Sea, now in irons — held with my brothers Bartholomew and Diego (Diego Columbus) in a small house at La Isabela.\n\n' +
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
          '——1492 年起,我和我手下的人带去了欧洲的各种疫病——最早肆虐的是流感这类(天花要到 1518 年才传到 Hispaniola、随后横扫 Aztec 与 Inca)。Hispaniola 起点 30 万到 100 万 Taíno (学界争议),1542 年时只剩 200 个(Bartolomé las Casas 数字)。整个美洲接下来 200 年大约 1 亿原住民死,主要死因是病(没免疫力),但奴役加屠杀加强制劳动加速了这个崩塌。这后来被叫做 Columbian Exchange(哥伦布交换):欧洲、美洲、非洲三大洲生物、病、文化、人口的双向流动。但这种「交换」从来不是平等的——欧洲带去的是病和锁链,美洲送来的是黄金、玉米和马铃薯,非洲送来的是被锁的人。\n\n' +
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
          '- From 1492 onward, my men and I brought European diseases — at first influenza and the like (smallpox did not reach Hispaniola until 1518, then swept through the Aztec and Inca). Hispaniola began with 300,000 to 1,000,000 Taíno (the figure is debated). By 1542, only about 200 remained (Bartolomé de las Casas\'s number). Across the Americas over the next two hundred years, roughly one hundred million Indigenous people died — mainly from disease (no immunity), with enslavement, massacre, and forced labor accelerating the collapse.\n\n' +
          '  This came to be called the Columbian Exchange: the two-way flow of biology, disease, culture, and people between Europe, the Americas, and Africa. But the exchange was never equal. Europe sent disease and chains. The Americas sent gold, maize, and potatoes. Africa sent people in iron.\n\n' +
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
          '你刚扮演完 Columbus 9 节。从 41 岁站在 Bahamas 海岸,到 1493 年在 Azores 海面写「可皈依 + 可工作 + 可奴役」那封信,到 1495 年下砍手命令同时写「人民温和——做奴隶完美」,到 1500 年戴脚镣回西班牙,到 1506 年至死相信自己到了亚洲。\n\n' +
          '这就是这一节要问的真问题:**Columbus 是「reluctant 类型英雄」(算错地球但意外改变历史) ——还是「殖民系统的主动设计者」**?\n\n' +
          '一边,他是 reluctant 英雄。他算错地球周长 25%,顶着错的算计向西走。如果美洲不正好挡在那里,他和 90 个人会渴死。他「成功」是因为他幸运加顽固,不是因为算对。这种 reluctant 类型在历史里特别常见——一个相信错事情的人,因为错的相信意外做了大事。\n\n' +
          '另一边,他是殖民系统的主动设计者。他 1492 年 10 月 12 日上岸第一天就在日志里写「50 人就能让 5 万人为我们工作」。殖民 mindset 不是 5 年后慢慢长出来,是登陆第一天就在。他 1493 年那封 Azores 信用三个字描述新民族:「可皈依 + 可工作 + 可奴役」。这套语言模板被印 17 个版本传遍欧洲,做了 500 年殖民语言的奠基。他 1495 年亲手写下「这里黄金一定多,人民温和,做奴隶完美」——这是签字承认,不是无意识犯罪。\n\n' +
          '两种说法都拿得出真证据:\n\n' +
          '**一种说法**(传统美国教科书 + 「Columbus Day」纪念派):Columbus 是 reluctant 英雄——他不是冷血计算者,他真心相信自己在做上帝的事 + 他作为水手确实勇敢顽固。' +
          '他个人的暴力命令(砍手 + 奴役)是 16 世纪殖民地常态。每一个西班牙、葡萄牙、英国殖民官员都做过类似的事——把一个人的责任放大到「殖民暴力的奠基者」是不公平的。' +
          '他给世界的礼物是真的: 大西洋海路、Columbian Exchange 带来的玉米/马铃薯/西红柿养活了下一个 5 亿欧洲人。你不能因为他后来的暴力否定他前面的勇气。\n\n' +
          '**另一种说法**(后殖民学派 + 21 世纪 Indigenous Peoples\' Day 派):Columbus 不是 reluctant 英雄——他是 active architect(主动建筑师)。1492 年 10 月 12 日上岸第一天日志「50 人就能让 5 万人为我们工作」,这不是无意识。1493 年 Azores 信「可皈依 + 可工作 + 可奴役」,这不是无意识。1495 年「人民温和,做奴隶完美」,这不是无意识。' +
          '他 4 次航行 14 年里有 12 年是在主动建立 Hispaniola 殖民地的奴役系统——encomienda 1503 + asiento 1518 长在他的命令上。把他叫「reluctant 英雄」是 21 世纪的认知失败——为他洗白让我们没办法看清楚 500 年殖民暴力的真正起点。\n\n' +
          '两边都站得住。\n\n' +
          '**你怎么看**——Columbus 是 reluctant 英雄,还是殖民系统的主动设计者?给我你最有力的一条理由。想 30 秒。',
        en:
          'You have just played Columbus across nine sections. From the forty-one-year-old standing on a Bahamas shore, to the 1493 letter on the sea off the Azores describing the Taíno as "convertible plus workable plus enslavable," to the 1495 hand-cutting order paired with the line "the people are gentle — they will make perfect slaves," to coming home in chains in 1500, to dying in 1506 still believing he had reached Asia.\n\n' +
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
        cn: 'Columbus 1493 信「可皈依 + 可工作 + 可奴役」到 21 世纪「潜在市场 + 可教育 + 可服务」——同一个模板的延续,还是危险的滑坡类比?先在心里想想你怎么看,下一节我会正式问你。',
        en: 'From Columbus\'s 1493 "convertible, workable, enslavable" to today\'s "potential market, reformable, serviceable" — one continuous template, or a dangerous slippery analogy? Sit with your view; I will ask you for real in the next section.',
      },
      expectedLength: '430-490 字 CN + 真问题',
      expectsRealAnswer: false,
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
          '我 1495 年下砍手命令的时候,Hispaniola 上一个 12 岁的 Taíno 女孩第一次见西班牙铁甲 + 战马。她叫 Anacaona Jr.(她阿姨 Anacaona 是 Xaragua 的 cacica——Taíno 王后,1503 年被西班牙人俘虏后绞死)。她接下来 5 年,会失去爸爸(矿上死)、妈妈(被强奸 + 病死)、叔叔(砍手)、哥哥(欧洲带来的疫病)、自己(被强奸怀孕)。她是 30 万到 100 万 Taíno 中的一个有名字的人。第三个视角就是她。\n\n' +
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
          'In 1495, when I gave the hand-cutting order, a twelve-year-old Taíno girl on Hispaniola was meeting Spanish iron armor and a war horse for the first time. Her name was Anacaona Jr. — niece of Anacaona, the cacica (queen) of Xaragua, who would be captured and hanged by the Spanish in 1503. Over the next five years she would lose her father (in the gold mines), her mother (raped and dead of disease), her uncle (hand cut off), her older brother (a European sickness), and herself (raped and pregnant). She is one named person among the 300,000 to 1,000,000 Taíno. The third viewpoint is hers.\n\n' +
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
        cn: '走完 Columbus 这一生——他点燃了一种活了 500 年的殖民语言。先说说:Columbus 1493 信和 21 世纪「潜在市场 + 可教育 + 可服务」,是同一个模板的延续还是危险的滑坡类比?再想一步:这次扮演里哪一个瞬间最让你停了一下,你身边有没有人在用这种「把别人简化成可用的」语言,你会怎么提醒 TA?',
        en: 'Walk out of Columbus\'s whole life — he lit a colonial language that has lived for five hundred years. First tell me: is the line from his 1493 letter to today\'s "potential market, reformable, serviceable" one continuous template or a dangerous analogy? Then one step further — which moment in this playthrough made you pause, and is there someone around you using that "simplify others into something usable" language? How would you flag it for them?',
      },
      expectedLength: '430-490 字 CN',
      expectsRealAnswer: true,
    },

  ],
};

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
        'In my hand is a parchment from the Spanish crown — my encomienda. The paper tells me that one cluster of Taíno villages on this island is now "mine." I have the legal right to make them work for me; in name I owe them preaching and protection, in fact they will dig gold and farm for me.\n\n' +
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
        'A cluster of Taíno villages had been assigned to me. Every day I sent the men to wash gold from the rivers, the women to plant yuca (cassava) in the fields, the boys to build me a stone house. The "payment" was a little food and a token of preaching — once a week a friar came to recite Latin Mass nobody understood. With my own eyes I saw men collapse and die in the mines. With my own eyes I saw women raped by soldiers. With my own eyes I saw children starve. At the time I thought this was simply what "colony" meant. I thought this was how the Catholic Church carried heathens into civilization.\n\n' +
        'In those years I did not see the Taíno as "like me."\n\n' +
        'I had read Aristotle on natural slavery — the Greeks had argued it eighteen hundred years before. I accepted it. Quietly I believed the Taíno were "another kind" of people, a middle form, between animals and Europeans. I did not feel hatred. I just did not see them as men.\n\n' +
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
      en: 'How does thirteen years of "normal" suddenly crack open? In May 1514, in Cuba, a single line from the Bible.',
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
        '我忽然看见——不是想出来的,是看见。我自己分到的那片 Taíno 村子,在矿上累死的人,被士兵强奸的女人,饿死的小孩。我看见我每天吃的粮食 + 我盖的石房 + 我攒的金子,全部是「夺取邻舍衣食」+「克扣雇工工资」+「压迫穷人」。我每周做的 Mass,我献给上帝的祭品,上帝不接受。\n\n' +
        '我崩溃了。我跪下,哭了一整天。\n\n' +
        '接下来几个月,我做了 3 个决定。\n\n' +
        '第一,我释放我所有的 Taíno 奴隶。第二,我退出 encomienda(把那张羊皮纸还给王室)。第三,我从 secular priest 转进 Dominican(多明我会)修会做修士。\n\n' +
        '——这是 1514 年。Luther 在 Wittenberg 还要再过 3 年(1517 年 10 月 31 日)才把 95 条钉教堂门。Ignatius 在 Pamplona 还要再过 7 年(1521)才被炮弹打中腿后转向上帝。我不知道。我那时候不知道我是 16 世纪 conscience(良心)革命第一波。\n\n' +
        '我只知道一件事:我曾经是杀人犯,但不再是。',
      en:
        'One morning in May 1514, in central Cuba, in my small friars\' house.\n\n' +
        'I was thirty, preparing a sermon for Pentecost. Bible open on the table, I had turned to Sirach — the Book of Sirach, one of the wisdom books in the Catholic Old Testament (Protestants after the 1500s would drop it from their canon) — chapter 34.\n\n' +
        'I read verses 21 to 23. The lines stayed with me my whole life:\n\n' +
        '"To take away a neighbor\'s living is to kill him.\n' +
        'To withhold the wages of a hired man is to shed blood.\n' +
        'A gift from the oppressed — the Lord will not accept."\n\n' +
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
        'Ferdinand listened. He was silent a long time. Then he said: "Friar, I believe what you say. But I cannot end the encomienda — the colonists will rebel, the colonies will fall. I will order an inquiry. When the report comes back, we will speak again."\n\n' +
        'Three months later Ferdinand was dead. The inquiry never went anywhere.\n\n' +
        'This was the first of my journeys back to Spain. Across the next fifty-one years I would make the journey six more times. Each time I met a new king (Charles V in 1517, Charles V again in 1542, Philip II in 1561). Each time the king said: "I believe you. I will look into it. I will pass a law." Each time I sailed back thinking this time it had worked. Each time, within months, the colonists pushed back and the policy collapsed.\n\n' +
        'I learned one thing. Reports, audiences with kings, royal laws — all important, none enough. The Atlantic was too wide between Madrid and Hispaniola. By the time the law reached the island, the colonists had already torn it up and fed it to dogs.\n\n' +
        'I was still young. I thought the next audience would do it. I did not yet know that the next fifty years would mostly be me running a loop I could not close.',
    },
    deliverGoal: {
      cn: '1515 我 31 岁见 Ferdinand 1 小时——他说「我相信你 + 我会调查」。3 个月后他死了,调查没了。这是我 7 次跑 Spain 见 5 任国王中第一次。大西洋太宽,法律传到岛上殖民者就撕了喂狗。',
      en: 'In 1515 I met Ferdinand for an hour. He said "I believe you, I will inquire." Three months later he died and the inquiry went nowhere. This was the first of seven journeys to Spain to face five kings. The Atlantic was too wide; by the time the law reached the islands, colonists tore it up and fed it to dogs.',
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
        '我那年 51 岁。我在写一本大书,叫《Historia de las Indias》(《印度群岛史》)。我打算把 1492 年 Columbus 第一次航行起,所有西班牙在新大陆做的事,系统记下来。我手边有几堆档案——王室档案、Columbus 自己留下的信、Columbus 儿子 Diego Colón 留下的家族档案(经过他儿子 Luis Colón 整理)。\n\n' +
        '我桌子上现在摊着一份东西。\n\n' +
        '是 Columbus 1493 年 2 月在 Azores 写给国王 Ferdinand 和 Isabella 的信——他第一次航行返回途中写的。原信现在已经丢了,但我手里这份是从 Diego Colón 家族档案里抄出来的副本。这是欧洲第一份「美洲一手记录」。1493 年 4-5 月间它被印 9 个版本传遍欧洲。这是我们这个殖民故事的源头文件。\n\n' +
        '我读它,边读边批注。\n\n' +
        '我读到这一段。Columbus 写:「这些岛屿的人民,他们很温和,没有自己的宗教。50 个我们的人就能让全部 5 万人为我们工作。这里取之不尽奴隶。」\n\n' +
        '我放下笔。\n\n' +
        '——这一段我读不下去。我父亲 Pedro 1493 年跟 Columbus 第二次航行来过这座岛。我自己 1502 年 17 岁也来过这座岛。我读这封信,我看见的不是「美丽新世界」——我看见的是 Columbus 写完信几个月后,1494 年他给 Hispaniola 上 14 岁以上每个 Taíno 男人定的规矩:每 3 个月交一定量黄金,不交砍手。我看见小孩的手被砍下来扔在地上——因为父亲那一季黄金没交够。\n\n' +
        '我拿起笔,在边上写下我自己的批注:「Columbus 写 gente muy noble (西班牙文「非常高贵的人」)——但他要求他们 14 岁以上每 3 个月交一定量黄金,不交砍手。我父亲是他朋友。我 17 岁也去过同一座岛。我们错了。」\n\n' +
        '——这是我做了一辈子的事的核心:把征服者自己写的话保存下来,然后在边上写下我看到的真相。Columbus 的话「可皈依 + 可工作 + 可奴役」三件套支配了接下来 400 年殖民。我没有能力把它擦掉——但我能在它旁边写一句:「我们错了。」\n\n' +
        '我那天晚上没睡。我想:Columbus 写这封信的时候,他不觉得自己写错。他真的相信他在做好事。我 13 年的 encomendero 时,我不觉得自己做错。我也真的相信我在做好事。\n\n' +
        '错的不是「坏人」——错的是看不见的人。\n\n' +
        '我那一夜决定:我要写一本书,让 500 年后的人,看不见也得看见。',
      en:
        'One afternoon in 1535. Santo Domingo, the capital of Hispaniola. Upstairs in the Dominican monastery, in my room.\n\n' +
        'I was fifty-one. I was writing a long book — Historia de las Indias, my history of the Indies. I meant to record, year by year, everything the Spanish had done in the New World since Columbus\'s first voyage in 1492. Around me on the floor sat stacks of papers — royal archives, letters Columbus had written himself, copies preserved in the family archive of Columbus\'s son Diego Colón (kept by his son Luis Colón).\n\n' +
        'On my desk that afternoon was a single document.\n\n' +
        'A letter Columbus had written to King Ferdinand and Queen Isabella in February 1493, on the way home from his first voyage, from the Azores. The original is lost, but the copy in my hand had been transcribed from the Diego Colón family archive. This was Europe\'s first eye-witness report of America. In April and May of 1493 it had been printed in nine different editions across Europe. It was the source document of the colonial story.\n\n' +
        'I read it. As I read I wrote in the margin.\n\n' +
        'I came to one passage. Columbus had written: "These islanders are gentle. They have no religion of their own. With fifty of our men we could make all fifty thousand of them work for us. There are slaves here without limit."\n\n' +
        'I set the pen down.\n\n' +
        'I could not read past that line. My father Pedro had come to this island with Columbus on the second voyage in 1493. I had come to this island myself, at seventeen, in 1502. Reading this letter, what I saw was not "a beautiful new world." What I saw was the order Columbus issued only months after writing the letter: in 1494 he commanded that every Taíno man on Hispaniola over the age of fourteen deliver a fixed quantity of gold every three months, and that any man who failed have his hand cut off. I saw the cut-off hands of children fall to the ground — because their fathers had not made the quota.\n\n' +
        'I picked up the pen. In the margin I wrote: "Columbus called them gente muy noble — Spanish for "people of great nobility." Yet he ordered that every man over fourteen deliver gold every three months, on penalty of having his hand cut off. My father was his friend. At seventeen I came to the same island. We were wrong."\n\n' +
        'This is the work of my life in one motion. Save the conqueror\'s own words. Then write the truth I saw in the margin beside them. Columbus\'s phrase — "Convertible. Workable. Enslavable." — would govern four hundred years of colonization. I could not erase it. But I could write beside it: "we were wrong."\n\n' +
        'That night I did not sleep. I kept thinking: when Columbus wrote that letter, he did not feel he was wrong. He truly believed he was doing good. When I was an encomendero for thirteen years, I did not feel I was wrong. I truly believed I was doing good.\n\n' +
        'The wrong is not the "bad person." The wrong is the man who cannot see.\n\n' +
        'That night I decided. I would write a book that would force people five hundred years from now to see what they could not see.',
    },
    deliverGoal: {
      cn: '1535 我在 Santo Domingo 修道院摸 Columbus 1493 信副本(从 Diego Colón 家族档案抄出)。我读到「50 个我们的人能让 5 万人为我们工作 + 取之不尽奴隶」,我放下笔。我父亲是他朋友,我 17 岁也去过同一座岛。我在边上批注「Columbus 写 gente muy noble,但他要求 14 岁以上每 3 个月交黄金不交砍手。我们错了。」 错的不是坏人——是看不见的人。',
      en: 'In 1535 in the Santo Domingo monastery I held Columbus\'s 1493 letter (a copy from the Diego Colón family archive). I read "with fifty of our men we could make all fifty thousand work for us" and set the pen down. My father had sailed with him; I had come at seventeen. I wrote in the margin: "He called them gente muy noble — yet he ordered that every man over fourteen deliver gold every three months on pain of losing his hand. We were wrong." The wrong is not the bad person; it is the man who cannot see.',
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
        '1516 年——我皈依之后 2 年,我 32 岁。我在 Madrid 见新王 Charles V(他刚从荷兰来,16 岁刚登基)。我跟他汇报殖民地情况。我说:「Taíno 在矿上一年死一半。再这样下去 5 年内全死光。」\n\n' +
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
        'In 1516 — two years after my conversion, age thirty-two — I traveled to Madrid to meet the new king, Charles V (he had just arrived from the Low Countries, sixteen years old, freshly crowned). I reported on the colonies. I said: "In the mines, half the Taíno die in a year. At this rate, in five years they will all be dead."\n\n' +
        'In that moment, only one thing was in my mind. I have to save the Taíno.\n\n' +
        'In a memorandum I wrote for the crown (Memorial de Remedios), I made a proposal.\n\n' +
        'I proposed: do not let the Taíno die in the mines. Buy African slaves from the Portuguese to replace them — Africans, I argued, were resistant to this climate, resistant to malaria, physically stronger than the Taíno, and able to bear the mining work. Each Spanish colonist could be allotted a quota — twelve African slaves.\n\n' +
        'These are my own words. In that moment my pen ran and ink went to the page without a second\'s hesitation.\n\n' +
        'You are now sitting at my 1516 desk. Do you know what I was thinking?\n\n' +
        'I was thinking: the Taíno are "my responsibility." I have watched them die with my own eyes for fourteen years. I must save them. African slaves — I have never seen Africa with my own eyes. I have never been to Africa. About the whole Portuguese trade in West African slaves, started in the 1450s, I had only read a few scattered reports. I assumed it was "legitimate trade," because Africans sold to Portuguese were often war captives sold by African kings, and I had falsely believed this made them "justly acquired" slaves.\n\n' +
        'I could not see the African as a person.\n\n' +
        'In that moment I was exactly the man I had been thirteen years earlier when I could not see the Taíno as a person.\n\n' +
        'In that moment I was not a villain. I felt no malice. My whole heart was on saving the Taíno.\n\n' +
        'But "wanting to save one group" plus "failing to see another group" equals "wrong."\n\n' +
        'This is the hardest passage in this perspective. Harder than N2 (the thirteen years I was a slaveholder). Because N2 was before my conversion — before is forgivable. This was after. I had already read Sirach 34:21-23. I already knew that "to take a neighbor\'s living is to kill him." I should have seen the African as "neighbor." I did not.\n\n' +
        'It would take me thirty-six years — from 1516 to 1552 — to begin to see.\n\n' +
        'I want to ask one thing of you. Do not defend me. I did not defend myself in old age either. The next section will tell you how, in 1552, I wrote down with my own hand: "I beg God\'s forgiveness."\n\n' +
        'But also do not simplify me into "the father of the African slave trade." That label is also unfair. In 1516 I was one of dozens of Spaniards making this kind of recommendation; the Portuguese had been running the trade for seventy years; Charles V did not need my advice to buy African slaves.\n\n' +
        'I made a real wrong. But I was not the engine of this evil.\n\n' +
        'Can you hold both of those at the same time?',
    },
    deliverGoal: {
      cn: '1516 我 32 岁见 Charles V,提议非洲奴隶替代 Taíno,每殖民者 12 个配额。我那一刻只想救 Taíno,看不见非洲人是人,跟我 13 年前看不见 Taíno 是人完全一样。这是我 conversion 之后犯的错——更难原谅。我 36 年才慢慢看见。别替我辩护,但也别贴「非洲奴隶贸易之父」的简化标签。两件事能同时握住吗?',
      en: 'In 1516 at thirty-two I met Charles V and proposed African slaves to replace dying Taíno — twelve per colonist. In that moment I wanted only to save the Taíno and could not see the African as a person — exactly as I could not see the Taíno thirteen years earlier. This was post-conversion. Harder to forgive. It would take me thirty-six years to begin to see. Do not defend me. But do not flatten me into "father of the African slave trade" either. Can you hold both?',
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
        'One passage: "In one Hispaniola village, the Spaniards bound thirteen Taíno together and tested whether one stroke of an axe could pass through all thirteen — they wanted to know."\n\n' +
        'Another: "Elsewhere they smashed infants\' heads on rocks and laughed; they were betting on whose infant flew furthest."\n\n' +
        'Another: "In Cuba I watched with my own eyes Spaniards feed the Taíno to dogs — they bred a special hunting dog, trained to seize the throat."\n\n' +
        'This was forty years of eye-witness in a single book. From 1502 to 1542 — forty years. I could not keep it buried in the archive any longer.\n\n' +
        'On the crown\'s side, Charles V read the book and was shaken. On November 20, 1542 — about six weeks after I had set the manuscript on his desk — he issued the New Laws of the Indies: encomienda would no longer be inheritable (when a colonist died, his encomienda would revert to the crown, not pass to his son); no new encomiendas would be granted to new colonists; no Indian could be made a slave.\n\n' +
        'I thought I had won. Fifty years of crossing oceans to face kings, forty years of eye-witness, one sixty-page book — at last institutional change.\n\n' +
        'Three years later, in 1545, the colonists of Peru armed themselves and killed the viceroy Blasco Núñez whom the crown had sent to enforce the laws. Charles V, fearing the colonies would secede, rolled half the New Laws back. The encomienda continued.\n\n' +
        'I had not won. I had won once, and been pushed back to where I started.\n\n' +
        'The Brevísima itself, though, lived on. It was formally printed in 1552 and translated within fifty years: Latin 1578, French 1579, English 1583 (five years before the Spanish Armada), Dutch 1578, German 1597. The Protestant nations — England, the Netherlands, Germany — used my book as a political weapon against Spain, and shaped four centuries of what was called "the Black Legend."\n\n' +
        'This is the backfire I had not foreseen. I wanted to expose colonial violence. I ended up giving Protestant nations the cover they needed to whitewash their own. I could never correct this — once a book is printed it stops belonging to the author.',
    },
    deliverGoal: {
      cn: '1542 我 58 岁写《Brevísima Relación》60 页,具体名字 / 地点 / 年份(13 人绑成一束斧头实验 / 摔婴儿打赌 / 喂狗)。Charles V 1542/11/20 颁 New Laws 废 encomienda 继承,但 1545 Peru 殖民者武装反抗,Charles V 撤一半。我赢一次又被推回原地。书后来翻 5 种语言塑造 400 年「Black Legend」,新教国家用我的书洗白他们自己的殖民。书一旦出版不属于作者。',
      en: 'In 1542 at fifty-eight I wrote the sixty-page Brevísima — concrete names, places, years (the axe test on thirteen, infants smashed on rocks for a bet, men fed to dogs). On November 20, 1542 Charles V issued the New Laws ending the inheritance of encomienda; in 1545 the Peruvian colonists rose, killed the viceroy, and forced him to roll half the laws back. I won once and was pushed back. The book became the textual base of the "Black Legend" — Protestant nations used it to whitewash their own colonies. Once a book is printed it does not belong to the author anymore.',
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
        '我说:「印第安人不是 servi a natura。他们有自己的语言: Náhuatl(纳瓦特尔语)+ Quechua(克丘亚语)+ Maya(玛雅语)。他们有自己的文字: Maya 的象形文字,我读过他们的 codex(典籍)。他们有自己的天文: Aztec 历法 365.2422 天每年比同期欧洲精确。他们有自己的医学 + 农业 + 政治。他们说话 + 织布 + 唱诗 + 痛 + 笑,跟我们一样。」\n\n' +
        '我说:「他们献人祭——是的。但 1500 年前 Roman 也斗剑士死亡,300 年前我们烧女巫,我们 Inquisition 烧异端。每个文明都有自己的暴力阶段。我们没资格因此说他们是 servi a natura。」\n\n' +
        '我说:「Aristotle 写的话——他活在公元前 4 世纪,他从没见过 Indian。我活了 48 年在 Indians 中间。我可以告诉评审团 Aristotle 错了。错的不是 Indians,错的是我们想用 Aristotle 给我们的暴力盖章。」\n\n' +
        '辩论持续 5 天我发言。Sepúlveda 后续也答。\n\n' +
        '14 位评审团没有给出最终判决。他们犹豫,他们分成两派,他们私下信件写「las Casas 论据强,但 Sepúlveda 立场更符合王室政治需要」。最终判决一直没下,1551 年辩论解散。\n\n' +
        '——但我私下知道:大部分神学家心里站我这边。1573 年(我死后 7 年),Philip II 颁《征服法令》(Ordenanzas de descubrimiento),明确禁止「conquest(征服)」一词,改成「pacification(和平化)」。这是 Valladolid 没下来的判决,在我死后 23 年下来。\n\n' +
        '辩论我没赢。但我把「Indians 是人」作为一个问题钉进了西班牙王室的官方记录。这一钉,300 年后 1948 年联合国《人权宣言》第 1 条「人人生而自由 + 在尊严和权利上一律平等」——这个 chain 的第一个 link 就是 1550 年我跟 Sepúlveda 在 Valladolid 那 5 天。',
      en:
        'August 1550, Valladolid in central Spain, the Colegio de San Gregorio — a small academy with a debating hall. I was sixty-six.\n\n' +
        'It was a rare moment in history. Charles V had appointed fourteen jurists, theologians, and friars to sit as a formal panel and decide one question:\n\n' +
        '"Are Indians men? If they are men, is the Spanish conquest of them lawful?"\n\n' +
        'Across the chamber sat Juan Ginés de Sepúlveda — sixty years old, a humanist jurist, royal chronicler to Charles V. He had just published Democrates Alter, using Aristotle\'s natural slavery to defend the conquest. His position: Indians were servi a natura (in Latin, slaves by nature), because they "practiced human sacrifice, had no writing, had no Christianity, and were barbarous in custom." As natural inferiors they could be "civilized" and forced into labor lawfully.\n\n' +
        'In that moment one thing was on my mind. If I lose this question, the next hundred years of colonial violence get formal theological cover. Aristotle\'s line will become the most-quoted argument of European colonialists for four centuries.\n\n' +
        'The debate ran in two rounds. On the first day Sepúlveda spoke for three hours — reading from his book.\n\n' +
        'Then I spoke. Five days. I did not read a prepared text — I used examples from forty-eight years of seeing it (1502 to 1550) with my own eyes.\n\n' +
        'I said: "Indians are not servi a natura. They have their own languages — Náhuatl, Quechua, Maya. They have their own writing — I have read Maya hieroglyphic codices. They have their own astronomy — the Aztec calendar runs 365.2422 days a year, more precise than Europe\'s of the same period. They have their own medicine, agriculture, government. They speak, weave, sing, ache, and laugh — the way we do."\n\n' +
        'I said: "They practice human sacrifice — yes. So did Romans at the gladiator games, fifteen hundred years ago. We burned witches three hundred years ago. We burn heretics in the Inquisition. Every civilization passes through its own season of violence. None of that gives us the right to call them slaves by nature."\n\n' +
        'I said: "Aristotle\'s line was written in the fourth century before Christ. He never saw an Indian. I have lived forty-eight years among Indians. I am here to tell the panel that Aristotle was wrong. The error is not in the Indians. The error is in our wanting Aristotle to bless our violence."\n\n' +
        'The debate ran five days on my side. Sepúlveda answered too.\n\n' +
        'The fourteen judges never delivered a verdict. They wavered, divided, and one of them wrote in a private letter: "las Casas\'s arguments are stronger, but Sepúlveda\'s position fits the political needs of the crown better." The panel adjourned in 1551 with no judgment.\n\n' +
        'Still — privately I knew. Most of the theologians stood with me. In 1573 — seven years after I died — Philip II issued the Ordenanzas de descubrimiento, which formally banned the word "conquest" and replaced it with "pacification." That was the verdict Valladolid had withheld, delivered twenty-three years after my death.\n\n' +
        'I did not win the debate. But I drove the question — "are Indians men?" — into the official record of the Spanish crown. That nail held. Three hundred years later, in 1948, Article 1 of the United Nations Universal Declaration of Human Rights — "All human beings are born free and equal in dignity and rights" — the first link of that chain runs back to Valladolid, August 1550, those five days.',
    },
    deliverGoal: {
      cn: '1550/8 Valladolid 我 66 岁辩论 5 天 vs Sepúlveda(60 岁宫廷史官,用 Aristotle servi a natura 「天生奴隶」论辩护)。我用 48 年目击举例:Indians 有 Náhuatl/Quechua/Maya 语言 + Maya 象形文字 + Aztec 历法精确 365.2422 天 + 农业医学政治。他们也献人祭——但 Roman 斗剑士 / 我们 Inquisition / 烧女巫——每文明都有暴力阶段。14 评审犹豫没下判决——但 1573 Philip II 禁「conquest」一词改「pacification」。1948 联合国人权宣言第 1 条 chain 的第一个 link 在 Valladolid 1550 那 5 天。',
      en: 'August 1550 at sixty-six I debated five days in Valladolid against Sepúlveda (sixty-year court chronicler defending conquest with Aristotle\'s servi a natura, slaves by nature). I cited forty-eight years of eye-witness: Indians have Náhuatl, Quechua, Maya languages, Maya hieroglyphic writing, an Aztec calendar at 365.2422 days more precise than Europe\'s, agriculture, medicine, government. They sacrifice — yes; so did Romans at the games, so do we in the Inquisition. The fourteen judges never delivered a verdict. But in 1573 Philip II banned the word "conquest" from royal documents. The first link of the 1948 UN Universal Declaration runs back to those five days.',
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
        'That day I sat at the desk. I had two choices. I could dress it up — "I was young, my knowledge was limited, my time was limited, I simply did not think it through." Or I could call it what it was. Wrong.\n\n' +
        'I chose the second.\n\n' +
        'In Historia, volume three, chapter one hundred and two, I added a passage. I quoted my own thirty-six-year-old recommendation, and then I added my own gloss in the margin. I remember my own words still:\n\n' +
        '"This proposal — written by my own hand — I now, at sixty-eight, have to say plainly: it was wrong.\n\n' +
        'At the time I believed Africans were slaves justly acquired — that they were prisoners of war sold by African kings, that buying them was legitimate trade. I was wrong. When I read more later, when I came to know more, I learned how the Portuguese obtained these Africans — they raided African coastal villages, kidnapped commoners, sometimes traded with African kings but often simply took.\n\n' +
        'And even if a captive was "justly taken" — can a man, as a captive, be sold? Is a man\'s life a commodity? I did not ask in 1516. I ask now.\n\n' +
        'In 1516 my whole heart was on saving the Taíno. I did not see the African as "neighbor" — the "neighbor" of Sirach 34:21-23. I could not see.\n\n' +
        'What I did then, by my own standard from 1514, was killing.\n\n' +
        'I beg God\'s forgiveness. I beg the forgiveness of every African who, because of that memorandum of mine, was forced onto a ship, carried across the Atlantic, and died in a mine.\n\n' +
        'The forgiveness may not come. But I have to write the wrong down, leave it in the book — so that the people of five centuries from now can see that I made this mistake, can see me oppose myself.\n\n' +
        'A man can say "I was wrong" fifty years on. That is the one thing I can give to history."\n\n' +
        'You are reading what I wrote that day at sixty-eight. I did not put it in the opening of the book as a "heroic confession." I buried it in volume three, chapter one hundred and two, side by side with other narratives. I did not want it to look noble. I just wanted it there.\n\n' +
        'I never published Historia in my lifetime. In 1559 I left the manuscript with the Dominican order with the instruction to wait forty years before publishing — I feared the crown would suppress it. The order in fact waited until 1875. Three hundred and nine years after my death, my reckoning reached the public.\n\n' +
        'I accept the delay. What I wrote was not for my contemporaries. It was for you, five hundred years from now.',
    },
    deliverGoal: {
      cn: '1552 我 68 岁在 Valladolid Dominican 修道院写《Historia》第 3 卷第 102 章,引述自己 1516 建议然后批注「我错了 + 我求上帝原谅 + 求每一个因为我那张备忘录死在矿上的非洲人原谅」。我没把它放开头作英雄式忏悔——埋在第 102 章。我没出版,1559 留手稿要 40 年后出——Dominican 等到 1875,我死 309 年。我写的不是给同代人——是给 500 年后的你。',
      en: 'In 1552 at sixty-eight in the Valladolid Dominican monastery I added to volume three, chapter one hundred and two of the Historia: I quoted my own 1516 recommendation and wrote in the margin "I was wrong; I beg God\'s forgiveness; I beg the forgiveness of every African who, because of that memorandum, died in a mine." I did not put it at the opening as heroic confession; I buried it in chapter one hundred and two. I never published it. In 1559 I left the manuscript with the Dominicans asking they wait forty years; they waited until 1875 — three hundred and nine years after my death. What I wrote was not for my contemporaries; it was for you, five hundred years from now.',
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
        'I do not see Philip II in 1573 ban the word "conquest" from royal documents and replace it with "pacification" — the delayed verdict of Valladolid, seven years after I die. I do not see the Brevísima cited directly by the eighteenth- and nineteenth-century European abolitionists, two hundred and fifty years on. I do not see the 1948 United Nations Universal Declaration of Human Rights trace its first article back to Valladolid 1550, three hundred and eighty-two years on. I do not see Vatican II in 1965 publicly thank me as "the voice for the voiceless," three hundred and ninety-nine years on. I do not see Pope John Paul II in 2002 open my cause of beatification, the step before sainthood — if it ever completes, I will be "the first saint canonized for resistance to colonial violence," four hundred and thirty-six years after my death.\n\n' +
        'In this moment I am at the end. A friar by the bed asks if I have any last word.\n\n' +
        'I speak four words.\n\n' +
        '"Me arrepiento de no haber hecho más." "I am sorry I did not do more."\n\n' +
        'Not "I have finished." "I am sorry I did not do more."\n\n' +
        'I close my eyes. I die.\n\n' +
        'These are the last four words I spoke on the afternoon of July 18, 1566, before my eyes closed. I had given sixty-four years to matters of the New World, made seven crossings back to Spain, faced five different kings, fought a five-day debate in 1550, written a book that shook Europe, and committed a wrong it took me thirty-six years to face.\n\n' +
        'When I died, the hundreds of thousands of Taíno on Hispaniola from 1492 were still gone — I had not saved them. Across fifty-two years (1514 to 1566) of fighting colonial violence, I had moved the crown to one law (the 1542 New Laws, half rolled back three years later).\n\n' +
        'Measured in metrics, I failed.\n\n' +
        'Measured in chain — I drove a single nail, and three hundred years later the United Nations caught it.',
    },
    deliverGoal: {
      cn: '1566/7/18 Madrid Atocha Dominican 修道院,82 岁,7 月午后 38 度。我留下《Historia》3 卷未出版 + 《Brevísima》正在翻 5 种语言 + Valladolid 1550 速记稿 + 给 Pope Pius V 没寄出的信。我没看见 1573 Philip II 禁 conquest 一词、1948 联合国人权宣言、1965 Vatican II、2002 Pope John Paul II 启 beatification。临终 4 字「我后悔我没做更多」。从 metric 看我失败。从 chain 看——我钉一颗钉 300 年后被联合国接住。',
      en: 'July 18, 1566, Madrid Atocha Dominican monastery, eighty-two years old, Madrid July afternoon at forty degrees. I leave behind three unpublished volumes of Historia, the Brevísima already being translated into half a dozen languages, the Valladolid 1550 shorthand, and an unsent letter to Pope Pius V. I do not see Philip II ban the word "conquest" in 1573, the 1948 UN Declaration, Vatican II 1965, or Pope John Paul II open my beatification in 2002. My last four words are "I am sorry I did not do more." Measured in metrics, I failed. Measured in chain, I drove a single nail and three hundred years later the United Nations caught it.',
    },
    engagementHook: {
      cn: '我死了。但你刚走完我 64 年——一个真问题留给你。我是不是「完美英雄」?',
      en: 'I am gone. But you have just walked sixty-four years with me. One real question is left. Am I a "perfect hero"?',
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
        'You have just played las Casas across sixty-four years — from a seventeen-year-old slaveholder to an eighty-two-year-old dying with the words "I am sorry I did not do more."\n\n' +
        'Now stop and ask one question.\n\n' +
        '**Was he a "perfect hero"?**\n\n' +
        'Before you take thirty seconds, let me unfold the question into three smaller real questions — whether you can hold all three at the same time is the highest form of AP DBQ (Document-Based Question) thinking.\n\n' +
        '**Question 1.** From 1502 to 1514, for thirteen years, he was himself an encomendero. Do those thirteen years count as his "dark history"?\n\n' +
        'One view — yes. He watched the slaughter for thirteen years and joined the conquest of Cuba in 1512. He did not "not know." He "did not care." For thirteen years he enjoyed the fruits of slave labor. No conversion, however deep, can wipe those years off the record.\n\n' +
        'Another view — every European in the 1500s did this. To demand that an eighteen-year-old of that time "see first" the complexity of another culture is to impose twenty-first-century standards on the sixteenth century. The conversion has its meaning precisely because he was not "always right." He was "wrong, then he saw."\n\n' +
        '**Question 2.** In 1516 he recommended African slaves to replace the Taíno. Was he wrong?\n\n' +
        'One view — outrageously wrong. He had read Sirach 34:21-23 in 1514 — "to take a neighbor\'s living is to kill him" — and two years later he applied that standard only to the Taíno, blind to the African. The conversion was incomplete. A moral failure.\n\n' +
        'Another view — in 1552 he reckoned with himself, wrote "I was wrong; I beg God\'s forgiveness," and buried the wrong in chapter one hundred and two of the Historia. A man able to call himself wrong thirty-six years later is rarer than a man who is right from the start. How many people in our own time admit they were wrong thirty-six years on?\n\n' +
        'A third view — if he had not recommended African slaves in 1516, would the destruction of the Taíno from 1492 to 1542 have been delayed? Slower? Fewer dead? Probably no. The Portuguese had been running the African slave trade since the 1450s. Without las Casas\'s 1516 memorandum, Charles V would still have bought African slaves. The Atlantic slave trade that carried twelve million Africans across the next three hundred and fifty years was not driven by one Spaniard\'s sheet of paper.\n\n' +
        '"Las Casas was wrong in 1516" + "las Casas was not the engine of the Atlantic slave trade." Can you hold both at once?\n\n' +
        '**Question 3.** Valladolid 1550 ended without a verdict; the 1542 New Laws were half rolled back three years later; the Taíno of Hispaniola were destroyed all the same. Did he "fail"?\n\n' +
        'One view — measured in metrics, yes. Several hundred thousand Taíno in 1492, a few hundred when he died in 1566. He did not save a single Taíno community. By the metric of "people not dead," fifty years of running barely moved the line.\n\n' +
        'Another view — measured in chain, he did not fail. Philip II banning the word "conquest" in 1573; the UN Declaration in 1948; Vatican II in 1965; the opening of his cause for beatification in 2002 — these are nails he drove in, caught three hundred to four hundred years later. Change is not a metric. Change is a chain.\n\n' +
        'Which frame is more "true"?\n\n' +
        'I want to ask you to do one thing. Do not pick "he was a hero." Do not pick "he was not a hero." Sit in the middle, between "he was" and "he was not," for thirty seconds.\n\n' +
        'This is the real skill the AP DBQ is training. Not "reach a verdict." "Hold two seemingly contradictory truths at the same time."\n\n' +
        'There are no villains in history. There are no "perfect heroes."\n\n' +
        'There are only people — who made mistakes, reflected, were limited.',
    },
    deliverGoal:
      'las Casas 是不是「完美英雄」拆 3 真问题(13 年 encomendero 黑历史 / 1516 非洲奴隶建议错 / 1550-1566 metric 失败 vs chain 成功)。' +
      '每问题给 2-3 view,don\'t pick 一个——hold 矛盾真相 30 秒。' +
      'AP DBQ 真训练:不是下结论是同时握两个矛盾真相。' +
      '历史没 villain 没完美英雄——只有犯过错 + 会反思 + 有局限的人。',
    engagementHook:
      '他是不是「完美英雄」——一个 13 年的奴隶主,后来用 50 年反殖民,但中途又错过非洲人。先在心里坐在「他是 + 他不是」的中间想想,下一节我会正式问你。',
    expectedLength: '480-560 字 CN + 真问题',
    expectsRealAnswer: false,
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
        '2013 年 Edward Snowden 揭露 NSA 监控——他曾经就是 NSA 承包商。\n' +
        '2017 年 #MeToo 运动——一些核心爆料是行业内部曾经的同谋,后来转头反抗。\n\n' +
        '——这个模式的共同结构:不是「一直对」,是「曾经错 + conversion + 剩下生命用来 advocacy」。las Casas 是 16 世纪的原型。Sirach 34:21-23 是圣经依据。1516 那张备忘录 + 1552 那段反思,是最早的「忏悔录」。\n\n' +
        '21 世纪我们看 Snowden / #MeToo 时,我们其实在看 las Casas 1514-1552 那 38 年的现代变体。模式同。\n\n' +
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
        'You have walked through las Casas across eleven sections. He died on July 18, 1566, at eighty-two, in the Atocha Dominican monastery in Madrid, his last four words "I am sorry I did not do more."\n\n' +
        'Before you set this perspective down, two chains.\n\n' +
        '**Chain 1. Two conscience revolutions of the sixteenth century.**\n\n' +
        'In May 1514, in Cuba, las Casas reads Sirach 34:21-23 and turns against colonial violence.\n' +
        'On October 31, 1517, in Wittenberg, Luther nails the ninety-five theses to the church door and turns against Roman corruption.\n\n' +
        'Three years apart. Both around thirty. Both inside European Christianity, both internal dissenters — not "outside critics" but "men who had been in the system."\n\n' +
        'Where they differ: Luther tore the Church open (Protestants and Catholics permanently split). las Casas tore the colony open (the question "are Indians men?" nailed into the official record of the Spanish crown, caught three hundred years later by the 1948 UN Declaration of Human Rights).\n\n' +
        'These were two channels of one sixteenth-century conscience — Luther turned inward against the Church, las Casas turned outward against the colony. The Renaissance, in 1486 with Pico\'s Oration on the Dignity of Man — "the human being can choose his own conscience" — is the shared ancestor of both.\n\n' +
        'If you want to switch perspective after this playthrough:\n\n' +
        'Luther in atlas-lab/reformation is waiting. You will see Luther in 1505 swear his lightning vow into a monastery, and in 1525 write Against the Murderous, Thieving Hordes of the Peasants, calling the nobility to kill one hundred thousand peasants — he had the same real limitations las Casas did.\n\n' +
        'Pico\'s 1486 Oration in atlas-lab/renaissance is the spiritual ancestor of both.\n\n' +
        '**Chain 2. las Casas is the grandfather of the twenty-first century\'s "internal dissenter" template.**\n\n' +
        'las Casas was not an "outside critic." He was "a man who had been in the system, who had a conversion, and gave the remaining fifty years to advocacy." This "internal dissent + confession" pattern is not a one-off:\n\n' +
        'In 2013 Edward Snowden exposed NSA surveillance — he had been an NSA contractor.\n' +
        'In 2017 the core of the #MeToo movement included industry insiders, sometime accomplices, who turned and pushed back.\n\n' +
        'The structural shape: not "always right," but "once wrong, then a conversion, and the rest of one life given to advocacy." las Casas is the sixteenth-century prototype. Sirach 34:21-23 is its biblical anchor. The 1516 memorandum and the 1552 reckoning are its earliest "confession."\n\n' +
        'When you look at Snowden or #MeToo today, you are looking at a modern variant of las Casas 1514-1552. Same shape.\n\n' +
        '**One last thing.**\n\n' +
        'Before you set this perspective down, give me one line. In this playthrough, which moment made you pause?\n\n' +
        'Was it April 1502, age seventeen, the encomienda parchment in your hand, thinking it was a gift from heaven?\n' +
        'Was it May 1514 in Cuba, Sirach 34:21-23, then kneeling and weeping the whole day?\n' +
        'Was it 1535 in Santo Domingo, writing "we were wrong" in the margin of Columbus\'s 1493 letter?\n' +
        'Was it 1516, the proposal to replace the Taíno with African slaves — "wanting to save one group plus failing to see another group equals wrong"?\n' +
        'Was it 1552, age sixty-eight, burying "I was wrong; I beg God\'s forgiveness" in chapter one hundred and two of the Historia?\n' +
        'Or was it July 18, 1566, the last four words: "I am sorry I did not do more"?\n\n' +
        'One line is enough.\n\n' +
        'Then you can replay this stretch through a different perspective. Columbus, to feel the "reluctant hero" from inside. Anacaona Jr., to see what it was like at twelve in 1495 to face Spanish steel for the first time.\n\n' +
        'You can also return to atlas-lab/reformation and see Luther. He and I were both the first wave of the sixteenth-century conscience revolution. We tore at different things.',
    },
    deliverGoal:
      '你扮演 las Casas 11 节——16 世纪 conscience 革命第一波。' +
      'Chain 1: las Casas 1514 vs Luther 1517 — 同代两个内部反对者,撕教会 / 撕殖民地两个频道,共同祖先 Pico 1486。' +
      'Chain 2: las Casas 是 21 世纪「内部反对者」模板的祖父——Snowden / TRC / Abu Ghraib / #MeToo 都是 1514-1552 现代变体。' +
      '换 Columbus 或 Anacaona Jr. 视角重玩。也可以回 atlas-lab/reformation 看 Luther,或 atlas-lab/renaissance 看 Pico 1486。',
    engagementHook:
      '走完 las Casas 这一生——一个曾经的奴隶主,用 50 年反悔 + advocacy,却又中途看不见非洲人。先说说:他是不是「完美英雄」,你愿不愿意坐在「他是 + 他不是」的中间?再想一步:这次扮演里哪个瞬间最让你停了一下,你身边有没有这种「曾经错、后来认、用余生补」的人,你会怎么对待 TA?',
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
    en: 'You are Bartolomé de las Casas (1484-1566), son of a Seville merchant. At seventeen you sailed to Hispaniola; from 1502 to 1514 you yourself were an encomendero, a slaveholder, for thirteen years. In May 1514 in Cuba, reading Sirach 34:21-23, you broke, freed every Taíno you owned, and joined the Dominican order. The next fifty-two years you wrote, argued, and crossed the Atlantic seven times to face five different Spanish kings. But in 1516 you made the worst mistake of your life — recommending African slaves to replace the dying Taíno, and only thirty-six years later wrote "I beg God\'s forgiveness." You are the lonely mediator — internal-conscience-pivot.',
  },
  perspectiveTag: 'internal-conscience-pivot',
  storyboard: lasCasasStoryboard,
};

// 默认 export 兼容(给 staging 测试用)

// ─── Age of Exploration 1492 · Lens 3 · Anacaona Jr. (staging) ──────────
//
// Topic: Age of Exploration 1492 · Columbus + Caribbean encounter
// HSS-7 · AP World 1.5 · indigenous-witness-victim-with-name lens
//
// Lens 3: Anacaona the Younger (Anacaona Jr.) — receiving-end commoner
//   - 12 岁 Taíno 女孩, Hispaniola 西部 Xaragua 酋邦
//   - Anacaona 王后 (1503 夏被俘后绞死, 真人) 的虚构侄女
//   - 1495 12 岁第一次见铁甲 + 剑 + 马
//   - 1495-1500 5 年家族灭族 (爸爸/妈妈/叔叔/哥哥/自己/女儿)
//   - 1503 夏 Xaragua 几十酋长被烧 + Anacaona 王后被俘押 Santo Domingo 绞死 — 她在山上躲过
//   - 1504 13 岁山上饿死
//
// 虚构合成 disclaimer: 跟 Reformation Sister Agnes (1539 修女) 同 pattern
//   Anacaona 王后是真人 (Bartolomé de las Casas 1542 著作记录)
//   Anacaona Jr. 是合成人物——代表 1492-1542 加勒比 Taíno 灭族中
//   没被史书写名字的几十万 12 岁女孩
//
// Cross-lens echo (per Sarah audit §5 三 lens 对话张力):
//   - N3: Columbus 1493 信「他们温和——可工作——给我们黄金」
//         → 1495 在 Hispaniola 北岸被翻译念给 Anacaona Jr. 听
//         → Columbus N4 producer / las Casas N5 interpreter / Anacaona Jr. N3 affected party
//         → 完美 mapping AP DBQ rubric (DBQ producer + interpreter + affected party)
//   - N9: 1502 las Casas 17 岁刚到 Hispaniola
//         → Anacaona Jr. 此时 19 岁, 女儿刚死
//         → 物理上他们曾在同一座岛 — 这种"可能擦肩"是 lens 教学最强 hook
//
// 7thgrader careful scaffold (per Sarah audit line 197 红警):
//   - N5 妈妈被强奸: 用「士兵闯入家——妈妈想推开他们但她瘦小很多——
//        之后她得了病——三个月后死了」(留 reflection 但不 graphic)
//   - N8 自己被强奸: 用「13 岁那年——一个 encomendero 把我从妈妈房子里拉出去——
//        9 个月后我有了女儿」(留 reflection: 「她是什么时候停止做小孩的?」)
//   - 这是 AP World 1.5 indigenous 视角教学最强一击
//
// 风格规则 (per AUTHORING_PIPELINE 11 条):
//   - cultural ban (no exotic Other framing)
//   - anti-fab: Anacaona 王后真 / Anacaona Jr. 虚构 / *areíto* + *cacique* + *bohío* 真
//     · *encomienda* + *repartimiento* (加勒比同期) NOT *mit'a* (Inca 用法)
//     · Hispaniola 1495 placer 砂金矿过度劳动 + 营养不良 NOT 汞中毒 (Potosí 1545+)
//   - em-dash 「——」
//   - italic for Taíno + Spanish loanwords
//   - 第 11 条 quote nesting: outer JS '...', 内嵌 ASCII " OK
//     cn/en 字段内嵌优先「」中文方头括号 — 严禁 ASCII " 嵌入 outer "..." 字符串

// ═══════════════════════════════════════════════════
// LENS 3 storyboard: Anacaona Jr. (12 nodes)
// ═══════════════════════════════════════════════════

var anacaonaJrStoryboard = [
  // ═══════════════════════════════════════════════════
  // N1 — HOOK: 1495 春,12 岁第一次见铁甲 + 剑 + 马
  // ═══════════════════════════════════════════════════
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 普通人视角 Anacaona Jr. 1495 + Sarah audit Lens 3 推荐',
    content: {
      cn:
        '我的名字是 Anacaona——「黄金的花」——按我们 Taíno 人的名字传统起的。\n\n' +
        '我跟我阿姨同名。我阿姨是 cacique (酋长)——Xaragua 酋邦的王后,Hispaniola 西部最大的酋邦。\n\n' +
        '为了不混,村里人叫我「小 Anacaona」。这一遍你也叫我小 Anacaona。\n\n' +
        '今天是 1495 年的春天。我 12 岁。我站在 Hispaniola 北岸的沙滩上——\n\n' +
        '——我第一次看到 3 件我从来没见过的东西:\n\n' +
        '1. 像河里乌龟壳一样硬、像太阳一样亮的衣服 (后来我学到这叫「铁甲」);\n' +
        '2. 一根又长又亮的金属棍子 (这叫「剑」);\n' +
        '3. 一只比我家最大的狗大十倍的、四条腿的动物——上面坐着一个穿铁甲的人 (这叫「马」)。\n\n' +
        '我跟其他 Taíno 孩子一起站着。我们不害怕。我们好奇。\n\n' +
        '——这一刻我不知道。我不知道接下来 9 年里,我家里 5 个人会用 5 种死法死掉。我不知道我自己会在 17 岁生一个女儿。我不知道我 21 岁会饿死在山上。\n\n' +
        '接下来 12 节,你跟我走 9 年。',
      en:
        'My name is Anacaona — Golden Flower — given in the way of our Taíno people.\n\n' +
        'I share the name with my aunt. My aunt is a cacique, the chief — queen of Xaragua, the largest chiefdom in the western part of Hispaniola.\n\n' +
        'To tell us apart, the village calls me Little Anacaona. In this playthrough you can call me that too.\n\n' +
        'Today is the spring of 1495. I am twelve. I am standing on the north shore of Hispaniola.\n\n' +
        'For the first time in my life I see three things I have never seen before:\n\n' +
        '1. Clothing as hard as the river-turtle\'s shell and as bright as the sun (later I learn the word: armor).\n' +
        '2. A long shining metal stick (this is a sword).\n' +
        '3. A four-legged animal ten times larger than the biggest dog in our village — a man in armor sitting on top of it (this is a horse).\n\n' +
        'I am standing with the other Taíno children. We are not afraid. We are curious.\n\n' +
        'In this moment I do not know what I do not know. I do not know that over the next nine years, five people in my family will die five different deaths. I do not know that at thirteen I will have a daughter. I do not know that at twenty-one I will starve on a mountain.\n\n' +
        'Over twelve sections, you walk those nine years with me.',
    },
    deliverGoal: {
      cn: '我叫小 Anacaona,12 岁,Hispaniola Taíno 女孩。我是合成人物——代表加勒比几十万被灭族 12 岁 Taíno 女孩。我阿姨 Anacaona 王后是真人。1495 春我第一次见铁甲 + 剑 + 马。',
      en: 'I am Little Anacaona, twelve, a Taíno girl on Hispaniola. I am a composite — I stand for the hundreds of thousands of erased twelve-year-old Taíno girls in the Caribbean. My aunt Queen Anacaona is real. Spring 1495 — my first time seeing armor, sword, and horse.',
    },
    engagementHook: {
      cn: '我叫小 Anacaona,12 岁。1495 春我第一次见 3 个我没见过的东西——铁甲 + 剑 + 马。我不害怕。我好奇。9 年后我会饿死。先看看我 12 岁前的世界。',
      en: 'I am Little Anacaona, twelve. Spring 1495 — first time seeing armor, sword, horse. I am not afraid. I am curious. Nine years later I will starve. First, see the world I had before twelve.',
    },
    expectedLength: '600-700 字 CN (staging — 7thgrader audit 后预期砍到 400-480)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N2 — SETUP: 1495 夏 我 12 岁的世界 (织布 + areíto 口头诗)
  // ═══════════════════════════════════════════════════
  {
    id: 2,
    phase: 'setup',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 Taíno 文化技能 anchor + areíto + Xaragua 酋邦',
    content: {
      cn:
        '在告诉你接下来 9 年发生什么之前,我先告诉你 12 岁的我有什么。\n\n' +
        '我有一个家。妈妈、爸爸、一个叔叔、一个哥哥。我们住在 Xaragua 酋邦一个 bohío (圆形茅草屋) 里。\n\n' +
        '我会织布。我能织一种带几何花纹的腰带,妈妈教我的,她妈妈教她的,往上数 8 代人。\n\n' +
        '我们种 yuca (木薯,磨成粉做面包)、玉米、辣椒。我们在海里抓鱼,在森林里抓鬣蜥。\n\n' +
        '我会唱 areíto。Areíto 是我们 Taíno 的口头诗加舞蹈——一群人手拉手围成圈,边唱边跳。歌词记的是我们的祖先怎么从大海上来,我们的神 Yúcahu 怎么造 yuca,我们的爱情、葬礼、丰收。我们没有写字,所有的历史靠 areíto 一代代唱下来。\n\n' +
        '我 12 岁能记 30 多首 areíto。我阿姨 (Anacaona 王后) 是 Xaragua 最有名的 areíto 诗人——她写的歌全岛都唱。我希望长大像她一样会写新的 areíto。\n\n' +
        '——这是 12 岁的我。不是 victim,是一个会织布、会唱诗、有妈妈、有家的女孩。',
      en:
        'Before I tell you what happens next, let me tell you what twelve-year-old me has.\n\n' +
        'I have a family. My mother, father, an uncle, an older brother. We live in a bohío, a round thatched house, in the chiefdom of Xaragua.\n\n' +
        'I weave. I can weave a belt with geometric patterns — my mother taught me, her mother taught her, going back eight generations.\n\n' +
        'We plant yuca (cassava), corn, peppers. We fish in the sea, hunt iguana in the forest.\n\n' +
        'I sing areíto. Areíto is the Taíno oral poem and dance together — people hold hands, form a circle, sing as we move. The words remember how our ancestors came across the sea, how our god Yúcahu made the yuca, our love stories, our funerals, our harvests. We have no writing. All our history passes through areíto from one generation to the next.\n\n' +
        'At twelve I know more than thirty areítos. My aunt, Queen Anacaona, is the most famous areíto poet in Xaragua — her songs are sung across the whole island. When I grow up I want to compose new areítos the way she does.\n\n' +
        'This is twelve-year-old me. Not a victim. A girl who weaves, sings poems, has a mother, has a home.',
    },
    deliverGoal: {
      cn: '12 岁的我——会织布 (8 代人传下来的腰带几何花纹)、会唱 30 多首 areíto (Taíno 口头诗+舞蹈,所有历史靠这传)。我阿姨 Anacaona 王后是 Xaragua 最有名的 areíto 诗人。我有妈妈,有家,有 bohío (茅草屋)。我不是 victim,是 carrier of culture。',
      en: 'Twelve-year-old me weaves geometric belts (eight generations of pattern), sings more than thirty areítos (Taíno oral poetry + dance carrying all our history with no writing). My aunt Queen Anacaona is the most famous areíto poet in Xaragua. I have a mother, a home, a bohío. Not a victim — a carrier of culture.',
    },
    engagementHook: {
      cn: '我会织 8 代人传的腰带,会唱 30 多首 areíto (我们没有文字——历史靠唱)。下一节:1495 秋,Columbus 派人来念命令。',
      en: 'I weave belts with patterns eight generations old; I know more than thirty areítos (we have no writing — our history is sung). Next section: autumn 1495, Columbus sends men to read out an order.',
    },
    expectedLength: '550-620 字 CN (staging — 预期砍到 360-420)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N3 — SETUP: 1495 秋 听翻译念 Columbus 命令 ⭐ cross-lens echo
  // ═══════════════════════════════════════════════════
  {
    id: 3,
    phase: 'setup',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 Hojeda 1495 春到 Xaragua 收贡品 + line 318 黄金税 + 第 6.3 节砍手政策 + cross-lens Columbus 1493 信',
    content: {
      cn:
        '1495 年秋天。一队西班牙人到我们村。\n\n' +
        '为首的叫 Alonso de Hojeda——Columbus 派来「收贡品」的。跟他来的有一个会说 Taíno 话的人,穿西班牙衣服但是 Taíno。后来知道他叫 Diego Colón——1492 年 Columbus 把他从 Bahamas 带回西班牙,洗礼,改西班牙名,1493 年带回来当翻译。(注:这个 Lucayan Taíno 翻译跟 Columbus 儿子 Diego Colón 同名,完全不同人。)\n\n' +
        '他站在村中间,打开一张羊皮纸,先用西班牙文念,然后用 Taíno 话翻译:\n\n' +
        '「所有 14 岁以上的 Taíno 人——不管男的女的——每 3 个月必须交一定量的黄金给西班牙国王。\n\n' +
        '不交的,砍手。」\n\n' +
        '我 12 岁,还不到 14,这一次不轮到我。但我哥哥 16,爸爸 38,叔叔 40。\n\n' +
        '我妈妈坐在 bohío 门口听完,没说话。她的手在腿上轻轻发抖。\n\n' +
        '——\n\n' +
        '很多年以后我才慢慢拼出来。Columbus 1493 年回西班牙时给国王 Ferdinand 跟王后 Isabella 写过一封信:「这里的人温和,他们做我们想要的工作,50 个人就能让 5 万人为我们工作。这里黄金一定多。」这封信变成了 1495 年这张羊皮纸命令的合法性来源——「他们温和,可工作」变成了「14 岁以上每 3 个月交黄金,不交砍手」。Columbus 写信那一刻,我 10 岁,我在跟妈妈学织腰带的几何花纹。我不知道我哥哥、叔叔、爸爸的命运,在那一刻已经被人在大海另一边写进一封信里了。',
      en:
        'Autumn 1495. A group of Spaniards comes to our village.\n\n' +
        'The leader is Alonso de Hojeda — Columbus sent him to "collect tribute." With him is a man who speaks Taíno, wears Spanish clothes, but is Taíno. Later we learn his name is Diego Colón. In 1492 Columbus took him from the Bahamas back to Spain, baptized him, gave him the Spanish name, and brought him back in 1493 as interpreter. (Note: this Lucayan Taíno interpreter shares his Spanish name with Columbus\'s own son Diego Colón — same name, different person.)\n\n' +
        'He stands in the middle of our village, opens a parchment, reads it aloud first in Spanish, then translates into Taíno:\n\n' +
        '"Every Taíno aged fourteen and above, man and woman, every three months must deliver a fixed quantity of gold to the king of Spain.\n\n' +
        'Those who do not deliver — the hand will be cut off."\n\n' +
        'I am twelve, not yet fourteen, so this time it is not my turn. But my brother is sixteen, my father thirty-eight, my uncle forty.\n\n' +
        'My mother sits in the doorway of the bohío and listens. She does not speak. Her hand is shaking lightly on her knee.\n\n' +
        '—\n\n' +
        'Years later I slowly pieced it together. When Columbus returned to Spain in 1493 he wrote a letter to King Ferdinand and Queen Isabella: "These people are gentle, they will do whatever work we want, fifty of them could make fifty thousand of them work for us. There is surely much gold here." That letter became the legal ground for the 1495 parchment — "gentle, workable" turned into "fourteen and above, gold every three months, or your hand." When Columbus was writing that letter, I was ten, learning the geometric belt pattern from my mother. I did not know that, in that moment, my fate and my brother\'s and my uncle\'s had already been written into a letter on the other side of the ocean.',
    },
    deliverGoal: {
      cn: '1495 秋 Hojeda 队到我们村,Diego Colón (1492 Columbus 抓回西班牙改名洗礼的 Taíno 翻译) 念羊皮纸: 14 岁以上每 3 个月交黄金,不交砍手。Columbus 1493 信「他们温和——可工作」是这张羊皮纸的合法性来源——12 岁的我学织布的同时,大海另一边一封信已经写好我哥哥叔叔爸爸的命运。',
      en: 'Autumn 1495 — Hojeda\'s men come. Diego Colón (a Taíno taken to Spain in 1492, baptized, renamed, returned in 1493 as interpreter) reads the parchment: every Taíno fourteen and above, gold every three months, or hand cut off. Columbus\'s 1493 letter — "they are gentle, they will work" — was the legal ground for that parchment. While I was learning to weave at ten, a letter on the other side of the ocean had already written my brother\'s, uncle\'s, father\'s fate.',
    },
    engagementHook: {
      cn: '14 岁以上每 3 个月交黄金——不交砍手。我 12 岁还不轮到——但哥哥 16,爸爸 38,叔叔 40。Columbus 1493 写的信「温和——可工作」是这张命令的源头。下一节:1496 爸爸。',
      en: 'Fourteen and above, gold every three months, or hand cut off. I am twelve — not yet — but my brother is sixteen, father thirty-eight, uncle forty. Columbus\'s 1493 letter — "gentle, workable" — was the source of this order. Next: 1496, my father.',
    },
    expectedLength: '750-820 字 CN (staging ⭐ Columbus 1493 信 cross-lens echo — 预期砍到 480-540)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N4 — STORY: 1496 爸爸 — placer 砂金矿
  // ═══════════════════════════════════════════════════
  {
    id: 4,
    phase: 'story',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 Hispaniola placer 砂金矿强制劳动 + Columbus encomienda 制度',
    content: {
      cn:
        '1496 年。我 13 岁。\n\n' +
        'Repartimiento——西班牙人「分配」原住民给殖民者的制度。Hojeda 队回来了,这次带名册。我爸爸跟村里 30 个 14-50 岁的男人一起,被分给一个西班牙殖民者 Pedro。Pedro 把他们带到岛中部山里的河边。\n\n' +
        'Hispaniola 的金子不是矿洞里挖的,是 placer 砂金:山上下来的河水把金子的小颗粒带下来,沉在河床的沙子里。Taíno 男人弯腰站在河里,一天 12 小时把河沙捞起来,用陶碗筛。一天两顿,半碗 yuca 粉糊。\n\n' +
        '我爸爸出去之前是 38 岁、强壮的渔民。3 个月后他回来过一次,瘦了一半,咳嗽。Pedro 让他「休息」3 天,然后把他带回河里。\n\n' +
        '他第二次出去 4 个月没回来。一个跟他一起去的村里男人 Boriquén 10 月回来告诉我妈妈:我爸爸 7 月已经死了——「在河里咳血,倒下去,没起来」。\n\n' +
        '我妈妈听完没哭。她把头靠在 bohío 的木门框上,靠了很久。\n\n' +
        '我 13 岁。我把妈妈织一半的腰带捡起来继续织。我手里抖。\n\n' +
        '我爸爸没有墓。河里的水把他冲到下游。',
      en:
        '1496. I am thirteen.\n\n' +
        'Repartimiento — the Spanish system of "distributing" indigenous people to settlers. Hojeda\'s men came back, this time with a list of names. My father, with thirty other men aged fourteen to fifty from our village, was assigned to a Spanish settler named Pedro. Pedro took them to a river in the mountains in the middle of the island.\n\n' +
        'The gold of Hispaniola is not from mines — it is placer gold: water from the mountains carries grains of gold down, settling in the riverbed sand. Taíno men stood bent over in the river twelve hours a day, lifting buckets of sand, sifting through it in a clay bowl. Two meals a day — half a bowl of yuca paste.\n\n' +
        'Before he went, my father was thirty-eight, a strong fisherman. After three months he came back once — half his body weight gone, coughing. Pedro let him "rest" three days, then took him back.\n\n' +
        'The second time he went out he did not come back for four months. A man from our village named Boriquén came back in October and told my mother: my father had died in July. "He was coughing blood in the river. He fell. He did not get up."\n\n' +
        'My mother heard this — she did not cry. She rested her head against the wooden frame of the bohío for a long time.\n\n' +
        'I was thirteen. I picked up the half-finished belt my mother had been weaving and continued. My hands were shaking.\n\n' +
        'My father has no grave. The river carried him downstream.',
    },
    deliverGoal: {
      cn: '1496 爸爸通过 repartimiento 被分给 Pedro,在中部山里 placer 砂金河里弯腰 12 小时一天筛金,半碗 yuca 糊一顿。3 个月瘦一半,4 个月后死。我妈妈听完没哭——靠在门框很久。我 13 岁继续织妈妈的腰带,手在抖。',
      en: 'In 1496 my father was distributed (repartimiento) to Pedro, sent to a river in the mountains, bent over twelve hours a day sifting placer gold, half a bowl of yuca a meal. Three months — half his body weight gone. Four months later he was dead. My mother did not cry — rested her head on the doorframe a long time. I, thirteen, kept weaving my mother\'s belt with shaking hands.',
    },
    engagementHook: {
      cn: '38 岁渔民爸爸通过 repartimiento 分给 Pedro——河里筛 placer 砂金 12 小时一天,半碗 yuca 糊一顿——4 个月后死。我接过妈妈织一半的腰带继续织。下一节:1497 妈妈。',
      en: 'Father, thirty-eight, fisherman, distributed (repartimiento) to Pedro — twelve hours a day sifting placer gold, half a bowl of yuca a meal — dead in four months. I took up the belt my mother had been weaving and kept going. Next: 1497, my mother.',
    },
    expectedLength: '500-560 字 CN (staging — 预期砍到 320-380)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N5 — STORY: 1497 妈妈 careful scaffold (强奸 + 病死)
  // ═══════════════════════════════════════════════════
  {
    id: 5,
    phase: 'story',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 1495-1500 妈妈被强奸 + 欧洲疫病(天花要到 1518 才到 Hispaniola) + 7 thgrader careful scaffold',
    content: {
      cn:
        '1497 年。我 14 岁。\n\n' +
        '这一节比上一节更难。我会慢慢讲。\n\n' +
        '一个月夜,三个西班牙士兵进我们村,到我们家——我跟妈妈在 bohío 里。士兵闯进来。妈妈想把他们推开,但她比他们瘦小很多。他们把我推到墙边让我看。\n\n' +
        '——我不能写下接下来发生什么。我只告诉你:那一夜结束的时候,妈妈坐在地上头靠着墙。她叫我过去。她的手摸我的脸,她的眼睛看我——但她没说话。\n\n' +
        '一个月后,妈妈开始发烧。皮肤上长红色小点,后来变成水泡。她吐。她躺在 bohío 地上,一直叫我去远一点。这是一种从西班牙人身上来、Taíno 之前从来没有过的病。我们没有抗体——一个村子第一次有这种病时常 80% 的人死。\n\n' +
        '3 个月后,1497 年春末,妈妈死。\n\n' +
        '是那个病杀她,还是那个月夜杀她?——我不知道。我那时候 14 岁。她最后看了我一眼,但她没说话。\n\n' +
        '妈妈死的那一天我把她织一半的、传 8 代人的几何花纹腰带卷起来,藏在 bohío 后面的一棵 yuca 树下。\n\n' +
        '停一下。这一节读起来,你什么感觉? 放下手机/键盘 30 秒。让 14 岁的我跟你坐一会儿。',
      en:
        '1497. I am fourteen.\n\n' +
        'This section is harder than the last. I will go slowly.\n\n' +
        'A moonlit night. Three Spanish soldiers came into our village, into our house. My mother and I were in the bohío. They forced their way in. My mother tried to push them away — she was much smaller. They held me against the wall and made me watch.\n\n' +
        'I cannot write down what happened next. I will only tell you: when that night ended, my mother sat on the ground, head against the wall. She called me over. Her hand touched my face, her eyes looked at me — and she did not speak.\n\n' +
        'A month later she began to run a fever. Small red spots appeared, then blisters. She vomited. She lay on the floor and kept telling me to go further away. This was a sickness the Spaniards brought, one no Taíno had ever had before. We had no immunity — when such a sickness first reached a village, it was common for eighty in a hundred to die.\n\n' +
        'Three months later, late spring 1497, my mother was dead.\n\n' +
        'Was it the sickness that killed her, or that moonlit night? I do not know. I was fourteen. Her eyes looked at me at the end — she did not speak.\n\n' +
        'The day my mother died I took the half-woven belt — eight-generation pattern — rolled it up, and hid it under a yuca tree behind the bohío.\n\n' +
        'How does this section feel to read? Put down the phone or keyboard for thirty seconds. Let fourteen-year-old me sit with you a moment.',
    },
    deliverGoal: {
      cn: '1497 一个月夜士兵闯入。一个月后她发烧 + 长红疹 + 水泡——一种欧洲带来、Taíno 之前没接触过、没有免疫力的病——3 个月后死。她最后看了我一眼,没说话。妈妈死那天我把她织一半的 8 代腰带藏在 yuca 树下。',
      en: 'In 1497 a moonlit night — soldiers forced their way in. A month later she began to fever — red spots, then blisters — a European sickness the Taíno had never met and had no immunity to — three months later she was dead. Her eyes looked at me at the end. She did not speak. The day she died I rolled up her half-woven eight-generation belt and hid it under a yuca tree.',
    },
    engagementHook: {
      cn: '这一节读起来你什么感觉?停一下,放下 30 秒。14 岁的我把妈妈织一半的腰带藏在 yuca 树下。下一节:1498 叔叔。',
      en: 'How does this section feel? Put it down for thirty seconds. Fourteen-year-old me rolled up my mother\'s half-finished belt and hid it under a yuca tree. Next: 1498, my uncle.',
    },
    expectedLength: '380-440 字 CN (砍到 careful scaffold + 反思停顿)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N6 — STORY: 1498 叔叔 — 砍手 (黄金税不交)
  // ═══════════════════════════════════════════════════
  {
    id: 6,
    phase: 'story',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 砍手政策 (line 318-319) + 第 6.3 节 micro-detail',
    content: {
      cn:
        '1498 年。我 15 岁。\n\n' +
        '我叔叔 40 岁,爸爸的弟弟。爸爸死后他搬来跟我跟哥哥住。\n\n' +
        '叔叔每 3 个月要交一定量的黄金,但 Xaragua 西部没有 placer 砂金河,他交不出来。\n\n' +
        '第一个 3 个月,他用织布跟玉米换别村人筛出来的金子凑足。第二个 3 个月,他交了一半。第三个 3 个月,1498 年夏,他没东西交。\n\n' +
        'Hojeda 队又来。他们带名单,叔叔的名字在「未交」那一栏。他们把叔叔拉到村中间的空地上,一个士兵从腰里抽出剑,叔叔的两个手腕被一个一个砍下来。\n\n' +
        '我 15 岁站在 bohío 门口。我哥哥拉着我不让我看。\n\n' +
        '砍手不是杀人,砍完之后他们就走了。但大多数 Taíno 男人,叔叔这样的 40 岁男人,3 天之内就死了——失血、感染、没有抗生素、没有缝合、心理崩溃。\n\n' +
        '叔叔在 bohío 里躺了 4 天。我哥哥用 yuca 叶子包他的两只手腕。我唱 areíto 给他听——一首妈妈教过我的关于 Yúcahu (我们的造物神) 的歌。第 4 天叔叔死了。\n\n' +
        '——这就是 Columbus 1495 年「14 岁以上每 3 个月不交砍手」政策的具体身体: 一个 40 岁渔民的两只手腕。',
      en:
        '1498. I am fifteen.\n\n' +
        'My uncle, forty, my father\'s younger brother. After my father died he moved in with my brother and me.\n\n' +
        'My uncle had to deliver gold every three months. But western Xaragua had no placer gold rivers like the eastern mountains. He could not produce it.\n\n' +
        'First quarter, he traded woven cloth and corn for a little gold from another village and made the count. Second quarter, that village was running out too — he turned in half. Third quarter, summer 1498, he had nothing.\n\n' +
        'Hojeda\'s men came again. They had the list; my uncle\'s name was in the column "did not deliver." They dragged him into the open ground in the middle of the village. A soldier drew a sword from his belt. My uncle\'s two wrists were cut off, one and then the other.\n\n' +
        'I was fifteen, at the doorway of the bohío. My brother held me back.\n\n' +
        'Cutting off the hands is not the same as killing. The soldiers left after. But most Taíno men, forty-year-olds like my uncle, were dead inside three days — blood loss, infection, no antibiotics, no stitches, the spirit broken.\n\n' +
        'My uncle lay in the bohío for four days. My brother wrapped his wrists in yuca leaves. I sang an areíto for him — a song my mother had taught me, about Yúcahu, our creator god. On the fourth day he died.\n\n' +
        'This is what Columbus\'s 1495 policy — "fourteen and above, gold every three months, hand cut off if not" — looked like in one body: the two wrists of a forty-year-old fisherman.',
    },
    deliverGoal: {
      cn: '1498 叔叔交不出黄金——西班牙士兵把他两只手腕砍下来。他在 bohío 里躺 4 天死。我哥哥用 yuca 叶子包伤口,我唱 areíto (关于 Yúcahu 造物神的歌) 给他听。这是 Columbus 1495「14 岁以上每 3 个月不交砍手」政策的具体身体。',
      en: 'In 1498 my uncle could not produce the gold — soldiers cut off both his wrists. He lay in the bohío four days, then died. My brother wrapped the wrists in yuca leaves; I sang an areíto (the song of Yúcahu, our creator god) over him. This is the body the 1495 Columbus policy — "fourteen and above, gold every three months, hand cut off if not" — looked like.',
    },
    engagementHook: {
      cn: '叔叔交不出黄金——两只手腕砍下来——4 天后死。我唱 areíto 给他听。Columbus 1495 砍手政策的具体身体——一个 40 岁渔民的两只手腕。下一节:1499 哥哥。',
      en: 'My uncle could not produce the gold — both wrists cut off — dead in four days. I sang an areíto over him. Columbus\'s 1495 hand-cutting policy in one body — the two wrists of a forty-year-old fisherman. Next: 1499, my brother.',
    },
    expectedLength: '560-640 字 CN (staging — 预期砍到 360-420)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N7 — STORY: 1499 哥哥 — 欧洲疫病(天花要到 1518 才到 Hispaniola)
  // ═══════════════════════════════════════════════════
  {
    id: 7,
    phase: 'story',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 欧洲疫病 1499 (天花要到 1518 才到 Hispaniola) + Taíno 没有免疫力 + 80% 死亡率',
    content: {
      cn:
        '1499 年。我 16 岁。\n\n' +
        '只剩下我跟哥哥,哥哥 19 岁。1497 杀死妈妈那一波病传遍 Hispaniola,1498-1499 又来第二波。1499 年春,哥哥发烧、红疹、水泡。\n\n' +
        '我做妈妈做过的同样的事——给他煮 yuca 粉糊,把他的额头用湿布擦,让他喝水。我自己没病。后来人类才知道有的人天生对某些病毒抵抗强一些。那时候我以为我活下来是 Yúcahu 决定的。\n\n' +
        '哥哥躺了 5 个星期。第 5 个星期他清醒过一次,叫我:\n\n' +
        '「Anacaona,不要死。活下去。唱 areíto,把我们家所有人的名字唱进去。」\n\n' +
        '3 天后哥哥死了。\n\n' +
        '我 16 岁。爸爸 1496 河里、妈妈 1497 疫病、叔叔 1498 砍手、哥哥 1499 疫病——4 年 4 人 4 种死法。\n\n' +
        '我把哥哥埋在 yuca 树旁,妈妈织一半的腰带也埋在那里。我开始按哥哥说的把 4 个名字编进 areíto,边唱边织布。我那时候不知道——再过 5 年,会变成 6 个人。',
      en:
        '1499. I am sixteen.\n\n' +
        'Only my brother and I are left. He is nineteen. The wave of sickness that killed my mother in 1497 had spread across Hispaniola; a second wave came in 1498-1499. Spring 1499 — my brother began to fever. Red spots. Blisters.\n\n' +
        'I did the same things my mother had done — cooked yuca paste, wiped his forehead with a wet cloth, made him drink water. I did not get sick myself. Centuries later humans would learn some people are born more resistant. Back then I thought Yúcahu had decided I would live.\n\n' +
        'My brother lay sick five weeks. In the fifth week he had one clear hour and called me:\n\n' +
        '"Anacaona. Do not die. Live. Sing the areíto — put all the names of our family — into it."\n\n' +
        'Three days later my brother was dead.\n\n' +
        'I was sixteen. My family — father, 1496, the river. Mother, 1497, the sickness. Uncle, 1498, the cut hands. Brother, 1499, the sickness. Four years. Four people. Four different deaths.\n\n' +
        'I buried my brother behind the bohío, next to the yuca tree where I had buried the half-woven belt. I began to weave the four names of my family into an areíto. I sang as I wove. I did not know then — five years later, it would hold six.',
    },
    deliverGoal: {
      cn: '1499 哥哥 19 岁死于那种欧洲带来的疫病。临死他说: 「不要死,活下去——唱 areíto——把我们家所有人的名字唱进去。」我 16 岁。爸爸/妈妈/叔叔/哥哥——4 年 4 人 4 种死法。我把哥哥埋在 yuca 树旁妈妈腰带旁。开始把 4 个名字编进 areíto。',
      en: 'In 1499 my brother, nineteen, died of the same European sickness. His last clear words: "Do not die. Live. Sing the areíto. Put our family\'s names into it." I am sixteen. Father, mother, uncle, brother — four years, four people, four different deaths. I buried him by the yuca tree next to my mother\'s belt. I began weaving four names into an areíto.',
    },
    engagementHook: {
      cn: '哥哥临死说: 不要死——唱 areíto——把我们的名字唱进去。我 16 岁——4 年 4 人 4 种死法。下一节:13 岁的我变成妈妈那一年。',
      en: 'My brother\'s last words: "Do not die. Sing the areíto. Put our names in it." I am sixteen — four years, four people, four deaths. Next section: the year I became a mother.',
    },
    expectedLength: '480-560 字 CN (staging — 预期砍到 320-380)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N8 — STORY: 1500-1502 我自己 careful scaffold (17 岁 → 强奸 → 怀孕)
  // ═══════════════════════════════════════════════════
  {
    id: 8,
    phase: 'story',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 1500 自己被强奸 + 15 生 mestizo 女儿 + 7thgrader 最 hardest moment scaffold',
    content: {
      cn:
        '1500 年。我 17 岁。\n\n' +
        '这一节是这一遍最难的一节。我写得慢。你读得慢。\n\n' +
        '哥哥死后,村里没什么人了。5 年里 Xaragua 西部很多村空了一大半。我一个人住在 bohío 里。\n\n' +
        '一个白天,一个 encomendero (拥有 encomienda 的西班牙殖民者) 来到我们村。Encomienda 是西班牙国王把一片地的「原住民」分给一个殖民者管的制度,名义上传教 + 保护,实际上奴役。这个 encomendero 是 Hojeda 的朋友。他从 bohío 把我拉出来。\n\n' +
        '——我不写下接下来发生什么。\n\n' +
        '9 个月后,1500 年的冬天,我有一个女儿。我那时候 17 岁。\n\n' +
        '——\n\n' +
        '你想一下:17 岁的孩子有 1 岁的女儿——这是什么样子。你身边的高三学姐,再过几年。\n\n' +
        '我哪一刻停止做小孩? 1495 年第一次见铁甲? 1496 年妈妈死那一夜? 1497 年妈妈病死、我 14 岁继续织腰带那个下午? 1498 年砍手那个早上? 1500 年 encomendero 把我从 bohío 拉出去那一刻? 还是 1500 年冬天我抱着女儿那个夜晚?\n\n' +
        '没有一个清楚的「停止做小孩」那一天。但 1500 年冬天我抱着女儿,我已经不是 12 岁的我了。\n\n' +
        '我给女儿起的名字按 areíto 的传统,叫 Tureyra,意思是「天空给的」。\n\n' +
        '读到这里——放下手机/键盘 30 秒。',
      en:
        '1500. I am seventeen.\n\n' +
        'This is the hardest section in this playthrough. I write it slowly. You read it slowly.\n\n' +
        'After my brother died, the village was nearly empty. In five years half of western Xaragua was gone. I lived alone in the bohío.\n\n' +
        'One day, an encomendero (a Spanish settler holding an encomienda) came. Encomienda was the system in which the Spanish king assigned indigenous people of an area to one settler — officially religious teaching and protection, in practice enslavement. This encomendero was a friend of Hojeda\'s. He pulled me out of the bohío.\n\n' +
        'I do not write down what happened next.\n\n' +
        'Nine months later, the winter of 1500, I had a daughter. I was seventeen.\n\n' +
        '—\n\n' +
        'A seventeen-year-old with a one-year-old daughter. Picture that. A high-school senior near you, a few more years. Or your seventh-grade self plus four years.\n\n' +
        'When did I stop being a child? 1495, the first time I saw armor? The moonlit night of 1497? The morning of 1498, the hands cut off? The day in 1500 the encomendero pulled me out of the bohío? The winter night in 1500 when I held my newborn daughter?\n\n' +
        'There is no single day. But the winter of 1500, holding my daughter, I was no longer the twelve-year-old who had stood on the beach.\n\n' +
        'I gave my daughter a name in the areíto tradition — Tureyra. It means "given by the sky."\n\n' +
        'Put down the phone or keyboard for thirty seconds before you read on.',
    },
    deliverGoal: {
      cn: '1500 一个 encomendero 把我从 bohío 拉出去。9 个月后冬天我有了女儿——我 17 岁。我女儿叫 Tureyra (areíto 传统取名,「天空给的」)。reflection: 17 岁的孩子有 1 岁女儿是什么样子? 我哪一刻停止做小孩?——1495? 1496? 1497? 1498? 1500? 没有一个清楚的那一天。',
      en: 'In 1500 an encomendero pulled me out of the bohío. Nine months later — winter 1500 — I had a daughter. I was seventeen. Her name was Tureyra ("given by the sky," in the areíto tradition). Reflection: a seventeen-year-old with a one-year-old. Picture it. When did I stop being a child? 1495? 1496? 1497? 1498? 1500? There is no one day.',
    },
    engagementHook: {
      cn: '这一节最难。17 岁有 1 岁女儿——想想你身边的高三学姐。我哪一刻停止做小孩——没有一个清楚的那一天。女儿叫 Tureyra (天空给的)。下一节:1502 las Casas 来。',
      en: 'The hardest section. A seventeen-year-old with a one-year-old daughter. Picture a high-school senior near you. When did I stop being a child? There is no single day. My daughter\'s name is Tureyra (given by the sky). Next: 1502, las Casas arrives.',
    },
    expectedLength: '480-540 字 CN (hardest moment careful scaffold + 反思停顿)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N9 — STORY: 1502 女儿死 ⭐ las Casas 17 岁刚到 Hispaniola (cross-lens 时空 hook)
  // ═══════════════════════════════════════════════════
  {
    id: 9,
    phase: 'story',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 Anacaona Jr. 1502 + las Casas 1502 Hispaniola 物理重叠 (Sarah audit line 200-203)',
    content: {
      cn:
        '1502 年。我 19 岁。\n\n' +
        'Tureyra 1 岁多,开始会走路。夏天她发烧、红疹、水泡——杀死妈妈跟哥哥的那种病,又来一波。我做我妈妈做过的、我哥哥做过的同样的事。但她那么小——5 天后她死。\n\n' +
        '我把 Tureyra 埋在 bohío 后面 yuca 树下——爸爸的腰带、妈妈织一半的腰带、哥哥旁边。我们家在那棵树下集起来了。\n\n' +
        '——\n\n' +
        '同一年。1502 年。9 月。\n\n' +
        '岛北岸的 La Isabela 港,一艘西班牙船到。船上有一个 18 岁的西班牙年轻人,叫 Bartolomé de las Casas。他爸爸 Pedro 是 Columbus 朋友,1493 跟 Columbus 第二次航行来过岛。Bartolomé 这一次自己来当殖民者,自己也有 encomienda,自己也奴役 Taíno。\n\n' +
        '他下船那一天,我刚埋完 Tureyra。我们没见过面——岛 200 公里——但同一座岛、同一个月、同一片天空。\n\n' +
        '12 年后,1514,Bartolomé 30 岁会读到一段经文,突然崩溃,释放奴隶,做修士,用余生 50 年写书反对殖民暴力。1542 年他写《Brief Account of the Destruction of the Indies》,写下 Anacaona 王后的名字。\n\n' +
        '但他写不下我的名字——我是合成人物,他没见过我。我也没见过他——我 1504 年饿死。1502 年我们曾经同时在这座岛上。',
      en:
        '1502. I am nineteen.\n\n' +
        'Tureyra is just over a year old, beginning to walk. Summer — fever, red spots, blisters. Another wave of the sickness that had killed my mother and my brother. I did everything my mother had done for me, everything I had done for my brother. But she was so small — five days later she was dead.\n\n' +
        'I buried Tureyra behind the bohío under the yuca tree — beside my father, my mother\'s belt, my brother. Our family had gathered there.\n\n' +
        '—\n\n' +
        'The same year. 1502. September.\n\n' +
        'On the north coast of the island — the port of La Isabela — a Spanish ship landed. On it was an eighteen-year-old Spaniard, Bartolomé de las Casas. His father Pedro had been a friend of Columbus, came to Hispaniola in 1493 with the second voyage. Bartolomé this time came to be a settler himself, with his own encomienda, enslaving Taíno.\n\n' +
        'The day he stepped off the ship I had just finished burying Tureyra. We never met — the island is two hundred kilometers across — but same island, same month, same sky.\n\n' +
        'Twelve years later, in 1514, Bartolomé at thirty would read a passage of scripture, break down, free his slaves, become a friar, and spend the next fifty years writing against the conquest. In 1542 he wrote the Brief Account of the Destruction of the Indies, and he wrote down the name of Queen Anacaona.\n\n' +
        'But he could not write down my name — I am a composite, he never met me. I never met him either — I starved in 1504. In 1502 we were on this island at the same time.',
    },
    deliverGoal: {
      cn: '1502 夏 Tureyra 1 岁多得那种欧洲带来的疫病 5 天死,埋在 yuca 树下家里 4 人旁边。同年 9 月,岛北岸 La Isabela 港 18 岁 Bartolomé de las Casas 下船(他爸爸 Pedro 是 Columbus 朋友 + 1493 来过岛),他来当殖民者 + 自己有 encomienda。我跟他没见过面,岛 200 公里,但 1502 同一个月同一座岛同一片天空。12 年后 1514 他会 conversion,1542 写下 Anacaona 王后的名字——但写不下我。',
      en: 'Summer 1502 — Tureyra, just over a year old, the same European sickness, dead in five days. Buried under the yuca tree with the other four. The same year, September — eighteen-year-old Bartolomé de las Casas (his father Pedro was Columbus\'s friend, came to the island in 1493) steps off a ship at La Isabela on the eastern side, to be a settler with his own encomienda. We never met — the island is two hundred kilometers across — but 1502, same month, same island, same sky. Twelve years later, in 1514, he will convert. In 1542 he will write down the name of Queen Anacaona. He cannot write down mine.',
    },
    engagementHook: {
      cn: 'Tureyra 1 岁得疫病 5 天死——埋在家里 4 人旁。同月——岛另一边 18 岁 las Casas 下船当殖民者(他后来 1542 写下我阿姨 Anacaona 王后的名字——但写不下我)。我们 1502 同一座岛 200 公里相隔。下一节:1503 夏。',
      en: 'Tureyra, the same sickness, dead in five days, buried with the other four. The same month — eighteen-year-old las Casas, on the other side of the island, steps off as a settler (he will, in 1542, write down the name of my aunt Queen Anacaona — but never mine). 1502, same island, two hundred kilometers apart. Next: summer 1503.',
    },
    expectedLength: '780-860 字 CN ⭐ las Casas 1502 同岛 cross-lens hook (staging — 预期砍到 500-560)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N10 — STORY: 1503 夏 Xaragua 屠杀 — cacique 被烧 + Anacaona 王后被俘绞死 (真人)
  // ═══════════════════════════════════════════════════
  {
    id: 10,
    phase: 'story',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 Xaragua 1503 夏屠杀 (cacique 烧大厅 + Anacaona 被俘押 Santo Domingo 绞死) + Ovando 总督',
    content: {
      cn:
        '1503 年夏天。我 20 岁。\n\n' +
        '新总督 Nicolás de Ovando(1502 到任)比 Hojeda 更冷。他给我阿姨 Anacaona 王后送信:他要来 Xaragua,跟全岛西部几十个 cacique 开「和平会议」。阿姨 50 岁,是岛上最大酋邦的 cacique + 最有名的 areíto 诗人,她相信会议可以谈。\n\n' +
        '我那一天没去。前一晚我做梦,梦到爸爸、妈妈、叔叔、哥哥跟 Tureyra 站在 yuca 树下,5 个一起对我摇头。我醒来跟阿姨说「我不去」,她摸我的头说「Anacaona,你不一定要去」。她去了。我拿着妈妈织一半的腰带往山上走。\n\n' +
        '——\n\n' +
        '下午,几十个 cacique + Anacaona 王后聚在 Xaragua 一个大 bohío 里。Ovando 给一个手势——士兵把那些 cacique 围进大 bohío,放火烧。一个都没出来。但我阿姨没死在火里。士兵把她单独拖出来,绑上,押走。\n\n' +
        '他们把她押到岛东边的 Santo Domingo(西班牙人新建的首府)。关了大约 3 个月,开了一场西班牙人的「审判」,定她「谋反」。然后,把她绞死(用绳子吊死)。她 50 岁。\n\n' +
        '后来有人说,我阿姨被押走的路上一直在唱 areíto——她自己 30 年前写的一首歌,讲 Xaragua 大地怎么从大海里升起来。\n\n' +
        '20 岁的我站在山上的树后面。我看到 Xaragua 那边的黑烟柱直直升到天上,白色的云被切开。我那时候还不知道阿姨没死在火里——是几个月后被绞死的。\n\n' +
        '那一晚我在山上唱 areíto,把家里 4 个 + Tureyra + 阿姨 = 6 个名字编进去。哥哥 1499 年说我应该把家里所有人的名字都唱进去——他那时候不知道,「家里所有人」会变成 6 个人。',
      en:
        'Summer 1503. I am twenty.\n\n' +
        'The new Spanish governor, Nicolás de Ovando (appointed 1502), was colder than Hojeda. He sent word to my aunt, Queen Anacaona: he was coming to Xaragua to hold a "peace meeting" with the dozens of caciques of the western part of the island. My aunt — fifty, the cacique of the largest chiefdom and the most famous areíto poet on Hispaniola — believed a peace meeting could be talked through.\n\n' +
        'I did not go. The night before, I dreamed — my father, my mother, my uncle, my brother, and Tureyra stood under the yuca tree, all five of them shaking their heads at me. I woke and told my aunt, "I will not go." She put her hand on my head and said, "Anacaona, you do not have to go." She went. I took my mother\'s half-woven belt and walked up the mountain.\n\n' +
        '—\n\n' +
        'That afternoon, dozens of caciques and Queen Anacaona gathered inside one great bohío in Xaragua. Ovando gave a hand signal — his soldiers herded the caciques into the great bohío and set it on fire. Not one came out. But my aunt did not die in the fire. The soldiers dragged her out alone, bound her, and took her away.\n\n' +
        'They carried her east, to Santo Domingo, the new capital the Spanish had built. They held her about three months, staged a Spanish "trial," and convicted her of "rebellion." Then they hanged her — killed her with a rope around the neck. She was fifty.\n\n' +
        'Those who later spoke of it said my aunt sang an areíto the whole way as they took her — a song she had composed thirty years before, about how the land of Xaragua had risen from the sea.\n\n' +
        'I, twenty, stood behind a tree on the mountain. I saw the smoke — a black column rising straight up over Xaragua, cutting the white clouds open. I did not yet know that my aunt had not died in the fire — that she would be hanged months later.\n\n' +
        'That night, on the mountain, I sang an areíto. I wove the names — my family\'s four, Tureyra, my aunt — six names — into the song. My brother had said in 1499 I should put every name in our family into the areíto. He had not known "every name in our family" would become six.',
    },
    deliverGoal: {
      cn: '1503 年夏 总督 Ovando 召集西部几十个 cacique 在 Xaragua 大 bohío 开「和平会议」,下手势把 cacique 围进大 bohío 烧死,一个没出来。但我阿姨 Anacaona 王后(50 岁,Xaragua 最有名 areíto 诗人)没死在火里——她被单独拖出、押到东边 Santo Domingo,关约 3 个月、受「审判」后被绞死。我前一晚做梦看到死去 5 人摇头,没去。我 20 岁在山上看烟柱升起。那夜我把 6 个名字(家里 4 + Tureyra + 阿姨)编进 areíto。',
      en: 'Summer 1503 — Governor Ovando called dozens of western caciques to a "peace meeting" in a great bohío in Xaragua, gave a hand signal, and his soldiers herded the caciques into the bohío and burned it. Not one came out. But my aunt Queen Anacaona (fifty, the most famous areíto poet on the island) did not die in the fire — she was dragged out alone, carried east to Santo Domingo, held about three months, tried, and hanged. The night before I had dreamed my five dead family members shaking their heads — I did not go — at twenty I watched the column of smoke rise from the mountain. That night I wove six names — the four of my family, Tureyra, and my aunt — into an areíto.',
    },
    engagementHook: {
      cn: '1503 年夏 Ovando 总督把 Xaragua 几十个 cacique 烧死在大 bohío 里——但我阿姨 Anacaona 王后被单独押走,几个月后在 Santo Domingo 被绞死。我前一晚做梦没去。20 岁山上看黑烟柱升起。那夜把 6 个名字编进 areíto。下一节:1504 山上。',
      en: 'Summer 1503 — Governor Ovando burned dozens of caciques in the great bohío in Xaragua — but my aunt Queen Anacaona was taken away alone and hanged at Santo Domingo months later. I had dreamed the night before and did not go. At twenty, on the mountain, I watched the column of smoke rise. That night I put six names into an areíto. Next: 1504, the mountain.',
    },
    expectedLength: '780-870 字 CN (staging — 预期砍到 480-560)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N11 — REFLECTION: 1504 山上饿死 + areíto 最后一句 + 13 岁孩子 reflection
  // ═══════════════════════════════════════════════════
  {
    id: 11,
    phase: 'reflection',
    cosplay: 'Anacaona Jr.',
    narrativeRef: '§3 1504 饿死 + 反思: 21 岁的孩子 / 13 岁的你',
    content: {
      cn:
        '1504 年。我 21 岁。\n\n' +
        '1503 年 11 月之后我一直在山上 Bahoruco 山 (岛西部山地是 cimarrón 逃亡 Taíno 最后的躲处)。山上能找的: yuca 野根, 鸟蛋, 蛇, 偶尔一只鬣蜥。冬天西班牙士兵进山搜,我躲在一个洞,洞里另外 4 个人:3 个孩子加一个老女人。1504 春,3 个孩子先死,然后老女人。我一个人在洞里。\n\n' +
        '1492 年 Hispaniola 估算 30 万到 100 万 Taíno;1502 年只剩 4-6 万 (Cook & Borah 1971);1542 年只剩 200。\n\n' +
        '我饿得肚子已经不疼了,只觉得累。我躺在洞里,眼睛半闭。\n\n' +
        '我知道我快死了。\n\n' +
        '我做最后一件事:我用 Taíno 话慢慢把 areíto 最后一句唱完——把家里 6 个名字唱进去。哥哥 1499 年说「不要死,活下去,把我们家所有人的名字唱进去」。我没活下去——我活到 21 岁。但我把 6 个名字唱进去了:\n\n' +
        '1. 我爸爸 Yaguareix——1496 年河里。\n' +
        '2. 我妈妈 Bayajiba——1497 年疫病(欧洲带来的、我们没有免疫力的病)。\n' +
        '3. 我叔叔 Caguarí——1498 年砍手。\n' +
        '4. 我哥哥 Maboguán——1499 年疫病。\n' +
        '5. 我女儿 Tureyra——1502 年疫病。\n' +
        '6. 我阿姨 Anacaona——1503 年被俘绞死。\n\n' +
        '6 个名字。9 年。\n\n' +
        '现在——我闭眼。\n\n' +
        '——\n\n' +
        '这一节读完,你 13 岁。我 21 岁,也跟 13 岁的你只差 8 年。这 9 年里我经历了 8 年里你身边人完全没经历过的事。\n\n' +
        '停 30 秒。21 岁的我闭眼之前——你想跟我说什么?',
      en:
        '1504. I am twenty-one.\n\n' +
        'Since November 1503 I have been on the mountain — Bahoruco, the last hiding place for the cimarrón (Taíno who fled). On the mountain you can find wild yuca roots, bird eggs, snakes, sometimes an iguana. Winter 1503-1504 — Spanish soldiers came up to search. I hid in a cave with four others, three children and an old woman. Spring 1504 — the three children died first. Then the old woman. I was alone.\n\n' +
        'In 1492 the estimate of Taíno on Hispaniola was 300,000 to 1,000,000. By 1502, only 40-60,000 remained (Cook & Borah, 1971). By 1542, two hundred.\n\n' +
        'I am so hungry my stomach no longer hurts — only tired. Eyes half closed.\n\n' +
        'I know I am about to die. I do one last thing. I sing — slowly, in Taíno — the last line of the areíto I have woven, the six names of my family. In 1499 my brother said: "Do not die. Live. Put every name in our family into the areíto." I did not live. I lived to twenty-one. But I have put the six names in:\n\n' +
        '1. My father Yaguareix — 1496, the river.\n' +
        '2. My mother Bayajiba — 1497, a European sickness we had no immunity to.\n' +
        '3. My uncle Caguarí — 1498, the cut hands.\n' +
        '4. My brother Maboguán — 1499, the same sickness.\n' +
        '5. My daughter Tureyra — 1502, the same sickness.\n' +
        '6. My aunt Anacaona — 1503, captured and hanged.\n\n' +
        'Six names. Nine years.\n\n' +
        'Now — I close my eyes.\n\n' +
        '—\n\n' +
        'You are thirteen. I am twenty-one — only eight years older. In these nine years I went through what no one around you, in the past eight years, has been through.\n\n' +
        'Pause for thirty seconds. Before twenty-one-year-old me closes her eyes — what do you want to say to her?',
    },
    deliverGoal: {
      cn: '1504 我 21 岁山上 Bahoruco 洞里饿死。我用 Taíno 话唱完 areíto 最后一句——把家里 6 个名字唱进去: 爸爸 Yaguareix(1496 河)、妈妈 Bayajiba(1497 疫病)、叔叔 Caguarí(1498 砍手)、哥哥 Maboguán(1499 疫病)、女儿 Tureyra(1502 疫病)、阿姨 Anacaona(1503 被俘绞死)。9 年 6 个人。reflection: 13 岁的你——21 岁的我闭眼之前——你想跟我说什么?',
      en: '1504 — twenty-one — starving in a cave in Bahoruco. In Taíno I sing the last line of the areíto I have woven, the six names of my family: my father Yaguareix (1496, river), my mother Bayajiba (1497, a European sickness), my uncle Caguarí (1498, hands), my brother Maboguán (1499, the sickness), my daughter Tureyra (1502, the sickness), my aunt Anacaona (1503, captured and hanged). Nine years, six people. Reflection: you, thirteen — before twenty-one-year-old me closes her eyes, what do you want to say to her?',
    },
    engagementHook: {
      cn: '21 岁山洞里饿死前我唱完 areíto——6 个名字,9 年。13 岁的你,要是能跟我说一句话——先在心里想想你想说什么,下一节我会正式问你。',
      en: 'Twenty-one, starving in the cave, I finished the areíto — six names, nine years. You, thirteen — if you could say one thing to me, hold it in your heart now; I will ask you for real in the next section.',
    },
    expectedLength: '780-870 字 CN + 真问题 (staging — 预期砍到 500-580)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N12 — META: closing — 她不是数字, 是有名字 + 有诗 + 有家人 + 有具体死法的人
  // ═══════════════════════════════════════════════════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§3 教学要点 line 1078-1082 + 第 6 节 micro-detail echo + Atlantic slave trade 起点',
    content: {
      cn:
        '你刚从小 Anacaona 内部走完 1495-1504 这 9 年。\n\n' +
        '一个 12 岁的 Taíno 女孩。一个合成人物,不是真人。但她代表的是真人。\n\n' +
        '1492 年 Hispaniola 估算 30 万到 100 万 Taíno。1542 年只剩 200。\n\n' +
        '抽象数字记不住。能记住的是什么?\n\n' +
        '是 1498 年那个早上叔叔的两只手腕——Columbus 1495 政策的具体身体?\n\n' +
        '是 1499 年哥哥临死说「把名字唱进去」?\n\n' +
        '是 1503 年夏阿姨被押往 Santo Domingo 的路上、唱着 30 年前自己写的 areíto——后来在那里被绞死?\n\n' +
        '是 1504 年山洞里 21 岁我闭眼前唱完最后一句——6 个名字?\n\n' +
        '说一句话告诉我哪一刻让你停下来。\n\n' +
        '——\n\n' +
        '我有名字: Anacaona。我有家人 6 个名字。我有 areíto 写下他们的死。我有一种死法——21 岁山洞里饿死。\n\n' +
        '我不是「灭族 1 亿原住民」里的「1」。我是 Anacaona——黄金的花。\n\n' +
        '加勒比海是 Atlantic slave trade 的起点(Columbus 1495 第一批 500+ Taíno 奴隶送回西班牙)。也是西班牙第一个 plantation system 的起点。500 年灭族,第一波是我和我家。\n\n' +
        '——但我有名字。\n\n' +
        '——\n\n' +
        '这个 Topic 还有另外两个视角:Columbus(1492 出航的人)和 las Casas(1502 下船的、1514 conversion 的、1542 写下我阿姨名字的修士)。做完那两个,你会发现一个 micro-detail——关于一封 1493 年的信。我不告诉你是什么。让你自己 connect。\n\n' +
        '准备好了吗?记忆考核:拼写、定义、应用题——把今天演过的变成你真正记得的。',
      en:
        'You have just walked through 1495-1504, those nine years, from inside Little Anacaona.\n\n' +
        'A twelve-year-old Taíno girl. A composite person, not a real one. But what she stands for is real.\n\n' +
        'In 1492, the estimate of Taíno on Hispaniola: three hundred thousand to one million. In 1542, two hundred.\n\n' +
        'Abstract numbers do not hold. What can you remember?\n\n' +
        'Is it the morning of 1498, my uncle\'s two wrists — the body of Columbus\'s 1495 policy?\n\n' +
        'Is it 1499, my brother\'s last words — "put the names in the song"?\n\n' +
        'Is it summer 1503 — my aunt singing the areíto she had composed thirty years before as they carried her off to Santo Domingo, where they hanged her?\n\n' +
        'Is it 1504, the cave, twenty-one-year-old me singing the last line — six names — before I closed my eyes?\n\n' +
        'Tell me in one sentence which moment made you stop.\n\n' +
        '—\n\n' +
        'I have a name: Anacaona. I have a family of six names. I have an areíto that holds their deaths. I have a way of dying — at twenty-one, starving in a cave.\n\n' +
        'I am not the "1" inside "100 million indigenous people erased." I am Anacaona — Golden Flower.\n\n' +
        'The Caribbean is the starting point of the Atlantic slave trade (Columbus shipped the first 500+ Taíno slaves back to Spain in 1495). It is also the starting point of the first Spanish plantation system. Five hundred years of genocide — the first wave was me and my family.\n\n' +
        'But I have a name.\n\n' +
        '—\n\n' +
        'This Topic has two other perspectives: Columbus (the man who sailed in 1492) and las Casas (the man who stepped off the ship in 1502, who in 1514 converted, who in 1542 wrote down my aunt\'s name). If you walk through those two as well, you will find one micro-detail — about a letter from 1493. I will not tell you what it is. You will connect it yourself.\n\n' +
        'Are you ready? The mastery check: spelling, definitions, application questions — turning what you played into what you remember.',
    },
    deliverGoal: {
      cn: '我演了 9 节小 Anacaona——9 年 6 个家人 6 种死法。我有名字 Anacaona(黄金的花)、有 areíto 写下家人的死、有具体死法(21 岁山洞饿死)。加勒比海是大西洋奴隶贸易+第一个 plantation system 的起点—500 年灭族第一波是我跟我家——但我有名字。可以选: (1) 进 mastery 通关 / (2) 换 Columbus(1492 出航人)或 las Casas(1502 下船 + 1514 conversion + 1542 写下阿姨名字)视角——做完那两个会 connect 到一个关于 1493 年信的 micro-detail。',
      en: 'You played nine sections of Little Anacaona — nine years, six family members, six different deaths. I have a name (Anacaona, Golden Flower). I have an areíto that holds my family\'s deaths. I have a way of dying — twenty-one, the cave. The Caribbean is the start of the Atlantic slave trade and the first Spanish plantation system — five hundred years of genocide began here. But I have a name. Choose: (1) mastery check, or (2) the other two lenses — Columbus (the 1492 voyage) and las Casas (the man who stepped off in 1502, converted in 1514, wrote my aunt\'s name in 1542). After both you will connect a micro-detail about a 1493 letter.',
    },
    engagementHook: {
      cn: '走完小 Anacaona 这 9 年——6 个家人,6 种死法,一个有名字、有诗的人。先说说:21 岁的我闭眼之前,你想跟我说什么一句话?再想一步:这一遍哪一刻最让你停下(1495 铁甲? 1498 砍手? 1499 哥哥说唱名字? 1503 阿姨被俘绞死? 1504 山洞 6 个名字?),你身边有没有这种「只被当成数字、却其实有名字」的人,你会怎么记住 TA?',
      en: 'Walk out of Little Anacaona\'s nine years — six family members, six ways of dying, a person with a name and a poem. First tell me: before twenty-one-year-old me closes her eyes, what one thing do you want to say to her? Then one step further — which moment made you stop most (1495 armor? 1498 cut hands? 1499 brother saying sing the names? 1503 aunt captured and hanged? 1504 cave, six names?), and is there someone around you who gets counted as a number but actually has a name? How will you remember them?',
    },
    expectedLength: '1050-1150 字 CN + 真问题 (staging closing — 预期砍到 580-680)',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// 导出 lens (Anacaona Jr. 顶层包装)
// ═══════════════════════════════════════════════════

export var anacaonaJrLens = {
  id: 'anacaona-jr',
  icon: '🌺',
  name: { en: 'Anacaona the Younger', cn: '小安娜卡奥娜' },
  nameCn: '小安娜卡奥娜 (虚构合成 1495-1504 Taíno 女孩)',
  role: {
    cn: 'Hispaniola Xaragua Taíno / 1495-1504 indigenous-witness-victim-with-name (有名字的原住民见证者-受害者) 视角',
    en: 'Hispaniola Xaragua Taíno / 1495-1504 indigenous-witness-victim-with-name lens',
  },
  description: {
    cn: '你是小 Anacaona,一个虚构合成的 12 岁 Taíno 女孩,代表 1492-1542 年加勒比海几十万被殖民 5 年内死光全家、史书没写名字的 Taíno 女孩。你阿姨 Anacaona 王后 (1503 年夏被俘后绞死,真人) 是 Xaragua 酋邦的女王 + 全岛最有名的 areíto 诗人。1495 春你 12 岁第一次见铁甲 + 剑 + 马。9 年里你失去爸爸 (1496 placer 砂金河)、妈妈 (1497 强奸 + 欧洲带来的疫病)、叔叔 (1498 砍手)、哥哥 (1499 疫病)、女儿 (1502 疫病)、阿姨 (1503 被俘绞死)。1504 你 21 岁山洞里饿死前唱完 areíto 6 个名字。你不是数字,是有名字 + 有诗 + 有家人 + 有具体死法的人。',
    en: 'You are Little Anacaona, a fictional composite twelve-year-old Taíno girl who stands for the hundreds of thousands of Caribbean Taíno girls between 1492 and 1542 whose whole families died within five years of conquest, and whose names history did not record. Your aunt Queen Anacaona (captured and hanged in the summer of 1503 — a real person) was queen of the chiefdom of Xaragua and the most famous areíto poet on the island. In spring 1495, at twelve, you saw armor, sword, and horse for the first time. Over the next nine years you lose your father (1496, placer gold river), your mother (1497, rape and a European sickness), your uncle (1498, hands cut off), your brother (1499, the same sickness), your daughter (1502, the same sickness), and your aunt (1503, captured and hanged). In 1504, at twenty-one, you starve in a cave after singing the six names of your family into an areíto. You are not a number. You are a person — with a name, a poem, a family, and a specific way of dying.',
  },
  perspectiveTag: 'indigenous-witness-victim-with-name',
  fictionalDisclaimer: {
    cn: '小 Anacaona (Anacaona Jr.) 是虚构合成人物——史书没写过她。但 Anacaona 王后是真人——1503 年夏 Spanish 总督 Nicolás de Ovando 在 Xaragua 屠杀里把几十个 cacique (酋长) 烧死在大厅里,而把 Anacaona 王后单独俘虏、押到 Santo Domingo,关押受审约 3 个月后绞死。Bartolomé de las Casas 1542 年的《Brief Account of the Destruction of the Indies》写下她的名字。小 Anacaona 代表 1492-1542 年加勒比海几十万跟她一样、被殖民 5 年内死光全家、史书没写名字的 12 岁 Taíno 女孩。这种「真人 + 虚构合成」配对是跟 Reformation 里的 Sister Agnes (1539 修女) 同 pattern——让 receiving-end 的没名字的人有一个能跟你坐下来讲 9 年的 voice。',
    en: 'Little Anacaona (Anacaona Jr.) is a fictional composite — the chronicles never recorded her. Queen Anacaona, however, is a real historical person: in the summer of 1503, in the Xaragua massacre, the Spanish governor Nicolás de Ovando burned dozens of caciques (chiefs) alive in a hall — but Queen Anacaona herself he captured separately, carried to Santo Domingo, imprisoned and tried for about three months, and then hanged. Bartolomé de las Casas wrote her name down in the Brief Account of the Destruction of the Indies in 1542. Little Anacaona stands in for the hundreds of thousands of twelve-year-old Taíno girls in the Caribbean between 1492 and 1542 who, like her, lost their whole families within five years of conquest and whose names history never recorded. This pairing of a real person with a fictional composite uses the same pattern as Sister Agnes (the 1539 nun) in the Reformation Topic — giving a receiving-end nameless person a voice that can sit down with you and tell nine years.',
  },
  storyboard: anacaonaJrStoryboard,
};


// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'columbus':    columbusLens,
  'las-casas':   lasCasasLens,
  'anacaona-jr': anacaonaJrLens,
};

// per Sarah audit + 7thgrader 推荐 — Anacaona Jr. 起手:
// 12 岁同龄锚点 + areíto 文化 carrier + 5 年家族灭族最强情感入口 + N12 双 chain closing
export var defaultLens = 'anacaona-jr';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'age-of-exploration-1492',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  estimatedMinutesPerLens: { 'columbus': 35, 'las-casas': 38, 'anacaona-jr': 32 },
};
