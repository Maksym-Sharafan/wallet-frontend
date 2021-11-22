import axios from 'axios';

import actions from './statistics-actions';

const fetchStatistics = (month, year) => async dispatch => {
  dispatch(actions.fetchStatisticsRequest());

  try {
    const { data } = await axios.get(`/transactions?month=${month}&year=${year}`)

    dispatch(actions.fetchStatisticsSuccess(data));
  } catch (e) {
    dispatch(actions.fetchStatisticsError(e.message));
  }
};

const fetchBalance = () => async dispatch => {
  dispatch(actions.fetchBalanceRequest());

  try {
    const { data } = await axios.get('/auth/current');
    dispatch(actions.fetchBalanceSuccess(data.data.balance));
  } catch (e) {
    dispatch(actions.fetchBalanceError(e.message));
  }
};

const statisticOperations = { fetchStatistics, fetchBalance };

export default statisticOperations;