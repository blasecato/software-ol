/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import GeneralApi from '../_common/geberalApi';
import { IUser } from "./users.constants";
import { message } from "antd";

export const getUsers = createAsyncThunk(
  'get/users',
  async (_, { rejectWithValue }) => {
    try {
      const response = await GeneralApi.get(
        `/users`
      );

      if (response.length === 0) {
        throw new Error('Error al obtener la lista de usuarios');
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const createUser = createAsyncThunk(
  'create/users',
  async ({ user }: IUser, { rejectWithValue }) => {
    try {
      const response = await GeneralApi.post(
        `/users`,
        user
      );

      if (response.length === 0) {
        message.error('Hubo un error intentalo denuevo')
        throw new Error('Error al crear usuario');
      }
      message.success('Usuario creado correctamente')
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'update/users',
  async ({ user }: IUser, { rejectWithValue }) => {
    try {
      const response = await GeneralApi.put(
        `/users/${user.id}`,
        user
      );

      if (response.length === 0) {
        message.error('Hubo un error intentalo denuevo')
        throw new Error('Error al actualizar usuario');
      }
      message.success('Usuario actualizado correctamente')
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'delete/users',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await GeneralApi.delete(
        `/users/${id}`
      );

      if (response === 'Not Found') {
        message.error('Hubo un error intentalo denuevo')
        throw new Error('Error al eliminar proyecto');
      }

      message.success('Usuario eliminado correctamente')
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);