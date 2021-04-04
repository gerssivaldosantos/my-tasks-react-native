import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../style/index";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable';

export default function TaskList({data}) {
  return (
    <Animatable.View 
    style={styles.task}
    animation="flipInY"
    useNativeDriver>
      <TouchableOpacity>
        <Ionicons style={{color:'#ff8700'}} name="md-checkmark-circle" size={30} color="#222222" />
      </TouchableOpacity>
     <View>
      <Text style={styles.taskText}>{data.task}</Text>
       </View>
    </Animatable.View>
  );
}
