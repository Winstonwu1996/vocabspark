// view: Renaissance Italy · 1500
// Grade 7 · HSS-7.8 (Renaissance)
export const VIEW = {
  id: 'renaissance',
  grade: 7,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-7.8',   label: { cn: 'CA HSS-7.8 文艺复兴 — 起源与影响', en: 'CA HSS-7.8 Renaissance — origins and impact' } },
    { code: 'CA-HSS-7.9',   label: { cn: 'CA HSS-7.9 宗教改革（直接后果）', en: 'CA HSS-7.9 Reformation (direct consequence)' } },
    { code: 'AP-EURO-1.2',  label: { cn: 'AP European Unit 1.2 意大利文艺复兴', en: 'AP European Unit 1.2 Italian Renaissance' } },
  ],
  title:    { cn: '文艺复兴', en: 'Renaissance' },
  subtitle: { cn: '1500 · 意大利诸城邦', en: '1500 · Italian City-States' },
  year: 1500,

  camera: {
    projection: 'mercator',
    center: [15, 45],
    scale: 700,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'renaissance-1500',
      modernPolities:  'europe-modern',
      yearSnapshot:    'world_1500',
      highlightId:     'florence-venice',
    },
    C:  { civs: 'early-modern-1500' },
    F:  { ids: ['rhine', 'danube', 'alps', 'roman-roads', 'bosporus', 'gibraltar'] },
    L4: {
      pins: ['florence-1500', 'rome-1500', 'venice-1500', 'constantinople-1453', 'wittenberg'],
    },
  },

  causalSummary: {
    cn: 'L0 地中海中央 + L1 黑死病后劳动力稀缺 + L2 银行 / 美第奇 / 海贸资本 + L3 城邦共和 + 教皇资助 + L4 1453 拜占庭学者西迁 + 1450 印刷术',
    en: 'L0 Mediterranean center + L1 post-plague labor scarcity + L2 banking/Medici/maritime capital + L3 city-state republics + Papal patronage + L4 1453 Byzantine scholars + 1450 printing',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: 'Lorenzo de\' Medici 美第奇·洛伦佐', en: 'Lorenzo de\' Medici' },
      role: { cn: '佛罗伦萨"实质上的统治者" / 银行家', en: 'De facto ruler of Florence / banker' },
      bio: {
        cn: '你是美第奇银行家族族长，"无冕之王"统治佛罗伦萨。你不是国王 — 佛罗伦萨名义上是共和国 — 但你用金钱 + 婚姻 + 政治操控议会。你赞助 Botticelli, da Vinci, Michelangelo（13 岁少年时收他到家里养）。你也镇压 Pazzi 阴谋 — 90 个反对者被处死。',
        en: 'You\'re patriarch of the Medici banking family — Florence\'s "uncrowned king." Not formally a ruler — Florence is nominally a republic — but money + marriage + political maneuvering give you control. You patronized Botticelli, Da Vinci, and took 13-year-old Michelangelo into your home. You also crushed the Pazzi conspiracy — 90 opponents executed.',
      },
      hook: {
        cn: '如果你是 Lorenzo — 你赞助艺术让佛罗伦萨成"文艺复兴中心"，但你的钱来自高利贷 + 政治压制。"美 + 暴政"能不能并存？',
        en: 'If you were Lorenzo — you patronized art to make Florence "the Renaissance center," but your money came from usury + political repression. Can "beauty + tyranny" coexist?',
      },
    },
    {
      emoji: '⛪',
      name: { cn: 'Savonarola 萨沃纳罗拉', en: 'Girolamo Savonarola' },
      role: { cn: '反美第奇的多明我会修士', en: 'Dominican friar opposing Medici' },
      bio: {
        cn: '你是反美第奇的修士 — 1494 年法王 Charles VIII 入侵后美第奇被赶出佛罗伦萨，你成"道德领袖"。你下令烧"虚荣之物"— 把奢侈品、镜子、画作扔进 Bonfire of the Vanities。1497 你逼 Botticelli 烧自己的画。1498 你被罗马教皇绝罚后被绞死烧尸。',
        en: 'You\'re an anti-Medici Dominican. After Charles VIII of France invaded in 1494 and Medicis were expelled, you became Florence\'s "moral leader." You ordered the Bonfire of the Vanities — luxuries, mirrors, paintings into the flames. In 1497 you forced Botticelli to burn his own works. In 1498 the Pope excommunicated you; you were hanged and burned.',
      },
      hook: {
        cn: '如果你是 Savonarola — 你认为美第奇的"文艺复兴艺术"是道德堕落。你用宗教纯洁主义反对世俗繁荣。"道德"和"美"是不是必然对立？',
        en: 'If you were Savonarola — you saw Medici "Renaissance art" as moral decay. You used religious purity to oppose worldly flourishing. Are "morality" and "beauty" inevitably at odds?',
      },
    },
    {
      emoji: '🎨',
      name: { cn: 'Leonardo da Vinci 达芬奇', en: 'Leonardo da Vinci' },
      role: { cn: '画家 + 工程师 + 解剖学家', en: 'Painter + engineer + anatomist' },
      bio: {
        cn: '你是私生子 — 14 岁拜师当画家学徒。你不只是画家 — 你设计飞行器、潜水艇、机关枪。你解剖 30 具尸体研究人体（教会禁的）。你笔记本写"反字"（镜像）— 怕被偷。但你 80% 的项目没完成 — 拖延症 + 完美主义。',
        en: 'Born illegitimate — apprenticed at 14. You\'re not only a painter — you designed flying machines, submarines, machine guns. You dissected 30 corpses to study anatomy (banned by the Church). Your notebooks are in mirror writing — fearing theft. But 80% of your projects unfinished — procrastination + perfectionism.',
      },
      hook: {
        cn: '如果你是 Leonardo — 你比同时代人聪明 100 倍，但项目永远不完成。你的"通才"是天赋还是诅咒？现代孩子（包括 Willow）也面对同样的问题：会很多东西但都不精。',
        en: 'If you were Leonardo — 100× smarter than your peers, but projects never finished. Was your "polymathy" gift or curse? Today\'s kids (Willow included) face the same: knowing many things, mastering none.',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '佛罗伦萨纺织工', en: 'Florentine Wool Worker' },
      role: { cn: 'Ciompi 阶级 / 纺织业打工者', en: 'Ciompi class / wool industry laborer' },
      bio: {
        cn: '你是城市底层 ciompi（纺织工）。佛罗伦萨经济建立在你身上 — 全城 1/3 人从事纺织。你 1378 年祖上参加 Ciompi 起义争权 — 失败。你看着美第奇家族建宫殿 + 赞助艺术，你儿子还是干你这一行。"文艺复兴"对你只意味着多一些壁画，不意味着上升通道。',
        en: 'You\'re ciompi — bottom-class wool worker. Florence\'s economy rests on you — 1/3 of the city works in textiles. Your ancestors joined the 1378 Ciompi revolt for political rights — lost. You watch Medicis build palaces + patronize art; your son still does your job. "Renaissance" means more frescoes, not upward mobility.',
      },
      hook: {
        cn: '如果你是 ciompi — 课本说"文艺复兴是西方的觉醒"，但你过的是中世纪。"伟大时代"对穷人是不是只是头顶的飘带？',
        en: 'If you were ciompi — textbooks call this "the West awakening," but your life is still medieval. Is "great age" just decoration overhead for the poor?',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'Niccolo（虚构同龄人）', en: 'Niccolo (fictional peer)' },
      role: { cn: '13 岁，画家学徒', en: '13-year-old, artist\'s apprentice' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸把你送到 Verrocchio 画室当学徒（年轻 Leonardo 也是这里出来的）。你 7 年磨颜料、画底色、临摹大师作品。13 岁第一次拿笔画背景。如果你天赋好可能成大师 — 但 99% 的学徒成普通画工。',
        en: 'Same age as Willow. Your father apprenticed you at Verrocchio\'s workshop (where young Leonardo trained). 7 years of grinding pigments, painting underlayers, copying masters. At 13 you first paint a background. If gifted you could become a master — 99% of apprentices remain ordinary painters.',
      },
      hook: {
        cn: '500 年后 Willow 在加州可以"线上学画"— 但天赋仍然是硬通货。你的世界 99% 走不出来。她的世界更平等了吗？还是只换了个赛道？',
        en: '500 years later, Willow can take online art classes in California — but talent remains the hard currency. 99% of your world can\'t escape its station. Is hers more equal, or just a different track?',
      },
    },
  ],

  examPoints: {
    cn: [
      '人文主义（Humanism）：以人为本，复兴希腊罗马古典文化',
      'Petrarch（彼得拉克）"人文主义之父"',
      'Machiavelli《君主论》1513',
      'Leonardo da Vinci《蒙娜丽莎》/《最后的晚餐》',
      'Michelangelo 西斯廷教堂天顶壁画 1508-1512',
      'Brunelleschi 透视法 + 圆顶（Florence Duomo）',
      '美第奇家族 Medici — Florence 文艺复兴金主',
      'Northern Renaissance：Erasmus, Dürer（北方文艺复兴）',
    ],
    en: [
      'Humanism: human-centered, revival of Greek/Roman classics',
      'Petrarch — "Father of Humanism"',
      'Machiavelli, The Prince, 1513',
      'Leonardo da Vinci — Mona Lisa / Last Supper',
      'Michelangelo — Sistine Chapel ceiling, 1508-1512',
      'Brunelleschi — linear perspective + Florence Duomo dome',
      'Medici family — patrons of the Florentine Renaissance',
      'Northern Renaissance: Erasmus, Dürer',
    ],
  },
};
