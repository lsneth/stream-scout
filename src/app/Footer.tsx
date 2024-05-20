import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-5 border-t-2 border-accent2 bg-black p-5 sm:flex-row sm:justify-center sm:gap-8">
      <a
        target="_blank"
        href="https://developer.themoviedb.org/reference/intro/getting-started"
      >
        <Image src="/tmdb.svg" alt="tmdb logo" height={24} width={96} />
      </a>
      <a target="_blank" href="https://www.justwatch.com/">
        <Image
          src="/just-watch.webp"
          alt="just watch logo"
          height={24}
          width={96}
        />
      </a>
      <Link href="/privacy-policy" className="text-xs">
        Privacy Policy
      </Link>
      <a href="https://www.lucasnethercott.com" className="text-xs">
        ©2024 Lucas Nethercott
      </a>
    </div>
  )
}
