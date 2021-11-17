import { createSelector } from "reselect";

const getBalance = (state) => state.transactions.balance;
const getIncomes = (state) => state.transactions.incomes;
const getCosts = (state) => state.transactions.costs;
const getLoading = (state) => state.transactions.isLoading;
const getError = (state) => state.transactions.error;
const getIncCategories = (state) => state.transactions.categories.incomes;
const getCostsCategories = (state) => state.transactions.categories.costs;

const getAllTransactions = createSelector(
  [getIncomes, getCosts],
  (incomes, costs) => ({ incomes, costs })
);

const transactionsSelectors = {
  getBalance,
  getIncomes,
  getCosts,
  getLoading,
  getError,
  getAllTransactions,
  getIncCategories,
  getCostsCategories,
};

export default transactionsSelectors;