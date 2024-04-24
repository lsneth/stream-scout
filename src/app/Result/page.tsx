'use client'

import React, { useEffect, useState } from 'react'
import Poster from '../search-results/_components/Poster'
import { getWatchProviders } from '../../../services/awsServices'
import { WatchProvider } from '../../../types/types'

export default function Result({
  searchParams,
}: {
  searchParams: {
    id: string
    title: string
    poster_path: string
    watchType: string
  }
}) {
  const { id, title, poster_path, watchType } = searchParams
  const [flatrateProviders, setFlatrateProviders] = useState<WatchProvider[]>(
    [],
  )
  const [buyProviders, setBuyProviders] = useState<WatchProvider[]>([])
  const [rentProviders, setRentProviders] = useState<WatchProvider[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWatchProviders({ watchType, watchId: id })

        setFlatrateProviders(data.results.US.flatrate ?? [])
        setBuyProviders(data.results.US.buy ?? [])
        setRentProviders(data.results.US.rent ?? [])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [id, watchType])
  return (
    <>
      <Poster title={title} poster_path={poster_path} />
      <b>stream</b>
      {flatrateProviders.map((provider) => (
        <p key={provider.provider_id}>{provider.provider_name}</p>
      ))}

      <b>rent</b>
      {rentProviders.map((provider) => (
        <p key={provider.provider_id}>{provider.provider_name}</p>
      ))}

      <b>buy</b>
      {buyProviders.map((provider) => (
        <p key={provider.provider_id}>{provider.provider_name}</p>
      ))}
    </>
  )
}
