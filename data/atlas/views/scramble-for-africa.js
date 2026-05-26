// view: Scramble for Africa & New Imperialism · 1870-1914 · Africa
// Grade 10 (HS World History) · AP World 6.2-6.4 / AP Euro 7 / CA HSS 10.4
export const VIEW = {
  id: 'scramble-for-africa',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/scramble-for-africa-1884?from=atlas&atlasId=scramble-for-africa',
  grade: 10,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-10.4',       label: { cn: 'CA HSS 10.4 帝国主义在非洲与亚洲的动因与后果', en: 'CA HSS 10.4 Causes and consequences of imperialism in Africa and Asia' } },
    { code: 'AP-WHAP-6.2',       label: { cn: 'AP World Unit 6.2 国家扩张 + 新帝国主义动因', en: 'AP World Unit 6.2 State expansion + motives of New Imperialism' } },
    { code: 'AP-WHAP-6.3',       label: { cn: 'AP World Unit 6.3 本土对帝国主义的回应', en: 'AP World Unit 6.3 Indigenous responses to imperialism' } },
    { code: 'AP-WHAP-6.4',       label: { cn: 'AP World Unit 6.4 经济帝国主义', en: 'AP World Unit 6.4 Economic imperialism' } },
    { code: 'AP-EURO-7',         label: { cn: 'AP European Unit 7 新帝国主义 1815-1914', en: 'AP European Unit 7 The New Imperialism 1815-1914' } },
  ],
  title:    { cn: '瓜分非洲与新帝国主义', en: 'The Scramble for Africa & New Imperialism' },
  subtitle: { cn: '1870-1914 · 非洲 · 柏林会议 + 刚果自由邦橡胶暴政 + 文明使命论被殖民经济利益吃掉', en: '1870-1914 · Africa · Berlin Conference + Congo Free State rubber atrocities + civilizing-mission rhetoric eaten by colonial profit' },
  year: 1885,

  camera: {
    projection: 'mercator',
    center: [20, 5],
    scale: 700,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1914',
    },
    F:  { ids: ['niger-river', 'sahara-trade', 'suez-isthmus'] },
    L4: {
      pins: ['berlin-1880', 'cairo-1324', 'timbuktu-1324', 'african-decolonization-1960'],
    },
  },

  causalSummary: {
    cn: 'L0 刚果河流域中部非洲 — 一条巨大的赤道河 + 周围茂密雨林; 刚果自由邦面积 ~230 万平方公里 / 比比利时大 76 倍 / 约等于美国密西西比河以东 + L1 赤道雨林又湿又热 / 疟疾长期挡住欧洲人深入内陆 — 直到 19 世纪奎宁普及 + L2 关键反 Whig 锚: 非洲不是「文明空白区」— 几百年前有 Mali 帝国, 14 世纪 Timbuktu 是世界知识中心之一; 刚果河流域众多族群有自己的语言 / 宗教 / 政治结构 + 木薯 / 渔猎 / 跨区域贸易 + L3 1870s 起欧洲进入「新帝国主义」— 工业革命要原料 + 民族主义把殖民地变国威象征 + 社会达尔文主义给种族等级伪科学包装 + 文明使命论 (civilizing mission / mission civilisatrice /「the white man\'s burden」Kipling 1899) 把抢夺洗成高尚事业 — 但这套修辞被殖民经济利益直接吃掉: 刚果橡胶配额 + 人质 + 砍手 + L4 三件技术拼出「打得过」: 奎宁 (进得去) + 蒸汽船 / 铁路 / 电报 (控得住) + Maxim gun 1884 (一分钟数百发, 一小队欧军压制人数多得多的非洲军) → 1884-85 Berlin Conference 14 个欧洲国家瓜分非洲 / 桌上一个非洲人都没有 / 承认 Leopold 对刚果的控制 → 1885-1908 Congo Free State 是 Leopold 个人私人产业 (不是比利时殖民地) → 1890 George Washington Williams 公开信最早系统揭发 / 1891 病死英国 → 1896 埃塞俄比亚 Adwa 战役打败意大利 (非洲唯一保住独立的) → 1904 Alice Seeley Harris 拍下 Nsala 父亲盯着被杀害的 5 岁女儿 Boali 被砍下的手和脚 + Roger Casement 官方调查报告 → 1908 Leopold 被迫交比利时 / 1909 死前烧档案三天 / 致死约数百万 → 1904-08 Herero & Nama 灭绝 (德属西南非洲) → 1914 到此除埃塞俄比亚和利比里亚外全非洲都成欧洲殖民地 → 1960s 独立时新国家被迫继承殖民国界 (笔直的尺线劈裂族群) → 今天非洲很多内战 / 钴矿 (DRC 是全球电池钴中心) 长尾仍可追回那张桌子',
    en: 'L0 Congo basin in central Africa — a vast equatorial river surrounded by dense rainforest; the Congo Free State covered ~2.3 million sq km / 76× the size of Belgium / roughly the US east of the Mississippi + L1 equatorial rainforest, wet and hot, malaria long blocked Europeans from going inland — until quinine spread in the 19th century + L2 the key anti-Whig anchor: Africa was not a "civilizational blank" — centuries earlier the Mali Empire had stood, and in the 14th century Timbuktu was a world center of learning; the Congo river\'s many peoples had their own languages / religions / political structures + cassava farming / fishing / regional trade + L3 from the 1870s Europe entered "New Imperialism" — industrial revolution demanded raw materials + nationalism made colonies a mark of great-power prestige + Social Darwinism dressed racial hierarchy in pseudoscience + the civilizing mission (mission civilisatrice / Kipling\'s 1899 "white man\'s burden") washed plunder as a noble cause — yet this rhetoric was directly eaten by colonial profit: Congo rubber quotas + hostages + severed hands + L4 three pieces of technology unlocked "winning the fight": quinine (getting in) + steamships / railways / telegraph (holding it) + the 1884 Maxim gun (hundreds of rounds a minute, a small European force overpowering far larger African armies) → 1884-85 Berlin Conference, 14 European countries carved up Africa with not one African at the table and recognized Leopold\'s control of the Congo → 1885-1908 the Congo Free State was Leopold II\'s personal private property (not a Belgian colony) → 1890 George Washington Williams\'s open letter was the earliest systematic exposure; he died of illness in England in 1891 → 1896 Ethiopia defeated Italy at Adwa (the only African state to keep independence) → 1904 missionary Alice Seeley Harris photographed Nsala, the father staring at the hand and foot cut from his murdered 5-year-old daughter Boali + Roger Casement\'s 1904 official report → 1908 Leopold forced to hand the Congo to Belgium / 1909 burned the archives for three days before his death / millions dead → 1904-08 the Herero and Nama genocide (German South West Africa) → by 1914 all of Africa except Ethiopia and Liberia was a European colony → in the 1960s the new independent states were forced to inherit the colonial borders (ruler-straight lines splitting peoples) → today many of Africa\'s civil wars / cobalt extraction (the DRC is the world\'s battery-cobalt center) still trace back to that table',
  },

  keyFigures: [],

  examPoints: {
    cn: [
      '1884-85 Berlin Conference 柏林会议 — 14 个欧洲国家 / 桌上没一个非洲人 / 定「effective occupation 有效占领」规则 (不是当场画完所有线, 实际瓜分会后 20 多年逐步完成)',
      'Congo Free State 刚果自由邦 1885-1908 是 Leopold II 个人私人产业 — 不是比利时殖民地 (1908 才交比利时) / 「Free」是反讽',
      'Rubber 橡胶榨取 + 配额 + 人质 + 砍手 (一只手成为配额货币) — 经济帝国主义经典 (1890s 充气轮胎热让野生藤蔓变金矿)',
      '1904 Alice Seeley Harris 照片: Nsala 盯着被杀害的 5 岁女儿 Boali 的手和脚 (不是「砍手幸存」)',
      'George Washington Williams 1890 公开信 — 最早系统使用「crimes against humanity」之一, 让它广为人知 (注意措辞: 不是「首用 / 首创」, 国际法概念到 20 世纪纽伦堡才成形)',
      'Roger Casement 1904 官方调查报告 → 1908 Leopold 被迫交比利时',
      '文明使命 mission civilisatrice + Social Darwinism 配合: 一个是道德包装「所以来帮你」, 一个是伪科学论据「我们更高级」— Kipling 1899「white man\'s burden」',
      '三件技术 = 瓜分速度: 奎宁 (进得去) + 蒸汽船 / 铁路 / 电报 (控得住) + Maxim gun 1884 (打得过)「Whatever happens, we have got / The Maxim gun, and they have not」',
      '直接统治 (法国, 派自己人 + 推法语) vs 间接统治 (英国, Frederick Lugard 在尼日利亚, 保留酋长当代理) — 刚果是更极端的「特许公司 + 配额暴力」, 不是两者典型',
      '非洲反抗 (AP World 6.3): 埃塞俄比亚 1896 Adwa 战役打败意大利 (+ 利比里亚) = 1914 全非洲只这两块没被殖民; 祖鲁王国 1879 Isandlwana 重创英军',
      'Herero & Nama 灭绝 1904-08 (德属西南非洲) — 20 世纪第一场殖民种族灭绝',
      '长尾后果: 笔直国界 (1960s 独立被迫继承「既成国界」原则) + 资源榨取从橡胶到 DRC 钴矿 (你手机电池可能有刚果钴)',
    ],
    en: [
      '1884-85 Berlin Conference — 14 European powers / not one African at the table / set the "effective occupation" rule (the lines were not all drawn on the spot; actual partition unfolded over 20+ years)',
      'Congo Free State 1885-1908 was Leopold II\'s personal private property — not a Belgian colony (transferred to Belgium only in 1908) / "Free" was bitter irony',
      'Rubber extraction + quotas + hostages + severed hands (a hand became a quota currency) — a textbook case of economic imperialism (the 1890s pneumatic-tire boom turned wild vines into a "gold mine")',
      '1904 Alice Seeley Harris photograph: Nsala staring at the hand and foot of his murdered 5-year-old daughter Boali (not "surviving after a hand was cut")',
      'George Washington Williams\'s 1890 open letter — among the earliest to systematically use "crimes against humanity" and helped make it widely known (careful wording: not "first to coin"; it became a formed international-law concept only at the 20th-century Nuremberg trials)',
      'Roger Casement\'s 1904 official report → 1908 Leopold forced to hand the Congo to Belgium',
      'Civilizing mission (mission civilisatrice) + Social Darwinism working together: moral packaging "so we come to help you" + pseudoscientific argument "we are higher" — Kipling\'s 1899 "white man\'s burden"',
      'Three technologies = the speed of partition: quinine (getting in) + steamships / railways / telegraph (holding it) + the 1884 Maxim gun (winning) — "Whatever happens, we have got / The Maxim gun, and they have not"',
      'Direct rule (France, sends its own officials + pushes French) vs indirect rule (Britain, Frederick Lugard in Nigeria keeps chiefs as agents) — the Congo was the more extreme "concession company + quota violence" model, typical of neither',
      'African resistance (AP World 6.3): Ethiopia\'s 1896 Adwa victory over Italy (+ Liberia) = the only two parts of Africa not colonized by 1914; the Zulu kingdom\'s 1879 Isandlwana blow against the British',
      'Herero and Nama genocide 1904-08 (German South West Africa) — the first colonial genocide of the 20th century',
      'Long-tail consequences: ruler-straight borders (forced to be inherited at 1960s independence under "uti possidetis") + resource extraction running from rubber to DRC cobalt (your phone battery may contain Congolese cobalt)',
    ],
  },
};
