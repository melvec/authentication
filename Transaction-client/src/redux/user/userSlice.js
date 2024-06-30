//Slice - used to build State using redux-toolkit
//1. Initial state
//2. Reducers

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      const { payload } = action;
      state.isAuthenticated = payload;
    },
  },
});

const { reducer: userReducer, actions } = userSlice;

export const { setIsAuthenticated } = actions;

export default userReducer;
