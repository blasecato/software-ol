import { AsyncStatus } from '../_common/constants';

export interface IProjects {
  id?: string
  project_name: string
  repo_url: string
  client: string
  developers: string
  ci: boolean
  cd: boolean
  frontend_tecnology: string
  backend_tecnology: string
  databases: string
  errors_count: number
  warning_count: number
  deploy_count: number
  percentage_completion: number
  report_nc: number
  status: string
}

export interface IProject {
  project: IProjects
}

export interface ProjectsState {
  listProjects: AsyncStatus
  createProject: AsyncStatus
  deleteProject: AsyncStatus
  updateProject: AsyncStatus
}

const projectsInitialState: ProjectsState = {
  listProjects: {
    loading: 'idle',
    data: null,
    error: null
  },
  createProject: {
    loading: 'idle',
    data: null,
    error: null
  },
  deleteProject: {
    loading: 'idle',
    data: null,
    error: null
  },
  updateProject: {
    loading: 'idle',
    data: null,
    error: null
  },
};

export default projectsInitialState;
