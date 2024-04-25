'use client'

import React, { useState } from 'react'
import Button from './_components/Button'
import { useRouter } from 'next/navigation'

export default function SearchForm({ long = false }: { long?: boolean }) {
  const router = useRouter()
  const [watchType, setWatchType] = useState<'tv' | 'movie'>('movie')
  const [query, setQuery] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push(
      `/search-results?query=${query.replace(/ /g, '+')}&watchType=${watchType}`,
    )
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`${long ? ' border-t-2 border-accent2 bg-black p-5 text-center sm:flex sm:py-3' : 'm-auto max-w-96 rounded-lg bg-black p-7 text-center'}`}
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
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="m-auto mx-1 my-2 w-full rounded-lg p-2 text-black"
      />
      <br />

      <Button type="submit" className="m-auto mx-1">
        Search
      </Button>
    </form>
  )
}
