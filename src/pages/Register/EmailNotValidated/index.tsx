import React from 'react'
import { Link } from 'react-router-dom';

const EmailNotValidated: React.FC = () => {

  return (
    <div className="flex flex-col pt-16 justify-center items-center">
        <h2 className="text-3xl text-cente text-amber-600 mb-3">Ops!</h2>
        <h3 className='font-bold mb-3 text-xl'>Seu cadastro foi realizado, mas seu e-mail ainda não foi verificado.</h3>
        <p className='mb-3'>Verifique em sua caixa de entrada e entre os spans</p>
        <p className='mb-3'>ou</p>
        <p><strong><Link to={'/'} className='text-blue-600 underline'>Clique aqui</Link></strong> para realizar um novo cadastro.</p>
    </div>
  );
}

export default EmailNotValidated;