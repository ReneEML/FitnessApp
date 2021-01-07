import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, FlatList, TouchableOpacity, Keyboard} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';
import FbApp from '../firebase/firebaseConfig';
import {workoutStyle} from '../styles';
import {Container, Content, Header, Form, Imput, Item, Button, Label, Input} from 'native-base';

const RecordExcercise = ({navigation, route}) => {
    const {sets, swag} = route.params;
    const [setList, setSetList] = useState([]);
    const [inputs, setInputs] = useState([]);
    const [listIndex, setListIndex] = useState(0)
    const Item = ({ item, index, style, edit }) => (
		<View style={style}>
            <Text >{index + 1}</Text>
            <TextInput
                    style={{fontSize:24, marginLeft:35, minWidth: 24, backgroundColor: 'grey', textAlign:'center'}}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={text => inputs[index].reps = text}
                    clearTextOnFocus = {true}
                    defaultValue={inputs[index].reps}
                    keyboardType="number-pad"
                    returnKeyLabel='Done' 
                    returnKeyType='done' 
                    onSubmitEditing={Keyboard.dismiss}
                    maxLength={2}
                    editable={!edit}
                    
                    
                    />
            <Text >reps</Text>
        </View>
      );
    const getSets = () =>{
        setSetList(sets);
        const input = []
        for(let i = 0; i < sets.length; i++){
            let set = {
                reps: sets[i].reps,
                weight: null,
            }
            input.push(set);
        }
        setInputs(input);

    }
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
                keyExtractor={(index) => "stsk_" + index}
                renderItem ={({item, index}) =>{
                    const logged = item.logged === true ? workoutStyle.itemLogged : workoutStyle.item
                    return(
                        <Item item={item.reps} index={index} style ={logged} edit={item.logged}/>
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