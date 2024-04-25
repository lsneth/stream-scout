'use client'

import React, { useEffect, useState } from 'react'
import Poster from '../search-results/_components/Poster'
import { getWatchImage, getWatchProviders } from '../../../services/awsServices'
import { Image as ImageType, WatchProvider } from '../../../types/types'
import Image from 'next/image'

function WatchProviders({
  type,
  watchProviderData,
}: {
  type: 'flatrate' | 'buy' | 'rent'
  watchProviderData: WatchProvider[]
}): JSX.Element {
  const displayType = {
    flatrate: 'Stream',
    buy: 'Buy',
    rent: 'Rent',
  }

  return (
    <div className="flex flex-col gap-3 max-lg:mb-10 lg:flex-row lg:items-center">
      <h2 className="w-20 text-2xl lg:text-left">{displayType[type]}</h2>
      {watchProviderData.length > 0 ? (
        watchProviderData.map((provider) => (
          <Image
            src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
            alt={`${provider.provider_name} logo`}
            key={provider.provider_id}
            width={50}
            height={50}
            className="rounded-lg max-lg:mx-auto"
          />
        ))
      ) : (
        <p className="text-center">none</p>
      )}
    </div>
  )
}

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
  const { id, poster_path, watchType } = searchParams
  const [flatrateProviders, setFlatrateProviders] = useState<WatchProvider[]>(
    [],
  )
  const [buyProviders, setBuyProviders] = useState<WatchProvider[]>([])
  const [rentProviders, setRentProviders] = useState<WatchProvider[]>([])
  const [backdropImages, setBackdropImages] = useState<ImageType[]>([])

  let backdropImage: ImageType | undefined
  let highestScore = 0
  for (const image of backdropImages) {
    const score = image.vote_average * image.vote_count
    if (score > highestScore) {
      highestScore = score
      backdropImage = image
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWatchProviders({ watchType, watchId: id })
        setFlatrateProviders(data.results.US.flatrate ?? [])
        setBuyProviders(data.results.US.buy ?? [])
        setRentProviders(data.results.US.rent ?? [])
      } catch (error) {
        console.error('Error fetching watch providers:', error)
      }

      try {
        const data = await getWatchImage({ watchType, watchId: id })
        setBackdropImages(data.backdrops ?? data.posters ?? data.logos ?? [])
      } catch (error) {
        console.error('Error fetching watch providers:', error)
      }
    }

    fetchData()
  }, [id, watchType])
  return (
    <div className="h-full bg-black">
      <div
        style={{
          backgroundImage: backdropImage
            ? `url(https://image.tmdb.org/t/p/original${backdropImage?.file_path})`
            : 'url(/defaultBackdrop.jpg)',
        }}
        className="flex h-48 bg-cover bg-center sm:h-64 md:h-80"
      >
        <div className="grow bg-gradient-to-t from-black" />
      </div>
      <div className="-mt-20 flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-14">
        <div className="flex text-center">
          <Poster poster_path={poster_path} fullWidth titleText />
        </div>

        <div className="flex gap-3 sm:gap-10 lg:flex-col">
          <WatchProviders
            type="flatrate"
            watchProviderData={flatrateProviders}
          />
          <WatchProviders type="buy" watchProviderData={buyProviders} />
          <WatchProviders type="rent" watchProviderData={rentProviders} />
        </div>
      </div>
    </div>
  )
}
