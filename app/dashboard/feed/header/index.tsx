import React from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';
import InputContainer from '@/app/components/form/inputContainer';

const Header: React.FC = () => {
  return (
    <div className={ styles.header }>
        <div className={ styles.avatar }>
            <Image src={'/images/perfil.jpg'} width={70} height={70} alt='Foto de perfil' />
        </div>
        <div className={ styles.publisher }>
            <div className={ styles.userName }>
                <span>João Mozelli Neto</span>
            </div>
            <InputContainer>
                <input type="text" placeholder='Escreva na sua linha do tempo...' />
            </InputContainer>
            <div className={ styles.tools }>
                <div className={ styles.icon }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#ea868f' viewBox="0 0 24 24"><path d="M5 5h-3v-1h3v1zm8 5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-4v15h-24v-15h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm13 3c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z"/></svg>
                    <span>Foto</span>
                </div>
                <div className={ styles.icon }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#ea868f' viewBox="0 0 24 24"><path d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z"/></svg>
                    <span>Receita</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;