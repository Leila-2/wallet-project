import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    getCategories,

} from './categories-actions';

const categories = createReducer({ categories: [], categoriesError: {} }, {
    [getCategories.fulfilled]: (state, { payload }) => {
        return { ...state, categories: payload };
    },
    [getCategories.rejected]: (state, { payload }) => {
        return { ...state, categoriesError: payload };
    },

});


export default categories
