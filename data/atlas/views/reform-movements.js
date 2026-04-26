// view: Reform Movements 1830-1860 · 1848 · Northeast US
// Grade 8 · HSS-8.6 (Reform movements)
export const VIEW = {
  id: 'reform-movements',
  grade: 8,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-8.6',   label: { cn: 'CA HSS-8.6 改革运动（女权 / 废奴 / 教育 / 戒酒）', en: 'CA HSS-8.6 Reform movements (women / abolition / education / temperance)' } },
    { code: 'AP-USH-4.10',  label: { cn: 'AP US Period 4.10 改革运动', en: 'AP US Period 4.10 Women / abolition / education / temperance' } },
    { code: 'AP-USH-4.11',  label: { cn: 'AP US Period 4.11 超验主义', en: 'AP US Period 4.11 Transcendentalism' } },
  ],
  title:    { cn: '改革运动 1830-1860', en: 'Reform Movements 1830-1860' },
  subtitle: { cn: '1848 · 第二次大觉醒 + 女权 + 废奴 + 教育', en: '1848 · Second Great Awakening + women + abolition + education' },
  year: 1848,

  camera: {
    projection: 'mercator',
    center: [-77, 42],
    scale: 1100,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'usa-1830',          // 复用 — 1848 与 1830 在改革活动地理上无质变
      modernPolities:  'north-america-modern',
      highlightId:     'usa-states-1830',
    },
    F:  { ids: ['appalachians', 'mississippi'] },
    L4: {
      pins: ['seneca-falls-1848', 'liberator-1831', 'oberlin-1833', 'walden-pond-1845', 'washingtonian-temperance', 'dorothea-dix-1843'],
    },
  },

  causalSummary: {
    cn: 'L0 新英格兰 + 纽约上州人口密度 + 伊利运河（1825）连通五大湖 + L1 稳定温带气候 + L2 工业革命中产兴起 + 中产女性识字 + 印刷机便宜 + 识字爆发 + L3 第二次大觉醒（Charles Finney）+「人可完美」 + 浪漫主义个人主义 + Quaker 平等传统 + L4 1831 Garrison《Liberator》→ 1833 Anti-Slavery Society → 1848 Seneca Falls → 1859 John Brown / Underground Railroad',
    en: 'L0 NE + upstate NY density + Erie Canal (1825) connects Great Lakes + L1 stable temperate climate + L2 industrial middle class + literate middle-class women + cheap printing + literacy boom + L3 Second Great Awakening (Charles Finney) + "human perfectibility" + Romantic individualism + Quaker equality + L4 1831 Garrison\'s Liberator → 1833 Anti-Slavery Society → 1848 Seneca Falls → 1859 John Brown / Underground RR',
  },

  keyFigures: [
    {
      emoji: '✍️',
      name: { cn: 'Elizabeth Cady Stanton', en: 'Elizabeth Cady Stanton' },
      role: { cn: '女权运动开创者 / Seneca Falls 发起人', en: 'Pioneer feminist / Seneca Falls organizer' },
      bio: {
        cn: '你是纽约律师女儿，从小看爸爸办公知道法律有多歧视女性（女人婚后没有财产权）。1840 年你跟丈夫去伦敦反奴隶大会 — 女代表被禁止参加 — 你愤怒回家。1848 年你跟 Lucretia Mott 在 Seneca Falls 召开第一次女权大会 — 写《情感宣言》模仿《独立宣言》— "all men and women are created equal"。',
        en: 'A New York lawyer\'s daughter — watching father\'s office you saw how law discriminated against women (married women had no property rights). In 1840 you went with your husband to London\'s anti-slavery convention — women delegates were excluded — fury sent you home. In 1848 with Lucretia Mott you organized Seneca Falls — the first women\'s rights convention — drafting the Declaration of Sentiments echoing the Declaration of Independence: "all men and women are created equal."',
      },
      hook: {
        cn: '如果你是 Stanton — 你 1848 年要"投票权"。你要等 72 年（1920 年第 19 修正案）— 你死时还没投过票。"播种者死前看不到果"— 你能继续吗？',
        en: 'If you were Stanton — in 1848 you demanded the vote. It took 72 years (the 19th Amendment in 1920) — you died without ever voting. "Sowers don\'t live to see the harvest" — would you keep going?',
      },
    },
    {
      emoji: '⛓️',
      name: { cn: 'Frederick Douglass', en: 'Frederick Douglass' },
      role: { cn: '逃奴 / 废奴运动头牌演说家', en: 'Escaped slave / lead abolitionist orator' },
      bio: {
        cn: '你 1818 出生为奴 — 21 岁逃到马萨诸塞。你自学读写，1845 出版自传震动全美 — "一个奴隶能写得这么好"反驳了"黑人智力低"的谎言。你的演说让北方中产听众哭倒一片。1848 你也参加了 Seneca Falls — 是大会唯一的非裔代表。你跟 Stanton 联手 — "黑人解放 + 女性平等"是同一个事业。',
        en: 'Born enslaved 1818 — escaped to Massachusetts at 21. Self-taught literacy. Your 1845 autobiography shocked America — "a slave wrote this well" exposed the "Black inferiority" lie. Your speeches reduced white middle-class audiences to tears. In 1848 you also attended Seneca Falls — the only African American delegate. With Stanton you united "Black liberation + women\'s equality" as one cause.',
      },
      hook: {
        cn: '如果你是 Douglass — 你联合女权运动是政治智慧（"两个被压迫群体合力"），但战后美国只给黑人男性投票权（15 修正案 1870），女性等到 1920。"分而治之"成功了 — 你怎么看？',
        en: 'If you were Douglass — your alliance with feminism was strategy ("two oppressed groups together"). But postwar America gave Black men the vote (15th Amendment 1870), women waiting until 1920. "Divide and rule" succeeded — how do you see it?',
      },
    },
    {
      emoji: '⛪',
      name: { cn: 'Charles Finney 传道者', en: 'Charles Finney' },
      role: { cn: '第二次大觉醒灵魂人物', en: 'Soul of the Second Great Awakening' },
      bio: {
        cn: '你是律师转传道者。1830 年代你在西纽约州主持"奋兴会"— 数千人在帐篷里悔改 + 哭泣 + 倒地。你不讲老式加尔文宿命论，你说"人能选择拯救自己"— 这成"人能完美"思想 → 推动废奴 / 戒酒 / 教育所有改革。1835 你成 Oberlin 学院神学院长 — 第一个招黑人 + 女性的大学。',
        en: 'A lawyer turned preacher. In the 1830s you led revivals in upstate New York — thousands in tents, repenting, weeping, collapsing. You rejected old Calvinist predestination — "you can choose to save yourself." This "human perfectibility" idea fueled abolition / temperance / education reform. In 1835 you became Oberlin\'s theology head — the first US college admitting Black students AND women.',
      },
      hook: {
        cn: '如果你是 Finney — 你的"人能完美"信念让美国进步派 100 年。但同样的信念也让今天的"自我帮助行业"商业化。"个人改变能不能换掉系统改变"？',
        en: 'If you were Finney — your "human perfectibility" fueled 100 years of American progressivism. The same belief also commercializes today\'s "self-help industry." Can "individual change" really substitute for systemic change?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '南方蓄奴白人农户', en: 'Southern Slave-owning Farmer' },
      role: { cn: '中等种植园主 / 反改革派', en: 'Middling planter / anti-reform' },
      bio: {
        cn: '你住南卡罗来纳，有 20 个奴隶种棉花。1840 年代你看着北方废奴运动越来越狠 — Garrison 烧宪法（说宪法保护奴隶制就是"魔鬼契约"）。你认为奴隶制不是"罪恶"是"积极的善"（Calhoun 的话）— 因为基督教化了非洲人 + 给社会秩序。1860 年 Lincoln 当选你支持脱离联邦。',
        en: 'You live in South Carolina, owning 20 enslaved Black farmers growing cotton. By the 1840s, Northern abolitionism gets fiercer — Garrison literally burned the Constitution (calling it a "covenant with hell" for protecting slavery). You believe slavery isn\'t "evil" but "a positive good" (Calhoun) — Christianizing Africans + maintaining social order. When Lincoln wins in 1860 you back secession.',
      },
      hook: {
        cn: '如果你是蓄奴农户 — 你真的相信奴隶制是"善"吗？还是只是为家族经济辩护？50 年后你的孙子会用同一套话术辩护 Jim Crow。"自欺"代代相传 — 怎么打破？',
        en: 'If you were the slaveowner — do you really believe slavery is "good," or just defending family wealth? 50 years later your grandson uses the same rhetoric for Jim Crow. "Self-deception" passes generations — how to break it?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Lucy（虚构同龄人）', en: 'Lucy (fictional peer)' },
      role: { cn: '13 岁，Quaker 改革家女儿', en: '13-year-old, Quaker reformer\'s daughter' },
      bio: {
        cn: '你跟 Willow 同龄，住宾州费城。爸爸妈妈是 Quaker — 帮 Underground Railroad 藏逃奴。你 8 岁起就在地窖里给逃奴送饭。1848 你妈妈带你去 Seneca Falls — 你看到女人公开演讲（你之前以为只有男人能讲）— 你这一代女孩是"看着 Stanton 长大"。50 年后你可能加入女权选举权运动。',
        en: 'Same age as Willow. You live in Quaker Philadelphia. Your parents shelter escaped slaves through the Underground Railroad. From age 8 you bring food to fugitives in the cellar. In 1848 your mother took you to Seneca Falls — you saw women publicly speaking (you thought only men could). Your generation grew up "watching Stanton." 50 years later you might join the suffrage movement.',
      },
      hook: {
        cn: '178 年后 Willow 在加州 — 跟黑人朋友、亚裔朋友、LGBTQ 朋友一起上学。这一切是从你 13 岁那年妈妈带你听 Stanton 演讲开始的。一个孩子参加一场会议能改变历史吗？',
        en: '178 years later, Willow attends school with Black, Asian, LGBTQ friends. All of this began the year your mother took you, age 13, to hear Stanton speak. Can one child at one meeting change history?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Second Great Awakening 第二次大觉醒（Charles Finney）',
      'Seneca Falls 1848 +《情感宣言》（Stanton + Mott）',
      'American Anti-Slavery Society 1833（Garrison + Douglass）',
      'Sojourner Truth 1851 Akron 演讲（后由 Frances Gage 1863 改写为 "Ain\'t I a Woman?"）',
      'Horace Mann + Common Schools 公立学校运动',
      'Dorothea Dix 精神病院改革（1843 起）',
      'Transcendentalism 超验主义（Emerson / Thoreau ·《Walden》1854）',
      'Temperance 戒酒运动 / Maine Law 1851 全州禁酒',
      'Brook Farm 乌托邦公社（1841-47 MA）',
    ],
    en: [
      'Second Great Awakening (Charles Finney)',
      'Seneca Falls 1848 + Declaration of Sentiments (Stanton, Mott)',
      'American Anti-Slavery Society 1833 (Garrison + Douglass)',
      'Sojourner Truth 1851 Akron speech (later popularized as "Ain\'t I a Woman?" by Frances Gage 1863)',
      'Horace Mann + Common Schools movement',
      'Dorothea Dix asylum reform (from 1843)',
      'Transcendentalism (Emerson, Thoreau · Walden 1854)',
      'Temperance / Maine Law 1851 statewide prohibition',
      'Brook Farm utopian community (1841-47 MA)',
    ],
  },
};
