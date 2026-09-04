const SUPABASE_URL = "https://qhwjtdsbkjfdgwevemiv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFod2p0ZHNia2pmZGd3ZXZlbWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1MTM2ODQsImV4cCI6MjEwNDA4OTY4NH0.BauF1Ef7dDUu3JRFSwl4WX3-8AYnIAcEC0nk58ryJTo";

const db = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
