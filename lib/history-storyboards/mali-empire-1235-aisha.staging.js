// ─── Mali Empire 1235 · Lens 3 · Aisha (staging) ──────────
//
// Topic: Mali Empire 1235 · Sundiata + Mansa Musa + Sankoré
// HSS-7.4 · AP World 1.5 · female-literacy-carrier lens
//
// Lens 3: Aisha — receiving-end commoner / female-literacy-carrier
//   - 14 岁 Mande 女孩 (1413), Timbuktu
//   - 妈妈是 qadi 家族 / 爸爸是 Mande 商人
//   - Mansa Musa 1337 死 76 年后, Songhai 1591 分裂 178 年前
//   - Mali 帝国第二阶段 / 缓慢衰退
//
// 虚构合成 disclaimer: 跟 AoE Anacaona Jr / Reformation Sister Agnes 同 pattern
//   Sundiata, Mansa Musa, Sankoré, Tarikh es-Sudan, al-Sa'di 全是真历史
//   Aisha 1413 是合成人物——代表 14-15 世纪 Timbuktu 几千个 marabout/qadi
//   家庭出身、Quran 阅读 + Mande 织布 + Sundiata 史诗口传 carrier 的女孩
//
// Cross-lens micro-detail (per Sarah audit §6.2 + 12,000 enslaved 三视角):
//   - N4-N5: Mansa Musa 1324 朝圣 12,000 enslaved + 4 磅黄金故事
//     · Mansa Musa N? producer 维度 / Ibn Battuta 1353 见过那批奴隶后裔 interpreter
//     · Aisha N5 1414 听街头流传 affected-party 维度 — 89 年前的事还在口耳相传
//   - N12: al-Sa'di 1655 写 Tarikh es-Sudan + 沙漠藏书 — 4 Topic information
//     preservation thread (Renaissance 印刷 / Reformation 95 Theses /
//     AoE 1493 信 / Mali 沙漠藏书 — 跨 250 年同一主题)
//
// 主 visual anchor (per Sarah audit §6.1):
//   - N2 爷爷讲 Sundiata 7 岁拔猴面包树 — Mali Topic 主 anchor
//     (跟 Renaissance 美第奇镶金小镜子 / Reformation 95 Theses Wittenberg 门 /
//      AoE Florentine Codex 黑曜石镜子 形成 4 Topic visual-anchor 四面体)
//
// 7thgrader careful framing (N8 妈妈被 Songhai raiders 带走):
//   - 不要血腥, 不要 graphic
//   - "她们冲进来 — 妈妈把我推进 mil 仓 — 我从竹缝看见 — 妈妈再没回来"
//   - reflection: 妈妈是 qadi 家族 — Songhai raiders 不知道她是谁 —
//                 14 世纪 raid 不挑身份 — 暴力跟身份没有对应
//
// 风格规则 (per AUTHORING_PIPELINE 11 条 + AoE lessons learned):
//   - 不用 *italic* markdown — 外语词 bare + inline gloss
//   - cultural ban + anti-fab (Aisha 虚构 / 14 世纪 Mande / qadi /
//     Sankoré / Bure 黄金区 / Tarikh es-Sudan 都真)
//   - em-dash 「——」 ≤ 3 per 段
//   - 第 11 条 quote nesting: outer JS '...', 内嵌 「」(CN) / "..."(EN)
//     严禁 «...»
//   - 每 node 350-550 CN chars 严控 (AoE Anacaona Jr 600-800 被 4-agent 砍 19%)
//   - 数学一致: 14 岁 1413 → 15 岁 1414 → 16 岁 1415 → 17 岁 1419
//   - 虚构 disclaimer 在 lens.description + fictionalDisclaimer (不要塞 monologue)

// ═══════════════════════════════════════════════════
// LENS 3 storyboard: Aisha (12 nodes)
// ═══════════════════════════════════════════════════

var aishaStoryboard = [
  // ═══════════════════════════════════════════════════
  // N1 — HOOK: 1413 春, 14 岁 Aisha 在 Timbuktu
  // ═══════════════════════════════════════════════════
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Aisha',
    narrativeRef: '§3 line 779-805 Aisha 1413 + Sarah audit Lens 3 推荐',
    content: {
      cn:
        '我叫 Aisha,14 岁。这是 1413 年的春天。我住在 Timbuktu——Mali 帝国北部的城市,撒哈拉南边的港口。\n\n' +
        '妈妈 Fatima 家里 3 代 qadi (法官),爷爷的爷爷曾是 Sankoré 大学的 marabout (伊斯兰学者)。爸爸 Yaqub 是 Mande 商人,跨撒哈拉商队北走 1500 km 到 Sijilmasa 卖盐换金。\n\n' +
        '我们家在 Sankoré 大清真寺南边一条小巷——泥砖房,棕榈木屋顶。我有一个 11 岁弟弟 Idris。\n\n' +
        '我会织 Mande 几何花纹腰带——妈妈教的。我会背 Quran 15 章。我会唱 Sundiata 史诗开头——爷爷教的。\n\n' +
        '今天的我,不知道接下来 6 年会发生什么——不知道 1414 妈妈会听 Cairo 商人讲 90 年前祖国摇动一座城市的故事;不知道 1416 妈妈会被 Songhai raiders 带走;不知道我 17 岁会在 Sankoré 大学影子下重新学历史。\n\n' +
        '接下来 12 节——你跟我走 6 年。',
      en:
        'My name is Aisha. I am fourteen. This is spring of 1413.\n\n' +
        'I live in Timbuktu — a city in the north of the Mali Empire, a port on the southern edge of the Sahara.\n\n' +
        'My mother is Fatima. Her family has produced three generations of qadi (judges); her great-grandfather served as a marabout (Islamic scholar) at Sankoré in the time of Mansa Musa.\n\n' +
        'My father is Yaqub. He is a Mande merchant — he travels with caravans 1,500 km north across the Sahara to Sijilmasa, trading salt for gold.\n\n' +
        'We live in a small lane south of the Great Mosque of Sankoré — mud-brick walls, palm-wood roof. I have an eleven-year-old brother, Idris.\n\n' +
        'I weave — the geometric belt patterns of the Mande women, taught to me by my mother. I can recite fifteen chapters of the Quran. I can sing the opening of the Sundiata epic — my grandfather taught me.\n\n' +
        'I do not know what the next six years will bring.\n\n' +
        'I do not know that in 1414 my mother will hear a Cairo merchant tell the story of how, ninety years ago, our homeland shook a city. I do not know that in 1416 my mother will be taken by Songhai raiders. I do not know that at seventeen I will return to study history in the shadow of Sankoré.\n\n' +
        'Over twelve sections — walk those six years with me.',
    },
    deliverGoal: {
      cn: '我叫 Aisha,14 岁,1413 春 Timbuktu。妈妈 Fatima (qadi 家族 3 代,Sankoré marabout 后裔),爸爸 Yaqub (Mande 商人,跨撒哈拉路线)。我会织 Mande 几何腰带,背 Quran 15 章,唱 Sundiata 史诗。',
      en: 'I am Aisha, fourteen, Timbuktu spring 1413. Mother Fatima (three generations of qadi, descended from a Sankoré marabout), father Yaqub (Mande merchant, trans-Saharan route). I weave geometric Mande belts, recite fifteen chapters of the Quran, sing Sundiata.',
    },
    engagementHook: {
      cn: '14 岁我,Timbuktu 1413 春。妈妈 qadi 家族,爸爸 Mande 商人。我会织布、背 Quran、唱 Sundiata。下一节:爷爷讲 Sundiata 7 岁拔猴面包树。',
      en: 'Fourteen, Timbuktu, spring 1413. Mother from a qadi family, father a Mande merchant. I weave, I recite Quran, I sing Sundiata. Next: my grandfather tells the story of seven-year-old Sundiata pulling up the baobab tree.',
    },
    expectedLength: '420-460 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N2 — SETUP: 1413 夏 爷爷讲 Sundiata 史诗 ⭐ 主 visual anchor (拔猴面包树)
  // ═══════════════════════════════════════════════════
  {
    id: 2,
    phase: 'setup',
    cosplay: 'Aisha',
    narrativeRef: '§3 line 987-1011 Sundiata 7 岁拔猴面包树 + Sarah audit §6.1 主 anchor',
    content: {
      cn:
        '1413 年夏天的一个夜晚——我跟弟弟 Idris 坐在院子里的草席上。爷爷 Mahmud 78 岁,坐在我们对面。\n\n' +
        '爷爷不识字。但他会唱 178 年前 Mande 大地最重要的故事。他拍一下手——开始:\n\n' +
        '「远古的时候——Mande 大地上——国王 Naré Maghan 娶了一个驼背女人——人们嘲笑她——她生了一个儿子——这儿子 7 岁还不能走。」\n\n' +
        '我跟 Idris 屏住呼吸。我们听过 50 多遍。每一遍还是屏住呼吸。\n\n' +
        '「7 岁那一天——他听到村里人嘲笑妈妈——他愤怒——他想给妈妈拿一棵猴面包树叶——但他不能走——他爬到村里最大的猴面包树下——抓住树干——」\n\n' +
        '爷爷停。眼睛闭着。\n\n' +
        '「他第一次站起来。接着——他直接拔起整棵猴面包树——抗在肩上——走回家给妈妈。」\n\n' +
        'Idris 拍手叫好。我没拍——我在想:Sundiata 1217 生——这是 196 年前的事——爷爷不识字——但我们家 196 年没让这棵树倒。\n\n' +
        '我们 Mande 没写进书——但用嘴把它从 1235 传到 1413。',
      en:
        'A summer night in 1413. My brother Idris and I sit on a grass mat in the courtyard. My grandfather Mahmud, seventy-eight, sits across from us.\n\n' +
        'My grandfather cannot read. But he can sing the most important story Mande land has carried for 178 years.\n\n' +
        'He claps once and begins:\n\n' +
        '"In the ancient time, on Mande land, a king named Naré Maghan — he married a hunchbacked woman — people mocked her — she bore a son — at seven this son could not yet walk."\n\n' +
        'Idris and I hold our breath. We have heard the story more than fifty times. We hold our breath every time.\n\n' +
        '"On the day he turned seven, he heard the village mock his mother. He grew angry. He wanted to bring his mother a leaf from the baobab tree — but he could not walk. He crawled to the largest baobab in the village. He grabbed the trunk —"\n\n' +
        'My grandfather pauses, eyes closed.\n\n' +
        '"And he stood up for the first time — and then — he uprooted the whole baobab tree — carried it on his shoulder — walked home to his mother."\n\n' +
        'Idris claps — he claps at this moment every time. I do not clap. I am thinking: Sundiata was born in 1217 — this happened 196 years ago — my grandfather cannot read — but our family has not let this tree fall in 196 years.\n\n' +
        'We Mande did not write this down. We carried it from 1235 to 1413 with our mouths.',
    },
    deliverGoal: {
      cn: '1413 夏夜爷爷 Mahmud 78 岁讲 Sundiata 史诗——7 岁瘫痪听人嘲笑妈妈——爬到猴面包树下——第一次站起——拔起整棵猴面包树抗回家。Sundiata 1217 生——196 年前的事——爷爷不识字——Mande 用嘴从 1235 传到 1413。',
      en: 'Summer night 1413, grandfather Mahmud, seventy-eight, sings the Sundiata epic — seven-year-old paralyzed boy hears mockery of his mother, crawls to a baobab, stands for the first time, uproots the whole tree, carries it home. Sundiata was born in 1217 — 196 years ago — grandfather cannot read — the Mande carried this story from 1235 to 1413 with their mouths.',
    },
    engagementHook: {
      cn: '7 岁瘫痪 Sundiata 听到嘲笑妈妈——爬到树下——第一次站起——拔起整棵猴面包树。Mande 人 196 年口传——一个字没写下来。下一节:Sankoré 大学旁织布。',
      en: 'A seven-year-old, paralyzed, hears mockery of his mother — crawls to the tree — stands for the first time — uproots the whole baobab. The Mande carried this 196 years with no writing. Next: weaving beside Sankoré.',
    },
    expectedLength: '440-490 字 CN ⭐ 主 visual anchor',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N3 — SETUP: 1413 秋 Sankoré 大学旁织布 + 听 Mansa Musa 1324 故事
  // ═══════════════════════════════════════════════════
  {
    id: 3,
    phase: 'setup',
    cosplay: 'Aisha',
    narrativeRef: '§3 line 654-668 Sankoré 大学 + line 96-113 Mansa Musa 1324 朝圣',
    content: {
      cn:
        '1413 秋。我 14 岁。每个下午——我搬一张小织机——坐在 Sankoré 大清真寺南墙阴影里——织腰带。Sankoré 是这座城市的心脏——Mansa Musa 14 世纪资助扩建,15 世纪还是穆斯林世界最受尊敬的学府之一。\n\n' +
        '清真寺出来的 marabout——白长袍、头巾、抱着羊皮纸——经过我身边——大多不看一个 14 岁织布女孩。\n\n' +
        '一个老 marabout 看了我一眼。他停下:「你叫什么?」我说:「Aisha,Sheikh Mahmud 的孙女。」他点头——「我认识你爷爷。他记得每一首 Sundiata。」他走了。我继续织。\n\n' +
        '那天晚上——爷爷讲另一个故事:\n\n' +
        '「89 年前——Mansa Musa 朝圣 Mecca——他经过 Cairo——带 18 吨黄金——他三个月撒金子——撒到 Cairo 金价跌——跌了很多年才回来。」\n\n' +
        '我问:「他真撒那么多?」爷爷说:「我爸爸的爸爸跟一个去过 Cairo 的 Mande 商人聊过——他说是真的——但 Cairo 商人讲的数字跟 Mande 商人讲的数字——不一样。」\n\n' +
        '89 年前的事。我们没人见过。但每一代 Timbuktu 孩子都知道那 18 吨黄金。',
      en:
        'Autumn 1413. I am fourteen.\n\n' +
        'Every afternoon I carry a small loom into the shade of the south wall of the Great Mosque of Sankoré and weave belts. Sankoré is the heart of this city — Mansa Musa funded its expansion in the fourteenth century, and in the fifteenth it is still one of the most respected centers of learning in the Muslim world.\n\n' +
        'Marabouts in white robes and turbans walk out of the mosque, parchments under their arms, passing the fourteen-year-old girl at her loom. Most do not look.\n\n' +
        'One old marabout does. He stops and asks: "What is your name?" I say: "Aisha, granddaughter of Sheikh Mahmud." He nods — "I know your grandfather. He remembers every Sundiata song."\n\n' +
        'He walks on. I keep weaving.\n\n' +
        'That night, my grandfather tells another story.\n\n' +
        '"Eighty-nine years ago, Mansa Musa made the pilgrimage to Mecca. He passed through Cairo. He carried eighteen tons of gold. For three months he scattered gold — Cairo\'s gold price fell, and it took many years to recover."\n\n' +
        'I ask: "Did he really scatter that much?" Grandfather says: "My father\'s father once spoke with a Mande merchant who had been to Cairo. He said it was true. But the numbers the Cairo merchants tell — and the numbers we Mande tell — are not the same."\n\n' +
        'A thing from eighty-nine years ago. None of us saw it. But every Timbuktu child knows about those eighteen tons of gold.',
    },
    deliverGoal: {
      cn: '1413 秋 Aisha 在 Sankoré 大清真寺南墙阴影下织布——marabout 走出来不看一个 14 岁女孩——只有一个老 marabout 停下问名字。爷爷晚上讲 Mansa Musa 1324 朝圣——18 吨黄金——89 年前——Cairo 商人 vs Mande 商人讲的数字不一样。',
      en: 'Autumn 1413 — Aisha weaves in the shade of the south wall of Sankoré. Marabouts pass without looking at a fourteen-year-old girl — only one old marabout stops to ask her name. That night her grandfather tells the story of Mansa Musa\'s 1324 pilgrimage — eighteen tons of gold, eighty-nine years ago — Cairo merchants and Mande merchants do not tell the same numbers.',
    },
    engagementHook: {
      cn: 'Sankoré 大学的 marabout 走过我身边——只有一个停下问名字。爷爷晚上讲 Mansa Musa 18 吨黄金——89 年前的事——但 Cairo 数字 vs Mande 数字不一样。下一节:1414 妈妈听 Cairo 商人讲。',
      en: 'Marabouts walk past — only one stops to ask my name. That night my grandfather tells of Mansa Musa\'s eighteen tons of gold — eighty-nine years ago — but the Cairo numbers and Mande numbers do not match. Next: 1414, my mother hears a Cairo merchant.',
    },
    expectedLength: '460-510 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N4 — STORY: 1414 春 妈妈听 Cairo 商人讲 Mansa Musa 黄金影响
  // ═══════════════════════════════════════════════════
  {
    id: 4,
    phase: 'story',
    cosplay: 'Aisha',
    narrativeRef: '§3 line 96-113 Cairo 通胀 + Sarah P0.5 修订 (5-10 年学界争议)',
    content: {
      cn:
        '1414 春。我 15 岁。\n\n' +
        '一个 Cairo 商人来 Timbuktu 收皮货——他在我家住三晚——爸爸 Yaqub 跟他用阿拉伯语谈生意。妈妈 Fatima 做晚饭——一边切肉,一边听。\n\n' +
        'Cairo 商人喝完汤说:「我爸爸的爸爸亲眼见过 Mansa Musa 1324 走在 Cairo 街上——给金子给穷人、乞丐、商人——一连几个星期。」\n\n' +
        '妈妈说:「我们这边的故事是 18 吨。」\n\n' +
        '商人笑:「18 吨,可能。但我爸爸说——之后的事——你们 Mande 这边可能不知道。Cairo 金价掉了——掉得厉害——al-\'Umari 学者写过——影响 5 到 10 年——学界还争——但确有一段——Cairo 人花金子比花铜还多。」\n\n' +
        '妈妈手停了——还拿着切肉的刀。我坐在角落听。\n\n' +
        '——1324 从 Mande 大地走出去的皇帝——89 年前撒的金子——动了 5000 km 外一座城市的经济。我祖国不只是 Sundiata 史诗里的故事。我祖国——曾经摇过世界。\n\n' +
        '我 15 岁。我第一次理解 mansa 不是 「皇帝」 一个翻译——是一种力量。',
      en:
        'Spring 1414. I am fifteen.\n\n' +
        'A Cairo merchant comes to Timbuktu for hides. He stays three nights at our house. My father Yaqub speaks Arabic with him about trade. My mother Fatima cooks dinner — slicing meat, listening.\n\n' +
        'The merchant finishes his soup and says: "My father\'s father saw Mansa Musa walking the streets of Cairo in 1324. He said — Mansa Musa gave gold to the poor, the beggars, the merchants — for weeks together."\n\n' +
        'My mother says: "Our story says eighteen tons."\n\n' +
        'The Cairo merchant laughs. "Eighteen tons — perhaps. But what happened after — you Mande here may not know. Cairo\'s gold price fell — fell hard. The scholar al-\'Umari wrote of it. The effect — five years, ten years — scholars are still arguing — but there was a stretch when Cairo people spent gold faster than copper."\n\n' +
        'My mother\'s hand stops. She is still holding the knife.\n\n' +
        'I sit in the corner and listen.\n\n' +
        'An emperor who walked out of our Mande land in 1324 — eighty-nine years ago — the gold he scattered moved the economy of a city five thousand kilometers away. My homeland is not only a story in the Sundiata epic. My homeland — once moved the world.\n\n' +
        'I am fifteen. I understand for the first time that mansa is not just a translation for "emperor." It is a kind of force.',
    },
    deliverGoal: {
      cn: '1414 春 Cairo 商人到我家三晚——讲他爸爸的爸爸亲眼见 Mansa Musa 1324 在 Cairo 街上撒金子——Cairo 金价掉,al-\'Umari 学者写过,影响 5-10 年(学界争)。妈妈手停了——还拿着切肉的刀。我 15 岁第一次理解 mansa 不是 「皇帝」 一个词,是一种力量。',
      en: 'Spring 1414 — a Cairo merchant stays three nights. He says his grandfather saw Mansa Musa walking Cairo\'s streets in 1324, scattering gold. Cairo\'s gold price fell. The scholar al-\'Umari wrote of it; the effect lasted five to ten years (scholars are still arguing). My mother\'s hand stops on the knife. At fifteen I understand for the first time that mansa is not a translation of "emperor" — it is a kind of force.',
    },
    engagementHook: {
      cn: 'Cairo 商人讲 1324 Mansa Musa 撒金子——Cairo 金价掉 5-10 年。妈妈手停在切肉的刀上。我祖国曾经摇过世界。下一节:1414 夏街头 12,000 奴隶后裔的故事。',
      en: 'A Cairo merchant tells of 1324 — Mansa Musa scattering gold, Cairo\'s gold price falling for five to ten years. My mother\'s hand stops on the knife. My homeland once moved the world. Next: summer 1414, the 12,000 in the streets.',
    },
    expectedLength: '500-540 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N5 — STORY: 1414 夏 街头 12,000 奴隶后裔的故事 ⭐ cross-lens micro-detail
  // ═══════════════════════════════════════════════════
  {
    id: 5,
    phase: 'story',
    cosplay: 'Aisha',
    narrativeRef: '§3 line 101 + 424 12,000 enslaved 朝圣队伍 + Sarah audit §6.2 inconvenient-truth anchor + Ibn Battuta 1353 见过后裔',
    content: {
      cn:
        '1414 夏。我 15 岁。\n\n' +
        '一个下午——我跟 Idris 在 Timbuktu 集市——一个老 jeli (口传歌手) 坐在棕榈树下,围了 7 个孩子。我们停下听。\n\n' +
        '老 jeli 唱的不是 Sundiata。他唱:\n\n' +
        '「89 年前 Mansa Musa 走出 Niani 那天——后面跟 80 头骆驼,每头驮 300 磅黄金——还跟 12,000 个人——每人手里捧 4 磅黄金。这 12,000 个——是奴隶。」\n\n' +
        '老 jeli 停一下,看孩子们。\n\n' +
        '「他们走 8000 km。很多没活到 Mecca。活到的——很多留在 Cairo——卖给 Mamluk 苏丹的人。\n\n' +
        '60 年后——一个摩洛哥旅行家 Ibn Battuta 1353 在 Mali 待 8 个月——回去写一本书——他在书里写:他在 Cairo 见过那 12,000 当中一些人的孙子——还在给苏丹做事。」\n\n' +
        '我 15 岁站在棕榈树下听。\n\n' +
        'Mansa Musa 撒金动了一座城市经济——是「Mande 怎么伟大」的故事。12,000 个人手捧 4 磅金子走 8000 km——是另一个故事。\n\n' +
        '两个故事是同一件事的两面。多数 jeli 唱 Sundiata 不唱这个。这个 jeli 唱了。',
      en:
        'Summer 1414. I am fifteen.\n\n' +
        'One afternoon, Idris and I are at the Timbuktu market. An old jeli (oral singer) sits under a palm tree, seven children around him. We stop to listen.\n\n' +
        'The old jeli is not singing Sundiata.\n\n' +
        'He sings: "Eighty-nine years ago — the day Mansa Musa left Niani — eighty camels followed him, each carrying three hundred pounds of gold. And twelve thousand people followed — each holding four pounds of gold in their hands. These twelve thousand were enslaved."\n\n' +
        'The old jeli pauses. His eyes meet the children.\n\n' +
        '"They walked eight thousand kilometers. Many did not reach Mecca. Of those who did, many remained in Cairo, sold to the men of the Mamluk sultan.\n\n' +
        'Sixty years later, a Moroccan traveler named Ibn Battuta — he stayed in Mali eight months in 1353 and went home to write a book — wrote in that book that in Cairo he had seen children of some of those twelve thousand. Their grandchildren — still working for the sultan in Cairo."\n\n' +
        'I am fifteen, standing under the palm tree, listening.\n\n' +
        'Mansa Musa scattering gold in 1324 — moving the economy of a city — that is the story of "how great we Mande are."\n\n' +
        'Twelve thousand people carrying four pounds of gold each across eight thousand kilometers — that is another story.\n\n' +
        'Two sides of the same thing. Most jelis sing Sundiata, not this. This jeli sang it.',
    },
    deliverGoal: {
      cn: '1414 夏 Aisha 跟 Idris 听一个老 jeli 唱: Mansa Musa 1324 朝圣队伍——80 骆驼 + 12,000 个奴隶手捧 4 磅金子走 8000 km。Ibn Battuta 1353 在 Cairo 见过那 12,000 当中一些人的孩子的孩子还给 Mamluk 苏丹做事。"我们 Mande 怎么伟大" + "12,000 个手捧 4 磅金子走 8000 km" 是一件事的两面。',
      en: 'Summer 1414 — Aisha and Idris hear an old jeli sing: Mansa Musa\'s 1324 caravan — eighty camels and twelve thousand enslaved each carrying four pounds of gold for eight thousand kilometers. Ibn Battuta saw their grandchildren in Cairo in 1353, still working for the sultan. "How great we Mande are" and "twelve thousand carrying four pounds across eight thousand kilometers" are two sides of one thing.',
    },
    engagementHook: {
      cn: '老 jeli 唱:Mansa Musa 1324 队伍 12,000 奴隶捧 4 磅金子走 8000 km。Ibn Battuta 1353 在 Cairo 见过他们孙子。我祖国伟大 + 12,000 个人——是一件事的两面。下一节:1414 秋 Songhai 边境威胁。',
      en: 'An old jeli sings: 1324, twelve thousand enslaved, four pounds of gold each, eight thousand kilometers. Ibn Battuta saw their grandchildren in Cairo in 1353. My homeland\'s greatness — and twelve thousand people — are two sides of one thing. Next: autumn 1414, Songhai on the border.',
    },
    expectedLength: '500-550 字 CN ⭐ cross-lens micro-detail (12,000 enslaved)',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N6 — STORY: 1414 秋 Songhai 部族开始威胁 — Mali 衰退第一信号
  // ═══════════════════════════════════════════════════
  {
    id: 6,
    phase: 'story',
    cosplay: 'Aisha',
    narrativeRef: '§4 line 856-858 Songhai 1430s 分裂 + line 859 Mali 弱化',
    content: {
      cn:
        '1414 秋。我 15 岁。\n\n' +
        '一个晚上——爸爸 Yaqub 从北边商队回来——堂屋里跟妈妈用 Mande 话低声说话。我假装睡——耳朵听。\n\n' +
        '爸爸:「Walata 那边——3 个 Mande 商队这个月被劫——是 Songhai。」\n\n' +
        '妈妈:「Songhai 是 Mali 的人,他们在 Gao,不动 Mali 商队。」\n\n' +
        '爸爸:「以前不动。今年开始动。Mansa Maghan III 30 岁——管不住北边。一个 Berber 向导跟我说——Songhai 部落在脱离 Mali——他们想 Gao 自治——可能 10 年、20 年——但 Songhai 会分出去。」\n\n' +
        '妈妈沉默。然后说:「我爷爷在 Mansa Musa 时期当 marabout——那时候 Mali 是从撒哈拉到森林一统。今天我们家窗外的世界——还是 Mali 吗?」\n\n' +
        '我 15 岁,从没听过妈妈这个语气。\n\n' +
        '爸爸:「还是。但 30 年后——可能不是。」\n\n' +
        '我闭眼没睡。第二天去 Sankoré 南墙下织布——还是织——但脑子里是爸爸的话: 「30 年后——可能不是。」\n\n' +
        'Mali 1324 鼎盛——89 年后——开始有裂缝。',
      en:
        'Autumn 1414. I am fifteen.\n\n' +
        'One night, my father Yaqub returns from a caravan in the north. In the front room he speaks with my mother in low Mande.\n\n' +
        'I pretend to sleep. I listen.\n\n' +
        'My father says: "Out by Walata — three Mande caravans were raided this month. It was Songhai."\n\n' +
        'My mother: "The Songhai are Mali people. They are in Gao. They do not raid Mali caravans."\n\n' +
        'My father: "They did not before. They have started this year. Mansa Maghan III is young, thirty, he cannot hold the north. I spoke with a Berber guide. He said the Songhai tribes are pulling away from Mali. They want Gao to be autonomous. Maybe ten years, maybe twenty — but the Songhai will break off from Mali."\n\n' +
        'My mother is silent. Then: "My grandfather was a marabout in Mansa Musa\'s time. Mali was one then, from the Sahara to the forest. The world outside our window today — is it still Mali?"\n\n' +
        'I am fifteen. I have never heard my mother speak in this tone.\n\n' +
        'My father says: "It is still Mali. But thirty years from now — perhaps not."\n\n' +
        'I keep my eyes closed and do not sleep. The next morning I go to the south wall of Sankoré and weave. I weave. In my head are my father\'s words: "Thirty years from now — perhaps not."\n\n' +
        'Mali Empire — at its peak under Mansa Musa in 1324. Eighty-nine years on — cracks.',
    },
    deliverGoal: {
      cn: '1414 秋夜爸爸 Yaqub 跟妈妈低声说: Walata 3 Mande 商队被 Songhai 劫。Mansa Maghan III 30 岁管不住北边。Berber 向导说 Songhai 想 Gao 自治。妈妈说"我爷爷 Mansa Musa 时期 Mali 是一统——今天还是 Mali 吗?"爸爸说"30 年后可能不是"。',
      en: 'Autumn 1414 — at night Father Yaqub tells Mother in a low voice: three Mande caravans raided by Songhai near Walata. Mansa Maghan III, thirty, cannot hold the north. A Berber guide says the Songhai want Gao to be autonomous. Mother says "in my grandfather\'s Mansa Musa time, Mali was one — today is the world outside our window still Mali?" Father says "It is. But thirty years from now — perhaps not."',
    },
    engagementHook: {
      cn: '爸爸夜里说: Songhai 劫 3 Mande 商队——他们想脱离 Mali。妈妈说今天还是 Mali 吗?爸爸:30 年后——可能不是。Mansa Musa 89 年后,Mali 第一道裂缝。下一节:1415 Quran 学校。',
      en: 'Father at night: Songhai raided three Mande caravans, they want to break away. Mother: is the world outside still Mali? Father: it is — but in thirty years, perhaps not. Eighty-nine years after Mansa Musa, the first cracks. Next: 1415, the Quran school.',
    },
    expectedLength: '500-550 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N7 — STORY: 1415 Quran 学校 — 少数派女学生
  // ═══════════════════════════════════════════════════
  {
    id: 7,
    phase: 'story',
    cosplay: 'Aisha',
    narrativeRef: '§3 line 781-790 Aisha 1413 一天作息 + line 794 想做 marabout 被拒',
    content: {
      cn:
        '1415。我 16 岁。\n\n' +
        '妈妈跟爸爸谈了 3 晚——最后决定: 让 Aisha 去 Sankoré 旁一个小 Quran 学校。\n\n' +
        'Sankoré 大学不收女生——但 Mansa Musa 时期起,Timbuktu 周边几个小 Quran 学校收女孩。我去的这个——老 marabout Sheikh Tahir 70 多岁——12 学生:10 男 2 女。我跟另一个女孩 Khadija (13 岁) 坐在最后一排。\n\n' +
        '上午 Quran + 阿拉伯语。下午 Mande 部族系谱 + 一点数学。\n\n' +
        '一天 Sheikh 让一个男孩背 Quran 第 18 章——错 3 处。Sheikh 让他坐下,看我:「Aisha,你来。」\n\n' +
        '我背,没错。男孩涨红脸——下课不跟我说话。\n\n' +
        '回家路上 Khadija 拉我的手:「你背得太对了——他不会原谅你。」\n\n' +
        '我说:「Quran 没说女人不能背对。」\n\n' +
        'Khadija 笑:「Quran 没说——但村里说。」\n\n' +
        '我 16 岁。我第一次明白 Mali 不是「平等」也不是「不平等」——是一种「Quran 没禁——但你背对了——男孩还是会涨红脸」 的中间地带。',
      en:
        '1415. I am sixteen.\n\n' +
        'My mother and father spoke for three nights. Finally they decided: Aisha will attend a small Quran school next to Sankoré.\n\n' +
        'Sankoré itself does not take female students. But since Mansa Musa\'s time, several small Quran schools around Timbuktu have taken girls. The one I attend — Sheikh Tahir, an old marabout in his seventies — has twelve students: ten boys and two girls. I sit in the back row with the other girl, Khadija, thirteen.\n\n' +
        'Mornings: Quran recitation and Arabic. Afternoons: Mande genealogy and a little mathematics.\n\n' +
        'One day Sheikh Tahir asks a boy to recite chapter 18. He makes three mistakes. Sheikh tells him to sit and turns to me: "Aisha. You."\n\n' +
        'I recite. No mistakes.\n\n' +
        'The boy\'s face goes red. After class he does not speak to me.\n\n' +
        'Walking home, Khadija takes my hand: "You recited too well. He will not forgive you."\n\n' +
        'I say: "The Quran does not say a woman cannot recite well."\n\n' +
        'Khadija laughs. "The Quran does not. The village does."\n\n' +
        'I am sixteen. I understand for the first time that Mali is not "equal" and not "unequal" — it is a middle place where the Quran does not forbid, but you recite well and a boy\'s face still goes red.',
    },
    deliverGoal: {
      cn: '1415 我 16 岁——妈妈爸爸谈 3 晚——让我去 Sankoré 旁小 Quran 学校(10 男 2 女)。Sheikh Tahir 70 多岁。一天一个男孩背错 Quran 18 章 3 处——Sheikh 让我背——我没错——男孩涨红脸。Khadija 13 岁说"你背太对了——他不会原谅你"。Mali 不是平等也不是不平等——是中间地带。',
      en: 'In 1415, sixteen — Mother and Father spoke for three nights and sent me to a small Quran school near Sankoré (ten boys, two girls). Sheikh Tahir, seventies. One day a boy mis-recites three places in chapter 18. Sheikh asks me. I recite without mistake. The boy\'s face goes red. Khadija, thirteen, says "you recited too well — he will not forgive you." Mali is not equal and not unequal — it is a middle place.',
    },
    engagementHook: {
      cn: 'Sankoré 旁小 Quran 学校 10 男 2 女。一个男孩背错 18 章 3 处——Sheikh 让我背——我没错——他涨红脸。Khadija:你背得太对了。Mali 是中间地带——Quran 没禁,但村里禁。下一节:1416 妈妈。',
      en: 'A small Quran school by Sankoré, ten boys and two girls. A boy mis-recites chapter 18 in three places — Sheikh asks me — I recite perfectly — his face goes red. Khadija: you recited too well. Mali is a middle place — the Quran does not forbid; the village does. Next: 1416, my mother.',
    },
    expectedLength: '500-550 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N8 — STORY: 1416 春 妈妈被 Songhai raiders 带走 ⚠️ careful framing
  // ═══════════════════════════════════════════════════
  {
    id: 8,
    phase: 'story',
    cosplay: 'Aisha',
    narrativeRef: '§4 line 856-859 Songhai 1430s 分裂前夜 raid + 7thgrader careful scaffold',
    content: {
      cn:
        '1416 春。我 17 岁。读这一节的你——这一节比上一节难。我慢讲。\n\n' +
        '一个早上——爸爸跟商队走北边 4 周。Idris 14 岁去爷爷家。家里只有妈妈跟我。\n\n' +
        '中午——城南方向传来声音——马蹄、叫喊、Mande 话夹 Songhai 话。\n\n' +
        '妈妈站起来——脸色变了——不说话——拉我手——我们跑到院子角的 mil (谷物) 仓——她推我进去说:「Aisha——蹲下——别出声——别看。」\n\n' +
        '她转身回堂屋。\n\n' +
        '我 17 岁蹲在 mil 仓里。仓壁是竹子——我从竹缝看出去:\n\n' +
        '3 个穿 Songhai 红头巾的男人冲进院子。妈妈站在堂屋门口——没跑——她举手。我以为是阻止。后来我想:她举手是让他们看见她——不让他们走到院子角。\n\n' +
        '他们把妈妈带走。走的时候妈妈没回头看 mil 仓。她知道我在里面。她不看,他们就不知道。\n\n' +
        '——\n\n' +
        '妈妈是 qadi 家族 3 代后裔。Songhai raiders 不知道她是谁——他们看见的是一个 38 岁 Mande 女人。14 世纪的 raid 不挑——身份跟暴力没有对应。\n\n' +
        '妈妈再没回来。爸爸 4 周后回家——找了 6 个月——没找到。\n\n' +
        '停 30 秒。让 17 岁的我蹲在 mil 仓竹缝边坐一会儿。',
      en:
        'Spring 1416. I am seventeen.\n\n' +
        'You who read this — this section is harder than the last. I will go slowly.\n\n' +
        'One morning — my father Yaqub leaves with the caravan, four weeks north. Idris, fourteen, goes to my grandfather\'s house. Only my mother and I are home.\n\n' +
        'Noon — sounds from the south of the city — hooves, shouts, Mande mixed with Songhai.\n\n' +
        'My mother stands up — her face changes — she does not speak — she takes my hand — we run to the mil (grain) shed in the corner of the courtyard — she pushes me inside — she says: "Aisha — crouch — make no sound — do not look."\n\n' +
        'She turns and goes back into the house.\n\n' +
        'I am seventeen, crouched in the shed. The walls are bamboo. I look through the gaps.\n\n' +
        'Three men in the red turbans of Songhai rush into our courtyard. I see my mother in the doorway. She does not run. She raises her hand. I think she raises her hand to stop them. Later I understand — she raised her hand so they would see her, so they would not walk to the corner.\n\n' +
        'They take her.\n\n' +
        'As they leave, she does not look back at the mil shed. She knows I am inside. If she does not look, they will not know.\n\n' +
        'My mother was three generations of qadi, descended from a Sankoré marabout. The Songhai raiders did not know who she was. They saw a thirty-eight-year-old Mande woman. A fourteenth-century raid does not choose. Identity and violence have no correspondence.\n\n' +
        'She did not come back. Father returned four weeks later, searched for six months, found nothing.\n\n' +
        'Stop for thirty seconds. Let seventeen-year-old me sit at the bamboo gap a moment.',
    },
    deliverGoal: {
      cn: '1416 春爸爸跟商队北 4 周——只有妈妈跟我——3 个 Songhai 红头巾 raiders 冲进院子——妈妈把我推进 mil 仓说"蹲下别出声别看"——她回堂屋举手让他们看见她,不让他们走到角落。我从竹缝看见——他们带走妈妈——她不回头看 mil 仓。妈妈是 qadi 家族 3 代后裔——raiders 不知道——14 世纪 raid 不挑——身份跟暴力没有对应。',
      en: 'Spring 1416 — Father gone with caravan four weeks north — only Mother and me — three Songhai raiders in red turbans rush into the courtyard. Mother pushes me into the mil shed: "crouch, make no sound, do not look." She returns to the house, raises her hand so they see her and not the corner. From the bamboo gap I see them take her. She does not look back at the shed. Mother was three generations of qadi, descended from a Sankoré marabout — raiders did not know — fourteenth-century raids do not choose — identity and violence have no correspondence.',
    },
    engagementHook: {
      cn: '⚠️ 这一节难。妈妈把我推进 mil 仓——她回堂屋举手让 raiders 看她不看角落——他们带走她——她不回头——她不看,他们就不知道。停 30 秒。下一节:1416-1418 Bure 黄金区。',
      en: 'A harder section. Mother pushes me into the mil shed — she returns and raises her hand so they see her, not the corner — they take her — she does not look back — if she does not look, they will not know. Stop for thirty seconds. Next: 1416-1418, Bure.',
    },
    expectedLength: '530-580 字 CN ⚠️ careful framing',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N9 — STORY: 1416-1418 在 Bure 黄金区跟外婆生活 — 黄金生产链 ground level
  // ═══════════════════════════════════════════════════
  {
    id: 9,
    phase: 'story',
    cosplay: 'Aisha',
    narrativeRef: '§2 line 147-148 Bambuk + Bure 黄金矿区 + line 401-402 + §3 黄金生产链',
    content: {
      cn:
        '1416 夏。爸爸决定送我跟 Idris 去南边——外婆 Hawa 家——Bure 黄金森林边的村子。爸爸自己留 Timbuktu 继续找妈妈。\n\n' +
        '我们走了 3 周——驴车——700 km——从撒哈拉边缘的 Timbuktu 走到森林边的 Bure。\n\n' +
        '外婆 65 岁——爸爸的妈妈——家在一条小河边,河水从北边山里下来。\n\n' +
        '我跟 Idris 第一次见黄金生产。不是 Mansa Musa 朝圣队伍里的金块——是河里的金沙。Mande 男女弯腰站在河里——一桶一桶捞河沙——用陶碗筛——一天 12 小时——筛出小金粒。好的时候,一人筛出来的金子值 1 头小山羊。坏的时候——什么都没有。\n\n' +
        '我帮外婆筛了 4 个月。\n\n' +
        '我 17 岁在 Bure 河里弯腰——我手里捧的金粒——可能是 89 年前 Mansa Musa 12,000 个奴隶捧过的金子的某种延续。我的腰酸——他们的腰酸——我的脚泡在水里——他们的脚泡在水里。我想起 1414 那个老 jeli 唱的歌。\n\n' +
        '我们家——筛金沙——卖给撒哈拉商队——商队卖给 Cairo——Cairo 卖给威尼斯——威尼斯铸 Florin 金币——欧洲。一根线——从外婆的 Bure 河——拉到 5000 km 外。',
      en:
        'Summer 1416. Father decides to send Idris and me south — to Grandmother Hawa\'s village, on the edge of the Bure gold forest. He stays in Timbuktu, still searching.\n\n' +
        'Three weeks of donkey cart — seven hundred kilometers — from Timbuktu on the edge of the Sahara to Bure on the edge of the forest.\n\n' +
        'Grandmother is sixty-five — Father\'s mother. Her house sits beside a small river that runs down from the northern hills.\n\n' +
        'For the first time, Idris and I see gold being made.\n\n' +
        'Not the bars in Mansa Musa\'s pilgrimage caravan — sand in a river. Mande men and women bend in the water, lifting bucket after bucket of riverbed sand, sifting in clay bowls — twelve hours a day — for the small grains.\n\n' +
        'Twelve hours of sifting. On a good day, what one person finds is worth one small goat. On a bad day, nothing.\n\n' +
        'I sift with Grandmother for four months.\n\n' +
        'I am seventeen, bent in the Bure river. The grains I hold may be a continuation of the gold the twelve thousand carried for Mansa Musa eighty-nine years ago. My back aches. Theirs ached. My feet are in the water. Theirs were too.\n\n' +
        'I think of the old jeli\'s song from 1414.\n\n' +
        'Our family sifts the sand. The caravans buy it. They sell to Cairo. Cairo sells to Venice. Venice mints florins. Europe.\n\n' +
        'One thread — from Grandmother\'s Bure river — to five thousand kilometers away.',
    },
    deliverGoal: {
      cn: '1416 夏 Aisha + Idris 走 700 km 南到 Bure 外婆家——Mande 男女河里弯腰 12 小时筛金沙 + 一天值 1 头小山羊 (好天)。我筛 4 个月——我手里捧的金粒可能是 89 年前 12,000 奴隶捧过的金子的延续。一根线: Bure 河→撒哈拉商队→Cairo→威尼斯 Florin→欧洲——5000 km。',
      en: 'Summer 1416 — Aisha and Idris travel seven hundred kilometers south to Grandmother Hawa near Bure. Mande men and women bend in the river twelve hours a day sifting gold sand — a good day is worth one small goat. I sift for four months. The grains I hold may continue the gold the twelve thousand carried eighty-nine years ago. One thread runs from Grandmother\'s river to five thousand kilometers away — caravan to Cairo to Venice florins to Europe.',
    },
    engagementHook: {
      cn: 'Bure 河里弯腰 12 小时筛金沙——值 1 头小山羊一天。我手里的金粒可能是 89 年前 12,000 奴隶捧过金子的延续。一根线: 我外婆河→Cairo→威尼斯 Florin→欧洲。下一节:1419 回 Timbuktu。',
      en: 'Bent in the Bure river twelve hours a day sifting gold sand — worth one small goat. The grains I hold may continue the gold the twelve thousand carried eighty-nine years ago. One thread: Grandmother\'s river to Cairo to Venice florins to Europe. Next: 1419, back to Timbuktu.',
    },
    expectedLength: '500-540 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N10 — STORY: 1419 17 岁回 Timbuktu — Sankoré ulama 教 al-Sa'di Tarikh es-Sudan ?
  // 等等 — Tarikh es-Sudan 1655 写的。Aisha 1419 不能学。改: 教她 14 世纪 Sankoré 已有的 Mande 历史 + 阿拉伯文献
  // ═══════════════════════════════════════════════════
  {
    id: 10,
    phase: 'story',
    cosplay: 'Aisha',
    narrativeRef: '§3 line 779-805 Aisha 教 200 女孩传统起点 + Sankoré ulama',
    content: {
      cn:
        '1419。我 20 岁。\n\n' +
        '1418 我跟 Idris 从 Bure 回 Timbuktu。爸爸还在找妈妈没找到。我决定不出嫁、不去外婆家——留 Timbuktu。\n\n' +
        '1419——Sankoré 老 ulama (高级伊斯兰学者) Sheikh Abd al-Rahman——通过爸爸认识我。爸爸说:「我女儿背 Quran 30 章、读阿拉伯、会 Mande 系谱——你能教她什么?」\n\n' +
        'Sheikh 60 多岁。他没收我做正式学生——Sankoré 不收女生——但每周三下午让我去他家书房 1 小时读阿拉伯历史。\n\n' +
        '他教我 al-\'Umari 1340 关于 Mansa Musa 1324 朝圣的同代记录,Ibn Khaldun 1377《历史绪论》,Ibn Battuta 1355 Rihla 关于 Mali 的章节。\n\n' +
        '一天他说:「Aisha,你 20 岁——你比 Sankoré 一半男生背 Quran 准、比 80% 男生读阿拉伯快——但不会有正式 marabout 位子。」\n\n' +
        '我没说话。\n\n' +
        '他继续:「你能做的——回家教其他女孩。我看过你——你有 jeli 的血——你爷爷讲 Sundiata——你能传。」\n\n' +
        '我 20 岁。我决定: 家里开一个小教室。',
      en:
        '1419. I am twenty.\n\n' +
        'Idris and I returned from Bure in 1418. Father was still searching, with no result. I decided: I will not marry. I will not return to Grandmother\'s. I will stay in Timbuktu.\n\n' +
        '1419 — an old ulama at Sankoré (a senior Islamic scholar) named Sheikh Abd al-Rahman — through my father, knew me. Father said to him: "My daughter recites all thirty chapters of the Quran, reads Arabic, knows Mande genealogy. What can you teach her?"\n\n' +
        'Sheikh Abd al-Rahman, in his sixties, did not take me as a formal student. Sankoré does not take women. But every Wednesday afternoon he let me go to his study and read Arabic history with him for an hour.\n\n' +
        'He taught me al-\'Umari\'s 1340 contemporary record of Mansa Musa\'s 1324 pilgrimage. He taught me Ibn Khaldun\'s 1377 Muqaddimah. He taught me the Mali chapters of Ibn Battuta\'s 1355 Rihla.\n\n' +
        'One day he said to me: "Aisha. You are twenty. You recite the Quran more accurately than half the male students at Sankoré. You read Arabic faster than eighty percent of them. But you will not have a formal marabout\'s seat."\n\n' +
        'I did not speak.\n\n' +
        'He went on: "What you can do is go home and teach other girls. I have watched you. You have the blood of a jeli. Your grandfather sang Sundiata. You can carry it."\n\n' +
        'I am twenty. I decide: I will open a small classroom in my home.',
    },
    deliverGoal: {
      cn: '1419 我 20 岁回 Timbuktu。Sankoré 老 ulama Sheikh Abd al-Rahman 60 多岁——通过爸爸——每周三下午 1 小时教我阿拉伯历史 (al-\'Umari 1340 / Ibn Khaldun 1377 / Ibn Battuta 1355 Rihla)。他说"你比一半 Sankoré 男生背 Quran 准——但你不会有正式 marabout 位子。回家教其他女孩——你有 jeli 的血。"我决定家里开小教室。',
      en: '1419 — twenty, back in Timbuktu. Sheikh Abd al-Rahman, an old Sankoré ulama in his sixties, through my father gives me Wednesday afternoons in his study — al-\'Umari\'s 1340 record, Ibn Khaldun\'s 1377 Muqaddimah, Ibn Battuta\'s 1355 Rihla on Mali. He says: "You recite the Quran better than half of Sankoré\'s men, but you will not have a formal marabout\'s seat. Go home and teach girls. You have the blood of a jeli." I decide to open a small classroom in my home.',
    },
    engagementHook: {
      cn: 'Sankoré 老 ulama Sheikh Abd al-Rahman 私下教我阿拉伯历史。他说"你比一半男生背 Quran 准——但不会有正式位子。回家教其他女孩——你有 jeli 的血。"我决定家里开教室。下一节:14 世纪女性识字 vs 21 世纪。',
      en: 'An old Sankoré ulama, Sheikh Abd al-Rahman, privately teaches me Arabic history. "You recite better than half of them, but you will not have a formal seat. Go home and teach girls. You have the blood of a jeli." I open a classroom at home. Next: fourteenth-century female literacy and twenty-first.',
    },
    expectedLength: '480-530 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N11 — REFLECTION: 14 世纪女性识字 vs 21 世纪 Malala — 600 年模板
  // ═══════════════════════════════════════════════════
  {
    id: 11,
    phase: 'reflection',
    cosplay: 'Aisha',
    narrativeRef: '§3 line 802 5 代非洲女性识字根 + Sarah audit Q5 跨时空 reflection',
    content: {
      cn:
        '1419 秋——我开了我家小教室。第一年 5 个女孩。第二年 12 个。最大 14 岁,最小 7 岁。\n\n' +
        '我教 Quran + 阿拉伯字母 + Mande 几何花纹 + 一点 al-\'Umari 历史 + Sundiata 7 岁拔猴面包树。\n\n' +
        '——\n\n' +
        '13 岁的你——读到这里——我问你一件事。\n\n' +
        '我 1419——20 岁——在 Timbuktu 家小教室——教 12 个女孩 Quran。没有正式 marabout 位子。没有书。我教的——大部分会随我死掉。\n\n' +
        '你 21 世纪读这一节。\n\n' +
        '2012——巴基斯坦——15 岁女孩 Malala 因坚持上学被塔利班枪击头部。她活下来——17 岁拿诺贝尔和平奖——现在 20 多岁——还在为女性识字斗争。\n\n' +
        '我跟 Malala 之间——600 年。我跟 Malala 之间——5 个大洲。\n\n' +
        '停 30 秒。问自己:\n\n' +
        '14 世纪 Mali 不让女人做正式 marabout——21 世纪某些地方不让女人上学——这两件事——是同一个模板——还是两个不同的事巧合长得像?\n\n' +
        '回答没有标准答案。回答需要你想清楚——600 年里发生了什么、没发生什么。',
      en:
        'Autumn 1419 — I opened the small classroom in my home. The first year, five girls. The second, twelve. Oldest fourteen, youngest seven.\n\n' +
        'I teach Quran, the Arabic alphabet, the Mande geometric patterns, a little of al-\'Umari\'s history, and Sundiata at seven pulling up the baobab.\n\n' +
        'You who are thirteen, reading this — I want to ask you something.\n\n' +
        'In 1419, I was twenty — teaching twelve girls the Quran in my home in Timbuktu. I had no formal marabout\'s seat. I had no book. Most of what I taught would die with me.\n\n' +
        'You read this in the twenty-first century.\n\n' +
        'In 2012 — Pakistan — a fifteen-year-old named Malala was shot in the head by the Taliban for insisting on going to school. She survived. At seventeen she received the Nobel Peace Prize. She is now in her twenties, still fighting for female literacy.\n\n' +
        'Between me and Malala — six hundred years.\n\n' +
        'Between me and Malala — five continents.\n\n' +
        'Pause thirty seconds. Ask yourself a question:\n\n' +
        'Fourteenth-century Mali did not allow a woman to be a formal marabout. In some places in the twenty-first century women are not allowed to go to school. Is this the same template — or two different things that happen to look alike?\n\n' +
        'No right answer. You need to think clearly:\n\n' +
        'In six hundred years — what happened — and what did not.',
    },
    deliverGoal: {
      cn: '1419 秋开教室,第 1 年 5 女孩,第 2 年 12 (7-14 岁)。教 Quran + 阿拉伯字母 + Mande 几何 + al-\'Umari + Sundiata 拔树。reflection: 我跟 Malala 600 年 + 5 大洲——14 世纪 Mali 不让女人做正式 marabout 跟 21 世纪某些地方不让女人上学——是同一模板还是两件不同的事巧合长得像?',
      en: 'Autumn 1419 — opened the classroom. Year one, five girls. Year two, twelve (seven to fourteen). Teach Quran, Arabic letters, Mande geometric patterns, al-\'Umari, Sundiata pulling the tree. Reflection: between me and Malala — six hundred years and five continents. Fourteenth-century Mali did not allow women to be formal marabouts; some places in the twenty-first century do not allow women to school. Same template, or two different things that look alike?',
    },
    engagementHook: {
      cn: '我开教室教 12 个女孩——600 年后 Malala 因坚持上学被枪击头。14 世纪 Mali vs 21 世纪某些地方——同一模板还是两件不同的事巧合长得像?停 30 秒。',
      en: 'I open a classroom for twelve girls — six hundred years later Malala is shot for insisting on school. Fourteenth-century Mali and twenty-first-century elsewhere — same template, or two different things that look alike? Pause thirty seconds.',
    },
    expectedLength: '480-530 字 CN + 真问题',
    expectsRealAnswer: true,
  },

  // ═══════════════════════════════════════════════════
  // N12 — META: closing — al-Sa'di 1655 沙漠藏书 + 4 Topic information preservation
  // ═══════════════════════════════════════════════════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§3 line 1325-1337 al-Sa\'di 沙漠藏书 + 2012 Timbuktu 危机 + Sarah audit §6.3 cross-Topic information preservation',
    content: {
      cn:
        '你跟 Aisha 走了 1413-1419——6 年。\n\n' +
        '虚构合成人物——但她代表的是真人:14-16 世纪 Timbuktu 很多 qadi 家庭女孩能背 Quran、教其他女孩——但没书、没名字。5 代人塑造非洲女性识字传统的根。\n\n' +
        '——\n\n' +
        '236 年后——1655——一个叫 al-Sa\'di 的 Sankoré 学者写完 Tarikh es-Sudan (《苏丹编年史》)。1591 摩洛哥火枪兵打 Songhai、抢 Sankoré 图书馆、70 多个 marabout 被押到 Marrakech——al-Sa\'di 亲眼见。他写完之后做一件事: 把家族手稿藏在沙漠里——希望 400 年后人能找到。\n\n' +
        '2012——Timbuktu 被武装组织占领——他们要烧手稿。Timbuktu 居民冒命把 30 万件手稿藏的藏、运的运——保住了。一些手稿就是 al-Sa\'di 1655 沙漠藏的那批——357 年传到 21 世纪手里。\n\n' +
        '——\n\n' +
        '4 个 Topic——Renaissance 印刷机 / Reformation 95 Theses 4 周印遍德国 / AoE Columbus 1493 信 9 版 / Mali al-Sa\'di 沙漠藏书——同一件事的不同面: 14-17 世纪人怎么把知识传给 400 年后的你。\n\n' +
        '准备记忆考核?',
      en:
        'You walked with Aisha through 1413-1419 — six years.\n\n' +
        'A fourteen-year-old Mande girl. A composite — not a real person. What she stands for is real.\n\n' +
        'In fourteenth- to sixteenth-century Timbuktu, many girls born into qadi families could recite the Quran, could teach other girls — but had no books, no names. Five generations of them shaped the root of female literacy in West Africa.\n\n' +
        'One more thing — between her and you, there is something else.\n\n' +
        '236 years later — 1655 — a Sankoré scholar named al-Sa\'di — born five streets from Aisha\'s classroom — finished a book called Tarikh es-Sudan (the Sudan Chronicle). In 1591 Moroccan musketeers had defeated Songhai, sacked the Sankoré library, and marched seventy marabouts to Marrakech. Al-Sa\'di saw it.\n\n' +
        'After he wrote Tarikh es-Sudan, he did one more thing: he hid the family manuscripts in the desert, hoping that someone four hundred years later would find them.\n\n' +
        'In 2012 — the twenty-first century — Timbuktu was occupied by an armed group. They wanted to burn the manuscripts. Timbuktu residents — risking their lives — hid and moved three hundred thousand manuscripts. They were saved.\n\n' +
        'Some of those manuscripts — the ones al-Sa\'di hid in the desert in 1655 — passed through three hundred and fifty-seven years to reach the twenty-first century.\n\n' +
        'Four Topics — Renaissance printing press, Reformation 95 Theses spreading across Germany in four weeks, Age of Exploration Columbus\'s 1493 letter in nine printings, Mali al-Sa\'di\'s manuscripts in the desert —\n\n' +
        'are different sides of the same thing: how people in the fourteenth through seventeenth centuries carried knowledge to you, four hundred years later.\n\n' +
        'Ready for the mastery check?',
    },
    deliverGoal: {
      cn: 'Aisha 是合成——但 14-16 Timbuktu 几代 qadi 家女孩能背 Quran 教女孩没书没名字——是非洲女性识字 5 代根。236 年后 al-Sa\'di 1655 写 Tarikh es-Sudan + 沙漠藏家族手稿——2012 Timbuktu 居民冒命保 30 万件——357 年传到 21 世纪。4 个 Topic information preservation: Renaissance 印刷机 / Reformation 95 Theses 4 周 / AoE 1493 信 9 版 / Mali al-Sa\'di 沙漠——都是 14-17 世纪人怎么把知识传给 400 年后的你。',
      en: 'Aisha is composite, but real generations of qadi-family girls in fourteenth- to sixteenth-century Timbuktu recited the Quran and taught other girls — without books and without names — and were the root of West African female literacy across five generations. 236 years later, al-Sa\'di wrote Tarikh es-Sudan in 1655 and hid the family manuscripts in the desert. In 2012, Timbuktu residents risked their lives to save three hundred thousand manuscripts. Some of al-Sa\'di\'s 1655 desert manuscripts crossed 357 years to reach the twenty-first century. Four Topics — Renaissance printing, Reformation 95 Theses, AoE Columbus 1493 letter in nine printings, Mali al-Sa\'di in the desert — are sides of the same thing: how fourteenth- through seventeenth-century people carried knowledge to you four hundred years later.',
    },
    engagementHook: {
      cn: '4 Topic 共同 thread: Renaissance 印刷机 / Reformation 95 Theses 4 周 / AoE 1493 信 9 版 / Mali al-Sa\'di 1655 沙漠——14-17 世纪人怎么把知识传给 400 年后的你。准备记忆考核?',
      en: 'Four Topics, one thread: Renaissance press, Reformation 95 Theses in four weeks, AoE Columbus 1493 letter in nine printings, Mali al-Sa\'di in the desert in 1655 — how fourteenth- through seventeenth-century people carried knowledge to you four hundred years later. Ready for the mastery check?',
    },
    expectedLength: '500-560 字 CN closing + 4 Topic preservation thread',
    expectsRealAnswer: false,
  },
];

// ═══════════════════════════════════════════════════
// 导出 lens (Aisha 顶层包装)
// ═══════════════════════════════════════════════════

export var aishaLens = {
  id: 'aisha-1413',
  icon: '📖',
  name: { en: 'Aisha', cn: '阿伊莎' },
  nameCn: '阿伊莎 (虚构合成 1413-1419 Timbuktu Mande 女孩)',
  role: {
    cn: 'Mali Empire 1413-1419 Timbuktu Mande / receiving-end / female-literacy-carrier (女性识字传承者) 视角',
    en: 'Mali Empire 1413-1419 Timbuktu Mande / receiving-end / female-literacy-carrier lens',
  },
  description: {
    cn: '你是 Aisha,一个虚构合成的 14 岁 Mande 女孩,1413 年住在 Timbuktu——Mali 帝国 Mansa Musa 1337 死 76 年后,Songhai 1591 分裂 178 年前——帝国第二阶段缓慢衰退期。妈妈 Fatima 是 qadi (法官) 家族 3 代后裔,Sankoré marabout 血脉;爸爸 Yaqub 是 Mande 跨撒哈拉商人。6 年里你听爷爷讲 Sundiata 7 岁拔猴面包树 (1413)、听 Cairo 商人讲 Mansa Musa 1324 撒金子的余波 (1414 春)、听街头 jeli 唱 12,000 enslaved 走 8000 km 的故事 (1414 夏)、听爸爸夜里说 Songhai 边境威胁 (1414 秋)、在小 Quran 学校做少数派女学生 (1415)、看妈妈被 Songhai raiders 带走 (1416 春)、跟外婆在 Bure 黄金区筛金沙 4 个月 (1416-1418)、20 岁回 Timbuktu 跟 Sankoré 老 ulama 私下学阿拉伯历史 (1419)、家里开小教室教 12 个女孩 Quran——你不是数字,是有名字 + 有 Quran + 有 Mande 几何花纹 + 有 Sundiata 史诗记忆的女孩。',
    en: 'You are Aisha, a fictional composite fourteen-year-old Mande girl living in Timbuktu in 1413 — seventy-six years after Mansa Musa\'s 1337 death, one hundred seventy-eight years before Songhai\'s 1591 fall — in the Mali Empire\'s second-phase slow decline. Your mother Fatima descends from three generations of qadi (judges) and a Sankoré marabout; your father Yaqub is a Mande trans-Saharan merchant. Over six years you hear your grandfather sing seven-year-old Sundiata pulling up the baobab (1413), hear a Cairo merchant tell of the aftershocks of Mansa Musa\'s 1324 gold (spring 1414), hear an old jeli sing the twelve thousand enslaved who carried four pounds of gold across eight thousand kilometers (summer 1414), hear your father whisper of Songhai raids on the border (autumn 1414), study as one of two girls in a small Quran school (1415), watch your mother taken by Songhai raiders (spring 1416), sift gold sand four months with your grandmother in Bure (1416-1418), return to Timbuktu at twenty and read Arabic history privately with an old Sankoré ulama (1419), and open a small classroom in your home for twelve girls. You are not a number. You are a girl with a name, a Quran, Mande geometric patterns, and the Sundiata epic in your memory.',
  },
  perspectiveTag: 'female-literacy-carrier',
  fictionalDisclaimer: {
    cn: 'Aisha 是虚构合成人物——史书没写过她。但她活的世界全是真的:Sundiata (1217 生 / 1235 Kirina 战役) + Mansa Musa (1312 登基 / 1324 朝圣 / 1337 死) + Sankoré 大清真寺 (Mansa Musa 资助扩建) + Bure 黄金森林 + qadi (法官) 制度 + Mande 几何织布 + 跨撒哈拉商队 + Songhai 1430s 分裂前夜 + al-Sa\'di 1655 Tarikh es-Sudan 沙漠藏书——都是真的历史。Aisha 代表 14-16 世纪 Timbuktu 几千个 qadi/marabout 家庭出身、能背 Quran + 能教其他女孩、但没书没名字留在历史的 Mande 女孩——她们 5 代人塑造非洲女性识字传统的根。这种「真人 + 虚构合成」配对跟 AoE Anacaona Jr (虚构 Taíno) + Reformation Sister Agnes (虚构修女) 同 pattern——让 receiving-end 的没名字的人有一个能跟你坐下来讲 6 年的 voice。',
    en: 'Aisha is a fictional composite — the chronicles never recorded her. But the world she lives in is real: Sundiata (born 1217, Kirina 1235), Mansa Musa (acceded 1312, pilgrimage 1324, died 1337), the Great Mosque of Sankoré (expanded with Mansa Musa\'s funding), the Bure gold forest, the qadi (judge) system, Mande geometric weaving, trans-Saharan caravans, the eve of the 1430s Songhai breakaway, and al-Sa\'di\'s 1655 Tarikh es-Sudan and his manuscripts hidden in the desert — all real history. Aisha stands in for the thousands of girls born into qadi or marabout families in fourteenth- to sixteenth-century Timbuktu who could recite the Quran and teach other girls but left no books and no names — five generations of them shaped the root of female literacy in West Africa. This pairing of real history with a fictional composite uses the same pattern as Anacaona Jr (fictional Taíno) in the Age of Exploration Topic and Sister Agnes (fictional nun) in the Reformation Topic — giving a receiving-end nameless person a voice that can sit down with you and tell six years.',
  },
  storyboard: aishaStoryboard,
};

export default aishaStoryboard;

// ─── Storyboard 元信息 (staging) ───
export var meta = {
  topicId: 'mali-empire-1235',
  lensId: 'aisha-1413',
  schemaVersion: 2,
  status: 'staging',
  estimatedMinutes: 32,
  authorNote:
    '12 nodes 完整 — N1 1413 春 hook (14 岁 Aisha + 家庭) / N2 1413 夏 ⭐ 主 visual anchor 爷爷讲 Sundiata 7 岁拔猴面包树 / N3 1413 秋 Sankoré 织布 + 爷爷讲 Mansa Musa 1324 / N4 1414 春 Cairo 商人讲 al-\'Umari 通胀 5-10 年 (Sarah P0.5 修订) / N5 1414 夏 ⭐ cross-lens micro-detail 老 jeli 唱 12,000 enslaved + Ibn Battuta 1353 在 Cairo 见过他们孙子 / N6 1414 秋 Songhai raid Walata 商队 — Mali 衰退第一信号 / N7 1415 Quran 学校少数派女学生 + Khadija 13 岁 + 男孩涨红脸 / N8 1416 春 ⚠️ careful framing 妈妈被 Songhai raiders 带走 — 妈妈推 Aisha 进 mil 仓 + 不回头 / N9 1416-1418 Bure 黄金区跟外婆筛金沙 4 月 + 5000 km 一根线 / N10 1419 20 岁 Sankoré 老 ulama Sheikh Abd al-Rahman 私下教阿拉伯历史 + 家里开教室 / N11 reflection 14 世纪 Aisha vs 21 世纪 Malala 600 年 / N12 ⭐ closing — al-Sa\'di 1655 沙漠藏书 + 2012 Timbuktu 30 万手稿抢救 + 4 Topic information preservation thread (Renaissance 印刷 / Reformation 95 Theses / AoE 1493 信 / Mali 沙漠藏书). N5 + N12 cross-lens echo 全部就位.',
};
