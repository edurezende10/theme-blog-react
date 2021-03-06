import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Components/Header/Header';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header></Header>
  </React.StrictMode>,
  document.getElementById('root')
);

