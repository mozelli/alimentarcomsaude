'use client';
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import InputContainer from '@/app/components/form/inputContainer';

import styles from './styles.module.scss';
import ButtonContainer from '@/app/components/form/buttonContainer';

interface IFormData {
    email: string;
    password: string;
}

const Formulary: React.FC = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<IFormData>();

    const handleLoginForm = (data: any) => {
        axios.post('http://localhost:3333/login', {
            email: data.email,
            password: data.password
        })
        .then((response) => {
            console.log(response);
            if(response.status === 200) {
                const user = 
                    {
                        name: response.data.user.name,
                        email: response.data.user.email,
                        birthday: response.data.user.birthday,
                        gender: response.data.user.gender,
                    }
                    //localStorage.setItem('user', JSON.stringify(user));
                    // if(rememberMe) {
                    //     localStorage.setItem('access_token', response.data.token);
                    // } else {
                    //     sessionStorage.setItem('access_token', response.data.token);
                    // }
                    
                    //router.replace('/dashboard');
            }
        })
        .catch((error) => {
            console.error({ error });
        });
    }

    return (
        <div className={ styles.formulary }>
            <form onSubmit={handleSubmit(handleLoginForm)}>
                <InputContainer>
                    <input 
                        type="text" 
                        placeholder='E-mail'
                        {
                            ...register('email', {
                                required: true,
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                            })
                        }  
                    />
                    { 
                        errors?.email?.type === 'required' 
                        &&  
                        <div className={styles.invalidFeedback}>
                            Informe seu e-mail.
                        </div>
                    }
                    { 
                        errors?.email?.type === 'pattern' 
                        &&  
                        <div className={styles.invalidFeedback}>
                            Informe um e-mail válido!
                        </div>
                    }
                </InputContainer>
                <InputContainer>
                    <input 
                        type="password" 
                        placeholder='Senha'
                        {
                            ...register('password', {
                                required: true,
                                minLength: 6
                            })
                        }  
                    />
                    {       
                        errors?.password?.type === 'minLength' 
                        &&  
                        <div className={styles.invalidFeedback}>
                            A senha deve ter pelo menos 6 caracteres.
                        </div>
                    }
                    {       
                        errors?.password?.type === 'required' 
                        &&  
                        <div className={styles.invalidFeedback}>
                            Informe sua senha.
                        </div>
                    }
                </InputContainer>
                <ButtonContainer>
                    <button type='submit'>Entrar!</button>
                </ButtonContainer>
                <div className={ styles.registerLink }>
                    <Link href={'/'}>Cadastre-se agora!</Link>
                </div>
                <div className={ styles.agreements }>
                    <p>
                        Ao se inscrever você concorda com os <Link href={'/'}>Termos de Serviço</Link> e a <Link href={'/'}>Política de Privacidade</Link>, incluíndo o <Link href={'/'}>Uso de Cookies</Link>.
                    </p>
                </div>
            </form> 
        </div>
    );
}

export default Formulary;