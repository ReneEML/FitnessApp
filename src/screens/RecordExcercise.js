import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import { set } from 'react-native-reanimated';
import FbApp from '../firebase/firebaseConfig'
import {workoutStyle} from '../styles'

const RecordExcercise = ({navigation, route}) => {
    const {document, swag} = route.params;
    const [setList, setSetList] = useState([]);
    const [listIndex, setListIndex] = useState(0)
    const db = FbApp.firestore();
    const getSets = () =>{
        let sets = [];
        let first = true;
        return db.collection("/WorkoutTemplates/ksFVhOzibfFnsJzm8LUZ/excercises")
        .doc(document).collection('sets').orderBy('set')
        .get()
        .then((querySnapshot) =>{
            querySnapshot.forEach((doc)=>{
                    let set = {
                        id: doc.id,
                        reps: doc.data().reps,
                        logged: false
                    }
                sets.push(set);
            });
            setSetList(sets);
        });
    
    }
    const Item = ({ item, index, style }) => (
		<View style={style}>
            <Text style={{marginLeft: 35, fontSize: 24, textAlign: "center"}}>Set: {index} Reps: {item}</Text>
        </View>
      );
    const LogSet = () =>{

        
        setList[listIndex].logged = true;
        setListIndex(listIndex + 1);
        if(listIndex >= setList.length){

        }
    }
    useEffect(() => {
		getSets();
	  }, []);
    return(
        <SafeAreaView>
            <Text>{swag} sets</Text>
                <FlatList
                extraData={listIndex}
				data={setList}
                keyExtractor={(item) => item.id}
                renderItem ={({item, index}) =>{
                    const logged = item.logged === true ? workoutStyle.itemLogged : workoutStyle.item
                    return(
                        <Item item={item.reps} index={index + 1} style ={logged}/>
                    );
                }
                
				}
            />
            {listIndex < setList.length ?
            <TouchableOpacity style={workoutStyle.button} onPress={()=>LogSet()}>
                <Text style={workoutStyle.title}>Log Set</Text>
            </TouchableOpacity>
            : null}
        </SafeAreaView>
    );
}

export default RecordExcercise;