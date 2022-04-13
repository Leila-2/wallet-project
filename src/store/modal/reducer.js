import { createReducer } from '@reduxjs/toolkit';
import { toggleModal } from './actions';
import { toggleEditModal } from './actions';

export const modalReducer = createReducer(false, {
  [toggleModal]: (state, action) => !state,
});
export const modalEditReducer = createReducer(false, {
  [toggleEditModal]: (state, action) => !state,
});
