import React, { useState, useEffect } from "react";

import axios from "axios";

function WeatherFetch() {
    const [weather, setweather] = useState(null);
    const [city,setcity] = useState(null);

    React.useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=901d672d14c778eefb41af3fd3871f1f&units=metric`)
            .then(res => {

                const { main, name, wind, weather } = res.data
                // console.log(main,name,wind,weather)
                setweather({ main, name, wind, weather })



            });
    }, []);
    console.log(weather)
    return (

        <div>
          
            {weather ? (
                <>
                    <h1>City name {weather.name} </h1>
                    <h1> Humidity {weather.main.humidity} </h1>
                    <h1>  Fells Like{weather.main.feels_like}</h1>
                    <h1> Termoreture :{weather.main.temp}</h1>
                </>
            )
                : "loading"
            }
        </div>
    );
}
export default WeatherFetch;