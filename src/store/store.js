import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { modalReducer } from './modal/reducer';
import categories from './categories/categories-reducer';
import transactionsReducer from './transactions/transaction-reducer';
import authReducer from './auth/authReducer';
import { modalEditReducer } from './modal/reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionsReducer,
    modal: modalReducer,
    categories: categories,
    editModal: modalEditReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
