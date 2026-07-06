const SUPABASE_URL = "PASTE_YOUR_PROJECT_URL_HERE";
const SUPABASE_ANON_KEY = "PASTE_YOUR_ANON_PUBLIC_KEY_HERE";

const db = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);