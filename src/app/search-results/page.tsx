'use client'

import React, { useEffect } from 'react'
import { MovieResult, TvResult } from '../../../types/types'
import { getWatchData } from '../../../services/awsServices'
import Poster from './_components/poster/Poster'
import SearchForm from '../SearchForm'
import Link from 'next/link'
import LoadingSpinner from '../_components/LoadingSpinner'
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
      <div className="flex flex-wrap justify-around gap-5 p-5">
        {!!results ? (
          results.map((result) => {
            const { poster_path, id } = result
            const title =
              (result as MovieResult).title ?? (result as TvResult).name
            return (
              <Link
                href={`/result?id=${id}&poster_path=${poster_path}&watchType=${watchType}`}
                key={id}
              >
                <Poster poster_path={poster_path} title={title} />
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
          </>
        )}
      </div>
    </>
  )
}
