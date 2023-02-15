import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import {weatherService} from "../../services/weather.service";


const Form = ({setWeather}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "onBlur"});
    const [word, setWord] = useState('');

    useEffect(() => {
        weatherService.getCity(word).then(value => setWeather(value));
    }, [word]);

    const submit = (data) => {
        setWord(data.city);
        console.log(data);
        reset();
    }


    return (
        <div className={'form'}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('city', {
                    required: 'Поле має бути заповнене!',
                    minLength: {
                        value: 3,
                        message: 'мінімальна довжина імені 3 символів'
                    },
                    maxLength: {
                        value: 25,
                        message: 'максимальна довжина 25 символів'
                    }
                })}/>
                <div>
                    {errors?.city && <p>{errors?.city?.message || 'Error'}</p>}
                </div>
                <button disabled={!isValid}>ok</button>
            </form>
        </div>
    );
};

export default Form;