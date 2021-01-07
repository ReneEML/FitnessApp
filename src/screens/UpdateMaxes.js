import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, Keyboard} from 'react-native';
import {Container, Content, Header, Form, Imput, Item, Button, Label, Input} from 'native-base';
import GlobalContext from '../context/global';



const UpdateMaxes = ({navigation}) => {
    const user = useContext(GlobalContext);
    
    const [maxes, setMaxes] = useState({bench: null, squat: null, dead: null});

    const updateMax = () => {
        if(maxes.bench != null && maxes.dead != null && maxes.squat != null){
            user.maxes.bench = maxes.bench;
            user.maxes.squat = maxes.squat;
            user.maxes.dead = maxes.dead;
            navigation.navigate('WorkoutStyle');
        }
        else{
            console.log("Please enter a value for all!");
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

export default UpdateMaxes;