import React, {useState} from 'react';

import './LayoutStyle.css';
import Form from "../components/Form/Form";


const Layout = () => {
    const [weather, setWeather] = useState();
    console.log(weather);


    return (
        <div className={'layout'}>
            <div className={'layout-header'}>
                <h1>the weather APP</h1>

                <div className={'layout-form'}>
                    <Form setWeather={setWeather}/>
                </div>
            </div>



            <div>
                {weather &&
                <div>
                    {weather.data.name}

                    <div className="city-temp">
                        {Math.round(weather.data.main.temp)}
                        <sup>&deg;C</sup>
                    </div>

                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} alt={weather.data.weather[0].description} />
                        <p>{weather.data.weather[0].description}</p>
                    </div>

                </div>
                }
            </div>
        </div>
    );
};

export default Layout;