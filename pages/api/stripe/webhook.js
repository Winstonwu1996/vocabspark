import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import * as Sentry from '@sentry/nextjs';

export var config = { api: { bodyParser: false } };

async function getRawBody(req) {
  var chunks = [];
  for await (var chunk of req) { chunks.push(chunk); }
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  var rawBody = await getRawBody(req);
  var sig = req.headers['stripe-signature'];

  // 在 handler 内初始化 Stripe（避免 Vercel 模块顶层连接问题）
  var stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'dummy', { timeout: 10000 });

  var event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (e) {
    return res.status(400).json({ error: 'Signature verification failed' });
  }

  if (event.type === 'checkout.session.completed') {
    var supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder'
    );

    var session = event.data.object;
    var meta = session.metadata || {};
    var userId = meta.userId;
    var tier = meta.tier;
    var billing = meta.billing;
    var byoKey = meta.byoKey === 'true';

    if (userId && tier) {
      var now = new Date();
      var expiresAt = new Date(now);
      expiresAt.setDate(expiresAt.getDate() + (billing === 'yearly' ? 365 : 30));

      // ⚠️ 必须检查 insert 结果：吞掉错误再返回 200 会让 Stripe 视为成功、永不重投，
      // 用户付了钱但没开通且无人知晓。失败 → 返回 500 让 Stripe 自动重试。
      var { error: insErr } = await supabaseAdmin.from('user_subscriptions').insert({
        user_id: userId,
        stripe_session_id: session.id,
        stripe_customer_id: session.customer || null,
        tier: tier,
        billing_cycle: billing,
        byo_key: byoKey,
        payment_method: session.payment_method_types ? session.payment_method_types[0] : 'card',
        amount_paid: session.amount_total,
        currency: session.currency || 'usd',
        status: 'active',
        starts_at: now.toISOString(),
        expires_at: expiresAt.toISOString(),
      });

      if (insErr) {
        // 唯一索引冲突 = Stripe 重投同一 session（已处理过）→ 幂等成功，返回 200
        var isDup = insErr.code === '23505' || /duplicate key|unique/i.test(insErr.message || '');
        if (isDup) {
          return res.status(200).json({ received: true, idempotent: true });
        }
        // 真实失败（RLS/瞬时故障/约束）→ 告警 + 500 让 Stripe 重试，绝不静默吞掉
        console.error('[stripe-webhook] subscription insert FAILED — 用户已付款未开通', {
          userId, tier, sessionId: session.id, err: insErr.message, code: insErr.code,
        });
        try {
          Sentry.captureException(new Error('stripe subscription insert failed: ' + insErr.message), {
            level: 'error',
            tags: { route: '/api/stripe/webhook', userPaid: 'true' },
            extra: { userId, tier, sessionId: session.id, code: insErr.code },
          });
        } catch (e) { /* Sentry 挂了不影响返回 500 */ }
        return res.status(500).json({ error: 'subscription activation failed, will retry' });
      }
    }
  }

  res.status(200).json({ received: true });
}
