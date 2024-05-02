import './globals.css'

import Footer from '@/components/ui/Footer'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex flex-col'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
