import React from 'react'

function Buttontop({setQuery}) {
    const cities = [
        {
            id:1,
            title:"mumbai"
        },
        {
            id:2,
            title:"london"
        },
        {
            id:3,
            title:"delhi"
        },
        {
            id:4,
            title:"tokyo"
        },
        {
            id:5,
            title:"sydney"
        },
    ]
  return <div className="flex items-center justify-center my-6">
        {cities.map((city) => {
            <button key={city.id} className="text-white text-lg font-medium" onClick={() => {setQuery({q:city.title})}}>{city.title}</button>
        })}
        
    </div>
  
}

export default Buttontop