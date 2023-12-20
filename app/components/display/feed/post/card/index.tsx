import Image from 'next/image';
import styles from './card.module.scss';

const Card = () => {
    return (
        <article className={ styles.card }>
            <div className="cardImage">
                <Image src="/images/movie.jpg" alt='Imagem do post' width={288} height={384} />
            </div>
        </article>
    )
}

export default Card;