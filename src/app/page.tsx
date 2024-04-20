import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Image src="/defaultBackdrop.jpg" alt="" fill={true} className="-z-10" />

      <h1>Stream Scout</h1>
      <p>Search for any movie or tv show to see where it is available to stream, rent, or buy!</p>
      <form>
        <input type="radio" name="showType" value="tv" />
        <label>TV Shows</label>

        <input type="radio" name="showType" value="movie" />
        <label>Movies</label>

        <input type="text" placeholder="Enter a title..." name="searchQuery" />
        <button type="submit">Search</button>
      </form>
    </main>
  )
}
