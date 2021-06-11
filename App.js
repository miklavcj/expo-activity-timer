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

  const setMinutes = (minutes, type, action) => {
    if(action === "edit") {
      if(minutes === null) {
        setWorkMin(null)
      } else {
        setWorkMin(minutes)
      }
    }
    if(action === "done") {
      if(minutes === null) {
        setWorkMin("00")
      } else {
        setWorkMin(minutes >= 10 ? `${minutes}` : `0${minutes}`)
      }
    }  
  };

  const setSeconds = (seconds, type, action) => {
      if(action === "edit") {
      if(seconds === null) {
        setWorkSec(null)
      } else {
        setWorkSec(seconds)
      }
    }
    if(action === "done") {
      if(seconds === null) {
        setWorkSec("00")
      } else if (seconds < 60 ) {
        setWorkSec(seconds >= 10 ? `${seconds}` : `0${seconds}`)
      } else {
        const calculatedMin = Math.floor(seconds/60)
        const remainingSec = seconds % 60

        setWorkSec(remainingSec >= 10 ? `${remainingSec}` : `0${remainingSec}`)
        setWorkMin(calculatedMin >= 10 ? `${calculatedMin}` : `0${calculatedMin}`)
      }
    }  
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
        setMinutes={setMinutes}
        setSeconds={setSeconds}
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
