// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADbSfH0nq7GoFTgOoqBz62UsgzaDvMlwM",
  authDomain: "phone-login-377c6.firebaseapp.com",
  projectId: "phone-login-377c6",
  storageBucket: "phone-login-377c6.appspot.com",
  messagingSenderId: "1014833311073",
  appId: "1:1014833311073:web:9333f76ecba369a2622920",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app, getAuth, RecaptchaVerifier, signInWithPhoneNumber };
