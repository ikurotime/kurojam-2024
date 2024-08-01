import './globals.css'

import Footer from '@/components/ui/Footer'
import Head from 'next/head'
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
const keywords = [
  'hackathon',
  'desarrollo',
  'comunidad',
  'kurojam',
  'desarrollo web',
  'desarrollo de software',
  'hackathones de programación',
  'hackathones de desarrollo'
]
export const metadata: Metadata = {
  title: 'KuroJam',
  description: 'Una Hackathon de desarrollo para la comunidad',
  keywords,
  openGraph: {
    type: 'website',
    url: 'https://kurojam.com',
    title: 'KuroJam',
    description: 'Una Hackathon de desarrollo para la comunidad',
    images: [
      {
        url: 'https://kurojam.com/og.png',
        width: 800,
        height: 600,
        alt: 'KuroJam'
      }
    ],
    siteName: 'KuroJam'
  },
  twitter: {
    creator: '@ikurotime',
    images: [
      {
        url: 'https://kurojam.com/og.png',
        width: 800,
        height: 600,
        alt: 'KuroJam'
      }
    ]
  }
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
