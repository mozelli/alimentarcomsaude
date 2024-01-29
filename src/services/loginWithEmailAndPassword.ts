import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebaseConfig';

async function loginWithEmailAndPassword(data: any): Promise<boolean> {
  const auth = getAuth(app);
  
  try{
    const result = await signInWithEmailAndPassword(auth, data.email, data.password);
    console.log(result);
    const user = {
      name: result.user.displayName,
      email: result.user.email,
      photoUrl: ""
    }
    const userJson = JSON.stringify(user);
    localStorage.setItem('user', userJson);
    return true;
  } catch(error) {
    console.log(error);
    return false;
  }
}

export { loginWithEmailAndPassword }