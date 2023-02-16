import React, {useState} from 'react';

import './LayoutStyle.css';
import Form from "../components/Form/Form";
import Information from "../components/Information/Information";


const Layout = () => {
    const [weather, setWeather] = useState();
    const [visible, setVisible] = useState(false);

    return (
        <div className={'layout'}>
            <div className={'layout-header'}>
                <p className={'layout-header-tittle'}>the weather APP</p>

                <div className={'layout-form'}>
                    <Form setWeather={setWeather}/>
                </div>
            </div>

            <div>
                {weather &&
                <div className={'layout-main'}>
                    <p className={'layout-main-tittle'}>{weather.data.name}</p>

                    <div className={'layout-main-info'}>
                        <div className="city-temp">
                            {Math.round(weather.data.main.temp)}
                            <sup>&deg;C</sup>
                        </div>

                        <div className={'layout-main-info-day-country'}>
                            <div className={'layout-main-info-day-country-date'}>{new Date().toDateString()}</div>
                            <p>{weather.data.sys.country}</p>
                        </div>

                        <div className="info">
                            <img className="city-icon"
                                 src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
                                 alt={weather.data.weather[0].description}/>
                            <p>{weather.data.weather[0].description}</p>
                        </div>
                    </div>
                </div>
                }
            </div>

            <div className={'btn'}>
                {weather && <button onClick={() => setVisible(!visible)}>more information</button>}
            </div>


            {visible && <div className={'layout-more-info'}>
                <Information weather={weather}/>
            </div>}
        </div>
    );
};

export default Layout;