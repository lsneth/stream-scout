"use client"

import React, { FormEvent, useState } from "react"
import { getWatchData } from "../../services"

export default function QueryForm() {
  const [watchType, setWatchType] = useState("movie")
  const [query, setQuery] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setQuery("")
    console.log(await getWatchData({ query, watchType }))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Movies
        <input
          type="radio"
          name="showType"
          value="movie"
          checked={watchType === "movie"}
          onChange={(e) => setWatchType(e.target.value)}
        />
      </label>

      <label>
        TV Shows
        <input
          type="radio"
          name="watchType"
          value="tv"
          checked={watchType === "tv"}
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
      <button type="submit">Search</button>
    </form>
  )
}
