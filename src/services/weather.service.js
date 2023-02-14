import axiosService from "./axios.services";
import {urls} from "../constants/urls";


export const weatherService = {
    getCity: (city) => axiosService.get(urls.weather(city)),
}