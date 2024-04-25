import Image from 'next/image'
import SearchForm from './SearchForm'

export default function Home() {
  return (
    <main>
      <h1 className="mb-5 text-3xl sm:mb-7 sm:text-6xl">Stream Scout</h1>
      <SearchForm />
      <p className="mx-5 mt-5 text-pretty max-sm:mb-14 sm:mt-7">
        Search for any movie or tv show to see where it&apos;s available to
        stream, rent, or buy!
      </p>
    </main>
  )
}
