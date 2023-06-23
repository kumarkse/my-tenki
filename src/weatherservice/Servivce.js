import { DateTime } from "luxon";
const API_KEY="4416c0a9ad3ef5ccc1134f55935ca5b7";

// const API_KEY="1fa9ff4126d95b8db54f3897a208e91c";
const BASE_URL = "https://api.openweathermap.org/data/2.5"
const getWeatherData = (infoType,searchParams) => {
    try {
        const url = new URL(BASE_URL + "/"+ infoType);
        url.search = new URLSearchParams({...searchParams , appid: API_KEY});
        return fetch(url).then((res)=>res.json());
    } catch (error) {
        // TypeError: Failed to fetch
        console.log('There was an errorrrrrr', error);
    }
};


const formatCurrentWeather = (data) =>{
    const {
            coord:{lat,lon},
            main:{temp,feels_like , temp_min , temp_max,humidity},
            name,
            dt,
            sys : {country , sunrise ,sunset},
            weather , 
            wind :{speed},

    } =data;
    const {main:details,icon} = weather[0]
    return {lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,details,icon,speed};
};
const getFormattedWeatherData = async(searchParams) =>
{
    
    const formattedCurrentWeather = await getWeatherData("weather",searchParams).then(formatCurrentWeather);
    return {...formattedCurrentWeather}; 
};

const formatToLocalTime = (secs,zone,format = "cccc , dd LLL yyyy' | Local time:'hh:mm a") => 
DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconurlfromcode = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`
export default getFormattedWeatherData;

export {formatToLocalTime , iconurlfromcode};


