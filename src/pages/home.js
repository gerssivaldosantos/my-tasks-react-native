import React, { useState, useCallback, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  Modal,
  TextInput,
  Alert,
  
} from "react-native";
import styles from "../style/index";
import { Ionicons } from "@expo/vector-icons";
import TaskList from "../components/taskList";
import * as Animatable from "react-native-animatable";
import AsyncStorage from '@react-native-async-storage/async-storage';
const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);
const AnimatableTextInput = Animatable.createAnimatableComponent(TextInput);

export default function App() {
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  function addTaskModal() {
    if (input == "") return Alert.alert("", "Type anything");
    const data = {
      key: input,
      task: input,
    };
    /* passing all the tasks that already exist + the new task that 
   is in the input field (what this "..." operator is for, he goes
    through all the intens) */
    setTask([...task, data]);
    setOpen(!open);
    setInput("");

  }
  //searching tasks
    useEffect(()=> {
      async function loadTasks(){
        const taskStorage = await AsyncStorage.getItem('@task');
        if(taskStorage){
          setTask(JSON.parse(taskStorage));
        }
      }
      loadTasks()
    },[]);
//save tasks
    useEffect(()=> {
      async function saveTasks(){
        await AsyncStorage.setItem('@task',JSON.stringify(task));

      }
    saveTasks()
    },[task]);
 

    const taskDelete = useCallback((data)=>{
      const find = task.filter(result => result.key !== data.key)
      setTask(find)
    })
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"#121212"} barStyle="light-content" />

        <Animatable.Text
          animation="flipInY"
          useNativeDriver
          style={styles.title}
        >
          My Tasks
        </Animatable.Text>
        <FlatList
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
          style={styles.flatList}
          showsHorizontalScrollIndicator={false} //desativate the scroll horizontal
          data={task}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => <TaskList data={item} taskDelete={taskDelete} />}
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
                value={input}
                onChangeText={(text) => setInput(text)}
              />

              <ButtonAnimated
                style={styles.submitButton}
                animation="bounceInRight"
                useNativeDriver
                duration={2000}
                onPress={addTaskModal}
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
