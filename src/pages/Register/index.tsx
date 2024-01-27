import { useForm } from 'react-hook-form'
import { loginWithGoogle } from '../../services/loginWithGoogle';
import { Envelope, GoogleLogo, Lock } from '@phosphor-icons/react'
import { Link, redirect } from 'react-router-dom';

interface IFormData {
    email: string;
    password: string;
    rePassword: string;
}

export default function Register() {
  const { register, handleSubmit, formState: {errors} } = useForm<IFormData>();

  async function handleFormLogin() {
    
  }

  async function googleButtonHandler() {
    const userIsLogged = await loginWithGoogle();
    if(userIsLogged) {
      redirect('/')
    }
  }

  return (
    <div className='flex flex-col justify-center'>
        <h1 className='text-center text-3xl py-16 font-bold text-emerald-800'>Cadastro</h1>
        <form className='flex flex-col items-center' onSubmit={handleSubmit(handleFormLogin)}>
        <div className="border rounded-sm h-10 px-2 flex items-center mb-6 bg-white w-1/2">
            <Envelope size={24} />
            <input 
              type="email" 
              placeholder='Digita aqui seu e-mail' 
              className='w-full ml-3 outline-none'
              {
                ...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                })
              }  
            />
          </div>
          <div className="border rounded-sm h-10 px-2 flex items-center mb-6 bg-white w-1/2">
            <Lock size={24} />
            <input 
              type="password" 
              placeholder='Digita aqui sua senha' 
              className='w-full ml-3 outline-none'
              {
                ...register('password', {
                    required: true,
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                })
              }  
            />
          </div>
          <div className="border rounded-sm h-10 px-2 flex items-center mb-6 bg-white w-1/2">
            <Lock size={24} />
            <input 
              type="password" 
              placeholder='Repita sua senha' 
              className='w-full ml-3 outline-none'
              {
                ...register('rePassword', {
                    required: true,
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                })
              }  
            />
          </div>
          <div className="flex items-center justify-around">
            <button type='submit' className='rounded border p-1 bg-emerald-800 hover:bg-emerald-900 transition ease-in-out w-60 flex items-center justify-center cursor-pointer h-11 text-white'>
              Entrar
            </button>
            <span className='mx-3'>OU</span>
            <div onClick={googleButtonHandler} className="rounded border p-1 bg-sky-600 hover:bg-sky-700 transition ease-in-out w-60 flex justify-items-center items-center cursor-pointer">
              <div className="bg-white p-1 rounded-sm mr-2">
              <GoogleLogo size={24} />
              </div>
              <span className='text-white font-medium'>Entrar com Google</span>
            </div>
          </div>  
          <div className="mt-8 flex justify-center">
            <span>Voltar para a tela de <Link to='/' className='hover:underline'><strong>Login</strong></Link></span>
          </div>
        </form>
    </div>
  );
}