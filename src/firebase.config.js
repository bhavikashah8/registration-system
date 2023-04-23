// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu4ROXZ-CxcuHt5mj2-3EtgwEcKwpXAEA",
  authDomain: "farmer-registration-97784.firebaseapp.com",
  projectId: "farmer-registration-97784",
  storageBucket: "farmer-registration-97784.appspot.com",
  messagingSenderId: "138168266592",
  appId: "1:138168266592:web:fdd4477897638fe57eb805",
  measurementId: "G-P23T8Z82EB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
