import { Outlet } from "react-router";

import AppBar from "../components/AppBar";
import Header from "../components/Header";
import AddBtn from "../components/AddBtn"

import styles from "./DashboardPage.module.css";

import { transactionsOperations } from "../redux/transactions";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


export default function DashboardPage() {
        const dispatch = useDispatch();
        useEffect(() => {
        dispatch(transactionsOperations.fetchTransactions());
      }, [dispatch]);

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