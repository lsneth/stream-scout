import Image from 'next/image'
import SearchForm from './SearchForm'

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">Stream Scout</h1>
      <SearchForm />
      <p className="mx-5 mb-24 text-pretty">
        Search for any movie or tv show to see where it is available to stream,
        rent, or buy!
      </p>
    </main>
  )
}
