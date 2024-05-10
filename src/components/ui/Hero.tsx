'use client'

import Button from './Button'
import CountDown from './CountDown'
import React from 'react'
import { SparklesCore } from '../ui/sparkles'

export function Hero() {
  return (
    <div className='h-[40rem] gap-8 w-full  flex flex-col items-center justify-center overflow-hidden rounded-md'>
      <h1 className='text-4xl lg:text-7xl font-bold text-center text-white relative z-20'>
        Crea proyectos increíbles
      </h1>
      <div className='max-w-prose text-center'>
        La Hackathon donde puedes demostrar tus habilidades y ganar premios.
      </div>
      <CountDown />
      <Button label='Registrarse' />
    </div>
  )
}
