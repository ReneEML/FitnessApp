import React, {useEffect, useState} from 'react';
import {Text, SectionList, Image, View, SafeAreaView } from 'react-native';
import {workoutStyle} from '../styles'
import {getExercises} from '../firebase/firebaseService'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Workout = ({navigation}) => {
	const [exerciseList, setExerciseList] = useState([]);
	const setData = () =>{
		getExercises().then((result) => setExerciseList(result));
	}
	const Item = ({ item }) => (
		<TouchableOpacity style={workoutStyle.item} onPress={()=>navigation.navigate('RecordExcercise', {sets: item.sets, swag: item.name})}>
			<Image 
        source={{
            uri: "http://bodybuildingreviews.org/wp-content/uploads/2018/01/skinnyguyworkout-equipment-300x225.jpg"
        }} 
        style={{width: 80, height:80, borderRadius: 80 / 2, paddingLeft: 10, marginLeft: 10}} />
			<Text style={{marginLeft: 35, fontSize: 24, textAlign: "center"}}>{item.name}</Text>
		</TouchableOpacity>
	  );

	  useEffect(() => {
		setData();
	  }, []);
    return(
        <SafeAreaView>
			<Text>
				 Legs workout
			</Text>
            <FlatList
				data={exerciseList}
                keyExtractor={(item) => item.id}
                renderItem ={({item}) => 
                <Item item={item}/>
				}
            />
        </SafeAreaView>
    );
}

export default Workout;