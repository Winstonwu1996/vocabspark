# 大航海时代 1492 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    age-of-exploration-1492
生成日期:    2026-05-23
来源文件:    lib/history-storyboards/age-of-exploration-1492.js（3 lens: columbus / las-casas / anacaona-jr）+ lib/history-narratives/age-of-exploration-1492.md
claim 总数:  30
🚩 红旗数:   7（需创始人审）
```

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`（后三类进红旗）。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | 「1492 年 10 月 12 日凌晨 2 点 Pinta 桅杆 Rodrigo de Triana 喊 Tierra」（`col-n1`/`col-n4` / kernel §1·§3）| date / quote | encyclopedia | 1492.10.12 约 2 a.m. Rodrigo de Triana(本名 Juan Rodríguez Bermejo)在 Pinta 瞭望台喊「¡Tierra!」，权威一致；登陆岛 Columbus 命名 San Salvador | ✅verified |
| 2 | 「Rodrigo 没拿奖赏——Columbus 抢走『先看见陆地者奖金』」（kernel §1）| causal | encyclopedia | 史实：Rodrigo 被拒 10,000 maravedís 奖赏，Columbus 称自己先看见。确证 | ✅verified |
| 3 | 「地球周长算错 25%；Canary→日本 估 4,200 km，实际 19,500 km，错 5 倍」（`col-n2` / kernel §3）| number | encyclopedia | Columbus 低估地球周长(用 Toscanelli + Marinus)约 25%，实距远超其估算。数量级正确；具体「4,200 vs 19,500」为常见教学换算，可接受 | ✅verified |
| 4 | 「1492.1.2 Granada 投降(Reconquista 终)+ 3.31 Alhambra Decree 驱犹(~10 万 Sephardic)+ 4.17 Santa Fe 批准 + 8.3 出航」（`col-n3` / kernel §4 L4）| date / number | encyclopedia | 四个日期权威一致。驱犹人数学界区间约 4 万-10 万(老估值偏高，新研究偏低)；文中「约 10 万」取上沿 | ⚠️downgrade-wording |
| 5 | 「Columbus 1492.10.12 登陆当天日志写『50 个人就能征服全部 / 让他们做一切我们想要的工作』」（`col-n4` / `ana-n3` / kernel §3）| quote | primary | 真史料：此句出自 Columbus **航海日志(1492.10 月)**「with fifty men they can all be subjugated and made to do what is required」。文中正确归为「日志」。确证 | ✅verified |
| 6 | 「1493.2 Columbus 在 Azores 海面用羽毛笔羊皮纸写信给 Ferdinand/Isabella」（`col-n4` cross-lens 锚 / kernel §5）| date | encyclopedia | 1493.2.15 致 Santángel 的信在 Niña 号返航途中写成；2 月底 Niña 确曾被风暴推至 Azores。物理场景成立 | ✅verified |
| 7 | 「Columbus 1493 信原文:『50 个我们的人就能让全部 5 万人为我们工作』+『如果陛下需要奴隶——这里取之不尽』」（`col-n4` 引文块 / `las-n5` 引文块）| quote | dramatization | **引文层叠风险**：1493 致 Santángel 印刷信确**有**献奴句(「as many slaves as they shall order, all of them heathens」)+ 称原住民 timid/易皈依。**但**「50 人→5 万人工作」是**日志**句、「取之不尽 inexhaustible」是**意译**——二者被合成进「1493 信」当逐字引文，原信并无此二句原话 | ⚠️downgrade-wording |
| 8 | 「这封信 1493.4-5 印 9 个版本 / 到 1500 至少 17 版流遍欧洲」（`col-n4` / kernel §5）| number | encyclopedia | Columbus 首航信 1493 年确多版印行(拉/西/意)，1493-1500 约 17-22 版流通。数量级确证 | ✅verified |
| 9 | 「1493.9.25 第二次出航 17 艘船 1,500 人 + 殖民种植包(马/猪/牛/羊/谷种)」（`col-n5` / kernel §3）| number / date | encyclopedia | 第二次航行 1493.9.25 从 Cádiz，约 17 艘船、~1,200-1,500 人，确带牲畜种子。确证 | ✅verified |
| 10 | 「1495 黄金税:14 岁以上每 3 个月交定量黄金粉,不交砍手;铜片为凭」（`col-n6` / `ana-n3`/`ana-n6` / kernel §3）| number / causal | encyclopedia | 1495 Columbus 黄金贡赋制 + 砍手罚 + 铜牌(token)，主要经 las Casas 与后世记录。学界普遍采信；砍手致大量失血死。确证(史料以 las Casas 为主) | ✅verified |
| 11 | 「Columbus 1495 信:『人民温和——做奴隶完美 / they will make perfect slaves』」（`col-n6`/`col-n10`/`col-n12` 反复引 / kernel §3）| quote | inference | Columbus 多封信确主张原住民可大量奴役 + 1495 送 ~500 Taíno 奴隶回 Cádiz(确证)。**但**「做奴隶完美 / perfect slaves」非已知逐字一手引文，属概括式措辞被排成引号句 | ⚠️downgrade-wording |
| 12 | 「1500 Bobadilla 9.23 上岛见 7 具殖民者尸挂绞架 → 10 月逮捕 Columbus 戴脚镣回西班牙」（`col-n7` / kernel §3）| date / number | encyclopedia | Bobadilla 1500 到任、逮捕 Columbus 兄弟、戴镣返西，Isabella 释放但不复总督。确证；「7 具尸体」为 Bobadilla 案常见叙述细节 | ✅verified |
| 13 | 「1502-1504 第四次航行 4 船全坏 + Jamaica 困 1 年 + 1504.2.29 用月食吓 Taíno 取食」（`col-n8` / kernel §4 L4）| date | encyclopedia | 第四次航行(1502.5.11 Cádiz 出)、Jamaica 搁浅约 1 年、1504.2.29 月食 trick 确证 | ✅verified |
| 14 | 「1506.5.20 Columbus 54 岁死于 Valladolid,至死相信到了亚洲」（`col-n9` / kernel §3）| date / motive | encyclopedia | 1506.5.20 Valladolid 卒，约 54-55 岁;至死认其到亚洲外缘为主流定论。确证 | ✅verified |
| 15 | 「encomienda 1503 正式系统化;Inter Caetera 1493.5.4;Doctrine of Discovery 2023.3.30 梵蒂冈废除」（`col-n9` / kernel §4 L4·§附）| date | primary | 三者全确证:Isabella 1503.12.20 cedula 经 Ovando 立 repartimiento/encomienda;Inter Caetera 1493.5.4;Vatican 2023.3.30 repudiation。确证 | ✅verified |
| 16 | 「1518 Charles V asiento 批 4,000 非洲 enslaved 直运 Hispaniola = 跨大西洋奴隶贸易系统化起点」（`col-n9`/`col-n12` / kernel §4 L4）| date / number | encyclopedia | 1518 asiento(常记为 ~4,000 名,运往 Hispaniola/西印度)确证为系统化标志 | ✅verified |
| 17 | 「Hispaniola 起点 30 万-100 万 Taíno(学界争议) → 1542 仅剩 200(las Casas 数)」（`col-n1`/`col-n9` / `ana-n11`/`ana-n12` / kernel §3 脚注）| number / representativeness | encyclopedia | 区间表述稳妥:Rosenblat 低估 10 万、当代一手约 100 万、Cook&Borah 极高(~800 万)。文中脚注已显式标争议 + 列三家。处理良好 | ✅verified |
| 18 | 「接下来 200 年约 1 亿美洲原住民死,主因病(无免疫)+ 奴役屠杀加速」（kernel §0·§1 / `col-n9`）| number | textbook | 全美洲死亡总数学界区间极大(常引 ~90% 崩塌 / 数千万至 ~1 亿)。「约 1 亿」属高端估值,常见于教学但非唯一共识——已用「大约」对冲 | ⚠️downgrade-wording |
| 19 | 「跨大西洋奴隶贸易 1500-1888 运 1,200 万非洲人,200-300 万死于 Middle Passage」（kernel §0 / `col-n9`）| number | encyclopedia | Slave Voyages 数据:约 1,250 万被运、约 1,070 万到岸 → 死于航程约 150-200 万(部分估到 ~200 万+)。「1,200 万 / 200-300 万死」数量级成立,死亡数偏上沿 | ✅verified |
| 20 | 「Anacaona 王后是 Xaragua cacica + 全岛最有名 areíto 诗人(真人)」（`ana-n1`/`ana-n2`/`ana-n10` + lens metadata / kernel §3）| representativeness | encyclopedia | 确证:Anacaona 为 Jaragua/Xaragua cacica(约 1500-1503/04 在位)、著名 areíto 作曲/诗人,las Casas 记其名。真人无误 | ✅verified |
| 21 | 「1503/11/9 Ovando 召 80 cacique 在大 bohío『和平会议』→ 烧死 80 人,**含阿姨 Anacaona 王后**」（`ana-n10`/`ana-n12` deliverGoal + lens metadata `fictionalDisclaimer` + `col-n12`）| date / number | encyclopedia | **两处与权威冲突**:(a)Jaragua massacre 主流系于 **1503 年 7 月**,非「11 月 9 日」(具体日 9 号无来源);(b)**Anacaona 本人是被俘押往 Santo Domingo,监禁/受审约 3 个月后被绞死(hanged),不是被烧**——被烧的是 40-80 个 cacique。文中把她的死法写成「烧死/burned alive」并系于 80 人同烧,与史料冲突 | ✋flagged |
| 22 | 「Anacaona Jr. 一家死法:爸爸 1496 placer 砂金河 / 妈妈 1497 / 哥哥 1499 / 女儿 1502 — 病死均标『天花 smallpox 天花』」（`ana-n5`/`ana-n7`/`ana-n9`/`ana-n11`）| number / causal | dramatization | **病原命名时代错置**:Hispaniola 首次有记录的**天花大疫为 1518-1519**(远晚于此 lens 1497-1502 时间线)。1493 La Isabela 早期大疫更可能是流感/猪流感。「家人 1497/1499/1502 死于天花」与天花文献时序冲突——**大规模疫病致死是真的**,但**特指 smallpox/天花** 在 1518 前为时代错置(narrative §3 Atahualpa 段正确把天花系于 1525-27) | ✋flagged |
| 23 | 「placer 砂金(非汞)+ repartimiento + bohío + areíto + Yúcahu + cimarrón/Bahoruco 山」（`ana-n2`/`ana-n4`/`ana-n6`/`ana-n11`）| representativeness | encyclopedia | 文化/技术细节准确:加勒比 placer 砂金(汞中毒是 Potunable Potosí 1545+,文中已避开)、repartimiento、bohío、areíto、Yúcahu(Taíno 造物神)、Bahoruco 为后世 cimarrón 山区。术语与时代吻合 | ✅verified |
| 24 | 「Diego Colón = 1492 Columbus 从 Bahamas 抓回西班牙受洗改名的 Lucayan Taíno 翻译(与 Columbus 之子同名,不同人)」（`ana-n3`）| representativeness | encyclopedia | Columbus 确带 Taíno 回西受洗充翻译;文中括号已主动澄清「与 Columbus 之子 Diego Colón 同名不同人」,防混淆处理到位 | ✅verified |
| 25 | 「Columbus 1495 送 ~500 Taíno 奴隶回西班牙;Isabella 大怒令送回」（`col-n7` / `ana-n12` / kernel §3）| number / motive | encyclopedia | 1495 约 500 Taíno 被运回 Cádiz;Isabella 至少表面反对原住民奴役并令退还。确证 | ✅verified |
| 26 | 「Las Casas 1502 到 Hispaniola + 13 年 encomendero;1514.5 Cuba 读 Sirach 34:21-23 conversion(比 Luther 1517 早 3 年)」（`las-n1`/`las-n2`/`las-n3` / kernel §3）| date / quote | encyclopedia | 全确证:1502 到岛、自有 encomienda、1514 经 Ecclesiasticus/Sirach 34 经文转变(传统系于 Caonao 河大屠杀前后)、早于 Luther 95 条(1517)。Sirach 34:21-23 经文真实 | ✅verified |
| 27 | 「Las Casas 1516 Memorial de Remedios 建议非洲奴隶替代 Taíno(每殖民者 12 个);1552 反思『我错了/求原谅』」（`las-n6`/`las-n9` / kernel §3）| quote / motive | encyclopedia | 1515-16 Memorial de Remedios 确建议输入非洲奴隶替代原住民;晚年(Historia de las Indias)确公开悔过。配额具体数「12」为细节,主张方向确证;悔过文为概括转述非全逐字 | ✅verified |
| 28 | 「1542 Brevísima Relación → Charles V 1542.11.20 颁 New Laws 废 encomienda 继承;1545 Peru 殖民者反抗杀副王 Núñez,撤回一半」（`las-n7` / kernel §3·§4）| date / causal | encyclopedia | New Laws 1542(11 月)、废 encomienda 继承、1544-46 Peru Gonzalo Pizarro 叛乱杀副王 Blasco Núñez Vela、随后部分撤销。确证;归因(书直接促成法)略强但属主流叙述 | ✅verified |
| 29 | 「1550-1551 Valladolid 辩论 vs Sepúlveda(servi a natura / Aristotle 天生奴隶);14 人评审无最终判决;1573 Philip II 禁『conquest』改『pacification』」（`las-n8` / kernel §6）| date / quote | encyclopedia | Valladolid debate 1550-51、Sepúlveda 用 Aristotle 天生奴隶论、无明确裁决、1573 Ordenanzas 改 conquest→pacification。确证。「1948 联合国人权宣言 chain 第一 link」属诠释性修辞(非史实断言),措辞已是叙述层 | ✅verified |
| 30 | 「Las Casas 1566.7.18 Madrid 82 岁死,临终『我后悔我没做更多 / Me arrepiento de no haber hecho más』」（`las-n10`/`las-n12` / kernel §3）| date / quote | inference | 1566.7.18 Madrid Atocha 卒确证(约 82 岁)。临终语「我后悔没做更多」为广传归他之语,**无确切一手逐字出处**,属传记式概括引语 | ⚠️downgrade-wording |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#21]** `ana-n10`·`ana-n12`·lens `fictionalDisclaimer`·`col-n12`：「1503/11/9 Ovando 烧死 80 个 cacique,**包括我阿姨 Anacaona 王后**……(英文 metadata: "burned alive November 9, 1503")」
   - 问题：**与权威正面冲突(最高优先)**。两点:(a)**死法错**——Anacaona 王后本人不是被烧;她在屠杀后被俘、押往 Santo Domingo、监禁受审约 3 个月,**被绞死(hanged)**。被烧的是 40-80 个 cacique。Wikipedia(Anacaona / Jaragua massacre)、Britannica、las Casas 记述一致。(b)**日期可能错**——Jaragua massacre 主流系于 **1503 年 7 月**,「11 月 9 日」无来源支持(具体「9 号」像演绎补的)。这是唯一一处把**真人(Anacaona 王后)** 的死法/死期写错并多处复述(N10 正文 + N10/N12 deliverGoal + lens metadata fictionalDisclaimer 英文「burned alive」+ Columbus lens N12),传播面广。
   - 建议：把「阿姨被烧死」改为史实分层——「80 个 cacique 被烧死在大厅;阿姨 Anacaona 王后当场被俘,几个月后在 Santo Domingo 被绞死」。日期改「1503 年(夏/7 月)」或去掉「11 月 9 日」这一伪精确日。**lens metadata 的英文 `fictionalDisclaimer`「burned her alive November 9, 1503」必须同步改**(它是给学生看的合成角色透明声明,错在这里最伤可信度)。

2. **[#22]** `ana-n5`·`ana-n7`·`ana-n9`·`ana-n11`：「妈妈 1497 / 哥哥 1499 / 女儿 1502 死于**天花(smallpox)**」
   - 问题：**病原命名时代错置(数字/因果类)**。Hispaniola 第一次有记录的**天花大疫是 1518-1519**——晚于本 lens 全部时间线(1497-1502)。1493-1500 年代加勒比的早期致命疫病更可能是流感/猪流感 + 其他欧洲病。narrative §3 自己把天花正确系于 Inca 1525-27,storyboard 这边却让 1497-1502 的家人「死于天花」,内部不一致 + 与文献时序冲突。**疫病致大量死亡是真的**(早期大疫 1493 起即有),问题只在**特指 smallpox 这个具体病名**。
   - 建议：把这几处「天花/smallpox」改为不指名的「欧洲带来的瘟疫 / 一种 Taíno 从没接触过的病(发烧 + 红疹)」,或泛称「疫病(欧洲人带来,Taíno 无免疫力)」。保留情感与「无免疫力大规模死亡」事实底座,去掉会被史实党挑的「1518 前的天花」时代错置。中优先级(史观正确性 + 与 narrative 自洽)。

3. **[#7]** `col-n4`·`las-n5`：「Columbus 1493 信原文:『50 个我们的人就能让全部 5 万人为我们工作』+『如果陛下需要奴隶——这里取之不尽』」(作为 1493 信逐字引文块)
   - 问题：**引语层叠(重点 C)**。1493 致 Santángel 印刷信**确有**献奴句(原文意「派人来要多少奴隶都行,全是异教徒」)+ 称原住民 timid/易皈依——所以「可皈依+可工作+可奴役」三件套的**实质成立**。但被排成「1493 信」逐字引文的两句里:「50 人→5 万人工作」其实是 **1492 日志**句(#5 已 verified,归日志才对)、「取之不尽 inexhaustible」是意译。把日志句 + 意译塞进「1493 信」当原话,史实党可挑「这不是那封信里的原文」。
   - 建议：维持三件套论点(实质对),但把引文块标为**综述/概括**而非「信里逐字这么写」——如「Columbus 在 1492 日志和 1493 信里前后写下的,合起来就是这三件套:温和(日志/信)、可工作(日志『50 人…』)、可奴役(1493 信确写『要多少奴隶都行』)」。或把日志句移回日志归属,信只引其确有的献奴句。

4. **[#11]** `col-n6`·`col-n10`·`col-n12`：「Columbus 1495 信:『人民温和——做奴隶完美 / they will make perfect slaves』」(多处反复当引号句)
   - 问题：**引语风险(重点 C)**。Columbus 主张大量奴役 + 1495 实运 ~500 Taíno 奴隶回西(#25 verified,行为铁证)。但「做奴隶完美 / perfect slaves」这一**逐字句**无已知一手出处,属把概括排成引文。被 N6/N10/N12 反复引用(还作为「这是签字承认不是无意识犯罪」的论据 anchor),放大了风险。
   - 建议：保留「他主动设计 + 文字记录奴役」这一已证论点(可换用 #25 的「1495 送 500 奴隶回西」做铁证 anchor),把「做奴隶完美」从逐字引号降级为概括转述——如「他把原住民描述成最适合奴役的人」。

5. **[#18]** kernel §0·§1·`col-n9`：「接下来 200 年约 **1 亿** 美洲原住民死」
   - 问题：**数字高端(重点 A 轻类)**。全美洲死亡总数学界区间极大;「约 1 亿」属高端教学估值,非唯一共识(更常见的是「约 90% 崩塌 / 数千万」)。文中已用「大约」对冲,且区分了「主因疾病 + 奴役屠杀加速」,处理已较稳。
   - 建议：可接受。若想更稳,补一句「(学界估值差异大,几千万到约一亿)」。低优先级。

6. **[#4]** `col-n3`·kernel §4 L4：「1492 Alhambra Decree 驱犹**约 10 万** Sephardic 犹太人」
   - 问题：**数字偏高(重点 A 轻类)**。被驱逐人数学界从约 4 万到 10 万+ 不等,老估值偏高,近年研究普遍下修。「约 10 万」取上沿。
   - 建议：可接受(已用「大约」)。若求稳改「数万(约 4 万-10 万)」。极低优先级。

7. **[#30]** `las-n10`·`las-n12`：Las Casas 临终语「我后悔我没做更多 / Me arrepiento de no haber hecho más」
   - 问题：**引语无一手出处(重点 C 轻类)**。死期/地点确证,但这句临终语是广传归他之语,无确切逐字档案。文中作为 lens 高潮反复引(N10 正文 + N12 回扣)。
   - 建议：可保留(符合其一生 + 广传),但可软化为「他晚年反复说自己『没做够』」式概括,避免排成确指临终逐字遗言。低优先级。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 小 Anacaona / Anacaona Jr.(虚构 12 岁 Taíno 女孩) | `anacaona-jr`(全 12 节) | 虚构姓名「小 Anacaona」+ 1483-1504 生卒为叙事设定 + 全部具体家事(爸 Yaguareix/妈 Bayajiba/叔 Caguarí/哥 Maboguán/女儿 Tureyra 的名字与个别死亡场景)均为合成;**底层集体史(1495 砍手政策、placer 砂金强劳、疫病灭族、1503 Xaragua 屠杀、1504 山区饿死)为 documented** | ✅ **已透明标注(多层)**:lens `id` nameCn「(虚构合成 1495-1504 Taíno 女孩)」+ 专设 `fictionalDisclaimer` 字段(cn/en 双语,明说「史书没写过她……代表几十万被灭族无名 12 岁 Taíno 女孩」「真人 + 虚构合成配对 = 跟 Reformation Sister Agnes 同 pattern」)+ N1 deliverGoal/正文「我是合成人物」+ N9「我是合成人物,他没见过我」+ N12 narrator「一个合成人物,不是真人。但她代表的是真人」+ header 注释。**符合 §1.3 dark-topic 红线(composite 必须标明)。** ⚠️ **但**:disclaimer 与 metadata 里把**真人 Anacaona 王后的死法/死期写错(见红旗 #1)**——合成框架透明,真人事实需修;且 lens N1 临终是 in-character 第一人称语气(已用 disclaimer 包住,可接受) |

> 其余出场人物均为**真实历史人物**:Columbus / Bartolomé de las Casas / Ferdinand / Isabella / Charles V / Bobadilla / Alonso de Hojeda / Nicolás de Ovando / Diego Colón(Lucayan 翻译,已澄清同名) / Sepúlveda / Rodrigo de Triana / Anacaona 王后。Columbus 与 las Casas 两 lens 为第一人称视角叙事(内心戏属合理 inference,挂在已证事实上),未虚构其生平骨架。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `columbus`(claim #1-19,25)/ `las-casas`(#26-30,#7,#11)/ `anacaona-jr`(#5,#10,#17,#20-25)。含三 lens cross-detail 锚(Columbus 1493 信:Columbus N4 producer / las Casas N5 interpreter / Anacaona Jr. N3 affected party)。
- **重点核查结论**：
  - **重点 A（数字夸张）**：主体稳健。Taíno 起点人口 #17 区间 + 三家学者脚注处理**优秀**(Rosenblat/当代一手/Cook&Borah 都列了);1 亿原住民死 #18 与驱犹 10 万 #4 为高端轻类(已对冲)。
  - **重点 B（代表性 / 合成角色）**：Anacaona Jr. composite **透明标注到位**(专设 fictionalDisclaimer + 多节复述「合成」+ 与 Sister Agnes pattern 自比)。唯一硬伤不在「合成是否标明」,而在合成框架里**带进的真人 Anacaona 王后死法/死期错**(红旗 #1)。
  - **重点 C（引语分层）**：是本 topic 主要风险面。Las Casas Sirach 34:21-23 经文(#26 ✅)、CEA 类法律日期、Valladolid/Sepúlveda(#29 ✅)都 verified;但 **Columbus 三处「引文」需分层**(#7 1493 信里混入日志句 + 意译、#11「perfect slaves」无逐字源)+ Las Casas 临终语 #30 无一手源。这些是「论点真、逐字引文待降级」类,非硬错。
- **文化对应硬禁自检(cultural ban)**：storyboard 三 lens **干净**——美洲/欧洲史描述内**未植入中国概念词**,Taíno/Náhuatl/Spanish/Latin 术语用 bare 原文。⚠️ 仅 **narrative kernel(非 storyboard)** §3 有两处对中国学生的**比较教学桥**:Cortés 烧船 vs「项羽巨鹿之战/破釜沉舟」、Moctezuma 犹豫 vs「崇祯帝/清朝鸦片战争」。这是显式的「类比对照」修辞(放在 narrator 教学评注里,不是把中国词嵌进美洲史实描述),不违 ban 的本意;但若严格执行「0 中国术语污染」可考虑把这两处类比从 kernel 移到独立的「跨文化对照」教学区。低优先级、仅 narrative。
- **用到的外部核实来源**：Wikipedia(Anacaona / Jaragua massacre / Rodrigo de Triana / Treaty of Tordesillas / Inter Caetera / Encomienda / Nicolás de Ovando / Bartolomé de las Casas / Native American disease and epidemics / Columbus's letter on the first voyage)、Britannica(Anacaona / Treaty of Tordesillas)、ushistory.org(Columbus 1493 致 Santángel 信全文)、Duke UP Hispanic American Historical Review(Hispaniola 人口争议:Cook&Borah / Rosenblat / Henige)、NPR + Vatican News(2023.3.30 Doctrine of Discovery repudiation)、World History Encyclopedia / Plough(las Casas 1514 conversion + 1516 非洲奴隶建议 + 悔过)、Indigenous Mexico + theageofexploration(1518-19 天花首疫)、Slave Voyages 量级(跨大西洋 ~1,250 万)。
- **总评**：史实**骨架稳健**——所有核心日期(1492.10.12 / 1493 二航 / 1495 黄金税 / 1500 脚镣 / 1506 卒 / encomienda 1503 / Inter Caetera 1493 / asiento 1518 / Doctrine of Discovery 2023 废 / las Casas 1502/1514/1516/1542/1550/1566 全链)、法律条款、人口区间(脚注处理优秀)、Columbus 1493 献奴信实质均经权威核实通过,合成角色透明度**优秀**。**但有 2 条与权威正面冲突(`flagged`)必须上线前处理:#1 Anacaona 王后『被烧』应为『被俘后绞死』+ Jaragua 屠杀『7 月』非『11 月 9 日』;#2 1497-1502 家人死于『天花』为 1518 前天花的时代错置(应改泛称疫病)。** 另有 5 条引语/数字降级项(#4/#7/#11/#18/#30)。**建议先处理 #1 与 #2 两条硬冲突再上线(尤其 #1 涉及给学生看的 composite 透明声明字段),其余引语分层项随后清。**
