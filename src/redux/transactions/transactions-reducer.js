import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import transactionsActions from "./transactions-actions";

const itemsReducer = createReducer([], {
    [transactionsActions.fetchTransactionSuccess]: (_, { payload }) => payload.transactionList,
});


const error = createReducer(null, {
  [transactionsActions.addTransactionRequest]: () => null,
  [transactionsActions.addTransactionSuccess]: () => null,
  [transactionsActions.addTransactionError]: (_, { payload }) => payload,
  [transactionsActions.fetchTransactionRequest]: () => null,
  [transactionsActions.fetchTransactionSuccess]: () => null,
  [transactionsActions.fetchTransactionError]: (_, { payload }) => payload,


});

const isLoading = createReducer(false, {
  [transactionsActions.addTransactionRequest]: () => true,
  [transactionsActions.addTransactionSuccess]: () => false,
  [transactionsActions.addTransactionError]: () => false,
  [transactionsActions.fetchTransactionRequest]: () => true,
  [transactionsActions.fetchTransactionSuccess]: () => false,
  [transactionsActions.fetchTransactionError]: () => false,
});

export default combineReducers({
  items: itemsReducer,
  error,
  isLoading,
});