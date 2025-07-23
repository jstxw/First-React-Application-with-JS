// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZHNgtXpWr8HOHOvcfG4GQ3qnEFapzXIM",
  authDomain: "moviefinder-ecc61.firebaseapp.com",
  projectId: "moviefinder-ecc61",
  storageBucket: "moviefinder-ecc61.firebasestorage.app",
  messagingSenderId: "602697829880",
  appId: "1:602697829880:web:2388a2212570fd324e9a0d",
  measurementId: "G-BPT0WHP8TS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider(); //handle auth through google
export const db = getFirestore(app);
