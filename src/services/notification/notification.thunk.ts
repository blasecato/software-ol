/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import GeneralApi from '../_common/geberalApi';

export const getNotifications = createAsyncThunk(
  'get/notifications',
  async (_, { rejectWithValue }) => {
    try {
      const response = await GeneralApi.get(
        `/notification`
      );

      if (response.length === 0) {
        throw new Error('Error al obtener las notificaciones');
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTasks = createAsyncThunk(
  'get/tasks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await GeneralApi.get(
        `/todos`
      );

      if (response.length === 0) {
        throw new Error('Error al obtener las tareas');
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
