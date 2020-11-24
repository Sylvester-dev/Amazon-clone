import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyAxtYylyOH0gsKHHQb8Q9xQvylBtPzWnwE",
    authDomain: "clone-42307.firebaseapp.com",
    databaseURL: "https://clone-42307.firebaseio.com",
    projectId: "clone-42307",
    storageBucket: "clone-42307.appspot.com",
    messagingSenderId: "449562130115",
    appId: "1:449562130115:web:aaa851deb9f9473232d476",
    measurementId: "G-PNN14MMP1P",
  
});

const auth = firebase.auth();

export {auth};