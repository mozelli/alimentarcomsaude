import DashboardHeader from '../components/dashboardHeader/page';
import Footer from '../components/footer/page';
import styles from './dashboard.module.scss'
import Display from '../components/display/page';
import NavBar from '../components/navBar';

const Dashboard = () => {
    return (
        <>
            <DashboardHeader />
            <div className={ styles.dashboard }>
            
                <div className={ styles.display }>
                    <NavBar />
                    <Display />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard;