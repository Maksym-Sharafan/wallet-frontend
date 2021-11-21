import { Outlet } from 'react-router';

import AppBar from '../components/AppBar';
import AddBtn from '../components/AddBtn'
import Header from '../components/Header';

import styles from './DashboardPage.module.css';

export default function DashboardPage() {

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.main_container}>
                    <AppBar />
                    <div className={styles.main_content}>
                        <Outlet />
                    </div>
                    <AddBtn />
                </div>
            </main>
        </>
    );
}