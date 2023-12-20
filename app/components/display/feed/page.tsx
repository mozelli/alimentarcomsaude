import styles from './feed.module.scss';
import Post from './post/page';

const Feed = () => {
    return (
        <div className={ styles.feed }>
            <Post />
        </div>
    )
}

export default Feed;