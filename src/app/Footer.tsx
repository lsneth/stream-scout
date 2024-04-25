import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="flex min-h-12 justify-between bg-black p-4">
      <Link
        target="_blank"
        href="https://developer.themoviedb.org/reference/intro/getting-started"
        className="flex items-center"
      >
        <Image src="/tmdb.svg" alt="tmdb logo" height={24} width={96} />
      </Link>
      <a href="https://www.lucasnethercott.com" className="text-xs">
        ©2024 Lucas Nethercott
      </a>
    </div>
  )
}
