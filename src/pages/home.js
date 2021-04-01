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
import * as Animatable from 'react-native-animatable';

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity)

export default function App() {
  const [task,setTask] = useState([
    {key:1, task: 'Comprar pão'},
    {key:2, task: 'Fazer dever de casa'},
    {key:3, task: 'Estudar react native'},
    {key:4, task: 'Quimica'},
    {key:10, task:'Ola'}
  ]);
  const [backgroud,setBackgroud] = useState('black')
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F59968" barStyle="light-content" />
      <View>
        <Animatable.Text animation="flipInY"
    useNativeDriver style={styles.title}>My Tasks</Animatable.Text>
        <FlatList 
        style={styles.flatList}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({item})=> <TaskList data={item}/> } //desativate the scroll horizontal
        />
      </View>
//zoomInUp
    
      <ButtonAnimated style={styles.buttonAdd}
      animation="bounceInUp"
      useNativeDriver
      duration='2000'>
        <Ionicons style={styles.icon} name="add" color={"#121212"} size={50} />
      </ButtonAnimated>
    </SafeAreaView>
  );
}
