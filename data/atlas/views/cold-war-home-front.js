// view: The Cold War Home Front · 1947-1957 · United States
// HS U.S. History / APUSH Period 8 · 麦卡锡主义与郊区化 (containment 的国内代价)
// keyFigures 留空 — 自动从 lib/history-storyboards/cold-war-home-front-1950.js 的 3 个 lens 派生
//   (AUTHORING_PIPELINE 第9条: deepLearn Topic 严禁 hardcode keyFigures)
export const VIEW = {
  id: 'cold-war-home-front',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/cold-war-home-front-1950?from=atlas&atlasId=cold-war-home-front',
  grade: 11,
  topicTier: 'core',                 // APUSH CED Topic 8.3 (Red Scare) + 8.4 (suburbanization) 高频 DBQ「安全 vs 自由」
  standardsAlignment: [
    { code: 'APUSH-CED-8.3', label: { cn: 'APUSH 8.3 红色恐慌 (本课主体)', en: 'APUSH 8.3 The Red Scare (core of this lesson)' } },
    { code: 'APUSH-CED-8.4', label: { cn: 'APUSH 8.4 战后经济与郊区化', en: 'APUSH 8.4 Postwar economy & suburbanization' } },
    { code: 'APUSH-CED-8.2', label: { cn: 'APUSH 8.2 遏制政策 (对外维度)', en: 'APUSH 8.2 Containment (foreign dimension)' } },
    { code: 'CA-HSS-11.8',   label: { cn: 'CA HSS 11.8 战后美国与冷战', en: 'CA HSS 11.8 Postwar America and the Cold War' } },
  ],
  title:    { cn: '冷战国内战线', en: 'The Cold War Home Front' },
  subtitle: { cn: '1947-1957 · 美国 · 为保卫自由差点收起自由 + 繁荣带着一条颜色线', en: '1947-1957 · USA · nearly putting freedom away to defend it + a prosperity with a color line' },
  year: 1950,

  camera: {
    projection: 'mercator',
    center: [-95, 38],
    scale: 700,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
  },

  causalSummary: {
    cn: 'L0 战场不在海外而在美国本土 — 华盛顿国会听证厅 + 好莱坞片场 + 纽约法庭 + Long Island 一夜长出的郊区 Levittown，一张铺满全国的「忠诚」之网 (联邦机构/学校/工会/电影厂) + L1 电视刚走进客厅的年代 (1950s 几年内拥有率从极少数飙到大多数; 1954 Army-McCarthy 听证会全国直播 — 媒介本身成关键角色) + L2 战后空前繁荣 + 婴儿潮 + 郊区化爆发 (白人中产开车买独栋买电视) 但繁荣有一道看不见的颜色线 (黑人被系统性挡在郊区与房贷外); 同时冷战恐惧让「与众不同」变危险 (左翼/移民/同性恋者更易被怀疑) + L3 1947 EO 9835 忠诚审查计划 (300万+雇员/举证责任反转) + 1940 Smith Act + 1949 Dennis 起诉 (1951 最高法院维持) + 1950 McCarran Act (杜鲁门否决被国会推翻) + 1953 EO 10450 Lavender Scare 法规化; 另一边 1944 GI Bill + FHA 担保房贷但地方执行系统性排黑 (1948 Shelley v. Kraemer 判种族契约不可强制执行, 排斥靠 redlining 延续) + L4 机器 1947 (好莱坞十君子拒答 + 忠诚审查启动) 就开动 → 1950.1 Hiss 伪证定罪 → 1950.2.9 Wheeling「205 人名单」(数字次日改 57/名单从未公开) → 1950-53 Rosenberg 案 (1953.6.19 电椅, 唯一因间谍被处死的平民) → 1954 电视直播让恐惧破功 (Welch「Have you no sense of decency」) → 1954.12 参议院谴责 McCarthy → 1957 去世; 但黑名单与郊区颜色线的伤害延续至今 (种族财富鸿沟)',
    en: 'L0 the battlefield was not overseas but on US soil — the congressional hearing rooms of Washington + Hollywood studios + New York courts + Levittown, the suburb that rose overnight on Long Island, a net of "loyalty" spread over the whole country (federal agencies/schools/unions/film studios) + L1 the age television had just walked into the living room (in a few years of the 1950s, ownership shot from very few homes to most; the 1954 Army-McCarthy hearings were broadcast nationwide — the medium itself became a key character) + L2 unprecedented postwar prosperity + the baby boom + a suburbanization boom (the white middle class driving out to buy single-family homes and TVs) but the prosperity had an invisible color line (Black families systematically shut out of the suburbs and home loans); meanwhile Cold War fear made being "different" dangerous (leftists/immigrants/gay people more easily suspected) + L3 1947 EO 9835 Loyalty Program (3M+ workers / flipped burden of proof) + 1940 Smith Act + 1949 Dennis prosecution (upheld by the Supreme Court in 1951) + 1950 McCarran Act (Truman vetoed, overridden by Congress) + 1953 EO 10450 formalizing the Lavender Scare; on the other side, the 1944 GI Bill + FHA-insured loans but locally administered to systematically exclude Black veterans (1948 Shelley v. Kraemer ruled racial covenants unenforceable, yet exclusion continued via redlining) + L4 the machine was already running in 1947 (the Hollywood Ten refusing to answer + the launch of the loyalty checks) → Jan 1950 Hiss convicted of perjury → Feb 9, 1950 the Wheeling "list of 205" (the number changed to 57 the next day / the list was never made public) → 1950-53 the Rosenberg case (electric chair June 19, 1953, the only civilians executed for spying) → 1954 live television let the fear break (Welch\'s "have you no sense of decency") → Dec 1954 the Senate censured McCarthy → 1957 his death; but the harm of the blacklist and the suburban color line lasts to this day (the racial wealth gap)',
  },

  keyFigures: [],
};
