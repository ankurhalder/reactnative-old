import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput({
  goalInputHandler,
  addGoalHandler,
  modalIsVisible,
  closeModal,
}) {
  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require(`../assets/images/goal.png`)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Close" onPress={closeModal} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderBottomColor: "#cccccc",
    backgroundColor: "#311bcb",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    width: "90%",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
