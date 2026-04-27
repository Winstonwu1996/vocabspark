// view: Tang/Song China · 1000 · East Asia
export const VIEW = {
  id: 'tang-song',
  grade: 7,
  topicTier: 'core',
  // 整合原 /history 模块的深度学版（14 轮苏格拉底 + Mastery Gate）
  deepLearnEnabled: true,
  deepLearnUrl: '/history?topicId=tang-song-china&from=atlas&atlasId=tang-song',
  standardsAlignment: [
    { code: 'CA-HSS-7.3',   label: { cn: 'CA HSS-7.3 唐宋中国 — 文化、技术、政治成就', en: 'CA HSS-7.3 Tang/Song China — culture, technology, governance' } },
    { code: 'AP-WHAP-1.2',  label: { cn: 'AP World Unit 1.2 东亚发展 (Song Dynasty)', en: 'AP World Unit 1.2 Developments in East Asia (Song Dynasty)' } },
  ],
  title:    { cn: '唐宋盛世', en: 'Tang & Song China' },
  subtitle: { cn: '唐 618-907 → 宋 960-1279 · 地图为 1000 年北宋鼎盛快照', en: 'Tang 618-907 → Song 960-1279 · map shows 1000 AD Northern Song peak' },
  year: 1000,

  camera: {
    projection: 'mercator',
    center: [110, 32],
    scale: 750,
    yOffset: -10,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities: 'east-asia-1000',
      modernPolities: 'east-asia-modern',
      yearSnapshot: 'world_1000',     // historical-basemaps GeoJSON
      highlightId: 'northern-song',
    },
    C:  { civs: 'east-asia-1000' },
    F:  { ids: ['yangtze', 'yellow-river', 'great-wall', 'grand-canal', 'silk-road',
                'tibetan-plateau', 'himalaya', 'mongolian-steppe', 'malacca-strait'] },
    L4: {
      pins: ['changan', 'kaifeng', 'hangzhou', 'guangzhou', 'dunhuang'],
    },
  },

  causalSummary: {
    cn: 'L0 长江黄河双河 + L1 中世纪暖期 + L2 占城稻 + 1 亿人口 + L3 科举官僚制 + L4 王安石变法',
    en: 'L0 twin rivers + L1 Medieval Warm + L2 Champa rice + 100M pop + L3 imperial exams + L4 Wang Anshi reforms',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: '宋神宗', en: 'Emperor Shenzong of Song' },
      role: { cn: '北宋皇帝 1067-1085', en: 'Northern Song emperor 1067-1085' },
      bio: {
        cn: '你 19 岁继位北宋。你支持 Wang Anshi 王安石"变法"— 青苗法、市易法、保甲法 — 想让国家富强抗辽夏。但保守派司马光骂这是"与民争利"。改革分裂朝廷数十年。1127 你死后 42 年北宋亡于金。',
        en: 'You ascended at 19. You backed Wang Anshi\'s reforms — green-sprout loans, state trading, militia — to strengthen the state against the Liao and Xia. Conservatives led by Sima Guang called it "competing with the people for profit." Reforms split the court for decades. 42 years after your death, the Northern Song fell to the Jurchens.',
      },
      hook: {
        cn: '如果你是宋神宗 — 你想富国强兵，但改革撕裂朝廷。激进改革 vs 稳定保守，你怎么选？大宪章签订 100 年前，你也在面对"皇权要不要让步"的问题。',
        en: 'If you were Shenzong — you want a stronger state, but reform tears the court apart. Bold reform vs cautious stability — your call? A century before Magna Carta, you faced the same question: "should royal power yield?"',
      },
    },
    {
      emoji: '📜',
      name: { cn: '司马光', en: 'Sima Guang' },
      role: { cn: '保守派宰相 / 史学家', en: 'Conservative chancellor / historian' },
      bio: {
        cn: '你是儒家保守派领袖，反对 Wang Anshi 的改革。你 19 年间编《资治通鉴》— 1362 年中国通史，给皇帝当镜子用。你认为"祖宗之法不可变"，神宗去世后你回朝把变法全废了 — 但 50 年后北宋还是亡了。',
        en: 'You\'re leader of the Confucian conservatives, opposing Wang Anshi. Over 19 years you wrote the Comprehensive Mirror — a 1,362-year Chinese history meant to mirror lessons for emperors. You believed "ancestral laws shouldn\'t change." After Shenzong\'s death you returned and dismantled the reforms — but the dynasty still fell 50 years later.',
      },
      hook: {
        cn: '如果你是司马光 — 你赢了党争废了变法，可帝国照样灭。是不是你们守旧派的胜利反而加速了灭亡？谁该负责？',
        en: 'If you were Sima Guang — you won the political fight and abolished the reforms; the empire fell anyway. Did your conservative victory actually hasten the fall? Who bears responsibility?',
      },
    },
    {
      emoji: '🪷',
      name: { cn: '禅宗高僧', en: 'Chan Buddhist Master' },
      role: { cn: '寺院方丈 / 公案传人', en: 'Monastery abbot / koan tradition keeper' },
      bio: {
        cn: '你是禅宗（Chan，传到日本叫 Zen）方丈。你不读多少经，主张"明心见性"— 用 koan 公案让弟子开悟（"狗有佛性吗？"）。宋代禅宗鼎盛 — 苏轼、欧阳修这些士大夫都是你的护法。你的弟子东渡日本传禅宗，影响武士道 1000 年。',
        en: 'You\'re abbot of a Chan (= Japanese Zen) monastery. You don\'t lecture from sutras much; you teach "see your true nature" via koan paradoxes ("does a dog have Buddha-nature?"). Chan Buddhism flourishes — scholar-officials like Su Shi and Ouyang Xiu are your patrons. Your disciples will sail to Japan and shape bushido for 1,000 years.',
      },
      hook: {
        cn: '如果你是禅师 — 朝廷天天党争，皇帝今天用王安石明天废变法。你笑说"心里不动，万事如如"— 可你寺院的香火也来自国家。你能真的"出世"吗？',
        en: 'If you were the Chan master — the court bickers daily; the emperor uses Wang Anshi today and dumps him tomorrow. You smile and say "if the mind doesn\'t move, all is suchness" — but your incense comes from state donations. Can you truly transcend?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '江南稻农', en: 'Jiangnan Rice Farmer' },
      role: { cn: '太湖流域两熟稻农户', en: 'Two-crop rice farmer in the Lake Tai region' },
      bio: {
        cn: '你住江苏太湖边。1000 年中国从越南引进 Champa 占城稻 — 一年两熟。你的产量是宋代之前的 3 倍。你儿子能去苏州城里读书 — 太学每年招几千人，全国选拔。你交租 + 王安石的"青苗法"借春耕款给你 — 但官员收"利息"高得吓人。',
        en: 'You live by Lake Tai. Around 1000 AD China imported Champa rice from Vietnam — two harvests a year. Your yield is 3× pre-Song levels. Your son can study in Suzhou — the Imperial Academy admits thousands, recruited nationwide. You pay rent + receive Wang Anshi\'s green-sprout loans — but officials charge frightening interest.',
      },
      hook: {
        cn: '如果你是稻农 — 国家想"帮"你贷款，可乡里的官员变着法收高利。"政府想做好事"和"官员真做好事"中间差了什么？',
        en: 'If you were the farmer — the state wants to "help" you with loans, but local officials extract usurious interest. What\'s the gap between "the government means well" and "officials act well"?',
      },
    },
    {
      emoji: '👧',
      name: { cn: '小桃（虚构同龄人）', en: 'Little Tao (fictional peer)' },
      role: { cn: '13 岁，太学生女儿', en: '13-year-old, daughter of an Imperial Academy student' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸是太学生，将来要参加科举。你识字（宋代女性识字率比唐高），读《论语》《诗经》。家里有印刷的书 — 北宋活字印刷 1040 由毕昇发明，比古登堡早 400 年。你的世界比 Willow 的曾祖辈还文明。',
        en: 'Same age as Willow. Your father is an Academy student preparing for the imperial exams. You can read (Song-era female literacy is higher than Tang), studying the Analects and Book of Songs. Your home has printed books — Bi Sheng invented movable type in 1040, 400 years before Gutenberg. Your world is more literate than Willow\'s great-great-grandparents\'.',
      },
      hook: {
        cn: 'Willow 在 2026 年加州手机上看英文电子书。1000 年前你已经在读印刷的《论语》。"科技带来普及"的故事，是从你这里开始的。她跟你之间隔着印刷术 → 互联网 → 手机 — 都是同一回事吗？',
        en: 'In 2026, Willow reads English ebooks on her phone. 1000 years ago you already read printed Analects. "Tech enabling literacy" begins with you. Print → internet → phone — same story across 1000 years?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Tang Dynasty 唐朝 618-907 — 长安世界最大都市',
      'Empress Wu Zetian 武则天 — 中国唯一女皇 690-705',
      'Civil Service Exam 科举制 — 隋创 / 唐宋完善（影响千年）',
      'Song Dynasty 宋朝 960-1279（北宋 → 南宋）',
      'Tang/Song "Four Great Inventions" 四大发明：火药 / 指南针 / 印刷 / 造纸',
      'Champa Rice 占城稻 — 一年两熟 → 人口破亿',
      'Movable type 活字印刷 — 毕昇 ~1040',
      'Confucianism 儒学复兴（宋明理学 Neo-Confucianism — 朱熹）',
    ],
    en: [
      'Tang Dynasty 618-907 — Chang\'an the world\'s largest city',
      'Empress Wu Zetian — China\'s only female emperor 690-705',
      'Civil Service Examination — perfected in Tang/Song',
      'Song Dynasty 960-1279 (Northern → Southern Song)',
      'Four Great Inventions: gunpowder / compass / printing / paper',
      'Champa rice — two crops/year → population breaks 100M',
      'Movable type printing — Bi Sheng, ~1040',
      'Neo-Confucianism — Zhu Xi (Song Dynasty)',
    ],
  },
};
