import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CountryContextProvider} from "./context/useContextCountry";

ReactDOM.render(
  <React.StrictMode>
      <CountryContextProvider>
        <App />
      </CountryContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
