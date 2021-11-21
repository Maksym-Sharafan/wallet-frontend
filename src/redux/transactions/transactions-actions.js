import { createAction } from "@reduxjs/toolkit";

const addTransactionRequest = createAction("transactions/addTransactionRequest");
const addTransactionSuccess = createAction("transactions/addTransactionSuccess");
const addTransactionError = createAction("transactions/addTransactionError");


const fetchTransactionRequest = createAction('transactions/fetchTransactionRequest');
const fetchTransactionSuccess = createAction('transactions/fetchTransactionSuccess');
const fetchTransactionError = createAction('transactions/fetchTransactionError');


const transactionsActions = {
  fetchTransactionRequest,
  fetchTransactionSuccess,
  fetchTransactionError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError
}  
export default transactionsActions;