import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://etsnyvijvhklcwfnczkq.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0c255dmlqdmhrbGN3Zm5jemtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMjI1NTAsImV4cCI6MjA0NDg5ODU1MH0.q9VtiJ4cljtvCfQwSIHkiX6kssmwKzRizRxYz0aN-eI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
