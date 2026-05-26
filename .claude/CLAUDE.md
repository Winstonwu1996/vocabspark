# VocabSpark — Claude Code 启动指令 (薄 shim)

> Boot 时: **先读 `../AGENTS.md`** (canonical 项目说明 — 项目背景 / 技术栈 / 边界 / 命令 / 指针)
> 本文件只放 Claude Code 特有的额外指令.

## Claude Code 特有

1. **MCP servers**: 已注册 `openclaw` + `vault-search` (全局), 直接可用. 不要重复装.

2. **Skills**: 当前没装项目级 skill. 系统级 skill 见 `~/.claude/skills/`.

3. **Plan mode**: 修复 bug 前如果改动 > 3 个文件, 建议先 `ExitPlanMode` 出 plan 给 William 看, 再写代码.

4. **Hook 偏好**: 走 `workon task complete` (v12.2 Day 2 实现) 做完成判定, 不要手改 `TASK.md status: done` (会被识别为 unverified_done).

5. **Remote Control 兼容**: 本 session 可能被 William 用手机 Claude app 接管 (`/rc` 已配过, session id 在 [v12.2-mvp v3](~/.claude/plans/v12.2-mvp-v3.md) 里有记录). 输出**简短** + 关键 diff 高亮, 方便手机看.

---

*薄 shim · 真背景在 ../AGENTS.md*
