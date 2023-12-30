import React from "react";

import styles from './styles.module.scss';

export default function DashboardLayout({children,}:{children: React.ReactNode}) {
    return (
        <main className={ styles.dashboardLayout }>
            {children}
        </main>
    )
}