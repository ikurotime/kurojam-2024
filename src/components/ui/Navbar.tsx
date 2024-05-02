import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='h-16 justify-between border-b border-primary-bg flex px-8 items-center '>
      <span>KuroJam</span>
      <div className='flex gap-5 max-md:hidden'>
        <Link href='/'>Ediciones anteriores</Link>
        <Link href='/'>Cómo participar</Link>
        <Link href='/'>Reglas</Link>
        <Link href='/'>Premios</Link>
        <Link href='/'>Patrocinadores</Link>
      </div>
    </div>
  )
}
