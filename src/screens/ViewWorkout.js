import {Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {viewExercises} from '../firebase/firebaseService';
import {workoutStyle} from '../styles';
import { connect } from 'react-redux';



const ViewWorkout = (props) => {
    const [exerciseList, setExerciseList] = useState([]);
    const {location, name} = props.route.params;
    const calculateWeight = (name, percentOfMax) =>{
        if(percentOfMax == null){
            return "";
        }
        let weight;
        if(name == "Bench Press"){
            weight = Math.ceil(percentOfMax * props.bench/5)* 5;
        }
        else if(name == "Squat"){
            weight = Math.ceil(percentOfMax * props.squat/5)* 5;
        }
        else if(name == "Deadlift"){
            weight = Math.ceil(percentOfMax * props.dead/5)* 5;
        }
        else{
            return "";
        }
        return "Weight: " + weight;
    }

	const setData = () =>{
        viewExercises(location).then((result) => {
            setExerciseList(result);
        });
	}
	const Item = ({ item }) => (
		<View style={workoutStyle.itemCol}>
			<Text style={{marginLeft: 35, fontSize: 24, textAlign:"center"}}>{item.name}</Text>
            <Text>Sets</Text>
            {item.sets.map((set,index) => (<Text>Set {index + 1} - {calculateWeight(item.name, set.percentOfMax)} Reps: {set.reps}</Text>))}
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
				 {name}
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

const mapStateToProps = (state) => {
    return {
        bench: state.maxesReducer.bench,
        squat: state.maxesReducer.squat,
        dead: state.maxesReducer.dead,
    }

}

export default connect(mapStateToProps) (ViewWorkout);