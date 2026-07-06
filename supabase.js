const SUPABASE_URL = "https://tieekcelcathtuluwcfc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpZWVrY2VsY2F0aHR1bHV3Y2ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMyOTk3MzAsImV4cCI6MjA5ODg3NTczMH0.qAwf6TtqwLLMD2pnLDIwIYqwoHM2rF31ehqa5TDqnJI";

const db = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);