import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native'

const TimeStepper = () => {
    const [min, setMin] = useState("00")
    const [sec, setSec] = useState("00")

    return (
        <View style={styles.container}>  
            <View>
                <Text style={styles.title}>Time</Text>
             </View>
            <View style={styles.row}>  
                <TouchableOpacity onPress={() => setSec( sec > 1 ? sec - 1 : sec )}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>-</Text>
                    </View>
                </TouchableOpacity>

                <TextInput keyboardType="number-pad" 
                onChangeText={min => setMin( min != "" ? Number(min) : null)}
                style={styles.number}>{min}</TextInput>
                <Text>:</Text>
                <TextInput keyboardType="number-pad" 
                onChangeText={sec => setSec( sec != "" ? Number(sec) : null)}
                style={styles.number}>{sec}</TextInput>

                <TouchableOpacity onPress={() => setSec( sec + 1 )}>
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
        width: '75%',
        padding: 20,
        justifyContent: "space-evenly",
        alignItems:'center',
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 20,
    },
    title: {
        fontSize:30,
        paddingBottom: 10},
     row:{
         width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:'center',
    },
    number: {
        fontSize: 40,
    },
    button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 60/2,
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 20,
    color: 'white'
  }
})
