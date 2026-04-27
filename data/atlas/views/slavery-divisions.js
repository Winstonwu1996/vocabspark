// view: Slavery & Sectional Divisions · 1850 USA
// Grade 8 · HSS-8.4
export const VIEW = {
  id: 'slavery-divisions',
  grade: 8,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-8.4', label: { cn: 'CA HSS-8.4 奴隶制 + 南北分歧加剧', en: 'CA HSS-8.4 Slavery & sectional crisis' } },
    { code: 'CA-HSS-8.9', label: { cn: 'CA HSS-8.9 奴隶制经济与道德', en: 'CA HSS-8.9 Slavery: economic & moral' } },
    { code: 'AP-USH-5.6', label: { cn: 'AP US Period 5.6 妥协的失败', en: 'AP US Period 5.6 Failure of Compromise' } },
  ],
  title:    { cn: '南北分歧', en: 'Slavery & Sectional Divisions' },
  subtitle: { cn: '1850 · 内战前夜的妥协', en: '1850 · last compromise before Civil War' },
  year: 1850,

  camera: {
    projection: 'mercator',
    center: [-92, 38],
    scale: 600,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'slavery-divisions-1850',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1815',
      highlightId:     'slave-states-1850',
    },
    C:  { civs: 'modern-1880' },
    F:  { ids: [] },
    L4: {
      pins: ['compromise-1850', 'missouri-compromise-1820', 'harpers-ferry-1859', 'underground-rr', 'bleeding-kansas-1856'],
    },
  },

  causalSummary: {
    cn: 'L0 北方寒冷小农 vs 南方棉花种植园地形 + L1 工业革命棉花需求暴增 + L2 1850 年 320 万黑奴 / 北方 1300 万自由人 / 南方 600 万白人 + L3 北方废奴主义 / 南方种植园寡头 / 联邦妥协制度（1820 / 1850 / 1854）+ L4 1850 妥协 → 1854 堪萨斯-内布拉斯加 → 1859 Harpers Ferry → 1861 内战',
    en: 'L0 Cold-climate northern smallholders vs southern cotton-plantation geography + L1 Industrial Revolution explodes cotton demand + L2 1850 · 3.2M enslaved / 13M free in North / 6M whites in South + L3 abolitionism rises / Southern planter oligarchy / federal compromises (1820 / 1850 / 1854) + L4 1850 Compromise → 1854 Kansas-Nebraska → 1859 Harpers Ferry → 1861 Civil War',
  },

  keyFigures: [
    {
      emoji: '🏛️',
      name: { cn: 'Henry Clay 克莱（1850 妥协）', en: 'Henry Clay (1850 Compromise)' },
      role: { cn: '"伟大的妥协者" / 国会参议员', en: '"Great Compromiser" / Senator' },
      bio: {
        cn: '你 73 岁，第三次出来"救国"。1850 年加州想入联邦做自由州 — 南方威胁脱离。你设计 5 项妥协：加州自由 + 新墨西哥 / 犹他公投决定 + DC 禁奴隶贸易 + 严苛逃奴法 + 德州补偿。妥协通过你 1852 死。10 年内一切妥协破裂 — 内战来了。',
        en: 'At 73, you stepped up a third time to "save the nation." In 1850 California wanted statehood as free; the South threatened secession. You designed 5 compromises: California free + New Mexico/Utah popular sovereignty + DC slave trade banned + harsh Fugitive Slave Act + Texas compensation. It passed; you died in 1852. Within 10 years all compromises broke — war came.',
      },
      hook: {
        cn: '如果你是 Clay — 你一辈子用"妥协"避免内战 — 但只是延迟 10 年。"延迟战争"算成功吗？还是反而让最后的爆炸更惨？',
        en: 'If you were Clay — your life of "compromise" delayed civil war — but only 10 years. Was "delaying war" success, or did it make the final explosion worse?',
      },
    },
    {
      emoji: '✊',
      name: { cn: 'John Brown 约翰·布朗', en: 'John Brown' },
      role: { cn: '激进废奴主义者 / Harpers Ferry 武装起义', en: 'Radical abolitionist / Harpers Ferry raid' },
      bio: {
        cn: '你认为奴隶制是"上帝要审判美国的罪"。1856 你在 Bleeding Kansas 杀 5 个奴隶制支持者（Pottawatomie 屠杀）。1859 你带 21 人攻击弗吉尼亚 Harpers Ferry 联邦军械库 — 想发武器给奴隶起义。被抓，绞死。Frederick Douglass 称你"先知"，林肯称你"疯子"。你死后南方更确信"北方要血洗我们"— 加速内战。',
        en: 'You believed slavery was "God\'s sin to judge America for." In 1856 in Bleeding Kansas you killed 5 pro-slavery settlers (Pottawatomie Massacre). In 1859 you led 21 men to seize the Harpers Ferry federal arsenal — to arm a slave rebellion. Captured, hanged. Frederick Douglass called you "prophet"; Lincoln called you "madman." After your death, the South was certain "the North wants to bathe us in blood" — accelerating war.',
      },
      hook: {
        cn: '如果你是 John Brown — 你认为暴力是消灭奴隶制的唯一办法。你死了 — 但你点燃了 60 万人死的内战 — 也终结了奴隶制。"目的论"是不是历史进步的发动机？',
        en: 'If you were Brown — violence was the only way to end slavery. You died — but you ignited a war killing 600,000 — and ended slavery. Is "the ends justify the means" the engine of historical progress?',
      },
    },
    {
      emoji: '⚖️',
      name: { cn: '最高法官 Roger Taney', en: 'Chief Justice Roger Taney' },
      role: { cn: 'Dred Scott 1857 案主审', en: 'Author of Dred Scott v. Sandford 1857' },
      bio: {
        cn: '你是马里兰蓄奴主出身的最高法官。1857 年你判 Dred Scott 案 — 黑人不是公民、永远不是、宪法不保护他们。你以为这判决能"一劳永逸解决奴隶制问题"。结果完全反 — 北方激怒、共和党崛起、Lincoln 当选 — 内战开打。你的"司法解决"反而成内战导火索。',
        en: 'A Maryland slaveowner-turned-Chief-Justice. In 1857 your Dred Scott ruling: Blacks aren\'t citizens, never were, the Constitution doesn\'t protect them. You believed this would "settle slavery once and for all." Instead — Northern fury, Republican rise, Lincoln\'s victory — war ignited. Your "judicial solution" became war\'s spark.',
      },
      hook: {
        cn: '如果你是 Taney — 你以为最高法院能"裁定"政治分裂。结果司法权没那么大。今天的最高法院 (Roe v Wade 推翻 / 选举案件) 还在重复这个错误吗？',
        en: 'If you were Taney — you thought the Court could "rule on" political division. It couldn\'t. Is today\'s Court (Roe overturned / election cases) repeating the same mistake?',
      },
    },
    {
      emoji: '⛓️',
      name: { cn: '黑奴 Harriet Tubman 哈丽特·塔布曼', en: 'Harriet Tubman' },
      role: { cn: '逃奴 / 地下铁路"摩西"', en: 'Escaped slave / "Moses" of the Underground Railroad' },
      bio: {
        cn: '你 1849 从马里兰逃到费城。然后你 13 次冒生命危险回南方 — 救出 70 多个奴隶（包括家人）。"我是火车的指挥员，我从来没把火车开出轨道，从来没有让乘客从车上掉下来"— 你的话。1850 逃奴法让你的工作变 10 倍危险 — 但你继续。内战中你做联邦军侦察员 + 护士。',
        en: 'In 1849 you escaped from Maryland to Philadelphia. Then you risked your life 13 times to return south, freeing 70+ enslaved people (including family). "I was the conductor of the underground railroad. I never ran my train off the track and I never lost a passenger" — your words. The 1850 Fugitive Slave Act made your work 10× more dangerous — you kept going. In the Civil War you scouted and nursed for the Union.',
      },
      hook: {
        cn: '如果你是 Tubman — 你被 1850 逃奴法变成"通缉犯"。你的"自由"是别人决定。你在最危险的时候反而行动最多。"危险中的勇气"是天生的还是被环境激发的？',
        en: 'If you were Tubman — the 1850 law made you a "wanted criminal." Your "freedom" was decided by others. In the most dangerous time, you acted the most. Is "courage in danger" innate, or sparked by environment?',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'Tom（虚构同龄人）', en: 'Tom (fictional peer)' },
      role: { cn: '13 岁，弗吉尼亚黑奴男孩', en: '13-year-old, Virginia enslaved boy' },
      bio: {
        cn: '你跟 Willow 同龄。你妈妈被卖到南卡罗来纳，你 5 岁就再没见到。你不识字（弗吉尼亚法律禁奴隶识字），但你听其他奴隶讲 1859 John Brown 的事 — 你心里燃起希望。1865 你 28 岁，林肯解放奴隶。你余生不停打官司想找回妈妈 — 多数人找不到，家庭分散是奴隶制最深的伤。',
        en: 'Same age as Willow. Your mother was sold to South Carolina; you haven\'t seen her since age 5. You can\'t read (Virginia law forbids slave literacy), but other slaves whisper of John Brown 1859 — hope flickers. By 28 in 1865, Lincoln has freed you. The rest of your life you\'ll petition courts to find your mother — most freed people couldn\'t. Family separation was slavery\'s deepest wound.',
      },
      hook: {
        cn: '160 年后 Willow 在加州学校跟黑人朋友一起午饭。她朋友的祖先可能就是你的兄弟姐妹的后代。"重逢"在 165 年后还在被讨论 — DNA 测试、血缘寻亲。这道伤口愈合了吗？',
        en: '160 years later, Willow eats lunch with Black classmates in California. Their ancestors might descend from your siblings. "Reunion" is still discussed 165 years later — DNA tests, family searches. Has this wound healed?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Cotton Gin 1793 轧棉机（Eli Whitney）→ 棉花经济 → 奴隶制扩张',
      'Missouri Compromise 1820 密苏里妥协（36°30′ 线）',
      'Compromise of 1850 — Fugitive Slave Act 逃奴法',
      'Uncle Tom\'s Cabin《汤姆叔叔的小屋》— Stowe 1852',
      'Kansas-Nebraska Act 1854 / "Bleeding Kansas" 流血堪萨斯',
      'Dred Scott v. Sandford 1857 — 黑奴非公民判决',
      'John Brown\'s raid on Harpers Ferry 1859',
      'Underground Railroad 地下铁路 / Harriet Tubman 哈丽特·塔布曼',
    ],
    en: [
      'Cotton Gin 1793 (Eli Whitney) → cotton boom → spread of slavery',
      'Missouri Compromise 1820 (36°30′ line)',
      'Compromise of 1850 — Fugitive Slave Act',
      'Uncle Tom\'s Cabin — Harriet Beecher Stowe, 1852',
      'Kansas-Nebraska Act 1854 / "Bleeding Kansas"',
      'Dred Scott v. Sandford 1857 — denies Black citizenship',
      'John Brown\'s raid on Harpers Ferry, 1859',
      'Underground Railroad / Harriet Tubman',
    ],
  },
};
