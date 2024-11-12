/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { getNotifications, getTasks } from './notification.thunk';
import notificatuionInitialState, { NotificationState } from './notification.constants';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: notificatuionInitialState,
  reducers: {
    resetNotificatios: (state) => {
      state.notifications = notificatuionInitialState.notifications;
    },
    clearTasks: (state) => {
      state.tasks = notificatuionInitialState.tasks;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotifications.pending, (state: NotificationState) => {
        state.notifications.loading = 'loading';
      })
      .addCase(getNotifications.rejected, (state: NotificationState, payload: any) => {
        state.notifications = {
          loading: 'failed',
          error: payload,
          data: undefined
        };
      })
      .addCase(getNotifications.fulfilled, (state: NotificationState, { payload }: any) => {
        state.notifications = {
          loading: 'success',
          error: undefined,
          data: payload
        };
      });

    builder
      .addCase(getTasks.pending, (state: NotificationState) => {
        state.tasks.loading = 'loading';
      })
      .addCase(getTasks.rejected, (state: NotificationState, payload: any) => {
        state.tasks = {
          loading: 'failed',
          error: payload,
          data: undefined
        };
      })
      .addCase(getTasks.fulfilled, (state: NotificationState, { payload }: any) => {
        state.tasks = {
          loading: 'success',
          error: undefined,
          data: payload
        };
      });
  },
});

export default notificationSlice.reducer;
export const { clearTasks, resetNotificatios } = notificationSlice.actions;