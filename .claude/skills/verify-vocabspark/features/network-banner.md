# 顶部「网络已断开」提示

组件 `components/NetworkBanner.js`，挂在 `pages/_app.js`，所有页面都有。判定逻辑在 `lib/connectivity.js`：浏览器说离线只当怀疑，探一次 `/api/version` 打不通才报；报了以后按 2、3、5、8、15 秒，之后每 30 秒复检，打通就显示「已恢复」，3 秒后消失。

## 子功能

1. **误报不报**：浏览器说离线，但服务器打得通 → 不出红条。
2. **真断才报**：浏览器说离线，服务器也打不通 → 出红条「网络已断开，重连后将自动继续」。
3. **网好了自己消失**：服务器恢复，浏览器却一直说离线（Willow 撞到的就是这种）→ 复检打通后变绿「已恢复，正在继续...」，3 秒后消失，不用刷新。

## 怎么走到（用户视角）

打开 `http://127.0.0.1:3100/vocab`，不用登录，不用点任何东西。红条出现在页面最顶上，盖在导航栏上面。

## 用内置浏览器驱动

**环境模拟（不改应用状态）：** 浏览器的离线信号用下面这段模拟，相当于真用户切 WiFi、手机锁屏唤醒时浏览器报的离线；服务器真断用 `server.sh stop` 真停掉。

```js
// 让浏览器一直报离线（Willow 那种「只发 offline 不发 online」），再发一次离线事件
Object.defineProperty(Navigator.prototype, 'onLine', { configurable: true, get() { return false; } });
window.dispatchEvent(new Event('offline'));
```

**观察脚本：** 装一个只读的记录器，每 300 毫秒记一次顶部提示条的文字，状态变了才记一笔。每步之后读 `window.__vbLog` 贴进 `proof.md`。

```js
(() => {
  const read = () => [...document.querySelectorAll('[role="status"][aria-live="polite"]')]
    .map(e => e.textContent.trim()).filter(t => /网络已断开|已恢复，正在继续|网络较慢/.test(t)).join(' | ') || '(无提示条)';
  window.__vbLog = [{ t: new Date().toISOString().slice(11, 23), banner: read() }];
  let last = window.__vbLog[0].banner;
  clearInterval(window.__vbTimer);
  window.__vbTimer = setInterval(() => {
    const b = read();
    if (b !== last) { window.__vbLog.push({ t: new Date().toISOString().slice(11, 23), banner: b }); last = b; }
  }, 300);
  return window.__vbLog;
})()
```

**步骤：**

1. `new-run.sh network-banner` 开证据目录。`preview_start` 打开 `/vocab`，清场成干净游客。干净游客一进来是欢迎弹窗「我知道了，开始设置」，不用关，提示条盖在它上面也看得到。观察脚本返回前先确认页面已水合：`!!document.querySelector('#__next button')` 为真。
2. 执行观察脚本，记初始状态，应为「(无提示条)」。
3. **误报不报**：执行环境模拟那段。等 3 秒，读 `window.__vbLog`：应仍只有「(无提示条)」一笔。`read_console_messages` 用 `pattern: "NetworkBanner"`，应有「收到 offline 事件但服务器可达，判定为误报，不提示」。`read_network_requests` 用 `urlPattern: "/api/version"`，应有带 `_probe=` 的请求且返回 200。
4. **真断才报**：`server.sh stop`。再发一次离线事件（`window.dispatchEvent(new Event('offline'))`，`onLine` 已经是假的离线）。等 2 秒，读 `__vbLog`：最后一笔应为「📡网络已断开，重连后将自动继续」。控制台应有「网络已断开（探测确认）」。
5. **网好了自己消失**：等至少 6 秒，让它复检失败两三次（控制台「复检 #n probe=false onLine=false」），证明红条没有因为别的原因自己消失。然后 `server.sh start`，**不要刷新页面**，`onLine` 保持假的离线。等最多 40 秒（复检间隔会拉长），读 `__vbLog`：应依次出现「✅已恢复，正在继续...」和「(无提示条)」，两笔相隔约 3 秒。控制台应有「复检 #n probe=true onLine=false」和「网络已恢复」。
6. 把三段的 `__vbLog`、控制台原文、网络请求抄进 `proof.md`，写结论：三个子功能各自证明了没有。

## 坑

- 第 5 步怎么证明没刷新：`window.__vbLog` 是页面里的变量，一刷新就没了。它从头到尾连续，就说明中途没刷新。别拿 `performance` 里的导航类型判断：第 1 步清场刷新过一次，它一直是 `reload`。
- 2026-11-20 第一次跑：服务器停了约 23 秒，复检第 5 次打通，红条 3.0 秒后消失。服务器停得越久，等的时间越长（后面每 30 秒才复检一次）。
- 第 5 步不能刷新页面：刷新会重新加载组件，就不是「挂着的红条自己消失」了，证明不了 Willow 那个场景。
- 第 4 步之后服务器停着，浏览器里别的请求会报错（控制台有红字），这是预期的，不算失败。
- 环境模拟只改了浏览器报的「在不在线」，没碰应用代码和应用状态。真用户场景里浏览器还会发 `online` 事件，那条路径（直接显示「已恢复」）这里没走。
- `server.sh start` 用的是同一份构建，页面不会弹「有新版本」。
