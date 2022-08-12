import { AuthErrorCodes } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

export const login = document.querySelector("#login");
export const screen = document.querySelector("#app");
export const emailText = document.querySelector("#email-text");
export const passwordText = document.querySelector("#password-text");
export const loginErrorMsg = document.querySelector("#loginErrorMsg");
export const errorMsg = document.querySelector("#errorMsg");
export const authState = document.querySelector("#authState");
export const loginBtn = document.querySelector("#loginBtn");
export const signupBtn = document.querySelector("#signupBtn");
export const logoutBtn = document.querySelector("#logoutBtn");

export const showLoginScreen = () => {
  login.style.display = "block";
  screen.style.display = "none";
};

export const showAppScreen = () => {
  login.style.display = "none";
  screen.style.display = "block";
};

export const showLoginError = (error) => {
  loginErrorMsg.style.display = "block";
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    errorMsg.innerHTML = "Wrong Password. Try Again!";
  } else {
    errorMsg.innerHTML = `Error: ${error.message}`;
  }
};

export const hideLoginError = () => {
  loginErrorMsg.style.display = "none";
  errorMsg.innerHTML = "";
};

export const showLoginState = (user) => {
  authState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email})`;
  console.log("USER:", user.displayName);
};

hideLoginError();
