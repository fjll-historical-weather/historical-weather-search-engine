//client//components/Card.jsx

import React , {useState, useEffect} from 'react';
import {AreaChart, Area, Tooltip, XAxis, YAxis, CartesianGrid, linearGradient} from 'recharts';

//process data data into months, that can be output as strings


const Card = props => {

    const [cityData, setCityData] = useState(props.data)
    const [cityName, setCityName] = useState(props.city)

    useEffect(() =>{
        console.log('Card.jsx useEffect cityData: ', cityData)
        console.log('Card.jsx useEffect cityName: ', cityName)
    }, [cityData, cityName])

    return (
        <div className='card'>
            <div className="card-header">
                <h3>City Name: {cityName.toUpperCase()}</h3> 
                <div>
                    <img/> 
                </div>
            </div>

            
            <AreaChart width={700} height={250} data={cityData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorTMax" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f87171" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#f87171" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorTMin" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorTAvg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                    
                </defs>
                <XAxis dataKey="date" />
                <YAxis label={{value: 'Degrees °F', angle:-90}}/>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="tmax" stroke="#f87171" fillOpacity={1} fill="url(#colorTMax)" />
                <Area type="monotone" dataKey="tavg" stroke="#82ca9d" fillOpacity={1} fill="url(#colorTAvg)" />
                <Area type="monotone" dataKey="tmin" stroke="#8884d8" fillOpacity={1} fill="url(#colorTMin)" />
            </AreaChart>
        </div>

    )
}

export default Card; 