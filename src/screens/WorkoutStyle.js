import { Container } from 'native-base';
import React from 'react'
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView,StatusBar, Alert} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const WorkoutStyle = ({navigation}) => {
    const Home = () =>{
        navigation.navigate('Home');
    }
    const DATA = [
        {
            id: "health_style",
            title: "Health",
            route: "Home",
    
        },
        {
            id: "bodybuilding_style",
            title: "Bodybuilding",
            route: "Home",
        },
        {
            id: "powerlifting_style",
            title: "Powerlifting",
            route: "Accessories",
        },
        {
            id: "custom_style",
            title: "Custom",
            route: "Home",
        }
    ];
    const onPress = ({route}) =>{
        navigation.navigate(route);
    };
    const Item = ({title, route}) => (
        <View>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(route)}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
        
    );

    const renderItem = ({ item }) => (
        <Item title={item.title}  route={item.route}/>
      );
    
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
}
export default WorkoutStyle;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      marginRight:40,
      marginLeft:40,
      marginTop:10,
      paddingTop:20,
      paddingBottom:20,
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff',
      alignItems: 'center'
    },
    title: {
      fontSize: 32,
    },
  });