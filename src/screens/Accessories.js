import { Button } from 'native-base';
import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../styles'
import {getAccessory} from '../firebase/firebaseService'
import {addProgram} from '../firebase/firebaseAdd';



const Accessories = ({navigation, route}) => {
    const {tempId} = route.params;
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
        const program = {
            start: "2021/01/25",
            status: "deactivated",
            //change user to redux state
            user: "bruh",
            template: "jd2X8gfR8y6xo3lxxf1n",
            name: "Test Program",
        }
        addProgram(program);
        navigation.navigate("Home");
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

export default Accessories;