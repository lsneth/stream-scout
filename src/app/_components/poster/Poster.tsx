import Image from 'next/image'
import React from 'react'

export default function Poster({
  title = '',
  poster_path = '',
  higherQuality = false,
}: {
  title?: string
  poster_path: string
  higherQuality?: boolean
}): JSX.Element {
  return (
    <Image
      src={
        !!poster_path
          ? `https://image.tmdb.org/t/p/w${higherQuality ? 342 : 185}${poster_path}`
          : '/no-image.png'
      }
      alt={`${title} poster`}
      width={342}
      height={513}
      className={`rounded-lg drop-shadow-lg`}
    />
  )
}
