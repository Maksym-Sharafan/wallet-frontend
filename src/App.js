import * as React from 'react';
import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import PublicRoute from './components/Routes/PublicRoute';
import Container from './components/Container';
import { theme } from './components/FormsUI/theme';

import ProtectedRoute from './components/Routes/ProtectedRoute';

import Statistics from './components/Statistics';
import HomeTab from './components/HomeTab';
import Currency from './components/Currency';
import Loader from './components/Spinner';

import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from './redux/auth';
import { authOperations } from './redux/auth';

import { ToastContainer } from 'react-toastify';

const RegistrationPage = lazy(() =>
  import(
    './pages/RegistrationPage' /* webpackChunkName: "registration-page" */
  ),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const DashboardPage = lazy(() =>
  import('./pages/DashboardPage' /* webpackChunkName: "home-view" */),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "notFound-view" */),
);

export default function App() {
  const dispatch = useDispatch();
  const isGettingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isGettingCurrentUser && (
      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              exact
              path="/signup"
              restricted
              element={
                <Container>
                  <ThemeProvider theme={theme}>
                    <PublicRoute>
                      <RegistrationPage />
                    </PublicRoute>
                  </ThemeProvider>
                </Container>
              }
            />
            <Route
              path="/login"
              redirectTo="/"
              restricted
              element={
                <Container>
                  <ThemeProvider theme={theme}>
                    <PublicRoute restricted>
                      <LoginPage />
                    </PublicRoute>
                  </ThemeProvider>
                </Container>
              }
            />

            <Route
              path="/"
              exact
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            >
              <Route path="home" index element={<HomeTab />} />
              <Route path="diagram" element={<Statistics />} />
              <Route exact path="exclude" element={<Currency />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
      </div>
    )
  );
}
