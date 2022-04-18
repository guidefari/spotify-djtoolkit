import { useEffect, useState } from "react"
import { Image, ScrollView, StyleSheet, TextInput } from "react-native"

import { Text, View } from "../components/Themed"
import { RootTabScreenProps } from "../../types"
import { getTrackDetails, getUserPlaylists } from "../api/SpotifyService"

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [value, onChangeText] = useState("")
  const [songDeets, setSongDeets] = useState({})

  useEffect(() => {
    getTrackInfo()
  }, [])

  async function getTrackInfo() {
    // const pl = await getUserPlaylists()
    const song = await getTrackDetails("3LxMj7QL8jTGTp5970khkq")
    song && setSongDeets(song)
  }

  console.log(songDeets)

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={{
            height: 40,
            width: "95%",
            borderColor: "#5C8001",
            borderWidth: 4,
            color: "white",
            marginTop: 15,
          }}
          onChangeText={text => onChangeText(text)}
          value={value}
          autoFocus
          placeholder="Paste track URL here"
          selectTextOnFocus
          textContentType="URL"
          returnKeyType="search"
        />
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        {songDeets && (
          <>
            <Text style={styles.title}>
              {songDeets?.artists?.map(artist => `${artist} | `)} -{" "}
              {songDeets.trackName}
            </Text>
            <View
              style={styles.separator}
              lightColor="#eee"
              darkColor="rgba(255,255,255,0.1)"
            />
            <Image
              source={{
                uri: songDeets.image,
              }}
              style={{ width: 400, height: 400 }}
            />
            {/* TODO: place genre pills under image */}
            <View style={styles.detailsWrap}>
              <Text style={styles.title}>107bpm</Text>
              <Text>{songDeets.albumName}</Text>
              <Text>deep house</Text>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  detailsWrap: {
    width: "100%",
    borderWidth: 2,
    borderColor: "red",
    alignItems: "flex-start",
  },
})
