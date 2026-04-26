// view: Islamic Caliphate Rise · 750 AD · Mediterranean + Middle East
// Grade 7 · HSS-7.2 (Islamic civilizations)
export const VIEW = {
  id: 'islamic-rise',
  grade: 7,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-7.2', label: { cn: 'CA HSS-7.2 伊斯兰文明（穆罕默德 / 哈里发 / 黄金时代）', en: 'CA HSS-7.2 Islamic civilizations (Muhammad / Caliphate / Golden Age)' } },
    { code: 'AP-WHAP-1.3', label: { cn: 'AP World Unit 1.3 伊斯兰世界与跨文化交流', en: 'AP World Unit 1.3 Islamic World + cross-cultural exchange' } },
  ],
  title:    { cn: '伊斯兰文明兴起', en: 'Rise of Islamic Civilization' },
  subtitle: { cn: '750 AD · 倭马亚鼎盛 · 阿拔斯将立', en: '750 AD · Umayyad peak · Abbasid revolution coming' },
  year: 750,

  camera: {
    projection: 'mercator',
    center: [25, 30],
    scale: 320,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'islamic-rise-750',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_700',
      highlightId:     'umayyad',
    },
    F:  { ids: ['gibraltar', 'bosporus', 'silk-road', 'suez-isthmus'] },
    L4: {
      pins: ['damascus', 'mecca', 'medina', 'tours-732', 'baghdad-future'],
    },
  },

  causalSummary: {
    cn: 'L0 阿拉伯半岛三面海 + 沙漠屏障 + 红海/印度洋商路 + L1 6-7 世纪暖期 + 季风 + L2 商队/朝圣中心/古阿拉伯字母 + L3 Quran + Sharia + Umma 信仰=法律=国家 + L4 622 Hijra → 711 入西班牙 → 732 Tours 战败 → 750 阿拔斯',
    en: 'L0 Arabia 3-sided sea + desert + Red Sea/Indian Ocean routes + L1 6-7th c. warm + monsoons + L2 caravans/pilgrimage hub/Arabic script + L3 Quran + Sharia + Umma · faith=law=state + L4 622 Hijra → 711 Iberia → 732 Tours stop → 750 Abbasid',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: '倭马亚哈里发', en: 'Umayyad Caliph' },
      role: { cn: '大马士革哈里发 / 750 年帝国领袖', en: 'Caliph in Damascus / leader of 750 empire' },
      bio: {
        cn: '你是 Mu\'awiya 的后代，定都大马士革。100 年间倭马亚扩张到从西班牙到印度河 — 史上最快帝国扩张。你是阿拉伯精英，下令铸第一种伊斯兰金币（dinar）。但你偏袒阿拉伯人，对波斯/埃及新皈依者征税 — 750 年阿拔斯起义把你家族屠杀殆尽。',
        en: 'You\'re a descendant of Mu\'awiya, capital at Damascus. In 100 years the Umayyads expanded from Spain to the Indus — history\'s fastest imperial expansion. You\'re Arab elite, minted the first Islamic gold dinars. But you favored Arabs and taxed Persian/Egyptian converts — in 750 the Abbasid revolution massacred your family.',
      },
      hook: {
        cn: '如果你是哈里发 — 你统治从西班牙到印度，但你的"阿拉伯特权"政策让其他穆斯林造反。统一靠"我们都是穆斯林"还是"阿拉伯人最高"？',
        en: 'If you were Caliph — you rule Spain to India, but your "Arab privilege" policy enrages other Muslims. Is unity built on "we are all Muslim" or "Arabs are first"?',
      },
    },
    {
      emoji: '🕌',
      name: { cn: '什叶派学者', en: 'Shi\'a Scholar' },
      role: { cn: '阿里追随者后裔', en: 'Descendant of Ali\'s followers' },
      bio: {
        cn: '你认为穆罕默德女婿阿里才是合法继承人 — 不是被推举的 Abu Bakr。680 年阿里之子 Husayn 在 Karbala 被倭马亚军屠杀 — 这成你们什叶派最深的仇。你住伊拉克 Kufa，秘密保存 Husayn 的传统，等待"隐遁的伊玛目"回归。',
        en: 'You believe Muhammad\'s son-in-law Ali was the rightful successor — not the elected Abu Bakr. In 680 Ali\'s son Husayn was massacred by Umayyad troops at Karbala — your community\'s deepest wound. You live in Kufa, Iraq, secretly preserving Husayn\'s legacy, awaiting the "hidden Imam" to return.',
      },
      hook: {
        cn: '如果你是什叶学者 — 倭马亚一统天下用"逊尼"为正统。你坚持小派别坚信"血统"才是合法。1300 年后伊朗 vs 沙特还是这件事。这是宗教之争还是权力之争？',
        en: 'If you were Shi\'a scholar — Umayyads rule using "Sunni" orthodoxy. You stay a minority insisting bloodline matters. 1300 years later, Iran vs Saudi Arabia is still this fight. Religious dispute, or power struggle?',
      },
    },
    {
      emoji: '📜',
      name: { cn: '苏菲神秘主义者', en: 'Sufi Mystic' },
      role: { cn: '伊斯兰内修传统的修士', en: 'Practitioner of Islamic mystical tradition' },
      bio: {
        cn: '你不在乎政治哈里发 — 你追求与神直接合一。你穿粗羊毛长袍（suf），日夜念主名 dhikr。哈里发们打仗你冷眼旁观 — "他们抢城池，我抢自己的灵魂"。你的诗歌后来传到全世界（Rumi、Hafiz）。',
        en: 'You don\'t care about caliphs — you seek direct union with God. You wear coarse wool (suf), chant God\'s name day and night (dhikr). While caliphs fight, you watch coldly: "they conquer cities, I conquer my own soul." Your poetry will later reach the world (Rumi, Hafiz).',
      },
      hook: {
        cn: '如果你是苏菲 — 帝国扩到西班牙，你不在乎。你说"真正的圣战是对自己的内心"。这是出世的智慧还是逃避现实？',
        en: 'If you were Sufi — the empire stretches to Spain; you don\'t care. You say "true jihad is against the self." Is this transcendent wisdom, or escape from reality?',
      },
    },
    {
      emoji: '🐪',
      name: { cn: '沙漠商队驼夫', en: 'Caravan Camel Driver' },
      role: { cn: '麦加-大马士革商路上的中转工', en: 'Worker on Mecca-Damascus trade route' },
      bio: {
        cn: '你跟着商队从麦加到大马士革 — 1500 公里，4 个月。一头骆驼能驮 200 公斤香料 / 丝绸 / 黄金。你是穆斯林，每天 5 次礼拜（无论沙漠营地还是绿洲），每年斋月禁食 — 你的信仰让全帝国商人能信任你。"伊斯兰 = 商业信任协议"。',
        en: 'You travel with caravans from Mecca to Damascus — 1,500km, 4 months. One camel carries 200kg of spices, silk, gold. You\'re Muslim, pray 5 times daily (desert camp or oasis), fast in Ramadan — your faith makes you trustworthy to merchants empire-wide. "Islam = a commercial trust protocol."',
      },
      hook: {
        cn: '如果你是驼夫 — 伊斯兰扩张靠剑还是靠商队？历史课本爱讲战争，但每年 100 万穆斯林朝觐 + 商队是真正传播信仰的力量。',
        en: 'If you were the camel driver — did Islam expand by sword or by caravan? Textbooks love wars, but a million pilgrims and caravans yearly are what really carried the faith.',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'Yusuf（虚构同龄人）', en: 'Yusuf (fictional peer)' },
      role: { cn: '13 岁，叙利亚商人之子', en: '13-year-old, Syrian merchant\'s son' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸经营大马士革到中国的丝绸贸易。你能背 1/3 古兰经，说阿拉伯语 + 希腊语 + 一点点中文。750 阿拔斯起义那年你看着倭马亚王族被屠杀，全家逃到西班牙 — 你将在科尔多瓦长大，那将是 100 年后欧洲最大学术中心。',
        en: 'Same age as Willow. Your father trades silk from Damascus to China. You\'ve memorized 1/3 of the Quran, speak Arabic + Greek + a little Chinese. In 750 you watch Umayyad princes massacred and your family flees to Spain — you\'ll grow up in Cordoba, soon to be Europe\'s greatest scholarly center.',
      },
      hook: {
        cn: '1300 年后 Willow 在加州学校跟穆斯林朋友吃饭。你跟她隔着 1300 年和 12000 公里。"伊斯兰世界" — 在你眼里是新生的 vs 在她眼里是历史 + 现实。是同一个东西吗？',
        en: '1300 years later, Willow eats lunch with Muslim friends in California. 1300 years and 12,000km separate you. "The Islamic world" — newborn to you, history-plus-present to her. Are they the same thing?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Muhammad 穆罕默德 570-632 — 创立伊斯兰教',
      'Hijra 希吉拉 622 — 麦加 → 麦地那（伊斯兰历元年）',
      'Five Pillars 五功：信 / 拜 / 课 / 斋 / 朝（信仰、礼拜、天课、斋月、朝觐）',
      'Quran《古兰经》/ Sharia 教法 / Sunnah 圣训',
      'Sunni vs Shia 逊尼派 vs 什叶派分裂（Ali 继承之争）',
      'Umayyad Caliphate 倭马亚 661-750 / Abbasid Caliphate 阿拔斯 750-1258',
      'Battle of Tours 732 — 查理·马特击退穆斯林进入欧洲',
      'Islamic Golden Age 黄金时代：al-Khwarizmi 代数 / House of Wisdom 智慧宫',
    ],
    en: [
      'Muhammad 570-632 — founder of Islam',
      'Hijra 622 — Mecca to Medina (year 1 of Islamic calendar)',
      'Five Pillars: Shahada / Salah / Zakat / Sawm / Hajj',
      'Quran / Sharia (law) / Sunnah (tradition)',
      'Sunni vs Shia split (succession dispute over Ali)',
      'Umayyad Caliphate 661-750 / Abbasid Caliphate 750-1258',
      'Battle of Tours 732 — Charles Martel halts Muslim advance',
      'Islamic Golden Age: al-Khwarizmi (algebra) / House of Wisdom',
    ],
  },
};
