import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

function GoalInput({ goalInputHandler, addGoalHandler, modalIsVisible }) {
  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your Course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
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
});
