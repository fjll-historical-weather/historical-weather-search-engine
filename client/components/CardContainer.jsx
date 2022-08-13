//client/component/CardContainer.jsx
import React from 'react';
import Card from './Card.jsx';


const CardContainer = (props) => {

    //iterate over the "cities" input array to generate a card for each inputted city

    return (
        <div className='cardContainer-div'>
            <h2> Where are we going? </h2>
            <div className='cardContainer'>
                {/* <Card inputCity={props.inputCity} data={props.data}/> */}
            </div>

        </div>
    )
}

export default CardContainer;