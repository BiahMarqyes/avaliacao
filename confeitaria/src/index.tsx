import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './pages/Menu/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Menu/>
  </React.StrictMode>
);

