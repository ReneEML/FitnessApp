import React from 'react';
import{View, StyleSheet, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import FbApp from '../firebase/firebaseConfig';
import {getUser, getActiveProgram} from '../firebase/firebaseService';
import {setUser} from '../actions/user';
import {setActiveProgram} from '../actions/activeProgram';
import {setSquat, setBench, setDead} from '../actions/maxes';

const LoadingScreen = (props) =>{
    props.navigation.setOptions({
        headerLeft:null
    });
    const initState = (id) => {
        getUser(id).then((result) => {
            props.setUser(result);
            if(result.maxes.bench != null){
                props.setBench(result.maxes.bench);
            }
            if(result.maxes.squat != null){
                props.setSquat(result.maxes.squat);
            }
            if(result.maxes.dead != null){
                props.setDead(result.maxes.dead);
            }
            getActiveProgram(result.id).then((result) => {
                if(result != null){
                    console.log(result);
                    props.setActiveProgram(result);
                }
                else{
                    const prog = {
                        start: "",
                        template:"none",
                        programID: "",

                    }
                    props.setActiveProgram(prog);
                }
                props.navigation.navigate("Home")
            })
        });
    }
    const checkifLoggedIn = () =>{
        FbApp.auth().onAuthStateChanged(function(user){
            if(user)
            {
                initState(FbApp.auth().currentUser.uid);
            }
            else
            {
                props.navigation.navigate('SignIn');
            }
        })
    }

    checkifLoggedIn();

    return(
        <View style={styles.container}>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    }
})

const mapStateToProps = (state) => {
    return {
        email: state.userReducer.email,
        userID: state.userReducer.id,
        name: state.userReducer.name,
        programID: state.activeProgramReducer.id,
        start: state.activeProgramReducer.start,
        template : state.activeProgramReducer.template,
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        setUser: (user) => {
            dispatch(setUser(user));
        },
        setActiveProgram: (program) => dispatch(setActiveProgram(program)),
        setBench: (user) => dispatch(setBench(user)),
        setSquat: (user) => dispatch(setSquat(user)),
        setDead: (user) => dispatch(setDead(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (LoadingScreen);

