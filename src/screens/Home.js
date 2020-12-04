import React from 'react';
import{View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FbApp from '../firebase/firebaseConfig'

const Home = ({navigation}) =>{
    const onPress = () =>{
        navigation.navigate('WorkoutStyle');
    }
    const startWorkout = () =>{
        navigation.navigate('Workout');
    }
    var user = FbApp.auth().currentUser;
    navigation.setOptions({
        headerLeft:null
    });
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>Create program</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={startWorkout}>
                <Text>Start Workout</Text>
            </TouchableOpacity>
        </View>
        //<TouchableOpacity style={styles.button} onPress={navigation.navigate('WorkoutStyle')}/>
    );
}
export default Home;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    button:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center'
      },
      buttonGreen:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#32CD32',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center'
      },
})