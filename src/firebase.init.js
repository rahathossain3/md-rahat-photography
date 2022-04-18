// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2CyEBJ6swLyRjLXKJw_44HQuQ7BOtyYA",
    authDomain: "md-rahat-photography.firebaseapp.com",
    projectId: "md-rahat-photography",
    storageBucket: "md-rahat-photography.appspot.com",
    messagingSenderId: "690183004518",
    appId: "1:690183004518:web:6d2f9931ad5e2d7060a8a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

