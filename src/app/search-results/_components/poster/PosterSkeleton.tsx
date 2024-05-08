import React from 'react'

export default function PosterSkeleton({
  fullWidth = false,
}: {
  fullWidth?: boolean
}) {
  return (
    <div
      className={`${
        fullWidth
          ? 'relative h-full w-72'
          : 'relative h-full w-32 lg:w-52 xl:w-72'
      } mb-3 animate-pulse rounded-lg bg-black`}
    >
      <div className="h-48 lg:h-80 xl:h-108" />
    </div>
  )
}
