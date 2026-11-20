---
name: verify-vocabspark
description: 像真用户一样驱动 VocabSpark（Know U. Learning）的网页：用生产构建在本机起服务，用 Claude 内置浏览器操作，留下证据再收尾。改了词汇页、复习、阅读理解、网络提示、登录后设置这类用户能碰到的功能，要证明它真的能用时用它；单测过了不算，跑一遍这里对应的功能才算。
---

# 验证 VocabSpark

单测证明函数对，这里证明用户真用的时候对。读者是接手的 agent：照着做，不用先读懂整个应用。

功能地图在 `features/`，每个功能一个文件，写着从用户角度怎么走到、怎么驱动、看到什么才算证明。改了哪个功能，就跑哪个文件；地图上列了几条路径，就都要走。

## 0. 先知道的三条边界

- **只在工作副本里跑，不在主仓库里跑。** 本机服务连的是线上数据库。主仓库的环境变量文件带付款、管理员、发信、线上缓存的密钥，`launch.sh` 和 `server.sh start` 都拒绝在主仓库启动。`launch.sh` 只从主仓库摘五项（数据库地址、公开 key、两把 DeepSeek、Gemini）写进工作副本自己的 `.env.local`，清理时删掉。
- **构建和启动在干净环境里跑。** 不继承你终端里的任何变量（里面可能有密钥），`NODE_ENV` 固定为 production。启动前用 Next 自己的加载器把它会读的环境变量文件读一遍，出现白名单以外的键就拒绝启动。
- **只走游客路径。** 不登录就不会往线上数据库写进度。要登录的功能（`features/` 里标了「要登录」的）现在跑不了：线上没有测试账号，登录要收验证码邮件。要建测试账号，先问 William，不自己建。
- **会花一点钱。** 学新词、生成阅读理解要调 DeepSeek，一个词几厘钱。网络提示那条不调 AI，零花费。

## 1. 启动

```bash
.claude/skills/verify-vocabspark/scripts/launch.sh            # 构建 + 启动，1-3 分钟
.claude/skills/verify-vocabspark/scripts/launch.sh --no-build # 当前提交已构建过时跳过构建
```

用生产构建，不用 `npm run dev`：开发包太大，浏览器里课页不水合，按钮点了没反应。服务起在 `http://127.0.0.1:3100`（换端口：`VERIFY_PORT=3101`）。打印「✓ 服务就绪」才算好，它要等 `/api/version` 和 `/vocab` 都返回 200。

只想停起服务、不重新构建（断网那条要用）：

```bash
.claude/skills/verify-vocabspark/scripts/server.sh stop|start|status
```

## 2. 体检

```bash
.claude/skills/verify-vocabspark/scripts/doctor.sh
```

只读。检查是不是在工作副本里、服务在不在、端口是不是我们起的进程占着、构建的是不是当前提交、正在服务的是不是这份构建、页面代码有没有没提交的改动、环境变量是不是只有白名单那几项、两个地址返回 200。有一项没过就别驱动；任何时候觉得哪里不对，先跑它。

## 3. 驱动

用 Claude 内置浏览器（`mcp__Claude_Browser__*`）。不用用户自己的 Chrome：那里登着 William 的真账号。

1. 开页：`preview_start` 传 `url: "http://127.0.0.1:3100/vocab"`，记下返回的 `tabId`。
2. 开一个干净的游客：每条流程开始前在页面里执行 `localStorage.clear(); sessionStorage.clear(); location.reload()`，免得上一条留下的进度掺进来。这是清场，不算替应用改状态。
3. 读页面用 `read_page` / `find` / `get_page_text`；点按钮优先用 `find` 按按钮上的字找 `ref`，不要用坐标。
4. 动手前确认页面已水合：`Object.keys(document.getElementById('__next')).some(k => k.startsWith('__reactContainer'))` 为真。服务端渲染的按钮看得见但点了没反应。
5. 每个功能的具体步骤、按钮上的字、判断用的脚本，在 `features/<功能>.md`。

## 4. 证据

每次驱动先开证据目录：

```bash
.claude/skills/verify-vocabspark/scripts/new-run.sh <功能名>   # 打印目录；里面有写好表头的 proof.md
```

证据目录在主仓库的 `.git/verify-evidence/` 下：永远不会被提交，工作副本删了也还在。

证明的规矩：

- **走用户真走的路。** 点按钮、输入，不调页面内部函数，不写应用自己的状态。模拟浏览器环境可以（比如让浏览器报「离线」），每个功能文件写明了哪些算环境模拟。
- **动作和结果都记。** 每一步写进 `proof.md`：做了什么、几点、之后页面是什么状态（用功能文件里给的观察脚本，把返回的 JSON 原样贴进去）。只贴最后一屏不算。
- **副作用一起核。** 该打的接口打了没有（`read_network_requests`），控制台说了什么（`read_console_messages`），都抄进 `proof.md`。
- **结论只写看到的。** 最后一节写「证明了什么、没证明什么」。没跑到的路径写没跑到，不写通过。
- 要给 William 看截图，用 `computer` 的 `screenshot`。截图只在对话里，不落盘；落盘的证据是 `proof.md`。

## 5. 清理

```bash
.claude/skills/verify-vocabspark/scripts/cleanup.sh
```

停掉这次起的服务（按记下的进程组，只认工作目录是这个副本的进程，不按进程名；15 秒停不下就强停），删掉 `.verify/run/` 和 `launch.sh` 写的 `.env.local`。服务没停干净时 `.verify/run/` 留着，下次还找得到它。证据目录不动，最后打印最近三份证据的位置。失败的尝试之后也要跑，别把进程和端口留着。

## 6. 地图要跟着应用改

功能改了，对应的 `features/*.md` 一起改。地图上写的步骤应用做不到了，先分清两种情况：地图过时了就改地图；是产品坏了就报给 William，不在地图里把它糊过去。
