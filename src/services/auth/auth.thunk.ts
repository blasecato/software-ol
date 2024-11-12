/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SignJWT } from 'jose';
import authApi from './auth.api';

async function generateToken(payload: any) {
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1h')
    .sign(new TextEncoder().encode('your-secret-key'));
  return jwt;
}

export const login = createAsyncThunk(
  'auth/login',
  async ({ user, password }: any, { rejectWithValue }) => {
    try {
      const response = await authApi.get(
        `/login?user=${user}&password=${password}`
      );
      if (response.length === 0 && response[0].id === undefined) {
        throw new Error('Error de autenticación');
      }
      generateToken(response[0]).then(token => {
        localStorage.setItem('Token', token);
      });
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
