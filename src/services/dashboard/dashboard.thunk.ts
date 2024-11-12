/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY_CLIMATE, API_URL_CLIMATE } from "../../common/const";
import GeneralApi from '../_common/geberalApi';


export const getWeather = createAsyncThunk(
  'get/weather',
  async ({ city }: any, { rejectWithValue }) => {
    try {
      const url = `${API_URL_CLIMATE}?q=${city}&appid=${API_KEY_CLIMATE}&units=metric&lang=en`;
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        return data
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log("An error occurred while fetching the weather data:", error);
      return rejectWithValue(error);
    }
  }
);

export const getCardsInfo = createAsyncThunk(
  'get/cards',
  async (_, { rejectWithValue }) => {
    try {
      const response = await GeneralApi.get(
        `/dashboard_cards`
      );

      if (response.length === 0) {
        throw new Error('Error al obtener la informacion de las cards');
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCpuReport = createAsyncThunk(
  'get/cpureport',
  async (_, { rejectWithValue }) => {
    try {
      const response = await GeneralApi.get(
        `/cpu_report`
      );

      if (response.length === 0) {
        throw new Error('Error al obtener los detalles del servidor');
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getReportCommits = createAsyncThunk(
  'get/reportcommits',
  async (_, { rejectWithValue }) => {
    try {
      const response = await GeneralApi.get(
        `/report_commits`
      );

      if (response.length === 0) {
        throw new Error('Error al obtener el reporte de commits');
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getReleaseResume = createAsyncThunk(
  'get/resume',
  async (_, { rejectWithValue }) => {
    try {
      const response = await GeneralApi.get(
        `/release_resume`
      );

      if (response.length === 0) {
        throw new Error('Error al obtener el reporte de entregas');
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);