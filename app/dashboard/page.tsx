import Link from 'next/link';
import DashboardHeader from '../components/dashboardHeader/page';
import Footer from '../components/footer/page';
import styles from './dashboard.module.scss'

const Dashboard = () => {
    return (
        <div className={ styles.dashboard }>
            <DashboardHeader />
            <section>
                <nav className={ styles.sideMenu }>
                    <Link href="#" className={ styles.sideMenuLink }>Amigos</Link>
                    <Link href="#" className={ styles.sideMenuLink }>Grupos</Link>
                    <Link href="#" className={ styles.sideMenuLink }>Grupos</Link>
                    <Link href="#" className={ styles.sideMenuLink }>Grupos</Link>
                </nav>
                <div className={ styles.feed }>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Dashboard;