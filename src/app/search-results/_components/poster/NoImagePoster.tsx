import Image from 'next/image'
import React from 'react'

export default function NoImage({ title }: { title?: string }): JSX.Element {
  return (
    <div className="flex h-48 flex-col justify-center rounded-lg bg-black lg:h-80 xl:h-108">
      <Image
        src="/no-image.svg"
        alt={`${title} poster`}
        width={50}
        height={50}
        className="m-auto"
      />
    </div>
  )
}
