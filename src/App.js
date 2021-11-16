import * as React from 'react';
// import { lazy, Suspense } from 'react';
// import AppBar from './components/AppBar/AppBar';
// import RegistrationForm from "./components/RegistrationForm";
// import ModalComponent from './components/modal/modal_1'
// import AddBtn from './components/addBtn/addBtn'
// import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
// const HomePage = lazy(() =>
//   import('./pages/HomePage' /* webpackChunkName: "home-view" */),
// );
// const DiagramPage = lazy(() =>
//   import('./pages/DiagramPage' /* webpackChunkName: "diagram-view" */),
// );
// const NotFoundPage = lazy(() =>
//   import('./pages/NotFoundPage' /* webpackChunkName: "notFound-view" */),
// );
// const ExcludePage = lazy(() =>
//   import('./pages/ExcludePage' /* webpackChunkName: "exclude-view" */),
// );
export default function App() {
  return (
    <div>
      {/* <Suspense fallback={<Loader />}> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="home" index element={<HomePage />} />
          <Route path="diagram" element={<DiagramPage />} />
          <Route path="exclude" element={<ExcludePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <AppBar /> */}
      <DashboardPage />
    </div>
  );
}
