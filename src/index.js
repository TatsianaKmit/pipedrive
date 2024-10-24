import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/style/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/pipedrive">
      <App />
    </Router>
  </React.StrictMode>
);

