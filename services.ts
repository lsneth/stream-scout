import { MovieTvData } from './types/types'

export async function getWatchData({
  query,
  watchType,
}: {
  query: string
  watchType: string
}): Promise<MovieTvData> {
  const res = await fetch(
    `https://mnva0fhft9.execute-api.us-east-2.amazonaws.com/default/getWatchData?query=${query}&watchType=${watchType}`,
  )
  return res.json()
}

export async function getWatchProviders({
  watchType,
  watchId,
}: {
  watchType: string
  watchId: string
}) {
  const res = await fetch(
    `https://oe68fbhrig.execute-api.us-east-2.amazonaws.com/default/getWatchProviders?watchType=${watchType}&watchId=${watchId}`,
  )
  return res.json()
}

export async function getWatchImage({
  watchType,
  watchId,
}: {
  watchType: string
  watchId: string
}) {
  const res = await fetch(
    `https://elhxyyfpsi.execute-api.us-east-2.amazonaws.com/default/getWatchImage?watchType=${watchType}&watchId=${watchId}`,
  )
  return res.json()
}
