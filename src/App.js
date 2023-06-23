import logo from './logo.svg';
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Buttontop from './components/Buttontop';
import Inputs from './components/Inputs';
import Timeloc from './components/Timeloc';
import Detail from './components/Detail';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './weatherservice/Servivce';
import { useEffect, useState } from 'react';
function App() {

    const [query,setQuery] = useState({q:"delhi"});
    const [units,setUnits] = useState("metric");
    const [weather,setWeather] = useState(null);

  useEffect(() => {
    const fetchweather = async () => {
        await getFormattedWeatherData({...query , units}).then((data) => {setWeather(data); });
  };
  fetchweather(); 
  }, [query,units]);

  const handleBg =() => 
  {
    if(!weather) return "from-cyan-700 to-blue-700";
    const decider = units==="metric"?25:70;
    if(weather.temp<=decider)
    return "from-cyan-700 to-blue-700";
    return 'from-yellow-400 to-orange-400';
  }


  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br ${handleBg()} h-fit shadow-xl shadow-gray-400`} >
      <Buttontop setQuery ={setQuery} />
      <Inputs setQuery = {setQuery} units = {units} setUnits={setUnits} />
        {weather && (
          <>
          <Timeloc weather = {weather}/>
          <Detail weather = {weather}/>
          <Forecast title='hourly forecast' items={weather.hourly}/>
          <Forecast title='daily forecast' items={weather.daily}/>
          </>
        )}
    </div>
  );
}

export default App;
