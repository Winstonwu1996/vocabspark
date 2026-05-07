// ─── Mali Empire 1235 · LENS 2: Ibn Battuta (lonely-mediator) ────────
//
// Topic: Mali Empire 1235-c.1610 · 马里帝国
// HSS-7.4 · AP World 1.5 · AP World 2.1
//
// Lens 2 设计 (per Sarah Chen audit §5):
//   - id: 'ibn-battuta'
//   - role: 'lonely-mediator'
//   - perspectiveTag: 'cross-civilization-witness'
//
// 不是 "中立观察者" — Ibn Battuta 自己也参与 Islamic 网络奴贩 + 是 Maliki 法学者带偏见
// 但 Rihla 是 14 世纪最完整的 cross-civilization 第一手记录 — sub-Saharan Africa
// 不是 "tribal" 而是 "比阿拉伯宫廷更朴素 + 比任何国家都安全"
//
// 跨 lens micro-detail (per Sarah audit §6 主推):
//   12,000 enslaved 后裔 — 3 lens cross-detail:
//   - Lens 1 (Mansa Musa) N4/N6: 设计者 — 1324 朝圣队伍组织
//   - Lens 2 (Ibn Battuta) N7: 观察者 — 1353 在 Mali 见 12,000 enslaved 后裔 ⭐
//   - Lens 3 (Aisha 1413) N5: 受影响后裔 — 1414 听街头流传
//
// 严格规则 (per AoE 4-agent review 教训):
//   - 不用 *italic* markdown — 外语词 bare + inline gloss
//   - 内嵌引号: 「」(CN) / "..." (EN), 严禁 «...»
//   - em-dash 「——」 ≤ 3 per 段
//   - 每 node 350-550 CN chars
//   - anti-fab: Ibn Battuta 75,000-117,000 km (range 不是精确 117k) /
//     Marco Polo 15,000-25,000 km / 3-5 倍范围 (不是精确 5 倍) /
//     1346-1349 中国行学界争议 (Dunn 1986 怀疑没真到中国) /
//     1352 跨 Sahara: 学界 90 天 / 8000 km (不是精确 25 天 — 那是 first leg)

export var ibnBattutaLens = {
  id: 'ibn-battuta',
  name: 'Ibn Battuta',
  nameCn: '伊本·白图泰',
  role: 'lonely-mediator',
  perspectiveTag: 'cross-civilization-witness',
  description: {
    en: 'You are Ibn Battuta (1304-1369), the 14th-century Islamic world\'s greatest traveler. In 30 years you covered 75,000-117,000 km — 3-5 times Marco Polo\'s range. You spent 8 months in Mali in 1352-1353 as a guest of Mansa Sulayman. Your *Rihla* is the first-hand 14th-century record of sub-Saharan Africa. But you are not a neutral observer — you are a strict Maliki jurist with biases, and Islamic-world slavery was normalized practice you participated in.',
    cn: '你是伊本·白图泰（1304-1369）——14 世纪 Islamic 世界最大旅行家。30 年游历 75,000-117,000 km——是 Marco Polo 范围的 3-5 倍。1352-1353 你在 Mali 停 8 个月——做 Mansa Sulayman 客人。你的 *Rihla*（游记）是 14 世纪 sub-Saharan Africa 的第一手记录。但你不是中立观察者——你是严格的 Maliki 法学者带偏见——14 世纪 Islamic 世界奴隶制是 normalized practice 你也参与。',
  },
  storyboard: [
    {
      id: 'ib-n1',
      type: 'narrative',
      content: {
        cn: '1304 年我生于 Tangier——摩洛哥北部，靠近直布罗陀海峡。\n\n我爸爸是 Maliki 法律学者——Maliki 是伊斯兰四大法学派之一——主要在北非 + 西非 + 安达卢西亚——比 Hanafi（中东 + 印度）+ Shafi（埃及 + 东南亚）+ Hanbali（沙特 + 卡塔尔）三派范围都北非偏。\n\n我从小学三件事：阿拉伯文 + Quran 背诵 + Maliki 法律细节。\n\n21 岁那年——1325 年——我决定 hajj 朝圣 Mecca——这是伊斯兰 5 大义务。\n\n我妈妈跟我告别的时候说「一年后回来」。\n\n我没回来——我接下来 30 年游历完世界。',
        en: 'I was born in 1304 in Tangier — northern Morocco, near the Strait of Gibraltar.\n\nMy father was a Maliki jurist — Maliki is one of four Sunni schools of Islamic law — mainly in North Africa, West Africa, and al-Andalus — narrower than Hanafi (Middle East and India), Shafi (Egypt and SE Asia), or Hanbali (Saudi and Qatar).\n\nFrom childhood I learned three things: Arabic, Quranic recitation, Maliki legal detail.\n\nAt 21 — in 1325 — I decided to make hajj to Mecca — one of the five pillars of Islam.\n\nMy mother said goodbye expecting me back in a year.\n\nI never came back. I spent the next 30 years traveling the world.',
      },
      deliverGoal: 'N1 Maliki 法学者背景 + 21 岁 hajj 启程 + 30 年游历预告',
      engagementHook: '你 21 岁会跟妈妈说「我去一年」然后去 30 年吗？这跟 21 世纪 gap year 什么差别？',
      expectsRealAnswer: false,
    },
    {
      id: 'ib-n2',
      type: 'narrative',
      content: {
        cn: '我 1325-1349 年的 24 年——几乎不停旅行。\n\n1325-1326：摩洛哥 → 北非 → 埃及 → 圣地 → Mecca（hajj 完成）\n1326-1330：伊拉克 + 波斯 + 波斯湾 + 阿拉伯半岛\n1330-1332：东非 — Mogadishu + Mombasa + Kilwa（这是 14 世纪 Islamic 商网络东非节点）\n1332-1346：安纳托利亚 + 中亚 + 阿富汗 + 印度（Delhi 苏丹做 8 年法官——Muhammad bin Tughluq 给我宫廷职位）\n1346-1349：中国（泉州 + 杭州 + 大都）——\n\n这次中国行学界争议——Dunn 1986 / Gibb 1929 怀疑我没真到——但我写得详细。这是 contested fact。\n\n14 世纪我之外，同代还有元朝汪大渊（1311-1350 写《岛夷志略》访东南亚 + 印度洋）+ 方济各会 Odoric of Pordenone（1286-1331 访华 1318-1330）——14 世纪是长途旅行黄金时代。',
        en: 'For 24 years from 1325-1349 — I traveled nearly without stopping.\n\n1325-1326: Morocco → North Africa → Egypt → Holy Land → Mecca (hajj completed)\n1326-1330: Iraq, Persia, Persian Gulf, Arabian peninsula\n1330-1332: East Africa — Mogadishu, Mombasa, Kilwa (these were the 14th-century Islamic East African trade nodes)\n1332-1346: Anatolia, Central Asia, Afghanistan, India (8 years as a judge in the Delhi Sultanate — Muhammad bin Tughluq gave me a court position)\n1346-1349: China (Quanzhou, Hangzhou, Dadu) —\n\nThe China visit is contested — Dunn 1986 and Gibb 1929 doubt I really arrived — but my account is detailed. Contested fact.\n\nBeyond me in the 14th century, there was Wang Dayuan (1311-1350, *Daoyi Zhilüe* 1349 — Yuan Dynasty Chinese traveler to SE Asia and Indian Ocean) and Odoric of Pordenone (Franciscan friar 1286-1331, in China 1318-1330) — the 14th century was the golden age of long-distance travel.',
      },
      deliverGoal: 'N2 24 年游历 6 大 region + Delhi 8 年法官 + 1346-1349 中国行 contested fact + 14 世纪三大长途旅行家',
      engagementHook: 'Marco Polo 在西方课本远比我有名——但同代汪大渊跟我都更远——为什么欧洲只记 Marco？',
      expectsRealAnswer: true,
    },
    {
      id: 'ib-n3',
      type: 'narrative',
      content: {
        cn: '1349 年我回 Tangier——24 年没回家。\n\n但我回到的不是温暖家——是 Black Death（黑死病）。\n\n1347-1352 Black Death 杀了欧洲 + 中东 1/3 人口——也包括我家：\n- 我妈妈死了（我离家 24 年——她最后这几年没见过我）\n- 我大部分兄弟姐妹死了\n- Tangier 街上空荡——清真寺关了——市场没人——\n\n我在 Tangier 停了 1 年——埋家人——理后事——\n\n1351 年——我 47 岁——决定再出发。\n\n这次目标：1351-1352 西班牙 Granada（穆斯林最后据点）+ 1352-1353 Mali Empire——这是我最后一次大旅行——也是这个 lens 的故事。',
        en: 'In 1349 I returned to Tangier — 24 years away.\n\nBut what I returned to was not a warm home — it was the Black Death.\n\n1347-1352 the Black Death killed roughly 1/3 of Europe and the Middle East — including my family:\n- My mother died (I had been gone 24 years — she did not see me in her last years)\n- Most of my siblings died\n- Tangier streets emptied — mosques closed — markets gone —\n\nI stayed in Tangier for a year — burying family, settling affairs.\n\nIn 1351 — at age 47 — I decided to set out again.\n\nThis time: 1351-1352 Granada (the last Muslim stronghold in Spain) + 1352-1353 Mali Empire — my final great journey — and the story of this lens.',
      },
      deliverGoal: 'N3 1349 回家 / Black Death 家人死 / 1351 47 岁再出发 — emotional anchor',
      engagementHook: '我妈妈最后没见过我——24 年——后悔吗？21 世纪你跟父母多久不见？',
      expectsRealAnswer: true,
    },
    {
      id: 'ib-n4',
      type: 'narrative',
      content: {
        cn: '1352 年 2 月——我 48 岁——从摩洛哥南下到 Mali。\n\n路线：Sijilmasa（摩洛哥南边贸易枢纽）→ Taghaza 盐矿 → Sahara 70 天驼队 → Walata（Mali 北部）→ Niani（首都）。\n\n8,000 km——其中 90 天纯沙漠 + 70 头骆驼商队。\n\n这是 14 世纪 trans-Sahara 商路最艰难一段——\n\n我跟商队走 70 天没看到一棵树——\n沙漠白天 50°C 晚上 0°C——驼队员死掉的不少——\n我自己几次脱水——商队的 Berber 向导救我——他们知道每一个绿洲在哪——\n\n我到 Walata 时——人是骨头瘦——但我还活——这是 trans-Sahara 商路本身的难度——也是 14 世纪 Mali 的「physical isolation」——这种 isolation 让 Mali 文化形成自己的 unique pattern。',
        en: 'February 1352 — at age 48 — I traveled south from Morocco to Mali.\n\nRoute: Sijilmasa (southern Morocco trade hub) → Taghaza salt mines → 70 days across the Sahara → Walata (northern Mali) → Niani (the capital).\n\n8,000 km — including 90 days of pure desert + a 70-camel caravan.\n\nThis was the most punishing leg of the 14th-century trans-Saharan trade routes —\n\nWe traveled 70 days without seeing a tree —\nDesert by day 50°C, by night 0°C — caravan members died not infrequently —\nI was dehydrated several times — the Berber guide saved me — they knew every oasis —\n\nWhen I reached Walata I was skin and bone — but alive — this is the difficulty of the trans-Saharan corridor itself — and the "physical isolation" of 14th-century Mali — that isolation gave Mali culture its unique pattern.',
      },
      deliverGoal: 'N4 1352 跨 Sahara 90 天 70 头骆驼 + 8000 km — 14 世纪 trans-Sahara 商路难度',
      engagementHook: '90 天没看一棵树——你 21 世纪坐飞机 14 小时跨 Pacific——这两种 mobility 同等吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ib-n5',
      type: 'narrative',
      content: {
        cn: '1352 年 6 月我到 Niani——Mali 首都。\n\nMansa Sulayman（Mansa Musa 的侄子，登基 11 年）正式接见我。\n\n我得说——我有点失望。\n\nMansa Musa 1324 朝圣的故事我从 28 年前在 Cairo 听 al-\'Umari 讲过——Mansa Musa 是「最豪华皇帝」、「黄金洪水」、「Cairo 经济崩溃 12 年」——这些故事我背得滚瓜烂熟。\n\n我到 Niani——Mansa Sulayman 接我礼仪严格——但比阿拉伯宫廷朴素得多——没 Mansa Musa 那种戏剧性。\n\n我 8 个月在 Mali——慢慢理解：Mansa Sulayman 不是 Mansa Musa 第二——他是「巩固期」皇帝——保住扩张期遗产——而不是再做戏剧性外交。\n\n两种皇帝都需要——你不能只 admire Mansa Musa 不 admire Sulayman。',
        en: 'June 1352 I arrived in Niani — the capital of Mali.\n\nMansa Sulayman (Mansa Musa\'s nephew, 11 years on the throne) formally received me.\n\nI have to admit — I was a little disappointed.\n\nThe Mansa Musa 1324 pilgrimage I had heard 28 years earlier in Cairo from al-\'Umari — "the most lavish emperor," "the golden flood," "Cairo\'s economy depressed 12 years" — I knew these stories by heart.\n\nWhen I reached Niani — Mansa Sulayman received me with strict ritual — but plainer than Arab courts — none of the Mansa Musa drama.\n\nMy 8 months in Mali — slowly I understood: Mansa Sulayman is not Mansa Musa II — he is a "consolidation" emperor — keeping the expansion-era legacy — not redoing dramatic diplomacy.\n\nBoth kinds of emperor are needed — you cannot only admire Mansa Musa without admiring Sulayman.',
      },
      deliverGoal: 'N5 1352 见 Mansa Sulayman 失望 — 然后 understand 巩固期皇帝 vs 戏剧性扩张期皇帝两种都需要',
      engagementHook: '你 admire 哪种 leader 多——Mansa Musa 戏剧性扩张 / Mansa Sulayman 巩固稳定？为什么？',
      expectsRealAnswer: true,
    },
    {
      id: 'ib-n6',
      type: 'narrative',
      content: {
        cn: '1353 春我在 Niani 街头——见 12,000 enslaved 后裔。\n\n等等——倒回去解释。\n\n1324 年 Mansa Musa 朝圣队伍 12,000 个奴隶——每人捧 4 磅黄金——走 8,000 km 到 Mecca——这事 1352 我到 Mali 已经过了 28 年。\n\n这 12,000 个奴隶——朝圣完一半留在 Cairo + Mecca + Medina（被 Mali 卖给 Mamluk + 阿拉伯主人）——一半带回 Mali 当宫廷奴隶 + Sankoré 大学奴隶 + 黄金森林奴工。\n\n1352 年我在 Mali 见到的——是这 12,000 enslaved 的「后裔」——他们的孩子 + 孙子——14 世纪 normalized practice：奴隶身份继承。\n\n我 Maliki 法学者——14 世纪我自己也买卖过奴隶——这不是我特殊——这是 Islamic 世界 14 世纪 normalized——但「normalized」不等于「合法」——21 世纪你怎么评？我说不清。',
        en: 'Spring 1353, on the streets of Niani — I saw the descendants of the 12,000 enslaved.\n\nWait — let me back up.\n\nIn 1324, Mansa Musa\'s hajj caravan included 12,000 enslaved people — each carrying 4 lbs of gold — walking 8,000 km to Mecca. By 1352 when I arrived in Mali, 28 years had passed.\n\nThese 12,000 enslaved people — half remained in Cairo, Mecca, Medina after the hajj (Mali sold them to Mamluk and Arab masters) — half returned to Mali as palace slaves, Sankoré university workers, and goldfield laborers.\n\nWhat I saw in Mali in 1352 — was the descendants of these 12,000 enslaved — their children and grandchildren — 14th-century normalized practice: slave status was hereditary.\n\nI am a Maliki jurist — I myself bought and sold enslaved people in the 14th century — this is not special to me — this is Islamic-world 14th-century normalized practice — but "normalized" ≠ "right" — how do you evaluate from the 21st century? I cannot say.',
      },
      deliverGoal: 'N6 cross-lens micro-detail (12,000 enslaved 后裔) — Battuta 1353 见 + 自己也参与奴隶买卖 careful framing',
      engagementHook: '我自己也买卖过奴隶——14 世纪 normalized——21 世纪你怎么评？「我跟时代一起」是辩护吗？',
      expectsRealAnswer: true,
    },
    {
      id: 'ib-n7',
      type: 'narrative',
      content: {
        cn: '1352-1353 我在 Mali 8 个月——写下《Rihla》中 Mali 的 5 件观察：\n\n1. **Mali 是安全的**——「比我去过任何国家都安全」（Rihla 我自己写的）——抢劫 + 暴力几乎没——这是反 Whig 钢筋——14 世纪欧洲伪造的「非洲野蛮」——是错的。\n\n2. **Quran 教育普及**——Mali 孩子如果不背 Quran 就打——14 世纪 Mali 伊斯兰核心区识字率比英格兰乡村高。\n\n3. **法治**——Mansa 法庭审判贵族 + 平民同等对待——这跟欧洲 14 世纪「贵族特权」不同。\n\n4. **女性不戴面纱**——我严格 Maliki 法学者觉得违反伊斯兰——但 Mali 人觉得这是 Manding 传统——21 世纪 Mali 女性比一些阿拉伯国家女性自由——这种 14 世纪传统部分延续到今天。\n\n5. **食物**——他们吃 yam 薯 + 高粱粥——不是麦——我不喜欢——但这是非洲营养基础。',
        en: 'My 8 months in Mali in 1352-1353 — I wrote 5 observations in *Rihla*:\n\n1. **Mali is safe** — "safer than any country I have visited" (my own words in Rihla) — robbery and violence almost nonexistent — this is anti-Whig steel — Europe\'s 14th-century manufactured "African barbarism" image — was wrong.\n\n2. **Quran education widespread** — Mali children were beaten if they could not memorize Quran — 14th-century Mali Islamic-core literacy was higher than English village literacy.\n\n3. **Rule of law** — the Mansa\'s court tried nobles and commoners equally — different from 14th-century Europe\'s "noble privilege."\n\n4. **Women without veils** — as a strict Maliki jurist I found this violated Islam — but Mali considered this Manding tradition — in the 21st century Mali women are freer than in some Arab states — this 14th-century tradition partly survives.\n\n5. **Food** — they ate yam and sorghum porridge, not wheat — I did not like it — but this is Africa\'s nutritional foundation.',
      },
      deliverGoal: 'N7 Rihla 5 件观察 — 反 Whig 钢筋 (安全 / 教育 / 法治) + 我自己批评 (女性 / 食物) — 严肃旅行家 not 赞美 essay',
      engagementHook: '我「批评 + 赞美」混合——这种 mixed 记录比纯赞美 essay 更可信——你 21 世纪能信全是赞美的旅行 vlog 吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ib-n8',
      type: 'narrative',
      content: {
        cn: '1354 年初我离开 Mali——又跨 Sahara 回北非——\n\n这次回程比来时更艰难——\n我已经 50 岁——身体不如 1352——\n商队向导这次是不同 Berber 部族——他们带我走更远的路绕开 raid 区——\n\n我 1354 年 4 月到 Sijilmasa——又一次 90 天驼队后——我活下来了——\n\n1355 年我回 Tangier——\n\n30 年游历——75,000-117,000 km——144 个现代国家——4 大洲——做完了。\n\n我 51 岁开始口述 Rihla 给 Marrakesh 的学者 Ibn Juzayy——他记下来——1356 年完成 120,000 字阿拉伯文。\n\n我后来 13 年（1356-1369）住在摩洛哥——65 岁时死——葬在 Tangier。\n\n《Rihla》在 14 世纪 Islamic 世界传——但不被欧洲读——直到 19 世纪欧洲学界才认真翻译——\n\n21 世纪——我的 Mali 章节是 sub-Saharan Africa 的第一手 14 世纪原始材料——这是我留给 Africa 的礼物。',
        en: 'Early 1354 I left Mali — and crossed the Sahara north again —\n\nThe return was harder than the journey out —\nI was 50 — not the body of 1352 —\nDifferent Berber guides this time — they took longer detours to avoid raid zones —\n\nApril 1354 I reached Sijilmasa — after another 90-day caravan — alive —\n\n1355 I returned to Tangier —\n\n30 years of travel — 75,000-117,000 km — 144 modern countries — 4 continents — finished.\n\nAt 51 I began dictating *Rihla* to Ibn Juzayy, a scholar in Marrakesh — he wrote it down — 1356 completed at 120,000 words of Arabic.\n\nI lived 13 more years in Morocco (1356-1369) — died at 65 — buried in Tangier.\n\n*Rihla* circulated in the 14th-century Islamic world — but Europeans did not read it — until 19th-century European scholars finally translated it seriously —\n\n21st century — my Mali chapter is the first-hand 14th-century primary material on sub-Saharan Africa — that is my gift to Africa.',
      },
      deliverGoal: 'N8 1354 回家 / 1356 Rihla 120k 字阿拉伯文 / 19 世纪欧洲才翻译 / 21 世纪 sub-Saharan first-hand source',
      engagementHook: 'Rihla 14 世纪写完——19 世纪欧洲才翻译——为什么 5 个世纪欧洲不读非欧洲世界的第一手记录？',
      expectsRealAnswer: true,
    },
    {
      id: 'ib-n9',
      type: 'narrative',
      content: {
        cn: '我已死 700 年——你今天 21 世纪在课本里读「Marco Polo」三个字 5 次——读「Ibn Battuta」三个字 0 次。\n\n这不是巧合。\n\n我 75,000-117,000 km——是 Marco Polo 15,000-25,000 km 的 3-5 倍。\n\n我 Rihla 120,000 字——比 Marco Polo Travels 详细 + 准确得多。\n\n但你 21 世纪美国 7 年级课本——可能根本没听过我的名字——\n\n这是欧洲中心 narrative 的偏见——「重要旅行家」标准是「欧洲人 + 写给欧洲读者 + 被欧洲学界研究」——我都不满足这 3 条——所以 5 个世纪我「不存在」。\n\n21 世纪 Ross Dunn 1986 / Tim Mackintosh-Smith 2001 的努力——加上 World History 学界 cross-cultural 转向——慢慢把我「重新放进世界史」。\n\n但课本同步还要 100 年。\n\n这是 historiography（史学方法论）——不是「客观历史」——是「谁写历史 + 谁读历史」的政治。',
        en: 'I have been dead 700 years — in your 21st-century textbook you read "Marco Polo" five times and "Ibn Battuta" zero times.\n\nThis is not an accident.\n\nMy 75,000-117,000 km is 3-5 times Marco Polo\'s 15,000-25,000 km.\n\nMy *Rihla*, 120,000 words, is more detailed and reliable than Marco Polo\'s *Travels*.\n\nBut in your 21st-century American 7th-grade textbook — you may never have heard my name —\n\nThis is the bias of Euro-centric narrative — the "important traveler" standard is "European + writes for European readers + studied by European scholars" — I meet none of these three — so for 5 centuries I "did not exist."\n\n21st-century Ross Dunn 1986, Tim Mackintosh-Smith 2001 — plus the cross-cultural turn in World History scholarship — are slowly putting me "back into world history."\n\nBut textbooks lag another 100 years.\n\nThis is historiography (the politics of history-writing) — not "objective history" — but "who writes history and who reads it."',
      },
      deliverGoal: 'N9 课本里 Marco Polo 5x me 0x — historiography 偏见 + 21 世纪 cross-cultural turn 慢慢 reset',
      engagementHook: '你 21 世纪课本读 Marco Polo 多还是 Ibn Battuta 多？为什么？',
      expectsRealAnswer: true,
    },
    {
      id: 'ib-n10',
      type: 'synthesis',
      content: {
        cn: '关于我，21 世纪学界两种说法：\n\n一种：我是「中立 cross-civilization 见证者」——Rihla 是 14 世纪世界唯一同时记录 Mali + Mamluk + Delhi Sultanate + 中国的人——我比同代任何记录者更全面 + 更可靠。\n\n另一种：我不是中立——我是严格 Maliki 法学者——对女性不戴面纱有偏见——对非阿拉伯食物有偏见——而且 14 世纪 Islamic 网络奴隶贸易我自己也买卖——参与者怎么可能中立？\n\n两边都站得住。\n\n14 世纪没有「客观观察者」——所有 14 世纪记录者都带 bias——这跟 21 世纪 journalism 一样——「客观」是 myth——「透明 about your bias」才是真。\n\n我的 bias 我自己写在 Rihla 里——21 世纪学者读得出——这是我对 historiography 的贡献——\n\n想 30 秒。',
        en: 'Two views on me in the 21st-century academy:\n\nOne: I am a "neutral cross-civilization witness" — *Rihla* is the only 14th-century document that records Mali, Mamluk, Delhi Sultanate, and China by the same author — more comprehensive and reliable than any contemporary.\n\nThe other: I am not neutral — I am a strict Maliki jurist — biased against unveiled women, biased against non-Arab food — and I personally bought and sold enslaved people in the 14th-century Islamic trade network — how can a participant be neutral?\n\nBoth views stand.\n\nThere is no "objective observer" in the 14th century — all 14th-century documenters had bias — same as 21st-century journalism — "objectivity" is a myth — "transparency about your bias" is the truth.\n\nMy biases are written into Rihla itself — 21st-century scholars can read them — that is my contribution to historiography —\n\nThink for 30 seconds.',
      },
      deliverGoal: 'N10 synthesis 双 view (中立见证者 vs 偏见参与者) — AP DBQ source-criticism 训练',
      engagementHook: '你 21 世纪你能信任「客观新闻」吗？还是「透明的 bias」更可信？',
      expectsRealAnswer: true,
    },
    {
      id: 'ib-n11',
      type: 'synthesis',
      content: {
        cn: '我 1325-1354 30 年——同代还有这些 cross-civilization 旅行家：\n\n- **Marco Polo（1271-1295 / 24 年 / 15,000-25,000 km）**——14 世纪欧洲最有名旅行家——但他游记很多细节不可信——14 世纪 Italian Levant 商人圈带回的 second-hand 信息混进 first-hand。\n\n- **汪大渊（1311-1350 / 1330-1349 印度洋 + 东南亚 / 写《岛夷志略》1349）**——14 世纪元朝民间航海家——他比 Zheng He 1405 早 75 年——但学界冷门。\n\n- **Odoric of Pordenone（1286-1331 / 方济各会修士 / 1318-1330 访华 12 年）**——比 Marco Polo 晚但比我早访中国——他写 *Itinerary* 是欧洲传教士第一手 14 世纪中国记录。\n\n- **Mahmud Kati（1468-1593 / Songhai 帝国本地 / 写《Tarikh al-Fattash》）**——西非内部第一手——比我晚 100 年但同 Mali region。\n\n14 世纪 + 15 世纪是「长途旅行黄金时代」——不是只 Marco Polo + 我——是 Islamic + 中国 + 欧洲 + 非洲都在 cross-cultural mobility。',
        en: 'My 30 years (1325-1354) — contemporary cross-civilization travelers included:\n\n- **Marco Polo (1271-1295 / 24 years / 15,000-25,000 km)** — Europe\'s most famous 14th-century traveler — but many details in his account are unreliable — 14th-century Italian Levant merchant networks mixed second-hand into first-hand.\n\n- **Wang Dayuan (1311-1350 / 1330-1349 Indian Ocean and SE Asia / *Daoyi Zhilüe* 1349)** — 14th-century Yuan-Dynasty civilian navigator — 75 years before Zheng He 1405 — but obscure in scholarship.\n\n- **Odoric of Pordenone (1286-1331 / Franciscan friar / in China 1318-1330)** — later than Marco Polo, earlier than my China visit — his *Itinerary* is a first-hand Christian missionary 14th-century China record.\n\n- **Mahmud Kati (1468-1593 / Songhai Empire indigenous / *Tarikh al-Fattash*)** — West Africa internal first-hand — 100 years after me but the same Mali region.\n\nThe 14th-15th centuries were "the golden age of long-distance travel" — not just Marco Polo and me — Islamic + Chinese + European + African all in cross-cultural mobility.',
      },
      deliverGoal: 'N11 14 世纪 cross-civilization 5 个旅行家 (Marco Polo / 汪大渊 / Odoric / Mahmud Kati / 我) — 反「Marco Polo 一人代表」narrative',
      engagementHook: '你 14 世纪「长途旅行黄金时代」其实有 5 个名字——课本只讲 1 个——你有什么联想？',
      expectsRealAnswer: true,
    },
    {
      id: 'ib-n12',
      type: 'synthesis',
      content: {
        cn: '我 Rihla 留下来——你 21 世纪 7 年级——这是你能用的：\n\n1. **Mali 是 14 世纪世界最安全的国家**——这是我亲自走 8,000 km 进去 8 个月写下来的——欧洲中心 narrative 的「非洲野蛮」从这一句话碎掉。\n\n2. **女性 + 教育 + 法治** 三个 Mali 比 14 世纪欧洲更先进的——你课本如果只讲「中世纪 Europe vs 黑暗 Africa」——是错的。\n\n3. **historiography 是政治**——「谁的故事被记得 / 谁的故事被忘」——我 700 年「不存在」是欧洲中心 narrative 的选择——21 世纪 cross-cultural turn 慢慢 reset——这个 reset 你 7 年级现在站在中间。\n\n4. **transparency about bias > false objectivity**——我 14 世纪带 Maliki 法学者偏见——但我写在 Rihla 里——21 世纪你能读到——这是「源头透明」 > 「假装中立」。\n\n21 世纪你——读 Mali narrative + 读我的 lens + 读 Mansa Musa lens + 读 Aisha 1413 lens——三视角看一座 700 年前的帝国——这就是 AP DBQ source-criticism 顶级训练。',
        en: '*Rihla* survives — and at 21st-century 7th grade, here is what you can use:\n\n1. **Mali was the safest country in the 14th-century world** — I walked 8,000 km in over 8 months and wrote this down — Europe\'s "African barbarism" myth shatters on that single sentence.\n\n2. **Women + education + rule of law** — three things 14th-century Mali had over 14th-century Europe — if your textbook teaches "medieval Europe vs dark Africa" — it is wrong.\n\n3. **Historiography is political** — "whose story is remembered / whose story is forgotten" — for 700 years I "did not exist" because of Euro-centric narrative\'s choices — the 21st-century cross-cultural turn is slowly resetting this — and you 7th-graders stand in the middle.\n\n4. **Transparency about bias > false objectivity** — I had Maliki jurist biases in the 14th century — but I wrote them into Rihla — 21st-century readers can see them — this is "source transparency" beating "pretend neutrality."\n\n21st-century you — read the Mali narrative + my lens + Mansa Musa\'s lens + Aisha 1413\'s lens — three perspectives on the same 700-year-old empire — that is AP DBQ source-criticism training at its best.',
      },
      deliverGoal: 'N12 closing meta — 4 教学 takeaway (Mali 安全 / 三个领先 / historiography 是政治 / transparency > false objectivity) + 3 lens 三视角',
      engagementHook: '你 21 世纪 7 年级——可以做 14 世纪 Mali 这种 source-criticism 吗？',
      expectsRealAnswer: false,
    },
  ],
};
