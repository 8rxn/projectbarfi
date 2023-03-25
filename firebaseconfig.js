// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeiMDtFLbp-S8uG4gAJ6LHD6sB8akSk00",
  authDomain: "projectbarfihack36.firebaseapp.com",
  projectId: "projectbarfihack36",
  storageBucket: "projectbarfihack36.appspot.com",
  messagingSenderId: "1084390457377",
  appId: "1:1084390457377:web:af43a2d2c55ac3f6f2a360"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);