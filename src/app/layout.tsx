import type { Metadata } from 'next'
import './globals.css'
import NavBar from './NavBar'
import Footer from './Footer'

export const metadata: Metadata = {
  title: 'Stream Scout',
  description:
    'Instantly find where to stream, buy, or rent movies and TV shows.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-home-design text-center text-white">
        <div className="flex h-full flex-col justify-between">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
