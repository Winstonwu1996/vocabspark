-- 假数据（全部虚构）：两个用户 alice / bob，各有进度与订阅；再模拟一次 cron 快照。
insert into auth.users (id, email) values
  ('00000000-0000-4000-8000-00000000a11c', 'alice@example.test'),
  ('00000000-0000-4000-8000-000000000b0b', 'bob@example.test');

insert into public.user_progress (user_id, progress_data) values
  ('00000000-0000-4000-8000-00000000a11c',
   '{"wordStatusMap":{"apple":"mastered","pear":"unlearned"},"reviewWordData":{"pear":{},"plum":{}},"session":{"wordList":["apple"]}}'),
  ('00000000-0000-4000-8000-000000000b0b',
   '{"wordStatusMap":{"cat":"learning"},"reviewWordData":{"cat":{}}}');

insert into public.user_subscriptions (user_id, stripe_session_id, tier, billing_cycle, amount_paid, status, expires_at) values
  ('00000000-0000-4000-8000-00000000a11c', 'cs_test_alice', 'basic', 'monthly',  2000, 'active', now() + interval '30 days'),
  ('00000000-0000-4000-8000-000000000b0b', 'cs_test_bob',   'pro',   'yearly',  48000, 'active', now() + interval '365 days');

set role postgres;
select public.vocab_integrity_snapshot();
reset role;
