import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import SingleStepper from "./SingleStepper";
import TimeStepper from "./TimeStepper";

export default function HomeScreen({ navigation }) {
  const [setsNum, setSetsNum] = useState(1);
  const [roundsNum, setRoundsNum] = useState(1);

  const [workMin, setWorkMin] = useState("00");
  const [workSec, setWorkSec] = useState("00");

  const [restMin, setRestMin] = useState("00");
  const [restSec, setRestSec] = useState("00");

  const [roundsRestMin, setRoundsRestMin] = useState("00");
  const [roundsRestSec, setRoundsRestSec] = useState("00");

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
    if(type === "work") {
      let newSec = Number(workSec) + 1
      if(newSec === 60) {
        let newMin = Number(workMin) + 1
        console.log("min",newMin)
        setWorkSec("00")
        setWorkMin( newMin >= 10 ? `${newMin}` : `0${newMin}`) 
      } else {
      setWorkSec(newSec >= 10 ? `${newSec}` : `0${newSec}`)
      }
    }

    if(type === "rest") {
      let newSec = Number(restSec) + 1
      if(newSec === 60) {
        let newMin = Number(restMin) + 1
        setRestSec("00")
        setRestMin( newMin >= 10 ? `${newMin}` : `0${newMin}`) 
      } else {
      setRestSec(newSec >= 10 ? `${newSec}` : `0${newSec}`)
      }
    }

     if(type === "roundsRest") {
      let newSec = Number(roundsRestSec) + 1
      if(newSec === 60) {
        let newMin = Number(roundsRestMin) + 1
        setRoundsRestSec("00")
        setRoundsRestMin( newMin >= 10 ? `${newMin}` : `0${newMin}`) 
      } else {
      setRoundsRestSec(newSec >= 10 ? `${newSec}` : `0${newSec}`)
      }
    }
    
  };

  const decreaseTime = ( type) => {
    if(type === "work") {
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
    }

    if(type === "rest") {
      let newSec = Number(restSec) - 1
      if(newSec === 0) {
      setRestSec("00")      
      } else if (newSec < 0) {
      if(Number(restMin) === 0) {
        setRestSec("00")
        setRestMin("00")
      } else{
        setRestSec("59")
      let newMin = Number(restMin) - 1
      setRestMin( newMin >= 10 ? `${newMin}` : `0${newMin}`)
      }
    } else {
       setRestSec(newSec >= 10 ? `${newSec}` : `0${newSec}`)
    } 
    }

    if(type === "roundsRest") {
      let newSec = Number(roundsRestSec) - 1
      if(newSec === 0) {
      setRoundsRestSec("00")      
      } else if (newSec < 0) {
      if(Number(roundsRestMin) === 0) {
        setRoundsRestSec("00")
        setRoundsRestMin("00")
      } else{
        setRoundsRestSec("59")
      let newMin = Number(roundsRestMin) - 1
      setRoundsRestMin( newMin >= 10 ? `${newMin}` : `0${newMin}`)
      }
    } else {
       setRoundsRestSec(newSec >= 10 ? `${newSec}` : `0${newSec}`)
    } 
    }
    
  };

  const setMinutes = (minutes, type, action) => {
    if(action === "edit") {
      if(minutes === null) {
        if(type==="work") {setWorkMin(null)}
        if(type==="rest") {setRestMin(null)}
        if(type==="roundsRest") {setRoundsRestMin(null)}
        
      } else {
        if(type==="work") {setWorkMin(minutes)}
        if(type==="rest") {setRestMin(minutes)}
        if(type==="roundsRest") {setRoundsRestMin(minutes)}
      }
    }
    if(action === "done") {
      if(minutes === null) {
         if(type==="work") {setWorkMin("00")}
        if(type==="rest") {setRestMin("00")}
        if(type==="roundsRest") {setRoundsRestMin("00")}
      } else {
         if(type==="work") {setWorkMin(minutes >= 10 ? `${minutes}` : `0${minutes}`)}
        if(type==="rest") {setRestMin(minutes >= 10 ? `${minutes}` : `0${minutes}`)}
        if(type==="roundsRest") {setRoundsRestMin(minutes >= 10 ? `${minutes}` : `0${minutes}`)}
      }
    }  
  };

  const setSeconds = (seconds, type, action) => {
      if(action === "edit") {
        if(seconds === null) {
          if(type==="work") {setWorkSec(null)}
          if(type==="rest") {setRestSec(null)}
          if(type==="roundsRest") {setRoundsRestSec(null)}
        } else {
          if(type==="work") {setWorkSec(seconds)}
          if(type==="rest") {setRestSec(seconds)}
          if(type==="roundsRest") {setRoundsRestSec(seconds)}
        }
    }
    if(action === "done") {
      if(seconds === null ) {
        if(type==="work") {setWorkSec("00")}
        if(type==="rest") {setRestSec("00")}
        if(type==="roundsRest") {setRoundsRestSec("00")}

      } else if (seconds < 60 ) { 
        
        if(type==="work") {setWorkSec(seconds >= 10 ? `${seconds}` : `0${seconds}`)}
        if(type==="rest") {setRestSec(seconds >= 10 ? `${seconds}` : `0${seconds}`)}
        if(type==="roundsRest") {setRoundsRestSec(seconds >= 10 ? `${seconds}` : `0${seconds}`)}
      } else {
        const calculatedMin = Math.floor(seconds/60)
        const remainingSec = seconds % 60

        if(type==="work") {
          setWorkSec(remainingSec >= 10 ? `${remainingSec}` : `0${remainingSec}`)
          setWorkMin(calculatedMin >= 10 ? `${calculatedMin}` : `0${calculatedMin}`)
        }
        if(type==="rest") {
          setRestSec(remainingSec >= 10 ? `${remainingSec}` : `0${remainingSec}`)
          setRestMin(calculatedMin >= 10 ? `${calculatedMin}` : `0${calculatedMin}`)
        }
        if(type==="roundsRest") {
          setRoundsRestSec(remainingSec >= 10 ? `${remainingSec}` : `0${remainingSec}`)
          setRoundsRestMin(calculatedMin >= 10 ? `${calculatedMin}` : `0${calculatedMin}`)
        }
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

      <TimeStepper
        title="Rest"
        type="rest"
        minutes={restMin}
        seconds={restSec}
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
      
      <TimeStepper
        title="Rounds Rest"
        type="roundsRest"
        minutes={roundsRestMin}
        seconds={roundsRestSec}
        increaseTime={increaseTime}
        decreaseTime={decreaseTime}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
         />

         <TouchableOpacity onPress={() => navigation.navigate('Timer')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Start Workout</Text>
                    </View>
                </TouchableOpacity>
        
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
  }, 
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  }
});
