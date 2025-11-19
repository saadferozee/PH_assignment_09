// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4cXpXGDkDricTvEA9hSbra1-h9Chyozo",
    authDomain: "bd-toys-by-saadferozee.firebaseapp.com",
    projectId: "bd-toys-by-saadferozee",
    storageBucket: "bd-toys-by-saadferozee.firebasestorage.app",
    messagingSenderId: "629443227220",
    appId: "1:629443227220:web:c7f3f68fe22cbdfc46c7c1",
    measurementId: "G-NVY84L2RWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth()
export { app, analytics };