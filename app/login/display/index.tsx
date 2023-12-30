import React from 'react';

import styles from './styles.module.scss';
import Hero from './hero';
import FormArea from './formArea';

const Display: React.FC = () => {
  return (
    <div className={ styles.display }>
      <Hero />
      <FormArea />
    </div>
  );
}

export default Display;