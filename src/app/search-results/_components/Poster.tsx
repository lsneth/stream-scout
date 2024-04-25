import Image from 'next/image'
import React from 'react'

export default function Poster({
  title,
  poster_path,
  width = 342,
  height = 513,
}: {
  title?: string
  poster_path: string
  width?: number
  height?: number
}): JSX.Element {
  return (
    <>
      {!!poster_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={`${title} poster`}
          width={width}
          height={height}
          className="m-auto mt-5"
        />
      ) : (
        <div className="bg-pink-400">no poster</div>
      )}
      {title && <p>{title}</p>}
    </>
  )
}
