// view: Scientific Revolution · 1687 · Newton's Principia
// Grade 7 · HSS-7.10
export const VIEW = {
  id: 'scientific-revolution',
  grade: 7,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-7.10', label: { cn: 'CA HSS-7.10 科学革命', en: 'CA HSS-7.10 Scientific Revolution' } },
    { code: 'AP-EURO-4.2', label: { cn: 'AP European Unit 4.2 科学革命', en: 'AP European Unit 4.2 The Scientific Revolution' } },
  ],
  title:    { cn: '科学革命', en: 'Scientific Revolution' },
  subtitle: { cn: '1687 · 牛顿《自然哲学的数学原理》', en: '1687 · Newton\'s Principia Mathematica' },
  year: 1687,

  camera: {
    projection: 'mercator',
    center: [10, 50],
    scale: 700,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'scientific-rev-1687',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1700',
      highlightId:     'england-1687',
    },
    C:  { civs: 'early-modern-1530' },
    F:  { ids: ['rhine', 'danube', 'alps', 'english-channel'] },
    L4: {
      pins: ['cambridge-1687', 'padua-galileo', 'paris-academie', 'royal-society-london', 'krakow-copernicus'],
    },
  },

  causalSummary: {
    cn: 'L0 欧洲多核心城市（伦敦 / 巴黎 / 阿姆斯特丹）/ 无单一霸主 + L2 17 世纪欧洲城市化加速 / 印刷术让科学论文跨城市快传播（无显著气候驱动 — 印刷文化才是放大器）+ L3 文艺复兴人文主义 + 宗教改革破教会权威 + 古登堡印刷 + 大学独立 + 王室赞助科学院（1660 皇家学会 / 1666 法国科学院）+ L4 1543 哥白尼日心说 → 1610 伽利略望远镜（荷兰镜片 + 威尼斯赞助）→ 1687 牛顿《原理》三大运动定律 + 万有引力',
    en: 'L0 Europe\'s polycentric cities (London / Paris / Amsterdam) / no single hegemon + L2 17C urbanization accelerates / printing enables rapid scientific paper diffusion across cities (no significant climate driver — print culture was the multiplier) + L3 Renaissance humanism + Reformation breaks Church authority + Gutenberg press + universities + royal-sponsored academies (1660 Royal Society / 1666 Académie) + L4 1543 Copernicus heliocentric → 1610 Galileo telescope (Dutch lenses + Venetian patronage) → 1687 Newton\'s Principia: 3 laws of motion + universal gravitation',
  },

  keyFigures: [
    {
      emoji: '🍎',
      name: { cn: 'Isaac Newton 牛顿', en: 'Isaac Newton' },
      role: { cn: '剑桥数学教授 / 现代物理之父', en: 'Cambridge mathematics professor / father of modern physics' },
      bio: {
        cn: '你是英国乡下牧场孩子，妈妈寡居。1665 年 Cambridge 因瘟疫关门，你回家 — 22 岁那年想出微积分、光学、引力定律雏形（"奇迹之年"）。1687 出版《Principia》— 三大运动定律 + 万有引力 — 用一套数学描述苹果落地和行星轨道。你也炼金 25 年（占总写作量 1/3）— 想找点石成金法。',
        en: 'A farm boy whose mother was widowed. In 1665 Cambridge closed for plague; back home you invented calculus, optics, gravity in one year ("annus mirabilis") at age 22. In 1687 you published the Principia — 3 laws of motion + universal gravitation — one math describing both apples and planets. You also did alchemy for 25 years (a third of your writing) — seeking the philosopher\'s stone.',
      },
      hook: {
        cn: '如果你是牛顿 — 你既是科学之父，也炼金 25 年没成功。"理性"和"神秘"在同一个大脑里。今天的科学课只讲你的理性那面 — 公允吗？',
        en: 'If you were Newton — you\'re science\'s father AND practiced alchemy 25 years in vain. Reason and mysticism in one brain. Today\'s science class only mentions the rational side — fair?',
      },
    },
    {
      emoji: '🔭',
      name: { cn: 'Galileo 伽利略', en: 'Galileo Galilei' },
      role: { cn: '帕多瓦大学数学家 / 望远镜应用者', en: 'Padua mathematician / telescope astronomer' },
      bio: {
        cn: '你 1610 年改进荷兰望远镜，看到木星 4 颗卫星 — 证明不是所有天体都绕地球转 → 支持 Copernicus 日心说。你 1632 出版《两大世界体系对话》— 用对话形式让"地心说"角色说蠢话。1633 教廷审判你，你跪下说"我撤回"— 但传说你低声说"E pur si muove"（"它仍在动"）。你软禁余生。',
        en: 'In 1610 you improved the Dutch telescope, saw Jupiter\'s 4 moons — proving not everything orbits Earth → supporting Copernicus. In 1632 you published the Dialogue, putting heliocentrism in dialogue form with the geocentric character voicing nonsense. In 1633 the Inquisition tried you; you knelt and recanted — legend says you whispered "and yet it moves." House-arrest for the rest of your life.',
      },
      hook: {
        cn: '如果你是 Galileo — 你为活命撤回科学真理。"沉默活下来 vs 烈士死掉"— 哪个对科学进步贡献大？',
        en: 'If you were Galileo — you recanted scientific truth to live. "Silent survival" vs "martyred death" — which advances science more?',
      },
    },
    {
      emoji: '⛪',
      name: { cn: '教廷红衣主教', en: 'Inquisition Cardinal' },
      role: { cn: 'Galileo 案审判官', en: 'Galileo\'s judge' },
      bio: {
        cn: '你是 Bellarmine（红衣主教）的继任者。1616 你警告 Galileo "可以讨论日心说作为数学假设，但不能说是事实"。1632 他公然违反这条线 — 你不得不审判他。你不是反科学 — 你也读 Galileo — 但你认为信仰必须先于科学。1990 教皇 John Paul II 才正式为 Galileo 平反。',
        en: 'A successor to Cardinal Bellarmine. In 1616 you warned Galileo: "you may discuss heliocentrism as a mathematical hypothesis, but not as fact." In 1632 he openly crossed the line — you had to try him. You\'re not anti-science — you read Galileo too — but you believe faith must precede science. In 1990 Pope John Paul II formally apologized for Galileo\'s case.',
      },
      hook: {
        cn: '如果你是红衣主教 — 你判 Galileo 不是因为蠢。是因为权威结构需要稳定。"机构 vs 真理"— 当机构觉得真理威胁自己时，机构总赢吗？',
        en: 'If you were the Cardinal — you didn\'t condemn Galileo out of stupidity, but to protect institutional stability. "Institution vs truth" — when institutions feel threatened, do they always win?',
      },
    },
    {
      emoji: '✍️',
      name: { cn: '皇家学会会员', en: 'Royal Society Fellow' },
      role: { cn: '伦敦科学界会员（如 Robert Hooke）', en: 'London science circle (e.g., Robert Hooke)' },
      bio: {
        cn: '你是 1660 年成立的皇家学会会员 — 不是大师，是中坚力量。你做实验、写报告、互相评审。Hooke 发明显微镜、提出胡克定律 — 但你被 Newton 压得死死（Newton 不喜欢你，烧了你的画像）。科学进步靠"无名众人"做实验 + 几个天才整合。',
        en: 'You\'re a member of the Royal Society (1660) — not a giant, just the middle layer. You do experiments, write papers, peer-review each other. Hooke invented the microscope, formulated Hooke\'s Law — but Newton crushed you (he disliked you, allegedly burned your portrait). Scientific progress runs on "nameless many" doing experiments + a few geniuses synthesizing.',
      },
      hook: {
        cn: '如果你是 Hooke — 你做的实验被 Newton 拿去发扬光大。课本只记 Newton。"普通学者支撑天才"是科学的真相吗？',
        en: 'If you were Hooke — your experiments were absorbed by Newton; textbooks only record him. "Ordinary scholars supporting geniuses" — is this science\'s real shape?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Émilie（虚构同龄人）', en: 'Émilie (fictional peer)' },
      role: { cn: '13 岁，巴黎书商女儿', en: '13-year-old, Paris bookseller\'s daughter' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸是巴黎书商，进口 Newton《Principia》（拉丁语，~50 个客户 — 物理学家 + 神职人员 + 贵族）。你识拉丁语和法语，偷读 Newton。你想以后当科学家 — 但你这一代法国女性不能进入科学院。50 年后启蒙时代你的后辈才能 — Émilie du Châtelet 就翻译了 Newton。',
        en: 'Same age as Willow. Your father is a Paris bookseller importing Newton\'s Principia (Latin, ~50 clients — physicists, clergy, aristocrats). You read Latin + French, secretly studying Newton. You want to be a scientist — but no French academy will admit you. 50 years later, in the Enlightenment, women like Émilie du Châtelet would translate Newton.',
      },
      hook: {
        cn: '350 年后 Willow 在加州学校学物理，男女都学。你跟她隔了 350 年。"女性进入科学"花了多少代人努力？她现在能查到的女科学家名字 — 80% 都是 1900 年后的。',
        en: '350 years later, Willow studies physics in California — boys and girls equally. 350 years separate you. How many generations did "women entering science" take? 80% of women scientists she can name come from after 1900.',
      },
    },
  ],

  examPoints: {
    cn: [
      'Copernicus 哥白尼 1543《天体运行论》— Heliocentric 日心说',
      'Galileo 伽利略 — 望远镜 / 木星卫星 / 1633 受教会审判',
      'Kepler 开普勒 — 行星运动三定律（椭圆轨道）',
      'Newton 牛顿 1687《自然哲学的数学原理》Principia',
      '牛顿三大运动定律 + 万有引力定律',
      'Scientific Method 科学方法 — Bacon 培根（归纳）+ Descartes 笛卡尔（演绎）',
      'Royal Society 1660（伦敦）/ Académie des Sciences 1666（巴黎）',
      '"I think, therefore I am" — Descartes《方法论》1637',
    ],
    en: [
      'Copernicus, 1543 — heliocentric model (De Revolutionibus)',
      'Galileo — telescope / moons of Jupiter / Inquisition trial 1633',
      'Kepler — three laws of planetary motion (elliptical orbits)',
      'Newton, Principia, 1687',
      'Newton\'s three laws of motion + universal gravitation',
      'Scientific Method — Bacon (induction) + Descartes (deduction)',
      'Royal Society 1660 (London) / Académie des Sciences 1666 (Paris)',
      '"Cogito, ergo sum" — Descartes, Discourse on Method, 1637',
    ],
  },
};
