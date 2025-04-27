import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import App from '@/App';
import './assets/css/index.less'
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
