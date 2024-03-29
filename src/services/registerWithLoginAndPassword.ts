import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, User } from 'firebase/auth';
import { app } from './firebaseConfig';
import { IFormData } from '../pages/Register'

async function registerWithLoginAndPassword(data: IFormData) {
  const auth = getAuth(app);
  try {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
    console.log("Usuário cadastrado.");
    
    console.log("Aguardando atualização do display name...");
    const user: User = auth.currentUser;
    await updateProfile(user, {
      displayName: data.name
    });
    console.log("Display name atualizado.");

    console.log("Enviando e-mail de verificação...");
    await sendEmailVerification(user);
    console.log("E-mail de verificação enviado!");

    return { error: null };
  } catch(error) {
    return { error }
  }
}

export { registerWithLoginAndPassword }