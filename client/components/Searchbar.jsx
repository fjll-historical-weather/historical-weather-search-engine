//client/components/Searchbar.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardContainer from './CardContainer.jsx';

const Searchbar = props => {

  const handleSubmit = (e) => {
    //prevents the page from refreshing on submit
    e.preventDefault();

    //store the input value in a const
    const inputCity = e.target.firstChild.value;
    console.log('handleSubmit inputCity: ', inputCity)

    //write HTTP request
    axios({
      method: 'post',
      url: 'http://localhost:3000/search',
      data: { city: inputCity }
    })
      .then(response => console.log('search POST response: ', response))
      .catch(err => console.log('search POST ERROR: ', err))
  }

  //need second input section for Date? (maybe just month?)
  return (
    <div className="searchbar-div">
      <form className="searchbar" onSubmit={handleSubmit}>
        <input className="search-input" name="search-input" id="search-input" type="text" placeholder="Enter city name here..." required></input>
        <input className="submit-btn" type="submit" value="Search"></input>
      </form>
      <CardContainer />
    </div>
  )
}


export default Searchbar;