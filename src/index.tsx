// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // Use `react-dom/client` in React 18+
import App from './App'; 
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // TypeScript casting for `HTMLElement`
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
