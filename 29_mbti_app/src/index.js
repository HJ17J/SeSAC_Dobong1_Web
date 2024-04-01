import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import rootReducer from './store/index';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({ reducer: rootReducer });
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
