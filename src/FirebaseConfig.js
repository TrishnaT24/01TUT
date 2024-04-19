import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore,getDoc,doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyArAVVtl6rgzl1_DiB6SMGDvVCJsysIWN4",
  authDomain: "emailpasswordlogin-e0d82.firebaseapp.com",
  projectId: "emailpasswordlogin-e0d82",
  storageBucket: "emailpasswordlogin-e0d82.appspot.com",
  messagingSenderId: "80664940709",
  appId: "1:80664940709:web:c311c8d42fa118e1ae7d4c"
};
const app= initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth =getAuth(app);

