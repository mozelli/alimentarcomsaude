import React from 'react';
import styles from './styles.module.scss';
import Login from './login/page';

const app: React.FC = () => {
  return (
    <main className={styles.layout}>
      <Login />
    </main>
  );
}

export default app;
