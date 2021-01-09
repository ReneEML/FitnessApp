import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/screens/Navigation';
import React from 'react';
import {useState} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './src/store';

export default function App() {

  const store = configureStore();

  return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    
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
