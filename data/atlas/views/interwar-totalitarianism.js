// view: Interwar Years & Rise of Totalitarianism · 1919-1939 · 全球舞台（焦点柏林）
// HS World History / AP World Unit 7.3-7.5（Causation / Economy / Unresolved Tensions）
// keyFigures 留空: 自动从 lib/history-storyboards/interwar-totalitarianism-1919.js 的 3 个 lens 派生
//   (AUTHORING_PIPELINE 第9条: deepLearn Topic 严禁 hardcode keyFigures)
// 这是一个全球舞台（德/意/苏/日 + 中国），相机焦点放在柏林（魏玛民主自我拆除的现场）
export const VIEW = {
  id: 'interwar-totalitarianism',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/interwar-totalitarianism-1919?from=atlas&atlasId=interwar-totalitarianism',
  grade: 10,
  topicTier: 'core',                 // AP World Unit 7 高频 DBQ（极权兴起的因果 + 能动性 vs 结构）
  standardsAlignment: [
    { code: 'AP-WHAP-7.3', label: { cn: 'AP World Unit 7.3 战间期的因果', en: 'AP World Unit 7.3 Causation in the Interwar Period' } },
    { code: 'AP-WHAP-7.4', label: { cn: 'AP World Unit 7.4 战间期的经济', en: 'AP World Unit 7.4 Economy in the Interwar Period' } },
    { code: 'AP-WHAP-7.5', label: { cn: 'AP World Unit 7.5 一战后未解的张力', en: 'AP World Unit 7.5 Unresolved Tensions After WWI' } },
    { code: 'CA-HSS-10.7', label: { cn: 'CA HSS-10.7 极权主义（高中世界史）', en: 'CA HSS-10.7 Totalitarianism (HS world history)' } },
  ],
  title:    { cn: '战间期与极权主义兴起', en: 'The Interwar Years & the Rise of Totalitarianism' },
  subtitle: { cn: '1919-1939 · 自由如何被普通人在恐惧中一点点交出去', en: '1919-1939 · How freedom was handed over, a little at a time, by ordinary people in fear' },
  year: 1933,

  camera: {
    projection: 'mercator',
    center: [13.4, 52.5],
    scale: 1100,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
  },

  causalSummary: {
    cn: 'L0 全球舞台（不是一国）：被肢解的德国（魏玛共和国，柏林）+ 战胜却失意的意大利（罗马）+ 刚走出革命的苏联（莫斯科）+ 崛起的日本（东京）及它觊觎的中国东北（满洲），由一根看不见的线（全球经济）连起来 + L1 经济「气候」：1920s 短暂繁荣根基脆弱（德国借美国钱付赔款），1929.10 华尔街崩盘 + 金本位把世界捆在一起令危机全球扩散 = 大萧条，到 1932 德国失业约 600 万，饥饿与绝望是极权最好的肥料 + L2 社会：带创伤的「失落的一代」、退伍军人、被通胀与萧条两次抹平的中产、街头左右武装冲突，不安中强人比讲道理的民主政客更有吸引力 + L3 制度：魏玛宪法第 48 条本为应急，却因「谁认定紧急」没说清成了民主自我拆除的工具，极权踩着合法台阶上来（合法上台→借危机发紧急法令→议会自交立法权）+ L4 事件：意大利 March on Rome（1922.10）→ 苏联第一个五年计划（1928 起）与大清洗（1936-38）→ 德国希特勒任总理（1933.1.30）→ 国会纵火 → 授权法案 → 日本九一八事变（1931.9.18）侵占满洲 → 1937 卢沟桥全面侵华 → 1939.9 德国入侵波兰，二战爆发',
    en: 'L0 a global stage (not one country): a dismembered Germany (Weimar Republic, Berlin) + a victorious-yet-frustrated Italy (Rome) + a USSR just out of revolution (Moscow) + a rising Japan (Tokyo) and the northeast China (Manchuria) it coveted, tied together by an invisible thread, the global economy + L1 the economic climate: a fragile 1920s prosperity (Germany borrowing American money to pay reparations), the Oct 1929 Wall Street Crash, and the gold standard binding the world so the crisis spread everywhere = the Great Depression, with ~6 million German unemployed by 1932; hunger and despair are totalitarianism\'s best fertilizer + L2 society: a traumatized Lost Generation, veterans, a middle class wiped out twice by inflation and depression, left-right armed clashes in the streets; amid the unease a strongman appeals more than reasoning democrats + L3 institutions: Weimar Article 48, meant for emergencies, became the tool of democracy\'s self-demolition because it never said who decides an emergency, letting totalitarianism climb a legal staircase (take power legally → use a crisis for an emergency decree → parliament hands over lawmaking) + L4 events: Italy\'s March on Rome (Oct 1922) → the USSR\'s first Five-Year Plan (from 1928) and Great Purge (1936-38) → Hitler made chancellor (Jan 30 1933) → Reichstag fire → Enabling Act → Japan\'s Mukden Incident (Sep 18 1931) seizing Manchuria → the 1937 Marco Polo Bridge Incident and full invasion of China → Sep 1939 Germany invades Poland, WWII breaks out',
  },

  keyFigures: [],
};
