import React from 'react';
import Header from './header';

import styles from './styles.module.scss';
import TimeLine from './timeline';

const Feed: React.FC = () => {
  return (
    <div className={ styles.feed }>
      <Header />
      <TimeLine />
    </div>
  );
}

export default Feed;