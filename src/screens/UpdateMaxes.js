import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, Keyboard, Alert} from 'react-native';
import {Container, Form,  Item, Button, Label, Input} from 'native-base';
import { updateUser } from '../firebase/firebaseAdd';
import {setBench,setSquat, setDead} from '../actions/maxes';
import { connect } from 'react-redux';

//To Do: add redux state to this component
const UpdateMaxes = (props) => {
    
    const [maxes, setMaxes] = useState({bench: null, squat: null, dead: null});
    const updateMax = () => {
        if(maxes.bench != null && maxes.dead != null && maxes.squat != null){
            props.setSquat(maxes.setSquat);
            props.setBench(maxes.bench);
            props.setDead(maxes.dead);
            const update = {
                maxes:{
                    squat: maxes.squat,
                    bench: maxes.bench,
                    dead: maxes.dead
                }
            }
            updateUser(props.userID, update);
            props.navigation.navigate('WorkoutStyle');
        }
        else{
            Alert.alert("Please enter a value for all three lifts.")
        }
    }
    return(
            <Container style = {styles.container}>
                <Form>
                <Item floatingLabel>
                    <Label>Bench Press</Label>
                    <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(bench) => maxes.bench = bench}
                    defaultValue={maxes.bench}
                    returnKeyLabel='Done' 
                    returnKeyType='done' 
                    onSubmitEditing={Keyboard.dismiss} 
                    keyboardType="number-pad"
                    />
                </Item>
                <Item floatingLabel>
                    <Label>Squat</Label>
                    <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={squat => maxes.squat = squat}
                    defaultValue={maxes.squat}
                    returnKeyLabel='Done' 
                    returnKeyType='done' 
                    onSubmitEditing={Keyboard.dismiss} 
                    keyboardType="number-pad"
                    />
                </Item>
                <Item floatingLabel>
                    <Label>Deadlift</Label>
                    <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={dead => maxes.dead = dead}
                    defaultValue={maxes.dead}
                    returnKeyLabel='Done' 
                    returnKeyType='done' 
                    onSubmitEditing={Keyboard.dismiss} 
                    keyboardType="number-pad"
                    />
                </Item>
                <Button style= {{ marginTop: 10}}
                full
                rounded
                success
                onPress={() => updateMax()}>
                    <Text>Submit</Text>
                </Button>
                </Form>
            </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        justifyContent: "center",
        padding: 10
    },
});

const mapStateToProps = (state) => {
    return {
        userID: state.userReducer.id,
        squat: state.maxesReducer.bench,
        bench: state.maxesReducer.bench,
        dead: state.maxesReducer.dead
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setBench: (weight) => dispatch(setBench(weight)),
        setSquat: (weight) => dispatch(setSquat(weight)),
        setDead: (weight) => dispatch(setDead(weight))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UpdateMaxes); 