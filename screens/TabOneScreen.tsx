import { useState } from "react"
import { Image, StyleSheet, TextInput } from "react-native"

import EditScreenInfo from "../components/EditScreenInfo"
import { Text, View } from "../components/Themed"
import { RootTabScreenProps } from "../types"

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [value, onChangeText] = useState("")

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          height: 40,
          width: "100%",
          borderColor: "gray",
          borderWidth: 1,
          color: "white",
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
      <Text style={styles.title}>Track Details</Text>
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
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
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
})
