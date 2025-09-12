import { createClient } from '@supabase/supabase-js'

// Debug: Check what environment variables are available
console.log('Environment variables:', {
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
  allEnvVars: import.meta.env
})

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error('VITE_SUPABASE_URL environment variable is missing. Please ensure Supabase integration is properly configured.')
}

if (!supabaseAnonKey) {
  throw new Error('VITE_SUPABASE_ANON_KEY environment variable is missing. Please ensure Supabase integration is properly configured.')
}

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