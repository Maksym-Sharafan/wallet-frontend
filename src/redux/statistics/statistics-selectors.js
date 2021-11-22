const getItems = state => state.statistics.items;
const getBalance = state => state.statistics.balance;

const statisticsSelectors = {
  getItems,
  getBalance,
};

export default statisticsSelectors;