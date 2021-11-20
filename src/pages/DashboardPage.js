import { Outlet } from 'react-router';
import Media from 'react-media';

import AddBtn from '../components/AddBtn'

import AppBar from '../components/AppBar';

import Header from '../components/Header';

import HomeTab from '../components/HomeTab';

import styles from './DashboardPage.module.css';
import React from 'react';

export default function DashboardPage({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.main_container}>
          <div className={styles.main_container_HomTab}>
            <HomeTab />
          </div>

          <AppBar />
          <AddBtn />
          <div className={styles.main_content}>
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}
