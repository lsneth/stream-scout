import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavBar(): JSX.Element {
  return (
    <nav className="flex min-h-12 justify-between border-b-2 border-accent2 bg-black p-2">
      <Link href="/">
        <Image src="/logo.png" alt="stream scout logo" height={36} width={36} />
      </Link>
    </nav>
  )
}
