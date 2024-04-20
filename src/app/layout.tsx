import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stream Scout',
  description: 'Instantly find where to stream, buy, or rent movies and TV shows.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="text-white">{children}</body>
    </html>
  )
}
