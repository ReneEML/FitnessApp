import React from 'react'
import FbApp from './firebaseConfig'
import * as firebase  from 'firebase';

const getAccessory = (excercise) =>{
    const db = FbApp.firestore();
    const excercises = [];
    return db.collection("Excercises")
    .where("muscle", "==", excercise)
    .where("type", "==", "accessory")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc)=>{
            excercises.push(doc.data().name);
        });
        return excercises;
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    
}

const getExercises = () =>{
    const db = FbApp.firestore();
    let exercises = [];
    return db.collection("/WorkoutTemplates/ksFVhOzibfFnsJzm8LUZ/excercises").orderBy("order").get()
    .then((querySnapshot) =>{
        querySnapshot.forEach((doc) =>{
            let exercise = {
                name: doc.data().excercise,
                id: doc.id,
                sets: doc.data().sets
            }
            exercises.push(exercise);

        });
        return exercises;
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

}

const getWorkouts = (template) =>{
    const db = FbApp.firestore();
    let workouts = [];
    return db.collection("ProgramTemplates")
    .doc(template).collection("Workout")
    .orderBy("dateIndex").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let workout = {
                name: doc.data().name,
                id: doc.id,
                date: doc.data().dateIndex
            }
            workouts.push(workout);
        });
        return workouts;
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

const viewExercises = (location) => {
    const db = FbApp.firestore();
    let exercises = [];
    return db.collection("/ProgramTemplates/jd2X8gfR8y6xo3lxxf1n/Workout/")
    .doc(location).collection("Exercises").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let exercise = {
                name: doc.data().name,
                id:  doc.id,
                sets: doc.data().sets
            }
            exercises.push(exercise);
        });
        return exercises;
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}


const getUser = async (id) => {
    const db = FbApp.firestore();
    let  activeUser  = null;
    return db.collection("Users").where("id", "==", id).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            activeUser = doc.data();
        });
        return activeUser;
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

const getActiveProgram = async (id) => {
    const db = FbApp.firestore();
    let  activeProgram  = null;
    console.log("ID: " + id);
    return db.collection("Programs")
    .where("user","==", id)
    .where("status", "==", "active")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            activeProgram = {
                id: doc.id,
                start: (new Date(doc.data().start.seconds * 1000)).toDateString(),
                template: doc.data().template,
            }
            console.log(activeProgram);
        });
        return activeProgram;
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}
const getPrograms = (user) => {
    const db = FbApp.firestore();
    let  programs  = [];
    return db.collection("Programs").where("user", "==", user).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let program = {
                name: doc.data().name,
                id: doc.id,
                start: (new Date(doc.data().start.seconds * 1000)).toDateString(),
                template: doc.data().template
            };
            //console.log(program);
            programs.push(program);
        });
        return programs;
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}


export {getAccessory, getExercises, getWorkouts, viewExercises, getUser, getActiveProgram, getPrograms}