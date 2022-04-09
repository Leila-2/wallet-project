import { AUTH_ACTIONS } from './actionTypes';
import { register, login } from '../../service/axios.config';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
      return response.data.user;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
