import React from 'react';

import styles from './styles.module.scss';
import Post from './post';

const post = {
  author: 'João Mozelli Neto',
  createdAt: '30 de dezembro de 2023',
  authorAvatarUri: '/images/perfil.jpg',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad?',
  imagePostUri: '/images/foodImage.jpg'

}

const TimeLine: React.FC = () => {
  return (
    <div className={ styles.timeline }>
        <Post 
          author={ post.author } 
          createdAt={ post.createdAt } 
          authorAvatarUri={ post.authorAvatarUri }
          text={ post.text }
          imageUri={ post.imagePostUri } 
        />
        <Post 
          author={ post.author } 
          createdAt={ post.createdAt } 
          authorAvatarUri={ post.authorAvatarUri }
          text={ post.text }
          imageUri={ post.imagePostUri } 
        />
        <Post 
          author={ post.author } 
          createdAt={ post.createdAt } 
          authorAvatarUri={ post.authorAvatarUri }
          text={ post.text }
          imageUri={ post.imagePostUri } 
        />
    </div>
  );
}

export default TimeLine;