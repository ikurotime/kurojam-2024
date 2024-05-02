import Link from 'next/link'

export default function Footer() {
  return (
    <div className='flex flex-col justify-between min-h-[40vh]  border-t border-primary-bg p-8'>
      <div className='flex w-full h-full justify-between'>
        <span className='text-3xl font-bold'>KuroJam</span>
        <div className='flex flex-col gap-4'>
          <Link href='/'>Ediciones anteriores</Link>
          <Link href='/'>Cómo participar</Link>
          <Link href='/'>Reglas</Link>
          <Link href='/'>Premios</Link>
          <Link href='/'>Patrocinadores</Link>
        </div>
      </div>
      <div className='flex w-full justify-between'>
        <span>KuroJam | 2024</span>
        <div className='flex gap-4'>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  )
}
