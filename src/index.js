import { initalizeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYJIkOsZQr_yVHXcwgYHyDPbXXsfLUhJo",
  authDomain: "my-auth-app-b94e1.firebaseapp.com",
  projectId: "my-auth-app-b94e1",
  storageBucket: "my-auth-app-b94e1.appspot.com",
  messagingSenderId: "744797402913",
  appId: "1:744797402913:web:49a6780039126a9b987060",
};

// Initialize Firebase
const app = initalizeApp(firebaseConfig);
