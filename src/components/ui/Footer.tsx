import Link from 'next/link'

export default function Footer() {
  return (
    <div className='mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative z-10 overflow-hidden border border-b-0 border-primary-bg bg-zinc-950 pb-60 pt-16 backdrop-blur-lg md:rounded-t-2xl'>
      <div className='flex w-full h-full justify-between'>
        <span className='text-3xl font-bold'>KuroJam</span>
        <div className='flex flex-col gap-4'>
          <Link href='/'>Ediciones anteriores</Link>
          <Link href='/'>Cómo participar</Link>
          <Link href='/'>Reglas</Link>
          <Link href='/'>Premios</Link>
        </div>
        <div className='flex flex-col gap-4'>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
        <div className='flex flex-col gap-4'>
          <Link href='/'>Patrocinadores</Link>
        </div>
      </div>
      <div className='flex w-full justify-between'>
        <span>KuroJam | 2024</span>
      </div>
    </div>
  )
}
