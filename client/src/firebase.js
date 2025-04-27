// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-3fde4.firebaseapp.com",
  projectId: "mern-real-estate-3fde4",
  storageBucket: "mern-real-estate-3fde4.firebasestorage.app",
  messagingSenderId: "156412476520",
  appId: "1:156412476520:web:6eedd2234cb09837bdcfdd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);