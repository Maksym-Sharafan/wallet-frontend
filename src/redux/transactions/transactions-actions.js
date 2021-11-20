import { createAction } from "@reduxjs/toolkit";

const addTransactionRequest = createAction("transactions/addTransactionRequest");
const addTransactionSuccess = createAction("transactions/addTransactionSuccess");
const addTransactionError = createAction("transactions/addTransactionError");


const fetchTransactionRequest = createAction('transactions/fetchTransactionRequest');
const fetchTransactionSuccess = createAction('contacts/fetchTransactionSuccess');
const fetchTransactionError = createAction('contacts/fetchTransactionError');


const transactionsActions = {
  fetchTransactionRequest,
  fetchTransactionSuccess,
  fetchTransactionError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError
}  
export default transactionsActions;