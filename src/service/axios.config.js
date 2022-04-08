import axios from 'axios';

axios.defaults.baseURL = `https://wallet-team-backend.herokuapp.com/api`;

//==================REGISTER====================
export const register = async (name, email, password) => {
  try {
    const res = await axios.post(`/users/signup`, { name, email, password });
    return res;
  } catch (error) {
    console.error(error);
  }
};

//==================LOGIN=====================
export const login = async (email, password) => {
  try {
    const res = await axios.post(`/users/login`, { email, password });
    // console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//==================LOGOUT=====================
export const logout = async () => {
  try {
    const res = await axios.post(`/users/logout`);
    // console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//==================CURRENT=====================
export const current = async () => {
  try {
    const res = await axios.get(`/users/current`);
    // console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//===================TRANSACTIONS ALL=====================
export const transactionsAll = async () => {
  try {
    const res = await axios.get(`/transactions/all`);
    // console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//===================TRANSACTIONS CREATE=====================
export const transactionsCreate = async () => {
  try {
    const res = await axios.post(`/transactions/create`);
    // console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//===================TRANSACTIONS STAT=====================
export const transactionsStat = async () => {
  try {
    const res = await axios.get(`/transactions/statistics/?{month}&{year}`);
    // console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//===================TRANSACTIONS ID=====================
export const transactionsId = async () => {
  try {
    const res = await axios.get(`/transactions/:transactionId`);
    // console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//===================TRANSACTIONS UPDATE=====================
export const transactionsUpdate = async () => {
  try {
    const res = await axios.put(`/transactions/:transactionId`);
    // console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//===================TRANSACTIONS DELETE=====================
export const transactionsDelete = async () => {
  try {
    const res = await axios.delete(`/transactions/:transactionId`);
    // console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//===================CATEGORY=====================
export const categories = async () => {
  try {
    const res = await axios.get(`/transactions/categories`);
    // console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};
