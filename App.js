import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RoundsStepper from './components/RoundsStepper'
import TimeStepper from './components/TimeStepper'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark"/>
      <RoundsStepper/>
      <TimeStepper/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
