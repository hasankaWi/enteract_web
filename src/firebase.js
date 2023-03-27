// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyAfkHXKcRU7Kact1v_0V32IfLW7TBynYSA",

    authDomain: "enteracteweb.firebaseapp.com",

    projectId: "enteracteweb",

    storageBucket: "enteracteweb.appspot.com",

    messagingSenderId: "122447370112",

    appId: "1:122447370112:web:aa89c89551ad650b21d365",

    measurementId: "G-5489BM6W3Z"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);