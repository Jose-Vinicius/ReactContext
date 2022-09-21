import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDw3FfTM-gNIIFxhKHDZFPqbkYon1PQDAg",
  authDomain: "contextproject-674c9.firebaseapp.com",
  projectId: "contextproject-674c9",
  storageBucket: "contextproject-674c9.appspot.com",
  messagingSenderId: "83430588368",
  appId: "1:83430588368:web:ca4e826b5a3fbc30fb43d5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)