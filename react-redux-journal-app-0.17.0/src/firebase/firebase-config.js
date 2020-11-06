import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDa8AIiKiSysSDhDdKrjWCI7036iXmganY",
    authDomain: "react-curso-7662d.firebaseapp.com",
    databaseURL: "https://react-curso-7662d.firebaseio.com",
    projectId: "react-curso-7662d",
    storageBucket: "react-curso-7662d.appspot.com",
    messagingSenderId: "946017891460",
    appId: "1:946017891460:web:73fedbd90ebb8d80b6bed1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}

