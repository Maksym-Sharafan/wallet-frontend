import axios from 'axios';
import transactionsActions from './transactions-actions';



const addTransaction = (transaction) => async dispatch => {
    dispatch(transactionsActions.addTransactionRequest())
    try {
        const { data } = await axios.post('/transactions', transaction)
        dispatch(transactionsActions.addTransactionSuccess(data))
    } catch (error) {
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
