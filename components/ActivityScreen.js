import 'react-native-gesture-handler';

import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from "react-native";
import SingleStepper from "./SingleStepper";
import TimeStepper from "./TimeStepper";

export default function ActivityScreen( {route, navigation}) {

  
  const [setsNum, setSetsNum] = useState(route.params.sets);
  const [roundsNum, setRoundsNum] = useState(route.params.rounds);

  const [workMin, setWorkMin] = useState(route.params.work[0]);
  const [workSec, setWorkSec] = useState(route.params.work[1]);

  const [restMin, setRestMin] = useState(route.params.rest[0]);
  const [restSec, setRestSec] = useState(route.params.rest[1]);

  const [roundsRestMin, setRoundsRestMin] = useState(route.params.roundsRest[0]);
  const [roundsRestSec, setRoundsRestSec] = useState(route.params.roundsRest[1]);

  return (
    
    <View style={styles.container}>
     <Text>Activity screen</Text>
     <Text>Number  of Sets: {setsNum} </Text>
     <Text>Number  of Rounds: {roundsNum} </Text>
     <Text>Work Time: {workMin}:{workSec} </Text>
     <Text>Rest Time: {restMin}:{restSec} </Text>
     <Text>Rounds Rest Time: {roundsRestMin}:{roundsRestSec} </Text>
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
