import { StyleSheet, Text, View, Button } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>yo yo</Text>
      </View>
      <Text
        style={{
          backgroundColor: "yellow",
          fontSize: 20,
          padding: 10,
          borderRadius: 10,
          margin: 15,
        }}
        s
      >
        Hello World!
      </Text>
      <Button title="Press me" onPress={() => alert("Button pressed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
