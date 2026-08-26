-- Run this in the Supabase SQL Editor to set up the creator sign-ups table

CREATE TABLE IF NOT EXISTS creator_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  email text NOT NULL,
  name text,
  city text,
  pet text,
  social text,
  about text
);

ALTER TABLE creator_signups ENABLE ROW LEVEL SECURITY;

-- Anonymous site visitors can only submit their data
CREATE POLICY "Allow anonymous inserts" ON creator_signups
  FOR INSERT TO anon
  WITH CHECK (true);

-- Only authenticated users (you) can read the list
CREATE POLICY "Allow authenticated selects" ON creator_signups
  FOR SELECT TO authenticated
  USING (true);
