import { useState, Fragment } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setmodalIsVisible] = useState(false);

  function openModal() {
    setmodalIsVisible(true);
  }
  function closeModal() {
    setmodalIsVisible(false);
  }
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    console.log(courseGoals);
    setmodalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <Fragment>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#5e0acc" onPress={openModal} />

        <GoalInput
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          modalIsVisible={modalIsVisible}
          closeModal={closeModal}
        ></GoalInput>
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  deleteGoalHandler={deleteGoalHandler}
                  id={itemData.item.id}
                ></GoalItem>
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});
