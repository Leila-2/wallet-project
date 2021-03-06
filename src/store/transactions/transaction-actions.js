import { createAction } from '@reduxjs/toolkit';

// getTransactions
export const getTransactionsRequest = createAction(
  'transaction/getTransactionsRequest',
);
export const getTransactionsSuccess = createAction(
  'transaction/getTransactionsSuccess',
);
export const getTransactionsError = createAction(
  'transaction/getTransactionsError',
);

//get statistics
export const getStatisticsRequest = createAction(
  'transactions/getStatisticsRequest',
);
export const getStatisticsSuccess = createAction(
  'transactions/getStatisticsSuccess',
);
export const getStatisticsError = createAction(
  'transactions/getStatisticsError',
);
export const addTransRequest = createAction(
  'transaction/addTransRequest',
  ({ date, type, category, comment, amount }) => ({
    payload: {
      date,
      type,
      category,
      comment,
      amount,
    },
  }),
);
export const addTransSuccess = createAction('transaction/addTransSuccess');
export const addTransError = createAction('transaction/addTransError');
