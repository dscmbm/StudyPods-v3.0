// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBHXDkwe1wAA-fgPdU6wzOs82BK-RZhedM",

  authDomain: "job-portal-154c2.firebaseapp.com",

  projectId: "job-portal-154c2",

  storageBucket: "job-portal-154c2.appspot.com",

  messagingSenderId: "638715444682",

  appId: "1:638715444682:web:d0d697ca5787ffd588a333",

  measurementId: "G-3M42PR64GX"

};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export default {firebaseConfig}
export { firestore, app};