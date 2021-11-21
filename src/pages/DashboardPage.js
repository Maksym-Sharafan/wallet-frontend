import { Outlet } from "react-router";
import Media from 'react-media';

import AppBar from "../components/AppBar";
// import AddBtn from "../components/AddBtn";

import Header from "../components/Header";
// import { transactionsOperations } from "../redux/transactions";



import styles from "./DashboardPage.module.css";
import React from "react";
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

export default function DashboardPage({ children }) {
//     const dispatch = useDispatch();
//     useEffect(() => {
//     dispatch(transactionsOperations.fetchTransactions());
//   }, [dispatch]);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.main_container}>
                    <AppBar />
                    {/* <AddBtn/> */}
                    <div className={styles.main_content}>
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    );
}