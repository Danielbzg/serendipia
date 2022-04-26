// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3GuRpowQdLcVffy3INjSouTsfX0PQxro",
  authDomain: "ecommercereact-cf4a7.firebaseapp.com",
  projectId: "ecommercereact-cf4a7",
  storageBucket: "ecommercereact-cf4a7.appspot.com",
  messagingSenderId: "1007144445297",
  appId: "1:1007144445297:web:6b1ea650474382585182d0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)