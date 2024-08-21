import Input from '@/components/ui/Input'
import { PrismaClient } from '@prisma/client'
import { createClient } from '@/utils/supabase/server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function PrivatePage() {
  const supabase = createClient()
  const headersList = headers()
  const fullUrl = headersList.get('referer') || ''
  const id = fullUrl.split('/').pop()
  console.log({ fullUrl, id })
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  const prisma = new PrismaClient()
  const project = await prisma.project.findUnique({
    where: {
      id: id
    }
  })
  console.log(project)

  // TODO: List all the projects assigned to the user
  // TODO: Upload project with form to Project Table

  return (
    <div className='flex gap-4 flex-col rounded-md p-14 my-12  w-full max-w-5xl m-auto min-h-dvh'>
      <div className='flex gap-12 bg-zinc-950 rounded p-20'>
        <form className='flex flex-col w-1/2 max-w-xl gap-8 justify-between  mx-auto'>
          <span className='text-6xl'>Edita tu proyecto</span>
          <div className='flex flex-col gap-4'>
            <Input
              label='Nombre'
              name='name'
              type='text'
              defaultValue={project?.name}
            />
            <Input
              label='Descripcion'
              name='description'
              type='text'
              defaultValue={project?.description}
            />
            <Input
              label='URL de Github'
              name='github_url'
              type='text'
              defaultValue={project?.github_url}
            />
            <Input
              label='URL de la web'
              name='site_url'
              type='text'
              defaultValue={project?.site_url}
            />
          </div>
          <button
            //formAction={submitProject}
            className='px-4 py-2 bg-orange-500 rounded-md text-white flex items-center font-normal text-xl'
          >
            Guardar cambios
          </button>
        </form>
        <div className='flex flex-col w-1/2 gap-8'>
          <span className='text-5xl'>¿Ahora qué?</span>
          <ul className='text-2xl list-disc'>
            <li>Una vez enviado tu proyecto podrás modificarlo</li>
            <li>Podrás ver el estado en el que se encuentra tu proyecto</li>
            <li>Solo puedes enviar un proyecto por grupo</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
