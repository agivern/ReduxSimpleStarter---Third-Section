import axios from 'axios';

const API_KEY = '0596539a41daa2624e1e815712cfa228';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    var url = ROOT_URL + '&q=' + city + ',fr';
    var request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }

}
