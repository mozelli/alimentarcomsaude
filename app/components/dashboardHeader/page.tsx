import Image from 'next/image'
import styles from './dashboardHeader.module.scss'

const DashboardHeader = () => {
    return (
        <header className={ styles.header }>
            <div className="row">
                <div className="col">
                    <h1>Alimentar com Saúde</h1>
                </div>
                <div className="col text-center">
                    <Image src="/icons/home_icon.svg" width={24} height={24} alt='Página principal' />
                    <Image src="/icons/bell_alert_icon.svg" width={24} height={24} alt='Notificações' />
                </div>
                <div className="col text-end">
                    <Image src="/icons/config_configuration_settings_icon.svg" width={24} height={24} alt='Configurações' />
                    <span className={ styles.exit }>Sair</span>
                    <Image src="/icons/close_exit_logout_power_icon.svg" width={24} height={24} alt='Sair' />
                </div>
            </div>
        </header>
    )
}

export default DashboardHeader;