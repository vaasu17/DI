import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || '';

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseApiKey);

export default supabase;
