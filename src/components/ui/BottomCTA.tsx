import Button from './Button'

export default function BottomCTA() {
  return (
    <div className='min-h-dvh flex flex-col gap-8 justify-center items-center'>
      <div className='flex flex-col text-4xl md:text-7xl font-bold'>
        <span>Practica tus habilidades</span>
        <span>Crea proyectos geniales</span>
      </div>
      <div className='flex gap-4'>
        <Button label='Apuntarse' />
        <Button label='Más información' />
      </div>
    </div>
  )
}
