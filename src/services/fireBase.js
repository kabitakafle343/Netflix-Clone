// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNs7PRMoW1mQtUfPGHWaSkJGGa8TauJuU",
  authDomain: "netflix-website-edc19.firebaseapp.com",
  projectId: "netflix-website-edc19",
  storageBucket: "netflix-website-edc19.appspot.com",
  messagingSenderId: "961731717206",
  appId: "1:961731717206:web:730a016298ba998b6573f7",
  measurementId: "G-BY7TCEFNDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const db=getFirestore(app);
