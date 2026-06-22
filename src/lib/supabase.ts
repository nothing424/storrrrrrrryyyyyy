import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Don't throw at import/build time when env vars aren't set yet — Vercel
  // builds the app before env vars are always available in every context,
  // and createClient() throws immediately on an empty URL. Fall back to a
  // harmless placeholder so the build succeeds; real Supabase calls will
  // simply fail at runtime with a clear network error until env vars are set.
  console.warn(
    "[StoryGift] Supabase env vars are missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment."
  );
}

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key",
  {
    auth: {
      persistSession: false,
    },
  }
);
