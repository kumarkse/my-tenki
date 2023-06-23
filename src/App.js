
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Buttontop from './components/Buttontop';
import Inputs from './components/Inputs';
import Timeloc from './components/Timeloc';
import Detail from './components/Detail';
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
  <div className='h-screen flex '>
    <div className={`mx-auto flexbox  justify-center  items-center rounded-3xl  my-auto max-w-screen-md py-10 px-32 bg-gradient-to-br ${handleBg()} h-fit shadow-xl shadow-gray-400`} >
      <Buttontop setQuery ={setQuery} />
      <Inputs setQuery = {setQuery} units = {units} setUnits={setUnits} />
        {weather && (
          <>
          <Timeloc weather = {weather}/>
          <Detail weather = {weather}/>
          </>
        )}
    </div>
    </div>
  );
}

export default App;
