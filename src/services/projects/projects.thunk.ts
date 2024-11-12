/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import GeneralApi from '../_common/geberalApi';
import { IProject } from "./projects.constants";
import { message } from "antd";

export const getProjects = createAsyncThunk(
  'get/projects',
  async (_, { rejectWithValue }) => {
    try {
      const response = await GeneralApi.get(
        `/projects`
      );

      if (response.length === 0) {
        throw new Error('Error al obtener la lista de proyectos');
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const createProject = createAsyncThunk(
  'post/project',
  async ({ project }: IProject, { rejectWithValue }) => {
    try {
      const response = await GeneralApi.post(
        `/projects`,
        project
      );

      if (response.length === 0) {
        message.error('Hubo un error intentalo denuevo')
        throw new Error('Error al crear proyecto');
      }
      message.success('Proyecto Creado correctamente')
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProject = createAsyncThunk(
  'put/projects',
  async ({ project }: IProject, { rejectWithValue }) => {
    try {
      const response = await GeneralApi.put(
        `/projects/${project.id}`,
        project
      );

      if (response.length === 0) {
        message.error('Hubo un error intentalo denuevo')
        throw new Error('Error al actualizar proyecto');
      }
      message.success('Proyecto actualizado correctamente')
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProject = createAsyncThunk(
  'delete/projects',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await GeneralApi.delete(
        `/projects/${id}`
      );

      if (response === 'Not Found') {
        message.error('Hubo un error intentalo denuevo')
        throw new Error('Error al eliminar proyecto');
      }

      message.success('Proyecto eliminado correctamente')
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

