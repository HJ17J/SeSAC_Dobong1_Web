import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Emoji from './practice/Emoji';
import PororoObj from './practice/PororoObj';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Emoji />
    <PororoObj />
  </React.StrictMode>
);
