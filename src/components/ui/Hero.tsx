'use client'

import React from 'react'
import { SparklesCore } from '../ui/sparkles'

export function Hero() {
  return (
    <div className='h-[40rem] gap-8 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md'>
      <h1 className='text-7xl lg:text-9xl font-bold text-center text-white relative z-20'>
        KuroJam
      </h1>
      <div className='max-w-prose text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <button className='px-4 py-2 rounded-md bg-white text-black'>
        Registrarte
      </button>
      <div className='w-[40rem] h-40 relative'>
        {/* Gradients */}
        <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
        <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
        <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
        <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

        {/* Core component */}
        <SparklesCore
          background='transparent'
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className='w-full h-full'
          particleColor='#FFFFFF'
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className='absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'></div>
      </div>
    </div>
  )
}
