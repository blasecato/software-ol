import { AsyncStatus } from '../_common/constants';

export interface IDashboardCards {
  projects: number
  projects_dev: number
  peding_nc: number
  errors_deploy: number
}
export interface ITime {
  time: string
  value: number
}
export interface ICpuReport {
  percentaje_time: number
  deploys: number
  time: ITime[]
}
export interface IReportCommits {
  month: number
  feat: number
  fix: number
  id: string
}

export interface INcState {
  detected: number
  process: number,
  solved: number
}
export interface ITopProjects {
  name: string
  porcentaje: string,
  is_nc: boolean,
  is_delay: boolean,
  is_deliver: boolean,
  color: string
}

export interface IReleaseResume {
  porcentaje: string
  cicle: string
  nc_state: INcState
  top_projects: ITopProjects[]
}

export interface DashboardState {
  dashboardCards: AsyncStatus,
  cpuReport: AsyncStatus,
  reportCommits: AsyncStatus,
  releaseResume: AsyncStatus,
  climate: AsyncStatus
}

const dashboardInitialState: DashboardState = {
  dashboardCards: {
    loading: 'idle',
    data: null,
    error: null
  },
  cpuReport: {
    loading: 'idle',
    data: null,
    error: null
  },
  reportCommits: {
    loading: 'idle',
    data: null,
    error: null
  },
  releaseResume: {
    loading: 'idle',
    data: null,
    error: null
  },
  climate: {
    loading: 'idle',
    data: null,
    error: null
  },
};

export default dashboardInitialState;
