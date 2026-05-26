// view: Decolonization & the Non-Aligned World · 1960 · Global
// HS (Grade 10) · CA HSS-10 (postwar world) · AP World Modern Unit 8.5-8.8
// basemap 注：1960 没有专用基础图，用最近的 world_1945；cold-war.js 已
//   验证 african-decolonization-1960 / india-independence-1947 /
//   bandung-conference-1955 三个 event pin 可用。
// 严肃中立（dark-boundary）：去殖民化既是真正的民族解放，也是充满暴力代价的混乱撤退；
//   既不美化殖民，也不简化为「西方坏 / 东方好」(Rule 0 中性 + neutrality)。
export const VIEW = {
  id: 'decolonization',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/decolonization-1960?from=atlas&atlasId=decolonization',
  grade: 10,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-10',           label: { cn: 'CA HSS Grade 10 二战后世界 — 去殖民化 / 不结盟', en: 'CA HSS Grade 10 postwar world — decolonization / Non-Alignment' } },
    { code: 'AP-WHAP-8.5',         label: { cn: 'AP World Unit 8.5 1900 年后去殖民化', en: 'AP World Unit 8.5 Decolonization after 1900' } },
    { code: 'AP-WHAP-8.6',         label: { cn: 'AP World Unit 8.6 新独立国家', en: 'AP World Unit 8.6 Newly Independent States' } },
    { code: 'AP-WHAP-8.8',         label: { cn: 'AP World Unit 8.8 全球冷战的影响（不结盟运动）', en: 'AP World Unit 8.8 Effects of the global Cold War (Non-Aligned Movement)' } },
  ],
  title:    { cn: '去殖民化与不结盟', en: 'Decolonization & the Non-Aligned World' },
  subtitle: { cn: '1947-1975 · 印巴分治 + 非洲年 1960 + Bandung 1955 · 旧帝国崩塌 + 新世界难产', en: '1947-1975 · Partition + Year of Africa 1960 + Bandung 1955 · old empires collapse + new world is born hard' },
  year: 1960,

  camera: {
    projection: 'mercator',
    center: [10, 20],
    scale: 130,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'cold-war-1962',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1945',
    },
    C:  { civs: 'modern-1880' },
    F:  { ids: ['suez-isthmus', 'malacca-strait', 'sahara-trade', 'niger-river'] },
    L4: {
      pins: ['india-independence-1947', 'african-decolonization-1960', 'bandung-conference-1955'],
    },
  },

  // 5 层因果，对账 narrative §1/§2 + notebook
  // dark-boundary：殖民暴力（孟加拉饥荒 / Radcliffe 划界 / 印巴分治死亡）写实呈现；
  //   独立的代价（鬼魂列车 / 邻居变仇人）与解放的价值同时在场。
  causalSummary: {
    cn: 'L0 二战前全球约 1/4 的土地与人口在大英帝国旗下（加拿大 / 印度 / 非洲 / 澳洲）+ 印度是「王冠上的明珠」（棉花 / 茶叶 / 人力 / 市场养着英国）+ 1884-85 Berlin Conference 欧洲列强在没去过的非洲土地上用尺笔分地盘 + L1 1947 旁遮普肥沃平原（印度粮仓）8 月独立前后约 1500 万人迎面对流大迁徙 + 「鬼魂列车」站台上停着无活人 + L2 印度教徒 / 穆斯林 / 锡克教徒在同村做了几代邻居（排灯节 / 开斋节互访，红白喜事不分信仰来帮忙）— 这层日常信任正是分治暴力撕裂的东西 + 1943 孟加拉饥荒约 200-300 万人饿死（学界争议）+ L3 殖民统治本质是「画线」（英国律师 Cyril Radcliffe 从没来过印度，关在屋里对地图 5 周画完印巴国境）+ 1945 英国选下 Churchill（要福利、要和平，不愿再为帝国流血）+ 联合国调停（Ralph Bunche 1949 罗德岛旅馆谈成中东停火线 + 1950 首位非裔诺贝尔和平奖）+ Bandung 万隆十项原则（不参加大国军事集团 / 和平共处）+ L4 1943 孟加拉饥荒 → 1945 二战结束、英选下 Churchill → 1947.8 印巴分治 + 大迁徙（死亡估计几十万到 100 多万）→ 1949 Bunche 谈成停火线 → 1955 Bandung 会议（29 国，Nehru / Sukarno / Zhou Enlai / Nasser / Tito）→ 1960 非洲年（17 个非洲国家独立）→ 1961 不结盟运动正式成立',
    en: 'L0 before WWII roughly one-fourth of the world\'s land and people lay under the British Empire (Canada / India / Africa / Australia) + India was the "jewel in the crown" (cotton / tea / labor / market sustaining Britain) + at the 1884-85 Berlin Conference European powers sat in offices and split African land they had never seen, with rulers and pens + L1 in 1947 the Punjab plain (India\'s breadbasket) saw around 15 million people walking past each other in opposite directions around the August independence + "ghost trains" pulled into stations with no one alive aboard + L2 Hindus, Muslims, and Sikhs had been neighbors in the same villages for generations (visiting each other for Diwali and Eid, joining each other\'s weddings and funerals regardless of faith) — this everyday trust was exactly what the partition\'s violence tore + the 1943 Bengal famine killed an estimated 2-3 million (the count is debated) + L3 colonial rule was, in its essence, "drawing lines" (the British lawyer Cyril Radcliffe, who had never been to India, was given about five weeks alone with a map to draw the India-Pakistan border) + in 1945 Britain voted Churchill out (wanting welfare and peace, not more bloodshed for the empire) + UN mediation (Ralph Bunche in 1949 negotiated a Middle East ceasefire line at the Rhodes hotel + 1950 first Black recipient of the Nobel Peace Prize) + the Bandung Ten Principles (no joining great-power military blocs / peaceful coexistence) + L4 1943 Bengal famine → 1945 WWII ends, Britain ousts Churchill → August 1947 Partition + the great migration (deaths estimated between several hundred thousand and over a million) → 1949 Bunche negotiates a ceasefire → 1955 Bandung Conference (29 states, Nehru / Sukarno / Zhou Enlai / Nasser / Tito) → 1960 Year of Africa (17 African nations gain independence) → 1961 the Non-Aligned Movement is formally founded',
  },

  // keyFigures: [] — getEffectiveKeyFiguresSync 会从 storyboard
  //   (churchillLens / ralphBuncheLens / partitionRefugeeLens) 自动派生
  keyFigures: [],

  examPoints: {
    cn: [
      '1943 孟加拉饥荒约 200-300 万人饿死（学界因是否计入间接/长期死亡而有争议）',
      '1945 英国选下 Churchill — 战争英雄落选，新政府决定放手让印度独立',
      '1947.8.15 印度独立 + 印巴分治（Partition）',
      'Radcliffe 划界 — 没来过印度的英国律师 5 周画完印巴国境',
      '大迁徙约 1500 万人 + 估计死亡几十万到 100 多万 + 「鬼魂列车」',
      'Ralph Bunche 1949 罗德岛旅馆谈成中东停火线 → 1950 首位非裔诺贝尔和平奖',
      '1955 Bandung 万隆会议（29 个亚非国家，不结盟运动起点）',
      '万隆十项原则（尊重主权 / 不干涉内政 / 不参加大国军事集团 / 和平共处）',
      '1960 非洲年 — 17 个非洲国家独立',
      '1961 不结盟运动正式成立（Nehru / Nasser / Tito / Nkrumah / Sukarno）',
      '冷战夹缝 — 新国家既要应付独立后的内乱，又被卷进美苏代理战争',
      '反 Whig 注记：去殖民化常被讲成「自由的胜利」；从分治难民的视角看，独立的第一个礼物常是逃命',
      'Churchill 两面同体：反法西斯英雄 + 顽固帝国主义者（公开骂 Gandhi、孟加拉饥荒拒绝调粮）',
    ],
    en: [
      '1943 Bengal famine kills an estimated 2-3 million (the count is debated by how indirect/long-term deaths are counted)',
      '1945 Britain votes Churchill out — the wartime hero loses; the new government decides to let India go',
      'August 15, 1947 Indian independence + Partition with Pakistan',
      'Radcliffe Line — a British lawyer who had never been to India draws the border in about five weeks',
      'Around 15 million displaced + deaths estimated between several hundred thousand and over a million + the "ghost trains"',
      'Ralph Bunche in 1949 negotiates a Middle East ceasefire at the Rhodes hotel → 1950 first Black recipient of the Nobel Peace Prize',
      '1955 Bandung Conference (29 Asian-African states, origin of the Non-Aligned Movement)',
      'Bandung Ten Principles (respect for sovereignty / non-interference / no joining great-power military blocs / peaceful coexistence)',
      '1960 Year of Africa — 17 African nations gain independence',
      '1961 the Non-Aligned Movement is formally founded (Nehru / Nasser / Tito / Nkrumah / Sukarno)',
      'Caught in the Cold War — new states had to handle post-independence unrest while being pulled into US-USSR proxy wars',
      'Anti-Whig note: decolonization is often told as "freedom\'s victory"; from the refugee\'s view, independence\'s first gift was often having to flee',
      'Churchill, two faces in one man: anti-fascist hero + die-hard imperialist (publicly insulted Gandhi, refused to divert grain during the Bengal famine)',
    ],
  },
};
