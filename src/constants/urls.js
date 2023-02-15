import {apiKey} from "./key";


export const urls = {
    weather: (city)=> `/weather?appid=${apiKey}&q=${city}&units=metric`
};