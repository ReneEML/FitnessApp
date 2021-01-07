import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/screens/Navigation';
import React from 'react';
import GlobalContext from './src/context/global'

export default function App() {

  const user = {
    name: "Rene",
    maxes:{
      bench: 255,
      squat: 370,
      dead: 405
    }
    
  }

  return (
    <GlobalContext.Provider value={user}>
      <Navigation/>
    </GlobalContext.Provider>
    
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
