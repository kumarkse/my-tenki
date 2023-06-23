import React from 'react'
import { iconurlfromcode } from '../weatherservice/Servivce'

const Forecast = ({title,items}) => {
  return (
    <div>
        <div className="flex items-center mt-6 justify-start">
            <p className="text-white font-medium uppercase">
                {title}
            </p>
        </div>
        <hr className="my-2" />
        <div className="flex items-center justify-between text-white flex-row">
            {items.map((item) => (
                
            <div className="flex items-center justify-center flex-col">
                <p className="font-light text-sm">{item.title}</p>
                <img src={iconurlfromcode(item.icon)} className='my-1 w-12' alt="" />
                <p className="font-medium">{`${item.temp}`}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Forecast