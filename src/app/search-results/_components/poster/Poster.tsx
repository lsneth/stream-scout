import Image from 'next/image'
import React, { useState } from 'react'
import NoImagePoster from './NoImagePoster'

export default function Poster({
  title = '',
  poster_path = '',
  fullWidth,
}: {
  title?: string
  poster_path: string
  fullWidth?: boolean
}): JSX.Element {
  const [loading, setLoading] = useState(true)

  return (
    <div
      className={`${
        fullWidth
          ? 'relative h-full w-72'
          : 'relative h-full w-32 lg:w-52 xl:w-72'
      } mb-3`}
    >
      {!!poster_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={`${title} poster`}
          width={342}
          height={513}
          className={`rounded-lg bg-black ${loading && 'animate-pulse'}`}
          onLoad={() => setLoading(false)}
        />
      ) : (
        <NoImagePoster title={title} />
      )}
      {title && <p className="mt-3 text-base">{title}</p>}
    </div>
  )
}
