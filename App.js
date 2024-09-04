import { StyleSheet, Text, View, Button } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>yo yo</Text>
      <Text>Hello World!</Text>
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
