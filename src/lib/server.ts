import { createServerComponentClient } from "@supabase/supabase-js";

export const supabaseServer = createServerComponentClient({
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});
