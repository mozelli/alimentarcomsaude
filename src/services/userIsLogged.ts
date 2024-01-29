import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function userIsLogged() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    const navigate = useNavigate();
    
    if (user) {
      return true;
    } else {
      console.log('User not logged in.');
      return false;
    }
  });
}

export { userIsLogged }