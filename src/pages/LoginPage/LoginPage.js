import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Typography } from '@material-ui/core';
import styles from '../RegistrationPage/RegistrationPage.module.css';

const LoginPage = () => {
  return (
    <>
      <div className={styles.authBackdrop}></div>
      <div className={styles.container}>
        <div className={`${styles.backgroundWrapper} ${styles.login}`}>
          <Typography variant="h1" component="h1" className={styles.title}>
            Finance App
          </Typography>
        </div>

        <LoginForm />
      </div>
    </>
  );
};
export default LoginPage;
