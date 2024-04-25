export type MovieResult = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type TvResult = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  first_air_date: string
  name: string
  vote_average: number
  vote_count: number
}

export type MovieTvData = {
  page: number
  results: MovieResult[] | TvResult[]
  total_pages: number
  total_results: number
}

export type WatchProvider = {
  logo_path: string
  provider_id: number
  provider_name: string
  display_priority: number
}

export type WatchProviderData = {
  id: number
  results: Record<
    string, // two-letter country code
    {
      link?: string
      rent?: WatchProvider[]
      buy?: WatchProvider[]
      flatrate?: WatchProvider[]
    }
  >
}

export type Image = {
  aspect_ratio: number
  height: number
  iso_639_1: string | null
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

export type ImageData = {
  backdrops: Image[]
  id: number
  logos: Image[]
  posters: Image[]
}
