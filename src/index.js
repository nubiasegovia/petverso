import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'https://petverso-api.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);