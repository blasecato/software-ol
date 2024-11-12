import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.scss";
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './services/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)