import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../../services/firebaseConfig';

const Dashboard: React.FC = () => {
  const logout = () => {
    const auth = getAuth(app);
    signOut(auth)
    .then(() => {
      localStorage.removeItem('user');
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