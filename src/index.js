import { auth } from "./authConfig";

import {
  onAuthStateChanged,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

import {
  showAppScreen,
  showLoginScreen,
  showLoginError,
  hideLoginError,
  showLoginState,
  loginBtn,
  signupBtn,
  logoutBtn,
} from "./ui";

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
