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
    <div className='h-16 border-b border-primary-bg flex px-8 z-30  items-center sticky inset-x-0 top-0 transition-all'>
      <div className='-z-1 absolute inset-0 transition-all border-b  backdrop-blur-lg border-white/10 bg-primary-bg/75'></div>
      <div className='flex justify-between w-full max-w-screen-xl m-auto z-30'>
        <div className='flex gap-16 items-center text-3xl '>
          <Link href='/' className='font-bold text-[#F64E25]'>
            KJ
          </Link>
          <div className='flex gap-4 max-md:hidden text-base font-bold'>
            <Link href='#como-participar'>Cómo participar</Link>
            {/* <Link href='/reglas'>Reglas</Link> */}
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
            <>
              {/* <Link
                href={user ? '/dashboard' : '/login'}
                className='rounded bg-[#F64E25] text-white px-4 py-2 text-xl'
              >
                {user ? 'Mi proyecto' : 'Inscribirse'}
              </Link> */}
              <Link
                href={'https://discord.gg/3sWGgBzXQd'}
                target='_blank'
                className='rounded bg-[#5965F1] text-white px-4 py-2 text-xl flex gap-2 items-center'
              >
                <svg
                  viewBox='0 0 256 199'
                  width='24'
                  height='24'
                  xmlns='http://www.w3.org/2000/svg'
                  preserveAspectRatio='xMidYMid'
                >
                  <path
                    d='M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z'
                    fill='  white'
                  />
                </svg>
                comunidad
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
