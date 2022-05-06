// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:'AIzaSyCAb5VigwPhRg_s3PJIyITTnIr_xcMNxb8',
  authDomain:'laptop-store-f9369.firebaseapp.com',
  projectId:'laptop-store-f9369',
  storageBucket:'laptop-store-f9369.appspot.com',
  messagingSenderId:'318068474827',
  appId:'1:318068474827:web:49e3c9762ea1209ffe6c4e'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth =getAuth(app);

export default auth;


// npm install --save react-firebase-hooks

