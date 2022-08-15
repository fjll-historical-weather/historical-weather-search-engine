//client/components/Searchbar.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardContainer from './CardContainer.jsx';

const Searchbar = props => {

  const [allData, setAllData] = useState()
  const [isClicked, setIsClicked] = useState(false)

  const handleClicked = () => {
    isClicked ? setIsClicked(false) : setIsClicked(true)
  }


  const handleSubmit = (e) => {
    //prevents the page from refreshing on submit
    e.preventDefault();

    //toggles the isClicked state
    handleClicked();
    //first determine is the input is a single city (string) or multiple citys (array of strings)
    //if e.target.firstChild.value is an array....do something
    //else if its just a single string, assign it to a const

    //store the input value in a const
    const inputCity = e.target.firstChild.value;
    console.log('handleSubmit inputCity: ', inputCity)

    //write HTTP request and save location data in our database
    axios({
      method: 'POST',
      url: 'http://localhost:3000/search',
      data: { city: inputCity }
    })
      // .then(res => res.json())
      .then(data => {
        console.log('front end!!', data.data);
      })
    // // get the location data FROM our database
    // .then(
    //   axios({
    //     method: 'POST',
    //     url: 'http://localhost:3000/getCity',
    //     // headers: { 'Content-Type': 'application/json' },
    //     data: { cityName: inputCity }
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log('front end!!!', data);
    //       // setAllData(data[0])
    //     })
    // axios.get('http://localhost:3000/search')
    //   .then(res => {
    //     console.log(res.data);
    //   })

    // .then(response => console.log('search POST response: ', response))
    // .catch(err => console.log('search POST ERROR: ', err))
  }

  return (
    <div className="searchbar-div">
      <form className="searchbar" onSubmit={handleSubmit}>
        <input className="search-input" name="search-input" id="search-input" type="text" placeholder="Enter city name here..." required></input>
        <input className="submit-btn" type="submit" value="Search"></input>
      </form>
      {/* {isClicked ? : <CardContainer inputCity={inputCity} data={allData} />} */}
    </div>
  )
}


export default Searchbar;