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
      <body className="flex h-full flex-col bg-home-design bg-cover text-center text-white">
        <NavBar />
        <div className="grow bg-gradient-to-t from-black">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
