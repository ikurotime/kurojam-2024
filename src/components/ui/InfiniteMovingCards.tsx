'use client'

import { InfiniteMovingCards } from '../ui/infinite-moving-cards'

export function MovingCards() {
  return (
    <div className='h-[40rem] rounded-md flex gap-8 flex-col antialiased   items-center justify-center relative overflow-hidden'>
      <div className='flex flex-col pt-24 gap-4 font-black items-center text-center'>
        <div className='absolute -top-10'>
          <svg
            className='relative -left-20 top-10 -rotate-12 scale-75'
            width='114'
            height='109'
            viewBox='0 0 114 109'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='59.5' cy='54.5' r='54.5' fill='#037656' />
            <rect width='60' height='109' fill='#037656' />
            <path
              d='M15 40C15 33.3726 20.3726 28 27 28H45V58H15V40Z'
              fill='#FFCCDE'
            />
            <path
              d='M31 58H45V77C45 81.4183 41.4183 85 37 85H31V58Z'
              fill='#FFCCDE'
            />
            <path
              d='M73 58H87V77C87 81.4183 83.4183 85 79 85H73V58Z'
              fill='#FFCCDE'
            />
            <path
              d='M56 40C56 33.3726 61.3726 28 68 28H87V58H56V40Z'
              fill='#FFCCDE'
            />
          </svg>

          <span className='text-6xl'>Escucha lo que dicen los devs</span>
        </div>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
      />
      <div className='hidden bg-[#007656]'></div>
      <div className='hidden bg-[#FFCCDE]'></div>
      <div className='hidden bg-[#D0D5FF]'></div>
      <div className='hidden bg-[#4D4E58]'></div>
      <div className='hidden bg-[#5838AF]'></div>
    </div>
  )
}
const colors = ['#007656', '#D0D5FF', '#FFCCDE', '#5838AF', '#4D4E58']

const testimonials = [
  {
    quote:
      'Fué otro ambito que pudimos añadir al proyecto me sentí super comoda de poder trabajar en lo que a mi me gustaba y poder retocar las cosas a mi gusto en cuanto a diseño y ilustraciones, es decir, me encantó que la KuroJam fuese tan libre para permitir artistas de diferentes tipos, y sobretodo lo cómoda que estuve y la de implementaciones que se pudieron hacer',
    name: 'Alma',
    title: 'PatoClick',
    color: '#007656',
    text: 'text-white'
  },
  {
    quote:
      'Tuve la oportunidad de participar en la KuroJam dentro del equipo de Duckurophy. La experiencia ha sido realmente gratificante. He aprendido acerca de cómo utilizar la API de OpenIA para generar las imágenes. El feedback de los jueces ha sido súper constructivo y Kuro ha sido un host excepcional.',
    name: 'Nadia',
    title: 'Pato IA',
    color: '#D0D5FF',
    text: 'text-black'
  },
  {
    quote:
      'Participé en la primera KuroJam con mi compañero DKAN con un idle clicker que resultó ser ganador, y tuvimos suerte porque el resto de proyectos que se presentaron fueron increíbles. Bastante satisfecho con el evento y tengo ganas de la siguiente edición!!',
    name: 'Unai',
    title: 'PatoClick',
    color: '#FFCCDE',
    text: 'text-black'
  },
  {
    quote:
      'A mi la kuro jam me dejo con trastorno de estrés postraumático, tuve que dejarlo a la mitad, hay un mensaje en el discord que lo respalda 5/5',
    name: 'Alexeira',
    title: '',
    color: '#5838AF',
    text: 'text-white'
  }
]
