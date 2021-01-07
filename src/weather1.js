import React, { useState, useEffect } from "react";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import axios from "axios";

function WeatherFetch1() {
    const [weather, setweather] = useState(null);
    const [city, setcity] = useState(null);

    React.useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=901d672d14c778eefb41af3fd3871f1f&units=metric`)
            .then(res => {

                const { main, name, wind, weather } = res.data
                // console.log(main,name,wind,weather)
                setweather({ main, name, wind, weather })



            });
    }, [city]);
    console.log(weather)
    return (

        <div  >
            <div className="text-center">
                <input className="main1" type="text" placeholder="Enter City Name" onChange={(e) => { setcity(e.target.value) }} />
            </div>
            {!weather ? (
                <div className="container d-flex justify-content-center">
                    <div className="weather">
                        <div className="row">
                            <div className=" col">
                                <div className="card"> <span className="icon"><img className="img-fluid" src="https://img.icons8.com/emoji/96/000000/sun-emoji.png" /></span>
                                    <div className="title">
                                        <h1> <LocationOnIcon />Sydney</h1>
                                    </div>
                                    <div className="temp mt-2">+20c<sup>°</sup></div>
                                    <div className="row mt-2">
                                        <div className="col-4">
                                            <div className="header">Humidity</div>
                                            <div className="value">--</div>
                                        </div>
                                        <div className="col-4">
                                            <div className="header">Feels Like </div>
                                            <div className="value">--</div>
                                        </div>
                                        <div className="col-4">
                                            <div className="header">Speed</div>
                                            <div className="value">--</div>
                                        </div>

                                        <div className="col-4">
                                                <div className="header">Max-Temp</div>
                                                <div className="value">--</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="header">Min-Temp</div>
                                                <div className="value">--</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="header">Pressure</div>
                                                <div className="value">--</div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div></div></div>

            )
                : <div >
                    <div className="container d-flex justify-content-center">
                        <div className="weather">
                            <div className="row">
                                <div className=" col">
                                    <div className="card"> <span className="icon"><img className="img-fluid" src="https://img.icons8.com/emoji/96/000000/sun-emoji.png" /></span>
                                        <div className="title">
                                            <h1><LocationOnIcon />{weather.name}</h1>
                                        </div>
                                        <div className="temp mt-2">{weather.main.temp}c<sup>°</sup></div>
                                        <div className="row mt-2">
                                            <div className="col-4">
                                                <div className="header">Humidity</div>
                                                <div className="value">{weather.main.humidity}</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="header">Feels Like</div>
                                                <div className="value">{weather.main.feels_like}</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="header">Speed</div>
                                                <div className="value">{weather.wind.speed}</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="header">Max-Temp</div>
                                                <div className="value">{weather.main.temp_max}</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="header">Min-Temp</div>
                                                <div className="value">{weather.main.temp_min}</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="header">Pressure</div>
                                                <div className="value">{weather.main.pressure}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div></div></div>
            }
        </div>
    );
}
export default WeatherFetch1;