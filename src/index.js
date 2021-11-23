import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as store from './redux/store';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate persistor={store.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
