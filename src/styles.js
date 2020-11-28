import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    excerciseText:{
        textAlign:"center"
    },
    icon:{
        width:100,
        alignItems: 'center'
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
    }
})

const workoutStyle = StyleSheet.create({
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
      },
      header: {
        fontSize: 32,
        backgroundColor: "#fff"
      },
      title: {
        fontSize: 24
      }
})

export { styles, workoutStyle }