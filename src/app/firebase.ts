// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "happy-wedding-app-26013.firebaseapp.com",
    projectId: "happy-wedding-app-26013",
    storageBucket: "happy-wedding-app-26013.appspot.com",
    messagingSenderId: "176300431064",
    appId: "1:176300431064:web:5ae389d521f00dddeda9ad",
    measurementId: "G-R27SZH4TP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);