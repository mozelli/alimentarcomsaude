import React from 'react'
import { useSearchParams } from 'react-router-dom'

const RegisterConfirmation: React.FC = () => {
    const [searchParams] = useSearchParams();
  return (
    <div className="flex flex-col pt-16 justify-center items-center">
        <h2 className="text-3xl text-center text-emerald-800 mb-3">Parabéns!</h2>
        <h3 className='font-bold mb-3 text-xl'>Falta pouco para finalizar seu cadastro.</h3>
        <p className='mb-3'>Um e-mail de verificação foi enviado para <strong className='text-blue-600'>{searchParams.get('email')}</strong>.</p>
        <p>Acesse sua caixa de entrada e clique no link de verificação.</p>
        <p>Caso o e-mail não esteja na caixa de entrada, verifique nos spans.</p>
    </div>
  );
}

export default RegisterConfirmation;