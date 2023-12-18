'use client';
import styles from './signup.module.scss'
import { useState } from 'react';

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [show, setShow] = useState(true);

    const Terms = () => {
        setAgreeTerms(!agreeTerms);
    }

    const dataHandle = (event: any) => {
        event.preventDefault();
        if(name === '' || email === '' || gender === '' || birthday === '' || agreeTerms === false) {
            setShow(false);
            return false;
        } else {
            setShow(true);
            console.log({
                name,email,gender,birthday,agreeTerms
            });
            return true;
        }
    }

    return (
        <div className={ styles.signUp }>
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
            <section className={ styles.subscribe }>
                <div className="container">
                    {name + email + gender + birthday + agreeTerms}
                    <div className={ styles.singupFormulary }>
                        <div className="row justify-content-center p-3">
                            <div className="col-12">
                                <h2 className={ styles.formTitle }>Cadastro</h2>
                            </div>
                            <div className="alert alert-danger" role="alert" hidden={show}>
                                Você deve preencher todos os campos do forulário e aceitar os termos!
                            </div>
                            <div className="col-12">
                                <div className="col mb-3">
                                    <input 
                                        type="text" 
                                        value={ name } 
                                        aria-label="Nome"
                                        onChange={ (e) => setName(e.target.value) } 
                                        className="form-control" 
                                        placeholder='Nome' 
                                    />
                                </div>
                                <div className="col mb-3">
                                    <input 
                                        type="text" 
                                        value={email} onChange={ (e) => setEmail(e.target.value) } 
                                        aria-label="email"
                                        className="form-control" 
                                        placeholder='E-mail' 
                                    />
                                </div>
                                <div className="col mb-3">
                                    <input 
                                        type="date" 
                                        id='date' value={ birthday } onChange={(e) => setBirthday(e.target.value) } 
                                        aria-label="Data de nascimento"
                                        className='form-control' 
                                        placeholder='Data de nascimento' 
                                    />
                                </div>
                                <div className="col mb-3">
                                    <select 
                                        className="form-select" 
                                        aria-label="Gênero" 
                                        value={ gender } 
                                        onChange={ (e) => setGender(e.target.value) } 
                                        >
                                        <option defaultValue={""}>Escolha</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="feminino">Feminino</option>
                                        <option value="não informado">Prefiro não declarar</option>
                                    </select>
                                </div>
                                <div className="col mb-3">
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            value= "terms" 
                                            name='agreeTerms'
                                            id="agreeTerms" 
                                            onChange={() => Terms} />
                                        <label className="form-check-label" htmlFor="agreeTerms">
                                            Concordo com os termos de serviço e as políticas de privacidade.
                                        </label>
                                        </div>
                                    </div>
                                <div className="col d-grid">
                                    <button className='btn btn-primary' onClick={() => dataHandle}>Cadastrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp;