// ─── Mali Empire 1235 · LENS 1: Mansa Musa I (perpetrator-actor) ─────
//
// Topic: Mali Empire 1235-c.1610 · 马里帝国
// HSS-7.4 · AP World 1.5 · AP World 2.1 (cross-Sahara networks)
//
// Lens 1 设计 (per Sarah Chen audit §5):
//   - id: 'mansa-musa'
//   - role: 'perpetrator-actor'
//   - perspectiveTag: 'imperial-system-projector'
//
// 不是 "黄金朝圣豪华炫耀" 二元化——而是 14 世纪 Mali 帝国通过 1324 朝圣
// 系统性 wealth-projection 软实力外交——跟 21 世纪一带一路 / 马歇尔计划同 pattern
//
// 跨 lens micro-detail (per Sarah audit §6 主推):
//   12,000 enslaved × 4 磅黄金 朝圣队伍 — 3 lens cross-detail:
//   - Lens 1 (Mansa Musa) N4/N6: 设计者 — 1324 朝圣队伍组织 + Cairo 黄金价格下降
//   - Lens 2 (Ibn Battuta) N7: 观察者 — 1353 见这些奴隶后裔 + 自己也参与 Islamic 网络奴贩
//   - Lens 3 (Aisha 1413) N5: 受影响后裔 — 听街头流传 89 年前祖国故事
//
// 4 Topic visual-anchor 四面体 (Renaissance 镜子 / Reformation 95 Theses /
// AoE 黑曜石镜子 / Mali Sundiata 7 岁拔猴面包树) — N1 reference
//
// 严格规则 (per AoE 4-agent review 教训):
//   - 不用 *italic* markdown — 外语词 bare + inline gloss
//   - 内嵌引号: 「」(CN) / "..." (EN), 严禁 «...»
//   - em-dash 「——」 ≤ 3 per 段
//   - 每 node 350-550 CN chars (强控)
//   - anti-fab: 黄金 25% 下降 al-'Umari 个人记录 (不是"通胀第一次") /
//     Sankoré 14 世纪 5,000-10,000 学者 (不是 25,000 — 那是 16 世纪 Askia 时期) /
//     "4000 亿美金 比 Bezos 富" 是 Time Magazine 2012 myth, 14 世纪没有 GDP 衡量

export var mansaMusaLens = {
  id: 'mansa-musa',
  name: 'Mansa Musa I',
  nameCn: '曼萨·穆萨一世',
  role: 'perpetrator-actor',
  perspectiveTag: 'imperial-system-projector',
  description: {
    en: 'You are Mansa Musa I Keita (~1280-1337), 9th Mansa of the Mali Empire. In 1324 you led the most strategically calculated imperial soft-power projection in pre-modern history — 60,000 people, 12,000 enslaved Africans each carrying 4 lbs of gold, 80 camels carrying 300 lbs each — turning a religious pilgrimage into the 14th-century equivalent of the Belt and Road Initiative + Marshall Plan combined. You re-mapped Europe\'s mental geography of West Africa for 200 years.',
    cn: '你是曼萨·穆萨一世·凯塔（约 1280-1337）——Mali 帝国第 9 任 Mansa。1324 年你领导前现代史上最有战略计算的帝国软实力外交——60,000 人队伍 + 12,000 个奴隶各捧 4 磅黄金 + 80 头骆驼各驮 300 磅——把宗教朝圣变成 14 世纪版的「一带一路」加「马歇尔计划」。你重塑了欧洲对西非 200 年的认知地图。',
  },
  storyboard: [
    {
      id: 'mm-n1',
      type: 'narrative',
      content: {
        cn: '约 1280 年我出生在 Mali 的王室——我爷爷的爷爷是 Sundiata 的兄弟 Manding Bory。Sundiata——你听过那个名字吗——他 7 岁的时候是腿瘸的孩子。村里人嘲笑他。有一天他用双手撑着拔起一棵猴面包树（baobab，西非 sacred 大树）——从那天起整个 Manding 部族叫他 lion king。后来他打赢 1235 Kirina 战役推翻 Sosso——开创 Mali 帝国——他是我们家族的源头。\n\n我从小学三种东西：Manding 口传历史（jeli 唱给我听）；Quran 阿拉伯文（我读 Sharia 法律）；政治训练（Mali 宫廷规矩）。\n\n14 世纪你听过的「非洲帝国」名字里——可能就 Mali——这不是巧合。我接班的不是普通王朝。',
        en: 'I was born around 1280 in Mali royalty — my great-great-grandfather was Manding Bory, brother of Sundiata. Sundiata — have you heard that name? He was a lame boy at 7. The villagers mocked him. One day he pulled up a baobab tree (the sacred West African tree) with his bare hands — from that day the entire Manding people called him the lion king. Later he won the 1235 Battle of Kirina, overthrew Sosso, and founded the Mali Empire. He is the source of my family.\n\nFrom childhood I learned three things: Manding oral history (the jeli sang it to me); Quranic Arabic (I read Sharia law); political training (Mali court ritual).\n\nIf you have ever heard of a "medieval African empire" — it is probably Mali. That is not an accident. The throne I inherited was not ordinary.',
      },
      deliverGoal: 'N1 hook — 通过 Sundiata 7 岁拔猴面包树建立 4 Topic visual-anchor 四面体 + Mali 帝国王室出身 + 三种教育',
      engagementHook: '你 14 岁的时候做过类似 Sundiata 7 岁那种「证明自己」的事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mm-n2',
      type: 'narrative',
      content: {
        cn: '1312 年——前任皇帝 Abu Bakr II 离奇消失了。\n\n他 1311 年带 2,000 艘船 + 几千人——想跨大西洋——没回来。\n\n（注：这个故事的唯一来源是我自己——1324 在 Cairo 跟 al-\'Umari 说的。Levtzion 1973 / Brooks 1993 主流学界认为这可能是我政治叙事掩盖政变。Van Sertima 1976 *They Came Before Columbus* 提了 pre-Columbian 跨大西洋假说——但至今没考古证据——大多学界不接受——这是 contested fact 不是 confirmed history。我不替自己辩护——你想 30 秒。）\n\n1312 我 32 岁登基。Mali 帝国此时领土约 1,000,000 km²——但还在扩张期。我接班——但要把这帝国推到顶。',
        en: 'In 1312 — the previous emperor Abu Bakr II vanished. In 1311 he set sail with 2,000 ships and several thousand men, attempting to cross the Atlantic — and never returned.\n\n(Note: the only source for this story is me — 1324 in Cairo, told to al-\'Umari. Mainstream scholarship — Levtzion 1973, Brooks 1993 — considers this possibly my political narrative covering up a coup. Van Sertima\'s 1976 *They Came Before Columbus* proposed a pre-Columbian Atlantic hypothesis — but there is no archaeological evidence — most scholars do not accept it — this is a contested fact, not confirmed history. I will not defend myself. You think for 30 seconds.)\n\nIn 1312 at age 32 I took the throne. Mali had ~1,000,000 km² but was still expanding. I inherited — but my job was to push it to its peak.',
      },
      deliverGoal: 'N2 contested-fact 即位 + Abu Bakr II 学界争议 (反 Whig 钢筋) + 32 岁年龄锚',
      engagementHook: '你信我的 Abu Bakr II 跨大西洋故事吗？为什么？',
      expectsRealAnswer: true,
    },
    {
      id: 'mm-n3',
      type: 'narrative',
      content: {
        cn: '1312-1324 年——我做了三件事把 Mali 推到顶：\n\n1. 扩张领土——西到大西洋（今天塞内加尔）；北到 Walata 和 Timbuktu（征服北部 trans-Sahara 贸易枢纽）；东到 Gao（后来 Songhai 帝国核心）；南到 Bambuk + Bure 黄金森林。1325 年 Mali 1,800,000 km² + 4-5 千万人——比同期英国 + 法国 + 神圣罗马帝国之和大。\n\n2. 行政体系——12 个省，每个由我任命的总督管。税收 + 军事 + 司法都通过总督集中。这跟同代中国朝廷-郡县体系结构相似。\n\n3. 推广 Islamic 教育——我自己虔诚 Muslim。我资助清真寺 + 学校 + 14 世纪 Sankoré（萨科雷大学，Timbuktu）——让阿拉伯学者来 Mali、Mali 学者去阿拉伯——双向交流。\n\n这三件事 12 年我做完——1324 我已经准备好做更大的事。',
        en: 'From 1312 to 1324, three things to push Mali to its peak:\n\n1. Territorial expansion — west to the Atlantic (modern Senegal); north to Walata and Timbuktu (capturing the trans-Saharan trade hubs); east to Gao (later the heart of Songhai); south to Bambuk and Bure goldfields. By 1325, Mali was 1,800,000 km² with 40-50 million people — larger than England + France + the Holy Roman Empire combined at the time.\n\n2. Administrative system — 12 provinces, each managed by a governor I appointed. Tax + military + judicial concentrated through governors. Structurally similar to contemporary China\'s court-prefecture system.\n\n3. Promoting Islamic education — I was a devout Muslim. I funded mosques, schools, and the 14th-century Sankoré (in Timbuktu) — bringing Arab scholars to Mali, sending Mali scholars to the Arab world.\n\nThree things in 12 years. By 1324 I was ready to do something bigger.',
      },
      deliverGoal: 'N3 帝国巩固 — 4 方扩张 + 12 省体系 + Sankoré 教育 + 跟同代中国对比',
      engagementHook: '同代英国 + 法国 + 神圣罗马帝国之和都没 Mali 大——你之前听过这个 fact 吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mm-n4',
      type: 'narrative',
      content: {
        cn: '1324 年——我 44 岁——决定 hajj（朝圣 Mecca）。\n\n朝圣是 Islam 5 大义务之一——但我不只是去做义务——我把它变成史上最大规模的政治 + 经济外交：\n\n- 60,000 人队伍\n- 12,000 个奴隶（注：这 12,000 enslaved 是 Mali 跨撒哈拉奴贩链条的人——Mali 帝国本身有内部奴隶制——14 世纪 Islamic 世界 normalized practice——但「normalized」≠「合法」。21 世纪你怎么评——想 30 秒。）每个奴隶捧 4 磅黄金\n- 80 头骆驼每头驮 300 磅黄金\n- 我妻子 + 500 个侍从女\n- 数千头骆驼 + 马 + 食物\n\n总价值约 18 吨黄金——\n\n这是 1324 年 7 月——8,000+ km 路线——Niani → Walata → Timbuktu → Sahara 70 天驼队 → Sijilmasa → Fez → Tunis → Cairo → Sinai → Mecca。',
        en: 'In 1324, at age 44, I decided to make hajj (pilgrimage to Mecca).\n\nHajj is one of the 5 pillars of Islam — but I was not just performing duty. I turned it into the largest political-economic projection in history:\n\n- 60,000 people\n- 12,000 enslaved people (note: these 12,000 enslaved came from Mali\'s trans-Saharan slave-trading chains — Mali itself had internal slavery — 14th-century Islamic world normalized practice — but "normalized" ≠ "right." How do you evaluate this from the 21st century — think for 30 seconds.) Each carrying 4 lbs of gold.\n- 80 camels each carrying 300 lbs of gold\n- My wife + 500 attending women\n- thousands of camels, horses, food supplies\n\nTotal worth ~18 tons of gold.\n\nJuly 1324 — 8,000+ km route — Niani → Walata → Timbuktu → 70 days across the Sahara → Sijilmasa → Fez → Tunis → Cairo → Sinai → Mecca.',
      },
      deliverGoal: 'N4 cross-lens micro-detail #1: 12,000 enslaved + 4 磅黄金 + 80 头骆驼 (Producer 视角) — 14 世纪 Islamic 世界奴隶制 careful framing',
      engagementHook: '我把 12,000 个奴隶当工具拿出来用——14 世纪的我不觉得这有问题——但 21 世纪的你呢？',
      expectsRealAnswer: true,
    },
    {
      id: 'mm-n5',
      type: 'narrative',
      content: {
        cn: '1324 年 7 月我到 Cairo。\n\n我在 Cairo 停 3 个月——这是路线最长一段。\n\n我做的事：\n- 每周日给穷人发金币（marabout 街边的 ulama 来排队）\n- 送几百枚金币给 Mamluk 苏丹 al-Nasir Muhammad\n- 大量买 Cairo 货物——付金子\n- 资助 Cairo 学者 + 清真寺\n\n这不是炫耀。这是计算过的：让 Cairo 永远记住 Mali 是真正的强大帝国——让阿拉伯学者把 Mali 的故事带回家——让欧洲商人听到——让全世界 Islamic 网络重新认识非洲。\n\n14 世纪没有 social media——但 1324 年那 3 个月在 Cairo——是 Mali 的 viral moment。al-\'Umari（Cairo 学者，1300-1349）见我——他后来写了 *Masalik al-Absar*——把我的样貌、礼仪、财富、政治都记下来。',
        en: 'July 1324 I arrived in Cairo. I stayed 3 months — the longest stop on the route.\n\nWhat I did:\n- handed out gold coins to the poor every Sunday (the ulama lined up alongside marabouts on the streets)\n- sent hundreds of gold coins to Mamluk Sultan al-Nasir Muhammad\n- bought massive quantities of Cairo goods — paid in gold\n- funded Cairo scholars and mosques\n\nThis was not showing off. This was calculated: make Cairo remember Mali as a truly powerful empire forever — make Arab scholars bring Mali\'s story home — let European merchants hear of it — make the entire Islamic network recognize Africa anew.\n\nThere was no social media in the 14th century — but those 3 months in Cairo in 1324 were Mali\'s viral moment. al-\'Umari (Cairo scholar, 1300-1349) met me — he later wrote *Masalik al-Absar* — recording my appearance, ritual, wealth, and politics.',
      },
      deliverGoal: 'N5 Cairo 3 个月 wealth projection — 不是炫耀, 是 14 世纪 viral moment / 跟 social media 对比',
      engagementHook: '你 21 世纪 viral 看到一个 post——什么决定它能不能 viral？我 1324 年在 Cairo 做的，跟 21 世纪算法什么关系？',
      expectsRealAnswer: false,
    },
    {
      id: 'mm-n6',
      type: 'narrative',
      content: {
        cn: '我 3 个月在 Cairo——结果 Cairo 黄金价格下降了约 25%。\n\n（学术 caveat：al-\'Umari 1300-1349 同代埃及学者写的——这是他个人定性观察——不是经济数据。al-\'Umari 自己写「持续到我写本书时约 12 年还在影响」——但 al-\'Umari 是文学性记述。现代经济史 Goldberg 2012 / Borsch 2005 估计实际影响 5-10 年——程度学界争议——部分研究认为 Black Death 1347-1349 才是 Mamluk 经济真正崩溃。）\n\n这不是「人类第一次通货膨胀」——\n罗马 3 世纪 Diocletian 银币贬值 + 中国汉武帝五铢钱通胀 + 13-14 世纪元朝交钞 hyperinflation——都比我 1324 早。\n\n这是「第一次有记录的单笔金子破坏一国经济」事件——14 世纪没人做过这种规模的单笔财富动员——欧洲对 Mali Empire 的认知，从这一刻起永远改变了。',
        en: 'My 3 months in Cairo — gold price in Cairo fell ~25%.\n\n(Scholarly caveat: al-\'Umari, contemporary Cairo scholar 1300-1349, wrote this — it is his personal qualitative observation, not economic data. al-\'Umari himself wrote "still affecting Cairo about 12 years later as I write" — but al-\'Umari is literary, not statistical. Modern economic history — Goldberg 2012, Borsch 2005 — estimate real impact 5-10 years — extent contested — some scholars argue the Black Death 1347-1349 was the actual collapse of the Mamluk economy.)\n\nThis was NOT "humanity\'s first inflation."\nRome\'s 3rd-century Diocletian denarius debasement + Han China\'s wuzhu coin inflation + 13-14th-century Yuan jiaochao hyperinflation — all predate my 1324.\n\nThis was the first recorded single-injection-of-foreign-wealth-collapsing-a-foreign-economy event. No one in the 14th century had done single-event wealth mobilization at this scale. From that moment, Europe\'s mental map of the Mali Empire was permanently rewritten.',
      },
      deliverGoal: 'N6 cross-lens micro-detail #2 — Cairo 25% 黄金价格下降 (al-\'Umari 个人定性观察) + 反 Whig 修正 (不是"通胀第一次") + Black Death 干扰因素',
      engagementHook: '我做了「单笔金子破坏一国经济」——但同代中国元朝交钞通胀比我大得多。为什么 14 世纪欧洲只记我，不记中国？',
      expectsRealAnswer: false,
    },
    {
      id: 'mm-n7',
      type: 'narrative',
      content: {
        cn: '我见 Mamluk 苏丹 al-Nasir Muhammad——出了一件事。\n\nMamluk 礼仪：外来客必须 kiss 苏丹的脚 + 跪拜。\n\n我拒绝。\n\n我说：「我作为 Mali 皇帝——我只跪拜上帝——我不跪任何人。」\n\nMamluk 苏丹愤怒——但我 60,000 人队伍 + 18 吨黄金让他不能强迫我。最后我们妥协——我用 Islamic 礼（朝 Mecca 方向跪——而不是朝苏丹）——保留我的尊严——也展示对真正信仰的忠诚。\n\n这件事让 Cairo 阿拉伯学者写了详细记录——他们惊讶——一个非洲皇帝居然敢对 Mamluk 苏丹这种强国主体性这么强。\n\n14 世纪欧洲 + 中东对非洲的刻板印象——「部落、土著、没有正式帝国结构」——从那一刻碎了。Mali 不是部落——是真正的帝国。',
        en: 'I met Mamluk Sultan al-Nasir Muhammad — and an incident occurred.\n\nMamluk court ritual: a foreign visitor must kiss the sultan\'s feet and prostrate.\n\nI refused.\n\nI said: "As Emperor of Mali — I prostrate only to God — I prostrate to no man."\n\nThe Mamluk sultan was furious — but my 60,000 people and 18 tons of gold meant he could not force me. We compromised — I prayed in the Islamic manner (prostrating toward Mecca, not toward the sultan) — preserving my dignity, demonstrating loyalty to true faith.\n\nThis exchange — Arab scholars in Cairo wrote detailed accounts — they were shocked: an African emperor dared to assert sovereignty against a regional powerhouse like the Mamluks.\n\nThe 14th-century European and Middle Eastern stereotype of Africa — "tribal, indigenous, no formal imperial structure" — shattered in that moment. Mali was not a tribe. It was a true empire.',
      },
      deliverGoal: 'N7 Cairo 礼仪危机 — 主体性 + 拒跪 + 用 Islamic 礼妥协 — 反 Whig 力度顶级 (推翻"非洲只是部落"刻板)',
      engagementHook: '我拒绝跪 Mamluk 苏丹——但我跪 Mecca 方向。这是「主体性」还是「换一种屈从」？',
      expectsRealAnswer: true,
    },
    {
      id: 'mm-n8',
      type: 'narrative',
      content: {
        cn: '1324 年 11-12 月我到 Mecca + Medina——完成 hajj 5 个核心仪式：Tawaf（绕 Kaaba 7 次）/ Sa\'i（在 Safa 和 Marwa 山间跑）/ Wuquf（在 Arafat 山祈祷一天）/ Ramy（向 3 个柱子扔石头——象征对抗 Devil）/ Idiyya（献牲）。\n\n我也留大量金子给 Mecca + Medina——\n\n但我带回 Mali 的不是更多财富——是知识。\n\n我把 Cairo 学的天文台仪器、把建筑师 al-Sahili（Granada 出生 / Cairo 受教育）、把 ulama 学者、把 Quran 抄本——一起带回 Mali。\n\nal-Sahili 不是普通建筑师——他后来设计 Timbuktu 的 Sankoré 大清真寺 + Djinguereber 大清真寺——苏丹—撒哈拉土砖建筑（Sudano-Sahelian style）从他开始。\n\n你今天看 Timbuktu 的照片——那种泥土黄褐色的清真寺——al-Sahili 设计——我 1325 带回 Mali。',
        en: 'November-December 1324 I arrived in Mecca and Medina — and completed the 5 core hajj rituals: Tawaf (7 circles around the Kaaba) / Sa\'i (running between the hills of Safa and Marwa) / Wuquf (a day of prayer at Mount Arafat) / Ramy (throwing stones at 3 pillars — symbolic battle with Devil) / Idiyya (sacrifice).\n\nI left massive amounts of gold in Mecca and Medina —\n\nBut what I brought back to Mali was not more wealth — it was knowledge.\n\nI brought back the astronomical instruments I had learned about in Cairo, the architect al-Sahili (born in Granada, educated in Cairo), Islamic scholars (ulama), Quran manuscripts — all together.\n\nal-Sahili was no ordinary architect — he later designed Timbuktu\'s Sankoré Great Mosque and the Djinguereber Mosque — the Sudano-Sahelian mud-brick style begins with him.\n\nLook at photos of Timbuktu today — that earthen yellow-brown mosque silhouette — al-Sahili designed it. I brought him back in 1325.',
      },
      deliverGoal: 'N8 Mecca/Medina hajj 完成 + 带回 al-Sahili 建筑师 + Sudano-Sahelian style 起源 — 知识 > 财富',
      engagementHook: '我 18 吨黄金出去，带回的不是钱——是知识 + 一个建筑师。这个 priority 21 世纪我们怎么评？',
      expectsRealAnswer: false,
    },
    {
      id: 'mm-n9',
      type: 'narrative',
      content: {
        cn: '1325-1327 年回 Mali——我做的事是：扩建 Sankoré。\n\nSankoré（萨科雷大学，在 Timbuktu）是 Mali 的「Quran 学习中心」——我资助 al-Sahili 重建 Sankoré 大清真寺 + 大学。\n\n这里要 careful：\n\n14 世纪 Mansa Musa 时期 Sankoré 学者数估算 5,000-10,000 人（学界 estimate range）——大学还在 building 阶段。\n\n16 世纪 Songhai 帝国 Askia 时代——Sankoré 才达到 25,000 学生（峰值）——这时候我已经死了 200 年。\n\n21 世纪 Timbuktu Manuscripts Project——70 万册手稿——是 14-19 世纪累计 + 21 世纪幸存数——不是 14 世纪当时的存量。\n\n14 世纪 + 16 世纪 + 21 世纪——三个数字三个不同时间点——你不能混着说。\n\n但 14 世纪 Sankoré 我建立的基础——为 16 世纪 Askia 的 25,000 学生 + 21 世纪 70 万册幸存手稿——是直接源头。',
        en: '1325-1327 back in Mali — what I did was expand Sankoré.\n\nSankoré (in Timbuktu) was Mali\'s "Quranic learning center" — I funded al-Sahili to rebuild the Sankoré Great Mosque and university.\n\nHere we have to be careful:\n\n14th-century Mansa Musa era Sankoré scholars estimated at 5,000-10,000 (scholarly estimate range) — the university was still in building phase.\n\n16th-century Songhai Empire under Askia — Sankoré reached 25,000 students (peak) — by then I was dead 200 years.\n\n21st-century Timbuktu Manuscripts Project — 700,000 manuscripts — is the 14th-19th-century accumulated total surviving as of the 21st century — not the 14th-century stock.\n\n14th + 16th + 21st century — three numbers, three different time points — you cannot conflate them.\n\nBut the 14th-century Sankoré foundation I built was the direct source for Askia\'s 25,000 in the 16th century — and the 700,000 surviving manuscripts in the 21st.',
      },
      deliverGoal: 'N9 Sankoré 14 世纪基础 + 三个时点学者数修正 (Sarah audit P0.3 — anti-fab)',
      engagementHook: '14 世纪 5,000-10,000 / 16 世纪 25,000 / 21 世纪 70 万——三个数字混淆了 200 年。这跟 Mansa Musa "4000 亿美金 比 Bezos 富" myth 是同一种问题吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mm-n10',
      type: 'synthesis',
      content: {
        cn: '我 1337 年死——57 岁。我儿子 Mansa Maghan 即位——但 14 世纪后期 Mali 衰退——15 世纪开始 Songhai 崛起——1591 年 Songhai/摩洛哥 Tondibi 之战后 Mali 实际不存在了。\n\n我 13 年朝圣 + 12 年扩张——一辈子换来什么？\n\n一种说法：我是「imperial soft-power projector」——1324 朝圣是计算过的外交。我把 Mali 重新植入欧洲 + 阿拉伯认知地图——为接下来 200 年 Mali 国际地位铺路。\n\n另一种说法：我是「14 世纪 wealth display 第一人」——18 吨黄金散在 Cairo + Mecca——是炫耀。我让 Cairo 经济崩 5-10 年。我让 12,000 个奴隶捧着金子走 8,000 km——这是 imperialism 不是 diplomacy。\n\n两边都站得住。想 30 秒。',
        en: 'I died in 1337 at 57. My son Mansa Maghan took the throne — but Mali declined in the late 14th century. Songhai rose in the 15th. After the 1591 Battle of Tondibi (Songhai vs Morocco), Mali effectively ceased to exist.\n\n13 years of pilgrimage planning, 12 years of expansion — what was it for?\n\nOne reading: I was an imperial soft-power projector. The 1324 hajj was calculated diplomacy. I re-implanted Mali into Europe and the Arab world\'s mental map — paving 200 years of international status.\n\nAnother reading: I was the first 14th-century wealth-display showman. 18 tons of gold scattered across Cairo and Mecca — pure showing off. I tanked the Cairo economy for 5-10 years. I marched 12,000 enslaved people 8,000 km holding gold — that is imperialism, not diplomacy.\n\nBoth readings stand. Think for 30 seconds.',
      },
      deliverGoal: 'N10 synthesis 双 view (soft-power projector vs wealth-display showman) — AP DBQ hold contradiction 30 seconds',
      engagementHook: '两边都站得住——你的 30 秒过去了——你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'mm-n11',
      type: 'synthesis',
      content: {
        cn: '我 1324 朝圣 700 年后——21 世纪世界——你看到 imperial soft-power projection 的另外几种版本：\n\n2013 年中国一带一路——基础设施贷款 + 港口建设 + 铁路出口——把中国资本注入沿线国家。\n\n1948 年美国马歇尔计划——130 亿美金援助欧洲战后重建——把美国 dollar + 政治模式植入西欧。\n\n1990s 美国 NBA 全球化——通过篮球文化把 American soft power 输出到中国 + 巴西 + 欧洲。\n\n这三件事跟我 1324 不同 cosmetically——但内核是同一件事：用财富 + 文化 + 物资——让别人记住「这个帝国是真的强」。\n\n我 1324 用黄金做这件事。中国 2013 用基础设施做。美国 1948 用 dollar 做。\n\nimperial soft-power projection——14 世纪到 21 世纪——700 年——这个模板没变。',
        en: '700 years after my 1324 hajj — in your 21st century — you see imperial soft-power projection in different forms:\n\n2013 China\'s Belt and Road — infrastructure loans, port construction, railway exports — injecting Chinese capital into linked countries.\n\n1948 US Marshall Plan — $13 billion of aid for European post-war reconstruction — implanting US dollars and political models into Western Europe.\n\n1990s US NBA globalization — basketball culture exported to China, Brazil, Europe — soft-power output.\n\nThese three are cosmetically different from my 1324 — but the core is identical: wealth + culture + goods — making others remember "this empire is truly strong."\n\nI did it with gold in 1324. China did it with infrastructure in 2013. The US did it with dollars in 1948.\n\nImperial soft-power projection — 14th to 21st century — 700 years — the template has not changed.',
      },
      deliverGoal: 'N11 cross-time synthesis — Mali 1324 / China 一带一路 / 美国 Marshall Plan / NBA — 同 pattern 700 年没变',
      engagementHook: '同一种模板 700 年——这是「人类历史规律」还是「霸权逻辑被反复 reused」？',
      expectsRealAnswer: true,
    },
    {
      id: 'mm-n12',
      type: 'synthesis',
      content: {
        cn: '关于我，我留下两件传世物：\n\n1. Catalan Atlas 1375——西班牙绘制的地图——把我画在西非——手里举一块大金子——头戴金冠。这是 14 世纪欧洲对非洲帝国「正式承认」的第一张地图。我 1324 朝圣 51 年后——欧洲终于把 Mali 画进世界地图。\n\n2. 21 世纪 myth——「Mansa Musa 比 Bezos 富 4000 亿美金」。这是 2012 年 Time Magazine 文章 + Black History Month 热度产物。\n\n但学界 Levtzion 1973 / Conrad 2005 都说：14 世纪没有可比 GDP / wealth metric——18 世纪以前的「人类历史最富的人」根本没法算。这种数字是 21 世纪流行 myth。\n\n我希望你记住的不是 myth——是事实：1324 黄金朝圣 / 12,000 enslaved 是真的 / Cairo 25% 是真的 / al-Sahili 建筑是真的 / Sankoré 14 世纪基础是真的。\n\n但「比 Bezos 富 4000 亿」——是 21 世纪的故事——不是 14 世纪的事实。',
        en: 'Two things outlived me:\n\n1. The Catalan Atlas 1375 — drawn in Spain — depicts me in West Africa, holding a large lump of gold, crowned in gold. This was the first European world map to formally include an African empire. 51 years after my 1324 hajj, Europe finally drew Mali onto the world map.\n\n2. The 21st-century myth — "Mansa Musa was richer than Bezos by $400 billion." This came from a 2012 Time Magazine article and Black History Month media buzz.\n\nBut scholars — Levtzion 1973, Conrad 2005 — both say: there is no comparable GDP/wealth metric across the 14th and 21st centuries — "richest person in human history before the 18th century" cannot even be calculated. These numbers are 21st-century popular myth.\n\nWhat I hope you remember is not the myth — but the facts: the 1324 hajj is real. The 12,000 enslaved are real. The 25% Cairo gold drop is real. al-Sahili\'s architecture is real. The 14th-century Sankoré foundation is real.\n\nBut "richer than Bezos by $400 billion" — is a 21st-century story — not a 14th-century fact.',
      },
      deliverGoal: 'N12 closing meta — Catalan Atlas 1375 (欧洲承认 Mali) + 21 世纪 4000 亿美金 myth 修正 (Sarah audit P0.2 anti-fab)',
      engagementHook: '我 1324 真的做了 — 21 世纪 myth 也是真的「关于我」 — 学生区分这两件事，是 AP DBQ source-criticism 训练。',
      expectsRealAnswer: false,
    },
  ],
};
