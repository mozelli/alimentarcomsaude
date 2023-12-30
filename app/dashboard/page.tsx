import React from 'react';
import Menu from './menu';

import styles from './styles.module.scss';
import Feed from './feed';
import Info from './info';

const Dashboard: React.FC = () => {
  return (
    <>
      <Menu />
      <Feed />
      <Info />
    </>
  );
}

export default Dashboard;