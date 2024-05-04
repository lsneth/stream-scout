import Image from 'next/image'
import React from 'react'
import LoadingSpinner from '../../_components/LoadingSpinner'

export default function Poster({
  title = '',
  poster_path = '',
  fullWidth,
  titleText = false,
}: {
  title?: string
  poster_path: string
  fullWidth?: boolean
  titleText?: boolean
}): JSX.Element {
  return (
    <div
      className={
        fullWidth
          ? 'relative h-full w-72'
          : 'relative h-full w-32 lg:w-52 xl:w-72'
      }
    >
      {!!poster_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={`${title} poster`}
          width={342}
          height={513}
          className="rounded-lg"
        />
      ) : (
        <div className="flex h-48 flex-col justify-center rounded-lg bg-black lg:h-80 xl:h-108">
          {poster_path === null ? (
            <Image
              src="/no-image.svg"
              alt={`${title} poster`}
              width={50}
              height={50}
              className="m-auto"
            />
          ) : (
            <LoadingSpinner className="m-auto" />
          )}
        </div>
      )}
      {title && <p className={titleText ? 'mt-3 text-4xl' : ''}>{title}</p>}
    </div>
  )
}
