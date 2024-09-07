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
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Close" onPress={closeModal} />
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
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 5,
    width: "90%",
    color: "white",
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
