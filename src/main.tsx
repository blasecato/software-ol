import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.scss";
import Router from './Router'
import { Provider } from 'react-redux';
import store from './services/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>,
)
