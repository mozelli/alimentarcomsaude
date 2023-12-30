import React from 'react';

import styles from './styles.module.scss';
import Title from './title';
import Formulary from './formulary';

const FormArea: React.FC = () => {
  return (
    <div className={ styles.formArea }>
        <Title />
        <Formulary />
    </div>
  );
}

export default FormArea;