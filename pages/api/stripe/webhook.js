import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

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

      await supabaseAdmin.from('user_subscriptions').insert({
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
    }
  }

  res.status(200).json({ received: true });
}
