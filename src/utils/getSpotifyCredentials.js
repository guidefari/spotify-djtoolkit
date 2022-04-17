import { spotifyCredentials } from "../api/secrets"

// export const getSpotifyCredentials = async () => {
//   const res = await fetch("/api/spotify-credentials")
//   const spotifyCredentials = res.data
//   return spotifyCredentials
// }

export function getSpotifyCredentials() {
  return ({ clientId, clientSecret, redirectUri } = spotifyCredentials)
}
