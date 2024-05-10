import Card from './Card'

const features = [
  {
    title: '¿Qué es?',
    description:
      'KuroJam es un evento de desarrollo, donde los participantes crearán un proyecto basado en una temática elegida por la comunidad.'
  },
  {
    title: '¿Cuándo es?',
    description: 'Se llevará a cabo del 1 al 14 de junio del 2024.'
  },
  {
    title: '¿Habrá premios? ',
    description:
      'Los mejores proyectos de la KuroJam serán premiados según categorias'
  },
  {
    title: '¿Tengo que hacer una web? ',
    description:
      'Puedes entregarnos tu proyecto en cualquier formato, ya sea una web, una app, un juego, etc. Mientras entre dentro de la temática, ¡todo vale!'
  }
]
export default function FeatureCards() {
  return (
    <div className='flex flex-col md:flex-row md:gap-8 w-full justify-center p-5'>
      {features.map((feature, index) => (
        <Card key={index} feature={feature} />
      ))}
    </div>
  )
}
