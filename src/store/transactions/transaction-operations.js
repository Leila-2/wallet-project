import axios from 'axios';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  getStatisticsRequest,
  getStatisticsSuccess,
  getStatisticsError,
  addTransRequest,
  addTransSuccess,
  addTransError,
} from './transaction-actions';

axios.defaults.baseURL = 'https://wallet-team-backend.herokuapp.com/api';

const getTransactions = () => async dispatch => {
  dispatch(getTransactionsRequest());
  try {
    const { data } = await axios.get('/transactions/all?limit=6');

    dispatch(getTransactionsSuccess(data));
  } catch (error) {
    dispatch(getTransactionsError(error.message));
  }
};

const getStatistics =
  ({ year, month }) =>
  async dispatch => {
    dispatch(getStatisticsRequest());
    try {
      const { data } = await axios.get(
        `/transactions/statistics?month=${month}&year=${year}`,
      );
      dispatch(getStatisticsSuccess(data));
    } catch (error) {
      dispatch(getStatisticsError(error.message));
    }
  };
const addTransaction = transaction => async dispatch => {
  dispatch(addTransRequest());
  try {
    const { data } = await axios.post('/transactions/create', transaction);

    dispatch(addTransSuccess(data));
  } catch (error) {
    dispatch(addTransError(error.message));
  }
};

const transactionOperations = {
  getTransactions,
  getStatistics,
  addTransaction,
};

export default transactionOperations;
