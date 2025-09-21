import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSvTW-IVxRwJkKoVRfBI-ZMCgEumVKYXs",
  authDomain: "ecomm-app-cd3c4.firebaseapp.com",
  projectId: "ecomm-app-cd3c4",
  storageBucket: "ecomm-app-cd3c4.firebasestorage.app",
  messagingSenderId: "717762103138",
  appId: "1:717762103138:web:a46212fbcd4d8e52768e3b",
  measurementId: "G-BD8FN2LD2R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

 