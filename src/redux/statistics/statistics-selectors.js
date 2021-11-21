const getItems = state => state.statistics.items;
const getIncome = state => state.statistics.income;
const getOutlay = state => state.statistics.outlay;
const getBalance = state => state.statistics.balance;

// const getItems = state => state.transactions.items;
// const getIncome = state => state.transactions.incomes;
// const getOutlay = state => state.transactions.outlay;
// const getBalance = state => state.transactions.balance;

const statisticsSelectors = {
  getItems,
  getIncome,
  getOutlay,
  getBalance,
};

export default statisticsSelectors;