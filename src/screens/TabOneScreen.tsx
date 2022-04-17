import { useState } from "react"
import { Image, ScrollView, StyleSheet, TextInput } from "react-native"

import { Text, View } from "../components/Themed"
import { RootTabScreenProps } from "../../types"

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [value, onChangeText] = useState("")

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
          placeholder="Enter track URL here"
          selectTextOnFocus
          textContentType="URL"
          returnKeyType="search"
        />
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={styles.title}>Artist - Track Name</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          }}
          style={{ width: 400, height: 400 }}
        />
        <View style={styles.detailsWrap}>
          <Text style={styles.title}>107bpm</Text>
          <Text>Album/EP Name</Text>
          <Text>deep house</Text>
        </View>
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
