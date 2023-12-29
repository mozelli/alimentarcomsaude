'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import styles from './signup.module.scss'

interface IFormInput {
    name: string,
    email: string,
    birthday: string,
    gender: string,
    password: string,
    rePassword: string,
    terms: boolean
}

const SignUp = () => {

    const { register, handleSubmit, formState: {errors}, getValues } = useForm<IFormInput>();
    const router = useRouter();
    // const { name } = useContext(AuthContext);

    // const dataRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    const checkAge = (date: string): boolean => {
        const hoje = new Date();
        const nascimento = new Date(date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3')); // Invertendo o formato para criar a data correta
      
        const diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
        const mesAtualMenorQueNascimento = hoje.getMonth() < nascimento.getMonth();
        const mesmoMesMasDiaAtualMenorQueNascimento =
          hoje.getMonth() === 
          nascimento.getMonth() 
          && hoje.getDate() < 
          nascimento.getDate();
      
        return diferencaAnos > 18 || (diferencaAnos === 18 && (!mesAtualMenorQueNascimento || mesmoMesMasDiaAtualMenorQueNascimento));
    };
      

    function onSubmit(data: any) {
        const gmt = new Date(data.birthday);

        axios.post('http://localhost:3333/addNewUser', {
            name: data.name,
            email: data.email,
            birthday: gmt,
            gender: data.gender,
            password: data.password
        })
        .then((response) => {
            console.log(response);
            if(response.status === 201) {
                router.replace('/dashboard');
            }
        })
        .catch((error) => {
            console.error("Erro ao enviar formulário de registro.", { error });
        });
        // setOutput(JSON.stringify(data, null, 2))
    }

    return (
        <div className={ styles.signUp }>
            <Header />
            <section className={ styles.subscribe }>
                <div className="container">
                    <form className={ styles.singupFormulary }>
                        <div className="row justify-content-center p-3">
                            <div className="col-12">
                                <h2 className={ styles.formTitle }>Cadastro</h2>
                            </div>
                            <div className="col-12">
                                <div className="col mb-3">
                                    <input 
                                        type="text" 
                                        aria-label="Nome"
                                        className={ `form-control ${errors?.name && "is-invalid"}`}
                                        placeholder='Nome'
                                        { ...register('name', {
                                            required: true, 
                                            minLength: 3 
                                            }) 
                                        } 
                                    />
                                    { 
                                        errors?.name?.type === 'required' 
                                        &&  
                                        <div className="invalid-feedback">
                                            Informe seu nome.
                                        </div>
                                    }

                                </div>
                                <div className="col mb-3">
                                    <input 
                                        type="text" 
                                        aria-label="email"
                                        className={ `form-control ${errors?.email && "is-invalid"}`}
                                        placeholder='E-mail'
                                        { ...register('email', {
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
                                <div className="col mb-3">
                                    <input 
                                        type="date"   
                                        aria-label="Data de nascimento"
                                        className={ `form-control ${errors?.birthday && "is-invalid"}`}
                                        placeholder='Data de nascimento' 
                                        { ...register('birthday', { validate: (value) => {
                                            return checkAge(value);
                                        } }) 
                                        }
                                    />
                                    { 
                                        errors?.birthday?.type === 'required' 
                                        &&  
                                        <div className="invalid-feedback">
                                            Informe sua data de nascimento.
                                        </div>
                                    }
                                    { 
                                        errors?.birthday?.type === 'validate' 
                                        &&  
                                        <div className="invalid-feedback">
                                            Você deve ter mais de 18 anos.
                                        </div>
                                    }
                                </div>
                                <div className="col mb-3">
                                    <select 
                                        className="form-select" 
                                        aria-label="Gênero" 
                                        { ...register('gender', {required: true}) }
                                        >
                                        <option>Gênero</option>
                                        <option>Masculino</option>
                                        <option>Feminino</option>
                                        <option>Prefiro não informar</option>
                                    </select>
                                </div>
                                <div className="col mb-3">
                                    <input 
                                        type="password" 
                                        aria-label="senha"
                                        className={ `form-control ${errors?.password && "is-invalid"}`}
                                        placeholder='Senha'
                                        { ...register('password', {
                                            required: true,
                                            minLength: 8,
                                            pattern: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,}$/
                                        }) } 
                                    />
                                    { 
                                        errors?.password?.type === 'required' 
                                        &&  
                                        <div className="invalid-feedback">
                                            Informe uma senha.
                                        </div>
                                    }
                                </div>
                                <div className="col mb-3">
                                    <input 
                                        type="password" 
                                        aria-label="senha"
                                        className={ `form-control ${errors?.rePassword && "is-invalid"}`}
                                        placeholder='Repita a senha'
                                        { ...register('rePassword', { required: true, validate: (value: string) => {
                                            const { password } = getValues();
                                            return password === value;
                                        } }) } 
                                    />
                                    { 
                                        errors?.rePassword?.type === 'required' 
                                        &&  
                                        <div className="invalid-feedback">
                                            Informe a senha novamente.
                                        </div>
                                    }
                                    { 
                                        errors?.rePassword?.type === 'validate' 
                                        &&  
                                        <div className="invalid-feedback">
                                            As senhas devem ser iguais!
                                        </div>
                                    }
                                </div>
                                <div className="col mb-3">
                                    <div className="form-check">
                                        <input 
                                            id='terms'
                                            className={ `form-check-input ${errors?.terms && "is-invalid"}`}
                                            // className="form-check-input" 
                                            type="checkbox" 
                                            { ...register('terms', {
                                                required: true
                                            }) }
                                            />
                                        <label className="form-check-label" htmlFor="terms">
                                            Concordo com os termos de serviço e as políticas de privacidade.
                                        </label>
                                        { 
                                        errors?.terms?.type === 'required' 
                                        &&  
                                        <div className="invalid-feedback">
                                            <strong>Você deve concordar com os termos!</strong>
                                        </div>
                                    }
                                    </div>
                                </div>
                                <div className="col d-grid">
                                    <button 
                                        type='submit' 
                                        className='btn btn-primary' 
                                        onClick={handleSubmit(onSubmit)}>
                                            Cadastrar
                                    </button>
                                </div>
                                <div className="col mt-3 text-center">
                                    <Link href={"/login"} className={ styles.backToLogin }>Voltar para login</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default SignUp;