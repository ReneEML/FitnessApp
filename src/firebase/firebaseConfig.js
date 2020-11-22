import * as firebase from 'firebase'
firebaseConfig = {
    apiKey: "AIzaSyD-Q4nUQNkjver7opoKwz4GIfCcSrIfrPs",
    authDomain: "workoutlogger-13055.firebaseapp.com",
    databaseURL: "https://workoutlogger-13055.firebaseio.com",
    projectId: "workoutlogger-13055",
    storageBucket: "workoutlogger-13055.appspot.com",
    messagingSenderId: "113599939556",
    appId: "1:113599939556:web:def34327ad03c7c9e1fdf1",
    measurementId: "G-966YBY3G2K"
  };

var FbApp = firebase.initializeApp(firebaseConfig)

export default FbApp;
