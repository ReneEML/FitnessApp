import React from 'react'
import FbApp from './firebaseConfig'

const  getAccessory = (excercise) =>{
    let db = FbApp.firestore();
    let excercises = [];
    db.collection("Excercises").where("muscle", "==", excercise).where("type", "==", "accessory").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc)=>{
            console.log(doc);
            excercises.push(doc.name);
        });
    });
    return excercises;
}

export {getAccessory}