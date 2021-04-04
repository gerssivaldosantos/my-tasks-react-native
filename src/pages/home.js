import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import styles from "../style/index";
import { Ionicons } from "@expo/vector-icons";
import States from "../components/state";
import TaskList from "../components/taskList";
import * as Animatable from "react-native-animatable";
const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);
const AnimatableTextInput = Animatable.createAnimatableComponent(TextInput);

export default function App() {
  const [task, setTask] = useState([
    { key: 1, task: "Comprar pão" },
    { key: 2, task: "Fazer dever de casa" },
    { key: 3, task: "Estudar react native" },
  ]);
  const [backgroud, setBackgroud] = useState("black");
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#121212"} barStyle="light-content" />

      <Animatable.Text animation="flipInY" useNativeDriver style={styles.title}>
        My Tasks
      </Animatable.Text>

      <FlatList
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        style={styles.flatList}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) => <TaskList data={item} />} //desativate the scroll horizontal
      />

      <Modal animationType="slide" transparent={false} visible={open}>
        <SafeAreaView style={styles.container}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={styles.buttonReturn}
              onPress={() => setOpen(!open)}
            >
              <Ionicons
                style={styles.buttonReturnIcon}
                name="md-arrow-back"
                color={"#fff"}
                size={35}
              />
            </TouchableOpacity>
            <Text style={styles.modalHeaderTitle}>New Task</Text>
          </View>
          <View style={styles.modalBody}>
            <Animatable.Text
              style={styles.modalTitle}
              animation="bounceInUp"
              useNativeDriver
              duration={2000}
            >
              What will you do today ?
            </Animatable.Text>
            <AnimatableTextInput
              placeholder="Type the name of you Task"
              style={styles.modalInput}
              animation="bounceInLeft"
              useNativeDriver
              duration={2000}
              multiline={true}
            />

            <ButtonAnimated
              style={styles.submitButton}
              animation="bounceInRight"
              useNativeDriver
              duration={2000}
            >
              <Ionicons
                style={styles.submitButtonIcon}
                name="download-outline"
                color={"#121212"}
                size={30}
              />
            </ButtonAnimated>
          </View>
        </SafeAreaView>
      </Modal>
      <ButtonAnimated
        style={styles.buttonAdd}
        animation="bounceInUp"
        useNativeDriver
        duration={2000}
        onPress={() => setOpen(!open)}
      >
        <Ionicons
          style={styles.buttonAddIcon}
          name="add"
          color={"#121212"}
          size={50}
        />
      </ButtonAnimated>
    </SafeAreaView>
  );
}
