'use client'

import React, { useState } from 'react'
import Button from './_components/Button'
import { useRouter } from 'next/navigation'

export default function SearchForm() {
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
      className="m-auto max-w-96 rounded-lg bg-black p-7 text-center"
    >
      <Button
        onClick={() => setWatchType('movie')}
        className={`${watchType === 'movie' ? 'bg-accent1 border-b-2 border-b-white' : 'bg-accent2'}`}
      >
        Movies
      </Button>
      <Button
        onClick={() => setWatchType('tv')}
        className={`${watchType === 'tv' ? 'bg-accent1 border-b-2 border-b-white' : 'bg-accent2'}`}
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
        className="my-2 w-full rounded-lg p-2 text-black"
      />
      <br />

      <Button type="submit">Search</Button>
    </form>
  )
}
