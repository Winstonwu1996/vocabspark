# Fact Ledger 红旗汇总 — 22 个 G6-G12 topic

> 生成 2026-05-23。机制见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **创始人审这一页即可**，无需逐个开 22 个账本。每个 topic 详账本在
> `lib/history-narratives/<topicId>-factledger.md`。
>
> 总览：22 账本 / 约 610 条高风险 claim（均 ~28/topic）/ **0 伪造引文 / composite 全部透明标注**。
> 历史老师的整体通读给 0 否决；Fact Ledger 的逐条 + web 核实另抓出 **~9 处真史实错误** +
> 数十处措辞/framing 收紧。这正是「工程自洽 ≠ 史实置信」要的第二道独立关口。

---

## 🅰 必修：硬史实错误（✋ 上线前应改，共 9 处）

| # | topic | 位置 | 错 | 对 |
|---|---|---|---|---|
| 1 | **hammurabi-code-1754bce** | 3 lens N4+N6（情感锚）| 「贵族牙赔 1 mina / 平民牙赔 1/3 mina」价目表 | 张冠李戴：法典是贵族打贵族=以牙还牙、贵族打平民=1/3 mina；1 mina 是「伤眼/骨」不是牙 |
| 2 | **babylonian-exile-586bce** | 3 lens N7 | 居鲁士「538 打垮巴比伦」 | 539 BCE 取巴比伦，538 才是归回诏令 |
| 3 | **world-war-one-1914** | `pri-n1` + kernel §3 | Princip「走进小店买三明治」当史实 | 已被史学界辟谣的都市传说（源自 1990s 小说）→ 删/改 |
| 4 | **progressive-era-1910** | `tr-n5`（+ §3 / N1）| TR「1.5 亿英亩国家森林」 | 单位错配：150 *片*国家森林 + 约 2.3 亿英亩总保护地；且低估总量 |
| 5 | **great-depression-1933** | narrative §1 + §3 校准说明 | Triangle 火灾 §1 残留 145 + §3 说明写反方向 | 146（storyboard 已对）；§3 那句会误导后续作者改回 145，应删 |
| 6 | **decolonization-1960** | `bunche` lens | Bunche 拒「华盛顿橄榄球队高管」 | 无任何出处，疑事实嫁接 → 换成 verified 的「拒杜鲁门助理国务卿」 |
| 7 | **slavery-abolition-1850** | `douglass` | 与 Garrison 公开决裂并入「1847 办报年」 | 正式公开决裂 1851（North Star 社论）→ 拆成 1847 办报 / 1851 决裂 |
| 8 | **hamilton-jefferson-1790s** | kernel §L2（仅 .md，不外溢学生端）| 1790 总人口「600 多万」 | 约 393 万（与 #9 同源）→ 占比应为 ~18%/六分之一 |
| 9 | **constitutional-convention-1787** | 3 lens synthesis 锚 | 「约占人口五分之一」 | 1790 普查 ~17.8% = 约六分之一（高频 + 情感支点）|

> #8/#9 同根：1790 普查总人口被高估 → 奴隶占比算错。两个 topic 一起改口径。

---

## 🅱 建议修：强措辞 / framing / 中立性（上线前最好处理，非硬错）

- **chinese-exclusion-1882**：`ls-n4`「每凿一米死一个华工」强修辞数字降级；Stanford「劣等种族」是**致立法机关咨文**非「就职演说」；「一天铺 10 英里」补爱尔兰铺轨工。
- **jackson-indian-removal-1830**：Jackson「被刀砍**脸**」→ 主流记载砍**头部**，软化为「砍伤留疤」。
- **civil-war-1861**：USCT「约 4 万**战死**」→「死于战争（多数死于疾病）」；Lincoln「不怀恶意」引语是**第二任就职(1865.3.4)**，排序在投降后会误导。
- **reconstruction-1877**：Revels「接 Jefferson Davis 的**席位**」→ 接的是 Davis 的**任期**，实际坐的是 Albert Brown 空出的席位（3 处都用了此说法）。
- **gilded-age-1890**：AFL/Gompers 排黑人被**个人化+时间错位**（应结构性措辞）；Homestead「正规军」→ 州国民警卫队；「报纸大多站厂方」→ 实际舆论分裂。
- **world-war-two-1942**：Sugihara 职衔「领事」→ 副领事；返日「1947」→ 1946 返/1947 解职。（均低优先级；Speer 祛魅、Holocaust 无不当并置均确认到位。）
- **cold-war-1962**：JFK 越南顾问「遇刺前 1.6 万」→ 1.6 万是 **1963 年底**数，遇刺时约 1.1-1.5 万。
- **french-revolution-1789**：Robespierre 废死刑主张「1789」→ 1791 制宪议会演说。
- **scramble-for-africa-1884**：Williams「crimes against humanity **首用**」→「最早系统使用之一」；Nsala 1904 照片故事层措辞与 §5（被杀害儿童 vs 砍手幸存）对齐。
- **decolonization-1960**：孟加拉饥荒「约 300 万」加争议区间 hedge；Churchill 骂 Gandhi 是**公开**评论非「私下」。
- **womens-suffrage-1920**：Ida B. Wells「子弹/悬赏」降级为「死亡威胁+被烧报馆」；Alpha Suffrage Club「美国第一个」→「芝加哥第一个」。
- **civil-rights-1965** / **industrial-revolution-1800** / **roman-republic-fall-44bce** / **hamilton（#24 Banneker 神话化）**：仅极轻措辞，可上线后慢修。

---

## ✅ 复核确认的强项（不用动）

- **反伪造**：jackson 主动拆穿 2 个伪传说（毯子冻死 / "Marshall has made his decision"）；roman 拒引 "Et tu, Brute"；french-rev 主动辟「让他们吃蛋糕」；ww1 tirailleur lens 0 红旗。
- **中立性（Rule 0）**：cold-war 四维度全过（JFK 自批 + 拒道德赢家 + 美苏对称 + 中国克制）；civil-war 内战起因 framing 优秀；reconstruction 归责已双边平衡。
- **数字修正后用对**：slavery Tubman ~70 人（非 300+ 神话）；scramble 刚果死亡数用「几百万到上千万」区间 + historiography 之争。
- **dark 红线**：所有 receiving-end composite 透明标注；ww2 Holocaust 与 Manzanar 性质规模分明、无相对化。

---

## 下一步选项（待 founder 定）
- 🅰 9 处硬错：上线前**必修**（不改 = 教错史实，违反 pipeline 第 1 条「教材为锚」）。
- 🅱 强措辞：建议上线前修，可批量 content-pass。
- 修法：每处都是定点 Edit，不动周围叙事/voice。#1/#2 是跨 3 lens 锚点，需多处一致改。
