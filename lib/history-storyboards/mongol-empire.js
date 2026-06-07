// ─── Mongol Empire 1206-1368 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 蒙古帝国兴起 · Mongol Empire 1206-1368
// HSS-7.6 · AP World 2.2 (Mongol Empire as 13c Eurasian integrator)
//
// 3 lens 设计 (per Sarah Chen audit + 王老师 curriculum sequence):
//   - genghis-khan      (perpetrator-actor / steppe-system-builder) — 1162-1227 极致系统构建者 + 系统性暴力同体
//   - yelu-chucai       (lonely-mediator / bilingual-broker) — 1190-1244 契丹双语 broker / Khitan-Liao + Jin 两次文明灭绝
//   - sorghaghtani      (receiving-end / female-political-architect) — c.1190-1252 Kereit Nestorian / 4 子全成大汗 / Pax Mongolica sleeping power
//
// 跨 lens micro-detail (per Sarah audit + lens-author 共识):
//   Pax Mongolica + Yam 驿站 + 4 教并立 1218-1252 — 3 lens 三视角:
//   - Lens 1 (Chinggis) N4: 1218 召见 Yelü 28 岁 / Yasa + tumen + 西征屠城决定
//   - Lens 2 (Yelü) 全 12 nodes: mediator 在 Chinggis + Ögedei 之间救华北 + 4 教并立设计 Karakorum
//   - Lens 3 (Sorghaghtani) 1232-1252: Pax Mongolica 4 子继位 (Möngke/Kublai/Hulagu/Ariq Böke)
//
// 跨 5 文明 receiving-end 女性对照 (Sorghaghtani N12):
//   Sorghaghtani 1190-1252 真 / Theodora 500-548 真 / Li Qingzhao 1084-1155 真 +
//   Anacaona Jr 1492 虚 / Aisha 1413 虚 / Sister Agnes 1517 虚
//
// defaultLens = 'sorghaghtani' (per receiving-end 优先 pattern: 女性 + 同龄 anchor +
//   cross-lens info preservation closing)
//
// 4-agent review (TBD)
//
// per AUTHORING_PIPELINE.md 11 条铁律 + 第 12 条 (expectsRealAnswer 默认 false / N11+N12 only true)
//
// 来源 staging (5-7+ lens-author):
//   - mongol-empire-genghis-khan.staging.js     (12 nodes / 0 em-dash chain violations)
//   - mongol-empire-yelu-chucai.staging.js      (12 nodes / 350-550 CN chars / N4 broker not Han spokesman)
//   - mongol-empire-sorghaghtani.staging.js     (12 nodes / Kereit Nestorian + 25y political 布局)

export var genghisKhanLens = {
  id: 'genghis-khan',
  name: 'Chinggis Khan / Temüjin',
  nameCn: '成吉思汗 / 铁木真',
  role: 'perpetrator-actor',
  perspectiveTag: 'steppe-system-builder',
  description: {
    en: 'He is a nine-year-old boy on the Onon River, his father just poisoned by Tatars, his family driven out of their own clan, surviving on roots dug from the bank. This pass walks you forty years from that bank to the Kurultai where he is named Universal Khan, then onward into the western campaign that levels four cities, asking you to read one man who builds a state and orders mass killing as the same man.',
    cn: '他是斡难河边一个九岁的男孩，父亲刚被塔塔尔人毒死，家族被自己的部落抛弃，全家靠在河滩挖野菜根活命。这一遍让你跟他从那片河滩一路走四十年，到 Kurultai 大会上被尊为全宇宙的可汗，再走进西征那几座被夷平的城，看一个人怎么同时是建国者和系统性暴力的下令人。',
  },
  storyboard: [
    {
      id: 'gk-n1',
      type: 'narrative',
      content: {
        cn: '1162 年我生在 Onon 河源头——今天蒙古国东北、跟俄罗斯西伯利亚交界的山林草原。\n\n我父亲也速该（Yesügei）是 Kiyad 部首领。我母亲诃额仑（Hö\'elün）来自 Olkhonud 部——传说是父亲从蔑儿乞（Merkit）人手里抢来的——这笔账后来要还。\n\n《蒙古秘史》（约 1240 年成书，蒙古人自己写的最早一部蒙古史）记我出生时右手攥着一块凝血——萨满占卜说这小孩长大要见血。\n\n12 世纪蒙古高原是一片碎片：Tatar、Merkit、Naiman、Kereit、蒙古本部互相劫掠——没有统一政治体——也没有「蒙古族」这个民族概念。\n\n1162 年的我——是一个会被卷进部落仇杀链条的小孩。',
        en: 'I was born in 1162 at the source of the Onon River — today the borderland between northeast Mongolia and Russian Siberia, where forest meets steppe.\n\nMy father Yesügei was chief of the Kiyad clan. My mother Hö\'elün came from the Olkhonud — legend says my father seized her from the Merkit. That debt would be repaid later.\n\nThe Secret History of the Mongols (composed ~1240, the earliest Mongol account written by Mongols themselves) records that I was born clutching a clot of blood in my right hand. The shaman read it as a sign that this boy would see blood.\n\nThe 12th-century Mongolian plateau was fragments: Tatar, Merkit, Naiman, Kereit, and Mongol proper raided each other — no unified polity, and no concept of a "Mongol nation."\n\nIn 1162, I was a child about to be pulled into the tribal-revenge chain.',
      },
      deliverGoal: 'N1 hook — 1162 出生 + Onon 河源头 + 父母身份 + 蒙古秘史 1240 占卜 + 12c 草原碎片化 (没有统一蒙古族概念)',
      engagementHook: '《蒙古秘史》记我出生时手攥血块——你信「出生预兆」这种说法吗？为什么蒙古人 1240 年要把这件事写进史书？',
      expectsRealAnswer: false,
    },
    {
      id: 'gk-n2',
      type: 'narrative',
      content: {
        cn: '1171 年我 9 岁。\n\n那年父亲带我去 Onggirat 部——给我订婚孛儿帖（Börte）。回程路上他在塔塔尔（Tatar）人的营地停下喝酒，草原传统不能拒绝主人敬酒，他喝了。塔塔尔人下了毒。父亲走到家就死了——这是塔塔尔人为之前部落仇杀的报复。\n\n父死之后部落抛弃了我们家——草原逻辑：失去族长的家庭不再有保护价值。\n\n母亲诃额仑一个寡妇带 4 个亲生子（我跟弟弟们）+ 2 个继子，被赶出族群。\n\n之后几年我们靠 Onon 河边挖野菜根、抓土拨鼠、捡死鱼活下来。蒙古秘史 1240 写得很直白：「我们用野菜根养活自己。」\n\n9 岁的我学会两件事：草原上没人会救你；活下去是政治问题——不是道德问题。',
        en: 'I was 9 in 1171.\n\nThat year my father took me to the Onggirat to betroth me to Börte. On the way home he stopped at a Tatar camp to drink — steppe custom forbids refusing a host\'s cup — he drank. The Tatars had poisoned it. He made it home and died. It was Tatar revenge for an earlier round of inter-tribal killing.\n\nAfter his death the clan abandoned our family. Steppe logic: a household without a chief is no longer worth protecting.\n\nMy widowed mother Hö\'elün was driven out with her 4 sons (me and my brothers) plus 2 stepsons.\n\nFor years we survived along the Onon by digging wild plant roots, catching marmots, scavenging dead fish. The Secret History of the Mongols (1240) puts it plainly: "We kept ourselves alive on roots."\n\nAt 9 I learned two things: on the steppe no one will save you; staying alive is a political problem — not a moral one.',
      },
      deliverGoal: 'N2 9 岁父死 (Tatar 毒死, careful framing 草原仇杀链) + 寡母 4 子吃野菜根 + 蒙古秘史 1240 引用 + 「活下去是政治不是道德」内核',
      engagementHook: '9 岁的我——刚失去父亲——立刻被部落抛弃——我学到「活下去是政治不是道德」。你 9 岁的时候学到过什么硬道理？',
      expectsRealAnswer: false,
    },
    {
      id: 'gk-n3',
      type: 'narrative',
      content: {
        cn: '1178 年我 17 岁——跟童年订婚的孛儿帖（Börte）正式成婚。她来自 Onggirat 部——蒙古传统部落联盟靠婚姻巩固。\n\n1180 年，婚后约 2 年，蔑儿乞（Merkit）人来报仇。报什么仇？17 年前我父亲也速该从蔑儿乞人手里抢走我母亲诃额仑。这笔账蔑儿乞人记着。他们袭击新婚营地——抢走孛儿帖——9 个月后我才把她救回来。\n\n孛儿帖回来不久生下长子术赤（Jochi）。蒙古语意思是「客人」或「路上的人」，这名字反映出生时间的尴尬。「术赤是不是我亲生子」，成了蒙古史最大悬案——这一点要 careful framing：我一辈子公开承认术赤是嫡子，但弟弟察合台（Chagatai）多次当面骂术赤是「蔑儿乞杂种」——1227 年我死后继承大会的矛盾就源于此。\n\n救孛儿帖那次——我联合结义兄弟札木合（Jamukha）跟克烈（Kereit）部首领王罕（Toghrul）——这是我第一次知道：结盟比单打独斗强。',
        en: 'In 1178 at 17 I formally married Börte, my childhood betrothed from the Onggirat — steppe tradition cements alliances through marriage.\n\nIn 1180, about two years after the wedding, the Merkit came for revenge. Revenge for what? 17 years earlier my father Yesügei had taken my mother Hö\'elün from the Merkit. They had not forgotten. They raided our camp — seized Börte — and I did not get her back for 9 months.\n\nSoon after returning Börte gave birth to my eldest son Jochi — the name means "guest" or "traveler" in Mongolian — reflecting the timing. "Is Jochi really my biological son" became the largest open question in Mongol history. Careful framing here: I publicly acknowledged Jochi as legitimate my whole life, but my second son Chagatai called Jochi a "Merkit bastard" to his face more than once. The 1227 succession conflict traces back here.\n\nThe rescue mission — I allied with my sworn brother Jamukha and Kereit chief Toghrul. That was the first time I learned: alliance beats lone-wolf strength.',
      },
      deliverGoal: 'N3 17 娶 Börte / 1180 Börte 被掳 9 个月 careful framing + Jochi 父子身份悬案 (1227 继承伏笔) + 第一次结盟教训',
      engagementHook: '我一辈子公开承认 Jochi 是嫡子——但二儿子察合台当面骂他是「蔑儿乞杂种」。你怎么读「公开承认」跟「家族内部不信」的差距？',
      expectsRealAnswer: false,
    },
    {
      id: 'gk-n4',
      type: 'narrative',
      content: {
        cn: '1196-1205 年——我 34 到 43 岁——草原内战 10 年。\n\n我做的事是逐个击败草原对手——但用的不是单纯军事打击——是政治拆解。\n\n1196 年代后期击败 Tatar——这是杀父仇敌。蒙古秘史记我下令凡身高超过车轮的塔塔尔男人全杀，身高低于车轮（约 7 岁以下）的小孩活下来分到各家做养子。这条记载真实性史学界讨论了 200 年。蒙古秘史 1240 是蒙古人自己写的，可信度高——但这种「按车轮高度杀」的传说性细节也可能是叙事化处理。\n\n1203 年击败 Kereit 部——这是养父王罕的部落。我童年时投靠王罕做义子，后来因为继承问题翻脸。王罕想先下手——我反先动手。\n\n1204 年击败 Naiman——草原上最强的部族——也是最后一个。\n\n我的真创新不是军事——是组织：千户制（mingghan）把战士按 10 / 100 / 1,000 / 10,000 编组，长官按军功提拔——不按血缘，也不按部族。这一条 1204 年起在我军队里跑。传统草原军队按部族编队，我故意打散。',
        en: '1196 to 1205 — ages 34 to 43 — ten years of steppe civil war.\n\nI defeated my rivals one by one — not through pure military force, but through political disassembly.\n\nLate 1190s I beat the Tatars — the killers of my father. The Secret History records that I ordered every Tatar man taller than a cart wheel killed; boys shorter than the wheel (under ~7) survived and were distributed as adopted sons. Historians have argued for 200 years over how literally to read this — the 1240 Secret History is Mongol-authored and credible — but the "wheel-height" detail may also be narrative flourish.\n\n1203 — I defeated the Kereit, the tribe of my foster father Toghrul. As a boy I had taken refuge with Toghrul as his adopted son. We later quarreled over succession. Toghrul moved first; I moved faster.\n\n1204 — I defeated the Naiman, the strongest steppe tribe — and the last.\n\nMy real innovation was not military but organizational: the mingghan (thousand-household unit). Warriors organized in units of 10, 100, 1,000, and 10,000. Officers promoted by merit — not blood, not tribe. This system ran in my army from 1204 onward. Traditional steppe armies fought tribe-by-tribe; I deliberately broke that pattern.',
      },
      deliverGoal: 'N4 1196-1205 草原内战 10 年灭三大部 (Tatar/Kereit/Naiman) + 「按车轮高度」careful framing + mingghan 千户制按军功不按血缘',
      engagementHook: '蒙古秘史说我下令「身高超车轮的塔塔尔男人全杀」——你信这条记载吗？为什么蒙古人自己 1240 年要把这件事写进国史？',
      expectsRealAnswer: false,
    },
    {
      id: 'gk-n5',
      type: 'narrative',
      content: {
        cn: '⭐ 1206 年春——我 41 岁（一说 44 岁——出生年学界争议）——Onon 河（斡难河）源头 Kurultai（库里勒台，蒙古部族大会）。\n\n蒙古高原 6 大部族首领、千户长全到。萨满 Teb-Tengri（帖卜·腾格里，自称「天的代言人」）给我上尊号 Chinggis Khan——「全宇宙的可汗」或「坚强之汗」——词源至今学界争议。\n\n那一天同时发生 4 件事——这是蒙古帝国真正的诞生时刻：\n\n1. Yasa 大札撒——蒙古第一部成文法：通奸死刑、偷牲畜死刑、战利品按军功分；最关键一条是宗教 toleration——伊斯兰教、聂斯托利派基督教、佛教、萨满教共存，所有神职人员一律免税。这一条 13 世纪初欧洲、伊斯兰世界、宋朝都没有。\n\n2. tumen 4 层军制——arban 10 → jaghun 100 → mingghan 1,000 → tumen 10,000——按军功不按部族——总兵力约 10 万人。\n\n3. sülde 九斿白纛——9 条白马尾的旗（《元史·礼乐志》正字）——精神上的「国旗」。\n\n4. 部族间血亲复仇被禁——所有内部冲突走可汗仲裁——草原仇杀链条的逻辑被切断。\n\n反 Whig：这不是「野蛮人下山」——这是国家工程化。',
        en: '⭐ Spring 1206 — at 41 (or 44; the birth year is contested) — at the source of the Onon River, the Kurultai (the Mongol assembly of chiefs).\n\nLeaders and thousand-household commanders from all six major steppe peoples came. The shaman Teb-Tengri ("the Voice of Heaven") gave me the title Chinggis Khan — "Universal Khan" or "Firm Khan" — etymology still debated.\n\nFour things happened on that single day. This is when the Mongol Empire was actually born.\n\n1. The Yasa code — the first written Mongol law. Adultery, death. Theft of livestock, death. War spoils distributed by merit. The decisive clause: religious toleration. Islam, Nestorian Christianity, Buddhism, and shamanism coexist; all clergy exempt from taxation. Nothing comparable existed in 1206 Europe, the Islamic world, or Song China.\n\n2. The four-tier tumen military structure: arban 10 → jaghun 100 → mingghan 1,000 → tumen 10,000. Promotion by merit, not tribe. Total force ~100,000.\n\n3. The sülde — a 9-tailed white-horsehair standard — the spiritual "flag" of the new state.\n\n4. Inter-tribal blood feud was banned. All internal conflicts went through the Khan\'s arbitration — the steppe revenge chain was cut.\n\nAnti-Whig: this is not "barbarians coming down from the mountains." This is state engineering.',
      },
      deliverGoal: 'N5 ⭐ 1206.春 Kurultai 称汗 41 岁 + 4 件事同日 (Yasa / tumen / sülde / 仇杀禁) + 宗教 toleration 13c 世界独有 + 反 Whig 钢筋',
      engagementHook: '13 世纪初——欧洲、伊斯兰世界、宋朝都没宗教 toleration——草原上「野蛮人」反而有。这一条颠覆了你之前对「文明」的定义吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gk-n6',
      type: 'narrative',
      content: {
        cn: '1209-1218 年——称汗后第一波扩张——西夏 + 金朝 + 西伯利亚森林部族。\n\n1207 年北征西伯利亚森林部族——把森林狩猎部落（Uriankhai 等）纳入 tumen 体制。这一波几乎不流血，多数部族看到我已经统一草原——直接归附。\n\n1209 年西征西夏（Tangut，今宁夏甘肃，党项人建立的王朝 1038-1227）——围 Yinchuan 都城，黄河水淹城。西夏王李安全屈服——纳贡 + 嫁女，但保留独立。\n\n1211 年起南征金朝（Jin，女真人建立的华北王朝 1115-1234）。1215 年 5 月攻陷金中都（今北京）——这一仗死亡 30-60 万（《元史》（明初宋濂修, 1370）记 60 万；现代学者估算 30 万）。careful framing：《元史》是明初官修，不是元朝自己修——数字可能夸大，但即使取 30 万也是 13 世纪初最大屠城之一。\n\n1218 年我做了一个决定改变后来 9 年——派 450 人商队 + 蒙古使节去花剌子模（Khwarezmid，今乌兹别克 + 伊朗东北）通商。\n\n金朝战事我没活到看完——金朝 1234 年才被我儿子窝阔台（Ögedei）联宋灭掉——我已经死了 7 年。',
        en: '1209-1218 — the first wave after I became Khan: Western Xia, the Jin, and the Siberian forest peoples.\n\n1207 — northward against the Siberian forest tribes (Uriankhai and others). They were absorbed into the tumen system almost without bloodshed — most clans saw I had already unified the steppe and submitted directly.\n\n1209 — westward to Western Xia (Tangut, modern Ningxia and Gansu, kingdom of the Tangut people 1038-1227). I besieged the capital Yinchuan, diverted the Yellow River to flood the walls. King Li Anquan submitted, sent tribute, gave a princess in marriage — but kept formal independence.\n\nFrom 1211 — southward against the Jin (Jurchen-ruled North China, 1115-1234). May 1215 I took the Jin Central Capital (modern Beijing). The siege killed 300,000-600,000 (the Yuanshi (1370, compiled by Song Lian under the early Ming) records 600,000; modern scholars estimate 300,000). Careful framing: the Yuanshi is an early-Ming compilation, not a Yuan-dynasty record — the figure may be inflated — but even at 300,000 it remains one of the largest urban massacres of the early 13th century.\n\nIn 1218 I made a decision that shaped the next 9 years — I sent a 450-person trade caravan together with Mongol envoys to Khwarezmid (modern Uzbekistan and northeast Iran) to open trade.\n\nI did not live to finish the Jin war. The Jin fell in 1234 to my son Ögedei in alliance with the Song — I had been dead 7 years.',
      },
      deliverGoal: 'N6 1209-1218 第一波扩张 — 西夏屈服 + 金朝攻陷中都 (60 万 vs 30 万 careful framing) + 1218 派使节花剌子模 (N7 伏笔)',
      engagementHook: '《元史》写金中都死 60 万——现代学者减半到 30 万——你怎么读这种「数字争议」？哪一种数字更可信，为什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'gk-n7',
      type: 'narrative',
      content: {
        cn: '⭐ 1219-1221 年——我 57 到 59 岁——西征花剌子模（Khwarezmid）。\n\n起因：1218 年我派 450 人商队到 Otrar（今哈萨克斯坦）通商，被总督 Inalchuq 当间谍全杀。我又派使节抗议，沙王 Muhammad II 烧了使节胡须——按草原外交法这是宣战。\n\n1219 年春我率 10-15 万骑兵翻天山，3 年灭掉 Persia 东部最大国家。\n\n1220 屠 Bukhara——破城后我骑马进清真寺，把可兰经扔在马厩地上，3 万守军全杀。\n1220 屠 Samarkand——围 5 天破城，4 万工匠为奴，其余屠杀。\n1221 屠 Urgench（新都）——围 5 个月，城破后蒙古秘史记每个士兵分 24 个俘虏处决。1221 屠 Merv。\n\n这几城，Juvayni 1252 记一城死几十万到上百万——但现代学界判「人口学上不可能」，实际约数万到十几万级。careful framing：城破屠杀是真的，但 Juvayni 那种百万级是被否定的宣传数字，不是学界认可的估算——「史料记的」跟「学界信的」要区别。\n\nOtrar 一个总督、450 个商人的命，换来一个文明区被夷平。我的 Yasa 法说「使节不可侵犯」，花剌子模违了，我用整个文明的代价去执行它。',
        en: '⭐ 1219-1221 — ages 57 to 59 — the western campaign against the Khwarezmid Empire.\n\nCause: in 1218 I sent a 450-person trade caravan plus envoys. The caravan reached Otrar (modern Kazakhstan). Governor Inalchuq accused them of spying and killed all 450. I sent envoys to protest; Shah Muhammad II burned their beards. By steppe law that is a declaration of war.\n\nSpring 1219 I led 100,000-150,000 cavalry across the Tianshan — and in 3 years destroyed the largest state in eastern Persia.\n\n1220 — sack of Bukhara (modern Uzbekistan). After the breach I rode into the great mosque, threw the Qur\'an pages onto stable floors, killed the 30,000 defenders (Juvayni 1252 figure; 21st-century scholars such as Peter Jackson estimate 10,000-30,000).\n\n1220 — sack of Samarkand. Five-day siege. 40,000 craftsmen taken as slaves; the rest killed.\n\n1221 — sack of Urgench (the new capital). Five-month siege. After the breach the Secret History records each soldier was assigned 24 prisoners to execute.\n\n1221 — sack of Merv.\n\nFor Urgench and Merv the primary source Juvayni (1252) records hundreds of thousands to over a million dead per city — but modern scholars judge such figures "demographically impossible," putting the actual toll in the tens of thousands. Careful framing: 13th-century population data is limited, the massacres were real — but Juvayni\'s million-scale numbers are discredited propaganda figures, not estimates today\'s scholars accept. Distinguishing "what the source recorded" from "what scholars believe" is the key.\n\nOne governor at Otrar. The lives of 450 merchants. The cost: an entire civilization zone leveled. My own Yasa says envoys are inviolable. Khwarezmid broke that clause. I enforced it with the price of a civilization.',
      },
      deliverGoal: 'N7 ⭐ 1219-1221 西征 — Otrar 屠 450 商人 + 4 城屠 (Bukhara/Samarkand/Urgench/Merv) + careful framing 几百万死 + Yasa「使节不可侵犯」自相矛盾',
      engagementHook: '一个总督的决定——450 个商人的命——换来 4 城几百万人死。这是 Yasa 「使节不可侵犯」执行——还是借口下的系统性暴力？',
      expectsRealAnswer: false,
    },
    {
      id: 'gk-n8',
      type: 'narrative',
      content: {
        cn: '1224 年我回蒙古——花剌子模灭了——但西征还有「副线」。\n\n1222-1223 年我派两位将军 Subotai（速不台）跟 Jebe（哲别）率 2 万人——绕里海北岸——进入俄罗斯草原侦察。目标不是占领，是摸地理 + 摸政治。\n\n1223 年 5 月 31 日 Kalka 河战役（今乌克兰东部）——Subotai 跟 Jebe 假撤退 9 天 200 公里，把基辅罗斯（Kievan Rus）8 个公国 + Cuman 联军 8 万人拉散，在 Kalka 河一举歼灭。基辅大公 Mstislav 等约 3 名王公被俘，蒙古习俗「贵族不流血」——把他们压在木板平台下，蒙古将领在板上摆酒席庆祝、活活压死；其余王公在逃亡途中被杀。\n\n这一战的意义：俄罗斯 + 东欧第一次见识蒙古战术——但他们没当回事，以为是偶然劫掠。18 年后 Subotai 跟 Batu（拔都）回来，1240 年 12 月屠 Kiev——基辅罗斯 200 年统治终结。\n\n我 1224 年回蒙古时——已经 62 岁——身体不行了——我知道剩下时间不多。\n\n我没活到看 1240 Kiev 屠城。但 1223 Kalka 那一仗——是后来俄罗斯 200 年「Tatar Yoke」（鞑靼之轭）的种子——我亲手种的。',
        en: '1224 I returned to Mongolia. Khwarezmid was finished — but the western campaign had a side branch.\n\n1222-1223 I sent two generals — Subotai and Jebe — with 20,000 cavalry around the north of the Caspian into the Russian steppe. The mission was not conquest. It was reconnaissance: geography and politics.\n\n31 May 1223 — Battle of the Kalka River (modern eastern Ukraine). Subotai and Jebe staged a fake retreat for 9 days over 200 km — strung out the combined army of 8 Kievan Rus principalities and the Cumans (80,000 total) — and destroyed it on the Kalka. Grand Prince Mstislav and about three princes were captured. Mongol custom: nobles do not bleed. They were laid under a platform of wooden boards and crushed to death while the Mongol commanders feasted on top; the rest of the princes were killed during the flight.\n\nWhat this battle meant: Russia and Eastern Europe got their first taste of Mongol tactics — but did not take it seriously, treated it as a one-off raid. 18 years later Subotai came back with Batu — December 1240 — and sacked Kiev. The end of 200 years of Kievan Rus.\n\nWhen I returned to Mongolia in 1224 I was 62. My body was failing. I knew time was short.\n\nI did not live to see the 1240 Kiev sack. But the 1223 Kalka battle — I personally planted the seed of what became Russia\'s 200 years of "Tatar Yoke."',
      },
      deliverGoal: 'N8 1224 回蒙古 + 1222-23 Subotai/Jebe 西方侦察 + 1223 Kalka 河战 (假撤退 9 天) + 约 3 王公木板平台压死 + 其余逃亡途中被杀 + 1240 Kiev 伏笔',
      engagementHook: '我 1223 派 Subotai 侦察——18 年后 Subotai 回来屠 Kiev。这是「精心规划」还是「偶然机会」？为什么俄罗斯人 1223 年没当回事？',
      expectsRealAnswer: false,
    },
    {
      id: 'gk-n9',
      type: 'narrative',
      content: {
        cn: '1226 年——我 64 岁——决定再征西夏。\n\n为什么再打？1219 我西征前要西夏出兵——西夏王李遵顼（神宗）拒绝，还说「成吉思汗不能征西方又要打我们」。他儿子李德旺 1223 即位后我开始计划——这笔账我记了 7 年。\n\n1226 年秋我率军南下——围西夏都城 Yinchuan（今宁夏银川）。1227 年夏——围城 6 个月——西夏王李睍出城投降——但我已经病重。\n\n1227 年 8 月 25 日——我死在六盘山（今宁夏南部）军营里——65 岁。\n\n死因史料模糊：《蒙古秘史》1240 说「坠马伤」；马可·波罗《东方见闻录》1298 说「箭伤」；Rashid al-Din《史集》1306 说「高烧瘟疫」；《元史》1370 说「夏季毒热」。4 种说法 4 种来源——careful framing：13 世纪皇帝死因多说是常态——可能 4 种都对（坠马 → 伤口感染 → 高热）——也可能都是后人修史的政治化处理。\n\n我留遗嘱：屠西夏全城——杀掉投降的李睍——然后秘密下葬，不立陵墓不留标记。\n\n葬地至今没找到——按蒙古传统，下葬路上骑兵踏平马蹄印，葬完用马群踩平地表，再过几年长草。21 世纪考古队找了 30 多年——蒙古国法律明文禁止挖掘可能的成吉思汗陵，这是民族禁忌。',
        en: '1226 — at 64 — I decided to attack Western Xia again.\n\nWhy a second campaign? Before my 1219 western campaign I had asked Western Xia for troops. King Li Zunxu (Emperor Shenzong) refused, and said "Chinggis Khan cannot subdue the west and attack us at once." His son Li Dewang took the throne in 1223 and I began planning. I held that grudge for 7 years.\n\nAutumn 1226 I led the army south — besieged the capital Yinchuan (modern Yinchuan, Ningxia). Summer 1227 — six-month siege — King Li Xian came out to surrender. But I was already gravely ill.\n\n25 August 1227 — I died at a military camp in the Liupan Mountains (southern Ningxia) — at 65.\n\nThe cause is murky. The Secret History (1240) says "fall from a horse." Marco Polo\'s Travels (1298) says "arrow wound." Rashid al-Din\'s Compendium of Chronicles (1306) says "fever and plague." The Yuanshi (1370) says "summer heat-poison." Four sources, four versions. Careful framing: multiple causes for 13th-century rulers is normal — all four may be partly true (fall → infected wound → fever) — or all four may be later historiographic politics.\n\nMy will: massacre the entire Western Xia capital, kill the surrendered Li Xian, then bury me in secret — no tomb, no marker.\n\nThe burial site has never been found. Steppe tradition: cavalry trampled the funeral path; horses flattened the earth; grass grew. 21st-century archaeological teams have searched over 30 years. Mongolian law explicitly forbids excavating possible Chinggis Khan tombs — a national taboo.',
      },
      deliverGoal: 'N9 1227.8.25 死西夏军中 65 岁 + 4 死因 4 来源 (蒙古秘史 1240 / 马可·波罗 / Rashid al-Din 1306 / 元史) careful framing + 葬地 21c 仍未发现 + 蒙古国禁挖',
      engagementHook: '4 个史料 4 种死因——你怎么读这种「来源冲突」？为什么蒙古国 21 世纪法律明文禁止挖我陵——这是尊敬还是政治？',
      expectsRealAnswer: false,
    },
    {
      id: 'gk-n10',
      type: 'synthesis',
      content: {
        cn: '我 1227 死——65 岁——一辈子干了什么？\n\n两边同样真：\n\n左边——极致系统构建者。Yasa 大札撒（13 世纪初草原第一部成文法 + 宗教 toleration 13c 世界独有）；tumen 4 层军制（按军功不按血缘）；Yam 驿站（25-50 km 一站，从北京到布达佩斯 6 周送信，后来 Pax Mongolica 商路 100 年的基础设施）；千户制（mingghan）打散部族忠诚换军事忠诚。\n\n右边——系统性暴力执行者。1215 金中都死 30-60 万；1219-1221 西征 Bukhara/Samarkand/Urgench/Merv 4 城屠几百万；1227 西夏临死遗嘱屠全城。\n\n这两边不是「优点 + 缺点」——是同一套系统的两面。Yasa 写「使节不可侵犯」，所以 1218 Otrar 杀 450 商人，我用整个文明的代价执行这一条。tumen 让 10 万骑兵能协同——所以同一支军队 1219 翻天山屠 4 城。\n\n极致系统 + 系统性暴力同体——是同一个我。\n\n这是反 Whig 钢筋：你不能浪漫化「Pax Mongolica 商路黄金时代」也不能妖魔化「草原野蛮人下山屠文明」——这两件事是同一个 1206 Kurultai 的因果链。\n\n想 30 秒。',
        en: 'I died in 1227 at 65. What did the life amount to?\n\nTwo sides equally true.\n\nLeft side — extreme system-builder. The Yasa code (the first written law on the steppe and the only religious-toleration regime in the early 13th-century world); the four-tier tumen (promotion by merit, not blood); the Yam relay system (post stations every 25-50 km — 6 weeks from Beijing to Budapest — the infrastructure backbone of the next century\'s Pax Mongolica); the mingghan that broke tribal loyalty into military loyalty.\n\nRight side — perpetrator of systematic violence. 1215 Jin Central Capital, 300,000-600,000 dead. 1219-1221 western campaign, Bukhara, Samarkand, Urgench, and Merv — several million across four cities. 1227 deathbed order to massacre Western Xia\'s capital.\n\nThese two sides are not "strengths and weaknesses." They are two faces of the same system. The Yasa says envoys are inviolable — so 1218 Otrar kills 450 merchants — and I enforced that clause with the cost of a civilization. The tumen lets 100,000 cavalry coordinate — so the same army crosses the Tianshan in 1219 and razes four cities.\n\nExtreme system-building and systematic violence in one body — same person.\n\nThis is the anti-Whig backbone (against simple progress narratives). You cannot romanticize "Pax Mongolica\'s golden age of trade" and you cannot demonize "barbarians coming down from the mountains." They are the same causal chain from 1206 Kurultai.\n\nThink for 30 seconds.',
      },
      deliverGoal: 'N10 synthesis 双 view (极致系统构建者 vs 系统性暴力执行者) — 反 Whig 钢筋 / Yasa 使节条 vs Otrar 屠 是同一系统两面 / 30 秒',
      engagementHook: '极致系统 + 系统性暴力同体——是同一个我。两边都站得住——你的 30 秒过去了——你站哪边？',
      expectsRealAnswer: false,
    },
    {
      id: 'gk-n11',
      type: 'synthesis',
      content: {
        cn: '21 世纪——我死后 800 年——你看到一个奇怪的现象：\n\n蒙古国（人口 350 万）——首都国际机场以我命名（Chinggis Khaan）；1,400 togrog 钞票上印我；2008 年首都立 40 米高骑马铜像。我是民族英雄——蒙古身份认同的核心符号。\n\n中国（人口 14 亿）——内蒙古鄂尔多斯有「成吉思汗陵」（衣冠冢，不是真葬地）；元朝（1271-1368）被列为正史 25 朝之一。蒙古国把我当本国民族英雄——这是两种不同的国族归属叙述，不是简单的对错。\n\n俄罗斯——「Tatar Yoke」（鞑靼之轭，1240-1480 蒙古统治 240 年）是俄罗斯民族叙事的核心耻辱——21 世纪历史教科书仍把蒙古入侵列为「俄罗斯文明被打断」的关键节点。\n\n伊朗——21 世纪德黑兰大学历史系仍把 1219-1221 + 1258 巴格达屠城列为「伊斯兰黄金时代终结」的标志。\n\n但有个问题：13 世纪我没有「蒙古族」「中华民族」「俄罗斯民族」「伊朗民族」这种现代国族概念——这些都是 19 世纪欧洲民族主义传到全球后才成型的范畴。把 21 世纪的国族框架投射回 13 世纪——这叫 anachronism（时代错置）。\n\n你怎么评？——4 个国家用今天的国族概念给 13 世纪的我贴标签——这件事本身合理吗？',
        en: '21st century — 800 years after I died — you see something strange.\n\nMongolia (population 3.5 million): the international airport bears my name (Chinggis Khaan); my face is on the 1,400-togrog banknote; in 2008 a 40-meter equestrian statue went up outside the capital. I am a national hero — the core symbol of Mongolian identity.\n\nChina (population 1.4 billion): Inner Mongolia\'s Ordos has a "Chinggis Khan Mausoleum" (cenotaph, not the actual burial); the Yuan dynasty (1271-1368) is listed among the 25 dynasties of Chinese history. Mongolia treats me as its own national hero. Two different national-belonging narratives, not a simple right-or-wrong.\n\nRussia: the "Tatar Yoke" (1240-1480, 240 years of Mongol overlordship) is a foundational humiliation in Russian national narrative. 21st-century textbooks still mark the Mongol invasion as the moment "Russian civilization was interrupted."\n\nIran: 21st-century Tehran University history departments still mark the 1219-1221 campaign and the 1258 sack of Baghdad as the symbolic end of the Islamic golden age.\n\nBut there is a problem. In the 13th century I had no concept of "Mongol nation," "Chinese nation," "Russian nation," or "Iranian nation." Those categories crystallized only after 19th-century European nationalism spread globally. Projecting 21st-century national frameworks back onto the 13th century is anachronism.\n\nHow do you read this? Four nations labeling a 13th-century person with today\'s national concepts — is the operation itself coherent?',
      },
      deliverGoal: 'N11 expectsRealAnswer:true — 21c Mongolia 民族英雄 + 中国争议外族 + 俄罗斯 Tatar Yoke 耻辱 + 伊朗黄金时代终结 / 13c 没现代国族概念 anachronism',
      engagementHook: '现在权衡这两遍读法：一遍把我当建出 Yasa、tumen、Yam 驿站的极致系统构建者；另一遍把我当屠了 4 城几百万人的系统性暴力执行者。哪一遍更该定义我，还是必须两遍一起握住？想 30 秒，写下来。',
      expectsRealAnswer: true,
    },
    {
      id: 'gk-n12',
      type: 'synthesis',
      content: {
        cn: '最后——跨文化 5 个 perpetrator-actor 对照：\n\n1. 我——成吉思汗——草原系统构建者 + 西征屠几百万。Pax Mongolica 是双刃：同一套基础设施 1346 也成了黑死病的高速公路，欧亚 1340s 死 1/3 人口（详见黑死病那段历史）。\n\n2. Mansa Musa（1324 Mali 朝圣）——非洲 wealth projector + 驱 1-1.2 万奴隶跨 8,000 km。外交 vs 跨撒哈拉奴贩。\n\n3. Lorenzo de\' Medici（15c Florence）——文艺复兴金主 + 1478 Pazzi 阴谋后处决 80 余人。\n\n4. 宋徽宗（1100-1126）——艺术皇帝 + 北宋亡国（详见唐宋那段历史）。\n\n5. Justinian（6c Byzantine）——重建罗马帝国 + 532 Nika 暴动屠几万（详见拜占庭那段历史）。\n\n5 个人 5 种文明 1500 年——同一个 pattern：极致系统构建 + 系统性暴力同体。不是「都是坏人」，是这个角色在每种文明里都存在。AP DBQ 训练你「hold contradictions」——同时看到光跟影，不二元化。\n\n我建了蒙古帝国，也西征屠了 4 城。两件都真——同一个我。',
        en: 'Last — five cross-cultural perpetrator-actors — the same role across civilizations.\n\n1. Me — Chinggis Khan (1206 Kurultai) — steppe system-builder and architect of the western campaign that killed several million. The 100-year Pax Mongolica was double-edged: the same infrastructure became the Black Death\'s 1346 highway — Eurasia lost roughly a third of its population in the 1340s (see the Black Death topic).\n\n2. Mansa Musa (1324 Mali hajj) — 14th-century African wealth projector who marched 10,000-12,000 enslaved people 8,000 km (al-Umari 1342 gives no exact figure). Soft-power diplomacy versus trans-Saharan slave trafficking.\n\n3. Lorenzo de\' Medici (15th-century Florence) — Renaissance patron and persecutor of rivals. Botticelli commissions versus post-1478 Pazzi-conspiracy reprisals (scholars estimate roughly 80 executions).\n\n4. Emperor Huizong (1100-1126) — artist-emperor under whom the Northern Song collapsed (see the Tang-Song topic). Cultural peak versus political ruin.\n\n5. Justinian (6th-century Byzantium) — restorer of the Roman empire and orderer of the 532 Nika riot massacre (Procopius gives 30,000; 21st-century estimates 10,000-30,000 — see the Byzantine topic).\n\nFive people, five civilizations, 1,500 years. The pattern is the same: extreme system-building, systematic violence, same person.\n\nThis is not "they were all bad people." The role exists in every civilization — achievement and violence in the same body. AP DBQ training asks you to hold contradictions — see light and shadow at once — without flattening into binaries.\n\nI founded the Mongol Empire. My western campaign sacked four cities. Both are real. Both are the same person.',
      },
      deliverGoal: 'N12 closing meta — 5 perpetrator-actor 对照 (Chinggis / Mansa Musa / Lorenzo / Huizong / Justinian) + 同 pattern 1500 年 + AP DBQ hold contradiction',
      engagementHook: '走完我这一生——极致系统构建（Yasa + tumen + Yam 驿站）跟系统性暴力（4 城屠几百万）是同一个我。你会怎么评价这样一个人，还有 4 个国家用今天的国族概念给我贴标签这件事？再想一步：5 种文明 1500 年同一个 pattern——你身边有没有这种「成就跟暴力同体」的人或权力，你会怎么对待 TA？',
      expectsRealAnswer: true,
    },
  ],
};
export var yeluChucaiLens = {
  id: 'yelu-chucai',
  name: 'Yelü Chucai',
  nameCn: '耶律楚材',
  role: 'lonely-mediator',
  perspectiveTag: 'bilingual-broker',
  description: {
    en: 'He is a twenty-five-year-old Khitan official, captured when Chinggis Khan sacks his city, walking out of the rubble of a capital that has now seen two empires die in his family\'s memory. This pass sits you across the great tent three years later when the conqueror asks if he hates him, and rides with him into the debate that will decide whether all of north China is turned into pasture or left as farmland.',
    cn: '他是一个二十五岁的契丹官员,刚从蒙古攻陷的中都废墟里被俘走出来,六十五年里他这一家已经亲眼看着两个征服自己的王朝又被新征服者灭掉。这一遍让你三年后跟他坐在 Chinggis 的大帐里听那句陷阱式的提问,再陪他走进那场决定整片华北是变牧场还是留农田的辩论。',
  },
  storyboard: [
    {
      id: 'yc-n1',
      type: 'narrative',
      content: {
        cn: '1190 年我生在燕京（Yanjing，今北京）——那时叫「中都」——金朝（Jin，女真人 1115 建立的华北王朝）的首都。\n\n我姓耶律——契丹（Khitan）皇族姓——辽朝（Liao，907-1125）开国姓。我是辽东丹王突欲 8 世孙（《元史》本传明确）。\n\n但你听到这话要先想一件事。1190 年，辽朝已经灭亡 65 年了。1125 年女真金朝灭辽——把辽末代皇帝天祚帝活捉，契丹皇族大部分被杀或被强迫南迁。我家祖父辈是侥幸活下来的少数，投降金朝做小吏。\n\n所以我出生时身份很别扭——契丹贵族血统——但 200 年家国早没了——只能在征服我们的金朝里讨饭吃。\n\n我父亲耶律履在金章宗（1190-1208 在位）朝做尚书，汉化很深。给我起名「楚材」——出自《左传》「虽楚有材，晋实用之」，意思是楚国人才被晋国用。\n\n这个名字一辈子像谶语——我后来确实被一个又一个征服我祖国的政权用。\n\n1190 年的我——是一个亡国 65 年的契丹遗民——生在一个征服者的首都里。',
        en: 'I was born in 1190 in Yanjing (modern Beijing) — then called the Central Capital — capital of the Jin dynasty (Jurchen state founded 1115 in North China).\n\nMy surname is Yelü, the imperial surname of the Khitan, the founding house of the Liao dynasty (907-1125). I am an 8th-generation descendant of Tuyu, the Prince of Eastern Dan (per my Yuanshi biography).\n\nBut hold one fact first: in 1190 the Liao dynasty had already been gone for 65 years. In 1125 the Jurchen Jin destroyed Liao, captured the last Liao emperor Tianzuo alive, killed or forcibly relocated most of the Khitan imperial clan. My grandfather\'s generation were among the few survivors — they submitted to the Jin and took minor official posts.\n\nSo my birth identity was crooked. Khitan royal blood, yes — but 200 years of statehood gone. The only way to eat was to serve the very dynasty that had destroyed us.\n\nMy father Yelü Lü was a Minister of Personnel under Jin Emperor Zhangzong (reigned 1190-1208), deeply sinicized. He named me Chucai — from the Zuozhuan: "Though Chu has talent, it is Jin that puts it to use." Chu\'s talent serves Jin.\n\nThe name became prophecy. I would be used by one regime after another that had conquered my homeland.\n\nIn 1190 I was a Khitan remnant — 65 years past the fall of my house — born in the capital of the conquerors.',
      },
      deliverGoal: 'N1 hook — 1190 出生燕京 (Jin 中都, 今北京) + Khitan 皇族血统 + 辽 1125 已亡 65 年 + 父耶律履仕金 + 「楚材」名字谶语「楚才晋用」 / 一开篇就钉死 Khitan 双语 broker 不是 Han 代言人',
        engagementHook: '我父亲给我起名「楚材」——出自「楚国人才被晋国用」。你 9 岁的时候——家里给你起的名字——后来真的成了你一生的命运吗？',
        expectsRealAnswer: false,
    },
    {
      id: 'yc-n2',
      type: 'narrative',
      content: {
        cn: '1208 年我 18 岁——按金朝制度参加科举——中进士——第二年（1209）被任命为开州（今河南濮阳）同知（副市长级）。\n\n但科举只是表面。我的真正学习在家里——契丹贵族的多元教育底子：\n\n儒，四书五经汉文经典，金朝官场必备。\n佛，禅宗 + 华严宗，我后来终身好佛——拜万松行秀禅师为师，自号「湛然居士」。\n道，道家 + 阴阳家 + 占卜星象，这一条后来救了我命。\n\n语言上——契丹语（母语，但 13 世纪初已经在消亡）+ 汉语（书面 + 口语）+ 女真语（金朝官场必需）+ 一点蒙古语（草原邻居，零散学的）。\n\n这种多元背景在 13 世纪初的东亚是奇怪的——汉人士大夫只学儒；女真贵族只学骑射；蒙古人没有文字。我夹在中间——契丹族的传统就是「夹在中间」——辽朝 200 年治理就是 Khitan + Han + Bohai 多族多教并立。\n\n1208 年的我——是一个 18 岁刚中进士的副市长——但脑子里装的是 5 种文化 + 4 种语言 + 200 年契丹「多元治理」遗产。\n\n这一点 10 年后会变成 Chinggis 召见我的真正原因——不是儒生——是 broker。',
        en: 'In 1208 at 18 I sat the Jin imperial examinations, passed as a jinshi (top imperial-exam graduate), and the next year was appointed deputy magistrate of Kaizhou (modern Puyang, Henan).\n\nBut the exam was only the surface. My real education was at home — the multi-strand training of a Khitan aristocrat.\n\nConfucian — the Four Books and Five Classics, mandatory for Jin officialdom.\nBuddhist — Chan and Huayan schools. I would be a Buddhist for life, took the monk Wansong Xingxiu as my teacher, used the dharma-name Zhanran Jushi (Lay Practitioner of Tranquil Clarity).\nDaoist — Daoism, yin-yang cosmology, divination, astrology. That last strand would later save my life.\n\nLanguages: Khitan (mother tongue, already dying out by the early 13th century), Chinese (written and spoken), Jurchen (mandatory at Jin court), and some Mongolian (steppe neighbors, picked up piecemeal).\n\nThis multilingual, multi-religious profile was strange in early-13th-century East Asia. Han literati studied only Confucianism. Jurchen nobles studied only mounted archery. Mongols had no script at all. I sat in the middle — and "in the middle" was the Khitan tradition. Liao\'s 200 years had run on Khitan-plus-Han-plus-Bohai (a former Manchurian-Korean kingdom absorbed by Liao) pluralism.\n\nIn 1208 I was an 18-year-old new jinshi deputy magistrate — but in my head sat five cultures, four languages, and 200 years of Khitan multi-civilization administration.\n\nTen years later that profile would be the real reason Chinggis summoned me. Not because I was a Confucian. Because I was a broker.',
      },
      deliverGoal: 'N2 1208 中进士 18 岁 + 学儒+佛+道 (Khitan 多元教育) + 4 语言 (Khitan/汉/女真/蒙古) + 「夹在中间」是辽朝 200 年治理传统 / Chinggis 召见的真正理由是 broker 不是儒生',
      engagementHook: '13c 初东亚——Han 士大夫只学儒——Jurchen 贵族只学骑射——Mongol 没文字——我一个人脑子里装 5 种文化 4 种语言。你身边今天有这种「夹在中间」的人吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'yc-n3',
      type: 'narrative',
      content: {
        cn: '1211 年——我 21 岁——蒙古第一次南下攻金。\n\n那一仗成吉思汗（Chinggis）打金朝是为了报仇——金朝几十年前杀过蒙古先祖俺巴孩汗（Ambaghai，被金朝钉死在木驴上）——这笔账记了 60 年。\n\n1213 年蒙古军围困中都（今北京）——金朝皇帝完颜永济被臣下杀掉——继任的宣宗 1214 年迁都南京（今河南开封）——把中都丢给蒙古围。\n\n1215 年 5 月——我 25 岁——蒙古攻陷中都。城破时金中都死 30-60 万（详见 Lens 1 N6 careful framing），我的家在城里，但我活下来了，被蒙古军俘虏。\n\n这一刻我脑子里只有一个念头：65 年前我祖辈看着辽被金灭——现在我亲眼看着金被蒙古灭。同一个城——同一个家族——65 年内看了两次「征服我们的政权又被新征服者灭」。\n\n我后来跟 Chinggis 说的那句话「我恨谁」不是临场机智——是 1215 年中都城破那一刻就想清楚的事。\n\n被俘后我没立刻见 Chinggis。蒙古军把我送到军营做战俘+文书，一关就是 3 年。这 3 年我读《楞严经》（佛经）+ 写诗——「楚材」这个名字一直是我的乡愁锚点。\n\n1215 到 1218——3 年战俘 3 年沉默——我在等一个人。',
        en: '1211 — at 21 — the Mongols first invaded the Jin.\n\nChinggis was settling a 60-year debt. Decades earlier the Jin had executed his ancestor Ambaghai Khan by nailing him to a wooden donkey. He had not forgotten.\n\n1213 — the Mongol army besieged the Central Capital (modern Beijing). The Jin emperor Wanyan Yongji was murdered by his own ministers. His successor Emperor Xuanzong fled the capital in 1214 to Nanjing (modern Kaifeng) — left the Central Capital to its fate.\n\nMay 1215 — at 25 — the Mongols took the Central Capital. The siege killed 300,000-600,000 (see Lens 1 N6 careful framing). My family was in the city. I survived. The Mongols took me prisoner.\n\nIn that moment one thought hit me: 65 years earlier my ancestors had watched the Liao destroyed by the Jin. Now I was watching the Jin destroyed by the Mongols. Same city, same family — within 65 years, twice over: "the regime that conquered us is itself conquered."\n\nThe line I would later give Chinggis — "whom should I hate?" — was not improvisation. I worked it out in the rubble of the Central Capital in May 1215.\n\nAfter capture I did not immediately meet Chinggis. The army kept me in a camp as prisoner-clerk for three years. I read the Shurangama Sutra and wrote poems — the name "Chucai" stayed with me as my anchor for homesickness.\n\n1215 to 1218 — three years of captivity, three years of silence. I was waiting for someone.',
      },
      deliverGoal: 'N3 1215.5 中都陷被俘 25 岁 + 65 年内见两次「征服者被新征服者灭」(辽→金 1125 + 金→蒙古 1215) + 「我恨谁」不是临场机智是 1215 那一刻就想清楚 + 1215-18 三年战俘读楞严经写诗',
      engagementHook: '65 年内同一个家族看了两次文明灭绝。「我恨谁」这句话——是临场机智——还是 3 年战俘营里早就想清楚的事？你怎么读？',
      expectsRealAnswer: false,
    },
    {
      id: 'yc-n4',
      type: 'narrative',
      content: {
        cn: '⭐ 1218 年——我 28 岁——成吉思汗终于召见我。\n\n召见原因：Chinggis 在攻陷的金朝官员里找一个「懂占星术 + 懂多种文字 + 懂农耕世界」的顾问——蒙古萨满给不出这种知识——他需要一个 broker。\n\n地点是 Chinggis 大帐。这场对话蒙古秘史 1240 跟 Rachewiltz 1962 都记了，版本略有不同，我用最经典的：\n\nChinggis 第一句问：「辽金世仇——我替你报了仇——你高兴吗？」\n\n这是陷阱。说高兴——等于承认我是辽人帮他打金人——以后他征宋我就是工具。说不高兴——他立刻可以杀我。\n\n我答：「臣父祖皆尝北面事金，既为之臣，岂复仇君父乎？」（父祖仕金为臣——既为臣，怎能反过来仇视君父？）\n\nChinggis 沉默 30 秒——然后大笑——说：「真男子也。」\n\n这回答的真意不是表面「忠君」，是反着说：「辽-金-蒙古这种征服-被征服链条对我没意义——我不站队，我是 broker。」Chinggis 听懂了。\n\n他当场任命我做 bichigchi（必阇赤，蒙古语「书写者」，秘书 + 占卜师 + 文书官三合一）——赐蒙古名 Urtu Saqal（长胡子的人，我留长须）。\n\n28 岁那年——一个亡了两次国的契丹人——成了世界征服者的私人秘书。',
        en: '⭐ 1218 — at 28 — Chinggis Khan finally summoned me.\n\nThe reason: among the captured Jin officials, Chinggis was hunting for one adviser who knew astrology, multiple scripts, and the agricultural world. Mongol shamans could not give him 13th-century East Asian astronomy. He needed a broker.\n\nThe summons was in Chinggis\'s great tent. Both the Secret History (1240) and Igor de Rachewiltz\'s Account of Yelü Chucai (1962) record this conversation with slight variations. I use the canonical version.\n\nChinggis\'s first question: "Liao and Jin were sworn enemies. I have avenged your house. Are you pleased?"\n\nA trap. If I said yes, I had confirmed I was a Liao man helping him crush Jin — and the next day, turning south to the Song, I would be his tool against Han China. If I said no, he could kill me on the spot.\n\nMy answer: "My father and grandfathers served the Jin as ministers. As ministers — how can a man turn around and hate his lord and father?"\n\nChinggis went silent for thirty seconds. Then he laughed: "A true man."\n\nThe real meaning was not surface loyalty. It was inverted: "The Liao-Jin-Mongol chain of conquest and reconquest has no claim on me. I do not pick a side. I am a broker." Chinggis heard it.\n\nOn the spot he made me his bichigchi (Mongolian: "writer" — secretary, astrologer, and document officer in one). He gave me a Mongolian name, Urtu Saqal — "the Long-Bearded One" — for the beard I wore (the exact year is not pinned down in the sources).\n\nAt 28, a Khitan twice-orphaned of his country had become the private secretary of the conqueror of the world.',
      },
      deliverGoal: 'N4 ⭐ 1218 Chinggis 召见 28 岁 + 「辽金世仇我替你报仇」陷阱问 + 「父祖仕金岂复仇君父」反着说 broker 不站队 + 任 bichigchi (秘书+占卜师+文书) + 蒙古名 Urtu Saqal (长胡子)',
      engagementHook: 'Chinggis 问「我替你报了仇——你高兴吗」——这是陷阱。我回答的真意不是「忠君」是「我不站队我是 broker」。你 28 岁——你能在 30 秒内说出这种话吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'yc-n5',
      type: 'narrative',
      content: {
        cn: '1219-1227 年——我 29 到 37 岁——跟 Chinggis 西征 + 亲眼看 4 城屠。\n\n1219 年春 Chinggis 率 10-15 万骑兵西征花剌子模——我作为 bichigchi 全程随行，9 年没回中原。Bukhara、Samarkand、Urgench、Merv 4 城屠，我都在场（死亡数字 careful framing 见 Lens 1 N7）。\n\n这是我家族 65 年内第三次文明灭绝——前两次（1125 辽亡、1215 金亡）我是「亡国遗民」，这一次是「执行者随行」。\n\n9 年里我做三件事：\n\n1. 占卜。1220 Samarkand 围城前我观天象，预言「冬有大雪，南撤路线安全」。后来真下大雪，Chinggis 信我——这种精度蒙古萨满给不出，让我活下来。\n\n2. 救工匠。每屠一城我先建议「先把工匠 + 学者 + 翻译官 + 医生分出来」——后来变成蒙古帝国常规，4 城分出去几万工匠，Karakorum 的建造工匠多是这些被「救」出来的。\n\n3. 写诗。9 年我写了《西游录》——记沿途地理 + 城市 + 风俗——21 世纪仍是研究 13c 中亚的核心一手材料。\n\n但夜里我经常一个人——蒙古秘史 1240 记我西征中常彻夜难眠——我在「执行者」跟「亡国遗民」之间撕裂 9 年。',
        en: '1219-1227 — ages 29 to 37 — I rode the western campaign with Chinggis, and watched four cities die.\n\nSpring 1219 — Chinggis led 100,000-150,000 cavalry against Khwarezmid. As bichigchi I went with him for the whole campaign. Nine years away from China. I was present at the sack of all four cities — Bukhara, Samarkand, Urgench, Merv (death figures, careful framing, see Lens 1 N7).\n\nThis was my family\'s third civilizational collapse in 65 years. The first two (Liao 1125, Jin 1215) I had watched as one of the conquered. This one I watched riding with the conqueror.\n\nIn those nine years I did three things.\n\n1. Astrology. Before the 1220 Samarkand siege I read the heavens and predicted "heavy snow this winter — the southern retreat route is safe." The snow came. Chinggis trusted me. This precision the shamans could not produce — it kept me alive.\n\n2. Saving craftsmen. Before every massacre I argued: "Pull out the craftsmen, scholars, translators, physicians first." This became standard practice. Tens of thousands extracted from the four cities. Most of Karakorum\'s later builders were these "saved" hands.\n\n3. Writing. Over nine years I wrote the Xiyou Lu (Record of a Western Journey) — geography, cities, customs along the route. Still a core primary source for 13th-century Central Asia.\n\nBut at night I was often alone. The Secret History (1240) records that on this campaign I "could not sleep at night." For nine years I was torn between the conqueror\'s clerk and the orphan of fallen states.',
      },
      deliverGoal: 'N5 1219-1227 西征随行 9 年 + 4 城屠在场 (家族 65 年第三次文明灭绝但这次身份是执行者随行) + 占卜 + 救工匠 + 写《西游录》 + 「执行者 vs 亡国遗民」夜不能寐',
      engagementHook: '前两次文明灭绝我是「亡国遗民」——这一次 1219-21 我是「执行者随行」。同一个我——9 年里夜不能寐。你怎么读这种身份撕裂？',
      expectsRealAnswer: false,
    },
    {
      id: 'yc-n6',
      type: 'narrative',
      content: {
        cn: '1227 年 8 月 25 日 Chinggis 死于六盘山（详见 Lens 1 N9）。我 37 岁——失去保护人——一个 9 年随行的契丹文书在蒙古宫廷里突然没了靠山。\n\n按蒙古传统，大汗死后 Kurultai 选新汗，但往往拖几年。1227-1229 是真空期——Chinggis 诸子（朮赤已死，察合台、窝阔台、拖雷）相斗，我只能装病退回家，闭门读佛经 + 写诗。\n\n1229 年 Kurultai 在 Kerulen 河边召开，按遗嘱选三子窝阔台（Ögedei）即位。Ögedei 性格跟父亲不同，好酒 + 怠政 + 但听人劝——这是我的机会。\n\n但 1229-1230 蒙古宫廷有一个尖锐辩论——彻底改变华北命运——我被卷在最中央：\n\n蒙古贵族里有一派（Chinggis 老臣 + 千户长们）主张：「华北 + 西夏的农田全改牧场——汉人、党项人不能放牧就杀。蒙古人的财产是马牛羊，不是稻麦。」\n\n这个方案如果执行——华北 + 西北千万 Han 人 + Tangut 人灭族——21 世纪不会有「中国」这个连续文明。\n\n我反对。Ögedei 没立刻表态。\n\n这件事的份量——我 1218 见 Chinggis、9 年随行——这一切都是为了 1230 年这场辩论。',
        en: 'On 25 August 1227 Chinggis died in the Liupan Mountains (see Lens 1 N9). At 37 I lost my patron. A Khitan scribe who had ridden with him for nine years suddenly had no shelter at the Mongol court.\n\nMongol succession runs through the Kurultai — but elections often take years. 1227-1229 was the interregnum. Chinggis\'s sons (Jochi already dead; Chagatai, Ögedei, Tolui remained) fought it out. I pretended illness, retreated home, read sutras, wrote poems.\n\nIn 1229 the Kurultai met on the Kerulen River and enthroned Ögedei, the third son, per Chinggis\'s will. Different temperament from his father — fond of drink, slack on administration, but receptive to advice. That was my opening.\n\nBut a sharp debate ran through the court in 1229-1230 — and would settle the fate of North China. I was placed at its center.\n\nOne faction — old Chinggis generals and thousand-household commanders — argued: "Convert all Han and Tangut farmland into pasture. Can the Han and Tangut survive on herding? If not, kill them. A Mongol\'s wealth is horses, cattle, sheep — not rice and wheat."\n\nIf that plan went through, tens of millions of Han and Tangut would die. There would be no continuous Chinese civilization in the 21st century.\n\nI opposed it. Ögedei did not yet decide.\n\nThe weight of this moment — my 1218 audience with Chinggis, the nine years of riding with him — everything pointed toward this 1230 debate.',
      },
      deliverGoal: 'N6 1227 Chinggis 死 37 岁失保护人 + 1227-29 Kurultai 真空期闭门读佛经 + 1229 Ögedei 即位 + 1229-30 蒙古内部「华北农田改牧场」派 vs Yelü 反对派 / 这一刻份量决定华北命运',
      engagementHook: '1230 蒙古内部辩论「华北农田全改牧场——汉人不能放牧就杀」——如果通过——21c 没有「中国」这个连续文明。这件事的份量——你怎么掂量？',
      expectsRealAnswer: false,
    },
    {
      id: 'yc-n7',
      type: 'narrative',
      content: {
        cn: '⭐ 1230 年——我 40 岁，给 Ögedei 上的那次谏言，化用《史记》陆贾对汉高祖的名句——「居马上得之，宁可以马上治之乎？」——劝他治国不能只靠马上军威。\n\n这句话课本里都有，但你要先知道当时的辩论结构。我说的不是抽象哲学，是一笔账：\n\n「陛下，华北每年农税征银 50 万两 + 绢 8 万匹 + 粟 40 万石（按金朝 1208 税册推算）。改成牧场，同一片地年产值不到 5 万两。亏 90%。」\n\n「再者，汉人千万你不能全杀。杀人成本（兵力 + 时间）+ 杀完没人种田——蒙古西征要钱要粮，华北是钱粮主源。」\n\n「最后——你父亲西征屠 4 城是因 Khwarezmid 杀使节宣战。华北汉人没杀蒙古使节——按 Yasa 法没有屠城正当性。」\n\nÖgedei 好酒但脑子清醒，算了一晚上账。第二天宣布：华北行 Han 行政，设 10 路宣课使，按 Jin 旧制收农业税 + 商税。我被任命为中书令——1231 年上任。\n\n这一笔账救了千万 Han 农民。但 careful framing：我不是「为汉人」做——是为「蒙古帝国长期财政可持续」。两者结果一样，动机不同。\n\n21 世纪有人把我塑造成「儒家文明守护者」——不准确。我是 Khitan broker，我算的是账，不是文明。',
        en: '⭐ 1230 — at 40 — my remonstrance to Ögedei adapted a famous line from Sima Qian\'s Shiji — Lu Jia\'s warning to Han Gaozu: "You won the empire on horseback — can you govern it on horseback?" I used it to tell Ögedei that ruling cannot rest on cavalry alone.\n\nThat phrase is in every Chinese political-history textbook. But first know the structure of the actual debate. What I said was not abstract philosophy. It was a ledger.\n\n"Your Majesty — the agricultural tax from Han North China (modern Hebei, Henan, Shandong, Shanxi) brings in 500,000 taels of silver, 80,000 bolts of silk, and 400,000 piculs of grain a year — extrapolated from Jin 1208 tax registers. Convert it to pasture — the same land grazing horses and cattle yields under 50,000 taels. A 90% loss."\n\n"Second — the Han are tens of millions. You cannot kill them all. Manpower and time cost — and once they\'re killed there\'s no one to till. The western campaigns need silver and grain. North China is the main source."\n\n"Third — your father sacked four western cities because Khwarezmid had killed his envoys. The Han have killed no Mongol envoys. Under his own Yasa, there is no justification for massacre."\n\nÖgedei drank, but his head was clear. He ran the numbers overnight. Next day he announced: North China to be administered as Han agricultural land. Ten Tax Circuits established. Land and commercial tax collected on the Jin model. I was appointed Chief Secretary; took office in 1231.\n\nThis ledger saved tens of millions of Han peasants. Careful framing: I did not do it "for the Han." I did it for the long-run fiscal sustainability of the Mongol empire. Outcome the same; motive different.\n\nIn the 21st century some make me into "guardian of Confucian civilization." Not accurate. I was a Khitan broker. I ran ledgers — not civilizations.',
      },
      deliverGoal: 'N7 ⭐ 1230 谏 Ögedei 「马上得天下不可以马上治之」40 岁 + 真正辩论结构是 3 笔账 (税收 90%亏 / 没人种田 / Yasa 法无正当性) + 1231 任中书令 + careful framing 我不是为汉人是为蒙古帝国财政',
      engagementHook: '21c 把我塑造成「儒家文明守护者」——但我自己说我算的是账不是文明。同一件事——「为汉人」跟「为蒙古帝国财政」——结果一样动机不同——你怎么读？',
      expectsRealAnswer: false,
    },
    {
      id: 'yc-n8',
      type: 'narrative',
      content: {
        cn: '1235 年——我 45 岁，Ögedei 决定建蒙古正式都城 Karakorum（哈剌和林，今蒙古国后杭爱省）。\n\n我在朝参政，推汉法治理、保 4 教免税，延续 Chinggis 1206 Yasa 的宗教宽容（careful framing：「我亲自设计了这座城」是后世传说，史料未坐实）。Karakorum 后来 4 教并立：佛寺（汉传 + 藏传）、道观（全真派，Chinggis 1222 给免税）、清真寺（Sunni）、景教教堂（服务宫廷克烈部基督徒，含 Sorghaghtani，见 Lens 3）。\n\n4 教神职人员一律免税——延续 Yasa 的 toleration，但 Karakorum 把它从「草原政策」变成「都市里并排的 4 座神殿」。Rashid al-Din《史集》1306 说它是「13 世纪最多元的都市，胜过巴格达 + 君士坦丁堡 + 长安」——有夸大，但 4 教物理共存确实在那两城没做到。\n\n这种多元跟我 Khitan 背景对得上——辽朝 200 年就是 Khitan + Han + Bohai + Uighur 多族并立，我把这经验带进了朝廷。但 careful framing：4 教并立不是「宗教自由」（19 世纪西欧概念），是 13 世纪「分而治之」的最低成本工具。',
        en: '1235 — at 45 — Ögedei decided to build the empire its first formal capital, Karakorum (modern Övörkhangai, Mongolia).\n\nI was serving at his court then, pressing for Han-style administration and keeping all four faiths tax-exempt — continuing the religious toleration of Chinggis\'s 1206 Yasa (careful framing: the claim that "I personally designed this city and its four-direction layout" is a later legend the sources do not confirm). Karakorum grew into something almost nowhere in the 13th-century world had — a four-religion capital.\n\nBuddhist temples — Han Mahayana and Tibetan Vajrayana coexisting — abbot a Sakya monk from Western Xia.\nDaoist abbey — masters from Qiu Chuji\'s Quanzhen lineage (Chinggis had granted Quanzhen tax exemption after meeting Qiu Chuji in 1222).\nSunni mosque — imam descended from Bukhara scholars "saved" out of the 1220 sack.\nNestorian church — for the Kereit Christians at court, including Sorghaghtani (see Lens 3).\n\nClergy of all four religions tax-exempt. This continued Chinggis\'s 1206 Yasa toleration clause — but Karakorum turned it from steppe policy into four houses of worship side by side in one city.\n\nRashid al-Din (Compendium of Chronicles, 1306) called Karakorum "the most plural city of the 13th-century world — surpassing Baghdad, Constantinople, and Chang\'an." That overstates — but the physical coexistence of four religions in one capital was achieved in neither Baghdad nor Constantinople.\n\nThis pluralism fit my Khitan background. Liao\'s 200 years had run on Khitan-Han-Bohai-Uighur coexistence — I carried that lived experience of "plurality can be governed" into the Mongol court.\n\nCareful framing: four-religion coexistence is not "religious freedom" — a 19th-century Western concept. In 1235 it was a 13th-century political instrument — the lowest-cost version of divide-and-rule.',
      },
      deliverGoal: 'N8 1235 Ögedei 建 Karakorum 45 岁 + 楚材在朝推汉法治理 + 保 4 教免税延续 Yasa toleration (careful framing：「他亲自设计城+四方位布局」是后世传说史料未坐实) + Karakorum 后来成 4 教并存之都 + Khitan 多元治理经验 + careful framing 不是宗教自由是 13c 治理工具',
      engagementHook: '1235 Karakorum 4 教并立——比巴格达 + 君士坦丁堡多元。但这不是「宗教自由」（19c 西欧概念）——是 13c「分而治之」最低成本版本。你怎么读这种「同一件事不同框架」？',
      expectsRealAnswer: false,
    },
    {
      id: 'yc-n9',
      type: 'narrative',
      content: {
        cn: '1235-1241 年——我 45 到 51 岁——Ögedei 派 Subotai（速不台）跟 Batu（拔都，朮赤之子）率 15 万骑兵第二次西征——Pax Mongolica 前最后一波大军事行动，打的是 Chinggis 没碰过的 Cuman 草原 + 基辅罗斯 + 波兰 + 匈牙利。\n\n1240 年 12 月 Subotai 屠 Kiev——基辅罗斯 200 年统治终结（1223 Kalka 河战役的 18 年后续，见 Lens 1 N8）。1241 年 4 月 Legnica 战役全歼波兰-条顿骑士团联军；几天后 Mohi 战役全歼匈牙利 Béla IV 的 10 万军，90% 城镇被毁。\n\n但我留在 Karakorum 没随行。我 51 岁身体不行，Ögedei 留我管帝国行政——这比战场更重要。\n\n蒙古军 1242 年突然撤退——Ögedei 1241 年 12 月死，按蒙古传统各支系王公必须返回投票选新汗，Subotai + Batu 不得不停止征服。\n\n21 世纪欧洲史家争论「Ögedei 不死，蒙古会不会打到大西洋」——事实是 Karakorum 一个老人的死决定了 1242 年欧洲不被征服。这就是欧亚一体化的残酷数学——草原首都一个政治真空，震动 8000 公里外的战场。',
        en: '1235-1241 — ages 45 to 51 — Ögedei sent Subotai and Batu (Jochi\'s son) with 150,000 cavalry on the second western campaign — the last great military operation before Pax Mongolica.\n\nThis wave hit territory Chinggis had never touched — the Cuman steppe, Kievan Rus, Poland, Hungary.\n\nDecember 1240 — Subotai sacked Kiev. End of 200 years of Kievan Rus (see Lens 1 N8 — the 18-year continuation of the 1223 Kalka Battle).\n\nApril 1241 — the Battle of Legnica (modern Poland) annihilated the combined Polish-Teutonic Knight force; days later the Battle of Mohi destroyed King Béla IV of Hungary\'s 100,000 troops on the Sajó River. 90% of Hungarian towns destroyed.\n\nI stayed in Karakorum. I was 51, my body failing — and Ögedei kept me back to run imperial administration. That mattered more than the battlefield.\n\nThe Mongol army withdrew abruptly in 1242. Ögedei died December 1241. By Mongol tradition every branch-line prince had to return to vote in the Kurultai. Subotai and Batu had to halt the European conquest.\n\n21st-century European historians still argue: "Had Ögedei not died, would the Mongols have reached the Atlantic?" My view is not the point. The fact is that the death of one old man in Karakorum decided that Europe in 1242 was not conquered.\n\nThis is the brutal arithmetic of 13th-century Eurasian integration. A political vacuum in one inland steppe capital reverberated 8,000 km away on the European battlefield.',
      },
      deliverGoal: 'N9 1235-41 第二次西征 (Subotai + Batu) 但我留 Karakorum 51 岁身体不行 + 1240.12 Kiev 屠 + 1241.4 Legnica + 1241.4 Mohi + 1241.12 Ögedei 死蒙古军撤退 + Eurasia 一体化「Karakorum 真空震动 8000km 外欧洲」',
      engagementHook: 'Karakorum 一个老人的死——决定 8000km 外欧洲 1242 年不被征服。13c Eurasia 一体化的残酷数学——你今天身边有这种「一处真空震动远方」的事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'yc-n10',
      type: 'narrative',
      content: {
        cn: '1241 年 12 月 Ögedei 死——我 51 岁——失去第二个保护人。\n\n按蒙古继承，Ögedei 妻 Töregene 摄政。但她跟我不合——她信任伊斯兰商人 Abd al-Rahman 派，主张「华北税收承包给商人，一年 220 万两白银」（我的 4 倍多）。\n\n这是「税收承包」（tax-farming）：商人先一次性付钱给宫廷，再去民间「自由」收税——一年压榨干净，下一年没的收。\n\n我反对。Töregene 不听。1241-1244 我被边缘化，中书令名义还在、实权归 Abd al-Rahman。这 3 年我闭门写《湛然居士文集》14 卷诗文（湛然是我佛教法名），是我留给 21 世纪的核心一手材料。\n\n1244 年 5 月——我 54 岁——死在 Karakorum 家中。\n\n死因两说：《元史》1370 写「因抑郁卒于位」；Juvayni 1252 写「Töregene 派人毒死」，但 Rachewiltz 1962 考证毒杀说是后人附会。careful framing：3 年抑郁 + 政治失意确凿，有没有毒存疑。\n\n我死时身边没人，葬于瓮山（今北京颐和园万寿山）。一个亡了两次国、见了 4 次屠城、救了千万 Han 农民的契丹人——最后葬在 Chinggis 1215 屠过的那座城外。',
        en: 'December 1241 — Ögedei died. At 51 I lost my second patron.\n\nMongol succession: Ögedei\'s widow Töregene became regent until the Kurultai. She and I did not align politically. She trusted the Bukhara-born Muslim merchant Abd al-Rahman\'s faction, which proposed: "Tax-farm North China to Muslim merchants — 2.2 million taels of silver per year." More than four times my 500,000.\n\nTax-farming: merchants pay the court a lump sum up front, then collect "freely" from the population. A textbook short-horizon extractive model. Squeezes one year dry; the second year there is nothing left to take.\n\nI opposed it. Töregene did not listen. From 1241 to 1244 I was sidelined — Chief Secretary in name, real power with Abd al-Rahman. In those three years I wrote the Zhanran Jushi Wenji (Zhanran was my Buddhist name) — 14 volumes of verse and prose, plus my preface to the Recorded Sayings of Master Wansong. This corpus is the primary material I left for the 21st century.\n\nMay 1244 — at 54 — I died in my house in Karakorum.\n\nTwo accounts of the cause. The Yuanshi (1370): "He grew despondent and died in office." The Persian historian Juvayni (1252): "Poisoned at Töregene\'s order." Igor de Rachewiltz\'s 1962 study treats the poisoning version as later embellishment — the court was politicized, but there is no direct evidence. Careful framing: dying at 54 was not early by 13th-century standards; three years of depression and political defeat are certain; whether there was poison is open.\n\nWhen I died, no one was near me. I was buried at Wengshan (today\'s Wanshou Hill in the Summer Palace, western Beijing). The grave still stands — a cultural-heritage site of Haidian District. A Khitan twice-orphaned of his country, witness to four massacres, savior of tens of millions of Han peasants — buried at last just outside the city Chinggis had sacked in 1215.',
      },
      deliverGoal: 'N10 1241 Ögedei 死失第二保护人 + Töregene 摄政信 Abd al-Rahman tax-farming 220 万两 (我 50 万的 4 倍) + 我反对被边缘化 3 年闭门写《湛然居士文集》+ 1244.5 死 54 岁 + 死因 2 说 (元史抑郁 vs Juvayni 毒杀) Rachewiltz 1962 careful framing + 葬北京瓮山 (Chinggis 1215 屠的城外)',
      engagementHook: '我葬在 Chinggis 1215 屠过的那座城外。Khitan + 亡两次国 + 见 4 屠 + 救千万 Han 农民——最后葬在征服者屠过的城外。这种「圆环」——是命运还是政治？',
      expectsRealAnswer: false,
    },
    {
      id: 'yc-n11',
      type: 'synthesis',
      content: {
        cn: '我 1244 死——54 岁——一辈子干了什么？\n\n身份层：1190 出生我是「亡了 65 年的辽朝遗民契丹贵族」；1215 中都陷，家族 65 年内见两次文明灭绝；1218 28 岁成了世界征服者的私人秘书；1230 40 岁用 3 笔账救了千万 Han 农民；1244 葬在征服者屠过的城外。\n\n核心身份不是「汉文化代言人」——是 bilingual broker——夹在 Chinggis 草原帝国跟 Han 农业文明之间，两边都不属于。\n\n这种人 21 世纪你见过吗？想 30 秒。几个样本：\n\n移民二代——回 A 国被当外国人，在 B 国仍被叫「外来者」。\n双语同传——箱里翻 8 小时两边都信任他，散会后不属于任何一方。\n跨界顾问——给客户做战略，既不是内部人也不是 pure 学者，夹在执行跟分析之间。\n国际谈判中介——以巴谈判桌上的第三方，双方都给他信息，但都不真正信任他。\n海外华人 ABC——英语母语 + 中文勉强——回国被叫 ABC，在美国仍被问「你从哪里来？」\n\n这些 21 世纪 lonely-mediator——跟我 13 世纪 Khitan 处境结构相同。\n\n你身边、你家里、你自己——有这种「夹在中间」的人吗？这种身份是负担、是优势、还是两者都是？你怎么评？',
        en: 'I died in 1244 at 54. What did the life amount to?\n\nThe identity layers: born 1190 a Khitan aristocrat from a house gone 65 years; in 1215 my family witnessed its second civilizational collapse in 65 years; at 28 in 1218 I became the private secretary of the conqueror of the world; at 40 in 1230 I used three columns of a ledger to save tens of millions of Han peasants; in 1244 I was buried outside the city the conqueror had sacked.\n\nThe core identity is not "Han spokesman." It is bilingual broker — wedged between Chinggis\'s steppe empire and Han agricultural civilization, belonging to neither side.\n\nIn the 21st century have you met that kind of person — the one who belongs to neither side? Think for 30 seconds.\n\nSome samples you may have met:\n\nSecond-generation immigrant. Parents came from country A to country B. Born in B. Treated as foreign back in A, as outsider in B.\nSimultaneous interpreter. Eight hours in the booth. Both delegations trust him. After the session he belongs to neither.\nCross-disciplinary consultant. Strategy for a client. Neither company insider nor pure academic. Caught between execution and analysis.\nInternational mediator. Third party at an Israeli-Palestinian table. Both sides feed him information. Neither truly trusts him.\nABC (American-Born Chinese). English native, Chinese halting, Chinese parents, American identity. Called ABC in China. Asked "where are you from?" in America.\n\nThese 21st-century lonely-mediators share my 13th-century Khitan structural position.\n\nIn your circle, your family, yourself — is there someone wedged in the middle? Is that identity a burden, an advantage, or both at once? How do you read it?',
      },
      deliverGoal: 'N11 expectsRealAnswer:true — 核心身份 bilingual broker 不是 Han 代言人 + 21c 5 个 lonely-mediator 样本 (移民二代 / 同传 / 跨界顾问 / 国际谈判中介 / ABC) + 「身边有这种人吗 / 自己是吗 / 负担还是优势」',
      engagementHook: '现在权衡这两遍读法：一遍说我「夹在中间」是优势，正因两边都不属于，我才能用 3 笔账救千万 Han 农民；另一遍说这是负担，我两边都不被信任、最后孤独死。对我这条命，哪一遍更真？想 30 秒，写下来。',
      expectsRealAnswer: true,
    },
    {
      id: 'yc-n12',
      type: 'synthesis',
      content: {
        cn: '最后——跨文明 5 个 lonely-mediator 对照：\n\n1. 我，耶律楚材（13c Khitan）——夹在草原帝国跟 Han 文明之间，两边都不属于。\n\n2. Ibn Battuta（14c 摩洛哥人）——30 年走遍伊斯兰世界，回乡反成「异国之人」。\n\n3. las Casas（16c 西班牙修士）——为印第安人辩护，西班牙人当他「叛徒」、印第安人当他「外人」。\n\n4. Erasmus（16c 荷兰人文主义者）——拒绝在 Luther 跟天主教之间站队，两边都骂他，孤独死，但 16c 后欧洲「中间派」都是他后裔。\n\n5. 苏轼（11c 北宋）——新旧两党都不容他，被轮流贬，却写出宋词最高峰（详见唐宋那段历史）。\n\n5 个人 5 种文明 5 个世纪——同一结构：两边都不属于 + 常孤独死 + 后世评价远高于生前。21 世纪 AP DBQ 训练你「hold contradictions」——看到 broker 的价值跟代价。\n\nPax Mongolica 是真的，我「两边都不属于」也是真的，同一个我。\n\n但我保住的只是华北 Han。千万南宋 Han 1279 崖山亡国，元朝四等人制把 Han + 南人压最底——这我都没看到。\n\n你身边、你自己——是不是这条链上的一环？',
        en: 'Last — five cross-civilizational lonely-mediators:\n\n1. Me — Yelü Chucai (13c Khitan) — wedged between Chinggis\'s steppe empire and Han agricultural civilization, belonging to neither.\n\n2. Ibn Battuta (14c Moroccan) — from 1325 spent 30 years traversing the Islamic world; dictated the Rihla on his return. Witness to nine civilizations — and back in Tangier he had become a stranger.\n\n3. Bartolomé de las Casas (16c Spanish friar) — sailed with the conquistadors, then turned and spent 50 years defending the indigenous Americans. The Spanish court treated him as a traitor; the indigenous as Spanish.\n\n4. Erasmus (16c Dutch humanist) — refused to take sides between Luther and Rome: "Both sides err." Both sides attacked him; he died alone in 1536 — but every European centrist since descends from him.\n\n5. Su Shi (11c Northern Song — see the Tang-Song topic) — the New Party found him too conservative, the Old Party too tame; demoted by each in turn his whole life. He wrote the high peak of Song ci poetry. Loneliness was his soil.\n\nFive people, five civilizations, five centuries — same structure: belonging to neither side, often dying lonely, posthumous reputation far higher than the living one. The role exists in every civilization — achievement and loneliness often inhabit the same body. 21st-century AP DBQ training asks you to hold contradictions — the broker\'s value and cost at once — without flattening into binaries.\n\nPax Mongolica is real, but so is my own "belonging to neither side." The same person.\n\nBut I saved only the Han of the north. The tens of millions of Southern Song Han fell with the dynasty in 1279 at the naval battle of Yashan — Wen Tianxiang martyred, Lu Xiufu carrying the boy emperor into the sea. In 1271 Kublai named the new dynasty "Yuan"; its four-class system pinned the Han and Southerners at the bottom. I died in 1244 — none of this I lived to see.\n\nIn your life — yourself — are you a link on this chain?',
      },
      deliverGoal: 'N12 closing meta — 5 lonely-mediator 对照 (Yelü 13c / Ibn Battuta 14c / las Casas 16c / Erasmus 16c / Su Shi 11c) + 同 pattern 5 世纪 + bilingual broker 两边都不属于 + 后世评价高于生前 + AP DBQ hold contradiction + 「你是这条链上的一环吗」',
      engagementHook: '走完我这一生——1230 用 3 笔账救千万 Han 农民、却两边都不属于、1244 孤独死，后世评价远高于生前。你会怎么评价这样一个 bilingual broker，「夹在中间」到底是负担还是优势？再想一步：5 种文明 5 个世纪同一种结构——你身边、你自己，是不是这条 lonely-mediator 链上的一环，你会怎么对待 TA？',
      expectsRealAnswer: true,
    },
  ],
};
export var sorghaghtaniLens = {
  id: 'sorghaghtani',
  name: 'Sorghaghtani Beki',
  nameCn: '唆鲁禾帖尼别吉',
  role: 'receiving-end',
  perspectiveTag: 'female-political-architect',
  description: {
    en: 'She is a thirteen-year-old Christian girl from a steppe people that has just been wiped off the map, handed as a war-bride to the fourth son of the man who destroyed her clan, reading her Syriac Bible by lamplight in the conqueror\'s tent. This pass walks fifty years with her as an illiterate mother who quietly teaches all four sons to read in four different languages, and then maneuvers the throne of the largest land empire in history away from one branch of her in-laws and into her own.',
    cn: '她是一个十三岁的聂斯脱里派基督徒女孩,刚被刚刚灭掉她整个克烈部的家族当作战利品赐给 Chinggis 的四儿子,夜里在征服者的毡帐里就着油灯读叙利亚文圣经。这一遍让你跟她走五十年,看一个自己不识字的母亲怎么悄悄让四个儿子学会四种不同的文字,再亲手把全世界最大陆地帝国的汗位从婆家的另一支撬到自己这一支。',
  },
  storyboard: [
    {
      id: 'sorg-n1',
      type: 'narrative',
      content: {
        cn: '我大约生于 1190 年——蒙古高原西北——Kereit（克烈部）。\n\n你 21 世纪 7 年级听过 Mongol（蒙古），可能没听过克烈部。我必须先讲清楚：\n\n12 世纪末蒙古高原不是一个国家——是 5-6 个游牧部落联盟在草原上互相打。Chinggis 还没出生时，最大的部落联盟之一就是克烈部——我父亲 Jakha Gambhu 是首领家族，叔父王罕（Toghrul）是克烈部大汗。\n\n克烈部有一个特殊之处：我们 11 世纪起信奉景教（Nestorian，即聂斯脱里派，唐代传入中国称景教）——\n\n景教是东方早期基督教的一支，5 世纪从拜占庭被驱逐后，沿 Silk Road 传到波斯、中亚、再到蒙古高原。克烈部首领家族世代受洗。我从小读 Syriac（叙利亚文）圣经——这不是拉丁文也不是希腊文，是中东古文字。\n\n你想象一下——12 世纪末蒙古草原上一个女孩，骑马、放羊、住毡帐，但晚上在蒙古包里读 Syriac 圣经——\n\n这就是我童年。\n\n父亲 Jakha Gambhu 跟叔父王罕都跟一个比他们小的盟友走得近——那个人叫 Temüjin（铁木真）——后来叫 Chinggis Khan——\n\nChinggis 跟王罕 1190 年代结成 anda（结义兄弟）——这层关系，后来决定了我的人生。',
        en: 'I was born around 1190 — northwest Mongolian plateau — to the Kereit confederation.\n\n21st-century 7th grade has heard "Mongol," probably not "Kereit." I have to set the ground first:\n\nIn the late 12th century the Mongolian plateau was not a single state — it was five or six nomadic confederations fighting each other on the steppe. Before Chinggis was even born, one of the largest confederations was the Kereit. My father Jakha Gambhu came from the chiefly family. My uncle Toghrul was the Kereit Khan.\n\nThe Kereits had one peculiar feature: from the 11th century we were Nestorian Christians —\n\nNestorianism is an early Eastern branch of Christianity. Expelled from Byzantium in the 5th century, it traveled the Silk Road into Persia, Central Asia, and on into the Mongolian steppe. The Kereit chiefly family was baptized for generations. From childhood I read the Syriac Bible — not Latin, not Greek, but the old Middle Eastern script.\n\nPicture it — a girl on the late-12th-century Mongolian steppe, riding, herding sheep, sleeping in a felt yurt, but reading Syriac scripture by lamplight at night —\n\nThat was my childhood.\n\nMy father Jakha Gambhu and my uncle Toghrul both kept close to a younger ally — a man called Temüjin — later, Chinggis Khan —\n\nChinggis and Toghrul became anda — sworn brothers — in the 1190s. That bond would decide my life.',
      },
      deliverGoal: 'N1 ~1190 出生 / Kereit 部 / Toghrul Khan (Chinggis 同盟者) 侄女 / Christian Nestorian 教育 (Syriac 圣经)',
      engagementHook: '12 世纪末蒙古草原上一个女孩——骑马放羊但晚上读 Syriac 圣经——你 21 世纪有没有过类似「身边人不知道你另一面」的感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'sorg-n2',
      type: 'narrative',
      content: {
        cn: '1203 年——我 13 岁。\n\nChinggis 跟叔父王罕翻脸了。表面原因是 Chinggis 求王罕的女儿给儿子做妻被拒；深层是 Chinggis 部落 1190 年代急速崛起，王罕的儿子 Senggum 不愿当他的下属——\n\n1203 年 Chinggis 突袭克烈部。我们败得很彻底，叔父王罕逃亡途中被乃蛮部（Naiman）杀死，头被送到乃蛮王那里——克烈部从此不复存在。\n\n按蒙古战俘习俗，失败方的女子被胜利方瓜分。我 13 岁——Chinggis 把我赐给他第四子 Tolui（拖雷），那年大概 11 岁，比我小 2 岁。\n\n这是政治联姻不是感情。Chinggis 有 2 个目的：把克烈首领家族（景教 + 草原贵族血统）绑进自己家族；安抚克烈旧部不再造反。\n\n7 年级 careful framing——别按 21 世纪「13 岁结婚」评判 13 世纪：12-13 世纪欧亚贵族女子婚龄普遍 12-15 岁，这是历史现实，让你看清那个时代女性的位置。\n\n13 岁那一刻——我从「克烈大汗的侄女」变成「Mongol 第四子的妻子」。我的部族灭了，我的语言、宗教、姓氏，从此活在征服我的家族里。',
        en: '1203 — I was 13.\n\nChinggis and my uncle Toghrul fell out.\n\nThe surface trigger: Chinggis asked Toghrul for one of his daughters as a wife for his son; Toghrul refused. The deeper cause: Chinggis\'s confederation rose fast in the 1190s, and Toghrul\'s son Senggum did not want to be Chinggis\'s subordinate —\n\n1203 — Chinggis launched a surprise strike on the Kereit. We were broken completely. My uncle the Khan fled, was killed by the Naiman, and his head was sent to the Naiman king —\n\nThe Kereit confederation ceased to exist —\n\nBy steppe-war custom the women of the losing side were redistributed among the victorious men. I was 13 —\n\nChinggis gave me to his fourth son, Tolui —\n\nTolui was about 11 — two years younger than me —\n\nThis was a political marriage, not a love match. Chinggis had two goals. First, bind the Kereit chiefly family (Nestorian Christian + steppe noble blood) into his own house. Second, reassure surviving Kereit retainers so they would not rebel.\n\n7th-grade careful framing — do not judge the 13th century by 21st-century norms on a "13-year-old bride." Across 12th-13th-century Eurasia noble girls married at 12-15. This is not an excuse — it is history, so you can see where women stood in that era.\n\nIn that moment at 13 — I went from "niece of the Kereit Khan" to "wife of the Mongol fourth son" —\n\nMy people were gone.\n\nMy tongue, my religion, my name — would now live inside the family that had destroyed mine.',
      },
      deliverGoal: 'N2 1203 Chinggis 灭 Kereit / Sorghaghtani 13 岁被赐 Tolui (Chinggis 4 子) 政治婚 / careful framing 12-13c 欧亚贵族女子婚龄',
      engagementHook: '13 岁——你的部族被灭——你被赐给灭你部族的家族——你怎么活？',
      expectsRealAnswer: false,
    },
    {
      id: 'sorg-n3',
      type: 'narrative',
      content: {
        cn: '1209-1219——10 年——我生了 4 个儿子。按 Rashid al-Din《史集》1306 的排序：长子 Möngke（蒙哥，1209）、次子 Kublai（忽必烈，1215）、三子 Hulagu（旭烈兀，1218）、四子 Ariq Böke（阿里不哥，1219）。\n\n10 年 4 子，按蒙古高层标准也算密集。但我做了一件其他高层贵妇不太做的事——让 4 子全学识字。我自己其实是文盲（权威记载如此），但深知识字的分量，请来各文明的老师、亲自督着 4 子学。\n\n你 7 年级可能觉得「让孩子识字有什么稀奇」——但要懂 13 世纪蒙古文化：Chinggis 自己不识字，蒙古 1204 年才让被俘的回鹘文官塔塔统阿用回鹘字母创制蒙古文字，第一代领袖几乎全文盲；蒙古传统认为男孩学骑马 + 射箭 + 摔跤，识字是被征服的农耕民族的事；蒙古女性管账放牧，但「教孩子读书」不是她们的角色。\n\n我做了——4 子全识字：Möngke 识蒙古文 + 突厥语；Kublai 学汉文（后来建元朝的根基）；Hulagu 学波斯文（后来建 Ilkhanate 用得上）；Ariq Böke 留蒙古传统。\n\n那时我只是一个母亲，不知道我在「设计帝国」——但 50 年后这 4 个识字的儿子把整个 Eurasia 分成了 4 块。',
        en: '1209-1219 — ten years — I bore four sons.\n\nThe standard ordering, as recorded by Rashid al-Din\'s Jami al-Tawarikh (1306):\n\n- Möngke — born 1209 — eldest\n- Kublai — born 1215 — second\n- Hulagu — born 1218 — third\n- Ariq Böke — born 1219 — youngest\n\nFour sons in ten years — dense even by Mongol elite standards —\n\nBut I did one thing other Mongol high-born wives did not generally do —\n\nI made sure all four learned to read. I could not read myself (that is the truth — the sources record me as illiterate), but I understood exactly what literacy was worth — so I brought in teachers from each civilization and personally drove all four sons to study.\n\nA 21st-century 7th grader may say "what is unusual about having children learn to read?" Listen to the 13th century:\n\nFirst — Chinggis himself was illiterate. Mongols had only just acquired writing in 1204 (the year after I was given to Tolui), when Chinggis ordered a captured Uyghur scribe, Tatar-Tonga, to adapt the Uyghur script for Mongolian. The entire first generation of the Mongol leadership was almost wholly unlettered.\n\nSecond — Mongol custom said: at five, a boy learns horsemanship, archery, and wrestling — the "three manly games" of naadam. Reading? That was for the conquered farming peoples (Chinese, Persians). Not for steppe warriors.\n\nThird — Mongol women in the tents managed accounts, herds, logistics — but "teaching the children to read" was not their conventional role.\n\nI did it —\n\nAll four were literate. Möngke read Mongol and Turkic. Kublai studied Chinese (the foundation for his future Yuan dynasty). Hulagu took Persian (which he would use later to govern the Ilkhanate). Ariq Böke kept the steppe tradition closest.\n\nI did not know I was "designing an empire." I was simply a mother —\n\nBut fifty years later — these four literate sons — would divide all Eurasia into four pieces.',
      },
      deliverGoal: 'N3 1209-1219 4 子 (Möngke 1209/Kublai 1215/Hulagu 1218/Ariq 1219) 出生 / 她安排督导 — 4 子全识字 (她本人文盲但请师督学, 蒙古高层稀有, Chinggis 自己文盲, 1204 才创制蒙古文)',
      engagementHook: '13 世纪一个母亲做的「教孩子识字」——50 年后 4 子分了 Eurasia——你 21 世纪做过什么「当时不知道但后来重要」的小事？',
      expectsRealAnswer: false,
    },
    {
      id: 'sorg-n4',
      type: 'narrative',
      content: {
        cn: '1227 年 8 月——Chinggis Khan 在征西夏途中死，65 岁（死因史料模糊，一说坠马一说染病）。\n\n他死前已定继承：长子 Jochi（朮赤，1225 已先死）的伏尔加西领地给孙辈 Batu，后来成 Golden Horde（金帐汗国）；次子 Chagatai（察合台）得中亚；三子 Ögedei（窝阔台）是指定大汗，1229 即位；四子 Tolui（拖雷）是我丈夫。\n\n蒙古有个独特习俗 ulus jin——「最小的儿子继承祖庭」。Tolui 作为四子继承 Chinggis 的核心牧场（蒙古本部）+ 大部分军队（10 万 keshig 卫军里 7-8 万）。他是 Chinggis 最爱、也是军事最强的儿子（西征攻下 Merv 是关键战役之一）。\n\n但他放弃了汗位。按 kurultai 推选传统他本可以争，却不争，监国 2 年后在 1229 年春 Kerulen 河畔的 kurultai 公开把汗位让给兄长 Ögedei。\n\n这是 Tolui 一生最大的政治退让。他为什么不争？答案在 Chinggis 的临终安排、在「兄弟和」逻辑、也在我跟 Ögedei 妻 Töregene 之间已形成的微妙平衡。\n\n那 2 年我每天看着丈夫在「争」跟「让」之间——他选了让——我跟他一起选了「让」。',
        en: 'August 1227 — Chinggis Khan died on the Tangut campaign at 65. The cause is unclear in the sources — one tradition says a riding fall, another a fever —\n\nBefore his death Chinggis had set the succession:\n\n- Eldest son Jochi — already dead in 1225, before his father; his Volga-west lands went to his son Batu and later became the Golden Horde.\n- Second son Chagatai — got Central Asia, later the Chagatai Khanate.\n- Third son Ögedei — designated as the next Khagan; formally enthroned in 1229.\n- Fourth son Tolui — my husband —\n\nMongol custom included a peculiar rule called ulus jin — "the youngest son inherits the home hearth." As fourth son, Tolui kept Chinggis\'s core pastures (the Mongol heartland) plus most of the army — about 70,000 to 80,000 of the roughly 100,000 keshig guards —\n\nTolui was Chinggis\'s favorite youngest son — and his strongest soldier (the 1219-1223 Khwarezm campaign turned on Tolui\'s sack of Merv) —\n\nBut he stepped aside from the throne.\n\nUnder Mongol custom (the kurultai assembly elects the Khan) Tolui could have competed. He did not; he let his elder brother Ögedei take it.\n\nChinggis died in 1227. Spring 1229 — the kurultai met at the Kerulen River. After two years as regent (1227-1229), Tolui publicly handed over the great-khanship to Ögedei —\n\nIt was the largest political concession of his life —\n\n21st-century 7th grader — why not compete?\n\nThe answer lies in Chinggis\'s deathbed arrangements — and in the Mongol custom of "harmony among brothers" — and in the careful balance between me (Tolui\'s wife) and Töregene (Ögedei\'s wife) —\n\nThose two years of waiting — every day I watched my husband stand between "fight" and "yield" —\n\nHe chose yield —\n\nAnd I chose with him — yield.',
      },
      deliverGoal: 'N4 1227 Chinggis 死 / 1229 Ögedei 即位 / Tolui 是 Chinggis 最爱小子 (ulus jin 习俗 + 7-8 万 keshig 军) 但放弃汗位 (Mongol 兄弟和习俗) / Sorghaghtani+Tolui 一起选「让」',
      engagementHook: '丈夫本可以争汗位——他选「让」——你跟他一起选——你 21 世纪有没有过「我们一起选不争」的时刻？',
      expectsRealAnswer: false,
    },
    {
      id: 'sorg-n5',
      type: 'narrative',
      content: {
        cn: '1232 年——我 42 岁——丈夫 Tolui 突死。\n\n这段要 careful framing。《蒙古秘史》跟 Rashid al-Din《史集》1306 都记：1232 年初 Ögedei Khan 征金途中病重，萨满说要做「代死」仪式——亲属喝下祭祀过的「符水」替皇帝去死。Tolui 自愿喝，几天后死。\n\n21 世纪学界（De Nicola 2017 / Favereau 2021）framing：「代死」在萨满文化里是真概念，但 Tolui 是不是真因符水而死无法核实，可能是后世美化「兄弟情」的叙事，也可能是病死或被毒死——21 世纪存疑。\n\n无争议的是：Tolui 突死，我 42 岁守寡，4 子最大 23 岁、最小 13 岁。\n\n之后按蒙古 levirate（夫死继）习俗，寡妇可被丈夫的兄弟或侄子娶以保牧场人口在家族内，Ögedei 提出让自己的儿子 Güyük 娶我——\n\n我拒绝了：「我不能改嫁，4 个儿子还小，我必须专心养他们。」这是蒙古寡妇极少做的事。但因为 Tolui 是 Chinggis 最爱小子 + 我是 Kereit 大汗血统 + 我在军中有威望，Ögedei 没强行。\n\n42 岁那一刻——我从 Tolui 的妻变成 Tolui 系的政治负责人。后面 25 年没改嫁。',
        en: '1232 — I was 42 — my husband Tolui died suddenly.\n\nThis stretch needs 7th-grade careful framing —\n\nThe Secret History of the Mongols (compiled mid-13th century) and Rashid al-Din\'s Jami al-Tawarikh (1306) both record a story:\n\nIn early 1232 Ögedei Khan fell gravely ill on the Jin campaign. The shamans declared a "death-substitution" ritual was needed — the emperor\'s sickness would transfer to a relative who drank consecrated "spirit water" and died in his place —\n\nTolui volunteered, drank the water, and died days later —\n\nThis story — 21st-century scholars (Marie Favereau, The Horde 2021; Bruno De Nicola, Women in Mongol Iran 2017) careful-frame as follows:\n\nFirst — the sources do record the ritual scene; "death-substitution" was a real concept in Mongol shamanic culture.\n\nSecond — whether Tolui actually died because of the spirit water cannot be confirmed by modern historians. The story may have been narratively dressed up later to glorify "brotherly love."\n\nThird — Tolui may simply have died of illness, or been poisoned. The 1230s Mongol elite was politically fierce — Tolui\'s line (the strongest army) and Ögedei\'s line (the throne) were in tension.\n\n7th grade — hear this clearly: "Tolui drank the water for his brother" is a 13th-century narrative; 21st-century scholarship leaves the question open —\n\nWhat is uncontested:\n\nIn 1232 Tolui died suddenly. I was widowed at 42. My eldest son Möngke was 23, my youngest Ariq Böke 13.\n\nAfter Tolui\'s death Ögedei sent envoys — under Mongol levirate custom —\n\nA widow could be passed to her dead husband\'s brother or brother\'s son to keep her pasture lands and household inside the family —\n\nÖgedei proposed that his own son Güyük marry me —\n\nI refused.\n\nI said to Ögedei\'s envoy: "I cannot remarry. My four sons are still young. I must devote myself to them."\n\nThis refusal — was something 13th-century Mongol widows rarely did.\n\nBecause Tolui was Chinggis\'s favorite youngest son, because I came from the Kereit royal line, because I had personal standing in Tolui\'s troops — Ögedei did not force the issue —\n\nAt 42 — I went from Tolui\'s wife — to political head of the Tolui line —\n\nAnd for the next 25 years — I did not remarry.',
      },
      deliverGoal: 'N5 ⭐ 1232 Tolui 突死 (萨满符水替死说 careful framing 史料模糊 De Nicola 2017 / Favereau 2021) / Sorghaghtani 42 岁寡 / 拒绝改嫁 Ögedei 子 Güyük (反 levirate 习俗) — 「我要专心养 4 子」',
      engagementHook: '42 岁守寡——4 子小——传统说你应改嫁——你说不——你 21 世纪有没有过「传统说应该这样但我不」的选择？',
      expectsRealAnswer: false,
    },
    {
      id: 'sorg-n6',
      type: 'narrative',
      content: {
        cn: '1232-1241——9 年——我在 Tolui 旧领地养 4 子。\n\nTolui 领地不在哈剌和林首都圈，在北中国华北边缘（今河北、山西、内蒙古交界）。但 Tolui 作为最小儿子 ulus jin 继承祖庭，这片地虽非首都，却有「最近祖庭」的政治意义。\n\n我每天做两件事。\n\n第一，4 子继续学。Möngke（23 岁）已成年，跟 Ögedei 征欧回来，学军事跟突厥语；Kublai（17 岁）我请汉学者刘秉忠教（1242 正式，但 1230 年代起就让他接触汉文化），学《论语》跟汉地行政；Hulagu（14 岁）我请波斯 Nestorian 学者教 Persian 跟波斯财政（1256 攻波斯靠这底子）；Ariq Böke（13 岁）留蒙古传统。\n\n第二，我让这片地变成「多文明实验场」，支持每一种宗教：Nestorian 基督教（我自己教派）建教堂、伊斯兰捐 madrasa、佛教赠寺产、儒家送钱。\n\n7 年级 careful framing——这不是「圣母」式无差别施舍，是政治运作：让每一派都欠我人情，将来对我 4 子都不构成威胁。\n\n9 年——Tolui 系领地变成北中国最稳的蒙古地方政权。哈剌和林那边 Ögedei 1241.12.11 酒醉死，继承乱局开始——我已经准备好了。',
        en: '1232-1241 — nine years — I raised the four sons in the old Tolui appanage.\n\nThe Tolui lands were not in the Karakorum capital ring; they were on the northern edge of north China — today\'s Hebei-Shanxi-Inner-Mongolia border zone —\n\nThe Tolui line held a peculiar status. As Chinggis\'s youngest son, Tolui inherited the home hearth (ulus jin). The Tolui lands were not the capital — but they carried "closest-to-the-hearth" political meaning.\n\nWhat I did each day:\n\nFirst — the four sons kept learning.\n\nEldest Möngke (23 in 1232) — already grown, returning from Ögedei\'s 1230s European campaign (Russian steppe + Volga) — he kept up military study and Turkic.\n\nSecond son Kublai (17 in 1232) — I specifically arranged the Han scholar Liu Bingzhong of Xingzhou as his tutor (Liu formally took the post in 1242, but Kublai had been exposed to Chinese culture since the 1230s under my direction). He read the Analects and Han-style administration.\n\nThird son Hulagu (14 in 1232) — I brought Nestorian scholars from Persia to teach him Persian and Persian-style fiscal administration. The 1256 conquest of Persia rested on this foundation.\n\nFourth son Ariq Böke (13 in 1232) — kept the steppe tradition — Mongol cavalry warfare and the old Mongol law.\n\nSecond — I turned the Tolui appanage into a multi-civilizational lab.\n\nI funded every religion:\n- Nestorian Christianity (my own confession) — built churches\n- Islam (Hui merchants of north China) — endowed madrasas (Islamic schools)\n- Buddhism (north Chinese Han) — gave temple lands\n- Confucianism (Han literati) — sent stipends\n\n7th-grade careful framing — this was not "saintly" indiscriminate giving. It was political: each faction owed me, and none would later threaten my four sons.\n\nNine years — the Tolui appanage became the most stable Mongol regional regime in north China.\n\nMeanwhile in Karakorum — on 11 December 1241 Ögedei died of drunkenness — and the succession crisis opened —\n\nI was ready.',
      },
      deliverGoal: 'N6 1232-1241 Karakorum 时期 / Sorghaghtani 在 Tolui 旧领地 (北中国) 培养 4 子 / 学 Han 行政 + 突厥语 + Chinese + Persian 多语 / 多宗教捐赠 (Nestorian + 伊斯兰 madrasa + 佛教 + 儒家) — 政治运作不是无差别',
      engagementHook: '9 年——你让一片地方变成「多宗教都欠你人情」——你 21 世纪能想象一个家长在自己社区做这种事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'sorg-n7',
      type: 'narrative',
      content: {
        cn: '1241-1248——7 年——蒙古帝国进入「摄政时代」。\n\n1241.12.11 Ögedei 死。蒙古传统是大汗死后 kurultai 选下任，选不出来时由摄政（regent）暂理。摄政是 Töregene Khatun（脱列哥那）——Ögedei 的妻子、我的大嫂。她乃蛮部出身（1203 年王罕的头就送到乃蛮王那里），跟我有微妙旧族恩怨，也是 13 世纪蒙古高层第二个掌权的女性。她摄政 5 年（1241-1246），想让酗酒的亲生子 Güyük 上位。\n\n这 5 年我表面恭顺：每年送贡品、按时朝拜、不公开反对她。但内里做 3 件事：继续培养 4 子（Möngke 已 32 岁，被派去再次征欧）；继续广交汉地 + 波斯 + 中亚商人攒人脉，她不知道；观察她政治资本耗尽。\n\n1246.8.24 Güyük 终于在 kurultai 被推为大汗——但他即位时已体弱、酗酒、眼疾。我 56 岁，继续等。\n\n1248 年春 Güyük 突然西征，据说要打跟他有旧怨的 Batu（Jochi 系金帐汗国）。但 1248.4.20 他在途中（今乌兹别克 Qum-Sengir）暴死，只当了 2 年大汗。\n\n那一刻——蒙古帝国第二次进入继承空窗——我跟 Möngke 一直在等的窗口开了。',
        en: '1241-1248 — seven years — the Mongol empire entered its "regency era."\n\n11 December 1241 — Ögedei died. By Mongol custom the kurultai assembly elects the next Khan, but during a vacancy a regent administers.\n\nThe regent was Töregene Khatun — Ögedei\'s widow — and my sister-in-law.\n\nTöregene came from the Naiman (recall — the people who killed my uncle Toghrul in 1203). She and I had a delicate old-tribe history — and she was the second woman of the 13th-century Mongol elite to hold power —\n\nShe ruled as regent for five years (1241-1246) and aimed to put her own son Güyük on the throne —\n\nIn those five years I worked the surface: deference.\n\nI sent annual tribute to Karakorum, attended audiences on schedule, never publicly opposed Töregene\'s policies —\n\nBut underneath I did three things:\n\nFirst — kept training the four sons. Möngke, now 32, was sent by Töregene back to the European front (Volga + Hungary; he was a commander at the 1241-1242 Mohi battle).\n\nSecond — kept the cross-faction lines open. Chinese, Persian, and Central Asian merchants came through the Tolui appanage; I received them — Töregene did not see how my network was thickening.\n\nThird — watched Töregene\'s political capital drain.\n\n24 August 1246 — Güyük was finally raised at the kurultai — but he ascended already sick, alcoholic, with failing eyes —\n\nAt 56 — I kept waiting.\n\nSpring 1248 — Güyük abruptly launched a western campaign — the rumored target was Batu (the Jochi line, Golden Horde, with whom Güyük had a quarrel) —\n\n20 April 1248 — Güyük died suddenly on the road (at Qum-Sengir, in today\'s Uzbekistan) — only two years on the throne —\n\nIn that moment — the Mongol empire entered a second succession vacuum —\n\nThe window Möngke and I had been waiting for — opened.',
      },
      deliverGoal: 'N7 1241 Ögedei 死 / Töregene 摄政 5 年 / 1246 Güyük 即位 / Sorghaghtani 谨慎周旋 (表面恭顺 + 内里培养 4 子+广交各派+观察) / 1248.4.20 Güyük 突死',
      engagementHook: '5 年表面恭顺 + 内里布局——你 21 世纪有没有过「等」是最难的功课？',
      expectsRealAnswer: false,
    },
    {
      id: 'sorg-n8',
      type: 'narrative',
      content: {
        cn: '1248-1251——3 年——我做了一辈子最大的政治运作。\n\nGüyük 1248.4.20 死后由他妻 Oghul Qaimish（斡兀立海迷失）摄政——但她很弱。我 58 岁，长子 Möngke 39 岁。\n\n此时帝国 4 大派系：Ögedei 系（汗位旧主）、支持它的 Chagatai 系、跟它结仇的 Jochi 系（Batu）、谦让的 Tolui 系（我跟 4 子）。我的算盘 3 步：结盟 Batu（他跟 Güyük 有仇，立刻支持 Möngke）；给 Chagatai 旧部送礼求中立；孤立 Oghul Qaimish。\n\n1250 年 Batu 开 kurultai 推 Möngke 但有争议。1251.7.1 第二次在 Köde\'e Aral 召开，Tolui 系（7-8 万 keshig）+ Jochi 系都到，对方压不住——Möngke 即位为大汗。汗位从 Ögedei 系移到 Tolui 系，靠我 19 年表面恭顺 + 内里运作。\n\n后续：1252 年 Möngke 处决 Oghul Qaimish + 多名 Ögedei 系贵族，是帝国第一次内部大清洗。careful framing——这不是「英雄母亲」叙事，是政治运作：清洗杀了人是事实，我 19 年「表面恭顺」也是事实。',
        en: '1248-1251 — three years — I executed the largest political operation of my life.\n\nAfter Güyük died on 20 April 1248, by rule his widow Oghul Qaimish became regent. She took the post, but she was weak; she lacked Töregene\'s hand —\n\nI was 58 — eldest Möngke was 39 —\n\nThe Mongol empire by this point had four de facto factions:\n\n- Ögedei line (Töregene–Güyük–Oghul Qaimish, mother-son-daughter-in-law) — the old throne holders\n- Chagatai line (Central Asia) — backed the Ögedei line\n- Jochi line (Golden Horde, Batu) — feuding with the Ögedei line (Güyük had moved against Batu in the 1240s)\n- Tolui line (me and the four sons) — the long-deferential younger-brother line\n\nMy calculation:\n\nFirst — alliance with the Jochi line. I sent envoys to Batu in the Golden Horde proposing Möngke as next Khagan. Batu, with old grievances against Güyük, immediately backed it.\n\nSecond — split the Chagatai line. Through Möngke I sent gifts to old Chagatai retainers, peeling some toward neutrality.\n\nThird — isolate Oghul Qaimish at the Karakorum court —\n\n1250 — Batu held a kurultai inside Golden Horde territory and acclaimed Möngke. But the Ögedei and Chagatai lines did not attend — the legality of that kurultai was disputed —\n\n1 July 1251 — a second kurultai met at Köde\'e Aral in the Mongol heartland. This time Tolui-line troops (the 70,000-80,000 keshig Tolui had left us) + Jochi-line troops both showed up — even where Ögedei and Chagatai delegates came, they could not push back —\n\n1 July 1251 — Möngke was formally enthroned as the fourth Mongol Khagan —\n\nThis was the harvest of nineteen years of design —\n\nThe great-khanship moved from the Ögedei line — through my nineteen years of surface deference and underground maneuver — to the Tolui line (the line of my four sons) —\n\nThe reckoning that followed: in 1252 Möngke executed Oghul Qaimish and several Ögedei-line nobles. This was the Mongol empire\'s first major internal purge —\n\n7th-grade careful framing — this is not a "heroic mother" narrative. This is 13th-century politics. Möngke\'s purge killed people — that is fact. My nineteen years of surface deference were real — also fact. Both stand at once.',
      },
      deliverGoal: 'N8 ⭐ 1248 Güyük 死 / Sorghaghtani 政治运作 (结盟 Jochi 系 Batu + 分化 Chagatai + 孤立 Oghul Qaimish) / 1251.7.1 Möngke 即位 — 蒙古汗位从 Ögedei 系移到 Tolui 系 (Sorghaghtani 19 年布局) / 1252 Möngke 清洗 careful framing',
      engagementHook: '19 年布局——为长子上汗位——你 21 世纪能想象一个母亲做这么长线的事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'sorg-n9',
      type: 'narrative',
      content: {
        cn: '1252 年——我 62 岁——死。\n\n死因史料模糊，一说久病、一说政治压力耗尽。Rashid al-Din《史集》记我「最后几年身体衰弱，但思路清晰到最后」。\n\n死前 Möngke 已即位 1 年。我看到长子坐上 Khagan 位、Kublai 管华北、Hulagu 1253 年要西征波斯——但没看到 Ariq Böke 1260 年自立大汗（8 年后）。\n\n我的葬礼按 Nestorian 基督教礼仪——这是蒙古帝国早期独特的一幕：一个皇太后的葬礼用基督教礼，神父主持，读《诗篇》的 Syriac 译本。我葬在 Tolui 旧领地（今内蒙古或河北一带，具体地点 21 世纪考古未确认）。\n\n50 年后——Marco Polo 1295 从元朝回威尼斯口述游记。他写到 Kublai 时记他母亲是「4 位 khan 的母亲」。Marco Polo 没见过我（他 1271 到元朝时我已死 19 年），是听朝廷里讲我。21 世纪学界（Broadbridge 2018）注意到：全书近 200 章极少提具体女性名字，但他特意写下「Kublai 的母亲」——说明 1290 年代朝廷里我还活在记忆里。\n\n62 岁那一刻——我在床上，4 子里 3 子已独立掌权。我闭眼——接下来的故事是他们的，不是我的。',
        en: '1252 — I was 62 — I died.\n\nThe cause is unclear in the sources — one says long illness, another says political exhaustion. Rashid al-Din\'s Jami al-Tawarikh says I "weakened in body in my last years, but my mind was clear to the end" —\n\nMöngke had been on the throne for one year when I died. I saw my eldest as Khagan. I saw Kublai posted by Möngke to administer north China. I saw Hulagu being prepared for the 1253 western campaign against Persia (he set out after my death). I did not see Ariq Böke set himself up as rival Khan in 1260 — that was eight years later —\n\nMy funeral — was Nestorian Christian.\n\nA peculiar early-Mongol scene: an empress dowager (mother of the Khagan) buried in Christian rite — a Nestorian priest officiating — Psalms read in their Syriac translation —\n\nI was buried somewhere in the Tolui appanage (today in Inner Mongolia or Hebei; the exact site is not confirmed by 21st-century archaeology) —\n\nFifty years later —\n\nBetween 1295 and 1305 — Marco Polo, having returned from Yuan China to Venice in 1295, dictated his Travels in a Genoese prison in 1298-1299. There is a passage —\n\nWriting of Kublai Khan, Marco Polo mentions Kublai\'s mother —\n\nHe records that she was the mother of four khans —\n\nMarco Polo never met me — when he reached Yuan China in 1271 I had been dead 19 years — he heard about me from voices at Kublai\'s court —\n\n21st-century scholars (Anne Broadbridge 2018) note: across nearly 200 chapters, Marco Polo names very few specific women — but he made a point of writing "Kublai\'s mother" —\n\nWhich means: in Kublai\'s court of the 1290s — I was still alive in memory.\n\nAt 62 — I was on my bed — three of the four sons already in independent power —\n\nI closed my eyes —\n\nThe rest of the Mongol Empire\'s story — was theirs — not mine.',
      },
      deliverGoal: 'N9 1252 Sorghaghtani 死 / 葬基督教礼 (Nestorian + Syriac《诗篇》) / Marco Polo 后来听说她 ("She was the mother of four khans") / 21c 学界注意 Marco Polo 全书极少提具体女性名字 (Broadbridge 2018)',
      engagementHook: '50 年后一个外国旅人写下「她是 4 位汗的母亲」——你希望 50 年后有人写你一句话——会是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'sorg-n10',
      type: 'narrative',
      content: {
        cn: '我死后 12 年（1252-1264）——4 子全成 Khan——「sleeping power」在这里兑现。\n\n长子 Möngke——大汗（1251-1259）。派 Hulagu 西征、Kublai 管华北、自己亲征南宋，1259.8.11 攻四川钓鱼城前线突死。\n\n三子 Hulagu——伊儿汗（Ilkhanate 波斯）。1256 灭 Ismaili 暗杀派，1258.2.13 攻陷 Baghdad（屠城 7 天，Caliph 卷在毛毯里马踏死），1260 在 Ain Jalut 被埃及 Mamluk 阻击。\n\ncareful framing：1258 Baghdad 屠城死 20-30 万（旧估 80 万偏高）是真实历史，Hulagu 是我儿子也是真实历史——同时成立。下令的，是我从小督着学波斯财政的儿子——我没想过他会用这套知识去管自己屠过的土地。\n\n次子 Kublai——元朝创立者（1260-1294）；四子 Ariq Böke——草原派大汗（1260-1264）。Möngke 死后两人同时被推，内战 4 年，Kublai 用华北税基压垮弟弟，帝国就此分裂。\n\n4 个我督着学识字的儿子，2 个为汗位打了 4 年。这既是 Pax Mongolica，也是「sleeping power」的代价。',
        en: 'In the twelve years after my death (1252-1264) — all four of my sons became khans — this is where "sleeping power" paid out.\n\nEldest Möngke — Khagan (1251-1259). He sent Hulagu west, set Kublai over north China, and took the field himself against Southern Song. On 11 August 1259 he died suddenly at the front, attacking Diaoyu Castle in Sichuan.\n\nThird son Hulagu — Ilkhan of Persia. In 1256 he destroyed the Ismaili Assassin order; on 13 February 1258 he sacked Baghdad (seven days of slaughter, the Caliph wrapped in a carpet and trampled by horses); in 1260 he was checked at Ain Jalut by Egypt\'s Mamluks.\n\nCareful framing: the 1258 Baghdad sack killed 200,000-300,000 (older estimates of 800,000 are too high) — real history. Hulagu was my son — also real history. Both stand at once. The man who gave the order was the son I had driven since childhood to learn Persian fiscal administration — I never pictured him using that training to govern land he had himself slaughtered.\n\nSecond son Kublai — founder of the Yuan dynasty (1260-1294); fourth son Ariq Böke — steppe-faction Khagan (1260-1264). When Möngke died both were acclaimed at once. Four years of brothers\' war; Kublai used north China\'s tax base to grind his brother down, and the empire fractured here.\n\nFour sons I had driven to learn to read, two at war four years over the throne. This is the Pax Mongolica — and the price built into "sleeping power."',
      },
      deliverGoal: 'N10 1252-1264 4 子全成 Khan: Möngke 1251-1259 / Hulagu 1256- (Ilkhanate Persia) 1258 屠 Baghdad careful framing / Kublai 1260- (Yuan 中国) / Ariq Böke 1260-1264 与 Kublai 内战 / Sorghaghtani 视角是「sleeping power」促成 Pax + 代价',
      engagementHook: '4 个你从小督着学识字的儿子——其中 2 个为汗位打 4 年——你能 hold「成就 + 代价」同时成立吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'sorg-n11',
      type: 'synthesis',
      content: {
        cn: '我已死 774 年——你跟我做完 receiving-end 这一段。\n\n我是 13 世纪的「sleeping power」：13 岁部族灭、被赐给灭我家族的家族当妻；42 岁守寡、拒绝改嫁；25 年守住 Tolui 旧领地养 4 子；4 子全识字、都成 Khan，蒙古帝国从纯草原游牧转向 Eurasian 多文明。\n\n21 世纪学界才把我的故事挖出来。但西方 7 年级课本里我几乎不存在——那一章往往只有 Chinggis + 屠城 + Kublai 元朝。这就是「sleeping power」：不是没有权力，是权力存在但课本不写。\n\n现在掂量这一对——一说我是「真正的开国母亲」，4 子全成大汗根子都在我 25 年布局；一说我只是「站在权力旁边的人」，真正坐汗位、下令、屠城的是我儿子，把功业算在我头上是后人浪漫化（坐汗位的确实是 Möngke 不是我）。\n\n哪一种更接近真实，还是各对一半？「在幕后让事情发生」算不算真权力？想 30 秒，写下来。',
        en: 'I have been dead 774 years — you have walked the receiving-end stretch with me.\n\nI am the 13th-century "sleeping power": at 13 my people were destroyed and I was given to the family that destroyed mine; at 42 I was widowed and refused remarriage; for 25 years I held the Tolui appanage and raised four sons — all literate, all khans — and the Mongol empire turned from pure-steppe nomadism into a multi-civilizational Eurasian polity.\n\n21st-century scholarship has only recently brought my story back into view. But in Western 7th-grade textbooks my name is barely there — that chapter is usually just Chinggis + sacked cities + Kublai + Yuan. That is "sleeping power": not "no power," but power that exists and the textbook does not record.\n\nNow weigh this pair. One reading: I am "the real founding mother" — all four sons became great khans because of my 25 years of design. The other reading: I only "stood beside power" — the one who sat the throne, gave the orders, sacked the cities was my son, and crediting me is later romanticizing (Möngke did sit the throne, not me).\n\nWhich is closer to the truth, or is each half right? Does "making things happen behind the scenes" count as real power? Think 30 seconds, write it down.',
      },
      deliverGoal: 'N11 synthesis expectsRealAnswer:true / female-political-architect — 双 view 掂量「真正的开国母亲」vs「站在权力旁边的人」/ 13c 寡妇 25 年掌权 4 子全成大汗 / 21c reframe (Broadbridge 2018 / De Nicola 2017 / Favereau 2021) careful 不照搬 Weatherford popular 反向夸大 / 「幕后让事情发生」算不算真权力 想 30 秒',
      engagementHook: '一种说法我是真正的开国母亲，另一种说法我只是站在权力旁边的人——你掂量这一对，哪一种更接近 13 世纪的真实？想 30 秒，写下来。',
      expectsRealAnswer: true,
    },
    {
      id: 'sorg-n12',
      type: 'synthesis',
      content: {
        cn: '最后一段——横向看 6 个 receiving-end 女性。\n\n3 个真实：我——Sorghaghtani Beki（蒙古），「sleeping power」+ 4 子全成 Khan；Theodora（拜占庭），演员出身，532 Nika 暴动让 Justinian 留下、535《新法》护妓女；Li Qingzhao（北宋），靖康南渡，用词记录乱世女性。\n\n3 个虚构 composite：Anacaona Jr.（1492）、Aisha 1413（Mali）、Sister Agnes（Mali 1235），都是殖民/战乱的女性见证者。\n\n我是其中唯一靠政治布局的：没出名作没立法，做的是「19 年布局让 4 子全成 Khan」。\n\n21 世纪 reframe：al-Qarawiyyin（859 年 Fatima al-Fihri 在 Fes 建的清真寺学校）1985 年才收女学生——女性建的学校，1100 多年后才让女性回去；2014 年 Morocco 新钞印她肖像。不是「她们没影响」，是影响一直在、社会用 1100 年才公开承认。我跟 Fatima 一样，「sleeping power」一直在。\n\n你身边那个「sleeping power」的女性，不需要等 1100 年。今天——告诉她你看见——',
        en: 'Final stretch — across six receiving-end women.\n\nThree real: Me — Sorghaghtani Beki (Mongol) — "sleeping power" + four sons all Khans; Theodora (Byzantine) — stage-born, held Justinian on the throne in the 532 Nika riot, drove the 535 law protecting prostitutes; Li Qingzhao (Northern Song) — driven south in the 1127 catastrophe, recorded receiving-end women in ci poetry.\n\nThree fictional composites: Anacaona Jr. (1492), Aisha 1413 (Mali), Sister Agnes (Mali 1235) — all women witnesses of colonial or wartime violence.\n\nI am the only one among them who worked through political design — no famous text, no law, just nineteen years of design until all four sons became Khans.\n\n21st-century reframings: al-Qarawiyyin (the mosque-school Fatima al-Fihri built in Fes in 859) finally admitted women as students in 1985 — a school built by a woman took 1,100 years to let women back in; in 2014 Morocco put her portrait on a new banknote. Not "they had no impact" — the impact was always there; society took 1,100 years to acknowledge it. I am the same as Fatima — "sleeping power" was always there.\n\nThe sleeping-power woman near you does not need to wait 1,100 years. Today — tell her you see her.',
      },
      deliverGoal: 'N12 expectsRealAnswer:true closing meta / 6 receiving-end 女性对照 (Sorghaghtani 真/Theodora 真/Li Qingzhao 真 + Anacaona Jr 虚/Aisha 1413 虚/Sister Agnes 虚 = 3 真 3 虚) / Sorghaghtani 是真 + 「sleeping power」/ 21c reframe — 1985 al-Qarawiyyin 收女学生 / 2014 Morocco dirham 纪念 Fatima / 你不需要等 1100 年',
      engagementHook: '走完我这一生——19 年布局让 4 子全成 Khan、把蒙古帝国转向 Eurasian，却是个课本里几乎没有名字的「sleeping power」。你会怎么评价这样一种没名作没立法、却改变了一切的权力？再想一步：你身边那个「所有重要决定经她的手、却从不被看见」的女性是谁，你不必等 1100 年——今天你会怎么告诉她你看见了 TA？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'genghis-khan':  genghisKhanLens,
  'yelu-chucai':   yeluChucaiLens,
  'sorghaghtani':  sorghaghtaniLens,
};

export var defaultLens = 'sorghaghtani';
export default lenses[defaultLens].storyboard;
export var meta = {
  topicId: 'mongol-empire',
  schemaVersion: 2,
  defaultLens: defaultLens,
  lensCount: 3,
  status: 'production',
  authoredBy: 'lens-author agents × 3 (Story-First Pedagogy v2)',
  authoredDate: '2026-05-09',
  notes: [
    '3 lens combined / cross-lens micro-detail: Pax Mongolica 4 子继位 + 1218 Chinggis 召见 Yelü + Karakorum 4 教并立',
    'defaultLens: sorghaghtani — 受影响者优先 (女性 + 跨 5 文明 receiving-end + Pax Mongolica 政治建构)',
    'anti-fab: 蒙古秘史 1240 / Rashid al-Din《史集》1306 / Igor de Rachewiltz 1962 / Broadbridge 2018 / De Nicola 2017 / Favereau 2021',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
