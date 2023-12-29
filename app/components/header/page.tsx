//import styles from './header.module.scss'

import Link from "next/link";

const Header = () => {
    return (
        <nav className="navbar bg-success">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand text-white">Alimentar com Saúde</Link>
            </div>
        </nav>
        // <div className={ styles.header }>
        //     <header>
        //         <div className="row">
        //             <div className="col-lg-3">
        //                 <h1>Alimentar com Saúde</h1>
        //             </div>
        //             <div className="col-lg-7">

        //             </div>
        //             <div className="col-lg-2">
            
        //             </div>
        //         </div>
        //     </header>
        // </div>
    )
}

export default Header;