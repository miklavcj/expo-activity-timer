import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native'

const SingleStepper = ({title, number, type, increaseNumber, decreaseNumber, setNumber}) => {

    return (
        <View style={styles.container}>  
            <View>
                <Text style={styles.title}>{title}</Text>
             </View>
            <View style={styles.row}>  
                <TouchableOpacity onPress={() => decreaseNumber(number, type)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>-</Text>
                    </View>
                </TouchableOpacity>

                <TextInput keyboardType="number-pad" 
                maxLength = {3}
                onChangeText={num => setNumber( num , type)}
                onEndEditing={() => { number === null ? setNumber(1, type) : setNumber(number, type)}}
                style={styles.number}>{number}</TextInput>

                <TouchableOpacity onPress={() => increaseNumber(number, type)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SingleStepper

const styles = StyleSheet.create({
    container:{
        width: '75%',
        padding: 10,
        margin:10,
        justifyContent: "space-evenly",
        alignItems:'center',
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 20,
    },
    title: {
        fontSize:25,
        marginBottom: 5},
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
    fontSize: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 50/2,
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 20,
    color: 'white'
  }
})
