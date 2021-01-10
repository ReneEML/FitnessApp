import connect from 'react-redux';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { Container, Form, Item, Button, Label, Input } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker'

const ProgramInfo = (props) => {
    const {tempID} = props.route.params;
    const [progName, setProgName] = useState('');
    const [chosenDate, setChosenDate] = useState(new Date());
    //const currentDate = new Date();
    //const maxDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());
    const navigate = () => {
        if(chosenDate != null && progName != ''){
            props.navigation.navigate("Accessories", {date: chosenDate, programName: progName, tempID: tempID});
        }
        else{
            Alert.alert("Please choose a name and start date!");
        }
    }

    const onChange = (event, selectedDate) => {
        setChosenDate(selectedDate);
    }
    return (
        <View style={styles.container}>
            <Item>
                <Label>
                    Enter Program Name
                    </Label>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(value) => setProgName(value)}
                    defaultValue={progName}
                />
            </Item>
            <View style={{ marginTop: '5%', alignItems: 'center', flexDirection: 'row' }}>
                <Text style={{ fontSize: 18 }}>Select Start Date: </Text>
                <DateTimePicker
                    style={{ width: "100%" }}
                    testID="dateTimePicker"
                    value={chosenDate}
                    mode={'date'}
                    display="default"
                    onChange={onChange}
                />
            </View>
            <TouchableOpacity style={styles.buttonGreen} 
            onPress={() => navigate()}> 
                <Text>Continue</Text>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignContent: "center",
        padding: 10
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
});

export default ProgramInfo;