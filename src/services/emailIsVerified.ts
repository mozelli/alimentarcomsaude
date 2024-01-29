import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function emailIsVefified() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    const navigate = useNavigate();
    
    if (user) {
      const userVerified = user.emailVerified;
    
      if(!userVerified) {
        console.log("Email não verificado.");
        navigate('/');
      } else {
        console.log("Email verified!");
      }
    } else {
      console.log('User not logged in.');
      navigate('/');
    }
  });
}

export { emailIsVefified }