// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Routes
import { BrowserRouter } from 'react-router-dom';

// App
import App from './App';

// Global Styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
