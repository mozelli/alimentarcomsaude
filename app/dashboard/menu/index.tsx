import React from 'react';

import styles from './styles.module.scss';
import Item from './item';

const Menu: React.FC = () => {
  return (
    <div className={ styles.menu }>
        <Item uri='/' label='Página Inicial' />
        <Item uri='/' label='Explorar' />
        <Item uri='/' label='Perfil' />
        <Item uri='/' label='Notificações' />
        <Item uri='/' label='Comunidades' />
        <Item uri='/' label='Marketing' />
    </div>
  );
}

export default Menu;