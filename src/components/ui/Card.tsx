'use client'

import { Glow, GlowCapture } from '@codaworks/react-glow'

type Props = {
  feature: {
    title: string
    description: string
  }
}
export default function Card({ feature }: Props) {
  return (
    <GlowCapture>
      <Glow>
        <div className='flex flex-col gap-4 h-80 my-20 box-border p-8 w-80 rounded-md border border-primary-bg bg-neutral-900 glow:border-white  glow:bg-white/10'>
          <span className='text-2xl font-bold '>{feature.title}</span>
          <span className='text-base'>{feature.description}</span>
        </div>
      </Glow>
    </GlowCapture>
  )
}
