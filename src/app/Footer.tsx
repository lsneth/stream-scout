import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="flex min-h-12 justify-between bg-black p-4">
      <Link
        target="_blank"
        href="https://developer.themoviedb.org/reference/intro/getting-started"
        className="flex align-middle"
      >
        <Image
          src="/tmdb.svg"
          alt="tmdb logo"
          height={24}
          width={96}
          className="align-middle"
        />
      </Link>
      <p className="align-middle text-xs">©2024 Lucas Nethercott</p>
    </div>
  )
}
