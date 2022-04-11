
import { categories } from '../../service/axios.config';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async (data, { rejectWithValue }) => {

        try {
            const response = await categories();
            console.log(response.data.data)
            return response.data.data
        } catch (err) {
            console.log(err.response.data);
        }
    },
);

