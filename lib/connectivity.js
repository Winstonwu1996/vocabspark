/* ─── 真实连通性探测 ────────────────────────────────────────────────────────
 *
 * 用户反馈（Willow 登录 Vocab 时）：顶部弹出红色「网络已断开」，但服务端一切正常。
 *
 * 根因：NetworkBanner 只信 navigator.onLine。这个 API 的语义是
 * 「设备是否连上了某个网络接口」，不是「能否访问互联网」——
 * 切 WiFi、iOS Safari 前后台切换、锁屏唤醒、省电模式、VPN 连断
 * 都会虚报 offline 事件。加上原实现进入 offline 后毫无自愈，
 * 只被动等 online 事件，而上述场景常常「只发 offline 不发 online」→ 红条永久卡住。
 *
 * 修法：navigator.onLine 只当「怀疑信号」，真正判定以能否打通服务器为准；
 *      并在断网状态下持续复检，网一好就自动消失。
 *
 * 单独成模块：pages/_app.js 挂的组件内联函数测不到。
 * （此前审查用变异测试证明过「手抄副本的测试是假保护」，故让生产与测试共用实现。）
 */

// 探测目标：46 字节、no-store 的版本接口。够轻，且不会被 CDN 缓存骗过。
export var PROBE_URL = '/api/version';
export var PROBE_TIMEOUT_MS = 4000;

/**
 * 探一次服务器是否可达。
 *
 * 判定标准刻意宽松：只要「拿到了 HTTP 响应」就算通 —— 哪怕是 500，
 * 也证明网络链路是好的（服务端错误不该显示成「网络已断开」）。
 * 只有 fetch 抛错（DNS/连接失败/超时）才算真断。
 *
 * @param {(input: any, init?: any) => Promise<any>} [fetchImpl] 便于测试注入
 * @param {{url?: string, timeoutMs?: number}} [opts]
 * @returns {Promise<boolean>} true = 能连上
 */
export async function probeConnectivity(fetchImpl, opts) {
  var o = opts || {};
  var url = o.url || PROBE_URL;
  var timeoutMs = typeof o.timeoutMs === 'number' ? o.timeoutMs : PROBE_TIMEOUT_MS;
  var doFetch = fetchImpl || (typeof fetch === 'function' ? fetch : null);
  if (!doFetch) return false;

  // 加时间戳避免任何中间层缓存导致「假通」
  var sep = url.indexOf('?') >= 0 ? '&' : '?';
  var probeUrl = url + sep + '_probe=' + Date.now();

  var controller = null;
  var timer = null;
  try {
    if (typeof AbortController === 'function') {
      controller = new AbortController();
      timer = setTimeout(function () { try { controller.abort(); } catch (e) {} }, timeoutMs);
    }
    var res = await doFetch(probeUrl, {
      method: 'GET',
      cache: 'no-store',
      signal: controller ? controller.signal : undefined,
    });
    // 拿到任何响应都说明链路通（含 4xx/5xx）
    return !!res;
  } catch (e) {
    return false; // 网络层失败：DNS / 连接被拒 / 超时
  } finally {
    if (timer) clearTimeout(timer);
  }
}

/**
 * 决定「是否真的要显示断网横幅」。
 *
 * @param {boolean} browserOnline navigator.onLine 的值
 * @param {boolean} probeOk       探测结果
 * @returns {boolean} true = 确实断网，应当提示
 */
export function shouldReportOffline(browserOnline, probeOk) {
  // 浏览器说在线 → 一定不报（即使探测失败，也可能只是接口偶发抖动，不该吓用户）
  if (browserOnline) return false;
  // 浏览器说离线，但实际能打通服务器 → 典型误报，不打扰
  if (probeOk) return false;
  return true;
}

/**
 * 断网状态下的复检退避间隔（秒）。
 * 前几次密集探测（网络恢复后尽快消失横幅），之后逐步拉长避免空耗电量。
 * @param {number} attempt 第几次复检，从 0 开始
 * @returns {number} 毫秒
 */
export function recheckDelayMs(attempt) {
  var n = Number(attempt);
  if (!Number.isFinite(n) || n < 0) n = 0;
  var ladder = [2000, 3000, 5000, 8000, 15000];
  return n < ladder.length ? ladder[n] : 30000;
}


/**
 * 探测证实可达之后，该回落到什么状态。
 *
 * ⚠️ 这里刻意【不看】navigator.onLine —— 浏览器在切 WiFi / iOS 前后台切换后
 * 常常长时间谎报 onLine=false。若回落时仍信它，横幅会在自愈成功后立刻被打回
 * offline，而此时复检已停止 → 红条永久卡住（实测踩过这个坑）。
 *
 * @param {boolean} probeOk 探测结果（true = 服务器可达）
 * @param {boolean} browserOnline navigator.onLine（仅在探测失败时才参考）
 * @returns {'ok'|'offline'}
 */
export function statusAfterProbe(probeOk, browserOnline) {
  if (probeOk) return 'ok';            // 探测说通，就是通，不给 onLine 一票否决权
  return browserOnline ? 'ok' : 'offline';
}

export default probeConnectivity;
