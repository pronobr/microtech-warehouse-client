// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUUPwvE5wL9B2nds4OCg3cUtQ4j19K0KY",
  authDomain: "assign-eleven.firebaseapp.com",
  projectId: "assign-eleven",
  storageBucket: "assign-eleven.appspot.com",
  messagingSenderId: "892999144235",
  appId: "1:892999144235:web:02156d82e1068f18ceeb6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth =getAuth(app);

export default auth;


// npm install --save react-firebase-hooks

