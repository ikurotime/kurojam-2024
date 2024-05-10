'use client'

import React, { useEffect, useState } from 'react'

import { InfiniteMovingCards } from '../ui/infinite-moving-cards'

export function MovingCards() {
  return (
    <div className='h-[40rem] rounded-md flex gap-8 flex-col antialiased   items-center justify-center relative overflow-hidden'>
      <div className='flex flex-col gap-4 font-black items-center text-center'>
        <span className='text-5xl'>Escucha lo que dicen los devs</span>
        <span className='text-xl '>Opiniones de la KuroJam de 2023</span>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
      />
    </div>
  )
}

const testimonials = [
  {
    quote:
      'Fué otro ambito que pudimos añadir al proyecto me sentí super comoda de poder trabajar en lo que a mi me gustaba y poder retocar las cosas a mi gusto en cuanto a diseño y ilustraciones, es decir, me encantó que la KuroJam fuese tan libre para permitir artistas de diferentes tipos, y sobretodo lo cómoda que estuve y la de implementaciones que se pudieron hacer',
    name: 'Alma',
    title: 'PatoClick'
  },
  {
    quote:
      'Tuve la oportunidad de participar en la KuroJam dentro del equipo de Duckurophy. La experiencia ha sido realmente gratificante. He aprendido acerca de cómo utilizar la API de OpenIA para generar las imágenes. El feedback de los jueces ha sido súper constructivo y Kuro ha sido un host excepcional.',
    name: 'Nadia',
    title: 'Pato IA'
  },
  {
    quote:
      'Participé en la primera KuroJam con mi compañero DKAN con un idle clicker que resultó ser ganador, y tuvimos suerte porque el resto de proyectos que se presentaron fueron increíbles. Bastante satisfecho con el evento y tengo ganas de la siguiente edición!!',
    name: 'Unai',
    title: 'PatoClick'
  },
  {
    quote:
      'A mi la kuro jam me dejo con trastorno de estrés postraumático, tuve que dejarlo a la mitad, hay un mensaje en el discord que lo respalda 5/5',
    name: 'Alexeira',
    title: ''
  }
]
