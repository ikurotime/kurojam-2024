import './globals.css'

import Footer from '@/components/ui/Footer'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import localFont from 'next/font/local'

//const inter = Inter({ subsets: ['latin'] })
const tanker = localFont({
  src: [
    {
      path: '../../public/fonts/Tanker-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--tanker'
})
const khand = localFont({
  src: [
    {
      path: '../../public/fonts/Khand-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Khand-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--khand'
})

const pilcrow = localFont({
  src: [
    {
      path: '../../public/fonts/PilcrowRounded-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/PilcrowRounded-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--pilcrow'
})
export const metadata: Metadata = {
  title: 'KuroJam',
  description: 'The hackathon for the community, by the community'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={` ${tanker.variable} ${pilcrow.variable} font-tanker`}>
        <main className='flex flex-col relative antialiased text-primary-text bg-primary-bg  '>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
