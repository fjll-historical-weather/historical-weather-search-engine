//client/component/CardContainer.jsx
import React, {useEffect} from 'react';
import Card from './Card.jsx';


const CardContainer = (props) => {

    //iterate over the "cities" input array to generate a card for each inputted city
    useEffect(() => {
        console.log('CardContainer props.data: ',props.data)
        console.log('CardContainer props.city: ', props.city)
    })

    return (
        <div className='cardContainer-div'>
            <h2> Where are we going? </h2>
            <div className='cardContainer'>
            {/* <Card city={props.city} data={props.data}/> */}
            </div>

        </div>
    )
}

export default CardContainer;