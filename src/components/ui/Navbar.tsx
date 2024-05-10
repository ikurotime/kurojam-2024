import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='h-16 border-b border-primary-bg flex px-8 z-30 items-center sticky inset-x-0 top-0 transition-all'>
      <div className='-z-1 absolute inset-0 transition-all border-b border-black/10 bg-white/75 backdrop-blur-lg dark:border-white/10 dark:bg-black/75'></div>
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
          <Link href='/sign-up'>Log in</Link>
          <Link
            href='/sign-in'
            className='rounded-full bg-white text-black px-3 py-1'
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
