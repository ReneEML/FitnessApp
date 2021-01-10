import React, {useState, useEffect, useContext} from 'react';
import { render } from 'react-dom';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {getPrograms} from '../firebase/firebaseService';
import {updateStatus} from '../firebase/firebaseAdd';
import { connect } from 'react-redux';
import {setActiveProgram} from '../actions/activeProgram'
const SelectProgram = (props) => {
    //const [shoulder, setShoulder] = useState([]);
    const [programs, setPrograms] = useState([]);
    const Item = ({id, template, name, start}) =>(
        <TouchableOpacity style={styles.button} onPress={()=>activate(id, template, start)}>
            <Text>
                Program Name: {name}
            </Text>
            <Text>
                ID: {id}
            </Text>
        </TouchableOpacity>
    );
    const renderItem = ({item}) =>(
        <Item id={item.id} template={item.template} name={item.name} start={item.start}/>
    );
    const activate = (id, template, start) => {
        if(id != props.programID){
            if(props.programID != "none" || props.programID != null || props.programID != ""){
                updateStatus(props.programID, {status: "deactivated"});
            }
            updateStatus(id, {status: "active"});
            let active = {
                id: id,
                start: start,
                template: template
            }
            props.setActiveProgram(active);
            props.navigation.navigate("Home");
        }
    }
    const setData = () =>{
        getPrograms(props.userID).then((result) => {
            setPrograms(result);
            console.log(programs);
            console.log(result);
        });
    }
    useEffect(() => {
		setData();
      }, []);
    return(
        <View>
            <FlatList
            data={programs}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        email: state.userReducer.email,
        userID: state.userReducer.id,
        name: state.userReducer.name,
        programID: state.activeProgramReducer.id,
        start: state.activeProgramReducer.start,
        template : state.activeProgramReducer.template,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setActiveProgram: (program) => dispatch(setActiveProgram(program))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SelectProgram);

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
        alignItems: 'center',
      },
      buttonGreen:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor:'#32CD32',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center'
      },
})