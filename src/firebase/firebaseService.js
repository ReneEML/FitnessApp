import React from 'react'
import FbApp from './firebaseConfig'

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
    });

}

export {getAccessory, getExercises}