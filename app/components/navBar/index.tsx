import Link from 'next/link';
import styles from './navbar.module.scss';

const NavBar = () => {
    return (
        <nav className={ styles.sideMenu }>
            <Link href="dashboard/feed" className={ styles.sideMenuLink }>Feed de notícias</Link>
            <Link href="#" className={ styles.sideMenuLink }>Grupos</Link>
            <Link href="#" className={ styles.sideMenuLink }>Grupos</Link>
            <Link href="#" className={ styles.sideMenuLink }>Grupos</Link>
        </nav>
    )
}

export default NavBar;