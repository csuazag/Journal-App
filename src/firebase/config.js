// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi2ubuU3dcVztRl3MHu4x4M8hkyYsvD9o",
  authDomain: "react-courses-ed171.firebaseapp.com",
  projectId: "react-courses-ed171",
  storageBucket: "react-courses-ed171.appspot.com",
  messagingSenderId: "648905421449",
  appId: "1:648905421449:web:b9e2e18d788e1195924c58",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
