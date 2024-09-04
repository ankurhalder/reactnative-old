import { StyleSheet, Text, View, Button, TextInput } from "react-native";
export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder="Your Course goal!" />
        <Button title="ADD Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TextInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 5,
    width: "80%",
    marginRight: 10,
  },
});
