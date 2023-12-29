'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import styles from './login.module.scss';
import Header from '../components/header/page';
import Footer from '../components/footer/page';

interface IFormInput {
    email: string;
    password: string;
}

export default function Login() {

    const { register, handleSubmit, formState: {errors} } = useForm<IFormInput>();

    const [ rememberMe, setRememberMe ] = useState(false);
    const [ emailHelpBlock, setEmailHelpBlock ] = useState(true);
    const [ passwordHelpBlock, setPasswordHelpBlock ] = useState(true);
    const router = useRouter();

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
                    localStorage.setItem('user', JSON.stringify(user));
                    if(rememberMe) {
                        localStorage.setItem('access_token', response.data.token);
                    } else {
                        sessionStorage.setItem('access_token', response.data.token);
                    }
                    
                    //router.replace('/dashboard');
            }
        })
        .catch((error) => {
            console.error({ error });
        });
    }

    return (
        <div className={ styles.login }>
            <Header />
            <section className={ styles.formulary }>
                <div className="container">
                    <div className={ styles.loginFormulary }>
                        <div className="row justify-content-center p-3">
                            <div className="col-xl-12">
                                <h2 className={ styles.formTitle }>Login</h2>
                            </div>
                            <div className="col-xl-12">
                                <form onSubmit={ handleSubmit(handleLoginForm) }>
                                    <div className="col-xl-12 mb-3">
                                        <input 
                                            type="email" 
                                            className={ `form-control ${errors?.email && "is-invalid"}`}
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
                                            <div className="invalid-feedback">
                                                Informe seu e-mail.
                                            </div>
                                        }
                                        { 
                                            errors?.email?.type === 'pattern' 
                                            &&  
                                            <div className="invalid-feedback">
                                                Informe um e-mail válido!
                                            </div>
                                        }
                                    </div>
                                    <div className="col-xl-12 mb-3">
                                        <input 
                                            type="password" 
                                            className={ `form-control ${errors?.password && "is-invalid"}`}
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
                                            <div className="invalid-feedback">
                                                A senha deve ter pelo menos 6 caracteres.
                                            </div>
                                        }
                                        {       
                                            errors?.password?.type === 'required' 
                                            &&  
                                            <div className="invalid-feedback">
                                                Informe sua senha.
                                            </div>
                                        }
                                    </div>
                                    <div className="col-xl-12 mb-3">
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                value= 'rememberMe'
                                                name='rememberMe'
                                                id="rememberMe" 
                                                onChange={ (event) => setRememberMe(event.target.checked) }
                                                checked={ rememberMe }
                                                />
                                            <label 
                                                className="form-check-label" 
                                                htmlFor="agreeTerms"
                                                style={{fontSize: ".8rem"}} >
                                                Lembrar-me neste dispositivo
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 d-grid">
                                        <button type='submit' className='btn btn-primary'>Entrar</button>
                                    </div>
                                </form>
                                <div className="col-xl-12 my-3">
                                    <a href='#' className={ styles.forgotMyPassword }>Esqueci minha senha</a>
                                </div>
                                <div className="col-xl-12 my-3 text-center">
                                    <Link href="/signup" className={ styles.signUp }>Quero me cadastrar!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}