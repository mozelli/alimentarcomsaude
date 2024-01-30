import { 
  getAuth, 
  signInWithEmailAndPassword 
} from 'firebase/auth';
import { app } from './firebaseConfig';

async function loginWithEmailAndPassword(data: any) {
  const auth = getAuth(app);
  
  try{
    const result = await signInWithEmailAndPassword(auth, data.email, data.password);
    if(!result.user.emailVerified) {
      return { error: "pending-email-verification", user: null }
    } else {
      const user = {
        name: result.user.displayName,
        email: result.user.email,
        photoUrl: ""
      }
      const userJson = JSON.stringify(user);
      localStorage.setItem('user', userJson);
      return { error: null, user: result.user }
    }
  } catch(error) {
    console.log(error);
    return { error, user: null }
  }
}

export { loginWithEmailAndPassword }