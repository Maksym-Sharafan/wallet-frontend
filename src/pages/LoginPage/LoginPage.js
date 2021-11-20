import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../components/FormsUI/theme';
import Container from '../../components/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <>
      <Container>
        <ThemeProvider theme={theme}>
          <div className={styles.authBackdrop}></div>
          <div className={styles.container}>
            {/* <div className={styles.navigation_header_wallet}></div> */}
            <div className={styles.backgroundWrapper}>
              <h1 className={styles.title}>Finance App</h1>
            </div>

            <LoginForm />
          </div>
        </ThemeProvider>
      </Container>
    </>
  );
};
export default LoginPage;
