import Image from 'next/image'
import React from 'react'

export default function Poster({
  title = '',
  poster_path = '',
}: {
  title?: string
  poster_path: string
  fullWidth?: boolean
}): JSX.Element {
  return (
    <Image
      src={
        !!poster_path
          ? `https://image.tmdb.org/t/p/w342${poster_path}`
          : '/no-image.png'
      }
      alt={`${title} poster`}
      width={342}
      height={513}
      className={`rounded-lg drop-shadow-md`}
    />
  )
}
