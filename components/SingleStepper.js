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
        marginBottom: 10},
     row:{
         width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:'center',
    },
    number: {
        fontSize: 30,
    },
    button: {
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
