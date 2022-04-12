import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  getStatisticsRequest,
  getStatisticsSuccess,
  getStatisticsError,
  addTransSuccess,
  addTransError,
  addTransRequest,
} from './transaction-actions';

const initialState = {
  data: {
    totalBalance: 0,
    transactions: [],
  },
  statistics: { expenses: 0, incomes: 0, transactions: [] },
};

const result = createReducer(initialState, {
  [getTransactionsSuccess]: (_, { payload }) => {
    return {
      ..._,
      ...payload,
    };
  },
  [getStatisticsSuccess]: (_, { payload }) => {
    return {
      ..._,
      statistics: { ...payload },
    };
  },
  [getTransactionsError]: (_, { payload }) => payload,
  [addTransSuccess]: (_, { payload }) => payload,
  [addTransError]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getTransactionsRequest]: () => true,
  [getTransactionsSuccess]: () => false,
  [getTransactionsError]: () => false,
  [getStatisticsRequest]: () => true,
  [getStatisticsSuccess]: () => false,
  [getStatisticsError]: () => false,
  [addTransError]: () => false,
  [addTransSuccess]: () => true,
  [addTransRequest]: () => true,
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
