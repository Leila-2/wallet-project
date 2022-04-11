import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  getStatisticsRequest,
  getStatisticsSuccess,
  getStatisticsError,
} from './transaction-actions';

const initialState = {
  data: {
    totalBalance: 0,
    transactions: [],
  },
};

const result = createReducer(initialState, {
  [getTransactionsSuccess]: (_, { payload }) => payload,
  [getStatisticsSuccess]: (_, { payload }) => payload,
  [getTransactionsError]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getTransactionsRequest]: () => true,
  [getTransactionsSuccess]: () => false,
  [getTransactionsError]: () => false,
  [getStatisticsRequest]: () => true,
  [getStatisticsSuccess]: () => false,
  [getStatisticsError]: () => false,
});

const error = createReducer(null, {
  [getTransactionsRequest]: () => null,
  [getTransactionsError]: (_, { payload }) => payload,
  [getStatisticsError]: (_, { payload }) => payload,
  [getStatisticsRequest]: () => null,
});

const transactionsReducer = combineReducers({
  result,
  loading,
  error,
});

export default transactionsReducer;
