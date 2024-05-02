import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='h-16 justify-between border-b border-primary-bg flex px-8 items-center '>
      <Link href='/' className='font-bold'>
        KuroJam
      </Link>
      <div className='flex gap-5 max-md:hidden'>
        <Link href='/'>Ediciones anteriores</Link>
        <Link href='/como-participar'>Cómo participar</Link>
        <Link href='/reglas'>Reglas</Link>
        <Link href='/premios'>Premios</Link>
        <Link href='/patrocinadores'>Patrocinadores</Link>
      </div>
    </div>
  )
}
