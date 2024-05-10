import './globals.css'

import Footer from '@/components/ui/Footer'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <main className='flex flex-col relative antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05]  '>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
