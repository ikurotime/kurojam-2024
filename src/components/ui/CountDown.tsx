'use client'

import { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

function updateCountdown() {
  const now = new Date()
  const release = new Date(Date.UTC(2024, 7, 5, 21, 0, 0))
  const timeRemaining = Number(release) - Number(now)

  const dayDiff = ~~(timeRemaining / 86_400_000)
  const hourDiff = ~~((timeRemaining % 86_400_000) / 3_600_000)
  const minDiff = ~~((timeRemaining % 3_600_000) / 60_000)
  const secDiff = ~~((timeRemaining % 60_000) / 1_000)

  if (timeRemaining < 0) return 'Empezamos! 🚀'

  const parts = [
    dayDiff > 0 ? `${dayDiff}d` : '',
    hourDiff > 0 ? `${hourDiff}h` : '',
    minDiff > 0 ? `${minDiff}m` : '',
    `${secDiff}s`
  ]

  return parts.filter(Boolean).join(' ')
}

function Countdown() {
  const [countdown, setCountdown] = useState(() => updateCountdown())

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(updateCountdown())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <p className='font-black text-4xl md:text-6xl'>{countdown}</p>
}

export default dynamic(() => Promise.resolve(Countdown), {
  ssr: false,
  loading: () => (
    <p className='font-black text-4xl md:text-6xl'>{updateCountdown()}</p>
  )
})
