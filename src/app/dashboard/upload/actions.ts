'use server'

import { PrismaClient } from '@prisma/client'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
export async function submitProject() {
  const supabase = createClient()

  const { data } = await supabase.auth.getUser()
  if (data === null) {
    redirect('/login')
  }
  const prisma = new PrismaClient()
  const { id } = await prisma.project.create({
    data: {
      name: 'name',
      description: 'description',
      github_url: 'github_url',
      site_url: 'site_url',
      user_id: data?.user?.id!
    }
  })

  if (!id) {
    console.log(data.user)
    redirect('/error')
  }
  revalidatePath('/dashboard')
  redirect('/dashboard')
}
