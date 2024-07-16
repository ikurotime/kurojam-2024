'use client'

import { useEffect, useState } from 'react'

export default function CountDown() {
  // coundown date in utc
  const countdownDate = new Date('2024-08-04T00:00:00').getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [countdownDate])
  return (
    <p className='text-4xl md:text-6xl font-black'>
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </p>
  )
}
