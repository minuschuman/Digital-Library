import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));

axios.defaults.baseURL = "https://minus-digitallibrary-api.herokuapp.com/api/";
// axios.defaults.baseURL = "http://127.0.0.1:5000/api/";
// axios.defaults.baseURL = "http://192.168.137.1:5000/api/";
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
