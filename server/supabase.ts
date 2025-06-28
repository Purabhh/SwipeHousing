import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://maojffjjcaznxltfmsms.supabase.co';
const supabaseKey = process.env.DATABASE_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);
