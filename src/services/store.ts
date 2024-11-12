import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './auth/auth.slice';
import usersReducer from './users/users.slice';
import dashboardReducer from './dashboard/dashboard.slice';
import projectsReducer from './projects/projects.slice';
import notificationReducer from './notification/notification.slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    projects: projectsReducer,
    users: usersReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;