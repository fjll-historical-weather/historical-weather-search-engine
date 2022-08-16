//client/components/Searchbar.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardContainer from './CardContainer.jsx';

const Searchbar = props => {

  //[current, updateMethod] = usesState('default') 
  
  const [cityData, setCityData] = useState([]) // cityData = []
  const [isClicked, setIsClicked] = useState(false) // isClicked = true/false
  const [cityName, setCityName] = useState('') // cityName = 'Portland'

  //like componentDidMount triggers on change
  useEffect(() => {
    //console.log('cityData in useEffect: ', cityData)
    //console.log('cityName in useEffect: ', cityName)
  }, [cityData, cityName])


  const handleClicked = () => {
    // isClicked = false
    // reset isclicked to false
    // console.log('isclicked is: ', isClicked);
    isClicked ? setIsClicked(false) : setIsClicked(true)
    // console.log('handleClicked after: ', isClicked)
  }


  const handleSubmit = (e) => {
    //prevents the page from refreshing on submit
    e.preventDefault();

    //console.log('handleSubmit e.target.firstChild.value: ', e.target.firstChild.value)
    
    //first determine is the input is a single city (string) or multiple citys (array of strings)
    //if e.target.firstChild.value is an array....do something
    //else if its just a single string, assign it to a const
    const inputCity = e.target.firstChild.value;
    //store the input value in a const
    //setInputCity(e.target.firstChild.value) 
    //console.log('handleSubmit inputCity: ', inputCity)

    //write HTTP request and save location data in our database
    axios({
      method: 'POST',
      url: 'http://localhost:3000/search',
      data: { city: inputCity }
    })
      .then(data => {
        setCityData(data.data.cityData);
        setCityName(data.data.cityName);
        //console.log('front end!!', data.data);
        handleClicked();
      })
  }

  return (
    <div className="searchbar-div">
      <form className="searchbar" onSubmit={handleSubmit}>
        <input className="search-input" name="search-input" id="search-input" type="text" placeholder="London" required></input>
        <input className="search-btn" type="submit" value="Search"></input>
      </form>
      {isClicked ? <CardContainer city={cityName} data={cityData} /> : <div><h3>Enter city name above...</h3></div>}
    </div>
  )
}


export default Searchbar;