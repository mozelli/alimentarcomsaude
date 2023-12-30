import React from 'react';

import styles from './styles.module.scss';
import AvatarContainer from '@/app/components/image/avatarContainer';
import Link from 'next/link';
import Image from 'next/image';

interface IPost {
    author: string;
    authorAvatarUri: string;
    createdAt: string;
    text?: string;
    imageUri: string | '';
}

const Post: React.FC<IPost> = ({ author, authorAvatarUri, createdAt, text, imageUri }) => {
  return (
    <div className={ styles.post }>
        <div className={ styles.postHeader }>
            <AvatarContainer width={40} height={40} uri={authorAvatarUri} />
            <div className={ styles.postInfo }>
                <div className={ styles.infoHeader }>
                    <div className={ styles.author }>{ author }</div>
                    <div className={ styles.followButton }>
                        <Link href={'/'}>Seguir</Link> 
                    </div>

                </div>
                <div className={ styles.postDate }>{ createdAt }</div>
            </div>
        </div>
        <div className={ styles.postText }>
            <p>{ text }</p>
        </div>
        <div className={ styles.postImage }>
            <img src={ imageUri } alt="Imagem da postagem" />
        </div>
    </div>
  );
}

export default Post;