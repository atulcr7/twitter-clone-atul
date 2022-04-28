// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVEy0_Tt6cg-Ldu-Gz8tOR4uycUrwYOzw",
    authDomain: "twitter-f3c3e.firebaseapp.com",
    projectId: "twitter-f3c3e",
    storageBucket: "twitter-f3c3e.appspot.com",
    messagingSenderId: "105135849726",
    appId: "1:105135849726:web:de467a196e0d31911c65af"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };