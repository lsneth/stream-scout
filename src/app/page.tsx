import Image from 'next/image'
import QueryForm from './QueryForm'

export default function Home() {
  return (
    <main>
      <Image src="/defaultBackdrop.jpg" alt="" fill={true} className="-z-10" />

      <h1>Stream Scout</h1>
      <p>
        Search for any movie or tv show to see where it is available to stream,
        rent, or buy!
      </p>
      <QueryForm />
    </main>
  )
}
