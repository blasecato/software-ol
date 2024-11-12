import { AsyncStatus } from "../_common/constants";

export interface IAdmin {
  di: number
  user_id: number
  user: string
  password: string
  location: string
  name: string
}

export interface AuthState {
  authentication: AsyncStatus;
  isAuthenticated: boolean;
}

const authInitialState: AuthState = {
  authentication: {
    loading: 'idle',
    data: null,
    error: null
  },
  isAuthenticated: false,

};

export default authInitialState;
