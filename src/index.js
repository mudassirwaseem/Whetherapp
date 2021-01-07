import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherFetch from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather2 from './weather2'
import Weather1 from './weather1'
ReactDOM.render(
  <React.StrictMode>
    {/* <WeatherFetch />   */}
    {/* <Weather2/> */}
    <Weather1/>
  </React.StrictMode>,
  document.getElementById('root')
);

