import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
import {
  showAppScreen,
  showLoginState,
  hideLoginError,
  showLoginScreen,
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
