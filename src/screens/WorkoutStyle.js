import { Container } from 'native-base';
import React from 'react'
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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
        route: "Home",
    },
];

const onPress = ({route, navigation}) =>{
    navigation.navigate(route);
};

const Item = ({ title, route, navigation }) => (
    <View>
        <TouchableOpacity style={styles.item} onPress={onPress({route, navigation})}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    </View>
    
);
const WorkoutStyle = ({navigation}) => {

    const renderItem = ({item}) =>(
        <Item title={item.title, item.route, navigation}/>
    );

    return(
        <Container>
            <FlatList>
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
            </FlatList>
        </Container>
    );
}
export default WorkoutStyle;

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            alignItems: 'center',
        },
        item:{
            marginRight:40,
            marginLeft:40,
            marginTop:10,
            paddingTop:20,
            paddingBottom:20,
            backgroundColor:'#68a0cf',
            borderRadius:10,
            borderWidth: 1,
            borderColor: '#fff'
        }
    }
);