import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

const TimeStepper = ( {title, type, minutes, seconds, increaseTime, decreaseTime, setMinutes, setSeconds}) => {
    const [min, setMin] = useState("00")
    const [sec, setSec] = useState("00")

    return (
        <View style={styles.container}>  
            <View>
                <Text style={styles.title}>{title}</Text>
             </View>
            <View style={styles.row}>  
                <TouchableOpacity onPress={() => decreaseTime(type)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>-</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.timeRow}>
                    <TextInput keyboardType="number-pad" 
                    maxLength = {2}
                    onChangeText={min => { min != "" ? setMinutes(min, type, "edit") : setMinutes(null, type, "edit")}}
                    onEndEditing={() => setMinutes(minutes, type, "done")}
                    style={styles.number}>{minutes}</TextInput>

                    <Text style={styles.timeDivider}>:</Text>

                    <TextInput keyboardType="number-pad" 
                    maxLength = {3}
                    onChangeText={sec => { sec != "" ? setSeconds(sec, type, "edit") : setSeconds(null, type, "edit")}}
                    onEndEditing={() => setSeconds(seconds, type, "done")}
                    style={styles.number}>{seconds}</TextInput>
                </View>

                <TouchableOpacity onPress={() => increaseTime(type)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TimeStepper

const styles = StyleSheet.create({
    container:{
        width: '50%',
        paddingBottom: 10,
        margin:15,
        justifyContent: "space-evenly",
        alignItems:'center',
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    title: {
        fontSize:25,
        paddingBottom: 5},
     row:{
         width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:'center',
    },
     timeRow:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems:'center',
    },
    timeDivider:{
        fontSize:25,
        marginLeft:5, 
        marginRight:5},
    number: {
        fontSize: 30,
    },
    button: {
    fontSize: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 45/2,
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  }
})
