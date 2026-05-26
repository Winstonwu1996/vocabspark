// ─── Civil Rights Movement 1954-1968 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 民权运动 · The Civil Rights Movement 1954-1968
// CA HSS Grade 11 · APUSH Period 8 · AP US Government (Brown v. Board / Letter from Birmingham Jail / Voting Rights Act 1965)
//
// 3 lens 设计 (per TOPIC_ROADMAP_G6_G12.md B9 + AUTHORING_PIPELINE 第 8/12 条):
//   - george-wallace                 (perpetrator-actor) — George Wallace 1919-1998 阿拉巴马州长 / 挡校门「永远隔离」/ 晚年忏悔
//   - bayard-rustin                  (lonely-mediator)   — Bayard Rustin 1912-1987 MLK 非暴力导师 / 华盛顿大游行操盘手 / 因同性恋身份被运动雪藏
//   - selma-teen-marcher-receiving-end (receiving-end)   — Selma 青少年游行者 composite c.1948-2020 / 1965 血腥星期日桥上挨打 (VERBATIM key, DEFAULT)
//
// 跨 lens micro-detail (N6 anchor): 「等」与「兑现」之间的那座桥 — 同一段历史的三面
//   - Wallace N6: 1963.6.11 挡校门 — 用身体堵在 Brown 判决和黑人学生之间
//   - Rustin N6: 1963.8.28 华盛顿大游行 — 操盘最响亮的一天,自己却被推到后台
//   - Selma teen N6 (ANCHOR): 1965.3.7 Edmund Pettus 桥 Bloody Sunday — 走过一座以三 K 党头目命名的桥去争投票权,挨打不还手
//
// 跨 Topic 锚:
//   - Wallace 挡校门 vs Brown v. Board → reconstruction (14th Amendment Equal Protection 终于在 90 年后被激活,强闭环)
//   - Bayard Rustin 被边缘化 → womens-suffrage Ida B. Wells (运动内部对「不够体面」成员排斥的母题)
//   - Selma 青少年 → slavery-abolition Tubman + cold-war 代理战争平民 (普通人/年轻人承受历史重量)
//
// defaultLens = 'selma-teen-marcher-receiving-end' (受影响者优先 pattern: 青少年 + 承受暴力一方 + N6 桥上 anchor + 没合上的圆 closing)
//
// STRUCTURE SPEC (long-arc 12-node):
//   - 12 nodes per lens; N1 hook / N2-N3 setup / N4 personal peak / N5 story / N6 ANCHOR cross-lens micro-detail
//     / N7-N9 story / N10 zoom-out + topic connection / N11 synthesis (true) / N12 closing meta (true)
//   - 220-360 CN chars per node; only N6 + N11 anchor may reach 480 (NOT 550); every other ≤380; #nodes>380 ≤2/lens
//   - expectsRealAnswer: ONLY N11 (synthesis) + N12 (close) = true (2 per lens, 6 total); all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 4-agent review (TBD): 7thgrader (小 U) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: George Wallace (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var georgeWallaceLens = {
  id: 'george-wallace',
  name: 'George Wallace',
  nameCn: '乔治·华莱士',
  role: 'perpetrator-actor',
  perspectiveTag: 'schoolhouse-door',
  icon: '🚪',
  description: {
    cn: '阿拉巴马人，1919 年生在棉花县的小农家庭，年轻时是个职业拳击手，靠拳头和一张嘴打进政坛。早年立场其实不算极端，可 1958 年竞选州长输给了打种族牌的对手，他从这场失败里学到一个冷酷的教训。1963 年他就职就喊出「永远隔离」，亲身堵在大学门口不让黑人学生进。同一个他，几十年后中风坐上轮椅，跑去黑人教堂请求原谅。这一遍让你从挡门那个人内部，看一个人怎么先选了恨，又怎么在最后想往回走。',
    en: 'An Alabama man, born 1919 to a small farming family in cotton country, a professional boxer in his youth who fought his way into politics with his fists and his mouth. His early stands were not extreme, but in 1958 he lost a run for governor to an opponent who played the race card, and he took a cold lesson from that defeat. In 1963 he opened his term crying "segregation forever" and stood in person at a university door to keep Black students out. The same man, decades later, sat in a wheelchair after a stroke and went to Black churches to ask forgiveness. This pass lets you watch, from inside the man at the door, how a person first chose hate, and then, at the end, tried to walk it back.',
  },
  storyboard: [
    {
      id: 'gw-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1963 年 6 月 11 日，阿拉巴马。烈日下，我结结实实站在大学礼堂的门口，挡住进出的路。\n\n门那头，两个黑人学生想进来上课。法院已经判了，他们有权进。可我就站在这儿，不让。\n\n我是 George Wallace（乔治·华莱士），阿拉巴马州长。半年前就职那天，我对着全州喊了一句话：「现在隔离，明天隔离，永远隔离。」\n\n年轻时我是个拳击手。我懂一件事：站着不倒，比打出去更需要狠劲。今天我就是要站在这门口，让全国都看见我没让步。\n\n这一遍，你站进我这个位置——一个亲手把人挡在门外的人。看清楚我为什么这么做，比骂我一句「坏人」更难，也更重要。',
        en: '11 June 1963, Alabama. Under a blazing sun, I stood squarely in the doorway of a university auditorium, blocking the way in and out.\n\nBeyond the door, two Black students wanted to come in to register. The court had already ruled they had the right. But I stood here, and I would not let them.\n\nI am George Wallace, governor of Alabama. Half a year earlier, on the day I was sworn in, I cried one line to the whole state: "Segregation now, segregation tomorrow, segregation forever."\n\nIn my youth I was a boxer. I learned one thing: to stand and not fall takes more grit than to throw a punch. Today I would stand in this doorway and let the whole country see I had not yielded.\n\nThis pass puts you in my place, a man who blocked people at a door with his own body. Seeing why I did it is harder than calling me a "bad man," and it matters more.',
      },
      deliverGoal: 'N1 hook — 1963.6.11 挡校门 (烈日下结实站门口挡两个有权入学的黑人学生) + Wallace 自我介绍 (州长/就职喊永远隔离/拳击手出身懂站着不倒) + 这一遍从挡门者内部看 + 「理解比骂坏人更难也更重要」',
      engagementHook: '我亲手把人挡在门外，还让全国都看见。「理解一个做坏事的人为什么这么做」，比直接骂他一句坏人，是更软弱还是更难？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我从哪儿来，你才懂我怎么变成门口那个人。\n\n我 1919 年生在阿拉巴马一个种棉花的小农家庭，不富。年轻时打过职业拳击，轻量级，挨过不少拳，也学会了不怕挨拳。后来读法律、当法官、进政坛。\n\n说出来你可能不信：早年我在阿拉巴马算是温和派。当法官时，我对来打官司的黑人律师还挺客气，这在当时的南方很少见。\n\n那时候的南方是什么样？是 Jim Crow——法律明文规定，黑人和白人分开坐公交、上不同的学校、用不同的饮水机和厕所。黑人想登记投票，要过识字测验、交人头税，登记官还故意刁难——黑人的投票率被压得极低。\n\n这套隔离制度，我一开始没想去捍卫到底。可一场选举，改了我整个人。',
        en: 'First, where I came from, so you understand how I became the man at the door.\n\nI was born in 1919 to a small cotton-farming family in Alabama, not well off. In my youth I boxed professionally, lightweight, took plenty of punches, and learned not to fear them. Later I read law, became a judge, entered politics.\n\nYou may not believe it: in my early years I counted as a moderate in Alabama. As a judge I was courteous to Black lawyers who argued before me, rare in the South of that time.\n\nWhat was the South like then? It was Jim Crow, laws that ordered Black and white people to sit apart on buses, attend different schools, use different drinking fountains and restrooms. A Black person who wanted to register to vote had to pass a literacy test, pay a poll tax, and endure a registrar deliberately making it hard. Black voter registration was pressed down to almost nothing.\n\nThis system of segregation, at first I did not set out to defend it to the end. But one election changed the whole of me.',
      },
      deliverGoal: 'N2 setup — Wallace 出身 (1919 棉花小农/职业拳击轻量级/读法律当法官) + 早年算温和派 (对黑人律师客气) + Jim Crow 解释 (公交/学校/饮水机/厕所隔离 + 识字测验/人头税压低黑人投票) + 「一场选举改了我整个人」伏笔',
      engagementHook: '我早年其实是个温和派，是一场选举把我变了。一个人为了赢，会不会把自己原本相信的东西整个换掉？你见过这样的转变吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '改变我的，是 1958 年那场州长选举。\n\n那次我输了。赢我的对手，靠的是把种族牌打到最响——谁喊隔离喊得最凶，谁就拿到白人选民的票。我喊得不够凶，我输了。\n\n输了以后，我跟身边人说了一句很冷的话，大意是：再也不会有人在「种族」这件事上比我更狠了。\n\n你听懂这句话的可怕了吗？我不是真信「隔离」信到骨子里。我是算清楚了：在 1960 年代的阿拉巴马，喊隔离 = 选票。我把一群人的尊严，换算成了我自己的政治筹码。\n\n1962 年我再选州长，这次我把种族牌打到最响。我赢了。\n\n1963 年 1 月就职，我站在台上，对着话筒吼出那句让我臭名昭著的话：「现在隔离，明天隔离，永远隔离。」\n\n台下欢呼。我知道我赌对了。',
        en: 'What changed me was the governor\'s race of 1958.\n\nI lost that one. The man who beat me played the race card as loud as it would go. Whoever cried segregation hardest took the white voters. I did not cry loud enough, and I lost.\n\nAfter the loss I said something cold to the people around me, in plain terms: never again would anyone be harder than me on race.\n\nDo you hear how chilling that line is? I did not truly believe in "segregation" down to my bones. I had done the arithmetic: in 1960s Alabama, crying segregation equaled votes. I converted a whole people\'s dignity into my own political chips.\n\nIn 1962 I ran for governor again, and this time I played the race card as loud as it would go. I won.\n\nIn January 1963, at my swearing-in, I stood at the podium and roared into the microphone the line that made me infamous: "Segregation now, segregation tomorrow, segregation forever."\n\nThe crowd cheered. I knew I had bet right.',
      },
      deliverGoal: 'N3 setup — 1958 选举输给打种族牌的对手 + Wallace 冷酷教训 (再没人比我更狠) + 「不真信隔离而是算清喊隔离=选票/把人的尊严换政治筹码」+ 1962 再选用种族牌赢 + 1963.1 就职吼「永远隔离」台下欢呼',
      engagementHook: '我不是真信隔离，我是算清了喊隔离能换选票。明知道是错的、却因为「有用」就去做——这种人，是不是比真信的人更可怕？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1963 年 6 月，联邦法院判了：两个黑人学生 Vivian Malone 和 James Hood，有权进阿拉巴马大学读书。\n\n你心里很清楚一件事：你拦不住。联邦的力量比一个州长大得多，最后他们一定能进去。\n\n那你为什么还要去门口堵着？\n\n因为这不是一场你想赢的仗——这是一场表演。你要让全阿拉巴马的白人选民看见：你们的州长，为了你们，亲身站到了门口，硬扛到最后一刻。\n\n你已经跟联邦私下打过招呼：等国民警卫队一到，你就让开。整件事，从头到尾，是排练好的。\n\n这一刻你得想清楚：你明知道挡不住，明知道这两个学生有权进，你还是要用身体堵在那里——只为了一场给选民看的戏。\n\n为了选票，把两个真实的年轻人当成你舞台上的道具，你下得了这个手吗？',
        en: 'Now you are me.\n\nIn June 1963 a federal court ruled: two Black students, Vivian Malone and James Hood, had the right to enroll at the University of Alabama.\n\nYou know one thing clearly: you cannot stop it. Federal power is far greater than one governor\'s, and in the end they will get in.\n\nSo why go stand at the door at all?\n\nBecause this is not a fight you mean to win. It is a performance. You want every white voter in Alabama to see: your governor, for you, stood at the door in person and held out to the last moment.\n\nYou have already sent word to the federal side privately: the moment the National Guard arrives, you will step aside. The whole thing, start to finish, is rehearsed.\n\nHere you must see it clearly: you know you cannot stop them, you know these two students have the right to enter, and still you block the way with your body, only for a show staged for voters.\n\nFor votes, to make two real young people props on your stage, can you bring yourself to do it?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1963.6 联邦法院判 Vivian Malone + James Hood 有权入学 + 你拦不住 (联邦力量更大) + 挡门是一场给白人选民看的表演 (已私下约定国民警卫队到就让开/排练好的) + 自我拷问: 为选票把两个真年轻人当道具',
      engagementHook: '我明知挡不住，还是去堵门——因为这是一场给选民看的戏，那两个学生只是我的道具。为了「赢」，你能把活生生的人当成道具吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我挡门这套戏，不是孤立的一场。\n\n那几年，整个南方都在用暴力顶住黑人争权利的浪潮。就在我挡门前几周，同一个阿拉巴马，Birmingham 市的警察局长「Bull」Connor，对着和平游行的黑人——包括很多孩子——放警犬、开高压水枪。\n\n那些画面上了电视，全世界都看见了：警犬扑咬，水枪把孩子冲翻在地。\n\n你以为这帮我们这些喊隔离的人赢了民心？正相反。普通美国人坐在客厅里看着电视，第一次直观看见「隔离」长什么样子——是孩子被水枪冲翻。很多本来不关心的人，心一下子偏向了游行的人。\n\n我当时没完全看明白：我们越用暴力去堵，电视就越把这暴力放大，舆论就越往我们的对立面倒。\n\n我赌的是阿拉巴马的选票。可整个国家，正在因为这些画面，慢慢转向。',
        en: 'My stand at the door was not one isolated scene.\n\nIn those years the whole South was using violence to hold back the rising tide of Black people claiming their rights. Just weeks before I blocked the door, in the same Alabama, the Birmingham police chief "Bull" Connor set police dogs and high-pressure water hoses on peaceful Black marchers, many of them children.\n\nThose images went out on television, and the whole world saw: dogs lunging, hoses knocking children to the ground.\n\nYou might think that helped those of us who cried segregation win hearts. The opposite. Ordinary Americans sat in their living rooms watching, and for the first time saw plainly what "segregation" looked like, children knocked down by water hoses. Many who had not cared before swung suddenly toward the marchers.\n\nAt the time I did not fully grasp it: the harder we held back with violence, the more television magnified that violence, and the more opinion tilted to our opposite side.\n\nI was betting on Alabama votes. But the whole country, because of those images, was slowly turning.',
      },
      deliverGoal: 'N5 story — 挡门不是孤立 (整个南方用暴力顶住浪潮) + Birmingham「Bull」Connor 警犬高压水枪对游行孩子 (1963) + 画面上电视全世界看见 + 反效果 (普通美国人第一次看见隔离长什么样→舆论倒向游行者) + 「越用暴力堵电视越放大舆论越倒」',
      engagementHook: '我们越用暴力去堵，电视就越把它放大，全国人心反而越倒向对面。有时候,「赢了眼前」恰恰输掉了更大的局——你见过这种情况吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我堵在那扇门口的时候，到底在堵什么？\n\n表面上，我堵的是两个学生。可往深里看，我堵的是一张早就写好的判决——Brown v. Board（布朗诉教育委员会案）。\n\n1954 年，就在我挡门的九年前，最高法院一致裁定：公立学校的种族隔离违宪。依据是宪法第 14 修正案（14th Amendment）里的「平等保护」——法律必须平等地保护每一个人。\n\n可你知道这条「平等保护」是什么时候写进宪法的吗？是 1868 年，南北战争刚打完那阵子（你跑过重建那段历史就懂这条根）。也就是说，「法律面前人人平等」这句话，早在我挡门前快一百年，就白纸黑字写在宪法里了。\n\n写下来，是一回事。落地，是另一回事。\n\n我用身体堵的，不是两个学生。是那快一百年里，一直没真正兑现的那句话。我想再多挡它几年。',
        en: 'When I stood blocking that door, what was I really blocking?\n\nOn the surface, two students. But look deeper, and I was blocking a ruling written long before, Brown v. Board of Education.\n\nIn 1954, just nine years before I stood at the door, the Supreme Court ruled unanimously: racial segregation in public schools is unconstitutional. The basis was the "equal protection" clause of the 14th Amendment, the law must protect every person equally.\n\nBut do you know when that "equal protection" was written into the Constitution? In 1868, right after the Civil War ended (run the reconstruction topic and you will know this root). Which means the line "all are equal before the law" had been set down in black and white in the Constitution nearly a hundred years before I blocked that door.\n\nWriting it down is one thing. Making it real is another.\n\nWhat I blocked with my body was not two students. It was that line, the one that for nearly a hundred years had never truly been honored. I wanted to hold it off a few more years.',
      },
      deliverGoal: 'N6 ANCHOR cross-Topic — 表面挡学生实则挡 Brown v. Board 1954 (校园隔离违宪/14th Amendment 平等保护) + equal protection 1868 内战后写进宪法 (跨 reconstruction Topic 强闭环) + 「写下来是一回事落地是另一回事」+ 我堵的是近百年没兑现的那句话',
      engagementHook: '「法律面前人人平等」早在 1868 年就写进了宪法，可我 1963 年还能用身体把它挡在门外。一句话写进法律快一百年了还落不了地——到底是什么在挡它？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '挡门之后，运动并没有停，反而越走越前。\n\n1965 年 3 月，在阿拉巴马的 Selma，黑人为了争投票权游行。州警在 Edmund Pettus 桥上用警棍和催泪瓦斯把他们打了回去，史称「血腥星期日」（Bloody Sunday）。\n\n这一次，电视又把画面播给了全国。和 Birmingham 一样，越打，舆论越倒向挨打的人。\n\n几个月后，1965 年 8 月，国会通过了 Voting Rights Act（投票权法案）——禁止识字测验那一套，让联邦政府盯着南方各州的选民登记。我那套压低黑人投票的老办法，被一部联邦法律掀掉了。\n\n（桥上那天对一个 17 岁的孩子意味着什么，你换到他那一遍，会亲眼看见。）\n\n我得承认：我挡得了一扇门，挡不住一个时代。我用身体、用州警的警棍，想把一句早写好的承诺再压几年。可它还是来了。',
        en: 'After the door, the movement did not stop. It pressed further forward.\n\nIn March 1965, in Selma, Alabama, Black people marched for the right to vote. State troopers beat them back on the Edmund Pettus Bridge with batons and tear gas, a day remembered as Bloody Sunday.\n\nOnce again television carried the images across the nation. As in Birmingham, the more they were beaten, the more opinion tilted to the beaten.\n\nMonths later, in August 1965, Congress passed the Voting Rights Act, banning the literacy-test machinery and putting the federal government over the Southern states\' voter rolls. My old methods for pressing down the Black vote were swept away by a federal law.\n\n(What that day on the bridge meant to a seventeen-year-old, you will see for yourself when you switch to his pass.)\n\nI have to admit: I could block a door, but not an age. With my body and the troopers\' batons I tried to hold off a promise long since written, a few more years. It came anyway.',
      },
      deliverGoal: 'N7 story — 挡门后运动越走越前 + 1965.3 Selma 投票权游行 + Edmund Pettus 桥 Bloody Sunday 警棍催泪瓦斯 + 电视又播全国舆论倒向挨打者 + 1965.8 Voting Rights Act (禁识字测验/联邦盯选民登记) 掀掉压低黑人投票的老办法 + 桥到 Selma teen lens + 「挡得了一扇门挡不住一个时代」',
      engagementHook: '我挡得了一扇门，挡不住一个时代。我用警棍想再压几年，那句承诺还是来了。当历史的潮水起来时，一个人用尽全力去堵,堵得住吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我没能挡住那个时代，可我也没立刻收手。\n\n挡门没赢我政治上的便宜，反倒让我成了全国知名的隔离派。1968、1972 年我两次竞选总统，把「白人的不满」当成全国性的招牌来卖。\n\n1972 年那次竞选途中，我在马里兰州被人开枪打中。子弹伤了脊椎，我从此腰部以下瘫痪，余生坐轮椅。\n\n这一枪，把我钉在了轮椅上，也逼我停下来想。\n\n一个一辈子靠拳头、靠站着不倒的人，突然站不起来了。我开始反复想一件事：我这一路喊「永远隔离」、堵在门口、把人的尊严换成选票——我到底伤害了多少人？\n\n身体的瘫痪，没让我软。可它把我从那台喊话的机器上，拽了下来。\n\n第一次，我不得不安静地，看着我自己干过的事。',
        en: 'I could not block that age, but I did not stop at once either.\n\nThe stand at the door won me no political bargain; instead it made me a nationally known segregationist. In 1968 and 1972 I ran for president twice, selling "white grievance" as a national brand.\n\nDuring the 1972 campaign I was shot in Maryland. The bullet damaged my spine, and from then on I was paralyzed from the waist down, in a wheelchair for the rest of my life.\n\nThat shot pinned me to the chair, and it forced me to stop and think.\n\nA man who all his life relied on his fists, on standing and not falling, suddenly could not stand. I began turning one thing over and over: along this road of crying "segregation forever," blocking the door, trading people\'s dignity for votes, how many people had I harmed?\n\nThe paralysis of my body did not make me soft. But it pulled me down off the machine that shouted slogans.\n\nFor the first time, I had to sit quietly and look at what I myself had done.',
      },
      deliverGoal: 'N8 story — 挡门让 Wallace 成全国知名隔离派 + 1968/1972 两次竞选总统卖白人不满 + 1972 竞选途中马里兰被枪击/脊椎伤/腰部以下瘫痪坐轮椅 + 枪伤逼他停下来想 (站不起来的拳击手反思伤害多少人) + 「第一次安静看自己干过的事」',
      engagementHook: '一颗子弹把我钉在轮椅上，也第一次逼我安静下来，看自己干过的事。一个人,是不是非要被命运打倒一次，才肯回头看自己？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '坐上轮椅几年后，我做了一件很多人不信、也不肯原谅的事：我开始道歉。\n\n1979 年起，我一次次去黑人教堂。我坐着轮椅，被推到台前，对着满堂当年被我伤害过的人说：我错了。我请求你们原谅。\n\n（这些都是有记录的真事，不是后人替我美化。）\n\n更让人意外的是 1982 年。我又一次竞选阿拉巴马州长——这一次，我赢，靠的是大量黑人选民的票。当年我拼命挡在门外的那群人，把票投给了我。我任内任命了创纪录数量的黑人官员。\n\n你说我是真心忏悔，还是又一次为选票表演？说实话，这两样可能都有。人很复杂，我也是。\n\n但有一点是真的：那个 1963 年吼「永远隔离」的我，和那个 1979 年坐轮椅请求原谅的我，是同一个人。\n\n人，是会变的。这件事，比「他一直是个恶棍」更难讲，也更接近真的我。',
        en: 'A few years into the wheelchair I did something many would not believe, and would not forgive: I began to apologize.\n\nFrom 1979 on I went again and again to Black churches. I sat in my wheelchair, was wheeled to the front, and said to a hall full of the people I had once harmed: I was wrong. I ask your forgiveness.\n\n(These are recorded facts, not a later generation softening me.)\n\nMore surprising still was 1982. I ran for governor of Alabama once more, and this time I won on the strength of many Black voters. The very people I had fought to block at the door cast their votes for me. In office I appointed a record number of Black officials.\n\nWas I sincerely repentant, or performing once more for votes? Honestly, it may have been both. People are complicated, and so was I.\n\nBut one thing is true: the me who roared "segregation forever" in 1963 and the me who sat in a wheelchair asking forgiveness in 1979 are the same person.\n\nPeople can change. That is harder to tell than "he was always a villain," and it is closer to the real me.',
      },
      deliverGoal: 'N9 story — 1979 起 Wallace 去黑人教堂坐轮椅道歉「我错了请求原谅」(anti-fab 括号: 有记录真事非美化) + 1982 靠大量黑人选票再当州长/任命创纪录黑人官员 + 「真心忏悔 vs 又一次表演可能都有/人很复杂」+ 「吼永远隔离的我和请求原谅的我是同一个人/人会变」',
      engagementHook: '当年我拼命挡在门外的那群人，1982 年把票投给了我。一个做过大恶的人真心道了歉——你会原谅他吗？道歉，能抵掉当年的伤害吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n10',
      type: 'narrative',
      phase: 'reflection',
      content: {
        cn: '我 1998 年死了。回头看我这一生，它像一道画歪了又想画回来的线。\n\n我留下两样东西，都活到了今天。\n\n一样是「永远隔离」那句话，和门口那个画面——它成了美国种族主义最直白的符号，至今出现在每一本讲民权运动的课本里。\n\n另一样，是「Wallace 式政治」：发现「煽动一群人的不满和恐惧」能换来选票，于是明知是火，也照点不误。这套打法，我死后还有人在学。\n\n可别忘了第三样：我后来的道歉。它提醒人——做过大恶的人，也可能回头。这件事很少被写进课本，因为它不好讲：它既不让你能痛快地恨我，也不让你能轻松地原谅我。\n\n挡门的我、煽动的我、忏悔的我——是同一个人的三张脸。哪一张是「真正的我」？也许它们全是。',
        en: 'I died in 1998. Looking back on my life, it is like a line drawn crooked and then tried to be drawn back.\n\nI left two things behind, both alive today.\n\nOne is the line "segregation forever," and the image at the door. It became the plainest symbol of American racism, appearing to this day in every textbook on the civil rights movement.\n\nThe other is "Wallace-style politics": discovering that stirring up a group\'s grievance and fear can be traded for votes, and so, knowing it is fire, lighting it anyway. People were still learning that playbook after I died.\n\nBut do not forget a third thing: my later apology. It reminds people that a man who did great wrong can also turn back. This is rarely written into textbooks, because it is hard to tell: it lets you neither hate me cleanly nor forgive me easily.\n\nThe me at the door, the me who stirred up fear, the me who repented, are three faces of one person. Which is the "real me"? Perhaps they all are.',
      },
      deliverGoal: 'N10 zoom-out — Wallace 1998 死/一生像画歪又想画回的线 + 留下三样: 永远隔离符号 (进每本民权课本) / Wallace 式政治 (煽动不满恐惧换选票/死后有人学) / 后来的道歉 (做大恶的人也可能回头/不好讲既不让痛快恨也不让轻松原谅) + 三张脸哪张是真我/也许全是',
      engagementHook: '挡门的我、煽动的我、忏悔的我——是同一个人的三张脸。一个人能不能同时是这三样？哪一张才是「真正的他」？',
      expectsRealAnswer: false,
    },
    {
      id: 'gw-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是个为权力出卖良知的人。我自己都承认不真信隔离，却把一群人的尊严换成选票，吼「永远隔离」、堵在校门口、煽动恐惧。我造成的伤害是真的，挨打的人、被挡在门外的人，不会因为我后来道歉就没疼过。\n\n另一种说法：我是个证明「人会变」的人。我晚年是真的回了头——去黑人教堂请求原谅，靠曾被我伤害的人的票再次当选，任命创纪录的黑人官员。如果连我这样的人都能改，那「人没救了」这句话，就不该轻易说出口。\n\n这两边不是「缺点加优点」。是同一个人的两段——同一双手，先挡门，后写道歉信。哪一段更算数？\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a man who sold his conscience for power. I admit I did not truly believe in segregation, yet I traded a people\'s dignity for votes, roared "segregation forever," blocked the schoolhouse door, stirred up fear. The harm I caused was real, and the people beaten, the people kept out, did not stop hurting just because I apologized later.\n\nThe other view: I was a man who proved people can change. In my last years I truly turned back, went to Black churches to ask forgiveness, won office again on the votes of those I had harmed, appointed a record number of Black officials. If even a man like me can change, then "people are beyond saving" is a thing not to be said lightly.\n\nThese are not "a flaw plus a virtue." They are two stretches of one man, the same hands that blocked the door and later wrote the apology. Which stretch counts more?\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (为权力出卖良知/不真信却把尊严换选票/伤害是真的道歉不抵消) / 另一种说法 (证明人会变/晚年真回头/连他都能改则不该轻言人没救) / 同一人两段同一双手先挡门后写道歉信 / 想 30 秒',
      engagementHook: '为权力出卖良知的人，和证明「人会变」的人——是同一双手，先挡门，后写道歉信。两边都站得住，你的 30 秒到了,哪一段更算数？',
      expectsRealAnswer: true,
    },
    {
      id: 'gw-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人？\n\n一个明知是错、却为了选票把恨喊到最响的人；又是一个老来坐着轮椅、真心去请求原谅的人。这两件事不是发生在两个人身上，是同一个我。把它们放在同一个天平上，你怎么称——道歉能不能抵一点当年的伤害？还是说，有些门一旦堵过，就永远关不严了？\n\n再想一步。今天你身边，有没有人为了「合群」「被喜欢」「赢」，去附和一件他自己心里都知道不对的事——孤立某个同学、跟风嘲笑某个人？\n\n那时候，你会是那个跟着喊的人，还是会停下来问一句：我喊的这句话，会不会真的伤到一个人？\n\n还有更难的一问：如果你曾经做过那个跟着喊的人——你有没有勇气，像我一样，回头说一句「我错了」？',
        en: 'Having walked my whole life, how would you judge a man like this?\n\nA man who, knowing it was wrong, cried hate as loud as it would go for votes; and a man who, grown old in a wheelchair, sincerely asked forgiveness. These did not happen to two people. They are the same me. Put them on the same scale, how do you weigh them, can an apology offset any of the old harm? Or are there doors that, once blocked, never close tight again?\n\nThen take one more step. In your own life today, is there someone who, to "fit in," to "be liked," to "win," goes along with something they know in their heart is wrong, freezing out a classmate, piling on to mock someone?\n\nWhen that happens, will you be the one who shouts along, or will you stop and ask: this thing I am shouting, could it really hurt a person?\n\nAnd a harder question still: if you once were the one who shouted along, do you have the courage, as I did, to turn back and say "I was wrong"?',
      },
      deliverGoal: 'N12 close — 评价 (明知错却为选票喊恨 vs 老来轮椅真心请求原谅同一天平/道歉能否抵伤害/有些门堵过关不严) + transfer「今天你身边有人为合群/赢去附和明知不对的事 (孤立同学/跟风嘲笑)」+ 你是跟着喊还是停下问/曾跟着喊有没有勇气回头说我错了',
      engagementHook: '一边是为选票把恨喊到最响，一边是老来真心请求原谅——同一个我。你会怎么评价这样一个人？今天你身边那件「为了合群去附和、心里却知道不对」的事，你会跟着喊，还是停下来——又或者，敢不敢回头说一句「我错了」？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Bayard Rustin (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var bayardRustinLens = {
  id: 'bayard-rustin',
  name: 'Bayard Rustin',
  nameCn: '贝亚德·拉斯廷',
  role: 'lonely-mediator',
  perspectiveTag: 'invisible-strategist',
  icon: '🎼',
  description: {
    cn: '宾夕法尼亚人，1912 年生，由信奉贵格会的祖母带大，和平主义从小刻进骨子里。他高高瘦瘦，弹得一手好曼陀林，唱黑人灵歌，气质优雅。1940 年代他去印度研究过甘地的非暴力抗争，是美国少数真正吃透这套方法的人。后来 MLK 那套非暴力策略，正是他手把手教的。1963 年震动世界的华盛顿大游行，幕后总指挥就是他。可他是公开的同性恋者，运动里有人怕他的身份成为把柄，反复把他推到看不见的后台。这一遍让你从一个贡献最大、名字却最少被提起的人这边，看这场运动。',
    en: 'A Pennsylvania man, born 1912, raised by a grandmother who was a Quaker, with pacifism set into him from childhood. Tall and thin, he played the mandolin beautifully, sang Black spirituals, and carried himself with grace. In the 1940s he went to India to study Gandhi\'s nonviolent resistance, one of the few Americans who truly mastered the method. The nonviolent strategy MLK later used, Rustin taught it to him hand over hand. The 1963 March on Washington that shook the world, he was its chief organizer behind the scenes. But he was an openly gay man, and some in the movement feared his identity would become a weapon against it, and pushed him again and again to the unseen back. This pass lets you see the movement from the side of the man who gave the most and whose name was spoken the least.',
  },
  storyboard: [
    {
      id: 'br-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1963 年 8 月 28 日，华盛顿。大约 25 万人挤在林肯纪念堂前的草坪上。Martin Luther King 站上台，说出那句全世界都会记住的话：「我有一个梦想。」\n\n那一刻所有的镜头都对着台上。没人看后台。\n\n后台那个拿着调度表、盯着每一个环节别出错的高瘦男人，是我。我是 Bayard Rustin（贝亚德·拉斯廷）。这一整场震动世界的大游行——交通、厕所、饮水、纠察、音响、和警方的协调——是我用两个月，一手安排出来的。\n\n台上那个梦想能被全世界听见，是因为后台没有出乱子。\n\n可你翻遍后来的课本，很难找到我的名字。\n\n这一遍，你站到后台来。看一个把整场戏撑起来、自己却被刻意留在阴影里的人，是怎么过这一生的。',
        en: '28 August 1963, Washington. About 250,000 people packed the lawn before the Lincoln Memorial. Martin Luther King took the stage and spoke the line the whole world would remember: "I have a dream."\n\nIn that moment every camera faced the stage. No one looked backstage.\n\nThe tall thin man backstage holding the schedule, watching every part so nothing went wrong, was me. I am Bayard Rustin. This whole world-shaking march, the transport, the toilets, the water, the marshals, the sound, the coordination with police, I arranged it all in two months, by my own hand.\n\nThe dream on the stage could be heard by the whole world because backstage nothing fell apart.\n\nYet search the textbooks that came after, and you will struggle to find my name.\n\nThis pass brings you backstage. To see how a man who held up the whole show, and was deliberately kept in the shadow, lived his life.',
      },
      deliverGoal: 'N1 hook — 1963.8.28 华盛顿大游行 25 万人 / MLK「我有一个梦想」镜头全对台上 + 后台拿调度表的高瘦男人是 Rustin + 整场后勤 (交通/厕所/饮水/纠察/音响/警方协调) 两个月一手安排 + 「梦想能被听见因为后台没乱/课本难找到我名字」+ 这一遍站到后台看被留在阴影里的人',
      engagementHook: '台上那个梦想能被全世界听见，是因为后台没出乱子——可课本里几乎找不到撑起后台那个人的名字。那些「让事情成」却不上台的人，该不该被记住？',
      expectsRealAnswer: false,
    },
    {
      id: 'br-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是怎么变成「懂非暴力」的那个人，你才懂我对运动到底意味着什么。\n\n我 1912 年生在宾夕法尼亚，从小由祖母带大。她信贵格会——一个把「和平」「反对暴力」当成信仰核心的教派。所以「不靠暴力也能反抗」这件事，从我很小起就不是口号，是我呼吸的空气。\n\n长大后，我没把它停在信仰上。1940 年代，我专门跑到印度，去研究甘地（Gandhi）领着印度人用非暴力赶走英国统治的那套方法——怎么组织、怎么训练人挨打不还手、怎么把对方的暴力变成自己的武器。\n\n回到美国，我成了少数几个真正吃透「非暴力」这套技术的人。注意：是技术，不只是道德。\n\n这套技术，几年后会被搬进美国南方，改写一个国家。而我，就是那个握着说明书的人。',
        en: 'First, how I became the man who "understood nonviolence," so you understand what I meant to the movement.\n\nI was born in 1912 in Pennsylvania, raised from childhood by my grandmother. She was a Quaker, a faith that holds "peace" and "rejection of violence" at its core. So the idea that "you can resist without violence" was, from when I was very small, not a slogan but the air I breathed.\n\nGrown up, I did not leave it at faith. In the 1940s I traveled to India to study the method by which Gandhi had led Indians to drive out British rule without violence, how to organize, how to train people to take a blow without striking back, how to turn the other side\'s violence into your own weapon.\n\nBack in America, I became one of the few who truly mastered the technique of nonviolence. Note: a technique, not only a morality.\n\nThis technique, a few years later, would be carried into the American South and rewrite a nation. And I was the man holding the instruction manual.',
      },
      deliverGoal: 'N2 setup — Rustin 出身 (1912 宾州/祖母贵格会/和平反暴力是从小呼吸的空气) + 1940 年代去印度研究甘地非暴力 (组织/训练挨打不还手/把对方暴力变武器) + 回美成少数吃透非暴力技术的人 (是技术不只道德) + 「我是握着说明书的人」',
      engagementHook: '非暴力不只是「善良」，它是一套技术——怎么训练人挨打不还手、怎么把对方的暴力变成自己的武器。你觉得「不还手」更像软弱，还是更像一种武器？',
      expectsRealAnswer: false,
    },
    {
      id: 'br-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '1955 年底，阿拉巴马的 Montgomery 出事了。\n\n一个叫 Rosa Parks 的黑人女性，在公交上拒绝给白人让座，被捕。当地黑人愤怒了，发起抵制：不坐公交，走路、拼车，硬扛。一个 26 岁的年轻牧师被推上了领导位置——Martin Luther King。\n\n问题是，King 那时候年轻、有激情、口才极好，但他没有一套现成的斗争方法。抵制开始后，他家被人扔了炸弹，他气得想用武力反击。\n\n这时候我去了 Montgomery。\n\n我做的事很具体：我手把手教他，怎么把非暴力从一句道德口号，变成一套真能打仗的策略。怎么训练游行的人面对警棍不还手，怎么设计行动让对方的暴力暴露在镜头前，怎么把愤怒变成纪律。\n\n后来全世界都记住了 King 的非暴力。很少有人知道，这套打法的「教练」，是站在他身后的我。',
        en: 'In late 1955, trouble broke out in Montgomery, Alabama.\n\nA Black woman named Rosa Parks refused to give up her bus seat to a white passenger and was arrested. The local Black community, furious, launched a boycott: no riding the buses, walking, carpooling, holding out. A 26-year-old young minister was pushed into leadership, Martin Luther King.\n\nThe problem was, King then was young, full of passion, a superb speaker, but he had no ready method of struggle. After the boycott began, his house was bombed, and in his anger he wanted to strike back with force.\n\nThat was when I went to Montgomery.\n\nWhat I did was concrete: I taught him, hand over hand, how to turn nonviolence from a moral slogan into a strategy that could actually fight. How to train marchers to take a baton without striking back, how to design actions so the other side\'s violence was exposed to the cameras, how to turn anger into discipline.\n\nLater the whole world remembered King\'s nonviolence. Few knew that the "coach" of that method was me, standing behind him.',
      },
      deliverGoal: 'N3 setup — 1955 末 Montgomery (Rosa Parks 拒让座被捕→公交抵制/26 岁牧师 MLK 被推上领导) + MLK 年轻有激情但无现成方法 (家被炸想武力反击) + Rustin 去 Montgomery 手把手教 (非暴力从口号变能打仗的策略/训练不还手/暴露暴力于镜头/愤怒变纪律) + 「全世界记住 King 非暴力/很少人知教练是我」',
      engagementHook: '全世界记住了 King 的非暴力，很少人知道这套打法的「教练」是站在他身后的我。一件事成功了，光环给了台前的人——背后那个真正教会他的人，公平吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'br-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你是这场运动里最懂策略的人之一。你脑子里装着甘地的方法、组织的门道、调度几十万人的能力。论本事，你该站在最前面。\n\n可你身上有一件事，在 1950 年代的美国是「致命」的：你是公开的同性恋者。1953 年，你还因此被警察抓过一次，留下了案底。\n\n你心里清楚，运动里有人怕你。不是怕你没本事——正相反，怕你太显眼。他们担心：万一敌人拿你的身份、你的案底来攻击运动怎么办？「看，这帮人里有这种人」——一句话就能把整场运动抹黑。\n\n于是你面前有两条路。\n\n一条：站出来，争你该有的位置和名声，哪怕给运动惹来攻击。\n\n另一条：把自己藏到后台，让运动安全，代价是历史可能永远记不住你。\n\n你选哪条？',
        en: 'Now you are me.\n\nYou are one of the people in this movement who understands strategy best. In your head you carry Gandhi\'s method, the craft of organizing, the ability to move hundreds of thousands. By skill, you should stand at the very front.\n\nBut you carry one thing that, in 1950s America, was "fatal": you are an openly gay man. In 1953 you were arrested for it once and left with a record.\n\nYou know clearly that some in the movement fear you. Not that you lack ability, the opposite, they fear you are too visible. They worry: what if the enemy uses your identity, your record, to attack the movement? "Look, there are such people among them," one line could smear the whole movement.\n\nSo two roads lie before you.\n\nOne: step out, claim the place and the name you deserve, even if it brings attacks on the movement.\n\nThe other: hide yourself backstage, keep the movement safe, at the price that history may never remember you.\n\nWhich road do you choose?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 你最懂策略论本事该站最前 + 1950 年代致命的事: 公开同性恋者 (1953 因此被捕留案底) + 运动里有人怕你太显眼 (敌人拿身份案底攻击运动一句话抹黑) + 两条路 (站出来争位置惹攻击 vs 藏后台保运动但历史记不住你) + 你选哪条',
      engagementHook: '一条路是站出来争你该得的位置，但可能给运动惹来攻击；另一条是藏到后台保运动安全，代价是历史可能永远记不住你。这一步,你怎么选？',
      expectsRealAnswer: false,
    },
    {
      id: 'br-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我选了后台。\n\n不是因为我懦弱，是因为我算清了：这场运动比我个人的名声重要。如果我的身份会成为敌人攻击的缺口，那我宁可站到看不见的地方，把缺口堵上。\n\n但被推到后台，过程一点都不体面。\n\n1960 年，运动里有领袖之间起了矛盾，有人放话，要拿我的性取向做文章来施压。为了不让运动分裂，我一度被迫退出某些核心位置。\n\n你能想象那种滋味吗？不是被敌人打倒——是被你为之拼命的「自己人」，悄悄请到一边去。理由是：你太「不体面」了，会拖累大家。\n\n我没有大吵大闹。我把愤怒咽下去，转身继续干活——干那些没人愿意干、又非干不可的脏活累活。\n\n因为我相信一件事：运动要赢，需要有人愿意待在不被看见的地方。而那个人，可以是我。',
        en: 'I chose backstage.\n\nNot out of cowardice, but because I had done the arithmetic: this movement mattered more than my personal name. If my identity would become the gap through which the enemy attacked, then I would rather stand where I could not be seen, and plug the gap.\n\nBut being pushed backstage was not a dignified process at all.\n\nIn 1960, a quarrel arose among leaders in the movement, and someone let it be known they would make an issue of my sexuality to apply pressure. To keep the movement from splitting, I was for a time forced out of certain core positions.\n\nCan you imagine that taste? Not being struck down by an enemy, but being quietly shown to the side by your "own people," the ones you were fighting for. The reason: you are too "improper," you will drag us all down.\n\nI did not make a loud scene. I swallowed the anger, turned, and went back to work, the dirty, tiring work no one else wanted and that had to be done.\n\nBecause I believed one thing: for the movement to win, someone had to be willing to stay where they could not be seen. And that someone could be me.',
      },
      deliverGoal: 'N5 story — Rustin 选后台 (不是懦弱是算清运动比个人名声重要/身份成缺口宁可堵上) + 但过程不体面: 1960 领袖矛盾有人拿性取向施压/为不分裂被迫退出核心位置 + 「不是被敌人打倒是被自己人请到一边/理由是太不体面拖累大家」+ 咽下愤怒继续干脏活累活 + 「运动要赢需要有人待在不被看见的地方」',
      engagementHook: '不是被敌人打倒，是被你为之拼命的「自己人」悄悄请到一边，理由是你太「不体面」。这种来自自己阵营的排斥,是不是比敌人的攻击更伤人？',
      expectsRealAnswer: false,
    },
    {
      id: 'br-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可到了 1963 年，运动要办一件大事，发现绕不开我。\n\n他们要在华盛顿办一场史无前例的大游行，目标是逼国会通过民权法案。这种规模——几十万人从全国汇到一个城市，要安全、要有序、要不出乱子、要让全世界看见——需要一个真正会组织的人。\n\n环顾一圈，能扛下这事的，只有我。\n\n于是发生了很讽刺的一幕：那群把我推到后台、嫌我「不体面」的人，这一次，不得不把整场大游行的总指挥，交到我手上。\n\n我接了。8 月 28 日那天，约 25 万人来了，秩序井然，没出大乱子。MLK 在台上说「我有一个梦想」，传遍世界。\n\n而我，那场让运动登上历史顶点的大游行的操盘手，站在后台。镜头扫过台上每一个人，唯独很少停在我身上。\n\n我把整场戏撑起来了。我也再一次，站在了它的阴影里。',
        en: 'But by 1963, the movement set out to do a great thing, and found it could not get around me.\n\nThey would hold an unprecedented march in Washington, aiming to force Congress to pass a civil rights bill. A scale like that, hundreds of thousands gathering from across the nation into one city, safe, orderly, no chaos, seen by the whole world, needed someone who could truly organize.\n\nLook around the whole circle, and the only one who could carry it was me.\n\nSo a deeply ironic scene played out: the very people who had pushed me backstage, who found me "improper," this time had to hand the chief organizing of the whole march into my hands.\n\nI took it. On 28 August about 250,000 came, orderly, no great chaos. King said "I have a dream" on the stage, and it traveled the world.\n\nAnd I, the organizer of the march that lifted the movement to its historic peak, stood backstage. The cameras swept over everyone on the stage, and only rarely rested on me.\n\nI held up the whole show. And once more, I stood in its shadow.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1963 运动办大事绕不开 Rustin (华盛顿大游行逼国会过民权法案/几十万人需要真会组织的人) + 讽刺: 把他推后台嫌不体面的人不得不把总指挥交给他 + 8.28 约 25 万人秩序井然/MLK「我有一个梦想」传遍世界 + 「我撑起整场戏/再一次站在它的阴影里」(对位 Wallace N6 挡门/Selma N6 桥 — 同一段历史三面)',
      engagementHook: '那群把我推到后台、嫌我「不体面」的人，办大事时却不得不把总指挥交到我手上——我撑起了整场戏，又一次站在它的阴影里。一个被排斥却又被需要的人,该接下这份活吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'br-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '大游行办成了，可对我个人的攻击没停。\n\n就在游行前，有一个南方的参议员，专门在国会里念出我 1953 年那次被捕的记录，想用我的身份给整场游行泼脏水。\n\n他没得逞——游行照常办成。但你看清这件事的逻辑了吗？一个争「平等」的运动，它的敌人攻击它的办法，不是说「黑人不配平等」（那太露骨了），而是说「你看，组织这事的人是个『那种人』」。\n\n敌人很懂：要抹黑一群争取尊严的人，最毒的一招，是从他们内部找一个「不够体面」的成员，把他举起来示众。\n\n而更让我心凉的是：这一招之所以有用，是因为运动内部有些人，自己也接受了「体面」这套标准。他们也觉得我「不够干净」。\n\n敌人和「自己人」，用的是同一把尺子。我，正好卡在那把尺子的刻度之外。',
        en: 'The march came off, but the attacks on me personally did not stop.\n\nJust before it, a Southern senator read out, on the floor of Congress, the record of my 1953 arrest, trying to smear the whole march with my identity.\n\nHe did not succeed, the march went on. But do you see the logic? A movement fighting for "equality," the way its enemy attacks it is not to say "Black people do not deserve equality" (too naked), but to say "look, the man who organized this is one of those people."\n\nThe enemy understood well: to smear a group fighting for dignity, the most poisonous move is to find from within them one member who is "not respectable enough," and hold him up for all to see.\n\nAnd what chilled me more was this: that move worked because some inside the movement had themselves accepted that standard of "respectability." They too thought me "not clean enough."\n\nThe enemy and my "own people" used the same ruler. And I happened to fall just outside its marks.',
      },
      deliverGoal: 'N7 story — 游行前南方参议员在国会念 Rustin 1953 被捕记录想泼脏水 (没得逞游行照办) + 攻击逻辑 (不说黑人不配平等而说组织者是那种人/从内部找不够体面的成员示众最毒) + 心凉处: 运动内部有人也接受体面标准觉得他不够干净 + 「敌人和自己人用同一把尺子/我卡在刻度之外」',
      engagementHook: '敌人和「自己人」，用的是同一把「体面」的尺子来量我。当外面的敌人和里面的同伴用同一个标准排斥你，你还能信任谁？',
      expectsRealAnswer: false,
    },
    {
      id: 'br-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得诚实跟你说：被自己人推到后台这些年，我没有变成一个怨恨的人。\n\n我本可以撂挑子，本可以公开撕破脸，把运动内部的丑陋抖出来——那会让我痛快，也会让运动受伤。\n\n我没有。我继续干活，继续教非暴力，继续在没人愿意干的脏活里扎进去。\n\n因为我想明白了一件事：如果我因为「自己人也排斥我」就退出，那我就等于承认——平等只属于「体面」的人。可我要争的，恰恰是一种不挑人的平等。一种连「不够体面」的我，也该被算进去的平等。\n\n如果连我都做不到对这场不完美的运动忠诚，那我教的那套「非暴力」，又凭什么要求别人在挨打时不还手？\n\n我对运动的忠诚，不是因为它对我公平。恰恰相反——是因为它对我不公平，我还是选择不还手。这，才是我真正信的那套东西。',
        en: 'Let me be honest with you: in those years of being pushed backstage by my own people, I did not become a bitter man.\n\nI could have thrown in the towel, could have torn things open publicly, shaken out the ugliness inside the movement. That would have felt good, and it would have wounded the movement.\n\nI did not. I kept working, kept teaching nonviolence, kept burying myself in the dirty work no one else wanted.\n\nBecause I had understood one thing: if I withdrew because "my own people reject me too," I would be admitting that equality belongs only to the "respectable." But what I fought for was precisely an equality that did not pick and choose. An equality in which even an "improper" me should be counted.\n\nIf I could not be loyal to this imperfect movement, then by what right did the nonviolence I taught ask others to take a blow without striking back?\n\nMy loyalty to the movement was not because it was fair to me. The opposite, it was because it was unfair to me, and I still chose not to strike back. That, truly, was the thing I believed.',
      },
      deliverGoal: 'N8 story — Rustin 被推后台多年没变怨恨的人 (本可撂挑子撕破脸抖丑陋/没有) + 继续干活教非暴力扎进脏活 + 想明白: 因自己人排斥就退出=承认平等只属于体面的人/他要争的是不挑人的平等 (连不够体面的他也算进去) + 「忠诚不因它公平而因它不公平我仍不还手/这才是我真信的」',
      engagementHook: '我对这场运动的忠诚，不是因为它对我公平，恰恰是因为它对我不公平、我还是选择不还手。对一个亏待了你的集体保持忠诚——这是高尚，还是傻？',
      expectsRealAnswer: false,
    },
    {
      id: 'br-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '运动内部排斥「不够体面」的成员，这件事，不是只有我一个人遇上。\n\n往前推半个世纪。1913 年，妇女争选举权的大游行在华盛顿举行。一个叫 Ida B. Wells 的黑人女记者，本该和大家走在一起——可主办方怕得罪南方白人妇女，要求黑人女性走在队伍最后面。\n\nWells 拒绝走队尾。游行开始后，她从人群里挤出来，径直插进了白人队伍中间。（你跑过妇女选举权那段历史，会认得这个名字。）\n\n你看出那条线了吗？争平等的运动，自己内部却按「谁更体面」「谁更不碍事」排座次——把某些人请到队尾，请到后台。\n\n半个世纪，争的东西从「投票权」换成了「民权」，可那把「体面」的尺子，还在。\n\n我和 Wells，隔了 50 年，被同一种东西推到边上。区别是：她当场挤回了队伍中间。而我，选择了留在后台。哪一种更对？我到今天也没有答案。',
        en: 'The movement\'s rejection of members "not respectable enough," I was not the only one who met it.\n\nGo back half a century. In 1913 the great march for women\'s suffrage was held in Washington. A Black woman journalist named Ida B. Wells should have walked with everyone, but the organizers, afraid of offending white Southern women, asked Black women to walk at the very back of the line.\n\nWells refused to walk at the back. Once the march began, she pushed out of the crowd and walked straight into the middle of the white ranks. (Run the womens-suffrage topic and you will recognize this name.)\n\nDo you see the line? A movement fighting for equality, ranking its own people inside by "who is more respectable," "who is less in the way," sending some to the back of the line, to the backstage.\n\nHalf a century, the thing fought for changed from "the vote" to "civil rights," but that ruler of "respectability" was still there.\n\nWells and I, 50 years apart, were pushed to the side by the same thing. The difference: she pushed back into the middle of the line on the spot. I chose to stay backstage. Which was more right? To this day I have no answer.',
      },
      deliverGoal: 'N9 story cross-Topic — 运动排斥不够体面成员不是只我一个 + 1913 妇女选举权大游行华盛顿 / Ida B. Wells 黑人女记者被要求走队尾 (主办方怕得罪南方白人妇女) / Wells 拒走队尾挤进白人队伍中间 (跨 womens-suffrage Topic 锚) + 「半世纪争的东西变了体面那把尺子还在」+ Wells 当场挤回 vs Rustin 留后台/哪种更对没答案',
      engagementHook: 'Wells 当场挤回了队伍中间，我却选择留在后台。隔了 50 年,我们被同一把「体面」的尺子推到边上——挤回去和忍下来，哪一种更对？',
      expectsRealAnswer: false,
    },
    {
      id: 'br-n10',
      type: 'narrative',
      phase: 'reflection',
      content: {
        cn: '我 1987 年死了。死的时候，大多数人还是不太知道我是谁。\n\n可历史有时候会迟到，不会永远缺席。\n\n2013 年，我死后 26 年，美国政府追授我「总统自由勋章」——这是美国平民能拿到的最高荣誉。颁奖词里终于说清了：是我，把甘地的非暴力带进了美国民权运动；是我，操盘了 1963 年的华盛顿大游行。\n\n等了一辈子加 26 年，我那个被刻意留在阴影里的名字，才被请到了灯光下。\n\n这件事有两面。一面是暖的：迟到的承认，也是承认；一个社会愿意回头说「我们当年亏待了一个人」，本身是种进步。\n\n另一面是凉的：为什么非要等到我死了快 30 年、等到社会对同性恋的看法变了，才肯承认我的功劳？这说明——很多被埋没的人，根本等不到这一天。我是侥幸被翻出来的那一个。\n\n在我身后，还有多少把整场戏撑起来、却连勋章都等不到的人？',
        en: 'I died in 1987. When I died, most people still did not quite know who I was.\n\nBut history is sometimes late, and not always absent.\n\nIn 2013, 26 years after my death, the American government posthumously awarded me the Presidential Medal of Freedom, the highest honor a civilian can receive. The citation finally said it plainly: it was I who brought Gandhi\'s nonviolence into the American civil rights movement; it was I who organized the 1963 March on Washington.\n\nA whole life plus 26 years of waiting, and my name, deliberately kept in the shadow, was at last brought into the light.\n\nThis has two faces. One is warm: late recognition is still recognition; a society willing to turn back and say "we wronged a person back then" is itself a kind of progress.\n\nThe other is cold: why must it wait until I had been dead nearly 30 years, until society\'s view of gay people had changed, before my contribution would be admitted? It shows that many buried people never get this day at all. I was the lucky one dug back up.\n\nBehind me, how many held up the whole show and could not even wait long enough for a medal?',
      },
      deliverGoal: 'N10 zoom-out — Rustin 1987 死时大多数人不知他是谁 + 2013 (死后 26 年) 追授总统自由勋章/颁奖词说清 (带甘地非暴力进运动/操盘华盛顿大游行) + 两面: 暖 (迟到承认也是承认/社会回头说亏待了人是进步) / 凉 (为何非等死后近 30 年+社会看法变了才认/很多被埋没的人等不到/我是侥幸翻出来的) + 「身后多少撑起整场戏却等不到勋章的人」',
      engagementHook: '我等了一辈子加 26 年，名字才被请到灯光下——可为什么非要等到社会的看法变了才肯认我？迟到的承认,到底是温暖，还是更让人心凉？',
      expectsRealAnswer: false,
    },
    {
      id: 'br-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是顾全大局的英雄。我明知自己最有本事、最该站在前面，却为了不让敌人有缝可钻，主动退到后台，把功劳让给别人。运动能赢，正因为有我这种愿意隐身的人。这是一种极高的、不求回报的牺牲。\n\n另一种说法：我是一场不彻底的运动的活证据。一个争「平等」的运动，连自己内部都容不下一个「不够体面」的成员——它逼我隐身这件事本身，就说明它的平等是打了折的。我的退让顾全了大局，可也等于默许了那把排斥人的尺子。如果我当场反抗，会不会反而逼运动早一点变得更彻底？\n\n这两边不是「牺牲加遗憾」。是同一个选择的两面——隐身既成全了运动，也纵容了运动的不彻底。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a hero who put the whole above myself. Knowing I was the most able, the one who most deserved the front, I stepped back to the rear so the enemy would find no crack, and gave the credit to others. The movement could win precisely because it had people like me, willing to be invisible. It was a high sacrifice, asking nothing in return.\n\nThe other view: I was living proof of an incomplete movement. A movement fighting for "equality" that could not make room inside itself for one member "not respectable enough", the very fact that it forced me to disappear shows its equality was discounted. My yielding served the whole, but it also tacitly accepted that ruler of exclusion. Had I resisted on the spot, might I have forced the movement to become more complete sooner?\n\nThese are not "sacrifice plus regret." They are two faces of one choice, disappearing both completed the movement and indulged its incompleteness.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis — 一种说法 (顾全大局的英雄/明知最该站前却退后台不让敌人有缝/极高不求回报的牺牲) / 另一种说法 (一场不彻底运动的活证据/连内部都容不下不够体面的人/退让也默许了排斥的尺子/当场反抗会不会逼运动早点更彻底) / 同一选择两面隐身既成全也纵容不彻底 / 想 30 秒',
      engagementHook: '顾全大局的英雄，和一场不彻底运动的活证据——隐身既成全了运动，也纵容了它的不彻底。两边都站得住,你的 30 秒到了,你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'br-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人？\n\n一个把整场运动撑起来、自己却心甘情愿待在阴影里的人；又是一个被自己拼命保护的运动悄悄推到一边的人。这两件事是同一件——他的牺牲和他受的委屈，是一枚硬币的两面。你怎么称：为了大局把自己隐去，是值得敬重的格局，还是一种本不该被要求的退让？\n\n再想一步。今天你身边那个集体——你的班级、你的小组、你的朋友圈——有没有这样一个人：默默把活干了，却因为「不够合群」「有点怪」「不够体面」，被请到了边上、被忽略了名字？\n\n那时候，你会是那个跟着把他往边上推的人，还是那个走过去、把他请回队伍中间的人——像 50 年前那个拒绝走队尾的女记者一样？',
        en: 'Having walked my whole life, how would you judge a man like this?\n\nA man who held up a whole movement and willingly stayed in the shadow; and a man quietly pushed to the side by the very movement he fought to protect. These are one thing, his sacrifice and the wrong done to him are two faces of one coin. How do you weigh it: to erase yourself for the whole, is it a largeness of spirit worth honoring, or a yielding that should never have been demanded?\n\nThen take one more step. In a group around you today, your class, your team, your circle of friends, is there a person like this: quietly doing the work, yet pushed to the side and forgotten because they are "not one of the crowd," "a little odd," "not respectable enough"?\n\nWhen that happens, will you be the one who helps push them to the side, or the one who walks over and brings them back into the middle of the line, like that woman journalist 50 years ago who refused to walk at the back?',
      },
      deliverGoal: 'N12 close — 评价 (撑起运动甘心待阴影 vs 被自己保护的运动推到一边/牺牲和委屈一枚硬币两面/为大局隐去是格局还是本不该被要求的退让) + transfer「今天你身边集体有没有人默默干活却因不合群/怪/不体面被请到边上忽略名字」+ 你是跟着推的人还是走过去请他回队伍中间的人 (像拒走队尾的 Wells)',
      engagementHook: '一边是甘愿待在阴影里撑起整场运动，一边是被自己保护的运动推到边上——同一枚硬币的两面。你会怎么评价这样一个人？今天你身边那个「默默干活却被请到边上」的人,你会跟着把他往外推,还是走过去把他请回队伍中间？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Selma Teen Marcher (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var selmaTeenMarcherLens = {
  id: 'selma-teen-marcher-receiving-end',
  name: 'A Selma Teen Marcher',
  nameCn: 'Selma 桥上的青少年游行者',
  role: 'receiving-end',
  perspectiveTag: 'bloody-sunday-marcher',
  icon: '🌉',
  description: {
    cn: '这是一个合成人物，代表 1965 年 Selma 投票权游行里那些真实存在、却大多没留下名字的黑人青少年。约 1948 年生在阿拉巴马的 Selma，黑人家庭。他从小看着爸妈想投票却过不了登记官那一关。1965 年初他大约 17 岁，听了来 Selma 组织游行的人讲非暴力，决定走上街头。3 月 7 日那天，他和约 600 人走向 Edmund Pettus 桥，桥那头是举着警棍和催泪瓦斯的州警。他按训练不还手，被打倒在桥面上。这一遍，你从一个 17 岁、被历史的重量直接压在身上的孩子这边，看这场运动。',
    en: 'This is a composite character, standing for the Black teenagers who truly existed but mostly left no names in the 1965 Selma voting-rights march. Born around 1948 in Selma, Alabama, to a Black family. He grew up watching his parents want to vote and fail to get past the registrar. In early 1965, about seventeen, he heard the people who came to organize the march speak about nonviolence, and decided to walk into the street. On 7 March he and about 600 others walked toward the Edmund Pettus Bridge, where state troopers waited with batons and tear gas. He took the blows by his training, did not strike back, and was knocked down on the bridge. This pass lets you see the movement from the side of a seventeen-year-old, the weight of history pressed directly onto him.',
  },
  storyboard: [
    {
      id: 'st-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我趴在桥面上的时候，听见的不是喊叫，是木头打在骨头上的闷响，一下，又一下。\n\n催泪瓦斯呛得我睁不开眼。我才 17 岁。\n\n我叫什么不重要——像我这样的孩子，那天桥上有几百个，大多数人到今天你都叫不出名字。所以这一遍，我把他们的那一天，集中讲给你听。（我是个合成的人，但桥上发生的事，1965 年 3 月 7 日真真切切发生过，史书叫它「血腥星期日」。）\n\n那天我们要过的，是 Selma 城外的 Edmund Pettus 桥。我们没有武器。我们要的只有一样东西：投票的权利。\n\n这一遍，你不站在写法律的人那边，也不站在挡门的州长那边。你趴在桥面上，跟我一起，从被警棍打的这一头，看这场运动到底是什么代价换来的。',
        en: 'When I lay face down on the bridge, what I heard was not shouting but the dull sound of wood on bone, once, then again.\n\nTear gas stung my eyes shut. I was only seventeen.\n\nMy name does not matter. There were hundreds of kids like me on the bridge that day, and most of them you cannot name to this day. So this pass, I gather their day and tell it to you. (I am a composite person, but what happened on the bridge truly happened, on 7 March 1965, and the history books call it Bloody Sunday.)\n\nWhat we had to cross that day was the Edmund Pettus Bridge, outside Selma. We had no weapons. We wanted one thing only: the right to vote.\n\nThis pass, you do not stand with the people who wrote the law, nor with the governor at the door. You lie face down on the bridge with me, and from the end where the batons fall, you see what this movement actually cost.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 趴桥面听木头打骨头闷响 + 催泪瓦斯睁不开眼 + 17 岁 + anti-fab (合成人物/但 1965.3.7 血腥星期日真切发生过) + Edmund Pettus 桥 / 无武器只要投票权 + 这一遍不站写法律者/挡门州长那边而是趴桥面从挨警棍这头看运动代价',
      engagementHook: '我趴在桥面上,听见的是木头打在骨头上的闷响,一下又一下。我才 17 岁,要的只是投票权。你能想象,为了一张选票要先挨一顿打,是什么滋味吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我长大的地方，你才懂我那天为什么会在桥上。\n\n我约 1948 年生在阿拉巴马的 Selma，黑人家庭。我的世界是这样的：黑人和白人坐不同的公交、上不同的学校、用不同的饮水机。这套东西叫 Jim Crow，它不是哪个坏人随手定的，是写进法律的规矩。\n\n但最让我爸妈憋屈的，是投票。\n\n我爸是个有头脑、识字的人。他想投票，可每次去登记，登记官就刁难他：让他背宪法里刁钻的条款，问他「肥皂泡里有多少个泡」这种根本没法答的问题，故意不让他过。\n\n在我们这个县，黑人占了一半多人口，可登记上的黑人选民，少得可怜。\n\n我从小就看着我爸——一个体面、聪明的成年人——在登记官面前被当成小孩耍。那种屈辱，比挨一顿打更钻心。\n\n我那时候还不知道，几年后，我会替他走上那座桥。',
        en: 'First, the place I grew up, so you understand why I was on the bridge that day.\n\nI was born around 1948 in Selma, Alabama, to a Black family. My world was like this: Black and white people rode different buses, went to different schools, used different drinking fountains. This was called Jim Crow, and it was not set down by some bad man on a whim, it was rules written into the law.\n\nBut what galled my parents most was voting.\n\nMy father was a thoughtful, literate man. He wanted to vote, but every time he went to register, the registrar made it hard: had him recite tricky clauses of the Constitution, asked him things like "how many bubbles are in a bar of soap," questions with no possible answer, deliberately keeping him from passing.\n\nIn our county, Black people were more than half the population, yet the registered Black voters were pitifully few.\n\nFrom childhood I watched my father, a respectable, intelligent grown man, be toyed with like a child in front of the registrar. That humiliation cut deeper than a beating.\n\nI did not yet know, then, that in a few years I would walk that bridge in his place.',
      },
      deliverGoal: 'N2 setup — Selma c.1948 黑人家庭 + Jim Crow 解释 (公交/学校/饮水机隔离/写进法律) + 最憋屈是投票 + 父亲识字想投票被登记官刁难 (背刁钻宪法条款/肥皂泡多少泡这种没法答的问题) + 县里黑人过半但登记选民少得可怜 + 「看父亲被当小孩耍那种屈辱比挨打更钻心」+ 「我会替他走上那座桥」伏笔',
      engagementHook: '我从小看着我爸——一个体面聪明的成年人——在登记官面前被当小孩耍，就为了不让他投票。那种屈辱,为什么会比挨一顿打更钻心？',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '1965 年初，Selma 来了一些外地人。\n\n他们是来组织黑人争投票权的。有大组织的人，也有更年轻、更激进的学生组织（SNCC）的人。他们开会、办培训，告诉我们：我们不是没办法，我们可以一起走出去，让全国看见 Selma 这里发生了什么。\n\n他们教的方法，叫非暴力（nonviolence）。\n\n第一次听的时候，我心里是抗拒的。非暴力？我们被欺负了几辈子，凭什么挨了打还不能还手？这不就是认怂吗？\n\n可培训不是讲道理。他们让我们一遍遍演练：有人扮警察，朝你吼、推你、骂最难听的话，你要做的是——护住头，蜷起来，绝不还手。一次又一次，练到你哪怕浑身发抖、眼泪在眼眶里打转，手也不抬起来。\n\n练到后来我才慢慢懂：不还手不是认怂。还手，正中对方下怀——他们就等你先动手，好名正言顺地打死你。不还手，才是最难、也最狠的那一招。',
        en: 'In early 1965, outsiders came to Selma.\n\nThey came to organize Black people for the right to vote. Some were from a big organization, some from a younger, more radical student group, SNCC. They held meetings, ran trainings, told us: we are not helpless, we can walk out together and let the whole country see what is happening here in Selma.\n\nThe method they taught was called nonviolence.\n\nThe first time I heard it, I resisted inside. Nonviolence? We had been pushed around for generations, why, when we were struck, could we not strike back? Was that not just giving in?\n\nBut the training was not lecturing. They had us drill it again and again: someone played the trooper, yelled at you, shoved you, said the foulest things, and what you had to do was cover your head, curl up, and never strike back. Again and again, until even shaking all over, even with tears welling, you would not raise your hand.\n\nOnly later did I slowly understand: not striking back was not giving in. To strike back played into their hands, they were waiting for you to swing first, so they could beat you to death with a clear conscience. Not striking back was the hardest move, and the most cutting.',
      },
      deliverGoal: 'N3 setup — 1965 初外地人来 Selma 组织争投票权 (大组织 + 更年轻激进的 SNCC) + 开会培训「我们可以一起走出去让全国看见」+ 非暴力 + 少年起初抗拒 (挨打还不能还手不就认怂) + 培训是演练 (有人扮警察吼推骂/你护头蜷起绝不还手/练到发抖流泪手也不抬) + 「慢慢懂不还手不是认怂/还手正中对方下怀让他们名正言顺打死你/不还手才最难最狠」',
      engagementHook: '他们让我们练到浑身发抖、眼泪打转,手也不抬起来——只为了挨打时不还手。「不还手」到底是认怂,还是一种比还手更难、更狠的反抗？',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。1965 年 3 月 7 日，早上。\n\n你 17 岁。你站在 Selma 的一座教堂外，跟大约 600 个人一起，准备出发。目标是走到 80 多公里外的州府 Montgomery，把黑人想投票的诉求摆到州长面前。\n\n你知道前面有危险。州长 Wallace 已经下令禁止这次游行。桥那头，警察在等着。\n\n你妈早上拉着你的手，让你别去。她说你还小。你看着她的眼睛，想起她和你爸这辈子连一张选票都没投过。\n\n你心里有个声音在打架。一个说：你才 17 岁，挨打、被捕、甚至送命，值吗？另一个说：如果你这一代再不走出去，你的孩子是不是还要重复你爸在登记官面前被耍的那一天？\n\n现在，队伍要动了。你只有几秒钟决定：是退回去，还是迈出第一步，走向那座桥。\n\n你迈不迈？',
        en: 'Now you are me. The morning of 7 March 1965.\n\nYou are seventeen. You stand outside a church in Selma with about 600 people, ready to set out. The goal is to walk the more than 80 kilometers to the state capital, Montgomery, and lay the Black demand to vote before the governor.\n\nYou know danger lies ahead. Governor Wallace has already ordered the march banned. Beyond the bridge, the police are waiting.\n\nThat morning your mother took your hand and told you not to go. She said you were still young. You looked into her eyes and remembered that she and your father had never cast a single vote in their lives.\n\nA voice fights inside you. One says: you are only seventeen, beaten, arrested, maybe killed, is it worth it? The other says: if your generation does not walk out now, will your children have to repeat the day your father was toyed with before the registrar?\n\nNow the line is about to move. You have only a few seconds to decide: turn back, or take the first step toward that bridge.\n\nDo you step?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1965.3.7 早 / 17 岁 / 教堂外约 600 人准备出发走 80+ 公里到 Montgomery 把诉求摆州长面前 + 知道有危险 (Wallace 下令禁游行/桥那头警察等着) + 妈拉手让别去说还小/你想起爸妈一辈子没投过一张票 + 内心打架 (才 17 挨打被捕送命值吗 vs 这代不走孩子还要重复爸被耍那天) + 队伍要动只有几秒决定迈不迈',
      engagementHook: '我妈拉着我的手让我别去,说我还小;可我想起她和我爸一辈子连一张票都没投过。退回去,还是迈出第一步走向那座桥?这几秒,你怎么选?',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我迈了。\n\n队伍排成两列，安静地走。没有口号，没有歌——大组织叮嘱过，越安静越有力量。我们走过 Selma 的街道，走向城外那座桥。\n\n桥的名字叫 Edmund Pettus。\n\n我后来才知道，这个 Edmund Pettus 是个什么人：他是南北战争里的邦联将军，是阿拉巴马三 K 党的头目——一个一辈子捍卫白人至上、捍卫奴役黑人的人。\n\n你品一品这个味道：我们一群黑人，为了争自己投票的权利，要走过一座以「白人至上头目」命名的桥。\n\n那座桥拱起来，我们走上去的时候看不见桥那头。一直要走到拱顶，下坡那一面才会展开。\n\n我们一步步往上走。心跳得厉害。我们都知道，桥那头有什么在等着——只是还看不见。\n\n走到拱顶的那一刻，整座桥的另一头，一下子全展开在眼前。',
        en: 'I stepped.\n\nThe line formed two columns and walked in silence. No chants, no songs, the big organization had warned us, the quieter, the more powerful. We walked through the streets of Selma toward the bridge outside town.\n\nThe bridge was named Edmund Pettus.\n\nOnly later did I learn what this Edmund Pettus was: a Confederate general in the Civil War, a head of the Alabama Ku Klux Klan, a man who all his life defended white supremacy and the enslavement of Black people.\n\nTaste that: a crowd of us Black people, to claim our own right to vote, had to walk across a bridge named for a "head of white supremacy."\n\nThe bridge arched up, and walking onto it we could not see the far end. Only at the crest would the downhill side open out.\n\nWe walked up, step by step. My heart pounded. We all knew something waited on the far side, we just could not see it yet.\n\nThe moment we reached the crest, the whole far end of the bridge opened out before our eyes at once.',
      },
      deliverGoal: 'N5 story — 少年迈了 + 队伍两列安静走 (越安静越有力量) + Edmund Pettus 桥命名反讽 (邦联将军/阿拉巴马三 K 党头目/捍卫白人至上奴役黑人 — 黑人争投票权走过以白人至上头目命名的桥) + 桥拱起看不见那头/走到拱顶下坡面展开 + 心跳/知道桥那头有什么等着只是看不见 + 拱顶那刻整座桥另一头全展开',
      engagementHook: '我们一群黑人,为了争自己投票的权利,要走过一座以三 K 党头目命名的桥。历史把这种讽刺摆在你面前——你觉得它是巧合,还是某种刻意的羞辱?',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '桥那头，是一堵人墙。\n\n州警，一排排，举着警棍。后面还有骑警，骑在马上。空气里已经能闻到催泪瓦斯罐的味道。他们戴着防毒面具——他们早有准备。\n\n有人用扩音器喊：解散，限你们两分钟。\n\n我们站住了。还没到两分钟，他们就冲上来了。\n\n警棍落下来。催泪瓦斯罐砸进人群，白烟一下子罩住所有人。骑警纵马冲进队伍，马蹄踩过倒地的人。我听见尖叫，听见木棍打在头上、背上的闷响。\n\n这一刻，我想起了培训的那些天。护住头，蜷起来，不还手。\n\n我做到了。不是因为我不疼、不怕、不恨——我疼得要命，怕得发抖，恨得想咬人。我没还手，是因为我练过几十遍，因为我知道：我一还手，他们就赢了。\n\n（教我们这套「挨打不还手」本事的那套方法,源头是个把甘地非暴力带进美国的人——你换到他那一遍会认得他。）\n\n那一天，我们没过桥。但全美国的电视，把这一幕直播了出去。',
        en: 'On the far side of the bridge stood a wall of men.\n\nState troopers, rank on rank, raising batons. Behind them, mounted police on horseback. Already you could smell the tear gas canisters in the air. They wore gas masks, they had come prepared.\n\nSomeone called through a bullhorn: disperse, you have two minutes.\n\nWe stood still. Before the two minutes were up, they charged.\n\nThe batons came down. Tear gas canisters slammed into the crowd, and white smoke swallowed everyone at once. The mounted police drove their horses into the line, hooves trampling the fallen. I heard screams, heard the dull thud of wood on heads and backs.\n\nIn that moment I remembered the days of training. Cover your head, curl up, do not strike back.\n\nI did it. Not because I felt no pain, no fear, no hate, I hurt terribly, shook with fear, hated enough to bite. I did not strike back because I had drilled it dozens of times, because I knew: the moment I struck back, they won.\n\n(The method that taught us this skill of taking a blow without striking back came from the man who brought Gandhi\'s nonviolence into America, you will recognize him when you switch to his pass.)\n\nThat day, we did not cross the bridge. But televisions across America broadcast the scene live.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 桥那头人墙 (州警举警棍/骑警/催泪瓦斯/戴防毒面具早有准备) + 扩音器喊解散限两分钟没到就冲 + 警棍落催泪瓦斯白烟罩骑警马蹄踩倒地者尖叫木棍闷响 + 少年想起培训护头蜷起不还手 + 「我做到不是不疼不怕不恨而是练过几十遍知道一还手他们就赢」+ 桥到 Rustin lens (教非暴力源头/把甘地带进美国的人) + 那天没过桥但全美电视直播',
      engagementHook: '我疼得要命、怕得发抖、恨得想咬人——可我没还手,因为我知道,我一还手,他们就赢了。在最该爆发的那一刻死死忍住,这种克制,你做得到吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那天晚上，发生了一件我们当时没料到的事。\n\n美国各大电视台，把桥上的画面播给了全国。那天晚上，很多美国家庭正坐在客厅里看电视——突然，屏幕上是州警拿警棍打手无寸铁的人，催泪瓦斯里有人爬着逃，骑警踩过倒地的孩子。\n\n这些画面，普通白人家庭以前从没真正看见过。\n\n第二天，全国炸了。神职人员、学生、各种肤色的人，从全国各地往 Selma 赶，要和我们一起再走一次。原本对我们漠不关心的人，被那几分钟的画面，推到了我们这一边。\n\n你看明白「非暴力」这套技术狠在哪了吗？我们不是靠打赢警察——我们打不赢。我们是靠「让全国看见我们挨打的样子」，赢了人心。\n\n我们身上的伤，成了运动最有力的武器。代价是：这武器，得用我们自己的血来做。',
        en: 'That night, something happened we had not foreseen.\n\nThe major American networks broadcast the scene on the bridge to the whole nation. That night many American families sat in their living rooms watching, and suddenly, on the screen, were state troopers clubbing unarmed people, people crawling away through tear gas, mounted police trampling fallen children.\n\nThese images, ordinary white families had never truly seen before.\n\nThe next day, the country erupted. Clergy, students, people of every color, came rushing to Selma from across the nation to walk it again with us. People who had been indifferent to us were pushed to our side by those few minutes of footage.\n\nDo you see now where the "technique" of nonviolence cut deepest? We did not win by beating the police, we could not. We won hearts by "letting the whole country see what we looked like being beaten."\n\nThe wounds on our bodies became the movement\'s most powerful weapon. The price: this weapon had to be made from our own blood.',
      },
      deliverGoal: 'N7 story — 那晚电视台把桥上画面播全国 (美国家庭客厅看见州警警棍打手无寸铁的人/催泪瓦斯里爬逃/骑警踩倒地孩子) + 普通白人家庭从没真正看见过 + 次日全国炸 (神职人员/学生/各肤色从全国赶来 Selma 再走一次/漠不关心的人被推到这边) + 「非暴力狠在哪: 不靠打赢警察靠让全国看见挨打的样子赢人心」+ 「身上的伤成最有力武器/代价是这武器用自己的血做」',
      engagementHook: '我们没靠打赢警察,我们靠「让全国看见我们挨打的样子」赢了人心——身上的伤,成了最有力的武器。可这武器,得用自己的血来做。这样的胜利,值吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '血腥星期日之后两周，1965 年 3 月 21 日，我们又走了一次。\n\n这一次不一样。一位联邦法官下令保护我们的游行；总统派了军队和联邦执法人员沿途护卫。我们从 Selma 出发，这一次，真的走过了 Edmund Pettus 桥，一路走了五天，走到了州府 Montgomery。\n\n约两万五千人，最后站在州政府大楼前。我们做到了。\n\n几个月后，1965 年 8 月，国会通过了 Voting Rights Act（投票权法案）。它直接禁掉了识字测验那一套——就是当年把我爸挡在登记处门外的那套把戏。它还让联邦政府盯着南方各州，不许它们再用花招挡黑人登记。\n\n法案通过后，我陪我爸去登记。这一次，没有人问他「肥皂泡里有多少个泡」。他登记上了。\n\n那天他没说什么。但我看见，一个一辈子被当小孩耍的成年人，第一次，被当成了一个完整的公民。',
        en: 'Two weeks after Bloody Sunday, on 21 March 1965, we walked again.\n\nThis time was different. A federal judge ordered our march protected; the president sent troops and federal officers to guard the route. We set out from Selma, and this time truly crossed the Edmund Pettus Bridge, walking for five days, all the way to the capital, Montgomery.\n\nAbout twenty-five thousand people stood in the end before the state capitol. We had done it.\n\nMonths later, in August 1965, Congress passed the Voting Rights Act. It banned outright the literacy-test machinery, the very trick that had kept my father out of the registrar\'s office. It also put the federal government over the Southern states, forbidding them to use tricks to block Black registration.\n\nAfter the act passed, I went with my father to register. This time, no one asked him "how many bubbles are in a bar of soap." He registered.\n\nThat day he said little. But I saw a grown man who had been toyed with like a child his whole life, for the first time, treated as a whole citizen.',
      },
      deliverGoal: 'N8 story — 血腥星期日后两周 1965.3.21 又走 (联邦法官下令保护/总统派军队联邦执法人员护卫/真的过了 Edmund Pettus 桥走五天到 Montgomery/约 25000 人站州政府前) + 1965.8 Voting Rights Act (禁识字测验那套挡爸的把戏/联邦盯南方各州不许花招挡登记) + 法案后陪爸登记没人问肥皂泡多少泡爸登记上了 + 「被当小孩耍一辈子的成年人第一次被当完整公民」',
      engagementHook: '法案通过后我陪我爸去登记,这一次没人问他「肥皂泡里有多少个泡」——一个被当小孩耍了一辈子的成年人,第一次被当成完整的公民。你能想象那一刻他心里的滋味吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得诚实告诉你后来的事，因为只讲到「我们赢了」，那不是真的历史。\n\n投票权法案通过那年，我以为，我爸那代人受的屈辱，到我这儿就翻篇了。我爸能投票了，我能投票了，我以为我的孩子生下来，投票就像呼吸一样自然。\n\n可几十年过去，我老了。我看着一些新的东西，慢慢回来。\n\n有的地方，把黑人社区附近的投票站关掉，让你得跑很远才能投。有的地方，立了很严的身份证规矩，把一些穷人、老人、没车的人，又卡在了投票站外。2013 年，最高法院还把投票权法案里最关键的那条「联邦盯着南方」的条款，给削掉了。\n\n挡人的手段变了。不再是登记官当面问你「肥皂泡有多少个泡」那么露骨，变成了「不提肤色」的规矩——可挡住的，还是差不多那群人。\n\n我为投票权流过血。老来，我看着这权利被一点点啃回去。我这一生，画了一个没合上的圆。',
        en: 'I have to tell you honestly what came after, because stopping at "we won" is not the real history.\n\nThe year the Voting Rights Act passed, I thought the humiliation my father\'s generation suffered turned the page at me. My father could vote, I could vote, and I thought my children would be born to vote as naturally as breathing.\n\nBut decades passed, and I grew old. I watched some new things slowly come back.\n\nIn some places, polling stations near Black neighborhoods were closed, so you had to travel far to vote. In some places, strict ID rules were set up, keeping some poor people, old people, people without cars outside the polls again. In 2013 the Supreme Court struck down the most crucial clause of the Voting Rights Act, the one putting the federal government over the South.\n\nThe means of blocking people had changed. No longer as naked as a registrar asking "how many bubbles in a bar of soap," now it was "race-blind" rules, yet the people blocked were still about the same.\n\nI bled for the right to vote. In my old age I watched that right be gnawed back, bit by bit. My whole life drew a circle that never closed.',
      },
      deliverGoal: 'N9 story (reverse-Whig) — 诚实讲后来 (只讲我们赢了不是真历史) + 以为屈辱翻篇 (爸能投我能投孩子投票像呼吸) + 几十年后老了看新东西回来 (关黑人社区投票站要跑很远/严苛身份证卡穷人老人没车的人/2013 最高法院削掉投票权法案联邦盯南方的关键条款) + 「挡人手段变了不再露骨变成不提肤色的规矩/挡住的还是那群人」+ 「为投票权流过血老来看它被啃回去/一生画了没合上的圆」',
      engagementHook: '我为投票权流过血,老来却看着这权利被一点点啃回去——挡人的手段从「肥皂泡有几个」变成了「不提肤色」的新规矩,可挡住的还是那群人。一个运动赢了之后,赢来的东西为什么还会被慢慢拿走?',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n10',
      type: 'narrative',
      phase: 'reflection',
      content: {
        cn: '我约 2020 年走了。临走前，我常想起 17 岁趴在桥面上那几分钟。\n\n我留下的，不是一个名字——你到现在也不知道我叫什么。我留下的，是「桥上那群没名字的孩子」这件事本身。\n\n历史课本爱讲台上的大人物：写判决的大法官、喊「我有一个梦想」的牧师。这些都对，他们也确实重要。\n\n可真正用身体顶上去、挨警棍、把画面送进全国客厅的，是成千上万像我这样、没留下名字的普通人——大半是年轻人。运动不是几个伟人做成的，是一桥一桥的普通人用身体铺出来的。\n\n这件事，和很多别的历史一样：站在前台领功劳的是少数人，承受重量、流血流泪的，是台下数不清、叫不出名字的普通人和年轻人。\n\n我希望你记住的，不是我这个具体的人——是「桥上有过这样一群孩子」。',
        en: 'I died around 2020. Before I went, I often thought back to those few minutes face down on the bridge at seventeen.\n\nWhat I left was not a name, you still do not know what I was called. What I left was the fact itself of "the nameless kids on the bridge."\n\nHistory books love the great figures on the stage: the justice who wrote the ruling, the minister who cried "I have a dream." These are all true, and they did matter.\n\nBut the ones who truly put their bodies forward, took the batons, sent the footage into living rooms across the nation, were tens of thousands of ordinary people like me who left no names, most of them young. The movement was not made by a few great men, it was paved, bridge by bridge, with the bodies of ordinary people.\n\nThis, like much other history: the few stand at the front and take the credit, while the ones who bear the weight, who bleed and weep, are the countless ordinary people and young people no one can name.\n\nWhat I hope you remember is not me, this particular person, but that "there were once kids like this on the bridge."',
      },
      deliverGoal: 'N10 zoom-out — 少年约 2020 走/常想起 17 岁趴桥面那几分钟 + 留下的不是名字 (你不知我叫什么) 而是「桥上没名字的孩子」这件事本身 + 课本爱讲台上大人物 (写判决的大法官/喊我有一个梦想的牧师/都对也重要) + 但真正用身体顶上挨警棍送画面进客厅的是成千上万没名字的普通人大半年轻人/运动是一桥一桥普通人身体铺出来的 + 「前台领功是少数承受重量流血的是叫不出名字的普通人和年轻人」+ 希望你记住的不是我而是桥上有过这样一群孩子',
      engagementHook: '运动不是几个伟人做成的,是一桥一桥的普通人用身体铺出来的。我希望你记住的不是我这个人,而是「桥上有过这样一群没名字的孩子」。那些没留下名字的人,我们该怎么记住他们?',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看那座桥、那部法律，两种说法都站得住。\n\n一种说法：我们赢了，而且赢得伟大。一群没有武器、没有权力的普通人和年轻人，靠走上街头、挨打不还手，逼出了一部联邦法律，让千千万万黑人第一次能投票。这是普通人用身体改写历史的最有力的证明。值，太值了。\n\n另一种说法：我们的胜利是有限的，甚至是脆弱的。法律上的隔离是结束了，可事实上的不平等没消失；我们流血换来的投票权，几十年后又被新花招一点点收回。如果一个用血换来的胜利还能被慢慢拿走，那它到底算「赢」，还是只算「赢了一程」？\n\n这两边不是「成功加遗憾」。是同一段历史的两面——我们确实改写了它，可历史不会停在我们改写的那一页，它会继续往两个方向走。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at that bridge, that law, and both views stand.\n\nOne view: we won, and won greatly. A crowd of ordinary people and young people, without weapons, without power, by walking into the street and taking blows without striking back, forced out a federal law that let countless Black people vote for the first time. It is the most powerful proof that ordinary people can rewrite history with their bodies. Worth it, more than worth it.\n\nThe other view: our victory was limited, even fragile. Legal segregation ended, but real inequality did not vanish; the vote we bled for was gnawed back, bit by bit, by new tricks decades later. If a victory bought with blood can still be taken away slowly, then is it really "winning," or only "winning one stretch"?\n\nThese are not "success plus regret." They are two faces of one history, we did rewrite it, but history does not stop at the page we rewrote; it keeps moving in both directions.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis (gold-standard) — 一种说法 (我们赢了且伟大/没武器没权力的普通人年轻人靠挨打不还手逼出联邦法律让千万黑人第一次能投票/普通人用身体改写历史最有力的证明/值) / 另一种说法 (胜利有限甚至脆弱/法定隔离结束但事实不平等没消失/流血换的投票权几十年后被新花招收回/血换的胜利还能被拿走算赢还是赢了一程) / 同一段历史两面我们改写了它但历史不停在这页 / 想 30 秒',
      engagementHook: '一种说法:我们赢了,而且赢得伟大。另一种说法:我们的胜利有限,甚至脆弱。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'st-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个 Selma 的黑人少年，一座以三 K 党头目命名的桥，一顿在全国电视前挨的打，一张终于投上又被慢慢拿走的选票——你会怎么评价这样一段历史？\n\n一群没名字的孩子,用身体逼出了一部法律,可这部法律又被一点点啃回去。你会说这是普通人改写历史的伟大胜利,还是一场没合上的、还要接着打的仗?你怎么评?\n\n不过先记住:你这一遍,只站在桥上挨打这一头。换乔治·华莱士那一遍,你会进到那个挡在校门口、后来又忏悔的州长心里;换贝亚德·拉斯廷那一遍,你会看见一个在幕后撑起整场运动、却被自己人雪藏的人。换到他们那两遍,你今天的判断会被挑战,也会更完整。\n\n再想一步。今天你身边,有没有一件你明知道是对的事——可去做它,要冒被嘲笑、被孤立、被惩罚的险:替一个被欺负的同学出头,为一件不公平的规矩说句话?\n\n那时候,你会像我妈说的那样「你还小,别去」,退回安全的地方;还是会像 17 岁那天的我一样,哪怕怕得发抖,也迈出走向那座桥的第一步?',
        en: 'Having walked my whole life, a Black boy of Selma, a bridge named for a Klan leader, a beating taken before the whole nation\'s television, a vote finally cast and then slowly taken back, how would you judge a history like this?\n\nA crowd of nameless kids forced out a law with their bodies, and that law was gnawed back bit by bit. Would you call it the great victory of ordinary people rewriting history, or a fight not yet closed, still to be fought? How do you judge it?\n\nBut first, remember: in this pass you stood only at the end that took the blows on the bridge. Run George Wallace\'s pass and you enter the governor who blocked the schoolhouse door and later repented; run Bayard Rustin\'s pass and you see a man who held the whole movement up from backstage and was hidden away by his own side. Run those two passes and the judgment you formed today will be challenged, and made more complete.\n\nThen take one more step. In your own life today, is there something you know is right, but to do it is to risk being mocked, frozen out, punished, standing up for a classmate who is bullied, speaking up about a rule that is unfair?\n\nWhen that happens, will you do as my mother said, "you are still young, do not go," and retreat to the safe place; or will you, like the me of seventeen, even shaking with fear, take the first step toward that bridge?',
      },
      deliverGoal: 'N12 close (gold-standard) — 评价 (Selma 黑人少年/三 K 党头目命名的桥/全国电视前挨的打/终于投上又被慢慢拿走的票 → 普通人改写历史的伟大胜利 vs 没合上还要接着打的仗) + transfer「今天你身边明知对的事却要冒被嘲笑孤立惩罚的险 (替被欺负同学出头/为不公平规矩说话)」+ 你会像妈说的还小别去退回安全,还是像 17 岁那天怕得发抖也迈出走向桥的第一步',
      engagementHook: '走完我这一生,你会怎么评价这样一段历史?再想一步:今天你身边那件「明知是对、可去做要冒险」的事——你会像我妈说的「还小,别去」退回安全处,还是像 17 岁那天的我,怕得发抖也迈出走向那座桥的第一步?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'george-wallace':                    georgeWallaceLens,
  'bayard-rustin':                     bayardRustinLens,
  'selma-teen-marcher-receiving-end':  selmaTeenMarcherLens,
};

// per TOPIC_ROADMAP_G6_G12.md B9 + receiving-end 优先 pattern:
// 青少年 + 承受暴力一方 + N1 gold-standard hook + N6 Edmund Pettus 桥 anchor + N9 reverse-Whig (投票权被啃回) + N11/N12 没合上的圆 closing
export var defaultLens = 'selma-teen-marcher-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'civil-rights-1965',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'long-arc',
  nodesPerLens: 12,
  estimatedMinutesPerLens: { 'george-wallace': 32, 'bayard-rustin': 32, 'selma-teen-marcher-receiving-end': 32 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, long-arc 12-node spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 12 nodes each / cross-lens micro-detail N6:「等」与「兑现」之间那座桥 — 同一段历史三面 (Wallace 挡门/Rustin 大游行后台/Selma teen Edmund Pettus 桥 Bloody Sunday)',
    'defaultLens: selma-teen-marcher-receiving-end — 受影响者优先 (青少年 + 承受暴力一方 + gold-standard N1 hook + N9 reverse-Whig 投票权被啃回 + N11/N12 没合上的圆)',
    'expectsRealAnswer: ONLY N11 (synthesis) + N12 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'reverse-Whig: Wallace 不写纯恶人 (展示晚年忏悔/人会变); Rustin 揭进步运动内部排斥 (因同性恋身份被自己人雪藏); Selma teen N9 强调 Voting Rights Act 后投票权又被一点点收回 (2013 Shelby County/避免问题已解决凯歌)',
    'anti-fab: Selma teen composite 在 N1 显式声明 (合成人物/但 1965.3.7 血腥星期日真切发生过); Wallace 晚年道歉用括号短句标注 (有记录真事非美化)',
    'cross-Topic 锚: Wallace 挡门→Brown v. Board→reconstruction (14th Amendment 平等保护 1868 写入 90 年后激活); Rustin 被边缘化→womens-suffrage Ida B. Wells 拒走队尾; Selma teen→cold-war/slavery-abolition (普通人/年轻人承受历史重量)',
    'cultural ban: 全程美国/英语真实术语 (Brown v. Board/Selma/Bloody Sunday/非暴力/Letter from Birmingham Jail/Voting Rights Act/Jim Crow/equal protection); 无玉玺/翰林/宰相/朕/圣旨/太子',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
