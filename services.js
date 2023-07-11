const API_KEY = 'fe107f0049ae296497a71c6ed3b25a83'

// showType is 'tv' or 'movie'
export async function getShowData(showType, searchQuery) {
  const res = await fetch(`https://api.themoviedb.org/3/search/${showType}?api_key=${API_KEY}&query=${searchQuery.replace(' ', '+')}`)
  const data = await res.json()
  return data.results
}

export async function getWatchProviders(showType, showId) {
  const res = await fetch(`https://api.themoviedb.org/3/${showType}/${showId}/watch/providers?api_key=${API_KEY}`)
  const data = await res.json()
  return data.results.US
}

export async function getBackdropImage(showType, showId) {
  const seasons = showType === 'tv' ? 'season/1/' : ''
  const imageUrl = 'https://image.tmdb.org/t/p/original'

  const res = await fetch(`https://api.themoviedb.org/3/${showType}/${showId}/${seasons}images?api_key=${API_KEY}`)
  const data = await res.json()

  if (data.backdrops) {
    const imageIndex = Math.floor(Math.random() * data.backdrops.length)
    return `${imageUrl}${data.backdrops[imageIndex].file_path}`
  }
  return './images/defaultBackdrop.jpg'
}
