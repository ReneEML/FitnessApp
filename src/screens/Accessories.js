import { Button } from 'native-base';
import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../styles'
import {getAccessory} from '../firebase/firebaseService'
import {addProgram} from '../firebase/firebaseAdd';
import {connect} from 'react-redux';
import { setActiveProgram } from '../actions/activeProgram';



const Accessories = (props) => {
    const {date, programName, tempID} = props.route.params;
    const [shoulder, setShoulder] = useState([]);
    const [chest, setChest] = useState([]);

    const setData = () =>{
        getAccessory("shoulder").then((result) => setShoulder(result));
        getAccessory("chest").then((result) => setChest(result));
    }
    useEffect(() => {
		setData();
	  }, []);
    const accStyle = styles;
    const Excercise = ({image, name}) =>(
    <View style={accStyle.icon}>
        <Image 
            source={{
                uri: image
            }} 
            style={{width: 80, height:80, borderRadius: 80 / 2}} />
            <Text style ={accStyle.excerciseText}>{name}</Text>
    </View>
    );
    const renderExcercise = ({item}) => (
    <Excercise image = "http://bodybuildingreviews.org/wp-content/uploads/2018/01/skinnyguyworkout-equipment-300x225.jpg" name = {item}/>
    );

    const finishProgram = () => {
        let progStatus = "deactivated"
        if(props.programID == "" || props.programID == null){
            progStatus = "active"
        }
        const program = {
            start: date,
            status: progStatus,
            user: props.userID,
            template: tempID,
            name: programName,
        }
        if(progStatus == "active"){
            props.setActiveProgram(program);
        }
        addProgram(program);
        props.navigation.navigate("Home");
    }
    return(
        <SafeAreaView>
            <View>
                <Text>Shoulder Accessories</Text>
                <FlatList horizontal={true}
                    horizontal
                    data={shoulder}
                    renderItem = {renderExcercise}
                    keyExtractor={(index) => index + "_shoulder"}
                />
            </View>
            <View>
                <Text>Chest Accessories</Text>
                <FlatList horizontal={true}
                    horizontal
                    data={chest}
                    renderItem = {renderExcercise}
                    keyExtractor={(index) => index + "_shoulder"}
                />
            </View> 
            <TouchableOpacity style={styles.button} onPress={()=>finishProgram()}>
                <Text>Finish program</Text>
            </TouchableOpacity>
        </SafeAreaView>
        
    )
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

export default connect(mapStateToProps, mapDispatchToProps) (Accessories);