import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import transactionsActions from "./transactions-actions";

const incomes = createReducer([], {
  [transactionsActions.getIncomeSuccess]: (_, { payload }) => [...payload.data],
  [transactionsActions.addIncomeSuccess]: (state, { payload }) => [
    payload,
    ...state,
  ],
});

const costs = createReducer([], {
  [transactionsActions.getCostsSuccess]: (_, { payload }) => [
    ...payload.data,
  ],
  [transactionsActions.addCostsSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],

});

const error = createReducer(null, {
  [transactionsActions.addIncomeError]: (_, { payload }) => payload,
  [transactionsActions.addCostsError]: (_, { payload }) => payload,

});

const isLoading = createReducer(false, {
  [transactionsActions.addIncomeRequest]: () => true,
  [transactionsActions.addIncomeSuccess]: () => false,
  [transactionsActions.addIncomeError]: () => false,
  [transactionsActions.addCostsRequest]: () => true,
  [transactionsActions.addCostsSuccess]: () => false,
  [transactionsActions.addCostsError]: () => false,
});

export default combineReducers({
  incomes,
  costs,
  error,
  isLoading,
});