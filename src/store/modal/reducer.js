import { createReducer } from "@reduxjs/toolkit";
import { toggleModal } from "./actions";

export const modalReducer = createReducer(false, { [toggleModal]: (state, action) => !state });
