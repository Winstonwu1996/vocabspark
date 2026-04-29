// pages/api/parent-email/test.js
//
// 手动测试家长邮件发送 — Phase B2 sanity check
//
// 用法：
//   POST /api/parent-email/test
//   Body: { to: "your@email.com", type: "summary" | "wakeup" | "ping" }
//
// 安全：需要 X-Test-Token header（用环境变量 PARENT_EMAIL_TEST_TOKEN 鉴权）
//   生产环境此 endpoint 应该禁用或加更严格鉴权
//
// 用于：
//   - 第一次测试 Resend API 集成是否正常
//   - 测试 summary / wakeup 模板渲染
//   - 触发"给我自己邮箱发一封看看"的快速验证

import { sendParentEmail, wrapEmailHtml } from '../../../lib/email.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST only' });
  }

  // 鉴权
  var token = req.headers['x-test-token'];
  var expected = process.env.PARENT_EMAIL_TEST_TOKEN;
  if (!expected) {
    return res.status(500).json({ error: 'PARENT_EMAIL_TEST_TOKEN not set in env' });
  }
  if (token !== expected) {
    return res.status(403).json({ error: 'invalid token' });
  }

  var { to, type } = req.body || {};
  if (!to) return res.status(400).json({ error: 'to required' });
  type = type || 'ping';

  var subject;
  var bodyHtml;

  if (type === 'ping') {
    subject = '[Know U. Test] Email infra ping · ' + new Date().toLocaleString('zh-CN');
    bodyHtml = `
      <h2 style="color: #2a1f17;">📧 邮件基础设施测试通过</h2>
      <p>这封邮件证明：</p>
      <ul style="font-size: 14px;">
        <li>✅ Resend API 集成正常</li>
        <li>✅ <code>lib/email.js</code> wrapper 工作</li>
        <li>✅ <code>wrapEmailHtml()</code> 模板渲染正常</li>
        <li>✅ 你的家长邮箱收到了我们的测试</li>
      </ul>
      <p style="font-size: 13px; color: #555; margin-top: 24px;">
        下一步（Phase B3）：Vercel Cron 周一 8:00 PT 自动触发 + summary/wakeup 模板分支。
      </p>
      <hr style="border: none; border-top: 1px solid #e5e2dd; margin: 24px 0;">
      <p style="font-size: 12px; color: #999;">
        Sent at: ${new Date().toISOString()}<br>
        Type: ping<br>
        Source: /api/parent-email/test
      </p>
    `;
  } else if (type === 'summary') {
    subject = 'Willow 这周学习简报 · 4 月 22-28 日（测试样本）';
    bodyHtml = `
      <p style="margin-top: 0;">王先生 / 王女士：</p>

      <p>Willow 这周用 Know U. 学了：</p>

      <h3 style="color: #c25d2c; margin-top: 24px;">📚 词汇模块</h3>
      <ul style="font-size: 14px;">
        <li>学了 <strong>28 个新词</strong>（accuracy 87%）</li>
        <li>这周最难的词："indulgence"（赎罪券）— 已掌握</li>
        <li>建议：周末抽 5 分钟用她学的词造 1 句话关于"你的童年"</li>
      </ul>

      <h3 style="color: #c25d2c; margin-top: 24px;">📜 历史模块</h3>
      <ul style="font-size: 14px;">
        <li>完成 Topic：<strong>Magna Carta（93%）</strong></li>
        <li>卡点：第 6 轮"教皇 vs 王权"概念</li>
      </ul>

      <p style="font-size: 14px; margin-top: 16px;">
        <strong>📌 给爸妈的晚饭桌问题</strong>（看她能不能答出来）：
      </p>

      <ol style="font-size: 14px; line-height: 1.8;">
        <li>"为什么贵族敢逼国王签字？"
          <br><span style="color: #777; font-size: 13px;">→ 目标答案：因为国王打仗输了 + 税收过重 + 教皇支持削弱</span>
        </li>
        <li>"中国宋朝皇帝能这样被逼吗？"
          <br><span style="color: #777; font-size: 13px;">→ 目标答案：不能 — 制度结构差别（天子不可质疑）</span>
        </li>
      </ol>

      <h3 style="color: #c25d2c; margin-top: 24px;">🎯 这周认知亮点</h3>
      <p style="font-size: 14px; background: #fff3e0; padding: 12px; border-left: 3px solid #c25d2c; margin: 0;">
        她在历史第 8 轮用了"trade-off"这个词主动思考——
        这是 AP World 5 分思维，请鼓励一下。
      </p>

      <h3 style="color: #c25d2c; margin-top: 24px;">🚨 需要你关注</h3>
      <p style="font-size: 14px; color: #c25d2c;">
        历史 Topic 完成后她说"太累了"——可能是我们内容密度过高。我们已经在调整。
      </p>
    `;
  } else if (type === 'wakeup') {
    subject = 'Willow 这周还没打开 Know U.（测试样本）';
    bodyHtml = `
      <p style="margin-top: 0;">王先生 / 王女士：</p>

      <p>Willow 这周（4 月 22-28 日）没用过 Know U.。我们想了几个可能原因，给您做参考：</p>

      <p style="font-size: 14px; background: #fff3e0; padding: 12px; border-left: 3px solid #c25d2c;">
        🌟 上次她用是 4 月 14 日 — 学的是 Crusades，完成度 67%<br>
        可能她记着这个 Topic 还没完，等回头收尾
      </p>

      <p style="font-size: 14px;">📅 学校最近忙吗？她有别的 priority？</p>

      <p style="font-size: 14px;">
        💡 如果她需要一点动力，可以说：
      </p>
      <p style="font-size: 14px; background: #faf6ee; padding: 12px; font-style: italic;">
        "你之前那个'Saladin 不屠耶路撒冷是政治算计还是高贵骑士道'的问题，
         下次写 essay 可能用得上 — 要不周末花 20 分钟收尾？"
      </p>

      <p style="font-size: 14px;">
        🤔 如果她对内容不感兴趣 / 觉得难，回信告诉我们一句话——我们立刻调整。
      </p>

      <p style="margin-top: 24px;">—— Know U. Learning</p>
    `;
  } else {
    return res.status(400).json({ error: 'unknown type, use: ping | summary | wakeup' });
  }

  var html = wrapEmailHtml({ title: subject, bodyHtml: bodyHtml });

  var result = await sendParentEmail({
    to: to,
    subject: subject,
    html: html,
    emailType: 'manual-test',
    metadata: { trigger: 'manual-test-endpoint', type: type },
  });

  return res.status(result.success ? 200 : 500).json(result);
}
