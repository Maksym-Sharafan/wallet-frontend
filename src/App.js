import * as React from 'react';
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "react-loader-spinner";
import AddBtn from "./components/addBtn/addBtn";
import PublicRoute from "./components/Routes/PublicRoute";
import Container from "./components/Container";

// import AppBar from './components/AppBar/AppBar';
// import ModalComponent from './components/modal/modal_1'
// import AddBtn from './components/addBtn/addBtn'
// import DashboardPage from './pages/DashboardPage';

const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage" /* webpackChunkName: "registration-page" */)
);
const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-view" */),
);
const DiagramPage = lazy(() =>
  import('./pages/DiagramPage' /* webpackChunkName: "diagram-view" */),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "notFound-view" */),
);
const ExcludePage = lazy(() =>
  import('./pages/ExcludePage' /* webpackChunkName: "exclude-view" */),
);

export default function App() {
  return (
    <Container>
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#8c91b3"
            height={50}
            width={50}
            timeout={3000} //3 secs
          />
        }
      >
        <Routes>
          <Route
            exact
            path="/signup"
            restricted
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route path="home" index element={<HomePage />} />
          <Route path="diagram" element={<DiagramPage />} />
          <Route path="exclude" element={<ExcludePage />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* <AddBtn /> */}
        </Routes>
        {/* <ModalComponent /> */}
      </Suspense>
      {/* <DashboardPage /> */}
    </Container>
  );
}
