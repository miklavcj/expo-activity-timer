import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native'

const RoundsStepper = () => {
    const [num, setNum] = useState(0)

    return (
        <View style={styles.container}>  
            <View>
                <Text style={styles.title}>Rounds</Text>
             </View>
            <View style={styles.row}>  
                <TouchableOpacity onPress={() => setNum( num > 1 ? num - 1 : num )}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>-</Text>
                    </View>
                </TouchableOpacity>

                <TextInput keyboardType="number-pad" 
                onChangeText={num => setNum( num != "" ? Number(num) : null)}
                onEndEditing={() => setNum( num === null ? 1 : num)}
                style={styles.number}>{num}</TextInput>

                <TouchableOpacity onPress={() => setNum( num + 1 )}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RoundsStepper

const styles = StyleSheet.create({
    container:{
        width: '75%',
        padding: 20,
        marginBottom:20,
        justifyContent: "space-evenly",
        alignItems:'center',
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 20,
    },
    title: {
        fontSize:30,
        marginBottom: 15},
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
