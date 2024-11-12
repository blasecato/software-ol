/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { getUsers, createUser, deleteUser, updateUser } from './users.thunk';
import usersInitialState, { UsersState } from './users.constants';

const usersdSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state: UsersState) => {
        state.listUsers.loading = 'loading';
      })
      .addCase(getUsers.rejected, (state: UsersState, payload: any) => {
        state.listUsers = {
          loading: 'failed',
          error: payload,
          data: undefined
        };
      })
      .addCase(getUsers.fulfilled, (state: UsersState, { payload }: any) => {
        state.listUsers = {
          loading: 'success',
          error: undefined,
          data: payload
        };
      });

    builder
      .addCase(createUser.pending, (state: UsersState) => {
        state.createUser.loading = 'loading';
      })
      .addCase(createUser.rejected, (state: UsersState, payload: any) => {
        state.createUser = {
          loading: 'failed',
          error: payload,
          data: undefined
        };
      })
      .addCase(createUser.fulfilled, (state: UsersState, { payload }: any) => {
        state.createUser = {
          loading: 'success',
          error: undefined,
          data: payload
        };
      });

    builder
      .addCase(updateUser.pending, (state: UsersState) => {
        state.updateUser.loading = 'loading';
      })
      .addCase(updateUser.rejected, (state: UsersState, payload: any) => {
        state.updateUser = {
          loading: 'failed',
          error: payload,
          data: undefined
        };
      })
      .addCase(updateUser.fulfilled, (state: UsersState, { payload }: any) => {
        state.updateUser = {
          loading: 'success',
          error: undefined,
          data: payload
        };
      });

    builder
      .addCase(deleteUser.pending, (state: UsersState) => {
        state.deleteUser.loading = 'loading';
      })
      .addCase(deleteUser.rejected, (state: UsersState, payload: any) => {
        state.deleteUser = {
          loading: 'failed',
          error: payload,
          data: undefined
        };
      })
      .addCase(deleteUser.fulfilled, (state: UsersState, { payload }: any) => {
        state.deleteUser = {
          loading: 'success',
          error: undefined,
          data: payload
        };
      });
  },
});

export default usersdSlice.reducer;
