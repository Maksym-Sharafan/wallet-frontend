const GetTransactionsList = state => state.transactions.items;
const getError = state => state.transactions.error;

const transactionsSelectors = {
  GetTransactionsList,
  getError
};

export default transactionsSelectors;
