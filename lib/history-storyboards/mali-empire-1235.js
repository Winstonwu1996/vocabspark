// ─── Mali Empire 1235 Lens-based Storyboard (Story-First v2) ────────
//
// Topic: Mali Empire 1235-c.1610 · 马里帝国
// HSS-7.4 · AP World 1.5 + 2.1 (cross-Sahara networks)
//
// 3 lens 设计 (per Sarah Chen audit + 4-agent review TBD):
//   - mansa-musa     (perpetrator-actor / imperial-system-projector)
//   - ibn-battuta    (lonely-mediator / cross-civilization-witness) — 14 世纪最大旅行家
//   - aisha-1413     (receiving-end / female-literacy-carrier) — 14 岁 Mande 虚构合成
//
// 跨 lens micro-detail (per Sarah audit §6 主推):
//   12,000 enslaved × 4 磅黄金 朝圣队伍 — 3 lens cross-detail (跟 AoE 1493 信 / Reformation 95 Theses 同 pattern):
//   - Lens 1 (Mansa Musa) N4/N6: 设计者 — 1324 朝圣队伍组织 + Cairo 25% 黄金价格下降
//   - Lens 2 (Ibn Battuta) N6: 观察者 — 1353 在 Niani 见 12,000 enslaved 后裔 + 自己也参与 Islamic 网络奴贩
//   - Lens 3 (Aisha 1413) N5: 受影响后裔 — 1414 街头听 jeli 唱 89 年前祖国故事
//
// 4 Topic visual-anchor 四面体:
//   - Renaissance 镶金小镜子
//   - Reformation 95 Theses
//   - AoE 黑曜石镜子 / Columbus 1493 信
//   - Mali Sundiata 7 岁拔猴面包树 ⭐ (Sarah audit §6.1 主推, Aisha N2 + Mansa Musa N1 reference)
//
// 4 Topic information preservation thread (Aisha N12):
//   Renaissance 印刷 / Reformation 95 Theses / AoE 1493 信 / Mali al-Sa'di 沙漠藏书 1655 → 2012 Timbuktu 30 万手稿 357 年抢救
//
// defaultLens = 'aisha-1413' (per Sarah audit + 7thgrader: 14 岁同龄锚点 + female-literacy-carrier
//   + 5 年家族灭族最强情感入口 + N12 4-Topic information preservation closing)
//
// 4-agent review (5-7+ TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)
//
// per AUTHORING_PIPELINE.md 11 条铁律 + AoE 4-agent review 教训:
//   - 第 1 条 cultural ban: 0 中国术语污染 (但允许中国 cross-cultural 对照, e.g. 同代汪大渊)
//   - 第 2 条 anti-fab: 数字精度严格 (4000 亿美金 myth 修 / Sankoré 三时点学者数 / Ibn Battuta 75-117k km range)
//   - 第 6 条 italic: bare + inline gloss (不用 *italic* markdown — 渲染器只处理 **bold**)
//   - 第 11 条 quote nesting: outer JS '...' + 内嵌 「」(CN) / "..." (EN). 严禁 «...»
//
// 来源 staging 文件 (5-7 lens-author):
//   - mali-empire-1235-mansa-musa.staging.js (12 nodes / ~6500 CN chars)
//   - mali-empire-1235-ibn-battuta.staging.js (12 nodes / ~6500 CN chars)
//   - mali-empire-1235-aisha.staging.js (12 nodes / ~6087 CN chars)

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
        cn: '约 1280 年我出生在 Mali 的王室——我爷爷的爷爷是 Sundiata 的兄弟 Manding Bory。Sundiata,你听过那个名字吗。他 7 岁的时候是腿瘸的孩子。村里人嘲笑他。有一天他用双手撑着拔起一棵猴面包树（baobab，西非 sacred 大树）——从那天起整个 Manding 部族叫他 lion king。后来他打赢 1235 Kirina 战役推翻 Sosso,开创 Mali 帝国——他是我们家族的源头。\n\n我从小学三种东西：Manding 口传历史（jeli 唱给我听）；Quran 阿拉伯文（我读 Sharia 法律）；政治训练（Mali 宫廷规矩）。\n\n14 世纪你听过的「非洲帝国」名字里,可能就 Mali,这不是巧合。我接班的不是普通王朝。',
        en: 'I was born around 1280 in Mali royalty — my great-great-grandfather was Manding Bory, brother of Sundiata. Sundiata — have you heard that name? He was a lame boy at 7. The villagers mocked him. One day he pulled up a baobab tree (the sacred West African tree) with his bare hands — from that day the entire Manding people called him the lion king. Later he won the 1235 Battle of Kirina, overthrew Sosso, and founded the Mali Empire. He is the source of my family.\n\nFrom childhood I learned three things: Manding oral history (the jeli sang it to me); Quranic Arabic (I read Sharia law); political training (Mali court ritual).\n\nIf you have ever heard of a "medieval African empire", it is probably Mali. That is not an accident. The throne I inherited was not ordinary.',
      },
      deliverGoal: 'N1 hook — 通过 Sundiata 7 岁拔猴面包树建立 4 Topic visual-anchor 四面体 + Mali 帝国王室出身 + 三种教育',
      engagementHook: '你 14 岁的时候做过类似 Sundiata 7 岁那种「证明自己」的事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mm-n2',
      type: 'narrative',
      content: {
        cn: '1312 年——前任皇帝 Abu Bakr II 离奇消失了。\n\n他 1311 年带 2,000 艘船 + 几千人,想跨大西洋。没回来。\n\n（注：这个故事的唯一来源是我自己——1324 在 Cairo 跟 al-\'Umari 说的。Levtzion 1973 / Brooks 1993 主流学界认为这可能是我政治叙事掩盖政变。Van Sertima 1976《They Came Before Columbus》提了 pre-Columbian 跨大西洋假说——但至今没考古证据,大多学界不接受。这是 contested fact 不是 confirmed history。我不替自己辩护,你想 30 秒。）\n\n1312 我 32 岁即位。Mali 帝国此时领土约 1,000,000 km²,但还在扩张期。我接班,但要把这帝国推到顶。',
        en: 'In 1312 — the previous emperor Abu Bakr II vanished. In 1311 he set sail with 2,000 ships and several thousand men, attempting to cross the Atlantic — and never returned.\n\n(Note: the only source for this story is me — 1324 in Cairo, told to al-\'Umari. Mainstream scholarship, Levtzion 1973, Brooks 1993, considers this possibly my political narrative covering up a coup. Van Sertima\'s 1976 "They Came Before Columbus" proposed a pre-Columbian Atlantic hypothesis, but there is no archaeological evidence, most scholars do not accept it, this is a contested fact, not confirmed history. I will not defend myself. You think for 30 seconds.)\n\nIn 1312 at age 32 I took the throne. Mali had ~1,000,000 km² but was still expanding. I inherited, but my job was to push it to its peak.',
      },
      deliverGoal: 'N2 contested-fact 即位 + Abu Bakr II 学界争议 (反 Whig 钢筋) + 32 岁年龄锚',
      engagementHook: '你信我的 Abu Bakr II 跨大西洋故事吗？为什么？',
      expectsRealAnswer: true,
    },
    {
      id: 'mm-n3',
      type: 'narrative',
      content: {
        cn: '1312-1324 年——我做了三件事把 Mali 推到顶：\n\n1. 扩张领土——西到大西洋（今天塞内加尔）；北到 Walata 和 Timbuktu（征服北部 trans-Sahara 贸易枢纽）；东到 Gao（后来 Songhai 帝国核心）；南到 Bambuk + Bure 黄金森林。1325 年 Mali 面积约 1,800,000 km²——比同期英国 + 法国 + 神圣罗马帝国之和的面积都大。人口约 500-1500 万 (Levtzion 1973 / Niane 1984 学界 estimate range),这三国合计人口约 3000 万,Mali 人口在 5-15 million range 内, 比这三国合计少, 但是单一帝国, 行政上可比。\n\n2. 行政体系。12 个省，每个由我任命的总督管。税收 + 军事 + 司法都通过总督集中。这跟同代中国朝廷-郡县体系结构相似。\n\n3. 推广 Islamic 教育,我自己虔诚 Muslim。我资助清真寺 + 学校 + 14 世纪 Sankoré（萨科雷大学，Timbuktu）,让阿拉伯学者来 Mali、Mali 学者去阿拉伯,双向交流。\n\n这三件事 12 年我做完,1324 我已经准备好做更大的事。',
        en: 'From 1312 to 1324, three things to push Mali to its peak:\n\n1. Territorial expansion — west to the Atlantic (modern Senegal); north to Walata and Timbuktu (capturing the trans-Saharan trade hubs); east to Gao (later the heart of Songhai); south to Bambuk and Bure goldfields. By 1325, Mali covered ~1,800,000 km² — larger in area than England + France + the Holy Roman Empire combined at the time. Population ~5-15 million (Levtzion 1973 / Niane 1984 scholarly estimate range) — versus those three combined at ~30 million; Mali had fewer people but was a single empire, administratively comparable.\n\n2. Administrative system, 12 provinces, each managed by a governor I appointed. Tax + military + judicial concentrated through governors. Structurally similar to contemporary China\'s court-prefecture system.\n\n3. Promoting Islamic education, I was a devout Muslim. I funded mosques, schools, and the 14th-century Sankoré (Sankoré University, in Timbuktu), bringing Arab scholars to Mali, sending Mali scholars to the Arab world.\n\nThree things in 12 years. By 1324 I was ready to do something bigger.',
      },
      deliverGoal: 'N3 帝国巩固 — 4 方扩张 + 12 省体系 + Sankoré 教育 + 跟同代中国对比',
      engagementHook: '同代英国 + 法国 + 神圣罗马帝国之和都没 Mali 面积大——你之前听过这个 fact 吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mm-n4',
      type: 'narrative',
      content: {
        cn: '1324 年——我 44 岁,决定 hajj（朝圣 Mecca）。\n\n朝圣是 Islam 5 大义务之一。但我不只是去做义务——我把它变成史上最大规模的政治 + 经济外交：\n\n- 60,000 人队伍\n- 12,000 个奴隶（注：这 12,000 enslaved 是 Mali 跨撒哈拉奴贩链条的人——Mali 帝国本身有内部奴隶制,14 世纪 Islamic 世界 normalized practice。但「normalized」≠「合法」。21 世纪你怎么评,想 30 秒。）每个奴隶捧 4 磅黄金\n- 80 头骆驼每头驮 300 磅黄金\n- 我妻子 + 500 个侍从女\n- 数千头骆驼 + 马 + 食物\n\n总价值约 18 吨黄金,\n\n这是 1324 年 7 月,8,000+ km 路线,Niani → Walata → Timbuktu → Sahara 70 天驼队 → Sijilmasa → Fez → Tunis → Cairo → Sinai → Mecca。',
        en: 'In 1324, at age 44, I decided to make hajj (pilgrimage to Mecca).\n\nHajj is one of the 5 pillars of Islam — but I was not just performing duty. I turned it into the largest political-economic projection in history:\n\n- 60,000 people\n- 12,000 enslaved people (note: these 12,000 enslaved came from Mali\'s trans-Saharan slave-trading chains — Mali itself had internal slavery — 14th-century Islamic world normalized practice, but "normalized" ≠ "right." How do you evaluate this from the 21st century, think for 30 seconds.) Each carrying 4 lbs of gold.\n- 80 camels each carrying 300 lbs of gold\n- My wife + 500 attending women\n- thousands of camels, horses, food supplies\n\nTotal worth ~18 tons of gold.\n\nJuly 1324, 8,000+ km route, Niani → Walata → Timbuktu → 70 days across the Sahara → Sijilmasa → Fez → Tunis → Cairo → Sinai → Mecca.',
      },
      deliverGoal: 'N4 cross-lens micro-detail #1: 12,000 enslaved + 4 磅黄金 + 80 头骆驼 (Producer 视角) — 14 世纪 Islamic 世界奴隶制 careful framing',
      engagementHook: '我把 12,000 个奴隶当工具拿出来用——14 世纪的我不觉得这有问题——但 21 世纪的你呢？',
      expectsRealAnswer: true,
    },
    {
      id: 'mm-n5',
      type: 'narrative',
      content: {
        cn: '1324 年 7 月我到 Cairo。\n\n我在 Cairo 停 3 个月——这是路线最长一段。\n\n我做的事：\n- 每周日给穷人发金币 (marabout 即 Sufi 苦行僧 / ulama 即 Islamic 学者,都来排队)\n- 送几百枚金币给 Mamluk 苏丹 al-Nasir Muhammad\n- 大量买 Cairo 货物。付金子\n- 资助 Cairo 学者 + 清真寺\n\n这不是炫耀。这是计算过的：让 Cairo 永远记住 Mali 是真正的强大帝国——让阿拉伯学者把 Mali 的故事带回家——让欧洲商人听到,让全世界 Islamic 网络重新认识非洲。\n\n14 世纪没有 social media,但 1324 年那 3 个月在 Cairo,是 Mali 的 viral moment。al-\'Umari（Cairo 学者，1300-1349）见我,他后来写了《Masalik al-Absar》(诸国行纪),把我的样貌、礼仪、财富、政治都记下来。',
        en: 'July 1324 I arrived in Cairo. I stayed 3 months — the longest stop on the route.\n\nWhat I did:\n- handed out gold coins to the poor every Sunday (the ulama lined up alongside marabouts on the streets)\n- sent hundreds of gold coins to Mamluk Sultan al-Nasir Muhammad\n- bought massive quantities of Cairo goods — paid in gold\n- funded Cairo scholars and mosques\n\nThis was not showing off. This was calculated: make Cairo remember Mali as a truly powerful empire forever — make Arab scholars bring Mali\'s story home, let European merchants hear of it, make the entire Islamic network recognize Africa anew.\n\nThere was no social media in the 14th century, but those 3 months in Cairo in 1324 were Mali\'s viral moment. al-\'Umari (Cairo scholar, 1300-1349) met me, he later wrote "Masalik al-Absar", recording my appearance, ritual, wealth, and politics.',
      },
      deliverGoal: 'N5 Cairo 3 个月 wealth projection — 不是炫耀, 是 14 世纪 viral moment / 跟 social media 对比',
      engagementHook: '你 21 世纪 viral 看到一个 post——什么决定它能不能 viral？我 1324 年在 Cairo 做的，跟 21 世纪算法什么关系？',
      expectsRealAnswer: false,
    },
    {
      id: 'mm-n6',
      type: 'narrative',
      content: {
        cn: '我 3 个月在 Cairo——结果 Cairo 黄金价格下降了约 25%。\n\n（学术 caveat：al-\'Umari 1300-1349 同代埃及学者写的,这是他个人定性观察。不是经济数据。al-\'Umari 自己写「持续到我写本书时约 12 年还在影响」——但 al-\'Umari 是文学性记述。现代经济史 Goldberg 2012 / Borsch 2005 估计实际影响 5-10 年——程度学界争议,部分研究认为 Black Death 1347-1349 才是 Mamluk 经济真正崩溃。）\n\n这不是「人类第一次通货膨胀」,\n罗马 3 世纪 Diocletian 银币贬值 + 中国汉武帝五铢钱通胀 + 13-14 世纪元朝交钞 hyperinflation,都比我 1324 早。\n\n这是「第一次有记录的单笔金子破坏一国经济」事件,14 世纪没人做过这种规模的单笔财富动员,欧洲对 Mali Empire 的认知，从这一刻起永远改变了。',
        en: 'My 3 months in Cairo — gold price in Cairo fell ~25%.\n\n(Scholarly caveat: al-\'Umari, contemporary Cairo scholar 1300-1349, wrote this — it is his personal qualitative observation, not economic data. al-\'Umari himself wrote "still affecting Cairo about 12 years later as I write" — but al-\'Umari is literary, not statistical. Modern economic history, Goldberg 2012, Borsch 2005, estimate real impact 5-10 years, extent contested, some scholars argue the Black Death 1347-1349 was the actual collapse of the Mamluk economy.)\n\nThis was NOT "humanity\'s first inflation."\nRome\'s 3rd-century Diocletian denarius debasement + Han China\'s wuzhu coin inflation + 13-14th-century Yuan jiaochao hyperinflation, all predate my 1324.\n\nThis was the first recorded single-injection-of-foreign-wealth-collapsing-a-foreign-economy event. No one in the 14th century had done single-event wealth mobilization at this scale. From that moment, Europe\'s mental map of the Mali Empire was permanently rewritten.',
      },
      deliverGoal: 'N6 cross-lens micro-detail #2 — Cairo 25% 黄金价格下降 (al-\'Umari 个人定性观察) + 反 Whig 修正 (不是"通胀第一次") + Black Death 干扰因素',
      engagementHook: '我做了「单笔金子破坏一国经济」——但同代中国元朝交钞通胀比我大得多。为什么 14 世纪欧洲只记我，不记中国？',
      expectsRealAnswer: false,
    },
    {
      id: 'mm-n7',
      type: 'narrative',
      content: {
        cn: '我见 Mamluk 苏丹 al-Nasir Muhammad——出了一件事。\n\nMamluk 礼仪：外来客必须 kiss 苏丹的脚 + 跪拜。\n\n我拒绝。\n\n我说：「我作为 Mali 皇帝,我只跪拜上帝。我不跪任何人。」\n\nMamluk 苏丹愤怒——但我 60,000 人队伍 + 18 吨黄金让他不能强迫我。最后我们妥协——我用 Islamic 礼（朝 Mecca 方向跪,而不是朝苏丹）,保留我的尊严,也展示对真正信仰的忠诚。\n\n这件事让 Cairo 阿拉伯学者写了详细记录,他们惊讶,一个非洲皇帝居然敢对 Mamluk 苏丹这种强国主体性这么强。\n\n(注: 学界对妥协细节有 2 种 reading,al-Maqrizi 写我「拒跪」, Conrad 2005 reading 认为我实际有过一次妥协跪。源头不一致,但「拒跪→Islamic 礼妥协」的整体姿态是确认的。)\n\n14 世纪欧洲 + 中东对非洲的刻板印象,「部落、土著、没有正式帝国结构」,从那一刻碎了。Mali 不是部落,是真正的帝国。',
        en: 'I met Mamluk Sultan al-Nasir Muhammad — and an incident occurred.\n\nMamluk court ritual: a foreign visitor must kiss the sultan\'s feet and prostrate.\n\nI refused.\n\nI said: "As Emperor of Mali — I prostrate only to God — I prostrate to no man."\n\nThe Mamluk sultan was furious, but my 60,000 people and 18 tons of gold meant he could not force me. We compromised, I prayed in the Islamic manner (prostrating toward Mecca, not toward the sultan), preserving my dignity, demonstrating loyalty to true faith.\n\nThis exchange, Arab scholars in Cairo wrote detailed accounts, they were shocked: an African emperor dared to assert sovereignty against a regional powerhouse like the Mamluks.\n\n(Note: scholars read the compromise two ways, al-Maqrizi wrote that I "refused to prostrate," while Conrad 2005 reads it as me actually conceding one prostration. Sources differ on the detail, but the overall arc, "refusal then Islamic-form compromise," is confirmed.)\n\nThe 14th-century European and Middle Eastern stereotype of Africa, "tribal, indigenous, no formal imperial structure", shattered in that moment. Mali was not a tribe. It was a true empire.',
      },
      deliverGoal: 'N7 Cairo 礼仪危机 — 主体性 + 拒跪 + 用 Islamic 礼妥协 — 反 Whig 力度顶级 (推翻"非洲只是部落"刻板)',
      engagementHook: '我拒绝跪 Mamluk 苏丹——但我跪 Mecca 方向。这是「主体性」还是「换一种屈从」？',
      expectsRealAnswer: true,
    },
    {
      id: 'mm-n8',
      type: 'narrative',
      content: {
        cn: '1324 年 11-12 月我到 Mecca + Medina——完成 hajj 5 个核心仪式。Tawaf——绕 Kaaba 7 次,这是 hajj 的灵魂动作。其他 4 个我简单说: 跑 2 山 (Sa\'i) / Arafat 祈祷一天 (Wuquf) / 扔石头柱 (Ramy) / 献牲 (Idiyya)。\n\n我也留大量金子给 Mecca + Medina——\n\n但我带回 Mali 的不是更多财富,是知识。\n\n我把 Cairo 学的天文台仪器、把建筑师 al-Sahili（Granada 出生 / Cairo 受教育）、把 ulama 学者、把 Quran 抄本,一起带回 Mali。\n\nal-Sahili 不是普通建筑师,他主持设计 Timbuktu 的 Djinguereber 大清真寺 (1327)。Sankoré 大清真寺由 14 世纪 Aghlali 学者妻子资助 (Hunwick 1999),二者一起构成苏丹—撒哈拉土砖建筑 (Sudano-Sahelian style) 起源。\n\n你今天看 Timbuktu 的照片,那种泥土黄褐色的清真寺。al-Sahili 设计,我 1325 带回 Mali。',
        en: 'November-December 1324 I arrived in Mecca and Medina — and completed the 5 core hajj rituals. Tawaf — circling the Kaaba 7 times — is the soul of hajj. Briefly the other four: running between two hills (Sa\'i), a day of prayer at Arafat (Wuquf), throwing stones at pillars (Ramy), and a sacrifice (Idiyya).\n\nI left massive amounts of gold in Mecca and Medina —\n\nBut what I brought back to Mali was not more wealth, it was knowledge.\n\nI brought back the astronomical instruments I had learned about in Cairo, the architect al-Sahili (born in Granada, educated in Cairo), Islamic scholars (ulama), Quran manuscripts, all together.\n\nal-Sahili was no ordinary architect, he led the design of Timbuktu\'s Djinguereber Mosque (1327). The Sankoré Great Mosque was funded by the wife of an Aghlali scholar in the 14th century (Hunwick 1999), together they form the origin of the Sudano-Sahelian mud-brick style.\n\nLook at photos of Timbuktu today, that earthen yellow-brown mosque silhouette, al-Sahili designed it. I brought him back in 1325.',
      },
      deliverGoal: 'N8 Mecca/Medina hajj 完成 + 带回 al-Sahili 建筑师 + Sudano-Sahelian style 起源 — 知识 > 财富',
      engagementHook: '我 18 吨黄金出去，带回的不是钱——是知识 + 一个建筑师。这个 priority 21 世纪我们怎么评？',
      expectsRealAnswer: false,
    },
    {
      id: 'mm-n9',
      type: 'narrative',
      content: {
        cn: '1325-1327 年回 Mali——我做的事是：扩建 Sankoré。\n\nSankoré（萨科雷大学，在 Timbuktu）是 Mali 的「Quran 学习中心」——我资助 al-Sahili 重建 Sankoré 大清真寺 + 大学。\n\n这里要 careful：\n\n14 世纪 Mansa Musa 时期 Sankoré 学者数估算 5,000-10,000 人（学界 estimate range）——大学还在 building 阶段。\n\n16 世纪 Songhai 帝国 Askia 时代,Sankoré 才达到 25,000 学生（峰值）。这时候我已经死了 200 年。\n\n21 世纪 Timbuktu Manuscripts Project,70 万册手稿,是 14-19 世纪累计 + 21 世纪幸存数,不是 14 世纪当时的存量。\n\n14 世纪 + 16 世纪 + 21 世纪,三个数字三个不同时间点,你不能混着说。\n\n但 14 世纪 Sankoré 我建立的基础,为 16 世纪 Askia 的 25,000 学生 + 21 世纪 70 万册幸存手稿,是直接源头。',
        en: '1325-1327 back in Mali — what I did was expand Sankoré.\n\nSankoré (in Timbuktu) was Mali\'s "Quranic learning center" — I funded al-Sahili to rebuild the Sankoré Great Mosque and university.\n\nHere we have to be careful:\n\n14th-century Mansa Musa era Sankoré scholars estimated at 5,000-10,000 (scholarly estimate range) — the university was still in building phase.\n\n16th-century Songhai Empire under Askia, Sankoré reached 25,000 students (peak), by then I was dead 200 years.\n\n21st-century Timbuktu Manuscripts Project, 700,000 manuscripts, is the 14th-19th-century accumulated total surviving as of the 21st century, not the 14th-century stock.\n\n14th + 16th + 21st century, three numbers, three different time points, do not mix them up.\n\nBut the 14th-century Sankoré foundation I built was the direct source for Askia\'s 25,000 in the 16th century, and the 700,000 surviving manuscripts in the 21st.',
      },
      deliverGoal: 'N9 Sankoré 14 世纪基础 + 三个时点学者数修正 (Sarah audit P0.3 — anti-fab)',
      engagementHook: '14 世纪 5,000-10,000 / 16 世纪 25,000 / 21 世纪 70 万——三个数字混淆了 200 年。这跟 Mansa Musa "4000 亿美金 比 Bezos 富" myth 是同一种问题吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mm-n10',
      type: 'synthesis',
      content: {
        cn: '我 1337 年死——57 岁。我儿子 Mansa Maghan 即位,但 14 世纪后期 Mali 衰退。15 世纪开始 Songhai 崛起——1591 年 Songhai/摩洛哥 Tondibi 之战后 Mali 实际不存在了。\n\n我 13 年朝圣 + 12 年扩张——一辈子换来什么？\n\n一种说法：我是「imperial soft-power projector」,1324 朝圣是计算过的外交。我把 Mali 重新植入欧洲 + 阿拉伯认知地图,为接下来 200 年 Mali 国际地位铺路。\n\n另一种说法：我是「14 世纪 wealth display 第一人」,18 吨黄金散在 Cairo + Mecca,是炫耀。我让 Cairo 经济崩 5-10 年。我让 12,000 个奴隶捧着金子走 8,000 km,这是 imperialism 不是 diplomacy。\n\n两边都站得住。想 30 秒。',
        en: 'I died in 1337 at 57. My son Mansa Maghan took the throne — but Mali declined in the late 14th century. Songhai rose in the 15th. After the 1591 Battle of Tondibi (Songhai vs Morocco), Mali effectively ceased to exist.\n\n13 years of pilgrimage planning, 12 years of expansion — what was it for?\n\nOne reading: I was an imperial soft-power projector. The 1324 hajj was calculated diplomacy. I re-implanted Mali into Europe and the Arab world\'s mental map — paving 200 years of international status.\n\nAnother reading: I was the first 14th-century wealth-display showman. 18 tons of gold scattered across Cairo and Mecca, pure showing off. I tanked the Cairo economy for 5-10 years. I marched 12,000 enslaved people 8,000 km holding gold, that is imperialism, not diplomacy.\n\nBoth readings stand. Think for 30 seconds.',
      },
      deliverGoal: 'N10 synthesis 双 view (soft-power projector vs wealth-display showman) — AP DBQ hold contradiction 30 seconds',
      engagementHook: '两边都站得住——你的 30 秒过去了——你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'mm-n11',
      type: 'synthesis',
      content: {
        cn: '我 1324 朝圣 700 年后——21 世纪世界,你看到 imperial soft-power projection 的另外几种版本：\n\n2013 年中国一带一路。基础设施贷款 + 港口建设 + 铁路出口——把中国资本注入沿线国家。\n\n1948 年美国马歇尔计划——130 亿美金援助欧洲战后重建,把美国 dollar + 政治模式植入西欧。\n\n1989-1992 美国 NBA 全球化 (David Stern 主导,1989 中国 CCTV 直播 + 1992 Olympic Dream Team),通过篮球文化把 American soft power 输出到中国 + 巴西 + 欧洲。\n\n这三件事跟我 1324 不同 cosmetically,但内核是同一件事：用财富 + 文化 + 物资,让别人记住「这个帝国是真的强」。\n\n我 1324 用黄金做这件事。中国 2013 用基础设施做。美国 1948 用 dollar 做。\n\nimperial soft-power projection,14 世纪到 21 世纪,700 年,这个模板没变。',
        en: '700 years after my 1324 hajj — in your 21st century — you see imperial soft-power projection in different forms:\n\n2013 China\'s Belt and Road — infrastructure loans, port construction, railway exports, injecting Chinese capital into linked countries.\n\n1948 US Marshall Plan, $13 billion of aid for European post-war reconstruction, implanting US dollars and political models into Western Europe.\n\n1989-1992 US NBA globalization (David Stern era, 1989 CCTV broadcasts in China + 1992 Olympic Dream Team), basketball culture exported to China, Brazil, Europe, soft-power output.\n\nThese three are cosmetically different from my 1324, but the core is identical: wealth + culture + goods, making others remember "this empire is truly strong."\n\nI did it with gold in 1324. China did it with infrastructure in 2013. The US did it with dollars in 1948.\n\nImperial soft-power projection, 14th to 21st century, 700 years, the template has not changed.',
      },
      deliverGoal: 'N11 cross-time synthesis — Mali 1324 / China 一带一路 / 美国 Marshall Plan / NBA — 同 pattern 700 年没变',
      engagementHook: '同一种模板 700 年——这是「人类历史规律」还是「霸权逻辑被反复 reused」？',
      expectsRealAnswer: true,
    },
    {
      id: 'mm-n12',
      type: 'synthesis',
      content: {
        cn: '关于我，我留下两件传世物：\n\n1. Catalan Atlas 1375——西班牙 Majorca 犹太人 Cresques Abraham 1375 绘的地图,把我画在西非。手里举一块大金子——头戴金冠。这是 14 世纪欧洲对非洲帝国「正式承认」的第一张地图。我 1324 朝圣 51 年后——欧洲终于把 Mali 画进世界地图。\n\n2. 21 世纪 myth,「Mansa Musa 比 Bezos 富 4000 亿美金」。这是 2012 年 Time Magazine 文章 + Black History Month 热度产物。\n\n但学界 Levtzion 1973 / Conrad 2005 都说：14 世纪没有可比 GDP / wealth metric,18 世纪以前的「人类历史最富的人」根本没法算。这种数字是 21 世纪流行 myth。\n\n我希望你记住的不是 myth,是事实：1324 黄金朝圣 / 12,000 enslaved 是真的 / Cairo 25% 是真的 / al-Sahili 建筑是真的 / Sankoré 14 世纪基础是真的。\n\n但「比 Bezos 富 4000 亿」,是 21 世纪的故事,不是 14 世纪的事实。\n\n我 1337 死的时候。al-Sahili 1327 建的 Djinguereber 大清真寺还在;700 年后还在。那是我留下的,不是 myth。',
        en: 'Two things outlived me:\n\n1. The Catalan Atlas 1375 — drawn by Cresques Abraham, a Jewish cartographer in Majorca — depicts me in West Africa, holding a large lump of gold, crowned in gold. This was the first European world map to formally include an African empire. 51 years after my 1324 hajj, Europe finally drew Mali onto the world map.\n\n2. The 21st-century myth — "Mansa Musa was richer than Bezos by $400 billion." This came from a 2012 Time Magazine article and Black History Month media buzz.\n\nBut scholars, Levtzion 1973, Conrad 2005, both say: there is no comparable GDP/wealth metric across the 14th and 21st centuries, "richest person in human history before the 18th century" cannot even be calculated. These numbers are 21st-century popular myth.\n\nWhat I hope you remember is not the myth, but the facts: the 1324 hajj is real. The 12,000 enslaved are real. The 25% Cairo gold drop is real. al-Sahili\'s architecture is real. The 14th-century Sankoré foundation is real.\n\nBut "richer than Bezos by $400 billion", is a 21st-century story, not a 14th-century fact.\n\nWhen I died in 1337, the Djinguereber Mosque al-Sahili built in 1327 was still standing. 700 years later it is still standing. That is what I left behind, not the myth.',
      },
      deliverGoal: 'N12 closing meta — Catalan Atlas 1375 (欧洲承认 Mali) + 21 世纪 4000 亿美金 myth 修正 (Sarah audit P0.2 anti-fab)',
      engagementHook: '我 1324 真的做了 — 21 世纪 myth 也是真的「关于我」 — 学生区分这两件事，是 AP DBQ source-criticism 训练。',
      expectsRealAnswer: false,
    },
  ],
};

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
    en: 'You are Ibn Battuta (1304-1369), the 14th-century Islamic world\'s greatest traveler. In 30 years you covered 75,000-117,000 km — 3-5 times Marco Polo\'s range. You spent 8 months in Mali in 1352-1353 as a guest of Mansa Sulayman. Your "Rihla" (Travels) is the first-hand 14th-century record of sub-Saharan Africa. But you are not a neutral observer — you are a strict Maliki jurist with biases, and Islamic-world slavery was normalized practice you participated in.',
    cn: '你是伊本·白图泰（1304-1369）——14 世纪 Islamic 世界最大旅行家。30 年游历 75,000-117,000 km,是 Marco Polo 范围的 3-5 倍。1352-1353 你在 Mali 停 8 个月。做 Mansa Sulayman 客人。你的《Rihla》(游记) 是 14 世纪 sub-Saharan Africa 的第一手记录。但你不是中立观察者——你是严格的 Maliki 法学者带偏见——14 世纪 Islamic 世界奴隶制是 normalized practice 你也参与。',
  },
  storyboard: [
    {
      id: 'ib-n1',
      type: 'narrative',
      content: {
        cn: '1304 年我生于 Tangier——摩洛哥北部，靠近直布罗陀海峡。\n\n我爸爸是 Maliki 法律学者——Maliki 是伊斯兰 Sunni 4 大法学派之一,主要在北非 + 西非。\n\n我从小学三件事：阿拉伯文 + Quran 背诵 + Maliki 法律细节。\n\n21 岁那年——1325 年,我决定 hajj 朝圣 Mecca。这是伊斯兰 5 大义务。\n\n我妈妈跟我告别的时候说「一年后回来」。\n\n我没回来,我接下来 30 年游历完世界。',
        en: 'I was born in 1304 in Tangier — northern Morocco, near the Strait of Gibraltar.\n\nMy father was a Maliki jurist — Maliki is one of four Sunni schools of Islamic law, mainly in North Africa and West Africa.\n\nFrom childhood I learned three things: Arabic, Quranic recitation, Maliki legal detail.\n\nAt 21 — in 1325, I decided to make hajj to Mecca, one of the five pillars of Islam.\n\nMy mother said goodbye expecting me back in a year.\n\nI never came back. I spent the next 30 years traveling the world.',
      },
      deliverGoal: 'N1 Maliki 法学者背景 + 21 岁 hajj 启程 + 30 年游历预告',
      engagementHook: '你 21 岁会跟妈妈说「我去一年」然后去 30 年吗？这跟 21 世纪 gap year 什么差别？',
      expectsRealAnswer: false,
    },
    {
      id: 'ib-n2',
      type: 'narrative',
      content: {
        cn: '我 1325-1349 年的 24 年——几乎不停旅行。\n\n1325-1326：摩洛哥 → 北非 → 埃及 → 圣地 → Mecca（hajj 完成）\n1326-1330：伊拉克 + 波斯 + 波斯湾 + 阿拉伯半岛\n1330-1332：东非 — Mogadishu + Mombasa + Kilwa（这是 14 世纪 Islamic 商网络东非节点）\n1332-1346：安纳托利亚 + 中亚 + 阿富汗 + 印度 (Delhi 苏丹做 7 年法官 / Dunn 1986——Muhammad bin Tughluq 给我宫廷职位)\n1346-1349：中国（泉州 + 杭州 + 大都）,\n\n这次中国行学界争议。Dunn 1986 / Gibb 1929 怀疑我没真到——但我写得详细。这是 contested fact。\n\n14 世纪我之外，同代还有元朝汪大渊（1311-1350 写《岛夷志略》访东南亚 + 印度洋）+ 方济各会 Odoric of Pordenone（1286-1331 访华 1318-1330）,14 世纪是长途旅行黄金时代。',
        en: 'For 24 years from 1325-1349 — I traveled nearly without stopping.\n\n1325-1326: Morocco → North Africa → Egypt → Holy Land → Mecca (hajj completed)\n1326-1330: Iraq, Persia, Persian Gulf, Arabian peninsula\n1330-1332: East Africa — Mogadishu, Mombasa, Kilwa (these were the 14th-century Islamic East African trade nodes)\n1332-1346: Anatolia, Central Asia, Afghanistan, India (7 years as a judge in the Delhi Sultanate / Dunn 1986 — Muhammad bin Tughluq gave me a court position)\n1346-1349: China (Quanzhou, Hangzhou, Dadu) —\n\nThe China visit is contested, Dunn 1986 and Gibb 1929 doubt I really arrived, but my account is detailed. Contested fact.\n\nBeyond me in the 14th century, there was Wang Dayuan (1311-1350, "Daoyi Zhilüe" 1349, Yuan Dynasty Chinese traveler to SE Asia and Indian Ocean) and Odoric of Pordenone (Franciscan friar 1286-1331, in China 1318-1330), the 14th century was the golden age of long-distance travel.',
      },
      deliverGoal: 'N2 24 年游历 6 大 region + Delhi 8 年法官 + 1346-1349 中国行 contested fact + 14 世纪三大长途旅行家',
      engagementHook: 'Marco Polo 在西方课本远比我有名——但同代汪大渊跟我都更远——为什么欧洲只记 Marco？',
      expectsRealAnswer: true,
    },
    {
      id: 'ib-n3',
      type: 'narrative',
      content: {
        cn: '1349 年我回 Tangier——24 年没回家。\n\n但我回到的不是温暖家,是 Black Death（黑死病）。\n\n1347-1352 Black Death 杀了欧洲 + 中东 1/3 人口。也包括我家：\n- 我妈妈死了（我离家 24 年——她最后这几年没见过我）\n- 我大部分兄弟姐妹死了\n- Tangier 街上空荡——清真寺关了,市场没人,\n\n我在 Tangier 停了 1 年,埋家人,理后事,\n\n1351 年,我 47 岁,决定再出发。\n\n这次目标：1351-1352 西班牙 Granada（穆斯林最后据点）+ 1352-1353 Mali Empire,这是我最后一次大旅行,也是这个 lens 的故事。',
        en: 'In 1349 I returned to Tangier — 24 years away.\n\nBut what I returned to was not a warm home — it was the Black Death.\n\n1347-1352 the Black Death killed roughly 1/3 of Europe and the Middle East — including my family:\n- My mother died (I had been gone 24 years, she did not see me in her last years)\n- Most of my siblings died\n- Tangier streets emptied, mosques closed, markets gone —\n\nI stayed in Tangier for a year, burying family, settling affairs.\n\nIn 1351, at age 47, I decided to set out again.\n\nThis time: 1351-1352 Granada (the last Muslim stronghold in Spain) + 1352-1353 Mali Empire, my final great journey, and the story of this lens.',
      },
      deliverGoal: 'N3 1349 回家 / Black Death 家人死 / 1351 47 岁再出发 — emotional anchor',
      engagementHook: '我妈妈最后没见过我——24 年——后悔吗？21 世纪你跟父母多久不见？',
      expectsRealAnswer: true,
    },
    {
      id: 'ib-n4',
      type: 'narrative',
      content: {
        cn: '1352 年 2 月——我 48 岁——从摩洛哥南下到 Mali。\n\n路线：Sijilmasa（摩洛哥南边贸易枢纽）→ Taghaza 盐矿 → Sahara 70 天驼队 → Walata（Mali 北部）→ Niani（首都）。\n\n8,000 km——其中 90 天纯沙漠 + 70 头骆驼商队。\n\n这是 14 世纪 trans-Sahara 商路最艰难一段,\n\n我跟商队走 70 天没看到一棵树。\n沙漠白天 50°C 晚上 0°C,驼队员死掉的不少,\n我自己几次脱水,商队的 Berber 向导救我,他们知道每一个绿洲在哪,\n\n我到 Walata 时,人是骨头瘦,但我还活,这是 trans-Sahara 商路本身的难度,也是 14 世纪 Mali 的「physical isolation」,这种 isolation 让 Mali 文化形成自己的 unique pattern。',
        en: 'February 1352 — at age 48 — I traveled south from Morocco to Mali.\n\nRoute: Sijilmasa (southern Morocco trade hub) → Taghaza salt mines → 70 days across the Sahara → Walata (northern Mali) → Niani (the capital).\n\n8,000 km — including 90 days of pure desert + a 70-camel caravan.\n\nThis was the most punishing leg of the 14th-century trans-Saharan trade routes —\n\nWe traveled 70 days without seeing a tree —\nDesert by day 50°C, by night 0°C, caravan members died not infrequently —\nI was dehydrated several times, the Berber guide saved me, they knew every oasis —\n\nWhen I reached Walata I was skin and bone, but alive, this is the difficulty of the trans-Saharan corridor itself, and the "physical isolation" of 14th-century Mali, that isolation gave Mali culture its unique pattern.',
      },
      deliverGoal: 'N4 1352 跨 Sahara 90 天 70 头骆驼 + 8000 km — 14 世纪 trans-Sahara 商路难度',
      engagementHook: '90 天没看一棵树——你 21 世纪坐飞机 14 小时跨 Pacific——这两种 mobility 同等吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ib-n5',
      type: 'narrative',
      content: {
        cn: '1352 年 6 月我到 Niani——Mali 首都。\n\nMansa Sulayman（Mansa Musa 的侄子，即位 11 年）正式接见我。\n\n我得说,我有点失望。\n\nMansa Musa 1324 朝圣的故事我从 28 年前在 Cairo 听 al-\'Umari 讲过。Mansa Musa 是「最豪华皇帝」、「黄金洪水」、「Cairo 经济崩溃 12 年」——这些故事我背得滚瓜烂熟。\n\n我到 Niani——Mansa Sulayman 接我礼仪严格,但比阿拉伯宫廷朴素得多,没 Mansa Musa 那种戏剧性。\n\n我 8 个月在 Mali,慢慢理解：Mansa Sulayman 不是 Mansa Musa 第二,他是「巩固期」皇帝,保住扩张期遗产,而不是再做戏剧性外交。\n\n两种皇帝都需要,你不能只 admire Mansa Musa 不 admire Sulayman。',
        en: 'June 1352 I arrived in Niani — the capital of Mali.\n\nMansa Sulayman (Mansa Musa\'s nephew, 11 years on the throne) formally received me.\n\nI have to admit — I was a little disappointed.\n\nThe Mansa Musa 1324 pilgrimage I had heard 28 years earlier in Cairo from al-\'Umari — "the most lavish emperor," "the golden flood," "Cairo\'s economy depressed 12 years", I knew these stories by heart.\n\nWhen I reached Niani, Mansa Sulayman received me with strict ritual, but plainer than Arab courts, none of the Mansa Musa drama.\n\nMy 8 months in Mali, slowly I understood: Mansa Sulayman is not Mansa Musa II, he is a "consolidation" emperor, keeping the expansion-era legacy, not redoing dramatic diplomacy.\n\nBoth kinds of emperor are needed, you cannot only admire Mansa Musa without admiring Sulayman.',
      },
      deliverGoal: 'N5 1352 见 Mansa Sulayman 失望 — 然后 understand 巩固期皇帝 vs 戏剧性扩张期皇帝两种都需要',
      engagementHook: '你 admire 哪种 leader 多——Mansa Musa 戏剧性扩张 / Mansa Sulayman 巩固稳定？为什么？',
      expectsRealAnswer: true,
    },
    {
      id: 'ib-n6',
      type: 'narrative',
      content: {
        cn: '1353 春我在 Niani 街头——见 12,000 enslaved 后裔。\n\n等等,倒回去解释。\n\n1324 年 Mansa Musa 朝圣队伍 12,000 个奴隶。每人捧 4 磅黄金——走 8,000 km 到 Mecca——这事 1352 我到 Mali 已经过了 28 年。\n\n这 12,000 个奴隶,朝圣完一半留在 Cairo + Mecca + Medina（被 Mali 卖给 Mamluk + 阿拉伯主人）,一半带回 Mali 当宫廷奴隶 + Sankoré 大学奴隶 + 黄金森林奴工。\n\n1352 年我在 Mali 见到的,是这 12,000 enslaved 的「后裔」,他们的孩子 + 孙子,14 世纪 normalized practice：奴隶身份继承。\n\n我 Maliki 法学者,14 世纪我自己也买卖过奴隶,这不是我特殊,这是 Islamic 世界 14 世纪 normalized,但「normalized」不等于「合法」,21 世纪你怎么评？我说不清。',
        en: 'Spring 1353, on the streets of Niani — I saw the descendants of the 12,000 enslaved.\n\nWait — let me back up.\n\nIn 1324, Mansa Musa\'s hajj caravan included 12,000 enslaved people — each carrying 4 lbs of gold, walking 8,000 km to Mecca. By 1352 when I arrived in Mali, 28 years had passed.\n\nThese 12,000 enslaved people, half remained in Cairo, Mecca, Medina after the hajj (Mali sold them to Mamluk and Arab masters), half returned to Mali as palace slaves, Sankoré university workers, and goldfield laborers.\n\nWhat I saw in Mali in 1352, was the descendants of these 12,000 enslaved, their children and grandchildren, 14th-century normalized practice: slave status was hereditary.\n\nI am a Maliki jurist, I myself bought and sold enslaved people in the 14th century, this is not special to me, this is Islamic-world 14th-century normalized practice, but "normalized" ≠ "right", how do you evaluate from the 21st century? I cannot say.',
      },
      deliverGoal: 'N6 cross-lens micro-detail (12,000 enslaved 后裔) — Battuta 1353 见 + 自己也参与奴隶买卖 careful framing',
      engagementHook: '我自己也买卖过奴隶——14 世纪 normalized——21 世纪你怎么评？「我跟时代一起」是辩护吗？',
      expectsRealAnswer: true,
    },
    {
      id: 'ib-n7',
      type: 'narrative',
      content: {
        cn: '1352-1353 我在 Mali 8 个月——写下《Rihla》中 Mali 的 5 件观察：\n\n1. **Mali 是安全的**,「比我去过任何国家都安全」（Rihla 我自己写的）。抢劫 + 暴力几乎没——这是反 Whig 钢筋——14 世纪欧洲伪造的「非洲野蛮」,是错的。\n\n2. **Quran 教育普及**,Mali 孩子如果不背 Quran 就打,14 世纪 Mali 伊斯兰核心区识字率比英格兰乡村高。\n\n3. **法治**,Mansa 法庭审判贵族 + 平民同等对待,这跟欧洲 14 世纪「贵族特权」不同。\n\n4. **女性不戴面纱**,我严格 Maliki 法学者觉得违反伊斯兰,但 Mali 人觉得这是 Manding 传统,21 世纪 Mali 女性比一些阿拉伯国家女性自由,这种 14 世纪传统部分延续到今天。\n\n5. **食物**,他们吃 yam 薯 + 高粱粥,不是麦,我不喜欢,但这是非洲营养基础。',
        en: 'My 8 months in Mali in 1352-1353 — I wrote 5 observations in *Rihla*:\n\n1. **Mali is safe** — "safer than any country I have visited" (my own words in Rihla) — robbery and violence almost nonexistent, this proves Europe\'s made-up story of "African barbarism" wrong.\n\n2. **Quran education widespread**, Mali children were beaten if they could not memorize Quran, 14th-century Mali Islamic-core literacy was higher than English village literacy.\n\n3. **Rule of law**, the Mansa\'s court tried nobles and commoners equally, different from 14th-century Europe\'s "noble privilege."\n\n4. **Women without veils**, as a strict Maliki jurist I found this violated Islam, but Mali considered this Manding tradition, in the 21st century Mali women are freer than in some Arab states, this 14th-century tradition partly survives.\n\n5. **Food**, they ate yam and sorghum porridge, not wheat, I did not like it, but this is Africa\'s nutritional foundation.',
      },
      deliverGoal: 'N7 Rihla 5 件观察 — 反 Whig 钢筋 (安全 / 教育 / 法治) + 我自己批评 (女性 / 食物) — 严肃旅行家 not 赞美 essay',
      engagementHook: '我「批评 + 赞美」混合——这种 mixed 记录比纯赞美 essay 更可信——你 21 世纪能信全是赞美的旅行 vlog 吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ib-n8',
      type: 'narrative',
      content: {
        cn: '1354 年初我离开 Mali——又跨 Sahara 回北非,\n\n这次回程比来时更艰难。\n我已经 50 岁——身体不如 1352——\n商队向导这次是不同 Berber 部族,他们带我走更远的路绕开 raid 区,\n\n我 1354 年 4 月到 Sijilmasa,又一次 90 天驼队后,我活下来了,\n\n1355 年我回 Tangier,\n\n30 年游历,75,000-117,000 km,144 个现代国家,4 大洲,做完了。\n\n我 51 岁开始口述 Rihla 给 Marrakesh 的学者 Ibn Juzayy,他记下来,1356 年完成 120,000 字阿拉伯文。\n\n我后来 13 年（1356-1369）住在摩洛哥,65 岁时死,葬在 Tangier。\n\n《Rihla》在 14 世纪 Islamic 世界传,但不被欧洲读,直到 19 世纪欧洲学界才认真翻译,\n\n21 世纪,我的 Mali 章节是 sub-Saharan Africa 的第一手 14 世纪原始材料,这是我留给 Africa 的礼物。',
        en: 'Early 1354 I left Mali — and crossed the Sahara north again —\n\nThe return was harder than the journey out —\nI was 50 — not the body of 1352 —\nDifferent Berber guides this time — they took longer detours to avoid raid zones —\n\nApril 1354 I reached Sijilmasa, after another 90-day caravan, alive —\n\n1355 I returned to Tangier —\n\n30 years of travel, 75,000-117,000 km, 144 modern countries, 4 continents, finished.\n\nAt 51 I began dictating "Rihla" to Ibn Juzayy, a scholar in Marrakesh, he wrote it down, 1356 completed at 120,000 words of Arabic.\n\nI lived 13 more years in Morocco (1356-1369), died at 65, buried in Tangier.\n\n"Rihla" circulated in the 14th-century Islamic world, but Europeans did not read it, until 19th-century European scholars finally translated it seriously —\n\n21st century, my Mali chapter is the first-hand 14th-century primary material on sub-Saharan Africa, that is my gift to Africa.',
      },
      deliverGoal: 'N8 1354 回家 / 1356 Rihla 120k 字阿拉伯文 / 19 世纪欧洲才翻译 / 21 世纪 sub-Saharan first-hand source',
      engagementHook: 'Rihla 14 世纪写完——19 世纪欧洲才翻译——为什么 5 个世纪欧洲不读非欧洲世界的第一手记录？',
      expectsRealAnswer: true,
    },
    {
      id: 'ib-n9',
      type: 'narrative',
      content: {
        cn: '我已死 700 年——你今天 21 世纪在课本里读「Marco Polo」三个字 5 次,读「Ibn Battuta」三个字 0 次。\n\n这不是巧合。\n\n我 75,000-117,000 km。是 Marco Polo 15,000-25,000 km 的 3-5 倍。\n\n我 Rihla 120,000 字——比 Marco Polo Travels 详细 + 准确得多。\n\n但你 21 世纪美国 7 年级课本——可能根本没听过我的名字,\n\n这是欧洲中心 narrative 的偏见,「重要旅行家」标准是「欧洲人 + 写给欧洲读者 + 被欧洲学界研究」,我都不满足这 3 条,所以 5 个世纪我「不存在」。\n\n21 世纪 Ross Dunn 1986 / Tim Mackintosh-Smith 2001 的努力,加上 World History 学界 cross-cultural 转向,慢慢把我「重新放进世界史」。\n\n但课本同步还要 100 年。\n\n这是 historiography（史学方法论）,不是「客观历史」,是「谁写历史 + 谁读历史」的政治。',
        en: 'I have been dead 700 years — in your 21st-century textbook you read "Marco Polo" five times and "Ibn Battuta" zero times.\n\nThis is not an accident.\n\nMy 75,000-117,000 km is 3-5 times Marco Polo\'s 15,000-25,000 km.\n\nMy "Rihla", 120,000 words, is more detailed and reliable than Marco Polo\'s "Travels".\n\nBut in your 21st-century American 7th-grade textbook — you may never have heard my name —\n\nThis is the bias of Euro-centric narrative — the "important traveler" standard is "European + writes for European readers + studied by European scholars", I meet none of these three, so for 5 centuries I "did not exist."\n\n21st-century Ross Dunn 1986, Tim Mackintosh-Smith 2001, plus the cross-cultural turn in World History scholarship, are slowly putting me "back into world history."\n\nBut textbooks lag another 100 years.\n\nThis is historiography (the politics of history-writing), not "objective history", but "who writes history and who reads it."',
      },
      deliverGoal: 'N9 课本里 Marco Polo 5x me 0x — historiography 偏见 + 21 世纪 cross-cultural turn 慢慢 reset',
      engagementHook: '你 21 世纪课本读 Marco Polo 多还是 Ibn Battuta 多？为什么？',
      expectsRealAnswer: true,
    },
    {
      id: 'ib-n10',
      type: 'synthesis',
      content: {
        cn: '关于我，21 世纪学界两种说法：\n\n一种：我是「中立 cross-civilization 见证者」——Rihla 是 14 世纪世界唯一同时记录 Mali + Mamluk + Delhi Sultanate + 中国的人,我比同代任何记录者更全面 + 更可靠。\n\n另一种：我不是中立。我是严格 Maliki 法学者——对女性不戴面纱有偏见——对非阿拉伯食物有偏见,而且 14 世纪 Islamic 网络奴隶贸易我自己也买卖,参与者怎么可能中立？\n\n两边都站得住。\n\n14 世纪没有「客观观察者」,所有 14 世纪记录者都带 bias,这跟 21 世纪 journalism 一样,「客观」是 myth,「透明 about your bias」才是真。\n\n我的 bias 我自己写在 Rihla 里,21 世纪学者读得出,这是我对 historiography 的贡献,\n\n想 30 秒。',
        en: 'Two views on me in the 21st-century academy:\n\nOne: I am a "neutral cross-civilization witness" — "Rihla" is the only 14th-century document that records Mali, Mamluk, Delhi Sultanate, and China by the same author — more comprehensive and reliable than any contemporary.\n\nThe other: I am not neutral — I am a strict Maliki jurist, biased against unveiled women, biased against non-Arab food, and I personally bought and sold enslaved people in the 14th-century Islamic trade network, how can a participant be neutral?\n\nBoth views stand.\n\nThere is no "objective observer" in the 14th century, all 14th-century documenters had bias, same as 21st-century journalism, "objectivity" is a myth, "transparency about your bias" is the truth.\n\nMy biases are written into Rihla itself, 21st-century scholars can read them, that is my contribution to historiography —\n\nThink for 30 seconds.',
      },
      deliverGoal: 'N10 synthesis 双 view (中立见证者 vs 偏见参与者) — AP DBQ source-criticism 训练',
      engagementHook: '你 21 世纪你能信任「客观新闻」吗？还是「透明的 bias」更可信？',
      expectsRealAnswer: true,
    },
    {
      id: 'ib-n11',
      type: 'synthesis',
      content: {
        cn: '我 1325-1354 30 年——同代还有这些 cross-civilization 旅行家：\n\n- **Marco Polo（1271-1295 / 24 年 / 15,000-25,000 km）**——14 世纪欧洲最有名旅行家——但他游记很多细节不可信,14 世纪 Italian Levant 商人圈带回的 second-hand 信息混进 first-hand。\n\n- **汪大渊（1311-1350 / 1330-1349 印度洋 + 东南亚 / 写《岛夷志略》1349）**,14 世纪元朝民间航海家,他比 Zheng He 1405 早 56 年。但学界冷门。\n\n- **Odoric of Pordenone（1286-1331 / 方济各会修士 / 1318-1330 访华 12 年）**,比 Marco Polo 晚但比我早访中国,他写 *Itinerary* 是欧洲传教士第一手 14 世纪中国记录。\n\n- **Mahmud Kati (作者归属有争议 / 常被认为是《Tarikh al-Fattash》的记录者)**,西非内部第一手,但后来研究指出这本手稿 17 世纪经过大量修订 (Hunwick / Levtzion)。\n\n14 世纪 + 15 世纪是「长途旅行黄金时代」。不是只 Marco Polo + 我,是 Islamic + 中国 + 欧洲 + 非洲都在 cross-cultural mobility。',
        en: 'My 30 years (1325-1354) — contemporary cross-civilization travelers included:\n\n- **Marco Polo (1271-1295 / 24 years / 15,000-25,000 km)** — Europe\'s most famous 14th-century traveler — but many details in his account are unreliable, 14th-century Italian Levant merchant networks mixed second-hand into first-hand.\n\n- **Wang Dayuan (1311-1350 / 1330-1349 Indian Ocean and SE Asia / "Daoyi Zhilüe" 1349)**, 14th-century Yuan-Dynasty civilian navigator, 56 years before Zheng He 1405, but obscure in scholarship.\n\n- **Odoric of Pordenone (1286-1331 / Franciscan friar / in China 1318-1330)**, later than Marco Polo, earlier than my China visit, his "Itinerary" is a first-hand Christian missionary 14th-century China record.\n\n- **Mahmud Kati (attribution contested / often called the chronicler of "Tarikh al-Fattash")**, West Africa internal first-hand, but later research suggests the manuscript saw heavy 17th-century revision (Hunwick / Levtzion).\n\nThe 14th-15th centuries were "the golden age of long-distance travel", not just Marco Polo and me, Islamic + Chinese + European + African all in cross-cultural mobility.',
      },
      deliverGoal: 'N11 14 世纪 cross-civilization 5 个旅行家 (Marco Polo / 汪大渊 / Odoric / Mahmud Kati / 我) — 反「Marco Polo 一人代表」narrative',
      engagementHook: '你 14 世纪「长途旅行黄金时代」其实有 5 个名字——课本只讲 1 个——你有什么联想？',
      expectsRealAnswer: true,
    },
    {
      id: 'ib-n12',
      type: 'synthesis',
      content: {
        cn: '我 Rihla 留下来——你 21 世纪 7 年级,这是你能用的：\n\n1. **Mali 是 14 世纪世界最安全的国家**。这是我亲自走 8,000 km 进去 8 个月写下来的——欧洲中心 narrative 的「非洲野蛮」从这一句话碎掉。\n\n2. **女性 + 教育 + 法治** 三个 Mali 比 14 世纪欧洲更先进的——你课本如果只讲「中世纪 Europe vs 黑暗 Africa」,是错的。\n\n3. **historiography 是政治**,「谁的故事被记得 / 谁的故事被忘」,我 700 年「不存在」是欧洲中心 narrative 的选择,21 世纪 cross-cultural turn 慢慢 reset,这个 reset 你 7 年级现在站在中间。\n\n4. **transparency about bias > false objectivity**,我 14 世纪带 Maliki 法学者偏见,但我写在 Rihla 里,21 世纪你能读到,这是「源头透明」 > 「假装中立」。\n\n21 世纪你,读 Mali narrative + 读我的 lens + 读 Mansa Musa lens + 读 Aisha 1413 lens,三视角看一座 700 年前的帝国,这就是 AP DBQ source-criticism 顶级训练。',
        en: '*Rihla* survives — and at 21st-century 7th grade, here is what you can use:\n\n1. **Mali was the safest country in the 14th-century world** — I walked 8,000 km in over 8 months and wrote this down — Europe\'s "African barbarism" myth shatters on that single sentence.\n\n2. **Women + education + rule of law**, three things 14th-century Mali had over 14th-century Europe, if your textbook teaches "medieval Europe vs dark Africa", it is wrong.\n\n3. **Historiography is political**, "whose story is remembered / whose story is forgotten", for 700 years I "did not exist" because of Euro-centric narrative\'s choices, the 21st-century cross-cultural turn is slowly resetting this, and you 7th-graders stand in the middle.\n\n4. **Transparency about bias > false objectivity**, I had Maliki jurist biases in the 14th century, but I wrote them into Rihla, 21st-century readers can see them, this is "source transparency" beating "pretend neutrality."\n\n21st-century you, read the Mali narrative + my lens + Mansa Musa\'s lens + Aisha 1413\'s lens, three perspectives on the same 700-year-old empire, that is AP DBQ source-criticism training at its best.',
      },
      deliverGoal: 'N12 closing meta — 4 教学 takeaway (Mali 安全 / 三个领先 / historiography 是政治 / transparency > false objectivity) + 3 lens 三视角',
      engagementHook: '你 21 世纪 7 年级——可以做 14 世纪 Mali 这种 source-criticism 吗？',
      expectsRealAnswer: false,
    },
  ],
};

// ─── Mali Empire 1235 · Lens 3 · Aisha (staging) ──────────
//
// Topic: Mali Empire 1235 · Sundiata + Mansa Musa + Sankoré
// HSS-7.4 · AP World 1.5 · female-literacy-carrier lens
//
// Lens 3: Aisha — receiving-end commoner / female-literacy-carrier
//   - 14 岁 Mande 女孩 (1413), Timbuktu
//   - 妈妈是 qadi 家族 / 爸爸是 Mande 商人
//   - Mansa Musa 1337 死 76 年后, Songhai 1591 分裂 178 年前
//   - Mali 帝国第二阶段 / 缓慢衰退
//
// 虚构合成 disclaimer: 跟 AoE Anacaona Jr / Reformation Sister Agnes 同 pattern
//   Sundiata, Mansa Musa, Sankoré, Tarikh es-Sudan, al-Sa'di 全是真历史
//   Aisha 1413 是合成人物——代表 14-15 世纪 Timbuktu 几千个 marabout/qadi
//   家庭出身、Quran 阅读 + Mande 织布 + Sundiata 史诗口传 carrier 的女孩
//
// Cross-lens micro-detail (per Sarah audit §6.2 + 12,000 enslaved 三视角):
//   - N4-N5: Mansa Musa 1324 朝圣 12,000 enslaved + 4 磅黄金故事
//     · Mansa Musa N? producer 维度 / Ibn Battuta 1353 见过那批奴隶后裔 interpreter
//     · Aisha N5 1414 听街头流传 affected-party 维度 — 89 年前的事还在口耳相传
//   - N12: al-Sa'di 1655 写 Tarikh es-Sudan + 沙漠藏书 — 4 Topic information
//     preservation thread (Renaissance 印刷 / Reformation 95 Theses /
//     AoE 1493 信 / Mali 沙漠藏书 — 跨 250 年同一主题)
//
// 主 visual anchor (per Sarah audit §6.1):
//   - N2 爷爷讲 Sundiata 7 岁拔猴面包树 — Mali Topic 主 anchor
//     (跟 Renaissance 美第奇镶金小镜子 / Reformation 95 Theses Wittenberg 门 /
//      AoE Florentine Codex 黑曜石镜子 形成 4 Topic visual-anchor 四面体)
//
// 7thgrader careful framing (N8 妈妈被 Songhai raiders 带走):
//   - 不要血腥, 不要 graphic
//   - "她们冲进来 — 妈妈把我推进 mil 仓 — 我从竹缝看见 — 妈妈再没回来"
//   - reflection: 妈妈是 qadi 家族 — Songhai raiders 不知道她是谁 —
//                 14 世纪 raid 不挑身份 — 暴力跟身份没有对应
//
// 风格规则 (per AUTHORING_PIPELINE 11 条 + AoE lessons learned):
//   - 不用 *italic* markdown — 外语词 bare + inline gloss
//   - cultural ban + anti-fab (Aisha 虚构 / 14 世纪 Mande / qadi /
//     Sankoré / Bure 黄金区 / Tarikh es-Sudan 都真)
//   - em-dash 「——」 ≤ 3 per 段
//   - 第 11 条 quote nesting: outer JS '...', 内嵌 「」(CN) / "..."(EN)
//     严禁 «...»
//   - 每 node 350-550 CN chars 严控 (AoE Anacaona Jr 600-800 被 4-agent 砍 19%)
//   - 数学一致: 14 岁 1413 → 15 岁 1414 → 16 岁 1415 → 17 岁 1419
//   - 虚构 disclaimer 在 lens.description + fictionalDisclaimer (不要塞 monologue)

// ═══════════════════════════════════════════════════
// LENS 3 storyboard: Aisha (12 nodes)
// ═══════════════════════════════════════════════════

var aishaStoryboard = [
  // ═══════════════════════════════════════════════════
  // N1 — HOOK: 1413 春, 14 岁 Aisha 在 Timbuktu
  // ═══════════════════════════════════════════════════
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Aisha',
    narrativeRef: '§3 line 779-805 Aisha 1413 + Sarah audit Lens 3 推荐',
    content: {
      cn:
        '我叫 Aisha,14 岁。这是 1413 年的春天。我住在 Timbuktu——Mali 帝国北部的城市,撒哈拉南边的港口。\n\n' +
        '妈妈 Fatima 家里 3 代 qadi (法官),爷爷的爷爷曾是 Sankoré 大学的 marabout (伊斯兰学者)。爸爸 Yaqub 是 Mande 商人,跨撒哈拉商队北走 1500 km 到 Sijilmasa 卖盐换金。\n\n' +
        '我们家在 Sankoré 大清真寺南边一条小巷——泥砖房,棕榈木屋顶。我有一个 11 岁弟弟 Idris。\n\n' +
        '我会织 Mande 几何花纹腰带——妈妈教的。我会背 Quran 15 章。我会唱 Sundiata 史诗开头——爷爷教的。\n\n' +
        '今天的我,不知道接下来 6 年会发生什么——不知道 1414 妈妈会听 Cairo 商人讲 90 年前祖国摇动一座城市的故事;不知道 1416 妈妈会被 Songhai raiders 带走;不知道我 17 岁会在 Sankoré 大学影子下重新学历史。\n\n' +
        '接下来 12 节——你跟我走 6 年。',
      en:
        'My name is Aisha. I am fourteen. This is spring of 1413.\n\n' +
        'I live in Timbuktu — a city in the north of the Mali Empire, a port on the southern edge of the Sahara.\n\n' +
        'My mother is Fatima. Her family has produced three generations of qadi (judges); her great-grandfather served as a marabout (Islamic scholar) at Sankoré in the time of Mansa Musa.\n\n' +
        'My father is Yaqub. He is a Mande merchant — he travels with caravans 1,500 km north across the Sahara to Sijilmasa, trading salt for gold.\n\n' +
        'We live in a small lane south of the Great Mosque of Sankoré — mud-brick walls, palm-wood roof. I have an eleven-year-old brother, Idris.\n\n' +
        'I weave — the geometric belt patterns of the Mande women, taught to me by my mother. I can recite fifteen chapters of the Quran. I can sing the opening of the Sundiata epic — my grandfather taught me.\n\n' +
        'I do not know what the next six years will bring.\n\n' +
        'I do not know that in 1414 my mother will hear a Cairo merchant tell the story of how, ninety years ago, our homeland shook a city. I do not know that in 1416 my mother will be taken by Songhai raiders. I do not know that at seventeen I will return to study history in the shadow of Sankoré.\n\n' +
        'Over twelve sections — walk those six years with me.',
    },
    deliverGoal: {
      cn: '我叫 Aisha,14 岁,1413 春 Timbuktu。妈妈 Fatima (qadi 家族 3 代,Sankoré marabout 后裔),爸爸 Yaqub (Mande 商人,跨撒哈拉路线)。我会织 Mande 几何腰带,背 Quran 15 章,唱 Sundiata 史诗。',
      en: 'I am Aisha, fourteen, Timbuktu spring 1413. Mother Fatima (three generations of qadi, descended from a Sankoré marabout), father Yaqub (Mande merchant, trans-Saharan route). I weave geometric Mande belts, recite fifteen chapters of the Quran, sing Sundiata.',
    },
    engagementHook: {
      cn: '14 岁我,Timbuktu 1413 春。妈妈 qadi 家族,爸爸 Mande 商人。我会织布、背 Quran、唱 Sundiata。下一节:爷爷讲 Sundiata 7 岁拔猴面包树。',
      en: 'Fourteen, Timbuktu, spring 1413. Mother from a qadi family, father a Mande merchant. I weave, I recite Quran, I sing Sundiata. Next: my grandfather tells the story of seven-year-old Sundiata pulling up the baobab tree.',
    },
    expectedLength: '420-460 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N2 — SETUP: 1413 夏 爷爷讲 Sundiata 史诗 ⭐ 主 visual anchor (拔猴面包树)
  // ═══════════════════════════════════════════════════
  {
    id: 2,
    phase: 'setup',
    cosplay: 'Aisha',
    narrativeRef: '§3 line 987-1011 Sundiata 7 岁拔猴面包树 + Sarah audit §6.1 主 anchor',
    content: {
      cn:
        '1413 年夏天的一个夜晚——我跟弟弟 Idris 坐在院子里的草席上。爷爷 Mahmud 78 岁,坐在我们对面。\n\n' +
        '爷爷不识字。但他会唱 178 年前 Mande 大地最重要的故事。他拍一下手——开始:\n\n' +
        '「远古的时候——Mande 大地上,国王 Naré Maghan 娶了一个驼背女人。人们嘲笑她——她生了一个儿子——这儿子 7 岁还不能走。」\n\n' +
        '我跟 Idris 屏住呼吸。我们听过 50 多遍。每一遍还是屏住呼吸。\n\n' +
        '「7 岁那一天——他听到村里人嘲笑妈妈,他愤怒。他想给妈妈拿一棵猴面包树叶——但他不能走,他爬到村里最大的猴面包树下——抓住树干,」\n\n' +
        '爷爷停。眼睛闭着。\n\n' +
        '「他第一次站起来。接着——他直接拔起整棵猴面包树——抗在肩上——走回家给妈妈。」\n\n' +
        'Idris 拍手叫好。我没拍——我在想:Sundiata 1217 生,这是 196 年前的事。爷爷不识字——但我们家 196 年没让这棵树倒。\n\n' +
        '我们 Mande 没写进书——但用嘴把它从 1235 传到 1413。',
      en:
        'A summer night in 1413. My brother Idris and I sit on a grass mat in the courtyard. My grandfather Mahmud, seventy-eight, sits across from us.\n\n' +
        'My grandfather cannot read. But he can sing the most important story Mande land has carried for 178 years.\n\n' +
        'He claps once and begins:\n\n' +
        '"In the ancient time, on Mande land, a king named Naré Maghan — he married a hunchbacked woman — people mocked her — she bore a son, at seven this son could not yet walk."\n\n' +
        'Idris and I hold our breath. We have heard the story more than fifty times. We hold our breath every time.\n\n' +
        '"On the day he turned seven, he heard the village mock his mother. He grew angry. He wanted to bring his mother a leaf from the baobab tree — but he could not walk. He crawled to the largest baobab in the village. He grabbed the trunk —"\n\n' +
        'My grandfather pauses, eyes closed.\n\n' +
        '"And he stood up for the first time — and then — he uprooted the whole baobab tree — carried it on his shoulder, walked home to his mother."\n\n' +
        'Idris claps — he claps at this moment every time. I do not clap. I am thinking: Sundiata was born in 1217 — this happened 196 years ago — my grandfather cannot read, but our family has not let this tree fall in 196 years.\n\n' +
        'We Mande did not write this down. We carried it from 1235 to 1413 with our mouths.',
    },
    deliverGoal: {
      cn: '1413 夏夜爷爷 Mahmud 78 岁讲 Sundiata 史诗——7 岁瘫痪听人嘲笑妈妈,爬到猴面包树下。第一次站起——拔起整棵猴面包树抗回家。Sundiata 1217 生,196 年前的事——爷爷不识字,Mande 用嘴从 1235 传到 1413。',
      en: 'Summer night 1413, grandfather Mahmud, seventy-eight, sings the Sundiata epic — seven-year-old paralyzed boy hears mockery of his mother, crawls to a baobab, stands for the first time, uproots the whole tree, carries it home. Sundiata was born in 1217 — 196 years ago — grandfather cannot read, the Mande carried this story from 1235 to 1413 with their mouths.',
    },
    engagementHook: {
      cn: '7 岁瘫痪 Sundiata 听到嘲笑妈妈——爬到树下,第一次站起。拔起整棵猴面包树。Mande 人 196 年口传——一个字没写下来。下一节:Sankoré 大学旁织布。',
      en: 'A seven-year-old, paralyzed, hears mockery of his mother — crawls to the tree — stands for the first time — uproots the whole baobab. The Mande carried this 196 years with no writing. Next: weaving beside Sankoré.',
    },
    expectedLength: '440-490 字 CN ⭐ 主 visual anchor',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N3 — SETUP: 1413 秋 Sankoré 大学旁织布 + 听 Mansa Musa 1324 故事
  // ═══════════════════════════════════════════════════
  {
    id: 3,
    phase: 'setup',
    cosplay: 'Aisha',
    narrativeRef: '§3 line 654-668 Sankoré 大学 + line 96-113 Mansa Musa 1324 朝圣',
    content: {
      cn:
        '1413 秋。我 14 岁。每个下午——我搬一张小织机,坐在 Sankoré 大清真寺南墙阴影里。织腰带。Sankoré 是这座城市的心脏——Mansa Musa 14 世纪资助扩建,15 世纪还是穆斯林世界最受尊敬的学府之一。\n\n' +
        '清真寺出来的 marabout——白长袍、头巾、抱着羊皮纸——经过我身边——大多不看一个 14 岁织布女孩。\n\n' +
        '一个老 marabout 看了我一眼。他停下:「你叫什么?」我说:「Aisha,Sheikh Mahmud 的孙女。」他点头——「我认识你爷爷。他记得每一首 Sundiata。」他走了。我继续织。\n\n' +
        '那天晚上——爷爷讲另一个故事:\n\n' +
        '「89 年前——Mansa Musa 朝圣 Mecca,他经过 Cairo。带 18 吨黄金——他三个月撒金子,撒到 Cairo 金价跌——跌了很多年才回来。」\n\n' +
        '我问:「他真撒那么多?」爷爷说:「我爸爸的爸爸跟一个去过 Cairo 的 Mande 商人聊过——他说是真的——但 Cairo 商人讲的数字跟 Mande 商人讲的数字——不一样。」\n\n' +
        '89 年前的事。我们没人见过。但每一代 Timbuktu 孩子都知道那 18 吨黄金。',
      en:
        'Autumn 1413. I am fourteen.\n\n' +
        'Every afternoon I carry a small loom into the shade of the south wall of the Great Mosque of Sankoré and weave belts. Sankoré is the heart of this city — Mansa Musa funded its expansion in the fourteenth century, and in the fifteenth it is still one of the most respected centers of learning in the Muslim world.\n\n' +
        'Marabouts in white robes and turbans walk out of the mosque, parchments under their arms, passing the fourteen-year-old girl at her loom. Most do not look.\n\n' +
        'One old marabout does. He stops and asks: "What is your name?" I say: "Aisha, granddaughter of Sheikh Mahmud." He nods — "I know your grandfather. He remembers every Sundiata song."\n\n' +
        'He walks on. I keep weaving.\n\n' +
        'That night, my grandfather tells another story.\n\n' +
        '"Eighty-nine years ago, Mansa Musa made the pilgrimage to Mecca. He passed through Cairo. He carried eighteen tons of gold. For three months he scattered gold — Cairo\'s gold price fell, and it took many years to recover."\n\n' +
        'I ask: "Did he really scatter that much?" Grandfather says: "My father\'s father once spoke with a Mande merchant who had been to Cairo. He said it was true. But the numbers the Cairo merchants tell — and the numbers we Mande tell — are not the same."\n\n' +
        'A thing from eighty-nine years ago. None of us saw it. But every Timbuktu child knows about those eighteen tons of gold.',
    },
    deliverGoal: {
      cn: '1413 秋 Aisha 在 Sankoré 大清真寺南墙阴影下织布——marabout 走出来不看一个 14 岁女孩,只有一个老 marabout 停下问名字。爷爷晚上讲 Mansa Musa 1324 朝圣。18 吨黄金——89 年前——Cairo 商人 vs Mande 商人讲的数字不一样。',
      en: 'Autumn 1413 — Aisha weaves in the shade of the south wall of Sankoré. Marabouts pass without looking at a fourteen-year-old girl — only one old marabout stops to ask her name. That night her grandfather tells the story of Mansa Musa\'s 1324 pilgrimage — eighteen tons of gold, eighty-nine years ago, Cairo merchants and Mande merchants do not tell the same numbers.',
    },
    engagementHook: {
      cn: 'Sankoré 大学的 marabout 走过我身边——只有一个停下问名字。爷爷晚上讲 Mansa Musa 18 吨黄金——89 年前的事——但 Cairo 数字 vs Mande 数字不一样。下一节:1414 妈妈听 Cairo 商人讲。',
      en: 'Marabouts walk past — only one stops to ask my name. That night my grandfather tells of Mansa Musa\'s eighteen tons of gold — eighty-nine years ago — but the Cairo numbers and Mande numbers do not match. Next: 1414, my mother hears a Cairo merchant.',
    },
    expectedLength: '460-510 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N4 — STORY: 1414 春 妈妈听 Cairo 商人讲 Mansa Musa 黄金影响
  // ═══════════════════════════════════════════════════
  {
    id: 4,
    phase: 'story',
    cosplay: 'Aisha',
    narrativeRef: '§3 line 96-113 Cairo 通胀 + Sarah P0.5 修订 (5-10 年学界争议)',
    content: {
      cn:
        '1414 春。我 15 岁。\n\n' +
        '一个 Cairo 商人来 Timbuktu 收皮货——他在我家住三晚——爸爸 Yaqub 跟他用阿拉伯语谈生意。妈妈 Fatima 做晚饭——一边切肉,一边听。\n\n' +
        'Cairo 商人喝完汤说:「我爸爸的爸爸亲眼见过 Mansa Musa 1324 走在 Cairo 街上——给金子给穷人、乞丐、商人——一连几个星期。」\n\n' +
        '妈妈说:「我们这边的故事是 18 吨。」\n\n' +
        '商人笑:「18 吨,可能。但我爸爸说——之后的事,你们 Mande 这边可能不知道。Cairo 金价掉了。掉得厉害,al-\'Umari 学者写过,影响 5 到 10 年——学界还争,但确有一段——Cairo 人花金子比花铜还多。」\n\n' +
        '妈妈手停了——还拿着切肉的刀。我坐在角落听。\n\n' +
        '——1324 从 Mande 大地走出去的皇帝,89 年前撒的金子。动了 5000 km 外一座城市的经济。我祖国不只是 Sundiata 史诗里的故事。我祖国——曾经摇过世界。\n\n' +
        '我 15 岁。我第一次理解 mansa 不是 「皇帝」 一个翻译——是一种力量。',
      en:
        'Spring 1414. I am fifteen.\n\n' +
        'A Cairo merchant comes to Timbuktu for hides. He stays three nights at our house. My father Yaqub speaks Arabic with him about trade. My mother Fatima cooks dinner — slicing meat, listening.\n\n' +
        'The merchant finishes his soup and says: "My father\'s father saw Mansa Musa walking the streets of Cairo in 1324. He said — Mansa Musa gave gold to the poor, the beggars, the merchants — for weeks together."\n\n' +
        'My mother says: "Our story says eighteen tons."\n\n' +
        'The Cairo merchant laughs. "Eighteen tons — perhaps. But what happened after — you Mande here may not know. Cairo\'s gold price fell — fell hard. The scholar al-\'Umari wrote of it. The effect, five years, ten years, scholars are still arguing, but there was a stretch when Cairo people spent gold faster than copper."\n\n' +
        'My mother\'s hand stops. She is still holding the knife.\n\n' +
        'I sit in the corner and listen.\n\n' +
        'An emperor who walked out of our Mande land in 1324 — eighty-nine years ago — the gold he scattered moved the economy of a city five thousand kilometers away. My homeland is not only a story in the Sundiata epic. My homeland — once moved the world.\n\n' +
        'I am fifteen. I understand for the first time that mansa is not just a translation for "emperor." It is a kind of force.',
    },
    deliverGoal: {
      cn: '1414 春 Cairo 商人到我家三晚——讲他爸爸的爸爸亲眼见 Mansa Musa 1324 在 Cairo 街上撒金子——Cairo 金价掉,al-\'Umari 学者写过,影响 5-10 年(学界争)。妈妈手停了——还拿着切肉的刀。我 15 岁第一次理解 mansa 不是 「皇帝」 一个词,是一种力量。',
      en: 'Spring 1414 — a Cairo merchant stays three nights. He says his grandfather saw Mansa Musa walking Cairo\'s streets in 1324, scattering gold. Cairo\'s gold price fell. The scholar al-\'Umari wrote of it; the effect lasted five to ten years (scholars are still arguing). My mother\'s hand stops on the knife. At fifteen I understand for the first time that mansa is not a translation of "emperor" — it is a kind of force.',
    },
    engagementHook: {
      cn: 'Cairo 商人讲 1324 Mansa Musa 撒金子——Cairo 金价掉 5-10 年。妈妈手停在切肉的刀上。我祖国曾经摇过世界。下一节:1414 夏街头 12,000 奴隶后裔的故事。',
      en: 'A Cairo merchant tells of 1324 — Mansa Musa scattering gold, Cairo\'s gold price falling for five to ten years. My mother\'s hand stops on the knife. My homeland once moved the world. Next: summer 1414, the 12,000 in the streets.',
    },
    expectedLength: '500-540 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N5 — STORY: 1414 夏 街头 12,000 奴隶后裔的故事 ⭐ cross-lens micro-detail
  // ═══════════════════════════════════════════════════
  {
    id: 5,
    phase: 'story',
    cosplay: 'Aisha',
    narrativeRef: '§3 line 101 + 424 12,000 enslaved 朝圣队伍 + Sarah audit §6.2 inconvenient-truth anchor + Ibn Battuta 1353 见过后裔',
    content: {
      cn:
        '1414 夏。我 15 岁。\n\n' +
        '一个下午——我跟 Idris 在 Timbuktu 集市——一个老 jeli (口传歌手) 坐在棕榈树下,围了 7 个孩子。我们停下听。\n\n' +
        '老 jeli 唱的不是 Sundiata。他唱:\n\n' +
        '「89 年前 Mansa Musa 走出 Niani 那天——后面跟 80 头骆驼,每头驮 300 磅黄金,还跟 12,000 个人。每人手里捧 4 磅黄金。这 12,000 个——是奴隶。」\n\n' +
        '老 jeli 停一下,看孩子们。\n\n' +
        '「他们走 8000 km。很多没活到 Mecca。活到的——很多留在 Cairo——卖给 Mamluk 苏丹的人。\n\n' +
        '60 年后——一个摩洛哥旅行家 Ibn Battuta 1353 在 Mali 待 8 个月,回去写一本书。他在书里写:他在 Cairo 见过那 12,000 当中一些人的孙子——还在给苏丹做事。」\n\n' +
        '我 15 岁站在棕榈树下听——那 12,000 个跟我一样是 Mande 人——但没人记得他们的名字。\n\n' +
        '我们家有一个 50 岁的厨娘 Awa——她妈妈是 1324 那批 12,000 当中没去 Mecca、被卖回 Niani 的人。所以这 12,000 不是抽象——是 Awa 妈妈。\n\n' +
        'Mansa Musa 撒金动了一座城市经济——是「Mande 怎么伟大」的故事。12,000 个人手捧 4 磅金子走 8000 km——是另一个故事。\n\n' +
        '两个故事是同一件事的两面。多数 jeli 唱 Sundiata 不唱这个。这个 jeli 唱了。',
      en:
        'Summer 1414. I am fifteen.\n\n' +
        'One afternoon, Idris and I are at the Timbuktu market. An old jeli (oral singer) sits under a palm tree, seven children around him. We stop to listen.\n\n' +
        'The old jeli is not singing Sundiata.\n\n' +
        'He sings: "Eighty-nine years ago — the day Mansa Musa left Niani — eighty camels followed him, each carrying three hundred pounds of gold. And twelve thousand people followed — each holding four pounds of gold in their hands. These twelve thousand were enslaved."\n\n' +
        'The old jeli pauses. His eyes meet the children.\n\n' +
        '"They walked eight thousand kilometers. Many did not reach Mecca. Of those who did, many remained in Cairo, sold to the men of the Mamluk sultan.\n\n' +
        'Sixty years later, a Moroccan traveler named Ibn Battuta — he stayed in Mali eight months in 1353 and went home to write a book — wrote in that book that in Cairo he had seen children of some of those twelve thousand. Their grandchildren — still working for the sultan in Cairo."\n\n' +
        'I am fifteen, standing under the palm tree, listening — those twelve thousand were Mande people, like me — but no one remembers their names.\n\n' +
        'In our house there is a fifty-year-old cook, Awa. Her mother was one of those twelve thousand — one who never reached Mecca and was sold back to Niani. So the twelve thousand are not abstract — they are Awa\'s mother.\n\n' +
        'Mansa Musa scattering gold in 1324 — moving the economy of a city — that is the story of "how great we Mande are."\n\n' +
        'Twelve thousand people carrying four pounds of gold each across eight thousand kilometers — that is another story.\n\n' +
        'Two sides of the same thing. Most jelis sing Sundiata, not this. This jeli sang it.',
    },
    deliverGoal: {
      cn: '1414 夏 Aisha 跟 Idris 听一个老 jeli 唱: Mansa Musa 1324 朝圣队伍——80 骆驼 + 12,000 个奴隶手捧 4 磅金子走 8000 km。Ibn Battuta 1353 在 Cairo 见过那 12,000 当中一些人的孩子的孩子还给 Mamluk 苏丹做事。"我们 Mande 怎么伟大" + "12,000 个手捧 4 磅金子走 8000 km" 是一件事的两面。',
      en: 'Summer 1414 — Aisha and Idris hear an old jeli sing: Mansa Musa\'s 1324 caravan — eighty camels and twelve thousand enslaved each carrying four pounds of gold for eight thousand kilometers. Ibn Battuta saw their grandchildren in Cairo in 1353, still working for the sultan. "How great we Mande are" and "twelve thousand carrying four pounds across eight thousand kilometers" are two sides of one thing.',
    },
    engagementHook: {
      cn: '老 jeli 唱:Mansa Musa 1324 队伍 12,000 奴隶捧 4 磅金子走 8000 km。Ibn Battuta 1353 在 Cairo 见过他们孙子。我祖国伟大 + 12,000 个人——是一件事的两面。下一节:1414 秋 Songhai 边境威胁。',
      en: 'An old jeli sings: 1324, twelve thousand enslaved, four pounds of gold each, eight thousand kilometers. Ibn Battuta saw their grandchildren in Cairo in 1353. My homeland\'s greatness — and twelve thousand people — are two sides of one thing. Next: autumn 1414, Songhai on the border.',
    },
    expectedLength: '500-550 字 CN ⭐ cross-lens micro-detail (12,000 enslaved)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N6 — STORY: 1414 秋 Songhai 部族开始威胁 — Mali 衰退第一信号
  // ═══════════════════════════════════════════════════
  {
    id: 6,
    phase: 'story',
    cosplay: 'Aisha',
    narrativeRef: '§4 line 856-858 Songhai 1430s 分裂 + line 859 Mali 弱化',
    content: {
      cn:
        '1414 秋。我 15 岁。\n\n' +
        '一个晚上——爸爸 Yaqub 从北边商队回来——堂屋里跟妈妈用 Mande 话低声说话。我假装睡——耳朵听。\n\n' +
        '爸爸:「Walata 那边——3 个 Mande 商队这个月被劫——是 Songhai。」\n\n' +
        '妈妈:「Songhai 是 Mali 的人,他们在 Gao,不动 Mali 商队。」\n\n' +
        '爸爸:「以前不动。今年开始动。Mansa Maghan III 30 岁——管不住北边。一个 Berber 向导跟我说,Songhai 部落在脱离 Mali。他们想 Gao 自治——可能 10 年、20 年——但 Songhai 会分出去。」\n\n' +
        '妈妈沉默。然后说:「我爷爷在 Mansa Musa 时期当 marabout——那时候 Mali 是从撒哈拉到森林一统。今天我们家窗外的世界——还是 Mali 吗?」\n\n' +
        '我 15 岁,从没听过妈妈这个语气。\n\n' +
        '爸爸:「还是。但 30 年后——可能不是。」\n\n' +
        '我闭眼没睡。第二天去 Sankoré 南墙下织布——还是织——但脑子里是爸爸的话: 「30 年后——可能不是。」\n\n' +
        'Mali 1324 鼎盛——89 年后——开始有裂缝。',
      en:
        'Autumn 1414. I am fifteen.\n\n' +
        'One night, my father Yaqub returns from a caravan in the north. In the front room he speaks with my mother in low Mande.\n\n' +
        'I pretend to sleep. I listen.\n\n' +
        'My father says: "Out by Walata — three Mande caravans were raided this month. It was Songhai."\n\n' +
        'My mother: "The Songhai are Mali people. They are in Gao. They do not raid Mali caravans."\n\n' +
        'My father: "They did not before. They have started this year. Mansa Maghan III is young, thirty, he cannot hold the north. I spoke with a Berber guide. He said the Songhai tribes are pulling away from Mali. They want Gao to be autonomous. Maybe ten years, maybe twenty — but the Songhai will break off from Mali."\n\n' +
        'My mother is silent. Then: "My grandfather was a marabout in Mansa Musa\'s time. Mali was one then, from the Sahara to the forest. The world outside our window today — is it still Mali?"\n\n' +
        'I am fifteen. I have never heard my mother speak in this tone.\n\n' +
        'My father says: "It is still Mali. But thirty years from now — perhaps not."\n\n' +
        'I keep my eyes closed and do not sleep. The next morning I go to the south wall of Sankoré and weave. I weave. In my head are my father\'s words: "Thirty years from now — perhaps not."\n\n' +
        'Mali Empire — at its peak under Mansa Musa in 1324. Eighty-nine years on — cracks.',
    },
    deliverGoal: {
      cn: '1414 秋夜爸爸 Yaqub 跟妈妈低声说: Walata 3 Mande 商队被 Songhai 劫。Mansa Maghan III 30 岁管不住北边。Berber 向导说 Songhai 想 Gao 自治。妈妈说"我爷爷 Mansa Musa 时期 Mali 是一统——今天还是 Mali 吗?"爸爸说"30 年后可能不是"。',
      en: 'Autumn 1414 — at night Father Yaqub tells Mother in a low voice: three Mande caravans raided by Songhai near Walata. Mansa Maghan III, thirty, cannot hold the north. A Berber guide says the Songhai want Gao to be autonomous. Mother says "in my grandfather\'s Mansa Musa time, Mali was one — today is the world outside our window still Mali?" Father says "It is. But thirty years from now — perhaps not."',
    },
    engagementHook: {
      cn: '爸爸夜里说: Songhai 劫 3 Mande 商队——他们想脱离 Mali。妈妈说今天还是 Mali 吗?爸爸:30 年后——可能不是。Mansa Musa 89 年后,Mali 第一道裂缝。下一节:1415 Quran 学校。',
      en: 'Father at night: Songhai raided three Mande caravans, they want to break away. Mother: is the world outside still Mali? Father: it is — but in thirty years, perhaps not. Eighty-nine years after Mansa Musa, the first cracks. Next: 1415, the Quran school.',
    },
    expectedLength: '500-550 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N7 — STORY: 1415 Quran 学校 — 少数派女学生
  // ═══════════════════════════════════════════════════
  {
    id: 7,
    phase: 'story',
    cosplay: 'Aisha',
    narrativeRef: '§3 line 781-790 Aisha 1413 一天作息 + line 794 想做 marabout 被拒',
    content: {
      cn:
        '1415。我 16 岁。\n\n' +
        '妈妈跟爸爸谈了 3 晚——最后决定: 让 Aisha 去 Sankoré 旁一个小 Quran 学校。\n\n' +
        'Sankoré 大学不收女生——但 Mansa Musa 时期起,Timbuktu 周边几个小 Quran 学校收女孩。我去的这个——老 marabout Sheikh Tahir 70 多岁——12 学生:10 男 2 女。我跟另一个女孩 Khadija (13 岁) 坐在最后一排。\n\n' +
        '上午 Quran + 阿拉伯语。下午 Mande 部族系谱 + 一点数学。\n\n' +
        '一天 Sheikh 让一个男孩背 Quran 第 18 章——错 3 处。Sheikh 让他坐下,看我:「Aisha,你来。」\n\n' +
        '我背,没错。男孩涨红脸——下课不跟我说话。\n\n' +
        '回家路上 Khadija 拉我的手:「你背得太对了——他不会原谅你。」\n\n' +
        '我说:「Quran 没说女人不能背对。」\n\n' +
        'Khadija 笑:「Quran 没说——但村里说。」\n\n' +
        '我 16 岁。我第一次明白 Mali 不是「平等」也不是「不平等」——是一种「Quran 没禁——但你背对了——男孩还是会涨红脸」 的中间地带。',
      en:
        '1415. I am sixteen.\n\n' +
        'My mother and father spoke for three nights. Finally they decided: Aisha will attend a small Quran school next to Sankoré.\n\n' +
        'Sankoré itself does not take female students. But since Mansa Musa\'s time, several small Quran schools around Timbuktu have taken girls. The one I attend — Sheikh Tahir, an old marabout in his seventies — has twelve students: ten boys and two girls. I sit in the back row with the other girl, Khadija, thirteen.\n\n' +
        'Mornings: Quran recitation and Arabic. Afternoons: Mande genealogy and a little mathematics.\n\n' +
        'One day Sheikh Tahir asks a boy to recite chapter 18. He makes three mistakes. Sheikh tells him to sit and turns to me: "Aisha. You."\n\n' +
        'I recite. No mistakes.\n\n' +
        'The boy\'s face goes red. After class he does not speak to me.\n\n' +
        'Walking home, Khadija takes my hand: "You recited too well. He will not forgive you."\n\n' +
        'I say: "The Quran does not say a woman cannot recite well."\n\n' +
        'Khadija laughs. "The Quran does not. The village does."\n\n' +
        'I am sixteen. I understand for the first time that Mali is not "equal" and not "unequal" — it is a middle place where the Quran does not forbid, but you recite well and a boy\'s face still goes red.',
    },
    deliverGoal: {
      cn: '1415 我 16 岁——妈妈爸爸谈 3 晚,让我去 Sankoré 旁小 Quran 学校(10 男 2 女)。Sheikh Tahir 70 多岁。一天一个男孩背错 Quran 18 章 3 处。Sheikh 让我背——我没错,男孩涨红脸。Khadija 13 岁说"你背太对了——他不会原谅你"。Mali 不是平等也不是不平等,是中间地带。',
      en: 'In 1415, sixteen — Mother and Father spoke for three nights and sent me to a small Quran school near Sankoré (ten boys, two girls). Sheikh Tahir, seventies. One day a boy mis-recites three places in chapter 18. Sheikh asks me. I recite without mistake. The boy\'s face goes red. Khadija, thirteen, says "you recited too well — he will not forgive you." Mali is not equal and not unequal — it is a middle place.',
    },
    engagementHook: {
      cn: 'Sankoré 旁小 Quran 学校 10 男 2 女。一个男孩背错 18 章 3 处——Sheikh 让我背,我没错。他涨红脸。Khadija:你背得太对了。Mali 是中间地带——Quran 没禁,但村里禁。下一节:1416 妈妈。',
      en: 'A small Quran school by Sankoré, ten boys and two girls. A boy mis-recites chapter 18 in three places — Sheikh asks me — I recite perfectly — his face goes red. Khadija: you recited too well. Mali is a middle place, the Quran does not forbid; the village does. Next: 1416, my mother.',
    },
    expectedLength: '500-550 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N8 — STORY: 1416 春 妈妈被 Songhai raiders 带走 careful framing
  // ═══════════════════════════════════════════════════
  {
    id: 8,
    phase: 'story',
    cosplay: 'Aisha',
    narrativeRef: '§4 line 856-859 Songhai 1430s 分裂前夜 raid + 7thgrader careful scaffold',
    content: {
      cn:
        '1416 春。我 17 岁。读这一节的你——这一节比上一节难。我慢讲。\n\n' +
        '一个早上——爸爸跟商队走北边 4 周。Idris 14 岁去爷爷家。家里只有妈妈跟我。\n\n' +
        '中午——城南方向传来声音——马蹄、叫喊、Mande 话夹 Songhai 话。\n\n' +
        '妈妈站起来——脸色变了,不说话。拉我手,我们跑到院子角的 mil (谷物) 仓,她推我进去说:「Aisha——蹲下,别出声——别看。」\n\n' +
        '她转身回堂屋。\n\n' +
        '我 17 岁蹲在 mil 仓里。仓壁是竹子——我从竹缝看出去:\n\n' +
        '3 个穿 Songhai 红头巾的男人冲进院子。妈妈站在堂屋门口——没跑——她举手。我以为是阻止。后来我想:她举手是让他们看见她——不让他们走到院子角。\n\n' +
        '他们把妈妈带走。走的时候妈妈没回头看 mil 仓。她知道我在里面。她不看,他们就不知道。\n\n' +
        '——\n\n' +
        '妈妈是 qadi 家族 3 代后裔。Songhai raiders 不知道她是谁——他们看见的是一个 38 岁 Mande 女人。14 世纪的 raid 不挑——身份跟暴力没有对应。\n\n' +
        '妈妈再没回来。爸爸 4 周后回家——找了 6 个月——没找到。\n\n' +
        '停 30 秒。让 17 岁的我蹲在 mil 仓竹缝边坐一会儿。',
      en:
        'Spring 1416. I am seventeen.\n\n' +
        'You who read this — this section is harder than the last. I will go slowly.\n\n' +
        'One morning — my father Yaqub leaves with the caravan, four weeks north. Idris, fourteen, goes to my grandfather\'s house. Only my mother and I are home.\n\n' +
        'Noon — sounds from the south of the city — hooves, shouts, Mande mixed with Songhai.\n\n' +
        'My mother stands up — her face changes — she does not speak — she takes my hand, we run to the mil (grain) shed in the corner of the courtyard, she pushes me inside, she says: "Aisha, crouch, make no sound, do not look."\n\n' +
        'She turns and goes back into the house.\n\n' +
        'I am seventeen, crouched in the shed. The walls are bamboo. I look through the gaps.\n\n' +
        'Three men in the red turbans of Songhai rush into our courtyard. I see my mother in the doorway. She does not run. She raises her hand. I think she raises her hand to stop them. Later I understand — she raised her hand so they would see her, so they would not walk to the corner.\n\n' +
        'They take her.\n\n' +
        'As they leave, she does not look back at the mil shed. She knows I am inside. If she does not look, they will not know.\n\n' +
        'My mother was three generations of qadi, descended from a Sankoré marabout. The Songhai raiders did not know who she was. They saw a thirty-eight-year-old Mande woman. A fourteenth-century raid does not choose. Identity and violence have no correspondence.\n\n' +
        'She did not come back. Father returned four weeks later, searched for six months, found nothing.\n\n' +
        'Stop for thirty seconds. Let seventeen-year-old me sit at the bamboo gap a moment.',
    },
    deliverGoal: {
      cn: '1416 春爸爸跟商队北 4 周——只有妈妈跟我,3 个 Songhai 红头巾 raiders 冲进院子。妈妈把我推进 mil 仓说"蹲下别出声别看",她回堂屋举手让他们看见她,不让他们走到角落。我从竹缝看见,他们带走妈妈——她不回头看 mil 仓。妈妈是 qadi 家族 3 代后裔,raiders 不知道——14 世纪 raid 不挑,身份跟暴力没有对应。',
      en: 'Spring 1416 — Father gone with caravan four weeks north — only Mother and me — three Songhai raiders in red turbans rush into the courtyard. Mother pushes me into the mil shed: "crouch, make no sound, do not look." She returns to the house, raises her hand so they see her and not the corner. From the bamboo gap I see them take her. She does not look back at the shed. Mother was three generations of qadi, descended from a Sankoré marabout, raiders did not know, fourteenth-century raids do not choose, identity and violence have no correspondence.',
    },
    engagementHook: {
      cn: '这一节难。妈妈把我推进 mil 仓——她回堂屋举手让 raiders 看她不看角落,他们带走她。她不回头——她不看,他们就不知道。停 30 秒。下一节:1416-1418 Bure 黄金区。',
      en: 'A harder section. Mother pushes me into the mil shed — she returns and raises her hand so they see her, not the corner — they take her — she does not look back, if she does not look, they will not know. Stop for thirty seconds. Next: 1416-1418, Bure.',
    },
    expectedLength: '530-580 字 CN careful framing',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N9 — STORY: 1416-1418 在 Bure 黄金区跟外婆生活 — 黄金生产链 ground level
  // ═══════════════════════════════════════════════════
  {
    id: 9,
    phase: 'story',
    cosplay: 'Aisha',
    narrativeRef: '§2 line 147-148 Bambuk + Bure 黄金矿区 + line 401-402 + §3 黄金生产链',
    content: {
      cn:
        '1416 夏。爸爸决定送我跟 Idris 去南边——外婆 Hawa 家——Bure 黄金森林边的村子。爸爸自己留 Timbuktu 继续找妈妈。\n\n' +
        '我们走了 3 周——驴车——700 km——从撒哈拉边缘的 Timbuktu 走到森林边的 Bure。\n\n' +
        '外婆 65 岁——爸爸的妈妈——家在一条小河边,河水从北边山里下来。\n\n' +
        '我跟 Idris 第一次见黄金生产。不是 Mansa Musa 朝圣队伍里的金块——是河里的金沙。Mande 男女弯腰站在河里,一桶一桶捞河沙。用陶碗筛——一天 12 小时,筛出小金粒。好的时候,一人筛出来的金子值 1 头小山羊。坏的时候——什么都没有。\n\n' +
        '我帮外婆筛了 4 个月。\n\n' +
        '我 17 岁在 Bure 河里弯腰——我手里捧的金粒,可能是 89 年前 Mansa Musa 12,000 个奴隶捧过的金子的某种延续。我的腰酸。他们的腰酸——我的脚泡在水里——他们的脚泡在水里。我想起 1414 那个老 jeli 唱的歌。\n\n' +
        '我们家——筛金沙,卖给撒哈拉商队。商队卖给 Cairo,Cairo 卖给威尼斯,威尼斯铸 Florin 金币——欧洲。一根线,从外婆的 Bure 河——拉到 5000 km 外。',
      en:
        'Summer 1416. Father decides to send Idris and me south — to Grandmother Hawa\'s village, on the edge of the Bure gold forest. He stays in Timbuktu, still searching.\n\n' +
        'Three weeks of donkey cart — seven hundred kilometers — from Timbuktu on the edge of the Sahara to Bure on the edge of the forest.\n\n' +
        'Grandmother is sixty-five — Father\'s mother. Her house sits beside a small river that runs down from the northern hills.\n\n' +
        'For the first time, Idris and I see gold being made.\n\n' +
        'Not the bars in Mansa Musa\'s pilgrimage caravan — sand in a river. Mande men and women bend in the water, lifting bucket after bucket of riverbed sand, sifting in clay bowls — twelve hours a day — for the small grains.\n\n' +
        'Twelve hours of sifting. On a good day, what one person finds is worth one small goat. On a bad day, nothing.\n\n' +
        'I sift with Grandmother for four months.\n\n' +
        'I am seventeen, bent in the Bure river. The grains I hold may be a continuation of the gold the twelve thousand carried for Mansa Musa eighty-nine years ago. My back aches. Theirs ached. My feet are in the water. Theirs were too.\n\n' +
        'I think of the old jeli\'s song from 1414.\n\n' +
        'Our family sifts the sand. The caravans buy it. They sell to Cairo. Cairo sells to Venice. Venice mints florins. Europe.\n\n' +
        'One thread — from Grandmother\'s Bure river — to five thousand kilometers away.',
    },
    deliverGoal: {
      cn: '1416 夏 Aisha + Idris 走 700 km 南到 Bure 外婆家——Mande 男女河里弯腰 12 小时筛金沙 + 一天值 1 头小山羊 (好天)。我筛 4 个月——我手里捧的金粒可能是 89 年前 12,000 奴隶捧过的金子的延续。一根线: Bure 河→撒哈拉商队→Cairo→威尼斯 Florin→欧洲——5000 km。',
      en: 'Summer 1416 — Aisha and Idris travel seven hundred kilometers south to Grandmother Hawa near Bure. Mande men and women bend in the river twelve hours a day sifting gold sand — a good day is worth one small goat. I sift for four months. The grains I hold may continue the gold the twelve thousand carried eighty-nine years ago. One thread runs from Grandmother\'s river to five thousand kilometers away — caravan to Cairo to Venice florins to Europe.',
    },
    engagementHook: {
      cn: 'Bure 河里弯腰 12 小时筛金沙——值 1 头小山羊一天。我手里的金粒可能是 89 年前 12,000 奴隶捧过金子的延续。一根线: 我外婆河→Cairo→威尼斯 Florin→欧洲。下一节:1419 回 Timbuktu。',
      en: 'Bent in the Bure river twelve hours a day sifting gold sand — worth one small goat. The grains I hold may continue the gold the twelve thousand carried eighty-nine years ago. One thread: Grandmother\'s river to Cairo to Venice florins to Europe. Next: 1419, back to Timbuktu.',
    },
    expectedLength: '500-540 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N10 — STORY: 1419 17 岁回 Timbuktu — Sankoré ulama 教 al-Sa'di Tarikh es-Sudan ?
  // 等等 — Tarikh es-Sudan 1655 写的。Aisha 1419 不能学。改: 教她 14 世纪 Sankoré 已有的 Mande 历史 + 阿拉伯文献
  // ═══════════════════════════════════════════════════
  {
    id: 10,
    phase: 'story',
    cosplay: 'Aisha',
    narrativeRef: '§3 line 779-805 Aisha 教 200 女孩传统起点 + Sankoré ulama',
    content: {
      cn:
        '1419。我 20 岁。\n\n' +
        '1418 我 19 岁——跟 Idris 从 Bure 回 Timbuktu。爸爸还在找妈妈没找到。我决定不出嫁、不去外婆家——留 Timbuktu。\n\n' +
        '1419——Sankoré 老 ulama (高级伊斯兰学者) Sheikh Abd al-Rahman——通过爸爸认识我。爸爸说:「我女儿背 Quran 30 章、读阿拉伯、会 Mande 系谱——你能教她什么?」\n\n' +
        'Sheikh 60 多岁。他没收我做正式学生——Sankoré 不收女生——但每周三下午让我去他家书房 1 小时读阿拉伯历史。\n\n' +
        '他教我 al-\'Umari 1340 关于 Mansa Musa 1324 朝圣的同代记录,Ibn Khaldun 1377《历史绪论》,Ibn Battuta 1355 Rihla 关于 Mali 的章节。\n\n' +
        '一天他说:「Aisha,你 20 岁——你比 Sankoré 一半男生背 Quran 准、比 80% 男生读阿拉伯快——但不会有正式 marabout 位子。」\n\n' +
        '我没说话。\n\n' +
        '他继续:「你能做的——回家教其他女孩。我看过你,你有 jeli 的血。你爷爷讲 Sundiata——你能传。」\n\n' +
        '我 20 岁。我决定: 家里开一个小教室。',
      en:
        '1419. I am twenty.\n\n' +
        'In 1418 — I was nineteen — Idris and I returned from Bure. Father was still searching, with no result. I decided: I will not marry. I will not return to Grandmother\'s. I will stay in Timbuktu.\n\n' +
        '1419 — an old ulama at Sankoré (a senior Islamic scholar) named Sheikh Abd al-Rahman — through my father, knew me. Father said to him: "My daughter recites all thirty chapters of the Quran, reads Arabic, knows Mande genealogy. What can you teach her?"\n\n' +
        'Sheikh Abd al-Rahman, in his sixties, did not take me as a formal student. Sankoré does not take women. But every Wednesday afternoon he let me go to his study and read Arabic history with him for an hour.\n\n' +
        'He taught me al-\'Umari\'s 1340 contemporary record of Mansa Musa\'s 1324 pilgrimage. He taught me Ibn Khaldun\'s 1377 Muqaddimah. He taught me the Mali chapters of Ibn Battuta\'s 1355 Rihla.\n\n' +
        'One day he said to me: "Aisha. You are twenty. You recite the Quran more accurately than half the male students at Sankoré. You read Arabic faster than eighty percent of them. But you will not have a formal marabout\'s seat."\n\n' +
        'I did not speak.\n\n' +
        'He went on: "What you can do is go home and teach other girls. I have watched you. You have the blood of a jeli. Your grandfather sang Sundiata. You can carry it."\n\n' +
        'I am twenty. I decide: I will open a small classroom in my home.',
    },
    deliverGoal: {
      cn: '1419 我 20 岁回 Timbuktu。Sankoré 老 ulama Sheikh Abd al-Rahman 60 多岁——通过爸爸——每周三下午 1 小时教我阿拉伯历史 (al-\'Umari 1340 / Ibn Khaldun 1377 / Ibn Battuta 1355 Rihla)。他说"你比一半 Sankoré 男生背 Quran 准,但你不会有正式 marabout 位子。回家教其他女孩——你有 jeli 的血。"我决定家里开小教室。',
      en: '1419 — twenty, back in Timbuktu. Sheikh Abd al-Rahman, an old Sankoré ulama in his sixties, through my father gives me Wednesday afternoons in his study — al-\'Umari\'s 1340 record, Ibn Khaldun\'s 1377 Muqaddimah, Ibn Battuta\'s 1355 Rihla on Mali. He says: "You recite the Quran better than half of Sankoré\'s men, but you will not have a formal marabout\'s seat. Go home and teach girls. You have the blood of a jeli." I decide to open a small classroom in my home.',
    },
    engagementHook: {
      cn: 'Sankoré 老 ulama Sheikh Abd al-Rahman 私下教我阿拉伯历史。他说"你比一半男生背 Quran 准——但不会有正式位子。回家教其他女孩——你有 jeli 的血。"我决定家里开教室。下一节:14 世纪女性识字 vs 21 世纪。',
      en: 'An old Sankoré ulama, Sheikh Abd al-Rahman, privately teaches me Arabic history. "You recite better than half of them, but you will not have a formal seat. Go home and teach girls. You have the blood of a jeli." I open a classroom at home. Next: fourteenth-century female literacy and twenty-first.',
    },
    expectedLength: '480-530 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N11 — REFLECTION: 14 世纪女性识字 vs 21 世纪 Malala — 600 年模板
  // ═══════════════════════════════════════════════════
  {
    id: 11,
    phase: 'reflection',
    cosplay: 'Aisha',
    narrativeRef: '§3 line 802 5 代非洲女性识字根 + Sarah audit Q5 跨时空 reflection',
    content: {
      cn:
        '1419 秋——我开了我家小教室。第一年 5 个女孩。第二年 12 个。最大 14 岁,最小 7 岁。\n\n' +
        '我教 Quran + 阿拉伯字母 + Mande 几何花纹 + 一点 al-\'Umari 历史 + Sundiata 7 岁拔猴面包树。\n\n' +
        '——\n\n' +
        '13 岁的你——读到这里——我问你一件事。\n\n' +
        '我 1419——20 岁,在 Timbuktu 家小教室。教 12 个女孩 Quran。没有正式 marabout 位子。没有书。我教的——大部分会随我死掉。\n\n' +
        '你 21 世纪读这一节。\n\n' +
        '2012——巴基斯坦,15 岁女孩 Malala 因坚持上学被塔利班枪击头部。她活下来。17 岁拿诺贝尔和平奖——现在 20 多岁——还在为女性识字斗争。\n\n' +
        '我跟 Malala 之间——600 年。我跟 Malala 之间——5 个大洲。\n\n' +
        '停 30 秒。问自己:\n\n' +
        '14 世纪 Mali 不让女人做正式 marabout——21 世纪某些地方不让女人上学,这两件事。是同一个模板——还是两个不同的事巧合长得像?\n\n' +
        '回答没有标准答案。回答需要你想清楚——600 年里发生了什么、没发生什么。',
      en:
        'Autumn 1419 — I opened the small classroom in my home. The first year, five girls. The second, twelve. Oldest fourteen, youngest seven.\n\n' +
        'I teach Quran, the Arabic alphabet, the Mande geometric patterns, a little of al-\'Umari\'s history, and Sundiata at seven pulling up the baobab.\n\n' +
        'You who are thirteen, reading this — I want to ask you something.\n\n' +
        'In 1419, I was twenty — teaching twelve girls the Quran in my home in Timbuktu. I had no formal marabout\'s seat. I had no book. Most of what I taught would die with me.\n\n' +
        'You read this in the twenty-first century.\n\n' +
        'In 2012 — Pakistan — a fifteen-year-old named Malala was shot in the head by the Taliban for insisting on going to school. She survived. At seventeen she received the Nobel Peace Prize. She is now in her twenties, still fighting for female literacy.\n\n' +
        'Between me and Malala — six hundred years.\n\n' +
        'Between me and Malala — five continents.\n\n' +
        'Pause thirty seconds. Ask yourself a question:\n\n' +
        'Fourteenth-century Mali did not allow a woman to be a formal marabout. In some places in the twenty-first century women are not allowed to go to school. Is this the same template — or two different things that happen to look alike?\n\n' +
        'No right answer. You need to think clearly:\n\n' +
        'In six hundred years — what happened — and what did not.',
    },
    deliverGoal: {
      cn: '1419 秋开教室,第 1 年 5 女孩,第 2 年 12 (7-14 岁)。教 Quran + 阿拉伯字母 + Mande 几何 + al-\'Umari + Sundiata 拔树。reflection: 我跟 Malala 600 年 + 5 大洲——14 世纪 Mali 不让女人做正式 marabout 跟 21 世纪某些地方不让女人上学——是同一模板还是两件不同的事巧合长得像?',
      en: 'Autumn 1419 — opened the classroom. Year one, five girls. Year two, twelve (seven to fourteen). Teach Quran, Arabic letters, Mande geometric patterns, al-\'Umari, Sundiata pulling the tree. Reflection: between me and Malala — six hundred years and five continents. Fourteenth-century Mali did not allow women to be formal marabouts; some places in the twenty-first century do not allow women to school. Same template, or two different things that look alike?',
    },
    engagementHook: {
      cn: '我开教室教 12 个女孩——600 年后 Malala 因坚持上学被枪击头。14 世纪 Mali vs 21 世纪某些地方——同一模板还是两件不同的事巧合长得像?停 30 秒。',
      en: 'I open a classroom for twelve girls — six hundred years later Malala is shot for insisting on school. Fourteenth-century Mali and twenty-first-century elsewhere — same template, or two different things that look alike? Pause thirty seconds.',
    },
    expectedLength: '480-530 字 CN + 真问题',
    expectsRealAnswer: true,
  },

  // ═══════════════════════════════════════════════════
  // N12 — META: closing — al-Sa'di 1655 沙漠藏书 + 4 Topic information preservation
  // ═══════════════════════════════════════════════════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§3 line 1325-1337 al-Sa\'di 沙漠藏书 + 2012 Timbuktu 危机 + Sarah audit §6.3 cross-Topic information preservation',
    content: {
      cn:
        '你跟 Aisha 走了 1413-1419——6 年。\n\n' +
        '虚构合成人物——但她代表的是真人:14-16 世纪 Timbuktu 很多 qadi 家庭女孩能背 Quran、教其他女孩——但没书、没名字。5 代人塑造非洲女性识字传统的根。\n\n' +
        '——\n\n' +
        '236 年后——1655——一个叫 al-Sa\'di 的 Sankoré 学者写完《Tarikh es-Sudan》(苏丹编年史)。1591 摩洛哥火枪兵打 Songhai、抢 Sankoré 图书馆、70 多个 marabout 被押到 Marrakech——al-Sa\'di 亲眼见。\n\n' +
        '这本手稿后来由 Timbuktu 的 Haidara 家族世代保存。\n\n' +
        '2012 年 Timbuktu 被武装组织占领——他们要烧手稿。Haidara 家族 + 当地 librarian 冒命把 30 万件手稿藏的藏、运的运,保住了。从 1655 al-Sa\'di 提笔。到 2012 Haidara 家族抢救——357 年的知识保存。\n\n' +
        '——\n\n' +
        '4 个 Topic——Renaissance 印刷机 / Reformation 95 Theses 4 周印遍德国 / AoE Columbus 1493 信 9 版 / Mali al-Sa\'di 沙漠藏书——同一件事的不同面: 14-17 世纪人怎么把知识传给 400 年后的你。\n\n' +
        '准备记忆考核?',
      en:
        'You walked with Aisha through 1413-1419 — six years.\n\n' +
        'A fourteen-year-old Mande girl. A composite — not a real person. What she stands for is real.\n\n' +
        'In fourteenth- to sixteenth-century Timbuktu, many girls born into qadi families could recite the Quran, could teach other girls — but had no books, no names. Five generations of them shaped the root of female literacy in West Africa.\n\n' +
        'One more thing — between her and you, there is something else.\n\n' +
        '236 years later — 1655 — a Sankoré scholar named al-Sa\'di — born five streets from Aisha\'s classroom, finished a book called "Tarikh es-Sudan" (the Sudan Chronicle). In 1591 Moroccan musketeers had defeated Songhai, sacked the Sankoré library, and marched seventy marabouts to Marrakech. Al-Sa\'di saw it.\n\n' +
        'The manuscript was kept across generations by the Haidara family of Timbuktu.\n\n' +
        'In 2012 — the twenty-first century — Timbuktu was occupied by an armed group. They wanted to burn the manuscripts. The Haidara family and local librarians, risking their lives, hid and moved three hundred thousand manuscripts. They were saved. From al-Sa\'di setting down his pen in 1655 to the Haidara rescue in 2012 — three hundred and fifty-seven years of knowledge preservation.\n\n' +
        'Four Topics — Renaissance printing press, Reformation 95 Theses spreading across Germany in four weeks, Age of Exploration Columbus\'s 1493 letter in nine printings, Mali al-Sa\'di\'s manuscripts in the desert —\n\n' +
        'are different sides of the same thing: how people in the fourteenth through seventeenth centuries carried knowledge to you, four hundred years later.\n\n' +
        'Ready for the mastery check?',
    },
    deliverGoal: {
      cn: 'Aisha 是合成——但 14-16 Timbuktu 几代 qadi 家女孩能背 Quran 教女孩没书没名字,是非洲女性识字 5 代根。236 年后 al-Sa\'di 1655 写 Tarikh es-Sudan + 沙漠藏家族手稿。2012 Timbuktu 居民冒命保 30 万件——357 年传到 21 世纪。4 个 Topic information preservation: Renaissance 印刷机 / Reformation 95 Theses 4 周 / AoE 1493 信 9 版 / Mali al-Sa\'di 沙漠——都是 14-17 世纪人怎么把知识传给 400 年后的你。',
      en: 'Aisha is composite, but real generations of qadi-family girls in fourteenth- to sixteenth-century Timbuktu recited the Quran and taught other girls — without books and without names — and were the root of West African female literacy across five generations. 236 years later, al-Sa\'di wrote Tarikh es-Sudan in 1655 and hid the family manuscripts in the desert. In 2012, Timbuktu residents risked their lives to save three hundred thousand manuscripts. Some of al-Sa\'di\'s 1655 desert manuscripts crossed 357 years to reach the twenty-first century. Four Topics — Renaissance printing, Reformation 95 Theses, AoE Columbus 1493 letter in nine printings, Mali al-Sa\'di in the desert, are sides of the same thing: how fourteenth- through seventeenth-century people carried knowledge to you four hundred years later.',
    },
    engagementHook: {
      cn: '4 Topic 共同 thread: Renaissance 印刷机 / Reformation 95 Theses 4 周 / AoE 1493 信 9 版 / Mali al-Sa\'di 1655 沙漠——14-17 世纪人怎么把知识传给 400 年后的你。准备记忆考核?',
      en: 'Four Topics, one thread: Renaissance press, Reformation 95 Theses in four weeks, AoE Columbus 1493 letter in nine printings, Mali al-Sa\'di in the desert in 1655 — how fourteenth- through seventeenth-century people carried knowledge to you four hundred years later. Ready for the mastery check?',
    },
    expectedLength: '500-560 字 CN closing + 4 Topic preservation thread',
    expectsRealAnswer: false,
  },
];

// ═══════════════════════════════════════════════════
// 导出 lens (Aisha 顶层包装)
// ═══════════════════════════════════════════════════

export var aishaLens = {
  id: 'aisha-1413',
  icon: '📖',
  name: { en: 'Aisha', cn: '阿伊莎' },
  nameCn: '阿伊莎 (虚构合成 1413-1419 Timbuktu Mande 女孩)',
  role: {
    cn: 'Mali Empire 1413-1419 Timbuktu Mande / receiving-end / female-literacy-carrier (女性识字传承者) 视角',
    en: 'Mali Empire 1413-1419 Timbuktu Mande / receiving-end / female-literacy-carrier lens',
  },
  description: {
    cn: '你是 Aisha,一个虚构合成的 14 岁 Mande 女孩,1413 年住在 Timbuktu——Mali 帝国 Mansa Musa 1337 死 76 年后,Songhai 1591 分裂 178 年前——帝国第二阶段缓慢衰退期。妈妈 Fatima 是 qadi (法官) 家族 3 代后裔,Sankoré marabout 血脉;爸爸 Yaqub 是 Mande 跨撒哈拉商人。6 年里你听爷爷讲 Sundiata 7 岁拔猴面包树 (1413)、听 Cairo 商人讲 Mansa Musa 1324 撒金子的余波 (1414 春)、听街头 jeli 唱 12,000 enslaved 走 8000 km 的故事 (1414 夏)、听爸爸夜里说 Songhai 边境威胁 (1414 秋)、在小 Quran 学校做少数派女学生 (1415)、看妈妈被 Songhai raiders 带走 (1416 春)、跟外婆在 Bure 黄金区筛金沙 4 个月 (1416-1418)、20 岁回 Timbuktu 跟 Sankoré 老 ulama 私下学阿拉伯历史 (1419)、家里开小教室教 12 个女孩 Quran——你不是数字,是有名字 + 有 Quran + 有 Mande 几何花纹 + 有 Sundiata 史诗记忆的女孩。',
    en: 'You are Aisha, a fictional composite fourteen-year-old Mande girl living in Timbuktu in 1413 — seventy-six years after Mansa Musa\'s 1337 death, one hundred seventy-eight years before Songhai\'s 1591 fall — in the Mali Empire\'s second-phase slow decline. Your mother Fatima descends from three generations of qadi (judges) and a Sankoré marabout; your father Yaqub is a Mande trans-Saharan merchant. Over six years you hear your grandfather sing seven-year-old Sundiata pulling up the baobab (1413), hear a Cairo merchant tell of the aftershocks of Mansa Musa\'s 1324 gold (spring 1414), hear an old jeli sing the twelve thousand enslaved who carried four pounds of gold across eight thousand kilometers (summer 1414), hear your father whisper of Songhai raids on the border (autumn 1414), study as one of two girls in a small Quran school (1415), watch your mother taken by Songhai raiders (spring 1416), sift gold sand four months with your grandmother in Bure (1416-1418), return to Timbuktu at twenty and read Arabic history privately with an old Sankoré ulama (1419), and open a small classroom in your home for twelve girls. You are not a number. You are a girl with a name, a Quran, Mande geometric patterns, and the Sundiata epic in your memory.',
  },
  perspectiveTag: 'female-literacy-carrier',
  fictionalDisclaimer: {
    cn: 'Aisha 是虚构合成人物——史书没写过她。但她活的世界全是真的:Sundiata (1217 生 / 1235 Kirina 战役) + Mansa Musa (1312 即位 / 1324 朝圣 / 1337 死) + Sankoré 大清真寺 (Mansa Musa 资助扩建) + Bure 黄金森林 + qadi (法官) 制度 + Mande 几何织布 + 跨撒哈拉商队 + Songhai 1430s 分裂前夜 + al-Sa\'di 1655 Tarikh es-Sudan 沙漠藏书——都是真的历史。Aisha 代表 14-16 世纪 Timbuktu 几千个 qadi/marabout 家庭出身、能背 Quran + 能教其他女孩、但没书没名字留在历史的 Mande 女孩,她们 5 代人塑造非洲女性识字传统的根。这种「真人 + 虚构合成」配对跟 AoE Anacaona Jr (虚构 Taíno) + Reformation Sister Agnes (虚构修女) 同 pattern——让 receiving-end 的没名字的人有一个能跟你坐下来讲 6 年的 voice。',
    en: 'Aisha is a fictional composite — the chronicles never recorded her. But the world she lives in is real: Sundiata (born 1217, Kirina 1235), Mansa Musa (acceded 1312, pilgrimage 1324, died 1337), the Great Mosque of Sankoré (expanded with Mansa Musa\'s funding), the Bure gold forest, the qadi (judge) system, Mande geometric weaving, trans-Saharan caravans, the eve of the 1430s Songhai breakaway, and al-Sa\'di\'s 1655 Tarikh es-Sudan and his manuscripts hidden in the desert — all real history. Aisha stands in for the thousands of girls born into qadi or marabout families in fourteenth- to sixteenth-century Timbuktu who could recite the Quran and teach other girls but left no books and no names — five generations of them shaped the root of female literacy in West Africa. This pairing of real history with a fictional composite uses the same pattern as Anacaona Jr (fictional Taíno) in the Age of Exploration Topic and Sister Agnes (fictional nun) in the Reformation Topic, giving a receiving-end nameless person a voice that can sit down with you and tell six years.',
  },
  storyboard: aishaStoryboard,
};


// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'mansa-musa':  mansaMusaLens,
  'ibn-battuta': ibnBattutaLens,
  'aisha-1413':  aishaLens,
};

// per Sarah audit + 7thgrader 推荐 — Aisha 1413 起手:
// 14 岁同龄锚点 + female-literacy-carrier + N5 cross-lens 12,000 enslaved + N12 4-Topic information preservation closing
export var defaultLens = 'aisha-1413';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'mali-empire-1235',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  estimatedMinutesPerLens: { 'mansa-musa': 35, 'ibn-battuta': 35, 'aisha-1413': 32 },
};
