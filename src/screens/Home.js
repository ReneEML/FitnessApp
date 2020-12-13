import React from 'react';
import{View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FbApp from '../firebase/firebaseConfig'
import Workout from './Workout';

const DATA = [
    {
        date: "December 13 2020",
        workout: "Leg Workout",
        location: "zwqerewerqwe"
    },
    {
        date: "December 15 2020",
        workout: "Leg Workout",
        location: "zfvgyuikliuhjgf"
    },
    {
        date: "December 17 2020",
        workout: "Leg Workout",
        location: "tsdfgnjkkklpo"
    },
]

const Home = ({navigation}) =>{
    const onPress = () =>{
        navigation.navigate('WorkoutStyle');
    }
    const startWorkout = () =>{
        navigation.navigate('Workout');
    }
    var user = FbApp.auth().currentUser;
    navigation.setOptions({
        headerLeft:null
    });
    const Item = ({workout, date}) =>(
        <TouchableOpacity style={styles.buttonGreen} onPress={() => navigation.navigate("ViewWorkout")}>
            <Text>
                {workout} 
            </Text>
            <Text>
                {date} 
            </Text>
        </TouchableOpacity>
    );
    const renderItem = ({item}) => (
        <Item workout = {item.workout} date = {item.date} />
    );
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>Create program</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={startWorkout}>
                <Text>Start Workout</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <Text>Upcoming</Text>
                <FlatList
                    data={DATA}
                    renderItem = {renderItem}
                    keyExtractor={(item) => item.location}
                />
            </View>
        </View>
        //<TouchableOpacity style={styles.button} onPress={navigation.navigate('WorkoutStyle')}/>
    );
}
export default Home;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    button:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
      },
      buttonGreen:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor:'#32CD32',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center'
      },
})