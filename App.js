import { StyleSheet, Text, View, Button, TextInput } from "react-native";
export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder="Your Course goal!" />
        <Button title="ADD Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  TextInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 5,
    width: "70%",
    marginRight: 10,
  },
  goalsContainer: {
    flex: 5,
  },
});
