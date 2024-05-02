import { BentoGridDemo } from '@/components/ui/BentoGrid'
import BottomCTA from '@/components/ui/BottomCTA'
import { Hero } from '@/components/ui/Hero'
import { MovingCards } from '@/components/ui/InfiniteMovingCards'
import Navbar from '@/components/ui/Navbar'

export default function Home() {
  return (
    <main className='flex flex-col'>
      <Navbar />
      <Hero />
      <BentoGridDemo />
      <MovingCards />
      <BottomCTA />
    </main>
  )
}
