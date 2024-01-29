import { createBrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import Register from './pages/Register/index.tsx'
import Login from './pages/Login/index.tsx'
import RegisterConfirmation from './pages/Register/RegisterConfirmation/index.tsx';
import EmailValidation from './pages/Register/EmailValidation/index.tsx';
import Dashboard from './pages/Login/Dashboard/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: 'register/confirmation',
        element: <RegisterConfirmation />
      },
      {
        path: 'register/email-validation',
        element: <EmailValidation />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      }
    ]
  },  
]);

export { router }