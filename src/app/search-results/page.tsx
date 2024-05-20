'use client'

import React, { useEffect } from 'react'
import { MovieResult, TvResult } from '../../../types/types'
import { getWatchData } from '../../../services/awsServices'
import Poster from './_components/poster/Poster'
import SearchForm from '../SearchForm'
import Link from 'next/link'
import PosterSkeleton from './_components/poster/PosterSkeleton'

export default function SearchResults({
  searchParams,
}: {
  searchParams: { query: string; watchType: 'tv' | 'movie' }
}): JSX.Element {
  const { watchType, query } = searchParams
  const [results, setResults] = React.useState<
    MovieResult[] | TvResult[] | null
  >(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWatchData({ query, watchType })
        setResults(data.results)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [query, watchType])

  return (
    <>
      <SearchForm long defaultWatchType={watchType} />
      <div className="mx-auto max-w-screen-2xl p-5">
        <h1 className="mb-5 text-left text-3xl">Search Results</h1>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {!!results ? (
            results.map((result) => {
              const { poster_path, id } = result
              const title =
                (result as MovieResult).title ?? (result as TvResult).name
              return (
                <Link
                  href={`/result?id=${id}&poster_path=${poster_path}&watchType=${watchType}&title=${title}`}
                  key={id}
                >
                  <Poster poster_path={poster_path} title={title} />
                  <h2 className="mt-3 line-clamp-3 text-base">{title}</h2>
                </Link>
              )
            })
          ) : (
            <>
              <PosterSkeleton />
              <PosterSkeleton />
              <PosterSkeleton />
              <PosterSkeleton />
              <PosterSkeleton />
              <PosterSkeleton />
              <PosterSkeleton />
            </>
          )}
        </div>
      </div>
    </>
  )
}
