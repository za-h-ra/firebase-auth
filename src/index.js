import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4koinwSZIYkRP3lKzeHufr8QE0aDeok8",
  authDomain: "zahra-auth.firebaseapp.com",
  projectId: "zahra-auth",
  storageBucket: "zahra-auth.appspot.com",
  messagingSenderId: "329871843324",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("Logged in!");
  } else {
    console.log("User not found!");
  }
});
