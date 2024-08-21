'use server'

import { PrismaClient } from '@prisma/client'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
export async function submitProject(formData: FormData) {
  const supabase = createClient()

  const name = formData.get('name') as string
  const description = formData.get('description') as string
  const site_url = formData.get('site_url') as string
  const github_url = formData.get('github_url') as string
  const { data } = await supabase.auth.getUser()
  if (data === null) {
    redirect('/login')
  }
  const prisma = new PrismaClient()
  const { id } = await prisma.project.create({
    data: {
      name,
      description,
      github_url,
      site_url,
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
