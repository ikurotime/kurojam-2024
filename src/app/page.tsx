import { BentoGridDemo } from '@/components/ui/BentoGrid'
import BottomCTA from '@/components/ui/BottomCTA'
import FeatureCards from '@/components/ui/FeatureCards'
import Footer from '@/components/ui/Footer'
import { Hero } from '@/components/ui/Hero'
import { MovingCards } from '@/components/ui/InfiniteMovingCards'
import Navbar from '@/components/ui/Navbar'

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <BentoGridDemo />
      <MovingCards />
      <BottomCTA />
    </>
  )
}
