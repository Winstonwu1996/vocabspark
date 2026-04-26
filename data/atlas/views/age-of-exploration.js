// view: Age of Exploration · 1492 · Atlantic
// Grade 7 · HSS-7.11 (Age of Exploration)
export const VIEW = {
  id: 'age-of-exploration',
  grade: 7,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-7.11',  label: { cn: 'CA HSS-7.11 探索时代（哥伦布/达伽马/麦哲伦）', en: 'CA HSS-7.11 Age of Exploration' } },
    { code: 'CA-HSS-5.2',   label: { cn: 'CA HSS-5.2 美洲早期探索 + 欧洲遭遇', en: 'CA HSS-5.2 Early Americas + European contact' } },
    { code: 'AP-WHAP-4.3',  label: { cn: 'AP World Unit 4.3 哥伦布交换（动植物/疾病跨大西洋传播）', en: 'AP World Unit 4.3 Columbian Exchange' } },
    { code: 'AP-EURO-1.4',  label: { cn: 'AP European Unit 1.4 探索时代起源', en: 'AP European Unit 1.4 Age of Exploration origins' } },
  ],
  title:    { cn: '大航海时代起点', en: 'Age of Exploration begins' },
  subtitle: { cn: '1492 · 哥伦布航行 · Reconquista 完成同年', en: '1492 · Columbus sails · Reconquista completed same year' },
  year: 1492,

  camera: {
    projection: 'mercator',
    center: [-30, 30],
    scale: 280,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'age-of-exploration-1492',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1492',
      highlightId:     'castile-1492',
    },
    F:  { ids: ['gibraltar', 'english-channel'] },
    L4: {
      pins: ['palos-1492', 'san-salvador', 'granada-1492', 'lisbon-1492', 'tordesillas'],
    },
  },

  causalSummary: {
    cn: 'L0 伊比利亚伸入大西洋 + 信风带 + L1 季风规律 + L2 葡萄牙先例 / 银行 / 印刷 + L3 Reconquista 完成 + 国家资助传统 + L4 Granada 陷落 → 哥伦布 8.3 起航',
    en: 'L0 Iberia juts into Atlantic + trade winds + L1 stable monsoons + L2 Portuguese precedent/banking/printing + L3 Reconquista done + state-funded tradition + L4 Granada falls → Columbus sails Aug 3',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: 'Isabella I 伊莎贝拉一世', en: 'Queen Isabella I of Castile' },
      role: { cn: '卡斯蒂利亚女王 / 哥伦布的赞助人', en: 'Queen of Castile / Columbus\'s sponsor' },
      bio: {
        cn: '你 1492 年完成 Reconquista — 把最后的穆斯林国 Granada 收回。同年你下令驱逐西班牙所有犹太人（30 万人）— 经济损失惨重。同年你接见哥伦布并资助他向西航 — 想绕开奥斯曼人控制的丝路。三件事在同一年 — 你的政策定义了西班牙未来 500 年。',
        en: 'In 1492 you completed the Reconquista — recovering Granada, the last Muslim kingdom. The same year you expelled all Spain\'s Jews (300,000) — devastating the economy. And you funded Columbus\'s westward voyage — to bypass the Ottoman-controlled silk routes. Three decisions in one year — defining Spain\'s next 500 years.',
      },
      hook: {
        cn: '如果你是 Isabella — 你 1492 一年既驱逐犹太人又赞助探险。一手"宗教纯化"一手"大国扩张"— 这两件事是矛盾还是同一回事？',
        en: 'If you were Isabella — in 1492 alone you expelled Jews AND funded exploration. "Religious purification" + "imperial expansion" — contradictory, or two faces of one ideology?',
      },
    },
    {
      emoji: '⛵',
      name: { cn: 'Christopher Columbus 哥伦布', en: 'Christopher Columbus' },
      role: { cn: '热那亚航海家 / 大西洋首航人', en: 'Genoese mariner / first transatlantic crossing' },
      bio: {
        cn: '你是热那亚商人之子，30 年说服各国王赞助你向西航行 — 大多数学者已经知道地球是圆的，但你低估地球半径 1/3 — 以为亚洲比实际近。1492 年你 88 天航行抵达加勒比海，以为到了印度（所以叫"印第安人"）。你一辈子都不承认那是新大陆。1506 你死于贫穷。',
        en: 'A Genoese merchant\'s son, you spent 30 years lobbying kings to fund a westward voyage — most scholars already knew Earth was round, but you underestimated its radius by 1/3 — thinking Asia was closer. In 1492 after 88 days you reached the Caribbean, believing you\'d found India (hence "Indians"). You never admitted it was a new continent. You died poor in 1506.',
      },
      hook: {
        cn: '如果你是哥伦布 — 你的航海"成功"基于错误计算。你强迫泰诺人当奴隶，3 年内 1/2 死了。你是"伟大探险家"还是"大屠杀的开端"？历史课本怎么写你？',
        en: 'If you were Columbus — your "success" rests on miscalculation. You enslaved Taíno; within 3 years half died. "Great explorer," or "starter of genocide"? How will textbooks write you?',
      },
    },
    {
      emoji: '⛪',
      name: { cn: '多明我会修士 Bartolomé de las Casas', en: 'Dominican Friar Bartolomé de las Casas' },
      role: { cn: '为印第安人辩护的西班牙修士', en: 'Spanish friar defending native rights' },
      bio: {
        cn: '你 1502 来到 Hispaniola — 当时还是奴主，参与 encomienda 制度（强迫印第安人劳动）。你看着泰诺人 90% 在 30 年内死光（病 + 屠杀 + 过劳），你 1514 突然觉醒 — 余生 50 年到处呼吁"印第安人是人不是动物"。你的著作《简短描述毁灭印度群岛》在欧洲流传 — 但没能阻止屠杀。',
        en: 'In 1502 you arrived on Hispaniola — initially a slaveowner under the encomienda system. You watched the Taíno die 90% in 30 years (disease + slaughter + overwork). In 1514 you converted — spent the next 50 years arguing "Indians are humans, not animals." Your Brief Account of the Destruction of the Indies circulated in Europe — but didn\'t stop the killing.',
      },
      hook: {
        cn: '如果你是 Las Casas — 你说服西班牙王禁止虐待印第安人，但你建议"用非洲奴隶代替"— 后来你后悔了。"良知"能不能在历史中真的胜利？',
        en: 'If you were Las Casas — you persuaded the Spanish king to ban Indian abuse, but you suggested "use African slaves instead" — and later regretted it. Can "conscience" really win in history?',
      },
    },
    {
      emoji: '😢',
      name: { cn: 'Taíno 部落民', en: 'Taíno Native' },
      role: { cn: '加勒比海岛上的原住民', en: 'Caribbean indigenous islander' },
      bio: {
        cn: '你 1492 年看着 3 艘大船在你海滩靠岸。你的酋长 Cacique 给来人金子和食物 — 你不知道这一刻你的世界要消失。30 年内你的部落（~50 万人）死了 90% — 天花、流感、过劳挖金。你的语言留下"飓风、独木舟、烟草、玉米"几个词进入英语 — 你的人没了。',
        en: 'In 1492 you watched 3 ships land on your beach. Your cacique gave the strangers gold and food — you didn\'t know your world was ending. Within 30 years your people (~500,000) died 90% — smallpox, flu, gold-mine overwork. Your language left "hurricane, canoe, tobacco, maize" in English — your people did not survive.',
      },
      hook: {
        cn: '如果你是 Taíno — "发现新大陆"对欧洲是冒险故事，对你是种族灭绝。你的语言里没有"探险家"这个词，只有"杀手"。书写历史的人选哪个？',
        en: 'If you were Taíno — "discovery of the New World" is an adventure story to Europe; to you it was genocide. Your language had no word for "explorer," only "killer." Whose word does history use?',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'Diego（虚构同龄人）', en: 'Diego (fictional peer)' },
      role: { cn: '13 岁，西班牙 Palos 港小水手', en: '13-year-old, ship\'s boy from Palos, Spain' },
      bio: {
        cn: '你跟 Willow 同龄。1492 年 8 月 3 日你在哥伦布的 Santa María 上当 grumete（小水手）。88 天没看到陆地，水手要造反，哥伦布拿假航海日志糊弄。10 月 12 日清晨你看到陆地 — 史书说"哥伦布发现新大陆"，但喊"陆地！"的可能就是你这种 13 岁的小水手。',
        en: 'Same age as Willow. On Aug 3, 1492, you sailed on Columbus\'s Santa María as a grumete (ship\'s boy). 88 days without land, mutiny brewing, Columbus faking the log. At dawn on Oct 12 you saw land — history says "Columbus discovered the New World," but the one who shouted "Tierra!" might have been a 13-year-old like you.',
      },
      hook: {
        cn: '500 年后 Willow 在加州学校读"哥伦布日"— 但课本不会提你这个 13 岁孩子。她可能跟你同龄出海冒险吗？为什么有些孩子的故事被记得，有些被遗忘？',
        en: '500 years later, Willow reads "Columbus Day" in California textbooks — which never mention you, age 13. Could she go on such an adventure today? Why are some children\'s stories remembered, others forgotten?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Columbus 1492 哥伦布抵达美洲（资助方：Ferdinand & Isabella）',
      'Vasco da Gama 1498 绕非洲到印度（葡萄牙）',
      'Magellan 1519-1522 麦哲伦环球航行',
      'Treaty of Tordesillas 1494 托德西利亚斯条约（葡西分界）',
      'Columbian Exchange 哥伦布大交换（动植物 / 疾病 / 人口）',
      'Conquistadors：Cortés 1521 灭阿兹特克 / Pizarro 1533 灭印加',
      'Caravel 卡拉维尔帆船 + Astrolabe 星盘 + Compass 罗盘',
      'Encomienda 委托监护制 / Middle Passage 中段航行（奴隶贸易）',
    ],
    en: [
      'Columbus 1492 reaches Americas (sponsored by Ferdinand & Isabella)',
      'Vasco da Gama 1498 sails to India around Africa (Portugal)',
      'Magellan 1519-1522 circumnavigation',
      'Treaty of Tordesillas 1494 (Spain–Portugal demarcation)',
      'Columbian Exchange (plants/animals/diseases/people)',
      'Conquistadors: Cortés (Aztec, 1521) / Pizarro (Inca, 1533)',
      'Caravel + astrolabe + compass — navigation tech',
      'Encomienda system / Middle Passage of slave trade',
    ],
  },
};
