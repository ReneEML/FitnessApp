import React from 'react';
import{View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import defaultProject from '../firebase/firebaseConfig';
import FbApp from '../firebase/firebaseConfig';

const LoadingScreen = ({navigation}) =>{
    navigation.setOptions({
        headerLeft:null
    });
    const checkifLoggedIn = () =>{
        FbApp.auth().onAuthStateChanged(function(user){
            if(user)
            {
                navigation.navigate('Home');
            }
            else
            {
                navigation.navigate('LoginScreen');
            }
        })
    }

    checkifLoggedIn();

    return(
        <View style={styles.container}>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    );
}
export default LoadingScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    }
})
