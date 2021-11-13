import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import ModalAddTransactionOpen from './modalAddTransaction/modal-reduser'

const rootReducer = combineReducers({
  ModalAddTransactionOpen,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;