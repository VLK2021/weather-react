import React, {useState} from 'react';

import './LayoutStyle.css';
import Form from "../components/Form/Form";


const Layout = () => {
    const [weather, setWeather] = useState();
    console.log(weather);


    return (
        <div className={'layout'}>
            <div className={'form'}>
                <Form setWeather={setWeather}/>
            </div>

            <div>
                {weather &&
                <div>{weather.data.name}</div>
                }
            </div>
        </div>
    );
};

export default Layout;