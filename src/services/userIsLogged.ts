import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebaseConfig";

function userIsLogged() {
  const auth = getAuth(app);
  
  onAuthStateChanged(auth, (user) => {
    if (user){
      if(user.emailVerified) {
        console.log("Verified", user.emailVerified);
        return { error: null, user };
      } else {
        console.log("Verified", user.emailVerified);
        return { error: 'pending-email-verification', user: null }
      }
    }
    console.log("User: ", user);
    return { error: 'user-not-logged', user: null };
  });
}

export { userIsLogged }