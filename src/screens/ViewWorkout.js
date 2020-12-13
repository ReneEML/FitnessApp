import {Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {getExercises, getSets} from '../firebase/firebaseService'
import {workoutStyle} from '../styles'

const ViewWorkout = ({navigation}) => {
	const [exerciseList, setExerciseList] = useState([]);
	const setData = () =>{
        getExercises().then((result) => {
            setExerciseList(result);
        });
	}
	const Item = ({ item }) => (
		<View style={workoutStyle.itemCol}>
			<Text style={{marginLeft: 35, fontSize: 24, textAlign:"center"}}>{item.name}</Text>
            <Text>Sets</Text>
            {item.sets.map((set,index) => (<Text>Set {index + 1}: Weight: {set.weight} Reps: {set.reps}</Text>))}
		</View>
      );
      const Set = ({item, index}) => (
        <View>
            <Text>Set: {index + 1} Reps: {item.reps}</Text>
        </View>
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


export default ViewWorkout;