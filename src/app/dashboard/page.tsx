import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  // TODO: List all the projects assigned to the user
  // TODO: Upload project with form to Project Table

  return (
    <div className='flex gap-4 flex-col rounded-md p-14 my-12 bg-zinc-950 border-primary-bg w-full max-w-5xl m-auto min-h-dvh'>
      <div className='flex gap-8 justify-between w-full'>
        <div>
          <span className='text-2xl font-black'>Dashboard</span>
          <p>Hola {data.user.email}</p>
        </div>
        <a
          href=''
          className='px-4 py-2 bg-white rounded-md text-black flex items-center font-normal text-xl'
        >
          Subir proyecto
        </a>
      </div>
    </div>
  )
}
