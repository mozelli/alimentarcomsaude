import React from 'react';
import Link from 'next/link';

import styles from './style.module.scss';

interface IItem {
    label: string;
    uri: string;
}

const Item: React.FC<IItem> = ({label, uri}) => {
  return (
    <div className={ styles.item }>
        <Link href={uri}>{ label }</Link>
    </div>
  );
}

export default Item;