import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './src/screens/Login';
import Home from './src/screens/Home';
import LoadingScreen from './src/screens/LoadingScreen';
import * as firebase from 'firebase';
import firebaseConfig from './src/firebase/firebaseConfig';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        headerLeft={null}
        options={{ title: 'Sign In' }}
        />
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        headerLeft={null}
        options={{ title: '' }}
        />
        <Stack.Screen
        name="Home"
        component={Home}
        headerLeft={null}
        options={{ title: 'Welcome Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
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
