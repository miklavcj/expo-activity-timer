import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SingleStepper from "./components/SingleStepper";
import TimeStepper from "./components/TimeStepper";

export default function App() {
  const [setsNum, setSetsNum] = useState(1);
  const [roundsNum, setRoundsNum] = useState(1);

  const [workMin, setWorkMin] = useState("00");
  const [workSec, setWorkSec] = useState("00");

  const increaseNumber = (number, type) => {
    type === "sets" ? setSetsNum(number + 1): setRoundsNum(number + 1) ;
    
  };

  const decreaseNumber = (number, type) => {
    type === "sets" ? setSetsNum(number > 1 ? number - 1 : number) : setRoundsNum(number > 1 ? number - 1 : number);
  };

  const setNumber = (number, type) => {
     type === "sets" ? setSetsNum( number != "" ? Number(number) : null) : setRoundsNum( number != "" ? Number(number) : null)
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SingleStepper
        title="Sets"
        type="sets"
        number={setsNum}
        increaseNumber={increaseNumber}
        decreaseNumber={decreaseNumber}
        setNumber={setNumber}
      />

      <TimeStepper />
      <SingleStepper
        title="Rounds"
        type="rounds"
        number={roundsNum}
        increaseNumber={increaseNumber}
        decreaseNumber={decreaseNumber}
        setNumber={setNumber}
      />
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
});
