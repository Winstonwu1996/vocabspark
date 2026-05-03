// ─── Magna Carta 1215 Lens-based Storyboard ──────────────────────
//
// Story-First Pedagogy v2 — Lens 模型（用户 2026-05-02 sign off）
// 见 docs/STORY_FIRST_PEDAGOGY.md（待 v2 update）
//
// 设计原则（用户 2026-05-02 拍板）：
//   - 1 个 Topic = 1 段历史事件 + N 个 lens（每 lens = 1 个角色视角）
//   - 用户选 1 个 lens 进入 → 一致第一人称跑完
//   - 不同 lens 看同一事件——基础事实相同——情绪 + 角度 + 局限性不同
//   - replay 价值：用户跑完 1 lens 后可以选另一个 lens 重学（DBQ 训练）
//
// 教育学支撑（历史教学家立场）：
//   - 历史 = 冲突的产物（Hegel / Marx / Annales 主流）
//   - 多视角无绝对对错（AP/IB DBQ 标准）
//   - "符合历史长河趋势"作为软判断（不是道德裁判）
//
// MVP scope：3 lens（King John + Stephen Langton + Tom 农奴）
// 后续可扩到 5 lens（加 Robert Fitzwalter + Pope Innocent III）
//
// 长度约束（Willow 测试反馈）：
//   - 每节点 150-220 字——不要过长——画面感优先
//   - Tom 农奴 lens 可以更短（100-180 字）——Tom 的视角天然有限
//
// ─────────────────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════
// LENS 1: King John（暴君 + 受害者双重身份）
// ═══════════════════════════════════════════════════
var kingJohnStoryboard = [
  {
    id: 1,
    phase: 'hook',
    cosplay: 'King John',
    narrativeRef: '§4 Runnymede 6/15',
    deliverGoal:
      '第一人称 King John。1215 年 6 月 15 日清晨，我骑马到 Runnymede 草地。下小雨。' +
      '25 个 baron 全副武装站在我对面。我手在抖——不是因为冷，是因为愤怒。' +
      '我必须往一张羊皮纸上盖**红蜡封印**（wax seal——一枚金属戒指压在融化的红蜡上，留下王室纹章）。' +
      '签完我心里只有一句话："等你们走，我就让教皇废了它。"' +
      '我是 King John。接下来 11 节，你会跟我经历 16 年，看我怎么走到这一刻。',
    engagementHook: '我为什么走到这一刻？我们倒回 1199 年我刚做王那天。',
    expectedLength: '180-220 字（用句号 + 逗号正常断句——1-2 个戏剧 em-dash 即可，不要轰炸）',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'King John',
    narrativeRef: '§3 King John 出身 1166-1199',
    deliverGoal:
      '我（John）出生 1166 年 12 月 24 日，牛津。Henry II 的**第 5 个儿子**——' +
      '中世纪有个铁律：长子继承全部，老二老三去当骑士或教士，第 5 个——什么都分不到。' +
      '我妈 Eleanor of Aquitaine 据说我出生时说"这孩子注定要让兄弟们头疼"。' +
      '我爸给我个外号叫 "Lackland"——无地约翰。' +
      '我前面 4 个哥哥：William（婴儿就死）、Henry the Young（26 岁痢疾死）、Geoffrey（27 岁打锦标赛被马踩死）、Richard（狮心王，1199 年攻城战中箭感染死）。' +
      '哥哥们一个接一个死——1199 年 4 月——Richard 临终留言："我的继承人是 John"。32 岁，我突然做了英格兰国王。但我没准备过。',
    engagementHook: '没准备过的人当王——你猜我第一件大事会做错什么',
    expectedLength: '180-220 字（用句号 + 逗号正常断句——不要全 em-dash）',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'King John',
    narrativeRef: '§3 + §4 1204 失去 Normandy + 残忍',
    deliverGoal:
      '1204 年夏天，麻烦从一个**抢未婚妻**事件开始。' +
      '法国一个 Lusignan 家族的贵族 Hugh 订了亲，未婚妻是 Isabella of Angoulême。' +
      '我（John）抢了她——直接娶过来。Hugh 告到法王 Philip Augustus 那——' +
      '法王正等借口——立刻没收我所有法国领地。' +
      'Philip Augustus 进攻 Normandy。我没去前线，我在英国南部宫殿打猎。' +
      '一个夏天，Normandy、Anjou、Maine、Touraine 全丢——138 年祖产一夜没了。' +
      '回英国我加倍收税重夺。' +
      '同期我做了件让欧洲心寒的事：1203 年，我侄子 Arthur of Brittany（16 岁）从 Rouen 城堡失踪。' +
      '我宣布"他逃跑时死了"。欧洲编年史家有 3 种说法——醉酒亲手、丢河、活活饿死——但**没人能证**。' +
      '我心里知道：他不会再威胁我了。',
    engagementHook: '杀侄子加高税，baron 还能忍。但 1208 年一件事让全英国不能忍——你猜是什么。',
    expectedLength: '220-260 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'King John',
    narrativeRef: '§3 + §4 1208-1213 教皇冲突',
    deliverGoal:
      '1208 年教皇 Innocent III 跟我撕——他要任命 Stephen Langton 为 Canterbury 大主教，我不接受。' +
      '3 月 23 日，教皇下 **Interdict**——全英国教堂关闭，婴儿不能洗礼，死人不能葬。' +
      '这还不够。**1209 年 11 月，教皇直接 excommunicate 我个人**——' +
      '按教法，被绝罚的国王，他的臣民可以**不必效忠**。' +
      '这是核武器——baron 现在有了不效忠我的法律理由。' +
      '我扛 5 年。直到 1213 年 5 月 15 日，我在 Dover 跪了——把英格兰"献给"教皇做封地，' +
      '每年付 1000 银马克贡。baron 看着他们的王跪在罗马面前。' +
      '他们想：这种王值得效忠吗。这是我人生最深的耻辱。',
    engagementHook: '跪完教皇，下一年 1214 我又输一场关键战。你猜在哪。',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'King John',
    narrativeRef: '§4 1214 Bouvines 战役',
    deliverGoal:
      '1214 年 7 月 27 日，Bouvines 战役。我攒 4 年的反法联军：神圣罗马帝国皇帝 Otto IV、Flanders 伯爵、' +
      '我同父异母弟弟 William Longespée（Salisbury 伯爵）一起对法王 Philip Augustus。' +
      '我自己又没去前线——我在英国南部 Poitou。' +
      '一个下午，我们大败。Otto IV 逃，Longespée 被俘。' +
      '我派 William Marshal（70 岁老骑士，留守英国）来见我。他说："Sire，baron 不会再忍了。"' +
      '没钱、没地、没盟友。' +
      '1215 年 4 月，baron 集合在 Stamford。5 月 5 日，他们正式与我**断绝效忠誓**。' +
      '5 月 17 日，London 城门**主动**为他们打开——伦敦商人也恨我的高税。' +
      '我没了首都，必须谈判。',
    engagementHook: 'baron 点名要谈判中间人——一个我不久前还跟他翻脸的人——Stephen Langton 大主教。',
    expectedLength: '220-260 字',
    expectsRealAnswer: false,
  },
  {
    id: 6,
    phase: 'story',
    cosplay: 'King John',
    narrativeRef: '§4 1215.5-6 baron 谈判 + Stephen Langton drafts',
    deliverGoal:
      '1215 年 5 月底，我退到 Windsor 城堡，baron 在 London。' +
      '我派 Stephen Langton 大主教做中间人。他是教皇的人，但他懂法律，能写文件。' +
      '他先起草一份"Articles of the Barons"——49 条 baron 诉求。' +
      '我看了第 39 条："任何 free man 不能被随便抓走或没收财产，必须经过同辈陪审或国法。"' +
      '我心想：这是要把我（王）放在法律之下。' +
      '但我没选择，必须签，否则失去王位。',
    engagementHook: '6 月 15 日 Runnymede，我去签。但我心里已经在想怎么 renege。',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  {
    id: 7,
    phase: 'story',
    cosplay: 'King John',
    narrativeRef: '§4 Runnymede 6/15 + 我的内心',
    deliverGoal:
      '6 月 15 日，Runnymede 草地。我带着 Great Seal（王室印玺）来盖印。' +
      '25 baron 全副武装站对面，Stephen Langton 念拉丁文 63 条。' +
      '我把红蜡滴在羊皮纸上，把印玺压下去。' +
      '盖印那一刻我心里在想：' +
      '"我父亲 Henry II 收复整个西法国——我一夜失去。' +
      '我哥哥 Richard 死时所有人哭——我活着所有人恨。' +
      '今天我在草地上，pen 是别人写的，印是我的，但**我心里没认**。"' +
      '签完，我立刻派密使去罗马，求教皇废了它。',
    engagementHook: '7 月教皇 Innocent III 答应废 charter，内战重启。但我没活到看结果——你猜我什么时候死。',
    expectedLength: '200-240 字（用句号正常断句）',
    expectsRealAnswer: false,
  },
  {
    id: 8,
    phase: 'story',
    cosplay: 'King John',
    narrativeRef: '§4 1216.10 我死',
    deliverGoal:
      '1216 年 10 月 18 日，我在 Newark，痢疾，快 50 岁。' +
      '我躺在床上想我留下了什么：' +
      '"我失去 Normandy。失去教皇。失去 baron。失去 charter。' +
      '我儿子 Henry 才 9 岁。William Marshal（70 岁老骑士）会摄政——他比我可靠。"' +
      '我闭眼，以为 charter 会跟我一起死。' +
      '——但我不知道：William Marshal 1216 年 11 月会以 Henry III 新王名义**重新颁** Magna Carta，' +
      '加一句"这是国王的礼物"，给它合法外衣。我那张失败的纸，会活 800 年。',
    engagementHook: '我（John）死前没看到。但你看到了——这张纸怎么活下来的，下一节我们 zoom out。',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },
  {
    id: 9,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§4 1216-1297 charter 演化',
    deliverGoal:
      '现在我们离开 King John 视角，zoom out 看 charter 怎么活下来。' +
      '1216 年 11 月，William Marshal 以新王 Henry III 名义重新颁布 Magna Carta，加一句"这是国王的礼物"。' +
      '1217、1225、1297 反复 reissue。1297 年 Edward I 把它列入英国 statute book，成正式法律。' +
      '1628 年 Petition of Right 引用 Article 39。1689 年 Bill of Rights 再引用。' +
      '1789 年美国宪法第 5 修正案 + 第 14 修正案，直接继承 Article 39 的"due process"语言。' +
      'King John 1215 年签时不知道：他失败的那张纸，成了西方法治根基。',
    engagementHook: '现在你（扮演 King John 8 节后）回头看自己——',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },
  // ═════ Synthesis（真 Socratic）═════
  {
    id: 10,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§5 + §6 + §7',
    deliverGoal:
      '你刚扮演了 King John，一个失败者，一个被逼签字的暴君。' +
      '但他签的那张纸，成了西方现代法治源头。这是历史的**反讽**：' +
      'King John 想集中权力，他失败了，结果反而 enable 了权力分散的 trend。' +
      '——但是，历史学界对此有**两种相反**解读：' +
      '**解读 A（Whig 进步派）**：Magna Carta 是自由对抗暴政的胜利，预设了民主。' +
      '**解读 B（修正派 / 马克思派）**：Magna Carta 只保护 25 个 baron 寡头，' +
      '把"自由"狭隘定义在 10% 上层男性手里——可能**延缓**了真正的民主 600 年。' +
      '问题来了——',
    engagementHook:
      '**你怎么看**——Magna Carta 是"加速了"民主，还是"延缓了"民主（让贵族借法律巩固特权）？' +
      '没有标准答案——给你的理由说服我。想 30 秒答。',
    expectedLength: '200-240 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 同代中国 + Tang Code 651',
    deliverGoal:
      '比 Magna Carta 早 564 年，唐律疏议 651 年颁布。12 卷 502 条，管所有人，更系统。' +
      '但唐律没成现代法律源头。Magna Carta 1215 年只 63 条，只保护 25 baron，只在英国，' +
      '却变成全球宪政基础。同样的"成文法"，为什么走出**完全不同的命运**？',
    engagementHook:
      '**你怎么看**——是文化决定？历史偶然？还是**英国后续 800 年反复重新解读**让 Magna Carta 越来越大——而中国**没这种重新解读机制**？想 30 秒答',
    expectedLength: '180-220 字 + 真问题',
    expectsRealAnswer: true,
  },
  // ═════ Meta（反思 + 桥）═════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题',
    deliverGoal:
      '你扮演了 King John 8 节——经历了他的失去 + 残忍 + 屈辱 + 死——' +
      '现在你可以选：' +
      '(1) 进 mastery 通关 / ' +
      '(2) 换 lens 重玩——比如 Stephen Langton（起草人视角）或 Tom（农奴小孩视角）——' +
      '——同一事件不同角度——会发现新东西',
    engagementHook:
      '**做 King John 这一遍——最让你 surprise 的是什么**？是他的残忍？是他签字时的内心？还是他死前不知道 charter 会活 800 年？说一句话',
    expectedLength: '120-160 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// LENS 2: Stephen Langton（中间人 + 起草人）
// ═══════════════════════════════════════════════════
var stephenLangtonStoryboard = [
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Stephen Langton',
    narrativeRef: '§4 Runnymede 6/15',
    deliverGoal:
      '第一人称 Stephen Langton——1215 年 6 月 15 日 Runnymede 草地——' +
      '我 65 岁——Canterbury 大主教——我手里拿一卷羊皮纸——63 条拉丁文——' +
      '我念给 King John 听——我念给 25 个 baron 听——' +
      '我看到 King John 的脸——他在签——但他**心里没认**——' +
      '我看到 baron 的脸——他们在监视——他们也**不完全信**——' +
      '——这一刻我想：这张纸——能活吗？' +
      '我是 Stephen Langton——你接下来跟我经历 8 年——看我怎么走到这一刻',
    engagementHook: '我为什么是夹在 King 和 baron 中间的人——倒回 1207 年',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'Stephen Langton',
    narrativeRef: '§3 Stephen Langton 出身',
    deliverGoal:
      '我（Stephen）1150 年生于 Lincolnshire——英国乡下——' +
      '我 20 岁去巴黎大学——读神学 + 教会法 25 年——' +
      '我成为巴黎最有名的神学教授——教皇 Innocent III 是我学生时代朋友——' +
      '1207 年——教皇任命我为 Canterbury 大主教（英国最高教职）——' +
      '——但 King John 拒绝接受——' +
      '我流亡 6 年——在法国 Pontigny 修道院——看英国发生大事但我回不去',
    engagementHook: '6 年我在远处看——King John 跟教皇撕——baron 越来越愤怒——你猜我 1213 年怎么回去',
    expectedLength: '170-210 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'Stephen Langton',
    narrativeRef: '§3 + §4 1213 回英国',
    deliverGoal:
      '1213 年 5 月——King John 终于跪了——他接受我做大主教——他甚至把英国献给教皇——' +
      '我 7 月回英国——下船时我心想："我终于能做事了"——' +
      '但我看到的是——' +
      'baron 们对 King 已经**绝望**——他们不只是不满——他们在**密谋起义**——' +
      '我心想：如果发生内战——教会会被卷进去——民众会受苦——' +
      '我必须在 King 和 baron 中间——找到第三条路——**用法律**',
    engagementHook: '法律是什么——是限制 King——也保护 baron——也保护未来——你猜我会怎么写',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Stephen Langton',
    narrativeRef: '§4 1214 Bouvines + 1215 春',
    deliverGoal:
      '1214 年 7 月 Bouvines 战役——King John 大败——失了所有 reconquest 希望——' +
      'baron 决定动手——1215 年 4 月在 Stamford 集合——5 月进 London——' +
      'King John 退到 Windsor——他派人来找我："Stephen——你做中间人"——' +
      '我接了——我去 baron 那边——他们给我一份"Articles of the Barons"——49 条诉求——' +
      '我读完——我说："这写得太具体太事——必须改成法律语言——必须保护未来——不只是 1215"——' +
      '——5 月 6 月我把 49 条改写成 63 条——加教会保护 + 司法独立 + 征税共议',
    engagementHook: '63 条里——最关键的是第 39 条——我用了一个词——这个词 800 年后改变世界——你猜哪个词',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'Stephen Langton',
    narrativeRef: '§5 Clause 39 起草',
    deliverGoal:
      '我（Stephen）写第 39 条时——我用 6 个拉丁词："Nullus liber homo capiatur..."——' +
      '中文："任何 free man 不能被随便抓走"——' +
      '关键词 1：**lawful judgment of his peers**（同辈合法审判）——' +
      '关键词 2：**by the law of the land**（按国法）——' +
      '我心想：' +
      '今天 free man 是 baron——但 200 年后？500 年后？谁知道——' +
      '我故意用**抽象词**——"free man" 这个范畴未来可以扩展——这不是为 1215——是为永远',
    engagementHook: '6 月 15 日 Runnymede——我念这一条——King 听完皱眉——baron 听完点头——但我自己心里在想：这一刻能活几天',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },
  {
    id: 6,
    phase: 'story',
    cosplay: 'Stephen Langton',
    narrativeRef: '§4 7 月 → 1216 → 1297',
    deliverGoal:
      '6 月 15 日 Runnymede 我主持仪式——King 盖印——baron 拔剑誓——' +
      '我心里没庆祝——我知道 King 会反悔——' +
      '果然——7 月 King 派密使去 Rome——8 月教皇 Innocent III 废 charter——' +
      '内战重启——baron 找法王 Louis 来当英格兰王——' +
      '我夹在中间——又被教皇罚——又被 baron 不信任——' +
      '1216 年 10 月 King John 死——William Marshal 摄政——他做了一件**保我命的事**：' +
      '11 月**重新颁** Magna Carta——以新王名义——加"这是 King 的礼物"——' +
      '——我的草稿活下来了',
    engagementHook: '我 1228 年死——77 岁——我活到看 charter 通过 1217 + 1225 reissue——但我看不到 800 年后的 1789',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },
  {
    id: 7,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§6 800 年回声',
    deliverGoal:
      '现在 zoom out——Stephen Langton 起草的 63 条 → 800 年演化：' +
      '1297 Edward I statute——1628 Petition of Right——1689 Bill of Rights——' +
      '1789 美国宪法 5th + 14th Amendment 直接继承——' +
      '1948 联合国人权宣言——' +
      '——Stephen 用的"free man"抽象词——慢慢扩到 "all person"——' +
      'Stephen 1215 年那一刻**故意**留的扩展空间——后人接住了',
    engagementHook: '——现在你（扮演 Stephen 6 节）回头看你自己',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  // ═════ Synthesis ═════
  {
    id: 8,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§5 Article 39 演化 + §6 800 年回声',
    deliverGoal:
      '你刚扮演了 Stephen Langton——一个起草人——一个相信法律能比人活久的人——' +
      '他用"free man"这个抽象词——故意留了**未来可扩展的空间**——' +
      '1789 美国宪法把"free man"换成"no person"——保护全人类——' +
      '——这种"故意留白让后人填"的智慧——叫**living constitution**',
    engagementHook:
      '**你怎么看**——Stephen 1215 年真的预见到 800 年后吗？还是后人**重新解读**才让他显得"远见"？想 30 秒答',
    expectedLength: '180-220 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 9,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 同代中国 + Tang Code 651',
    deliverGoal:
      '同代有另一个起草人——唐律疏议 651 年——长孙无忌主编——' +
      '12 卷 502 条——比 Stephen Langton 早 564 年——更系统——管所有人——' +
      '但唐律没成现代法律源头——而 Magna Carta 成了——' +
      '为什么——',
    engagementHook:
      '**你怎么看**——是 Stephen 比长孙无忌**预见性更强**？还是**后续社会**对法律的态度不同（英国敢反复重新解读 vs 中国把唐律当祖训不动）？想 30 秒答',
    expectedLength: '180-220 字 + 真问题',
    expectsRealAnswer: true,
  },
  // ═════ Meta ═════
  {
    id: 10,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题',
    deliverGoal:
      '你扮演了 Stephen Langton 6 节——一个起草人的视角——' +
      '你也可以选 King John（暴君视角）或 Tom（农奴小孩视角）——' +
      '同一事件不同角度——会发现新东西',
    engagementHook:
      '**做 Stephen 这一遍——最让你 surprise 的是什么**？是他对未来的"故意留白"？是他 6 年流亡的耐心？还是他在 King 和 baron 中间的 lonely？说一句话',
    expectedLength: '120-160 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// LENS 3: Tom 农奴男孩（被排除的下层视角）
// ═══════════════════════════════════════════════════
var tomVilleinStoryboard = [
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Tom（13 岁农奴男孩）',
    narrativeRef: '§3 Tom 虚构桥接 + §4 Runnymede',
    deliverGoal:
      '第一人称 Tom——1215 年 6 月 15 日——我 13 岁——在 Runnymede 草地附近放羊——' +
      '我看到大军——我从没见过这么多骑兵——我怕——我躲在树后面——' +
      '我看到一个胖男人（穿好衣服的）跟一群穿铁衣的人坐桌前——他们在签什么——' +
      '我不识字——我不知道发生什么——' +
      '但 30 年后我会知道——那一天改变了西方法律——' +
      '——而 1215 年的我——只看到一个画面',
    engagementHook: '我是 Tom——我是历史的"配角"——但配角看到的也是历史——倒回我的童年',
    expectedLength: '160-200 字',
    expectsRealAnswer: false,
  },
  {
    id: 2,
    phase: 'story',
    cosplay: 'Tom（13 岁农奴男孩）',
    narrativeRef: '§3 Tom + 农奴 villein 制度',
    deliverGoal:
      '我（Tom）家世代是 Mowbray 庄园的 villein（农奴）——' +
      '我爸是 villein——我妈是 villein——我也是——我儿子也会是——' +
      '我们不能离开庄园——不能识字——不能告状——' +
      '每年收成 1/3 给地主——1/10 给教会——剩下勉强活——' +
      '英格兰 1215 年大约 90% 是 villein——只有 10% 是 free man——' +
      '我属于那 90%——那张 charter 写"free man"——**不是我**',
    engagementHook: '但 1215 年春——一件事让我家也不安——你猜是什么',
    expectedLength: '160-200 字',
    expectsRealAnswer: false,
  },
  {
    id: 3,
    phase: 'story',
    cosplay: 'Tom（13 岁农奴男孩）',
    narrativeRef: '§4 1215 春 baron 起兵 + 农民眼中',
    deliverGoal:
      '1215 年春——King John 的税官来 Mowbray 庄园——抢 Lord Mowbray 1/2 收成——' +
      '我爸跟我说："王跟 baron 撕——baron 找借口起兵——但**最后吃亏的是我们**"——' +
      '5 月——我听说 baron 进 London——我妈说："那不关我们事——交税还是要交"——' +
      '6 月初——大军经过我们庄园 north——往 Runnymede——' +
      '我跟着一群孩子去看热闹——我躲在树后面——' +
      '我看到 King John（胖的）——baron（穿铁衣的）——还有一个穿大主教袍的（Stephen Langton）——' +
      '——我 13 岁——我不懂他们在做什么',
    engagementHook: '我看到了画面——但我不懂——你猜我什么时候才懂',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  {
    id: 4,
    phase: 'story',
    cosplay: 'Tom（13 岁农奴男孩）',
    narrativeRef: '§3 Tom 30 年后',
    deliverGoal:
      '15 年后——我 28 岁——成磨坊主（不再是 villein——我赎了身）——' +
      '一个律师过路——他跟我聊——他说："你知道 1215 年那张纸吗——里面有第 39 条——任何 free man 不能被随便抓"——' +
      '我说："但我家 1215 年还是 villein——那条不保护我"——' +
      '律师说："对——但你**儿子**呢？你儿子如果做 free man——那条**保护他**"——' +
      '我心里咯噔一下——' +
      '——1215 年那张纸**不立刻**保护我家——但**它播下种子**——' +
      '"free man"这个词——我儿子可能是——我孙子更可能',
    engagementHook: '15 年前那个 13 岁的我躲在树后看大军——不懂——15 年后我懂了——你猜更后面的人怎么用这张纸',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },
  {
    id: 5,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§6 800 年回声 + 农奴解放',
    deliverGoal:
      '现在 zoom out——Tom 后代怎么走：' +
      '14 世纪 Black Death（黑死病）后——英国农奴大量死——劳动力短缺——' +
      '剩下农奴**用脚投票**——逃到城市做 free man——' +
      '15 世纪英国 villein 制度**自然消失**——' +
      '1381 Wat Tyler 农民起义——直接引用 Magna Carta 第 39 条——' +
      '——Tom 的 14 世纪后代真的成了 free man——' +
      'Magna Carta 第 39 条——慢慢扩展——保护 Tom 的 200 年后子孙',
    engagementHook: '——现在你（扮演 Tom 4 节）回头看你自己',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },
  // ═════ Synthesis ═════
  {
    id: 6,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§5 free man 演化 + §6 农奴解放',
    deliverGoal:
      '你刚扮演了 Tom——一个 13 岁的 villein——一个**被 charter 排除**的人——' +
      '但**Tom 的 200 年后子孙**——慢慢被 charter 保护——' +
      '——这就是 Magna Carta 真实的"扩展机制"：' +
      '不是立刻——不是公平——是**慢慢扩展**——是**每一代抢一点**',
    engagementHook:
      '**你怎么看**——Tom 1215 年应该**感谢** Magna Carta（虽然不保护他但保护后代）？还是应该**愤怒**（凭什么他和儿子要等 200 年才被保护）？想 30 秒答',
    expectedLength: '170-210 字 + 真问题',
    expectsRealAnswer: true,
  },
  {
    id: 7,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 同代中国 + Tom 视角扩展',
    deliverGoal:
      '同代中国——同样是农民 90%——但中国农民**没有 Magna Carta 这种法律保护**——' +
      '中国走另一条路——**科举制度**——农民儿子**理论上**可以做官——' +
      '一个走"法律保护所有 free man（慢慢扩展）"——' +
      '一个走"个人通过考试上升"——' +
      '——两条路给农民的命运不同',
    engagementHook:
      '**你怎么看**——如果你是 Tom——你愿意活在 1215 英国（被 charter 排除但 200 年后子孙被保护）还是同代中国（科举一线机会但 charter 永远没有）？想 30 秒答',
    expectedLength: '170-210 字 + 真问题',
    expectsRealAnswer: true,
  },
  // ═════ Meta ═════
  {
    id: 8,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题',
    deliverGoal:
      '你扮演了 Tom 4 节——一个被排除的人的视角——' +
      '你也可以选 King John（暴君视角）或 Stephen Langton（起草人视角）——' +
      '同一事件不同角度——会发现新东西——' +
      'Tom 的视角让你看到：**Magna Carta 不立刻保护所有人——但它播下种子——慢慢长**',
    engagementHook:
      '**做 Tom 这一遍——最让你 surprise 的是什么**？是他 13 岁不懂的画面？是 30 年后他突然懂的那一刻？还是他 200 年后子孙才被保护？说一句话',
    expectedLength: '120-160 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// 导出 lenses + default
// ═══════════════════════════════════════════════════
export var lenses = {
  'king-john': {
    id: 'king-john',
    name: 'King John',
    nameCn: '约翰王',
    role: '英格兰国王 / 暴君 + 失败者',
    description: '你扮演 King John——经历他的失去 + 残忍 + 屈辱 + 死。被 charter 逼盖印的人。',
    storyboard: kingJohnStoryboard,
  },
  'stephen-langton': {
    id: 'stephen-langton',
    name: 'Stephen Langton',
    nameCn: '斯蒂芬·朗顿',
    role: 'Canterbury 大主教 / 起草人 / 中间人',
    description: '你扮演 Stephen Langton——巴黎大学法学博士——夹在 King 和 baron 中间——亲手写 Article 39。',
    storyboard: stephenLangtonStoryboard,
  },
  'tom-villein': {
    id: 'tom-villein',
    name: 'Tom 农奴男孩',
    nameCn: 'Tom（13 岁 villein）',
    role: '被排除的下层 / 200 年后才被保护的人',
    description: '你扮演 13 岁农奴 Tom——在 Runnymede 边放羊看到大军——不识字不懂发生什么——但你的子孙 200 年后被 Magna Carta 保护。',
    storyboard: tomVilleinStoryboard,
  },
};

export var defaultLens = 'king-john';

// ─── 默认 export 兼容老 runtime（取 default lens 的 storyboard）──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'magna-carta-1215',
  schemaVersion: 2, // v2 = lens-based
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  estimatedMinutesPerLens: {
    'king-john': 28,
    'stephen-langton': 22,
    'tom-villein': 18,
  },
};
