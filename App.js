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
import WorkoutStyle from './src/screens/WorkoutStyle';
import Accessories from './src/screens/Accessories';
import Workout from './src/screens/Workout';
import RecordExcercise from './src/screens/RecordExcercise'

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
      <Stack.Screen 
        name="WorkoutStyle"
        component={WorkoutStyle}
        options={{title: 'Program Style'}}
        />
        <Stack.Screen
          name="Accessories"
          component={Accessories}
          options={{title: 'Select Excercises'}}
          />
        <Stack.Screen
          name="Workout"
          component={Workout}
          options={{title: 'Selected Workout'}}
        />
        <Stack.Screen
          name="RecordExcercise"
          component={RecordExcercise}
          options={{title: 'Record Sets'}}
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
