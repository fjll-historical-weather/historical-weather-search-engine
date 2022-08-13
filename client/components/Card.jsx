//client//components/Card.jsx

import React , {useState, useEffect} from 'react';
import {AreaChart, Area, Tooltip, XAxis, YAxis, CartesianGrid, linearGradient} from 'recharts';

//process data data into months, that can be output as strings


const Card = props => {
    const [month, setMonth] = useState(props.data[0].date);
    const [avgTemp, setAvgTemp] = useState(props.data[0].tavg);
    const [minTemp, setMinTemp] = useState(props.data[0].tmin);
    const [maxTemp, setMaxTemp] = useState(props.data[0].tmax);
    const [inputCity, setInputCity] = useState(props.inputCity);
    console.log('Cards.jsx props: ', props.data[0])
    //img = can be if we have time 
    return (
        <div className='card'>
            <div className="card-header">
                <h3 className='cardTitle'> {inputCity} </h3> 
                <div>
                    <img/> 
                </div>
            </div>
            {/* <ul className='statList'>
                <li>
                    <label className='cardStatLabel'>Month: {month}</label> 
                </li>
                <li> 
                    <label className='cardStatLabel'>Average Temp: {avgTemp} F</label> 
                </li>
                <li> 
                    <label className='cardStatLabel'>Lowest Temp: {minTemp} F</label>
                </li>
                <li> 
                    <label className='cardStatLabel'>Highest Temp: {maxTemp} F</label> 
                </li>
            </ul> */}
            <AreaChart width={700} height={250} data={props.data}
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