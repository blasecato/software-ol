/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AsyncStatus {
  loading: 'idle' | 'success' | 'failed' | 'loading';
  data: any;
  error: any;
}

