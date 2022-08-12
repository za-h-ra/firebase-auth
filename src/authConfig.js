import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD4koinwSZIYkRP3lKzeHufr8QE0aDeok8",
  authDomain: "zahra-auth.firebaseapp.com",
  projectId: "zahra-auth",
  storageBucket: "zahra-auth.appspot.com",
  messagingSenderId: "329871843324",
  appId: "1:329871843324:web:bdcab679ac7d73fbf45c79",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
