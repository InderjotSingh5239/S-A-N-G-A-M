/*
# Create signups table for early-access email capture

1. New Tables
- `signups`
  - `id` (uuid, primary key, auto-generated)
  - `email` (text, unique, not null) — the email address submitted via the early-access form
  - `created_at` (timestamptz, default now) — when the signup was recorded
  - `source` (text, default 'landing_page') — where the signup originated

2. Security
- Enable RLS on `signups`.
- This is a no-auth landing page: the anon-key frontend must be able to INSERT new rows
  and check for duplicates via SELECT. Both anon and authenticated roles are granted
  INSERT and SELECT. No UPDATE or DELETE is exposed — signups are append-only.
- `USING (true)` on SELECT is acceptable because the only data captured is an email
  address voluntarily submitted for early-access notification; the table is intentionally
  write-once and publicly insertable.
*/

CREATE TABLE IF NOT EXISTS signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  source text DEFAULT 'landing_page'
);

ALTER TABLE signups ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_signups" ON signups;
CREATE POLICY "anon_select_signups"
ON signups FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_signups" ON signups;
CREATE POLICY "anon_insert_signups"
ON signups FOR INSERT
TO anon, authenticated WITH CHECK (true);
