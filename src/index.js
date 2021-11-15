import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// import reportWebVitals from "./reportWebVitals";
// import "modern-normalize/modern-normalize.css";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </PersistGate>
    </Provider>  */}
  </React.StrictMode>,
  document.getElementById('root'),
);
