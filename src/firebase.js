// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC0jq28Dvn04pxvPnEbpZqYcrYn2djFWdc",
    authDomain: "clone-bc18b.firebaseapp.com",
    projectId: "clone-bc18b",
    storageBucket: "clone-bc18b.appspot.com",
    messagingSenderId: "1057928529383",
    appId: "1:1057928529383:web:5d0ce51a9d1016f1846942",
    measurementId: "G-5DSMYY2KNM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth };