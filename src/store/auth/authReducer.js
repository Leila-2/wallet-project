import { actionRegister, actionLogin } from './authActions';
import { createReducer } from '@reduxjs/toolkit';
const initialState = {
  login: {},
  loginError: {},
  register: null,
  registerError: null,
  currentUser: {},
};

const authReducer = createReducer(initialState, {
  [actionRegister.fulfilled]: (state, { payload }) => {
    return { ...state, register: payload };
  },
  [actionRegister.rejected]: (state, { payload }) => {
    return { ...state, registerError: payload };
  },
  [actionLogin.fulfilled]: (state, { payload }) => {
    return { ...state, login: payload };
  },
  [actionLogin.rejected]: (state, { payload }) => {
    return { ...state, loginError: payload };
  },
});

export default authReducer;
