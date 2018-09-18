import axios from 'axios';

const API_KEY = `280bbe4efdf3d2ae9a510b56ed9bdcf3`;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},US`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}