'use client'

import Link from 'next/link'
import React, { useState } from 'react'

export default function SearchForm() {
  const [watchType, setWatchType] = useState('movie')
  const [query, setQuery] = useState('')

  return (
    <form>
      <label>
        Movies
        <input
          type="radio"
          name="showType"
          value="movie"
          checked={watchType === 'movie'}
          onChange={(e) => setWatchType(e.target.value)}
        />
      </label>

      <label>
        TV Shows
        <input
          type="radio"
          name="watchType"
          value="tv"
          checked={watchType === 'tv'}
          onChange={(e) => setWatchType(e.target.value)}
        />
      </label>

      <input
        type="text"
        placeholder="Enter a title..."
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-black"
      />
      <Link
        href={`/search-results?query=${query.replace(/ /g, '+')}&watchType=${watchType}`}
      >
        <button>Search</button>
      </Link>
    </form>
  )
}
