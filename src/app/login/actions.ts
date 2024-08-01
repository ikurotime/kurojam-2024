'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function login() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: process.env.BACKEND_URL + '/auth/callback'
    }
  })

  if (error) {
    redirect('/error')
  }

  redirect(data.url)
}
