
import Link from 'next/link'
import styles from './login.module.scss'

export default function Login() {
    return (
        <div className={ styles.login }>
            <header>
                <div className="row">
                    <div className="col-lg-3">
                        <h1>Alimentar com Saúde</h1>
                    </div>
                    <div className="col-lg-7">

                    </div>
                    <div className="col-lg-2">
        
                    </div>
                </div>
            </header>
            <section className={ styles.formulary }>
                <div className="container">
                    <div className={ styles.loginFormulary }>
                        <div className="row justify-content-center p-3">
                            <div className="col-12">
                                <h2 className={ styles.formTitle }>Login</h2>
                            </div>
                            <div className="col-12">
                                <div className="col mb-3">
                                    <input type="text" className="form-control" placeholder='E-mail' />
                                </div>
                                <div className="col mb-3">
                                    <input type="password" className='form-control' placeholder='Senha' />
                                </div>
                                <div className="col d-grid">
                                    <button type='button' className='btn btn-primary'>Entrar</button>
                                </div>
                                <div className="col my-3">
                                    <a href='#' className={ styles.forgotMyPassword }>Esqueci minha senha</a>
                                </div>
                                <div className="col my-3 text-center">
                                    <Link href="/signup" className={ styles.signUp }>Quero me cadastrar!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}