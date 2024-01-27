import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css'
import App from './App.tsx'
import Register from './pages/Register/index.tsx'
import Login from './pages/Login/index.tsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Login />
//   },
//   {
//     path: '/register',
//     element: <Register />
//   }
// ]);

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
      }
    ]
  },  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
