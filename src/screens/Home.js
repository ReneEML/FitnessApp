import React from 'react';
import{View, Text, StyleSheet} from 'react-native';
import FbApp from '../firebase/firebaseConfig'

const Home = ({navigation}) =>{
    var user = FbApp.auth().currentUser;
    navigation.setOptions({
        headerLeft:null
    });
    return(
        <View>
        <Text>Hello {user.email}</Text> 
        </View>
    );
}
export default Home;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    }
})