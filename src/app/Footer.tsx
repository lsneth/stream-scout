import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="flex min-h-12 justify-between bg-black p-4">
      <div className="flex gap-10">
        <a
          target="_blank"
          href="https://developer.themoviedb.org/reference/intro/getting-started"
          className="flex items-center"
        >
          <Image src="/tmdb.svg" alt="tmdb logo" height={24} width={96} />
        </a>
        <a
          target="_blank"
          href="https://www.justwatch.com/"
          className="flex items-center"
        >
          <Image
            src="/just-watch.webp"
            alt="just watch logo"
            height={24}
            width={96}
          />
        </a>
      </div>
      <div className="flex gap-10">
        <Link href="/privacy-policy" className="text-xs">
          Privacy Policy
        </Link>
        <a href="https://www.lucasnethercott.com" className="text-xs">
          ©2024 Lucas Nethercott
        </a>
      </div>
    </div>
  )
}
