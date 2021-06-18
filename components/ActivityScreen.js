import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from "react-native";
import SingleStepper from "./SingleStepper";
import TimeStepper from "./TimeStepper";

export default function ActivityScreen() {
  
     
  return (
    
    <View style={styles.container}>
     <Text>Activity screen</Text>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  avoid: {
    alignItems: "center",
    justifyContent: "center",

  }
});
