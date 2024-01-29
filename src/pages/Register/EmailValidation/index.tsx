import React from 'react'
import { Link } from 'react-router-dom';

const EmailValidation: React.FC = () => {

  return (
    <div className="flex flex-col pt-16 justify-center items-center">
        <h2 className="text-3xl text-center text-emerald-800 mb-3">Parabéns!</h2>
        <h3 className='font-bold mb-3 text-xl'>Seu e-mail foi validado e seu cadastro concluído com sucesso!</h3>
        <p className='mb-3'>Agora você faz parte da comunidade Alimentar com Saúde.</p>
        <p><strong><Link to={'/'} className='text-blue-600 underline'>Clique aqui</Link></strong> para fazer login.</p>
    </div>
  );
}

export default EmailValidation;