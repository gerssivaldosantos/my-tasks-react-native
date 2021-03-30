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
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F59968" barStyle="light-content" />
      <View>
        <Text style={styles.title}>Minhas Tarefas</Text>
        <FlatList 
        
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({item})=> <TaskList data={item}/> } //desativate the scroll horizontal
        />
      </View>

      <TouchableOpacity style={styles.buttonAdd}>
        <Ionicons name="add-circle-sharp" color={"white"} size={80} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
