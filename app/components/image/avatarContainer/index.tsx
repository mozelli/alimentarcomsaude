import React from 'react';

import styles from './styles.module.scss';
import Image from 'next/image';

interface IImage {
  width: number;
  height: number;
  uri: string;
}

const AvatarContainer: React.FC<IImage> = ({ width, height, uri }) => {
  return (
    <div className={ styles.container }>
        <Image src={uri} width={width} height={height} alt='Imagem de perfil' />
    </div>
  );
}

export default AvatarContainer;