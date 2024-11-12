import { AsyncStatus } from "../_common/constants";

export interface INotification {
  id: number,
  type: string,
  details: string,
  time: string
}

export interface ITasks {
  id: string,
  description: string,
  check: boolean,
  hide: boolean
}

export interface NotificationState {
  notifications: AsyncStatus;
  tasks: AsyncStatus;
}

const notificatuionInitialState: NotificationState = {
  notifications: {
    loading: 'idle',
    data: null,
    error: null
  },
  tasks: {
    loading: 'idle',
    data: null,
    error: null
  },
};

export default notificatuionInitialState;
