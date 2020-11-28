import { Button } from 'native-base';
import React from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../styles'

const DATA = [
    {
    data:[
        {
            id: "1",
            image: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
            name: "One Arm Shoulder Press"
        },
        {
            id: "2",
            image: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
            name: "Overhead Press"
        },
        {
            id: "3",
            image: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
            name: "Rear delt flies"
        },
        {
            id: "4",
            image: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
            name: "Side delt flies"
        },
        {
            id: "5",
            image: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
            name: "T pose"
        },
        {
            id: "6",
            image: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
            name: "Hitting the folks"
        },
    ],
    group:"Shoulder"
},
{
    data:[
        {
            id: "7",
            image: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
            name: "Incline Flies"
        },
        {
            id: "8",
            image: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
            name: "Incline Dumbell press"
        },
        {
            id: "9",
            image: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
            name: "Decline Dumbel press"
        },
        {
            id: "10",
            image: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
            name: "Close Grip Bench"
        },
        {
            id: "11",
            image: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
            name: "Dab"
        },
        {
            id: "12",
            image: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png",
            name: "Dips"
        },
    ],
    group:"Chest"
}
]
const accStyle = styles
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
    <Excercise image = {item.image} name = {item.name}/>
);
const lists = DATA.map(listInfo =>(        
    <View>
    <Text>{listInfo.group}</Text>
    <FlatList horizontal={true}
        horizontal
        data={listInfo.data}
        renderItem = {renderExcercise}
        keyExtractor={item => item.id}
    />
    </View>
     
));
const Accessories = ({navigation}) => {
    return(
        <SafeAreaView>
            {lists}
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Workout')}>
                <Text>Finish program</Text>
            </TouchableOpacity>
        </SafeAreaView>
        
    )
}

export default Accessories;