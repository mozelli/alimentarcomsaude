'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './display.module.scss'
import Feed from './feed/page'

const Display = () => {
    const [user, setUser] = useState('');
    const router = useRouter();

    useEffect(() => {
        const dataSession = sessionStorage.getItem('authenticated');
        if(dataSession) {
            const dataLocal = localStorage.getItem('user');
            if(dataLocal) {
                const converted = JSON.parse(dataLocal);
                const { gender } = converted;
                setUser(gender);
            } else {
                sessionStorage.removeItem('authenticated');
                router.replace('/');    
            }
        } else {
            sessionStorage.removeItem('authenticated');
            localStorage.removeItem('user');
            router.replace('/');
        }
    }, [user, router]);

    return (
        <section className={ styles.display }>
            <pre>
                {
                    user
                }
            </pre>
            <Feed />
        </section>
    )
}

export default Display;