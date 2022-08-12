import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  connectAuthEmulator,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD4koinwSZIYkRP3lKzeHufr8QE0aDeok8",
  authDomain: "zahra-auth.firebaseapp.com",
  projectId: "zahra-auth",
  storageBucket: "zahra-auth.appspot.com",
  messagingSenderId: "329871843324",
  appId: "1:329871843324:web:bdcab679ac7d73fbf45c79",
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

connectAuthEmulator(auth, "http://localhost:9099");

// DOM Manipulation

const loginBtn = document.querySelector("#loginBtn");
const emailText = document.querySelector("#email-text");
const passwordText = document.querySelector("#password-text");

const loginEmailPassword = async () => {
  const loginEmail = emailText.value;
  const loginPassword = passwordText.value;

  const userCredential = await signInWithEmailAndPassword(
    auth,
    loginEmail,
    loginPassword
  );
  console.log(userCredential.user);
};

loginEmailPassword();

loginBtn.addEventListener("click", loginEmailPassword);
