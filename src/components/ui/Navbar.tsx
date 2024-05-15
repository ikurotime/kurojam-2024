import { Dropdown } from './Dropdown'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'

export default async function Navbar() {
  const supabase = createClient()
  let user = null
  const { data, error } = await supabase.auth.getUser()
  if (!error || data?.user) {
    user = data.user
  }
  console.log(user)
  return (
    <div className='h-16 border-b border-primary-bg flex px-8 z-30 text-white items-center sticky inset-x-0 top-0 transition-all'>
      <div className='-z-1 absolute inset-0 transition-all border-b  backdrop-blur-lg border-white/10 bg-black/75'></div>
      <div className='flex justify-between w-full max-w-screen-xl m-auto z-30'>
        <div className='flex gap-16 items-center'>
          <Link href='/' className='font-bold'>
            KuroJam
          </Link>
          <div className='flex gap-4 max-md:hidden text-sm font-bold'>
            <Link href='/ediciones-anteriores'>Ediciones anteriores</Link>
            <Link href='/como-participar'>Cómo participar</Link>
            <Link href='/reglas'>Reglas</Link>
            <Link href='/premios'>Premios</Link>
            <Link href='/patrocinadores'>Patrocinadores</Link>
          </div>
        </div>
        <div className='flex gap-4 text-sm items-center'>
          {user ? (
            <Dropdown>
              <Image
                height={42}
                width={42}
                src={user.user_metadata.avatar_url}
                alt=''
                className='rounded-full'
              />
            </Dropdown>
          ) : (
            <Link
              href={user ? '/dashboard' : '/login'}
              className='rounded-full bg-white text-black px-3 py-1'
            >
              {user ? 'Dashboard' : 'Registrarse'}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
