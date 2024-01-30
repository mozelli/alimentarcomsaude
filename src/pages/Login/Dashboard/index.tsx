import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { app } from '../../../services/firebaseConfig';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(app);
  
    onAuthStateChanged(auth, (user) => {
    if (user){
      if(user.emailVerified) {
        console.log("Verified", user.emailVerified);
      } else {
        navigate('/register/email-not-validated');
      }
    } else {
      navigate('/');
    }
  });
  }, [navigate]);

  const logout = () => {
    const auth = getAuth(app);
    signOut(auth)
    .then(() => {
      localStorage.removeItem('user');
      navigate('/');
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={logout}>Sair</button>
    </>
  );
}

export default Dashboard;