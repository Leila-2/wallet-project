import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.baseURL = `https://wallet-team-backend.herokuapp.com/api`;

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'AUTH_TOKEN',
)}`;

//==================REGISTER====================
export const register = async (name, email, password) => {
  try {
    const res = await axios.post(`/users/signup`, { name, email, password });
    toast.success('Регистрация успешна');
    return res;
  } catch (error) {
    toast.error('Oшибка регистрации');
  }
};

//==================LOGIN=====================
export const login = async (email, password) => {
  try {
    const res = await axios.post(`/users/login`, { email, password });
    toast.success('Авторизация успешна');
    return res;
  } catch (error) {
    toast.error('Ошибка авторизации');
    // alert(error.response.data.message);
  }
};

//==================LOGOUT=====================
export const logout = async () => {
  try {
    const res = await axios.get(`/users/logout`);
    return res;
  } catch (error) {
    toast.error('Упс, что-то случилось');
    console.error(error);
  }
};

//==================CURRENT=====================
export const current = async () => {
  try {
    const res = await axios.get(`/users/current`);
    return res;
  } catch (error) {
    toast.error('Юзер не найден');
  }
};

//===================TRANSACTIONS ALL=====================
export const transactionsAll = async () => {
  try {
    const res = await axios.get(`/transactions/all?limit=6
    `);
    return res;
  } catch (error) {
    toast.error('Транзакции не загружены');
    console.error(error);
  }
};

//===================TRANSACTIONS CREATE=====================
export const transactionsCreate = async ({
  date,
  category,
  comment,
  amount,
  type,
}) => {
  try {
    const res = await axios.post(`/transactions/create`, {
      date,
      category,
      comment,
      amount,
      type,
    });

    console.log(res.data.data.transaction.type);
    if (res.data.data.transaction.type === 'incomes') {
      toast.success('Доход добавлен');
    } else if (res.data.data.transaction.type === 'expenses') {
      toast.success('Расход добавлен');
    }

    return res;
  } catch (error) {
    console.error(error);
  }
};

//===================TRANSACTIONS STAT=====================
export const transactionsStat = async () => {
  try {
    const res = await axios.get(`/transactions/statistics/?{month}&{year}`);
    return res;
  } catch (error) {
    toast.error('Статистика не загружена');
    console.error(error);
  }
};

//===================TRANSACTIONS ID=====================
export const transactionsId = async () => {
  try {
    const res = await axios.get(`/transactions/:transactionId`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//===================TRANSACTIONS UPDATE=====================
export const transactionsUpdate = async () => {
  try {
    const res = await axios.put(`/transactions/:transactionId`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//===================TRANSACTIONS DELETE=====================
export const transactionsDelete = async id => {
  try {
    const res = await axios.delete(`/transactions/${id}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//===================CATEGORY=====================
export const categories = async () => {
  try {
    const res = await axios.get(`/transactions/categories`);
    return res;
  } catch (error) {
    toast.error('Категории не загружены');
    console.error(error);
  }
};
