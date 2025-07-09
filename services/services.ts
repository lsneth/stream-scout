import { MovieTvData, WatchProviderData, ImageData } from '../types/types'

const API_KEY = process.env.TMDB_API_KEY
const READ_ACCESS_TOKEN = process.env.TMDB_API_READ_ACCESS_TOKEN

async function tmdbFetch(url: string) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${READ_ACCESS_TOKEN}`,
      accept: 'application/json',
    },
  })
  if (!res.ok) {
    throw new Error(`TMDB request failed: ${res.status} ${res.statusText}`)
  }
  return res.json()
}

export async function getWatchData({
  query,
  watchType,
}: {
  query: string
  watchType: string
}): Promise<MovieTvData> {
  'use server'
  const url = `https://api.themoviedb.org/3/search/${watchType}?query=${encodeURIComponent(query)}&api_key=${API_KEY}`
  return tmdbFetch(url)
}

export async function getWatchProviders({
  watchType,
  watchId,
}: {
  watchType: string
  watchId: string
}): Promise<WatchProviderData> {
  'use server'
  const url = `https://api.themoviedb.org/3/${watchType}/${watchId}/watch/providers?api_key=${API_KEY}`
  return tmdbFetch(url)
}

export async function getWatchImage({
  watchType,
  watchId,
}: {
  watchType: string
  watchId: string
}): Promise<ImageData> {
  'use server'
  const url = `https://api.themoviedb.org/3/${watchType}/${watchId}/images?api_key=${API_KEY}`
  return tmdbFetch(url)
}
