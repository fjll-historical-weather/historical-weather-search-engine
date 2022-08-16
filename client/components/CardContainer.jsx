//client/component/CardContainer.jsx
import React, {useEffect} from 'react';
import Card from './Card.jsx';


const CardContainer = (props) => {

    return (
        <div className='cardContainer-div'>
            <h2>Average Temperature</h2>
            <div className='cardContainer'>
            <Card city={props.city} data={props.data}/>
            </div>

        </div>
    )
}

export default CardContainer;