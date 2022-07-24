// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbq_NBf9GJE4UYHtOF1pykILiUM1ulW_A",
  authDomain: "marchass11.firebaseapp.com",
  projectId: "marchass11",
  storageBucket: "marchass11.appspot.com",
  messagingSenderId: "186935059850",
  appId: "1:186935059850:web:db2159591bf0698c8fd473",
  measurementId: "G-E972CDYYRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, 'marchass11');
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
 
 
