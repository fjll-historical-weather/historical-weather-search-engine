//client/component/CardContainer.jsx
import React from 'react';
import Card from './Card.jsx';


const CardContainer = (props) => {

    return (
        <div className='cardContainer-div'>
            <h2> Where are we going? </h2> 
            <div className='cardContainer'>
                <Card />
                <Card />
                <Card />
            </div>
            
        </div>
    )
}

export default CardContainer;