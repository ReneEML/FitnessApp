import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './Login';
import Home from './Home';
import LoadingScreen from './LoadingScreen';
import WorkoutStyle from './WorkoutStyle';
import Accessories from './Accessories';
import Workout from './Workout';
import RecordExcercise from './RecordExcercise'
import ViewWorkout from './ViewWorkout';
import React from 'react';
import UpdateMaxes from './UpdateMaxes';
import SelectProgram from './SelectProgram';
import ProgramInfo from './ProgramInfo';

const Navigation = () => {
    
    const Stack = createStackNavigator();

    return(
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
            options={{ title: 'Program Style' }}
          />
          <Stack.Screen
            name="Accessories"
            component={Accessories}
            options={{ title: 'Select Excercises' }}
          />
          <Stack.Screen
            name="Workout"
            component={Workout}
            options={{ title: 'Selected Workout' }}
          />
          <Stack.Screen
            name="RecordExcercise"
            component={RecordExcercise}
            options={{ title: 'Record Sets' }}
          />
          <Stack.Screen
            name="ViewWorkout"
            component={ViewWorkout}
            options={{ title: "View Workout" }}
          />
          <Stack.Screen
          name="UpdateMaxes"
          component={UpdateMaxes}
          options={{title: "Update Your Maxes"}}
          />
          <Stack.Screen
          name="SelectProgram"
          component={SelectProgram}
          options={{title: "Select your program!"}}
          />
          <Stack.Screen
          name="ProgramInfo"
          component={ProgramInfo}
          options={{title: "Set program information"}}
          />
        </Stack.Navigator>
        
      </NavigationContainer>
    )
}

export default Navigation;