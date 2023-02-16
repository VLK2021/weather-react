import React from 'react';

import './InformationStyle.css';


const Information = ({weather}) => {


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
                <p className={'block'}>Sunrise \ Sunset</p>

                <div>
                    <div>{}</div>
                    <div>{}</div>
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