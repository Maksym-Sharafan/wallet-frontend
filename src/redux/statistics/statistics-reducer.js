import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import actions from './statistics-actions';

const {fetchStatisticsRequest, fetchStatisticsError, fetchStatisticsSuccess,fetchBalanceRequest, fetchBalanceSuccess, fetchBalanceError } = actions;

const items = createReducer([], {
  [fetchStatisticsSuccess]: (_, { payload }) => payload.transactionList,
});

const balance = createReducer(null, {
  [fetchBalanceSuccess]: (_, { payload }) => payload,
});


const error = createReducer(null, {
  [fetchStatisticsRequest]: () => null,
  [fetchStatisticsSuccess]: () => null,
  [fetchStatisticsError]: (_, { payload }) => payload,

  [fetchBalanceRequest]: () => null,
  [fetchBalanceSuccess]: () => null,
  [fetchBalanceError]: (_, { payload }) => payload,

});

const isLoading = createReducer(false, {
  [fetchStatisticsRequest]: () => true,
  [fetchStatisticsSuccess]: () => false,
  [fetchStatisticsError]: () => false,
  [fetchBalanceRequest]: () => true,
  [fetchBalanceSuccess]: () => false,
  [fetchBalanceError]: () => false,

});

const statisticsReducer = combineReducers({
  items,
  balance,
  error,
  isLoading
});

export default statisticsReducer;