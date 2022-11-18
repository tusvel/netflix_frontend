import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { AuthService } from '@/services/auth/auth.service';

import { errorHandler } from '@/utils/errorHandler';
import { toastError } from '@/utils/toast-error';

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface';

/* register */
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
  'auth/register',
  async ({ email, password }, thunkApi) => {
    try {
      const response = await AuthService.register(email, password);
      toastr.success('Registration', 'Completed successfully');
      return response.data;
    } catch (error) {
      toastError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

/* login */
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
  'auth/login',
  async ({ email, password }, thunkApi) => {
    try {
      const response = await AuthService.login(email, password);
      toastr.success('Login', 'Completed successfully');
      return response.data;
    } catch (error) {
      toastError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

/* logout */
export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

/* checkAuth */
export const checkAuth = createAsyncThunk<IAuthResponse>(
  'auth/check-auth',
  async (_, thunkApi) => {
    try {
      const response = await AuthService.getNewTokens();
      return response.data;
    } catch (error) {
      if (errorHandler(error) === 'jwt expired') {
        toastr.error(
          'Logout',
          'Your authorization is finished, plz sign in again'
        );
        thunkApi.dispatch(logout());
      }

      return thunkApi.rejectWithValue(error);
    }
  }
);
