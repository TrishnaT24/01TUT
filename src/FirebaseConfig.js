import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyArAVVtl6rgzl1_DiB6SMGDvVCJsysIWN4",
  authDomain: "emailpasswordlogin-e0d82.firebaseapp.com",
  projectId: "emailpasswordlogin-e0d82",
  storageBucket: "emailpasswordlogin-e0d82.appspot.com",
  messagingSenderId: "80664940709",
  appId: "1:80664940709:web:c311c8d42fa118e1ae7d4c"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
async function createCartForUser(uid) {
  const cartRef = doc(db, "carts", uid); // Reference to the user's cart document
  await setDoc(cartRef, { /* Initial cart data */ }); // Set initial cart data (if any)
}

async function handleAuthentication() {
  // Get the currently signed-in user
  const user = auth.currentUser;

  if (user) {
    // User is signed in
    const uid = user.uid;
    console.log("User UID:", uid);

    // Create a cart for the user in the database
    await createCartForUser(uid);

    // Perform any other tasks related to user authentication
  } else {
    // No user is signed in
    console.log("No user signed in.");
  }
}

handleAuthentication().then(() => {
  // Continue with other tasks, if needed
});
export { auth, db };

