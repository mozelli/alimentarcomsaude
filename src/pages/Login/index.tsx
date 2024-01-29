import { useForm } from 'react-hook-form';
import { Envelope, Lock, GoogleLogo } from '@phosphor-icons/react'
import { loginWithGoogle } from '../../services/loginWithGoogle'
import { loginWithEmailAndPassword } from '../../services/loginWithEmailAndPassword';
import { Link, useNavigate } from 'react-router-dom';

interface IFormData {
  email: string;
  password: string;
}

function Login(){
  const { register, handleSubmit, formState: {errors} } = useForm<IFormData>();
  const navigate = useNavigate();

  async function googleButtonHandler() {
    const userIsLogged = await loginWithGoogle();
    console.log(userIsLogged);
  }
  
  async function formHandler(data: any) {
    const result = await loginWithEmailAndPassword(data);
    if(result) {
      navigate('/dashboard');
    } else {
      console.log("Error");
    }
  }

  return (
    <div className="pt-16 m-auto h-screen flex flex-col justify-between">
      <div>
        <h1 className='text-6xl font-bold text-emerald-800 drop-shadow-md text-center pb-16'>Alimentar com Saúde</h1>
        <div className="flex flex-col items-center content-center justify-center">
          <form className='w-1/2' onSubmit={handleSubmit(formHandler)}>
            <div className={`border rounded h-10 px-2 flex items-center bg-white ${errors.email ? "border-red-500" : ""}`}>
              <Envelope size={24} fill={`${errors.email ? "#f87171" : ""}`} />
              <input 
                type="email" 
                placeholder='Digita aqui seu e-mail' 
                className={`w-full ml-3 outline-none bg-white ${errors.email ? "text-red-400" : ""}`}
                {
                  ...register('email', {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                  })
                }  
              />
            </div>
            { errors?.email?.type === "required" && <span className='block mt-1 text-red-400 text-sm'>Informe seu e-mail</span> }
            { errors?.email?.type === "pattern" && <span className='block mt-1 text-red-400 text-sm'>Informe um e-mail válido</span> }
            <div className={`border rounded h-10 px-2 flex items-center mt-6 bg-white ${errors.password ? "border-red-500" : ""}`}>
              <Lock size={24} fill={`${errors.password ? "#f87171" : ""}`} />
              <input 
                type="password" 
                placeholder='Digita aqui sua senha' 
                className='w-full ml-3 outline-none'
                {
                  ...register('password', {
                      required: true,
                      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                  })
              }  />
            </div>
            { errors?.password?.type === "required" && <span className='block mt-1 text-red-400 text-sm'>Informe sua senha</span> }
            { errors?.password?.type === "pattern" && <span className='block mt-1 text-red-400 text-sm'>Sua senha deve ter no mínimo 8 dígitos.</span> }
            <div className="flex items-center justify-center mt-6">
              <button 
                type='submit' 
                className='rounded border bg-emerald-800 hover:bg-emerald-900 transition ease-in-out w-60 flex items-center justify-center cursor-pointer h-10 text-white'>
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
              <span>Ainda não tem cadastro? <Link to={'/register'} className='hover:underline'><strong>Cadastre-se!</strong></Link></span>
            </div>
          </form>
        </div>
      </div>
        <footer></footer>
    </div>
  );
}

export default Login;