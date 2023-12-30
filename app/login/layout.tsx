import React from 'react';

import styles from './styles.module.scss';

export default function LoginLayout({children,}:{children:React.ReactNode}) {
  return (
    <div className={ styles.loginLayout }>
        {children}
    </div>
  );
}