# <Topic 名> Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    <topicId>
生成日期:    YYYY-MM-DD
来源文件:    lib/history-storyboards/<topicId>.js（3 lens 全部）+ lib/history-narratives/<topicId>.md
claim 总数:  N
🚩 红旗数:   M（需创始人审）
```

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：
1. **date** 日期
2. **number** 数字 / 统计 / 伤亡 / 规模
3. **quote** 直接引语（最危险：必须分清真史料 vs 演绎 vs 概括）
4. **causal** 因果判断（"因为 X 所以 Y"）
5. **motive** 人物动机（角色为什么这么做）
6. **representativeness** 群体代表性（一个人物是否被当成整个群体）
7. **absolute** 绝对表述（第一次 / 最大 / 从未 / 唯一）
8. **rhetoric** 情绪很强的修辞句（越有感染力越要查事实底座）

**来源等级**（每条必标）：
| 等级 | 含义 |
|---|---|
| `primary` | 一手史料（原始文件 / 当事人记录）|
| `textbook` | textbook / AP World CED / CA HSS |
| `encyclopedia` | 权威百科（维基对照过 / Britannica）|
| `inference` | 合理推断（史料支撑但非直述）|
| `dramatization` | 演绎（虚构姓名/年龄/内心戏/场景）→ **必须降级措辞或显式标注** |

**状态**（每条必标）：
- `✅verified` — 已对权威来源核实，准确
- `🚩needs-source` — 高风险但当前无来源 → **红旗**
- `⚠️downgrade-wording` — 措辞过强 / 该降级（如绝对表述、强修辞数字）→ **红旗**
- `✋flagged` — 与权威来源冲突 / 存疑 → **红旗**

> 凡 `dramatization` 等级而文中**未透明标注**为合成 → 自动进红旗。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | "……"（lens `xx-n3`）| date | primary | 《在北题壁》c.1130 | ✅verified |
| 2 | "……"（lens `yy-n5`）| number | encyclopedia | 维基：约 16,000 被迁 | ✅verified |
| … | | | | | |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#x]** `<原文>` — 问题：…… → 建议：……

（若无红旗，写"无红旗——所有高风险 claim 均 verified 或已透明降级"。）

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| | | | |

---

## 备注
- 抽取覆盖的 lens：……
- 用到的外部核实来源：……
