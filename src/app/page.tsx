import { BentoGridDemo } from '@/components/ui/BentoGrid'
import BottomCTA from '@/components/ui/BottomCTA'
import FeatureCards from '@/components/ui/FeatureCards'
import Footer from '@/components/ui/Footer'
import { Hero } from '@/components/ui/Hero'
import HowToEnter from '@/components/ui/HowToEnter'
import { MovingCards } from '@/components/ui/InfiniteMovingCards'
import Navbar from '@/components/ui/Navbar'
import { ParallaxSection } from '@/components/ui/ParallaxSection'

export default function Home() {
  return (
    <>
      <Hero />
      <MovingCards />
      <ParallaxSection />
      <HowToEnter />
      <BottomCTA />
    </>
  )
}
