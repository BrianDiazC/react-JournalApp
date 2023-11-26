
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7s8MVgcmDipOfv1QPVCTPjgIuvmf4aJc",
  authDomain: "react-app-89e19.firebaseapp.com",
  projectId: "react-app-89e19",
  storageBucket: "react-app-89e19.appspot.com",
  messagingSenderId: "187566286983",
  appId: "1:187566286983:web:6283dc9a1f48bd6b087022"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp); 
export const FirebaseDB = getFirestore( FirebaseApp);
