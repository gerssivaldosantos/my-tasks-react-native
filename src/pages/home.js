import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Touchable,
  FlatList,
  InteractionManager,
} from "react-native";
import styles from "../style/index";
import { Ionicons } from "@expo/vector-icons";
import States from '../components/state'
import TaskList from '../components/taskList'
export default function App() {
  const [task,setTask] = useState([
    {key:1, task: 'Comprar pão'},
    {key:2, task: 'Comprar pão'},
    {key:3, task: 'Comprar pão'},
    {key:4, task: 'Comprar pão'}
  ]);
  const [backgroud,setBackgroud] = useState('black')
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F59968" barStyle="light-content" />
      <View>
        <Text style={styles.title}>My Tasks</Text>
        <FlatList 
        style={styles.flatList}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({item})=> <TaskList data={item}New Text/> } //desativate the scroll horizontal
        />
      </View>

      <TouchableOpacity style={styles.buttonAdd}>
        <Ionicons style={styles.icon} name="add" color={"#121212"} size={50} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
