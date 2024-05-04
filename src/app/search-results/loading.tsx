'use client'

import React from 'react'
import SearchForm from '../SearchForm'

function ResultSkeleton(): JSX.Element {
  return <div className="h-96 w-60 animate-pulse rounded-lg bg-black" />
}

export default function Loading(): JSX.Element {
  return (
    <>
      <SearchForm long />
      <div className="flex flex-wrap justify-around gap-5 p-5">
        <ResultSkeleton />
        <ResultSkeleton />
        <ResultSkeleton />
        <ResultSkeleton />
        <ResultSkeleton />
        <ResultSkeleton />
        <ResultSkeleton />
      </div>
    </>
  )
}
