import React from 'react'
import FbApp from './firebaseConfig'

const addUser = (user) => {
    const db = FbApp.firestore();
    db.collection("Users").doc(user.id).set(user).catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

const updateUser = (id, update) => {
    const db = FbApp.firestore();
    db.collection("Users").doc(id).update(update).catch(function(error) {
        console.error("Error updating document: ", error);
    });
}

const addProgram = (program) => {
    const db = FbApp.firestore();
    db.collection("Programs").add(program).catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

const updateStatus = (id, update) => {
    const db = FbApp.firestore();
    db.collection("Programs").doc(id).update(update).catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

export { addUser, updateUser, addProgram, updateStatus }