'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from './login.module.scss'
import Header from '../components/header/page'
import Footer from '../components/footer/page'

export default function Login() {

    const [ email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');
    const [ rememberMe, setRememberMe ] = useState(false);
    const [ emailHelpBlock, setEmailHelpBlock ] = useState(true);
    const [ passwordHelpBlock, setPasswordHelpBlock ] = useState(true);
    const router = useRouter();

    const handleLoginForm = (event: any) => {
        event.preventDefault();
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexSenha = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,}$/;

        if(regexEmail.test(email)) {
            setEmailHelpBlock(true);  
            if(regexSenha.test(password)) {
                setPasswordHelpBlock(true);  
                axios.post('http://localhost:3333/authenticate', {
                    email,
                    password
                })
                .then((response) => {
                    if(response.status === 200) {
                        const user = 
                        {
                            name: response.data.user.name,
                            email: response.data.user.email,
                            birthday: response.data.user.birthday,
                            gender: response.data.user.gender,
                            token: response.data.token
                        }
                        localStorage.setItem('user', JSON.stringify(user));
                        sessionStorage.setItem('autenticated', 'true');
                        router.replace('/dashboard');
                    }
                })
                .catch((error) => {
                    console.error({ error });
                });
            } else {
                setPasswordHelpBlock(false);
            }              
        } else {
            setEmailHelpBlock(false);
        }
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
                                <form onSubmit={handleLoginForm}>
                                    <div className="col-xl-12 mb-3">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder='E-mail' 
                                            value={ email }
                                            onChange={ (event) => setEmail(event.target.value) } />
                                        <div 
                                            id="emailHelpBlock" 
                                            className="form-text text-danger" 
                                            hidden={ emailHelpBlock }
                                            >
                                            Informe um e-mail válido.
                                        </div>
                                    </div>
                                    <div className="col-xl-12 mb-3">
                                        <input 
                                            type="password" 
                                            className='form-control' 
                                            placeholder='Senha' 
                                            value={ password } 
                                            onChange={ (event) => setPassword(event.target.value) } />
                                        <div 
                                            id="passwordHelpBlock" 
                                            className="form-text text-danger" 
                                            hidden={ passwordHelpBlock }
                                            
                                            >
                                            Sua senha deve conter letras e números.
                                        </div>
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