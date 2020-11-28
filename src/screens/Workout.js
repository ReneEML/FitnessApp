import React from 'react';
import {Text, SectionList, Image, View, SafeAreaView } from 'react-native';
import {workoutStyle} from '../styles'
const DATA = [
        {
            excercise: "Squat",
            data:[
                {	
                    set:"1",
                    reps: "6"
                },
                {
                    set:"2",
                    reps: "6"
                },
                {
                    set:"3",
                    reps: "6"
                },
                {
                    set:"4",
                    reps: "6"
                }
            ]
        },
        {
			excercise: "Deadlift",
			data:[
				{	
					set:"1",
					reps: "6"
				},
				{
					set:"2",
					reps: "6"
				},
			]
			},
			{
			excercise: "Optional Legs 1",
			data:[
				{	
					set:"1",
					reps: "6"
				},
				{
					set:"2",
					reps: "6"
				},
				{
					set:"3",
					reps: "6"
				},
				{
					set:"4",
					reps: "6"
				}
			]
			},
			{
			excercise: "Optional Legs 2",
			data:[
				{	
					set:"1",
					reps: "6"
				},
				{
					set:"2",
					reps: "6"
				},
				{
					set:"3",
					reps: "6"
				},
				{
					set:"4",
					reps: "6"
				}
			]
			},
];


const Item = ({ item }) => (
    <View style={workoutStyle.item}>
      <Text style={workoutStyle.title}>Set: {item.set} Reps: {item.reps}</Text>
    </View>
  );
    
const Workout = () =>{
    return(
        <SafeAreaView>
            <SectionList
                sections = {DATA}
                keyExtractor={(item, index) => item + index}
                renderItem ={({item}) => 
                <Item item={item}/>
                }
                renderSectionHeader={({ section: { excercise } }) => (
                    <Text style={workoutStyle.header}>{ excercise }</Text>
                  )}

            />
        </SafeAreaView>
    );
}

export default Workout;