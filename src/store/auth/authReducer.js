import { actionRegister, actionLogin, actionCurrent, actionLogout } from './authActions';
import { createReducer } from '@reduxjs/toolkit';
const initialState = {
  login: {},
  loginError: {},
  register: null,
  registerError: null,
  currentUser: {},
  currentUserError: {},
  isLoggedIn: false,
};

const authReducer = createReducer(initialState, {
  [actionRegister.fulfilled]: (state, { payload }) => {
    return { ...state, register: payload };
  },
  [actionRegister.rejected]: (state, { payload }) => {
    return { ...state, registerError: payload };
  },
  [actionLogin.fulfilled]: (state, { payload }) => {
    return { ...state, login: payload, currentUser: payload, isLoggedIn: true };
  },
  [actionLogin.rejected]: (state, { payload }) => {
    return { ...state, loginError: payload };
  },
  [actionCurrent.fulfilled]: (state, { payload }) => {
    return { ...state, currentUser: payload, isLoggedIn: true };
  },
  [actionCurrent.rejected]: (state, { payload }) => {
    return { ...state, currentUserError: payload, isLoggedIn: false };
  },
  [actionLogout.fulfilled]: (state, _) => {
    state.isLoggedIn = false;
    state.currentUser = {};
  },
});

export default authReducer;
