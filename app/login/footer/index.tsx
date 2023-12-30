import React from 'react';

import styles from './styles.module.scss';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={ styles.footer }>
        <p>
            <Link href={'/'}>Sobre</Link>
            <Link href={'/'}>Central de Ajuda</Link>
            <Link href={'/'}>Termos de Serviço</Link>
            <Link href={'/'}>Política de Privacidade</Link>
            <Link href={'/'}>Política de Cookies</Link>
            <span>&copy; 2024 Mozelli Marketing Digital.</span>
        </p>
    </footer>
  );
}

export default Footer;