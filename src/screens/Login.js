import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Content, Header, Form, Imput, Item, Button, Label, Input} from 'native-base';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import * as Facebook from 'expo-facebook';
import * as Application from 'expo-application';
import * as GoogleSignIn from 'expo-google-sign-in';
import FbApp from '../firebase/firebaseConfig';

const LoginScreen = ({navigation}) => {
    navigation.setOptions({
        headerLeft:null
    });
    const [activeUser, setActiveUser] = useState(null)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signUpUser = (email, password) => {
        try{
            if(password.length < 6){
                return;
            }
            FbApp.auth().createUserWithEmailAndPassword(email, password)
        }
        catch(error){
            console.log(error.toString())
        }
    }

    const signInUser = (email, password) => {
        try{
            navigation.navigate('LoadingScreen');
            FbApp.auth().signInWithEmailAndPassword(email,password).then((user) =>{console.log(user)})
        }
        catch(error){
            console.log(error.toString())
        }
    }

    async function loginWithFacebook(){

        try{
            await Facebook.initializeAsync({
                appId: Application.applicationId,
              });
              const {
                type,
                token
              } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
              });
    
            if (type == 'success'){
                const credential = FbApp.auth.FacebookAuthProvider.credential(token);
                FbApp.auth().signInWithCredential(credential).catch((error) => {console.log(error)});
            }
        }
        catch({message}){
            console.log(message);
        }
    }
    return (
        <Container style={styles.container}>
            <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={email => setEmail(email)}
                    defaultValue={email}
                    />
                    
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={password => setPassword(password)}
                    defaultValue={password}
                    />
                    
                </Item>
                <Button style= {{ marginTop: 10}}
                full
                rounded
                success
                onPress={() => signInUser(email, password)}>
                    <Text>Login</Text>
                </Button>
                <Button style= {{ marginTop: 10}}
                full
                rounded
                primary
                disabled={true}
                onPress={() => loginWithFacebook()}>
                    <Text style={{color: 'white'}}>Sign In with Facebook</Text>
                </Button>
                <Button style= {{ marginTop: 10}}
                full
                rounded
                primary
                onPress={() => signUpUser(email, password)}>
                    <Text style={{color: 'white'}}>Sign Up</Text>
                </Button>
            </Form>
        </Container>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        justifyContent: "center",
        padding: 10
    },
});

export default LoginScreen;