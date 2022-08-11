import { initalizeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = initalizeApp({
  apiKey: "AIzaSyCYJIkOsZQr_yVHXcwgYHyDPbXXsfLUhJo",
  authDomain: "my-auth-app-b94e1.firebaseapp.com",
  projectId: "my-auth-app-b94e1",
  storageBucket: "my-auth-app-b94e1.appspot.com",
  messagingSenderId: "744797402913",
  appId: "1:744797402913:web:49a6780039126a9b987060",
});

const auth = getAuth(firebaseApp);

// Detect auth state
onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("Logged in!");
  } else {
    console.log("User not found!");
  }
});
