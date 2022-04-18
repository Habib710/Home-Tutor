// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByWeP_Hk3thg1srTElhtnOnLcsNm7C3VA",
  authDomain: "home-tutor-b35fc.firebaseapp.com",
  projectId: "home-tutor-b35fc",
  storageBucket: "home-tutor-b35fc.appspot.com",
  messagingSenderId: "476471191274",
  appId: "1:476471191274:web:7cb1378d5a5aede48fd993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;