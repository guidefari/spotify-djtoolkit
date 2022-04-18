import { encode as btoa } from "base-64"
import { setUserData, getUserData } from "../hooks/userData"
import { getSpotifyCredentials } from "../utils/getSpotifyCredentials"
import { getTokens } from "./getTokens"

export const refreshTokens = async () => {
  try {
    const { clientId, clientSecret } = getSpotifyCredentials() //we wrote this function above
    const refreshToken = await getUserData("refreshToken")
    console.log("refreshToken squared -->:", refreshToken)
    const credsB64 = btoa(`${clientId}:${clientSecret}`)
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${credsB64}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
    })
    const responseJson = await response.json()
    if (responseJson.error) {
      await getTokens()
    } else {
      const {
        access_token: newAccessToken,
        refresh_token: newRefreshToken,
        expires_in: expiresIn,
      } = responseJson

      const expirationTime = new Date().getTime() + expiresIn * 1000
      await setUserData("accessToken", newAccessToken)
      if (newRefreshToken) {
        await setUserData("refreshToken", newRefreshToken)
      }
      await setUserData("expirationTime", expirationTime)
    }
  } catch (err) {
    console.error(err)
  }
}
