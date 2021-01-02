import React, {useState, useEffect} from 'react';
import{View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FbApp from '../firebase/firebaseConfig';
import Workout from './Workout';
import {getWorkouts} from '../firebase/firebaseService';

const Home = ({navigation}) =>{
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
                    "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

    const [workouts, setWorkouts] = useState([]);
    const startDate = Date(2021, 1, 1).toString();
    const setData = () =>{
        getWorkouts().then((result) => setWorkouts(result));
    }
    const onPress = () =>{
        navigation.navigate('WorkoutStyle');
    }
    const startWorkout = () =>{
        navigation.navigate('Workout');
    }
    const getDate = (days) =>{
        
        
        let result = new Date(startDate);
        result.setDate(result.getDate() + days);
        return weekday[result.getDay()] + ", "  + month[result.getMonth()] + " " + 
        result.getDate() + ", " + result.getFullYear();
    }
    var user = FbApp.auth().currentUser;
    navigation.setOptions({
        headerLeft:null
    });
    const Item = ({workout, date, id}) =>(
        <TouchableOpacity style={styles.buttonGreen} onPress={() => {
            console.log(id);
            navigation.navigate("ViewWorkout", {location: id, name: workout})
            }}>
            <Text>
                {workout} 
            </Text>
            <Text>
                {getDate(date)} 
            </Text>
        </TouchableOpacity>
    );
    const renderItem = ({item}) => (
        <Item workout = {item.name} date = {item.date} id  = {item.id}/>
    );
    useEffect(() => {
		setData();
	  }, []);
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
                    data={workouts}
                    renderItem = {renderItem}
                    keyExtractor={(item) => item.id}
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