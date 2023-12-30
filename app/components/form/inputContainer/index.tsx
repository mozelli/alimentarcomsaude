import React from 'react';

import styles from './styles.module.scss';

const InputContainer = ({children,}: {children: React.ReactNode},) => {
  return (
    <div className={ styles.container }>
        {children}
    </div>
  );
}

export default InputContainer;