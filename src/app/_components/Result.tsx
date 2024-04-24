import React from 'react'
import { type MovieResult, type TvResult } from '../../../types/types'
import Image from 'next/image'
import Link from 'next/link'

export default function Result({ result }: { result: MovieResult | TvResult }) {
  const { id, poster_path } = result
  const title = (result as MovieResult).title
    ? (result as MovieResult).title
    : (result as TvResult).name

  return (
    <Link href={`result/${id}`}>
      <Image
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={`${title} poster`}
        width={100}
        height={100}
      />
      <p>{title}</p>
    </Link>
  )
}
