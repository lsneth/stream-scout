'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Button from './_components/Button'

export default function SearchForm() {
  const [watchType, setWatchType] = useState<'tv' | 'movie'>('movie')
  const [query, setQuery] = useState('')

  return (
    <div className="m-5 rounded-lg bg-black p-5 text-center">
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

      <input
        type="text"
        placeholder="Enter a title..."
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="m-2 rounded-lg p-2 text-black"
      />

      <Link
        href={`/search-results?query=${query.replace(/ /g, '+')}&watchType=${watchType}`}
      >
        <Button>Search</Button>
      </Link>
    </div>
  )
}
