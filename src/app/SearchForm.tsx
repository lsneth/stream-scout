'use client'

import React, { useState } from 'react'
import Button from './_components/Button'
import { useRouter } from 'next/navigation'
import { sendGAEvent } from '@next/third-parties/google'

export default function SearchForm({
  long = false,
  defaultWatchType = 'movie',
  defaultQuery = '',
}: {
  long?: boolean
  defaultWatchType?: 'movie' | 'tv'
  defaultQuery?: string
}) {
  const router = useRouter()
  const [watchType, setWatchType] = useState<'tv' | 'movie'>(defaultWatchType)
  const [query, setQuery] = useState(defaultQuery)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    sendGAEvent('event', 'search', { watchType, query })
    router.push(
      `/search-results?query=${query.replace(/ /g, '+')}&watchType=${watchType}`,
    )
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`${long ? 'bg-black p-5 text-center sm:flex sm:py-3' : 'm-auto max-w-96 rounded-lg bg-black p-7 text-center'}`}
    >
      <Button
        onClick={() => setWatchType('movie')}
        className={`${watchType === 'movie' ? 'border-b-2 border-b-white bg-accent1' : 'bg-accent2'} m-auto mx-1`}
      >
        Movies
      </Button>
      <Button
        onClick={() => setWatchType('tv')}
        className={`${watchType === 'tv' ? 'border-b-2 border-b-white bg-accent1' : 'bg-accent2'} m-auto mx-1`}
      >
        TV Shows
      </Button>
      <br />

      <input
        type="text"
        placeholder="Enter a title..."
        id="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="m-auto mx-1 my-2 w-full rounded-lg border-2 border-solid p-2 text-black focus:outline-accent1"
        aria-label="Enter a title..."
      />
      <br />

      <Button type="submit" className="m-auto mx-1">
        Search
      </Button>
    </form>
  )
}
