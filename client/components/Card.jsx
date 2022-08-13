//client//components/Card.jsx

import React from 'react';


const Card = props => {

        //img = can be if we have time 
    return (
        <div className='card'>
            <div className="card-header">
                <h3 className='cardTitle'> City Name </h3> 
                <div>
                    <img/> 
                </div>
            </div>
            <ul className='statList'>
                <li>
                    <label className='cardStatLabel'>Month:</label> 
                </li>
                <li> 
                    <label className='cardStatLabel'>Average Temp:</label> 
                </li>
                <li> 
                    <label className='cardStatLabel'>Lowest Temp:</label>
                </li>
                <li> 
                    <label className='cardStatLabel'>Highest Temp:</label> 
                </li>
            </ul>
        </div>

    )
}

export default Card; 