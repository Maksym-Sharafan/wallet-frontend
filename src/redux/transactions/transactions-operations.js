import axios from 'axios';
import transactionsActions from './transactions-actions';


// axios.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOThjZWIzMWM1MDUxYjIyNDExODUwNCIsImlhdCI6MTYzNzUxNTY0NH0.tcE4vi7F4JgM7vSEsgnwx1Ev7nDNoy4vmPsa5Lrn-uY";
// axios.defaults.baseURL = 'http://localhost:8080/api';


const addTransaction = (transaction) => async dispatch => {
    dispatch(transactionsActions.addTransactionRequest())
    try {
        const { data } = await axios.post('/transactions', transaction)
        dispatch(transactionsActions.addTransactionSuccess(data))
    } catch (error) {
        // console.log(error)
        dispatch(transactionsActions.addTransactionError(error.message))
    }
};
  
   const fetchTransactions = () => async dispatch => {
    dispatch(transactionsActions.fetchTransactionRequest())
    try {
        const { data } = await axios.get("/transactions");
        dispatch(transactionsActions.fetchTransactionSuccess(data))
    } catch (error) {
        dispatch(transactionsActions.fetchTransactionError(error.message))
    }
};

const transactionOperations = { addTransaction, fetchTransactions };

export default transactionOperations;
