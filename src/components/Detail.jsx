import React from 'react'
import { UilArrowUp } from '@iconscout/react-unicons'
import { UilArrowDown } from '@iconscout/react-unicons'
import { UilTemperature } from '@iconscout/react-unicons'
import { UilTear } from '@iconscout/react-unicons'
import { UilWind } from '@iconscout/react-unicons'
import { UilSun } from '@iconscout/react-unicons'
import { UilSunset } from '@iconscout/react-unicons'
import { formatToLocalTime, iconurlfromcode } from '../weatherservice/Servivce'
const Detail = ({weather:{
    details,icon,temp,temp_min,temp_max,sunrise,sunset,speed , humidity,feels_like,timezone
}}) => {
  return (
    <div>
        <div className="flex justify-center items-center py-6 text-white text-xl ">
            <p>{details}</p>
        </div>
        <div className="flex items-center justify-between flex-row py-3 text-white">
            <img src={iconurlfromcode(icon)} alt="" className='w-20'/>
            <p className="text-5xl">{`${temp}`}</p>
            <div className="flex flex-col space-y-2">

                <div className="font-light text-sm flex justify-center items-center">
                    <UilTemperature size={18} className='mr-1'/>
                    feels like
                    <span className="font-medium ml-1">{`${feels_like}`} </span>
                </div>
                <div className="font-light text-sm flex justify-center items-center">
                    <UilTemperature size={18} className='mr-1'/>
                    Humidity
                    <span className="font-medium ml-1">{`${humidity} %`} </span>
                </div>
                <div className="font-light text-sm flex justify-center items-center">
                    <UilTemperature size={18} className='mr-1'/>
                    wind
                    <span className="font-medium ml-1">{`${speed} km/h`} </span>
                </div>
            </div>

        </div>

        <div className="flex flex-row justify-center items-center space-x-2 text-white text-sm py-3">
            <UilSun/>
            <p className="font-light">
                Rise : <span className="font-medium ml-1">{formatToLocalTime(sunrise,timezone, "hh:mm a")}</span>
            </p>
            <p className="font-light">|</p>
            <p className="font-light">
                Set : <span className="font-medium ml-1">{formatToLocalTime(sunset,timezone,"hh:mm a")}</span>
            </p>
            <p className="font-light">|</p>
            <p className="font-light">
                high : <span className="font-medium ml-1">{`${temp_max}`}</span>
            </p>
            <p className="font-light">|</p>
            <p className="font-light">
                Low : <span className="font-medium ml-1">{`${temp_min}`}</span>
            </p>
        </div>
    </div>
  )
}

export default Detail