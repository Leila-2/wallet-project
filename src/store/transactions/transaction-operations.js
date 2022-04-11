import axios from 'axios';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  getStatisticsRequest,
  getStatisticsSuccess,
  getStatisticsError,
} from './transaction-actions';

// axios.defaults.baseURL = 'https://wallet-team-backend.herokuapp.com/api';

const getTransactions = () => async dispatch => {
  dispatch(getTransactionsRequest());
  try {
    const { data } = await axios.get('/transactions/all');
    dispatch(getTransactionsSuccess(data));
  } catch (error) {
    dispatch(getTransactionsError(error.message));
  }
};

const getStatistics = params => async dispatch => {
  const { year, month } = params;

  dispatch(getStatisticsRequest());
  try {
    const { data } = await axios.get(
      `/transactions/statistics?${month}&${year}`,
    );
    dispatch(getStatisticsSuccess(data.statistic.transactions));
  } catch (error) {
    dispatch(getStatisticsError(error.message));
  }
};

const transactionOperations = {
  getTransactions,
  getStatistics,
};

export default transactionOperations;
