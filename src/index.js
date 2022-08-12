import { auth } from "./authConfig";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

import { showLoginError, loginBtn, signupBtn, logoutBtn } from "./ui";

// USER LOGIN

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

// USER SIGNUP

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

// USER LOGOUT

const logout = async () => {
  await signOut(auth);
};

// EVENT HANDLERS

loginBtn.addEventListener("click", loginEmailPassword);
signupBtn.addEventListener("click", createAccount);
logoutBtn.addEventListener("click", logout);
