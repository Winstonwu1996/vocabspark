-- Supabase 2026-10-30: new public objects are no longer auto-exposed to the Data API.
-- Opt in explicitly so new tables / sequences created by postgres start closed (supabase_admin's defaults are untouched).
-- Existing objects keep their grants.
-- Applied to prod 2026-11-04 (PT) via MCP apply_migration; rollback + check query: docs/INFRA.md §12 item 9.
-- The last statement is Supabase's recommended one but a no-op: per-schema default privileges can't remove the
-- built-in EXECUTE-to-PUBLIC on functions (PostgreSQL docs, ALTER DEFAULT PRIVILEGES). New functions must revoke it themselves.
alter default privileges for role postgres in schema public
  revoke all on tables from anon, authenticated, service_role;

alter default privileges for role postgres in schema public
  revoke all on sequences from anon, authenticated, service_role;

alter default privileges for role postgres in schema public
  revoke all on functions from anon, authenticated, service_role;

alter default privileges for role postgres in schema public
  revoke execute on functions from public;
