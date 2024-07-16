'use client'

import Button from './Button'
import CountDown from './CountDown'
import Link from 'next/link'
import React from 'react'

export function Hero() {
  return (
    <div className='h-[40rem] gap-8 w-full  flex flex-col items-center justify-center overflow-hidden rounded-md'>
      <h1 className='text-5xl  lg:text-8xl font-bold text-center relative z-20 text-[#F64E25] cursor-default'>
        KuroJam
      </h1>
      <div className='flex flex-col text-7xl text-center cursor-default'>
        <span>
          Construye un <span className='text-[#FABF29]'>proyecto</span>
        </span>
        <span>
          Usa cualquier <span className='text-[#007656]'>tecnologia</span>
        </span>
        <span>
          Aprende y <span className='text-[#FFCCDE]'>diviertete</span>
        </span>
      </div>
      <CountDown />
      <div className='flex gap-3'>
        {/* <Button label='Inscribirse' /> */}
        <Link
          href='#como-participar'
          className='text-black bg-[#FFF6E8] py-2 px-4 rounded text-2xl'
        >
          Cómo participar
        </Link>
      </div>
    </div>
  )
}
