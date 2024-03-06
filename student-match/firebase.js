import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyBiu0OQjMTCBg5BGnBxcEgw-BYbyb2xNc8",
    authDomain: "studentmatch-6d66a.firebaseapp.com",
    projectId: "studentmatch-6d66a",
    storageBucket: "studentmatch-6d66a.appspot.com",
    messagingSenderId: "546134291861",
    appId: "1:546134291861:web:fd45aeabeb7be0492e729c",
    measurementId: "G-P6B7Y80B9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);