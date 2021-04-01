import React from "react";
import { View, TouchableOpacity, Touchable } from "react-native";
import styles from "../style/index";
import { Ionicons } from "@expo/vector-icons";

export default function TaskList() {
  return (
    <View style={styles.task}>
      <TouchableOpacity>
        <Ionicons name="md-checkmark-circle" size={30} color="#222222" />
      </TouchableOpacity>
     <View>
      
       </View>
    </View>
  );
}
