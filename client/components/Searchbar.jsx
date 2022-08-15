//client/components/Searchbar.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardContainer from './CardContainer.jsx';

const Searchbar = props => {

  const [cityData, setCityData] = useState([])
  const [isClicked, setIsClicked] = useState(false)
  const [cityName, setCityName] = useState('')


  useEffect(() => {
    console.log('cityData in useEffect: ', cityData)
    console.log('cityName in useEffect: ', cityName)
  }, [cityData, cityName])


  const handleClicked = () => {
    isClicked ? setIsClicked(false) : setIsClicked(true)
  
  }


  const handleSubmit = (e) => {
    //prevents the page from refreshing on submit
    e.preventDefault();

    console.log('handleSubmit e.target.firstChild.value: ', e.target.firstChild.value)
    handleClicked();
    //first determine is the input is a single city (string) or multiple citys (array of strings)
    //if e.target.firstChild.value is an array....do something
    //else if its just a single string, assign it to a const
    const inputCity = e.target.firstChild.value;
    //store the input value in a const
    //setInputCity(e.target.firstChild.value) 
    console.log('handleSubmit inputCity: ', inputCity)

    //write HTTP request and save location data in our database
    axios({
      method: 'post',
      url: 'http://localhost:3000/search',
      data: { city: inputCity }
    })
      // get the location data FROM our database
      .then(
        fetch('http://localhost:3000/search')
          .then(res => res.json())
          .then(data => {
            console.log('fetch data data[0]', data[0]);
            setCityData(data[0].cityData)
            setCityName(data[0].cityName)
            
          })
          .then(() => {
            console.log('cityData after fetch: ', cityData)
            console.log('cityName after fetch: ', cityName)
          })
      )
  }

  return (
    <div className="searchbar-div">
      <form className="searchbar" onSubmit={handleSubmit}>
        <input className="search-input" name="search-input" id="search-input" type="text" placeholder="Enter city name here..." required></input>
        <input className="submit-btn" type="submit" value="Search"></input>
      </form>
      {/* {isClicked ? <CardContainer data={cityData}/> : <div><h3>Cards will render here</h3></div>} */}
      {/* <CardContainer data={cityData}/> */}
      {/* {isClicked ? <div><h3>Clicked is true, show card container</h3></div> : <div><h3>Clicked is false, show nothing</h3></div>} */}
      {isClicked ? <CardContainer city={cityName} data={cityData}/> : <div><h3>Clicked is false, show nothing</h3></div>}
    </div>
  )
}


export default Searchbar;