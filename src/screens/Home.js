import React, {useState, useEffect} from 'react';
import{View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FbApp from '../firebase/firebaseConfig';
import Workout from './Workout';
import {getWorkouts, getActiveProgram} from '../firebase/firebaseService';
import {connect} from 'react-redux';
import { setActiveProgram } from '../actions/activeProgram';

const Home = (props) =>{
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
                    "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

    const [workouts, setWorkouts] = useState([]);
    const setData = () =>{
            console.log("gets Here");
            if(props.template != "" || props.template != null || props.template != "none"){
                getWorkouts(props.template).then((result) => {
                    setWorkouts(result);
                    console.log(result);
                })
            }
    }
    const onPress = () =>{
        if(props.bench == "" && props.dead == "" && props.squat == ""){
            props.navigation.navigate('UpdateMaxes');
        }
        else{
            props.navigation.navigate('WorkoutStyle');
        }
    }
    const startWorkout = () =>{
        props.navigation.navigate('Workout');
    }
    const getDate = (days) =>{
        let result = new Date(props.start);
        result.setDate(result.getDate() + days);
        return weekday[result.getDay()] + ", "  + month[result.getMonth()] + " " + 
        result.getDate() + ", " + result.getFullYear();
    }
    props.navigation.setOptions({
        headerLeft:null
    });
    const Item = ({workout, date, id}) =>(
        <TouchableOpacity style={styles.buttonGreen} onPress={() => {
            console.log(id);
            props.navigation.navigate("ViewWorkout", {location: id, name: workout})
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
    useEffect(() => setData(), [props.template]);
    const UpcomingList = () => {
        if(props.temlate != "none"){
            return(            
            <View style={styles.button}>
                <Text>Upcoming</Text>
                <FlatList
                    data={workouts}
                    renderItem = {renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
            );
        }
        return null;
    }
    const ActiveProgram = () => {
        if(props.template != "none"){
            return(
            <View style={styles.button}>
                <Text>
                    Active Program
                </Text>
                <Text>
                    Start: {props.start} Template: {props.template} ID: {props.programID}
                </Text>
            </View>
            );
        }
        return null;
    }
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>Create program</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={startWorkout}>
                <Text>Start Workout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('SignIn')}>
                <Text>Test Log In</Text>
            </TouchableOpacity>
            <UpcomingList/>
            <ActiveProgram/>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("SelectProgram")}>
                <Text>Select Program</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        email: state.userReducer.email,
        userID: state.userReducer.id,
        name: state.userReducer.name,
        programID: state.activeProgramReducer.id,
        start: state.activeProgramReducer.start,
        template : state.activeProgramReducer.template,
        squat: state.maxesReducer.bench,
        bench: state.maxesReducer.bench,
        dead: state.maxesReducer.dead
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setActiveProgram: (program) => dispatch(setActiveProgram(program))
    }
}



export default connect(mapStateToProps, mapDispatchToProps) (Home);
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