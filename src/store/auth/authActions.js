import { AUTH_ACTIONS } from './actionTypes';
import { register, login, current, logout } from '../../service/axios.config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const actionRegister = createAsyncThunk(
  AUTH_ACTIONS.REGISTER,
  async (data, { rejectWithValue }) => {
    const { name, email, password } = data;
    try {
      const response = await register(name, email, password);
      return response.data.user;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const actionLogin = createAsyncThunk(
  AUTH_ACTIONS.LOGIN,
  async (data, { rejectWithValue }) => {
    const { email, password } = data;
    try {
      const response = await login(email, password);

      localStorage.setItem('AUTH_TOKEN', response.data.user.token);
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + response.data.user.token;
      return response.data.user;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const actionCurrent = createAsyncThunk(
  AUTH_ACTIONS.CURRENT,
  async (data, { rejectWithValue }) => {
    try {
      const response = await current();

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const actionLogout = createAsyncThunk(AUTH_ACTIONS.LOGOUT, async () => {
  try {
    await logout();
    localStorage.removeItem('AUTH_TOKEN');
  } catch (err) {}
});
