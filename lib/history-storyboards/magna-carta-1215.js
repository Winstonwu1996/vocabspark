// ─── Magna Carta 1215 Storyboard ─────────────────────────────────
//
// Story-First Pedagogy 模型（见 docs/STORY_FIRST_PEDAGOGY.md）
//
// 取代旧的 13-turn forced Socratic conversationTurns。
//
// 4 个 Phase：
//   - HOOK (1 node)：感官钩子 + 悬念
//   - STORY (11 nodes)：多视角 Cosplay 沉浸叙述 + engagement hooks
//   - SYNTHESIS (2 nodes)：真 Socratic（用户已建 schema 后才适合）
//   - META (1 node)：反思 + 桥到 mastery
//
// 节点结构：
//   - id: 顺序 ID（不一定连续——branch 不消耗 ID）
//   - phase: 'hook' | 'story' | 'synthesis' | 'meta'
//   - cosplay: 当前角色视角（narrator / 历史人物名）
//   - narrativeRef: 取材定位（指向 lib/history-narratives/magna-carta-1215.md 的章节）
//   - deliverGoal: 这一节点要传达的内容核心
//   - engagementHook: 结尾的钩子（修辞性问题 / 悬念 / 视角切换提示——不要求用户答）
//   - expectedLength: 期望输出字数（明朝那些事儿密度——长的 OK 不要稀释）
//   - expectsRealAnswer: false=engagement hook 不等用户答 / true=真 Socratic 等答
//
// 写作原则（写进 prompt）：
//   - story phase: VIVID always + 第一人称 cosplay 沉浸 + engagement hook 不等用户答
//   - synthesis phase: 真问题——让用户思考 30 秒以上才能答
//   - meta phase: 反思 + 桥
//   - 用户随时可 branch（lib/history-prompts.js detectUserIntent 识别）

export default [

  // ═══════════════════════════════════════════════════
  // PHASE 1: HOOK
  // ═══════════════════════════════════════════════════

  {
    id: 1,
    phase: 'hook',
    cosplay: 'narrator',
    narrativeRef: '§1 一句话锚点 + §4 Runnymede 草地',
    deliverGoal:
      '1215 年 6 月 15 日 Runnymede 草地——Thames 河边——下着小雨——' +
      'King John 跟 25 个 baron 对峙——他被逼盖印一张拉丁文写的纸——' +
      '强烈感官细节：草地泥泞 / 王冠 / wax seal / baron 全副武装——' +
      '点出反讽：那一天没有人想到这张纸会改变西方法治 800 年',
    engagementHook:
      '为什么 25 个 baron 敢逼国王盖印？一张纸为什么 800 年后还活在美国宪法里？我们倒回去看 16 年前——一切是怎么开始的',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // PHASE 2: STORY
  // ═══════════════════════════════════════════════════

  {
    id: 2,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§3 King John 出身 1166-1199',
    deliverGoal:
      'King John 不是该当王的人——他是 Henry II 的第四子——绰号 Lackland（无地王）——' +
      '童年家族剧：爸爸 Henry II + 妈妈 Eleanor of Aquitaine（嫁过法国国王再嫁英国国王的传奇女人）——' +
      '三个哥哥（Henry / Geoffrey / Richard）——Richard 是狮心王 1199 攻城战受伤死——' +
      'John 32 岁意外接班——他没准备好',
    engagementHook:
      'John 没准备好——他要面对一个比他爹更狡猾的法国王 Philip Augustus + 一群比他富的 baron + 一个比他强势的教皇——你猜他会怎么做',
    expectedLength: '250-300 字',
    expectsRealAnswer: false,
  },

  {
    id: 3,
    phase: 'story',
    cosplay: 'King John',
    narrativeRef: '§3 King John 性格 + 早年统治',
    deliverGoal:
      '第一人称 King John——抱怨贵族 + 害怕被刺杀 + 多疑——' +
      '他自述："我是第四子——我从小被看不起——现在我做王——他们还看不起我"——' +
      '他抢侄子 Arthur of Brittany 王位——把 Arthur 关进监狱（暗示后来 1203 Arthur 被秘密杀）——' +
      '他亲信 William de Briouze 突然反叛——John 把 Briouze 妻子 + 11 岁儿子关进监狱饿死——' +
      '这种**残忍 + 多疑**让 baron 越来越怕他',
    engagementHook:
      '"我有一个想法——派人去 Rome 跟教皇打交道——这样 baron 就不敢了"——你猜结果',
    expectedLength: '280-330 字',
    expectsRealAnswer: false,
  },

  {
    id: 4,
    phase: 'story',
    cosplay: 'King John',
    narrativeRef: '§3 King John 1204 失去 Normandy',
    deliverGoal:
      '继续第一人称 John——1204 年 Philip Augustus 攻击——' +
      'John 派 William Marshal 守 Normandy——但 John 自己**没去前线**——他在英国南部宫殿打猎——' +
      'Normandy 一个城一个城陷落——夏天结束 Normandy 全丢——还有 Anjou + Maine + Touraine——' +
      '英国王从此**不再是 Norman 后裔的法国领主**——John 一夜失去他祖先 138 年的领土——' +
      'baron 们大部分**祖先在 Normandy 有地**——他们恨 John',
    engagementHook:
      'Normandy 一丢——我作为 Norman 后裔——脸往哪搁？回英国之后——我加倍**收税** + **抢私产**——你猜 baron 怎么反应',
    expectedLength: '270-320 字',
    expectsRealAnswer: false,
  },

  {
    id: 5,
    phase: 'story',
    cosplay: 'Pope Innocent III',
    narrativeRef: '§3 Stephen Langton 任命争议 + Pope 1208 interdict + 1209 excommunication + 1213 submission',
    deliverGoal:
      '换 Pope Innocent III 视角——罗马的强势教皇——39 岁登基——他要让所有欧洲国王在他面前下跪——' +
      '1207 任命 Stephen Langton 为 Canterbury 大主教（英国最高教职）——John 不接受——' +
      '1208 教皇下 interdict——禁止英国所有教堂礼仪——婴儿不能洗礼 + 婚姻不能办 + 死人不能葬——' +
      '1209 教皇正式 excommunicate John——John 灵魂在地狱——他妻子婚姻无效——他孩子是私生——' +
      '1213 John 屈服——亲手把英国"抵押"给罗马——每年付 1000 银马克——这是奇耻大辱——' +
      'baron 看着王跪——他们想：这种王值得效忠吗',
    engagementHook:
      'King 跪了 + baron 失望——下一年 1214 又有大事——你猜会是什么',
    expectedLength: '320-380 字',
    expectsRealAnswer: false,
  },

  {
    id: 6,
    phase: 'story',
    cosplay: 'William Marshal',
    narrativeRef: '§3 William Marshal + §4 1214 Battle of Bouvines',
    deliverGoal:
      'William Marshal 第一人称——70 岁老骑士——服侍 5 个国王——历史上最忠诚的人——' +
      '他自述："我服侍 Henry II + Henry III + Richard I + John + 后来 Henry III——5 王——但 John 是最难的"——' +
      '1214 年 7 月 27 日 Battle of Bouvines——John 想夺回 Normandy——他派 William 带兵——' +
      'John 自己又**没去前线**——他在英国南部 Poitou——' +
      'Bouvines 一战 John 联军大败——Philip Augustus 大胜——Anjou + Maine + Touraine 永远丢了——' +
      'William 回英国——他第一次跟 John 说："Sire——baron 不会再忍了"',
    engagementHook:
      'William 都不敢打包票了——25 baron 决定动手——他们集合在 Stamford——准备做一件谋反的事',
    expectedLength: '280-340 字',
    expectsRealAnswer: false,
  },

  {
    id: 7,
    phase: 'story',
    cosplay: 'Robert Fitzwalter',
    narrativeRef: '§3 25 Barons + §4 1215 春',
    deliverGoal:
      'Robert Fitzwalter 第一人称——35 个反叛 baron 的领袖——' +
      '他自述："我是 Robert Fitzwalter——我自封 Marshal of the Army of God and Holy Church——' +
      'John 抢了我女儿 Matilda（传说要 Matilda 做情妇被拒）——我恨他到骨头里"——' +
      '1215 年 4 月 baron 在 Stamford 集合——5 月 5 日**正式与王断绝效忠誓**——' +
      '5 月 17 日带兵进 London——London 城门**主动**为他们打开——because Londoners 也恨 John 高税——' +
      'John 突然发现自己**没有首都**——他必须谈判',
    engagementHook:
      'London 已经站到 baron 这边——John 退到 Windsor 城堡——他派 Stephen Langton 大主教做中间人——你猜 Langton 会写什么',
    expectedLength: '290-340 字',
    expectsRealAnswer: false,
  },

  {
    id: 8,
    phase: 'story',
    cosplay: 'Stephen Langton',
    narrativeRef: '§3 Stephen Langton + §5 Articles of the Barons → Magna Carta drafting',
    deliverGoal:
      'Stephen Langton 第一人称——Canterbury 大主教——巴黎大学神学博士——' +
      '他自述："我夹在中间——王要保 + baron 要权 + 教会要独立 + 我要写一份让所有人都能签的纸"——' +
      '他在 1215 年 5-6 月起草——分 3 步：' +
      '(1) 先写 Articles of the Barons（baron 提出的 49 条诉求）—— ' +
      '(2) 改写成法律语言——加入教会保护条款 + 司法独立 + 征税共议——' +
      '(3) 最关键的一条——Clause 39：'+
      '"No free man shall be seized or imprisoned... except by lawful judgment of his peers or by the law of the land"——' +
      '他写这一条时心想：王不能想抓谁就抓谁——必须**走法律程序**',
    engagementHook:
      '63 条都准备好了——6 月 15 日 Runnymede 会面——你猜现场会是什么样',
    expectedLength: '300-360 字',
    expectsRealAnswer: false,
  },

  {
    id: 9,
    phase: 'story',
    cosplay: 'Tom（13 岁农奴男孩，narrative §3 虚构桥接角色）',
    narrativeRef: '§3 Tom 虚构桥接 + 普通人对 Magna Carta 的反应',
    deliverGoal:
      'Tom 第一人称——13 岁农奴男孩——在 Runnymede 草地附近放他主人的羊——' +
      '他自述："我看到大军——我从没见过这么多骑兵——我怕——我躲在树后面——我看到一个胖男人（King John）跟一群穿铁衣的人坐在一起——他们在桌子上签什么"——' +
      'Tom **不识字**——他不知道发生什么——他**只看到一个画面**——' +
      '回去他跟妈妈讲——妈妈说："那不关我们事——交税还是要交"——' +
      '30 年后 Tom 当上磨坊主——他听一个律师讲："1215 年那张纸里有一条——任何 free man 不能随便被关"——' +
      'Tom 想："free man——那不是我（农奴）——但**我儿子可能是**"——' +
      '这就是 Magna Carta 真实的"普通人感受"——它不立刻保护农奴——但**它播下种子**',
    engagementHook:
      'Tom 不是 free man——但他后代 200 年后会是——这粒种子怎么发芽——我们继续看',
    expectedLength: '290-340 字',
    expectsRealAnswer: false,
  },

  {
    id: 10,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§4 Runnymede 6/15 现场',
    deliverGoal:
      '现场感 zoom out——1215 年 6 月 15 日 Runnymede 草地——Thames 河边一片湿地——' +
      '气候——下小雨 + 风从河上吹过来——草地上全是马和帐篷——' +
      'King John 带 wax seal 来——他不签字——中世纪国王不会写字签名——他**盖印**——' +
      '25 个 baron 列阵——全副武装——以防 John 突然反悔——' +
      'Stephen Langton 当主持——念拉丁文 63 条——所有 baron 拔剑誓言保护这张纸——' +
      'John 当场盖印——但他**心里**已经在想：等 baron 走了我就派人去 Rome 让教皇废了它——' +
      '现场没有人想到这张纸会成为 800 年后所有民主社会的基础——' +
      '所有人——包括 John 自己——都以为这只是一次失败的妥协',
    engagementHook:
      'John 走的时候已经在筹划怎么 renege——他的下一步是什么——我们看接下来 16 个月',
    expectedLength: '320-380 字',
    expectsRealAnswer: false,
  },

  {
    id: 11,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§4 1215 7 月 → 1216 重生 → 1217/1225/1297 演化',
    deliverGoal:
      '1215 年 7 月 John 派密使去 Rome——8 月教皇 Innocent III 答应废 Magna Carta——理由："这是被胁迫签的——无效"——' +
      '内战重启——baron 找法国王 Philip Augustus 帮忙——王子 Louis 来英国称王——' +
      '1216 年 10 月 18 日 King John 痢疾死于 Newark——49 岁——' +
      '继任者：9 岁儿子 Henry III——' +
      'William Marshal 70 岁——做摄政——他做了一件**关键**的事——' +
      '1216 年 11 月——他**重新颁** Magna Carta——以新王 Henry III 名义——'+
      '加上一句："**这是 King 的礼物**——不是 baron 强迫的"——给它一个**合法外衣**——' +
      '法国王子 Louis 一看 baron 已经满足——退兵——内战结束——' +
      '接下来 1217 / 1225 / 1297 反复 reissue——1297 Edward I 把 Magna Carta 列入 statute book——成正式法律——' +
      '它从一份**失败的妥协**——慢慢变成英国宪政的**根**',
    engagementHook:
      '1215 在场的人都不知道——这张纸 800 年后会出现在 1789 美国宪法 + 1789 法国人权宣言 + 1948 联合国人权宣言里——' +
      '这种**意外的永生**怎么发生——我们看 §5 文件本身',
    expectedLength: '340-400 字',
    expectsRealAnswer: false,
  },

  {
    id: 12,
    phase: 'story',
    cosplay: 'narrator',
    narrativeRef: '§5 Clause 39 + Clause 40 + Clauses 12+14 + Clause 61',
    deliverGoal:
      '直接读最重要的 4 条文件——拉丁原 + 现代英文 + 中文 gloss——' +
      'Clause 39（最有名）：'+
      '"Nullus liber homo capiatur..."→ "No free man shall be seized..."→ '+
      '"任何 free man 不能被随便抓走或没收财产——除非经过同辈陪审 or 国法"——' +
      '关键词：**lawful judgment**（合法审判）+ **peers**（同辈）→ 后来变成 jury 陪审团基础——' +
      'Clause 40：'+
      '"To no one will we sell, to no one will we deny right or justice"——' +
      '司法不卖 + 不拒绝——后来变成"司法独立"——' +
      'Clauses 12+14：'+
      '王不能不经"common counsel"（共议）就征税——后来变成"无代表不纳税"+议会制度起源——' +
      'Clause 61：'+
      '25 baron 监督委员会——如果王违约——25 baron 有权"distrain and harass"（扣押王产）——' +
      '这是**最早的**"反抗暴政权"条款——后来变成 1776 美国独立宣言基础',
    engagementHook:
      '4 条都读完了——你看到一个 1215 年文件——居然预设了 jury / 司法独立 / 议会 / 反抗暴政——4 个现代政治核心——一齐预埋——这种**远见**是 Stephen Langton 一个人做到的吗',
    expectedLength: '380-440 字',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // PHASE 3: SYNTHESIS（真 Socratic——用户已有 schema）
  // ═══════════════════════════════════════════════════

  {
    id: 13,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§5 Clause 39 + §6 800 年回声 + §7 利益方分析',
    deliverGoal:
      '回顾 + 提出真 Socratic 问题：' +
      '1215 年 Clause 39 只保护 "free man"——free man 是什么意思——是 baron + free citizen（有自己土地的自由人）——' +
      '1215 全英国人口 90% 是 villein（农奴）——不是 free man——Clause 39 不保护他们——' +
      '但 1789 美国宪法 5th + 14th Amendment 写的是 "no person"——保护全人类——' +
      '从 "free man" → "all person"——这中间发生了什么——' +
      '不是文件本身改了——是**解读改了**——是几百年法庭判例 + 思想家 + 革命**重新定义** "free man"——' +
      '这种**意义的扩展**叫**living constitution**——' +
      '现在问你——你怎么看',
    engagementHook:
      '**你怎么看**？Article 39 在 1215 只保护 25 个 baron——为什么 800 年后变成全人类的 due process——这种"意义扩展"靠什么——是文件本身的力量？还是后人**重新解读**的力量？想 30 秒再答',
    expectedLength: '240-280 字 + 真问题',
    expectsRealAnswer: true,
  },

  {
    id: 14,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 同时代中国 + Tang Code 651 对照',
    deliverGoal:
      '比 Magna Carta 早 564 年——唐律疏议 651 年颁布——' +
      '12 卷 502 条——管"婚 户 田 宅 礼"全部社会层面——' +
      '管官员 + 平民 + 礼制——更系统——更全面——更早——' +
      '但是**唐律疏议没变成现代法律源头**——' +
      'Magna Carta 1215 年只有 63 条——只保护 25 个 baron——只在英国一国——' +
      '却变成现代 due process / 议会 / 反抗暴政的**起点**——' +
      '为什么——是历史偶然吗——还是文化结构差异——还是**英国后续 800 年**反复重新解读放大它——而中国**没有这种重新解读机制**——' +
      '现在问你',
    engagementHook:
      '**你怎么看**？唐律疏议早 564 年——更系统——管所有人——但没变成现代法律源头——而 Magna Carta 变成全球宪政基础——这是文化决定？是制度路径依赖？还是历史偶然？想 30 秒再答',
    expectedLength: '230-270 字 + 真问题',
    expectsRealAnswer: true,
  },

  // ═══════════════════════════════════════════════════
  // PHASE 4: META（反思 + 桥）
  // ═══════════════════════════════════════════════════

  {
    id: 15,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题 + bridge to mastery',
    deliverGoal:
      '今天我们看了 Magna Carta：' +
      '一个**意外英雄**（不是 King John——不是 baron——不是教皇——而是 Stephen Langton 起草的 63 条加上后续 800 年的重新解读）——' +
      'Reformation 的"个人良心 vs 权威" + 美国 First Amendment + 法国大革命 + 联合国人权宣言——' +
      '都能追到 1215 年那张纸——' +
      '现在反思——',
    engagementHook:
      '**今天最让你 surprise 的是什么**？是 King John 的残忍？是 Stephen Langton 的远见？是 Tom 那个农奴男孩看到的画面？还是唐律疏议 vs Magna Carta 的对比？说一句话——然后我们去做记忆考核',
    expectedLength: '120-160 字',
    expectsRealAnswer: true,
  },

];

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'magna-carta-1215',
  totalNodes: 15,
  estimatedMinutes: 35,
  phaseDistribution: {
    hook: 1,
    story: 11,
    synthesis: 2,
    meta: 1,
  },
  cosplayCharacters: [
    'narrator',
    'King John',
    'Pope Innocent III',
    'William Marshal',
    'Robert Fitzwalter',
    'Stephen Langton',
    'Tom（13 岁农奴男孩）',
  ],
  // narrative 引用完整性 — 所有 narrativeRef 都应该指向 narrative 真实存在的段落
  // 上线前 lint script 检查
};
