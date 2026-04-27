// view: Mongol Empire at Conquest · 1241 · Eurasia
// Grade 7 · HSS-7.6.5 (Mongol invasions)
export const VIEW = {
  id: 'mongol-empire',
  grade: 7,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-7.5.6', label: { cn: 'CA HSS-7.5.6 蒙古入侵及其影响', en: 'CA HSS-7.5.6 Mongol invasions and their effects' } },
    { code: 'CA-HSS-7.3',   label: { cn: 'CA HSS-7.3 中国（蒙古灭宋背景）', en: 'CA HSS-7.3 China (Mongol vs Song background)' } },
    { code: 'AP-WHAP-2.2',  label: { cn: 'AP World Unit 2.2 蒙古帝国（交流网络）', en: 'AP World Unit 2.2 The Mongol Empire (Networks of Exchange)' } },
  ],
  title:    { cn: '蒙古帝国巅峰', en: 'Mongol Empire at Peak' },
  subtitle: { cn: '1241 横扫欧亚 · 地图用 1200 快照（蒙古实控范围实为 1227 年时）', en: '1241 sweeping Eurasia · map uses 1200 snapshot (Mongol extent shown is per 1227)' },
  year: 1241,

  camera: {
    projection: 'mercator',
    center: [60, 45],
    scale: 220,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'mongol-1241',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1200',
      highlightId:     'mongol-empire',
    },
    C:  { civs: 'medieval-1215' },   // 复用 1200 年代文明圈数据
    F:  { ids: ['silk-road', 'great-wall', 'bosporus', 'gibraltar', 'mongolian-steppe'] },
    L4: {
      pins: ['karakorum', 'legnica', 'mohi', 'kiev-1240', 'samarkand-1219'],
    },
  },

  causalSummary: {
    cn: 'L0 4000km 草原"高速公路" + L1 暖期降水牲畜倍增 + L2 复合弓 / 攻城术 / 驿站 + L3 万户制 / Yassa 法典 / 实力主义 + L4 Genghis 1206 立国 → 1241 横扫匈牙利波兰',
    en: 'L0 4000km steppe "highway" + L1 warm period livestock boom + L2 composite bow/siege tech/yam relay + L3 decimal organization/Yassa code/meritocracy + L4 Genghis 1206 founds empire → 1241 sweeps Hungary/Poland',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: 'Genghis Khan 成吉思汗', en: 'Genghis Khan' },
      role: { cn: '蒙古帝国创建者 1206-1227', en: 'Founder of Mongol Empire 1206-1227' },
      bio: {
        cn: '你 9 岁丧父，跟妈妈在草原吃野菜活下来。你 20 年统一蒙古各部，1206 年被推为"成吉思汗"。你打仗看实力不看血缘 — 平民也能升将军。你打了西夏、金、花剌子模 — 屠杀几百万但也开通欧亚商路。你死时帝国 ~2400 万平方公里。',
        en: 'Your father died when you were 9; you survived on wild plants with your mother. You unified the Mongol tribes over 20 years, proclaimed "Genghis Khan" in 1206. Your meritocracy let commoners become generals. You crushed Western Xia, Jin, and Khwarazm — millions slaughtered, but Eurasian trade opened. At your death the empire spanned ~24M km².',
      },
      hook: {
        cn: '如果你是成吉思汗 — 你屠了几百万人，但你也是史上第一个推行宗教自由 + 实力主义 + 商人保护的"帝国"。你是文明摧毁者还是创建者？两面都对吗？',
        en: 'If you were Genghis — you slaughtered millions, yet you were history\'s first ruler enforcing religious freedom + meritocracy + merchant protection. Civilization-destroyer or creator? Can both be true?',
      },
    },
    {
      emoji: '⚔️',
      name: { cn: 'Subutai 速不台', en: 'Subutai' },
      role: { cn: '蒙古第一将军 / 灭欧元帅', en: 'Mongol\'s top general / European campaign commander' },
      bio: {
        cn: '你是铁匠儿子，靠军功成为成吉思汗最信任的将军。你 60+ 年指挥 65 场战役 — 没输过一场。1241 年你统帅西征军 — 一周内灭波兰 + 匈牙利联军，准备攻维也纳。但大汗死了你必须撤回选下任 — 欧洲侥幸逃过一劫。',
        en: 'A blacksmith\'s son, you rose through merit to be Genghis\'s most trusted general. In 60+ years you led 65 campaigns — never lost one. In 1241 you commanded the Western invasion — destroyed Polish and Hungarian armies in a week, ready to take Vienna. But the Great Khan died; you had to withdraw to elect his successor — Europe was saved by chance.',
      },
      hook: {
        cn: '如果你是 Subutai — 你 1241 年距维也纳 200 公里。如果大汗没死，欧洲可能是另一个文明 — 没文艺复兴、没启蒙运动、没美国独立。一个人的死改写了世界 — 怎么看待这种巧合？',
        en: 'If you were Subutai — in 1241 you were 200km from Vienna. Had the Great Khan not died, Europe might be a different civilization — no Renaissance, Enlightenment, American Revolution. One man\'s death rewrote the world — how do you see such chance?',
      },
    },
    {
      emoji: '📜',
      name: { cn: 'Marco Polo 马可波罗', en: 'Marco Polo' },
      role: { cn: '威尼斯商人 / 元朝外国使臣', en: 'Venetian merchant / Yuan dynasty foreigner-official' },
      bio: {
        cn: '你 17 岁跟着父亲沿丝绸之路东行，1271-1295 在元朝给忽必烈当差 17 年。蒙古和平（Pax Mongolica）让你能从威尼斯走到大都 — 这条路在蒙古之前几乎不可能。你回威尼斯写《马可波罗游记》— 哥伦布读这本书后才下决心航海找东方。',
        en: 'At 17 you traveled the Silk Road with your father; 1271-1295 you served Kublai Khan in Yuan China for 17 years. Pax Mongolica made it possible to walk from Venice to Khanbaliq — nearly impossible before the Mongols. Returning, you dictated The Travels — which Columbus would read 200 years later, deciding to sail west to find the East.',
      },
      hook: {
        cn: '如果你是 Marco Polo — 你是商人，看到的是蒙古和平 = 全球化第一次。但你也亲眼看蒙古屠城。"和平 + 屠杀"是同一个帝国 — 你怎么写它？',
        en: 'If you were Marco Polo — as a merchant you saw Pax Mongolica = first globalization. You also witnessed Mongol massacres. "Peace + slaughter" in one empire — how do you write it?',
      },
    },
    {
      emoji: '🏘️',
      name: { cn: '中亚屠城幸存者', en: 'Central Asian Massacre Survivor' },
      role: { cn: 'Samarkand 工匠 / 成吉思汗 1220 屠城后', en: 'Samarkand craftsman / survivor of 1220 sack' },
      bio: {
        cn: '你住 Samarkand — 当时穆斯林世界最繁华的商业城市。1220 年蒙古来了，国王跑了，你们投降。蒙古杀了所有抵抗者（30 万），饶了工匠（你）— 把你们送到蒙古首都做工。你的家人全死了，你成了"有用的奴隶"。',
        en: 'You lived in Samarkand — the Muslim world\'s richest commercial city. In 1220 the Mongols came; your king fled; you surrendered. They killed all who resisted (~300,000), spared craftsmen (you) — sent you to the Mongol capital. Your family is dead; you\'re a "useful slave."',
      },
      hook: {
        cn: '如果你是幸存者 — 蒙古"重视实力"让你活了下来。但你失去一切。这种"实力主义"对你是恩还是仇？',
        en: 'If you were the survivor — Mongol meritocracy let you live but stripped everything else. Is "meritocracy" a gift or a curse to you?',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'Temujin（虚构同龄人）', en: 'Temujin (fictional peer)' },
      role: { cn: '13 岁，蒙古百户长之子', en: '13-year-old, son of a Mongol "centurion"' },
      bio: {
        cn: '你跟 Willow 同龄，跟成吉思汗本名同名（Temujin = 铁匠）。爸爸是百户长 jaghun（统 100 户）。你 5 岁能骑马，10 岁能射马上箭。你父亲在 Subutai 麾下打 1241 西征 — 半年没回家。你日复一日跟妈妈赶羊群。',
        en: 'Same age as Willow. Named after Genghis (Temujin = "blacksmith"). Your father is a jaghun (100-household commander) under Subutai. You ride at 5, shoot from horseback at 10. Your father is in the 1241 western campaign under Subutai — gone six months. Daily you herd sheep with your mother.',
      },
      hook: {
        cn: '780 年后 Willow 在加州学骑马是娱乐。你 13 岁骑马是生存 + 战争。同样的"骑马"技能，意义完全不同 — 这告诉你"技能 vs 时代"是什么关系？',
        en: '780 years later, Willow learns horseback riding for fun in California. For you at 13, riding meant survival and war. Same skill, totally different meaning — what does this tell you about skill vs era?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Genghis Khan 成吉思汗 1206 立大蒙古国（Temujin 铁木真）',
      '世界史最大陆地帝国 — 横跨欧亚 ~3300 万 km²',
      'Pax Mongolica 蒙古治下和平 — 丝路安全 → 商旅复兴',
      'Yam 驿站系统 / 复合弓 / 骑射战术',
      'Yassa Code《大札撒》— 蒙古法典',
      'Kublai Khan 忽必烈 — 1271 立元朝（中国）',
      'Marco Polo 马可波罗 1271-1295 旅行 → 欧洲了解东方',
      'Black Death 黑死病沿蒙古商路传至欧洲（1347）',
    ],
    en: [
      'Genghis Khan (Temujin) founds Mongol Empire, 1206',
      'Largest contiguous empire in history — ~33M km²',
      'Pax Mongolica — Silk Road safety → trade revival',
      'Yam relay system / composite bow / horse archers',
      'Yassa Code — Mongol legal code',
      'Kublai Khan founds Yuan Dynasty in China, 1271',
      'Marco Polo travels 1271-1295 → Europe learns of East',
      'Black Death travels Mongol trade routes to Europe (1347)',
    ],
  },
};
