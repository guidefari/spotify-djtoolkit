import { getValidSPObj } from "./getValidSPObj"

export const getUserPlaylists = async () => {
  const sp = await getValidSPObj()
  const { id: userId } = await sp.getMe()
  const { items: playlists } = await sp.getUserPlaylists(userId, { limit: 50 })
  return playlists
}

export const getTrackDetails = async id => {
  const sp = await getValidSPObj()
  const results = await sp.getTrack(id)

  const artistIDs = getArtistIDs(results.artists)
  const genres = await getArtistGenres(artistIDs)

  // const genres = artistIDs.map(async artist => await getArtistGenres(artist))
  // shared array to house each artist's genre

  // const genres = artistIDs.map(async id => {
  //   try {
  //     const individualArtistDetails = await sp.getArtist(id)
  //     genreRenamed = [...individualArtistDetails.genres]
  //     return genreRenamed
  //   } catch (error) {
  //     console.error(error)
  //   }
  // })
  // console.log(genres)
  const artists = getArtistNamesAsString(results.artists)
  const trackName = results.name
  const image = results.album.images[1].url
  const albumName = results.album.name

  return { artists, trackName, image, albumName }
}

// TODO: use localStorage to simplify this
export const getArtistGenres = async artistIDs => {
  const sp = await getValidSPObj()
  const array = await artistIDs.map(async id => {
    try {
      const { genres } = await sp.getArtist(id)
      // console.log(genres)
      const list = [...genres]
      return list
    } catch (error) {
      console.log(error)
    }
    // console.log(genres)
  })
  console.log(array)
}

// Util shit
function getArtistNamesAsString(artists = []) {
  const names = artists.map(artist => artist.name)
  return names
}

function getArtistIDs(artists = []) {
  const idz = artists.map(artist => artist.id)
  return idz
}
