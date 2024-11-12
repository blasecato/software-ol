/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { login } from './auth.thunk';
import authInitialState, { AuthState } from './auth.constants';


const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state: AuthState) => {
        state.authentication.loading = 'loading';
      })
      .addCase(login.rejected, (state: AuthState, payload: any) => {
        state.authentication = {
          loading: 'failed',
          error: payload,
          data: undefined
        };
        state.isAuthenticated = false;
      })
      .addCase(login.fulfilled, (state: AuthState, { payload }: any) => {
        state.authentication = {
          loading: 'success',
          error: undefined,
          data: payload
        };
        state.isAuthenticated = true;
      });

  },
});

export default authSlice.reducer;