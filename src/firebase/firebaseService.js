import React from 'react'
import FbApp from './firebaseConfig'

const getAccessory = (excercise) =>{
    let db = FbApp.firestore();
    const excercises = [];
    return db.collection("Excercises")
    .where("muscle", "==", excercise)
    .where("type", "==", "accessory")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc)=>{
            excercises.push(doc.data().name);
        });
        console.log(excercises.length);
        return excercises;
    });
    
}

export {getAccessory}