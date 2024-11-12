import { AsyncStatus } from '../_common/constants';

export interface IUsers {
  id?: string
  name: string
  last_name: string
  url_photo: string
  rol: number
  list: string
  area: string
}
export interface IUser {
  user: IUsers
}

export interface UsersState {
  listUsers: AsyncStatus
  createUser: AsyncStatus
  deleteUser: AsyncStatus
  updateUser: AsyncStatus
}

const usersInitialState: UsersState = {
  listUsers: {
    loading: 'idle',
    data: null,
    error: null
  },
  createUser: {
    loading: 'idle',
    data: null,
    error: null
  },
  deleteUser: {
    loading: 'idle',
    data: null,
    error: null
  },
  updateUser: {
    loading: 'idle',
    data: null,
    error: null
  },
};

export default usersInitialState;
