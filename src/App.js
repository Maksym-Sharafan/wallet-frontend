// import ModalComponent from './components/modal/modal_1'
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "react-loader-spinner";
import AddBtn from "./components/addBtn/addBtn";
import PublicRoute from "./components/Routes/PublicRoute";
import Container from "./components/Container";

const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage" /* webpackChunkName: "registration-page" */)
);

console.log(RegistrationPage);

function App() {
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
          {/* <AddBtn /> */}
        </Routes>
        {/* <ModalComponent /> */}
      </Suspense>
    </Container>
  );
}

export default App;
