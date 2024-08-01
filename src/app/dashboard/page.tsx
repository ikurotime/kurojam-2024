import { PrismaClient } from '@prisma/client'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export default async function PrivatePage() {
  const supabase = createClient()
  const prisma = new PrismaClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  const projects = await prisma.project.findMany({
    where: {
      user_id: data.user.id
    }
  })

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
          href='/dashboard/upload'
          className='px-4 py-2 bg-white rounded-md text-black flex items-center font-normal text-xl'
        >
          Subir proyecto
        </a>
      </div>
      {projects ? (
        <div>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <div className='flex flex-col gap-4 border p-5'>
                  <span className='text-3xl'>{project.name}</span>
                  <span className='text-2xl'>{project.description}</span>
                  <div className='flex gap-4'>
                    <a
                      href={project.github_url}
                      target='_blank'
                      className='px-2 py-1  rounded bg-slate-700'
                    >
                      Ver en Github
                    </a>
                    <a
                      href={project.site_url}
                      target='_blank'
                      className='bg-white text-black px-2 py-1 rounded'
                    >
                      Ver proyecto
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <span className='text-3xl m-auto'>No hay proyectos subidos</span>
      )}
    </div>
  )
}
