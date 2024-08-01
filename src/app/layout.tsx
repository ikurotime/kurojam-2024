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
export const metadata: Metadata = {
  title: 'KuroJam',
  description: 'Una Hackathon de desarrollo para la comunidad'
}
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
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Head>
        <link rel='canonical' href='https://kurojam.com' />

        <meta property='keywords' content={keywords.join(', ')} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={'https://kurojam.com'} />
        <meta property='og:title' content={metadata.title as string} />
        <meta
          property='og:description'
          content={metadata.description as string}
        />
        <meta property='og:image' content={'https://kurojam.com/og.png'} />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={'https://kurojam.com'} />
        <meta property='twitter:title' content={metadata.title as string} />
        <meta
          property='twitter:description'
          content={metadata.description as string}
        />
        <meta property='twitter:image' content={'https://kurojam.com/og.png'} />
      </Head>
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
