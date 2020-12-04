import React, {useEffect, useState} from 'react';
import {Text, SectionList, Image, View, SafeAreaView } from 'react-native';
import {workoutStyle} from '../styles'
import FbApp from '../firebase/firebaseConfig'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Workout = ({navigation}) => {
	const db = FbApp.firestore();

	const [excerciseList, setExcerciseList] = useState([]);

	const getWorkout = () =>{
		let excercises = [];
		return db.collection("/WorkoutTemplates/ksFVhOzibfFnsJzm8LUZ/excercises").orderBy("order").get()
		.then((querySnapshot) =>{
			querySnapshot.forEach((doc) =>{
				let excercise = {
					name: doc.data().excercise,
					id: doc.id
				}
				excercises.push(excercise);
	
			});
			setExcerciseList(excercises);
		});
	
	}
	
	const Item = ({ item }) => (
		<TouchableOpacity style={workoutStyle.item} onPress={()=>navigation.navigate('RecordExcercise', {document: item.id, swag: item.name})}>
			<Image 
        source={{
            uri: "http://bodybuildingreviews.org/wp-content/uploads/2018/01/skinnyguyworkout-equipment-300x225.jpg"
        }} 
        style={{width: 80, height:80, borderRadius: 80 / 2, paddingLeft: 10, marginLeft: 10}} />
			<Text style={{marginLeft: 35, fontSize: 24, textAlign: "right"}}>{item.name}</Text>
		</TouchableOpacity>
	  );

	  useEffect(() => {
		getWorkout();
	  }, []);
    return(
        <SafeAreaView>
			<Text>
				 Legs workout
			</Text>
            <FlatList
				data={excerciseList}
                keyExtractor={(item) => item.id}
                renderItem ={({item}) => 
                <Item item={item}/>
				}
            />
        </SafeAreaView>
    );
}

export default Workout;