/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { getProjects, createProject, deleteProject, updateProject } from './projects.thunk';
import projectsInitialState, { ProjectsState } from './projects.constants';

const projectsdSlice = createSlice({
  name: 'projects',
  initialState: projectsInitialState,
  reducers: {
    clearCreateProject: (state) => {
      state.createProject = projectsInitialState.createProject;
    },
    clearDeleteProject: (state) => {
      state.deleteProject = projectsInitialState.deleteProject;
    },
    clearUpdateProject: (state) => {
      state.updateProject = projectsInitialState.updateProject;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state: ProjectsState) => {
        state.listProjects.loading = 'loading';
      })
      .addCase(getProjects.rejected, (state: ProjectsState, payload: any) => {
        state.listProjects = {
          loading: 'failed',
          error: payload,
          data: undefined
        };
      })
      .addCase(getProjects.fulfilled, (state: ProjectsState, { payload }: any) => {
        state.listProjects = {
          loading: 'success',
          error: undefined,
          data: payload
        };
      });

    builder
      .addCase(createProject.pending, (state: ProjectsState) => {
        state.createProject.loading = 'loading';
      })
      .addCase(createProject.rejected, (state: ProjectsState, payload: any) => {
        state.createProject = {
          loading: 'failed',
          error: payload,
          data: undefined
        };
      })
      .addCase(createProject.fulfilled, (state: ProjectsState, { payload }: any) => {
        state.createProject = {
          loading: 'success',
          error: undefined,
          data: payload
        };
      });

    builder
      .addCase(updateProject.pending, (state: ProjectsState) => {
        state.updateProject.loading = 'loading';
      })
      .addCase(updateProject.rejected, (state: ProjectsState, payload: any) => {
        state.updateProject = {
          loading: 'failed',
          error: payload,
          data: undefined
        };
      })
      .addCase(updateProject.fulfilled, (state: ProjectsState, { payload }: any) => {
        state.updateProject = {
          loading: 'success',
          error: undefined,
          data: payload
        };
      });

    builder
      .addCase(deleteProject.pending, (state: ProjectsState) => {
        state.deleteProject.loading = 'loading';
      })
      .addCase(deleteProject.rejected, (state: ProjectsState, payload: any) => {
        state.deleteProject = {
          loading: 'failed',
          error: payload,
          data: undefined
        };
      })
      .addCase(deleteProject.fulfilled, (state: ProjectsState, { payload }: any) => {
        state.deleteProject = {
          loading: 'success',
          error: undefined,
          data: payload
        };
      });


  },
});

export const { clearCreateProject, clearDeleteProject, clearUpdateProject } = projectsdSlice.actions;

export default projectsdSlice.reducer;
