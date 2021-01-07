import React, { useState, useEffect } from "react";

import axios from "axios";

function WeatherFetch2() {
  const [weather, setweather] = useState(null);
  const [city, setcity] = useState(null);

  React.useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=901d672d14c778eefb41af3fd3871f1f&units=metric`)
      .then(res => {

        const { main, name, wind, weather } = res.data
        setweather({ main, name, wind, weather })
        console.log(res.data)




      });
  }, [city]);
  console.log(weather)
  return (

    <div>
      <input type="text" onChange={(e) => { setcity(e.target.value) }} />


      {weather ? (
        <>
          <div className="card">
            <h2>{weather.name}</h2>
            <h3>Cloudy<span>Wind 10km/h <span className="dot">•</span> Precip 0%</span></h3>
            <h1>{weather.main.temp}°</h1>
            <div className="sky">
              <div className="sun" />
              <div className="cloud">
                <div className="circle-small" />
                <div className="circle-tall" />
                <div className="circle-medium" />
              </div>
            </div>

          </div>
        </>
      )
        : <div className="card">
          <h2>fgyf</h2>
          <h3>Cloudy<span>Wind 10km/h  Precip 0%</span></h3>
          <h1>23°</h1>
          <div className="sky">
            <div className="sun" />
            <div className="cloud">
              <div className="circle-small" />
              <div className="circle-tall" />
              <div className="circle-medium" />
            </div>
          </div>

        </div>
      }
    </div>
  );
}
export default WeatherFetch2;