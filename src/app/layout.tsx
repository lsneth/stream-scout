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
    <html lang="en" className="m-0 h-full">
      <body className="bg-home-design m-0 h-full text-center text-white">
        <div className="m-h-full box-border flex h-full w-screen flex-col justify-between overflow-x-hidden overflow-y-hidden bg-gradient-to-t	from-black">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
