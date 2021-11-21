import axios from 'axios';

import actions from './statistics-actions';

axios.defaults.baseURL = 'https://wallet-29.herokuapp.com/api';

const fetchStatistics = (month, year) => async dispatch => {
  dispatch(actions.fetchStatisticsRequest());

  try {
    const {
      data: { statistics },
    } = await axios.get(`/transactions/${month}/${year}`);

    dispatch(actions.fetchStatisticsSuccess(statistics));
  } catch (e) {
    dispatch(actions.fetchStatisticsError(e.message));
  }
};

const fetchBalance = () => async dispatch => {
  dispatch(actions.fetchBalanceRequest());

  try {
    const {
      data: {
        response: { totalBalance },
      },
    } = await axios.get('/transactions');

    dispatch(actions.fetchBalanceSuccess(totalBalance));
  } catch (e) {
    dispatch(actions.fetchBalanceError(e.message));
  }
};

const statisticOperations = { fetchStatistics, fetchBalance };

export default statisticOperations;