import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from './firebaseConfig';

async function loginWithGoogle (){
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    console.log(app)

    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if(credential?.accessToken !== null && credential?.accessToken !== undefined) {
        const user = {
          name: result.user.displayName,
          email: result.user.email,
          imageUrl: result.user.photoURL
        }
        const userJson = JSON.stringify(user);
        localStorage.setItem('user', userJson);
        return true;
      }
    } catch(error) {
      localStorage.removeItem('user');
      console.error(error);
      return false;
    }
    return false;
  }

export { loginWithGoogle };