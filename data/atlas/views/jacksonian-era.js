// view: Jacksonian Era · 1830 · United States
// Grade 8 · HSS-8.3 (Jacksonian democracy)
export const VIEW = {
  id: 'jacksonian-era',
  grade: 8,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-8.3',  label: { cn: 'CA HSS-8.3 杰克逊式民主与共和国早期发展', en: 'CA HSS-8.3 Jacksonian democracy & early Republic' } },
    { code: 'AP-USH-4.7',  label: { cn: 'AP US Period 4.7 民主扩张', en: 'AP US Period 4.7 Expanding Democracy' } },
    { code: 'AP-USH-4.8',  label: { cn: 'AP US Period 4.8 杰克逊与联邦权力', en: 'AP US Period 4.8 Jackson and Federal Power' } },
  ],
  title:    { cn: '杰克逊时代', en: 'Jacksonian Era' },
  subtitle: { cn: '1830 · 美国 · 普选权扩 + 印第安驱逐 + 银行战争', en: '1830 · USA · expanded suffrage + Indian removal + Bank War' },
  year: 1830,

  camera: {
    projection: 'mercator',
    center: [-92, 38],
    scale: 600,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'usa-1830',
      modernPolities:  'north-america-modern',
      // 不指定 yearSnapshot — 全部 customPolygon（1830 在 1815/1880 之间无合适快照）
      highlightId:     'usa-states-1830',
    },
    F:  { ids: ['mississippi', 'ohio-river', 'missouri-river', 'appalachians', 'rocky-mountains'] },
    L4: {
      pins: ['trail-of-tears-1830', 'andrew-jackson-1828', 'bank-of-us-veto', 'nullification-crisis', 'texas-revolution-1836'],
    },
  },

  causalSummary: {
    cn: 'L0 西扩边疆 + 密西西比河航运 + 阿巴拉契亚以西广袤平原 + L1 棉花南扩持续繁荣 + L2 1830 美国 1280 万人 / 1820-1840 人口 +200% / 白人男性普选权 + L3 政党机器 + 战利品制 + 1830《印第安迁移法》+ 杰克逊民粹 + L4 1828 当选 → 1830 印第安迁移法 → 1832 银行战争 + 拒行危机 → 1836 德州独立 → 1838 血泪之路',
    en: 'L0 expanding frontier + Mississippi navigation + vast plains W of Appalachians + L1 cotton boom continues + L2 1830 US 12.8M / pop +200% in 1820-40 / universal white-male suffrage + L3 party machines + spoils system + 1830 Indian Removal Act + Jacksonian populism + L4 1828 elected → 1830 Removal Act → 1832 Bank War + Nullification → 1836 Texas indep. → 1838 Trail of Tears',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: 'Andrew Jackson 杰克逊', en: 'Andrew Jackson' },
      role: { cn: '第七任总统 1829-1837 / "平民总统"', en: '7th US president 1829-1837 / "people\'s president"' },
      bio: {
        cn: '你出身南卡爱尔兰移民贫家，父亲死于革命战争前两个月。你 13 岁打英国，被刺刀划脸（终生疤）。你做律师 + 西部地主 + 田纳西参议员 + 1812 战争英雄（New Orleans 一战成名）。你 1828 当选为第一个"非弗吉尼亚 + 非贵族出身"总统 — 但你也屠杀印第安人 + 蓄奴 + 用"分赃制"任命亲信。',
        en: 'Born to poor Irish immigrants in South Carolina; father died 2 months before your birth. At 13 you fought the British and were slashed by a bayonet (lifelong scar). You became lawyer + western land speculator + Tennessee senator + War of 1812 hero (Battle of New Orleans). In 1828 you were the first "non-Virginia, non-aristocrat" president. But you also killed Indians + owned slaves + used the spoils system.',
      },
      hook: {
        cn: '如果你是 Jackson — 你被叫"民主之父"和"种族灭绝之父"。"平民英雄"和"屠杀者"是同一人吗？还是民主本身就有这两面？',
        en: 'If you were Jackson — called both "father of democracy" and "father of genocide." Are "popular hero" and "ethnic-cleanser" the same person? Or does democracy itself have these two faces?',
      },
    },
    {
      emoji: '🏛️',
      name: { cn: 'Henry Clay 克莱', en: 'Henry Clay' },
      role: { cn: 'Whig 党领袖 / 反 Jackson 国会议长', en: 'Whig leader / anti-Jackson House Speaker' },
      bio: {
        cn: '你是 Whig 党创建人 — 反对 Jackson 的"独裁倾向"。你支持"美国体系"— 联邦投资基础设施 + 中央银行 + 关税保护工业。Jackson 拒绝重立第二合众国银行（1832 年银行战争），你输了 — 但 50 年后你的"基建国家"愿景在共和党手里实现。',
        en: 'Founder of the Whig Party — opposing Jackson\'s "authoritarian tendencies." You championed the "American System" — federal infrastructure + central bank + protective tariffs. Jackson vetoed the Second Bank in 1832 — you lost the Bank War. But 50 years later, your "infrastructure-state" vision triumphed under the Republicans.',
      },
      hook: {
        cn: '如果你是 Clay — 你输了党争，但你的政策思路赢了。"输赢"在政治史上是不是常常错位？',
        en: 'If you were Clay — you lost the party fight, but your policy ideas won. In political history, is "win/lose" often misaligned with what actually prevails?',
      },
    },
    {
      emoji: '⚖️',
      name: { cn: 'John Marshall 马歇尔', en: 'John Marshall' },
      role: { cn: '最高法院首席大法官 1801-1835', en: 'Chief Justice 1801-1835' },
      bio: {
        cn: '你 34 年首席大法官，奠定司法独立 + 司法审查（Marbury v. Madison 1803）。1832 你判 Worcester v. Georgia — 联邦法律保护切罗基不被驱逐。Jackson 据传说"Marshall 判了，让他自己执行去"（apocryphal）。Trail of Tears 1838 你死了 3 年后还是发生 — 法律可以宣告正义，但需要执行力。',
        en: 'For 34 years you were Chief Justice, establishing judicial independence + judicial review (Marbury v. Madison, 1803). In 1832 you ruled Worcester v. Georgia — federal law protected Cherokee from removal. Jackson allegedly said "Marshall has made his decision; now let him enforce it" (apocryphal). The 1838 Trail of Tears happened 3 years after your death anyway — law can declare justice, but requires enforcement.',
      },
      hook: {
        cn: '如果你是 Marshall — 你写下"法律保护切罗基"判决但 Jackson 不执行。"法律 vs 政治权力"— 谁赢？这道题在 2026 年的美国还在反复。',
        en: 'If you were Marshall — you ruled "law protects Cherokee" but Jackson defied it. "Law vs political power" — who wins? In 2026 America, this question keeps repeating.',
      },
    },
    {
      emoji: '😢',
      name: { cn: 'Cherokee 受驱逐者', en: 'Cherokee Forced Migrant' },
      role: { cn: '1838 血泪之路上的家庭', en: 'Family on the 1838 Trail of Tears' },
      bio: {
        cn: '你住佐治亚切罗基自治区。你家 1820 年代已经像美国邻居一样 — 有农场 + 学校 + 报纸 + 宪法。1838 联邦军把你从家拖出来，押送 1200 英里到俄克拉荷马 — 4000 同族死在路上（冬天 + 没食物 + 没毯子）。你失去家族墓地、房子、世代经营的农场。',
        en: 'You lived in the Cherokee Nation in Georgia. By the 1820s your people had farms, schools, newspaper, constitution — fully "American." In 1838 federal troops dragged you from home, marched you 1,200 miles to Oklahoma — 4,000 Cherokee died en route (winter + no food + no blankets). You lost ancestral graves, your house, your farm.',
      },
      hook: {
        cn: '如果你是切罗基受驱逐者 — 你"做了一切美国式生活"还是被强拆。"做对的事就有好结果"这条道德 — 在你身上失效。Willow 怎么看你？',
        en: 'If you were the Cherokee migrant — you "did everything the American way" and were still expelled. The moral "do right and you\'ll be fine" failed for you. How does Willow see you today?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Sarah（虚构同龄人）', en: 'Sarah (fictional peer)' },
      role: { cn: '13 岁，Whig 党律师女儿', en: '13-year-old, Whig lawyer\'s daughter' },
      bio: {
        cn: '你跟 Willow 同龄，住俄亥俄辛辛那提。爸爸是 Whig 党律师，反对 Jackson。1832 你 13 岁，看 Bank War 在报纸上吵得热火朝天。你妹妹 9 岁。你识字（中产女孩可以受教育），将来可能去 Oberlin 学院（1833 第一所招收女性 + 黑人的大学）。',
        en: 'Same age as Willow. You live in Cincinnati, Ohio. Your father is a Whig lawyer opposing Jackson. In 1832 (age 13) you read papers boiling over the Bank War. Your sister is 9. You can read (middle-class girls get schooling), and might attend Oberlin (1833, first US college admitting women AND Black students).',
      },
      hook: {
        cn: '195 年后 Willow 在加州 — 跟你一样关心政治新闻。但你的 1832 是报纸 + 街头辩论；她的 2026 是 TikTok + Twitter。"民主"靠媒体形式 — 媒体变了，民主还能是同一个吗？',
        en: '195 years later, Willow follows political news in California. Your 1832 was newspapers + street debate; her 2026 is TikTok + Twitter. Democracy depends on media. As media change — is it still the same democracy?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Jackson 1828 当选 — "平民总统" + 普选扩张',
      'Indian Removal Act 1830 印第安迁移法 — 5 文明部落被驱',
      'Bank War / 1832 否决合众国第二银行重立',
      'Nullification Crisis 1832 拒行危机（SC 拒联邦关税）',
      'Worcester v. Georgia 1832 — Marshall 判 GA 败 / Jackson 据传拒执行（名言系 apocryphal）',
      'Trail of Tears 1830-50 血泪之路（Cherokee 1838-39 ~4k 死；五大部族 ≥10k 死）',
      'Texas Independence 1836 — Lone Star 共和国（San Jacinto）',
      'Whig Party 1834 立党 — 反 Jackson 联盟（Clay/Webster）',
    ],
    en: [
      'Jackson elected 1828 — "people\'s president" + expanded suffrage',
      'Indian Removal Act 1830 — Five Civilized Tribes uprooted',
      'Bank War / 1832 vetoes 2nd Bank of US recharter',
      'Nullification Crisis 1832 (SC nullifies federal tariff)',
      'Worcester v. Georgia 1832 — Marshall rules vs GA / Jackson reportedly defied (apocryphal quote)',
      'Trail of Tears 1830-50 (Cherokee 1838-39, ~4k die; ≥10k across 5 tribes)',
      'Texas Independence 1836 — Lone Star Republic (San Jacinto)',
      'Whig Party formed 1834 — anti-Jackson coalition (Clay/Webster)',
    ],
  },
};
