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

  const increaseTime = (type) => { 
    let newSec = Number(workSec) + 1
    if(newSec === 60) {
      let newMin = Number(workMin) + 1
      console.log("min",newMin)
      setWorkSec("00")
      setWorkMin( newMin >= 10 ? `${newMin}` : `0${newMin}`)
      
    } else {
    setWorkSec(newSec >= 10 ? `${newSec}` : `0${newSec}`)
    }


  };

  const decreaseTime = ( type) => {
    let newSec = Number(workSec) - 1
     if(newSec === 0) {
      setWorkSec("00")      
    } else if (newSec < 0) {
      if(Number(workMin) === 0) {
        setWorkSec("00")
        setWorkMin("00")
      } else{
        setWorkSec("59")
      let newMin = Number(workMin) - 1
      setWorkMin( newMin >= 10 ? `${newMin}` : `0${newMin}`)
      }
    } else {
    setWorkSec(newSec >= 10 ? `${newSec}` : `0${newSec}`)
    }
  };

  const setTime = (minutes, seconds, type) => {
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

      <TimeStepper
        title="Work"
        type="work"
        minutes={workMin}
        seconds={workSec}
        increaseTime={increaseTime}
        decreaseTime={decreaseTime}
        setTime={setTime}
         />
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
