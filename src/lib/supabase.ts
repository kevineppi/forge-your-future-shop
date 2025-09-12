import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactInquiry = {
  id?: string
  name: string
  email: string
  project_type: string
  timeline: string
  message: string
  status: 'new' | 'in_progress' | 'completed' | 'archived'
  created_at?: string
  updated_at?: string
}