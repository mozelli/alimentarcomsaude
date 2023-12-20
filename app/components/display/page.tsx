import styles from './display.module.scss'
import Feed from './feed/page'

const Display = () => {
    return (
        <section className={ styles.display }>
            <Feed />
        </section>
    )
}

export default Display;