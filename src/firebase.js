
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAjFqUiAFNF9Yp7sGZ7kMq964I8ycrK8Ug",
  authDomain: "myhealthcare-59333.firebaseapp.com",
  projectId: "myhealthcare-59333",
  storageBucket: "myhealthcare-59333.appspot.com",
  messagingSenderId: "35550645353",
  appId: "1:35550645353:web:9fd078e3fb6305efc666f8",
  measurementId: "G-2210LHKCHH"
};


const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore();

export {db};