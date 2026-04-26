// ─── History 模块色彩扩展（叠加 lib/theme.js 的 C 上） ──────────────
// 抽离自 pages/history.js（Day 4-5 重构 Stage 1）
// 用途：让 pages/history.js 和 components/AtlasLabPage.js（embedded mode）
// 共享同一套色板，避免 history-engine 组件抽离时 HC 找不到。
//
// 升级路径：等 ConversationStream / MasteryGateOverlay / CompletionScreen
// 都抽离到 components/history-engine/ 后，它们 import HC from './theme.js'。
import { C } from '../../lib/theme';

export var HC = {
  ...C,
  parchment:    "#f4ead0",
  parchmentHi:  "#fbf5e0",
  parchmentLo:  "#e8dcb6",
  ink:          "#3d2c1a",
  inkLight:     "#6b4f33",
  pinFill:      "#9b2c2c",
  pinStroke:    "#5a1a1a",
};

export default HC;
