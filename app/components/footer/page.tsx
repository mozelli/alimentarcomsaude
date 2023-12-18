import styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col-12 text-center">
                    <span className={ styles.credits }>
                        Desenvolvido por <strong>João Mozelli Neto</strong>
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <span className={ styles.copyrights }>
                    &copy;2003 Todos os direitos reservados.
                    </span> 
                </div>    
            </div>
        </footer>
    )
}

export default Footer;