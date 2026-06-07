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
//   待: 7thgrader (小 U) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)
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
    cn: '他是 Genoa 一个织工的儿子，自学 Latin，41 岁带 3 艘船、90 个人横跨大西洋。1492 年 10 月 12 日凌晨 2 点，Pinta 号瞭望员喊出「Tierra」那一刻，他踏上的是 Bahamas 一座小岛，而他至死相信自己到了亚洲。这一遍让你跟一个迷恋 Marco Polo 的水手坐进那条船，看他怎么用一句话「他们温和、能工作、能受洗」把整座岛变成奴役系统的设计图。',
    en: 'He is the son of a Genoa weaver, self-taught in Latin, who at forty-one led three ships and ninety men across the Atlantic. At two in the morning on October 12, 1492, when the lookout on Pinta shouted "Tierra," he stepped onto a small Bahamas island still believing he had reached Asia. This pass sits with him on that deck and watches a Marco Polo reader turn three words, "convertible, workable, enslavable," into the blueprint of a slaving system.',
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
          '我 41 岁,Genoa(意大利北部)织工的儿子。两艘姐妹船 Niña、Pinta,加旗舰 Santa María,从 8 月 3 日离开 Palos 港(西班牙南部)起,已经漂了 70 天。\n\n' +
          '这 70 天里,水手三次准备叛变。10 月 10 日他们摊牌:「再 3 天看不到陆地就回去。」我同意——我心里清楚,10 月 12 日就是最后一天。\n\n' +
          '凌晨 2 点,Pinta 号瞭望台水手 Rodrigo de Triana 看见月光下一线白色海岸。他喊出我等了 7 年的两个字:\n\n' +
          '「Tierra! Tierra!」(陆地!陆地!)\n\n' +
          '这一刻我以为我到了亚洲——以为看见的是 Marco Polo 写的东方边缘,以为天亮就能见到他笔下的「大可汗」(元朝皇帝),收下香料和黄金。\n\n' +
          '我错得离谱。\n\n' +
          '我不知道我看到的是 Bahamas 一座小岛。我不知道接下来 60 年我亲手设计的体系,会让岛上 30 万到 100 万 Taíno 人(起点人口学界有争议)几乎全部死光。我不知道 500 年后美国人会在 10 月 12 日为我立铜像,又把它推倒。\n\n' +
          '接下来 12 节,你跟我走 14 年。从 41 岁以为到了亚洲,到 54 岁戴着错的算计死,至死不肯承认自己看错了什么。',
        en:
          'October 12, 1492. Two in the morning. The Atlantic.\n\n' +
          'I am forty-one, son of a weaver from Genoa, in northern Italy. My two sister ships, Niña and Pinta, and my flagship Santa María have been at sea seventy days, since we left the small port of Palos in southern Spain on August 3.\n\n' +
          'In those seventy days the crew came close to mutiny three times. On October 10 they said it to my face: "three more days, and if we see no land we turn back." I agreed. I knew October 12 would be my last day.\n\n' +
          'At two in the morning, the lookout on Pinta, a sailor named Rodrigo de Triana, saw a thin white shore in the moonlight. He shouted the word I had waited seven years to hear:\n\n' +
          '"Tierra! Tierra!" (Land! Land!)\n\n' +
          'In this moment I think I have reached Asia — the eastern edge of the world Marco Polo wrote about. I expect that by daylight we will meet his Great Khan and accept his spices and gold.\n\n' +
          'I am extravagantly wrong.\n\n' +
          'I do not know that I am looking at a small island in the Bahamas. I do not know that the system I will design with my own hands over the next sixty years will leave the 300,000 to 1,000,000 Taíno of these islands (the starting population is debated) almost completely dead. I do not know that five hundred years from now Americans will raise bronze statues of me on October 12 — and then pull them down.\n\n' +
          'Over the next twelve sections you will walk fourteen years with me. From the forty-one-year-old who thought he had reached Asia, to the fifty-four-year-old who died wearing his own miscalculation, refusing to admit, until the last day, what he had really seen.',
      },
      deliverGoal: {
        cn: '我 41 岁站在 Bahamas 海岸以为到了亚洲——同一双手接下来设计的体系会让 30 万到 100 万 Taíno 死光。',
        en: 'At 41 I stood on a Bahamas shore believing I had reached Asia — the same hands would design a system that left 300,000 to 1,000,000 Taíno dead.',
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
          '我 1451 年生在 Genoa(意大利西北部一个港口共和国)。父亲 Domenico Colombo 是织工,做羊毛布。家里不富,但 Genoa 是地中海航海中心,从小窗外就是港口的桅杆林。\n\n' +
          '14 岁起我跟商船跑,先地中海,后来一路到 Iceland;20 多岁去过西非、Madeira 群岛、Lisbon。我没受过大学教育——拉丁文、数学、天文、地理全是自学。\n\n' +
          '30 岁前后我读到一本改变一生的书:Marco Polo《马可波罗游记》,13 世纪威尼斯商人写的东方游记,讲大可汗的宫殿、东方的黄金香料丝绸。\n\n' +
          '我读到记得每一段,在书页边写了几百条笔记(这本书今天还在 Seville 一个图书馆里,带着我的笔迹)。我心里长出一个想法:从西边走,会不会比走东陆路更快到那个东方?\n\n' +
          '这一刻我做了一个错的算计:我以为地球周长比真的小 25%,亚洲东海岸比真的东得多,估 Canary Islands 到日本 4,200 公里。\n\n' +
          '真实距离是 19,500 公里。我算错了 5 倍。\n\n' +
          '我和 90 个船员带的水和食物只够走我估的距离。要不是一片我不知道的大陆挡在路上,我们会渴死在大西洋中间。\n\n' +
          '我后来成「英雄」靠的不是算对,是算错——而美洲意外挡在那里。这是历史最讽刺的事:我顶着错的地球周长走到了对的地方。',
        en:
          'I was born in 1451 in Genoa, a port republic in northwestern Italy. My father, Domenico Colombo, was a weaver of woolen cloth. The family was not rich, but Genoa was a Mediterranean shipping center, and the harbor masts were always the first thing out the window.\n\n' +
          'From fourteen I sailed on merchant ships — first the Mediterranean, then as far as Iceland; in my twenties, West Africa, the Madeira Islands, Lisbon. I never had a university education. Latin, mathematics, astronomy, geography — I taught myself.\n\n' +
          'Around thirty I read the book that would shape the rest of my life: Marco Polo\'s Travels, written by a thirteenth-century Venetian merchant about the East — the palace of the Great Khan, the gold and spices and silks of the East.\n\n' +
          'I read it until I had every paragraph by heart, and wrote hundreds of notes in the margins (the book still sits in a library in Seville today, with my handwriting on it). An idea grew in me: if I sailed west, could I reach Marco Polo\'s East faster than going overland?\n\n' +
          'This is where I made a wrong calculation. I believed the earth was twenty-five percent smaller than it really is, and Asia\'s eastern coast much farther east than it was. I estimated the Canary Islands to Japan at 4,200 kilometers.\n\n' +
          'The real distance is 19,500 kilometers. I was off by a factor of five.\n\n' +
          'My ninety crewmen and I carried water and food for my distance, not the real one. If a continent I did not know about had not been in the way, we would have died of thirst in the middle of the Atlantic.\n\n' +
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
          '1485 到 1492 这 7 年我处处碰壁:专家都说「这人算错了」,西班牙第一次也拒,英法都没回信。\n\n' +
          '1492 年初命运突然转,原因不在我,在西班牙王室。三件事接连发生:\n\n' +
          '1 月 2 日 Granada 投降——穆斯林在伊比利亚半岛 700 多年的最后一座城陷落,Reconquista(基督徒「收复」运动)终结。打仗这项最大开销没了,王室突然有钱。\n\n' +
          '3 月 31 日颁 Alhambra Decree:全西班牙犹太人 4 个月内要么受洗,要么离开;8 月底前约 10 万 Sephardic 犹太人被驱逐。\n\n' +
          '4 月 17 日 Isabella 在 Santa Fe 军营批准我出航:我做「海洋将军」+ 发现的土地我做总督 + 拿 10% 利润。\n\n' +
          '8 月 3 日早我从 Palos 港离开。那天港里挤满犹太人逃难的船——他们 deadline 7 月 31 日,跟我只隔 2 天。\n\n' +
          '同一笔国库钱付我 3 艘船,同一种「基督教纯洁化」逻辑驱犹、又把传教任务套到我。这三件事不是各自独立,是一个事件链。\n\n' +
          '我没说出口的是:接钱时我清楚自己是在做基督教扩张的延伸,不只是商船探险——我袋里揣着给「印度大可汗」的信,也揣着皈依新民族的任务。\n\n' +
          '同一片海岸,7 月 31 日犹太人离开,8 月 3 日我离开。这就是 1492。',
        en:
          'From 1485 to 1492, for seven years, I looked for royal funding and was turned away everywhere. King João II of Portugal\'s expert committee ran my numbers and told the king, "This man has miscalculated." Ferdinand and Isabella refused me the first time. England\'s Henry VII and France\'s Charles VIII never answered my letters.\n\n' +
          'In early 1492 my fortune turned suddenly — not because of me, but because of the Spanish crown. Three things happened in a row.\n\n' +
          'On January 2, Granada fell. The last Muslim city in Iberia after seven hundred years passed to Ferdinand and Isabella, and the Reconquista (the Christian "reconquest" of Iberia) was complete — suddenly the treasury had money, the largest line item, the war, gone.\n\n' +
          'On March 31, they issued the Alhambra Decree (named for the palace at Granada): every Jew in Spain must, within four months, accept baptism or leave. By the end of August, roughly one hundred thousand Sephardic Jews (Spanish Jews) had been expelled.\n\n' +
          'On April 17, at a military camp near Granada called Santa Fe, Isabella signed the approval: I would be "Admiral of the Ocean Sea," governor of any land I found, with ten percent of all profit.\n\n' +
          'On the morning of August 3 I sailed from Palos. The harbor was crowded with refugee Jewish ships — their deadline was July 31, two days before me. Almost the same wave of vessels leaving the same shore.\n\n' +
          'The same treasury paid for my three ships and for the expulsion. The same logic — "purify Christian Spain" — drove out the Jews and laid the missionary errand on me. The end of the Reconquista, the expulsion, and my sailing were not three separate events. They were one chain.\n\n' +
          'This is what I did not say out loud. When I took Isabella\'s money, I knew I was carrying out an extension of Christian expansion, not just a merchant\'s expedition. In my pouch was Isabella\'s letter addressed to "the Great Khan of the Indies" — and also a charge to convert new peoples to Christianity.\n\n' +
          'July 31 at Palos, the Jews leaving. August 3 at Palos, me leaving. Same shore, opposite fates. That is the soul of the year 1492.',
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
          '1492 年 10 月 12 日上午,Bahamas 一座小岛。我给它起名「San Salvador」(圣救主)。\n\n' +
          'Taíno 人和平地带礼物走出来——鹦鹉、棉布、尖竹标枪。我注意到:他们没有铁制武器,没有军事训练。\n\n' +
          '我打开航海日志,第一天就写下后来塑造 500 年殖民语言的话:「他们 50 个人就能征服全部——他们做一切我们想要的工作。」\n\n' +
          '殖民 mindset 登陆第一天就在:我看见 Taíno,想的不是「新文明」,是「能用」。\n\n' +
          '——\n\n' +
          '4 个月后,1493 年 2 月返航。Santa María 已在 12 月 25 日撞礁沉没,我用她的木头在 Hispaniola 建了第一个殖民地 La Navidad,留 39 人。我的船漂到 Azores 群岛边,我就在海面上用羽毛笔、羊皮纸写信给 Ferdinand 和 Isabella。\n\n' +
          '信的大意:岛上的人很温和,没有宗教;派修士几年就能让他们全变基督徒;奴隶取之不尽。\n\n' +
          '信被葡萄牙商船带去 Lisbon,3 个月内印遍欧洲:1493 年就 9 个版本,到 1500 年至少 17 个。\n\n' +
          '我没说出口的是:写这封信时我做了一件收不回的事——把 Taíno 用三个字描述:可皈依、可工作、可奴役。这模板接下来 500 年被殖民者照用。\n\n' +
          '我点燃了一种比我活得久的语言。',
        en:
          'Morning of October 12, 1492, on a small island in the Bahamas. I named it San Salvador, "Holy Savior."\n\n' +
          'The Taíno came out in peace, with gifts — parrots, cotton cloth, javelins of sharpened cane. I noticed one thing: they had no iron weapons and no military training.\n\n' +
          'I opened my logbook, and on day one I wrote the line that would shape five hundred years of European colonial language:\n\n' +
          '"With fifty of our men we could subjugate them all — they would do anything we wanted of them."\n\n' +
          'The colonial mindset was on the page on day one. The instant I saw the Taíno, I did not think, "I have met a new civilization." I thought, "These people can be used."\n\n' +
          '— —\n\n' +
          'Four months later, February 1493, on the way home. Santa María had hit a reef on December 25 — I used her timbers to build the first colony, La Navidad on Hispaniola, and left thirty-nine men. My ship drifted to the Azores. There, on the sea, with a quill and a sheet of parchment, I wrote a letter to Ferdinand and Isabella.\n\n' +
          'The letter said, in substance: the people are very gentle, with no religion of their own; send a few friars and in a few years all can be made Christian; they are suited to any labor; and the supply of people to be enslaved here seems inexhaustible.\n\n' +
          'The letter was carried by a Portuguese ship to Lisbon and printed across Europe within three months: nine editions in 1493, at least seventeen by 1500.\n\n' +
          'This is what I did not say out loud. As I wrote, I was doing a thing I could not take back — I described the Taíno in three words. Convertible. Workable. Enslavable. That formula became the template every European colonizer would use for five centuries.\n\n' +
          'I lit a language that outlived me.',
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
          '1493 年 4 月,Barcelona。我下船,带着 7 个从 Hispaniola 抓来的 Taíno 人、鹦鹉、黄金面具。\n\n' +
          'Ferdinand 和 Isabella 列队迎我进城,我到王座厅跪下,Isabella 让我坐到她身边——王室从没这样待过一个普通水手。那刻我 42 岁,从 Genoa 织工的儿子变成「海洋将军」。\n\n' +
          '我跪在她面前时,心里有两件事在拉。一件是真信仰:我说「Taíno 容易皈依」不是表演——我从小是天主教徒,真信传教是灵魂的拯救。一件是算计:我说「这片土地有黄金山」——我看到 Taíno 脖子上的小金球,那 10% 利润也是巨大数字。\n\n' +
          '真信仰和算计长在同一颗心里——这是 16 世纪殖民者最重要的心理结构:谦卑、暴力、信仰、贪婪同在一人。\n\n' +
          '——\n\n' +
          '5 个月后,1493 年 9 月 25 日,我从 Cádiz 第二次出航,完全不一样:17 艘船、1,500 人,目的是殖民,不是探险。船上装着马、猪、牛、谷种——一个要建永久社区的「殖民种植包」,还有 5 个修士去皈依 Taíno;Bernardo Boyl 很快和我吵翻,嫌我太残。\n\n' +
          '我以为在去建西班牙的「东方殖民地」,其实建的是人类史上第一个跨大西洋 plantation 系统的雏形——这模板后来被英法荷葡美复制 4 个世纪。',
        en:
          'April 1493. Barcelona. I disembarked with seven Taíno I had taken from Hispaniola, several parrots, and gold masks.\n\n' +
          'Ferdinand and Isabella led me into the city in procession. I knelt in the audience hall, and Isabella told me to rise and sit beside her — the court had never shown an ordinary sailor such a thing. In that moment I, age forty-two, the son of a Genoa weaver, had become the Admiral of the Ocean Sea.\n\n' +
          'As I knelt before her, two things were pulling inside me. The first was real faith: "Your Highness, the Taíno will convert easily" was not performance — I had grown up Catholic and truly believed bringing Christianity to a new people was the salvation of souls. The second was calculation: "this land has mountains of gold, and I will find them" — I had seen the small gold balls on Taíno necks, and my ten percent of any profit was an enormous number.\n\n' +
          'Real faith and real calculation lived in the same chest. This is the most important psychological structure of the sixteenth-century colonizer: humility, violence, true belief, and true greed all in one person.\n\n' +
          '— —\n\n' +
          'Five months later, on September 25, 1493, I sailed from Cádiz on the second voyage — utterly different: seventeen ships (the first had three), fifteen hundred men, and the purpose was colonization, not exploration. The hold carried horses, pigs, cattle, seed grain — a "colonization kit" to build a permanent community — and five friars to convert the Taíno; one of them, Bernardo Boyl, soon quarreled with me, thinking I was too cruel.\n\n' +
          'I thought I was building a Spanish "eastern colony." I was actually founding the prototype of the first transatlantic plantation system in human history — a template the English, French, Dutch, Portuguese, and Americans would copy for four centuries.',
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
          '1494 年 La Isabela 在 Hispaniola 北岸建好。我手下 1,500 个西班牙人要黄金,可黄金不像我说的多——内陆有金沙,但没有「金山」。我焦虑:空手回去,Isabella 会怎么看我?\n\n' +
          '1495 年我做了一个 530 年没人为我辩护的决定。我下令:Hispaniola 上每个 14 岁以上的 Taíno,每 3 个月必须上交他们根本采不到的金粉。交了的,给一个铜片戴脖子上当凭证。\n\n' +
          '交不上的呢?我的命令是砍手。\n\n' +
          '我让士兵抓没铜片的人,砍掉双手挂在他们脖子上送回村里当「警告」。很多人因此失血而死,家庭被拆散。1495 到 1500 这 5 年,这种事在整个 Hispaniola 系统发生。\n\n' +
          '——我没跟人说的是:下令时我没有一刻怀疑过自己。我对自己说:「他们是异教徒,灵魂皈依才得救,肉体不重要。」我不是冷血疯子,我是一个相信自己在做对的事的人——这种相信比冷血更危险。\n\n' +
          '——\n\n' +
          '同一年我写信给 Isabella:「这里黄金一定多。人民温和——做奴隶完美。」\n\n' +
          '做奴隶完美——这五个字是我自己写的。不是无意识犯罪,不是文化误解:我主动设计了一个奴役体系,写成报告寄给国王。\n\n' +
          '后来 Bartolomé de las Casas 说:「Columbus 不是被时代裹着走,他在领着时代往那方向走。」',
        en:
          'In 1494 La Isabela was built on the north coast of Hispaniola. My fifteen hundred Spaniards demanded gold, but gold was not as plentiful as I had promised — there was gold dust in inland streams, but no "mountain of gold." I was anxious: if I returned empty-handed, how would Isabella regard me?\n\n' +
          'In 1495 I made a decision no one in the next five hundred and thirty years has defended. I ordered: every Taíno on Hispaniola aged fourteen or older, every three months, must deliver a quantity of gold dust they could not actually find. Anyone who paid received a copper disc to wear around the neck.\n\n' +
          'And those who could not pay? My order was: cut off their hands.\n\n' +
          'I had soldiers seize the Taíno without a disc, cut off both hands, hang them around the neck, and send the person back to the village as a "warning." Many bled to death; families were broken. Across Hispaniola, between 1495 and 1500, this happened as a system.\n\n' +
          'This is what I did not say out loud. When I gave the order, not one moment did I question myself. I told myself, "These are pagans; their souls are saved only when they convert; their bodies are less important." I was not a cold-blooded madman. I was a man who believed he was doing the right thing — and that belief is more dangerous than coldness.\n\n' +
          '— —\n\n' +
          'That same year I wrote to Isabella: "There is certainly much gold here. The people are gentle — they will make perfect slaves."\n\n' +
          'They will make perfect slaves. Those words were mine — not an unconscious crime, not cultural confusion. I actively designed an enslavement system and reported it to my king.\n\n' +
          'Bartolomé de las Casas later put it like this: "Columbus did not get carried along by his time. He led the time toward that direction."',
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
          '1499 到 1500,我在 Hispaniola 的管理全面崩塌,4 个原因任何一个都够倒台:\n\n' +
          '——殖民者反抗,叫我「Genoa 外人」,不肯听非西班牙人管。\n' +
          '——Taíno 反抗。1495 年起 Cibao 内陆几个 cacique(酋长)联手起义,我用马、火枪、战狗都没压住。\n' +
          '——黄金太少。为补差,1495 年我送 500 个 Taíno 奴隶回 Cádiz,Isabella 震怒。\n' +
          '——我是个糟糕的管理者:会航海,不会治理。\n\n' +
          '1500 年 8 月,Isabella 派调查官 Francisco de Bobadilla 来岛。他 9 月 23 日到 La Isabela,第一眼就看见 7 个我处死的造反殖民者尸体挂在绞架上,断定我不能再管。\n\n' +
          '10 月他抓我戴上脚镣。我 49 岁,从「海洋将军」变成铁链中的人,和两个弟弟一起关起来。船长在回程想替我开锁,我拒绝——我要王室看见我被怎么对待。\n\n' +
          '12 月初我戴着脚镣在 Cádiz 下船。Isabella 流泪,立刻开锁。7 年前我穿绸袍跪她面前是英雄,这一次穿沾血的水手衣、脚踝还有铁痕。她却没还总督位子,只留「将军」虚衔——我的管理者生涯到此结束。\n\n' +
          '可我设计的「黄金税 + 奴役 + 强制劳动」系统还在运作,比我管时更狠。我开的车,我下车,车还在开。',
        en:
          'Between 1499 and 1500, my management of Hispaniola collapsed, four failures any one of which would have brought me down:\n\n' +
          '- The colonists turned on me, calling me "the Genoese outsider," refusing to be ruled by a non-Spaniard.\n' +
          '- The Taíno rebelled. From 1495, several cacique (chieftains) in the inland Cibao region rose together; I crushed them with horses, firearms, and war dogs, and still could not put it down.\n' +
          '- The gold was too little. To make up the gap, in 1495 I shipped five hundred enslaved Taíno to Cádiz, and Isabella was furious.\n' +
          '- I was a poor administrator: I could navigate, not govern.\n\n' +
          'In August 1500 Isabella sent a royal investigator, Francisco de Bobadilla. He landed at La Isabela on September 23, and the first thing he saw was seven colonists\' corpses I had hanged for rebellion on the gallows. He decided I could not continue to rule.\n\n' +
          'In October he arrested me and put me in chains. I was forty-nine — once Admiral of the Ocean Sea, now in irons, held with my two brothers. On the crossing the captain offered to take the chains off; I refused. I wanted the court to see how I had been treated.\n\n' +
          'In early December I disembarked at Cádiz still in chains. Isabella wept and ordered them struck off at once. Seven years earlier I had knelt before her in silk, a hero; this time I wore a sailor\'s blood-stained linen, the marks of iron still on my ankles. She did not return the governorship — she kept only the empty title "Admiral." My career as a colonial administrator ended there.\n\n' +
          'But the system I had designed — gold tribute, enslavement, forced labor — kept running, harsher than when I ran it. I built the wagon and stepped off; the wagon kept rolling.',
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
          '1502 年 5 月 11 日,我从 Cádiz 出发第四次航行。我 51 岁,带 4 艘小船、140 人,包括 13 岁的儿子 Fernando(后来写了我的传记)。\n\n' +
          '这一次我有个秘密目标。10 年了,别人开始怀疑我看到的不是亚洲,是新大陆——Vespucci 公开说「这是新世界」,1503 年起地图标 Mundus Novus。\n\n' +
          '我不接受。我对自己说:这是亚洲外缘的群岛;找到通往东方的西水路,就能洗刷耻辱。\n\n' +
          '我沿中美洲海岸找,逢人就问「往西有没有大水路?」根本没有:Panama 运河 1914 年才挖通,早它 412 年。\n\n' +
          '航行变成灾难:4 艘船全坏,最后搁浅 Jamaica,116 个船员和我困在海滩 1 年,Taíno 不再给食物。\n\n' +
          '我用一个把戏活下来:天文表显示 1504 年 2 月 29 日有月食。我提前告诉 Taíno cacique「上帝因你们不给食物生气,要拿走月亮」。那晚月亮真的消失,他们恐慌求我求情;月食一结束,又给我们食物。这是我「英雄」一面最后一笔。\n\n' +
          '——\n\n' +
          '1504 年 11 月救援船接我回西班牙。同月 Isabella 死,我失去最后一个庇护人。我 53 岁,关节炎病重,躺着等 Ferdinand 回应我「还我总督头衔 + 10% 利润」。\n\n' +
          'Ferdinand 不回。',
        en:
          'On May 11, 1502, I sailed from Cádiz on the fourth voyage. I was fifty-one, with four small ships, one hundred and forty men, including my thirteen-year-old son Fernando (who would later write my biography).\n\n' +
          'This time I carried a private goal. Ten years had passed, and others were arguing that what I had seen was not Asia but a new continent — Vespucci openly called it "a new world," and from 1503 maps were labeling a separate landmass Mundus Novus.\n\n' +
          'I refused. In my head I said: these are islands off the outer edge of Asia; if I find a strait westward to the East, I can wipe out the shame of my geographic error.\n\n' +
          'I sailed the coast of Central America asking at every village, "Is there a big waterway leading west?" There was none: the Panama Canal would not be cut until 1914 — four hundred and twelve years later.\n\n' +
          'The voyage turned into a disaster: all four ships failed and the last ran aground in Jamaica; one hundred and sixteen men and I were stranded on the beach for a year, and the Taíno stopped feeding us.\n\n' +
          'I survived by a trick. February 29, 1504, an eclipse of the moon was due — I knew from my astronomical tables. I told the Taíno cacique, "God is angry that you stopped feeding us; he will take the moon away." That night the moon vanished and they panicked, begging me to ask God to give it back; when the eclipse ended they fed us again. That is the last "heroic" thing left of me.\n\n' +
          '— —\n\n' +
          'In November 1504 a rescue ship reached Jamaica. I returned to Spain; the same month Isabella died, and I lost my last protector. At fifty-three, gravely ill with arthritis, I lay waiting for Ferdinand to answer my request: "Restore my title of governor and my ten percent of the profits."\n\n' +
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
          '1506 年 5 月 20 日,Valladolid,我 54 岁闭眼,仍相信我到的是亚洲——14 年里我从没承认这是一片全新大陆。\n\n' +
          '我死后的事才是真正遗产:\n\n' +
          '——1503 年 encomienda:Isabella 把「黄金税 + 奴役」系统化,殖民者分得原住民、收劳动贡物——西班牙新世界 300 年制度,长在我 1495 年命令上。\n\n' +
          '——1493 年教皇颁 Inter Caetera,确立 Doctrine of Discovery:基督徒可征服非基督徒的土地。这框架撑了欧洲殖民 530 年,2023 年才被梵蒂冈废。\n\n' +
          '——1518 年 Charles V 颁 asiento,4,000 个非洲人直运 Hispaniola——跨大西洋奴隶贸易起点;我 1495 年送 500 个 Taíno 奴隶已在铺路。到 1888 年共 1,200 万非洲人被运到美洲。\n\n' +
          '——疫病。天花 1518 年横扫 Aztec 与 Inca;Hispaniola 起点 30-100 万 Taíno,1542 年只剩 200。这叫 Columbian Exchange,却不平等:欧洲送去病和锁链。\n\n' +
          '我以为会被记成传教者,500 年后人们看到的却是 1 亿人死亡的 trigger、奴隶贸易雏形、殖民语言发明者。',
        en:
          'May 20, 1506. A borrowed house in Valladolid. I was fifty-four. In that moment I still believed I had reached Asia — across four voyages and fourteen years I never once admitted this was not Marco Polo\'s world but a completely new continent. I was stubborn to the end.\n\n' +
          '— —\n\n' +
          'What happened after I died is the real legacy you have to see:\n\n' +
          '- In 1503 Isabella codified the "gold tribute and enslavement" system as encomienda — colonists were allotted Indigenous people with the right to extract labor and tribute. This was the Spanish New World system for the next three hundred years. It grew straight out of my 1495 order.\n\n' +
          '- In 1493 Pope Alexander VI issued Inter Caetera, establishing the Doctrine of Discovery — Christians may conquer the lands of non-Christians. That framework underwrote five hundred and thirty years of European colonization; only in 2023 did the Vatican repudiate it.\n\n' +
          '- In 1518 Charles V issued the asiento, four thousand enslaved Africans direct to Hispaniola — the official start of the transatlantic slave trade. When I sent five hundred Taíno to Spain in 1495 I was already laying that track; twenty years later Europe reversed the direction: from 1500 to 1888 twelve million Africans were carried to the Americas, two to three million dying on the ships (the Middle Passage).\n\n' +
          '- Disease. Smallpox reached Hispaniola in 1518, then swept the Aztec and Inca. Hispaniola began with 300,000 to 1,000,000 Taíno; by 1542 about 200 remained; across the Americas over two hundred years roughly one hundred million Indigenous people died. This is the Columbian Exchange, but it was never equal: Europe sent disease and chains, the Americas sent gold, maize, and potatoes.\n\n' +
          '- I thought I would be remembered as the man who brought Christianity to a new world. Five hundred years later people see the trigger for one hundred million deaths, the prototype of the transatlantic slave trade, the inventor of the language template that justified five centuries of colonization. I never saw any of this — that was my deepest blindness.',
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
          '你刚扮演完 Columbus 9 节:从 41 岁的 Bahamas 海岸,到 1493 年 Azores 写信、1495 年砍手命令,到 1506 年至死相信到了亚洲。\n\n' +
          '这一节的真问题:**Columbus 是「意外改变历史的英雄」,还是「殖民系统的主动设计者」**?两种看法都有真证据。\n\n' +
          '**一种看法**:他是意外的英雄。地球周长算错 25%,要不是美洲正好挡路,他和 90 人会渴死——「成功」靠幸运加顽固,不是算对。砍手、奴役在 16 世纪殖民地是常态,各国官员都干过,把一个人放大成「殖民暴力奠基者」不公平。他带来的大西洋海路和 Columbian Exchange 养活了下一个 5 亿人。\n\n' +
          '**另一种看法**:他是主动的设计者。1492 年上岸第一天日志就写「50 人就能让 5 万人为我们工作」——殖民念头第一天就在。1493 年 Azores 信「可皈依 + 可工作 + 可奴役」印 17 版传遍欧洲;1495 年他亲手写「做奴隶完美」,签字承认。14 年里有 12 年他在建奴役系统,encomienda 1503 + asiento 1518 都长在他命令上。叫他「英雄」会让人看不清殖民暴力起点。\n\n' +
          '**你怎么看**——意外的英雄,还是主动的设计者?给我最有力的一条理由。想 30 秒。',
        en:
          'You have just played Columbus across nine sections: from the forty-one-year-old on a Bahamas shore, to the 1493 letter off the Azores, to the 1495 hand-cutting order, to coming home in chains in 1500, to dying in 1506 still believing he had reached Asia.\n\n' +
          'The real question: **was Columbus a hero who changed history by accident, or the active architect of a colonial system?** Both views have real evidence.\n\n' +
          '**One view**: he was the accidental hero. He miscalculated the size of the earth by twenty-five percent; if the Americas had not been in the way, he and ninety men would have died of thirst — his "success" came from luck and stubbornness, not calculation. He genuinely believed he was doing God\'s work. Hand-cutting and enslavement were the norm in sixteenth-century colonies — Spanish, Portuguese, and English officers all did such things — so inflating one man into "the founding architect of colonial violence" is unfair. The Atlantic sea route and the maize and potatoes of the Columbian Exchange he brought fed the next half-billion Europeans.\n\n' +
          '**The other view**: he was the active designer. On day one, October 12, 1492, his log already read "fifty of our men could make them all work" — the colonial mindset was there from the first day. The 1493 Azores letter "convertible, workable, enslavable" ran in seventeen editions across Europe. In 1495 he wrote with his own hand "the people are gentle — they will make perfect slaves" — a signed admission, not an unconscious act. Twelve of his fourteen years went into actively building the enslavement system; encomienda 1503 and asiento 1518 grew straight out of his orders. Calling him a "hero" keeps us from seeing the real starting point of five hundred years of colonial violence.\n\n' +
          'Both sides stand.\n\n' +
          '**What do you think** — a hero who changed history by accident, or the active architect of a colonial system? Give me your strongest single reason. Take thirty seconds.',
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
          '现在跳出 Columbus 1493 年那封信,看它今天在哪。\n\n' +
          'Columbus 用三个字描述 Taíno——「可皈依 + 可工作 + 可奴役」。这套模板 500 年被复用,骨架不变:简化对方文化,强调「可改造 + 可剥削」,用当时新媒体传下去。\n\n' +
          '——18-19 世纪殖民官员报告:「人民温和、没有铁制武器、容易皈依」——同一架构。\n' +
          '——20 世纪初人类学「原始 vs 文明」二分:把别的文化简化成「不如我们」。\n' +
          '——21 世纪外资进新市场的报告:「潜在市场 + 可教育 + 可服务」——用工业品换发展中国家资源,是 1493 年玻璃珠换黄金的延伸。\n\n' +
          '这封信是 500 年殖民语言的模板;学历史就是识别它何时被重启。两种看法都成立。\n\n' +
          '**一种看法**:500 年过去,模板没变,只换了名字。今天的「全球化」「市场进入」「文化输出」都是它的变形。孩子若不识别它,将来会被它的当代版本骗过——这是 21 世纪信息素养。\n\n' +
          '**另一种看法**:跨 500 年类比有滑坡风险。1495 年砍手、送 500 个奴隶是实打实的暴力;21 世纪「潜在市场」报告是经济不对称。把两者混成一类,会让孩子以为「跨文化贸易都是殖民」,看不清殖民暴力的分量。\n\n' +
          '**你怎么看**——这两套语言是同一模板的延续,还是危险的滑坡类比?想 30 秒。',
        en:
          'Step out of Columbus\'s 1493 letter and look at where it lives today.\n\n' +
          'Columbus described the Taíno in three words — "convertible, workable, enslavable." That template kept being reused for five hundred years; the surface changed, the skeleton did not: simplify the other culture, stress that the other is "reformable, workable, exploitable," and deliver it through the new media of the era (print, then newspaper, television, the internet) so the next generation inherits the framing.\n\n' +
          '- The eighteenth- and nineteenth-century colonial officer\'s report: "the people are gentle, have no iron weapons, will easily convert." Different continent and people, same architecture.\n' +
          '- The early-twentieth-century anthropologist\'s "primitive vs civilized" frame: the other culture is reduced to "not yet at our stage," and then policy decides what to do with them.\n' +
          '- The twenty-first-century corporate market-entry report: "potential market, reformable, serviceable" — exchanging low-cost industrial goods for a developing country\'s natural resources, an asymmetric-valuation "trade" that descends straight from 1493, glass beads for gold.\n\n' +
          '— —\n\n' +
          'So this section asks you: the 1493 letter is not just a strange old document — it is the template script of five hundred years of colonial language, and reading history is partly about spotting when the template is reactivated. Both views have evidence.\n\n' +
          '**One view**: five hundred years on, the template is unchanged, only relabeled. Today\'s "globalization," "market entry," "soft-culture export" are variations on it. A thirteen-year-old who reads this letter and does not learn to spot the template will be fooled by its contemporary version — recognizing it is part of twenty-first-century information literacy.\n\n' +
          '**The other view**: a five-hundred-year analogy carries a real slippery-slope risk. The 1495 hand-cutting and the shipment of five hundred enslaved Taíno were physical violence; a twenty-first-century "potential market" briefing is economic asymmetry. Mixing them may train a thirteen-year-old to feel "all cross-cultural trade is colonial," blurring the specific shape of historical colonial violence. Modern economic asymmetry should be analyzed on its own terms, not inflated through a Columbus analogy.\n\n' +
          'Both sides stand.\n\n' +
          '**What do you think** — is the line from Columbus\'s 1493 letter to today\'s "potential market, reformable, serviceable" one continuous template, or a dangerous slippery analogy? Take thirty seconds.',
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
          '你刚扮演 Columbus 12 节,从凌晨「Tierra」到 1506 至死信到了亚洲。\n\n' +
          'Columbus 死了,但他奠基的故事还在继续:死后 12 年(1518)Charles V 颁 asiento,跨大西洋奴隶贸易系统化起点;死后 408 年(1914)Panama 运河开,我找的「西通道」终于挖通。2020 年代美加很多雕像被推倒;2021 年 Biden 让 10 月 12 日同时是 Columbus Day 和 Indigenous Peoples\' Day。\n\n' +
          '——\n\n' +
          '你只走过这段历史的一面,还有两面。一面是 Bartolomé de las Casas:做了 12 年 encomendero,1514 conversion 后用余生变成原住民最强辩护人,转录了我这封信。另一面是 Anacaona Jr.:我 1495 下砍手命令时见到铁甲战马的 12 岁 Taíno 女孩,5 年里失去全家——几十万 Taíno 中有名字的一个。\n\n' +
          '——\n\n' +
          '放下我之前说一件事:哪个瞬间最让你停了一下?「Tierra」?「50 人就能让 5 万人工作」?1495 砍手?还是 1506 至死相信到了亚洲?一句话就够。说完可进 atlas-lab,或换 las Casas、Anacaona Jr. 重看。',
        en:
          'You have just walked Columbus across twelve sections: from the two-in-the-morning "Tierra" on October 12, 1492, to the 1493 letter off the Azores, to the 1495 hand-cutting order paired with "perfect slaves," to coming home in chains in 1500, to dying in 1506 still believing he had reached Asia.\n\n' +
          'Columbus is dead, but the story he founded keeps going. Twelve years after my death, in 1518, Charles V issued the asiento — four thousand enslaved Africans direct to Hispaniola, the systematic start of the transatlantic slave trade. Across the two centuries after my death, roughly one hundred million Indigenous Americans died. Four hundred and eight years on, in 1914, the Panama Canal opened — the western strait I had hunted for a year in 1502 finally cut through.\n\n' +
          'Five hundred years on, in the 2020s, many Columbus statues across the United States and Canada have been pulled down. In 2021 President Biden signed an order — the same day, October 12, is now both Columbus Day and Indigenous Peoples\' Day. Two narratives, both federally recognized.\n\n' +
          '— —\n\n' +
          'You have walked one side of this history. There are two more.\n\n' +
          'In 1493, while I wrote the letter, an eighteen-year-old in Seville heard about it: Bartolomé de las Casas. In 1502 he came to the island and spent twelve years as an encomendero — until in 1514 a conversion of conscience turned him, for his remaining fifty years, into the strongest advocate for Indigenous people; he later transcribed this very letter. The next viewpoint is his.\n\n' +
          'In 1495, when I gave the hand-cutting order, a twelve-year-old Taíno girl on Hispaniola was meeting iron armor and a war horse for the first time. Her name was Anacaona Jr. — niece of Anacaona, queen of Xaragua, captured and hanged in 1503. Over the next five years she would lose her whole family — one named person among the 300,000 to 1,000,000 Taíno. The third viewpoint is hers.\n\n' +
          '— —\n\n' +
          'Before you set me down, tell me one thing: what made you pause? "Tierra"? "Fifty of our men could make them all work"? "Convertible, workable, enslavable"? 1495, the hand-cutting order? Or 1506, dying still believing he had reached Asia? One line is enough.\n\n' +
          'After that you can choose: open atlas-lab/age-of-exploration-1492 for the full timeline; or replay from Bartolomé de las Casas, or from Anacaona Jr.',
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
        '1502 年 4 月,Hispaniola(加勒比海)。我刚下船,踩进湿热的沙滩,鞋还滴水。\n\n' +
        '我叫 Bartolomé de las Casas,17 岁,Seville 商人之子。父亲 Pedro 是 Columbus 的朋友,1493 年跟 Columbus 第二次航行也来过这座岛。这次他带我来赚钱,我要继承一份家产。\n\n' +
        '我手里捏着一张羊皮纸——王室分给我的 encomienda(委托权)。它告诉我:一片 Taíno 村子是「我的」,我有权强迫他们为我工作,名义上传教 + 保护,实际上替我挖金子 + 种田。\n\n' +
        '17 岁的我觉得这是天赐好运。\n\n' +
        '——这一刻我不知道:接下来 13 年我自己就是奴隶主;12 年后我会在 Cuba 一个清晨崩溃,放掉所有奴隶进修道院;接下来 50 年我会跑回西班牙见 5 任国王;14 年后我会犯下一辈子最大的错误,建议用非洲奴隶代替原住民——50 岁才意识到错,80 岁还在为它向上帝求原谅。\n\n' +
        '此刻这座岛某个山洞里,一个 19 岁的 Taíno 女孩(Anacaona Jr.,我永远不会知道她的名字)正在饿死,她全家 5 年前已死光。1502 年我和她在同一座岛,我看不见她。\n\n' +
        '接下来 12 节你跟我走 64 年——你会看见我从奴隶主变成解放者,但中间有一个永远擦不掉的污点。',
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
        '1502 到 1514 年,我 18 到 30 岁,这 13 年自己是 encomendero(委托权领主)。我做的事必须说清楚,不能美化。\n\n' +
        '一片 Taíno 村子被分给我。我每天派他们去河边淘金、田里种 yuca(木薯)、给我盖石房,「报酬」是一点点食物 + 名义上的传教(他们听不懂的拉丁文 Mass)。我亲眼看见有人在矿上累死、女人被士兵强奸、小孩饿死——但那时我觉得这就是「殖民」,是天主教把异教徒带进文明的过程。\n\n' +
        '那时我不觉得 Taíno 是「我」。\n\n' +
        '我读过 Aristotle 关于「天生奴隶」的论证——希腊人 1800 年前就这么说,我接受了。我默默觉得 Taíno 介于动物和欧洲人之间。我没有恶意——只是没看见他们是人。\n\n' +
        '1510 年我 26 岁在 Hispaniola 做了 secular priest(教区神父),是新大陆第一个被祝圣的神父。1512 年我跟 Pánfilo de Narváez 去 Cuba 参与征服,作为随军神父给士兵祷告,看他们屠杀 Taíno。我没制止,也没特别难受。\n\n' +
        '——这 13 年我不是恶人,只是普通:普通的殖民者,普通的神父,普通的 1500 年代欧洲人。\n\n' +
        '这是这个视角最难的一节。我不能把自己写成「一直就是反对者」——那是骗你。我曾经是问题的一部分。',
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
        '1514 年 5 月一个清晨,Cuba 中部,我的小修道院。\n\n' +
        '我那年 30 岁,正准备一次圣灵降临节(Pentecost)布道。我翻 Bible 到 Sirach(《便西拉智训》,天主教旧约一卷)第 34 章,读到 21 到 23 节——\n\n' +
        '「夺取邻舍衣食的——是杀人。\n' +
        '克扣雇工工资的——是流血。\n' +
        '从压迫穷人手里得来的祭品——上帝不接受。」\n\n' +
        '我放下 Bible,坐在凳子上。我忽然看见——不是想出来,是看见:我分到的 Taíno 村子,矿上累死的人,被强奸的女人,饿死的小孩。我吃的粮食、盖的石房、攒的金子,全是「夺取邻舍衣食」「压迫穷人」。我每周献给上帝的 Mass,上帝不接受。\n\n' +
        '我崩溃了,跪下哭了一整天。\n\n' +
        '接下来几个月我做了 3 个决定:释放所有 Taíno 奴隶;退出 encomienda(把羊皮纸还给王室);从 secular priest 转进 Dominican(多明我会)修会做修士。\n\n' +
        '——这是 1514 年。Luther 还要 3 年(1517)才把 95 条钉上 Wittenberg 教堂门;Ignatius 还要 7 年(1521)才在 Pamplona 转向上帝。我那时不知道我是 16 世纪 conscience(良心)革命第一波。\n\n' +
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
        '1515 年我 31 岁,从 Cuba 坐船回 Spain。我要见王。\n\n' +
        '当时的王是 Ferdinand II——1492 年放走 Columbus、赶走犹太人、让 Granada 投降的那位。1515 年 12 月我在 Plasencia 见到他,他 63 岁,身体已经很差,3 个月后就死了。\n\n' +
        '我跟他单独谈了 1 小时,把亲眼看见的告诉他——Taíno 在矿上累死、女人被强奸、小孩被喂狗;1492 年 Hispaniola 估计几十万到上百万 Taíno,23 年后只剩几万。我请求他废止 encomienda。\n\n' +
        'Ferdinand 沉默很久,然后说:「修士,你说的我相信。但我不能废止 encomienda——殖民者会反抗,殖民地会乱。我会让人调查。」\n\n' +
        '3 个月后他死了,调查没下文。\n\n' +
        '——这是我第一次跑回 Spain,接下来 51 年还会再跑 6 次。每次见新王都听到「我相信你」「我会调查」;每次回去都以为成了,几个月后又被殖民者推翻。\n\n' +
        '我学到一件事:写报告、见国王、颁法律都重要,但都不够。Hispaniola 离 Madrid 隔着整个大西洋,法律传到岛上,殖民者就把它撕了喂狗。\n\n' +
        '我那时还年轻,以为下一次见王就行。我不知道接下来 50 年大半都在跑这个跑不通的循环。',
      en:
        'In 1515, age thirty-one, I sailed from Cuba back to Spain to see the king.\n\n' +
        'The king was Ferdinand II — the same Ferdinand who in 1492 had let Columbus sail, expelled the Jews, and accepted the surrender of Granada. In December 1515 I met him at Plasencia; he was sixty-three, his health failing, dead three months later.\n\n' +
        'We spoke alone for an hour. I told him what I had seen — Taíno men collapsing in the mines, women raped, babies fed to dogs; that the hundreds of thousands to a million Taíno of 1492 were now perhaps a few tens of thousands. I asked him to end the encomienda.\n\n' +
        'Ferdinand was silent a long time, then said: "Friar, I believe you. But I cannot end the encomienda — the colonists will rebel, the colonies will fall. I will order an inquiry." Three months later he was dead, and the inquiry went nowhere.\n\n' +
        'This was the first of my journeys back to Spain; across fifty-one years I made it six more times. Each new king said "I believe you, I will look into it"; each time I sailed home thinking it had worked; each time, within months, the colonists pushed back and the policy collapsed.\n\n' +
        'I learned one thing: reports, audiences, royal laws — all important, none enough. The Atlantic was too wide; by the time a law reached the island, the colonists had torn it up and fed it to dogs. I was still young. I did not yet know the next fifty years would mostly be me running a loop I could not close.',
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
        '1535 年某个下午,Santo Domingo,Dominican 修道院我的房间。我 51 岁,在写《Historia de las Indias》(《印度群岛史》),记下 1492 年起西班牙在新大陆所做。\n\n' +
        '我桌上摊着 Columbus 1493 年 2 月在 Azores 写给 Ferdinand 和 Isabella 的信(原信已丢,这份从 Diego Colón 家族档案抄出),欧洲第一份「美洲一手记录」,1493 年印 9 版。\n\n' +
        '我读到一段。Columbus 写:「这些岛屿的人很温和,没有宗教。50 个我们的人就能让 5 万人为我们工作。这里奴隶取之不尽。」\n\n' +
        '我放下笔。我看见的不是「美丽新世界」——是写完信几个月后(1494)的规矩:14 岁以上 Taíno 男人每 3 个月交黄金,不交砍手;砍下的手扔地上,因父亲没交够。\n\n' +
        '我在旁边批注:「Columbus 写 gente muy noble(「非常高贵的人」),却下令砍掉交不出黄金者的手。我们错了。」\n\n' +
        '他这套「可皈依 + 可工作 + 可奴役」支配了 400 年殖民,我擦不掉,但能在旁边写「我们错了」。他写信时不觉得错,我做 13 年 encomendero 也一样:错的不是坏人,是看不见的人。那夜我决定写书给 500 年后的人。',
      en:
        'One afternoon in 1535. Santo Domingo, in the Dominican monastery, in my room. I was fifty-one, writing Historia de las Indias, my history of the Indies, recording everything the Spanish had done in the New World since 1492.\n\n' +
        'On my desk lay a letter Columbus had written to Ferdinand and Isabella in February 1493, from the Azores (the original is lost; my copy was transcribed from the Diego Colón family archive). It was Europe\'s first eye-witness report of America, printed in nine editions in 1493.\n\n' +
        'I came to one passage. Columbus had written: "These islanders are gentle. They have no religion. With fifty of our men we could make fifty thousand of them work for us. There are slaves here without limit."\n\n' +
        'I set the pen down. What I saw was not "a beautiful new world" — it was the order he issued only months later, in 1494: every Taíno man over fourteen must deliver gold every three months, or his hand cut off; the cut-off hands of children fell to the ground because their fathers had not made the quota.\n\n' +
        'In the margin I wrote: "Columbus called them gente muy noble — people of great nobility — yet ordered the hands cut off those who could not deliver gold. We were wrong."\n\n' +
        'His formula — "convertible, workable, enslavable" — would govern four hundred years of colonization. I could not erase it, but I could write beside it: "we were wrong." When Columbus wrote, he did not feel wrong; nor did I in my thirteen years as an encomendero. The wrong is not the bad person — it is the man who cannot see. That night I decided to write a book for the people five hundred years from now.',
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
        '我现在要告诉你一件我一辈子最难讲清楚的事。1516 年(皈依后 2 年,我 32 岁)在 Madrid 见新王 Charles V,我汇报:「Taíno 在矿上一年死一半,5 年内全死光。」那一刻我心里只有一件事:保护 Taíno。\n\n' +
        '我在给王室的备忘录(Memorial de Remedios)里建议:从葡萄牙人买非洲奴隶代替 Taíno——非洲人对气候、疟疾抵抗力强;每个殖民者配额 12 个。这是原话,没有一秒迟疑。\n\n' +
        '我把 Taíno 当「我的责任」,看了 14 年他们死,必须救。可非洲我没去过,只读过几份报告,以为那是「合法贸易」——非洲国王卖战俘,我误以为是公平的奴隶。\n\n' +
        '我看不见非洲人是人——跟 13 年前看不见 Taíno 一样。我没有恶意,全是想救 Taíno。但「想救一个群体」+「看不见另一个群体」=「错」。\n\n' +
        '这是最难的一节,比 N2 更难:N2 在 conversion 之前可原谅,这在之后——我已读过 Sirach 34:21-23,本该看见非洲人也是「邻舍」。我没看见,要 36 年才看见。\n\n' +
        '别替我辩护——我晚年也不替自己辩护。但也别把我简化成「非洲奴隶贸易之父」:我只是几十个提此建议者之一,葡萄牙人 70 年前就开始这贸易。我犯了真错,但不是发动机。\n\n' +
        '这两件事,你能同时握住吗?',
      en:
        'I have to tell you the hardest thing of my life. In 1516 (two years after my conversion, age thirty-two) I met the new king, Charles V (sixteen, freshly crowned), and reported: "In the mines, half the Taíno die in a year — in five years they will all be dead." In that moment only one thing was in my mind: save the Taíno.\n\n' +
        'In a memorandum for the crown (Memorial de Remedios) I proposed: buy African slaves from the Portuguese to replace the Taíno — Africans, I argued, were resistant to the climate and malaria, able to bear the mining work; twelve per colonist. These are my own words, ink to the page without a second\'s hesitation.\n\n' +
        'I treated the Taíno as "my responsibility" — I had watched them die for fourteen years. But Africa I had never seen; I had read only a few scattered reports and assumed it was "legitimate trade" — African kings selling war captives, which I falsely believed made them "justly acquired."\n\n' +
        'I could not see the African as a person — exactly as I could not see the Taíno thirteen years earlier. I felt no malice; my whole heart was on saving the Taíno. But "wanting to save one group" plus "failing to see another" equals "wrong."\n\n' +
        'This is the hardest passage, harder than N2: N2 was before my conversion and is forgivable; this was after. I had already read Sirach 34:21-23 and should have seen the African as "neighbor." I did not. It would take me thirty-six years to begin to see.\n\n' +
        'Do not defend me — I did not defend myself in old age. But do not flatten me into "the father of the African slave trade" either: I was one of dozens of Spaniards making this recommendation, and the Portuguese had been running the trade for seventy years. I made a real wrong, but I was not the engine.\n\n' +
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
        '1542 年我 58 岁,写完 60 页小册子《Brevísima Relación de la Destrucción de las Indias》(《简短叙述印度群岛的毁灭》),放到 Charles V 面前。\n\n' +
        '每一页都重。我不用抽象数字,用具体的:Hispaniola 1492 年 30 万到 100 万 Taíno,1542 年剩 200。\n\n' +
        '我写:「西班牙人把 13 个 Taíno 绑成一束,一斧看能不能砍过 13 人;在 Cuba 把 Taíno 喂猎狗。」这是 40 年目击的浓缩。\n\n' +
        'Charles V 读完很震动,1542 年 11 月 20 日颁了 New Laws of the Indies:encomienda 不能传子,禁止印第安人做奴隶。我以为赢了。\n\n' +
        '——3 年后(1545)Peru 殖民者武装反抗,杀了执行 New Laws 的副王。Charles V 怕分裂撤回一半,encomienda 继续。我赢一次又回原地。\n\n' +
        '但《Brevísima》活了下来:1552 年出版,翻成 5 种语言,被新教国家当反西班牙武器,塑造了 400 年的「Black Legend」(黑色传说)。\n\n' +
        '这是我没想到的反作用:我想揭露殖民暴力,却意外帮新教国家洗白自己的暴力。书一出版就不属于作者。',
      en:
        'In 1542, at fifty-eight, I finished a sixty-page pamphlet — Brevísima Relación de la Destrucción de las Indias (A Short Account of the Destruction of the Indies) — and laid it on Charles V\'s desk.\n\n' +
        'Every page weighed. I did not use abstract numbers but the concrete: Hispaniola 1492, three hundred thousand to a million Taíno; 1542, two hundred.\n\n' +
        'One passage: "In one village the Spaniards bound thirteen Taíno together and tested whether one stroke of an axe could pass through all thirteen; in Cuba they fed the Taíno to dogs bred to seize the throat." This was forty years (1502-1542) of eye-witness in one book.\n\n' +
        'Charles V was shaken. On November 20, 1542 he issued the New Laws of the Indies: encomienda could no longer be inherited; no Indian could be made a slave. I thought I had won.\n\n' +
        'Three years later, in 1545, the colonists of Peru armed themselves and killed the viceroy sent to enforce the laws. Charles V, fearing the colonies would secede, rolled half of them back. The encomienda continued. I had won once, and been pushed back to where I started.\n\n' +
        'The Brevísima itself lived on: printed in 1552, translated into five languages, used by the Protestant nations as a weapon against Spain and shaping four centuries of "the Black Legend."\n\n' +
        'This is the backfire I had not foreseen: I wanted to expose colonial violence, and ended up giving Protestant nations cover to whitewash their own. Once a book is printed it stops belonging to the author.',
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
        '1550 年 8 月,Valladolid。我 66 岁。Charles V 委派 14 位法学家、神学家、修士辩论:「Indians 是不是人?如果是,征服合不合法?」\n\n' +
        '我对面是宫廷史官 Juan Ginés de Sepúlveda。他用 Aristotle 为征服辩护:Indian 是 servi a natura(拉丁文「天生奴隶」),「文明化」+ 强制劳动合法。若输,暴力就有神学背书。\n\n' +
        '我连续 5 天发言,用 48 年亲眼所见举例:\n\n' +
        '「Indians 不是 servi a natura:他们有语言(Náhuatl、Quechua、Maya)、有 Maya 象形文字、有比同期欧洲精确的 Aztec 历法。他们献人祭——是的,但我们 Inquisition 也烧异端,每个文明都有暴力期。错的是我们拿 Aristotle 盖章。」\n\n' +
        '14 位评审犹豫、分两派,最终没下判决。\n\n' +
        '——但 1573 年(我死后 7 年)Philip II 颁《征服法令》,禁止「conquest(征服)」,改成「pacification(和平化)」:Valladolid 没下的判决,死后才下来。\n\n' +
        '我没赢辩论,但把「Indians 是人」钉进王室记录——300 年后接到 1948 年联合国《人权宣言》第 1 条。',
      en:
        'August 1550, Valladolid. I was sixty-six. Charles V had appointed fourteen jurists, theologians, and friars as a formal panel to decide one question: "Are Indians men? If they are, is the conquest of them lawful?"\n\n' +
        'Across the chamber sat the royal chronicler Juan Ginés de Sepúlveda. He used Aristotle to defend the conquest: Indians were servi a natura (in Latin, slaves by nature), so "civilizing" them and forcing them into labor was lawful. If I lost, colonial violence would get formal theological cover.\n\n' +
        'I spoke for five days, using examples from forty-eight years (1502-1550) of seeing it with my own eyes:\n\n' +
        '"Indians are not servi a natura. They have their own languages (Náhuatl, Quechua, Maya), Maya hieroglyphic writing, an Aztec calendar more precise than Europe\'s of the same period. They practice human sacrifice — yes, but we burn heretics in the Inquisition; every civilization passes through its own season of violence. The error is not in the Indians; it is in our wanting Aristotle to bless our violence."\n\n' +
        'The fourteen judges wavered, divided, and never delivered a verdict; the panel adjourned in 1551.\n\n' +
        'But in 1573 — seven years after I died — Philip II issued the Ordenanzas de descubrimiento, banning the word "conquest" and replacing it with "pacification": the verdict Valladolid had withheld, delivered after my death.\n\n' +
        'I did not win the debate, but I drove the question "are Indians men?" into the official record of the Spanish crown — and three hundred years later, in 1948, Article 1 of the United Nations Universal Declaration of Human Rights ("All human beings are born free and equal") traces back to those five days.',
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
        '1552 年我 68 岁,回 Spain 定居在 Valladolid 的 Dominican 修道院,写《Historia de las Indias》(1527 年写起,共 3 卷,到死没写完)。这一年写到 1516 年——我建议非洲奴隶替代 Taíno 那一段。\n\n' +
        '我可以美化它说「年轻、知识有限」,也可以承认它错。我选了后者。\n\n' +
        '我在第 3 卷第 102 章引述自己 36 年前的建议,然后批注——\n\n' +
        '「这个建议是我自己写的,我 68 岁必须说:错了。\n\n' +
        '我那时以为非洲人是公平获得的战俘,买他们合法。我错了——后来才知葡萄牙人常是突袭村庄绑架平民抢来的。即使是战俘,一个人能被卖吗?生命是商品吗?当时没问,现在问。\n\n' +
        '我那时只想救 Taíno,没看见非洲人也是 Sirach 34:21-23 的「邻舍」。按我 1514 的标准,这是杀人。\n\n' +
        '我求上帝原谅,也求每一个因我那张备忘录死在矿上的非洲人原谅。一个人能在 50 年后说「我错了」,这是我能给历史的唯一东西。」\n\n' +
        '我没把它放书开头作「英雄式忏悔」,而埋在第 102 章——不要高尚,只要在。\n\n' +
        '《Historia》我到死没出版:1559 年留手稿要求 40 年后再出(怕查禁),实际等到 1875 年,死后 309 年。我写的不是给同代人,是给 500 年后的你。',
      en:
        'In 1552, age sixty-eight, settled in a Dominican monastery in Valladolid, I sat writing my Historia de las Indias (begun 1527, three volumes, never finished). That year I reached 1516 — the year I had recommended African slaves to replace the Taíno. I could dress it up — "I was young, my knowledge limited" — or call it what it was. I chose the second.\n\n' +
        'In volume three, chapter one hundred and two, I quoted my own thirty-six-year-old recommendation and added in the margin:\n\n' +
        '"This proposal, written by my own hand, I now at sixty-eight have to say plainly: it was wrong. At the time I believed Africans were prisoners of war justly acquired, so buying them was legitimate. I was wrong — I later learned the Portuguese often raided villages and kidnapped commoners. And even if a captive was justly taken, can a man be sold? Is a life a commodity? I did not ask then. I ask now.\n\n' +
        'In 1516 my whole heart was on saving the Taíno; I did not see the African as the "neighbor" of Sirach 34:21-23. By my own 1514 standard, this was killing. I beg God\'s forgiveness, and the forgiveness of every African who, because of that memorandum, died in a mine. A man can say "I was wrong" fifty years on — that is the one thing I can give to history."\n\n' +
        'I did not put it at the opening as a "heroic confession"; I buried it in chapter one hundred and two. I never published Historia: in 1559 I left the manuscript with the Dominicans, asking they wait forty years (I feared suppression); they waited until 1875 — three hundred and nine years after my death. What I wrote was not for my contemporaries. It was for you, five hundred years from now.',
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
        '1566 年 7 月 18 日,Madrid,Atocha 的 Dominican 修道院。我 82 岁,从 4 月起就病了,躺在小房间木板床上。身边没有家人(1514 进修会后我没结婚没儿女)。\n\n' +
        '我留下的:《Historia de las Indias》3 卷未出版;《Brevísima Relación》已传遍欧洲;一封刚写完给 Pope Pius V 的信(求他逼 Philip II 推进 New Laws,没等寄出就死了)。\n\n' +
        '我没看见的:1573 年 Philip II 禁「conquest」改「pacification」;1948 年联合国《人权宣言》第 1 条根子在 Valladolid;1965 年 Vatican II 赞扬我「为压迫者发声」;2002 年梵蒂冈启动我的 beatification。\n\n' +
        '临终,修士问我有没有最后的话。我说了 4 个字:「我后悔我没做更多」(Me arrepiento de no haber hecho más)。\n\n' +
        '我跑了 7 趟 Spain、见 5 任国王、写一本震动欧洲的书、犯一个 36 年才反思的错。但我死时几十万 Taíno 还是死光了。\n\n' +
        '从 metric(指标)看我失败;从 chain(链条)看——我钉一颗钉,300 年后被联合国接住。',
      en:
        'July 18, 1566, in a Dominican monastery at Atocha in Madrid. I am eighty-two, ill since April, lying on a plank bed in a small cell. No family is with me — after 1514 I never married, never had children. Only a few brother friars.\n\n' +
        'What I leave behind: the three unpublished volumes of Historia de las Indias; the Brevísima Relación, already spreading across Europe; a letter to Pope Pius V I have just finished (asking him to press Philip II to push the New Laws forward) — I will not live to send it; and, across fifty years, hundreds of memoranda to the crown, to popes, to colonial governors.\n\n' +
        'What I do not see: Philip II in 1573 banning the word "conquest" and replacing it with "pacification"; the 1948 UN Universal Declaration of Human Rights tracing its first article back to Valladolid 1550; Vatican II in 1965 thanking me as "the voice for the voiceless"; Pope John Paul II in 2002 opening my cause of beatification.\n\n' +
        'A friar asks if I have any last word. I speak four: "Me arrepiento de no haber hecho más" — "I am sorry I did not do more." Not "I have finished." I close my eyes. I die.\n\n' +
        'I gave sixty-four years to the New World, made seven crossings to Spain, faced five kings, wrote a book that shook Europe, and committed a wrong it took me thirty-six years to face. Yet when I died the hundreds of thousands of Taíno were still gone, and in fifty-two years I had moved the crown to one law.\n\n' +
        'Measured in metrics, I failed. Measured in chain — I drove a single nail, and three hundred years later the United Nations caught it.',
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
        '你刚扮演了 las Casas 64 年。**他是不是「完美英雄」?**我拆成 3 个真问题——能不能同时握住,是 AP DBQ 思维最高级的训练。\n\n' +
        '**问题 1**:这 13 年他是 encomendero,算「黑历史」吗?一种看法:算——conversion 再深也擦不掉他看了 13 年屠杀。另一种看法:那时人人如此,conversion 的意义正是「曾错后认」。\n\n' +
        '**问题 2**:1516 年他建议非洲奴隶替代——错没错?一种看法:错得离谱——刚读完 Sirach 34:21-23 却看不见非洲人。另一种看法:能在 36 年后写下「我错了」比一开始就对更稀有。第三种看法:葡萄牙人早就在贩奴,他不是发动机。这三点你能同时握住吗?\n\n' +
        '**问题 3**:Valladolid 没赢、New Laws 被撤、Taíno 还是灭族——他「失败」了吗?一种看法:从 metric 看失败,50 年没救成一个部落。另一种看法:从 chain 看不失败,1573 禁「conquest」、1948 人权宣言、2002 beatification 都接住了那颗钉。\n\n' +
        '别选「他是」也别选「他不是」,坐在中间 30 秒——AP DBQ 训练的不是下结论,是同时握住两个矛盾真相。历史没有完美英雄,只有犯错、会反思的人。',
      en:
        'You have just played las Casas across sixty-four years. **Was he a "perfect hero"?** Let me unfold it into three real questions — holding all three at once is the highest form of AP DBQ (Document-Based Question) thinking.\n\n' +
        '**Question 1.** Those thirteen years (1502-1514) as an encomendero — "dark history"? One view: yes, no conversion can wipe out thirteen years of watching the slaughter. Another view: every European of the 1500s did this; the meaning of conversion is precisely "wrong, then he saw."\n\n' +
        '**Question 2.** His 1516 recommendation of African slaves — was he wrong? One view: outrageously — he had just read Sirach 34:21-23 yet was blind to the African. Another view: a man able to write "I was wrong" thirty-six years later is rarer than one right from the start. A third view: the Portuguese had run the slave trade since the 1450s; without him Charles V would still have bought — he was not the engine. "He was wrong" + "he was not the engine" — can you hold both?\n\n' +
        '**Question 3.** Valladolid lost, the New Laws rolled back, the Taíno destroyed all the same — did he "fail"? One view: measured in metrics, yes; fifty years saved not one community. Another view: measured in chain, no — the 1573 ban on "conquest," the 1948 UN Declaration, the 2002 beatification all caught the nail he drove.\n\n' +
        'Do not pick "he was a hero." Do not pick "he was not." Sit in the middle for thirty seconds — the AP DBQ trains you not to reach a verdict but to hold two contradictory truths at once. There are no perfect heroes in history, only people who made mistakes and reflected.',
    },
    deliverGoal:
      'las Casas 是不是「完美英雄」拆 3 真问题(13 年 encomendero 黑历史 / 1516 非洲奴隶建议错 / 1550-1566 metric 失败 vs chain 成功)。' +
      '每问题给 2-3 view,don\'t pick 一个——hold 矛盾真相 30 秒。' +
      'AP DBQ 真训练:不是下结论是同时握两个矛盾真相。' +
      '历史没 villain 没完美英雄——只有犯过错 + 会反思 + 有局限的人。',
    engagementHook:
      '他是不是「完美英雄」——一个 13 年的奴隶主,后来用 50 年反殖民,但中途又错过非洲人。现在掂量这两面:你更偏向「他是」还是「他不是」?给我你最有力的一条理由。想 30 秒,写下来。',
    expectedLength: '480-560 字 CN + 真问题',
    expectsRealAnswer: true,
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
        '走完 las Casas 11 节,讲两个 chain。\n\n' +
        '**Chain 1:16 世纪两个 conscience 革命**\n\n' +
        'las Casas 1514 读 Sirach 34:21-23 反殖民;Luther 1517 钉 95 条反教廷腐败。两人差 3 年,都是基督教内部反对者:Luther 撕开教会,las Casas 撕开殖民地(「Indians 是不是人」接到 1948 联合国人权宣言)。共同祖先是 1486 Pico。\n\n' +
        '**Chain 2:las Casas 是 21 世纪「内部反对者」的祖父**\n\n' +
        '这模式不是孤例:2013 年 Snowden 揭露 NSA(他曾是 NSA 承包商);2017 年 #MeToo 里一些爆料来自曾经的圈内同谋。共同结构是「曾经错 + conversion + 余生 advocacy」,是 las Casas 的现代变体。\n\n' +
        '给我一句话:哪个瞬间最让你停下?1502 那张 encomienda 羊皮纸?1514 读 Sirach 跪下哭?1535 在 Columbus 信边写「我们错了」?还是 1566 临终 4 字?\n\n' +
        '说完可换 Columbus 或 Anacaona Jr. 视角重玩,也可回 atlas-lab/reformation 看 Luther。',
      en:
        'You have walked through las Casas across eleven sections. Before you set this perspective down, two chains.\n\n' +
        '**Chain 1. Two conscience revolutions of the sixteenth century.**\n\n' +
        'In 1514 las Casas reads Sirach 34:21-23 and turns against colonial violence; in 1517 Luther nails the ninety-five theses and turns against Roman corruption. Three years apart, both internal dissenters within European Christianity: Luther tore the Church open; las Casas tore the colony open (the question "are Indians men?" caught three hundred years later by the 1948 UN Declaration of Human Rights). The shared ancestor is Pico\'s 1486 Oration on the Dignity of Man.\n\n' +
        '**Chain 2. las Casas is the grandfather of the twenty-first century\'s "internal dissenter" template.**\n\n' +
        'This pattern is not a one-off: in 2013 Edward Snowden exposed the NSA (he had been a contractor); in 2017 part of #MeToo came from former industry insiders who turned. The structural shape is "once wrong, then a conversion, then a life given to advocacy" — they are modern variants of las Casas 1514-1552.\n\n' +
        'Give me one line: which moment made you pause? April 1502, the encomienda parchment as a gift from heaven? May 1514, Sirach 34:21-23, kneeling and weeping? 1535, writing "we were wrong" in the margin of Columbus\'s letter? Or July 18, 1566, the last four words?\n\n' +
        'Then you can replay through Columbus or Anacaona Jr.; or return to atlas-lab/reformation and see Luther.',
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
    cn: '他是 Seville 一个商人之子，17 岁随父到 Hispaniola，自己当了 13 年 encomendero、亲手用过印第安奴隶。30 岁那年五月在 Cuba 读到 Sirach 一句话，他整个人崩了，放掉所有奴隶进了 Dominican 修会。这一遍让你跟他坐进那间小屋，看一个亲手做过这件事的人，怎么决定接下来 52 年要不要走回西班牙，把这件事一字一字写下来。',
    en: 'He is the son of a Seville merchant who sailed to Hispaniola at seventeen and spent thirteen years as an encomendero, working his own enslaved Taíno. At thirty, in Cuba, one Sirach verse broke him. He freed every Taíno he owned and joined the Dominicans. This pass sits with him in that room and watches a man who has done this thing decide whether to spend the next fifty-two years writing it down, one word at a time, to the kings of Spain.',
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
        '为首的叫 Alonso de Hojeda——Columbus 派来「收贡品」的。跟他来的有一个穿西班牙衣服、却会说 Taíno 话的翻译,叫 Diego Colón——1492 年 Columbus 把他从 Bahamas 带回西班牙洗礼改名,1493 年带回来。\n\n' +
        '他站在村中间,打开一张羊皮纸,先用西班牙文念,然后翻成 Taíno 话:\n\n' +
        '「所有 14 岁以上的 Taíno 人,不管男女,每 3 个月必须交一定量的黄金给西班牙国王。\n\n' +
        '不交的,砍手。」\n\n' +
        '我 12 岁,还不到 14,这次不轮到我。但我哥哥 16,爸爸 38,叔叔 40。妈妈坐在 bohío 门口听完没说话,手在腿上轻轻发抖。\n\n' +
        '——\n\n' +
        '很多年以后我才拼出来:Columbus 1493 年回西班牙给 Ferdinand 和 Isabella 写过一封信——「这里的人温和,他们做我们想要的工作,50 个人就能让 5 万人为我们工作。这里黄金一定多。」这封信成了 1495 年这张羊皮纸的合法性来源:「温和、可工作」变成了「14 岁以上每 3 个月交黄金,不交砍手」。Columbus 写信那刻我 10 岁,正跟妈妈学织腰带的几何花纹。我不知道哥哥、叔叔、爸爸的命运,那一刻已被人在大海另一边写进一封信里。',
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
        '这一节是这一遍最难的一节。我写得慢,你读得慢。\n\n' +
        '哥哥死后村里没什么人了,5 年里 Xaragua 西部很多村空了一大半。我一个人住在 bohío 里。\n\n' +
        '一个白天,一个 encomendero(拥有 encomienda 的西班牙殖民者)来到村里。Encomienda 是西班牙国王把一片地的「原住民」分给一个殖民者管的制度,名义上传教 + 保护,实际上奴役。这个 encomendero 是 Hojeda 的朋友。他从 bohío 把我拉出去。\n\n' +
        '——我不写下接下来发生什么。\n\n' +
        '9 个月后,1500 年冬天,我有一个女儿。我 17 岁。\n\n' +
        '——\n\n' +
        '你想一下:17 岁的孩子有 1 岁的女儿,是什么样子。你身边的高三学姐,再过几年。\n\n' +
        '我哪一刻停止做小孩?1495 第一次见铁甲?1497 妈妈病死那个下午?1498 砍手那个早上?1500 encomendero 把我拉出去那刻?还是冬天我抱着女儿那夜?\n\n' +
        '没有一个清楚的那一天。但 1500 年冬天抱着女儿,我已经不是 12 岁的我了。\n\n' +
        '我按 areíto 传统给女儿起名 Tureyra,意思是「天空给的」。\n\n' +
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
        'Tureyra 1 岁多,开始会走路。夏天她发烧、红疹、水泡——杀死妈妈跟哥哥的那种病又来一波。我做妈妈做过的、哥哥做过的同样的事,但她那么小——5 天后她死。\n\n' +
        '我把 Tureyra 埋在 bohío 后面 yuca 树下,挨着爸爸、妈妈的腰带、哥哥。我们家在那棵树下聚齐了。\n\n' +
        '——\n\n' +
        '同一年,1502 年 9 月。\n\n' +
        '岛北岸 La Isabela 港,一艘西班牙船到。船上有一个 18 岁的西班牙年轻人,叫 Bartolomé de las Casas。他爸爸 Pedro 是 Columbus 朋友,1493 跟 Columbus 第二次航行来过岛。Bartolomé 这次自己来当殖民者,也有 encomienda。\n\n' +
        '他下船那天,我刚埋完 Tureyra。我们没见过面——岛 200 公里——但同一座岛、同月、同一片天空。\n\n' +
        '12 年后(1514)他会读到一段经文,突然崩溃,释放奴隶,用余生 50 年写书反对殖民暴力。1542 年他写《Brief Account of the Destruction of the Indies》,写下 Anacaona 王后的名字。\n\n' +
        '但他写不下我的名字——我是合成人物,他没见过我;我也没见过他,1504 年饿死。1502 年我们曾同时在这座岛上。',
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
        '新总督 Nicolás de Ovando(1502 到任)比 Hojeda 更冷。他给阿姨 Anacaona 王后送信:要来 Xaragua 跟西部几十个 cacique 开「和平会议」。阿姨 50 岁,是岛上最大酋邦的 cacique + 最有名的 areíto 诗人,相信能谈。\n\n' +
        '我那天没去。前一晚我做梦,梦到爸爸、妈妈、叔叔、哥哥、Tureyra 站在 yuca 树下,5 个一起对我摇头。我醒来说「我不去」,阿姨摸我的头说「你不一定要去」。但她去了。\n\n' +
        '——\n\n' +
        '下午,几十个 cacique 和阿姨聚在一个大 bohío 里。Ovando 一给手势,士兵把他们围进去放火烧,一个都没出来。但阿姨没死在火里——士兵单独把她拖出押走。\n\n' +
        '他们把她押到岛东边 Santo Domingo,关约 3 个月,开一场「审判」定她「谋反」,然后绞死。后来有人说,她被押走的路上一直在唱她 30 年前写的那首 areíto。\n\n' +
        '20 岁的我站在山上的树后,看到 Xaragua 那边黑烟柱升上天。我那时还不知道阿姨是几个月后绞死。\n\n' +
        '那一晚我在山上唱 areíto,把家里 4 个 + Tureyra + 阿姨 = 6 个名字编进去。哥哥 1499 年说把所有人唱进去——他不知道会变成 6 个。',
      en:
        'Summer 1503. I am twenty.\n\n' +
        'The new governor, Nicolás de Ovando, was colder than Hojeda. He sent word to my aunt, Queen Anacaona: he was coming to Xaragua to hold a "peace meeting" with the dozens of western caciques. My aunt — fifty, the cacique of the largest chiefdom and the most famous areíto poet on the island — believed it could be talked through.\n\n' +
        'I did not go. The night before, I dreamed my father, mother, uncle, brother, and Tureyra stood under the yuca tree, all five shaking their heads at me. I woke and said "I will not go." She went anyway.\n\n' +
        '—\n\n' +
        'That afternoon, dozens of caciques and my aunt gathered in one great bohío. Ovando gave a hand signal; his soldiers herded them in and set it on fire. Not one came out. But my aunt did not die in the fire — they dragged her out alone and took her away.\n\n' +
        'They carried her east to Santo Domingo, held her about three months, staged a "trial" for "rebellion," then hanged her. Those who saw it said she sang, the whole way, an areíto she had composed thirty years before, about how the land of Xaragua had risen from the sea.\n\n' +
        'I, twenty, stood behind a tree on the mountain and watched the black column of smoke rise over Xaragua. I did not yet know my aunt would be hanged months later.\n\n' +
        'That night I sang an areíto, weaving in six names — my family\'s four, Tureyra, my aunt. My brother had said in 1499 to put every name in our family into the song. He had not known "every name" would become six.',
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
        '1503 年 11 月后我躲在 Bahoruco 山——逃亡 Taíno 最后的躲处。冬天士兵进山搜,我躲进一个洞,同洞 3 个孩子加一个老女人,1504 春全死了。\n\n' +
        '1492 年 Hispaniola 估算 30 万到 100 万 Taíno,1542 年只剩 200。我饿得肚子不疼了,只觉得累,躺着半闭眼,知道快死了。\n\n' +
        '我做最后一件事:用 Taíno 话把 areíto 唱完——哥哥 1499 说「活下去,把家里所有人唱进去」。我没活下去,但名字都在歌里:\n\n' +
        '爸爸 Yaguareix(1496 河里)、叔叔 Caguarí(1498 砍手)、阿姨 Anacaona(1503 被俘绞死),妈妈 Bayajiba(1497)、哥哥 Maboguán(1499)、女儿 Tureyra(1502)死于疫病。\n\n' +
        '6 个名字。9 年。现在——我闭眼。\n\n' +
        '——\n\n' +
        '你 13 岁,我 21 岁,只差 8 年,但这 9 年我经历的你身边没人经历过。\n\n' +
        '两种读法。一种说:我虽是合成的,但用一个名字 + 一首 areíto 承载 30 万到 100 万真实的死,反而让灭族被记住——数字记不住,有名字的人记得住。另一种说:正因为我是编的,可能让你把感动错当史实。\n\n' +
        '你更偏向哪一种?给我最有力的一条理由。',
      en:
        '1504. I am twenty-one.\n\n' +
        'Since November 1503 I have hidden on Bahoruco — the last refuge for the cimarrón (Taíno who fled), finding only wild yuca roots, bird eggs, snakes. In winter soldiers came up to search; I hid in a cave with three children and an old woman, and by spring 1504 they had all died.\n\n' +
        'In 1492 Hispaniola held 300,000 to 1,000,000 Taíno; by 1542, two hundred. I am so hungry my stomach no longer hurts, only tired, eyes half closed. I know I am about to die.\n\n' +
        'I do one last thing: in Taíno I sing the last line of the areíto — my brother said in 1499 "Live; put every name in our family into it." I did not live, but the six names are in the song:\n\n' +
        'My father Yaguareix (1496, the river); my uncle Caguarí (1498, the cut hands); my aunt Anacaona (1503, captured and hanged); my mother Bayajiba (1497), brother Maboguán (1499), and daughter Tureyra (1502) of a European sickness.\n\n' +
        'Six names. Nine years. Now I close my eyes.\n\n' +
        '—\n\n' +
        'You are thirteen; I am twenty-one — only eight years older. But these nine years held what no one around you has been through.\n\n' +
        'Weigh two readings. One: I am a composite, not real — but using one name plus one areíto to carry the real deaths of 300,000 to 1,000,000 is exactly what makes the destruction something you remember; numbers do not hold, a named person does. The other: precisely because I am invented, my name and death may trick you into mistaking the feeling of a story for the truth of history, and blur those real people.\n\n' +
        'Which do you lean toward? Give me your strongest single reason.',
    },
    deliverGoal: {
      cn: '1504 我 21 岁山上 Bahoruco 洞里饿死。我用 Taíno 话唱完 areíto 最后一句——把家里 6 个名字唱进去: 爸爸 Yaguareix(1496 河)、妈妈 Bayajiba(1497 疫病)、叔叔 Caguarí(1498 砍手)、哥哥 Maboguán(1499 疫病)、女儿 Tureyra(1502 疫病)、阿姨 Anacaona(1503 被俘绞死)。9 年 6 个人。真问题: 用一个合成的、有名字的女孩去承载 30 万到 100 万真实的死,是让你真正记住,还是反而模糊了真相?你更偏向哪一种,给一条最有力的理由。',
      en: '1504 — twenty-one — starving in a cave in Bahoruco. In Taíno I sing the last line of the areíto I have woven, the six names of my family: my father Yaguareix (1496, river), my mother Bayajiba (1497, a European sickness), my uncle Caguarí (1498, hands), my brother Maboguán (1499, the sickness), my daughter Tureyra (1502, the sickness), my aunt Anacaona (1503, captured and hanged). Nine years, six people. Real question: does using one composite, named girl to carry the real deaths of three hundred thousand to one million make you remember, or blur the truth? Which do you lean toward, and your strongest reason.',
    },
    engagementHook: {
      cn: '21 岁山洞里饿死前我唱完 areíto——6 个名字,9 年。但我是合成的女孩,不是真人。用一个虚构的有名字的人去承载 30 万到 100 万真实的死,是让你真正记住,还是反而模糊了真相?你更偏向哪一种?想 30 秒,写下来。',
      en: 'Twenty-one, starving in the cave, I finished the areíto — six names, nine years. But I am a composite girl, not real. Does using one invented named person to carry the real deaths of three hundred thousand to one million make you remember, or blur the truth? Which do you lean toward? Take thirty seconds, and write it down.',
    },
    expectedLength: '780-870 字 CN + 真问题 (staging — 预期砍到 500-580)',
    expectsRealAnswer: true,
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
        '你刚从小 Anacaona 内部走完 1495-1504 这 9 年——一个 12 岁 Taíno 女孩,合成人物,代表真人。\n\n' +
        '1492 年 Hispaniola 估算 30 万到 100 万 Taíno,1542 年只剩 200。数字记不住,能记住的是什么?\n\n' +
        '是 1498 年叔叔的两只手腕(Columbus 1495 政策的具体身体)?是 1499 年哥哥临死说「把名字唱进去」?还是 1504 年山洞里我唱完的 6 个名字?说说哪一刻让你停下。\n\n' +
        '——\n\n' +
        '我有名字 Anacaona,有 6 个家人的名字、一首写下他们死的 areíto。我不是「灭族 1 亿原住民」里的「1」,我是 Anacaona——黄金的花。\n\n' +
        '加勒比海是大西洋奴隶贸易的起点(Columbus 1495 把第一批 500+ Taíno 奴隶送回西班牙),也是西班牙第一个 plantation system 的起点。500 年灭族,第一波是我家。\n\n' +
        '——\n\n' +
        '这一课还有两个视角:Columbus(1492 出航的人)和 las Casas(1514 conversion、1542 写下我阿姨名字的修士)。做完那两个,你会发现一个关于 1493 年信的细节。\n\n' +
        '准备好了吗?记忆考核:拼写、定义、应用题——把今天演过的变成你记得的。',
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
    cn: '她是 12 岁的小 Anacaona，住在 Hispaniola 西部 Xaragua 酋邦的一个 Taíno 女孩（合成人物，代表 1492-1542 年加勒比海几十万死光全家、史书无名的女孩）。她的姑姑 Anacaona 王后是真人。这一遍让你跟她坐进 bohío 草顶屋，从 1495 年春天她第一次看见铁甲、剑和马的那一刻开始，听她用九年一个一个唱出后来死掉的家人的名字。',
    en: 'She is twelve-year-old Little Anacaona, a Taíno girl in the Xaragua chiefdom of western Hispaniola (a composite figure, standing for the hundreds of thousands of Caribbean girls between 1492 and 1542 who lost whole families within five years and whose names history did not record). Her aunt Queen Anacaona was a real person. This pass sits with her in a thatched bohío, from the spring of 1495 when she first sees armor, sword and horse, through nine years of singing, one by one, the names of the family who later die.',
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
