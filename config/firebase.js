// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import {initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'

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

// if (typeof window !== "undefined") {
//   const appCheck = initializeAppCheck(app, {
//     provider: new ReCaptchaV3Provider('6LfLNGQiAAAAAGSiBYefV7S-0petPqzK_Zn7_t7T'),

//     // Optional argument. If true, the SDK automatically refreshes App Check
//     // tokens as needed.
//     isTokenAutoRefreshEnabled: true
//   });

// }

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
 