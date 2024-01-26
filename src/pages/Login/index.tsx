import React from 'react';
import { loginWithGoogle } from '../../services/loginWithGoogle';

const Login: React.FC = () => {

    async function googleLogin() {
        await loginWithGoogle();
    }

  return (
    <main>
        <button onClick={googleLogin}>Google</button>
    </main>
  );
}

export default Login;