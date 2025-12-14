// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXlX4D20HtV0ddC70phvPpJmjS7znOXek",
  authDomain: "poetarywebsite.firebaseapp.com",
  projectId: "poetarywebsite",
  storageBucket: "poetarywebsite.firebasestorage.app",
  messagingSenderId: "586689334258",
  appId: "1:586689334258:web:658f1100632ee256b3b96b",
  measurementId: "G-0TCD7L66HJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, googleProvider };
