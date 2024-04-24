'use client'
import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { MovieResult, TvResult } from '../../../types/types'
import { getWatchData } from '../../../services/awsServices'
import Image from 'next/image'
import Poster from './_components/Poster'
import SearchForm from '../_components/SearchForm'

export default function SearchResults(): JSX.Element {
  const queryParams = useSearchParams()
  const watchType = queryParams.get('watchType') ?? ''
  const query = queryParams.get('query') ?? ''

  const [results, setResults] = React.useState<MovieResult[] | TvResult[]>([])

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
      <SearchForm />
      {results.map((result) => {
        const { poster_path, id } = result
        const title = (result as MovieResult).title ?? (result as TvResult).name
        return <Poster poster_path={poster_path} title={title} key={id} />
      })}
    </>
  )
}
