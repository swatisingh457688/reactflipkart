// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8ChGYbz9xC_05oYRJ7Q6_lJee-Lox1vA",
    authDomain: "flipkart-317ec.firebaseapp.com",
    projectId: "flipkart-317ec",
    storageBucket: "flipkart-317ec.appspot.com",
    messagingSenderId: "1036200893568",
    appId: "1:1036200893568:web:9706f90209c61a3ce81a65",
    measurementId: "G-HCF6J5YP0N"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app