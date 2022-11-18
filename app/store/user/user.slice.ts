import { createSlice } from '@reduxjs/toolkit';

import { getStoreLocal } from '@/utils/local-storage';

import { checkAuth, login, logout, register } from '@/store/user/user.actions';
import { IUserInitialState } from '@/store/user/user.interface';

const initialState: IUserInitialState = {
  user: getStoreLocal('user'),
  isLoading: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //register
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoading = false;
      state.user = null;
    });

    //login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.user = null;
    });

    //logout
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = false;
      state.user = null;
    });

    //checkAuth
    builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
    });
  }
});

export const { reducer } = userSlice;
