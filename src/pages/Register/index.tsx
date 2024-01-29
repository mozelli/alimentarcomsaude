import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { loginWithGoogle } from '../../services/loginWithGoogle';
import { registerWithLoginAndPassword } from '../../services/registerWithLoginAndPassword'
import { User, Envelope, GoogleLogo, Lock } from '@phosphor-icons/react'

export interface IFormData {
  name: string;
  email: string;
  password: string;
  rePassword: string;
}

export default function Register() {
  const { register, handleSubmit, formState: {errors}, getValues } = useForm<IFormData>();
  const navigate = useNavigate()

  async function handleFormLogin(data: any) {
    await registerWithLoginAndPassword(data);
    navigate(`confirmation?email=joaomozelli@hotmail.com`);
  }

  async function googleButtonHandler() {
    const userIsLogged = await loginWithGoogle();
    if(userIsLogged) {
      redirect('/')
    }
  }

  return (
    <div className='flex flex-col justify-center'>
        <h1 className='text-center text-3xl pt-16 pb-8 font-bold text-emerald-800'>Cadastro</h1>
        <form className='flex flex-col items-center' onSubmit={handleSubmit(handleFormLogin)}>
            <div className={`border rounded h-10 px-2 flex items-center bg-white w-1/2 ${errors.name ? "border-red-500" : ""}`}>
              <User size={24} fill={`${errors.name ? "#f87171" : ""}`} />
              <input 
                type="text" 
                placeholder='Digite aqui seu nome' 
                className={`w-full ml-3 outline-none bg-white ${errors.name ? "text-red-400" : ""}`}
                {
                  ...register('name', {
                    required: "Informe seu nome.",
                    minLength: {
                      value: 3,
                      message: "Mínimo de 3 letras."
                    }
                  })
                }  
              />
            </div>
            <div className='w-1/2'>
              { errors?.name && (<span className='block mt-1 text-red-400 text-sm'>{`${errors.name?.message}`}</span>) }
            </div>
            <div className={`border rounded h-10 px-2 mt-6 flex items-center bg-white w-1/2 ${errors.email ? "border-red-500" : ""}`}>
              <Envelope size={24} fill={`${errors.email ? "#f87171" : ""}`} />
              <input 
                type="email" 
                placeholder='Digite aqui seu e-mail' 
                className={`w-full ml-3 outline-none bg-white ${errors.email ? "text-red-400" : ""}`}
                {
                  ...register('email', {
                      required: "Informe um e-mail",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Informe um e-mail válido!"
                      }
                  })
                }  
              />
            </div>
            <div className="w-1/2">
              { errors?.email && (<span className='block mt-1 text-red-400 text-sm'>{`${errors.email?.message}`}</span>) }
            </div>
            <div className={`border rounded h-10 px-2 mt-6 flex items-center bg-white w-1/2 ${errors.password ? "border-red-500" : ""}`}>
              <Lock size={24} fill={`${errors.email ? "#f87171" : ""}`} />
              <input 
                type="password" 
                placeholder='Digite aqui sua senha' 
                className='w-full ml-3 outline-none'
                {
                  ...register('password', {
                      required: "Informe uma senha.",
                      minLength: {
                        value: 6,
                        message: "Mínimo de 6 caracteres."
                      },
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message: "A senha deve ter letras e números."
                      }
                  })
                }  
              />
            </div>
            <div className="w-1/2">
              { errors?.password && (<span className='block mt-1 text-red-400 text-sm'>{`${errors.password?.message}`}</span>) }
            </div>
            <div className="border rounded-sm h-10 px-2 flex items-center mt-6 bg-white w-1/2">
              <Lock size={24} />
              <input 
                type="password" 
                placeholder='Repita sua senha' 
                className='w-full ml-3 outline-none'
                {
                  ...register('rePassword', {
                      required: "Repita sua senha",
                      validate: (value) => value === getValues("password") || "As senhas não são iguais."
                  })
                }  
              />
            </div>
            <div className="w-1/2">
              { errors?.rePassword && (<span className='block mt-1 text-red-400 text-sm'>{`${errors.rePassword?.message}`}</span>) }
            </div>
            <div className="w-1/2 text-sm mb-6">
              <span>
                Ao se inscrever, você concorda com os <Link to={'/'} className='hover:underline text-blue-700'>Termos de Serviço</Link> e a <Link to={'/'} className='hover:underline text-blue-700'>Política de Privacidade</Link>, incluindo o <Link to={'/'} className='hover:underline text-blue-700'>Uso de Cookies</Link>.
              </span>
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