import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getAuth,
  AuthErrorCodes,
  onAuthStateChanged,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

// DOM Manipulation

const loginBtn = document.querySelector("#loginBtn");
const emailText = document.querySelector("#email-text");
const passwordText = document.querySelector("#password-text");
const loginErrorMsg = document.querySelector("#loginErrorMsg");
const errorMsg = document.querySelector("#errorMsg");
const signupBtn = document.querySelector("#signupBtn");
const login = document.querySelector("#login");
const screen = document.querySelector("#app");
const authState = document.querySelector("#authState");
const logoutBtn = document.querySelector("#logoutBtn");

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

// Auth State

const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      showAppScreen();
      showLoginState(user);
      hideLoginError();
    } else {
      showLoginScreen();
      authState.innerHTML = "You're not logged in";
    }
  });
};

monitorAuthState();

connectAuthEmulator(auth, "http://localhost:9099");

// error handling

const showLoginError = (error) => {
  loginErrorMsg.style.display = "block";
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    errorMsg.innerHTML = "Wrong Password. Try Again!";
  } else {
    errorMsg.innerHTML = `Error: ${error.message}`;
  }
};

// hide error message

const hideLoginError = () => {
  loginErrorMsg.style.display = "none";
  errorMsg.innerHTML = "";
};

hideLoginError();

// show login screen
const showLoginScreen = () => {
  login.style.display = "block";
  screen.style.display = "none";
};

// show logged in screen

const showAppScreen = () => {
  login.style.display = "none";
  screen.style.display = "block";
};

// show login state
const showLoginState = (user) => {
  authState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email})`;
  console.log("USER:", user.displayName);
};

// Login

const loginEmailPassword = async () => {
  const loginEmail = emailText.value;
  const loginPassword = passwordText.value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(userCredential.user);
  } catch (error) {
    console.log(error);
    showLoginError(error);
  }
};

// Signup

const createAccount = async () => {
  const loginEmail = emailText.value;
  const loginPassword = passwordText.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(userCredential.user);
  } catch (error) {
    console.log(error);
    showLoginError(error);
  }
};

// logout

const logout = async () => {
  await signOut(auth);
};

// Event Handler

loginBtn.addEventListener("click", loginEmailPassword);
signupBtn.addEventListener("click", createAccount);
logoutBtn.addEventListener("click", logout);
