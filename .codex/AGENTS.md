# VocabSpark — Codex CLI 启动指令 (薄 shim)

> Boot 时: **先读 `../AGENTS.md`** (canonical, 项目级 source of truth)
> 本文件只放 Codex CLI 特有的额外指令.

## Codex CLI 特有

1. **MCP config**: `~/.codex/config.toml` 已注册 `openclaw` + `vault-search` (全局), 直接可用.

2. **执行权限**: Codex 默认 read-write, 但 Boundaries §Never 仍要严守 (见 ../AGENTS.md). 不要 push main, 不要改 vendor/, 不要提交 secrets.

3. **Mobile Remote**: 本 session 可能被 William 用 ChatGPT 手机 app 接管 (OpenAI 2026-05-14 发布的 Codex mobile 功能). 输出**简短** + 关键 diff 高亮.

4. **Cloud Code 区分**: 如果是 ChatGPT mobile 直接 spawn 的 Cloud session (sandbox, 从 GitHub clone vocabspark), 注意:
   - 没有本地 Vault 访问 (`~/ObsidianVault/...` 路径无效)
   - 没有 `~/.openclaw/workspace/scripts/l2-search.py`
   - 只能用 git history + repo 内 docs/* 作背景
   - 改完必须 PR + 等 William merge (不要直接 push main)

---

*薄 shim · 真背景在 ../AGENTS.md*
