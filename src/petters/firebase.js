import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAswmnW5eIBKxKYsoGz9pk2ic4JVYgyjPE",
  authDomain: "webbers-97659.firebaseapp.com",
  projectId: "webbers-97659",
  storageBucket: "webbers-97659.appspot.com",
  messagingSenderId: "984811931809",
  appId: "1:984811931809:web:fa7f869b1832f0867dc8e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db= getFirestore();