import React, {useEffect, useState} from 'react';

import './InformationStyle.css';


const Information = ({weather}) => {

    const [sun, setSun] = useState({});
    const {results} = sun;

    useEffect(() => {
        fetch(`https://api.sunrise-sunset.org/json?lat=${weather.data.coord.lat}&lng=${weather.data.coord.lon}&date=today`)
            .then(response => response.json())
            .then(value => setSun(value))
    }, [weather.data.coord.lat, weather.data.coord.lon]);


    return (
        <div className={'information'}>
            <div className={'information-main'}>
                <div className={'block'}>
                    <p>Temperature min</p>
                    <div>{weather.data.main.temp_min}<sup>&deg;C</sup></div>
                </div>

                <div className={'block'}>
                    <p>Temperature max</p>
                    <div>{weather.data.main.temp_max}<sup>&deg;C</sup></div>
                </div>

                <div className={'block'}>
                    <p>Humidity</p>
                    <div>{weather.data.main.humidity}%</div>
                </div>

                <div className={'block'}>
                    <p>Pressure</p>
                    <div>{weather.data.main.pressure}hPa</div>
                </div>

            </div>

            <div className={'information-sun'}>
                <div>
                    <div className={'block'}>
                        <p>Sunrise</p>
                        <div>{results?.sunrise}</div>
                    </div>

                    <div className={'block'}>
                        <p>Sunset</p>
                        <div>{results?.sunset}</div>
                    </div>

                    <div className={'block'}>
                        <p>Day length</p>
                        <div>{results?.day_length}</div>
                    </div>

                    <div className={'block'}>
                        <p>Visibility</p>
                        <div>{weather.data.visibility}mi</div>
                    </div>
                </div>
            </div>

            <div className={'information-clouds'}>
                <div className={'block'}>
                    <p>Clouds</p>
                    <div>{weather.data.clouds.all}%</div>
                </div>

                <div className={'block'}>
                    <p>Wind speed</p>
                    <div>{weather.data.wind.speed}km\h</div>
                </div>

                <div className={'block'}>
                    <p>Degrees</p>
                    <div>{weather.data.wind.deg}<sup>&deg;</sup></div>
                </div>

                <div className={'block'}>
                    <p>Wind gust</p>
                    <div>{weather.data.wind.gust}km\h</div>
                </div>
            </div>
        </div>
    );
};

export default Information;