import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

var stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// 需要 Service Role Key 来绕过 RLS 写入
var supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'
);

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

  var event;
  try {
    if (process.env.STRIPE_WEBHOOK_SECRET) {
      event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } else {
      event = JSON.parse(rawBody.toString());
    }
  } catch (e) {
    console.error('Webhook signature verification failed:', e.message);
    return res.status(400).json({ error: 'Invalid signature' });
  }

  if (event.type === 'checkout.session.completed') {
    var session = event.data.object;
    var meta = session.metadata || {};
    var userId = meta.userId;
    var tier = meta.tier;
    var billing = meta.billing;
    var byoKey = meta.byoKey === 'true';

    if (userId && tier) {
      // 计算到期时间
      var now = new Date();
      var expiresAt = new Date(now);
      if (billing === 'yearly') {
        expiresAt.setDate(expiresAt.getDate() + 365);
      } else {
        expiresAt.setDate(expiresAt.getDate() + 30);
      }

      try {
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
        console.log('Subscription created for user:', userId, tier, billing);
      } catch (e) {
        console.error('Failed to save subscription:', e.message);
      }
    }
  }

  res.status(200).json({ received: true });
}
