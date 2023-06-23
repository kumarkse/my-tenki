import React, { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { UilLocationPinAlt } from '@iconscout/react-unicons'
const Inputs = ({setQuery,units,setUnits}) => {

    const  [city,setCity] =  useState("");
    const handleClick =  () =>{
        if(city !== '') setQuery({q:city})
    }

    const handleLocation = () =>{
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition((position) => 
            {
                let lat = position.coords.latitude; 
                let lon = position.coords.longitude;
                setQuery({
                    lat,lon
                })
            })
        }
    }


    const handleUnit = (e) => 
    {
        const selected = e.currentTarget.name;
        if(units!==selected) setUnits(selected);
    }
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4 ">
            <input type="text"
                className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize rounded-2xl'
                placeholder='search your city'
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
            />

            <UilSearch size = {25} className='cursor-pointer text-white transition ease-out hover:scale-125' onClick = {handleClick}/>
            <UilLocationPinAlt size = {25} className='cursor-pointer text-white transition ease-out hover:scale-125' onClick = {handleLocation}/>
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center ">
            <button name='metric' className='text-white text-xl font-light mr-5' onClick = {handleUnit}>
                C
            </button>
            <p></p>
            <button name='imperial' className='text-white text-xl font-light' onClick = {handleUnit}>
                F 
            </button>
        </div>

    </div>
  )
}

export default Inputs