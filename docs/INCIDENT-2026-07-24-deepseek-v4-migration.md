# 事故 + 修复存档：2026-07-24 DeepSeek 模型停用（全站 LLM P0）

**一句话**：DeepSeek 于 2026-07-24 停用 `deepseek-chat`/`deepseek-reasoner` 模型名，全站 AI（讲解/猜词/复习/快筛）开始返 400/500，仅 Redis 缓存过的老词还能用。已迁移到 `deepseek-v4-flash` 并补上 OpenAI 兜底。

## 现在的 LLM 兜底链

```
DeepSeek(deepseek-v4-flash, 主力, 中国)  →  OpenAI(gpt-4o-mini, 美国, funded)  →  Gemini(gemini-2.5-flash-lite, 免费额度限流)
```

配置点（全部 env 可覆盖，改 Vercel 环境变量即可，无需改代码）：
- `DEEPSEEK_MODEL`（默认 `deepseek-v4-flash`）
- `OPENAI_MODEL`（默认 `gpt-4o-mini`）、`OPENAI_API_KEY`（Vercel Production 已配）
- `GEMINI_MODEL`（默认 `gemini-2.5-flash-lite`）

Provider 定义在 3 处（保持一致）：`lib/llm-providers.js`、`pages/api/chat.js`、`pages/api/chat-stream.js`（各含 BYO-key 路径）。

## 两个关键坑（以后碰供应商变更必看）

1. **DeepSeek v4-flash 默认可能开"思考模式"**（旧 `deepseek-chat` 是关的）。不关的话响应会被推理串污染 → teach/guess 的 JSON 解析全崩 + output token 暴涨。3 处请求体对 `family==="deepseek"` 显式加 `thinking: {type:"disabled"}`（官方字段，api-docs.deepseek.com 核实）。**换任何 DeepSeek 模型都要保留这个。**

2. **免费额度当不了真兜底**。Gemini `gemini-2.5-flash-lite` 没过期、能用，但免费额度限流极严（实测 6 连发 4 个 429）。DeepSeek 全站故障时全量涌过去 → 秒 429 → 熔断 → 看起来"Gemini 也坏了"。所以补了 **funded 的 OpenAI（美国节点，跨境延迟低、与 DeepSeek 独立）** 当主兜底。

## 定价（决定选 flash 不选 pro）

| 模型 | input(miss) | output |
|---|---|---|
| deepseek-chat（旧） | $0.14 | $0.28 |
| **deepseek-v4-flash** | $0.14 | $0.28（同价，且就是旧 chat 的底层模型） |
| deepseek-v4-pro | $0.435（+211%） | $0.87（+211%） |

规则：比旧价贵 ≤50% 用更强的，>50% 用 flash。pro +211% → 用 flash。

## 排障手册（LLM 又返空/500/乱码时）

1. 拉 Vercel runtime logs，搜 provider 错误串：`get_runtime_logs(query="supported API model"/"gemini"/route)`。错误里会明说是模型名过期、配额、还是限流。
2. 直接用 key 测供应商 endpoint（值从 `~/.ai-tools/secrets.env` 读，别打印）：能列 models≠能跑 completions（可能 `insufficient_quota`）。
3. 快筛/复习释义走 `/api/quick-def`（DeepSeek + Upstash 缓存 `qd-v1:`）；服务端严格清洗（必含中文/去英文回显/限长）。

## William 的付费 key 现状（2026-07-24 实测）

清单在 `~/AI-OS/secrets-清单.md`（只记名字），值在 `~/.ai-tools/secrets.env`。
- ✅ DeepSeek（充值、主力）、✅ OpenAI（已充值、兜底）、✅ Anthropic/Claude（funded，但非 OpenAI 兼容，接需适配）
- ❌ OpenRouter（无额度）、❌ Kimi/Moonshot（key 失效）、⚠️ Gemini（免费限流）

要更多层冗余：给 OpenRouter 充值 → 接成第四层（一个 key 多模型 + 自动 failover）。
