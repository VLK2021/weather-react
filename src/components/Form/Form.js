import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import './FormStyle.css';
import {weatherService} from "../../services/weather.service";


const Form = ({setWeather}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "onBlur"});
    const [word, setWord] = useState('');

    useEffect(() => {
        weatherService.getCity(word).then(value => {
            setWeather(value);
        });
    }, [word]);

    const submit = (data) => {
        setWord(data.city);
        reset();
    }


    return (
        <div className={'form'}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('city', {
                    required: 'Поле має бути заповнене!',
                    minLength: {
                        value: 3,
                        message: 'мінімальна довжина імені 3 символи!'
                    },
                    maxLength: {
                        value: 25,
                        message: 'максимальна довжина 25 символів!'
                    },
                    pattern: {
                        value: /^[а-яА-Яa-zA-Z]+$/,
                        message: 'помилка вводу даних!'
                    }
                })}
                placeholder={'Enter city...'}
                />
                <button disabled={!isValid}>ok</button>
                <div className={'error'}>
                    {errors?.city && <p>{errors?.city?.message || 'Error'}</p>}
                </div>
            </form>
        </div>
    );
};

export default Form;