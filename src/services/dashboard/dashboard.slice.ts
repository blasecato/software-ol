/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { getWeather, getCardsInfo, getCpuReport, getReportCommits, getReleaseResume } from './dashboard.thunk';
import dashboardInitialState, { DashboardState } from './dashboard.constants';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: dashboardInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state: DashboardState) => {
        state.climate.loading = 'loading';
      })
      .addCase(getWeather.rejected, (state: DashboardState, payload: any) => {
        state.climate = {
          loading: 'failed',
          error: payload,
          data: undefined
        };
      })
      .addCase(getWeather.fulfilled, (state: DashboardState, { payload }: any) => {
        state.climate = {
          loading: 'success',
          error: undefined,
          data: payload
        };
      });

    builder
      .addCase(getCardsInfo.pending, (state: DashboardState) => {
        state.dashboardCards.loading = 'loading';
      })
      .addCase(getCardsInfo.rejected, (state: DashboardState, payload: any) => {
        state.dashboardCards = {
          loading: 'failed',
          error: payload,
          data: undefined
        };
      })
      .addCase(getCardsInfo.fulfilled, (state: DashboardState, { payload }: any) => {
        state.dashboardCards = {
          loading: 'success',
          error: undefined,
          data: payload
        };
      });

    builder
      .addCase(getCpuReport.pending, (state: DashboardState) => {
        state.cpuReport.loading = 'loading';
      })
      .addCase(getCpuReport.rejected, (state: DashboardState, payload: any) => {
        state.cpuReport = {
          loading: 'failed',
          error: payload,
          data: undefined
        };
      })
      .addCase(getCpuReport.fulfilled, (state: DashboardState, { payload }: any) => {
        state.cpuReport = {
          loading: 'success',
          error: undefined,
          data: payload
        };
      });

    builder
      .addCase(getReportCommits.pending, (state: DashboardState) => {
        state.reportCommits.loading = 'loading';
      })
      .addCase(getReportCommits.rejected, (state: DashboardState, payload: any) => {
        state.reportCommits = {
          loading: 'failed',
          error: payload,
          data: undefined
        };
      })
      .addCase(getReportCommits.fulfilled, (state: DashboardState, { payload }: any) => {
        state.reportCommits = {
          loading: 'success',
          error: undefined,
          data: payload
        };
      });

    builder
      .addCase(getReleaseResume.pending, (state: DashboardState) => {
        state.releaseResume.loading = 'loading';
      })
      .addCase(getReleaseResume.rejected, (state: DashboardState, payload: any) => {
        state.releaseResume = {
          loading: 'failed',
          error: payload,
          data: undefined
        };
      })
      .addCase(getReleaseResume.fulfilled, (state: DashboardState, { payload }: any) => {
        state.releaseResume = {
          loading: 'success',
          error: undefined,
          data: payload
        };
      });

  },
});

export default dashboardSlice.reducer;
