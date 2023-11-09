// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDH9KQpdSkuEeIFWJeTfPVGtKX8R4WWoQA",
    authDomain: "team14-94cd6.firebaseapp.com",
    projectId: "team14-94cd6",
    storageBucket: "team14-94cd6.appspot.com",
    messagingSenderId: "385386877423",
    appId: "1:385386877423:web:452bf27b4a0ea54e9f261a",
    measurementId: "G-HM77V52LKV"
  }; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { app, db }
