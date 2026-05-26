# Codex 审核 prompt — History 模块三段式 IA 重构（上线前复核）

你是独立代码审核员。请审核 VocabSpark **历史模块信息架构（IA）重构**，目标是给出 **Go / No-Go** 判定。这是一次为「明天上线」做的较大结构改动，核心红线是 **不能碰坏正在线上跑的课程播放器，也不能破坏 Atlas → 播放器的深度学交接**。

## 背景：改了什么、为什么

重构前痛点（创始人实测）：
1. 历史模块**没有统一门面**：顶部导航「History」指向 `/atlas-lab`（地图页），`/history` 反而是被 atlas iframe 嵌进去的内部页；最全的 51 门课程目录藏在内部页里、且 embedded 模式下被隐藏。
2. **课程不全**：Atlas Lab 按年级 tab 切片，数据源 `lib/atlas-views.js` 的 `ALL_VIEWS` 只有 40 个手画地图视图，而 `lib/history-topics.js` 注册表有 51 门 `available` 课程 → 11 门孤儿课（秦统一/罗马共和国崩溃/重建/排华/镀金时代/进步时代/妇女选举/大萧条/瓜分非洲/去殖民化/建国党争）在任何年级 tab 都点不到。

重构后目标（三段式）：
```
/history            首页（门面）：卖点 Hero + 51 门「通史脉络」选课图（全覆盖）
   └ 点课 → /history/<topicId>   单课学习页（播放器）
                 └「在地图上看」→ /atlas-lab/<viewId>   降级为可选探索视图
```

## 审核范围（commit 范围）

```
git diff d3ed88d..HEAD     # 本次重构 = 4 个 commit:
8d570e1  抽 ProfileSetup + CourseBrowser 到 components/history-engine/
7cebe4a  三段式 IA：新建首页 + 单课页路由拆分 + 路由/链接改造
ce49ca5  user-smoke No-Go 三修 + Atlas 次级入口 (见文末「创始人 user-smoke 轮」)
0e5164b  本审核 prompt 本身 (docs)
```

具体改动清单：
- 新增 `pages/history/index.js`（首页：卖点 + `CourseBrowser` 选课，点课 `router.push('/history/<id>')`；旧直链 `/history?topicId=X` 在 `useEffect` 里 `router.replace` 到 `/history/X`，保留其余 query）。
- `pages/history.js` → `pages/history/[topicId].js`（播放器整体平移；所有相对 import `../` 改 `../../`；mount 时 topicId 改为「路径优先、`?topicId=` query 兜底」；`onSwitchTopic` 加 `history.replaceState` 同步 URL）。
- 抽出 `components/history-engine/ProfileSetup.js`（ProfileSetup + Field）、`components/history-engine/CourseBrowser.js`（ThroughLineMap，别名导出 CourseBrowser）；`[topicId].js` 改为 import。
- `components/BrandNavBar.js`：桌面 + 移动「History」tab `href` `/atlas-lab` → `/history`。
- `data/atlas/views/*.js`（~40 个）：`deepLearnUrl` 由 `/history?topicId=X&from=atlas&atlasId=Y` 改为 `/history/X?from=atlas&atlasId=Y`。
- 3 处提取正则改为「路径形式优先、query 兜底」：`components/AtlasLabPage.js`（extractHistoryTopicId）、`lib/atlas-views.js`、`pages/atlas-lab/[viewId].js`。

## 我已经验证过的（不必重复，请聚焦逻辑/边界）

- `npm run build` 绿；路由 `/history`（static）与 `/history/[topicId]` 双注册。
- URL 解析单测 6/6（路径提取 / query 兜底 / embedded suffix / 首页不误命中播放器）。
- 运行时冒烟（`npm start`）：`/history` 首页、`/history/magna-carta-1215`、`/history/globalization-1995`、`/atlas-lab` 全 200，首页含卖点 + 通史脉络。
- 3 个内容 lint（node-length / card-description / cn-lens-leak）全绿。

## 请重点审核（按风险排序）

**P0 级关注点 — Atlas → 播放器 embedded 交接（最高风险）**
1. `data/atlas/views/*.js` 的 `deepLearnUrl` 改成路径形式后，`components/AtlasLabPage.js` 里 embed iframe 的 URL 拼接（搜 `flagSuffix`、`setEmbedUrl`、`'&embedded=1'`）是否仍生成合法 URL：`/history/<id>?from=atlas&atlasId=Y&embedded=1&role=1[&lens=1]`？有没有出现 `/history?...` 残留或 `&` / `?` 拼错。
2. 播放器 `pages/history/[topicId].js` mount effect（搜 `pathname.match`、`embedded`、`role`、`lens`、`from`、`atlasId`）：在 embedded iframe（pathname = `/history/<id>`、其余在 query）下，能否正确读到 topicId（路径）+ embedded/role/lens/from/atlasId（query）？`pendingRole` / `pendingLensId` 以 topicId 为 key 的写入（AtlasLabPage `onLaunchAsRole`）与读出（播放器）闭环是否仍对齐？
3. `extractHistoryTopicId` 等 3 处提取：路径形式 `/history/<id>?...` 与旧 query 形式都能取对 id？有没有把 query 里的 `atlasId=` 误当成 topicId 之类的误匹配？

**P1 级 — 路由与边界**
4. Next.js 同目录 `pages/history/index.js`（`/history`）+ `pages/history/[topicId].js`（`/history/:id`）共存是否正确，无路由冲突；`[topicId].js` 是纯 client page（无 getStaticPaths/getStaticProps），直链 `/history/<id>` 的 SSR shell + 水合是否正常，`router.query.topicId` 未就绪时的瞬态（初始 `useState('magna-carta-1215')` 默认值）会不会闪错课。
5. topicId 边界：非法/不存在的 id（`getTopic` 返回 undefined）如何降级（白屏？报错？）；`decodeURIComponent` 对特殊字符；首页 `goTopic` 与播放器路径解析是否一致。
6. 旧直链重定向 `/history?topicId=X&...` → `/history/X?...`：其余 query（from/atlasId/embedded/role/lens）是否**完整保留**？会不会和 atlas 新路径形式产生双重重定向 / 重定向环？SSR 阶段（无 window）是否安全。
7. `onSwitchTopic` 的 in-place 切课 + `replaceState`：mount effect 仅 `[]` 跑一次，replaceState 改 URL 不应重触发加载；切课状态重置（conversationLog/turnIndex/lens/savedSession/phase）是否完整、有无残留。

**P1 级 — 平移完整性**
8. `pages/history/[topicId].js` 相对 import 深度 `../` → `../../` 是否**全部**改对、无遗漏（含可能的动态 `import()` / `next/dynamic` / 字符串里的 API 路径 / fetch 路径）。
9. 抽出的 `ProfileSetup` / `CourseBrowser` 有无丢失的闭包依赖、props 契约变化；`Field` 是否还有别处引用未跟随。

**P2 级 — 入口可发现性 & 收尾**
10. 导航「History」改指 `/history` 后，**Atlas Lab 还有入口吗**？现在只能从单课页「在地图上看」按钮或直链进 `/atlas-lab`——评估这是否让 atlas 变得难发现（这是有意降级，但请确认没有把 atlas 变成完全的孤儿，以及 `next.config.js` 的 `/atlas-lab` → `/atlas-lab/byzantine-rise` 重定向是否仍合理）。
11. 11 门原孤儿课经首页可达后，确认它们在 `/history/<id>` 真能加载（`getTopic` / `buildPreviewTopic` 兜底），例如 `qin-china-221bce`、`reconstruction-1877`、`gilded-age-1890`。
12. 单课页底部仍渲染的 `ThroughLineMap`（与首页选课图重复）是否该保留 / 移除；embedded 模式下是否仍被正确隐藏。
13. completion 回跳 / `fromAtlas`：embedded 完成后 postMessage 回父 atlas、自动回跳 URL 在新路径下是否仍工作。

**安全/回归基线**
14. 无 PII、无新外部网络调用、无新建账号；播放器全流程（profile setup → intro → lens 选择 → 14 轮对话 → mastery gate → completion）无功能回归。

## 增补：创始人 user-smoke 轮（已修，请重点验证这 3 处修复的正确性 + 无回归）

创始人模拟 Willow / 家长首次路径实测，给了 User-Smoke No-Go，发现 3 个真实问题，已在 commit `ce49ca5` 修复。请独立验证每个修复是否真正解决问题、是否引入新回归：

**US-1（单课页埋住「开始」）** — 进单课后先看到完整 51 门课表，再才是视角选择，像还在选课页。
- 修复：`pages/history/[topicId].js` IntroScreen 里把内联的整块 `ThroughLineMap` 改为默认折叠的「换一课 / 看全部 51 门」toggle（`showAllCourses` state），`simplifiedMode` 下仍完全隐藏。
- 请验证：① 单课页首屏不再出现完整课表、视角选择/开始入口靠前；② 折叠 toggle 展开/收起正常；③ embedded/atlas 流程下仍完全不渲染（沉浸 + iframe 不切页）。

**US-2（embedded 水合错误，上线风险）** — 打开 Atlas `us-constitution` 深度学，控制台 `Text content did not match`：server 文案「页面顶部的 Where this happened」，client 变「完整地图已经在 Atlas Lab 看过了」。
- 根因：`lib/hooks/use-simplified-mode.js` 在 render 内**同步读 `window.location.search`**，server（无 window → simplifiedMode=false）与 client 首屏（读到 `?embedded=1` → true）分裂。
- 修复：hook 内置 `hydrated` gate（`useState(false)` + `useEffect` 置 true），首屏（server + client 第一次 render）都不读 window → 一致；mount 后才开同步 URL fallback；`hydrated` 已加入 useMemo 依赖。
- 请验证（这是 P0/P1 上线风险，重点）：① 该修复是否真的消除所有 `useSimplifiedMode` 消费者（IntroScreen / GeographySection / LensSelector / Walkthrough 触发 / EN-CN toggle 等）的水合分裂；② 是否还有**其它** render 路径里的同步 `window` 读取会造成首屏不一致（grep `window.location` / `URLSearchParams` 在 render 而非 effect/handler 内的用法）；③ mount 后从「非 simplified」翻到「simplified」的一帧闪烁是否可接受（尤其 iframe 内 nav 一帧闪现）；④ `embedded` / `fromAtlas` state（由页面自己的 mount effect 设置）与 hook 的 URL fallback 是否会产生时序竞态。

**US-3（非法 topic URL/content 分裂）** — `/history/not-a-real-topic` 最终显示「唐宋盛世」，但地址栏仍是非法路径，分享出去更乱。
- 修复：`pages/history/[topicId].js` mount effect 里，路径有 id 但 `getTopic` 无效 → `window.location.replace('/history')` 回目录。
- 请验证：① 非法 id 不再出现「内容 ≠ URL」；② 不会重定向环（/history 首页对合法 id 的 legacy 重定向 vs 这里的非法回首页）；③ 合法的 embedded/atlas id、legacy `?topicId=` 流程不受影响；④ `window.location.replace` vs `router.replace` 的取舍是否有问题（整页刷新对非法 id 可接受？）。

## 输出格式

- 先给一句 **Go / No-Go**。
- 然后按 **P0 / P1 / P2** 分级列问题，每条：`文件:行号` + 问题 + 建议改法（尽量给可直接落地的最小 diff）。
- 明确区分「真 bug / 回归」与「可选优化」。
- 如果某关注点核对后没问题，简短标 ✓ 即可（便于创始人确认覆盖到了）。

不要改文件，只审核 + 报告。
