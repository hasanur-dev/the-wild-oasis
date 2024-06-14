import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://zghkpfeojnvgbpjwpldm.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnaGtwZmVvam52Z2JwandwbGRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczOTA1ODUsImV4cCI6MjAyMjk2NjU4NX0.X-YDOlDuroRbYisM36f_GztJL-Q7dOp0TZv9iHySNig'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
