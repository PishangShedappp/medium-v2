// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from '@firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbHgCh3-3q9ArxpFKE9PNRYKuzgGLpMyk",
  authDomain: "medium-v2-8d3c4.firebaseapp.com",
  projectId: "medium-v2-8d3c4",
  storageBucket: "medium-v2-8d3c4.appspot.com",
  messagingSenderId: "33405369241",
  appId: "1:33405369241:web:a437d082d7a003ce5c3108"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db}