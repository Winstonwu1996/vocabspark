// view: American Revolution · 1776 · North Atlantic
// Grade 5 · HSS-5.5 (American Revolution)
export const VIEW = {
  id: 'american-revolution',
  grade: 5,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-5.5',   label: { cn: 'CA HSS-5.5 美国独立战争原因', en: 'CA HSS-5.5 Causes of American Revolution' } },
    { code: 'CA-HSS-5.6',   label: { cn: 'CA HSS-5.6 战争 + 美国建国', en: 'CA HSS-5.6 The War + Founding' } },
    { code: 'AP-USH-3.5',   label: { cn: 'AP US Period 3.5 美国独立战争', en: 'AP US Period 3.5 The American Revolution' } },
  ],
  title:    { cn: '美国独立', en: 'American Revolution' },
  subtitle: { cn: '1775-1783 · 北大西洋 · 地图为 1783 巴黎和约后', en: '1775-1783 · North Atlantic · map shows post-1783 Treaty of Paris' },
  year: 1776,

  camera: {
    projection: 'mercator',
    center: [-40, 45],     // 大西洋两岸都装下
    scale: 360,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'north-america-1776',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1783',
      highlightId:     'usa-1783',
    },
    C:  { civs: 'modern-1783' },
    F:  { ids: ['english-channel', 'gibraltar'] },
    L4: {
      pins: ['lexington', 'philadelphia-1776', 'yorktown', 'paris-1783', 'london-1776',
             'boston-tea-party', 'long-island', 'trenton', 'saratoga'],   // Wikidata 精选
    },
  },

  causalSummary: {
    cn: 'L0 大西洋 5000 公里隔离 + L1 暖期农业 + L2 殖民地 250 万人口 + L3 普通法 / 启蒙 + L4 七年战争债务',
    en: 'L0 5000-km Atlantic separation + L1 warm period + L2 2.5M colonial population + L3 common law/Enlightenment + L4 Seven Years\' War debt',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: '英王 George III 乔治三世', en: 'King George III' },
      role: { cn: '英国国王 1760-1820', en: 'King of Britain 1760-1820' },
      bio: {
        cn: '你 22 岁继位，统治大英帝国。1763 年七年战争英国赢了北美 — 但战争耗尽国库，你需要殖民地交税还债。你给殖民地征 Stamp Act 1765 / Townshend Acts 1767 — 殖民地议会拒缴。你 1775 决定用军队"教训"殖民地 — 失败。你晚年发疯（可能是血卟啉病）— 历史课本只记得你"丢了美国"。',
        en: 'Crowned at 22, ruling the British Empire. In 1763 Britain won the Seven Years\' War in North America — but it bankrupted the treasury, so you taxed the colonies (Stamp Act 1765, Townshend Acts 1767). They refused. In 1775 you sent troops to "teach them a lesson" — disaster. In old age you went mad (likely porphyria) — textbooks remember only "the king who lost America."',
      },
      hook: {
        cn: '如果你是 George III — 你只是要殖民地"分担"七年战争的债。这要求合理吗？为什么殖民地拒缴让你这么生气？是钱的问题还是"权威"被挑战？',
        en: 'If you were George III — you only asked the colonies to share the war debt. Was that unreasonable? Why did their refusal enrage you? Money, or "authority" being defied?',
      },
    },
    {
      emoji: '✍️',
      name: { cn: 'Thomas Jefferson 杰斐逊', en: 'Thomas Jefferson' },
      role: { cn: '《独立宣言》起草人 / 弗吉尼亚奴主', en: 'Drafter of the Declaration / Virginia slave-owner' },
      bio: {
        cn: '你 33 岁起草《独立宣言》— "All men are created equal"。但你拥有 600 个奴隶。你跟 Sally Hemings（你妻子的同父异母妹妹，奴隶）有 6 个孩子。你是 Locke + Montesquieu 的信徒 — 但你的"自由"概念排除黑人和女性。后来你当总统签 1803 路易斯安那购地。',
        en: 'At 33 you drafted the Declaration — "All men are created equal." But you owned 600 slaves. You had 6 children with Sally Hemings (your wife\'s half-sister, enslaved). You worshipped Locke + Montesquieu — yet your "freedom" excluded Blacks and women. Later as president, you bought Louisiana in 1803.',
      },
      hook: {
        cn: '如果你是 Jefferson — 你写"人人平等"时，你妻子的奴隶妹妹给你怀孕。"言行不一"是个人虚伪还是时代局限？今天我们读你时该怎么看？',
        en: 'If you were Jefferson — when you wrote "all men are equal," your wife\'s enslaved sister was pregnant by you. Hypocrisy, or limit of an era? How should we read you today?',
      },
    },
    {
      emoji: '🎭',
      name: { cn: '保皇党 Loyalist', en: 'Loyalist' },
      role: { cn: '反革命的殖民地居民（占 1/5 人口）', en: 'Pro-British colonist (~20% of population)' },
      bio: {
        cn: '你住纽约。你不想造反 — 你认为"渐进改良"比"暴力革命"好。1776 年战争开始你被邻居孤立 — 房子被烧、家人被打。1783 战后你逃到加拿大或英国（5-10 万人）— 加拿大今天的英语区是你建的。课本不写你 — 但你也是美国故事的一半。',
        en: 'You live in New York. You don\'t want rebellion — you favor reform over revolution. When war breaks out in 1776 you\'re ostracized — your house burned, family beaten. After 1783 you flee to Canada or Britain (50,000-100,000 of you). You built today\'s English Canada. Textbooks omit you — but you\'re half the American story.',
      },
      hook: {
        cn: '如果你是 Loyalist — 你也是"美国人"，但你输了。胜者写历史。如果 Cornwallis 1781 赢了 Yorktown — 我们今天怎么看 Washington？是不是叫他"叛徒"？',
        en: 'If you were Loyalist — you\'re also "American," but you lost. Winners write history. If Cornwallis had won Yorktown in 1781 — how would we view Washington today? Would we call him "traitor"?',
      },
    },
    {
      emoji: '🪖',
      name: { cn: '大陆军士兵', en: 'Continental Army Soldier' },
      role: { cn: 'Washington 麾下普通兵', en: 'Common soldier under Washington' },
      bio: {
        cn: '你是宾州农户的儿子，1776 年 19 岁参军。你在 Valley Forge 1777-78 冬天跟 11000 同袍熬冻 — 1/4 死了。Washington 不发军饷（钱不够），你光脚踩雪。你不是为"自由"打 — 你是为"生存"和"未来给我一块地"。1783 战后政府给你"土地证书"换薪水 — 大多数人卖了换酒。',
        en: 'A Pennsylvania farmer\'s son who joined at 19 in 1776. At Valley Forge winter 1777-78 you froze with 11,000 comrades — 1/4 died. Washington couldn\'t pay you; you marched barefoot in snow. You didn\'t fight for "freedom" — for survival and "land grants someday." After 1783 the government issued land vouchers in lieu of pay — most veterans sold theirs cheap for liquor.',
      },
      hook: {
        cn: '如果你是士兵 — 课本说"为自由而战"。可你是为饭和地。"理想 vs 利益"哪个推动了革命？',
        en: 'If you were the soldier — textbooks say "fought for freedom." You fought for food and land. Was the revolution driven by ideals or interests?',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'Joseph（虚构同龄人）', en: 'Joseph (fictional peer)' },
      role: { cn: '13 岁，波士顿茶商儿子', en: '13-year-old, Boston tea merchant\'s son' },
      bio: {
        cn: '你跟 Willow 同龄。1773 年 12 月 16 日你 10 岁 — 看你哥哥扮印第安人去港口砸 342 箱英国茶。你 1775 年 13 岁，列星顿打响第一枪你激动得睡不着觉。1781 你 19 岁，可能在 Yorktown 看 Cornwallis 投降。你这一代是"革命的孩子"— 长大后成立联邦政府的就是你们。',
        en: 'Same age as Willow. On Dec 16, 1773, you were 10 — you watched your brother dress as a Mohawk and dump 342 chests of British tea in the harbor. At 13 in 1775, the shot at Lexington kept you awake with excitement. At 19 in 1781 you might have stood at Yorktown watching Cornwallis surrender. Your generation is "revolution\'s children" — building the federal government when you grow up.',
      },
      hook: {
        cn: '250 年后 Willow 在加州学"美国独立战争"— 但她不会经历"为新国家诞生"那种激动。你这代人有"塑造历史"的机会，她那代呢？是不是反而更难找到方向？',
        en: '250 years later, Willow studies the Revolution in California — but she\'ll never feel the thrill of "birthing a new nation." Your generation got to shape history. Hers — does the abundance of paths actually make finding direction harder?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Stamp Act 1765 印花税法 → "No taxation without representation"',
      'Boston Tea Party 1773 波士顿倾茶 / Intolerable Acts 1774',
      'Lexington & Concord 1775.4.19 — 第一枪',
      'Declaration of Independence 1776.7.4 — Jefferson 起草',
      'Common Sense — Thomas Paine《常识》1776',
      'Saratoga 1777 — 转折点（法国参战）',
      'Yorktown 1781 — Cornwallis 投降',
      'Treaty of Paris 1783 — 英国承认美国独立',
    ],
    en: [
      'Stamp Act 1765 → "No taxation without representation"',
      'Boston Tea Party 1773 / Intolerable Acts 1774',
      'Lexington & Concord, April 19, 1775 — "shot heard \'round the world"',
      'Declaration of Independence, July 4, 1776 (drafted by Jefferson)',
      'Common Sense — Thomas Paine, 1776',
      'Battle of Saratoga 1777 — turning point (France joins)',
      'Yorktown 1781 — Cornwallis surrenders',
      'Treaty of Paris 1783 — Britain recognizes US independence',
    ],
  },
};
