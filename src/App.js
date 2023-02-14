import {useEffect, useState} from "react";

import './App.css';
import {weatherService} from "./services/weather.service";
import {useForm} from "react-hook-form";


function App() {
    const [weather, setWeather]= useState();
    const [word, setWord] = useState('');
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm();
    console.log(weather);


    useEffect(()=>{
        weatherService.getCity(word).then(value => setWeather(value));
    }, [word]);



    const submit = (data) => {
        setWord(data.city)
        console.log(data);
        reset();
    }


  return (
    <div className="App">
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register('city')}/>
            <button>ok</button>
        </form>

        {word}
    </div>
  );
}

export default App;
